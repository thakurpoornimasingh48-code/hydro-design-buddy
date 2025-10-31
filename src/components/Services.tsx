import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Settings, Zap } from "lucide-react";
import dripImage from "@/assets/service-drip.jpg";
import pivotImage from "@/assets/service-pivot.jpg";
import smartImage from "@/assets/service-smart.jpg";

const services = [
  {
    icon: Droplets,
    title: "Drip Irrigation Systems",
    description: "Precision water delivery directly to plant roots, reducing water waste by up to 60% while maximizing crop health and yield.",
    image: dripImage,
  },
  {
    icon: Settings,
    title: "Pivot & Sprinkler Systems",
    description: "Large-scale automated irrigation solutions for extensive farmlands, engineered for optimal coverage and efficiency.",
    image: pivotImage,
  },
  {
    icon: Zap,
    title: "Smart Irrigation Control",
    description: "IoT-enabled systems with real-time monitoring, weather integration, and automated scheduling for maximum water conservation.",
    image: smartImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Engineering Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive irrigation solutions tailored to your agricultural needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group overflow-hidden border-border hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
