interface PropiedadesEtiquetaLongitud {
  longitud: number;
}

/**
 * Etiqueta que muestra la longitud actual
 */
export default function EtiquetaLongitud({ longitud }: PropiedadesEtiquetaLongitud) {
  return (
    <span className="text-lg font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-lg">
      {longitud}
    </span>
  );
}
