import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    techStack: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(0),
  }),
});

export const collections = { blog, projects };
