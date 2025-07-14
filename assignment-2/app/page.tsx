import Features from "@/components/features-4";
import HeroSection from "@/components/hero-section";
import WallOfLoveSection from "@/components/testimonials";
import { currentUser } from "@clerk/nextjs/server";
import toast from "react-hot-toast";
export const metadata = [
  {
    title: "Home | Summarize Blogs Instantly",
    description:
      "Paste any blog URL and get a smart, logic-based summary in seconds. Built with Puppeteer, not AI giants.",
  },
];

export default async function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <Features />
      <WallOfLoveSection />
    </div>
  );
}
