import { ProductPage, ProductPageProps } from "@/components/ProductPage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Zap, TrendingUp, Shield, DollarSign, Smartphone } from "lucide-react";

const independentDealerWebsitesContent: ProductPageProps = {
  badge: "Independent Dealer Solutions",
  title: "Independent Dealer Websites",
  subtitle: "Premium Websites for Non-Franchised Dealers",
  heroDescription:
    "Purpose-built websites for independent dealers and buy-here-pay-here lots. No franchise requirements, no corporate restrictions—just powerful websites designed to sell more cars and grow your business.",
  accentColor: "#14B8A6",
  benefits: {
    title: "Why Independent Dealers Choose Us",
    items: [
      "Custom designs tailored to your unique inventory",
      "No franchise fees or corporate restrictions",
      "Built-in credit application and financing tools",
      "Inventory management made simple and efficient",
      "Mobile-optimized for on-the-go car buyers",
      "Affordable pricing with transparent monthly costs",
      "Lead capture and customer management tools",
      "Fast page loads and SEO optimization included",
    ],
  },
  features: {
    title: "Built For Independent Dealers",
    description:
      "We understand the unique challenges of independent dealers. Your website should work as hard as you do—capturing leads, showcasing inventory, and converting browsers into buyers.",
    items: [
      {
        title: "Flexible Inventory Display",
        description:
          "Showcase your unique mix of vehicles with custom categories, pricing displays, and special financing callouts that work for your business model.",
        icon: Users,
      },
      {
        title: "Fast & Affordable",
        description:
          "Premium website performance without franchise-level pricing. Get enterprise features at rates that make sense for independent dealers.",
        icon: DollarSign,
      },
      {
        title: "Lead Generation Focus",
        description:
          "Capture more leads with built-in contact forms, credit applications, and call-to-action buttons optimized for conversion.",
        icon: TrendingUp,
      },
      {
        title: "No Corporate Restrictions",
        description:
          "Your website, your rules. Promote your financing options, warranty programs, and unique selling points without franchise limitations.",
        icon: Shield,
      },
      {
        title: "Easy Inventory Updates",
        description:
          "Simple tools to add, edit, and remove vehicles. Update pricing, photos, and descriptions in minutes—no technical expertise required.",
        icon: Zap,
      },
      {
        title: "Mobile-First Design",
        description:
          "Most car buyers browse on phones. Your website looks perfect and loads fast on every device, from smartphones to desktops.",
        icon: Smartphone,
      },
    ],
  },
  proof: {
    title: "Independent Dealer Results",
    items: [
      { stat: "50%", label: "more online leads" },
      { stat: "100%", label: "mobile-optimized" },
      { stat: "24/7", label: "inventory visibility" },
      { stat: "$0", label: "franchise compliance fees" },
    ],
  },
  process: {
    title: "Getting Started Is Simple",
    steps: [
      {
        number: "1",
        title: "Discovery Call",
        description:
          "We learn about your dealership, inventory mix, and business goals to design a website that fits your needs perfectly.",
      },
      {
        number: "2",
        title: "Custom Design & Setup",
        description:
          "Build your website with your branding, inventory, and unique features. Set up financing tools and lead capture forms.",
      },
      {
        number: "3",
        title: "Training & Launch",
        description:
          "Learn how to manage your inventory and website content. We handle the technical details so you can focus on selling cars.",
      },
      {
        number: "4",
        title: "Ongoing Support",
        description:
          "Get continuous support and updates. We're here to help your website evolve as your dealership grows.",
      },
    ],
  },
  cta: {
    title: "Ready For a Website Built For Your Dealership?",
    description:
      "Join independent dealers who are capturing more leads and selling more vehicles with websites designed specifically for their business.",
  },
};

export default function IndependentDealerWebsites() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProductPage {...independentDealerWebsitesContent} />
      </main>
      <Footer />
    </div>
  );
}
