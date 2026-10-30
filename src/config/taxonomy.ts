import { ObjectiveId, TopicId, ExamSection } from '../types';

export interface ObjectiveMeta {
  id: ObjectiveId;
  section: ExamSection;
  titleEs: string;
  descEs: string;
}

export interface TopicMeta {
  id: TopicId;
  code: string;
  category: 'grammar' | 'vocab';
  titleEn: string;
  titleEs: string;
  focusEs: string;
}

export const OBJECTIVES: Record<ObjectiveId, ObjectiveMeta> = {
  // Use of English
  UE1: {
    id: 'UE1',
    section: 'UE',
    titleEs: 'Instrucciones y Documentación',
    descEs: 'Seguir instrucciones precisas, guías técnicas y documentación de sistemas.'
  },
  UE2: {
    id: 'UE2',
    section: 'UE',
    titleEs: 'Aclaraciones y Cortesía',
    descEs: 'Pedir aclaraciones y feedback con fórmulas diplomáticas y de cortesía profesional.'
  },
  UE3: {
    id: 'UE3',
    section: 'UE',
    titleEs: 'Actualizaciones e Incidentes',
    descEs: 'Dar actualizaciones de estado y participar activamente en discusiones de equipo.'
  },
  UE4: {
    id: 'UE4',
    section: 'UE',
    titleEs: 'Procedimientos y Pasos',
    descEs: 'Explicar procedimientos técnicos, dar instrucciones a usuarios e ingenieros.'
  },
  UE5: {
    id: 'UE5',
    section: 'UE',
    titleEs: 'Persuasión y Criterio Técnico',
    descEs: 'Defender un punto de vista o recomendación de arquitectura con lenguaje persuasivo.'
  },

  // Listening
  L1: {
    id: 'L1',
    section: 'L',
    titleEs: 'Significado de Enunciado',
    descEs: 'Comprender el sentido literal e intención inmediata de una frase hablada.'
  },
  L2: {
    id: 'L2',
    section: 'L',
    titleEs: 'Significado a Nivel de Discurso',
    descEs: 'Entender el flujo global de una reunión técnica o llamada de soporte.'
  },
  L3: {
    id: 'L3',
    section: 'L',
    titleEs: 'Inferir Significado y Tono',
    descEs: 'Deducir información implícita, actitud del cliente o urgencia de un incidente.'
  },
  L4: {
    id: 'L4',
    section: 'L',
    titleEs: 'Construir Discurso',
    descEs: 'Identificar conectores lógicos, contrastes y secuencias temporales habladas.'
  },
  L5: {
    id: 'L5',
    section: 'L',
    titleEs: 'Localizar Información Específica',
    descEs: 'Captar datos clave: IPs, puertos, códigos de error, plazos o métricas citadas.'
  },

  // Reading
  R1: {
    id: 'R1',
    section: 'R',
    titleEs: 'Datos en Oraciones Específicas',
    descEs: 'Localizar y comprender detalles técnicos puntuales dentro de una oración.'
  },
  R2: {
    id: 'R2',
    section: 'R',
    titleEs: 'Información en Párrafos',
    descEs: 'Sintetizar y extraer conclusiones contenidas en un párrafo de documentación.'
  },
  R3: {
    id: 'R3',
    section: 'R',
    titleEs: 'Escaneo Rápido (Scanning)',
    descEs: 'Localizar velozmente datos clave (métricas, comandos, políticas) con limitador de tiempo.'
  },
  R4: {
    id: 'R4',
    section: 'R',
    titleEs: 'Idea Principal (Skimming)',
    descEs: 'Identificar el propósito central o postura de un informe o comunicado de seguridad.'
  },
  R5: {
    id: 'R5',
    section: 'R',
    titleEs: 'Combinar Múltiples Fuentes',
    descEs: 'Correlacionar dos o más partes del texto para llegar a la respuesta correcta.'
  }
};

