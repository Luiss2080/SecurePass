/**
 * Clases de Tailwind CSS para botones
 */
export const ESTILOS_BOTONES = {
  primario: 'flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg',
  secundario: 'flex-1 bg-white border-2 border-purple-600 text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg',
  deshabilitado: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
} as const;
