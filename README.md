# Portafolio Personal

Un portafolio personal moderno y responsivo construido con Next.js, React, TypeScript, Tailwind CSS y Framer Motion.

## Características

- **Diseño Moderno**: Interfaz limpia y minimalista inspirada en los mejores portafolios
- **Tema Automático**: Cambio automático de tema según la hora del día (oscuro por la noche, claro durante el día)
- **Responsive**: Diseño completamente adaptable a todos los dispositivos
- **Animaciones Suaves**: Transiciones fluidas con Framer Motion
- **SEO Optimizado**: Meta tags y estructura semántica para mejor indexación
- **Accesible**: Cumple con estándares de accesibilidad web

## Stack Tecnológico

- **Next.js 14** con App Router
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **STIX Two Text** (fuente principal)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal con metadata y fuente
│   ├── page.tsx            # Página de inicio
│   ├── HomeClient.tsx      # Componente cliente de la home
│   ├── portfolio/
│   │   ├── page.tsx        # Lista de proyectos
│   │   └── PortfolioClient.tsx
│   └── projects/
│       └── [slug]/
│           ├── page.tsx    # Página individual de proyecto
│           └── ProjectClient.tsx
├── components/
│   ├── Navigation.tsx      # Componente de navegación
│   └── ThemeProvider.tsx   # Provider del sistema de temas
├── lib/
│   ├── projects.ts         # Datos de proyectos
│   └── useTheme.ts         # Hook para cambio de tema
└── app/globals.css         # Estilos globales y variables CSS
```

## Personalización

### Cambiar Información Personal

1. **Nombre y Descripción**: Edita `app/HomeClient.tsx`
2. **Redes Sociales**: Actualiza los links en `app/HomeClient.tsx`
3. **Proyectos**: Modifica `lib/projects.ts` para agregar tus proyectos

### Ajustar Tema

Los colores del tema se pueden ajustar en `app/globals.css` modificando las variables CSS:
- `--color-background`
- `--color-foreground`
- `--color-primary`
- etc.

### Agregar Proyectos

Edita `lib/projects.ts` y sigue la estructura del tipo `Project`:

```typescript
{
  slug: 'mi-proyecto',
  title: 'Título del Proyecto',
  shortDescription: 'Descripción breve',
  contexto: { ... },
  proceso: { ... },
  solucion: { ... },
  impacto: { ... } // opcional
}
```

## Build para Producción

```bash
npm run build
npm start
```

## Licencia

MIT

