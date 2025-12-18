import ListaConsejos from '../listas/ListaConsejos';

/**
 * Sección de consejos de seguridad
 */
export default function SeccionConsejos() {
  return (
    <div className="pt-4 border-t border-gray-200">
      <div className="flex items-start gap-3 text-sm text-gray-600">
        <span className="text-lg">💡</span>
        <div>
          <p className="font-medium mb-1">Consejos de seguridad:</p>
          <ListaConsejos />
        </div>
      </div>
    </div>
  );
}
