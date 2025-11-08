import { ProductPage, ProductPageProps } from "@/components/ProductPage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, TrendingUp, Users, Zap, BarChart3, Clock } from "lucide-react";

const facebookAdsContent: ProductPageProps = {
  badge: "Social Media Advertising",
  title: "Facebook Advertising For Auto Dealers",
  subtitle: "Cost-Effective Lead Generation That Works While You Sleep",
  heroDescription:
    "7 out of 10 U.S. adults use Facebook. They're scrolling during commercials, in bed, even in your competitor's showroom. Reach them with hand-built, high-performing ads that target your current inventory.",
  accentColor: "#FF4081",
  benefits: {
    title: "Why Facebook Advertising Works for Dealerships",
    items: [
      "7 out of 10 U.S. adults actively use Facebook",
      "World's third-most visited website",
      "Average user clicks 12 ads per month",
      "One of the most cost-effective advertising platforms",
      "Customers scroll throughout the day—capture their attention anytime",
      "Target customers even while they're at competitor dealerships",
      "Dynamic inventory advertising with hundreds of vehicles",
      "Management starting at just $300/month plus ad spend",
    ],
  },
  features: {
    title: "Our Proven Facebook Advertising Approach",
    description:
      "We don't just run ads—we build strategic campaigns that perform. Our unique methodology focuses on perfecting performance before scaling.",
    items: [
      {
        title: "Build Backwards Methodology",
        description:
          "We perfect ad performance scores with Facebook first, then scale. Unlike competitors who mass-produce ads and struggle to improve later.",
        icon: Target,
      },
      {
        title: "Organic-Style Ads",
        description:
          "Our ads feel like organic posts, not spam. This prevents users from blocking your content and increases engagement rates.",
        icon: Users,
      },
      {
        title: "Dynamic Inventory Targeting",
        description:
          "Advertise hundreds of vehicles simultaneously with dynamic targeting that focuses on current inventory that drives traffic.",
        icon: TrendingUp,
      },
      {
        title: "Constant Ad Rotation",
        description:
          "We continuously rotate ads and inventory to prevent ad fatigue and maintain peak performance throughout your campaign.",
        icon: Zap,
      },
      {
        title: "Complete Tracking Integration",
        description:
          "Google Analytics, Facebook Pixel, and phone tracking (where possible) provide complete visibility into campaign performance.",
        icon: BarChart3,
      },
      {
        title: "Flexible OEM Compliance",
        description:
          "We prioritize what performs best for your dealership first, then adapt to OEM requirements. Collaborative decision-making always.",
        icon: Clock,
      },
    ],
  },
  proof: {
    title: "Facebook Advertising By The Numbers",
    items: [
      { stat: "70%", label: "of U.S. adults use Facebook" },
      { stat: "12", label: "ads clicked per user monthly" },
      { stat: "$300", label: "minimum management fee/mo" },
      { stat: "#3", label: "most visited website globally" },
    ],
  },
  process: {
    title: "How We Build Your Facebook Campaign",
    steps: [
      {
        number: "1",
        title: "Free Audit & Strategy",
        description:
          "We diagnose why existing campaigns aren't performing (often they're not targeting current inventory) and build a custom strategy.",
      },
      {
        number: "2",
        title: "Perfect Performance First",
        description:
          "Using our 'build backwards' approach, we perfect ad performance scores with Facebook before scaling spend.",
      },
      {
        number: "3",
        title: "Launch Dynamic Inventory Ads",
        description:
          "Deploy ads targeting hundreds of vehicles simultaneously, focusing on inventory that drives traffic to your dealership.",
      },
      {
        number: "4",
        title: "Monitor, Rotate, Optimize",
        description:
          "Continuous monitoring with constant ad and inventory rotation prevents fatigue and maintains peak performance.",
      },
    ],
  },
  cta: {
    title: "Ready to Capture More Leads from Facebook?",
    description:
      "Get a free audit of your current Facebook advertising and discover why your campaigns may not be targeting the right inventory.",
  },
};

export default function FacebookAds() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProductPage {...facebookAdsContent} />
      </main>
      <Footer />
    </div>
  );
}
