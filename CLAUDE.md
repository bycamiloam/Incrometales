# CLAUDE.md — Contexto del Proyecto Incrometales

## Descripción del Proyecto
Landing page de una sola página para **Incrometales**, empresa colombiana B2B con 39+ años fabricando exhibidores metálicos comerciales (góndolas, racks, stands, showrooms). El objetivo es generar leads vía WhatsApp y formulario de contacto.

## Tech Stack
| Tecnología | Uso |
|---|---|
| HTML5 | Estructura (una sola página) |
| CSS3 | Estilos separados por sección |
| JavaScript (vanilla) | Interactividad, sin frameworks |
| Tailwind CSS (CDN) | Clases utilitarias via `cdn.tailwindcss.com` |
| Lucide Icons (CDN) | Iconografía via `unpkg.com/lucide` |
| Google Fonts | Fuente Inter |

Sin bundler, sin framework, sin npm. Sitio estático puro.

## Estructura de Archivos
```
/
├── index.html          # Toda la estructura HTML: navbar, secciones, footer, whatsapp widget
├── css/
│   ├── globals.css     # Variables CSS, reset, clases de marca, animaciones
│   ├── navbar.css      # Navbar sticky con scroll detection
│   ├── hero.css        # Carrusel hero con cross-fade y barra de progreso
│   ├── products.css    # Grid de tarjetas de productos
│   ├── about.css       # Sección nosotros + bloques de estadísticas
│   ├── why-us.css      # Feature cards con industrial-pattern
│   ├── contact.css     # Formulario de contacto + tarjetas de info
│   └── footer.css      # Footer 4 columnas
├── js/
│   ├── navbar.js       # Scroll detection, menú móvil toggle
│   ├── hero.js         # Auto-rotate 6s, navegación de slides, barra de progreso, tabs
│   ├── contact.js      # Validación del formulario, estado de éxito
│   └── whatsapp.js     # Widget flotante con popup, enlace a wa.me
└── public/
    ├── logo.png
    ├── hero-pisos.jpg
    ├── hero-herramientas.jpg
    ├── hero-colchones.jpg
    └── hero-alimentos.jpg
```

## Navegación
- **Una sola ruta:** `/` (scroll navigation por anchor IDs)
- Secciones: `#inicio`, `#productos`, `#nosotros`, `#por-que-nosotros`, `#contacto`
- Función global `scrollToSection(id)` usada en botones de navbar, footer y CTAs

## Carga de Scripts
Orden definido al final del `<body>` en `index.html`:
1. `lucide.createIcons()` — inline, inicializa todos los iconos del DOM
2. `js/navbar.js`
3. `js/hero.js`
4. `js/contact.js`
5. `js/whatsapp.js`

## Sistema de Diseño
### Paleta de colores (variables CSS en `globals.css`)
- Cyan: `#13d3fd` (`--brand-cyan`)
- Azul: `#4f86f1` (`--brand-blue`)
- Magenta: `#661856` (`--brand-magenta`) — separadores de sección
- Surface dark: `#0d1b40` (`--surface-dark`)
- Surface darker: `#0a1535` (`--surface-darker`)
- Foreground: `#1e2d52`
- Muted: `#6b7db3`

### Clases CSS personalizadas (definidas en `globals.css`)
- `.brand-gradient` — background cian → azul
- `.brand-gradient-text` — texto con clip de gradiente
- `.section-divider` — barra magenta de 3px
- `.industrial-pattern` — fondo de rayas diagonales (usado en WhyUsSection)
- `.animate-fade-in` — fade-in con translateY

### Tipografía
- Fuente: **Inter** (Google Fonts, importada en `globals.css`)

## Contenido del Negocio
### Productos (5 categorías)
1. Exhibidores de Tablero Góndola
2. Exhibidores de Rollos
3. Exhibidores Multitarea
4. Exhibidores para Cerámicas y Pisos Laminados
5. Showrooms y Stands

### Hero slides (4)
- Pisos y Revestimientos
- Ferretería y Herramientas
- Muebles para Colchones
- Alimentos y Supermercados

### Propuestas de valor (WhyUsSection)
- Ingeniería de precisión
- Fabricación a la medida
- Estrategia comercial
- 39 años de respaldo

### Estadísticas (AboutSection)
- 39+ años de experiencia (desde 1986)
- 100% proyectos a la medida
- Décadas de calidad respaldada

### Información de contacto
- Teléfono fijo: 601 840 8810
- Móvil: 300 208 3904
- Ubicación: Colombia

## Decisiones de Implementación Importantes
1. **Sin backend:** El formulario de contacto solo muestra un estado de éxito visual (`#contact-success`) — no envía datos a ningún servidor.
2. **WhatsApp como CRM:** El CTA principal usa `wa.me` con mensaje prellenado.
3. **Contenido hardcodeado:** Slides, productos y features son estáticos en el HTML/JS.
4. **Tailwind por CDN:** No hay proceso de build. Se usa el CDN de Tailwind directamente.
5. **Lucide por CDN:** Los iconos se inicializan con `lucide.createIcons()` después de que el DOM carga.

## Convenciones de Código
- CSS por sección: cada sección tiene su propio archivo en `css/`
- JS por función: cada módulo de interactividad tiene su propio archivo en `js/`
- Variables CSS en `:root` para colores de marca (no Tailwind config)
- Estilos inline solo para gradientes dinámicos donde Tailwind no alcanza
