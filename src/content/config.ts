import { defineCollection, z } from "astro:content";

const longformCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    originalURL: z.string(),
  }),
});

export const collections = {
  longform: longformCollection,
};
