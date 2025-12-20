import RecentHistoryWidget from '../password/RecentHistoryWidget';

export default function RightSidebar() {
  return (
    <aside className="h-full flex flex-col py-8 px-6 border-l border-gray-100 bg-white/50 overflow-y-auto custom-scrollbar">
      {/* Notifications Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900">Notificaciones</h3>
          <button className="text-blue-500 hover:text-blue-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        
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
      </div>

      {/* Recent History Section */}
      <div className="mb-8">
        <h3 className="text-sm font-bold text-gray-900 mb-4">Historial Reciente</h3>
        <RecentHistoryWidget />
      </div>

      {/* Daily Tips / Friends Request Style */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900">Consejos Pro</h3>
          <button className="text-blue-500 hover:text-blue-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
          <div className="relative z-10">
            <h4 className="font-bold text-sm mb-1">Activa 2FA</h4>
            <p className="text-xs text-blue-100 mb-3">La autenticación de dos pasos añade una capa extra.</p>
            <button className="px-3 py-1.5 bg-white text-blue-600 text-xs font-bold rounded-lg shadow-sm hover:bg-blue-50 transition-colors">
              Saber más
            </button>
          </div>
        </div>
      </div>

    </aside>
  );
}
