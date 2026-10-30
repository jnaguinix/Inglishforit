import { Question } from '../../types';

/**
 * Modular Question Bank: Advanced Grammar Practice Pack
 * 
 * Deepens the pool for high-frequency B2 grammar topics (G01 to G21).
 * Allows dynamic, randomized 8-question drills drawn from 16+ items per topic.
 * 100% exclusive to practice; isolated from official mock exam questions.
 */
export const GRAMMAR_ADVANCED_BANK: Question[] = [
  {
    "id": "bank-g01-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the preliminary incident analysis, the database outage ______ by a corrupted storage block in sector 7.",
    "options": [
      "is thought to have been caused",
      "is thought to cause",
      "is thought that it was caused",
      "thinks to have caused"
    ],
    "answer": 0,
    "why_correct": "• Pista: la causa ya pasó y la frase empieza por la cosa (\"the outage\").\n• Regla: cosa primero + hecho pasado ➔ is thought TO HAVE BEEN + 3.ª forma.\n• Descartas: \"to cause\" hace que la caída cause algo; \"that it was caused\" no va con la cosa delante; thinks hace que la caída piense.",
    "why_wrong": [
      "Opción correcta: \"is thought to have been caused\" = \"se cree que fue causada\".",
      "Incorrecto: \"is thought to cause\" dice que la caída causa algo, no que la causaron.",
      "Incorrecto: con la cosa al principio no va \"that it\"; va \"to have been\".",
      "Incorrecto: thinks hace que la caída piense."
    ],
    "tip_es": "Para hechos pasados en pasiva personal: [is thought / reported + TO HAVE BEEN + participio].",
    "human_rule": "Cosa primero + algo que ya pasó ➔ is thought to have been + 3.ª forma.",
    "trigger_anchor": "outage ______ by a corrupted block (ya pasó) ➔ is thought to have been caused",
    "spanglish_trap": "Decir \"to cause\" (activa). La caída no causa, la causan.",
    "ref": null
  },
  {
    "id": "bank-g01-02",
    "section": "UE",
    "objective": "UE4",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The new encryption algorithms ______ in all financial gateway endpoints before the annual PCI-DSS audit.",
    "options": [
      "must to be deployed",
      "must be deployed",
      "must deploying",
      "must been deployed"
    ],
    "answer": 1,
    "why_correct": "• Pista: hay un modal (must) y los algoritmos reciben la acción (se despliegan).\n• Regla: \"se debe + hecho\" ➔ must + be + 3.ª forma, sin to.\n• Descartas: \"must to\" y \"must been\" no existen; \"must deploying\" tampoco.",
    "why_wrong": [
      "Incorrecto: después de must nunca va \"to\".",
      "Opción correcta: \"must be deployed\" = \"deben desplegarse\".",
      "Incorrecto: \"must deploying\" no existe; después de must va be + 3.ª forma.",
      "Incorrecto: después de must va \"be\", no \"been\"."
    ],
    "tip_es": "Pasiva con verbos modales: [MODAL + BE + Participio Pasado]. Jamás intercales \"to\" tras un modal.",
    "human_rule": "Después de must / should / can va el verbo tal cual, sin to: must be deployed.",
    "trigger_anchor": "algorithms ______ before the audit (se deben desplegar) ➔ must be deployed",
    "spanglish_trap": "Poner \"to\" después de must (\"must to be\"). Después de un modal nunca va to.",
    "ref": null
  },
  {
    "id": "bank-g01-03",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "During peak black Friday traffic, incoming transaction requests ______ across four autonomous microservice clusters.",
    "options": [
      "were distribute",
      "distributed",
      "were distributed",
      "are being distribute"
    ],
    "answer": 2,
    "why_correct": "• Pista: las solicitudes reciben la acción (\"fueron distribuidas\") y son plural.\n• Regla: \"fueron + hecho\" ➔ were + 3.ª forma.\n• Descartas: \"were distribute\" no lleva la 3.ª forma; distributed solo no tiene \"were\"; \"are being distribute\" tampoco.",
    "why_wrong": [
      "Incorrecto: después de were va la 3.ª forma (distributed), no el verbo base.",
      "Incorrecto: distributed sin \"were\" diría que las solicitudes distribuyeron algo.",
      "Opción correcta: \"were distributed\" = \"fueron distribuidas\".",
      "Incorrecto: falta la 3.ª forma (distributed)."
    ],
    "tip_es": "Sujeto inanimado que recibe la acción: exige voz pasiva [were + participio].",
    "human_rule": "\"Fueron distribuidas\" ➔ were distributed.",
    "trigger_anchor": "requests ______ across four clusters (fueron distribuidas) ➔ were distributed",
    "spanglish_trap": "Dejar el verbo base después de were. Después de was / were va la 3.ª forma.",
    "ref": null
  },
  {
    "id": "bank-g01-04",
    "section": "UE",
    "objective": "UE3",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The rogue access point ______ by network security operations within twenty minutes of appearing on the SSID telemetry.",
    "options": [
      "has neutralized",
      "neutralized",
      "was neutralizing",
      "was neutralized"
    ],
    "answer": 3,
    "why_correct": "• Pista: el punto de acceso recibe la acción (\"fue neutralizado\") y hay \"by\" después.\n• Regla: \"fue + hecho + by\" ➔ was + 3.ª forma.\n• Descartas: has neutralized y neutralized lo hacen actuar; was neutralizing es un -ing.",
    "why_wrong": [
      "Incorrecto: has neutralized dice que el punto de acceso neutralizó algo.",
      "Incorrecto: neutralized sin \"was\" tiene el mismo problema.",
      "Incorrecto: \"was neutralizing\" dice que estaba neutralizando, no que lo neutralizaron.",
      "Opción correcta: \"was neutralized by…\" = \"fue neutralizado por…\"."
    ],
    "tip_es": "Acción ejecutada sobre un dispositivo malicioso: [was + participio + BY el equipo].",
    "human_rule": "Con \"by\" detrás, normalmente es pasiva: was neutralized by…",
    "trigger_anchor": "access point ______ by the team (fue neutralizado) ➔ was neutralized",
    "spanglish_trap": "Elegir la forma activa por parecerse al español. Si hay \"by\" detrás, es pasiva.",
    "ref": null
  },
  {
    "id": "bank-g02-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The cloud orchestration framework, ______ configuration files are stored in a Git repository, rebuilds containers automatically upon each commit.",
    "options": [
      "whose",
      "which",
      "that",
      "where"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco viene \"configuration files\", que pertenecen al framework (\"cuyos archivos\").\n• Regla: \"cuyo / cuyos\" ➔ whose, también con sistemas.\n• Descartas: which y that no dicen de quién es; where es para lugares.",
    "why_wrong": [
      "Opción correcta: whose une el framework con sus archivos de configuración (\"cuyos archivos\").",
      "Incorrecto: which solo no expresa posesión; haría falta \"of which\".",
      "Incorrecto: that no va después de coma ni expresa posesión.",
      "Incorrecto: where es para lugares, no para decir de quién son los archivos."
    ],
    "tip_es": "\"whose\" se usa tanto para personas como para software y sistemas cuando hay relación de posesión.",
    "human_rule": "\"El framework, cuyos archivos…\" ➔ the framework, whose files…",
    "trigger_anchor": "framework, ______ configuration files (cuyos archivos) ➔ whose",
    "spanglish_trap": "Pensar que whose es solo para personas. También vale para sistemas y software.",
    "ref": null
  },
  {
    "id": "bank-g02-02",
    "section": "UE",
    "objective": "UE4",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "We need to deploy the hotfix to the staging environment, ______ the automated integration tests will run overnight.",
    "options": [
      "which",
      "where",
      "that",
      "whose"
    ],
    "answer": 1,
    "why_correct": "• Pista: hay un lugar (\"the staging environment\") y después una frase completa (\"the tests will run\").\n• Regla: \"donde\" ➔ where.\n• Descartas: which necesitaría \"in which\"; that no va después de coma; whose no tiene posesión que expresar.",
    "why_wrong": [
      "Incorrecto: which necesitaría \"in which\" para decir \"en el cual\".",
      "Opción correcta: where = \"donde\", para un entorno seguido de una frase completa.",
      "Incorrecto: that no se usa después de una coma.",
      "Incorrecto: whose expresa posesión, y aquí nada pertenece al entorno."
    ],
    "tip_es": "Para entornos, servidores o subredes donde ocurre un proceso: usa \"where\" o \"in which\".",
    "human_rule": "\"El entorno donde correrán las pruebas\" ➔ the environment where the tests will run.",
    "trigger_anchor": "environment, ______ the tests will run (donde) ➔ where",
    "spanglish_trap": "Poner which porque el entorno es una cosa. Si en español dirías \"donde\", es where.",
    "ref": null
  },
  {
    "id": "bank-g03-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The compromised IoT gateway responds to external ping requests as if it ______ directly connected to the public demilitarized zone.",
    "options": [
      "has been",
      "is",
      "were",
      "will be"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"responds as if it ______ directly connected\": no está conectado directamente.\n• Regla: as if + irreal ➔ were.\n• Descartas: \"has been\", is y \"will be\" hablan de algo real o futuro.",
    "why_wrong": [
      "Incorrecto: \"has been\" habla de algo real.",
      "Incorrecto: is habla de algo real.",
      "Opción correcta: \"as if it were connected\" = \"como si estuviera conectado\".",
      "Incorrecto: \"will be\" habla del futuro."
    ],
    "tip_es": "Comportamiento de red anómalo o sospechoso: [as if + were / Past Simple].",
    "human_rule": "as if it were + adjetivo.",
    "trigger_anchor": "responds as if it ______ directly connected ➔ were",
    "spanglish_trap": "Decir \"as if it is\". Lo irreal va en pasado.",
    "ref": null
  },
  {
    "id": "bank-g03-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The database daemon consumed memory as though there ______ a massive runaway leak in the thread pool.",
    "options": [
      "will have been",
      "is",
      "was being",
      "were"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"as though there ______ a massive runaway leak\": no hay una fuga real.\n• Regla: as though + irreal ➔ were.\n• Descartas: \"will have been\", is y \"was being\" no forman el irreal.",
    "why_wrong": [
      "Incorrecto: \"will have been\" habla del futuro.",
      "Incorrecto: is habla de algo real.",
      "Incorrecto: \"was being\" no es la forma habitual del irreal.",
      "Opción correcta: \"as though there were a leak\" = \"como si hubiera una fuga\"."
    ],
    "tip_es": "Simulaciones o indicios falsos en postmortems: \"as though there were a leak\".",
    "human_rule": "as though there were… (irreal).",
    "trigger_anchor": "consumed memory as though there ______ a massive leak ➔ were",
    "spanglish_trap": "Poner was por \"había\". En lo irreal, were.",
    "ref": null
  },
  {
    "id": "bank-g04-01",
    "section": "UE",
    "objective": "UE5",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The client claims our SLA was breached, but our infrastructure logs prove that the primary API ______ maintain ninety-nine point nine percent uptime throughout July.",
    "options": [
      "did",
      "does",
      "doing",
      "had"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"The client claims our SLA was breached, but our logs prove…\": se contradice una queja sobre julio.\n• Regla: \"sí mantuvo\" ➔ did + verbo base.\n• Descartas: does es presente; doing no es una forma conjugada; had no forma el énfasis.",
    "why_wrong": [
      "Opción correcta: \"did maintain\" = \"sí mantuvo\".",
      "Incorrecto: does es presente.",
      "Incorrecto: doing no es una forma conjugada.",
      "Incorrecto: had no forma el énfasis con un verbo base."
    ],
    "tip_es": "Para defender el cumplimiento de un SLA en auditorías: \"The system did maintain...\".",
    "human_rule": "Contradecir una queja del pasado ➔ did + verbo base.",
    "trigger_anchor": "…our logs prove that the API ______ maintain uptime ➔ did",
    "spanglish_trap": "Dejar el verbo sin énfasis. Para contradecir una queja, did + verbo base.",
    "ref": null
  },
  {
    "id": "bank-g04-02",
    "section": "UE",
    "objective": "UE2",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "While this microservice rarely throws uncaught exceptions, it ______ consume significant memory during large batch imports.",
    "options": [
      "do",
      "does",
      "did",
      "is"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"While this microservice rarely throws…, it ______ consume\": se contrasta con lo habitual, en presente y singular.\n• Regla: \"pero sí consume\" ➔ does + verbo base.\n• Descartas: do no concuerda con it; did es pasado; is no forma el énfasis.",
    "why_wrong": [
      "Incorrecto: do no concuerda con \"it\".",
      "Opción correcta: \"does consume\" = \"sí consume\".",
      "Incorrecto: did es pasado.",
      "Incorrecto: is no forma el énfasis con un verbo base."
    ],
    "tip_es": "Contraste en presente habitual de 3ª persona: \"It DOES consume significant resources\".",
    "human_rule": "Contraste en presente ➔ does + verbo base (con it / he / she).",
    "trigger_anchor": "While it rarely throws…, it ______ consume memory ➔ does",
    "spanglish_trap": "Usar do con it. Con it, does.",
    "ref": null
  },
  {
    "id": "bank-g05-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unpatched Apache web servers running outdated OpenSSL libraries are highly susceptible ______ man-in-the-middle attacks.",
    "options": [
      "with",
      "of",
      "to",
      "for"
    ],
    "answer": 2,
    "why_correct": "• Pista: antes del hueco está \"susceptible\".\n• Regla: susceptible a ➔ susceptible TO.\n• Descartas: with, of y for no van con susceptible.",
    "why_wrong": [
      "Incorrecto: con susceptible no va \"with\".",
      "Incorrecto: con susceptible no va \"of\".",
      "Opción correcta: \"susceptible to\" = \"susceptible a\".",
      "Incorrecto: con susceptible no va \"for\"."
    ],
    "tip_es": "Colocaciones clave de riesgo: \"VULNERABLE TO\", \"SUSCEPTIBLE TO\", \"PRONE TO\".",
    "human_rule": "\"Susceptible a\" ➔ susceptible TO.",
    "trigger_anchor": "highly susceptible ______ man-in-the-middle attacks ➔ to",
    "spanglish_trap": "Poner of. Con susceptible va TO, igual que vulnerable.",
    "ref": null
  },
  {
    "id": "bank-g05-02",
    "section": "UE",
    "objective": "UE5",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The engineering director insisted ______ conducting a complete penetration test before granting production release approval.",
    "options": [
      "with",
      "in",
      "at",
      "on"
    ],
    "answer": 3,
    "why_correct": "• Pista: antes del hueco está \"insisted\", y después viene un verbo con -ing.\n• Regla: insistir en ➔ insist ON + -ing.\n• Descartas: with, in y at no van con insist.",
    "why_wrong": [
      "Incorrecto: con insist no va \"with\".",
      "Incorrecto: con insist no va \"in\", aunque en español digamos \"en\".",
      "Incorrecto: con insist no va \"at\".",
      "Opción correcta: \"insisted on conducting\" = \"insistió en realizar\"."
    ],
    "tip_es": "¡Cuidado con la trampa del español!: se dice \"insist ON doing something\", nunca \"insist in\".",
    "human_rule": "\"Insistir en\" ➔ insist ON + -ing.",
    "trigger_anchor": "insisted ______ conducting a test ➔ on",
    "spanglish_trap": "Decir \"insist in\" por el \"en\" del español. En inglés es ON.",
    "ref": null
  },
  {
    "id": "bank-g06-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the core cluster experienced twenty percent packet loss, the distributed consensus algorithm maintained state integrity without failure.",
    "options": [
      "Even though",
      "Despite",
      "In spite",
      "However"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco viene una frase completa (\"the core cluster experienced twenty percent packet loss\").\n• Regla: \"aunque\" + frase completa ➔ Even though.\n• Descartas: Despite e \"In spite\" van con una cosa o -ing; However va entre frases.",
    "why_wrong": [
      "Opción correcta: \"Even though the cluster experienced…\" = \"aunque el clúster experimentó…\".",
      "Incorrecto: Despite va con una cosa o -ing.",
      "Incorrecto: \"In spite\" necesita \"of\" y una cosa o -ing.",
      "Incorrecto: However es un conector entre dos frases."
    ],
    "tip_es": "Si hay sujeto y verbo conjugado: usa \"Although\" o \"Even though\".",
    "human_rule": "\"Aunque\" + frase completa ➔ Even though / Although.",
    "trigger_anchor": "______ the cluster experienced packet loss (frase) ➔ Even though",
    "spanglish_trap": "Elegir Despite por \"a pesar de\". Con una frase completa, Even though.",
    "ref": null
  },
  {
    "id": "bank-g06-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ suffering a catastrophic power failure in the primary data hall, the failover mechanisms engaged within four seconds.",
    "options": [
      "Although",
      "Despite",
      "Whereas",
      "Even"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"suffering\", un verbo con -ing.\n• Regla: \"a pesar de\" + -ing ➔ Despite.\n• Descartas: Although y Whereas necesitan una frase completa; Even no se usa solo.",
    "why_wrong": [
      "Incorrecto: Although necesita una frase completa.",
      "Opción correcta: \"Despite suffering a power failure\" = \"a pesar de sufrir un corte\".",
      "Incorrecto: Whereas compara dos cosas.",
      "Incorrecto: Even no se usa solo así."
    ],
    "tip_es": "Apertura con gerundio de contraste: \"Despite suffering / failing / losing...\".",
    "human_rule": "\"A pesar de\" + -ing ➔ Despite.",
    "trigger_anchor": "______ suffering a power failure (-ing) ➔ Despite",
    "spanglish_trap": "Elegir Although. Después de un verbo con -ing, Despite.",
    "ref": null
  },
  {
    "id": "bank-g07-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rarely ______ an unencrypted database backup leave the secure perimeter without triggering an immediate DLP alert.",
    "options": [
      "has",
      "is",
      "does",
      "did"
    ],
    "answer": 2,
    "why_correct": "• Pista: Rarely al inicio y después \"leave\" (verbo base).\n• Regla: Rarely + does + sujeto singular + verbo base.\n• Descartas: has y is piden otra forma del verbo; did es pasado y la frase habla de lo que pasa normalmente.",
    "why_wrong": [
      "Incorrecto: has pediría \"left\" (3.ª forma), no \"leave\".",
      "Incorrecto: is pediría un verbo en 3.ª forma o con -ing.",
      "Opción correcta: \"does… leave\" = \"casi nunca sale\".",
      "Incorrecto: did es pasado, y la frase habla de lo que pasa normalmente."
    ],
    "tip_es": "Inversión en presente: [Rarely / Seldom + DOES + Sujeto Singular + Verbo Base].",
    "human_rule": "Rarely + does + sujeto + verbo base.",
    "trigger_anchor": "Rarely ______ a backup leave (casi nunca) ➔ does",
    "spanglish_trap": "Pensar que did sirve para todo. Mira el tiempo: presente ➔ does.",
    "ref": null
  },
  {
    "id": "bank-g07-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Under no circumstances ______ engineers bypass multi-factor authentication when establishing an SSH tunnel to production.",
    "options": [
      "might to",
      "they may",
      "can they",
      "may"
    ],
    "answer": 3,
    "why_correct": "• Pista: tras la expresión negativa ya está el sujeto (\"engineers\") y después viene el verbo base (\"bypass\").\n• Regla: expresión negativa + verbo pequeño (may) + sujeto + verbo base.\n• Descartas: \"might to\" lleva to; B y C repiten el sujeto con \"they\".",
    "why_wrong": [
      "Incorrecto: después de might no va \"to\".",
      "Incorrecto: \"they\" sobra; el sujeto es \"engineers\".",
      "Incorrecto: \"they\" sobra; el sujeto es \"engineers\".",
      "Opción correcta: may va justo después de la expresión negativa."
    ],
    "tip_es": "Prohibición de seguridad estricta: \"Under no circumstances MAY/SHOULD users bypass...\".",
    "human_rule": "Under no circumstances + may / should / can + sujeto + verbo.",
    "trigger_anchor": "Under no circumstances ______ engineers bypass ➔ may",
    "spanglish_trap": "Añadir \"they\" o \"to\". Solo hace falta el verbo pequeño.",
    "ref": null
  },
  {
    "id": "bank-g08-01",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "You ______ check the SSL certificate expiration date before escalating this ticket to the tier-three network team.",
    "options": [
      "had better",
      "had better to",
      "ought",
      "should to"
    ],
    "answer": 0,
    "why_correct": "• Pista: más vale hacerlo antes de escalar; sin to después.\n• Regla: had better + verbo sin to.\n• Descartas: \"had better to\" y \"should to\" llevan to de más; ought necesita \"to\".",
    "why_wrong": [
      "Opción correcta: \"had better check\" = \"más vale que revises\".",
      "Incorrecto: después de had better no va \"to\".",
      "Incorrecto: ought necesita \"to\".",
      "Incorrecto: después de should no va \"to\"."
    ],
    "tip_es": "Consejo urgente de soporte: \"You had better check\" (sin to).",
    "human_rule": "Más vale hacerlo antes ➔ had better + verbo.",
    "trigger_anchor": "You ______ check … before escalating (más vale) ➔ had better",
    "spanglish_trap": "Escribir \"had better to\". Nunca lleva to.",
    "ref": null
  },
  {
    "id": "bank-g08-02",
    "section": "UE",
    "objective": "UE5",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Enterprises handling sensitive healthcare records ______ adhere to stringent HIPAA compliance mandates.",
    "options": [
      "ought",
      "ought to",
      "had better to",
      "should to"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una obligación normativa general.\n• Regla: \"deberían\" ➔ ought TO + verbo.\n• Descartas: ought sin to está incompleto; \"had better to\" y \"should to\" llevan to de más.",
    "why_wrong": [
      "Incorrecto: ought necesita \"to\".",
      "Opción correcta: \"ought to adhere\" = \"deberían cumplir\".",
      "Incorrecto: después de had better no va \"to\".",
      "Incorrecto: después de should no va \"to\"."
    ],
    "tip_es": "Normativas y directivas formales: \"ought to adhere\", \"ought to comply\".",
    "human_rule": "Obligación normativa ➔ ought to + verbo.",
    "trigger_anchor": "Enterprises ______ adhere (deberían) ➔ ought to",
    "spanglish_trap": "Olvidar el to de ought.",
    "ref": null
  },
  {
    "id": "bank-g11-01",
    "section": "UE",
    "objective": "UE5",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "PostgreSQL is ______ the most versatile relational database system for handling both structured and JSON data.",
    "options": [
      "presumably",
      "conceivably",
      "arguably",
      "hardly"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"the most versatile\" es un superlativo.\n• Regla: afirmación respaldada con argumentos ➔ arguably + superlativo.\n• Descartas: presumably es una suposición; conceivably es \"posiblemente\"; hardly es \"apenas\".",
    "why_wrong": [
      "Incorrecto: presumably es una suposición, no un argumento.",
      "Incorrecto: conceivably significa \"posiblemente\".",
      "Opción correcta: \"arguably the most versatile\" = \"se puede argumentar que es el más versátil\".",
      "Incorrecto: hardly significa \"apenas\"."
    ],
    "tip_es": "\"Arguably the most [adjetivo]\": la fórmula estándar para defender el liderazgo de una solución.",
    "human_rule": "Superlativo respaldado con argumentos ➔ arguably.",
    "trigger_anchor": "is ______ the most versatile (superlativo) ➔ arguably",
    "spanglish_trap": "Elegir presumably. Arguably acompaña al superlativo.",
    "ref": null
  },
  {
    "id": "bank-g11-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G11",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Without automated regression testing, unexpected runtime errors will ______ slip into the production deployment.",
    "options": [
      "tentatively",
      "conceivably",
      "scarcely",
      "inevitably"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"Without automated testing… will ______ slip\": consecuencia segura.\n• Regla: \"inevitablemente\" ➔ inevitably.\n• Descartas: tentatively y conceivably no expresan seguridad; scarcely significa \"apenas\".",
    "why_wrong": [
      "Incorrecto: tentatively significa \"provisionalmente\".",
      "Incorrecto: conceivably expresa posibilidad, no seguridad.",
      "Incorrecto: scarcely significa \"apenas\".",
      "Opción correcta: \"will inevitably slip\" = \"inevitablemente se colarán\"."
    ],
    "tip_es": "Consecuencia previsible negativa: \"will INEVITABLY occur\".",
    "human_rule": "Consecuencia segura ➔ inevitably.",
    "trigger_anchor": "Without regression testing, errors will ______ slip ➔ inevitably",
    "spanglish_trap": "Elegir conceivably por \"podría\". Si es seguro, inevitably.",
    "ref": null
  },
  {
    "id": "bank-g12-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "By next Friday, the infrastructure squad ______ all legacy VM instances to containerized microservices.",
    "options": [
      "will have migrated",
      "will migrate",
      "has migrated",
      "is migrating"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"By next Friday\" fija un momento futuro y pregunta qué ya estará hecho.\n• Regla: \"habrá migrado para entonces\" ➔ will have + 3.ª forma.\n• Descartas: will migrate dice que lo hará; has migrated es del presente; is migrating es presente.",
    "why_wrong": [
      "Opción correcta: \"will have migrated\" = \"habrá migrado\".",
      "Incorrecto: will migrate no dice que ya estará hecho para entonces.",
      "Incorrecto: has migrated habla del presente.",
      "Incorrecto: is migrating es presente."
    ],
    "tip_es": "\"By [fecha futura]\" activa el Future Perfect: \"will have migrated\".",
    "human_rule": "By + fecha futura ➔ will have + 3.ª forma.",
    "trigger_anchor": "By next Friday ➔ squad ______ all legacy VMs ➔ will have migrated",
    "spanglish_trap": "Elegir will migrate por parecerse a \"migrará\". Con \"para entonces\", will have + 3.ª forma.",
    "ref": null
  },
  {
    "id": "bank-g12-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The database cluster was on the verge of ______ when the automated throttling script stabilized query queue lengths.",
    "options": [
      "crash",
      "crashing",
      "to crash",
      "crashed"
    ],
    "answer": 1,
    "why_correct": "• Pista: después de \"on the verge of\" va un verbo con -ing.\n• Regla: \"a punto de\" ➔ on the verge of + -ing.\n• Descartas: crash, \"to crash\" y crashed no encajan después de \"of\".",
    "why_wrong": [
      "Incorrecto: después de \"of\" va -ing, no el verbo base.",
      "Opción correcta: \"on the verge of crashing\" = \"a punto de caerse\".",
      "Incorrecto: después de \"of\" no va \"to\".",
      "Incorrecto: después de \"of\" va -ing, no el pasado."
    ],
    "tip_es": "\"on the verge OF + gerundio\": a punto de fallar.",
    "human_rule": "on the verge of + verbo con -ing.",
    "trigger_anchor": "on the verge of ______ (-ing) ➔ crashing",
    "spanglish_trap": "Poner el verbo base o el infinitivo. Después de of, va -ing.",
    "ref": null
  },
  {
    "id": "bank-g13-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The architecture review board mandates that every new microservice ______ mutual TLS for inter-service communication.",
    "options": [
      "will implement",
      "implements",
      "implement",
      "is implementing"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"mandates that every new microservice…\": una obligación + that.\n• Regla: mandate + that + verbo sin -s (implement).\n• Descartas: \"will implement\" no se usa; implements lleva -s; \"is implementing\" tampoco.",
    "why_wrong": [
      "Incorrecto: will no se usa después de mandate that.",
      "Incorrecto: implements lleva -s que aquí no va.",
      "Opción correcta: \"implement\" = \"implemente\".",
      "Incorrecto: \"is implementing\" no se usa aquí."
    ],
    "tip_es": "Tras [mandate / recommend / require THAT]: ¡elimina la \"S\" de tercera persona!",
    "human_rule": "mandate + that + verbo sin -s.",
    "trigger_anchor": "mandates that every microservice ______ mutual TLS ➔ implement",
    "spanglish_trap": "Poner -s porque every es singular. Después de mandate that, el verbo va tal cual.",
    "ref": null
  },
  {
    "id": "bank-g13-02",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 2,
    "pool": "practice",
    "stem": "It is imperative that the root certificate authority key ______ in an offline hardware security module at all times.",
    "options": [
      "was kept",
      "is kept",
      "will be kept",
      "be kept"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"it is imperative that the root CA key…\": una necesidad + that.\n• Regla: imperative + that + be + 3.ª forma (be kept).\n• Descartas: \"was kept\" e \"is kept\" conjugan el verbo; \"will be kept\" no se usa.",
    "why_wrong": [
      "Incorrecto: \"was kept\" es pasado.",
      "Incorrecto: \"is kept\" conjuga el verbo.",
      "Incorrecto: \"will be kept\" no se usa después de imperative that.",
      "Opción correcta: \"be kept\" = \"se mantenga\"."
    ],
    "tip_es": "En fórmulas pasivas con [It is imperative / crucial that]: usa siempre \"BE + participio\", nunca \"is\".",
    "human_rule": "it is imperative that + be + 3.ª forma.",
    "trigger_anchor": "it is imperative that the key ______ in an offline HSM ➔ be kept",
    "spanglish_trap": "Poner is kept por \"se mantiene\". Después de imperative that va be.",
    "ref": null
  },
  {
    "id": "bank-g14-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Since the firewall dropped all incoming packets on port 22, the attacker ______ gained SSH shell access.",
    "options": [
      "can't have",
      "must have",
      "should have",
      "might have to"
    ],
    "answer": 0,
    "why_correct": "• Pista: el firewall bloqueó todo en el puerto 22, así que no pudo entrar por ahí.\n• Regla: la evidencia lo hace imposible ➔ can't have + 3.ª forma.\n• Descartas: must have diría que seguro entró; should have es un reproche; \"might have to\" es otra estructura.",
    "why_wrong": [
      "Opción correcta: \"can't have gained\" = \"es imposible que haya obtenido\".",
      "Incorrecto: must have diría que seguro entró.",
      "Incorrecto: should have es un reproche.",
      "Incorrecto: \"might have to\" significa \"quizás tuvo que\"."
    ],
    "tip_es": "Imposibilidad lógica evidente en el pasado: \"CAN'T HAVE [participio]\".",
    "human_rule": "La evidencia lo hace imposible ➔ can't have + 3.ª forma.",
    "trigger_anchor": "firewall dropped all packets on port 22 ➔ attacker ______ gained access ➔ can't have",
    "spanglish_trap": "Usar mustn't have para \"imposible\". Para imposible, can't have.",
    "ref": null
  },
  {
    "id": "bank-g14-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The database replica was completely synchronized, so the failover ______ executed smoothly during the maintenance window.",
    "options": [
      "can have been",
      "must have been",
      "would have be",
      "must be being"
    ],
    "answer": 1,
    "why_correct": "• Pista: la réplica estaba sincronizada, así que todo apunta a un cambio sin problemas.\n• Regla: la evidencia lo confirma ➔ must have been + 3.ª forma.\n• Descartas: \"can have been\" no se usa para deducir; \"would have be\" no tiene la 3.ª forma; \"must be being\" es otra estructura.",
    "why_wrong": [
      "Incorrecto: \"can have been\" no se usa para deducir.",
      "Opción correcta: \"must have been executed\" = \"seguro que se ejecutó\".",
      "Incorrecto: después de have va la 3.ª forma (been), no be.",
      "Incorrecto: \"must be being\" habla del presente en progreso."
    ],
    "tip_es": "Deducción lógica afirmativa en pasiva: \"MUST HAVE BEEN executed\".",
    "human_rule": "La evidencia lo confirma ➔ must have been + 3.ª forma.",
    "trigger_anchor": "replica completely synchronized, so the failover ______ executed ➔ must have been",
    "spanglish_trap": "Elegir can have been porque \"puede ser\" suena parecido. Para deducir, must have.",
    "ref": null
  },
  {
    "id": "bank-g19-01",
    "section": "UE",
    "objective": "UE4",
    "topic": "G19",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If the canary deployment causes HTTP 500 error rates to exceed two percent, the CI/CD pipeline will automatically ______ the release.",
    "options": [
      "call off",
      "roll out",
      "roll back",
      "turn down"
    ],
    "answer": 2,
    "why_correct": "• Pista: si el despliegue de prueba falla mucho, el pipeline vuelve a la versión anterior.\n• Regla: ➔ roll back.\n• Descartas: \"call off\" es cancelar; \"roll out\" es lanzar; \"turn down\" es rechazar.",
    "why_wrong": [
      "Incorrecto: \"call off\" significa \"cancelar\".",
      "Incorrecto: \"roll out\" significa \"lanzar\".",
      "Opción correcta: \"roll back\" = \"volver a la versión anterior\".",
      "Incorrecto: \"turn down\" significa \"rechazar\"."
    ],
    "tip_es": "DevOps esencial: \"roll back\" = revertir despliegue a versión anterior.",
    "human_rule": "Volver a la versión anterior ➔ roll back.",
    "trigger_anchor": "error rates exceed 2%, the pipeline will ______ the release ➔ roll back",
    "spanglish_trap": "Elegir call off por \"cancelar\". Para volver a la versión anterior, roll back.",
    "ref": null
  },
  {
    "id": "bank-g19-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G19",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The forensic response team spent thirty-six hours trying to ______ the exact point of entry used by the advanced persistent threat.",
    "options": [
      "turn up",
      "bring about",
      "take over",
      "track down"
    ],
    "answer": 3,
    "why_correct": "• Pista: se pasaron 36 horas buscando \"the exact point of entry\".\n• Regla: localizar tras buscar ➔ track down.\n• Descartas: \"turn up\" es aparecer; \"bring about\" es provocar; \"take over\" es tomar el control.",
    "why_wrong": [
      "Incorrecto: \"turn up\" significa \"aparecer\".",
      "Incorrecto: \"bring about\" significa \"provocar\".",
      "Incorrecto: \"take over\" significa \"tomar el control\".",
      "Opción correcta: \"track down\" = \"localizar\"."
    ],
    "tip_es": "Investigación de ciberseguridad: \"track down the root cause / entry point\".",
    "human_rule": "Localizar tras buscar ➔ track down.",
    "trigger_anchor": "trying to ______ the exact point of entry ➔ track down",
    "spanglish_trap": "Elegir turn up por \"encontrar\". Turn up es que algo aparezca por sí solo.",
    "ref": null
  },
  {
    "id": "bank-g20-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "It was the unvalidated user input, not the database query parser, ______ allowed the SQL injection attack to succeed.",
    "options": [
      "that",
      "which",
      "who",
      "what"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"It was the unvalidated user input, not the query parser, ______ allowed…\": se destaca una cosa.\n• Regla: It was + cosa destacada + that…\n• Descartas: who es para personas; what no sigue a una cosa nombrada; which también es posible, pero se busca that.",
    "why_wrong": [
      "Opción correcta: \"It was the user input that allowed…\" = \"fue la entrada lo que permitió…\".",
      "Incorrecto: which también se usa, pero en la frase hendida se busca that.",
      "Incorrecto: who es para personas.",
      "Incorrecto: what no sigue a una cosa ya nombrada."
    ],
    "tip_es": "It-Cleft de diagnóstico: \"It was [componente culpable] THAT [provocó el error]\".",
    "human_rule": "It was + cosa destacada + THAT.",
    "trigger_anchor": "It was the unvalidated input, not the parser, ______ allowed the attack ➔ that",
    "spanglish_trap": "Poner what por \"lo que\". Con It was + cosa, that.",
    "ref": null
  },
  {
    "id": "bank-g20-02",
    "section": "UE",
    "objective": "UE5",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What we need to prevent future distributed denial-of-service outages ______ an enterprise-grade web application firewall.",
    "options": [
      "are",
      "is",
      "being",
      "have been"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"What we need to prevent… ______ an enterprise-grade firewall\": falta el verbo.\n• Regla: What + frase + is + lo destacado (singular).\n• Descartas: are y \"have been\" no concuerdan; being no es un verbo conjugado.",
    "why_wrong": [
      "Incorrecto: are no concuerda con What (singular).",
      "Opción correcta: \"What we need… is a firewall\" = \"lo que necesitamos… es un firewall\".",
      "Incorrecto: being no es un verbo conjugado.",
      "Incorrecto: \"have been\" no concuerda ni encaja."
    ],
    "tip_es": "Pseudo-cleft con \"What\": \"What we need IS [la solución]\".",
    "human_rule": "What… is + lo destacado.",
    "trigger_anchor": "What we need to prevent DDoS outages ______ a firewall ➔ is",
    "spanglish_trap": "Elegir are por \"unos firewalls\". Lo que concuerda es What: is.",
    "ref": null
  },
  {
    "id": "bank-g21-01",
    "section": "UE",
    "objective": "UE4",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If any worker node in the Kubernetes cluster becomes unhealthy, the control plane ______ traffic to healthy replicas instantly.",
    "options": [
      "rerouted",
      "will reroute",
      "reroutes",
      "would reroute"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"If any worker node becomes unhealthy, the control plane ______ traffic instantly\": un automatismo.\n• Regla: automatismo ➔ presente (reroutes).\n• Descartas: rerouted es pasado; will reroute suena a promesa; would reroute es hipotético.",
    "why_wrong": [
      "Incorrecto: rerouted es pasado.",
      "Incorrecto: will reroute suena a promesa.",
      "Opción correcta: \"reroutes\" = \"reenruta\" (siempre que pase).",
      "Incorrecto: would reroute es hipotético."
    ],
    "tip_es": "Comportamiento autónomo de clústeres: [If + Presente, control plane + PRESENTE].",
    "human_rule": "Un automatismo ➔ if + presente, presente.",
    "trigger_anchor": "If any node becomes unhealthy, the control plane ______ traffic ➔ reroutes",
    "spanglish_trap": "Poner will. Si pasa cada vez, presente.",
    "ref": null
  },
  {
    "id": "bank-g21-02",
    "section": "UE",
    "objective": "UE1",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unless the customer ______ the staging hotfix before 17:00 UTC, the production release window will be postponed until Tuesday.",
    "options": [
      "is signing off",
      "will sign off on",
      "signed off on",
      "signs off on"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"Unless the customer ______ the hotfix before 17:00 UTC\": una condición futura.\n• Regla: después de unless, el presente ➔ signs off on.\n• Descartas: \"is signing off on\" y \"will sign off on\" no se usan tras unless; \"signed off on\" es pasado.",
    "why_wrong": [
      "Incorrecto: \"is signing off\" no se usa para una condición.",
      "Incorrecto: después de unless no va will.",
      "Incorrecto: \"signed off\" es pasado.",
      "Opción correcta: \"unless the customer signs off on\" = \"a menos que el cliente apruebe\"."
    ],
    "tip_es": "Condiciones de release: [Unless + Sujeto + PRESENTE], el despliegue se pospondrá.",
    "human_rule": "unless + presente.",
    "trigger_anchor": "Unless the customer ______ the hotfix before 17:00 ➔ signs off on",
    "spanglish_trap": "Poner will. Después de unless, el presente.",
    "ref": null
  }
];
