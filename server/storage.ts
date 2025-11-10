import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type BlogTag, type InsertBlogTag } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { blogPosts, blogTags, postTags } from "@shared/schema";
import { eq, desc, and, or, like, inArray } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllBlogPosts(options?: { published?: boolean; category?: string; tag?: string; limit?: number }): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getBlogPostById(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<void>;
  
  getAllTags(): Promise<BlogTag[]>;
  getTagBySlug(slug: string): Promise<BlogTag | undefined>;
  createTag(tag: InsertBlogTag): Promise<BlogTag>;
  deleteTag(id: string): Promise<void>;
  
  addTagToPost(postId: string, tagId: string): Promise<void>;
  removeTagFromPost(postId: string, tagId: string): Promise<void>;
  getPostTags(postId: string): Promise<BlogTag[]>;
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from({ users: {} as any }).where(eq({} as any, id)).limit(1);
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    return user;
  }

  async getAllBlogPosts(options?: { published?: boolean; category?: string; tag?: string; limit?: number }): Promise<BlogPost[]> {
    if (options?.tag) {
      const tagRecord = await this.getTagBySlug(options.tag);
      if (!tagRecord) {
        return [];
      }

      const postsWithTag = await db
        .select({
          id: blogPosts.id,
          title: blogPosts.title,
          slug: blogPosts.slug,
          excerpt: blogPosts.excerpt,
          content: blogPosts.content,
          featuredImage: blogPosts.featuredImage,
          author: blogPosts.author,
          authorRole: blogPosts.authorRole,
          publishedAt: blogPosts.publishedAt,
          updatedAt: blogPosts.updatedAt,
          isPublished: blogPosts.isPublished,
          readingTime: blogPosts.readingTime,
          category: blogPosts.category,
        })
        .from(blogPosts)
        .innerJoin(postTags, eq(postTags.postId, blogPosts.id))
        .where(
          and(
            eq(postTags.tagId, tagRecord.id),
            options?.published !== undefined ? eq(blogPosts.isPublished, options.published) : undefined,
            options?.category ? eq(blogPosts.category, options.category) : undefined
          )
        )
        .orderBy(desc(blogPosts.publishedAt))
        .limit(options?.limit || 1000);

      return postsWithTag;
    }

    let query = db.select().from(blogPosts);
    
    const conditions = [];
    if (options?.published !== undefined) {
      conditions.push(eq(blogPosts.isPublished, options.published));
    }
    if (options?.category) {
      conditions.push(eq(blogPosts.category, options.category));
    }
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }
    
    query = query.orderBy(desc(blogPosts.publishedAt)) as any;
    
    if (options?.limit) {
      query = query.limit(options.limit) as any;
    }
    
    return await query;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
    return post;
  }

  async getBlogPostById(id: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
    return post;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db.insert(blogPosts).values(post).returning();
    return newPost;
  }

  async updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const [updated] = await db.update(blogPosts).set(post).where(eq(blogPosts.id, id)).returning();
    return updated;
  }

  async deleteBlogPost(id: string): Promise<void> {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }

  async getAllTags(): Promise<BlogTag[]> {
    return await db.select().from(blogTags).orderBy(blogTags.name);
  }

  async getTagBySlug(slug: string): Promise<BlogTag | undefined> {
    const [tag] = await db.select().from(blogTags).where(eq(blogTags.slug, slug)).limit(1);
    return tag;
  }

  async createTag(tag: InsertBlogTag): Promise<BlogTag> {
    const [newTag] = await db.insert(blogTags).values(tag).returning();
    return newTag;
  }

  async deleteTag(id: string): Promise<void> {
    await db.delete(blogTags).where(eq(blogTags.id, id));
  }

  async addTagToPost(postId: string, tagId: string): Promise<void> {
    await db.insert(postTags).values({ postId, tagId });
  }

  async removeTagFromPost(postId: string, tagId: string): Promise<void> {
    await db.delete(postTags).where(and(eq(postTags.postId, postId), eq(postTags.tagId, tagId)));
  }

  async getPostTags(postId: string): Promise<BlogTag[]> {
    const tags = await db
      .select({
        id: blogTags.id,
        name: blogTags.name,
        slug: blogTags.slug,
      })
      .from(postTags)
      .innerJoin(blogTags, eq(postTags.tagId, blogTags.id))
      .where(eq(postTags.postId, postId));
    
    return tags;
  }
}

export const storage = new DbStorage();
