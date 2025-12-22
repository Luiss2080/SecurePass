import { Link, useLocation } from 'react-router-dom';

/**
 * Componente Sidebar para navegación lateral
 * Estilo moderno Dashboard (Light/Clean)
 */
export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path 
      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
      : 'text-slate-400 hover:text-white hover:bg-white/5';
  };

  const navItems = [
    {
      path: '/',
      label: 'Generador',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      path: '/analyzer',
      label: 'Analizador',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      path: '/history',
      label: 'Historial',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      path: '/settings',
      label: 'Configuración',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <aside className="h-full flex flex-col py-8 px-6 border-r border-slate-800 bg-slate-900 text-white overflow-y-auto custom-scrollbar">
      {/* Logo Area */}
      <div className="mb-10 px-2 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">SecurePass</h1>
          <p className="text-xs text-slate-400 font-medium">Pro Security</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">
          Menu
        </div>
        
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 font-semibold text-sm ${isActive(item.path)}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}

        <div className="mt-8 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">
          Recursos
        </div>
        
        <Link
          to="/docs"
          className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 font-semibold text-sm ${isActive('/docs')}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-7-9-7-9 7 9 7z" />
          </svg>
          <span>Documentación</span>
        </Link>
        <Link
          to="/support"
          className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 font-semibold text-sm ${isActive('/support')}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13v6a2 2 0 01-2 2H8l-4 3V6a2 2 0 012-2h8" />
          </svg>
          <span>Soporte</span>
        </Link>
        <Link
          to="/status"
          className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 font-semibold text-sm ${isActive('/status')}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Estado</span>
        </Link>
        <Link
          to="/tips"
          className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 font-semibold text-sm ${isActive('/tips')}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Consejos</span>
        </Link>
        <div className="mt-8 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-3">
          Otros
        </div>
        <Link
          to="/about"
          className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 font-semibold text-sm ${isActive('/about')}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Acerca de</span>
        </Link>
      </nav>

      {/* Footer / User Area */}
      <div className="mt-auto pt-6">
        <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">
            U
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-gray-900 truncate">Usuario Demo</p>
            <p className="text-xs text-blue-600 truncate">Pro Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
