import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John & Sarah Martinez",
    location: "Land O' Lakes, FL",
    service: "Land Clearing",
    rating: 5,
    text: "Tampa Land Prep cleared our 2-acre lot quickly and professionally. They removed all the trees and brush, graded the land perfectly, and left the site clean. Highly recommend for anyone preparing land for construction!"
  },
  {
    name: "David Chen",
    location: "Lutz, FL",
    service: "Grading & Leveling",
    rating: 5,
    text: "Excellent grading work for our new driveway. The team was punctual, professional, and did exactly what they promised. The final grade was perfect and our driveway looks amazing."
  },
  {
    name: "Thompson Construction LLC",
    location: "Tampa, FL",
    service: "Commercial Site Prep",
    rating: 5,
    text: "We've used Tampa Land Prep on multiple commercial projects. Their equipment is top-notch, their operators are skilled, and they always complete work on schedule. A reliable partner for our development projects."
  },
  {
    name: "Rebecca Williams",
    location: "Wesley Chapel, FL",
    service: "Brush Removal",
    rating: 5,
    text: "Great experience from start to finish. They gave us a fair quote, showed up when scheduled, and cleared all the overgrown brush from our property in just two days. The lot looks completely transformed!"
  },
  {
    name: "Mike Rodriguez",
    location: "Tampa, FL",
    service: "Building Demolition",
    rating: 5,
    text: "Needed an old garage demolished and the site cleared. Tampa Land Prep handled everything including permits. Safe, efficient work with complete debris removal. Very satisfied with the results."
  },
  {
    name: "Jennifer & Tom Baker",
    location: "Odessa, FL",
    service: "Driveway Preparation",
    rating: 5,
    text: "Professional service for our driveway base preparation. They excavated, graded, and compacted the base perfectly. Our paver installer said it was one of the best-prepped bases he'd seen. Thank you!"
  },
  {
    name: "Anderson Properties",
    location: "Land O' Lakes, FL",
    service: "Land Clearing & Grading",
    rating: 5,
    text: "We've worked with several land clearing companies, and Tampa Land Prep is by far the best. Their attention to detail, modern equipment, and competitive pricing make them our go-to for all site work."
  },
  {
    name: "Carlos Mendez",
    location: "Carrollwood, FL",
    service: "Selective Demolition",
    rating: 5,
    text: "Tampa Land Prep did interior demolition for our home renovation. They were careful, clean, and protected the areas we wanted to keep. Professional crew that knows what they're doing."
  }
];

export default function Testimonials() {
  const { openLeadForm } = useLeadForm();

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Tampa Land Prep | Customer Reviews - Land Clearing Testimonials"
        description="Read reviews from satisfied Tampa Land Prep customers. See why property owners throughout Tampa Bay trust us for land clearing, grading, and demolition services."
        ogType="website"
      />
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-card py-20 md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
              What Our Customers Say
            </h1>
            <p className="mb-10 text-xl text-muted-foreground">
              Read reviews from property owners throughout the Tampa Bay area
            </p>
            <div className="flex items-center justify-center gap-2 mb-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-8 w-8 fill-primary text-primary" />
              ))}
            </div>
            <Button onClick={openLeadForm} size="lg" className="rounded-full" data-testid="button-hero-cta">
              Get Started Today
            </Button>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
                  <CardHeader>
                    <div className="mb-4 flex justify-between items-start">
                      <Quote className="h-8 w-8 text-primary/20" />
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      "{testimonial.text}"
                    </CardDescription>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>
                      {testimonial.location}
                    </CardDescription>
                    <div className="mt-2">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {testimonial.service}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-card py-20 md:py-32">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="text-center">
                <div className="mb-4 font-serif text-5xl font-bold text-primary">100+</div>
                <div className="text-xl font-semibold">Projects Completed</div>
                <div className="text-muted-foreground">Across Tampa Bay</div>
              </div>
              <div className="text-center">
                <div className="mb-4 font-serif text-5xl font-bold text-primary">5★</div>
                <div className="text-xl font-semibold">Customer Rating</div>
                <div className="text-muted-foreground">Consistently Excellent</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl">
              Join Our Satisfied Customers
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Experience the Tampa Land Prep difference on your next project
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
