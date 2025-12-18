import { useState, useCallback } from 'react';
import { DURACIONES_ANIMACION } from '../configuracion/valores/tiempos';

/**
 * Hook personalizado para copiar texto al portapapeles
 */
export function usarCopiarAlPortapapeles() {
  const [copiado, setCopiado] = useState(false);

  const copiarTexto = useCallback(async (texto: string) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      
      setTimeout(() => {
        setCopiado(false);
      }, DURACIONES_ANIMACION.FEEDBACK_COPIADO);
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
    }
  }, []);

  return { copiado, copiarTexto };
}
