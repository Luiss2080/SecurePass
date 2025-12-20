import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import GeneratorPage from './pages/GeneratorPage';
import AboutPage from './pages/AboutPage';

/**
 * Componente principal que define el enrutamiento
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<GeneratorPage />} />
          <Route path="about" element={<AboutPage />} />
          {/* Aquí se pueden agregar más rutas progresivamente */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
