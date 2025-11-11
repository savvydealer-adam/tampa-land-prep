import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Sparkles, Eye, Brain, Zap } from "lucide-react";
import { SEO, organizationSchema } from "@/components/SEO";
import aiImage from "@assets/generated_images/Anti-Dashboard_AI_purple_theme_4cd41597.png";

export default function AttributionAI() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Anti-Dashboard AI - A Dashboard You'll Never Have to Look At"
        description="What if problems fixed themselves? An AI agent that watches your dashboards, spots issues, and takes action automatically. No human intervention required. Coming February 2026 at NADA."
        canonical="https://savvydealer.com/attribution-ai"
        robots="index, follow"
        schemas={organizationSchema}
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section - Apple-style dramatic intro */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-purple-50/30 to-background dark:from-background dark:via-purple-950/10 dark:to-background">
          <div className="container mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              {/* Minimal badge */}
              <div className="mb-12 inline-flex items-center gap-2 rounded-full bg-purple-100/80 px-5 py-2 backdrop-blur-sm dark:bg-purple-900/30">
                <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  NADA 2026
                </span>
              </div>

              {/* Massive headline - Apple style */}
              <h1 className="mb-8 font-serif text-7xl font-bold leading-[1.05] tracking-tight sm:text-8xl lg:text-9xl">
                Anti-Dashboard
              </h1>
              
              <h2 className="mb-12 font-serif text-5xl font-bold leading-tight text-purple-600 sm:text-6xl lg:text-7xl dark:text-purple-400">
                A dashboard you'll never have to look at.
              </h2>

              {/* Clean, minimal subhead */}
              <p className="mb-16 text-2xl text-muted-foreground sm:text-3xl">
                What if problems fixed themselves? February 2026.
              </p>

              {/* Single, prominent CTA */}
              <Button
                onClick={openLeadForm}
                size="lg"
                className="h-14 bg-purple-600 px-8 text-lg font-medium text-white hover:bg-purple-700"
                data-testid="button-schedule-demo"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>

          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Large Image Section */}
        <section className="py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={aiImage}
                alt="Anti-Dashboard AI"
                className="h-auto w-full"
                data-testid="img-attribution-ai"
              />
            </div>
          </div>
        </section>

        {/* What to Expect - Simplified Apple style */}
        <section className="py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                It watches.
                <br />
                It thinks.
                <br />
                It acts.
              </h2>
              <p className="text-xl text-muted-foreground sm:text-2xl">
                An intelligence that reads your dashboards, spots problems,
                <br />
                and fixes them before you even know they exist.
              </p>
            </div>
          </div>
        </section>

        {/* Three Features - Clean layout without cards */}
        <section className="py-32 bg-card">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-24 md:gap-32 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <Eye className="h-16 w-16 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold sm:text-3xl">
                  Always Watching
                </h3>
                <p className="text-lg text-muted-foreground">
                  Monitors every metric, every dashboard, 24/7. You don't have to.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <Brain className="h-16 w-16 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold sm:text-3xl">
                  Thinks Like You
                </h3>
                <p className="text-lg text-muted-foreground">
                  Knows what's normal. Spots what's wrong. Understands what to do.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <Zap className="h-16 w-16 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold sm:text-3xl">
                  Acts Automatically
                </h3>
                <p className="text-lg text-muted-foreground">
                  Sends alerts. Notifies your team. Fixes issues. No human required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Clean and minimal */}
        <section className="py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                The future runs itself.
              </h2>
              <p className="mb-12 text-xl text-muted-foreground sm:text-2xl">
                See it first at NADA 2026. Limited demo slots available.
              </p>
              <Button
                onClick={openLeadForm}
                size="lg"
                className="h-14 bg-purple-600 px-8 text-lg font-medium text-white hover:bg-purple-700"
                data-testid="button-cta-schedule-demo"
              >
                Reserve Your Spot
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
