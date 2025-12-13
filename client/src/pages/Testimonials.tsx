import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Simona Brinkman",
    location: "Tampa, FL",
    service: "Building Demolition",
    rating: 5,
    text: "Did a building demo job in Tampa for me. Brought the whole thing down and left it clean when done. Great guys. Easy to work with. Kept to their word. Recommend highly."
  },
  {
    name: "Ann Beattie",
    location: "Tampa, FL",
    service: "Land Clearing",
    rating: 5,
    text: "Tampa land prep, Stephanie was excellent in her ability to clear the backyard of all the stumps and debris left by the tree removal company. She has the equipment to make your yard or land prep anyway you choose to have it look!!"
  },
  {
    name: "Kenyatta Johnson",
    location: "Tampa Bay, FL",
    service: "Demolition",
    rating: 5,
    text: "Tampa Land Prep did such an amazing and professional job with the demolition of our vacant mobile home. Stephanie was fast with replies and had the resources and know how to get the job done quickly."
  },
  {
    name: "Maria Haddon",
    location: "Tampa Bay, FL",
    service: "Land Clearing",
    rating: 5,
    text: "Tampa Land Prep are amazing people who tackled our parcel of overgrown brush and dead branches and trees. We weren't able to even walk in the area before. They were prompt and listened to us."
  },
  {
    name: "Geoffrey Smith",
    location: "Tampa Bay, FL",
    service: "Land Clearing",
    rating: 5,
    text: "Tampa Land Prep exceeded my expectations from start to finish! They were not only on time, but they actually managed to come a day early. The team was polite, professional, and extremely knowledgeable."
  },
  {
    name: "Avery Jordan",
    location: "Tampa, FL",
    service: "Grading & Leveling",
    rating: 5,
    text: "Had an excellent experience hiring Tampa Land Prep for my backyard regrading project. They were professional, communicated well, and did solid work at a good value. Would recommend."
  },
  {
    name: "Edward Rochelle",
    location: "Tampa Bay, FL",
    service: "Land Clearing",
    rating: 5,
    text: "Used Tampa land Prep again. A great company to hire. On time. Did a great job. Great communication."
  },
  {
    name: "Kent Ringger",
    location: "Tampa Bay, FL",
    service: "Land Clearing",
    rating: 5,
    text: "Tampa Land Prep did an amazing job clearing nearly an acre of our land. They stepped in and treated our project like their own, which made all the difference."
  },
  {
    name: "Dave Torregiante",
    location: "Tampa Bay, FL",
    service: "Grading & Leveling",
    rating: 5,
    text: "Hired Tampa Land Prep to fill and re sod a large depression area in our back yard. They were very responsive, on time and did an amazing job! Very hard workers and cleaned up after they were done."
  },
  {
    name: "Jordan Casal",
    location: "Tampa Bay, FL",
    service: "Land Clearing",
    rating: 5,
    text: "I had a great experience working with Stephanie and Austin. They go the extra mile and are punctual and honest. Will definitely use their services again."
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
