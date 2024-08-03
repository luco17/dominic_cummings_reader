import { defineCollection, z } from "astro:content";

const longformCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = {
  longform: longformCollection,
};
