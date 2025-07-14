const stopwords = [
  "i",
  "me",
  "my",
  "myself",
  "we",
  "our",
  "ours",
  "ourselves",
  "you",
  "your",
  "yours",
  "yourself",
  "yourselves",
  "he",
  "him",
  "his",
  "himself",
  "she",
  "her",
  "hers",
  "herself",
  "it",
  "its",
  "itself",
  "they",
  "them",
  "their",
  "theirs",
  "themselves",
  "what",
  "which",
  "who",
  "whom",
  "this",
  "that",
  "these",
  "those",
  "am",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "having",
  "do",
  "does",
  "did",
  "doing",
  "a",
  "an",
  "the",
  "and",
  "but",
  "if",
  "or",
  "because",
  "as",
  "until",
  "while",
  "of",
  "at",
  "by",
  "for",
  "with",
  "about",
  "against",
  "between",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "to",
  "from",
  "up",
  "down",
  "in",
  "out",
  "on",
  "off",
  "over",
  "under",
  "again",
  "further",
  "then",
  "once",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "any",
  "both",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "no",
  "nor",
  "not",
  "only",
  "own",
  "same",
  "so",
  "than",
  "too",
  "very",
  "s",
  "t",
  "can",
  "will",
  "just",
  "don",
  "should",
  "now",
];

function remove_stopwords({ str }: { str: string }) {
  const words = str.split(/\s+/);
  const res = words
    .map((word) => word.replace(/[.,!?]/g, ""))
    .filter((word) => !stopwords.includes(word.toLowerCase()));
  return res.join(" ");
}

function splitIntoSentences(text: string): string[] {
  return text.match(/[^.!?]+[.!?]+/g) || [];
}

function buildVocabulary(sentences: string[]): string[] {
  const vocab = new Set<string>();
  sentences.forEach((sentence) => {
    const words = remove_stopwords({ str: sentence.toLowerCase() }).split(
      /\s+/
    );
    words.forEach((word) => {
      if (word) vocab.add(word);
    });
  });
  return Array.from(vocab);
}

function vectorize(sentence: string, vocab: string[]): number[] {
  const words = remove_stopwords({ str: sentence.toLowerCase() }).split(/\s+/);
  return vocab.map((term) => words.filter((w) => w === term).length);
}

function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const dotProduct = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
  if (magnitudeA === 0 || magnitudeB === 0) return 0;
  return dotProduct / (magnitudeA * magnitudeB);
}

export function summarize(text: string, numSentences = 3): string {
  const sentences = splitIntoSentences(text);
  if (sentences.length <= numSentences) return text;

  const vocab = buildVocabulary(sentences);
  const docVector = vectorize(
    remove_stopwords({ str: text.toLowerCase() }),
    vocab
  );

  const scored = sentences.map((sentence) => {
    const sentenceVec = vectorize(sentence, vocab);
    const score = cosineSimilarity(sentenceVec, docVector);
    return { sentence, score };
  });

  const topSentences = scored
    .sort((a, b) => b.score - a.score)
    .slice(0, numSentences)
    .map((s) => s.sentence.trim());

  return topSentences.join(" ");
}
