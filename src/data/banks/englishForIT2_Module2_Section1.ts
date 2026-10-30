import { Question } from '../../types';

/**
 * English for IT 2 – Module 2: Customer Support
 * 2.1 Section 1 – Grammar: Negative Future Tenses
 * Official OpenEDG / Cisco Curriculum
 * Covers: Present Continuous (Decision / Arrangement) vs. Going to (Intention)
 * 2.1.3 Exercise 1 (6 items) & 2.1.4 Exercise 2 (6 items)
 */
export const ENGLISH_FOR_IT_2_MODULE_2_SECTION_1_BANK: Question[] = [
  {
    "id": "it2-mod2-sec1-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence expresses a decision or an intention: \"We're not taking this case any further since the problem does not originate from our side. Please contact the support team for your device.\"",
    "options": [
      "A decision",
      "An intention",
      "A spontaneous offer",
      "Neither"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"We're not taking this case any further\" está en presente continuo y habla de algo ya resuelto.\n• Regla: \"are not + -ing\" ➔ una decisión ya tomada.\n• Descartas: \"not going to\" sería una intención.",
    "why_wrong": [
      "Opción correcta: es una decisión ya tomada (\"no vamos a seguir con esto\").",
      "Incorrecto: una intención usaría \"are not going to\".",
      "Incorrecto: una oferta espontánea usaría will.",
      "Incorrecto: sí expresa una decisión."
    ],
    "tip_es": "Regla del video: Present Continuous (\"We're not doing\") = Decisión ya tomada (A decision).",
    "ref": null,
    "human_rule": "\"are not + -ing\" = decisión tomada. \"are not going to\" = intención.",
    "trigger_anchor": "We're not taking this case any further ➔ una decisión",
    "spanglish_trap": "Pensar que todo \"no vamos a\" es lo mismo. En inglés, -ing es decisión; going to es intención.",
    "workplace_usage": {
      "scenario": "Cierre de Ticket en Mesa de Ayuda",
      "en": "We're not escalating this ticket to engineering because the issue is caused by unsupported third-party software.",
      "es": "No vamos a escalar este ticket a ingeniería porque el fallo es causado por software de terceros no soportado."
    }
  },
  {
    "id": "it2-mod2-sec1-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence expresses a decision or an intention: \"We are still waiting for confirmation but it seems as though they are not going to update the procedure for managing complaints after all.\"",
    "options": [
      "A decision",
      "An intention",
      "A scheduled arrangement",
      "Neither"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"are not going to update\" y la frase empieza con \"it seems as though…\".\n• Regla: \"are not going to\" ➔ una intención (todavía hay que confirmar).\n• Descartas: una decisión usaría \"are not + -ing\".",
    "why_wrong": [
      "Incorrecto: una decisión usaría \"are not updating\".",
      "Opción correcta: es una intención (\"no van a actualizar\", sin confirmar).",
      "Incorrecto: un plan fijado usaría presente continuo.",
      "Incorrecto: sí expresa una intención."
    ],
    "tip_es": "Regla del video: \"going to\" (\"they are not going to update\") = Falta de intención (An intention).",
    "ref": null,
    "human_rule": "\"are not going to\" = intención.",
    "trigger_anchor": "they are not going to update the procedure ➔ una intención",
    "spanglish_trap": "Leer \"not going to\" como una decisión cerrada. Aquí es una intención.",
    "workplace_usage": {
      "scenario": "Seguimiento de Políticas de Soporte",
      "en": "The customer success team is not going to adopt the new SLA metrics until training is delivered.",
      "es": "El equipo de atención al cliente no tiene la intención de adoptar las nuevas métricas de SLA hasta que se imparta la formación."
    }
  },
  {
    "id": "it2-mod2-sec1-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence expresses a decision or an intention: \"The customer is not going to go through with the reinstallation if she still has concerns.\"",
    "options": [
      "A completed task",
      "A decision",
      "An intention",
      "Neither"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"is not going to go through… if she still has concerns\" es condicional.\n• Regla: \"not going to\" ➔ una intención.\n• Descartas: no es una tarea completada ni una decisión cerrada.",
    "why_wrong": [
      "Incorrecto: no habla de una tarea ya hecha.",
      "Incorrecto: una decisión usaría \"is not going through\".",
      "Opción correcta: es una intención (depende de \"if she still has concerns\").",
      "Incorrecto: sí expresa una intención."
    ],
    "tip_es": "\"is not going to [verbo]\" = Intención / Disposición personal del usuario (An intention).",
    "ref": null,
    "human_rule": "\"is not going to\" + \"if…\" = intención.",
    "trigger_anchor": "is not going to go through… if she still has concerns ➔ una intención",
    "spanglish_trap": "Ignorar el \"if\". Una condición indica una intención, no una decisión.",
    "workplace_usage": {
      "scenario": "Desescalación de Cliente Preocupado",
      "en": "The client is not going to authorize the firmware flash until we guarantee a rollback path.",
      "es": "El cliente no tiene la intención de autorizar la actualización de firmware hasta que garanticemos una vía de reversión."
    }
  },
  {
    "id": "it2-mod2-sec1-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence expresses a decision or an intention: \"They are not running the training session anymore. Apparently, not enough people had signed up.\"",
    "options": [
      "Neither",
      "An intention",
      "A hypothetical wish",
      "A decision"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"are not running… anymore. Apparently, not enough people had signed up\": ya se decidió.\n• Regla: \"are not + -ing\" ➔ una decisión ya tomada.\n• Descartas: una intención usaría \"not going to\".",
    "why_wrong": [
      "Incorrecto: sí expresa una decisión.",
      "Incorrecto: una intención usaría \"are not going to run\".",
      "Incorrecto: no habla de un deseo hipotético.",
      "Opción correcta: es una decisión ya tomada (por falta de inscritos)."
    ],
    "tip_es": "Cancelación formal con Present Continuous (\"are not running\") = Decisión firme (A decision).",
    "ref": null,
    "human_rule": "\"are not + -ing\" = decisión tomada.",
    "trigger_anchor": "They are not running the session anymore ➔ una decisión",
    "spanglish_trap": "Confundir \"ya no\" con \"no van a\". Anymore marca algo ya decidido.",
    "workplace_usage": {
      "scenario": "Planificación de Capacitaciones",
      "en": "We are not running the Linux administration workshop next week due to instructor availability.",
      "es": "No vamos a impartir el taller de administración de Linux la próxima semana debido a la disponibilidad del instructor."
    }
  },
  {
    "id": "it2-mod2-sec1-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence expresses a decision or an intention: \"They’re not following the procedure we suggested. Apparently they’ve found a faster solution.\"",
    "options": [
      "A decision",
      "An intention",
      "A polite request",
      "Neither"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"They're not following… Apparently they've found a faster solution\": ya lo decidieron.\n• Regla: \"are not + -ing\" ➔ una decisión ya tomada.\n• Descartas: una intención usaría \"not going to\".",
    "why_wrong": [
      "Opción correcta: es una decisión ya tomada.",
      "Incorrecto: una intención usaría \"are not going to follow\".",
      "Incorrecto: no es una petición cortés.",
      "Incorrecto: sí expresa una decisión."
    ],
    "tip_es": "Present Continuous negativo (\"They're not following\") = A decision.",
    "ref": null,
    "human_rule": "\"are not + -ing\" = decisión tomada.",
    "trigger_anchor": "They're not following the procedure ➔ una decisión",
    "spanglish_trap": "Traducir todo \"no van a\" como intención. El -ing indica que ya está decidido.",
    "workplace_usage": {
      "scenario": "Resolución de Incidente en Jira",
      "en": "The database administrators are not following the standard recovery script; they decided to restore from snapshot.",
      "es": "Los administradores de base de datos no van a seguir el script estándar de recuperación; decidieron restaurar desde instantánea."
    }
  },
  {
    "id": "it2-mod2-sec1-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence expresses a decision or an intention: \"We’re not going to wait all day for them to respond to such a simple request.\"",
    "options": [
      "A decision",
      "An intention",
      "An arrangement",
      "Neither"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"We're not going to wait all day\": expresa lo que no se piensa hacer.\n• Regla: \"not going to\" ➔ una intención.\n• Descartas: una decisión ya tomada usaría \"are not + -ing\".",
    "why_wrong": [
      "Incorrecto: una decisión usaría \"are not waiting\".",
      "Opción correcta: es una intención (\"no pensamos esperar\").",
      "Incorrecto: un plan fijado usaría presente continuo con fecha.",
      "Incorrecto: sí expresa una intención."
    ],
    "tip_es": "\"We're not going to wait\" = Falta de intención o negativa tajante (An intention).",
    "ref": null,
    "human_rule": "\"are not going to\" = intención.",
    "trigger_anchor": "We're not going to wait all day ➔ una intención",
    "spanglish_trap": "Pensar que una amenaza es una decisión. Con going to es intención.",
    "workplace_usage": {
      "scenario": "Escalación de Soporte N2 a N3",
      "en": "We’re not going to wait for the vendor ticket update; let’s implement a local workaround right now.",
      "es": "No vamos a esperar la actualización del ticket del proveedor; implementemos una solución temporal local de inmediato."
    }
  },
  {
    "id": "it2-mod2-sec1-ex2-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: What's the biggest difference with the update?\nPerson B: ______",
    "options": [
      "The biggest difference is that the updates are not going to be saving.",
      "The slightest change is that the updates were irregular.",
      "The biggest change is that live video streams are not being saved.",
      "The smallest difference is that live video streams are no longer being saved."
    ],
    "answer": 2,
    "why_correct": "• Pista: preguntan por la mayor diferencia de la actualización.\n• Regla: la respuesta correcta responde \"biggest\" y usa \"are not being saved\".\n• Descartas: A tiene \"not going to be saving\" mal armado; B habla de lo más pequeño; D responde con \"smallest\".",
    "why_wrong": [
      "Incorrecto: \"are not going to be saving\" está mal armado.",
      "Incorrecto: habla del cambio más pequeño, no del mayor.",
      "Opción correcta: \"The biggest change is that live video streams are not being saved.\"",
      "Incorrecto: \"smallest difference\" no responde a \"biggest\"."
    ],
    "tip_es": "Pregunta: \"What's the BIGGEST difference?\" -> Respuesta: \"The BIGGEST change is that live video streams are not being saved.\"",
    "ref": null,
    "human_rule": "Responde con la misma palabra que la pregunta (biggest ➔ biggest).",
    "trigger_anchor": "What's the biggest difference? ➔ The biggest change is that…",
    "spanglish_trap": "Elegir la opción que parece más fluida. Fíjate si responde a lo que preguntan.",
    "workplace_usage": {
      "scenario": "Release Notes de Plataforma de Video",
      "en": "The primary change in this patch is that background video streams are not being stored on unencrypted volumes.",
      "es": "El cambio principal en este parche es que las transmisiones de video en segundo plano no se están almacenando en volúmenes no cifrados."
    }
  },
  {
    "id": "it2-mod2-sec1-ex2-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: How will we communicate the update?\nPerson B: ______",
    "options": [
      "We'll send them an email because they can't read.",
      "We've sent them an email, but they've already read it.",
      "We'll email them a fax, but they're not seeing it.",
      "We'll send them an email, but they're not going to read it."
    ],
    "answer": 3,
    "why_correct": "• Pista: preguntan cómo se comunicará algo (futuro).\n• Regla: plan futuro ➔ We'll send… but they're not going to read it.\n• Descartas: A dice \"because they can't read\"; B está en pasado; C mezcla email y fax.",
    "why_wrong": [
      "Incorrecto: \"because they can't read\" no tiene sentido como motivo.",
      "Incorrecto: \"We've sent\" habla del pasado, y la pregunta es sobre el futuro.",
      "Incorrecto: mezcla email con fax y no tiene sentido.",
      "Opción correcta: \"We'll send them an email, but they're not going to read it.\""
    ],
    "tip_es": "Pregunta sobre el futuro (\"How will we...?\"): \"We'll send them an email, but they're not going to read it.\"",
    "ref": null,
    "human_rule": "Plan futuro + predicción ➔ will + going to.",
    "trigger_anchor": "How will we communicate? ➔ We'll send… but they're not going to read it",
    "spanglish_trap": "Responder en pasado a una pregunta en futuro.",
    "workplace_usage": {
      "scenario": "Comunicación de Cambios a Usuarios Finales",
      "en": "We’ll post a banner on the portal, but users are not going to read the maintenance release notes.",
      "es": "Publicaremos un banner en el portal, pero los usuarios no van a leer las notas de la versión de mantenimiento."
    }
  },
  {
    "id": "it2-mod2-sec1-ex2-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: If emails won't work, what else can we do?\nPerson B: ______",
    "options": [
      "We're going to direct them to the website for more information.",
      "They're directing us to the website for more updates.",
      "We're directing them to the update.",
      "They're going to update their videos for more information."
    ],
    "answer": 0,
    "why_correct": "• Pista: preguntan qué más pueden hacer (futuro).\n• Regla: plan ➔ We're going to direct them…\n• Descartas: B cambia quién actúa; C no ofrece una alternativa; D habla de videos.",
    "why_wrong": [
      "Opción correcta: \"We're going to direct them to the website\" ofrece una alternativa.",
      "Incorrecto: dice que ellos nos dirigen a nosotros.",
      "Incorrecto: \"directing them to the update\" no ofrece una alternativa.",
      "Incorrecto: habla de actualizar videos, no de comunicar."
    ],
    "tip_es": "\"What else can WE do?\" -> \"WE'RE GOING TO direct them to the website for more information.\"",
    "ref": null,
    "human_rule": "Un plan propuesto ➔ We're going to + verbo.",
    "trigger_anchor": "What else can we do? ➔ We're going to direct them to the website",
    "spanglish_trap": "Cambiar el sujeto (they / we). Si propones tú, we.",
    "workplace_usage": {
      "scenario": "Canal Alternativo de Soporte al Cliente",
      "en": "If automated notifications fail, we’re going to direct users to our public status dashboard.",
      "es": "Si las notificaciones automatizadas fallan, vamos a dirigir a los usuarios a nuestro panel de estado público."
    }
  },
  {
    "id": "it2-mod2-sec1-ex2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: When is the update scheduled to take place?\nPerson B: ______",
    "options": [
      "They're going to implement it last Friday.",
      "They're implementing it next Friday.",
      "They going to schedule this Friday the update.",
      "They're not updating the schedule this Friday."
    ],
    "answer": 1,
    "why_correct": "• Pista: preguntan cuándo está programada la actualización (\"next Friday\").\n• Regla: una fecha ya fijada ➔ presente continuo (They're implementing it next Friday).\n• Descartas: A dice \"last Friday\" (pasado); C tiene el orden roto; D niega.",
    "why_wrong": [
      "Incorrecto: \"last Friday\" es pasado.",
      "Opción correcta: \"They're implementing it next Friday\" = una fecha ya fijada.",
      "Incorrecto: \"They going to\" tiene el orden roto.",
      "Incorrecto: niega que actualicen."
    ],
    "tip_es": "Horario programado en calendario (\"When is it scheduled...?\"): usa Present Continuous (\"They're implementing it next Friday\").",
    "ref": null,
    "human_rule": "Fecha ya fijada ➔ presente continuo (are + -ing).",
    "trigger_anchor": "When is it scheduled? ➔ They're implementing it next Friday",
    "spanglish_trap": "Poner \"going to\" con \"last\". Last es pasado.",
    "workplace_usage": {
      "scenario": "Calendario de Despliegue en Producción",
      "en": "The DevOps squad is deploying the security patch next Tuesday at 02:00 UTC.",
      "es": "El equipo de DevOps desplegará el parche de seguridad el próximo martes a las 02:00 UTC."
    }
  },
  {
    "id": "it2-mod2-sec1-ex2-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: What are your plans for dealing with your crucial cases?\nPerson B: ______",
    "options": [
      "I'm going to morning them.",
      "I did them tomorrow morning.",
      "I'm going to do them in the mornings.",
      "I'm doing them not."
    ],
    "answer": 2,
    "why_correct": "• Pista: preguntan por planes (\"What are your plans…?\").\n• Regla: plan ➔ I'm going to + verbo.\n• Descartas: A usa morning como verbo; B habla del pasado; D tiene el orden roto.",
    "why_wrong": [
      "Incorrecto: \"morning\" no es un verbo.",
      "Incorrecto: \"did\" habla del pasado, y la pregunta es sobre planes.",
      "Opción correcta: \"I'm going to do them in the mornings.\"",
      "Incorrecto: \"doing them not\" tiene el orden roto."
    ],
    "tip_es": "Pregunta: \"What are your PLANS...?\" -> Respuesta: \"I'M GOING TO do them in the mornings.\"",
    "ref": null,
    "human_rule": "Un plan ➔ I'm going to + verbo.",
    "trigger_anchor": "What are your plans? ➔ I'm going to do them…",
    "spanglish_trap": "Mezclar tiempos. Si preguntan por planes, responde en futuro.",
    "workplace_usage": {
      "scenario": "Organización Diaria de Casos de Soporte",
      "en": "I’m going to tackle the Sev-1 outage tickets in the morning before starting routine audits.",
      "es": "Voy a abordar los tickets de caída Sev-1 por la mañana antes de comenzar las auditorías de rutina."
    }
  },
  {
    "id": "it2-mod2-sec1-ex2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: Have you decided whether or not to attend next week's training session?\nPerson B: ______",
    "options": [
      "I'm training the decision.",
      "I'm going to train for next week's attendance session.",
      "I'm not going to attend last week's training session.",
      "I'm not attending next week's training session."
    ],
    "answer": 3,
    "why_correct": "• Pista: preguntan si decidió asistir la semana próxima.\n• Regla: decisión ya tomada ➔ I'm not attending next week's session.\n• Descartas: A no tiene sentido; B mezcla palabras; C habla de la semana pasada.",
    "why_wrong": [
      "Incorrecto: \"training the decision\" no tiene sentido.",
      "Incorrecto: no responde a lo que preguntan.",
      "Incorrecto: \"last week's\" es pasado.",
      "Opción correcta: \"I'm not attending next week's training session.\""
    ],
    "tip_es": "Pregunta: \"Have you DECIDED...?\" -> Respuesta con Present Continuous: \"I'm not ATTENDING next week's training session.\"",
    "ref": null,
    "human_rule": "Decisión ya tomada ➔ I'm not + -ing.",
    "trigger_anchor": "Have you decided whether to attend next week's session? ➔ I'm not attending…",
    "spanglish_trap": "Elegir last week por parecerse a \"la semana\". Fíjate en next.",
    "workplace_usage": {
      "scenario": "Confirmación de Asistencia a Capacitación",
      "en": "I’m not attending the quarterly security sync because I will be leading the database migration.",
      "es": "No voy a asistir a la sincronización trimestral de seguridad porque estaré liderando la migración de base de datos."
    }
  }
];
