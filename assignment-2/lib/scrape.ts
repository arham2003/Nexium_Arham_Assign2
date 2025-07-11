import puppeteer from "puppeteer";

export async function blogScraper(url: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });

  const data = await page.evaluate(() => {
    const articles =
      document.querySelectorAll("article") ||
      document.querySelectorAll("div") ||
      document.querySelectorAll("section");
    const results: { heading: string; text: string }[] = [];

    articles.forEach((article) => {
      const headingEl =
        article.querySelector("h2") || article.querySelector("h3");

      const paragraphEls = article.querySelectorAll("p");
      const fallbackParagraphEls = article.querySelectorAll("div p");

      const allParagraphs =
        paragraphEls.length > 0 ? paragraphEls : fallbackParagraphEls;

      const combinedText = Array.from(allParagraphs)
        .map((paragraph) => paragraph.innerText.trim())
        .join("\n\n");
      if (headingEl && combinedText) {
        results.push({
          heading: headingEl.innerText.trim(),
          text: combinedText,
        });
      }
    });

    return results.slice(0, 1);
  });

  await browser.close();
  return data;
}
