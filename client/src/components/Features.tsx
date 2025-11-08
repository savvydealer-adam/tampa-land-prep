import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { Facebook, TrendingUp, MousePointerClick, Globe, Brain, ArrowRight } from "lucide-react";

export function Features() {
  const { openLeadForm } = useLeadForm();

  const products = [
    {
      icon: Facebook,
      title: "Facebook Ads",
      subtitle: "Capture Traffic / Drive Sales",
      description: "We don't just run ads. We hand build Facebook Ads that lead the industry in performance. We hand select the vehicles that will perform the best and give you top reports on the performance of your inventory both on Facebook and beyond.",
      color: "hsl(var(--chart-1))",
      href: "/facebook-ads",
    },
    {
      icon: TrendingUp,
      title: "Dealer SEO",
      subtitle: "Fuel Long-Term Site Growth",
      description: "We don't just write content. We optimize your site to create a user experience that works, both for Google and the visitors you want. Fuel your website's organic growth with regular infusions of well-written content.",
      color: "hsl(var(--chart-2))",
      href: "/dealer-seo",
    },
    {
      icon: MousePointerClick,
      title: "PPC Ads",
      subtitle: "Turbocharge Your PPC",
      description: "We know what to target and how to bid to win in Automotive PPC. We run some of the most successful Google Ad and Bing Ad campaigns in the industry. We focus on what you have in stock and prioritize each vehicle individually.",
      color: "hsl(var(--chart-3))",
      href: "/ppc-ads",
    },
    {
      icon: Globe,
      title: "Dealer Websites",
      subtitle: "Dominate Your Online Market",
      description: "We don't just build sites. We accelerate your SEO and SEM efforts with a customized website platform that is responsive and adaptable to your dealership's needs and to your customer's experience.",
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
    <section id="products" className="py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Savvy Product Suite
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            At Savvy Dealer, we customize our marketing packages to meet your needs, not ours. 
            We believe that a three-pronged approach to digital makes the most sense for your business.
          </p>
        </div>

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
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  className="w-full"
                  data-testid={`button-learn-more-${index}`}
                >
                  <Link href={product.href}>Learn More</Link>
                </Button>
                <Button
                  onClick={openLeadForm}
                  variant="outline"
                  className="w-full"
                  data-testid={`button-request-audit-${index}`}
                >
                  Request Free Audit
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            data-testid="button-view-all-products"
          >
            <Link href="/products" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
