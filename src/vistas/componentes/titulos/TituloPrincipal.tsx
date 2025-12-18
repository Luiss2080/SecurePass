import IconoEscudo from '../iconos/IconoEscudo';

/**
 * Título principal de la aplicación
 */
export default function TituloPrincipal() {
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <IconoEscudo />
      <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
        SecurePass
      </h1>
    </div>
  );
}
