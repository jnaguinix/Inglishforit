# Rediseño Pedagógico: Tarjetas de Analogías, Tablas de 3 Segundos y Botón Flotante de Atajos Mentales

Transformar la enseñanza abstracta de fórmulas gramaticales y vocabulario en explicaciones memorables con analogías del día a día laboral, tablas comparativas de 3 segundos y un botón flotante de consulta inmediata mientras el usuario responde preguntas en los Módulos 1 y 2 de English for IT 1.

---

> [!IMPORTANT]
> **Decisiones Confirmadas con el Usuario en la Fase de Clarificación:**
> 1. **Formato Visual**: Tarjetas con analogías y tablas de 3 segundos (enfoque cero fórmulas abstractas).
> 2. **Alcance de Temas**: Todos los temas de gramática y vocabulario de los Módulos 1 y 2 (1.1 a 1.5 y 2.1 a 2.4).
> 3. **Interacción en Práctica**: Botón flotante accesible durante la resolución de preguntas para consultar el atajo mental antes o después de responder, sin perder el progreso ni romper el flujo de examen.

---

## 1. Visión General y Concepto Pedagógico

### El Problema del Estudiante
Las fórmulas tradicionales como `IT + [BE] + [PARTICIPIO DE REPORTE] + THAT + [CLÁUSULA]` provocan sobrecarga cognitiva. El estudiante hispanohablante intenta memorizar la sintaxis en lugar de comprender la intención comunicativa y el patrón visual que evalúa el examen de certificación OpenEDG.

### La Solución
Desplegar un sistema pedagógico de tres capas:
1. **La Analogía Cotidiana / Laboral**: Traduce la regla a situaciones reales de oficina técnica (ej. *"El Chisme Corporativo Seguro"* vs. *"El Reflector en el Protagonista"*).
2. **La Tabla de Decisión de 3 Segundos**: Una matriz rápida basada en el detonador visual de apertura de la frase (ej. Si abre con `IT` $\rightarrow$ busca `THAT`; si abre con un `Sujeto Real` $\rightarrow$ busca `TO + Infinitivo`).
3. **El Botón Flotante de Atajo Mental (Mental Shortcut Popover)**: Accesible en cualquier momento del drill para desbloquear la mente del estudiante con 1 clic.

---

## 2. Experiencia de Usuario y Diseño Visual

### 2.1 Componentes y Flujos de Usuario

1. **Botón Flotante en la Práctica (`QuestionCard.tsx` / `PracticeView.tsx`)**:
   - Botón discreto pero visible con icono de rayo (`Zap` / `Brain`): `⚡ Atajo Mental (3s)`.
   - Se sitúa en la esquina superior derecha de la tarjeta de pregunta.
   - Al pulsarlo, despliega un panel superpuesto (*Slide-over Drawer / Sheet*) sin abandonar la pregunta actual.
   - Muestra de inmediato:
     - Nombre humano del patrón.
     - La analogía en 2 líneas.
     - La tabla comparativa rápida de qué buscar en las opciones.
     - La alerta anti-trampa del español.

2. **Mini-Lecciones Renovadas (`MiniLessonModal.tsx`)**:
   - Cada lección de los Módulos 1 y 2 incluirá una sección destacada con tarjetas de analogías visuales:
     - **Módulo 1:**
       - **1.1 Voz Pasiva (`G01`)**: El Comodín del Vocero (`It is said that...`) vs. El Reflector en el Protagonista (`The server is said to be...`).
       - **1.2 Pronombres Relativos (`G02`)**: El Conector con Antecedente (`which/that/who`) vs. El Pronombre Fusión (`What = the thing that`).
       - **1.3 Vocabulario UX (`V08`)**: Métricas de Negocio (NPS, Detractors, ROI) y Colocaciones Estratégicas (`reveal risks`, `mention issue`).
       - **1.4 Hipótesis con As if / As though (`G03`)**: La Queja o Duda con Pasado Simple (`as if you knew`) vs. Lo Imposible con Subjuntivo Were (`as if it were normal`).
       - **1.5 Evaluación de Proveedores (`V08` / Negociación)**: Contratos, Onboarding, Secondment, Mitigar Riesgos vs. Peor Escenario.
     - **Módulo 2:**
       - **2.1 El "Do" Enfático (`G04`)**: El Subrayador Verbal (`We DO need`) vs. El Verbo Principal Común (`She does the work`).
       - **2.2 Redes e Incidentes (`V07`)**: Vocabulario Bobby & Peter (`handled`, `omitted`, `nevertheless`, `right away`).
       - **2.3 Preposiciones Dependientes (`G05`)**: Los Matrimonios Fijos del Inglés (`depend on`, `consist of`, `increase in`, `responsible for`).
       - **2.4 Roles y Responsabilidades (`V06`)**: Delimitación de Fronteras (`beyond your scope of duties`, `sent back`, `all the same`) y Cadena de Mando.

