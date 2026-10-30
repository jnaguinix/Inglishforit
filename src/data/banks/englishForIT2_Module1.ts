import { Question } from '../../types';

/**
 * English for IT 2 – Section 1: Grammar – The Subjunctive Mood
 * Oficial OpenEDG / Cisco Curriculum (Exercise 1 & Exercise 2)
 */
export const ENGLISH_FOR_IT_2_MODULE_1_BANK: Question[] = [
  {
    "id": "it2-1-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Analyze the following sentence and classify its mood: \"They're suggesting that he replace some of the outdated cabling.\"",
    "options": [
      "Subjunctive",
      "Not subjunctive",
      "Indicative passive",
      "Imperative mood"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"suggesting that he replace\": verbo de sugerencia + that, y el verbo no lleva -s.\n• Regla: suggest / recommend / insist / demand + that + verbo sin -s ➔ es subjuntivo.\n• Descartas: no es pasiva ni imperativo.",
    "why_wrong": [
      "Opción correcta: es subjuntivo (\"replace\", sin -s).",
      "Incorrecto: sí es subjuntivo, porque el verbo no lleva -s.",
      "Incorrecto: no es una pasiva.",
      "Incorrecto: el imperativo da una orden directa, y aquí hay un sujeto (he)."
    ],
    "tip_es": "Si ves \"suggest / recommend that he [verbo sin -s]\", la oración está en modo subjuntivo.",
    "ref": null,
    "human_rule": "suggest that he replace ➔ subjuntivo (verbo sin -s).",
    "trigger_anchor": "suggesting that he replace ➔ subjuntivo",
    "spanglish_trap": "Esperar \"replaces\". Después de suggest that, el verbo va tal cual.",
    "workplace_usage": {
      "scenario": "Revisión de Cableado en Centro de Datos",
      "en": "The network architect is suggesting that he replace the legacy Cat5e runs with Cat6a.",
      "es": "El arquitecto de redes está sugiriendo que él reemplace el cableado heredado Cat5e por Cat6a."
    }
  },
  {
    "id": "it2-1-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Analyze the following sentence and classify its mood: \"I recommend that the firewall be reconfigured in order to block unwanted traffic.\"",
    "options": [
      "Not subjunctive",
      "Subjunctive",
      "Passive indicative",
      "Past continuous"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"recommend that the firewall be reconfigured\": recomendación + that + be.\n• Regla: recommend + that + be + 3.ª forma ➔ subjuntivo.\n• Descartas: no es pasiva en indicativo ni pasado continuo.",
    "why_wrong": [
      "Incorrecto: sí es subjuntivo.",
      "Opción correcta: es subjuntivo (\"be reconfigured\").",
      "Incorrecto: la pasiva normal usaría \"is reconfigured\".",
      "Incorrecto: no hay un pasado continuo."
    ],
    "tip_es": "Ver \"recommend that [sujeto] BE\" es la firma inequívoca del modo subjuntivo en IT.",
    "ref": null,
    "human_rule": "recommend that… be + 3.ª forma ➔ subjuntivo.",
    "trigger_anchor": "recommend that the firewall be reconfigured ➔ subjuntivo",
    "spanglish_trap": "Esperar \"is reconfigured\". Después de recommend that va be.",
    "workplace_usage": {
      "scenario": "Recomendación de Seguridad Perimetral",
      "en": "I recommend that the ingress firewall be reconfigured before opening port 443.",
      "es": "Recomiendo que el firewall de entrada sea reconfigurado antes de abrir el puerto 443."
    }
  },
  {
    "id": "it2-1-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Analyze the following sentence and classify its mood: \"It's too risky to allow external access to anything in our network.\"",
    "options": [
      "Past subjunctive",
      "Subjunctive",
      "Not subjunctive",
      "Conditional mood"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"It's too risky to allow…\" no tiene un verbo de petición + that.\n• Regla: sin verbo de exigencia / sugerencia + that ➔ no es subjuntivo.\n• Descartas: no hay \"were\" ni condición.",
    "why_wrong": [
      "Incorrecto: no hay un pasado subjuntivo (were).",
      "Incorrecto: no hay un verbo de petición + that.",
      "Opción correcta: no es subjuntivo.",
      "Incorrecto: no hay una condición con if."
    ],
    "tip_es": "\"It's too risky to allow\" es indicativo directo; no cumple ninguna condición de subjuntivo.",
    "ref": null,
    "human_rule": "Subjuntivo = verbo de petición + that, o \"If I were…\". Si no hay, no lo es.",
    "trigger_anchor": "It's too risky to allow access ➔ no es subjuntivo",
    "spanglish_trap": "Ver un verbo de opinión y pensar en subjuntivo. Busca la pareja demand / suggest + that, o were.",
    "workplace_usage": {
      "scenario": "Política de Acceso Remoto",
      "en": "It is too risky to allow direct SSH access to the database from the public Internet.",
      "es": "Es demasiado arriesgado permitir acceso directo por SSH a la base de datos desde la Internet pública."
    }
  },
  {
    "id": "it2-1-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Analyze the following sentence and classify its mood: \"We must restrict the VPN settings so as to limit unnecessary access.\"",
    "options": [
      "Mandatory subjunctive",
      "Subjunctive",
      "Present subjunctive",
      "Not subjunctive"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"We must restrict… so as to limit\": un modal normal (must) + verbo.\n• Regla: must + verbo no es subjuntivo.\n• Descartas: no hay verbo de petición + that, ni were.",
    "why_wrong": [
      "Incorrecto: no hay un verbo de petición + that.",
      "Incorrecto: no es subjuntivo.",
      "Incorrecto: no es subjuntivo.",
      "Opción correcta: no es subjuntivo."
    ],
    "tip_es": "Las oraciones con modales (\"must\", \"should\", \"can\") son indicativas, NO subjuntivo.",
    "ref": null,
    "human_rule": "must + verbo ➔ obligación normal, no subjuntivo.",
    "trigger_anchor": "We must restrict the VPN… ➔ no es subjuntivo",
    "spanglish_trap": "Pensar que toda obligación es subjuntivo. Solo lo es con demand / suggest + that.",
    "workplace_usage": {
      "scenario": "Hardening de VPN",
      "en": "We must restrict internal subnet routing to authenticated VPN tunnels only.",
      "es": "Debemos restringir el enrutamiento de subredes internas únicamente a túneles VPN autenticados."
    }
  },
  {
    "id": "it2-1-ex1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Analyze the following sentence and classify its mood: \"If it were up to me, I would change the IP addressing to one that allows us to do some prefix aggregation.\"",
    "options": [
      "Subjunctive",
      "Not subjunctive",
      "Past indicative",
      "Present perfect"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"If it were up to me…\" usa were con it.\n• Regla: \"si dependiera de mí\" ➔ If it were up to me ➔ subjuntivo.\n• Descartas: no es pasado indicativo (sería \"was\").",
    "why_wrong": [
      "Opción correcta: es subjuntivo (\"were\" con it).",
      "Incorrecto: sí es subjuntivo.",
      "Incorrecto: un pasado indicativo usaría \"was\".",
      "Incorrecto: no hay presente perfecto."
    ],
    "tip_es": "\"If it were up to me\" (con WERE, no was) es la expresión reina del subjuntivo de opinión.",
    "ref": null,
    "human_rule": "\"Si dependiera de mí\" ➔ If it were up to me.",
    "trigger_anchor": "If it were up to me ➔ subjuntivo",
    "spanglish_trap": "Esperar \"was\" con it. En esta hipótesis va were.",
    "workplace_usage": {
      "scenario": "Planificación de Espacio de Direccionamiento IP",
      "en": "If it were up to me, I would renumber the subnets to simplify BGP route aggregation.",
      "es": "Si dependiera de mí, renumeraría las subredes para simplificar la agregación de rutas BGP."
    }
  },
  {
    "id": "it2-1-ex1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Analyze the following sentence and classify its mood: \"In order to improve scalability we should consider implementing OSPF areas.\"",
    "options": [
      "Subjunctive",
      "Not subjunctive",
      "Past subjunctive",
      "Unreal conditional"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"we should consider implementing\": un modal normal (should) + verbo.\n• Regla: should + verbo no es subjuntivo.\n• Descartas: no hay verbo de petición + that, ni were.",
    "why_wrong": [
      "Incorrecto: no hay un verbo de petición + that.",
      "Opción correcta: no es subjuntivo.",
      "Incorrecto: no hay un pasado subjuntivo.",
      "Incorrecto: no hay una condición irreal."
    ],
    "tip_es": "\"We should consider\" usa el modal \"should\" y por tanto es indicativo, no subjuntivo.",
    "ref": null,
    "human_rule": "should + verbo ➔ consejo normal, no subjuntivo.",
    "trigger_anchor": "we should consider implementing ➔ no es subjuntivo",
    "spanglish_trap": "Pensar que should + consider es subjuntivo. Solo lo es con that / were.",
    "workplace_usage": {
      "scenario": "Diseño de Red de Gran Escala",
      "en": "In order to reduce link-state flooding, we should consider splitting the network into OSPF areas.",
      "es": "Para reducir la inundación de estados de enlace, deberíamos considerar dividir la red en áreas OSPF."
    }
  },
  {
    "id": "it2-1-ex1-q7",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Analyze the following sentence and classify its mood: \"If I were you, I would implement redundancy measures that could prevent our infrastructure from becoming unreachable.\"",
    "options": [
      "Past indicative",
      "Not subjunctive",
      "Subjunctive",
      "Imperative"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"If I were you…\" usa were con I.\n• Regla: \"si yo fuera tú\" ➔ If I were you ➔ subjuntivo.\n• Descartas: un pasado indicativo usaría \"was\"; no es imperativo.",
    "why_wrong": [
      "Incorrecto: un pasado indicativo usaría \"was\".",
      "Incorrecto: sí es subjuntivo.",
      "Opción correcta: es subjuntivo (\"were\" con I).",
      "Incorrecto: no es una orden directa."
    ],
    "tip_es": "\"If I were you\" (con WERE) es la expresión por excelencia del modo subjuntivo en inglés B2.",
    "ref": null,
    "human_rule": "\"Si yo fuera tú\" ➔ If I were you.",
    "trigger_anchor": "If I were you ➔ subjuntivo",
    "spanglish_trap": "Decir \"If I was you\". En esta hipótesis va were.",
    "workplace_usage": {
      "scenario": "Asesoría de Arquitectura de Alta Disponibilidad",
      "en": "If I were you, I would deploy dual power supplies and redundant uplinks for the core chassis.",
      "es": "Si yo fuera tú, implementaría fuentes de alimentación dobles y enlaces ascendentes redundantes para el chasis central."
    }
  },
  {
    "id": "it2-1-ex2-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "We insist that proprietary networking protocols ______ used.",
    "options": [
      "to not be",
      "were",
      "are not",
      "not be"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"We insist that proprietary protocols…\" y la frase es negativa.\n• Regla: insist + that + not + be + 3.ª forma.\n• Descartas: \"to not be\" lleva to; were y \"are not\" conjugan el verbo.",
    "why_wrong": [
      "Incorrecto: después de that no va \"to\".",
      "Incorrecto: were es pasado.",
      "Incorrecto: \"are not\" conjuga el verbo.",
      "Opción correcta: \"not be used\" = \"no se usen\"."
    ],
    "tip_es": "Subjuntivo negativo con pasiva: coloca simplemente \"NOT BE\" (\"insist that protocols NOT BE used\").",
    "ref": null,
    "human_rule": "Negativo: that + not + be + 3.ª forma.",
    "trigger_anchor": "We insist that protocols ______ used ➔ not be",
    "spanglish_trap": "Poner \"do not\" o \"are not\". En el subjuntivo negativo se pone not directo.",
    "workplace_usage": {
      "scenario": "Directiva de Estandarización de Protocolos",
      "en": "Our enterprise policy insists that insecure cleartext protocols not be used in production.",
      "es": "Nuestra política empresarial insiste en que no se utilicen protocolos inseguros en texto claro en producción."
    }
  },
  {
    "id": "it2-1-ex2-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "They demanded that we ______ in the office every weekend.",
    "options": [
      "be",
      "are",
      "was",
      "to be"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"They demanded that we…\": exigencia + that.\n• Regla: demand + that + be.\n• Descartas: are y was conjugan el verbo; \"to be\" lleva to.",
    "why_wrong": [
      "Opción correcta: \"be\" = \"estemos\" (verbo tal cual).",
      "Incorrecto: are conjuga el verbo.",
      "Incorrecto: was conjuga el verbo.",
      "Incorrecto: después de that no va \"to\"."
    ],
    "tip_es": "Tras \"demanded that\", el verbo to be es siempre \"BE\" desnudo.",
    "ref": null,
    "human_rule": "demand + that + be.",
    "trigger_anchor": "They demanded that we ______ in the office ➔ be",
    "spanglish_trap": "Poner are o were por \"que estemos\". Después de demand that, be.",
    "workplace_usage": {
      "scenario": "Acuerdo de Soporte 24/7",
      "en": "The client demanded that our senior engineering staff be reachable during the migration window.",
      "es": "El cliente exigió que nuestro personal de ingeniería senior estuviera localizable durante la ventana de migración."
    }
  },
  {
    "id": "it2-1-ex2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If I ______ you, I wouldn't use old networking protocols. It exposes us to a security risk.",
    "options": [
      "was",
      "were",
      "am",
      "would be"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"If I ______ you, I wouldn't…\": una hipótesis.\n• Regla: \"si yo fuera tú\" ➔ If I were you.\n• Descartas: was y am no se usan en esta hipótesis; \"would be\" no va después de if.",
    "why_wrong": [
      "Incorrecto: was no se usa en esta hipótesis.",
      "Opción correcta: \"were\" = \"fuera\".",
      "Incorrecto: am no se usa en una hipótesis.",
      "Incorrecto: would no va después de if."
    ],
    "tip_es": "En el examen B2: siempre \"If I WERE you\", nunca \"was\".",
    "ref": null,
    "human_rule": "\"Si yo fuera tú\" ➔ If I were you.",
    "trigger_anchor": "If I ______ you, I wouldn't use… ➔ were",
    "spanglish_trap": "Decir \"If I was you\". En esta hipótesis va were.",
    "workplace_usage": {
      "scenario": "Recomendación entre Ingenieros",
      "en": "If I were you, I would disable Telnet and strictly enforce SSH version 2.",
      "es": "Si yo fuera tú, deshabilitaría Telnet y exigiría estrictamente SSH versión 2."
    }
  },
  {
    "id": "it2-1-ex2-q4",
    "section": "UE",
    "objective": "UE5",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If it ______ me, endpoint licensing would not be included in the project.",
    "options": [
      "were to",
      "was",
      "were up to",
      "is up to"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"If it ______ me, endpoint licensing would not be included\": \"si dependiera de mí\".\n• Regla: If it were up to me.\n• Descartas: \"were to\" necesita un verbo después; was y \"is up to\" no se usan aquí.",
    "why_wrong": [
      "Incorrecto: \"were to\" necesita un verbo después.",
      "Incorrecto: was no se usa en esta hipótesis.",
      "Opción correcta: \"were up to me\" = \"dependiera de mí\".",
      "Incorrecto: \"is up to\" no encaja con would."
    ],
    "tip_es": "Memoriza la locución de English for IT 2: \"If it WERE UP TO me\" (\"Si dependiera de mí\").",
    "ref": null,
    "human_rule": "\"Si dependiera de mí\" ➔ If it were up to me.",
    "trigger_anchor": "If it ______ me, licensing would not be included ➔ were up to",
    "spanglish_trap": "Decir \"if it was up to me\". En la hipótesis va were.",
    "workplace_usage": {
      "scenario": "Debate de Presupuesto de Software",
      "en": "If it were up to me, we would allocate that budget to automated testing tools instead.",
      "es": "Si dependiera de mí, asignaríamos ese presupuesto a herramientas de pruebas automatizadas."
    }
  },
  {
    "id": "it2-1-ex2-q5",
    "section": "UE",
    "objective": "UE2",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "I am going to suggest that she ______ a temporary solution.",
    "options": [
      "to implement",
      "implemented",
      "implements",
      "implement"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"I am going to suggest that she…\": sugerencia + that.\n• Regla: suggest + that + verbo sin -s (implement).\n• Descartas: \"to implement\" lleva to; implemented es pasado; implements lleva -s.",
    "why_wrong": [
      "Incorrecto: después de that no va \"to\".",
      "Incorrecto: implemented es pasado.",
      "Incorrecto: implements lleva -s que aquí no va.",
      "Opción correcta: \"implement\" = \"implemente\"."
    ],
    "tip_es": "Tras \"suggest that she\": el verbo va desnudo sin \"-s\" (\"suggest that she IMPLEMENT\").",
    "ref": null,
    "human_rule": "suggest + that + verbo sin -s.",
    "trigger_anchor": "I will suggest that she ______ a solution ➔ implement",
    "spanglish_trap": "Poner -s porque she es singular. Después de suggest that, el verbo va tal cual.",
    "workplace_usage": {
      "scenario": "Propuesta de Workaround en Jira",
      "en": "I am going to suggest that she implement a rate-limiting workaround until the vendor releases a patch.",
      "es": "Voy a sugerir que ella implemente una solución temporal de limitación de tasa hasta que el proveedor lance un parche."
    }
  },
  {
    "id": "it2-1-ex2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "He ______ to implement a temporary solution by tomorrow morning.",
    "options": [
      "needs",
      "needing",
      "need",
      "is needing"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"He ______ to implement…\": no hay verbo de petición + that.\n• Regla: sujeto singular + needs to + verbo (no es subjuntivo).\n• Descartas: needing e \"is needing\" no se usan así; need no lleva -s.",
    "why_wrong": [
      "Opción correcta: \"He needs to implement\" = \"necesita implementar\".",
      "Incorrecto: needing no es una forma conjugada.",
      "Incorrecto: need no lleva la -s que pide \"He\".",
      "Incorrecto: \"is needing\" no se usa con este sentido."
    ],
    "tip_es": "¡Cuidado con la sobre-corrección! Si NO hay \"suggest/demand that\", el presente normal de \"He\" SÍ lleva \"-s\" (\"He needs\").",
    "ref": null,
    "human_rule": "Sin \"that\", el verbo se conjuga normal: he needs to…",
    "trigger_anchor": "He ______ to implement a solution (sin that) ➔ needs",
    "spanglish_trap": "Aplicar la regla del subjuntivo donde no hay that. Sin that, el verbo lleva -s.",
    "workplace_usage": {
      "scenario": "Asignación de Tarea en Sprint",
      "en": "He needs to implement the authentication middleware before QA begins testing.",
      "es": "Él necesita implementar el middleware de autenticación antes de que QA comience las pruebas."
    }
  }
];
