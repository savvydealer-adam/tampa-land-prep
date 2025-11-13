import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { execSync } from "child_process";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  featuredImage: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  isPublished: boolean;
  tags: string[];
  content: string;
}

// Cache for blog posts
let cachedPosts: BlogPost[] | null = null;
let lastLoadTime = 0;
const CACHE_TTL = 5000; // 5 seconds in development

/**
 * Rebuild blog JSON from Markdown files
 */
function rebuildBlogJSON(): void {
  try {
    console.log("[Blog] Rebuilding JSON from Markdown files...");
    execSync("tsx server/scripts/build-blog.ts", { stdio: "inherit" });
    
    // Clear cache to force reload
    cachedPosts = null;
    lastLoadTime = 0;
    
    console.log("[Blog] JSON rebuild complete");
  } catch (error) {
    console.error("[Blog] Failed to rebuild JSON:", error);
    throw error;
  }
}

/**
 * Initialize blog system - rebuild JSON on server startup
 */
export function initializeBlog(): void {
  console.log("[Blog] Initializing blog system...");
  rebuildBlogJSON();
}

/**
 * Sanitize slug to prevent path traversal attacks
 */
function sanitizeSlug(slug: string): string {
  // Only allow alphanumeric, hyphens, and underscores
  // Remove any path separators or dots
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, "-")
    .replace(/^-+|-+$/g, "") // Remove leading/trailing hyphens
    .substring(0, 200); // Limit length
}

/**
 * Load blog posts from generated JSON file
 */
export function loadBlogPosts(): BlogPost[] {
  const now = Date.now();
  
  // Return cached posts if still fresh
  if (cachedPosts && (now - lastLoadTime) < CACHE_TTL) {
    return cachedPosts;
  }

  const jsonPath = path.join(process.cwd(), "generated", "blog.json");
  
  // If JSON doesn't exist, return empty array
  if (!fs.existsSync(jsonPath)) {
    console.warn("Blog JSON not found. Run: tsx server/scripts/build-blog.ts");
    cachedPosts = [];
    lastLoadTime = now;
    return cachedPosts;
  }

  try {
    const jsonContent = fs.readFileSync(jsonPath, "utf-8");
    cachedPosts = JSON.parse(jsonContent);
    lastLoadTime = now;
    return cachedPosts!;
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
}

/**
 * Get all published blog posts
 */
export function getPublishedPosts(isAuthenticated: boolean = false): BlogPost[] {
  const posts = loadBlogPosts();
  
  // If user is authenticated (admin), show all posts
  if (isAuthenticated) {
    return posts;
  }
  
  // Otherwise, only show published posts
  return posts.filter(post => post.isPublished);
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string, isAuthenticated: boolean = false): BlogPost | null {
  const posts = loadBlogPosts();
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return null;
  }
  
  // If post is unpublished and user is not authenticated, deny access
  if (!post.isPublished && !isAuthenticated) {
    return null;
  }
  
  return post;
}

/**
 * Get unique tags from all published posts
 */
export function getAllTags(): string[] {
  const posts = getPublishedPosts();
  const tagsSet = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => tagsSet.add(tag));
  });
  
  return Array.from(tagsSet).sort();
}

/**
 * Save a blog post to Markdown file
 */
export async function saveBlogPost(postData: Partial<BlogPost>): Promise<BlogPost> {
  const contentDir = path.join(process.cwd(), "content", "blog");
  
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }
  
  // Generate and sanitize slug
  const rawSlug = postData.slug || generateSlug(postData.title || "untitled");
  const slug = sanitizeSlug(rawSlug);
  
  if (!slug) {
    throw new Error("Invalid slug: must contain at least one alphanumeric character");
  }
  
  const fileName = `${slug}.md`;
  const filePath = path.join(contentDir, fileName);
  
  // Prepare frontmatter
  const frontmatter = {
    title: postData.title || "",
    slug: slug,
    excerpt: postData.excerpt || "",
    category: postData.category || "",
    author: postData.author || "Savvy Dealer Team",
    authorRole: postData.authorRole || "",
    featuredImage: postData.featuredImage || "",
    publishedAt: postData.publishedAt || new Date().toISOString(),
    readingTime: postData.readingTime || 5,
    isPublished: postData.isPublished !== false,
    tags: postData.tags || [],
  };
  
  // Create markdown content
  const content = postData.content || "";
  const fileContent = matter.stringify(content, frontmatter);
  
  // Write file
  fs.writeFileSync(filePath, fileContent);
  
  // Rebuild JSON immediately after saving
  rebuildBlogJSON();
  
  // Return the saved post
  return {
    id: slug,
    ...frontmatter,
    content,
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Delete a blog post Markdown file
 */
export async function deleteBlogPost(slug: string): Promise<boolean> {
  // Sanitize slug before using in file path
  const safeSlug = sanitizeSlug(slug);
  
  if (!safeSlug) {
    return false;
  }
  
  const contentDir = path.join(process.cwd(), "content", "blog");
  const fileName = `${safeSlug}.md`;
  const filePath = path.join(contentDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    return false;
  }
  
  fs.unlinkSync(filePath);
  
  // Rebuild JSON immediately after deletion
  rebuildBlogJSON();
  
  return true;
}

/**
 * Generate a URL-friendly slug from a title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
