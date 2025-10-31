import { CheckCircle2, TrendingUp, Leaf, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "40-60% Water Savings",
    description: "Reduce water consumption while maintaining optimal crop health",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Environmentally responsible solutions for long-term agricultural success",
  },
  {
    icon: Clock,
    title: "Automated Efficiency",
    description: "Save time and labor costs with intelligent automation systems",
  },
  {
    icon: CheckCircle2,
    title: "Proven Results",
    description: "Decades of engineering expertise delivering measurable outcomes",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Our Engineering Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine decades of irrigation engineering expertise with cutting-edge technology to deliver sustainable, efficient water management systems that transform agricultural operations.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-primary-foreground/90">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 text-secondary-foreground">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-secondary-foreground/90">Years Experience</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-8 text-accent-foreground">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-accent-foreground/90">Client Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary rounded-2xl p-8 text-foreground">
                  <div className="text-4xl font-bold mb-2">100M+</div>
                  <div className="text-muted-foreground">Gallons Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
