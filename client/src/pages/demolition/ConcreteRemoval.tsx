import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO, createServiceSchema, organizationSchema } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { 
  Square, 
  Car, 
  Home, 
  Waves, 
  CheckCircle2, 
  ArrowLeft, 
  Hammer,
  Truck,
  FileText,
  HardHat,
  Recycle,
  MapPin
} from "lucide-react";
import demolition1 from "@assets/IMG_8568_optimized.webp";
import demolition2 from "@assets/IMG_8583_optimized.webp";
import demolition4 from "@assets/9EDD5C1A_optimized.webp";
import demolition5 from "@assets/IMG_8559_optimized.webp";

const concreteTypes = [
  {
    icon: Car,
    title: "Driveways",
    description: "Complete driveway removal including concrete, asphalt, and brick pavers"
  },
  {
    icon: Home,
    title: "Foundation Slabs",
    description: "House foundation removal, basement floors, and structural concrete slabs"
  },
  {
    icon: Square,
    title: "Sidewalks & Walkways",
    description: "Sidewalk removal, garden paths, and pedestrian walkway demolition"
  },
  {
    icon: Square,
    title: "Patios & Pool Decks",
    description: "Patio demolition, pool deck removal, and outdoor living space concrete"
  }
];

const processSteps = [
  {
    icon: FileText,
    title: "1. Site Assessment",
    description: "Thorough evaluation of concrete thickness, reinforcement, and surrounding structures"
  },
  {
    icon: MapPin,
    title: "2. Utility Location",
    description: "Marking underground utilities to avoid damage during removal process"
  },
  {
    icon: HardHat,
    title: "3. Safety Setup",
    description: "Dust control measures, noise management, and protective barriers"
  },
  {
    icon: Hammer,
    title: "4. Concrete Breaking",
    description: "Systematic breaking using hydraulic breakers and sawcutting equipment"
  },
  {
    icon: Truck,
    title: "5. Material Removal",
    description: "Loading and hauling all concrete debris for proper disposal or recycling"
  },
  {
    icon: CheckCircle2,
    title: "6. Site Restoration",
    description: "Backfilling, compaction, and grading to prepare for new construction"
  }
];

const features = [
  "Driveway concrete removal",
  "Foundation slab demolition",
  "Sidewalk and walkway removal", 
  "Patio and pool deck demolition",
  "Reinforced concrete breaking",
  "Utility line protection",
  "Concrete recycling options",
  "Dust suppression systems",
  "Complete debris hauling",
  "Site preparation and grading",
  "Underground obstacle removal",
  "Environmental compliance"
];

const concreteInfo = [
  {
    title: "Reinforced Concrete",
    description: "Specialized equipment for breaking rebar-reinforced concrete slabs and foundations"
  },
  {
    title: "Thickness Variations", 
    description: "Experience with concrete ranging from 4-inch slabs to thick foundation walls"
  },
  {
    title: "Access Challenges",
    description: "Solutions for tight spaces, backyard access, and areas with limited equipment access"
  },
  {
    title: "Recycling Options",
    description: "Concrete crushing and recycling to reduce landfill waste and project costs"
  }
];

const serviceAreas = [
  "Tampa", "Land O' Lakes", "Lutz", "Wesley Chapel", "Odessa", "Carrollwood",
  "New Tampa", "Zephyrhills", "Dade City", "Brandon", "Riverview", "Plant City"
];

const faqs = [
  {
    question: "How much does concrete removal cost in Tampa?",
    answer: "Concrete removal costs typically range from $2-6 per square foot depending on thickness, reinforcement, and access. Driveways average $1,000-3,000, while foundation removal can range $2,000-8,000. We provide free estimates after site evaluation."
  },
  {
    question: "Do I need permits for concrete removal?",
    answer: "Most concrete removal projects don't require permits unless they involve structural foundations or affect drainage. We assess permit requirements during planning and handle applications when needed."
  },
  {
    question: "Can you remove reinforced concrete with rebar?",
    answer: "Yes, we specialize in reinforced concrete removal using hydraulic breakers and cutting equipment designed for rebar. We separate steel for recycling and properly dispose of all materials."
  },
  {
    question: "How long does concrete removal take?",
    answer: "Most residential concrete removal projects are completed in 1-2 days. Driveways typically take 4-8 hours, while large foundation slabs may require 1-3 days depending on size and reinforcement."
  },
  {
    question: "What happens to the removed concrete?",
    answer: "We offer concrete recycling options where the material is crushed and reused for new construction projects. This environmentally friendly approach often reduces disposal costs."
  },
  {
    question: "Can you work in tight spaces or backyards?",
    answer: "Yes, we have compact equipment for tight access areas and can hand-break concrete in spaces where machinery can't reach. We always find a solution for challenging access situations."
  }
];

export default function ConcreteRemoval() {
  const { openLeadForm } = useLeadForm();

  const serviceSchema = createServiceSchema({
    name: "Concrete Removal & Slab Demolition",
    description: "Professional concrete removal services in Tampa Bay. Driveway removal, foundation demolition, slab breaking. Licensed contractor with specialized equipment.",
    url: "/demolition/concrete-removal",
    id: "concrete-removal"
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Concrete Removal & Slab Demolition Tampa FL | Tampa Land Prep"
        description="Professional concrete removal in Tampa Bay. Driveway removal, foundation demolition, slab breaking, sidewalk removal. Licensed contractor serving Tampa, Lutz, Land O' Lakes."
        canonical="https://tampalandprep.com/demolition/concrete-removal"
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
              Concrete Removal & Slab Demolition
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Professional concrete removal services for driveways, foundations, sidewalks, 
              and patios throughout Tampa Bay.
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get a Free Quote
            </Button>
          </div>
        </section>

        {/* Types of Concrete Removal Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Types of Concrete We Remove
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete concrete demolition services for residential and commercial properties
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {concreteTypes.map((type, index) => (
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
                Concrete Removal Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Safe and efficient approach to concrete demolition
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

        {/* Concrete Specialties Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Concrete Removal Expertise
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialized knowledge and equipment for all concrete challenges
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {concreteInfo.map((info, index) => (
                <Card key={index} className="hover-elevate">
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <Square className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                    <CardDescription>{info.description}</CardDescription>
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
                  Professional Concrete Removal Services
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  From cracked driveways to full foundation removal, we have the specialized equipment 
                  and expertise to handle all concrete demolition projects. Our team uses hydraulic 
                  breakers, concrete saws, and compact equipment to access tight spaces and complete 
                  removal efficiently.
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
                  src={demolition4}
                  alt="Concrete removal equipment breaking up driveway"
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
                Concrete Removal Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Examples of our concrete demolition work
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition4} 
                    alt="Heavy equipment breaking concrete driveway"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Driveway Removal</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition1} 
                    alt="Concrete slab demolition with debris removal"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Foundation Removal</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition2} 
                    alt="Clean site after concrete removal and grading"
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
                Concrete Removal FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about concrete demolition and removal
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
                Concrete Removal Service Areas
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
                Need concrete removal in another area? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to check service availability.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Need Concrete Removal?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free estimate for your concrete demolition project. 
              Professional equipment and experienced crews ready to help.
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