import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Target, Handshake, Lightbulb } from "lucide-react";

export default function About() {
  const { openLeadForm } = useLeadForm();

  const teamMembers = [
    {
      name: "Adam Gillrie",
      title: "Director",
      bio: "Leading Savvy Dealer's strategic vision and client partnerships with deep expertise in automotive digital marketing.",
    },
    {
      name: "Nick",
      title: "VP of Sales",
      bio: "Driving growth and building lasting relationships with dealerships across the country.",
    },
    {
      name: "David Frost",
      title: "CTO",
      bio: "Architecting cutting-edge marketing technology solutions that deliver measurable results for our clients.",
    },
    {
      name: "Emily Schultz",
      title: "Head of Operations",
      bio: "Ensuring seamless execution and exceptional service delivery across all client campaigns.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-32">
          <div className="container mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
            <h1 className="mb-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              We Don't Outspend the Competition
            </h1>
            <p className="mb-8 text-2xl text-muted-foreground sm:text-3xl">
              We Outsmart Them
            </p>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Savvy Dealer was founded on a simple principle: automotive dealerships deserve digital marketing 
              that actually drives sales, not just impressions. We combine deep industry expertise with 
              data-driven strategies to help dealers win in an increasingly competitive market.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold">Our Mission</h2>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  To empower automotive dealerships with marketing strategies that focus on ready-to-buy 
                  shoppers, transparent ROI metrics, and measurable results.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We believe in building backwards from the sale, optimizing for conversations and test 
                  drives—not vanity metrics.
                </p>
              </div>
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold">What Sets Us Apart</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span className="text-lg text-muted-foreground">
                      <strong className="text-foreground">High-intent focus:</strong> We target shoppers who are ready now, not "someday"
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Transparent metrics:</strong> Simple, human-readable KPIs that matter
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Agile execution:</strong> Twice-monthly cadence to pivot against competitors
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span className="text-lg text-muted-foreground">
                      <strong className="text-foreground">Real content:</strong> No AI-generated fluff—just substance that ranks
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-4xl font-bold sm:text-5xl">
                Meet the Team
              </h2>
              <p className="text-lg text-muted-foreground">
                The experts behind your dealership's digital success
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group overflow-hidden rounded-2xl bg-card transition-all hover-elevate"
                  data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                    <div className="flex h-full items-center justify-center">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 text-5xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                    <p className="mb-3 text-sm font-semibold text-primary">{member.title}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
            <h2 className="mb-12 text-center font-serif text-4xl font-bold">Our Values</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-card p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold">Results-Driven</h3>
                <p className="text-muted-foreground">
                  Every campaign is built to drive real conversations, test drives, and sales—not just traffic.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold">Partnership</h3>
                <p className="text-muted-foreground">
                  We're an extension of your team, meeting twice monthly to plan and pivot based on market conditions.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  From AI-optimized websites to attribution intelligence, we stay ahead of the automotive marketing curve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card py-24">
          <div className="container mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-8">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's discuss how Savvy Dealer can help your dealership dominate your market
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button onClick={openLeadForm} size="lg" data-testid="button-request-audit">
                Request Free Audit
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-view-services">
                <a href="/products">View Our Services</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
