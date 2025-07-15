import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Brain, TrendingUp } from "lucide-react";
import howItWorksImage from "@/assets/how-it-works.jpg";

const steps = [
  {
    icon: FileText,
    title: "1. Connect",
    description: "AIDA integrates seamlessly with your existing documentation platforms like Leecare and iCare.",
    color: "text-primary"
  },
  {
    icon: Brain,
    title: "2. Analyze",
    description: "Our AI continuously reviews your notes, providing real-time suggestions for clinical accuracy and compliance.",
    color: "text-accent"
  },
  {
    icon: TrendingUp,
    title: "3. Improve",
    description: "Watch your AN-ACC funding increase as documentation quality and compliance scores improve automatically.",
    color: "text-warning"
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">
            How AIDA Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your aged care documentation and funding outcomes
          </p>
        </div>

        {/* Visual representation */}
        <div className="mb-16 flex justify-center">
          <img 
            src={howItWorksImage} 
            alt="AIDA workflow visualization" 
            className="max-w-lg w-full"
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center ${step.color}`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see AIDA in action at your facility?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}