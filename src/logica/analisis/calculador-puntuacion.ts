import { tieneCaracteresRepetidos, tienePatronesComunes } from '../validacion/verificador-tipos';

/**
 * Calcula la puntuación de una contraseña basada en su longitud
 */
export function calcularPuntuacionLongitud(contrasena: string): number {
  return Math.min(40, contrasena.length * 2);
}

/**
 * Calcula la puntuación por variedad de caracteres
 */
export function calcularPuntuacionVariedad(contrasena: string): number {
  const tieneMinusculas = /[a-z]/.test(contrasena);
  const tieneMayusculas = /[A-Z]/.test(contrasena);
  const tieneNumeros = /[0-9]/.test(contrasena);
  const tieneSimbolos = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(contrasena);

  const cantidadTipos = [
    tieneMinusculas, 
    tieneMayusculas, 
    tieneNumeros, 
    tieneSimbolos
  ].filter(Boolean).length;

  return cantidadTipos * 15;
}

/**
 * Calcula las penalizaciones por patrones débiles
 */
export function calcularPenalizaciones(contrasena: string): number {
  let penalizacion = 0;

  if (tieneCaracteresRepetidos(contrasena)) {
    penalizacion += 10;
  }

  if (tienePatronesComunes(contrasena)) {
    penalizacion += 15;
  }

  return penalizacion;
}

/**
 * Normaliza una puntuación al rango 0-100
 */
export function normalizarPuntuacion(puntuacion: number): number {
  return Math.max(0, Math.min(100, puntuacion));
}
