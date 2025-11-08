import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_hero_background_image_8c13e03a.png";

export interface ProductPageProps {
  badge: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  accentColor: string;
  benefits: {
    title: string;
    items: string[];
  };
  features: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon?: React.ComponentType<{ className?: string }>;
    }>;
  };
  proof?: {
    title: string;
    items: Array<{
      stat: string;
      label: string;
    }>;
  };
  process?: {
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
  };
}

export function ProductPage({
  badge,
  title,
  subtitle,
  heroDescription,
  accentColor,
  benefits,
  features,
  proof,
  process,
  cta,
}: ProductPageProps) {
  return (
    <div className="flex-1">
      <section
        className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge
            className="mb-6 border-white/20 bg-white/10 text-white backdrop-blur-sm"
            data-testid="badge-product"
          >
            {badge}
          </Badge>
          <h1 className="mb-6 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-4 text-xl font-semibold text-white/90 sm:text-2xl">
            {subtitle}
          </p>
          <p className="mb-8 text-lg text-white/80">
            {heroDescription}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="backdrop-blur-sm"
              data-testid="button-hero-cta"
            >
              <a href="/free-audit">Request Free Audit</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              data-testid="button-hero-secondary"
            >
              <a href="tel:8135013229">Call (813) 501-3229</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold sm:text-4xl">
            {benefits.title}
          </h2>
          <div className="mx-auto max-w-3xl">
            <ul className="grid gap-4 md:grid-cols-2">
              {benefits.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                  data-testid={`benefit-${index}`}
                >
                  <div style={{ color: accentColor }}>
                    <CheckCircle2 className="h-6 w-6 shrink-0" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
              {features.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {features.description}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.items.map((feature, index) => (
              <Card
                key={index}
                className="overflow-visible p-6"
                data-testid={`feature-${index}`}
              >
                {feature.icon && (
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                )}
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {proof && (
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold sm:text-4xl">
              {proof.title}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {proof.items.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-visible p-6 text-center"
                  data-testid={`proof-${index}`}
                >
                  <div
                    className="mb-2 font-serif text-4xl font-bold"
                    style={{ color: accentColor }}
                  >
                    {item.stat}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {process && (
        <section className="bg-card py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold sm:text-4xl">
              {process.title}
            </h2>
            <div className="mx-auto max-w-4xl space-y-8">
              {process.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6"
                  data-testid={`process-step-${index}`}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg font-serif text-2xl font-bold text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
              {cta.title}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {cta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" data-testid="button-cta-final">
                <a href="/free-audit">Request Free Audit</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                data-testid="button-cta-phone"
              >
                <a href="tel:8135013229">Call (813) 501-3229</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
