import { Question } from '../../types';

/**
 * Comprehensive Practice Bank covering previously underrepresented OpenEDG EIT-B2-01 topics:
 * - Grammar Topics: G10, G17, G18, G22, G23, G24, G25, G27, G28, G29 (12 items each = 120 items)
 * - Vocabulary Domains: V01, V02, V03, V04, V05 (8 additional items each = 40 items)
 * - Dedicated Practice Listening Pool: 20 items across aud-01..aud-10 (keeps SEED_QUESTIONS exclusive to Mock/Diagnostic)
 * Total: 180 verified B2 items with balanced answer distribution [25% A, 25% B, 25% C, 25% D].
 */
export const MISSING_TOPICS_AND_VOCAB_BANK: Question[] = [
  {
    "id": "bank-g10-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Step 1 of the Incident Runbook: ______ the compromised container from the production bridge network immediately.",
    "options": [
      "Isolate",
      "To isolate",
      "Isolating",
      "Isolated"
    ],
    "answer": 0,
    "why_correct": "• Pista: es el paso 1 de un manual y la orden es directa.\n• Regla: orden ➔ verbo base, sin sujeto.\n• Descartas: \"To isolate\", Isolating e Isolated no son órdenes.",
    "why_wrong": [
      "Opción correcta: \"Isolate\" = \"aísla\".",
      "Incorrecto: \"To isolate\" no es una orden directa.",
      "Incorrecto: Isolating es un verbo con -ing.",
      "Incorrecto: Isolated es el pasado o la 3.ª forma."
    ],
    "tip_es": "Orden directa en runbook = Verbo en forma base al inicio (\"Isolate\", \"Verify\", \"Run\").",
    "human_rule": "Orden en un manual ➔ verbo base.",
    "spanglish_trap": "Usar -ing o to. En una orden, el verbo va tal cual.",
    "ref": null,
    "trigger_anchor": "Step 1: ______ the container immediately ➔ Isolate"
  },
  {
    "id": "bank-g10-02",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "WARNING: ______ the primary database service while the schema migration script is actively executing.",
    "options": [
      "Not restart",
      "Do not restart",
      "Never to restart",
      "No restarting"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una advertencia: una orden negativa.\n• Regla: Do not + verbo base.\n• Descartas: \"Not restart\", \"Never to restart\" y \"No restarting\" no son órdenes bien armadas.",
    "why_wrong": [
      "Incorrecto: \"Not restart\" le falta el verbo pequeño (Do).",
      "Opción correcta: \"Do not restart\" = \"no reinicies\".",
      "Incorrecto: después de Never va el verbo base, sin to.",
      "Incorrecto: \"No restarting\" es un letrero, no una orden con verbo."
    ],
    "tip_es": "Para prohibiciones en manuales: \"Do not + verbo base\" o \"Never + verbo base\".",
    "human_rule": "Orden negativa ➔ Do not + verbo base.",
    "spanglish_trap": "Poner Not sin Do. Falta el verbo pequeño.",
    "ref": null,
    "trigger_anchor": "WARNING: ______ the primary service while… ➔ Do not restart"
  },
  {
    "id": "bank-g10-03",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Before deploying the hotfix to production, ______ that all integration tests pass in the staging pipeline.",
    "options": [
      "verifying",
      "to verify",
      "verify",
      "verified"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Before deploying…, ______ that all tests pass\": se da una orden.\n• Regla: orden ➔ verbo base (verify).\n• Descartas: verifying, \"to verify\" y verified no son órdenes.",
    "why_wrong": [
      "Incorrecto: verifying es un verbo con -ing.",
      "Incorrecto: \"to verify\" no es una orden directa.",
      "Opción correcta: \"verify\" = \"verifica\".",
      "Incorrecto: verified es el pasado o la 3.ª forma."
    ],
    "tip_es": "Después de \"Before/After + -ing,\" en un manual, la orden principal va en imperativo (\"verify\").",
    "human_rule": "Orden ➔ verbo base.",
    "spanglish_trap": "Poner -ing por \"antes de desplegar, verificando\". La orden va con el verbo tal cual.",
    "ref": null,
    "trigger_anchor": "Before deploying…, ______ that all tests pass ➔ verify"
  },
  {
    "id": "bank-g10-04",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The legacy authentication microservice is throwing memory errors and urgently needs ______ before peak traffic.",
    "options": [
      "to patch",
      "patched",
      "patch",
      "patching"
    ],
    "answer": 3,
    "why_correct": "• Pista: el servicio recibe la acción: \"necesita ser parchado\".\n• Regla: cosa + needs + -ing ➔ needs patching.\n• Descartas: \"to patch\" diría que el servicio parchea algo; patched y patch no encajan.",
    "why_wrong": [
      "Incorrecto: \"needs to patch\" diría que el servicio parchea algo.",
      "Incorrecto: \"needs patched\" no es una forma válida.",
      "Incorrecto: \"needs patch\" le falta -ing.",
      "Opción correcta: \"needs patching\" = \"necesita ser parchado\"."
    ],
    "tip_es": "Tras \"need\" con sujeto inanimado: usa \"needs + -ing\" (\"needs patching\") o \"needs to be + participio\".",
    "human_rule": "Cosa + needs + -ing ➔ \"necesita ser…\".",
    "spanglish_trap": "Decir \"needs to patch\". Con una cosa que recibe la acción, needs + -ing.",
    "ref": null,
    "trigger_anchor": "the service urgently needs ______ ➔ patching"
  },
  {
    "id": "bank-g10-05",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the diagnostic script with root privileges only if the standard health check fails to return a status code.",
    "options": [
      "Execute",
      "Executing",
      "To execute",
      "Executes"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una instrucción de un manual (\"only if the check fails\").\n• Regla: orden ➔ verbo base (Execute).\n• Descartas: Executing, \"To execute\" y Executes no son órdenes.",
    "why_wrong": [
      "Opción correcta: \"Execute\" = \"ejecuta\".",
      "Incorrecto: Executing es un verbo con -ing.",
      "Incorrecto: \"To execute\" no es una orden directa.",
      "Incorrecto: Executes lleva -s; la orden va tal cual."
    ],
    "tip_es": "En guías técnicas, las órdenes operativas nunca llevan \"-s\" ni empiezan con \"To\".",
    "human_rule": "Orden en un manual ➔ verbo base.",
    "spanglish_trap": "Poner -s o -ing. En una orden, el verbo va tal cual.",
    "ref": null,
    "trigger_anchor": "______ the script with root only if… ➔ Execute"
  },
  {
    "id": "bank-g10-06",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 3,
    "pool": "practice",
    "stem": "CAUTION: Never ______ unencrypted API tokens in client-side environment variables or public repositories.",
    "options": [
      "to store",
      "store",
      "storing",
      "stored"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Never ______\" es una prohibición.\n• Regla: Never + verbo base.\n• Descartas: \"to store\", storing y stored no van después de Never en una orden.",
    "why_wrong": [
      "Incorrecto: después de Never no va \"to\".",
      "Opción correcta: \"Never store\" = \"nunca guardes\".",
      "Incorrecto: después de Never va el verbo base, no -ing.",
      "Incorrecto: después de Never va el verbo base, no el pasado."
    ],
    "tip_es": "\"Never\" en instrucciones funciona como \"Do not\": va seguido del verbo en forma base.",
    "human_rule": "Never + verbo base (orden negativa).",
    "spanglish_trap": "Poner to o -ing por \"nunca guardar\". En una orden, verbo base.",
    "ref": null,
    "trigger_anchor": "CAUTION: Never ______ unencrypted tokens… ➔ store"
  },
  {
    "id": "bank-g10-07",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Once the TLS certificate is uploaded to the load balancer, ______ the proxy daemon to apply the changes.",
    "options": [
      "to reload",
      "reloading",
      "reload",
      "reloaded"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Once the certificate is uploaded, ______ the proxy\": se da una orden.\n• Regla: orden ➔ verbo base (reload).\n• Descartas: \"to reload\", reloading y reloaded no son órdenes.",
    "why_wrong": [
      "Incorrecto: \"to reload\" no es una orden directa.",
      "Incorrecto: reloading es un verbo con -ing.",
      "Opción correcta: \"reload\" = \"recarga\".",
      "Incorrecto: reloaded es el pasado."
    ],
    "tip_es": "Paso de acción tras \"Once...\" en documentación = imperativo en forma base.",
    "human_rule": "Orden ➔ verbo base.",
    "spanglish_trap": "Poner el pasado por \"una vez subido\". La orden va con el verbo tal cual.",
    "ref": null,
    "trigger_anchor": "Once the certificate is uploaded, ______ the proxy ➔ reload"
  },
  {
    "id": "bank-g10-08",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Several edge switches in Building B have outdated firmware and need ______ before the security audit on Friday.",
    "options": [
      "update",
      "to updating",
      "updated",
      "updating"
    ],
    "answer": 3,
    "why_correct": "• Pista: los switches reciben la acción: \"necesitan ser actualizados\".\n• Regla: cosa + need + -ing ➔ need updating.\n• Descartas: \"need update\" le falta -ing; \"to updating\" mezcla to con -ing; updated no encaja.",
    "why_wrong": [
      "Incorrecto: \"need update\" le falta -ing.",
      "Incorrecto: \"to updating\" mezcla to con -ing.",
      "Incorrecto: \"need updated\" no es una forma válida.",
      "Opción correcta: \"need updating\" = \"necesitan ser actualizados\"."
    ],
    "tip_es": "\"Need + -ing\" equivale a \"need to be + participio\" (\"need updating\").",
    "human_rule": "Cosa + need + -ing ➔ \"necesitan ser…\".",
    "spanglish_trap": "Mezclar to con -ing. O need to + verbo, o need + -ing; aquí, -ing.",
    "ref": null,
    "trigger_anchor": "switches… need ______ before the audit ➔ updating"
  },
  {
    "id": "bank-g10-09",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 3,
    "pool": "practice",
    "stem": "If the latency exceeds 200ms during the stress test, ______ the traffic generator and export the flame graph.",
    "options": [
      "halt",
      "halting",
      "to halt",
      "halts"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"If the latency exceeds…, ______ the generator\": se da una orden.\n• Regla: orden ➔ verbo base (halt).\n• Descartas: halting, \"to halt\" y halts no son órdenes.",
    "why_wrong": [
      "Opción correcta: \"halt\" = \"detén\".",
      "Incorrecto: halting es un verbo con -ing.",
      "Incorrecto: \"to halt\" no es una orden directa.",
      "Incorrecto: halts lleva -s; la orden va tal cual."
    ],
    "tip_es": "En runbooks: [If + condición en presente], [Imperativo en forma base].",
    "human_rule": "If… , + verbo base ➔ orden.",
    "spanglish_trap": "Poner -s por la tercera persona. En una orden, verbo base.",
    "ref": null,
    "trigger_anchor": "If the latency exceeds 200ms, ______ the generator ➔ halt"
  },
  {
    "id": "bank-g10-10",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Please ______ to attach the full HAR network capture when escalating a frontend timeout ticket to Tier 3.",
    "options": [
      "remembering",
      "remember",
      "to remember",
      "remembered"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Please ______ to attach\": una petición con please.\n• Regla: Please + verbo base (remember).\n• Descartas: remembering, \"to remember\" y remembered no van después de Please.",
    "why_wrong": [
      "Incorrecto: después de Please va el verbo base, no -ing.",
      "Opción correcta: \"Please remember to attach\" = \"por favor, recuerda adjuntar\".",
      "Incorrecto: después de Please no va \"to\" delante del verbo.",
      "Incorrecto: después de Please va el verbo base, no el pasado."
    ],
    "tip_es": "Después de \"Please\" en una orden o solicitud directa, usa siempre el verbo en forma base.",
    "human_rule": "Please + verbo base.",
    "spanglish_trap": "Poner to antes de remember. Después de Please, verbo base.",
    "ref": null,
    "trigger_anchor": "Please ______ to attach the full HAR capture ➔ remember"
  },
  {
    "id": "bank-g10-11",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ sure that port 443 is open on the security group before testing the webhook endpoint.",
    "options": [
      "Making",
      "To make",
      "Make",
      "Made"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"______ sure that port 443 is open\" es una orden.\n• Regla: Make sure + verbo base.\n• Descartas: Making, \"To make\" y Made no son órdenes.",
    "why_wrong": [
      "Incorrecto: Making es un verbo con -ing.",
      "Incorrecto: \"To make\" no es una orden directa.",
      "Opción correcta: \"Make sure\" = \"asegúrate\".",
      "Incorrecto: Made es el pasado."
    ],
    "tip_es": "Para decir \"Asegúrate de que...\" en un manual: \"Make sure that...\" o \"Ensure that...\".",
    "human_rule": "\"Asegúrate de que…\" ➔ Make sure that…",
    "spanglish_trap": "Poner -ing por \"asegurándote\". La orden va con el verbo tal cual.",
    "ref": null,
    "trigger_anchor": "______ sure that port 443 is open ➔ Make"
  },
  {
    "id": "bank-g10-12",
    "section": "UE",
    "objective": "UE1",
    "topic": "G10",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The corrupted database index on the replica node needs ______ before we can re-enable read traffic.",
    "options": [
      "rebuild",
      "to rebuild",
      "rebuilt",
      "rebuilding"
    ],
    "answer": 3,
    "why_correct": "• Pista: el índice recibe la acción: \"necesita ser reconstruido\".\n• Regla: cosa + needs + -ing ➔ needs rebuilding.\n• Descartas: rebuild y \"to rebuild\" harían que el índice reconstruya algo; rebuilt no encaja.",
    "why_wrong": [
      "Incorrecto: \"needs rebuild\" le falta -ing.",
      "Incorrecto: \"needs to rebuild\" diría que el índice reconstruye algo.",
      "Incorrecto: \"needs rebuilt\" no es una forma válida.",
      "Opción correcta: \"needs rebuilding\" = \"necesita ser reconstruido\"."
    ],
    "tip_es": "Sujeto técnico + \"needs\" -> elige \"-ing\" (\"rebuilding\") o \"to be rebuilt\".",
    "human_rule": "Cosa + needs + -ing ➔ \"necesita ser…\".",
    "spanglish_trap": "Decir \"needs to rebuild\". Con una cosa que recibe la acción, needs + -ing.",
    "ref": null,
    "trigger_anchor": "The corrupted index needs ______ ➔ rebuilding"
  },
  {
    "id": "bank-g17-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Every newly onboarded developer must configure ______ local GPG signing key before pushing commits to the main branch.",
    "options": [
      "their",
      "its",
      "his",
      "theirs"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Every developer must configure ______ local key\": una persona cualquiera.\n• Regla: ➔ their.\n• Descartas: its es para cosas; his excluye; theirs va sin un nombre después.",
    "why_wrong": [
      "Opción correcta: \"their local key\" = \"su clave local\".",
      "Incorrecto: its es para cosas.",
      "Incorrecto: his excluye a otras personas.",
      "Incorrecto: theirs no va delante de un nombre."
    ],
    "tip_es": "Con \"every / each / any + persona en singular\", usa el posesivo neutro \"their\".",
    "human_rule": "Una persona cualquiera ➔ their + nombre.",
    "spanglish_trap": "Usar his por tradición. Para una persona cualquiera, their.",
    "ref": null,
    "trigger_anchor": "Every developer must configure ______ local key ➔ their"
  },
  {
    "id": "bank-g17-02",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If an external contractor loses ______ hardware security key, the SOC must revoke the associated session tokens immediately.",
    "options": [
      "its",
      "their",
      "they",
      "them"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"If an external contractor loses ______ hardware key\": una persona cualquiera.\n• Regla: ➔ their.\n• Descartas: its es para cosas; they y them no son posesivos.",
    "why_wrong": [
      "Incorrecto: its es para cosas.",
      "Opción correcta: \"their hardware key\" = \"su llave\".",
      "Incorrecto: they no es un posesivo.",
      "Incorrecto: them no es un posesivo."
    ],
    "tip_es": "Nunca uses \"its\" para personas; para un contratista o usuario singular neutro, usa \"their\".",
    "human_rule": "Posesivo para una persona cualquiera ➔ their.",
    "spanglish_trap": "Usar they o them delante de un nombre. Delante de un nombre va el posesivo: their.",
    "ref": null,
    "trigger_anchor": "If a contractor loses ______ hardware key ➔ their"
  },
  {
    "id": "bank-g17-03",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Anyone who notices unusual outbound traffic on ______ workstation should report it to the security desk right away.",
    "options": [
      "his or her own",
      "its",
      "their",
      "theirs"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Anyone who notices… on ______ workstation\": una persona cualquiera.\n• Regla: ➔ their.\n• Descartas: \"his or her own\" también se usa, pero este ejercicio busca their; its es para cosas; theirs va sin nombre.",
    "why_wrong": [
      "Incorrecto: \"his or her own\" también se usa; este ejercicio busca their.",
      "Incorrecto: its es para cosas.",
      "Opción correcta: \"their workstation\" = \"su estación de trabajo\".",
      "Incorrecto: theirs no va delante de un nombre."
    ],
    "tip_es": "\"Anyone / Everybody / Someone\" toman el posesivo neutro \"their\".",
    "human_rule": "Anyone / someone / every… ➔ their.",
    "spanglish_trap": "Alargar con \"his or her\". En inglés actual, their.",
    "ref": null,
    "trigger_anchor": "Anyone who notices traffic on ______ workstation ➔ their"
  },
  {
    "id": "bank-g17-04",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 1,
    "pool": "practice",
    "stem": "When a Tier-1 support analyst escalates a critical ticket, ______ must include the diagnostic logs in the handoff note.",
    "options": [
      "it",
      "he",
      "them",
      "they"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"When a Tier-1 analyst escalates…, ______ must include the logs\": se retoma a esa persona.\n• Regla: una persona cualquiera ➔ they.\n• Descartas: it es para cosas; he excluye; them no es sujeto.",
    "why_wrong": [
      "Incorrecto: it es para cosas.",
      "Incorrecto: he excluye a otras personas.",
      "Incorrecto: them no es sujeto.",
      "Opción correcta: \"they\" = \"esa persona\" (sin especificar)."
    ],
    "tip_es": "Sujeto singular de género neutro (\"a support analyst\") -> pronombre sujeto \"they\".",
    "human_rule": "Retomar a una persona cualquiera ➔ they.",
    "spanglish_trap": "Poner it por \"él/ella\". It es para cosas.",
    "ref": null,
    "trigger_anchor": "When an analyst escalates a ticket, ______ must include the logs ➔ they"
  },
  {
    "id": "bank-g17-05",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 2,
    "pool": "practice",
    "stem": "No database administrator should ever use ______ personal email account to receive production alert notifications.",
    "options": [
      "their",
      "its",
      "theirs",
      "themselves"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"No database administrator should use ______ personal email\": una persona cualquiera.\n• Regla: ➔ their.\n• Descartas: its es para cosas; theirs va sin nombre; themselves es reflexivo.",
    "why_wrong": [
      "Opción correcta: \"their personal email\" = \"su correo personal\".",
      "Incorrecto: its es para cosas.",
      "Incorrecto: theirs no va delante de un nombre.",
      "Incorrecto: themselves es reflexivo, no un posesivo."
    ],
    "tip_es": "\"No + rol singular\" requiere el adjetivo posesivo neutro \"their\" antes del sustantivo.",
    "human_rule": "Posesivo para una persona cualquiera ➔ their.",
    "spanglish_trap": "Usar themselves por \"sí mismos\". Delante de un nombre va their.",
    "ref": null,
    "trigger_anchor": "No DBA should use ______ personal email ➔ their"
  },
  {
    "id": "bank-g17-06",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Each remote employee is responsible for ensuring that ______ home router firmware is kept up to date.",
    "options": [
      "its",
      "their",
      "they",
      "himself"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Each remote employee… that ______ home router firmware\": una persona cualquiera.\n• Regla: ➔ their.\n• Descartas: its es para cosas; they no es posesivo; himself es reflexivo.",
    "why_wrong": [
      "Incorrecto: its es para cosas.",
      "Opción correcta: \"their home router\" = \"su router de casa\".",
      "Incorrecto: they no es un posesivo.",
      "Incorrecto: himself es reflexivo."
    ],
    "tip_es": "\"Each employee\" + sustantivo -> usa \"their\".",
    "human_rule": "Posesivo para una persona cualquiera ➔ their.",
    "spanglish_trap": "Usar its porque employee es singular. Its es para cosas.",
    "ref": null,
    "trigger_anchor": "Each employee ensures that ______ home router is updated ➔ their"
  },
  {
    "id": "bank-g17-07",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 1,
    "pool": "practice",
    "stem": "If a customer states that ______ cannot access the billing portal, verify the SAML assertion status first.",
    "options": [
      "it",
      "their",
      "they",
      "them"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"If a customer states that ______ cannot access…\": el sujeto de la segunda frase es esa persona.\n• Regla: una persona cualquiera como sujeto ➔ they.\n• Descartas: it es para cosas; their es posesivo; them no es sujeto.",
    "why_wrong": [
      "Incorrecto: it es para cosas.",
      "Incorrecto: their es un posesivo; aquí falta un sujeto.",
      "Opción correcta: \"they cannot access\" = \"no puede acceder\".",
      "Incorrecto: them no es sujeto."
    ],
    "tip_es": "Delante de un verbo modal (\"cannot access\"), usa el pronombre sujeto \"they\".",
    "human_rule": "Sujeto para una persona cualquiera ➔ they.",
    "spanglish_trap": "Confundir they con their. Delante de un verbo va they.",
    "ref": null,
    "trigger_anchor": "a customer states that ______ cannot access the portal ➔ they"
  },
  {
    "id": "bank-g17-08",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 2,
    "pool": "practice",
    "stem": "A user who locks ______ out of the VPN three times within ten minutes will trigger an automated account freeze.",
    "options": [
      "itself",
      "himself",
      "themselfs",
      "themselves"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"A user who locks ______ out\": la persona se bloquea a sí misma.\n• Regla: una persona cualquiera + a sí misma ➔ themselves.\n• Descartas: itself es para cosas; himself excluye; \"themselfs\" no existe.",
    "why_wrong": [
      "Incorrecto: itself es para cosas.",
      "Incorrecto: himself excluye a otras personas.",
      "Incorrecto: \"themselfs\" no existe.",
      "Opción correcta: \"locks themselves out\" = \"se bloquea a sí misma\"."
    ],
    "tip_es": "Reflexivo neutro para \"a user / an employee\" -> \"themselves\" (nunca \"itself\").",
    "human_rule": "Una persona cualquiera + reflexivo ➔ themselves.",
    "spanglish_trap": "Escribir \"themself\". La forma es themselves.",
    "ref": null,
    "trigger_anchor": "A user who locks ______ out of the VPN ➔ themselves"
  },
  {
    "id": "bank-g17-09",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Before a release manager approves a hotfix, ______ ought to confirm that the rollback plan has been tested.",
    "options": [
      "they",
      "it",
      "their",
      "them"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Before a release manager approves…, ______ ought to confirm\": falta el sujeto.\n• Regla: una persona cualquiera como sujeto ➔ they.\n• Descartas: it es para cosas; their es posesivo; them no es sujeto.",
    "why_wrong": [
      "Opción correcta: \"they ought to confirm\" = \"debería confirmar\".",
      "Incorrecto: it es para cosas.",
      "Incorrecto: their es un posesivo.",
      "Incorrecto: them no es sujeto."
    ],
    "tip_es": "Posición de sujeto antes de \"ought to confirm\" -> \"they\".",
    "human_rule": "Sujeto para una persona cualquiera ➔ they.",
    "spanglish_trap": "Poner their porque suena igual. Falta un sujeto: they.",
    "ref": null,
    "trigger_anchor": "Before a release manager approves…, ______ ought to confirm ➔ they"
  },
  {
    "id": "bank-g17-10",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Every project stakeholder was asked to submit ______ availability for the sprint retrospective by Thursday.",
    "options": [
      "its",
      "their",
      "they",
      "there"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Every stakeholder was asked to submit ______ availability\": una persona cualquiera.\n• Regla: ➔ their.\n• Descartas: its es para cosas; they no es posesivo; there es otra palabra.",
    "why_wrong": [
      "Incorrecto: its es para cosas.",
      "Opción correcta: \"their availability\" = \"su disponibilidad\".",
      "Incorrecto: they no es un posesivo.",
      "Incorrecto: there significa \"allí\"."
    ],
    "tip_es": "Cuidado con los homófonos: posesivo = \"their\"; lugar = \"there\"; \"they are\" = \"they're\".",
    "human_rule": "Posesivo para una persona cualquiera ➔ their.",
    "spanglish_trap": "Confundir their, there y they're. Posesivo: their.",
    "ref": null,
    "trigger_anchor": "Every stakeholder submits ______ availability ➔ their"
  },
  {
    "id": "bank-g17-11",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If someone calls the helpdesk claiming ______ urgently need a password reset without verification, treat it as vishing.",
    "options": [
      "it",
      "he or she",
      "they",
      "them"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"If someone calls… claiming ______ urgently need\": falta un sujeto.\n• Regla: una persona cualquiera como sujeto ➔ they (need, sin -s).\n• Descartas: it es para cosas; \"he or she\" también se usa, pero concuerda con \"needs\"; them no es sujeto.",
    "why_wrong": [
      "Incorrecto: it es para cosas.",
      "Incorrecto: \"he or she\" pediría \"needs\", con -s.",
      "Opción correcta: \"they urgently need\" = \"necesitan con urgencia\".",
      "Incorrecto: them no es sujeto."
    ],
    "tip_es": "Además del género neutro, fíjate en el verbo \"need\" (sin -s), que exige el pronombre \"they\".",
    "human_rule": "they + verbo sin -s (they need).",
    "spanglish_trap": "Poner la -s con they. They siempre lleva el verbo sin -s.",
    "ref": null,
    "trigger_anchor": "someone calls claiming ______ urgently need a reset ➔ they"
  },
  {
    "id": "bank-g17-12",
    "section": "UE",
    "objective": "UE1",
    "topic": "G17",
    "difficulty": 3,
    "pool": "practice",
    "stem": "When an on-call engineer acknowledges an incident, the paging system automatically assigns the ticket to ______.",
    "options": [
      "it",
      "they",
      "their",
      "them"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"assigns the ticket to ______\": falta el objeto, y se habla de esa persona.\n• Regla: una persona cualquiera como objeto ➔ them.\n• Descartas: it es para cosas; they es sujeto; their es posesivo.",
    "why_wrong": [
      "Incorrecto: it es para cosas.",
      "Incorrecto: they es sujeto, no objeto.",
      "Incorrecto: their es un posesivo.",
      "Opción correcta: \"to them\" = \"a esa persona\"."
    ],
    "tip_es": "Después de una preposición (\"to ______\", \"for ______\"), usa el pronombre objeto \"them\".",
    "human_rule": "Objeto para una persona cualquiera ➔ them.",
    "spanglish_trap": "Usar they después de to. Después de una preposición va el objeto: them.",
    "ref": null,
    "trigger_anchor": "assigns the ticket to ______ ➔ them"
  },
  {
    "id": "bank-g18-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The cloud provider has yet ______ a formal root-cause analysis for last Tuesday's regional storage outage.",
    "options": [
      "to publish",
      "published",
      "publishing",
      "publish"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"has yet ______ a formal root-cause analysis\": aún no lo ha hecho.\n• Regla: \"aún no ha publicado\" ➔ has yet TO + verbo.\n• Descartas: published, publishing y publish no llevan to.",
    "why_wrong": [
      "Opción correcta: \"has yet to publish\" = \"aún no ha publicado\".",
      "Incorrecto: published no va después de \"has yet\".",
      "Incorrecto: publishing no va después de \"has yet\".",
      "Incorrecto: falta \"to\" antes del verbo."
    ],
    "tip_es": "Fórmula fija B2: [have / has yet + TO + verbo en forma base].",
    "human_rule": "\"Aún no ha…\" ➔ has yet to + verbo.",
    "spanglish_trap": "Leer \"has yet published\" como \"ya publicó\". Significa lo contrario.",
    "ref": null,
    "trigger_anchor": "has yet ______ a root-cause analysis ➔ to publish"
  },
  {
    "id": "bank-g18-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Our security operations center detected ______ another credential-stuffing campaign targeting the legacy OAuth endpoint.",
    "options": [
      "still",
      "yet",
      "already",
      "ever"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"detected ______ another credential-stuffing campaign\": \"otra más\".\n• Regla: ➔ yet another.\n• Descartas: still, already y ever no forman \"otra más\".",
    "why_wrong": [
      "Incorrecto: still significa \"todavía\".",
      "Opción correcta: \"yet another\" = \"otra más\".",
      "Incorrecto: already significa \"ya\".",
      "Incorrecto: ever significa \"alguna vez\"."
    ],
    "tip_es": "Para enfatizar \"otro fallo/ataque más\" en una serie repetitiva: \"yet another\".",
    "human_rule": "\"Otra más\" (con fastidio) ➔ yet another.",
    "spanglish_trap": "Elegir already por \"ya otra\". La expresión es yet another.",
    "ref": null,
    "trigger_anchor": "detected ______ another credential-stuffing campaign ➔ yet"
  },
  {
    "id": "bank-g18-03",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Although the pull request was opened three days ago, the senior architect has ______ to review the database schema changes.",
    "options": [
      "still",
      "already",
      "yet",
      "not"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"has ______ to review\": aún no lo ha hecho.\n• Regla: has yet to + verbo.\n• Descartas: still, already y not no forman esta estructura.",
    "why_wrong": [
      "Incorrecto: still no va con \"to review\" así.",
      "Incorrecto: already significa \"ya\".",
      "Opción correcta: \"has yet to review\" = \"aún no ha revisado\".",
      "Incorrecto: not no forma esta estructura."
    ],
    "tip_es": "Entre \"has/have\" y \"to + verbo\", el adverbio de tarea pendiente es \"yet\" (\"has yet to review\").",
    "human_rule": "has yet to + verbo.",
    "spanglish_trap": "Elegir already por \"ya\". Significa lo contrario: aún no.",
    "ref": null,
    "trigger_anchor": "the architect has ______ to review the schema changes ➔ yet"
  },
  {
    "id": "bank-g18-04",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The compliance audit revealed that four legacy servers have yet ______ migrated to the encrypted VLAN.",
    "options": [
      "been",
      "being",
      "be",
      "to be"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"have yet ______ migrated\": los servidores reciben la acción.\n• Regla: aún no han sido… ➔ have yet TO BE + 3.ª forma.\n• Descartas: been, being y be necesitan to.",
    "why_wrong": [
      "Incorrecto: falta \"to\" antes de be.",
      "Incorrecto: being no va después de \"have yet\".",
      "Incorrecto: falta \"to\" antes de be.",
      "Opción correcta: \"have yet to be migrated\" = \"aún no han sido migrados\"."
    ],
    "tip_es": "En voz pasiva: \"have/has yet TO BE + participio\" (\"have yet to be migrated\").",
    "human_rule": "\"Aún no han sido…\" ➔ have yet to be + 3.ª forma.",
    "spanglish_trap": "Dejar \"have yet been\". Después de \"have yet\", to.",
    "ref": null,
    "trigger_anchor": "four servers have yet ______ migrated ➔ to be"
  },
  {
    "id": "bank-g18-05",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Two weeks after the acquisition, the IT integration team ______ yet to receive the network topology diagrams from the vendor.",
    "options": [
      "has",
      "is",
      "did",
      "will"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"the team ______ yet to receive\": falta el verbo auxiliar.\n• Regla: ➔ has yet to + verbo.\n• Descartas: is, did y will no forman \"has yet to\".",
    "why_wrong": [
      "Opción correcta: \"has yet to receive\" = \"aún no ha recibido\".",
      "Incorrecto: is no forma esta estructura.",
      "Incorrecto: did no forma esta estructura.",
      "Incorrecto: will no forma esta estructura."
    ],
    "tip_es": "La fórmula es [HAVE / HAS + yet + to + verbo], nunca con \"be\".",
    "human_rule": "has / have yet to + verbo.",
    "spanglish_trap": "Usar is por \"está aún por\". Con \"yet to\", has.",
    "ref": null,
    "trigger_anchor": "the team ______ yet to receive the diagrams ➔ has"
  },
  {
    "id": "bank-g18-06",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Yesterday's memory leak caused ______ another unscheduled reboot on the primary analytics worker node.",
    "options": [
      "already",
      "yet",
      "even",
      "so"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"caused ______ another unscheduled reboot\": \"otro más\".\n• Regla: ➔ yet another.\n• Descartas: already, even y so no forman \"otra más\".",
    "why_wrong": [
      "Incorrecto: already significa \"ya\".",
      "Opción correcta: \"yet another\" = \"otro más\".",
      "Incorrecto: even significa \"incluso\".",
      "Incorrecto: so significa \"tan\"."
    ],
    "tip_es": "Delante de \"another\" para recalcar recurrencia molesta: \"yet another\".",
    "human_rule": "\"Otro más\" ➔ yet another.",
    "spanglish_trap": "Elegir even. La expresión es yet another.",
    "ref": null,
    "trigger_anchor": "caused ______ another unscheduled reboot ➔ yet"
  },
  {
    "id": "bank-g18-07",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 1,
    "pool": "practice",
    "stem": "We cannot decommission the old firewall until the networking squad resolves the issues that have ______ to be ironed out.",
    "options": [
      "still",
      "never",
      "yet",
      "ever"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"issues that have ______ to be ironed out\": aún no resueltos.\n• Regla: have yet to be + 3.ª forma.\n• Descartas: still, never y ever no forman esta estructura.",
    "why_wrong": [
      "Incorrecto: still no va con \"to be\" así.",
      "Incorrecto: never diría que nunca se resolverán.",
      "Opción correcta: \"have yet to be ironed out\" = \"aún no se han resuelto\".",
      "Incorrecto: ever significa \"alguna vez\"."
    ],
    "tip_es": "Estructura pasiva de pendiente: \"have YET to be + participio\".",
    "human_rule": "have yet to be + 3.ª forma.",
    "spanglish_trap": "Elegir still por \"todavía\". La estructura es have yet to.",
    "ref": null,
    "trigger_anchor": "issues that have ______ to be ironed out ➔ yet"
  },
  {
    "id": "bank-g18-08",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Despite three rounds of load testing, the engineering team has yet ______ why the WebSocket connections drop after sixty seconds.",
    "options": [
      "determining",
      "determined",
      "determine",
      "to determine"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"has yet ______ why the WebSocket connections drop\": aún no lo ha averiguado.\n• Regla: has yet TO + verbo.\n• Descartas: determining, determined y determine no llevan to.",
    "why_wrong": [
      "Incorrecto: determining no va después de \"has yet\".",
      "Incorrecto: determined no va después de \"has yet\".",
      "Incorrecto: falta \"to\" antes del verbo.",
      "Opción correcta: \"has yet to determine\" = \"aún no ha determinado\"."
    ],
    "tip_es": "Después de \"has/have yet\", busca siempre \"to + verbo base\".",
    "human_rule": "has yet to + verbo.",
    "spanglish_trap": "Leer \"has yet determined\" como \"ya determinó\". Es lo contrario.",
    "ref": null,
    "trigger_anchor": "has yet ______ why the connections drop ➔ to determine"
  },
  {
    "id": "bank-g18-09",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The quarterly penetration test uncovered yet ______ critical SQL injection flaw in the legacy reporting module.",
    "options": [
      "another",
      "other",
      "others",
      "the other"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"uncovered yet ______ critical SQL injection flaw\": \"otra más\".\n• Regla: yet another + nombre singular.\n• Descartas: other, others y \"the other\" no forman la expresión.",
    "why_wrong": [
      "Opción correcta: \"yet another flaw\" = \"otra falla más\".",
      "Incorrecto: other no va con a / an.",
      "Incorrecto: others no va delante de un nombre.",
      "Incorrecto: \"the other\" no forma esta expresión."
    ],
    "tip_es": "\"Yet\" se combina con \"another\" (singular), no con \"other\" sin artículo.",
    "human_rule": "yet another + nombre singular.",
    "spanglish_trap": "Dividir another en \"an other\". Es una sola palabra.",
    "ref": null,
    "trigger_anchor": "uncovered yet ______ critical SQL injection flaw ➔ another"
  },
  {
    "id": "bank-g18-10",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 1,
    "pool": "practice",
    "stem": "All microservices are running on Kubernetes, but the monolithic billing database has ______ to be containerized.",
    "options": [
      "already",
      "yet",
      "just",
      "ever"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"all microservices run on Kubernetes, but the monolithic database has ______ to be containerized\": aún no.\n• Regla: has yet to be + 3.ª forma.\n• Descartas: already, just y ever no forman esta estructura.",
    "why_wrong": [
      "Incorrecto: already significa \"ya\".",
      "Opción correcta: \"has yet to be containerized\" = \"aún no ha sido contenerizada\".",
      "Incorrecto: just significa \"justo\".",
      "Incorrecto: ever significa \"alguna vez\"."
    ],
    "tip_es": "Si hay un \"but\" contrastando con lo ya completado, busca \"has YET to be...\".",
    "human_rule": "has yet to be + 3.ª forma.",
    "spanglish_trap": "Elegir already por la oposición. Es lo contrario: aún no.",
    "ref": null,
    "trigger_anchor": "the database has ______ to be containerized ➔ yet"
  },
  {
    "id": "bank-g18-11",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The client is threatening to cancel the contract because we have yet ______ the SLA latency target this month.",
    "options": [
      "met",
      "meeting",
      "to meet",
      "meet"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"we have yet ______ the SLA latency target\": aún no se cumple.\n• Regla: have yet TO + verbo.\n• Descartas: met, meeting y meet no llevan to.",
    "why_wrong": [
      "Incorrecto: met no va después de \"have yet\".",
      "Incorrecto: meeting no va después de \"have yet\".",
      "Opción correcta: \"have yet to meet\" = \"aún no hemos cumplido\".",
      "Incorrecto: falta \"to\" antes del verbo."
    ],
    "tip_es": "No confundas \"have met\" (ya cumplimos) con \"have yet to meet\" (aún no cumplimos).",
    "human_rule": "have yet to + verbo.",
    "spanglish_trap": "Leer \"have yet met\" como \"ya cumplimos\". Es lo contrario.",
    "ref": null,
    "trigger_anchor": "we have yet ______ the SLA latency target ➔ to meet"
  },
  {
    "id": "bank-g18-12",
    "section": "UE",
    "objective": "UE3",
    "topic": "G18",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The hardware vendor has yet to ______ whether the faulty RAID controllers will be replaced under warranty.",
    "options": [
      "confirming",
      "confirmed",
      "confirms",
      "confirm"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"has yet to ______ whether…\": después de \"to\", el verbo base.\n• Regla: has yet to + verbo base.\n• Descartas: confirming, confirmed y confirms no van después de \"to\".",
    "why_wrong": [
      "Incorrecto: después de to va el verbo base, no -ing.",
      "Incorrecto: después de to va el verbo base, no el pasado.",
      "Incorrecto: confirms lleva -s.",
      "Opción correcta: \"has yet to confirm\" = \"aún no ha confirmado\"."
    ],
    "tip_es": "Fíjate si el \"to\" ya está antes del hueco: tras \"has yet to\", pon el verbo base sin cambios.",
    "human_rule": "has yet to + verbo base.",
    "spanglish_trap": "Poner -s o -ing después de to. Después de to, el verbo tal cual.",
    "ref": null,
    "trigger_anchor": "has yet to ______ whether the RAID will be replaced ➔ confirm"
  },
  {
    "id": "bank-g22-01",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Stateless firewall filters inspect individual packets in isolation, ______ stateful inspection tracks the entire active connection session.",
    "options": [
      "whereas",
      "despite",
      "however",
      "unless"
    ],
    "answer": 0,
    "why_correct": "• Pista: se comparan dos filtros distintos (sin estado ➔ con estado).\n• Regla: \"mientras que\" ➔ whereas.\n• Descartas: despite e \"however\" no unen dos partes de la misma frase; unless es \"a menos que\".",
    "why_wrong": [
      "Opción correcta: \"whereas\" = \"mientras que\".",
      "Incorrecto: despite significa \"a pesar de\".",
      "Incorrecto: however va entre dos frases separadas.",
      "Incorrecto: unless significa \"a menos que\"."
    ],
    "tip_es": "Con coma intermedia contrastando dos sistemas [A hace X, ______ B hace Y], usa \"whereas\" o \"while\".",
    "human_rule": "Comparar dos cosas ➔ whereas.",
    "spanglish_trap": "Elegir however por el contraste. However va entre dos frases; whereas une dos partes.",
    "ref": null,
    "trigger_anchor": "Stateless filters inspect packets, ______ stateful inspection tracks sessions ➔ whereas"
  },
  {
    "id": "bank-g22-02",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ horizontal scaling adds more worker nodes to the pool, vertical scaling increases the CPU and RAM of an existing server.",
    "options": [
      "Despite",
      "While",
      "In spite",
      "Therefore"
    ],
    "answer": 1,
    "why_correct": "• Pista: la frase abre con el hueco y compara dos tipos de escalado.\n• Regla: \"mientras que\" al inicio ➔ While.\n• Descartas: Despite e \"In spite\" van con una cosa o -ing; Therefore es \"por lo tanto\".",
    "why_wrong": [
      "Incorrecto: Despite va con una cosa o -ing.",
      "Opción correcta: \"While horizontal scaling adds…\" = \"mientras que el escalado horizontal añade…\".",
      "Incorrecto: \"In spite\" necesita \"of\" y una cosa o -ing.",
      "Incorrecto: Therefore significa \"por lo tanto\"."
    ],
    "tip_es": "Al abrir una comparación de dos definiciones técnicas opuestas: \"While / Whereas + Sujeto + Verbo\".",
    "human_rule": "Abrir una comparación ➔ While + frase, frase.",
    "spanglish_trap": "Usar un conector de consecuencia (therefore). Aquí se compara.",
    "ref": null,
    "trigger_anchor": "______ horizontal scaling adds nodes, vertical scaling increases CPU ➔ While"
  },
  {
    "id": "bank-g22-03",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Relational databases enforce strict table schemas, ______ document-oriented NoSQL stores allow flexible JSON structures.",
    "options": [
      "nevertheless",
      "in spite of",
      "whereas",
      "due to"
    ],
    "answer": 2,
    "why_correct": "• Pista: se comparan dos tipos de bases de datos.\n• Regla: \"mientras que\" ➔ whereas.\n• Descartas: nevertheless va entre frases; \"in spite of\" y \"due to\" van con una cosa.",
    "why_wrong": [
      "Incorrecto: nevertheless va entre dos frases separadas.",
      "Incorrecto: \"in spite of\" va con una cosa o -ing.",
      "Opción correcta: \"whereas\" = \"mientras que\".",
      "Incorrecto: \"due to\" explica una causa."
    ],
    "tip_es": "\"Nevertheless\" y \"However\" exigen punto y coma (;) antes; tras una simple coma usa \"whereas\" o \"while\".",
    "human_rule": "Comparar dos cosas ➔ whereas.",
    "spanglish_trap": "Elegir un conector de causa. Aquí se compara.",
    "ref": null,
    "trigger_anchor": "Relational DBs enforce schemas, ______ NoSQL stores allow flexible JSON ➔ whereas"
  },
  {
    "id": "bank-g22-04",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The staging environment runs on spot instances to save costs, ______ the production cluster relies on reserved dedicated hosts.",
    "options": [
      "despite",
      "otherwise",
      "since",
      "while"
    ],
    "answer": 3,
    "why_correct": "• Pista: se comparan dos entornos (staging ➔ producción).\n• Regla: \"mientras que\" ➔ while.\n• Descartas: despite y otherwise no comparan; since explica una causa.",
    "why_wrong": [
      "Incorrecto: despite significa \"a pesar de\".",
      "Incorrecto: otherwise significa \"de lo contrario\".",
      "Incorrecto: since explica una causa o un tiempo.",
      "Opción correcta: \"while\" = \"mientras que\"."
    ],
    "tip_es": "\"While\" al contrastar dos entornos equivale exactamente a \"whereas\".",
    "human_rule": "Comparar dos cosas ➔ while.",
    "spanglish_trap": "Elegir since por la coma. Para comparar, while.",
    "ref": null,
    "trigger_anchor": "staging runs on spot instances, ______ production relies on reserved hosts ➔ while"
  },
  {
    "id": "bank-g22-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ a compiler translates the entire source program ahead of time, an interpreter executes instructions line by line.",
    "options": [
      "Whereas",
      "Despite of",
      "Because of",
      "Meanwhile"
    ],
    "answer": 0,
    "why_correct": "• Pista: se comparan dos formas de ejecutar un programa (compilador ➔ intérprete).\n• Regla: \"mientras que\" ➔ Whereas.\n• Descartas: \"Despite of\" no existe; \"Because of\" explica una causa; Meanwhile une frases separadas.",
    "why_wrong": [
      "Opción correcta: \"Whereas a compiler translates…\" = \"mientras que un compilador traduce…\".",
      "Incorrecto: \"Despite of\" no existe.",
      "Incorrecto: \"Because of\" va con una cosa.",
      "Incorrecto: Meanwhile une dos frases separadas."
    ],
    "tip_es": "Si la primera cláusula tiene Sujeto + Verbo y la segunda contrasta otro sistema, abre con \"Whereas\" o \"While\".",
    "human_rule": "Abrir una comparación ➔ Whereas + frase, frase.",
    "spanglish_trap": "Decir \"Despite of\". Despite no lleva of, y aquí se compara.",
    "ref": null,
    "trigger_anchor": "______ a compiler translates ahead of time, an interpreter runs line by line ➔ Whereas"
  },
  {
    "id": "bank-g22-06",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 3,
    "pool": "practice",
    "stem": " Tier-1 support handles password resets and basic connectivity, ______ Tier-3 engineering resolves kernel-level defects.",
    "options": [
      "although of",
      "whereas",
      "in contrast",
      "however"
    ],
    "answer": 1,
    "why_correct": "• Pista: se comparan dos niveles de soporte, con una coma antes del hueco.\n• Regla: \"mientras que\" ➔ whereas.\n• Descartas: \"although of\" no existe; \"in contrast\" y however van entre frases.",
    "why_wrong": [
      "Incorrecto: \"although of\" no existe.",
      "Opción correcta: \"whereas\" = \"mientras que\".",
      "Incorrecto: \"in contrast\" va entre frases separadas.",
      "Incorrecto: however va entre frases separadas."
    ],
    "tip_es": "\"In contrast\" y \"However\" no son conjunciones subordinantes; tras coma sin punto y coma, elige \"whereas\".",
    "human_rule": "Comparar dos cosas dentro de una frase ➔ whereas.",
    "spanglish_trap": "Elegir in contrast. Esa expresión va entre dos frases.",
    "ref": null,
    "trigger_anchor": "Tier-1 handles resets, ______ Tier-3 resolves kernel defects ➔ whereas"
  },
  {
    "id": "bank-g22-07",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 1,
    "pool": "practice",
    "stem": " Container virtualization shares the host OS kernel, ______ traditional virtual machines run a full guest operating system per instance.",
    "options": [
      "despite",
      "unless",
      "while",
      "consequently"
    ],
    "answer": 2,
    "why_correct": "• Pista: se comparan contenedores ➔ máquinas virtuales, con una coma antes del hueco.\n• Regla: \"mientras que\" ➔ while.\n• Descartas: despite significa \"a pesar de\"; unless es \"a menos que\"; consequently es \"por consiguiente\".",
    "why_wrong": [
      "Incorrecto: despite significa \"a pesar de\".",
      "Incorrecto: unless significa \"a menos que\".",
      "Opción correcta: \"while\" = \"mientras que\".",
      "Incorrecto: consequently significa \"por consiguiente\"."
    ],
    "tip_es": "Comparativa técnica de dos arquitecturas separadas por coma -> \"while / whereas\".",
    "human_rule": "Comparar dos cosas ➔ while.",
    "spanglish_trap": "Usar consequently. No hay una consecuencia, hay una comparación.",
    "ref": null,
    "trigger_anchor": "containers share the kernel, ______ VMs run a full guest OS ➔ while"
  },
  {
    "id": "bank-g22-08",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ REST APIs typically require multiple round-trips to fetch nested resources, GraphQL allows clients to query exact data shapes in a single request.",
    "options": [
      "Despite",
      "Owing to",
      "Even so",
      "While"
    ],
    "answer": 3,
    "why_correct": "• Pista: la frase abre con el hueco y compara REST ➔ GraphQL.\n• Regla: \"mientras que\" ➔ While.\n• Descartas: Despite y \"Owing to\" van con una cosa; \"Even so\" va entre frases.",
    "why_wrong": [
      "Incorrecto: Despite va con una cosa o -ing.",
      "Incorrecto: \"Owing to\" explica una causa y va con una cosa.",
      "Incorrecto: \"Even so\" va entre dos frases separadas.",
      "Opción correcta: \"While REST APIs require…\" = \"mientras que las API REST requieren…\"."
    ],
    "tip_es": "Delante de [Sujeto + Verbo] para contrastar REST vs GraphQL: \"While\" o \"Whereas\".",
    "human_rule": "Abrir una comparación ➔ While + frase, frase.",
    "spanglish_trap": "Elegir Despite por el contraste. Con una frase completa, While.",
    "ref": null,
    "trigger_anchor": "______ REST APIs require multiple round-trips, GraphQL allows… ➔ While"
  },
  {
    "id": "bank-g22-09",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Public cloud storage offers virtually unlimited elasticity, ______ on-premises SAN arrays provide deterministic local LAN latency.",
    "options": [
      "whereas",
      "despite",
      "moreover",
      "therefore"
    ],
    "answer": 0,
    "why_correct": "• Pista: se comparan nube pública ➔ SAN local, con una coma antes del hueco.\n• Regla: \"mientras que\" ➔ whereas.\n• Descartas: despite significa \"a pesar de\"; moreover suma; therefore es \"por lo tanto\".",
    "why_wrong": [
      "Opción correcta: \"whereas\" = \"mientras que\".",
      "Incorrecto: despite significa \"a pesar de\".",
      "Incorrecto: moreover suma una idea.",
      "Incorrecto: therefore significa \"por lo tanto\"."
    ],
    "tip_es": "Contraste de ventajas opuestas (Public Cloud vs On-Premises) -> \"whereas\".",
    "human_rule": "Comparar dos cosas ➔ whereas.",
    "spanglish_trap": "Elegir moreover porque suena formal. Moreover suma; whereas compara.",
    "ref": null,
    "trigger_anchor": "Public cloud offers elasticity, ______ SAN arrays provide low latency ➔ whereas"
  },
  {
    "id": "bank-g22-10",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 1,
    "pool": "practice",
    "stem": "In asymmetric cryptography, the public key encrypts the payload, ______ only the corresponding private key can decrypt it.",
    "options": [
      "despite",
      "whereas",
      "because",
      "otherwise"
    ],
    "answer": 1,
    "why_correct": "• Pista: la clave pública cifra y solo la privada descifra: son dos cosas distintas.\n• Regla: \"mientras que\" ➔ whereas.\n• Descartas: despite significa \"a pesar de\"; because explica una causa; otherwise significa \"de lo contrario\".",
    "why_wrong": [
      "Incorrecto: despite significa \"a pesar de\".",
      "Opción correcta: \"whereas\" = \"mientras que\".",
      "Incorrecto: because explica una causa.",
      "Incorrecto: otherwise significa \"de lo contrario\"."
    ],
    "tip_es": "Rol de A vs Rol de B en criptografía -> \"whereas / while\".",
    "human_rule": "Dos funciones distintas ➔ whereas.",
    "spanglish_trap": "Elegir because por la lógica. Aquí se contrastan dos roles.",
    "ref": null,
    "trigger_anchor": "the public key encrypts, ______ only the private key can decrypt ➔ whereas"
  },
  {
    "id": "bank-g22-11",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ senior architects focus on long-term system scalability, on-call SREs prioritize immediate service restoration.",
    "options": [
      "Despite",
      "During",
      "Whereas",
      "Because of"
    ],
    "answer": 2,
    "why_correct": "• Pista: la frase abre con el hueco y compara dos roles (arquitectos ➔ SREs).\n• Regla: \"mientras que\" ➔ Whereas.\n• Descartas: Despite, During y \"Because of\" van con una cosa o -ing.",
    "why_wrong": [
      "Incorrecto: Despite va con una cosa o -ing.",
      "Incorrecto: During va con un periodo de tiempo.",
      "Opción correcta: \"Whereas senior architects focus…\" = \"mientras que los arquitectos se centran…\".",
      "Incorrecto: \"Because of\" va con una cosa."
    ],
    "tip_es": "\"Despite\" y \"During\" no aceptan [Sujeto + Verbo conjugado]; usa \"Whereas\".",
    "human_rule": "Abrir una comparación ➔ Whereas + frase, frase.",
    "spanglish_trap": "Elegir During por \"mientras\". During va con un periodo (during the outage).",
    "ref": null,
    "trigger_anchor": "______ architects focus on scalability, SREs prioritize restoration ➔ Whereas"
  },
  {
    "id": "bank-g22-12",
    "section": "UE",
    "objective": "UE5",
    "topic": "G22",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Synchronous replication guarantees zero data loss on failover, ______ asynchronous replication minimizes write latency over long distances.",
    "options": [
      "in spite of",
      "nevertheless",
      "since",
      "while"
    ],
    "answer": 3,
    "why_correct": "• Pista: se comparan dos replicaciones, con una coma antes del hueco.\n• Regla: \"mientras que\" ➔ while.\n• Descartas: \"in spite of\" va con una cosa; nevertheless va entre frases; since explica una causa.",
    "why_wrong": [
      "Incorrecto: \"in spite of\" va con una cosa o -ing.",
      "Incorrecto: nevertheless va entre dos frases separadas.",
      "Incorrecto: since explica una causa.",
      "Opción correcta: \"while\" = \"mientras que\"."
    ],
    "tip_es": "Comparación simétrica de dos modos de replicación tras coma -> \"while\".",
    "human_rule": "Comparar dos cosas ➔ while.",
    "spanglish_trap": "Elegir nevertheless por el contraste. Dentro de una misma frase, while.",
    "ref": null,
    "trigger_anchor": "Synchronous replication guarantees zero loss, ______ asynchronous minimizes latency ➔ while"
  },
  {
    "id": "bank-g23-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The support team is exhausted because the legacy printer spooler is always ______ right before the morning shift starts.",
    "options": [
      "crashing",
      "crashes",
      "crashed",
      "to crash"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"is always ______ right before the shift\": una queja por un fallo repetido.\n• Regla: is always + -ing.\n• Descartas: crashes, crashed y \"to crash\" no van después de \"is always\".",
    "why_wrong": [
      "Opción correcta: \"is always crashing\" = \"se la pasa fallando\".",
      "Incorrecto: crashes lleva -s.",
      "Incorrecto: crashed es el pasado.",
      "Incorrecto: \"to crash\" no va después de \"is always\"."
    ],
    "tip_es": "Si ves \"is/are/was always ______\" en una queja técnica, el verbo SIEMPRE termina en \"-ING\".",
    "human_rule": "Queja por algo repetido ➔ is always + -ing.",
    "spanglish_trap": "Poner crashes. Después de \"is always\", -ing.",
    "ref": null,
    "trigger_anchor": "the printer spooler is always ______ before the shift ➔ crashing"
  },
  {
    "id": "bank-g23-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Why ______ the automated deployment pipeline always failing on the final integration step whenever we have an urgent release?",
    "options": [
      "does",
      "is",
      "has",
      "did"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Why ______ the pipeline always failing…\": una pregunta con \"always failing\".\n• Regla: is + always + -ing; en pregunta, Why is…\n• Descartas: does, has y did no se combinan con \"always failing\".",
    "why_wrong": [
      "Incorrecto: does va con un verbo base, no con -ing.",
      "Opción correcta: \"Why is the pipeline always failing\" = \"¿por qué siempre falla?\".",
      "Incorrecto: has no se combina con \"always failing\" aquí.",
      "Incorrecto: did es pasado."
    ],
    "tip_es": "Si después del sujeto está \"always + verbo-ING\", la pregunta se arma con \"is / are\".",
    "human_rule": "Why is… always + -ing? (queja en forma de pregunta).",
    "spanglish_trap": "Usar does por ser una pregunta. Con -ing hace falta is.",
    "ref": null,
    "trigger_anchor": "Why ______ the pipeline always failing…? ➔ is"
  },
  {
    "id": "bank-g23-03",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Our scheduled incremental backup job ______ runs at 03:00 UTC when database traffic is at its lowest.",
    "options": [
      "is always",
      "always is",
      "always",
      "has always"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"runs at 03:00 UTC\": una tarea programada que se repite igual.\n• Regla: rutina ➔ always + presente simple (always runs).\n• Descartas: \"is always runs\" y \"always is runs\" mezclan verbos; \"has always runs\" no existe.",
    "why_wrong": [
      "Incorrecto: \"is always runs\" mezcla dos verbos.",
      "Incorrecto: \"always is runs\" mezcla dos verbos.",
      "Opción correcta: \"always runs\" = \"siempre se ejecuta\".",
      "Incorrecto: \"has always runs\" no existe."
    ],
    "tip_es": "Rutina normal (sin queja) = [always + Present Simple (\"always runs\")]. Queja = [is always + -ing].",
    "human_rule": "Rutina ➔ always + presente simple.",
    "spanglish_trap": "Añadir is delante. Para una rutina, solo always + verbo.",
    "ref": null,
    "trigger_anchor": "The backup job ______ runs at 03:00 UTC ➔ always"
  },
  {
    "id": "bank-g23-04",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 1,
    "pool": "practice",
    "stem": "That third-party analytics script ______ consuming excessive CPU cycles on mobile browsers, which is driving our users crazy!",
    "options": [
      "always",
      "does always",
      "has always",
      "is always"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"______ consuming excessive CPU cycles… driving our users crazy!\": una queja.\n• Regla: is always + -ing.\n• Descartas: \"always consuming\" sin is no tiene verbo; \"does always\" y \"has always\" no encajan con -ing.",
    "why_wrong": [
      "Incorrecto: \"always consuming\" no tiene verbo auxiliar.",
      "Incorrecto: \"does always consuming\" no es una forma válida.",
      "Incorrecto: \"has always consuming\" no es una forma válida.",
      "Opción correcta: \"is always consuming\" = \"se la pasa consumiendo\"."
    ],
    "tip_es": "Antes de un verbo en \"-ing\" (\"consuming\") en una queja: usa \"is always\".",
    "human_rule": "Queja ➔ is always + -ing.",
    "spanglish_trap": "Omitir is. Con -ing hace falta el verbo auxiliar.",
    "ref": null,
    "trigger_anchor": "That script ______ consuming excessive CPU ➔ is always"
  },
  {
    "id": "bank-g23-05",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 2,
    "pool": "practice",
    "stem": "During last month's migration, the legacy SOAP service was constantly ______ malformed XML responses.",
    "options": [
      "returning",
      "returned",
      "returns",
      "return"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"was constantly ______ malformed XML\": una queja en pasado.\n• Regla: was + constantly + -ing.\n• Descartas: returned, returns y return no van después de \"was constantly\".",
    "why_wrong": [
      "Opción correcta: \"was constantly returning\" = \"devolvía constantemente\".",
      "Incorrecto: returned es el pasado.",
      "Incorrecto: returns lleva -s.",
      "Incorrecto: return es el verbo base."
    ],
    "tip_es": "Tras \"was constantly / was always\", el verbo va obligatoriamente en \"-ING\" (\"returning\").",
    "human_rule": "was / were + always / constantly + -ing (queja en pasado).",
    "spanglish_trap": "Poner el pasado simple. Con \"was constantly\", -ing.",
    "ref": null,
    "trigger_anchor": "the service was constantly ______ malformed XML ➔ returning"
  },
  {
    "id": "bank-g23-06",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Junior developers are ______ forgetting to increment the helm chart version before merging their pull requests.",
    "options": [
      "ever",
      "always",
      "yet",
      "seldom not"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"are ______ forgetting\": una queja con -ing.\n• Regla: are + always + -ing.\n• Descartas: ever no va aquí; yet es otra palabra; \"seldom not\" no existe.",
    "why_wrong": [
      "Incorrecto: ever va en preguntas y negativas.",
      "Opción correcta: \"are always forgetting\" = \"se olvidan siempre\".",
      "Incorrecto: yet significa \"todavía\".",
      "Incorrecto: \"seldom not\" no existe."
    ],
    "tip_es": "Fórmula de hábito irritante: [are + ALWAYS + verbo-ing].",
    "human_rule": "are + always + -ing (queja).",
    "spanglish_trap": "Elegir ever por \"siempre\". Siempre se dice always.",
    "ref": null,
    "trigger_anchor": "Developers are ______ forgetting to increment the version ➔ always"
  },
  {
    "id": "bank-g23-07",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Unlike the unstable staging server, our production DNS cluster ______ responds within twelve milliseconds.",
    "options": [
      "is always",
      "was always",
      "always",
      "always is"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Unlike the unstable staging server, our DNS cluster ______ responds within twelve ms\": algo que se cumple siempre.\n• Regla: rutina ➔ always + presente simple.\n• Descartas: \"is always responds\" y \"always is responds\" mezclan verbos; \"was always\" es pasado.",
    "why_wrong": [
      "Incorrecto: \"is always responds\" mezcla dos verbos.",
      "Incorrecto: \"was always responds\" mezcla dos verbos.",
      "Opción correcta: \"always responds\" = \"siempre responde\".",
      "Incorrecto: \"always is responds\" mezcla dos verbos."
    ],
    "tip_es": "Si el verbo siguiente termina en \"-s\" (\"responds\"), NUNCA pongas \"is always\" delante; usa solo \"always\".",
    "human_rule": "Algo que siempre se cumple ➔ always + presente simple.",
    "spanglish_trap": "Añadir is. Con un verbo normal, solo always + verbo.",
    "ref": null,
    "trigger_anchor": "our production DNS cluster ______ responds within twelve ms ➔ always"
  },
  {
    "id": "bank-g23-08",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The Product Owner complained that the mobile app is ______ logging users out whenever they switch between Wi-Fi and 5G.",
    "options": [
      "ever",
      "since",
      "yet",
      "always"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"the app is ______ logging users out\": una queja.\n• Regla: is + always + -ing.\n• Descartas: ever, since y yet no encajan.",
    "why_wrong": [
      "Incorrecto: ever va en preguntas y negativas.",
      "Incorrecto: since necesita un punto de partida.",
      "Incorrecto: yet significa \"todavía\".",
      "Opción correcta: \"is always logging\" = \"se la pasa cerrando sesión\"."
    ],
    "tip_es": "\"is + ALWAYS + -ing\" = queja por comportamiento repetitivo.",
    "human_rule": "is + always + -ing (queja).",
    "spanglish_trap": "Elegir ever por \"siempre\". Siempre se dice always.",
    "ref": null,
    "trigger_anchor": "the app is ______ logging users out ➔ always"
  },
  {
    "id": "bank-g23-09",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Before we replaced the faulty switch, the VoIP phones in the sales department were always ______ mid-conversation.",
    "options": [
      "disconnecting",
      "disconnected",
      "disconnect",
      "to disconnect"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"were always ______ mid-conversation\": una queja en pasado.\n• Regla: were + always + -ing.\n• Descartas: disconnected, disconnect y \"to disconnect\" no van después de \"always\" aquí.",
    "why_wrong": [
      "Opción correcta: \"were always disconnecting\" = \"se desconectaban siempre\".",
      "Incorrecto: disconnected es la 3.ª forma.",
      "Incorrecto: disconnect es el verbo base.",
      "Incorrecto: \"to disconnect\" no va después de \"always\"."
    ],
    "tip_es": "Tras \"were always\", busca siempre el verbo terminado en \"-ING\".",
    "human_rule": "were + always + -ing (queja en pasado).",
    "spanglish_trap": "Poner el pasado simple. Con \"were always\", -ing.",
    "ref": null,
    "trigger_anchor": "phones were always ______ mid-conversation ➔ disconnecting"
  },
  {
    "id": "bank-g23-10",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Why are you always ______ hotfixes directly to the production branch without running the linter first?",
    "options": [
      "push",
      "pushing",
      "pushed",
      "pushes"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Why are you always ______ hotfixes…\": una queja con -ing.\n• Regla: are + always + -ing.\n• Descartas: push, pushed y pushes no van después de \"are always\".",
    "why_wrong": [
      "Incorrecto: push es el verbo base.",
      "Opción correcta: \"are you always pushing\" = \"¿por qué siempre subes…?\".",
      "Incorrecto: pushed es la 3.ª forma.",
      "Incorrecto: pushes lleva -s."
    ],
    "tip_es": "En preguntas de queja con \"Why are you always...\", el verbo lleva \"-ING\".",
    "human_rule": "are + always + -ing.",
    "spanglish_trap": "Poner el presente simple. Con \"are always\", -ing.",
    "ref": null,
    "trigger_anchor": "Why are you always ______ hotfixes directly to production? ➔ pushing"
  },
  {
    "id": "bank-g23-11",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The health-check daemon ______ pings the replica nodes every ten seconds to verify cluster quorum.",
    "options": [
      "is always",
      "are always",
      "always",
      "has always"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"pings the replica nodes every ten seconds\": una rutina automática.\n• Regla: rutina ➔ always + presente simple.\n• Descartas: \"is always pings\" y \"are always pings\" mezclan verbos; \"has always pings\" no existe.",
    "why_wrong": [
      "Incorrecto: \"is always pings\" mezcla dos verbos.",
      "Incorrecto: \"are always pings\" mezcla dos verbos.",
      "Opción correcta: \"always pings\" = \"siempre hace ping\".",
      "Incorrecto: \"has always pings\" no existe."
    ],
    "tip_es": "Con verbo en Present Simple (\"pings\"), usa \"always\" sin el verbo \"to be\".",
    "human_rule": "Rutina ➔ always + presente simple.",
    "spanglish_trap": "Añadir is. Para una rutina, solo always + verbo.",
    "ref": null,
    "trigger_anchor": "The daemon ______ pings the replica nodes every ten seconds ➔ always"
  },
  {
    "id": "bank-g23-12",
    "section": "UE",
    "objective": "UE3",
    "topic": "G23",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Customers are leaving negative reviews because the checkout page is constantly ______ when they apply a discount code.",
    "options": [
      "freezes",
      "froze",
      "freeze",
      "freezing"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"is constantly ______ when they apply a code\": una queja.\n• Regla: is + constantly + -ing.\n• Descartas: freezes, froze y freeze no van después de \"is constantly\".",
    "why_wrong": [
      "Incorrecto: freezes lleva -s.",
      "Incorrecto: froze es el pasado.",
      "Incorrecto: freeze es el verbo base.",
      "Opción correcta: \"is constantly freezing\" = \"se congela constantemente\"."
    ],
    "tip_es": "\"Is constantly / is always\" exige verbo en \"-ING\" (\"freezing\").",
    "human_rule": "is + constantly / always + -ing (queja).",
    "spanglish_trap": "Poner el presente simple. Con \"is constantly\", -ing.",
    "ref": null,
    "trigger_anchor": "the checkout page is constantly ______ ➔ freezing"
  },
  {
    "id": "bank-g24-01",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 1,
    "pool": "practice",
    "stem": "______ an attacker manages to bypass the perimeter firewall tonight, the encrypted database volumes will remain unreadable without the KMS keys.",
    "options": [
      "Even if",
      "Even though",
      "Despite",
      "Whereas"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"if an attacker manages to bypass… tonight\": es algo que podría pasar, no un hecho.\n• Regla: algo hipotético ➔ Even if.\n• Descartas: \"Even though\" es para hechos; Despite va con una cosa; Whereas compara.",
    "why_wrong": [
      "Opción correcta: \"Even if an attacker manages…\" = \"aunque un atacante consiga…\".",
      "Incorrecto: \"Even though\" es para un hecho real.",
      "Incorrecto: Despite va con una cosa o -ing.",
      "Incorrecto: Whereas compara dos cosas."
    ],
    "tip_es": "Hipótesis o condición supuesta (\"incluso en el supuesto de que...\") = EVEN IF. Hecho real ya ocurrido = EVEN THOUGH.",
    "human_rule": "Algo que podría pasar ➔ even if.",
    "spanglish_trap": "Elegir Even though por \"aunque\". Si es hipotético, Even if.",
    "ref": null,
    "trigger_anchor": "______ an attacker manages to bypass the firewall tonight ➔ Even if"
  },
  {
    "id": "bank-g24-02",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the engineering team doubled the Redis cache memory yesterday, the API response times remained above 500ms.",
    "options": [
      "Even if",
      "Even though",
      "Despite",
      "In spite of"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"the team doubled the cache memory yesterday\": es un hecho que ya ocurrió.\n• Regla: un hecho real ➔ Even though.\n• Descartas: \"Even if\" es hipotético; Despite e \"In spite of\" van con una cosa o -ing.",
    "why_wrong": [
      "Incorrecto: \"Even if\" es para algo hipotético.",
      "Opción correcta: \"Even though the team doubled…\" = \"aunque el equipo duplicó…\".",
      "Incorrecto: Despite va con una cosa o -ing.",
      "Incorrecto: \"In spite of\" va con una cosa o -ing."
    ],
    "tip_es": "Si la cláusula describe un hecho real que ya sucedió (\"yesterday\"), usa \"Even though\", nunca \"Even if\".",
    "human_rule": "Un hecho real ➔ even though.",
    "spanglish_trap": "Elegir Despite porque es contraste. Con una frase completa, Even though.",
    "ref": null,
    "trigger_anchor": "______ the team doubled the cache yesterday (ya pasó) ➔ Even though"
  },
  {
    "id": "bank-g24-03",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 3,
    "pool": "practice",
    "stem": "We must adhere to the GDPR data retention schedule, ______ it requires refactoring our legacy archiving scripts.",
    "options": [
      "despite",
      "in spite of",
      "even if",
      "nevertheless"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"even if it requires refactoring\": algo que podría pasar, no un hecho.\n• Regla: algo hipotético ➔ even if.\n• Descartas: despite e \"in spite of\" van con una cosa; nevertheless va entre frases.",
    "why_wrong": [
      "Incorrecto: despite va con una cosa o -ing.",
      "Incorrecto: \"in spite of\" va con una cosa o -ing.",
      "Opción correcta: \"even if it requires\" = \"aunque requiera\".",
      "Incorrecto: nevertheless va entre dos frases separadas."
    ],
    "tip_es": "\"Despite / In spite of\" no aceptan \"it requires\" (Sujeto + Verbo); para una condición hipotética usa \"even if\".",
    "human_rule": "Algo que podría exigir ➔ even if.",
    "spanglish_trap": "Elegir nevertheless por el contraste. Dentro de la misma frase, even if.",
    "ref": null,
    "trigger_anchor": "We must adhere…, ______ it requires refactoring ➔ even if"
  },
  {
    "id": "bank-g24-04",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 1,
    "pool": "practice",
    "stem": "______ all twelve automated regression tests passed in staging, the release caused a CSS layout bug in Safari.",
    "options": [
      "Even if",
      "Despite of",
      "However",
      "Even though"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"all twelve tests passed in staging\": es un hecho que ya ocurrió.\n• Regla: un hecho real ➔ Even though.\n• Descartas: \"Even if\" es hipotético; \"Despite of\" no existe; However va entre frases.",
    "why_wrong": [
      "Incorrecto: \"Even if\" es para algo hipotético.",
      "Incorrecto: \"Despite of\" no existe.",
      "Incorrecto: However va entre dos frases separadas.",
      "Opción correcta: \"Even though all tests passed\" = \"aunque todas las pruebas pasaron\"."
    ],
    "tip_es": "Hecho real verificado (\"passed in staging\") + contraste sorpresivo = \"Even though\".",
    "human_rule": "Un hecho real ➔ even though.",
    "spanglish_trap": "Usar However al inicio. Aquí se une con la segunda parte.",
    "ref": null,
    "trigger_anchor": "______ all twelve tests passed in staging ➔ Even though"
  },
  {
    "id": "bank-g24-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The disaster recovery site will automatically assume traffic within thirty seconds, ______ the entire primary datacenter loses power.",
    "options": [
      "even if",
      "even though",
      "despite",
      "whereas"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"even if the entire primary datacenter loses power\": es algo que podría pasar.\n• Regla: algo hipotético ➔ even if.\n• Descartas: \"even though\" es para hechos; despite va con una cosa; whereas compara.",
    "why_wrong": [
      "Opción correcta: \"even if the datacenter loses power\" = \"aunque se quede sin energía\".",
      "Incorrecto: \"even though\" es para un hecho real.",
      "Incorrecto: despite va con una cosa o -ing.",
      "Incorrecto: whereas compara dos cosas."
    ],
    "tip_es": "Escenario de simulación o desastre hipotético + \"will\" = \"even if\".",
    "human_rule": "Algo que podría pasar ➔ even if.",
    "spanglish_trap": "Elegir even though. Si no ha pasado, even if.",
    "ref": null,
    "trigger_anchor": "…within thirty seconds, ______ the datacenter loses power ➔ even if"
  },
  {
    "id": "bank-g24-06",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 3,
    "pool": "practice",
    "stem": "______ the senior DBA warned against running unindexed queries, the analyst executed a full table scan during peak hours.",
    "options": [
      "Even if",
      "Even though",
      "Despite",
      "Because"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"the senior DBA warned…\": es un hecho que ya ocurrió.\n• Regla: un hecho real ➔ Even though.\n• Descartas: \"Even if\" es hipotético; Despite va con una cosa; Because explica una causa.",
    "why_wrong": [
      "Incorrecto: \"Even if\" es para algo hipotético.",
      "Opción correcta: \"Even though the DBA warned\" = \"aunque el DBA advirtió\".",
      "Incorrecto: Despite va con una cosa o -ing.",
      "Incorrecto: Because explica una causa, no un contraste."
    ],
    "tip_es": "Acción real ocurrida en el pasado (\"warned\") -> \"Even though\".",
    "human_rule": "Un hecho real ➔ even though.",
    "spanglish_trap": "Elegir Because. La frase contrasta, no explica.",
    "ref": null,
    "trigger_anchor": "______ the DBA warned against unindexed queries ➔ Even though"
  },
  {
    "id": "bank-g24-07",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 1,
    "pool": "practice",
    "stem": "I would not approve deploying unreviewed code on a Friday afternoon, ______ the client offered to pay a bonus.",
    "options": [
      "even though",
      "despite",
      "even if",
      "although of"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"I would not approve…, even if the client offered a bonus\": algo hipotético.\n• Regla: algo hipotético ➔ even if.\n• Descartas: \"even though\" es para hechos; despite va con una cosa; \"although of\" no existe.",
    "why_wrong": [
      "Incorrecto: \"even though\" es para un hecho real.",
      "Incorrecto: despite va con una cosa o -ing.",
      "Opción correcta: \"even if the client offered\" = \"aunque el cliente ofreciera\".",
      "Incorrecto: \"although of\" no existe."
    ],
    "tip_es": "Si ves estructura de Second Conditional (\"would... + Past Simple\"), la única opción válida es \"even if\".",
    "human_rule": "Algo hipotético ➔ even if.",
    "spanglish_trap": "Elegir even though. Si es una hipótesis (would), even if.",
    "ref": null,
    "trigger_anchor": "I would not approve…, ______ the client offered a bonus ➔ even if"
  },
  {
    "id": "bank-g24-08",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the laptop was connected to a high-speed fiber line, the video conference suffered from severe packet jitter.",
    "options": [
      "Even if",
      "In spite of",
      "Despite",
      "Even though"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"the laptop was connected to a high-speed fiber line\": es un hecho que ya ocurrió.\n• Regla: un hecho real ➔ Even though.\n• Descartas: \"Even if\" es hipotético; Despite e \"In spite of\" van con una cosa o -ing.",
    "why_wrong": [
      "Incorrecto: \"Even if\" es para algo hipotético.",
      "Incorrecto: \"In spite of\" va con una cosa o -ing.",
      "Incorrecto: Despite va con una cosa o -ing.",
      "Opción correcta: \"Even though the laptop was connected\" = \"aunque el portátil estaba conectado\"."
    ],
    "tip_es": "Estado real constatado (\"was connected\") -> \"Even though\".",
    "human_rule": "Un hecho real ➔ even though.",
    "spanglish_trap": "Elegir Despite. Con una frase completa, Even though.",
    "ref": null,
    "trigger_anchor": "______ the laptop was connected to fiber ➔ Even though"
  },
  {
    "id": "bank-g24-09",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Do not share your root SSH private key with anyone, ______ they claim to be from the internal security audit team.",
    "options": [
      "even if",
      "even though",
      "despite",
      "whereas"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"even if they claim to be from the audit team\": algo que podría pasar.\n• Regla: algo hipotético ➔ even if.\n• Descartas: \"even though\" es para hechos; despite va con una cosa; whereas compara.",
    "why_wrong": [
      "Opción correcta: \"even if they claim\" = \"aunque digan ser…\".",
      "Incorrecto: \"even though\" es para un hecho real.",
      "Incorrecto: despite va con una cosa o -ing.",
      "Incorrecto: whereas compara dos cosas."
    ],
    "tip_es": "En advertencias de seguridad ante posibles engaños (\"incluso si dicen ser...\"), usa \"even if\".",
    "human_rule": "Algo que podría pasar ➔ even if.",
    "spanglish_trap": "Elegir even though. Una orden se dirige a lo que podría pasar: even if.",
    "ref": null,
    "trigger_anchor": "Do not share your key, ______ they claim to be from the audit team ➔ even if"
  },
  {
    "id": "bank-g24-10",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 1,
    "pool": "practice",
    "stem": "______ the vendor patched the authentication library last week, security researchers found a bypass vector this morning.",
    "options": [
      "Even if",
      "Even though",
      "Despite",
      "Unless"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"the vendor patched the library last week\": es un hecho que ya ocurrió.\n• Regla: un hecho real ➔ Even though.\n• Descartas: \"Even if\" es hipotético; Despite va con una cosa; Unless es \"a menos que\".",
    "why_wrong": [
      "Incorrecto: \"Even if\" es para algo hipotético.",
      "Opción correcta: \"Even though the vendor patched\" = \"aunque el proveedor parcheó\".",
      "Incorrecto: Despite va con una cosa o -ing.",
      "Incorrecto: Unless significa \"a menos que\"."
    ],
    "tip_es": "Hecho real con marcador pasado (\"last week\") -> \"Even though\".",
    "human_rule": "Un hecho real ➔ even though.",
    "spanglish_trap": "Elegir Even if. Si ya pasó la semana pasada, Even though.",
    "ref": null,
    "trigger_anchor": "______ the vendor patched the library last week ➔ Even though"
  },
  {
    "id": "bank-g24-11",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The immutable backup snapshots cannot be altered or deleted, ______ a malicious insider compromises the primary admin console.",
    "options": [
      "even though",
      "despite of",
      "even if",
      "however"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"even if a malicious insider compromises the console\": algo que podría pasar.\n• Regla: algo hipotético ➔ even if.\n• Descartas: \"even though\" es para hechos; \"despite of\" no existe; however va entre frases.",
    "why_wrong": [
      "Incorrecto: \"even though\" es para un hecho real.",
      "Incorrecto: \"despite of\" no existe.",
      "Opción correcta: \"even if an insider compromises\" = \"aunque un interno comprometa\".",
      "Incorrecto: however va entre dos frases separadas."
    ],
    "tip_es": "Garantía de arquitectura frente a ataque hipotético -> \"even if\".",
    "human_rule": "Algo que podría pasar ➔ even if.",
    "spanglish_trap": "Elegir however por el contraste. Dentro de la misma frase, even if.",
    "ref": null,
    "trigger_anchor": "…cannot be altered, ______ an insider compromises the console ➔ even if"
  },
  {
    "id": "bank-g24-12",
    "section": "UE",
    "objective": "UE5",
    "topic": "G24",
    "difficulty": 3,
    "pool": "practice",
    "stem": "______ the network engineer worked through the night to replace the core switch, the morning stand-up started on time.",
    "options": [
      "Even if",
      "In spite",
      "Despite",
      "Even though"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"the engineer worked through the night\": es un hecho que ya ocurrió.\n• Regla: un hecho real ➔ Even though.\n• Descartas: \"Even if\" es hipotético; \"In spite\" necesita \"of\"; Despite va con una cosa.",
    "why_wrong": [
      "Incorrecto: \"Even if\" es para algo hipotético.",
      "Incorrecto: \"In spite\" necesita \"of\" y una cosa.",
      "Incorrecto: Despite va con una cosa o -ing.",
      "Opción correcta: \"Even though the engineer worked\" = \"aunque el ingeniero trabajó\"."
    ],
    "tip_es": "Hecho real cumplido (\"worked through the night\") -> \"Even though\".",
    "human_rule": "Un hecho real ➔ even though.",
    "spanglish_trap": "Elegir Despite. Con una frase completa, Even though.",
    "ref": null,
    "trigger_anchor": "______ the engineer worked through the night ➔ Even though"
  },
  {
    "id": "bank-g25-01",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 1,
    "pool": "practice",
    "stem": "By the time the on-call SRE acknowledged the PagerDuty alert, the Kubernetes cluster ______ already self-healed by rescheduling the failed pods.",
    "options": [
      "had",
      "has",
      "was",
      "did"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"By the time… acknowledged\" marca un momento pasado y \"already\" dice que el clúster ya se había curado.\n• Regla: ya había pasado antes ➔ had + 3.ª forma.\n• Descartas: has es presente; was lo haría pasiva; did no se usa con la 3.ª forma.",
    "why_wrong": [
      "Opción correcta: \"had already self-healed\" = \"ya se había autorreparado\".",
      "Incorrecto: has habla del presente.",
      "Incorrecto: was lo convertiría en pasiva (\"fue autorreparado\").",
      "Incorrecto: did no se usa con la 3.ª forma."
    ],
    "tip_es": "Con \"By the time + Past Simple\", la otra cláusula lleva siempre PAST PERFECT (\"had + participio\").",
    "human_rule": "By the time + pasado ➔ lo anterior va con had + 3.ª forma.",
    "spanglish_trap": "Usar el presente perfecto (has). Si el otro momento ya pasó, lo anterior va con had.",
    "ref": null,
    "trigger_anchor": "By the time the SRE acknowledged… the cluster ______ already self-healed ➔ had"
  },
  {
    "id": "bank-g25-02",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Forensic analysis of the system logs confirmed that the intruder ______ the bash history before terminating the SSH session.",
    "options": [
      "has wiped",
      "had wiped",
      "wipes",
      "was wiping"
    ],
    "answer": 1,
    "why_correct": "• Pista: el intruso borró el historial antes de cerrar la sesión (\"before terminating\").\n• Regla: lo que pasó primero ➔ had + 3.ª forma.\n• Descartas: has wiped y wipes son presente; was wiping no dice que ya lo había terminado.",
    "why_wrong": [
      "Incorrecto: has wiped habla del presente.",
      "Opción correcta: \"had wiped\" = \"ya había borrado\".",
      "Incorrecto: wipes es presente.",
      "Incorrecto: was wiping dice que lo estaba haciendo, no que ya lo había hecho."
    ],
    "tip_es": "El primer evento en una secuencia pasada (\"confirmed that... before...\") va en Past Perfect (\"had wiped\").",
    "human_rule": "Lo primero que pasó ➔ had + 3.ª forma.",
    "spanglish_trap": "Elegir was wiping por parecerse a \"estaba borrando\". Aquí ya lo había hecho.",
    "ref": null,
    "trigger_anchor": "…confirmed that the intruder ______ the history before terminating ➔ had wiped"
  },
  {
    "id": "bank-g25-03",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The deployment pipeline failed because the developer ______ to include the new database migration file in the commit.",
    "options": [
      "has forgotten",
      "forgets",
      "had forgotten",
      "was forgetting"
    ],
    "answer": 2,
    "why_correct": "• Pista: el pipeline falló después, y el olvido ocurrió antes (\"because\").\n• Regla: la causa anterior ➔ had + 3.ª forma.\n• Descartas: has forgotten y forgets son presente; was forgetting no dice que ya lo olvidó.",
    "why_wrong": [
      "Incorrecto: has forgotten habla del presente.",
      "Incorrecto: forgets es presente.",
      "Opción correcta: \"had forgotten\" = \"se había olvidado\".",
      "Incorrecto: was forgetting dice que lo estaba olvidando, no que ya lo había olvidado."
    ],
    "tip_es": "Causa previa a un fallo pasado (\"failed because...\") -> Past Perfect (\"had forgotten\").",
    "human_rule": "La causa que ocurrió antes ➔ had + 3.ª forma.",
    "spanglish_trap": "Usar el presente. La causa ya pasó antes del fallo: had forgotten.",
    "ref": null,
    "trigger_anchor": "The pipeline failed because the developer ______ to include ➔ had forgotten"
  },
  {
    "id": "bank-g25-04",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 1,
    "pool": "practice",
    "stem": "When we inspected the server room after the power surge, we discovered that the UPS battery ______ completely.",
    "options": [
      "has drained",
      "drains",
      "is draining",
      "had drained"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"we discovered that…\" ya está en pasado, y la batería se había agotado antes.\n• Regla: lo que pasó antes de descubrirlo ➔ had + 3.ª forma.\n• Descartas: has drained, drains e is draining son presente.",
    "why_wrong": [
      "Incorrecto: has drained habla del presente.",
      "Incorrecto: drains es presente.",
      "Incorrecto: is draining es presente.",
      "Opción correcta: \"had drained\" = \"se había agotado\"."
    ],
    "tip_es": "Tras \"discovered / realized / found out that...\" en pasado, el evento previo va en Past Perfect.",
    "human_rule": "Lo que ya había pasado cuando lo descubrieron ➔ had + 3.ª forma.",
    "spanglish_trap": "Pasar la segunda parte al presente. Si el verbo principal está en pasado, lo anterior va con had.",
    "ref": null,
    "trigger_anchor": "we discovered that the UPS battery ______ completely ➔ had drained"
  },
  {
    "id": "bank-g25-05",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "No sooner ______ the network engineer applied the new ACL rule than the branch office lost connectivity to the ERP server.",
    "options": [
      "had",
      "did",
      "was",
      "has"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"No sooner\" al inicio y \"than\" después.\n• Regla: No sooner + had + sujeto + 3.ª forma + than.\n• Descartas: did, was y has no forman esta pareja.",
    "why_wrong": [
      "Opción correcta: \"No sooner had… than\" = \"apenas… cuando\".",
      "Incorrecto: did no forma la pareja con \"No sooner… than\"; se usa had.",
      "Incorrecto: was no encaja con \"applied\".",
      "Incorrecto: has es presente."
    ],
    "tip_es": "Fórmula fija B2: \"No sooner HAD [sujeto] [participio] than...\".",
    "human_rule": "No sooner had + sujeto + 3.ª forma + than…",
    "spanglish_trap": "Poner did porque es el verbo pequeño habitual. Con \"No sooner… than\" va had.",
    "ref": null,
    "trigger_anchor": "No sooner ______ the engineer applied… than (apenas… cuando) ➔ had"
  },
  {
    "id": "bank-g25-06",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The customer support representative apologized because the ticket ______ unassigned in the queue for over forty-eight hours.",
    "options": [
      "has remained",
      "had remained",
      "remains",
      "is remaining"
    ],
    "answer": 1,
    "why_correct": "• Pista: pidió disculpas ahora (pasado) porque el ticket llevaba mucho tiempo sin asignar antes.\n• Regla: lo que ya pasaba antes de ese momento ➔ had + 3.ª forma.\n• Descartas: has remained, remains e is remaining son presente.",
    "why_wrong": [
      "Incorrecto: has remained habla del presente.",
      "Opción correcta: \"had remained\" = \"había permanecido\".",
      "Incorrecto: remains es presente.",
      "Incorrecto: is remaining es presente."
    ],
    "tip_es": "Acción acumulada previa a un verbo en pasado (\"apologized\") -> Past Perfect (\"had remained\").",
    "human_rule": "Lo que ya llevaba pasando antes ➔ had + 3.ª forma.",
    "spanglish_trap": "Usar el presente por \"lleva dos días sin asignar\". Si la disculpa es del pasado, la espera anterior va con had.",
    "ref": null,
    "trigger_anchor": "apologized because the ticket ______ unassigned for 48 hours ➔ had remained"
  },
  {
    "id": "bank-g25-07",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Until the security audit last month, the company ______ never conducted a formal vishing simulation for helpdesk staff.",
    "options": [
      "has",
      "did",
      "had",
      "was"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Until the security audit last month\" marca un punto del pasado y habla de lo anterior.\n• Regla: hasta ese momento ya había (never) ➔ had + 3.ª forma.\n• Descartas: has es presente; did no va con \"conducted\"; was no encaja.",
    "why_wrong": [
      "Incorrecto: has habla del presente.",
      "Incorrecto: did no va con \"conducted\".",
      "Opción correcta: \"had never conducted\" = \"nunca había realizado\".",
      "Incorrecto: was no encaja con \"conducted\"."
    ],
    "tip_es": "Con un límite en el pasado (\"Until last month\"), usa \"had never + participio\", no \"has never\".",
    "human_rule": "Hasta ese momento del pasado ➔ had (never) + 3.ª forma.",
    "spanglish_trap": "Usar has never. Con \"until last month\" mira al pasado: had never.",
    "ref": null,
    "trigger_anchor": "Until the audit last month, the company ______ never conducted ➔ had"
  },
  {
    "id": "bank-g25-08",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "As soon as the DBA ______ that the replication lag had spiked, she throttled the background analytics queries.",
    "options": [
      "has realized",
      "had realizing",
      "realizes",
      "realized"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"As soon as… she throttled\" une dos acciones pasadas, una justo después de la otra.\n• Regla: la acción que provoca la siguiente va en pasado simple (realized).\n• Descartas: has realized y realizes son presente; \"had realizing\" no existe.",
    "why_wrong": [
      "Incorrecto: has realized habla del presente.",
      "Incorrecto: \"had realizing\" no existe.",
      "Incorrecto: realizes es presente.",
      "Opción correcta: \"realized\" = \"se dio cuenta\"."
    ],
    "tip_es": "En la secuencia pasada: 1º \"had spiked\" (Past Perfect) -> 2º \"realized\" y \"throttled\" (Past Simple).",
    "human_rule": "Dos acciones pasadas seguidas ➔ cada una en pasado simple; lo ya ocurrido antes ➔ had.",
    "spanglish_trap": "Poner had porque hay \"had spiked\" cerca. El verbo de la acción nueva va en pasado simple.",
    "ref": null,
    "trigger_anchor": "As soon as the DBA ______ that the lag had spiked, she throttled ➔ realized"
  },
  {
    "id": "bank-g25-09",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The postmortem revealed that the expired TLS certificate ______ three automated renewal warnings before it finally broke production.",
    "options": [
      "had triggered",
      "has triggered",
      "triggers",
      "was trigger"
    ],
    "answer": 0,
    "why_correct": "• Pista: el certificado ya había disparado tres avisos antes de romper producción (\"before it finally broke\").\n• Regla: lo que pasó antes ➔ had + 3.ª forma.\n• Descartas: has triggered y triggers son presente; \"was trigger\" no existe.",
    "why_wrong": [
      "Opción correcta: \"had triggered\" = \"ya había disparado\".",
      "Incorrecto: has triggered habla del presente.",
      "Incorrecto: triggers es presente.",
      "Incorrecto: \"was trigger\" no existe."
    ],
    "tip_es": "Eventos ocurridos antes de \"before it finally broke\" -> Past Perfect (\"had triggered\").",
    "human_rule": "Lo que pasó antes de otro momento pasado ➔ had + 3.ª forma.",
    "spanglish_trap": "Usar el presente perfecto. Si lo que rompió producción ya pasó, lo anterior va con had.",
    "ref": null,
    "trigger_anchor": "…three warnings before it finally broke production ➔ had triggered"
  },
  {
    "id": "bank-g25-10",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Before migrating to a Zero-Trust model in Q2, the organization ______ on a traditional perimeter VPN for all remote access.",
    "options": [
      "has relied",
      "had relied",
      "relies",
      "is relying"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Before migrating to Zero-Trust in Q2\" marca un cambio; lo anterior era otra situación.\n• Regla: lo que ya ocurría antes de ese cambio ➔ had + 3.ª forma.\n• Descartas: has relied, relies e is relying son presente.",
    "why_wrong": [
      "Incorrecto: has relied habla del presente.",
      "Opción correcta: \"had relied\" = \"había dependido\".",
      "Incorrecto: relies es presente.",
      "Incorrecto: is relying es presente."
    ],
    "tip_es": "Etapa previa a un hito pasado (\"Before migrating in Q2\") -> Past Perfect (\"had relied\").",
    "human_rule": "Lo que pasaba antes de un cambio en el pasado ➔ had + 3.ª forma.",
    "spanglish_trap": "Usar el presente por \"dependía\". Si el cambio ya ocurrió, lo anterior va con had.",
    "ref": null,
    "trigger_anchor": "Before migrating to Zero-Trust, the organization ______ on a VPN ➔ had relied"
  },
  {
    "id": "bank-g25-11",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The QA engineer could not reproduce the bug because the backend team ______ already deployed a silent hotfix ten minutes earlier.",
    "options": [
      "has",
      "was",
      "had",
      "did"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"ten minutes earlier\" y \"already\": el hotfix se había desplegado antes del intento.\n• Regla: lo que pasó antes ➔ had + 3.ª forma.\n• Descartas: has es presente; was lo haría pasiva; did no se usa con \"deployed\".",
    "why_wrong": [
      "Incorrecto: has habla del presente.",
      "Incorrecto: was lo convertiría en pasiva.",
      "Opción correcta: \"had already deployed\" = \"ya había desplegado\".",
      "Incorrecto: did no se usa con la 3.ª forma."
    ],
    "tip_es": "Si ves \"earlier / previously\" con una narración en pasado, usa \"had + participio\".",
    "human_rule": "Lo que ya había pasado antes ➔ had + 3.ª forma.",
    "spanglish_trap": "Usar did. Con \"already… earlier\", hace falta had + 3.ª forma.",
    "ref": null,
    "trigger_anchor": "the team ______ already deployed… ten minutes earlier ➔ had"
  },
  {
    "id": "bank-g25-12",
    "section": "UE",
    "objective": "UE4",
    "topic": "G25",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Hardly had the load balancer come back online ______ a second wave of DDoS traffic saturated the ingress link.",
    "options": [
      "than",
      "that",
      "then",
      "when"
    ],
    "answer": 3,
    "why_correct": "• Pista: la frase empieza con \"Hardly had…\".\n• Regla: Hardly had… WHEN (apenas… cuando).\n• Descartas: than va con \"No sooner\"; that y then no son su pareja.",
    "why_wrong": [
      "Incorrecto: than va con \"No sooner\", no con Hardly.",
      "Incorrecto: that no es la pareja de Hardly.",
      "Incorrecto: then no es la pareja de Hardly.",
      "Opción correcta: \"Hardly had… when\" = \"apenas… cuando\"."
    ],
    "tip_es": "Parejas fijas de Past Perfect invertido: \"No sooner ... THAN\" | \"Hardly / Scarcely ... WHEN\".",
    "human_rule": "Hardly (Scarcely) had… WHEN. No sooner had… THAN.",
    "spanglish_trap": "Mezclar when y than. Hardly ➔ when; No sooner ➔ than.",
    "ref": null,
    "trigger_anchor": "Hardly had the balancer come back online ______ (apenas… cuando) ➔ when"
  },
  {
    "id": "bank-g27-01",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Only if the cryptographic checksum matches the official SHA-256 hash ______ the package installer to proceed.",
    "options": [
      "will the system allow",
      "the system will allow",
      "allows the system",
      "the system allows"
    ],
    "answer": 0,
    "why_correct": "• Pista: la frase empieza con \"Only if the checksum matches…\".\n• Regla: segunda parte ➔ will + sujeto + verbo (will the system allow).\n• Descartas: \"the system will allow\" deja al sujeto antes; allows y allow no adelantan el verbo.",
    "why_wrong": [
      "Opción correcta: \"will the system allow\" = \"permitirá el sistema\".",
      "Incorrecto: \"the system will\" deja al sujeto antes del verbo pequeño.",
      "Incorrecto: \"allows the system\" pone el verbo sin adelantar el auxiliar.",
      "Incorrecto: \"the system allows\" deja al sujeto antes."
    ],
    "tip_es": "Si la frase abre con \"Only if + [condición]\", invierte la segunda cláusula como pregunta: [Auxiliar + Sujeto + Verbo].",
    "human_rule": "Only if… ➔ will + sujeto + verbo.",
    "spanglish_trap": "Mantener el orden normal. Tras Only if, el verbo pequeño va primero.",
    "ref": null,
    "trigger_anchor": "Only if the checksum matches ______ the installer to proceed ➔ will the system allow"
  },
  {
    "id": "bank-g27-02",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If the infrastructure team ______ automated chaos testing last year, yesterday's failover would have succeeded without manual intervention.",
    "options": [
      "implemented",
      "had implemented",
      "would have implemented",
      "has implemented"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"yesterday's failover would have succeeded\": se habla de algo que no pasó antes.\n• Regla: If + had + 3.ª forma, would have + 3.ª forma.\n• Descartas: implemented y \"has implemented\" no marcan lo irreal; \"would have implemented\" no va después de if.",
    "why_wrong": [
      "Incorrecto: implemented no marca que fue antes.",
      "Opción correcta: \"If the team had implemented\" = \"si el equipo hubiera implementado\".",
      "Incorrecto: \"would have\" va en la otra parte.",
      "Incorrecto: \"has implemented\" habla del presente."
    ],
    "tip_es": "En la cláusula del \"If\" para el pasado irreal (\"last year\"), usa \"had + participio\" (nunca \"would have\").",
    "human_rule": "If + had + 3.ª forma, would have + 3.ª forma.",
    "spanglish_trap": "Poner would have dentro del if. Con if va had; would have va en la otra parte.",
    "ref": null,
    "trigger_anchor": "If the team ______ chaos testing last year, the failover would have succeeded ➔ had implemented"
  },
  {
    "id": "bank-g27-03",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Only if a critical Sev-1 outage affects payment processing ______ paging the on-call engineering director after midnight.",
    "options": [
      "we authorize",
      "we do authorize",
      "do we authorize",
      "authorize we"
    ],
    "answer": 2,
    "why_correct": "• Pista: la frase empieza con \"Only if a Sev-1 outage affects…\".\n• Regla: segunda parte ➔ do + sujeto + verbo base (do we authorize).\n• Descartas: \"we authorize\" y \"we do authorize\" dejan al sujeto antes; \"authorize we\" no adelanta el auxiliar.",
    "why_wrong": [
      "Incorrecto: \"we authorize\" deja al sujeto antes.",
      "Incorrecto: \"we do authorize\" deja al sujeto antes.",
      "Opción correcta: \"do we authorize\" = \"autorizamos\".",
      "Incorrecto: \"authorize we\" no adelanta el verbo pequeño."
    ],
    "tip_es": "En inversión tras \"Only if\", nunca inviertas el verbo principal solo (\"authorize we\"); usa el auxiliar \"do/does/will\".",
    "human_rule": "Only if… ➔ do / does + sujeto + verbo base.",
    "spanglish_trap": "Mantener el orden normal. Tras Only if, el verbo pequeño va primero.",
    "ref": null,
    "trigger_anchor": "Only if a Sev-1 outage affects payments ______ paging the director ➔ do we authorize"
  },
  {
    "id": "bank-g27-04",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 1,
    "pool": "practice",
    "stem": "______ the primary database cluster to fail completely, the read-only replica in Ireland would be promoted within sixty seconds.",
    "options": [
      "Was",
      "Had",
      "Should have",
      "Were"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"______ the primary cluster to fail completely, the replica would be promoted\": una condición sin if.\n• Regla: sin if ➔ Were + sujeto + to + verbo.\n• Descartas: Was no se usa; Had es para el pasado; \"Should have\" no encaja.",
    "why_wrong": [
      "Incorrecto: Was no se usa en esta estructura.",
      "Incorrecto: Had es para algo que ya pasó.",
      "Incorrecto: \"Should have\" no encaja con \"to fail\".",
      "Opción correcta: \"Were the cluster to fail\" = \"si el clúster fallara\"."
    ],
    "tip_es": "Inversión condicional con \"to + verbo base\" (\"...to fail\") -> abre siempre con \"Were\".",
    "human_rule": "Sin if: If the cluster were to fail ➔ Were the cluster to fail.",
    "spanglish_trap": "Elegir Was. En esta estructura va Were.",
    "ref": null,
    "trigger_anchor": "______ the primary cluster to fail completely… ➔ Were"
  },
  {
    "id": "bank-g27-05",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ we known that the third-party SDK contained a deprecated cryptography library, we would never have integrated it into our app.",
    "options": [
      "Had",
      "Have",
      "Were",
      "Did"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"we would never have integrated it\": algo que no pasó antes.\n• Regla: sin if ➔ Had + sujeto + 3.ª forma.\n• Descartas: Have, Were y Did no forman esta estructura.",
    "why_wrong": [
      "Opción correcta: \"Had we known\" = \"si hubiéramos sabido\".",
      "Incorrecto: Have no forma esta estructura.",
      "Incorrecto: Were es para el presente o el futuro.",
      "Incorrecto: Did no forma esta estructura."
    ],
    "tip_es": "Inversión condicional seguida de un participio pasado (\"known\") -> abre siempre con \"Had\".",
    "human_rule": "Sin if: If we had known ➔ Had we known.",
    "spanglish_trap": "Mantener if y adelantar had a la vez. O if, o inversión.",
    "ref": null,
    "trigger_anchor": "______ we known that the SDK contained…, we would never have… ➔ Had"
  },
  {
    "id": "bank-g27-06",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 3,
    "pool": "practice",
    "stem": "If our legacy monolithic application ______ stateless, we could scale it horizontally across spot instances right now.",
    "options": [
      "had been",
      "were",
      "would be",
      "is"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"we could scale it… right now\": una situación irreal en el presente.\n• Regla: If + were (con todas las personas).\n• Descartas: \"had been\" es del pasado; \"would be\" va en la otra parte; is es real.",
    "why_wrong": [
      "Incorrecto: \"had been\" habla del pasado.",
      "Opción correcta: \"If the application were stateless\" = \"si la aplicación fuera sin estado\".",
      "Incorrecto: \"would be\" va en la otra parte.",
      "Incorrecto: is habla de algo real."
    ],
    "tip_es": "Hipótesis irreal en el presente (\"right now\") -> Second Conditional con \"were\" (nunca \"would be\" tras \"if\").",
    "human_rule": "If + were (irreal en presente).",
    "spanglish_trap": "Poner is por \"si es\". Lo irreal va en were.",
    "ref": null,
    "trigger_anchor": "If our monolith ______ stateless, we could scale it ➔ were"
  },
  {
    "id": "bank-g27-07",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Only if both the hardware token and the biometric check pass validation ______ access to the root vault.",
    "options": [
      "the bastion grants",
      "grants the bastion",
      "does the bastion grant",
      "the bastion does grant"
    ],
    "answer": 2,
    "why_correct": "• Pista: la frase empieza con \"Only if both the token and the biometric check pass…\".\n• Regla: segunda parte ➔ does + sujeto + verbo base (does the bastion grant).\n• Descartas: \"the bastion grants\" y \"the bastion does grant\" dejan al sujeto antes; \"grants the bastion\" no adelanta el auxiliar.",
    "why_wrong": [
      "Incorrecto: \"the bastion grants\" deja al sujeto antes.",
      "Incorrecto: \"grants the bastion\" no adelanta el verbo pequeño.",
      "Opción correcta: \"does the bastion grant\" = \"concede el bastión\".",
      "Incorrecto: \"the bastion does grant\" deja al sujeto antes."
    ],
    "tip_es": "Sujeto singular (\"the bastion\") en cláusula principal invertida tras \"Only if\" -> \"does the bastion grant\".",
    "human_rule": "Only if… ➔ does + sujeto + verbo base.",
    "spanglish_trap": "Mantener el orden normal. Tras Only if, el verbo pequeño va primero.",
    "ref": null,
    "trigger_anchor": "Only if both checks pass validation ______ access ➔ does the bastion grant"
  },
  {
    "id": "bank-g27-08",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the latency on the transatlantic link exceed 150ms, the global load balancer will automatically shift traffic to the Tokyo region.",
    "options": [
      "Were",
      "Had",
      "Would",
      "Should"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"______ the latency exceed 150ms, the balancer will shift traffic\": una condición posible sin if.\n• Regla: sin if ➔ Should + sujeto + verbo base.\n• Descartas: Were y Had son para otras situaciones; Would no abre una condición.",
    "why_wrong": [
      "Incorrecto: Were es para algo irreal.",
      "Incorrecto: Had es para algo que ya pasó.",
      "Incorrecto: Would no abre una condición.",
      "Opción correcta: \"Should the latency exceed\" = \"en caso de que la latencia supere\"."
    ],
    "tip_es": "Si después del sujeto el verbo está en forma base pura (\"exceed\") y el resultado tiene \"will\", abre con \"Should\".",
    "human_rule": "Sin if: If the latency should exceed ➔ Should the latency exceed.",
    "spanglish_trap": "Pensar que Should es un consejo. Aquí significa \"en caso de que\".",
    "ref": null,
    "trigger_anchor": "______ the latency exceed 150ms, traffic will shift ➔ Should"
  },
  {
    "id": "bank-g27-09",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 3,
    "pool": "practice",
    "stem": "If the developer had not hardcoded the database credentials in the script, the repository leak ______ caused a security breach.",
    "options": [
      "would not have",
      "will not have",
      "would not",
      "had not"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"If the developer had not hardcoded the credentials…\": algo que no pasó antes.\n• Regla: la otra parte ➔ would not have + 3.ª forma.\n• Descartas: \"will not have\" es futuro; \"would not\" no mira atrás; \"had not\" va dentro del if.",
    "why_wrong": [
      "Opción correcta: \"would not have caused\" = \"no habría causado\".",
      "Incorrecto: \"will not have\" es futuro.",
      "Incorrecto: \"would not\" no mira hacia atrás.",
      "Incorrecto: \"had not\" ya está en la parte del if."
    ],
    "tip_es": "Pareja del Third Conditional: [If + had V3] <-> [would have V3].",
    "human_rule": "If + had + 3.ª forma, would (not) have + 3.ª forma.",
    "spanglish_trap": "Repetir had en las dos partes. La segunda lleva would have.",
    "ref": null,
    "trigger_anchor": "If the developer had not hardcoded…, the leak ______ caused a breach ➔ would not have"
  },
  {
    "id": "bank-g27-10",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Only if the client formally signs the scope change request ______ developing the custom reporting module.",
    "options": [
      "our squad will begin",
      "will our squad begin",
      "begins our squad",
      "our squad begins"
    ],
    "answer": 1,
    "why_correct": "• Pista: la frase empieza con \"Only if the client formally signs…\".\n• Regla: segunda parte ➔ will + sujeto + verbo (will our squad begin).\n• Descartas: las demás dejan al sujeto antes, o no adelantan el auxiliar.",
    "why_wrong": [
      "Incorrecto: \"our squad will begin\" deja al sujeto antes.",
      "Opción correcta: \"will our squad begin\" = \"comenzará nuestro equipo\".",
      "Incorrecto: \"begins our squad\" no adelanta el verbo pequeño.",
      "Incorrecto: \"our squad begins\" deja al sujeto antes."
    ],
    "tip_es": "Tras \"Only if...\", busca el auxiliar (\"will / does / can\") antes del sujeto en la segunda cláusula.",
    "human_rule": "Only if… ➔ will + sujeto + verbo.",
    "spanglish_trap": "Mantener el orden normal. Tras Only if, el verbo pequeño va primero.",
    "ref": null,
    "trigger_anchor": "Only if the client signs the change ______ developing ➔ will our squad begin"
  },
  {
    "id": "bank-g27-11",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If I ______ in charge of the network architecture, I would segment the IoT sensors onto an isolated VLAN immediately.",
    "options": [
      "am",
      "would be",
      "were",
      "have been"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"If I ______ in charge…, I would segment\": una situación irreal.\n• Regla: If I were ➔ \"si yo estuviera\".\n• Descartas: am es real; \"would be\" va en la otra parte; \"have been\" no encaja.",
    "why_wrong": [
      "Incorrecto: am habla de algo real.",
      "Incorrecto: \"would be\" va en la otra parte.",
      "Opción correcta: \"If I were in charge\" = \"si yo estuviera a cargo\".",
      "Incorrecto: \"have been\" no encaja con would."
    ],
    "tip_es": "Fórmula clásica de consejo técnico hipotético: \"If I were... I would...\".",
    "human_rule": "If I were… (irreal).",
    "spanglish_trap": "Decir \"If I was\". En lo irreal va were.",
    "ref": null,
    "trigger_anchor": "If I ______ in charge of the architecture, I would segment ➔ were"
  },
  {
    "id": "bank-g27-12",
    "section": "UE",
    "objective": "UE5",
    "topic": "G27",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The ransomware attack would have encrypted the entire backup array if the sysadmin ______ the air-gapped storage offline the night before.",
    "options": [
      "did not take",
      "would not have taken",
      "has not taken",
      "had not taken"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"would have encrypted… if the sysadmin ______ the storage offline the night before\": algo que no se hizo.\n• Regla: if + had not + 3.ª forma.\n• Descartas: \"did not take\" y \"has not taken\" no miran atrás; \"would not have taken\" va en la otra parte.",
    "why_wrong": [
      "Incorrecto: \"did not take\" no marca que fue antes.",
      "Incorrecto: \"would not have\" va en la otra parte.",
      "Incorrecto: \"has not taken\" habla del presente.",
      "Opción correcta: \"had not taken\" = \"no hubiera desconectado\"."
    ],
    "tip_es": "Aunque el \"if\" vaya en la segunda mitad de la frase, sigue llevando \"had + participio\" (nunca \"would\").",
    "human_rule": "If + had (not) + 3.ª forma.",
    "spanglish_trap": "Poner would dentro del if. Con if va had.",
    "ref": null,
    "trigger_anchor": "…if the sysadmin ______ the storage offline the night before ➔ had not taken"
  },
  {
    "id": "bank-g28-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The twenty-minute outage in the European region was ______ a misconfigured BGP route advertisement from our upstream ISP.",
    "options": [
      "due to",
      "because",
      "since",
      "due of"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco viene \"a misconfigured BGP route advertisement\", una cosa.\n• Regla: was + due to + una cosa.\n• Descartas: because y since necesitan una frase completa; \"due of\" no existe.",
    "why_wrong": [
      "Opción correcta: \"was due to\" = \"se debió a\".",
      "Incorrecto: because necesita una frase completa.",
      "Incorrecto: since necesita una frase completa.",
      "Incorrecto: \"due of\" no existe."
    ],
    "tip_es": "Tras \"is / was / were\" + sustantivo (sin verbo conjugado), usa \"due to\".",
    "human_rule": "was due TO + una cosa.",
    "spanglish_trap": "Usar because con una cosa. Con una cosa sola, due to.",
    "ref": null,
    "trigger_anchor": "The outage was ______ a misconfigured BGP advertisement ➔ due to"
  },
  {
    "id": "bank-g28-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 2,
    "pool": "practice",
    "stem": "All outbound SMTP traffic was temporarily blocked ______ an abnormal surge in automated spam originating from a compromised VM.",
    "options": [
      "because",
      "because of",
      "due of",
      "since"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"an abnormal surge in automated spam\", una cosa.\n• Regla: \"a causa de\" + una cosa ➔ because of.\n• Descartas: because y since necesitan una frase completa; \"due of\" no existe.",
    "why_wrong": [
      "Incorrecto: because necesita una frase completa.",
      "Opción correcta: \"because of\" = \"a causa de\".",
      "Incorrecto: \"due of\" no existe.",
      "Incorrecto: since necesita una frase completa."
    ],
    "tip_es": "Si después del hueco hay solo un sustantivo (\"an abnormal surge\"), NO uses \"because\" ni \"since\"; usa \"because of\" o \"owing to\".",
    "human_rule": "Una cosa ➔ because OF. Una frase completa ➔ because.",
    "spanglish_trap": "Poner because a secas. Con una cosa, because of.",
    "ref": null,
    "trigger_anchor": "was blocked ______ an abnormal surge in spam ➔ because of"
  },
  {
    "id": "bank-g28-03",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 3,
    "pool": "practice",
    "stem": "______ a critical vulnerability discovered in the open-source logging library, all production containers must be patched tonight.",
    "options": [
      "Because",
      "Due of",
      "Owing to",
      "Since that"
    ],
    "answer": 2,
    "why_correct": "• Pista: la frase abre con el hueco y sigue una cosa (\"a critical vulnerability\").\n• Regla: al inicio, \"debido a\" + una cosa ➔ Owing to.\n• Descartas: Because y \"Since that\" necesitan una frase completa; \"Due of\" no existe.",
    "why_wrong": [
      "Incorrecto: Because necesita una frase completa.",
      "Incorrecto: \"Due of\" no existe.",
      "Opción correcta: \"Owing to a vulnerability\" = \"debido a una vulnerabilidad\".",
      "Incorrecto: \"Since that\" no es una forma válida."
    ],
    "tip_es": "Delante de un sustantivo sin verbo principal conjugado: \"Owing to / Due to / Because of\".",
    "human_rule": "Al inicio de frase + una cosa ➔ Owing to / Due to / Because of.",
    "spanglish_trap": "Abrir con Because + una cosa. Con una cosa, Owing to.",
    "ref": null,
    "trigger_anchor": "______ a critical vulnerability… all containers must be patched ➔ Owing to"
  },
  {
    "id": "bank-g28-04",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The nightly database backup failed ______ the storage volume ran out of free inodes halfway through the dump.",
    "options": [
      "because of",
      "due to",
      "owing to",
      "because"
    ],
    "answer": 3,
    "why_correct": "• Pista: después del hueco viene una frase completa (\"the storage volume ran out of free inodes\").\n• Regla: \"porque\" + frase completa ➔ because.\n• Descartas: \"because of\", \"due to\" y \"owing to\" van con una cosa.",
    "why_wrong": [
      "Incorrecto: \"because of\" va con una cosa.",
      "Incorrecto: \"due to\" va con una cosa.",
      "Incorrecto: \"owing to\" va con una cosa.",
      "Opción correcta: \"because the volume ran out\" = \"porque el volumen se quedó sin…\"."
    ],
    "tip_es": "¿Hay [Sujeto + Verbo conjugado] después del hueco? Usa \"because\" o \"since\" (jamás \"because of\" ni \"due to\").",
    "human_rule": "Una frase completa ➔ because. Una cosa ➔ because of / due to.",
    "spanglish_trap": "Poner because of por costumbre. Con quién + qué hizo, because.",
    "ref": null,
    "trigger_anchor": "backup failed ______ the volume ran out of inodes (frase) ➔ because"
  },
  {
    "id": "bank-g28-05",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The high packet loss on the wireless network was ______ severe electromagnetic interference near the warehouse.",
    "options": [
      "due to",
      "owing",
      "because",
      "as a result"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"was ______ severe electromagnetic interference\": una cosa después de was.\n• Regla: was + due to + una cosa.\n• Descartas: owing necesita \"to\"; because necesita una frase; \"as a result\" no encaja.",
    "why_wrong": [
      "Opción correcta: \"was due to\" = \"se debió a\".",
      "Incorrecto: owing necesita \"to\" (owing to).",
      "Incorrecto: because necesita una frase completa.",
      "Incorrecto: \"as a result\" va entre frases."
    ],
    "tip_es": "Ojo con las opciones incompletas: es \"owing TO\" y \"as a result OF\". Completa y correcta tras \"was\": \"due to\".",
    "human_rule": "was due TO + una cosa.",
    "spanglish_trap": "Cortar owing sin to. Es owing TO.",
    "ref": null,
    "trigger_anchor": "packet loss was ______ severe electromagnetic interference ➔ due to"
  },
  {
    "id": "bank-g28-06",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Several legacy microservices crashed during the load test ______ thread-pool exhaustion in the connection manager.",
    "options": [
      "because",
      "owing to",
      "since",
      "consequently"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"thread-pool exhaustion\", una cosa.\n• Regla: \"debido a\" + una cosa ➔ owing to.\n• Descartas: because y since necesitan una frase; consequently va entre frases.",
    "why_wrong": [
      "Incorrecto: because necesita una frase completa.",
      "Opción correcta: \"owing to\" = \"debido a\".",
      "Incorrecto: since necesita una frase completa.",
      "Incorrecto: consequently va entre dos frases."
    ],
    "tip_es": "Sustantivo después del hueco (\"thread-pool exhaustion\") -> exige preposición (\"owing to / because of\").",
    "human_rule": "Una cosa ➔ owing to / due to / because of.",
    "spanglish_trap": "Elegir consequently por la relación causa-efecto. Dentro de una frase, owing to.",
    "ref": null,
    "trigger_anchor": "crashed ______ thread-pool exhaustion (una cosa) ➔ owing to"
  },
  {
    "id": "bank-g28-07",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The cloud migration timeline had to be extended by three weeks ______ the fact that the legacy schema contained undocumented triggers.",
    "options": [
      "because",
      "owing",
      "due to",
      "since of"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"______ the fact that the legacy schema contained…\": una expresión fija con \"the fact that\".\n• Regla: ➔ due to the fact that.\n• Descartas: because necesita una frase directa; owing necesita \"to\"; \"since of\" no existe.",
    "why_wrong": [
      "Incorrecto: because no lleva \"the fact that\".",
      "Incorrecto: owing necesita \"to\" (owing to the fact that).",
      "Opción correcta: \"due to the fact that\" = \"debido a que\".",
      "Incorrecto: \"since of\" no existe."
    ],
    "tip_es": "Si ves \"______ the fact that...\", antes de \"the fact\" siempre va una preposición (\"due to / because of / owing to\").",
    "human_rule": "\"Debido a que…\" ➔ due to the fact that…",
    "spanglish_trap": "Poner because delante de \"the fact that\". Con esa expresión, due to.",
    "ref": null,
    "trigger_anchor": "extended ______ the fact that the schema contained triggers ➔ due to"
  },
  {
    "id": "bank-g28-08",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Users in the Sydney office experienced slow login times ______ the local Active Directory replica was undergoing maintenance.",
    "options": [
      "due to",
      "because of",
      "owing to",
      "because"
    ],
    "answer": 3,
    "why_correct": "• Pista: después del hueco viene una frase completa (\"the local AD replica was undergoing maintenance\").\n• Regla: \"porque\" + frase completa ➔ because.\n• Descartas: \"due to\", \"because of\" y \"owing to\" van con una cosa.",
    "why_wrong": [
      "Incorrecto: \"due to\" va con una cosa.",
      "Incorrecto: \"because of\" va con una cosa.",
      "Incorrecto: \"owing to\" va con una cosa.",
      "Opción correcta: \"because the replica was undergoing maintenance\"."
    ],
    "tip_es": "Mira el verbo \"was undergoing\": al haber verbo conjugado, quedan prohibidos \"due to\", \"because of\" y \"owing to\".",
    "human_rule": "Frase completa ➔ because.",
    "spanglish_trap": "Elegir due to. Aquí viene una frase completa: because.",
    "ref": null,
    "trigger_anchor": "slow logins ______ the replica was undergoing maintenance ➔ because"
  },
  {
    "id": "bank-g28-09",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The surge in helpdesk tickets this morning is directly ______ the mandatory password rotation policy enacted at midnight.",
    "options": [
      "attributable to",
      "because",
      "due of",
      "result of"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"is directly ______ the mandatory password rotation policy\": una relación de causa con una cosa.\n• Regla: ➔ attributable to.\n• Descartas: because necesita una frase; \"due of\" no existe; \"result of\" necesita \"the\" y \"as a\".",
    "why_wrong": [
      "Opción correcta: \"directly attributable to\" = \"directamente atribuible a\".",
      "Incorrecto: because necesita una frase completa.",
      "Incorrecto: \"due of\" no existe.",
      "Incorrecto: \"result of\" no se usa así; sería \"a result of\"."
    ],
    "tip_es": "Tras \"is/was\": \"due TO\" o \"attributable TO\" + sustantivo.",
    "human_rule": "\"Atribuible a\" ➔ attributable TO.",
    "spanglish_trap": "Poner of por el \"de\" del español. Con attributable va TO.",
    "ref": null,
    "trigger_anchor": "is directly ______ the password rotation policy ➔ attributable to"
  },
  {
    "id": "bank-g28-10",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The deployment was rolled back within five minutes ______ an unexpected spike in HTTP 502 Bad Gateway errors.",
    "options": [
      "because",
      "because of",
      "since",
      "due"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"an unexpected spike in errors\", una cosa.\n• Regla: \"a causa de\" + una cosa ➔ because of.\n• Descartas: because y since necesitan una frase; due necesita \"to\".",
    "why_wrong": [
      "Incorrecto: because necesita una frase completa.",
      "Opción correcta: \"because of\" = \"a causa de\".",
      "Incorrecto: since necesita una frase completa.",
      "Incorrecto: due necesita \"to\" (due to)."
    ],
    "tip_es": "\"Due\" nunca va solo sin \"to\" en sentido causal; elige \"because of\".",
    "human_rule": "Una cosa ➔ because of.",
    "spanglish_trap": "Cortar due sin to. Es due TO.",
    "ref": null,
    "trigger_anchor": "rolled back ______ an unexpected spike in errors ➔ because of"
  },
  {
    "id": "bank-g28-11",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 2,
    "pool": "practice",
    "stem": "______ the hardware vendor's supply chain delays, the new rack servers will not arrive until next quarter.",
    "options": [
      "Because",
      "Since",
      "Due to",
      "As"
    ],
    "answer": 2,
    "why_correct": "• Pista: la frase abre con el hueco y sigue una cosa (\"the hardware vendor's supply chain delays\").\n• Regla: al inicio + una cosa ➔ Due to.\n• Descartas: Because, Since y As necesitan una frase completa.",
    "why_wrong": [
      "Incorrecto: Because necesita una frase completa.",
      "Incorrecto: Since necesita una frase completa.",
      "Opción correcta: \"Due to the delays\" = \"debido a los retrasos\".",
      "Incorrecto: As necesita una frase completa."
    ],
    "tip_es": "\"Because\", \"Since\" y \"As\" exigen verbo conjugado; delante de un sustantivo (\"delays\"), usa \"Due to\".",
    "human_rule": "Al inicio + una cosa ➔ Due to / Owing to.",
    "spanglish_trap": "Abrir con Because + una cosa. Con una cosa, Due to.",
    "ref": null,
    "trigger_anchor": "______ the vendor's supply chain delays (una cosa) ➔ Due to"
  },
  {
    "id": "bank-g28-12",
    "section": "UE",
    "objective": "UE3",
    "topic": "G28",
    "difficulty": 3,
    "pool": "practice",
    "stem": "The API gateway rejected the client request ______ the bearer token in the authorization header had expired.",
    "options": [
      "due to",
      "because of",
      "owing to",
      "since"
    ],
    "answer": 3,
    "why_correct": "• Pista: después del hueco viene una frase completa (\"the bearer token… had expired\").\n• Regla: \"ya que\" + frase completa ➔ since.\n• Descartas: \"due to\", \"because of\" y \"owing to\" van con una cosa.",
    "why_wrong": [
      "Incorrecto: \"due to\" va con una cosa.",
      "Incorrecto: \"because of\" va con una cosa.",
      "Incorrecto: \"owing to\" va con una cosa.",
      "Opción correcta: \"since the token had expired\" = \"ya que el token había caducado\"."
    ],
    "tip_es": "Con sujeto + verbo conjugado (\"had expired\"), usa \"since\" o \"because\", nunca \"due to / because of / owing to\".",
    "human_rule": "Frase completa ➔ since / because.",
    "spanglish_trap": "Elegir due to. Aquí viene una frase completa: since.",
    "ref": null,
    "trigger_anchor": "rejected the request ______ the token had expired ➔ since"
  },
  {
    "id": "bank-g29-01",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 1,
    "pool": "practice",
    "stem": "During the escalation call, the support lead said: \"I was ______ if you could send us the full stack trace from the staging server.\"",
    "options": [
      "wondering",
      "wondered",
      "wonder",
      "to wonder"
    ],
    "answer": 0,
    "why_correct": "• Pista: la petición suave empieza con \"I was…\".\n• Regla: I was wondering if you could…\n• Descartas: \"was wondered\", \"was wonder\" y \"was to wonder\" no forman la frase.",
    "why_wrong": [
      "Opción correcta: \"I was wondering if you could…\" = \"me preguntaba si podrías…\".",
      "Incorrecto: \"was wondered\" no existe.",
      "Incorrecto: \"was wonder\" no existe.",
      "Incorrecto: \"was to wonder\" cambia el sentido."
    ],
    "tip_es": "Fórmula fija de cortesía B2: \"I was WONDERING if you could + verbo base\".",
    "human_rule": "\"Me preguntaba si podrías…\" ➔ I was wondering if you could…",
    "spanglish_trap": "Decir \"I wonder\" (más directo). Para suavizar, el inglés usa el pasado: I was wondering.",
    "ref": null,
    "trigger_anchor": "I was ______ if you could send… ➔ wondering"
  },
  {
    "id": "bank-g29-02",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "To avoid sounding confrontational in the code review, the senior engineer wrote: \"I was thinking we ______ refactor this helper function to reduce cyclomatic complexity.\"",
    "options": [
      "can",
      "might",
      "will",
      "shall"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una sugerencia suave entre colegas (\"I was thinking…\").\n• Regla: I was thinking we might + verbo.\n• Descartas: can y will son más directos; shall suena formal.",
    "why_wrong": [
      "Incorrecto: can es más directo.",
      "Opción correcta: \"I was thinking we might refactor\" = \"pensaba que quizás podríamos refactorizar\".",
      "Incorrecto: will es una decisión, no una sugerencia.",
      "Incorrecto: shall suena formal y se usa con \"Shall we…\"."
    ],
    "tip_es": "Con \"I was thinking...\" para suavizar una sugerencia, usa \"might\" o \"could\" en vez de \"will/can\".",
    "human_rule": "\"Pensaba que quizás podríamos…\" ➔ I was thinking we might + verbo.",
    "spanglish_trap": "Usar will porque suena decidido. Para sugerir sin imponer, might.",
    "ref": null,
    "trigger_anchor": "I was thinking we ______ refactor (sugerencia suave) ➔ might"
  },
  {
    "id": "bank-g29-03",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 3,
    "pool": "practice",
    "stem": "\"I ______ hoping you would be able to review the firewall change request before the CAB meeting at 14:00,\" the network engineer said.",
    "options": [
      "am",
      "have",
      "was",
      "had"
    ],
    "answer": 2,
    "why_correct": "• Pista: la petición es cortés y empieza con \"I… hoping\".\n• Regla: I was hoping you would…\n• Descartas: am, have y had no forman la frase suave.",
    "why_wrong": [
      "Incorrecto: \"I am hoping\" es más directo.",
      "Incorrecto: \"I have hoping\" no existe.",
      "Opción correcta: \"I was hoping\" = \"esperaba que…\".",
      "Incorrecto: \"I had hoping\" no existe."
    ],
    "tip_es": "Para suavizar una petición en el presente, usa el pasado continuo: \"I WAS hoping / I WAS wondering\".",
    "human_rule": "\"Esperaba que…\" ➔ I was hoping you would…",
    "spanglish_trap": "Poner am hoping por \"espero\". Para suavizar, el pasado: was hoping.",
    "ref": null,
    "trigger_anchor": "I ______ hoping you would be able to review… ➔ was"
  },
  {
    "id": "bank-g29-04",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 1,
    "pool": "practice",
    "stem": "In the postmortem meeting, the architect remarked: \"We ______ to have caught that schema mismatch during the staging deployment.\"",
    "options": [
      "should",
      "had better",
      "might",
      "ought"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"to have caught\" va después del hueco, y hablan de algo que se debió detectar.\n• Regla: reproche suave ➔ ought to have + 3.ª forma.\n• Descartas: should y might no llevan \"to\" delante de have; \"had better\" tampoco.",
    "why_wrong": [
      "Incorrecto: después de should no va \"to\" (should have caught).",
      "Incorrecto: después de had better no va \"to\".",
      "Incorrecto: después de might no va \"to\".",
      "Opción correcta: \"ought to have caught\" = \"deberíamos haber detectado\"."
    ],
    "tip_es": "Si después del hueco está escrito \"to\", elige \"ought\" (\"should\" y \"had better\" jamás llevan \"to\").",
    "human_rule": "\"Deberíamos haberlo hecho\" (con suavidad) ➔ ought to have + 3.ª forma.",
    "spanglish_trap": "Elegir should porque suena igual de natural. Si ya hay \"to have\" después, es ought.",
    "ref": null,
    "trigger_anchor": "We ______ to have caught that mismatch ➔ ought"
  },
  {
    "id": "bank-g29-05",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "\"Would you ______ if we rescheduled the database maintenance window to Sunday night?\" the project manager asked the client.",
    "options": [
      "mind",
      "minding",
      "minded",
      "to mind"
    ],
    "answer": 0,
    "why_correct": "• Pista: pregunta con \"Would you…\" y después viene \"if we rescheduled\".\n• Regla: \"¿te importaría si…?\" ➔ Would you mind if + pasado.\n• Descartas: minding, minded y \"to mind\" no van después de Would you.",
    "why_wrong": [
      "Opción correcta: \"Would you mind if…\" = \"¿te importaría si…?\".",
      "Incorrecto: después de Would you va el verbo base, no -ing.",
      "Incorrecto: después de Would you va el verbo base, no el pasado.",
      "Incorrecto: después de Would you no va \"to\"."
    ],
    "tip_es": "Estructura diplomática: \"Would you MIND if we + verbo en pasado...?\".",
    "human_rule": "\"¿Te importaría si…?\" ➔ Would you mind if + pasado simple.",
    "spanglish_trap": "Conjugar mind. Después de Would you va el verbo base: mind.",
    "ref": null,
    "trigger_anchor": "Would you ______ if we rescheduled…? ➔ mind"
  },
  {
    "id": "bank-g29-06",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 3,
    "pool": "practice",
    "stem": "If you have a moment, I was wondering whether you could ______ the updated IAM role permissions in the sandbox account.",
    "options": [
      "to verify",
      "verify",
      "verifying",
      "verified"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"I was wondering whether you could…\" y después va el verbo sin to.\n• Regla: could + verbo base (verify).\n• Descartas: \"to verify\", verifying y verified no van después de could.",
    "why_wrong": [
      "Incorrecto: después de could no va \"to\".",
      "Opción correcta: \"could verify\" = \"podrías verificar\".",
      "Incorrecto: después de could va el verbo base, no -ing.",
      "Incorrecto: después de could va el verbo base, no el pasado."
    ],
    "tip_es": "Después de \"could / would / might\", el verbo va siempre en forma base desnuda (\"verify\").",
    "human_rule": "I was wondering whether you could + verbo base.",
    "spanglish_trap": "Poner to o -ing después de could. El verbo va tal cual.",
    "ref": null,
    "trigger_anchor": "I was wondering whether you could ______ ➔ verify"
  },
  {
    "id": "bank-g29-07",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The consultant politely suggested: \"Perhaps it ______ be safer to test the rollback script on a snapshot before touching the live table.\"",
    "options": [
      "will",
      "shall",
      "would",
      "is"
    ],
    "answer": 2,
    "why_correct": "• Pista: es una sugerencia educada (\"Perhaps…\").\n• Regla: Perhaps it would be… (suavizar con would).\n• Descartas: will y is suenan más seguros; shall es formal.",
    "why_wrong": [
      "Incorrecto: will suena más seguro y directo.",
      "Incorrecto: shall suena formal y no se usa con it.",
      "Opción correcta: \"it would be safer\" = \"sería más seguro\".",
      "Incorrecto: is suena como un hecho, no una sugerencia."
    ],
    "tip_es": "Para suavizar una recomendación con \"Perhaps it ___ be better/safer\", usa \"would\" o \"might\".",
    "human_rule": "Sugerencia educada ➔ Perhaps it would be…",
    "spanglish_trap": "Usar will porque \"será más seguro\". Para suavizar, would.",
    "ref": null,
    "trigger_anchor": "Perhaps it ______ be safer ➔ would"
  },
  {
    "id": "bank-g29-08",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "\"Would you mind if I ______ the verbose debugging flag on your account for ten minutes?\" the support analyst asked.",
    "options": [
      "enable",
      "will enable",
      "enabling",
      "enabled"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"Would you mind if I…\" pide permiso con cortesía.\n• Regla: Would you mind if + sujeto + pasado simple.\n• Descartas: enable, \"will enable\" y enabling no van después de \"mind if I\".",
    "why_wrong": [
      "Incorrecto: después de \"mind if I\" va el pasado, no el verbo base.",
      "Incorrecto: \"will enable\" no se usa con mind if.",
      "Incorrecto: enabling no va con \"mind if I\".",
      "Opción correcta: \"enabled\" = \"activara\" (pedir permiso con cortesía)."
    ],
    "tip_es": "Ojo a la diferencia: \"Would you mind + -ING\" (sin sujeto), pero \"Would you mind if I + PAST SIMPLE\" (\"enabled\").",
    "human_rule": "\"¿Te importaría si yo…?\" ➔ Would you mind if I + pasado.",
    "spanglish_trap": "Poner el presente. Aunque hable de ahora, tras mind if va el pasado.",
    "ref": null,
    "trigger_anchor": "Would you mind if I ______ the flag? ➔ enabled"
  },
  {
    "id": "bank-g29-09",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 3,
    "pool": "practice",
    "stem": "To soften the deadline reminder, the Scrum Master wrote: \"I ______ just wondering if there is any update on the API documentation ticket.\"",
    "options": [
      "was",
      "did",
      "have",
      "had"
    ],
    "answer": 0,
    "why_correct": "• Pista: el recordatorio se suaviza con \"just wondering\".\n• Regla: I was just wondering if…\n• Descartas: did, have y had no forman esta frase.",
    "why_wrong": [
      "Opción correcta: \"I was just wondering\" = \"me preguntaba si…\".",
      "Incorrecto: \"I did just wondering\" no existe.",
      "Incorrecto: \"I have just wondering\" no existe.",
      "Incorrecto: \"I had just wondering\" no existe."
    ],
    "tip_es": "Fórmula suave de seguimiento en Slack/Jira: \"I WAS just wondering if...\".",
    "human_rule": "\"Me preguntaba si…\" ➔ I was just wondering if…",
    "spanglish_trap": "Decir \"I am wondering\". Para suavizar, el pasado: was wondering.",
    "ref": null,
    "trigger_anchor": "I ______ just wondering if there is any update ➔ was"
  },
  {
    "id": "bank-g29-10",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Instead of saying \"You made a mistake in the subnet mask\", a diplomatic engineer says: \"It ______ seem that the subnet mask is slightly off.\"",
    "options": [
      "will",
      "would",
      "shall",
      "is"
    ],
    "answer": 1,
    "why_correct": "• Pista: se corrige a alguien con diplomacia (\"It… seem that…\").\n• Regla: \"parece que…\" suavizado ➔ It would seem that…\n• Descartas: will y shall suenan más directos; is afirma el error.",
    "why_wrong": [
      "Incorrecto: will suena más seguro y directo.",
      "Opción correcta: \"It would seem that…\" = \"parecería que…\".",
      "Incorrecto: shall no se usa así.",
      "Incorrecto: is afirma el hecho sin suavizar."
    ],
    "tip_es": "Para corregir un error con tacto diplomático: \"It WOULD seem / appear that...\".",
    "human_rule": "Corregir con diplomacia ➔ It would seem that…",
    "spanglish_trap": "Decir \"You made a mistake\". Para suavizar, It would seem that…",
    "ref": null,
    "trigger_anchor": "It ______ seem that the subnet mask is slightly off ➔ would"
  },
  {
    "id": "bank-g29-11",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "\"We were hoping ______ finalize the vendor security assessment by Friday, if your team has the bandwidth,\" the CISO wrote.",
    "options": [
      "for",
      "in",
      "to",
      "that"
    ],
    "answer": 2,
    "why_correct": "• Pista: después de hoping va una acción que queremos hacer, con verbo base.\n• Regla: hope + to + verbo ➔ were hoping TO finalize.\n• Descartas: for e in no van; \"that\" necesitaría un sujeto después.",
    "why_wrong": [
      "Incorrecto: después de hoping no va \"for\" delante de un verbo.",
      "Incorrecto: después de hoping no va \"in\".",
      "Opción correcta: \"were hoping to finalize\" = \"esperábamos finalizar\".",
      "Incorrecto: \"hoping that\" necesitaría un sujeto y un verbo después."
    ],
    "tip_es": "\"We were hoping + TO + verbo base\" (\"hoping to finalize\").",
    "human_rule": "\"Esperábamos hacer algo\" ➔ were hoping TO + verbo.",
    "spanglish_trap": "Poner for o that. Si el mismo sujeto hace la acción, va to + verbo.",
    "ref": null,
    "trigger_anchor": "We were hoping ______ finalize… ➔ to"
  },
  {
    "id": "bank-g29-12",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 3,
    "pool": "practice",
    "stem": "\"I was thinking it might ______ worth adding a circuit breaker to the payment service,\" the backend developer suggested.",
    "options": [
      "to be",
      "being",
      "been",
      "be"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"I was thinking it might…\" y falta el verbo después.\n• Regla: might + verbo base (be).\n• Descartas: \"to be\", being y been no van después de might.",
    "why_wrong": [
      "Incorrecto: después de might no va \"to\".",
      "Incorrecto: después de might va el verbo base, no -ing.",
      "Incorrecto: después de might va be, no been.",
      "Opción correcta: \"might be worth\" = \"quizás valga la pena\"."
    ],
    "tip_es": "Detrás de \"might\", pon siempre la forma base \"be\" (y recuerda que detrás de \"worth\" va \"-ing\").",
    "human_rule": "might + verbo base (might be).",
    "spanglish_trap": "Poner to o -ing después de might. Después de un modal, el verbo va tal cual.",
    "ref": null,
    "trigger_anchor": "I was thinking it might ______ worth adding ➔ be"
  },
  {
    "id": "bank-v01-05",
    "section": "UE",
    "objective": "UE3",
    "topic": "V01",
    "difficulty": 1,
    "pool": "practice",
    "stem": "In a ______ cloud architecture, multiple independent customer organizations share the same underlying physical servers while remaining logically isolated.",
    "options": [
      "multi-tenant",
      "single-threaded",
      "bare-metal",
      "air-gapped"
    ],
    "answer": 0,
    "why_correct": "• Pista: varios clientes comparten los mismos servidores, con aislamiento lógico.\n• Significado: multi-tenant = varios inquilinos en la misma infraestructura.\n• Descartas: single-threaded es un programa de un solo hilo; bare-metal es hardware sin virtualizar; air-gapped es sin red.",
    "why_wrong": [
      "Opción correcta: \"multi-tenant\" = \"varios inquilinos\".",
      "Incorrecto: single-threaded describe un programa de un solo hilo.",
      "Incorrecto: bare-metal es un servidor físico sin virtualizar.",
      "Incorrecto: air-gapped es una red sin conexión al exterior."
    ],
    "tip_es": "Varios clientes compartiendo infraestructura aislada = Multi-tenant.",
    "human_rule": "multi-tenant = varios clientes comparten la infraestructura.",
    "spanglish_trap": "Elegir single-threaded por \"single\" y \"multi\". Aquí hablan de clientes, no de hilos.",
    "ref": null,
    "trigger_anchor": "multiple customers share the same servers, logically isolated ➔ multi-tenant"
  },
  {
    "id": "bank-v01-06",
    "section": "UE",
    "objective": "UE3",
    "topic": "V01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "To prevent a single datacenter outage from taking down the platform, we deployed our database across three geographically separate ______ zones.",
    "options": [
      "latency",
      "availability",
      "egress",
      "hypervisor"
    ],
    "answer": 1,
    "why_correct": "• Pista: se reparte la base de datos en tres \"zones\" para que un centro de datos caído no tumbe todo.\n• Significado: availability zone = centro de datos aislado dentro de una región.\n• Descartas: latency es el retraso; egress es la salida de datos; hypervisor es el supervisor de VMs.",
    "why_wrong": [
      "Incorrecto: latency es el retraso de la red.",
      "Opción correcta: \"availability zones\" = \"zonas de disponibilidad\".",
      "Incorrecto: egress es la salida de datos.",
      "Incorrecto: hypervisor es el software que crea las VMs."
    ],
    "tip_es": "Zonas aisladas dentro de una región cloud para alta disponibilidad = Availability Zones.",
    "human_rule": "availability zone = centro de datos aislado; repartir en varias da alta disponibilidad.",
    "spanglish_trap": "Traducir availability como \"disponibilidad\" sin conectar con \"zones\". Es el nombre del concepto.",
    "ref": null,
    "trigger_anchor": "three geographically separate ______ zones ➔ availability"
  },
  {
    "id": "bank-v01-07",
    "section": "UE",
    "objective": "UE3",
    "topic": "V01",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Auto-scaling groups provide ______ by automatically provisioning new compute instances when CPU utilization exceeds 80% and terminating them when demand drops.",
    "options": [
      "obsolescence",
      "virtualization",
      "elasticity",
      "throttling"
    ],
    "answer": 2,
    "why_correct": "• Pista: el grupo agrega instancias cuando la CPU pasa del 80 % y las quita cuando baja la demanda.\n• Significado: elasticity = elasticidad.\n• Descartas: obsolescence es quedarse obsoleto; virtualization crea máquinas virtuales; throttling es limitar.",
    "why_wrong": [
      "Incorrecto: obsolescence es quedarse obsoleto.",
      "Incorrecto: virtualization es crear máquinas virtuales.",
      "Opción correcta: \"elasticity\" = \"elasticidad\".",
      "Incorrecto: throttling es limitar la velocidad o el uso."
    ],
    "tip_es": "Crecer y reducirse dinámicamente según la demanda = Elasticity.",
    "human_rule": "elasticity = crecer y encogerse automáticamente con la carga.",
    "spanglish_trap": "Elegir virtualization porque suena cloud. Aquí lo que importa es adaptarse a la carga.",
    "ref": null,
    "trigger_anchor": "provisioning new instances above 80% CPU and terminating them… ➔ elasticity"
  },
  {
    "id": "bank-v01-08",
    "section": "UE",
    "objective": "UE3",
    "topic": "V01",
    "difficulty": 1,
    "pool": "practice",
    "stem": "While data ingress into public cloud storage is typically free, transferring terabytes of video out to external users incurs substantial ______ fees.",
    "options": [
      "ingress",
      "latency",
      "provisioning",
      "egress"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"transferring terabytes of video out to external users\": datos que salen.\n• Significado: egress fees = cargos por la salida de datos.\n• Descartas: ingress entra; latency es el retraso; provisioning es crear recursos.",
    "why_wrong": [
      "Incorrecto: ingress son los datos que entran, y suelen ser gratis.",
      "Incorrecto: latency es el retraso, no un cargo.",
      "Incorrecto: provisioning es crear recursos.",
      "Opción correcta: \"egress fees\" = \"cargos por salida de datos\"."
    ],
    "tip_es": "Datos que ENTRAN = Ingress. Datos que SALEN = Egress.",
    "human_rule": "Entrada gratis (ingress), salida se cobra (egress).",
    "spanglish_trap": "Confundir ingress y egress. Si los datos salen, egress.",
    "ref": null,
    "trigger_anchor": "transferring terabytes of video OUT to users ➔ egress fees"
  },
  {
    "id": "bank-v01-09",
    "section": "UE",
    "objective": "UE3",
    "topic": "V01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Kubernetes is the industry-standard container ______ platform for automating deployment, scaling, and service discovery across clusters.",
    "options": [
      "orchestration",
      "compilation",
      "encryption",
      "defragmentation"
    ],
    "answer": 0,
    "why_correct": "• Pista: Kubernetes automatiza el despliegue, el escalado y el descubrimiento de servicios.\n• Significado: container orchestration = orquestar contenedores.\n• Descartas: compilation es compilar código; encryption es cifrar; defragmentation es ordenar un disco.",
    "why_wrong": [
      "Opción correcta: \"container orchestration\" = \"orquestación de contenedores\".",
      "Incorrecto: compilation es convertir código en un programa.",
      "Incorrecto: encryption es cifrar datos.",
      "Incorrecto: defragmentation es reordenar un disco."
    ],
    "tip_es": "Coordinación automatizada de contenedores (Kubernetes) = Orchestration.",
    "human_rule": "orchestration = gestionar muchos contenedores de forma automática.",
    "spanglish_trap": "Elegir compilation por \"plataforma\". Kubernetes no compila; coordina contenedores.",
    "ref": null,
    "trigger_anchor": "Kubernetes is the industry-standard container ______ platform ➔ orchestration"
  },
  {
    "id": "bank-v01-10",
    "section": "UE",
    "objective": "UE3",
    "topic": "V01",
    "difficulty": 3,
    "pool": "practice",
    "stem": "High-frequency trading algorithms require ultra-low network ______—measured in microseconds—between the execution engine and the exchange.",
    "options": [
      "bandwidth",
      "latency",
      "elasticity",
      "tenancy"
    ],
    "answer": 1,
    "why_correct": "• Pista: se mide en microsegundos entre el motor de ejecución y la bolsa.\n• Significado: latency = el tiempo que tarda un paquete en llegar.\n• Descartas: bandwidth es cuánto cabe por segundo; elasticity es adaptarse a la carga; tenancy es compartir con otros clientes.",
    "why_wrong": [
      "Incorrecto: bandwidth es cuántos datos caben por segundo, no el retraso.",
      "Opción correcta: \"latency\" = \"latencia\".",
      "Incorrecto: elasticity es adaptarse a la carga.",
      "Incorrecto: tenancy es compartir infraestructura con otros clientes."
    ],
    "tip_es": "Tiempo de retardo (ms / µs) = Latency. Caudal de datos por segundo = Throughput.",
    "human_rule": "latency = tiempo de retardo. bandwidth = cuánto cabe.",
    "spanglish_trap": "Confundir latency con bandwidth. Latencia es qué tan rápido llega; ancho de banda es cuánto cabe.",
    "ref": null,
    "trigger_anchor": "ultra-low network ______ measured in microseconds ➔ latency"
  },
  {
    "id": "bank-v01-11",
    "section": "UE",
    "objective": "UE3",
    "topic": "V01",
    "difficulty": 1,
    "pool": "practice",
    "stem": "By migrating from dedicated VMs to a ______ compute model like AWS Lambda, the team eliminated idle server costs for sporadic background tasks.",
    "options": [
      "monolithic",
      "on-premises",
      "serverless",
      "stateful"
    ],
    "answer": 2,
    "why_correct": "• Pista: se evitan los costos de servidores inactivos con AWS Lambda para tareas esporádicas.\n• Significado: serverless = sin administrar servidores; se paga solo por el tiempo de ejecución.\n• Descartas: monolithic es una sola pieza grande; on-premises es en tus propias instalaciones; stateful es que guarda estado.",
    "why_wrong": [
      "Incorrecto: monolithic es una aplicación en una sola pieza.",
      "Incorrecto: on-premises es en instalaciones propias.",
      "Opción correcta: \"serverless\" = \"sin servidores que administrar\".",
      "Incorrecto: stateful es que guarda el estado entre peticiones."
    ],
    "tip_es": "Ejecución por eventos sin pagar por servidores ociosos (ej. Lambda) = Serverless.",
    "human_rule": "serverless = pagas solo por lo que ejecutas, sin administrar servidores.",
    "spanglish_trap": "Pensar que serverless es \"sin servidores\". Hay servidores, pero no los administras.",
    "ref": null,
    "trigger_anchor": "AWS Lambda… eliminated idle server costs ➔ serverless"
  },
  {
    "id": "bank-v01-12",
    "section": "UE",
    "objective": "UE3",
    "topic": "V01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Infrastructure as Code (IaC) tools like Terraform ensure ______ environments by provisioning identical cloud resources from version-controlled declarative files.",
    "options": [
      "ephemeral",
      "unstructured",
      "manual",
      "reproducible"
    ],
    "answer": 3,
    "why_correct": "• Pista: Terraform crea recursos idénticos desde archivos con control de versiones.\n• Significado: reproducible = se puede repetir igual cuando se quiera.\n• Descartas: ephemeral es temporal; unstructured es sin estructura; manual va contra la idea de código.",
    "why_wrong": [
      "Incorrecto: ephemeral significa \"temporal\".",
      "Incorrecto: unstructured significa \"sin estructura\".",
      "Incorrecto: manual es lo contrario de usar código.",
      "Opción correcta: \"reproducible environments\" = \"entornos que se pueden repetir igual\"."
    ],
    "tip_es": "IaC (Terraform) garantiza entornos idénticos y repetibles = Reproducible environments.",
    "human_rule": "IaC ➔ entornos reproducibles (iguales cada vez).",
    "spanglish_trap": "Elegir ephemeral porque el código crea y borra entornos. La idea clave es repetirlos igual.",
    "ref": null,
    "trigger_anchor": "identical resources from version-controlled files ➔ reproducible"
  },
  {
    "id": "bank-v02-05",
    "section": "UE",
    "objective": "UE4",
    "topic": "V02",
    "difficulty": 1,
    "pool": "practice",
    "stem": "A static type checker catches type mismatch errors at ______ time, long before the application is deployed to production servers.",
    "options": [
      "compile",
      "runtime",
      "execution",
      "latency"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"type mismatch errors ... long before deployed\": se detectan antes de ejecutar.\n• Significado: compile time = durante la compilación, antes de que el programa corra.\n• Descartas: runtime y execution son cuando ya corre; latency es un retraso, no una fase.",
    "why_wrong": [
      "Opción correcta: compile time = \"tiempo de compilación\", antes de ejecutar.",
      "Incorrecto: runtime es cuando el programa ya corre, no antes.",
      "Incorrecto: execution time es lo mismo que runtime: ya corriendo.",
      "Incorrecto: latency es retraso de respuesta, no una fase."
    ],
    "tip_es": "Antes de ejecutar el programa = Compile time. Mientras el programa corre = Runtime.",
    "human_rule": "compile time = antes de ejecutar. runtime = mientras corre.",
    "spanglish_trap": "Traducir \"runtime\" y \"compile time\" como lo mismo. Uno es antes, el otro durante.",
    "ref": null,
    "trigger_anchor": "before deployed ➔ compile time"
  },
  {
    "id": "bank-v02-06",
    "section": "UE",
    "objective": "UE4",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Java and C# source files are first compiled into platform-independent ______, which is then executed by a virtual machine.",
    "options": [
      "source code",
      "bytecode",
      "pseudocode",
      "plain text"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"platform-independent ... executed by a virtual machine\": formato intermedio portable.\n• Significado: bytecode es lo que producen Java y C#, lo ejecuta la máquina virtual en cualquier sistema.\n• Descartas: source code es el original; pseudocode es una descripción informal; plain text no se ejecuta.",
    "why_wrong": [
      "Incorrecto: source code es el texto original, no el resultado compilado.",
      "Opción correcta: bytecode = código intermedio portable.",
      "Incorrecto: pseudocode es una descripción informal, no se ejecuta.",
      "Incorrecto: plain text es texto simple, no ejecutable."
    ],
    "tip_es": "Código intermedio ejecutado por una máquina virtual (JVM) = Bytecode.",
    "human_rule": "Java/C# se compilan a bytecode, no a código máquina.",
    "spanglish_trap": "Creer que bytecode y machine code son lo mismo. El bytecode necesita una VM.",
    "ref": null,
    "trigger_anchor": "platform-independent + VM ➔ bytecode"
  },
  {
    "id": "bank-v02-07",
    "section": "UE",
    "objective": "UE4",
    "topic": "V02",
    "difficulty": 3,
    "pool": "practice",
    "stem": "A Just-In-Time (JIT) compiler improves performance by translating frequently executed hot paths into native ______ code while the program is running.",
    "options": [
      "markup",
      "high-level",
      "machine",
      "interpreted"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"hot paths ... native ______ code\": nativo = el que entiende el procesador.\n• Significado: machine code = instrucciones binarias que el CPU ejecuta directamente.\n• Descartas: markup es como HTML; high-level es lo que escribe el humano; interpreted describe cómo se ejecuta.",
    "why_wrong": [
      "Incorrecto: markup (HTML) describe estructura, no son instrucciones del CPU.",
      "Incorrecto: high-level es el código humano, lo opuesto de nativo.",
      "Opción correcta: machine code = \"código máquina\", lo que entiende el CPU.",
      "Incorrecto: interpreted no es un tipo de código, es una forma de ejecutar."
    ],
    "tip_es": "El procesador físico ejecuta directamente = Native machine code.",
    "human_rule": "native code = machine code. Lo ejecuta el CPU directamente.",
    "spanglish_trap": "Pensar que \"machine\" se refiere a la máquina virtual. Es el hardware real.",
    "ref": null,
    "trigger_anchor": "native ➔ machine code"
  },
  {
    "id": "bank-v02-08",
    "section": "UE",
    "objective": "UE4",
    "topic": "V02",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Because Python is an ______ language, syntax or type errors inside an unreached conditional branch may not surface until that specific line is executed.",
    "options": [
      "assembled",
      "ahead-of-time",
      "immutable",
      "interpreted"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"Python ... errors may not surface until that line is executed\": detecta errores al ejecutar cada línea.\n• Significado: interpreted = el código se traduce y ejecuta línea por línea, por eso los errores aparecen tarde.\n• Descartas: assembled y ahead-of-time se traducen antes; immutable habla de datos que no cambian.",
    "why_wrong": [
      "Incorrecto: assembled significa traducido de assembly, no describe a Python.",
      "Incorrecto: ahead-of-time se traduce antes de ejecutar, lo contrario.",
      "Incorrecto: immutable habla de datos que no cambian, no del lenguaje.",
      "Opción correcta: interpreted = interpretado, errores aparecen al llegar a esa línea."
    ],
    "tip_es": "Lenguaje que se ejecuta línea por línea sin compilar antes un binario nativo = Interpreted.",
    "human_rule": "lenguaje interpretado = errores aparecen al ejecutar esa línea.",
    "spanglish_trap": "Pensar que Python no tiene errores de sintaxis hasta ejecutarlo todo. Depende de la línea.",
    "ref": null,
    "trigger_anchor": "errors only when line runs ➔ interpreted"
  },
  {
    "id": "bank-v02-09",
    "section": "UE",
    "objective": "UE4",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "During the build phase, the ______ resolves external library references and combines compiled object files into a single executable binary.",
    "options": [
      "linker",
      "lexer",
      "transpiler",
      "debugger"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"combines compiled object files into a single executable\": une piezas.\n• Significado: linker = enlazador, une archivos objeto y librerías en un ejecutable.\n• Descartas: lexer parte texto en tokens; transpiler pasa entre lenguajes; debugger busca fallos.",
    "why_wrong": [
      "Opción correcta: linker = \"enlazador\", une los archivos compilados.",
      "Incorrecto: lexer corta el texto en tokens, es la fase inicial.",
      "Incorrecto: transpiler traduce de un lenguaje a otro.",
      "Incorrecto: debugger sirve para encontrar errores."
    ],
    "tip_es": "Une archivos objeto y librerías en un único ejecutable = Linker.",
    "human_rule": "linker = une piezas compiladas en un ejecutable.",
    "spanglish_trap": "Traducir linker como \"linkeador\" de enlaces web. Aquí une archivos objeto.",
    "ref": null,
    "trigger_anchor": "combines object files ➔ linker"
  },
  {
    "id": "bank-v02-10",
    "section": "UE",
    "objective": "UE4",
    "topic": "V02",
    "difficulty": 3,
    "pool": "practice",
    "stem": "TypeScript acts as a ______ that converts modern, type-annotated code into standard JavaScript compatible with older browser engines.",
    "options": [
      "decompiler",
      "transpiler",
      "hypervisor",
      "kernel"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"converts modern TypeScript into standard JavaScript\": de un lenguaje a otro del mismo nivel.\n• Significado: transpiler = traduce código de un lenguaje de alto nivel a otro lenguaje de alto nivel.\n• Descartas: decompiler va del binario al código; hypervisor crea VMs; kernel es el núcleo del sistema.",
    "why_wrong": [
      "Incorrecto: decompiler reconstruye código desde un binario.",
      "Opción correcta: transpiler = convierte entre lenguajes de alto nivel.",
      "Incorrecto: hypervisor administra máquinas virtuales.",
      "Incorrecto: kernel es el núcleo del sistema operativo."
    ],
    "tip_es": "Traduce de un lenguaje de alto nivel a otro (TS -> JS) = Transpiler.",
    "human_rule": "transpiler = de un lenguaje de alto nivel a otro de alto nivel.",
    "spanglish_trap": "Confundir transpiler con compiler. El compiler baja de nivel; el transpiler no.",
    "ref": null,
    "trigger_anchor": "TypeScript ➔ JavaScript ➔ transpiler"
  },
  {
    "id": "bank-v02-11",
    "section": "UE",
    "objective": "UE4",
    "topic": "V02",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Attempting to divide an integer by zero or dereference a null pointer during live user traffic triggers an unhandled ______ exception.",
    "options": [
      "compile-time",
      "lexical",
      "runtime",
      "static"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"during live user traffic ... divide by zero\": el fallo aparece con el programa corriendo.\n• Significado: runtime exception = excepción que ocurre mientras el programa corre.\n• Descartas: compile-time se detecta antes; lexical y static son fases o chequeos previos.",
    "why_wrong": [
      "Incorrecto: compile-time se detecta antes de ejecutar.",
      "Incorrecto: lexical es del análisis inicial del texto.",
      "Opción correcta: runtime = mientras el programa corre.",
      "Incorrecto: static se refiere a chequeos sin ejecutar."
    ],
    "tip_es": "Fallo que salta mientras la aplicación está corriendo en vivo = Runtime exception.",
    "human_rule": "dividir por cero o null pointer = runtime exception.",
    "spanglish_trap": "Pensar que todo error se detecta al compilar. Estos solo aparecen al ejecutar.",
    "ref": null,
    "trigger_anchor": "during live traffic ➔ runtime"
  },
  {
    "id": "bank-v02-12",
    "section": "UE",
    "objective": "UE4",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The first stage of a compiler is lexical analysis, where the source text is broken down into a stream of meaningful ______ such as keywords, identifiers, and operators.",
    "options": [
      "binaries",
      "threads",
      "packets",
      "tokens"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"lexical analysis ... keywords, identifiers, operators\": las piezas del código.\n• Significado: tokens = unidades con significado que produce el análisis léxico.\n• Descartas: binaries son ejecutables; threads son hilos; packets son datos de red.",
    "why_wrong": [
      "Incorrecto: binaries son ejecutables, no piezas del texto.",
      "Incorrecto: threads son hilos de ejecución.",
      "Incorrecto: packets son datos que viajan por la red.",
      "Opción correcta: tokens = piezas del código fuente."
    ],
    "tip_es": "Unidades léxicas mínimas del compilador (palabras clave, operadores) = Tokens.",
    "human_rule": "lexical analysis ➔ tokens.",
    "spanglish_trap": "Confundir con tokens de seguridad. Aquí son piezas de texto del código.",
    "ref": null,
    "trigger_anchor": "keywords + operators ➔ tokens"
  },
  {
    "id": "bank-v03-05",
    "section": "UE",
    "objective": "UE2",
    "topic": "V03",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Until the engineering squad releases the permanent hotfix on Friday, support technicians should provide affected customers with a documented ______.",
    "options": [
      "workaround",
      "postmortem",
      "regression",
      "escalation"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Until the permanent hotfix\": mientras llega el arreglo definitivo.\n• Significado: workaround = solución temporal documentada para el cliente.\n• Descartas: postmortem es análisis; regression es un fallo nuevo; escalation es subir el caso.",
    "why_wrong": [
      "Opción correcta: workaround = solución temporal.",
      "Incorrecto: postmortem es análisis posterior.",
      "Incorrecto: regression es un error nuevo.",
      "Incorrecto: escalation es subir el caso de nivel."
    ],
    "tip_es": "Solución temporal/alternativa para seguir operando = Workaround.",
    "human_rule": "hasta el hotfix ➔ workaround.",
    "spanglish_trap": "Pensar que hotfix y workaround son iguales. Hotfix arregla; workaround alivia.",
    "ref": null,
    "trigger_anchor": "until the fix ➔ workaround"
  },
  {
    "id": "bank-v03-06",
    "section": "UE",
    "objective": "UE2",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If a Sev-1 ticket remains unresolved for more than four hours, it will result in a contractual ______ breach and financial penalties.",
    "options": [
      "MVP",
      "SLA",
      "DNS",
      "SDK"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"contractual ______ breach and financial penalties\": acuerdo con tiempos.\n• Significado: SLA breach = incumplimiento del acuerdo de nivel de servicio.\n• Descartas: MVP es producto mínimo; DNS es sistema de nombres; SDK es kit de desarrollo.",
    "why_wrong": [
      "Incorrecto: MVP = producto mínimo viable.",
      "Opción correcta: SLA breach = incumplir el acuerdo.",
      "Incorrecto: DNS traduce nombres a IPs.",
      "Incorrecto: SDK es kit de desarrollo."
    ],
    "tip_es": "Incumplimiento del acuerdo de nivel de servicio = SLA breach.",
    "human_rule": "SLA breach = incumplir tiempos del contrato.",
    "spanglish_trap": "Confundir breach con \"brecha de seguridad\". Aquí es incumplimiento.",
    "ref": null,
    "trigger_anchor": "contractual + penalties ➔ SLA"
  },
  {
    "id": "bank-v03-07",
    "section": "UE",
    "objective": "UE2",
    "topic": "V03",
    "difficulty": 3,
    "pool": "practice",
    "stem": "When handling an angry enterprise client, active listening and empathetic phrasing are essential ______ techniques to calm the conversation.",
    "options": [
      "obfuscation",
      "orchestration",
      "de-escalation",
      "virtualization"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"active listening and empathetic phrasing ... calm the conversation\": técnicas para calmar.\n• Significado: de-escalation techniques = técnicas para bajar la tensión.\n• Descartas: obfuscation oculta; orchestration coordina; virtualization crea VMs.",
    "why_wrong": [
      "Incorrecto: obfuscation = ofuscar, ocultar.",
      "Incorrecto: orchestration = coordinar servicios.",
      "Opción correcta: de-escalation = bajar la tensión.",
      "Incorrecto: virtualization crea máquinas virtuales."
    ],
    "tip_es": "Reducir la tensión y calmar a un cliente furioso = De-escalation.",
    "human_rule": "calm = de-escalation.",
    "spanglish_trap": "Confundir con \"escalation\".",
    "ref": null,
    "trigger_anchor": "calm the conversation ➔ de-escalation"
  },
  {
    "id": "bank-v03-08",
    "section": "UE",
    "objective": "UE2",
    "topic": "V03",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The product manager explained that the 10-minute idle logout is an intentional security ______, not a software defect.",
    "options": [
      "regression",
      "bottleneck",
      "glitch",
      "constraint"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"intentional security ______, not a software defect\": una limitación a propósito.\n• Significado: constraint = restricción deliberada del sistema.\n• Descartas: regression y glitch son fallos; bottleneck es cuello de botella.",
    "why_wrong": [
      "Incorrecto: regression es un fallo nuevo.",
      "Incorrecto: bottleneck frena rendimiento.",
      "Incorrecto: glitch es un fallo menor.",
      "Opción correcta: constraint = restricción intencional."
    ],
    "tip_es": "Limitación intencional por diseño o seguridad = Design/security constraint.",
    "human_rule": "intencional = constraint. Fallo = bug/glitch.",
    "spanglish_trap": "Elegir glitch por pensar que todo lo inesperado es un fallo.",
    "ref": null,
    "trigger_anchor": "intentional, not defect ➔ constraint"
  },
  {
    "id": "bank-v03-09",
    "section": "UE",
    "objective": "UE2",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Non-critical UI enhancements requested by users are added to the product ______ to be prioritized in future sprints.",
    "options": [
      "backlog",
      "runbook",
      "deadlock",
      "payload"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Non-critical UI enhancements ... future sprints\": lista de pendientes.\n• Significado: backlog = lista priorizada de pendientes.\n• Descartas: runbook es guía operativa; deadlock bloqueo; payload es carga de datos.",
    "why_wrong": [
      "Opción correcta: backlog = lista de pendientes.",
      "Incorrecto: runbook es guía de operación.",
      "Incorrecto: deadlock es bloqueo entre procesos.",
      "Incorrecto: payload es carga útil de datos."
    ],
    "tip_es": "Lista priorizada de tareas y mejoras futuras del producto = Backlog.",
    "human_rule": "futuro sprint ➔ backlog.",
    "spanglish_trap": "Traducir backlog como \"atrás del log\".",
    "ref": null,
    "trigger_anchor": "future sprints ➔ backlog"
  },
  {
    "id": "bank-v03-10",
    "section": "UE",
    "objective": "UE2",
    "topic": "V03",
    "difficulty": 3,
    "pool": "practice",
    "stem": "When a Tier-1 agent lacks the administrative permissions to resolve a complex database lock, they must ______ the ticket to Tier-2 engineering.",
    "options": [
      "deprecate",
      "escalate",
      "throttle",
      "compile"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"lacks permissions ... to Tier-2\": pasar el ticket a un nivel superior.\n• Significado: escalate = subir el ticket a otro nivel de soporte.\n• Descartas: deprecate es declarar obsoleto; throttle limita velocidad; compile traduce código.",
    "why_wrong": [
      "Incorrecto: deprecate = marcar como obsoleto.",
      "Opción correcta: escalate = escalar al siguiente nivel.",
      "Incorrecto: throttle = limitar velocidad.",
      "Incorrecto: compile = traducir código."
    ],
    "tip_es": "Elevar un ticket a un nivel superior (Tier 2 / Tier 3) = Escalate.",
    "human_rule": "sin permisos ➔ escalate a Tier-2.",
    "spanglish_trap": "Pensar que escalate siempre significa \"empeorar\".",
    "ref": null,
    "trigger_anchor": "lacks permissions ➔ escalate"
  },
  {
    "id": "bank-v03-11",
    "section": "UE",
    "objective": "UE2",
    "topic": "V03",
    "difficulty": 1,
    "pool": "practice",
    "stem": "After resolving the outage, the SRE team published a blameless ______ detailing the root cause, timeline, and preventative action items.",
    "options": [
      "workaround",
      "wireframe",
      "postmortem",
      "handshake"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"root cause, timeline, preventative action items\": informe del incidente.\n• Significado: postmortem = informe de análisis posterior al incidente.\n• Descartas: workaround es solución temporal; wireframe es boceto; handshake es saludo de conexión.",
    "why_wrong": [
      "Incorrecto: workaround es temporal.",
      "Incorrecto: wireframe es boceto de interfaz.",
      "Opción correcta: postmortem = informe con causa y acciones.",
      "Incorrecto: handshake es negociación de conexión."
    ],
    "tip_es": "Informe de análisis tras resolver una caída = Postmortem / RCA.",
    "human_rule": "causa raíz + acciones ➔ postmortem.",
    "spanglish_trap": "Pensar que postmortem es solo para casos graves de muerte.",
    "ref": null,
    "trigger_anchor": "root cause + timeline ➔ postmortem"
  },
  {
    "id": "bank-v03-12",
    "section": "UE",
    "objective": "UE2",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The new release inadvertently broke the PDF export button that worked fine in v2.1, introducing a severe ______ bug.",
    "options": [
      "feature",
      "latency",
      "phishing",
      "regression"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"broke ... worked fine in v2.1\": algo que funcionaba y dejó de hacerlo.\n• Significado: regression bug = fallo que reaparece o aparece tras un cambio.\n• Descartas: feature es función; latency es retraso; phishing es fraude.",
    "why_wrong": [
      "Incorrecto: feature es función, no fallo.",
      "Incorrecto: latency es retraso.",
      "Incorrecto: phishing es fraude.",
      "Opción correcta: regression = algo que antes funcionaba y ahora falla."
    ],
    "tip_es": "Romper algo que ya funcionaba en la versión anterior = Regression.",
    "human_rule": "worked before + broke now ➔ regression.",
    "spanglish_trap": "Traducir regression como \"regreso\". Es un retroceso.",
    "ref": null,
    "trigger_anchor": "worked in v2.1, now broken ➔ regression"
  },
  {
    "id": "bank-v04-05",
    "section": "UE",
    "objective": "UE3",
    "topic": "V04",
    "difficulty": 1,
    "pool": "practice",
    "stem": "The fraudster called the helpdesk pretending to be the regional VP of Finance—a classic example of executive ______.",
    "options": [
      "impersonation",
      "virtualization",
      "encryption",
      "segmentation"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"pretending to be the regional VP\": suplantar a un ejecutivo.\n• Significado: impersonation = suplantación de identidad.\n• Descartas: virtualization, encryption y segmentation son técnicas de TI.",
    "why_wrong": [
      "Opción correcta: impersonation = suplantación.",
      "Incorrecto: virtualization crea entornos virtuales.",
      "Incorrecto: encryption cifra datos.",
      "Incorrecto: segmentation divide redes."
    ],
    "tip_es": "Hacerse pasar por otra persona o directivo = Impersonation.",
    "human_rule": "impersonation = fingir ser otro.",
    "spanglish_trap": "Traducir impersonation como \"impersonal\".",
    "ref": null,
    "trigger_anchor": "pretending ➔ impersonation"
  },
  {
    "id": "bank-v04-06",
    "section": "UE",
    "objective": "UE3",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Fraudulent phone calls designed to trick employees into revealing sensitive credentials or MFA codes over voice channels are known as ______.",
    "options": [
      "smishing",
      "vishing",
      "pharming",
      "ddosing"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"phone calls ... voice channels\": ataque por voz.\n• Significado: vishing = phishing por teléfono.\n• Descartas: smishing es SMS; pharming redirige sitios; ddosing satura servicios.",
    "why_wrong": [
      "Incorrecto: smishing es por SMS.",
      "Opción correcta: vishing = phishing por voz.",
      "Incorrecto: pharming redirige a webs falsas.",
      "Incorrecto: ddosing satura servicios."
    ],
    "tip_es": "Fraude por llamada de VOZ = Vishing. Por SMS = Smishing. Por Email = Phishing.",
    "human_rule": "voice = vishing.",
    "spanglish_trap": "Mezclar vishing con smishing.",
    "ref": null,
    "trigger_anchor": "phone call ➔ vishing"
  },
  {
    "id": "bank-v04-07",
    "section": "UE",
    "objective": "UE3",
    "topic": "V04",
    "difficulty": 3,
    "pool": "practice",
    "stem": "By inventing an elaborate story about being stuck at customs without his corporate laptop, the attacker used ______ to manipulate the support agent.",
    "options": [
      "fuzzing",
      "refactoring",
      "pretexting",
      "peering"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"inventing an elaborate story ... stuck at customs\": historia falsa.\n• Significado: pretexting = engañar con una historia inventada.\n• Descartas: fuzzing prueba entradas; refactoring reorganiza código; peering conecta redes.",
    "why_wrong": [
      "Incorrecto: fuzzing prueba entradas aleatorias.",
      "Incorrecto: refactoring reorganiza código.",
      "Opción correcta: pretexting = historia inventada.",
      "Incorrecto: peering conecta redes."
    ],
    "tip_es": "Inventar una historia o situación falsa para manipular = Pretexting.",
    "human_rule": "story falsa = pretexting.",
    "spanglish_trap": "Pensar que es un término de programación.",
    "ref": null,
    "trigger_anchor": "invented story ➔ pretexting"
  },
  {
    "id": "bank-v04-08",
    "section": "UE",
    "objective": "UE3",
    "topic": "V04",
    "difficulty": 1,
    "pool": "practice",
    "stem": "An urgent demand to bypass standard security verification due to an alleged executive emergency is a major social engineering ______.",
    "options": [
      "silver bullet",
      "green light",
      "white hat",
      "red flag"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"urgent demand to bypass verification\": señal de alarma.\n• Significado: red flag = señal de advertencia.\n• Descartas: silver bullet, green light y white hat son otros conceptos.",
    "why_wrong": [
      "Incorrecto: silver bullet = solución mágica.",
      "Incorrecto: green light = aprobación.",
      "Incorrecto: white hat = hacker ético.",
      "Opción correcta: red flag = señal de alerta."
    ],
    "tip_es": "Señal de advertencia de peligro o fraude = Red flag.",
    "human_rule": "urgencia + saltar controles = red flag.",
    "spanglish_trap": "Confundir red flag con red team.",
    "ref": null,
    "trigger_anchor": "bypass verification ➔ red flag"
  },
  {
    "id": "bank-v04-09",
    "section": "UE",
    "objective": "UE3",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The attacker set up a counterfeit SSO login portal with a look-alike domain name to perform automated credential ______.",
    "options": [
      "harvesting",
      "throttling",
      "sharding",
      "dampening"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"look-alike domain ... credential ______\": recolectar credenciales.\n• Significado: harvesting = recolectar credenciales de forma masiva.\n• Descartas: throttling limita velocidad; sharding divide datos; dampening amortigua.",
    "why_wrong": [
      "Opción correcta: harvesting = recolectar.",
      "Incorrecto: throttling = limitar.",
      "Incorrecto: sharding = dividir una base de datos.",
      "Incorrecto: dampening = amortiguar."
    ],
    "tip_es": "Captura masiva de contraseñas en un portal falso = Credential harvesting.",
    "human_rule": "credential harvesting = recolectar credenciales.",
    "spanglish_trap": "Traducir harvest como \"cosecha agrícola\".",
    "ref": null,
    "trigger_anchor": "fake portal ➔ harvesting"
  },
  {
    "id": "bank-v04-10",
    "section": "UE",
    "objective": "UE3",
    "topic": "V04",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Before resetting MFA for any remote caller, helpdesk policy mandates ______ verification via a video call or manager callback.",
    "options": [
      "in-memory",
      "out-of-band",
      "end-to-end",
      "peer-to-peer"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"video call or manager callback\": otro canal de verificación.\n• Significado: out-of-band = por un canal distinto al de la solicitud.\n• Descartas: in-memory, end-to-end y peer-to-peer son otros términos.",
    "why_wrong": [
      "Incorrecto: in-memory = en memoria.",
      "Opción correcta: out-of-band = por otro canal.",
      "Incorrecto: end-to-end = de extremo a extremo.",
      "Incorrecto: peer-to-peer = entre iguales."
    ],
    "tip_es": "Verificar por un canal separado e independiente = Out-of-band verification.",
    "human_rule": "verificar por otro canal = out-of-band.",
    "spanglish_trap": "Traducir band como \"banda musical\".",
    "ref": null,
    "trigger_anchor": "video / callback ➔ out-of-band"
  },
  {
    "id": "bank-v04-11",
    "section": "UE",
    "objective": "UE3",
    "topic": "V04",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Targeted phishing attacks aimed specifically at C-level executives and senior systems administrators with high privileges are referred to as ______.",
    "options": [
      "spoofing",
      "sniffing",
      "whaling",
      "tunneling"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"C-level executives\": objetivo de alto nivel.\n• Significado: whaling = phishing dirigido a ejecutivos.\n• Descartas: spoofing falsifica; sniffing captura; tunneling encapsula tráfico.",
    "why_wrong": [
      "Incorrecto: spoofing = falsificar origen.",
      "Incorrecto: sniffing = capturar tráfico.",
      "Opción correcta: whaling = ataque a \"peces gordos\".",
      "Incorrecto: tunneling = encapsular tráfico."
    ],
    "tip_es": "Phishing dirigido específicamente a altos ejecutivos (C-level) = Whaling.",
    "human_rule": "ejecutivos = whaling.",
    "spanglish_trap": "Traducir whaling como \"pesca de ballenas\".",
    "ref": null,
    "trigger_anchor": "C-level ➔ whaling"
  },
  {
    "id": "bank-v04-12",
    "section": "UE",
    "objective": "UE3",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Attackers often exploit caller ID ______ to make a fraudulent external phone call appear as though it is coming from an internal office extension.",
    "options": [
      "hashing",
      "patching",
      "containerizing",
      "spoofing"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"caller ID ... appear as internal extension\": falsificar.\n• Significado: spoofing = falsificar la identidad de origen.\n• Descartas: hashing, patching y containerizing no falsifican nada.",
    "why_wrong": [
      "Incorrecto: hashing convierte datos en huella.",
      "Incorrecto: patching = parchear.",
      "Incorrecto: containerizing = empaquetar en contenedores.",
      "Opción correcta: spoofing = falsificar."
    ],
    "tip_es": "Falsificar el número de teléfono o dirección IP/MAC de origen = Spoofing.",
    "human_rule": "caller ID falso = spoofing.",
    "spanglish_trap": "Confundir spoofing con sniffing.",
    "ref": null,
    "trigger_anchor": "fake caller ID ➔ spoofing"
  },
  {
    "id": "bank-v05-05",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Under the Principle of ______, a microservice should only be granted access to the specific database tables required for its immediate function.",
    "options": [
      "Least Privilege",
      "Zero Latency",
      "High Availability",
      "Eventual Consistency"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"only ... database tables required\": acceso mínimo.\n• Significado: Least Privilege = solo el acceso necesario.\n• Descartas: Zero Latency, High Availability y Eventual Consistency son otros conceptos.",
    "why_wrong": [
      "Opción correcta: Least Privilege = mínimo acceso necesario.",
      "Incorrecto: Zero Latency habla de retraso.",
      "Incorrecto: High Availability habla de disponibilidad.",
      "Incorrecto: Eventual Consistency habla de sincronía de datos."
    ],
    "tip_es": "Otorgar solo los permisos mínimos necesarios = Principle of Least Privilege.",
    "human_rule": "solo lo que necesita = least privilege.",
    "spanglish_trap": "Elegir términos de arquitectura por parecer técnicos.",
    "ref": null,
    "trigger_anchor": "only needed tables ➔ least privilege"
  },
  {
    "id": "bank-v05-06",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "By deploying ______ across the internal network, security engineers prevented the ransomware from spreading laterally from the compromised laptop to the core database.",
    "options": [
      "load balancing",
      "micro-segmentation",
      "port forwarding",
      "split tunneling"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"prevented ransomware from spreading laterally\": dividir la red.\n• Significado: micro-segmentation = dividir la red en zonas pequeñas aisladas.\n• Descartas: load balancing reparte carga; port forwarding redirige puertos; split tunneling divide el tráfico VPN.",
    "why_wrong": [
      "Incorrecto: load balancing reparte carga entre servidores.",
      "Opción correcta: micro-segmentation = zonas aisladas que frenan lo lateral.",
      "Incorrecto: port forwarding redirige puertos.",
      "Incorrecto: split tunneling separa tráfico VPN."
    ],
    "tip_es": "Aislar cargas de trabajo para frenar el movimiento lateral = Micro-segmentation.",
    "human_rule": "frenar propagación = micro-segmentación.",
    "spanglish_trap": "Pensar que balancear carga protege.",
    "ref": null,
    "trigger_anchor": "spread laterally ➔ micro-segmentation"
  },
  {
    "id": "bank-v05-07",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 3,
    "pool": "practice",
    "stem": "To satisfy regulatory compliance, all administrative actions on production servers must be recorded in an immutable ______ trail.",
    "options": [
      "bandwidth",
      "cache",
      "audit",
      "runtime"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"immutable ______ trail\": registro de acciones administrativas.\n• Significado: audit trail = rastro de auditoría.\n• Descartas: bandwidth, cache y runtime no son registros.",
    "why_wrong": [
      "Incorrecto: bandwidth es ancho de banda.",
      "Incorrecto: cache es memoria temporal.",
      "Opción correcta: audit trail = rastro de auditoría.",
      "Incorrecto: runtime es el momento de ejecución."
    ],
    "tip_es": "Registro trazable de acciones para cumplimiento normativo = Audit trail.",
    "human_rule": "audit trail = registro de quién hizo qué.",
    "spanglish_trap": "Dejar \"audit\" como \"auditoría de personas\" y no de registros.",
    "ref": null,
    "trigger_anchor": "recorded actions ➔ audit trail"
  },
  {
    "id": "bank-v05-08",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 1,
    "pool": "practice",
    "stem": "A ______ Network Architecture eliminates implicit trust for devices inside the corporate LAN, requiring continuous verification for every access request.",
    "options": [
      "Perimeter-Only",
      "Flat-Subnet",
      "Single-Factor",
      "Zero-Trust"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"eliminates implicit trust for devices inside the LAN\": no confiar.\n• Significado: Zero-Trust Network Architecture = verifica cada acceso, aun dentro de la red.\n• Descartas: Perimeter-Only, Flat-Subnet y Single-Factor confían o verifican poco.",
    "why_wrong": [
      "Incorrecto: Perimeter-Only confía en el interior.",
      "Incorrecto: Flat-Subnet es una red sin segmentar.",
      "Incorrecto: Single-Factor usa solo un factor.",
      "Opción correcta: Zero-Trust verifica cada acceso."
    ],
    "tip_es": "Nunca confiar implícitamente ni siquiera en la LAN = Zero-Trust.",
    "human_rule": "sin confianza implícita = Zero-Trust.",
    "spanglish_trap": "Confundir con red cerrada.",
    "ref": null,
    "trigger_anchor": "no implicit trust ➔ Zero-Trust"
  },
  {
    "id": "bank-v05-09",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "While ______ verifies a user's identity through passwords and biometrics, authorization determines which specific files that user is permitted to read.",
    "options": [
      "authentication",
      "encryption",
      "obfuscation",
      "accounting"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"verifies identity ... authorization determines files\": primero quién eres.\n• Significado: authentication = comprobar la identidad; authorization = qué puedes hacer.\n• Descartas: encryption cifra; obfuscation oculta; accounting registra uso.",
    "why_wrong": [
      "Opción correcta: authentication = verificar identidad.",
      "Incorrecto: encryption cifra datos.",
      "Incorrecto: obfuscation oculta información.",
      "Incorrecto: accounting registra el uso."
    ],
    "tip_es": "Verificar identidad (quién eres) = Authentication. Verificar permisos (qué puedes tocar) = Authorization.",
    "human_rule": "authentication = quién eres. authorization = qué puedes hacer.",
    "spanglish_trap": "Mezclar authentication y authorization.",
    "ref": null,
    "trigger_anchor": "identity via passwords ➔ authentication"
  },
  {
    "id": "bank-v05-10",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 3,
    "pool": "practice",
    "stem": "Before granting VPN access, the endpoint agent performs a device ______ assessment to confirm that disk encryption and antivirus definitions are active.",
    "options": [
      "velocity",
      "posture",
      "topology",
      "throughput"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"confirm disk encryption and antivirus are active\": estado del equipo.\n• Significado: device posture assessment = evaluar el estado de seguridad del equipo.\n• Descartas: velocity, topology y throughput miden velocidad o estructura.",
    "why_wrong": [
      "Incorrecto: velocity = velocidad.",
      "Opción correcta: posture = estado de seguridad del equipo.",
      "Incorrecto: topology = estructura de la red.",
      "Incorrecto: throughput = rendimiento."
    ],
    "tip_es": "Chequeo de salud y seguridad del equipo (antivirus, cifrado) = Posture assessment.",
    "human_rule": "posture = estado de seguridad.",
    "spanglish_trap": "Traducir posture como \"postura corporal\".",
    "ref": null,
    "trigger_anchor": "check encryption + antivirus ➔ posture"
  },
  {
    "id": "bank-v05-11",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Encrypting sensitive customer records both in transit over TLS and ______ on the storage arrays is mandatory under PCI-DSS compliance.",
    "options": [
      "on premise",
      "in flight",
      "at rest",
      "by default"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"in transit ... and ______ on storage\": datos guardados.\n• Significado: at rest = datos almacenados, sin moverse.\n• Descartas: on premise es ubicación; in flight es en tránsito; by default es configuración.",
    "why_wrong": [
      "Incorrecto: on premise = en servidores propios.",
      "Incorrecto: in flight = en tránsito, ya se dijo.",
      "Opción correcta: at rest = en reposo, almacenados.",
      "Incorrecto: by default = por defecto."
    ],
    "tip_es": "Datos viajando por red = In transit. Datos guardados en disco = At rest.",
    "human_rule": "in transit + at rest = dos estados de los datos.",
    "spanglish_trap": "Traducir rest como \"descanso\".",
    "ref": null,
    "trigger_anchor": "on storage arrays ➔ at rest"
  },
  {
    "id": "bank-v05-12",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Once an attacker compromises an unpatched web server, they typically attempt ______ movement to pivot toward internal domain controllers.",
    "options": [
      "vertical",
      "upstream",
      "sequential",
      "lateral"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"pivot toward internal domain controllers\": moverse hacia los lados.\n• Significado: lateral movement = moverse de un sistema a otro en la red.\n• Descartas: vertical, upstream y sequential no son el término.",
    "why_wrong": [
      "Incorrecto: vertical sería subir de privilegios.",
      "Incorrecto: upstream habla de dirección de datos.",
      "Incorrecto: sequential habla de orden.",
      "Opción correcta: lateral movement = moverse entre sistemas."
    ],
    "tip_es": "Desplazarse de un servidor comprometido a otros dentro de la red = Lateral movement.",
    "human_rule": "pivotar entre equipos = lateral movement.",
    "spanglish_trap": "Confundir con escalada de privilegios.",
    "ref": null,
    "trigger_anchor": "pivot ➔ lateral"
  },
  {
    "id": "prac-l-01",
    "section": "L",
    "objective": "L1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the network troubleshooting call (aud-01), which upstream interface experienced the physical fiber cut that triggered the BGP route flapping?",
    "options": [
      "Upstream interface GigE-zero-two.",
      "Internal VLAN interface ten-forty.",
      "Loopback interface zero-zero.",
      "Secondary Frankfurt tunnel three."
    ],
    "answer": 0,
    "why_correct": "• Pista: Pregunta qué interfaz upstream sufrió el corte de fibra.\n• Significado: Upstream interface GigE-zero-two.\n• Descartas: VLAN interna, loopback y túnel secundario no tuvieron el corte.",
    "why_wrong": [
      "Opción correcta: Upstream GigE-zero-two.",
      "Incorrecto: La VLAN interna no es upstream físico.",
      "Incorrecto: Loopback es virtual.",
      "Incorrecto: El túnel de Frankfurt es secundario."
    ],
    "tip_es": "Presta atención al identificador exacto de la interfaz mencionado en la primera intervención de Marcus.",
    "human_rule": "corte físico = interfaz upstream.",
    "trigger_anchor": "physical cut ➔ upstream interface",
    "spanglish_trap": "Elegir interfaces lógicas.",
    "ref": "aud-01"
  },
  {
    "id": "prac-l-02",
    "section": "L",
    "objective": "L4",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the conversation in aud-01, how much additional latency is introduced when Frankfurt traffic is detoured through the London gateway?",
    "options": [
      "Over four hundred milliseconds.",
      "Roughly forty milliseconds.",
      "Less than four milliseconds.",
      "Exactly fourteen seconds."
    ],
    "answer": 1,
    "why_correct": "• Pista: Latencia extra al desviar por Londres.\n• Significado: Aproximadamente cuarenta milisegundos.\n• Descartas: Más de cuatrocientos, menos de cuatro o catorce segundos no coinciden.",
    "why_wrong": [
      "Incorrecto: Cuatrocientos ms es demasiado.",
      "Opción correcta: Unos cuarenta ms.",
      "Incorrecto: Menos de cuatro ms es muy poco.",
      "Incorrecto: Catorce segundos es absurdo."
    ],
    "tip_es": "En preguntas de Listening L5 (métricas), distingue números similares como 4, 14, 40 y 400 ms.",
    "human_rule": "Escucha la cifra: forty ≠ fourteen.",
    "trigger_anchor": "detour ➔ ~40 ms",
    "spanglish_trap": "Confundir forty con fourteen.",
    "ref": "aud-01"
  },
  {
    "id": "prac-l-03",
    "section": "L",
    "objective": "L2",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the security incident debrief (aud-02), which executive role did the social engineering caller claim to hold?",
    "options": [
      "Director of Human Resources.",
      "Chief Financial Officer.",
      "Vice President of Cloud Infrastructure.",
      "Lead Penetration Tester."
    ],
    "answer": 2,
    "why_correct": "• Pista: Pregunta por el rol ejecutivo que dijo tener el llamador.\n• Significado: Se hizo pasar por Vicepresidente de Infraestructura en la Nube.\n• Descartas: RR.HH., CFO y pentester no se dicen.",
    "why_wrong": [
      "Incorrecto: No dijo RR.HH.",
      "Incorrecto: No dijo CFO.",
      "Opción correcta: Dijo ser VP de Infraestructura en la Nube.",
      "Incorrecto: No dijo pentester."
    ],
    "tip_es": "Identifica el cargo exacto utilizado para la suplantación de identidad (executive impersonation).",
    "human_rule": "cuando el audio da un cargo, ese es el dato.",
    "trigger_anchor": "executive role ➔ VP Cloud",
    "spanglish_trap": "Confundir con otros audios.",
    "ref": "aud-02"
  },
  {
    "id": "prac-l-04",
    "section": "L",
    "objective": "L3",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Why does Agent Thorne commend David at the end of the security debrief in aud-02?",
    "options": [
      "Because David traced the attacker's physical IP address at the airport.",
      "Because David manually reset the executive's MFA token within two minutes.",
      "Because David updated the firewall firmware before the call ended.",
      "Because David strictly followed verification protocol despite aggressive executive pressure."
    ],
    "answer": 3,
    "why_correct": "• Pista: Thorne elogia a David por seguir el protocolo bajo presión.\n• Significado: Siguió el protocolo de verificación aunque el ejecutivo presionó.\n• Descartas: No rastreó IP, no reseteó MFA ni actualizó firmware.",
    "why_wrong": [
      "Incorrecto: No rastreó la IP.",
      "Incorrecto: No reseteó el MFA.",
      "Incorrecto: No actualizó firmware.",
      "Opción correcta: Siguió el protocolo bajo presión."
    ],
    "tip_es": "En ingeniería social, el éxito del analista consiste en mantener el protocolo de verificación sin importar la urgencia fingida.",
    "human_rule": "seguir protocolo = lo correcto.",
    "trigger_anchor": "commend ➔ followed protocol",
    "spanglish_trap": "Pensar que se felicita por rapidez.",
    "ref": "aud-02"
  },
  {
    "id": "prac-l-05",
    "section": "L",
    "objective": "L1",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the sprint architecture review (aud-03), what is the primary advantage of compiling the analytics worker into a native binary?",
    "options": [
      "Eliminating virtual machine warm-up overhead and reducing memory consumption.",
      "Allowing non-technical users to edit the source code in production.",
      "Removing the need for automated unit testing in the CI/CD pipeline.",
      "Enabling the database to run without network interfaces."
    ],
    "answer": 0,
    "why_correct": "• Pista: El audio habla de compilar el worker a binario nativo: sin VM, menos arranque y memoria.\n• Significado: La ventaja principal es quitar el \"warm-up\" de la VM y gastar menos memoria.\n• Descartas: Editar código en producción, quitar pruebas o prescindir de la red no tienen relación con compilar.",
    "why_wrong": [
      "Opción correcta: Elimina el calentamiento de la máquina virtual y reduce memoria.",
      "Incorrecto: Compilar no permite editar código en producción.",
      "Incorrecto: Las pruebas automáticas siguen siendo necesarias.",
      "Incorrecto: Compilar no afecta las interfaces de red de la base de datos."
    ],
    "tip_es": "Relaciona compilación nativa (V02) con menor consumo de RAM y arranque instantáneo.",
    "human_rule": "binario nativo = sin VM, arranque rápido, menos memoria.",
    "trigger_anchor": "native binary ➔ no VM overhead",
    "spanglish_trap": "Pensar que compilar cambia el proceso de pruebas. Solo cambia cómo se ejecuta.",
    "ref": "aud-03"
  },
  {
    "id": "prac-l-06",
    "section": "L",
    "objective": "L3",
    "topic": "V02",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What concern is raised in aud-03 regarding migrating the entire backend to a strictly compiled systems language right away?",
    "options": [
      "Compiled binaries cannot communicate over standard HTTPS ports.",
      "Longer compilation times and a steeper learning curve could slow down feature delivery.",
      "Open-source compilers are prohibited by data privacy regulations.",
      "Interpreted languages always consume less CPU during heavy calculations."
    ],
    "answer": 1,
    "why_correct": "• Pista: El audio dice que migrar de golpe a un lenguaje compilado tiene costos de tiempo y aprendizaje.\n• Significado: La preocupación es que la compilación es más lenta y la curva de aprendizaje es más alta, así se retrasan las entregas.\n• Descartas: Los binarios sí usan HTTPS; no hay prohibición legal; interpretados no siempre gastan menos CPU.",
    "why_wrong": [
      "Incorrecto: Los binarios compilados sí pueden usar HTTPS.",
      "Opción correcta: Compilación más lenta y curva de aprendizaje, entregas más lentas.",
      "Incorrecto: No existe esa prohibición de privacidad.",
      "Incorrecto: Los interpretados suelen gastar más CPU, no menos."
    ],
    "tip_es": "En discusiones de ingeniería B2, identifica siempre el \"trade-off\" (velocidad de ejecución vs. velocidad de desarrollo).",
    "human_rule": "compilado = más rendimiento, pero más tiempo de build y aprendizaje.",
    "trigger_anchor": "steeper learning curve ➔ slows delivery",
    "spanglish_trap": "Traducir \"steep\" como \"caro\". Aquí \"steeper curve\" es \"curva más empinada\".",
    "ref": "aud-03"
  },
  {
    "id": "prac-l-07",
    "section": "L",
    "objective": "L2",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the postmortem discussion in aud-04, why did the secondary node fail to take over cleanly during the database outage?",
    "options": [
      "The secondary node was located in the same rack and lost power simultaneously.",
      "The network administrator had disabled all BGP peering sessions the previous week.",
      "A stale lock file had remained on the shared volume before the failover script initiated.",
      "The backup snapshots were encrypted with a deprecated RSA-512 key."
    ],
    "answer": 2,
    "why_correct": "• Pista: Por qué el nodo secundario no tomó el control limpiamente.\n• Significado: Quedó un archivo de bloqueo viejo (stale lock) en el volumen compartido.\n• Descartas: No fue el mismo rack, BGP ni snapshots cifrados.",
    "why_wrong": [
      "Incorrecto: \"The secondary node was located in the same rack and lost power…\" no es lo que dice el audio.",
      "Incorrecto: \"The network administrator had disabled all BGP peering sessions the…\" no es lo que dice el audio.",
      "Opción correcta: A stale lock file had remained on the shared volume before the failover script initiated.",
      "Incorrecto: \"The backup snapshots were encrypted with a deprecated RSA-512 key.\" no es lo que dice el audio."
    ],
    "tip_es": "Fíjate en el uso del Past Perfect para señalar el estado previo que bloqueó el failover.",
    "human_rule": "stale lock = bloqueo viejo que impide.",
    "trigger_anchor": "secondary failed ➔ stale lock",
    "spanglish_trap": "Culpar a la infraestructura física.",
    "ref": "aud-04"
  },
  {
    "id": "prac-l-08",
    "section": "L",
    "objective": "L5",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In aud-04, when does the engineering lead expect the automated lock-cleanup patch to be fully deployed across all staging clusters?",
    "options": [
      "Within thirty seconds of the postmortem call.",
      "Not until the third quarter of next year.",
      "Only after the legacy hardware is physically replaced.",
      "Before the end-of-week maintenance freeze begins."
    ],
    "answer": 3,
    "why_correct": "• Pista: Cuándo se despliega el parche de limpieza de bloqueos.\n• Significado: Antes de que empiece el congelamiento de mantenimiento del fin de semana.\n• Descartas: No en treinta segundos ni el año próximo ni tras reemplazar hardware.",
    "why_wrong": [
      "Incorrecto: \"Within thirty seconds of the postmortem call.\" no es lo que dice el audio.",
      "Incorrecto: \"Not until the third quarter of next year.\" no es lo que dice el audio.",
      "Incorrecto: \"Only after the legacy hardware is physically replaced.\" no es lo que dice el audio.",
      "Opción correcta: Before the end-of-week maintenance freeze begins."
    ],
    "tip_es": "Escucha las referencias temporales con \"by the time / before\" acompañadas de Future Perfect.",
    "human_rule": "before + deadline = antes del freeze.",
    "trigger_anchor": "patch date ➔ before freeze",
    "spanglish_trap": "Elegir plazos extremos.",
    "ref": "aud-04"
  },
  {
    "id": "prac-l-09",
    "section": "L",
    "objective": "L1",
    "topic": "V01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the cloud migration briefing (aud-05), what did the load testing metrics reveal despite the unexpected traffic surge?",
    "options": [
      "The auto-scaling group maintained sub-100ms response times without dropping requests.",
      "The primary load balancer crashed and required a manual cold reboot.",
      "Egress bandwidth charges dropped to zero during the peak hour.",
      "The monolithic database outperformed the distributed cache cluster."
    ],
    "answer": 0,
    "why_correct": "• Pista: el audio dice que, aunque el tráfico subió de golpe, el grupo de autoescalado respondió bien.\n• Significado: \"sub-100ms response times\" = respuestas en menos de 100 milisegundos.\n• Descartas: las otras opciones dicen cosas que el audio no menciona.",
    "why_wrong": [
      "Opción correcta: el grupo de autoescalado mantuvo tiempos bajos sin perder peticiones.",
      "Incorrecto: el audio no dice que el balanceador cayera.",
      "Incorrecto: el audio no dice que los cargos de egress bajaran a cero.",
      "Incorrecto: el audio no compara así la base de datos con la caché."
    ],
    "tip_es": "Conector clave en el audio: \"Even though [pico de tráfico], [el sistema mantuvo el SLA]\".",
    "human_rule": "Aunque (even though) subió el tráfico, el autoescalado mantuvo la respuesta estable.",
    "trigger_anchor": "despite the unexpected traffic surge ➔ auto-scaling kept sub-100ms times",
    "spanglish_trap": "Elegir la opción más dramática. En el audio, lo que pasó fue que todo siguió estable.",
    "ref": "aud-05"
  },
  {
    "id": "prac-l-10",
    "section": "L",
    "objective": "L3",
    "topic": "V01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What architectural adjustment does the cloud architect recommend in aud-05 to optimize monthly infrastructure spend?",
    "options": [
      "Shutting down all redundancy and running a single virtual machine in one zone.",
      "Pre-warming reserved instances for baseline load while using spot instances for burst capacity.",
      "Migrating all static images back to an uncached on-premises server.",
      "Disabling TLS encryption on internal microservice communication."
    ],
    "answer": 1,
    "why_correct": "• Pista: el arquitecto propone gastar menos sin perder disponibilidad.\n• Significado: instancias reservadas para la carga base, spot para los picos.\n• Descartas: quitar redundancia, quitar caché o apagar TLS bajan el costo a cambio de riesgo.",
    "why_wrong": [
      "Incorrecto: quitar la redundancia deja el sistema sin respaldo.",
      "Opción correcta: reservadas para la carga base y spot para los picos.",
      "Incorrecto: quitar la caché empeora la respuesta.",
      "Incorrecto: apagar TLS expone los datos."
    ],
    "tip_es": "En arquitectura Cloud (V01), la combinación de Reserved Instances + Spot/Auto-scaling es el patrón clásico de optimización FinOps.",
    "human_rule": "Reservadas para lo constante, spot para los picos.",
    "trigger_anchor": "optimize monthly spend ➔ reserved for baseline + spot for burst",
    "spanglish_trap": "Elegir la opción que más ahorra. Aquí ahorrar no puede costar seguridad ni disponibilidad.",
    "ref": "aud-05"
  },
  {
    "id": "prac-l-11",
    "section": "L",
    "objective": "L2",
    "topic": "V01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the disaster recovery policy discussed in aud-06, under what strict condition does the system initiate a full cross-region database failover?",
    "options": [
      "Whenever a single user reports a slow page load on the mobile app.",
      "Every night at midnight during the incremental backup window.",
      "Only if both the primary and local standby nodes fail consecutive health checks.",
      "As soon as CPU utilization reaches forty percent on any worker pod."
    ],
    "answer": 2,
    "why_correct": "• Pista: el audio abre con \"Only if…\", una condición exacta.\n• Significado: la conmutación completa a otra región solo ocurre si fallan los dos nodos (principal y local).\n• Descartas: una queja de un usuario, una hora fija o un uso de CPU no activan el failover.",
    "why_wrong": [
      "Incorrecto: una queja de un usuario no activa el failover.",
      "Incorrecto: la hora fija no es una condición del audio.",
      "Opción correcta: solo si fallan tanto el nodo principal como el de reserva local.",
      "Incorrecto: un 40 % de CPU no activa el failover."
    ],
    "tip_es": "Identifica la condición restrictiva introducida por \"Only if\" en el audio.",
    "human_rule": "\"Only if…\" ➔ la condición exacta.",
    "trigger_anchor": "Only if both primary and local standby fail ➔ failover",
    "spanglish_trap": "Elegir una condición menor. \"Only if\" marca la única condición.",
    "ref": "aud-06"
  },
  {
    "id": "prac-l-12",
    "section": "L",
    "objective": "L4",
    "topic": "V01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Why does the speaker in aud-06 warn against triggering manual cross-region failovers for minor transient glitches?",
    "options": [
      "Because cross-region failover permanently deletes all customer tables.",
      "Because the secondary region lacks network connectivity to the internet.",
      "Because manual failovers violate open-source software licenses.",
      "Because DNS propagation and cache warming can cause temporary degraded performance."
    ],
    "answer": 3,
    "why_correct": "• Pista: el hablante advierte contra hacer failover manual por fallos pasajeros.\n• Significado: propagación de DNS y calentamiento de caché = tiempo en que el servicio va peor.\n• Descartas: las otras razones no aparecen en el audio.",
    "why_wrong": [
      "Incorrecto: el failover no borra las tablas.",
      "Incorrecto: la región secundaria sí tiene conexión.",
      "Incorrecto: no se menciona ninguna licencia.",
      "Opción correcta: porque la propagación de DNS y el calentamiento de caché empeoran el rendimiento por un rato."
    ],
    "tip_es": "Atención a las razones técnicas (\"because / since\") que explican por qué una medida extrema solo se usa en emergencias reales.",
    "human_rule": "Un failover innecesario cuesta rendimiento mientras se propaga el DNS y se llena la caché.",
    "trigger_anchor": "why avoid manual cross-region failovers for minor glitches ➔ DNS propagation + cold caches",
    "spanglish_trap": "Elegir la razón más grave. En el audio es una razón práctica: rendimiento temporal.",
    "ref": "aud-06"
  },
  {
    "id": "prac-l-13",
    "section": "L",
    "objective": "L1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the InfoSec policy review (aud-07), why was the developer's pull request blocked by the automated security scanner?",
    "options": [
      "It requested broad wildcard permissions instead of following least-privilege access rules.",
      "It contained syntax errors that prevented the Docker image from building.",
      "It attempted to upgrade the operating system to Ubuntu Server LTS.",
      "It used multi-factor authentication for the staging database."
    ],
    "answer": 0,
    "why_correct": "• Pista: El escáner bloqueó el pull request por permisos demasiado amplios.\n• Significado: Pedía permisos comodín en lugar de seguir el mínimo privilegio.\n• Descartas: Errores de sintaxis, Ubuntu o MFA en staging no fueron la causa.",
    "why_wrong": [
      "Opción correcta: Pedía permisos comodín amplios.",
      "Incorrecto: No fue por errores de sintaxis.",
      "Incorrecto: No fue por actualizar Ubuntu.",
      "Incorrecto: Usar MFA no se bloquea."
    ],
    "tip_es": "En políticas InfoSec (V05), los permisos wildcard (`*`) son rechazados en favor del Principle of Least Privilege.",
    "human_rule": "wildcard = permisos amplios = bloqueado.",
    "trigger_anchor": "blocked PR ➔ wildcard permissions",
    "spanglish_trap": "Pensar que el bloqueo es por código roto.",
    "ref": "aud-07"
  },
  {
    "id": "prac-l-14",
    "section": "L",
    "objective": "L3",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What mandatory measure does the security lead require in aud-07 before the service account can be deployed to production?",
    "options": [
      "That the developers share a single root password across all environments.",
      "That the team scope the IAM role strictly to read-only access on the specific S3 bucket.",
      "That the firewall be disabled during the initial data migration.",
      "That all audit logging be turned off to save disk space."
    ],
    "answer": 1,
    "why_correct": "• Pista: La exigencia: limitar el rol IAM a solo lectura.\n• Significado: Que el rol IAM tenga solo lectura antes de producción.\n• Descartas: Compartir root, apagar el firewall o desactivar logs son malas prácticas.",
    "why_wrong": [
      "Incorrecto: Compartir root es mala práctica.",
      "Opción correcta: Limitar el rol IAM a solo lectura.",
      "Incorrecto: Apagar el firewall es inseguro.",
      "Incorrecto: Apagar los logs impide auditar."
    ],
    "tip_es": "Escucha las recomendaciones formales con \"require/insist/recommend that [sujeto] [verbo base]\".",
    "human_rule": "scope strictly = acceso mínimo.",
    "trigger_anchor": "service account ➔ read-only role",
    "spanglish_trap": "Creer que \"scope\" es alcance de proyecto.",
    "ref": "aud-07"
  },
  {
    "id": "prac-l-15",
    "section": "L",
    "objective": "L2",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the customer escalation call (aud-08), why is the enterprise client frustrated with the recent software update?",
    "options": [
      "The user interface color scheme was changed without prior notice.",
      "Their monthly subscription invoice was billed in the wrong currency.",
      "A new rate-limiting rule is throttling their automated nightly data export scripts.",
      "The support desk refused to answer their phone calls for two weeks."
    ],
    "answer": 2,
    "why_correct": "• Pista: El cliente se queja de la nueva regla de rate-limiting.\n• Significado: La regla frena sus scripts nocturnos de exportación de datos.\n• Descartas: Colores, facturación en otra moneda y llamadas no atendidas no se mencionan.",
    "why_wrong": [
      "Incorrecto: El audio no habla de colores.",
      "Incorrecto: No habla de facturación.",
      "Opción correcta: Rate-limiting frena sus scripts de exportación.",
      "Incorrecto: No hay quejas por llamadas."
    ],
    "tip_es": "Distingue el síntoma técnico real (\"rate-limiting throttling nightly exports\") del tono emocional del cliente.",
    "human_rule": "rate-limiting = límite de peticiones por tiempo.",
    "trigger_anchor": "frustrated with update ➔ rate-limiting",
    "spanglish_trap": "Confundir rate limiting con \"tasa de interés\".",
    "ref": "aud-08"
  },
  {
    "id": "prac-l-16",
    "section": "L",
    "objective": "L3",
    "topic": "V03",
    "difficulty": 2,
    "pool": "practice",
    "stem": "How does the support engineer in aud-08 diplomatically de-escalate the situation while protecting platform stability?",
    "options": [
      "By blaming the junior developer who wrote the rate-limiting code.",
      "By telling the customer that rate limiting is a feature, not a bug, and closing the ticket.",
      "By offering to disable all security controls on the production API gateway.",
      "By explaining the DDoS protection rationale and provisioning a dedicated batch API key with higher quotas."
    ],
    "answer": 3,
    "why_correct": "• Pista: El ingeniero explica el motivo y da una solución: clave batch con más cuota.\n• Significado: Explica la razón (DDoS) y ofrece una API key dedicada con límites más altos.\n• Descartas: Culpar, cerrar el ticket o desactivar controles no es diplomático.",
    "why_wrong": [
      "Incorrecto: Culpar al desarrollador no es diplomático.",
      "Incorrecto: Decir \"feature not bug\" y cerrar es lo que se debe evitar.",
      "Incorrecto: No desactivan todos los controles.",
      "Opción correcta: Explica el motivo y ofrece clave dedicada con más cuota."
    ],
    "tip_es": "La desescalada efectiva en TI combina empatía, transparencia sobre la seguridad y un workaround técnico viable.",
    "human_rule": "Explica + ofrece alternativa = de-escalar.",
    "trigger_anchor": "rationale + alternative ➔ de-escalate",
    "spanglish_trap": "Creer que ceder todo es de-escalar.",
    "ref": "aud-08"
  },
  {
    "id": "prac-l-17",
    "section": "L",
    "objective": "L1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the data center incident call (aud-09), what caused the sudden packet drops across the storage area network?",
    "options": [
      "An MTU size mismatch between the newly replaced top-of-rack switch and the host NICs.",
      "A physical power blackout across the entire metropolitan grid.",
      "An expired domain name registration on the public marketing website.",
      "A missing translation key in the frontend localization file."
    ],
    "answer": 0,
    "why_correct": "• Pista: Caídas de paquetes en la SAN: algo cambió tras reemplazar equipos.\n• Significado: Un desajuste de MTU entre los dispositivos recién reemplazados.\n• Descartas: Apagón, dominio expirado o clave de traducción no causan caídas en una SAN.",
    "why_wrong": [
      "Opción correcta: Desajuste de MTU en los equipos nuevos.",
      "Incorrecto: Un apagón apagaría todo.",
      "Incorrecto: Un dominio expirado no afecta la SAN.",
      "Incorrecto: La localización del frontend no afecta."
    ],
    "tip_es": "En vocabulario de redes (V07), \"MTU / duplex mismatch\" es una causa clásica de pérdida de paquetes tras reemplazar hardware.",
    "human_rule": "cambio de equipo + drops = MTU mismatch.",
    "trigger_anchor": "replaced ➔ MTU mismatch",
    "spanglish_trap": "Culpar a la capa física.",
    "ref": "aud-09"
  },
  {
    "id": "prac-l-18",
    "section": "L",
    "objective": "L5",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What logical deduction do the engineers make in aud-09 when they see that small ICMP ping packets succeed while large database frames fail?",
    "options": [
      "The fiber optic transceiver must have been unplugged by a technician.",
      "The physical cable must be intact, and the issue must be related to frame size fragmentation.",
      "The database server must have been powered off since yesterday.",
      "The firewall must be blocking all ICMP traffic on the subnet."
    ],
    "answer": 1,
    "why_correct": "• Pista: Ping pequeño pasa, tramas grandes fallan.\n• Significado: El cable está bien; el problema es de tamaño de paquete (MTU).\n• Descartas: Transceptor desconectado, servidor apagado o firewall bloqueando ICMP no explican que el ping pase.",
    "why_wrong": [
      "Incorrecto: Un transceptor desconectado no dejaría pasar el ping.",
      "Opción correcta: El cable está bien; es un tema de tamaño (MTU).",
      "Incorrecto: Un servidor apagado no responde ping.",
      "Incorrecto: Si ICMP estuviera bloqueado, el ping no pasaría."
    ],
    "tip_es": "Observa cómo se usa \"must be / can't be\" para descartar fallos físicos cuando hay conectividad parcial.",
    "human_rule": "pequeño pasa + grande falla = MTU.",
    "trigger_anchor": "small ok + large fail ➔ MTU",
    "spanglish_trap": "Culpar al cable.",
    "ref": "aud-09"
  },
  {
    "id": "prac-l-19",
    "section": "L",
    "objective": "L2",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the product release retrospective (aud-10), why did the team decide to hold back the real-time collaboration widget from version 3.0?",
    "options": [
      "The marketing department forgot to prepare the announcement blog post.",
      "No customers had ever requested collaboration features in the NPS survey.",
      "Stress testing revealed race conditions under concurrent edits that risked corrupting user documents.",
      "The widget was written in a programming language that browsers cannot render."
    ],
    "answer": 2,
    "why_correct": "• Pista: Por qué retrasaron el widget de colaboración.\n• Significado: Las pruebas de estrés mostraron condiciones de carrera con usuarios concurrentes.\n• Descartas: No fue marketing, falta de petición ni el lenguaje de programación.",
    "why_wrong": [
      "Incorrecto: \"The marketing department forgot to prepare the announcement blog post.\" no es lo que dice el audio.",
      "Incorrecto: \"No customers had ever requested collaboration features in the NPS…\" no es lo que dice el audio.",
      "Opción correcta: Stress testing revealed race conditions under concurrent edits that risked corrupting user documents.",
      "Incorrecto: \"The widget was written in a programming language that browsers cannot…\" no es lo que dice el audio."
    ],
    "tip_es": "En gestión de producto (V08), postergar una función inestable para proteger la integridad del lanzamiento principal es una decisión clave de calidad.",
    "human_rule": "race conditions = fallos por concurrencia.",
    "trigger_anchor": "held back ➔ race conditions",
    "spanglish_trap": "Culpar a marketing.",
    "ref": "aud-10"
  },
  {
    "id": "prac-l-20",
    "section": "L",
    "objective": "L4",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What approach do the product manager and tech lead agree on at the end of aud-10 to deliver the delayed widget safely?",
    "options": [
      "To scrap the widget permanently and delete the source code branch.",
      "To force all enterprise customers to use the unpatched beta version tonight.",
      "To outsource the entire backend architecture to a different vendor.",
      "To roll it out gradually behind a feature flag to a small beta cohort next sprint."
    ],
    "answer": 3,
    "why_correct": "• Pista: Cómo entregar el widget retrasado con seguridad.\n• Significado: Lanzarlo gradualmente detrás de un feature flag.\n• Descartas: No cancelarlo, no forzar a clientes y no subcontratar.",
    "why_wrong": [
      "Incorrecto: \"To scrap the widget permanently and delete the source code branch.\" no es lo que dice el audio.",
      "Incorrecto: \"To force all enterprise customers to use the unpatched beta version…\" no es lo que dice el audio.",
      "Incorrecto: \"To outsource the entire backend architecture to a different vendor.\" no es lo que dice el audio.",
      "Opción correcta: To roll it out gradually behind a feature flag to a small beta cohort next sprint."
    ],
    "tip_es": "Relaciona el despliegue seguro en ingeniería de software con \"feature flags\", \"canary releases\" e \"incremental delivery\".",
    "human_rule": "gradual + flag = riesgo bajo.",
    "trigger_anchor": "safely ➔ feature flag",
    "spanglish_trap": "Elegir el extremo drástico.",
    "ref": "aud-10"
  },
  {
    "id": "bank-r-proc-01",
    "section": "R",
    "objective": "R1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the migration runbook in txt-domain33-proc, which critical preparatory safety measure was completely omitted prior to altering the database tables?",
    "options": [
      "Notifying the incident coordinator forty-five minutes before deployment.",
      "Validating and generating a point-in-time pre-migration storage backup snapshot.",
      "Enabling maintenance mode on the public ingress load balancers.",
      "Restarting backend microservice worker pools against the staging schema."
    ],
    "answer": 1,
    "why_correct": "• Pista: La pregunta busca la medida de seguridad omitida antes de alterar la base.\n• Significado: No se validó ni se generó un respaldo punto en el tiempo previo a la migración.\n• Descartas: Notificar, mantenimiento o reiniciar workers no son la medida crítica omitida.",
    "why_wrong": [
      "Incorrecto: \"Notifying the incident coordinator forty-five minutes before…\" no es lo que dice el texto.",
      "Opción correcta: Validating and generating a point-in-time pre-migration storage backup snapshot.",
      "Incorrecto: \"Enabling maintenance mode on the public ingress load balancers.\" no es lo que dice el texto.",
      "Incorrecto: \"Restarting backend microservice worker pools against the staging…\" no es lo que dice el texto."
    ],
    "tip_es": "Dominio 3.3 OpenEDG: Identifica la información omitida (omitted / overlooked) comparando la lista de pasos contra el texto del postmortem.",
    "human_rule": "antes de cambiar la base: haz respaldo.",
    "trigger_anchor": "omitted ➔ pre-migration backup",
    "spanglish_trap": "Elegir pasos operativos y no el respaldo.",
    "ref": "txt-domain33-proc"
  },
  {
    "id": "bank-r-proc-02",
    "section": "R",
    "objective": "R1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the event that the automated DDL script crashes mid-execution, what critical contingency plan is missing from the operational protocol?",
    "options": [
      "An automated rollback script to restore the previous database state.",
      "A script to restart the ingress load balancers on port 443.",
      "A second operational notice posted to the corporate Slack channel.",
      "A script to compile Java binaries on the worker instances."
    ],
    "answer": 0,
    "why_correct": "• Pista: Falta un plan si el script DDL falla a medias.\n• Significado: Un script de rollback automático que restaure el estado previo.\n• Descartas: Reiniciar balanceadores, notificar o compilar Java no restauran la base.",
    "why_wrong": [
      "Opción correcta: An automated rollback script to restore the previous database state.",
      "Incorrecto: \"A script to restart the ingress load balancers on port 443.\" no es lo que dice el texto.",
      "Incorrecto: \"A second operational notice posted to the corporate Slack channel.\" no es lo que dice el texto.",
      "Incorrecto: \"A script to compile Java binaries on the worker instances.\" no es lo que dice el texto."
    ],
    "tip_es": "En procedimientos de infraestructura crítica, el plan de reversión (rollback strategy / disaster recovery) es un prerrequisito obligatorio.",
    "human_rule": "contingency = plan por si falla.",
    "trigger_anchor": "script crashes ➔ rollback",
    "spanglish_trap": "Elegir acciones auxiliares.",
    "ref": "txt-domain33-proc"
  },
  {
    "id": "bank-r-proc-03",
    "section": "R",
    "objective": "R1",
    "topic": "V08",
    "difficulty": 3,
    "pool": "practice",
    "stem": "What missing administrative role did the compliance officer flag regarding emergency deadlock escalation?",
    "options": [
      "The Tier-1 support technician assigned to handle customer billing emails.",
      "The designated escalation engineer who holds emergency superuser privileges.",
      "The external vendor representative who supplied the optical fiber cabling.",
      "The marketing director responsible for approving product press releases."
    ],
    "answer": 1,
    "why_correct": "• Pista: Rol administrativo faltante para escalar un deadlock.\n• Significado: El ingeniero de escalamiento designado con autoridad de emergencia.\n• Descartas: Soporte Tier-1, proveedor externo o marketing no tienen esa función.",
    "why_wrong": [
      "Incorrecto: \"The Tier-1 support technician assigned to handle customer billing…\" no es lo que dice el texto.",
      "Opción correcta: The designated escalation engineer who holds emergency superuser privileges.",
      "Incorrecto: \"The external vendor representative who supplied the optical fiber…\" no es lo que dice el texto.",
      "Incorrecto: \"The marketing director responsible for approving product press…\" no es lo que dice el texto."
    ],
    "tip_es": "Busca la correspondencia exacta: 'failed to identify the designated escalation engineer who holds emergency superuser privileges'.",
    "human_rule": "escalation engineer = responsable de emergencia.",
    "trigger_anchor": "missing role ➔ escalation engineer",
    "spanglish_trap": "Elegir un rol conocido.",
    "ref": "txt-domain33-proc"
  }
];
