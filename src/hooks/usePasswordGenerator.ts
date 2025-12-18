import { useState, useCallback, useMemo } from 'react';
import { PasswordOptions } from '../types/password.types';
import { generatePassword, calculatePasswordStrength } from '../services/passwordGenerator.service';
import { DEFAULT_PASSWORD_OPTIONS, ANIMATION_DURATION } from '../constants/password.constants';

/**
 * Hook personalizado para manejar la generación de contraseñas
 * Optimizado con useMemo y useCallback para evitar re-renders innecesarios
 */
export function usePasswordGenerator() {
  const [password, setPassword] = useState('');
  const [options, setOptions] = useState<PasswordOptions>(DEFAULT_PASSWORD_OPTIONS);
  const [isGenerating, setIsGenerating] = useState(false);

  // Calcular fuerza de la contraseña (memoizado)
  const passwordStrength = useMemo(() => {
    return calculatePasswordStrength(password);
  }, [password]);

  // Generar nueva contraseña (useCallback para evitar recreación)
  const generateNewPassword = useCallback(() => {
    setIsGenerating(true);
    
    // Pequeño delay para la animación
    setTimeout(() => {
      const newPassword = generatePassword(options);
      setPassword(newPassword);
      setIsGenerating(false);
    }, ANIMATION_DURATION.GENERATE_DELAY);
  }, [options]);

  // Actualizar opciones
  const updateOptions = useCallback((newOptions: PasswordOptions) => {
    setOptions(newOptions);
  }, []);

  return {
    password,
    options,
    passwordStrength,
    isGenerating,
    generateNewPassword,
    updateOptions,
    setPassword,
  };
}
