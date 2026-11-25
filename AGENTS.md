# agent.md: Contexto del proyecto Landing Giunti Psychometrics

> Lee este archivo al iniciar **cada sesión**. Las reglas aplican a cada cambio.

## 1. Resumen del proyecto

Prueba técnica take-home (Frontend Developer) para **Giunti Psychometrics**: una landing de catálogo de productos (tests psicológicos y cursos de formación para profesionales) de **Giunti Psychometrics Italia**, en **dos versiones visualmente equivalentes**, que debe **superar** la referencia visual en calidad, navegación y rendimiento.

| Versión | Carpeta | Stack |
|---|---|---|
| A | `/version-a` | Next.js 14+ (App Router) · Tailwind CSS 3+/4 · TypeScript `strict: true` |
| B | `/version-b` | Laravel 9+ · Blade · Stylus · jQuery · Laravel Mix o Gulp |

Estructura del repo (monorepo):

```
/version-a   → Next.js
/version-b   → Laravel
/memory      → memoria del proyecto
/README.md   → índice general
/agent.md    → este archivo
```

Entregables: repo en GitHub, README por versión, acceso compartido con **matias@adipa.cl**. Extra: despliegue (Vercel para A; Railway/Render para B) con URLs públicas en el README.

## 2. Fuentes de verdad (orden de consulta)

Antes de planificar o modificar cualquier cosa, consulta en este orden:

1. `prueba-tecnica-frontend-requisitos.md`: fuente oficial; **prevalece ante cualquier conflicto**.
2. `BRIEF-PROYECTO-GIUNTI.md`: alcance detallado, plan de ejecución y definición de "terminado".
3. Referencia visual: https://www.giuntipsy.com/it-it/ (solo estructura y patrones; **no copiar textos, imágenes ni marcas**).

- Relee la parte pertinente al iniciar cada sesión y antes de cada cambio relevante, sin depender de conversaciones anteriores.
- Si una petición del usuario contradice estas fuentes, **avisa antes de ejecutar**.
- Si el brief y la prueba difieren, gana la prueba y lo registras en `memory/DECISIONS.md`.

## 3. Memoria del proyecto (actualizar siempre)

Mantén `/memory/` en la raíz del repo:

| Archivo | Contenido |
|---|---|
| `memory/PROGRESS.md` | Estado por sección y por versión (A/B): hecho, en curso, pendiente |
| `memory/DECISIONS.md` | Decisiones técnicas y de diseño, con fecha y motivo |
| `memory/ASSUMPTIONS.md` | Supuestos documentados (se copian luego al README) |
| `memory/CHANGELOG.md` | Cambio realizado, archivos afectados, fecha |

Reglas:
- Al iniciar sesión, lee primero `memory/PROGRESS.md` y `memory/DECISIONS.md`.
- Cada vez que modifiques código, datos, estilos o configuración, actualiza la memoria afectada **en la misma tarea, antes de darla por terminada**.
- Si no estás seguro de qué cambió, revisa `git diff` y actualiza.
- No elimines ni reescribas archivos de memoria; solo añade o corrige entradas.
- Si `/memory/` aún no existe, créala en la primera sesión con los cuatro archivos.

## 4. Limitaciones técnicas que nunca se rompen

### General
- Textos visibles en **italiano**; README, comentarios y comunicación con el usuario en **español**.
- Datos **ficticios**: mínimo **8 productos** y **3+ categorías** (*Clinica e Neuropsicologia*, *Scuola ed Età evolutiva*, *Lavoro e Organizzazioni*, *Formazione*). Sin nombres de tests reales ni material protegido.
- Campos por producto: `id`, `nome`, `autore/docente`, `categoria`, `formato` (Cartaceo | Digitale | Corso online | In presenza), `etaRange` (tests) o `dataInizio` (cursos), `prezzoOriginale`, `prezzoScontato`, `immagine` (Unsplash), `alt`.
- Datos en **una fuente única** (JSON/constantes), nunca hardcodeados en JSX/Blade.
- Precios en formato italiano: `1.250,00 €` (`Intl.NumberFormat('it-IT', {style:'currency', currency:'EUR'})` o equivalente).
- Tokens de color (sin hex sueltos):

| Token | Valor |
|---|---|
| Primario | `#1B4F8A` |
| Texto | `#0F2D52` |
| Acento | `#0EA5E9` |
| Fondo | `#EFF6FF` |

- Ambas versiones deben verse **esencialmente iguales**.
- Responsive: **375 px, 768 px, 1280 px+**. Grilla **3 / 2 / 1** columnas.
- Accesibilidad **WCAG 2.1 AA**: contraste (verificar texto sobre `#1B4F8A` y `#0EA5E9`), teclado, foco visible, skip link, `alt` en imágenes, landmarks semánticos, un solo `h1`.
- Rendimiento: imágenes optimizadas con `loading="lazy"`, sin dependencias innecesarias; objetivo Lighthouse ≥ 90 Performance y ≥ 95 Accessibility.

