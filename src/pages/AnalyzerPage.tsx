import { useState, useMemo } from 'react';
import { calculatePasswordStrength } from '../services/passwordGenerator.service';
import StrengthMeter from '../components/password/StrengthMeter';

export default function AnalyzerPage() {
  const [inputPassword, setInputPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const strength = useMemo(() => {
    return calculatePasswordStrength(inputPassword);
  }, [inputPassword]);

  // Cálculo de Entropía y Tiempo de Hackeo más detallado
  const metrics = useMemo(() => {
    if (!inputPassword) return { entropy: 0, poolSize: 0, attempts: 0 };
    
    let poolSize = 0;
    if (/[a-z]/.test(inputPassword)) poolSize += 26;
    if (/[A-Z]/.test(inputPassword)) poolSize += 26;
    if (/[0-9]/.test(inputPassword)) poolSize += 10;
    if (/[^a-zA-Z0-9]/.test(inputPassword)) poolSize += 32;
    
    const entropy = Math.log2(Math.pow(poolSize || 1, inputPassword.length));
    const attempts = Math.pow(poolSize || 1, inputPassword.length);
    
    return { entropy, poolSize, attempts };
  }, [inputPassword]);

  const getCrackTime = (attempts: number) => {
    const rate = 10000000000; // 10 mil millones por segundo (GPU potente)
    const seconds = attempts / rate;
    
    if (seconds < 1) return 'Instantáneo';
    if (seconds < 60) return 'Unos segundos';
    if (seconds < 3600) return `${Math.round(seconds / 60)} minutos`;
    if (seconds < 86400) return `${Math.round(seconds / 3600)} horas`;
    if (seconds < 31536000) return `${Math.round(seconds / 86400)} días`;
    if (seconds < 3153600000) return `${Math.round(seconds / 31536000)} años`;
    return 'Siglos';
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Analizador de Seguridad
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Auditoría profunda de credenciales.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Columna Izquierda: Input y Métricas Principales */}
        <div className="lg:col-span-7 space-y-6">
          {/* Panel de Input */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Escribe una contraseña para analizar
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-lg font-mono focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all group-hover:bg-white"
                  placeholder="Escribe aquí..."
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <StrengthMeter strength={strength} />
          </div>

          {/* Tarjetas de Métricas Avanzadas */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-gray-500 text-sm font-medium mb-1">Entropía</div>
              <div className="text-2xl font-bold text-gray-900">
                {metrics.entropy.toFixed(1)} <span className="text-sm font-normal text-gray-400">bits</span>
              </div>
              <div className="text-xs text-gray-400 mt-2">
                Medida de imprevisibilidad matemática.
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-gray-500 text-sm font-medium mb-1">Caracteres Únicos</div>
              <div className="text-2xl font-bold text-gray-900">
                {metrics.poolSize}
              </div>
              <div className="text-xs text-gray-400 mt-2">
                Tamaño del pool de caracteres usados.
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tiempo y Recomendaciones */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-xl ring-1 ring-white/10">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Tiempo para Hackear
            </h3>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-2">
              {inputPassword ? getCrackTime(metrics.attempts) : '---'}
            </div>
            <p className="text-gray-400 text-sm border-t border-white/10 pt-4 mt-4">
              Estimación basada en un ataque de fuerza bruta offline con hardware de última generación (RTX 4090 farm).
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Checklist de Seguridad</h3>
            <ul className="space-y-4">
              <CheckItem 
                label="Longitud Segura (12+)" 
                passed={inputPassword.length >= 12} 
                info="Aumenta exponencialmente la dificultad."
              />
              <CheckItem 
                label="Complejidad (Tipos mixtos)" 
                passed={metrics.poolSize >= 50} 
                info="Usa mayúsculas, minúsculas y números."
              />
              <CheckItem 
                label="Caracteres Especiales" 
                passed={/[^A-Za-z0-9]/.test(inputPassword)} 
                info="Los símbolos añaden mucha entropía."
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckItem({ label, passed, info }: { label: string, passed: boolean, info: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${passed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
        {passed ? (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <div className="w-1.5 h-1.5 rounded-full bg-current" />
        )}
      </div>
      <div>
        <span className={`text-sm font-medium block ${passed ? 'text-gray-900' : 'text-gray-500'}`}>
          {label}
        </span>
        <span className="text-xs text-gray-400">
          {info}
        </span>
      </div>
    </li>
  );
}
