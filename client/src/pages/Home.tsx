import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import workspaceImage from "@assets/generated_images/Feature_section_workspace_image_6c209941.png";
import teamImage from "@assets/generated_images/Team_collaboration_image_765209cf.png";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />

        <section id="about" className="bg-card py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">
                  Manage Your Website with Confidence
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Our intuitive content management system puts you in complete control. 
                  Create stunning pages, manage your content, and publish changes instantly—all 
                  without touching a single line of code.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    "Visual page editor with drag-and-drop",
                    "Real-time preview as you build",
                    "Pre-built professional templates",
                    "Advanced SEO controls built-in",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" data-testid="button-about-cta">
                  <Link href="/admin">
                    <a>Start Building Now</a>
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={workspaceImage}
                  alt="Modern workspace"
                  className="rounded-lg"
                  data-testid="img-workspace"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <img
                  src={teamImage}
                  alt="Team collaboration"
                  className="rounded-lg"
                  data-testid="img-team"
                />
              </div>
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">
                  Built for Modern Businesses
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Whether you're a small business owner, entrepreneur, or creative professional, 
                  our platform gives you the tools to build a website that represents your brand 
                  perfectly.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { number: "99.9%", label: "Uptime guarantee" },
                    { number: "< 1s", label: "Page load time" },
                    { number: "24/7", label: "Support available" },
                    { number: "SSL", label: "Security included" },
                  ].map((stat, index) => (
                    <Card key={stat.label} className="overflow-visible p-6" data-testid={`card-stat-${index}`}>
                      <div className="mb-2 font-serif text-3xl font-bold text-primary">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-card py-24">
          <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join thousands of businesses building their online presence with our platform
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" data-testid="button-cta-get-started">
                  <Link href="/admin">
                    <a>Get Started Free</a>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" data-testid="button-cta-contact">
                  <a href="mailto:hello@savvydealer.com">Contact Sales</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
