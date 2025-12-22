/**
 * Página "Acerca de"
 * Estilo Hero Moderno
 */
export default function AboutPage() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold">Privacidad</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-bold">Seguridad</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-bold">Open Source</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
            <span className="text-2xl">🔒</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Privacidad Total</h2>
          <p className="text-gray-600 leading-relaxed">
            SecurePass genera contraseñas criptográficamente seguras directamente en tu navegador. 
            <strong>Ningún dato sale de tu dispositivo.</strong> Todo el proceso ocurre localmente usando la Web Crypto API.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
            <span className="text-2xl">⚡</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Open Source</h2>
          <p className="text-gray-600 leading-relaxed">
            Creemos en la transparencia. El código es completamente auditable, lo que significa que puedes confiar en que no hay puertas traseras, rastreadores ni scripts ocultos.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Stack Tecnológico</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TechItem name="React 19" />
          <TechItem name="TypeScript" />
          <TechItem name="Tailwind CSS v4" />
          <TechItem name="Vite" />
          <TechItem name="Web Crypto API" />
          <TechItem name="Lucide Icons" />
        </div>
      </div>
    </div>
  );
}

function TechItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-600 font-medium">
      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
      {name}
    </div>
  );
}
