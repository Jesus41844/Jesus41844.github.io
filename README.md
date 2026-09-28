# Portafolio — Jesús de Gracia

Sitio estático con los proyectos y la experiencia. Sin JavaScript en el
cliente: solo Astro genera HTML.

## Estructura

```
src/
├── content/            # Contenido en markdown, separado por idioma
│   ├── projects/es/    # Un archivo por proyecto, en español
│   ├── projects/en/
│   └── experience/     # Un archivo por cargo
├── components/         # Hero, ProjectCard, RoleItem
├── layouts/Base.astro  # Metadatos, OpenGraph, hreflang alternos
├── lib/i18n.ts         # Textos de interfaz por idioma
├── pages/
│   ├── index.astro     # Español, en /
│   └── en/index.astro  # Inglés, en /en/
└── styles/global.css
```

El español es el idioma por defecto y vive en la raíz; el inglés va con
prefijo `/en/`. Eso evita gastar tres letras en un idioma que los
reclutadores locales no leerían igual.

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
