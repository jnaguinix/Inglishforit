import { Question } from '../../types';

/**
 * English for IT 1 – Module 4: Customer Support & Communication Strategies
 * Reactivos oficiales de OpenEDG / Cisco Networking Academy.
 * Cobertura de secciones:
 *  - 4.1 Section 1 – Grammar: Adverbs of Courtesy & Transition (4.1.2: 14 items)
 *  - 4.2 Section 2 – Listening: Customer Support Dialogues & Paraphrases (4.2.2 & 4.2.3: 10 items)
 *  - 4.3 Section 3 – Workplace Idioms & Phrasal Expressions (4.3.2 & 4.3.3: 14 items)
 *  - 4.4 Section 4 – Reading: Asking Customers Effective Questions (4.4.4: 6 items)
 * 
 * Todos los reactivos están tipados estrictamente como 'pool: practice' para enriquecer
 * la práctica por módulos y temas sin descalibrar el simulacro oficial TestNow™.
 */
export const ENGLISH_FOR_IT_1_MODULE_4_BANK: Question[] = [
  {
    "id": "it1-mod4-sec1-ex1-q1",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the appropriate courtesy adverb: \"Could you __________ tell me why I am still unable to send an email?\"",
    "options": [
      "Kindly / Urgently",
      "Furthermore",
      "Harshly",
      "Roughly"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una petición cortés: \"Could you ______ tell me…\".\n• Regla: kindly (o urgently) va antes del verbo para suavizar o dar urgencia.\n• Descartas: Furthermore, Harshly y Roughly no encajan en una petición.",
    "why_wrong": [
      "Opción correcta: \"Could you kindly tell me…\" = \"¿podría decirme amablemente…?\".",
      "Incorrecto: Furthermore es un conector que añade información.",
      "Incorrecto: Harshly significa \"con dureza\".",
      "Incorrecto: Roughly significa \"aproximadamente\"."
    ],
    "tip_es": "Petición cortés en soporte: [Could you kindly tell me...?].",
    "ref": null,
    "human_rule": "Petición cortés ➔ Could you kindly + verbo.",
    "trigger_anchor": "Could you ______ tell me why…? ➔ kindly",
    "spanglish_trap": "Poner un conector (furthermore) en una petición. Un conector va entre frases.",
    "workplace_usage": {
      "scenario": "Ticket de Soporte de Correo",
      "en": "Could you kindly tell me why I am still unable to send an email?",
      "es": "¿Podría decirme amablemente por qué todavía no puedo enviar correos electrónicos?"
    }
  },
  {
    "id": "it1-mod4-sec1-ex1-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the formal addition in management communication: \"We need to increase the number of closed cases this month. __________ , we must improve customer satisfaction.\"",
    "options": [
      "Kindly",
      "Furthermore",
      "Urgently",
      "Unless"
    ],
    "answer": 1,
    "why_correct": "• Pista: se añade una segunda idea a la primera (\"we must improve customer satisfaction\").\n• Regla: \"además\" al inicio de frase ➔ Furthermore,\n• Descartas: Kindly y Urgently piden algo; Unless es \"a menos que\".",
    "why_wrong": [
      "Incorrecto: Kindly pide algo con cortesía.",
      "Opción correcta: \"Furthermore,\" = \"además,\".",
      "Incorrecto: Urgently pide algo con urgencia.",
      "Incorrecto: Unless significa \"a menos que\"."
    ],
    "tip_es": "Conector formal de adición en reportes: [Furthermore, + oración completa].",
    "ref": null,
    "human_rule": "\"Además,\" ➔ Furthermore, (con coma, al inicio de frase).",
    "trigger_anchor": "…closed cases this month. ______, we must improve satisfaction ➔ Furthermore",
    "spanglish_trap": "Usar kindly o urgently para añadir. Esos piden; furthermore añade.",
    "workplace_usage": {
      "scenario": "Reunión de Métricas de Soporte",
      "en": "We need to increase the number of closed cases. Furthermore, customer satisfaction must improve.",
      "es": "Necesitamos aumentar el número de casos cerrados este mes. Además, debemos mejorar la satisfacción del cliente."
    }
  },
  {
    "id": "it1-mod4-sec1-ex1-q3",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the polite escalation: \"I would appreciate it if you could __________ let me know what happened to the database instance.\"",
    "options": [
      "Furthermore",
      "Never",
      "Kindly / Urgently",
      "Rarely"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"I would appreciate it if you could ______ let me know\": es una petición cortés.\n• Regla: kindly / urgently va antes del verbo.\n• Descartas: Furthermore, Never y Rarely no encajan en una petición.",
    "why_wrong": [
      "Incorrecto: Furthermore es un conector.",
      "Incorrecto: Never significa \"nunca\".",
      "Opción correcta: \"kindly let me know\" = \"hágame saber amablemente\".",
      "Incorrecto: Rarely significa \"rara vez\"."
    ],
    "tip_es": "Fórmula de cortesía ejecutiva: [I would appreciate it if you could kindly let me know...].",
    "ref": null,
    "human_rule": "Petición cortés ➔ could kindly + verbo.",
    "trigger_anchor": "I would appreciate it if you could ______ let me know ➔ kindly",
    "spanglish_trap": "Poner un adverbio de frecuencia. Aquí hace falta uno de cortesía.",
    "workplace_usage": {
      "scenario": "Escalación a Infraestructura",
      "en": "I would appreciate it if you could kindly let me know what happened.",
      "es": "Le agradecería que tuviera la amabilidad de informarme de lo ocurrido."
    }
  },
  {
    "id": "it1-mod4-sec1-ex1-q4",
    "section": "UE",
    "objective": "UE3",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the incident report: \"The application is no longer functioning. __________ , I am completely locked out of the administration console.\"",
    "options": [
      "Kindly",
      "Urgently",
      "Despite",
      "Furthermore"
    ],
    "answer": 3,
    "why_correct": "• Pista: se suma otro problema al anterior (\"I am completely locked out\").\n• Regla: \"además,\" ➔ Furthermore,\n• Descartas: Kindly y Urgently piden algo; Despite es \"a pesar de\".",
    "why_wrong": [
      "Incorrecto: Kindly pide algo con cortesía.",
      "Incorrecto: Urgently pide algo con urgencia.",
      "Incorrecto: Despite significa \"a pesar de\".",
      "Opción correcta: \"Furthermore,\" = \"además,\"."
    ],
    "tip_es": "Adición formal de gravedad técnica: [Furthermore, I am locked out...].",
    "ref": null,
    "human_rule": "Sumar otro problema ➔ Furthermore,",
    "trigger_anchor": "…no longer functioning. ______, I am locked out ➔ Furthermore",
    "spanglish_trap": "Elegir urgently porque es grave. Para añadir, furthermore.",
    "workplace_usage": {
      "scenario": "Ticket de Incidente Crítico P1",
      "en": "The application is no longer functioning. Furthermore, I am completely locked out.",
      "es": "La aplicación ya no funciona. Además, estoy completamente bloqueado de la consola."
    }
  },
  {
    "id": "it1-mod4-sec1-ex1-q5",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the support instruction: \"In order for the application to work, you need the latest operating system. __________ update it before restarting.\"",
    "options": [
      "Kindly / Urgently",
      "Furthermore",
      "Nevertheless",
      "Instead of"
    ],
    "answer": 0,
    "why_correct": "• Pista: se da una instrucción (\"update it\").\n• Regla: kindly / urgently va antes del verbo para suavizar o dar urgencia.\n• Descartas: Furthermore añade, Nevertheless contrasta, \"Instead of\" no encaja.",
    "why_wrong": [
      "Opción correcta: \"Kindly / Urgently update it\" = \"actualícelo (amablemente / con urgencia)\".",
      "Incorrecto: Furthermore añade información.",
      "Incorrecto: Nevertheless significa \"sin embargo\".",
      "Incorrecto: \"Instead of\" significa \"en lugar de\"."
    ],
    "tip_es": "Imperativo de cortesía en soporte técnico: [Kindly + verbo base] (\"Kindly update it\").",
    "ref": null,
    "human_rule": "Instrucción cortés ➔ Kindly + verbo.",
    "trigger_anchor": "______ update it before restarting ➔ Kindly / Urgently",
    "spanglish_trap": "Poner un conector antes de una instrucción. Aquí hace falta un adverbio de cortesía.",
    "workplace_usage": {
      "scenario": "Instrucciones al Usuario en Mesa de Ayuda",
      "en": "In order for the application to work, you need the latest OS. Kindly update it.",
      "es": "Para que la aplicación funcione, necesita el sistema operativo más reciente. Tenga la amabilidad de actualizarlo."
    }
  },
  {
    "id": "it1-mod4-sec1-ex1-q6",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the urgent ticket closing: \"Please can you look into this issue __________ ?\"",
    "options": [
      "Furthermore",
      "Urgently",
      "Kindly",
      "Hardly"
    ],
    "answer": 1,
    "why_correct": "• Pista: el hueco va al final de la petición (\"look into this issue ______\").\n• Regla: urgently al final ➔ \"con urgencia\".\n• Descartas: Furthermore añade; Kindly suele ir antes del verbo; Hardly significa \"apenas\".",
    "why_wrong": [
      "Incorrecto: Furthermore es un conector que añade.",
      "Opción correcta: \"issue urgently\" = \"con urgencia\".",
      "Incorrecto: Kindly suele ir antes del verbo (\"could you kindly look\").",
      "Incorrecto: Hardly significa \"apenas\"."
    ],
    "tip_es": "Posición final para prioridad temporal: [look into this issue urgently?].",
    "ref": null,
    "human_rule": "Petición con urgencia al final ➔ …this issue urgently.",
    "trigger_anchor": "Please can you look into this issue ______? ➔ urgently",
    "spanglish_trap": "Poner kindly al final. Kindly va antes del verbo; urgently puede ir al final.",
    "workplace_usage": {
      "scenario": "Petición de Soporte en Slack",
      "en": "Please can you look into this issue urgently?",
      "es": "¿Por favor pueden investigar este problema urgentemente?"
    }
  },
  {
    "id": "it1-mod4-sec1-ex2-q1",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correctly structured polite customer inquiry:",
    "options": [
      "Could you kindly tell me why I am still unable to send an email?",
      "Could you furthermore tell me why I am still unable to send an email?",
      "Could you tell me why I am still unable kindly to send an email?",
      "Kindly could you tell me why am I still unable to send an email?"
    ],
    "answer": 0,
    "why_correct": "• Pista: se busca la petición cortés bien armada.\n• Regla: Could you kindly + verbo + el resto, con el orden normal.\n• Descartas: B usa furthermore; C separa kindly del verbo; D tiene el orden de pregunta roto.",
    "why_wrong": [
      "Opción correcta: \"Could you kindly tell me why I am still unable…\".",
      "Incorrecto: furthermore es un conector, no un adverbio de cortesía.",
      "Incorrecto: kindly va antes del verbo, no al final.",
      "Incorrecto: \"Kindly could you… why am I\" tiene el orden roto."
    ],
    "tip_es": "Orden de pregunta indirecta cortés: [Could you kindly tell me + WH-word + sujeto + verbo].",
    "ref": null,
    "human_rule": "Could you kindly + verbo base + el resto.",
    "trigger_anchor": "Could you kindly tell me why I am still unable…? ➔ orden correcto",
    "spanglish_trap": "Mover el adverbio o invertir el orden de la segunda parte. Dentro de la pregunta, la segunda parte va en orden normal (why I am).",
    "workplace_usage": {
      "scenario": "Comunicación Diplomática con Helpdesk",
      "en": "Could you kindly tell me why I am still unable to send an email?",
      "es": "¿Podría decirme amablemente por qué todavía no puedo enviar correos electrónicos?"
    }
  },
  {
    "id": "it1-mod4-sec1-ex2-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correctly punctuated and connected sentence for an internal memo:",
    "options": [
      "We need to increase the number of closed cases this month, furthermore customer satisfaction must improve.",
      "We need to increase the number of closed cases this month. Furthermore, customer satisfaction must improve.",
      "We need to increase the number of closed cases this month. Kindly, customer satisfaction must improve.",
      "We need to increase the number of closed cases this month. Urgently customer satisfaction must improve."
    ],
    "answer": 1,
    "why_correct": "• Pista: se busca la frase bien puntuada con el conector.\n• Regla: punto + Furthermore, + coma.\n• Descartas: A une con coma; C y D usan kindly y urgently como conectores.",
    "why_wrong": [
      "Incorrecto: dos frases no se unen con una coma antes de furthermore.",
      "Opción correcta: \"…this month. Furthermore, customer satisfaction must improve.\"",
      "Incorrecto: kindly no es un conector.",
      "Incorrecto: urgently no es un conector y le falta la coma."
    ],
    "tip_es": "Puntuación de adverbios conectores: [Punto. Furthermore, + oración].",
    "ref": null,
    "human_rule": "Frase. Furthermore, frase.",
    "trigger_anchor": "…closed cases this month. Furthermore, customer satisfaction… ➔ correcto",
    "spanglish_trap": "Poner una coma antes de furthermore. Va después de un punto.",
    "workplace_usage": {
      "scenario": "Memo Interno de Soporte al Cliente",
      "en": "Furthermore, customer satisfaction must improve.",
      "es": "Además, la satisfacción del cliente debe mejorar."
    }
  },
  {
    "id": "it1-mod4-sec1-ex2-q3",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the most natural and professional request for clarification:",
    "options": [
      "I would appreciate it if you kindly let me to know what happened.",
      "I appreciate it if you could urgently to let me know what happened.",
      "I would appreciate it if you could kindly let me know what happened.",
      "I would appreciate if you could kindly let me know what did happen."
    ],
    "answer": 2,
    "why_correct": "• Pista: se busca la petición de aclaración más natural.\n• Regla: I would appreciate it if you could kindly + verbo base.\n• Descartas: A lleva \"to\" de más; B y D tienen la estructura mal armada.",
    "why_wrong": [
      "Incorrecto: \"let me to know\" lleva \"to\" de más.",
      "Incorrecto: \"I appreciate it if you could urgently to let\" lleva to de más.",
      "Opción correcta: \"I would appreciate it if you could kindly let me know what happened.\"",
      "Incorrecto: falta \"it\" después de appreciate y \"what did happen\" tiene el orden roto."
    ],
    "tip_es": "Regla fija: siempre [I would appreciate IT if you could...]. ¡El \"it\" es obligatorio!",
    "ref": null,
    "human_rule": "I would appreciate IT if you could kindly + verbo base.",
    "trigger_anchor": "I would appreciate it if you could kindly let me know… ➔ correcto",
    "spanglish_trap": "Añadir to después de let. Con let, el verbo va tal cual.",
    "workplace_usage": {
      "scenario": "Petición Formal de Información",
      "en": "I would appreciate it if you could kindly let me know what happened.",
      "es": "Le agradecería que tuviera la amabilidad de informarme de lo sucedido."
    }
  },
  {
    "id": "it1-mod4-sec1-ex2-q4",
    "section": "UE",
    "objective": "UE3",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct sentence describing an escalating technical breakdown:",
    "options": [
      "The application is not working. Urgently, the database service is unresponsive.",
      "The application is not working. Kindly the database service is unresponsive.",
      "The application is not working, furthermore the database service is unresponsive.",
      "The application is not working. Furthermore, the database service is unresponsive."
    ],
    "answer": 3,
    "why_correct": "• Pista: se suma otro problema al anterior.\n• Regla: punto + Furthermore, + coma.\n• Descartas: A y B usan urgently y kindly como conectores; C une con coma.",
    "why_wrong": [
      "Incorrecto: urgently no suma una idea.",
      "Incorrecto: kindly no suma una idea.",
      "Incorrecto: dos frases no se unen con una coma antes de furthermore.",
      "Opción correcta: \"…not working. Furthermore, the database service is unresponsive.\""
    ],
    "tip_es": "Estructuración de incidentes técnicos en varias capas: [Problema A. Furthermore, Problema B].",
    "ref": null,
    "human_rule": "Frase. Furthermore, frase.",
    "trigger_anchor": "The application is not working. Furthermore, the database… ➔ correcto",
    "spanglish_trap": "Usar urgently para sumar un problema. Para añadir, furthermore.",
    "workplace_usage": {
      "scenario": "Alerta de Monitoreo NOC",
      "en": "The application is not working. Furthermore, the database service is unresponsive.",
      "es": "La aplicación no está funcionando. Además, el servicio de base de datos no responde."
    }
  },
  {
    "id": "it1-mod4-sec1-ex2-q5",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correctly phrased urgent ticket instruction:",
    "options": [
      "Please can you look into this issue urgently?",
      "Please can you urgently look into this issue kindly?",
      "Please look you into this issue urgently?",
      "Can you please to look into this issue urgently?"
    ],
    "answer": 0,
    "why_correct": "• Pista: se busca la instrucción urgente bien armada.\n• Regla: Please can you + verbo base + urgently al final.\n• Descartas: B pone dos adverbios; C tiene el orden roto; D lleva \"to\" de más.",
    "why_wrong": [
      "Opción correcta: \"Please can you look into this issue urgently?\"",
      "Incorrecto: dos adverbios (urgently y kindly) seguidos no son naturales.",
      "Incorrecto: \"Please look you into\" tiene el orden roto.",
      "Incorrecto: después de please can you no va \"to\"."
    ],
    "tip_es": "Petición interrogativa urgente: [Please can you look into this issue urgently?].",
    "ref": null,
    "human_rule": "Please can you + verbo base + … urgently.",
    "trigger_anchor": "Please can you look into this issue urgently? ➔ correcto",
    "spanglish_trap": "Añadir to después de can you. El verbo va tal cual.",
    "workplace_usage": {
      "scenario": "Petición en Canal de Incidencias Críticas",
      "en": "Please can you look into this issue urgently?",
      "es": "¿Por favor pueden investigar este problema con urgencia?"
    }
  },
  {
    "id": "it1-mod4-sec1-ex2-q6",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct polite directive for software installation:",
    "options": [
      "For the application to work you need the latest update. Furthermore install it.",
      "For the application to work you need the latest update. Kindly install it.",
      "For the application to work you need the latest update. Urgently to install it.",
      "For the application to work you need the latest update. Kindly to install it."
    ],
    "answer": 1,
    "why_correct": "• Pista: se busca la instrucción cortés bien armada.\n• Regla: Kindly + verbo base (sin to).\n• Descartas: A usa furthermore; C y D llevan \"to\" de más.",
    "why_wrong": [
      "Incorrecto: furthermore no es un adverbio de cortesía.",
      "Opción correcta: \"…the latest update. Kindly install it.\"",
      "Incorrecto: \"Urgently to install\" lleva \"to\" de más.",
      "Incorrecto: \"Kindly to install\" lleva \"to\" de más."
    ],
    "tip_es": "Imperativo cortés: [Kindly + verbo base sin to].",
    "ref": null,
    "human_rule": "Kindly + verbo base.",
    "trigger_anchor": "…latest update. Kindly install it. ➔ correcto",
    "spanglish_trap": "Añadir to después de kindly. El verbo va tal cual.",
    "workplace_usage": {
      "scenario": "Instrucciones de Mesa de Ayuda",
      "en": "For the application to work you need the latest update. Kindly install it.",
      "es": "Para que la aplicación funcione necesita la última actualización. Tenga la amabilidad de instalarla."
    }
  },
  {
    "id": "it1-mod4-sec2-ex1-q1",
    "section": "UE",
    "objective": "L1",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the accurate technical paraphrase for: \"They have no need to be concerned.\"",
    "options": [
      "They should not be worried.",
      "They must not configure the router.",
      "They have decided to cancel the project.",
      "They are unable to submit error tickets."
    ],
    "answer": 0,
    "why_correct": "• Pista: \"no need to be concerned\" = no hay por qué preocuparse.\n• Significado: They should not be worried = no deberían preocuparse.\n• Descartas: Las otras cambian el sentido: configurar router, cancelar proyecto, tickets.",
    "why_wrong": [
      "Opción correcta: They should not be worried.",
      "Incorrecto: Habla de configurar el router, otra idea.",
      "Incorrecto: Habla de cancelar el proyecto.",
      "Incorrecto: Habla de enviar tickets."
    ],
    "tip_es": "Paráfrasis de soporte: [no need to be concerned] = [should not be worried].",
    "ref": null,
    "human_rule": "no need to be concerned = should not be worried.",
    "trigger_anchor": "no need to ➔ should not",
    "spanglish_trap": "Traducir \"need\" como \"necesidad\" y perder la negación.",
    "workplace_usage": {
      "scenario": "Tranquilizar a Clientes en Incidentes",
      "en": "Tell the client they have no need to be concerned.",
      "es": "Dígale al cliente que no tiene de qué preocuparse."
    }
  },
  {
    "id": "it1-mod4-sec2-ex1-q2",
    "section": "UE",
    "objective": "L1",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the accurate paraphrase for: \"You had a difficult day due to the global issue.\"",
    "options": [
      "You solved all international networking problems today.",
      "Your day was difficult because of the global incident.",
      "The global issue had no impact on your workday.",
      "You arrived late because of local traffic delays."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"difficult day due to the global issue\" = día difícil por el incidente.\n• Significado: Your day was difficult because of the global incident.\n• Descartas: Las otras dicen que lo resolviste, que no hubo impacto o hablan de tráfico.",
    "why_wrong": [
      "Incorrecto: No dice que lo resolviste.",
      "Opción correcta: Tu día fue difícil por el incidente global.",
      "Incorrecto: Dice que no hubo impacto, lo contrario.",
      "Incorrecto: Habla de tráfico local."
    ],
    "tip_es": "Equivalencia de causa: [due to...] = [because of...].",
    "ref": null,
    "human_rule": "due to = because of.",
    "trigger_anchor": "due to ➔ because of",
    "spanglish_trap": "Confundir \"due to\" con \"debido a\" sin saber que es causa.",
    "workplace_usage": {
      "scenario": "Empatía y Feedback del Team Lead",
      "en": "You had a difficult day due to the global issue.",
      "es": "Tuviste un día difícil debido al problema global."
    }
  },
  {
    "id": "it1-mod4-sec2-ex1-q3",
    "section": "UE",
    "objective": "L1",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the accurate paraphrase for: \"Our engineering team is working tirelessly to fix the issue.\"",
    "options": [
      "The engineering team has already resolved all tickets.",
      "The engineers are exhausted and cannot continue.",
      "The engineering team is working very hard.",
      "The engineering team has outsourced the investigation."
    ],
    "answer": 2,
    "why_correct": "• Pista: \"working tirelessly\" = trabajando incansablemente.\n• Significado: The team is working very hard.\n• Descartas: No dice que ya resolvieron todo ni que están agotados ni que subcontrataron.",
    "why_wrong": [
      "Incorrecto: Resolver todos los tickets es otra cosa.",
      "Incorrecto: Agotados contradice \"tirelessly\".",
      "Opción correcta: Trabajando mucho.",
      "Incorrecto: Subcontratar es otra idea."
    ],
    "tip_es": "Paráfrasis de esfuerzo técnico: [working tirelessly] = [working very hard].",
    "ref": null,
    "human_rule": "tirelessly = sin cansarse, con mucho esfuerzo.",
    "trigger_anchor": "tirelessly ➔ very hard",
    "spanglish_trap": "Traducir tireless como \"cansado\". Es lo contrario.",
    "workplace_usage": {
      "scenario": "Comunicación de Crisis en Página de Estado",
      "en": "Our team is working tirelessly to restore services.",
      "es": "Nuestro equipo está trabajando incansablemente para restaurar los servicios."
    }
  },
  {
    "id": "it1-mod4-sec2-ex1-q4",
    "section": "UE",
    "objective": "L1",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the accurate paraphrase for the commitment: \"I'll get on it right away.\"",
    "options": [
      "I will think about your request next week.",
      "I am currently working on something else.",
      "I cannot help you with this particular issue.",
      "I will do what you want immediately."
    ],
    "answer": 3,
    "why_correct": "• Pista: \"I'll get on it right away\" = lo haré ya.\n• Significado: I will do what you want immediately.\n• Descartas: Dejarlo para la próxima semana o negarse contradice.",
    "why_wrong": [
      "Incorrecto: Posponer contradice \"right away\".",
      "Incorrecto: Estar ocupado con otra cosa contradice.",
      "Incorrecto: No ayudar contradice.",
      "Opción correcta: Hacerlo de inmediato."
    ],
    "tip_es": "Compromiso inmediato en soporte: [I'll get on it right away] = Me pongo con ello de inmediato.",
    "ref": null,
    "human_rule": "right away = immediately.",
    "trigger_anchor": "get on it ➔ start now",
    "spanglish_trap": "Traducir \"get on it\" literal como \"subirse\".",
    "workplace_usage": {
      "scenario": "Atención de Ticket Urgente",
      "en": "I'll get on it right away and update you within 30 minutes.",
      "es": "Me pondré con ello de inmediato y le actualizaré en 30 minutos."
    }
  },
  {
    "id": "it1-mod4-sec2-ex1-q5",
    "section": "UE",
    "objective": "L1",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the accurate paraphrase for: \"The engineering team is working at full speed.\"",
    "options": [
      "The team cannot work any harder.",
      "The team has stopped working on the issue.",
      "The team is testing network bandwidth speeds.",
      "The team has slowed down the release cadence."
    ],
    "answer": 0,
    "why_correct": "• Pista: \"at full speed\" = a máxima velocidad.\n• Significado: The team cannot work any harder.\n• Descartas: Detenerse, probar ancho de banda o ir más lento no es lo dicho.",
    "why_wrong": [
      "Opción correcta: El equipo no puede trabajar más duro.",
      "Incorrecto: Detenerse contradice.",
      "Incorrecto: Probar ancho de banda es otro tema.",
      "Incorrecto: Ir más lento contradice."
    ],
    "tip_es": "Expresión de máxima capacidad operativa: [working at full speed] = [cannot work any harder].",
    "ref": null,
    "human_rule": "full speed = al máximo.",
    "trigger_anchor": "full speed ➔ cannot work harder",
    "spanglish_trap": "Traducir speed como velocidad de red.",
    "workplace_usage": {
      "scenario": "Actualización en Incidente Mayor P0",
      "en": "The NOC is working at full speed to isolate the flapping link.",
      "es": "El NOC está trabajando a toda marcha para aislar el enlace intermitente."
    }
  },
  {
    "id": "it1-mod4-sec2-ex2-q1",
    "section": "UE",
    "objective": "L2",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the listening dialogue, what observation does the woman make about the support agent's effort?",
    "options": [
      "He worked harder than usual today.",
      "He left the office early due to system crashes.",
      "He refused to answer calls from premium clients.",
      "He accidentally deleted the active directory forest."
    ],
    "answer": 0,
    "why_correct": "• Pista: El diálogo comenta que el agente trabajó más de lo normal.\n• Significado: He worked harder than usual today.\n• Descartas: Salir temprano, rechazar clientes o borrar el directorio no se mencionan.",
    "why_wrong": [
      "Opción correcta: Trabajó más duro de lo normal.",
      "Incorrecto: No salió temprano.",
      "Incorrecto: No rechazó clientes.",
      "Incorrecto: No borró el directorio."
    ],
    "tip_es": "Reconocimiento de desempeño: El agente trabajó mucho más duro de lo habitual durante la crisis.",
    "ref": null,
    "human_rule": "observa esfuerzo ➔ worked harder.",
    "trigger_anchor": "effort ➔ worked harder",
    "spanglish_trap": "Imaginar detalles que no están en el audio.",
    "workplace_usage": {
      "scenario": "Evaluación de Desempeño en Guardia",
      "en": "The team lead noted that the engineer worked harder than usual today.",
      "es": "La jefa de equipo destacó que el ingeniero trabajó más duro de lo habitual hoy."
    }
  },
  {
    "id": "it1-mod4-sec2-ex2-q2",
    "section": "UE",
    "objective": "L3",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What uncertainty does the man express regarding the ongoing outage?",
    "options": [
      "They don’t know who authorized the original project budget.",
      "They don’t know when the issue will be resolved.",
      "They are unsure whether they should use Windows or Linux.",
      "They don’t know if the physical datacenter has air conditioning."
    ],
    "answer": 1,
    "why_correct": "• Pista: El hombre no sabe cuándo se resolverá el problema.\n• Significado: They don't know when the issue will be resolved.\n• Descartas: Presupuesto, Windows/Linux y aire acondicionado no se mencionan.",
    "why_wrong": [
      "Incorrecto: No habla de presupuesto.",
      "Opción correcta: No saben cuándo se resolverá.",
      "Incorrecto: No habla de Windows o Linux.",
      "Incorrecto: No habla del aire acondicionado."
    ],
    "tip_es": "Incertidumbre en SLAs de incidentes: Desconocen el tiempo exacto de resolución del fallo.",
    "ref": null,
    "human_rule": "uncertainty = don't know when.",
    "trigger_anchor": "uncertainty ➔ when resolved",
    "spanglish_trap": "Inventar contexto no dicho.",
    "workplace_usage": {
      "scenario": "Comunicación de Incidentes SLA",
      "en": "We cannot give an exact ETA because we don’t know when the issue will be resolved.",
      "es": "No podemos dar una hora estimada exacta porque no sabemos cuándo se resolverá el problema."
    }
  },
  {
    "id": "it1-mod4-sec2-ex2-q3",
    "section": "UE",
    "objective": "L4",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What critical concern does the man want to clarify immediately?",
    "options": [
      "If the company coffee machine is operational.",
      "If employee salaries will be doubled next month.",
      "If customer data has been destroyed.",
      "If the building security cameras require firmware upgrades."
    ],
    "answer": 2,
    "why_correct": "• Pista: La preocupación crítica: si se destruyeron datos de clientes.\n• Significado: If customer data has been destroyed.\n• Descartas: Café, sueldos y cámaras no son críticos.",
    "why_wrong": [
      "Incorrecto: El café no es crítico.",
      "Incorrecto: Los sueldos no se mencionan.",
      "Opción correcta: Si los datos de clientes se destruyeron.",
      "Incorrecto: Las cámaras no se mencionan."
    ],
    "tip_es": "Prioridad de impacto en ciberseguridad: Verificar si hubo pérdida o destrucción de datos de clientes.",
    "ref": null,
    "human_rule": "critical concern = datos de clientes.",
    "trigger_anchor": "critical ➔ customer data",
    "spanglish_trap": "Elegir opciones absurdas por parecer técnicas.",
    "workplace_usage": {
      "scenario": "Evaluación de Daños por Incidentes",
      "en": "Our primary objective is to verify if customer data has been destroyed.",
      "es": "Nuestro objetivo primordial es verificar si se han destruido datos de los clientes."
    }
  },
  {
    "id": "it1-mod4-sec2-ex2-q4",
    "section": "UE",
    "objective": "L3",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What positive context does the woman remind the engineer about the company's overall trajectory?",
    "options": [
      "The company has fired all external contractors.",
      "The company has closed down its international offices.",
      "The company has abandoned all security certifications.",
      "The company has had a lot of success recently."
    ],
    "answer": 3,
    "why_correct": "• Pista: La mujer recuerda un contexto positivo: éxito reciente.\n• Significado: The company has had a lot of success recently.\n• Descartas: Despidos, cierres y abandono de certificaciones serían negativos.",
    "why_wrong": [
      "Incorrecto: Despedir contratistas es negativo.",
      "Incorrecto: Cerrar oficinas es negativo.",
      "Incorrecto: Abandonar certificaciones es negativo.",
      "Opción correcta: Mucho éxito reciente."
    ],
    "tip_es": "Perspectiva positiva en liderazgo: Recordar que la empresa ha cosechado grandes éxitos recientes a pesar de la caída puntual.",
    "ref": null,
    "human_rule": "positive context = success.",
    "trigger_anchor": "positive ➔ success",
    "spanglish_trap": "Elegir algo negativo por error.",
    "workplace_usage": {
      "scenario": "Gestión de Crisis y Liderazgo",
      "en": "Remember that despite this outage, the company has had a lot of success recently.",
      "es": "Recuerden que a pesar de esta caída, la empresa ha tenido mucho éxito recientemente."
    }
  },
  {
    "id": "it1-mod4-sec3-ex1-q1",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unscramble the workplace idiom: (a, on, roll)",
    "options": [
      "On a roll",
      "Roll on a",
      "A roll on",
      "On roll a"
    ],
    "answer": 0,
    "why_correct": "• Pista: las tres palabras forman un modismo de trabajo: \"en racha\".\n• Regla: on + a + roll ➔ \"en racha\".\n• Descartas: las otras ordenan las palabras de forma que no existe.",
    "why_wrong": [
      "Opción correcta: \"on a roll\" = \"en racha\".",
      "Incorrecto: \"Roll on a\" no es una expresión.",
      "Incorrecto: \"A roll on\" no es una expresión.",
      "Incorrecto: \"On roll a\" no es una expresión."
    ],
    "tip_es": "Idiom de productividad: [On a roll] = estar en racha exitosa.",
    "ref": null,
    "human_rule": "\"En racha\" ➔ on a roll.",
    "trigger_anchor": "(a, on, roll) ➔ on a roll",
    "spanglish_trap": "Ordenar las palabras como en español. Aprende el modismo completo.",
    "workplace_usage": {
      "scenario": "Felicitaciones en Sprint Retrospective",
      "en": "We closed 25 tickets before lunch; we are on a roll!",
      "es": "Cerramos 25 tickets antes del almuerzo; ¡estamos en racha!"
    }
  },
  {
    "id": "it1-mod4-sec3-ex1-q2",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unscramble the customer service idiom: (mile, the, extra, go)",
    "options": [
      "The extra mile go",
      "Go the extra mile",
      "Go mile the extra",
      "Extra the mile go"
    ],
    "answer": 1,
    "why_correct": "• Pista: es un modismo de servicio al cliente: esforzarse más de lo exigido.\n• Regla: go + the + extra + mile.\n• Descartas: las otras ordenan las palabras de forma que no existe.",
    "why_wrong": [
      "Incorrecto: \"The extra mile go\" no es una expresión.",
      "Opción correcta: \"go the extra mile\" = \"esforzarse un poco más\".",
      "Incorrecto: \"Go mile the extra\" no es una expresión.",
      "Incorrecto: \"Extra the mile go\" no es una expresión."
    ],
    "tip_es": "Idiom por excelencia de atención al cliente: [Go the extra mile] (hacer un esfuerzo extra).",
    "ref": null,
    "human_rule": "\"Esforzarse más de lo exigido\" ➔ go the extra mile.",
    "trigger_anchor": "(mile, the, extra, go) ➔ go the extra mile",
    "spanglish_trap": "Traducir \"la milla extra\" y olvidar el verbo. Es un modismo completo.",
    "workplace_usage": {
      "scenario": "Atención al Cliente Excepcional",
      "en": "Top support engineers always go the extra mile to resolve user blockers.",
      "es": "Los mejores ingenieros de soporte siempre dan la milla extra para resolver los bloqueos de los usuarios."
    }
  },
  {
    "id": "it1-mod4-sec3-ex1-q3",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unscramble the mental check idiom: (in, keep, mind)",
    "options": [
      "Mind keep in",
      "Keep mind in",
      "Keep in mind",
      "In mind keep"
    ],
    "answer": 2,
    "why_correct": "• Pista: es un modismo de \"recuerda esto\".\n• Regla: keep + in + mind ➔ \"tener presente\".\n• Descartas: las otras ordenan las palabras de forma que no existe.",
    "why_wrong": [
      "Incorrecto: \"Mind keep in\" no es una expresión.",
      "Incorrecto: \"Keep mind in\" no es una expresión.",
      "Opción correcta: \"keep in mind\" = \"tener presente\".",
      "Incorrecto: \"In mind keep\" no es una expresión."
    ],
    "tip_es": "Colocación fija de atención: [Keep in mind] = tener presente / considerar.",
    "ref": null,
    "human_rule": "\"Tener presente\" ➔ keep in mind.",
    "trigger_anchor": "(in, keep, mind) ➔ keep in mind",
    "spanglish_trap": "Poner mind antes de in. El modismo es keep IN mind.",
    "workplace_usage": {
      "scenario": "Requisitos Técnicos",
      "en": "Keep in mind that legacy browsers do not support modern CSS grid.",
      "es": "Ten en cuenta que los navegadores antiguos no soportan CSS grid moderno."
    }
  },
  {
    "id": "it1-mod4-sec3-ex1-q4",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unscramble the strategic timeline idiom: (run, in, the, long)",
    "options": [
      "Long in the run",
      "In the run long",
      "The long in run",
      "In the long run"
    ],
    "answer": 3,
    "why_correct": "• Pista: es un modismo de planificación: \"a largo plazo\".\n• Regla: in + the + long + run.\n• Descartas: las otras ordenan las palabras de forma que no existe.",
    "why_wrong": [
      "Incorrecto: \"Long in the run\" no es una expresión.",
      "Incorrecto: \"In the run long\" no es una expresión.",
      "Incorrecto: \"The long in run\" no es una expresión.",
      "Opción correcta: \"in the long run\" = \"a largo plazo\"."
    ],
    "tip_es": "Perspectiva estratégica: [In the long run] = a la larga / a largo plazo.",
    "ref": null,
    "human_rule": "\"A largo plazo\" ➔ in the long run.",
    "trigger_anchor": "(run, in, the, long) ➔ in the long run",
    "spanglish_trap": "Poner long antes que the. El modismo es in the LONG run.",
    "workplace_usage": {
      "scenario": "Inversión en Testing Automatizado",
      "en": "Writing unit tests saves hundreds of hours in the long run.",
      "es": "Escribir pruebas unitarias ahorra cientos de horas a largo plazo."
    }
  },
  {
    "id": "it1-mod4-sec3-ex1-q5",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unscramble the difficulty idiom: (crack, to, hard)",
    "options": [
      "Hard to crack",
      "Crack to hard",
      "To hard crack",
      "Hard crack to"
    ],
    "answer": 0,
    "why_correct": "• Pista: es un modismo de dificultad: algo \"difícil de resolver\".\n• Regla: hard + to + crack.\n• Descartas: las otras ordenan las palabras de forma que no existe.",
    "why_wrong": [
      "Opción correcta: \"hard to crack\" = \"difícil de resolver\".",
      "Incorrecto: \"Crack to hard\" no es una expresión.",
      "Incorrecto: \"To hard crack\" no es una expresión.",
      "Incorrecto: \"Hard crack to\" no es una expresión."
    ],
    "tip_es": "Problema técnico complejo: [Hard to crack] = difícil de solucionar.",
    "ref": null,
    "human_rule": "\"Difícil de resolver\" ➔ hard to crack.",
    "trigger_anchor": "(crack, to, hard) ➔ hard to crack",
    "spanglish_trap": "Poner el verbo antes que hard. Primero hard, luego to crack.",
    "workplace_usage": {
      "scenario": "Depuración de Bug Intermitente",
      "en": "This race condition bug has proven very hard to crack.",
      "es": "Este error de condición de carrera ha demostrado ser muy difícil de resolver."
    }
  },
  {
    "id": "it1-mod4-sec3-ex1-q6",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unscramble the closing presentation idiom: (but, least, not, last)",
    "options": [
      "Least but not last",
      "Last but not least",
      "Not least but last",
      "Last not least but"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una expresión de cierre: \"por último, pero no menos importante\".\n• Regla: last + but + not + least.\n• Descartas: las otras ordenan las palabras de forma que no existe.",
    "why_wrong": [
      "Incorrecto: \"Least but not last\" invierte last y least.",
      "Opción correcta: \"last but not least\" = \"por último, pero no menos importante\".",
      "Incorrecto: \"Not least but last\" no es una expresión.",
      "Incorrecto: \"Last not least but\" no es una expresión."
    ],
    "tip_es": "Fórmula de cierre de presentaciones: [Last but not least] (por último pero no menos importante).",
    "ref": null,
    "human_rule": "\"Por último, pero no menos importante\" ➔ last but not least.",
    "trigger_anchor": "(but, least, not, last) ➔ last but not least",
    "spanglish_trap": "Invertir last y least. Primero last, y al final least.",
    "workplace_usage": {
      "scenario": "Demo de Fin de Sprint",
      "en": "Last but not least, we improved page loading times by 40 percent.",
      "es": "Por último, pero no por ello menos importante, mejoramos los tiempos de carga en un 40 por ciento."
    }
  },
  {
    "id": "it1-mod4-sec3-ex2-q1",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the support observation with the idiom: \"Some of our technical cases can be __________ .\"",
    "options": [
      "Hard to crack",
      "In the long run",
      "On a roll",
      "Go the extra mile"
    ],
    "answer": 0,
    "why_correct": "• Pista: se habla de casos técnicos difíciles.\n• Regla: \"difíciles de resolver\" ➔ hard to crack.\n• Descartas: \"in the long run\" es a largo plazo; \"on a roll\" es en racha; \"go the extra mile\" es esforzarse más.",
    "why_wrong": [
      "Opción correcta: \"hard to crack\" = \"difíciles de resolver\".",
      "Incorrecto: \"in the long run\" significa \"a largo plazo\".",
      "Incorrecto: \"on a roll\" significa \"en racha\".",
      "Incorrecto: \"go the extra mile\" significa \"esforzarse más de lo exigido\"."
    ],
    "tip_es": "Atributo de dificultad de un ticket: [hard to crack].",
    "ref": null,
    "human_rule": "Algo difícil de resolver ➔ hard to crack.",
    "trigger_anchor": "technical cases can be ______ (difíciles) ➔ hard to crack",
    "spanglish_trap": "Elegir por el tono positivo. Aquí se habla de dificultad.",
    "workplace_usage": {
      "scenario": "Mesa de Ayuda L2",
      "en": "Some of our technical cases can be hard to crack.",
      "es": "Algunos de nuestros casos técnicos pueden ser difíciles de resolver."
    }
  },
  {
    "id": "it1-mod4-sec3-ex2-q2",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the strategic vision statement: \"What we need to see __________ is an increase in customer retention and fewer recurring bugs.\"",
    "options": [
      "Hard to crack",
      "In the long run",
      "On a roll",
      "Last but not least"
    ],
    "answer": 1,
    "why_correct": "• Pista: se habla de lo que se espera ver más adelante (retención, menos fallos).\n• Regla: \"a largo plazo\" ➔ in the long run.\n• Descartas: \"hard to crack\" es difícil de resolver; \"on a roll\" es en racha; \"last but not least\" es de cierre.",
    "why_wrong": [
      "Incorrecto: \"hard to crack\" significa \"difícil de resolver\".",
      "Opción correcta: \"in the long run\" = \"a largo plazo\".",
      "Incorrecto: \"on a roll\" significa \"en racha\".",
      "Incorrecto: \"last but not least\" se usa para cerrar una lista."
    ],
    "tip_es": "Horizonte de tiempo en métricas de retención: [in the long run].",
    "ref": null,
    "human_rule": "\"A largo plazo\" ➔ in the long run.",
    "trigger_anchor": "What we need to see ______ is an increase in retention ➔ in the long run",
    "spanglish_trap": "Elegir last but not least por \"al final\". Aquí no es el cierre de una lista.",
    "workplace_usage": {
      "scenario": "Plan Estratégico de Producto",
      "en": "What we need to see in the long run is an increase in reliability.",
      "es": "Lo que necesitamos ver a largo plazo es un aumento en la confiabilidad."
    }
  },
  {
    "id": "it1-mod4-sec3-ex2-q3",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the team praise: \"Congratulations on the closed cases, everyone. We are really __________ !\" ",
    "options": [
      "Hard to crack",
      "In the long run",
      "On a roll",
      "Last but not least"
    ],
    "answer": 2,
    "why_correct": "• Pista: felicitan al equipo por los casos cerrados: están teniendo buenos resultados seguidos.\n• Regla: \"en racha\" ➔ on a roll.\n• Descartas: \"hard to crack\" es difícil; \"in the long run\" es a largo plazo; \"last but not least\" es de cierre.",
    "why_wrong": [
      "Incorrecto: \"hard to crack\" significa \"difícil de resolver\".",
      "Incorrecto: \"in the long run\" significa \"a largo plazo\".",
      "Opción correcta: \"on a roll\" = \"en racha\".",
      "Incorrecto: \"last but not least\" se usa para cerrar una lista."
    ],
    "tip_es": "Celebración de productividad en equipo: [We are on a roll!].",
    "ref": null,
    "human_rule": "\"En racha\" ➔ on a roll.",
    "trigger_anchor": "Congratulations… We are really ______ ➔ on a roll",
    "spanglish_trap": "Elegir hard to crack por los casos. El elogio es por la racha.",
    "workplace_usage": {
      "scenario": "Cierre Exitoso de Sprint",
      "en": "Congratulations on the closed cases, everyone. We are really on a roll!",
      "es": "Felicitaciones a todos por los casos cerrados. ¡Realmente estamos en racha!"
    }
  },
  {
    "id": "it1-mod4-sec3-ex2-q4",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the policy advice: \"They should __________ that their operating system requires regular security patches.\"",
    "options": [
      "Go the extra mile",
      "Hard to crack",
      "On a roll",
      "Keep in mind"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"They should ______ that…\": un recordatorio.\n• Regla: \"tener presente\" ➔ keep in mind.\n• Descartas: \"go the extra mile\" es esforzarse más; \"hard to crack\" y \"on a roll\" no van después de should.",
    "why_wrong": [
      "Incorrecto: \"go the extra mile\" significa \"esforzarse más\", y no encaja con \"that…\".",
      "Incorrecto: \"hard to crack\" no es un verbo.",
      "Incorrecto: \"on a roll\" no es un verbo.",
      "Opción correcta: \"keep in mind\" = \"tener presente\"."
    ],
    "tip_es": "Tener presente una advertencia: [should keep in mind that...].",
    "ref": null,
    "human_rule": "\"Tener presente\" ➔ keep in mind (that…).",
    "trigger_anchor": "They should ______ that their system requires patches ➔ keep in mind",
    "spanglish_trap": "Elegir por el sentido general. Mira que después de should va un verbo.",
    "workplace_usage": {
      "scenario": "Advertencias de Seguridad al Usuario",
      "en": "They should keep in mind that their operating system requires patches.",
      "es": "Deberían tener en cuenta que su sistema operativo requiere parches de seguridad periódicos."
    }
  },
  {
    "id": "it1-mod4-sec3-ex2-q5",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the gratitude message: \"Thank you all for __________ today during the critical platform outage.\"",
    "options": [
      "Going the extra mile",
      "Keeping in mind",
      "On a roll",
      "Hard to crack"
    ],
    "answer": 0,
    "why_correct": "• Pista: agradecen el esfuerzo extra durante una caída.\n• Regla: \"esforzarse más de lo exigido\" ➔ going the extra mile.\n• Descartas: \"keeping in mind\" es tener presente; \"on a roll\" y \"hard to crack\" no encajan después de for.",
    "why_wrong": [
      "Opción correcta: \"going the extra mile\" = \"esforzarse más de lo exigido\".",
      "Incorrecto: \"keeping in mind\" significa \"teniendo presente\".",
      "Incorrecto: \"on a roll\" significa \"en racha\", y no encaja después de for.",
      "Incorrecto: \"hard to crack\" significa \"difícil de resolver\"."
    ],
    "tip_es": "Agradecer esfuerzo excepcional: [Thank you for going the extra mile].",
    "ref": null,
    "human_rule": "\"Esforzarse más de lo exigido\" ➔ go the extra mile.",
    "trigger_anchor": "Thank you all for ______ today during the outage ➔ going the extra mile",
    "spanglish_trap": "Olvidar el -ing después de for. Va for + going.",
    "workplace_usage": {
      "scenario": "Agradecimiento tras Resolución de Incidente P0",
      "en": "Thank you all for going the extra mile today.",
      "es": "Gracias a todos por dar la milla extra hoy durante la caída crítica de la plataforma."
    }
  },
  {
    "id": "it1-mod4-sec3-ex2-q6",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the meeting announcement: \"__________ , there will be a series of training sessions on customer empathy next week.\"",
    "options": [
      "On a roll",
      "Last but not least",
      "Hard to crack",
      "In the long run"
    ],
    "answer": 1,
    "why_correct": "• Pista: abre el último anuncio de la reunión.\n• Regla: \"por último, pero no menos importante\" ➔ Last but not least.\n• Descartas: los otros modismos tienen otro sentido (racha, dificultad, largo plazo).",
    "why_wrong": [
      "Incorrecto: \"on a roll\" significa \"en racha\".",
      "Opción correcta: \"last but not least\" = \"por último, pero no menos importante\".",
      "Incorrecto: \"hard to crack\" significa \"difícil de resolver\".",
      "Incorrecto: \"in the long run\" significa \"a largo plazo\"."
    ],
    "tip_es": "Introducción del punto final de un orden del día: [Last but not least, + anuncio].",
    "ref": null,
    "human_rule": "\"Por último, pero no menos importante\" ➔ last but not least.",
    "trigger_anchor": "______, there will be training sessions next week ➔ Last but not least",
    "spanglish_trap": "Elegir in the long run por \"más adelante\". Aquí es el cierre de una lista.",
    "workplace_usage": {
      "scenario": "Cierre de All-Hands de Ingeniería",
      "en": "Last but not least, there will be training sessions next week.",
      "es": "Por último pero no menos importante, habrá una serie de sesiones de capacitación la próxima semana."
    }
  },
  {
    "id": "it1-mod4-sec4-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical synonym for: \"Answer an incoming support call from a user.\"",
    "options": [
      "Pick up a call",
      "Replicate an issue",
      "Drop a packet",
      "Forward a port"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Answer an incoming support call\": contestar una llamada.\n• Significado: Pick up a call = contestar la llamada.\n• Descartas: Replicate, drop y forward son otros verbos técnicos.",
    "why_wrong": [
      "Opción correcta: Pick up a call = contestar.",
      "Incorrecto: Replicate an issue = reproducir un fallo.",
      "Incorrecto: Drop a packet = perder un paquete.",
      "Incorrecto: Forward a port = redirigir un puerto."
    ],
    "tip_es": "Vocabulario de mesa de ayuda: [Pick up a call] = responder una llamada entrante.",
    "ref": null,
    "human_rule": "pick up = contestar (llamada).",
    "trigger_anchor": "answer a call ➔ pick up",
    "spanglish_trap": "Traducir pick up como \"recoger\" y no como \"contestar\".",
    "workplace_usage": {
      "scenario": "Helpdesk SLA y Métricas",
      "en": "Tier 1 agents must pick up incoming calls within three rings.",
      "es": "Los agentes de Nivel 1 deben responder las llamadas entrantes antes de tres timbres."
    }
  },
  {
    "id": "it1-mod4-sec4-ex1-q2",
    "section": "UE",
    "objective": "R1",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the accurate paraphrase for: \"You run the risk of dealing with an offended customer.\"",
    "options": [
      "Your customer will immediately upgrade their enterprise subscription.",
      "Your customer might become angry.",
      "Your customer is guaranteed to leave a five-star review.",
      "Your customer has resolved the configuration independently."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"run the risk of ... offended customer\": existe la posibilidad.\n• Significado: Your customer might become angry.\n• Descartas: Garantizar reseña de cinco estrellas o mejora no encaja.",
    "why_wrong": [
      "Incorrecto: Mejorar suscripción no encaja.",
      "Opción correcta: Podría enojarse.",
      "Incorrecto: Reseña garantizada no encaja con \"risk\".",
      "Incorrecto: Resolver solo no encaja."
    ],
    "tip_es": "Gestión de clientes difíciles: [offended customer] = [customer might become angry].",
    "ref": null,
    "human_rule": "run the risk = existe la posibilidad.",
    "trigger_anchor": "run the risk ➔ might",
    "spanglish_trap": "Traducir \"run\" literalmente como correr.",
    "workplace_usage": {
      "scenario": "Desescalación de Clientes Enojados",
      "en": "If you question their competence, your customer might become angry.",
      "es": "Si cuestionas su competencia, tu cliente podría enojarse."
    }
  },
  {
    "id": "it1-mod4-sec4-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the exact definition for: \"Replicate an issue.\"",
    "options": [
      "Delete the source code containing the bug.",
      "Ignore user complaints until the next release.",
      "Make the same issue happen again.",
      "Blame third-party hardware vendors."
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Replicate an issue\": volver a causar el problema.\n• Significado: Make the same issue happen again.\n• Descartas: Borrar código, ignorar quejas o culpar proveedores no es replicar.",
    "why_wrong": [
      "Incorrecto: Borrar código no es replicar.",
      "Incorrecto: Ignorar quejas no es replicar.",
      "Opción correcta: Hacer que el problema ocurra otra vez.",
      "Incorrecto: Culpar proveedores no es replicar."
    ],
    "tip_es": "Definición oficial Cisco: [Replicate an issue] = Make the same issue happen again.",
    "ref": null,
    "human_rule": "replicate = reproducir el fallo.",
    "trigger_anchor": "replicate ➔ make it happen again",
    "spanglish_trap": "Traducir replicate como \"replicar mensajes\".",
    "workplace_usage": {
      "scenario": "Reproducción de Incidencias QA",
      "en": "Before writing a patch, we must make the same issue happen again.",
      "es": "Antes de escribir un parche, debemos hacer que el mismo problema vuelva a suceder."
    }
  },
  {
    "id": "it1-mod4-sec4-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the term for: \"Something of such vital necessity that you cannot live or operate without it.\"",
    "options": [
      "Optional",
      "Redundant",
      "Deprecated",
      "Indispensable"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"vital necessity ... cannot operate without\": imprescindible.\n• Significado: Indispensable = no se puede prescindir de él.\n• Descartas: Optional, redundant y deprecated significan lo contrario o algo distinto.",
    "why_wrong": [
      "Incorrecto: Optional = opcional.",
      "Incorrecto: Redundant = redundante, sobra.",
      "Incorrecto: Deprecated = obsoleto.",
      "Opción correcta: Indispensable = imprescindible."
    ],
    "tip_es": "Vocabulario clave: [Indispensable] = something you cannot live/work without.",
    "ref": null,
    "human_rule": "indispensable = imprescindible.",
    "trigger_anchor": "cannot live without ➔ indispensable",
    "spanglish_trap": "Confundir indispensable con \"no disponible\".",
    "workplace_usage": {
      "scenario": "Herramientas Críticas de Helpdesk",
      "en": "The ticketing system is indispensable for managing customer support requests.",
      "es": "El sistema de tickets es indispensable para gestionar las solicitudes de soporte al cliente."
    }
  },
  {
    "id": "it1-mod4-sec4-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the idiom for: \"To achieve a technical task in a manner that results in customer dissatisfaction or alienation.\"",
    "options": [
      "At the expense of customer satisfaction",
      "In the long run",
      "On a roll",
      "With flying colours"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"customer dissatisfaction\": a costa de la satisfacción del cliente.\n• Significado: At the expense of customer satisfaction = perjudicando al cliente.\n• Descartas: In the long run, On a roll y With flying colours son positivas.",
    "why_wrong": [
      "Opción correcta: At the expense of = perjudicando.",
      "Incorrecto: In the long run = a largo plazo.",
      "Incorrecto: On a roll = en racha.",
      "Incorrecto: With flying colours = con éxito."
    ],
    "tip_es": "Coste colateral en soporte: [At the expense of...] = a expensas de la satisfacción del cliente.",
    "ref": null,
    "human_rule": "at the expense of = a costa de.",
    "trigger_anchor": "dissatisfaction ➔ at the expense of",
    "spanglish_trap": "Traducir expense como \"gasto\" y no como \"a costa de\".",
    "workplace_usage": {
      "scenario": "Políticas de SLAs en Mesa de Ayuda",
      "en": "Closing tickets rapidly should not be done at the expense of customer satisfaction.",
      "es": "Cerrar tickets rápidamente no debe hacerse a expensas de la satisfacción del cliente."
    }
  },
  {
    "id": "it1-mod4-sec4-ex2-q1",
    "section": "UE",
    "objective": "R2",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the reading passage, why is it essential for support agents to prepare structured questions for customers beforehand?",
    "options": [
      "Because customers do not always supply all the necessary diagnostic information on their own.",
      "Because customers are legally required to sign non-disclosure agreements.",
      "Because support agents are prohibited from consulting internal documentation.",
      "Because automated AI chatbots cannot understand spoken English."
    ],
    "answer": 0,
    "why_correct": "• Pista: Los clientes no siempre dan toda la información necesaria.\n• Significado: Por eso se preparan preguntas estructuradas.\n• Descartas: No hay firma de NDA, ni prohibición de documentación, ni límite de chatbots.",
    "why_wrong": [
      "Opción correcta: Los clientes no dan toda la información por sí solos.",
      "Incorrecto: No hay NDA obligatorio.",
      "Incorrecto: No está prohibido consultar documentación.",
      "Incorrecto: No es por los chatbots."
    ],
    "tip_es": "Fundamento de preguntas guiadas: Los clientes no aportan toda la información técnica espontáneamente.",
    "ref": null,
    "human_rule": "preparar preguntas = clientes dan poca información.",
    "trigger_anchor": "prepare questions ➔ customers omit info",
    "spanglish_trap": "Pensar que es por política legal.",
    "workplace_usage": {
      "scenario": "Triage de Tickets L1",
      "en": "We ask structured questions because customers rarely provide full diagnostic details initially.",
      "es": "Hacemos preguntas estructuradas porque los clientes rara vez proporcionan detalles de diagnóstico completos inicialmente."
    }
  },
  {
    "id": "it1-mod4-sec4-ex2-q2",
    "section": "UE",
    "objective": "R2",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If a customer reports that certain menus or configuration options are completely unavailable or greyed out, what might this indicate?",
    "options": [
      "Their computer monitor has burned-out physical pixels.",
      "They might need a different support tier, role assignment, or elevated permission level.",
      "The entire cloud provider datacenter has suffered an outage.",
      "Their keyboard cable is improperly grounded."
    ],
    "answer": 1,
    "why_correct": "• Pista: Menús o funciones desactivadas: puede faltar permiso.\n• Significado: Podrían necesitar otro nivel de soporte, rol o permiso elevado.\n• Descartas: Píxeles, datacenter caído o cable de teclado no explican menús grises.",
    "why_wrong": [
      "Incorrecto: Los píxeles quemados no causan eso.",
      "Opción correcta: Pueden necesitar otro rol o permiso.",
      "Incorrecto: Un datacenter caído afectaría todo.",
      "Incorrecto: El cable del teclado no cambia menús."
    ],
    "tip_es": "Diagnóstico de permisos: Opciones no disponibles suelen requerir otro nivel de soporte o permisos IAM.",
    "ref": null,
    "human_rule": "greyed out = falta de permiso.",
    "trigger_anchor": "greyed out ➔ permission",
    "spanglish_trap": "Culpar al hardware.",
    "workplace_usage": {
      "scenario": "Soporte y Gestión de Roles RBAC",
      "en": "If options are missing, the customer might need elevated role permissions.",
      "es": "Si faltan opciones, es posible que el cliente necesite permisos de rol elevados."
    }
  },
  {
    "id": "it1-mod4-sec4-ex2-q3",
    "section": "UE",
    "objective": "R3",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Why is discovering the exact timestamp when an issue occurred crucial for the support engineer?",
    "options": [
      "It allows the agent to bill the customer for hourly overtime.",
      "It automatically formats the customer’s hard drive.",
      "It helps the support agent to correlate the incident with backend server logs and trace anomalies.",
      "It terminates all active SSL certificates immediately."
    ],
    "answer": 2,
    "why_correct": "• Pista: Con la hora exacta se cruza con los logs del servidor.\n• Significado: Ayuda a correlacionar el incidente con logs y anomalías.\n• Descartas: Cobrar horas extra, formatear disco o terminar certificados no tiene sentido.",
    "why_wrong": [
      "Incorrecto: No sirve para cobrar horas.",
      "Incorrecto: No formatea el disco.",
      "Opción correcta: Permite correlacionar con logs del backend.",
      "Incorrecto: No termina certificados SSL."
    ],
    "tip_es": "Importancia del timestamp: Permite correlacionar el fallo con las marcas de tiempo en los logs del servidor.",
    "ref": null,
    "human_rule": "timestamp ➔ buscar en logs.",
    "trigger_anchor": "exact timestamp ➔ correlate logs",
    "spanglish_trap": "Pensar que la hora es dato sin importancia.",
    "workplace_usage": {
      "scenario": "Análisis de Logs SIEM",
      "en": "Knowing the exact moment the bug occurred lets us inspect matching server logs.",
      "es": "Conocer el momento exacto en que ocurrió el error nos permite inspeccionar los registros del servidor coincidentes."
    }
  },
  {
    "id": "it1-mod4-sec4-ex2-q4",
    "section": "UE",
    "objective": "R4",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What is a valid operational reason for a support agent to request remote desktop access to a customer's endpoint?",
    "options": [
      "To secretly install cryptocurrency mining software on customer hardware.",
      "To bypass the company's mandatory two-factor authentication permanently.",
      "To replace physical RAM chips inside the user’s computer remotely.",
      "It allows the agent to witness anomalous behaviors directly when the user struggles to explain them."
    ],
    "answer": 3,
    "why_correct": "• Pista: Acceso remoto sirve para ver el problema en directo.\n• Significado: Permite observar comportamientos anómalos cuando el usuario no sabe explicarlos.\n• Descartas: Instalar minería, saltarse 2FA o cambiar RAM remotamente son abusos o imposibles.",
    "why_wrong": [
      "Incorrecto: Instalar minería es malicioso.",
      "Incorrecto: Saltar 2FA es inseguro.",
      "Incorrecto: No se puede cambiar RAM remotamente.",
      "Opción correcta: Ver el comportamiento directamente."
    ],
    "tip_es": "Propósito de escritorio remoto: Observar de primera mano el comportamiento anómalo que el usuario no logra verbalizar.",
    "ref": null,
    "human_rule": "remote desktop = ver el problema en vivo.",
    "trigger_anchor": "remote access ➔ observe directly",
    "spanglish_trap": "Confundir soporte legítimo con abuso.",
    "workplace_usage": {
      "scenario": "Soporte Remoto Asistido",
      "en": "Remote desktop sessions help agents observe issues that users cannot easily describe.",
      "es": "Las sesiones de escritorio remoto ayudan a los agentes a observar problemas que los usuarios no pueden describir fácilmente."
    }
  },
  {
    "id": "it1-mod4-sec4-ex2-q5",
    "section": "UE",
    "objective": "R4",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Why might an enterprise customer legitimate refuse to grant remote desktop access to a support agent?",
    "options": [
      "Due to strict organizational security policies regarding data confidentiality and privacy.",
      "Because remote desktop tools require continuous pedal-powered generators.",
      "Because operating systems become physically heavier when remote access is active.",
      "Because mouse cursors cannot move while connected across subnets."
    ],
    "answer": 0,
    "why_correct": "• Pista: Un cliente corporativo puede negarse por políticas de seguridad.\n• Significado: Por políticas estrictas de confidencialidad y privacidad.\n• Descartas: Generadores a pedal, peso del sistema o subredes no son razones reales.",
    "why_wrong": [
      "Opción correcta: Políticas de seguridad sobre confidencialidad.",
      "Incorrecto: Generadores a pedal es absurdo.",
      "Incorrecto: El sistema no pesa más.",
      "Incorrecto: Las subredes no frenan el cursor."
    ],
    "tip_es": "Motivo de rechazo de acceso remoto: Políticas de privacidad, secreto profesional y cumplimiento GDPR/InfoSec.",
    "ref": null,
    "human_rule": "refuse remote = política de seguridad.",
    "trigger_anchor": "refuse access ➔ security policy",
    "spanglish_trap": "Pensar que es un tema técnico.",
    "workplace_usage": {
      "scenario": "Cumplimiento y Privacidad en Soporte",
      "en": "Clients may refuse remote access due to corporate compliance policies.",
      "es": "Los clientes pueden rechazar el acceso remoto debido a las políticas de cumplimiento corporativo."
    }
  },
  {
    "id": "it1-mod4-sec4-ex2-q6",
    "section": "UE",
    "objective": "R5",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What core advice does the author give support engineers regarding the tone of their questions?",
    "options": [
      "Agents should interrogate customers like criminal suspects to detect lies.",
      "It is important to be sensitive and tactful, because aggressive questioning damages customer satisfaction.",
      "Agents should speak as quickly as possible to reduce call handling times.",
      "Agents should use heavy jargon to intimidate users into hanging up."
    ],
    "answer": 1,
    "why_correct": "• Pista: El autor aconseja ser sensible y diplomático.\n• Significado: Ser tactful, porque preguntar agresivamente daña la satisfacción.\n• Descartas: Interrogar, hablar rápido o usar jerga intimida.",
    "why_wrong": [
      "Incorrecto: Interrogar daña la relación.",
      "Opción correcta: Ser sensible y tactful.",
      "Incorrecto: Hablar rápido no ayuda.",
      "Incorrecto: La jerga intimida."
    ],
    "tip_es": "Pilar de atención al cliente en TI: Empatía, sensibilidad y diplomacia al recopilar información técnica.",
    "ref": null,
    "human_rule": "tactful = con tacto.",
    "trigger_anchor": "tone ➔ tactful",
    "spanglish_trap": "Traducir tactful como \"táctico\".",
    "workplace_usage": {
      "scenario": "Capacitación de Soporte al Cliente",
      "en": "Support agents must remain sensitive and polite, avoiding interrogative tones.",
      "es": "Los agentes de soporte deben ser sensibles y amables, evitando tonos inquisitivos."
    }
  }
];
