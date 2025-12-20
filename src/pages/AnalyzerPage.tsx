import { useState, useMemo } from 'react';
import { calculatePasswordStrength } from '../services/passwordGenerator.service';
import StrengthMeter from '../components/password/StrengthMeter';

export default function AnalyzerPage() {
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const strength = useMemo(() => {
    return calculatePasswordStrength(inputPassword);
  }, [inputPassword]);

  const getTimeHack = (score: number) => {
    const times = [
      'Instantáneo',
      'Unos segundos',
      'Varios minutos',
      'Semanas',
      'Años',
      'Siglos'
    ];
    return times[Math.min(score, 5)];
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Analizador de Seguridad
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Evalúa la robustez de tus contraseñas actuales antes de usarlas.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Panel de Input */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Escribe una contraseña para analizar
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Escribe aquí..."
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <StrengthMeter strength={strength} />
        </div>

        {/* Panel de Resultados */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tiempo estimado de hackeo
            </h3>
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {inputPassword ? getTimeHack(strength.score) : '---'}
            </div>
            <p className="text-gray-400 text-sm">
              Basado en ataques de fuerza bruta con hardware moderno.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Recomendaciones</h3>
            <ul className="space-y-3">
              <li className={`flex items-center gap-3 text-sm ${inputPassword.length >= 12 ? 'text-green-600' : 'text-gray-500'}`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${inputPassword.length >= 12 ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {inputPassword.length >= 12 ? '✓' : '•'}
                </div>
                Mínimo 12 caracteres
              </li>
              <li className={`flex items-center gap-3 text-sm ${/[A-Z]/.test(inputPassword) ? 'text-green-600' : 'text-gray-500'}`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${/[A-Z]/.test(inputPassword) ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {/[A-Z]/.test(inputPassword) ? '✓' : '•'}
                </div>
                Incluye mayúsculas
              </li>
              <li className={`flex items-center gap-3 text-sm ${/[0-9]/.test(inputPassword) ? 'text-green-600' : 'text-gray-500'}`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${/[0-9]/.test(inputPassword) ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {/[0-9]/.test(inputPassword) ? '✓' : '•'}
                </div>
                Incluye números
              </li>
              <li className={`flex items-center gap-3 text-sm ${/[^A-Za-z0-9]/.test(inputPassword) ? 'text-green-600' : 'text-gray-500'}`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${/[^A-Za-z0-9]/.test(inputPassword) ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {/[^A-Za-z0-9]/.test(inputPassword) ? '✓' : '•'}
                </div>
                Incluye símbolos especiales
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
