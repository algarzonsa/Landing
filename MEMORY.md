# memory.md: Memoria del proyecto Landing Giunti Psychometrics

> Léelo al iniciar cada sesión (primero PROGRESS y DECISIONS). Actualízalo en la misma tarea en que cambies código, datos, estilos o configuración, antes de darla por terminada.
> Reglas: solo añadir o corregir entradas; no borrar ni reescribir el historial.
> Si prefieres archivos separados, cada sección equivale a `memory/PROGRESS.md`, `memory/DECISIONS.md`, `memory/ASSUMPTIONS.md` y `memory/CHANGELOG.md`.

Última actualización: 2026-11-25

---

## 1. PROGRESS: Estado por sección y versión

### Fases del plan

| Fase | Estado |
|---|---|
| 1. Análisis de la referencia + decisiones de diseño (tokens, componentes, dataset JSON) | ✅ |
| 2. Versión A completa + verificación (build, lint, tipos, responsive, a11y) | ✅ |
| 3. Versión B con mismo diseño y dataset + verificación | ⬜ |
| 4. Comparación visual A vs B y ajustes de paridad | ⬜ |
| 5. READMEs, limpieza, `.gitignore`, `.env.example` | ⬜ |
| 6. Despliegue (opcional) y checklist final | ⬜ |

### Secciones por versión

| Sección | Versión A (Next.js) | Versión B (Laravel) |
|---|---|---|
| Header (franja de utilidades, nav, "Accedi", buscador, menú móvil) | ✅ | ⬜ |
| Hero (título, descripción, CTA, imagen de fondo con velo de legibilidad) | ✅ | ⬜ |
| Grilla de productos (cards, 3/2/1 col) | ✅ | ⬜ |
| Filtro por categoría + buscador combinados, vacío y contador | ✅ | ⬜ |
| Formulario de contacto (validación + éxito) | ✅ | ⬜ |
| Footer | ✅ | ⬜ |
| Dataset JSON (≥ 8 productos, ≥ 3 categorías) | ✅ | ⬜ |
| Mejoras propuestas (%, carrito, orden) | ✅ | ⬜ |
| README de la versión | ⬜ | ⬜ |

### Verificaciones

| Verificación | A | B |
|---|---|---|
| Build | ✅ | ⬜ |
| Lint / `tsc --noEmit` (solo A) | ✅ | n/a |
| Responsive 375 / 768 / 1280+ | ✅ | ⬜ |
| Accesibilidad (teclado, foco, contraste, alt) | ✅ | ⬜ |
| Lighthouse (Perf ≥ 90, A11y ≥ 95) | ✅ | ⬜ |

### Entregables

- ⬜ Repositorio GitHub con `/version-a` y `/version-b`
- ⬜ Acceso compartido con matias@adipa.cl
- ⬜ README general (índice)
- ⬜ (Extra) Despliegue de A (Vercel) y B (Railway/Render) con URLs públicas

---

## 2. DECISIONS: Decisiones técnicas y de diseño

Formato: fecha · decisión · motivo.

