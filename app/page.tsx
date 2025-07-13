import DemoSection from "@/home/demo-section";
import { Button } from "@/components/ui/button";
import HeroSection from "@/home/hero-section";
import HowItWorksSection from "@/home/how-it-works-section";
import PricingSection from "@/home/pricing-section";
import CTASection from "@/home/cta-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <HeroSection />
      <DemoSection />
      <HowItWorksSection />
      <PricingSection />
     <CTASection />
    </div>
  );
}
