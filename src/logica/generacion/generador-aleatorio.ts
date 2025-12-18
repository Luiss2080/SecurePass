/**
 * Obtiene un carácter aleatorio de un conjunto dado
 * Usa Crypto API para mejor aleatoriedad
 */
export function obtenerCaracterAleatorio(conjuntoCaracteres: string): string {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return conjuntoCaracteres[array[0] % conjuntoCaracteres.length];
}

/**
 * Obtiene una posición aleatoria no repetida
 */
export function obtenerPosicionAleatoria(longitud: number, excluir: Set<number>): number {
  let posicion: number;
  do {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    posicion = array[0] % longitud;
  } while (excluir.has(posicion));
  return posicion;
}

/**
 * Genera un array de números aleatorios
 */
export function generarNumerosAleatorios(cantidad: number): Uint32Array {
  const array = new Uint32Array(cantidad);
  crypto.getRandomValues(array);
  return array;
}
