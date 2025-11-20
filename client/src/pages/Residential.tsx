import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Home, Trees, Fence, Droplets, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Site Preparation",
    description: "Complete lot clearing and grading for new home construction",
    features: [
      "Tree and brush removal",
      "Foundation excavation and grading",
      "Driveway base preparation",
      "Yard leveling and finishing",
      "Drainage solutions"
    ]
  },
  {
    icon: Trees,
    title: "Lot Clearing",
    description: "Selective or complete clearing of residential properties",
    features: [
      "Tree removal and stump grinding",
      "Brush and undergrowth clearing",
      "Debris hauling and disposal",
      "Property line clearing",
      "Fire break creation"
    ]
  },
  {
    icon: Fence,
    title: "Property Improvement",
    description: "Land preparation for pools, additions, and outdoor living spaces",
    features: [
      "Pool excavation",
      "Patio and deck site prep",
      "Shed and outbuilding foundations",
      "Fence line clearing",
      "Garden bed preparation"
    ]
  },
  {
    icon: Droplets,
    title: "Drainage & Grading",
    description: "Resolve water issues and improve property drainage",
    features: [
      "Yard regrading for drainage",
      "French drain installation prep",
      "Swale creation",
      "Erosion control",
      "Standing water elimination"
    ]
  }
];

const benefits = [
  "Respect for your property and landscaping",
  "Competitive residential pricing",
  "Complete site cleanup included",
  "Licensed and fully insured",
  "References from satisfied homeowners",
  "Free on-site consultations"
];

const projects = [
  {
    title: "New Home Site",
    location: "Land O' Lakes",
    description: "1.5-acre lot clearing, grading, and driveway preparation for custom home construction"
  },
  {
    title: "Backyard Pool",
    location: "Lutz",
    description: "Pool excavation and patio area grading for residential swimming pool installation"
  },
  {
    title: "Drainage Solution",
    location: "Tampa",
    description: "Yard regrading and french drain installation to resolve chronic flooding issues"
  },
  {
    title: "Property Clearing",
    location: "Wesley Chapel",
    description: "Selective tree removal and brush clearing to open up wooded residential lot"
  }
];

export default function Residential() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Residential Land Clearing - Homeowner Services"
        description="Residential land clearing in Tampa Bay. Lot clearing, home site preparation, pool excavation, and drainage solutions for homeowners. Free quotes."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Residential Land Clearing
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Professional land preparation services for homeowners in Tampa, Land O' Lakes, Lutz, and surrounding areas
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get Free Quote
            </Button>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Homeowner Services
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                From small yard projects to complete lot clearing, we handle it all
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Why Homeowners Choose Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Trusted by Tampa Bay area homeowners for quality land clearing services
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Recent Residential Projects
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Real projects for real homeowners throughout the Tampa Bay area
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-project-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="font-semibold text-primary">
                      {project.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Typical Projects */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Common Residential Projects
              </h2>
            </div>

            <div className="space-y-6">
              <Card data-testid="card-new-construction">
                <CardHeader>
                  <CardTitle>New Home Construction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">
                    Building your dream home? We prepare your lot from start to finish - clearing trees, removing stumps, 
                    excavating for the foundation, and grading for proper drainage.
                  </p>
                  <p className="text-sm font-semibold text-primary">Typical timeline: 3-7 days</p>
                </CardContent>
              </Card>

              <Card data-testid="card-pool-installation">
                <CardHeader>
                  <CardTitle>Pool & Outdoor Living</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">
                    Planning a pool, patio, or outdoor kitchen? We excavate for pools, grade for patios and decks, 
                    and prepare the perfect foundation for your outdoor living space.
                  </p>
                  <p className="text-sm font-semibold text-primary">Typical timeline: 1-3 days</p>
                </CardContent>
              </Card>

              <Card data-testid="card-drainage-problems">
                <CardHeader>
                  <CardTitle>Drainage & Water Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">
                    Tired of standing water or flooding? We regrade your yard to direct water away from structures, 
                    create swales for drainage, and prepare for french drain installation.
                  </p>
                  <p className="text-sm font-semibold text-primary">Typical timeline: 2-5 days</p>
                </CardContent>
              </Card>

              <Card data-testid="card-property-maintenance">
                <CardHeader>
                  <CardTitle>Property Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">
                    Overgrown lot? We clear brush, remove unwanted trees, grind stumps, and restore your property to a 
                    clean, usable state. Perfect for vacant lots or neglected properties.
                  </p>
                  <p className="text-sm font-semibold text-primary">Typical timeline: 1-4 days</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to Transform Your Property?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free quote and see how affordable professional land clearing can be
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              Get Your Free Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
