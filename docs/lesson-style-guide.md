# Guía de estilo de las mini-lecciones

Cómo escribir (o reescribir) una mini-lección de `src/data/miniLessons.ts`.
Lección de referencia: **G02** (who / which / that / what / whose).

## Para quién escribimos

Hispanohablantes del área de IT que preparan el OpenEDG English for IT B2 (EIT-B2-01).
Saben de redes, sistemas y tickets. Muchos **no saben gramática formal**: no distinguen
sustantivo de verbo y no les interesan las fórmulas.

La lección enseña a **reconocer un patrón** en la frase, no a memorizar una regla.
Prueba: alguien sin formación gramatical tiene que entenderla a la primera.

## Principios

1. **Cero jerga sin traducir.** No uses sustantivo, antecedente, inanimado, nominal,
   cláusula, sujeto, objeto, pronombre, auxiliar, etc. Usa la tabla de equivalencias.
   Si un término es imprescindible (porque aparece en las opciones del examen o en la
   propia regla, como *modal* o *participio*), defínelo **una sola vez** con ejemplos de IT
   y después úsalo sin más.
2. **Partir del español.** Cada patrón empieza por "¿cómo lo dirías en español?" y de ahí
   pasa al inglés ("que" tras una cosa ➔ which / that).
3. **Situaciones, no fórmulas.** Nada de `[Elemento] + THAT / WHICH`. Una situación
   cotidiana con un ejemplo ES ➔ EN.
4. **Un truco por situación.** Como máximo un **Truco** y un **Ojo**. Excepciones,
   registro formal y casos raros van en "Nivel avanzado (opcional)".
5. **Una sola representación de la regla.** Atajo arriba, puente con el español y
   situaciones. Sin analogía, tabla ni fórmulas que repitan lo mismo.
6. **Errores con empatía y con la causa real.** Explica por qué el cerebro hispanohablante
   comete el error (traducción literal, palabras que suenan igual, "que" para todo), sin
   lenguaje lingüístico. Tono: "le pasa a casi todos, no es falta de nivel".
7. **Frases cortas, voz activa, tuteo.** Párrafos de 2–3 líneas como máximo.
8. **IT real.** Firewalls, tickets, caídas, despliegues, rollbacks, clientes, parches.
   Nunca "The cat is on the table".

## Rigor (no negociable)

- **No inventes qué evalúa el examen.** Si no sale del syllabus o del material del curso,
  no lo presentes como "lo que evalúa el examen". Escribe "errores frecuentes" o
  "cómo reconocer el patrón en una pregunta de huecos".
- **No uses "oficial"** ("Guía Oficial", "Ejemplo oficial") salvo que el ejemplo venga de
  verdad del material de OpenEDG. Los bancos citan "Regla del video" o "Ejemplo del video":
  esos ejemplos se conservan tal cual.
- **Simplificar no es decir algo falso.** Si la regla simple tiene excepciones importantes,
  deja la regla simple y lleva la excepción a "Nivel avanzado". Ejemplo de G02: *that*
  también vale con personas; se dice en un "Ojo", no se presenta como error.
- **Nada se contradice dentro de la lección.** El atajo, el puente, las situaciones, los
  errores y la sección de huecos dicen lo mismo.
- **El resaltado marca solo la estructura que se explica** (en G02, la palabra clave:
  which, who, whose, what), no la frase entera.
- **No asumas el género de nombres propios** al traducir: "Te presento a Ife", no "Esta es Ife".
- **No cambies la regla que enseña la lección.** Cambia cómo se explica.
- **Cubre lo que pregunta el banco.** Antes de mandar algo a "avanzado", mira las preguntas
  del tema en `src/data/banks/`. Si el banco lo pregunta a menudo, va en el nivel básico.
- Marca **(revisar)** en el resumen del lote cualquier cosa de la que no estés seguro.
  Nunca la inventes.

## Equivalencias para evitar jerga

| En vez de… | Di… |
|---|---|
| sustantivo / antecedente | una cosa, una persona; "la palabra de la que hablas" |
| sujeto | quién hace la acción ("el equipo", "el script") |
| objeto | lo que recibe la acción |
| posesión | de quién es ("cuyo") |
| pronombre relativo | la palabra que conecta (who, which, that) |
| cláusula / oración subordinada | la segunda parte de la frase, el trozo después de… |
| auxiliar | el verbo pequeño de delante (do, have, will, is) |
| forma base / infinitivo sin to | el verbo tal como sale en el diccionario (install, run) |
| participio | la 3.ª forma: installed, written, run (definir una vez) |
| gerundio | el verbo con -ing (installing) |
| inversión | el verbo pequeño se adelanta ("Never **have** we seen…") |
| modal | must, should, can, might (definir una vez con ejemplos) |

## Cómo encaja en el esquema actual

El esquema (`MiniLesson` en `src/types/index.ts`) no cambia. Cada campo cumple este papel:

