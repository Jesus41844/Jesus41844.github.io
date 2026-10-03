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

/** Una foto o varias. El caption va con la foto, no con la entrada: una
 *  entrada con tres fotos tiene tres pies distintos. */
const imagenes = z
  .array(
    z.object({
      src: z.string(),
      caption: z.string().optional(),
      /** `contain` cuando recortar dejaria fuera lo que la foto prueba. */
      fit: z.enum(['cover', 'contain']).optional(),
    }),
  )
  .optional();

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
    /** Que banda de la pagina va este cargo. Los cargos no son todos lo
     *  mismo: tres son de agrupación o congreso y uno es un empleo. */
    track: z.enum(['organizaciones', 'laboral']),
    images: imagenes,
  }),
});

/**
 * Misma forma que `experience`, a proposito: asi las participaciones se
 * renderizan con `RoleItem.astro` sin tocar el componente. Lo que cambia es el
 * destino —un cargo se sostiene en el tiempo, una participacion es un evento
 * con fecha— y por eso va en su propia coleccion y no como un `track` mas.
 */
const participaciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/participaciones' }),
  schema: z.object({
    id: z.string(),
    locale: z.enum(['es', 'en']),
    order: z.number(),
    /** Como te presentaste: Participante, Organizador, Tallerista, Panelista. */
    role: z.string(),
    /** Nombre del evento. Aqui `org` es el evento, no una organización. */
    org: z.string(),
    /** Fecha, no rango: un evento pasa. */
    period: z.string(),
    kind: z.string().optional(),
    place: z.string().optional(),
    body: z.string(),
    /** Pie unico de la galeria, para cuando todas las fotos comparten uno. */
    caption: z.string().optional(),
    images: imagenes,
  }),
});

/**
 * Un certificado es un dato, no un cargo: por eso tiene su propia forma, con
 * `hours` y sin `body`. Se renderiza como lista compacta, no como tarjeta.
 */
const certificaciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certificaciones' }),
  schema: z.object({
    id: z.string(),
    locale: z.enum(['es', 'en']),
    order: z.number(),
    name: z.string(),
    issuer: z.string(),
    date: z.string(),
    hours: z.string().optional(),
    kind: z.string().optional(),
    credential: z.string().optional(),
  }),
});

export const collections = { projects, experience, about, participaciones, certificaciones };
