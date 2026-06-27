import substackArticles from "./substack_articles.json";
import wpArticles from "./wp_articles2.json";

export type Article = {
  title: string;
  url: string;
  date: string;
  source: "OG blog" | "Substack";
  description?: string;
  audience?: string;
};

export type Series = {
  title: string;
  slug: string;
  entries: Article[];
};

const substack = substackArticles.map((article) => ({
  title: article.title,
  url: article.canonical_url,
  date: article.date,
  source: "Substack" as const,
  description: article.description,
  audience: article.audience,
}));

const wp = wpArticles.map((article) => ({
  title: article.title,
  url: article.url,
  date: article.date,
  source: "OG blog" as const,
}));

const byDate = (a: Article, b: Article) =>
  Date.parse(a.date) - Date.parse(b.date);

const matching = (articles: Article[], pattern: RegExp) =>
  articles.filter((article) => pattern.test(article.title)).sort(byDate);

export const displayDate = (date: string) =>
  date.includes("T") ? date.substring(0, 10) : date;

export const series: Series[] = [
  {
    title: "People, ideas, machines",
    slug: "people-ideas-machines",
    entries: matching(substack, /people,?\s*ideas,?\s*machines/i),
  },
  {
    title: "Unrecognised simplicities",
    slug: "unrecognised-simplicities",
    entries: [
      ...matching(
        wp,
        /unrecognised\s+simplicities|effective action/i,
      ),
      ...matching(substack, /unrecognised\s+simplicities/i),
    ].sort(byDate),
  },
  {
    title: "Complexity and prediction",
    slug: "complexity-and-prediction",
    entries: [
      ...matching(wp, /complexity.*prediction|fog and moonlight/i),
      ...matching(substack, /complexity.*prediction|fog and moonlight/i),
    ].sort(byDate),
  },
  {
    title: "On the referendum",
    slug: "on-the-referendum",
    entries: matching(wp, /on (the )?referendum\s*#?\d+/i),
  },
  {
    title: "Regime Change",
    slug: "regime-change",
    entries: matching(
      substack,
      /(^|\s)(regime change\s*#?\d+|#\d+\s+regime change|regime change 2026-29)/i,
    ),
  },
];
