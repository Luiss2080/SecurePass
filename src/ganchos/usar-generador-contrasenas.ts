import { useState, useCallback, useMemo } from 'react';
import { OpcionesContrasena } from '../tipos/contrasena.tipos';
import { generarContrasena } from '../servicios/generador-contrasenas.servicio';
import { calcularFortalezaContrasena } from '../servicios/analizador-fortaleza.servicio';
import { OPCIONES_CONTRASENA_DEFECTO } from '../configuracion/inicial/opciones-defecto';
import { DURACIONES_ANIMACION } from '../configuracion/valores/tiempos';

/**
 * Hook personalizado para manejar la generación de contraseñas
 */
export function usarGeneradorContrasenas() {
  const [contrasena, setContrasena] = useState('');
  const [opciones, setOpciones] = useState<OpcionesContrasena>(OPCIONES_CONTRASENA_DEFECTO);
  const [generando, setGenerando] = useState(false);

  // Calcular fortaleza de la contraseña (memoizado)
  const fortalezaContrasena = useMemo(() => {
    return calcularFortalezaContrasena(contrasena);
  }, [contrasena]);

  // Generar nueva contraseña
  const generarNuevaContrasena = useCallback(() => {
    setGenerando(true);
    
    setTimeout(() => {
      const nuevaContrasena = generarContrasena(opciones);
      setContrasena(nuevaContrasena);
      setGenerando(false);
    }, DURACIONES_ANIMACION.RETRASO_GENERACION);
  }, [opciones]);

  // Actualizar opciones
  const actualizarOpciones = useCallback((nuevasOpciones: OpcionesContrasena) => {
    setOpciones(nuevasOpciones);
  }, []);

  return {
    contrasena,
    opciones,
    fortalezaContrasena,
    generando,
    generarNuevaContrasena,
    actualizarOpciones,
    setContrasena,
  };
}
