import { FortalezaContrasena } from '../tipos/contrasena.tipos';
import { ETIQUETAS_SEGURIDAD } from '../configuracion/estilos/etiquetas';
import {
  calcularPuntuacionLongitud,
  calcularPuntuacionVariedad,
  calcularPenalizaciones,
  normalizarPuntuacion,
} from '../logica/analisis/calculador-puntuacion';
import { determinarNivelSeguridad } from '../logica/analisis/clasificador-nivel';
import { obtenerConfiguracionNivel } from '../logica/analisis/obtenedor-configuracion';

/**
 * Calcula la fortaleza de una contraseña basada en múltiples criterios
 */
export function calcularFortalezaContrasena(contrasena: string): FortalezaContrasena {
  if (!contrasena) {
    return {
      puntuacion: 0,
      nivel: 'debil',
      color: 'bg-gray-300',
      etiqueta: ETIQUETAS_SEGURIDAD.SIN_CONTRASENA,
    };
  }

  // Calcular puntuación base
  let puntuacion = 0;
  puntuacion += calcularPuntuacionLongitud(contrasena);
  puntuacion += calcularPuntuacionVariedad(contrasena);
  puntuacion -= calcularPenalizaciones(contrasena);

  // Normalizar a 0-100
  puntuacion = normalizarPuntuacion(puntuacion);

  // Determinar nivel y configuración
  const nivel = determinarNivelSeguridad(puntuacion);
  const configuracion = obtenerConfiguracionNivel(nivel);

  return {
    puntuacion,
    nivel,
    color: configuracion.color,
    etiqueta: configuracion.etiqueta,
  };
}