| Fecha | Decisión | Motivo |
|---|---|---|
| 2026-11-24 | `prueba-tecnica-frontend-requisitos.md` prevalece sobre `BRIEF-PROYECTO-GIUNTI.md` ante cualquier conflicto | Es la fuente oficial (transcripción del PDF original) |
| 2026-11-24 | Orden de fuentes de verdad: prueba → brief → referencia visual (solo estructura y patrones) | Evitar copiar textos, imágenes o marcas protegidas |
| 2026-11-24 | Colores solo como tokens (Primario `#1B4F8A`, Texto `#0F2D52`, Acento `#0EA5E9`, Fondo `#EFF6FF`); sin hex sueltos | Mantener consistencia y paridad entre A y B |
| 2026-11-24 | Textos visibles en italiano; README, comentarios y comunicación en español | Requisito de la prueba y del brief |
| 2026-11-24 | Monorepo con `/version-a` y `/version-b` | Permitido por la prueba; facilita compartir acceso y comparar |
| 2026-11-24 | Versión A: Next 16.4.6 + React 19.3 + Tailwind 4.3.3 | Última versión estable; cumple Next 14+/Tailwind 3+; tokens con `@theme` y Turbopack |
| 2026-11-24 | Mejoras: % de descuento en card, mini-carrito con contador y orden por precio/nombre | Elegidas por el cliente entre las opciones del brief |
| 2026-11-24 | Imágenes de producto descargadas a `/public` en WebP (no URLs remotas) | Sin dependencia de red, mejor rendimiento y reutilización directa en B |
| 2026-11-24 | Memoria en `MEMORY.md` único, con las cuatro secciones internas | Decisión del cliente; evita duplicación, se registra la desviación respecto a `/memory/` de AGENTS.md |
| 2026-11-24 | Tipografías: Newsreader (display) + IBM Plex Sans (texto/UI) | Identidad editorial científica distinta de la referencia; paridad futura con Google Fonts en B |
| 2026-11-24 | Fondo de página: retícula de 72 px + lavado radial de acento | Motivo de hoja de registro psicométrica, sutil y coherente con la marca |
| 2026-11-24 | Header: buscador y "Accedi" abren diálogos nativos; el carrito vacío informa su estado | Evitar controles muertos; "Accedi" sigue siendo solo visual como pide la prueba |
| 2026-11-24 | Simplificación moderada: 9 productos en lugar de 12, sin scripts de sincronización, sin persistencia compleja | Principio de código limpio, solid y patrones de diseño manteniendo simplicidad moderada |
| 2026-11-24 | Componentes reusables: `Navbar.tsx` y `NavbarMobile.tsx` creados, importados en `Header.tsx`, regla añadida a AGENTS.md sobre separar elementos en componentes reusables | Evita duplicación de estructura, facilita mantenimiento, coherente con los principios de simplicidad y código profesional |
| 2026-11-24 | Franja de Black Friday en Header: "Black Friday" (#F9CE23), "Sconti fino al -30%", "Scopri le offerte" centralizados | Cambio de diseño aplicado siguiendo principios de branding, centralización y espaciado sólido |
| 2026-11-25 | Enlace a sección Test sobre "Black Friday" en el Header, con `target="_blank"` y `rel="noopener noreferrer"` | Evitar que la página externa acceda a `window.opener`; abrir la referencia sin perder la demo |
| 2026-11-25 | Franja superior de utilidades dentro del `<header>` sticky (envío + Corporate/Aiuto + desplegable de plataformas), separada por 1px con token `--color-line` | Replicar la estructura de la referencia sin copiar textos/marcas; divisor con token, no hex |
| 2026-11-25 | `PlatformMenu` reutilizable (props `label`, `links`, `variant`, `onNavigate`); abre con hover, foco y click, cierra con `Escape`; datos en `data/navigation.ts` | Componente reutilizable y accesible por teclado; fuente única de datos |
| 2026-11-25 | En móvil (<768 px) los enlaces Corporate/Aiuto/plataformas pasan al menú hamburguesa | Evitar desbordes a 375 px y garantizar objetivos táctiles |
| 2026-11-25 | Hero con degradado lavanda → azul marino: vertical en pantallas apiladas (<1024 px) y horizontal en desktop; token nuevo `--color-lavender: #E9E6F8` y azul marino reutilizando `--color-primary-dark` | El corte responsive mantiene el texto siempre sobre lavanda (contraste AA): en desktop el texto se limita a la columna izquierda; en móvil el navy queda bajo la tarjeta opaca |
| 2026-11-25 | Ajuste de paleta del Hero: lavanda → violeta `--color-violet: #D8CAF5` y azul marino → `--color-primary` (`#1B4F8A`) | Petición del cliente; el violeta claro mantiene contraste AA con `ink-soft` (~4.8:1) y el azul primario refuerza la identidad de marca |
| 2026-11-25 | Descuentos en verde claro: tokens `--color-success: #15803D` y `--color-success-soft: #DCFCE7`; precio rebajado en verde y badge `−%` con fondo verde suave | Petición del cliente; el verde de texto sobre blanco (~5:1) y sobre el fondo suave (~4.6:1) cumple AA |
| 2026-11-25 | Hero con imagen de fondo `public/images/header/bg-header.jpg` vía `next/image` (`fill`, `priority`, `alt=""`) y velo `.hero-overlay` con `color-mix` de `--color-paper` | La imagen violeta/teal no da contraste al texto; el velo claro mantiene AA y deja ver la textura. `next/image` optimiza el LCP |

### Decisiones pendientes

- Build tool de la Versión B: Laravel Mix o Gulp (elegir y justificar).
- Versión de Tailwind en A: 3 o 4.
- Mejoras a implementar (2 o 3) de: % de descuento en card, mini carrito con contador, ordenar por precio/nombre, filtros combinados con contador, persistencia de filtros en URL.
- Formato del dataset compartido (un único JSON) y cómo lo consume B (JSON servido a la vista o array PHP).
- Versiones exactas de Node, PHP y Composer.

**Resueltas el 2026-11-24:** Tailwind 4; mejoras (%, mini-carrito, orden); imágenes locales; memoria única; Node 24.20.0 y npm 12.2.0. Siguen pendientes el formato final del dataset y el build tool de B; PHP y Composer aún no están instalados.

---

## 3. ASSUMPTIONS: Supuestos documentados

(Se copiarán luego al README de cada versión.)

| # | Supuesto | Fecha |
|---|---|---|
| 1 | Todos los datos (productos, autores, precios, fechas) son ficticios; ningún nombre de test real ni material protegido | 2026-11-24 |
| 2 | Las imágenes de producto provienen de Unsplash (placeholders); cada una con `alt` descriptivo | 2026-11-24 |
| 3 | El botón "Accedi" es solo visual (no funcional) | 2026-11-24 |
| 4 | El formulario de contacto no tiene backend; el envío solo muestra el estado de éxito | 2026-11-24 |
| 5 | Los íconos de redes sociales del footer son placeholders | 2026-11-24 |
| 6 | El logo es el texto "Giunti Psychometrics" (placeholder) | 2026-11-24 |
| 7 | Si el brief y la prueba difieren, se aplica la prueba y se registra en DECISIONS | 2026-11-24 |
| 8 | El wordmark y la marca gráfica (curva de distribución) son propios; no se reproduce el logo de Giunti | 2026-11-24 |
| 9 | Las anclas `#risorse` y `#contatti` se crearán en las fases siguientes; hasta entonces no resuelven | 2026-11-24 |
| 10 | Los diálogos de "Accedi" y "Carrello" son demostrativos y no tienen backend | 2026-11-24 |
| 11 | El umbral de envío gratuito (120 €) y los textos comerciales de la demo son ficticios | 2026-11-24 |

---

## 4. CHANGELOG: Registro de cambios

Formato: fecha · cambio · archivos.

| Fecha | Cambio | Archivos |
|---|---|---|
| 2026-11-24 | Creación del contexto inicial del agente (fuentes de verdad, restricciones, flujo, definición de terminado) | `agent.md` |
| 2026-11-24 | Creación de la memoria inicial del proyecto | `memory.md` |
| 2026-11-24 | Inicialización de Git y scaffold de la Versión A (Next 16.4.6, React 19.3, Tailwind 4.3.3, TS strict, sin `src/`) | `version-a/`, `.gitignore` |
| 2026-11-24 | Design system: tokens de color/tipografía/radios, fondo editorial con retícula, layout raíz en italiano y fuentes Newsreader + IBM Plex Sans | `version-a/app/globals.css`, `version-a/app/layout.tsx` |
| 2026-11-24 | Header completo: barra de anuncio, marca propia, nav, buscador, "Accedi" y carrito con diálogos accesibles, menú móvil; hero con titular e índice de ámbitos | `version-a/components/layout/*`, `version-a/components/sections/Hero.tsx`, `version-a/components/ui/*`, `version-a/app/page.tsx`, `version-a/data/*`, `version-a/types/catalog.ts` |
| 2026-11-24 | Script `typecheck` y `.gitignore` raíz; build, lint y tipos verificados sin errores | `version-a/package.json`, `.gitignore` |
| 2026-11-24 | Correcciones tras revisión visual en 375/768/1280: "Accedi" oculto correctamente en móvil, sin desbordes horizontales, menú opaco, objetivos táctiles de 44 px y curva de la marca suavizada | `version-a/components/layout/*`, `version-a/components/ui/button-styles.ts`, `version-a/components/layout/BrandMark.tsx` |
| 2026-11-24 | Simplificación moderada: consolidación a 9 productos, estructura de componentes plana, dataset tipado único, eliminación de capas innecesarias; tipos discriminados test/curso, validador de datos en compilación, filtros por categoría y búsqueda client-side, orden por precio/nombre, carrito con diálogo, formulario con validación accesible, footer con enlaces completos. | `version-a/components/*`, `version-a/data/*`, `version-a/lib/*`, `version-a/types/*` |
| 2026-11-24 | Build, lint y tipos verificados sin errores; Lighthouse captura en 375/768/1280; dataset con 9 productos reales (4 categorías, test+curso); dialogs nativos accesibles | `version-a/app/`, `version-a/components/`, `version-a/data/`, `version-a/lib/`, `version-a/types/` |
| 2026-11-25 | Enlace a https://www.giuntipsy.com/it-it/test sobre "Black Friday" en el Header, en pestaña nueva | `version-a/components/Header.tsx` |
| 2026-11-25 | `BrandMark` usa `guinti-logo.png` local (`public/images/header/`) con `next/image` en lugar del SVG | `version-a/components/BrandMark.tsx` |
| 2026-11-25 | Franja de utilidades (`TopBar`), desplegable `PlatformMenu`, fila reutilizable `NavLinkRow` y datos `TOP_BAR_LINKS`/`PLATFORM_LINKS`; enlaces movidos al menú móvil. Verificación: typecheck/lint/build ✅ | `version-a/components/TopBar.tsx`, `version-a/components/PlatformMenu.tsx`, `version-a/components/NavLinkRow.tsx`, `version-a/components/NavbarMobile.tsx`, `version-a/components/Header.tsx`, `version-a/components/Icons.tsx`, `version-a/data/navigation.ts`, `AGENTS.md` |
| 2026-11-25 | Hero: degradado lavanda → azul marino con clase reutilizable `.hero-backdrop`, token `--color-lavender`; tarjeta lateral opaca sin blur. Verificación: typecheck/lint/build ✅ | `version-a/components/Hero.tsx`, `version-a/app/globals.css`, `AGENTS.md` |
| 2026-11-25 | Hero: paleta ajustada a violeta `#D8CAF5` → azul primario `#1B4F8A` (token renombrado a `--color-violet`). Verificación: build ✅ | `version-a/app/globals.css`, `AGENTS.md` |
| 2026-11-25 | Descuentos en verde: precio rebajado `text-success` y badge `−%` en `bg-success-soft` con texto verde; tokens `--color-success`/`--color-success-soft`. Verificación: build ✅ | `version-a/components/ProductCard.tsx`, `version-a/app/globals.css`, `AGENTS.md` |
| 2026-11-25 | Hero: fondo reemplazado por `bg-header.jpg` con `next/image` (`fill`, `priority`) y velo `.hero-overlay` responsive en lugar del degradado. Verificación: typecheck/lint/build ✅ | `version-a/components/Hero.tsx`, `version-a/app/globals.css` |