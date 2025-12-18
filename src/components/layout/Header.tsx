/**
 * Componente de encabezado de la aplicación
 */
export default function Header() {
  return (
    <div className="text-center mb-8 animate-fadeIn">
      <div className="inline-flex items-center gap-3 mb-4">
        <svg className="w-12 h-12 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          SecurePass
        </h1>
      </div>
      <p className="text-white/90 text-lg md:text-xl font-medium">
        Generador de Contraseñas Seguras y Aleatorias
      </p>
    </div>
  );
}
