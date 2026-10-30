import { TopicId } from '../types';

export interface CourseLessonItem {
  id: string;
  number: string;
  titleEn: string;
  titleEs: string;
  type: 'grammar' | 'listening' | 'reading' | 'vocab';
  topicId: TopicId;
  descriptionEs: string;
  targetExamSkill: string;
}

export interface CourseModule {
  id: string;
  coursePart: 1 | 2;
  moduleNumber: number;
  role: string;
  titleEn: string;
  titleEs: string;
  objectiveEs: string;
  lessons: CourseLessonItem[];
}

// ========================================================
// ENGLISH FOR IT 1 (PART ONE)
// ========================================================
export const ENGLISH_FOR_IT_1_MODULES: CourseModule[] = [
  {
    id: 'it1-mod-1',
    coursePart: 1,
    moduleNumber: 1,
    role: 'Product Management',
    titleEn: 'Identify problems',
    titleEs: 'Identificación de Problemas',
    objectiveEs: 'Aprender a reportar fallos, analizar la experiencia de usuario (UX) y evaluar módulos de software de proveedores.',
    lessons: [
      {
        id: '1.1',
        number: '1.1',
        titleEn: 'Section 1 – Grammar: The Passive Voice',
        titleEs: 'Sección 1: La Voz Pasiva (Impersonal & Personal)',
        type: 'grammar',
        topicId: 'G01',
        descriptionEs: 'Impersonal Passive ("It is thought that...") vs. Personal Passive ("The tests are thought to produce..."). Verbos de reporte y distancia de la fuente.',
        targetExamSkill: 'UE1 / UE3'
      },
      {
        id: '1.2',
        number: '1.2',
        titleEn: 'Section 2 – Grammar: Relative Pronouns',
        titleEs: 'Sección 2: Pronombres Relativos y Cláusulas Nominales',
        type: 'grammar',
        topicId: 'G02',
        descriptionEs: 'Pronombres estándar (that, which, who, whom, whose) y cláusulas relativas nominales (what, when, where, how, who, why). "What" = the thing that.',
        targetExamSkill: 'UE1 / UE2'
      },
      {
        id: '1.3',
        number: '1.3',
        titleEn: 'Section 3 – Listening: UX Experience',
        titleEs: 'Sección 3: Listening y Vocabulario: Experiencia de Usuario (UX)',
        type: 'listening',
        topicId: 'V08',
        descriptionEs: 'NPS, detractors, ROI en UX y toma de decisiones basada en mitigación de riesgos y entrevistas a clientes insatisfechos.',
        targetExamSkill: 'L1 / L2 / L3 / L4'
      },
      {
        id: '1.4',
        number: '1.4',
        titleEn: 'Section 4 – Grammar: The Past Simple with "as if" & "as though"',
        titleEs: 'Sección 4: Past Simple y Subjuntivo con "as if" y "as though"',
        type: 'grammar',
        topicId: 'G03',
        descriptionEs: 'Situaciones hipotéticas y contrafactuales ("as if it were normal", "as though we didn\'t have"). Expresar duda, queja o sorpresa en debates de equipo.',
        targetExamSkill: 'UE1 / UE3 / UE5'
      },
      {
        id: '1.5',
        number: '1.5',
        titleEn: 'Section 5 – Reading: Supplier Evaluation Modules',
        titleEs: 'Sección 5: Reading y Vocabulario: Módulos de Evaluación de Proveedores',
        type: 'reading',
        topicId: 'V08',
        descriptionEs: 'Gestión de riesgos en supply chain, mitigación de retrasos, scope creep, secondments y entrega incremental (MVP).',
        targetExamSkill: 'R1 / R2 / R3 / R4'
      }
    ]
  },
  {
    id: 'it1-mod-2',
    coursePart: 1,
    moduleNumber: 2,
    role: 'Network Engineer',
    titleEn: 'Interpret & Implement Instructions',
    titleEs: 'Interpretar e Implementar Instrucciones de Red',
    objectiveEs: 'Seguir directrices de enrutamiento, interactuar entre ingenieros junior/senior y comprender roles de soporte.',
    lessons: [
      {
        id: '2.1',
        number: '2.1',
        titleEn: 'Section 1 – Grammar: The Emphatic "do"',
        titleEs: 'Sección 1: El "Do" Enfático (do, does, did)',
        type: 'grammar',
        topicId: 'G04',
        descriptionEs: 'Añadir énfasis a oraciones afirmativas con do, does y did, intensificación con "really" y "absolutely", question tags de confirmación y discriminación enfático vs. neutro.',
        targetExamSkill: 'UE3 / UE5'
      },
      {
        id: '2.2',
        number: '2.2',
        titleEn: 'Section 2 – Listening: Manager and Junior Network Engineer',
        titleEs: 'Sección 2: Listening y Vocabulario: Incidentes de Red y Escalación',
        type: 'listening',
        topicId: 'V07',
        descriptionEs: 'Puntos de acceso no autorizados, reporte obligatorio al equipo de seguridad vs. al manager, adaptación a políticas de la empresa y vocabulario oficial (handled, omitted, nevertheless, analyze, risks, eliminated, performance, right away).',
        targetExamSkill: 'L1 / L3 / L5'
      },
      {
        id: '2.3',
        number: '2.3',
        titleEn: 'Section 3 – Grammar: Dependent Prepositions',
        titleEs: 'Sección 3: Preposiciones Dependientes (depend on, increase in, consist of)',
        type: 'grammar',
        topicId: 'G05',
        descriptionEs: 'Preposiciones que siguen de forma obligatoria a verbos (depend on, consist of, worry about, protect from, comment on, apologize for, respond to), adjetivos (incapable of, responsible for) y sustantivos (increase in, impact on, advantages of, according to).',
        targetExamSkill: 'UE1 / UE4'
      },
      {
        id: '2.4',
        number: '2.4',
        titleEn: 'Section 4 – Reading: Job Roles and Responsibilities',
        titleEs: 'Sección 4: Reading y Vocabulario: Roles, Límites y Delegación en IT',
        type: 'reading',
        topicId: 'V06',
        descriptionEs: 'Lectura comprensiva del memo oficial entre Jim (manager) y Mark (network engineer): delimitación de tareas (cableado óptico vs. UTP cobre en IT Helpdesk), escalación formal, y vocabulario clave (beyond your scope of duties, have in mind, handled, didn\'t do a thing, sent back, all the same).',
        targetExamSkill: 'R1 / R3 / R4'
      }
    ]
  },
  {
    id: 'it1-mod-3',
    coursePart: 1,
    moduleNumber: 3,
    role: 'Software Engineer',
    titleEn: 'Analyze Factual Information',
    titleEs: 'Análisis de Información Técnica y Factual',
    objectiveEs: 'Formular hipótesis de fallas, contrastar tecnologías y asesorar al equipo sobre mejores prácticas.',
    lessons: [
      {
        id: '3.1',
        number: '3.1',
        titleEn: 'Grammar: Starting a Sentence with a Conjunction',
        titleEs: 'Iniciar Oraciones con Conjunción (Although, Despite)',
        type: 'grammar',
        topicId: 'G06',
        descriptionEs: 'Estructurar cláusulas complejas para conectar causas técnicas y advertencias.',
        targetExamSkill: 'UE3 / UE5'
      },
      {
        id: '3.2',
        number: '3.2',
        titleEn: 'Grammar: Inversion (Negative & Restrictive)',
        titleEs: 'Inversión tras Adverbios Restrictivos ("Under no circumstances")',
        type: 'grammar',
        topicId: 'G07',
        descriptionEs: 'Énfasis estricto en políticas: "Under no circumstances should engineers share credentials".',
        targetExamSkill: 'UE1 / UE5'
      },
      {
        id: '3.3',
        number: '3.3',
        titleEn: 'Listening: The Benefit of Experience',
        titleEs: 'Listening: Lecciones de Experiencia en Soporte',
        type: 'listening',
        topicId: 'V08',
        descriptionEs: 'Un ingeniero principal explica errores de arquitectura pasados y buenas prácticas.',
        targetExamSkill: 'L2 / L3'
      },
      {
        id: '3.4',
        number: '3.4',
        titleEn: 'Grammar: Modal Verbs (Suggest & Advise)',
        titleEs: 'Modales de Sugerencia y Asesoría (ought to, had better, should)',
        type: 'grammar',
        topicId: 'G08',
        descriptionEs: 'Proponer soluciones de software con el nivel de firmeza y diplomacia adecuado.',
        targetExamSkill: 'UE2 / UE5'
      },
      {
        id: '3.5',
        number: '3.5',
        titleEn: 'Reading: Compiler vs. Interpreter',
        titleEs: 'Reading: Compiladores vs. Intérpretes',
        type: 'reading',
        topicId: 'V02',
        descriptionEs: 'Comparativa técnica de ejecución: bytecode, JIT, binarios y rendimiento en runtime.',
        targetExamSkill: 'R2 / R4 / R5'
      }
    ]
  },
  {
    id: 'it1-mod-4',
    coursePart: 1,
    moduleNumber: 4,
    role: 'Customer Support',
    titleEn: 'Examine Key Information',
    titleEs: 'Atención a Clientes y Desescalación de Incidentes',
    objectiveEs: 'Gestionar clientes difíciles, aplicar modismos laborales y formular preguntas de diagnóstico diplomáticas.',
    lessons: [
      {
        id: '4.1',
        number: '4.1',
        titleEn: 'Grammar: Adverbs with Polite Requests',
        titleEs: 'Fórmulas y Adverbios de Cortesía ("Would you mind...?")',
        type: 'grammar',
        topicId: 'G09',
        descriptionEs: 'Pedir información sensible o acciones al usuario sin sonar rudo o impositivo.',
        targetExamSkill: 'UE2'
      },
      {
        id: '4.2',
        number: '4.2',
        titleEn: 'Listening: Going the Extra Mile',
        titleEs: 'Listening: Ir Más Allá en la Resolución de Tickets',
        type: 'listening',
        topicId: 'V03',
        descriptionEs: 'Llamada de soporte con un cliente frustrado y cómo desescalar la tensión con empatía.',
        targetExamSkill: 'L3 / L4'
      },
      {
        id: '4.3',
        number: '4.3',
        titleEn: 'Grammar: Idioms in Workplace Communication',
        titleEs: 'Idioms de Comunicación Laboral en IT',
        type: 'grammar',
        topicId: 'G26',
        descriptionEs: 'Expresiones clave: "on the same page", "touch base", "ballpark figure", "iron out".',
        targetExamSkill: 'UE3 / L3'
      },
      {
        id: '4.4',
        number: '4.4',
        titleEn: 'Reading: Asking Customers Questions',
        titleEs: 'Reading: Cómo Formular Preguntas de Diagnóstico al Cliente',
        type: 'reading',
        topicId: 'V03',
        descriptionEs: 'Metodología para diagnosticar tickets N1 sin saturar al usuario no técnico.',
        targetExamSkill: 'R1 / R2 / R4'
      }
    ]
  },
  {
    id: 'it1-mod-5',
    coursePart: 1,
    moduleNumber: 5,
    role: 'Security Engineer',
    titleEn: 'Incorporate Goals and Objectives',
    titleEs: 'Objetivos de Ciberseguridad y Políticas Corporativas',
    objectiveEs: 'Aplicar el imperativo en runbooks, detectar llamadas fraudulentas (vishing) y comprender políticas de seguridad.',
    lessons: [
      {
        id: '5.1',
        number: '5.1',
        titleEn: 'Grammar: The Imperative Instruction',
        titleEs: 'Instrucciones Imperativas en Procedimientos y Runbooks',
        type: 'grammar',
        topicId: 'G10',
        descriptionEs: 'Órdenes directas ("Execute script...", "Do not restart...") en guías operativas.',
        targetExamSkill: 'UE1 / UE4'
      },
      {
        id: '5.2',
        number: '5.2',
        titleEn: 'Grammar: Adverbs of Possibility',
        titleEs: 'Adverbios de Posibilidad (arguably, conceivably)',
        type: 'grammar',
        topicId: 'G11',
        descriptionEs: 'Matizar hipótesis de incidentes técnicos cuando no hay pruebas concluyentes.',
        targetExamSkill: 'UE3 / UE5'
      },
      {
        id: '5.3',
        number: '5.3',
        titleEn: 'Listening: Fraudulent Calls (Social Engineering)',
        titleEs: 'Listening: Llamadas Fraudulentas y Vishing',
        type: 'listening',
        topicId: 'V04',
        descriptionEs: 'Detectar pretexting, manipulación de urgencia y suplantación de identidad telefónica.',
        targetExamSkill: 'L1 / L2 / L5'
      },
      {
        id: '5.4',
        number: '5.4',
        titleEn: 'Grammar: Adverbs of Probability',
        titleEs: 'Adverbios de Probabilidad (presumably, likely)',
        type: 'grammar',
        topicId: 'G11',
        descriptionEs: 'Calcular la probabilidad de impacto de vulnerabilidades en informes de riesgo.',
        targetExamSkill: 'UE3 / UE5'
      },
      {
        id: '5.5',
        number: '5.5',
        titleEn: 'Reading: Information Security Policy',
        titleEs: 'Reading: Políticas de Seguridad y Cumplimiento',
        type: 'reading',
        topicId: 'V05',
        descriptionEs: 'Zero Trust, microsegmentación, menor privilegio y caducidad de tokens.',
        targetExamSkill: 'R1 / R2 / R3'
      }
    ]
  },
  {
    id: 'it1-mod-6',
    coursePart: 1,
    moduleNumber: 6,
    role: 'Security Engineer',
    titleEn: 'Participate in Discussion',
    titleEs: 'Debate de Incidentes y Análisis de Amenazas Avanzadas',
    objectiveEs: 'Manejar tiempos verbales de culminación futura, acciones inminentes y analizar casos reales de spyware.',
    lessons: [
      {
        id: '6.1',
        number: '6.1',
        titleEn: 'Grammar: The Future Perfect Tense',
        titleEs: 'Future Perfect ("will have completed by...")',
        type: 'grammar',
        topicId: 'G12',
        descriptionEs: 'Acciones técnicas completadas antes de una hora límite en ventanas de mantenimiento.',
        targetExamSkill: 'UE3 / UE4'
      },
      {
        id: '6.2',
        number: '6.2',
        titleEn: 'Listening: Interview with Security Officer (Part 1)',
        titleEs: 'Listening: Entrevista al Oficial de Seguridad (Parte 1)',
        type: 'listening',
        topicId: 'V05',
        descriptionEs: 'Análisis de vectores de ataque iniciales y auditoría de tokens de sesión.',
        targetExamSkill: 'L2 / L4'
      },
      {
        id: '6.3',
        number: '6.3',
        titleEn: 'Grammar: "Was / Were On The Point Of"',
        titleEs: '"Was / Were On The Point Of" (Inminencia en el Pasado)',
        type: 'grammar',
        topicId: 'G12',
        descriptionEs: 'Acciones críticas a punto de ejecutarse justo cuando ocurrió un evento disruptivo.',
        targetExamSkill: 'UE3'
      },
      {
        id: '6.4',
        number: '6.4',
        titleEn: 'Listening: Interview with Security Officer (Part 2)',
        titleEs: 'Listening: Entrevista al Oficial de Seguridad (Parte 2)',
        type: 'listening',
        topicId: 'V05',
        descriptionEs: 'Medidas de contención, aislamiento de hosts y remediación post-incidente.',
        targetExamSkill: 'L3 / L5'
      },
      {
        id: '6.5',
        number: '6.5',
        titleEn: 'Reading: The Pegasus Spyware Incident',
        titleEs: 'Reading: El Incidente del Spyware Pegasus',
        type: 'reading',
        topicId: 'V05',
        descriptionEs: 'Análisis forense de exploits zero-click, evasión de sandbox y persistencia en memoria.',
        targetExamSkill: 'R1 / R2 / R4 / R5'
      }
    ]
  }
];

