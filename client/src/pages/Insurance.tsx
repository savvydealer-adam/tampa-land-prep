import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Shield, FileCheck, Award, CheckCircle2, Phone } from "lucide-react";

const certifications = [
  {
    title: "Fully Licensed & Bonded",
    description: "State of Florida contractor license in good standing",
    details: [
      "Active Florida contractor license",
      "Performance bond protection",
      "Business license compliance",
      "All required permits obtained"
    ]
  },
  {
    title: "General Liability Insurance",
    description: "$2,000,000 comprehensive general liability coverage",
    details: [
      "Property damage coverage",
      "Bodily injury protection",
      "Completed operations coverage",
      "Products and services liability"
    ]
  },
  {
    title: "Workers' Compensation",
    description: "Full workers' comp coverage for all employees",
    details: [
      "All crew members covered",
      "State-mandated coverage limits",
      "No liability to property owner",
      "Professional claims management"
    ]
  },
  {
    title: "Equipment Insurance",
    description: "Comprehensive coverage for all machinery and equipment",
    details: [
      "Collision and damage coverage",
      "Theft protection",
      "Breakdown coverage",
      "Liability for equipment operation"
    ]
  }
];

const compliance = [
  {
    icon: Shield,
    title: "OSHA Compliance",
    description: "All work meets OSHA safety standards and regulations"
  },
  {
    icon: FileCheck,
    title: "EPA Certified",
    description: "Environmental compliance for all land clearing activities"
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "Professional certifications and ongoing training"
  }
];

export default function Insurance() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Insurance & Licensing - Fully Licensed Land Clearing"
        description="Licensed, bonded, and insured land clearing company in Tampa. $2M liability coverage, workers' comp, and full compliance with Florida regulations."
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
              Insurance & Licensing
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Fully licensed, bonded, and insured for your complete protection and peace of mind
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Request Insurance Certificate
            </Button>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Coverage & Certifications
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Comprehensive insurance and licensing to protect your property and our team
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-certification-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                    <CardDescription className="text-base">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cert.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Compliance & Standards
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We meet or exceed all federal, state, and local requirements
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {compliance.map((item, index) => (
                <div key={index} className="text-center" data-testid={`compliance-${index}`}>
                  <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Why Insurance & Licensing Matter
              </h2>
              <p className="text-lg text-muted-foreground">
                Protecting you from potential risks and liabilities
              </p>
            </div>

            <div className="space-y-8">
              <Card data-testid="card-property-protection">
                <CardHeader>
                  <CardTitle>Your Property is Protected</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Our comprehensive general liability insurance means that if any damage occurs to your property during our work, 
                    you're fully covered. You won't be held responsible for accidents or unexpected issues.
                  </p>
                  <p className="text-muted-foreground">
                    This includes damage to structures, landscaping, utilities, and neighboring properties.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-worker-safety">
                <CardHeader>
                  <CardTitle>No Liability for Worker Injuries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Our workers' compensation insurance protects you from liability if one of our crew members is injured on your property. 
                    All medical costs and lost wages are covered by our insurance.
                  </p>
                  <p className="text-muted-foreground">
                    Many unlicensed operators don't carry this coverage, putting property owners at significant risk.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-quality-assurance">
                <CardHeader>
                  <CardTitle>Licensed Means Qualified</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Our Florida contractor license demonstrates we've met rigorous state requirements for experience, competency, 
                    and financial responsibility. We're accountable to state regulations and consumer protection laws.
                  </p>
                  <p className="text-muted-foreground">
                    Licensed contractors must maintain their credentials, stay current on regulations, and provide recourse if problems arise.
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-permit-compliance">
                <CardHeader>
                  <CardTitle>Proper Permits & Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    We obtain all required permits and ensure work meets local building codes and zoning regulations. 
                    This protects you from fines, stop-work orders, and complications when selling your property.
                  </p>
                  <p className="text-muted-foreground">
                    Unpermitted work can create legal and financial problems that may not surface until years later.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certificate Request */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <Card className="border-primary/20" data-testid="card-certificate-request">
              <CardHeader className="text-center">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Request a Certificate of Insurance</CardTitle>
                <CardDescription className="text-base">
                  Need proof of insurance for your project? We'll provide a certificate naming you or your lender as additional insured.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 text-sm text-muted-foreground">
                  Certificates typically provided within 24 hours
                </p>
                <Button 
                  onClick={openLeadForm} 
                  size="lg" 
                  className="rounded-full" 
                  data-testid="button-request-certificate"
                >
                  Request Certificate
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Work With a Trusted Professional
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Don't risk working with unlicensed or uninsured contractors
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
