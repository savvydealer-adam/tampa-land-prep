import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const serviceAreas = [
  "Tampa", "Land O' Lakes", "Lutz", "Wesley Chapel",
  "Odessa", "Carrollwood", "Town 'n' Country", "Temple Terrace",
  "Brandon", "Riverview", "Valrico", "Plant City"
];

export default function Contact() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Contact Us - Land Clearing Tampa FL"
        description="Contact Tampa Land Prep for land clearing, grading, and demolition services. Serving Tampa, Land O' Lakes, Lutz, and surrounding areas. Free estimates."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Ready to start your land preparation project? Contact us for a free estimate
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Request a Free Quote
            </Button>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Methods */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-8 font-serif text-3xl font-bold sm:text-4xl">
                    Contact Information
                  </h2>
                </div>
                
                <Card className="hover-elevate" data-testid="card-phone">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Phone</CardTitle>
                        <CardDescription className="mt-2">
                          Call us for immediate assistance
                        </CardDescription>
                        <p className="mt-3 text-lg font-semibold">(813) XXX-XXXX</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover-elevate" data-testid="card-email">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Email</CardTitle>
                        <CardDescription className="mt-2">
                          Send us a message anytime
                        </CardDescription>
                        <p className="mt-3 text-lg font-semibold">info@tampalandprep.com</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover-elevate" data-testid="card-location">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Service Area</CardTitle>
                        <CardDescription className="mt-2">
                          Serving the greater Tampa Bay area
                        </CardDescription>
                        <p className="mt-3 text-lg font-semibold">Tampa, FL and surrounding areas</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover-elevate" data-testid="card-hours">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Business Hours</CardTitle>
                        <CardDescription className="mt-2">
                          Monday - Friday: 7:00 AM - 6:00 PM
                        </CardDescription>
                        <p className="mt-1 text-muted-foreground">
                          Saturday: 8:00 AM - 4:00 PM
                        </p>
                        <p className="text-muted-foreground">
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              {/* Service Areas */}
              <div>
                <h2 className="mb-8 font-serif text-3xl font-bold sm:text-4xl">
                  Areas We Serve
                </h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Tampa Bay Region</CardTitle>
                    <CardDescription>
                      Professional land preparation services throughout the Tampa Bay area
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">
                      Don't see your area listed? Contact us - we may service your location!
                    </p>
                  </CardContent>
                </Card>

                <div className="mt-8">
                  <Card className="bg-primary text-primary-foreground">
                    <CardHeader>
                      <CardTitle>Ready to Get Started?</CardTitle>
                      <CardDescription className="text-primary-foreground/80">
                        Request a free, no-obligation estimate for your project
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        onClick={openLeadForm} 
                        variant="secondary" 
                        size="lg"
                        className="w-full"
                        data-testid="button-quote-cta"
                      >
                        Get a Free Quote
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
