/**
 * Un color por proyecto. Es el codigo que la pagina entera usa para decir
 * lo mismo dos veces: el bloque en la rejilla del hero y la regla de color
 * de la fila del proyecto.
 *
 * Los nombres son los de alta tinta magnetica: cuatro tintas que sobreviven
 * a una impresora y a un monitor.
 */
export const projectColor: Record<string, string> = {
  'daytuba-org': 'azur',
  'horarios-greb': 'amber',
  'daytuba-gastos': 'crimson',
  mermelab: 'moss',
} as const;

export type ColorName = 'azur' | 'amber' | 'crimson' | 'moss';

/** Etiqueta corta para la leyenda de la rejilla. */
export const colorLabel: Record<ColorName, string> = {
  azur: 'ORG',
  amber: 'GREB',
  crimson: 'Gastos',
  moss: 'Mermela',
};
