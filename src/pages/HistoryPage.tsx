import { useHistory } from '../hooks/useHistory';
import CopyButton from '../components/ui/CopyButton';
import { useState } from 'react';

export default function HistoryPage() {
  const { history, clearHistory, deleteItem } = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStrength, setFilterStrength] = useState<'all' | 'weak' | 'medium' | 'strong'>('all');

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
    if (strength <= 2) return { text: 'Débil', class: 'bg-red-100 text-red-700' };
    if (strength === 3) return { text: 'Media', class: 'bg-yellow-100 text-yellow-700' };
    return { text: 'Fuerte', class: 'bg-green-100 text-green-700' };
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header con estadísticas */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Historial de Generación
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Gestiona tus credenciales generadas recientemente.
          </p>
        </div>
        
        {history.length > 0 && (
          <button
            onClick={() => {
              if (window.confirm('¿Estás seguro de que quieres borrar todo el historial?')) {
                clearHistory();
              }
            }}
            className="px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors flex items-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Borrar Todo
          </button>
        )}
      </div>

      {/* Barra de Herramientas */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text"
            placeholder="Buscar contraseña..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <FilterButton active={filterStrength === 'all'} onClick={() => setFilterStrength('all')} label="Todas" />
          <FilterButton active={filterStrength === 'strong'} onClick={() => setFilterStrength('strong')} label="Fuertes" color="green" />
          <FilterButton active={filterStrength === 'medium'} onClick={() => setFilterStrength('medium')} label="Medias" color="yellow" />
          <FilterButton active={filterStrength === 'weak'} onClick={() => setFilterStrength('weak')} label="Débiles" color="red" />
        </div>
      </div>

      {/* Lista de Resultados */}
      {filteredHistory.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">No se encontraron resultados</h3>
          <p className="text-gray-500">Prueba ajustando los filtros o genera nuevas contraseñas.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-semibold text-gray-900">Contraseña</th>
                  <th className="px-6 py-4 font-semibold text-gray-900 w-32">Fuerza</th>
                  <th className="px-6 py-4 font-semibold text-gray-900 w-48">Fecha</th>
                  <th className="px-6 py-4 font-semibold text-gray-900 w-24 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredHistory.map((item) => {
                  const strengthInfo = getStrengthLabel(item.strength);
                  return (
                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-4 font-mono text-gray-700 break-all text-base">
                        {item.password}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${strengthInfo.class}`}>
                          {strengthInfo.text}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500">
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

function FilterButton({ active, onClick, label, color = 'gray' }: { active: boolean, onClick: () => void, label: string, color?: string }) {
  const activeClass = 
    color === 'green' ? 'bg-green-100 text-green-700 border-green-200' :
    color === 'red' ? 'bg-red-100 text-red-700 border-red-200' :
    color === 'yellow' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' :
    'bg-gray-900 text-white border-gray-900';

  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all whitespace-nowrap ${
        active 
          ? activeClass
          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
      }`}
    >
      {label}
    </button>
  );
}
