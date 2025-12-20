import { Link, useLocation } from 'react-router-dom';

/**
 * Componente de barra de navegación principal
 */
export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-white/20 shadow-lg' : 'hover:bg-white/10';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">SecurePass</span>
          </Link>

          {/* Enlaces de navegación */}
          <div className="hidden md:flex items-center gap-2">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 ${isActive('/')}`}
            >
              Generador
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 ${isActive('/about')}`}
            >
              Acerca de
            </Link>
          </div>

          {/* Botón móvil (Hamburguesa) - Simplificado por ahora */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg text-white hover:bg-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
