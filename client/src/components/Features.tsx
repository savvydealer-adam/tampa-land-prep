import { Card } from "@/components/ui/card";
import { Layout, Palette, Zap, Globe, Lock, Smartphone } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Layout,
      title: "Visual Page Builder",
      description: "Drag and drop components to build beautiful pages. No coding required.",
    },
    {
      icon: Palette,
      title: "Beautiful Themes",
      description: "Choose from professionally designed themes or customize your own.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed. Your website loads instantly for visitors.",
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Built-in SEO tools help your website rank higher in search results.",
    },
    {
      icon: Lock,
      title: "Secure & Reliable",
      description: "Enterprise-grade security keeps your content safe and protected.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Your website looks perfect on all devices, from phones to desktops.",
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features designed to help you create amazing websites
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group overflow-visible p-6 transition-all hover-elevate"
              data-testid={`card-feature-${index}`}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
