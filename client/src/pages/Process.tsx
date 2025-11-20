import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Phone, MapPin, FileText, Truck, CheckCircle2, Clock, DollarSign, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Initial Consultation",
    description: "Contact us by phone, email, or our online form. We'll discuss your project requirements, timeline, and any special considerations.",
    details: [
      "Free phone consultation",
      "Review project scope",
      "Discuss timeline requirements",
      "Answer your questions"
    ]
  },
  {
    number: "02",
    icon: MapPin,
    title: "Site Assessment",
    description: "We visit your property to evaluate the terrain, access points, soil conditions, and any potential challenges.",
    details: [
      "On-site property evaluation",
      "Soil and terrain analysis",
      "Access and logistics review",
      "Photo documentation"
    ]
  },
  {
    number: "03",
    icon: FileText,
    title: "Detailed Quote",
    description: "Receive a comprehensive written estimate with transparent pricing, project timeline, and scope of work.",
    details: [
      "Itemized cost breakdown",
      "Project timeline estimate",
      "Equipment and materials list",
      "Written guarantee"
    ]
  },
  {
    number: "04",
    icon: Truck,
    title: "Project Execution",
    description: "Our experienced team arrives on schedule with the right equipment to complete your project safely and efficiently.",
    details: [
      "Professional crew on-site",
      "Safety protocols followed",
      "Regular progress updates",
      "Minimal disruption"
    ]
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Final Inspection",
    description: "We conduct a thorough walkthrough with you to ensure the work meets your expectations and our quality standards.",
    details: [
      "Complete site cleanup",
      "Final walkthrough",
      "Quality verification",
      "Documentation and photos"
    ]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most projects completed within days, not weeks"
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges"
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete coverage for your peace of mind"
  }
];

export default function Process() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | How It Works - Land Clearing Process & Timeline"
        description="Learn about our 5-step land clearing process in Tampa. From consultation to completion, we make land preparation simple and stress-free."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              How It Works
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Our proven 5-step process ensures your project is completed on time, on budget, and to your exact specifications
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get Started Today
            </Button>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative"
                  data-testid={`step-${index}`}
                >
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-12 top-32 hidden h-full w-0.5 bg-primary/20 md:block" />
                  )}
                  
                  <div className="grid gap-8 md:grid-cols-12 md:gap-12">
                    {/* Step Number and Icon */}
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-4 md:flex-col md:items-start">
                        <div className="text-6xl font-bold text-primary/20">
                          {step.number}
                        </div>
                        <div className="rounded-lg bg-primary/10 p-3">
                          <step.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="md:col-span-9">
                      <Card className="hover-elevate">
                        <CardHeader>
                          <CardTitle className="text-2xl">{step.title}</CardTitle>
                          <CardDescription className="text-base">
                            {step.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Why Choose Our Process
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We've refined our approach over 15+ years to deliver the best possible experience
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center" data-testid={`benefit-${index}`}>
                  <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Typical Project Timeline
              </h2>
              <p className="text-lg text-muted-foreground">
                From first contact to project completion
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card data-testid="card-small-projects">
                <CardHeader>
                  <CardTitle>Small to Medium Projects</CardTitle>
                  <CardDescription>
                    Residential lots, driveways, small commercial sites
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="mb-1 font-semibold">Day 1</div>
                    <div className="text-sm text-muted-foreground">Initial consultation and site visit</div>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold">Day 2-3</div>
                    <div className="text-sm text-muted-foreground">Quote preparation and approval</div>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold">Day 4-6</div>
                    <div className="text-sm text-muted-foreground">Project execution and completion</div>
                  </div>
                  <div className="mt-4 rounded-lg bg-primary/10 p-4 text-center">
                    <div className="font-serif text-2xl font-bold text-primary">3-7 Days</div>
                    <div className="text-sm text-muted-foreground">Average completion time</div>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-large-projects">
                <CardHeader>
                  <CardTitle>Large Commercial Projects</CardTitle>
                  <CardDescription>
                    Multi-acre sites, major demolition, development projects
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="mb-1 font-semibold">Week 1</div>
                    <div className="text-sm text-muted-foreground">Site assessment and detailed planning</div>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold">Week 2</div>
                    <div className="text-sm text-muted-foreground">Permitting and approvals</div>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold">Week 3+</div>
                    <div className="text-sm text-muted-foreground">Phased execution and completion</div>
                  </div>
                  <div className="mt-4 rounded-lg bg-primary/10 p-4 text-center">
                    <div className="font-serif text-2xl font-bold text-primary">2-4 Weeks</div>
                    <div className="text-sm text-muted-foreground">Average completion time</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Start Your Project Today
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Contact us now to schedule your free consultation and site assessment
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              Request Free Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
