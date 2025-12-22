import { Link } from 'react-router-dom';

export default function FooterModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute left-0 right-0 bottom-0 mx-auto w-full max-w-4xl bg-white rounded-t-3xl shadow-2xl border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="text-sm font-bold text-gray-900">Información y Enlaces</div>
          <button onClick={onClose} className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 grid sm:grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-bold text-gray-900 mb-2">Recursos</div>
            <div className="flex flex-wrap gap-2">
              <Link to="/docs" onClick={onClose} className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-sm hover:bg-gray-100">Documentación</Link>
              <Link to="/support" onClick={onClose} className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-sm hover:bg-gray-100">Soporte</Link>
              <Link to="/status" onClick={onClose} className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-sm hover:bg-gray-100">Estado</Link>
              <Link to="/tips" onClick={onClose} className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-sm hover:bg-gray-100">Consejos</Link>
            </div>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900 mb-2">Sistema</div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Online
              </div>
              <div className="text-xs text-gray-500">Versión 1.0.0</div>
              <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} SecurePass</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
