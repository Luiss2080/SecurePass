/**
 * Valida que un valor esté dentro de un rango
 */
export function validarRango(valor: number, minimo: number, maximo: number): boolean {
  return valor >= minimo && valor <= maximo;
}

/**
 * Limita un valor a un rango específico
 */
export function limitarRango(valor: number, minimo: number, maximo: number): number {
  return Math.max(minimo, Math.min(maximo, valor));
}
