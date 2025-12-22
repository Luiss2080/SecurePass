import RecentHistoryWidget from '../password/RecentHistoryWidget';

export default function NotificationModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-6 top-20 w-[420px] max-w-[90vw] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div className="text-sm font-bold text-gray-900">Notificaciones</div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="space-y-3">
            <div className="p-3 bg-red-50 rounded-2xl border border-red-100 flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Contraseña débil</p>
                <p className="text-[10px] text-gray-500 leading-tight mt-1">Tu última contraseña fue vulnerada en 3s.</p>
              </div>
            </div>
            <div className="p-3 bg-green-50 rounded-2xl border border-green-100 flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Seguridad Alta</p>
                <p className="text-[10px] text-gray-500 leading-tight mt-1">Has generado 5 contraseñas fuertes hoy.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-gray-900 mb-3">Historial Reciente</div>
            <RecentHistoryWidget />
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
            <div className="relative z-10">
              <h4 className="font-bold text-sm mb-1">Activa 2FA</h4>
              <p className="text-xs text-blue-100 mb-3">La autenticación de dos pasos añade una capa extra.</p>
              <button className="px-3 py-1.5 bg-white text-blue-600 text-xs font-bold rounded-lg shadow-sm hover:bg-blue-50">
                Saber más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
