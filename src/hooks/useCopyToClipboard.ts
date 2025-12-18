import { useState, useCallback } from 'react';
import { ANIMATION_DURATION } from '../constants/password.constants';

/**
 * Hook personalizado para manejar la funcionalidad de copiar al portapapeles
 * Incluye estado de feedback visual
 */
export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    if (!text) return false;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      // Resetear el estado después del delay configurado
      setTimeout(() => {
        setCopied(false);
      }, ANIMATION_DURATION.COPY_FEEDBACK);

      return true;
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
      return false;
    }
  }, []);

  return { copied, copyToClipboard };
}
