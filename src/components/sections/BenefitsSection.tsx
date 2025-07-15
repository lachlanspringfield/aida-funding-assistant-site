import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Clock, Target, Users, FileCheck } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased AN-ACC Funding",
    description: "Average 23% increase in funding accuracy through improved clinical documentation quality",
    stat: "↑ 23%",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Reduced Compliance Risk", 
    description: "AI-powered compliance monitoring ensures your documentation meets all regulatory requirements",
    stat: "99.2%",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Staff Time Saved",
    description: "Reduce documentation time by up to 40% with intelligent auto-suggestions and templates",
    stat: "40%",
    color: "text-warning"
  },
  {
    icon: Target,
    title: "Improved Care Quality",
    description: "Better documentation leads to more personalized care plans and improved resident outcomes",
    stat: "95%",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Staff Confidence",
    description: "Empower your team with real-time guidance and confidence in their documentation",
    stat: "4.8/5",
    color: "text-primary"
  },
  {
    icon: FileCheck,
    title: "Audit Readiness",
    description: "Always be audit-ready with comprehensive documentation tracking and quality assurance",
    stat: "100%",
    color: "text-warning"
  }
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Measurable Results for Your Facility
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AIDA delivers concrete improvements to your bottom line, compliance scores, and staff satisfaction
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg bg-muted ${benefit.color}`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div className={`text-2xl font-bold ${benefit.color}`}>
                    {benefit.stat}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ROI callout */}
        <div className="mt-16 p-8 bg-gradient-secondary rounded-2xl border border-border">
          <div className="text-center space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Typical ROI: <span className="text-accent">3-6 months</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most facilities see a complete return on investment within 6 months through improved funding and operational efficiency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}