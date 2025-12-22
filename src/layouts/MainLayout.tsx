import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import RightSidebar from '../components/layout/RightSidebar';
import TopBar from '../components/layout/TopBar';
import Footer from '../components/layout/Footer';

/**
 * Layout "Floating Dashboard"
 * Estilo moderno tipo tarjeta flotante
 */
export default function MainLayout() {
  return (
    <div className="app-container">
      <div className="dashboard-card animate-scaleIn">
        {/* Columna Izquierda: Sidebar */}
        <Sidebar />

        {/* Columna Central: Contenido Principal */}
        <div className="flex flex-col min-w-0 bg-white/50 relative">
          <TopBar />
          
          <main className="flex-1 overflow-y-auto custom-scrollbar px-8 pb-8">
            <div className="w-full">
              <Outlet />
            </div>
          </main>

          <Footer />
        </div>

        {/* Columna Derecha: Panel Lateral */}
        <RightSidebar />
      </div>
    </div>
  );
}
