export default function DocsPage() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Documentación
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Guías y recursos para usar SecurePass.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow" href="#" target="_blank" rel="noreferrer">
          <div className="text-sm font-bold text-gray-900 mb-1">Introducción</div>
          <div className="text-xs text-gray-500">Conceptos básicos y flujo de uso.</div>
        </a>
        <a className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow" href="#" target="_blank" rel="noreferrer">
          <div className="text-sm font-bold text-gray-900 mb-1">Generador</div>
          <div className="text-xs text-gray-500">Cómo configurar y generar contraseñas.</div>
        </a>
        <a className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow" href="#" target="_blank" rel="noreferrer">
          <div className="text-sm font-bold text-gray-900 mb-1">Analizador</div>
          <div className="text-xs text-gray-500">Entropía, pool de caracteres y tiempos.</div>
        </a>
      </div>
    </div>
  );
}
