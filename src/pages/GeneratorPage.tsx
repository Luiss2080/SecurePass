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
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
          Generador de Contraseñas
        </h1>
        <p className="text-white/90 text-lg">
          Crea contraseñas seguras y aleatorias al instante
        </p>
      </div>

      {/* Contenedor principal estilo tarjeta */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
        {/* Display de contraseña */}
        <PasswordDisplay 
          password={password} 
          strength={passwordStrength.level}
        />

        {/* Medidor de fuerza */}
        <StrengthMeter strength={passwordStrength} />

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-3">
          <GenerateButton 
            onClick={generateNewPassword}
            isGenerating={isGenerating}
          />
          
          <CopyButton text={password} disabled={!password} />
        </div>

        {/* Panel de opciones */}
        <PasswordOptionsPanel 
          options={options} 
          onOptionsChange={updateOptions} 
        />

        {/* Consejos de seguridad */}
        <SecurityTips />
      </div>
    </div>
  );
}
