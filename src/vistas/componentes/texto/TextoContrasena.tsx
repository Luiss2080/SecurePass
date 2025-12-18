interface PropiedadesTextoContrasena {
  contrasena: string;
}

/**
 * Componente que muestra el texto de la contraseña
 */
export default function TextoContrasena({ contrasena }: PropiedadesTextoContrasena) {
  if (!contrasena) {
    return (
      <p className="text-gray-400 text-center italic animate-pulse">
        Tu contraseña segura aparecerá aquí
      </p>
    );
  }

  return (
    <p className="text-2xl md:text-3xl font-mono font-bold text-gray-800 break-all text-center select-all animate-slideIn">
      {contrasena}
    </p>
  );
}
