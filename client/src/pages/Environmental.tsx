import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Leaf, Droplets, Trees, CheckCircle2, Shield } from "lucide-react";

const practices = [
  {
    icon: Droplets,
    title: "Erosion & Sediment Control",
    description: "Preventing soil loss and water pollution during and after land clearing",
    measures: [
      "Silt fencing installation",
      "Erosion control blankets",
      "Temporary seeding of disturbed areas",
      "Storm water management",
      "Sediment basin construction",
      "Regular inspection and maintenance"
    ]
  },
  {
    icon: Trees,
    title: "Vegetation Management",
    description: "Responsible clearing that minimizes environmental impact",
    measures: [
      "Selective clearing when possible",
      "Protected species identification",
      "Buffer zone preservation",
      "Minimal disruption to surrounding vegetation",
      "Replanting and restoration options",
      "Invasive species management"
    ]
  },
  {
    icon: Leaf,
    title: "Waste & Debris Management",
    description: "Proper handling and disposal of cleared materials",
    measures: [
      "Recycling wood and vegetation",
      "Proper disposal of hazardous materials",
      "Debris chipping and mulching",
      "Licensed disposal facilities only",
      "Documentation of disposal",
      "Site cleanup to original or better condition"
    ]
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Meeting all federal, state, and local environmental requirements",
    measures: [
      "EPA storm water permit compliance",
      "Florida DEP regulations",
      "Local environmental ordinances",
      "Wetland protection protocols",
      "Protected species surveys",
      "Required environmental permits"
    ]
  }
];

const regulations = [
  {
    title: "Clean Water Act Compliance",
    description: "We comply with EPA storm water regulations to prevent pollution of waterways during construction and land clearing activities."
  },
  {
    title: "Florida Environmental Regulations",
    description: "Full compliance with Florida Department of Environmental Protection (FDEP) requirements for land disturbance, erosion control, and wetland protection."
  },
  {
    title: "Local Environmental Ordinances",
    description: "We adhere to county and municipal environmental protection ordinances, including tree preservation requirements and buffer zones."
  }
];

export default function Environmental() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Environmental Compliance - Eco-Friendly Land Clearing"
        description="Environmentally responsible land clearing in Tampa. EPA compliant erosion control, proper waste disposal, and protected species protocols."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-4">
              <Leaf className="h-12 w-12 text-primary" />
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Environmental Compliance
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Responsible land clearing that protects the environment while meeting all regulatory requirements
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Learn About Our Practices
            </Button>
          </div>
        </section>

        {/* Environmental Practices */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Environmental Practices
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Protecting Florida's natural resources on every project
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {practices.map((practice, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-practice-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <practice.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{practice.title}</CardTitle>
                    <CardDescription className="text-base">
                      {practice.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {practice.measures.map((measure, measureIndex) => (
                        <li key={measureIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                          <span className="text-sm text-muted-foreground">{measure}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Compliance */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Regulatory Compliance
              </h2>
              <p className="text-lg text-muted-foreground">
                We meet or exceed all environmental regulations
              </p>
            </div>

            <div className="space-y-6">
              {regulations.map((regulation, index) => (
                <Card key={index} data-testid={`card-regulation-${index}`}>
                  <CardHeader>
                    <CardTitle>{regulation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{regulation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Storm Water Management */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Storm Water Management
              </h2>
              <p className="text-lg text-muted-foreground">
                Protecting water quality during and after construction
              </p>
            </div>

            <Card data-testid="card-stormwater">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 font-semibold">During Construction</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      We implement comprehensive erosion and sediment control measures to prevent soil and pollutants 
                      from entering storm drains, streams, or wetlands.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">Install perimeter silt fencing before clearing begins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">Construct sediment basins to capture runoff</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">Use erosion control blankets on slopes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">Minimize exposed soil areas</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold">After Construction</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      We ensure proper site grading and stabilization to manage storm water and prevent future erosion.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">Grade for positive drainage away from structures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">Temporary or permanent seeding of disturbed areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">Install permanent erosion control measures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground">Maintain controls until site is fully stabilized</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Protected Species */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Protected Species & Habitat
              </h2>
            </div>

            <Card data-testid="card-protected-species">
              <CardContent className="pt-6">
                <p className="mb-6 text-muted-foreground">
                  Florida is home to many protected plant and animal species. We take special care to identify and 
                  protect these species during land clearing operations.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold">Pre-Clearing Surveys</h3>
                    <p className="text-sm text-muted-foreground">
                      When required, we conduct or coordinate environmental surveys to identify protected species, 
                      nesting sites, wetlands, and other sensitive areas before work begins.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">Buffer Zones & Protection</h3>
                    <p className="text-sm text-muted-foreground">
                      We establish and maintain buffer zones around wetlands, water bodies, and protected habitats. 
                      Protective fencing prevents equipment from entering sensitive areas.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">Seasonal Restrictions</h3>
                    <p className="text-sm text-muted-foreground">
                      We observe seasonal restrictions for protected species such as gopher tortoises, nesting birds, 
                      and sea turtles when working in or near their habitats.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold">Permit Coordination</h3>
                    <p className="text-sm text-muted-foreground">
                      When projects require environmental permits, we coordinate with Florida Fish and Wildlife 
                      Conservation Commission (FWC) and other agencies to ensure full compliance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Environmental Commitment
              </h2>
            </div>

            <Card className="border-primary/20" data-testid="card-commitment">
              <CardContent className="pt-6">
                <p className="mb-4 text-muted-foreground">
                  At Tampa Land Prep, we believe that responsible land clearing doesn't have to mean environmental damage. 
                  Our team is trained in best management practices for environmental protection, and we make it a priority 
                  on every project.
                </p>
                <p className="mb-4 text-muted-foreground">
                  We stay current on environmental regulations and best practices through ongoing training and certification. 
                  Our goal is to complete your project efficiently while leaving the smallest possible environmental footprint.
                </p>
                <p className="text-muted-foreground">
                  When you choose Tampa Land Prep, you're choosing a contractor that cares about protecting Florida's 
                  natural resources for future generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Responsible Land Clearing
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Work with a contractor that takes environmental protection seriously
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              Get Your Free Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
