import { useLocation, Link } from 'react-router-dom';

export default function TopBar({ onOpenNotifications, onOpenFooter }: { onOpenNotifications?: () => void, onOpenFooter?: () => void }) {
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
    <header className="h-20 flex items-center justify-between px-8 bg-white/70 backdrop-blur-md border-b border-white/30 shadow-sm shrink-0 relative">
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
        {onOpenNotifications && (
          <button
            onClick={onOpenNotifications}
            className="p-2 rounded-xl bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            title="Notificaciones"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        )}
        {onOpenFooter && (
          <button
            onClick={onOpenFooter}
            className="p-2 rounded-xl bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            title="Información y enlaces"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        )}
        <Link to="/settings" className="p-2 rounded-xl bg-white text-gray-700 border border-gray-200 hover:bg-gray-50" title="Configuración">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </Link>
        <Link to="/docs" className="p-2 rounded-xl bg-white text-gray-700 border border-gray-200 hover:bg-gray-50" title="Documentación">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-7-9-7-9 7 9 7z" />
          </svg>
        </Link>
        
        <div className="p-2 rounded-xl bg-white border border-gray-200 text-gray-700" title="Usuario">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </header>
  );
}
