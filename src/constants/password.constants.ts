/**
 * Conjuntos de caracteres para la generación de contraseñas
 */
export const CHARSET = {
  LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
  UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  NUMBERS: '0123456789',
  SYMBOLS: '!@#$%^&*()_+-=[]{}|;:,.<>?',
} as const;

/**
 * Configuración por defecto para la generación de contraseñas
 */
export const DEFAULT_PASSWORD_OPTIONS = {
  length: 16,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,
} as const;

/**
 * Rangos de longitud de contraseña
 */
export const PASSWORD_LENGTH = {
  MIN: 8,
  MAX: 32,
  DEFAULT: 16,
} as const;

/**
 * Umbrales de puntuación para niveles de seguridad
 */
export const STRENGTH_THRESHOLDS = {
  WEAK: 40,
  MEDIUM: 60,
  STRONG: 80,
} as const;

/**
 * Configuración de colores y etiquetas para niveles de seguridad
 */
export const STRENGTH_CONFIG = {
  weak: {
    color: 'bg-red-500',
    textColor: 'text-red-600',
    bgColor: 'bg-red-500',
    label: 'Débil',
  },
  medium: {
    color: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    bgColor: 'bg-yellow-500',
    label: 'Media',
  },
  strong: {
    color: 'bg-green-500',
    textColor: 'text-green-600',
    bgColor: 'bg-green-500',
    label: 'Fuerte',
  },
  'very-strong': {
    color: 'bg-emerald-500',
    textColor: 'text-emerald-600',
    bgColor: 'bg-emerald-500',
    label: 'Muy Fuerte',
  },
} as const;

/**
 * Duración de animaciones y timeouts
 */
export const ANIMATION_DURATION = {
  COPY_FEEDBACK: 2000,
  GENERATE_DELAY: 150,
} as const;