export const TOPICS: Record<TopicId, TopicMeta> = {
  // Grammar Topics G01 - G26
  G01: { id: 'G01', code: 'G01', category: 'grammar', titleEn: 'Passive Voice in IT', titleEs: 'Voz Pasiva en IT', focusEs: 'Pasiva Modal (must be + V3 sin "to"), Operativa (were distributed) y de Reporte (It is thought that / are thought to).' },
  G02: { id: 'G02', code: 'G02', category: 'grammar', titleEn: 'Relative Pronouns', titleEs: 'Pronombres Relativos', focusEs: 'Which vs that, whose, what, when, why y where en especificaciones de topología y código.' },
  G03: { id: 'G03', code: 'G03', category: 'grammar', titleEn: 'Past Simple with As if / As though', titleEs: 'Past Simple con As if / As though', focusEs: 'Comportamientos anómalos que simulan un estado irreal o sospechoso.' },
  G04: { id: 'G04', code: 'G04', category: 'grammar', titleEn: 'Emphatic "Do"', titleEs: 'Énfasis con "Do / Does / Did"', focusEs: 'Confirmar medidas tomadas ("We did patch the firewall") en soporte y postmortems.' },
  G05: { id: 'G05', code: 'G05', category: 'grammar', titleEn: 'Dependent Prepositions', titleEs: 'Preposiciones Dependientes', focusEs: 'Comply with, adhere to, vulnerable to, protect against, consist of.' },
  G06: { id: 'G06', code: 'G06', category: 'grammar', titleEn: 'Sentence-Initial Conjunctions', titleEs: 'Oraciones que inician con Conjunción', focusEs: 'Although, Despite, Whereas abriendo cláusulas condicionales de arquitectura.' },
  G07: { id: 'G07', code: 'G07', category: 'grammar', titleEn: 'Negative & Restrictive Inversion', titleEs: 'Inversión Gramatical', focusEs: 'Seldom, Rarely, Under no circumstances should users share credentials.' },
  G08: { id: 'G08', code: 'G08', category: 'grammar', titleEn: 'Modals for Suggestions & Advice', titleEs: 'Modales de Sugerencia y Consejo', focusEs: 'Ought to, should, had better, might want to al asesorar clientes o devs.' },
  G09: { id: 'G09', code: 'G09', category: 'grammar', titleEn: 'Polite Requests & Courtesy Adverbs', titleEs: 'Peticiones Diplomáticas y Cortesía', focusEs: 'Would you mind checking..., Could you possibly verify..., kindly review.' },
  G10: { id: 'G10', code: 'G10', category: 'grammar', titleEn: 'Imperatives in Runbooks & Docs', titleEs: 'Imperativos en Runbooks', focusEs: 'Instrucciones técnicas directas y advertencias de no ejecutar comandos riesgosos.' },
  G11: { id: 'G11', code: 'G11', category: 'grammar', titleEn: 'Adverbs of Possibility & Probability', titleEs: 'Adverbios de Posibilidad y Probabilidad', focusEs: 'Arguably, presumably, conceivably al estimar causas raíz y riesgos.' },
  G12: { id: 'G12', code: 'G12', category: 'grammar', titleEn: 'Future Perfect & "On the point of"', titleEs: 'Future Perfect & "On the point of"', focusEs: 'Metas cumplidas antes de una hora ("will have deployed by 02:00 UTC").' },
  G13: { id: 'G13', code: 'G13', category: 'grammar', titleEn: 'Subjunctive in Technical Reqs', titleEs: 'Subjuntivo en Requisitos Técnicos', focusEs: 'We recommend that the admin revoke; It is vital that TLS be enabled.' },
  G14: { id: 'G14', code: 'G14', category: 'grammar', titleEn: 'Modals of Logical Deduction', titleEs: 'Modales de Deducción Lógica', focusEs: 'Must have failed, can’t be a DNS issue, might have expired tras ver telemetría.' },
  G15: { id: 'G15', code: 'G15', category: 'grammar', titleEn: '"Since" as Conjunction (Causal/Temporal)', titleEs: '"Since" Causal y Temporal', focusEs: 'Diferenciar causal ("ya que el gateway cayó") de temporal ("desde las 08:00").' },
  G16: { id: 'G16', code: 'G16', category: 'grammar', titleEn: 'Negative Future Forms', titleEs: 'Formas Negativas de Futuro', focusEs: 'Will not tolerate, won’t be able to restore, until clauses con presente.' },
  G17: { id: 'G17', code: 'G17', category: 'grammar', titleEn: 'Singular "They" in User Policies', titleEs: 'Singular "They" en Políticas', focusEs: 'Uso neutral formal: "Each employee must verify their MFA device".' },
  G18: { id: 'G18', code: 'G18', category: 'grammar', titleEn: 'Emphasis with "Yet"', titleEs: 'Énfasis con "Yet"', focusEs: 'Yet another vulnerability; the patch has yet to be approved.' },
  G19: { id: 'G19', code: 'G19', category: 'grammar', titleEn: 'Work & IT Phrasal Verbs', titleEs: 'Phrasal Verbs de Soporte e IT', focusEs: 'Roll back, boot up, filter out, trace down, phase out, back up, sign off.' },
  G20: { id: 'G20', code: 'G20', category: 'grammar', titleEn: 'Cleft Sentences for Precision', titleEs: 'Cleft Sentences (Oraciones Hendidas)', focusEs: 'It was the core switch that dropped packets; What we need is a load balancer.' },
  G21: { id: 'G21', code: 'G21', category: 'grammar', titleEn: 'Prioritizing with Conditionals (Zero & First)', titleEs: 'Condicionales de Priorización (Zero & First)', focusEs: 'Establecer causa y efecto en SLAs: "If the core link drops, traffic automatically reroutes".' },
  G22: { id: 'G22', code: 'G22', category: 'grammar', titleEn: 'Comparisons with While & Whereas', titleEs: 'Contrastes con While & Whereas', focusEs: 'TCP guarantees delivery whereas UDP minimizes latency.' },
  G23: { id: 'G23', code: 'G23', category: 'grammar', titleEn: 'The Adverb "Always" (Habit vs Irritation)', titleEs: 'Uso de "Always" con Continuos', focusEs: 'The legacy daemon is always crashing (falla recurrente molesta).' },
  G24: { id: 'G24', code: 'G24', category: 'grammar', titleEn: 'Even if vs Even though', titleEs: 'Even If (Hipótesis) vs Even Though (Realidad)', focusEs: 'Even if the link drops (hipotético) vs Even though CPU is at 98% (hecho).' },
  G25: { id: 'G25', code: 'G25', category: 'grammar', titleEn: 'Past Perfect vs Past Simple', titleEs: 'Past Perfect vs Past Simple en Logs', focusEs: 'The intruder had deleted evidence before the SOC isolated the host.' },
  G26: { id: 'G26', code: 'G26', category: 'grammar', titleEn: 'Workplace Communication Idioms', titleEs: 'Idioms de Comunicación Laboral', focusEs: 'Touch base, on the same page, iron out, ballpark figure, bite the bullet.' },
  G27: { id: 'G27', code: 'G27', category: 'grammar', titleEn: 'Conditionals & "Only If" Inversion', titleEs: 'Condicionales e Inversión con "Only if"', focusEs: 'Second/Third conditionals y "Only if the link drops does the backup initiate".' },
  G28: { id: 'G28', code: 'G28', category: 'grammar', titleEn: 'Causality: Due to vs. Because of', titleEs: 'Causalidad: Due to vs. Because of', focusEs: 'Due to (adjetival tras to be) vs Because of (adverbial de causa de la acción).' },
  G29: { id: 'G29', code: 'G29', category: 'grammar', titleEn: 'Softening Orders with Past Tenses', titleEs: 'Diplomacia y "Softening" en Soporte', focusEs: 'I was wondering if you could verify; I was thinking we might roll back.' },

  // Vocabulary Domains V01 - V08
  V01: { id: 'V01', code: 'V01', category: 'vocab', titleEn: 'Cloud Computing & Infrastructure', titleEs: 'Cloud Computing e Infraestructura', focusEs: 'Scalability, latency, IaaS/PaaS, orchestration, multi-tenant, egress traffic.' },
  V02: { id: 'V02', code: 'V02', category: 'vocab', titleEn: 'Compilers vs Interpreters', titleEs: 'Compiladores vs Intérpretes', focusEs: 'Bytecode, runtime, syntax parsing, JIT compilation, binaries, execution speed.' },
  V03: { id: 'V03', code: 'V03', category: 'vocab', titleEn: 'Customer Support & SLA Escalation', titleEs: 'Soporte, Clientes Difíciles y SLAs', focusEs: 'Feature request vs bug, empathy phrasing, de-escalation, workaround, backlog.' },
  V04: { id: 'V04', code: 'V04', category: 'vocab', titleEn: 'Social Engineering & Fraudulent Calls', titleEs: 'Ingeniería Social y Fraude', focusEs: 'Pretexting, phishing, vishing, credential harvesting, impersonation, red flags.' },
  V05: { id: 'V05', code: 'V05', category: 'vocab', titleEn: 'Information Security Policies (InfoSec)', titleEs: 'Políticas de Seguridad y Cumplimiento', focusEs: 'Least privilege, access control list (ACL), zero trust, compliance, audit trail.' },
  V06: { id: 'V06', code: 'V06', category: 'vocab', titleEn: 'IT Roles & Responsibilities', titleEs: 'Roles y Responsabilidades en IT', focusEs: 'DevOps, Tier 1/2/3 Support, SOC Analyst, Network Architect, CISO, Product Owner.' },
  V07: { id: 'V07', code: 'V07', category: 'vocab', titleEn: 'Networking, Topologies & Protocols', titleEs: 'Redes, Topologías y Protocolos', focusEs: 'BGP, OSPF, VLAN tagging, handshake, MTU, packet drop, jitter, subnetting.' },
  V08: { id: 'V08', code: 'V08', category: 'vocab', titleEn: 'Software Engineering & Product Management', titleEs: 'Ingeniería de Software y Producto', focusEs: 'OS options (Unix/Linux), vendor evaluation, usability (UX), regression tests.' }
};

