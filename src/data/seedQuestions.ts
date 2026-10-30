import { Question } from '../types';

export const SEED_QUESTIONS: Question[] = [
  {
    "id": "ue-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G13",
    "difficulty": 2,
    "stem": "The corporate security compliance framework demands that every systems administrator ______ multi-factor authentication on all administrative bastion hosts.",
    "options": [
      "will enforce",
      "enforce",
      "to enforce",
      "enforces"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"demands that every systems administrator…\": un verbo de exigencia + that.\n• Regla: demand / insist / recommend / suggest + that ➔ el verbo va sin -s ni to (enforce).\n• Descartas: will enforce y to enforce no se usan después de that; enforces lleva la -s que aquí no va.",
    "why_wrong": [
      "Incorrecto: después de \"demands that\" no va will.",
      "Opción correcta: \"enforce\" = \"aplique\" (verbo tal cual, sin -s).",
      "Incorrecto: después de that no va \"to\".",
      "Incorrecto: enforces lleva -s; después de demand that, el verbo no la lleva."
    ],
    "tip_es": "Tras verbos como \"recommend / require / demand that [sujeto]...\", el verbo va en forma infinitiva desnuda: \"he enforce\", \"she update\", \"it be\".",
    "human_rule": "demand / insist / recommend / suggest + that + verbo sin -s.",
    "trigger_anchor": "demands that every administrator ______ MFA ➔ enforce (sin -s)",
    "spanglish_trap": "Poner la -s porque el sujeto es singular. Después de demand that, el verbo va tal cual.",
    "ref": null,
    "trigger_scan": "Ancla: \"demands that\" + [sujeto singular: \"every systems administrator\"] -> Activa subjuntivo mandatorio B2 con verbo en forma base pura (bare infinitive, sin \"-s\" y sin \"will/to\")."
  },
  {
    "id": "ue-02",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 1,
    "stem": "During the post-outage escalation call, the Tier-2 engineer asked the client: \"Would you mind ______ the gateway interface status while I inspect the routing table?\"",
    "options": [
      "to refresh",
      "refreshed",
      "refreshing",
      "refresh"
    ],
    "answer": 2,
    "why_correct": "• Pista: la frase empieza con \"Would you mind…\" (¿te importaría…?).\n• Regla: Would you mind + verbo con -ing.\n• Descartas: \"to refresh\", refreshed y refresh no van después de mind.",
    "why_wrong": [
      "Incorrecto: después de mind no va \"to\".",
      "Incorrecto: después de mind va -ing, no el pasado.",
      "Opción correcta: \"mind refreshing\" = \"te importaría actualizar\".",
      "Incorrecto: después de mind va -ing, no el verbo base."
    ],
    "tip_es": "\"Would you mind\" siempre va seguido de verbo en -ing: \"Would you mind checking / verifying / refreshing...?\"",
    "human_rule": "\"¿Te importaría…?\" ➔ Would you mind + verbo con -ing.",
    "trigger_anchor": "Would you mind ______ the interface status? ➔ refreshing",
    "spanglish_trap": "Poner to o el verbo base por el infinitivo del español (\"¿te importaría actualizar?\"). Con mind va -ing.",
    "ref": null,
    "trigger_scan": "Ancla: \"Would you mind\" (fórmula diplomática de cortesía) -> Exige obligatoriamente gerundio [VERBO + -ING]."
  },
  {
    "id": "ue-03",
    "section": "UE",
    "objective": "UE3",
    "topic": "G07",
    "difficulty": 3,
    "stem": "In the incident postmortem report, the lead analyst concluded: \"Under no circumstances ______ production encryption keys across unencrypted communication channels.\"",
    "options": [
      "share support personnel should",
      "support personnel should share",
      "support personnel shall share",
      "should support personnel share"
    ],
    "answer": 3,
    "why_correct": "• Pista: la frase empieza con \"Under no circumstances\" (bajo ninguna circunstancia).\n• Regla: después de esa expresión, el verbo pequeño (should) va ANTES de quien actúa: should support personnel share.\n• Descartas: A tiene el orden roto; B y C dejan a \"support personnel\" antes del verbo pequeño.",
    "why_wrong": [
      "Incorrecto: el orden está roto; el verbo pequeño debe ir justo después de la expresión negativa.",
      "Incorrecto: quien actúa va antes del verbo pequeño; tras \"Under no circumstances\" tiene que ir al revés.",
      "Incorrecto: igual que B, \"shall\" queda después de quien actúa.",
      "Opción correcta: should + quien actúa + verbo, como en una pregunta."
    ],
    "tip_es": "Si la frase abre con \"Under no circumstances\", \"Rarely\", \"Never\", la estructura se invierte como pregunta: Auxiliar + Sujeto + Verbo.",
    "human_rule": "Tras \"Under no circumstances\", el verbo pequeño va antes de quien actúa: should + sujeto + verbo.",
    "trigger_anchor": "Under no circumstances ______ keys (bajo ninguna circunstancia) ➔ should + quién + verbo",
    "spanglish_trap": "En español decimos \"el personal no debe compartir…\", con quien actúa primero, y se queda así al traducir. Tras la expresión negativa, el verbo pequeño va primero.",
    "ref": null,
    "trigger_scan": "Ancla: \"Under no circumstances\" (adverbio restrictivo negativo al inicio) -> Exige INVERSIÓN tipo pregunta [Auxiliar \"should\" + Sujeto \"support personnel\" + Verbo Base \"share\"]."
  },
  {
    "id": "ue-04",
    "section": "UE",
    "objective": "UE4",
    "topic": "G19",
    "difficulty": 2,
    "stem": "If the firmware upgrade causes an unrecoverable kernel panic on the edge router, the engineer must immediately ______ to the previous stable release.",
    "options": [
      "roll back",
      "back up",
      "phase out",
      "filter out"
    ],
    "answer": 0,
    "why_correct": "• Pista: la actualización causó un fallo y hay que volver a \"the previous stable release\".\n• Regla: \"volver a la versión anterior\" ➔ roll back.\n• Descartas: \"back up\" es copiar; \"phase out\" es retirar poco a poco; \"filter out\" es descartar.",
    "why_wrong": [
      "Opción correcta: \"roll back\" = \"volver a la versión anterior\".",
      "Incorrecto: \"back up\" significa \"hacer una copia de seguridad\".",
      "Incorrecto: \"phase out\" significa \"retirar poco a poco\".",
      "Incorrecto: \"filter out\" significa \"descartar\"."
    ],
    "tip_es": "En operaciones de IT: Revertir cambios = \"roll back\"; Respaldar = \"back up\"; Descontinuar = \"phase out\".",
    "human_rule": "Volver a la versión anterior ➔ roll back.",
    "trigger_anchor": "must immediately ______ to the previous stable release ➔ roll back",
    "spanglish_trap": "Confundir roll back con back up. Roll back es volver atrás; back up es copiar.",
    "ref": null,
    "trigger_scan": "Ancla: \"unrecoverable kernel panic\" + \"to the previous stable release\" -> Phrasal verb para revertir a una versión anterior: \"roll back\"."
  },
  {
    "id": "ue-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G20",
    "difficulty": 2,
    "stem": "Defending his diagnostic approach to the infrastructure manager, the engineer argued: \"______ caused the server crash, not an external volumetric attack.\"",
    "options": [
      "It was a memory leak that",
      "Which was a memory leak that",
      "It was a memory leak what",
      "What a memory leak"
    ],
    "answer": 0,
    "why_correct": "• Pista: se quiere destacar la causa del fallo (\"a memory leak\").\n• Regla: destacar con una frase hendida ➔ It was + lo destacado + that + el resto.\n• Descartas: \"Which was… that\", \"what\" y \"What a…\" no forman la estructura.",
    "why_wrong": [
      "Opción correcta: \"It was a memory leak that caused…\" = \"fue una fuga de memoria lo que causó…\".",
      "Incorrecto: \"Which was… that\" no forma la estructura.",
      "Incorrecto: después de la cosa destacada va that, no what.",
      "Incorrecto: \"What a memory leak\" es una exclamación."
    ],
    "tip_es": "Estructura cleft enfática: \"It was [el componente] that [hizo la acción]...\" para señalar con precisión la causa raíz.",
    "human_rule": "\"Fue X lo que…\" ➔ It was X that…",
    "trigger_anchor": "______ caused the server crash, not an external attack ➔ It was a memory leak that",
    "spanglish_trap": "Poner what por \"lo que\". Con It was + cosa destacada, va that.",
    "ref": null,
    "trigger_scan": "Ancla de Cleft Sentence: \"______ caused the server crash, not an external attack\" -> Énfasis contrastivo [It was X that + verbo]."
  },
  {
    "id": "ue-06",
    "section": "UE",
    "objective": "UE3",
    "topic": "G12",
    "difficulty": 2,
    "stem": "According to the official change advisory schedule, by the time the core business window opens at 07:00 UTC, the database migration team ______ all cluster replication tasks.",
    "options": [
      "will be completing",
      "will have completed",
      "has been completed",
      "is completing"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"by the time… opens\" fija un momento futuro y pregunta qué ya estará hecho.\n• Regla: \"habrá terminado para entonces\" ➔ will have + 3.ª forma.\n• Descartas: will be completing es \"estará haciéndolo\"; \"has been completed\" es del pasado; is completing es presente.",
    "why_wrong": [
      "Incorrecto: will be completing dice que lo estará haciendo en ese momento, no que ya habrá terminado.",
      "Opción correcta: \"will have completed\" = \"habrá completado\".",
      "Incorrecto: \"has been completed\" es del pasado.",
      "Incorrecto: is completing es presente."
    ],
    "tip_es": "Con marcadores temporales límite como \"by the time [presente]\" o \"by 07:00 UTC\", la fórmula requerida es Future Perfect: \"will have + participio\".",
    "human_rule": "By + momento futuro ➔ will have + 3.ª forma (\"habrá terminado para…\").",
    "trigger_anchor": "by the time… opens at 07:00 ➔ team ______ all tasks ➔ will have completed",
    "spanglish_trap": "Usar el futuro simple (will complete) como en español \"completará\". Con \"para entonces\", va will have + 3.ª forma.",
    "ref": null,
    "trigger_scan": "Ancla Temporal: \"by the time the core business window opens at 07:00 UTC\" -> Exige Future Perfect [will have completed]."
  },
  {
    "id": "ue-07",
    "section": "UE",
    "objective": "UE1",
    "topic": "G16",
    "difficulty": 2,
    "stem": "Under the emergency disaster recovery policy, the support desk won't restore database access until the lead security officer ______ the incident ticket.",
    "options": [
      "is approving",
      "will approve",
      "approves",
      "approved"
    ],
    "answer": 2,
    "why_correct": "• Pista: después de \"until\" se habla de algo futuro (\"won't restore until…\").\n• Regla: después de until, el verbo va en presente aunque hable del futuro ➔ approves.\n• Descartas: will approve, is approving y approved no se usan después de until.",
    "why_wrong": [
      "Incorrecto: is approving no se usa después de until.",
      "Incorrecto: will approve nunca va después de until; el futuro se dice con presente.",
      "Opción correcta: \"until the officer approves\" = \"hasta que el oficial apruebe\".",
      "Incorrecto: approved es pasado, y la frase habla de algo futuro."
    ],
    "tip_es": "En oraciones futuras con \"until\" o \"as soon as\", el verbo subordinado va en PRESENTE SIMPLE (con \"-s\" en 3ª persona: \"until he approves\").",
    "human_rule": "Después de until / as soon as / when, el futuro se dice con presente.",
    "trigger_anchor": "won't restore until the officer ______ the ticket ➔ approves",
    "spanglish_trap": "Poner will después de until, como en español (\"hasta que apruebe\" ya es subjuntivo). En inglés va el presente.",
    "ref": null,
    "trigger_scan": "Ancla Temporal: \"won't restore database access until the lead security officer ______\" -> Cláusula con \"until\" exige Presente Simple (\"approves\")."
  },
  {
    "id": "ue-08",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 2,
    "stem": "The updated information security policy specifies that each systems engineer must verify ______ mobile authenticator device before accessing production bastions.",
    "options": [
      "its",
      "his or her",
      "whose",
      "their"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"each systems engineer must verify ______ device\": un singular que no dice si es hombre o mujer.\n• Regla: \"su\" para una persona cualquiera ➔ their.\n• Descartas: its es para cosas; whose no es un posesivo así; \"his or her\" también es posible, pero este ejercicio busca their.",
    "why_wrong": [
      "Incorrecto: its es para cosas.",
      "Incorrecto: \"his or her\" también se usa; este ejercicio busca their.",
      "Incorrecto: whose no se usa así.",
      "Opción correcta: \"their\" = \"su\" (de esa persona)."
    ],
    "tip_es": "En políticas y runbooks de IT, para \"each user / an engineer\", el pronombre posesivo neutro de referencia es \"their\".",
    "human_rule": "Una persona cualquiera ➔ their (no its).",
    "trigger_anchor": "each systems engineer must verify ______ device ➔ their",
    "spanglish_trap": "Elegir its porque \"engineer\" es singular. Its es para cosas.",
    "ref": null,
    "trigger_scan": "Ancla: \"each systems engineer must verify ______ mobile authenticator\" -> Sujeto humano singular distributivo exige Singular \"their\"."
  },
  {
    "id": "ue-09",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 2,
    "stem": "In the customer escalation review, the manager noted: \"Mr. Smith is furious because the legacy payment portal is always ______ session tokens during peak hours.\"",
    "options": [
      "drops",
      "dropping",
      "dropped",
      "drop"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"is always ______ session tokens\": una queja por un fallo repetido.\n• Regla: is always + verbo con -ing ➔ \"se la pasa…\".\n• Descartas: drops, dropped y drop no van después de \"is always\".",
    "why_wrong": [
      "Incorrecto: drops lleva -s y no va después de \"is always\".",
      "Opción correcta: \"is always dropping\" = \"se la pasa perdiendo\".",
      "Incorrecto: dropped es el pasado.",
      "Incorrecto: drop es el verbo base."
    ],
    "tip_es": "Para expresar quejas de clientes o fallos irritantes: [to be + always + verbo en -ING] (\"The server is always dropping packets\").",
    "human_rule": "Queja por algo repetido ➔ is / are always + -ing.",
    "trigger_anchor": "the portal is always ______ session tokens (queja) ➔ dropping",
    "spanglish_trap": "Dejar el presente simple después de \"is always\". En una queja, -ing.",
    "ref": null,
    "trigger_scan": "Ancla de Irritación/Fallo Recurrente: \"is furious because the legacy portal is always ______\" -> [be + always + -ING] (\"dropping\")."
  },
  {
    "id": "ue-10",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 2,
    "stem": "______ the primary fiber link suffered a physical cut, the redundant edge gateway maintained uninterrupted packet transmission.",
    "options": [
      "Even though",
      "Despite of",
      "Even if",
      "Whereas"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"the primary fiber link suffered a cut\" es un hecho que ya ocurrió.\n• Regla: un hecho real ➔ Even though.\n• Descartas: \"Despite of\" no existe; \"Even if\" es para algo hipotético; Whereas compara.",
    "why_wrong": [
      "Opción correcta: \"Even though the link suffered a cut\" = \"aunque el enlace sufrió un corte\".",
      "Incorrecto: \"Despite of\" no existe.",
      "Incorrecto: \"Even if\" es para algo que podría pasar, no para algo ya ocurrido.",
      "Incorrecto: Whereas compara dos cosas."
    ],
    "tip_es": "\"Even though\" = HECHO REAL comprobado. \"Even if\" = SUPOSICIÓN HIPOTÉTICA.",
    "human_rule": "Un hecho real ➔ even though. Algo hipotético ➔ even if.",
    "trigger_anchor": "______ the link suffered a cut (ya pasó) ➔ Even though",
    "spanglish_trap": "Elegir Even if por \"aunque\". Si ya pasó, Even though.",
    "ref": null,
    "trigger_scan": "Ancla de Hecho Real vs Hipótesis: \"______ the primary fiber link suffered a physical cut (hecho real ocurrido en pasado)\" -> \"Even though\"."
  },
  {
    "id": "ue-11",
    "section": "UE",
    "objective": "UE1",
    "topic": "G27",
    "difficulty": 3,
    "stem": "Only if the primary edge firewall experiences catastrophic packet loss ______ assume routing control.",
    "options": [
      "the secondary failover daemon will",
      "the backup router will make the daemon",
      "does the secondary failover daemon",
      "do the secondary failover daemon"
    ],
    "answer": 2,
    "why_correct": "• Pista: la frase empieza con \"Only if…\" y falta la segunda parte.\n• Regla: \"Only if… + verbo pequeño + sujeto + verbo\" ➔ does the daemon assume.\n• Descartas: A y B dejan al sujeto antes; D no concuerda con \"daemon\".",
    "why_wrong": [
      "Incorrecto: \"the daemon will\" deja al sujeto antes del verbo pequeño.",
      "Incorrecto: \"make the daemon\" cambia la estructura.",
      "Opción correcta: \"does the secondary failover daemon assume\" = \"asume el daemon\".",
      "Incorrecto: do no concuerda con \"daemon\" (singular)."
    ],
    "tip_es": "Con \"Only if + condición\" al inicio de la frase, invierte la segunda cláusula como si fuera una pregunta: [Auxiliar + Sujeto + Verbo base].",
    "human_rule": "Only if… ➔ en la segunda parte, verbo pequeño + sujeto.",
    "trigger_anchor": "Only if the firewall experiences loss ______ assume control ➔ does the daemon",
    "spanglish_trap": "Dejar el sujeto primero. Después de \"Only if…\", el verbo pequeño va antes.",
    "ref": null,
    "trigger_scan": "Ancla de Condición Restrictiva Inicial: \"Only if [condición], ______ assume routing control\" -> Inversión obligatoria en la segunda cláusula (\"does the secondary failover daemon\")."
  },
  {
    "id": "ue-12",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 2,
    "stem": "The unexpected latency spike across the Frankfurt branch was ______ an unthrottled backup synchronization job that saturated the transit pipe.",
    "options": [
      "owing",
      "due of",
      "because",
      "due to"
    ],
    "answer": 3,
    "why_correct": "• Pista: después del hueco viene \"an unthrottled backup job\", una cosa.\n• Regla: \"debido a\" + una cosa ➔ due to.\n• Descartas: \"due of\" no existe; because necesita una frase completa; owing necesita \"to\".",
    "why_wrong": [
      "Incorrecto: owing necesita \"to\" (owing to).",
      "Incorrecto: \"due of\" no existe.",
      "Incorrecto: because necesita una frase completa (sujeto y verbo).",
      "Opción correcta: \"due to\" = \"debido a\"."
    ],
    "tip_es": "Tras \"was/is\" delante de un sustantivo: usa \"due to\" (\"The outage was due to a cable cut\").",
    "human_rule": "\"Debido a\" + una cosa ➔ due to / because of / owing to.",
    "trigger_anchor": "was ______ an unthrottled backup job (una cosa) ➔ due to",
    "spanglish_trap": "Decir \"due of\" por el \"de\" del español. Es due TO.",
    "ref": null,
    "trigger_scan": "Ancla de Causalidad: \"The unexpected latency spike was ______ [sintagma nominal]\" -> Tras el verbo \"to be\" (\"was\") + sustantivo se exige \"due to\"."
  },
  {
    "id": "ue-13",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "stem": "During the delicate customer postmortem call, the Tier-2 engineer asked: \"I was wondering if you could ______ the diagnostic memory dump to our secure portal.\"",
    "options": [
      "to upload",
      "uploaded",
      "uploading",
      "upload"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"I was wondering if you could…\" es una petición muy cortés, y después va el verbo sin to.\n• Regla: could + verbo base (upload).\n• Descartas: después de could no va \"to\", ni -ing, ni el pasado.",
    "why_wrong": [
      "Incorrecto: después de could no va \"to\".",
      "Incorrecto: después de could va el verbo base, no el pasado.",
      "Incorrecto: después de could va el verbo base, no -ing.",
      "Opción correcta: \"could upload\" = \"podrías subir\"."
    ],
    "tip_es": "En la fórmula de cortesía \"I was wondering if you could...\", el verbo siguiente va en forma base sin to: \"could upload / could verify\".",
    "human_rule": "I was wondering if you could + verbo base.",
    "trigger_anchor": "I was wondering if you could ______ the dump ➔ upload (verbo base)",
    "spanglish_trap": "Poner to o -ing después de could, como en \"si pudieras subir\". Después de could, el verbo va tal cual.",
    "ref": null
  },
  {
    "id": "ue-14",
    "section": "UE",
    "objective": "UE3",
    "topic": "G01",
    "difficulty": 2,
    "stem": "According to the automated incident timeline, the compromised container node ______ from the production Kubernetes cluster within four seconds of the anomaly alert.",
    "options": [
      "isolated",
      "has isolated",
      "was isolated",
      "had isolating"
    ],
    "answer": 2,
    "why_correct": "• Pista: el nodo no se aisló solo; alguien lo aisló (\"fue aislado\"), y pasó en un momento cerrado del pasado.\n• Regla: \"fue + hecho\" ➔ was / were + 3.ª forma (was isolated).\n• Descartas: isolated y has isolated dicen que el nodo aisló a otro; \"had isolating\" no existe.",
    "why_wrong": [
      "Incorrecto: isolated dice que el nodo aisló a otro, no que lo aislaron a él.",
      "Incorrecto: has isolated también dice que el nodo actuó, y habla del presente, no de un momento cerrado del pasado.",
      "Opción correcta: was isolated = \"fue aislado\".",
      "Incorrecto: \"had isolating\" no es una forma que exista en inglés."
    ],
    "tip_es": "Si el sujeto es un servidor, contenedor o base de datos que sufre o recibe una acción correctiva, busca siempre la estructura pasiva [to be + participio pasado].",
    "human_rule": "\"Fue aislado\" ➔ was isolated (was / were + 3.ª forma).",
    "trigger_anchor": "node ______ from the cluster within four seconds (fue aislado) ➔ was isolated",
    "spanglish_trap": "Elegir isolated porque suena a pasado. Si al nodo \"lo aíslan\", él recibe la acción: was isolated.",
    "ref": null
  },
  {
    "id": "ue-15",
    "section": "UE",
    "objective": "UE1",
    "topic": "G02",
    "difficulty": 2,
    "stem": "During the identity audit, the SOC analyst flagged twelve legacy service accounts ______ cryptographic API tokens had never been rotated.",
    "options": [
      "which",
      "whose",
      "that",
      "who's"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"tokens\", algo que pertenece a las cuentas (\"cuyos tokens\").\n• Regla: \"cuyo / cuyos\" ➔ whose, también con cosas y sistemas.\n• Descartas: which y that no dicen de quién es lo que viene después; who's significa \"who is\" y suena igual que whose.",
    "why_wrong": [
      "Incorrecto: which conecta con una cosa, pero no dice de quién es lo que viene después. Para eso haría falta \"the tokens of which\".",
      "Opción correcta: whose une las cuentas con sus tokens (\"cuyos tokens\").",
      "Incorrecto: that conecta con una cosa, pero no expresa posesión.",
      "Incorrecto: who's es \"who is\" o \"who has\". Suena igual que whose, por eso es la trampa de siempre."
    ],
    "tip_es": "Si después del espacio en blanco viene un sustantivo que pertenece al componente anterior (\"[cuentas] cuyos [tokens]\"), la única respuesta válida es \"whose\" (funciona tanto para personas como para máquinas).",
    "human_rule": "\"Cuyo / cuya / cuyos / cuyas\" se dice whose, también con cosas: \"accounts whose tokens…\".",
    "trigger_anchor": "accounts ______ tokens (cuyos tokens) ➔ whose",
    "spanglish_trap": "El oído confunde whose y who's porque suenan igual. Si puedes decir \"cuyo\" en español, es whose; who's solo vale si cabe \"quien es\".",
    "ref": null
  },
  {
    "id": "ue-16",
    "section": "UE",
    "objective": "UE3",
    "topic": "G03",
    "difficulty": 2,
    "stem": "Although all backend microservices report healthy CPU metrics, the API gateway is rejecting incoming TLS handshakes as if the entire cluster ______ offline.",
    "options": [
      "were",
      "is being",
      "will be",
      "has been"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"as if the entire cluster ______ offline\" describe algo que no es verdad: los servicios están sanos.\n• Regla: después de as if / as though, lo que no es real va en pasado ➔ were.\n• Descartas: \"is being\", \"will be\" y \"has been\" hablan de algo real.",
    "why_wrong": [
      "Opción correcta: \"as if the cluster were offline\" = \"como si el clúster estuviera caído\".",
      "Incorrecto: \"is being\" habla de algo real, y aquí no lo es.",
      "Incorrecto: \"will be\" habla del futuro.",
      "Incorrecto: \"has been\" habla de algo real."
    ],
    "tip_es": "Cuando una máquina actúa \"como si estuviera\" en un estado irreal (\"as if / as though\"), elige siempre el pasado contrafactual \"were\".",
    "human_rule": "as if / as though + algo irreal ➔ pasado (were).",
    "trigger_anchor": "…as if the entire cluster ______ offline (no es verdad) ➔ were",
    "spanglish_trap": "Poner is porque el español dice \"como si estuviera\" y el cerebro lo lee como presente. En inglés, lo irreal va en pasado.",
    "ref": null
  },
  {
    "id": "ue-17",
    "section": "UE",
    "objective": "UE5",
    "topic": "G08",
    "difficulty": 2,
    "stem": "Given that active exploitation of this zero-day vulnerability is already occurring in the wild, we ______ apply the emergency hotfix tonight, or our public endpoints will be compromised.",
    "options": [
      "ought",
      "had better",
      "had better to",
      "might want"
    ],
    "answer": 1,
    "why_correct": "• Pista: hay un riesgo inmediato (\"or our public endpoints will be compromised\") y después va el verbo sin to.\n• Regla: \"más vale que…\" ➔ had better + verbo sin to.\n• Descartas: ought necesita \"to\"; \"had better to\" lleva to de más; \"might want\" es una sugerencia suave, no una urgencia.",
    "why_wrong": [
      "Incorrecto: ought necesita \"to\" (ought to apply); sin él queda incompleto.",
      "Opción correcta: \"had better apply\" = \"más vale que apliquemos\".",
      "Incorrecto: después de had better no va \"to\".",
      "Incorrecto: \"might want\" necesita \"to\" y es una sugerencia suave, no una urgencia."
    ],
    "tip_es": "Recuerda el contraste de sintaxis en modales de consejo: \"ought TO + verbo\" (siempre con to) frente a \"had better + verbo\" (nunca lleva to y denota urgencia con consecuencia).",
    "human_rule": "Riesgo inminente ➔ had better + verbo sin to.",
    "trigger_anchor": "…or our endpoints will be compromised (urgencia) ➔ had better",
    "spanglish_trap": "Pensar que had better habla del pasado porque lleva \"had\". Habla del presente o del futuro inmediato, y no lleva to.",
    "ref": null,
    "trigger_scan": "Ancla de Urgencia en Soporte: \"we ______ apply the emergency hotfix tonight, or our public endpoints will be compromised\" -> Urgencia crítica + verbo base sin \"to\" = \"had better\"."
  },
  {
    "id": "ue-18",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 3,
    "stem": "The forensic packet capture proves that zero traffic traversed the external firewall port; therefore, the data exfiltration ______ occurred through an internal rogue device.",
    "options": [
      "should have",
      "can't have",
      "ought to have",
      "must have"
    ],
    "answer": 3,
    "why_correct": "• Pista: la evidencia (\"zero traffic\") descarta lo externo y deja una sola explicación (\"therefore\").\n• Regla: la evidencia lo confirma ➔ must have + 3.ª forma.\n• Descartas: can't have diría que fue imposible; should have y ought to have son reproches, no deducciones.",
    "why_wrong": [
      "Incorrecto: should have es un reproche (\"debió haber\"), no una deducción por evidencia.",
      "Incorrecto: can't have diría que fue imposible, y la evidencia dice lo contrario.",
      "Incorrecto: ought to have es un reproche, no una deducción.",
      "Opción correcta: \"must have occurred\" = \"seguro que ocurrió\"."
    ],
    "tip_es": "Para deducir qué causó un incidente en el pasado según los logs: certeza positiva = \"must have + participio\"; imposibilidad = \"can't have + participio\". Nunca uses \"should have\" para deducir causas.",
    "human_rule": "La evidencia lo confirma ➔ must have + 3.ª forma.",
    "trigger_anchor": "…proves…; therefore, the exfiltration ______ occurred (la evidencia confirma) ➔ must have",
    "spanglish_trap": "Usar should have pensando en \"debió ser\". Should have es un reproche; must have es una deducción: \"seguro que fue\".",
    "ref": null
  },
  {
    "id": "ue-19",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 2,
    "stem": "Postmortem log correlation revealed that the unauthorized script ______ over forty gigabytes of snapshot data before the SIEM anomaly rule triggered an alert.",
    "options": [
      "has exfiltrated",
      "was exfiltrating",
      "had exfiltrated",
      "exfiltrates"
    ],
    "answer": 2,
    "why_correct": "• Pista: hay dos momentos del pasado, y el primero ocurrió antes de que saltara la alerta (\"before the SIEM… triggered\").\n• Regla: lo que pasó antes de otro momento pasado ➔ had + 3.ª forma.\n• Descartas: has exfiltrated es presente perfecto; was exfiltrating no dice que ya terminó; exfiltrates es presente.",
    "why_wrong": [
      "Incorrecto: has exfiltrated habla del presente.",
      "Incorrecto: was exfiltrating dice que lo estaba haciendo, no que ya había terminado (\"over forty gigabytes\").",
      "Opción correcta: \"had exfiltrated\" = \"ya había extraído\".",
      "Incorrecto: exfiltrates es presente."
    ],
    "tip_es": "En secuencias de logs pasados con \"before\" o \"by the time\": la acción que ocurrió PRIMERO lleva \"had + participio\" (Past Perfect); la que ocurrió DESPUÉS lleva Past Simple.",
    "human_rule": "Lo que pasó antes de otro momento pasado ➔ had + 3.ª forma.",
    "trigger_anchor": "…before the alert triggered ➔ script ______ forty gigabytes ➔ had exfiltrated",
    "spanglish_trap": "Usar el pasado simple o el presente perfecto. Si hay dos momentos del pasado, lo que pasó primero va con had.",
    "ref": null
  },
  {
    "id": "ue-20",
    "section": "UE",
    "objective": "UE5",
    "topic": "G11",
    "difficulty": 2,
    "stem": "Because the attacker used valid credentials stolen from an executive's home laptop, the initial login ______ bypassed all perimeter brute-force detection filters without raising suspicion.",
    "options": [
      "presumably",
      "arguably",
      "reluctantly",
      "scarcely"
    ],
    "answer": 0,
    "why_correct": "• Pista: se explica cómo pasó algo con una suposición razonable (el atacante usó credenciales robadas).\n• Regla: \"es de suponer\" ➔ presumably.\n• Descartas: arguably va con superlativos; reluctantly es \"a regañadientes\"; scarcely es \"apenas\".",
    "why_wrong": [
      "Opción correcta: \"presumably bypassed\" = \"es de suponer que eludió\".",
      "Incorrecto: arguably se usa con superlativos (\"arguably the best\").",
      "Incorrecto: reluctantly significa \"a regañadientes\".",
      "Incorrecto: scarcely significa \"apenas\"."
    ],
    "tip_es": "Distingue en G11: \"Presumably\" = inferencia lógica muy probable según las pruebas; \"Arguably\" = postura técnica defendible en un debate; \"Conceivably\" = posibilidad teórica.",
    "human_rule": "\"Es de suponer\" (por lo que se sabe) ➔ presumably.",
    "trigger_anchor": "used valid stolen credentials, the login ______ bypassed the filters ➔ presumably",
    "spanglish_trap": "Elegir arguably porque suena parecido. Arguably va con superlativos; presumably, con suposiciones.",
    "ref": null,
    "trigger_scan": "Ancla de Inferencia Forense: \"Because the attacker used valid credentials... the initial login ______ bypassed all filters\" -> Deducción lógica altamente probable = \"presumably\"."
  },
  {
    "id": "ue-bonus-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G15",
    "difficulty": 2,
    "stem": "______ the primary DNS resolver has been experiencing intermittent packet loss since 06:00 UTC, the traffic manager redirected all external queries to the secondary cloud anycast node.",
    "options": [
      "Despite",
      "Since",
      "Whereas",
      "Unless"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"has been experiencing… since 06:00\" ya trae un \"since\" de tiempo, y el hueco explica por qué se redirigió el tráfico.\n• Regla: \"ya que\" ➔ Since (razón).\n• Descartas: Despite, Whereas y Unless no expresan una razón.",
    "why_wrong": [
      "Incorrecto: Despite significa \"a pesar de\".",
      "Opción correcta: \"Since the resolver has been…\" = \"ya que el resolutor ha estado…\".",
      "Incorrecto: Whereas compara dos cosas.",
      "Incorrecto: Unless significa \"a menos que\"."
    ],
    "tip_es": "\"Since\" al inicio de una oración técnica equivale formalmente a \"Because / As\" (\"Dado que el DNS fallaba...\").",
    "human_rule": "\"Ya que…\" ➔ Since + frase (razón).",
    "trigger_anchor": "______ the resolver has been experiencing loss…, the manager redirected traffic ➔ Since",
    "spanglish_trap": "Pensar que since siempre es \"desde\". Con una frase completa y una razón, \"ya que\".",
    "ref": null
  },
  {
    "id": "ue-bonus-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 2,
    "stem": "Although the emergency kernel patch was compiled yesterday, it has yet ______ validated against our legacy storage controller drivers.",
    "options": [
      "been",
      "being",
      "to be",
      "be"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"it has yet ______ validated\": la cosa recibe la acción.\n• Regla: aún no ha sido… ➔ has yet TO BE + 3.ª forma.\n• Descartas: been, being y be no completan la estructura sin to.",
    "why_wrong": [
      "Incorrecto: falta \"to\" antes de be.",
      "Incorrecto: being no va después de \"has yet\".",
      "Opción correcta: \"has yet to be validated\" = \"aún no ha sido validado\".",
      "Incorrecto: falta \"to\" antes de be."
    ],
    "tip_es": "Estructura fija para tareas pendientes en IT: [has / have yet + TO BE + participio] (\"The patch has yet to be validated\").",
    "human_rule": "\"Aún no ha sido…\" ➔ has yet to be + 3.ª forma.",
    "trigger_anchor": "it has yet ______ validated ➔ to be",
    "spanglish_trap": "Dejar \"has yet been\" sin to. Después de \"has yet\", to.",
    "ref": null
  },
  {
    "id": "ue-bonus-03",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 2,
    "stem": "Symmetric AES-256 encryption provides rapid bulk payload throughput, ______ asymmetric RSA key exchange requires significantly higher computational overhead during the initial handshake.",
    "options": [
      "despite",
      "meanwhile",
      "otherwise",
      "whereas"
    ],
    "answer": 3,
    "why_correct": "• Pista: se comparan dos cosas distintas (cifrado simétrico ➔ asimétrico), con una coma antes del hueco.\n• Regla: \"mientras que\" ➔ whereas.\n• Descartas: despite significa \"a pesar de\"; meanwhile une frases separadas; otherwise es \"de lo contrario\".",
    "why_wrong": [
      "Incorrecto: despite significa \"a pesar de\" y va con una cosa o -ing.",
      "Incorrecto: meanwhile une dos frases separadas, no dos partes de la misma.",
      "Incorrecto: otherwise significa \"de lo contrario\".",
      "Opción correcta: \"whereas\" = \"mientras que\"."
    ],
    "tip_es": "Para contrastar dos tecnologías o protocolos con una coma intermedia: usa \"whereas\" o \"while\" (\"TCP guarantees delivery, whereas UDP minimizes latency\").",
    "human_rule": "Comparar dos cosas distintas ➔ whereas / while.",
    "trigger_anchor": "AES-256 is fast, ______ RSA requires more overhead ➔ whereas",
    "spanglish_trap": "Elegir meanwhile por \"mientras\". Para comparar dentro de una misma frase, whereas.",
    "ref": null
  },
  {
    "id": "l-01",
    "section": "L",
    "objective": "L1",
    "topic": "V07",
    "difficulty": 2,
    "stem": "When Marcus asks whether automated route dampening triggered, what does Elena's response (\"It did. The unstable prefix was dampened...\") confirm?",
    "options": [
      "The automated feature failed to execute due to a syntax error.",
      "The routing tables continued to constantly re-run best-path selection.",
      "The dampening mechanism operated successfully as designed.",
      "The network engineers had to manually shut down the flapping interface."
    ],
    "answer": 2,
    "why_correct": "• Pista: Elena responde \"It did. The unstable prefix was dampened\": confirma que sí ocurrió.\n• Significado: El mecanismo de dampening funcionó como estaba diseñado.\n• Descartas: Que falló, que las rutas siguieron recalculándose o que hubo que apagarlo a mano contradice \"It did\".",
    "why_wrong": [
      "Incorrecto: Falló: contradice \"It did\".",
      "Incorrecto: Las rutas dejaron de oscilar; no siguió el reproceso.",
      "Opción correcta: El mecanismo funcionó como se diseñó.",
      "Incorrecto: No hizo falta apagarlo manualmente."
    ],
    "tip_es": "La respuesta afirmativa \"It did\" confirma la pregunta anterior (\"Did it trigger? -> It did\").",
    "human_rule": "It did = sí ocurrió, funcionó.",
    "trigger_anchor": "It did ➔ worked as designed",
    "spanglish_trap": "Leer \"dampened\" como \"mojado\". Es \"amortiguado\".",
    "ref": "aud-01",
    "paraphrase_map": "Audio: \"It did. The unstable prefix was dampened...\" <=> Opción C: \"The dampening mechanism operated successfully as designed.\""
  },
  {
    "id": "l-02",
    "section": "L",
    "objective": "L3",
    "topic": "V07",
    "difficulty": 2,
    "stem": "What technical trade-off of route dampening does Marcus highlight regarding the branch office in Frankfurt?",
    "options": [
      "It forces the autonomous system to delete all routing protocols.",
      "It permanently severs all physical fiber connections.",
      "It triggers unmanaged packet broadcasts across the backbone.",
      "It can periodically result in increased latency."
    ],
    "answer": 3,
    "why_correct": "• Pista: Marcus habla del costo de route dampening con la sucursal de Frankfurt.\n• Significado: Puede aumentar la latencia de forma periódica.\n• Descartas: Borrar todas las rutas, cortar la fibra o inundar broadcast no son efectos del dampening.",
    "why_wrong": [
      "Incorrecto: No borra todas las rutas.",
      "Incorrecto: No corta la fibra física.",
      "Incorrecto: No genera broadcasts descontrolados.",
      "Opción correcta: Puede aumentar la latencia periódicamente."
    ],
    "tip_es": "Atención a la cláusula de concesión y contraste: \"while [beneficio], it occasionally [consecuencia negativa: increases latency]\".",
    "human_rule": "dampening ayuda, pero tiene un trade-off.",
    "trigger_anchor": "trade-off ➔ latency",
    "spanglish_trap": "Pensar que una protección no tiene costo.",
    "ref": "aud-01",
    "paraphrase_map": "Audio: \"it effectively detours their traffic through London, adding roughly forty milliseconds\" <=> Opción D: \"It can periodically result in increased latency.\""
  },
  {
    "id": "l-03",
    "section": "L",
    "objective": "L5",
    "topic": "V06",
    "difficulty": 1,
    "stem": "According to Marcus, what mandatory operational step must Elena complete before initiating the diagnostic traceroute?",
    "options": [
      "Power cycle the perimeter edge router immediately.",
      "Log the carrier ticket reference in the change-management portal.",
      "Request executive authorization to terminate optical link monitoring.",
      "Disable automated dampening on all upstream transit peers."
    ],
    "answer": 1,
    "why_correct": "• Pista: Marcus pide un paso obligatorio antes del traceroute.\n• Significado: Registrar la referencia del ticket del carrier en el portal de gestión de cambios.\n• Descartas: Reiniciar el router, pedir autorización ejecutiva o desactivar dampening no son el paso pedido.",
    "why_wrong": [
      "Incorrecto: Reiniciar el router no es el paso previo.",
      "Opción correcta: Registrar el ticket del carrier en el portal de cambios.",
      "Incorrecto: No pide autorización ejecutiva.",
      "Incorrecto: No pide desactivar dampening."
    ],
    "tip_es": "Escucha los conectores de secuencia: \"Make sure you [acción A] before [acción B]\".",
    "human_rule": "antes de diagnosticar: registra el cambio.",
    "trigger_anchor": "before traceroute ➔ log ticket",
    "spanglish_trap": "Saltar el proceso de cambios.",
    "ref": "aud-01",
    "paraphrase_map": "Audio: \"Make sure you log the carrier ticket reference in our change-management portal before initiating the diagnostic traceroute\" <=> Opción B."
  },
  {
    "id": "l-04",
    "section": "L",
    "objective": "L1",
    "topic": "V04",
    "difficulty": 1,
    "stem": "In the security debrief, what pretext did the fraudulent caller fabricate to justify requesting a manual multi-factor override?",
    "options": [
      "He claimed he was stranded at an airport and had lost his authenticator token.",
      "He reported that the core authentication server was undergoing an emergency reboot.",
      "He stated that ransomware had compromised his departmental workstation.",
      "He insisted he was conducting an unannounced compliance drill for human resources."
    ],
    "answer": 0,
    "why_correct": "• Pista: Pregunta por el pretexto del atacante para pedir el override de MFA.\n• Significado: Dijo que estaba varado en un aeropuerto y perdió su token.\n• Descartas: Reinicio del servidor, ransomware o simulacro de RR.HH. no se dicen.",
    "why_wrong": [
      "Opción correcta: Dijo que estaba varado en un aeropuerto sin token.",
      "Incorrecto: No habló de reinicio del servidor.",
      "Incorrecto: No habló de ransomware.",
      "Incorrecto: No habló de simulacro."
    ],
    "tip_es": "\"Pretexting\" consiste en inventar una historia de urgencia (\"stranded at an airport terminal\") para provocar una excepción no autorizada.",
    "human_rule": "pretexto = historia inventada para justificar la petición.",
    "trigger_anchor": "stranded at airport ➔ pretext",
    "spanglish_trap": "Confundir pretext con \"pretexto\" de excusa trivial.",
    "ref": "aud-02"
  },
  {
    "id": "l-05",
    "section": "L",
    "objective": "L2",
    "topic": "V03",
    "difficulty": 2,
    "stem": "How did the suspicious caller react when David asked for his employee security verification code?",
    "options": [
      "He demanded to be transferred to the Chief Information Security Officer.",
      "He provided a forged code that passed validation.",
      "He agreed to switch to an out-of-band video verification session.",
      "He abruptly hung up the call."
    ],
    "answer": 3,
    "why_correct": "• Pista: Pregunta por la reacción del llamador sospechoso al pedirle el código de verificación.\n• Significado: El llamador colgó de golpe cuando le pidieron verificar su identidad: señal de fraude.\n• Descartas: Transferir, dar código falso o aceptar video no ocurrió en el audio.",
    "why_wrong": [
      "Incorrecto: No pidió hablar con el CISO.",
      "Incorrecto: No dio un código falso.",
      "Incorrecto: No aceptó videollamada.",
      "Opción correcta: Colgó de golpe (abruptly hung up)."
    ],
    "tip_es": "\"Terminated the call abruptly\" equivale a \"hung up suddenly\" (colgó de manera abrupta).",
    "human_rule": "Pides verificación ➔ el atacante cuelga o presiona.",
    "trigger_anchor": "asked for code ➔ hung up",
    "spanglish_trap": "Traducir \"abruptly\" como \"abruptamente educado\". Significa de repente.",
    "ref": "aud-02",
    "paraphrase_map": "Audio: \"When I asked for his employee security verification code, he abruptly terminated the call\" <=> Opción D: \"He abruptly hung up the call.\""
  },
  {
    "id": "l-06",
    "section": "L",
    "objective": "L3",
    "topic": "V05",
    "difficulty": 2,
    "stem": "What immediate mitigation step does Agent Thorne decide to take regarding the impersonated executive's account?",
    "options": [
      "Issue a reprimand to David for not satisfying a vice president's demand.",
      "Disable multi-factor authentication across the infrastructure department.",
      "Flag his active session tokens and alert the SOC for an identity audit.",
      "Disconnect the support desk phone lines to block future spoofed calls."
    ],
    "answer": 2,
    "why_correct": "• Pista: Pregunta por la medida inmediata de Thorne sobre la cuenta del ejecutivo suplantado.\n• Significado: Marca los tokens de sesión activos y avisa al SOC por posible robo de identidad.\n• Descartas: Regañar a David, apagar el MFA en toda la infraestructura o cortar teléfonos no contiene el ataque.",
    "why_wrong": [
      "Incorrecto: Regañar a David no frena el ataque.",
      "Incorrecto: Desactivar el MFA lo empeora.",
      "Opción correcta: Marcar los tokens de sesión y avisar al SOC.",
      "Incorrecto: Cortar las líneas no protege la cuenta."
    ],
    "tip_es": "En incidentes de suplantación, \"flagging active session tokens\" previene el secuestro de credenciales comprometidas.",
    "human_rule": "Cuenta suplantada: marca las sesiones y avisa al SOC.",
    "trigger_anchor": "impersonated account ➔ flag sessions + SOC",
    "spanglish_trap": "Pensar que mitigar es castigar o apagar controles.",
    "ref": "aud-02"
  },
  {
    "id": "l-07",
    "section": "L",
    "objective": "L3",
    "topic": "V03",
    "difficulty": 2,
    "stem": "During the heated escalation call (aud-03), why does Alex advise against immediately rebooting the primary cluster as demanded by Mr. Smith?",
    "options": [
      "The cluster has already been scheduled for decommissioning by the upstream carrier.",
      "Rebooting would terminate active database writes before the replication queue is inspected.",
      "Alex wants to wait until the legal department reviews the service level agreement.",
      "The support contract explicitly prohibits engineers from restarting hardware on weekdays."
    ],
    "answer": 1,
    "why_correct": "• Pista: Alex avisa: reiniciar corta escrituras activas en la base de datos.\n• Significado: No reiniciar de inmediato porque se pierden las escrituras antes de revisar la cola de replicación.\n• Descartas: Decommission, revisión legal y prohibición contractual no se mencionan.",
    "why_wrong": [
      "Incorrecto: No hay decommission planeado.",
      "Opción correcta: Reiniciar corta escrituras antes de revisar la cola de replicación.",
      "Incorrecto: No esperan a legal.",
      "Incorrecto: No hay prohibición contractual por día."
    ],
    "tip_es": "En llamadas de soporte N2/N3, la integridad de datos (\"active database writes\") prima sobre la presión de reiniciar a ciegas.",
    "human_rule": "Antes de reiniciar: revisar escrituras pendientes.",
    "trigger_anchor": "reboot now ➔ risk of data loss",
    "spanglish_trap": "Reiniciar es siempre la solución. Puede perder datos.",
    "ref": "aud-03"
  },
  {
    "id": "l-08",
    "section": "L",
    "objective": "L4",
    "topic": "V08",
    "difficulty": 2,
    "stem": "In the QA engineering sync (aud-04), which transition phrase does Priya use to contrast throughput performance against ongoing queue instability?",
    "options": [
      "Even though core throughput improved by twenty percent, stress testing revealed an unvalidated token cache.",
      "As a consequence of throughput gains, the token cache was automatically decommissioned.",
      "Provided that throughput reaches peak capacity, stress testing will be cancelled.",
      "Rather than improving throughput, the developers dismantled the payment queue."
    ],
    "answer": 0,
    "why_correct": "• Pista: Priya contrasta el rendimiento con la inestabilidad de la cola.\n• Significado: \"Even though...\" es la frase de contraste: aunque mejoró una cosa, otra sigue mal.\n• Descartas: As a consequence y Provided that no expresan contraste.",
    "why_wrong": [
      "Opción correcta: Even though core throughput improved by twenty percent, stress testing revealed an unvalidated token cache.",
      "Incorrecto: \"As a consequence of throughput gains, the token cache was…\" no es lo que dice el audio.",
      "Incorrecto: \"Provided that throughput reaches peak capacity, stress testing will…\" no es lo que dice el audio.",
      "Incorrecto: \"Rather than improving throughput, the developers dismantled the…\" no es lo que dice el audio."
    ],
    "tip_es": "Escucha cómo los líderes técnicos articulan concesiones: \"Even though [hecho positivo], [problema crítico subsistente]\".",
    "human_rule": "Even though = aunque (contraste).",
    "trigger_anchor": "contrast ➔ even though",
    "spanglish_trap": "Elegir conectores de causa cuando piden contraste.",
    "ref": "aud-04"
  },
  {
    "id": "l-09",
    "section": "L",
    "objective": "L5",
    "topic": "V08",
    "difficulty": 2,
    "stem": "According to Liam in the test report sync (aud-04), what will have happened before the change advisory board meets at 14:00?",
    "options": [
      "The deadlock will have been resolved and test reruns will have finished.",
      "The security team will have revoked all developer token privileges.",
      "The payment service will have been rolled back to version 2.1.",
      "The entire database cluster will have been migrated to an external cloud vendor."
    ],
    "answer": 0,
    "why_correct": "• Pista: Liam usa futuro perfecto: \"will have happened before 14:00\".\n• Significado: Antes de la reunión, el deadlock estará resuelto y las pruebas, completas.\n• Descartas: Las demás acciones no se dicen en el audio.",
    "why_wrong": [
      "Opción correcta: The deadlock will have been resolved and test reruns will have finished.",
      "Incorrecto: \"The security team will have revoked all developer token privileges.\" no es lo que dice el audio.",
      "Incorrecto: \"The payment service will have been rolled back to version 2.1.\" no es lo que dice el audio.",
      "Incorrecto: \"The entire database cluster will have been migrated to an external…\" no es lo que dice el audio."
    ],
    "tip_es": "Identifica el Future Perfect (\"will have resolved / will have finished\") para metas fijadas antes de una hora límite (\"before 14:00\").",
    "human_rule": "will have + participio = ya estará hecho antes de un momento.",
    "trigger_anchor": "will have ➔ done before",
    "spanglish_trap": "Entender will have como futuro simple.",
    "ref": "aud-04"
  },
  {
    "id": "l-10",
    "section": "L",
    "objective": "L1",
    "topic": "V07",
    "difficulty": 2,
    "stem": "During the emergency datacenter heat debrief (aud-05), under what exact condition does Sarah authorize performing hard power-offs?",
    "options": [
      "As soon as the Dublin facility loses commercial power.",
      "Only if the Amsterdam destination cluster reports memory exhaustion.",
      "Immediately upon sensor temperatures reaching thirty degrees Celsius.",
      "Only if the WAN connection drops during live migration."
    ],
    "answer": 3,
    "why_correct": "• Pista: Pregunta la condición exacta para apagar en seco.\n• Significado: Solo si el WAN cae durante la migración en vivo.\n• Descartas: Perder energía, que el clúster destino falle o llegar a cierta temperatura no es la condición exacta.",
    "why_wrong": [
      "Incorrecto: No basta perder energía comercial.",
      "Incorrecto: No es solo si falla el clúster destino.",
      "Incorrecto: No es al alcanzar cierta temperatura.",
      "Opción correcta: Solo si el WAN cae durante la migración en vivo."
    ],
    "tip_es": "Presta atención a la condición restrictiva con inversión: \"Only if the WAN connection drops should we perform...\".",
    "human_rule": "exact condition = el único caso permitido.",
    "trigger_anchor": "exact condition ➔ WAN drops during migration",
    "spanglish_trap": "Elegir la condición más obvia.",
    "ref": "aud-05"
  },
  {
    "id": "l-11",
    "section": "L",
    "objective": "L3",
    "topic": "V07",
    "difficulty": 2,
    "stem": "In the disaster evacuation dialogue (aud-05), what is the underlying reason Sarah asks Kenji to notify customer success leads before DNS TTL expires?",
    "options": [
      "To recruit external contractor technicians for the Dublin machine room.",
      "To prevent customer support desks from being blindsided by client tickets when traffic reroutes.",
      "To comply with local municipal environmental noise regulations.",
      "To authorize an emergency billing credit for affected European clients."
    ],
    "answer": 1,
    "why_correct": "• Pista: Sarah pide avisar a customer success antes de que expire el TTL de DNS.\n• Significado: Para que el soporte no quede a ciegas cuando cambie el tráfico.\n• Descartas: Contratar técnicos, normas de ruido o créditos de facturación no son el motivo.",
    "why_wrong": [
      "Incorrecto: Contratar técnicos no es el motivo.",
      "Opción correcta: Evitar que soporte quede a ciegas.",
      "Incorrecto: Las normas de ruido no se mencionan.",
      "Incorrecto: Los créditos de facturación no se mencionan."
    ],
    "tip_es": "Infiere el impacto de negocio: avisar antes de que expire el TTL evita que el soporte se sature sin contexto de la migración de red.",
    "human_rule": "avisa antes del cambio de DNS.",
    "trigger_anchor": "before TTL expires ➔ notify support",
    "spanglish_trap": "Traducir TTL como \"tiempo de vida\" sin ver el efecto operativo.",
    "ref": "aud-05"
  },
  {
    "id": "l-12",
    "section": "L",
    "objective": "L2",
    "topic": "V07",
    "difficulty": 2,
    "stem": "In the network executive report (aud-06), why did call center agents experience voice dropouts despite Quality of Service (QoS) tagging functioning correctly?",
    "options": [
      "A denial-of-service attack corrupted the DSCP header values on all edge switches.",
      "The call center headsets were incompatible with the updated PBX firmware.",
      "Interface transmit queues filled up so rapidly that high-priority voice frames suffered jitter buffer overflows.",
      "Upstream transit providers completely disabled voice packet routing on Tuesday."
    ],
    "answer": 2,
    "why_correct": "• Pista: QoS bien etiquetado, pero hubo cortes de voz: otro problema.\n• Significado: Las colas de transmisión de la interfaz se llenaron tan rápido que se perdieron paquetes de voz.\n• Descartas: Ataque DoS, auriculares incompatibles o proveedores que desactivan voz no coinciden.",
    "why_wrong": [
      "Incorrecto: Un DoS no corrompió DSCP.",
      "Incorrecto: Los auriculares no son la causa.",
      "Opción correcta: Las colas de transmisión se llenaron demasiado rápido.",
      "Incorrecto: Los proveedores no desactivaron voz."
    ],
    "tip_es": "En redes: si el enlace se satura al 96%, incluso con QoS los buffers de interfaz se desbordan (\"jitter buffer overflows\").",
    "human_rule": "QoS etiqueta, pero no crea ancho de banda.",
    "trigger_anchor": "QoS ok + dropouts ➔ queues full",
    "spanglish_trap": "Creer que QoS resuelve la congestión.",
    "ref": "aud-06"
  },
  {
    "id": "l-13",
    "section": "L",
    "objective": "L5",
    "topic": "V07",
    "difficulty": 1,
    "stem": "What interim operational adjustment does Carlos recommend in aud-06 while the company awaits the 25-gigabit link upgrade?",
    "options": [
      "Rerouting all voice traffic over public cellular hotspots.",
      "Restricting database backup replication to off-peak hours.",
      "Reconfiguring the core router DSCP tags to drop unthrottled backup frames during peak hours.",
      "Replacing optical fiber transceivers with copper patch cables."
    ],
    "answer": 1,
    "why_correct": "• Pista: Medida provisional mientras llega el enlace de 25 Gb.\n• Significado: Limitar la replicación de backups a horas de baja carga.\n• Descartas: Celular, descartar tráfico o cambiar a cobre no es lo recomendado.",
    "why_wrong": [
      "Incorrecto: Celular público no es una opción.",
      "Opción correcta: Restringir replicaciones a horas valle.",
      "Incorrecto: Descartar tráfico no es la medida.",
      "Incorrecto: Cobre sería una degradación."
    ],
    "tip_es": "La locución temporal es \"in the meantime\" (= mientras tanto / en el período provisional).",
    "human_rule": "interim = solución mientras llega la definitiva.",
    "trigger_anchor": "interim ➔ off-peak backups",
    "spanglish_trap": "Traducir interim como \"internacional\".",
    "ref": "aud-06",
    "paraphrase_map": "Audio: \"and in the meantime we restrict backup replication to off-peak hours\" <=> Opción B: \"Restricting database backup replication to off-peak hours.\""
  },
  {
    "id": "l-14",
    "section": "L",
    "objective": "L3",
    "topic": "V08",
    "difficulty": 3,
    "stem": "In the product sparring session (aud-07), what technical compromise do Oliver and Nadia reach to reconcile compliance with user friction?",
    "options": [
      "Implement biometric WebAuthn prompt refresh, allowing rapid re-authentication without retyping credentials.",
      "Extend the idle session timeout to twenty-four hours for all corporate accounts.",
      "Exempt medical billing accountants from HIPAA and zero-trust controls.",
      "Replace cloud web interfaces with an unencrypted terminal-based legacy portal."
    ],
    "answer": 0,
    "why_correct": "• Pista: Oliver y Nadia concilian cumplimiento con fricción de usuario.\n• Significado: Acuerdan refrescar con WebAuthn biométrico en vez de forzar el cierre.\n• Descartas: Extender el timeout a 24 h, eximir HIPAA o quitar cifrado rompen el cumplimiento.",
    "why_wrong": [
      "Opción correcta: Implement biometric WebAuthn prompt refresh, allowing rapid re-authentication without retyping credentials.",
      "Incorrecto: \"Extend the idle session timeout to twenty-four hours for all…\" no es lo que dice el audio.",
      "Incorrecto: \"Exempt medical billing accountants from HIPAA and zero-trust controls.\" no es lo que dice el audio.",
      "Incorrecto: \"Replace cloud web interfaces with an unencrypted terminal-based…\" no es lo que dice el audio."
    ],
    "tip_es": "Escucha cómo se alcanza el consenso: \"conceivably implement biometric WebAuthn... sensible compromise\".",
    "human_rule": "compromiso = cumplir sin molestar al usuario.",
    "trigger_anchor": "compliance + friction ➔ biometric refresh",
    "spanglish_trap": "Elegir quitar la regla en vez de adaptarla.",
    "ref": "aud-07"
  },
  {
    "id": "l-15",
    "section": "L",
    "objective": "L4",
    "topic": "V08",
    "difficulty": 2,
    "stem": "How does Oliver build his argument against the rigid ten-minute session timeout in aud-07?",
    "options": [
      "He argues that the ten-minute idle timeout violates protected health information compliance.",
      "He claims that security controls are obsolete and should be permanently removed.",
      "He cites telemetry showing customer drop-off spiked by fourteen percent and mentions angry tickets.",
      "He presents financial audit statements showing massive licensing cost increases."
    ],
    "answer": 2,
    "why_correct": "• Pista: Oliver argumenta contra el timeout rígido de 10 minutos.\n• Significado: Usa telemetría que muestra abandonos de clientes.\n• Descartas: No dice que sea ilegal, ni que los controles sean obsoletos, ni usa estados financieros.",
    "why_wrong": [
      "Incorrecto: \"He argues that the ten-minute idle timeout violates protected health…\" no es lo que dice el audio.",
      "Incorrecto: \"He claims that security controls are obsolete and should be…\" no es lo que dice el audio.",
      "Opción correcta: He cites telemetry showing customer drop-off spiked by fourteen percent and mentions angry tickets.",
      "Incorrecto: \"He presents financial audit statements showing massive licensing cost…\" no es lo que dice el audio."
    ],
    "tip_es": "En el objetivo L4 (construir discurso), observa cómo se sustentan las tesis con telemetría: \"telemetry indicates... drop-off spiked by fourteen percent\".",
    "human_rule": "argumento con datos = telemetría.",
    "trigger_anchor": "build argument ➔ telemetry",
    "spanglish_trap": "Pensar que el argumento es legal o emocional.",
    "ref": "aud-07"
  },
  {
    "id": "l-16",
    "section": "L",
    "objective": "L1",
    "topic": "V04",
    "difficulty": 1,
    "stem": "In the live vishing simulation (aud-08), what classic social engineering pressure tactic did the caller deploy when Samantha asked for verification?",
    "options": [
      "He confessed that he was an external penetration tester.",
      "He hung up calmly and scheduled a routine ticket review.",
      "He provided a valid employee badge ID but claimed his corporate email inbox was locked.",
      "He cited an urgent executive presentation and threatened departmental escalation when denied."
    ],
    "answer": 3,
    "why_correct": "• Pista: La táctica de presión clásica: urgencia y amenaza de escalar.\n• Significado: Citó una presentación ejecutiva urgente y amenazó con escalar.\n• Descartas: No confesó ser pentester ni colgó con calma ni dio una insignia.",
    "why_wrong": [
      "Incorrecto: No se confesó pentester.",
      "Incorrecto: No colgó con calma.",
      "Incorrecto: No dio insignia.",
      "Opción correcta: Urgencia ejecutiva y amenaza de escalar."
    ],
    "tip_es": "Red flags de vishing: urgencia extrema (\"save our presentation\") combinada con intimidación de estatus (\"file an escalation with your director\").",
    "human_rule": "urgencia + amenaza = presión de ingeniería social.",
    "trigger_anchor": "urgent + threat ➔ pressure",
    "spanglish_trap": "Aceptar la urgencia sin verificar.",
    "ref": "aud-08"
  },
  {
    "id": "l-17",
    "section": "L",
    "objective": "L5",
    "topic": "V04",
    "difficulty": 2,
    "stem": "What definitive security verification procedure did Samantha enforce in aud-08 to stop the fraudulent push approval?",
    "options": [
      "She approved the notification temporarily for five minutes.",
      "She read the six-digit SMS code back to the caller to check its validity.",
      "She refused manual phone approval and initiated an out-of-band video verification link to his corporate email.",
      "She transferred the call directly to the Chief Executive Officer."
    ],
    "answer": 2,
    "why_correct": "• Pista: Procedimiento definitivo: rechazar y verificar por otro canal.\n• Significado: Rechazó la aprobación manual y envió un enlace de video verificado a su correo.\n• Descartas: Aprobar temporalmente, leer el SMS o transferir al CEO son riesgosos.",
    "why_wrong": [
      "Incorrecto: Aprobar temporalmente es riesgoso.",
      "Incorrecto: Leer el código al llamador lo regala.",
      "Opción correcta: Rechazó y verificó por video a su correo.",
      "Incorrecto: Transferir al CEO no verifica."
    ],
    "tip_es": "Procedimiento estándar contra vishing: verificación fuera de banda (\"out-of-band video verification\") a la dirección de correo corporativa oficial.",
    "human_rule": "verifica por otro canal (out-of-band).",
    "trigger_anchor": "push approval ➔ out-of-band",
    "spanglish_trap": "Aprobar para ser amable.",
    "ref": "aud-08"
  },
  {
    "id": "l-18",
    "section": "L",
    "objective": "L3",
    "topic": "V08",
    "difficulty": 2,
    "stem": "In the executive briefing (aud-09), what shipping harbor analogy does Elena use to explain the cloud outage to the Chief Financial Officer?",
    "options": [
      "The cloud servers completely ran out of disk capacity to store promotional email assets.",
      "The surge of customers overwhelmed staging berths, creating an abrupt deadlock rather than a hardware breakdown.",
      "An external cargo vessel severed the undersea fiber optic cable connecting the secondary datacenter.",
      "Marketing administrators forgot to purchase premium enterprise shipping containers for database tables."
    ],
    "answer": 1,
    "why_correct": "• Pista: Elena usa una analogía de puerto marítimo.\n• Significado: La oleada de clientes saturó las zonas de espera (berths), como barcos en un puerto.\n• Descartas: Disco lleno, barco cortando cables o marketing no son la analogía.",
    "why_wrong": [
      "Incorrecto: \"The cloud servers completely ran out of disk capacity to store…\" no es lo que dice el audio.",
      "Opción correcta: The surge of customers overwhelmed staging berths, creating an abrupt deadlock rather than a hardware breakdown.",
      "Incorrecto: \"An external cargo vessel severed the undersea fiber optic cable…\" no es lo que dice el audio.",
      "Incorrecto: \"Marketing administrators forgot to purchase premium enterprise…\" no es lo que dice el audio."
    ],
    "tip_es": "En el Dominio 2.4 (comunicación con directivos no técnicos), identifica cómo los arquitectos usan analogías cotidianas para explicar cuellos de botella sin jerga cruda.",
    "human_rule": "analogía = comparar con algo conocido.",
    "trigger_anchor": "harbor analogy ➔ berths overwhelmed",
    "spanglish_trap": "Tomar la analogía como hecho literal.",
    "ref": "aud-09"
  },
  {
    "id": "l-19",
    "section": "L",
    "objective": "L5",
    "topic": "V08",
    "difficulty": 2,
    "stem": "According to Elena in aud-09, why did cloud engineering advise against triggering immediate failover to the backup data center?",
    "options": [
      "The backup datacenter had been decommissioned due to corporate budgetary cuts.",
      "Company compliance rules strictly prohibit operating cloud workloads across European time zones.",
      "The Chief Financial Officer had not yet countersigned the emergency disaster recovery addendum.",
      "Switching sites would merely transfer the connection pool choke and risk corrupting in-flight payment transactions."
    ],
    "answer": 3,
    "why_correct": "• Pista: Elena explica por qué no hacer failover inmediato.\n• Significado: Cambiar de sitio solo trasladaría el cuello de botella de conexión.\n• Descartas: Centro dado de baja, reglas de cumplimiento o espera del CFO no son la razón.",
    "why_wrong": [
      "Incorrecto: \"The backup datacenter had been decommissioned due to corporate…\" no es lo que dice el audio.",
      "Incorrecto: \"Company compliance rules strictly prohibit operating cloud workloads…\" no es lo que dice el audio.",
      "Incorrecto: \"The Chief Financial Officer had not yet countersigned the emergency…\" no es lo que dice el audio.",
      "Opción correcta: Switching sites would merely transfer the connection pool choke and risk corrupting in-flight payment transactions."
    ],
    "tip_es": "En emergencias de alta disponibilidad: si el cuello de botella es saturación de conexiones en la base de datos, conmutar de sede traslada el problema y puede corromper datos transaccionales.",
    "human_rule": "failover no arregla un cuello de botella.",
    "trigger_anchor": "advise against failover ➔ moves the problem",
    "spanglish_trap": "Creer que failover siempre soluciona.",
    "ref": "aud-09"
  },
  {
    "id": "l-20",
    "section": "L",
    "objective": "L2",
    "topic": "V08",
    "difficulty": 2,
    "stem": "In the sprint planning negotiation (aud-10), what technical compromise balances QA stability standards with marketing release deadlines?",
    "options": [
      "Deploying the UI redesign behind a 10% traffic feature flag while patching connection leaks off-peak, monitored by synthetic health probes.",
      "Canceling the marketing promotion entirely and rewriting the checkout service in an uncompiled scripting language.",
      "Forcing the QA lead to approve the build without running regression suites on database connection pools.",
      "Requiring customers to complete twelve manual validation steps during checkout to artificially reduce transaction rates."
    ],
    "answer": 0,
    "why_correct": "• Pista: Negociación de sprint: calidad contra fecha de marketing.\n• Significado: Lanzar el rediseño detrás de un 10% de tráfico (feature flag).\n• Descartas: Cancelar la promoción, aprobar sin pruebas o exigir validaciones manuales no concilian.",
    "why_wrong": [
      "Opción correcta: Deploying the UI redesign behind a 10% traffic feature flag while patching connection leaks off-peak, monitored by synthetic health probes.",
      "Incorrecto: \"Canceling the marketing promotion entirely and rewriting the checkout…\" no es lo que dice el audio.",
      "Incorrecto: \"Forcing the QA lead to approve the build without running regression…\" no es lo que dice el audio.",
      "Incorrecto: \"Requiring customers to complete twelve manual validation steps during…\" no es lo que dice el audio."
    ],
    "tip_es": "En el Dominio 5.3 (negociación de proyectos técnicos): busca soluciones de compromiso como \"feature flags\", \"canary deployments\" y \"synthetic health probes con rollback automático\".",
    "human_rule": "compromiso = lanzar gradual con límites.",
    "trigger_anchor": "QA vs marketing ➔ 10% rollout",
    "spanglish_trap": "Elegir el extremo de un lado.",
    "ref": "aud-10"
  },
  {
    "id": "r-01",
    "section": "R",
    "objective": "R1",
    "topic": "V05",
    "difficulty": 1,
    "stem": "According to the passage on Zero-Trust Architecture, what foundational premise did traditional perimeter security rely on?",
    "options": [
      "Authentication sessions should automatically expire every thirty minutes.",
      "All employees should possess unrestricted administrative privileges by default.",
      "Lateral traffic between database servers was blocked at the physical layer.",
      "Any entity located inside the corporate local network was inherently trustworthy."
    ],
    "answer": 3,
    "why_correct": "• Pista: La premisa del perímetro tradicional: lo de dentro es confiable.\n• Significado: Se asumía que cualquier entidad dentro de la red corporativa era de confianza.\n• Descartas: Expiración de sesiones, permisos de administrador y bloqueo lateral no eran la premisa.",
    "why_wrong": [
      "Incorrecto: La expiración de sesiones es una medida de Zero Trust.",
      "Incorrecto: No se daban permisos de admin a todos.",
      "Incorrecto: El tráfico lateral no estaba bloqueado en el perímetro.",
      "Opción correcta: Todo lo que estaba dentro de la red local era de confianza."
    ],
    "tip_es": "Localiza en el primer párrafo: \"relied on an implicit assumption: any entity inside... was inherently trustworthy\".",
    "human_rule": "perímetro = confiar dentro, desconfiar fuera.",
    "trigger_anchor": "perimeter ➔ trust inside",
    "spanglish_trap": "Pensar que el perímetro vigilaba también el interior.",
    "ref": "txt-01",
    "evidence_quote": "any entity inside the corporate local area network (LAN) was inherently trustworthy"
  },
  {
    "id": "r-02",
    "section": "R",
    "objective": "R2",
    "topic": "V05",
    "difficulty": 2,
    "stem": "What primary protection does micro-segmentation provide if an attacker compromises a developer workstation?",
    "options": [
      "It allows unauthorized external cellular connections to bypass inspection.",
      "It mathematically restricts lateral movement across internal database workloads.",
      "It eliminates the requirement for multi-factor authentication on subsequent logins.",
      "It forces compromised developer workstations to refresh their authentication tokens every thirty minutes."
    ],
    "answer": 1,
    "why_correct": "• Pista: Si un atacante compromete un equipo, micro-segmentación limita hacia dónde sigue.\n• Significado: Restringe el movimiento lateral entre sistemas internos.\n• Descartas: No abre conexiones externas, no elimina el MFA ni obliga a renovar equipos.",
    "why_wrong": [
      "Incorrecto: No permite conexiones externas sin control.",
      "Opción correcta: Restringe el movimiento lateral dentro de la red.",
      "Incorrecto: No elimina la necesidad de MFA.",
      "Incorrecto: No obliga a renovar el equipo."
    ],
    "tip_es": "Busca la palabra clave \"micro-segmentation\" y correlaciónala con \"lateral movement... is mathematically restricted\".",
    "human_rule": "micro-segmentación = frenar el movimiento lateral.",
    "trigger_anchor": "compromised workstation ➔ limit lateral movement",
    "spanglish_trap": "Creer que segmentar impide el primer acceso.",
    "ref": "txt-01",
    "evidence_quote": "even if an adversary successfully compromises a single developer workstation, lateral movement across internal databases is mathematically restricted"
  },
  {
    "id": "r-03",
    "section": "R",
    "objective": "R3",
    "topic": "V05",
    "difficulty": 1,
    "stem": "Based on the Zero-Trust text, how often do re-authentication tokens expire to thwart session hijacking?",
    "options": [
      "Every four hours",
      "Every twenty-four hours",
      "Every thirty minutes",
      "Every seven days"
    ],
    "answer": 0,
    "why_correct": "• Pista: Pregunta un dato exacto: cada cuánto vencen los tokens.\n• Significado: Según el texto, cada cuatro horas.\n• Descartas: Veinticuatro horas, treinta minutos y siete días no aparecen en el texto.",
    "why_wrong": [
      "Opción correcta: Cada cuatro horas.",
      "Incorrecto: Veinticuatro horas no es lo que dice el texto.",
      "Incorrecto: Treinta minutos no aparece.",
      "Incorrecto: Siete días no aparece."
    ],
    "tip_es": "Lectura de escaneo rápido (Scanning): busca el término \"tokens expire\" y ubica el dato numérico \"four hours\".",
    "human_rule": "En preguntas de dato, busca la cifra exacta en el texto.",
    "trigger_anchor": "how often ➔ every four hours",
    "spanglish_trap": "Elegir la cifra que \"suena\" razonable en vez de la del texto.",
    "ref": "txt-01",
    "evidence_quote": "Periodic re-authentication tokens expire every four hours, preventing session hijacking from remaining unnoticed"
  },
  {
    "id": "r-04",
    "section": "R",
    "objective": "R4",
    "topic": "V08",
    "difficulty": 2,
    "stem": "What is highlighted as the primary drawback of using general-purpose Linux distributions on edge appliances?",
    "options": [
      "Their large daemon footprint and broad default attack surface require extensive hardening.",
      "They prevent support engineers from analyzing system logs through shell utilities.",
      "They are entirely unsupported by modern package repositories and communities.",
      "They lack administrative tools and driver compatibility for enterprise hardware."
    ],
    "answer": 0,
    "why_correct": "• Pista: Desventaja de Linux de propósito general en equipos de borde.\n• Significado: Su gran cantidad de demonios y amplia superficie de ataque por defecto.\n• Descartas: No impiden el análisis, sí tienen soporte y sí tienen herramientas.",
    "why_wrong": [
      "Opción correcta: Their large daemon footprint and broad default attack surface require extensive hardening.",
      "Incorrecto: \"They prevent support engineers from analyzing system logs through…\" no es lo que dice el texto.",
      "Incorrecto: \"They are entirely unsupported by modern package repositories and…\" no es lo que dice el texto.",
      "Incorrecto: \"They lack administrative tools and driver compatibility for…\" no es lo que dice el texto."
    ],
    "tip_es": "Presta atención al conector adversativo \"However\" en el segundo párrafo: \"However, their substantial background daemon footprint and broad default attack surface require aggressive hardening\".",
    "human_rule": "más servicios = más superficie de ataque.",
    "trigger_anchor": "general-purpose Linux ➔ big attack surface",
    "spanglish_trap": "Pensar que más funciones es más seguro.",
    "ref": "txt-02",
    "evidence_quote": "their substantial background daemon footprint and broad default attack surface require aggressive hardening"
  },
  {
    "id": "r-05",
    "section": "R",
    "objective": "R1",
    "topic": "V08",
    "difficulty": 2,
    "stem": "How do immutable micro-distributions protect edge appliances against persistent rootkits?",
    "options": [
      "By running resource-heavy antivirus scripts that inspect code in real time.",
      "By utilizing read-only root filesystems that prevent modification of core system files.",
      "By compiling kernel security patches in real time during scheduled maintenance windows.",
      "By prompting the user for an administrator password on every system call."
    ],
    "answer": 1,
    "why_correct": "• Pista: Cómo protegen las micro-distribuciones inmutables contra rootkits.\n• Significado: Usan sistema de archivos raíz de solo lectura que impide modificaciones persistentes.\n• Descartas: Antivirus pesado, parches en tiempo real o pedir contraseña no son el mecanismo.",
    "why_wrong": [
      "Incorrecto: \"By running resource-heavy antivirus scripts that inspect code in real…\" no es lo que dice el texto.",
      "Opción correcta: By utilizing read-only root filesystems that prevent modification of core system files.",
      "Incorrecto: \"By compiling kernel security patches in real time during scheduled…\" no es lo que dice el texto.",
      "Incorrecto: \"By prompting the user for an administrator password on every system…\" no es lo que dice el texto."
    ],
    "tip_es": "Conexión causa-efecto: \"read-only root filesystems\" impide modificar archivos clave y mitiga rootkits persistentes.",
    "human_rule": "inmutable = solo lectura = rootkit no persiste.",
    "trigger_anchor": "immutable ➔ read-only root",
    "spanglish_trap": "Creer que protege con antivirus.",
    "ref": "txt-02",
    "evidence_quote": "provide read-only root filesystems and minimal dependency trees. Because the core system files cannot be modified during normal execution, malicious binary injection and persistent rootkits are effectively mitigated"
  },
  {
    "id": "r-06",
    "section": "R",
    "objective": "R5",
    "topic": "V08",
    "difficulty": 3,
    "stem": "What happens when an immutable edge gateway experiences a boot integrity failure following an upgrade?",
    "options": [
      "The operating system initiates a background kernel recompilation cycle.",
      "A Tier-1 technician must travel on-site to execute a manual reinstallation.",
      "The appliance halts permanently in an unrecoverable kernel debugging prompt.",
      "It autonomously rolls back to the previously validated partition within thirty seconds."
    ],
    "answer": 3,
    "why_correct": "• Pista: Qué pasa si falla la integridad de arranque tras una actualización.\n• Significado: Se revierte automáticamente a la última versión válida.\n• Descartas: No hay recuperación manual obligatoria ni queda inutilizado.",
    "why_wrong": [
      "Incorrecto: \"The operating system initiates a background kernel recompilation…\" no es lo que dice el texto.",
      "Incorrecto: \"A Tier-1 technician must travel on-site to execute a manual…\" no es lo que dice el texto.",
      "Incorrecto: \"The appliance halts permanently in an unrecoverable kernel debugging…\" no es lo que dice el texto.",
      "Opción correcta: It autonomously rolls back to the previously validated partition within thirty seconds."
    ],
    "tip_es": "Combina \"atomic A/B partition swaps\" con la garantía de que \"autonomously rolls back... within thirty seconds\".",
    "human_rule": "falla de arranque = rollback automático.",
    "trigger_anchor": "boot failure ➔ auto rollback",
    "spanglish_trap": "Imaginar que alguien debe ir al sitio.",
    "ref": "txt-02",
    "evidence_quote": "if a boot integrity check fails after an update, the appliance autonomously rolls back to the previously validated operating state within thirty seconds"
  },
  {
    "id": "r-07",
    "section": "R",
    "objective": "R4",
    "topic": "V03",
    "difficulty": 2,
    "stem": "According to the passage \"A Feature, Not a Bug\" (txt-03), what should support engineers do instead of dismissing customer complaints with rigid policy jargon?",
    "options": [
      "Configure the authentication portal to extend idle browser sessions for non-technical users.",
      "Immediately disable all session timeouts across the corporate firewall.",
      "Explain the threat model mitigated by the control and offer practical workflow alternatives.",
      "Reimburse the subscription fees to settle the trouble ticket immediately."
    ],
    "answer": 2,
    "why_correct": "• Pista: El texto dice que se debe explicar el modelo de amenaza, no solo repetir la política.\n• Significado: Explicar qué amenaza evita el control y ofrecer alternativas prácticas.\n• Descartas: Extender sesiones, desactivar timeouts o reembolsar no es lo recomendado.",
    "why_wrong": [
      "Incorrecto: No se pide extender sesiones.",
      "Incorrecto: No se desactivan timeouts.",
      "Opción correcta: Explicar la amenaza que mitiga y ofrecer alternativas.",
      "Incorrecto: Reembolsar no resuelve la queja."
    ],
    "tip_es": "Busca la recomendación al final del texto: \"explain the precise threat model... offering practical workflow alternatives\".",
    "human_rule": "Explica el porqué de la regla + ofrece alternativa.",
    "trigger_anchor": "instead of jargon ➔ explain threat model",
    "spanglish_trap": "Pensar que \"jargon\" es mala palabra. Es lenguaje técnico para otros.",
    "ref": "txt-03",
    "evidence_quote": "support engineers ought to explain the precise threat model that the feature mitigates, while offering practical workflow alternatives"
  },
  {
    "id": "r-08",
    "section": "R",
    "objective": "R2",
    "topic": "V03",
    "difficulty": 2,
    "stem": "According to the passage \"A Feature, Not a Bug\" (txt-03), why do end users frequently submit urgent trouble tickets claiming that the authentication portal is crashing?",
    "options": [
      "Persistent browser certificates are corrupting local cache files on shared workstations.",
      "Single sign-on integration fails whenever more than ten concurrent users log in.",
      "An intentional security update automatically terminates idle browser sessions after ten minutes.",
      "Frontline support technicians manually reset user sessions during security audits."
    ],
    "answer": 2,
    "why_correct": "• Pista: Los usuarios abren tickets urgentes porque el portal parece caerse.\n• Significado: Una actualización de seguridad cierra sesiones inactivas a los 10 minutos a propósito.\n• Descartas: Certificados, SSO o resets manuales no son la causa.",
    "why_wrong": [
      "Incorrecto: Los certificados no corrompen caché.",
      "Incorrecto: SSO no falla por 10 usuarios.",
      "Opción correcta: Cierre intencional por seguridad tras 10 minutos de inactividad.",
      "Incorrecto: Soporte no resetea sesiones manualmente."
    ],
    "tip_es": "Distingue la perspectiva del usuario (\"application is continually crashing\") de la causa técnica real descrita en la misma oración (\"automatically terminate idle browser sessions after ten minutes\").",
    "human_rule": "timeout = diseño, no falla.",
    "trigger_anchor": "urgent tickets ➔ intentional timeout",
    "spanglish_trap": "Confundir \"intentional\" con \"inconveniente\".",
    "ref": "txt-03",
    "evidence_quote": "When an engineering team updates an authentication portal to automatically terminate idle browser sessions after ten minutes, end users frequently submit urgent trouble tickets reporting that the application is continually crashing."
  },
  {
    "id": "r-09",
    "section": "R",
    "objective": "R1",
    "topic": "V08",
    "difficulty": 2,
    "stem": "Based on the passage comparing Traditional Unix and Ubuntu Server LTS (txt-04), what has made scaling modern cloud-native microservices on proprietary Unix systems economically prohibitive?",
    "options": [
      "Their slow release cadence, proprietary hardware lock-in, and high licensing costs.",
      "Their inability to support advanced storage volume management and kernel virtualization.",
      "The absence of tailored operational runbooks across large telecommunications providers.",
      "A mandatory requirement to purchase five-year security maintenance subscriptions from Debian."
    ],
    "answer": 0,
    "why_correct": "• Pista: Por qué es difícil escalar microservicios en Unix propietario.\n• Significado: Su ciclo de lanzamientos lento y el hardware propietario.\n• Descartas: No es por almacenamiento, runbooks ni contratos de cinco años.",
    "why_wrong": [
      "Opción correcta: Their slow release cadence, proprietary hardware lock-in, and high licensing costs.",
      "Incorrecto: \"Their inability to support advanced storage volume management and…\" no es lo que dice el texto.",
      "Incorrecto: \"The absence of tailored operational runbooks across large…\" no es lo que dice el texto.",
      "Incorrecto: \"A mandatory requirement to purchase five-year security maintenance…\" no es lo que dice el texto."
    ],
    "tip_es": "En preguntas de detalle específico (R1), ubica el conector adversativo \"However\" en el segundo párrafo y verifica la equivalencia léxica: \"exorbitant licensing models\" = \"high licensing costs\".",
    "human_rule": "propietario = lento y atado al hardware.",
    "trigger_anchor": "proprietary Unix ➔ slow cadence + hardware",
    "spanglish_trap": "Culpar a falta de documentación.",
    "ref": "txt-04",
    "evidence_quote": "However, their slow release cadence, proprietary hardware lock-in, and exorbitant licensing models have made scaling modern cloud-native microservices economically prohibitive."
  },
  {
    "id": "r-10",
    "section": "R",
    "objective": "R3",
    "topic": "V08",
    "difficulty": 1,
    "stem": "According to the operating system evaluation in txt-04, why are critical security vulnerabilities patched and upstreamed faster in Ubuntu Server LTS than in proprietary Unix ecosystems?",
    "options": [
      "Proprietary Unix vendors restrict patch deployment exclusively to mainframe hardware.",
      "Automated Kubernetes orchestrators rewrite vulnerable source code without human intervention.",
      "Telecommunications providers prohibit third-party security researchers from inspecting Unix runbooks.",
      "A massive global community of DevOps engineers and security researchers actively audits Ubuntu repositories."
    ],
    "answer": 3,
    "why_correct": "• Pista: Por qué Ubuntu LTS parchea más rápido.\n• Significado: Una enorme comunidad global de DevOps contribuye y sube los parches.\n• Descartas: No es por restricciones de proveedores, orquestadores o telecomunicaciones.",
    "why_wrong": [
      "Incorrecto: \"Proprietary Unix vendors restrict patch deployment exclusively to…\" no es lo que dice el texto.",
      "Incorrecto: \"Automated Kubernetes orchestrators rewrite vulnerable source code…\" no es lo que dice el texto.",
      "Incorrecto: \"Telecommunications providers prohibit third-party security…\" no es lo que dice el texto.",
      "Opción correcta: A massive global community of DevOps engineers and security researchers actively audits Ubuntu repositories."
    ],
    "tip_es": "Para preguntas de escaneo rápido (R3), localiza en el texto la frase \"patched and upstreamed significantly faster\" y lee la cláusula causal inmediatamente anterior introducida por \"because\".",
    "human_rule": "comunidad grande = parches más rápidos.",
    "trigger_anchor": "faster patches ➔ global community",
    "spanglish_trap": "Culpar a una herramienta.",
    "ref": "txt-04",
    "evidence_quote": "Furthermore, because a massive global community of DevOps engineers and security researchers actively audits Ubuntu repositories, critical vulnerabilities are patched and upstreamed significantly faster than in proprietary Unix ecosystems."
  },
  {
    "id": "r-11",
    "section": "R",
    "objective": "R5",
    "topic": "V08",
    "difficulty": 3,
    "stem": "Synthesizing the infrastructure trends described in txt-04, how is the adoption of operating systems currently divided between legacy and new enterprise deployments?",
    "options": [
      "Greenfield cloud workloads rely on AIX and Solaris, whereas legacy telecom systems are migrating to Debian desktop builds.",
      "Legacy mainframe applications remain tied to proprietary Unix, whereas greenfield cloud workloads overwhelmingly adopt Ubuntu Server LTS.",
      "Both legacy mainframes and greenfield Kubernetes clusters have abandoned Unix-like kernels in favor of immutable micro-distributions.",
      "Financial backend systems exclusively deploy Ubuntu Server LTS on proprietary hardware, while telecom providers use Solaris for container orchestration."
    ],
    "answer": 1,
    "why_correct": "• Pista: Cómo se divide la adopción entre legado y nuevo.\n• Significado: Los mainframes legados siguen atados a Unix propietario; lo nuevo va a Linux.\n• Descartas: No se mezclan ambos, ni lo nuevo usa AIX o Solaris.",
    "why_wrong": [
      "Incorrecto: \"Greenfield cloud workloads rely on AIX and Solaris, whereas legacy…\" no es lo que dice el texto.",
      "Opción correcta: Legacy mainframe applications remain tied to proprietary Unix, whereas greenfield cloud workloads overwhelmingly adopt Ubuntu Server LTS.",
      "Incorrecto: \"Both legacy mainframes and greenfield Kubernetes clusters have…\" no es lo que dice el texto.",
      "Incorrecto: \"Financial backend systems exclusively deploy Ubuntu Server LTS on…\" no es lo que dice el texto."
    ],
    "tip_es": "En vocabulario de arquitectura TI (V08), recuerda el contraste clave: \"legacy\" = sistemas heredados existentes; \"greenfield\" = proyectos e infraestructuras creadas desde cero.",
    "human_rule": "legado = Unix propietario. Nuevo = Linux.",
    "trigger_anchor": "legacy vs greenfield",
    "spanglish_trap": "Pensar que se dividen al azar.",
    "ref": "txt-04",
    "evidence_quote": "While legacy mainframe applications remain tied to Unix, greenfield cloud workloads overwhelmingly adopt Ubuntu."
  },
  {
    "id": "r-12",
    "section": "R",
    "objective": "R1",
    "topic": "V05",
    "difficulty": 2,
    "stem": "According to the Zero-Trust Architecture transition blueprint in txt-01, which critical operational specification is STILL MISSING from the text to safely configure and deploy the egress firewall rules?",
    "options": [
      "The precise re-authentication token expiration window for active client sessions.",
      "The foundational assumption that all LAN entities are fundamentally untrusted.",
      "The specific destination TCP/UDP port numbers and IP subnets required by internal microservices for lateral traffic.",
      "The requirement for developer endpoints to complete continuous device health attestation."
    ],
    "answer": 2,
    "why_correct": "• Pista: Pregunta qué FALTA en el texto para configurar la regla de salida.\n• Significado: Faltan los puertos TCP/UDP y las subredes IP de destino.\n• Descartas: Ventana de tokens, premisa de LAN y autenticación continua sí aparecen.",
    "why_wrong": [
      "Incorrecto: La ventana de tokens sí aparece.",
      "Incorrecto: La premisa de la LAN sí aparece.",
      "Opción correcta: Faltan puertos y subredes de destino.",
      "Incorrecto: El requisito de autenticación continua sí aparece."
    ],
    "tip_es": "💡 En preguntas de \"Información Faltante\": no busques lo que leíste; contrasta qué dato técnico de la lista NO fue especificado en el documento para ejecutar la tarea.",
    "human_rule": "STILL MISSING = lo que el texto no dice.",
    "trigger_anchor": "still missing ➔ not in text",
    "spanglish_trap": "Elegir algo que sí aparece. Con \"missing\" busca lo ausente.",
    "ref": "txt-01",
    "evidence_quote": "Furthermore, least-privilege access policies segment resources at the application layer rather than granting broad network-level subnet visibility.",
    "paraphrase_map": "Pregunta: \"¿Qué información técnica requerida NO está en el texto txt-01?\" (GSE 59-75 Missing Information) <=> Opción C: \"Specific TCP/UDP port numbers and firewall subnet IP ranges.\""
  },
  {
    "id": "r-13",
    "section": "R",
    "objective": "R2",
    "topic": "V03",
    "difficulty": 2,
    "stem": "Reviewing the support engineering postmortem in txt-03 (\"A Feature, Not a Bug\"), which essential operational provision is NOT specified in the passage for handling long-running, automated batch data uploads?",
    "options": [
      "The exact duration of user inactivity that automatically triggers browser session termination.",
      "A documented exception process or extended grace period configuration for unattended background jobs.",
      "The recommendation for support engineers to explain the underlying threat model to affected users.",
      "The practical suggestion to implement persistent browser certificates and single sign-on."
    ],
    "answer": 1,
    "why_correct": "• Pista: Pregunta qué NO aparece: la excepción para trabajos automáticos largos.\n• Significado: El pasaje no menciona proceso de excepción ni periodo de gracia para jobs en segundo plano.\n• Descartas: Los otros tres sí aparecen: duración exacta, explicar amenaza, certificados y SSO.",
    "why_wrong": [
      "Incorrecto: Sí aparece: duración de diez minutos.",
      "Opción correcta: No aparece: proceso de excepción para jobs sin supervisión.",
      "Incorrecto: Sí aparece: explicar la amenaza.",
      "Incorrecto: Sí aparece: certificados y SSO."
    ],
    "tip_es": "💡 Para ítems de \"determine when desired information is missing\", lee con atención qué escenarios operativos quedaron descubiertos sin directriz explícita en la política.",
    "human_rule": "En \"NOT specified\" busca lo que falta en el texto.",
    "trigger_anchor": "NOT specified ➔ lo ausente",
    "spanglish_trap": "Elegir lo que sí aparece. Con NOT, busca lo que falta.",
    "ref": "txt-03",
    "evidence_quote": "When an engineering team updates an authentication portal to automatically terminate idle browser sessions after ten minutes, end users frequently submit urgent trouble tickets",
    "paraphrase_map": "Pregunta: \"Missing operational information in txt-03\" <=> Opción B: \"A documented exception process or extended grace period configuration for unattended background jobs.\""
  },
  {
    "id": "r-14",
    "section": "R",
    "objective": "R1",
    "topic": "V05",
    "difficulty": 2,
    "stem": "According to txt-01, what quantifiable security outcome do organizations report within the first quarter after deploying a Zero-Trust Network Architecture?",
    "options": [
      "An eighty percent reduction in lateral infection spread across internal resources.",
      "A complete elimination of initial policy refactoring overhead for legacy subnets.",
      "A four-hour reduction in average multi-factor authentication posture checks.",
      "An eighty percent decrease in external cellular hotspot bandwidth consumption."
    ],
    "answer": 0,
    "why_correct": "• Pista: Pregunta un resultado medible en el primer trimestre.\n• Significado: Un 80% menos de propagación de infección lateral.\n• Descartas: Eliminar la refactorización, bajar cuatro horas el MFA o reducir ancho de banda no aparecen.",
    "why_wrong": [
      "Opción correcta: 80% menos de propagación lateral.",
      "Incorrecto: No se elimina el esfuerzo de refactorización.",
      "Incorrecto: Las cuatro horas son de tokens, no de MFA.",
      "Incorrecto: El 80% no es de ancho de banda celular."
    ],
    "tip_es": "Escanea el último párrafo buscando métricas porcentuales (\"eighty percent decrease\").",
    "human_rule": "resultado medible = la cifra con su unidad.",
    "trigger_anchor": "quantifiable outcome ➔ 80% lateral",
    "spanglish_trap": "Mezclar cifras de distintas frases.",
    "ref": "txt-01",
    "evidence_quote": "While initial deployment requires significant policy refactoring, organizations report an eighty percent decrease in lateral infection spread within the first quarter."
  },
  {
    "id": "r-15",
    "section": "R",
    "objective": "R2",
    "topic": "V08",
    "difficulty": 2,
    "stem": "In txt-02, what challenge is specifically associated with adopting specialized immutable micro-distributions at the network edge?",
    "options": [
      "They lack atomic partition swap mechanisms during failed boot integrity checks.",
      "Their root filesystems can be easily modified by persistent rootkits during execution.",
      "Debugging them requires specialized containerized toolsets that junior analysts may initially find difficult.",
      "They require manual intervention taking several hours whenever an update fails."
    ],
    "answer": 2,
    "why_correct": "• Pista: Reto de adoptar micro-distribuciones inmutables en el borde.\n• Significado: Depurarlas requiere herramientas especializadas en contenedores.\n• Descartas: Sí tienen intercambio atómico de particiones y su raíz no se modifica fácilmente.",
    "why_wrong": [
      "Incorrecto: \"They lack atomic partition swap mechanisms during failed boot…\" no es lo que dice el texto.",
      "Incorrecto: \"Their root filesystems can be easily modified by persistent rootkits…\" no es lo que dice el texto.",
      "Opción correcta: Debugging them requires specialized containerized toolsets that junior analysts may initially find difficult.",
      "Incorrecto: \"They require manual intervention taking several hours whenever an…\" no es lo que dice el texto."
    ],
    "tip_es": "Presta atención a las cláusulas concesivas con \"Although\" al final de un párrafo técnico: suelen introducir la limitación u obstáculo principal.",
    "human_rule": "inmutable = más difícil de depurar.",
    "trigger_anchor": "immutable challenge ➔ debugging",
    "spanglish_trap": "Atribuirle fallos de seguridad.",
    "ref": "txt-02",
    "evidence_quote": "Although debugging immutable instances requires specialized containerized toolsets that junior analysts may find challenging initially, the dramatic reduction in unscheduled downtime makes immutable architectures the preferred standard for remote substations."
  },
  {
    "id": "r-16",
    "section": "R",
    "objective": "R4",
    "topic": "V03",
    "difficulty": 2,
    "stem": "According to txt-03, what is the primary consequence when frontline support technicians simply tell users that an aggressive timeout is \"a feature, not a bug\"?",
    "options": [
      "Users immediately adopt single sign-on and persistent browser certificates on their own.",
      "The information security officer revokes the mandatory ten-minute idle timeout policy.",
      "Engineering teams roll back the authentication portal to its previous configuration.",
      "Customer dissatisfaction invariably escalates due to the lack of empathy and context."
    ],
    "answer": 3,
    "why_correct": "• Pista: Decir \"es una feature, no un bug\" sin contexto frustra más.\n• Significado: La insatisfacción escala por falta de empatía y contexto.\n• Descartas: No hay adopción de SSO, revocación de política ni rollback.",
    "why_wrong": [
      "Incorrecto: Los usuarios no adoptan SSO por sí solos.",
      "Incorrecto: El oficial no revoca la política.",
      "Incorrecto: No hay rollback.",
      "Opción correcta: La insatisfacción escala por falta de empatía y contexto."
    ],
    "tip_es": "Busca la frase entrecomillada \"a feature, not a bug\" y lee la consecuencia inmediata en la cláusula principal.",
    "human_rule": "Sin empatía ni contexto = más enojo.",
    "trigger_anchor": "feature not bug ➔ customer more upset",
    "spanglish_trap": "Pensar que dar la razón técnica basta.",
    "ref": "txt-03",
    "evidence_quote": "When frontline support technicians dismiss these concerns by stating that the behavior is simply \"a feature, not a bug\", customer dissatisfaction invariably escalates."
  },
  {
    "id": "r-17",
    "section": "R",
    "objective": "R3",
    "topic": "V08",
    "difficulty": 2,
    "stem": "Based on txt-04, how long is the predictable security maintenance cycle provided by Ubuntu Server LTS?",
    "options": [
      "Five years.",
      "Four hours.",
      "Thirty seconds.",
      "Ten minutes."
    ],
    "answer": 0,
    "why_correct": "• Pista: Ciclo de mantenimiento predecible de Ubuntu LTS.\n• Significado: Cinco años.\n• Descartas: Cuatro horas, treinta segundos o diez minutos no son ciclos de soporte.",
    "why_wrong": [
      "Opción correcta: Five years.",
      "Incorrecto: \"Four hours.\" no es lo que dice el texto.",
      "Incorrecto: \"Thirty seconds.\" no es lo que dice el texto.",
      "Incorrecto: \"Ten minutes.\" no es lo que dice el texto."
    ],
    "tip_es": "Escanea el texto buscando \"LTS\" o \"security maintenance cycles\".",
    "human_rule": "LTS = soporte largo.",
    "trigger_anchor": "LTS ➔ five years",
    "spanglish_trap": "Confundir con tiempos de arranque.",
    "ref": "txt-04",
    "evidence_quote": "In contrast, Ubuntu Server LTS combines the stability of Debian with predictable five-year security maintenance cycles."
  },
  {
    "id": "r-18",
    "section": "R",
    "objective": "R2",
    "topic": "V08",
    "difficulty": 2,
    "stem": "According to the project report in txt-it1-1.5 (\"Supplier Evaluation Module\"), why does the team consider renegotiating the contract for extra contractor budget to be the worst-case scenario?",
    "options": [
      "Because the Rabbits and Eagles teams refused to share their source code repositories.",
      "Because the customer was very strict about not exceeding their budget and onboarding new hires would take too long.",
      "Because incremental value delivery is prohibited by the sewing machine manufacturer's compliance team.",
      "Because scope creep has already doubled the original number of required features."
    ],
    "answer": 1,
    "why_correct": "• Pista: Por qué renegociar el contrato para trabajo extra.\n• Significado: Porque el cliente fue muy estricto en no exceder el alcance.\n• Descartas: No fue por equipos que rechazan ni por entrega incremental prohibida.",
    "why_wrong": [
      "Incorrecto: \"Because the Rabbits and Eagles teams refused to share their source…\" no es lo que dice el texto.",
      "Opción correcta: Because the customer was very strict about not exceeding their budget and onboarding new hires would take too long.",
      "Incorrecto: \"Because incremental value delivery is prohibited by the sewing…\" no es lo que dice el texto.",
      "Incorrecto: \"Because scope creep has already doubled the original number of…\" no es lo que dice el texto."
    ],
    "tip_es": "Localiza \"worst-case scenario\" en el quinto párrafo y lee las dos razones que siguen inmediatamente.",
    "human_rule": "cliente estricto con alcance = renegociar.",
    "trigger_anchor": "renegotiate ➔ strict customer",
    "spanglish_trap": "Culpar al equipo.",
    "ref": "txt-it1-1.5",
    "evidence_quote": "As we learned from the sales team, they spent more than three months closing the deal, and the customer was very strict about exceeding their budget."
  },
  {
    "id": "r-19",
    "section": "R",
    "objective": "R3",
    "topic": "V06",
    "difficulty": 2,
    "stem": "In the memo in txt-it1-2.4 (\"Job Roles and Responsibilities\"), what discrepancy emerged between Mark and Dominic regarding why Dominic did nothing during the cabling incident?",
    "options": [
      "Mark claimed Dominic lacked proper training, whereas Dominic claimed the cable tester was broken.",
      "Mark said Dominic was absent on sick leave, whereas Dominic said he was assigned to another branch.",
      "Mark said Dominic asked him to do his job, whereas Dominic said Mark never told him he was needed.",
      "Mark insisted optical cabling belonged to Helpdesk, whereas Dominic insisted it belonged to Marketing."
    ],
    "answer": 2,
    "why_correct": "• Pista: La discrepancia entre Mark y Dominic sobre por qué Dominic no hizo nada.\n• Significado: Mark dijo que Dominic le pidió hacer su trabajo; Dominic dio otra versión.\n• Descartas: Falta de formación o baja médica no son la discrepancia.",
    "why_wrong": [
      "Incorrecto: Falta de formación no es lo que se discute.",
      "Incorrecto: La baja médica no se discute.",
      "Opción correcta: Mark dijo que Dominic le pidió hacer su trabajo.",
      "Incorrecto: Helpdesk y cableado óptico no es la discrepancia."
    ],
    "tip_es": "Busca el nombre propio \"Dominic\" en el tercer párrafo del memorando.",
    "human_rule": "discrepancy = dos versiones distintas del mismo hecho.",
    "trigger_anchor": "discrepancy ➔ two versions",
    "spanglish_trap": "Traducir discrepancy como \"desacuerdo de dinero\".",
    "ref": "txt-it1-2.4",
    "evidence_quote": "Dominic, a person from the IT Helpdesk who was working with you on that problem, didn’t do anything. You said it was because he asked you to do his job, but he says it was because you didn’t tell him he was needed."
  },
  {
    "id": "r-20",
    "section": "R",
    "objective": "R5",
    "topic": "V08",
    "difficulty": 3,
    "stem": "According to the final paragraph of txt-it1-1.5, what two immediate next steps must the team take if they proceed with the recommended third option (cutting scope for an MVP)?",
    "options": [
      "Terminate the current supplier contracts and hire external contractors immediately.",
      "Halt all development until the fourth quarter and transfer the project to the Eagles team.",
      "Upgrade the sewing machine firmware and deploy automated web scanners.",
      "Inform the customer about the plan and speak with the customer-field teams to confirm the MVP scope."
    ],
    "answer": 3,
    "why_correct": "• Pista: Dos pasos inmediatos si se sigue la tercera opción.\n• Significado: Informar al cliente del plan y hablar con el equipo.\n• Descartas: Terminar contratos, detener el desarrollo o actualizar firmware no es lo recomendado.",
    "why_wrong": [
      "Incorrecto: \"Terminate the current supplier contracts and hire external…\" no es lo que dice el texto.",
      "Incorrecto: \"Halt all development until the fourth quarter and transfer the…\" no es lo que dice el texto.",
      "Incorrecto: \"Upgrade the sewing machine firmware and deploy automated web scanners.\" no es lo que dice el texto.",
      "Opción correcta: Inform the customer about the plan and speak with the customer-field teams to confirm the MVP scope."
    ],
    "tip_es": "Lee las dos últimas oraciones del texto tras \"If we decide to proceed with the third option...\".",
    "human_rule": "siguiente paso = comunicar.",
    "trigger_anchor": "next steps ➔ inform customer + team",
    "spanglish_trap": "Elegir acciones drásticas.",
    "ref": "txt-it1-1.5",
    "evidence_quote": "If we decide to proceed with the third option, then the next step should include informing our customer about the plan. We should also speak with the customer-field teams to confirm the scope for a minimum viable product."
  },
  {
    "id": "ue-bonus-04",
    "section": "UE",
    "objective": "UE1",
    "topic": "G05",
    "difficulty": 2,
    "stem": "Our cloud disaster recovery architecture relies heavily ______ automated cross-region snapshot replication to prevent data loss.",
    "options": [
      "of",
      "on",
      "in",
      "with"
    ],
    "answer": 1,
    "why_correct": "• Pista: antes del hueco está \"relies\" (depender).\n• Regla: depender de ➔ rely ON.\n• Descartas: of, in y with no van con rely.",
    "why_wrong": [
      "Incorrecto: con rely no va \"of\", aunque en español digamos \"de\".",
      "Opción correcta: \"relies on\" = \"depende de\".",
      "Incorrecto: con rely no va \"in\".",
      "Incorrecto: con rely no va \"with\"."
    ],
    "tip_es": "Parejas inseparables G05: rely ON, depend ON, consist OF, comply WITH, increase IN, impact ON.",
    "human_rule": "\"Depender de\" ➔ rely / depend ON.",
    "trigger_anchor": "relies heavily ______ snapshot replication (depende de) ➔ on",
    "spanglish_trap": "Decir \"rely of\" por el \"de\" del español. En inglés es ON.",
    "ref": null,
    "trigger_scan": "Ancla Preposicional: \"relies heavily ______\" -> El verbo \"rely\" exige siempre la preposición \"on\"."
  },
  {
    "id": "ue-bonus-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G06",
    "difficulty": 2,
    "stem": "______ having deployed three additional load balancers ahead of the launch, the checkout microservice experienced brief latency spikes.",
    "options": [
      "Although",
      "Even though",
      "Despite",
      "Whereas"
    ],
    "answer": 2,
    "why_correct": "• Pista: después del hueco viene \"having deployed\", un verbo con -ing.\n• Regla: \"a pesar de\" + -ing ➔ Despite (o In spite of).\n• Descartas: Although, Even though y Whereas necesitan una frase completa con su sujeto.",
    "why_wrong": [
      "Incorrecto: Although necesita una frase completa con sujeto y verbo.",
      "Incorrecto: Even though necesita una frase completa con sujeto y verbo.",
      "Opción correcta: \"Despite having deployed\" = \"a pesar de haber desplegado\".",
      "Incorrecto: Whereas contrasta dos ideas y necesita una frase completa."
    ],
    "tip_es": "¿Después del hueco viene un verbo en -ING (\"having deployed\") o un sustantivo? Usa \"Despite\" o \"In spite of\".",
    "human_rule": "\"A pesar de\" + -ing o una cosa ➔ Despite.",
    "trigger_anchor": "______ having deployed three load balancers (-ing) ➔ Despite",
    "spanglish_trap": "Elegir Although porque suena a \"aunque\". Después de -ing, Despite.",
    "ref": null,
    "trigger_scan": "Ancla Sintáctica: \"______ having deployed\" (gerundio sin sujeto) -> Exige preposición concesiva \"Despite\"."
  },
  {
    "id": "ue-bonus-06",
    "section": "UE",
    "objective": "UE4",
    "topic": "G10",
    "difficulty": 1,
    "stem": "Step 4 of the Emergency Runbook: ______ the compromised container node before capturing the volatile memory dump, or forensic artifacts will be lost.",
    "options": [
      "Not reboot",
      "Never to reboot",
      "To not reboot",
      "Do not reboot"
    ],
    "answer": 3,
    "why_correct": "• Pista: es un paso de un manual y la orden es negativa.\n• Regla: \"no hagas…\" ➔ Do not + verbo base.\n• Descartas: \"Not reboot\", \"Never to reboot\" y \"To not reboot\" no son órdenes bien armadas.",
    "why_wrong": [
      "Incorrecto: \"Not reboot\" le falta el verbo pequeño (Do).",
      "Incorrecto: después de Never va el verbo base, sin to.",
      "Incorrecto: \"To not reboot\" no se usa como orden.",
      "Opción correcta: \"Do not reboot\" = \"no reinicies\"."
    ],
    "tip_es": "En runbooks e instrucciones técnicas: orden afirmativa = \"Verify / Isolate\"; orden negativa = \"Do not reboot / Never disable\".",
    "human_rule": "Orden negativa ➔ Do not + verbo base.",
    "trigger_anchor": "Step 4: ______ the compromised node ➔ Do not reboot",
    "spanglish_trap": "Copiar el \"no reinicies\" del español como \"Not reboot\". En inglés hace falta Do not.",
    "ref": null,
    "trigger_scan": "Ancla de Runbook: \"Step 4... ______ the compromised node, or artifacts will be lost\" -> Imperativo negativo \"Do not reboot\"."
  },
  {
    "id": "ue-bonus-07",
    "section": "UE",
    "objective": "UE4",
    "topic": "G21",
    "difficulty": 2,
    "stem": "Unless the database administrator ______ the stale read locks manually, the nightly ETL pipeline will time out at midnight.",
    "options": [
      "releases",
      "will release",
      "released",
      "would release"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Unless… ______…, the pipeline will time out\": una condición futura.\n• Regla: después de unless / if / when, el futuro se dice con presente ➔ releases.\n• Descartas: will release y would release no se usan después de unless; released es pasado.",
    "why_wrong": [
      "Opción correcta: \"unless the administrator releases\" = \"a menos que el administrador libere\".",
      "Incorrecto: después de unless no va will.",
      "Incorrecto: released es pasado, y la condición es futura.",
      "Incorrecto: would no se usa aquí."
    ],
    "tip_es": "\"Unless\" significa \"a menos que\" y sigue la misma regla que \"If\": va con Presente Simple, nunca con \"will\".",
    "human_rule": "unless / if + presente ➔ will + verbo (primera condicional).",
    "trigger_anchor": "Unless the DBA ______ the locks, the pipeline will time out ➔ releases",
    "spanglish_trap": "Poner will después de unless. Después de unless, el presente.",
    "ref": null,
    "trigger_scan": "Ancla Condicional: \"Unless the DBA ______ ..., the pipeline will time out\" -> First Conditional exige Presente Simple (\"releases\")."
  },
  {
    "id": "ue-bonus-08",
    "section": "UE",
    "objective": "UE2",
    "topic": "G26",
    "difficulty": 2,
    "stem": "Before we finalize the Q3 cloud migration roadmap, let's schedule a quick sync with the security architects to make sure everyone is ______.",
    "options": [
      "under the weather",
      "on the same page",
      "cutting corners",
      "pulling the plug"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"make sure everyone is…\" antes de cerrar un plan: que todos estén de acuerdo.\n• Regla: \"estar en la misma sintonía\" ➔ on the same page.\n• Descartas: under the weather es \"estar mal de salud\"; cutting corners es \"hacer algo a medias\"; pulling the plug es \"cortar algo de golpe\".",
    "why_wrong": [
      "Incorrecto: under the weather significa \"estar mal de salud\".",
      "Opción correcta: \"on the same page\" = \"estar en la misma sintonía\".",
      "Incorrecto: cutting corners significa \"hacer algo a medias para ahorrar\".",
      "Incorrecto: pulling the plug significa \"cortar algo de golpe\"."
    ],
    "tip_es": "Estar alineados en un equipo = \"be on the same page\" (con la preposición \"on\", nunca \"in\").",
    "human_rule": "\"Estar de acuerdo / en la misma sintonía\" ➔ on the same page.",
    "trigger_anchor": "make sure everyone is ______ (de acuerdo) ➔ on the same page",
    "spanglish_trap": "Traducir cada palabra (\"en la misma página\") y dudar. Los modismos se aprenden completos.",
    "ref": null,
    "trigger_scan": "Ancla Idiomática: \"schedule a quick sync... to make sure everyone is ______\" -> Alineación de equipo = \"on the same page\"."
  },
  {
    "id": "ue-bonus-09",
    "section": "UE",
    "objective": "UE3",
    "topic": "V01",
    "difficulty": 2,
    "stem": "By caching static assets at edge locations worldwide, the Content Delivery Network (CDN) drastically reduced both origin server load and outbound data ______ costs.",
    "options": [
      "ingress",
      "tenant",
      "egress",
      "hypervisor"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"outbound data ______ costs\": se habla del tráfico que sale de la nube hacia internet.\n• Significado: egress = datos que salen (se cobran por gigabyte); ingress = datos que entran.\n• Descartas: tenant es un cliente de la nube; hypervisor es el software que crea las máquinas virtuales.",
    "why_wrong": [
      "Incorrecto: ingress son los datos que entran, y normalmente no se cobran.",
      "Incorrecto: tenant es un cliente que usa la nube.",
      "Opción correcta: \"egress costs\" = \"costos de salida de datos\".",
      "Incorrecto: hypervisor es el software que crea las máquinas virtuales."
    ],
    "tip_es": "Tráfico que ENTRA a la nube = Ingress. Tráfico que SALE de la nube = Egress.",
    "human_rule": "egress = datos que SALEN (se cobran). ingress = datos que ENTRAN.",
    "trigger_anchor": "outbound data ______ costs ➔ egress",
    "spanglish_trap": "Confundir egress e ingress porque suenan parecido. In-gress entra; e-gress sale.",
    "ref": null,
    "trigger_scan": "Ancla Léxica Cloud: \"outbound data ______ costs\" -> Tráfico saliente de la nube = \"egress\"."
  },
  {
    "id": "ue-bonus-10",
    "section": "UE",
    "objective": "UE4",
    "topic": "V02",
    "difficulty": 2,
    "stem": "Unlike a traditional ahead-of-time compiler that generates a standalone native binary, a pure ______ translates and executes source code statements line by line at runtime.",
    "options": [
      "linker",
      "assembler",
      "decompiler",
      "interpreter"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"line by line at runtime\": traduce y ejecuta mientras corre.\n• Significado: interpreter = programa que lee el código y lo ejecuta línea por línea, sin generar un binario aparte.\n• Descartas: linker une archivos ya compilados; assembler convierte assembly; decompiler hace lo inverso a un compilador.",
    "why_wrong": [
      "Incorrecto: linker une archivos ya compilados en un ejecutable.",
      "Incorrecto: assembler traduce assembly a código máquina antes de ejecutar.",
      "Incorrecto: decompiler intenta reconstruir código fuente desde un binario.",
      "Opción correcta: interpreter = \"intérprete\", ejecuta el código línea por línea."
    ],
    "tip_es": "Traduce todo antes de correr = Compiler. Traduce y ejecuta línea por línea en vivo = Interpreter.",
    "human_rule": "interpreter = ejecuta línea por línea al correr. compiler = traduce todo antes.",
    "trigger_anchor": "line by line at runtime ➔ interpreter",
    "spanglish_trap": "Pensar que \"interpreter\" es solo la persona que traduce idiomas. En TI es un programa.",
    "ref": null,
    "trigger_scan": "Ancla Léxica V02: \"translates and executes source code statements line by line at runtime\" -> \"interpreter\"."
  }
];

