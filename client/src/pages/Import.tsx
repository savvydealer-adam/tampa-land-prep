import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Download, Globe, FileText, Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ExtractedPage {
  url: string;
  title: string;
  description: string;
  content: string;
  htmlContent: string;
  type: 'blog' | 'homepage' | 'about' | 'services' | 'contact' | 'other';
  publishedDate?: string;
  author?: string;
  images: string[];
  headings: Array<{ level: number; text: string }>;
  metadata: {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
  };
}

interface AnalysisResult {
  domain: string;
  pages: ExtractedPage[];
  blogPosts: ExtractedPage[];
  mainPages: ExtractedPage[];
  totalPages: number;
}

export default function Import() {
  const [domain, setDomain] = useState("");
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const analyzeMutation = useMutation({
    mutationFn: async (domain: string) => {
      const response = await apiRequest("POST", "/api/import/analyze", { domain });
      return response as unknown as AnalysisResult;
    },
    onSuccess: (data) => {
      setAnalysisResult(data);
      toast({
        title: "Analysis Complete!",
        description: `Found ${data.totalPages} pages (${data.blogPosts.length} blog posts)`,
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Analysis Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const importMutation = useMutation({
    mutationFn: async () => {
      if (!analysisResult) return;
      
      const response = await apiRequest("POST", "/api/import/execute", {
        blogPosts: analysisResult.blogPosts,
        pages: analysisResult.mainPages,
        options: {
          companyName: "Your Company",
        },
      });
      return response;
    },
    onSuccess: (data: any) => {
      toast({
        title: "Import Successful!",
        description: `Created ${data.blogPostsCreated} blog posts. Please restart the server to see them.`,
      });
      setAnalysisResult(null);
      setDomain("");
    },
    onError: (error: Error) => {
      toast({
        title: "Import Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) {
      toast({
        title: "Domain Required",
        description: "Please enter a website domain to analyze",
        variant: "destructive",
      });
      return;
    }
    analyzeMutation.mutate(domain.trim());
  };

  const handleImport = () => {
    if (!analysisResult) return;
    importMutation.mutate();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-import-title">
            Import Website Content
          </h1>
          <p className="text-xl text-muted-foreground">
            Extract content from an existing website and import it into your modern template
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Website Domain</CardTitle>
            <CardDescription>
              We'll analyze the website and extract its content, blog posts, and structure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAnalyze} className="flex gap-4">
              <Input
                type="text"
                placeholder="example.com or https://example.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-1"
                data-testid="input-domain"
                disabled={analyzeMutation.isPending}
              />
              <Button 
                type="submit" 
                disabled={analyzeMutation.isPending}
                data-testid="button-analyze"
              >
                {analyzeMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Globe className="mr-2 h-4 w-4" />
                    Analyze
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {analysisResult && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analysis Results</CardTitle>
                <CardDescription>
                  Found {analysisResult.totalPages} pages from {analysisResult.domain}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {analysisResult.blogPosts?.length || 0}
                    </div>
                    <div className="text-sm text-muted-foreground">Blog Posts</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {analysisResult.mainPages?.length || 0}
                    </div>
                    <div className="text-sm text-muted-foreground">Main Pages</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {analysisResult.totalPages || 0}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Pages</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Only blog posts will be automatically imported as Markdown files. 
                    Main pages are shown for reference but must be created manually.
                  </p>
                  <Button 
                    onClick={handleImport}
                    disabled={importMutation.isPending || (analysisResult.blogPosts?.length || 0) === 0}
                    className="w-full"
                    data-testid="button-import"
                    size="lg"
                  >
                    {importMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Importing Blog Posts...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Import {analysisResult.blogPosts?.length || 0} Blog Posts
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {(analysisResult.blogPosts?.length || 0) > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Blog Posts ({analysisResult.blogPosts?.length || 0})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(analysisResult.blogPosts || []).slice(0, 10).map((post, idx) => (
                      <div 
                        key={idx} 
                        className="p-3 border rounded-lg hover-elevate"
                        data-testid={`blog-post-${idx}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold">{post.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {post.description || post.content.substring(0, 100)}
                            </p>
                            {post.publishedDate && (
                              <p className="text-xs text-muted-foreground mt-1">
                                {new Date(post.publishedDate).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            {post.images.length > 0 && (
                              <Badge variant="secondary">
                                <Image className="h-3 w-3 mr-1" />
                                {post.images.length}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    {(analysisResult.blogPosts?.length || 0) > 10 && (
                      <p className="text-sm text-muted-foreground text-center">
                        ...and {(analysisResult.blogPosts?.length || 0) - 10} more blog posts
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {(analysisResult.mainPages?.length || 0) > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Main Pages ({analysisResult.mainPages?.length || 0})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(analysisResult.mainPages || []).map((page, idx) => (
                      <div 
                        key={idx} 
                        className="p-3 border rounded-lg hover-elevate"
                        data-testid={`main-page-${idx}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{page.title}</h3>
                              <Badge variant="outline">{page.type}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                              {page.description || page.content.substring(0, 150)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
