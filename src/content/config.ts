import { defineCollection, z } from "astro:content";

const brands = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    brandLogo: z.string(),
    templateKey: z.string().optional(),
    categories: z.array(z.string()).default([]),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { brands };
