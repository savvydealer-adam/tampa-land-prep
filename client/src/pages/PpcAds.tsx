import { ProductPage, ProductPageProps } from "@/components/ProductPage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, Target, TrendingUp, Zap, Settings, Shield, Eye, MapPin } from "lucide-react";
import { SEO, organizationSchema, createServiceSchema } from "@/components/SEO";

const serviceSchema = createServiceSchema({
  id: "ppc-ads",
  name: "PPC & SEM Advertising for Auto Dealers",
  description: "90% search term-to-keyword match. We dominate market share in our markets—we don't share. Expert traffic routing from competitors to your dealership with exclusive market control.",
  url: "/ppc-ads",
});

const ppcAdsContent: ProductPageProps = {
  badge: "Paid Search Advertising",
  title: "PPC & SEM Advertising For Auto Dealers",
  subtitle: "We Dominate Markets. We Don't Share Them.",
  heroDescription:
    "90% search term-to-keyword match. Your ads align with what you're selling—not AI-generated junk like headlight repair kits. We route competitor traffic to your dealership with exclusive market control.",
  accentColor: "#FF6B35",
  benefits: {
    title: "Strategic Market Dominance Through Precision Targeting",
    items: [
      "90% search term-to-keyword match—your ads align with what you sell",
      "Competitor keyword intelligence from unique campaign structure",
      "Exclusive market control—we don't take competing dealers in your market",
      "Expert traffic routing from competitors to your dealership",
      "Market share dominance, not shared visibility",
      "See what competitors bid on at the keyword level",
      "No AI-generated junk ads for headlight repair kits",
      "Strategic exclusivity ensures we work for you, not your competition",
    ],
  },
  features: {
    title: "Precision Targeting Meets Strategic Market Control",
    description:
      "Our unique campaign structure gives you competitor intelligence at the keyword level while ensuring 90% search term-to-keyword match. We dominate your market—and route competitor traffic straight to you.",
    items: [
      {
        title: "90% Search Term Match",
        description:
          "Your ads align with what you're actually selling. No AI-generated garbage for headlight repair kits. Precision targeting that converts.",
        icon: Target,
      },
      {
        title: "Competitor Keyword Intelligence",
        description:
          "See what your competitors bid on at the keyword level. Our unique campaign structure reveals their strategy—giving you the edge.",
        icon: Eye,
      },
      {
        title: "Exclusive Market Control",
        description:
          "We don't take competing dealerships in your market. Period. Your success is our only focus—no conflicts of interest.",
        icon: Shield,
      },
      {
        title: "Expert Traffic Routing",
        description:
          "We're experts at routing competitor traffic to your dealership. Strategic bidding and targeting designed to steal their customers.",
        icon: TrendingUp,
      },
      {
        title: "Market Share Dominance",
        description:
          "We dominate market share in our markets—we don't share it. Strategic exclusivity means you own your territory online.",
        icon: MapPin,
      },
      {
        title: "Campaign Structure Advantage",
        description:
          "Proprietary campaign architecture enables real-time competitor analysis and precision adjustments based on market dynamics.",
        icon: Settings,
      },
    ],
  },
  proof: {
    title: "Market Dominance Metrics",
    items: [
      { stat: "90%", label: "search term-to-keyword match" },
      { stat: "100%", label: "market exclusivity guarantee" },
      { stat: "Keyword-Level", label: "competitor intelligence" },
      { stat: "Zero", label: "competing dealers in your market" },
    ],
  },
  process: {
    title: "How We Dominate Your Market",
    steps: [
      {
        number: "1",
        title: "Market Exclusivity Review",
        description:
          "We verify no competing dealerships in your market before engagement. Your territory is yours—we ensure strategic exclusivity from day one.",
      },
      {
        number: "2",
        title: "Competitor Intelligence Mapping",
        description:
          "Identify competitor keywords at granular level. Our unique campaign structure reveals exactly what they're bidding on and where to strike.",
      },
      {
        number: "3",
        title: "Precision Campaign Build",
        description:
          "90% search term-to-keyword match architecture. Your ads align with what you sell—no AI junk, just precision targeting that converts.",
      },
      {
        number: "4",
        title: "Traffic Routing & Dominance",
        description:
          "Deploy strategic bidding to route competitor traffic to you. Continuous optimization focused on market share dominance, not shared visibility.",
      },
    ],
  },
  cta: {
    title: "Ready to Own Your Market?",
    description:
      "Discover how our exclusive market approach, competitor intelligence, and 90% precision matching can route competitor traffic straight to your dealership.",
  },
};

export default function PpcAds() {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="PPC & SEM Advertising for Auto Dealers - Market Dominance Strategy"
        description="90% search term-to-keyword match. Exclusive market control with competitor keyword intelligence. We dominate your market and route competitor traffic to your dealership—no shared visibility."
        canonical="https://savvydealer.com/ppc-ads"
        schemas={[organizationSchema, serviceSchema]}
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        <ProductPage {...ppcAdsContent} />
      </main>
      <Footer />
    </div>
  );
}
