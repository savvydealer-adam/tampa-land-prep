import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Zap, Target, TrendingUp, Shield } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Service One",
    description: "Description of your first service offering",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  {
    icon: Target,
    title: "Service Two",
    description: "Description of your second service offering",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  {
    icon: TrendingUp,
    title: "Service Three",
    description: "Description of your third service offering",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  {
    icon: Shield,
    title: "Service Four",
    description: "Description of your fourth service offering",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
];

export default function Services() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Services | Your Company"
        description="Explore our range of professional services designed to help your business grow."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Comprehensive solutions tailored to your business needs
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get Started
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <Card key={index} className="overflow-visible" data-testid={`card-service-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-10 text-xl text-muted-foreground">
              Contact us today to learn how we can help your business grow
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