3. **Tablas de Decisión de 3 Segundos**:
   - Diseño limpio y legible, sin cajas tipo píldora estáticas.
   - Filas contrastadas con tipografía monoespaciada para código y sans-serif para explicaciones.
   - Resaltados sutiles en esmeralda e índigo.

---

## 3. Decisiones de Producto y Arquitectura

### Decisión 1: Estructura de Datos Centralizada vs. Código Disperso
- **Enfoque Elegido**: Crear un catálogo tipado `src/data/mentalShortcuts.ts` que relacione cada `TopicId` (`G01`-`G05`, `V06`-`V08`) con su analogía humana, su tabla de decisión estructurada y su detonador visual.
- **Razón**: Permite consumir los mismos atajos tanto en el botón flotante de la práctica como en las mini-lecciones y en las retroalimentaciones, garantizando coherencia absoluta sin duplicación de código.

### Decisión 2: Interfaz No Intrusiva en el Examen
- **Enfoque Elegido**: El botón de atajo mental solo estará activo en los modos **Práctica** y **Revisión**. En el modo **Simulacro Real (Mock Exam)** se ocultará o indicará que en examen cronometrado oficial no se permite ayuda externa, preservando el rigor evaluativo.

---

## 4. Arquitectura Técnica y Diagrama de Componentes

```
┌──────────────────────────────────────────────────────────────┐
│                    mentalShortcuts.ts                        │
│   (Catálogo centralizado de Analogías y Tablas de 3s)        │
│   - TopicId (G01..G05, V06..V08)                             │
│   - humanName, plainAnalogy, decisionTable, triggerTrap      │
└──────────────┬───────────────────────────────┬───────────────┘
               │                               │
               ▼                               ▼
┌──────────────────────────────┐ ┌──────────────────────────────┐
│     QuestionCard.tsx         │ │     MiniLessonModal.tsx      │
│  ┌────────────────────────┐  │ │  ┌────────────────────────┐  │
│  │ Botón Flotante ⚡ (3s)  │  │ │  │ Bloque Analogía Visual │  │
│  │ (Abre Drawer de Atajo) │  │ │  │ Tabla Comparativa 3s   │  │
│  └────────────────────────┘  │ │  └────────────────────────┘  │
│  ┌────────────────────────┐  │ └──────────────────────────────┘
│  │ Retroalimentación con  │  │
│  │ regla humana y gatillo │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

### Entidades y Tipos Clave
```typescript
export interface DecisionTableRow {
  ifStartsOrContains: string;
  thenLookFor: string;
  exampleSentence: string;
  whyRule: string;
}

export interface MentalShortcut {
  topicId: TopicId;
  humanTitle: string;
  analogies: {
    title: string;
    description: string;
    concreteCodeOrChatExample: string;
  }[];
  decisionTable: DecisionTableRow[];
  spanglishTrap: string;
  threeSecondTrigger: string;
}
```

---

## 5. Plan de Ejecución Paso a Paso

1. **Crear `src/data/mentalShortcuts.ts`**:
   - Desarrollar las analogías y tablas de 3 segundos para todos los temas de los Módulos 1 y 2 (`G01`, `G02`, `G03`, `G04`, `G05`, `V06`, `V07`, `V08`).
2. **Crear Componente `MentalShortcutDrawer.tsx`**:
   - Drawer accesible y ligero con navegación por pestañas y visualización de tarjetas y tablas.
3. **Integrar en `QuestionCard.tsx`**:
   - Añadir el botón flotante `⚡ Atajo Mental` en el encabezado de cada pregunta vinculada a un tema con atajo.
4. **Enriquecer `MiniLessonModal.tsx`**:
   - Añadir la pestaña o sección dedicada *"Analogía Visual & Tabla de 3s"* en cada lección.
5. **Verificación y Calidad**:
   - Compilación con `compile_applet` y linter con `lint_applet`.
   - Comprobar que en la práctica de cada tema el botón flotante responde al instante y muestra la tabla comparativa sin alterar el flujo de respuesta.
