import { Question } from '../../types';

/**
 * English for IT 1 – Module 5: IT Security Runbooks & Incident Response
 * Reactivos oficiales de OpenEDG / Cisco Networking Academy.
 * Cobertura de secciones:
 *  - 5.1 Section 1 – Grammar: Imperatives & Security Instructions (5.1.2: 14 items)
 *  - 5.2 Section 2 – Grammar: Adverbs of Possibility & Certainty (5.2.2: 14 items)
 *  - 5.3 Section 3 – Listening: Fraudulent Calls & Social Engineering (5.3.2 & 5.3.3: 10 items)
 *  - 5.4 Section 4 – Grammar: Probability & Deduction Adverbs (5.4.2: 13 items)
 *  - 5.5 Section 5 – Reading: Information Security Policy (Zero Trust) (5.5.3: 6 items)
 * 
 * Todos los reactivos están tipados estrictamente como 'pool: practice' para enriquecer
 * la práctica por módulos y temas sin descalibrar el simulacro oficial TestNow™.
 */
export const ENGLISH_FOR_IT_1_MODULE_5_BANK: Question[] = [
  {
    "id": "it1-mod5-sec1-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the policy directive: \"__________ that we are not to download applications from untrusted sources.\"",
    "options": [
      "Keep in mind",
      "Keep it simple",
      "Keep me posted",
      "Keeping mind"
    ],
    "answer": 0,
    "why_correct": "• Pista: es un recordatorio de una política (\"that we are not to…\").\n• Regla: \"ten presente que…\" ➔ Keep in mind that…\n• Descartas: \"Keep it simple\" y \"Keep me posted\" tienen otro sentido; \"Keeping mind\" no existe.",
    "why_wrong": [
      "Opción correcta: \"Keep in mind that…\" = \"ten presente que…\".",
      "Incorrecto: \"Keep it simple\" significa \"hazlo sencillo\".",
      "Incorrecto: \"Keep me posted\" significa \"mantenme al tanto\".",
      "Incorrecto: \"Keeping mind\" no es una expresión."
    ],
    "tip_es": "Directriz imperativa institucional: [Keep in mind that...].",
    "ref": null,
    "human_rule": "\"Ten presente que…\" ➔ Keep in mind that…",
    "trigger_anchor": "______ that we are not to download… ➔ Keep in mind",
    "spanglish_trap": "Mezclar los tres \"keep\". Cada uno tiene su significado.",
    "workplace_usage": {
      "scenario": "Políticas de Seguridad en Endpoint",
      "en": "Keep in mind that we are not to download applications from untrusted sources.",
      "es": "Tengan en cuenta que no debemos descargar aplicaciones de fuentes no confiables."
    }
  },
  {
    "id": "it1-mod5-sec1-ex1-q2",
    "section": "UE",
    "objective": "UE2",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the communication tip: \"Make sure to __________ when explaining complex security policies to non-technical users.\"",
    "options": [
      "Keep in mind",
      "Keep it simple",
      "Keep me posted",
      "Keep simple it"
    ],
    "answer": 1,
    "why_correct": "• Pista: se aconseja explicar a usuarios no técnicos.\n• Regla: \"hazlo sencillo\" ➔ Keep it simple.\n• Descartas: \"Keep in mind\" y \"Keep me posted\" tienen otro sentido; \"Keep simple it\" tiene el orden roto.",
    "why_wrong": [
      "Incorrecto: \"Keep in mind\" significa \"ten presente\".",
      "Opción correcta: \"Keep it simple\" = \"hazlo sencillo\".",
      "Incorrecto: \"Keep me posted\" significa \"mantenme al tanto\".",
      "Incorrecto: \"Keep simple it\" tiene el orden roto."
    ],
    "tip_es": "Comunicación con usuarios no técnicos: [Keep it simple].",
    "ref": null,
    "human_rule": "\"Hazlo sencillo\" ➔ Keep it simple.",
    "trigger_anchor": "Make sure to ______ when explaining policies ➔ keep it simple",
    "spanglish_trap": "Cambiar el orden (\"keep simple it\"). La expresión es keep IT simple.",
    "workplace_usage": {
      "scenario": "Capacitación de Seguridad para Empleados",
      "en": "Make sure to keep it simple when explaining security issues to clients.",
      "es": "Asegúrate de mantenerlo simple al explicar problemas de seguridad a los clientes."
    }
  },
  {
    "id": "it1-mod5-sec1-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the SOC procedure reminder: \"__________ that we must block any suspicious network connections immediately.\"",
    "options": [
      "Keep it simple",
      "Keep me posted",
      "Keep in mind",
      "Kept in mind"
    ],
    "answer": 2,
    "why_correct": "• Pista: es un recordatorio de procedimiento (\"that we must block…\").\n• Regla: \"ten presente que…\" ➔ Keep in mind that…\n• Descartas: \"Keep it simple\" y \"Keep me posted\" tienen otro sentido; \"Kept in mind\" es pasado.",
    "why_wrong": [
      "Incorrecto: \"Keep it simple\" significa \"hazlo sencillo\".",
      "Incorrecto: \"Keep me posted\" significa \"mantenme al tanto\".",
      "Opción correcta: \"Keep in mind that…\" = \"ten presente que…\".",
      "Incorrecto: \"Kept in mind\" es pasado, y aquí es una orden."
    ],
    "tip_es": "Mandato operativo en runbooks: [Keep in mind that we must block...].",
    "ref": null,
    "human_rule": "\"Ten presente que…\" ➔ Keep in mind that…",
    "trigger_anchor": "______ that we must block suspicious connections ➔ Keep in mind",
    "spanglish_trap": "Poner el pasado. Una orden va con el verbo tal cual.",
    "workplace_usage": {
      "scenario": "Runbook del Centro de Operaciones de Seguridad (SOC)",
      "en": "Keep in mind that we must block any suspicious operations immediately.",
      "es": "Tengan en cuenta que debemos bloquear cualquier operación sospechosa inmediatamente."
    }
  },
  {
    "id": "it1-mod5-sec1-ex1-q4",
    "section": "UE",
    "objective": "UE3",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the status request: \"__________ on any progress you make with the new firewall configuration.\"",
    "options": [
      "Keep in mind",
      "Keep it simple",
      "Keep you posted",
      "Keep me posted"
    ],
    "answer": 3,
    "why_correct": "• Pista: se pide información sobre un avance (\"on any progress\").\n• Regla: \"mantenme al tanto\" ➔ Keep me posted.\n• Descartas: \"Keep in mind\" y \"Keep it simple\" tienen otro sentido; \"Keep you posted\" cambia quién pide.",
    "why_wrong": [
      "Incorrecto: \"Keep in mind\" significa \"ten presente\".",
      "Incorrecto: \"Keep it simple\" significa \"hazlo sencillo\".",
      "Incorrecto: \"Keep you posted\" significa \"te mantengo al tanto\", y aquí se pide que lo hagan contigo.",
      "Opción correcta: \"Keep me posted\" = \"mantenme al tanto\"."
    ],
    "tip_es": "Solicitud de actualizaciones periódicas: [Keep me posted on...].",
    "ref": null,
    "human_rule": "\"Mantenme al tanto\" ➔ Keep me posted.",
    "trigger_anchor": "______ on any progress you make ➔ Keep me posted",
    "spanglish_trap": "Cambiar me por you. Si pides que te informen, me.",
    "workplace_usage": {
      "scenario": "Coordinación entre Ingeniero Senior y Junior",
      "en": "Keep me posted on any progress you make with the new firewall.",
      "es": "Mantenme informado sobre cualquier avance que hagas con el nuevo firewall."
    }
  },
  {
    "id": "it1-mod5-sec1-ex2-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the imperative password instruction: \"__________ your password is a combination of upper and lower case letters, numbers and symbols.\"",
    "options": [
      "Make sure",
      "Making sure",
      "To make sure",
      "Made sure"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una instrucción sobre la contraseña.\n• Regla: \"asegúrate de que…\" ➔ Make sure (that)…\n• Descartas: \"Making sure\", \"To make sure\" y \"Made sure\" no son órdenes.",
    "why_wrong": [
      "Opción correcta: \"Make sure\" = \"asegúrate\".",
      "Incorrecto: \"Making sure\" es un verbo con -ing.",
      "Incorrecto: \"To make sure\" no es una orden directa.",
      "Incorrecto: \"Made sure\" es pasado."
    ],
    "tip_es": "Imperativo de verificación en políticas: [Make sure (that) + cláusula].",
    "ref": null,
    "human_rule": "\"Asegúrate de que…\" ➔ Make sure…",
    "trigger_anchor": "______ your password is a combination of… ➔ Make sure",
    "spanglish_trap": "Poner -ing por \"asegurándote\". La orden va tal cual.",
    "workplace_usage": {
      "scenario": "Política de Contraseñas IAM",
      "en": "Make sure your password is a combination of letters, numbers, and symbols.",
      "es": "Asegúrate de que tu contraseña sea una combinación de letras, números y símbolos."
    }
  },
  {
    "id": "it1-mod5-sec1-ex2-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the security directive: \"__________ voice activation on all your smart devices when handling confidential client meetings.\"",
    "options": [
      "Disabling",
      "Disable",
      "To disable",
      "Disabled"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una directriz de seguridad.\n• Regla: orden ➔ verbo base (Disable).\n• Descartas: Disabling, \"To disable\" y Disabled no son órdenes.",
    "why_wrong": [
      "Incorrecto: Disabling es un verbo con -ing.",
      "Opción correcta: \"Disable\" = \"desactiva\".",
      "Incorrecto: \"To disable\" no es una orden directa.",
      "Incorrecto: Disabled es pasado."
    ],
    "tip_es": "Órdenes directas en guías de hardening: Verbo en forma base sin partículas (\"Disable\", \"Configure\", \"Enable\").",
    "ref": null,
    "human_rule": "Orden ➔ verbo base.",
    "trigger_anchor": "______ voice activation on all your devices ➔ Disable",
    "spanglish_trap": "Usar -ing o to. En una orden, el verbo va tal cual.",
    "workplace_usage": {
      "scenario": "Protocolo de Seguridad para Teletrabajo",
      "en": "Disable voice activation on all devices when handling confidential meetings.",
      "es": "Deshabilita la activación por voz en todos tus dispositivos al atender reuniones confidenciales."
    }
  },
  {
    "id": "it1-mod5-sec1-ex2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the negative security rule: \"Never __________ applications from unknown or unverified sources.\"",
    "options": [
      "Downloading",
      "To download",
      "Download",
      "Downloaded"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Never ______\" es una prohibición.\n• Regla: Never + verbo base.\n• Descartas: Downloading, \"To download\" y Downloaded no van después de Never en una orden.",
    "why_wrong": [
      "Incorrecto: después de Never va el verbo base, no -ing.",
      "Incorrecto: después de Never no va \"to\".",
      "Opción correcta: \"Never download\" = \"nunca descargues\".",
      "Incorrecto: después de Never va el verbo base, no el pasado."
    ],
    "tip_es": "Imperativo negativo tajante: [Never + verbo en forma base].",
    "ref": null,
    "human_rule": "Never + verbo base.",
    "trigger_anchor": "Never ______ applications from unknown sources ➔ download",
    "spanglish_trap": "Poner -ing o to por \"nunca descargar\". En una orden, verbo base.",
    "workplace_usage": {
      "scenario": "Prevención de Malware y Ransomware",
      "en": "Never download applications from unknown sources.",
      "es": "Nunca descargues aplicaciones de fuentes desconocidas."
    }
  },
  {
    "id": "it1-mod5-sec1-ex2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the department-wide summon: \"__________ the meeting tomorrow morning. We need the entire squad present.\"",
    "options": [
      "Everyone attends",
      "To attend everyone",
      "Attending everyone",
      "Everyone attend"
    ],
    "answer": 3,
    "why_correct": "• Pista: se convoca a todos (\"Everyone ______ the meeting\").\n• Regla: orden dirigida a un grupo ➔ Everyone + verbo base.\n• Descartas: \"Everyone attends\" lleva -s; las otras tienen el orden roto.",
    "why_wrong": [
      "Incorrecto: attends lleva -s; en una orden, el verbo va tal cual.",
      "Incorrecto: \"To attend everyone\" tiene el orden roto.",
      "Incorrecto: \"Attending everyone\" tiene el orden roto.",
      "Opción correcta: \"Everyone attend the meeting\" = \"que todos asistan\"."
    ],
    "tip_es": "Regla especial B2: Imperativo con pronombre indefinido -> [Everyone / Somebody + verbo base SIN \"-s\"] (\"Everyone attend!\").",
    "ref": null,
    "human_rule": "Orden a un grupo ➔ Everyone + verbo base (sin -s).",
    "trigger_anchor": "______ the meeting tomorrow. We need the entire squad ➔ Everyone attend",
    "spanglish_trap": "Poner la -s porque everyone es singular. En una orden, el verbo va tal cual.",
    "workplace_usage": {
      "scenario": "Convocatoria Obligatoria de Emergencia",
      "en": "Everyone attend the meeting tomorrow morning; we need the whole team.",
      "es": "Asistan todos a la reunión de mañana por la mañana; necesitamos a todo el equipo."
    }
  },
  {
    "id": "it1-mod5-sec1-ex2-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the urgent command in the NOC: \"__________ the phone! It has been ringing for two minutes.\"",
    "options": [
      "Someone answer",
      "Someone answers",
      "To answer someone",
      "Answering someone"
    ],
    "answer": 0,
    "why_correct": "• Pista: se ordena a alguien en general que conteste (\"Someone ______ the phone!\").\n• Regla: orden a alguien ➔ Someone + verbo base.\n• Descartas: \"Someone answers\" lleva -s; las otras tienen el orden roto.",
    "why_wrong": [
      "Opción correcta: \"Someone answer the phone!\" = \"¡que alguien conteste!\".",
      "Incorrecto: answers lleva -s; en una orden, el verbo va tal cual.",
      "Incorrecto: \"To answer someone\" tiene el orden roto.",
      "Incorrecto: \"Answering someone\" tiene el orden roto."
    ],
    "tip_es": "Imperativo con sujeto: [Someone answer the phone!]. Verbo siempre en forma base.",
    "ref": null,
    "human_rule": "Orden a alguien ➔ Someone + verbo base (sin -s).",
    "trigger_anchor": "______ the phone! It has been ringing ➔ Someone answer",
    "spanglish_trap": "Poner la -s porque someone es singular. En una orden, el verbo va tal cual.",
    "workplace_usage": {
      "scenario": "Sala de Control del NOC",
      "en": "Someone answer the phone!",
      "es": "¡Que alguien conteste el teléfono!"
    }
  },
  {
    "id": "it1-mod5-sec1-ex2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the negative command in the hardening guide: \"__________ default passwords on production switches.\"",
    "options": [
      "Not use",
      "Do not use",
      "No use",
      "To not use"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una orden negativa de una guía de seguridad.\n• Regla: Do not + verbo base.\n• Descartas: \"Not use\", \"No use\" y \"To not use\" no son órdenes bien armadas.",
    "why_wrong": [
      "Incorrecto: \"Not use\" le falta el verbo pequeño (Do).",
      "Opción correcta: \"Do not use\" = \"no uses\".",
      "Incorrecto: \"No use\" suena a letrero, no a una orden con verbo.",
      "Incorrecto: \"To not use\" no se usa como orden."
    ],
    "tip_es": "Imperativo negativo estándar: [Do not / Don’t + verbo base]. ¡Jamás \"No use\" ni \"Not use\"!",
    "ref": null,
    "human_rule": "Orden negativa ➔ Do not + verbo base.",
    "trigger_anchor": "______ default passwords on production switches ➔ Do not use",
    "spanglish_trap": "Copiar el \"no uses\" como \"Not use\". Hace falta Do not.",
    "workplace_usage": {
      "scenario": "Guía de Configuración Segura de Switches",
      "en": "Do not use default passwords on production devices.",
      "es": "No utilice contraseñas predeterminadas en dispositivos de producción."
    }
  },
  {
    "id": "it1-mod5-sec2-ex1-q1",
    "section": "UE",
    "objective": "UE5",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the adverb expressing unconfirmed claim: \"__________ this application is safe to download, but I am not completely convinced.\"",
    "options": [
      "Supposedly",
      "Definitely",
      "Certainly",
      "Undoubtedly"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"but I am not completely convinced\": se duda de lo que se dice.\n• Regla: \"supuestamente\" (sin creerlo) ➔ supposedly.\n• Descartas: Definitely, Certainly y Undoubtedly afirman con seguridad.",
    "why_wrong": [
      "Opción correcta: \"Supposedly\" = \"supuestamente\".",
      "Incorrecto: Definitely afirma con seguridad.",
      "Incorrecto: Certainly afirma con seguridad.",
      "Incorrecto: Undoubtedly afirma con seguridad."
    ],
    "tip_es": "Afirmación sin verificar o bajo sospecha: [Supposedly] (supuestamente).",
    "ref": null,
    "human_rule": "Algo que se dice pero no se cree ➔ supposedly.",
    "trigger_anchor": "______ this app is safe, but I am not convinced ➔ Supposedly",
    "spanglish_trap": "Pensar que supposedly es \"seguramente\". Es \"supuestamente\" (con duda).",
    "workplace_usage": {
      "scenario": "Evaluación de Software de Terceros",
      "en": "Supposedly this application is safe to download, but we must sandbox it first.",
      "es": "Supuestamente esta aplicación es segura de descargar, pero primero debemos aislarla en un sandbox."
    }
  },
  {
    "id": "it1-mod5-sec2-ex1-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the statement of confirmed commitment: \"They confirmed today that they will __________ block any suspicious traffic.\"",
    "options": [
      "Supposedly",
      "Definitely",
      "Plausibly",
      "Hesitantly"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"confirmed today that they will…\" es un compromiso firme.\n• Regla: seguridad total ➔ definitely.\n• Descartas: Supposedly, Plausibly y Hesitantly expresan duda.",
    "why_wrong": [
      "Incorrecto: Supposedly expresa duda.",
      "Opción correcta: \"definitely block\" = \"sin duda bloquearán\".",
      "Incorrecto: Plausibly significa \"posiblemente\".",
      "Incorrecto: Hesitantly significa \"con dudas\"."
    ],
    "tip_es": "Certeza tras confirmación oficial: [will definitely block].",
    "ref": null,
    "human_rule": "Compromiso firme ➔ definitely.",
    "trigger_anchor": "They confirmed today they will ______ block ➔ definitely",
    "spanglish_trap": "Elegir supposedly porque \"dijeron\". Si lo confirmaron, definitely.",
    "workplace_usage": {
      "scenario": "Configuración de Reglas WAF",
      "en": "The SOC confirmed they will definitely block the rogue IP ranges.",
      "es": "El SOC confirmó que definitivamente bloquearán los rangos de IP maliciosos."
    }
  },
  {
    "id": "it1-mod5-sec2-ex1-q3",
    "section": "UE",
    "objective": "UE5",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the statement of firm personal determination: \"I am __________ not going to download anything from an untrusted email attachment.\"",
    "options": [
      "Supposedly",
      "Questionably",
      "Certainly",
      "Doubtfully"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"I am ______ not going to…\": una decisión personal firme.\n• Regla: \"desde luego que no\" ➔ certainly (not).\n• Descartas: Supposedly, Questionably y Doubtfully expresan duda.",
    "why_wrong": [
      "Incorrecto: Supposedly expresa duda.",
      "Incorrecto: Questionably significa \"de forma cuestionable\".",
      "Opción correcta: \"certainly not going to\" = \"desde luego que no voy a\".",
      "Incorrecto: Doubtfully significa \"con dudas\"."
    ],
    "tip_es": "Rechazo rotundo de conducta de riesgo: [am certainly not going to download].",
    "ref": null,
    "human_rule": "Determinación personal ➔ certainly.",
    "trigger_anchor": "I am ______ not going to download anything untrusted ➔ certainly",
    "spanglish_trap": "Usar un adverbio de duda. Aquí hay una decisión firme.",
    "workplace_usage": {
      "scenario": "Concienciación Anti-Phishing",
      "en": "I am certainly not going to open that suspicious executable.",
      "es": "Ciertamente no voy a abrir ese ejecutable sospechoso."
    }
  },
  {
    "id": "it1-mod5-sec2-ex1-q4",
    "section": "UE",
    "objective": "UE5",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the skeptical conclusion: \"They say that this vulnerability won't happen again, __________ .\"",
    "options": [
      "Definitely",
      "Certainly",
      "Always",
      "Supposedly"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"They say that…\" y el tono es escéptico.\n• Regla: \"supuestamente\" ➔ supposedly.\n• Descartas: Definitely, Certainly y Always afirman con seguridad.",
    "why_wrong": [
      "Incorrecto: Definitely afirma con seguridad.",
      "Incorrecto: Certainly afirma con seguridad.",
      "Incorrecto: Always significa \"siempre\".",
      "Opción correcta: \"supposedly\" = \"supuestamente\" (con escepticismo)."
    ],
    "tip_es": "Escepticismo técnico al final de frase: [, supposedly] (supuestamente / en teoría).",
    "ref": null,
    "human_rule": "\"Dicen que…\" con escepticismo ➔ supposedly.",
    "trigger_anchor": "They say that this won't happen again, ______ ➔ supposedly",
    "spanglish_trap": "Usar un adverbio de seguridad. Cuando se duda de lo que dicen, supposedly.",
    "workplace_usage": {
      "scenario": "Evaluación de Parches de Proveedores",
      "en": "The vendor claims the exploit is patched, supposedly.",
      "es": "El proveedor afirma que el exploit está parcheado, supuestamente."
    }
  },
  {
    "id": "it1-mod5-sec2-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the strong recommendation: \"They should __________ be careful when disclosing sensitive telemetry data.\"",
    "options": [
      "Definitely",
      "Supposedly",
      "Hesitantly",
      "Reluctantly"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una recomendación fuerte (\"They should… be careful\").\n• Regla: \"sin duda\" ➔ definitely.\n• Descartas: Supposedly, Hesitantly y Reluctantly no refuerzan una recomendación.",
    "why_wrong": [
      "Opción correcta: \"definitely be careful\" = \"sin duda deben tener cuidado\".",
      "Incorrecto: Supposedly expresa duda.",
      "Incorrecto: Hesitantly significa \"con dudas\".",
      "Incorrecto: Reluctantly significa \"a regañadientes\"."
    ],
    "tip_es": "Reforzar una recomendación de seguridad: [should definitely be careful].",
    "ref": null,
    "human_rule": "Recomendación fuerte ➔ definitely.",
    "trigger_anchor": "They should ______ be careful with sensitive data ➔ definitely",
    "spanglish_trap": "Elegir un adverbio de duda. Para reforzar, definitely.",
    "workplace_usage": {
      "scenario": "Políticas de Confidencialidad y NDA",
      "en": "Engineers should definitely be careful when disclosing log traces.",
      "es": "Los ingenieros definitivamente deberían tener cuidado al divulgar trazas de registros."
    }
  },
  {
    "id": "it1-mod5-sec2-ex1-q6",
    "section": "UE",
    "objective": "UE5",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the strategic claim: \"A clear Information Security Policy will __________ demonstrate our compliance to enterprise auditors.\"",
    "options": [
      "Supposedly",
      "Certainly",
      "Doubtfully",
      "Unreliably"
    ],
    "answer": 1,
    "why_correct": "• Pista: una política clara demuestra el cumplimiento, y se dice con seguridad.\n• Regla: \"sin duda\" ➔ certainly.\n• Descartas: Supposedly, Doubtfully y Unreliably expresan duda o poca fiabilidad.",
    "why_wrong": [
      "Incorrecto: Supposedly expresa duda.",
      "Opción correcta: \"will certainly demonstrate\" = \"sin duda demostrará\".",
      "Incorrecto: Doubtfully significa \"con dudas\".",
      "Incorrecto: Unreliably significa \"de forma poco fiable\"."
    ],
    "tip_es": "Convencimiento positivo en auditorías: [will certainly demonstrate].",
    "ref": null,
    "human_rule": "Afirmación segura ➔ certainly.",
    "trigger_anchor": "A clear policy will ______ demonstrate compliance ➔ certainly",
    "spanglish_trap": "Elegir un adverbio de duda. Si es una afirmación segura, certainly.",
    "workplace_usage": {
      "scenario": "Auditoría SOC2 / ISO 27001",
      "en": "A clear Information Security Policy will certainly demonstrate our compliance.",
      "es": "Una política de seguridad de la información clara sin duda demostrará nuestro cumplimiento."
    }
  },
  {
    "id": "it1-mod5-sec2-ex2-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the appropriate response: \"Person A: Should the policy be sent to both external and internal stakeholders? Person B:\"",
    "options": [
      "It is definitely necessary to send the policy to all relevant parties.",
      "It is supposedly forbidden to distribute any documents.",
      "We certainly cannot disclose whether we have a policy.",
      "Perhaps we might delete the policy file entirely."
    ],
    "answer": 0,
    "why_correct": "• Pista: preguntan si la política debe enviarse a todos.\n• Regla: la respuesta correcta es la que contesta con claridad y con sentido (\"definitely necessary\").\n• Descartas: B, C y D no responden con sentido a la pregunta.",
    "why_wrong": [
      "Opción correcta: responde que sí, con seguridad (\"definitely necessary\").",
      "Incorrecto: \"supposedly forbidden\" no tiene sentido como respuesta.",
      "Incorrecto: no responde si debe enviarse.",
      "Incorrecto: propone borrar la política, lo contrario de lo que se pregunta."
    ],
    "tip_es": "Confirmación de obligatoriedad: [It is definitely necessary to...].",
    "ref": null,
    "human_rule": "Responde a lo que preguntan, con el adverbio que encaja.",
    "trigger_anchor": "Should the policy be sent to everyone? ➔ It is definitely necessary…",
    "spanglish_trap": "Elegir por el adverbio sin leer la respuesta completa. Primero que responda; luego el matiz.",
    "workplace_usage": {
      "scenario": "Difusión de Políticas Corporativas",
      "en": "It is definitely necessary to distribute the security guidelines to external partners.",
      "es": "Definitivamente es necesario distribuir las directrices de seguridad a los socios externos."
    }
  },
  {
    "id": "it1-mod5-sec2-ex2-q2",
    "section": "UE",
    "objective": "UE5",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the appropriate response: \"Person A: How detailed should our security policy be? Person B:\"",
    "options": [
      "The policy definitely must not exceed one single sentence.",
      "The policy is supposedly meant to be extensive, but readable.",
      "We certainly do not write policies in written English.",
      "The policy is supposedly encrypted so no employee can read it."
    ],
    "answer": 1,
    "why_correct": "• Pista: preguntan cuán detallada debe ser la política.\n• Regla: la respuesta correcta usa \"supposedly meant to be\" con sentido (\"se supone que debe ser extensa\").\n• Descartas: A, C y D no responden con sentido.",
    "why_wrong": [
      "Incorrecto: dice que no debe pasar de una frase, y eso no encaja con una política.",
      "Opción correcta: \"is supposedly meant to be extensive, but readable\" = \"se supone que debe ser extensa, pero legible\".",
      "Incorrecto: \"We certainly do not write policies in written English\" no tiene sentido.",
      "Incorrecto: dice que está cifrada para que nadie la lea, y no responde."
    ],
    "tip_es": "Criterio de redacción de políticas: Exhaustiva pero legible (\"extensive, but readable\").",
    "ref": null,
    "human_rule": "\"Se supone que…\" ➔ is supposedly meant to be…",
    "trigger_anchor": "How detailed should it be? ➔ is supposedly meant to be extensive",
    "spanglish_trap": "Elegir por \"definitely\" o \"certainly\". Aquí encaja \"se supone que\".",
    "workplace_usage": {
      "scenario": "Redacción de Manuales de Seguridad",
      "en": "The policy is supposedly meant to be extensive, but readable.",
      "es": "En teoría, se supone que la política debe ser exhaustiva, pero legible."
    }
  },
  {
    "id": "it1-mod5-sec2-ex2-q3",
    "section": "UE",
    "objective": "UE2",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the security protocol response: \"Person A: What should you do if you receive a call claiming to be your bank? Person B:\"",
    "options": [
      "Supposedly tell them your passwords immediately.",
      "Certainly transfer company funds without asking questions.",
      "Definitely verify the call before acting on any instructions.",
      "Perhaps disconnect the telephone company wires."
    ],
    "answer": 2,
    "why_correct": "• Pista: Llamada del \"banco\": hay que verificar antes de actuar.\n• Significado: Definitely verify the call = verifícala sin duda.\n• Descartas: Dar contraseñas, transferir fondos o cortar cables son malas ideas.",
    "why_wrong": [
      "Incorrecto: Dar contraseñas es peligroso.",
      "Incorrecto: Transferir fondos es peligroso.",
      "Opción correcta: Definitely verify the call.",
      "Incorrecto: Cortar cables no tiene sentido."
    ],
    "tip_es": "Protocolo anti-vishing: [Definitely verify the call before acting]. Jamás proporcionar datos.",
    "ref": null,
    "human_rule": "llamada sospechosa ➔ verify.",
    "trigger_anchor": "call from bank ➔ verify",
    "spanglish_trap": "Confiar en el llamador.",
    "workplace_usage": {
      "scenario": "Prevención de Ingeniería Social (Vishing)",
      "en": "Definitely verify the call before providing sensitive credentials.",
      "es": "Definitivamente verifique la llamada antes de proporcionar credenciales sensibles."
    }
  },
  {
    "id": "it1-mod5-sec2-ex2-q4",
    "section": "UE",
    "objective": "UE5",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the appropriate response: \"Person A: What does a well-prepared and understandable IS Policy demonstrate? Person B:\"",
    "options": [
      "It supposedly indicates that our firewalls are turned off.",
      "It definitely proves that we do not care about data privacy.",
      "It certainly causes the server cooling fans to fail.",
      "A well-prepared policy certainly demonstrates our security commitment."
    ],
    "answer": 3,
    "why_correct": "• Pista: Una política clara demuestra compromiso con la seguridad.\n• Significado: Demuestra nuestro compromiso con la seguridad.\n• Descartas: Firewalls apagados, desinterés en privacidad o ventiladores no tienen relación.",
    "why_wrong": [
      "Incorrecto: Los firewalls no se apagan por una política.",
      "Incorrecto: No prueba desinterés.",
      "Incorrecto: No daña ventiladores.",
      "Opción correcta: Demuestra compromiso con la seguridad."
    ],
    "tip_es": "Valor probatorio de la política: [certainly demonstrates our security commitment].",
    "ref": null,
    "human_rule": "política clara = compromiso.",
    "trigger_anchor": "well-prepared policy ➔ commitment",
    "spanglish_trap": "Caer en opciones negativas con \"supposedly\".",
    "workplace_usage": {
      "scenario": "Auditorías de Terceros y Ventas B2B",
      "en": "A well-prepared policy certainly demonstrates our security maturity.",
      "es": "Una política bien preparada sin duda demuestra nuestra madurez en seguridad."
    }
  },
  {
    "id": "it1-mod5-sec2-ex2-q5",
    "section": "UE",
    "objective": "UE2",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the sound advice: \"Person A: I received a call from someone claiming to be technical support asking me to install remote software. Person B:\"",
    "options": [
      "Be careful and don't download apps from unverified callers.",
      "Definitely grant them root administrative credentials immediately.",
      "Supposedly share your one-time SMS verification code.",
      "Certainly disable the endpoint antivirus so they can work faster."
    ],
    "answer": 0,
    "why_correct": "• Pista: Soporte técnico pide instalar software remoto: ten cuidado.\n• Significado: Be careful and don't download apps from unverified callers.\n• Descartas: Dar credenciales, compartir código SMS o desactivar antivirus es peligroso.",
    "why_wrong": [
      "Opción correcta: Ser cuidadoso y no descargar apps.",
      "Incorrecto: Dar root es peligroso.",
      "Incorrecto: Compartir el SMS es peligroso.",
      "Incorrecto: Desactivar antivirus es peligroso."
    ],
    "tip_es": "Regla de oro de ingeniería social: Jamás instalar software por indicación de una llamada no solicitada.",
    "ref": null,
    "human_rule": "no instales nada de desconocidos.",
    "trigger_anchor": "unknown caller ➔ don't install",
    "spanglish_trap": "Pensar que el soporte pide acceso normalmente.",
    "workplace_usage": {
      "scenario": "Protección contra Ataques de Vishing Helpdesk",
      "en": "Be careful and don't download remote control software from unverified callers.",
      "es": "Tenga cuidado y no descargue software de control remoto de personas que llamen sin verificar."
    }
  },
  {
    "id": "it1-mod5-sec3-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the verb for: \"To promise formally that something will be done, provided, or guaranteed to happen.\"",
    "options": [
      "Guarantee",
      "Clarify",
      "Detect",
      "Urge"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"promise formally ... guaranteed\": prometer.\n• Significado: Guarantee = garantizar.\n• Descartas: Clarify aclara; Detect detecta; Urge insiste.",
    "why_wrong": [
      "Opción correcta: Guarantee = garantizar.",
      "Incorrecto: Clarify = aclarar.",
      "Incorrecto: Detect = detectar.",
      "Incorrecto: Urge = instar."
    ],
    "tip_es": "Glosario oficial Cisco: [Guarantee] = to promise something will be done.",
    "ref": null,
    "human_rule": "guarantee = garantizar.",
    "trigger_anchor": "promise formally ➔ guarantee",
    "spanglish_trap": "Confundir guarantee con \"garantía\" de producto.",
    "workplace_usage": {
      "scenario": "Acuerdos de Nivel de Servicio (SLA)",
      "en": "We cannot guarantee 100 percent uptime during physical datacenter migrations.",
      "es": "No podemos garantizar un 100 por ciento de tiempo de actividad durante migraciones físicas de datacenter."
    }
  },
  {
    "id": "it1-mod5-sec3-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the verb for: \"To make something clear, unambiguous, or easier to understand.\"",
    "options": [
      "Verify",
      "Clarify",
      "Assure",
      "Classify"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"make something clear\": aclarar.\n• Significado: Clarify = aclarar.\n• Descartas: Verify comprueba; Assure tranquiliza; Classify clasifica.",
    "why_wrong": [
      "Incorrecto: Verify = comprobar.",
      "Opción correcta: Clarify = aclarar.",
      "Incorrecto: Assure = asegurar a alguien.",
      "Incorrecto: Classify = clasificar."
    ],
    "tip_es": "Glosario oficial: [Clarify] = to make something clear.",
    "ref": null,
    "human_rule": "clarify = aclarar.",
    "trigger_anchor": "make clear ➔ clarify",
    "spanglish_trap": "Confundir clarify con classify.",
    "workplace_usage": {
      "scenario": "Petición de Aclaración Técnica",
      "en": "Could you please clarify the third requirement of the specification?",
      "es": "¿Podría por favor aclarar el tercer requisito de la especificación?"
    }
  },
  {
    "id": "it1-mod5-sec3-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the security verb for: \"To check or prove that something is true, correct, or compliant with rules.\"",
    "options": [
      "Clarify",
      "Block",
      "Verify",
      "Urge"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"check or prove that something is true\": comprobar.\n• Significado: Verify = verificar.\n• Descartas: Clarify aclara; Block bloquea; Urge insiste.",
    "why_wrong": [
      "Incorrecto: Clarify = aclarar.",
      "Incorrecto: Block = bloquear.",
      "Opción correcta: Verify = verificar.",
      "Incorrecto: Urge = instar."
    ],
    "tip_es": "Ciberseguridad y Zero Trust: [Verify] = check that something is true or correct (Verify, never trust).",
    "ref": null,
    "human_rule": "verify = comprobar.",
    "trigger_anchor": "prove true ➔ verify",
    "spanglish_trap": "Confundir verify con clarify.",
    "workplace_usage": {
      "scenario": "Autenticación Zero Trust",
      "en": "Always verify identity through an independent out-of-band channel.",
      "es": "Siempre verifique la identidad a través de un canal fuera de banda independiente."
    }
  },
  {
    "id": "it1-mod5-sec3-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the verb for: \"To tell someone with a high level of confidence that something is safe, resolved, or true in order to remove doubt.\"",
    "options": [
      "Guarantee",
      "Classify",
      "Detect",
      "Assure"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"tell someone with confidence ... remove doubt\": tranquilizar.\n• Significado: Assure = asegurar, tranquilizar a alguien.\n• Descartas: Guarantee promete formalmente; Classify clasifica; Detect descubre.",
    "why_wrong": [
      "Incorrecto: Guarantee promete formalmente.",
      "Incorrecto: Classify = clasificar.",
      "Incorrecto: Detect = descubrir.",
      "Opción correcta: Assure = tranquilizar."
    ],
    "tip_es": "Diferencia clave B2: [Assure a person] (tranquilizar a alguien) vs. [Ensure an outcome] (asegurar un resultado).",
    "ref": null,
    "human_rule": "assure = quitar dudas.",
    "trigger_anchor": "remove doubt ➔ assure",
    "spanglish_trap": "Confundir assure con ensure.",
    "workplace_usage": {
      "scenario": "Atención a Clientes Alarmados",
      "en": "I can assure you that our backup systems remained completely uncompromised.",
      "es": "Puedo asegurarle que nuestros sistemas de respaldo permanecieron completamente a salvo."
    }
  },
  {
    "id": "it1-mod5-sec3-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the data governance verb for: \"To divide or categorize information into groups according to their sensitivity or type.\"",
    "options": [
      "Classify",
      "Clarify",
      "Block",
      "Carry out"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"divide ... into groups according to sensitivity\": clasificar.\n• Significado: Classify = clasificar.\n• Descartas: Clarify aclara; Block bloquea; Carry out ejecuta.",
    "why_wrong": [
      "Opción correcta: Classify = clasificar.",
      "Incorrecto: Clarify = aclarar.",
      "Incorrecto: Block = bloquear.",
      "Incorrecto: Carry out = llevar a cabo."
    ],
    "tip_es": "Clasificación de datos en InfoSec: [Classify] = divide things into groups according to type.",
    "ref": null,
    "human_rule": "classify = poner en categorías.",
    "trigger_anchor": "divide into groups ➔ classify",
    "spanglish_trap": "Confundir classify con clarify.",
    "workplace_usage": {
      "scenario": "Gobierno de Datos GDPR",
      "en": "All repositories must classify data containing personal identifying information.",
      "es": "Todos los repositorios deben clasificar los datos que contengan información de identificación personal."
    }
  },
  {
    "id": "it1-mod5-sec3-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the defensive action verb for: \"To stop an operation, network connection, or transmission from continuing or entering.\"",
    "options": [
      "Detect",
      "Block",
      "Assure",
      "Urge"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"stop ... from continuing or entering\": bloquear.\n• Significado: Block = bloquear.\n• Descartas: Detect detecta; Assure tranquiliza; Urge insiste.",
    "why_wrong": [
      "Incorrecto: Detect = detectar.",
      "Opción correcta: Block = bloquear.",
      "Incorrecto: Assure = tranquilizar.",
      "Incorrecto: Urge = instar."
    ],
    "tip_es": "Acción de firewall: [Block] = stop something from happening or entering.",
    "ref": null,
    "human_rule": "block = impedir que pase.",
    "trigger_anchor": "stop entering ➔ block",
    "spanglish_trap": "Pensar que detect ya detiene.",
    "workplace_usage": {
      "scenario": "Reglas de Firewall",
      "en": "The intrusion prevention system will automatically block IP addresses that trigger brute-force alerts.",
      "es": "El sistema de prevención de intrusiones bloqueará automáticamente las direcciones IP que activen alertas de fuerza bruta."
    }
  },
  {
    "id": "it1-mod5-sec3-ex1-q7",
    "section": "UE",
    "objective": "UE1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the verb for: \"To encourage or push someone strongly and urgently to take a specific action.\"",
    "options": [
      "Guarantee",
      "Verify",
      "Urge",
      "Classify"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"push someone strongly\": instar.\n• Significado: Urge = instar.\n• Descartas: Guarantee, Verify y Classify no empujan a la acción.",
    "why_wrong": [
      "Incorrecto: Guarantee = garantizar.",
      "Incorrecto: Verify = verificar.",
      "Opción correcta: Urge = instar.",
      "Incorrecto: Classify = clasificar."
    ],
    "tip_es": "Avisos de parches urgentes: [We urge administrators to install the patch immediately].",
    "ref": null,
    "human_rule": "urge = presionar para que actúe.",
    "trigger_anchor": "push strongly ➔ urge",
    "spanglish_trap": "Traducir urge como \"urgente\".",
    "workplace_usage": {
      "scenario": "Boletín de Seguridad CISA",
      "en": "Security agencies urge all organizations to patch the vulnerability.",
      "es": "Las agencias de seguridad instan a todas las organizaciones a aplicar el parche a la vulnerabilidad."
    }
  },
  {
    "id": "it1-mod5-sec3-ex1-q8",
    "section": "UE",
    "objective": "UE1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the security verb for: \"To discover, notice, or identify something hidden, anomalous, or not obvious.\"",
    "options": [
      "Block",
      "Clarify",
      "Assure",
      "Detect"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"discover something hidden\": descubrir.\n• Significado: Detect = detectar.\n• Descartas: Block bloquea; Clarify aclara; Assure tranquiliza.",
    "why_wrong": [
      "Incorrecto: Block = bloquear.",
      "Incorrecto: Clarify = aclarar.",
      "Incorrecto: Assure = tranquilizar.",
      "Opción correcta: Detect = detectar."
    ],
    "tip_es": "Monitoreo de seguridad: [Detect] = notice something hidden or not obvious.",
    "ref": null,
    "human_rule": "detect = descubrir lo oculto.",
    "trigger_anchor": "hidden ➔ detect",
    "spanglish_trap": "Confundir detect con protect.",
    "workplace_usage": {
      "scenario": "Monitoreo SIEM/EDR",
      "en": "Our EDR sensors detect zero-day exploit payloads before execution.",
      "es": "Nuestros sensores EDR detectan cargas útiles de exploits de día cero antes de su ejecución."
    }
  },
  {
    "id": "it1-mod5-sec3-ex1-q9",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the phrasal verb for: \"To perform, execute, or complete an assigned task, audit, or test.\"",
    "options": [
      "Carry out",
      "Pick up",
      "Get on",
      "Look into"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"perform, execute, or complete a task\": llevar a cabo.\n• Significado: Carry out = realizar una tarea.\n• Descartas: Pick up, Get on y Look into tienen otros sentidos.",
    "why_wrong": [
      "Opción correcta: Carry out = realizar.",
      "Incorrecto: Pick up = recoger o contestar.",
      "Incorrecto: Get on = ponerse a ello.",
      "Incorrecto: Look into = investigar."
    ],
    "tip_es": "Ejecución de procedimientos: [Carry out an audit / test / task].",
    "ref": null,
    "human_rule": "carry out = ejecutar una tarea.",
    "trigger_anchor": "perform a task ➔ carry out",
    "spanglish_trap": "Traducir carry out como \"cargar\".",
    "workplace_usage": {
      "scenario": "Pentesting Programado",
      "en": "The security team will carry out a thorough vulnerability assessment tonight.",
      "es": "El equipo de seguridad llevará a cabo una evaluación exhaustiva de vulnerabilidades esta noche."
    }
  },
  {
    "id": "it1-mod5-sec3-ex2-q1",
    "section": "UE",
    "objective": "L1",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the social engineering audio call, what pretext does the male caller use to initiate contact?",
    "options": [
      "He claims there has been suspicious unauthorized activity on the woman’s account.",
      "He offers her a free trip to a cybersecurity conference in London.",
      "He calls to survey her about her favorite cloud providers.",
      "He claims she has won a brand-new iPhone 15 Pro."
    ],
    "answer": 0,
    "why_correct": "• Pista: Pretexto del llamador: actividad sospechosa en la cuenta.\n• Significado: Dice que hubo actividad no autorizada en la cuenta de la mujer.\n• Descartas: Viaje, encuesta o iPhone no se mencionan.",
    "why_wrong": [
      "Opción correcta: Actividad sospechosa en la cuenta.",
      "Incorrecto: No ofrece viaje.",
      "Incorrecto: No hace encuesta.",
      "Incorrecto: No ofrece iPhone."
    ],
    "tip_es": "Técnica de ingeniería social (Pretexting): Simular una alerta bancaria urgente de fraude para forzar una reacción irreflexiva.",
    "ref": null,
    "human_rule": "pretexto = cuenta comprometida.",
    "trigger_anchor": "pretext ➔ suspicious activity",
    "spanglish_trap": "Confundir pretext con propósito.",
    "workplace_usage": {
      "scenario": "Entrenamiento Anti-Vishing",
      "en": "Scammers frequently create fake urgency by claiming suspicious account activity.",
      "es": "Los estafadores suelen crear una falsa urgencia alegando actividad sospechosa en la cuenta."
    }
  },
  {
    "id": "it1-mod5-sec3-ex2-q2",
    "section": "UE",
    "objective": "L2",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What does the woman clarify regarding her banking transactions earlier that day?",
    "options": [
      "She had lost her credit card while traveling on the subway.",
      "She had made a normal legitimate online payment today.",
      "She had wired fifty thousand dollars to an offshore account.",
      "She had not used her bank card in over six months."
    ],
    "answer": 1,
    "why_correct": "• Pista: Ella aclara que hizo un pago normal.\n• Significado: Hizo un pago legítimo en línea ese día.\n• Descartas: Perder tarjeta, transferir dinero o no usarla no coincide.",
    "why_wrong": [
      "Incorrecto: No perdió la tarjeta.",
      "Opción correcta: Hizo un pago en línea normal.",
      "Incorrecto: No envió 50 mil dólares.",
      "Incorrecto: No dejó de usarla."
    ],
    "tip_es": "Detalle de la llamada: La usuaria confirma haber hecho un pago cotidiano normal hoy.",
    "ref": null,
    "human_rule": "clarify = explicar lo que pasó.",
    "trigger_anchor": "clarify ➔ normal payment",
    "spanglish_trap": "Perder el detalle del audio.",
    "workplace_usage": {
      "scenario": "Investigación de Vishing",
      "en": "The customer verified that her earlier online payment was legitimate.",
      "es": "La clienta verificó que su pago en línea anterior era legítimo."
    }
  },
  {
    "id": "it1-mod5-sec3-ex2-q3",
    "section": "UE",
    "objective": "L3",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What technical claim does the fraudulent caller fabricate to convince the woman to install software?",
    "options": [
      "He claims the banking mainframe has run out of physical disk space.",
      "He claims international submarine cables have been severed.",
      "He claims the issue is caused by a dangerous virus on her mobile phone.",
      "He claims her phone screen resolution is too low for banking."
    ],
    "answer": 2,
    "why_correct": "• Pista: El llamador inventa un virus en su teléfono.\n• Significado: Dice que un virus peligroso está en su móvil.\n• Descartas: Disco, cables o resolución de pantalla no se mencionan.",
    "why_wrong": [
      "Incorrecto: No habla del mainframe.",
      "Incorrecto: No habla de cables submarinos.",
      "Opción correcta: Dice que hay un virus en su teléfono.",
      "Incorrecto: No habla de resolución."
    ],
    "tip_es": "Pretexto técnico de ataque: Afirmar que el dispositivo tiene un virus para obligarla a instalar un troyano de acceso remoto.",
    "ref": null,
    "human_rule": "miedo técnico falso = engaño.",
    "trigger_anchor": "claim ➔ virus",
    "spanglish_trap": "Creer en alarmas técnicas.",
    "workplace_usage": {
      "scenario": "Señales de Alerta de Ingeniería Social",
      "en": "Callers claiming your device is infected are almost certainly attempting vishing.",
      "es": "Las personas que llaman afirmando que su dispositivo está infectado casi con certeza intentan vishing."
    }
  },
  {
    "id": "it1-mod5-sec3-ex2-q4",
    "section": "UE",
    "objective": "L4",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What official security procedure does the woman correctly remember from her bank's guidance?",
    "options": [
      "The bank told her to share passwords over unrecorded phone calls.",
      "The bank advised her to email her PIN code to the caller.",
      "The bank recommended disabling two-factor authentication permanently.",
      "The bank explicitly advised her to authenticate all requests exclusively through the official banking app."
    ],
    "answer": 3,
    "why_correct": "• Pista: Recuerda el consejo oficial: autenticar solo por la app.\n• Significado: El banco aconseja autenticar por la app oficial.\n• Descartas: Compartir contraseñas, PIN o desactivar 2FA es lo contrario.",
    "why_wrong": [
      "Incorrecto: Compartir contraseñas es lo contrario.",
      "Incorrecto: Enviar PIN es lo contrario.",
      "Incorrecto: Desactivar 2FA es lo contrario.",
      "Opción correcta: Autenticar por la app oficial."
    ],
    "tip_es": "Defensa efectiva del usuario: Desconfiar y validar únicamente a través de la aplicación oficial.",
    "ref": null,
    "human_rule": "canal oficial = app del banco.",
    "trigger_anchor": "official procedure ➔ app",
    "spanglish_trap": "Confiar en el llamador.",
    "workplace_usage": {
      "scenario": "Respuesta Defensiva del Usuario",
      "en": "Authenticating actions only inside the official banking app stops vishing attacks.",
      "es": "Autenticar acciones únicamente dentro de la aplicación bancaria oficial frena los ataques de vishing."
    }
  },
  {
    "id": "it1-mod5-sec4-ex1-q1",
    "section": "UE",
    "objective": "UE2",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the disbelief question: \"__________ you thought to verify the caller's credentials before authorizing the fund transfer?\"",
    "options": [
      "Surely",
      "Obviously",
      "Likely",
      "Barely"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una pregunta de incredulidad (\"¿no se te ocurrió…?\").\n• Regla: \"¿seguro que…?\" ➔ Surely…?\n• Descartas: Obviously afirma; Likely y Barely no abren preguntas así.",
    "why_wrong": [
      "Opción correcta: \"Surely you thought to…?\" = \"¿seguro que pensaste en…?\".",
      "Incorrecto: Obviously afirma algo evidente.",
      "Incorrecto: Likely significa \"probable\".",
      "Incorrecto: Barely significa \"apenas\"."
    ],
    "tip_es": "Expresión de asombro / expectativa casi segura: [Surely + oración...?] (\"¿Seguro que pensaste en...? / ¡No me digas que no lo verificaste!\").",
    "ref": null,
    "human_rule": "Pregunta de incredulidad ➔ Surely…?",
    "trigger_anchor": "______ you thought to verify the caller's credentials? ➔ Surely",
    "spanglish_trap": "Usar Obviously para sorprenderte. Para una pregunta de incredulidad, Surely.",
    "workplace_usage": {
      "scenario": "Investigación de Fraude BEC",
      "en": "Surely you verified the account number before executing the wire transfer?",
      "es": "¿Seguro que verificaste el número de cuenta antes de ejecutar la transferencia?"
    }
  },
  {
    "id": "it1-mod5-sec4-ex1-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the statement of manifest fact: \"There was __________ a need for us to update our password policy following the audit findings.\"",
    "options": [
      "Surely",
      "Obviously",
      "Likely",
      "Barely"
    ],
    "answer": 1,
    "why_correct": "• Pista: tras la auditoría, la necesidad era evidente.\n• Regla: \"obviamente\" ➔ obviously.\n• Descartas: Surely va en preguntas de incredulidad; Likely es \"probable\"; Barely es \"apenas\".",
    "why_wrong": [
      "Incorrecto: Surely va en preguntas de incredulidad.",
      "Opción correcta: \"obviously a need\" = \"obviamente había una necesidad\".",
      "Incorrecto: Likely significa \"probable\".",
      "Incorrecto: Barely significa \"apenas\"."
    ],
    "tip_es": "Evidencia indiscutible en reportes: [There was obviously a need...].",
    "ref": null,
    "human_rule": "Algo evidente ➔ obviously.",
    "trigger_anchor": "There was ______ a need to update our policy ➔ obviously",
    "spanglish_trap": "Elegir likely por \"seguro\". Likely es probabilidad; obviously es evidencia.",
    "workplace_usage": {
      "scenario": "Actualización de Políticas Post-Auditoría",
      "en": "There was obviously a need for us to update our password policy.",
      "es": "Evidentemente había una necesidad de que actualizáramos nuestra política de contraseñas."
    }
  },
  {
    "id": "it1-mod5-sec4-ex1-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the self-evident transition: \"__________ , we knew that it was not necessary to distribute unencrypted copies of the user database.\"",
    "options": [
      "Surely",
      "Likely",
      "Obviously",
      "Hardly"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"we knew that…\" abre con algo evidente.\n• Regla: \"obviamente\" al inicio ➔ Obviously,…\n• Descartas: Surely abre preguntas; Likely y Hardly no abren así.",
    "why_wrong": [
      "Incorrecto: Surely abre preguntas de incredulidad.",
      "Incorrecto: Likely no se usa para abrir así.",
      "Opción correcta: \"Obviously, we knew…\" = \"obviamente, sabíamos…\".",
      "Incorrecto: Hardly significa \"apenas\"."
    ],
    "tip_es": "Conector de evidencia patente: [Obviously, + oración].",
    "ref": null,
    "human_rule": "Abrir con algo evidente ➔ Obviously,…",
    "trigger_anchor": "______, we knew it was not necessary ➔ Obviously",
    "spanglish_trap": "Elegir Surely por sonar seguro. Surely suele abrir preguntas.",
    "workplace_usage": {
      "scenario": "Protección de Bases de Datos",
      "en": "Obviously, we knew that it was not necessary to distribute unencrypted copies.",
      "es": "Obviamente, sabíamos que no era necesario distribuir copias sin cifrar."
    }
  },
  {
    "id": "it1-mod5-sec4-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the probability construction: \"It is most __________ that they will distribute a summary of the security audit before the end of the sprint.\"",
    "options": [
      "Surely",
      "Obviously",
      "Definitely",
      "Likely"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"It is most ______ that…\" pide un adjetivo de probabilidad.\n• Regla: \"muy probable\" ➔ most likely.\n• Descartas: Surely, Obviously y Definitely son adverbios y no van con \"It is most\".",
    "why_wrong": [
      "Incorrecto: Surely es un adverbio.",
      "Incorrecto: Obviously es un adverbio.",
      "Incorrecto: Definitely es un adverbio.",
      "Opción correcta: \"It is most likely that…\" = \"es muy probable que…\"."
    ],
    "tip_es": "Estructura impersonal de probabilidad: [It is (most / more) LIKELY that...].",
    "ref": null,
    "human_rule": "\"Es muy probable que…\" ➔ It is most likely that…",
    "trigger_anchor": "It is most ______ that they will distribute… ➔ likely",
    "spanglish_trap": "Poner un adverbio después de \"It is most\". Ahí va un adjetivo: likely.",
    "workplace_usage": {
      "scenario": "Roadmap y Planificación de Tareas",
      "en": "It is most likely that they will distribute a summary of the audit.",
      "es": "Es muy probable que distribuyan un resumen de la auditoría de seguridad."
    }
  },
  {
    "id": "it1-mod5-sec4-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the comparative likelihood: \"It is more __________ that we will buy a template to create the IS policy rather than write it from scratch.\"",
    "options": [
      "Likely",
      "Surely",
      "Obviously",
      "Probably"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"It is more ______ that…\" pide un adjetivo de probabilidad.\n• Regla: \"es más probable que…\" ➔ more likely.\n• Descartas: Surely y Obviously son adverbios; Probably también es un adverbio.",
    "why_wrong": [
      "Opción correcta: \"more likely that…\" = \"más probable que…\".",
      "Incorrecto: Surely es un adverbio.",
      "Incorrecto: Obviously es un adverbio.",
      "Incorrecto: Probably es un adverbio; después de \"It is more\" va un adjetivo."
    ],
    "tip_es": "Comparativo de probabilidad: [It is more likely that... rather than...].",
    "ref": null,
    "human_rule": "\"Es más probable que…\" ➔ It is more likely that…",
    "trigger_anchor": "It is more ______ that we will buy a template ➔ likely",
    "spanglish_trap": "Usar probably porque \"probable\" suena igual. Aquí hace falta el adjetivo: likely.",
    "workplace_usage": {
      "scenario": "Adopción de Plantillas de Cumplimiento",
      "en": "It is more likely that we will buy a template to create the policy.",
      "es": "Es más probable que compremos una plantilla para crear la política."
    }
  },
  {
    "id": "it1-mod5-sec4-ex1-q6",
    "section": "UE",
    "objective": "UE2",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the incredulous question: \"__________ you don't think that I could have made those unauthorized purchases?\"",
    "options": [
      "Obviously",
      "Surely",
      "Likely",
      "Hardly"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una pregunta de incredulidad (\"¿seguro que no piensas que…?\").\n• Regla: \"¿seguro que…?\" ➔ Surely…?\n• Descartas: Obviously afirma; Likely y Hardly no abren preguntas así.",
    "why_wrong": [
      "Incorrecto: Obviously afirma algo evidente.",
      "Opción correcta: \"Surely you don't think…?\" = \"¿seguro que no piensas…?\".",
      "Incorrecto: Likely significa \"probable\".",
      "Incorrecto: Hardly significa \"apenas\"."
    ],
    "tip_es": "Apelación de incredulidad: [Surely you don't think that...?] (\"¿Seguro que no creerás que...?\").",
    "ref": null,
    "human_rule": "Pregunta de incredulidad ➔ Surely you don't think…?",
    "trigger_anchor": "______ you don't think that I could have…? ➔ Surely",
    "spanglish_trap": "Usar Obviously para protestar. Para \"¿en serio piensas que…?\", Surely.",
    "workplace_usage": {
      "scenario": "Defensa ante Sospechas en Investigación de Fraude",
      "en": "Surely you don’t think that I could have made those purchases?",
      "es": "¿Seguro que no crees que yo podría haber hecho esas compras?"
    }
  },
  {
    "id": "it1-mod5-sec4-ex2-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the appropriate answer: \"Person A: Do you think that we will need to update the IS policy this quarter? Person B:\"",
    "options": [
      "It is most likely that we will need to update it.",
      "It is surely necessary that we delete the policy.",
      "Obviously we must never update security documents.",
      "It is barely true that policies exist."
    ],
    "answer": 0,
    "why_correct": "• Pista: preguntan si habrá que actualizar la política este trimestre.\n• Regla: la respuesta correcta responde con sentido (\"most likely\").\n• Descartas: B, C y D contradicen la pregunta o no tienen sentido.",
    "why_wrong": [
      "Opción correcta: \"It is most likely that we will need to update it\" = \"es muy probable que tengamos que actualizarla\".",
      "Incorrecto: dice que es necesario borrar la política, y no responde.",
      "Incorrecto: dice que nunca se actualizan los documentos de seguridad.",
      "Incorrecto: \"barely true that policies exist\" no responde."
    ],
    "tip_es": "Proyección de probabilidad formal: [It is most likely that we will need to...].",
    "ref": null,
    "human_rule": "Responde con el adjetivo de probabilidad: It is most likely that…",
    "trigger_anchor": "Will we need to update the policy? ➔ It is most likely that we will",
    "spanglish_trap": "Elegir por el adverbio. Mira primero si la respuesta responde la pregunta.",
    "workplace_usage": {
      "scenario": "Calendario de Revisiones de Políticas",
      "en": "It is most likely that we will need to update the policy before the audit.",
      "es": "Es muy probable que debamos actualizar la política antes de la auditoría."
    }
  },
  {
    "id": "it1-mod5-sec4-ex2-q2",
    "section": "UE",
    "objective": "UE2",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the sound technical advice: \"Person A: How can I prevent these types of credential harvesting attacks from happening to my device? Person B:\"",
    "options": [
      "Surely, allow remote callers to disable your password manager.",
      "Obviously, protect your device from viruses and never disclose your MFA tokens.",
      "Likely, write your credentials on public sticky notes.",
      "Hardly, disconnect your screen during normal office hours."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"How can I prevent credential harvesting?\": consejo seguro.\n• Significado: Obviously, protect your device and never disclose MFA tokens.\n• Descartas: Las otras son consejos peligrosos o absurdos.",
    "why_wrong": [
      "Incorrecto: Desactivar el gestor de contraseñas es peligroso.",
      "Opción correcta: Proteger el dispositivo y no revelar tokens MFA.",
      "Incorrecto: Escribir claves en notas es peligroso.",
      "Incorrecto: Desconectar la pantalla no ayuda."
    ],
    "tip_es": "Higiene de seguridad elemental: [Obviously, protect your device and never disclose MFA].",
    "ref": null,
    "human_rule": "nunca reveles MFA.",
    "trigger_anchor": "prevent ➔ never disclose MFA",
    "spanglish_trap": "Elegir adverbios por forma.",
    "workplace_usage": {
      "scenario": "Mesa de Ayuda de Seguridad",
      "en": "Obviously, protect your device from malware and never share MFA codes.",
      "es": "Obviamente, proteja su dispositivo contra virus y nunca comparta sus códigos MFA."
    }
  },
  {
    "id": "it1-mod5-sec4-ex2-q3",
    "section": "UE",
    "objective": "UE2",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the appropriate reaction: \"Person A: I downloaded the executable while I was speaking to an unknown caller claiming to be Microsoft. Person B:\"",
    "options": [
      "Obviously you should give them full domain admin access.",
      "Likely you can send them our encrypted database passwords.",
      "Surely you checked if it was fraudulent before running it?",
      "Surely you know that Microsoft always calls customers directly."
    ],
    "answer": 2,
    "why_correct": "• Pista: Descargó un ejecutable de un llamador: pregunta de reproche.\n• Significado: Surely you checked if it was fraudulent before running it?\n• Descartas: Dar acceso admin o enviar contraseñas es peor.",
    "why_wrong": [
      "Incorrecto: Dar admin es peligroso.",
      "Incorrecto: Enviar contraseñas es peligroso.",
      "Opción correcta: Surely you checked...?",
      "Incorrecto: Microsoft no llama a clientes así."
    ],
    "tip_es": "Alerta de estafa clásica: Las grandes empresas tecnológicas nunca llaman de improviso para solucionar virus.",
    "ref": null,
    "human_rule": "surely...? = esperas que lo haya hecho.",
    "trigger_anchor": "downloaded ➔ surely you checked",
    "spanglish_trap": "Traducir surely como \"seguro\".",
    "workplace_usage": {
      "scenario": "Respuesta ante Sospecha de Compromiso",
      "en": "Surely you checked if it was fraudulent before downloading?",
      "es": "¿Seguro que comprobaste si era fraudulento antes de descargarlo?"
    }
  },
  {
    "id": "it1-mod5-sec4-ex2-q4",
    "section": "UE",
    "objective": "UE5",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the appropriate answer: \"Person A: What are the commercial benefits of making our security posture public? Person B:\"",
    "options": [
      "It surely guarantees that hackers will never target our infrastructure.",
      "It likely eliminates the need to maintain firewall rules.",
      "It obviously proves that we do not have any internal confidential data.",
      "It obviously demonstrates our security operational maturity to enterprise clients."
    ],
    "answer": 3,
    "why_correct": "• Pista: Beneficio comercial de publicar la postura de seguridad.\n• Significado: Demuestra madurez operativa de seguridad.\n• Descartas: Garantizar que nadie ataque, eliminar firewalls o probar falta de confidencialidad no son beneficios.",
    "why_wrong": [
      "Incorrecto: \"Garantiza\" es exagerado.",
      "Incorrecto: No elimina firewalls.",
      "Incorrecto: No prueba falta de confidencialidad.",
      "Opción correcta: Demuestra madurez operativa."
    ],
    "tip_es": "Beneficio de transparencia en ciberseguridad: Demuestra madurez y fiabilidad comercial.",
    "ref": null,
    "human_rule": "publicar = mostrar madurez, no inmunidad.",
    "trigger_anchor": "benefit ➔ maturity",
    "spanglish_trap": "Aceptar promesas absolutas.",
    "workplace_usage": {
      "scenario": "Página de Confianza y Cumplimiento (Trust Portal)",
      "en": "Public policies obviously demonstrate our security operational maturity.",
      "es": "Las políticas públicas evidentemente demuestran nuestra madurez operativa en seguridad."
    }
  },
  {
    "id": "it1-mod5-sec5-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the technical synonym for: \"A standard set of rules.\"",
    "options": [
      "A common set of rules",
      "A legacy protocol",
      "An unwritten guideline",
      "An obsolete convention"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"standard set of rules\" = conjunto común de reglas.\n• Significado: A common set of rules.\n• Descartas: Legacy protocol, unwritten guideline y obsolete convention cambian el sentido.",
    "why_wrong": [
      "Opción correcta: Common = estándar, compartido.",
      "Incorrecto: Legacy = heredado.",
      "Incorrecto: Unwritten = no escrito.",
      "Incorrecto: Obsolete = obsoleto."
    ],
    "tip_es": "Glosario oficial Cisco: [A standard set of rules] = [A common set of rules].",
    "ref": null,
    "human_rule": "standard ≈ common.",
    "trigger_anchor": "standard ➔ common",
    "spanglish_trap": "Traducir common como \"común y corriente\".",
    "workplace_usage": {
      "scenario": "Definición de Políticas InfoSec",
      "en": "All subsidiaries must adhere to a common set of security rules.",
      "es": "Todas las filiales deben adherirse a un conjunto común de reglas de seguridad."
    }
  },
  {
    "id": "it1-mod5-sec5-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the synonym for: \"The layout of a document.\"",
    "options": [
      "The encryption key of a file",
      "The design and structure of a document",
      "The digital watermark of a page",
      "The network latency of transmission"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"layout\" = diseño y estructura.\n• Significado: The design and structure of a document.\n• Descartas: Clave de cifrado, marca de agua y latencia son otros temas.",
    "why_wrong": [
      "Incorrecto: No es una clave de cifrado.",
      "Opción correcta: Diseño y estructura.",
      "Incorrecto: No es una marca de agua.",
      "Incorrecto: No es latencia."
    ],
    "tip_es": "Documentación técnica: [Layout] = design and visual organization of a document.",
    "ref": null,
    "human_rule": "layout = diseño y estructura.",
    "trigger_anchor": "layout ➔ design and structure",
    "spanglish_trap": "Traducir layout como \"plano\".",
    "workplace_usage": {
      "scenario": "Maquetación de Políticas",
      "en": "A clear document layout ensures employees can quickly find the password guidelines.",
      "es": "Un diseño de documento claro garantiza que los empleados puedan encontrar rápidamente las pautas de contraseñas."
    }
  },
  {
    "id": "it1-mod5-sec5-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the synonym for: \"The policy should incorporate the following points.\"",
    "options": [
      "The policy should delete the following points",
      "The policy should contradict the following points",
      "The policy should include the following points",
      "The policy should encrypt the following points"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"incorporate\" = incluir.\n• Significado: The policy should include the following points.\n• Descartas: Delete, contradict y encrypt cambian el sentido.",
    "why_wrong": [
      "Incorrecto: Delete = eliminar.",
      "Incorrecto: Contradict = contradecir.",
      "Opción correcta: Include = incluir.",
      "Incorrecto: Encrypt = cifrar."
    ],
    "tip_es": "Vocabulario formal de políticas: [Incorporate] = include / integrate.",
    "ref": null,
    "human_rule": "incorporate = include.",
    "trigger_anchor": "incorporate ➔ include",
    "spanglish_trap": "Traducir incorporate como \"incorporarse\".",
    "workplace_usage": {
      "scenario": "Actualización Regulatoria",
      "en": "The policy must incorporate the new GDPR data breach notification requirements.",
      "es": "La política debe incorporar los nuevos requisitos de notificación de brechas de datos del RGPD."
    }
  },
  {
    "id": "it1-mod5-sec5-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the definition for: \"The policy can be compact.\"",
    "options": [
      "The policy must be compressed using ZIP software",
      "The policy must contain thousands of pages",
      "The policy must be invisible to normal users",
      "The policy may be brief and to the point"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"compact\" = breve.\n• Significado: May be brief and to the point.\n• Descartas: ZIP, miles de páginas e invisible no coinciden.",
    "why_wrong": [
      "Incorrecto: No es un ZIP.",
      "Incorrecto: Miles de páginas es lo contrario.",
      "Incorrecto: Invisible no es compacto.",
      "Opción correcta: Breve y directa."
    ],
    "tip_es": "Redacción efectiva: [Compact] = brief, concise, and to the point.",
    "ref": null,
    "human_rule": "compact = breve.",
    "trigger_anchor": "compact ➔ brief",
    "spanglish_trap": "Entender compact como comprimido.",
    "workplace_usage": {
      "scenario": "Pautas de Redacción de Políticas",
      "en": "A compact security policy is easier for employees to read and remember.",
      "es": "Una política de seguridad compacta es más fácil de leer y recordar para los empleados."
    }
  },
  {
    "id": "it1-mod5-sec5-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the synonym for: \"The strategy is outlined in the document.\"",
    "options": [
      "The strategy is summarized in the document",
      "The strategy is completely hidden from view",
      "The strategy has been permanently rejected",
      "The strategy is written in hexadecimal code"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"outlined\" = resumido.\n• Significado: The strategy is summarized in the document.\n• Descartas: Oculta, rechazada o en hexadecimal no coinciden.",
    "why_wrong": [
      "Opción correcta: Summarized = resumida.",
      "Incorrecto: Hidden = oculta.",
      "Incorrecto: Rejected = rechazada.",
      "Incorrecto: Hexadecimal es otro formato."
    ],
    "tip_es": "Estructuración de textos: [Outlined] = summarized / presented in summary form.",
    "ref": null,
    "human_rule": "outline = resumir.",
    "trigger_anchor": "outlined ➔ summarized",
    "spanglish_trap": "Entender outline como \"contorno\".",
    "workplace_usage": {
      "scenario": "Resumen Ejecutivo de Ciberseguridad",
      "en": "The incident response strategy is outlined in section four.",
      "es": "La estrategia de respuesta a incidentes está resumida en la sección cuatro."
    }
  },
  {
    "id": "it1-mod5-sec5-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the synonym for: \"The policy is definitely extensive.\"",
    "options": [
      "The policy is only one paragraph long.",
      "The policy certainly covers every operational area.",
      "The policy is strictly restricted to senior executives.",
      "The policy has been deleted from cloud storage."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"extensive\" = abarca todo.\n• Significado: The policy certainly covers every operational area.\n• Descartas: Una sola página, solo ejecutivos o borrada no coinciden.",
    "why_wrong": [
      "Incorrecto: Un párrafo es lo contrario.",
      "Opción correcta: Cubre todas las áreas.",
      "Incorrecto: Restringida es otro concepto.",
      "Incorrecto: Borrada contradice."
    ],
    "tip_es": "Alcance de políticas: [Extensive] = comprehensive, covers every operational area.",
    "ref": null,
    "human_rule": "extensive = amplio.",
    "trigger_anchor": "extensive ➔ covers everything",
    "spanglish_trap": "Traducir extensive como \"extenso en tiempo\".",
    "workplace_usage": {
      "scenario": "Marco de Seguridad Corporativo",
      "en": "The extensive policy covers cloud infrastructure, remote work, and physical access.",
      "es": "La exhaustiva política cubre infraestructura en la nube, trabajo remoto y acceso físico."
    }
  },
  {
    "id": "it1-mod5-sec5-ex1-q7",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the definition for: \"The recipient of the email notification.\"",
    "options": [
      "The mail transfer agent server daemon",
      "The physical fiber optic transceiver",
      "The person who receives the email",
      "The hacker attempting credential stuffing"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"recipient\" = quien recibe.\n• Significado: The person who receives the email.\n• Descartas: Servidor, transceptor y hacker no son destinatarios.",
    "why_wrong": [
      "Incorrecto: Un servidor de correo no es el destinatario.",
      "Incorrecto: Un transceptor es hardware.",
      "Opción correcta: Quien recibe el correo.",
      "Incorrecto: Un hacker no es destinatario."
    ],
    "tip_es": "Glosario de mensajería: [Recipient] = person who receives the message.",
    "ref": null,
    "human_rule": "recipient = destinatario.",
    "trigger_anchor": "recipient ➔ receives",
    "spanglish_trap": "Confundir recipient con receptionist.",
    "workplace_usage": {
      "scenario": "Comunicaciones de Seguridad Masivas",
      "en": "Ensure that the recipient list contains only authenticated staff.",
      "es": "Asegúrese de que la lista de destinatarios contenga únicamente personal autenticado."
    }
  },
  {
    "id": "it1-mod5-sec5-ex2-q1",
    "section": "UE",
    "objective": "R1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the reading passage, how can operating in different industry markets affect an organization's Information Security Policy?",
    "options": [
      "Different regulatory markets can determine the required length, complexity, and scope of the policy.",
      "Markets determine the physical color of the datacenter server racks.",
      "Different markets require companies to abolish password controls entirely.",
      "Markets force all companies to use the identical software vendor."
    ],
    "answer": 0,
    "why_correct": "• Pista: Distintos mercados cambian la extensión que exige la política.\n• Significado: Los mercados regulados pueden determinar la extensión requerida.\n• Descartas: Color de servidores, abolir contraseñas o software idéntico no se menciona.",
    "why_wrong": [
      "Opción correcta: Las regulaciones pueden determinar la extensión.",
      "Incorrecto: El color no importa.",
      "Incorrecto: No se abolen contraseñas.",
      "Incorrecto: No fuerzan el mismo software."
    ],
    "tip_es": "Impacto del mercado en políticas: Las regulaciones sectoriales determinan la profundidad y extensión de la política.",
    "ref": null,
    "human_rule": "mercado = regulación distinta.",
    "trigger_anchor": "different markets ➔ regulation",
    "spanglish_trap": "Buscar efectos físicos.",
    "workplace_usage": {
      "scenario": "Cumplimiento Normativo por Industria",
      "en": "Operating in healthcare markets requires a much more extensive compliance policy.",
      "es": "Operar en mercados de la salud requiere una política de cumplimiento mucho más exhaustiva."
    }
  },
  {
    "id": "it1-mod5-sec5-ex2-q2",
    "section": "UE",
    "objective": "R2",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "When creating an effective security policy, what valuable source of insight does the text state companies frequently incorporate?",
    "options": [
      "Anonymous comments left on social media forums.",
      "Information and findings from audits conducted by external cybersecurity assessors.",
      "Unverified code snippets copied from deprecated bulletin boards.",
      "Promotional marketing brochures from hardware retail stores."
    ],
    "answer": 1,
    "why_correct": "• Pista: Fuente de insumos: auditorías externas.\n• Significado: Información y hallazgos de auditorías externas.\n• Descartas: Redes sociales anónimas, código dudoso o folletos no son fuentes serias.",
    "why_wrong": [
      "Incorrecto: Comentarios anónimos no son fuente.",
      "Opción correcta: Hallazgos de auditorías externas.",
      "Incorrecto: Código no verificado no es fuente.",
      "Incorrecto: Folletos de marketing no sirven."
    ],
    "tip_es": "Insumo de creación de políticas: Informes y hallazgos de auditorías externas independientes.",
    "ref": null,
    "human_rule": "fuente fiable = auditoría externa.",
    "trigger_anchor": "valuable source ➔ external audits",
    "spanglish_trap": "Valorar cualquier fuente.",
    "workplace_usage": {
      "scenario": "Mejora Continua de Políticas InfoSec",
      "en": "We updated our access controls based on findings from external security audits.",
      "es": "Actualizamos nuestros controles de acceso basándonos en los hallazgos de auditorías de seguridad externas."
    }
  },
  {
    "id": "it1-mod5-sec5-ex2-q3",
    "section": "UE",
    "objective": "R3",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the reading passage, what foundational element does an Information Security Policy typically mandate?",
    "options": [
      "Mandatory free lunches for all software developers on Fridays.",
      "Guaranteed promotion to executive management within three months.",
      "Clear baseline protocols and responsibilities regarding data handling and system access.",
      "Prohibition of all keyboard shortcuts inside IDEs."
    ],
    "answer": 2,
    "why_correct": "• Pista: La política exige protocolos y responsabilidades claras.\n• Significado: Protocolos base y responsabilidades sobre los datos.\n• Descartas: Almuerzos, ascensos o prohibir atajos no son parte de una política.",
    "why_wrong": [
      "Incorrecto: Almuerzos gratis no es política.",
      "Incorrecto: Ascensos no es política.",
      "Opción correcta: Protocolos y responsabilidades claras.",
      "Incorrecto: Prohibir atajos no es política."
    ],
    "tip_es": "Contenido esencial de la política: Protocolos base de acceso y custodia de la información.",
    "ref": null,
    "human_rule": "política = reglas + responsabilidades.",
    "trigger_anchor": "policy mandates ➔ protocols",
    "spanglish_trap": "Elegir beneficios laborales.",
    "workplace_usage": {
      "scenario": "Gobernanza de Seguridad",
      "en": "The policy outlines baseline responsibilities for every role in the engineering organization.",
      "es": "La política describe las responsabilidades básicas para cada función en la organización de ingeniería."
    }
  },
  {
    "id": "it1-mod5-sec5-ex2-q4",
    "section": "UE",
    "objective": "R4",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What does the text state regarding employee compliance with the Information Security Policy?",
    "options": [
      "Compliance is entirely optional during summer months.",
      "Compliance applies only to junior engineers, not executives.",
      "Employees can choose to ignore policies if their code is fast.",
      "Compliance is mandatory for all personnel, and ignorance of the policy is not an acceptable defense."
    ],
    "answer": 3,
    "why_correct": "• Pista: Cumplimiento obligatorio para todos.\n• Significado: Es obligatorio para todo el personal y no conocerlo no excusa.\n• Descartas: Opcional, solo junior o ignorable si el código es rápido contradicen.",
    "why_wrong": [
      "Incorrecto: No es opcional en verano.",
      "Incorrecto: Aplica a todos, también a ejecutivos.",
      "Incorrecto: No se puede ignorar.",
      "Opción correcta: Obligatorio para todos; ignorarlo no excusa."
    ],
    "tip_es": "Carácter vinculante: El cumplimiento es estrictamente obligatorio para todo el personal sin excepciones.",
    "ref": null,
    "human_rule": "cumplimiento = para todos.",
    "trigger_anchor": "compliance ➔ mandatory for all",
    "spanglish_trap": "Pensar que hay excepciones.",
    "workplace_usage": {
      "scenario": "Contrato Laboral y Cláusulas InfoSec",
      "en": "Compliance with our Information Security Policy is mandatory for all staff and contractors.",
      "es": "El cumplimiento de nuestra Política de Seguridad de la Información es obligatorio para todo el personal y contratistas."
    }
  },
  {
    "id": "it1-mod5-sec5-ex2-q5",
    "section": "UE",
    "objective": "R4",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What hazard does the text warn about when policies are written with excessive academic jargon and complexity?",
    "options": [
      "Employees will struggle to understand them and will inevitably bypass security controls to get work done.",
      "Complex policies cause server CPUs to overheat physically.",
      "Jargon immediately deletes all git commit histories.",
      "Employees will automatically learn assembly language programming."
    ],
    "answer": 0,
    "why_correct": "• Pista: Peligro de la jerga: no la entienden y la incumplen.\n• Significado: Los empleados no la entenderán y la incumplirán.\n• Descartas: CPUs que se calientan, borrar commits o aprender ensamblador son absurdos.",
    "why_wrong": [
      "Opción correcta: No la entienden y la incumplen.",
      "Incorrecto: Los CPUs no se sobrecalientan.",
      "Incorrecto: La jerga no borra commits.",
      "Incorrecto: No aprenden ensamblador por eso."
    ],
    "tip_es": "Riesgo de políticas complejas: La fricción incomprensible empuja a los usuarios a saltarse los controles (\"shadow IT\").",
    "ref": null,
    "human_rule": "política compleja = no se cumple.",
    "trigger_anchor": "jargon ➔ not understood",
    "spanglish_trap": "Ver el riesgo como técnico, no humano.",
    "workplace_usage": {
      "scenario": "Diseño de Procesos de Seguridad Usables",
      "en": "Unreadable policies cause employees to circumvent controls, increasing vulnerability.",
      "es": "Las políticas ilegibles provocan que los empleados eludan los controles, lo que aumenta la vulnerabilidad."
    }
  },
  {
    "id": "it1-mod5-sec5-ex2-q6",
    "section": "UE",
    "objective": "R5",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What major commercial advantage does the text identify for companies that publicly publish their security policies?",
    "options": [
      "It grants the company permanent immunity from all civil lawsuits.",
      "It makes it evident to customers that the company has focused significant resources on safeguarding their data.",
      "It forces all competing firms out of the marketplace immediately.",
      "It allows the company to operate without firewalls."
    ],
    "answer": 1,
    "why_correct": "• Pista: Ventaja comercial de publicar: confianza del cliente.\n• Significado: Evidencia a los clientes que la empresa se ha enfocado en la seguridad.\n• Descartas: Inmunidad legal, expulsar competidores o prescindir de firewalls son absurdos.",
    "why_wrong": [
      "Incorrecto: No da inmunidad legal.",
      "Opción correcta: Muestra a los clientes que se enfocó en la seguridad.",
      "Incorrecto: No expulsa a la competencia.",
      "Incorrecto: No elimina firewalls."
    ],
    "tip_es": "Ventaja comercial de la transparencia: Demuestra a los clientes que se invierte en proteger su información.",
    "ref": null,
    "human_rule": "publicar = generar confianza.",
    "trigger_anchor": "publish ➔ customer trust",
    "spanglish_trap": "Esperar efectos absolutos.",
    "workplace_usage": {
      "scenario": "Página de Privacidad y Cumplimiento",
      "en": "Publishing our security overview makes it evident that we prioritize data protection.",
      "es": "Publicar nuestra descripción general de seguridad hace evidente que priorizamos la protección de datos."
    }
  }
];
