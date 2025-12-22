import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import GeneratorPage from './pages/GeneratorPage';
import AboutPage from './pages/AboutPage';
import AnalyzerPage from './pages/AnalyzerPage';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import DocsPage from './pages/DocsPage';
import SupportPage from './pages/SupportPage';
import StatusPage from './pages/StatusPage';
import TipsPage from './pages/TipsPage';

/**
 * Componente principal que define el enrutamiento
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<GeneratorPage />} />
          <Route path="analyzer" element={<AnalyzerPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="docs" element={<DocsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="status" element={<StatusPage />} />
          <Route path="tips" element={<TipsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
