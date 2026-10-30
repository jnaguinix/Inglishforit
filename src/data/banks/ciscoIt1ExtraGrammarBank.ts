import { Question } from '../../types';

/**
 * Cisco English for IT 1 - Appendix B: Extra Grammar Exercises (Part 8)
 * 114 reactivos de alta precisión oficiales de OpenEDG / Cisco Networking Academy.
 * Cobertura de secciones:
 *  - 8.1: Verb Tenses & Modals (8.1.1 - 8.1.6: 36 reactivos)
 *  - 8.2: Modals of Ability, Deduction & Necessity (8.2.1 - 8.2.5: 30 reactivos)
 *  - 8.3: Comparative Adverbs, Frequency & Adjectives (8.3.1 - 8.3.3: 18 reactivos)
 *  - 8.4: Passive Gerunds, Idioms, Hedging & Polite Requests (8.4.1 - 8.4.5: 30 reactivos)
 * 
 * Todos los reactivos están tipados estrictamente como 'pool: practice' para enriquecer
 * la práctica por módulos y temas sin descalibrar el simulacro oficial TestNow™.
 */
export const CISCO_IT1_EXTRA_GRAMMAR_BANK: Question[] = [
  {
    "id": "cisco-extra-8.1.1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Identify the verb tense used in the following sentence: \"Our company is determining how to achieve its goals using Gap Analysis.\"",
    "options": [
      "Present Continuous",
      "Present Simple",
      "Past Continuous",
      "Present Perfect"
    ],
    "answer": 0,
    "why_correct": "• Pista: la frase dice \"is determining\" (is / are + -ing).\n• Regla: is / are + -ing ➔ Present Continuous (algo que pasa ahora).\n• Descartas: Present Simple sería \"determines\"; Past Continuous sería \"was determining\"; Present Perfect sería \"has determined\".",
    "why_wrong": [
      "Opción correcta: \"is determining\" es Present Continuous.",
      "Incorrecto: Present Simple sería \"determines\".",
      "Incorrecto: Past Continuous sería \"was determining\".",
      "Incorrecto: Present Perfect sería \"has determined\"."
    ],
    "tip_es": "Present Continuous = [am/is/are + verbo-ing]. Acciones en progreso o tendencias.",
    "ref": null,
    "human_rule": "is / are + -ing ➔ Present Continuous.",
    "trigger_anchor": "is determining ➔ Present Continuous",
    "spanglish_trap": "Confundir los nombres por su parecido. Mira las piezas: is + -ing.",
    "workplace_usage": {
      "scenario": "Planificación de Squad",
      "en": "Our company is determining how to achieve its goals using Gap Analysis.",
      "es": "Nuestra empresa está determinando cómo lograr sus objetivos mediante Gap Analysis."
    }
  },
  {
    "id": "cisco-extra-8.1.1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Identify the verb tense used in the following sentence: \"Our company had determined how to achieve its goals using Gap Analysis.\"",
    "options": [
      "Past Simple",
      "Past Perfect",
      "Present Perfect",
      "Past Perfect Continuous"
    ],
    "answer": 1,
    "why_correct": "• Pista: la frase dice \"had determined\" (had + 3.ª forma).\n• Regla: had + 3.ª forma ➔ Past Perfect (ya había pasado).\n• Descartas: Past Simple sería \"determined\"; Present Perfect sería \"has determined\"; Past Perfect Continuous sería \"had been determining\".",
    "why_wrong": [
      "Incorrecto: Past Simple sería \"determined\".",
      "Opción correcta: \"had determined\" es Past Perfect.",
      "Incorrecto: Present Perfect sería \"has determined\".",
      "Incorrecto: Past Perfect Continuous sería \"had been determining\"."
    ],
    "tip_es": "Past Perfect = [had + participio V3]. El pasado del pasado.",
    "ref": null,
    "human_rule": "had + 3.ª forma ➔ Past Perfect.",
    "trigger_anchor": "had determined ➔ Past Perfect",
    "spanglish_trap": "Elegir Past Simple porque \"determined\" aparece en la frase. Mira el had delante.",
    "workplace_usage": {
      "scenario": "Retrospectiva de Metodología",
      "en": "Our company had determined how to achieve its goals using Gap Analysis.",
      "es": "Nuestra empresa ya había determinado cómo alcanzar sus metas usando Gap Analysis."
    }
  },
  {
    "id": "cisco-extra-8.1.1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Identify the verb tense used in the following sentence: \"Our company has been determining how to achieve its goals using Gap Analysis.\"",
    "options": [
      "Past Perfect Continuous",
      "Present Continuous",
      "Present Perfect Continuous",
      "Present Perfect Simple"
    ],
    "answer": 2,
    "why_correct": "• Pista: la frase dice \"has been determining\".\n• Regla: has / have been + -ing ➔ Present Perfect Continuous (viene pasando hasta ahora).\n• Descartas: Past Perfect Continuous sería \"had been determining\"; Present Continuous sería \"is determining\"; Present Perfect Simple sería \"has determined\".",
    "why_wrong": [
      "Incorrecto: Past Perfect Continuous sería \"had been determining\".",
      "Incorrecto: Present Continuous sería \"is determining\".",
      "Opción correcta: \"has been determining\" es Present Perfect Continuous.",
      "Incorrecto: Present Perfect Simple sería \"has determined\"."
    ],
    "tip_es": "Present Perfect Continuous = [have/has been + verbo-ing]. Acción continua con impacto presente.",
    "ref": null,
    "human_rule": "has / have been + -ing ➔ Present Perfect Continuous.",
    "trigger_anchor": "has been determining ➔ Present Perfect Continuous",
    "spanglish_trap": "Olvidar \"been + -ing\". Esas dos piezas hacen que sea \"continuous\".",
    "workplace_usage": {
      "scenario": "Estrategia de TI Anual",
      "en": "Our company has been determining how to achieve its goals using Gap Analysis.",
      "es": "Nuestra empresa ha estado determinando cómo lograr sus metas mediante Gap Analysis."
    }
  },
  {
    "id": "cisco-extra-8.1.1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Identify the verb tense used in the main clause: \"Gap Analysis allowed our company to determine how to achieve our goals.\"",
    "options": [
      "Present Perfect",
      "Past Continuous",
      "Past Perfect",
      "Past Simple"
    ],
    "answer": 3,
    "why_correct": "• Pista: la frase principal dice \"allowed\" (un verbo en pasado).\n• Regla: un solo verbo en pasado ➔ Past Simple.\n• Descartas: Present Perfect sería \"has allowed\"; Past Continuous sería \"was allowing\"; Past Perfect sería \"had allowed\".",
    "why_wrong": [
      "Incorrecto: Present Perfect sería \"has allowed\".",
      "Incorrecto: Past Continuous sería \"was allowing\".",
      "Incorrecto: Past Perfect sería \"had allowed\".",
      "Opción correcta: \"allowed\" es Past Simple."
    ],
    "tip_es": "Past Simple = Verbo en pasado (-ed / irregular) sin auxiliares had/have/be.",
    "ref": null,
    "human_rule": "Un solo verbo en pasado ➔ Past Simple.",
    "trigger_anchor": "Gap Analysis allowed our company… ➔ Past Simple",
    "spanglish_trap": "Elegir los tiempos compuestos por sonar avanzado. Si solo hay un verbo en pasado, es Past Simple.",
    "workplace_usage": {
      "scenario": "Evaluación de Procesos",
      "en": "Gap Analysis allowed our company to determine how to achieve our goals.",
      "es": "El Gap Analysis permitió a nuestra empresa determinar cómo lograr nuestros objetivos."
    }
  },
  {
    "id": "cisco-extra-8.1.1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G12",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Identify the verb tense used in the following sentence: \"Our company will have been determining how to achieve its goals using Gap Analysis.\"",
    "options": [
      "Future Perfect Continuous",
      "Future Continuous",
      "Future Perfect Simple",
      "Future Simple"
    ],
    "answer": 0,
    "why_correct": "• Pista: la frase dice \"will have been determining\".\n• Regla: will have been + -ing ➔ \"para entonces llevará un tiempo haciéndolo\" (Future Perfect Continuous).\n• Descartas: Future Continuous es \"will be + -ing\"; Future Perfect Simple es \"will have + 3.ª forma\"; Future Simple es \"will + verbo\".",
    "why_wrong": [
      "Opción correcta: \"will have been + -ing\" es el Future Perfect Continuous.",
      "Incorrecto: Future Continuous sería \"will be determining\".",
      "Incorrecto: Future Perfect Simple sería \"will have determined\".",
      "Incorrecto: Future Simple sería \"will determine\"."
    ],
    "tip_es": "Future Perfect Continuous = [will have been + verbo-ing]. Duración proyectada hacia el futuro.",
    "ref": null,
    "human_rule": "will have been + -ing ➔ \"llevará un tiempo haciendo…\" (Future Perfect Continuous).",
    "trigger_anchor": "will have been determining ➔ Future Perfect Continuous",
    "spanglish_trap": "Contar solo \"will have\" y olvidar \"been + -ing\". El nombre depende de las tres piezas.",
    "workplace_usage": {
      "scenario": "Plan Quinquenal",
      "en": "Our company will have been determining how to achieve its goals using Gap Analysis.",
      "es": "Nuestra empresa habrá estado determinando cómo lograr sus metas usando Gap Analysis."
    }
  },
  {
    "id": "cisco-extra-8.1.1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Identify the verb tense used in the following sentence: \"Our company will be determining how to achieve its goals using Gap Analysis.\"",
    "options": [
      "Future Simple",
      "Future Continuous",
      "Future Perfect",
      "Present Continuous"
    ],
    "answer": 1,
    "why_correct": "• Pista: la frase dice \"will be determining\".\n• Regla: will be + -ing ➔ Future Continuous (\"estará haciéndolo\").\n• Descartas: Future Simple sería \"will determine\"; Future Perfect sería \"will have determined\"; Present Continuous sería \"is determining\".",
    "why_wrong": [
      "Incorrecto: Future Simple sería \"will determine\".",
      "Opción correcta: \"will be + -ing\" es Future Continuous.",
      "Incorrecto: Future Perfect sería \"will have determined\".",
      "Incorrecto: Present Continuous sería \"is determining\"."
    ],
    "tip_es": "Future Continuous = [will be + verbo-ing]. Acción en progreso en el futuro.",
    "ref": null,
    "human_rule": "will be + -ing ➔ Future Continuous.",
    "trigger_anchor": "will be determining ➔ Future Continuous",
    "spanglish_trap": "Contar solo will y olvidar be + -ing.",
    "workplace_usage": {
      "scenario": "Roadmap de Producto Q4",
      "en": "Our company will be determining how to achieve its goals using Gap Analysis.",
      "es": "Nuestra empresa estará determinando cómo alcanzar sus metas usando Gap Analysis."
    }
  },
  {
    "id": "cisco-extra-8.1.2-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"We explained that we __________ a comprehensive procedure on how to address security flaws.\"",
    "options": [
      "had considered",
      "have considered",
      "consider",
      "are considering"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"We explained that…\" está en pasado, y lo que se explica ocurrió antes.\n• Regla: lo que ya habían hecho antes de contarlo ➔ had + 3.ª forma.\n• Descartas: have considered, consider y are considering son presente.",
    "why_wrong": [
      "Opción correcta: \"had considered\" = \"habíamos considerado\".",
      "Incorrecto: have considered es presente perfecto.",
      "Incorrecto: consider es presente.",
      "Incorrecto: are considering es presente."
    ],
    "tip_es": "Verbo principal en pasado (\"explained\") + hecho anterior = Past Perfect (\"had considered\").",
    "ref": null,
    "human_rule": "Si cuentas algo pasado, lo anterior va con had + 3.ª forma.",
    "trigger_anchor": "We explained that we ______ a procedure ➔ had considered",
    "spanglish_trap": "Mantener el presente al contar algo pasado. Si el verbo principal es pasado, lo anterior va con had.",
    "workplace_usage": {
      "scenario": "Auditoría de Vulnerabilidades",
      "en": "We explained that we had considered a comprehensive procedure on how to address security flaws.",
      "es": "Explicamos que habíamos considerado un procedimiento integral sobre cómo abordar las fallas de seguridad."
    }
  },
  {
    "id": "cisco-extra-8.1.2-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"They wanted to go ahead with the plans but we told them that we __________ to rethink our strategy.\"",
    "options": [
      "have just decided",
      "had just decided",
      "just decide",
      "would just decide"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"we told them that…\" está en pasado, y la decisión era anterior.\n• Regla: lo decidido antes de contarlo ➔ had just + 3.ª forma.\n• Descartas: have just decided es presente; just decide es presente; would just decide es un condicional.",
    "why_wrong": [
      "Incorrecto: have just decided habla del presente.",
      "Opción correcta: \"had just decided\" = \"acabábamos de decidir\".",
      "Incorrecto: just decide es presente.",
      "Incorrecto: would just decide es condicional, no dice que ya estaba decidido."
    ],
    "tip_es": "Acción recién finalizada antes de un hecho pasado (\"told them\"): [had just + participio].",
    "ref": null,
    "human_rule": "Lo recién decidido antes de contarlo ➔ had just + 3.ª forma.",
    "trigger_anchor": "we told them that we ______ to rethink ➔ had just decided",
    "spanglish_trap": "Usar have just decided. Si lo cuentas en pasado, va had just decided.",
    "workplace_usage": {
      "scenario": "Reunión de Cambio de Alcance",
      "en": "They wanted to go ahead with the plans but we told them that we had just decided to rethink our strategy.",
      "es": "Querían seguir adelante con los planes pero les dijimos que acabábamos de decidir repensar nuestra estrategia."
    }
  },
  {
    "id": "cisco-extra-8.1.2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"They aren't joining us for the review because they __________ they need to finish their report by the end of today.\"",
    "options": [
      "had just found out",
      "just find out",
      "have just found out",
      "are just finding out"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"aren't joining\" está en presente: la razón es reciente (\"acaban de enterarse\").\n• Regla: algo reciente con efecto ahora ➔ have just + 3.ª forma.\n• Descartas: \"had just found out\" va con otro momento pasado; \"just find out\" y \"are just finding out\" no marcan lo reciente.",
    "why_wrong": [
      "Incorrecto: \"had just found out\" va con otro momento pasado, y aquí la frase está en presente.",
      "Incorrecto: \"just find out\" es presente simple.",
      "Opción correcta: \"have just found out\" = \"acaban de enterarse\".",
      "Incorrecto: \"are just finding out\" dice que lo están descubriendo ahora mismo."
    ],
    "tip_es": "Cláusula principal en presente (\"aren't joining\") + hecho reciente = Present Perfect (\"have just found out\").",
    "ref": null,
    "human_rule": "Algo reciente que explica el presente ➔ have just + 3.ª forma.",
    "trigger_anchor": "They aren't joining us because they ______ ➔ have just found out",
    "spanglish_trap": "Usar had por ser algo pasado. Si el efecto es ahora, va have just.",
    "workplace_usage": {
      "scenario": "Sprint Review",
      "en": "They aren't joining us for the review because they have just found out they need to finish their report.",
      "es": "No nos acompañarán en la revisión porque acaban de enterarse de que necesitan terminar su informe."
    }
  },
  {
    "id": "cisco-extra-8.1.2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"They were late for the meeting because they __________ the day wrong.\"",
    "options": [
      "have gotten",
      "get",
      "were getting",
      "had gotten"
    ],
    "answer": 3,
    "why_correct": "• Pista: llegaron tarde (pasado) porque antes habían entendido mal el día.\n• Regla: la causa anterior ➔ had + 3.ª forma.\n• Descartas: have gotten, get y were getting no marcan que fue antes.",
    "why_wrong": [
      "Incorrecto: have gotten habla del presente.",
      "Incorrecto: get es presente.",
      "Incorrecto: were getting dice que lo estaban haciendo, no que ya lo habían hecho.",
      "Opción correcta: \"had gotten the day wrong\" = \"se habían equivocado de día\"."
    ],
    "tip_es": "Causa previa a un estado en pasado (\"were late\"): usa Past Perfect (\"had gotten\").",
    "ref": null,
    "human_rule": "La causa anterior ➔ had + 3.ª forma.",
    "trigger_anchor": "They were late because they ______ the day wrong ➔ had gotten",
    "spanglish_trap": "Usar were getting. La causa ya había ocurrido antes: had gotten.",
    "workplace_usage": {
      "scenario": "Sincronización de Equipo",
      "en": "They were late for the meeting because they had gotten the day wrong.",
      "es": "Llegaron tarde a la reunión porque se habían equivocado de día."
    }
  },
  {
    "id": "cisco-extra-8.1.2-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"When it was suggested that we could improve on our security procedures, we told them that we __________ the key concerns they had.\"",
    "options": [
      "had already addressed",
      "have already addressed",
      "already address",
      "are already addressing"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"we told them that…\" está en pasado, y las preocupaciones ya se habían atendido antes.\n• Regla: lo que ya estaba hecho ➔ had already + 3.ª forma.\n• Descartas: have already addressed, already address y are already addressing son presente.",
    "why_wrong": [
      "Opción correcta: \"had already addressed\" = \"ya habíamos atendido\".",
      "Incorrecto: have already addressed habla del presente.",
      "Incorrecto: already address es presente.",
      "Incorrecto: are already addressing es presente."
    ],
    "tip_es": "Acción concluida antes de una conversación en pasado: [had already + participio pasado].",
    "ref": null,
    "human_rule": "Lo que ya estaba hecho antes de contarlo ➔ had already + 3.ª forma.",
    "trigger_anchor": "we told them that we ______ already addressed ➔ had",
    "spanglish_trap": "Dejar el verbo en presente al contar algo pasado.",
    "workplace_usage": {
      "scenario": "Reunión de Seguridad InfoSec",
      "en": "We told them that we had already addressed the key concerns they had.",
      "es": "Les dijimos que ya habíamos atendido las principales inquietudes que tenían."
    }
  },
  {
    "id": "cisco-extra-8.1.2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the question: \"__________ on a way forward before receiving the latest regulations?\"",
    "options": [
      "Have you already agreed",
      "Had you already agreed",
      "Did you already agree",
      "Were you already agreeing"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"before receiving\" marca un momento pasado y preguntan si ya lo habían hecho antes.\n• Regla: pregunta sobre lo anterior ➔ Had you + 3.ª forma?\n• Descartas: Have you habla del presente; Did you y Were you no marcan \"antes de\".",
    "why_wrong": [
      "Incorrecto: Have you already agreed habla del presente.",
      "Opción correcta: \"Had you already agreed…?\" = \"¿ya habían acordado…?\".",
      "Incorrecto: Did you already agree no marca que fue antes de otro momento.",
      "Incorrecto: Were you already agreeing dice que lo estaban haciendo, no que ya lo habían hecho."
    ],
    "tip_es": "Acción previa a un punto en pasado (\"before receiving...\"): [Had + sujeto + already + participio].",
    "ref": null,
    "human_rule": "¿Ya lo habían hecho antes de…? ➔ Had you + 3.ª forma?",
    "trigger_anchor": "______ on a way forward before receiving the regulations? ➔ Had you already agreed",
    "spanglish_trap": "Preguntar con Did you. Si pregunta por algo anterior a otro momento, usa Had you.",
    "workplace_usage": {
      "scenario": "Revisión de Cumplimiento PCI-DSS",
      "en": "Had you already agreed on a way forward before receiving the latest regulations?",
      "es": "¿Ya habían acordado un camino a seguir antes de recibir las últimas regulaciones?"
    }
  },
  {
    "id": "cisco-extra-8.1.3-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the question: \"How long __________ before they informed you of their decision?\"",
    "options": [
      "had you been waiting",
      "have you been waiting",
      "did you wait",
      "were you waiting"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"before they informed you\" marca un momento pasado y preguntan cuánto duró la espera antes.\n• Regla: duración antes de otro momento pasado ➔ had been + -ing.\n• Descartas: have you been waiting es presente; did you wait no marca la duración; were you waiting no marca \"antes de\".",
    "why_wrong": [
      "Opción correcta: \"had you been waiting\" = \"cuánto llevabas esperando\".",
      "Incorrecto: have you been waiting habla del presente.",
      "Incorrecto: did you wait no marca que la espera llegó hasta ese momento.",
      "Incorrecto: were you waiting no marca la duración hasta entonces."
    ],
    "tip_es": "\"How long\" + duración previa a un evento en pasado (\"before they informed\"): Past Perfect Continuous.",
    "ref": null,
    "human_rule": "¿Cuánto llevabas haciendo…? ➔ had been + -ing.",
    "trigger_anchor": "How long ______ before they informed you ➔ had you been waiting",
    "spanglish_trap": "Preguntar con did you wait. Para cuánto llevabas esperando, had you been waiting.",
    "workplace_usage": {
      "scenario": "Decisión de Proveedores",
      "en": "How long had you been waiting before they informed you of their decision?",
      "es": "¿Cuánto tiempo habías estado esperando antes de que te informaran de su decisión?"
    }
  },
  {
    "id": "cisco-extra-8.1.3-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"The team __________ a huge workload recently in preparation for the upcoming audit.\"",
    "options": [
      "had been dealing with",
      "has been dealing with",
      "is dealing with",
      "dealt with"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"recently\" marca algo que viene pasando hasta ahora.\n• Regla: duración reciente hasta ahora ➔ has been + -ing.\n• Descartas: \"had been dealing with\" es antes de otro momento pasado; is dealing with es presente; dealt with es pasado cerrado.",
    "why_wrong": [
      "Incorrecto: \"had been dealing with\" habla de antes de otro momento pasado.",
      "Opción correcta: \"has been dealing with\" = \"lleva lidiando con\".",
      "Incorrecto: is dealing with no marca que viene de antes.",
      "Incorrecto: dealt with es un pasado cerrado."
    ],
    "tip_es": "\"recently\" + preparación para evento futuro (\"upcoming\"): Present Perfect Continuous.",
    "ref": null,
    "human_rule": "Duración reciente hasta ahora ➔ has / have been + -ing.",
    "trigger_anchor": "The team ______ a huge workload recently ➔ has been dealing with",
    "spanglish_trap": "Usar had been. Si llega hasta ahora, va has been.",
    "workplace_usage": {
      "scenario": "Preparación de Auditoría ISO 27001",
      "en": "The team has been dealing with a huge workload recently in preparation for the upcoming audit.",
      "es": "El equipo ha estado lidiando con una enorme carga de trabajo recientemente en preparación para la próxima auditoría."
    }
  },
  {
    "id": "cisco-extra-8.1.3-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"They eventually found a solution to the production problem after they __________ all day.\"",
    "options": [
      "have been investigating",
      "investigated",
      "had been investigating",
      "were investigating"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"after they ______ all day\" marca una duración que terminó antes de encontrar la solución.\n• Regla: duración antes de otro momento pasado ➔ had been + -ing.\n• Descartas: have been investigating es presente; investigated no marca la duración; were investigating no marca \"antes de\".",
    "why_wrong": [
      "Incorrecto: have been investigating habla del presente.",
      "Incorrecto: investigated no marca que duró todo el día.",
      "Opción correcta: \"had been investigating\" = \"llevaban investigando\".",
      "Incorrecto: were investigating no marca que ya había terminado."
    ],
    "tip_es": "\"after\" + duración continua (\"all day\") antes de un hallazgo pasado: Past Perfect Continuous.",
    "ref": null,
    "human_rule": "Duración antes de otro momento pasado ➔ had been + -ing.",
    "trigger_anchor": "…found a solution after they ______ all day ➔ had been investigating",
    "spanglish_trap": "Elegir were investigating. Si la duración terminó antes del momento pasado, had been.",
    "workplace_usage": {
      "scenario": "Incidente Crítico en Producción",
      "en": "They eventually found a solution to the production problem after they had been investigating all day.",
      "es": "Finalmente encontraron una solución al problema de producción después de haber estado investigando todo el día."
    }
  },
  {
    "id": "cisco-extra-8.1.3-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"They __________ tests continuously before they found the root of the problem.\"",
    "options": [
      "have been running",
      "were running",
      "ran",
      "had been running"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"continuously… before they found the root\" marca una duración antes de otro momento pasado.\n• Regla: duración antes de otro momento pasado ➔ had been + -ing.\n• Descartas: have been running es presente; were running y ran no marcan \"antes de\".",
    "why_wrong": [
      "Incorrecto: have been running habla del presente.",
      "Incorrecto: were running no marca que duró hasta antes de encontrar la causa.",
      "Incorrecto: ran no marca la duración.",
      "Opción correcta: \"had been running\" = \"llevaban ejecutando\"."
    ],
    "tip_es": "Acción continua (\"continuously\") previa a un hito pasado (\"before they found\"): Past Perfect Continuous.",
    "ref": null,
    "human_rule": "Duración antes de otro momento pasado ➔ had been + -ing.",
    "trigger_anchor": "…tests continuously before they found the root ➔ had been running",
    "spanglish_trap": "Elegir ran por ser lo más simple. Con duración y un \"antes de\", had been + -ing.",
    "workplace_usage": {
      "scenario": "Pruebas de Estrés QA",
      "en": "They had been running tests continuously before they found the root of the problem.",
      "es": "Habían estado ejecutando pruebas continuamente antes de encontrar la raíz del problema."
    }
  },
  {
    "id": "cisco-extra-8.1.3-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the dialogue: \"Actually, we __________ that to happen for some time. And now it has!\"",
    "options": [
      "have been expecting",
      "had been expecting",
      "are expecting",
      "expected"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"for some time\" y \"now it has\": la espera llegó hasta ahora.\n• Regla: duración hasta ahora ➔ have been + -ing.\n• Descartas: \"had been expecting\" termina antes de otro momento pasado; are expecting no marca la duración; expected es pasado simple.",
    "why_wrong": [
      "Opción correcta: \"have been expecting\" = \"llevamos esperando\".",
      "Incorrecto: \"had been expecting\" habla de antes de otro momento pasado; aquí la espera llega hasta ahora.",
      "Incorrecto: are expecting no marca la duración.",
      "Incorrecto: expected es un pasado simple."
    ],
    "tip_es": "\"for some time\" con desenlace en el presente inmediato (\"And now it has!\"): Present Perfect Continuous.",
    "ref": null,
    "human_rule": "Duración hasta ahora ➔ have been + -ing.",
    "trigger_anchor": "…for some time. And now it has! ➔ have been expecting",
    "spanglish_trap": "Usar had been. Si la espera llega hasta ahora, va have been.",
    "workplace_usage": {
      "scenario": "Monitoreo de Infraestructura",
      "en": "Actually, we have been expecting that to happen for some time. And now it has!",
      "es": "De hecho, hemos estado esperando que eso sucediera durante algún tiempo. ¡Y ahora ocurrió!"
    }
  },
  {
    "id": "cisco-extra-8.1.3-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G25",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"We were told that some players __________ the problems for quite a long time before a solution was finally found.\"",
    "options": [
      "have been experiencing",
      "had been experiencing",
      "were experiencing",
      "experienced"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"We were told…\" está en pasado y \"for quite a long time before\" marca una duración anterior.\n• Regla: duración antes de otro momento pasado ➔ had been + -ing.\n• Descartas: have been experiencing es presente; were experiencing y experienced no marcan \"antes de\".",
    "why_wrong": [
      "Incorrecto: have been experiencing habla del presente.",
      "Opción correcta: \"had been experiencing\" = \"llevaban sufriendo\".",
      "Incorrecto: were experiencing no marca que duró hasta antes de la solución.",
      "Incorrecto: experienced no marca la duración."
    ],
    "tip_es": "Narración en pasado (\"were told\") + duración previa (\"for quite a long time before\"): Past Perfect Continuous.",
    "ref": null,
    "human_rule": "Duración antes de otro momento pasado ➔ had been + -ing.",
    "trigger_anchor": "…for quite a long time before a solution was found ➔ had been experiencing",
    "spanglish_trap": "Elegir experienced. Si hay duración y un \"antes de\", had been + -ing.",
    "workplace_usage": {
      "scenario": "Soporte de Videojuegos Online",
      "en": "We were told that some players had been experiencing the problems for quite a long time before a solution was finally found.",
      "es": "Nos dijeron que algunos jugadores habían estado experimentando los problemas durante bastante tiempo antes de que finalmente se encontrara una solución."
    }
  },
  {
    "id": "cisco-extra-8.1.4-q1",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the polite suggestion: \"__________ reconsider addressing the security flaws in the default configuration.\"",
    "options": [
      "We hoped you would",
      "We hope you will",
      "We want you to",
      "You must"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una sugerencia educada con \"reconsider\" (verbo base).\n• Regla: \"esperábamos que…\" ➔ We hoped you would + verbo.\n• Descartas: \"We hope you will\" también es cortés, pero más directo; \"We want you to\" y \"You must\" son órdenes.",
    "why_wrong": [
      "Opción correcta: \"We hoped you would reconsider\" = \"esperábamos que reconsiderarais\".",
      "Incorrecto: \"We hope you will\" también es educado, pero más directo; el ejercicio busca la forma suavizada.",
      "Incorrecto: \"We want you to\" es más directo.",
      "Incorrecto: \"You must\" es una orden."
    ],
    "tip_es": "Fórmula de cortesía diplomática (softening): [We hoped you would + infinitivo].",
    "ref": null,
    "human_rule": "Suavizar con el pasado ➔ We hoped you would + verbo.",
    "trigger_anchor": "______ reconsider addressing the flaws ➔ We hoped you would",
    "spanglish_trap": "Elegir el presente porque es lo que dirías en español. Para suavizar, el pasado.",
    "workplace_usage": {
      "scenario": "Revisión de Arquitectura Segura",
      "en": "We hoped you would reconsider addressing the security flaws in the default configuration.",
      "es": "Teníamos la esperanza de que reconsideraran abordar las fallas de seguridad en la configuración predeterminada."
    }
  },
  {
    "id": "cisco-extra-8.1.4-q2",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the diplomatic inquiry: \"__________ if we could enable client hardware address checks to avoid spoofed packets.\"",
    "options": [
      "I wonder",
      "I was wondering",
      "I am wondering",
      "I demand"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una consulta diplomática antes de \"if we could…\".\n• Regla: I was wondering if…\n• Descartas: \"I wonder\" y \"I am wondering\" son más directos; \"I demand\" es una orden.",
    "why_wrong": [
      "Incorrecto: \"I wonder\" es más directo.",
      "Opción correcta: \"I was wondering if…\" = \"me preguntaba si…\".",
      "Incorrecto: \"I am wondering\" es más directo.",
      "Incorrecto: \"I demand\" es una orden."
    ],
    "tip_es": "Petición cortés indirecta: [I was wondering if + sujeto + could/would].",
    "ref": null,
    "human_rule": "\"Me preguntaba si…\" ➔ I was wondering if…",
    "trigger_anchor": "______ if we could enable the checks ➔ I was wondering",
    "spanglish_trap": "Usar el presente. Para suavizar, el pasado: was wondering.",
    "workplace_usage": {
      "scenario": "Configuración de Switches y Seguridad L2",
      "en": "I was wondering if we could enable client hardware address checks to avoid spoofed packets.",
      "es": "Me preguntaba si podríamos habilitar verificaciones de dirección de hardware del cliente para evitar paquetes falsificados."
    }
  },
  {
    "id": "cisco-extra-8.1.4-q3",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the softening advice: \"__________ you should reconsider the authentication method for SSH CLI access.\"",
    "options": [
      "I think definitely",
      "You have to",
      "I thought perhaps",
      "I must say that"
    ],
    "answer": 2,
    "why_correct": "• Pista: se da un consejo (\"you should reconsider\") sin imponerlo.\n• Regla: \"pensé que quizás…\" ➔ I thought perhaps…\n• Descartas: \"I think definitely\" y \"I must say that\" son fuertes; \"You have to\" es una orden.",
    "why_wrong": [
      "Incorrecto: \"I think definitely\" suena demasiado fuerte.",
      "Incorrecto: \"You have to\" es una orden.",
      "Opción correcta: \"I thought perhaps…\" = \"pensé que quizás…\".",
      "Incorrecto: \"I must say that\" suena fuerte."
    ],
    "tip_es": "Atenuación de recomendaciones (hedging): [I thought perhaps + cláusula].",
    "ref": null,
    "human_rule": "Aconsejar con suavidad ➔ I thought perhaps you should…",
    "trigger_anchor": "______ you should reconsider the method ➔ I thought perhaps",
    "spanglish_trap": "Elegir la opción más segura (definitely). Para aconsejar con diplomacia, perhaps + pasado.",
    "workplace_usage": {
      "scenario": "Endurecimiento (Hardening) de Bastionado SSH",
      "en": "I thought perhaps you should reconsider the authentication method for SSH CLI access.",
      "es": "Pensé que tal vez deberías reconsiderar el método de autenticación para el acceso CLI por SSH."
    }
  },
  {
    "id": "cisco-extra-8.1.4-q4",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the polite request: \"__________ resolving the security flaws in the default configuration?\"",
    "options": [
      "Do you mind to",
      "Could you please",
      "Would you like",
      "Would you mind"
    ],
    "answer": 3,
    "why_correct": "• Pista: después del hueco viene un verbo con -ing (\"resolving\").\n• Regla: Would you mind + verbo con -ing.\n• Descartas: \"Do you mind to\" lleva to; \"Could you please\" y \"Would you like\" no van con -ing.",
    "why_wrong": [
      "Incorrecto: después de mind no va \"to\".",
      "Incorrecto: \"Could you please\" va con el verbo base, no con -ing.",
      "Incorrecto: \"Would you like\" va con \"to\", no con -ing.",
      "Opción correcta: \"Would you mind resolving…?\" = \"¿te importaría resolver…?\"."
    ],
    "tip_es": "Regla de oro: [Would you mind + verbo-ing?]. Ejemplo: \"Would you mind resolving...?\".",
    "ref": null,
    "human_rule": "Would you mind + verbo con -ing.",
    "trigger_anchor": "______ resolving the flaws…? (-ing) ➔ Would you mind",
    "spanglish_trap": "Mezclar las fórmulas. Con -ing va Would you mind; con el verbo base, Could you.",
    "workplace_usage": {
      "scenario": "Code Review y Deuda Técnica",
      "en": "Would you mind resolving the security flaws in the default configuration?",
      "es": "¿Te importaría resolver las fallas de seguridad en la configuración predeterminada?"
    }
  },
  {
    "id": "cisco-extra-8.1.4-q5",
    "section": "UE",
    "objective": "UE2",
    "topic": "G09",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the request: \"__________ reviewing the information that we ask users to provide?\"",
    "options": [
      "Would you mind",
      "Could you",
      "May you",
      "Will you please"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco viene un verbo con -ing (\"reviewing\").\n• Regla: Would you mind + verbo con -ing.\n• Descartas: Could you, May you y Will you please van con el verbo base.",
    "why_wrong": [
      "Opción correcta: \"Would you mind reviewing…?\" = \"¿te importaría revisar…?\".",
      "Incorrecto: Could you va con el verbo base.",
      "Incorrecto: \"May you\" no se usa para pedir así.",
      "Incorrecto: \"Will you please\" va con el verbo base."
    ],
    "tip_es": "Verbo con -ing (\"reviewing\") tras el espacio en blanco -> Marca inmediata: \"Would you mind\".",
    "ref": null,
    "human_rule": "Would you mind + verbo con -ing.",
    "trigger_anchor": "______ reviewing the information…? (-ing) ➔ Would you mind",
    "spanglish_trap": "Poner Could you con -ing. Could pide el verbo base.",
    "workplace_usage": {
      "scenario": "Revisión de Formularios GDPR/Privacidad",
      "en": "Would you mind reviewing the information that we ask users to provide?",
      "es": "¿Te importaría revisar la información que solicitamos a los usuarios que proporcionen?"
    }
  },
  {
    "id": "cisco-extra-8.1.4-q6",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the diplomatic request: \"__________ you could help me create an administrative account on the system.\"",
    "options": [
      "I order that",
      "I thought perhaps",
      "You should know",
      "I decide that"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una petición diplomática (\"you could help me…\").\n• Regla: \"pensé que quizás podrías…\" ➔ I thought perhaps you could…\n• Descartas: \"I order that\" y \"I decide that\" son órdenes; \"You should know\" suena a reproche.",
    "why_wrong": [
      "Incorrecto: \"I order that\" es una orden.",
      "Opción correcta: \"I thought perhaps you could…\" = \"pensé que quizás podrías…\".",
      "Incorrecto: \"You should know\" suena a reproche.",
      "Incorrecto: \"I decide that\" es una orden."
    ],
    "tip_es": "Petición colaborativa suavizada: [I thought perhaps you could + infinitivo].",
    "ref": null,
    "human_rule": "Pedir con suavidad ➔ I thought perhaps you could…",
    "trigger_anchor": "______ you could help me create an account ➔ I thought perhaps",
    "spanglish_trap": "Usar la opción que parece la más formal. Pedir con cortesía es más suave, no más formal.",
    "workplace_usage": {
      "scenario": "Aprovisionamiento de Accesos IAM",
      "en": "I thought perhaps you could help me create an administrative account on the system.",
      "es": "Pensé que tal vez podrías ayudarme a crear una cuenta administrativa en el sistema."
    }
  },
  {
    "id": "cisco-extra-8.1.5-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the question about tomorrow's schedule: \"__________ the presentation at the same time tomorrow?\"",
    "options": [
      "Will you be giving",
      "Will you give",
      "Do you give",
      "Are you give"
    ],
    "answer": 0,
    "why_correct": "• Pista: preguntan por lo que estará haciendo a una hora concreta (\"at the same time tomorrow\").\n• Regla: ➔ Will you be giving…? (\"¿estarás dando…?\").\n• Descartas: \"Will you give\" pide un compromiso; \"Do you give\" es presente; \"Are you give\" no existe.",
    "why_wrong": [
      "Opción correcta: \"Will you be giving…?\" pregunta por el plan a esa hora.",
      "Incorrecto: \"Will you give…?\" suena a petición o compromiso, no a pregunta por el horario.",
      "Incorrecto: \"Do you give\" es presente.",
      "Incorrecto: \"Are you give\" no existe."
    ],
    "tip_es": "Future Continuous en preguntas [Will you be + verbo-ing?] = consulta neutral y cortés sobre planes previstos.",
    "ref": null,
    "human_rule": "\"¿Estarás haciendo… a esa hora?\" ➔ Will you be + -ing?",
    "trigger_anchor": "______ the presentation at the same time tomorrow? ➔ Will you be giving",
    "spanglish_trap": "Preguntar con Will you give. Si se trata del horario, Will you be giving.",
    "workplace_usage": {
      "scenario": "Coordinación de Demo Técnica",
      "en": "Will you be giving the presentation at the same time tomorrow?",
      "es": "¿Estarás dando la presentación a la misma hora mañana?"
    }
  },
  {
    "id": "cisco-extra-8.1.5-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"We __________ a meeting regarding this matter next week.\"",
    "options": [
      "will hold",
      "will be holding",
      "hold",
      "are hold"
    ],
    "answer": 1,
    "why_correct": "• Pista: se habla de un plan de la próxima semana (\"a meeting… next week\").\n• Regla: plan en curso ➔ will be holding.\n• Descartas: will hold también es posible, pero este ejercicio busca la forma continua; \"hold\" y \"are hold\" no encajan.",
    "why_wrong": [
      "Incorrecto: \"will hold\" también es válido; este ejercicio busca \"will be holding\".",
      "Opción correcta: \"will be holding\" = \"estaremos celebrando\".",
      "Incorrecto: \"hold\" es presente.",
      "Incorrecto: \"are hold\" no existe."
    ],
    "tip_es": "Evento laboral planificado como rutina futura: [will be + verbo-ing].",
    "ref": null,
    "human_rule": "Plan futuro visto como en marcha ➔ will be + -ing.",
    "trigger_anchor": "We ______ a meeting next week ➔ will be holding",
    "spanglish_trap": "Decir \"are hold\". Con are va -ing: are holding.",
    "workplace_usage": {
      "scenario": "Comité de Cambio de Infraestructura (CAB)",
      "en": "We will be holding a meeting regarding this matter next week.",
      "es": "Estaremos llevando a cabo una reunión respecto a este asunto la próxima semana."
    }
  },
  {
    "id": "cisco-extra-8.1.5-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"I'm afraid we __________ code editors in tomorrow's meeting.\"",
    "options": [
      "won't cover",
      "not covering",
      "won't be covering",
      "don't be covering"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"I'm afraid…\" anuncia algo con cortesía sobre lo que habrá mañana.\n• Regla: ➔ won't be covering (\"no estaremos tratando\").\n• Descartas: \"won't cover\" también es válido; \"not covering\" y \"don't be covering\" no están bien armados.",
    "why_wrong": [
      "Incorrecto: \"won't cover\" también es válido; este ejercicio busca \"won't be covering\".",
      "Incorrecto: \"not covering\" le falta el verbo auxiliar.",
      "Opción correcta: \"won't be covering\" = \"no estaremos tratando\".",
      "Incorrecto: \"don't be covering\" no es una forma válida."
    ],
    "tip_es": "Negativa cortés sobre agenda: [won't be + verbo-ing] (\"won't be covering\").",
    "ref": null,
    "human_rule": "will not be + -ing ➔ \"no estaremos haciendo…\".",
    "trigger_anchor": "I'm afraid we ______ code editors tomorrow ➔ won't be covering",
    "spanglish_trap": "Dejar fuera el auxiliar (\"not covering\"). Hace falta won't be.",
    "workplace_usage": {
      "scenario": "Planificación de Agenda de Sync",
      "en": "I'm afraid we won't be covering code editors in tomorrow's meeting.",
      "es": "Me temo que no estaremos cubriendo editores de código en la reunión de mañana."
    }
  },
  {
    "id": "cisco-extra-8.1.5-q4",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"I imagine we __________ the benefits in no time now that the new rules are in place.\"",
    "options": [
      "see",
      "are seeing",
      "have seen",
      "will be seeing"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"in no time now that the new rules are in place\": predicción hacia adelante.\n• Regla: ➔ will be seeing (\"estaremos viendo\").\n• Descartas: see, are seeing y have seen no apuntan al futuro.",
    "why_wrong": [
      "Incorrecto: see es presente.",
      "Incorrecto: are seeing es presente.",
      "Incorrecto: have seen habla de lo ya visto.",
      "Opción correcta: \"will be seeing\" = \"estaremos viendo\"."
    ],
    "tip_es": "Predicción de un proceso en desarrollo en el futuro próximo: [will be seeing].",
    "ref": null,
    "human_rule": "\"Imagino que estaremos viendo…\" ➔ will be + -ing.",
    "trigger_anchor": "I imagine we ______ the benefits in no time ➔ will be seeing",
    "spanglish_trap": "Usar el presente por \"imagino que vemos\". Para el futuro, will be seeing.",
    "workplace_usage": {
      "scenario": "Evaluación de Políticas de CI/CD",
      "en": "I imagine we will be seeing the benefits in no time now that the new rules are in place.",
      "es": "Imagino que estaremos viendo los beneficios en poco tiempo ahora que las nuevas reglas están en vigor."
    }
  },
  {
    "id": "cisco-extra-8.1.5-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"He __________ the need for us to have a standard single code editor in this afternoon's presentation.\"",
    "options": [
      "will be highlighting",
      "highlights",
      "is highlighting",
      "will highlight"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"in this afternoon's presentation\" marca un momento concreto.\n• Regla: ➔ will be highlighting (\"estará destacando\").\n• Descartas: \"will highlight\" también es válido; \"highlights\" y \"is highlighting\" son presente.",
    "why_wrong": [
      "Opción correcta: \"will be highlighting\" = \"estará destacando\".",
      "Incorrecto: highlights es presente.",
      "Incorrecto: is highlighting es presente.",
      "Incorrecto: \"will highlight\" también es válido; este ejercicio busca \"will be highlighting\"."
    ],
    "tip_es": "Contenido previsto en una ponencia o presentación futura: [will be + verbo-ing].",
    "ref": null,
    "human_rule": "Algo que ocurrirá durante un momento concreto ➔ will be + -ing.",
    "trigger_anchor": "He ______ the need… in this afternoon's presentation ➔ will be highlighting",
    "spanglish_trap": "Usar el presente. Para algo que pasará esta tarde, will be highlighting.",
    "workplace_usage": {
      "scenario": "Estandarización de Herramientas de Dev",
      "en": "He will be highlighting the need for us to have a standard single code editor in this afternoon's presentation.",
      "es": "Él estará destacando la necesidad de que tengamos un único editor de código estándar en la presentación de esta tarde."
    }
  },
  {
    "id": "cisco-extra-8.1.5-q6",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the question: \"__________ this issue in tomorrow's coding standards meeting?\"",
    "options": [
      "Do they discuss",
      "Will they be discussing",
      "Will they discuss",
      "Are they discuss"
    ],
    "answer": 1,
    "why_correct": "• Pista: preguntan por lo que tratarán en la reunión de mañana.\n• Regla: ➔ Will they be discussing…?\n• Descartas: \"Will they discuss\" también es válido; \"Do they discuss\" y \"Are they discuss\" no encajan.",
    "why_wrong": [
      "Incorrecto: \"Do they discuss\" es presente.",
      "Opción correcta: \"Will they be discussing…?\" = \"¿estarán tratando…?\".",
      "Incorrecto: \"Will they discuss\" también es válido; este ejercicio busca \"Will they be discussing\".",
      "Incorrecto: \"Are they discuss\" no existe."
    ],
    "tip_es": "Consulta de agenda de reunión: [Will + sujeto + be + verbo-ing?].",
    "ref": null,
    "human_rule": "¿Estarán haciendo…? ➔ Will they be + -ing?",
    "trigger_anchor": "______ this issue in tomorrow's meeting? ➔ Will they be discussing",
    "spanglish_trap": "Preguntar en presente. Si es mañana, Will they be discussing.",
    "workplace_usage": {
      "scenario": "Estándares de Código y Linter",
      "en": "Will they be discussing this issue in tomorrow's coding standards meeting?",
      "es": "¿Estarán discutiendo este tema en la reunión de estándares de código de mañana?"
    }
  },
  {
    "id": "cisco-extra-8.1.6-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence based on evidence: \"They __________ (find) it impossible unless they upgrade.\"",
    "options": [
      "are going to find",
      "will find",
      "find",
      "are finding"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"unless they upgrade\" y la evidencia: la situación apunta a lo que va a pasar.\n• Regla: predicción con evidencia ➔ are going to + verbo.\n• Descartas: will find y find no usan la evidencia; are finding es presente.",
    "why_wrong": [
      "Opción correcta: \"are going to find\" = \"van a encontrar\" (por la evidencia).",
      "Incorrecto: will find también suena posible, pero no se apoya en la evidencia.",
      "Incorrecto: find es presente simple.",
      "Incorrecto: are finding es presente."
    ],
    "tip_es": "Predicción basada en evidencia técnica clara presente -> \"be going to\".",
    "ref": null,
    "human_rule": "Predicción basada en evidencia ➔ going to.",
    "trigger_anchor": "They ______ it impossible unless they upgrade ➔ are going to find",
    "spanglish_trap": "Usar will para todo. Cuando hay evidencia, going to.",
    "workplace_usage": {
      "scenario": "Obsolescencia de Hardware",
      "en": "They are going to find it impossible unless they upgrade.",
      "es": "Les va a resultar imposible a menos que actualicen."
    }
  },
  {
    "id": "cisco-extra-8.1.6-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence about an intended plan: \"She __________ (give) us a full breakdown of all the issues in her presentation.\"",
    "options": [
      "gives",
      "is going to give",
      "will be given",
      "is give"
    ],
    "answer": 1,
    "why_correct": "• Pista: es un plan de una presentación (\"in her presentation\").\n• Regla: intención ➔ is going to + verbo.\n• Descartas: gives es presente; \"will be given\" es pasiva; \"is give\" no existe.",
    "why_wrong": [
      "Incorrecto: gives es presente.",
      "Opción correcta: \"is going to give\" = \"va a dar\".",
      "Incorrecto: \"will be given\" es pasiva.",
      "Incorrecto: \"is give\" no existe."
    ],
    "tip_es": "Plan o intención previa de un presentador: [is going to + infinitivo].",
    "ref": null,
    "human_rule": "Intención o plan ➔ is going to + verbo.",
    "trigger_anchor": "She ______ us a full breakdown in her presentation ➔ is going to give",
    "spanglish_trap": "Elegir la pasiva. Aquí ella actúa: is going to give.",
    "workplace_usage": {
      "scenario": "Informe de Bugs Críticos",
      "en": "She is going to give us a full breakdown of all the issues in her presentation.",
      "es": "Ella nos va a dar un desglose completo de todos los problemas en su presentación."
    }
  },
  {
    "id": "cisco-extra-8.1.6-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence about a past unfulfilled intention: \"You said you __________ (take) a break after you’d finished those updates. Come on, let’s go for a coffee.\"",
    "options": [
      "are going to take",
      "will take",
      "were going to take",
      "would have taken"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"You said you ______… Come on, let's go\": una intención que no se cumplió.\n• Regla: intención pasada ➔ were going to + verbo.\n• Descartas: \"are going to\" y will hablan del futuro; \"would have taken\" dice que ya no pudo.",
    "why_wrong": [
      "Incorrecto: \"are going to take\" habla del presente.",
      "Incorrecto: will take habla del futuro.",
      "Opción correcta: \"were going to take\" = \"ibas a tomarte\".",
      "Incorrecto: \"would have taken\" dice que lo habría hecho si algo no hubiera pasado."
    ],
    "tip_es": "Intención expresada en el pasado: [was / were going to + infinitivo].",
    "ref": null,
    "human_rule": "Intención que no se cumplió ➔ was / were going to + verbo.",
    "trigger_anchor": "You said you ______ a break… Come on ➔ were going to take",
    "spanglish_trap": "Usar el futuro por \"ibas a\". Para algo que se iba a hacer, were going to.",
    "workplace_usage": {
      "scenario": "Bienestar y Cultura de Equipo",
      "en": "You said you were going to take a break after you’d finished those updates. Come on, let’s go for a coffee.",
      "es": "Dijiste que ibas a tomarte un descanso después de que terminaras esas actualizaciones. Vamos por un café."
    }
  },
  {
    "id": "cisco-extra-8.1.6-q4",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence indicating an immediate firm intention: \"I __________ (sign in) immediately.\"",
    "options": [
      "sign in",
      "will be signed in",
      "was going to sign in",
      "am going to sign in"
    ],
    "answer": 3,
    "why_correct": "• Pista: es una intención firme e inmediata (\"immediately\").\n• Regla: ➔ am going to + verbo.\n• Descartas: sign in es presente; \"will be signed in\" es pasiva; \"was going to\" es pasado.",
    "why_wrong": [
      "Incorrecto: sign in es presente.",
      "Incorrecto: \"will be signed in\" es pasiva.",
      "Incorrecto: \"was going to\" es pasado.",
      "Opción correcta: \"am going to sign in\" = \"voy a iniciar sesión\"."
    ],
    "tip_es": "Intención firme e inminente: [am going to + infinitivo].",
    "ref": null,
    "human_rule": "Intención inmediata ➔ I am going to + verbo.",
    "trigger_anchor": "I ______ immediately ➔ am going to sign in",
    "spanglish_trap": "Usar el presente por \"inicio sesión ya\". Para una intención, going to.",
    "workplace_usage": {
      "scenario": "Respuesta a Incidente en Guardia",
      "en": "I am going to sign in immediately.",
      "es": "Voy a iniciar sesión inmediatamente."
    }
  },
  {
    "id": "cisco-extra-8.1.6-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the dialogue: \"I didn’t think I needed any help, but it’s more complicated than I thought. I __________ (need) it after all. Do you have a minute to help me?\"",
    "options": [
      "am going to need",
      "needed",
      "will have needed",
      "need"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"I didn't think I needed any help, but it's more complicated\": se acaba de dar cuenta de algo.\n• Regla: ➔ am going to need.\n• Descartas: needed es pasado; \"will have needed\" es otra estructura; need es presente.",
    "why_wrong": [
      "Opción correcta: \"am going to need\" = \"voy a necesitar\".",
      "Incorrecto: needed es pasado.",
      "Incorrecto: \"will have needed\" no encaja con \"after all\".",
      "Incorrecto: need es presente simple."
    ],
    "tip_es": "Conclusión basada en la evidencia de la complejidad de la tarea: \"am going to need\".",
    "ref": null,
    "human_rule": "Darse cuenta de algo que viene ➔ am going to need.",
    "trigger_anchor": "…it's more complicated than I thought. I ______ it after all ➔ am going to need",
    "spanglish_trap": "Usar el presente. Si lo que viene se nota ahora, going to.",
    "workplace_usage": {
      "scenario": "Resolución de Tareas Complejas",
      "en": "I didn’t think I needed any help, but it’s more complicated than I thought. I am going to need it after all.",
      "es": "No creí que necesitara ayuda, pero es más complicado de lo que pensé. Voy a necesitarla después de todo."
    }
  },
  {
    "id": "cisco-extra-8.1.6-q6",
    "section": "UE",
    "objective": "UE3",
    "topic": "G16",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the warning: \"__________ (be) a late night unless we focus on solving this.\"",
    "options": [
      "It will be",
      "It's going to be",
      "There is going to be",
      "It is"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una advertencia con evidencia (\"unless we focus\").\n• Regla: ➔ It's going to be (\"va a ser\").\n• Descartas: \"It will be\" y \"There is going to be\" también pueden sonar bien; \"It is\" no marca el futuro.",
    "why_wrong": [
      "Incorrecto: \"It will be\" también es posible; este ejercicio busca la forma con going to.",
      "Opción correcta: \"It's going to be\" = \"va a ser\".",
      "Incorrecto: \"There is going to be\" también es válido; el ejercicio busca \"It's going to be\".",
      "Incorrecto: \"It is\" no marca el futuro."
    ],
    "tip_es": "Predicción idiomática de jornadas intensas: [It's going to be a late night].",
    "ref": null,
    "human_rule": "Advertencia con evidencia ➔ It's going to be…",
    "trigger_anchor": "______ a late night unless we focus ➔ It's going to be",
    "spanglish_trap": "Usar el presente. Si se avisa de algo que viene, going to.",
    "workplace_usage": {
      "scenario": "Depuración de Bug Bloqueante",
      "en": "It's going to be a late night unless we focus on solving this.",
      "es": "Va a ser una noche larga a menos que nos concentremos en resolver esto."
    }
  },
  {
    "id": "cisco-extra-8.2.1-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"We __________ format our code as we prefer, as we are all experienced engineers.\"",
    "options": [
      "can",
      "must",
      "should",
      "might"
    ],
    "answer": 0,
    "why_correct": "• Pista: hay libertad (\"as we prefer\").\n• Regla: permiso o libertad ➔ can.\n• Descartas: must y should dicen que hay que hacerlo; might habla de posibilidad.",
    "why_wrong": [
      "Opción correcta: can = \"podemos\" (tenemos libertad).",
      "Incorrecto: must dice que es obligatorio.",
      "Incorrecto: should dice que es lo recomendable; aquí hay libertad.",
      "Incorrecto: might habla de posibilidad, no de libertad (también podría sonar posible; el ejercicio busca can)."
    ],
    "tip_es": "Libertad de acción y capacidad general en presente -> \"can\".",
    "ref": null,
    "human_rule": "Libertad ➔ can.",
    "trigger_anchor": "format our code as we prefer (libertad) ➔ can",
    "spanglish_trap": "Usar must o should por sonar formal. Si hay libertad, es can.",
    "workplace_usage": {
      "scenario": "Guías de Estilo de Equipo",
      "en": "We can format our code as we prefer, as we are all experienced engineers.",
      "es": "Podemos formatear nuestro código como prefiramos, ya que todos somos ingenieros experimentados."
    }
  },
  {
    "id": "cisco-extra-8.2.1-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"We __________ easily revisit the idea once we had established the potential benefits.\"",
    "options": [
      "can",
      "could",
      "will be able to",
      "must"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"had established\" ubica la frase en el pasado.\n• Regla: capacidad en pasado ➔ could.\n• Descartas: can es presente; will be able to es futuro; must es obligación.",
    "why_wrong": [
      "Incorrecto: can es presente.",
      "Opción correcta: could = \"podíamos\".",
      "Incorrecto: will be able to es futuro.",
      "Incorrecto: must es obligación."
    ],
    "tip_es": "Capacidad en el pasado subordinada a un hecho pasado (\"had established\"): usa \"could\".",
    "ref": null,
    "human_rule": "Capacidad en pasado ➔ could.",
    "trigger_anchor": "We ______ easily revisit… once we had established (pasado) ➔ could",
    "spanglish_trap": "Elegir can por costumbre. Mira el tiempo: si es pasado, could.",
    "workplace_usage": {
      "scenario": "Evaluación de Propuestas de Arquitectura",
      "en": "We could easily revisit the idea once we had established the potential benefits.",
      "es": "Pudimos retomar fácilmente la idea una vez que habíamos establecido los beneficios potenciales."
    }
  },
  {
    "id": "cisco-extra-8.2.1-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the inverted sentence: \"Under no circumstances __________ we release new software without testing it.\"",
    "options": [
      "do",
      "shouldn't",
      "can",
      "we can"
    ],
    "answer": 2,
    "why_correct": "• Pista: la frase empieza con \"Under no circumstances\" y el sujeto \"we\" ya está después.\n• Regla: expresión negativa + can + sujeto + verbo.\n• Descartas: B duplica la negación; D deja \"we\" antes del verbo pequeño; A también puede ser válida, pero la frase pide \"no podemos\".",
    "why_wrong": [
      "Incorrecto: \"Under no circumstances do we…\" también es inglés válido; este ejercicio busca can (\"no se puede\").",
      "Incorrecto: shouldn't ya es negativo, y la expresión ya niega; se duplica la negación.",
      "Opción correcta: \"can we release\" = \"no podemos liberar\".",
      "Incorrecto: \"we can\" deja a quien actúa antes del verbo pequeño."
    ],
    "tip_es": "Inversión negativa: [Under no circumstances + modal can + sujeto + verbo base].",
    "ref": null,
    "human_rule": "Under no circumstances + can + sujeto + verbo.",
    "trigger_anchor": "Under no circumstances ______ we release… ➔ can",
    "spanglish_trap": "Escribir la negación dos veces (\"shouldn't\" después de \"Under no circumstances\"). La expresión ya niega.",
    "workplace_usage": {
      "scenario": "Política de Despliegue en Producción",
      "en": "Under no circumstances can we release new software without testing it.",
      "es": "Bajo ninguna circunstancia podemos lanzar nuevo software sin probarlo."
    }
  },
  {
    "id": "cisco-extra-8.2.1-q4",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"We __________ revisit the idea once we’ve spent more time analysing the potential benefits.\"",
    "options": [
      "could",
      "can have",
      "were able to",
      "will be able to"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"once we've spent more time\" apunta al futuro.\n• Regla: capacidad futura ➔ will be able to.\n• Descartas: could y were able to son pasado; \"can have\" no existe.",
    "why_wrong": [
      "Incorrecto: could aquí sería pasado.",
      "Incorrecto: \"can have\" no existe.",
      "Incorrecto: were able to es pasado.",
      "Opción correcta: \"will be able to\" = \"podremos\"."
    ],
    "tip_es": "Capacidad en el futuro conectada con cláusula temporal de presente: \"will be able to\".",
    "ref": null,
    "human_rule": "Capacidad futura ➔ will be able to.",
    "trigger_anchor": "once we've spent more time… (futuro) ➔ will be able to",
    "spanglish_trap": "Usar can para el futuro. Can no tiene futuro; se usa will be able to.",
    "workplace_usage": {
      "scenario": "Roadmap de Producto Q1",
      "en": "We will be able to revisit the idea once we’ve spent more time analysing the potential benefits.",
      "es": "Podremos retomar la idea una vez que hayamos dedicado más tiempo a analizar los beneficios potenciales."
    }
  },
  {
    "id": "cisco-extra-8.2.1-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"We __________ see all of the information because the debugging is not enabled.\"",
    "options": [
      "cannot",
      "couldn't",
      "must not",
      "might not"
    ],
    "answer": 0,
    "why_correct": "• Pista: la causa está en el presente (\"is not enabled\").\n• Regla: no es posible ahora ➔ cannot.\n• Descartas: couldn't habla del pasado; must not es prohibición; might not es duda.",
    "why_wrong": [
      "Opción correcta: cannot = \"no podemos\".",
      "Incorrecto: couldn't habla del pasado.",
      "Incorrecto: must not sería una prohibición.",
      "Incorrecto: might not significa \"quizás no\"; aquí es seguro."
    ],
    "tip_es": "Incapacidad técnica en presente derivada de una causa objetiva -> \"cannot\".",
    "ref": null,
    "human_rule": "Imposible ahora ➔ cannot.",
    "trigger_anchor": "because the debugging is not enabled (presente) ➔ cannot",
    "spanglish_trap": "Usar must not pensando en \"no se puede\". Must not es \"prohibido\".",
    "workplace_usage": {
      "scenario": "Logs y Telemetría",
      "en": "We cannot see all of the information because the debugging is not enabled.",
      "es": "No podemos ver toda la información porque la depuración no está habilitada."
    }
  },
  {
    "id": "cisco-extra-8.2.1-q6",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"We __________ finish before the deadline because the integration took longer than planned.\"",
    "options": [
      "cannot",
      "couldn't",
      "won't be able to",
      "shouldn't"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"took longer\" está en pasado.\n• Regla: no pudimos (pasado) ➔ couldn't.\n• Descartas: cannot es presente; shouldn't es consejo; \"won't be able to\" habla del futuro.",
    "why_wrong": [
      "Incorrecto: cannot es presente.",
      "Opción correcta: couldn't = \"no pudimos\".",
      "Incorrecto: \"won't be able to\" habla del futuro, y la causa (\"took longer\") ya pasó.",
      "Incorrecto: shouldn't es un consejo, no una imposibilidad."
    ],
    "tip_es": "Incapacidad de completar algo en el pasado: \"couldn't\" / \"weren't able to\".",
    "ref": null,
    "human_rule": "No pudimos (pasado) ➔ couldn't.",
    "trigger_anchor": "because the integration took longer (pasado) ➔ couldn't",
    "spanglish_trap": "Elegir cannot porque \"no podemos\" suena igual. Mira el tiempo del resto de la frase.",
    "workplace_usage": {
      "scenario": "Postmortem de Entrega",
      "en": "We couldn't finish before the deadline because the integration took longer than planned.",
      "es": "No pudimos terminar antes de la fecha límite porque la integración tardó más de lo planeado."
    }
  },
  {
    "id": "cisco-extra-8.2.2-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid modal option(s) to complete the question: \"Do you need more help, or __________ finish the updates by Friday afternoon?\"",
    "options": [
      "can you / will you be able to",
      "must you",
      "could you have",
      "did you finish"
    ],
    "answer": 0,
    "why_correct": "• Pista: preguntan si alguien puede terminar para el viernes (futuro).\n• Regla: \"puedes / podrás\" ➔ can you / will you be able to.\n• Descartas: \"must you\" pregunta si es obligatorio; \"could you have\" y \"did you finish\" hablan del pasado.",
    "why_wrong": [
      "Opción correcta: \"can you / will you be able to\" pregunta por la capacidad hacia adelante.",
      "Incorrecto: \"must you\" pregunta si es obligatorio.",
      "Incorrecto: \"could you have\" habla del pasado.",
      "Incorrecto: \"did you finish\" habla del pasado."
    ],
    "tip_es": "Capacidad para una fecha límite futura: \"can you\" y \"will you be able to\" son equivalentes.",
    "ref": null,
    "human_rule": "Pregunta de capacidad hacia el futuro ➔ can you / will you be able to.",
    "trigger_anchor": "…finish the updates by Friday (futuro) ➔ can you / will you be able to",
    "spanglish_trap": "Preguntar en pasado cuando se habla del viernes. Si es futuro, can / will be able to.",
    "workplace_usage": {
      "scenario": "Daily Stand-up y Planificación de Cierre",
      "en": "Do you need more help, or can you finish the updates by Friday afternoon?",
      "es": "¿Necesitas más ayuda o puedes / podrás terminar las actualizaciones para el viernes por la tarde?"
    }
  },
  {
    "id": "cisco-extra-8.2.2-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid modal option(s): \"The team’s experience meant they __________ complete the tasks easily.\"",
    "options": [
      "can",
      "could / were able to",
      "will be able to",
      "must"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"meant\" está en pasado.\n• Regla: capacidad en pasado ➔ could / were able to.\n• Descartas: can es presente; will be able to es futuro; must es obligación.",
    "why_wrong": [
      "Incorrecto: can es presente.",
      "Opción correcta: could / were able to = \"podían\".",
      "Incorrecto: will be able to es futuro.",
      "Incorrecto: must es obligación."
    ],
    "tip_es": "Capacidad en el pasado: \"could\" y \"were able to\" son correctas para habilidad general.",
    "ref": null,
    "human_rule": "Capacidad en pasado ➔ could / were able to.",
    "trigger_anchor": "experience meant they ______ complete (pasado) ➔ could / were able to",
    "spanglish_trap": "Elegir can por parecerse a \"podían\". Si es pasado, could.",
    "workplace_usage": {
      "scenario": "Evaluación de Desempeño Técnico",
      "en": "The team’s experience meant they could complete the tasks easily.",
      "es": "La experiencia del equipo significó que pudieron / fueron capaces de completar las tareas fácilmente."
    }
  },
  {
    "id": "cisco-extra-8.2.2-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the inquiry: \"I thought you said you had no experience with this particular software. Are you sure you __________ manage?\"",
    "options": [
      "could have",
      "were able to",
      "can",
      "must"
    ],
    "answer": 2,
    "why_correct": "• Pista: preguntan por capacidad ahora (\"are you sure\").\n• Regla: capacidad presente ➔ can.\n• Descartas: \"could have\" y \"were able to\" son pasado; must es obligación.",
    "why_wrong": [
      "Incorrecto: \"could have\" habla del pasado.",
      "Incorrecto: were able to habla del pasado.",
      "Opción correcta: can = \"puedes\".",
      "Incorrecto: must es obligación."
    ],
    "tip_es": "\"Are you sure you can manage?\" = Pregunta estándar en soporte para indagar capacidad presente.",
    "ref": null,
    "human_rule": "Capacidad presente ➔ can.",
    "trigger_anchor": "Are you sure you ______ manage? (ahora) ➔ can",
    "spanglish_trap": "Usar un tiempo pasado porque la frase anterior dice \"thought\". La pregunta es sobre ahora.",
    "workplace_usage": {
      "scenario": "Onboarding de Nuevas Herramientas",
      "en": "Are you sure you can manage?",
      "es": "¿Estás seguro de que puedes arreglártelas / gestionarlo?"
    }
  },
  {
    "id": "cisco-extra-8.2.2-q4",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid modal option(s): \"Despite having very little knowledge of the situation, she __________ understand the urgency in finding a solution.\"",
    "options": [
      "can",
      "will be able to",
      "must",
      "was able to / could"
    ],
    "answer": 3,
    "why_correct": "• Pista: habla de una situación pasada.\n• Regla: capacidad pasada ➔ was able to / could.\n• Descartas: can y will be able to son presente y futuro; must es obligación.",
    "why_wrong": [
      "Incorrecto: can es presente.",
      "Incorrecto: will be able to es futuro.",
      "Incorrecto: must es obligación.",
      "Opción correcta: \"was able to / could\" = \"podía\" (pasado)."
    ],
    "tip_es": "Con verbos de percepción cognitiva en pasado (understand, see, hear), tanto \"could\" como \"was able to\" son correctos.",
    "ref": null,
    "human_rule": "Capacidad pasada ➔ was able to / could.",
    "trigger_anchor": "she ______ understand the urgency (pasado) ➔ was able to / could",
    "spanglish_trap": "Elegir can o will be able to sin mirar el tiempo. Aquí la historia ya pasó.",
    "workplace_usage": {
      "scenario": "Gestión de Crisis de TI",
      "en": "Despite having very little knowledge of the situation, she was able to understand the urgency.",
      "es": "A pesar de tener muy poco conocimiento de la situación, pudo / fue capaz de comprender la urgencia."
    }
  },
  {
    "id": "cisco-extra-8.2.2-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the question: \"__________ upgrade your phone, first? If so, there should be no problem with the new software.\"",
    "options": [
      "Are you able to",
      "Were you able to",
      "Could you have",
      "Did you can"
    ],
    "answer": 0,
    "why_correct": "• Pista: preguntan si pudo hacerlo o puede hacerlo ahora (\"If so, there should be no problem\").\n• Regla: pregunta de capacidad presente ➔ Are you able to + verbo.\n• Descartas: \"Were you able to\" es pasado; \"Could you have\" y \"Did you can\" no encajan.",
    "why_wrong": [
      "Opción correcta: \"Are you able to upgrade\" = \"¿puedes actualizar?\".",
      "Incorrecto: \"Were you able to\" habla del pasado, y la frase sigue en presente.",
      "Incorrecto: \"Could you have\" necesita una 3.ª forma.",
      "Incorrecto: \"Did you can\" no existe."
    ],
    "tip_es": "Consulta formal de viabilidad presente: [Are you able to + infinitivo?].",
    "ref": null,
    "human_rule": "¿Puedes…? (ahora) ➔ Are you able to…",
    "trigger_anchor": "______ upgrade your phone, first? If so… (ahora) ➔ Are you able to",
    "spanglish_trap": "Traducir \"¿pudiste?\" como \"did you can\". Can no se usa con did.",
    "workplace_usage": {
      "scenario": "Soporte Técnico de Aplicación Móvil",
      "en": "Are you able to upgrade your phone, first? If so, there should be no problem.",
      "es": "¿Puedes / Eres capaz de actualizar tu teléfono primero? Si es así, no debería haber problema."
    }
  },
  {
    "id": "cisco-extra-8.2.2-q6",
    "section": "UE",
    "objective": "UE3",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the urgent request: \"__________ give me an answer? They’re putting pressure on me to make a decision, but I need your answer first.\"",
    "options": [
      "Were you able to",
      "Can you",
      "Could you have been",
      "Did you can"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una petición urgente ahora.\n• Regla: petición directa ➔ Can you + verbo.\n• Descartas: \"Were you able to\" es pasado; \"Could you have been\" y \"Did you can\" no encajan.",
    "why_wrong": [
      "Incorrecto: \"Were you able to\" habla del pasado.",
      "Opción correcta: \"Can you give me an answer?\" = \"¿puedes darme una respuesta?\".",
      "Incorrecto: \"Could you have been\" necesita una 3.ª forma.",
      "Incorrecto: \"Did you can\" no existe."
    ],
    "tip_es": "Petición directa de respuesta urgente en presente -> \"Can you\".",
    "ref": null,
    "human_rule": "Petición directa ahora ➔ Can you + verbo.",
    "trigger_anchor": "______ give me an answer? (petición) ➔ Can you",
    "spanglish_trap": "Usar did con can. Can no se combina con did.",
    "workplace_usage": {
      "scenario": "Aprobación de Cambio Urgente",
      "en": "Can you give me an answer? They’re putting pressure on me to make a decision.",
      "es": "¿Puedes darme una respuesta? Me están presionando para tomar una decisión."
    }
  },
  {
    "id": "cisco-extra-8.2.3-q1",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the security deduction: \"The IP address spoofing __________ have been used by network intruders to overcome network security measures.\"",
    "options": [
      "might",
      "should",
      "can",
      "will"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una posibilidad sobre algo que pudo haber pasado.\n• Regla: posibilidad en el pasado ➔ might have + 3.ª forma.\n• Descartas: should have es un reproche; can have no se usa; will have habla de un futuro ya cumplido.",
    "why_wrong": [
      "Opción correcta: \"might have been used\" = \"pudo haberse usado\".",
      "Incorrecto: should have es un reproche.",
      "Incorrecto: can have no se usa para deducir.",
      "Incorrecto: will have habla de algo que estará hecho en el futuro."
    ],
    "tip_es": "Hipótesis sobre causa de incidente en el pasado: [might + have + participio pasado].",
    "ref": null,
    "human_rule": "Posibilidad en el pasado ➔ might have + 3.ª forma.",
    "trigger_anchor": "IP spoofing ______ have been used by intruders ➔ might",
    "spanglish_trap": "Usar will have porque suena a seguro. Para una posibilidad en el pasado, might have.",
    "workplace_usage": {
      "scenario": "Análisis Forense de Red (DFIR)",
      "en": "The IP address spoofing might have been used by network intruders to overcome network security measures.",
      "es": "La suplantación de dirección IP podría haber sido utilizada por intrusos de red para superar las medidas de seguridad."
    }
  },
  {
    "id": "cisco-extra-8.2.3-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"We __________ be able to develop the necessary comprehensive procedure if we have enough time.\"",
    "options": [
      "must have",
      "should",
      "ought",
      "can have"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una expectativa razonable con condición (\"if we have enough time\").\n• Regla: expectativa ➔ should + be able to.\n• Descartas: \"must have\" y \"can have\" son del pasado; ought necesita \"to\".",
    "why_wrong": [
      "Incorrecto: \"must have\" habla del pasado.",
      "Opción correcta: \"should be able to\" = \"deberíamos poder\".",
      "Incorrecto: ought necesita \"to\" (ought to be able to).",
      "Incorrecto: \"can have\" no se usa así."
    ],
    "tip_es": "Expectativa razonable en el futuro: [should be able to + infinitivo].",
    "ref": null,
    "human_rule": "Expectativa ➔ should + be able to.",
    "trigger_anchor": "We ______ be able to develop… if we have enough time ➔ should",
    "spanglish_trap": "Poner have después del modal cuando habla del futuro. Have + 3.ª forma es para el pasado.",
    "workplace_usage": {
      "scenario": "Planificación de Procedimientos Operativos",
      "en": "We should be able to develop the necessary comprehensive procedure if we have enough time.",
      "es": "Deberíamos ser capaces de desarrollar el procedimiento integral necesario si tenemos suficiente tiempo."
    }
  },
  {
    "id": "cisco-extra-8.2.3-q3",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid modal option(s): \"Password protection policies __________ be able to prevent unauthorized access to sensitive information.\"",
    "options": [
      "must have",
      "ought",
      "may / should",
      "can have been"
    ],
    "answer": 2,
    "why_correct": "• Pista: es una expectativa sobre lo que logran las políticas.\n• Regla: expectativa ➔ may / should + be able to.\n• Descartas: \"must have\" y \"can have been\" son del pasado; ought necesita \"to\".",
    "why_wrong": [
      "Incorrecto: \"must have\" habla del pasado.",
      "Incorrecto: ought necesita \"to\".",
      "Opción correcta: \"may / should be able to\" = \"podrían / deberían poder\".",
      "Incorrecto: \"can have been\" habla del pasado."
    ],
    "tip_es": "Capacidad o expectativa de efectividad técnica: \"may\" y \"should\" son alternativas válidas.",
    "ref": null,
    "human_rule": "Expectativa ➔ may / should + be able to.",
    "trigger_anchor": "Policies ______ be able to prevent access (se espera) ➔ may / should",
    "spanglish_trap": "Mezclar tiempos con have. Si habla de lo que se espera ahora, va sin have.",
    "workplace_usage": {
      "scenario": "Políticas de Seguridad IAM",
      "en": "Password protection policies should be able to prevent unauthorized access to sensitive information.",
      "es": "Las políticas de protección por contraseña pueden / deberían ser capaces de prevenir el acceso no autorizado."
    }
  },
  {
    "id": "cisco-extra-8.2.3-q4",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the third conditional deduction: \"We __________ have been able to bypass network security measures with this method if we had tried earlier.\"",
    "options": [
      "should",
      "must",
      "will",
      "might"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"if we had tried earlier\" habla de algo que no pasó y pudo pasar.\n• Regla: posibilidad en el pasado ➔ might have + 3.ª forma.\n• Descartas: should have es un reproche; must have es seguro; will have no encaja con un \"si\" del pasado.",
    "why_wrong": [
      "Incorrecto: should have es un reproche.",
      "Incorrecto: must have diría que seguro lo hicimos.",
      "Incorrecto: will have habla del futuro.",
      "Opción correcta: \"might have been able to\" = \"quizás habríamos podido\"."
    ],
    "tip_es": "Tercer condicional de posibilidad: [might have been able to... if + Past Perfect].",
    "ref": null,
    "human_rule": "Posibilidad en el pasado ➔ might have + 3.ª forma.",
    "trigger_anchor": "…if we had tried earlier ➔ We ______ have been able ➔ might",
    "spanglish_trap": "Elegir must por \"seguro\". Con un \"si\" del pasado que no ocurrió, might.",
    "workplace_usage": {
      "scenario": "Pentesting y Red Team",
      "en": "We might have been able to bypass network security measures with this method if we had tried earlier.",
      "es": "Podríamos haber sido capaces de evadir las medidas de seguridad de red con este método si lo hubiéramos intentado antes."
    }
  },
  {
    "id": "cisco-extra-8.2.3-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the valid negative modal option(s): \"We have more than enough time to meet this deadline, so it really __________ be a problem.\"",
    "options": [
      "won’t / shouldn’t",
      "must",
      "might not have",
      "can't have been"
    ],
    "answer": 0,
    "why_correct": "• Pista: sobra el tiempo, así que se espera que no haya problema.\n• Regla: expectativa negativa ➔ won't / shouldn't + be.\n• Descartas: must diría lo contrario; \"might not have\" y \"can't have been\" hablan del pasado.",
    "why_wrong": [
      "Opción correcta: \"won't / shouldn't be\" = \"no debería ser\".",
      "Incorrecto: must diría que seguro es un problema.",
      "Incorrecto: \"might not have\" habla del pasado.",
      "Incorrecto: \"can't have been\" habla del pasado."
    ],
    "tip_es": "Predicción negativa fundada en hechos favorables: \"won't\" y \"shouldn't\" son opciones válidas.",
    "ref": null,
    "human_rule": "Se espera que no ➔ won't / shouldn't + be.",
    "trigger_anchor": "more than enough time… it really ______ be a problem ➔ won't / shouldn't",
    "spanglish_trap": "Poner have en una frase del presente. Si habla de lo que se espera, va sin have.",
    "workplace_usage": {
      "scenario": "Gestión de Entregables de Sprint",
      "en": "We have more than enough time to meet this deadline, so it really shouldn’t be a problem.",
      "es": "Tenemos tiempo más que suficiente para cumplir este plazo, por lo que realmente no será / no debería ser un problema."
    }
  },
  {
    "id": "cisco-extra-8.2.3-q6",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the deduction: \"A mistake __________ have been made at an earlier point in the process.\"",
    "options": [
      "can",
      "might",
      "should to",
      "will"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una posibilidad sobre el pasado.\n• Regla: posibilidad en el pasado ➔ might have + 3.ª forma.\n• Descartas: can have no se usa; \"should to\" lleva to; will habla del futuro.",
    "why_wrong": [
      "Incorrecto: can have no se usa para deducir.",
      "Opción correcta: \"might have been made\" = \"pudo haberse cometido\".",
      "Incorrecto: después de should no va to.",
      "Incorrecto: will habla del futuro."
    ],
    "tip_es": "Deducción forense de posibilidad pasada: [might + have been + participio].",
    "ref": null,
    "human_rule": "Posibilidad en el pasado ➔ might have + 3.ª forma.",
    "trigger_anchor": "A mistake ______ have been made earlier ➔ might",
    "spanglish_trap": "Elegir will pensando en \"pudo ser\". Will no mira al pasado.",
    "workplace_usage": {
      "scenario": "Análisis Causa Raíz (RCA)",
      "en": "A mistake might have been made at an earlier point in the process.",
      "es": "Podría haberse cometido un error en un punto anterior del proceso."
    }
  },
  {
    "id": "cisco-extra-8.2.4-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the obligation passive: \"This report __________ by the end of tomorrow.\"",
    "options": [
      "must be done",
      "must do",
      "must been done",
      "must to be done"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"This report\" recibe la acción y hay una obligación.\n• Regla: \"se debe + hecho\" ➔ must be + 3.ª forma.\n• Descartas: \"must do\" hace que el informe actúe; \"must been\" y \"must to be\" no existen.",
    "why_wrong": [
      "Opción correcta: \"must be done\" = \"debe hacerse\".",
      "Incorrecto: \"must do\" dice que el informe lo hace.",
      "Incorrecto: después de must va \"be\", no \"been\".",
      "Incorrecto: después de must nunca va \"to\"."
    ],
    "tip_es": "Fórmula de pasiva modal presente: [Modal + be + V3]. Jamás \"must to be\" ni \"must been\".",
    "ref": null,
    "human_rule": "Después de un modal: be + 3.ª forma, sin to.",
    "trigger_anchor": "This report ______ by tomorrow (se debe hacer) ➔ must be done",
    "spanglish_trap": "Poner to (\"must to be\"). Después de un modal no va to.",
    "workplace_usage": {
      "scenario": "Entrega de Auditoría de Cumplimiento",
      "en": "This report must be done by the end of tomorrow.",
      "es": "Este informe debe estar terminado para el final del día de mañana."
    }
  },
  {
    "id": "cisco-extra-8.2.4-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the past criticism passive: \"A stronger password __________ used.\"",
    "options": [
      "should have be",
      "should have been",
      "should been",
      "should to have been"
    ],
    "answer": 1,
    "why_correct": "• Pista: se critica algo del pasado que ya no se puede cambiar (\"debió usarse\").\n• Regla: \"debió + hecho\" ➔ should have been + 3.ª forma.\n• Descartas: \"should have be\", \"should been\" y \"should to have been\" no existen.",
    "why_wrong": [
      "Incorrecto: después de have va \"been\", no \"be\".",
      "Opción correcta: \"should have been used\" = \"debió haberse usado\".",
      "Incorrecto: falta \"have\" antes de \"been\".",
      "Incorrecto: después de should no va \"to\"."
    ],
    "tip_es": "Pasiva modal pasada: [should have been + participio pasado]. Indica lo que debió hacerse pero no se hizo.",
    "ref": null,
    "human_rule": "\"Debió haberse usado\" ➔ should have been used.",
    "trigger_anchor": "A stronger password ______ used (debió) ➔ should have been",
    "spanglish_trap": "Olvidar \"have\" o escribir \"be\" en vez de \"been\". Es should + have + been.",
    "workplace_usage": {
      "scenario": "Postmortem tras Filtración de Credenciales",
      "en": "A stronger password should have been used.",
      "es": "Se debería haber utilizado una contraseña más fuerte."
    }
  },
  {
    "id": "cisco-extra-8.2.4-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the passive expectation: \"We expect the installation __________ completed by then.\"",
    "options": [
      "should been",
      "should to be",
      "should be",
      "should being"
    ],
    "answer": 2,
    "why_correct": "• Pista: la instalación recibe la acción y se habla de lo que se espera hacia adelante.\n• Regla: \"debe + hecho\" ➔ should be + 3.ª forma.\n• Descartas: \"should been\", \"should to be\" y \"should being\" no existen.",
    "why_wrong": [
      "Incorrecto: después de should va \"be\", no \"been\".",
      "Incorrecto: después de should no va \"to\".",
      "Opción correcta: \"should be completed\" = \"debe estar completada\".",
      "Incorrecto: \"should being\" no existe."
    ],
    "tip_es": "Regla modal pasiva: [should be + participio pasado].",
    "ref": null,
    "human_rule": "Después de should: be + 3.ª forma.",
    "trigger_anchor": "the installation ______ completed (debe estar) ➔ should be",
    "spanglish_trap": "Poner \"been\" o \"to\" después de should. Después de should va solo \"be\".",
    "workplace_usage": {
      "scenario": "Despliegue de Servidores",
      "en": "We expect the installation should be completed by then.",
      "es": "Esperamos que la instalación deba estar completada para entonces."
    }
  },
  {
    "id": "cisco-extra-8.2.4-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the possibility sentence: \"The impact of the new antivirus solution __________ significant.\"",
    "options": [
      "might to be",
      "might been",
      "might being",
      "might be"
    ],
    "answer": 3,
    "why_correct": "• Pista: es una posibilidad sobre el presente.\n• Regla: might + be.\n• Descartas: \"might to be\" lleva to; \"might been\" no tiene be; \"might being\" no existe.",
    "why_wrong": [
      "Incorrecto: después de might no va \"to\".",
      "Incorrecto: falta be antes de been.",
      "Incorrecto: \"might being\" no existe.",
      "Opción correcta: \"might be significant\" = \"podría ser significativo\"."
    ],
    "tip_es": "Modal simple: [might + be + adjetivo].",
    "ref": null,
    "human_rule": "Posibilidad en el presente ➔ might + be.",
    "trigger_anchor": "The impact ______ significant (posible) ➔ might be",
    "spanglish_trap": "Poner to después de might. Nunca va.",
    "workplace_usage": {
      "scenario": "Evaluación de Rendimiento de Endpoint Protection",
      "en": "The impact of the new antivirus solution might be significant.",
      "es": "El impacto de la nueva solución antivirus podría ser significativo."
    }
  },
  {
    "id": "cisco-extra-8.2.4-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the security rule in passive voice: \"The proxy setting __________ bypassed.\"",
    "options": [
      "can't be",
      "can't to be",
      "can't been",
      "can't being"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una regla de seguridad: algo que no se puede hacer.\n• Regla: \"no se puede + hecho\" ➔ can't be + 3.ª forma.\n• Descartas: \"can't to be\", \"can't been\" y \"can't being\" no existen.",
    "why_wrong": [
      "Opción correcta: \"can't be bypassed\" = \"no se puede saltar\".",
      "Incorrecto: después de can't no va \"to\".",
      "Incorrecto: después de can't va \"be\", no \"been\".",
      "Incorrecto: \"can't being\" no existe."
    ],
    "tip_es": "Pasiva negativa con modal: [can't be + participio pasado].",
    "ref": null,
    "human_rule": "\"No se puede saltar\" ➔ can't be bypassed.",
    "trigger_anchor": "The proxy setting ______ bypassed (no se puede) ➔ can't be",
    "spanglish_trap": "Poner to o been después de can't. Es can't + be + 3.ª forma.",
    "workplace_usage": {
      "scenario": "Políticas de Navegación Corporativa",
      "en": "The proxy setting can't be bypassed.",
      "es": "La configuración del proxy no puede ser eludida / sorteada."
    }
  },
  {
    "id": "cisco-extra-8.2.4-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the policy instruction: \"The latest updates __________ installed as soon as possible.\"",
    "options": [
      "should been",
      "should be",
      "should to be",
      "should to have been"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una recomendación y las actualizaciones reciben la acción.\n• Regla: \"deben + hecho\" ➔ should be + 3.ª forma.\n• Descartas: \"should been\", \"should to be\" y \"should to have been\" no existen.",
    "why_wrong": [
      "Incorrecto: después de should va \"be\", no \"been\".",
      "Opción correcta: \"should be installed\" = \"deben instalarse\".",
      "Incorrecto: después de should no va \"to\".",
      "Incorrecto: \"should to have been\" tiene \"to\" y habla del pasado."
    ],
    "tip_es": "Voz pasiva de recomendación presente: [should be + participio pasado].",
    "ref": null,
    "human_rule": "Recomendación presente: should be + 3.ª forma.",
    "trigger_anchor": "The latest updates ______ installed (deben instalarse) ➔ should be",
    "spanglish_trap": "Poner to después de should. Nunca va.",
    "workplace_usage": {
      "scenario": "Gestión de Parches de Seguridad",
      "en": "The latest updates should be installed as soon as possible.",
      "es": "Las últimas actualizaciones deberían ser instaladas lo antes posible."
    }
  },
  {
    "id": "cisco-extra-8.2.5-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite using a passive structure with \"need\": \"It’s not necessary to preserve the list after iterating.\" -> \"The list __________ after iterating.\"",
    "options": [
      "needn't be preserved",
      "doesn't need preserve",
      "needn't to be preserved",
      "needn't preserved"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"no es necesario\" y la lista recibe la acción.\n• Regla: \"no hace falta + hecho\" ➔ needn't be + 3.ª forma.\n• Descartas: \"doesn't need preserve\" no tiene to; \"needn't to be\" y \"needn't preserved\" no existen.",
    "why_wrong": [
      "Opción correcta: \"needn't be preserved\" = \"no hace falta conservarla\".",
      "Incorrecto: después de doesn't need va \"to\" + verbo, y aquí además la lista recibe la acción.",
      "Incorrecto: después de needn't no va \"to\".",
      "Incorrecto: falta \"be\" antes de preserved."
    ],
    "tip_es": "Modal needn't en voz pasiva: [needn't be + participio pasado]. ¡Sin \"to\"!",
    "ref": null,
    "human_rule": "\"No hace falta conservarla\" ➔ needn't be preserved.",
    "trigger_anchor": "The list ______ after iterating (no hace falta) ➔ needn't be preserved",
    "spanglish_trap": "Poner to después de needn't. Es needn't + be + 3.ª forma.",
    "workplace_usage": {
      "scenario": "Optimización de Memoria y Garbage Collection",
      "en": "The list needn't be preserved after iterating.",
      "es": "La lista no necesita ser preservada después de iterar."
    }
  },
  {
    "id": "cisco-extra-8.2.5-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite using the passive gerund structure: \"It is necessary to solve the problem quickly.\" -> \"The problem __________ quickly.\"",
    "options": [
      "needs to solve",
      "needs solving",
      "need solving",
      "needs solve"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"necesita resolverse\"; el problema recibe la acción.\n• Regla: cosa + needs + verbo con -ing ➔ significa \"necesita ser…\" (needs solving).\n• Descartas: \"needs to solve\" haría que el problema resuelva; need no concuerda con singular; \"needs solve\" no tiene -ing.",
    "why_wrong": [
      "Incorrecto: \"needs to solve\" dice que el problema resuelve algo.",
      "Opción correcta: \"needs solving\" = \"necesita resolverse\".",
      "Incorrecto: need es plural y problem es singular.",
      "Incorrecto: falta -ing o to después de needs."
    ],
    "tip_es": "Regla de oro B2: [Cosa inanimada + needs + verbo-ing] = significado pasivo (\"necesita ser resuelto\").",
    "ref": null,
    "human_rule": "Cosa + needs + -ing = \"necesita ser…\": needs solving.",
    "trigger_anchor": "The problem ______ quickly (necesita resolverse) ➔ needs solving",
    "spanglish_trap": "Decir \"needs to solve\". Con una cosa que recibe la acción, va needs + -ing.",
    "workplace_usage": {
      "scenario": "Resolución de Incidentes Mayores",
      "en": "The problem needs solving quickly.",
      "es": "El problema necesita resolverse rápidamente."
    }
  },
  {
    "id": "cisco-extra-8.2.5-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite emphasizing that an action was done unnecessarily: \"They have preserved the list but it was not necessary.\" -> \"They __________ the list.\"",
    "options": [
      "didn't need preserve",
      "needn't preserve",
      "needn't have preserved",
      "needn't to have preserved"
    ],
    "answer": 2,
    "why_correct": "• Pista: ya lo hicieron y no hacía falta.\n• Regla: \"no hacía falta (y lo hicieron)\" ➔ needn't have + 3.ª forma.\n• Descartas: \"didn't need preserve\" y \"needn't preserve\" no marcan que ya ocurrió; \"needn't to have\" lleva to de más.",
    "why_wrong": [
      "Incorrecto: falta \"to\" y no marca que ya lo hicieron.",
      "Incorrecto: \"needn't preserve\" habla del presente, no de algo ya hecho.",
      "Opción correcta: \"needn't have preserved\" = \"no hacía falta conservarla\".",
      "Incorrecto: después de needn't no va \"to\"."
    ],
    "tip_es": "[needn't have + participio pasado] = Se hizo algo en el pasado que no era necesario haber hecho.",
    "ref": null,
    "human_rule": "\"No hacía falta (y lo hicieron)\" ➔ needn't have + 3.ª forma.",
    "trigger_anchor": "They ______ the list (ya lo hicieron, sobraba) ➔ needn't have preserved",
    "spanglish_trap": "Hablar en presente. Si ya ocurrió, hace falta \"have\" + 3.ª forma.",
    "workplace_usage": {
      "scenario": "Refactorización de Código",
      "en": "They needn't have preserved the list.",
      "es": "No necesitaban haber preservado la lista (la preservaron sin necesidad)."
    }
  },
  {
    "id": "cisco-extra-8.2.5-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite using the passive gerund form: \"It is important to reduce the memory usage.\" -> \"The memory usage __________.\"",
    "options": [
      "needs reduce",
      "need to reducing",
      "needs to reduce",
      "needs reducing"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"necesita reducirse\"; el uso de memoria recibe la acción.\n• Regla: cosa + needs + -ing ➔ needs reducing.\n• Descartas: \"needs reduce\" no tiene -ing; \"need to reducing\" mezcla to con -ing; \"needs to reduce\" haría que el uso de memoria reduzca algo.",
    "why_wrong": [
      "Incorrecto: falta -ing después de needs.",
      "Incorrecto: \"need to reducing\" mezcla to con -ing, y need es plural.",
      "Incorrecto: \"needs to reduce\" dice que el uso de memoria reduce algo.",
      "Opción correcta: \"needs reducing\" = \"necesita reducirse\"."
    ],
    "tip_es": "[Sujeto técnico + needs + gerundio -ing] = valor pasivo (\"necesita reducirse\").",
    "ref": null,
    "human_rule": "Cosa + needs + -ing = \"necesita ser…\": needs reducing.",
    "trigger_anchor": "The memory usage ______ (necesita reducirse) ➔ needs reducing",
    "spanglish_trap": "Mezclar to con -ing. O es needs + -ing, o es needs to + verbo; aquí va -ing.",
    "workplace_usage": {
      "scenario": "Optimización de Runtimes y Microservicios",
      "en": "The memory usage needs reducing.",
      "es": "El uso de memoria necesita ser reducido."
    }
  },
  {
    "id": "cisco-extra-8.2.5-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite indicating that the changes were made pointlessly: \"Those changes they have made weren’t really necessary.\" -> \"They __________ those changes.\"",
    "options": [
      "needn't have made",
      "didn't need make",
      "needn't make",
      "needn't to have made"
    ],
    "answer": 0,
    "why_correct": "• Pista: ya hicieron los cambios y no eran necesarios.\n• Regla: \"no hacía falta hacerlos\" ➔ needn't have + 3.ª forma.\n• Descartas: \"didn't need make\" y \"needn't make\" no marcan que ya ocurrió; \"needn't to have\" lleva to de más.",
    "why_wrong": [
      "Opción correcta: \"needn't have made\" = \"no hacía falta hacerlos\".",
      "Incorrecto: falta \"to\" y no marca que ya lo hicieron.",
      "Incorrecto: habla del presente, no de algo ya hecho.",
      "Incorrecto: después de needn't no va \"to\"."
    ],
    "tip_es": "Acción pretérita realizada innecesariamente: [needn't have made].",
    "ref": null,
    "human_rule": "\"No hacía falta (y lo hicieron)\" ➔ needn't have + 3.ª forma.",
    "trigger_anchor": "They ______ those changes (ya los hicieron, sobraban) ➔ needn't have made",
    "spanglish_trap": "Usar don't need en presente. Para algo ya hecho: needn't have + 3.ª forma.",
    "workplace_usage": {
      "scenario": "Revisión de Pull Request (PR)",
      "en": "They needn't have made those changes.",
      "es": "No necesitaban haber hecho esos cambios."
    }
  },
  {
    "id": "cisco-extra-8.2.5-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite in passive voice: \"The best idea is for our options to be reconsidered.\" -> \"Our options __________.\"",
    "options": [
      "need reconsidering",
      "need to be reconsidered",
      "needs to be reconsidered",
      "need be reconsidered"
    ],
    "answer": 1,
    "why_correct": "• Pista: las opciones (plural) deben ser reconsideradas por alguien.\n• Regla: plural + need to be + 3.ª forma.\n• Descartas: needs no concuerda con plural; \"need be\" no lleva to; \"need reconsidering\" no mantiene la estructura de la frase original.",
    "why_wrong": [
      "Incorrecto: la frase original pide \"need to be reconsidered\"; esta forma no la mantiene.",
      "Opción correcta: \"need to be reconsidered\" = \"deben reconsiderarse\".",
      "Incorrecto: needs es singular y options es plural.",
      "Incorrecto: falta \"to\" antes de be."
    ],
    "tip_es": "Concordancia plural: [Our options + need to be + participio pasado].",
    "ref": null,
    "human_rule": "Plural que recibe la acción ➔ need to be + 3.ª forma.",
    "trigger_anchor": "Our options ______ (plural, deben reconsiderarse) ➔ need to be reconsidered",
    "spanglish_trap": "Poner needs por costumbre. Con options (plural) va need.",
    "workplace_usage": {
      "scenario": "Reunión de Estrategia de Entrega",
      "en": "Our options need to be reconsidered.",
      "es": "Nuestras opciones necesitan ser reconsideradas."
    }
  },
  {
    "id": "cisco-extra-8.3.1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"I wasn’t expecting it to be so difficult. I really thought disabling the hardware keys could be done __________.\"",
    "options": [
      "more easily",
      "easier",
      "most easily",
      "more easier"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"could be done ______\" describe cómo se hace algo, y se compara con lo esperado.\n• Regla: comparar un adverbio largo ➔ more easily.\n• Descartas: easier es un adjetivo; \"most easily\" es superlativo; \"more easier\" duplica.",
    "why_wrong": [
      "Opción correcta: \"more easily\" = \"más fácilmente\".",
      "Incorrecto: easier es un adjetivo; aquí hace falta un adverbio.",
      "Incorrecto: \"most easily\" es el superlativo.",
      "Incorrecto: \"more easier\" duplica la comparación."
    ],
    "tip_es": "Adverbios en -ly (easily, quickly, seriously): forman el comparativo con \"more\" ([more + adverbio]).",
    "ref": null,
    "human_rule": "Comparar un adverbio largo ➔ more + adverbio.",
    "trigger_anchor": "disabling the keys could be done ______ ➔ more easily",
    "spanglish_trap": "Usar el adjetivo (easier). Si describe cómo se hace algo, adverbio: more easily.",
    "workplace_usage": {
      "scenario": "Mantenimiento de Servidores Físicos",
      "en": "I really thought disabling the hardware keys could be done more easily.",
      "es": "Realmente pensé que deshabilitar las llaves de hardware podría hacerse más fácilmente."
    }
  },
  {
    "id": "cisco-extra-8.3.1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the wish: \"I wish I’d thought of this method __________ . It would’ve saved a lot of time.\"",
    "options": [
      "soonest",
      "sooner",
      "more soon",
      "more sooner"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"I wish I'd thought of this method ______\": antes en el tiempo.\n• Regla: soon ➔ sooner.\n• Descartas: soonest es el superlativo; \"more soon\" y \"more sooner\" no existen.",
    "why_wrong": [
      "Incorrecto: soonest es el superlativo.",
      "Opción correcta: \"sooner\" = \"antes\".",
      "Incorrecto: \"more soon\" no existe; soon lleva -er.",
      "Incorrecto: \"more sooner\" duplica la comparación."
    ],
    "tip_es": "Comparativo de adverbios monosílabos: [soon -> sooner, fast -> faster].",
    "ref": null,
    "human_rule": "soon ➔ sooner (\"antes\").",
    "trigger_anchor": "I wish I'd thought of this method ______ ➔ sooner",
    "spanglish_trap": "Usar more con soon. Es sooner.",
    "workplace_usage": {
      "scenario": "Refactorización y Deuda Técnica",
      "en": "I wish I’d thought of this method sooner. It would’ve saved a lot of time.",
      "es": "Ojalá hubiera pensado en este método antes. Habría ahorrado mucho tiempo."
    }
  },
  {
    "id": "cisco-extra-8.3.1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the criticism: \"I don’t think they anticipated just how bad the result would be. They should’ve taken the whole thing __________.\"",
    "options": [
      "seriouslier",
      "most seriously",
      "more seriously",
      "more serious"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"taken the whole thing ______\" describe cómo debieron tomarlo.\n• Regla: comparar un adverbio largo ➔ more seriously.\n• Descartas: \"seriouslier\" no existe; \"most seriously\" es superlativo; \"more serious\" es un adjetivo.",
    "why_wrong": [
      "Incorrecto: \"seriouslier\" no existe.",
      "Incorrecto: \"most seriously\" es el superlativo.",
      "Opción correcta: \"more seriously\" = \"más en serio\".",
      "Incorrecto: \"more serious\" es un adjetivo; aquí hace falta un adverbio."
    ],
    "tip_es": "Comparativo de adverbios polisílabos en -ly: [more + seriously].",
    "ref": null,
    "human_rule": "Comparar un adverbio largo ➔ more + adverbio.",
    "trigger_anchor": "should've taken the whole thing ______ ➔ more seriously",
    "spanglish_trap": "Usar el adjetivo (more serious). Para \"cómo\", adverbio: more seriously.",
    "workplace_usage": {
      "scenario": "Revisión Post-Incidente de Seguridad",
      "en": "They should’ve taken the whole thing more seriously.",
      "es": "Deberían haberse tomado todo el asunto más en serio."
    }
  },
  {
    "id": "cisco-extra-8.3.1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"It couldn’t have gone __________ . It was as bad as it could have been.\"",
    "options": [
      "worst",
      "more badly",
      "more worse",
      "worse"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"It couldn't have gone ______. It was as bad as it could have been\": peor no se podía.\n• Regla: bad / badly ➔ worse.\n• Descartas: worst es el superlativo; \"more badly\" y \"more worse\" no se usan.",
    "why_wrong": [
      "Incorrecto: worst es el superlativo.",
      "Incorrecto: \"more badly\" no es la forma habitual.",
      "Incorrecto: \"more worse\" duplica la comparación.",
      "Opción correcta: \"worse\" = \"peor\"."
    ],
    "tip_es": "Comparativo irregular: [bad / badly -> worse]. Ejemplo: \"It couldn't have gone worse\".",
    "ref": null,
    "human_rule": "bad / badly ➔ worse (peor).",
    "trigger_anchor": "It couldn't have gone ______ (peor) ➔ worse",
    "spanglish_trap": "Decir \"more worse\". Worse ya es una comparación.",
    "workplace_usage": {
      "scenario": "Fallo Crítico en Despliegue",
      "en": "It couldn’t have gone worse. It was as bad as it could have been.",
      "es": "No pudo haber salido peor. Fue tan malo como pudo haber sido."
    }
  },
  {
    "id": "cisco-extra-8.3.1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the conditional evaluation: \"They would’ve done much __________ if their planning stage had been extended as suggested.\"",
    "options": [
      "better",
      "gooder",
      "best",
      "more well"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"They would've done much ______ if their planning had been extended\": una mejora.\n• Regla: good / well ➔ better.\n• Descartas: \"gooder\" no existe; best es el superlativo; \"more well\" no se usa.",
    "why_wrong": [
      "Opción correcta: \"better\" = \"mejor\".",
      "Incorrecto: \"gooder\" no existe.",
      "Incorrecto: best es el superlativo.",
      "Incorrecto: \"more well\" no se usa."
    ],
    "tip_es": "Comparativo irregular: [well -> better]. Intensificador: \"much better\".",
    "ref": null,
    "human_rule": "good / well ➔ better (mejor).",
    "trigger_anchor": "They would've done much ______ if planning had been extended ➔ better",
    "spanglish_trap": "Decir \"more well\". La comparación de well es better.",
    "workplace_usage": {
      "scenario": "Planificación de Proyectos TI",
      "en": "They would’ve done much better if their planning stage had been extended.",
      "es": "Les habría ido mucho mejor si su etapa de planificación se hubiera extendido."
    }
  },
  {
    "id": "cisco-extra-8.3.1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G20",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the sentence: \"If they’d worked any __________ , they couldn’t have maintained the level of quality that was necessary.\"",
    "options": [
      "more fast",
      "faster",
      "fastest",
      "more faster"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"If they'd worked any ______\": se compara la velocidad.\n• Regla: fast ➔ faster.\n• Descartas: \"more fast\" y \"more faster\" no existen; fastest es el superlativo.",
    "why_wrong": [
      "Incorrecto: \"more fast\" no existe; fast lleva -er.",
      "Opción correcta: \"faster\" = \"más rápido\".",
      "Incorrecto: fastest es el superlativo.",
      "Incorrecto: \"more faster\" duplica la comparación."
    ],
    "tip_es": "Locución comparativa de ritmo: [any faster] (aún más rápido / más deprisa).",
    "ref": null,
    "human_rule": "fast ➔ faster.",
    "trigger_anchor": "If they'd worked any ______ ➔ faster",
    "spanglish_trap": "Usar more con un adjetivo corto. Con fast, faster.",
    "workplace_usage": {
      "scenario": "Control de Calidad QA en Sprints",
      "en": "If they’d worked any faster, they couldn’t have maintained the level of quality that was necessary.",
      "es": "Si hubieran trabajado aún más rápido, no habrían podido mantener el nivel de calidad necesario."
    }
  },
  {
    "id": "cisco-extra-8.3.2-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the statement: \"This is completely new to me. I’ve __________ seen this error message before. Can you explain it, please?\"",
    "options": [
      "never",
      "ever",
      "already",
      "always"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"This is completely new to me\" y \"before\": nunca lo había visto.\n• Regla: \"nunca\" con have seen ➔ never.\n• Descartas: ever va en preguntas o negativas; already y always no encajan.",
    "why_wrong": [
      "Opción correcta: \"I've never seen\" = \"nunca he visto\".",
      "Incorrecto: ever va en preguntas, no en una afirmación así.",
      "Incorrecto: already significa \"ya\".",
      "Incorrecto: always significa \"siempre\"."
    ],
    "tip_es": "Experiencia nula con Present Perfect: [have/has + never + participio pasado].",
    "ref": null,
    "human_rule": "\"Nunca he…\" ➔ I've never + 3.ª forma.",
    "trigger_anchor": "This is completely new to me. I've ______ seen this error ➔ never",
    "spanglish_trap": "Usar ever por \"alguna vez\". En una afirmación, never.",
    "workplace_usage": {
      "scenario": "Debugging y Soporte L1/L2",
      "en": "This is completely new to me. I’ve never seen this error message before.",
      "es": "Esto es completamente nuevo para mí. Nunca antes había visto este mensaje de error."
    }
  },
  {
    "id": "cisco-extra-8.3.2-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the reminder: \"Don’t you remember? We’ve definitely seen this __________ .\"",
    "options": [
      "ago",
      "before",
      "yet",
      "since"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"We've definitely seen this ______\": se recuerda algo ya visto.\n• Regla: \"antes\" ➔ before.\n• Descartas: ago va con un tiempo (two days ago); yet y since no encajan.",
    "why_wrong": [
      "Incorrecto: ago va con un tiempo (\"two days ago\").",
      "Opción correcta: \"seen this before\" = \"visto esto antes\".",
      "Incorrecto: yet se usa en negativas y preguntas.",
      "Incorrecto: since necesita un punto de partida."
    ],
    "tip_es": "Al final de una oración en Present Perfect para indicar anterioridad: usa \"before\".",
    "ref": null,
    "human_rule": "\"Antes\" al final de la frase ➔ before.",
    "trigger_anchor": "We've definitely seen this ______ ➔ before",
    "spanglish_trap": "Usar ago por \"hace\". Sin un tiempo concreto, before.",
    "workplace_usage": {
      "scenario": "Resolución de Incidentes Repetitivos",
      "en": "Don’t you remember? We’ve definitely seen this before.",
      "es": "¿No te acuerdas? Definitivamente hemos visto esto antes."
    }
  },
  {
    "id": "cisco-extra-8.3.2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the contrast: \"Maybe you’ve __________ seen it, but I’m sure I haven’t.\"",
    "options": [
      "yet",
      "never",
      "already",
      "still"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Maybe you've ______ seen it, but I'm sure I haven't\": se contrasta lo que el otro sí vio.\n• Regla: \"ya\" ➔ already.\n• Descartas: yet es para negativas y preguntas; never contradice; still no encaja.",
    "why_wrong": [
      "Incorrecto: yet se usa en negativas y preguntas.",
      "Incorrecto: never diría que no lo ha visto, y la frase dice que quizás sí.",
      "Opción correcta: \"already seen\" = \"ya visto\".",
      "Incorrecto: still no encaja con have seen."
    ],
    "tip_es": "Posición media afirmativa en Present Perfect: [have + already + participio pasado].",
    "ref": null,
    "human_rule": "\"Ya\" en una afirmación ➔ already.",
    "trigger_anchor": "Maybe you've ______ seen it ➔ already",
    "spanglish_trap": "Usar yet por \"ya\". En una afirmación, already.",
    "workplace_usage": {
      "scenario": "Triage de Bugs en Equipo",
      "en": "Maybe you’ve already seen it, but I’m sure I haven’t.",
      "es": "Tal vez tú ya lo hayas visto, pero estoy seguro de que yo no."
    }
  },
  {
    "id": "cisco-extra-8.3.2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the frequency statement: \"Well, it’s not that common, but it does pop up __________ .\"",
    "options": [
      "rare",
      "never",
      "occasional",
      "occasionally"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"it does pop up ______\": se dice con qué frecuencia aparece.\n• Regla: un adverbio de frecuencia ➔ occasionally.\n• Descartas: rare y occasional son adjetivos; never lo niega.",
    "why_wrong": [
      "Incorrecto: rare es un adjetivo.",
      "Incorrecto: never diría que no aparece, y la frase dice que sí.",
      "Incorrecto: occasional es un adjetivo.",
      "Opción correcta: \"occasionally\" = \"de vez en cuando\"."
    ],
    "tip_es": "Adverbio de frecuencia para acciones esporádicas: [occasionally] (de forma ocasional).",
    "ref": null,
    "human_rule": "Adverbio de frecuencia ➔ occasionally (no occasional).",
    "trigger_anchor": "it does pop up ______ (de vez en cuando) ➔ occasionally",
    "spanglish_trap": "Poner el adjetivo. Para describir cómo ocurre, adverbio.",
    "workplace_usage": {
      "scenario": "Monitoreo de Errores Intermitentes",
      "en": "Well, it’s not that common, but it does pop up occasionally.",
      "es": "Bueno, no es tan común, pero sí aparece ocasionalmente."
    }
  },
  {
    "id": "cisco-extra-8.3.2-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the concession: \"If you say so. You’re __________ right, I suppose.\"",
    "options": [
      "usually",
      "ever",
      "seldomly",
      "usual"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"You're ______ right, I suppose\": se admite que suele tener razón.\n• Regla: \"normalmente\" ➔ usually.\n• Descartas: ever va en preguntas; \"seldomly\" no existe; usual es un adjetivo.",
    "why_wrong": [
      "Opción correcta: \"usually right\" = \"normalmente tienes razón\".",
      "Incorrecto: ever va en preguntas y negativas.",
      "Incorrecto: \"seldomly\" no existe (es seldom).",
      "Incorrecto: usual es un adjetivo; aquí hace falta un adverbio."
    ],
    "tip_es": "Posición de adverbios de frecuencia: van DESPUÉS del verbo to be (\"You are usually right\").",
    "ref": null,
    "human_rule": "Adverbio de frecuencia ➔ usually (no usual).",
    "trigger_anchor": "You're ______ right, I suppose ➔ usually",
    "spanglish_trap": "Poner el adjetivo. Antes de right, el adverbio.",
    "workplace_usage": {
      "scenario": "Debate Técnico de Diagnóstico",
      "en": "If you say so. You’re usually right, I suppose.",
      "es": "Si tú lo dices. Por lo general tienes razón, supongo."
    }
  },
  {
    "id": "cisco-extra-8.3.2-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G21",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the emphatic exclamation: \"You’ve __________ said that __________ !\"",
    "options": [
      "ever ... yet",
      "never ... before",
      "already ... ago",
      "always ... since"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una exclamación con dos huecos: \"nunca habías dicho eso antes\".\n• Regla: \"never… before\" ➔ You've never said that before!\n• Descartas: las demás parejas no forman una frase con sentido.",
    "why_wrong": [
      "Incorrecto: \"ever… yet\" no forma esta exclamación.",
      "Opción correcta: \"never… before\" = \"nunca… antes\".",
      "Incorrecto: \"already… ago\" no forma esta exclamación.",
      "Incorrecto: \"always… since\" no forma esta exclamación."
    ],
    "tip_es": "Colocación temporal fija: [have never + V3 + before] (\"¡Nunca habías dicho eso antes!\").",
    "ref": null,
    "human_rule": "\"Nunca… antes\" ➔ never… before.",
    "trigger_anchor": "You've ______ said that ______! ➔ never… before",
    "spanglish_trap": "Mezclar las parejas. Never va con before.",
    "workplace_usage": {
      "scenario": "Conversación Colaborativa de Ingeniería",
      "en": "You’ve never said that before!",
      "es": "¡Nunca habías dicho eso antes!"
    }
  },
  {
    "id": "cisco-extra-8.3.3-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G22",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the comparative sentence: \"Antivirus software installation should be much __________ (high) on the list of priorities __________ focusing on other software updates.\"",
    "options": [
      "higher ... than",
      "more high ... than",
      "higher ... that",
      "highest ... then"
    ],
    "answer": 0,
    "why_correct": "• Pista: se compara una prioridad con otra (\"…than focusing on other software updates\").\n• Regla: adjetivo corto + er + than ➔ higher… than.\n• Descartas: \"more high\" no existe; \"that\" y \"then\" no sirven para comparar.",
    "why_wrong": [
      "Opción correcta: \"higher… than\" = \"más alto… que\".",
      "Incorrecto: \"more high\" no existe; high es corto y lleva -er.",
      "Incorrecto: la segunda parte es than, no that.",
      "Incorrecto: highest es el superlativo, y \"then\" no compara."
    ],
    "tip_es": "Comparativo de monosílabos + nexo: [adjetivo-er + than]. ¡Cuidado con no confundir \"than\" con \"then\"!",
    "ref": null,
    "human_rule": "Comparar con un adjetivo corto ➔ higher + THAN.",
    "trigger_anchor": "much ______ (high) on the list ______ focusing on updates ➔ higher… than",
    "spanglish_trap": "Escribir that por \"que\". En una comparación, que = than.",
    "workplace_usage": {
      "scenario": "Priorización de Tareas de Seguridad",
      "en": "Antivirus software installation should be much higher on the list of priorities than focusing on other software updates.",
      "es": "La instalación del software antivirus debería estar mucho más alta en la lista de prioridades que enfocarse en otras actualizaciones."
    }
  },
  {
    "id": "cisco-extra-8.3.3-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G22",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the policy instruction: \"When creating a new password, you must ensure that it is __________ (complex) __________ just resorting to a known word.\"",
    "options": [
      "complexer ... than",
      "more complex ... than",
      "more complex ... that",
      "most complex ... than"
    ],
    "answer": 1,
    "why_correct": "• Pista: se compara una contraseña con \"just resorting to a known word\".\n• Regla: adjetivo largo ➔ more complex… than.\n• Descartas: \"complexer\" no existe; \"that\" no compara; \"most complex\" es el superlativo.",
    "why_wrong": [
      "Incorrecto: \"complexer\" no existe; complex es largo y lleva more.",
      "Opción correcta: \"more complex… than\" = \"más compleja… que\".",
      "Incorrecto: la segunda parte es than, no that.",
      "Incorrecto: \"most complex\" es el superlativo."
    ],
    "tip_es": "Adjetivos de dos o más sílabas: [more + adjetivo + than].",
    "ref": null,
    "human_rule": "Comparar con un adjetivo largo ➔ more + adjetivo + THAN.",
    "trigger_anchor": "it is ______ (complex) ______ just a known word ➔ more complex… than",
    "spanglish_trap": "Añadir -er a un adjetivo largo. Con adjetivos largos, more.",
    "workplace_usage": {
      "scenario": "Política de Contraseñas Seguras",
      "en": "When creating a new password, you must ensure that it is more complex than just resorting to a known word.",
      "es": "Al crear una nueva contraseña, debes asegurarte de que sea más compleja que simplemente recurrir a una palabra conocida."
    }
  },
  {
    "id": "cisco-extra-8.3.3-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G22",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the security report: \"There's a growing concern that the software we are using is __________ (vulnerable) to SQL injection __________ the recent version.\"",
    "options": [
      "vulnerabler ... than",
      "more vulnerable ... as",
      "more vulnerable ... than",
      "most vulnerable ... than"
    ],
    "answer": 2,
    "why_correct": "• Pista: se compara la versión actual con la reciente (\"…than the recent version\").\n• Regla: adjetivo largo ➔ more vulnerable… than.\n• Descartas: \"vulnerabler\" no existe; \"as\" no es la pareja de more; \"most vulnerable\" es el superlativo.",
    "why_wrong": [
      "Incorrecto: \"vulnerabler\" no existe.",
      "Incorrecto: \"more… as\" no forma una comparación.",
      "Opción correcta: \"more vulnerable… than\" = \"más vulnerable… que\".",
      "Incorrecto: \"most vulnerable\" es el superlativo."
    ],
    "tip_es": "Comparativo de superioridad polisílabo: [more vulnerable than].",
    "ref": null,
    "human_rule": "more + adjetivo largo + THAN.",
    "trigger_anchor": "is ______ (vulnerable) ______ the recent version ➔ more vulnerable… than",
    "spanglish_trap": "Usar as por \"como\". Con more, la pareja es than.",
    "workplace_usage": {
      "scenario": "Evaluación de Vulnerabilidades Web (OWASP)",
      "en": "The software we are using is more vulnerable to SQL injection than the recent version.",
      "es": "El software que estamos usando es más vulnerable a la inyección SQL que la versión reciente."
    }
  },
  {
    "id": "cisco-extra-8.3.3-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G22",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the recommendation: \"Ensuring the files containing customer data are encrypted beforehand is a much __________ (safe) way of sharing them __________ just sending them directly to our support team.\"",
    "options": [
      "more safe ... than",
      "safer ... that",
      "safest ... then",
      "safer ... than"
    ],
    "answer": 3,
    "why_correct": "• Pista: se compara un método con otro (\"…than just sending them directly\").\n• Regla: adjetivo corto ➔ safer… than.\n• Descartas: \"more safe\" no es lo habitual; that y then no comparan; safest es el superlativo.",
    "why_wrong": [
      "Incorrecto: safe es corto y lleva -er (safer).",
      "Incorrecto: la segunda parte es than, no that.",
      "Incorrecto: safest es el superlativo, y \"then\" no compara.",
      "Opción correcta: \"safer… than\" = \"más seguro… que\"."
    ],
    "tip_es": "[safe -> safer]. Regla: [much safer way of sharing them than...].",
    "ref": null,
    "human_rule": "Adjetivo corto + er + THAN.",
    "trigger_anchor": "a much ______ (safe) way ______ just sending them ➔ safer… than",
    "spanglish_trap": "Usar more con un adjetivo corto. Con safe, safer.",
    "workplace_usage": {
      "scenario": "Transferencia Segura de Datos (SFTP / Cifrado)",
      "en": "Ensuring the files are encrypted beforehand is a much safer way of sharing them than sending them directly.",
      "es": "Garantizar que los archivos que contienen datos de clientes estén cifrados de antemano es una forma mucho más segura de compartirlos que simplemente enviarlos directamente."
    }
  },
  {
    "id": "cisco-extra-8.3.3-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G22",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the audit conclusion: \"The audit findings show that updating our backup procedures is much __________ (important) __________ anything else on our to-do list.\"",
    "options": [
      "more important ... than",
      "importanter ... than",
      "more important ... as",
      "most important ... than"
    ],
    "answer": 0,
    "why_correct": "• Pista: se compara una tarea con \"anything else on our to-do list\".\n• Regla: adjetivo largo ➔ more important… than.\n• Descartas: \"importanter\" no existe; \"as\" no forma comparación con more; \"most important\" es el superlativo.",
    "why_wrong": [
      "Opción correcta: \"more important… than\" = \"más importante… que\".",
      "Incorrecto: \"importanter\" no existe.",
      "Incorrecto: \"more… as\" no forma una comparación.",
      "Incorrecto: \"most important\" es el superlativo."
    ],
    "tip_es": "Estructura comparativa estándar: [much more important than].",
    "ref": null,
    "human_rule": "more + adjetivo largo + THAN.",
    "trigger_anchor": "is much ______ (important) ______ anything else ➔ more important… than",
    "spanglish_trap": "Añadir -er a un adjetivo largo. Con important, more.",
    "workplace_usage": {
      "scenario": "Plan de Recuperación ante Desastres (DRP)",
      "en": "Updating our backup procedures is much more important than anything else on our to-do list.",
      "es": "Actualizar nuestros procedimientos de respaldo es mucho más importante que cualquier otra cosa en nuestra lista de pendientes."
    }
  },
  {
    "id": "cisco-extra-8.3.3-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G22",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the evaluation: \"In the end, I believe refusing them access was simply __________ (convenient) __________ accommodating their requests.\"",
    "options": [
      "convenienter ... than",
      "more convenient ... than",
      "more convenient ... that",
      "most convenient ... then"
    ],
    "answer": 1,
    "why_correct": "• Pista: se compara negar el acceso con \"accommodating their requests\".\n• Regla: adjetivo largo ➔ more convenient… than.\n• Descartas: \"convenienter\" no existe; \"that\" no compara; \"most convenient\" es el superlativo.",
    "why_wrong": [
      "Incorrecto: \"convenienter\" no existe.",
      "Opción correcta: \"more convenient… than\" = \"más conveniente… que\".",
      "Incorrecto: la segunda parte es than, no that.",
      "Incorrecto: \"most convenient\" es el superlativo, y \"then\" no compara."
    ],
    "tip_es": "Comparación de alternativas: [more convenient than + gerundio].",
    "ref": null,
    "human_rule": "more + adjetivo largo + THAN.",
    "trigger_anchor": "was simply ______ (convenient) ______ accommodating ➔ more convenient… than",
    "spanglish_trap": "Confundir than con then. Than compara; then es \"entonces\".",
    "workplace_usage": {
      "scenario": "Control de Acceso y Gestión de Permisos",
      "en": "Refusing them access was simply more convenient than accommodating their requests.",
      "es": "Rechazarles el acceso fue simplemente más conveniente que acomodar sus solicitudes."
    }
  },
  {
    "id": "cisco-extra-8.4.1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform the sentence using the passive gerund structure: \"To avoid problems, we need to upgrade the system.\" -> \"To avoid problems, the system __________.\"",
    "options": [
      "needs upgrading",
      "needs upgrade",
      "needs to upgrade",
      "is needed upgrading"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"necesita actualizarse\"; el sistema recibe la acción.\n• Regla: cosa + needs + -ing ➔ needs upgrading.\n• Descartas: \"needs upgrade\" no tiene -ing; \"needs to upgrade\" haría que el sistema actualice algo; \"is needed upgrading\" no existe.",
    "why_wrong": [
      "Opción correcta: \"needs upgrading\" = \"necesita actualizarse\".",
      "Incorrecto: falta -ing después de needs.",
      "Incorrecto: \"needs to upgrade\" dice que el sistema actualiza algo.",
      "Incorrecto: \"is needed upgrading\" no es una forma válida."
    ],
    "tip_es": "Estructura pasiva con gerundio: [Cosa técnica + needs + verbo-ing] (\"needs upgrading\").",
    "ref": null,
    "human_rule": "Cosa + needs + -ing ➔ needs upgrading.",
    "trigger_anchor": "the system ______ (necesita actualizarse) ➔ needs upgrading",
    "spanglish_trap": "Traducir \"necesita ser actualizado\" con is needed. En inglés se dice needs upgrading.",
    "workplace_usage": {
      "scenario": "Mantenimiento Preventivo de Servidores",
      "en": "To avoid problems, the system needs upgrading.",
      "es": "Para evitar problemas, el sistema necesita ser actualizado."
    }
  },
  {
    "id": "cisco-extra-8.4.1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform the sentence into the passive gerund form: \"We should have compiled the libraries in a certain way.\" -> \"The libraries __________ in a certain way.\"",
    "options": [
      "need to compile",
      "need compiling",
      "needs compiling",
      "need compile"
    ],
    "answer": 1,
    "why_correct": "• Pista: las librerías (plural) necesitan compilarse.\n• Regla: plural + need + -ing ➔ need compiling.\n• Descartas: \"need to compile\" haría que las librerías compilen algo; needs es singular; \"need compile\" no tiene -ing.",
    "why_wrong": [
      "Incorrecto: \"need to compile\" dice que las librerías compilan algo.",
      "Opción correcta: \"need compiling\" = \"necesitan compilarse\".",
      "Incorrecto: needs es singular y libraries es plural.",
      "Incorrecto: falta -ing."
    ],
    "tip_es": "Concordancia plural: [The libraries (plural) + need compiling].",
    "ref": null,
    "human_rule": "Plural + need + -ing.",
    "trigger_anchor": "The libraries ______ (plural, necesitan compilarse) ➔ need compiling",
    "spanglish_trap": "Usar needs con plural. Mira si la cosa es singular o plural.",
    "workplace_usage": {
      "scenario": "Compilación y Enlazado C++/Rust",
      "en": "The libraries need compiling in a certain way.",
      "es": "Las bibliotecas necesitan compilarse de cierta manera."
    }
  },
  {
    "id": "cisco-extra-8.4.1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform the sentence: \"We need to test the software before we release it.\" -> \"The software __________ before it is released.\"",
    "options": [
      "needs test",
      "need testing",
      "needs testing",
      "is needed to test"
    ],
    "answer": 2,
    "why_correct": "• Pista: software es singular (no se cuenta) y necesita probarse.\n• Regla: software + needs + -ing ➔ needs testing.\n• Descartas: \"needs test\" no tiene -ing; need no concuerda con singular; \"is needed to test\" cambia el sentido.",
    "why_wrong": [
      "Incorrecto: falta -ing.",
      "Incorrecto: need es plural y software es singular.",
      "Opción correcta: \"needs testing\" = \"necesita probarse\".",
      "Incorrecto: \"is needed to test\" diría que el software hace falta para probar algo."
    ],
    "tip_es": "\"Software\" es singular e incontable: [software + needs testing].",
    "ref": null,
    "human_rule": "Software es singular: needs testing.",
    "trigger_anchor": "The software ______ before release (necesita probarse) ➔ needs testing",
    "spanglish_trap": "Poner need porque \"software\" suena a plural. En inglés es singular.",
    "workplace_usage": {
      "scenario": "Pipeline de QA y Liberación",
      "en": "The software needs testing before it is released.",
      "es": "El software necesita ser probado antes de ser lanzado."
    }
  },
  {
    "id": "cisco-extra-8.4.1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform the sentence: \"To avoid login failures, we need to increase the connection pool size.\" -> \"To avoid login failures, the connection pool size __________.\"",
    "options": [
      "needs increase",
      "need increasing",
      "needs to increase",
      "needs increasing"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"size\" es singular y necesita aumentarse.\n• Regla: cosa singular + needs + -ing ➔ needs increasing.\n• Descartas: \"needs increase\" no tiene -ing; need no concuerda con singular; \"needs to increase\" haría que el tamaño aumente algo.",
    "why_wrong": [
      "Incorrecto: falta -ing.",
      "Incorrecto: need es plural y size es singular.",
      "Incorrecto: \"needs to increase\" dice que el tamaño aumenta algo.",
      "Opción correcta: \"needs increasing\" = \"necesita aumentarse\"."
    ],
    "tip_es": "[Sujeto singular (\"size\") + needs + verbo-ing] (\"needs increasing\").",
    "ref": null,
    "human_rule": "Cosa singular + needs + -ing ➔ needs increasing.",
    "trigger_anchor": "the pool size ______ (necesita aumentarse) ➔ needs increasing",
    "spanglish_trap": "Dudar entre needs to increase y needs increasing. Si la cosa recibe la acción, va -ing.",
    "workplace_usage": {
      "scenario": "Ajuste de Base de Datos PostgreSQL",
      "en": "To avoid login failures, the connection pool size needs increasing.",
      "es": "Para evitar fallos de inicio de sesión, el tamaño del pool de conexiones necesita ser aumentado."
    }
  },
  {
    "id": "cisco-extra-8.4.1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform the sentence: \"We need to add the missing information to the log.\" -> \"The missing information __________ to the log.\"",
    "options": [
      "needs adding",
      "needs add",
      "need adding",
      "needs to add"
    ],
    "answer": 0,
    "why_correct": "• Pista: information no se cuenta (singular) y necesita añadirse.\n• Regla: information + needs + -ing ➔ needs adding.\n• Descartas: \"needs add\" no tiene -ing; need no concuerda con singular; \"needs to add\" haría que la información añada algo.",
    "why_wrong": [
      "Opción correcta: \"needs adding\" = \"necesita añadirse\".",
      "Incorrecto: falta -ing.",
      "Incorrecto: need es plural; information es singular.",
      "Incorrecto: \"needs to add\" dice que la información añade algo."
    ],
    "tip_es": "\"Information\" siempre es incontable singular en inglés: [information + needs adding].",
    "ref": null,
    "human_rule": "Information es singular: needs adding.",
    "trigger_anchor": "The missing information ______ to the log (necesita añadirse) ➔ needs adding",
    "spanglish_trap": "Poner need porque \"información\" suena a plural. En inglés information es singular.",
    "workplace_usage": {
      "scenario": "Estructuración de Logs SIEM",
      "en": "The missing information needs adding to the log.",
      "es": "La información faltante necesita ser añadida al registro."
    }
  },
  {
    "id": "cisco-extra-8.4.1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "G01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Transform the sentence into the past passive form: \"Engineers needed to build test cases for new features.\" -> \"Test cases __________ for the new features.\"",
    "options": [
      "needed build",
      "needed building",
      "needs building",
      "needed to build"
    ],
    "answer": 1,
    "why_correct": "• Pista: ya pasó (\"needed\") y los casos de prueba reciben la acción.\n• Regla: pasado + cosa + needed + -ing ➔ needed building.\n• Descartas: \"needed build\" no tiene -ing; \"needs building\" es presente; \"needed to build\" haría que los casos construyan algo.",
    "why_wrong": [
      "Incorrecto: falta -ing.",
      "Opción correcta: \"needed building\" = \"necesitaban construirse\".",
      "Incorrecto: needs es presente, y el enunciado habla del pasado.",
      "Incorrecto: \"needed to build\" dice que los casos construyen algo."
    ],
    "tip_es": "Tiempo pasado con gerundio pasivo: [needed + verbo-ing] (\"needed building\").",
    "ref": null,
    "human_rule": "Pasado + cosa que recibe la acción ➔ needed + -ing.",
    "trigger_anchor": "Test cases ______ (ya pasó, se construían) ➔ needed building",
    "spanglish_trap": "Olvidar el pasado. Si ya pasó: needed + -ing.",
    "workplace_usage": {
      "scenario": "Estrategia de Testing Automatizado",
      "en": "Test cases needed building for the new features.",
      "es": "Los casos de prueba necesitaban ser construidos para las nuevas funcionalidades."
    }
  },
  {
    "id": "cisco-extra-8.4.2-q1",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the reassure idiom: \"I should be able to fix that for you right away. __________ .\"",
    "options": [
      "There’s nothing to it",
      "It was a piece of cake",
      "Did more harm than good",
      "There’s no problem at all"
    ],
    "answer": 0,
    "why_correct": "• Pista: se quiere tranquilizar a alguien: arreglarlo es fácil.\n• Regla: \"no tiene ciencia\" ➔ There's nothing to it.\n• Descartas: \"It was a piece of cake\" habla del pasado; \"did more harm than good\" es negativo; \"no problem at all\" no es el modismo del ejercicio.",
    "why_wrong": [
      "Opción correcta: \"There's nothing to it\" = \"no tiene ciencia\".",
      "Incorrecto: \"It was a piece of cake\" también significa \"fue fácil\", pero habla del pasado y aquí es futuro.",
      "Incorrecto: \"did more harm than good\" significa que empeoró las cosas.",
      "Incorrecto: \"There's no problem at all\" tiene sentido, pero no es el modismo que busca el ejercicio."
    ],
    "tip_es": "Idiom oficial de Cisco para tareas fáciles: [There’s nothing to it] (\"No tiene ciencia / es pan comido\").",
    "ref": null,
    "human_rule": "\"Es muy fácil\" ➔ There's nothing to it.",
    "trigger_anchor": "I should be able to fix that right away. ______ ➔ There's nothing to it",
    "spanglish_trap": "Elegir la opción que suena más lógica en español. Aquí se pide el modismo exacto.",
    "workplace_usage": {
      "scenario": "Atención al Cliente en IT Helpdesk",
      "en": "I should be able to fix that for you right away. There’s nothing to it.",
      "es": "Debería poder arreglar eso por ti de inmediato. No tiene ningún misterio / no es nada del otro mundo."
    }
  },
  {
    "id": "cisco-extra-8.4.2-q2",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the postmortem sentence: \"In the end, the configuration changes __________ . We wasted a lot of time.\"",
    "options": [
      "made more bad than good",
      "did more harm than good",
      "there was nothing to it",
      "did harm more than good"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"We wasted a lot of time\": los cambios empeoraron las cosas.\n• Regla: \"hizo más mal que bien\" ➔ did more harm than good.\n• Descartas: \"made more bad than good\" y \"did harm more than good\" no existen; \"there was nothing to it\" significa \"fue fácil\".",
    "why_wrong": [
      "Incorrecto: \"made more bad than good\" no es el modismo.",
      "Opción correcta: \"did more harm than good\" = \"hizo más mal que bien\".",
      "Incorrecto: \"there was nothing to it\" significa \"fue fácil\".",
      "Incorrecto: \"did harm more than good\" tiene el orden roto."
    ],
    "tip_es": "Idiom oficial de incidencias: [did more harm than good] (hizo más mal que bien / fue contraproducente).",
    "ref": null,
    "human_rule": "\"Hizo más mal que bien\" ➔ did more harm than good.",
    "trigger_anchor": "the changes ______. We wasted a lot of time ➔ did more harm than good",
    "spanglish_trap": "Calcar \"más mal que bien\" como \"more bad than good\". En inglés es harm.",
    "workplace_usage": {
      "scenario": "Postmortem de Incidencia de Red",
      "en": "In the end, the configuration changes did more harm than good. We wasted a lot of time.",
      "es": "Al final, los cambios de configuración hicieron más daño que bien. Perdimos mucho tiempo."
    }
  },
  {
    "id": "cisco-extra-8.4.2-q3",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the feedback: \"I was very pleased with the service I received. They solved the issue in no time. __________ .\"",
    "options": [
      "There was no harm to it",
      "Did more harm than good",
      "There was nothing to it",
      "It made harm"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"They solved the issue in no time\": fue fácil y rápido.\n• Regla: \"no tuvo ciencia\" ➔ There was nothing to it.\n• Descartas: \"did more harm than good\" es negativo; las otras dos no son modismos.",
    "why_wrong": [
      "Incorrecto: \"There was no harm to it\" no es un modismo.",
      "Incorrecto: \"Did more harm than good\" significa que empeoró las cosas, y aquí quedó satisfecho.",
      "Opción correcta: \"There was nothing to it\" = \"no tuvo ciencia\".",
      "Incorrecto: \"It made harm\" no existe."
    ],
    "tip_es": "Versión en pasado de \"There's nothing to it\": [There was nothing to it].",
    "ref": null,
    "human_rule": "\"No tuvo ciencia\" ➔ There was nothing to it.",
    "trigger_anchor": "They solved the issue in no time. ______ ➔ There was nothing to it",
    "spanglish_trap": "Mezclar el modismo de lo fácil con el de lo dañino. Mira si el tono es positivo o negativo.",
    "workplace_usage": {
      "scenario": "Encuesta de Satisfacción CSAT",
      "en": "I was very pleased with the service. They solved the issue in no time. There was nothing to it.",
      "es": "Quedé muy satisfecho con el servicio. Resolvieron el problema en poco tiempo. No tuvo ninguna complicación."
    }
  },
  {
    "id": "cisco-extra-8.4.2-q4",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the evaluation: \"I wasn't convinced that they knew what they were doing. As the problem now seems worse, I think they probably __________ .\"",
    "options": [
      "there was nothing to it",
      "made more harm than good",
      "did harm",
      "did more harm than good"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"the problem now seems worse\": la intervención empeoró las cosas.\n• Regla: \"hicieron más mal que bien\" ➔ did more harm than good.\n• Descartas: \"there was nothing to it\" es positivo; \"made more harm\" y \"did harm\" no son el modismo.",
    "why_wrong": [
      "Incorrecto: \"there was nothing to it\" significa \"fue fácil\", y aquí empeoró.",
      "Incorrecto: se dice \"did\" harm, no \"made\" harm.",
      "Incorrecto: \"did harm\" le falta \"more… than good\".",
      "Opción correcta: \"did more harm than good\" = \"hicieron más mal que bien\"."
    ],
    "tip_es": "Colocación fija: siempre \"do harm\" (did more harm than good), jamás \"make harm\".",
    "ref": null,
    "human_rule": "Empeoró las cosas ➔ did more harm than good.",
    "trigger_anchor": "the problem now seems worse ➔ they probably ______ ➔ did more harm than good",
    "spanglish_trap": "Decir \"made harm\". Con harm, el verbo es do (did).",
    "workplace_usage": {
      "scenario": "Escalación de Soporte a Nivel 3",
      "en": "As the problem now seems worse, I think they probably did more harm than good.",
      "es": "Como el problema ahora parece peor, creo que probablemente hicieron más daño que bien."
    }
  },
  {
    "id": "cisco-extra-8.4.2-q5",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the reflection: \"In the end __________ . I expected it to be a lot more complicated.\"",
    "options": [
      "there was nothing to it",
      "it did more harm than good",
      "there was no thing to it",
      "it had nothing to it"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"I expected it to be a lot more complicated\": resultó fácil.\n• Regla: \"no tuvo ciencia\" ➔ there was nothing to it.\n• Descartas: \"did more harm than good\" es negativo; \"no thing to it\" y \"had nothing to it\" no existen.",
    "why_wrong": [
      "Opción correcta: \"there was nothing to it\" = \"no tenía ciencia\".",
      "Incorrecto: \"it did more harm than good\" significa que empeoró las cosas.",
      "Incorrecto: \"no thing to it\" no existe; es \"nothing\".",
      "Incorrecto: \"it had nothing to it\" no es el modismo."
    ],
    "tip_es": "Relieve de alivio técnico en pasado: [there was nothing to it] (al final fue facilísimo).",
    "ref": null,
    "human_rule": "\"No tenía ciencia\" ➔ there was nothing to it.",
    "trigger_anchor": "I expected it to be more complicated ➔ there was nothing to it",
    "spanglish_trap": "Separar \"no thing\". En el modismo va nothing, junto.",
    "workplace_usage": {
      "scenario": "Migración de Base de Datos Exitosa",
      "en": "In the end there was nothing to it. I expected it to be a lot more complicated.",
      "es": "Al final no tuvo ninguna complicación. Esperaba que fuera mucho más complicado."
    }
  },
  {
    "id": "cisco-extra-8.4.2-q6",
    "section": "UE",
    "objective": "UE4",
    "topic": "G26",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the observation: \"The way they were speaking to that customer has definitely __________ .\"",
    "options": [
      "made more harm than good",
      "done more harm than good",
      "there was nothing to it",
      "done harm more than good"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"has definitely…\" va con 3.ª forma, y habla de algo que dañó.\n• Regla: \"ha hecho más mal que bien\" ➔ has done more harm than good.\n• Descartas: \"made more harm\" y \"done harm more\" no existen; \"there was nothing to it\" no encaja con \"has\".",
    "why_wrong": [
      "Incorrecto: se dice \"done\" harm, no \"made\" harm.",
      "Opción correcta: \"has done more harm than good\" = \"ha hecho más mal que bien\".",
      "Incorrecto: \"there was nothing to it\" no encaja con \"has definitely\".",
      "Incorrecto: \"done harm more than good\" tiene el orden roto."
    ],
    "tip_es": "Present Perfect del idiom: [has/have definitely done more harm than good].",
    "ref": null,
    "human_rule": "has done more harm than good.",
    "trigger_anchor": "has definitely ______ ➔ done more harm than good",
    "spanglish_trap": "Decir \"made harm\". Con harm, el verbo es do.",
    "workplace_usage": {
      "scenario": "Atención al Cliente y Desescalación de Incidentes",
      "en": "The way they were speaking to that customer has definitely done more harm than good.",
      "es": "La forma en que le hablaban a ese cliente definitivamente ha hecho más daño que bien."
    }
  },
  {
    "id": "cisco-extra-8.4.3-q1",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the collaborative suggestion: \"__________ us about your experience of data classification?\"",
    "options": [
      "How about telling",
      "Shall you tell",
      "Shouldn't you tell",
      "How about to tell"
    ],
    "answer": 0,
    "why_correct": "• Pista: es una sugerencia y el verbo va después.\n• Regla: How about + verbo con -ing.\n• Descartas: \"Shall you\" no se usa así; \"Shouldn't you tell\" suena a reproche; \"How about to tell\" lleva to.",
    "why_wrong": [
      "Opción correcta: \"How about telling us…?\" = \"¿qué tal si nos cuentas…?\".",
      "Incorrecto: Shall se usa con we o I, no con you.",
      "Incorrecto: \"Shouldn't you tell\" suena a reproche, no a invitación.",
      "Incorrecto: después de How about va -ing, no to."
    ],
    "tip_es": "Fórmula de sugerencia: [How about + verbo-ing?]. Ejemplo: \"How about telling us...?\".",
    "ref": null,
    "human_rule": "\"¿Qué tal si…?\" ➔ How about + verbo con -ing.",
    "trigger_anchor": "______ us about your experience? (qué tal si) ➔ How about telling",
    "spanglish_trap": "Poner to después de How about. Va el verbo con -ing.",
    "workplace_usage": {
      "scenario": "Retrospectiva de Clasificación de Datos",
      "en": "How about telling us about your experience of data classification?",
      "es": "¿Qué tal si nos cuentas sobre tu experiencia en clasificación de datos?"
    }
  },
  {
    "id": "cisco-extra-8.4.3-q2",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the suggestion about scheduling: \"__________ we talk about the data classification later on today?\"",
    "options": [
      "How about",
      "Shall",
      "Shouldn't",
      "Would"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene \"we talk\", sin to ni -ing.\n• Regla: proponer algo juntos ➔ Shall we + verbo.\n• Descartas: \"How about we talk\" es más informal; Shouldn't y Would cambian la intención.",
    "why_wrong": [
      "Incorrecto: \"How about we talk\" es informal; este ejercicio busca Shall.",
      "Opción correcta: \"Shall we talk…?\" = \"¿hablamos…?\".",
      "Incorrecto: \"Shouldn't we talk\" suena a insistencia o reproche.",
      "Incorrecto: \"Would we talk\" no es una propuesta."
    ],
    "tip_es": "Propuesta formal conjunta: [Shall we + verbo base sin to?].",
    "ref": null,
    "human_rule": "Proponer algo juntos ➔ Shall we + verbo.",
    "trigger_anchor": "______ we talk about… later today? (propuesta) ➔ Shall",
    "spanglish_trap": "Traducir \"¿hablamos?\" con will o would. Para proponer, Shall we.",
    "workplace_usage": {
      "scenario": "Coordinación de Reunión de Seguridad",
      "en": "Shall we talk about the data classification later on today?",
      "es": "¿Hablamos de la clasificación de datos más tarde hoy?"
    }
  },
  {
    "id": "cisco-extra-8.4.3-q3",
    "section": "UE",
    "objective": "UE5",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the persuasive suggestion: \"__________ we be giving more time to tightening personal data security?\"",
    "options": [
      "Shall",
      "How about",
      "Shouldn’t",
      "Mustn’t"
    ],
    "answer": 2,
    "why_correct": "• Pista: es una sugerencia con insistencia suave (\"¿no deberíamos…?\").\n• Regla: Shouldn't we + be + -ing.\n• Descartas: Shall y How about no van con \"we be giving\"; Mustn't es prohibición.",
    "why_wrong": [
      "Incorrecto: \"Shall we be giving\" suena poco natural.",
      "Incorrecto: How about no se usa con \"we be giving\".",
      "Opción correcta: \"Shouldn't we be giving…?\" = \"¿no deberíamos dedicar…?\".",
      "Incorrecto: Mustn't es una prohibición."
    ],
    "tip_es": "Sugerencia persuasiva de reflexión en equipo: [Shouldn’t we be + verbo-ing?].",
    "ref": null,
    "human_rule": "\"¿No deberíamos…?\" ➔ Shouldn't we…?",
    "trigger_anchor": "______ we be giving more time… (¿no deberíamos?) ➔ Shouldn't",
    "spanglish_trap": "Usar Mustn't pensando en \"no deberíamos\". Mustn't es \"prohibido\".",
    "workplace_usage": {
      "scenario": "Debate de Prioridades de Ciberseguridad",
      "en": "Shouldn’t we be giving more time to tightening personal data security?",
      "es": "¿No deberíamos estar dedicando más tiempo a reforzar la seguridad de los datos personales?"
    }
  },
  {
    "id": "cisco-extra-8.4.3-q4",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the proposal: \"__________ discussing the issue further?\"",
    "options": [
      "Shall we",
      "Shouldn’t we",
      "Why don’t",
      "How about"
    ],
    "answer": 3,
    "why_correct": "• Pista: después del hueco viene un verbo con -ing.\n• Regla: How about + -ing.\n• Descartas: \"Shall we\" y \"Shouldn't we\" van con verbo base; \"Why don't\" va con sujeto y verbo base.",
    "why_wrong": [
      "Incorrecto: Shall we va con verbo base, no con -ing.",
      "Incorrecto: Shouldn't we va con verbo base, no con -ing.",
      "Incorrecto: \"Why don't\" va con sujeto y verbo base.",
      "Opción correcta: \"How about discussing…?\" = \"¿qué tal si discutimos…?\"."
    ],
    "tip_es": "Delante de un gerundio directo (\"discussing...?\") -> SIEMPRE: \"How about\".",
    "ref": null,
    "human_rule": "How about + verbo con -ing.",
    "trigger_anchor": "______ discussing the issue further? (-ing) ➔ How about",
    "spanglish_trap": "Mezclar Shall we con -ing. Con -ing va How about.",
    "workplace_usage": {
      "scenario": "Facilitación de Reunión Técnica",
      "en": "How about discussing the issue further?",
      "es": "¿Qué tal si discutimos el tema más a fondo?"
    }
  },
  {
    "id": "cisco-extra-8.4.3-q5",
    "section": "UE",
    "objective": "UE2",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the proposal: \"__________ the Critical Processes Management Procedure?\"",
    "options": [
      "How about",
      "Shall",
      "Shouldn’t",
      "Would"
    ],
    "answer": 0,
    "why_correct": "• Pista: después del hueco va una cosa, sin verbo.\n• Regla: How about + cosa (proponer un tema).\n• Descartas: Shall, Shouldn't y Would necesitan un sujeto y un verbo.",
    "why_wrong": [
      "Opción correcta: \"How about the Procedure?\" = \"¿qué tal el procedimiento?\".",
      "Incorrecto: Shall necesita sujeto y verbo después.",
      "Incorrecto: Shouldn't necesita sujeto y verbo después.",
      "Incorrecto: Would necesita sujeto y verbo después."
    ],
    "tip_es": "Sugerencia introduciendo directamente un tema/sustantivo: [How about + sustantivo?].",
    "ref": null,
    "human_rule": "How about + cosa (proponer un tema).",
    "trigger_anchor": "______ the Critical Processes Procedure? (una cosa) ➔ How about",
    "spanglish_trap": "Añadir un verbo que no hace falta. How about acepta directamente una cosa.",
    "workplace_usage": {
      "scenario": "Definición de Agenda de Auditoría",
      "en": "How about the Critical Processes Management Procedure?",
      "es": "¿Qué tal el Procedimiento de Gestión de Procesos Críticos?"
    }
  },
  {
    "id": "cisco-extra-8.4.3-q6",
    "section": "UE",
    "objective": "UE5",
    "topic": "G08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the collaborative suggestion: \"__________ consider a different approach?\"",
    "options": [
      "How about",
      "Shouldn’t we",
      "Shall to",
      "Why not we"
    ],
    "answer": 1,
    "why_correct": "• Pista: después del hueco viene un verbo base.\n• Regla: Shouldn't we + verbo base.\n• Descartas: \"How about consider\" no lleva -ing; \"Shall to\" lleva to; \"Why not we\" tiene el orden roto.",
    "why_wrong": [
      "Incorrecto: How about va con -ing, no con verbo base.",
      "Opción correcta: \"Shouldn't we consider…?\" = \"¿no deberíamos considerar…?\".",
      "Incorrecto: después de Shall no va to.",
      "Incorrecto: \"Why not we\" tiene el orden roto; es \"Why don't we\"."
    ],
    "tip_es": "Sugerencia con verbo base: [Shouldn’t we + infinitivo?].",
    "ref": null,
    "human_rule": "\"¿No deberíamos…?\" ➔ Shouldn't we + verbo base.",
    "trigger_anchor": "______ consider a different approach? ➔ Shouldn't we",
    "spanglish_trap": "Copiar el orden del español (\"Why not we\"). En inglés: Why don't we / Shouldn't we.",
    "workplace_usage": {
      "scenario": "Diseño de Solución de Arquitectura",
      "en": "Shouldn’t we consider a different approach?",
      "es": "¿No deberíamos considerar un enfoque diferente?"
    }
  },
  {
    "id": "cisco-extra-8.4.4-q1",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite into a polite professional request: \"I want you to investigate further.\" -> \"__________ to investigate further.\"",
    "options": [
      "I'd like you",
      "I'd like that you",
      "I want that you",
      "I would that you"
    ],
    "answer": 0,
    "why_correct": "• Pista: se quiere pedir con cortesía \"quiero que investigues\".\n• Regla: I'd like + persona + to + verbo.\n• Descartas: \"I'd like that you\", \"I want that you\" y \"I would that you\" no existen en inglés.",
    "why_wrong": [
      "Opción correcta: \"I'd like you to investigate\" = \"me gustaría que investigaras\".",
      "Incorrecto: después de I'd like no va \"that you\".",
      "Incorrecto: después de want no va \"that you\".",
      "Incorrecto: \"I would that you\" no es una forma usual."
    ],
    "tip_es": "Regla de oro: [I'd like you to + verbo]. NUNCA \"I'd like that you\".",
    "ref": null,
    "human_rule": "\"Quisiera que tú…\" ➔ I'd like you to + verbo.",
    "trigger_anchor": "______ to investigate further ➔ I'd like you",
    "spanglish_trap": "Copiar \"que tú\" como \"that you\". En inglés va persona + to + verbo.",
    "workplace_usage": {
      "scenario": "Instrucción a Ingeniero Junior",
      "en": "I’d like you to investigate further.",
      "es": "Me gustaría que investigaras más a fondo."
    }
  },
  {
    "id": "cisco-extra-8.4.4-q2",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite into a polite professional inquiry: \"I want to know why we still haven't addressed the system vulnerabilities.\" -> \"__________ why we still haven't addressed the system vulnerabilities.\"",
    "options": [
      "I'd like knowing",
      "I'd like to know",
      "I would to know",
      "I'd like that I know"
    ],
    "answer": 1,
    "why_correct": "• Pista: se quiere pedir con cortesía \"quiero saber\".\n• Regla: I'd like + to + verbo.\n• Descartas: \"I'd like knowing\" y \"I would to know\" no existen; \"I'd like that I know\" tampoco.",
    "why_wrong": [
      "Incorrecto: después de I'd like va \"to\" + verbo, no -ing.",
      "Opción correcta: \"I'd like to know\" = \"me gustaría saber\".",
      "Incorrecto: falta \"like\" entre would y to.",
      "Incorrecto: \"I'd like that I know\" no existe."
    ],
    "tip_es": "Deseo cortés en primera persona: [I'd like to know] (me gustaría saber).",
    "ref": null,
    "human_rule": "\"Me gustaría saber…\" ➔ I'd like to know…",
    "trigger_anchor": "______ why we still haven't addressed… ➔ I'd like to know",
    "spanglish_trap": "Copiar \"me gustaría que yo sepa\". Con el mismo sujeto va to + verbo.",
    "workplace_usage": {
      "scenario": "Comité de Seguridad y Riesgo",
      "en": "I’d like to know why we still haven’t addressed the system vulnerabilities.",
      "es": "Me gustaría saber por qué todavía no hemos abordado las vulnerabilidades del sistema."
    }
  },
  {
    "id": "cisco-extra-8.4.4-q3",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite the instruction with diplomatic politeness: \"It seems that the antivirus software installation was overlooked. I want you to look into this issue, please.\" -> \"It seems that the antivirus software installation was overlooked. __________ to look into this issue, please.\"",
    "options": [
      "I'd like that you",
      "I like you",
      "I'd like you",
      "I would like for you"
    ],
    "answer": 2,
    "why_correct": "• Pista: se pide con cortesía que otra persona haga algo.\n• Regla: I'd like + persona + to + verbo.\n• Descartas: \"I'd like that you\" no existe; \"I like you\" cambia el sentido; \"I would like for you\" es válido en inglés americano, pero este ejercicio busca la forma sin for.",
    "why_wrong": [
      "Incorrecto: después de I'd like no va \"that you\".",
      "Incorrecto: \"I like you\" significa \"me caes bien\".",
      "Opción correcta: \"I'd like you to look into this\" = \"me gustaría que lo revisaras\".",
      "Incorrecto: \"I would like for you\" también se usa (sobre todo en inglés americano); este ejercicio busca \"I'd like you\"."
    ],
    "tip_es": "Petición cortés de acción a un colega: [I'd like you to look into...].",
    "ref": null,
    "human_rule": "\"Me gustaría que tú…\" ➔ I'd like you to + verbo.",
    "trigger_anchor": "______ to look into this issue, please ➔ I'd like you",
    "spanglish_trap": "Confundir I like con I'd like. I like es gusto general; I'd like es una petición.",
    "workplace_usage": {
      "scenario": "Gestión de Incidencias de Seguridad",
      "en": "It seems that the antivirus software installation was overlooked. I’d like you to look into this issue, please.",
      "es": "Parece que se pasó por alto la instalación del software antivirus. Me gustaría que investigaras este asunto, por favor."
    }
  },
  {
    "id": "cisco-extra-8.4.4-q4",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite into an executive directive: \"It appears that the antivirus software hasn't been installed. I want you to deal with this as a top priority.\" -> \"It appears that the antivirus software hasn't been installed. __________ to deal with this as a top priority.\"",
    "options": [
      "I would like that you",
      "I want that you",
      "I'd like you that you",
      "I'd like you"
    ],
    "answer": 3,
    "why_correct": "• Pista: es una instrucción directiva pero cortés.\n• Regla: I'd like + persona + to + verbo.\n• Descartas: \"I would like that you\", \"I want that you\" y \"I'd like you that you\" no existen.",
    "why_wrong": [
      "Incorrecto: después de like no va \"that you\".",
      "Incorrecto: después de want no va \"that you\".",
      "Incorrecto: \"you that you\" repite el sujeto.",
      "Opción correcta: \"I'd like you to deal with this\" = \"me gustaría que te ocuparas de esto\"."
    ],
    "tip_es": "Patrón estricto: [I'd like you to + verbo base].",
    "ref": null,
    "human_rule": "I'd like you to + verbo.",
    "trigger_anchor": "______ to deal with this as a top priority ➔ I'd like you",
    "spanglish_trap": "Repetir el sujeto (\"you that you\"). Una sola vez: I'd like you to.",
    "workplace_usage": {
      "scenario": "Priorización de Tarea Crítica",
      "en": "It appears that the antivirus software hasn’t been installed. I’d like you to deal with this as a top priority.",
      "es": "Parece que el software antivirus no ha sido instalado. Me gustaría que te ocuparas de esto como una máxima prioridad."
    }
  },
  {
    "id": "cisco-extra-8.4.4-q5",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite the institutional intention: \"The company wants to update the password policy.\" -> \"The company __________ to update the password policy.\"",
    "options": [
      "would like",
      "would likes",
      "is liking",
      "would like to that"
    ],
    "answer": 0,
    "why_correct": "• Pista: es la empresa quien quiere algo, en tercera persona.\n• Regla: would like + to + verbo (sin -s).\n• Descartas: \"would likes\" lleva -s de más; \"is liking\" cambia el sentido; \"would like to that\" no existe.",
    "why_wrong": [
      "Opción correcta: \"would like to update\" = \"quisiera actualizar\".",
      "Incorrecto: después de would el verbo va sin -s.",
      "Incorrecto: \"is liking\" no se usa para querer algo.",
      "Incorrecto: \"would like to that\" no existe."
    ],
    "tip_es": "Tras would, el verbo va en infinitivo base: [The company would like to update]. ¡Sin \"-s\"!",
    "ref": null,
    "human_rule": "Después de would, el verbo va sin -s: would like to.",
    "trigger_anchor": "The company ______ to update the policy ➔ would like",
    "spanglish_trap": "Poner la -s de tercera persona después de would. Después de would, nunca.",
    "workplace_usage": {
      "scenario": "Comunicado Oficial de Políticas InfoSec",
      "en": "The company would like to update the password policy.",
      "es": "A la empresa le gustaría actualizar la política de contraseñas."
    }
  },
  {
    "id": "cisco-extra-8.4.4-q6",
    "section": "UE",
    "objective": "UE2",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Rewrite the policy reminder politely: \"I want to remind you of the importance of following the clean desk policy.\" -> \"__________ to remind you of the importance of following the clean desk policy.\"",
    "options": [
      "I like",
      "I'd like",
      "I would to like",
      "I'd liking"
    ],
    "answer": 1,
    "why_correct": "• Pista: se recuerda algo con cortesía (\"I want to remind you\" ➔ más suave).\n• Regla: I'd like + to + verbo.\n• Descartas: \"I like\" cambia el sentido; \"I would to like\" y \"I'd liking\" no existen.",
    "why_wrong": [
      "Incorrecto: \"I like\" significa \"me gusta\"; cambia el sentido.",
      "Opción correcta: \"I'd like to remind you\" = \"quisiera recordarle\".",
      "Incorrecto: \"I would to like\" tiene el orden roto.",
      "Incorrecto: \"I'd liking\" no existe."
    ],
    "tip_es": "Fórmula de cortesía para avisos y recordatorios: [I'd like to remind you...].",
    "ref": null,
    "human_rule": "\"Quisiera recordarle…\" ➔ I'd like to remind you…",
    "trigger_anchor": "______ to remind you of the policy ➔ I'd like",
    "spanglish_trap": "Decir I like to remind (\"me gusta recordar\"). Para suavizar, I'd like.",
    "workplace_usage": {
      "scenario": "Cumplimiento de Seguridad Física (Clean Desk Policy)",
      "en": "I’d like to remind you of the importance of following the clean desk policy.",
      "es": "Me gustaría recordarte la importancia de seguir la política de escritorio limpio."
    }
  },
  {
    "id": "cisco-extra-8.4.5-q1",
    "section": "UE",
    "objective": "UE5",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unscramble the hedging phrase: (knowledge, best, To, the, my, of) \"__________ all of the security tests have been carried out.\"",
    "options": [
      "To the best of my knowledge",
      "To my best knowledge of",
      "According to my best knowledge",
      "For the best of my knowledge"
    ],
    "answer": 0,
    "why_correct": "• Pista: las palabras forman una expresión fija para decir lo que sabes.\n• Regla: \"que yo sepa\" ➔ To the best of my knowledge.\n• Descartas: las otras cambian preposiciones o el orden.",
    "why_wrong": [
      "Opción correcta: \"To the best of my knowledge\" = \"que yo sepa\".",
      "Incorrecto: \"To my best knowledge of\" no es la expresión.",
      "Incorrecto: \"According to my best knowledge\" no es la expresión.",
      "Incorrecto: \"For the best of my knowledge\" no es la expresión."
    ],
    "tip_es": "Locución fija de atenuación: [To the best of my knowledge] (\"Hasta donde yo sé / que yo sepa\").",
    "ref": null,
    "human_rule": "\"Que yo sepa\" ➔ To the best of my knowledge.",
    "trigger_anchor": "(knowledge, best, To, the, my, of) ➔ To the best of my knowledge",
    "spanglish_trap": "Cambiar la preposición (For, According to). La expresión fija usa To… of.",
    "workplace_usage": {
      "scenario": "Auditoría y Declaración de Cumplimiento",
      "en": "To the best of my knowledge, all of the security tests have been carried out.",
      "es": "Que yo sepa / Hasta donde sé, se han llevado a cabo todas las pruebas de seguridad."
    }
  },
  {
    "id": "cisco-extra-8.4.5-q2",
    "section": "UE",
    "objective": "UE5",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unscramble the expression of awareness: (far, I, as, As, aware, am) \"__________ , the information was encrypted before being sent.\"",
    "options": [
      "As far as I aware am",
      "As far as I am aware",
      "So far as I am aware",
      "As far as I have aware"
    ],
    "answer": 1,
    "why_correct": "• Pista: las palabras forman la expresión \"que yo sepa\".\n• Regla: As far as I am aware.\n• Descartas: \"As far as I aware am\" y \"I have aware\" tienen el orden o el verbo mal; \"So far as I am aware\" es posible, pero este ejercicio busca \"As far as\".",
    "why_wrong": [
      "Incorrecto: el orden está roto (\"aware am\").",
      "Opción correcta: \"As far as I am aware\" = \"que yo sepa\".",
      "Incorrecto: \"So far as I am aware\" también se usa; este ejercicio busca \"As far as\".",
      "Incorrecto: \"have aware\" no es una forma válida."
    ],
    "tip_es": "Fórmula de cautela: [As far as I am aware] (\"Por lo que tengo entendido\").",
    "ref": null,
    "human_rule": "\"Que yo sepa\" ➔ As far as I am aware.",
    "trigger_anchor": "(far, I, as, As, aware, am) ➔ As far as I am aware",
    "spanglish_trap": "Poner aware antes de am. Es I AM aware.",
    "workplace_usage": {
      "scenario": "Reporte de Fuga de Datos",
      "en": "As far as I am aware, the information was encrypted before being sent.",
      "es": "Por lo que yo sé, la información estaba cifrada antes de ser enviada."
    }
  },
  {
    "id": "cisco-extra-8.4.5-q3",
    "section": "UE",
    "objective": "UE5",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unscramble the professional doubt expression: (doubts, have, some, I) \"__________ over whether everything was fully compliant.\"",
    "options": [
      "I am having some doubts",
      "I have doubts some",
      "I have some doubts",
      "Some doubts have I"
    ],
    "answer": 2,
    "why_correct": "• Pista: las palabras forman \"tengo algunas dudas\".\n• Regla: I have some doubts.\n• Descartas: \"I am having some doubts\" suena raro; \"doubts some\" y \"Some doubts have I\" tienen el orden roto.",
    "why_wrong": [
      "Incorrecto: \"I am having some doubts\" suena poco natural.",
      "Incorrecto: \"doubts some\" tiene el orden roto.",
      "Opción correcta: \"I have some doubts\" = \"tengo algunas dudas\".",
      "Incorrecto: \"Some doubts have I\" tiene el orden roto."
    ],
    "tip_es": "Fórmula diplomática de escepticismo: [I have some doubts over whether...].",
    "ref": null,
    "human_rule": "\"Tengo algunas dudas\" ➔ I have some doubts.",
    "trigger_anchor": "(doubts, have, some, I) ➔ I have some doubts",
    "spanglish_trap": "Usar am having por \"estoy teniendo\". Con doubts se dice I have.",
    "workplace_usage": {
      "scenario": "Revisión de Cumplimiento Regulatorio",
      "en": "I have some doubts over whether everything was fully compliant.",
      "es": "Tengo algunas dudas sobre si todo cumplía plenamente con la normativa."
    }
  },
  {
    "id": "cisco-extra-8.4.5-q4",
    "section": "UE",
    "objective": "UE5",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unscramble the cautious statement: (sure, not, I, absolutely, am) \"__________ , but I believe everything went smoothly with the audit.\"",
    "options": [
      "I am absolutely not sure",
      "I not am absolutely sure",
      "Not am I absolutely sure",
      "I am not absolutely sure"
    ],
    "answer": 3,
    "why_correct": "• Pista: las palabras forman \"no estoy del todo seguro\".\n• Regla: I am not absolutely sure.\n• Descartas: \"absolutely not sure\" cambia el matiz; las otras tienen el orden roto.",
    "why_wrong": [
      "Incorrecto: \"I am absolutely not sure\" suena más fuerte (\"no tengo ninguna seguridad\").",
      "Incorrecto: \"I not am\" tiene el orden roto.",
      "Incorrecto: \"Not am I\" tiene el orden roto.",
      "Opción correcta: \"I am not absolutely sure\" = \"no estoy del todo seguro\"."
    ],
    "tip_es": "Hedging de certeza parcial: [I am not absolutely sure, but...].",
    "ref": null,
    "human_rule": "\"No estoy del todo seguro\" ➔ I am not absolutely sure.",
    "trigger_anchor": "(sure, not, I, absolutely, am) ➔ I am not absolutely sure",
    "spanglish_trap": "Poner absolutely antes de not. Para matizar, primero not.",
    "workplace_usage": {
      "scenario": "Resumen Ejecutivo de Auditoría",
      "en": "I am not absolutely sure, but I believe everything went smoothly with the audit.",
      "es": "No estoy absolutamente seguro, pero creo que todo transcurrió sin problemas en la auditoría."
    }
  },
  {
    "id": "cisco-extra-8.4.5-q5",
    "section": "UE",
    "objective": "UE5",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the diplomatic disagreement: \"He says that everything was fully compliant, but __________ .\"",
    "options": [
      "I'm afraid that doesn't sound right to me",
      "I'm afraid that doesn't sound right for me",
      "I fear that doesn't sound to me right",
      "I'm afraid to me that doesn't sound right"
    ],
    "answer": 0,
    "why_correct": "• Pista: se discrepa con diplomacia (\"I'm afraid…\").\n• Regla: I'm afraid that doesn't sound right to me.\n• Descartas: \"for me\" y el orden \"to me right\" son incorrectos en esta frase.",
    "why_wrong": [
      "Opción correcta: \"I'm afraid that doesn't sound right to me\" = \"me temo que eso no me suena bien\".",
      "Incorrecto: se dice \"sound right to me\", no \"for me\".",
      "Incorrecto: el orden de \"to me right\" está roto.",
      "Incorrecto: \"to me\" no va después de afraid."
    ],
    "tip_es": "Desacuerdo profesional diplomático: [I'm afraid that doesn't sound right to me]. Preposición: \"sound right TO me\".",
    "ref": null,
    "human_rule": "\"Me temo que no me suena bien\" ➔ I'm afraid that doesn't sound right to me.",
    "trigger_anchor": "…but ______ (discrepar con suavidad) ➔ I'm afraid that doesn't sound right to me",
    "spanglish_trap": "Traducir \"para mí\" como for me. Con sound right se dice to me.",
    "workplace_usage": {
      "scenario": "Comité de Control de Calidad",
      "en": "He says that everything was fully compliant, but I’m afraid that doesn’t sound right to me.",
      "es": "Dice que todo cumplía plenamente, pero me temo que eso no me suena correcto a mí."
    }
  },
  {
    "id": "cisco-extra-8.4.5-q6",
    "section": "UE",
    "objective": "UE5",
    "topic": "G29",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the polite reservation: \"To be honest, __________ .\"",
    "options": [
      "I’m entirely not certain that’s true",
      "I’m not entirely certain that’s true",
      "I’m not certain entirely that’s true",
      "not entirely I am certain that’s true"
    ],
    "answer": 1,
    "why_correct": "• Pista: se expresa una reserva con cortesía.\n• Regla: I'm not entirely certain…\n• Descartas: \"entirely not\" cambia el matiz; las otras tienen el orden roto.",
    "why_wrong": [
      "Incorrecto: \"entirely not certain\" tiene el matiz equivocado.",
      "Opción correcta: \"I'm not entirely certain\" = \"no estoy del todo seguro\".",
      "Incorrecto: \"certain entirely\" tiene el orden roto.",
      "Incorrecto: \"not entirely I am\" tiene el orden roto."
    ],
    "tip_es": "Atenuación con adverbio de grado: [not entirely certain that...] (\"no del todo seguro de que...\").",
    "ref": null,
    "human_rule": "\"No estoy del todo seguro\" ➔ I'm not entirely certain.",
    "trigger_anchor": "To be honest, ______ (reserva) ➔ I'm not entirely certain",
    "spanglish_trap": "Poner entirely antes de not. Para matizar, primero not.",
    "workplace_usage": {
      "scenario": "Discusión de Arquitectura de Sistemas",
      "en": "To be honest, I’m not entirely certain that’s true.",
      "es": "Para ser honesto, no estoy del todo seguro de que eso sea verdad."
    }
  }
];
