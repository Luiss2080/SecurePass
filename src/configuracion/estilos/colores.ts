/**
 * Paleta de colores para niveles de seguridad
 */
export const COLORES_SEGURIDAD = {
  DEBIL: {
    fondo: 'bg-red-500',
    texto: 'text-red-600',
    borde: 'border-red-500',
  },
  MEDIA: {
    fondo: 'bg-yellow-500',
    texto: 'text-yellow-600',
    borde: 'border-yellow-500',
  },
  FUERTE: {
    fondo: 'bg-green-500',
    texto: 'text-green-600',
    borde: 'border-green-500',
  },
  MUY_FUERTE: {
    fondo: 'bg-emerald-500',
    texto: 'text-emerald-600',
    borde: 'border-emerald-500',
  },
} as const;
