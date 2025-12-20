import { useEffect, useRef } from 'react';
import { usePasswordGenerator } from '../hooks/usePasswordGenerator';
import { useHistory } from '../hooks/useHistory';
import PasswordDisplay from '../components/password/PasswordDisplay';
import PasswordOptionsPanel from '../components/password/PasswordOptionsPanel';
import StrengthMeter from '../components/password/StrengthMeter';
import CopyButton from '../components/ui/CopyButton';
import GenerateButton from '../components/ui/GenerateButton';

/**
 * Página principal: Generador de Contraseñas
 * Estilo Hero Dashboard
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

  const { addToHistory } = useHistory();
  const lastSavedPassword = useRef('');

  // Generar contraseña inicial al montar el componente
  useEffect(() => {
    generateNewPassword();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Guardar en historial cuando se genera una nueva contraseña válida
  useEffect(() => {
    if (password && password !== lastSavedPassword.current) {
      addToHistory(password, passwordStrength.score);
      lastSavedPassword.current = password;
    }
  }, [password, passwordStrength, addToHistory]);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Hero Banner Card */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-white shadow-xl shadow-blue-200">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-wide backdrop-blur-sm border border-white/10">
              SEGURIDAD PRO
            </span>
            <h1 className="text-4xl font-bold leading-tight">
              Genera contraseñas <br/>
              <span className="text-blue-200">invencibles</span> al instante.
            </h1>
            <p className="text-blue-100 max-w-md">
              Utiliza algoritmos criptográficos avanzados para proteger tus cuentas contra ataques de fuerza bruta.
            </p>
            
            <div className="pt-4">
              <GenerateButton 
                onClick={generateNewPassword}
                isGenerating={isGenerating}
                variant="white" // Need to ensure this variant exists or style manually
              />
            </div>
          </div>

          {/* Password Display embedded in Hero */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-inner">
            <div className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2">Tu nueva contraseña</div>
            <div className="text-3xl font-mono font-bold break-all tracking-wider text-white mb-4">
              {password}
            </div>
            <div className="flex items-center justify-between">
               <div className="flex gap-2">
                 {[...Array(4)].map((_, i) => (
                   <div key={i} className={`h-2 w-8 rounded-full ${i < passwordStrength.score ? 'bg-green-400' : 'bg-white/20'}`}></div>
                 ))}
               </div>
               <CopyButton text={password} disabled={!password} variant="icon-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
           <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
             <h3 className="text-lg font-bold text-gray-900 mb-6">Personalización</h3>
             <PasswordOptionsPanel 
                options={options} 
                onOptionsChange={updateOptions} 
             />
           </div>
        </div>

        {/* Mini Stats Card */}
        <div className="space-y-6">
          <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100">
             <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 mb-4">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
             </div>
             <div className="text-2xl font-bold text-gray-900">{passwordStrength.score}/4</div>
             <div className="text-sm text-gray-500 font-medium">Nivel de Fortaleza</div>
             <div className="mt-4 h-2 bg-orange-100 rounded-full overflow-hidden">
               <div className="h-full bg-orange-500 rounded-full" style={{ width: `${(passwordStrength.score/4)*100}%` }}></div>
             </div>
          </div>

          <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
             <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 mb-4">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             <div className="text-2xl font-bold text-gray-900">0.02s</div>
             <div className="text-sm text-gray-500 font-medium">Tiempo de generación</div>
          </div>
        </div>
      </div>
    </div>
  );
}
