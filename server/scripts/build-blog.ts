import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

interface BlogPostFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  featuredImage: string;
  publishedAt: string;
  readingTime: number;
  isPublished: boolean;
  tags: string[];
}

interface BlogPost extends BlogPostFrontmatter {
  id: string;
  content: string;
  updatedAt: string;
}

async function buildBlogPosts() {
  const contentDir = path.join(process.cwd(), "content", "blog");
  const outputDir = path.join(process.cwd(), "generated");
  const outputFile = path.join(outputDir, "blog.json");

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Check if content directory exists
  if (!fs.existsSync(contentDir)) {
    console.warn(`Content directory not found: ${contentDir}`);
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
    return;
  }

  // Read all markdown files
  const files = fs.readdirSync(contentDir).filter(file => file.endsWith(".md"));

  const posts: BlogPost[] = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Parse frontmatter and content
    const { data, content } = matter(fileContent);

    // Validate required fields
    const frontmatter = data as BlogPostFrontmatter;
    
    if (!frontmatter.slug || !frontmatter.title) {
      console.warn(`Skipping ${file}: missing required fields (slug or title)`);
      continue;
    }

    // Create blog post object
    const post: BlogPost = {
      id: frontmatter.slug, // Use slug as ID for file-based system
      title: frontmatter.title,
      slug: frontmatter.slug,
      excerpt: frontmatter.excerpt || "",
      category: frontmatter.category || "",
      author: frontmatter.author || "Your Company Team",
      authorRole: frontmatter.authorRole || "",
      featuredImage: frontmatter.featuredImage || "",
      publishedAt: frontmatter.publishedAt || new Date().toISOString(),
      updatedAt: frontmatter.publishedAt || new Date().toISOString(),
      readingTime: frontmatter.readingTime || 5,
      isPublished: frontmatter.isPublished !== false, // Default to true
      tags: frontmatter.tags || [],
      content: content.trim(),
    };

    posts.push(post);
  }

  // Sort posts by publishedAt (newest first)
  posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  // Write JSON file
  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));

  console.log(`✅ Built ${posts.length} blog posts to ${outputFile}`);
  
  // Log summary
  posts.forEach(post => {
    const dateStr = typeof post.publishedAt === 'string' 
      ? post.publishedAt.split('T')[0] 
      : new Date(post.publishedAt).toISOString().split('T')[0];
    console.log(`  - ${post.title} (${dateStr}) [${post.isPublished ? 'Published' : 'Draft'}]`);
  });
}

// Run the build
buildBlogPosts().catch(console.error);
