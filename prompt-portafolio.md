# Prompt: Portafolio Personal

## Objetivo
Crear un portafolio personal moderno y responsivo usando Next.js, React, TypeScript, Tailwind CSS y Framer Motion. El portafolio debe tener un sistema de cambio de tema basado en la hora del día y una estructura clara para mostrar proyectos.

## Página Principal (Home)

La página principal debe incluir las siguientes secciones:

1. **Nombre**: Título principal con mi nombre
2. **Sobre mí**: Un párrafo breve describiendo quién soy y qué hago, que mencione mis trabajos y donde me pueden seguir

## Template de Proyectos del Portafolio

Cada proyecto del portafolio debe seguir esta estructura estándar:

1. **Título Principal**: Nombre del proyecto
2. **Contexto**: 
   - Descripción del problema que se resolvió
   - Objetivos del proyecto
3. **Proceso**:
   - Investigación realizada
   - Proceso de diseño
   - Iteraciones y cambios
4. **Solución**: 
   - Resultado final del proyecto
   - Tecnologías utilizadas
   - Capturas o demostraciones visuales
5. **Impacto** (opcional):
   - Métricas y resultados cuantificables
   - Logros alcanzados

## Características Técnicas

### Cambio de Tema según la Hora
- El portafolio debe cambiar automáticamente entre tema claro y oscuro según la hora del día
- Ejemplo: tema oscuro durante la noche (ej: 18:00 - 6:00) y tema claro durante el día (ej: 6:00 - 18:00)
- La transición debe ser suave usando animaciones

### Diseño Responsive
- El diseño debe ser completamente responsivo
- Funcionar perfectamente en dispositivos móviles, tablets y desktop
- Usar principios de diseño mobile-first

## Stack Tecnológico

### Dependencias Requeridas
- **Next.js**: Framework de React para producción
- **React**: Biblioteca de JavaScript
- **TypeScript**: Tipado estático para JavaScript
- **Tailwind CSS**: Framework de CSS utility-first
- **Framer Motion**: Biblioteca para animaciones fluidas
- **next/font** (o @next/font): Optimización de fuentes en Next.js

### Configuración Sugerida
- Usar App Router de Next.js (si es posible)
- Configurar Tailwind CSS con tema personalizado
- Implementar sistema de temas con variables CSS
- Optimizar fuentes con next/font
- Usar la tipografía **STIX Two Text** como fuente principal del portafolio

## Referencias de Diseño

Estudiar y tomar inspiración de:
- https://www.lovefrom.com/jony - Minimalismo, elegancia, tipografía
- https://leerob.com/ - Estructura clara, buen uso de secciones, diseño moderno

### Elementos a considerar de las referencias:
- Limpieza visual y espacio en blanco
- Tipografía cuidadosa
- Animaciones sutiles y fluidas
- Navegación intuitiva
- Experiencia de usuario pulida

## Requisitos Adicionales

1. **Performance**: Optimizar imágenes, código splitting, lazy loading
2. **SEO**: Meta tags apropiados, estructura semántica HTML
3. **Accesibilidad**: Buen contraste, navegación por teclado, aria labels
4. **Animaciones**: Usar Framer Motion para transiciones suaves entre páginas y elementos
5. **Estructura de archivos**: Organización clara y mantenible del código

## Estructura de Páginas Sugerida

```
/ (home)
  - Sección hero con nombre
  - Sobre mí que tenga Link al portafolio y a mis redes sociales

/portfolio o /projects
  - Lista de proyectos

/projects/[slug]
  - Página individual de proyecto usando el template definido
  - Navegación entre proyectos
  - Galería de imágenes/demos
```

## Consideraciones de Diseño

- Usar una paleta de colores coherente que funcione tanto en tema claro como oscuro
- Tipografía: Usar **STIX Two Text** como fuente principal del portafolio, con jerarquía visual clara y legibilidad óptima
- Espaciado consistente
- Iconos y elementos visuales sutiles que no distraigan del contenido
- Transiciones suaves al cambiar de tema

## Entregables Esperados

1. Código fuente completo del portafolio
2. Configuración de Next.js y Tailwind CSS
3. Componentes reutilizables
4. Sistema de cambio de tema basado en hora (automatico)
5. Template funcional para proyectos
6. Responsive design implementado
7. Animaciones básicas con Framer Motion