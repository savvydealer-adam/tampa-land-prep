import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO, createServiceSchema, organizationSchema } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { 
  Home, 
  Building, 
  Warehouse, 
  Plus, 
  CheckCircle2, 
  ArrowLeft, 
  Calculator,
  Hammer,
  FileText,
  Truck,
  Wrench,
  DollarSign
} from "lucide-react";
import demolition1 from "@assets/IMG_8568_optimized.webp";
import demolition2 from "@assets/IMG_8583_optimized.webp";
import demolition3 from "@assets/IMG_8540_optimized.webp";
import demolition5 from "@assets/IMG_8559_optimized.webp";

const residentialTypes = [
  {
    icon: Home,
    title: "Single Family Homes",
    description: "Complete house demolition for single-story and multi-story residential homes"
  },
  {
    icon: Building,
    title: "Garages & Outbuildings",
    description: "Garage, shed, barn, and other outbuilding demolition and removal"
  },
  {
    icon: Warehouse,
    title: "Additions & Extensions",
    description: "Partial demolition of home additions, sunrooms, and extensions"
  },
  {
    icon: Plus,
    title: "Accessory Structures",
    description: "Demolition of pools houses, workshops, storage buildings, and other structures"
  }
];

const demolishVsRenovate = [
  {
    title: "Structural Issues",
    description: "Foundation problems, rot, or structural damage that makes renovation unsafe or uneconomical"
  },
  {
    title: "Renovation Cost",
    description: "When renovation costs exceed 50% of the home's after-renovation value"
  },
  {
    title: "Code Compliance",
    description: "Bringing older homes up to current building codes would require extensive modifications"
  },
  {
    title: "Site Development",
    description: "Property development plans that require a clean slate for new construction"
  }
];

const processSteps = [
  {
    icon: FileText,
    title: "1. Permits & Planning",
    description: "Obtaining demolition permits and coordinating with utility companies for disconnections"
  },
  {
    icon: Wrench,
    title: "2. Utility Disconnection",
    description: "Safe disconnection of electricity, water, gas, and sewer connections"
  },
  {
    icon: Hammer,
    title: "3. Interior Stripping",
    description: "Removal of valuable materials like fixtures, appliances, and reusable components"
  },
  {
    icon: Building,
    title: "4. Structural Demolition",
    description: "Systematic demolition starting with roof and working down to foundation"
  },
  {
    icon: Truck,
    title: "5. Debris Removal",
    description: "Complete hauling and proper disposal of all demolition materials"
  },
  {
    icon: CheckCircle2,
    title: "6. Site Preparation",
    description: "Foundation removal, hole filling, and final site grading"
  }
];

const features = [
  "Complete house demolition",
  "Garage and shed removal", 
  "Foundation removal and backfill",
  "Utility disconnection coordination",
  "Debris hauling and disposal",
  "Site cleanup and grading",
  "Material salvage options",
  "Residential permit handling",
  "Neighbor notification assistance",
  "Dust and noise control",
  "Property protection measures",
  "Environmental compliance"
];

const serviceAreas = [
  "Tampa", "Land O' Lakes", "Lutz", "Wesley Chapel", "Odessa", "Carrollwood",
  "New Tampa", "Zephyrhills", "Dade City", "Brandon", "Riverview", "Plant City"
];

const faqs = [
  {
    question: "Do I need a permit to demolish my house in Tampa?",
    answer: "Yes, residential demolition requires a demolition permit from your local building department. We handle all permit applications and coordinate inspections to ensure compliance with local codes."
  },
  {
    question: "How much does house demolition cost in Tampa?",
    answer: "Residential demolition costs typically range from $5,000-$15,000 depending on house size, foundation type, and site access. We provide free estimates after evaluating your specific property."
  },
  {
    question: "How long does it take to demolish a house?",
    answer: "Most residential demolitions are completed within 1-3 days for the actual demolition, plus additional time for permits, utility disconnections, and final cleanup. Total project timeline is usually 1-2 weeks."
  },
  {
    question: "What happens to the foundation after house demolition?",
    answer: "We can either remove the foundation completely or break it up and use it as fill material, depending on your future plans for the property. Complete removal is recommended for new construction."
  },
  {
    question: "Can I keep any materials from my demolished house?",
    answer: "Yes, we can salvage materials like hardwood flooring, fixtures, cabinets, or other valuable items before demolition begins. This can help offset demolition costs."
  },
  {
    question: "Will demolition disturb my neighbors?",
    answer: "We implement dust control measures, work during approved hours, and coordinate with neighbors when possible. Most residential demolitions are completed quickly to minimize disruption."
  }
];

export default function ResidentialDemolition() {
  const { openLeadForm } = useLeadForm();

  const serviceSchema = createServiceSchema({
    name: "House Demolition & Garage Removal",
    description: "Professional residential demolition services in Tampa Bay. House demolition, garage removal, and complete site cleanup. Licensed contractor serving Tampa area.",
    url: "/demolition/residential",
    id: "residential-demolition"
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="House Demolition & Garage Removal Tampa FL | Tampa Land Prep"
        description="Professional residential demolition in Tampa Bay. House demolition, garage removal, shed demo. Licensed contractor serving Tampa, Lutz, Land O' Lakes, Wesley Chapel."
        canonical="https://tampalandprep.com/demolition/residential"
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
              House Demolition & Garage Removal
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Professional residential demolition services for homes, garages, and outbuildings 
              throughout Tampa Bay.
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get a Free Quote
            </Button>
          </div>
        </section>

        {/* What We Demolish Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                What We Demolish
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete demolition services for all types of residential structures
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {residentialTypes.map((type, index) => (
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

        {/* When to Demolish vs Renovate Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                When to Demolish vs Renovate
              </h2>
              <p className="text-xl text-muted-foreground">
                Key factors that make demolition the better choice
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {demolishVsRenovate.map((factor, index) => (
                <Card key={index} className="hover-elevate">
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <Calculator className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{factor.title}</CardTitle>
                    <CardDescription>{factor.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Residential Demolition Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Our systematic approach to safe and efficient house demolition
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
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">
                  Complete Residential Demolition Services
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Whether you're clearing land for new construction, removing a damaged structure, or 
                  need garage demolition, we provide complete residential demolition services. Our team 
                  handles everything from permits to final cleanup, ensuring a smooth process for homeowners.
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
                  src={demolition5}
                  alt="Residential house demolition showing interior structural removal"
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
                Residential Demolition Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Examples of our house and garage demolition work
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition3} 
                    alt="House demolition starting with roof removal"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">House Demolition</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition5} 
                    alt="Interior demolition showing structural removal"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Structural Removal</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition2} 
                    alt="Cleared residential lot after complete demolition"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Final Site Prep</CardTitle>
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
                Residential Demolition FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about house and garage demolition
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
                Residential Demolition Service Areas
              </h2>
              <p className="text-xl text-muted-foreground">
                Serving homeowners throughout Tampa Bay
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
                Need house demolition in another area? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to discuss your project.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Need House or Garage Demolition?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free estimate for your residential demolition project. 
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