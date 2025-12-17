import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { Shield, Truck, Users, Award, MapPin, Phone } from "lucide-react";
import constructionWorkerImg from "@assets/images/construction-worker.webp";
import pic1 from "@assets/images/pic-1.webp";
import pic2 from "@assets/images/pic-2.webp";
import pic3 from "@assets/images/pic-3.webp";
import pic4 from "@assets/images/pic-4.webp";

const values = [
  {
    icon: Shield,
    title: "Professional Excellence",
    description: "Committed to delivering the highest quality land preparation services with precision and expertise"
  },
  {
    icon: Truck,
    title: "Modern Equipment",
    description: "State-of-the-art machinery and tools to ensure efficient, safe, and quality work on every project"
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Your satisfaction is our priority. We work closely with you to meet your specific needs and timeline"
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your complete peace of mind and protection"
  },
];

const serviceAreas = [
  "Tampa",
  "Land O' Lakes",
  "Lutz",
  "Wesley Chapel",
  "Odessa",
  "Carrollwood",
  "Town 'n' Country",
  "Temple Terrace"
];

const projectGallery = [
  { image: pic1, alt: "Land clearing project in Tampa" },
  { image: pic2, alt: "Grading and leveling work" },
  { image: pic3, alt: "Driveway preparation project" },
  { image: pic4, alt: "Completed land preparation site" }
];

export default function About() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Licensed Land Clearing & Excavation Contractor Tampa"
        description="Licensed land clearing & excavation contractor in Tampa. Professional site preparation, grading services for Tampa, Land O' Lakes, Lutz since 2010."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              About Tampa Land Prep
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Your trusted partner for professional land preparation services in the Tampa Bay area
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Who We Are
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Tampa Land Prep is a professional land preparation company serving the greater Tampa Bay area. 
                    With years of experience in land clearing, grading, leveling, and site preparation, we've helped 
                    countless residential and commercial property owners prepare their land for development.
                  </p>
                  <p>
                    Our team of skilled operators uses state-of-the-art equipment to deliver precise, efficient, and 
                    environmentally responsible land preparation services. Whether you're clearing land for a new home, 
                    commercial development, agricultural use, or simply maintaining your property, we have the expertise 
                    and equipment to get the job done right.
                  </p>
                  <p>
                    We understand that your land is a valuable investment, and we treat every project with the care and 
                    professionalism it deserves. From initial consultation to project completion, we work closely with 
                    you to ensure your vision becomes reality.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src={constructionWorkerImg} 
                  alt="Professional land preparation equipment operator"
                  loading="lazy"
                  className="w-full max-w-md rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                Why Choose Us
              </h2>
              <p className="text-xl text-muted-foreground">
                The values that drive our commitment to excellence
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center" data-testid={`card-value-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="text-center">
              <MapPin className="mx-auto mb-6 h-12 w-12 text-primary" />
              <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                Service Areas
              </h2>
              <p className="mb-12 text-xl text-muted-foreground">
                Proudly serving the greater Tampa Bay area
              </p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {serviceAreas.map((area, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg bg-card p-4 text-center hover-elevate"
                    data-testid={`service-area-${index}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="font-medium">{area}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-muted-foreground">
                Don't see your area listed? Contact us - we may service your location!
              </p>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Work
              </h2>
              <p className="text-xl text-muted-foreground">
                See the quality of our land preparation projects
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {projectGallery.map((project, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-lg hover-elevate"
                  data-testid={`gallery-${index}`}
                >
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="h-full w-full object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Let's Prepare Your Land
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Contact us today for a free consultation and quote for your land preparation project
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={openLeadForm} 
                size="lg" 
                variant="secondary"
                className="rounded-full" 
                data-testid="button-cta-contact"
              >
                <Phone className="mr-2 h-5 w-5" />
                Request a Quote
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="rounded-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" 
                data-testid="button-cta-services"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
