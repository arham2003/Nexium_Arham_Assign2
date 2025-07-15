import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

const CHROMIUM_PACK_URL =
  "https://github.com/Sparticuz/chromium/releases/download/v126.0.0/chromium-v126.0.0-pack.tar";

export async function blogScraper(url: string) {
  // Load the chromium pack tar via URL for Vercel
  const chromiumPackUrl = CHROMIUM_PACK_URL; // e.g. GH release
  const executablePath = await chromium.executablePath(chromiumPackUrl);

  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  // Set viewport manually
  await page.setViewport({
    width: chromium.defaultViewport?.width || 1280,
    height: chromium.defaultViewport?.height || 800,
  });

  await page.goto(url, {
    waitUntil: "domcontentloaded",
    timeout: 60_000,
    // You can add: ignoreHTTPSErrors: true  HERE if needed
  });

  const data = await page.evaluate(() => {
    const nodes = document.querySelectorAll("article, section, div");
    const arr = Array.from(nodes).reduce<{ heading: string; text: string }[]>(
      (acc, el) => {
        const h = el.querySelector("h2, h3");
        const ps = el.querySelectorAll("p");
        if (h && ps.length) {
          acc.push({
            heading: h.innerText.trim(),
            text: Array.from(ps)
              .map((p) => p.innerText.trim())
              .join("\n\n"),
          });
        }
        return acc;
      },
      []
    );
    return arr.slice(0, 1);
  });

  await browser.close();
  return data;
}
