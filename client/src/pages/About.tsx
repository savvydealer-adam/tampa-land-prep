import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Users, Target, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "We put our customers at the center of everything we do"
  },
  {
    icon: Target,
    title: "Results Focused",
    description: "Committed to delivering measurable outcomes"
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "Excellence in every interaction and deliverable"
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest, transparent, and ethical in all we do"
  },
];

export default function About() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="About Us | Your Company Name"
        description="Learn about our company, our mission, and the team behind our success."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              About Our Company
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              Replace this with your company's story and mission statement
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <h2 className="mb-8 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                This is where you tell your company's story. When did you start? What problem
                were you trying to solve? How have you evolved over time?
              </p>
              <p>
                Share the journey that led to where you are today. What challenges did you overcome?
                What milestones have you achieved? What drives you to continue?
              </p>
              <p>
                Make it personal and authentic. Your story helps potential customers connect with
                your brand on a human level.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center" data-testid={`card-value-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section (Optional) */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Meet Our Team
            </h2>
            <p className="mb-12 text-xl text-muted-foreground">
              Optional: Add team member bios, photos, and roles here
            </p>
            <p className="text-lg text-muted-foreground">
              You can create team member cards with photos, names, titles, and short bios.
              Or simply remove this section if it's not relevant to your business.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Let's Work Together
            </h2>
            <p className="mb-10 text-xl text-muted-foreground">
              Ready to start a conversation? We're here to help
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-cta-contact">
              Get in Touch
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
