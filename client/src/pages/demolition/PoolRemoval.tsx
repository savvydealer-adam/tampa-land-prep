import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO, createServiceSchema, organizationSchema } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { 
  Waves, 
  Layers, 
  Shovel, 
  CheckCircle2, 
  ArrowLeft, 
  FileText,
  Hammer,
  Truck,
  HardHat,
  DollarSign,
  Home
} from "lucide-react";
import demolition1 from "@assets/IMG_8568_optimized.webp";
import demolition2 from "@assets/IMG_8583_optimized.webp";
import demolition4 from "@assets/9EDD5C1A_optimized.webp";
import demolition5 from "@assets/IMG_8559_optimized.webp";

const removalTypes = [
  {
    icon: Layers,
    title: "Partial Pool Removal",
    description: "Break down top portion, fill with gravel and soil. More affordable option for most uses."
  },
  {
    icon: Shovel,
    title: "Complete Pool Removal",
    description: "Full excavation and removal of all pool materials. Required for future building construction."
  }
];

const partialVsFull = [
  {
    title: "Partial Removal",
    cost: "50-70% less cost",
    description: "Pool shell broken down to 18\" below grade, filled with gravel and soil. Suitable for landscaping, patios, and non-structural uses.",
    pros: ["Lower cost", "Faster completion", "Good for landscaping"],
    cons: ["Cannot build structures on top", "Must be disclosed to buyers"]
  },
  {
    title: "Full Removal",
    cost: "Higher upfront cost",
    description: "Complete excavation and removal of all pool materials. Site ready for any future use including building construction.",
    pros: ["Can build anything on site", "No disclosure requirements", "Maximum property value"],
    cons: ["Higher cost", "Longer timeline", "More site disruption"]
  }
];

const processSteps = [
  {
    icon: FileText,
    title: "1. Permits & Planning",
    description: "Obtaining required permits and coordinating utility disconnections and inspections"
  },
  {
    icon: Hammer,
    title: "2. Pool Draining",
    description: "Safe water removal following environmental regulations and drainage requirements"
  },
  {
    icon: HardHat,
    title: "3. Equipment Access",
    description: "Site preparation and access setup for heavy equipment and debris removal"
  },
  {
    icon: Waves,
    title: "4. Demolition",
    description: "Breaking down pool shell using hydraulic breakers and excavation equipment"
  },
  {
    icon: Truck,
    title: "5. Material Removal",
    description: "Hauling away concrete, tile, equipment, and other pool materials"
  },
  {
    icon: CheckCircle2,
    title: "6. Backfill & Grade",
    description: "Filling excavated area with appropriate materials and final site grading"
  }
];

const features = [
  "Inground pool removal",
  "Above ground pool demo",
  "Spa and hot tub removal",
  "Pool equipment removal",
  "Utility disconnection",
  "Permit handling",
  "Environmental compliance",
  "Complete debris hauling",
  "Site backfilling and grading",
  "Landscape preparation",
  "Property value consultation",
  "Timeline flexibility"
];

const serviceAreas = [
  "Tampa", "Land O' Lakes", "Lutz", "Wesley Chapel", "Odessa", "Carrollwood",
  "New Tampa", "Zephyrhills", "Dade City", "Brandon", "Riverview", "Plant City"
];

const faqs = [
  {
    question: "Do I need permits to remove my pool in Tampa?",
    answer: "Yes, pool removal typically requires permits in Tampa and surrounding counties. We handle all permit applications, inspections, and coordinate with utility companies for safe disconnection of pool equipment."
  },
  {
    question: "How much does pool removal cost in Tampa?",
    answer: "Pool removal costs vary significantly by size, type, and removal method. Partial removal typically costs $4,000-8,000, while complete removal ranges $8,000-15,000. We provide detailed estimates after site evaluation."
  },
  {
    question: "Should I choose partial or full pool removal?",
    answer: "Partial removal costs less and works well for landscaping. Full removal costs more but allows future construction anywhere on the site and doesn't require disclosure to buyers. We'll help you decide based on your future plans."
  },
  {
    question: "How long does pool removal take?",
    answer: "Most pool removal projects take 3-7 days depending on size and removal type. This includes permit processing time, actual demolition (1-3 days), and final inspections."
  },
  {
    question: "Will pool removal affect my property value?",
    answer: "Pool removal can increase property value by creating usable yard space and eliminating maintenance costs. The impact varies by neighborhood and buyer preferences. We can discuss market factors specific to your area."
  },
  {
    question: "What happens to pool equipment during removal?",
    answer: "We remove and properly dispose of all pool equipment including pumps, filters, heaters, and electrical components. Valuable equipment in good condition can sometimes be sold to offset removal costs."
  }
];

export default function PoolRemoval() {
  const { openLeadForm } = useLeadForm();

  const serviceSchema = createServiceSchema({
    name: "Pool Demolition & Removal",
    description: "Professional pool removal services in Tampa Bay. Inground and above ground pool demolition, partial vs full removal options. Licensed contractor with proper permits.",
    url: "/demolition/pool-removal",
    id: "pool-removal"
  });

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Pool Demolition & Removal Tampa FL | Tampa Land Prep"
        description="Professional pool removal in Tampa Bay. Inground pool demolition, pool fill in service, partial vs complete removal. Licensed contractor serving Tampa, Lutz, Land O' Lakes, Wesley Chapel."
        canonical="https://tampalandprep.com/demolition/pool-removal"
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
              Pool Demolition & Removal
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Professional pool removal services for inground and above ground pools 
              throughout Tampa Bay. Partial and complete removal options available.
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get a Free Quote
            </Button>
          </div>
        </section>

        {/* Partial vs Full Removal Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Partial vs Full Pool Removal
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the right removal method for your needs and budget
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {partialVsFull.map((option, index) => (
                <Card key={index} className="hover-elevate">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <CardTitle className="text-2xl">{option.title}</CardTitle>
                      <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        {option.cost}
                      </span>
                    </div>
                    <CardDescription className="mb-6 text-base leading-relaxed">
                      {option.description}
                    </CardDescription>
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-semibold text-green-600">Advantages:</h4>
                        <ul className="space-y-1">
                          {option.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                              <span className="text-sm">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-semibold text-amber-600">Considerations:</h4>
                        <ul className="space-y-1">
                          {option.cons.map((con, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="h-4 w-4 rounded-full bg-amber-600/20 text-amber-600"></span>
                              <span className="text-sm">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
                Pool Removal Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Our systematic approach to safe and compliant pool removal
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
                  Complete Pool Removal Services
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Whether you want to reclaim yard space, reduce maintenance costs, or prepare for new 
                  construction, our pool removal services provide a complete solution. We handle everything 
                  from permits to final grading, ensuring your property is ready for its next chapter.
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
                  alt="Pool removal equipment breaking up concrete pool shell"
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
                Pool Removal Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Examples of our pool demolition and removal work
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition4} 
                    alt="Pool demolition with heavy equipment breaking concrete"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Pool Demolition</CardTitle>
                </CardHeader>
              </Card>
              <Card className="overflow-hidden hover-elevate">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={demolition1} 
                    alt="Pool removal debris being loaded and hauled away"
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
                    alt="Finished yard after pool removal and landscaping preparation"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Final Grading</CardTitle>
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
                Pool Removal FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about pool demolition and removal
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
                Pool Removal Service Areas
              </h2>
              <p className="text-xl text-muted-foreground">
                Serving pool owners throughout Tampa Bay
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
                Need pool removal in another area? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to discuss your project.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to Remove Your Pool?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free estimate for your pool removal project. We'll help you choose 
              the right removal method for your needs and budget.
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