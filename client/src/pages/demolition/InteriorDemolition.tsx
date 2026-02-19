import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO, createServiceSchema, organizationSchema } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { 
  Home, 
  ChefHat, 
  Bath, 
  Walls, 
  CheckCircle2, 
  ArrowLeft, 
  Target,
  DollarSign,
  Clock,
  Recycle,
  HardHat,
  FileText
} from "lucide-react";
import demolition1 from "@assets/IMG_8568_optimized.webp";
import demolition2 from "@assets/IMG_8583_optimized.webp";
import demolition5 from "@assets/IMG_8559_optimized.webp";
import demolition3 from "@assets/IMG_8540_optimized.webp";

const interiorTypes = [
  {
    icon: Home,
    title: "Gut Renovations",
    description: "Complete interior demolition down to studs for whole-house renovations"
  },
  {
    icon: ChefHat,
    title: "Kitchen Demolition",
    description: "Cabinet removal, appliance disconnection, and flooring removal for kitchen remodels"
  },
  {
    icon: Bath,
    title: "Bathroom Demo",
    description: "Tile removal, fixture removal, and plumbing preparation for bathroom renovations"
  },
  {
    icon: Walls,
    title: "Wall Removal",
    description: "Non-structural wall removal to open floor plans and reconfigure spaces"
  }
];

const selectiveBenefits = [
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Preserve structural elements and systems that don't need replacement"
  },
  {
    icon: Clock,
    title: "Faster Timeline",
    description: "Quicker renovation process by only removing what needs to be changed"
  },
  {
    icon: Target,
    title: "Precision Work",
    description: "Careful removal protects adjacent areas and finishes you want to keep"
  },
  {
    icon: Recycle,
    title: "Material Recovery",
    description: "Salvage valuable materials like hardwood, fixtures, and architectural elements"
  }
];

const processSteps = [
  {
    icon: FileText,
    title: "1. Project Planning",
    description: "Detailed assessment of what needs removal and what should be preserved"
  },
  {
    icon: HardHat,
    title: "2. Protection Setup",
    description: "Plastic sheeting, dust barriers, and floor protection in unaffected areas"
  },
  {
    icon: Target,
    title: "3. Selective Removal",
    description: "Careful demolition using appropriate tools to protect surrounding areas"
  },
  {
    icon: Recycle,
    title: "4. Material Sorting",
    description: "Separation of salvageable materials from demolition debris"
  },
  {
    icon: CheckCircle2,
    title: "5. Site Cleanup",
    description: "Complete debris removal and cleaning of work areas"
  },
  {
    icon: Home,
    title: "6. Surface Prep",
    description: "Final preparation of surfaces for new construction or finishes"
  }
];

const features = [
  "Complete gut renovations",
  "Kitchen and bathroom demolition",
  "Non-structural wall removal",
  "Flooring and tile removal",
  "Cabinet and fixture removal",
  "Appliance disconnection",
  "Dust containment systems",
  "Material salvage services",
  "Debris removal and cleanup",
  "Surface preparation",
  "Utility protection",
  "Precision demolition techniques"
];

const serviceAreas = [
  "Tampa", "Land O' Lakes", "Lutz", "Wesley Chapel", "Odessa", "Carrollwood",
  "New Tampa", "Zephyrhills", "Dade City", "Brandon", "Riverview", "Plant City"
];

const faqs = [
  {
    question: "What is selective demolition vs full demolition?",
    answer: "Selective demolition carefully removes specific elements like walls, flooring, or fixtures while preserving structural elements and areas you want to keep. Full demolition removes everything down to the structure or foundation."
  },
  {
    question: "Can you remove walls without damaging the rest of the house?",
    answer: "Yes, we specialize in precision wall removal using dust containment and careful techniques to protect surrounding areas. We always verify walls are non-structural before removal."
  },
  {
    question: "How much does interior demolition cost in Tampa?",
    answer: "Interior demo costs vary widely by scope. Kitchen demo ranges $1,500-5,000, bathroom demo $1,000-3,000, and whole-house gut renovations $3,000-15,000. We provide detailed estimates after site evaluation."
  },
  {
    question: "Do you disconnect plumbing and electrical during demo?",
    answer: "We coordinate disconnections with licensed plumbers and electricians when required. Our team can handle basic disconnections, but complex electrical and plumbing work requires specialists."
  },
  {
    question: "Can you save materials during interior demolition?",
    answer: "Yes, we carefully remove and preserve materials like hardwood flooring, cabinets, fixtures, and architectural elements that can be reused or resold, potentially offsetting demolition costs."
  },
  {
    question: "How do you control dust during interior demolition?",
    answer: "We use plastic sheeting, negative air machines, and dust suppression techniques to contain debris within the work area and protect the rest of your home from dust and damage."
  }
];

export default function InteriorDemolition() {
  const { openLeadForm } = useLeadForm();

  const serviceSchema = createServiceSchema({
    name: "Interior & Selective Demolition",
    description: "Professional interior demolition services in Tampa Bay. Kitchen demo, bathroom renovation, gut renovation, selective wall removal. Precision demolition for home renovations.",
    url: "/demolition/interior",
    id: "interior-demolition"
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Interior & Selective Demolition Tampa FL | Tampa Land Prep"
        description="Professional interior demolition in Tampa Bay. Kitchen demo, bathroom renovation demolition, gut renovation, selective wall removal. Licensed contractor serving Tampa, Lutz, Land O' Lakes."
        canonical="https://tampalandprep.com/demolition/interior"
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
              Interior & Selective Demolition
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Professional interior demolition for home renovations. Kitchen demo, bathroom remodels, 
              and selective wall removal throughout Tampa Bay.
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get a Free Quote
            </Button>
          </div>
        </section>

        {/* Types of Interior Demo Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Types of Interior Demolition
              </h2>
              <p className="text-xl text-muted-foreground">
                Precision demolition services for home renovation projects
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {interiorTypes.map((type, index) => (
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

        {/* Benefits of Selective Demo Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Benefits of Selective Demolition
              </h2>
              <p className="text-xl text-muted-foreground">
                Why precision demolition is the smart choice for renovations
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {selectiveBenefits.map((benefit, index) => (
                <Card key={index} className="hover-elevate">
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
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
                Interior Demolition Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Our systematic approach to precision interior demolition
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
                  Professional Interior Demolition
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Whether you're gutting a kitchen for a complete remodel or removing walls to open 
                  your floor plan, our interior demolition services are tailored for home renovation 
                  projects. We use precision techniques and dust containment to protect areas you want 
                  to preserve while efficiently removing what needs to go.
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
                  alt="Interior demolition showing selective structural removal"
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
                Interior Demolition Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Examples of our interior and selective demolition work
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition5} 
                    alt="Interior wall removal and selective demolition"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Wall Removal</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition3} 
                    alt="Kitchen demolition preparation"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Kitchen Demo</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition1} 
                    alt="Gut renovation interior demolition"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Gut Renovation</CardTitle>
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
                Interior Demolition FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about interior and selective demolition
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
                Interior Demolition Service Areas
              </h2>
              <p className="text-xl text-muted-foreground">
                Serving renovation projects throughout Tampa Bay
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
                Planning a renovation in another area? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to discuss your project.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to Start Your Renovation?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free estimate for your interior demolition project. 
              Professional service with dust control and precision techniques.
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