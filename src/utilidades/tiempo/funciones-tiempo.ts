/**
 * Retrasa la ejecución de una función
 */
export function retrasar(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Debounce de una función
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  espera: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  
  return function(...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), espera);
  };
}
