import type { ColorName } from './palette';

/**
 * Una semana tipo de trabajo: cinco dias, seis bandas horarias.
 *
 * `null` es una celda libre. Un string es el proyecto que ocupa esa franja.
 * Esta rejilla es la misma idea que resuelve Horarios GREB, y por eso es la
 * imagen del hero: el cruce de veinte horarios reducido a una sola pregunta.
 *
 * `picked` marca la franja que el grupo termino eligiendo. No es la unica
 * libre, es la que alcanzo a concertarse.
 */
export interface WeekRow {
  hour: string;
  cells: (ColorName | null)[];
  picked?: boolean;
}

export const weekDays = {
  es: ['L', 'M', 'X', 'J', 'V'],
  en: ['M', 'T', 'W', 'T', 'F'],
} as const;

export const weekHours = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'];

export const week: WeekRow[] = [
  { hour: '08:00', cells: ['azur', null, 'amber', null, 'crimson'] },
  { hour: '10:00', cells: [null, 'amber', null, 'azur', null] },
  { hour: '12:00', cells: ['crimson', null, null, 'moss', 'amber'] },
  { hour: '14:00', cells: [null, null, null, null, null], picked: true },
  { hour: '16:00', cells: ['amber', null, 'crimson', null, 'azur'] },
  { hour: '18:00', cells: [null, 'moss', null, 'crimson', null] },
];

/** Los proyectos en el orden en que aparecen, para la leyenda. */
export const weekLegend: ColorName[] = ['azur', 'amber', 'crimson', 'moss'];
