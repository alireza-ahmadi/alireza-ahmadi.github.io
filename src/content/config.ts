import { defineCollection, reference, z } from 'astro:content';

const noteCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    isDraft: z.boolean(),
    shortDesc: z.string().optional(),
  }),
});

export const collections = {
  note: noteCollection,
};
