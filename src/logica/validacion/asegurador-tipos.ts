import { OpcionesContrasena } from '../../tipos/contrasena.tipos';
import { CONJUNTOS_CARACTERES } from '../../configuracion/valores/caracteres';
import { contieneTipoCaracter } from './verificador-tipos';
import { obtenerCaracterAleatorio, obtenerPosicionAleatoria } from '../generacion/generador-aleatorio';

/**
 * Asegura que la contraseña contenga al menos un carácter de cada tipo seleccionado
 */
export function asegurarTiposCaracteres(
  contrasena: string, 
  opciones: OpcionesContrasena
): string {
  const resultado = contrasena.split('');
  const posicionesUsadas = new Set<number>();

  if (opciones.incluirMayusculas && !contieneTipoCaracter(contrasena, CONJUNTOS_CARACTERES.MAYUSCULAS)) {
    const posicion = obtenerPosicionAleatoria(resultado.length, posicionesUsadas);
    resultado[posicion] = obtenerCaracterAleatorio(CONJUNTOS_CARACTERES.MAYUSCULAS);
    posicionesUsadas.add(posicion);
  }

  if (opciones.incluirMinusculas && !contieneTipoCaracter(contrasena, CONJUNTOS_CARACTERES.MINUSCULAS)) {
    const posicion = obtenerPosicionAleatoria(resultado.length, posicionesUsadas);
    resultado[posicion] = obtenerCaracterAleatorio(CONJUNTOS_CARACTERES.MINUSCULAS);
    posicionesUsadas.add(posicion);
  }

  if (opciones.incluirNumeros && !contieneTipoCaracter(contrasena, CONJUNTOS_CARACTERES.NUMEROS)) {
    const posicion = obtenerPosicionAleatoria(resultado.length, posicionesUsadas);
    resultado[posicion] = obtenerCaracterAleatorio(CONJUNTOS_CARACTERES.NUMEROS);
    posicionesUsadas.add(posicion);
  }

  if (opciones.incluirSimbolos && !contieneTipoCaracter(contrasena, CONJUNTOS_CARACTERES.SIMBOLOS)) {
    const posicion = obtenerPosicionAleatoria(resultado.length, posicionesUsadas);
    resultado[posicion] = obtenerCaracterAleatorio(CONJUNTOS_CARACTERES.SIMBOLOS);
    posicionesUsadas.add(posicion);
  }

  return resultado.join('');
}
