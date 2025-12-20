import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

/**
 * Layout principal que envuelve todas las páginas
 * Incluye Navbar fijo y Footer
 */
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col animate-gradient">
      {/* Partículas de fondo globales */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-48 -left-48 animate-float" />
        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -bottom-48 -right-48 animate-float animation-delay-2000" />
      </div>

      <Navbar />

      {/* Contenedor de contenido dinámico */}
      <main className="flex-grow pt-24 pb-12 px-4 relative z-10 flex flex-col items-center">
        <div className="w-full max-w-4xl animate-slideUp">
          <Outlet />
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
