import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { Trees, Leaf, Truck, Axe, CheckCircle2, ArrowLeft } from "lucide-react";
import landClearingMain from "@assets/images/land-clearing-new.webp";
import pic1 from "@assets/images/pic-1.webp";
import pic2 from "@assets/images/pic-2.webp";
import pic3 from "@assets/images/pic-3.webp";

const services = [
  {
    icon: Trees,
    title: "Tree Removal",
    description: "Safe removal of trees of all sizes, including hazardous and dead trees"
  },
  {
    icon: Axe,
    title: "Stump Grinding",
    description: "Complete stump removal and grinding below grade level"
  },
  {
    icon: Leaf,
    title: "Vegetation Clearing",
    description: "Removal of brush, shrubs, and overgrowth from your property"
  },
  {
    icon: Truck,
    title: "Debris Hauling",
    description: "Complete removal and disposal of all cleared materials"
  }
];

const features = [
  "Tree and stump removal",
  "Brush and vegetation clearing",
  "Root system removal",
  "Debris removal and disposal",
  "Site preparation for construction",
  "Lot clearing for new development",
  "Overgrown property restoration",
  "Environmentally responsible methods"
];

const projectGallery = [
  { 
    image: landClearingMain, 
    alt: "Land clearing with heavy equipment",
    title: "Professional Equipment"
  },
  { 
    image: pic1, 
    alt: "Cleared land ready for development",
    title: "Cleared Property"
  },
  { 
    image: pic2, 
    alt: "Tree removal in progress",
    title: "Tree Removal"
  },
  { 
    image: pic3, 
    alt: "Final site cleanup after land clearing",
    title: "Site Cleanup"
  }
];

export default function LandClearing() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Land Clearing Tampa | Tree & Vegetation Removal | Tampa Land Prep"
        description="Professional land clearing services in Tampa Bay. Tree removal, stump grinding, vegetation clearing. Licensed contractor serving Tampa, Land O' Lakes, Lutz."
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
              Land Clearing Services
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Professional land clearing for residential and commercial properties in Tampa Bay
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
                Land Clearing Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete clearing solutions for properties of all sizes
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
                  Complete Land Clearing Solutions
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Whether you're preparing for new construction, restoring an overgrown property, or 
                  clearing land for agriculture, we have the equipment and expertise to get the job done right.
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
                  src={landClearingMain}
                  alt="Land clearing in progress"
                  loading="lazy"
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
                See examples of our land clearing projects
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Need Your Land Cleared?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free estimate for your land clearing project today
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
