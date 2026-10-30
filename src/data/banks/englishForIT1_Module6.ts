import { Question } from '../../types';

/**
 * English for IT 1 – Module 6: Advanced Security Architectures & Incident Investigation
 * Reactivos oficiales de OpenEDG / Cisco Networking Academy.
 * Cobertura de secciones:
 *  - 6.1 Section 1 – Grammar: Future Perfect & Future Perfect Continuous (6.1.2: 14 items)
 *  - 6.2 Section 2 – Listening: Security Officer Interview (Part 1 - CIA Triad) (6.2.2, 6.2.3, 6.2.4: 15 items)
 *  - 6.3 Section 3 – Grammar: "On the point of" vs "About to" (6.3.2: 12 items)
 *  - 6.4 Section 4 – Listening: Security Officer Interview (Part 2 - Encryption & VPN) (6.4.2 & 6.4.3: 12 items)
 *  - 6.5 Section 5 – Reading: The Pegasus Spyware Incident (6.5.3: 6 items)
 * 
 * Todos los reactivos están tipados estrictamente como 'pool: practice' para enriquecer
 * la práctica por módulos y temas sin descalibrar el simulacro oficial TestNow™.
 */
export const ENGLISH_FOR_IT_1_MODULE_6_BANK: Question[] = [
  {
    "id": "it1-mod6-sec1-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the deadline milestone: \"By tomorrow we __________ the first draft of the Information Security policy.\"",
    "options": [
      "Will have sent out",
      "Will send out",
      "Sent out",
      "Are sending out"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"By tomorrow\" fija un momento futuro y pregunta qué ya estará hecho.\n• Regla: \"habremos enviado para entonces\" ➔ will have + 3.ª forma.\n• Descartas: will send out dice que lo haremos; sent out es pasado; are sending out es presente.",
    "why_wrong": [
      "Opción correcta: \"will have sent out\" = \"habremos enviado\".",
      "Incorrecto: will send out no dice que ya estará enviado para entonces.",
      "Incorrecto: sent out es pasado.",
      "Incorrecto: are sending out es presente."
    ],
    "tip_es": "Estructura clave de plazos: [\"By\" + punto futuro (by tomorrow / by Friday) -> Future Perfect: will have + participio].",
    "ref": null,
    "human_rule": "By tomorrow ➔ will have + 3.ª forma.",
    "trigger_anchor": "By tomorrow we ______ the first draft ➔ will have sent out",
    "spanglish_trap": "Elegir will send out por parecerse a \"enviaremos\". Con \"para mañana\", will have sent out.",
    "workplace_usage": {
      "scenario": "Compromiso de Entrega de Políticas",
      "en": "By tomorrow we will have sent out the first draft of the policy.",
      "es": "Para mañana habremos enviado el primer borrador de la política de seguridad."
    }
  },
  {
    "id": "it1-mod6-sec1-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with projected duration: \"We __________ these new security standards for three months by next Friday.\"",
    "options": [
      "Will develop",
      "Will have been developing",
      "Have developed",
      "Were developing"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"for three months by next Friday\" dice cuánto tiempo llevarán haciéndolo.\n• Regla: \"para entonces llevaremos X tiempo haciendo…\" ➔ will have been + -ing.\n• Descartas: will develop es futuro simple; have developed y were developing no miran al futuro.",
    "why_wrong": [
      "Incorrecto: will develop no dice cuánto tiempo llevarán.",
      "Opción correcta: \"will have been developing\" = \"llevaremos desarrollando\".",
      "Incorrecto: have developed habla del presente.",
      "Incorrecto: were developing habla del pasado."
    ],
    "tip_es": "Duración (\"for X months\") + corte futuro (\"by next Friday\") = [will have been + verbo-ing].",
    "ref": null,
    "human_rule": "\"Para entonces llevaremos X tiempo…\" ➔ will have been + -ing.",
    "trigger_anchor": "for three months by next Friday ➔ will have been developing",
    "spanglish_trap": "Olvidar la duración (\"for three months\"). Si dice cuánto tiempo, es will have been + -ing.",
    "workplace_usage": {
      "scenario": "Seguimiento de Proyecto de Seguridad",
      "en": "We will have been developing these new security standards for three months by next Friday.",
      "es": "Habremos estado desarrollando estos nuevos estándares de seguridad durante tres meses para el próximo viernes."
    }
  },
  {
    "id": "it1-mod6-sec1-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence expressing future accomplishment: \"The hope is that by next month we __________ all the necessary penetration testing.\"",
    "options": [
      "Complete",
      "Will be completed",
      "Will have completed",
      "Had completed"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"by next month\" fija un momento futuro y pregunta qué ya estará hecho.\n• Regla: \"habremos completado para entonces\" ➔ will have + 3.ª forma.\n• Descartas: complete es presente; \"will be completed\" es pasiva; had completed es pasado.",
    "why_wrong": [
      "Incorrecto: complete es presente.",
      "Incorrecto: \"will be completed\" es pasiva, y aquí nosotros lo hacemos.",
      "Opción correcta: \"will have completed\" = \"habremos completado\".",
      "Incorrecto: had completed es pasado."
    ],
    "tip_es": "Meta concluida antes de un mes: [by next month we will have completed...].",
    "ref": null,
    "human_rule": "By next month ➔ will have + 3.ª forma.",
    "trigger_anchor": "by next month we ______ all the testing ➔ will have completed",
    "spanglish_trap": "Elegir la pasiva porque \"se habrá completado\". Si nosotros lo hacemos, va en activa.",
    "workplace_usage": {
      "scenario": "Planificación de Pentesting Anual",
      "en": "The hope is that by next month we will have completed all testing.",
      "es": "La esperanza es que para el próximo mes habremos completado todas las pruebas necesarias."
    }
  },
  {
    "id": "it1-mod6-sec1-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence describing continuous experience from a past starting point: \"I __________ in charge of these security training sessions since 2018.\"",
    "options": [
      "Will have been",
      "Was",
      "Am",
      "Have been"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"since 2018\" marca un inicio en el pasado que llega hasta ahora.\n• Regla: desde entonces hasta ahora ➔ have been.\n• Descartas: Will have been es futuro; Was es pasado cerrado; Am no marca desde cuándo.",
    "why_wrong": [
      "Incorrecto: Will have been es futuro.",
      "Incorrecto: Was dice que ya no lo eres.",
      "Incorrecto: Am no marca desde cuándo.",
      "Opción correcta: \"have been\" = \"llevo siendo\"."
    ],
    "tip_es": "\"Since\" + año pasado (since 2018) -> Present Perfect: [have/has been]. ¡Nunca presente simple ni futuro!",
    "ref": null,
    "human_rule": "since + fecha pasada ➔ have been.",
    "trigger_anchor": "I ______ in charge since 2018 ➔ have been",
    "spanglish_trap": "Usar am porque sigues siéndolo. Con \"since\", have been.",
    "workplace_usage": {
      "scenario": "Trayectoria y Roles de Ciberseguridad",
      "en": "I have been in charge of these training sessions since 2018.",
      "es": "He estado a cargo de estas sesiones de capacitación desde 2018."
    }
  },
  {
    "id": "it1-mod6-sec1-ex1-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the logical deduction about continuous morning activity: \"She __________ training sessions all morning so I imagine she is exhausted.\"",
    "options": [
      "Will have been running",
      "Will run",
      "Runs",
      "Ran"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"all morning\" marca una duración, y la frase habla de lo que se imagina ahora (\"I imagine she is exhausted\").\n• Regla: duración + suposición ➔ will have been + -ing.\n• Descartas: will run es futuro simple; Runs y Ran no marcan la duración.",
    "why_wrong": [
      "Opción correcta: \"will have been running\" = \"habrá estado dirigiendo\".",
      "Incorrecto: will run es futuro simple y no marca la duración.",
      "Incorrecto: Runs es presente simple.",
      "Incorrecto: Ran es pasado simple y no marca la duración."
    ],
    "tip_es": "Deducción de actividad continua acumulada: [will have been running all morning].",
    "ref": null,
    "human_rule": "Duración hasta ahora + suposición ➔ will have been + -ing.",
    "trigger_anchor": "all morning… I imagine she is exhausted ➔ will have been running",
    "spanglish_trap": "Elegir ran porque la acción ya ocurrió. Aquí importa que fue larga: will have been + -ing.",
    "workplace_usage": {
      "scenario": "Coordinación de Talleres InfoSec",
      "en": "She will have been running sessions all morning, so she must be tired.",
      "es": "Habrá estado impartiendo sesiones de capacitación toda la mañana, por lo que imagino que está exhausta."
    }
  },
  {
    "id": "it1-mod6-sec1-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence describing a recent completed action today: \"She __________ some recommendations to the security manager earlier today.\"",
    "options": [
      "Will have made",
      "Has made",
      "Makes",
      "Had made"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"earlier today\" es un periodo que sigue abierto.\n• Regla: acción reciente dentro de hoy ➔ has + 3.ª forma.\n• Descartas: Will have made es futuro; Makes es presente; Had made es antes de otro momento pasado.",
    "why_wrong": [
      "Incorrecto: Will have made es futuro.",
      "Opción correcta: \"has made\" = \"ha hecho\".",
      "Incorrecto: Makes es presente.",
      "Incorrecto: Had made va con otro momento pasado."
    ],
    "tip_es": "Acción reciente dentro del marco de hoy (\"earlier today\") -> Present Perfect (\"Has made\").",
    "ref": null,
    "human_rule": "Acción reciente dentro de hoy ➔ has + 3.ª forma.",
    "trigger_anchor": "earlier today ➔ She ______ some recommendations ➔ has made",
    "spanglish_trap": "Usar had made por ser algo de antes. Si hoy sigue abierto, has made.",
    "workplace_usage": {
      "scenario": "Actualizaciones de Asesoría de Seguridad",
      "en": "She has made some recommendations to the security manager earlier today.",
      "es": "Ella ha hecho algunas recomendaciones al gerente de seguridad hoy más temprano."
    }
  },
  {
    "id": "it1-mod6-sec1-ex2-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the passive timeline: \"By the time we remove the spyware software, the sensitive information __________ compromised.\"",
    "options": [
      "Will have been",
      "Will be",
      "Was",
      "Is"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"By the time we remove…\" marca un momento futuro y la información ya estará expuesta.\n• Regla: \"para entonces ya habrá estado…\" ➔ will have been + 3.ª forma.\n• Descartas: will be no marca que ya lo estará; was e is no miran al futuro.",
    "why_wrong": [
      "Opción correcta: \"will have been compromised\" = \"habrá estado comprometida\".",
      "Incorrecto: will be no dice que ya lo estará para entonces.",
      "Incorrecto: was es pasado.",
      "Incorrecto: is es presente."
    ],
    "tip_es": "Cláusula temporal: [By the time + Present Simple -> Main clause: WILL HAVE BEEN + participio].",
    "ref": null,
    "human_rule": "Para entonces ya ➔ will have been + 3.ª forma.",
    "trigger_anchor": "By the time we remove the spyware ➔ information ______ compromised ➔ will have been",
    "spanglish_trap": "Elegir will be. Con \"para cuando\", la información ya estará comprometida: will have been.",
    "workplace_usage": {
      "scenario": "Respuesta ante Incidentes de Spyware (Pegasus)",
      "en": "By the time we remove the spyware, data will have been compromised.",
      "es": "Para cuando eliminemos el software espía, la información habrá sido comprometida."
    }
  },
  {
    "id": "it1-mod6-sec1-ex2-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete with the appropriate future perfect form: \"We __________ (test) these security solutions for one month by next week.\"",
    "options": [
      "Will test",
      "Will have been testing",
      "Are testing",
      "Have tested"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"for one month by next week\" dice cuánto tiempo llevarán haciéndolo.\n• Regla: \"para entonces llevaremos un mes probando\" ➔ will have been + -ing.\n• Descartas: will test no dice cuánto tiempo; are testing es presente; have tested es presente perfecto.",
    "why_wrong": [
      "Incorrecto: will test no dice cuánto tiempo llevarán.",
      "Opción correcta: \"will have been testing\" = \"llevaremos probando\".",
      "Incorrecto: are testing es presente.",
      "Incorrecto: have tested habla del presente."
    ],
    "tip_es": "Fórmula: [will have been + verbo-ing] para duraciones proyectadas en plazos futuros.",
    "ref": null,
    "human_rule": "\"Para entonces llevaremos X tiempo…\" ➔ will have been + -ing.",
    "trigger_anchor": "for one month by next week ➔ will have been testing",
    "spanglish_trap": "Olvidar la duración. Si dice cuánto tiempo, es will have been + -ing.",
    "workplace_usage": {
      "scenario": "Evaluación de Herramientas EDR",
      "en": "We will have been testing these solutions for a month by next week.",
      "es": "Habremos estado probando estas soluciones de seguridad durante un mes para la próxima semana."
    }
  },
  {
    "id": "it1-mod6-sec1-ex2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the milestone target: \"I __________ (run) three security training sessions by the end of this sprint.\"",
    "options": [
      "Will run",
      "Will have ran",
      "Will have run",
      "Am running"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"by the end of this sprint\" fija un momento futuro y pregunta qué ya estará hecho.\n• Regla: \"habré dirigido para entonces\" ➔ will have + 3.ª forma de run (run).\n• Descartas: \"will have ran\" usa mal la 3.ª forma (es run); will run y am running no dicen \"ya habré\".",
    "why_wrong": [
      "Incorrecto: will run no dice que ya habrán ocurrido para entonces.",
      "Incorrecto: \"will have ran\" usa mal la 3.ª forma; de run es run.",
      "Opción correcta: \"will have run\" = \"habré dirigido\".",
      "Incorrecto: am running es presente."
    ],
    "tip_es": "Irregularidad verbal: [run (V1) -> ran (V2) -> run (V3)]. Future Perfect: [will have RUN].",
    "ref": null,
    "human_rule": "By the end of… ➔ will have + 3.ª forma (de run: run).",
    "trigger_anchor": "by the end of this sprint ➔ I ______ three sessions ➔ will have run",
    "spanglish_trap": "Escribir \"ran\" como 3.ª forma de run. La 3.ª forma de run es run.",
    "workplace_usage": {
      "scenario": "Objetivos de Sprint en Ciberseguridad",
      "en": "I will have run three security sessions by the end of this sprint.",
      "es": "Habré impartido tres sesiones de capacitación en seguridad para el final de este sprint."
    }
  },
  {
    "id": "it1-mod6-sec1-ex2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the inquiry regarding completion before an event: \"__________ (you/complete) the incident reports before the management meeting begins?\"",
    "options": [
      "Will you complete",
      "Do you complete",
      "Did you complete",
      "Will you have completed"
    ],
    "answer": 3,
    "why_correct": "• Pista: preguntan si algo estará hecho antes de un momento futuro (\"before the management meeting begins\").\n• Regla: pregunta de \"habrás terminado antes de…\" ➔ Will you have + 3.ª forma?\n• Descartas: Will you complete no dice \"antes de\"; Do you y Did you no miran al futuro.",
    "why_wrong": [
      "Incorrecto: Will you complete pregunta si lo harás, no si ya estará hecho.",
      "Incorrecto: Do you complete es presente.",
      "Incorrecto: Did you complete es pasado.",
      "Opción correcta: \"Will you have completed…?\" = \"¿habrás completado…?\"."
    ],
    "tip_es": "Pregunta de meta previa a un evento futuro: [Will you have completed... before... begins?].",
    "ref": null,
    "human_rule": "¿Habrás terminado antes de…? ➔ Will you have + 3.ª forma?",
    "trigger_anchor": "______ the incident reports before the meeting begins? ➔ Will you have completed",
    "spanglish_trap": "Preguntar con Will you complete. Para \"habrás terminado\", Will you have completed.",
    "workplace_usage": {
      "scenario": "Preparación de Informe para el CISO",
      "en": "Will you have completed the incident reports before the meeting begins?",
      "es": "¿Habrás completado los informes de incidentes antes de que comience la reunión?"
    }
  },
  {
    "id": "it1-mod6-sec1-ex2-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with continuous duration: \"They __________ (work on) these new security standards all week by tomorrow.\"",
    "options": [
      "Will have been working on",
      "Will work on",
      "Worked on",
      "Are working on"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"all week by tomorrow\" dice cuánto tiempo llevarán haciéndolo.\n• Regla: \"para mañana llevarán toda la semana trabajando en…\" ➔ will have been + -ing.\n• Descartas: will work on no dice cuánto tiempo; worked on es pasado; are working on es presente.",
    "why_wrong": [
      "Opción correcta: \"will have been working on\" = \"llevarán trabajando en\".",
      "Incorrecto: will work on no dice cuánto tiempo llevarán.",
      "Incorrecto: worked on es pasado.",
      "Incorrecto: are working on es presente."
    ],
    "tip_es": "Duración continua (\"all week\") computada en fecha futura (\"by tomorrow\"): [will have been working on].",
    "ref": null,
    "human_rule": "\"Para entonces llevarán X tiempo…\" ➔ will have been + -ing.",
    "trigger_anchor": "all week by tomorrow ➔ will have been working on",
    "spanglish_trap": "Elegir are working on. Si hay una duración hasta un momento futuro, will have been + -ing.",
    "workplace_usage": {
      "scenario": "Seguimiento de Tareas de Cumplimiento",
      "en": "They will have been working on these security standards all week by tomorrow.",
      "es": "Habrán estado trabajando en estos estándares de seguridad toda la semana para mañana."
    }
  },
  {
    "id": "it1-mod6-sec1-ex2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the milestone expectation: \"We __________ (recommend) the new security enhancements by the time the external audit starts.\"",
    "options": [
      "Will recommend",
      "Will have recommended",
      "Recommend",
      "Are recommending"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"by the time the external audit starts\" fija un momento futuro y pregunta qué ya estará hecho.\n• Regla: \"habremos recomendado para entonces\" ➔ will have + 3.ª forma.\n• Descartas: will recommend y recommend no dicen \"ya\"; are recommending es presente.",
    "why_wrong": [
      "Incorrecto: will recommend no dice que ya estará hecho para entonces.",
      "Opción correcta: \"will have recommended\" = \"habremos recomendado\".",
      "Incorrecto: recommend es presente.",
      "Incorrecto: are recommending es presente."
    ],
    "tip_es": "Acción formal previa al hito de auditoría: [will have recommended].",
    "ref": null,
    "human_rule": "By the time… ➔ will have + 3.ª forma.",
    "trigger_anchor": "by the time the external audit starts ➔ will have recommended",
    "spanglish_trap": "Elegir will recommend. Con \"para cuando empiece\", will have recommended.",
    "workplace_usage": {
      "scenario": "Plan de Mitigación de Auditoría",
      "en": "We will have recommended the new enhancements by the time the audit starts.",
      "es": "Habremos recomendado las nuevas mejoras de seguridad para cuando comience la auditoría externa."
    }
  },
  {
    "id": "it1-mod6-sec2-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the synonym for: \"Enhance the security posture of an organization.\"",
    "options": [
      "Improve",
      "Weaken",
      "Complicate",
      "Obfuscate"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Enhance\" = mejorar.\n• Significado: Improve = mejorar.\n• Descartas: Weaken, Complicate y Obfuscate son lo contrario o distinto.",
    "why_wrong": [
      "Opción correcta: Improve = mejorar.",
      "Incorrecto: Weaken = debilitar.",
      "Incorrecto: Complicate = complicar.",
      "Incorrecto: Obfuscate = ocultar."
    ],
    "tip_es": "Vocabulario estratégico: [Enhance security] = [Improve security].",
    "ref": null,
    "human_rule": "enhance = improve.",
    "trigger_anchor": "enhance ➔ improve",
    "spanglish_trap": "Traducir enhance como \"enhancer\".",
    "workplace_usage": {
      "scenario": "Directrices del CISO",
      "en": "Our primary mandate this quarter is to enhance endpoint security.",
      "es": "Nuestro mandato principal este trimestre es mejorar la seguridad de los endpoints."
    }
  },
  {
    "id": "it1-mod6-sec2-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the colloquial idiom meaning: \"They do not have any clue regarding the incident.\"",
    "options": [
      "They have full forensic evidence.",
      "They don't know anything.",
      "They are writing a detailed whitepaper.",
      "They have detected the source IP address."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"do not have any clue\" = no saben nada.\n• Significado: They don't know anything.\n• Descartas: Evidencia forense, whitepaper e IP detectada significan lo contrario.",
    "why_wrong": [
      "Incorrecto: Tener evidencia es lo contrario.",
      "Opción correcta: No saben nada.",
      "Incorrecto: Escribir un whitepaper no es \"no saber\".",
      "Incorrecto: Detectar la IP es saber."
    ],
    "tip_es": "Expresión coloquial: [Not have any clue] = [Not know anything].",
    "ref": null,
    "human_rule": "no clue = no saber.",
    "trigger_anchor": "no clue ➔ don't know",
    "spanglish_trap": "Traducir clue como \"pista\".",
    "workplace_usage": {
      "scenario": "Análisis Forense Inicial",
      "en": "At first, the junior analysts did not have any clue about the attack vector.",
      "es": "Al principio, los analistas junior no tenían ni la menor idea sobre el vector de ataque."
    }
  },
  {
    "id": "it1-mod6-sec2-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the synonym for: \"You have to use very sophisticated and highly technical language.\"",
    "options": [
      "Rudimentary",
      "Obsolete",
      "Advanced",
      "Informal"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"sophisticated and highly technical\" = avanzado.\n• Significado: Advanced = avanzado.\n• Descartas: Rudimentary, Obsolete e Informal son opuestos.",
    "why_wrong": [
      "Incorrecto: Rudimentary = básico.",
      "Incorrecto: Obsolete = obsoleto.",
      "Opción correcta: Advanced = avanzado.",
      "Incorrecto: Informal = poco formal."
    ],
    "tip_es": "Nivel técnico: [Sophisticated language / architecture] = [Advanced].",
    "ref": null,
    "human_rule": "sophisticated ≈ advanced.",
    "trigger_anchor": "sophisticated ➔ advanced",
    "spanglish_trap": "Traducir sophisticated como \"sofisticado\" en sentido de lujo.",
    "workplace_usage": {
      "scenario": "Comunicación entre Especialistas de Seguridad",
      "en": "Explaining cryptanalysis requires sophisticated and advanced terminology.",
      "es": "Explicar el criptoanálisis requiere una terminología sofisticada y avanzada."
    }
  },
  {
    "id": "it1-mod6-sec2-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the business idiom meaning: \"You have to think about the big picture.\"",
    "options": [
      "The resolution of physical computer screens.",
      "The size of high-resolution graphic posters.",
      "The microscopic details of single line comments.",
      "The overall strategic goals of the company."
    ],
    "answer": 3,
    "why_correct": "• Pista: \"big picture\" = visión general estratégica.\n• Significado: The overall strategic goals of the company.\n• Descartas: Resolución de pantalla, pósters o detalles de comentarios no coinciden.",
    "why_wrong": [
      "Incorrecto: No es resolución de pantalla.",
      "Incorrecto: No es un póster.",
      "Incorrecto: No son los detalles minúsculos.",
      "Opción correcta: Los objetivos estratégicos globales."
    ],
    "tip_es": "Visión estratégica en TI: [The big picture] = The overarching goals of the business.",
    "ref": null,
    "human_rule": "big picture = visión global.",
    "trigger_anchor": "big picture ➔ overall goals",
    "spanglish_trap": "Traducir picture literal.",
    "workplace_usage": {
      "scenario": "Alineación de Seguridad con el Negocio",
      "en": "Security engineers must look at the big picture, aligning defense with business objectives.",
      "es": "Los ingenieros de seguridad deben mirar el panorama general, alineando la defensa con los objetivos del negocio."
    }
  },
  {
    "id": "it1-mod6-sec2-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the meaning of: \"You have to ensure that your approach to the business is secure.\"",
    "options": [
      "Your attitude, strategy, and methodology towards business operations.",
      "The physical journey between your home and the office.",
      "The speed of your internet fiber optic modem.",
      "The brand of computer hardware you purchase."
    ],
    "answer": 0,
    "why_correct": "• Pista: \"approach\" = enfoque.\n• Significado: Your attitude, strategy and methodology.\n• Descartas: Viaje, velocidad de módem o marca de hardware no coinciden.",
    "why_wrong": [
      "Opción correcta: Tu actitud, estrategia y método.",
      "Incorrecto: No es un viaje.",
      "Incorrecto: No es velocidad de módem.",
      "Incorrecto: No es la marca del hardware."
    ],
    "tip_es": "Metodología organizativa: [Approach] = attitude, mindset, and strategy.",
    "ref": null,
    "human_rule": "approach = enfoque.",
    "trigger_anchor": "approach ➔ strategy",
    "spanglish_trap": "Traducir approach como \"acercarse\".",
    "workplace_usage": {
      "scenario": "Cultura de Seguridad Organizacional",
      "en": "A proactive approach ensures vulnerabilities are remediated before exploitation.",
      "es": "Un enfoque proactivo garantiza que las vulnerabilidades se corrijan antes de su explotación."
    }
  },
  {
    "id": "it1-mod6-sec2-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the definition for: \"The database information remained intact following the breach attempt.\"",
    "options": [
      "Completely deleted from storage arrays.",
      "Not broken, damaged, altered, or corrupted.",
      "Publicly published on unauthenticated web servers.",
      "Encrypted by hostile ransomware actors."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"remained intact\" = sin daño.\n• Significado: Not broken, damaged, altered or corrupted.\n• Descartas: Borrado, publicado o cifrado por ransomware es lo contrario.",
    "why_wrong": [
      "Incorrecto: Borrado es lo contrario.",
      "Opción correcta: Sin daño ni alteración.",
      "Incorrecto: Publicado no es intacto.",
      "Incorrecto: Cifrado por ransomware es daño."
    ],
    "tip_es": "Integridad en la tríada CIA: [Intact] = undamaged, unaltered, and complete.",
    "ref": null,
    "human_rule": "intact = sin daño.",
    "trigger_anchor": "intact ➔ not damaged",
    "spanglish_trap": "Confundir intact con \"inactivo\".",
    "workplace_usage": {
      "scenario": "Verificación de Integridad de Datos",
      "en": "Cryptographic hashes confirmed that the customer ledger remained intact.",
      "es": "Los hashes criptográficos confirmaron que el libro mayor de clientes permaneció intacto."
    }
  },
  {
    "id": "it1-mod6-sec2-ex1-q7",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the definition for: \"It shows us how accessible the data repository is.\"",
    "options": [
      "Extremely expensive to purchase.",
      "Visible only under ultraviolet light.",
      "Easy to find, retrieve, and use by authorized parties.",
      "Completely locked away forever without access."
    ],
    "answer": 2,
    "why_correct": "• Pista: \"accessible\" = fácil de acceder.\n• Significado: Easy to find, retrieve and use by authorized parties.\n• Descartas: Caro, invisible o bloqueado es lo contrario.",
    "why_wrong": [
      "Incorrecto: Caro no es accesible.",
      "Incorrecto: Invisible no es accesible.",
      "Opción correcta: Fácil de encontrar y usar.",
      "Incorrecto: Bloqueado es lo contrario."
    ],
    "tip_es": "Tríada CIA (Disponibilidad): [Accessible] = easy to find, access, and utilize.",
    "ref": null,
    "human_rule": "accessible = fácil de acceder.",
    "trigger_anchor": "accessible ➔ easy to retrieve",
    "spanglish_trap": "Pensar que accessible es \"asequible\".",
    "workplace_usage": {
      "scenario": "Disponibilidad de Sistemas",
      "en": "Ensure mission-critical documentation is accessible during network outages.",
      "es": "Asegúrese de que la documentación crítica esté accesible durante las caídas de red."
    }
  },
  {
    "id": "it1-mod6-sec2-ex2-q1",
    "section": "UE",
    "objective": "L1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the interview with the Security Officer, how has the discipline of Information Security evolved historically?",
    "options": [
      "The role of information security has changed dramatically over the past fifteen years.",
      "The role has remained completely static since the invention of the telephone.",
      "Information security is no longer considered necessary for modern corporations.",
      "Security has become entirely automated with zero need for human engineers."
    ],
    "answer": 0,
    "why_correct": "• Pista: Pregunta cómo evolucionó la seguridad de la información.\n• Significado: Su papel ha cambiado drásticamente con el tiempo.\n• Descartas: Estática, innecesaria o totalmente automatizada contradicen.",
    "why_wrong": [
      "Opción correcta: Ha cambiado drásticamente.",
      "Incorrecto: No ha sido estática.",
      "Incorrecto: Sigue siendo necesaria.",
      "Incorrecto: Aún necesita personas."
    ],
    "tip_es": "Evolución histórica: La disciplina ha sufrido una transformación masiva en los últimos 15 años.",
    "ref": null,
    "human_rule": "evolve = cambiar con el tiempo.",
    "trigger_anchor": "evolved ➔ changed dramatically",
    "spanglish_trap": "Creer que la seguridad es igual que antes.",
    "workplace_usage": {
      "scenario": "Historia de la Ciberseguridad",
      "en": "The CISO highlighted that cybersecurity has changed immensely over the last 15 years.",
      "es": "El CISO destacó que la ciberseguridad ha cambiado inmensamente durante los últimos 15 años."
    }
  },
  {
    "id": "it1-mod6-sec2-ex2-q2",
    "section": "UE",
    "objective": "L2",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What communication strategy does the Security Officer recommend when dealing with diverse internal departments?",
    "options": [
      "Always use dense cryptographic equations with everyone to show dominance.",
      "It is important to tailor different levels of technical vocabulary depending on the audience.",
      "Refuse to speak to any department outside of the SOC.",
      "Never explain technical reasons for security decisions."
    ],
    "answer": 1,
    "why_correct": "• Pista: Estrategia con departamentos: adaptar el vocabulario técnico.\n• Significado: Ajustar el nivel de vocabulario técnico según la audiencia.\n• Descartas: Ecuaciones densas, no hablar con otros o no explicar son malas ideas.",
    "why_wrong": [
      "Incorrecto: Las ecuaciones densas no ayudan.",
      "Opción correcta: Adaptar el vocabulario a cada audiencia.",
      "Incorrecto: Rechazar hablar daña la relación.",
      "Incorrecto: No explicar genera rechazo."
    ],
    "tip_es": "Comunicación en seguridad: Adaptar el nivel de tecnicismo a la audiencia (técnicos vs. directivos).",
    "ref": null,
    "human_rule": "adapta el lenguaje a quien escucha.",
    "trigger_anchor": "diverse departments ➔ tailor vocabulary",
    "spanglish_trap": "Creer que la jerga impresiona.",
    "workplace_usage": {
      "scenario": "Diplomacia y Soft Skills en TI",
      "en": "Good security managers adapt their technical explanations to non-engineering stakeholders.",
      "es": "Los buenos gerentes de seguridad adaptan sus explicaciones técnicas a los interesados no pertenecientes a la ingeniería."
    }
  },
  {
    "id": "it1-mod6-sec2-ex2-q3",
    "section": "UE",
    "objective": "L3",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What responsibility does the Security Officer state regarding small businesses and client data?",
    "options": [
      "Small companies are exempt from all data privacy regulations.",
      "Small companies do not need to implement firewalls or password policies.",
      "A small company is just as legally and ethically responsible for the data of its clients as a massive enterprise.",
      "Small companies are allowed to sell customer passwords to third parties."
    ],
    "answer": 2,
    "why_correct": "• Pista: Pequeñas empresas y datos de clientes: misma responsabilidad.\n• Significado: Una empresa pequeña es igual de responsable legal y éticamente.\n• Descartas: Exención, no usar firewalls o vender contraseñas son falsos.",
    "why_wrong": [
      "Incorrecto: Nadie está exento.",
      "Incorrecto: Necesitan firewalls y contraseñas.",
      "Opción correcta: Igual de responsable legal y éticamente.",
      "Incorrecto: Vender contraseñas es ilegal."
    ],
    "tip_es": "Responsabilidad universal: Las pequeñas empresas tienen la misma responsabilidad de custodia de datos.",
    "ref": null,
    "human_rule": "tamaño pequeño ≠ menos responsabilidad.",
    "trigger_anchor": "small business ➔ same responsibility",
    "spanglish_trap": "Pensar que lo pequeño está exento.",
    "workplace_usage": {
      "scenario": "Cumplimiento Legal para Startups",
      "en": "Regardless of company size, we are strictly responsible for safeguarding customer records.",
      "es": "Independientemente del tamaño de la empresa, somos estrictamente responsables de proteger los registros de los clientes."
    }
  },
  {
    "id": "it1-mod6-sec2-ex2-q4",
    "section": "UE",
    "objective": "L4",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the foundational terminology of Information Security, what does the core acronym \"CIA\" stand for?",
    "options": [
      "Central Intelligence Agency.",
      "Computer Incident Automation.",
      "Cloud Infrastructure Architecture.",
      "Confidentiality, Integrity, and Availability."
    ],
    "answer": 3,
    "why_correct": "• Pista: CIA es una sigla de seguridad.\n• Significado: Confidentiality, Integrity, Availability.\n• Descartas: Central Intelligence Agency u otras expansiones no son de InfoSec.",
    "why_wrong": [
      "Incorrecto: No es la agencia.",
      "Incorrecto: No es automatización de incidentes.",
      "Incorrecto: No es arquitectura de nube.",
      "Opción correcta: Confidencialidad, Integridad y Disponibilidad."
    ],
    "tip_es": "Pilar fundacional de la certificación B2 de TI: [CIA Triad] = Confidentiality, Integrity, Availability.",
    "ref": null,
    "human_rule": "CIA = Confidencialidad, Integridad, Disponibilidad.",
    "trigger_anchor": "CIA in InfoSec ➔ Confidentiality, Integrity, Availability",
    "spanglish_trap": "Pensar en la agencia.",
    "workplace_usage": {
      "scenario": "Fundamentos de Certificación de Seguridad",
      "en": "Every security control must support at least one pillar of the CIA triad.",
      "es": "Cada control de seguridad debe respaldar al menos un pilar de la tríada CIA."
    }
  },
  {
    "id": "it1-mod6-sec2-ex2-q5",
    "section": "UE",
    "objective": "L4",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What is the precise technical definition of \"Information Integrity\" in cybersecurity?",
    "options": [
      "It means that the information must remain accurate, complete, and protected against unauthorized modification or damage.",
      "It means that data must be visible to everyone on the public internet.",
      "It means that servers must never be rebooted under any circumstance.",
      "It means that all source code must be compiled strictly into JavaScript."
    ],
    "answer": 0,
    "why_correct": "• Pista: Integridad = datos exactos y completos.\n• Significado: La información debe permanecer exacta, completa y sin alteraciones.\n• Descartas: Visible a todos, nunca reiniciar servidores o compilar código no es integridad.",
    "why_wrong": [
      "Opción correcta: Información exacta, completa y sin alteraciones.",
      "Incorrecto: Visible para todos es lo contrario de confidencialidad.",
      "Incorrecto: No tiene relación con reinicios.",
      "Incorrecto: No tiene relación con compilar."
    ],
    "tip_es": "Definición de Integridad: Certeza de que la información no ha sido alterada, corrompida ni falsificada.",
    "ref": null,
    "human_rule": "integrity = datos sin alterar.",
    "trigger_anchor": "integrity ➔ accurate and complete",
    "spanglish_trap": "Entender integrity como honestidad.",
    "workplace_usage": {
      "scenario": "Garantía Criptográfica de Archivos",
      "en": "Information integrity is verified using cryptographic hash checksums.",
      "es": "La integridad de la información se verifica mediante sumas de verificación de hash criptográfico."
    }
  },
  {
    "id": "it1-mod6-sec3-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the imminent past structure: \"I was about __________ the spyware software when you came in.\"",
    "options": [
      "To uninstall",
      "Uninstalling",
      "Uninstall",
      "Uninstalled"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"I was about…\" y después viene el verbo (\"the spyware software\" sigue).\n• Regla: \"estaba a punto de\" ➔ was about TO + verbo base.\n• Descartas: \"about uninstalling\" y \"about uninstall\" no llevan to; \"about uninstalled\" tampoco.",
    "why_wrong": [
      "Opción correcta: \"about to uninstall\" = \"a punto de desinstalar\".",
      "Incorrecto: después de about va \"to\" + verbo, no -ing.",
      "Incorrecto: falta \"to\" antes del verbo.",
      "Incorrecto: después de about to va el verbo base, no el pasado."
    ],
    "tip_es": "Contraste clave: [was about TO + infinitivo] vs. [was on the point of + GERUNDIO (-ing)].",
    "ref": null,
    "human_rule": "\"Estaba a punto de\" + verbo ➔ was about to + verbo base.",
    "trigger_anchor": "I was about ______ the software ➔ to uninstall",
    "spanglish_trap": "Poner -ing después de about. Con about va to + verbo base.",
    "workplace_usage": {
      "scenario": "Eliminación de Malware",
      "en": "I was about to uninstall the spyware when the system rebooted.",
      "es": "Estaba a punto de desinstalar el software espía cuando el sistema se reinició."
    }
  },
  {
    "id": "it1-mod6-sec3-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"They __________ to conduct the penetration test when the unexpected network storm hit.\"",
    "options": [
      "Were on the point of",
      "Were about",
      "About were",
      "Are about"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco ya viene \"to conduct\".\n• Regla: \"estaban a punto de\" + to + verbo ➔ were about (to).\n• Descartas: \"were on the point of\" va con of + -ing; \"about were\" tiene el orden roto; are about es presente.",
    "why_wrong": [
      "Incorrecto: \"on the point of\" va con -ing, no con \"to\".",
      "Opción correcta: \"were about to conduct\" = \"estaban a punto de realizar\".",
      "Incorrecto: \"About were\" tiene el orden roto.",
      "Incorrecto: Are about habla del presente; la frase está en pasado."
    ],
    "tip_es": "Si detrás ves [to + infinitivo]: la opción es [were about].",
    "ref": null,
    "human_rule": "\"Estaban a punto de\" + verbo ➔ were about to + verbo base.",
    "trigger_anchor": "They ______ to conduct the test (ya viene to) ➔ were about",
    "spanglish_trap": "Mezclar las dos estructuras. Con to + verbo va about; con -ing va on the point of.",
    "workplace_usage": {
      "scenario": "Pruebas de Intrusión Interrumpidas",
      "en": "They were about to conduct the penetration test when the server crashed.",
      "es": "Estaban a punto de realizar la prueba de penetración cuando se produjo la tormenta de red."
    }
  },
  {
    "id": "it1-mod6-sec3-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the correct verb form: \"I was on the point of __________ the app, but then I realized it was an untrusted APK.\"",
    "options": [
      "To download",
      "Download",
      "Downloading",
      "Downloaded"
    ],
    "answer": 2,
    "why_correct": "• Pista: después de \"on the point of\" va un verbo con -ing.\n• Regla: \"a punto de\" ➔ on the point of + -ing.\n• Descartas: \"To download\", Download y Downloaded no encajan después de \"of\".",
    "why_wrong": [
      "Incorrecto: después de \"of\" no va \"to\".",
      "Incorrecto: después de \"of\" va -ing, no el verbo base.",
      "Opción correcta: \"on the point of downloading\" = \"a punto de descargar\".",
      "Incorrecto: después de \"of\" va -ing, no el pasado."
    ],
    "tip_es": "Tras la preposición \"of\": [on the point of + VERBO-ING] (\"on the point of downloading\").",
    "ref": null,
    "human_rule": "on the point of + verbo con -ing.",
    "trigger_anchor": "on the point of ______ the app ➔ downloading",
    "spanglish_trap": "Poner to después de of. Después de of, va -ing.",
    "workplace_usage": {
      "scenario": "Prevención de Descarga Maliciosa",
      "en": "I was on the point of downloading the app, but noticed the invalid certificate.",
      "es": "Estaba a punto de descargar la aplicación, pero me di cuenta de que era un APK no confiable."
    }
  },
  {
    "id": "it1-mod6-sec3-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the report statement: \"I just saw him. He was about to __________ the security breach to the compliance officer.\"",
    "options": [
      "Reporting",
      "Reported",
      "To report",
      "Report"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"was about to\" ya trae el to; después va el verbo base.\n• Regla: \"a punto de\" ➔ about to + verbo base (report).\n• Descartas: Reporting y Reported no van después de \"to\"; \"To report\" repite el to.",
    "why_wrong": [
      "Incorrecto: después de to va el verbo base, no -ing.",
      "Incorrecto: después de to va el verbo base, no el pasado.",
      "Incorrecto: \"to\" ya está en la frase; repetirlo sobra.",
      "Opción correcta: \"about to report\" = \"a punto de reportar\"."
    ],
    "tip_es": "Si el enunciado ya incluye \"about to\", solo añade el verbo en forma base (\"report\").",
    "ref": null,
    "human_rule": "about to + verbo base.",
    "trigger_anchor": "was about to ______ the breach ➔ report",
    "spanglish_trap": "Repetir el to. Si la frase ya dice \"about to\", solo falta el verbo base.",
    "workplace_usage": {
      "scenario": "Escalación Inmediata de Incidentes",
      "en": "He was about to report the incident to the SOC manager.",
      "es": "Lo acabo de ver. Estaba a punto de informar del incidente al responsable de cumplimiento."
    }
  },
  {
    "id": "it1-mod6-sec3-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the appropriate phrase: \"The security manager __________ making these critical recommendations when the audit began.\"",
    "options": [
      "Was on the point of",
      "Was about to",
      "Were on the point of",
      "About was"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco viene \"making\", con -ing.\n• Regla: \"estaba a punto de\" + -ing ➔ was on the point of.\n• Descartas: \"was about to\" va con verbo base; \"were\" no concuerda con manager; \"about was\" tiene el orden roto.",
    "why_wrong": [
      "Opción correcta: \"was on the point of making\" = \"estaba a punto de hacer\".",
      "Incorrecto: \"was about to\" va con el verbo base, no con -ing.",
      "Incorrecto: were no concuerda con \"manager\" (singular).",
      "Incorrecto: \"About was\" tiene el orden roto."
    ],
    "tip_es": "Sujeto singular + gerundio (\"making\"): [Was on the point of].",
    "ref": null,
    "human_rule": "\"A punto de\" + -ing ➔ was on the point of.",
    "trigger_anchor": "______ making these recommendations (-ing) ➔ was on the point of",
    "spanglish_trap": "Elegir about to porque es más corto. Con -ing va on the point of.",
    "workplace_usage": {
      "scenario": "Reunión de Cumplimiento Regulatorio",
      "en": "The manager was on the point of making recommendations when the audit began.",
      "es": "El responsable de seguridad estaba a punto de hacer estas recomendaciones cuando comenzó la auditoría."
    }
  },
  {
    "id": "it1-mod6-sec3-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the passive imminent sentence: \"The tests __________ run when the system completely failed.\"",
    "options": [
      "Were on the point of",
      "Were about to be",
      "Was about to be",
      "Were about being"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"The tests\" recibe la acción (\"iban a ser ejecutadas\") y es plural.\n• Regla: \"estaban a punto de ser…\" ➔ were about to be + 3.ª forma.\n• Descartas: \"were on the point of\" va con -ing; \"was\" no concuerda con tests; \"were about being\" no existe.",
    "why_wrong": [
      "Incorrecto: \"on the point of\" va con -ing (being run), no con el verbo base.",
      "Opción correcta: \"were about to be run\" = \"estaban a punto de ejecutarse\".",
      "Incorrecto: was no concuerda con \"tests\" (plural).",
      "Incorrecto: \"were about being\" no existe."
    ],
    "tip_es": "Pasiva inminente en plural: [Were about to be + participio pasado].",
    "ref": null,
    "human_rule": "\"Estaban a punto de ser…\" ➔ were about to be + 3.ª forma.",
    "trigger_anchor": "The tests ______ run (pasiva, plural) ➔ were about to be",
    "spanglish_trap": "Olvidar \"be\". Si las pruebas reciben la acción, es were about to BE run.",
    "workplace_usage": {
      "scenario": "Testing de Integración Interrumpido",
      "en": "The tests were about to be run when the cluster crashed.",
      "es": "Las pruebas estaban a punto de ser ejecutadas cuando el sistema falló por completo."
    }
  },
  {
    "id": "it1-mod6-sec3-ex2-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the interruption complaint: \"I wish you hadn't interrupted me. I __________ finishing this vulnerability report.\"",
    "options": [
      "Was on the point of",
      "Was about to",
      "Were on the point of",
      "Am about to"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco viene \"finishing\", con -ing.\n• Regla: \"estaba a punto de\" + -ing ➔ was on the point of.\n• Descartas: \"was about to\" va con verbo base; \"were\" no concuerda con I; \"am about to\" es presente.",
    "why_wrong": [
      "Opción correcta: \"was on the point of finishing\" = \"estaba a punto de terminar\".",
      "Incorrecto: \"was about to\" va con el verbo base, no con -ing.",
      "Incorrecto: were no concuerda con \"I\".",
      "Incorrecto: \"am about to\" es presente; la frase habla de algo que ya pasó."
    ],
    "tip_es": "Delante de un gerundio (\"finishing\"): usa siempre [was on the point of].",
    "ref": null,
    "human_rule": "\"A punto de\" + -ing ➔ was on the point of.",
    "trigger_anchor": "I ______ finishing this report (-ing) ➔ was on the point of",
    "spanglish_trap": "Poner el presente. Si ya te interrumpieron, la frase va en pasado.",
    "workplace_usage": {
      "scenario": "Concentración en Redacción Técnica",
      "en": "I wish you hadn't interrupted me. I was on the point of finishing the report.",
      "es": "Ojalá no me hubieras interrumpido. Estaba a punto de terminar este informe de vulnerabilidades."
    }
  },
  {
    "id": "it1-mod6-sec3-ex2-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the discovery sentence: \"As we __________ report our findings, it became obvious that we had missed a critical log file.\"",
    "options": [
      "Were on the point of",
      "Were about to",
      "Was about to",
      "Are about to"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"report\", un verbo base.\n• Regla: \"estábamos a punto de\" + verbo base ➔ were about to.\n• Descartas: \"were on the point of\" va con -ing; \"was\" no concuerda con we; \"are about to\" es presente.",
    "why_wrong": [
      "Incorrecto: \"on the point of\" va con -ing, no con el verbo base.",
      "Opción correcta: \"were about to report\" = \"estábamos a punto de reportar\".",
      "Incorrecto: was no concuerda con \"we\".",
      "Incorrecto: \"are about to\" es presente."
    ],
    "tip_es": "Delante de un infinitivo sin -ing (\"report\"): usa [were about to].",
    "ref": null,
    "human_rule": "\"Estábamos a punto de\" + verbo base ➔ were about to.",
    "trigger_anchor": "As we ______ report our findings (verbo base) ➔ were about to",
    "spanglish_trap": "Usar was con we. We siempre va con were en pasado.",
    "workplace_usage": {
      "scenario": "Presentación de Resultados Forenses",
      "en": "As we were about to report our findings, we discovered another log source.",
      "es": "Cuando estábamos a punto de informar nuestros hallazgos, se hizo evidente que habíamos pasado por alto un registro crítico."
    }
  },
  {
    "id": "it1-mod6-sec3-ex2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence with the correct passive gerund: \"The system was on the point of __________ (be) implemented when the critical vulnerability was discovered.\"",
    "options": [
      "To be",
      "Be",
      "Being",
      "Been"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"on the point of\" y después viene un verbo con -ing; aquí el sistema recibe la acción.\n• Regla: \"a punto de ser…\" ➔ on the point of BEING + 3.ª forma.\n• Descartas: \"To be\", Be y Been no encajan después de \"of\".",
    "why_wrong": [
      "Incorrecto: después de \"of\" no va \"to\".",
      "Incorrecto: después de \"of\" va -ing, no el verbo base.",
      "Opción correcta: \"on the point of being implemented\" = \"a punto de implementarse\".",
      "Incorrecto: después de \"of\" va -ing (being), no been."
    ],
    "tip_es": "Pasiva tras preposición: [on the point of BEING + participio].",
    "ref": null,
    "human_rule": "on the point of being + 3.ª forma.",
    "trigger_anchor": "on the point of ______ implemented (pasiva) ➔ being",
    "spanglish_trap": "Confundir being con been. Being va después de of; been va con have.",
    "workplace_usage": {
      "scenario": "Cancelación de Despliegue en Producción",
      "en": "The system was on the point of being implemented when the bug was found.",
      "es": "El sistema estaba a punto de ser implementado cuando se descubrió la vulnerabilidad crítica."
    }
  },
  {
    "id": "it1-mod6-sec3-ex2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"I wish I could have joined the meeting, but we were about __________ our emergency on-call shift.\"",
    "options": [
      "Beginning",
      "Begin",
      "Began",
      "To begin"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"were about\" y después viene \"our emergency shift\".\n• Regla: \"estábamos a punto de\" ➔ were about TO + verbo base.\n• Descartas: Beginning, Begin y Began no llevan to.",
    "why_wrong": [
      "Incorrecto: después de about va \"to\" + verbo, no -ing.",
      "Incorrecto: falta \"to\" antes del verbo.",
      "Incorrecto: después de about va \"to\" + verbo, no el pasado.",
      "Opción correcta: \"about to begin\" = \"a punto de comenzar\"."
    ],
    "tip_es": "Fórmula fija: [were about + TO + infinitivo].",
    "ref": null,
    "human_rule": "about to + verbo base.",
    "trigger_anchor": "we were about ______ our shift ➔ to begin",
    "spanglish_trap": "Poner -ing después de about. Con about va to + verbo base.",
    "workplace_usage": {
      "scenario": "Disponibilidad de Guardia NOC",
      "en": "I could not join because we were about to begin our shift.",
      "es": "Ojalá hubiera podido unirme a la reunión, pero estábamos a punto de comenzar nuestro turno de guardia."
    }
  },
  {
    "id": "it1-mod6-sec3-ex2-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"I __________ start running the penetration test when I was urgently called away to a major incident.\"",
    "options": [
      "Was about to",
      "Was on the point of",
      "Were about to",
      "Am about to"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco viene \"start\", un verbo base.\n• Regla: \"estaba a punto de\" + verbo base ➔ was about to.\n• Descartas: \"was on the point of\" va con -ing; \"were\" no concuerda con I; \"am about to\" es presente.",
    "why_wrong": [
      "Opción correcta: \"was about to start\" = \"estaba a punto de empezar\".",
      "Incorrecto: \"on the point of\" va con -ing, no con el verbo base.",
      "Incorrecto: were no concuerda con \"I\".",
      "Incorrecto: \"am about to\" es presente."
    ],
    "tip_es": "Infinitivo base (\"start\") + sujeto \"I\" en pasado = [Was about to].",
    "ref": null,
    "human_rule": "\"Estaba a punto de\" + verbo base ➔ was about to.",
    "trigger_anchor": "I ______ start running the test (verbo base) ➔ was about to",
    "spanglish_trap": "Elegir on the point of porque suena formal. Con el verbo base va about to.",
    "workplace_usage": {
      "scenario": "Gestión de Prioridades en el SOC",
      "en": "I was about to start the assessment when the major incident occurred.",
      "es": "Estaba a punto de comenzar a ejecutar la prueba de penetración cuando me llamaron urgentemente por un incidente mayor."
    }
  },
  {
    "id": "it1-mod6-sec3-ex2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"They __________ delivering the training session when they had to evacuate the building.\"",
    "options": [
      "Were about to",
      "Were on the point of",
      "Was on the point of",
      "About were"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"delivering\", con -ing.\n• Regla: \"estaban a punto de\" + -ing ➔ were on the point of.\n• Descartas: \"were about to\" va con verbo base; \"was\" no concuerda con they; \"about were\" tiene el orden roto.",
    "why_wrong": [
      "Incorrecto: \"were about to\" va con el verbo base, no con -ing.",
      "Opción correcta: \"were on the point of delivering\" = \"estaban a punto de impartir\".",
      "Incorrecto: was no concuerda con \"they\".",
      "Incorrecto: \"About were\" tiene el orden roto."
    ],
    "tip_es": "Sujeto plural + gerundio (\"delivering\") = [Were on the point of].",
    "ref": null,
    "human_rule": "\"A punto de\" + -ing ➔ were on the point of.",
    "trigger_anchor": "They ______ delivering the session (-ing) ➔ were on the point of",
    "spanglish_trap": "Elegir about to. Si el verbo va con -ing, usa on the point of.",
    "workplace_usage": {
      "scenario": "Evacuación de Edificio y Planes de Continuidad",
      "en": "They were on the point of delivering the training session when they had to evacuate.",
      "es": "Estaban a punto de impartir la sesión de capacitación cuando tuvieron que evacuar el edificio."
    }
  },
  {
    "id": "it1-mod6-sec4-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the definition for: \"Spouses (in the context of remote work computer usage policies).\"",
    "options": [
      "Husband or wife of an employee.",
      "External contractors from IT consulting agencies.",
      "Cryptographic hardware security modules.",
      "Automated virtual desktop instances."
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Spouses\" = esposos.\n• Significado: Husband or wife of an employee.\n• Descartas: Contratistas, módulos de hardware e instancias virtuales no son cónyuges.",
    "why_wrong": [
      "Opción correcta: Esposo o esposa.",
      "Incorrecto: Contratistas son externos.",
      "Incorrecto: HSM es hardware.",
      "Incorrecto: Escritorios virtuales son software."
    ],
    "tip_es": "Política de puesto de trabajo limpio: Queda prohibido prestar la laptop de trabajo a familiares o cónyuges (\"spouses\").",
    "ref": null,
    "human_rule": "spouse = cónyuge.",
    "trigger_anchor": "spouses ➔ husband or wife",
    "spanglish_trap": "No conocer la palabra.",
    "workplace_usage": {
      "scenario": "Política de Seguridad para Teletrabajo",
      "en": "Never allow kids or your spouses to use your corporate workstation.",
      "es": "Nunca permita que sus hijos o sus cónyuges utilicen su estación de trabajo corporativa."
    }
  },
  {
    "id": "it1-mod6-sec4-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical expansion for: \"VPN.\"",
    "options": [
      "Verified Protocol Node",
      "Virtual Private Network",
      "Variable Packet Neutralizer",
      "Vector Protection Network"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"VPN\" = Virtual Private Network.\n• Significado: Red privada virtual.\n• Descartas: Las otras expansiones no existen.",
    "why_wrong": [
      "Incorrecto: No existe \"Verified Protocol Node\".",
      "Opción correcta: Virtual Private Network.",
      "Incorrecto: No existe \"Variable Packet Neutralizer\".",
      "Incorrecto: No existe \"Vector Protection Network\"."
    ],
    "tip_es": "Acrónimo fundamental de redes: [VPN] = Virtual Private Network.",
    "ref": null,
    "human_rule": "VPN = Virtual Private Network.",
    "trigger_anchor": "VPN ➔ Virtual Private Network",
    "spanglish_trap": "Inventar la sigla.",
    "workplace_usage": {
      "scenario": "Acceso Remoto Seguro",
      "en": "Remote employees must connect through the enterprise Virtual Private Network.",
      "es": "Los empleados remotos deben conectarse a través de la Red Privada Virtual de la empresa."
    }
  },
  {
    "id": "it1-mod6-sec4-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical definition for: \"Encrypt data.\"",
    "options": [
      "To physically delete files from the hard drive with magnets.",
      "To print documents onto paper and file them in locked cabinets.",
      "To transform readable information into an unreadable cipher format using an encryption algorithm and key.",
      "To publish credentials onto social media profiles."
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Encrypt\" = cifrar.\n• Significado: Convertir información legible en código ilegible.\n• Descartas: Borrar con imanes, imprimir o publicar no es cifrar.",
    "why_wrong": [
      "Incorrecto: Borrar con imanes no es cifrar.",
      "Incorrecto: Imprimir no es cifrar.",
      "Opción correcta: Convertir en cifrado ilegible.",
      "Incorrecto: Publicar credenciales es peligroso."
    ],
    "tip_es": "Fundamento criptográfico: [Encrypt] = transformar datos legibles en código ilegible.",
    "ref": null,
    "human_rule": "encrypt = hacer ilegible con una clave.",
    "trigger_anchor": "encrypt ➔ unreadable cipher",
    "spanglish_trap": "Confundir cifrar con borrar.",
    "workplace_usage": {
      "scenario": "Cifrado en Tránsito y en Reposo",
      "en": "Always encrypt customer data before transferring it across the network.",
      "es": "Siempre ciffre los datos de los clientes antes de transferirlos a través de la red."
    }
  },
  {
    "id": "it1-mod6-sec4-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical definition for: \"Decrypt data.\"",
    "options": [
      "To compress large video files into ZIP archives.",
      "To infect an operating system with malware.",
      "To format the boot sector of a server.",
      "To convert ciphertext back into its original readable plaintext format using the matching cryptographic key."
    ],
    "answer": 3,
    "why_correct": "• Pista: \"Decrypt\" = descifrar.\n• Significado: Convertir texto cifrado de nuevo a texto legible.\n• Descartas: Comprimir, infectar o formatear no son descifrar.",
    "why_wrong": [
      "Incorrecto: Comprimir no es descifrar.",
      "Incorrecto: Infectar no es descifrar.",
      "Incorrecto: Formatear no es descifrar.",
      "Opción correcta: Volver a texto legible."
    ],
    "tip_es": "Inverso de encrypt: [Decrypt] = hacer legible nuevamente el mensaje cifrado.",
    "ref": null,
    "human_rule": "decrypt = volver legible.",
    "trigger_anchor": "decrypt ➔ ciphertext to plaintext",
    "spanglish_trap": "Confundir decrypt con decompress.",
    "workplace_usage": {
      "scenario": "Recepción de Mensajes Cifrados",
      "en": "Only authorized recipients with the private key can decrypt the data.",
      "es": "Solo los destinatarios autorizados con la clave privada pueden descifrar los datos."
    }
  },
  {
    "id": "it1-mod6-sec4-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the definition for: \"A reversible cryptographic or mathematical operation.\"",
    "options": [
      "Able to perform the transformation in the opposite direction back to the original state.",
      "An operation that permanently destroys the input data.",
      "A one-way cryptographic hash function like SHA-256.",
      "A physical fuse that burns out when high voltage is detected."
    ],
    "answer": 0,
    "why_correct": "• Pista: \"reversible\" = se puede deshacer.\n• Significado: Se puede realizar la transformación en sentido opuesto.\n• Descartas: Destruir datos, hash de un solo sentido o fusible no son reversibles.",
    "why_wrong": [
      "Opción correcta: Se puede hacer en sentido opuesto.",
      "Incorrecto: Destruir datos es irreversible.",
      "Incorrecto: Un hash es de un solo sentido.",
      "Incorrecto: Un fusible quemado es irreversible."
    ],
    "tip_es": "Criptografía: El cifrado simétrico es [reversible] (cifra y descifra con la misma clave).",
    "ref": null,
    "human_rule": "reversible = se puede revertir.",
    "trigger_anchor": "reversible ➔ opposite direction",
    "spanglish_trap": "Pensar que un hash se puede revertir.",
    "workplace_usage": {
      "scenario": "Cifrado Simétrico",
      "en": "Symmetric encryption is reversible using the shared secret key.",
      "es": "El cifrado simétrico es reversible utilizando la clave secreta compartida."
    }
  },
  {
    "id": "it1-mod6-sec4-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the definition for: \"Phishing incidents.\"",
    "options": [
      "Physically stealing laptop computers from corporate offices.",
      "Sending deceptive fraudulent messages to trick victims into revealing sensitive credentials or downloading malware.",
      "Installing fiber optic cables under sea water.",
      "Optimizing MySQL queries to increase database throughput."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Phishing incidents\": engaño para robar credenciales.\n• Significado: Mensajes fraudulentos que engañan a víctimas.\n• Descartas: Robar laptops, instalar fibra o optimizar MySQL no son phishing.",
    "why_wrong": [
      "Incorrecto: Robar laptops es robo físico.",
      "Opción correcta: Enviar mensajes engañosos.",
      "Incorrecto: Instalar fibra no es phishing.",
      "Incorrecto: Optimizar MySQL no es phishing."
    ],
    "tip_es": "Vector de amenaza #1: [Phishing] = engaño mediante mensajes fraudulentos para robar credenciales.",
    "ref": null,
    "human_rule": "phishing = mensajes engañosos.",
    "trigger_anchor": "phishing ➔ deceptive messages",
    "spanglish_trap": "Confundir phishing con hackeo físico.",
    "workplace_usage": {
      "scenario": "Respuesta ante Incidentes en el SOC",
      "en": "The SOC reported that 90 percent of initial intrusions start with phishing incidents.",
      "es": "El SOC informó que el 90 por ciento de las intrusiones iniciales comienzan con incidentes de phishing."
    }
  },
  {
    "id": "it1-mod6-sec4-ex1-q7",
    "section": "UE",
    "objective": "UE1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the synonym for: \"Hostile attacker / Threat actor (in risk assessment context).\"",
    "options": [
      "A certified external auditor helping the company.",
      "A hardware technician replacing a power supply.",
      "A dangerous adversary seeking unauthorized access or damage.",
      "An automated backup scheduling service."
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Hostile attacker / threat actor\": adversario.\n• Significado: Un adversario peligroso que busca acceso.\n• Descartas: Auditor, técnico de hardware o servicio de backup no son atacantes.",
    "why_wrong": [
      "Incorrecto: El auditor ayuda.",
      "Incorrecto: El técnico repara.",
      "Opción correcta: Adversario peligroso.",
      "Incorrecto: El backup es un servicio."
    ],
    "tip_es": "Actor de amenaza: [Attacker] = dangerous adversary / threat actor.",
    "ref": null,
    "human_rule": "threat actor = atacante.",
    "trigger_anchor": "threat actor ➔ adversary",
    "spanglish_trap": "Traducir actor como \"actor de cine\".",
    "workplace_usage": {
      "scenario": "Modelado de Amenazas (Threat Modeling)",
      "en": "We model our defenses assuming a highly sophisticated and dangerous attacker.",
      "es": "Modelamos nuestras defensas asumiendo un atacante altamente sofisticado y peligroso."
    }
  },
  {
    "id": "it1-mod6-sec4-ex2-q1",
    "section": "UE",
    "objective": "L1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What strict operational directive does the Security Officer give regarding work devices at home?",
    "options": [
      "Family members and spouses must not be allowed to use your work computer under any circumstances.",
      "Employees should let their children play video games on company laptops.",
      "Employees must disable their home Wi-Fi routers permanently.",
      "Laptops must be powered off for 23 hours every day."
    ],
    "answer": 0,
    "why_correct": "• Pista: Directiva estricta sobre dispositivos de trabajo en casa.\n• Significado: Familiares y cónyuges no deben usar el equipo de trabajo.\n• Descartas: Dejar jugar a los niños, apagar el router o apagar el laptop 23 horas son absurdos.",
    "why_wrong": [
      "Opción correcta: Familiares no deben usar el equipo de trabajo.",
      "Incorrecto: Dejar jugar a los niños es riesgoso.",
      "Incorrecto: Desactivar el router no es la directiva.",
      "Incorrecto: Apagar 23 horas no es realista."
    ],
    "tip_es": "Política de endpoint remoto: Cero uso compartido de equipos corporativos con familiares o terceros.",
    "ref": null,
    "human_rule": "equipo de trabajo = solo para ti.",
    "trigger_anchor": "work device at home ➔ no family use",
    "spanglish_trap": "Pensar que casa es zona segura.",
    "workplace_usage": {
      "scenario": "Capacitación de Teletrabajo",
      "en": "The policy states family members should not use your work computer.",
      "es": "La política establece que los miembros de la familia no deben usar su computadora de trabajo."
    }
  },
  {
    "id": "it1-mod6-sec4-ex2-q2",
    "section": "UE",
    "objective": "L2",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Where does the Security Officer recommend storing sensitive information when working remotely?",
    "options": [
      "Storing plaintext passwords on unencrypted USB flash drives.",
      "Storing strongly encrypted information in approved enterprise cloud repositories.",
      "Writing sensitive credentials on office whiteboards.",
      "Uploading raw customer files to anonymous public file-sharing websites."
    ],
    "answer": 1,
    "why_correct": "• Pista: Dónde guardar información sensible a distancia.\n• Significado: Información fuertemente cifrada en almacenamiento corporativo aprobado.\n• Descartas: USB sin cifrar, pizarras o sitios públicos son inseguros.",
    "why_wrong": [
      "Incorrecto: USB sin cifrar es inseguro.",
      "Opción correcta: Cifrada en almacenamiento aprobado.",
      "Incorrecto: Una pizarra es insegura.",
      "Incorrecto: Sitios públicos son inseguros."
    ],
    "tip_es": "Custodia segura en trabajo remoto: Almacenar la información cifrada en repositorios cloud empresariales aprobados.",
    "ref": null,
    "human_rule": "datos sensibles = cifrados y aprobados.",
    "trigger_anchor": "remote work ➔ encrypted approved storage",
    "spanglish_trap": "Elegir lo más cómodo.",
    "workplace_usage": {
      "scenario": "Almacenamiento Cloud Seguro",
      "en": "The Security Officer recommends storing encrypted information in enterprise cloud buckets.",
      "es": "El responsable de seguridad recomienda almacenar la información cifrada en la nube empresarial."
    }
  },
  {
    "id": "it1-mod6-sec4-ex2-q3",
    "section": "UE",
    "objective": "L3",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "How does asymmetric encryption operate technically according to the interview?",
    "options": [
      "It uses only one single shared password that everyone knows.",
      "It requires zero mathematical calculations on the processor.",
      "It requires a mathematically linked pair of keys: a public key and a private key.",
      "It requires printing physical punch cards with holes."
    ],
    "answer": 2,
    "why_correct": "• Pista: Asimétrico = par de claves.\n• Significado: Usa un par de claves matemáticamente vinculadas, una pública y una privada.\n• Descartas: Una sola contraseña compartida, cero cálculo o tarjetas perforadas no es asimétrico.",
    "why_wrong": [
      "Incorrecto: Una sola clave compartida es simétrico.",
      "Incorrecto: Sí requiere cálculos.",
      "Opción correcta: Par de claves vinculadas.",
      "Incorrecto: Las tarjetas perforadas no se usan."
    ],
    "tip_es": "Fundamento de criptografía asimétrica: [Requires a public key and a private key].",
    "ref": null,
    "human_rule": "asimétrico = clave pública + privada.",
    "trigger_anchor": "asymmetric ➔ key pair",
    "spanglish_trap": "Confundir asimétrico con simétrico.",
    "workplace_usage": {
      "scenario": "Infraestructura de Clave Pública (PKI)",
      "en": "Asymmetric encryption requires a public key to encrypt and a private key to decrypt.",
      "es": "El cifrado asimétrico requiere una clave pública para cifrar y una clave privada para descifrar."
    }
  },
  {
    "id": "it1-mod6-sec4-ex2-q4",
    "section": "UE",
    "objective": "L4",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the Security Officer, what is statistically the most common type of incident encountered in enterprise organizations?",
    "options": [
      "Physical breaking and entering into datacenters with crowbars.",
      "Electromagnetic pulse strikes from space satellites.",
      "Underwater fiber optic cable destruction by marine life.",
      "Deceptive employee email phishing incidents."
    ],
    "answer": 3,
    "why_correct": "• Pista: El oficial dice el incidente más común: phishing por correo.\n• Significado: Phishing por correo es el más común.\n• Descartas: Robo físico, pulsos o cables submarinos son raros.",
    "why_wrong": [
      "Incorrecto: Robo físico es raro.",
      "Incorrecto: Pulsos satelitales son raros.",
      "Incorrecto: Daños submarinos son raros.",
      "Opción correcta: Phishing por correo."
    ],
    "tip_es": "Estadística global de incidentes: El phishing por email es la causa más común de compromiso inicial.",
    "ref": null,
    "human_rule": "más común = phishing.",
    "trigger_anchor": "most common ➔ phishing",
    "spanglish_trap": "Pensar en amenazas físicas.",
    "workplace_usage": {
      "scenario": "Priorización de Defensas en el SOC",
      "en": "Statistically, email phishing incidents represent our highest frequency threat vector.",
      "es": "Estadísticamente, los incidentes de phishing por correo electrónico representan nuestro vector de amenazas más frecuente."
    }
  },
  {
    "id": "it1-mod6-sec5-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the idiom meaning: \"To receive massive media attention and become breaking news globally.\"",
    "options": [
      "Hit the headlines",
      "Go the extra mile",
      "On a roll",
      "Hard to crack"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"breaking news globally\": salir en los titulares.\n• Significado: Hit the headlines = ser noticia.\n• Descartas: Go the extra mile, On a roll y Hard to crack no significan eso.",
    "why_wrong": [
      "Opción correcta: Hit the headlines = salir en noticias.",
      "Incorrecto: Go the extra mile = esforzarse más.",
      "Incorrecto: On a roll = en racha.",
      "Incorrecto: Hard to crack = difícil de romper."
    ],
    "tip_es": "Idiom de impacto mediático: [Hit the headlines] = to get a lot of attention from the news media.",
    "ref": null,
    "human_rule": "hit the headlines = ser noticia.",
    "trigger_anchor": "breaking news ➔ headlines",
    "spanglish_trap": "Traducir hit como \"golpear\".",
    "workplace_usage": {
      "scenario": "Impacto Público de Ciberataques",
      "en": "The zero-day breach hit the headlines around the globe.",
      "es": "La brecha de seguridad de día cero acaparó los titulares en todo el mundo."
    }
  },
  {
    "id": "it1-mod6-sec5-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the term for: \"The chance, probability, or statistical expectation of an event happening.\"",
    "options": [
      "Countermeasures",
      "Likelihood",
      "Encryption",
      "Tamper"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"chance or probability\" = probabilidad.\n• Significado: Likelihood = probabilidad.\n• Descartas: Countermeasures, Encryption y Tamper son otras cosas.",
    "why_wrong": [
      "Incorrecto: Countermeasures = contramedidas.",
      "Opción correcta: Likelihood = probabilidad.",
      "Incorrecto: Encryption = cifrado.",
      "Incorrecto: Tamper = manipular."
    ],
    "tip_es": "Gestión de riesgos en ciberseguridad: [Likelihood x Impact = Risk].",
    "ref": null,
    "human_rule": "likelihood = probabilidad.",
    "trigger_anchor": "chance ➔ likelihood",
    "spanglish_trap": "Traducir likelihood como \"parecido\".",
    "workplace_usage": {
      "scenario": "Matriz de Riesgos InfoSec",
      "en": "We evaluate every threat based on its likelihood and potential business impact.",
      "es": "Evaluamos cada amenaza en función de su probabilidad y su impacto potencial en el negocio."
    }
  },
  {
    "id": "it1-mod6-sec5-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical term for: \"Defensive actions, controls, or procedures taken to prevent or neutralize something unwanted or dangerous.\"",
    "options": [
      "Exploits",
      "Malware",
      "Countermeasures",
      "Spyware"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"defensive actions to prevent or neutralize\": contramedidas.\n• Significado: Countermeasures = contramedidas.\n• Descartas: Exploits, Malware y Spyware son amenazas.",
    "why_wrong": [
      "Incorrecto: Exploits son ataques.",
      "Incorrecto: Malware es software malicioso.",
      "Opción correcta: Countermeasures = defensas.",
      "Incorrecto: Spyware espía."
    ],
    "tip_es": "Defensa activa: [Countermeasures] = actions taken to prevent something dangerous.",
    "ref": null,
    "human_rule": "countermeasures = defensas.",
    "trigger_anchor": "defensive actions ➔ countermeasures",
    "spanglish_trap": "Pensar que \"counter\" es contador.",
    "workplace_usage": {
      "scenario": "Arquitectura de Defensa en Profundidad",
      "en": "Deploying MFA and network segmentation are essential countermeasures.",
      "es": "El despliegue de MFA y la segmentación de red son contramedidas esenciales."
    }
  },
  {
    "id": "it1-mod6-sec5-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the term for: \"Information that has been transformed into a secure digital code to prevent unauthorized reading.\"",
    "options": [
      "Compromised",
      "Plaintext",
      "Unmasked",
      "Encrypted"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"transformed into a secure code\": cifrada.\n• Significado: Encrypted = cifrada.\n• Descartas: Compromised, Plaintext y Unmasked son lo contrario.",
    "why_wrong": [
      "Incorrecto: Compromised = comprometida.",
      "Incorrecto: Plaintext = texto plano.",
      "Incorrecto: Unmasked = al descubierto.",
      "Opción correcta: Encrypted = cifrada."
    ],
    "tip_es": "Estado de seguridad de datos: [Encrypted] = put into a special form so strangers cannot read it.",
    "ref": null,
    "human_rule": "encrypted = cifrado.",
    "trigger_anchor": "secure code ➔ encrypted",
    "spanglish_trap": "Confundir encrypted con enciphered.",
    "workplace_usage": {
      "scenario": "Cifrado de Mensajería de Extremo a Extremo",
      "en": "WhatsApp messages are encrypted end-to-end.",
      "es": "Los mensajes de WhatsApp están cifrados de extremo a extremo."
    }
  },
  {
    "id": "it1-mod6-sec5-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the idiom meaning: \"To become publicly known or exposed after being concealed or secret.\"",
    "options": [
      "Come to light",
      "Hit the road",
      "Turn a blind eye",
      "Call it a day"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"become publicly known after concealed\": salir a la luz.\n• Significado: Come to light = salir a la luz.\n• Descartas: Hit the road, Turn a blind eye y Call it a day son otros modismos.",
    "why_wrong": [
      "Opción correcta: Come to light = salir a la luz.",
      "Incorrecto: Hit the road = irse.",
      "Incorrecto: Turn a blind eye = hacer la vista gorda.",
      "Incorrecto: Call it a day = terminar por hoy."
    ],
    "tip_es": "Descubrimiento de secretos: [Come to light] = salir a la luz / hacerse público.",
    "ref": null,
    "human_rule": "come to light = se descubre.",
    "trigger_anchor": "exposed ➔ come to light",
    "spanglish_trap": "Traducir light como \"ligero\".",
    "workplace_usage": {
      "scenario": "Investigación Periodística de Ciberseguridad",
      "en": "Details of the surveillance campaign finally came to light.",
      "es": "Los detalles de la campaña de vigilancia finalmente salieron a la luz."
    }
  },
  {
    "id": "it1-mod6-sec5-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the action verb for: \"To fight actively against or take determined measures to suppress a threat or vulnerability.\"",
    "options": [
      "Ignore",
      "Combat",
      "Surrender",
      "Compromise"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"fight actively ... suppress a threat\": combatir.\n• Significado: Combat = combatir.\n• Descartas: Ignore, Surrender y Compromise son lo contrario.",
    "why_wrong": [
      "Incorrecto: Ignore = ignorar.",
      "Opción correcta: Combat = combatir.",
      "Incorrecto: Surrender = rendirse.",
      "Incorrecto: Compromise = comprometer."
    ],
    "tip_es": "Lucha defensiva: [Combat malware / threats] = Fight against.",
    "ref": null,
    "human_rule": "combat = luchar contra.",
    "trigger_anchor": "fight ➔ combat",
    "spanglish_trap": "Confundir combat con compromise.",
    "workplace_usage": {
      "scenario": "Estrategia de Ciberdefensa",
      "en": "New security patches were deployed to combat the zero-click vulnerability.",
      "es": "Se desplegaron nuevos parches de seguridad para combatir la vulnerabilidad zero-click."
    }
  },
  {
    "id": "it1-mod6-sec5-ex2-q1",
    "section": "UE",
    "objective": "R3",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the Pegasus spyware article, which section explains that it is exceptionally difficult to discover or detect whether the spyware is active on a device?",
    "options": [
      "Paragraph C",
      "Paragraph A",
      "Paragraph B",
      "Paragraph D"
    ],
    "answer": 0,
    "why_correct": "• Pista: La pregunta pide la sección que explica que es muy difícil detectar el spyware.\n• Significado: Corresponde al párrafo C.\n• Descartas: Los otros párrafos tratan otros temas; ubícalos por la idea clave.",
    "why_wrong": [
      "Opción correcta: Paragraph C contiene la idea que pide la pregunta.",
      "Incorrecto: Paragraph A trata otro tema.",
      "Incorrecto: Paragraph B trata otro tema.",
      "Incorrecto: Paragraph D trata otro tema."
    ],
    "tip_es": "Scanning de texto (Pegasus): Párrafo C = Dificultad extrema de detección y técnicas stealth.",
    "ref": null,
    "human_rule": "En preguntas de párrafo, ubica la idea clave y el párrafo.",
    "trigger_anchor": "which paragraph ➔ key idea",
    "spanglish_trap": "Elegir por orden y no por contenido.",
    "workplace_usage": {
      "scenario": "Lectura Comprensiva de Análisis de Malware",
      "en": "Paragraph C outlines how the stealth nature makes detection nearly impossible.",
      "es": "El párrafo C describe cómo su naturaleza sigilosa hace que la detección sea casi imposible."
    }
  },
  {
    "id": "it1-mod6-sec5-ex2-q2",
    "section": "UE",
    "objective": "R3",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Which section of the Pegasus text states that the software has been generating massive global media headlines and public scrutiny?",
    "options": [
      "Paragraph B",
      "Paragraph A",
      "Paragraph C",
      "Paragraph D"
    ],
    "answer": 1,
    "why_correct": "• Pista: La pregunta pide la sección que habla de titulares y escrutinio.\n• Significado: Corresponde al párrafo A.\n• Descartas: Los otros párrafos tratan otros temas; ubícalos por la idea clave.",
    "why_wrong": [
      "Incorrecto: Paragraph B trata otro tema.",
      "Opción correcta: Paragraph A contiene la idea que pide la pregunta.",
      "Incorrecto: Paragraph C trata otro tema.",
      "Incorrecto: Paragraph D trata otro tema."
    ],
    "tip_es": "Scanning de texto: Párrafo A = Repercusión mediática en las noticias (\"hit the headlines\").",
    "ref": null,
    "human_rule": "En preguntas de párrafo, ubica la idea clave y el párrafo.",
    "trigger_anchor": "which paragraph ➔ key idea",
    "spanglish_trap": "Elegir por orden y no por contenido.",
    "workplace_usage": {
      "scenario": "Skimming de Artículos de Ciberseguridad",
      "en": "Paragraph A introduces the media sensation caused by the Pegasus revelations.",
      "es": "El párrafo A presenta la sensación mediática causada por las revelaciones de Pegasus."
    }
  },
  {
    "id": "it1-mod6-sec5-ex2-q3",
    "section": "UE",
    "objective": "R2",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Which section reveals that Pegasus was not being utilized solely for legitimate law enforcement and anti-terrorism purposes?",
    "options": [
      "Paragraph B",
      "Paragraph C",
      "Paragraph A",
      "Paragraph D"
    ],
    "answer": 2,
    "why_correct": "• Pista: La pregunta pide la sección que revela usos no solo legítimos.\n• Significado: Corresponde al párrafo A.\n• Descartas: Los otros párrafos tratan otros temas; ubícalos por la idea clave.",
    "why_wrong": [
      "Incorrecto: Paragraph B trata otro tema.",
      "Incorrecto: Paragraph C trata otro tema.",
      "Opción correcta: Paragraph A contiene la idea que pide la pregunta.",
      "Incorrecto: Paragraph D trata otro tema."
    ],
    "tip_es": "Scanning de texto: Párrafo A = Uso indebido fuera del antiterrorismo (activistas, periodistas).",
    "ref": null,
    "human_rule": "En preguntas de párrafo, ubica la idea clave y el párrafo.",
    "trigger_anchor": "which paragraph ➔ key idea",
    "spanglish_trap": "Elegir por orden y no por contenido.",
    "workplace_usage": {
      "scenario": "Análisis Ético y Legal de Spyware",
      "en": "Paragraph A discusses the misuse of the software against non-criminal targets.",
      "es": "El párrafo A analiza el uso indebido del software contra objetivos no delictivos."
    }
  },
  {
    "id": "it1-mod6-sec5-ex2-q4",
    "section": "UE",
    "objective": "R3",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Which section of the article emphasizes that the Pegasus spyware is prohibitively expensive to acquire and deploy?",
    "options": [
      "Paragraph A",
      "Paragraph B",
      "Paragraph C",
      "Paragraph D"
    ],
    "answer": 3,
    "why_correct": "• Pista: La pregunta pide la sección que insiste en su precio prohibitivo.\n• Significado: Corresponde al párrafo D.\n• Descartas: Los otros párrafos tratan otros temas; ubícalos por la idea clave.",
    "why_wrong": [
      "Incorrecto: Paragraph A trata otro tema.",
      "Incorrecto: Paragraph B trata otro tema.",
      "Incorrecto: Paragraph C trata otro tema.",
      "Opción correcta: Paragraph D contiene la idea que pide la pregunta."
    ],
    "tip_es": "Scanning de texto: Párrafo D = Coste económico exorbitante y clientes exclusivos.",
    "ref": null,
    "human_rule": "En preguntas de párrafo, ubica la idea clave y el párrafo.",
    "trigger_anchor": "which paragraph ➔ key idea",
    "spanglish_trap": "Elegir por orden y no por contenido.",
    "workplace_usage": {
      "scenario": "Inteligencia de Amenazas Comerciales",
      "en": "Paragraph D notes that Pegasus licenses cost millions of dollars.",
      "es": "El párrafo D señala que las licencias de Pegasus cuestan millones de dólares."
    }
  },
  {
    "id": "it1-mod6-sec5-ex2-q5",
    "section": "UE",
    "objective": "R2",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Which section describes how Pegasus can record keystrokes, activate the camera/microphone, and harvest encrypted chat messages?",
    "options": [
      "Paragraph B",
      "Paragraph A",
      "Paragraph C",
      "Paragraph D"
    ],
    "answer": 0,
    "why_correct": "• Pista: La pregunta pide la sección que describe teclado, cámara y chats.\n• Significado: Corresponde al párrafo B.\n• Descartas: Los otros párrafos tratan otros temas; ubícalos por la idea clave.",
    "why_wrong": [
      "Opción correcta: Paragraph B contiene la idea que pide la pregunta.",
      "Incorrecto: Paragraph A trata otro tema.",
      "Incorrecto: Paragraph C trata otro tema.",
      "Incorrecto: Paragraph D trata otro tema."
    ],
    "tip_es": "Scanning de texto: Párrafo B = Capacidades técnicas de espionaje y exfiltración de datos.",
    "ref": null,
    "human_rule": "En preguntas de párrafo, ubica la idea clave y el párrafo.",
    "trigger_anchor": "which paragraph ➔ key idea",
    "spanglish_trap": "Elegir por orden y no por contenido.",
    "workplace_usage": {
      "scenario": "Capacidades de Amenazas APT",
      "en": "Paragraph B explains the extensive data-harvesting capabilities of Pegasus.",
      "es": "El párrafo B explica las amplias capacidades de recolección de datos de Pegasus."
    }
  },
  {
    "id": "it1-mod6-sec5-ex2-q6",
    "section": "UE",
    "objective": "R3",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Which section describes the mechanism by which Pegasus infects mobile devices via zero-click vulnerabilities without requiring user interaction?",
    "options": [
      "Paragraph A",
      "Paragraph C",
      "Paragraph B",
      "Paragraph D"
    ],
    "answer": 1,
    "why_correct": "• Pista: La pregunta pide la sección del mecanismo zero-click.\n• Significado: Corresponde al párrafo C.\n• Descartas: Los otros párrafos tratan otros temas; ubícalos por la idea clave.",
    "why_wrong": [
      "Incorrecto: Paragraph A trata otro tema.",
      "Opción correcta: Paragraph C contiene la idea que pide la pregunta.",
      "Incorrecto: Paragraph B trata otro tema.",
      "Incorrecto: Paragraph D trata otro tema."
    ],
    "tip_es": "Scanning de texto: Párrafo C = Vector de ataque de infección silenciosa sin clics (\"zero-click\").",
    "ref": null,
    "human_rule": "En preguntas de párrafo, ubica la idea clave y el párrafo.",
    "trigger_anchor": "which paragraph ➔ key idea",
    "spanglish_trap": "Elegir por orden y no por contenido.",
    "workplace_usage": {
      "scenario": "Análisis de Exploits Zero-Click",
      "en": "Paragraph C describes the zero-click delivery mechanism of Pegasus.",
      "es": "El párrafo C describe el mecanismo de entrega zero-click de Pegasus."
    }
  }
];
