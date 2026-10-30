import { Question } from '../../types';

/**
 * English for IT 1 – Module 2: Network Engineer: Interpret & Implement Instructions
 * 2.2 Section 2 – Listening: Manager and Junior Network Engineer
 * Official OpenEDG / Cisco Curriculum
 * Covers:
 *  - 2.2.1 Vocabulary: handled, omitted, nevertheless, analyze, risks, eliminated, performance, right away
 *  - 2.2.2 Listening Transcript: Bobby (Manager) and Peter (Junior Network Engineer)
 *  - 2.2.3 Listening Exercise: Identifying opinions (Woman, Man, Both)
 *  - Workplace context: Unauthorized access points, incident reporting, escalation to security team, onboarding confusion
 * Total: 8 Vocabulary items + 4 Listening items = 12 items
 */
export const ENGLISH_FOR_IT_1_MODULE_2_SECTION_2_BANK: Question[] = [
  {
    "id": "it1-mod2-sec2-voc-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the expression that has the closest meaning to \"handled\" in technical support: \"I wanted to discuss one of the issues that was handled by you.\"",
    "options": [
      "taken care of",
      "created from scratch",
      "escalated to legal",
      "postponed indefinitely"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"handled\" en soporte = gestionado.\n• Significado: taken care of = atendido, resuelto.\n• Descartas: created from scratch, escalated to legal y postponed no son handle.",
    "why_wrong": [
      "Opción correcta: taken care of = atendido.",
      "Incorrecto: created from scratch = creado desde cero.",
      "Incorrecto: escalated to legal = pasado a legal.",
      "Incorrecto: postponed = pospuesto."
    ],
    "tip_es": "Vocabulario oficial 2.2.1: Handled = taken care of (atendido / gestionado).",
    "ref": null,
    "human_rule": "handled = taken care of.",
    "trigger_anchor": "handled ➔ taken care of",
    "spanglish_trap": "Traducir handle como \"manejar con manos\".",
    "workplace_usage": {
      "scenario": "Revisión de Tickets en Soporte de Red",
      "en": "The unauthorized access point ticket was handled by the junior network engineer.",
      "es": "El ticket del punto de acceso no autorizado fue gestionado por el ingeniero de redes junior."
    }
  },
  {
    "id": "it1-mod2-sec2-voc-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the word that has the same meaning as \"omitted\": \"...it’s rather the fact that you omitted some actions required.\"",
    "options": [
      "automated",
      "overlooked",
      "documented",
      "completed"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"omitted some actions\" = se saltó acciones.\n• Significado: overlooked = pasado por alto.\n• Descartas: automated, documented y completed son lo contrario o distinto.",
    "why_wrong": [
      "Incorrecto: automated = automatizado.",
      "Opción correcta: overlooked = pasó por alto.",
      "Incorrecto: documented = documentado.",
      "Incorrecto: completed = completado."
    ],
    "tip_es": "Vocabulario oficial 2.2.1: Omitted = overlooked (pasado por alto / no realizado).",
    "ref": null,
    "human_rule": "omit = skip, overlook.",
    "trigger_anchor": "omitted ➔ overlooked",
    "spanglish_trap": "Traducir omit como \"omitir\" y pensar en \"olvidar\".",
    "workplace_usage": {
      "scenario": "Auditoría de Incidentes de Red",
      "en": "The engineer overlooked the requirement to notify the SOC within thirty minutes.",
      "es": "El ingeniero pasó por alto el requisito de notificar al SOC dentro de los treinta minutos."
    }
  },
  {
    "id": "it1-mod2-sec2-voc-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the word that means the same as \"nevertheless\": \"Nevertheless, besides telling me, it does need to be reported to the security team...\"",
    "options": [
      "therefore",
      "furthermore",
      "however",
      "consequently"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Nevertheless\" = sin embargo.\n• Significado: however = sin embargo.\n• Descartas: therefore, furthermore y consequently suman o dan consecuencia.",
    "why_wrong": [
      "Incorrecto: therefore = por lo tanto.",
      "Incorrecto: furthermore = además.",
      "Opción correcta: however = sin embargo.",
      "Incorrecto: consequently = en consecuencia."
    ],
    "tip_es": "Vocabulario oficial 2.2.1: Nevertheless = however (sin embargo / no obstante).",
    "ref": null,
    "human_rule": "nevertheless = however (contraste).",
    "trigger_anchor": "nevertheless ➔ however",
    "spanglish_trap": "Confundir contraste con consecuencia.",
    "workplace_usage": {
      "scenario": "Instrucciones de Escalación",
      "en": "You notified your direct manager; nevertheless, company policy demands alerting the security team.",
      "es": "Notificaste a tu gerente directo; no obstante, la política de la empresa exige alertar al equipo de seguridad."
    }
  },
  {
    "id": "it1-mod2-sec2-voc-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the word that means the same as \"analyze\": \"They are the best people to analyze it to see if this course of action can be reproduced...\"",
    "options": [
      "install",
      "reboot",
      "discard",
      "examine"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"analyze\" = analizar.\n• Significado: examine = examinar.\n• Descartas: install, reboot y discard no son analizar.",
    "why_wrong": [
      "Incorrecto: install = instalar.",
      "Incorrecto: reboot = reiniciar.",
      "Incorrecto: discard = descartar.",
      "Opción correcta: examine = examinar."
    ],
    "tip_es": "Vocabulario oficial 2.2.1: Analyze = examine (examinar / inspeccionar a fondo).",
    "ref": null,
    "human_rule": "analyze ≈ examine.",
    "trigger_anchor": "analyze ➔ examine",
    "spanglish_trap": "Pensar que analyze es probar.",
    "workplace_usage": {
      "scenario": "Triaje de Seguridad Informática",
      "en": "The security team will examine packet captures to verify if the rogue AP bridged internal subnets.",
      "es": "El equipo de seguridad examinará las capturas de paquetes para verificar si el AP no autorizado puenteó subredes internas."
    }
  },
  {
    "id": "it1-mod2-sec2-voc-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the word that means the same as \"risks\": \"Such incidents can expose the security risks within our network...\"",
    "options": [
      "dangers",
      "enhancements",
      "configurations",
      "backups"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"risks\" = riesgos.\n• Significado: dangers = peligros.\n• Descartas: enhancements, configurations y backups no son riesgos.",
    "why_wrong": [
      "Opción correcta: dangers = peligros.",
      "Incorrecto: enhancements = mejoras.",
      "Incorrecto: configurations = configuraciones.",
      "Incorrecto: backups = copias."
    ],
    "tip_es": "Vocabulario oficial 2.2.1: Risks = dangers (peligros / amenazas de seguridad).",
    "ref": null,
    "human_rule": "risk ≈ danger.",
    "trigger_anchor": "risks ➔ dangers",
    "spanglish_trap": "Traducir risk como \"riesgo\" sin ver sinónimo.",
    "workplace_usage": {
      "scenario": "Evaluación de Vulnerabilidades de Red",
      "en": "Connecting rogue wireless routers exposes the intranet to severe lateral movement dangers.",
      "es": "Conectar routers inalámbricos no autorizados expone la intranet a graves peligros de movimiento lateral."
    }
  },
  {
    "id": "it1-mod2-sec2-voc-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the word that means the same as \"eliminated\": \"...and they do need to be eliminated.\"",
    "options": [
      "tolerated",
      "excluded",
      "monitored",
      "duplicated"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"eliminated\" = eliminados.\n• Significado: excluded = excluidos.\n• Descartas: tolerated, monitored y duplicated son lo contrario o distinto.",
    "why_wrong": [
      "Incorrecto: tolerated = tolerados.",
      "Opción correcta: excluded = excluidos.",
      "Incorrecto: monitored = vigilados.",
      "Incorrecto: duplicated = duplicados."
    ],
    "tip_es": "Vocabulario oficial 2.2.1: Eliminated = excluded (erradicado / excluido del sistema).",
    "ref": null,
    "human_rule": "eliminate ≈ exclude.",
    "trigger_anchor": "eliminated ➔ excluded",
    "spanglish_trap": "Confundir eliminate con \"eliminar archivos\".",
    "workplace_usage": {
      "scenario": "Plan de Acción Correctiva de Seguridad",
      "en": "All unauthorized hardware access vectors must be excluded from the corporate LAN immediately.",
      "es": "Todos los vectores de acceso de hardware no autorizados deben ser excluidos de la LAN corporativa de inmediato."
    }
  },
  {
    "id": "it1-mod2-sec2-voc-q7",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the word that means the same as \"performance\": \"I've recently taken a look at your latest performance...\"",
    "options": [
      "credentials",
      "compensation",
      "execution",
      "hardware clock"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"performance\" aquí = desempeño.\n• Significado: execution = ejecución del trabajo.\n• Descartas: credentials, compensation y hardware clock no son desempeño.",
    "why_wrong": [
      "Incorrecto: credentials = credenciales.",
      "Incorrecto: compensation = compensación.",
      "Opción correcta: execution = ejecución.",
      "Incorrecto: hardware clock = reloj."
    ],
    "tip_es": "Vocabulario oficial 2.2.1: Performance = execution (ejecución laboral / desempeño de tareas).",
    "ref": null,
    "human_rule": "performance en RR.HH. = desempeño.",
    "trigger_anchor": "your performance ➔ execution",
    "spanglish_trap": "Traducir performance como \"espectáculo\".",
    "workplace_usage": {
      "scenario": "Reunión de Feedback con el Manager",
      "en": "The manager conducts biweekly check-ins to monitor the execution of standard operating procedures.",
      "es": "La gerente realiza revisiones quincenales para monitorear la ejecución de los procedimientos operativos estándar."
    }
  },
  {
    "id": "it1-mod2-sec2-voc-q8",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the word that means the same as \"right away\": \"I'll do that right away, Bobby.\"",
    "options": [
      "reluctantly",
      "eventually",
      "tentatively",
      "directly"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"right away\" = de inmediato.\n• Significado: directly = enseguida.\n• Descartas: reluctantly, eventually y tentatively no indican inmediatez.",
    "why_wrong": [
      "Incorrecto: reluctantly = a regañadientes.",
      "Incorrecto: eventually = con el tiempo.",
      "Incorrecto: tentatively = de forma provisional.",
      "Opción correcta: directly = de inmediato."
    ],
    "tip_es": "Vocabulario oficial 2.2.1: Right away = directly (de inmediato / en el acto).",
    "ref": null,
    "human_rule": "right away = immediately.",
    "trigger_anchor": "right away ➔ directly",
    "spanglish_trap": "Traducir eventually como \"eventualmente = pronto\".",
    "workplace_usage": {
      "scenario": "Respuesta Rápida a Incidentes",
      "en": "The technician promised to open the security escalation ticket directly.",
      "es": "El técnico prometió abrir el ticket de escalación de seguridad de inmediato."
    }
  },
  {
    "id": "it1-mod2-sec2-list-q1",
    "section": "L",
    "objective": "L3",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on the conversation between Bobby and Peter, whose opinion is this? \"The situation is very uncommon.\"",
    "options": [
      "Both the woman and the man",
      "The man",
      "The woman",
      "Neither of them"
    ],
    "answer": 0,
    "why_correct": "• Pista: La pregunta pide quién opina: \"The situation is very uncommon\".\n• Significado: Según el diálogo, la opinión corresponde a: ambos.\n• Descartas: Las otras personas no expresan esa opinión en el audio.",
    "why_wrong": [
      "Opción correcta: Both the woman and the man.",
      "Incorrecto: The man no corresponde según el diálogo.",
      "Incorrecto: The woman no corresponde según el diálogo.",
      "Incorrecto: Neither of them no corresponde según el diálogo."
    ],
    "tip_es": "Peter dice: \"an unusual one, wasn't it?\" y Bobby responde: \"Yes indeed\". Ambos están de acuerdo $\\rightarrow$ Both.",
    "ref": "aud-it1-2.2",
    "human_rule": "Opinión = quién lo dice en el audio.",
    "trigger_anchor": "whose opinion ➔ who said it",
    "spanglish_trap": "Atribuir la opinión a quien no la dijo.",
    "workplace_usage": {
      "scenario": "Revisión Conjunta de Incidentes Anómalos",
      "en": "Both the manager and the junior engineer agreed that unauthorized access points were an unusual occurrence.",
      "es": "Tanto la gerente como el ingeniero junior coincidieron en que los puntos de acceso no autorizados eran un incidente inusual."
    }
  },
  {
    "id": "it1-mod2-sec2-list-q2",
    "section": "L",
    "objective": "L3",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on the conversation between Bobby and Peter, whose opinion is this? \"An incident like this is best handled by the security team.\"",
    "options": [
      "The man",
      "The woman",
      "Both the woman and the man",
      "Neither of them"
    ],
    "answer": 1,
    "why_correct": "• Pista: La pregunta pide quién opina: \"Best handled by the security team\".\n• Significado: Según el diálogo, la opinión corresponde a: la mujer.\n• Descartas: Las otras personas no expresan esa opinión en el audio.",
    "why_wrong": [
      "Incorrecto: The man no corresponde según el diálogo.",
      "Opción correcta: The woman.",
      "Incorrecto: Both the woman and the man no corresponde según el diálogo.",
      "Incorrecto: Neither of them no corresponde según el diálogo."
    ],
    "tip_es": "Bobby dice textualmente: \"They are the best people to analyze it...\" $\\rightarrow$ The woman.",
    "ref": "aud-it1-2.2",
    "human_rule": "Opinión = quién lo dice en el audio.",
    "trigger_anchor": "whose opinion ➔ who said it",
    "spanglish_trap": "Atribuir la opinión a quien no la dijo.",
    "workplace_usage": {
      "scenario": "Límites de Competencia en Soporte vs Ciberseguridad",
      "en": "The manager insisted that security incidents must be handled by the specialized InfoSec unit.",
      "es": "La gerente insistió en que los incidentes de seguridad deben ser gestionados por la unidad especializada de ciberseguridad."
    }
  },
  {
    "id": "it1-mod2-sec2-list-q3",
    "section": "L",
    "objective": "L3",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on the conversation between Bobby and Peter, whose opinion is this? \"It is not easy to follow the different rules from different organizations.\"",
    "options": [
      "The woman",
      "Both the woman and the man",
      "The man",
      "Neither of them"
    ],
    "answer": 2,
    "why_correct": "• Pista: La pregunta pide quién opina: \"Not easy to follow different rules\".\n• Significado: Según el diálogo, la opinión corresponde a: el hombre.\n• Descartas: Las otras personas no expresan esa opinión en el audio.",
    "why_wrong": [
      "Incorrecto: The woman no corresponde según el diálogo.",
      "Incorrecto: Both the woman and the man no corresponde según el diálogo.",
      "Opción correcta: The man.",
      "Incorrecto: Neither of them no corresponde según el diálogo."
    ],
    "tip_es": "Peter declara: \"In my previous job, there was no such policy... they can be a bit confusing at times\" $\\rightarrow$ The man.",
    "ref": "aud-it1-2.2",
    "human_rule": "Opinión = quién lo dice en el audio.",
    "trigger_anchor": "whose opinion ➔ who said it",
    "spanglish_trap": "Atribuir la opinión a quien no la dijo.",
    "workplace_usage": {
      "scenario": "Adaptación a Políticas de Nuevos Empleadores",
      "en": "The newly hired engineer struggled to transition between the lax rules of his old job and the strict protocols of his current company.",
      "es": "El ingeniero recién contratado tuvo dificultades para hacer la transición entre las reglas laxas de su trabajo anterior y los estrictos protocolos de su empresa actual."
    }
  },
  {
    "id": "it1-mod2-sec2-list-q4",
    "section": "L",
    "objective": "L3",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on the conversation between Bobby and Peter, whose opinion is this? \"The problem discussed can probably still be repaired with no consequences to the organization.\"",
    "options": [
      "Neither of them",
      "The man",
      "Both the woman and the man",
      "The woman"
    ],
    "answer": 3,
    "why_correct": "• Pista: La pregunta pide quién opina: \"Can still be repaired with no consequences\".\n• Significado: Según el diálogo, la opinión corresponde a: la mujer.\n• Descartas: Las otras personas no expresan esa opinión en el audio.",
    "why_wrong": [
      "Incorrecto: Neither of them no corresponde según el diálogo.",
      "Incorrecto: The man no corresponde según el diálogo.",
      "Incorrecto: Both the woman and the man no corresponde según el diálogo.",
      "Opción correcta: The woman."
    ],
    "tip_es": "Bobby dice: \"I noticed this just after you closed the ticket, so I believe it's not too late to report...\" $\\rightarrow$ The woman.",
    "ref": "aud-it1-2.2",
    "human_rule": "Opinión = quién lo dice en el audio.",
    "trigger_anchor": "whose opinion ➔ who said it",
    "spanglish_trap": "Atribuir la opinión a quien no la dijo.",
    "workplace_usage": {
      "scenario": "Ventana de Oportunidad para Mitigación de Brechas",
      "en": "The manager determined that reporting immediately after ticket closure prevented negative organizational fallout.",
      "es": "La gerente determinó que reportar inmediatamente después del cierre del ticket evitó consecuencias negativas para la organización."
    }
  }
];
