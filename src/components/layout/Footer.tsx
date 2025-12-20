/**
 * Componente Footer minimalista y profesional
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-6 px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span>&copy; {currentYear} SecurePass.</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span>Privacidad Total.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-primary transition-colors">Documentación</a>
          <a href="#" className="hover:text-primary transition-colors">Soporte</a>
          <div className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Sistema Online
          </div>
        </div>
      </div>
    </footer>
  );
}
