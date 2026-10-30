import { Question } from '../../types';

/**
 * English for IT 1 – Module 1: Product Management: Identify Problems
 * 1.1 Section 1 – Grammar: The Passive Voice (Impersonal & Personal Passive)
 * Official OpenEDG / Cisco Curriculum
 * Covers:
 *  - Impersonal Passive: It + be + past participle of reporting verb + that + clause
 *  - Personal Passive: Subject + Passive Verb + to-Infinitive
 *  - Reporting verbs: believe, expect, find, know, report, say, think, understand, consider
 * 1.1.3 Exercise 1 (6 items) & 1.1.4 Exercise 2 (5 items)
 */
export const ENGLISH_FOR_IT_1_MODULE_1_BANK: Question[] = [
  {
    "id": "it1-mod1-sec1-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"__________ that user flows should be presented with more detail to avoid losing customer attention.\"",
    "options": [
      "It is understood",
      "It understands",
      "It has understood",
      "Is understood"
    ],
    "answer": 0,
    "why_correct": "• Pista: lo que sigue a \"that\" es una frase completa.\n• Regla: \"se entiende que…\" ➔ It is understood THAT…\n• Descartas: \"It understands\" y \"It has understood\" hacen que \"it\" entienda; sin \"it\" falta el sujeto.",
    "why_wrong": [
      "Opción correcta: \"It is understood that…\" = \"se entiende que…\".",
      "Incorrecto: \"It understands\" es activa; \"it\" no puede entender.",
      "Incorrecto: \"It has understood\" también es activa.",
      "Incorrecto: falta \"it\" delante."
    ],
    "tip_es": "Fórmula de Impersonal Passive: [It + be + participio pasado + that + cláusula]. Ejemplo del video: \"It is thought that...\", \"It is understood that...\".",
    "ref": null,
    "human_rule": "\"Se entiende que…\" ➔ It is understood that…",
    "trigger_anchor": "______ that user flows should be… (se entiende que) ➔ it is understood",
    "spanglish_trap": "Empezar sin \"it\", como en español.",
    "workplace_usage": {
      "scenario": "Revisión de Flujos UX de Producto",
      "en": "It is understood that user flows should be presented with more detail to avoid losing customer attention.",
      "es": "Se sobreentiende que los flujos de usuario deben presentarse con más detalle para evitar perder la atención del cliente."
    }
  },
  {
    "id": "it1-mod1-sec1-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"Single sign-on functionality __________ to be a standard for identity providers.\"",
    "options": [
      "it is considered",
      "is considered",
      "considered",
      "considers"
    ],
    "answer": 1,
    "why_correct": "• Pista: la cosa va primero (\"Single sign-on functionality\") y después viene \"to be\".\n• Regla: cosa primero ➔ is considered TO BE.\n• Descartas: \"it is considered\" duplica el sujeto; considered solo no tiene \"is\"; considers hace que la funcionalidad considere algo.",
    "why_wrong": [
      "Incorrecto: \"it is considered\" no puede ir después de la cosa; serían dos sujetos.",
      "Opción correcta: \"is considered to be\" = \"se considera que es\".",
      "Incorrecto: falta \"is\".",
      "Incorrecto: considers es activa; la funcionalidad no considera nada."
    ],
    "tip_es": "Fórmula de Personal Passive: [Sujeto + be + participio de reporte + to-Infinitive]. Ejemplo: \"SSO is considered to be...\".",
    "ref": null,
    "human_rule": "Cosa primero ➔ is considered to be…",
    "trigger_anchor": "functionality ______ to be a standard ➔ is considered",
    "spanglish_trap": "Escribir \"it is considered\" después de la cosa. Con la cosa delante, solo \"is\".",
    "workplace_usage": {
      "scenario": "Estándares de Arquitectura e Identidad",
      "en": "Single sign-on functionality is considered to be a standard for identity providers.",
      "es": "La funcionalidad de inicio de sesión único (SSO) se considera un estándar para los proveedores de identidad."
    }
  },
  {
    "id": "it1-mod1-sec1-ex1-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"It was our goal __________ at the end of the month, but I’d suggest keeping a balance between delivery and meeting customer needs.\"",
    "options": [
      "to be released",
      "released",
      "to release it",
      "releasing it"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"It was our goal\" pide decir qué queríamos hacer.\n• Regla: objetivo ➔ to + verbo + lo que se hace (to release it).\n• Descartas: \"to be released\" y \"released\" no dicen qué hacíamos nosotros; \"releasing it\" no va con goal.",
    "why_wrong": [
      "Incorrecto: \"to be released\" es pasiva, pero aquí el equipo es quien lo lanza.",
      "Incorrecto: released sin to no dice cuál era el objetivo.",
      "Opción correcta: \"to release it\" = \"lanzarlo\".",
      "Incorrecto: después de goal va to + verbo, no el verbo con -ing."
    ],
    "tip_es": "Estructura de intención de sprint: \"It was our goal [TO + verbo base + objeto]\".",
    "ref": null,
    "human_rule": "\"Nuestro objetivo era lanzarlo\" ➔ It was our goal to release it.",
    "trigger_anchor": "It was our goal ______ (objetivo) ➔ to + verbo",
    "spanglish_trap": "Traducir \"era lanzar\" con -ing. Después de goal va to + verbo.",
    "workplace_usage": {
      "scenario": "Planificación de Lanzamiento de Sprint",
      "en": "It was our goal to release it at the end of the month, but I’d suggest keeping a balance between delivery and meeting customer needs.",
      "es": "Nuestra meta era lanzarlo a finales de mes, pero sugeriría mantener el equilibrio entre los tiempos de entrega y satisfacer las necesidades del cliente."
    }
  },
  {
    "id": "it1-mod1-sec1-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"The feedback __________ show that demand for UX improvements has increased.\"",
    "options": [
      "expects to",
      "expected to",
      "is expecting",
      "is expected to"
    ],
    "answer": 3,
    "why_correct": "• Pista: la cosa va primero (\"The feedback\") y \"show\" va sin to después del hueco.\n• Regla: cosa primero + \"se espera que\" ➔ is expected TO + verbo.\n• Descartas: expects y is expecting hacen que el feedback espere algo; expected to no tiene \"is\".",
    "why_wrong": [
      "Incorrecto: expects to haría que el feedback esperara algo.",
      "Incorrecto: expected to sin \"is\" no tiene verbo principal.",
      "Incorrecto: is expecting no lleva to y haría que el feedback esperara algo.",
      "Opción correcta: \"is expected to show\" = \"se espera que muestre\"."
    ],
    "tip_es": "Regla del video: Con verbos como expect, report, believe y sujeto técnico al frente, la estructura es: [Subject + IS/ARE EXPECTED + TO-INFINITIVE].",
    "ref": null,
    "human_rule": "Cosa primero ➔ is expected to + verbo.",
    "trigger_anchor": "The feedback ______ show (cosa primero) ➔ is expected to",
    "spanglish_trap": "Elegir la forma activa (expects to). Si la cosa es la que \"se espera\", es pasiva.",
    "workplace_usage": {
      "scenario": "Análisis de Encuestas de Clientes",
      "en": "The feedback is expected to show that demand for UX improvements has increased.",
      "es": "Se espera que el feedback demuestre que la demanda de mejoras de UX ha aumentado."
    }
  },
  {
    "id": "it1-mod1-sec1-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"The last option __________ the best option, as it lessens the risks.\"",
    "options": [
      "is thought to be",
      "is thought",
      "thinks that",
      "is thought that"
    ],
    "answer": 0,
    "why_correct": "• Pista: la cosa va primero y se dice qué es (\"the best option\").\n• Regla: \"se piensa que es…\" ➔ is thought TO BE.\n• Descartas: \"is thought\" sin to be queda a medias; thinks that hace que la opción piense; \"is thought that\" no va con la cosa delante.",
    "why_wrong": [
      "Opción correcta: \"is thought to be\" = \"se piensa que es\".",
      "Incorrecto: falta \"to be\"; sin él no dice qué es la opción.",
      "Incorrecto: thinks that hace que la opción piense.",
      "Incorrecto: \"is thought that\" no va después de la cosa; va con \"it\"."
    ],
    "tip_es": "Ejemplo del video: \"The Personal Passive is sometimes thought to be difficult to learn.\" -> [Subject + is thought to be...].",
    "ref": null,
    "human_rule": "Cosa primero ➔ is thought to be…",
    "trigger_anchor": "The last option ______ the best option ➔ is thought to be",
    "spanglish_trap": "Cortar la frase en \"is thought\" y olvidar \"to be\".",
    "workplace_usage": {
      "scenario": "Evaluación de Riesgo de Arquitectura",
      "en": "The last option is thought to be the best option, as it lessens the risks.",
      "es": "Se considera que la última opción es la mejor, ya que reduce los riesgos."
    }
  },
  {
    "id": "it1-mod1-sec1-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Complete the sentence: \"The team __________ that the feedback results will show more demand for UX improvements.\"",
    "options": [
      "has known",
      "knows",
      "is known",
      "is knowing"
    ],
    "answer": 1,
    "why_correct": "• Pista: el equipo es quien sabe y después viene \"that\" + frase.\n• Regla: quien sabe lo hace él mismo ➔ voz activa (knows).\n• Descartas: has known y is knowing no encajan; is known sería \"el equipo es conocido\".",
    "why_wrong": [
      "Incorrecto: has known no encaja; para \"el equipo sabe que\" basta el presente: knows.",
      "Opción correcta: knows = \"sabe\"; el equipo es quien sabe.",
      "Incorrecto: is known sería \"el equipo es conocido\"; no es lo que se quiere decir.",
      "Incorrecto: saber no se usa normalmente en -ing."
    ],
    "tip_es": "¡Cuidado con la voz activa vs pasiva! Si el sujeto es quien sabe (\"The team\"), se conjuga en activa: \"The team knows that...\".",
    "ref": null,
    "human_rule": "Si el sujeto es quien sabe, va en activa: The team knows that…",
    "trigger_anchor": "The team ______ that the results (el equipo sabe) ➔ knows",
    "spanglish_trap": "Usar la pasiva en todo. Pregunta quién hace la acción: si el equipo sabe, es activa.",
    "workplace_usage": {
      "scenario": "Alineación de Equipo de Producto",
      "en": "The team knows that the feedback results will show more demand for UX improvements.",
      "es": "El equipo sabe que los resultados del feedback mostrarán mayor demanda de mejoras de UX."
    }
  },
  {
    "id": "it1-mod1-sec1-ex2-q1",
    "section": "UE",
    "objective": "UE2",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct phrase to complete the sentence: \"The board has asked when we will deliver the supplier evaluation module to the customer, and I said __________ :\"",
    "options": [
      "it is hoped to be delivering by the end of March at the latest.",
      "the module is reported to be delivered by the end of March at the latest.",
      "we are hoping to deliver it by the end of March at the latest.",
      "it hopes to deliver by the end of March at the latest."
    ],
    "answer": 2,
    "why_correct": "• Pista: el equipo habla de lo que quiere hacer él mismo.\n• Regla: lo hace el equipo ➔ voz activa (we are hoping to deliver it).\n• Descartas: A y B usan pasiva para algo que el equipo decide; D hace que \"it\" tenga esperanza.",
    "why_wrong": [
      "Incorrecto: \"it is hoped to be delivering\" mezcla formas y suena confuso.",
      "Incorrecto: \"is reported to be delivered\" dice que alguien informó, no que el equipo espera hacerlo.",
      "Opción correcta: \"we are hoping to deliver it\" dice lo que el equipo quiere hacer.",
      "Incorrecto: \"it hopes to deliver\" hace que \"it\" tenga esperanza."
    ],
    "tip_es": "Al comunicar una previsión del propio equipo a stakeholders: \"we are hoping to deliver it by [fecha]\".",
    "ref": null,
    "human_rule": "Si lo hace el equipo, se dice en activa: we are hoping to deliver it…",
    "trigger_anchor": "I said ______ (lo hacemos nosotros) ➔ we are hoping to deliver it",
    "spanglish_trap": "Usar la pasiva por sonar formal. Si el equipo es quien actúa, usa activa.",
    "workplace_usage": {
      "scenario": "Reporte a Junta Directiva de Entrega de Módulo",
      "en": "The board has asked when we will deliver the supplier evaluation module to the customer, and I said we are hoping to deliver it by the end of March at the latest.",
      "es": "La junta directiva preguntó cuándo entregaremos el módulo de evaluación de proveedores al cliente, y dije que esperamos entregarlo a finales de marzo a más tardar."
    }
  },
  {
    "id": "it1-mod1-sec1-ex2-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct phrase to complete the sentence: \"The results of the customer survey should be available next week, and __________ :\"",
    "options": [
      "it is expected to showing demand for UX improvements.",
      "we expect to show demands for UX improvements.",
      "it expects that the customers will be demanding improvements in UX improvements.",
      "it is expected that it will show a demand for UX improvements."
    ],
    "answer": 3,
    "why_correct": "• Pista: lo que sigue es una frase completa (\"it will show a demand\").\n• Regla: \"se espera que + frase\" ➔ It is expected THAT + frase completa.\n• Descartas: A y C no son formas válidas; B dice que nosotros esperamos y cambia el sentido.",
    "why_wrong": [
      "Incorrecto: \"expected to showing\" mezcla to con -ing.",
      "Incorrecto: \"we expect\" dice que nosotros esperamos, y \"demands\" en plural cambia el sentido.",
      "Incorrecto: \"it expects that\" es activa y hace que \"it\" espere.",
      "Opción correcta: \"it is expected that it will show…\" = \"se espera que muestre…\"."
    ],
    "tip_es": "Fórmula oficial del video: [It + is expected + that + clause]. Distancia la afirmación y la enfoca en el dato proyectado.",
    "ref": null,
    "human_rule": "\"Se espera que + frase\" ➔ It is expected that + frase completa.",
    "trigger_anchor": "and ______ : (se espera que) ➔ it is expected that",
    "spanglish_trap": "Mezclar to con -ing (\"expected to showing\"). Después de to va el verbo sin -ing.",
    "workplace_usage": {
      "scenario": "Presentación de Resultados de Encuestas de Clientes",
      "en": "The results of the customer survey should be available next week, and it is expected that it will show a demand for UX improvements.",
      "es": "Los resultados de la encuesta de clientes deberían estar disponibles la próxima semana, y se espera que demuestren una demanda de mejoras de experiencia de usuario."
    }
  },
  {
    "id": "it1-mod1-sec1-ex2-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct phrase to complete the sentence: \"The pandemic has had an impact on our resources, because __________ :\"",
    "options": [
      "more than half the team have been absent from work.",
      "it has been over half of the team absent from work.",
      "it understood that half of the team are absent from work.",
      "half the team is understood being absent from work."
    ],
    "answer": 0,
    "why_correct": "• Pista: explican la causa del impacto con un hecho (\"la mitad del equipo ha faltado\").\n• Regla: hecho directo ➔ frase simple con have been (have been absent).\n• Descartas: B y D reordenan la frase; C mezcla \"it understood\" con are absent.",
    "why_wrong": [
      "Opción correcta: dice el hecho de forma directa y natural.",
      "Incorrecto: \"it has been over half of the team absent\" reordena las palabras y no es natural.",
      "Incorrecto: \"it understood\" es activa y no tiene sentido aquí.",
      "Incorrecto: \"is understood being absent\" mezcla -ing con pasiva."
    ],
    "tip_es": "Analiza la causa directa: \"more than half the team have been absent from work\".",
    "ref": null,
    "human_rule": "Si das un hecho directo, usa la frase simple: more than half the team have been absent.",
    "trigger_anchor": "because ______ (hecho directo) ➔ more than half the team have been absent",
    "spanglish_trap": "Complicar la frase con pasivas. Un hecho directo se dice en forma simple.",
    "workplace_usage": {
      "scenario": "Justificación de Capacidad en Sprint Retrospective",
      "en": "The pandemic has had an impact on our resources, because more than half the team have been absent from work.",
      "es": "La pandemia ha tenido un impacto en nuestros recursos, debido a que más de la mitad del equipo ha estado ausente del trabajo."
    }
  },
  {
    "id": "it1-mod1-sec1-ex2-q4",
    "section": "UE",
    "objective": "UE3",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct phrase to complete the sentence: \"Since we are at risk of not delivering the required functionality on time, __________ :\"",
    "options": [
      "the last option it should be chosen as it is the safest.",
      "we should choose the last option as we know it is the safest choice.",
      "we should choose the last option as it is known the safest choice.",
      "the last option is known being the safest choice."
    ],
    "answer": 1,
    "why_correct": "• Pista: el equipo propone qué hacer (\"deberíamos elegir\").\n• Regla: lo decide el equipo ➔ activa con should (we should choose…).\n• Descartas: A repite \"option\" e \"it\"; C y D usan pasivas mal armadas.",
    "why_wrong": [
      "Incorrecto: \"the last option it should be chosen\" repite el sujeto (\"option\" e \"it\").",
      "Opción correcta: \"we should choose the last option\" propone qué hacer.",
      "Incorrecto: \"it is known the safest\" no tiene \"to be\" y mezcla ideas.",
      "Incorrecto: \"is known being\" mezcla -ing con pasiva."
    ],
    "tip_es": "Estructura modal + justificación: \"we should choose [X] as we know it is the safest choice\".",
    "ref": null,
    "human_rule": "Para proponer qué hacer: we should + verbo.",
    "trigger_anchor": "Since we are at risk, ______ (proponemos) ➔ we should choose…",
    "spanglish_trap": "Repetir el sujeto (\"the option it\"). Un solo sujeto por frase.",
    "workplace_usage": {
      "scenario": "Mitigación de Riesgos de Entrega en Sprint",
      "en": "Since we are at risk of not delivering the required functionality on time, we should choose the last option as we know it is the safest choice.",
      "es": "Dado que estamos en riesgo de no entregar la funcionalidad requerida a tiempo, deberíamos elegir la última opción ya que sabemos que es la opción más segura."
    }
  },
  {
    "id": "it1-mod1-sec1-ex2-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct phrase to complete the sentence: \"In a competitive market, __________ :\"",
    "options": [
      "it is considered to be essential the reliable suppliers.",
      "reliable suppliers consider them essential.",
      "reliable suppliers are considered to be essential.",
      "reliable suppliers is considered to be essential."
    ],
    "answer": 2,
    "why_correct": "• Pista: el sujeto va primero (\"suppliers\", plural).\n• Regla: sujeto primero ➔ are considered TO BE + adjetivo.\n• Descartas: A pone el sujeto al final; B hace que los proveedores consideren algo; D usa is con plural.",
    "why_wrong": [
      "Incorrecto: \"it is considered to be essential the suppliers\" pone el sujeto al final.",
      "Incorrecto: \"consider them\" hace que los proveedores consideren algo.",
      "Opción correcta: \"are considered to be essential\" = \"se consideran esenciales\".",
      "Incorrecto: is es singular y suppliers es plural."
    ],
    "tip_es": "Patrón de Personal Passive: [Sujeto + are considered + to be + adjetivo]. Ejemplo: \"reliable suppliers are considered to be essential\".",
    "ref": null,
    "human_rule": "Sujeto plural primero ➔ are considered to be…",
    "trigger_anchor": "suppliers ______ essential (plural) ➔ are considered to be",
    "spanglish_trap": "Dejar \"it is\" al principio y el sujeto al final. Primero el sujeto, luego la estructura.",
    "workplace_usage": {
      "scenario": "Gestión de Proveedores y Terceros en TI",
      "en": "In a competitive market, reliable suppliers are considered to be essential.",
      "es": "En un mercado competitivo, se considera que los proveedores confiables son esenciales."
    }
  }
];
