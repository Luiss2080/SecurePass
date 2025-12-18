import { useEffect } from 'react';
import { usePasswordGenerator } from './hooks/usePasswordGenerator';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SecurityTips from './components/layout/SecurityTips';
import PasswordDisplay from './components/password/PasswordDisplay';
import PasswordOptionsPanel from './components/password/PasswordOptionsPanel';
import StrengthMeter from './components/password/StrengthMeter';
import CopyButton from './components/ui/CopyButton';
import GenerateButton from './components/ui/GenerateButton';

/**
 * Componente principal de la aplicación SecurePass
 * Utiliza hooks personalizados y componentes modulares
 */
function App() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4 animate-gradient">
      {/* Partículas de fondo decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-48 -left-48 animate-float" />
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -bottom-48 -right-48 animate-float animation-delay-2000" />
      </div>

      <div className="relative max-w-4xl w-full">
        {/* Header */}
        <Header />

        {/* Contenedor principal */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 space-y-6 animate-slideUp">
          
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

          {/* Footer informativo */}
          <SecurityTips />
        </div>

        {/* Pie de página */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
