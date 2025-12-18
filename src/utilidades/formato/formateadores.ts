/**
 * Formatea una puntuación como porcentaje
 */
export function formatearPorcentaje(valor: number): string {
  return `${Math.round(valor)}%`;
}

/**
 * Formatea un número con separadores de miles
 */
export function formatearNumero(valor: number): string {
  return new Intl.NumberFormat('es-ES').format(valor);
}
