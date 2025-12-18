interface PropiedadesOpcionCheck {
  id: string;
  etiqueta: string;
  marcado: boolean;
  alCambiar: () => void;
  ejemplo?: string;
}

/**
 * Componente de opción con checkbox
 */
export default function OpcionCheck({ 
  id, 
  etiqueta, 
  marcado, 
  alCambiar, 
  ejemplo 
}: PropiedadesOpcionCheck) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id={id}
          checked={marcado}
          onChange={alCambiar}
          className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
        />
        <label htmlFor={id} className="text-sm font-medium text-gray-700 cursor-pointer">
          {etiqueta}
        </label>
      </div>
      {ejemplo && (
        <span className="text-xs font-mono text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
          {ejemplo}
        </span>
      )}
    </div>
  );
}
