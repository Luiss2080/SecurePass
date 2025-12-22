export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilar?: boolean;
  noSequential?: boolean;
  allowSpaces?: boolean;
}

export interface PasswordStrength {
  score: number; // 0-100
  level: 'weak' | 'medium' | 'strong' | 'very-strong';
  color: string;
  label: string;
}

export type StrengthLevel = 'weak' | 'medium' | 'strong' | 'very-strong';
