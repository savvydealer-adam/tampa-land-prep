import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { DemoBookingModal } from "@/components/DemoBookingModal";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function FeaturedFullyManaged() {
  const { openLeadForm } = useLeadForm();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    "Co-op Advertising Management",
    "3rd Party Vendor Coordination",
    "Website Management & Optimization",
    "SEO & GEO Optimization",
    "SEM/PPC Management",
    "Facebook Ads & Social Media",
    "Professional Graphic Design",
    "ROI Tracking & Analytics",
  ];

  return (
    <section 
      className="relative overflow-hidden py-32 bg-gradient-to-br from-orange-500/10 via-background to-background"
      data-testid="section-featured-fully-managed"
    >
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      <div className="container relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div 
              className="mb-6 inline-block rounded-full bg-orange-500/10 px-6 py-2 text-sm font-semibold text-orange-600 dark:text-orange-400"
              data-testid="badge-premium"
            >
              Premium Service
            </div>
            
            <h2 
              className="mb-6 font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
              data-testid="heading-featured-title"
            >
              Complete Automotive Marketing Solution
            </h2>
            
            <p className="mb-8 text-xl text-muted-foreground leading-relaxed">
              Focus on selling cars while we handle everything else. From co-op management to ROI tracking, 
              our white-glove service delivers comprehensive marketing that drives real results.
            </p>

            <div className="mb-10 space-y-3">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-600 dark:text-orange-400" />
                  <span className="text-lg text-foreground">{service}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                onClick={() => setIsBookingOpen(true)}
                variant="default"
                size="lg" 
                className="rounded-full"
                data-testid="button-featured-book-demo"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="rounded-full"
                data-testid="button-featured-learn-more"
              >
                <Link href="/fully-managed-marketing">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-3xl" />
            <div className="relative rounded-3xl bg-card p-8 shadow-2xl border border-orange-500/10">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="mb-2 text-5xl font-bold text-orange-600 dark:text-orange-400">
                    All-In-One
                  </div>
                  <div className="text-xl text-muted-foreground">
                    Marketing Solution
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {[
                    { label: "Services Included", value: "8+" },
                    { label: "Dedicated Account Manager", value: "Yes" },
                    { label: "Custom Reporting", value: "Monthly" },
                    { label: "Strategy Sessions", value: "Quarterly" },
                  ].map((item) => (
                    <div 
                      key={item.label} 
                      className="flex items-center justify-between rounded-lg bg-background/50 p-4"
                    >
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DemoBookingModal 
        open={isBookingOpen}
        onOpenChange={setIsBookingOpen}
      />
    </section>
  );
}
