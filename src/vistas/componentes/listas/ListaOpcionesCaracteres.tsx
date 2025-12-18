import { OpcionesContrasena } from '../../../tipos/contrasena.tipos';
import OpcionCheck from '../selectores/OpcionCheck';

interface PropiedadesListaOpciones {
  opciones: OpcionesContrasena;
  alAlternarOpcion: (clave: keyof Omit<OpcionesContrasena, 'longitud'>) => void;
}

/**
 * Lista de opciones de caracteres disponibles
 */
export default function ListaOpcionesCaracteres({ 
  opciones, 
  alAlternarOpcion 
}: PropiedadesListaOpciones) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-gray-700 mb-3">Incluir caracteres:</p>
      
      <OpcionCheck
        id="mayusculas"
        etiqueta="Mayúsculas (A-Z)"
        marcado={opciones.incluirMayusculas}
        alCambiar={() => alAlternarOpcion('incluirMayusculas')}
        ejemplo="ABC"
      />
      
      <OpcionCheck
        id="minusculas"
        etiqueta="Minúsculas (a-z)"
        marcado={opciones.incluirMinusculas}
        alCambiar={() => alAlternarOpcion('incluirMinusculas')}
        ejemplo="abc"
      />
      
      <OpcionCheck
        id="numeros"
        etiqueta="Números (0-9)"
        marcado={opciones.incluirNumeros}
        alCambiar={() => alAlternarOpcion('incluirNumeros')}
        ejemplo="123"
      />
      
      <OpcionCheck
        id="simbolos"
        etiqueta="Símbolos (!@#$%)"
        marcado={opciones.incluirSimbolos}
        alCambiar={() => alAlternarOpcion('incluirSimbolos')}
        ejemplo="!@#"
      />
    </div>
  );
}
