import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Truck, Wrench, Shield, CheckCircle2 } from "lucide-react";

const equipment = [
  {
    name: "Excavators",
    description: "Heavy-duty excavators for deep excavation, demolition, and large-scale land clearing",
    capabilities: [
      "Deep digging up to 20+ feet",
      "Precision grading and trenching",
      "Building demolition",
      "Large debris removal"
    ]
  },
  {
    name: "Bulldozers",
    description: "Powerful dozers for pushing, grading, and clearing large areas efficiently",
    capabilities: [
      "Large-scale land clearing",
      "Rough grading and leveling",
      "Road construction",
      "Debris pushing and stockpiling"
    ]
  },
  {
    name: "Skid Steers",
    description: "Versatile compact machines for residential and tight-space projects",
    capabilities: [
      "Residential lot clearing",
      "Material handling",
      "Grading and backfilling",
      "Brush removal"
    ]
  },
  {
    name: "Compactors & Rollers",
    description: "Soil compaction equipment for stable foundations and proper drainage",
    capabilities: [
      "Foundation preparation",
      "Driveway base compaction",
      "Trench backfill",
      "Road base preparation"
    ]
  },
  {
    name: "Dump Trucks",
    description: "Fleet of dump trucks for efficient material hauling and debris removal",
    capabilities: [
      "Debris hauling and disposal",
      "Material delivery",
      "Soil and gravel transport",
      "Large-scale cleanups"
    ]
  },
  {
    name: "Grading Equipment",
    description: "Precision grading machinery for perfect site leveling and drainage",
    capabilities: [
      "Finish grading",
      "Drainage solutions",
      "Site leveling",
      "Parking lot grading"
    ]
  }
];

const features = [
  {
    icon: Truck,
    title: "Modern Fleet",
    description: "Late-model equipment maintained to manufacturer specifications for reliability"
  },
  {
    icon: Wrench,
    title: "Regular Maintenance",
    description: "Preventive maintenance program ensures minimal downtime and maximum efficiency"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "All equipment meets OSHA standards with comprehensive safety features"
  }
];

export default function Equipment() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Equipment & Fleet - Professional Land Clearing Machinery"
        description="Modern fleet of excavators, bulldozers, and grading equipment for land clearing in Tampa. Professional machinery for residential and commercial projects."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Our Equipment & Fleet
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Professional-grade machinery for every land preparation and demolition project
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Request a Quote
            </Button>
          </div>
        </section>

        {/* Fleet Overview */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Complete Equipment Lineup
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                From residential lots to commercial developments, we have the right equipment for your project
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {equipment.map((item, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-equipment-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {item.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                          <span className="text-sm text-muted-foreground">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Why Our Fleet Matters
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Well-maintained, modern equipment means faster project completion and better results
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="text-center" data-testid={`feature-${index}`}>
                  <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Project Capabilities
              </h2>
              <p className="text-lg text-muted-foreground">
                Our diverse fleet enables us to handle projects of any size and complexity
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card data-testid="card-residential-projects">
                <CardHeader>
                  <CardTitle>Residential Projects</CardTitle>
                  <CardDescription>
                    Perfect equipment sizing for home sites and smaller properties
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Lot clearing and grading</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Pool excavation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Driveway preparation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Landscaping excavation</span>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-commercial-projects">
                <CardHeader>
                  <CardTitle>Commercial Projects</CardTitle>
                  <CardDescription>
                    Heavy-duty equipment for large-scale developments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Multi-acre site clearing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Building demolition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Road construction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-sm">Parking lot grading</span>
                  </div>
                </CardContent>
              </Card>
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
              Let our professional equipment fleet handle your land preparation needs
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
