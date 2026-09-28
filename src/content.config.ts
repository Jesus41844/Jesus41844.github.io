import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    id: z.string(),
    locale: z.enum(['es', 'en']),
    order: z.number(),
    title: z.string(),
    tagline: z.string(),
    problem: z.string(),
    highlights: z.array(z.string()),
    stack: z.array(z.string()),
    repo: z.string(),
    demo: z.string().optional(),
    /** Que se puede hacer con este proyecto. Va en la columna izquierda,
        *  que es lo primero que se escanea en vertical. */
    status: z.string(),
    /** Nota al pie para proyectos sin demo (app de escritorio, etc). */
    footnote: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    id: z.string(),
    locale: z.enum(['es', 'en']),
    order: z.number(),
    role: z.string(),
    org: z.string(),
    period: z.string(),
    kind: z.string().optional(),
    place: z.string().optional(),
    body: z.string(),
    /** Slug del proyecto de la colección `projects` que menciona este cargo. */
    projectId: z.string().optional(),
  }),
});

export const collections = { projects, experience };
