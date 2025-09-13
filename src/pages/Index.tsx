import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { QuerySection } from "@/components/QuerySection";
import { AdvisorySection } from "@/components/AdvisorySection";
import { MarketSection } from "@/components/MarketSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <QuerySection />
        <AdvisorySection />
        <MarketSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
