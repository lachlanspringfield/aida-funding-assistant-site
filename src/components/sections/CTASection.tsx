import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Play } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/20" />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white/15" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Transform Your
            <br />
            Documentation Process?
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Join the growing number of aged care facilities using Vira to improve their clinical documentation, 
            compliance, and AN-ACC funding outcomes.
          </p>

          {/* Key benefits recap */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            {[
              "23% average funding increase",
              "40% time savings on documentation", 
              "99.2% compliance rate achieved"
            ].map((benefit, index) => (
              <div key={index} className="text-white text-center">
                <div className="text-2xl font-bold mb-2">✓</div>
                <div className="text-lg">{benefit}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="xl" 
              className="group bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="xl" 
              className="text-white border-2 border-white/30 hover:bg-white/10 font-semibold"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo Video
            </Button>
          </div>

          {/* Additional info */}
          <div className="text-white/80 text-sm space-y-2">
            <p>Free 30-day trial • No setup fees • Cancel anytime</p>
            <p>Implementation support included • HIPAA compliant</p>
          </div>
        </div>
      </div>
    </section>
  );
}