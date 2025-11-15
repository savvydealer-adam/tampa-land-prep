import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Trees, Mountain, Truck, Hammer, Home, CheckCircle2 } from "lucide-react";
import landClearingImg from "@assets/images/land-clearing.jpg";
import gradingImg from "@assets/images/grading-levelling.jpg";
import brushRemovalImg from "@assets/images/brush-removal.jpg";
import soilCompactionImg from "@assets/images/soil-compaction.jpg";
import drivewayPrepImg from "@assets/images/driveway-prep.png";
import asphaltImg from "@assets/images/asphalt.png";
import brickImg from "@assets/images/brick.png";
import gravelImg from "@assets/images/gravel.png";

const services = [
  {
    icon: Trees,
    title: "Land Clearing",
    description: "Professional land clearing services to remove trees, stumps, vegetation, and debris to prepare your property for development or agriculture.",
    image: landClearingImg,
    features: [
      "Tree and stump removal",
      "Vegetation clearing",
      "Debris removal and disposal",
      "Site preparation for construction",
      "Environmentally responsible methods"
    ]
  },
  {
    icon: Mountain,
    title: "Grading & Leveling",
    description: "Expert grading and leveling services to ensure proper drainage, site preparation, and foundation stability for your project.",
    image: gradingImg,
    features: [
      "Precision grading and leveling",
      "Drainage solutions",
      "Foundation preparation",
      "Slope stabilization",
      "Laser-guided accuracy"
    ]
  },
  {
    icon: Truck,
    title: "Brush Removal",
    description: "Complete brush and undergrowth removal to clean your property and reduce fire hazards while maintaining environmental integrity.",
    image: brushRemovalImg,
    features: [
      "Brush and undergrowth clearing",
      "Fire hazard reduction",
      "Property maintenance",
      "Overgrowth management",
      "Eco-friendly disposal"
    ]
  },
  {
    icon: Hammer,
    title: "Soil Compaction",
    description: "Professional soil compaction services to create stable, solid foundations for buildings, driveways, and other structures.",
    image: soilCompactionImg,
    features: [
      "Heavy-duty compaction equipment",
      "Foundation stabilization",
      "Road base preparation",
      "Erosion control",
      "Quality testing and verification"
    ]
  },
  {
    icon: Home,
    title: "Driveway Preparation",
    description: "Complete driveway preparation services including excavation, base installation, and finishing for asphalt, concrete, or gravel driveways.",
    image: drivewayPrepImg,
    features: [
      "Driveway excavation",
      "Base material installation",
      "Proper drainage setup",
      "Grade and slope optimization",
      "Ready for paving or finishing"
    ]
  }
];

const materials = [
  {
    title: "Asphalt",
    description: "Professional asphalt installation and repair for driveways and parking areas",
    image: asphaltImg
  },
  {
    title: "Brick Pavers",
    description: "Decorative brick paver installation for patios, walkways, and driveways",
    image: brickImg
  },
  {
    title: "Gravel",
    description: "Gravel installation and grading for driveways, pathways, and drainage",
    image: gravelImg
  }
];

export default function Services() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep Services | Land Clearing, Grading & Site Preparation"
        description="Land clearing, grading, excavation & site prep in Tampa Bay. Expert brush removal, soil compaction, driveway prep. Tampa, Land O' Lakes, Lutz."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Professional Land Preparation Services
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Comprehensive land preparation solutions for residential and commercial properties throughout the Tampa Bay area
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Request a Free Quote
            </Button>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Core Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Expert land preparation with state-of-the-art equipment
              </p>
            </div>
            <div className="space-y-12">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden" data-testid={`card-service-${index}`}>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="order-2 md:order-1">
                      <CardHeader>
                        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                          <service.icon className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-3xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h3 className="mb-4 font-semibold text-foreground">What We Provide:</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                    <div className="order-1 md:order-2">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Materials & Surfacing */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Materials & Surfacing
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional installation of various surface materials
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {materials.map((material, index) => (
                <Card key={index} className="hover-elevate overflow-hidden" data-testid={`card-material-${index}`}>
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={material.image} 
                      alt={material.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{material.title}</CardTitle>
                    <CardDescription>{material.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Why Choose Tampa Land Prep
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center" data-testid="card-benefit-0">
                <CardHeader>
                  <CardTitle>Professional Equipment</CardTitle>
                  <CardDescription>
                    State-of-the-art machinery and tools for efficient, quality work
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center" data-testid="card-benefit-1">
                <CardHeader>
                  <CardTitle>Experienced Team</CardTitle>
                  <CardDescription>
                    Skilled operators with years of experience in land preparation
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center" data-testid="card-benefit-2">
                <CardHeader>
                  <CardTitle>Licensed & Insured</CardTitle>
                  <CardDescription>
                    Fully licensed, bonded, and insured for your protection
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center" data-testid="card-benefit-3">
                <CardHeader>
                  <CardTitle>Local Expertise</CardTitle>
                  <CardDescription>
                    Deep knowledge of Tampa Bay area soil and terrain conditions
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
              Ready to Start Your Project?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free, no-obligation quote for your land preparation project
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
