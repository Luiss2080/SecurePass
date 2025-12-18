# 🔐 SecurePass - Generador de Contraseñas Seguras

Una aplicación web moderna para generar contraseñas seguras y aleatorias con React, TypeScript y TailwindCSS.

## ✨ Características

- ✅ Generación de contraseñas aleatorias usando Crypto API
- ✅ Configuración personalizable (longitud, tipos de caracteres)
- ✅ Medidor de fuerza de contraseña con colores dinámicos
- ✅ Copiar al portapapeles con un clic
- ✅ Animaciones suaves y modernas
- ✅ Diseño responsive (móvil y escritorio)
- ✅ 100% local - sin envío de datos a servidores

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── layout/         # Componentes de diseño
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── SecurityTips.tsx
│   ├── password/       # Componentes específicos de contraseñas
│   │   ├── PasswordDisplay.tsx
│   │   ├── PasswordOptionsPanel.tsx
│   │   └── StrengthMeter.tsx
│   └── ui/             # Componentes UI reutilizables
│       ├── CopyButton.tsx
│       ├── GenerateButton.tsx
│       └── CheckboxOption.tsx
├── hooks/              # Custom React Hooks
│   ├── usePasswordGenerator.ts
│   └── useCopyToClipboard.ts
├── services/           # Lógica de negocio
│   └── passwordGenerator.service.ts
├── types/              # Tipos TypeScript
│   └── password.types.ts
├── constants/          # Constantes y configuraciones
│   └── password.constants.ts
├── styles/             # Estilos globales
│   └── index.css
├── App.tsx            # Componente principal
└── main.tsx           # Punto de entrada
```

## 🏗️ Arquitectura

### Separación de Responsabilidades

#### 1. **Types** (`types/`)
Definiciones de tipos TypeScript para type-safety completo.

```typescript
// password.types.ts
export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  // ...
}
```

#### 2. **Constants** (`constants/`)
Valores constantes, configuraciones y umbrales.

```typescript
// password.constants.ts
export const CHARSET = {
  LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
  // ...
}
```

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
