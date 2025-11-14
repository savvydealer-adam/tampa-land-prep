import { chromium, Browser, Page } from 'playwright';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

export interface ExtractedPage {
  url: string;
  title: string;
  description: string;
  content: string;
  htmlContent: string;
  type: 'blog' | 'homepage' | 'about' | 'services' | 'contact' | 'other';
  publishedDate?: string; // ISO 8601 date string
  author?: string;
  images: string[];
  headings: Array<{ level: number; text: string }>;
  metadata: {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };
}

export interface AnalysisResult {
  domain: string;
  pages: ExtractedPage[];
  blogPosts: ExtractedPage[];
  mainPages: ExtractedPage[];
  totalPages: number;
}

export class ContentExtractor {
  private browser: Browser | null = null;
  private turndownService: TurndownService;

  constructor() {
    this.turndownService = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced',
    });
  }

  async init() {
    if (!this.browser) {
      this.browser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }

  async analyzeDomain(domain: string, maxPages = 20): Promise<AnalysisResult> {
    await this.init();
    
    const normalizedDomain = this.normalizeDomain(domain);
    const discoveredUrls = await this.discoverPages(normalizedDomain, maxPages);
    
    const pages: ExtractedPage[] = [];
    for (const url of discoveredUrls) {
      try {
        const extractedPage = await this.extractPage(url);
        pages.push(extractedPage);
      } catch (error) {
        console.error(`Failed to extract ${url}:`, error);
      }
    }

    const blogPosts = pages.filter(p => p.type === 'blog');
    const mainPages = pages.filter(p => p.type !== 'blog');

    return {
      domain: normalizedDomain,
      pages,
      blogPosts,
      mainPages,
      totalPages: pages.length,
    };
  }

  private normalizeDomain(domain: string): string {
    let normalized = domain.trim();
    if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
      normalized = 'https://' + normalized;
    }
    return normalized;
  }

  private async discoverPages(baseUrl: string, maxPages: number): Promise<string[]> {
    const urls = new Set<string>([baseUrl]);
    const visited = new Set<string>();
    const page = await this.browser!.newPage();
    const baseUrlObj = new URL(baseUrl);

    try {
      // First try to get sitemap
      const sitemapUrls = await this.getSitemapUrls(baseUrl);
      sitemapUrls.forEach(url => {
        if (url.startsWith(baseUrl)) {
          urls.add(url);
        }
      });

      // Navigate to homepage to discover links
      await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 30000 });
      
      // Extract all links from the page
      const allLinks = await page.evaluate(() => {
        const links: string[] = [];
        document.querySelectorAll('a[href]').forEach((link) => {
          const href = (link as HTMLAnchorElement).href;
          if (href && !href.includes('#') && !href.includes('javascript:')) {
            links.push(href);
          }
        });
        return links;
      });

      // Filter to same-origin links and prioritize blog URLs
      const blogUrls: string[] = [];
      const otherUrls: string[] = [];

      allLinks.forEach(url => {
        try {
          const urlObj = new URL(url);
          // Only same origin
          if (urlObj.origin === baseUrlObj.origin) {
            const urlLower = url.toLowerCase();
            // Prioritize blog-looking URLs
            if (urlLower.includes('/blog') || urlLower.includes('/post') || 
                urlLower.includes('/article') || urlLower.includes('/news')) {
              blogUrls.push(url);
            } else {
              otherUrls.push(url);
            }
          }
        } catch (e) {
          // Invalid URL, skip
        }
      });

      // Add blog URLs first, then other URLs
      [...blogUrls, ...otherUrls].forEach(url => {
        if (urls.size < maxPages) {
          urls.add(url);
        }
      });

    } catch (error) {
      console.error('Error discovering pages:', error);
    } finally {
      await page.close();
    }

    return Array.from(urls).slice(0, maxPages);
  }

  private async getSitemapUrls(baseUrl: string): Promise<string[]> {
    const page = await this.browser!.newPage();
    const urls: string[] = [];

    try {
      const sitemapUrl = new URL('/sitemap.xml', baseUrl).toString();
      const response = await page.goto(sitemapUrl, { timeout: 10000 });
      
      if (response && response.ok()) {
        const content = await page.content();
        const $ = cheerio.load(content, { xmlMode: true });
        
        $('url > loc').each((_, elem) => {
          urls.push($(elem).text());
        });
      }
    } catch (error) {
      // Sitemap not found or error - that's okay
    } finally {
      await page.close();
    }

    return urls;
  }

  async extractPage(url: string): Promise<ExtractedPage> {
    const page = await this.browser!.newPage();
    
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      
      const html = await page.content();
      const $ = cheerio.load(html);

      // Extract metadata
      const title = await page.title();
      const description = $('meta[name="description"]').attr('content') || '';
      const ogTitle = $('meta[property="og:title"]').attr('content');
      const ogDescription = $('meta[property="og:description"]').attr('content');
      const ogImage = $('meta[property="og:image"]').attr('content');

      // Extract images
      const images: string[] = [];
      $('img').each((_, elem) => {
        const src = $(elem).attr('src');
        if (src) {
          const absoluteSrc = new URL(src, url).toString();
          images.push(absoluteSrc);
        }
      });

      // Extract headings
      const headings: Array<{ level: number; text: string }> = [];
      $('h1, h2, h3, h4, h5, h6').each((_, elem) => {
        const level = parseInt(elem.tagName[1]);
        const text = $(elem).text().trim();
        if (text) {
          headings.push({ level, text });
        }
      });

      // Use Readability to extract main content
      const dom = new JSDOM(html, { url });
      const reader = new Readability(dom.window.document);
      const article = reader.parse();

      const content = article?.textContent || '';
      const htmlContent = article?.content || '';

      // Detect page type
      const pageType = this.detectPageType(url, title, content, headings);

      // Try to extract publish date for blog posts - normalize to ISO string
      let publishedDate: string | undefined;
      let author: string | undefined;

      if (pageType === 'blog') {
        const extractedDate = this.extractPublishDate($, content);
        if (extractedDate) {
          try {
            publishedDate = extractedDate.toISOString();
          } catch (error) {
            // Invalid date, leave undefined
            console.warn(`[ContentExtractor] Invalid publish date for ${url}`);
          }
        }
        author = this.extractAuthor($);
      }

      await page.close();

      return {
        url,
        title,
        description,
        content,
        htmlContent,
        type: pageType,
        publishedDate,
        author,
        images: images.slice(0, 5), // Limit to 5 images per page
        headings,
        metadata: {
          ogTitle,
          ogDescription,
          ogImage,
        },
      };

    } catch (error) {
      await page.close();
      throw error;
    }
  }

  private detectPageType(
    url: string,
    title: string,
    content: string,
    headings: Array<{ level: number; text: string }>
  ): ExtractedPage['type'] {
    const urlLower = url.toLowerCase();
    const titleLower = title.toLowerCase();

    // Blog detection
    const blogIndicators = [
      '/blog/',
      '/post/',
      '/article/',
      '/news/',
      '/updates/',
      '/insights/',
    ];

    if (blogIndicators.some(indicator => urlLower.includes(indicator))) {
      return 'blog';
    }

    // Homepage detection - check if URL is just the domain with optional trailing slash
    const urlObj = new URL(url);
    const isHomepage = urlObj.pathname === '/' || urlObj.pathname === '';
    if (isHomepage) {
      return 'homepage';
    }

    // About page detection
    if (urlLower.includes('/about') || titleLower.includes('about')) {
      return 'about';
    }

    // Services page detection
    if (
      urlLower.includes('/service') ||
      urlLower.includes('/product') ||
      titleLower.includes('service') ||
      titleLower.includes('product')
    ) {
      return 'services';
    }

    // Contact page detection
    if (
      urlLower.includes('/contact') ||
      titleLower.includes('contact') ||
      content.toLowerCase().includes('contact us')
    ) {
      return 'contact';
    }

    return 'other';
  }

  private extractPublishDate($: cheerio.CheerioAPI, content: string): Date | undefined {
    // Try various meta tags
    const dateSelectors = [
      'meta[property="article:published_time"]',
      'meta[name="publish_date"]',
      'meta[name="date"]',
      'time[datetime]',
      '.published',
      '.post-date',
      '.entry-date',
    ];

    for (const selector of dateSelectors) {
      const elem = $(selector).first();
      const dateStr = elem.attr('content') || elem.attr('datetime') || elem.text();
      
      if (dateStr) {
        const date = new Date(dateStr);
        if (!isNaN(date.getTime())) {
          return date;
        }
      }
    }

    // Try to find date patterns in content
    const datePattern = /(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{1,2},? \d{4}/i;
    const match = content.match(datePattern);
    
    if (match) {
      const date = new Date(match[0]);
      if (!isNaN(date.getTime())) {
        return date;
      }
    }

    return undefined;
  }

  private extractAuthor($: cheerio.CheerioAPI): string | undefined {
    const authorSelectors = [
      'meta[name="author"]',
      'meta[property="article:author"]',
      '.author',
      '.byline',
      '[rel="author"]',
    ];

    for (const selector of authorSelectors) {
      const elem = $(selector).first();
      const author = elem.attr('content') || elem.text().trim();
      if (author) {
        return author.replace(/^by\s+/i, '').trim();
      }
    }

    return undefined;
  }

  convertToMarkdown(html: string): string {
    return this.turndownService.turndown(html);
  }
}
