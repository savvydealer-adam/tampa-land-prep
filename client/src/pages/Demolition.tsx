import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { Building2, Hammer, Truck, ArrowLeft, Home, Waves, Bath, Square, ChefHat } from "lucide-react";
import demolition1 from "@assets/IMG_8568_optimized.webp";
import demolition2 from "@assets/IMG_8583_optimized.webp";
import demolition3 from "@assets/IMG_8540_optimized.webp";
import demolition4 from "@assets/9EDD5C1A_optimized.webp";
import demolition5 from "@assets/IMG_8559_optimized.webp";
import mobileHomeRemoval from "@assets/image_1765659632560_optimized.webp";

const services = [
  {
    icon: Building2,
    title: "Residential & Commercial",
    description: "Complete building demolition for homes, garages, and commercial structures"
  },
  {
    icon: Home,
    title: "Mobile Home Removal",
    description: "Professional mobile home and manufactured housing demolition and removal"
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
    title: "Starting Demolition"
  },
  { 
    image: mobileHomeRemoval, 
    alt: "Mobile home demolition with excavator and dump trailer",
    title: "Mobile Home Removal"
  },
  { 
    image: demolition5, 
    alt: "Partially demolished building showing interior structural removal",
    title: "Structural Removal"
  },
  { 
    image: demolition1, 
    alt: "Building demolition in progress with debris removal",
    title: "Demolition Progress"
  },
  { 
    image: demolition2, 
    alt: "Cleared and graded lot after demolition completion",
    title: "Completed Project"
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
            <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
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
                      loading="lazy"
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

        {/* Specialized Demolition Services */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Specialized Demolition Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Expert demolition services tailored to your specific needs
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/demolition/mobile-home-removal">
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <Home className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Mobile Home Removal</CardTitle>
                    <CardDescription>
                      Complete removal of single wide, double wide, and modular homes including 
                      skirting removal and site cleanup.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              
              <Link href="/demolition/commercial">
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Commercial Demolition</CardTitle>
                    <CardDescription>
                      Office buildings, warehouses, and retail facility demolition with 
                      full safety compliance and environmental protection.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              
              <Link href="/demolition/residential">
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <Home className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">House & Garage Removal</CardTitle>
                    <CardDescription>
                      Residential home demolition, garage removal, and complete site 
                      preparation for new construction.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              
              <Link href="/demolition/concrete-removal">
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <Square className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Concrete Removal</CardTitle>
                    <CardDescription>
                      Driveway removal, foundation demolition, sidewalk breaking, 
                      and slab removal with specialized equipment.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              
              <Link href="/demolition/interior">
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <ChefHat className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Interior Demolition</CardTitle>
                    <CardDescription>
                      Kitchen demo, bathroom renovation, gut renovations, and selective 
                      wall removal for home remodeling projects.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              
              <Link href="/demolition/pool-removal">
                <Card className="hover-elevate cursor-pointer h-full">
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <Waves className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Pool Removal</CardTitle>
                    <CardDescription>
                      Inground pool demolition with partial or complete removal options 
                      to reclaim your yard space.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
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
