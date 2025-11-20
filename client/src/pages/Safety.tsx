import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Shield, HardHat, AlertTriangle, Users, CheckCircle2, Wrench } from "lucide-react";

const safetyProtocols = [
  {
    icon: HardHat,
    title: "Personal Protective Equipment (PPE)",
    description: "All crew members equipped with required safety gear",
    requirements: [
      "Hard hats on all job sites",
      "Steel-toed safety boots",
      "High-visibility vests",
      "Eye and hearing protection",
      "Gloves and protective clothing"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Site Safety Procedures",
    description: "Comprehensive protocols to protect workers and property",
    requirements: [
      "Pre-job safety briefings",
      "Hazard identification and assessment",
      "Clear work zone boundaries",
      "Traffic control when needed",
      "Underground utility location"
    ]
  },
  {
    icon: Wrench,
    title: "Equipment Safety",
    description: "Regular maintenance and operator certification programs",
    requirements: [
      "Daily equipment inspections",
      "Certified equipment operators only",
      "Regular maintenance schedules",
      "Safety features verification",
      "Proper equipment storage"
    ]
  },
  {
    icon: Users,
    title: "Training & Certification",
    description: "Ongoing safety education for all team members",
    requirements: [
      "OSHA safety training",
      "First aid and CPR certified",
      "Equipment operation training",
      "Emergency response procedures",
      "Regular safety meetings"
    ]
  }
];

const standards = [
  {
    title: "OSHA Compliance",
    description: "We strictly adhere to all Occupational Safety and Health Administration regulations for construction and excavation work.",
    icon: Shield
  },
  {
    title: "Trench Safety",
    description: "All excavations follow OSHA trench safety standards including proper shoring, sloping, and protective systems.",
    icon: AlertTriangle
  },
  {
    title: "Environmental Protection",
    description: "Erosion control, dust management, and environmental protection measures on every project.",
    icon: CheckCircle2
  }
];

export default function Safety() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Safety Standards - OSHA Compliant Land Clearing"
        description="OSHA-compliant safety protocols for land clearing in Tampa. Trained crews, proper equipment, and comprehensive safety measures on every project."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-4">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Safety Standards
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Safety is our top priority. We maintain the highest standards to protect our team, your property, and the environment.
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Learn About Our Safety Record
            </Button>
          </div>
        </section>

        {/* Safety Protocols */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Safety Protocols
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Comprehensive safety measures on every project, every day
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {safetyProtocols.map((protocol, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-protocol-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <protocol.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{protocol.title}</CardTitle>
                    <CardDescription className="text-base">
                      {protocol.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {protocol.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                          <span className="text-sm text-muted-foreground">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Standards */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Industry Standards Compliance
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We meet or exceed all regulatory requirements
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {standards.map((standard, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-standard-${index}`}>
                  <CardHeader className="text-center">
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                      <standard.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{standard.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      {standard.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Statement */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Safety Commitment
              </h2>
            </div>

            <div className="space-y-6">
              <Card data-testid="card-zero-accidents">
                <CardHeader>
                  <CardTitle>Zero Accident Goal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Our goal is zero accidents, zero injuries, and zero incidents on every job site. We believe that all accidents 
                    are preventable through proper planning, training, and execution of safety protocols.
                  </p>
                  <p className="text-muted-foreground">
                    Every crew member has the authority to stop work if they identify an unsafe condition. Safety always takes 
                    priority over schedule or cost.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-continuous-improvement">
                <CardHeader>
                  <CardTitle>Continuous Improvement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    We constantly review and update our safety procedures based on industry best practices, regulatory changes, 
                    and lessons learned. Regular safety audits help us identify areas for improvement.
                  </p>
                  <p className="text-muted-foreground">
                    Our team participates in ongoing safety training and certification programs to stay current on the latest 
                    equipment and procedures.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-property-protection">
                <CardHeader>
                  <CardTitle>Property & Environmental Protection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Safety extends beyond our crew to include your property and the environment. We take precautions to protect 
                    structures, utilities, landscaping, and neighboring properties.
                  </p>
                  <p className="text-muted-foreground">
                    Environmental protection measures include erosion control, dust suppression, and proper disposal of debris 
                    and materials.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety Record */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-8 font-serif text-3xl font-bold sm:text-4xl">
              Our Safety Record
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div data-testid="stat-projects">
                <div className="mb-2 font-serif text-5xl font-bold text-primary">1000+</div>
                <div className="text-xl font-semibold">Projects</div>
                <div className="text-sm text-muted-foreground">Completed Safely</div>
              </div>
              <div data-testid="stat-training">
                <div className="mb-2 font-serif text-5xl font-bold text-primary">100%</div>
                <div className="text-xl font-semibold">Certified</div>
                <div className="text-sm text-muted-foreground">OSHA Trained Crews</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Work With a Safety-Focused Team
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Choose a contractor that prioritizes safety as much as quality
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              Request a Free Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
