import { ReactNode } from 'react';

interface PropiedadesTarjetaContenido {
  children: ReactNode;
}

/**
 * Tarjeta blanca para contener el contenido principal
 */
export default function TarjetaContenido({ children }: PropiedadesTarjetaContenido) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 space-y-6 animate-slideUp">
      {children}
    </div>
  );
}
