import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Building2, Hammer, Truck } from "lucide-react";
import demolition1 from "@assets/IMG_8568_1763230705199.jpeg";
import demolition2 from "@assets/IMG_8583_1763230705199.jpeg";
import demolition3 from "@assets/IMG_8540_1763230705199.jpeg";
import demolition4 from "@assets/9EDD5C1A-DDCC-494E-AAEA-39750D21F447_1763230705199.jpeg";
import demolition5 from "@assets/IMG_8559_1763230705199.jpeg";

const services = [
  {
    icon: Building2,
    title: "Residential & Commercial",
    description: "Complete building demolition for homes, garages, and commercial structures"
  },
  {
    icon: Hammer,
    title: "Selective Demolition",
    description: "Interior demolition and precise structural component removal"
  },
  {
    icon: Truck,
    title: "Complete Cleanup",
    description: "Debris removal, site clearing, and grading services"
  }
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
              Licensed demolition contractor serving Tampa, Land O' Lakes, Lutz, and surrounding areas
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
                Demolition Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Safe, efficient building demolition with complete site cleanup
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
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

        {/* Recent Project Gallery */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Recent Project
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete building demolition and site clearing
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

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Need Demolition Services?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free estimate for your demolition project today
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              Get a Free Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
