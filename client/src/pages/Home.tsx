import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Rocket, Users, Target, Zap } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast & Reliable",
    description: "Built with modern technologies for optimal performance"
  },
  {
    icon: Users,
    title: "User Focused",
    description: "Designed with your customers in mind"
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Focused on delivering measurable outcomes"
  },
  {
    icon: Zap,
    title: "Easy to Use",
    description: "Intuitive interface that just works"
  },
];

export default function Home() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Home | Your Company Name"
        description="Your company description goes here. Describe what makes your business unique and why customers should choose you."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-7xl">
              Welcome to Your Website
            </h1>
            <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
              Replace this with your unique value proposition. Tell visitors what you do and why they should care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
                Get Started
              </Button>
              <Button onClick={() => window.location.href = "/about"} size="lg" variant="outline" className="rounded-full" data-testid="button-hero-learn-more">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                Why Choose Us
              </h2>
              <p className="text-xl text-muted-foreground">
                The benefits of working with our company
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="text-center" data-testid={`card-feature-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                  About Our Company
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Add information about your company here. This is a great place to tell your story,
                  explain your mission, and highlight what makes you different from competitors.
                </p>
                <p className="mb-8 text-lg text-muted-foreground">
                  You can describe your values, your team, your experience, or anything else that
                  helps visitors understand who you are and why they should trust you.
                </p>
                <Button onClick={() => window.location.href = "/about"} size="lg" variant="outline" className="rounded-full" data-testid="button-about-link">
                  Learn More About Us
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="aspect-square w-full max-w-md rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-10 text-xl text-muted-foreground">
              Contact us today to learn how we can help you achieve your goals
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-cta-contact">
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
