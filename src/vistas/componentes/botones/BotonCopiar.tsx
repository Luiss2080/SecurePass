import { usarCopiarAlPortapapeles } from '../../../ganchos/usar-copiar-portapapeles';

interface PropiedadesBotonCopiar {
  texto: string;
  deshabilitado?: boolean;
}

/**
 * Botón para copiar la contraseña al portapapeles
 */
export default function BotonCopiar({ texto, deshabilitado }: PropiedadesBotonCopiar) {
  const { copiado, copiarTexto } = usarCopiarAlPortapapeles();

  const manejarClick = async () => {
    await copiarTexto(texto);
  };

  return (
    <button
      onClick={manejarClick}
      disabled={deshabilitado}
      className="flex-1 bg-white border-2 border-purple-600 text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
    >
      {copiado ? (
        <>
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-600">¡Copiado!</span>
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
