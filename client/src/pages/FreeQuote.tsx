import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { DollarSign, Clock, CheckCircle2, Phone } from "lucide-react";

const pricing = [
  {
    service: "Residential Lot Clearing",
    range: "$1,500 - $5,000",
    factors: [
      "Lot size (typically 0.25 - 1 acre)",
      "Number and size of trees",
      "Brush density",
      "Access and terrain",
      "Debris disposal requirements"
    ]
  },
  {
    service: "Land Grading & Leveling",
    range: "$1,200 - $4,500",
    factors: [
      "Area to be graded",
      "Amount of cut/fill needed",
      "Soil conditions",
      "Drainage requirements",
      "Finish grade specifications"
    ]
  },
  {
    service: "Pool Excavation",
    range: "$2,000 - $6,000",
    factors: [
      "Pool size and depth",
      "Soil type and conditions",
      "Access for equipment",
      "Hauling distance",
      "Site obstacles"
    ]
  },
  {
    service: "Driveway Preparation",
    range: "$1,000 - $3,500",
    factors: [
      "Driveway length and width",
      "Base depth required",
      "Grading complexity",
      "Material delivery",
      "Compaction needs"
    ]
  },
  {
    service: "Building Demolition",
    range: "$5,000 - $25,000+",
    factors: [
      "Structure size and type",
      "Materials (wood, concrete, metal)",
      "Hazardous material abatement",
      "Utility disconnection",
      "Debris volume and disposal"
    ]
  },
  {
    service: "Commercial Site Clearing",
    range: "Custom Quote",
    factors: [
      "Project acreage",
      "Vegetation density",
      "Grading requirements",
      "Environmental permits",
      "Project timeline"
    ]
  }
];

const quoteFactors = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Detailed written estimates with itemized costs and no hidden fees"
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most quotes provided within 24 hours of site visit"
  },
  {
    icon: CheckCircle2,
    title: "No Obligation",
    description: "Free quotes with absolutely no pressure to commit"
  }
];

export default function FreeQuote() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Free Quote - Land Clearing Cost Estimator"
        description="Get a free quote for land clearing in Tampa Bay. Transparent pricing for lot clearing, grading, excavation, and demolition. No hidden fees."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Free Project Quote
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Get a detailed, transparent estimate for your land clearing, grading, or demolition project
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Request Your Free Quote
            </Button>
          </div>
        </section>

        {/* Quote Benefits */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Quote Process
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Simple, fast, and completely transparent
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {quoteFactors.map((factor, index) => (
                <div key={index} className="text-center" data-testid={`factor-${index}`}>
                  <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-4">
                    <factor.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{factor.title}</h3>
                  <p className="text-muted-foreground">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typical Pricing */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Typical Project Costs
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                General pricing ranges to help you budget (actual costs vary by project specifics)
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricing.map((item, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-pricing-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.service}</CardTitle>
                    <CardDescription className="text-lg font-bold text-primary">
                      {item.range}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3 text-sm font-semibold">Cost Factors:</div>
                    <ul className="space-y-2">
                      {item.factors.map((factor, factorIndex) => (
                        <li key={factorIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                          <span className="text-sm text-muted-foreground">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                * Pricing ranges are estimates based on typical Tampa Bay area projects. 
                Actual costs depend on specific site conditions and project requirements.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                What's Included in Our Quotes
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive estimates that cover all aspects of your project
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card data-testid="card-quote-includes">
                <CardHeader>
                  <CardTitle>Every Quote Includes:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Detailed scope of work</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Equipment and labor costs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Material and disposal fees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Project timeline estimate</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Payment terms and schedule</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Warranty information</span>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-no-hidden-fees">
                <CardHeader>
                  <CardTitle>No Hidden Costs For:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Site visit and assessment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Quote preparation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Site cleanup and debris removal</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Basic permits (when required)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Fuel surcharges or trip fees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">Weekend or after-hours premiums</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Get Quote */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                How to Get Your Quote
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
                  <p className="text-muted-foreground">
                    Call, email, or fill out our online form with basic project information. 
                    We'll schedule a convenient time for a site visit.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your property to evaluate the terrain, access, obstacles, and specific requirements. 
                    This typically takes 15-30 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Receive Quote</h3>
                  <p className="text-muted-foreground">
                    Within 24 hours, you'll receive a detailed written estimate via email. 
                    We're happy to answer questions or adjust the scope as needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Schedule Work</h3>
                  <p className="text-muted-foreground">
                    When you're ready to proceed, we'll schedule your project at your convenience. 
                    No deposit required until work begins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Quote */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <Card className="border-primary/20" data-testid="card-contact-quote">
              <CardHeader className="text-center">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Ready to Get Your Free Quote?</CardTitle>
                <CardDescription className="text-base">
                  Contact us today to schedule your site visit and receive a detailed estimate
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 text-sm text-muted-foreground">
                  Most quotes provided within 24 hours • No obligation • No pressure
                </p>
                <Button 
                  onClick={openLeadForm} 
                  size="lg" 
                  className="rounded-full" 
                  data-testid="button-request-quote"
                >
                  Request Free Quote Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Transparent Pricing, Quality Work
            </h2>
            <p className="mb-10 text-xl opacity-90">
              See exactly what you're paying for with our detailed estimates
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
