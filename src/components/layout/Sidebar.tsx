import { Link, useLocation } from 'react-router-dom';

/**
 * Componente Sidebar para navegación lateral
 * Estilo moderno, oscuro y profesional
 */
export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path 
      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
      : 'text-gray-400 hover:text-white hover:bg-white/5';
  };

  const navItems = [
    {
      path: '/',
      label: 'Generador',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.542 6.356a6 6 0 015.743-7.743A2 2 0 0115 7zm-5 10v4a1 1 0 001 1h2a1 1 0 001-1v-4M6 20h12a1 1 0 001-1v-4a1 1 0 00-1-1H6a1 1 0 00-1 1v4a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      path: '/about',
      label: 'Acerca de',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-sidebar text-sidebar-foreground border-r border-white/10 hidden md:flex flex-col z-50">
      {/* Logo Area */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg shadow-lg shadow-primary/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">SecurePass</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
          Menu Principal
        </div>
        
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 font-medium ${isActive(item.path)}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* User / Footer Area */}
      <div className="p-4 border-t border-white/10 bg-black/20">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-xs font-bold text-white">
            SP
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">Usuario</p>
            <p className="text-xs text-gray-400">Versión 1.0.0</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
