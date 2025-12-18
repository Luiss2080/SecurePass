/**
 * Opciones de configuración para generar contraseñas
 */
export interface OpcionesContrasena {
  longitud: number;
  incluirMayusculas: boolean;
  incluirMinusculas: boolean;
  incluirNumeros: boolean;
  incluirSimbolos: boolean;
}

/**
 * Información sobre la fortaleza de una contraseña
 */
export interface FortalezaContrasena {
  puntuacion: number; // 0-100
  nivel: NivelSeguridad;
  color: string;
  etiqueta: string;
}

/**
 * Niveles de seguridad posibles para una contraseña
 */
export type NivelSeguridad = 'debil' | 'media' | 'fuerte' | 'muy-fuerte';
