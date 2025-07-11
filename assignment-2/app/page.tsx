import Features from "@/components/features-4";
import HeroSection from "@/components/hero-section";
import WallOfLoveSection from "@/components/testimonials";
import toast, { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <WallOfLoveSection />
      <Toaster />
    </div>
  );
}
