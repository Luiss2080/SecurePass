import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

interface CopyButtonProps {
  text: string;
  disabled?: boolean;
}

/**
 * Botón para copiar texto al portapapeles con feedback visual
 */
export default function CopyButton({ text, disabled = false }: CopyButtonProps) {
  const { copied, copyToClipboard } = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard(text);
  };

  return (
    <button
      onClick={handleCopy}
      disabled={disabled || !text}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg font-medium
        transition-all duration-200 transform
        ${copied 
          ? 'bg-green-500 text-white scale-105' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105 active:scale-95'
        }
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        shadow-md hover:shadow-lg
      `}
      aria-label={copied ? 'Copiado' : 'Copiar contraseña'}
    >
      {copied ? (
        <>
          <svg className="w-5 h-5 animate-scaleIn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="animate-fadeIn">¡Copiado!</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>Copiar</span>
        </>
      )}
    </button>
  );
}
