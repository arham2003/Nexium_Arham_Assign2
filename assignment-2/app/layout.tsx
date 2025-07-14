import { Poppins } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import ParticlesWrapper from "@/components/general/ParticleWrapper";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Home | Summarize Blogs Instantly",
  description:
    "Paste any blog URL and get a smart, logic-based summary in seconds. Built with Puppeteer, not AI giants.",
  keywords: [
    "blog summarizer",
    "static summarization",
    "text extractor",
    "javascript summarizer",
    "puppeteer blog summary",
    "no AI blog summary",
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${font.className} min-h-screen flex flex-col relative`}
        >
          <HeroHeader />

          {/* 🎇 Full-page flicker */}
          <div className="fixed inset-0 -z-10 overflow-hidden w-full items-center justify-center rounded-lg border bg-background opacity-50">
            <GridPattern
              squares={[
                [4, 4],
                [5, 1],
                [8, 2],
                [5, 3],
                [5, 5],
                [10, 10],
                [12, 15],
                [15, 10],
                [10, 15],
              ]}
              className={cn("inset-x-0 inset-y-[-30%] h-[200%] skew-y-12")}
            />
          </div>
          <ParticlesWrapper />
          <main className="flex-1 relative">{children}</main>
          <FooterSection />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