### Versión A (`/version-a`)
- Next.js 14+ App Router, Tailwind CSS 3+/4, TypeScript `strict: true`, **sin `any`**.
- Estructura: `app/`, `components/`, `data/`, `lib/` (p. ej. formateo de precio), `types/`.
- Componentes reutilizables y tipados con interfaces/types.
- Server Components por defecto; `"use client"` **solo donde haya estado** (buscador, filtros, formulario).
- `next/image` con `alt` y tamaños correctos; `next/font`.
- ESLint y `tsc --noEmit` sin errores.

### Versión B (`/version-b`)
- Laravel 9+, Blade con `layouts/` y `@section`/`@yield`; vistas por sección en `resources/views/sections/`; componentes reutilizables en `partials/` o componentes Blade.
- **Stylus** + **BEM estricto** (`.product-card__price--discount`).
- **jQuery** para filtros, buscador y validación; JS en **archivos separados, sin inline**.
- Laravel Mix o Gulp (indicar cuál), con comando de producción minificado.
- Ruta única `/` que renderiza la landing con los datos.

## 5. Secciones obligatorias (en A y B)

1. **Header**: logo/texto "Giunti Psychometrics"; nav (Test, Formazione, Risorse, Contatti); botón "Accedi" (solo visual); buscador que filtra la grilla por nombre; menú móvil accesible.
2. **Hero**: título, descripción corta, CTA "Esplora il catalogo" (ancla a la grilla), fondo con gradiente o imagen.
3. **Grilla de productos**: card con imagen, nombre, autor/docente, rango de edad o fecha de inicio, precio original (tachado) + precio con descuento destacado, badge de formato, botón "Scopri di più" o "Aggiungi al carrello"; estados hover y focus visibles.
4. **Filtro por categoría**: pills/tabs/sidebar con "Tutti"; client-side sin recarga; combinable con el buscador; estado vacío ("Nessun prodotto trovato") y contador de resultados.
5. **Formulario de contacto**: Nombre (obligatorio, ≥2), Email (obligatorio, válido), Mensaje (obligatorio, ≥10); errores visibles asociados al campo (`aria-describedby`, `aria-invalid`); estado de éxito visual (sin backend real).
6. **Footer**: logo/nombre, links, redes sociales (íconos placeholder), copyright.

## 6. Mejoras sobre la referencia (implementar 2 o 3 y justificar en README)

Opciones: porcentaje de descuento en la card, carrito mini con contador, ordenar por precio/nombre, filtros combinados con contador de resultados, persistencia de filtros en la URL.

## 7. Flujo de trabajo en cada cambio

1. Lee la memoria y las fuentes de verdad pertinentes.
2. Indica brevemente qué vas a cambiar y en qué versión (A, B o ambas).
3. Implementa. Si afecta a diseño o datos, **aplícalo en A y B** para mantener la paridad.
4. Verifica: build, lint, `tsc --noEmit` (A), build de assets (B) y revisión responsive/a11y cuando aplique.
5. Actualiza `memory/`.
6. Resume el resultado en 1 o 2 frases e indica el siguiente paso.

Construye por fases y verifica cada una antes de pasar a la siguiente.

## 8. Plan de ejecución

1. Análisis de la referencia + decisiones de diseño (tokens, componentes, dataset JSON). Resumen de decisiones en máx. 10 líneas: qué replicar y qué mejorar.
2. Versión A completa → verificación (build, lint, tipos, responsive, a11y).
3. Versión B con el mismo diseño y dataset → verificación (build de assets, responsive, a11y).
4. Comparación visual A vs B y ajustes de paridad.
5. READMEs, limpieza, `.gitignore`, `.env.example`.
6. Despliegue (opcional) y checklist final.

## 9. Reglas de conducta

- Ante ambigüedad: documenta el supuesto en `memory/ASSUMPTIONS.md` y avanza; no te detengas a preguntar salvo que sea bloqueante.
- No agregues dependencias nuevas sin justificarlas en `memory/DECISIONS.md`.
- Nunca des una tarea por terminada si el build falla o la memoria no está actualizada.
- actualizar `MEMORY.md` al terminar cada tarea.
- Mantén los READMEs de cada versión al día: instalación, comandos dev/build, versiones de Node/PHP/Composer, supuestos y mejoras.
- **Principio de simplicidad moderada**: no sobre-ingenierizar; los componentes deben repetirse ≥3 veces antes de extraerse; funciones puras en `lib/` para lógica compartida; tipos discriminados en lugar de interfaces complejas; sin `any`. Documenta toda reducción de alcance en `DECISIONS.md`.
- **Componentes reusables**: los elementos que pueden ser separados en componentes deben crear componentes reutilizables en `components/`, importarlos al componente padre y exportarlos según sea el caso. No repetir estructura en múltiples componentes; extraer y abstraer proactivamente.
- Código profesional, accesible y mantenible; comentarios en español.

## 10. Definición de "terminado"

- [ ] Las 6 secciones funcionan en A y B.
- [ ] Buscador + categorías combinados, sin recarga.
- [ ] Validación del formulario y estado de éxito.
- [ ] ≥ 8 productos, ≥ 3 categorías, formato `1.250,00 €`.
- [ ] Responsive 375/768/1280+, teclado y contraste OK.
- [ ] TypeScript strict sin errores; BEM consistente en B.
- [ ] READMEs completos con versiones y mejoras.
- [ ] Memoria (`/memory/`) actualizada.
