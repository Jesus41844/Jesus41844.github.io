# Portafolio — Jesús de Gracia

Sitio estático con los proyectos y la experiencia. Astro genera HTML y no hay
framework en el cliente: doce líneas de JavaScript plano, y solo para
encender los bloques de un proyecto al pasar por su fila.

## Estructura

```
src/
├── content/            # Contenido en markdown, separado por idioma
│   ├── projects/es/    # Un archivo por proyecto, en español
│   ├── projects/en/
│   └── experience/     # Un archivo por cargo
├── components/         # Hero, WeekGrid, ProjectCard, RoleItem
├── layouts/Base.astro  # Metadatos, OpenGraph, hreflang alternos, el script
├── lib/i18n.ts         # Textos de interfaz por idioma
├── lib/palette.ts      # Un color por proyecto
├── lib/weekgrid.ts     # La semana tipo que se dibuja en el hero
├── pages/
│   ├── index.astro     # Español, en /
│   └── en/index.astro  # Inglés, en /en/
└── styles/global.css
```

El español es el idioma por defecto y vive en la raíz; el inglés va con
prefijo `/en/`. Eso evita gastar tres letras en un idioma que los
reclutadores locales no leerían igual.

## La rejilla del hero

El hero no es un retrato con un eslogan: es una semana de cinco días por seis
bandas horarias, con un bloque de color por cada proyecto. Es la misma pregunta
que responde `Horarios_GREB` — en qué tramo están todos libres — y es la idea
que detrás de los cuatro proyectos: el calendario ideal no coincide con el
real.

La rejilla se edita en `src/lib/weekgrid.ts`. Un `null` es una celda libre; un
color es el proyecto que ocupa esa franja. `picked: true` marca la franja que
el grupo terminó eligiendo.

El color de cada proyecto vive en `src/lib/palette.ts` y se usa dos veces: en
el bloque de la rejilla y en la regla de color de su fila en la sección de
proyectos. Si agregas un proyecto, dale un color ahí y una fila en
`weekgrid.ts`, o la leyenda y la rejilla dejan de cuadrar.

## Cómo se edita el contenido

No hace falta tocar los componentes para cambiar un texto. Todo lo visible sale
de `src/content/`, en markdown con frontmatter:

- **Proyectos**: `id`, `locale`, `order`, `title`, `tagline`, `problem`,
  `highlights[]`, `stack[]`, `repo`, `demo` (opcional) y `footnote` (opcional,
  para los proyectos sin demo).
- **Experiencia**: `id`, `locale`, `order`, `role`, `org`, `period`, `kind`,
  `place`, `body`. El párrafo de debajo del frontmatter es lo que describe qué
  construiste para ese cargo.

Los proyectos de español e inglés se emparejan por el campo `id`. Si agregas
uno, agrégalo en los dos idiomas o la página quedaría desbalanceada.

**Ojo con YAML:** un ítem de lista que contenga dos puntos seguido de espacio se
interpreta como un mapa. Cítalo con comillas.

## La tipografía y el color

Tres IBM Plex: **Sans Condensed** para las titularidades (en mayúsculas, sin
redondeos; el condensado es lo que hace que una tesis larga en español se
sostenga), **Sans** para el cuerpo y **Mono** para todo lo que es una etiqueta
o un dato. El fondo es papel de dibujo frío, no crema. Hay cuatro tintas, una
por proyecto, y casi todo el color saturado vive en la rejilla; el texto
siempre es tinta sobre suelo.

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ tal como quedará
```

## Despliegue

`main` dispara `.github/workflows/deploy.yml`, que construye con Astro y publica
en GitHub Pages. El sitio queda en <https://jesus41844.github.io>.

## Licencia

MIT.
