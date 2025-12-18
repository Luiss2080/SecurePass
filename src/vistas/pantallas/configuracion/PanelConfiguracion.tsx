import { OpcionesContrasena } from '../../../tipos/contrasena.tipos';
import SelectorLongitud from '../../componentes/selectores/SelectorLongitud';
import ListaOpcionesCaracteres from '../../componentes/listas/ListaOpcionesCaracteres';

interface PropiedadesPanelConfiguracion {
  opciones: OpcionesContrasena;
  alCambiarOpciones: (opciones: OpcionesContrasena) => void;
}

/**
 * Panel completo de configuración de contraseñas
 */
export default function PanelConfiguracion({ 
  opciones, 
  alCambiarOpciones 
}: PropiedadesPanelConfiguracion) {
  const manejarCambioLongitud = (longitud: number) => {
    alCambiarOpciones({ ...opciones, longitud });
  };

  const alternarOpcion = (clave: keyof Omit<OpcionesContrasena, 'longitud'>) => {
    alCambiarOpciones({ ...opciones, [clave]: !opciones[clave] });
  };

  return (
    <div className="space-y-6 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
        <span className="text-2xl">⚙️</span>
        Configuración
      </h3>

      <SelectorLongitud 
        longitud={opciones.longitud}
        alCambiarLongitud={manejarCambioLongitud}
      />

      <ListaOpcionesCaracteres 
        opciones={opciones}
        alAlternarOpcion={alternarOpcion}
      />
    </div>
  );
}
