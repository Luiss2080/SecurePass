import { useHistory } from '../../hooks/useHistory';
import CopyButton from '../ui/CopyButton';

export default function RecentHistoryWidget() {
  const { history } = useHistory();
  const recentItems = history.slice(0, 5);

  if (recentItems.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Historial Reciente
      </h3>
      <div className="space-y-3">
        {recentItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors">
            <div className="flex flex-col min-w-0 pr-4">
              <span className="text-sm font-mono text-gray-600 truncate">
                {item.password.substring(0, 16)}...
              </span>
              <span className="text-xs text-gray-400">
                {new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit' }).format(item.timestamp)}
              </span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <CopyButton text={item.password} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
