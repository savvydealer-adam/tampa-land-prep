import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { Truck, Trees, Mountain, Hammer, Waves, Phone, MapPin } from "lucide-react";
import heroImage from "@assets/images/arable_agriculture_agricultural_tractor_agricultural_agro_photo_agrartechnik_agricultural_economics_cultivation-1208095.jpg";
import landClearingImg from "@assets/images/land-clearing.jpg";
import gradingImg from "@assets/images/grading-levelling.jpg";
import brushRemovalImg from "@assets/images/brush-removal.jpg";
import soilCompactionImg from "@assets/images/soil-compaction.jpg";
import drivewayPrepImg from "@assets/images/driveway-prep.png";
import tampaMap from "@assets/images/Tampa-Fla.webp";

const services = [
  {
    icon: Trees,
    title: "Land Clearing",
    description: "Professional land clearing services to prepare your property for development or agriculture",
    image: landClearingImg
  },
  {
    icon: Mountain,
    title: "Grading & Leveling",
    description: "Expert grading and leveling to ensure proper drainage and site preparation",
    image: gradingImg
  },
  {
    icon: Truck,
    title: "Brush Removal",
    description: "Complete brush and debris removal for clean, ready-to-use land",
    image: brushRemovalImg
  },
  {
    icon: Hammer,
    title: "Soil Compaction",
    description: "Professional soil compaction for stable foundations and construction",
    image: soilCompactionImg
  },
  {
    icon: Waves,
    title: "Pond & Lake Excavation",
    description: "Custom pond and lake excavation for decorative features and retention systems",
    image: gradingImg
  },
];

const serviceAreas = [
  "Tampa",
  "Land O' Lakes",
  "Lutz",
  "Wesley Chapel",
  "Odessa",
  "Carrollwood"
];

export default function Home() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Land Clearing, Grading & Excavation in Tampa FL"
        description="Professional land clearing, grading & excavation in Tampa, Land O' Lakes, Lutz. Licensed land preparation contractor serving Tampa Bay area."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-7xl">
              Professional Land Preparation Services
            </h1>
            <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
              Serving Tampa, Land O' Lakes, and Lutz with expert land clearing, grading, and site preparation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
                <Phone className="mr-2 h-5 w-5" />
                Get a Free Quote
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full" data-testid="button-hero-services">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete land preparation solutions for residential and commercial properties
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card key={index} className="hover-elevate overflow-hidden" data-testid={`card-service-${index}`}>
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline" data-testid="button-view-all-services">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Serving the Greater Tampa Area
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Tampa Land Prep is your trusted partner for professional land preparation services 
                  throughout the Tampa Bay area. With years of experience and state-of-the-art equipment, 
                  we deliver exceptional results for residential and commercial projects.
                </p>
                <div className="mb-8">
                  <h3 className="mb-4 flex items-center text-xl font-semibold">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button onClick={openLeadForm} size="lg" data-testid="button-service-areas-cta">
                  Request a Quote
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src={tampaMap} 
                  alt="Tampa Florida service area map"
                  className="w-full max-w-md rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                Why Choose Tampa Land Prep
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional service you can trust
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center" data-testid="card-benefit-0">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">15+</CardTitle>
                  <CardDescription className="text-lg">Years of Experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Decades of expertise in land preparation and site development
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center" data-testid="card-benefit-1">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">100%</CardTitle>
                  <CardDescription className="text-lg">Licensed & Insured</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fully licensed, bonded, and insured for your peace of mind
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center" data-testid="card-benefit-2">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">24/7</CardTitle>
                  <CardDescription className="text-lg">Customer Support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Always available to answer questions and provide support
                  </p>
                </CardContent>
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
              Get a free quote today and let us help you prepare your land for success
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
