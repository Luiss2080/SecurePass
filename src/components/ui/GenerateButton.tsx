interface GenerateButtonProps {
  onClick: () => void;
  isGenerating: boolean;
  disabled?: boolean;
}

/**
 * Botón principal para generar contraseñas con animaciones
 */
export default function GenerateButton({ onClick, isGenerating, disabled = false }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isGenerating}
      className={`
        flex-1 flex items-center justify-center gap-3 
        bg-gradient-to-r from-purple-600 to-pink-600 
        hover:from-purple-700 hover:to-pink-700
        text-white font-bold py-4 px-6 rounded-xl
        transition-all duration-200 transform
        hover:scale-105 active:scale-95
        shadow-lg hover:shadow-xl
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        group
      `}
    >
      <svg 
        className={`w-5 h-5 group-hover:rotate-180 transition-transform duration-500 ${
          isGenerating ? 'animate-spin' : ''
        }`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      <span className="text-lg">
        {isGenerating ? 'Generando...' : 'Generar Nueva'}
      </span>
    </button>
  );
}
