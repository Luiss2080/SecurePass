/**
 * Partículas decorativas de fondo
 */
export default function ParticulasFondo() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -top-48 -left-48 animate-float" />
      <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl -bottom-48 -right-48 animate-float animation-delay-2000" />
    </div>
  );
}
