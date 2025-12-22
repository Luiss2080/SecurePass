import { useState, useEffect } from 'react';

export default function SettingsPage() {
  const [autoCopy, setAutoCopy] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [clipboardAutoClear, setClipboardAutoClear] = useState(false);

  // Simulación de persistencia
  useEffect(() => {
    const settings = localStorage.getItem('securepass_settings');
    if (settings) {
      const parsed = JSON.parse(settings);
      setAutoCopy(parsed.autoCopy);
      setDarkMode(parsed.darkMode);
      setNotifications(parsed.notifications);
      setClipboardAutoClear(parsed.clipboardAutoClear ?? false);
    }
  }, []);

  const saveSettings = (key: string, value: boolean) => {
    const newSettings = {
      autoCopy: key === 'autoCopy' ? value : autoCopy,
      darkMode: key === 'darkMode' ? value : darkMode,
      notifications: key === 'notifications' ? value : notifications,
      clipboardAutoClear: key === 'clipboardAutoClear' ? value : clipboardAutoClear,
    };
    localStorage.setItem('securepass_settings', JSON.stringify(newSettings));
    
    if (key === 'autoCopy') setAutoCopy(value);
    if (key === 'darkMode') setDarkMode(value);
    if (key === 'notifications') setNotifications(value);
     if (key === 'clipboardAutoClear') setClipboardAutoClear(value);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="mb-2"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjeta General */}
        <SettingsCard 
          title="General" 
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
        >
          <ToggleItem 
            label="Copia Automática" 
            description="Copiar al portapapeles al generar."
            checked={autoCopy}
            onChange={(checked) => saveSettings('autoCopy', checked)}
          />
          <ToggleItem 
            label="Notificaciones" 
            description="Alertas visuales de acciones."
            checked={notifications}
            onChange={(checked) => saveSettings('notifications', checked)}
          />
          <ToggleItem 
            label="Limpiar portapapeles (30s)" 
            description="Vacía el portapapeles automáticamente."
            checked={clipboardAutoClear}
            onChange={(checked) => saveSettings('clipboardAutoClear', checked)}
          />
        </SettingsCard>

        {/* Tarjeta Apariencia */}
        <SettingsCard 
          title="Apariencia" 
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          }
        >
          <ToggleItem 
            label="Modo Oscuro" 
            description="Interfaz de alto contraste (Beta)."
            checked={darkMode}
            disabled={true}
            onChange={(checked) => saveSettings('darkMode', checked)}
          />
          <div className="pt-2">
            <div className="text-sm font-medium text-gray-900 mb-3">Tema de Acento</div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 ring-4 ring-blue-100 cursor-pointer transition-transform hover:scale-110"></div>
              <div className="w-10 h-10 rounded-full bg-purple-500 cursor-pointer hover:ring-4 hover:ring-purple-100 transition-all hover:scale-110"></div>
              <div className="w-10 h-10 rounded-full bg-emerald-500 cursor-pointer hover:ring-4 hover:ring-emerald-100 transition-all hover:scale-110"></div>
            </div>
          </div>
        </SettingsCard>

        {/* Tarjeta Cuenta */}
        <SettingsCard 
          title="Cuenta y Datos" 
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        >
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">UD</div>
              <div>
                <div className="text-sm font-bold text-gray-900">Usuario Demo</div>
                <div className="text-xs text-gray-500">Plan Gratuito</div>
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">Los datos se guardan localmente en tu navegador.</div>
          </div>
          <button className="w-full py-2.5 px-4 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Exportar mis datos
          </button>
        </SettingsCard>
      </div>
      
      <div className="border-t border-gray-100 pt-8 text-center">
        <p className="text-sm text-gray-400 font-medium">
          SecurePass v1.0.0 &bull; 2025
        </p>
      </div>
    </div>
  );
}

function SettingsCard({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      <div className="p-6 border-b border-gray-50 flex items-center gap-4">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="p-6 space-y-6 flex-grow">
        {children}
      </div>
    </div>
  );
}

function ToggleItem({ label, description, checked, onChange, disabled = false }: { 
  label: string, 
  description: string, 
  checked: boolean, 
  onChange: (c: boolean) => void,
  disabled?: boolean
}) {
  return (
    <div className={`flex items-start justify-between ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
      <div className="space-y-0.5">
        <div className="text-sm font-bold text-gray-900">{label}</div>
        <div className="text-xs text-gray-500 font-medium">{description}</div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer shrink-0 ml-4">
        <input 
          type="checkbox" 
          className="sr-only peer"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
}
