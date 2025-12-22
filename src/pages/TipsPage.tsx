import SecurityTips from '../components/layout/SecurityTips';

export default function TipsPage() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Consejos de Seguridad
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Mejores prácticas para proteger tus cuentas.
        </p>
      </div>
      <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
        <SecurityTips />
      </div>
    </div>
  );
}
