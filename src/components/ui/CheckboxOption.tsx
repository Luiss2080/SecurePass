interface CheckboxOptionProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  example: string;
}

/**
 * Componente checkbox personalizado con estilos y ejemplo visual
 */
export default function CheckboxOption({ id, label, checked, onChange, example }: CheckboxOptionProps) {
  return (
    <label
      htmlFor={id}
      className={`
        flex items-center justify-between p-3 rounded-lg cursor-pointer
        transition-all duration-200 border-2
        ${checked 
          ? 'bg-purple-50 border-purple-300 shadow-sm' 
          : 'bg-gray-50 border-gray-200 hover:border-gray-300'
        }
      `}
    >
      <div className="flex items-center gap-3">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
        />
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <span className={`
        text-xs font-mono px-2 py-1 rounded
        ${checked ? 'bg-purple-200 text-purple-700' : 'bg-gray-200 text-gray-500'}
      `}>
        {example}
      </span>
    </label>
  );
}
