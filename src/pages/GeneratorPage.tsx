import { useEffect } from 'react';
import { usePasswordGenerator } from '../hooks/usePasswordGenerator';
import PasswordDisplay from '../components/password/PasswordDisplay';
import PasswordOptionsPanel from '../components/password/PasswordOptionsPanel';
import StrengthMeter from '../components/password/StrengthMeter';
import CopyButton from '../components/ui/CopyButton';
import GenerateButton from '../components/ui/GenerateButton';
import SecurityTips from '../components/layout/SecurityTips';

/**
 * Página principal: Generador de Contraseñas
 */
export default function GeneratorPage() {
  const {
    password,
    options,
    passwordStrength,
    isGenerating,
    generateNewPassword,
    updateOptions,
  } = usePasswordGenerator();

  // Generar contraseña inicial al montar el componente
  useEffect(() => {
    generateNewPassword();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-8">
      {/* Encabezado de la página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Generador de Contraseñas
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Crea credenciales robustas y seguras en segundos.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Columna Principal: Generador */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-8">
            {/* Display y Fuerza */}
            <div className="space-y-6">
              <PasswordDisplay 
                password={password} 
                strength={passwordStrength.level}
              />
              <StrengthMeter strength={passwordStrength} />
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
              <div className="flex-1">
                <GenerateButton 
                  onClick={generateNewPassword}
                  isGenerating={isGenerating}
                />
              </div>
              <div className="sm:w-auto">
                <CopyButton text={password} disabled={!password} />
              </div>
            </div>
          </div>

          {/* Panel de Configuración separado visualmente */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Configuración Avanzada
            </h3>
            <PasswordOptionsPanel 
              options={options} 
              onOptionsChange={updateOptions} 
            />
          </div>
        </div>

        {/* Columna Lateral: Consejos e Info */}
        <div className="space-y-6">
          <SecurityTips />
          
          {/* Widget adicional de estado */}
          <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <h3 className="font-bold text-lg mb-2">¿Sabías qué?</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Una contraseña de 12 caracteres con números y símbolos tardaría 34,000 años en ser descifrada por una computadora actual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
