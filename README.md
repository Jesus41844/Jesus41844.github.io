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
│   ├── experience/     # Un cargo; `track` decide en que banda va
│   ├── about/          # La seccion "Sobre mi", una hoja por idioma
│   ├── participaciones/# Un evento con fecha, misma forma que experience
│   └── certificaciones/# Una constancia: entidad, fecha y horas
├── components/         # Hero, WeekGrid, ProjectCard, RoleItem, About
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

## Las capturas de los proyectos

Cada proyecto puede traer una captura real en `image:`. Va dentro de
`public/projects/`, se muestra en un marco de linea fina con el pie en mono, y
el ancho lo fija el CSS a 16:10.

**Las cuatro capturas comparten el mismo marco: 792x495, todas con `cover` y
`object-position: left top`.** La uniformidad se pidió a propósito, y tiene un
precio medido:

| Captura | Fuente | Ratio | Escala | Se recorta | Resultado |
|---|---|---|---|---|---|
| `daytuba-org.png` | 1327x651 | 2.04 | 0.76x | 22% derecha | nitida |
| `horarios.png` | 1333x343 | 3.89 | **1.44x** | 59% derecha | **se agranda** |
| `daytuba-gastos.png` | 537x589 | 0.91 | **1.47x** | 43% abajo | **se agranda** |
| `appmermelab.jpg` | 1499x824 | 1.82 | 0.60x | 12% derecha | nitida |

Dos de las cuatro se agrandan porque su fuente no entra de origen en un marco
16:10. Antes cada una llevaba su ajuste y Horarios su propio ratio, y quedaban
cuatro cajas de alturas distintas, que es lo que más se notaba al mirar la
página. **El marco uniforme vale más que la nitidez de dos de ellas**, pero si
alguna se ve blanda el arreglo no es volver a `contain` (eso devuelve las cajas
desiguales): es recapturar a mayor resolución, y en el caso de `DaytubaGastos`
con una ventana más ancha que alta, que es el formato que tiene la app.

## Organizaciones, trabajo, participaciones y certificaciones

Cuatro bandas que parecen cuatro y son dos cosas distintas. Los cargos van
divididos por `track`, porque tres son agrupación o congreso y uno es un empleo
con nómina: ponerlos juntos hacía que "Presidente · Jornada completa" se leyera
como un trabajo.

`participaciones` tiene **la misma forma que `experience`** a propósito, para
reusar `RoleItem.astro`. Lo que cambia es el destino: un cargo se sostiene en el
tiempo, una participación es un evento con fecha.

`certificaciones` tiene forma propia, con `hours` y sin `body`, porque un
certificado es un dato y no una historia. Se renderiza como fila densa tipo spec,
no como tarjeta: una tarjeta con párrafo para "20 horas" le pondría un cuerpo a
algo que solo tiene datos.

**Los conteos de los labels se calculan desde el array.** Estaban escritos a
mano en `i18n.ts` (`'Proyectos · 04'`) y con siete bandas, añadir una
participación y olvidar el número no daba error: solo mentía.

Las fotos de evento van acotadas a `32rem` y en 16:9, no a ancho de columna como
las de los proyectos. Las de proyecto son el trabajo; las de evento son
evidencia, y a ancho completo ocho participaciones son una columna interminable
de scroll.

Certificaciones **no entra al nav** por decisión de Jesús: el nav queda en seis
entradas, que es lo que cabía sin partirse en móvil.

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
