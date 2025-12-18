# 🔐 SecurePass

<div align="center">

![SecurePass Banner](https://img.shields.io/badge/SecurePass-Generador_de_Contraseñas-blueviolet?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### 🎯 Generador de Contraseñas Seguras y Aleatorias

**Crea contraseñas ultra-seguras en segundos | 100% privado | Sin servidor**

[🚀 Demo en Vivo](#) · [📖 Documentación](DOCUMENTACION_INDEX.md) · [🐛 Reportar Bug](#)

</div>

---

## ✨ ¿Qué es SecurePass?

**SecurePass** es un generador de contraseñas **moderno, seguro y completamente privado** que funciona directamente en tu navegador. Sin servidores, sin bases de datos, sin riesgos. Tus contraseñas nunca salen de tu dispositivo.

### 🎯 Características Principales

<table>
<tr>
<td width="50%">

#### 🔒 **Seguridad Total**
- ✅ Generación con **Crypto API**
- ✅ Totalmente **offline**
- ✅ Sin almacenamiento externo
- ✅ Código **open source**

</td>
<td width="50%">

#### ⚡ **Súper Rápido**
- ✅ Generación **instantánea**
- ✅ Interfaz **reactiva**
- ✅ Copia con **un click**
- ✅ **0 dependencias** externas

</td>
</tr>
<tr>
<td width="50%">

#### 🎨 **Diseño Moderno**
- ✅ Interfaz **intuitiva**
- ✅ Animaciones **suaves**
- ✅ Responsive **móvil/desktop**
- ✅ **Dark mode** ready

</td>
<td width="50%">

#### 🛠️ **Personalizable**
- ✅ Longitud **8-32 caracteres**
- ✅ Mayúsculas/minúsculas
- ✅ Números y símbolos
- ✅ Medidor de **fortaleza**

</td>
</tr>
</table>

---

## 🚀 Demo Interactiva

```
┌──────────────────────────────────────────────────┐
│  🔐 SecurePass                                   │
│  Generador de Contraseñas Seguras y Aleatorias  │
├──────────────────────────────────────────────────┤
│                                                  │
│  📋  Xk9#mP2@vL5$wN8qR                         │
│                                                  │
│  ████████████████████░░  85% - Fuerte           │
│                                                  │
│  [ 🔄 Generar Nueva ]  [ 📋 Copiar ]            │
│                                                  │
│  ⚙️ Configuración                               │
│  ├─ Longitud: ████████░░░░ 16                  │
│  ├─ ☑ Mayúsculas (A-Z)                         │
│  ├─ ☑ Minúsculas (a-z)                         │
│  ├─ ☑ Números (0-9)                            │
│  └─ ☑ Símbolos (!@#$%)                         │
│                                                  │
│  💡 Consejos de seguridad                       │
│  • Usa contraseñas de al menos 12 caracteres    │
│  • Combina diferentes tipos de caracteres       │
│  • No reutilices contraseñas                    │
└──────────────────────────────────────────────────┘
```

---

## 📦 Instalación Rápida

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/securepass.git
---

## 📂 Estructura del Proyecto

```
SecurePass/
├── 📁 configuracion/    (15 archivos) - Valores, estilos, mensajes
├── 📁 logica/           (10 archivos) - Lógica de negocio
├── 📁 servicios/        (3 archivos)  - Orquestadores
├── 📁 vistas/           (31 archivos) - Componentes React
├── 📁 ganchos/          (3 archivos)  - React Hooks
├── 📁 utilidades/       (9 archivos)  - Funciones helper
├── 📁 estilos/          (7 archivos)  - Clases CSS
└── 📁 tipos/            (2 archivos)  - Interface
### Personalización Avanzada
```typescript
// Ajusta la configuración en:
src/configuracion/inicial/opciones-defecto.ts

export const OPCIONES_CONTRASENA_DEFECTO = {
  longitud: 16,           // 8-32
  incluirMayusculas: true,
  incluirMinusculas: true,
  incluirNumeros: true,
  incluirSimbolos: true,
};
```

---

## 🏗️ Tecnologías

<div align="center">

| Frontend | Estilos | Build | Lenguaje |
|----------|---------|-------|----------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat) | ![Tailwind](https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwind-css&logoColor=white&style=flat) | ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat) | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=flat) |

</div>

### Stack Técnico Completo

- **React 18.3** - Librería UI moderna
- **TypeScript 5.5** - Tipado estático
- **Tailwind CSS 3.4** - Estilos utility-first
- **Vite 5.4** - Build tool ultrarrápido
- **Crypto API** - Generación aleatoria segura



**📊 +60 archivos modulares** organizados en **español**

👉 [Ver estructura completa](ARBOL_PROYECTO.md) | [Guía de organización](GUIA_ESTRUCTURA.md)

---

## 🌟 Características Técnicas

### 🔐 Seguridad
- **Crypto API nativa** para máxima aleatoriedad
- **Sin dependencias** de librerías externas
- **Sin tracking** ni analytics
- **100% client-side** - tus datos nunca se envían

### ⚡ Performance
- **Generación instantánea** (<10ms)
- **Tree-shaking** automático
- **Lazy loading** de componentes
- **Bundle optimizado** (<100kb)

### 🎨 UX/UI
- **Animaciones fluidas** con Tailwind
- **Responsive design** mobile-first
- **Feedback visual** instantáneo
- **Accesibilidad** WCAG 2.1

### 🧩 Arquitectura
- **Modular** - 60+ archivos pequeños
- **Tipado fuerte** - 100% TypeScript
- **Separación de responsabilidades**
- **Fácil de mantener** y escalar

---

## 📖 Documentación

| Documento | Descripción |
|-----------|-------------|
| [📚 Índice de Documentación](DOCUMENTACION_INDEX.md) | Punto de entrada a toda la documentación |
| [📊 Resumen de Reorganización](RESUMEN_REORGANIZACION.md) | Cambios y estadísticas del proyecto |
| [🌳 Árbol del Proyecto](ARBOL_PROYECTO.md) | Estructura visual completa |
| [🗂️ Guía de Estructura](GUIA_ESTRUCTURA.md) | Cómo está organizado el código |
| [🚀 Guía de Migración](GUIA_MIGRACION.md) | Cómo usar la nueva estructura |

---

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Producción
npm run build        # Build para producción
npm run preview      # Preview del build

# Linting
npm run lint         # Ejecutar ESLint
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! 

1. **Fork** el proyecto
2. Crea una **rama** (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add: nueva característica'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### Guías de Contribución
- Sigue la [estructura modular](GUIA_ESTRUCTURA.md)
- Usa **nombres en español**
- Mantén archivos **<100 líneas**
- Agrega **documentación**

---

## 🔒 Seguridad y Privacidad

### ✅ Qué HACE SecurePass
- Genera contraseñas en **tu navegador**
- Usa **Crypto API** del navegador
- Funciona **offline**

### ❌ Qué NO hace SecurePass
- ❌ NO envía datos a servidores
- ❌ NO almacena contraseñas
- ❌ NO usa analytics o tracking
- ❌ NO requiere registro

**Tu privacidad es 100% respetada.**

---

## 📊 Estadísticas del Proyecto

<div align="center">

![Files](https://img.shields.io/badge/Archivos-60+-blue?style=flat-square)
![Lines](https://img.shields.io/badge/Líneas-~2500-green?style=flat-square)
![Components](https://img.shields.io/badge/Componentes-25+-purple?style=flat-square)
![Language](https://img.shields.io/badge/Español-100%25-red?style=flat-square)

</div>

---

## 🗺️ Roadmap

- [x] Generador básico de contraseñas
- [x] Medidor de fortaleza
- [x] Interfaz responsive
- [x] Documentación completa
- [ ] Historial de contraseñas (opcional)
- [ ] Exportar/importar configuración
- [ ] PWA (Progressive Web App)
- [ ] Modo oscuro
- [ ] Múltiples idiomas

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

Creado con 💜 y mucho ☕

---

## 🙏 Agradecimientos

- **React Team** - Por la increíble librería
- **Tailwind CSS** - Por los estilos utility-first
- **Vite** - Por el build tool ultrarrápido
- **MDN Web Docs** - Por la documentación de Crypto API

---

<div align="center">

### ⭐ Si te gustó el proyecto, dale una estrella!

**[⬆ Volver arriba](#-securepass)**

---

**SecurePass** © 2025 | Hecho con ❤️ en español

</div>

#### 3. **Services** (`services/`)
Lógica de negocio pura, funciones sin estado.

```typescript
// passwordGenerator.service.ts
export function generatePassword(options: PasswordOptions): string
export function calculatePasswordStrength(password: string): PasswordStrength
```

#### 4. **Hooks** (`hooks/`)
Custom hooks de React para lógica reutilizable con estado.

```typescript
// usePasswordGenerator.ts
export function usePasswordGenerator() {
  // Lógica con useState, useMemo, useCallback
}
```

#### 5. **Components** (`components/`)
Componentes React organizados por funcionalidad:

- **layout/**: Componentes de estructura (Header, Footer)
- **password/**: Componentes específicos de contraseñas
- **ui/**: Componentes UI reutilizables

## 🎨 Optimizaciones de React

### Hooks Utilizados

- **useState**: Manejo de estado local
- **useEffect**: Efectos secundarios (generación inicial)
- **useMemo**: Memoización de cálculos costosos (fuerza de contraseña)
- **useCallback**: Memoización de funciones para evitar re-renders

### Ejemplo de Optimización

```typescript
// Cálculo memoizado - solo se recalcula cuando cambia la contraseña
const passwordStrength = useMemo(() => {
  return calculatePasswordStrength(password);
}, [password]);

// Función memoizada - mantiene la misma referencia
const generateNewPassword = useCallback(() => {
  const newPassword = generatePassword(options);
  setPassword(newPassword);
}, [options]);
```

## 🔒 Algoritmo de Generación

1. **Crypto API**: Usa `crypto.getRandomValues()` para verdadera aleatoriedad
2. **Validación**: Asegura al menos un carácter de cada tipo seleccionado
3. **Sin patrones**: Detecta y penaliza patrones comunes (123, abc, etc.)

### Cálculo de Fuerza

```
Puntuación = Longitud (40pts) + Variedad (60pts) - Penalizaciones
```

- **0-39**: Débil (rojo)
- **40-59**: Media (amarillo)
- **60-79**: Fuerte (verde)
- **80-100**: Muy Fuerte (esmeralda)

## 🎭 Animaciones

Animaciones CSS personalizadas en `index.css`:

- `fadeIn`: Aparición suave
- `slideIn`: Deslizamiento vertical
- `slideUp`: Entrada desde abajo
- `shimmer`: Efecto de brillo
- `float`: Flotación continua
- `wiggle`: Movimiento de balanceo

## 🛠️ Tecnologías

- **React 19**: Framework UI
- **TypeScript**: Type safety
- **Vite**: Build tool ultra-rápido
- **TailwindCSS 4**: Utilidades CSS
- **Crypto API**: Generación aleatoria segura

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`
- Grid y Flexbox para layouts adaptativos

## 🔐 Seguridad

- ✅ Generación 100% local (sin backend)
- ✅ Uso de Crypto API (no Math.random())
- ✅ Sin almacenamiento de contraseñas
- ✅ Sin envío de datos a servidores externos

## 📝 Licencia

MIT

## 👨‍💻 Autor

Desarrollado como proyecto de portafolio demostrando:
- Arquitectura limpia y escalable
- Buenas prácticas de React
- TypeScript avanzado
- UI/UX moderno

---

**Hecho con ❤️ y React**
