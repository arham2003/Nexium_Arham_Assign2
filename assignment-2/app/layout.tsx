import { Poppins } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import { Meteors } from "@/components/magicui/meteors";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Blog Focus | Pure Logic Summaries",
  description:
    "Summarize blog articles with precision using pure JavaScript logic. No AI giants, no black boxes—just fast, transparent summaries that work in your browser.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <div className="relative min-h-screen w-full overflow-hidden">
          <Meteors number={40} />

          <HeroHeader />
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
