import { Question } from '../../types';

/**
 * English for IT 1 – Module 2: Network Engineer: Interpret & Implement Instructions
 * 2.3 Section 3 – Grammar: Dependent Prepositions
 * Official OpenEDG / Cisco Curriculum
 * Covers:
 *  - Dependent prepositions bound to specific verbs, nouns, and adjectives
 *  - Verbs: listen to, depend on, rely on, consist of, worry about, protect from, comment on, apologize for, respond to
 *  - Adjectives: incapable of, capable of, responsible for
 *  - Nouns & Collocations: increase in, impact on, advantages of, according to
 * 2.3.3 Exercise 1 (6 items) + 2.3.4 Exercise 2 (6 items) + 2 Video Transcript Items = 14 items
 */
export const ENGLISH_FOR_IT_1_MODULE_2_SECTION_3_BANK: Question[] = [
  {
    "id": "it1-mod2-sec3-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Read the sentence and select the dependent preposition: \"The strength of the firewall has been vital since the recent increase in cyber attacks.\"",
    "options": [
      "in",
      "of",
      "since",
      "for"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"the recent increase in cyber attacks\" lleva la preposición después de increase.\n• Regla: aumento de ➔ increase IN.\n• Descartas: \"strength of\" también lleva of, pero el ejercicio busca increase IN; since y for no son preposiciones fijas aquí.",
    "why_wrong": [
      "Opción correcta: \"increase in\" = \"aumento de / en\".",
      "Incorrecto: \"strength of\" también lleva of, pero este ejercicio busca increase IN.",
      "Incorrecto: since no es una preposición fija aquí.",
      "Incorrecto: for no es una preposición fija aquí."
    ],
    "tip_es": "Sustantivo técnico: [increase IN + área de aumento].",
    "ref": null,
    "human_rule": "\"Un aumento de\" ➔ increase IN.",
    "trigger_anchor": "the recent increase ______ cyber attacks ➔ in",
    "spanglish_trap": "Poner of por el \"de\" del español. Con increase va IN.",
    "workplace_usage": {
      "scenario": "Informe de Telemetría de Amenazas",
      "en": "The recent increase in DDoS attacks required provisioning extra scrubbing capacity.",
      "es": "El reciente aumento en ataques DDoS requirió aprovisionar capacidad adicional de depuración de tráfico."
    }
  },
  {
    "id": "it1-mod2-sec3-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Read the sentence and select the dependent preposition: \"This process mainly consists of dragging and dropping the files in this folder when you’re ready.\"",
    "options": [
      "in",
      "of",
      "when",
      "with"
    ],
    "answer": 1,
    "why_correct": "• Pista: antes del hueco está \"consists\".\n• Regla: consistir en ➔ consist OF.\n• Descartas: in, when y with no son la preposición fija de consist.",
    "why_wrong": [
      "Incorrecto: \"in this folder\" es un lugar, no la preposición fija de consist.",
      "Opción correcta: \"consists of\" = \"consiste en\".",
      "Incorrecto: when no es una preposición.",
      "Incorrecto: con consist no va \"with\"."
    ],
    "tip_es": "Verbo de procedimiento: [consist OF + gerundio o sustantivos].",
    "ref": null,
    "human_rule": "\"Consistir en\" ➔ consist OF.",
    "trigger_anchor": "This process mainly consists ______ dragging and dropping ➔ of",
    "spanglish_trap": "Decir \"consists in\" por el \"en\" del español. En inglés es OF.",
    "workplace_usage": {
      "scenario": "Manual de Despliegue de Código",
      "en": "The onboarding process consists of configuring SSH keys and cloning the main repository.",
      "es": "El proceso de incorporación consiste en configurar claves SSH y clonar el repositorio principal."
    }
  },
  {
    "id": "it1-mod2-sec3-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Read the sentence and select the dependent preposition: \"Don’t worry about remembering every detail at the start.\"",
    "options": [
      "for",
      "at",
      "about",
      "of"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Don't worry…\" y después viene el tema de la preocupación.\n• Regla: preocuparse por ➔ worry ABOUT.\n• Descartas: for, at y of no son la preposición habitual con worry.",
    "why_wrong": [
      "Incorrecto: \"worry for\" existe, pero con otro sentido (preocuparse por alguien).",
      "Incorrecto: con worry no va \"at\".",
      "Opción correcta: \"worry about\" = \"preocuparse por\".",
      "Incorrecto: con worry no va \"of\"."
    ],
    "tip_es": "Verbo de estado/emoción: [worry ABOUT + -ing o sustantivo].",
    "ref": null,
    "human_rule": "\"Preocuparse por\" ➔ worry ABOUT.",
    "trigger_anchor": "Don't worry ______ remembering every detail ➔ about",
    "spanglish_trap": "Poner for por el \"por\" del español. Con worry va ABOUT.",
    "workplace_usage": {
      "scenario": "Capacitación de Nuevos Administradores de Red",
      "en": "Don’t worry about memorizing every CLI parameter; focus on understanding the routing logic.",
      "es": "No te preocupes por memorizar cada parámetro de la CLI; enfócate en comprender la lógica de enrutamiento."
    }
  },
  {
    "id": "it1-mod2-sec3-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Read the sentence and select the dependent preposition: \"You will be on a team mainly responsible for protecting the network.\"",
    "options": [
      "at",
      "on",
      "with",
      "for"
    ],
    "answer": 3,
    "why_correct": "• Pista: antes del hueco está \"responsible\".\n• Regla: responsable de ➔ responsible FOR.\n• Descartas: at, on y with no van con responsible.",
    "why_wrong": [
      "Incorrecto: con responsible no va \"at\".",
      "Incorrecto: \"on a team\" es una preposición de otro lugar de la frase.",
      "Incorrecto: con responsible no va \"with\".",
      "Opción correcta: \"responsible for\" = \"responsable de\"."
    ],
    "tip_es": "Adjetivo de rol o función: [responsible FOR + sustantivo / gerundio].",
    "ref": null,
    "human_rule": "\"Responsable de\" ➔ responsible FOR.",
    "trigger_anchor": "responsible ______ protecting the network ➔ for",
    "spanglish_trap": "Poner of por el \"de\" del español. Con responsible va FOR.",
    "workplace_usage": {
      "scenario": "Definición de Roles en el SOC",
      "en": "The Tier-2 security analyst is responsible for investigating escalated intrusion alerts.",
      "es": "El analista de seguridad de Nivel 2 es responsable de investigar las alertas de intrusión escaladas."
    }
  },
  {
    "id": "it1-mod2-sec3-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Read the sentence and select the dependent preposition: \"Our sincerest thanks to everyone who protected us from this threat.\"",
    "options": [
      "from",
      "to",
      "against",
      "with"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"protected us ______ this threat\": se indica de qué se protege.\n• Regla: proteger de ➔ protect FROM.\n• Descartas: to y with no van con protect; against también es posible, pero el ejercicio busca from.",
    "why_wrong": [
      "Opción correcta: \"protected us from\" = \"nos protegió de\".",
      "Incorrecto: con protect no va \"to\".",
      "Incorrecto: \"protect against\" también se usa; este ejercicio busca from.",
      "Incorrecto: con protect no va \"with\"."
    ],
    "tip_es": "Verbo de seguridad: [protect + objeto + FROM / AGAINST + amenaza].",
    "ref": null,
    "human_rule": "\"Proteger de\" ➔ protect FROM.",
    "trigger_anchor": "protected us ______ this threat ➔ from",
    "spanglish_trap": "Elegir against por \"contra\". Aquí se busca from.",
    "workplace_usage": {
      "scenario": "Reconocimiento tras Mitigación de Ransomware",
      "en": "The endpoint detection agent protected our databases from data exfiltration.",
      "es": "El agente de detección de terminales protegió nuestras bases de datos de la exfiltración de información."
    }
  },
  {
    "id": "it1-mod2-sec3-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Read the sentence and select the dependent preposition: \"The network users commented on the professionalism of the whole team.\"",
    "options": [
      "of",
      "on",
      "about",
      "with"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"commented ______ the professionalism\": se indica sobre qué se opinó.\n• Regla: comentar sobre ➔ comment ON.\n• Descartas: \"professionalism of\" también lleva of, pero el ejercicio busca commented ON; about y with no son la forma pedida.",
    "why_wrong": [
      "Incorrecto: \"professionalism of\" también lleva of, pero este ejercicio busca commented ON.",
      "Opción correcta: \"commented on\" = \"comentó sobre\".",
      "Incorrecto: \"comment about\" también existe, pero este ejercicio busca on.",
      "Incorrecto: con comment no va \"with\"."
    ],
    "tip_es": "Verbo de comunicación: [comment ON + tema u objeto de opinión].",
    "ref": null,
    "human_rule": "\"Comentar sobre\" ➔ comment ON.",
    "trigger_anchor": "commented ______ the professionalism of the team ➔ on",
    "spanglish_trap": "Poner about por \"sobre\". Con comment la forma habitual es ON.",
    "workplace_usage": {
      "scenario": "Encuesta de Satisfacción del Usuario Interno",
      "en": "Several departmental managers commented on the swift resolution of the network outage.",
      "es": "Varios gerentes de departamento comentaron sobre la rápida resolución de la caída de la red."
    }
  },
  {
    "id": "it1-mod2-sec3-ex2-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the correct dependent preposition: \"We depend __________ the firewall more and more these days, as the level of threat rises.\"",
    "options": [
      "of",
      "in",
      "on",
      "for"
    ],
    "answer": 2,
    "why_correct": "• Pista: antes del hueco está \"depend\".\n• Regla: depender de ➔ depend ON.\n• Descartas: of, in y for no van con depend.",
    "why_wrong": [
      "Incorrecto: con depend no va \"of\".",
      "Incorrecto: con depend no va \"in\".",
      "Opción correcta: \"depend on\" = \"depender de\".",
      "Incorrecto: con depend no va \"for\"."
    ],
    "tip_es": "Regla de oro oficial: [depend ON]. Jamás uses \"of\".",
    "ref": null,
    "human_rule": "\"Depender de\" ➔ depend ON.",
    "trigger_anchor": "We depend ______ the firewall ➔ on",
    "spanglish_trap": "Decir \"depend of\" por el \"de\" del español. En inglés es ON.",
    "workplace_usage": {
      "scenario": "Evaluación de Dependencias de Infraestructura",
      "en": "Our microservices depend on the Redis cluster for fast session state management.",
      "es": "Nuestros microservicios dependen del clúster de Redis para la gestión rápida del estado de sesión."
    }
  },
  {
    "id": "it1-mod2-sec3-ex2-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the correct dependent preposition: \"The increase __________ productivity has to be acknowledged.\"",
    "options": [
      "at",
      "of",
      "on",
      "in"
    ],
    "answer": 3,
    "why_correct": "• Pista: antes del hueco está \"increase\".\n• Regla: aumento de ➔ increase IN.\n• Descartas: at, of y on no van con increase.",
    "why_wrong": [
      "Incorrecto: con increase no va \"at\".",
      "Incorrecto: con increase no va \"of\" en este sentido.",
      "Incorrecto: con increase no va \"on\".",
      "Opción correcta: \"increase in\" = \"aumento de\"."
    ],
    "tip_es": "Sustantivo + ámbito de crecimiento: [increase IN + métrica/área].",
    "ref": null,
    "human_rule": "\"Un aumento de\" ➔ increase IN.",
    "trigger_anchor": "The increase ______ productivity ➔ in",
    "spanglish_trap": "Poner of. Con increase va IN.",
    "workplace_usage": {
      "scenario": "Revisión de Métricas de Entrega Ágil",
      "en": "The increase in automated test coverage has reduced our production defects significantly.",
      "es": "El aumento en la cobertura de pruebas automatizadas ha reducido significativamente nuestros defectos en producción."
    }
  },
  {
    "id": "it1-mod2-sec3-ex2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the correct dependent preposition: \"The advantages __________ working this way are obvious to most people.\"",
    "options": [
      "of",
      "on",
      "in",
      "with"
    ],
    "answer": 0,
    "why_correct": "• Pista: antes del hueco está \"advantages\".\n• Regla: ventajas de ➔ advantages OF.\n• Descartas: on, in y with no van con advantages.",
    "why_wrong": [
      "Opción correcta: \"advantages of\" = \"ventajas de\".",
      "Incorrecto: con advantages no va \"on\".",
      "Incorrecto: con advantages no va \"in\".",
      "Incorrecto: con advantages no va \"with\"."
    ],
    "tip_es": "Sustantivo de beneficio: [the advantages OF + doing something].",
    "ref": null,
    "human_rule": "\"Ventajas de\" ➔ advantages OF.",
    "trigger_anchor": "The advantages ______ working this way ➔ of",
    "spanglish_trap": "Cambiar la preposición por analogía con increase in. Con advantages va OF.",
    "workplace_usage": {
      "scenario": "Adopción de Infraestructura como Código (IaC)",
      "en": "The advantages of using Terraform over manual console configuration include repeatability and version control.",
      "es": "Las ventajas de usar Terraform sobre la configuración manual en consola incluyen repetibilidad y control de versiones."
    }
  },
  {
    "id": "it1-mod2-sec3-ex2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the correct dependent preposition: \"We apologize __________ not giving your concerns more consideration.\"",
    "options": [
      "to",
      "for",
      "in",
      "about"
    ],
    "answer": 1,
    "why_correct": "• Pista: antes del hueco está \"apologize\".\n• Regla: disculparse por ➔ apologize FOR.\n• Descartas: to, in y about no son la forma habitual.",
    "why_wrong": [
      "Incorrecto: \"apologize to\" se usa para la persona, no para el motivo.",
      "Opción correcta: \"apologize for\" = \"disculparse por\".",
      "Incorrecto: con apologize no va \"in\".",
      "Incorrecto: \"apologize about\" no es la forma habitual."
    ],
    "tip_es": "Estructura completa de cortesía: [apologize TO someone FOR something].",
    "ref": null,
    "human_rule": "\"Disculparse por\" ➔ apologize FOR.",
    "trigger_anchor": "We apologize ______ not giving your concerns… ➔ for",
    "spanglish_trap": "Poner to por \"disculparse a\". El motivo va con FOR.",
    "workplace_usage": {
      "scenario": "Comunicado de Incidencia al Cliente",
      "en": "We apologize for the unplanned downtime caused by the core switch reboot.",
      "es": "Nos disculpamos por la inactividad imprevista causada por el reinicio del switch central."
    }
  },
  {
    "id": "it1-mod2-sec3-ex2-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the correct dependent preposition: \"According __________ their analysis, productivity is down further than they expected.\"",
    "options": [
      "for",
      "on",
      "to",
      "of"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"According ______ their analysis\" es una expresión fija.\n• Regla: según ➔ according TO.\n• Descartas: for, on y of no van con according.",
    "why_wrong": [
      "Incorrecto: con according no va \"for\".",
      "Incorrecto: con according no va \"on\".",
      "Opción correcta: \"according to\" = \"según\".",
      "Incorrecto: con according no va \"of\"."
    ],
    "tip_es": "Locución preposicional fija: [according TO + fuente/análisis].",
    "ref": null,
    "human_rule": "\"Según\" ➔ according TO.",
    "trigger_anchor": "According ______ their analysis ➔ to",
    "spanglish_trap": "Poner of por el \"de\" del español. Según se dice according TO.",
    "workplace_usage": {
      "scenario": "Presentación de Resultados de Auditoría",
      "en": "According to the external penetration testing report, our API endpoints lack rate limiting.",
      "es": "De acuerdo con el informe externo de pruebas de penetración, nuestros endpoints de API carecen de límite de peticiones."
    }
  },
  {
    "id": "it1-mod2-sec3-ex2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the correct dependent preposition: \"Nobody has responded __________ my complaint about these decisions.\"",
    "options": [
      "at",
      "with",
      "for",
      "to"
    ],
    "answer": 3,
    "why_correct": "• Pista: antes del hueco está \"responded\".\n• Regla: responder a ➔ respond TO.\n• Descartas: at, with y for no van con respond.",
    "why_wrong": [
      "Incorrecto: con respond no va \"at\".",
      "Incorrecto: con respond no va \"with\".",
      "Incorrecto: con respond no va \"for\".",
      "Opción correcta: \"responded to\" = \"respondió a\"."
    ],
    "tip_es": "Verbo de soporte/comunicación: [respond TO + ticket / complaint / user].",
    "ref": null,
    "human_rule": "\"Responder a\" ➔ respond TO.",
    "trigger_anchor": "Nobody has responded ______ my complaint ➔ to",
    "spanglish_trap": "Omitir la preposición (\"respond my complaint\"). Con respond va TO.",
    "workplace_usage": {
      "scenario": "Escalación de SLA de Soporte al Cliente",
      "en": "Our SLA guarantees that a Tier-2 engineer will respond to high-priority incident tickets within fifteen minutes.",
      "es": "Nuestro SLA garantiza que un ingeniero de Nivel 2 responderá a los tickets de incidentes de alta prioridad dentro de los quince minutos."
    }
  },
  {
    "id": "it1-mod2-sec3-video-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the correct dependent preposition from the video transcript: \"The legacy monitoring system seemed incapable __________ reacting promptly to DDoS spikes.\"",
    "options": [
      "of",
      "to",
      "in",
      "for"
    ],
    "answer": 0,
    "why_correct": "• Pista: antes del hueco está \"incapable\".\n• Regla: incapaz de ➔ incapable OF.\n• Descartas: to, in y for no van con incapable.",
    "why_wrong": [
      "Opción correcta: \"incapable of\" = \"incapaz de\".",
      "Incorrecto: con incapable no va \"to\".",
      "Incorrecto: con incapable no va \"in\".",
      "Incorrecto: con incapable no va \"for\"."
    ],
    "tip_es": "Adjetivo del video oficial: [incapable OF + verbo en -ing].",
    "ref": null,
    "human_rule": "\"Incapaz de\" ➔ incapable OF + -ing.",
    "trigger_anchor": "incapable ______ reacting promptly ➔ of",
    "spanglish_trap": "Decir \"incapable to react\". Con incapable va OF + -ing.",
    "workplace_usage": {
      "scenario": "Evaluación de Capacidades de Monitoreo",
      "en": "The open-source monitoring tool was incapable of handling high-volume syslog streams.",
      "es": "La herramienta de monitoreo de código abierto era incapaz de manejar flujos de syslog de alto volumen."
    }
  },
  {
    "id": "it1-mod2-sec3-video-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the correct dependent preposition: \"The diagnosis showed that the core network failure had a massive impact __________ daily operations.\"",
    "options": [
      "in",
      "on",
      "at",
      "to"
    ],
    "answer": 1,
    "why_correct": "• Pista: antes del hueco está \"impact\".\n• Regla: impacto en ➔ impact ON.\n• Descartas: in, at y to no van con impact.",
    "why_wrong": [
      "Incorrecto: con impact no va \"in\", aunque en español digamos \"en\".",
      "Opción correcta: \"impact on\" = \"impacto en\".",
      "Incorrecto: con impact no va \"at\".",
      "Incorrecto: con impact no va \"to\"."
    ],
    "tip_es": "Sustantivo oficial del video: [have an impact ON + elemento afectado].",
    "ref": null,
    "human_rule": "\"Impacto en\" ➔ impact ON.",
    "trigger_anchor": "a massive impact ______ daily operations ➔ on",
    "spanglish_trap": "Decir \"impact in\" por el \"en\" del español. En inglés es ON.",
    "workplace_usage": {
      "scenario": "Análisis de Impacto en el Negocio (BIA)",
      "en": "The unannounced core switch reboot had a severe impact on the automated billing pipeline.",
      "es": "El reinicio no anunciado del switch central tuvo un impacto grave en el proceso automatizado de facturación."
    }
  }
];
