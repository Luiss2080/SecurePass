import { PasswordStrength } from '../../types/password.types';
import { STRENGTH_CONFIG } from '../../constants/password.constants';

interface StrengthMeterProps {
  strength: PasswordStrength;
}

/**
 * Componente que muestra la barra de fuerza de la contraseña
 * con animaciones y colores dinámicos
 */
export default function StrengthMeter({ strength }: StrengthMeterProps) {
  const textColorClass = STRENGTH_CONFIG[strength.level]?.textColor || 'text-gray-600';

  return (
    <div className="space-y-2 animate-fadeIn">
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-700 font-medium">Fuerza de la contraseña:</span>
        <span className={`font-bold ${textColorClass}`}>
          {strength.label}
        </span>
      </div>
      
      {/* Barra de progreso */}
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div 
          className={`h-full ${strength.color} transition-all duration-500 ease-out rounded-full relative overflow-hidden`}
          style={{ width: `${strength.score}%` }}
        >
          {/* Animación de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
        </div>
      </div>
      
      {/* Indicador numérico */}
      <div className="text-xs text-gray-500 text-right">
        {strength.score}/100
      </div>
    </div>
  );
}
