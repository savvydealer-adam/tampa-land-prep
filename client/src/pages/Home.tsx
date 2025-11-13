import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedFullyManaged } from "@/components/FeaturedFullyManaged";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { CheckCircle2 } from "lucide-react";
import { SEO, organizationSchema } from "@/components/SEO";
import workspaceImage from "@assets/generated_images/Feature_section_workspace_image_6c209941.png";
import teamImage from "@assets/generated_images/Team_collaboration_image_765209cf.png";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://savvydealer.com/#website",
  "url": "https://savvydealer.com",
  "name": "Savvy Dealer",
  "description": "Expert digital marketing for automotive dealerships",
  "publisher": {
    "@id": "https://savvydealer.com/#organization",
  },
};

export default function Home() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        canonical="https://savvydealer.com/"
        description="Expert digital marketing for automotive dealerships. Specializing in Facebook Ads, PPC, SEO/GEO optimization, and AI-powered dealer websites. Start driving real results with proven strategies."
        schemas={[organizationSchema, websiteSchema]}
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        <Hero />
        <FeaturedFullyManaged />
        <Features />

        <section id="about" className="bg-card py-32">
          <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h2 className="mb-8 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                  How We Drive Your Sales
                </h2>
                <p className="mb-8 text-xl text-muted-foreground">
                  By aligning our SEO and GEO (Generative Engine Optimization) strategies, we ensure 
                  your dealership doesn't just compete — it <strong className="text-foreground">appears first and performs faster</strong> wherever 
                  shoppers are searching, from Google to ChatGPT.
                </p>
                <ul className="mb-10 space-y-4">
                  {[
                    "Counter competitor tactics effectively",
                    "Dominate in search and generative AI results",
                    "AI-optimized websites that convert",
                    "Transparent reporting you can trust",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                      <span className="text-lg text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-8 text-xl font-semibold">
                  We don't outspend the competition — <span className="text-primary">we outsmart them.</span>
                </p>
                <Button onClick={openLeadForm} size="lg" className="min-h-12 rounded-full px-8" data-testid="button-about-cta">
                  Request Free Audit
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={workspaceImage}
                  alt="Modern workspace"
                  className="rounded-3xl"
                  data-testid="img-workspace"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-20 text-center">
              <h2 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-7xl">
                What Dealers are Saying
              </h2>
              <p className="text-xl text-muted-foreground">
                Consistent performance improvements and trusted partnerships
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote: "Savvy Dealer nailed the essentials: a high‑performing website, marketing that delivers results, consistent service, and reporting that makes decisions obvious. The outcome is steady, consistent performance improvements across traffic quality, conversions, and paid efficiency. Savvy Dealer is a partner that goes above and beyond every time.",
                  name: "Josh Mead",
                  title: "General Manager",
                  company: "Brighton Ford"
                },
                {
                  quote: "We've been working with Savvy Dealer for over a year, and Savvy Dealer has been a major contributor for Banner Fords success. Our website is faster and converts better, and we see consistent performance improvements across SEO and paid media. The custom reporting makes results crystal clear and helps us shift budget with confidence.",
                  name: "Greg Jones",
                  title: "General Manager",
                  company: "Banner Ford"
                },
                {
                  quote: "Savvy Dealer is the ideal partner for our dealerships. Month after month we see consistent performance improvements across website conversions, SEO visibility, and paid media. Attribution is clear, budgets are transparent, and it's obvious which campaigns are moving appointments and sold units.",
                  name: "David Blake",
                  title: "General Manager",
                  company: "Lake Powell Ford and Alamo Ford"
                },
              ].map((testimonial, index) => (
                <Card key={index} className="overflow-visible p-8" data-testid={`card-testimonial-${index}`}>
                  <p className="mb-8 text-lg text-muted-foreground italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="border-t pt-6">
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.title}</p>
                    <p className="font-medium text-primary">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-card py-32">
          <div className="container mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-7xl">
                Ready to Dominate Your Market?
              </h2>
              <p className="mb-10 text-xl text-muted-foreground">
                Join successful dealers who choose performance over promises
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button onClick={openLeadForm} size="lg" className="min-h-14 rounded-full px-10" data-testid="button-cta-get-started">
                  Request Free Audit
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-14 rounded-full px-10" data-testid="button-cta-contact">
                  <a href="tel:8135013229">Call Now: (813) 501-3229</a>
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
