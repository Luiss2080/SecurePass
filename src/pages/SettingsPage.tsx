import { useState, useEffect } from 'react';

export default function SettingsPage() {
  const [autoCopy, setAutoCopy] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Simulación de persistencia
  useEffect(() => {
    const settings = localStorage.getItem('securepass_settings');
    if (settings) {
      const parsed = JSON.parse(settings);
      setAutoCopy(parsed.autoCopy);
      setDarkMode(parsed.darkMode);
      setNotifications(parsed.notifications);
    }
  }, []);

  const saveSettings = (key: string, value: boolean) => {
    const newSettings = {
      autoCopy: key === 'autoCopy' ? value : autoCopy,
      darkMode: key === 'darkMode' ? value : darkMode,
      notifications: key === 'notifications' ? value : notifications,
    };
    localStorage.setItem('securepass_settings', JSON.stringify(newSettings));
    
    // Aplicar lógica real aquí si fuera necesario
    if (key === 'autoCopy') setAutoCopy(value);
    if (key === 'darkMode') setDarkMode(value);
    if (key === 'notifications') setNotifications(value);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Configuración
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Personaliza tu experiencia en SecurePass.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100">
        {/* Auto Copy */}
        <div className="p-6 md:p-8 flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-medium text-gray-900">Copia Automática</h3>
            <p className="text-gray-500 text-sm">
              Copiar automáticamente al portapapeles después de generar.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer"
              checked={autoCopy}
              onChange={(e) => saveSettings('autoCopy', e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>

        {/* Notifications */}
        <div className="p-6 md:p-8 flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-medium text-gray-900">Notificaciones</h3>
            <p className="text-gray-500 text-sm">
              Mostrar alertas visuales al copiar o generar contraseñas.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer"
              checked={notifications}
              onChange={(e) => saveSettings('notifications', e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>

        {/* Dark Mode (Mock) */}
        <div className="p-6 md:p-8 flex items-center justify-between opacity-50 cursor-not-allowed">
          <div className="space-y-1">
            <h3 className="text-lg font-medium text-gray-900">Modo Oscuro</h3>
            <p className="text-gray-500 text-sm">
              Cambiar la interfaz a colores oscuros (Próximamente).
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer pointer-events-none">
            <input 
              type="checkbox" 
              className="sr-only peer"
              checked={darkMode}
              disabled
              onChange={(e) => saveSettings('darkMode', e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-400 pt-8">
        SecurePass v1.0.0 - Build 2024.12
      </div>
    </div>
  );
}
