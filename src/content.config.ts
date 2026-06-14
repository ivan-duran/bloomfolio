import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localizedFields = {
  lang: z.enum(["es", "en"]),
  routeSlug: z.string(),
};

// Work experience collection
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    ...localizedFields,
    title: z.string(),
    subtitle: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    logo: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

// Education collection
const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    ...localizedFields,
    title: z.string(),
    subtitle: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    logo: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

// Projects collection
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) => z.object({
    ...localizedFields,
    title: z.string(),
    description: z.string(),
    image: image(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    skills: z.array(z.string()),
    demoLink: z.string().url().optional(),
    sourceLink: z.string().url().optional(),
  }),
});

// Hackathons collection
const hackathons = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hackathons" }),
  schema: z.object({
    ...localizedFields,
    title: z.string(),
    location: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    logo: z.string().optional(),
    sourceLink: z.string().url().optional(),
  }),
});



// About collection
const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    ...localizedFields,
    title: z.string(),
    photo: z.string().optional(),
  }),
});

export const collections = {
  work,
  education,
  projects,
  hackathons,
  about,
};
