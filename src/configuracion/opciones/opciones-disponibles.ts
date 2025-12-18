/**
 * Opciones de caracteres disponibles
 */
export const OPCIONES_DISPONIBLES = [
  {
    id: 'mayusculas',
    clave: 'incluirMayusculas' as const,
    etiqueta: 'Mayúsculas (A-Z)',
    ejemplo: 'ABC',
  },
  {
    id: 'minusculas',
    clave: 'incluirMinusculas' as const,
    etiqueta: 'Minúsculas (a-z)',
    ejemplo: 'abc',
  },
  {
    id: 'numeros',
    clave: 'incluirNumeros' as const,
    etiqueta: 'Números (0-9)',
    ejemplo: '123',
  },
  {
    id: 'simbolos',
    clave: 'incluirSimbolos' as const,
    etiqueta: 'Símbolos (!@#$%)',
    ejemplo: '!@#',
  },
] as const;
