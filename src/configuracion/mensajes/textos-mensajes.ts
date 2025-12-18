/**
 * Mensajes de error comunes
 */
export const MENSAJES_ERROR = {
  COPIA_FALLIDA: 'No se pudo copiar la contraseña',
  GENERACION_FALLIDA: 'Error al generar la contraseña',
  OPCIONES_INVALIDAS: 'Opciones de contraseña inválidas',
  LONGITUD_INVALIDA: 'La longitud debe estar entre 8 y 32 caracteres',
} as const;

/**
 * Mensajes de éxito
 */
export const MENSAJES_EXITO = {
  COPIADO: '¡Copiado exitosamente!',
  GENERADO: 'Contraseña generada',
} as const;
