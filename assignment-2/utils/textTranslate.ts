import { englishToUrduMap, englishToUrduPhrases } from "@/lib/UrduWords";

/**
 * Translates an English sentence to Urdu using phrase-based and word-based static mappings.
 * Phrase mappings are applied before individual words for accuracy.
 */
export function translateEnglishToUrdu(text: string): string {
  let translated = text;

  // Apply phrase-level mappings first
  for (const [phrase, urdu] of Object.entries(englishToUrduPhrases)) {
    const regex = new RegExp(phrase, "gi");
    translated = translated.replace(regex, urdu);
  }

  // Then apply word-level mappings
  translated = translated
    .split(" ")
    .map((word) => englishToUrduMap[word.toLowerCase()] || word)
    .join(" ");

  return translated;
}