// ========================================================
// ENGLISH FOR IT 2 (PART TWO)
// ========================================================
export const ENGLISH_FOR_IT_2_MODULES: CourseModule[] = [
  {
    id: 'it2-mod-1',
    coursePart: 2,
    moduleNumber: 1,
    role: 'Network Engineer',
    titleEn: 'Network Engineer',
    titleEs: 'Ingeniería de Redes',
    objectiveEs: 'Subjuntivo, deducción lógica y sesión de entrenamiento de ingeniería de redes.',
    lessons: [
      {
        id: '2-1.1',
        number: '1.1',
        titleEn: 'Section 1 – Grammar: The Subjunctive Mood',
        titleEs: 'Sección 1: El Modo Subjuntivo',
        type: 'grammar',
        topicId: 'G13',
        descriptionEs: 'Uso de "were" en hipótesis ("If it were up to me") y forma base sin "-s" tras verbos de mandato.',
        targetExamSkill: 'UE1 / UE3 / UE5'
      },
      {
        id: '2-1.2',
        number: '1.2',
        titleEn: 'Section 2 – Grammar: Logical Deduction',
        titleEs: 'Sección 2: Deducción Lógica',
        type: 'grammar',
        topicId: 'G14',
        descriptionEs: 'Escala de certeza: must (certeza), might/could (posibilidad), can\'t/couldn\'t (imposibilidad).',
        targetExamSkill: 'UE1 / UE3 / UE4'
      },
      {
        id: '2-1.3',
        number: '1.3',
        titleEn: 'Section 3 – Listening: Network Engineer Training Session',
        titleEs: 'Sección 3 – Listening: Network Engineer Training Session',
        type: 'listening',
        topicId: 'V07',
        descriptionEs: 'Troubleshooting de sesiones: contraseñas MD5, TTL en eBGP y puerto TCP 179.',
        targetExamSkill: 'L1 / L2 / L3'
      },
      {
        id: '2-1.4',
        number: '1.4',
        titleEn: 'Section 4 – Grammar: Since as a Conjunction',
        titleEs: 'Sección 4 – Grammar: Since as a Conjunction',
        type: 'grammar',
        topicId: 'G15',
        descriptionEs: 'Diferenciar los significados de "since": After (tiempo), Because (causa) y Both.',
        targetExamSkill: 'UE1 / UE3 / UE5'
      }
    ]
  },
  {
    id: 'it2-mod-2',
    coursePart: 2,
    moduleNumber: 2,
    role: 'Customer Support',
    titleEn: 'Request Feedback',
    titleEs: 'Solicitud de Feedback',
    objectiveEs: 'Formas negativas de futuro, solicitudes formales y distinción entre funcionalidad y error.',
    lessons: [
      {
        id: '2-2.1',
        number: '2.1',
        titleEn: 'Section 1 – Grammar: Negative Future Tenses',
        titleEs: 'Sección 1 – Grammar: Negative Future Tenses',
        type: 'grammar',
        topicId: 'G16',
        descriptionEs: 'Present Continuous (decisión tomada) vs. Going to (intención/falta de intención) y Future Perfect negativo.',
        targetExamSkill: 'UE1 / UE3'
      },
      {
        id: '2-2.2',
        number: '2.2',
        titleEn: 'Listening: Mr Smith is Furious',
        titleEs: 'Listening: Atención a Clientes',
        type: 'listening',
        topicId: 'V03',
        descriptionEs: 'Escucha activa, contención de tensión y propuestas de soluciones viables.',
        targetExamSkill: 'L3 / L4'
      },
      {
        id: '2-2.3',
        number: '2.3',
        titleEn: 'Grammar: Polite Requests',
        titleEs: 'Peticiones Diplomáticas',
        type: 'grammar',
        topicId: 'G09',
        descriptionEs: 'Fórmulas de cortesía en soporte técnico crítico ("I wonder if you could...").',
        targetExamSkill: 'UE2'
      },
      {
        id: '2-2.4',
        number: '2.4',
        titleEn: 'Reading: A Feature, Not a Bug',
        titleEs: 'Reading: Funcionalidad vs. Error',
        type: 'reading',
        topicId: 'V03',
        descriptionEs: 'Cómo explicar decisiones de diseño técnico ante usuarios inconformes.',
        targetExamSkill: 'R2 / R4'
      }
    ]
  },
  {
    id: 'it2-mod-3',
    coursePart: 2,
    moduleNumber: 3,
    role: 'Software Engineer',
    titleEn: 'Evaluate Information',
    titleEs: 'Evaluación de Información',
    objectiveEs: 'Uso de "they" singular formal, énfasis con "yet" y análisis de reportes de pruebas.',
    lessons: [
      {
        id: '2-3.1',
        number: '3.1',
        titleEn: 'Grammar: They as Singular',
        titleEs: 'Uso de "They" como Singular',
        type: 'grammar',
        topicId: 'G17',
        descriptionEs: 'Redacción formal neutra: "Each employee must verify their MFA device".',
        targetExamSkill: 'UE1 / UE3'
      },
      {
        id: '2-3.2',
        number: '3.2',
        titleEn: 'Listening: Software Test Report',
        titleEs: 'Listening: Informe de Pruebas QA',
        type: 'listening',
        topicId: 'V08',
        descriptionEs: 'Reunión entre desarrolladores y QA revisando resultados de regresión.',
        targetExamSkill: 'L1 / L5'
      },
      {
        id: '2-3.3',
        number: '3.3',
        titleEn: 'Grammar: Emphasis with "Yet"',
        titleEs: 'Énfasis con "Yet"',
        type: 'grammar',
        topicId: 'G18',
        descriptionEs: 'Expresiones: "yet another vulnerability", "the patch has yet to be approved".',
        targetExamSkill: 'UE3 / UE5'
      },
      {
        id: '2-3.4',
        number: '3.4',
        titleEn: 'Reading: Unix & Ubuntu',
        titleEs: 'Reading: Unix y Ubuntu',
        type: 'reading',
        topicId: 'V08',
        descriptionEs: 'Comparativa de estabilidad, soporte LTS y servidores empresariales.',
        targetExamSkill: 'R1 / R3 / R5'
      }
    ]
  },
  {
    id: 'it2-mod-4',
    coursePart: 2,
    moduleNumber: 4,
    role: 'Software Engineer',
    titleEn: 'Identify Issues and Concerns',
    titleEs: 'Identificación de Problemas',
    objectiveEs: 'Comunicación de vulnerabilidades en revisión de código y acuerdos de mitigación.',
    lessons: [
      {
        id: '2-4.1',
        number: '4.1',
        titleEn: 'Grammar: Subjunctive in Recommendations',
        titleEs: 'Subjuntivo en Recomendaciones',
        type: 'grammar',
        topicId: 'G13',
        descriptionEs: '"The security architect insists that the team revoke the legacy API key".',
        targetExamSkill: 'UE1 / UE5'
      },
      {
        id: '2-4.2',
        number: '4.2',
        titleEn: 'Listening: Code Review Concerns',
        titleEs: 'Listening: Revisión de Código',
        type: 'listening',
        topicId: 'V08',
        descriptionEs: 'Discusión técnica sobre dependencias obsoletas e inyección de datos.',
        targetExamSkill: 'L2 / L3'
      }
    ]
  },
  {
    id: 'it2-mod-5',
    coursePart: 2,
    moduleNumber: 5,
    role: 'Network Engineer',
    titleEn: 'Defend a Point of View',
    titleEs: 'Defensa de Posturas',
    objectiveEs: 'Contrastar métricas con while/whereas, uso de "always" y correos de soporte.',
    lessons: [
      {
        id: '2-5.1',
        number: '5.1',
        titleEn: 'Grammar: Comparatives with While & Whereas',
        titleEs: 'Contrastes con While y Whereas',
        type: 'grammar',
        topicId: 'G22',
        descriptionEs: 'Contrastar propiedades de redes: "TCP ensures reliability, whereas UDP minimizes latency".',
        targetExamSkill: 'UE5'
      },
      {
        id: '2-5.2',
        number: '5.2',
        titleEn: 'Listening: Network Report Interview',
        titleEs: 'Listening: Reporte de Red',
        type: 'listening',
        topicId: 'V07',
        descriptionEs: 'Justificación técnica de ancho de banda y hardware.',
        targetExamSkill: 'L3 / L4'
      },
      {
        id: '2-5.3',
        number: '5.3',
        titleEn: 'Grammar: The Adverb Always',
        titleEs: 'El Adverbio "Always"',
        type: 'grammar',
        topicId: 'G23',
        descriptionEs: 'Fallos recurrentes: "That legacy switch is always dropping connections".',
        targetExamSkill: 'UE3 / UE5'
      },
      {
        id: '2-5.4',
        number: '5.4',
        titleEn: 'Reading: Email Support',
        titleEs: 'Reading: Correo de Soporte',
        type: 'reading',
        topicId: 'V07',
        descriptionEs: 'Comunicación técnica y coordinación ante caídas de enlace.',
        targetExamSkill: 'R1 / R2 / R4'
      }
    ]
  },
  {
    id: 'it2-mod-6',
    coursePart: 2,
    moduleNumber: 6,
    role: 'Product Management',
    titleEn: 'Update Colleagues',
    titleEs: 'Actualización al Equipo',
    objectiveEs: 'Uso de "even if" vs "even though", past perfect en secuencias de logs y feedback.',
    lessons: [
      {
        id: '2-6.1',
        number: '6.1',
        titleEn: 'Grammar: Polite Phrasing in Updates',
        titleEs: 'Fórmulas Diplomáticas',
        type: 'grammar',
        topicId: 'G09',
        descriptionEs: 'Moderar el lenguaje técnico para audiencias de negocio.',
        targetExamSkill: 'UE2 / UE3'
      },
      {
        id: '2-6.2',
        number: '6.2',
        titleEn: 'Grammar: Even If vs. Even Though',
        titleEs: '"Even If" vs. "Even Though"',
        type: 'grammar',
        topicId: 'G24',
        descriptionEs: '"Even if the server fails (hipótesis)" vs "Even though CPU is at 99% (hecho real)".',
        targetExamSkill: 'UE5'
      },
      {
        id: '2-6.3',
        number: '6.3',
        titleEn: 'Listening: Troubleshooting Tip',
        titleEs: 'Listening: Consejos de Troubleshooting',
        type: 'listening',
        topicId: 'V08',
        descriptionEs: 'Metodología para aislar variables en incidentes complejos.',
        targetExamSkill: 'L3 / L5'
      },
      {
        id: '2-6.4',
        number: '6.4',
        titleEn: 'Grammar: Past Perfect & Past Simple',
        titleEs: 'Past Perfect vs. Past Simple',
        type: 'grammar',
        topicId: 'G25',
        descriptionEs: 'Secuencia en logs: "The attacker had exported data before the alert fired".',
        targetExamSkill: 'UE3 / UE4'
      },
      {
        id: '2-6.5',
        number: '6.5',
        titleEn: 'Reading: Feedback and Postmortems',
        titleEs: 'Reading: Redacción de Postmortems',
        type: 'reading',
        topicId: 'V08',
        descriptionEs: 'Análisis de causa raíz blameless sin buscar culpables individuales.',
        targetExamSkill: 'R2 / R4 / R5'
      }
    ]
  },
  {
    id: 'it2-mod-7',
    coursePart: 2,
    moduleNumber: 7,
    role: 'Appendix',
    titleEn: 'Appendix: Grammar Patterns',
    titleEs: 'Apéndice: Patrones Gramaticales',
    objectiveEs: 'Inversiones condicionales, causalidad precisa y fórmulas de atenuación diplomática.',
    lessons: [
      {
        id: '2-7.1',
        number: '7.1',
        titleEn: 'Extra Grammar: Only If Inversion',
        titleEs: 'Inversión con "Only If"',
        type: 'grammar',
        topicId: 'G27',
        descriptionEs: 'Inversión en conmutación por error: "Only if the link fails does backup take over".',
        targetExamSkill: 'UE1 / UE5'
      },
      {
        id: '2-7.2',
        number: '7.2',
        titleEn: 'Extra Grammar: Due to vs. Because of',
        titleEs: '"Due to" vs. "Because of"',
        type: 'grammar',
        topicId: 'G28',
        descriptionEs: 'Causalidad en postmortems y reportes de incidente.',
        targetExamSkill: 'UE3 / UE4'
      },
      {
        id: '2-7.3',
        number: '7.3',
        titleEn: 'Extra Grammar: Softening in Support',
        titleEs: 'Atenuación Diplomática',
        type: 'grammar',
        topicId: 'G29',
        descriptionEs: 'Fórmulas de cortesía en soporte técnico ("I was wondering if...").',
        targetExamSkill: 'UE2 / UE5'
      }
    ]
  }
];

