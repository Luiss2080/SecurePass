import { useLocation } from 'react-router-dom';

export default function TopBar({ onToggleRightPanel, panelActive }: { onToggleRightPanel?: () => void, panelActive?: boolean }) {
  const location = useLocation();

  const getBreadcrumb = () => {
    const path = location.pathname;
    if (path === '/') return 'Generador';
    if (path === '/analyzer') return 'Analizador de Seguridad';
    if (path === '/history') return 'Historial';
    if (path === '/settings') return 'Configuración';
    if (path === '/about') return 'Acerca de';
    return '';
  };

  return (
    <header className="h-20 flex items-center justify-between px-8 bg-transparent shrink-0">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{getBreadcrumb()}</h2>
        <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
          <span>SecurePass</span>
          <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="font-medium text-blue-500">Dashboard</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm text-gray-600 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all w-64"
          />
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {onToggleRightPanel && (
          <button
            onClick={onToggleRightPanel}
            className={`px-3 py-2 rounded-xl text-sm font-bold transition-all border ${
              panelActive ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
            title="Panel de Notificaciones"
          >
            {panelActive ? 'Ocultar Panel' : 'Mostrar Panel'}
          </button>
        )}
      </div>
    </header>
  );
}
