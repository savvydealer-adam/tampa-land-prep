import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import landClearing from "@assets/images/land-clearing.jpg";
import gradingLeveling from "@assets/images/grading-levelling.jpg";
import brushRemoval from "@assets/images/brush-removal.jpg";
import sitePrepImg from "@assets/image_1765658633013.png";
import drivewayPrep from "@assets/images/driveway-prep.png";
import pic1 from "@assets/images/pic-1.png";
import pic2 from "@assets/images/pic-2.png";
import pic3 from "@assets/images/pic-3.png";
import pic4 from "@assets/images/pic-4.png";
import demolition1 from "@assets/IMG_8568_1763230705199.jpeg";
import demolition2 from "@assets/IMG_8583_1763230705199.jpeg";
import demolition3 from "@assets/IMG_8540_1763230705199.jpeg";
import demolition5 from "@assets/IMG_8559_1763230705199.jpeg";

const projects = [
  {
    category: "Land Clearing",
    href: "/land-clearing",
    images: [
      { src: landClearing, alt: "Land clearing project with heavy machinery", title: "Residential Land Clearing" },
      { src: pic1, alt: "Large scale land clearing operation", title: "Commercial Site Clearing" },
      { src: brushRemoval, alt: "Brush and vegetation removal", title: "Brush Removal" }
    ]
  },
  {
    category: "Grading & Leveling",
    href: "/grading-leveling",
    images: [
      { src: gradingLeveling, alt: "Precision grading and leveling work", title: "Site Grading" },
      { src: pic2, alt: "Land leveling for construction", title: "Land Leveling" },
      { src: sitePrepImg, alt: "Site preparation services", title: "Site Preparation" }
    ]
  },
  {
    category: "Demolition Projects",
    href: "/demolition",
    images: [
      { src: demolition3, alt: "Excavator performing building demolition", title: "Building Demolition" },
      { src: demolition5, alt: "Structural demolition work", title: "Structural Removal" },
      { src: demolition1, alt: "Commercial demolition project", title: "Commercial Demo" },
      { src: demolition2, alt: "Completed demolition and site clearing", title: "Site Clearing" }
    ]
  },
  {
    category: "Site Preparation",
    href: "/home-site-prep",
    images: [
      { src: drivewayPrep, alt: "Driveway preparation and base work", title: "Driveway Preparation" },
      { src: pic3, alt: "Site preparation for new construction", title: "Construction Prep" }
    ]
  }
];

export default function Gallery() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Project Gallery - Land Clearing & Excavation Photos"
        description="View our land clearing, grading, and demolition projects in Tampa Bay. Professional excavation and site preparation portfolio from Tampa Land Prep."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              Our Work
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Browse our portfolio of land clearing, grading, and demolition projects throughout Tampa Bay
            </p>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Start Your Project
            </Button>
          </div>
        </section>

        {/* Project Categories */}
        {projects.map((category, categoryIndex) => (
          <section 
            key={categoryIndex} 
            className={categoryIndex % 2 === 0 ? "py-20 md:py-32" : "bg-card py-20 md:py-32"}
          >
            <div className="container mx-auto max-w-7xl px-6">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
                  {category.category}
                </h2>
                <Link href={category.href}>
                  <Button variant="outline" size="sm" className="gap-2" data-testid={`link-service-${categoryIndex}`}>
                    View Service Details
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.images.map((image, imageIndex) => (
                  <Card 
                    key={imageIndex} 
                    className="overflow-hidden hover-elevate" 
                    data-testid={`card-project-${categoryIndex}-${imageIndex}`}
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{image.title}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Get a free estimate for your land clearing, grading, or demolition project
            </p>
            <Button 
              onClick={openLeadForm} 
              size="lg" 
              variant="secondary"
              className="rounded-full" 
              data-testid="button-cta-contact"
            >
              Request a Free Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
