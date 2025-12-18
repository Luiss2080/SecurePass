import { NivelSeguridad } from '../../tipos/contrasena.tipos';
import { UMBRALES_SEGURIDAD } from '../../configuracion/valores/umbrales';

/**
 * Determina el nivel de seguridad basado en la puntuación
 */
export function determinarNivelSeguridad(puntuacion: number): NivelSeguridad {
  if (puntuacion < UMBRALES_SEGURIDAD.DEBIL) {
    return 'debil';
  } else if (puntuacion < UMBRALES_SEGURIDAD.MEDIA) {
    return 'media';
  } else if (puntuacion < UMBRALES_SEGURIDAD.FUERTE) {
    return 'fuerte';
  } else {
    return 'muy-fuerte';
  }
}
