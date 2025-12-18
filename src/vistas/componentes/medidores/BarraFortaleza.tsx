import { FortalezaContrasena } from '../../../tipos/contrasena.tipos';

interface PropiedadesBarraFortaleza {
  fortaleza: FortalezaContrasena;
}

/**
 * Barra visual de fortaleza de contraseña
 */
export default function BarraFortaleza({ fortaleza }: PropiedadesBarraFortaleza) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">Seguridad de la contraseña</span>
        <span className={`text-sm font-bold ${fortaleza.color.replace('bg-', 'text-')}`}>
          {fortaleza.etiqueta}
        </span>
      </div>
      
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div
          className={`h-full ${fortaleza.color} transition-all duration-500 ease-out rounded-full shadow-md`}
          style={{ width: `${fortaleza.puntuacion}%` }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-500">
        <span>Débil</span>
        <span>Medio</span>
        <span>Fuerte</span>
      </div>
    </div>
  );
}
