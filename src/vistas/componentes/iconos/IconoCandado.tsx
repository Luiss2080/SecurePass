interface PropiedadesIconoCandado {
  esSeguro: boolean;
}

/**
 * Componente del icono de candado animado
 */
export default function IconoCandado({ esSeguro }: PropiedadesIconoCandado) {
  return (
    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
      <div className={`
        p-3 rounded-full shadow-lg transition-all duration-500
        ${esSeguro ? 'bg-green-500 rotate-0' : 'bg-red-500 rotate-12'}
      `}>
        {esSeguro ? (
          <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
          </svg>
        )}
      </div>
    </div>
  );
}
