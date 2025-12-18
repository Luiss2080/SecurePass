import BotonGenerar from '../botones/BotonGenerar';
import BotonCopiar from '../botones/BotonCopiar';

interface PropiedadesBarraAcciones {
  contrasena: string;
  generando: boolean;
  alGenerarNueva: () => void;
}

/**
 * Barra con botones de acción
 */
export default function BarraAcciones({ 
  contrasena, 
  generando, 
  alGenerarNueva 
}: PropiedadesBarraAcciones) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <BotonGenerar 
        alClick={alGenerarNueva}
        generando={generando}
      />
      
      <BotonCopiar 
        texto={contrasena} 
        deshabilitado={!contrasena} 
      />
    </div>
  );
}
