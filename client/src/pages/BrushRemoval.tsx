import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { Leaf, Flame, Recycle, Truck, CheckCircle2, ArrowLeft } from "lucide-react";
import brushMain from "@assets/images/brush-removal-new.webp";
import brushAlt from "@assets/images/brush-removal.jpg";
import landClearingImg from "@assets/images/land-clearing-new.webp";

const services = [
  {
    icon: Leaf,
    title: "Brush Clearing",
    description: "Complete removal of brush, shrubs, and undergrowth"
  },
  {
    icon: Flame,
    title: "Fire Prevention",
    description: "Reduce fire hazards by removing combustible vegetation"
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Disposal",
    description: "Environmentally responsible hauling and disposal methods"
  },
  {
    icon: Truck,
    title: "Complete Cleanup",
    description: "Full debris removal leaving your property clean and clear"
  }
];

const features = [
  "Brush and undergrowth clearing",
  "Overgrown vegetation removal",
  "Fire hazard reduction",
  "Property boundary clearing",
  "Fence line maintenance",
  "Trail and path clearing",
  "Invasive species removal",
  "Complete debris hauling"
];

const projectGallery = [
  { 
    image: brushMain, 
    alt: "Brush removal equipment clearing overgrown property",
    title: "Brush Clearing"
  },
  { 
    image: brushAlt, 
    alt: "Overgrown vegetation being removed",
    title: "Vegetation Removal"
  },
  { 
    image: landClearingImg, 
    alt: "Property after brush removal is complete",
    title: "Clean Property"
  }
];

export default function BrushRemoval() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Brush Removal Tampa | Vegetation Clearing | Tampa Land Prep"
        description="Professional brush removal and vegetation clearing in Tampa Bay. Fire hazard reduction, overgrown property cleanup. Licensed contractor Tampa, Lutz, Land O' Lakes."
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
              Brush Removal Services
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Complete brush and vegetation clearing for residential and commercial properties
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
                Brush Removal Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Restore your property with professional brush clearing
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
                  Reclaim Your Property
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Overgrown brush and vegetation can reduce property value, create fire hazards, and 
                  attract pests. Our brush removal services restore your land to its full potential 
                  while protecting the environment.
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
                  src={brushMain}
                  alt="Brush removal in progress"
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
                See examples of our brush removal projects
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
              Need Brush Removal?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free estimate for your brush clearing project today
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
