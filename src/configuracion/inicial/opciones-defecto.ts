import { OpcionesContrasena } from '../../tipos/contrasena.tipos';

/**
 * Configuración por defecto para la generación de contraseñas
 */
export const OPCIONES_CONTRASENA_DEFECTO: OpcionesContrasena = {
  longitud: 16,
  incluirMayusculas: true,
  incluirMinusculas: true,
  incluirNumeros: true,
  incluirSimbolos: true,
};
