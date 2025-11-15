import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Building2, Hammer, Truck, Shield, CheckCircle2, Phone } from "lucide-react";
import demolition1 from "@assets/IMG_8568_1763230705199.jpeg";
import demolition2 from "@assets/IMG_8583_1763230705199.jpeg";
import demolition3 from "@assets/IMG_8540_1763230705199.jpeg";
import demolition4 from "@assets/9EDD5C1A-DDCC-494E-AAEA-39750D21F447_1763230705199.jpeg";
import demolition5 from "@assets/IMG_8559_1763230705199.jpeg";

const services = [
  {
    icon: Building2,
    title: "Residential Demolition",
    description: "Safe and efficient demolition of homes, garages, and residential structures"
  },
  {
    icon: Building2,
    title: "Commercial Demolition",
    description: "Large-scale commercial building demolition with minimal disruption"
  },
  {
    icon: Hammer,
    title: "Selective Demolition",
    description: "Precise interior demolition and structural component removal"
  },
  {
    icon: Truck,
    title: "Debris Removal",
    description: "Complete cleanup and responsible disposal of all demolition materials"
  }
];

const features = [
  "Licensed and insured demolition contractor",
  "State-of-the-art excavation equipment",
  "Complete debris removal and disposal",
  "Site clearing and grading services",
  "Environmental compliance and safety",
  "Residential and commercial projects",
  "Free estimates and competitive pricing",
  "Experienced demolition team"
];

const projectGallery = [
  { 
    image: demolition3, 
    alt: "Excavator performing roof demolition on commercial building",
    title: "Active Demolition Work"
  },
  { 
    image: demolition1, 
    alt: "Building demolition in progress with debris removal",
    title: "Structure Removal"
  },
  { 
    image: demolition5, 
    alt: "Partially demolished building showing interior walls",
    title: "Selective Demolition"
  },
  { 
    image: demolition4, 
    alt: "Before and after demolition site comparison",
    title: "Complete Project"
  },
  { 
    image: demolition2, 
    alt: "Cleared and graded lot after demolition completion",
    title: "Finished Site"
  }
];

export default function Demolition() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Building Demolition & Structure Removal Tampa FL"
        description="Building demolition services in Tampa Bay. Licensed contractor for residential & commercial structure removal. Complete site clearing & debris removal."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Professional Demolition Services
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Safe, efficient building demolition and structure removal throughout the Tampa Bay area
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Request a Free Quote
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Demolition Services We Offer
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete demolition solutions for residential and commercial properties
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Why Choose Tampa Land Prep for Demolition?
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  With years of experience and state-of-the-art equipment, we handle demolition projects of all sizes 
                  throughout the Tampa Bay area. Our team ensures safe, efficient demolition with complete site cleanup 
                  and debris removal.
                </p>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button onClick={openLeadForm} size="lg" data-testid="button-features-cta">
                    Get Started Today
                  </Button>
                </div>
              </div>
              <div>
                <img 
                  src={demolition1} 
                  alt="Professional demolition work in Tampa"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recent Project Gallery */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Recent Demolition Project
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete building demolition and site clearing in the Tampa area
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projectGallery.map((project, index) => (
                <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-project-${index}`}>
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Demolition Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional approach from start to finish
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card data-testid="card-process-1">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    1
                  </div>
                  <CardTitle>Site Assessment</CardTitle>
                  <CardDescription>
                    Free on-site evaluation and detailed project estimate
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card data-testid="card-process-2">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    2
                  </div>
                  <CardTitle>Permitting</CardTitle>
                  <CardDescription>
                    We handle all necessary permits and regulatory compliance
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card data-testid="card-process-3">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    3
                  </div>
                  <CardTitle>Demolition</CardTitle>
                  <CardDescription>
                    Safe, efficient demolition using professional equipment
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card data-testid="card-process-4">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    4
                  </div>
                  <CardTitle>Site Cleanup</CardTitle>
                  <CardDescription>
                    Complete debris removal and site grading for next phase
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to Start Your Demolition Project?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Contact Tampa Land Prep today for a free estimate on your demolition project
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get a Free Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
