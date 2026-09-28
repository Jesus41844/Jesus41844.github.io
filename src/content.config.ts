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
    /** Captura real de la app, dentro de /public. Ausente = sin imagen. */
    image: z.string().optional(),
    /** Pie de la captura, en mono. Si no se da, se usa "captura real". */
    imageCaption: z.string().optional(),
    /** `contain` para capturas mas pequenas que la caja: `cover` las
     *  agranda y las deja blandas en pantallas 2x. Por defecto, `cover`. */
    imageFit: z.enum(['cover', 'contain']).optional(),
  }),
});

/**
 * La seccion "Sobre mi". Es una sola pieza de prosa por idioma, pero va como
 * coleccion y no dentro de i18n.ts porque es contenido, no interfaz: asi se
 * escribe y se revisa como una hoja, y no se pierde en un archivo de copy.
 */
const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    id: z.string(),
    locale: z.enum(['es', 'en']),
    /** Parrafo de arranque, en el Tamano del titular. */
    lead: z.string(),
    /** Parrafos del cuerpo. El ultimo puede llevar el enlace de contacto. */
    body: z.array(z.string()),
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

export const collections = { projects, experience, about };
