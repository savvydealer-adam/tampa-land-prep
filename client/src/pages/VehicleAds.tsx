import { ProductPage, ProductPageProps } from "@/components/ProductPage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, FileText, Trophy, DollarSign, Target, Search } from "lucide-react";
import { SEO, organizationSchema, createServiceSchema } from "@/components/SEO";

const serviceSchema = createServiceSchema({
  id: "vehicle-ads",
  name: "Google Vehicle Ads (VLA) Management for Auto Dealers",
  description: "Stop wasting your VLA budget on Google's Display Network. Expert Performance Max management that forces your ad spend to compete where it matters: high-intent Google Search and Shopping.",
  url: "/vehicle-ads",
});

const vehicleAdsContent: ProductPageProps = {
  badge: "Vehicle Listing Ads",
  title: "Stop Setting Your VLA Budget on Fire",
  subtitle: "Get a Free Waste Audit & Reclaim Thousands in Wasted Ad Spend",
  heroDescription:
    "Are your Vehicle Ads just funding Google's banner ad network? Dealers are wasting thousands every month on low-intent clicks from Performance Max. We'll show you exactly where your budget is going—and how to fix it.",
  accentColor: "hsl(var(--chart-7))",
  benefits: {
    title: "The Performance Max Problem",
    items: [
      "VLAs now run through Google's 'black box' Performance Max system",
      "Your ads appear on millions of low-value banner websites",
      "Most agencies 'set it and forget it'—letting Google waste your budget",
      "Algorithm finds the cheapest clicks (not the best leads)",
      "Your click numbers look good, but VSRs don't budge",
      "You're paying for 'brand awareness' instead of capturing leads",
      "Thousands wasted monthly on the Google Display Network",
      "No transparency into where your budget actually goes",
    ],
  },
  features: {
    title: "What Sets Our VLA Management Apart",
    description:
      "We don't 'set and forget.' We actively fight the black box to make your VLA budget work for you. Leads aren't created—they're captured.",
    items: [
      {
        title: "Aggressive Spend Containment",
        description:
          "We don't let PMax run wild. Using advanced strategies, we actively minimize budget waste on the Google Display Network and force your ad dollars to compete where it matters: high-intent Google Search results and Shopping tab placements.",
        icon: Shield,
      },
      {
        title: "Meticulous Feed Optimization",
        description:
          "This is our secret weapon. The single most important factor in VLA success is the data feed. We don't just 'plug in' your inventory—we meticulously clean, optimize, and manage your feed to ensure every vehicle has perfect pricing, high-res photos, and all key attributes to win the click.",
        icon: FileText,
      },
      {
        title: "Total Google Domination",
        description:
          "Our VLA strategy doesn't exist in a silo. It's designed to work with your Google Business Profile inventory and your dealership's main PPC search campaigns. This creates an impenetrable 'Google Domination' effect—ensuring you show up in paid, organic, and local map results.",
        icon: Trophy,
      },
      {
        title: "High-Intent Focus",
        description:
          "Your VLA budget should be a capture tool for high-intent shoppers at the bottom of the funnel, not a piggy bank for Google's banner ad network. We prioritize placements that convert.",
        icon: Target,
      },
      {
        title: "Transparent Reporting",
        description:
          "Unlike most agencies, we show you exactly where your budget is going. Plain English reporting that reveals waste and demonstrates value.",
        icon: Search,
      },
      {
        title: "Budget Recapture Strategy",
        description:
          "We identify and eliminate thousands in monthly waste, then reallocate that budget to high-performing placements that actually sell cars.",
        icon: DollarSign,
      },
    ],
  },
  proof: {
    title: "Stop Guessing. Start Capturing.",
    items: [
      { stat: "$1000s", label: "wasted monthly on display ads" },
      { stat: "0%", label: "transparency from 'black box' PMax" },
      { stat: "100%", label: "feed optimization for every vehicle" },
      { stat: "3x", label: "coverage: paid + organic + maps" },
    ],
  },
  process: {
    title: "Get Your Free VLA Waste Audit",
    steps: [
      {
        number: "1",
        title: "Free Waste Analysis",
        description:
          "Let our experts analyze your current VLA or Performance Max campaign. We'll show you—in plain English—exactly how much of your budget is being wasted on low-value placements.",
      },
      {
        number: "2",
        title: "Clear Action Plan",
        description:
          "Receive a detailed plan to capture more high-intent shoppers. No obligation. No sales pitch. Just data showing you where your budget is really going.",
      },
      {
        number: "3",
        title: "Feed Optimization",
        description:
          "We meticulously clean and optimize your inventory feed—perfect pricing, high-res photos, and complete vehicle attributes for every listing.",
      },
      {
        number: "4",
        title: "Active Campaign Management",
        description:
          "Unlike 'set it and forget it' agencies, we actively manage your campaigns to minimize Display Network waste and maximize high-intent Search and Shopping placements.",
      },
    ],
  },
  cta: {
    title: "Stop Funding Google's Banner Network",
    description:
      "Get a free waste audit and discover exactly how much of your VLA budget is disappearing into low-value clicks. Call 813-501-3229 to schedule your audit today.",
  },
};

export default function VehicleAds() {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Google Vehicle Ads (VLA) Management - Stop Wasting Your Budget"
        description="Stop wasting thousands on Performance Max display ads. Expert VLA management that focuses your budget on high-intent Google Search and Shopping placements. Get a free waste audit."
        canonical="https://savvydealer.com/vehicle-ads"
        schemas={[organizationSchema, serviceSchema]}
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        <ProductPage {...vehicleAdsContent} />
      </main>
      <Footer />
    </div>
  );
}
