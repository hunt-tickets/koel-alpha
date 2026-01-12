# KOEL 2.0 🌱

El primer desodorante recargable de Colombia - **Sitio Web Oficial**

## ✨ Proyecto Limpio y Sin Bugs

Este es un **rewrite completo** del proyecto KOEL original, creado con una arquitectura sólida y sin las complejidades que causaban bugs. Todo ha sido pensado para ser mantenible, escalable y libre de errores.

## 🏗️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript 5 (Strict Mode)
- **Estilos**: Tailwind CSS v4 (CSS-first configuration)
- **Animaciones**: Framer Motion (solo donde es necesario)
- **Fuentes**: Inter, Space Grotesk, Outfit (Google Fonts)

## 📁 Arquitectura del Proyecto

```
koel2/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout principal con Header/Footer
│   ├── page.tsx             # Homepage
│   └── globals.css          # Estilos globales + tema KOEL
├── components/
│   ├── ui/                  # Componentes primitivos
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Input.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/            # Secciones de la landing
│       ├── Hero/
│       ├── ProductSystem/
│       ├── Tutorial/
│       ├── ValueProp/
│       └── FAQ/
├── lib/
│   ├── constants.ts         # Contenido y configuración
│   └── utils.ts             # Funciones utilitarias
└── public/
    ├── images/              # Imágenes organizadas
    ├── logos/               # Logos KOEL
    └── hero1.jpg, hero2.jpg # Imágenes hero
```

## 🎨 Sistema de Colores

```css
/* Colores Principales */
--color-koel-teal: #153439      /* Color principal */
--color-koel-aqua: #32A9AE      /* Color secundario */

/* Secundarios */
--color-koel-yellow: #E6E451
--color-koel-olive: #59693A
--color-koel-coral: #D5753C
--color-koel-pink: #B24866

/* Neutrals */
--color-koel-neutral-50: #FCF9F5  /* Off-white */
--color-koel-neutral-200: #D9D6C5 /* Beige */
--color-koel-neutral-900: #221615 /* Dark brown */
```

Usa estos colores en Tailwind como: `bg-koel-teal`, `text-koel-aqua`, etc.

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start

# Linting
npm run lint
```

## ✅ Diferencias Clave vs. KOEL Original

| Aspecto | KOEL Original | KOEL 2.0 |
|---------|---------------|----------|
| **Carousel** | Embla (complejo, buggy) | CSS scroll-snap (nativo, simple) |
| **Loading States** | AppStateProvider complejo | Sin loading screens innecesarios |
| **Hero Transitions** | Bugs de scroll y positioning | Crossfade simple con AnimatePresence |
| **Globals.css** | Caótico con muchas clases custom | Limpio, solo essentials |
| **Estructura** | Carpetas desorganizadas | Arquitectura clara por feature |
| **TypeScript** | Parcial | Strict mode completo |
| **Tailwind** | v3 con config.ts | v4 con CSS-first config |

## 📝 Secciones Implementadas

1. **Hero**: Carousel de imágenes con crossfade + CTA
2. **Product System**: Grid/Carousel responsivo de productos
3. **Tutorial**: Pasos 1-2-3 para recargar
4. **Value Prop**: 4 valores principales de KOEL
5. **FAQ**: Acordeón de preguntas frecuentes

## 🎯 Próximos Pasos

- [ ] Reemplazar placeholders de imágenes con assets reales
- [ ] Integrar Shopify Headless para e-commerce
- [ ] Agregar sección de Fragancias con más detalle
- [ ] Implementar formulario de newsletter funcional
- [ ] Agregar Analytics (Google/Plausible)
- [ ] Deploy a Vercel/Netlify

## 🐛 Zero Bugs

Este proyecto ha sido construido con:
- ✅ Build exitoso sin errores TypeScript
- ✅ Sin warnings de ESLint
- ✅ CSS scroll-snap nativo (no JS bugs)
- ✅ Animaciones optimizadas con Framer Motion
- ✅ Imágenes optimizadas con Next.js Image
- ✅ Responsive design probado mobile-first

## 📦 Assets Necesarios

Para completar el sitio, necesitas:

```
public/images/
├── products/
│   ├── refillable-system.jpg    # Sistema recargable
│   ├── starter-pack.jpg          # Pack de inicio
│   └── refill-pack.jpg           # Pack de recargas
└── tutorial/
    ├── step-1.jpg                # Paso 1: Abre
    ├── step-2.jpg                # Paso 2: Recarga
    └── step-3.jpg                # Paso 3: Disfruta
```

## 🤝 Contribuir

Este proyecto usa commits convencionales:
- `feat:` nuevas features
- `fix:` bug fixes
- `docs:` documentación
- `style:` formateo
- `refactor:` refactoring

## 📄 Licencia

© 2026 KOEL. Todos los derechos reservados.

---

**Hecho con ❤️ y sin bugs**
