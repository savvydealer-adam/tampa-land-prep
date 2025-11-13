import { ProductPage, ProductPageProps } from "@/components/ProductPage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Sparkles, 
  TrendingUp, 
  Users, 
  Zap, 
  BarChart3, 
  Target,
  Globe,
  Palette,
  DollarSign,
  Shield
} from "lucide-react";
import { SEO, organizationSchema, createServiceSchema } from "@/components/SEO";

const serviceSchema = createServiceSchema({
  id: "fully-managed-marketing",
  name: "Fully Managed Marketing for Auto Dealers",
  description: "Complete automotive marketing solution. We handle everything from co-op advertising to ROI tracking, delivering comprehensive white-glove service that drives real results.",
  url: "/fully-managed-marketing",
  price: "Custom",
});

const fullyManagedContent: ProductPageProps = {
  badge: "Premium Service",
  title: "Complete Automotive Marketing Solution",
  subtitle: "White-Glove Service That Handles Everything",
  heroDescription:
    "Focus on what you do best—selling cars—while we handle your complete marketing ecosystem. From co-op management to vendor coordination, website optimization to ROI tracking, we deliver comprehensive service that eliminates hassles and maximizes results.",
  accentColor: "#FF6B35",
  benefits: {
    title: "Everything You Need, Nothing You Don't",
    items: [
      "Single point of contact for all marketing needs",
      "Co-op advertising management and optimization",
      "Complete 3rd party vendor coordination",
      "Website management and continuous optimization",
      "SEO and GEO (Generative Engine Optimization)",
      "SEM/PPC campaign management across all platforms",
      "Facebook and social media advertising",
      "Professional graphic design and creative services",
      "Comprehensive ROI tracking and transparent reporting",
      "Dedicated account manager who knows your business",
      "Quarterly strategy sessions to stay ahead",
      "No vendor juggling—we coordinate everything",
    ],
  },
  features: {
    title: "What Makes Our Fully Managed Service Different",
    description:
      "Most agencies offer piecemeal services that leave you coordinating multiple vendors and struggling to see the full picture. Our fully managed approach takes everything off your plate.",
    items: [
      {
        title: "Single Source of Truth",
        description:
          "One team, one strategy, one report. No more conflicting advice from multiple vendors or trying to piece together disparate data sources.",
        icon: Target,
      },
      {
        title: "Co-op Mastery",
        description:
          "We maximize every dollar of your co-op funds, handling compliance, documentation, and strategy so you capture every available benefit without the headaches.",
        icon: DollarSign,
      },
      {
        title: "Vendor Wrangling",
        description:
          "Stop playing middleman between your website provider, inventory feed, CRM, and other vendors. We coordinate everything so systems work together seamlessly.",
        icon: Users,
      },
      {
        title: "Website Excellence",
        description:
          "Continuous optimization of your dealer website—speed, SEO, conversions, content, and user experience. Monthly improvements, not set-it-and-forget-it.",
        icon: Globe,
      },
      {
        title: "Multi-Channel Mastery",
        description:
          "Expert management of SEO, GEO, PPC, Facebook Ads, and emerging channels. Strategic budget allocation based on what's actually working for your inventory.",
        icon: Sparkles,
      },
      {
        title: "Creative That Converts",
        description:
          "Professional graphic design tailored to your dealership's brand. From social media graphics to landing pages, every asset is purpose-built to drive action.",
        icon: Palette,
      },
      {
        title: "Data-Driven Decisions",
        description:
          "Custom reporting that connects every marketing dollar to actual results. See which campaigns drive appointments, which vehicles perform best, and where to invest next.",
        icon: BarChart3,
      },
      {
        title: "Proactive Strategy",
        description:
          "Quarterly business reviews keep you ahead of market changes, competitive threats, and emerging opportunities. Strategy sessions that drive real ROI improvements.",
        icon: TrendingUp,
      },
      {
        title: "White-Glove Support",
        description:
          "Dedicated account manager who understands your dealership, your market, and your goals. Direct access when you need it, proactive communication when you don't.",
        icon: Shield,
      },
      {
        title: "Performance Accountability",
        description:
          "We don't hide behind vanity metrics. Clear attribution from click to close, with transparent reporting on what's working and what needs adjustment.",
        icon: Zap,
      },
    ],
  },
  proof: {
    title: "Fully Managed Marketing By The Numbers",
    items: [
      { stat: "8+", label: "Services included" },
      { stat: "1", label: "Dedicated account manager" },
      { stat: "100%", label: "Co-op fund maximization" },
      { stat: "Monthly", label: "Performance reports" },
    ],
  },
  process: {
    title: "How Our Fully Managed Service Works",
    steps: [
      {
        number: "1",
        title: "Comprehensive Audit & Discovery",
        description:
          "Deep dive into your current marketing ecosystem, vendor relationships, co-op opportunities, and competitive landscape. Identify what's working, what's broken, and where opportunities hide.",
      },
      {
        number: "2",
        title: "Strategic Roadmap Development",
        description:
          "Custom 90-day plan prioritizing quick wins while building long-term advantage. Clear milestones, realistic timelines, and measurable goals aligned to your business objectives.",
      },
      {
        number: "3",
        title: "Seamless Takeover & Optimization",
        description:
          "We handle all vendor transitions, account migrations, and system integrations. Minimal disruption, maximum improvement. Your team stays focused on sales while we handle the details.",
      },
      {
        number: "4",
        title: "Ongoing Management & Reporting",
        description:
          "Continuous optimization across all channels with monthly performance reporting and quarterly strategy sessions. Proactive adjustments based on data, market changes, and inventory needs.",
      },
    ],
  },
  cta: {
    title: "Ready to Simplify Your Marketing?",
    description:
      "Get a comprehensive audit showing exactly where you're leaving money on the table and how our fully managed approach would transform your results.",
  },
};

export default function FullyManagedMarketing() {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Fully Managed Marketing - Complete Automotive Marketing Solution | Savvy Dealer"
        description="Focus on selling cars while we handle everything. Co-op management, vendor coordination, website optimization, SEO, PPC, social media, design, and ROI tracking—all from one expert team."
        canonical="https://savvydealer.com/fully-managed-marketing"
        schemas={[organizationSchema, serviceSchema]}
      />
      <Header />
      <ProductPage {...fullyManagedContent} />
      <Footer />
    </div>
  );
}
