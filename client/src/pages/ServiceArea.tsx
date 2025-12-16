import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { MapPin, CheckCircle2 } from "lucide-react";
import serviceAreasMap from "@assets/service areas_1764272106686.jpg";

const primaryAreas = [
  {
    city: "Tampa",
    description: "Complete land clearing, grading, and demolition services for residential and commercial properties throughout Tampa"
  },
  {
    city: "Land O' Lakes",
    description: "Professional site preparation and land development services in Land O' Lakes and surrounding communities"
  },
  {
    city: "Lutz",
    description: "Expert land clearing and excavation for new construction and development projects in Lutz"
  },
  {
    city: "Wesley Chapel",
    description: "Reliable land preparation services for growing Wesley Chapel residential and commercial developments"
  }
];

const additionalAreas = [
  "Odessa", "Carrollwood", "Town 'n' Country", "Temple Terrace",
  "Brandon", "Riverview", "Valrico", "Plant City",
  "Seffner", "Thonotosassa", "Dover", "Mango"
];

export default function ServiceArea() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Service Areas - Land Clearing Tampa Bay FL"
        description="Land clearing and grading services in Tampa, Land O' Lakes, Lutz, Wesley Chapel, and throughout Tampa Bay. Professional excavation contractors serving your area."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Serving the Tampa Bay Area
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Professional land preparation services throughout Tampa and surrounding communities
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Request a Free Quote
            </Button>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Counties We Serve
              </h2>
              <p className="text-xl text-muted-foreground">
                Proudly serving Hillsborough, Pasco, Pinellas, and Hernando counties
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <img
                src={serviceAreasMap}
                alt="Tampa Land Prep service area map showing Hillsborough, Pasco, Pinellas, and Hernando counties highlighted in green"
                loading="lazy"
                className="w-full rounded-lg shadow-lg"
                data-testid="img-service-area-map"
              />
            </div>
          </div>
        </section>

        {/* Primary Service Areas */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Cities & Communities
              </h2>
              <p className="text-xl text-muted-foreground">
                Providing expert land clearing and site preparation throughout these communities
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {primaryAreas.map((area, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-area-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{area.city}</CardTitle>
                    <CardDescription className="text-base">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Areas */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Additional Service Areas
              </h2>
              <p className="text-xl text-muted-foreground">
                We also proudly serve these Tampa Bay communities
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {additionalAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3" data-testid={`area-${index}`}>
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-lg">{area}</span>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-center text-muted-foreground">
                Don't see your area listed? We service many additional locations throughout the Tampa Bay region. 
                Contact us to confirm service availability in your area.
              </p>
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
              Serving Tampa Bay with professional land preparation services
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              Get a Free Estimate
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
