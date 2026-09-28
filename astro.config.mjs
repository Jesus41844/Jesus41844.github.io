// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jesus41844.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // El español vive en la raíz (`/`) y el inglés con prefijo (`/en/`).
      // Así la URL principal no gasta tres letras en un idioma que no todos
      // los reclutadores de Panamá leerían igual.
      prefixDefaultLocale: false,
    },
  },
});
