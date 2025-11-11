import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, integer, jsonb, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Session storage table for Replit Auth
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table for Replit Auth
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email"),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  featuredImage: text("featured_image"),
  author: text("author").notNull(),
  authorRole: text("author_role"),
  publishedAt: timestamp("published_at").notNull(),
  updatedAt: timestamp("updated_at").notNull().default(sql`now()`),
  isPublished: boolean("is_published").notNull().default(true),
  readingTime: integer("reading_time"),
  category: text("category"),
});

export const blogTags = pgTable("blog_tags", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
});

export const postTags = pgTable("post_tags", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  postId: varchar("post_id").notNull().references(() => blogPosts.id, { onDelete: "cascade" }),
  tagId: varchar("tag_id").notNull().references(() => blogTags.id, { onDelete: "cascade" }),
});

export const blogPostsRelations = relations(blogPosts, ({ many }) => ({
  tags: many(postTags),
}));

export const blogTagsRelations = relations(blogTags, ({ many }) => ({
  posts: many(postTags),
}));

export const postTagsRelations = relations(postTags, ({ one }) => ({
  post: one(blogPosts, {
    fields: [postTags.postId],
    references: [blogPosts.id],
  }),
  tag: one(blogTags, {
    fields: [postTags.tagId],
    references: [blogTags.id],
  }),
}));

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  updatedAt: true,
});

export const insertBlogTagSchema = createInsertSchema(blogTags).omit({
  id: true,
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogTag = z.infer<typeof insertBlogTagSchema>;
export type BlogTag = typeof blogTags.$inferSelect;

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dealership: z.string().min(2, "Dealership name must be at least 2 characters"),
  message: z.string().optional(),
});

export type LeadFormSubmission = z.infer<typeof leadFormSchema>;

export const demoBookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dealership: z.string().min(2, "Dealership name is required"),
  date: z.enum(["2026-02-04", "2026-02-05", "2026-02-06"]),
  time: z.string().min(1, "Please select a time"),
});

export type DemoBooking = z.infer<typeof demoBookingSchema>;
