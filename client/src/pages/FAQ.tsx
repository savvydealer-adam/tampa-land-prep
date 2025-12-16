import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What services does Tampa Land Prep provide?",
        a: "We offer comprehensive land preparation services including land clearing, grading and leveling, brush removal, driveway preparation, building demolition, and site preparation for new construction."
      },
      {
        q: "What areas do you serve?",
        a: "We serve Tampa, Land O' Lakes, Lutz, Wesley Chapel, and all surrounding Tampa Bay communities. Contact us to confirm service availability in your specific area."
      },
      {
        q: "Do you provide free estimates?",
        a: "Yes! We provide free, no-obligation estimates for all our services. Simply request a quote through our website or give us a call."
      }
    ]
  },
  {
    category: "Land Clearing & Grading",
    questions: [
      {
        q: "How long does a typical land clearing project take?",
        a: "Project duration varies based on property size and scope of work. Most residential lots can be cleared in 1-3 days, while larger commercial properties may take longer. We'll provide a detailed timeline with your estimate."
      },
      {
        q: "What happens to the cleared vegetation and debris?",
        a: "All debris is properly removed and disposed of according to local regulations. We can also arrange for mulching or chipping services if you prefer to keep materials on-site."
      },
      {
        q: "Can you clear land with difficult terrain or wetlands?",
        a: "Yes, we have specialized equipment to handle challenging terrain, slopes, and environmentally sensitive areas. We ensure all work complies with environmental regulations."
      }
    ]
  },
  {
    category: "Demolition",
    questions: [
      {
        q: "What types of structures can you demolish?",
        a: "We handle residential homes, garages, commercial buildings, and interior demolition projects. Our licensed team safely demolishes structures of all sizes."
      },
      {
        q: "Do you handle permits for demolition projects?",
        a: "Yes, we can assist with obtaining necessary permits and ensure all work meets local building codes and regulations."
      },
      {
        q: "How do you ensure demolition safety?",
        a: "Safety is our top priority. We follow strict safety protocols, use proper equipment, secure the work site, and carry full insurance coverage for all projects."
      }
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      {
        q: "How do you determine pricing?",
        a: "Pricing depends on project size, scope, terrain difficulty, and specific requirements. We provide detailed, transparent estimates after a free site assessment."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, checks, and major credit cards. Payment terms will be outlined in your project contract."
      },
      {
        q: "Do you require a deposit?",
        a: "For larger projects, we typically require a deposit to schedule work and reserve equipment. Specific terms will be discussed during the estimate process."
      }
    ]
  },
  {
    category: "Equipment & Process",
    questions: [
      {
        q: "What type of equipment do you use?",
        a: "We use state-of-the-art excavators, bulldozers, skid steers, and grading equipment appropriate for each specific project. All equipment is professionally maintained and operated by experienced personnel."
      },
      {
        q: "Will you damage my property during the work?",
        a: "We take great care to protect your property. We'll discuss access routes, mark utilities, and take precautions to minimize impact on surrounding areas."
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes, Tampa Land Prep is fully licensed and insured. We carry comprehensive liability insurance and workers' compensation coverage for your protection."
      }
    ]
  }
];

export default function FAQ() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | FAQ - Land Clearing & Excavation Questions"
        description="Common questions about land clearing, grading, demolition, and site preparation in Tampa Bay. Learn about our services, pricing, and process."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Get answers to common questions about our land preparation services
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Ask Us Anything
            </Button>
          </div>
        </section>

        {/* FAQ Categories */}
        {faqs.map((category, categoryIndex) => (
          <section 
            key={categoryIndex} 
            className={categoryIndex % 2 === 0 ? "py-20 md:py-32" : "bg-card py-20 md:py-32"}
          >
            <div className="container mx-auto max-w-4xl px-6">
              <h2 className="mb-12 font-serif text-3xl font-bold sm:text-4xl">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <Card key={faqIndex} className="hover-elevate" data-testid={`card-faq-${categoryIndex}-${faqIndex}`}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-primary/10 p-2 mt-1">
                          <HelpCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-3">{faq.q}</CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {faq.a}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Still Have Questions?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              We're here to help! Contact us for personalized answers to your land preparation questions
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
