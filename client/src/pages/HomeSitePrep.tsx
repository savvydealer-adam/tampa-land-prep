import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { Shovel, Trees, Mountain, Home, Droplets, CheckCircle2, ArrowLeft } from "lucide-react";
import homeSiteImg from "@assets/image_1765658633013.png";
import gradingImg from "@assets/images/grading-new.webp";
import landClearingImg from "@assets/images/land-clearing-new.webp";

const services = [
  {
    icon: Trees,
    title: "Lot Clearing",
    description: "Complete removal of trees, stumps, and vegetation to prepare your building site"
  },
  {
    icon: Shovel,
    title: "Foundation Excavation",
    description: "Precision excavation work for proper foundation placement and depth"
  },
  {
    icon: Mountain,
    title: "Grading & Leveling",
    description: "Expert grading to ensure proper drainage and level building surface"
  },
  {
    icon: Droplets,
    title: "Drainage Solutions",
    description: "Installation of drainage systems to protect your future home"
  }
];

const features = [
  "Complete lot clearing and tree removal",
  "Foundation excavation to specifications",
  "Driveway base preparation",
  "Yard leveling and final grading",
  "Drainage solutions and water management",
  "Site preparation for construction",
  "Debris removal and site cleanup",
  "Ready for builders to begin construction"
];

const projectGallery = [
  { 
    image: homeSiteImg, 
    alt: "Home site preparation with excavator clearing land",
    title: "Site Clearing"
  },
  { 
    image: gradingImg, 
    alt: "Grading and leveling for new home construction",
    title: "Foundation Prep"
  },
  { 
    image: landClearingImg, 
    alt: "Cleared lot ready for home construction",
    title: "Ready to Build"
  }
];

export default function HomeSitePrep() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Home Site Preparation Tampa | New Construction Lot Prep | Tampa Land Prep"
        description="Professional home site preparation in Tampa Bay. Lot clearing, foundation excavation, grading & drainage for new home construction. Licensed contractor."
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
              Home Site Preparation
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Complete lot preparation for new home construction in Tampa, Land O' Lakes, Lutz, and surrounding areas
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
                What We Provide
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to get your property ready for new home construction
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
                  Complete Site Preparation Services
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Building a new home starts with proper site preparation. We handle everything from 
                  initial clearing to final grading, ensuring your property is ready for construction.
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
                  src={homeSiteImg}
                  alt="Home site preparation in progress"
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
                See examples of our home site preparation projects
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
              Ready to Build Your Dream Home?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Let us prepare your site for construction. Get a free estimate today.
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
