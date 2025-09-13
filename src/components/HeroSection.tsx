import { Button } from "@/components/ui/button";
import { Search, Brain, ShoppingCart, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-farmland.jpg";

export const HeroSection = () => {
  const actionButtons = [
    {
      icon: Search,
      label: "Ask a Query",
      description: "Get instant AI-powered answers",
      variant: "hero" as const,
      href: "#query"
    },
    {
      icon: Brain,
      label: "Get Advisory",
      description: "Personalized farming guidance",
      variant: "glow" as const,
      href: "#advisory"
    },
    {
      icon: ShoppingCart,
      label: "Sell Produce",
      description: "Direct market access",
      variant: "earth" as const,
      href: "#marketplace"
    },
    {
      icon: TrendingUp,
      label: "Market Prices",
      description: "Live price updates",
      variant: "outline" as const,
      href: "#prices"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Smart Farming for{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Tomorrow
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
            Empowering farmers with AI-driven advisory, direct market access, and sustainable growth solutions.
          </p>

          {/* CTA Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {actionButtons.map((button) => {
              const IconComponent = button.icon;
              return (
                <a key={button.href} href={button.href}>
                  <Button
                    variant={button.variant}
                    size="lg"
                    className="w-full h-auto p-6 flex-col gap-3 min-h-[120px]"
                  >
                    <IconComponent className="h-8 w-8" />
                    <div className="text-center">
                      <div className="font-semibold text-base">{button.label}</div>
                      <div className="text-sm opacity-90 font-normal">{button.description}</div>
                    </div>
                  </Button>
                </a>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Farmers Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">5M+</div>
              <div className="text-muted-foreground">Queries Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">₹50Cr+</div>
              <div className="text-muted-foreground">Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};