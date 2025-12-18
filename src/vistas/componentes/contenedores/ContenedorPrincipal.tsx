import { ReactNode } from 'react';
import ParticulasFondo from '../fondos/ParticulasFondo';

interface PropiedadesContenedorPrincipal {
  children: ReactNode;
}

/**
 * Contenedor principal con gradiente y partículas de fondo
 */
export default function ContenedorPrincipal({ children }: PropiedadesContenedorPrincipal) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4 animate-gradient">
      <ParticulasFondo />
      {children}
    </div>
  );
}
