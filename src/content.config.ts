import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    fullDescription: z.string().optional(),
    date: z.string(),
    role: z.string(),
    status: z.enum(['concept', 'in-development', 'beta', 'live', 'archived']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    technologies: z.array(z.string()),
    category: z.string().default('Software Engineering'),
    githubUrl: z.string().url().optional().or(z.literal('')),
    liveUrl: z.string().url().optional().or(z.literal('')),
    productUrl: z.string().url().optional().or(z.literal('')),
    demoUrl: z.string().url().optional().or(z.literal('')),
    youtubeId: z.string().optional(),
    thumbnail: z.string().optional(),
    heroImage: z.string().optional(),
    gallery: z
      .array(
        z.object({
          url: z.string(),
          width: z.number().optional(),
          height: z.number().optional(),
          caption: z.string().optional(),
          alt: z.string().optional(),
          title: z.string().optional(),
        })
      )
      .optional(),
    pastelTheme: z
      .enum(['green', 'blue', 'indigo', 'purple', 'amber', 'slate'])
      .default('slate'),
    problemSummary: z.string().optional(),
    solutionSummary: z.string().optional(),
    architectureHighlights: z.array(z.string()).optional(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updatedDate: z.string().optional(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default('4 min read'),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(), description: z.string(),
    date: z.string().optional(), sourceUrl: z.string().url().optional(),
    topic: z.string(), readingTime: z.string(),
    preview: z.boolean().default(true), order: z.number().default(99),
    image: z.string().optional(),
  }),
});

export const collections = {
  notes,
  projects,
  writing,
};
