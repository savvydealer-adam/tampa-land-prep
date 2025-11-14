import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, User, Tag, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { FileBlogPost } from "@shared/schema";

function renderMarkdownContent(content: string): string {
  let html = content;
  
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-2xl font-serif font-bold mt-8 mb-4">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-3xl font-serif font-bold mt-12 mb-6">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-4xl font-serif font-bold mt-12 mb-6">$1</h1>');
  
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  html = html.replace(/\n\n/g, '</p><p class="mb-4">');
  html = '<p class="mb-4">' + html + '</p>';
  
  return html;
}

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, isError } = useQuery<FileBlogPost>({
    queryKey: ["/api/blog/posts", slug],
    queryFn: async () => {
      if (!slug) throw new Error("No slug provided");
      const response = await fetch(`/api/blog/posts/${slug}`);
      if (!response.ok) {
        if (response.status === 404) throw new Error("Post not found");
        throw new Error("Failed to fetch post");
      }
      return response.json();
    },
    enabled: !!slug,
  });

  const formatDate = (dateInput: string | Date) => {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const publishedTime = post?.publishedAt ? new Date(post.publishedAt).toISOString() : '';
  const modifiedTime = post?.updatedAt ? new Date(post.updatedAt).toISOString() : '';

  const blogPostingSchema = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.featuredImage || undefined,
    "datePublished": publishedTime,
    "dateModified": modifiedTime,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorRole || undefined
    },
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yoursite.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yoursite.com/blog/${post.slug}`
    },
    "articleSection": post.category || undefined
  } : null;

  if (!match) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      {post && (
        <Helmet>
          <title>{post.title} | Blog</title>
          <meta name="description" content={post.excerpt} />
          
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://yoursite.com/blog/${post.slug}`} />
          {post.featuredImage && (
            <meta property="og:image" content={post.featuredImage} />
          )}
          
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime} />
          <meta property="article:author" content={post.author} />
          {post.category && (
            <meta property="article:section" content={post.category} />
          )}
          
          {blogPostingSchema && (
            <script type="application/ld+json">
              {JSON.stringify(blogPostingSchema)}
            </script>
          )}
        </Helmet>
      )}
      
      <Header />
      
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {isLoading ? (
          <div className="min-h-screen bg-background py-24">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <Skeleton className="h-8 w-32 mb-8" />
              <Skeleton className="h-4 w-24 mb-4" />
              <Skeleton className="h-16 w-full mb-4" />
              <Skeleton className="h-6 w-3/4 mb-8" />
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-5 w-28" />
              </div>
              
              <Skeleton className="h-96 w-full rounded-lg mb-12" />
              
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        ) : isError || !post ? (
          <div className="min-h-screen bg-background py-24">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-serif font-bold mb-6" data-testid="text-404-title">
                Post Not Found
              </h1>
              <p className="text-xl text-muted-foreground mb-8" data-testid="text-404-message">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Link href="/blog">
                <Button variant="outline" data-testid="button-back-to-blog-404">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-background py-12">
              <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <Link href="/blog">
                  <Button 
                    variant="ghost" 
                    className="mb-8 -ml-4" 
                    data-testid="button-back-to-blog"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>

                <article>
                  <header className="mb-12">
                    {post.category && (
                      <Badge 
                        variant="secondary" 
                        className="mb-6" 
                        data-testid="badge-category"
                      >
                        {post.category}
                      </Badge>
                    )}
                    
                    <h1 
                      className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight" 
                      data-testid="text-post-title"
                    >
                      {post.title}
                    </h1>
                    
                    <p 
                      className="text-xl text-muted-foreground mb-8" 
                      data-testid="text-post-excerpt"
                    >
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                      <div className="flex items-center gap-2" data-testid="section-author">
                        <User className="w-4 h-4" />
                        <span>
                          {post.author}
                          {post.authorRole && (
                            <span className="text-muted-foreground/70">
                              {" "}- {post.authorRole}
                            </span>
                          )}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2" data-testid="section-published-date">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      
                      {post.readingTime && (
                        <div className="flex items-center gap-2" data-testid="section-reading-time">
                          <Clock className="w-4 h-4" />
                          <span>{post.readingTime} min read</span>
                        </div>
                      )}
                    </div>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 mb-8" data-testid="section-tags">
                        <Tag className="w-4 h-4 text-muted-foreground" />
                        {post.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline"
                            data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </header>

                  {post.featuredImage && (
                    <div className="mb-12" data-testid="section-featured-image">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full rounded-lg object-cover"
                        data-testid="img-featured"
                      />
                    </div>
                  )}

                  <div 
                    className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-p:text-foreground prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground prose-em:text-foreground"
                    dangerouslySetInnerHTML={{ __html: renderMarkdownContent(post.content) }}
                    data-testid="section-content"
                  />
                </article>
              </div>
            </div>

            <div className="bg-card py-16">
              <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                <Link href="/blog">
                  <Button 
                    variant="outline" 
                    size="lg"
                    data-testid="button-back-to-all-articles"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Articles
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
