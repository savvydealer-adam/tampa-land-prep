import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_hero_background_image_8c13e03a.png";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/40 px-4 py-2 text-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-medium">Digital Marketing for Auto Dealers</span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The Savvy Dealer Difference
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl">
            Savvy Dealer partners with Franchised and Independent Dealers who know that{" "}
            <strong>leads aren't created — they're captured.</strong>
          </p>
          
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Our full-service digital marketing, AI-optimized websites, and transparent reporting 
            work together to counter competitor tactics and dominate in both search and generative 
            AI results. We don't outspend the competition — <strong>we outsmart them.</strong>
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-background/90 backdrop-blur-sm hover:bg-background/95 sm:w-auto"
              data-testid="button-hero-get-started"
            >
              <a href="https://ai-detect.savvydealer.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Request Free Audit
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full bg-background/40 backdrop-blur-sm sm:w-auto"
              data-testid="button-hero-learn-more"
            >
              <a href="#products">Our Products</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-[2px] rounded-full bg-foreground/20" />
      </div>
    </section>
  );
}
