export default function StatusPage() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Estado del Sistema
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Información de disponibilidad y rendimiento.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <div className="text-sm font-bold text-gray-900 mb-1">Disponibilidad</div>
          <div className="text-xs text-green-700 bg-green-100 inline-flex items-center px-2 py-1 rounded-full font-bold">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Online
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
          <div className="text-sm font-bold text-gray-900 mb-1">Latencia</div>
          <div className="text-xs text-gray-500">Baja • estable</div>
        </div>
      </div>
    </div>
  );
}
