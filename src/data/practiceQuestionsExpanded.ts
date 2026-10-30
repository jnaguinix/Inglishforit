import { Question } from '../types';

export const EXPANDED_PRACTICE_QUESTIONS: Question[] = [
  {
    "id": "prac-g02-07",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The database replica, ______ write operations are strictly blocked by the orchestration policy, handles read-only queries for reporting.",
    "options": [
      "on which",
      "that",
      "where",
      "whose"
    ],
    "answer": 0,
    "why_correct": "• Pista: hay una coma antes del hueco y las operaciones están bloqueadas \"en\" la réplica (\"en la cual\").\n• Regla: en textos formales, preposición + which: on which, in which, by which.\n• Descartas: that no va después de coma; where es más informal con \"operations on…\"; whose diría \"cuyas operaciones\".",
    "why_wrong": [
      "Opción correcta: on which = \"en la cual\", forma formal después de coma.",
      "Incorrecto: that no va después de una coma.",
      "Incorrecto: where es más informal en un texto técnico y no encaja bien con \"operations on…\".",
      "Incorrecto: whose diría \"cuyas operaciones\"; la frase busca la idea de \"en la cual\"."
    ],
    "tip_es": "En especificaciones técnicas formales, la preposición antecede a \"which\" tras coma: \"on which\", \"by which\", \"through which\".",
    "human_rule": "Formal: coma + preposición + which (on which, in which, through which).",
    "trigger_anchor": "replica, ______ write operations are blocked (en la cual) ➔ on which",
    "spanglish_trap": "Olvidar la preposición. Si en español dirías \"en la cual\", en inglés va completo: \"on which\" o \"in which\".",
    "ref": null
  },
  {
    "id": "prac-g02-08",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Engineers ______ laptops contain unencrypted customer personal data will have their VPN credentials suspended immediately.",
    "options": [
      "who's",
      "whose",
      "which",
      "that their"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"laptops\", que pertenece a los ingenieros (\"cuyas laptops\").\n• Regla: \"cuyo / cuyas\" ➔ whose.\n• Descartas: who's es \"who is\"; which no se usa con personas; \"that their\" copia el español (\"que sus\").",
    "why_wrong": [
      "Incorrecto: who's significa \"who is\" o \"who has\"; es la trampa de siempre porque suena igual que whose.",
      "Opción correcta: whose une a los ingenieros con sus laptops (\"cuyas laptops\").",
      "Incorrecto: which no se usa con personas.",
      "Incorrecto: \"that their\" copia el español (\"que sus laptops\"). En inglés whose ya incluye el \"sus\"."
    ],
    "tip_es": "Posesión entre personas y equipos: \"Users whose accounts...\", \"Engineers whose laptops...\".",
    "human_rule": "\"Ingenieros cuyas laptops…\" ➔ Engineers whose laptops…",
    "trigger_anchor": "Engineers ______ laptops (cuyas laptops) ➔ whose",
    "spanglish_trap": "Traducir \"que sus laptops\" como \"that their laptops\". En inglés whose ya contiene el \"sus\".",
    "ref": null
  },
  {
    "id": "prac-g03-07",
    "section": "UE",
    "objective": "UE3",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "During the stress test, the virtual machine acted as though it ______ isolated from the primary VPC gateway.",
    "options": [
      "has been",
      "is",
      "were",
      "will be"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"acted as though it ______ isolated\": la VM no estaba aislada.\n• Regla: as though + irreal ➔ were.\n• Descartas: \"has been\", is y \"will be\" hablan de algo real o futuro.",
    "why_wrong": [
      "Incorrecto: \"has been\" habla de algo real.",
      "Incorrecto: is habla de algo real.",
      "Opción correcta: \"as though it were isolated\" = \"como si estuviera aislada\".",
      "Incorrecto: \"will be\" habla del futuro."
    ],
    "tip_es": "Tras \"as if\" / \"as though\" que describa un comportamiento falso o anómalo, utiliza Past Simple o \"were\": \"as though it were\".",
    "human_rule": "as though it were… (irreal).",
    "trigger_anchor": "acted as though it ______ isolated from the gateway ➔ were",
    "spanglish_trap": "Decir \"as though it was\". Con lo irreal, were.",
    "ref": null
  },
  {
    "id": "prac-g03-08",
    "section": "UE",
    "objective": "UE4",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The unauthorized script executes commands as if it ______ superuser privileges, despite being launched from an unprivileged shell.",
    "options": [
      "will possess",
      "possesses",
      "is possessing",
      "possessed"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"executes commands as if it ______ superuser privileges, despite being launched from an unprivileged shell\": el script no los tiene.\n• Regla: como si tuviera ➔ as if + pasado (possessed).\n• Descartas: \"will possess\", possesses e \"is possessing\" hablan de algo real.",
    "why_wrong": [
      "Incorrecto: \"will possess\" es futuro.",
      "Incorrecto: possesses habla de algo real.",
      "Incorrecto: \"is possessing\" habla de algo real.",
      "Opción correcta: \"as if it possessed\" = \"como si poseyera\"."
    ],
    "tip_es": "Comportamiento irreal o fraudulento: \"as if + Past Simple\" (actúa como si tuviera, aunque no los tenga).",
    "human_rule": "as if + irreal en presente ➔ pasado simple.",
    "trigger_anchor": "executes commands as if it ______ superuser privileges ➔ possessed",
    "spanglish_trap": "Poner possesses porque el script actúa ahora. Lo irreal va en pasado.",
    "ref": null
  },
  {
    "id": "prac-g04-07",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Although the dashboard showed zero active connections, the access log ______ record several thousand incoming POST requests at midnight.",
    "options": [
      "did",
      "does",
      "do",
      "was"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Although the dashboard showed zero…\": se contradice un dato, y ya pasó (\"at midnight\").\n• Regla: \"sí registró\" ➔ did + verbo base.\n• Descartas: does es presente; do no concuerda con singular; was no forma el énfasis.",
    "why_wrong": [
      "Opción correcta: \"did record\" = \"sí registró\".",
      "Incorrecto: does es presente.",
      "Incorrecto: do no concuerda con \"log\" (singular).",
      "Incorrecto: was no forma el énfasis con un verbo base."
    ],
    "tip_es": "Énfasis en pasado: [did + verbo en infinitivo sin to]: \"the log did record...\".",
    "human_rule": "\"Sí lo hizo\" (pasado) ➔ did + verbo base.",
    "trigger_anchor": "Although the dashboard showed zero…, the log ______ record… at midnight ➔ did",
    "spanglish_trap": "Poner does por el sujeto singular. Mira el tiempo: pasado ➔ did.",
    "ref": null
  },
  {
    "id": "prac-g04-08",
    "section": "UE",
    "objective": "UE5",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The product lead questioned our progress, but our team ______ meet every single delivery milestone specified in the sprint agreement.",
    "options": [
      "does",
      "did",
      "has",
      "doing"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"The lead questioned our progress, but our team…\": se contradice una duda sobre algo que ya pasó.\n• Regla: \"sí cumplió\" ➔ did + verbo base.\n• Descartas: does es presente; has y doing no forman el énfasis.",
    "why_wrong": [
      "Incorrecto: does es presente.",
      "Opción correcta: \"did meet\" = \"sí cumplió\".",
      "Incorrecto: has no forma el énfasis con un verbo base.",
      "Incorrecto: doing no es una forma conjugada."
    ],
    "tip_es": "Reafirmar un hecho cuestionado en un postmortem: \"we did meet the milestone\".",
    "human_rule": "\"Sí lo hizo\" (pasado) ➔ did + verbo base.",
    "trigger_anchor": "…questioned our progress, but our team ______ meet every milestone ➔ did",
    "spanglish_trap": "Elegir has porque el resultado continúa. Para el énfasis en pasado, did.",
    "ref": null
  },
  {
    "id": "prac-g05-07",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "All cloud storage buckets must strictly conform ______ the European Union General Data Protection Regulation requirements.",
    "options": [
      "at",
      "with",
      "to",
      "for"
    ],
    "answer": 2,
    "why_correct": "• Pista: antes del hueco está \"conform\".\n• Regla: ajustarse a ➔ conform TO.\n• Descartas: at, with y for no van con conform.",
    "why_wrong": [
      "Incorrecto: con conform no va \"at\".",
      "Incorrecto: con conform no va \"with\" (con comply sí).",
      "Opción correcta: \"conform to\" = \"ajustarse a\".",
      "Incorrecto: con conform no va \"for\"."
    ],
    "tip_es": "Doble regla B2 de cumplimiento: \"COMPLY WITH\", pero \"CONFORM TO\" y \"ADHERE TO\".",
    "human_rule": "\"Ajustarse a\" ➔ conform TO.",
    "trigger_anchor": "must strictly conform ______ the GDPR requirements ➔ to",
    "spanglish_trap": "Confundir con comply with. Conform va con TO.",
    "ref": null
  },
  {
    "id": "prac-g05-08",
    "section": "UE",
    "objective": "UE3",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The chief security officer attributed the security breach ______ an unpatched vulnerability in the legacy payment gateway.",
    "options": [
      "by",
      "with",
      "for",
      "to"
    ],
    "answer": 3,
    "why_correct": "• Pista: antes del hueco está \"attributed\" (atribuir).\n• Regla: atribuir a ➔ attribute TO.\n• Descartas: by, with y for no van con attribute.",
    "why_wrong": [
      "Incorrecto: \"attributed by\" diría quién lo atribuyó, no a qué.",
      "Incorrecto: con attribute no va \"with\".",
      "Incorrecto: con attribute no va \"for\".",
      "Opción correcta: \"attributed to\" = \"atribuyó a\"."
    ],
    "tip_es": "Análisis de incidentes: \"attribute the outage TO a misconfiguration\".",
    "human_rule": "\"Atribuir a\" ➔ attribute TO.",
    "trigger_anchor": "attributed the breach ______ an unpatched vulnerability ➔ to",
    "spanglish_trap": "Poner by por \"atribuido por\". Con attribute va TO.",
    "ref": null
  },
  {
    "id": "prac-g06-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the firewall rules were correctly configured, incoming HTTPS packets were silently dropped by the perimeter router.",
    "options": [
      "Although",
      "Despite",
      "In spite of",
      "However"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco viene una frase completa (\"the firewall rules were configured\").\n• Regla: \"aunque\" + frase completa ➔ Although.\n• Descartas: Despite e In spite of van con una cosa o -ing; However va entre frases.",
    "why_wrong": [
      "Opción correcta: \"Although the rules were configured\" = \"aunque las reglas estaban configuradas\".",
      "Incorrecto: Despite va con una cosa o con -ing, no con una frase completa.",
      "Incorrecto: In spite of va con una cosa o con -ing, no con una frase completa.",
      "Incorrecto: However es un conector entre dos frases, no abre una cláusula."
    ],
    "tip_es": "Regla de oro B2: [ALTHOUGH + Sujeto + Verbo], pero [DESPITE / IN SPITE OF + Sustantivo o -ing].",
    "human_rule": "\"Aunque\" + quién + qué hizo ➔ Although / Even though.",
    "trigger_anchor": "______ the rules were correctly configured (frase completa) ➔ Although",
    "spanglish_trap": "Elegir Despite por \"a pesar de\". Con una frase completa, Although.",
    "ref": null,
    "trigger_scan": "Detonador Visual (5 seg): Espacio inicial ______ + [Sujeto: \"the firewall rules\"] + [Verbo conjugado: \"were configured\"] -> Conjunción concesiva subordinante [ALTHOUGH + Cláusula con verbo]."
  },
  {
    "id": "prac-g06-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ spending three consecutive sprints refactoring the codebase, the dev team observed negligible latency reduction.",
    "options": [
      "Although",
      "Despite",
      "Even",
      "Whereas"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"spending\", un verbo con -ing.\n• Regla: \"a pesar de\" + -ing ➔ Despite.\n• Descartas: Although y Whereas necesitan una frase completa; Even no se usa solo.",
    "why_wrong": [
      "Incorrecto: Although necesita una frase completa.",
      "Opción correcta: \"Despite spending three sprints\" = \"a pesar de pasar tres sprints\".",
      "Incorrecto: Even no se usa solo así.",
      "Incorrecto: Whereas contrasta dos ideas y necesita una frase completa."
    ],
    "tip_es": "Si tras el conector viene directamente un verbo en -ing, elige \"Despite\" o \"In spite of\".",
    "human_rule": "\"A pesar de\" + -ing ➔ Despite.",
    "trigger_anchor": "______ spending three sprints refactoring (-ing) ➔ Despite",
    "spanglish_trap": "Elegir Although. Después de un verbo con -ing, Despite.",
    "ref": null,
    "trigger_scan": "Detonador Visual (5 seg): Espacio inicial ______ + [Gerundio en -ing: \"spending three consecutive sprints...\"] -> Preposición de contraste [DESPITE / IN SPITE OF + -ing]."
  },
  {
    "id": "prac-g06-03",
    "section": "UE",
    "objective": "UE5",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ relational databases enforce strict transactional ACID properties, NoSQL engines prioritize horizontal partition tolerance.",
    "options": [
      "Unless",
      "Despite",
      "Whereas",
      "In spite"
    ],
    "answer": 2,
    "why_correct": "• Pista: se comparan dos cosas distintas (relacionales ➔ NoSQL).\n• Regla: \"mientras que\" ➔ Whereas.\n• Descartas: Unless es \"a menos que\"; Despite y \"In spite\" no comparan.",
    "why_wrong": [
      "Incorrecto: Unless significa \"a menos que\".",
      "Incorrecto: Despite significa \"a pesar de\" y va con una cosa o -ing.",
      "Opción correcta: \"Whereas… NoSQL…\" = \"mientras que… NoSQL…\".",
      "Incorrecto: \"In spite\" necesita \"of\" y no compara."
    ],
    "tip_es": "Para contrastar dos tecnologías distintas al inicio de oración, usa \"Whereas\" o \"While\".",
    "human_rule": "Comparar dos cosas distintas ➔ Whereas / While.",
    "trigger_anchor": "______ relational databases enforce ACID, NoSQL… (contraste) ➔ Whereas",
    "spanglish_trap": "Usar Despite para contrastar. Para comparar dos cosas, Whereas.",
    "ref": null,
    "trigger_scan": "Detonador Visual (5 seg): Espacio inicial ______ + [Tecnología A: \"relational databases enforce...\"] + coma + [Tecnología B: \"NoSQL engines prioritize...\"] -> Contraste balanceado: \"Whereas\"."
  },
  {
    "id": "prac-g06-04",
    "section": "UE",
    "objective": "UE4",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the system administrator reboots the host machine into single-user mode, the corrupted filesystem cannot be repaired.",
    "options": [
      "Whereas",
      "Although",
      "Despite",
      "Unless"
    ],
    "answer": 3,
    "why_correct": "• Pista: la reparación solo es posible si el administrador hace algo (\"reboots… in single-user mode\").\n• Regla: \"a menos que\" ➔ Unless.\n• Descartas: Whereas, Although y Despite no marcan una condición.",
    "why_wrong": [
      "Incorrecto: Whereas compara dos cosas.",
      "Incorrecto: Although marca un contraste, no una condición.",
      "Incorrecto: Despite significa \"a pesar de\".",
      "Opción correcta: \"Unless… reboots\" = \"a menos que reinicie\"."
    ],
    "tip_es": "\"Unless\" = \"A menos que\" / \"Excepto si\". Marca la condición indispensable en runbooks.",
    "human_rule": "\"A menos que\" ➔ Unless + presente.",
    "trigger_anchor": "______ the administrator reboots…, the filesystem cannot be repaired ➔ Unless",
    "spanglish_trap": "Elegir Although por \"aunque\". Aquí es una condición: Unless.",
    "ref": null
  },
  {
    "id": "prac-g06-05",
    "section": "UE",
    "objective": "UE3",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ of repeated warnings from the monitoring daemon, the operations team failed to expand the root storage volume.",
    "options": [
      "In spite",
      "Despite",
      "Although",
      "Even though"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco viene \"of repeated warnings\", y \"of\" ya está en la frase.\n• Regla: \"a pesar de\" ➔ In spite OF + cosa.\n• Descartas: Despite no lleva \"of\"; Although y Even though necesitan una frase completa.",
    "why_wrong": [
      "Opción correcta: \"In spite of repeated warnings\" = \"a pesar de los avisos repetidos\".",
      "Incorrecto: Despite no lleva \"of\" (\"Despite of\" no existe).",
      "Incorrecto: Although necesita una frase completa.",
      "Incorrecto: Even though necesita una frase completa."
    ],
    "tip_es": "¡Cuidado con la trampa!: es \"IN SPITE OF\", pero \"DESPITE\" sin preposición.",
    "human_rule": "In spite OF = Despite (sin of).",
    "trigger_anchor": "______ of repeated warnings (ya hay of) ➔ In spite",
    "spanglish_trap": "Poner Despite of. Si hay \"of\", la forma es In spite of; con Despite no hay of.",
    "ref": null
  },
  {
    "id": "prac-g06-06",
    "section": "UE",
    "objective": "UE2",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ synchronous replication minimizes data loss, it introduces tangible write latency across wide-area networks.",
    "options": [
      "Despite",
      "While",
      "However",
      "In spite"
    ],
    "answer": 1,
    "why_correct": "• Pista: se contrasta una ventaja con un inconveniente: reduce pérdidas, pero añade latencia.\n• Regla: \"si bien / mientras\" + frase ➔ While.\n• Descartas: Despite e In spite no abren una frase completa; However va entre frases.",
    "why_wrong": [
      "Incorrecto: Despite va con una cosa o -ing.",
      "Opción correcta: \"While synchronous replication minimizes…\" = \"si bien la replicación minimiza…\".",
      "Incorrecto: However es un conector entre dos frases.",
      "Incorrecto: \"In spite\" necesita \"of\" y una cosa o -ing."
    ],
    "tip_es": "\"While\" al principio equivale formalmente a \"Although\" en análisis de arquitectura.",
    "human_rule": "\"Si bien…, …\" ➔ While + frase, frase.",
    "trigger_anchor": "______ replication minimizes data loss, it introduces latency ➔ While",
    "spanglish_trap": "Elegir Despite por el contraste. Con una frase completa, While o Although.",
    "ref": null
  },
  {
    "id": "prac-g06-07",
    "section": "UE",
    "objective": "UE4",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the severity of the zero-day exploit, the security vendor withheld the patch for forty-eight hours.",
    "options": [
      "Even though",
      "Although",
      "Despite",
      "Whereas"
    ],
    "answer": 2,
    "why_correct": "• Pista: después del hueco viene \"the severity of the zero-day exploit\", una cosa.\n• Regla: \"a pesar de\" + una cosa ➔ Despite.\n• Descartas: Even though, Although y Whereas necesitan una frase completa.",
    "why_wrong": [
      "Incorrecto: Even though necesita una frase completa.",
      "Incorrecto: Although necesita una frase completa.",
      "Opción correcta: \"Despite the severity\" = \"a pesar de la gravedad\".",
      "Incorrecto: Whereas compara dos cosas."
    ],
    "tip_es": "Si lo que sigue es un sustantivo (\"the severity\", \"the failure\"), la respuesta es \"Despite\".",
    "human_rule": "\"A pesar de\" + una cosa ➔ Despite.",
    "trigger_anchor": "______ the severity of the exploit (una cosa) ➔ Despite",
    "spanglish_trap": "Elegir Although. Después de una cosa sola, Despite.",
    "ref": null
  },
  {
    "id": "prac-g06-08",
    "section": "UE",
    "objective": "UE1",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the backup verification script finishes without errors, you may safely proceed with the database migration.",
    "options": [
      "Unless",
      "Despite",
      "Although",
      "Once"
    ],
    "answer": 3,
    "why_correct": "• Pista: la segunda parte (\"you may safely proceed\") ocurre cuando termina el script.\n• Regla: \"una vez que\" ➔ Once + presente.\n• Descartas: Unless, Despite y Although no marcan \"una vez que\".",
    "why_wrong": [
      "Incorrecto: Unless significa \"a menos que\".",
      "Incorrecto: Despite significa \"a pesar de\".",
      "Incorrecto: Although marca un contraste.",
      "Opción correcta: \"Once the script finishes\" = \"una vez que el script termine\"."
    ],
    "tip_es": "En runbooks de migración: \"Once [prerrequisito], you may proceed...\".",
    "human_rule": "\"Una vez que…\" ➔ Once + presente.",
    "trigger_anchor": "______ the script finishes…, you may proceed ➔ Once",
    "spanglish_trap": "Elegir Unless por la condición. Aquí es un momento: Once.",
    "ref": null
  },
  {
    "id": "prac-g07-07",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Not only ______ the automated test suite, but it also intercepted three regression bugs before reaching production.",
    "options": [
      "did the pipeline run",
      "the pipeline ran",
      "ran the pipeline",
      "the pipeline did run"
    ],
    "answer": 0,
    "why_correct": "• Pista: Not only al inicio y \"but it also…\" después.\n• Regla: Not only + did + sujeto + verbo base.\n• Descartas: B, C y D no ponen did antes de quien actúa.",
    "why_wrong": [
      "Opción correcta: \"did the pipeline run\" = \"no solo ejecutó\".",
      "Incorrecto: \"the pipeline ran\" no adelanta ningún verbo pequeño.",
      "Incorrecto: \"ran the pipeline\" no usa did.",
      "Incorrecto: \"the pipeline did run\" deja a quien actúa antes de did."
    ],
    "tip_es": "Fórmula B2 de \"Not only\": [Not only + AUXILIAR + Sujeto + Verbo Base... but also...].",
    "human_rule": "Not only + did + sujeto + verbo base.",
    "trigger_anchor": "Not only ______ the suite, but it also… ➔ did the pipeline run",
    "spanglish_trap": "Escribir \"Not only the pipeline ran\", con quien actúa primero. Tras Not only, did va antes.",
    "ref": null
  },
  {
    "id": "prac-g07-08",
    "section": "UE",
    "objective": "UE5",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "On no account ______ production secrets and private SSL keys be committed to public version control repositories.",
    "options": [
      "must",
      "should",
      "they should",
      "shall"
    ],
    "answer": 1,
    "why_correct": "• Pista: empieza con \"On no account\" (bajo ningún concepto) y el sujeto (\"production secrets\") ya está después.\n• Regla: expresión negativa + should + sujeto + be + 3.ª forma.\n• Descartas: C añade un sujeto de más (\"they\"); A y D pueden sonar bien, pero este ejercicio busca should.",
    "why_wrong": [
      "Incorrecto: must también puede ir tras \"On no account\", pero este ejercicio busca should.",
      "Opción correcta: should va justo después de \"On no account\".",
      "Incorrecto: \"they\" sobra; el sujeto ya está en la frase.",
      "Incorrecto: shall es muy formal y este ejercicio busca should."
    ],
    "tip_es": "Prohibición absoluta en políticas de seguridad: \"On no account should [sujeto] be...\".",
    "human_rule": "On no account + should + sujeto + be + 3.ª forma.",
    "trigger_anchor": "On no account ______ secrets be committed ➔ should",
    "spanglish_trap": "Añadir un sujeto extra (\"they\"). Si el sujeto ya está después del hueco, solo falta el verbo pequeño.",
    "ref": null
  },
  {
    "id": "prac-g08-01",
    "section": "UE",
    "objective": "UE5",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Before initiating the database schema migration, the DevOps engineer ______ verify that a snapshot has been taken.",
    "options": [
      "would better",
      "had better to",
      "had better",
      "should to"
    ],
    "answer": 2,
    "why_correct": "• Pista: antes de una migración hay un riesgo si no se hace; después va el verbo sin to.\n• Regla: had better + verbo sin to.\n• Descartas: \"would better\" no existe; \"had better to\" y \"should to\" llevan to de más.",
    "why_wrong": [
      "Incorrecto: \"would better\" no es una forma que exista.",
      "Incorrecto: después de had better no va \"to\".",
      "Opción correcta: \"had better verify\" = \"más vale que verifique\".",
      "Incorrecto: después de should no va \"to\"."
    ],
    "tip_es": "\"had better + VERBO BASE\" (sin \"to\"): advertencia de consecuencias críticas en despliegues.",
    "human_rule": "Advertencia + verbo sin to ➔ had better.",
    "trigger_anchor": "engineer ______ verify (más vale que) ➔ had better",
    "spanglish_trap": "Escribir \"had better to\". Nunca lleva to.",
    "ref": null,
    "trigger_scan": "Detonador Visual (5 seg): \"Before initiating database schema migration (riesgo crítico)\" + [Verbo en forma base: \"verify\"] -> Advertencia con consecuencia desastrosa [HAD BETTER + Bare Infinitive]."
  },
  {
    "id": "prac-g08-02",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "To avoid vendor lock-in, your engineering department ______ consider architecting services around open container standards.",
    "options": [
      "must to",
      "ought",
      "had better to",
      "ought to"
    ],
    "answer": 3,
    "why_correct": "• Pista: es una buena práctica, no una urgencia, y después de consider va -ing.\n• Regla: \"debería\" ➔ ought TO + verbo.\n• Descartas: \"must to\" lleva to de más; ought sin to queda incompleto; \"had better to\" lleva to de más y es más urgente.",
    "why_wrong": [
      "Incorrecto: después de must no va \"to\".",
      "Incorrecto: ought necesita \"to\".",
      "Incorrecto: had better no lleva \"to\", y expresa urgencia.",
      "Opción correcta: \"ought to consider\" = \"debería considerar\"."
    ],
    "tip_es": "Regla simétrica: \"SHOULD consider\" (sin to), pero \"OUGHT TO consider\" (con to).",
    "human_rule": "Buena práctica ➔ ought to / should + verbo.",
    "trigger_anchor": "department ______ consider (debería) ➔ ought to",
    "spanglish_trap": "Olvidar el to de ought. Es ought TO, a diferencia de should.",
    "ref": null,
    "trigger_scan": "Detonador Visual (5 seg): Consejo arquitectónico formal ante vendor lock-in + [Verbo base: \"consider\"] -> Semi-modal con partícula obligatoria [OUGHT TO + Verbo Base]."
  },
  {
    "id": "prac-g08-03",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "When dealing with intermittent latency spikes, you ______ check the network interface card buffer settings.",
    "options": [
      "might want to",
      "might to",
      "would rather to",
      "had better consider to"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una sugerencia amable, no una orden.\n• Regla: \"quizás convenga…\" ➔ might want TO + verbo.\n• Descartas: \"might to\" no existe; \"would rather to\" y \"had better consider to\" llevan to de más.",
    "why_wrong": [
      "Opción correcta: \"might want to check\" = \"quizás convenga revisar\".",
      "Incorrecto: \"might to\" no existe; falta \"want\".",
      "Incorrecto: después de would rather no va \"to\".",
      "Incorrecto: después de had better no va \"to\"."
    ],
    "tip_es": "En tickets de soporte y consultoría a clientes: usa \"You might want to check...\" para sonar diplomático.",
    "human_rule": "Sugerencia amable ➔ might want to + verbo.",
    "trigger_anchor": "you ______ check (quizás convendría) ➔ might want to",
    "spanglish_trap": "Decir \"might to\". Es might WANT to.",
    "ref": null,
    "trigger_scan": "Detonador Visual (5 seg): Sugerencia suave y diplomática a un cliente/par sobre latencia -> [MIGHT WANT TO + Verbo Base]."
  },
  {
    "id": "prac-g08-04",
    "section": "UE",
    "objective": "UE4",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The operations team ______ not reboot the core routing instance while active financial transactions are in flight.",
    "options": [
      "had better to",
      "had better",
      "ought",
      "would better"
    ],
    "answer": 1,
    "why_correct": "• Pista: hay una advertencia (transacciones en curso) y \"not\" va después del hueco.\n• Regla: \"más vale que no…\" ➔ had better NOT + verbo.\n• Descartas: \"had better to\" y \"would better\" no existen; ought necesita \"to\" y es más suave.",
    "why_wrong": [
      "Incorrecto: después de had better no va \"to\".",
      "Opción correcta: \"had better not reboot\" = \"más vale que no reinicie\".",
      "Incorrecto: ought necesita \"to\" (ought not to reboot).",
      "Incorrecto: \"would better\" no existe."
    ],
    "tip_es": "Negativa de advertencia: \"had better NOT [hacer algo]\". \"Not\" va inmediatamente tras \"better\".",
    "human_rule": "Advertencia negativa ➔ had better not + verbo.",
    "trigger_anchor": "team ______ not reboot (más vale que no) ➔ had better",
    "spanglish_trap": "Poner el not antes de had. Es had better NOT.",
    "ref": null
  },
  {
    "id": "prac-g08-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If you want to maintain high availability during regional outages, you ______ implement active-active multi-region failover.",
    "options": [
      "ought",
      "should to",
      "should",
      "had rather"
    ],
    "answer": 2,
    "why_correct": "• Pista: es un consejo para lograr algo (\"si quieres…\").\n• Regla: \"deberías\" ➔ should + verbo, sin to.\n• Descartas: ought necesita \"to\"; \"should to\" lleva to de más; \"had rather\" es otra estructura.",
    "why_wrong": [
      "Incorrecto: ought necesita \"to\".",
      "Incorrecto: después de should no va \"to\".",
      "Opción correcta: \"should implement\" = \"deberías implementar\".",
      "Incorrecto: \"had rather\" no se usa para dar consejos."
    ],
    "tip_es": "Recomendación directa: \"You should implement...\". Jamás \"should to\".",
    "human_rule": "Consejo ➔ should + verbo sin to.",
    "trigger_anchor": "If you want…, you ______ implement (deberías) ➔ should",
    "spanglish_trap": "Poner to después de should, por analogía con ought to.",
    "ref": null
  },
  {
    "id": "prac-g08-06",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In hindsight, we ______ deployed the emergency patch directly to production without testing it in staging first.",
    "options": [
      "had better not",
      "must not have",
      "ought to not have",
      "should not have"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"In hindsight\" = mirando atrás; hablan de algo que se hizo y salió mal.\n• Regla: \"no deberíamos haberlo hecho\" ➔ should not have + 3.ª forma.\n• Descartas: had better habla del futuro; \"must not have\" es una deducción; \"ought to not have\" tiene el orden roto.",
    "why_wrong": [
      "Incorrecto: had better habla del presente o del futuro, no del pasado.",
      "Incorrecto: \"must not have\" sería una deducción (\"seguro que no lo desplegamos\"), no un reproche.",
      "Incorrecto: el orden correcto es \"ought not to have\".",
      "Opción correcta: \"should not have deployed\" = \"no debimos desplegar\"."
    ],
    "tip_es": "Postmortem y lecciones aprendidas: \"We should not have deployed...\".",
    "human_rule": "Reproche por algo ya hecho ➔ should (not) have + 3.ª forma.",
    "trigger_anchor": "In hindsight, we ______ deployed (mirando atrás) ➔ should not have",
    "spanglish_trap": "Usar must not have pensando en \"no debimos\". Must have es deducción; para el reproche va should have.",
    "ref": null
  },
  {
    "id": "prac-g08-07",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "You ______ check the firewall egress rules; that might explain why outbound API webhooks are failing.",
    "options": [
      "might as well",
      "might as well to",
      "had better to",
      "ought"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una sugerencia con poco riesgo: \"ya que estás, revisa\".\n• Regla: \"bien podrías…\" ➔ might as well + verbo sin to.\n• Descartas: \"might as well to\" y \"had better to\" llevan to de más; ought necesita \"to\".",
    "why_wrong": [
      "Opción correcta: \"might as well check\" = \"bien podrías revisar\".",
      "Incorrecto: después de might as well no va \"to\".",
      "Incorrecto: después de had better no va \"to\".",
      "Incorrecto: ought necesita \"to\"."
    ],
    "tip_es": "En resolución de incidencias: \"You might as well check the logs\" (bien podrías revisar los logs).",
    "human_rule": "\"Bien podrías…\" ➔ might as well + verbo.",
    "trigger_anchor": "You ______ check; that might explain… (bien podrías) ➔ might as well",
    "spanglish_trap": "Poner to después de might as well.",
    "ref": null
  },
  {
    "id": "prac-g08-08",
    "section": "UE",
    "objective": "UE5",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Security policy dictates that every employee ______ complete security awareness training every six months.",
    "options": [
      "ought",
      "is to",
      "should to",
      "had better to"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una regla oficial: \"debe completar\".\n• Regla: obligación de política ➔ is to + verbo.\n• Descartas: ought y \"had better to\" no encajan; \"should to\" lleva to de más.",
    "why_wrong": [
      "Incorrecto: ought necesita \"to\", y expresa una recomendación, no una regla.",
      "Opción correcta: \"is to complete\" = \"debe completar\" (regla oficial).",
      "Incorrecto: después de should no va \"to\".",
      "Incorrecto: \"had better to\" lleva to de más y expresa urgencia, no una regla."
    ],
    "tip_es": "En manuales de políticas: \"Every user IS TO report security incidents immediately\".",
    "human_rule": "Regla oficial ➔ is to + verbo.",
    "trigger_anchor": "policy dictates every employee ______ complete ➔ is to",
    "spanglish_trap": "No reconocer is to como obligación. Aquí significa \"debe\".",
    "ref": null
  },
  {
    "id": "prac-g09-07",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "I would be grateful if you ______ verify the DNS MX records for the newly registered customer domain.",
    "options": [
      "will",
      "can",
      "could",
      "shall"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"I would be grateful if you ______ verify…\" es una petición cortés.\n• Regla: I would be grateful if you could + verbo base.\n• Descartas: will, can y shall son más directos o no encajan.",
    "why_wrong": [
      "Incorrecto: will es más directo.",
      "Incorrecto: can es más directo.",
      "Opción correcta: \"if you could verify\" = \"si pudieras verificar\".",
      "Incorrecto: shall no se usa así con you."
    ],
    "tip_es": "Fórmula diplomática con clientes corporativos: \"I would be grateful if you COULD [verbo]...\".",
    "human_rule": "\"Le agradecería que…\" ➔ I would be grateful if you could…",
    "trigger_anchor": "I would be grateful if you ______ verify… ➔ could",
    "spanglish_trap": "Usar will por \"si podrás\". Para pedir con cortesía, could.",
    "ref": null
  },
  {
    "id": "prac-g09-08",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Would you be so kind ______ provide the complete stack trace generated by the crash daemon?",
    "options": [
      "that",
      "to",
      "for",
      "as to"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"Would you be so kind…\" y después viene un verbo.\n• Regla: Would you be so kind AS TO + verbo.\n• Descartas: that, to y for no completan esta expresión.",
    "why_wrong": [
      "Incorrecto: after \"so kind\" no va \"that\".",
      "Incorrecto: la expresión lleva \"as to\", no solo \"to\".",
      "Incorrecto: after \"so kind\" no va \"for\".",
      "Opción correcta: \"so kind as to provide\" = \"tan amable de proporcionar\"."
    ],
    "tip_es": "Memoriza la locución entera: \"Would you be so kind AS TO provide...\".",
    "human_rule": "\"¿Serías tan amable de…?\" ➔ Would you be so kind AS TO + verbo.",
    "trigger_anchor": "Would you be so kind ______ provide… ➔ as to",
    "spanglish_trap": "Poner solo to. La expresión fija es as to.",
    "ref": null
  },
  {
    "id": "prac-g11-01",
    "section": "UE",
    "objective": "UE5",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "This database engine is ______ the most resilient distributed key-value store currently available on the market.",
    "options": [
      "arguably",
      "conceivably",
      "presumably",
      "inevitably"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"the most resilient\" es un superlativo.\n• Regla: afirmación respaldada con argumentos ➔ arguably + superlativo.\n• Descartas: conceivably es \"posible\"; presumably es una suposición; inevitably es \"inevitable\".",
    "why_wrong": [
      "Opción correcta: \"arguably the most resilient\" = \"se puede argumentar que es el más resistente\".",
      "Incorrecto: conceivably significa \"posiblemente\", y no acompaña a un superlativo.",
      "Incorrecto: presumably es una suposición, no un argumento respaldado.",
      "Incorrecto: inevitably significa \"inevitablemente\"."
    ],
    "tip_es": "\"Arguably the best / most resilient\": para defender con argumentos el liderazgo de una tecnología.",
    "human_rule": "Superlativo respaldado con argumentos ➔ arguably the most / best…",
    "trigger_anchor": "is ______ the most resilient (superlativo) ➔ arguably",
    "spanglish_trap": "Leer arguably como \"discutiblemente\" y descartarlo. Significa que hay buenos argumentos a favor.",
    "ref": null,
    "trigger_scan": "Detonador Semántico (5 seg): Posición adverbial antes de superlativo de prestigio: \"______ the most resilient...\" -> Postura cualitativa defendible con argumentos: \"arguably\"."
  },
  {
    "id": "prac-g11-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The sudden network spike was ______ caused by a compromised IoT device executing a distributed amplification attack.",
    "options": [
      "arguably",
      "presumably",
      "inevitably",
      "hardly"
    ],
    "answer": 1,
    "why_correct": "• Pista: se explica la causa de un pico con lo que se supone.\n• Regla: \"es de suponer\" ➔ presumably.\n• Descartas: arguably va con superlativos; inevitably y hardly no encajan.",
    "why_wrong": [
      "Incorrecto: arguably va con superlativos.",
      "Opción correcta: \"presumably caused by\" = \"es de suponer que lo causó\".",
      "Incorrecto: inevitably significa \"inevitablemente\".",
      "Incorrecto: hardly significa \"apenas\"."
    ],
    "tip_es": "En informes preliminares de incidentes: \"The outage was PRESUMABLY caused by...\".",
    "human_rule": "La causa más probable por lo que se sabe ➔ presumably.",
    "trigger_anchor": "The spike was ______ caused by an IoT device ➔ presumably",
    "spanglish_trap": "Elegir inevitably por sonar a causa. Inevitably no habla de suposiciones.",
    "ref": null,
    "trigger_scan": "Detonador Semántico (5 seg): Hipótesis preliminar de causa raíz en informe de incidente: \"The spike was ______ caused by a compromised IoT...\" -> Suposición antes de confirmación forense: \"presumably\"."
  },
  {
    "id": "prac-g11-03",
    "section": "UE",
    "objective": "UE5",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Given enough computing resources and time, an adversary could ______ decrypt an outdated single-DES encrypted payload.",
    "options": [
      "presumptively",
      "arguably",
      "conceivably",
      "decidedly"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Given enough time…, an adversary could ______\": algo posible en teoría.\n• Regla: \"es concebible\" ➔ conceivably.\n• Descartas: \"presumptively\" y \"decidedly\" no encajan; arguably va con superlativos.",
    "why_wrong": [
      "Incorrecto: \"presumptively\" no es el adverbio que se usa aquí.",
      "Incorrecto: arguably va con superlativos.",
      "Opción correcta: \"conceivably decrypt\" = \"podría concebiblemente descifrar\".",
      "Incorrecto: decidedly significa \"claramente\"."
    ],
    "tip_es": "Amenazas potenciales imaginables: \"an attacker could CONCEIVABLY bypass...\".",
    "human_rule": "Posible en teoría ➔ conceivably.",
    "trigger_anchor": "Given enough resources, an adversary could ______ decrypt ➔ conceivably",
    "spanglish_trap": "Elegir presumably por parecerse. Para algo posible en teoría, conceivably.",
    "ref": null
  },
  {
    "id": "prac-g11-04",
    "section": "UE",
    "objective": "UE3",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If thread contention is not addressed in this microservice, application memory consumption will ______ exceed container limits.",
    "options": [
      "arguably",
      "conceivably",
      "scarcely",
      "inevitably"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"If thread contention is not addressed… will ______ exceed\": consecuencia segura.\n• Regla: \"inevitablemente\" ➔ inevitably.\n• Descartas: arguably y conceivably no expresan seguridad; scarcely significa \"apenas\".",
    "why_wrong": [
      "Incorrecto: arguably va con superlativos.",
      "Incorrecto: conceivably expresa posibilidad, no seguridad.",
      "Incorrecto: scarcely significa \"apenas\".",
      "Opción correcta: \"will inevitably exceed\" = \"inevitablemente superará\"."
    ],
    "tip_es": "Fallas técnicas seguras si no se actúa: \"will INEVITABLY lead to a crash\".",
    "human_rule": "Consecuencia segura ➔ inevitably.",
    "trigger_anchor": "If not addressed, memory will ______ exceed limits ➔ inevitably",
    "spanglish_trap": "Elegir conceivably por \"posible\". Si es seguro, inevitably.",
    "ref": null
  },
  {
    "id": "prac-g11-05",
    "section": "UE",
    "objective": "UE1",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The database cluster is ______ scheduled to complete its automated vacuuming process before 04:00 UTC.",
    "options": [
      "tentatively",
      "inevitably",
      "barely",
      "strictly"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"scheduled to complete before 04:00\" es un plan que podría cambiar.\n• Regla: \"provisionalmente\" ➔ tentatively scheduled.\n• Descartas: inevitably, barely y strictly no acompañan a scheduled.",
    "why_wrong": [
      "Opción correcta: \"tentatively scheduled\" = \"programado de forma provisional\".",
      "Incorrecto: inevitably significa \"inevitablemente\".",
      "Incorrecto: barely significa \"apenas\".",
      "Incorrecto: strictly significa \"estrictamente\"."
    ],
    "tip_es": "Horarios provisionales de mantenimiento: \"TENTATIVELY scheduled for...\".",
    "human_rule": "\"Provisionalmente\" ➔ tentatively.",
    "trigger_anchor": "is ______ scheduled to complete before 04:00 ➔ tentatively",
    "spanglish_trap": "Elegir strictly por sonar formal. Para un plan que puede cambiar, tentatively.",
    "ref": null
  },
  {
    "id": "prac-g11-06",
    "section": "UE",
    "objective": "UE3",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The corrupted block in sector 4 is ______ the reason the storage controller refused to mount the file system.",
    "options": [
      "scarcely",
      "almost certainly",
      "hardly",
      "seldom"
    ],
    "answer": 1,
    "why_correct": "• Pista: se da la causa con casi total seguridad.\n• Regla: \"casi con seguridad\" ➔ almost certainly.\n• Descartas: scarcely, hardly y seldom significan \"apenas\" o \"rara vez\".",
    "why_wrong": [
      "Incorrecto: scarcely significa \"apenas\".",
      "Opción correcta: \"almost certainly\" = \"casi con seguridad\".",
      "Incorrecto: hardly significa \"apenas\".",
      "Incorrecto: seldom significa \"rara vez\"."
    ],
    "tip_es": "Causa técnica prácticamente segura: \"is ALMOST CERTAINLY the reason...\".",
    "human_rule": "\"Casi con seguridad\" ➔ almost certainly.",
    "trigger_anchor": "is ______ the reason the controller refused ➔ almost certainly",
    "spanglish_trap": "Confundir hardly con \"casi\". Hardly es \"apenas\"; almost es \"casi\".",
    "ref": null
  },
  {
    "id": "prac-g11-07",
    "section": "UE",
    "objective": "UE5",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Upgrading the legacy core switch is ______ necessary if we intend to support 100 Gigabit uplink speeds.",
    "options": [
      "presumptively",
      "conceivably",
      "strictly",
      "arguably"
    ],
    "answer": 2,
    "why_correct": "• Pista: se habla de una necesidad estricta si quieren 100 Gigabit.\n• Regla: \"estrictamente necesario\" ➔ strictly necessary.\n• Descartas: \"presumptively\" y conceivably no acompañan a necessary; arguably va con superlativos.",
    "why_wrong": [
      "Incorrecto: \"presumptively\" no es la combinación habitual con necessary.",
      "Incorrecto: conceivably significa \"posiblemente\".",
      "Opción correcta: \"strictly necessary\" = \"estrictamente necesario\".",
      "Incorrecto: arguably va con superlativos."
    ],
    "tip_es": "Colocación indispensable de requisitos: \"STRICLY necessary\".",
    "human_rule": "\"Estrictamente necesario\" ➔ strictly necessary.",
    "trigger_anchor": "is ______ necessary if we intend to support 100 Gigabit ➔ strictly",
    "spanglish_trap": "Elegir un adverbio de suposición. Aquí se pide una exigencia.",
    "ref": null
  },
  {
    "id": "prac-g11-08",
    "section": "UE",
    "objective": "UE3",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The staging test was ______ a complete success, despite three minor telemetry warnings in the auxiliary worker.",
    "options": [
      "barely",
      "conceivably",
      "inevitably",
      "by and large"
    ],
    "answer": 3,
    "why_correct": "• Pista: fue un éxito completo, salvo tres avisos menores.\n• Regla: \"en general\" ➔ by and large.\n• Descartas: barely significa \"apenas\"; conceivably e inevitably no encajan.",
    "why_wrong": [
      "Incorrecto: barely significa \"apenas\".",
      "Incorrecto: conceivably significa \"posiblemente\".",
      "Incorrecto: inevitably significa \"inevitablemente\".",
      "Opción correcta: \"by and large\" = \"en general\"."
    ],
    "tip_es": "Evaluación general de un despliegue: \"BY AND LARGE, the migration went smoothly\".",
    "human_rule": "\"En general\" ➔ by and large.",
    "trigger_anchor": "was ______ a complete success, despite three minor warnings ➔ by and large",
    "spanglish_trap": "Traducir \"by and large\" palabra por palabra. Es un modismo: \"en general\".",
    "ref": null
  },
  {
    "id": "prac-g12-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "By the time the European trading market opens tomorrow morning, our engineers ______ the database failover procedures.",
    "options": [
      "will have completed",
      "will complete",
      "have completed",
      "will be completed"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"By the time… opens tomorrow\" fija un momento futuro y pregunta qué ya estará hecho.\n• Regla: \"habrán completado para entonces\" ➔ will have + 3.ª forma.\n• Descartas: will complete dice que lo harán, no que ya estará hecho; have completed es del presente; \"will be completed\" es pasiva.",
    "why_wrong": [
      "Opción correcta: \"will have completed\" = \"habrán completado\".",
      "Incorrecto: will complete dice que lo harán, no que ya estará hecho para entonces.",
      "Incorrecto: have completed no encaja con \"tomorrow\" (futuro).",
      "Incorrecto: \"will be completed\" es pasiva, y aquí los ingenieros son quienes lo hacen."
    ],
    "tip_es": "Fórmula de deadline: \"BY THE TIME [presente] ..., we WILL HAVE [participio]\".",
    "human_rule": "By the time + futuro ➔ will have + 3.ª forma.",
    "trigger_anchor": "By the time the market opens tomorrow ➔ engineers ______ ➔ will have completed",
    "spanglish_trap": "Elegir will complete por parecerse al español. Para \"ya habrán terminado\", will have + 3.ª forma.",
    "ref": null
  },
  {
    "id": "prac-g12-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "When the monitoring daemon alerted the on-call engineer, the memory heap was on the point ______ crashing.",
    "options": [
      "to",
      "of",
      "for",
      "at"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"crashing\", con -ing.\n• Regla: \"a punto de\" ➔ on the point OF + -ing.\n• Descartas: to, for y at no se usan con \"on the point\".",
    "why_wrong": [
      "Incorrecto: con \"on the point\" no va \"to\".",
      "Opción correcta: \"on the point of crashing\" = \"a punto de caerse\".",
      "Incorrecto: con \"on the point\" no va \"for\".",
      "Incorrecto: con \"on the point\" no va \"at\"."
    ],
    "tip_es": "Doble alternativa de inminencia: \"ABOUT TO crash\", pero \"ON THE POINT OF crashing\".",
    "human_rule": "\"A punto de\" ➔ on the point of + -ing.",
    "trigger_anchor": "was on the point ______ crashing (a punto de) ➔ of",
    "spanglish_trap": "Poner to porque el español dice \"a punto de\". En esta estructura va of + -ing.",
    "ref": null
  },
  {
    "id": "prac-g12-03",
    "section": "UE",
    "objective": "UE4",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "By the end of this financial quarter, the enterprise ______ all legacy on-premises servers to cloud containers.",
    "options": [
      "is migrating",
      "migrates",
      "will have migrated",
      "will migrate"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"By the end of this quarter\" fija un momento futuro y pregunta qué ya estará hecho.\n• Regla: \"habrá migrado para entonces\" ➔ will have + 3.ª forma.\n• Descartas: is migrating y migrates son presente; will migrate dice que lo hará, no que ya estará hecho.",
    "why_wrong": [
      "Incorrecto: is migrating es presente.",
      "Incorrecto: migrates es presente simple.",
      "Opción correcta: \"will have migrated\" = \"habrá migrado\".",
      "Incorrecto: will migrate no dice que ya estará hecho para entonces."
    ],
    "tip_es": "\"By the end of [mes/trimestre/año]\" es la señal inequívoca del FUTURE PERFECT: \"will have migrated\".",
    "human_rule": "By the end of… ➔ will have + 3.ª forma.",
    "trigger_anchor": "By the end of this quarter ➔ enterprise ______ all servers ➔ will have migrated",
    "spanglish_trap": "Elegir will migrate. Para \"habrá migrado\", will have + 3.ª forma.",
    "ref": null
  },
  {
    "id": "prac-g12-04",
    "section": "UE",
    "objective": "UE3",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The battery backup unit was on the verge ______ shutting down when the main diesel generator kicked in.",
    "options": [
      "at",
      "to",
      "for",
      "of"
    ],
    "answer": 3,
    "why_correct": "• Pista: después del hueco viene \"shutting down\", con -ing.\n• Regla: \"a punto de\" ➔ on the verge OF + -ing.\n• Descartas: at, to y for no se usan con \"on the verge\".",
    "why_wrong": [
      "Incorrecto: con \"on the verge\" no va \"at\".",
      "Incorrecto: con \"on the verge\" no va \"to\".",
      "Incorrecto: con \"on the verge\" no va \"for\".",
      "Opción correcta: \"on the verge of shutting down\" = \"a punto de apagarse\"."
    ],
    "tip_es": "\"On the verge OF + gerundio\": al borde de apagarse.",
    "human_rule": "\"A punto de\" ➔ on the verge of + -ing.",
    "trigger_anchor": "on the verge ______ shutting down (a punto de) ➔ of",
    "spanglish_trap": "Poner to porque el español dice \"a punto de\". En esta estructura va of + -ing.",
    "ref": null
  },
  {
    "id": "prac-g12-05",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Do not interrupt the indexing process; by midnight it ______ over twenty million transaction records.",
    "options": [
      "will have processed",
      "will process",
      "has processed",
      "is processing"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"by midnight\" fija un momento futuro y dice cuántos registros ya habrá procesado.\n• Regla: \"habrá procesado para entonces\" ➔ will have + 3.ª forma.\n• Descartas: will process dice que lo hará; has processed es del presente; is processing es presente.",
    "why_wrong": [
      "Opción correcta: \"will have processed\" = \"habrá procesado\".",
      "Incorrecto: will process dice que lo hará, no que ya habrá terminado.",
      "Incorrecto: has processed habla del presente.",
      "Incorrecto: is processing es presente."
    ],
    "tip_es": "\"By [hora específica]\" -> \"will have + participio\".",
    "human_rule": "By + hora futura ➔ will have + 3.ª forma.",
    "trigger_anchor": "by midnight it ______ over twenty million records ➔ will have processed",
    "spanglish_trap": "Elegir will process por parecerse a \"procesará\". Con \"para entonces\", will have + 3.ª forma.",
    "ref": null
  },
  {
    "id": "prac-g12-06",
    "section": "UE",
    "objective": "UE3",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "We arrived at the data center just as the automated fire suppression system was ______ trigger.",
    "options": [
      "on the point to",
      "about to",
      "on the verge to",
      "due"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco va el verbo base (\"trigger\"), sin -ing.\n• Regla: \"a punto de\" + verbo base ➔ about to.\n• Descartas: \"on the point to\" y \"on the verge to\" no existen (llevan of + -ing); due no encaja delante de un verbo.",
    "why_wrong": [
      "Incorrecto: la forma es on the point OF + -ing, no \"on the point to\".",
      "Opción correcta: \"about to trigger\" = \"a punto de activarse\".",
      "Incorrecto: la forma es on the verge OF + -ing, no \"on the verge to\".",
      "Incorrecto: due no se usa así delante de un verbo."
    ],
    "tip_es": "Compara: [about TO trigger] vs [on the point OF triggering].",
    "human_rule": "\"A punto de\" + verbo base ➔ about to.",
    "trigger_anchor": "was ______ trigger (verbo base) ➔ about to",
    "spanglish_trap": "Mezclar las estructuras. Con -ing va on the point / verge OF; con el verbo base va about TO.",
    "ref": null
  },
  {
    "id": "prac-g12-07",
    "section": "UE",
    "objective": "UE3",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "How many security patches ______ by the time the auditor begins the compliance review on Friday?",
    "options": [
      "do you apply",
      "will you apply",
      "will you have applied",
      "are you applied"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"by the time the auditor begins\" fija un momento futuro y pregunta qué ya habrán hecho.\n• Regla: pregunta de \"habrá hecho para entonces\" ➔ will you have + 3.ª forma.\n• Descartas: do you apply es presente; will you apply no dice \"para entonces\"; \"are you applied\" no existe.",
    "why_wrong": [
      "Incorrecto: do you apply es presente.",
      "Incorrecto: will you apply pregunta qué harás, no cuántos ya habrás hecho.",
      "Opción correcta: \"will you have applied\" = \"cuántos habrás aplicado\".",
      "Incorrecto: \"are you applied\" no es una forma válida."
    ],
    "tip_es": "Preguntas sobre metas antes de un plazo: \"How many will you have [participio] by the time...?\".",
    "human_rule": "¿Cuántos habrás hecho para…? ➔ will you have + 3.ª forma?",
    "trigger_anchor": "How many patches ______ by the time the auditor begins ➔ will you have applied",
    "spanglish_trap": "Preguntar con will you apply. Para \"habrás aplicado\", will you have applied.",
    "ref": null
  },
  {
    "id": "prac-g12-08",
    "section": "UE",
    "objective": "UE5",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The incident commander was on the point of ______ the emergency disaster recovery protocol when the network stabilized.",
    "options": [
      "to declare",
      "declare",
      "declared",
      "declaring"
    ],
    "answer": 3,
    "why_correct": "• Pista: después de \"on the point of\" va un verbo con -ing.\n• Regla: \"a punto de\" ➔ on the point of + -ing.\n• Descartas: \"to declare\", \"declare\" y \"declared\" no encajan después de \"of\".",
    "why_wrong": [
      "Incorrecto: después de \"of\" no va \"to\".",
      "Incorrecto: después de \"of\" va -ing, no el verbo base.",
      "Incorrecto: después de \"of\" va -ing, no el pasado.",
      "Opción correcta: \"on the point of declaring\" = \"a punto de declarar\"."
    ],
    "tip_es": "Toda preposición exige gerundio: \"on the point of DECLARING\".",
    "human_rule": "on the point of + verbo con -ing.",
    "trigger_anchor": "on the point of ______ the protocol ➔ declaring",
    "spanglish_trap": "Poner el verbo base después de of. Después de una palabra pequeña como of, va -ing.",
    "ref": null
  },
  {
    "id": "prac-g13-07",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Security compliance standards demand that each API token ______ invalidated upon detection of suspicious egress traffic.",
    "options": [
      "be",
      "is",
      "will be",
      "was"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"demand that each API token…\": una exigencia + that.\n• Regla: demand + that + be + 3.ª forma (be invalidated).\n• Descartas: is y was conjugan el verbo; \"will be\" no se usa después de demand that.",
    "why_wrong": [
      "Opción correcta: \"be invalidated\" = \"se invalide\".",
      "Incorrecto: is conjuga el verbo.",
      "Incorrecto: \"will be\" no se usa después de demand that.",
      "Incorrecto: was es pasado."
    ],
    "tip_es": "Tras [demand / require / recommend / mandate THAT]: usa siempre la forma base pura \"BE\".",
    "human_rule": "demand + that + be + 3.ª forma.",
    "trigger_anchor": "demand that each token ______ invalidated ➔ be",
    "spanglish_trap": "Poner will be porque es algo futuro. Después de demand that va be.",
    "ref": null
  },
  {
    "id": "prac-g13-08",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "It is essential that the database administrator ______ root access immediately after the penetration test concludes.",
    "options": [
      "revokes",
      "revoke",
      "will revoke",
      "is revoking"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"it is essential that the database administrator…\": una necesidad + that.\n• Regla: essential + that + verbo sin -s (revoke).\n• Descartas: revokes lleva -s; \"will revoke\" no se usa aquí; \"is revoking\" tampoco.",
    "why_wrong": [
      "Incorrecto: revokes lleva -s que aquí no va.",
      "Opción correcta: \"revoke\" = \"revoque\".",
      "Incorrecto: \"will revoke\" no se usa después de essential that.",
      "Incorrecto: \"is revoking\" no se usa aquí."
    ],
    "tip_es": "En requisitos técnicos (\"It is essential/vital that [he/she/admin]...\"): ¡NUNCA pongas la \"S\" de 3ª persona!",
    "human_rule": "it is essential that + verbo sin -s.",
    "trigger_anchor": "it is essential that the DBA ______ root access ➔ revoke",
    "spanglish_trap": "Poner -s porque el administrador es singular. Después de essential that, el verbo va tal cual.",
    "ref": null
  },
  {
    "id": "prac-g14-07",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Given that the server room is protected by biometrics and CCTV, the intruder ______ possessed valid physical access credentials.",
    "options": [
      "should have",
      "can have",
      "must have",
      "might have to"
    ],
    "answer": 2,
    "why_correct": "• Pista: sin credenciales válidas no habría podido entrar a una sala con biometría y cámaras.\n• Regla: la evidencia lo confirma ➔ must have + 3.ª forma.\n• Descartas: should have es un reproche; \"can have\" no se usa para deducir; \"might have to\" es otra estructura.",
    "why_wrong": [
      "Incorrecto: should have es un reproche.",
      "Incorrecto: \"can have\" no se usa para deducir.",
      "Opción correcta: \"must have possessed\" = \"seguro que tenía\".",
      "Incorrecto: \"might have to\" significa \"quizás tuvo que\", que es otra idea."
    ],
    "tip_es": "Certeza deductiva positiva en el pasado: \"MUST HAVE [participio]\". Jamás uses \"can have\".",
    "human_rule": "La evidencia lo exige ➔ must have + 3.ª forma.",
    "trigger_anchor": "protected by biometrics and CCTV, the intruder ______ possessed ➔ must have",
    "spanglish_trap": "Elegir might have porque suena prudente. Si la evidencia lo exige, must have.",
    "ref": null
  },
  {
    "id": "prac-g14-08",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The telemetry shows all ping packets returned in under two milliseconds, so the latency issue ______ caused by physical cable degradation.",
    "options": [
      "shouldn't have been",
      "must have been",
      "might have been not",
      "can't have been"
    ],
    "answer": 3,
    "why_correct": "• Pista: los pings respondieron en menos de dos milisegundos: el cable no puede ser la causa.\n• Regla: la evidencia lo hace imposible ➔ can't have been + 3.ª forma.\n• Descartas: \"shouldn't have been\" es un reproche; \"must have been\" dice que seguro fue el cable; \"might have been not\" tiene el orden roto.",
    "why_wrong": [
      "Incorrecto: shouldn't have been es un reproche, no una deducción.",
      "Incorrecto: must have been dice que seguro fue el cable.",
      "Incorrecto: la negación va después de might (might not have been).",
      "Opción correcta: \"can't have been caused\" = \"es imposible que lo haya causado\"."
    ],
    "tip_es": "Imposibilidad lógica en el pasado: \"CAN'T HAVE BEEN\" o \"COULDN'T HAVE BEEN\".",
    "human_rule": "La evidencia lo hace imposible ➔ can't have been + 3.ª forma.",
    "trigger_anchor": "pings returned in under two milliseconds ➔ issue ______ caused by cable ➔ can't have been",
    "spanglish_trap": "Elegir must have been porque el cable parece sospechoso. Los datos dicen que no puede ser.",
    "ref": null
  },
  {
    "id": "prac-g19-07",
    "section": "UE",
    "objective": "UE4",
    "topic": "G19",
    "difficulty": 2,
    "pool": "practice",
    "stem": "After the automated integration tests conclude, the script will automatically ______ the ephemeral test environment to save cloud costs.",
    "options": [
      "tear down",
      "tear up",
      "take down",
      "break down"
    ],
    "answer": 0,
    "why_correct": "• Pista: tras las pruebas, el script elimina el entorno temporal para ahorrar costos.\n• Regla: desmontar un entorno ➔ tear down.\n• Descartas: \"tear up\" es romper; \"take down\" también se usa, pero este ejercicio busca \"tear down\"; \"break down\" es averiarse.",
    "why_wrong": [
      "Opción correcta: \"tear down\" = \"desmontar\".",
      "Incorrecto: \"tear up\" significa \"romper\".",
      "Incorrecto: \"take down\" también se usa; este ejercicio busca \"tear down\".",
      "Incorrecto: \"break down\" significa \"averiarse\"."
    ],
    "tip_es": "Ciclo de vida en CI/CD: \"spin up\" (levantar entorno) vs \"tear down\" (desmantelar entorno).",
    "human_rule": "Desmontar un entorno temporal ➔ tear down.",
    "trigger_anchor": "the script will ______ the ephemeral environment ➔ tear down",
    "spanglish_trap": "Elegir break down por \"romper\". Break down es averiarse.",
    "ref": null
  },
  {
    "id": "prac-g19-08",
    "section": "UE",
    "objective": "UE3",
    "topic": "G19",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The engineering team decided to ______ the legacy monolith API in favor of microservices over the next six months.",
    "options": [
      "phase in",
      "phase out",
      "roll back",
      "rule out"
    ],
    "answer": 1,
    "why_correct": "• Pista: el monolito se reemplaza \"over the next six months\": poco a poco.\n• Regla: retirar poco a poco ➔ phase out.\n• Descartas: \"phase in\" es introducir poco a poco; \"roll back\" es volver atrás; \"rule out\" es descartar una posibilidad.",
    "why_wrong": [
      "Incorrecto: \"phase in\" significa \"introducir poco a poco\".",
      "Opción correcta: \"phase out\" = \"retirar poco a poco\".",
      "Incorrecto: \"roll back\" significa \"volver a la versión anterior\".",
      "Incorrecto: \"rule out\" significa \"descartar una posibilidad\"."
    ],
    "tip_es": "Obsolescencia tecnológica planificada: \"PHASE OUT the legacy system\".",
    "human_rule": "Retirar poco a poco ➔ phase out.",
    "trigger_anchor": "to ______ the legacy monolith API over six months ➔ phase out",
    "spanglish_trap": "Confundir phase in y phase out. In introduce; out retira.",
    "ref": null
  },
  {
    "id": "prac-g20-07",
    "section": "UE",
    "objective": "UE3",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the misconfigured load balancer, not the backend application servers, that caused the 502 Bad Gateway outages.",
    "options": [
      "What was",
      "There was",
      "It was",
      "Which was"
    ],
    "answer": 2,
    "why_correct": "• Pista: después del hueco viene \"the misconfigured load balancer, not the backend servers, that caused…\": se destaca una cosa.\n• Regla: It was + cosa destacada + that…\n• Descartas: \"What was\", \"There was\" y \"Which was\" no abren la estructura.",
    "why_wrong": [
      "Incorrecto: \"What was\" abre otra estructura (What… was…).",
      "Incorrecto: \"There was\" no se usa para destacar.",
      "Opción correcta: \"It was the load balancer that caused…\" = \"fue el balanceador lo que causó…\".",
      "Incorrecto: \"Which was\" no abre esta estructura."
    ],
    "tip_es": "Para señalar al culpable exacto en un reporte de incidente: \"IT WAS [el switch/el firewall] THAT failed\".",
    "human_rule": "It was X that… (destacar la causa).",
    "trigger_anchor": "______ the misconfigured load balancer… that caused the outages ➔ It was",
    "spanglish_trap": "Elegir What was. Cuando el hueco va antes de la cosa y hay that después, It was.",
    "ref": null
  },
  {
    "id": "prac-g20-08",
    "section": "UE",
    "objective": "UE5",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What the client actually ______ is a fully redundant geo-distributed database cluster, not a faster single-node instance.",
    "options": [
      "require",
      "requiring",
      "is required",
      "requires"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"What the client actually ______ is…\": falta el verbo, y el sujeto es singular.\n• Regla: What + sujeto + verbo en presente + is…\n• Descartas: require no concuerda; requiring no es un verbo conjugado; \"is required\" no encaja.",
    "why_wrong": [
      "Incorrecto: require no concuerda con \"the client\" (singular).",
      "Incorrecto: requiring no es un verbo conjugado.",
      "Incorrecto: \"is required\" cambia el sentido a pasiva.",
      "Opción correcta: \"What the client actually requires is…\" = \"lo que el cliente realmente necesita es…\"."
    ],
    "tip_es": "Pseudo-cleft de requerimientos: \"What the client REQUIRES is...\".",
    "human_rule": "\"Lo que… necesita es…\" ➔ What + sujeto + requires + is…",
    "trigger_anchor": "What the client actually ______ is a redundant cluster ➔ requires",
    "spanglish_trap": "Poner la forma plural. The client es singular: requires.",
    "ref": null
  },
  {
    "id": "prac-g21-01",
    "section": "UE",
    "objective": "UE4",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If CPU utilization exceeds ninety-five percent for three consecutive minutes, the auto-scaling group ______ a new container instance automatically.",
    "options": [
      "spins up",
      "will spin up",
      "spun up",
      "would spin up"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"If CPU exceeds 95%…, the group ______ automatically\": algo automático que pasa siempre.\n• Regla: automatismo ➔ presente + presente (spins up).\n• Descartas: will spin up es una promesa; spun up es pasado; would spin up es hipotético.",
    "why_wrong": [
      "Opción correcta: \"spins up\" = \"levanta\" (siempre que pase).",
      "Incorrecto: will spin up suena a promesa, no a automatismo.",
      "Incorrecto: spun up es pasado.",
      "Incorrecto: would spin up es hipotético."
    ],
    "tip_es": "Reglas automáticas de infraestructura (runbooks): [If + Presente, sistema + PRESENTE] (Zero Conditional).",
    "human_rule": "Un automatismo ➔ if + presente, presente.",
    "trigger_anchor": "If CPU exceeds 95%, the group ______ a new instance automatically ➔ spins up",
    "spanglish_trap": "Poner will por el futuro. Si es algo que pasa siempre, presente.",
    "ref": null,
    "trigger_scan": "Detonador Visual (5 seg): \"If CPU exceeds 95% (telemetría automática de servidor), the group ______ a new instance\" -> Automatismo de máquina/firmware sin factor humano = Zero Conditional [PRESENTE + PRESENTE]."
  },
  {
    "id": "prac-g21-02",
    "section": "UE",
    "objective": "UE1",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Provided that the primary data center link remains stable, the disaster recovery replication ______ within the two-minute RPO window.",
    "options": [
      "completes",
      "will complete",
      "would complete",
      "completed"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Provided that the link remains stable…\": una condición, y el resultado es una predicción.\n• Regla: provided that + presente ➔ will + verbo.\n• Descartas: completes es un hecho general; would complete es hipotético; completed es pasado.",
    "why_wrong": [
      "Incorrecto: completes es un hecho general, y aquí es una predicción.",
      "Opción correcta: \"will complete\" = \"completará\".",
      "Incorrecto: would complete es hipotético.",
      "Incorrecto: completed es pasado."
    ],
    "tip_es": "Compromisos de SLA con condiciones: \"PROVIDED THAT [presente], we WILL [futuro]\".",
    "human_rule": "Condición + predicción ➔ provided that + presente, will + verbo.",
    "trigger_anchor": "Provided that the link remains stable, replication ______ ➔ will complete",
    "spanglish_trap": "Poner presente en las dos partes. Si es una predicción, will.",
    "ref": null,
    "trigger_scan": "Detonador Visual (5 seg): \"Provided that primary link remains stable (condición previa de red), disaster replication ______ within 2 min (compromiso de SLA)\" -> First Conditional [PRESENTE + WILL + BASE]."
  },
  {
    "id": "prac-g21-03",
    "section": "UE",
    "objective": "UE3",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unless the customer ______ their monthly cloud subscription invoice by Friday, their API access will be throttled.",
    "options": [
      "settle",
      "will settle",
      "settles",
      "is settling"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Unless the customer ______ their invoice by Friday\": una condición futura.\n• Regla: después de unless, el presente ➔ settles (con -s, el cliente es singular).\n• Descartas: settle no concuerda; will settle no se usa tras unless; \"is settling\" no encaja.",
    "why_wrong": [
      "Incorrecto: settle no concuerda con \"the customer\" (singular).",
      "Incorrecto: después de unless no va will.",
      "Opción correcta: \"unless the customer settles\" = \"a menos que el cliente pague\".",
      "Incorrecto: \"is settling\" no se usa para una condición."
    ],
    "tip_es": "¡Regla de oro de los condicionales!: JAMÁS pongas \"will\" dentro de la cláusula de \"if\" o \"unless\".",
    "human_rule": "unless + presente (con -s si es singular).",
    "trigger_anchor": "Unless the customer ______ their invoice by Friday ➔ settles",
    "spanglish_trap": "Poner will. Después de unless, el presente.",
    "ref": null
  },
  {
    "id": "prac-g21-04",
    "section": "UE",
    "objective": "UE4",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "As long as the database cluster ______ configured with at least three master nodes, split-brain conditions cannot occur.",
    "options": [
      "be",
      "will be",
      "were",
      "is"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"As long as the cluster ______ configured…\": una condición.\n• Regla: as long as + presente ➔ is configured.\n• Descartas: be, will be y were no se usan en esta condición real.",
    "why_wrong": [
      "Incorrecto: be no se conjuga aquí.",
      "Incorrecto: después de as long as no va will.",
      "Incorrecto: were es para algo irreal.",
      "Opción correcta: \"as long as the cluster is configured\" = \"mientras el clúster esté configurado\"."
    ],
    "tip_es": "\"AS LONG AS + Presente\": establece la condición técnica de garantía operativa.",
    "human_rule": "as long as + presente.",
    "trigger_anchor": "As long as the cluster ______ configured with three masters ➔ is",
    "spanglish_trap": "Poner will be. Después de as long as, el presente.",
    "ref": null
  },
  {
    "id": "prac-g21-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If the client requests additional storage volumes, we ______ deploy them within forty-eight hours under the standard tier SLA.",
    "options": [
      "can",
      "could have",
      "had deployed",
      "would deploy"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"If the client requests…, we ______ deploy them within 48 hours\": una posibilidad real.\n• Regla: if + presente ➔ can / will + verbo.\n• Descartas: \"could have\" y \"had deployed\" son del pasado; would deploy es hipotético.",
    "why_wrong": [
      "Opción correcta: \"can deploy\" = \"podemos desplegar\".",
      "Incorrecto: \"could have\" es del pasado.",
      "Incorrecto: \"had deployed\" es del pasado.",
      "Incorrecto: would deploy es hipotético."
    ],
    "tip_es": "Garantías de servicio en SLAs: \"If you request X, we CAN deliver in Y hours\".",
    "human_rule": "if + presente, can / will + verbo.",
    "trigger_anchor": "If the client requests storage, we ______ deploy it ➔ can",
    "spanglish_trap": "Usar would por cortesía. Si es una posibilidad real, can / will.",
    "ref": null
  },
  {
    "id": "prac-g21-06",
    "section": "UE",
    "objective": "UE4",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "When a hard disk in the RAID array fails, the storage controller ______ the hot spare immediately.",
    "options": [
      "will activate",
      "activates",
      "activated",
      "would activate"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"When a hard disk fails, the controller ______ the hot spare immediately\": algo automático.\n• Regla: automatismo ➔ presente (activates).\n• Descartas: will activate es una promesa; activated es pasado; would activate es hipotético.",
    "why_wrong": [
      "Incorrecto: will activate suena a promesa.",
      "Opción correcta: \"activates\" = \"activa\" (siempre que pase).",
      "Incorrecto: activated es pasado.",
      "Incorrecto: would activate es hipotético."
    ],
    "tip_es": "Firmware y lógica de hardware: \"When X fails, the controller ACTIVATES Y\".",
    "human_rule": "When + presente, presente (automatismo).",
    "trigger_anchor": "When a disk fails, the controller ______ the hot spare ➔ activates",
    "spanglish_trap": "Poner will por el futuro. Si pasa siempre, presente.",
    "ref": null
  },
  {
    "id": "prac-g21-07",
    "section": "UE",
    "objective": "UE1",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In case of emergency power loss, the auxiliary UPS batteries ______ power to the core rack until the generator stabilizes.",
    "options": [
      "supplied",
      "will have supplied",
      "supply",
      "would supply"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"In case of emergency power loss, the batteries ______ power until the generator stabilizes\": algo que ocurre cada vez.\n• Regla: automatismo ➔ presente (supply).\n• Descartas: supplied es pasado; \"will have supplied\" es otra estructura; would supply es hipotético.",
    "why_wrong": [
      "Incorrecto: supplied es pasado.",
      "Incorrecto: \"will have supplied\" no encaja con \"until\".",
      "Opción correcta: \"supply\" = \"suministran\".",
      "Incorrecto: would supply es hipotético."
    ],
    "tip_es": "\"In case of [emergencia], [sistema] SUPPLIES [energía/respaldo]\".",
    "human_rule": "Un procedimiento automático ➔ presente.",
    "trigger_anchor": "In case of power loss, the batteries ______ power ➔ supply",
    "spanglish_trap": "Usar el futuro. En un procedimiento, el presente.",
    "ref": null
  },
  {
    "id": "prac-g21-08",
    "section": "UE",
    "objective": "UE5",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If our team ______ the database schema today, we will be able to begin load testing first thing on Monday morning.",
    "options": [
      "is finalized",
      "will finalize",
      "finalized",
      "finalizes"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"If our team ______ the schema today, we will be able to begin\": una condición futura.\n• Regla: if + presente ➔ will + verbo.\n• Descartas: \"is finalized\" es pasiva; \"will finalize\" no se usa tras if; finalized es pasado.",
    "why_wrong": [
      "Incorrecto: \"is finalized\" es pasiva, y el equipo actúa.",
      "Incorrecto: después de if no va will.",
      "Incorrecto: finalized es pasado.",
      "Opción correcta: \"if our team finalizes\" = \"si nuestro equipo finaliza\"."
    ],
    "tip_es": "Estructura condicional de planificación de sprints: \"If we FINALIZE today, we WILL test Monday\".",
    "human_rule": "if + presente, will + verbo.",
    "trigger_anchor": "If our team ______ the schema today, we will begin… ➔ finalizes",
    "spanglish_trap": "Poner will después de if. Después de if, el presente.",
    "ref": null
  }
];
