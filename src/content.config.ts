import { defineCollection } from 'astro:content';
import { z } from "astro/zod"
import { glob } from 'astro/loaders';

const noteCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/note" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    isDraft: z.boolean(),
    shortDesc: z.string().optional(),
  }),
});

export const collections = {
  note: noteCollection,
};
