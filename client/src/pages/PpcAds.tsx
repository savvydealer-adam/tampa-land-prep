import { ProductPage, ProductPageProps } from "@/components/ProductPage";
import { Search, DollarSign, Target, TrendingUp, Zap, Settings } from "lucide-react";

const ppcAdsContent: ProductPageProps = {
  badge: "Paid Search Advertising",
  title: "PPC & SEM Advertising For Auto Dealers",
  subtitle: "Shut Down Competitors with Strategic Paid Search",
  heroDescription:
    "Custom PPC system built for dealerships. Target your in-stock inventory with proven ROI-focused keywords and competitive bidding strategies designed to dominate your market.",
  accentColor: "#FF6B35",
  benefits: {
    title: "Why Our PPC Management Outperforms The Competition",
    items: [
      "Custom-built PPC platform for real-time flexibility",
      "Target individual vehicles in your current inventory",
      "Proven ROI-focused keyword strategies",
      "Competitive bidding designed to shut competitors down",
      "Constantly updated with latest search industry changes",
      "Google Ads and Bing Ads campaign management",
      "66% traffic increase documented with dealer clients",
      "National keyword rankings for brand search terms",
    ],
  },
  features: {
    title: "Our Advanced PPC Approach",
    description:
      "We're one of the few organizations managing both SEM/PPC and SEO through custom Google-friendly content creation. This integrated approach delivers superior results.",
    items: [
      {
        title: "Custom PPC Decision Platform",
        description:
          "Our proprietary system allows real-time campaign adjustments based on your inventory, market conditions, and performance data.",
        icon: Settings,
      },
      {
        title: "Individual Vehicle Prioritization",
        description:
          "Every vehicle in your inventory can be prioritized individually in campaigns, focusing ad spend on what matters most.",
        icon: Target,
      },
      {
        title: "Proven ROI Keywords",
        description:
          "We use battle-tested, ROI-focused keyword selection strategies refined over years of automotive PPC management.",
        icon: Search,
      },
      {
        title: "Competitive Bidding Strategy",
        description:
          "Our bidding approach is designed to shut down competitors and dominate high-intent search terms in your market.",
        icon: DollarSign,
      },
      {
        title: "Continuous Industry Updates",
        description:
          "Search advertising evolves constantly. We stay ahead of changes to ensure your campaigns maintain peak performance.",
        icon: Zap,
      },
      {
        title: "Multi-Platform Management",
        description:
          "Comprehensive campaign management across Google Ads, Bing Ads, and Google Vehicle Listing Ads (VLA).",
        icon: TrendingUp,
      },
    ],
  },
  proof: {
    title: "Documented PPC Results",
    items: [
      { stat: "66%", label: "traffic increase (client result)" },
      { stat: "$2.04", label: "avg cost per click (dealers)" },
      { stat: "66%", label: "of calls from paid ads" },
      { stat: "100%", label: "inventory targeting flexibility" },
    ],
  },
  process: {
    title: "Our PPC Campaign Process",
    steps: [
      {
        number: "1",
        title: "Audit & Competitive Analysis",
        description:
          "We analyze your current campaigns, competitor strategies, and market opportunities to identify quick wins and long-term strategies.",
      },
      {
        number: "2",
        title: "Custom Campaign Architecture",
        description:
          "Build campaign structure focused on your inventory priorities, using proven keyword strategies and competitive bidding approaches.",
      },
      {
        number: "3",
        title: "Launch & Monitor",
        description:
          "Deploy campaigns across Google Ads, Bing Ads, and VLA with real-time monitoring and rapid optimization based on performance data.",
      },
      {
        number: "4",
        title: "Continuous Optimization",
        description:
          "Ongoing campaign refinement with individual vehicle prioritization adjustments, keyword optimization, and competitive bid management.",
      },
    ],
  },
  cta: {
    title: "Ready to Dominate Paid Search?",
    description:
      "Discover how our custom PPC system and competitive bidding strategies can shut down competitors and drive more qualified leads to your dealership.",
  },
};

export default function PpcAds() {
  return <ProductPage {...ppcAdsContent} />;
}