| Campo | Papel en la lección | Cómo escribirlo |
|---|---|---|
| `titleEs` | Título | Las palabras clave en inglés y su equivalente en español, entre paréntesis. **Sin dos puntos**: el modal corta el título en el primer `:`. |
| `mentalShortcut` | **Atajo** (primera tarjeta) = idea central | `⚡ cue ➔ acción \| cue ➔ acción`, con 3–5 filas. Cada cue en español ("que" tras una cosa). Separador ` \| ` con espacios. |
| `summaryEs`, antes del primer `\n\n` | **Puente con el español** | 1–2 frases de idea central y después líneas `• "frase en español" ➔ frase en inglés`, una por situación. La palabra clave del inglés en MAYÚSCULAS. |
| `summaryEs`, después del `\n\n` | **Situaciones** (sección "Mecánica y uso en detalle", abierta) | `N. Título de la situación:` y debajo `• Truco: …` y, como mucho, `• Ojo: …` o `• Ejemplo: …`. El último punto es `N. Nivel avanzado (opcional):`. |
| `examples` | **Ejemplos en producción** | 4–5 frases de IT. `highlight` = solo la palabra clave. `explanation` = una línea que empieza por el español ("Que" después de personas ➔ who). |
| `spanishTrapsEs` | **Errores típicos** | Una frase de intro empática y después bullets `• ❌ …` / `✓ …` / `Por qué pasa: …`. De 3 a 4 errores. |
| `howExamTestsIt` | **Errores comunes en el examen** (sección plegada) | "Cómo reconocer el patrón en una pregunta de huecos:" y `1) pista en la frase ("…___…") ➔ respuesta. Cuál es la trampa.` |
| `cheatSheetRule` | Respaldo del atajo en la pantalla de respuesta | El atajo en prosa, en una línea. |
| `formula` | — | `''` (vacío oculta la sección). |
| `analogyCard`, `threeSecondTable` | — | Se omiten. Añade el ID a `PATTERN_STYLE_LESSONS` en `miniLessons.ts` para que no se rellenen desde `mentalShortcuts.ts`. Ese archivo alimenta también el Gimnasio de Patrones y no se toca. |

### Trampas del parser (`MiniLessonModal.tsx`)

- `summaryEs` se divide en puntos con cualquier `número + . o ) + espacio`. No escribas
  "v2. " ni "paso 1) " dentro del texto.
- El título de cada punto termina en el **primer `:`**. No pongas `:` dentro del título.
- En los bullets `• Etiqueta: texto`, la etiqueta solo se pone en negrita si mide
  **menos de 40 caracteres**.
- Un bullet cuya etiqueta contiene "fórmula" se pinta como caja de fórmula. Evítalo.
- `highlight` se busca **sin límites de palabra y sin distinguir mayúsculas**: "who"
  también marca "whole" y "whom". Elige frases donde la palabra clave aparezca una sola vez.
  `/` y `...` dentro del `highlight` lo dividen en trozos.
- Los errores solo se pintan como tarjetas ✗ / ✓ si **todos** los bullets tienen línea ❌ y línea ✓.

## Longitud orientativa

| Parte | Tamaño |
|---|---|
| Atajo | 3–5 filas |
| Puente | 1–2 frases + una línea ES ➔ EN por situación |
| Situaciones | 3–5, con 1–2 bullets cada una |
| Nivel avanzado | 2–4 bullets |
| Ejemplos | 4–5 |
| Errores típicos | 3–4 |
| Pistas de huecos | 3–4 |

Referencia: el bloque de G02 pasó de unos 7.200 a unos 5.600 caracteres (−21 %), y además dejó de heredar la analogía y la tabla.

## Proceso por lote

1. Lotes de 3–5 lecciones. No empieces otro lote sin revisión.
2. Guarda el bloque anterior de cada lección (scratchpad) para el antes / después.
3. Reescribe sustituyendo el bloque `Gxx: { … },` completo y añade el ID a `PATTERN_STYLE_LESSONS`.
4. `npx tsc --noEmit`.
5. Abre cada lección en la app a 375px y comprueba:
   - que no aparezca la analogía ni la tabla antigua;
   - que los `<mark>` correctos sean los esperados;
   - que no haya desbordamiento horizontal.
6. Entrega, por lección: el antes / después, qué cambió y por qué, y los puntos **(revisar)**.

## Checklist rápido

- [ ] Ningún término de la columna izquierda de equivalencias sin definir
- [ ] Cada situación empieza por el español
- [ ] Como máximo un Truco y un Ojo por situación
- [ ] Sin "oficial" ni "el examen evalúa" sin fuente
- [ ] Lo que pregunta el banco está en el nivel básico
- [ ] Highlights = solo la palabra clave, una aparición
- [ ] Ejemplos de IT, sin género asumido
- [ ] Atajo, puente, situaciones y errores coherentes entre sí
- [ ] ID añadido a `PATTERN_STYLE_LESSONS`
