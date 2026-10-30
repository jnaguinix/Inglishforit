const fs = require('fs');

/**
 * Definition of the 114 items from Cisco English for IT 1 - Appendix B: Extra Grammar Exercises
 */
const rawItems = [
  // -------------------------------------------------------------
  // 8.1.1 Tense Identification (6 items)
  // -------------------------------------------------------------
  {
    sub: '8.1.1',
    num: 1,
    stem: 'Identify the verb tense used in the following sentence: "Our company is determining how to achieve its goals using Gap Analysis."',
    correct: 'Present Continuous',
    distractors: ['Present Simple', 'Past Continuous', 'Present Perfect'],
    why_correct: 'La oración utiliza la perífrasis [is + determining] (verbo to be en presente + gerundio), lo que corresponde exactamente al Present Continuous, indicando un proceso en curso.',
    why_wrong_map: {
      'Present Simple': 'El Present Simple sería "determines", no "is determining".',
      'Past Continuous': 'El Past Continuous usaría el auxiliar en pasado: "was determining".',
      'Present Perfect': 'El Present Perfect usaría "has determined" o "has been determining".'
    },
    tip: 'Fórmula Present Continuous: [am / is / are + verbo-ing]. Indica acciones en desarrollo o tendencias actuales.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '"is determining" = está determinando ahora mismo (Present Continuous).',
    trigger: 'is determining -> Present Continuous',
    trap: 'Confundir el gerundio con un sustantivo o confundir "is" con simple copulativo.',
    usage: { scenario: 'Gap Analysis en Squad', en: 'Our company is determining how to achieve its goals using Gap Analysis.', es: 'Nuestra empresa está determinando cómo lograr sus objetivos mediante Gap Analysis.' }
  },
  {
    sub: '8.1.1',
    num: 2,
    stem: 'Identify the verb tense used in the following sentence: "Our company had determined how to achieve its goals using Gap Analysis."',
    correct: 'Past Perfect',
    distractors: ['Past Simple', 'Present Perfect', 'Past Perfect Continuous'],
    why_correct: 'La estructura [had + determined] (had + participio pasado) corresponde estrictamente al Past Perfect, señalando una acción concluida antes de otro hito en el pasado.',
    why_wrong_map: {
      'Past Simple': 'El Past Simple sería "determined" a solas, sin el auxiliar "had".',
      'Present Perfect': 'El Present Perfect usaría "has determined" en lugar de "had".',
      'Past Perfect Continuous': 'El Past Perfect Continuous requeriría "had been determining".'
    },
    tip: 'Fórmula Past Perfect: [had + participio pasado (V3)]. Expresa el "pasado del pasado".',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '"had determined" = había determinado antes de otro suceso pasado (Past Perfect).',
    trigger: 'had determined -> Past Perfect',
    trap: 'Confundir "had" con el verbo principal tener en vez del auxiliar del pluscuamperfecto.',
    usage: { scenario: 'Postmortem de Planificación', en: 'Our company had determined how to achieve its goals using Gap Analysis.', es: 'Nuestra empresa ya había determinado cómo alcanzar sus metas usando Gap Analysis.' }
  },
  {
    sub: '8.1.1',
    num: 3,
    stem: 'Identify the verb tense used in the following sentence: "Our company has been determining how to achieve its goals using Gap Analysis."',
    correct: 'Present Perfect Continuous',
    distractors: ['Past Perfect Continuous', 'Present Continuous', 'Present Perfect Simple'],
    why_correct: 'La estructura [has been + determining] (has + been + gerundio) corresponde al Present Perfect Continuous, enfatizando la continuidad y duración de la acción desde el pasado hasta el presente.',
    why_wrong_map: {
      'Past Perfect Continuous': 'El Past Perfect Continuous usaría "had been determining".',
      'Present Continuous': 'El Present Continuous sería simplemente "is determining".',
      'Present Perfect Simple': 'El Present Perfect Simple sería "has determined" sin el gerundio.'
    },
    tip: 'Fórmula Present Perfect Continuous: [has / have + been + verbo-ing]. Enfatiza duración continua.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '"has been determining" = ha venido determinando / lleva tiempo determinando (Present Perfect Continuous).',
    trigger: 'has been determining -> Present Perfect Continuous',
    trap: 'Omitir "been" o clasificarlo como simple presente continuo.',
    usage: { scenario: 'Reunión de Estrategia Anual', en: 'Our company has been determining how to achieve its goals using Gap Analysis.', es: 'Nuestra empresa ha estado determinando cómo lograr sus objetivos mediante Gap Analysis.' }
  },
  {
    sub: '8.1.1',
    num: 4,
    stem: 'Identify the verb tense used in the main clause: "Gap Analysis allowed our company to determine how to achieve our goals."',
    correct: 'Past Simple',
    distractors: ['Present Perfect', 'Past Continuous', 'Past Perfect'],
    why_correct: 'El verbo "allowed" es la forma simple de pasado regular (-ed) sin auxiliares, lo que corresponde al Past Simple.',
    why_wrong_map: {
      'Present Perfect': 'El Present Perfect requeriría "has allowed".',
      'Past Continuous': 'El Past Continuous requeriría "was allowing".',
      'Past Perfect': 'El Past Perfect requeriría "had allowed".'
    },
    tip: 'Past Simple = verbo en pasado simple (-ed o forma irregular) sin auxiliares had/have/be.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '"allowed" sin auxiliares = Pasado Simple.',
    trigger: 'allowed -> Past Simple',
    trap: 'Confundir el infinitivo con to posterior ("to determine") con el tiempo principal de la cláusula.',
    usage: { scenario: 'Evaluación de Metodologías', en: 'Gap Analysis allowed our company to determine how to achieve our goals.', es: 'El Gap Analysis permitió a nuestra empresa determinar cómo lograr nuestros objetivos.' }
  },
  {
    sub: '8.1.1',
    num: 5,
    stem: 'Identify the verb tense used in the following sentence: "Our company will have been determining how to achieve its goals using Gap Analysis."',
    correct: 'Future Perfect Continuous',
    distractors: ['Future Continuous', 'Future Perfect Simple', 'Future Simple'],
    why_correct: 'La combinación [will + have + been + determining] corresponde al Future Perfect Continuous, proyectando la duración de una acción continua hasta un punto en el futuro.',
    why_wrong_map: {
      'Future Continuous': 'El Future Continuous sería "will be determining".',
      'Future Perfect Simple': 'El Future Perfect Simple sería "will have determined".',
      'Future Simple': 'El Future Simple sería "will determine".'
    },
    tip: 'Fórmula Future Perfect Continuous: [will have been + verbo-ing]. Proyección temporal continua.',
    topic: 'G12',
    objective: 'UE1',
    human_rule: '"will have been determining" = habrá estado determinando para cierta fecha límite.',
    trigger: 'will have been determining -> Future Perfect Continuous',
    trap: 'Confundir Future Perfect Simple con Continuous.',
    usage: { scenario: 'Roadmap a 5 años', en: 'Our company will have been determining how to achieve its goals using Gap Analysis.', es: 'Nuestra empresa habrá estado determinando cómo lograr sus metas usando Gap Analysis.' }
  },
  {
    sub: '8.1.1',
    num: 6,
    stem: 'Identify the verb tense used in the following sentence: "Our company will be determining how to achieve its goals using Gap Analysis."',
    correct: 'Future Continuous',
    distractors: ['Future Simple', 'Future Perfect', 'Present Continuous'],
    why_correct: 'La estructura [will be + determining] corresponde al Future Continuous, indicando una acción que estará en desarrollo en un momento específico del futuro.',
    why_wrong_map: {
      'Future Simple': 'El Future Simple sería "will determine".',
      'Future Perfect': 'El Future Perfect sería "will have determined".',
      'Present Continuous': 'El Present Continuous sería "is determining".'
    },
    tip: 'Fórmula Future Continuous: [will be + verbo-ing]. Acción en progreso futuro.',
    topic: 'G16',
    objective: 'UE1',
    human_rule: '"will be determining" = estará determinando en el futuro.',
    trigger: 'will be determining -> Future Continuous',
    trap: 'No distinguir "will be + -ing" (en progreso) de "will + V1" (decisión o predicción puntual).',
    usage: { scenario: 'Plan de Trabajo Q3', en: 'Our company will be determining how to achieve its goals using Gap Analysis.', es: 'Nuestra empresa estará determinando cómo alcanzar sus metas usando Gap Analysis.' }
  },

  // -------------------------------------------------------------
  // 8.1.2 Past Perfect vs Present Perfect (6 items)
  // -------------------------------------------------------------
  {
    sub: '8.1.2',
    num: 1,
    stem: 'Complete the sentence: "We explained that we __________ a comprehensive procedure on how to address security flaws."',
    correct: 'had considered',
    distractors: ['have considered', 'consider', 'are considering'],
    why_correct: 'En estilo indirecto en pasado ("We explained that..."), la acción previa de considerar debe ir en Past Perfect ("had considered") por concordancia temporal (backshift).',
    why_wrong_map: {
      'have considered': 'Incorrecto: no concuerda en tiempo con la cláusula principal en pasado ("explained").',
      'consider': 'Incorrecto: presente simple incompatible con el relato en pasado.',
      'are considering': 'Incorrecto: presente continuo rompe la correlación de tiempos pasados.'
    },
    tip: 'Regla de correlación temporal: Verbo principal en pasado ("explained") + hecho previo = Past Perfect ("had considered").',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Si explicaste en el pasado lo que ya habías hecho antes, usa "had considered".',
    trigger: 'We explained that we __________ -> had considered',
    trap: 'Usar "have considered" por traducción literal de "hemos considerado".',
    usage: { scenario: 'Auditoría de Seguridad', en: 'We explained that we had considered a comprehensive procedure on how to address security flaws.', es: 'Explicamos que habíamos considerado un procedimiento integral sobre cómo abordar las fallas de seguridad.' }
  },
  {
    sub: '8.1.2',
    num: 2,
    stem: 'Complete the sentence: "They wanted to go ahead with the plans but we told them that we __________ to rethink our strategy."',
    correct: 'had just decided',
    distractors: ['have just decided', 'just decide', 'would just decide'],
    why_correct: 'Al reportar una decisión ocurrida justo antes de hablar en pasado ("we told them that..."), se requiere Past Perfect con adverbio ("had just decided").',
    why_wrong_map: {
      'have just decided': 'Incorrecto: presente perfecto no concuerda con "told" en pasado.',
      'just decide': 'Incorrecto: presente simple agramatical en este contexto.',
      'would just decide': 'Incorrecto: expresaría una acción futura condicional, no un hecho ya decidido.'
    },
    tip: 'Cláusula en pasado ("told them") + acción recién concluida = [had + just + participio pasado].',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Para decir "acabábamos de decidir" dentro de un relato en pasado: "had just decided".',
    trigger: 'told them that we __________ -> had just decided',
    trap: 'Poner "have just decided" por no notar que el verbo introductorio es "told".',
    usage: { scenario: 'Reunión de Cambio de Estrategia', en: 'They wanted to go ahead with the plans but we told them that we had just decided to rethink our strategy.', es: 'Ellos querían seguir adelante con los planes pero les dijimos que acabábamos de decidir repensar nuestra estrategia.' }
  },
  {
    sub: '8.1.2',
    num: 3,
    stem: 'Complete the sentence: "They aren\'t joining us for the review because they __________ they need to finish their report by the end of today."',
    correct: 'have just found out',
    distractors: ['had just found out', 'just find out', 'are just finding out'],
    why_correct: 'El contexto principal está en presente ("aren\'t joining us"), por lo que una noticia reciente con impacto en el presente requiere Present Perfect ("have just found out").',
    why_wrong_map: {
      'had just found out': 'Incorrecto: Past Perfect requeriría un contexto narrativo pasado, pero aquí el contexto es presente ("aren\'t joining").',
      'just find out': 'Incorrecto: falta el auxiliar have para un descubrimiento reciente.',
      'are just finding out': 'Incorrecto: no es común usar continuo para el verbo de percepción puntual "find out".'
    },
    tip: 'Contexto presente ("aren\'t joining") + noticia reciente = Present Perfect ("have just found out").',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Si la situación actual es presente ("they aren\'t"), lo que se acaban de enterar va con "have just found out".',
    trigger: 'They aren\'t joining us ... because they __________ -> have just found out',
    trap: 'Elegir "had" mecánicamente sin fijarse en que la oración empieza en presente ("aren\'t").',
    usage: { scenario: 'Sprint Review', en: 'They aren\'t joining us for the review because they have just found out they need to finish their report.', es: 'No nos acompañarán en la revisión porque acaban de enterarse de que necesitan terminar su informe.' }
  },
  {
    sub: '8.1.2',
    num: 4,
    stem: 'Complete the sentence: "They were late for the meeting because they __________ the day wrong."',
    correct: 'had gotten',
    distractors: ['have gotten', 'get', 'were getting'],
    why_correct: 'Llegaron tarde ("were late" - Past Simple) porque previamente se habían equivocado de día ("had gotten the day wrong" - Past Perfect).',
    why_wrong_map: {
      'have gotten': 'Incorrecto: presente perfecto incompatible con la causa de un retraso ya finalizado en pasado.',
      'get': 'Incorrecto: presente simple en cláusula de causa pasada.',
      'were getting': 'Incorrecto: equivocarse de fecha es un error puntual, no una acción progresiva continua.'
    },
    tip: 'Causa previa a un hecho en pasado ("were late"): usa Past Perfect ("had gotten").',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'El error ocurrió antes de llegar tarde: por eso se usa "had gotten".',
    trigger: 'were late ... because they __________ -> had gotten',
    trap: 'Usar "have gotten" confundiendo el tiempo del relato.',
    usage: { scenario: 'Coordinación de Calendario', en: 'They were late for the meeting because they had gotten the day wrong.', es: 'Llegaron tarde a la reunión porque se habían equivocado de día.' }
  },
  {
    sub: '8.1.2',
    num: 5,
    stem: 'Complete the sentence: "When it was suggested that we could improve on our security procedures, we told them that we __________ the key concerns they had."',
    correct: 'had already addressed',
    distractors: ['have already addressed', 'already address', 'are already addressing'],
    why_correct: 'Al responder en pasado ("we told them") que las inquietudes ya habían sido resueltas con anterioridad, es obligatorio el Past Perfect: "had already addressed".',
    why_wrong_map: {
      'have already addressed': 'Incorrecto: Present Perfect no concuerda con "told" y "was suggested".',
      'already address': 'Incorrecto: presente simple sin auxiliar.',
      'are already addressing': 'Incorrecto: presente continuo rompe la correlación temporal en pasado.'
    },
    tip: 'Acción completada antes de un diálogo en pasado ("we told them"): [had + already + participio].',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Ya habíamos solucionado el problema antes de que nos lo pidieran: "had already addressed".',
    trigger: 'told them that we __________ -> had already addressed',
    trap: 'Poner "have already addressed" por no registrar la subordinación temporal con "told".',
    usage: { scenario: 'Revisión de Auditoría', en: 'We told them that we had already addressed the key concerns they had.', es: 'Les dijimos que ya habíamos atendido las principales inquietudes que tenían.' }
  },
  {
    sub: '8.1.2',
    num: 6,
    stem: 'Complete the question: "__________ on a way forward before receiving the latest regulations?"',
    correct: 'Had you already agreed',
    distractors: ['Have you already agreed', 'Did you already agree', 'Were you already agreeing'],
    why_correct: 'La pregunta indaga si un acuerdo se había alcanzado con anterioridad a recibir la normativa ("before receiving" - punto temporal de referencia anterior), exigiendo Past Perfect.',
    why_wrong_map: {
      'Have you already agreed': 'Incorrecto: Present Perfect conectaría con el presente, ignorando el marco temporal cerrado "before receiving".',
      'Did you already agree': 'Aunque se usa en inglés informal americano, en exámenes estándar de Cambridge/Cisco B2 la acción previa a otro evento en pasado exige Past Perfect ("Had you agreed").',
      'Were you already agreeing': 'Incorrecto: "agree" es un verbo de estado puntual en acuerdos, no un proceso continuo en este contexto.'
    },
    tip: 'Acción previa a un punto de corte en pasado ("before receiving..."): [Had + sujeto + already + participio].',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '¿Ya habían acordado antes de recibir...? -> "Had you already agreed".',
    trigger: '__________ on a way forward before receiving -> Had you already agreed',
    trap: 'Marcar "Have you" creyendo que "already" solo va con Present Perfect.',
    usage: { scenario: 'Cumplimiento Normativo', en: 'Had you already agreed on a way forward before receiving the latest regulations?', es: '¿Ya habían acordado un camino a seguir antes de recibir las últimas regulaciones?' }
  }
];

console.log('Sample parsed count:', rawItems.length);
