import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { Mountain, Droplets, Ruler, Building, CheckCircle2, ArrowLeft } from "lucide-react";
import gradingMain from "@assets/images/grading-new.webp";
import gradingAlt from "@assets/images/grading-levelling.jpg";
import sitePrepImg from "@assets/image_1765658633013.png";

const services = [
  {
    icon: Mountain,
    title: "Precision Grading",
    description: "Accurate grading using laser-guided equipment for perfect results"
  },
  {
    icon: Droplets,
    title: "Drainage Solutions",
    description: "Proper slope and drainage to prevent water problems"
  },
  {
    icon: Building,
    title: "Foundation Prep",
    description: "Level surfaces ready for foundation and construction"
  },
  {
    icon: Ruler,
    title: "Slope Stabilization",
    description: "Expert slope management for erosion prevention"
  }
];

const features = [
  "Precision laser-guided grading",
  "Proper drainage slope installation",
  "Foundation preparation and leveling",
  "Slope stabilization and erosion control",
  "Site preparation for construction",
  "Cut and fill operations",
  "Parking lot and driveway grading",
  "Final grade for landscaping"
];

const projectGallery = [
  { 
    image: gradingMain, 
    alt: "Grading equipment leveling a construction site",
    title: "Site Grading"
  },
  { 
    image: gradingAlt, 
    alt: "Leveling work in progress for new construction",
    title: "Foundation Level"
  },
  { 
    image: sitePrepImg, 
    alt: "Site preparation after grading is complete",
    title: "Site Preparation"
  }
];

export default function GradingLeveling() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Grading & Leveling Tampa | Site Preparation | Tampa Land Prep"
        description="Professional grading and leveling services in Tampa Bay. Foundation prep, drainage solutions, slope stabilization. Licensed contractor Tampa, Lutz, Land O' Lakes."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Grading & Leveling Services
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Expert grading and leveling for proper drainage and construction-ready sites
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get a Free Estimate
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Grading & Leveling Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Precision grading for residential and commercial projects
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                  <CardHeader>
                    <div className="mb-4 inline-flex justify-center rounded-lg bg-primary/10 p-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">
                  Why Proper Grading Matters
                </h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Proper grading is essential for preventing water damage, ensuring structural stability, 
                  and creating a solid foundation for any construction project. Our precision equipment 
                  and experienced operators deliver consistent, accurate results.
                </p>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={gradingMain}
                  alt="Grading and leveling work in progress"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                Our Work
              </h2>
              <p className="text-xl text-muted-foreground">
                See examples of our grading and leveling projects
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {projectGallery.map((project, index) => (
                <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-project-${index}`}>
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Need Grading & Leveling?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free estimate for your grading project today
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              Get a Free Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
