import { Question } from '../types';
import { EXPANDED_PRACTICE_QUESTIONS } from './practiceQuestionsExpanded';

/**
 * Dedicated Practice Questions Bank
 * 
 * IMPORTANT: These questions are strictly used for daily practice drills, topic memorization,
 * and skill reinforcement. They are NEVER used in the official Diagnostic or Mock Exams
 * to prevent question leakage and ensure exam readiness remains authentic ("sin trampas").
 */
const BASE_PRACTICE_QUESTIONS: Question[] = [
  {
    "id": "prac-g01-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the postmortem review, the incident commander noted that ______ the distributed denial-of-service attack originated from a previously uncataloged IoT botnet.",
    "options": [
      "it is believed that",
      "is believed that",
      "the attack is believed that",
      "it is believed to"
    ],
    "answer": 0,
    "why_correct": "• Pista: lo que sigue es una frase completa con su propio sujeto (\"the attack originated\").\n• Regla: \"se cree que + frase completa\" ➔ It is believed THAT…\n• Descartas: sin \"it\" la frase no tiene sujeto; \"the attack is believed that\" mezcla dos estructuras; \"to\" va solo cuando la cosa va primero.",
    "why_wrong": [
      "Opción correcta: \"It is believed that…\" abre con \"it\" y sigue con una frase completa.",
      "Incorrecto: falta \"it\"; en inglés la frase no puede empezar sin sujeto.",
      "Incorrecto: pone \"the attack\" como sujeto y luego usa \"that\"; con that se usa It is believed that.",
      "Incorrecto: \"to\" va cuando la cosa va primero (The attack is believed to…), no después de \"it is believed\" con una frase completa."
    ],
    "tip_es": "Si la oración contiene una cláusula técnica completa subordinada después del verbo de reporte, la fórmula B2 obligatoria es \"It + is [believed/reported/expected] + THAT\".",
    "human_rule": "\"Se cree que + frase completa\" ➔ It is believed that…",
    "trigger_anchor": "______ the attack originated (se cree que + frase) ➔ it is believed that",
    "spanglish_trap": "En español \"se cree que\" empieza sin sujeto; en inglés hace falta \"it\" delante.",
    "ref": null
  },
  {
    "id": "prac-g01-02",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Under sustained network congestion, the synthetic stress tests ______ false positive latency alerts in the staging telemetry pipeline.",
    "options": [
      "are known that they produce",
      "are known to produce",
      "is known to produce",
      "are known producing"
    ],
    "answer": 1,
    "why_correct": "• Pista: la frase empieza por la cosa (\"the tests\", plural) y no hay \"it\".\n• Regla: cosa primero + \"se sabe que\" ➔ are known TO + verbo.\n• Descartas: \"that they produce\" sobra; is no concuerda con tests; \"known producing\" no existe.",
    "why_wrong": [
      "Incorrecto: con la cosa al principio no va \"that they\"; va \"to\" + verbo.",
      "Opción correcta: are known to produce = \"se sabe que producen\".",
      "Incorrecto: is es singular, y tests es plural.",
      "Incorrecto: \"known producing\" no es una forma que exista."
    ],
    "tip_es": "Con sujeto técnico inicial (\"The tests / The servers\"), la construcción obligatoria es [are known + TO + verbo en forma base].",
    "human_rule": "Cosa primero ➔ are / is known TO + verbo (The tests are known to produce…).",
    "trigger_anchor": "the tests ______ alerts (cosa primero) ➔ are known to produce",
    "spanglish_trap": "Copiar el \"se sabe que ellas producen\" del español y escribir \"known that they produce\". Con la cosa delante va to.",
    "ref": null
  },
  {
    "id": "prac-g01-03",
    "section": "UE",
    "objective": "UE3",
    "topic": "G01",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The unauthorized API gateway breach ______ from an unpatched third-party cryptographic library deployed six months ago.",
    "options": [
      "is understood to originate",
      "is understood that it originated",
      "is understood to have originated",
      "understands to have originated"
    ],
    "answer": 2,
    "why_correct": "• Pista: se habla de algo que ya ocurrió (\"six months ago\") y la frase empieza por la cosa (\"the breach\").\n• Regla: cosa primero + hecho pasado ➔ is understood TO HAVE + 3.ª forma (to have originated).\n• Descartas: \"to originate\" habla del presente; \"that it originated\" es otra estructura; understands hace que la brecha entienda.",
    "why_wrong": [
      "Incorrecto: \"to originate\" habla del presente; el origen fue hace seis meses.",
      "Incorrecto: con la brecha al principio no va \"that it\"; va \"to have\" + verbo.",
      "Opción correcta: \"to have originated\" = \"se originó\" (ya pasó).",
      "Incorrecto: understands haría que la brecha entendiera algo."
    ],
    "tip_es": "Si el reporte es presente (\"is understood / is believed\") pero la acción ocurrió antes en el pasado, usa Perfect Infinitive: [to have + participio].",
    "human_rule": "Cosa primero + algo que ya pasó ➔ is understood to have + 3.ª forma.",
    "trigger_anchor": "breach ______ from a library deployed six months ago (ya pasó) ➔ is understood to have originated",
    "spanglish_trap": "Usar \"to originate\" por costumbre. Si lo que se cree ya pasó, hay que decir \"to have originated\".",
    "ref": null
  },
  {
    "id": "prac-g01-04",
    "section": "UE",
    "objective": "UE5",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ that the rollout of hardware-based multi-factor authentication will reduce phishing credential harvesting by more than ninety percent.",
    "options": [
      "It anticipates",
      "The rollout is anticipated",
      "Is anticipated",
      "It is anticipated"
    ],
    "answer": 3,
    "why_correct": "• Pista: lo que sigue a \"that\" es una frase completa.\n• Regla: \"se espera que + frase\" ➔ It is anticipated THAT…\n• Descartas: \"It anticipates\" hace que \"it\" anticipe; sin \"it\" falta el sujeto; con \"The rollout\" delante no va \"that\".",
    "why_wrong": [
      "Incorrecto: \"It anticipates\" es activa; \"it\" no puede anticipar nada.",
      "Incorrecto: con \"The rollout\" al principio no va \"that\"; va \"to\" + verbo.",
      "Incorrecto: falta \"it\"; la frase empieza sin sujeto.",
      "Opción correcta: \"It is anticipated that…\" = \"se espera que…\"."
    ],
    "tip_es": "Identifica la estructura: \"It is [anticipated / estimated / reported] + that + [cláusula completa]\".",
    "human_rule": "\"Se espera que…\" ➔ It is anticipated that…",
    "trigger_anchor": "______ that the rollout will reduce (se espera que) ➔ it is anticipated",
    "spanglish_trap": "Escribir la frase sin \"it\", como en español. En inglés siempre lleva it al empezar.",
    "ref": null
  },
  {
    "id": "prac-g01-05",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Due to outdated firmware, several core enterprise switches ______ vulnerable to remote buffer overflow exploits.",
    "options": [
      "are thought to be",
      "thought to be",
      "are thought that they are",
      "it is thought to be"
    ],
    "answer": 0,
    "why_correct": "• Pista: la frase empieza por la cosa (\"switches\", plural) y es una creencia.\n• Regla: cosa primero ➔ are thought TO BE.\n• Descartas: sin \"are\" falta el verbo; \"that they are\" duplica el sujeto; con \"it is\" ya no puede haber \"switches\" delante.",
    "why_wrong": [
      "Opción correcta: \"are thought to be\" = \"se cree que son\".",
      "Incorrecto: falta \"are\"; sin él no hay verbo principal.",
      "Incorrecto: con la cosa al principio va \"to be\", no \"that they are\".",
      "Incorrecto: \"it is thought\" no puede ir después de \"switches\"; serían dos sujetos."
    ],
    "tip_es": "Revisa la concordancia plural: \"Several switches are thought to be\", nunca \"is thought\".",
    "human_rule": "Cosa primero ➔ are / is thought to be + adjetivo.",
    "trigger_anchor": "switches ______ vulnerable (cosa primero, plural) ➔ are thought to be",
    "spanglish_trap": "Olvidar el \"are\" porque en español queda sobrentendido. En inglés hace falta.",
    "ref": null
  },
  {
    "id": "prac-g01-06",
    "section": "UE",
    "objective": "UE4",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The legacy database cluster ______ under peak transactional loads exceeding twelve thousand queries per second.",
    "options": [
      "is expected that fails",
      "is expected to fail",
      "expects to fail",
      "is expected fail"
    ],
    "answer": 1,
    "why_correct": "• Pista: la cosa va primero (\"the cluster\") y es una predicción.\n• Regla: cosa primero ➔ is expected TO + verbo.\n• Descartas: \"that fails\" sobra; expects hace que el clúster espere algo; \"expected fail\" no tiene to.",
    "why_wrong": [
      "Incorrecto: con la cosa al principio no va \"that\"; va \"to\" + verbo.",
      "Opción correcta: \"is expected to fail\" = \"se espera que falle\".",
      "Incorrecto: expects significa que el clúster espera algo; aquí lo esperan los demás.",
      "Incorrecto: falta \"to\" antes del verbo."
    ],
    "tip_es": "Memoriza la fórmula: [Subject + is/are expected + TO + verbo base]. Jamás omitas \"to\" ni uses \"that\".",
    "human_rule": "Cosa primero ➔ is expected to + verbo.",
    "trigger_anchor": "cluster ______ under peak loads (cosa primero) ➔ is expected to fail",
    "spanglish_trap": "Omitir to (\"is expected fail\"). Después de expected siempre va to.",
    "ref": null
  },
  {
    "id": "prac-g01-07",
    "section": "UE",
    "objective": "UE3",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "During the quarterly ISO 27001 audit, ______ that three remote backup tapes had been transported without cryptographic sealing.",
    "options": [
      "the tapes were reported that",
      "was reported",
      "it was reported",
      "it reported"
    ],
    "answer": 2,
    "why_correct": "• Pista: lo que sigue a \"that\" es una frase completa y ocurrió en el pasado (la auditoría).\n• Regla: \"se informó que…\" ➔ It WAS reported THAT…\n• Descartas: \"the tapes were reported that\" mezcla estructuras; sin \"it\" falta el sujeto; \"it reported\" hace que \"it\" informe.",
    "why_wrong": [
      "Incorrecto: con \"the tapes\" como sujeto no va \"that\"; va \"to\".",
      "Incorrecto: falta \"it\"; la frase no puede empezar sin sujeto.",
      "Opción correcta: \"it was reported that…\" = \"se informó que…\".",
      "Incorrecto: \"it reported\" es activa; \"it\" no puede informar."
    ],
    "tip_es": "En el pasado, la fórmula impersonal cambia a \"It WAS [reported / found / estimated] + that\".",
    "human_rule": "En pasado: It was reported that…",
    "trigger_anchor": "______ that three tapes had been transported (se informó que) ➔ it was reported",
    "spanglish_trap": "Poner el verbo en activa (\"it reported\") por traducir \"se informó\". Es pasiva: was reported.",
    "ref": null
  },
  {
    "id": "prac-g01-08",
    "section": "UE",
    "objective": "UE2",
    "topic": "G01",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Following the perimeter scan, unpatched legacy VPN concentrators ______ targeted by automated brute-force credential stuffing scripts.",
    "options": [
      "believed to be",
      "is believed to be",
      "are believed that they are",
      "are believed to be"
    ],
    "answer": 3,
    "why_correct": "• Pista: la cosa va primero y es plural (\"concentrators\").\n• Regla: cosa primero ➔ are believed TO BE.\n• Descartas: sin \"are\" falta el verbo; is no concuerda con plural; \"that they are\" no va con la cosa delante.",
    "why_wrong": [
      "Incorrecto: falta \"are\"; sin él no hay verbo principal.",
      "Incorrecto: is es singular y concentrators es plural.",
      "Incorrecto: con la cosa al principio va \"to be\", no \"that they are\".",
      "Opción correcta: \"are believed to be\" = \"se cree que son\"."
    ],
    "tip_es": "Verifica siempre si el sujeto técnico inicial es singular o plural para elegir \"is\" o \"are\".",
    "human_rule": "Cosa plural primero ➔ are believed to be.",
    "trigger_anchor": "concentrators ______ targeted (plural) ➔ are believed to be",
    "spanglish_trap": "Usar is por inercia. Mira si la cosa es plural: concentrators ➔ are.",
    "ref": null
  },
  {
    "id": "prac-g02-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The senior DevOps engineer inspected the Kubernetes manifest ______ configuration had triggered the cascading ingress failure.",
    "options": [
      "whose",
      "which",
      "that",
      "who's"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco viene \"configuration\", algo que pertenece al manifiesto (\"cuya configuración\").\n• Regla: \"cuyo / cuya\" ➔ whose.\n• Descartas: which y that no dicen de quién es; who's significa \"who is\".",
    "why_wrong": [
      "Opción correcta: whose une el manifiesto con su configuración (\"cuya configuración\").",
      "Incorrecto: which conecta con una cosa, pero no dice a quién pertenece lo que viene después.",
      "Incorrecto: that no expresa posesión.",
      "Incorrecto: who's significa \"who is\" o \"who has\"; no sirve para decir \"cuya\"."
    ],
    "tip_es": "Usa \"whose\" para expresar posesión (\"cuyo/cuya/cuyos/cuyas\") tanto para personas como para artefactos técnicos.",
    "human_rule": "Para \"el manifiesto cuya configuración…\", en inglés se dice whose, aunque hables de una cosa.",
    "trigger_anchor": "manifest ______ configuration (cuya configuración) ➔ whose",
    "spanglish_trap": "Pensar que whose es solo para personas. También vale para cosas y sistemas: \"the manifest whose configuration…\".",
    "ref": null
  },
  {
    "id": "prac-g02-02",
    "section": "UE",
    "objective": "UE4",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "We need to migrate all legacy microservices to the new server cluster, ______ is hosted in an ISO-certified European availability zone.",
    "options": [
      "that",
      "which",
      "what",
      "where"
    ],
    "answer": 1,
    "why_correct": "• Pista: hay una coma antes del hueco y se habla de una cosa (el clúster) con \"el cual\".\n• Regla: después de una coma, para cosas se usa which, nunca that.\n• Descartas: that no va después de coma; what no se usa si ya nombraste la cosa; where es para lugares.",
    "why_wrong": [
      "Incorrecto: that no se usa después de una coma.",
      "Opción correcta: which, porque hay coma y se habla de una cosa (el clúster).",
      "Incorrecto: what no se usa cuando ya nombraste la cosa (\"the new server cluster\").",
      "Incorrecto: where se usa para lugares con una frase completa detrás; aquí detrás va directamente \"is hosted\"."
    ],
    "tip_es": "Regla de oro B2: después de una coma descriptiva, usa siempre \"which\", nunca \"that\".",
    "human_rule": "Coma + cosa ➔ which. Nunca that después de una coma.",
    "trigger_anchor": "cluster, ______ is hosted (coma + cosa) ➔ which",
    "spanglish_trap": "En español \"que\" sirve para todo, y por eso sale that. Después de una coma el inglés pide which.",
    "ref": null
  },
  {
    "id": "prac-g02-03",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The penetration tester identified three staging subnets ______ default administrative passwords were still active.",
    "options": [
      "whose",
      "which",
      "where",
      "that"
    ],
    "answer": 2,
    "why_correct": "• Pista: nombras un lugar de red (\"subnets\") y después viene una frase completa (\"passwords were still active\").\n• Regla: \"en las que / donde\" ➔ where.\n• Descartas: whose diría que las contraseñas son \"de\" las subredes; which y that necesitarían \"in\" para decir \"en las que\".",
    "why_wrong": [
      "Incorrecto: whose diría que las contraseñas son \"de\" las subredes. Aquí lo importante es que estaban en ellas.",
      "Incorrecto: which necesitaría una palabra más (\"in which\") para decir \"en las que\".",
      "Opción correcta: where = \"donde\", para un lugar de red seguido de una frase completa.",
      "Incorrecto: that tampoco indica lugar; haría falta \"that … in\"."
    ],
    "tip_es": "Para entornos, subredes, repositorios o servidores donde ocurren acciones: usa \"where\" o \"in which\".",
    "human_rule": "Un lugar (subred, servidor, entorno) + una frase completa ➔ where o in which.",
    "trigger_anchor": "subnets ______ passwords were active (en las que) ➔ where",
    "spanglish_trap": "Querer poner which porque \"las subredes\" es una cosa. Si en español dirías \"en las que\" o \"donde\", es where.",
    "ref": null
  },
  {
    "id": "prac-g02-04",
    "section": "UE",
    "objective": "UE3",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "All production container images ______ fail cryptographic signature verification must be blocked by the admission controller.",
    "options": [
      "whose",
      "what",
      "whom",
      "that"
    ],
    "answer": 3,
    "why_correct": "• Pista: no hay coma y lo que sigue (\"fail…\") dice qué imágenes exactamente: las que fallan.\n• Regla: \"que\" sin coma, para cosas ➔ that (o which).\n• Descartas: whose y whom no encajan, porque no hay posesión ni personas; what no se usa si ya nombraste la cosa.",
    "why_wrong": [
      "Incorrecto: whose expresa posesión (\"cuyo\"); aquí \"fail\" es una acción, no algo que pertenezca a las imágenes.",
      "Incorrecto: what no se usa cuando ya nombraste la cosa (\"images\").",
      "Incorrecto: whom es para personas.",
      "Opción correcta: that, sin coma, para decir cuáles imágenes (las que fallan)."
    ],
    "tip_es": "En oraciones especificativas sin coma (\"Todas las imágenes que fallan...\"), usa \"that\".",
    "human_rule": "\"Todas las imágenes que fallan…\" (sin coma) ➔ that.",
    "trigger_anchor": "images ______ fail (sin coma, cosa) ➔ that",
    "spanglish_trap": "Dudar entre that y which. Sin coma, that es la opción más segura para cosas.",
    "ref": null
  },
  {
    "id": "prac-g02-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G02",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The database cluster, the latency ______ had spiked to fifteen seconds, was automatically restarted by the watchdog daemon.",
    "options": [
      "of which",
      "whose",
      "which",
      "that"
    ],
    "answer": 0,
    "why_correct": "• Pista: ya hay \"the latency\" antes del hueco y falta decir \"del cual\" para unirla al clúster.\n• Regla: en textos formales, \"the latency of which\" = \"cuya latencia\".\n• Descartas: whose sobra después de \"the latency\" (sería \"whose latency\"); which y that solos no expresan posesión.",
    "why_wrong": [
      "Opción correcta: of which completa la idea \"la latencia del cual\".",
      "Incorrecto: whose ya trae el \"de quién es\" y no se usa después de \"the latency\" (sería \"whose latency\").",
      "Incorrecto: which solo, sin \"of\", no expresa posesión.",
      "Incorrecto: that no se usa con \"of\" delante ni después de una coma."
    ],
    "tip_es": "Si ves \"the [sustantivo] ______\": la estructura formal de posesión es \"the [sustantivo] OF WHICH\".",
    "human_rule": "Formal: \"the latency of which\" (= cuya latencia). Si ves \"the + cosa\" antes del hueco, piensa en of which.",
    "trigger_anchor": "the latency ______ had spiked (la latencia del cual) ➔ of which",
    "spanglish_trap": "Poner whose por costumbre. Si ya hay \"the latency\" escrito, whose sobra; la forma formal es of which.",
    "ref": null
  },
  {
    "id": "prac-g02-06",
    "section": "UE",
    "objective": "UE2",
    "topic": "G02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The remote engineer ______ credentials were compromised during the phishing campaign has been notified by the security team.",
    "options": [
      "who's",
      "whose",
      "whom",
      "which"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"credentials\", algo que pertenece al ingeniero (\"cuyas credenciales\").\n• Regla: \"cuyo / cuyas\" ➔ whose.\n• Descartas: who's es \"who is\"; whom no expresa posesión; which no se usa con personas.",
    "why_wrong": [
      "Incorrecto: who's significa \"who is\" y suena igual que whose; es la trampa de siempre.",
      "Opción correcta: whose une al ingeniero con sus credenciales (\"cuyas credenciales\").",
      "Incorrecto: whom es \"a quien\"; no sirve para decir \"cuyo\".",
      "Incorrecto: which no se usa con personas."
    ],
    "tip_es": "Ante un sustantivo perteneciente a un usuario (\"engineer ______ credentials\"), la respuesta es siempre \"whose\".",
    "human_rule": "\"El ingeniero cuyas credenciales…\" ➔ the engineer whose credentials…",
    "trigger_anchor": "engineer ______ credentials (cuyas credenciales) ➔ whose",
    "spanglish_trap": "Escribir who's porque suena igual. Si cabe \"cuyo\", es whose.",
    "ref": null
  },
  {
    "id": "prac-g03-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "During the forensic analysis, the rogue process behaved as though it ______ legitimate kernel-level access to the memory pool.",
    "options": [
      "is having",
      "has",
      "had",
      "will have"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"behaved as though it ______ legitimate access\": el proceso actuó como si lo tuviera, pero no lo tenía.\n• Regla: as though + pasado ➔ had.\n• Descartas: \"is having\", has y \"will have\" hablan de algo real o futuro.",
    "why_wrong": [
      "Incorrecto: \"is having\" habla de algo real.",
      "Incorrecto: has habla de algo real.",
      "Opción correcta: \"as though it had access\" = \"como si tuviera acceso\".",
      "Incorrecto: \"will have\" habla del futuro."
    ],
    "tip_es": "Tras \"as if / as though\" con situaciones falsas o simuladas en IT, retrocede un tiempo verbal: usa Past Simple (\"as though it had / were\").",
    "human_rule": "as though + pasado (had) ➔ \"como si tuviera\".",
    "trigger_anchor": "behaved as though it ______ legitimate access ➔ had",
    "spanglish_trap": "Poner has porque \"como si tiene\". Lo irreal va en pasado.",
    "ref": null
  },
  {
    "id": "prac-g03-02",
    "section": "UE",
    "objective": "UE1",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The unpatched microservice responded to the malformed payload as if it ______ an authenticated administrator.",
    "options": [
      "being",
      "is",
      "will be",
      "were"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"as if it ______ an authenticated administrator\": respondió como si lo fuera, pero no lo era.\n• Regla: as if + irreal ➔ were.\n• Descartas: being, is y \"will be\" no forman el irreal.",
    "why_wrong": [
      "Incorrecto: being no es una forma conjugada.",
      "Incorrecto: is habla de algo real.",
      "Incorrecto: \"will be\" habla del futuro.",
      "Opción correcta: \"as if it were an administrator\" = \"como si fuera administrador\"."
    ],
    "tip_es": "Con \"as if\" en estados irreales o suplantaciones, la forma formal es siempre \"were\" (incluso con \"it / he / she\").",
    "human_rule": "as if it were… (aunque sea singular).",
    "trigger_anchor": "as if it ______ an authenticated administrator ➔ were",
    "spanglish_trap": "Decir \"as if it was\". En lo irreal, were con todas las personas.",
    "ref": null
  },
  {
    "id": "prac-g03-03",
    "section": "UE",
    "objective": "UE3",
    "topic": "G03",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The database cluster dropped active connections as though a primary network partition ______ place, though telemetry showed nominal bandwidth.",
    "options": [
      "had taken",
      "takes",
      "will take",
      "is taking"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"as though a partition ______ place, though telemetry showed nominal bandwidth\": algo que no ocurrió antes.\n• Regla: como si hubiera ocurrido antes ➔ had + 3.ª forma (had taken).\n• Descartas: takes, \"will take\" e \"is taking\" no miran hacia atrás.",
    "why_wrong": [
      "Opción correcta: \"had taken place\" = \"hubiera ocurrido\".",
      "Incorrecto: takes es presente.",
      "Incorrecto: \"will take\" es futuro.",
      "Incorrecto: \"is taking\" es presente."
    ],
    "tip_es": "Si el evento simulado ocurrió antes del síntoma observado, usa Past Perfect: \"as though it HAD taken place\".",
    "human_rule": "as though + algo que no pasó antes ➔ had + 3.ª forma.",
    "trigger_anchor": "as though a partition ______ place ➔ had taken",
    "spanglish_trap": "Poner el presente. Para algo que \"habría pasado\", had + 3.ª forma.",
    "ref": null
  },
  {
    "id": "prac-g03-04",
    "section": "UE",
    "objective": "UE4",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The load balancer routed all traffic to a single node, as if the remaining replica instances ______ offline.",
    "options": [
      "are",
      "were",
      "have been",
      "be"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"as if the remaining replicas ______ offline\": las demás réplicas no estaban caídas.\n• Regla: as if + irreal ➔ were.\n• Descartas: are y \"have been\" hablan de algo real; be no se conjuga.",
    "why_wrong": [
      "Incorrecto: are habla de algo real.",
      "Opción correcta: \"as if the replicas were offline\" = \"como si las réplicas estuvieran caídas\".",
      "Incorrecto: \"have been\" habla de algo real.",
      "Incorrecto: be no se conjuga aquí."
    ],
    "tip_es": "Usa \"were\" tras \"as if\" para denotar que el sistema actuó bajo una falsa premisa.",
    "human_rule": "as if + irreal (plural) ➔ were.",
    "trigger_anchor": "as if the replicas ______ offline ➔ were",
    "spanglish_trap": "Poner are por el plural. Lo irreal va en pasado.",
    "ref": null
  },
  {
    "id": "prac-g03-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The junior developer spoke about the distributed ledger as though he ______ the consensus algorithm personally.",
    "options": [
      "designs",
      "has designed",
      "had designed",
      "will design"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"he spoke as though he ______ the algorithm personally\": hablaba como si lo hubiera diseñado, y no fue así.\n• Regla: como si hubiera hecho algo antes ➔ had + 3.ª forma.\n• Descartas: designs, \"has designed\" y \"will design\" no miran hacia atrás de forma irreal.",
    "why_wrong": [
      "Incorrecto: designs es presente.",
      "Incorrecto: \"has designed\" habla de algo real.",
      "Opción correcta: \"had designed\" = \"hubiera diseñado\".",
      "Incorrecto: \"will design\" es futuro."
    ],
    "tip_es": "\"Spoke as though he HAD designed\": el Past Perfect marca la falsedad temporal retrospectiva.",
    "human_rule": "as though + lo que no hizo antes ➔ had + 3.ª forma.",
    "trigger_anchor": "spoke as though he ______ the algorithm personally ➔ had designed",
    "spanglish_trap": "Poner has designed. Para lo irreal, had designed.",
    "ref": null
  },
  {
    "id": "prac-g03-06",
    "section": "UE",
    "objective": "UE2",
    "topic": "G03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The telemetry dashboard flashed red continuously, as if a catastrophic outage ______ in progress.",
    "options": [
      "has been",
      "is",
      "will be",
      "were"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"as if a catastrophic outage ______ in progress\": el panel parpadea como si hubiera una caída, pero no la hay.\n• Regla: as if + irreal ➔ were.\n• Descartas: \"has been\", is y \"will be\" hablan de algo real o futuro.",
    "why_wrong": [
      "Incorrecto: \"has been\" habla de algo real.",
      "Incorrecto: is habla de algo real.",
      "Incorrecto: \"will be\" habla del futuro.",
      "Opción correcta: \"as if an outage were in progress\" = \"como si hubiera una caída en curso\"."
    ],
    "tip_es": "Recuerda: la alarma sonaba \"como si hubiera una caída real\" -> \"as if it WERE\".",
    "human_rule": "as if + irreal ➔ were.",
    "trigger_anchor": "as if a catastrophic outage ______ in progress ➔ were",
    "spanglish_trap": "Poner is. Lo irreal va en pasado.",
    "ref": null
  },
  {
    "id": "prac-g04-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Contrary to the auditor’s initial suspicion, the security operations team ______ deploy the security hotfix before the breach window.",
    "options": [
      "did",
      "does",
      "was",
      "had"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Contrary to the auditor's suspicion…\": se contradice una duda sobre algo que sí pasó, en pasado.\n• Regla: \"sí lo hizo\" ➔ did + verbo base (did deploy).\n• Descartas: does es presente; was y had no forman el énfasis.",
    "why_wrong": [
      "Opción correcta: \"did deploy\" = \"sí desplegó\".",
      "Incorrecto: does es presente, y la frase habla del pasado.",
      "Incorrecto: was no forma el énfasis con un verbo base.",
      "Incorrecto: had no forma el énfasis con un verbo base."
    ],
    "tip_es": "Fórmula de énfasis: [Sujeto + DID + verbo en infinitivo sin to] para confirmar una acción pasada frente a dudas.",
    "human_rule": "Enfatizar \"sí lo hizo\" (pasado) ➔ did + verbo base.",
    "trigger_anchor": "Contrary to the suspicion, the team ______ deploy ➔ did",
    "spanglish_trap": "Poner el verbo en pasado (\"deployed\") sin énfasis. Para insistir en que sí pasó, did + verbo base.",
    "ref": null
  },
  {
    "id": "prac-g04-02",
    "section": "UE",
    "objective": "UE4",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Although throughput drops during replication, the primary database instance ______ maintain data consistency across all read replicas.",
    "options": [
      "do",
      "does",
      "did",
      "is"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Although throughput drops…\" y el sujeto es singular (\"the instance\"), en presente.\n• Regla: \"sí mantiene\" ➔ does + verbo base (does maintain).\n• Descartas: do no concuerda con singular; did es pasado; is no forma el énfasis.",
    "why_wrong": [
      "Incorrecto: do no concuerda con un sujeto singular.",
      "Opción correcta: \"does maintain\" = \"sí mantiene\".",
      "Incorrecto: did es pasado.",
      "Incorrecto: is no forma el énfasis con un verbo base."
    ],
    "tip_es": "En presente con sujeto singular: usa \"DOES + verbo base\" para contrastar (\"it DOES maintain\").",
    "human_rule": "Enfatizar \"sí lo hace\" (presente, singular) ➔ does + verbo base.",
    "trigger_anchor": "Although throughput drops, the instance ______ maintain ➔ does",
    "spanglish_trap": "Usar do con un sujeto singular. Con el, ella o una cosa, does.",
    "ref": null
  },
  {
    "id": "prac-g04-03",
    "section": "UE",
    "objective": "UE1",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "We rarely restart the core cluster without warning, but we ______ notify the change advisory board in this emergency.",
    "options": [
      "were",
      "do",
      "did",
      "have"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"We rarely restart…, but we ______ notify… in this emergency\": se contrasta con lo habitual, y ya ocurrió.\n• Regla: \"sí lo hicimos\" ➔ did + verbo base.\n• Descartas: were y have no forman el énfasis; do es presente.",
    "why_wrong": [
      "Incorrecto: were no forma el énfasis con un verbo base.",
      "Incorrecto: do es presente, y la emergencia ya pasó.",
      "Opción correcta: \"did notify\" = \"sí avisamos\".",
      "Incorrecto: have no forma el énfasis con un verbo base."
    ],
    "tip_es": "Usa \"did + notify\" para destacar ante el cliente que el aviso sí se envió.",
    "human_rule": "Contrastar con lo habitual: \"pero esta vez sí…\" ➔ did + verbo base.",
    "trigger_anchor": "We rarely restart…, but we ______ notify in this emergency ➔ did",
    "spanglish_trap": "Dejar el verbo sin énfasis. Para destacar el contraste, did + verbo base.",
    "ref": null
  },
  {
    "id": "prac-g04-04",
    "section": "UE",
    "objective": "UE5",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Management was skeptical, but the migrated serverless pipeline ______ reduce operational compute expenses by thirty percent.",
    "options": [
      "has",
      "does",
      "was",
      "did"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"Management was skeptical, but…\": se contradice la duda con un hecho pasado.\n• Regla: \"sí redujo\" ➔ did + verbo base.\n• Descartas: has, does y was no forman el énfasis en pasado.",
    "why_wrong": [
      "Incorrecto: has no forma el énfasis con un verbo base.",
      "Incorrecto: does es presente.",
      "Incorrecto: was no forma el énfasis con un verbo base.",
      "Opción correcta: \"did reduce\" = \"sí redujo\"."
    ],
    "tip_es": "Tras \"was skeptical / doubted\", el énfasis pasado se marca con \"DID + verbo base\".",
    "human_rule": "\"Sí lo hizo\" (pasado) ➔ did + verbo base.",
    "trigger_anchor": "Management was skeptical, but the pipeline ______ reduce ➔ did",
    "spanglish_trap": "Elegir has porque el resultado sigue. Para el énfasis en pasado, did.",
    "ref": null
  },
  {
    "id": "prac-g04-05",
    "section": "UE",
    "objective": "UE2",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "I assure you that our senior network architects ______ review every single firewall pull request before merging.",
    "options": [
      "do",
      "does",
      "did",
      "are"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"I assure you that our architects…\": el sujeto es plural y está en presente.\n• Regla: \"sí revisan\" ➔ do + verbo base (do review).\n• Descartas: does es singular; did es pasado; are no forma el énfasis.",
    "why_wrong": [
      "Opción correcta: \"do review\" = \"sí revisan\".",
      "Incorrecto: does es para un sujeto singular.",
      "Incorrecto: did es pasado.",
      "Incorrecto: are no forma el énfasis con un verbo base."
    ],
    "tip_es": "Sujeto plural en presente con énfasis = \"DO + verbo base\".",
    "human_rule": "\"Sí lo hacen\" (presente, plural) ➔ do + verbo base.",
    "trigger_anchor": "our architects ______ review every pull request (plural) ➔ do",
    "spanglish_trap": "Usar does por costumbre. Con un sujeto plural, do.",
    "ref": null
  },
  {
    "id": "prac-g04-06",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The client insisted that we had forgotten their ticket, but our logs proved that we ______ respond within the SLA window.",
    "options": [
      "do",
      "did",
      "were",
      "had"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"our logs proved that we ______ respond\": se contradice una queja sobre algo ya pasado.\n• Regla: \"sí respondimos\" ➔ did + verbo base.\n• Descartas: do es presente; were y had no forman el énfasis.",
    "why_wrong": [
      "Incorrecto: do es presente.",
      "Opción correcta: \"did respond\" = \"sí respondimos\".",
      "Incorrecto: were no forma el énfasis con un verbo base.",
      "Incorrecto: had no forma el énfasis con un verbo base."
    ],
    "tip_es": "En disputas de SLA: \"our logs proved that we DID respond\".",
    "human_rule": "Contradecir una queja del pasado ➔ did + verbo base.",
    "trigger_anchor": "…our logs proved that we ______ respond ➔ did",
    "spanglish_trap": "Elegir had por \"habíamos\". Para insistir en lo que sí pasó, did.",
    "ref": null
  },
  {
    "id": "prac-g05-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "All cloud storage buckets must strictly comply ______ ISO 27001 data retention and encryption mandates.",
    "options": [
      "at",
      "to",
      "with",
      "on"
    ],
    "answer": 2,
    "why_correct": "• Pista: antes del hueco está \"comply\" (cumplir).\n• Regla: cumplir con ➔ comply WITH.\n• Descartas: at, to y on no van con comply.",
    "why_wrong": [
      "Incorrecto: con comply no va \"at\".",
      "Incorrecto: con comply no va \"to\" (con conform sí).",
      "Opción correcta: \"comply with\" = \"cumplir con\".",
      "Incorrecto: con comply no va \"on\"."
    ],
    "tip_es": "Diferencia clave B2: \"comply WITH\" pero \"adhere TO\". Memorízalas en pareja.",
    "human_rule": "\"Cumplir con\" ➔ comply WITH.",
    "trigger_anchor": "must strictly comply ______ ISO 27001 ➔ with",
    "spanglish_trap": "Poner to por analogía con adhere to. Comply va con WITH.",
    "ref": null
  },
  {
    "id": "prac-g05-02",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The database administrator must adhere ______ the established disaster recovery runbook during scheduled maintenance.",
    "options": [
      "in",
      "with",
      "for",
      "to"
    ],
    "answer": 3,
    "why_correct": "• Pista: antes del hueco está \"adhere\" (apegarse).\n• Regla: apegarse a ➔ adhere TO.\n• Descartas: in, with y for no van con adhere.",
    "why_wrong": [
      "Incorrecto: con adhere no va \"in\".",
      "Incorrecto: con adhere no va \"with\" (con comply sí).",
      "Incorrecto: con adhere no va \"for\".",
      "Opción correcta: \"adhere to\" = \"apegarse a\"."
    ],
    "tip_es": "\"Adhere TO guidelines\" frente a \"comply WITH standards\".",
    "human_rule": "\"Apegarse a\" ➔ adhere TO.",
    "trigger_anchor": "must adhere ______ the runbook ➔ to",
    "spanglish_trap": "Confundir adhere to con comply with. Adhere va con TO.",
    "ref": null
  },
  {
    "id": "prac-g05-03",
    "section": "UE",
    "objective": "UE3",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Legacy web servers running unpatched TLS 1.0 stacks are highly vulnerable ______ man-in-the-middle interception attacks.",
    "options": [
      "to",
      "against",
      "for",
      "with"
    ],
    "answer": 0,
    "why_correct": "• Pista: antes del hueco está \"vulnerable\".\n• Regla: vulnerable a ➔ vulnerable TO.\n• Descartas: against, for y with no van con vulnerable.",
    "why_wrong": [
      "Opción correcta: \"vulnerable to\" = \"vulnerable a\".",
      "Incorrecto: \"vulnerable against\" no se usa.",
      "Incorrecto: con vulnerable no va \"for\".",
      "Incorrecto: con vulnerable no va \"with\"."
    ],
    "tip_es": "Contraste B2: \"vulnerable TO threats\" pero \"protect AGAINST threats\".",
    "human_rule": "\"Vulnerable a\" ➔ vulnerable TO.",
    "trigger_anchor": "highly vulnerable ______ interception attacks ➔ to",
    "spanglish_trap": "Poner against por \"contra\". Con vulnerable va TO.",
    "ref": null
  },
  {
    "id": "prac-g05-04",
    "section": "UE",
    "objective": "UE4",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The zero-trust network architecture consists ______ multiple micro-segmented perimeter boundaries.",
    "options": [
      "in",
      "of",
      "from",
      "with"
    ],
    "answer": 1,
    "why_correct": "• Pista: antes del hueco está \"consists\".\n• Regla: consistir en ➔ consist OF.\n• Descartas: in, from y with no van con consist.",
    "why_wrong": [
      "Incorrecto: con consist no va \"in\", aunque en español digamos \"en\".",
      "Opción correcta: \"consists of\" = \"consiste en / está formada por\".",
      "Incorrecto: con consist no va \"from\".",
      "Incorrecto: con consist no va \"with\"."
    ],
    "tip_es": "Para componentes de un sistema (\"La arquitectura consiste en 3 nodos\"): usa \"consists OF\".",
    "human_rule": "\"Consistir en\" ➔ consist OF.",
    "trigger_anchor": "architecture consists ______ micro-segmented boundaries ➔ of",
    "spanglish_trap": "Decir \"consist in\" por el \"en\" del español. En inglés es OF.",
    "ref": null
  },
  {
    "id": "prac-g05-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Hardware security modules protect root encryption keys ______ unauthorized physical or side-channel extraction.",
    "options": [
      "to",
      "of",
      "from",
      "by"
    ],
    "answer": 2,
    "why_correct": "• Pista: antes del hueco está \"protect\" y después viene lo que se evita (extracción no autorizada).\n• Regla: proteger de ➔ protect FROM.\n• Descartas: to, of y by no van con protect.",
    "why_wrong": [
      "Incorrecto: con protect no va \"to\".",
      "Incorrecto: con protect no va \"of\".",
      "Opción correcta: \"protect from\" = \"proteger de\".",
      "Incorrecto: \"protect by\" diría quién protege, no de qué."
    ],
    "tip_es": "Fórmula de protección: \"protect [activo] FROM/AGAINST [amenaza]\".",
    "human_rule": "\"Proteger de\" ➔ protect FROM (o against).",
    "trigger_anchor": "protect keys ______ unauthorized extraction ➔ from",
    "spanglish_trap": "Poner of por el \"de\" del español. Con protect va FROM.",
    "ref": null
  },
  {
    "id": "prac-g05-06",
    "section": "UE",
    "objective": "UE2",
    "topic": "G05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unsanitized user inputs in database queries account ______ more than forty percent of web application vulnerabilities.",
    "options": [
      "in",
      "of",
      "to",
      "for"
    ],
    "answer": 3,
    "why_correct": "• Pista: antes del hueco está \"account\" (representar una parte).\n• Regla: dar cuenta de / representar ➔ account FOR.\n• Descartas: in, of y to no van con account en este sentido.",
    "why_wrong": [
      "Incorrecto: con account no va \"in\" en este sentido.",
      "Incorrecto: con account no va \"of\" en este sentido.",
      "Incorrecto: con account no va \"to\" en este sentido.",
      "Opción correcta: \"account for\" = \"representar / explicar\"."
    ],
    "tip_es": "Para porcentajes o causas en métricas IT: \"account FOR [40%] of incidents\".",
    "human_rule": "\"Representar un porcentaje\" ➔ account FOR.",
    "trigger_anchor": "inputs account ______ more than forty percent ➔ for",
    "spanglish_trap": "Poner of por \"representan el 40 %\". Con account va FOR.",
    "ref": null
  },
  {
    "id": "prac-g07-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Under no circumstances ______ production root credentials be shared over unencrypted instant messaging channels.",
    "options": [
      "should",
      "users should",
      "should users to",
      "do users should"
    ],
    "answer": 0,
    "why_correct": "• Pista: tras \"Under no circumstances\" solo falta el verbo pequeño; \"credentials be shared\" ya trae su sujeto.\n• Regla: expresión negativa + verbo pequeño (should) + sujeto + be + 3.ª forma.\n• Descartas: B y C añaden un sujeto (users) que no hace falta; D mezcla dos verbos pequeños.",
    "why_wrong": [
      "Opción correcta: should va justo después de \"Under no circumstances\".",
      "Incorrecto: \"users\" sobra; la frase ya tiene su sujeto (\"credentials\").",
      "Incorrecto: \"users to\" sobra, y \"to\" no va después de should.",
      "Incorrecto: \"do users should\" mezcla dos verbos pequeños."
    ],
    "tip_es": "Con \"Under no circumstances / Seldom / Rarely\" al inicio: invierte el auxiliar antes del sujeto: [Negativa + Auxiliar + Sujeto + Verbo].",
    "human_rule": "Under no circumstances + verbo pequeño + sujeto: Under no circumstances should credentials be shared.",
    "trigger_anchor": "Under no circumstances ______ credentials be shared ➔ should",
    "spanglish_trap": "Añadir un sujeto extra (\"users\"). Si ya hay un sujeto después del hueco, solo falta el verbo pequeño.",
    "ref": null
  },
  {
    "id": "prac-g07-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G07",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Seldom ______ such catastrophic packet corruption across a redundant enterprise fibre backbone.",
    "options": [
      "our engineers have witnessed",
      "have our engineers witnessed",
      "our engineers witnessed",
      "have witnessed our engineers"
    ],
    "answer": 1,
    "why_correct": "• Pista: la frase empieza con \"Seldom\" (casi nunca).\n• Regla: tras Seldom, el verbo pequeño (have) va antes de quien actúa: have our engineers witnessed.\n• Descartas: A y C dejan a los ingenieros primero; D rompe el orden.",
    "why_wrong": [
      "Incorrecto: \"our engineers have\" pone a quien actúa antes del verbo pequeño.",
      "Opción correcta: \"have our engineers witnessed\" = \"casi nunca han visto\".",
      "Incorrecto: \"our engineers witnessed\" tampoco adelanta el verbo pequeño.",
      "Incorrecto: \"have witnessed our engineers\" cambia el orden y dice que observaron a los ingenieros."
    ],
    "tip_es": "Fórmula de inversión: [Seldom + HAVE/DID + Sujeto + Verbo].",
    "human_rule": "Seldom + have + sujeto + 3.ª forma.",
    "trigger_anchor": "Seldom ______ such corruption (casi nunca) ➔ have our engineers witnessed",
    "spanglish_trap": "Decir \"Seldom our engineers have witnessed\", como en español (\"Raramente nuestros ingenieros han visto\").",
    "ref": null
  },
  {
    "id": "prac-g07-03",
    "section": "UE",
    "objective": "UE5",
    "topic": "G07",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Not only ______ the multi-region database cluster, but it also encrypted the local snapshot archives.",
    "options": [
      "the ransomware did corrupt",
      "the ransomware corrupted",
      "did the ransomware corrupt",
      "corrupted the ransomware"
    ],
    "answer": 2,
    "why_correct": "• Pista: la frase empieza con \"Not only\" y sigue \"but it also…\".\n• Regla: tras Not only, el verbo pequeño va antes: did + sujeto + verbo base.\n• Descartas: A y B dejan al ransomware antes del verbo; D no usa did.",
    "why_wrong": [
      "Incorrecto: \"the ransomware did\" pone a quien actúa primero.",
      "Incorrecto: \"the ransomware corrupted\" no adelanta ningún verbo pequeño.",
      "Opción correcta: \"did the ransomware corrupt\" = \"no solo corrompió\".",
      "Incorrecto: \"corrupted the ransomware\" invierte el sentido y no usa did."
    ],
    "tip_es": "\"Not only DID the system fail, but it also...\": siempre requiere auxiliar invertido en la primera parte.",
    "human_rule": "Not only + did + sujeto + verbo base, but… also…",
    "trigger_anchor": "Not only ______ the cluster, but it also… ➔ did the ransomware corrupt",
    "spanglish_trap": "Dejar el verbo en pasado (\"corrupted\") como en español. Con did, el verbo va sin -ed.",
    "ref": null
  },
  {
    "id": "prac-g07-04",
    "section": "UE",
    "objective": "UE1",
    "topic": "G07",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Rarely ______ an unpatched zero-day vulnerability weaponized within twenty-four hours of disclosure.",
    "options": [
      "does",
      "an unpatched vulnerability is",
      "it is",
      "is"
    ],
    "answer": 3,
    "why_correct": "• Pista: empieza con \"Rarely\" y después viene \"weaponized\", un verbo en 3.ª forma (algo que recibe la acción).\n• Regla: tras Rarely, el verbo pequeño va antes de quien actúa; aquí es is + sujeto + 3.ª forma.\n• Descartas: does iría con un verbo base; B y C repiten el sujeto.",
    "why_wrong": [
      "Incorrecto: does iría seguido del verbo base, no de \"weaponized\".",
      "Incorrecto: \"an unpatched vulnerability is\" repite el sujeto, que ya está después del hueco.",
      "Incorrecto: \"it is\" sobra; el sujeto ya está en la frase.",
      "Opción correcta: \"Rarely is a vulnerability weaponized\" = \"casi nunca se convierte en arma\"."
    ],
    "tip_es": "Con \"Rarely\" y voz pasiva: [Rarely + IS/WAS + Sujeto + Participio].",
    "human_rule": "Rarely + is + sujeto + 3.ª forma (cuando algo recibe la acción).",
    "trigger_anchor": "Rarely ______ a vulnerability weaponized (casi nunca) ➔ is",
    "spanglish_trap": "Elegir does por ser el verbo pequeño más común. Aquí hay un verbo en 3.ª forma (weaponized), así que va is.",
    "ref": null
  },
  {
    "id": "prac-g07-05",
    "section": "UE",
    "objective": "UE4",
    "topic": "G07",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Only after the secondary DNS root servers synced ______ to resolve the internal domain names.",
    "options": [
      "were engineers able",
      "engineers were able",
      "did engineers able",
      "could engineers to"
    ],
    "answer": 0,
    "why_correct": "• Pista: la frase empieza con \"Only after…\" (solo después de que…).\n• Regla: después de la primera parte, el verbo pequeño va antes de quien actúa: were engineers able.\n• Descartas: B deja a los ingenieros primero; C y D mezclan verbos pequeños con able.",
    "why_wrong": [
      "Opción correcta: \"were engineers able\" = \"pudieron los ingenieros\".",
      "Incorrecto: \"engineers were\" pone a quien actúa antes del verbo pequeño.",
      "Incorrecto: \"did engineers able\" mezcla did con able; con able va were.",
      "Incorrecto: \"could engineers to\" lleva \"to\" de más."
    ],
    "tip_es": "\"Only after [X happened] + DID/WERE [sujeto] [verbo]\". La inversión ocurre en la segunda cláusula.",
    "human_rule": "Only after + algo + verbo pequeño + sujeto: Only after the sync were engineers able…",
    "trigger_anchor": "Only after the servers synced ______ to resolve ➔ were engineers able",
    "spanglish_trap": "Pensar que el verbo pequeño solo se adelanta al empezar la frase. Con \"Only after\", se adelanta en la segunda parte.",
    "ref": null
  },
  {
    "id": "prac-g07-06",
    "section": "UE",
    "objective": "UE2",
    "topic": "G07",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Scarcely ______ the firmware update when the redundant power supply tripped.",
    "options": [
      "the engineers had completed",
      "had the engineers completed",
      "did the engineers completed",
      "have the engineers completed"
    ],
    "answer": 1,
    "why_correct": "• Pista: Scarcely al inicio y después viene \"when\" (apenas… cuando).\n• Regla: Scarcely + had + sujeto + 3.ª forma + when.\n• Descartas: A deja a los ingenieros primero; C y D usan did / have, que no son para \"apenas… cuando\".",
    "why_wrong": [
      "Incorrecto: \"the engineers had\" pone a quien actúa antes del verbo pequeño.",
      "Opción correcta: \"had the engineers completed… when\" = \"apenas habían completado… cuando\".",
      "Incorrecto: did no se usa en \"apenas… cuando\"; va had.",
      "Incorrecto: have no encaja; el patrón pide had."
    ],
    "tip_es": "Patrón clásico de examen: \"Scarcely HAD [sujeto] [participio] WHEN...\".",
    "human_rule": "Scarcely / Hardly + had + sujeto + 3.ª forma + when…",
    "trigger_anchor": "Scarcely ______ the update when… (apenas… cuando) ➔ had the engineers completed",
    "spanglish_trap": "Usar did porque es el verbo pequeño habitual. Con \"apenas… cuando\" va had.",
    "ref": null
  },
  {
    "id": "prac-g09-01",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Would you mind ______ the gateway configuration file so our support team can inspect the routing table?",
    "options": [
      "upload",
      "to upload",
      "uploading",
      "uploaded"
    ],
    "answer": 2,
    "why_correct": "• Pista: la frase empieza con \"Would you mind…\".\n• Regla: Would you mind + verbo con -ing.\n• Descartas: upload, \"to upload\" y uploaded no van después de mind.",
    "why_wrong": [
      "Incorrecto: después de mind va -ing, no el verbo base.",
      "Incorrecto: después de mind no va \"to\".",
      "Opción correcta: \"mind uploading\" = \"te importaría subir\".",
      "Incorrecto: después de mind va -ing, no el pasado."
    ],
    "tip_es": "Fórmula de cortesía esencial en soporte: \"Would you mind + VERBO-ING\". Jamás uses \"to upload\".",
    "human_rule": "Would you mind + verbo con -ing.",
    "trigger_anchor": "Would you mind ______ the configuration file? ➔ uploading",
    "spanglish_trap": "Poner to por el infinitivo del español. Con mind va -ing.",
    "ref": null
  },
  {
    "id": "prac-g09-02",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Could you possibly ______ the API access token while our team conducts the perimeter audit?",
    "options": [
      "regenerated",
      "regenerating",
      "to regenerate",
      "regenerate"
    ],
    "answer": 3,
    "why_correct": "• Pista: la frase empieza con \"Could you possibly…\".\n• Regla: Could you possibly + verbo sin to.\n• Descartas: regenerated, regenerating y \"to regenerate\" no van después de could.",
    "why_wrong": [
      "Incorrecto: después de could va el verbo base, no el pasado.",
      "Incorrecto: después de could va el verbo base, no -ing.",
      "Incorrecto: después de could no va \"to\".",
      "Opción correcta: \"could you possibly regenerate\" = \"¿podrías regenerar?\"."
    ],
    "tip_es": "Contraste de cortesía B2: \"Would you mind REGENERATING\" frente a \"Could you possibly REGENERATE\".",
    "human_rule": "Could you possibly + verbo base.",
    "trigger_anchor": "Could you possibly ______ the token? ➔ regenerate",
    "spanglish_trap": "Poner -ing o to. Con could, el verbo va tal cual.",
    "ref": null
  },
  {
    "id": "prac-g09-03",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "I was wondering if you ______ review the attached penetration test findings before our client sync.",
    "options": [
      "could",
      "can",
      "will",
      "are able"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"I was wondering if you ______ review…\" es una petición suave.\n• Regla: I was wondering if you could + verbo base.\n• Descartas: can, will y \"are able\" son más directos o no encajan.",
    "why_wrong": [
      "Opción correcta: \"if you could review\" = \"si podrías revisar\".",
      "Incorrecto: can es más directo; aquí se suaviza con could.",
      "Incorrecto: will es más directo y no se usa tras \"I was wondering if\".",
      "Incorrecto: \"are able\" necesita \"to\" y no suaviza igual."
    ],
    "tip_es": "Fórmula diplomática de correo: \"I was wondering if you COULD review...\".",
    "human_rule": "\"Me preguntaba si podrías…\" ➔ I was wondering if you could…",
    "trigger_anchor": "I was wondering if you ______ review… ➔ could",
    "spanglish_trap": "Usar can porque \"puedes\". Para suavizar, could.",
    "ref": null
  },
  {
    "id": "prac-g09-04",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Would you be so kind ______ provide the full stack trace from the crash dump directory?",
    "options": [
      "to",
      "as to",
      "that",
      "of"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Would you be so kind…\" y después viene un verbo.\n• Regla: Would you be so kind AS TO + verbo.\n• Descartas: to, that y of no completan esta expresión.",
    "why_wrong": [
      "Incorrecto: la expresión lleva \"as to\", no solo \"to\".",
      "Opción correcta: \"so kind as to provide\" = \"tan amable de proporcionar\".",
      "Incorrecto: after \"so kind\" no va \"that\".",
      "Incorrecto: after \"so kind\" no va \"of\"."
    ],
    "tip_es": "Memoriza la fórmula fija de nivel B2: \"Would you be so kind AS TO provide...\".",
    "human_rule": "\"¿Serías tan amable de…?\" ➔ Would you be so kind AS TO + verbo.",
    "trigger_anchor": "Would you be so kind ______ provide… ➔ as to",
    "spanglish_trap": "Poner solo to por el \"de\" del español. La expresión fija es as to.",
    "ref": null
  },
  {
    "id": "prac-g09-05",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "We would appreciate ______ if you could confirm the database failover parameters by end of day.",
    "options": [
      "this",
      "that",
      "it",
      "so"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"We would appreciate ______ if you could…\": appreciate necesita un objeto.\n• Regla: would appreciate IT if…\n• Descartas: this, that y so no funcionan como el objeto de appreciate aquí.",
    "why_wrong": [
      "Incorrecto: \"appreciate this if\" no es la forma fija.",
      "Incorrecto: \"appreciate that if\" no es la forma fija.",
      "Opción correcta: \"would appreciate it if\" = \"agradeceríamos que\".",
      "Incorrecto: \"appreciate so if\" no existe."
    ],
    "tip_es": "Frase obligatoria en correos de soporte: \"We would appreciate IT if you could...\". Jamás omitas \"it\".",
    "human_rule": "\"Agradeceríamos que…\" ➔ We would appreciate IT if…",
    "trigger_anchor": "We would appreciate ______ if you could confirm ➔ it",
    "spanglish_trap": "Omitir it. Con appreciate, la frase fija lleva it.",
    "ref": null
  },
  {
    "id": "prac-g09-06",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Would you mind if I ______ the primary gateway server during the low-traffic maintenance window?",
    "options": [
      "rebooting",
      "reboot",
      "to reboot",
      "rebooted"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"Would you mind if I…\" pide permiso con cortesía.\n• Regla: Would you mind if + sujeto + pasado simple.\n• Descartas: rebooting, reboot y \"to reboot\" no van después de \"mind if I\".",
    "why_wrong": [
      "Incorrecto: después de \"mind if I\" va el pasado, no -ing.",
      "Incorrecto: después de \"mind if I\" va el pasado, no el verbo base.",
      "Incorrecto: después de \"mind if I\" no va \"to\".",
      "Opción correcta: \"mind if I rebooted\" = \"te importaría si reiniciara\"."
    ],
    "tip_es": "Distingue: \"Would you mind REBOOTING\" frente a \"Would you mind if I REBOOTED\".",
    "human_rule": "\"¿Te importaría si yo…?\" ➔ Would you mind if I + pasado.",
    "trigger_anchor": "Would you mind if I ______ the server? ➔ rebooted",
    "spanglish_trap": "Poner el presente. Aunque hable de ahora, tras mind if va el pasado.",
    "ref": null
  },
  {
    "id": "prac-g13-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G13",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The chief security officer insisted that the network administrator ______ all compromised SSH public keys immediately.",
    "options": [
      "revoke",
      "revokes",
      "revoked",
      "is revoking"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"insisted that the network administrator…\": un verbo de exigencia + that.\n• Regla: insist + that + verbo sin -s ni -ed (revoke).\n• Descartas: revokes lleva -s; revoked es pasado; \"is revoking\" no se usa aquí.",
    "why_wrong": [
      "Opción correcta: \"revoke\" = \"revoque\" (verbo tal cual).",
      "Incorrecto: revokes lleva -s que aquí no va.",
      "Incorrecto: revoked es pasado; aquí va el verbo tal cual.",
      "Incorrecto: \"is revoking\" no se usa después de insist that."
    ],
    "tip_es": "Tras \"recommend / insist / demand / vital THAT\": el verbo va siempre en forma base pura (\"revoke\", \"be\", \"enable\").",
    "human_rule": "insist + that + verbo sin -s.",
    "trigger_anchor": "insisted that the administrator ______ all keys ➔ revoke",
    "spanglish_trap": "Poner el pasado porque insistió en el pasado. El verbo va tal cual.",
    "ref": null
  },
  {
    "id": "prac-g13-02",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 3,
    "pool": "practice",
    "stem": "To prevent cleartext credential leakage, it is vital that TLS 1.3 ______ enabled across all staging microservice endpoints.",
    "options": [
      "is",
      "be",
      "was",
      "being"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"it is vital that TLS 1.3…\": una expresión de necesidad + that.\n• Regla: vital / essential / imperative + that + be.\n• Descartas: is y was conjugan el verbo; being no sirve.",
    "why_wrong": [
      "Incorrecto: is conjuga el verbo; después de \"vital that\" va be.",
      "Opción correcta: \"be enabled\" = \"esté habilitado\".",
      "Incorrecto: was es pasado.",
      "Incorrecto: being no se usa así."
    ],
    "tip_es": "Con adjetivos de urgencia (\"vital / crucial / imperative / essential that\"): el verbo \"to be\" se escribe siempre \"BE\".",
    "human_rule": "it is vital / essential / imperative that + be + 3.ª forma.",
    "trigger_anchor": "it is vital that TLS 1.3 ______ enabled ➔ be",
    "spanglish_trap": "Poner is porque \"es vital que esté\". En inglés va be.",
    "ref": null
  },
  {
    "id": "prac-g13-03",
    "section": "UE",
    "objective": "UE3",
    "topic": "G13",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The compliance auditor recommended that every remote developer ______ hardware MFA tokens before accessing the production VPC.",
    "options": [
      "used",
      "uses",
      "use",
      "is using"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"recommended that every remote developer…\": un verbo de recomendación + that.\n• Regla: recommend + that + verbo sin -s (use).\n• Descartas: used es pasado; uses lleva -s; \"is using\" no se usa aquí.",
    "why_wrong": [
      "Incorrecto: used es pasado.",
      "Incorrecto: uses lleva -s que aquí no va.",
      "Opción correcta: \"use\" = \"use\" (verbo tal cual).",
      "Incorrecto: \"is using\" no se usa después de recommend that."
    ],
    "tip_es": "Incluso con sujetos singulares (\"every user / each admin\"), el verbo va sin \"-s\": \"recommended that he USE\", no \"uses\".",
    "human_rule": "recommend + that + verbo sin -s.",
    "trigger_anchor": "recommended that every developer ______ MFA tokens ➔ use",
    "spanglish_trap": "Poner -s porque every es singular. Después de recommend that, el verbo va tal cual.",
    "ref": null
  },
  {
    "id": "prac-g13-04",
    "section": "UE",
    "objective": "UE5",
    "topic": "G13",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The enterprise security baseline mandates that no container image ______ deployed without a cryptographic signature.",
    "options": [
      "are",
      "is",
      "was",
      "be"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"mandates that no container image…\": una obligación + that.\n• Regla: mandate + that + be + 3.ª forma (be deployed).\n• Descartas: are, is y was conjugan el verbo.",
    "why_wrong": [
      "Incorrecto: are conjuga el verbo; después de mandate that va be.",
      "Incorrecto: is conjuga el verbo.",
      "Incorrecto: was es pasado.",
      "Opción correcta: \"be deployed\" = \"se despliegue\"."
    ],
    "tip_es": "Tras \"mandate / require that\": usa la forma pasiva en subjuntivo [BE + participio].",
    "human_rule": "mandate / demand + that + be + 3.ª forma.",
    "trigger_anchor": "mandates that no container image ______ deployed ➔ be",
    "spanglish_trap": "Poner is. Después de mandate that va be, aunque el sujeto sea singular.",
    "ref": null
  },
  {
    "id": "prac-g13-05",
    "section": "UE",
    "objective": "UE4",
    "topic": "G13",
    "difficulty": 3,
    "pool": "practice",
    "stem": "It is imperative that the root certificate authority ______ rotated before its validity period expires.",
    "options": [
      "be",
      "is",
      "was",
      "to be"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"it is imperative that the root CA…\": una expresión de necesidad + that.\n• Regla: imperative + that + be + 3.ª forma (be rotated).\n• Descartas: is y was conjugan el verbo; \"to be\" no se usa después de that.",
    "why_wrong": [
      "Opción correcta: \"be rotated\" = \"se rote\".",
      "Incorrecto: is conjuga el verbo.",
      "Incorrecto: was es pasado.",
      "Incorrecto: después de that no va \"to\"."
    ],
    "tip_es": "\"It is imperative that [sujeto] BE [participio]\".",
    "human_rule": "it is imperative that + be + 3.ª forma.",
    "trigger_anchor": "it is imperative that the CA ______ rotated ➔ be",
    "spanglish_trap": "Poner \"to be\" por \"que sea\". Después de that va be, sin to.",
    "ref": null
  },
  {
    "id": "prac-g13-06",
    "section": "UE",
    "objective": "UE2",
    "topic": "G13",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The incident commander demanded that the third-party vendor ______ full audit logs within twenty-four hours.",
    "options": [
      "provides",
      "provide",
      "provided",
      "is providing"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"demanded that the third-party vendor…\": un verbo de exigencia + that.\n• Regla: demand + that + verbo sin -s (provide).\n• Descartas: provides lleva -s; provided es pasado; \"is providing\" no se usa aquí.",
    "why_wrong": [
      "Incorrecto: provides lleva -s que aquí no va.",
      "Opción correcta: \"provide\" = \"proporcione\".",
      "Incorrecto: provided es pasado.",
      "Incorrecto: \"is providing\" no se usa después de demand that."
    ],
    "tip_es": "\"Demanded that the vendor PROVIDE\", no \"provides\".",
    "human_rule": "demand + that + verbo sin -s.",
    "trigger_anchor": "demanded that the vendor ______ audit logs ➔ provide",
    "spanglish_trap": "Poner -s porque vendor es singular. Después de demand that, el verbo va tal cual.",
    "ref": null
  },
  {
    "id": "prac-g14-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Given that all server fans stopped and telemetry reported zero voltage across both rails, the primary power supply ______ completely burned out.",
    "options": [
      "should have",
      "can’t have",
      "must have",
      "ought to"
    ],
    "answer": 2,
    "why_correct": "• Pista: los ventiladores se detuvieron y no hay voltaje: la evidencia lo confirma.\n• Regla: la evidencia lo confirma ➔ must have + 3.ª forma.\n• Descartas: should have y \"ought to\" no son deducciones; can't have diría que es imposible.",
    "why_wrong": [
      "Incorrecto: should have es un reproche, no una deducción.",
      "Incorrecto: can't have diría que es imposible, y todos los datos dicen lo contrario.",
      "Opción correcta: \"must have burned out\" = \"seguro que se quemó\".",
      "Incorrecto: \"ought to\" necesita \"have\" + 3.ª forma para hablar del pasado."
    ],
    "tip_es": "Evidencia concluyente de que algo ocurrió en el pasado = \"MUST HAVE + participio\".",
    "human_rule": "La evidencia lo confirma ➔ must have + 3.ª forma.",
    "trigger_anchor": "fans stopped, zero voltage… the PSU ______ burned out (confirmado) ➔ must have",
    "spanglish_trap": "Elegir should have porque suena a \"debió\". Aquí no es un reproche: es una deducción.",
    "ref": null
  },
  {
    "id": "prac-g14-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The penetration tester ______ accessed the internal database, as the firewall logs confirm that all incoming port 5432 requests were dropped.",
    "options": [
      "should have",
      "must have",
      "might have",
      "can’t have"
    ],
    "answer": 3,
    "why_correct": "• Pista: los logs confirman que todo se bloqueó, así que acceder era imposible.\n• Regla: la evidencia lo hace imposible ➔ can't have + 3.ª forma.\n• Descartas: must have y might have dicen que sí accedió o que quizás; should have es un reproche.",
    "why_wrong": [
      "Incorrecto: should have es un reproche.",
      "Incorrecto: must have diría que seguro accedió.",
      "Incorrecto: might have diría que quizás accedió, pero la evidencia dice que no.",
      "Opción correcta: \"can't have accessed\" = \"es imposible que haya accedido\"."
    ],
    "tip_es": "Evidencia concluyente de que algo fue imposible en el pasado = \"CAN’T HAVE + participio\". Nunca uses \"must not have\" para imposibilidad lógica.",
    "human_rule": "La evidencia lo hace imposible ➔ can't have + 3.ª forma.",
    "trigger_anchor": "logs confirm all requests were dropped ➔ tester ______ accessed ➔ can't have",
    "spanglish_trap": "Usar mustn't have para \"imposible\". Mustn't es \"prohibido\"; para imposible, can't have.",
    "ref": null
  },
  {
    "id": "prac-g14-03",
    "section": "UE",
    "objective": "UE1",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The database replica is responding with stale records; it ______ replication latency due to network congestion.",
    "options": [
      "might be experiencing",
      "can’t be experiencing",
      "should have experienced",
      "must not experience"
    ],
    "answer": 0,
    "why_correct": "• Pista: hay un síntoma (datos viejos), pero no una prueba de la causa.\n• Regla: es solo una posibilidad ahora ➔ might be + -ing.\n• Descartas: \"can't be\" la descarta sin evidencia; \"should have experienced\" habla del pasado; \"must not experience\" es una prohibición.",
    "why_wrong": [
      "Opción correcta: \"might be experiencing\" = \"quizás esté sufriendo\".",
      "Incorrecto: can't be diría que es imposible, y no hay evidencia de eso.",
      "Incorrecto: should have experienced es un reproche del pasado.",
      "Incorrecto: must not significa \"prohibido\", no una deducción."
    ],
    "tip_es": "Hipótesis plausible en tiempo real = \"MIGHT / COULD BE + gerundio\".",
    "human_rule": "Solo es una posibilidad ahora ➔ might be + -ing.",
    "trigger_anchor": "responding with stale records; it ______ latency (posibilidad) ➔ might be experiencing",
    "spanglish_trap": "Elegir must creyendo que el síntoma lo prueba. Para una posibilidad, might.",
    "ref": null
  },
  {
    "id": "prac-g14-04",
    "section": "UE",
    "objective": "UE4",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The cluster crashed three seconds after deployment; the configuration file ______ syntax errors that bypassed the linter.",
    "options": [
      "can’t have contained",
      "must have contained",
      "should contain",
      "might to contain"
    ],
    "answer": 1,
    "why_correct": "• Pista: el clúster cayó justo después del despliegue: la evidencia apunta al archivo de configuración.\n• Regla: la evidencia lo confirma ➔ must have + 3.ª forma.\n• Descartas: \"can't have\" diría que es imposible; \"should contain\" habla del presente; \"might to\" no existe.",
    "why_wrong": [
      "Incorrecto: \"can't have contained\" diría que es imposible, y la evidencia apunta a lo contrario.",
      "Opción correcta: \"must have contained\" = \"seguro que contenía\".",
      "Incorrecto: \"should contain\" habla del presente y es una recomendación.",
      "Incorrecto: \"might to\" no existe."
    ],
    "tip_es": "Causa raíz pasada evidente = \"MUST HAVE + participio\".",
    "human_rule": "La evidencia lo confirma ➔ must have + 3.ª forma.",
    "trigger_anchor": "crashed three seconds after deployment; the file ______ contained ➔ must have",
    "spanglish_trap": "Dudar por la palabra \"bypassed\" y elegir la negación. La evidencia confirma, no descarta.",
    "ref": null
  },
  {
    "id": "prac-g14-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "With end-to-end hardware encryption enabled, eavesdroppers ______ intercepted the plaintext payload over the fiber link.",
    "options": [
      "should have",
      "must have",
      "could not have",
      "ought to have"
    ],
    "answer": 2,
    "why_correct": "• Pista: con cifrado de extremo a extremo no había texto plano que interceptar.\n• Regla: imposible por la evidencia ➔ could not have + 3.ª forma.\n• Descartas: should have y ought to have son reproches; must have diría que seguro lo interceptaron.",
    "why_wrong": [
      "Incorrecto: should have es un reproche.",
      "Incorrecto: must have diría que seguro lo interceptaron.",
      "Opción correcta: \"could not have intercepted\" = \"no pudieron interceptar\".",
      "Incorrecto: ought to have es un reproche."
    ],
    "tip_es": "\"COULD NOT HAVE\" = era físicamente/lógicamente imposible que ocurriera.",
    "human_rule": "Imposible en el pasado ➔ could not / couldn't have + 3.ª forma.",
    "trigger_anchor": "With encryption enabled, eavesdroppers ______ intercepted ➔ could not have",
    "spanglish_trap": "Elegir must have porque interceptar parece lógico. La evidencia (cifrado) lo hace imposible.",
    "ref": null
  },
  {
    "id": "prac-g14-06",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The automated backup job did not execute at midnight; the scheduler daemon ______ stopped by an automated memory-reclaim policy.",
    "options": [
      "ought have been",
      "can’t have been",
      "should be",
      "might have been"
    ],
    "answer": 3,
    "why_correct": "• Pista: hay un síntoma (el respaldo no corrió), pero nadie confirma la causa.\n• Regla: posibilidad en el pasado ➔ might have been + 3.ª forma.\n• Descartas: \"ought have\" tiene el orden roto; \"can't have been\" dice que es imposible; \"should be\" no habla del pasado.",
    "why_wrong": [
      "Incorrecto: ought necesita \"to\" (ought to have been) y es un reproche.",
      "Incorrecto: can't have been dice que es imposible, y no hay evidencia de eso.",
      "Incorrecto: should be habla del presente.",
      "Opción correcta: \"might have been stopped\" = \"quizás lo detuvo\"."
    ],
    "tip_es": "Hipótesis pasiva en pasado = \"MIGHT HAVE BEEN + participio\".",
    "human_rule": "Posibilidad en el pasado ➔ might have been + 3.ª forma.",
    "trigger_anchor": "did not execute; the daemon ______ stopped (quizás) ➔ might have been",
    "spanglish_trap": "Elegir must have been porque la causa parece clara. Si no hay prueba, might.",
    "ref": null
  },
  {
    "id": "prac-g19-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G19",
    "difficulty": 2,
    "pool": "practice",
    "stem": "When the canary deployment produced an unacceptable spike in error rates, the DevOps lead ordered the team to ______ to the previous stable release.",
    "options": [
      "roll back",
      "roll out",
      "spin up",
      "scale out"
    ],
    "answer": 0,
    "why_correct": "• Pista: el despliegue tuvo un pico de fallos y hay que volver a \"the previous stable release\".\n• Regla: ➔ roll back.\n• Descartas: \"roll out\" es lanzar; \"spin up\" es levantar; \"scale out\" es crecer.",
    "why_wrong": [
      "Opción correcta: \"roll back\" = \"volver a la versión anterior\".",
      "Incorrecto: \"roll out\" significa \"lanzar\".",
      "Incorrecto: \"spin up\" significa \"levantar\".",
      "Incorrecto: \"scale out\" significa \"escalar hacia fuera\"."
    ],
    "tip_es": "En incidentes de despliegue: \"roll BACK\" = revertir / volver atrás. \"roll OUT\" = lanzar al mercado.",
    "human_rule": "Volver a la versión anterior ➔ roll back.",
    "trigger_anchor": "ordered the team to ______ to the previous stable release ➔ roll back",
    "spanglish_trap": "Confundir roll back y roll out. Back es atrás; out es hacia delante.",
    "ref": null
  },
  {
    "id": "prac-g19-02",
    "section": "UE",
    "objective": "UE4",
    "topic": "G19",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The auto-scaling group automatically ______ fifty additional container instances to handle the Black Friday traffic peak.",
    "options": [
      "backed down",
      "spun up",
      "phased out",
      "wiped out"
    ],
    "answer": 1,
    "why_correct": "• Pista: el grupo crea \"fifty additional instances\" para el pico de tráfico.\n• Regla: levantar algo nuevo ➔ spin up.\n• Descartas: \"backed down\", \"phased out\" y \"wiped out\" significan echarse atrás, retirar o borrar.",
    "why_wrong": [
      "Incorrecto: \"backed down\" significa \"echarse atrás\".",
      "Opción correcta: \"spun up\" = \"levantó\".",
      "Incorrecto: \"phased out\" significa \"retiró poco a poco\".",
      "Incorrecto: \"wiped out\" significa \"borró\"."
    ],
    "tip_es": "En la nube: \"SPIN UP\" = arrancar/instanciar servidores o contenedores.",
    "human_rule": "Crear o levantar una instancia ➔ spin up.",
    "trigger_anchor": "automatically ______ fifty additional instances ➔ spun up",
    "spanglish_trap": "Elegir un verbo de retirada. Aquí se crean instancias.",
    "ref": null
  },
  {
    "id": "prac-g19-03",
    "section": "UE",
    "objective": "UE1",
    "topic": "G19",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The enterprise architecture committee decided to ______ legacy FTP servers in favor of encrypted SFTP endpoints over the next quarter.",
    "options": [
      "shut down",
      "back out",
      "phase out",
      "plug in"
    ],
    "answer": 2,
    "why_correct": "• Pista: se reemplazan los servidores FTP por SFTP \"over the next quarter\": poco a poco.\n• Regla: retirar poco a poco ➔ phase out.\n• Descartas: \"shut down\" es apagar de golpe; \"back out\" es echarse atrás; \"plug in\" es conectar.",
    "why_wrong": [
      "Incorrecto: \"shut down\" significa \"apagar de golpe\".",
      "Incorrecto: \"back out\" significa \"echarse atrás\".",
      "Opción correcta: \"phase out\" = \"retirar poco a poco\".",
      "Incorrecto: \"plug in\" significa \"conectar\"."
    ],
    "tip_es": "Retirada progresiva de sistemas obsoletos = \"PHASE OUT\".",
    "human_rule": "Retirar poco a poco ➔ phase out.",
    "trigger_anchor": "to ______ legacy FTP servers over the next quarter ➔ phase out",
    "spanglish_trap": "Elegir shut down. Si es progresivo, phase out.",
    "ref": null
  },
  {
    "id": "prac-g19-04",
    "section": "UE",
    "objective": "UE3",
    "topic": "G19",
    "difficulty": 2,
    "pool": "practice",
    "stem": "After hours of packet inspection, the network engineer managed to ______ the rogue DHCP server responsible for IP conflicts.",
    "options": [
      "make out",
      "call off",
      "turn down",
      "track down"
    ],
    "answer": 3,
    "why_correct": "• Pista: tras horas de inspección, se encuentra el servidor DHCP \"responsable\".\n• Regla: localizar tras buscar ➔ track down.\n• Descartas: \"make out\" es distinguir; \"call off\" es cancelar; \"turn down\" es rechazar.",
    "why_wrong": [
      "Incorrecto: \"make out\" significa \"distinguir\".",
      "Incorrecto: \"call off\" significa \"cancelar\".",
      "Incorrecto: \"turn down\" significa \"rechazar\".",
      "Opción correcta: \"track down\" = \"localizar\"."
    ],
    "tip_es": "Localizar un bug o servidor malicioso oculto = \"TRACK DOWN\".",
    "human_rule": "Localizar tras buscar ➔ track down.",
    "trigger_anchor": "managed to ______ the rogue DHCP server ➔ track down",
    "spanglish_trap": "Elegir make out por \"encontrar\". Make out es distinguir algo con dificultad.",
    "ref": null
  },
  {
    "id": "prac-g19-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G19",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Before the security patch can be promoted to production, the CISO must formally ______ on the risk assessment.",
    "options": [
      "sign off",
      "log off",
      "check off",
      "write off"
    ],
    "answer": 0,
    "why_correct": "• Pista: antes de producción, el CISO debe aprobar formalmente.\n• Regla: aprobar formalmente ➔ sign off (on).\n• Descartas: \"log off\" es cerrar sesión; \"check off\" es marcar; \"write off\" es dar por perdido.",
    "why_wrong": [
      "Opción correcta: \"sign off on\" = \"aprobar formalmente\".",
      "Incorrecto: \"log off\" significa \"cerrar sesión\".",
      "Incorrecto: \"check off\" significa \"marcar en una lista\".",
      "Incorrecto: \"write off\" significa \"dar por perdido\"."
    ],
    "tip_es": "Aprobación ejecutiva o visto bueno de un cambio = \"SIGN OFF on\".",
    "human_rule": "Aprobar formalmente ➔ sign off on.",
    "trigger_anchor": "the CISO must formally ______ on the risk assessment ➔ sign off",
    "spanglish_trap": "Elegir check off por \"dar el visto bueno\". Sign off es la aprobación formal.",
    "ref": null
  },
  {
    "id": "prac-g19-06",
    "section": "UE",
    "objective": "UE2",
    "topic": "G19",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The packet filter was configured to ______ all ICMP ping requests to prevent network mapping reconnaissance.",
    "options": [
      "drop",
      "filter out",
      "drop out",
      "screen out"
    ],
    "answer": 1,
    "why_correct": "• Pista: el filtro de paquetes debe descartar todas las solicitudes ICMP.\n• Regla: descartar lo que llega ➔ filter out.\n• Descartas: \"drop out\" es abandonar; \"screen out\" es filtrar personas; \"drop\" solo también es posible, pero este ejercicio busca \"filter out\".",
    "why_wrong": [
      "Incorrecto: \"drop\" también se usa en reglas de filtrado; este ejercicio busca \"filter out\".",
      "Opción correcta: \"filter out\" = \"descartar\".",
      "Incorrecto: \"drop out\" significa \"abandonar\".",
      "Incorrecto: \"screen out\" se usa para personas o candidatos."
    ],
    "tip_es": "Descartar tráfico selectivo en firewall = \"FILTER OUT packets\".",
    "human_rule": "Descartar tráfico ➔ filter out.",
    "trigger_anchor": "configured to ______ all ICMP ping requests ➔ filter out",
    "spanglish_trap": "Elegir drop out por \"descartar\". Drop out significa abandonar.",
    "ref": null
  },
  {
    "id": "prac-g20-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ was an unindexed database query that caused the transaction timeout, not the upstream payment gateway.",
    "options": [
      "There",
      "What",
      "It",
      "This"
    ],
    "answer": 2,
    "why_correct": "• Pista: después del hueco viene \"was an unindexed query that caused…\": se destaca la causa.\n• Regla: It was + lo destacado + that…\n• Descartas: There, What y This no abren una frase hendida.",
    "why_wrong": [
      "Incorrecto: \"There was… that\" no forma esta estructura.",
      "Incorrecto: What abre otra frase hendida (What caused… was…).",
      "Opción correcta: \"It was an unindexed query that caused…\" = \"fue una consulta lo que causó…\".",
      "Incorrecto: This no abre esta estructura."
    ],
    "tip_es": "Fórmula cleft de diagnóstico: \"IT was [la causa real] that [provocó el fallo], not [otra cosa]\".",
    "human_rule": "It was X that… (destacar la causa).",
    "trigger_anchor": "______ was an unindexed query that caused the timeout ➔ It",
    "spanglish_trap": "Poner There por \"hubo\". Para destacar, It.",
    "ref": null
  },
  {
    "id": "prac-g20-02",
    "section": "UE",
    "objective": "UE5",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the engineering team urgently requires is a multi-region failover cluster with sub-second replication.",
    "options": [
      "That",
      "It",
      "Which",
      "What"
    ],
    "answer": 3,
    "why_correct": "• Pista: el hueco va al inicio y después viene \"the engineering team urgently requires is…\".\n• Regla: \"lo que necesitan es…\" ➔ What + frase + is…\n• Descartas: That, It y Which no abren esta estructura.",
    "why_wrong": [
      "Incorrecto: That no abre \"lo que… es\".",
      "Incorrecto: It abre \"It is… that…\", otra estructura.",
      "Incorrecto: Which no abre \"lo que… es\".",
      "Opción correcta: \"What the team requires is…\" = \"lo que el equipo necesita es…\"."
    ],
    "tip_es": "Estructura de necesidad técnica: \"WHAT we need/require IS [solución]\".",
    "human_rule": "\"Lo que… es…\" ➔ What + frase + is + lo destacado.",
    "trigger_anchor": "______ the team urgently requires is a failover cluster ➔ What",
    "spanglish_trap": "Elegir That o Which por \"que\". Para \"lo que\", What.",
    "ref": null
  },
  {
    "id": "prac-g20-03",
    "section": "UE",
    "objective": "UE3",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "It was only after examining the syslog buffer ______ the security analyst discovered the backdoor shell.",
    "options": [
      "that",
      "when",
      "which",
      "where"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"It was only after examining the syslog buffer ______ the analyst discovered…\": se destaca cuándo pasó.\n• Regla: It was + momento destacado + that…\n• Descartas: when, which y where no cierran la frase hendida.",
    "why_wrong": [
      "Opción correcta: \"It was only after… that\" = \"fue solo después de… cuando\".",
      "Incorrecto: when no se usa en esta estructura.",
      "Incorrecto: which no se usa para un momento.",
      "Incorrecto: where es para lugares."
    ],
    "tip_es": "Regla de oro B2: \"It was only after [evento] THAT...\", jamás \"when\".",
    "human_rule": "It was + momento + THAT… (aunque en español sea \"cuando\").",
    "trigger_anchor": "It was only after examining the buffer ______ the analyst discovered ➔ that",
    "spanglish_trap": "Poner when por \"cuando\". En esta estructura, siempre that.",
    "ref": null
  },
  {
    "id": "prac-g20-04",
    "section": "UE",
    "objective": "UE1",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "All ______ to restore connectivity was restart the core routing daemon on the edge router.",
    "options": [
      "that we had to do it",
      "we had to do",
      "what we had to do",
      "which we had to do"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"All ______ to restore connectivity was restart…\": se dice lo único que había que hacer.\n• Regla: \"Todo lo que teníamos que hacer era…\" ➔ All we had to do was + verbo base.\n• Descartas: \"that we had to do it\", \"what\" y \"which\" no forman la estructura.",
    "why_wrong": [
      "Incorrecto: \"that we had to do it\" repite el objeto (it).",
      "Opción correcta: \"All we had to do was restart\" = \"todo lo que teníamos que hacer era reiniciar\".",
      "Incorrecto: después de All no va what.",
      "Incorrecto: después de All no va which."
    ],
    "tip_es": "Fórmula de simplicidad en soporte: \"ALL we had to do WAS [restart/deploy]...\".",
    "human_rule": "All + sujeto + had to do + was + verbo base.",
    "trigger_anchor": "All ______ to restore connectivity was restart… ➔ we had to do",
    "spanglish_trap": "Añadir what o it. Después de All, la frase va directa: All we had to do.",
    "ref": null
  },
  {
    "id": "prac-g20-05",
    "section": "UE",
    "objective": "UE4",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "It is the unencrypted backup storage, not the database cluster itself, ______ violates the compliance policy.",
    "options": [
      "who",
      "which",
      "that",
      "whom"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"It is the unencrypted backup storage, not the database cluster itself, ______ violates…\": se destaca una cosa.\n• Regla: It is + cosa destacada + that…\n• Descartas: who y whom son para personas; which también es posible, pero aquí se busca that.",
    "why_wrong": [
      "Incorrecto: who es para personas.",
      "Incorrecto: which también se usa, pero en la frase hendida se busca that.",
      "Opción correcta: \"It is the storage that violates…\" = \"es el almacenamiento lo que infringe…\".",
      "Incorrecto: whom es para personas."
    ],
    "tip_es": "\"It is [A], not [B], THAT [verbo]\".",
    "human_rule": "It is + cosa destacada + THAT.",
    "trigger_anchor": "It is the backup storage, not the cluster, ______ violates policy ➔ that",
    "spanglish_trap": "Elegir which por ser una cosa. En la frase hendida, that.",
    "ref": null
  },
  {
    "id": "prac-g20-06",
    "section": "UE",
    "objective": "UE5",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What surprised the lead cloud architect ______ that the auto-scaling policies triggered prematurely during the demo.",
    "options": [
      "has",
      "were",
      "is being",
      "was"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"What surprised the architect ______ that…\": falta el verbo de la frase.\n• Regla: What + verbo + singular ➔ was.\n• Descartas: has, were e \"is being\" no encajan.",
    "why_wrong": [
      "Incorrecto: has no encaja con \"that…\".",
      "Incorrecto: were es plural, y la frase es singular.",
      "Incorrecto: \"is being\" no encaja con el pasado.",
      "Opción correcta: \"What surprised… was that…\" = \"lo que sorprendió… fue que…\"."
    ],
    "tip_es": "\"What surprised us WAS that...\": siempre singular \"was\" para enlazar la cláusula que describe el hecho.",
    "human_rule": "\"Lo que sorprendió fue que…\" ➔ What surprised… was that…",
    "trigger_anchor": "What surprised the architect ______ that policies triggered ➔ was",
    "spanglish_trap": "Poner were por el plural \"las políticas\". Lo que concuerda es What: was.",
    "ref": null
  }
];

export const PRACTICE_QUESTIONS: Question[] = [
  ...BASE_PRACTICE_QUESTIONS,
  ...EXPANDED_PRACTICE_QUESTIONS
];

