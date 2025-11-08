import { ProductPage, ProductPageProps } from "@/components/ProductPage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Brain, Database, Bell, Zap, BarChart3, Shield } from "lucide-react";

const attributionAIContent: ProductPageProps = {
  badge: "AI-Powered Analytics",
  title: "Attribution AI",
  subtitle: "The Anti-Dashboard Dashboard",
  heroDescription:
    "Stop drowning in dashboards. Attribution AI consolidates all your dealership data into one intelligent warehouse, using custom AI to analyze marketing, sales, inventory, and phone calls—finding issues before they impact your business and alerting the right people with actionable instructions.",
  accentColor: "#9333EA",
  benefits: {
    title: "Why Your Dealership Needs Attribution AI",
    items: [
      "Stop wasting time jumping between multiple dashboards",
      "Catch problems before they cost you money",
      "Empower your team with clear, actionable guidance",
      "Make data-driven decisions with confidence",
      "See the complete picture of your dealership's performance",
      "Reduce manual reporting and analysis time by 80%+",
      "Get alerted to issues automatically—no more guesswork",
      "Every alert includes step-by-step fix instructions",
    ],
  },
  features: {
    title: "How Attribution AI Works",
    description:
      "A comprehensive AI system that monitors your entire operation and provides proactive guidance before issues become crises.",
    items: [
      {
        title: "Unified Data Warehouse",
        description:
          "All your data in one place—marketing metrics, sales performance, inventory levels, and phone call analytics seamlessly integrated.",
        icon: Database,
      },
      {
        title: "Custom AI Analysis",
        description:
          "Proprietary AI trained on automotive data continuously monitors your entire operation, identifying patterns and anomalies that humans miss.",
        icon: Brain,
      },
      {
        title: "Proactive Alerts",
        description:
          "Get notified before problems become crises. Our AI detects issues early and alerts the right department or employee automatically.",
        icon: Bell,
      },
      {
        title: "Actionable Instructions",
        description:
          "No more guessing. Every alert includes specific, step-by-step instructions to fix the problem—so your team knows exactly what to do.",
        icon: Zap,
      },
      {
        title: "Real-Time Insights",
        description:
          "Monitor your entire operation from a single view. See what's working, what's not, and why—all in real-time with AI-powered explanations.",
        icon: BarChart3,
      },
      {
        title: "Risk Prevention",
        description:
          "Identify revenue leaks, inventory issues, marketing inefficiencies, and sales bottlenecks before they impact your bottom line.",
        icon: Shield,
      },
    ],
  },
  proof: {
    title: "Attribution AI Impact",
    items: [
      { stat: "80%+", label: "reduction in reporting time" },
      { stat: "1", label: "unified data warehouse" },
      { stat: "24/7", label: "AI monitoring & alerts" },
      { stat: "100%", label: "actionable insights" },
    ],
  },
  process: {
    title: "How We Deploy Attribution AI",
    steps: [
      {
        number: "1",
        title: "Data Integration Audit",
        description:
          "We assess your current systems—CRM, DMS, marketing platforms, phone systems—and plan the optimal data warehouse architecture.",
      },
      {
        number: "2",
        title: "Custom AI Training",
        description:
          "Our AI is trained on your specific dealership data and goals, learning what's normal for your operation and what signals a problem.",
      },
      {
        number: "3",
        title: "Unified Warehouse Setup",
        description:
          "All data sources are consolidated into one warehouse with real-time syncing, giving you a single source of truth.",
      },
      {
        number: "4",
        title: "Alert System Activation",
        description:
          "AI monitoring begins, with customized alerts sent to the right people with specific instructions on how to resolve each issue.",
      },
    ],
  },
  cta: {
    title: "Ready to Stop Drowning in Data?",
    description:
      "Get a free audit of your current reporting systems and discover how Attribution AI can save your team hours every week while preventing costly issues.",
  },
};

export default function AttributionAI() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProductPage {...attributionAIContent} />
      </main>
      <Footer />
    </div>
  );
}
