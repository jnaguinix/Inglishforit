import { Question } from '../../types';

/**
 * English for IT 1 – Module 2: Network Engineer: Interpret & Implement Instructions
 * 2.1 Section 1 – Grammar: The Emphatic "do"
 * Official OpenEDG / Cisco Curriculum
 * Covers:
 *  - Emphatic DO / DOES / DID in affirmative spoken and written English
 *  - Stressing auxiliary DO/DOES/DID before the base form of the main verb
 *  - Reinforcement with intensifying adverbs: "really did", "absolutely do"
 *  - Question tags for confirmation and gravity ("didn't you?", "don't they?")
 *  - Distinguishing emphatic DO from main verb DO and ordinary negative auxiliaries
 * 2.1.3 Exercise 1 (6 items) + 2.1.4 Exercise 2 (6 items) + 2 High-Yield Items = 14 items
 */
export const ENGLISH_FOR_IT_1_MODULE_2_SECTION_1_BANK: Question[] = [
  {
    "id": "it1-mod2-sec1-ex1-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct emphatic form: \"Well, I __________ you many times that this would happen. The network is not secure.\"",
    "options": [
      "did tell",
      "told",
      "does tell",
      "do tell"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"I ______ you many times\" insiste en algo que ya dijo.\n• Regla: \"sí te lo dije\" ➔ did + verbo base (did tell).\n• Descartas: told no marca el énfasis; does tell y do tell son presente.",
    "why_wrong": [
      "Opción correcta: \"did tell\" = \"sí te lo dije\".",
      "Incorrecto: told es el pasado normal, sin énfasis.",
      "Incorrecto: does tell es presente y va con un sujeto singular.",
      "Incorrecto: do tell es presente."
    ],
    "tip_es": "En pasado, el enfático afirmativo siempre se forma con [DID + forma base del verbo].",
    "ref": null,
    "human_rule": "\"Sí te lo dije\" ➔ I did tell you.",
    "trigger_anchor": "I ______ you many times (insistir en lo dicho) ➔ did tell",
    "spanglish_trap": "Poner \"told\" y perder el énfasis. Para insistir, did + verbo base.",
    "workplace_usage": {
      "scenario": "Auditoría Postmortem de Seguridad",
      "en": "Well, I did tell you many times that this would happen. The network is not secure without strict access control lists.",
      "es": "Bueno, yo sí te advertí muchas veces que esto sucedería. La red no es segura sin listas estrictas de control de acceso."
    }
  },
  {
    "id": "it1-mod2-sec1-ex1-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct emphatic form: \"But I __________ it in my previous email. Don’t you remember?\"",
    "options": [
      "do mention",
      "did mention",
      "does mention",
      "mentioned"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"But I ______ it in my previous email\" insiste en algo que sí hizo.\n• Regla: \"sí lo mencioné\" ➔ did + verbo base (did mention).\n• Descartas: do mention es presente; mentioned no marca el énfasis.",
    "why_wrong": [
      "Incorrecto: do mention es presente.",
      "Opción correcta: \"did mention\" = \"sí lo mencioné\".",
      "Incorrecto: does mention es presente y singular.",
      "Incorrecto: mentioned es el pasado normal, sin énfasis."
    ],
    "tip_es": "Acción en un correo anterior + énfasis = [did mention].",
    "ref": null,
    "human_rule": "\"Sí lo mencioné\" ➔ I did mention it.",
    "trigger_anchor": "But I ______ it in my previous email ➔ did mention",
    "spanglish_trap": "Usar el presente. La frase habla de un correo anterior.",
    "workplace_usage": {
      "scenario": "Aclaración de Requisitos con Clientes",
      "en": "But I did mention the maintenance window in my previous email. Don’t you remember?",
      "es": "Pero yo sí mencioné la ventana de mantenimiento en mi correo anterior. ¿No lo recuerdas?"
    }
  },
  {
    "id": "it1-mod2-sec1-ex1-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct emphatic form: \"I __________ just after you’d finished, so maybe there is nothing we can do now.\"",
    "options": [
      "noticed",
      "do notice",
      "did notice",
      "does notice"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"I ______ just after you'd finished\": insiste en algo que sí pasó.\n• Regla: \"sí lo noté\" ➔ did + verbo base (did notice).\n• Descartas: noticed no marca el énfasis; do notice y does notice son presente.",
    "why_wrong": [
      "Incorrecto: noticed es el pasado normal, sin énfasis.",
      "Incorrecto: do notice es presente.",
      "Opción correcta: \"did notice\" = \"sí lo noté\".",
      "Incorrecto: does notice es presente y singular."
    ],
    "tip_es": "Con correlación temporal de pasado (\"after you had finished\"), usa [did + forma base].",
    "ref": null,
    "human_rule": "\"Sí lo noté\" ➔ I did notice.",
    "trigger_anchor": "I ______ just after you'd finished ➔ did notice",
    "spanglish_trap": "Poner el presente porque aún importa. La acción ya pasó: did.",
    "workplace_usage": {
      "scenario": "Reporte de Falla de Configuración",
      "en": "I did notice the routing loop just after you’d finished, so maybe there is nothing we can do now.",
      "es": "Yo sí me di cuenta del bucle de enrutamiento justo después de que habías terminado, así que tal vez no haya nada que podamos hacer ahora."
    }
  },
  {
    "id": "it1-mod2-sec1-ex1-q4",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct emphatic form: \"She __________ what she’s talking about. I’m sure she can help you.\"",
    "options": [
      "do know",
      "knows",
      "did know",
      "does know"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"She ______ what she's talking about\": sujeto singular, presente.\n• Regla: \"sí sabe\" ➔ does + verbo base (does know).\n• Descartas: do no concuerda; knows no marca el énfasis; did es pasado.",
    "why_wrong": [
      "Incorrecto: do no concuerda con \"She\".",
      "Incorrecto: knows es el presente normal, sin énfasis.",
      "Incorrecto: did es pasado.",
      "Opción correcta: \"does know\" = \"sí sabe\"."
    ],
    "tip_es": "Para He / She / It en presente afirmativo enfático: [DOES + forma base].",
    "ref": null,
    "human_rule": "\"Sí sabe\" (ella, presente) ➔ does know.",
    "trigger_anchor": "She ______ what she's talking about ➔ does know",
    "spanglish_trap": "Usar do con \"she\". Con he / she / it, does.",
    "workplace_usage": {
      "scenario": "Recomendación de Especialista de Red",
      "en": "She does know what she’s talking about regarding BGP convergence. I’m sure she can help you.",
      "es": "Ella sí sabe de lo que está hablando respecto a la convergencia de BGP. Estoy seguro de que puede ayudarte."
    }
  },
  {
    "id": "it1-mod2-sec1-ex1-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct emphatic form: \"This is more serious than you realize. I __________ I should report it to the security team.\"",
    "options": [
      "do think",
      "think",
      "does think",
      "did think"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"I ______ I should report it\": se refuerza una opinión en presente.\n• Regla: \"sí creo\" ➔ do + verbo base (do think).\n• Descartas: think no marca el énfasis; does think es singular; did think es pasado.",
    "why_wrong": [
      "Opción correcta: \"do think\" = \"sí creo\".",
      "Incorrecto: think es el presente normal, sin énfasis.",
      "Incorrecto: does think es para un sujeto singular.",
      "Incorrecto: did think es pasado."
    ],
    "tip_es": "Sujeto \"I\" + presente afirmativo con convicción = [DO think].",
    "ref": null,
    "human_rule": "\"Sí creo que…\" ➔ I do think…",
    "trigger_anchor": "I ______ I should report it ➔ do think",
    "spanglish_trap": "Dejar think sin énfasis. Para reforzar la opinión, do think.",
    "workplace_usage": {
      "scenario": "Escalamiento de Incidente a Ciberseguridad",
      "en": "This is more serious than you realize. I do think I should report it to the security team immediately.",
      "es": "Esto es más serio de lo que crees. Yo sí creo que debería reportarlo al equipo de seguridad de inmediato."
    }
  },
  {
    "id": "it1-mod2-sec1-ex1-q6",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the correct emphatic form: \"She __________ the guidelines for this training procedure.\"",
    "options": [
      "do write",
      "did write",
      "wrote",
      "does write"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"She ______ the guidelines\": se enfatiza algo que ya hizo.\n• Regla: \"sí escribió\" ➔ did + verbo base (did write).\n• Descartas: do write y does write son presente; wrote no marca el énfasis.",
    "why_wrong": [
      "Incorrecto: do write es presente.",
      "Opción correcta: \"did write\" = \"sí escribió\".",
      "Incorrecto: wrote es el pasado normal, sin énfasis.",
      "Incorrecto: does write es presente."
    ],
    "tip_es": "Para confirmar enfáticamente la autoría o autor de un entregable previo: [did write].",
    "ref": null,
    "human_rule": "\"Sí lo escribió\" ➔ She did write it.",
    "trigger_anchor": "She ______ the guidelines (pasado, énfasis) ➔ did write",
    "spanglish_trap": "Poner wrote y perder el énfasis. Para destacar, did write.",
    "workplace_usage": {
      "scenario": "Atribución de Procedimientos Operativos",
      "en": "She did write the guidelines for this training procedure, so she can clarify any ambiguity.",
      "es": "Ella sí redactó las directrices para este procedimiento de capacitación, así que puede aclarar cualquier ambigüedad."
    }
  },
  {
    "id": "it1-mod2-sec1-ex2-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence is emphatic or not emphatic: \"I do think she handled it really well.\"",
    "options": [
      "Passive structure",
      "Not emphatic",
      "Emphatic",
      "Tag question"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"I do think…\" tiene do + verbo base en una frase afirmativa.\n• Regla: do / does / did + verbo base en afirmativo ➔ énfasis.\n• Descartas: no es pasiva, ni pregunta.",
    "why_wrong": [
      "Incorrecto: no hay una pasiva.",
      "Incorrecto: sí es una frase enfática.",
      "Opción correcta: es enfática (\"sí creo\").",
      "Incorrecto: no es una pregunta con tag."
    ],
    "tip_es": "Sujeto + [do/does/did] + verbo afirmativo = Oración enfática (Emphatic).",
    "ref": null,
    "human_rule": "do / does / did + verbo base (afirmativo) = énfasis.",
    "trigger_anchor": "I do think… ➔ énfasis",
    "spanglish_trap": "Confundir el do enfático con el do de las preguntas y negaciones. En afirmativo, do enfatiza.",
    "workplace_usage": {
      "scenario": "Feedback Positivo en Retrospectiva",
      "en": "I do think she handled the network outage really well under pressure.",
      "es": "Yo sí creo que ella manejó la caída de red realmente bien bajo presión."
    }
  },
  {
    "id": "it1-mod2-sec1-ex2-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence is emphatic or not emphatic: \"However, it does need reporting to the security team ASAP.\"",
    "options": [
      "Inverted conditional",
      "Not emphatic",
      "Continuous aspect",
      "Emphatic"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"it does need reporting\" tiene does + verbo base en afirmativo.\n• Regla: does + verbo base ➔ énfasis.\n• Descartas: no es un condicional ni un tiempo continuo.",
    "why_wrong": [
      "Incorrecto: no hay un condicional invertido.",
      "Incorrecto: sí es una frase enfática.",
      "Incorrecto: no es un tiempo continuo.",
      "Opción correcta: es enfática (\"sí necesita\")."
    ],
    "tip_es": "Forma neutra: \"it needs\". Forma con énfasis: \"it DOES need\". Por tanto, es Emphatic.",
    "ref": null,
    "human_rule": "does + verbo base (afirmativo) = énfasis.",
    "trigger_anchor": "it does need reporting ➔ énfasis",
    "spanglish_trap": "Pensar que does solo va en preguntas y negaciones. En afirmativo, enfatiza.",
    "workplace_usage": {
      "scenario": "Clasificación de Vulnerabilidades",
      "en": "However, it does need reporting to the security team ASAP before exploitation occurs.",
      "es": "Sin embargo, sí necesita ser reportado al equipo de seguridad cuanto antes antes de que ocurra una explotación."
    }
  },
  {
    "id": "it1-mod2-sec1-ex2-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence is emphatic or not emphatic: \"She does most of the organization for each training session.\"",
    "options": [
      "Not emphatic",
      "Emphatic",
      "Passive structure",
      "Cleft sentence"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"She does most of the organization\": does aquí es el verbo \"hacer\" (hace la mayor parte).\n• Regla: does + algo que se hace ➔ no es énfasis.\n• Descartas: no hay un verbo base después de does.",
    "why_wrong": [
      "Opción correcta: no es enfática; does es el verbo \"hacer\".",
      "Incorrecto: no hay un verbo base después de does.",
      "Incorrecto: no hay una pasiva.",
      "Incorrecto: no es una oración hendida."
    ],
    "tip_es": "¡Trampa clave de OpenEDG! Si tras \"does\" hay un sustantivo u objeto (y no otro verbo), \"does\" es el verbo principal. Resultado: NOT emphatic.",
    "ref": null,
    "human_rule": "does + objeto (does the work) = verbo \"hacer\"; does + verbo base = énfasis.",
    "trigger_anchor": "She does most of the organization ➔ no es énfasis",
    "spanglish_trap": "Ver does y pensar en énfasis. Mira qué viene después: un objeto, no un verbo.",
    "workplace_usage": {
      "scenario": "Distribución de Roles de Soporte",
      "en": "She does most of the organization for each training session on internal networking tools.",
      "es": "Ella hace la mayor parte de la organización para cada sesión de capacitación sobre herramientas internas de red."
    }
  },
  {
    "id": "it1-mod2-sec1-ex2-q4",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence is emphatic or not emphatic: \"You do have the experience to deal with this, don’t you?\"",
    "options": [
      "Not emphatic",
      "Emphatic",
      "Indirect question",
      "Counterfactual subjunctive"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"You do have the experience…\" tiene do + have en afirmativo.\n• Regla: do + verbo base en afirmativo ➔ énfasis.\n• Descartas: no es una pregunta indirecta ni un subjuntivo.",
    "why_wrong": [
      "Incorrecto: sí es enfática.",
      "Opción correcta: es enfática (\"sí tienes la experiencia\").",
      "Incorrecto: no es una pregunta indirecta.",
      "Incorrecto: no hay subjuntivo."
    ],
    "tip_es": "[You DO have + ..., don't you?] combina el auxiliar enfático con question tag para pedir confirmación.",
    "ref": null,
    "human_rule": "do + verbo base (afirmativo) = énfasis.",
    "trigger_anchor": "You do have the experience… ➔ énfasis",
    "spanglish_trap": "Pensar que el tag \"don't you\" cambia el énfasis. El énfasis está en \"do have\".",
    "workplace_usage": {
      "scenario": "Verificación de Competencias de Ingeniero de Red",
      "en": "You do have the experience to deal with this core router failover, don’t you?",
      "es": "Tú sí tienes la experiencia para lidiar con esta conmutación por error del enrutador central, ¿verdad?"
    }
  },
  {
    "id": "it1-mod2-sec1-ex2-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence is emphatic or not emphatic: \"They don’t appreciate having to start these tests on Friday afternoons.\"",
    "options": [
      "Emphatic",
      "Subjunctive mood",
      "Not emphatic",
      "Nominal relative"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"They don't appreciate…\" es una negación normal.\n• Regla: don't / doesn't + verbo base = negación, no énfasis.\n• Descartas: no hay do en afirmativo.",
    "why_wrong": [
      "Incorrecto: no es enfática; don't es una negación.",
      "Incorrecto: no hay subjuntivo.",
      "Opción correcta: no es enfática (es una negación normal).",
      "Incorrecto: no es una cláusula relativa nominal."
    ],
    "tip_es": "Una negación normal con \"don't\" o \"doesn't\" NO es enfática: es NOT emphatic.",
    "ref": null,
    "human_rule": "don't + verbo = negación. do + verbo (afirmativo) = énfasis.",
    "trigger_anchor": "They don't appreciate… ➔ no es énfasis",
    "spanglish_trap": "Ver do y pensar en énfasis. En negativo es solo la negación.",
    "workplace_usage": {
      "scenario": "Planificación de Despliegues en Fin de Semana",
      "en": "They don’t appreciate having to start these stress tests on Friday afternoons due to weekend on-call fatigue.",
      "es": "No aprecian tener que iniciar estas pruebas de estrés los viernes por la tarde debido al cansancio de las guardias de fin de semana."
    }
  },
  {
    "id": "it1-mod2-sec1-ex2-q6",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Decide if the sentence is emphatic or not emphatic: \"He doesn’t seem to be aware of the gravity of this mistake.\"",
    "options": [
      "Emphatic",
      "Impersonal passive",
      "Personal passive",
      "Not emphatic"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"He doesn't seem to be aware\" es una negación normal.\n• Regla: doesn't + verbo base = negación, no énfasis.\n• Descartas: no es pasiva.",
    "why_wrong": [
      "Incorrecto: no es enfática.",
      "Incorrecto: no hay pasiva impersonal.",
      "Incorrecto: no hay pasiva personal.",
      "Opción correcta: no es enfática (es una negación normal)."
    ],
    "tip_es": "\"doesn't seem\" = negación ordinaria en presente simple -> NOT emphatic.",
    "ref": null,
    "human_rule": "doesn't + verbo = negación.",
    "trigger_anchor": "He doesn't seem to be aware… ➔ no es énfasis",
    "spanglish_trap": "Confundir negación con énfasis. El do enfático va en afirmativo.",
    "workplace_usage": {
      "scenario": "Revisión de Incidentes Graves de Red",
      "en": "He doesn’t seem to be aware of the gravity of this mistake, which caused packet loss across the primary link.",
      "es": "Él no parece ser consciente de la gravedad de este error, el cual causó pérdida de paquetes en el enlace primario."
    }
  },
  {
    "id": "it1-mod2-sec1-video-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Select the option that correctly combines an intensifying adverb with the emphatic \"do\": \"We __________ need to address these firewall issues ASAP.\"",
    "options": [
      "absolutely do",
      "do absolutely",
      "absolutely are",
      "absolutely did have"
    ],
    "answer": 0,
    "why_correct": "• Pista: se quiere reforzar con un adverbio (absolutely).\n• Regla: el adverbio va antes de do ➔ absolutely do + verbo base.\n• Descartas: \"do absolutely\" pone el adverbio después; las otras no forman el énfasis.",
    "why_wrong": [
      "Opción correcta: \"absolutely do need\" = \"sin duda necesitamos\".",
      "Incorrecto: el adverbio va antes de do, no después.",
      "Incorrecto: \"absolutely are need\" no es una forma válida.",
      "Incorrecto: \"absolutely did have\" es pasado, y la frase está en presente."
    ],
    "tip_es": "Fórmula oficial del video: [really / absolutely + DO / DOES / DID + verbo base].",
    "ref": null,
    "human_rule": "Adverbio + do + verbo base ➔ absolutely do need.",
    "trigger_anchor": "We ______ need to address these issues ➔ absolutely do",
    "spanglish_trap": "Poner el adverbio después de do. Va antes: absolutely do.",
    "workplace_usage": {
      "scenario": "Priorización de Seguridad en el Backlog",
      "en": "We absolutely do need to address these firewall issues ASAP before deploying to production.",
      "es": "Absolutamente sí necesitamos solucionar estos problemas del firewall lo antes posible antes de desplegar a producción."
    }
  },
  {
    "id": "it1-mod2-sec1-video-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G04",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Complete the sentence with the correct question tag: \"They do understand the seriousness of meeting this deadline, __________?\"",
    "options": [
      "do they",
      "don’t they",
      "aren’t they",
      "didn’t they"
    ],
    "answer": 1,
    "why_correct": "• Pista: la frase principal es \"They do understand…\" (con do).\n• Regla: el tag repite el verbo pequeño con el signo contrario ➔ don't they.\n• Descartas: \"do they\" repite el signo; aren't y didn't no son el verbo de la frase.",
    "why_wrong": [
      "Incorrecto: \"do they\" repite el signo; el tag lo invierte.",
      "Opción correcta: \"don't they?\" = \"¿verdad?\".",
      "Incorrecto: aren't no es el verbo de la frase.",
      "Incorrecto: didn't es pasado, y la frase está en presente."
    ],
    "tip_es": "Regla de polaridad inversa en question tags: Tronco afirmativo con \"do\" rige coletilla negativa \"don't they?\".",
    "ref": null,
    "human_rule": "Tag: mismo verbo pequeño, signo contrario (do ➔ don't they?).",
    "trigger_anchor": "They do understand…, ______? ➔ don't they",
    "spanglish_trap": "Elegir aren't por ser el tag más común. Repite el verbo pequeño de la frase: do ➔ don't.",
    "workplace_usage": {
      "scenario": "Reunión de Compromiso de Fechas Límite",
      "en": "They do understand the seriousness of meeting this deadline, don’t they? We cannot afford SLA penalties.",
      "es": "Ellos sí comprenden la gravedad de cumplir con esta fecha límite, ¿verdad? No podemos permitirnos penalizaciones de SLA."
    }
  }
];
