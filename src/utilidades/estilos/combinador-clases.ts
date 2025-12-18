/**
 * Combina clases de CSS condicionales
 */
export function combinarClases(...clases: (string | boolean | undefined)[]): string {
  return clases.filter(Boolean).join(' ');
}
