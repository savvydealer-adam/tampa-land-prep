import { ProductPage, ProductPageProps } from "@/components/ProductPage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, Brain, TrendingUp, Target, FileText, Sparkles } from "lucide-react";

const dealerSeoContent: ProductPageProps = {
  badge: "Search Engine Optimization",
  title: "Dealer SEO + GEO Strategy",
  subtitle: "Appear First in Google AND ChatGPT",
  heroDescription:
    "By aligning our SEO and GEO (Generative Engine Optimization) strategies, we ensure your dealership doesn't just compete—it appears first and performs faster wherever shoppers are searching, from Google to ChatGPT.",
  accentColor: "#00E676",
  benefits: {
    title: "SEO + GEO: The New Standard For Dealer Visibility",
    items: [
      "Appear in AI-generated answers from ChatGPT, Google Gemini, and Perplexity",
      "Dominate traditional Google search results with proven SEO",
      "85% of car buyers research online before purchasing",
      "Answer-first content optimized for AI recommendations",
      "Original, Google-friendly content creation for organic growth",
      "Combined SEO/SEM management for maximum visibility",
      "75%+ of shoppers expected to use AI tools by end of 2025",
      "National keyword rankings for brand search terms",
    ],
  },
  features: {
    title: "Dual Optimization Strategy",
    description:
      "Traditional SEO gets you ranked on Google. GEO ensures AI chatbots recommend your dealership when buyers ask questions. Together, they create complete search dominance.",
    items: [
      {
        title: "Generative Engine Optimization (GEO)",
        description:
          "Optimize your content to appear in AI-generated answers from ChatGPT, Google Gemini, Perplexity, and other LLMs that car buyers trust.",
        icon: Brain,
      },
      {
        title: "Traditional SEO Excellence",
        description:
          "Proven search engine optimization strategies that deliver rankings, traffic, and leads from Google and Bing search results.",
        icon: Search,
      },
      {
        title: "Answer-First Content",
        description:
          "AI loves clarity. We structure content to directly answer buyer questions, then add context—exactly what LLMs and search engines want.",
        icon: FileText,
      },
      {
        title: "Conversational Long-Tail Keywords",
        description:
          "Target specific buyer questions like 'best electric SUVs for winter driving' instead of generic terms that AI can't interpret well.",
        icon: Target,
      },
      {
        title: "Local Authority Building",
        description:
          "Create hyper-local content addressing community-specific questions. AI prioritizes relevant, helpful answers tied to location.",
        icon: TrendingUp,
      },
      {
        title: "Schema Markup Optimization",
        description:
          "Perfect your schema.org markup (@type: AutoDealer, areasServed, NAP consistency) so AI tools accurately represent your dealership.",
        icon: Sparkles,
      },
    ],
  },
  proof: {
    title: "SEO + GEO Impact",
    items: [
      { stat: "85%", label: "of buyers research online" },
      { stat: "75%+", label: "will use AI tools by 2025" },
      { stat: "66%", label: "traffic increase (client)" },
      { stat: "100%", label: "Google-friendly content" },
    ],
  },
  process: {
    title: "Our SEO + GEO Process",
    steps: [
      {
        number: "1",
        title: "Audit & AI Visibility Check",
        description:
          "Analyze current search rankings AND test how your dealership appears in AI-generated responses. Identify quick wins for both channels.",
      },
      {
        number: "2",
        title: "Content Strategy Development",
        description:
          "Build answer-first content targeting conversational buyer questions. Optimize schema markup and create FAQ pages AI tools can parse easily.",
      },
      {
        number: "3",
        title: "Implementation & Optimization",
        description:
          "Deploy optimized content, perfect schema.org markup, and build local authority through hyper-local content addressing community questions.",
      },
      {
        number: "4",
        title: "Monitor & Refine",
        description:
          "Track rankings in Google AND visibility in AI-generated answers. Continuously refine based on performance in both traditional and generative search.",
      },
    ],
  },
  cta: {
    title: "Ready to Dominate Both Google AND AI Search?",
    description:
      "Discover how our combined SEO + GEO strategy ensures your dealership appears first wherever car buyers are searching.",
  },
};

export default function DealerSeo() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProductPage {...dealerSeoContent} />
      </main>
      <Footer />
    </div>
  );
}
