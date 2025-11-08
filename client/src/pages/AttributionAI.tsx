import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Brain, Sparkles, Calendar, MapPin, Rocket } from "lucide-react";

export default function AttributionAI() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-background to-purple-50/30 py-24 dark:from-purple-950/20 dark:via-background dark:to-purple-950/10">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-6 py-3 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Exclusive Preview
                </span>
              </div>

              <h1 className="mb-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Something Big is Coming
                <br />
                <span className="text-purple-600 dark:text-purple-400">at NADA 2026</span>
              </h1>

              <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
                The future of automotive attribution and analytics is about to change forever.
              </p>

              <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">February 2026</span>
                </div>
                <div className="hidden h-1 w-1 rounded-full bg-muted-foreground sm:block" />
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">NADA Show 2026</span>
                </div>
              </div>

              <Button
                onClick={openLeadForm}
                size="lg"
                className="bg-purple-600 text-white hover:bg-purple-700"
                data-testid="button-schedule-demo"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Your Exclusive Demo at NADA
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                What to Expect
              </h2>
              <p className="text-lg text-muted-foreground">
                A revolutionary approach to understanding your dealership's complete performance story
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="overflow-visible p-8 hover-elevate">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-md bg-purple-500/10">
                  <Brain className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold">AI-Powered Intelligence</h3>
                <p className="text-muted-foreground">
                  Advanced AI that understands automotive data like never before, finding insights humans miss.
                </p>
              </Card>

              <Card className="overflow-visible p-8 hover-elevate">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-md bg-purple-500/10">
                  <Sparkles className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Unified Attribution</h3>
                <p className="text-muted-foreground">
                  See the complete customer journey across all touchpoints, finally solving the attribution puzzle.
                </p>
              </Card>

              <Card className="overflow-visible p-8 hover-elevate">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-md bg-purple-500/10">
                  <Rocket className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Proactive Action</h3>
                <p className="text-muted-foreground">
                  Get notified before problems become crises, with clear instructions on exactly what to fix.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-card py-24">
          <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">
                Be Among the First to Experience It
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Limited demo slots available at NADA 2026. Schedule your exclusive preview today
                and discover how Attribution AI will transform your dealership's performance.
              </p>
              <Button
                onClick={openLeadForm}
                size="lg"
                className="bg-purple-600 text-white hover:bg-purple-700"
                data-testid="button-cta-schedule-demo"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Reserve Your Demo Slot Now
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Full details will be revealed at NADA 2026
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
