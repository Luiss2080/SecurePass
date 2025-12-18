import { LIMITES_LONGITUD_CONTRASENA } from '../../../configuracion/valores/limites';

interface PropiedadesControlDeslizante {
  valor: number;
  alCambiar: (valor: number) => void;
}

/**
 * Control deslizante para seleccionar la longitud
 */
export default function ControlDeslizante({ valor, alCambiar }: PropiedadesControlDeslizante) {
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    alCambiar(parseInt(e.target.value));
  };

  return (
    <div className="space-y-2">
      <input
        id="longitud"
        type="range"
        min={LIMITES_LONGITUD_CONTRASENA.MINIMO}
        max={LIMITES_LONGITUD_CONTRASENA.MAXIMO}
        value={valor}
        onChange={manejarCambio}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>{LIMITES_LONGITUD_CONTRASENA.MINIMO}</span>
        <span>20</span>
        <span>{LIMITES_LONGITUD_CONTRASENA.MAXIMO}</span>
      </div>
    </div>
  );
}
