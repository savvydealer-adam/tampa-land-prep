import { ProductPage, ProductPageProps } from "@/components/ProductPage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Zap, Globe, TrendingUp, Shield, Code, Smartphone } from "lucide-react";
import { SEO, organizationSchema, createServiceSchema } from "@/components/SEO";

const serviceSchema = createServiceSchema({
  id: "dealer-websites",
  name: "AI-Optimized Dealer Websites",
  description: "SEO-first architecture with lightning-fast load times. Custom dealer websites deliver 2x the traffic of average dealer sites while meeting Google's Core Web Vitals.",
  url: "/dealer-websites",
});

const dealerWebsitesContent: ProductPageProps = {
  badge: "Website Solutions",
  title: "AI-Optimized Dealer Websites",
  subtitle: "Built For Performance, Not Politics",
  heroDescription:
    "SEO-first architecture with lightning-fast load times. Our custom dealer websites deliver 2x the traffic of average dealer sites while meeting Google's Core Web Vitals—without OEM restrictions holding you back.",
  accentColor: "#0088FF",
  benefits: {
    title: "Why Our Dealer Websites Outperform",
    items: [
      "SEO-first architecture optimized for search from day one",
      "Lightning-fast load times meeting Google Core Web Vitals",
      "2x traffic compared to average dealer websites",
      "Mobile-optimized responsive design across all devices",
      "No OEM restrictions—built for your needs first",
      "Custom features requested by sales managers get implemented",
      "Built-in SEO on every page for maximum visibility",
      "Direct inventory system integrations",
    ],
  },
  features: {
    title: "Built For Performance",
    description:
      "Born out of frustration with large website providers who couldn't keep up with Google's evolving requirements. We prioritize customer experience, Google requirements, dealer needs—then OEM compliance.",
    items: [
      {
        title: "Lightning-Fast Performance",
        description:
          "Optimized to meet Google's Core Web Vitals standards. Fast page loads improve search rankings and conversion rates.",
        icon: Zap,
      },
      {
        title: "SEO-First Architecture",
        description:
          "Every page is built with search optimization in mind. We don't bolt SEO on later—it's fundamental to our design approach.",
        icon: Globe,
      },
      {
        title: "2x Average Traffic",
        description:
          "Our websites consistently deliver double the traffic of average dealer sites through superior technical optimization and SEO.",
        icon: TrendingUp,
      },
      {
        title: "No OEM Restrictions",
        description:
          "We build what performs best for your dealership first, then adapt to OEM requirements. You're not held back by vendor politics.",
        icon: Shield,
      },
      {
        title: "Dealer-Driven Features",
        description:
          "Features requested by actual sales managers and internet managers get implemented. We solve real dealership problems.",
        icon: Code,
      },
      {
        title: "Mobile-First Design",
        description:
          "Fully responsive design optimized for mobile devices where most car buyers research. Perfect experience on any screen size.",
        icon: Smartphone,
      },
    ],
  },
  proof: {
    title: "Website Performance Stats",
    items: [
      { stat: "2x", label: "traffic vs average dealer sites" },
      { stat: "100%", label: "Core Web Vitals optimized" },
      { stat: "66%", label: "traffic increase (client result)" },
      { stat: "100%", label: "mobile-optimized responsive" },
    ],
  },
  process: {
    title: "Our Website Development Process",
    steps: [
      {
        number: "1",
        title: "Discovery & Requirements",
        description:
          "We understand your dealership needs, inventory systems, and OEM requirements to plan a custom solution.",
      },
      {
        number: "2",
        title: "SEO-First Development",
        description:
          "Build your website with search optimization and Core Web Vitals performance as fundamental architecture priorities.",
      },
      {
        number: "3",
        title: "Integration & Testing",
        description:
          "Connect inventory systems, test across devices, and optimize load times to ensure peak performance before launch.",
      },
      {
        number: "4",
        title: "Launch & Optimize",
        description:
          "Deploy your website and continuously optimize based on performance data, user behavior, and search ranking factors.",
      },
    ],
  },
  cta: {
    title: "Ready For a Website That Actually Performs?",
    description:
      "Discover how our SEO-first dealer websites deliver double the traffic while meeting Google's Core Web Vitals standards.",
  },
};

export default function DealerWebsites() {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="AI-Optimized Dealer Websites - Built For Performance"
        description="SEO-first dealer websites with lightning-fast load times. Meet Google Core Web Vitals. Deliver 2x average traffic. No OEM restrictions. Custom features sales managers actually request."
        canonical="https://savvydealer.com/dealer-websites"
        schemas={[organizationSchema, serviceSchema]}
      />
      <Header />
      <main className="flex-1">
        <ProductPage {...dealerWebsitesContent} />
      </main>
      <Footer />
    </div>
  );
}
