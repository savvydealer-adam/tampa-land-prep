import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { Home, Layers, Droplets, Truck, CheckCircle2, ArrowLeft } from "lucide-react";
import drivewayMain from "@assets/images/driveway-prep-new.webp";
import drivewayAlt from "@assets/images/driveway-prep.png";
import gradingImg from "@assets/images/grading-new.webp";

const services = [
  {
    icon: Home,
    title: "Driveway Excavation",
    description: "Proper excavation for driveway base and drainage"
  },
  {
    icon: Layers,
    title: "Base Installation",
    description: "Quality base material installation for lasting results"
  },
  {
    icon: Droplets,
    title: "Drainage Setup",
    description: "Proper slope and drainage to prevent water issues"
  },
  {
    icon: Truck,
    title: "Material Hauling",
    description: "Delivery and installation of base materials"
  }
];

const features = [
  "Driveway excavation and clearing",
  "Proper grade and slope for drainage",
  "Base material installation",
  "Base compaction for stability",
  "Ready for asphalt, concrete, or gravel",
  "Culvert installation if needed",
  "Existing driveway removal",
  "Complete debris cleanup"
];

const projectGallery = [
  { 
    image: drivewayMain, 
    alt: "Driveway preparation with base material installed",
    title: "Base Installation"
  },
  { 
    image: drivewayAlt, 
    alt: "Driveway excavation in progress",
    title: "Excavation Work"
  },
  { 
    image: gradingImg, 
    alt: "Grading for proper driveway drainage",
    title: "Grading for Drainage"
  }
];

export default function DrivewayPrep() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Driveway Preparation Tampa | Excavation & Base Work | Tampa Land Prep"
        description="Professional driveway preparation in Tampa Bay. Excavation, base installation, grading for asphalt, concrete & gravel driveways. Licensed contractor."
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
              Driveway Preparation Services
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Complete driveway preparation ready for asphalt, concrete, or gravel finishing
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get a Free Estimate
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Driveway Preparation Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional preparation for long-lasting driveways
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

        {/* Features Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">
                  The Foundation of a Great Driveway
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  A quality driveway starts with proper preparation. We handle all the groundwork - 
                  excavation, base installation, and grading - so your paving contractor can deliver 
                  a driveway that lasts for decades.
                </p>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={drivewayMain}
                  alt="Driveway preparation in progress"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Work
              </h2>
              <p className="text-xl text-muted-foreground">
                See examples of our driveway preparation projects
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
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
              Need Driveway Preparation?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free estimate for your driveway project today
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
