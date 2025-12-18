import TituloPrincipal from '../titulos/TituloPrincipal';
import Subtitulo from '../titulos/Subtitulo';

/**
 * Componente de encabezado de la aplicación
 */
export default function EncabezadoApp() {
  return (
    <div className="text-center mb-8 animate-fadeIn">
      <TituloPrincipal />
      <Subtitulo />
    </div>
  );
}
