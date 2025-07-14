"use client";
import toast from "react-hot-toast";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { summarize } from "@/utils/SummarizeLogic";
import Loading from "@/app/summary/Loading";
import { translateEnglishToUrdu } from "@/utils/textTranslate";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { BoxReveal } from "@/components/magicui/box-reveal";

export default function SummarySection() {
  type Articles = {
    heading: string;
    text: string;
  };

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<Articles[]>([]);
  const [summaries, setSummaries] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [showSummaries, setShowSummaries] = useState(false);
  const [translations, setTranslations] = useState<string[]>([]);

  const handleScrape = async () => {
    setError("");
    setLoading(true);
    setSummaries([]);
    setShowSummaries(false);

    try {
      const res = await fetch("/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const json = await res.json();

      if (!json.success) {
        throw new Error(json.error || "Something went wrong");
      }

      toast.success("Scraped Successfully!");
      setArticle(json.data);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateSummary = async () => {
    const generated = article.map((item) => summarize(item.text, 4));
    setSummaries(generated);
    setShowSummaries(true);

    try {
      for (let i = 0; i < article.length; i++) {
        await fetch("/api/saveBlog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            blogText: article[i].text,
            blogUrl: url,
            blogSummary: generated[i],
          }),
        });
      }
      toast.success("Saved to database!");
    } catch (err) {
      console.error("DB save error", err);
      toast.error("Failed to save to DB");
    }
  };

  const handleTranslate = () => {
    const translated = summaries.map((summary) =>
      translateEnglishToUrdu(summary)
    );
    setTranslations(translated);
  };

  return (
    <div className="mx-auto p-4">
      <h2
        className="text-2xl font-bold m-4 text-center"
        aria-label="Summarize your blog by typing url"
      >
        Summarize your Blog
      </h2>
      <br />
      <div className="flex justify-center">
        <BoxReveal boxColor="#5046e6" duration={0.5}>
          <h3 className="text-lg font-semibold m-4 text-center">
            Type URL for the Blog
          </h3>
        </BoxReveal>
      </div>

      <div className="flex mx-auto max-w-xl items-center gap-2">
        <Input
          type="text"
          placeholder="Enter article/blog URL"
          className=" px-3 py-2 border rounded"
          value={url}
          aria-label="Enter Blog URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          onClick={handleScrape}
          disabled={loading || !url.trim()}
          className="bg-indigo-400 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Scraping..." : "Get the Blog"}
        </Button>
      </div>

      {/* Loading spinner */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loading />
        </div>
      ) : (
        <>
          {error && <p className="text-red-600 mt-4">{error}</p>}

          {article.length > 0 && (
            <>
              {article.map((item, index) => (
                <div
                  key={item.heading}
                  className="mb-8 flex flex-col lg:flex-row gap-4 mt-4"
                >
                  {/* Scraped Text Section */}
                  <div className="w-full lg:w-1/2 border rounded p-4 shadow bg-gray-50">
                    <h3 className="text-lg font-bold mb-2">{item.heading}</h3>
                    <p className="text-gray-800 whitespace-pre-line text-sm mb-2 line-clamp-20">
                      {item.text}
                    </p>
                  </div>

                  {/* Summary Section */}
                  {showSummaries && summaries[index] && (
                    <div className=" lg:w-1/2 border-l-4 border-indigo-400 bg-indigo-50 p-4">
                      <h4 className="text-xl font-semibold mb-1">
                        Summary: <br /> {item.heading}
                      </h4>
                      <p className="text-gray-900 whitespace-pre-line text-sm">
                        {summaries[index]}
                      </p>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="default"
                            className="mt-3 bg-indigo-400"
                            onClick={handleTranslate}
                            aria-label="Translate text to urdu"
                          >
                            Show Urdu Translation
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className=" p-4 text-sm text-gray-900 leading-relaxed bg-green-50 border-green-300">
                          <h4 className="font-semibold text-md mb-1 text-green-800">
                            اردو ترجمہ
                          </h4>
                          <p>{translations[index]}</p>
                        </PopoverContent>
                      </Popover>
                    </div>
                  )}
                </div>
              ))}

              <Button
                className="w-1/2 items-center mx-auto mt-2 justify-center"
                aria-label="Start summary generation"
                onClick={handleGenerateSummary}
              >
                Generate Summary
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
}
