import { Question } from '../../types';

/**
 * English for IT 1 – Module 1: Product Management: Identify Problems
 * 1.3 Section 3 – Listening: UX Experience & Product Analytics
 * Official OpenEDG / Cisco Curriculum
 * Covers:
 *  - Vocabulary 1: mention an issue, invest money, reveal information, desire something, go back to something
 *  - Vocabulary 2: NPS (Net Promoter Score), Detractor, UX Experience
 *  - Listening Comprehension (aud-it1-1.3): Josh & Colleague reviewing customer survey, detractors, ROI & risk mitigation
 * 1.3.1 Vocab 1 (5 items) + 1.3.2 Vocab 2 (3 items) + 1.3.4 Listening (4 items) = 12 items
 */
export const ENGLISH_FOR_IT_1_SECTION_3_BANK: Question[] = [
  {
    "id": "it1-mod1-sec3-voc1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct phrase that means: \"Comment on a problem without giving much detail.\"",
    "options": [
      "mention an issue",
      "describe an issue",
      "explain an issue",
      "resolve an issue"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"without giving much detail\": sin dar detalle.\n• Significado: mention an issue = mencionar un problema.\n• Descartas: describe, explain y resolve implican más detalle o resolverlo.",
    "why_wrong": [
      "Opción correcta: mention = mencionar sin detalle.",
      "Incorrecto: describe da detalles.",
      "Incorrecto: explain da razones.",
      "Incorrecto: resolve soluciona."
    ],
    "tip_es": "Definición oficial: \"mention an issue\" = aludir o comentar brevemente un problema sin dar muchos detalles.",
    "ref": null,
    "human_rule": "mention = decir de pasada.",
    "trigger_anchor": "little detail ➔ mention",
    "spanglish_trap": "Traducir mention como \"mencionar\" con detalle.",
    "workplace_usage": {
      "scenario": "Revisión de Encuesta de Clientes",
      "en": "Several enterprise customers mentioned an issue with the checkout navigation during the survey.",
      "es": "Varios clientes empresariales mencionaron un problema con la navegación del checkout durante la encuesta."
    }
  },
  {
    "id": "it1-mod1-sec3-voc1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct phrase that means: \"Use money (for something) in order to earn more money.\"",
    "options": [
      "spend money",
      "invest money",
      "save money",
      "borrow money"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"in order to earn more money\": usar dinero para ganar más.\n• Significado: invest money = invertir.\n• Descartas: spend gasta; save guarda; borrow pide prestado.",
    "why_wrong": [
      "Incorrecto: spend = gastar.",
      "Opción correcta: invest = invertir.",
      "Incorrecto: save = ahorrar.",
      "Incorrecto: borrow = pedir prestado."
    ],
    "tip_es": "Definición oficial: \"invest money\" = destinar dinero con el propósito de generar más dinero (Return on Investment - ROI).",
    "ref": null,
    "human_rule": "invest = usar dinero para ganar más.",
    "trigger_anchor": "earn more ➔ invest",
    "spanglish_trap": "Confundir invest con spend.",
    "workplace_usage": {
      "scenario": "Defensa de Presupuesto de Producto",
      "en": "The executive committee decided to invest money in frontend performance to increase conversions.",
      "es": "El comité ejecutivo decidió invertir dinero en el rendimiento frontend para aumentar las conversiones."
    }
  },
  {
    "id": "it1-mod1-sec3-voc1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct phrase that means: \"Give information that was previously unknown.\"",
    "options": [
      "conceal information",
      "keep quiet",
      "reveal information",
      "withhold information"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"give information previously unknown\": dar a conocer.\n• Significado: reveal information = revelar.\n• Descartas: conceal, keep quiet y withhold son ocultar.",
    "why_wrong": [
      "Incorrecto: conceal = ocultar.",
      "Incorrecto: keep quiet = callar.",
      "Opción correcta: reveal = revelar.",
      "Incorrecto: withhold = retener."
    ],
    "tip_es": "Definición oficial: \"reveal information\" = desvelar o revelar información previamente desconocida.",
    "ref": null,
    "human_rule": "reveal = hacer público lo oculto.",
    "trigger_anchor": "unknown ➔ reveal",
    "spanglish_trap": "Confundir reveal con review.",
    "workplace_usage": {
      "scenario": "Auditoría de Riesgos de Experiencia de Usuario",
      "en": "Customer interviews can reveal information about the specific risks of not updating the interface.",
      "es": "Las entrevistas con clientes pueden revelar información sobre los riesgos específicos de no actualizar la interfaz."
    }
  },
  {
    "id": "it1-mod1-sec3-voc1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct phrase that means: \"Express a wish for something.\"",
    "options": [
      "enjoy something",
      "reject something",
      "like something",
      "desire something"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"Express a wish\": desear.\n• Significado: desire something = desear.\n• Descartas: enjoy, reject y like no expresan un deseo.",
    "why_wrong": [
      "Incorrecto: enjoy = disfrutar.",
      "Incorrecto: reject = rechazar.",
      "Incorrecto: like = gustar.",
      "Opción correcta: desire = desear."
    ],
    "tip_es": "Ejemplo del diálogo: \"Despite the fact that many customers desire them...\". \"Desire\" = manifestar un deseo de cambio.",
    "ref": null,
    "human_rule": "desire = querer algo con fuerza.",
    "trigger_anchor": "wish ➔ desire",
    "spanglish_trap": "Traducir desire como \"deseo sexual\".",
    "workplace_usage": {
      "scenario": "Priorización de Backlog de Producto",
      "en": "Although users desire a dark mode, the development team prioritized security patches first.",
      "es": "Aunque los usuarios desean un modo oscuro, el equipo de desarrollo priorizó primero los parches de seguridad."
    }
  },
  {
    "id": "it1-mod1-sec3-voc1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct phrase that means: \"Think or talk about something (from past conversations).\"",
    "options": [
      "go back to something",
      "put back something",
      "take back something",
      "look back something"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"from past conversations\": volver a un tema.\n• Significado: go back to something = retomar un tema.\n• Descartas: put back, take back y look back tienen otro sentido.",
    "why_wrong": [
      "Opción correcta: go back to = volver a un tema.",
      "Incorrecto: put back = devolver a su lugar.",
      "Incorrecto: take back = retirar lo dicho.",
      "Incorrecto: look back = mirar atrás."
    ],
    "tip_es": "Ejemplo del diálogo: \"It goes back to the discussions and the conclusions we came to some time ago.\" -> go back to = retomar.",
    "ref": null,
    "human_rule": "go back to = retomar.",
    "trigger_anchor": "past conversation ➔ go back to",
    "spanglish_trap": "Traducir go back como \"regresar físicamente\".",
    "workplace_usage": {
      "scenario": "Standup de Alineación de Producto",
      "en": "Let’s go back to what we agreed upon regarding the authentication architecture.",
      "es": "Regresemos a lo que acordamos con respecto a la arquitectura de autenticación."
    }
  },
  {
    "id": "it1-mod1-sec3-voc2-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Match the definition with the correct technical expression: \"A key indicator of customer satisfaction measured through survey scoring.\"",
    "options": [
      "SLA – Service Level Agreement",
      "NPS – Net Promoter Score survey",
      "KPI – Key Performance Indicator",
      "ROI – Return on Investment"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"customer satisfaction measured through survey scoring\": puntuación de encuesta.\n• Significado: NPS = Net Promoter Score.\n• Descartas: SLA es acuerdo; KPI es indicador general; ROI es retorno.",
    "why_wrong": [
      "Incorrecto: SLA es un acuerdo de servicio.",
      "Opción correcta: NPS = Net Promoter Score.",
      "Incorrecto: KPI es un indicador general.",
      "Incorrecto: ROI es retorno de inversión."
    ],
    "tip_es": "Definición oficial de la guía: \"A key indicator of customer satisfaction\" = NPS (Net Promoter Score).",
    "ref": null,
    "human_rule": "satisfacción por encuesta = NPS.",
    "trigger_anchor": "survey scoring ➔ NPS",
    "spanglish_trap": "Confundir KPI con NPS.",
    "workplace_usage": {
      "scenario": "Revisión Trimestral de Producto",
      "en": "Our quarterly NPS survey showed that 72% of enterprise customers would recommend our platform.",
      "es": "Nuestra encuesta trimestral de NPS mostró que el 72% de los clientes empresariales recomendarían nuestra plataforma."
    }
  },
  {
    "id": "it1-mod1-sec3-voc2-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Match the definition with the correct technical expression: \"A customer who has had a negative experience with a product or brand and rates it poorly.\"",
    "options": [
      "Passive customer",
      "Promoter",
      "Detractor",
      "Stakeholder"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"negative experience ... rates it poorly\": cliente insatisfecho.\n• Significado: Detractor = cliente que critica.\n• Descartas: Passive no se involucra; Promoter recomienda; Stakeholder es interesado.",
    "why_wrong": [
      "Incorrecto: Passive es neutral.",
      "Incorrecto: Promoter recomienda.",
      "Opción correcta: Detractor = critica.",
      "Incorrecto: Stakeholder es parte interesada."
    ],
    "tip_es": "Definición oficial: \"A customer who has had a negative experience with a product or brand\" = Detractor.",
    "ref": null,
    "human_rule": "detractor = crítico.",
    "trigger_anchor": "negative experience ➔ detractor",
    "spanglish_trap": "Confundir detractor con \"detective\".",
    "workplace_usage": {
      "scenario": "Plan de Mitigación de Churn de Producto",
      "en": "The percentage of detractors who complained about UI lag rose from 10% to 14%.",
      "es": "El porcentaje de detractores que se quejaron del retraso de la interfaz aumentó del 10% al 14%."
    }
  },
  {
    "id": "it1-mod1-sec3-voc2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Match the definition with the correct technical expression: \"The personal experience that a user has when interacting with a product's interface.\"",
    "options": [
      "Database Sharding",
      "Backend Architecture",
      "Network Peering",
      "UX Experience"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"personal experience when interacting with the interface\": experiencia de usuario.\n• Significado: UX = User Experience.\n• Descartas: Sharding, backend y peering son técnicos de infraestructura.",
    "why_wrong": [
      "Incorrecto: Sharding divide bases de datos.",
      "Incorrecto: Backend es lógica del servidor.",
      "Incorrecto: Peering conecta redes.",
      "Opción correcta: UX = experiencia de usuario."
    ],
    "tip_es": "Definición oficial: \"The personal experience that a user has when using a product’s interface\" = UX Experience.",
    "ref": null,
    "human_rule": "interfaz + usuario = UX.",
    "trigger_anchor": "interface experience ➔ UX",
    "spanglish_trap": "Confundir UX con UI.",
    "workplace_usage": {
      "scenario": "Diseño Centrado en el Usuario",
      "en": "Investing in UX experience reduced our customer support tickets by thirty percent.",
      "es": "Invertir en experiencia de usuario redujo nuestros tickets de soporte en un treinta por ciento."
    }
  },
  {
    "id": "it1-mod1-sec3-lis-q1",
    "section": "L",
    "objective": "L1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Listen to the conversation between the product managers. According to the survey results, the requests for UX improvements:",
    "options": [
      "have increased since last year.",
      "have decreased since the last survey.",
      "are going to be ignored.",
      "are the same as last year."
    ],
    "answer": 0,
    "why_correct": "• Pista: Resultados de la encuesta sobre mejoras de UX.\n• Significado: Las solicitudes han aumentado desde el año pasado.\n• Descartas: No disminuyeron, no se ignorarán y no son iguales.",
    "why_wrong": [
      "Opción correcta: have increased since last year.",
      "Incorrecto: \"have decreased since the last survey.\" no es lo que dice el audio.",
      "Incorrecto: \"are going to be ignored.\" no es lo que dice el audio.",
      "Incorrecto: \"are the same as last year.\" no es lo que dice el audio."
    ],
    "tip_es": "Evidencia auditiva de Josh: \"growing steadily since last year... increased from 10% to 14%\".",
    "ref": "aud-it1-1.3",
    "human_rule": "increase = han aumentado.",
    "trigger_anchor": "survey ➔ requests increased",
    "spanglish_trap": "Invertir la tendencia.",
    "workplace_usage": {
      "scenario": "Monitoreo de Detractores en Dashboards de Producto",
      "en": "The requests for UX improvements have increased since last year, jumping from 10% to 14%.",
      "es": "Las solicitudes de mejoras de UX han aumentado desde el año pasado, pasando del 10% al 14%."
    }
  },
  {
    "id": "it1-mod1-sec3-lis-q2",
    "section": "L",
    "objective": "L3",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on their discussion about budget and Return on Investment (ROI), the product managers:",
    "options": [
      "don't have any idea about the number of people who need better UX.",
      "are not sure about investing in UX improvements.",
      "don't have a clue what UX is about.",
      "prefer not to invest in UX improvements."
    ],
    "answer": 1,
    "why_correct": "• Pista: Hablan de presupuesto y ROI.\n• Significado: No están seguros de invertir en mejoras de UX.\n• Descartas: No dicen que no sepan qué es UX ni que prefieran no invertir.",
    "why_wrong": [
      "Incorrecto: \"don't have any idea about the number of people who need better UX.\" no es lo que dice el audio.",
      "Opción correcta: are not sure about investing in UX improvements.",
      "Incorrecto: \"don't have a clue what UX is about.\" no es lo que dice el audio.",
      "Incorrecto: \"prefer not to invest in UX improvements.\" no es lo que dice el audio."
    ],
    "tip_es": "Evidencia auditiva de la Product Manager: \"there is no evident return of investment... moving forward automatically is not necessarily a wise thing to do\".",
    "ref": "aud-it1-1.3",
    "human_rule": "unsure = no están seguros.",
    "trigger_anchor": "budget + ROI ➔ unsure",
    "spanglish_trap": "Confundir duda con rechazo.",
    "workplace_usage": {
      "scenario": "Defensa Financiera de Casos de Negocio",
      "en": "The managers are not sure about investing in UX improvements until a clear business impact is demonstrated.",
      "es": "Los gerentes no están seguros de invertir en mejoras de UX hasta que se demuestre un impacto comercial claro."
    }
  },
  {
    "id": "it1-mod1-sec3-lis-q3",
    "section": "L",
    "objective": "L2",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What is the primary rationale for conducting interviews with the dissatisfied customers? If the product managers interview the detractors:",
    "options": [
      "they will confirm that the number of detractors is correct.",
      "the detractors will be happier.",
      "they could learn why customers need UX improvements.",
      "it will tell them about the customer's approach to the survey."
    ],
    "answer": 2,
    "why_correct": "• Pista: Por qué entrevistar a los detractores.\n• Significado: Podrían saber por qué los clientes necesitan mejoras de UX.\n• Descartas: No es para hacerlos más felices ni para confirmar cifras.",
    "why_wrong": [
      "Incorrecto: \"they will confirm that the number of detractors is correct.\" no es lo que dice el audio.",
      "Incorrecto: \"the detractors will be happier.\" no es lo que dice el audio.",
      "Opción correcta: they could learn why customers need UX improvements.",
      "Incorrecto: \"it will tell them about the customer's approach to the survey.\" no es lo que dice el audio."
    ],
    "tip_es": "Evidencia auditiva de Josh: \"identify specific needs but also make the risks of not investing clearer\".",
    "ref": "aud-it1-1.3",
    "human_rule": "entrevista = entender el porqué.",
    "trigger_anchor": "interview detractors ➔ learn why",
    "spanglish_trap": "Pensar que es para convencerlos.",
    "workplace_usage": {
      "scenario": "Entrevistas de Descubrimiento de Usuario (User Discovery)",
      "en": "By interviewing detractors, the team could learn why customers need UX improvements to eliminate workflow blockers.",
      "es": "Al entrevistar a los detractores, el equipo pudo conocer por qué los clientes necesitan mejoras de UX para eliminar bloqueos de flujo."
    }
  },
  {
    "id": "it1-mod1-sec3-lis-q4",
    "section": "L",
    "objective": "L4",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "At the end of the conversation, the product managers decide:",
    "options": [
      "to concentrate on the opportunities of making UX improvements.",
      "to calculate the possible income from UX investments.",
      "not to contact the customers.",
      "to focus on the risks of not investing in UX improvements."
    ],
    "answer": 3,
    "why_correct": "• Pista: Al final deciden en qué enfocarse.\n• Significado: Enfocarse en los riesgos de no invertir en UX.\n• Descartas: No contactar clientes o solo calcular ingresos no es la decisión final.",
    "why_wrong": [
      "Incorrecto: \"to concentrate on the opportunities of making UX improvements.\" no es lo que dice el audio.",
      "Incorrecto: \"to calculate the possible income from UX investments.\" no es lo que dice el audio.",
      "Incorrecto: \"not to contact the customers.\" no es lo que dice el audio.",
      "Opción correcta: to focus on the risks of not investing in UX improvements."
    ],
    "tip_es": "Evidencia auditiva de la conclusión: \"...at least we can reveal the risks that might happen if we don’t invest in them. Josh: Absolutely, this is the best way forward\".",
    "ref": "aud-it1-1.3",
    "human_rule": "decisión final = riesgos de no invertir.",
    "trigger_anchor": "decide ➔ risks of not investing",
    "spanglish_trap": "Elegir la primera opción que suena positiva.",
    "workplace_usage": {
      "scenario": "Estrategia de Mitigación de Riesgos ante el Comité de Inversión",
      "en": "The product managers decided to focus on the risks of not investing in UX improvements to convince stakeholders.",
      "es": "Los gerentes de producto decidieron centrarse en los riesgos de no invertir en mejoras de UX para convencer a los interesados."
    }
  }
];
