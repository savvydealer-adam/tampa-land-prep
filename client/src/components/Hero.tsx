import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";
import heroImage from "@assets/generated_images/Automotive_dealership_hero_image_d17995ec.png";

export function Hero() {
  const { openLeadForm } = useLeadForm();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="font-medium text-white">Digital Marketing for Auto Dealers</span>
          </div>

          <h1 className="font-serif text-6xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
            The Savvy Dealer
            <br />
            Difference
          </h1>

          <p className="mx-auto max-w-3xl text-xl text-white/90 sm:text-2xl">
            We partner with dealers who know that{" "}
            <strong className="text-white">leads aren't created — they're captured.</strong>
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              onClick={openLeadForm}
              className="min-h-14 w-full rounded-full bg-white/95 px-10 text-base font-semibold text-[#0088ff] backdrop-blur-sm sm:w-auto"
              data-testid="button-hero-get-started"
            >
              <span className="flex items-center gap-2">
                Request Free Audit
                <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-[2px] rounded-full bg-white/40" />
      </div>
    </section>
  );
}
