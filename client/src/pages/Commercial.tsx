import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Building2, Store, Factory, Hammer, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "New Development Sites",
    description: "Complete site preparation for commercial and residential developments",
    features: [
      "Large-scale land clearing",
      "Mass grading and earthwork",
      "Drainage system installation",
      "Retention pond and lake excavation",
      "Road and parking lot preparation",
      "Utility corridor clearing"
    ]
  },
  {
    icon: Store,
    title: "Retail & Office Projects",
    description: "Site work for shopping centers, office buildings, and mixed-use developments",
    features: [
      "Site demolition and clearing",
      "Foundation excavation",
      "Parking lot excavation",
      "Retention pond excavation",
      "Landscaping preparation",
      "Storm water management"
    ]
  },
  {
    icon: Factory,
    title: "Industrial Properties",
    description: "Heavy-duty land preparation for warehouses, manufacturing, and logistics facilities",
    features: [
      "Large acreage clearing",
      "Heavy equipment access",
      "Foundation pad preparation",
      "Loading dock excavation",
      "Site grading for drainage"
    ]
  },
  {
    icon: Hammer,
    title: "Demolition Services",
    description: "Complete building demolition and site remediation",
    features: [
      "Structural demolition",
      "Concrete and asphalt removal",
      "Debris hauling and disposal",
      "Site restoration",
      "Environmental compliance"
    ]
  }
];

const benefits = [
  "Fast mobilization and project completion",
  "Minimal disruption to surrounding businesses",
  "Comprehensive project management",
  "Coordination with other contractors",
  "Licensed, bonded, and insured",
  "OSHA compliant safety protocols",
  "Environmental protection measures",
  "Flexible scheduling including off-hours work"
];

const projects = [
  {
    type: "Shopping Center",
    size: "15 acres",
    description: "Complete site clearing, grading, and parking lot preparation for new retail development in Land O' Lakes"
  },
  {
    type: "Office Complex",
    size: "8 acres",
    description: "Demolition of existing structures and site preparation for Class A office building in Tampa"
  },
  {
    type: "Industrial Park",
    size: "25 acres",
    description: "Mass grading and drainage installation for warehouse and distribution center in Wesley Chapel"
  },
  {
    type: "Multi-Family Housing",
    size: "12 acres",
    description: "Land clearing and rough grading for 200-unit apartment complex in Lutz"
  }
];

export default function Commercial() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Commercial Land Clearing - Development Site Preparation"
        description="Commercial land clearing and site preparation in Tampa Bay. Retail, office, industrial, and multi-family development projects. Licensed and insured."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Commercial Land Clearing
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Professional site preparation for developers, contractors, and commercial property owners throughout Tampa Bay
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Request Commercial Quote
            </Button>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Commercial Services
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Comprehensive land preparation solutions for commercial and industrial projects
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
                Why Commercial Clients Choose Us
              </h2>
              <p className="text-lg text-muted-foreground">
                The advantages of working with Tampa Land Prep
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
                Recent Commercial Projects
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Experience with projects of all sizes and complexities
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-project-${index}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{project.type}</CardTitle>
                        <CardDescription className="mt-1 text-sm font-semibold text-primary">
                          {project.size}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Project Capabilities
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center" data-testid="card-project-size">
                <CardHeader>
                  <div className="mb-2 font-serif text-4xl font-bold text-primary">50+</div>
                  <CardTitle className="text-lg">Acres</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Maximum single project capacity</p>
                </CardContent>
              </Card>

              <Card className="text-center" data-testid="card-equipment">
                <CardHeader>
                  <div className="mb-2 font-serif text-4xl font-bold text-primary">15+</div>
                  <CardTitle className="text-lg">Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Heavy machinery fleet available</p>
                </CardContent>
              </Card>

              <Card className="text-center" data-testid="card-timeline">
                <CardHeader>
                  <div className="mb-2 font-serif text-4xl font-bold text-primary">1-4</div>
                  <CardTitle className="text-lg">Weeks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Typical commercial project timeline</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to Discuss Your Project?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Contact us for a comprehensive proposal and competitive pricing
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              Request Detailed Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
