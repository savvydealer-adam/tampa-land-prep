import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Facebook, TrendingUp, MousePointerClick, Globe, Brain } from "lucide-react";

export default function Products() {
  const products = [
    {
      icon: Facebook,
      title: "Facebook Ads",
      subtitle: "Capture Traffic / Drive Sales",
      description: "Hand-built Facebook Ads that lead the industry in performance. We hand-select vehicles for maximum results and provide top-tier reporting on inventory performance.",
      color: "hsl(var(--chart-1))",
      href: "/facebook-ads",
    },
    {
      icon: TrendingUp,
      title: "Dealer SEO",
      subtitle: "Fuel Long-Term Site Growth",
      description: "SEO + GEO optimization that positions your dealership first in traditional search and AI-powered results. Dominate where shoppers are searching, from Google to ChatGPT.",
      color: "hsl(var(--chart-2))",
      href: "/dealer-seo",
    },
    {
      icon: MousePointerClick,
      title: "PPC Ads",
      subtitle: "Turbocharge Your PPC",
      description: "Industry-leading Google and Bing Ad campaigns that focus on your in-stock inventory. We target proven, ROI-focused keywords and prioritize each vehicle individually.",
      color: "hsl(var(--chart-3))",
      href: "/ppc-ads",
    },
    {
      icon: Globe,
      title: "Dealer Websites",
      subtitle: "Dominate Your Online Market",
      description: "SEO-first website architecture that accelerates your digital marketing efforts. Responsive, adaptable platforms that convert visitors into customers.",
      color: "hsl(var(--chart-4))",
      href: "/dealer-websites",
    },
    {
      icon: Brain,
      title: "Attribution AI",
      subtitle: "Anti-Dashboard Dashboard",
      description: "Unified data warehouse with AI that analyzes marketing, sales, inventory, and phone calls. Finds issues before they impact your business and alerts your team with actionable fixes.",
      color: "hsl(var(--chart-5))",
      href: "/attribution-ai",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-card py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 font-serif text-4xl font-bold sm:text-5xl">
                Our Product Suite
              </h1>
              <p className="text-lg text-muted-foreground">
                At Savvy Dealer, we customize our marketing packages to meet your needs, not ours. 
                Our comprehensive suite of products works together to counter competitor tactics and 
                dominate in both search and generative AI results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <Card
                  key={product.title}
                  className="group flex flex-col overflow-visible p-8 transition-all hover-elevate"
                  data-testid={`card-product-${index}`}
                >
                  <div 
                    className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-md"
                    style={{ backgroundColor: product.color, opacity: 0.15 }}
                  >
                    <product.icon className="h-7 w-7" style={{ color: product.color }} />
                  </div>
                  <h3 className="mb-1 text-2xl font-bold">{product.title}</h3>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {product.subtitle}
                  </p>
                  <p className="mb-6 flex-1 text-muted-foreground">{product.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                    data-testid={`button-learn-more-${index}`}
                  >
                    <Link href={product.href}>Learn More</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-24">
          <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Ready to Dominate Your Market?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join successful dealers who choose performance over promises
              </p>
              <Button asChild size="lg" data-testid="button-cta-request-audit">
                <a href="/free-audit">Request Free Audit</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
