import { useEffect } from 'react';
import { usarGeneradorContrasenas } from '../../ganchos/usar-generador-contrasenas';
import ContenedorPrincipal from '../componentes/contenedores/ContenedorPrincipal';
import TarjetaContenido from '../componentes/contenedores/TarjetaContenido';
import EncabezadoApp from '../componentes/encabezado/EncabezadoApp';
import PiePagina from '../componentes/pie/PiePagina';
import VisualizadorContrasena from './contrasena/VisualizadorContrasena';
import MedidorFortaleza from './fortaleza/MedidorFortaleza';
import BarraAcciones from '../componentes/barras/BarraAcciones';
import PanelConfiguracion from './configuracion/PanelConfiguracion';
import SeccionConsejos from '../componentes/secciones/SeccionConsejos';

/**
 * Pantalla principal de la aplicación SecurePass
 */
export default function PantallaPrincipal() {
  const {
    contrasena,
    opciones,
    fortalezaContrasena,
    generando,
    generarNuevaContrasena,
    actualizarOpciones,
  } = usarGeneradorContrasenas();

  // Generar contraseña inicial al montar el componente
  useEffect(() => {
    generarNuevaContrasena();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ContenedorPrincipal>
      <div className="relative max-w-4xl w-full">
        <EncabezadoApp />

        <TarjetaContenido>
          <VisualizadorContrasena 
            contrasena={contrasena} 
            nivel={fortalezaContrasena.nivel}
          />

          <MedidorFortaleza fortaleza={fortalezaContrasena} />

          <BarraAcciones 
            contrasena={contrasena}
            generando={generando}
            alGenerarNueva={generarNuevaContrasena}
          />

          <PanelConfiguracion 
            opciones={opciones} 
            alCambiarOpciones={actualizarOpciones} 
          />

          <SeccionConsejos />
        </TarjetaContenido>

        <PiePagina />
      </div>
    </ContenedorPrincipal>
  );
}
