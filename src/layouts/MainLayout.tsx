import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import NotificationModal from '../components/layout/NotificationModal';
import FooterModal from '../components/layout/FooterModal';

/**
 * Layout "Floating Dashboard"
 * Estilo moderno tipo tarjeta flotante
 */
export default function MainLayout() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  return (
    <div className="app-container">
      <div className={`dashboard-card dashboard-card--wide animate-scaleIn`}>
        {/* Columna Izquierda: Sidebar */}
        <Sidebar />

        {/* Columna Central: Contenido Principal */}
        <div className="flex flex-col min-w-0 min-h-0 bg-white/50 relative">
          <TopBar 
            onOpenNotifications={() => setShowNotifications(true)}
            onOpenFooter={() => setShowFooter(true)}
          />
          
          <main className="flex-1 overflow-y-auto custom-scrollbar px-8 pb-8 min-h-0">
            <div className="w-full">
              <Outlet />
            </div>
          </main>
        </div>

      </div>
      
      <NotificationModal open={showNotifications} onClose={() => setShowNotifications(false)} />
      <FooterModal open={showFooter} onClose={() => setShowFooter(false)} />
    </div>
  );
}
