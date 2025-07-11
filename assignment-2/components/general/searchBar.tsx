"use client";
import toast from "react-hot-toast";
import { useState, FocusEvent } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBar({
  setIsUrlFocused,
}: {
  setIsUrlFocused: (value: boolean) => void;
}) {
  type Articles = {
    heading: string;
    text: string;
  };
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<Articles[] | null>(null);
  const [error, setError] = useState("");

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsUrlFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsUrlFocused(false);
  };

  const handleScrape = async () => {
    setError("");
    setArticle(null);
    setLoading(true);

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
      setArticle(json.data[0]);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-2">Scrape from a URL</h2>

      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Enter article/blog URL"
          className="w-full px-3 py-2 border rounded"
          value={url}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-label="Enter Blog URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          onClick={handleScrape}
          disabled={loading || !url.trim()}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? "Scraping..." : "Go"}
        </Button>
      </div>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {article && (
        <div className="mt-6 border rounded p-4 shadow">
          <h3 className="text-lg font-bold mb-2">{article.heading}</h3>
          <p className="text-gray-800 whitespace-pre-line text-sm line-clamp-10">
            {article.text}
          </p>
        </div>
      )}
    </div>
  );
}
