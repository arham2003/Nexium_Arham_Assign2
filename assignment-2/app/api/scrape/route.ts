import { blogScraper } from "@/lib/scrape";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { url } = await req.json();

  if (!url || typeof url !== "string") {
    return NextResponse.json(
      { success: false, error: "Invalid URL" },
      { status: 400 }
    );
  }

  try {
    const data = await blogScraper(url);
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Scraping failed:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Scraping failed" },
      { status: 500 }
    );
  }
}
