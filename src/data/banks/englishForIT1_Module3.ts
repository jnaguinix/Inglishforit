import { Question } from '../../types';

/**
 * English for IT 1 – Module 3: Software Engineering & Development Processes
 * Reactivos oficiales de OpenEDG / Cisco Networking Academy.
 * Cobertura de secciones:
 *  - 3.1 Section 1 – Grammar: Conjunctions at Sentence Start (3.1.2: 12 items)
 *  - 3.2 Section 2 – Grammar: Negative Inversion & Inverted Conditionals (3.2.2 & 3.2.3: 17 items)
 *  - 3.3 Section 3 – Listening: Lambda Functions, Code Reviews & Lexicon (3.3.2, 3.3.4, 3.3.5: 14 items)
 *  - 3.4 Section 4 – Grammar: Modals (should, ought to, must) (3.4.2 & 3.4.3: 13 items)
 *  - 3.5 Section 5 – Reading: Compilers vs. Interpreters (3.5.3: 6 items)
 * 
 * Todos los reactivos están tipados estrictamente como 'pool: practice' para enriquecer
 * la práctica por módulos y temas sin descalibrar el simulacro oficial TestNow™.
 */
export const ENGLISH_FOR_IT_1_MODULE_3_BANK: Question[] = [
  {
    "id": "it1-mod3-sec1-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with an appropriate coordinating conjunction: \"One of the most important advantages of compilers is that they translate everything before execution. __________ they create efficient machine code.\"",
    "options": [
      "And / So",
      "Although",
      "Despite",
      "Because of"
    ],
    "answer": 0,
    "why_correct": "• Pista: se suma otra ventaja a la anterior (\"they create efficient machine code\").\n• Regla: \"y\" / \"así que\" ➔ And / So.\n• Descartas: Although y Despite contrastan; \"Because of\" explica una causa.",
    "why_wrong": [
      "Opción correcta: \"And / So they create…\" suma otra idea.",
      "Incorrecto: Although contrasta, y aquí se suma.",
      "Incorrecto: Despite contrasta, y aquí se suma.",
      "Incorrecto: \"Because of\" explica una causa."
    ],
    "tip_es": "Conjunción inicial de adición/consecuencia: \"And\" y \"So\" son formalmente aceptadas en prosa técnica moderna.",
    "ref": null,
    "human_rule": "Sumar una idea ➔ And / So.",
    "trigger_anchor": "…translate everything before execution. ______ they create efficient code ➔ And / So",
    "spanglish_trap": "Contrastar donde se está sumando. Mira si la segunda idea apoya o se opone.",
    "workplace_usage": {
      "scenario": "Arquitectura de Compiladores",
      "en": "One of the most important advantages of compilers is that they translate everything before execution. And they create efficient machine code.",
      "es": "Una de las ventajas más importantes de los compiladores es que traducen todo antes de la ejecución. Y generan código de máquina eficiente."
    }
  },
  {
    "id": "it1-mod3-sec1-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"The downside is that if any changes need to be made, the program has to be recompiled. __________ this takes additional time.\"",
    "options": [
      "Unless",
      "And / So",
      "Instead",
      "In spite of"
    ],
    "answer": 1,
    "why_correct": "• Pista: se explica la consecuencia del inconveniente (\"this takes additional time\").\n• Regla: \"y\" / \"así que\" ➔ And / So.\n• Descartas: Unless es \"a menos que\"; Instead es \"en vez de\"; \"In spite of\" contrasta.",
    "why_wrong": [
      "Incorrecto: Unless significa \"a menos que\".",
      "Opción correcta: \"And / So this takes additional time\" suma la consecuencia.",
      "Incorrecto: Instead significa \"en vez de\".",
      "Incorrecto: \"In spite of\" contrasta."
    ],
    "tip_es": "Adición de un inconveniente técnico adicional: usa \"And\" o \"So\".",
    "ref": null,
    "human_rule": "Sumar una consecuencia ➔ And / So.",
    "trigger_anchor": "…the program has to be recompiled. ______ this takes time ➔ And / So",
    "spanglish_trap": "Usar un conector de contraste. Aquí la segunda idea es consecuencia.",
    "workplace_usage": {
      "scenario": "Trade-offs de Compilación vs Interpretación",
      "en": "The program has to be recompiled. And this takes additional time.",
      "es": "El programa tiene que ser recompilado. Y esto toma tiempo adicional."
    }
  },
  {
    "id": "it1-mod3-sec1-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sequence of compiler operations: \"A compiler will first read the entire source code and analyze the syntax. __________ then it generates machine instructions.\"",
    "options": [
      "Whereas",
      "Notwithstanding",
      "And / So",
      "Unlike"
    ],
    "answer": 2,
    "why_correct": "• Pista: se describe una secuencia (\"first… then\").\n• Regla: \"y luego\" ➔ And / So (then).\n• Descartas: Whereas contrasta; Notwithstanding y Unlike no encajan en una secuencia.",
    "why_wrong": [
      "Incorrecto: Whereas compara dos cosas.",
      "Incorrecto: Notwithstanding significa \"no obstante\".",
      "Opción correcta: \"And then it generates…\" continúa la secuencia.",
      "Incorrecto: Unlike significa \"a diferencia de\"."
    ],
    "tip_es": "Secuencia de pasos en un algoritmo/compilador: [And then...].",
    "ref": null,
    "human_rule": "Continuar una secuencia ➔ And (then).",
    "trigger_anchor": "…first read… ______ then it generates ➔ And / So",
    "spanglish_trap": "Usar un contraste para una secuencia. Mira si la segunda acción sigue a la primera.",
    "workplace_usage": {
      "scenario": "Funcionamiento del Pipeline de Compilación",
      "en": "A compiler will first read the entire source code and analyze the syntax. And then it generates machine instructions.",
      "es": "Un compilador primero leerá todo el código fuente y analizará la sintaxis. Y luego generará instrucciones de máquina."
    }
  },
  {
    "id": "it1-mod3-sec1-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the causal sentence: \"__________ I wasn’t able to resolve the timeouts issue, the client agreed to an extension.\"",
    "options": [
      "Because of",
      "Due to",
      "Despite",
      "Because"
    ],
    "answer": 3,
    "why_correct": "• Pista: después del hueco viene una frase completa (\"I wasn't able to resolve…\").\n• Regla: \"porque\" + frase completa ➔ Because.\n• Descartas: \"Because of\" y \"Due to\" van con una cosa, no con una frase; Despite contrasta.",
    "why_wrong": [
      "Incorrecto: \"Because of\" va con una cosa, no con una frase completa.",
      "Incorrecto: \"Due to\" va con una cosa, no con una frase completa.",
      "Incorrecto: Despite contrasta, y aquí se explica una causa.",
      "Opción correcta: \"Because I wasn't able…\" = \"porque no pude…\"."
    ],
    "tip_es": "Regla de oro: [Because + Sujeto + Verbo] vs. [Because of / Due to + Sustantivo].",
    "ref": null,
    "human_rule": "\"Porque\" + frase completa ➔ Because. + una cosa ➔ Because of / Due to.",
    "trigger_anchor": "______ I wasn't able to resolve… (frase) ➔ Because",
    "spanglish_trap": "Elegir Because of o Due to. Con quién + qué hizo, Because.",
    "workplace_usage": {
      "scenario": "Negociación de SLA con Cliente",
      "en": "Because I wasn’t able to resolve the timeouts issue, the client agreed to an extension.",
      "es": "Debido a que no pude resolver el problema de tiempos de espera, el cliente aceptó una extensión."
    }
  },
  {
    "id": "it1-mod3-sec1-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the negative addition: \"The bottleneck issue has still not been resolved. __________ does the new update fix the memory leak.\"",
    "options": [
      "Nor",
      "Or",
      "Neither of",
      "Either"
    ],
    "answer": 0,
    "why_correct": "• Pista: la frase anterior es negativa y esta suma otra idea negativa (\"y tampoco\"), con el verbo pequeño antes de quien actúa (\"does the update\").\n• Regla: \"y tampoco\" ➔ Nor does…\n• Descartas: Or, \"Neither of\" y Either no abren la frase así.",
    "why_wrong": [
      "Opción correcta: \"Nor does the update fix…\" = \"y tampoco soluciona…\".",
      "Incorrecto: Or suma opciones, no una segunda negativa.",
      "Incorrecto: \"Neither of\" va con un grupo de cosas.",
      "Incorrecto: Either no abre una frase negativa así."
    ],
    "tip_es": "Negación inicial con inversión: [Nor + auxiliar does + sujeto + verbo base].",
    "ref": null,
    "human_rule": "\"Y tampoco\" ➔ Nor + verbo pequeño + sujeto.",
    "trigger_anchor": "…has not been resolved. ______ does the update fix… ➔ Nor",
    "spanglish_trap": "Elegir Or. Para sumar una segunda negativa, Nor + does.",
    "workplace_usage": {
      "scenario": "Informe de Release y Bugs Críticos",
      "en": "The bottleneck issue has still not been resolved. Nor does the new update fix the memory leak.",
      "es": "El problema del cuello de botella aún no se ha resuelto. Tampoco la nueva actualización corrige la fuga de memoria."
    }
  },
  {
    "id": "it1-mod3-sec1-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence explaining justification: \"We ought to try using the developer tools in a new browser. __________ that might shed light on the styling anomalies.\"",
    "options": [
      "So that",
      "For",
      "In order to",
      "Because of"
    ],
    "answer": 1,
    "why_correct": "• Pista: la segunda frase explica el motivo de la primera (\"that might shed light\").\n• Regla: \"porque\" entre dos frases ➔ For.\n• Descartas: \"So that\" y \"In order to\" indican finalidad; \"Because of\" va con una cosa.",
    "why_wrong": [
      "Incorrecto: \"So that\" indica finalidad, no motivo.",
      "Opción correcta: \"For that might shed light…\" = \"porque eso podría aclarar…\".",
      "Incorrecto: \"In order to\" indica finalidad y va con un verbo.",
      "Incorrecto: \"Because of\" va con una cosa."
    ],
    "tip_es": "Conjunción coordinante formal de causa: [For + cláusula explicativa].",
    "ref": null,
    "human_rule": "\"Porque\" (formal, entre frases) ➔ For.",
    "trigger_anchor": "…try the developer tools. ______ that might shed light ➔ For",
    "spanglish_trap": "Elegir Because of por \"por\". Aquí For une dos frases.",
    "workplace_usage": {
      "scenario": "Debugging Frontend y CSS",
      "en": "We ought to try using the developer tools in a new browser. For that might shed light on the styling anomalies.",
      "es": "Deberíamos intentar usar las herramientas de desarrollador en un nuevo navegador. Pues eso podría arrojar luz sobre las anomalías de estilo."
    }
  },
  {
    "id": "it1-mod3-sec1-ex2-q1",
    "section": "UE",
    "objective": "UE2",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the conversational sentence: \"__________ me, it's a little more complicated. I don't have the administrative permissions.\"",
    "options": [
      "For",
      "To",
      "By",
      "With"
    ],
    "answer": 0,
    "why_correct": "• Pista: se da una opinión personal (\"es un poco más complicado\").\n• Regla: \"para mí\" ➔ For me.\n• Descartas: \"To me\" también es posible; By y With no encajan.",
    "why_wrong": [
      "Opción correcta: \"For me, it's a little more complicated\" = \"para mí, es un poco más complicado\".",
      "Incorrecto: \"To me\" también se usa; este ejercicio busca For.",
      "Incorrecto: \"By me\" no se usa para dar una opinión.",
      "Incorrecto: \"With me\" no se usa para dar una opinión."
    ],
    "tip_es": "Punto de vista de situación técnica: [For me, it's a little more complicated...].",
    "ref": null,
    "human_rule": "\"Para mí\" ➔ For me.",
    "trigger_anchor": "______ me, it's a little more complicated ➔ For",
    "spanglish_trap": "Elegir By o With. Para \"para mí\", For me.",
    "workplace_usage": {
      "scenario": "Asignación de Permisos IAM",
      "en": "For me, it's a little more complicated. I don't have the permissions.",
      "es": "Para mí es un poco más complicado. No tengo los permisos."
    }
  },
  {
    "id": "it1-mod3-sec1-ex2-q2",
    "section": "UE",
    "objective": "UE2",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the contrast question: \"__________ do we expect a result soon?\"",
    "options": [
      "And",
      "But",
      "Because",
      "Although"
    ],
    "answer": 1,
    "why_correct": "• Pista: la pregunta contrasta con lo anterior (\"pero ¿esperamos un resultado pronto?\").\n• Regla: \"pero\" ➔ But.\n• Descartas: And suma; Because explica; Although abre una cláusula.",
    "why_wrong": [
      "Incorrecto: And suma, no contrasta.",
      "Opción correcta: \"But do we expect…?\" = \"¿pero esperamos…?\".",
      "Incorrecto: Because explica una causa.",
      "Incorrecto: Although abre una cláusula con sujeto y verbo."
    ],
    "tip_es": "Objeción en pregunta interrogativa: [But + auxiliar + sujeto...?].",
    "ref": null,
    "human_rule": "\"Pero\" ➔ But.",
    "trigger_anchor": "______ do we expect a result soon? ➔ But",
    "spanglish_trap": "Elegir Although por el contraste. Al inicio de una pregunta, But.",
    "workplace_usage": {
      "scenario": "Sync de Avance de Proyecto",
      "en": "But do we expect a result soon?",
      "es": "Pero, ¿esperamos un resultado pronto?"
    }
  },
  {
    "id": "it1-mod3-sec1-ex2-q3",
    "section": "UE",
    "objective": "UE5",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the assertive rebuttal: \"__________ that is not how we are going to solve the problem.\"",
    "options": [
      "Although",
      "Despite",
      "But",
      "Even if"
    ],
    "answer": 2,
    "why_correct": "• Pista: se rechaza una idea anterior (\"that is not how we are going to solve it\").\n• Regla: \"pero\" ➔ But.\n• Descartas: Although, Despite y \"Even if\" no abren una frase suelta.",
    "why_wrong": [
      "Incorrecto: Although abre una cláusula y necesita otra parte.",
      "Incorrecto: Despite va con una cosa o -ing.",
      "Opción correcta: \"But that is not how we are going to…\" = \"pero así no lo vamos a resolver\".",
      "Incorrecto: \"Even if\" abre una condición."
    ],
    "tip_es": "Réplica de desacuerdo profesional: [But that is not how...].",
    "ref": null,
    "human_rule": "Rechazar una idea ➔ But + frase.",
    "trigger_anchor": "______ that is not how we are going to solve it ➔ But",
    "spanglish_trap": "Usar Although al inicio de una frase suelta. Para rechazar, But.",
    "workplace_usage": {
      "scenario": "Debate de Solución de Arquitectura",
      "en": "But that is not how we are going to solve the problem.",
      "es": "Pero así no es como vamos a resolver el problema."
    }
  },
  {
    "id": "it1-mod3-sec1-ex2-q4",
    "section": "UE",
    "objective": "UE2",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the alternative proposal: \"__________ we could resort to plan B.\"",
    "options": [
      "Nor",
      "Either",
      "Neither",
      "Or"
    ],
    "answer": 3,
    "why_correct": "• Pista: se propone otra opción (\"we could resort to plan B\").\n• Regla: \"o\" ➔ Or.\n• Descartas: Nor suma una negativa; Either y Neither van con una pareja.",
    "why_wrong": [
      "Incorrecto: Nor suma una segunda idea negativa.",
      "Incorrecto: Either va con \"or\" (either… or).",
      "Incorrecto: Neither va con \"nor\" (neither… nor).",
      "Opción correcta: \"Or we could resort to plan B\" = \"o podríamos recurrir al plan B\"."
    ],
    "tip_es": "Propuesta de alternativa al inicio de frase: [Or we could...].",
    "ref": null,
    "human_rule": "Proponer otra opción ➔ Or.",
    "trigger_anchor": "______ we could resort to plan B ➔ Or",
    "spanglish_trap": "Elegir Either por \"o\". Either necesita su pareja: either… or.",
    "workplace_usage": {
      "scenario": "Plan de Contingencia ante Fallos",
      "en": "Or we could resort to plan B.",
      "es": "O podríamos recurrir al plan B."
    }
  },
  {
    "id": "it1-mod3-sec1-ex2-q5",
    "section": "UE",
    "objective": "UE2",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the transition: \"__________ , anyway, we're still waiting for the interpreted code to finish running.\"",
    "options": [
      "And",
      "Unless",
      "Despite",
      "Because of"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una transición al retomar (\"And, anyway, we're still waiting\").\n• Regla: retomar la conversación ➔ And, anyway,…\n• Descartas: Unless, Despite y \"Because of\" no abren una transición así.",
    "why_wrong": [
      "Opción correcta: \"And, anyway, we're still waiting\" retoma la conversación.",
      "Incorrecto: Unless significa \"a menos que\".",
      "Incorrecto: Despite significa \"a pesar de\".",
      "Incorrecto: \"Because of\" va con una cosa."
    ],
    "tip_es": "Retomar el hilo principal: [And, anyway, we're still waiting...].",
    "ref": null,
    "human_rule": "Retomar la conversación ➔ And, anyway,…",
    "trigger_anchor": "______, anyway, we're still waiting… ➔ And",
    "spanglish_trap": "Usar un conector de condición o causa. Para retomar, And, anyway.",
    "workplace_usage": {
      "scenario": "Daily Standup de Ingeniería",
      "en": "And, anyway, we're still waiting for the interpreted code to finish running.",
      "es": "Y, de todos modos, todavía estamos esperando a que el código interpretado termine de ejecutarse."
    }
  },
  {
    "id": "it1-mod3-sec1-ex2-q6",
    "section": "UE",
    "objective": "UE2",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the conclusive question: \"__________ that's our only option?\"",
    "options": [
      "Because",
      "So",
      "Although",
      "Whereas"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una pregunta que concluye lo dicho (\"so that's our only option?\").\n• Regla: \"entonces\" ➔ So…?\n• Descartas: Because, Although y Whereas no abren una pregunta así.",
    "why_wrong": [
      "Incorrecto: Because explica una causa.",
      "Opción correcta: \"So that's our only option?\" = \"¿entonces esa es nuestra única opción?\".",
      "Incorrecto: Although abre un contraste.",
      "Incorrecto: Whereas compara dos cosas."
    ],
    "tip_es": "Conclusión recapitulativa: [So that's our only option?].",
    "ref": null,
    "human_rule": "Concluir con una pregunta ➔ So…?",
    "trigger_anchor": "______ that's our only option? ➔ So",
    "spanglish_trap": "Elegir Because por \"porque\". Para \"entonces…\", So.",
    "workplace_usage": {
      "scenario": "Toma de Decisiones Técnicas",
      "en": "So that's our only option?",
      "es": "¿Así que esa es nuestra única opción?"
    }
  },
  {
    "id": "it1-mod3-sec2-ex1-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid negative restrictive inversion phrase(s): \"__________ did they think that was the end of the issue.\"",
    "options": [
      "Under no circumstances / In no way / Not",
      "No sooner had",
      "Hardly had",
      "Rarely had"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco viene \"did they think\", con el verbo pequeño antes de quien actúa.\n• Regla: una expresión negativa al inicio (Under no circumstances, In no way, Not) pide ese orden.\n• Descartas: \"No sooner had\", \"Hardly had\" y \"Rarely had\" van con had, no con did.",
    "why_wrong": [
      "Opción correcta: expresión negativa simple + did + sujeto + verbo base.",
      "Incorrecto: \"No sooner had\" va con had y con \"than\"; aquí el verbo es did.",
      "Incorrecto: \"Hardly had\" va con had y con \"when\".",
      "Incorrecto: \"Rarely had\" va con had, no con did."
    ],
    "tip_es": "Inversión con did: [Under no circumstances / In no way + did + sujeto + verbo base].",
    "ref": null,
    "human_rule": "Expresión negativa al inicio + did + sujeto + verbo base.",
    "trigger_anchor": "______ did they think (verbo pequeño antes del sujeto) ➔ Under no circumstances / In no way / Not",
    "spanglish_trap": "Elegir las opciones con \"had\" porque suenan formales. Mira el verbo pequeño: did ➔ expresión negativa simple.",
    "workplace_usage": {
      "scenario": "Investigación de Ciberseguridad",
      "en": "In no way did they think that was the end of the issue.",
      "es": "De ninguna manera pensaron que ese era el final del problema."
    }
  },
  {
    "id": "it1-mod3-sec2-ex1-q2",
    "section": "UE",
    "objective": "UE5",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid negative phrase(s): \"__________ do I agree with their decision.\"",
    "options": [
      "Hardly had",
      "Under no circumstances / In no way / Not",
      "Not only did",
      "Barely did"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"do I agree\", con el verbo pequeño antes de quien actúa.\n• Regla: expresión negativa + do + sujeto + verbo base.\n• Descartas: \"Hardly had\" y \"Barely did\" no encajan con do; \"Not only did\" pide \"but also\".",
    "why_wrong": [
      "Incorrecto: \"Hardly had\" va con had y con \"when\".",
      "Opción correcta: expresión negativa + do + sujeto + verbo base.",
      "Incorrecto: \"Not only did\" pide una segunda parte con \"but also\", y aquí el verbo es do, no did.",
      "Incorrecto: \"Barely did\" va en pasado y la frase está en presente."
    ],
    "tip_es": "Inversión negativa en presente: [Under no circumstances / In no way + do + I + agree].",
    "ref": null,
    "human_rule": "Expresión negativa + do + sujeto + verbo base.",
    "trigger_anchor": "______ do I agree (verbo pequeño antes del sujeto) ➔ Under no circumstances / In no way / Not",
    "spanglish_trap": "Mezclar do y did. Mira el tiempo de la frase: presente ➔ do.",
    "workplace_usage": {
      "scenario": "Comité de Arquitectura",
      "en": "Under no circumstances do I agree with their decision.",
      "es": "Bajo ninguna circunstancia estoy de acuerdo con su decisión."
    }
  },
  {
    "id": "it1-mod3-sec2-ex1-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid inversion phrase(s): \"__________ can we meet this deadline without additional resources.\"",
    "options": [
      "No sooner",
      "Not only",
      "Under no circumstances / In no way",
      "Little"
    ],
    "answer": 2,
    "why_correct": "• Pista: después del hueco viene \"can we meet\", con el verbo pequeño antes del sujeto, y la idea es \"no podemos\".\n• Regla: expresión negativa + can + sujeto + verbo.\n• Descartas: \"No sooner\" y \"Not only\" piden \"than\" o \"but also\"; \"Little\" cambia el sentido.",
    "why_wrong": [
      "Incorrecto: \"No sooner\" pide \"had\" y \"than\".",
      "Incorrecto: \"Not only\" pide \"but also\" después.",
      "Opción correcta: expresión negativa + can + sujeto + verbo.",
      "Incorrecto: \"Little can we\" cambia el sentido a \"poco podemos\"."
    ],
    "tip_es": "Imposibilidad de cumplir plazo: [Under no circumstances can we...].",
    "ref": null,
    "human_rule": "Expresión negativa + can + sujeto + verbo.",
    "trigger_anchor": "______ can we meet this deadline (no podemos) ➔ Under no circumstances / In no way",
    "spanglish_trap": "Pensar que cualquier expresión negativa vale. Cada una pide su pareja: No sooner ➔ than, Not only ➔ but also.",
    "workplace_usage": {
      "scenario": "Planificación de Release",
      "en": "Under no circumstances can we meet this deadline without additional resources.",
      "es": "Bajo ninguna circunstancia podemos cumplir este plazo sin recursos adicionales."
    }
  },
  {
    "id": "it1-mod3-sec2-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the temporal inversion: \"__________ they reversed the changes to the connection pool than latency spiked again.\"",
    "options": [
      "Hardly had",
      "Scarcely had",
      "Not only did",
      "No sooner had"
    ],
    "answer": 3,
    "why_correct": "• Pista: después del hueco viene \"than\" (apenas… que).\n• Regla: No sooner had + sujeto + 3.ª forma + THAN…\n• Descartas: Hardly y Scarcely van con \"when\", no con \"than\"; Not only did no encaja.",
    "why_wrong": [
      "Incorrecto: Hardly had va con \"when\", no con \"than\".",
      "Incorrecto: Scarcely had va con \"when\", no con \"than\".",
      "Incorrecto: Not only did va con \"but also\".",
      "Opción correcta: \"No sooner had… than\" = \"apenas… cuando\"."
    ],
    "tip_es": "Regla nemotécnica de oro B2: [No sooner had... THAN...] vs. [Hardly had... WHEN...].",
    "ref": null,
    "human_rule": "No sooner had… THAN / Hardly (Scarcely) had… WHEN.",
    "trigger_anchor": "______ they reversed… than (apenas… que) ➔ No sooner had",
    "spanglish_trap": "Mezclar than con when. No sooner ➔ than; Hardly / Scarcely ➔ when.",
    "workplace_usage": {
      "scenario": "Telemetría de Base de Datos",
      "en": "No sooner had they reversed the changes than latency spiked again.",
      "es": "Apenas habían revertido los cambios en el pool de conexiones cuando la latencia se disparó de nuevo."
    }
  },
  {
    "id": "it1-mod3-sec2-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the correlative inversion: \"__________ they fail to report the issue, but they also made unauthorized modifications to production.\"",
    "options": [
      "Not only did",
      "No sooner had",
      "Hardly did",
      "Under no circumstances"
    ],
    "answer": 0,
    "why_correct": "• Pista: después viene \"but they also…\" (no solo… sino también).\n• Regla: Not only + did + sujeto + verbo base, but… also…\n• Descartas: \"No sooner had\" va con \"than\"; \"Hardly did\" no se usa así; \"Under no circumstances\" prohíbe algo.",
    "why_wrong": [
      "Opción correcta: \"Not only did they fail… but they also…\" = \"no solo no informaron… sino que también…\".",
      "Incorrecto: \"No sooner had\" va con \"than\".",
      "Incorrecto: \"Hardly did\" no se usa así; es \"Hardly had… when\".",
      "Incorrecto: \"Under no circumstances\" prohíbe algo, no suma una segunda idea."
    ],
    "tip_es": "Inversión correlativa aditiva: [Not only did + sujeto + verbo... but they also...].",
    "ref": null,
    "human_rule": "Not only + did + sujeto + verbo base, but… also…",
    "trigger_anchor": "______ they fail…, but they also… (no solo… sino también) ➔ Not only did",
    "spanglish_trap": "Olvidar el verbo pequeño. Tras Not only, did va antes de quien actúa.",
    "workplace_usage": {
      "scenario": "Auditoría Forense de Seguridad",
      "en": "Not only did they fail to report the issue, but they also made unauthorized modifications.",
      "es": "No solo no informaron del problema, sino que también realizaron modificaciones no autorizadas."
    }
  },
  {
    "id": "it1-mod3-sec2-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the negative addition with inversion: \"They didn’t come up with any ideas. __________ they offer much help.\"",
    "options": [
      "Neither did",
      "Nor did",
      "So did",
      "Either did"
    ],
    "answer": 1,
    "why_correct": "• Pista: la frase anterior es negativa y esta suma otra idea negativa (\"y tampoco\").\n• Regla: \"y tampoco\" ➔ Nor did + sujeto + verbo base.\n• Descartas: Neither did también suena posible, pero este ejercicio busca Nor did; So did es afirmativo; Either did no abre frases.",
    "why_wrong": [
      "Incorrecto: Neither did también suena posible; este ejercicio busca Nor did (\"y tampoco\").",
      "Opción correcta: \"Nor did they offer…\" = \"y tampoco ofrecieron…\".",
      "Incorrecto: So did dice \"y también\" (afirmativo).",
      "Incorrecto: Either did no se usa para empezar una frase así."
    ],
    "tip_es": "Conjunción negativa coordinada: [Nor did + sujeto + verbo base].",
    "ref": null,
    "human_rule": "\"Y tampoco…\" ➔ Nor did + sujeto + verbo base.",
    "trigger_anchor": "They didn't… ______ they offer much help (y tampoco) ➔ Nor did",
    "spanglish_trap": "Usar So did porque suena parecido. So es \"también\" (afirmativo); para \"tampoco\" va Nor.",
    "workplace_usage": {
      "scenario": "Evaluación de Soporte de Proveedores",
      "en": "They didn’t come up with any ideas. Nor did they offer much help.",
      "es": "No se les ocurrió ninguna idea. Ni tampoco ofrecieron mucha ayuda."
    }
  },
  {
    "id": "it1-mod3-sec2-ex2-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform using inverted conditional (Second Conditional): \"If you were to ask for help, I would certainly offer my time.\" -> \"__________ , I would certainly offer my time.\"",
    "options": [
      "Were you to ask for help",
      "If were you to ask",
      "Had you asked for help",
      "Should you to ask for help"
    ],
    "answer": 0,
    "why_correct": "• Pista: piden una versión sin \"if\" de \"If you were to ask\".\n• Regla: quitas el if y adelantas el verbo pequeño: Were you to ask…\n• Descartas: \"If were you\" mantiene if; \"Had you asked\" es para el pasado; \"Should you to ask\" lleva to.",
    "why_wrong": [
      "Opción correcta: \"Were you to ask for help…\" = \"si pidieras ayuda…\".",
      "Incorrecto: no se puede mantener \"If\" y además adelantar were.",
      "Incorrecto: Had you asked es para algo que ya pasó.",
      "Incorrecto: después de should no va \"to\"."
    ],
    "tip_es": "Inversión de Segundo Condicional: [Were + sujeto + to-infinitivo]. Se elimina el \"if\".",
    "ref": null,
    "human_rule": "Sin if: If you were to ask ➔ Were you to ask.",
    "trigger_anchor": "If you were to ask ➔ ______ you to ask ➔ Were",
    "spanglish_trap": "Dejar el if y adelantar el verbo a la vez. Si quitas el if, el verbo pequeño pasa al principio.",
    "workplace_usage": {
      "scenario": "Mentoría y Pair Programming",
      "en": "Were you to ask for help, I would certainly offer my time.",
      "es": "Si fueras a pedir ayuda, sin duda ofrecería mi tiempo."
    }
  },
  {
    "id": "it1-mod3-sec2-ex2-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform using inverted conditional (Third Conditional): \"If you had finished the integration yesterday, we could have tested it today.\" -> \"__________ yesterday, we could have tested it today.\"",
    "options": [
      "Were you to finish",
      "Had you finished the integration",
      "If had you finished",
      "Should you finish"
    ],
    "answer": 1,
    "why_correct": "• Pista: habla de algo que ya pasó (\"yesterday\").\n• Regla: quitas el if y adelantas had: Had you finished…\n• Descartas: Were you to y Should you son para el futuro o lo posible; \"If had you\" mantiene el if.",
    "why_wrong": [
      "Incorrecto: Were you to finish habla del futuro.",
      "Opción correcta: \"Had you finished…\" = \"si hubieras terminado…\".",
      "Incorrecto: no se puede dejar \"If\" y adelantar had.",
      "Incorrecto: Should you finish habla de algo posible, no de algo que ya pasó."
    ],
    "tip_es": "Inversión de Tercer Condicional: [Had + sujeto + participio pasado].",
    "ref": null,
    "human_rule": "If you had finished ➔ Had you finished.",
    "trigger_anchor": "If you had finished ➔ ______ you finished ➔ Had",
    "spanglish_trap": "Mantener if con la inversión (\"If had you\"). O if, o inversión; las dos a la vez no.",
    "workplace_usage": {
      "scenario": "Retrospectiva de Despliegue",
      "en": "Had you finished the integration yesterday, we could have tested it today.",
      "es": "Si hubieras terminado la integración ayer, podríamos haberla probado hoy."
    }
  },
  {
    "id": "it1-mod3-sec2-ex2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform using inverted conditional (First Conditional): \"If you decide to use a dynamically typed language for this project, you may encounter runtime bugs.\" -> \"__________ to use a dynamically typed language for this project, you may encounter runtime bugs.\"",
    "options": [
      "Were you decide",
      "Had you decided",
      "Should you decide",
      "If should you decide"
    ],
    "answer": 2,
    "why_correct": "• Pista: es una posibilidad futura (\"si decides\"), sin if.\n• Regla: If you decide ➔ Should you decide.\n• Descartas: \"Were you decide\" mezcla were con un verbo; Had you decided es del pasado; \"If should you\" mantiene if.",
    "why_wrong": [
      "Incorrecto: después de were no va el verbo base sin \"to\".",
      "Incorrecto: Had you decided es del pasado.",
      "Opción correcta: \"Should you decide…\" = \"en caso de que decidas…\".",
      "Incorrecto: no se puede dejar \"If\" con la inversión."
    ],
    "tip_es": "Inversión de Primer Condicional: [Should + sujeto + verbo base]. Equivale a \"If you should decide\".",
    "ref": null,
    "human_rule": "If you decide ➔ Should you decide.",
    "trigger_anchor": "If you decide to… ➔ ______ you decide ➔ Should",
    "spanglish_trap": "Pensar que Should aquí es un consejo. En este patrón significa \"en caso de que\".",
    "workplace_usage": {
      "scenario": "Selección de Stack Tecnológico",
      "en": "Should you decide to use a dynamically typed language, you may encounter runtime bugs.",
      "es": "Si decides utilizar un lenguaje de tipado dinámico para este proyecto, es posible que encuentres errores en tiempo de ejecución."
    }
  },
  {
    "id": "it1-mod3-sec2-ex2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform: \"If you decide to continue, you may want to use the new software.\" -> \"__________ to continue, you may want to use the new software.\"",
    "options": [
      "Had you continued",
      "Were you decide",
      "If you to decide",
      "Should you decide"
    ],
    "answer": 3,
    "why_correct": "• Pista: es una posibilidad futura (\"si decides continuar\"), sin if.\n• Regla: If you decide ➔ Should you decide.\n• Descartas: Had you continued es del pasado; \"Were you decide\" no existe; \"If you to decide\" mezcla if con to.",
    "why_wrong": [
      "Incorrecto: Had you continued es para el pasado.",
      "Incorrecto: después de were no va el verbo base sin \"to\".",
      "Incorrecto: \"If you to decide\" mezcla if con to.",
      "Opción correcta: \"Should you decide to continue…\" = \"en caso de que decidas continuar…\"."
    ],
    "tip_es": "[Should you decide to continue] = Si decidieras continuar / en caso de que decidas continuar.",
    "ref": null,
    "human_rule": "If you decide ➔ Should you decide.",
    "trigger_anchor": "If you decide to continue ➔ ______ you decide ➔ Should",
    "spanglish_trap": "Copiar \"si decides\" como \"If you to decide\". Aquí no hay if: el verbo should pasa al inicio.",
    "workplace_usage": {
      "scenario": "Migración de Herramientas de Desarrollo",
      "en": "Should you decide to continue, you may want to use the new software.",
      "es": "Si decides continuar, es posible que desees utilizar el nuevo software."
    }
  },
  {
    "id": "it1-mod3-sec2-ex2-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform: \"If you had added a linter, coding standards could have been enforced automatically.\" -> \"__________ a linter, coding standards could have been enforced automatically.\"",
    "options": [
      "Had you added",
      "Should you add",
      "Were you to add",
      "If had you added"
    ],
    "answer": 0,
    "why_correct": "• Pista: habla de algo que ya pasó (\"could have been enforced\").\n• Regla: If you had added ➔ Had you added.\n• Descartas: Should you add y Were you to add son para el futuro o lo posible; \"If had you\" mantiene if.",
    "why_wrong": [
      "Opción correcta: \"Had you added a linter…\" = \"si hubieras añadido un linter…\".",
      "Incorrecto: Should you add habla de lo posible, no de lo que ya pasó.",
      "Incorrecto: Were you to add habla del futuro.",
      "Incorrecto: no se puede dejar \"If\" con la inversión."
    ],
    "tip_es": "Tercer condicional invertido en postmortems: [Had you added...].",
    "ref": null,
    "human_rule": "If you had added ➔ Had you added.",
    "trigger_anchor": "If you had added ➔ ______ you added ➔ Had",
    "spanglish_trap": "Mantener if con la inversión (\"If had you\"). O if, o inversión.",
    "workplace_usage": {
      "scenario": "CI/CD y Calidad de Código",
      "en": "Had you added a linter, coding standards could have been enforced automatically.",
      "es": "Si hubieras añadido un linter, los estándares de código podrían haberse aplicado automáticamente."
    }
  },
  {
    "id": "it1-mod3-sec2-ex2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform: \"If we had been informed of the deadline sooner, we could have adjusted the scope.\" -> \"__________ of the deadline sooner, we could have adjusted the scope.\"",
    "options": [
      "Were we informed",
      "Had we been informed",
      "Should we be informed",
      "Had we informed"
    ],
    "answer": 1,
    "why_correct": "• Pista: pasado y pasivo (\"nos informaron\").\n• Regla: If we had been informed ➔ Had we been informed.\n• Descartas: Were we informed y Should we be informed no son del pasado; \"Had we informed\" dice que nosotros informamos.",
    "why_wrong": [
      "Incorrecto: Were we informed habla de otra situación.",
      "Opción correcta: \"Had we been informed…\" = \"si nos hubieran informado…\".",
      "Incorrecto: Should we be informed habla de algo posible, no de algo ya pasado.",
      "Incorrecto: Had we informed dice que nosotros informamos, no que nos informaron."
    ],
    "tip_es": "Tercer condicional pasivo invertido: [Had we been + participio pasado].",
    "ref": null,
    "human_rule": "If we had been informed ➔ Had we been informed.",
    "trigger_anchor": "If we had been informed ➔ ______ of the deadline ➔ Had we been informed",
    "spanglish_trap": "Olvidar \"been\". Si nos informaron a nosotros, es Had we been informed.",
    "workplace_usage": {
      "scenario": "Gestión de Alcance y Scope Creep",
      "en": "Had we been informed of the deadline sooner, we could have adjusted the scope.",
      "es": "Si se nos hubiera informado antes de la fecha límite, habríamos podido ajustar el alcance."
    }
  },
  {
    "id": "it1-mod3-sec3-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical term for: \"A small region of re-usable source code, machine code, or text that can be inserted into larger files.\"",
    "options": [
      "Snippet",
      "Lambda",
      "Namespace",
      "Module"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"small region of re-usable code ... inserted into larger files\": fragmento.\n• Significado: Snippet = fragmento de código reutilizable.\n• Descartas: Lambda es función anónima; Namespace agrupa nombres; Module es archivo completo.",
    "why_wrong": [
      "Opción correcta: Snippet = fragmento reutilizable.",
      "Incorrecto: Lambda es función anónima.",
      "Incorrecto: Namespace organiza nombres.",
      "Incorrecto: Module es una unidad mayor."
    ],
    "tip_es": "Definición oficial Cisco: [Snippet] = small region of re-usable source code.",
    "ref": null,
    "human_rule": "snippet = trocito reutilizable.",
    "trigger_anchor": "small reusable ➔ snippet",
    "spanglish_trap": "Traducir snippet como \"recorte\".",
    "workplace_usage": {
      "scenario": "Documentación y Editores de Código",
      "en": "Copy this code snippet into your controller.",
      "es": "Copia este fragmento de código en tu controlador."
    }
  },
  {
    "id": "it1-mod3-sec3-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical verb for: \"To reproduce or make an exact copy of an issue, bug, or execution state.\"",
    "options": [
      "Shadow",
      "Replicate",
      "Compile",
      "Execute"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"reproduce or make an exact copy of an issue\": reproducir.\n• Significado: Replicate = reproducir un fallo.\n• Descartas: Shadow, Compile y Execute son otros verbos.",
    "why_wrong": [
      "Incorrecto: Shadow es ocultar un nombre.",
      "Opción correcta: Replicate = reproducir un fallo.",
      "Incorrecto: Compile es traducir código.",
      "Incorrecto: Execute es ejecutar."
    ],
    "tip_es": "QA y Bug Tracking: [Replicate] = reproducir un bug.",
    "ref": null,
    "human_rule": "replicate = reproducir.",
    "trigger_anchor": "copy an issue ➔ replicate",
    "spanglish_trap": "Traducir replicate como \"replicar mensajes\".",
    "workplace_usage": {
      "scenario": "Reporte de Bug en Jira",
      "en": "We need to replicate the memory leak in the staging environment.",
      "es": "Necesitamos reproducir la fuga de memoria en el entorno de pruebas."
    }
  },
  {
    "id": "it1-mod3-sec3-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical term for: \"An anonymous inline block of code or function that can be passed as an argument.\"",
    "options": [
      "Snippet",
      "Namespace",
      "Lambda",
      "Built-in"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"anonymous inline function\": lambda.\n• Significado: Lambda = función anónima.\n• Descartas: Snippet, Namespace y Built-in no son funciones anónimas.",
    "why_wrong": [
      "Incorrecto: Snippet es un fragmento.",
      "Incorrecto: Namespace organiza nombres.",
      "Opción correcta: Lambda = función anónima.",
      "Incorrecto: Built-in viene incluida."
    ],
    "tip_es": "Programación funcional: [Lambda] = anonymous function / inline block of code.",
    "ref": null,
    "human_rule": "lambda = función sin nombre.",
    "trigger_anchor": "anonymous ➔ lambda",
    "spanglish_trap": "Confundir lambda con la letra griega.",
    "workplace_usage": {
      "scenario": "Programación en Python/JS",
      "en": "You can pass a lambda function to filter the dataset.",
      "es": "Puedes pasar una función lambda para filtrar el conjunto de datos."
    }
  },
  {
    "id": "it1-mod3-sec3-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical verb for: \"To make something become unclear, indistinct, or poorly separated in software design.\"",
    "options": [
      "Replicate",
      "Tamper",
      "Patch",
      "Blur"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"unclear, indistinct\": desdibujar.\n• Significado: Blur = hacer algo borroso o poco claro.\n• Descartas: Replicate, Tamper y Patch no significan desdibujar.",
    "why_wrong": [
      "Incorrecto: Replicate = reproducir.",
      "Incorrecto: Tamper = manipular.",
      "Incorrecto: Patch = parchear.",
      "Opción correcta: Blur = desdibujar."
    ],
    "tip_es": "Diseño de software: [Blur] = desdibujar límites de alcance o separación de responsabilidades.",
    "ref": null,
    "human_rule": "blur = volver borroso.",
    "trigger_anchor": "unclear ➔ blur",
    "spanglish_trap": "Traducir blur como \"azul\".",
    "workplace_usage": {
      "scenario": "Code Review de Arquitectura",
      "en": "Shadowing variables can blur the boundaries of your namespaces.",
      "es": "Hacer shadowing de variables puede desdibujar los límites de tus espacios de nombres."
    }
  },
  {
    "id": "it1-mod3-sec3-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical term for: \"A declarative set of symbols or abstract container used to identify and organize code objects uniquely.\"",
    "options": [
      "Namespace",
      "Snippet",
      "Scope",
      "Runtime"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"abstract container to identify and organize code objects uniquely\": espacio de nombres.\n• Significado: Namespace = espacio de nombres.\n• Descartas: Snippet, Scope y Runtime son otros conceptos.",
    "why_wrong": [
      "Opción correcta: Namespace = espacio de nombres.",
      "Incorrecto: Snippet es un fragmento.",
      "Incorrecto: Scope es el alcance de una variable.",
      "Incorrecto: Runtime es tiempo de ejecución."
    ],
    "tip_es": "Organización modular: [Namespace] = set of symbols/signs used to uniquely identify objects.",
    "ref": null,
    "human_rule": "namespace = contenedor de nombres.",
    "trigger_anchor": "organize names ➔ namespace",
    "spanglish_trap": "Confundir con scope.",
    "workplace_usage": {
      "scenario": "Diseño de Paquetes y Módulos",
      "en": "Importing everything with wildcards pollutes the global namespace.",
      "es": "Importar todo con comodines contamina el espacio de nombres global."
    }
  },
  {
    "id": "it1-mod3-sec3-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the programming concept for: \"When a variable declared within a local inner scope has the exact same name as a variable in an outer scope.\"",
    "options": [
      "Name Collision",
      "Shadowing",
      "Scope Creep",
      "Memory Leak"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"same name as in an outer scope\": sombreado.\n• Significado: Shadowing = una variable local oculta a otra con el mismo nombre.\n• Descartas: Name collision, scope creep y memory leak son otras cosas.",
    "why_wrong": [
      "Incorrecto: Name Collision es choque entre módulos.",
      "Opción correcta: Shadowing = sombra de variable.",
      "Incorrecto: Scope Creep es crecimiento del alcance.",
      "Incorrecto: Memory Leak es fuga de memoria."
    ],
    "tip_es": "Concepto clave de Clean Code: [Variable Shadowing] = variable interna que oculta a la externa.",
    "ref": null,
    "human_rule": "shadowing = nombre repetido en ámbito interno.",
    "trigger_anchor": "same name inner scope ➔ shadowing",
    "spanglish_trap": "Confundir con name collision.",
    "workplace_usage": {
      "scenario": "Auditoría de Linter",
      "en": "Avoid variable shadowing because it makes tracking data flow error-prone.",
      "es": "Evita el ensombrecimiento de variables porque hace propenso a errores el seguimiento del flujo de datos."
    }
  },
  {
    "id": "it1-mod3-sec3-ex1-q7",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical term for: \"A function or data type that is already built into and provided natively by the programming language runtime.\"",
    "options": [
      "Lambda",
      "Snippet",
      "Built-in function",
      "Custom function"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"built into the language runtime\": integrada.\n• Significado: Built-in function = función incorporada.\n• Descartas: Lambda, Snippet y Custom function no vienen con el lenguaje.",
    "why_wrong": [
      "Incorrecto: Lambda es anónima.",
      "Incorrecto: Snippet es un fragmento.",
      "Opción correcta: Built-in = ya incluida.",
      "Incorrecto: Custom la escribe el usuario."
    ],
    "tip_es": "Elementos nativos del lenguaje: [Built-in function] = already defined in the programming language.",
    "ref": null,
    "human_rule": "built-in = viene incluida.",
    "trigger_anchor": "natively provided ➔ built-in",
    "spanglish_trap": "Traducir como \"construido en\".",
    "workplace_usage": {
      "scenario": "Convenciones de Código",
      "en": "Never name your variables after built-in functions like list or id.",
      "es": "Nunca nombres tus variables con nombres de funciones integradas como list o id."
    }
  },
  {
    "id": "it1-mod3-sec3-ex1-q8",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the industry term for: \"An undesirable, inefficient, or anti-pattern method of operating that frequently introduces defects.\"",
    "options": [
      "Anti-pattern",
      "Bug",
      "Legacy code",
      "Bad practice"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"undesirable, inefficient method that frequently introduces defects\": mala práctica.\n• Significado: Bad practice = práctica indeseable que suele causar fallos.\n• Descartas: Anti-pattern es un término más específico de diseño; Bug es un fallo concreto; Legacy code es código heredado.",
    "why_wrong": [
      "Incorrecto: Anti-pattern es un patrón de diseño erróneo, más específico.",
      "Incorrecto: Bug es un fallo concreto, no un método.",
      "Incorrecto: Legacy code es código heredado.",
      "Opción correcta: Bad practice = mala práctica."
    ],
    "tip_es": "Término oficial Cisco: [Bad practice] = undesirable or negative method of operation.",
    "ref": null,
    "human_rule": "bad practice = forma de trabajar que genera defectos.",
    "trigger_anchor": "undesirable method ➔ bad practice",
    "spanglish_trap": "Elegir anti-pattern por sonar técnico.",
    "workplace_usage": {
      "scenario": "Pautas de Ingeniería",
      "en": "Hardcoding database passwords in source code is an unacceptable bad practice.",
      "es": "Escribir contraseñas de bases de datos directamente en el código fuente es una mala práctica inaceptable."
    }
  },
  {
    "id": "it1-mod3-sec3-ex2-q1",
    "section": "UE",
    "objective": "L1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on the listening dialogue between the two developers, which statement is most accurate?",
    "options": [
      "The woman is an experienced senior developer mentoring the junior developer.",
      "The man is auditing the company’s financial records.",
      "The woman wants to discard Python in favor of raw assembly.",
      "Both engineers are configuring physical Ethernet patch panels."
    ],
    "answer": 0,
    "why_correct": "• Pista: Qué afirmación sobre el diálogo es más exacta.\n• Significado: La mujer es una desarrolladora senior que da consejos.\n• Descartas: No se habla de auditar finanzas, descartar Python ni cableado.",
    "why_wrong": [
      "Opción correcta: The woman is an experienced senior developer mentoring the junior developer.",
      "Incorrecto: \"The man is auditing the company’s financial records.\" no es lo que dice el audio.",
      "Incorrecto: \"The woman wants to discard Python in favor of raw assembly.\" no es lo que dice el audio.",
      "Incorrecto: \"Both engineers are configuring physical Ethernet patch panels.\" no es lo que dice el audio."
    ],
    "tip_es": "Roles en el diálogo: Desarrolladora senior mentorizando a un desarrollador junior sobre buenas prácticas.",
    "ref": null,
    "human_rule": "mentor = experiencia.",
    "trigger_anchor": "dialogue ➔ senior woman",
    "spanglish_trap": "Inventar contexto.",
    "workplace_usage": {
      "scenario": "Code Review y Mentoría",
      "en": "The senior engineer explained the benefits of defining functions explicitly.",
      "es": "La ingeniera senior explicó los beneficios de definir funciones explícitamente."
    }
  },
  {
    "id": "it1-mod3-sec3-ex2-q2",
    "section": "UE",
    "objective": "L2",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What is the biggest technical problem identified in the man’s code snippet?",
    "options": [
      "It fails to compile to a binary executable.",
      "It uses a local variable outside its scope.",
      "It sends plaintext passwords over unencrypted HTTP.",
      "It attempts an asynchronous call inside an interrupt handler."
    ],
    "answer": 1,
    "why_correct": "• Pista: El mayor problema del fragmento de código.\n• Significado: Usa una variable local fuera de su ámbito (scope).\n• Descartas: No es compilación, contraseñas ni llamada asíncrona.",
    "why_wrong": [
      "Incorrecto: \"It fails to compile to a binary executable.\" no es lo que dice el audio.",
      "Opción correcta: It uses a local variable outside its scope.",
      "Incorrecto: \"It sends plaintext passwords over unencrypted HTTP.\" no es lo que dice el audio.",
      "Incorrecto: \"It attempts an asynchronous call inside an interrupt handler.\" no es lo que dice el audio."
    ],
    "tip_es": "Falla técnica del ejercicio: [Uses a local variable outside its scope].",
    "ref": null,
    "human_rule": "scope = dónde vive una variable.",
    "trigger_anchor": "biggest problem ➔ outside scope",
    "spanglish_trap": "Culpar a seguridad.",
    "workplace_usage": {
      "scenario": "Depuración de Ámbitos (Scoping)",
      "en": "The script crashed because it used a local variable outside its scope.",
      "es": "El script falló porque utilizó una variable local fuera de su alcance."
    }
  },
  {
    "id": "it1-mod3-sec3-ex2-q3",
    "section": "UE",
    "objective": "L3",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the dialogue, why is using a standard `def` statement beneficial compared to an anonymous lambda?",
    "options": [
      "It compiles directly to native x86 machine instructions.",
      "It eliminates garbage collection overhead completely.",
      "It's more useful for tracebacks and string inspection.",
      "It bypasses operating system security rings."
    ],
    "answer": 2,
    "why_correct": "• Pista: Por qué es mejor def que lambda.\n• Significado: Es más útil para tracebacks y para inspeccionar cadenas.\n• Descartas: No compila a nativo ni quita el garbage collection ni salta seguridad.",
    "why_wrong": [
      "Incorrecto: \"It compiles directly to native x86 machine instructions.\" no es lo que dice el audio.",
      "Incorrecto: \"It eliminates garbage collection overhead completely.\" no es lo que dice el audio.",
      "Opción correcta: It's more useful for tracebacks and string inspection.",
      "Incorrecto: \"It bypasses operating system security rings.\" no es lo que dice el audio."
    ],
    "tip_es": "Ventaja de `def`: Nombre identificable en los tracebacks y logs de excepciones.",
    "ref": null,
    "human_rule": "def = nombre = mejor diagnóstico.",
    "trigger_anchor": "def vs lambda ➔ tracebacks",
    "spanglish_trap": "Creer que def es más rápido.",
    "workplace_usage": {
      "scenario": "Buenas Prácticas en Python",
      "en": "Using def statements gives descriptive function names in error tracebacks.",
      "es": "Usar sentencias def proporciona nombres descriptivos en las trazas de error."
    }
  },
  {
    "id": "it1-mod3-sec3-ex2-q4",
    "section": "UE",
    "objective": "L4",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Why does the senior developer emphasize that variable shadowing should be avoided?",
    "options": [
      "It prevents the interpreter from launching.",
      "It violates international software patents.",
      "It permanently damages physical solid-state drives.",
      "Typically, it can provoke errors."
    ],
    "answer": 3,
    "why_correct": "• Pista: Por qué evitar el shadowing.\n• Significado: Típicamente puede provocar errores.\n• Descartas: No impide arrancar el intérprete, no viola patentes y no daña SSD.",
    "why_wrong": [
      "Incorrecto: \"It prevents the interpreter from launching.\" no es lo que dice el audio.",
      "Incorrecto: \"It violates international software patents.\" no es lo que dice el audio.",
      "Incorrecto: \"It permanently damages physical solid-state drives.\" no es lo que dice el audio.",
      "Opción correcta: Typically, it can provoke errors."
    ],
    "tip_es": "Razón para evitar shadowing: Oculta variables de manera imprevista y provoca bugs (\"provokes errors\").",
    "ref": null,
    "human_rule": "shadowing = confusión = errores.",
    "trigger_anchor": "avoid shadowing ➔ errors",
    "spanglish_trap": "Exagerar las consecuencias.",
    "workplace_usage": {
      "scenario": "Revisión de Estándares de Código",
      "en": "Avoid shadowing global variables because it provokes subtle errors.",
      "es": "Evita ensombrecer variables globales porque provoca errores sutiles."
    }
  },
  {
    "id": "it1-mod3-sec4-ex1-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid modal option(s) of reasonable expectation: \"We __________ be able to maintain coding standards with the new linter rules.\"",
    "options": [
      "should / ought to",
      "must have",
      "might to",
      "could have been"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una expectativa razonable (\"deberíamos poder\").\n• Regla: expectativa ➔ should / ought to + verbo.\n• Descartas: \"must have\" y \"could have been\" hablan del pasado; \"might to\" no existe.",
    "why_wrong": [
      "Opción correcta: \"should / ought to be able to\" = \"deberíamos poder\".",
      "Incorrecto: \"must have\" es del pasado.",
      "Incorrecto: \"might to\" no existe.",
      "Incorrecto: \"could have been\" es del pasado."
    ],
    "tip_es": "Expectativa razonable presente: \"should\" y \"ought to\" son plenamente intercambiables.",
    "ref": null,
    "human_rule": "Expectativa ➔ should / ought to + verbo.",
    "trigger_anchor": "We ______ be able to maintain… (deberíamos) ➔ should / ought to",
    "spanglish_trap": "Poner have después del modal cuando habla del futuro. Have + 3.ª forma es para el pasado.",
    "workplace_usage": {
      "scenario": "Adopción de Linter y CI",
      "en": "We should be able to maintain coding standards with the new linter rules.",
      "es": "Deberíamos poder mantener los estándares de código con las nuevas reglas del linter."
    }
  },
  {
    "id": "it1-mod3-sec4-ex1-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid modal option(s) for a neglected obligation: \"The incident __________ have been reported. The rules are in place for a reason.\"",
    "options": [
      "must to",
      "should / ought to",
      "can have",
      "might to"
    ],
    "answer": 1,
    "why_correct": "• Pista: era una obligación que no se cumplió (\"debió haberse reportado\").\n• Regla: reproche ➔ should / ought to + have + 3.ª forma.\n• Descartas: \"must to\" y \"might to\" no existen; \"can have\" no expresa obligación.",
    "why_wrong": [
      "Incorrecto: después de must no va \"to\".",
      "Opción correcta: \"should / ought to have been reported\" = \"debió haberse reportado\".",
      "Incorrecto: \"can have\" no expresa obligación.",
      "Incorrecto: \"might to\" no existe."
    ],
    "tip_es": "Deber u obligación incumplida en el pasado: [should have / ought to have + participio].",
    "ref": null,
    "human_rule": "Reproche por algo no hecho ➔ should / ought to + have + 3.ª forma.",
    "trigger_anchor": "The incident ______ have been reported (debió) ➔ should / ought to",
    "spanglish_trap": "Poner \"to\" después de must o might. Solo ought lo lleva.",
    "workplace_usage": {
      "scenario": "Auditoría tras Brecha de Seguridad",
      "en": "The incident ought to have been reported immediately.",
      "es": "El incidente debería haberse informado inmediatamente."
    }
  },
  {
    "id": "it1-mod3-sec4-ex1-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid modal option(s): \"There __________ be an easier way of solving the problem. This code is unnecessarily convoluted.\"",
    "options": [
      "have to be to",
      "can to be",
      "should / ought to / must",
      "might have been to"
    ],
    "answer": 2,
    "why_correct": "• Pista: es una deducción o expectativa (\"tiene que haber una forma más fácil\").\n• Regla: \"tiene que haber\" ➔ should / ought to / must + be.\n• Descartas: las otras mezclan to y have de formas que no existen.",
    "why_wrong": [
      "Incorrecto: \"have to be to\" no existe.",
      "Incorrecto: \"can to be\" no existe.",
      "Opción correcta: \"should / ought to / must be\" = \"tiene que haber\".",
      "Incorrecto: \"might have been to\" no existe."
    ],
    "tip_es": "Deducción y expectativa sobre solución más sencilla: \"should\", \"ought to\" y \"must\" son opciones válidas.",
    "ref": null,
    "human_rule": "\"Tiene que haber…\" ➔ should / ought to / must + be.",
    "trigger_anchor": "There ______ be an easier way (tiene que haber) ➔ should / ought to / must",
    "spanglish_trap": "Poner \"to\" después de can o might. Solo ought lo lleva.",
    "workplace_usage": {
      "scenario": "Refactorización de Algoritmo Complejo",
      "en": "There must be an easier way of solving the problem.",
      "es": "Debe haber una forma más fácil de resolver el problema."
    }
  },
  {
    "id": "it1-mod3-sec4-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid modal option(s) for a critical technical rule: \"Regular backups __________ be done in order to avoid data loss.\"",
    "options": [
      "would better",
      "could to",
      "might to have",
      "should / ought to / must"
    ],
    "answer": 3,
    "why_correct": "• Pista: es una regla técnica importante.\n• Regla: obligación ➔ should / ought to / must + be + 3.ª forma.\n• Descartas: \"would better\", \"could to\" y \"might to have\" no existen.",
    "why_wrong": [
      "Incorrecto: \"would better\" no existe.",
      "Incorrecto: \"could to\" no existe.",
      "Incorrecto: \"might to have\" no existe.",
      "Opción correcta: \"should / ought to / must be done\" = \"deben hacerse\"."
    ],
    "tip_es": "Política de seguridad obligatoria o recomendada: \"should\", \"ought to\" y \"must\" son válidos.",
    "ref": null,
    "human_rule": "Regla técnica ➔ should / ought to / must + be + 3.ª forma.",
    "trigger_anchor": "Backups ______ be done to avoid data loss (obligación) ➔ should / ought to / must",
    "spanglish_trap": "Inventar combinaciones (\"could to\", \"would better\"). Solo ought lleva to; had better no lleva to.",
    "workplace_usage": {
      "scenario": "Plan de Continuidad de Negocio (BCP)",
      "en": "Regular backups must be done in order to avoid data loss.",
      "es": "Se deben / deberían realizar copias de seguridad periódicas para evitar la pérdida de datos."
    }
  },
  {
    "id": "it1-mod3-sec4-ex1-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence acknowledging a mistake: \"We __________ have paid more attention to the deadline. This rush caused multiple regressions.\"",
    "options": [
      "should",
      "ought",
      "must",
      "can"
    ],
    "answer": 0,
    "why_correct": "• Pista: lamentan algo del pasado (\"This rush caused multiple regressions\").\n• Regla: reproche ➔ should have + 3.ª forma.\n• Descartas: ought necesita to; \"must have\" es una deducción; \"can have\" no sirve.",
    "why_wrong": [
      "Opción correcta: \"should have paid\" = \"debimos prestar\".",
      "Incorrecto: ought necesita \"to\" (ought to have paid).",
      "Incorrecto: \"must have\" sería una deducción, no un reproche.",
      "Incorrecto: \"can have\" no expresa reproche."
    ],
    "tip_es": "¡Cuidado con la preposición!: [should have...] vs. [ought TO have...].",
    "ref": null,
    "human_rule": "Reproche por algo ya hecho ➔ should have + 3.ª forma.",
    "trigger_anchor": "We ______ have paid more attention (lamentan) ➔ should",
    "spanglish_trap": "Elegir ought sin to. Ought siempre necesita to.",
    "workplace_usage": {
      "scenario": "Postmortem de Sprint Fallido",
      "en": "We should have paid more attention to the deadline.",
      "es": "Deberíamos haber prestado más atención a la fecha límite."
    }
  },
  {
    "id": "it1-mod3-sec4-ex1-q6",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the two-word modal form: \"The seriousness of this issue really __________ have been given priority.\"",
    "options": [
      "should to",
      "ought to",
      "must to",
      "could to"
    ],
    "answer": 1,
    "why_correct": "• Pista: lamentan algo que no se hizo (\"debió haberse priorizado\").\n• Regla: ought TO have + 3.ª forma.\n• Descartas: \"should to\", \"must to\" y \"could to\" no existen.",
    "why_wrong": [
      "Incorrecto: después de should no va \"to\".",
      "Opción correcta: \"ought to have been given\" = \"debió haberse dado\".",
      "Incorrecto: después de must no va \"to\".",
      "Incorrecto: después de could no va \"to\"."
    ],
    "tip_es": "El único modal central que lleva partícula \"to\" incorporada es [ought to].",
    "ref": null,
    "human_rule": "Reproche con la forma de dos palabras ➔ ought to have + 3.ª forma.",
    "trigger_anchor": "really ______ have been given priority (forma de dos palabras) ➔ ought to",
    "spanglish_trap": "Poner \"to\" después de should, must o could. Solo ought lo lleva.",
    "workplace_usage": {
      "scenario": "Escalación de Vulnerabilidad Crítica",
      "en": "The seriousness of this issue really ought to have been given priority.",
      "es": "A la gravedad de este problema realmente se le debería haber dado prioridad."
    }
  },
  {
    "id": "it1-mod3-sec4-ex2-q1",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform into a question with \"ought\": \"We reported the incident as soon as it occurred.\" -> \"__________ the incident as soon as it occurred?\"",
    "options": [
      "Ought we to have reported",
      "Ought we reported",
      "Should we to have reported",
      "Ought we have reported"
    ],
    "answer": 0,
    "why_correct": "• Pista: preguntan si se debió haber reportado algo que pasó.\n• Regla: Ought we TO HAVE + 3.ª forma.\n• Descartas: faltan have o to en las otras.",
    "why_wrong": [
      "Opción correcta: \"Ought we to have reported\" = \"¿debimos haber reportado?\".",
      "Incorrecto: falta \"to have\".",
      "Incorrecto: \"Should we to\" lleva to de más.",
      "Incorrecto: falta \"to\" después de we."
    ],
    "tip_es": "Interrogativa con ought: [Ought + sujeto + TO HAVE + participio?].",
    "ref": null,
    "human_rule": "¿Debimos haberlo hecho? ➔ Ought we to have + 3.ª forma?",
    "trigger_anchor": "______ the incident as soon as it occurred? ➔ Ought we to have reported",
    "spanglish_trap": "Olvidar \"to have\". Con ought, siempre to have + 3.ª forma para el pasado.",
    "workplace_usage": {
      "scenario": "Revisión de Cumplimiento Legal",
      "en": "Ought we to have reported the incident as soon as it occurred?",
      "es": "¿Deberíamos haber informado del incidente tan pronto como ocurrió?"
    }
  },
  {
    "id": "it1-mod3-sec4-ex2-q2",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform into a question with \"ought\": \"Due to its seriousness, we gave this issue priority.\" -> \"Due to its seriousness, __________ priority?\"",
    "options": [
      "ought we gave this issue",
      "ought we to have given this issue",
      "should we to have given",
      "ought we to give"
    ],
    "answer": 1,
    "why_correct": "• Pista: preguntan si se debió dar prioridad a algo que ya pasó.\n• Regla: ought we to have + 3.ª forma.\n• Descartas: \"gave\" no va después de ought; \"to give\" habla del futuro.",
    "why_wrong": [
      "Incorrecto: después de ought va \"to\" + verbo, no \"gave\".",
      "Opción correcta: \"ought we to have given this issue\" = \"¿debimos haber dado?\".",
      "Incorrecto: \"should we to\" lleva to de más.",
      "Incorrecto: \"to give\" habla del futuro."
    ],
    "tip_es": "Pregunta retrospectiva: [ought we to have given...?].",
    "ref": null,
    "human_rule": "¿Debimos haberlo hecho? ➔ ought we to have + 3.ª forma.",
    "trigger_anchor": "Due to its seriousness, ______ priority? ➔ ought we to have given",
    "spanglish_trap": "Poner el verbo en pasado simple (\"gave\"). Con ought va to have + 3.ª forma.",
    "workplace_usage": {
      "scenario": "Postmortem de Triaje de Bugs",
      "en": "Due to its seriousness, ought we to have given this issue priority?",
      "es": "Debido a su gravedad, ¿deberíamos haberle dado prioridad a este asunto?"
    }
  },
  {
    "id": "it1-mod3-sec4-ex2-q3",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform into a question with \"ought\": \"We have done regular backups in order to avoid data loss.\" -> \"__________ regular backups in order to avoid data loss?\"",
    "options": [
      "Ought we done",
      "Should we to have done",
      "Ought we to have done",
      "Ought to we have done"
    ],
    "answer": 2,
    "why_correct": "• Pista: preguntan si debieron haber hecho copias de seguridad.\n• Regla: Ought we TO HAVE + 3.ª forma.\n• Descartas: falta to have; \"Should we to\" lleva to de más; \"Ought to we\" tiene el orden roto.",
    "why_wrong": [
      "Incorrecto: falta \"to have\".",
      "Incorrecto: \"Should we to\" lleva to de más.",
      "Opción correcta: \"Ought we to have done\" = \"¿debimos haber hecho?\".",
      "Incorrecto: \"Ought to we\" tiene el orden roto."
    ],
    "tip_es": "El sujeto se coloca entre \"ought\" y \"to\": [Ought WE to have done].",
    "ref": null,
    "human_rule": "Ought + sujeto + to have + 3.ª forma.",
    "trigger_anchor": "______ regular backups…? ➔ Ought we to have done",
    "spanglish_trap": "Poner el sujeto después de \"to\". Es Ought WE to have.",
    "workplace_usage": {
      "scenario": "Auditoría de Respaldo",
      "en": "Ought we to have done regular backups in order to avoid data loss?",
      "es": "¿Deberíamos haber hecho copias de seguridad periódicas para evitar la pérdida de datos?"
    }
  },
  {
    "id": "it1-mod3-sec4-ex2-q4",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform: \"We enabled client hardware address checks to avert the spoofing.\" -> \"__________ client hardware address checks to avert the spoofing?\"",
    "options": [
      "Ought we enabled",
      "Should we to have enabled",
      "Ought we have enable",
      "Ought we to have enabled"
    ],
    "answer": 3,
    "why_correct": "• Pista: preguntan si debieron haber activado algo.\n• Regla: Ought we TO HAVE + 3.ª forma (enabled).\n• Descartas: falta \"to have\" en A; \"Should we to\" lleva to de más; \"have enable\" no tiene la 3.ª forma.",
    "why_wrong": [
      "Incorrecto: falta \"to have\".",
      "Incorrecto: \"Should we to\" lleva to de más.",
      "Incorrecto: \"have enable\" necesita la 3.ª forma (enabled) y \"to\".",
      "Opción correcta: \"Ought we to have enabled\" = \"¿debimos haber activado?\"."
    ],
    "tip_es": "Fórmula interrogativa: [Ought + sujeto + TO HAVE + participio].",
    "ref": null,
    "human_rule": "Ought + sujeto + to have + 3.ª forma.",
    "trigger_anchor": "______ client hardware address checks…? ➔ Ought we to have enabled",
    "spanglish_trap": "Dejar el verbo base después de have. Es have + 3.ª forma (enabled).",
    "workplace_usage": {
      "scenario": "Configuración Anti-Spoofing en Switches",
      "en": "Ought we to have enabled client hardware address checks to avert the spoofing?",
      "es": "¿Deberíamos haber habilitado las comprobaciones de dirección de hardware del cliente para evitar la suplantación?"
    }
  },
  {
    "id": "it1-mod3-sec4-ex2-q5",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform the present state sentence: \"We have a VLAN-based configuration in our network.\" -> \"__________ a VLAN-based configuration in our network?\"",
    "options": [
      "Ought we to have",
      "Ought we to had",
      "Ought we have had",
      "Should we to have"
    ],
    "answer": 0,
    "why_correct": "• Pista: es presente: \"¿deberíamos tener…?\".\n• Regla: Ought we TO + have (verbo base).\n• Descartas: \"to had\" y \"have had\" cambian el tiempo; \"Should we to\" lleva to de más.",
    "why_wrong": [
      "Opción correcta: \"Ought we to have\" = \"¿deberíamos tener?\".",
      "Incorrecto: después de to va el verbo base (have), no had.",
      "Incorrecto: \"Ought we have had\" falta to y habla del pasado.",
      "Incorrecto: \"Should we to\" lleva to de más."
    ],
    "tip_es": "Pregunta en presente con ought: [Ought we to have a VLAN configuration?].",
    "ref": null,
    "human_rule": "¿Deberíamos tener…? (presente) ➔ Ought we to have…",
    "trigger_anchor": "We have a VLAN-based configuration ➔ ______ a VLAN…? (presente) ➔ Ought we to have",
    "spanglish_trap": "Pasar todo al pasado. Si la frase original está en presente, la pregunta también.",
    "workplace_usage": {
      "scenario": "Diseño de Topología de Red",
      "en": "Ought we to have a VLAN-based configuration in our network?",
      "es": "¿Deberíamos tener una configuración basada en VLAN en nuestra red?"
    }
  },
  {
    "id": "it1-mod3-sec4-ex2-q6",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform the passive sentence: \"This comprehensive procedure has already been introduced.\" -> \"__________ already been introduced?\"",
    "options": [
      "Ought this procedure has",
      "Ought this comprehensive procedure to have",
      "Should this procedure to have",
      "Ought to this procedure have"
    ],
    "answer": 1,
    "why_correct": "• Pista: es pasiva (\"has been introduced\") y el sujeto va entre ought y to.\n• Regla: Ought + sujeto + to have (been introduced).\n• Descartas: A conjuga mal (\"has\"); C lleva to de más tras should; D pone to en el lugar equivocado.",
    "why_wrong": [
      "Incorrecto: después de ought va \"to have\", no \"has\".",
      "Opción correcta: \"Ought this comprehensive procedure to have already been introduced?\" = \"¿debería ya haberse introducido?\".",
      "Incorrecto: \"Should this procedure to have\" lleva to de más.",
      "Incorrecto: \"Ought to this procedure\" tiene el orden roto."
    ],
    "tip_es": "Sujeto complejo intercalado: [Ought + [sujeto completo] + TO HAVE + participio?].",
    "ref": null,
    "human_rule": "Ought + sujeto + to have + been + 3.ª forma.",
    "trigger_anchor": "______ already been introduced? ➔ Ought this procedure to have",
    "spanglish_trap": "Mantener \"has\" de la frase original. En la pregunta con ought, va \"to have\".",
    "workplace_usage": {
      "scenario": "Cumplimiento de Procedimientos de TI",
      "en": "Ought this comprehensive procedure to have already been introduced?",
      "es": "¿Debería haberse introducido ya este procedimiento integral?"
    }
  },
  {
    "id": "it1-mod3-sec5-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the definition for: \"A language that enables development of a program in a user-friendly programming context with strong abstraction from hardware details.\"",
    "options": [
      "High-level programming language",
      "Assembly language",
      "Binary code",
      "Object code"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"strong abstraction from hardware\": no depende del hardware, es amigable.\n• Significado: High-level language = lenguaje de alto nivel, legible y lejos del hardware.\n• Descartas: Assembly está cerca del hardware; binary code son 0 y 1; object code lo genera el compilador.",
    "why_wrong": [
      "Opción correcta: High-level language = alto nivel, abstrae el hardware.",
      "Incorrecto: Assembly está muy cerca del hardware.",
      "Incorrecto: Binary code es solo 0 y 1.",
      "Incorrecto: Object code es la salida del compilador."
    ],
    "tip_es": "Concepto clave: [High-level programming] = user-friendly context, strong abstraction.",
    "ref": null,
    "human_rule": "high-level = fácil de leer, lejos del hardware.",
    "trigger_anchor": "abstraction from hardware ➔ high-level",
    "spanglish_trap": "Traducir high-level como \"de nivel alto en rendimiento\". Es nivel de abstracción.",
    "workplace_usage": {
      "scenario": "Fundamentos de Desarrollo",
      "en": "Python and Java are examples of high-level programming languages.",
      "es": "Python y Java son ejemplos de lenguajes de programación de alto nivel."
    }
  },
  {
    "id": "it1-mod3-sec5-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the definition for: \"A system using the digits 0 and 1 to represent instructions directly understandable by electronic CPU logic.\"",
    "options": [
      "Source code",
      "Binary code",
      "Bytecode",
      "Script"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"digits 0 and 1\": solo dos dígitos.\n• Significado: Binary code = código binario, lo que entiende directamente el CPU.\n• Descartas: Source code es el que escribe el humano; bytecode es intermedio; script es un programa interpretado.",
    "why_wrong": [
      "Incorrecto: Source code es el original en texto.",
      "Opción correcta: Binary code = ceros y unos que entiende el CPU.",
      "Incorrecto: Bytecode es intermedio, no es 0 y 1 puros.",
      "Incorrecto: Script es un programa que se interpreta."
    ],
    "tip_es": "Base de computación: [Binary code] = system using the digits 0 and 1.",
    "ref": null,
    "human_rule": "binary code = 0 y 1 que lee el CPU.",
    "trigger_anchor": "digits 0 and 1 ➔ binary code",
    "spanglish_trap": "Confundir bytecode con binary code. El bytecode necesita una VM.",
    "workplace_usage": {
      "scenario": "Arquitectura de Computadores",
      "en": "The CPU directly executes instructions formatted in binary code.",
      "es": "La CPU ejecuta directamente instrucciones formateadas en código binario."
    }
  },
  {
    "id": "it1-mod3-sec5-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the definition for: \"The product of a compiler; a sequence of machine code or bytecode produced from source code.\"",
    "options": [
      "Source code",
      "Raw text",
      "Object code",
      "Linter config"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"The product of a compiler\": lo que sale del compilador.\n• Significado: Object code = código objeto, resultado de compilar el código fuente.\n• Descartas: Source code es la entrada; raw text es texto simple; linter config es configuración de reglas.",
    "why_wrong": [
      "Incorrecto: Source code es la entrada del compilador, no la salida.",
      "Incorrecto: Raw text no es producto de un compilador.",
      "Opción correcta: Object code = salida del compilador.",
      "Incorrecto: Linter config son reglas de estilo, no código compilado."
    ],
    "tip_es": "Pipeline de compilación: [Source code -> Compiler -> Object code -> Linker -> Executable].",
    "ref": null,
    "human_rule": "compilador: source code entra ➔ object code sale.",
    "trigger_anchor": "product of a compiler ➔ object code",
    "spanglish_trap": "Traducir \"object\" como objeto de programación. Aquí es el resultado compilado.",
    "workplace_usage": {
      "scenario": "Compilación C/C++",
      "en": "The compiler outputs object code files with a .o or .obj extension.",
      "es": "El compilador genera archivos de código objeto con extensión .o o .obj."
    }
  },
  {
    "id": "it1-mod3-sec5-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the security verb for: \"To interfere with or alter software, hardware, or data without authorization in order to cause damage or gain illicit access.\"",
    "options": [
      "Replicate",
      "Compile",
      "Parse",
      "Tamper"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"interfere or alter without authorization\": manipular.\n• Significado: Tamper = alterar o manipular sin permiso.\n• Descartas: Replicate copia; Compile traduce código; Parse analiza texto.",
    "why_wrong": [
      "Incorrecto: Replicate = replicar.",
      "Incorrecto: Compile = compilar.",
      "Incorrecto: Parse = analizar la sintaxis.",
      "Opción correcta: Tamper = manipular sin permiso."
    ],
    "tip_es": "Término oficial InfoSec: [Tamper] = interfere with something in order to cause damage.",
    "ref": null,
    "human_rule": "tamper = alterar sin autorización.",
    "trigger_anchor": "alter without permission ➔ tamper",
    "spanglish_trap": "Pensar que tamper es un tipo de software.",
    "workplace_usage": {
      "scenario": "Integridad de Software y Firma Digital",
      "en": "Cryptographic signatures ensure that attackers cannot tamper with the binary.",
      "es": "Las firmas criptográficas garantizan que los atacantes no puedan manipular el binario."
    }
  },
  {
    "id": "it1-mod3-sec5-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the programming language described: \"A dynamic, open-source programming language with a focus on simplicity and productivity, commonly associated with the Rails framework.\"",
    "options": [
      "Ruby",
      "C++",
      "Fortran",
      "Assembly"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Rails framework\": la pista clave.\n• Significado: Ruby es un lenguaje dinámico y de código abierto, famoso por Ruby on Rails.\n• Descartas: C++ y Fortran no usan Rails; Assembly es de bajo nivel.",
    "why_wrong": [
      "Opción correcta: Ruby = lenguaje asociado con Rails.",
      "Incorrecto: C++ es de bajo nivel, sin Rails.",
      "Incorrecto: Fortran se usa en cálculo científico.",
      "Incorrecto: Assembly es de bajo nivel."
    ],
    "tip_es": "Glosario oficial Cisco: [Ruby] = dynamic, open source programming language.",
    "ref": null,
    "human_rule": "Rails ➔ Ruby.",
    "trigger_anchor": "Rails ➔ Ruby",
    "spanglish_trap": "Pensar que \"rails\" son rieles o redes. Es el framework de Ruby.",
    "workplace_usage": {
      "scenario": "Desarrollo Web Backend",
      "en": "Ruby is known for readable syntax and rapid web development.",
      "es": "Ruby es conocido por su sintaxis legible y su rápido desarrollo web."
    }
  },
  {
    "id": "it1-mod3-sec5-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the programming language described: \"An interpreted, high-level, general-purpose language with dynamic semantics, extensive libraries, and prominent use in AI/DevOps.\"",
    "options": [
      "C",
      "Python",
      "Rust",
      "Go"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"interpreted, dynamic, AI/DevOps\": las pistas.\n• Significado: Python es interpretado, de alto nivel, con muchas librerías y usado en IA y DevOps.\n• Descartas: C, Rust y Go son compilados.",
    "why_wrong": [
      "Incorrecto: C es compilado y de bajo nivel.",
      "Opción correcta: Python = interpretado, dinámico, usado en IA y DevOps.",
      "Incorrecto: Rust es compilado.",
      "Incorrecto: Go es compilado."
    ],
    "tip_es": "Definición oficial Cisco: [Python] = interpreted high-level general-purpose language.",
    "ref": null,
    "human_rule": "interpreted + AI/DevOps ➔ Python.",
    "trigger_anchor": "interpreted + dynamic ➔ Python",
    "spanglish_trap": "Pensar que todo lenguaje moderno es interpretado. Rust y Go se compilan.",
    "workplace_usage": {
      "scenario": "Automatización y Machine Learning",
      "en": "Python is heavily used for infrastructure automation scripts.",
      "es": "Python se utiliza ampliamente para scripts de automatización de infraestructura."
    }
  },
  {
    "id": "it1-mod3-sec5-ex1-q7",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the idiom meaning: \"Whatever happens, whichever option is selected, anyway, regardless of conditions.\"",
    "options": [
      "At all costs",
      "On a roll",
      "No matter the case",
      "In the long run"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"whichever option is selected, regardless\": sin importar.\n• Significado: No matter the case = sin importar el caso.\n• Descartas: At all costs, On a roll e In the long run tienen otro sentido.",
    "why_wrong": [
      "Incorrecto: At all costs = a toda costa.",
      "Incorrecto: On a roll = en racha.",
      "Opción correcta: No matter the case = sin importar.",
      "Incorrecto: In the long run = a largo plazo."
    ],
    "tip_es": "Expresión idiomática: [No matter the case] = de cualquier modo / sea como sea.",
    "ref": null,
    "human_rule": "no matter = sin importar.",
    "trigger_anchor": "regardless ➔ no matter",
    "spanglish_trap": "Confundir con at all costs.",
    "workplace_usage": {
      "scenario": "Políticas de Respaldo",
      "en": "No matter the case, critical data must be encrypted at rest.",
      "es": "Sea cual sea el caso, los datos críticos deben cifrarse en reposo."
    }
  },
  {
    "id": "it1-mod3-sec5-ex1-q8",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the idiom meaning: \"A situation in which you can enjoy the advantages of two very different things at the same time.\"",
    "options": [
      "Bite the bullet",
      "Touch base",
      "Go the extra mile",
      "Get the best of both worlds"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"advantages of two very different things\": lo mejor de ambos.\n• Significado: Get the best of both worlds = disfrutar lo mejor de dos opciones.\n• Descartas: Bite the bullet, Touch base y Go the extra mile son otros.",
    "why_wrong": [
      "Incorrecto: Bite the bullet = aguantar.",
      "Incorrecto: Touch base = ponerse en contacto.",
      "Incorrecto: Go the extra mile = esforzarse más.",
      "Opción correcta: Best of both worlds."
    ],
    "tip_es": "Idiom oficial de arquitectura híbrida: [Get the best of both worlds] (tener lo mejor de ambos mundos).",
    "ref": null,
    "human_rule": "best of both worlds = ventajas de ambos.",
    "trigger_anchor": "two advantages ➔ best of both worlds",
    "spanglish_trap": "Traducir world como \"mundo\".",
    "workplace_usage": {
      "scenario": "Runtimes Híbridos (JIT)",
      "en": "Using JIT compilation allows engineers to get the best of both worlds: portability and raw speed.",
      "es": "El uso de la compilación JIT permite a los ingenieros tener lo mejor de ambos mundos: portabilidad y velocidad bruta."
    }
  },
  {
    "id": "it1-mod3-sec5-ex2-q1",
    "section": "UE",
    "objective": "R1",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to technical principles of computing, why must high-level source code be translated before execution?",
    "options": [
      "Because processors cannot directly comprehend high-level text; they only execute binary machine code.",
      "Because linters refuse to permit uncompiled files on production servers.",
      "Because uncompiled code violates international copyright laws.",
      "Because interpreters must encrypt source code with SSL certificates first."
    ],
    "answer": 0,
    "why_correct": "• Pista: \"must be translated before execution\": el procesador solo entiende binario.\n• Significado: Los procesadores solo ejecutan código máquina; el código de alto nivel hay que traducirlo.\n• Descartas: Linters, copyright y SSL no tienen que ver con la traducción.",
    "why_wrong": [
      "Opción correcta: El procesador solo entiende binario, hay que traducir.",
      "Incorrecto: Los linters no bloquean archivos sin compilar.",
      "Incorrecto: No existe ley de copyright sobre esto.",
      "Incorrecto: Los intérpretes no cifran con SSL."
    ],
    "tip_es": "Fundamento de traducción: El procesador solo comprende código binario de máquina.",
    "ref": null,
    "human_rule": "alto nivel ➔ traducir ➔ binario para el CPU.",
    "trigger_anchor": "CPU only understands binary ➔ translate",
    "spanglish_trap": "Creer que la traducción es opcional.",
    "workplace_usage": {
      "scenario": "Fundamentos de Computación",
      "en": "Source code must be translated into machine instructions before execution.",
      "es": "El código fuente debe traducirse a instrucciones de máquina antes de la ejecución."
    }
  },
  {
    "id": "it1-mod3-sec5-ex2-q2",
    "section": "UE",
    "objective": "R2",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Why is binary code the foundational execution format of modern computer processors?",
    "options": [
      "It is easily readable and editable by human administrators without tools.",
      "It is the only language which can be directly parsed and executed by electronic digital circuits.",
      "It consumes zero electrical power during mathematical operations.",
      "It prevents all network packets from being spoofed."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"foundational execution format\": lo único que entiende el CPU.\n• Significado: El binario es el único lenguaje que los circuitos digitales ejecutan directamente.\n• Descartas: No es legible para humanos; sí consume energía; no previene spoofing.",
    "why_wrong": [
      "Incorrecto: No es fácil de leer para humanos.",
      "Opción correcta: Es lo único que los circuitos digitales ejecutan directamente.",
      "Incorrecto: Consume energía como cualquier operación.",
      "Incorrecto: No tiene relación con paquetes de red."
    ],
    "tip_es": "Naturaleza del binario: Único lenguaje procesado de forma nativa por compuertas electrónicas.",
    "ref": null,
    "human_rule": "binario = lo único que el CPU ejecuta directo.",
    "trigger_anchor": "directly executed ➔ binary",
    "spanglish_trap": "Pensar que el binario es \"legible\" porque son solo 0 y 1.",
    "workplace_usage": {
      "scenario": "Diseño de Procesadores",
      "en": "Binary code represents low-level instructions executed directly by CPU logic.",
      "es": "El código binario representa instrucciones de bajo nivel ejecutadas directamente por la lógica de la CPU."
    }
  },
  {
    "id": "it1-mod3-sec5-ex2-q3",
    "section": "UE",
    "objective": "R3",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the reading on compilers, when is program execution significantly faster?",
    "options": [
      "While the interpreter is parsing source code line by line.",
      "Only when the computer is disconnected from the internet.",
      "Once the compiler has finished analyzing and generating optimized machine code.",
      "Whenever dynamic type checking is performed continuously in the loop."
    ],
    "answer": 2,
    "why_correct": "• Pista: La ejecución es más rápida cuando el compilador ya generó código optimizado.\n• Significado: Después de compilar, el programa corre rápido porque ya es código máquina optimizado.\n• Descartas: El intérprete va línea por línea (más lento); la conexión a internet no influye.",
    "why_wrong": [
      "Incorrecto: El intérprete es más lento, no más rápido.",
      "Incorrecto: Internet no afecta la velocidad de ejecución.",
      "Opción correcta: Código máquina optimizado ya generado = ejecución más rápida.",
      "Incorrecto: El chequeo dinámico continuo hace más lento."
    ],
    "tip_es": "Ventaja de compilación: Ejecución ultra rápida una vez generado el código máquina.",
    "ref": null,
    "human_rule": "compilado = rápido al ejecutar, porque ya está traducido.",
    "trigger_anchor": "compiler finished ➔ faster",
    "spanglish_trap": "Creer que compilar es más lento siempre. El build tarda, la ejecución es rápida.",
    "workplace_usage": {
      "scenario": "Optimización de Desempeño C++",
      "en": "Execution speed is high once the compiler has finished building the binary.",
      "es": "La velocidad de ejecución es alta una vez que el compilador ha terminado de construir el binario."
    }
  },
  {
    "id": "it1-mod3-sec5-ex2-q4",
    "section": "UE",
    "objective": "R4",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "How does an interpreter differ operationally from a compiler during program runtime?",
    "options": [
      "The interpreter writes permanent object code to the storage disk prior to execution.",
      "The interpreter requires manual human intervention for each function call.",
      "The interpreter permanently modifies the motherboard BIOS firmware.",
      "During execution, the interpreter translates and runs the code statement by statement."
    ],
    "answer": 3,
    "why_correct": "• Pista: El intérprete ejecuta durante el runtime, instrucción por instrucción.\n• Significado: Traduce y ejecuta cada instrucción mientras corre, sin guardar un archivo objeto.\n• Descartas: No escribe object code a disco; no requiere intervención manual; no modifica el BIOS.",
    "why_wrong": [
      "Incorrecto: El compilador, no el intérprete, genera object code.",
      "Incorrecto: No necesita intervención humana por función.",
      "Incorrecto: No modifica el BIOS.",
      "Opción correcta: Traduce y ejecuta instrucción por instrucción."
    ],
    "tip_es": "Mecanismo del intérprete: Traduce y ejecuta instrucción por instrucción en tiempo de ejecución.",
    "ref": null,
    "human_rule": "intérprete = ejecuta línea a línea. compiler = traduce todo antes.",
    "trigger_anchor": "statement by statement ➔ interpreter",
    "spanglish_trap": "Pensar que el intérprete también produce un ejecutable.",
    "workplace_usage": {
      "scenario": "Runtimes de Scripting",
      "en": "During execution, the Python interpreter translates instructions line by line.",
      "es": "Durante la ejecución, el intérprete de Python traduce las instrucciones línea por línea."
    }
  },
  {
    "id": "it1-mod3-sec5-ex2-q5",
    "section": "UE",
    "objective": "R4",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What is a major practical advantage of interpreted programming languages during rapid prototyping?",
    "options": [
      "Developers can immediately test code modifications without waiting for compilation.",
      "Interpreted languages execute fifty times faster than bare-metal C++.",
      "Interpreted code eliminates the need for RAM memory allocation.",
      "Interpreted scripts run identically on processors that lack electric power."
    ],
    "answer": 0,
    "why_correct": "• Pista: Prototipado rápido: probar cambios sin compilar.\n• Significado: Con intérprete modificas y pruebas al instante, sin esperar la compilación.\n• Descartas: No es 50 veces más rápido que C++; sí usa RAM; sin electricidad nada corre.",
    "why_wrong": [
      "Opción correcta: Pruebas inmediatas sin esperar a compilar.",
      "Incorrecto: No es 50 veces más rápido que C++, suele ser más lento.",
      "Incorrecto: Sí usa memoria RAM.",
      "Incorrecto: Sin electricidad no corre nada."
    ],
    "tip_es": "Beneficio de intérpretes: Prototipado rápido y retroalimentación inmediata sin tiempo de compilación.",
    "ref": null,
    "human_rule": "intérprete = ideal para probar rápido.",
    "trigger_anchor": "rapid prototyping ➔ no compile wait",
    "spanglish_trap": "Creer que ventaja \"rápido\" significa velocidad de ejecución. Es rapidez de desarrollo.",
    "workplace_usage": {
      "scenario": "Desarrollo Rápido de Scripts",
      "en": "Interpreted languages speed up debugging because you can test changes immediately.",
      "es": "Los lenguajes interpretados aceleran la depuración porque puedes probar los cambios de inmediato."
    }
  },
  {
    "id": "it1-mod3-sec5-ex2-q6",
    "section": "UE",
    "objective": "R5",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "How does Java share operational qualities of both a compiler and an interpreter?",
    "options": [
      "It compiles directly to silicon microcode while interpreting SQL queries in hardware.",
      "It compiles source code into portable bytecode, which is then interpreted or JIT-compiled by the virtual machine.",
      "It generates analog audio signals that are translated by network modems.",
      "It runs only on single-threaded mainframe computers from the 1970s."
    ],
    "answer": 1,
    "why_correct": "• Pista: Java mezcla compilar a bytecode y luego interpretar/JIT.\n• Significado: Compila a bytecode portable y después la VM lo interpreta o lo compila con JIT.\n• Descartas: No compila a microcódigo de silicio ni genera audio ni solo corre en mainframes.",
    "why_wrong": [
      "Incorrecto: No compila a silicio.",
      "Opción correcta: Compila a bytecode que luego se interpreta o se compila con JIT.",
      "Incorrecto: No genera señales de audio.",
      "Incorrecto: Corre en muchas plataformas modernas."
    ],
    "tip_es": "Modelo híbrido de Java: [Source -> Bytecode -> JVM (Interpreter + JIT Compiler)].",
    "ref": null,
    "human_rule": "Java = compila a bytecode + VM interpreta/JIT.",
    "trigger_anchor": "both compiler and interpreter ➔ Java bytecode",
    "spanglish_trap": "Pensar que Java es solo compilado.",
    "workplace_usage": {
      "scenario": "Arquitectura Empresarial Java",
      "en": "Java achieves portability by compiling to bytecode and executing via the JVM.",
      "es": "Java logra portabilidad compilando a bytecode y ejecutando a través de la JVM."
    }
  }
];
