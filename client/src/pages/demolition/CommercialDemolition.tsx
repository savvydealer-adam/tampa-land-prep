import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO, createServiceSchema, organizationSchema } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { 
  Building2, 
  Warehouse, 
  Store, 
  Utensils, 
  CheckCircle2, 
  ArrowLeft, 
  HardHat,
  FileText,
  AlertTriangle,
  Recycle,
  Shield,
  Clock
} from "lucide-react";
import demolition1 from "@assets/IMG_8568_optimized.webp";
import demolition2 from "@assets/IMG_8583_optimized.webp";
import demolition3 from "@assets/IMG_8540_optimized.webp";
import demolition4 from "@assets/9EDD5C1A_optimized.webp";
import demolition5 from "@assets/IMG_8559_optimized.webp";

const commercialTypes = [
  {
    icon: Building2,
    title: "Office Buildings",
    description: "Multi-story office building demolition with structural expertise and safety protocols"
  },
  {
    icon: Warehouse,
    title: "Warehouses & Industrial",
    description: "Large-scale warehouse and industrial facility demolition and site clearing"
  },
  {
    icon: Store,
    title: "Retail Buildings",
    description: "Strip malls, shopping centers, and standalone retail building demolition"
  },
  {
    icon: Utensils,
    title: "Restaurants & Hospitality",
    description: "Restaurant, hotel, and hospitality facility demolition with specialized requirements"
  }
];

const processSteps = [
  {
    icon: FileText,
    title: "1. Assessment & Planning",
    description: "Comprehensive site evaluation, structural analysis, and detailed demolition planning"
  },
  {
    icon: Shield,
    title: "2. Permits & Compliance",
    description: "Securing all required permits and ensuring compliance with commercial building codes"
  },
  {
    icon: AlertTriangle,
    title: "3. Safety Preparation",
    description: "Implementing safety protocols, hazmat assessment, and utility disconnection"
  },
  {
    icon: HardHat,
    title: "4. Controlled Demolition",
    description: "Systematic demolition using appropriate equipment and techniques for commercial structures"
  },
  {
    icon: Recycle,
    title: "5. Material Recovery",
    description: "Salvage and recycling of valuable materials like steel, copper, and concrete"
  },
  {
    icon: Clock,
    title: "6. Site Restoration",
    description: "Complete debris removal, site cleanup, and preparation for future development"
  }
];

const features = [
  "Multi-story building demolition",
  "Structural engineering coordination",
  "Environmental compliance (asbestos, lead)",
  "Utility disconnection management",
  "Material salvage and recycling",
  "Traffic management planning",
  "Dust and noise control",
  "Complete debris removal",
  "Site preparation and grading",
  "Commercial permit handling",
  "Insurance and bonding coverage",
  "OSHA safety compliance"
];

const safetyCompliance = [
  {
    title: "OSHA Compliance",
    description: "All work performed according to OSHA safety standards for commercial demolition"
  },
  {
    title: "Environmental Protection", 
    description: "Proper handling of hazardous materials including asbestos and lead paint"
  },
  {
    title: "Dust Control",
    description: "Advanced dust suppression systems to protect surrounding businesses"
  },
  {
    title: "Noise Management",
    description: "Scheduled work hours and noise control measures for commercial areas"
  }
];

const serviceAreas = [
  "Tampa", "Land O' Lakes", "Lutz", "Wesley Chapel", "Odessa", "Carrollwood",
  "New Tampa", "Zephyrhills", "Dade City", "Brandon", "Riverview", "Plant City"
];

const faqs = [
  {
    question: "What permits are required for commercial building demolition in Tampa?",
    answer: "Commercial demolition typically requires building permits, environmental assessments, and utility disconnection permits. We handle all permit applications and coordinate with local authorities to ensure full compliance with Tampa's commercial building codes."
  },
  {
    question: "How long does commercial building demolition take?",
    answer: "Project timelines vary based on building size and complexity. Small retail buildings may take 3-5 days, while large warehouses or multi-story offices can take 1-3 weeks. We provide detailed timelines during the planning phase."
  },
  {
    question: "Do you handle hazardous materials in commercial buildings?",
    answer: "Yes, we coordinate with certified environmental contractors for proper removal and disposal of asbestos, lead paint, and other hazardous materials commonly found in older commercial buildings."
  },
  {
    question: "Can you work around active businesses in the area?",
    answer: "Absolutely. We develop custom schedules and implement dust, noise, and traffic control measures to minimize disruption to surrounding businesses and maintain normal operations in the area."
  },
  {
    question: "What happens to salvageable materials from commercial demolition?",
    answer: "We identify and salvage valuable materials like structural steel, copper wiring, and concrete for recycling. This environmentally responsible approach often provides cost savings that we pass on to our clients."
  },
  {
    question: "Do you provide site preparation after demolition?",
    answer: "Yes, our commercial demolition service includes complete debris removal, site cleanup, and basic grading to prepare the property for new construction or alternative uses."
  }
];

export default function CommercialDemolition() {
  const { openLeadForm } = useLeadForm();

  const serviceSchema = createServiceSchema({
    name: "Commercial Building Demolition",
    description: "Professional commercial building demolition services in Tampa Bay. Office buildings, warehouses, retail demolition with full safety compliance and environmental protection.",
    url: "/demolition/commercial",
    id: "commercial-demolition"
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Commercial Building Demolition Tampa FL | Tampa Land Prep"
        description="Professional commercial building demolition in Tampa Bay. Office buildings, warehouses, retail demolition contractor. Licensed, insured, OSHA compliant. Serving Tampa, Lutz, Land O' Lakes."
        canonical="https://tampalandprep.com/demolition/commercial"
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
              Commercial Building Demolition
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Professional commercial demolition services for office buildings, warehouses, 
              and retail facilities throughout Tampa Bay.
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get a Free Quote
            </Button>
          </div>
        </section>

        {/* Commercial Types Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Types of Commercial Demolition
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialized demolition services for all types of commercial structures
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {commercialTypes.map((type, index) => (
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
                Commercial Demolition Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Systematic approach ensuring safety, compliance, and efficiency
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

        {/* Safety & Compliance Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Safety & Compliance
              </h2>
              <p className="text-xl text-muted-foreground">
                Maintaining the highest safety standards for commercial demolition projects
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {safetyCompliance.map((item, index) => (
                <Card key={index} className="hover-elevate">
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
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
                  Professional Commercial Demolition
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  With extensive experience in commercial demolition, we handle projects of all sizes 
                  from small retail buildings to large industrial facilities. Our team coordinates 
                  with engineers, environmental specialists, and local authorities to ensure safe, 
                  compliant, and efficient demolition services.
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
                  src={demolition3}
                  alt="Commercial building demolition with excavator"
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
                Commercial Demolition Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Examples of our commercial building demolition work
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition3} 
                    alt="Commercial building roof demolition in progress"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Office Building Demo</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition5} 
                    alt="Warehouse structural demolition"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Warehouse Removal</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition2} 
                    alt="Commercial site cleared and ready for development"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Site Preparation</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Commercial Demolition FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about commercial building demolition
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
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Commercial Demolition Service Areas
              </h2>
              <p className="text-xl text-muted-foreground">
                Serving commercial clients throughout Tampa Bay
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
                Need commercial demolition in another area? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to discuss your project.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Need Commercial Demolition?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a professional assessment and free quote for your commercial demolition project. 
              Licensed contractor with full commercial insurance coverage.
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