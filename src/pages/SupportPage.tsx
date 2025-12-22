export default function SupportPage() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Soporte
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Contacto y ayuda para resolver problemas.
        </p>
      </div>
      <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="text-sm font-bold text-gray-900">Correo</div>
            <div className="text-xs text-gray-500">soporte@securepass.app</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-bold text-gray-900">FAQ</div>
            <div className="text-xs text-gray-500">Preguntas frecuentes y soluciones rápidas.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
