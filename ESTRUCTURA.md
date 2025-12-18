# 📁 Estructura del Proyecto SecurePass

## Organización de Carpetas

```
SecurePass/
│
├── 📂 public/                  # Archivos estáticos
│
├── 📂 src/                     # Código fuente
│   │
│   ├── 📂 components/          # Componentes React
│   │   │
│   │   ├── 📂 layout/         # Componentes de diseño/estructura
│   │   │   ├── Header.tsx      # Encabezado principal
│   │   │   ├── Footer.tsx      # Pie de página
│   │   │   └── SecurityTips.tsx # Consejos de seguridad
│   │   │
│   │   ├── 📂 password/       # Componentes de contraseñas
│   │   │   ├── PasswordDisplay.tsx        # Muestra la contraseña
│   │   │   ├── PasswordOptionsPanel.tsx   # Panel de configuración
│   │   │   └── StrengthMeter.tsx         # Medidor de fuerza
│   │   │
│   │   └── 📂 ui/             # Componentes UI reutilizables
│   │       ├── CopyButton.tsx             # Botón copiar
│   │       ├── GenerateButton.tsx         # Botón generar
│   │       └── CheckboxOption.tsx         # Checkbox personalizado
│   │
│   ├── 📂 hooks/              # Custom React Hooks
│   │   ├── usePasswordGenerator.ts  # Hook principal de generación
│   │   └── useCopyToClipboard.ts    # Hook para copiar
│   │
│   ├── 📂 services/           # Lógica de negocio
│   │   └── passwordGenerator.service.ts  # Algoritmos de generación
│   │
│   ├── 📂 types/              # Definiciones TypeScript
│   │   └── password.types.ts        # Interfaces y tipos
│   │
│   ├── 📂 constants/          # Constantes y configuraciones
│   │   └── password.constants.ts    # Valores constantes
│   │
│   ├── 📄 App.tsx             # Componente raíz
│   ├── 📄 main.tsx            # Punto de entrada
│   └── 📄 index.css           # Estilos globales + animaciones
│
├── 📄 index.html              # HTML principal
├── 📄 package.json            # Dependencias
├── 📄 tsconfig.json           # Configuración TypeScript
├── 📄 vite.config.ts          # Configuración Vite
├── 📄 tailwind.config.ts      # Configuración Tailwind
├── 📄 postcss.config.js       # Configuración PostCSS
└── 📄 README.md               # Documentación

```

## 🎯 Responsabilidades por Carpeta

### 📂 `components/`
Componentes React organizados por funcionalidad:

#### `layout/` - Estructura de la página
- Componentes de nivel superior
- Header, Footer, layouts generales

#### `password/` - Funcionalidad específica
- Todo relacionado con contraseñas
- Display, configuración, medidor

#### `ui/` - Componentes reutilizables
- Botones, inputs, checkboxes
- Sin lógica de negocio específica

---

### 📂 `hooks/`
Custom hooks de React:
- Encapsulan lógica con estado
- Reutilizables entre componentes
- Siguen el patrón `use*`

---

### 📂 `services/`
Lógica de negocio pura:
- Funciones sin estado
- Algoritmos y cálculos
- Independientes de React

---

### 📂 `types/`
Definiciones TypeScript:
- Interfaces
- Types
- Enums
- Type-safety completo

---

### 📂 `constants/`
Valores constantes:
- Configuraciones
- Umbrales
- Strings constantes
- No cambian en runtime

---

## 🔄 Flujo de Datos

```
┌─────────────────────────────────────────────────┐
│                    App.tsx                      │
│  (Componente principal - Orquestador)          │
└─────────────────┬───────────────────────────────┘
                  │
                  ├─> usePasswordGenerator()
                  │   └─> services/passwordGenerator
                  │       └─> constants/
                  │           └─> types/
                  │
                  ├─> Components (presentación)
                  │   ├─> layout/
                  │   ├─> password/
                  │   └─> ui/
                  │       └─> useCopyToClipboard()
                  │
                  └─> Estilos (index.css)
```

## 📦 Módulos y Dependencias

```
types/ ◄─── constants/ ◄─── services/ ◄─── hooks/ ◄─── components/ ◄─── App.tsx
   └──────────┴─────────────────┴──────────┴──────────────┴────────────┘
              (Dependencias fluyen hacia arriba)
```

### Regla de Dependencias:
- `types/` → No depende de nada
- `constants/` → Solo de `types/`
- `services/` → De `types/` y `constants/`
- `hooks/` → De `services/`, `constants/`, `types/`
- `components/` → De todo lo anterior
- `App.tsx` → Orquesta todo

---

## ✨ Ventajas de esta Estructura

### ✅ Separación de Responsabilidades
Cada archivo tiene un propósito claro y único.

### ✅ Escalabilidad
Fácil agregar nuevas funcionalidades sin afectar el código existente.

### ✅ Mantenibilidad
Código organizado es fácil de encontrar y modificar.

### ✅ Reutilización
Componentes y hooks son reutilizables en otros proyectos.

### ✅ Testing
Cada módulo puede ser testeado independientemente.

### ✅ Type Safety
TypeScript garantiza tipos correctos en toda la aplicación.

---

## 🎨 Convenciones de Nomenclatura

- **Componentes**: `PascalCase.tsx`
- **Hooks**: `use*.ts`
- **Services**: `*.service.ts`
- **Types**: `*.types.ts`
- **Constants**: `*.constants.ts`
- **Carpetas**: `lowercase/`

---

## 🚀 Buenas Prácticas Implementadas

1. **Single Responsibility**: Cada archivo/función hace una sola cosa
2. **DRY** (Don't Repeat Yourself): Código reutilizable
3. **Separation of Concerns**: UI separada de lógica
4. **Type Safety**: TypeScript en todo el proyecto
5. **Performance**: useMemo, useCallback para optimización
6. **Accessibility**: ARIA labels, semántica HTML
7. **Responsive**: Mobile-first design

---

**Estructura creada siguiendo las mejores prácticas de React y TypeScript** ⚛️
