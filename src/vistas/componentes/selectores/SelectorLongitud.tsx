import EtiquetaLongitud from '../controles/EtiquetaLongitud';
import ControlDeslizante from '../controles/ControlDeslizante';

interface PropiedadesSelectorLongitud {
  longitud: number;
  alCambiarLongitud: (valor: number) => void;
}

/**
 * Sección para configurar la longitud de la contraseña
 */
export default function SelectorLongitud({ 
  longitud, 
  alCambiarLongitud 
}: PropiedadesSelectorLongitud) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label htmlFor="longitud" className="text-sm font-medium text-gray-700">
          Longitud de la contraseña
        </label>
        <EtiquetaLongitud longitud={longitud} />
      </div>
      <ControlDeslizante valor={longitud} alCambiar={alCambiarLongitud} />
    </div>
  );
}
