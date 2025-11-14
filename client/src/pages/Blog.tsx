import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { FileBlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<FileBlogPost[]>({
    queryKey: ["/api/blog/posts"],
    queryFn: async () => {
      const response = await fetch("/api/blog/posts?published=true");
      if (!response.ok) throw new Error("Failed to fetch posts");
      return response.json();
    },
  });

  const featuredPost = posts?.[0];
  const regularPosts = posts?.slice(1);

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>Blog | Your Company</title>
        <meta
          name="description"
          content="Insights, updates, and articles from our team. Stay informed with our latest posts."
        />
        <meta property="og:title" content="Blog | Your Company" />
        <meta property="og:description" content="Insights, updates, and articles from our team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.com/blog" />
      </Helmet>

      <Header />

      <main id="main-content" role="main" tabIndex={-1} className="flex-1 bg-background">
        <div className="bg-gradient-to-b from-muted/30 to-background py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-7xl md:text-8xl font-serif font-bold mb-6" data-testid="text-blog-title">
                Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights, updates, and articles from our team
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-7xl">
          {isLoading ? (
            <div className="space-y-16">
              <div className="space-y-4">
                <Skeleton className="h-96 w-full rounded-lg" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-96 rounded-lg" />
                ))}
              </div>
            </div>
          ) : (
            <>
              {featuredPost && (
                <div className="mb-24" data-testid="section-featured-post">
                  <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all">
                    <Link href={`/blog/${featuredPost.slug}`} data-testid={`link-blog-post-${featuredPost.slug}`}>
                      <div className="grid md:grid-cols-2 gap-0">
                        {featuredPost.featuredImage && (
                          <div className="aspect-video md:aspect-auto">
                            <img
                              src={featuredPost.featuredImage}
                              alt={featuredPost.title}
                              className="w-full h-full object-cover"
                              data-testid={`img-featured-${featuredPost.slug}`}
                            />
                          </div>
                        )}
                        <CardContent className={`p-8 md:p-12 flex flex-col justify-center ${!featuredPost.featuredImage ? 'md:col-span-2' : ''}`}>
                          <div className="flex items-center gap-3 mb-4">
                            <Badge variant="secondary" data-testid={`badge-category-${featuredPost.slug}`}>
                              Featured
                            </Badge>
                            {featuredPost.category && (
                              <Badge variant="outline" data-testid={`badge-cat-${featuredPost.slug}`}>
                                {featuredPost.category}
                              </Badge>
                            )}
                          </div>
                          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 group-hover:text-primary transition-colors" data-testid={`text-title-${featuredPost.slug}`}>
                            {featuredPost.title}
                          </h2>
                          <p className="text-lg text-muted-foreground mb-6" data-testid={`text-excerpt-${featuredPost.slug}`}>
                            {featuredPost.excerpt}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                            {featuredPost.author && (
                              <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{featuredPost.author}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            {featuredPost.readingTime && (
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{featuredPost.readingTime} min read</span>
                              </div>
                            )}
                          </div>
                          <Button variant="outline" className="w-fit" data-testid={`button-read-${featuredPost.slug}`}>
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </CardContent>
                      </div>
                    </Link>
                  </Card>
                </div>
              )}

              {regularPosts && regularPosts.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="section-blog-posts">
                  {regularPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} data-testid={`link-post-${post.slug}`}>
                      <Card className="h-full hover-elevate active-elevate-2 transition-all overflow-hidden">
                        {post.featuredImage && (
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                              data-testid={`img-post-${post.slug}`}
                            />
                          </div>
                        )}
                        <CardHeader>
                          {post.category && (
                            <Badge variant="outline" className="w-fit mb-2" data-testid={`badge-category-${post.slug}`}>
                              {post.category}
                            </Badge>
                          )}
                          <CardTitle className="text-2xl font-serif" data-testid={`text-post-title-${post.slug}`}>
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base mb-4 line-clamp-3" data-testid={`text-post-excerpt-${post.slug}`}>
                            {post.excerpt}
                          </CardDescription>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            {post.readingTime && (
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readingTime} min</span>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}

              {!posts || posts.length === 0 && !isLoading && (
                <div className="text-center py-24">
                  <p className="text-xl text-muted-foreground">No blog posts yet. Check back soon!</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
