import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      image: image(),
      image_alt: z.string().optional(),
      original_url: z.string().url(),
      original_author: z.string(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
