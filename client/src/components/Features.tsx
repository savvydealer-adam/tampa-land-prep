import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { Facebook, TrendingUp, MousePointerClick, Globe, Brain, ArrowRight } from "lucide-react";
import facebookAdsImage from "@assets/generated_images/Facebook_Ads_pink_theme_3fd45300.png";
import ppcAdsImage from "@assets/generated_images/PPC_Ads_orange_theme_7bcb5a76.png";
import seoImage from "@assets/generated_images/SEO_green_theme_1cae63d8.png";
import websitesImage from "@assets/generated_images/Dealer_Websites_blue_theme_2aaf45c2.png";
import aiImage from "@assets/generated_images/Anti-Dashboard_AI_purple_theme_4cd41597.png";

export function Features() {
  const { openLeadForm } = useLeadForm();

  const products = [
    {
      icon: Facebook,
      title: "Facebook Ads",
      subtitle: "Capture Traffic / Drive Sales",
      description: "Hand-built campaigns that lead the industry in performance. We select the vehicles that will perform best and deliver top-tier reports on your inventory's performance.",
      color: "hsl(var(--chart-1))",
      href: "/facebook-ads",
      image: facebookAdsImage,
    },
    {
      icon: TrendingUp,
      title: "Dealer SEO",
      subtitle: "Fuel Long-Term Site Growth",
      description: "Optimize your site to create a user experience that works for Google and your visitors. Fuel organic growth with strategic, well-written content.",
      color: "hsl(var(--chart-2))",
      href: "/dealer-seo",
      image: seoImage,
    },
    {
      icon: MousePointerClick,
      title: "PPC Ads",
      subtitle: "Turbocharge Your PPC",
      description: "Industry-leading Google and Bing Ad campaigns. We focus on what you have in stock and prioritize each vehicle individually for maximum ROI.",
      color: "hsl(var(--chart-3))",
      href: "/ppc-ads",
      image: ppcAdsImage,
    },
    {
      icon: Globe,
      title: "Dealer Websites",
      subtitle: "Dominate Your Online Market",
      description: "Accelerate your SEO and SEM with a customized platform that's responsive and adaptable to your dealership's needs and your customer's experience.",
      color: "hsl(var(--chart-4))",
      href: "/dealer-websites",
      image: websitesImage,
    },
    {
      icon: Brain,
      title: "Anti-Dashboard AI",
      subtitle: "Coming February 2026",
      description: "Something big is coming at NADA 2026. Be among the first to see how AI will transform automotive attribution and analytics.",
      color: "hsl(var(--chart-5))",
      href: "/attribution-ai",
      isTeaser: true,
      image: aiImage,
    },
  ];

  return (
    <section id="products" className="overflow-hidden">
      <div className="py-32 text-center">
        <div className="container mx-auto max-w-4xl px-6 sm:px-8">
          <h2 className="mb-6 font-serif text-5xl font-bold sm:text-6xl lg:text-7xl">
            Savvy Product Suite
          </h2>
          <p className="text-xl text-muted-foreground sm:text-2xl">
            Customized marketing that outsmarts the competition
          </p>
        </div>
      </div>

      {products.map((product, index) => {
        const isReversed = index % 2 === 1;
        return (
          <div
            key={product.title}
            className="relative py-24"
            data-testid={`section-product-${index}`}
          >
            <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
              <div className={`grid items-center gap-12 lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`space-y-6 ${isReversed ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-flex items-center gap-3 rounded-full border px-4 py-2">
                    <product.icon className="h-5 w-5" style={{ color: product.color }} />
                    <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      {product.subtitle}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                    {product.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground sm:text-xl">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:gap-6">
                    <Button
                      asChild
                      size="lg"
                      className="min-h-12 rounded-full px-8"
                      data-testid={`button-learn-more-${index}`}
                    >
                      <Link href={product.href}>
                        {(product as any).isTeaser ? "View Teaser" : "Learn More"}
                      </Link>
                    </Button>
                    <Button
                      onClick={openLeadForm}
                      variant="outline"
                      size="lg"
                      className="min-h-12 rounded-full px-8"
                      data-testid={`button-request-audit-${index}`}
                    >
                      {(product as any).isTeaser ? "Schedule Demo" : "Request Audit"}
                    </Button>
                  </div>
                </div>

                <div className={`relative ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{ background: `linear-gradient(135deg, ${product.color} 0%, transparent 100%)` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="py-24 text-center">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="min-h-12 rounded-full px-8"
          data-testid="button-view-all-products"
        >
          <Link href="/products" className="flex items-center gap-2">
            View All Products
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
