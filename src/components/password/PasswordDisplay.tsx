import { StrengthLevel } from '../../types/password.types';

interface PasswordDisplayProps {
  password: string;
  strength: StrengthLevel;
}

/**
 * Componente que muestra la contraseña generada
 * con iconos animados según el nivel de seguridad
 */
export default function PasswordDisplay({ password, strength }: PasswordDisplayProps) {
  const isSecure = strength === 'strong' || strength === 'very-strong';

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-inner border-2 border-gray-200">
      {/* Icono de candado animado */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className={`
          p-3 rounded-full shadow-lg transition-all duration-500
          ${isSecure ? 'bg-green-500 rotate-0' : 'bg-red-500 rotate-12'}
        `}>
          {isSecure ? (
            <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white animate-wiggle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
          )}
        </div>
      </div>

      {/* Campo de contraseña */}
      <div className="mt-4 min-h-[80px] flex items-center justify-center">
        {password ? (
          <p className="text-2xl md:text-3xl font-mono font-bold text-gray-800 break-all text-center select-all animate-slideIn">
            {password}
          </p>
        ) : (
          <p className="text-gray-400 text-center italic animate-pulse">
            Tu contraseña segura aparecerá aquí
          </p>
        )}
      </div>

      {/* Efecto de brillo decorativo */}
      {password && (
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer" />
        </div>
      )}
    </div>
  );
}
