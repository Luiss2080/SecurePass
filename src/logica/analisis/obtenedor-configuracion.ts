import { NivelSeguridad } from '../../tipos/contrasena.tipos';
import { COLORES_SEGURIDAD } from '../../configuracion/estilos/colores';
import { ETIQUETAS_SEGURIDAD } from '../../configuracion/estilos/etiquetas';

/**
 * Configuración visual y textual para un nivel de seguridad
 */
interface ConfiguracionNivel {
  color: string;
  etiqueta: string;
}

/**
 * Obtiene la configuración de colores y etiqueta para un nivel
 */
export function obtenerConfiguracionNivel(nivel: NivelSeguridad): ConfiguracionNivel {
  const mapeo = {
    'debil': {
      color: COLORES_SEGURIDAD.DEBIL.fondo,
      etiqueta: ETIQUETAS_SEGURIDAD.DEBIL,
    },
    'media': {
      color: COLORES_SEGURIDAD.MEDIA.fondo,
      etiqueta: ETIQUETAS_SEGURIDAD.MEDIA,
    },
    'fuerte': {
      color: COLORES_SEGURIDAD.FUERTE.fondo,
      etiqueta: ETIQUETAS_SEGURIDAD.FUERTE,
    },
    'muy-fuerte': {
      color: COLORES_SEGURIDAD.MUY_FUERTE.fondo,
      etiqueta: ETIQUETAS_SEGURIDAD.MUY_FUERTE,
    },
  };

  return mapeo[nivel];
}
