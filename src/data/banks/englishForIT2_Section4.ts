import { Question } from '../../types';

/**
 * English for IT 2 – Section 4: Grammar – Since as a Conjunction
 * Official OpenEDG / Cisco Curriculum
 * Covers: Since = After (Time) vs. Since = Because (Cause/Reason) vs. Both
 * 1.4.3 Exercise 1 (6 items) & 1.4.4 Exercise 2 (6 items)
 */
export const ENGLISH_FOR_IT_2_SECTION_4_BANK: Question[] = [
  {
    "id": "it2-4-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Analyze the meaning of \"since\" in the sentence: \"Since we updated the system, we’ve had two very productive weeks.\"",
    "options": [
      "Both",
      "After",
      "Because",
      "Neither"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Since we updated the system, we've had two productive weeks\": se puede leer como \"desde que\" o como \"ya que\".\n• Regla: ambas lecturas encajan.\n• Descartas: \"After\" y \"Because\" solo cubren una.",
    "why_wrong": [
      "Opción correcta: es ambas (\"desde que actualizamos\" y \"porque actualizamos\").",
      "Incorrecto: After cubre solo el tiempo.",
      "Incorrecto: Because cubre solo la razón.",
      "Incorrecto: sí tiene un significado."
    ],
    "tip_es": "Ejemplo del video: \"Since we updated/upgraded...\" a menudo significa \"After\" (tiempo) y \"Because\" (causa) a la vez (BOTH).",
    "ref": null,
    "human_rule": "Since puede ser tiempo (desde que) o razón (ya que).",
    "trigger_anchor": "Since we updated the system, we've had two good weeks ➔ ambas",
    "spanglish_trap": "Elegir solo una lectura. Aquí funcionan las dos.",
    "workplace_usage": {
      "scenario": "Evaluación de Impacto de Versión",
      "en": "Since we automated container deployments, we've had zero failed production releases.",
      "es": "Desde que automatizamos los despliegues de contenedores / Dado que automatizamos los contenedores, hemos tenido cero fallos en producción."
    }
  },
  {
    "id": "it2-4-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Analyze the meaning of \"since\" in the sentence: \"Let’s hold the meeting now since the network is down. We have to manage our time effectively.\"",
    "options": [
      "After",
      "Because",
      "Both",
      "Neither"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Let's hold the meeting now since the network is down\": explica por qué.\n• Regla: razón ➔ \"ya que\".\n• Descartas: no marca un momento.",
    "why_wrong": [
      "Incorrecto: After sería \"después de\".",
      "Opción correcta: es razón (\"ya que la red está caída\").",
      "Incorrecto: no marca un momento.",
      "Incorrecto: sí tiene un significado."
    ],
    "tip_es": "Si puedes reemplazar \"since\" por \"because\" sin cambiar el sentido, su significado es causal (BECAUSE).",
    "ref": null,
    "human_rule": "since + estado actual = \"ya que\".",
    "trigger_anchor": "hold the meeting now since the network is down ➔ razón",
    "spanglish_trap": "Leer \"desde\". La frase explica un motivo.",
    "workplace_usage": {
      "scenario": "Reorganización durante Corte de Red",
      "en": "Let's conduct our sprint retrospective now since the primary database cluster is currently undergoing maintenance.",
      "es": "Hagamos la retrospectiva de sprint ahora ya que el clúster de base de datos principal está actualmente en mantenimiento."
    }
  },
  {
    "id": "it2-4-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Analyze the meaning of \"since\" in the sentence: \"Since they’re not willing to meet our requirements, we’re going to have problems with access.\"",
    "options": [
      "Both",
      "After",
      "Because",
      "Neither"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Since they're not willing…, we're going to have problems\": explica por qué.\n• Regla: razón ➔ \"ya que\".\n• Descartas: no marca un momento.",
    "why_wrong": [
      "Incorrecto: no es ambas; marca solo una razón.",
      "Incorrecto: After sería \"después de\".",
      "Opción correcta: es razón (\"ya que no están dispuestos\").",
      "Incorrecto: sí tiene un significado."
    ],
    "tip_es": "\"Since they're not willing...\" = \"BECAUSE they're not willing...\" (Causa y motivo).",
    "ref": null,
    "human_rule": "since + estado actual = \"ya que\".",
    "trigger_anchor": "Since they're not willing to meet our requirements ➔ razón",
    "spanglish_trap": "Leer \"desde\". Aquí el motivo es el presente.",
    "workplace_usage": {
      "scenario": "Negociación con Proveedores SaaS",
      "en": "Since the vendor is not willing to support SAML single sign-on, we cannot approve their tool.",
      "es": "Dado que el proveedor no está dispuesto a soportar inicio de sesión único SAML, no podemos aprobar su herramienta."
    }
  },
  {
    "id": "it2-4-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Analyze the meaning of \"since\" in the sentence: \"Since you’ve become more involved in this process, can you update us and comment on what your next step would be?\"",
    "options": [
      "Neither",
      "After",
      "Both",
      "Because"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"Since you've become more involved, can you update us…\": explica por qué se pide.\n• Regla: razón ➔ \"ya que\".\n• Descartas: no marca un momento.",
    "why_wrong": [
      "Incorrecto: sí tiene un significado.",
      "Incorrecto: After sería \"después de\".",
      "Incorrecto: no es ambas; marca una razón.",
      "Opción correcta: es razón (\"ya que te has implicado más\")."
    ],
    "tip_es": "Petición diplomática justificada: \"Since [motivo], can you update us...?\" -> equivale a BECAUSE.",
    "ref": null,
    "human_rule": "since + hecho actual = \"ya que\".",
    "trigger_anchor": "Since you've become more involved, can you update us…? ➔ razón",
    "spanglish_trap": "Leer \"desde que te implicas\". El motivo del pedido es la implicación.",
    "workplace_usage": {
      "scenario": "Coordinación en Stand-up Diario",
      "en": "Since you investigated the latency logs this morning, could you brief the team on your findings?",
      "es": "Dado que investigaste los logs de latencia esta mañana, ¿podrías informar al equipo sobre tus hallazgos?"
    }
  },
  {
    "id": "it2-4-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Analyze the meaning of \"since\" in the sentence: \"Since I first saw the wrong password messages, I’ve noticed that the configured MD5 hashes are different.\"",
    "options": [
      "After",
      "Because",
      "Both",
      "Neither"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Since I first saw the wrong password messages, I've noticed…\": marca desde cuándo.\n• Regla: tiempo ➔ \"desde que\".\n• Descartas: no explica un motivo.",
    "why_wrong": [
      "Opción correcta: es tiempo (\"desde que vi los mensajes\").",
      "Incorrecto: no explica un motivo.",
      "Incorrecto: no es ambas; marca un momento.",
      "Incorrecto: sí tiene un significado."
    ],
    "tip_es": "Fórmula temporal del video: [Since + PAST SIMPLE, PRESENT PERFECT] = AFTER (tiempo).",
    "ref": null,
    "human_rule": "since + momento del pasado = \"desde que\".",
    "trigger_anchor": "Since I first saw the messages, I've noticed… ➔ tiempo",
    "spanglish_trap": "Leer \"ya que\". Con \"first saw\" marca el momento.",
    "workplace_usage": {
      "scenario": "Auditoría Forense de Logs",
      "en": "Since the firewall alerted on unauthorized outbound probes, we have monitored that subnet closely.",
      "es": "Desde que el firewall alertó sobre sondeos salientes no autorizados, hemos monitoreado esa subred de cerca."
    }
  },
  {
    "id": "it2-4-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Analyze the meaning of \"since\" in the sentence: \"Since that first meeting when they mentioned their reservations, I’ve been reworking the proposals. As their demands are very specific, it hasn’t been easy.\"",
    "options": [
      "Because",
      "After",
      "Both",
      "Neither"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Since that first meeting…, I've been reworking\": marca desde cuándo.\n• Regla: tiempo ➔ \"desde que\".\n• Descartas: el motivo está en la frase siguiente (\"As their demands…\").",
    "why_wrong": [
      "Incorrecto: la razón la da \"As their demands…\".",
      "Opción correcta: es tiempo (\"desde aquella primera reunión\").",
      "Incorrecto: no es ambas; marca un momento.",
      "Incorrecto: sí tiene un significado."
    ],
    "tip_es": "\"Since that first meeting... I've been reworking\" = AFTER (marca el momento de inicio de una tarea en progreso).",
    "ref": null,
    "human_rule": "since + momento del pasado = \"desde\".",
    "trigger_anchor": "Since that first meeting… I've been reworking ➔ tiempo",
    "spanglish_trap": "Mezclar con el \"As\" de la frase siguiente. Esa es la razón; since marca el tiempo.",
    "workplace_usage": {
      "scenario": "Ajuste de Propuesta de Arquitectura",
      "en": "Since our initial kickoff call, our cloud architects have been refining the infrastructure sizing model.",
      "es": "Desde nuestra llamada inicial de lanzamiento, nuestros arquitectos cloud han estado perfeccionando el modelo de dimensionamiento."
    }
  },
  {
    "id": "it2-4-ex2-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Does \"since\" show Time or Cause/Reason in this sentence: \"Since we finally settled the firewall problem, we’ve had fewer issues to solve, plus productivity is up.\"",
    "options": [
      "Both",
      "Cause/reason",
      "Time",
      "Neither"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Since we finally settled the firewall problem, we've had fewer issues\": marca desde cuándo.\n• Regla: tiempo ➔ \"desde que\".\n• Descartas: el resultado sigue desde ese momento.",
    "why_wrong": [
      "Incorrecto: no es ambas; marca un momento.",
      "Incorrecto: no explica por qué.",
      "Opción correcta: es tiempo (\"desde que resolvimos\").",
      "Incorrecto: sí tiene un significado."
    ],
    "tip_es": "Estructura temporal fija: [Past Simple + we've had] = TIME.",
    "ref": null,
    "human_rule": "since + hecho pasado + have + 3.ª forma = tiempo.",
    "trigger_anchor": "Since we settled the firewall problem, we've had fewer issues ➔ tiempo",
    "spanglish_trap": "Leer \"ya que\". El \"we've had\" marca que dura desde entonces.",
    "workplace_usage": {
      "scenario": "Estabilización de Infraestructura",
      "en": "Since we deployed the redundant core switch, we have recorded zero network dropouts.",
      "es": "Desde que desplegamos el switch central redundante, hemos registrado cero caídas de red."
    }
  },
  {
    "id": "it2-4-ex2-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Does \"since\" show Time or Cause/Reason in this sentence: \"We just couldn’t manage since we had so few team members with adequate training.\"",
    "options": [
      "Neither",
      "Time",
      "Both",
      "Cause/reason"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"We couldn't manage since we had so few team members\": explica por qué.\n• Regla: razón ➔ \"ya que\".\n• Descartas: no marca un momento.",
    "why_wrong": [
      "Incorrecto: sí tiene un significado.",
      "Incorrecto: no marca un momento.",
      "Incorrecto: no es ambas; marca una razón.",
      "Opción correcta: es razón (\"ya que teníamos tan poco personal\")."
    ],
    "tip_es": "Reemplaza mentalmente por \"because\": \"We couldn't manage BECAUSE we had so few members...\" -> CAUSE/REASON.",
    "ref": null,
    "human_rule": "since + motivo = \"ya que\".",
    "trigger_anchor": "We couldn't manage since we had so few team members ➔ razón",
    "spanglish_trap": "Leer \"desde\". La frase explica un motivo.",
    "workplace_usage": {
      "scenario": "Retrospectiva de Capacidad de Equipo",
      "en": "We missed the sprint velocity target since two backend engineers were assigned to critical production hotfixes.",
      "es": "No alcanzamos el objetivo de velocidad del sprint porque dos ingenieros de backend fueron asignados a parches críticos de producción."
    }
  },
  {
    "id": "it2-4-ex2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Does \"since\" show Time or Cause/Reason in this sentence: \"She’s managed several projects since she started at the company.\"",
    "options": [
      "Time",
      "Cause/reason",
      "Both",
      "Neither"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"She's managed several projects since she started at the company\": marca desde cuándo.\n• Regla: tiempo ➔ \"desde que\".\n• Descartas: no explica un motivo.",
    "why_wrong": [
      "Opción correcta: es tiempo (\"desde que empezó\").",
      "Incorrecto: no explica un motivo.",
      "Incorrecto: no es ambas; marca un momento.",
      "Incorrecto: sí tiene un significado."
    ],
    "tip_es": "\"since she started\" = TIME (\"desde que empezó\", punto de partida temporal).",
    "ref": null,
    "human_rule": "have + 3.ª forma + since + momento = tiempo.",
    "trigger_anchor": "She's managed several projects since she started ➔ tiempo",
    "spanglish_trap": "Leer \"ya que\". El \"has managed\" marca que dura desde ese momento.",
    "workplace_usage": {
      "scenario": "Evaluación de Desempeño",
      "en": "He has resolved over two hundred escalation tickets since he joined our cloud reliability squad.",
      "es": "Ha resuelto más de doscientos tickets de escalación desde que se unió a nuestro equipo de confiabilidad cloud."
    }
  },
  {
    "id": "it2-4-ex2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Does \"since\" show Time or Cause/Reason in this sentence: \"Since they’d been overworked, they made some basic errors and fell behind schedule.\"",
    "options": [
      "Time",
      "Cause/reason",
      "Both",
      "Neither"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Since they'd been overworked, they made some basic errors\": explica por qué.\n• Regla: razón ➔ \"ya que\".\n• Descartas: no marca un momento.",
    "why_wrong": [
      "Incorrecto: no marca un momento.",
      "Opción correcta: es razón (\"ya que estaban sobrecargados\").",
      "Incorrecto: no es ambas; marca una razón.",
      "Incorrecto: sí tiene un significado."
    ],
    "tip_es": "\"Since they'd been overworked...\" = \"BECAUSE they'd been overworked...\" -> CAUSE/REASON.",
    "ref": null,
    "human_rule": "since + motivo = \"ya que\".",
    "trigger_anchor": "Since they'd been overworked, they made basic errors ➔ razón",
    "spanglish_trap": "Leer \"desde\". La frase explica un motivo.",
    "workplace_usage": {
      "scenario": "Análisis Blameless de Fatiga en Guardia",
      "en": "Since the on-call engineer had been awakened three times overnight, an accidental parameter typo occurred.",
      "es": "Dado que el ingeniero de guardia había sido despertado tres veces durante la noche, ocurrió una errata accidental de parámetros."
    }
  },
  {
    "id": "it2-4-ex2-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Does \"since\" show Time or Cause/Reason in this sentence: \"Since they failed to consider our doubts during the decision-making process, we struggled to adapt to their implementations.\"",
    "options": [
      "Both",
      "Time",
      "Cause/reason",
      "Neither"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Since they failed to consider our doubts, we struggled\": explica por qué.\n• Regla: razón ➔ \"ya que\".\n• Descartas: no marca un momento.",
    "why_wrong": [
      "Incorrecto: no es ambas; marca una razón.",
      "Incorrecto: no marca un momento.",
      "Opción correcta: es razón (\"ya que no consideraron nuestras dudas\").",
      "Incorrecto: sí tiene un significado."
    ],
    "tip_es": "Causa técnica: \"Since they failed to consider...\" = \"Because they failed to consider...\" -> CAUSE/REASON.",
    "ref": null,
    "human_rule": "since + motivo = \"ya que\".",
    "trigger_anchor": "Since they failed to consider our doubts, we struggled ➔ razón",
    "spanglish_trap": "Leer \"desde\". La frase explica un motivo.",
    "workplace_usage": {
      "scenario": "Revisión de Arquitectura Interdepartamental",
      "en": "Since the platform team failed to document the breaking API changes, several consumer microservices crashed.",
      "es": "Dado que el equipo de plataforma no documentó los cambios disruptivos de la API, varios microservicios consumidores fallaron."
    }
  },
  {
    "id": "it2-4-ex2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G15",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Does \"since\" show Time or Cause/Reason in this sentence: \"We’ve been working so many hours since the data loss incident. Everyone is stressed.\"",
    "options": [
      "Neither",
      "Cause/reason",
      "Both",
      "Time"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"We've been working so many hours since the data loss incident\": marca desde cuándo.\n• Regla: tiempo ➔ \"desde\".\n• Descartas: no explica un motivo.",
    "why_wrong": [
      "Incorrecto: sí tiene un significado.",
      "Incorrecto: no explica un motivo.",
      "Incorrecto: no es ambas; marca un momento.",
      "Opción correcta: es tiempo (\"desde el incidente\")."
    ],
    "tip_es": "[Present Perfect Continuous + SINCE + evento en pasado] = TIME (\"desde aquel incidente\").",
    "ref": null,
    "human_rule": "have been + -ing + since + momento = tiempo.",
    "trigger_anchor": "We've been working so many hours since the data loss incident ➔ tiempo",
    "spanglish_trap": "Leer \"ya que\". El \"have been working\" marca que dura desde ese momento.",
    "workplace_usage": {
      "scenario": "Post-Incidente de Recuperación de Desastres",
      "en": "The security team has been auditing audit logs around the clock since the ransomware outbreak.",
      "es": "El equipo de seguridad ha estado auditando logs las 24 horas desde el brote de ransomware."
    }
  }
];
