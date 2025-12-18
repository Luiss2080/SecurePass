/**
 * Sección de consejos de seguridad
 */
export default function SecurityTips() {
  return (
    <div className="pt-4 border-t border-gray-200">
      <div className="flex items-start gap-3 text-sm text-gray-600">
        <span className="text-lg">💡</span>
        <div>
          <p className="font-medium mb-1">Consejos de seguridad:</p>
          <ul className="space-y-1 text-xs">
            <li>• Usa contraseñas de al menos 12 caracteres</li>
            <li>• Combina mayúsculas, minúsculas, números y símbolos</li>
            <li>• No reutilices contraseñas entre diferentes servicios</li>
            <li>• Utiliza un gestor de contraseñas confiable</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