export interface OpenEDGDomain {
  id: string;
  number: number;
  titleEn: string;
  titleEs: string;
  descriptionEs: string;
  keySubdomains: { code: string; titleEs: string; focus: string }[];
}

export const OPENEDG_OBJECTIVE_DOMAINS: OpenEDGDomain[] = [
  {
    id: 'domain-1',
    number: 1,
    titleEn: 'Professional Communication in IT Environments',
    titleEs: 'Comunicación Profesional en Entornos de TI',
    descriptionEs: 'Roles, reuniones técnicas, explicar procedimientos y solicitar/responder aclaraciones con cortesía diplomática.',
    keySubdomains: [
      { code: '1.1', titleEs: 'Roles y Responsabilidades', focus: 'Definir asignaciones en squads de ingeniería y soporte.' },
      { code: '1.2', titleEs: 'Reuniones de Sincronización', focus: 'Stand-ups, retroalimentación y aclaraciones estructuradas.' }
    ]
  },
  {
    id: 'domain-2',
    number: 2,
    titleEn: 'Explaining Systems, Technologies, and Processes',
    titleEs: 'Explicación de Sistemas, Tecnologías y Procesos',
    descriptionEs: 'Arquitecturas, flujos de desarrollo, comparación de plataformas y traducción de conceptos a diferentes audiencias.',
    keySubdomains: [
      { code: '2.1', titleEs: 'Arquitectura de Sistemas', focus: 'Describir componentes, microservicios y protocolos.' },
      { code: '2.4', titleEs: 'Explicación a Audiencias No Técnicas', focus: 'Traducir problemas de infraestructura o ciberseguridad a clientes y directivos usando analogías y sin tecnicismos innecesarios.' }
    ]
  },
  {
    id: 'domain-3',
    number: 3,
    titleEn: 'Interpreting Technical Documentation and Information',
    titleEs: 'Interpretación de Documentación e Información Técnica',
    descriptionEs: 'Lectura crítica de diagramas de arquitectura, acuerdos de nivel de servicio (SLA), runbooks y análisis de información faltante.',
    keySubdomains: [
      { code: '3.1', titleEs: 'Especificaciones de Sistemas', focus: 'Extraer requisitos funcionales y de seguridad.' },
      { code: '3.3', titleEs: 'Detección de Información Faltante (GSE 59–75)', focus: 'Determinar cuándo faltan datos esenciales en un texto o reporte para ejecutar una tarea técnica.' }
    ]
  },
  {
    id: 'domain-4',
    number: 4,
    titleEn: 'Analysing Technical Problems and Solutions',
    titleEs: 'Análisis de Problemas Técnicos y Soluciones',
    descriptionEs: 'Análisis de causa raíz (RCA), resolución de fallos (troubleshooting), correlación de logs y evaluación de trade-offs.',
    keySubdomains: [
      { code: '4.1', titleEs: 'Diagnóstico Forense y Logs', focus: 'Correlacionar telemetría y eventos de error.' },
      { code: '4.2', titleEs: 'Estrategias de Mitigación', focus: 'Comparar soluciones transitorias frente a parches definitivos.' }
    ]
  },
  {
    id: 'domain-5',
    number: 5,
    titleEn: 'Collaboration and Communication in Technical Projects',
    titleEs: 'Colaboración y Negociación en Proyectos Técnicos',
    descriptionEs: 'Compartir ideas, defender propuestas de arquitectura y negociar soluciones técnicas y deuda técnica entre equipos multidisciplinarios.',
    keySubdomains: [
      { code: '5.1', titleEs: 'Recomendaciones Técnicas Persuasivas', focus: 'Justificar migraciones y decisiones de diseño.' },
      { code: '5.3', titleEs: 'Negociación Técnica y Deuda Técnica', focus: 'Negociar plazos, alcance de sprint y balance entre calidad/QA y velocidad de entrega comercial.' }
    ]
  }
];
