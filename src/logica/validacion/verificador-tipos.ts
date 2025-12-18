/**
 * Verifica si una cadena contiene al menos un carácter del conjunto dado
 */
export function contieneTipoCaracter(cadena: string, conjuntoCaracteres: string): boolean {
  return cadena.split('').some(caracter => conjuntoCaracteres.includes(caracter));
}

/**
 * Verifica si hay caracteres repetidos consecutivamente
 */
export function tieneCaracteresRepetidos(cadena: string): boolean {
  return /(.)\1{2,}/.test(cadena);
}

/**
 * Verifica si contiene patrones comunes predecibles
 */
export function tienePatronesComunes(cadena: string): boolean {
  const patronesComunes = /(?:012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i;
  return patronesComunes.test(cadena);
}
