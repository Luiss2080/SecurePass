/**
 * Página "Acerca de"
 */
export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
          Sobre SecurePass
        </h1>
        <p className="text-white/90 text-lg">
          La seguridad y privacidad son nuestra prioridad
        </p>
      </div>

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">¿Qué es SecurePass?</h2>
          <p className="text-gray-600 leading-relaxed">
            SecurePass es una herramienta moderna diseñada para generar contraseñas criptográficamente seguras
            directamente en tu navegador. A diferencia de otros generadores, <strong>todo el proceso ocurre en tu dispositivo</strong>.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
            <h3 className="font-bold text-indigo-700 mb-2 flex items-center gap-2">
              <span className="text-xl">🔒</span> Privacidad Total
            </h3>
            <p className="text-sm text-gray-600">
              Tus contraseñas nunca se envían a ningún servidor. Se generan localmente usando la API Web Crypto de tu navegador.
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
            <h3 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
              <span className="text-xl">⚡</span> Open Source
            </h3>
            <p className="text-sm text-gray-600">
              El código es transparente y auditable. Puedes confiar en que no hay puertas traseras ni rastreadores ocultos.
            </p>
          </div>
        </div>

        <section className="space-y-4 pt-4">
          <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Tecnologías</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>React 19 & TypeScript</li>
            <li>Tailwind CSS v4</li>
            <li>Web Crypto API</li>
            <li>Vite</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
