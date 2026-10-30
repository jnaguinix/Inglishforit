import { Question } from '../../types';

/**
 * English for IT 1 – Module 1: Product Management: Identify Problems
 * 1.4 Section 4 – Grammar: The Past Simple with "as if" & "as though"
 * Official OpenEDG / Cisco Curriculum
 * Covers:
 *  - "As if" and "as though" for hypothetical, counterfactual situations
 *  - Past Simple for unreal states (analogous to the Second Conditional)
 *  - Subjunctive "were" ("as if it were normal", "as if I were responsible")
 *  - Expressing doubt, annoyance/frustration, or surprise in IT team discussions
 *  - Distinguishing between Hypothetical vs. Real situations
 * 1.4.3 Exercise 1 (5 items) + 1.4.4 Exercise 2 (6 items) = 11 items
 */
export const ENGLISH_FOR_IT_1_SECTION_4_BANK: Question[] = [
  {
    "id": "it1-mod1-sec4-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"It __________ we couldn't get access to behind-the-firewall data.\"",
    "options": [
      "looked as though",
      "appeared if",
      "seemed as like",
      "looked as if like"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"It ______ we couldn't get access\": una apariencia.\n• Regla: \"parecía que…\" ➔ looked as though / as if.\n• Descartas: \"appeared if\", \"seemed as like\" y \"looked as if like\" no son formas válidas.",
    "why_wrong": [
      "Opción correcta: \"looked as though\" = \"parecía que\".",
      "Incorrecto: \"appeared if\" no es una forma válida.",
      "Incorrecto: \"seemed as like\" no es una forma válida.",
      "Incorrecto: \"looked as if like\" repite como."
    ],
    "tip_es": "Estructura oficial: [It + looked / seemed / appeared + AS THOUGH / AS IF + cláusula].",
    "ref": null,
    "human_rule": "\"Parecía que…\" ➔ looked / seemed as though (as if).",
    "trigger_anchor": "It ______ we couldn't get access ➔ looked as though",
    "spanglish_trap": "Mezclar as if con like. Se dice as if / as though, sin like.",
    "workplace_usage": {
      "scenario": "Diagnóstico de Acceso Tras Firewall",
      "en": "It looked as though we couldn't get access to behind-the-firewall data due to port blocking.",
      "es": "Parecía como si no pudiéramos obtener acceso a los datos detrás del firewall debido al bloqueo de puertos."
    }
  },
  {
    "id": "it1-mod1-sec4-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"The customers commented on the prototype as if they __________ that problem in their company.\"",
    "options": [
      "will had",
      "didn't have",
      "would had",
      "haven't"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"commented as if they ______ that problem\": comentaban como si lo tuvieran, y no lo tienen.\n• Regla: as if + irreal ➔ pasado (didn't have).\n• Descartas: \"will had\" y \"would had\" no existen; \"haven't\" habla de algo real.",
    "why_wrong": [
      "Incorrecto: \"will had\" no existe.",
      "Opción correcta: \"as if they didn't have\" = \"como si no tuvieran\".",
      "Incorrecto: \"would had\" no existe.",
      "Incorrecto: \"haven't\" le falta el verbo."
    ],
    "tip_es": "Regla del video: Al igual que el segundo condicional, tras \"as if\" se usa Past Simple porque la situación no es real.",
    "ref": null,
    "human_rule": "as if + irreal (presente) ➔ pasado simple.",
    "trigger_anchor": "as if they ______ that problem ➔ didn't have",
    "spanglish_trap": "Mezclar will o would con had. En lo irreal basta el pasado.",
    "workplace_usage": {
      "scenario": "Pruebas de Prototipo con Usuarios",
      "en": "The customers commented on the prototype as if they didn't have that problem in their company.",
      "es": "Los clientes comentaron sobre el prototipo como si no tuvieran ese problema en su empresa."
    }
  },
  {
    "id": "it1-mod1-sec4-ex1-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"Looking at the query results, __________ they counted customers who use internal active directories.\"",
    "options": [
      "they looking like",
      "it could be if",
      "it appears as though",
      "it looks like that"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Looking at the results, ______ they counted…\": una apariencia.\n• Regla: \"parece que…\" ➔ it appears as though.\n• Descartas: \"they looking like\" y \"it could be if\" no son formas válidas; \"it looks like that\" cambia la estructura.",
    "why_wrong": [
      "Incorrecto: \"they looking like\" no es una forma válida.",
      "Incorrecto: \"it could be if\" no es una forma válida.",
      "Opción correcta: \"it appears as though they counted\" = \"parece que contaron\".",
      "Incorrecto: \"it looks like that\" cambia la estructura y no abre la frase."
    ],
    "tip_es": "Fórmula de deducción técnica: \"It appears as though [cláusula]\".",
    "ref": null,
    "human_rule": "\"Parece que…\" ➔ it appears as though + frase.",
    "trigger_anchor": "Looking at the results, ______ they counted… ➔ it appears as though",
    "spanglish_trap": "Añadir that después de looks like. Con as though, se sigue con la frase.",
    "workplace_usage": {
      "scenario": "Análisis de Consultas en Base de Datos de Clientes",
      "en": "Looking at the query results, it appears as though they counted customers who use internal active directories.",
      "es": "Al observar los resultados de la consulta, parece como si hubieran contado a los clientes que usan directorios activos internos."
    }
  },
  {
    "id": "it1-mod1-sec4-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"They are acting __________ normal to have so many detractors.\"",
    "options": [
      "as if it is being",
      "as though it could be",
      "as though it has",
      "as if it were"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"They are acting ______ normal to have so many detractors\": se actúa como si fuera normal, y no lo es.\n• Regla: as if + irreal ➔ were.\n• Descartas: \"is being\", \"could be\" y \"has\" no forman el irreal.",
    "why_wrong": [
      "Incorrecto: \"as if it is being\" habla de algo real.",
      "Incorrecto: \"as though it could be\" cambia el sentido.",
      "Incorrecto: \"as though it has\" no encaja con \"normal\".",
      "Opción correcta: \"as if it were normal\" = \"como si fuera normal\"."
    ],
    "tip_es": "Ejemplo del video: \"They present the information as if it were obvious.\" Subjuntivo contrafactual = WERE.",
    "ref": null,
    "human_rule": "as if it were + adjetivo ➔ \"como si fuera…\".",
    "trigger_anchor": "They are acting ______ normal ➔ as if it were",
    "spanglish_trap": "Poner is. Lo irreal va en pasado.",
    "workplace_usage": {
      "scenario": "Revisión Crítica de Métricas NPS",
      "en": "They are acting as if it were normal to have so many detractors on the new checkout release.",
      "es": "Están actuando como si fuera normal tener tantos detractores en el nuevo lanzamiento del checkout."
    }
  },
  {
    "id": "it1-mod1-sec4-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"They were talking as though __________ the option of secondments from other teams.\"",
    "options": [
      "we didn't have",
      "we haven't",
      "do have",
      "won't have"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"They were talking as though ______ the option\": hablaban como si tuviéramos la opción, y no la tenemos.\n• Regla: as though + irreal ➔ pasado simple (didn't have).\n• Descartas: \"we haven't\", \"do have\" y \"won't have\" hablan de algo real o futuro.",
    "why_wrong": [
      "Opción correcta: \"as though we didn't have\" = \"como si no tuviéramos\".",
      "Incorrecto: \"we haven't\" le falta el verbo.",
      "Incorrecto: \"do have\" habla de algo real.",
      "Incorrecto: \"won't have\" es futuro."
    ],
    "tip_es": "Regla del video: \"It’s as though we didn’t need...\" -> se usa Past Simple negativo (\"we didn't have\").",
    "ref": null,
    "human_rule": "as though + irreal ➔ pasado simple.",
    "trigger_anchor": "They were talking as though ______ the option ➔ we didn't have",
    "spanglish_trap": "Poner el presente. Lo irreal va en pasado.",
    "workplace_usage": {
      "scenario": "Asignación de Recursos y Personal (Secondments)",
      "en": "They were talking as though we didn't have the option of secondments from other teams to absorb the workload.",
      "es": "Estaban hablando como si no tuviéramos la opción de adscripciones temporales de otros equipos para absorber la carga de trabajo."
    }
  },
  {
    "id": "it1-mod1-sec4-ex2-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G03",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Analyze the sentence and decide if the situation is hypothetical or real: \"They were talking as if we had months to finish the project.\"",
    "options": [
      "Real",
      "Hypothetical",
      "Scheduled event",
      "Completed project"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"as if we had months\": no los tenemos; es una suposición falsa.\n• Regla: as if + pasado ➔ situación hipotética.\n• Descartas: no es real, ni un evento programado, ni un proyecto terminado.",
    "why_wrong": [
      "Incorrecto: no es real, porque no tenemos meses.",
      "Opción correcta: es hipotética (\"como si tuviéramos meses\").",
      "Incorrecto: no es un evento programado.",
      "Incorrecto: no es un proyecto terminado."
    ],
    "tip_es": "Regla oficial: La construcción \"as if / as though + Past Simple\" señala una situación hipotética (no real).",
    "ref": null,
    "human_rule": "as if + pasado = situación hipotética (no real).",
    "trigger_anchor": "They were talking as if we had months ➔ hipotética",
    "spanglish_trap": "Leer \"as if we had\" como un hecho. Tras as if, lo hipotético usa el pasado.",
    "workplace_usage": {
      "scenario": "Gestión de Plazos de Entrega de Proyecto",
      "en": "They were talking as if we had months to finish the project, but our deadline is next Friday.",
      "es": "Estaban hablando como si tuviéramos meses para terminar el proyecto, pero nuestra fecha límite es el próximo viernes."
    }
  },
  {
    "id": "it1-mod1-sec4-ex2-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G03",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Analyze the sentence and decide if the situation is hypothetical or real: \"It is great that we received the feedback before the meeting.\"",
    "options": [
      "Uncertain assumption",
      "Hypothetical",
      "Real",
      "Conditional clause"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"It is great that we received the feedback\": es un hecho (que ocurrió).\n• Regla: that + hecho real ➔ real.\n• Descartas: no hay as if, ni una condición, ni una suposición.",
    "why_wrong": [
      "Incorrecto: no es una suposición incierta.",
      "Incorrecto: no es hipotética.",
      "Opción correcta: es real (\"recibimos el feedback\").",
      "Incorrecto: no hay una cláusula condicional."
    ],
    "tip_es": "Hecho factual: \"we received the feedback\" relata una acción que ocurrió en la realidad.",
    "ref": null,
    "human_rule": "Un hecho que ocurrió = real.",
    "trigger_anchor": "It is great that we received the feedback ➔ real",
    "spanglish_trap": "Pensar que todo pasado es hipotético. Lo hipotético lleva as if / if.",
    "workplace_usage": {
      "scenario": "Preparación de Reunión de Stakeholders",
      "en": "It is great that we received the feedback before the meeting so we can address concerns directly.",
      "es": "Es genial que hayamos recibido el feedback antes de la reunión para poder abordar las inquietudes directamente."
    }
  },
  {
    "id": "it1-mod1-sec4-ex2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G03",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Analyze the sentence and decide if the situation is hypothetical or real: \"We decided it was a good idea to go ahead with the UX improvements.\"",
    "options": [
      "Counterfactual",
      "Hypothetical",
      "Hypothetical doubt",
      "Real"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"We decided it was a good idea\": lo decidieron de verdad.\n• Regla: un hecho decidido ➔ real.\n• Descartas: no hay as if ni una condición.",
    "why_wrong": [
      "Incorrecto: no es contrafáctica.",
      "Incorrecto: no es hipotética.",
      "Incorrecto: no expresa duda.",
      "Opción correcta: es real (se decidió)."
    ],
    "tip_es": "Verbos factuales de decisión: \"We decided...\" relata una acción real ocurrida.",
    "ref": null,
    "human_rule": "Un hecho decidido = real.",
    "trigger_anchor": "We decided it was a good idea ➔ real",
    "spanglish_trap": "Ver \"was\" y pensar en hipótesis. Aquí no hay as if.",
    "workplace_usage": {
      "scenario": "Aprobación de Inversión de Producto",
      "en": "We decided it was a good idea to go ahead with the UX improvements after evaluating customer retention.",
      "es": "Decidimos que era una buena idea seguir adelante con las mejoras de UX tras evaluar la retención de clientes."
    }
  },
  {
    "id": "it1-mod1-sec4-ex2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Analyze the sentence and decide if the situation is hypothetical or real: \"It is as though they didn't understand how risky it was to invest in UX improvements.\"",
    "options": [
      "Hypothetical",
      "Real",
      "Objective report",
      "Confirmed audit"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"It is as though they didn't understand\": se dice que parece, pero no se afirma.\n• Regla: as though + pasado ➔ hipotética.\n• Descartas: no es un informe objetivo ni una auditoría confirmada.",
    "why_wrong": [
      "Opción correcta: es hipotética (\"es como si no entendieran\").",
      "Incorrecto: no es un hecho real confirmado.",
      "Incorrecto: no es un informe objetivo.",
      "Incorrecto: no es una auditoría confirmada."
    ],
    "tip_es": "Presencia de \"as though + didn't understand\" = situación hipotética / percepción irreal.",
    "ref": null,
    "human_rule": "as though + pasado = hipotética.",
    "trigger_anchor": "It is as though they didn't understand… ➔ hipotética",
    "spanglish_trap": "Leer la frase como una afirmación. As though marca una comparación, no un hecho.",
    "workplace_usage": {
      "scenario": "Debate de Presupuesto y Riesgos de Inversión",
      "en": "It is as though they didn't understand how risky it was to invest in UX improvements without solid metrics.",
      "es": "Es como si no entendieran lo riesgoso que era invertir en mejoras de UX sin métricas sólidas."
    }
  },
  {
    "id": "it1-mod1-sec4-ex2-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Analyze the sentence and decide if the situation is hypothetical or real: \"You are talking as if the pandemic had no impact on our ability to deliver on time.\"",
    "options": [
      "Real",
      "Hypothetical",
      "Historical timeline",
      "Confirmed schedule"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"as if the pandemic had no impact\": no es verdad (sí tuvo impacto).\n• Regla: as if + pasado ➔ hipotética.\n• Descartas: no es real, ni una línea de tiempo, ni un calendario confirmado.",
    "why_wrong": [
      "Incorrecto: no es real, porque la pandemia sí tuvo impacto.",
      "Opción correcta: es hipotética (\"como si no hubiera tenido impacto\").",
      "Incorrecto: no es una línea de tiempo.",
      "Incorrecto: no es un calendario confirmado."
    ],
    "tip_es": "Ejemplo de descontento: \"talking as if [X had no impact]\" denuncia una hipótesis irreal frente a un hecho evidente.",
    "ref": null,
    "human_rule": "as if + algo falso = hipotética.",
    "trigger_anchor": "talking as if the pandemic had no impact ➔ hipotética",
    "spanglish_trap": "Pensar que \"had no impact\" es un hecho. Aquí se dice como si fuera así.",
    "workplace_usage": {
      "scenario": "Negociación de Fechas de Entrega con Clientes",
      "en": "You are talking as if the pandemic had no impact on our ability to deliver on time, but half the squad was sick.",
      "es": "Estás hablando como si la pandemia no hubiera tenido impacto en nuestra capacidad de entrega a tiempo, pero la mitad del equipo estuvo enferma."
    }
  },
  {
    "id": "it1-mod1-sec4-ex2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G03",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Analyze the sentence and decide if the situation is hypothetical or real: \"The fact is that we had no choice but to re-estimate the project according to current capacity.\"",
    "options": [
      "Hypothetical speculation",
      "Hypothetical",
      "Real",
      "Counterfactual condition"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"The fact is that we had no choice\": se afirma un hecho.\n• Regla: \"the fact is that…\" ➔ real.\n• Descartas: no hay as if ni una hipótesis.",
    "why_wrong": [
      "Incorrecto: no es una especulación.",
      "Incorrecto: no es hipotética.",
      "Opción correcta: es real (\"el hecho es que…\").",
      "Incorrecto: no es una condición contrafáctica."
    ],
    "tip_es": "Marcador lingüístico inequívoco: \"The fact is that...\" introduce hechos 100% reales.",
    "ref": null,
    "human_rule": "\"The fact is that…\" = hecho real.",
    "trigger_anchor": "The fact is that we had no choice ➔ real",
    "spanglish_trap": "Ver \"had no choice\" y pensar en hipótesis. Lo que se afirma como un hecho es real.",
    "workplace_usage": {
      "scenario": "Re-estimación de Capacidad de Sprint",
      "en": "The fact is that we had no choice but to re-estimate the project according to current capacity.",
      "es": "El hecho es que no tuvimos más remedio que reestimar el proyecto de acuerdo con la capacidad actual."
    }
  }
];
