import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const longformCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/longform" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    originalURL: z.string(),
  }),
});

export const collections = {
  longform: longformCollection,
};
