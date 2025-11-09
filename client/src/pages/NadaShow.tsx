import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DemoBookingModal } from "@/components/DemoBookingModal";
import { SEO, organizationSchema } from "@/components/SEO";
import {
  Sparkles,
  Target,
  DollarSign,
  BarChart3,
  Trophy,
  Users,
  MapPin,
  Calendar,
} from "lucide-react";
import nadaLogo from "@assets/NADA2026_SavvyDealer_Booth6760N_ext_black_1762695345140.png";

const reasons = [
  {
    icon: Sparkles,
    title: "EXCLUSIVE FIRST LOOK: AI Analytics Dashboard",
    description:
      "Be among the first to see our new AI-powered analytics platform that turns your marketing data into actionable intelligence. Launch exclusive to NADA Show attendees.",
  },
  {
    icon: Target,
    title: "Master Generative Engine Optimization (GEO)",
    description:
      "Discover how we're making dealerships discoverable in ChatGPT, Perplexity, and other AI search tools—before your competitors even know what GEO is. We've been optimizing for AI since before it was mainstream.",
  },
  {
    icon: DollarSign,
    title: "Stop Wasting Ad Spend",
    description:
      "See real case studies showing where dealers are hemorrhaging thousands in banner ad waste and PPC inefficiencies. Walk away with a custom audit framework for your store.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting That Actually Makes Sense",
    description:
      "Experience the difference between vendor dashboards that hide problems and reporting that empowers decisions. See how we track every dollar from click to close.",
  },
  {
    icon: Trophy,
    title: "Learn From #1 Performers",
    description:
      "Discover the strategies that helped clients like St. Pete Mitsubishi become the #1 Mitsubishi dealer in the US. Real results, real dealers, real ROI.",
  },
  {
    icon: Users,
    title: "Meet the Team That Outsmarts, Not Outspends",
    description:
      "Talk strategy with our VP of Sales Adam, who analyzed hundreds of dealership operations as a vAuto performance manager. Get insights from 20+ years of automotive retail expertise.",
  },
];

export default function NadaShow() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="NADA Show 2026 - Visit Savvy Dealer at Booth 6760N"
        description="Join us at NADA Show 2026 in Las Vegas, February 4-6. Visit Booth 6760N for exclusive demos of our AI analytics dashboard, GEO strategies, and transparent reporting tools."
        canonical="https://savvydealer.com/nada-show"
        schemas={organizationSchema}
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* NADA Logo */}
              <div className="mb-8 flex justify-center">
                <img
                  src={nadaLogo}
                  alt="NADA Show 2026 - Savvy Dealer Booth 6760N - February 4-6, Las Vegas"
                  className="h-auto w-full max-w-3xl"
                  data-testid="img-nada-logo"
                />
              </div>

              {/* Event Details */}
              <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-lg sm:text-xl">
                <div className="flex items-center gap-2" data-testid="text-booth-number">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Booth 6760N</span>
                </div>
                <span className="text-muted-foreground">|</span>
                <div className="flex items-center gap-2" data-testid="text-event-dates">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>February 4-6, 2026</span>
                </div>
                <span className="text-muted-foreground">|</span>
                <span>Las Vegas</span>
              </div>

              <h1 className="mb-6 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Why Visit Savvy Dealer at NADA Show 2026
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Get exclusive access to our AI-powered analytics, master GEO before your
                competitors, and discover strategies from top-performing dealers.
              </p>

              {/* Primary CTA */}
              <Button
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="text-lg font-semibold"
                data-testid="button-book-demo-hero"
              >
                Book a Demo at Booth 6760N
              </Button>
            </div>
          </div>
        </section>

        {/* Reasons to Visit */}
        <section className="bg-card py-16 sm:py-24">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg border bg-background p-6 hover-elevate"
                    data-testid={`card-reason-${index}`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Reserve Your Demo Spot
            </h2>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Slots are filling fast. Book your personalized demo at Booth 6760N and
              experience the future of automotive digital marketing.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="w-full text-lg font-semibold sm:w-auto"
                data-testid="button-book-demo-middle"
              >
                Book a Demo
              </Button>
              <div className="text-sm text-muted-foreground">
                Available: Feb 4-6, 2026 | 9:00 AM - 5:00 PM
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
              See You at Booth 6760N
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Don't miss this opportunity to transform your dealership's digital marketing
              strategy. NADA Show 2026 attendees get exclusive access to our latest
              innovations.
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsBookingOpen(true)}
              className="border-primary-foreground bg-transparent text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              data-testid="button-book-demo-footer"
            >
              Book a Demo Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />

      {/* Demo Booking Modal */}
      <DemoBookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}
