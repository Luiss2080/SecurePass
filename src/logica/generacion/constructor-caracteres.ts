import { OpcionesContrasena } from '../../tipos/contrasena.tipos';
import { CONJUNTOS_CARACTERES } from '../../configuracion/valores/caracteres';

/**
 * Construye el conjunto de caracteres permitidos según las opciones
 */
export function construirConjuntoCaracteres(opciones: OpcionesContrasena): string {
  let conjunto = '';

  if (opciones.incluirMinusculas) {
    conjunto += CONJUNTOS_CARACTERES.MINUSCULAS;
  }
  
  if (opciones.incluirMayusculas) {
    conjunto += CONJUNTOS_CARACTERES.MAYUSCULAS;
  }
  
  if (opciones.incluirNumeros) {
    conjunto += CONJUNTOS_CARACTERES.NUMEROS;
  }
  
  if (opciones.incluirSimbolos) {
    conjunto += CONJUNTOS_CARACTERES.SIMBOLOS;
  }

  // Si no hay caracteres seleccionados, usar minúsculas por defecto
  return conjunto || CONJUNTOS_CARACTERES.MINUSCULAS;
}
