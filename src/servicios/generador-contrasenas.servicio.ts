import { OpcionesContrasena } from '../tipos/contrasena.tipos';
import { construirConjuntoCaracteres } from '../logica/generacion/constructor-caracteres';
import { generarNumerosAleatorios } from '../logica/generacion/generador-aleatorio';
import { asegurarTiposCaracteres } from '../logica/validacion/asegurador-tipos';

/**
 * Genera una contraseña aleatoria basada en las opciones proporcionadas
 * Usa Crypto API para mejor aleatoriedad y seguridad
 */
export function generarContrasena(opciones: OpcionesContrasena): string {
  const conjuntoCaracteres = construirConjuntoCaracteres(opciones);
  let contrasena = '';

  // Generar contraseña usando Crypto API
  const numerosAleatorios = generarNumerosAleatorios(opciones.longitud);

  for (let i = 0; i < opciones.longitud; i++) {
    contrasena += conjuntoCaracteres[numerosAleatorios[i] % conjuntoCaracteres.length];
  }

  // Asegurar que contenga al menos un carácter de cada tipo seleccionado
  contrasena = asegurarTiposCaracteres(contrasena, opciones);

  return contrasena;
}
