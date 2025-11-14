import { promises as fs } from 'fs';
import path from 'path';
import type { ExtractedPage } from './contentExtractor';
import TurndownService from 'turndown';

interface ImportOptions {
  companyName?: string;
  downloadImages?: boolean;
}

interface ImportRequest {
  blogPosts: ExtractedPage[];
  pages: ExtractedPage[];
  options: ImportOptions;
}

interface ImportResult {
  success: boolean;
  blogPostsCreated: number;
  pagesCreated: number;
  imagesDownloaded: number;
  errors: string[];
}

export async function generateImportedContent(request: ImportRequest): Promise<ImportResult> {
  const { blogPosts, pages, options } = request;
  const errors: string[] = [];
  let blogPostsCreated = 0;
  let pagesCreated = 0;
  let imagesDownloaded = 0;

  // Process blog posts - convert to Markdown
  for (const post of blogPosts) {
    try {
      await createBlogPostMarkdown(post, options);
      blogPostsCreated++;
    } catch (error: any) {
      errors.push(`Failed to create blog post "${post.title}": ${error.message}`);
    }
  }

  // Note: Main pages are returned in the analysis for reference, but not automatically
  // imported. Users should manually create React pages using the template's existing
  // components (Hero, Features, CTAs) based on the extracted content.
  console.log(`[Import] ${pages.length} main pages available for manual page creation`);
  pagesCreated = 0; // Not actually created, just logged

  return {
    success: errors.length === 0,
    blogPostsCreated,
    pagesCreated,
    imagesDownloaded,
    errors,
  };
}

async function createBlogPostMarkdown(page: ExtractedPage, options: ImportOptions): Promise<void> {
  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
  });

  // Generate slug from title
  const slug = generateSlug(page.title);
  
  // Convert HTML content to Markdown - fallback to plain text if HTML is empty
  let markdownContent: string;
  if (page.htmlContent && page.htmlContent.trim()) {
    markdownContent = turndown.turndown(page.htmlContent);
  } else if (page.content && page.content.trim()) {
    // Use plain text content as fallback
    markdownContent = page.content;
  } else {
    throw new Error(`No content available for blog post: ${page.title}`);
  }

  // Create frontmatter
  const frontmatter = createBlogFrontmatter(page, slug, options);

  // Combine frontmatter and content
  const fullMarkdown = `---
${frontmatter}---

${markdownContent}
`;

  // Write to file
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  await fs.mkdir(blogDir, { recursive: true });
  
  const filename = `${slug}.md`;
  const filepath = path.join(blogDir, filename);
  
  await fs.writeFile(filepath, fullMarkdown, 'utf-8');
  console.log(`[Import] Created blog post: ${filename}`);
}

function createBlogFrontmatter(page: ExtractedPage, slug: string, options: ImportOptions): string {
  const lines: string[] = [];
  
  lines.push(`title: "${escapeFrontmatter(page.title)}"`);
  lines.push(`slug: ${slug}`);
  
  // Use description or first 200 chars of content as excerpt
  const excerpt = page.description || page.content.substring(0, 200).trim() + '...';
  lines.push(`excerpt: "${escapeFrontmatter(excerpt)}"`);
  
  // Author
  const author = page.author || (options.companyName || 'Team');
  lines.push(`author: ${author}`);
  
  // Published date - publishedDate is already an ISO string or undefined
  let publishedDate: string;
  if (page.publishedDate) {
    try {
      // Validate the ISO string
      const dateObj = new Date(page.publishedDate);
      if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date');
      }
      publishedDate = formatDate(page.publishedDate);
    } catch (error) {
      // If date parsing fails, use today's date
      console.warn(`[Import] Invalid date for ${page.title}, using today's date`);
      publishedDate = formatDate(new Date());
    }
  } else {
    publishedDate = formatDate(new Date());
  }
  lines.push(`publishedAt: ${publishedDate}`);
  
  // Category - try to infer from URL or use default
  const category = inferCategory(page.url);
  if (category) {
    lines.push(`category: ${category}`);
  }
  
  // Tags - use empty array for now
  lines.push(`tags: []`);
  
  // Published status
  lines.push(`published: true`);
  
  // Featured image - use OG image if available, otherwise first image
  const featuredImage = page.metadata?.ogImage || (page.images.length > 0 ? page.images[0] : null);
  if (featuredImage) {
    lines.push(`featuredImage: ${featuredImage}`);
  }
  
  return lines.join('\n') + '\n';
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 100);
}

function escapeFrontmatter(text: string): string {
  return text
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ')
    .trim();
}

function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date');
  }
  
  return dateObj.toISOString().split('T')[0];
}

function inferCategory(url: string): string | null {
  const urlLower = url.toLowerCase();
  
  const categoryMap: Record<string, string> = {
    '/news/': 'News',
    '/insights/': 'Insights',
    '/guides/': 'Guides',
    '/tips/': 'Tips',
    '/tutorials/': 'Tutorials',
    '/updates/': 'Updates',
    '/announcements/': 'Announcements',
  };
  
  for (const [pattern, category] of Object.entries(categoryMap)) {
    if (urlLower.includes(pattern)) {
      return category;
    }
  }
  
  return null;
}
