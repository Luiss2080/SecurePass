import { NivelSeguridad } from '../../../tipos/contrasena.tipos';
import IconoCandado from '../../componentes/iconos/IconoCandado';
import TextoContrasena from '../../componentes/texto/TextoContrasena';
import EfectoBrillo from '../../componentes/efectos/EfectoBrillo';

interface PropiedadesVisualizadorContrasena {
  contrasena: string;
  nivel: NivelSeguridad;
}

/**
 * Componente principal que muestra la contraseña generada
 */
export default function VisualizadorContrasena({ 
  contrasena, 
  nivel 
}: PropiedadesVisualizadorContrasena) {
  const esSeguro = nivel === 'fuerte' || nivel === 'muy-fuerte';

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-inner border-2 border-gray-200">
      <IconoCandado esSeguro={esSeguro} />
      
      <div className="mt-4 min-h-[80px] flex items-center justify-center">
        <TextoContrasena contrasena={contrasena} />
      </div>

      {contrasena && <EfectoBrillo />}
    </div>
  );
}
