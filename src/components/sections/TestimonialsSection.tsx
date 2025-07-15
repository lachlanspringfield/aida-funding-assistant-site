import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Clinical Manager",
    facility: "Sunshine Aged Care",
    location: "Melbourne, VIC",
    content: "Vira has transformed our documentation process. Our AN-ACC funding increased by 28% in the first six months, and our staff feel much more confident in their clinical notes.",
    rating: 5,
    avatar: "SM"
  },
  {
    name: "Dr. James Chen",
    role: "Medical Director",
    facility: "Heritage Gardens",
    location: "Sydney, NSW",
    content: "The compliance monitoring is exceptional. We went from occasional audit concerns to achieving a perfect compliance score. Vira catches issues before they become problems.",
    rating: 5,
    avatar: "JC"
  },
  {
    name: "Maria Rodriguez",
    role: "Facility Manager",
    facility: "Coastal Care Centre",
    location: "Brisbane, QLD",
    content: "Our staff love Vira's real-time suggestions. Documentation time has decreased by 35%, allowing more time for direct resident care. It's been a game-changer for us.",
    rating: 5,
    avatar: "MR"
  }
];

const stats = [
  {
    value: "50+",
    label: "Facilities using Vira",
    description: "Across Australia"
  },
  {
    value: "23%",
    label: "Average funding increase",
    description: "Within 6 months"
  },
  {
    value: "99.2%",
    label: "Compliance score",
    description: "Across all clients"
  },
  {
    value: "4.9/5",
    label: "User satisfaction",
    description: "Staff rating"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Trusted by Aged Care Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Vira is helping facilities across Australia improve their documentation and funding outcomes
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 space-y-4">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-primary/20" />
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.facility} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border">
          <h3 className="text-2xl font-bold mb-4">
            Join 50+ facilities already using Vira
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't let poor documentation hold back your funding potential. See how Vira can transform your facility's outcomes.
          </p>
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-hover transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}