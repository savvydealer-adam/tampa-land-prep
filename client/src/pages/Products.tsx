import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { Facebook, TrendingUp, MousePointerClick, Globe, Store, Brain, Car, Sparkles } from "lucide-react";
import { SEO, organizationSchema } from "@/components/SEO";
import fullyManagedImage from "@assets/generated_images/Fully_managed_marketing_orange_theme_c07bcc36.png";
import facebookAdsImage from "@assets/generated_images/Facebook_Ads_pink_theme_3fd45300.png";
import ppcAdsImage from "@assets/generated_images/PPC_Ads_orange_theme_7bcb5a76.png";
import seoImage from "@assets/generated_images/SEO_green_theme_1cae63d8.png";
import vehicleAdsImage from "@assets/generated_images/Vehicle_Ads_teal_theme_1273b0d6.png";
import websitesImage from "@assets/generated_images/Banner_Chevy_multi-device_mockup_9dc25bbf.png";
import independentWebsitesImage from "@assets/generated_images/Independent_dealer_websites_teal_theme_c62d8ebd.png";
import aiImage from "@assets/generated_images/Anti-Dashboard_AI_purple_theme_4cd41597.png";

export default function Products() {
  const { openLeadForm } = useLeadForm();

  const products = [
    {
      icon: Sparkles,
      title: "Fully Managed Marketing",
      subtitle: "Complete Automotive Marketing Solution",
      description: "White-glove service that handles everything—co-op management, vendor coordination, website, SEO, SEM, Facebook ads, design, and ROI tracking. One team, one strategy, real results.",
      color: "#FF6B35",
      href: "/fully-managed-marketing",
      image: fullyManagedImage,
      isPremium: true,
    },
    {
      icon: Facebook,
      title: "Facebook Ads",
      subtitle: "Capture Traffic / Drive Sales",
      description: "Hand-built Facebook Ads that lead the industry in performance. We hand-select vehicles for maximum results and provide top-tier reporting on inventory performance.",
      color: "hsl(var(--chart-1))",
      href: "/facebook-ads",
      image: facebookAdsImage,
    },
    {
      icon: TrendingUp,
      title: "Dealer SEO",
      subtitle: "Fuel Long-Term Site Growth",
      description: "SEO + GEO optimization that positions your dealership first in traditional search and AI-powered results. Dominate where shoppers are searching, from Google to ChatGPT.",
      color: "hsl(var(--chart-2))",
      href: "/dealer-seo",
      image: seoImage,
    },
    {
      icon: MousePointerClick,
      title: "PPC Ads",
      subtitle: "Turbocharge Your PPC",
      description: "Industry-leading Google and Bing Ad campaigns that focus on your in-stock inventory. We target proven, ROI-focused keywords and prioritize each vehicle individually.",
      color: "hsl(var(--chart-3))",
      href: "/ppc-ads",
      image: ppcAdsImage,
    },
    {
      icon: Car,
      title: "Vehicle Ads",
      subtitle: "Stop Wasting Your VLA Budget",
      description: "Reclaim thousands wasted on Google's Display Network. Expert Performance Max management that forces your ad spend to compete where it matters: high-intent Search and Shopping.",
      color: "hsl(var(--chart-7))",
      href: "/vehicle-ads",
      image: vehicleAdsImage,
    },
    {
      icon: Globe,
      title: "Dealer Websites",
      subtitle: "Dominate Your Online Market",
      description: "SEO-first website architecture that accelerates your digital marketing efforts. Responsive, adaptable platforms that convert visitors into customers.",
      color: "hsl(var(--chart-4))",
      href: "/dealer-websites",
      image: websitesImage,
    },
    {
      icon: Store,
      title: "Independent Dealer Websites",
      subtitle: "Built For Your Business",
      description: "Premium websites for independent dealers and buy-here-pay-here lots. No franchise fees or restrictions—just powerful tools designed to sell more cars.",
      color: "hsl(var(--chart-6))",
      href: "/independent-dealer-websites",
      image: independentWebsitesImage,
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
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Our Product Suite"
        description="Comprehensive digital marketing solutions for automotive dealerships. Facebook Ads, PPC, SEO/GEO, AI-powered dealer websites, and more. Discover proven strategies that drive real results."
        canonical="https://savvydealer.com/products"
        schemas={organizationSchema}
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        <section className="py-32 text-center">
          <div className="container mx-auto max-w-4xl px-6 sm:px-8">
            <h1 className="mb-6 font-serif text-5xl font-bold sm:text-6xl lg:text-7xl">
              Savvy Product Suite
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl">
              At Savvy Dealer, we customize our marketing packages to meet your needs, not ours. 
              Our comprehensive suite of products works together to counter competitor tactics and 
              dominate in both search and generative AI results.
            </p>
          </div>
        </section>

        <section className="overflow-hidden">
          {products.map((product, index) => {
            const isReversed = index % 2 === 1;
            const isTeaser = (product as any).isTeaser;
            const isPremium = (product as any).isPremium;
            
            return (
              <div
                key={product.title}
                className="relative py-24"
                data-testid={`section-product-${index}`}
              >
                <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                  <div className={`grid items-center gap-12 lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`space-y-6 ${isReversed ? 'lg:col-start-2' : ''}`}>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center gap-3 rounded-full border px-4 py-2">
                          <product.icon className="h-5 w-5" style={{ color: product.color }} />
                          <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                            {product.subtitle}
                          </span>
                        </div>
                        {isPremium && (
                          <Badge 
                            variant="default" 
                            className="bg-orange-600 text-white border-0"
                            data-testid="badge-premium-service"
                          >
                            Premium Service
                          </Badge>
                        )}
                        {isTeaser && (
                          <Badge 
                            variant="default" 
                            className="bg-[hsl(var(--chart-5))] text-white border-0"
                            data-testid="badge-nada-exclusive"
                          >
                            NADA 2026 Exclusive
                          </Badge>
                        )}
                      </div>
                      
                      <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        {product.title}
                      </h2>
                      
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
                            {isTeaser ? "View Teaser" : "Learn More"}
                          </Link>
                        </Button>
                        <Button
                          onClick={openLeadForm}
                          variant="outline"
                          size="lg"
                          className="min-h-12 rounded-full px-8"
                          data-testid={`button-request-audit-${index}`}
                        >
                          {isTeaser ? "Schedule Demo" : "Request Audit"}
                        </Button>
                      </div>
                    </div>

                    <div className={`relative ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="relative overflow-hidden rounded-3xl">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover"
                          data-testid={`img-product-${index}`}
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
        </section>

        <section className="bg-card py-32">
          <div className="container mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
                Ready to Dominate Your Market?
              </h2>
              <p className="mb-10 text-xl text-muted-foreground">
                Join successful dealers who choose performance over promises
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button 
                  onClick={openLeadForm} 
                  size="lg" 
                  className="min-h-14 rounded-full px-10"
                  data-testid="button-cta-get-started"
                >
                  Request Free Audit
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="min-h-14 rounded-full px-10"
                  data-testid="button-cta-contact"
                >
                  <a href="tel:8135013229">Call Now: (813) 501-3229</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
