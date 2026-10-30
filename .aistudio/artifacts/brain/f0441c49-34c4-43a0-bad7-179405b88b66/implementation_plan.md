# Plan de Implementación: Optimización Espacial en Tablet y PC (CertIT B2)

Optimización de la distribución responsiva y aprovechamiento de pantalla en tablet y monitores de PC para el dashboard "Hoy" y las vistas principales de la aplicación CertIT B2 (preparación del examen oficial OpenEDG EIT-B2-01). Se aplican directamente las elecciones del usuario: **cuadrícula de 2 columnas en tablet y 3 columnas en PC** para tarjetas de contenido, y **ancho fluido expandido aprovechando monitores grandes**.

---

## 1. Diagnóstico del Problema Espacial Actual
- **Selector focalizado (`div#root > ... > main > div > div:nth-of-type(3) > div:nth-of-type(1)`):** La sección de *Temas clave de hoy* contenía una cuadrícula rígida (`grid-cols-1 sm:grid-cols-3`) que en pantallas intermedias (tablets `md: 768px-1023px`) forzaba las tarjetas a un espacio excesivamente estrecho o verticalizado, mientras que en monitores grandes de PC el contenedor general `max-w-7xl` (1280px) dejaba márgenes laterales excesivos y no aprovechaba el ancho disponible de la pantalla.
- **Distribución de widgets:** En pantallas tablet / medianas, los widgets de *Progreso por sección*, *Racha de estudio*, *Banco de errores* y *Syllabus 2023* requieren una distribución armónica que evite columnas apretadas o tarjetas desproporcionadamente alargadas.

---

## 2. Nueva Arquitectura de Diseño y Espaciado Responsivo

### A. Ancho Fluido Expandido del Viewport
- **Contenedor Principal (`App.tsx` y vistas):**
  - Actualizar `main` de `max-w-7xl` (1280px) a un contenedor fluido expandido: `w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 xl:px-10 py-6` para aprovechar monitores amplios sin estirar los textos fuera de una medida ergonómica (`measure` de lectura equilibrada).
  - Mantener la barra lateral persistente en `248px` fijada a la izquierda en pantallas medianas y de escritorio.

### B. Cuadrícula de Tarjetas de Temas ("Temas clave de hoy")
- **Distribución:**
  - Móvil (< 640px): `grid-cols-1` (tarjetas a ancho completo).
  - Tablet y pantallas medianas (`sm` / `md` / `lg` hasta ~1200px): `sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3` o cuadrícula fluida auto-fit con tarjetas de ancho cómodo (`minmax(280px, 1fr)`).
  - Monitores de PC (`xl` / 1280px+): `grid-cols-3` equilibradas con altura uniforme (`h-full flex flex-col justify-between`), evitando tarjetas aplastadas.
- **Aprovechamiento interior:**
  - Separación de información con tipografía *IBM Plex Mono* en códigos técnicos (`G09 · Gramática`), chip unificado de precisión, descripción legible en 2 líneas, y botones outline de acción (`Lección` y `Practicar`) con áreas táctiles accesibles (44px).

### C. Distribución Armónica de Columnas y Widgets del Dashboard
- **Estructura de Columnas en `TodayView`:**
  - En **Tablet** (768px a 1023px): La distribución pasa a una cuadrícula de 2 columnas principales equilibradas o área adaptada donde los widgets secundarios (Progreso, Racha, Banco de Errores, Syllabus) se organizan en bloques de 2 columnas de widgets, eliminando huecos en blanco.
  - En **PC / Desktop** (1024px+ y 1280px+): Columna izquierda principal (2/3 o ~7-8 cols) con tarjetas y progreso detallado + Columna derecha (~4-5 cols) con diagnóstico, banco de errores con espaciado uniforme, syllabus oficial y estructura colapsable.
  - En monitores ultra-anchos (`2xl: 1536px`): Las tarjetas de temas se expanden con proporciones tipográficas generosas y paddings de `p-5`, evitando sensación de "pantalla de celular centrada".

### D. Extensión a Vistas Secundarias (Práctica, Examen y Progreso)
- **`PracticeView.tsx`:** Ajustar la cuadrícula del catálogo de módulos y temas para utilizar `grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`, permitiendo que en tablet se lean con claridad y en PC se aproveche el ancho completo.
- **`MockExamPreviewView.tsx`:** Mejorar la cuadrícula de especificaciones del examen a 2 columnas en tablet y 3 en PC.
- **`ProgressView.tsx`:** Optimizar la matriz del mapa de calor de temas (G01-G29 y V01-V08) a cuadrícula fluida adaptable en monitores grandes.

---

## 3. Plan de Verificación
1. **Verificación visual y de maquetación:**
   - Inspeccionar el renderizado en anchos de Tablet (768px - 1024px) y PC (1280px, 1440px, 1536px+).
   - Comprobar que ninguna tarjeta sufra truncamiento forzado ni deje espacios en blanco asimétricos.
2. **Validación funcional:**
   - Probar que los botones `Lección` (apertura de modal) y `Practicar` continúen operando fluidamente.
   - Probar la interacción del botón de Diagnóstico y de navegación general.
3. **Compilación estricta:**
   - Ejecutar `compile_applet` para confirmar 0 errores de TypeScript y Tailwind.
