import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    readTime: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  'blog-posts': blogCollection,
};
