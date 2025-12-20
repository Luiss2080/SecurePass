import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';

/**
 * Layout principal actualizado con Sidebar y estilo profesional
 */
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar fijo para desktop */}
      <Sidebar />

      {/* Contenedor principal ajustado al sidebar */}
      <div className="flex-1 flex flex-col md:pl-64 min-h-screen transition-all duration-300">
        
        {/* Contenido principal scrolleable */}
        <main className="flex-grow p-6 md:p-12 overflow-y-auto">
          <div className="max-w-5xl mx-auto w-full animate-fadeIn">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
