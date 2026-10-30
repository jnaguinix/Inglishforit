import { Question } from '../../types';

/**
 * English for IT 1 – Module 1: Product Management: Identify Problems
 * 1.2 Section 2 – Grammar: Relative Pronouns & Nominal Relative Clauses
 * Official OpenEDG / Cisco Curriculum
 * Covers:
 *  - Standard Relative Pronouns: THAT, WHICH, WHO, WHOM, WHOSE
 *  - Nominal Relative Clauses: WHAT, WHEN, WHERE, HOW, WHO, WHY ("what" = the thing that)
 * 1.2.3 Exercise 1 (6 items) & 1.2.4 Exercise 2 (6 items)
 */
export const ENGLISH_FOR_IT_1_SECTION_2_BANK: Question[] = [
  {
    "id": "it1-mod1-sec2-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"Talking to the customer service team is __________ they should be doing.\"",
    "options": [
      "what",
      "who",
      "that",
      "which"
    ],
    "answer": 0,
    "why_correct": "• Pista: antes del hueco no hay ninguna cosa nombrada; en español dirías \"lo que\" (es lo que deberían hacer).\n• Regla: \"lo que\" sin cosa antes ➔ what.\n• Descartas: who es para personas; that y which necesitan una cosa nombrada justo antes.",
    "why_wrong": [
      "Opción correcta: what = \"lo que\"; une la cosa y el \"que\" en una sola palabra.",
      "Incorrecto: who es para personas, y aquí \"hablar con el equipo\" es una actividad.",
      "Incorrecto: that necesita una cosa nombrada antes (\"the thing that\").",
      "Incorrecto: which necesita una cosa nombrada antes (\"the task which\")."
    ],
    "tip_es": "Regla del video: En las nominal relative clauses, \"WHAT\" equivale a \"the thing that / which\" (la cosa o acción que).",
    "ref": null,
    "human_rule": "Cuando en español dirías \"lo que…\" sin nombrar la cosa, en inglés es what.",
    "trigger_anchor": "is ______ they should be doing (es lo que) ➔ what",
    "spanglish_trap": "Querer usar that o which porque en español \"que\" sirve para todo. Si no hay una cosa nombrada antes y dirías \"lo que\", es what.",
    "workplace_usage": {
      "scenario": "Reunión de Coordinación de Soporte y Producto",
      "en": "Talking to the customer service team is what they should be doing before closing feature requests.",
      "es": "Hablar con el equipo de atención al cliente es lo que deberían estar haciendo antes de cerrar solicitudes de funciones."
    }
  },
  {
    "id": "it1-mod1-sec2-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"The feedback from the survey __________ we carried out last month has been very positive.\"",
    "options": [
      "what",
      "which",
      "who",
      "where"
    ],
    "answer": 1,
    "why_correct": "• Pista: justo antes del hueco hay una cosa (\"the survey\").\n• Regla: \"que\" después de una cosa ➔ which o that.\n• Descartas: what no se usa si la cosa ya está nombrada; who es para personas; where es para lugares.",
    "why_wrong": [
      "Incorrecto: what no se usa cuando la cosa ya está nombrada (\"the survey\").",
      "Opción correcta: which, porque antes está la cosa \"the survey\".",
      "Incorrecto: who es para personas, no para encuestas.",
      "Incorrecto: where es para lugares, y aquí no se habla de un lugar."
    ],
    "tip_es": "Ejemplo del video: \"The penetration test which we ran two weeks ago...\". Con cosas que tienen antecedente expreso se usa \"which\" o \"that\". ¡Nunca \"what\"!",
    "ref": null,
    "human_rule": "\"La encuesta que hicimos\" ➔ the survey which / that we carried out. Nunca \"the survey what\".",
    "trigger_anchor": "the survey ______ we carried out (cosa + que) ➔ which",
    "spanglish_trap": "Traducir \"la encuesta que hicimos\" como \"the survey what we did\". Si la cosa ya está nombrada, nunca what.",
    "workplace_usage": {
      "scenario": "Presentación de Resultados de Encuesta de Clientes",
      "en": "The feedback from the survey which we carried out last month has been very positive.",
      "es": "El feedback de la encuesta que llevamos a cabo el mes pasado ha sido muy positivo."
    }
  },
  {
    "id": "it1-mod1-sec2-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"Problems occur __________ we ignore demands for improvements in UX experience.\"",
    "options": [
      "how",
      "what",
      "when",
      "who"
    ],
    "answer": 2,
    "why_correct": "• Pista: en español dirías \"cuando\"; el hueco marca el momento en que ocurren los problemas.\n• Regla: momento ➔ when.\n• Descartas: how es \"cómo\" (manera); what sería \"lo que\"; who es para personas.",
    "why_wrong": [
      "Incorrecto: how significa \"de qué manera\"; aquí no hablas de la manera sino del momento.",
      "Incorrecto: what daría \"los problemas ocurren lo que ignoramos\", que no tiene sentido.",
      "Opción correcta: when = \"cuando\"; marca en qué circunstancia aparecen los problemas.",
      "Incorrecto: who es para personas, y no hay ninguna persona nombrada."
    ],
    "tip_es": "Regla del video: WHAT, WHEN, WHERE, HOW, WHO & WHY se usan para nominal relative clauses. Para momentos o circunstancias se usa \"WHEN\".",
    "ref": null,
    "human_rule": "\"Ocurre cuando…\" ➔ occur when…",
    "trigger_anchor": "Problems occur ______ we ignore (cuando) ➔ when",
    "spanglish_trap": "Dudar entre when y what porque ambas abren una frase nueva. Si dirías \"cuando\", es when.",
    "workplace_usage": {
      "scenario": "Análisis de Deuda Técnica y Experiencia de Usuario",
      "en": "Problems occur when we ignore demands for improvements in UX experience.",
      "es": "Los problemas ocurren cuando ignoramos las demandas de mejoras en la experiencia de usuario."
    }
  },
  {
    "id": "it1-mod1-sec2-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"This is Ife, __________ team is renegotiating the deal with the client.\"",
    "options": [
      "whom",
      "what",
      "who",
      "whose"
    ],
    "answer": 3,
    "why_correct": "• Pista: después del hueco viene \"team\", que pertenece a Ife (\"cuyo equipo\").\n• Regla: \"cuyo / cuya\" ➔ whose.\n• Descartas: whom y who no pueden ir delante de \"team\"; what no se usa con personas.",
    "why_wrong": [
      "Incorrecto: whom es \"a quien\" y no expresa de quién es el equipo.",
      "Incorrecto: what no se usa con personas.",
      "Incorrecto: who sería \"quien\"; pegado a \"team\" no funciona (\"Ife, who team…\").",
      "Opción correcta: whose = \"cuyo\"; une a Ife con su equipo."
    ],
    "tip_es": "Ejemplo del video: \"It’s not my team whose data is being questioned.\" Posesión = WHOSE.",
    "ref": null,
    "human_rule": "\"Ife, cuyo equipo…\" ➔ Ife, whose team…",
    "trigger_anchor": "Ife, ______ team (cuyo equipo) ➔ whose",
    "spanglish_trap": "Confundir whose con who o who's. Si cabe \"cuyo\", es whose.",
    "workplace_usage": {
      "scenario": "Presentación de Líder de Squad en Negociación Comercial",
      "en": "This is Ife, whose team is renegotiating the deal with the client.",
      "es": "Esta es Ife, cuyo equipo está renegociando el acuerdo con el cliente."
    }
  },
  {
    "id": "it1-mod1-sec2-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"That is __________ I am inviting you to the feedback session.\"",
    "options": [
      "why",
      "what",
      "who",
      "which"
    ],
    "answer": 0,
    "why_correct": "• Pista: lo que sigue explica la razón de la invitación (\"por eso te invito\").\n• Regla: \"por eso / la razón por la que\" ➔ That is why.\n• Descartas: what no da razones; who es para personas; which necesita una cosa nombrada antes.",
    "why_wrong": [
      "Opción correcta: \"That is why…\" da la razón de la invitación.",
      "Incorrecto: \"That is what I am inviting you\" queda a medias (falta \"to\") y no da una razón.",
      "Incorrecto: who es para personas; aquí no hay ninguna.",
      "Incorrecto: which necesita una cosa nombrada justo antes."
    ],
    "tip_es": "Ejemplo del video: \"That’s why I’m asking you.\" -> El enunciado previo es la razón (the reason why).",
    "ref": null,
    "human_rule": "\"Por eso te invito\" ➔ That is why I am inviting you.",
    "trigger_anchor": "That is ______ I am inviting you (por eso) ➔ why",
    "spanglish_trap": "Traducir \"por eso\" como \"that is what\". Cuando das una razón, es that is why.",
    "workplace_usage": {
      "scenario": "Convocatoria a Sesión de Retroalimentación de Producto",
      "en": "That is why I am inviting you to the feedback session.",
      "es": "Por esa razón es que te estoy invitando a la sesión de feedback."
    }
  },
  {
    "id": "it1-mod1-sec2-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"That is __________ I was hoping to discuss with you.\"",
    "options": [
      "why",
      "what",
      "who",
      "where"
    ],
    "answer": 1,
    "why_correct": "• Pista: el hueco es \"lo que\" quería comentar contigo; no hay una cosa nombrada antes.\n• Regla: \"lo que\" ➔ what.\n• Descartas: why es para razones; who es para personas; where es para lugares.",
    "why_wrong": [
      "Incorrecto: why es para razones; aquí buscas \"lo que\" quería comentar, no \"por qué\".",
      "Opción correcta: what = \"lo que\"; es lo que quería comentar.",
      "Incorrecto: who es para personas.",
      "Incorrecto: where es para lugares."
    ],
    "tip_es": "Ejemplo del video: \"That’s what I was talking about.\" -> El pronombre nominal \"what\" significa \"the thing which / that\".",
    "ref": null,
    "human_rule": "\"Eso es lo que quería comentar contigo\" ➔ That is what I was hoping to discuss with you.",
    "trigger_anchor": "That is ______ I was hoping to discuss (es lo que) ➔ what",
    "spanglish_trap": "Dudar entre why y what. Why da una razón; what es \"lo que\".",
    "workplace_usage": {
      "scenario": "Discusión de Puntos Clave en 1-on-1",
      "en": "That is what I was hoping to discuss with you during our 1-on-1 review.",
      "es": "Eso es exactamente lo que esperaba discutir contigo durante nuestra revisión 1 a 1."
    }
  },
  {
    "id": "it1-mod1-sec2-ex2-q1",
    "section": "UE",
    "objective": "UE2",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: \"Could you help me understand how it’s going to work after the product launch?\"\n\nPerson B: \"__________\"",
    "options": [
      "The documentation who is in your email will tell you everything.",
      "You can read more in the report, how I mentioned to you.",
      "It would be best if you could go through the documentation which I sent you last week.",
      "Nothing, why you’re not aware of what will be happening."
    ],
    "answer": 2,
    "why_correct": "• Pista: la opción habla de \"documentation\", una cosa, y la conecta con which.\n• Regla: cosa ➔ which o that, nunca who.\n• Descartas: A usa who con una cosa; B usa \"how\" donde se dice \"as\"; D no tiene sentido como respuesta.",
    "why_wrong": [
      "Incorrecto: usa who con \"documentation\", que es una cosa.",
      "Incorrecto: \"how I mentioned\" es una traducción literal; en inglés se dice \"as I mentioned\".",
      "Opción correcta: \"documentation which I sent you\" usa which con una cosa y suena cortés.",
      "Incorrecto: \"Nothing, why you're not aware…\" no tiene sentido como respuesta."
    ],
    "tip_es": "Verifica la concordancia: cosas inanimadas (\"documentation\", \"report\", \"test\") exigen \"which\" o \"that\", ¡nunca \"who\"!",
    "ref": null,
    "human_rule": "Con documentos, archivos o guías (cosas), usa which o that; nunca who.",
    "trigger_anchor": "documentation ______ I sent you (cosa + que) ➔ which",
    "spanglish_trap": "Elegir A porque se parece al español (\"la documentación que\"). Con una cosa nunca who.",
    "workplace_usage": {
      "scenario": "Inducción de Soporte Post-Lanzamiento",
      "en": "It would be best if you could go through the documentation which I sent you last week.",
      "es": "Sería mejor si pudieras revisar la documentación que te envié la semana pasada."
    }
  },
  {
    "id": "it1-mod1-sec2-ex2-q2",
    "section": "UE",
    "objective": "UE2",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: \"What is your feedback on the product configuration?\"\n\nPerson B: \"__________\"",
    "options": [
      "That's not how the team that implemented it did it.",
      "Why it didn't work is how we expected it to be.",
      "The configuration, what your team did, is what we need.",
      "Please tell the team who implemented it that they’ve got our initial approval."
    ],
    "answer": 3,
    "why_correct": "• Pista: piden opinión sobre la configuración; la opción D responde y usa who para personas (\"the team who implemented it\").\n• Regla: personas ➔ who (o that).\n• Descartas: C usa what pegado a \"configuration\"; A y B no responden con una opinión.",
    "why_wrong": [
      "Incorrecto: no da una opinión sobre la configuración; solo dice cómo lo hizo otro equipo.",
      "Incorrecto: mezcla palabras que no encajan y no tiene un sentido claro.",
      "Incorrecto: usa what justo después de \"configuration\"; después de una cosa nombrada va which.",
      "Opción correcta: responde con una opinión y usa who para personas (\"the team who implemented it\")."
    ],
    "tip_es": "Regla del video: Nunca digas \"The configuration, what your team did...\". Tras un antecedente se usa \"which\" o \"that\", mientras que \"who\" se usa para personas/equipos.",
    "ref": null,
    "human_rule": "Personas ➔ who. Y nunca what pegado a una cosa nombrada (\"configuration what\").",
    "trigger_anchor": "the team ______ implemented it (personas) ➔ who",
    "spanglish_trap": "Caer en la opción C porque what suena a \"lo que\". Después de una cosa nombrada, nunca what.",
    "workplace_usage": {
      "scenario": "Aprobación de Configuración de Entorno Staging",
      "en": "Please tell the team who implemented it that they’ve got our initial approval.",
      "es": "Por favor dile al equipo que lo implementó que tienen nuestra aprobación inicial."
    }
  },
  {
    "id": "it1-mod1-sec2-ex2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: \"Now the entry page has only three simple dashboards, nothing fancy.\"\n\nPerson B: \"__________\"",
    "options": [
      "That’s exactly what the customers need.",
      "That is why we don’t need!",
      "Who can say - it’s terrible.",
      "That’s okay. It is which I would expect it."
    ],
    "answer": 0,
    "why_correct": "• Pista: la respuesta es \"eso es exactamente lo que necesitan los clientes\", sin cosa nombrada antes de \"lo que\".\n• Regla: \"lo que\" ➔ what.\n• Descartas: B mezcla why con what; C no es una respuesta profesional; D usa which sin cosa antes y repite \"it\".",
    "why_wrong": [
      "Opción correcta: what = \"lo que\".",
      "Incorrecto: \"That is why we don't need\" mezcla \"por eso\" con \"lo que\" y queda a medias.",
      "Incorrecto: \"Who can say - it's terrible\" no es una respuesta profesional ni encaja con el tema.",
      "Incorrecto: \"It is which I would expect it\" usa which sin una cosa nombrada antes y repite \"it\"."
    ],
    "tip_es": "Ejemplo del video: \"Regular security awareness training is what we need.\" -> [That’s exactly WHAT the customers need].",
    "ref": null,
    "human_rule": "\"Eso es exactamente lo que necesitan\" ➔ That's exactly what they need.",
    "trigger_anchor": "That's exactly ______ the customers need (lo que) ➔ what",
    "spanglish_trap": "Usar which o why donde en español dirías \"lo que\". Si dices \"lo que\", es what.",
    "workplace_usage": {
      "scenario": "Validación de Interfaz de Usuario Simplificada",
      "en": "That’s exactly what the customers need to complete onboarding without friction.",
      "es": "Eso es exactamente lo que los clientes necesitan para completar el registro inicial sin fricción."
    }
  },
  {
    "id": "it1-mod1-sec2-ex2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: \"Do we get more support team help during the assessment stage?\"\n\nPerson B: \"__________\"",
    "options": [
      "No, as we learned from previous customers, there is a need for it.",
      "The only people you engage in the beginning are the field teams, whom you've already met.",
      "The managers what you’ve met should be enough.",
      "No. The assessment is the easiest part, where should be done on your side."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"the field teams, whom you've already met\" = \"los equipos, a quienes ya conociste\": personas, y a ellas les pasó la acción.\n• Regla: \"a quien(es)\" ➔ whom (formal).\n• Descartas: C pone what pegado a \"managers\"; D usa where como si fuera quien actúa; A se contradice.",
    "why_wrong": [
      "Incorrecto: se contradice (responde \"No\" y luego dice que sí hay una necesidad).",
      "Opción correcta: whom = \"a quienes\", forma formal para personas que reciben la acción.",
      "Incorrecto: usa what pegado a \"managers\"; con personas nombradas va who o whom.",
      "Incorrecto: usa where como si fuera quien hace la acción; aquí iría which."
    ],
    "tip_es": "Regla del video: Los pronombres relativos estándar son THAT, WHICH, WHO, WHOM & WHOSE. \"Whom\" se usa formalmente para personas cuando son objeto.",
    "ref": null,
    "human_rule": "\"Los equipos, a quienes ya conociste\" ➔ the teams, whom you've already met.",
    "trigger_anchor": "teams, ______ you've already met (a quienes) ➔ whom",
    "spanglish_trap": "Pensar que whom es raro y evitarlo. Es la forma formal de \"a quien(es)\" cuando hablas de personas.",
    "workplace_usage": {
      "scenario": "Alcance de Soporte en Fase de Evaluación",
      "en": "The only people you engage in the beginning are the field teams, whom you've already met.",
      "es": "Las únicas personas con las que interactúas al principio son los equipos de campo, a quienes ya conociste."
    }
  },
  {
    "id": "it1-mod1-sec2-ex2-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: \"How many people are giving us feedback regarding this issue?\"\n\nPerson B: \"__________\"",
    "options": [
      "The number of feedback that we received is good.",
      "The number of people which have given feedback is quite small.",
      "The number of customers who mentioned it has decreased.",
      "The number of clients what commented on it has increased."
    ],
    "answer": 2,
    "why_correct": "• Pista: preguntan cuántas personas dan su opinión; la opción C responde con \"customers who mentioned it\".\n• Regla: personas ➔ who, nunca which ni what.\n• Descartas: A usa \"the number of\" con feedback, que no se cuenta; B usa which con personas; D usa what con clientes.",
    "why_wrong": [
      "Incorrecto: feedback no se cuenta; \"the number of\" pide algo contable (para feedback se dice \"the amount of\").",
      "Incorrecto: \"people which\"; con personas va who.",
      "Opción correcta: \"customers who mentioned it\" usa who con personas contables.",
      "Incorrecto: \"clients what\"; what no va pegado a una persona nombrada."
    ],
    "tip_es": "Concordancia B2 fundamental: para personas (\"people\", \"customers\", \"clients\") se usa \"WHO\". ¡Nunca \"which\" ni \"what\"!",
    "ref": null,
    "human_rule": "Personas ➔ who. Cosas ➔ which o that. Nunca what pegado a un sustantivo.",
    "trigger_anchor": "number of customers ______ mentioned it (personas) ➔ who",
    "spanglish_trap": "Elegir B (\"people which\") porque suena natural en español (\"gente que\"). Con personas siempre who.",
    "workplace_usage": {
      "scenario": "Métricas de Incidencia en Soporte al Cliente",
      "en": "The number of customers who mentioned it has decreased significantly since the patch.",
      "es": "El número de clientes que lo mencionaron ha disminuido significativamente desde el parche."
    }
  },
  {
    "id": "it1-mod1-sec2-ex2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the best answer option to complete the conversation:\n\nPerson A: \"Have you seen the results of the customer survey?\"\n\nPerson B: \"__________\"",
    "options": [
      "Is which one was sent out last month?",
      "Is which one the one who was sent out last month?",
      "Is that the one whom sent out last month?",
      "Is that the one which was sent out last month?"
    ],
    "answer": 3,
    "why_correct": "• Pista: hablan de la encuesta (una cosa); \"the one\" significa \"la que\" y la reemplaza.\n• Regla: cosa ➔ which, y \"fue enviada\" ➔ was sent out.\n• Descartas: A y B abren con \"Is which one\", que rompe la pregunta; B y C usan who / whom, que son para personas.",
    "why_wrong": [
      "Incorrecto: \"Is which one…\" rompe la pregunta; para decir \"¿es esa la que…?\" se abre con \"Is that the one…\".",
      "Incorrecto: usa who para una encuesta (una cosa) y además abre con \"Is which one…\".",
      "Incorrecto: whom es para personas, y falta \"was\" (\"was sent out\" = fue enviada).",
      "Opción correcta: \"Is that the one which was sent out…\" usa which para la encuesta y was sent out para \"fue enviada\"."
    ],
    "tip_es": "Ejemplo del video: \"The beta test which we ran recently...\". Para encuestas y pruebas se usa \"which\".",
    "ref": null,
    "human_rule": "\"¿Es esa la que se envió el mes pasado?\" ➔ Is that the one which was sent out last month?",
    "trigger_anchor": "the one (= la encuesta, una cosa) ➔ which",
    "spanglish_trap": "Ver \"one\" y pensar en una persona (who / whom). Aquí \"the one\" es \"la que\" y reemplaza a \"the survey\".",
    "workplace_usage": {
      "scenario": "Revisión de Resultados de Encuesta de Satisfacción",
      "en": "Is that the one which was sent out last month to all enterprise accounts?",
      "es": "¿Es esa la que se envió el mes pasado a todas las cuentas empresariales?"
    }
  }
];
