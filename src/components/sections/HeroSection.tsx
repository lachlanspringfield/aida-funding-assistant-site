import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import aidaMockup from "@/assets/aida-mockup-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Smarter Notes.{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Better Funding.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AIDA is the AI-powered documentation assistant that helps Residential Aged Care providers 
                improve clinical notes, ensure compliance, and unlock higher AN-ACC funding.
              </p>
            </div>

            {/* Key benefits */}
            <div className="space-y-3">
              {[
                "Real-time AI writing assistance",
                "Compliance monitoring & prompts", 
                "Funding optimization insights"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                See AIDA in Action
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-primary" size="xl">
                Book a Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Trusted by</span>
              <span className="font-semibold text-foreground">50+ aged care facilities</span>
              <span>across Australia</span>
            </div>
          </div>

          {/* Right content - Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative animate-float">
              <img 
                src={aidaMockup} 
                alt="AIDA AI Assistant Interface" 
                className="w-full rounded-2xl shadow-2xl border border-border"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                ↑ 23% AN-ACC funding
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                99.2% compliance rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}