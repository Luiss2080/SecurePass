/**
 * Efecto visual de brillo animado
 */
export default function EfectoBrillo() {
  return (
    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer" />
    </div>
  );
}
