import { PasswordOptions, PasswordStrength } from '../types/password.types';
import { CHARSET, STRENGTH_THRESHOLDS, STRENGTH_CONFIG } from '../constants/password.constants';

/**
 * Genera una contraseña aleatoria basada en las opciones proporcionadas
 * Usa Crypto API para mejor aleatoriedad y seguridad
 */
export function generatePassword(options: PasswordOptions): string {
  let charset = '';
  let password = '';

  // Construir el conjunto de caracteres basado en las opciones
  if (options.includeLowercase) charset += CHARSET.LOWERCASE;
  if (options.includeUppercase) charset += CHARSET.UPPERCASE;
  if (options.includeNumbers) charset += CHARSET.NUMBERS;
  if (options.includeSymbols) charset += CHARSET.SYMBOLS;

  // Si no hay caracteres seleccionados, usar minúsculas por defecto
  if (charset === '') charset = CHARSET.LOWERCASE;

  // Generar contraseña usando Crypto API para mejor aleatoriedad
  const array = new Uint32Array(options.length);
  crypto.getRandomValues(array);

  for (let i = 0; i < options.length; i++) {
    password += charset[array[i] % charset.length];
  }

  // Asegurar que al menos un carácter de cada tipo seleccionado esté incluido
  password = ensureCharacterTypes(password, options);

  return password;
}

/**
 * Asegura que la contraseña contenga al menos un carácter de cada tipo seleccionado
 */
function ensureCharacterTypes(password: string, options: PasswordOptions): string {
  let result = password.split('');
  const positions = new Set<number>();

  if (options.includeUppercase && !hasCharacterType(password, CHARSET.UPPERCASE)) {
    const pos = getRandomPosition(result.length, positions);
    result[pos] = getRandomChar(CHARSET.UPPERCASE);
    positions.add(pos);
  }

  if (options.includeLowercase && !hasCharacterType(password, CHARSET.LOWERCASE)) {
    const pos = getRandomPosition(result.length, positions);
    result[pos] = getRandomChar(CHARSET.LOWERCASE);
    positions.add(pos);
  }

  if (options.includeNumbers && !hasCharacterType(password, CHARSET.NUMBERS)) {
    const pos = getRandomPosition(result.length, positions);
    result[pos] = getRandomChar(CHARSET.NUMBERS);
    positions.add(pos);
  }

  if (options.includeSymbols && !hasCharacterType(password, CHARSET.SYMBOLS)) {
    const pos = getRandomPosition(result.length, positions);
    result[pos] = getRandomChar(CHARSET.SYMBOLS);
    positions.add(pos);
  }

  return result.join('');
}

function hasCharacterType(str: string, charset: string): boolean {
  return str.split('').some(char => charset.includes(char));
}

function getRandomChar(charset: string): string {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return charset[array[0] % charset.length];
}

function getRandomPosition(length: number, exclude: Set<number>): number {
  let pos: number;
  do {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    pos = array[0] % length;
  } while (exclude.has(pos));
  return pos;
}

/**
 * Calcula la fuerza de una contraseña basada en múltiples criterios
 */
export function calculatePasswordStrength(password: string): PasswordStrength {
  if (!password) {
    return {
      score: 0,
      level: 'weak',
      color: 'bg-gray-300',
      label: 'Sin contraseña'
    };
  }

  let score = 0;

  // Longitud (hasta 40 puntos)
  const lengthScore = Math.min(40, password.length * 2);
  score += lengthScore;

  // Diversidad de caracteres (60 puntos totales)
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password);

  const varietyCount = [hasLowercase, hasUppercase, hasNumbers, hasSymbols].filter(Boolean).length;
  score += varietyCount * 15;

  // Penalizaciones
  // Caracteres repetidos consecutivos
  if (/(.)\1{2,}/.test(password)) {
    score -= 10;
  }

  // Patrones comunes (123, abc, etc.)
  if (/(?:012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i.test(password)) {
    score -= 15;
  }

  // Normalizar a 0-100
  score = Math.max(0, Math.min(100, score));

  // Determinar nivel usando constantes
  let level: PasswordStrength['level'];
  let config: typeof STRENGTH_CONFIG[keyof typeof STRENGTH_CONFIG];

  if (score < STRENGTH_THRESHOLDS.WEAK) {
    level = 'weak';
    config = STRENGTH_CONFIG.weak;
  } else if (score < STRENGTH_THRESHOLDS.MEDIUM) {
    level = 'medium';
    config = STRENGTH_CONFIG.medium;
  } else if (score < STRENGTH_THRESHOLDS.STRONG) {
    level = 'strong';
    config = STRENGTH_CONFIG.strong;
  } else {
    level = 'very-strong';
    config = STRENGTH_CONFIG['very-strong'];
  }

  return { 
    score, 
    level, 
    color: config.bgColor, 
    label: config.label 
  };
}
