import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { motion, useReducedMotion } from "framer-motion";
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
import fullyManagedImage from "@assets/generated_images/Fully_managed_marketing_orange_theme_c07bcc36.png";

const serviceSchema = createServiceSchema({
  id: "fully-managed-marketing",
  name: "Fully Managed Marketing for Auto Dealers",
  description: "Complete automotive marketing solution. We handle everything from co-op advertising to ROI tracking, delivering comprehensive white-glove service that drives real results.",
  url: "/fully-managed-marketing",
  price: "Custom",
});

export default function FullyManagedMarketing() {
  const { openLeadForm } = useLeadForm();
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
    viewport: { once: true, margin: "-50px" }
  };

  const features = [
    {
      title: "Single Source of Truth",
      description: "One team, one strategy, one report. No more conflicting advice from multiple vendors or trying to piece together disparate data sources.",
      icon: Target,
    },
    {
      title: "Co-op Mastery",
      description: "We maximize every dollar of your co-op funds, handling compliance, documentation, and strategy so you capture every available benefit without the headaches.",
      icon: DollarSign,
    },
    {
      title: "Vendor Wrangling",
      description: "Stop playing middleman between your website provider, inventory feed, CRM, and other vendors. We coordinate everything so systems work together seamlessly.",
      icon: Users,
    },
    {
      title: "Website Excellence",
      description: "Continuous optimization of your dealer website—speed, SEO, conversions, content, and user experience. Monthly improvements, not set-it-and-forget-it.",
      icon: Globe,
    },
    {
      title: "Multi-Channel Mastery",
      description: "Expert management of SEO, GEO, PPC, Facebook Ads, and emerging channels. Strategic budget allocation based on what's actually working for your inventory.",
      icon: Sparkles,
    },
    {
      title: "Creative That Converts",
      description: "Professional graphic design tailored to your dealership's brand. From social media graphics to landing pages, every asset is purpose-built to drive action.",
      icon: Palette,
    },
    {
      title: "Data-Driven Decisions",
      description: "Custom reporting that connects every marketing dollar to actual results. See which campaigns drive appointments, which vehicles perform best, and where to invest next.",
      icon: BarChart3,
    },
    {
      title: "Proactive Strategy",
      description: "Quarterly business reviews keep you ahead of market changes, competitive threats, and emerging opportunities. Strategy sessions that drive real ROI improvements.",
      icon: TrendingUp,
    },
    {
      title: "White-Glove Support",
      description: "Dedicated account manager who understands your dealership, your market, and your goals. Direct access when you need it, proactive communication when you don't.",
      icon: Shield,
    },
    {
      title: "Performance Accountability",
      description: "We don't hide behind vanity metrics. Clear attribution from click to close, with transparent reporting on what's working and what needs adjustment.",
      icon: Zap,
    },
  ];

  const benefits = [
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
  ];

  const stats = [
    { stat: "8+", label: "Services included" },
    { stat: "1", label: "Dedicated account manager" },
    { stat: "100%", label: "Co-op fund maximization" },
    { stat: "Monthly", label: "Performance reports" },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Comprehensive Audit & Discovery",
      description: "Deep dive into your current marketing ecosystem, vendor relationships, co-op opportunities, and competitive landscape. Identify what's working, what's broken, and where opportunities hide.",
    },
    {
      number: "2",
      title: "Strategic Roadmap Development",
      description: "Custom 90-day plan prioritizing quick wins while building long-term advantage. Clear milestones, realistic timelines, and measurable goals aligned to your business objectives.",
    },
    {
      number: "3",
      title: "Seamless Takeover & Optimization",
      description: "We handle all vendor transitions, account migrations, and system integrations. Minimal disruption, maximum improvement. Your team stays focused on sales while we handle the details.",
    },
    {
      number: "4",
      title: "Ongoing Management & Reporting",
      description: "Continuous optimization across all channels with monthly performance reporting and quarterly strategy sessions. Proactive adjustments based on data, market changes, and inventory needs.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Fully Managed Marketing - Complete Automotive Marketing Solution | Savvy Dealer"
        description="Focus on selling cars while we handle everything. Co-op management, vendor coordination, website optimization, SEO, PPC, social media, design, and ROI tracking—all from one expert team."
        canonical="https://savvydealer.com/fully-managed-marketing"
        schemas={[organizationSchema, serviceSchema]}
      />
      <Header />
      
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
          <div className="absolute inset-0">
            <img
              src={fullyManagedImage}
              alt="Fully Managed Marketing"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center sm:px-8">
            <Badge
              className="mb-8 border-orange-500/30 bg-orange-600 text-white"
              data-testid="badge-premium"
            >
              Premium Service
            </Badge>
            <h1 className="mb-8 font-serif text-5xl font-bold text-white sm:text-6xl lg:text-8xl">
              Complete Automotive Marketing Solution
            </h1>
            <p className="mb-12 text-xl text-white/80 sm:text-2xl lg:text-3xl">
              Focus on selling cars. We'll handle everything else.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button
                onClick={openLeadForm}
                size="lg"
                className="min-h-14 rounded-full bg-orange-600 px-10 text-lg hover:bg-orange-700"
                data-testid="button-hero-cta"
              >
                Request Free Audit
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-14 rounded-full border-white/20 bg-white/10 px-10 text-lg text-white backdrop-blur-sm hover:bg-white/20"
                data-testid="button-hero-phone"
              >
                <a href="tel:8135013229">Call (813) 501-3229</a>
              </Button>
            </div>
          </div>
        </section>

        <motion.section className="py-32" {...fadeInUp}>
          <div className="container mx-auto max-w-6xl px-6 text-center sm:px-8">
            <h2 className="mb-8 font-serif text-4xl font-bold sm:text-5xl lg:text-7xl">
              White-Glove Service
            </h2>
            <p className="mb-6 text-xl text-muted-foreground sm:text-2xl lg:text-3xl">
              From co-op management to vendor coordination, website optimization to ROI tracking—we deliver comprehensive service that eliminates hassles and maximizes results.
            </p>
          </div>
        </motion.section>

        <section className="bg-card py-32">
          <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <h2 className="mb-16 text-center font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Everything You Need
            </h2>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl p-6 hover-elevate"
                    data-testid={`benefit-${index}`}
                  >
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-600" />
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {features.map((feature, index) => {
          const isReversed = index % 2 === 1;
          const FeatureIcon = feature.icon;
          
          return (
            <section
              key={feature.title}
              className="py-24"
              data-testid={`feature-section-${index}`}
            >
              <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className={`grid items-center gap-16 lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`space-y-6 ${isReversed ? 'lg:col-start-2' : ''}`}>
                    <div className="inline-flex items-center gap-3 rounded-full border border-orange-600/20 bg-orange-600/10 px-5 py-2">
                      <FeatureIcon className="h-5 w-5 text-orange-600" />
                      <span className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                        {feature.title}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                      {feature.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground sm:text-xl">
                      {feature.description}
                    </p>
                  </div>

                  <div className={`relative ${isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600/20 to-orange-600/5 p-12 lg:p-16">
                      <FeatureIcon className="h-32 w-32 text-orange-600/40 sm:h-40 sm:w-40" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <motion.section className="bg-card py-32" {...fadeInUp}>
          <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <h2 className="mb-20 text-center font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              By The Numbers
            </h2>
            <motion.div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4" {...staggerChildren}>
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  data-testid={`stat-${index}`}
                  {...fadeInUp}
                >
                  <div className="mb-4 font-serif text-6xl font-bold text-orange-600 sm:text-7xl">
                    {item.stat}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <section className="py-32">
          <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <h2 className="mb-20 text-center font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              How It Works
            </h2>
            <div className="mx-auto max-w-5xl space-y-16">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-8"
                  data-testid={`process-step-${index}`}
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-600 font-serif text-3xl font-bold text-white">
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="mb-4 text-2xl font-bold sm:text-3xl">{step.title}</h3>
                    <p className="text-lg text-muted-foreground sm:text-xl">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-32">
          <div className="container mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 font-serif text-4xl font-bold sm:text-5xl lg:text-7xl">
                Ready to Simplify Your Marketing?
              </h2>
              <p className="mb-12 text-xl text-muted-foreground sm:text-2xl">
                Get a comprehensive audit showing exactly where you're leaving money on the table and how our fully managed approach would transform your results.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button
                  onClick={openLeadForm}
                  size="lg"
                  className="min-h-14 rounded-full bg-orange-600 px-10 text-lg hover:bg-orange-700"
                  data-testid="button-cta-final"
                >
                  Request Free Audit
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-h-14 rounded-full px-10 text-lg"
                  data-testid="button-cta-phone"
                >
                  <a href="tel:8135013229">Call (813) 501-3229</a>
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
