import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO, createServiceSchema, organizationSchema } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { 
  Home, 
  Truck, 
  Hammer, 
  CheckCircle2, 
  ArrowLeft, 
  Wrench, 
  AlertTriangle,
  FileText,
  Zap,
  Recycle
} from "lucide-react";
import demolition1 from "@assets/IMG_8568_optimized.webp";
import demolition2 from "@assets/IMG_8583_optimized.webp";
import mobileHomeRemoval from "@assets/image_1765659632560_optimized.webp";
import demolition4 from "@assets/9EDD5C1A_optimized.webp";

const mobileHomeTypes = [
  {
    icon: Home,
    title: "Single Wide Mobile Homes",
    description: "Complete removal of single wide manufactured homes, including skirting and foundation cleanup"
  },
  {
    icon: Home,
    title: "Double Wide Mobile Homes",
    description: "Full demolition of double wide mobile homes with careful utility disconnection"
  },
  {
    icon: Home,
    title: "Modular Homes",
    description: "Deconstruction and removal of modular homes and manufactured housing units"
  },
  {
    icon: Truck,
    title: "Mobile Home Components",
    description: "Removal of axles, frames, wheels, and other mobile home hardware"
  }
];

const processSteps = [
  {
    icon: FileText,
    title: "1. Permits & Inspection",
    description: "We handle all necessary permits and conduct a thorough site inspection to plan the removal process"
  },
  {
    icon: Zap,
    title: "2. Utility Disconnection",
    description: "Safe disconnection of electrical, plumbing, and gas utilities by licensed professionals"
  },
  {
    icon: Wrench,
    title: "3. Skirting Removal",
    description: "Careful removal of mobile home skirting, lattice, and underpinning materials"
  },
  {
    icon: Hammer,
    title: "4. Demolition",
    description: "Systematic demolition using appropriate equipment for safe and efficient removal"
  },
  {
    icon: Truck,
    title: "5. Debris Hauling",
    description: "Complete removal and proper disposal of all demolition debris and materials"
  },
  {
    icon: CheckCircle2,
    title: "6. Site Grading",
    description: "Final site cleanup and grading to prepare your land for its next use"
  }
];

const features = [
  "Complete mobile home demolition and removal",
  "Skirting and underpinning removal",
  "Utility disconnection coordination",
  "Axle and frame disposal",
  "Debris hauling and cleanup",
  "Site preparation and grading",
  "Septic system considerations",
  "Florida regulation compliance",
  "Licensed and insured service",
  "Environmental responsible disposal"
];

const serviceAreas = [
  "Tampa", "Land O' Lakes", "Lutz", "Wesley Chapel", "Odessa", "Carrollwood",
  "New Tampa", "Zephyrhills", "Dade City", "Brandon", "Riverview", "Plant City"
];

const faqs = [
  {
    question: "Do I need permits for mobile home removal in Tampa?",
    answer: "Yes, most mobile home removals require demolition permits in Tampa and surrounding counties. We handle all permit applications and ensure compliance with local building codes and regulations."
  },
  {
    question: "How much does mobile home removal cost in Tampa?",
    answer: "Mobile home removal costs vary based on size, location, and site conditions. Single wide removals typically range from $3,000-$6,000, while double wides can cost $5,000-$10,000. Contact us for a free, accurate estimate."
  },
  {
    question: "How long does mobile home removal take?",
    answer: "Most mobile home removals are completed within 1-3 days, depending on the size and complexity. The process includes utility disconnection, demolition, debris removal, and site cleanup."
  },
  {
    question: "What happens to the land after mobile home removal?",
    answer: "After removal, we grade and level the land, leaving it ready for new construction, landscaping, or other uses. We can also provide additional services like septic system removal if needed."
  },
  {
    question: "Can you remove mobile homes with septic systems?",
    answer: "Yes, we coordinate septic system removal and proper abandonment according to Florida regulations. This ensures your property is ready for new development or alternative septic installations."
  },
  {
    question: "Do you handle utility disconnections?",
    answer: "We coordinate with utility companies and licensed professionals for safe disconnection of electricity, water, sewer, and gas lines. This ensures all disconnections meet safety standards and local codes."
  }
];

export default function MobileHomeRemoval() {
  const { openLeadForm } = useLeadForm();

  const serviceSchema = createServiceSchema({
    name: "Mobile Home Demolition & Removal",
    description: "Professional mobile home and manufactured home demolition and removal services in Tampa Bay. Complete site cleanup and debris removal included.",
    url: "/demolition/mobile-home-removal",
    id: "mobile-home-removal"
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Mobile Home Demolition & Removal Tampa FL | Tampa Land Prep"
        description="Professional mobile home removal and manufactured home demolition in Tampa Bay. Single wide, double wide, and modular home removal. Licensed contractor serving Tampa, Lutz, Land O' Lakes."
        canonical="https://tampalandprep.com/demolition/mobile-home-removal"
        schemas={[organizationSchema, serviceSchema]}
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <Link href="/demolition" className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Demolition Services
            </Link>
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Mobile Home Demolition & Removal
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Professional mobile home and manufactured home removal services in Tampa Bay. 
              Complete demolition, debris removal, and site preparation included.
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get a Free Quote
            </Button>
          </div>
        </section>

        {/* What We Remove Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Mobile Home Types We Remove
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete removal services for all types of manufactured housing
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {mobileHomeTypes.map((type, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-type-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <type.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Mobile Home Removal Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Safe, systematic approach from permits to final cleanup
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-process-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">
                  Complete Mobile Home Removal Services
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  From single wide trailers to large double wide manufactured homes, we provide complete 
                  removal services including skirting removal, utility disconnection, and proper disposal 
                  of all materials. Our team handles all Florida mobile home regulations and permits.
                </p>
                <ul className="mb-8 space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={openLeadForm} size="lg" className="rounded-full">
                    Get Free Estimate
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="rounded-full">
                      Call (407) 928-4376
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={mobileHomeRemoval}
                  alt="Mobile home demolition with excavator and dump trailer"
                  loading="lazy"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Mobile Home Removal Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                See examples of our mobile home demolition work
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={mobileHomeRemoval} 
                    alt="Mobile home being demolished with heavy equipment"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Double Wide Removal</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition1} 
                    alt="Mobile home demolition debris being loaded"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Debris Removal</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition2} 
                    alt="Cleared site after mobile home removal"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Site Cleanup</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Mobile Home Removal FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about mobile home demolition and removal
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover-elevate">
                  <CardHeader>
                    <CardTitle className="text-left text-lg">
                      <h3>{faq.question}</h3>
                    </CardTitle>
                    <CardDescription className="text-left text-base leading-relaxed">
                      {faq.answer}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Mobile Home Removal Service Areas
              </h2>
              <p className="text-xl text-muted-foreground">
                Serving Tampa Bay and surrounding communities
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center justify-center rounded-lg bg-background p-4 text-center shadow-sm">
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Don't see your area? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to check if we service your location.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Need Mobile Home Removal?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free estimate for your mobile home demolition project today. 
              Licensed contractor with full insurance coverage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={openLeadForm} 
                size="lg" 
                variant="secondary"
                className="rounded-full" 
                data-testid="button-cta-contact"
              >
                Get Free Quote
              </Button>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Call (407) 928-4376
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}