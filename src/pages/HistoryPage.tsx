import { useHistory } from '../hooks/useHistory';
import CopyButton from '../components/ui/CopyButton';
import { useState } from 'react';

export default function HistoryPage() {
  const { history, clearHistory, deleteItem } = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStrength, setFilterStrength] = useState<'all' | 'weak' | 'medium' | 'strong'>('all');

  const total = history.length;
  const strongCount = history.filter(h => h.strength === 4).length;
  const weakCount = history.filter(h => h.strength <= 2).length;
  const avgStrength = total ? (history.reduce((acc, h) => acc + h.strength, 0) / total).toFixed(1) : '0.0';

  const filteredHistory = history.filter(item => {
    const matchesSearch = item.password.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStrength = 
      filterStrength === 'all' ? true :
      filterStrength === 'weak' ? item.strength <= 2 :
      filterStrength === 'medium' ? item.strength === 3 :
      item.strength === 4;
    return matchesSearch && matchesStrength;
  });

  const formatDate = (timestamp: number) => {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(timestamp));
  };

  const getStrengthLabel = (strength: number) => {
    if (strength <= 2) return { text: 'Débil', class: 'bg-red-50 text-red-700 border-red-100' };
    if (strength === 3) return { text: 'Media', class: 'bg-yellow-50 text-yellow-700 border-yellow-100' };
    return { text: 'Fuerte', class: 'bg-green-50 text-green-700 border-green-100' };
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Historial de Generación
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Gestiona tus credenciales generadas recientemente.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div className="text-xs font-bold text-gray-500">Total</div>
            <div className="text-2xl font-bold text-gray-900">{total}</div>
          </div>
          <div className="bg-green-50 rounded-2xl border border-green-100 p-4 shadow-sm">
            <div className="text-xs font-bold text-green-600">Fuertes</div>
            <div className="text-2xl font-bold text-gray-900">{strongCount}</div>
          </div>
          <div className="bg-red-50 rounded-2xl border border-red-100 p-4 shadow-sm">
            <div className="text-xs font-bold text-red-600">Débiles</div>
            <div className="text-2xl font-bold text-gray-900">{weakCount}</div>
          </div>
          <div className="bg-blue-50 rounded-2xl border border-blue-100 p-4 shadow-sm">
            <div className="text-xs font-bold text-blue-600">Promedio</div>
            <div className="text-2xl font-bold text-gray-900">{avgStrength}</div>
          </div>
        </div>
        {history.length > 0 && (
          <button
            onClick={() => {
              if (window.confirm('¿Estás seguro de que quieres borrar todo el historial?')) {
                clearHistory();
              }
            }}
            className="px-5 py-2.5 bg-white border border-red-100 text-red-600 rounded-xl text-sm font-bold hover:bg-red-50 transition-colors flex items-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Borrar Todo
          </button>
        )}
      </div>

      {/* Barra de Herramientas */}
      <div className="bg-white p-2 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-2 items-center justify-between">
        <div className="relative w-full md:w-96">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text"
            placeholder="Buscar contraseña..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-transparent rounded-2xl focus:bg-gray-50 outline-none transition-colors text-gray-900 placeholder-gray-400"
          />
        </div>
        
        <div className="flex items-center gap-1 w-full md:w-auto overflow-x-auto p-1">
          <FilterButton active={filterStrength === 'all'} onClick={() => setFilterStrength('all')} label="Todas" />
          <FilterButton active={filterStrength === 'strong'} onClick={() => setFilterStrength('strong')} label="Fuertes" color="green" />
          <FilterButton active={filterStrength === 'medium'} onClick={() => setFilterStrength('medium')} label="Medias" color="yellow" />
          <FilterButton active={filterStrength === 'weak'} onClick={() => setFilterStrength('weak')} label="Débiles" color="red" />
        </div>
      </div>

      {/* Lista de Resultados */}
      {filteredHistory.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">No se encontraron resultados</h3>
          <p className="text-gray-500 mt-1">Prueba ajustando los filtros o genera nuevas contraseñas.</p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Contraseña</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Fortaleza</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Fecha</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredHistory.map((item) => {
                  const strengthInfo = getStrengthLabel(item.strength);
                  return (
                    <tr key={item.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="font-mono text-lg font-medium text-gray-900 tracking-wide break-all">
                          {item.password}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${strengthInfo.class}`}>
                          {strengthInfo.text}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {formatDate(item.timestamp)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <CopyButton text={item.password} />
                          <button 
                            onClick={() => deleteItem(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="Eliminar"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterButton({ active, onClick, label, color = 'blue' }: { active: boolean, onClick: () => void, label: string, color?: string }) {
  const activeClasses = active 
    ? `bg-${color === 'blue' ? 'gray-900 text-white' : ''} ${color === 'green' ? 'bg-green-100 text-green-700' : ''} ${color === 'red' ? 'bg-red-100 text-red-700' : ''} ${color === 'yellow' ? 'bg-yellow-100 text-yellow-700' : ''}`
    : 'text-gray-500 hover:bg-gray-100';
    
  // Override for default black/white toggle style if not colored
  const finalClasses = active && color === 'blue' 
    ? 'bg-gray-900 text-white shadow-sm' 
    : active 
      ? activeClasses 
      : 'text-gray-500 hover:bg-gray-50';

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${finalClasses}`}
    >
      {label}
    </button>
  );
}
