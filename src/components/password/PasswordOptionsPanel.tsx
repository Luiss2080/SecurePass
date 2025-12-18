import { PasswordOptions } from '../../types/password.types';
import { PASSWORD_LENGTH } from '../../constants/password.constants';
import CheckboxOption from '../ui/CheckboxOption';

interface PasswordOptionsPanelProps {
  options: PasswordOptions;
  onOptionsChange: (options: PasswordOptions) => void;
}

/**
 * Panel de configuración de opciones para la generación de contraseñas
 */
export default function PasswordOptionsPanel({ options, onOptionsChange }: PasswordOptionsPanelProps) {
  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onOptionsChange({ ...options, length: parseInt(e.target.value) });
  };

  const toggleOption = (key: keyof Omit<PasswordOptions, 'length'>) => {
    onOptionsChange({ ...options, [key]: !options[key] });
  };

  return (
    <div className="space-y-6 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
        <span className="text-2xl">⚙️</span>
        Configuración
      </h3>

      {/* Control de longitud */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label htmlFor="length" className="text-sm font-medium text-gray-700">
            Longitud de la contraseña
          </label>
          <span className="text-lg font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-lg">
            {options.length}
          </span>
        </div>
        <input
          id="length"
          type="range"
          min={PASSWORD_LENGTH.MIN}
          max={PASSWORD_LENGTH.MAX}
          value={options.length}
          onChange={handleLengthChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>{PASSWORD_LENGTH.MIN}</span>
          <span>20</span>
          <span>{PASSWORD_LENGTH.MAX}</span>
        </div>
      </div>

      {/* Opciones de caracteres */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700 mb-3">Incluir caracteres:</p>
        
        <CheckboxOption
          id="uppercase"
          label="Mayúsculas (A-Z)"
          checked={options.includeUppercase}
          onChange={() => toggleOption('includeUppercase')}
          example="ABC"
        />
        
        <CheckboxOption
          id="lowercase"
          label="Minúsculas (a-z)"
          checked={options.includeLowercase}
          onChange={() => toggleOption('includeLowercase')}
          example="abc"
        />
        
        <CheckboxOption
          id="numbers"
          label="Números (0-9)"
          checked={options.includeNumbers}
          onChange={() => toggleOption('includeNumbers')}
          example="123"
        />
        
        <CheckboxOption
          id="symbols"
          label="Símbolos (!@#$%)"
          checked={options.includeSymbols}
          onChange={() => toggleOption('includeSymbols')}
          example="!@#"
        />
      </div>
    </div>
  );
}
