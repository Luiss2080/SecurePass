import { FortalezaContrasena } from '../../../tipos/contrasena.tipos';
import BarraFortaleza from '../../componentes/medidores/BarraFortaleza';

interface PropiedadesMedidorFortaleza {
  fortaleza: FortalezaContrasena;
}

/**
 * Componente completo del medidor de fortaleza
 */
export default function MedidorFortaleza({ fortaleza }: PropiedadesMedidorFortaleza) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <BarraFortaleza fortaleza={fortaleza} />
    </div>
  );
}
