const { createQuestion } = require('./builder_helper.cjs');

const items_8_1 = [
  // =========================================================
  // 8.1.1 Tense Identification (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.1.1-q1',
    sub: '8.1.1',
    num: 1,
    stem: 'Identify the verb tense used in the following sentence: "Our company is determining how to achieve its goals using Gap Analysis."',
    correct: 'Present Continuous',
    distractors: ['Present Simple', 'Past Continuous', 'Present Perfect'],
    why_correct: 'Utiliza la estructura [is + determining] (to be en presente + gerundio), que corresponde exactamente al Present Continuous para indicar un proceso activo en curso.',
    why_wrong_map: {
      'Present Simple': 'El Present Simple sería "determines", no la perífrasis con "is".',
      'Past Continuous': 'El Past Continuous requeriría "was determining".',
      'Present Perfect': 'El Present Perfect requeriría "has determined".'
    },
    tip: 'Present Continuous = [am/is/are + verbo-ing]. Acciones en progreso o tendencias.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '"is determining" = está determinando ahora mismo (Present Continuous).',
    trigger: 'is determining -> Present Continuous',
    trap: 'Confundir el gerundio con un sustantivo o no reconocer el auxiliar "is".',
    usage: { scenario: 'Planificación de Squad', en: 'Our company is determining how to achieve its goals using Gap Analysis.', es: 'Nuestra empresa está determinando cómo lograr sus objetivos mediante Gap Analysis.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.1-q2',
    sub: '8.1.1',
    num: 2,
    stem: 'Identify the verb tense used in the following sentence: "Our company had determined how to achieve its goals using Gap Analysis."',
    correct: 'Past Perfect',
    distractors: ['Past Simple', 'Present Perfect', 'Past Perfect Continuous'],
    why_correct: 'La estructura [had + determined] (had + participio pasado V3) es el Past Perfect, usado para indicar una acción completada antes de otro momento en el pasado.',
    why_wrong_map: {
      'Past Simple': 'El Past Simple sería "determined" sin el auxiliar "had".',
      'Present Perfect': 'El Present Perfect usaría el auxiliar de presente "has determined".',
      'Past Perfect Continuous': 'El Past Perfect Continuous requeriría "had been determining".'
    },
    tip: 'Past Perfect = [had + participio V3]. El pasado del pasado.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '"had determined" = ya había determinado antes de otro hecho pasado.',
    trigger: 'had determined -> Past Perfect',
    trap: 'Confundir "had" como verbo principal tener en lugar del auxiliar del pluscuamperfecto.',
    usage: { scenario: 'Retrospectiva de Metodología', en: 'Our company had determined how to achieve its goals using Gap Analysis.', es: 'Nuestra empresa ya había determinado cómo alcanzar sus metas usando Gap Analysis.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.1-q3',
    sub: '8.1.1',
    num: 3,
    stem: 'Identify the verb tense used in the following sentence: "Our company has been determining how to achieve its goals using Gap Analysis."',
    correct: 'Present Perfect Continuous',
    distractors: ['Past Perfect Continuous', 'Present Continuous', 'Present Perfect Simple'],
    why_correct: 'La estructura [has been + determining] (has/have + been + gerundio) corresponde al Present Perfect Continuous, enfatizando la continuidad y duración de la acción desde el pasado hasta el presente.',
    why_wrong_map: {
      'Past Perfect Continuous': 'El Past Perfect Continuous usaría "had been determining".',
      'Present Continuous': 'El Present Continuous sería simplemente "is determining".',
      'Present Perfect Simple': 'El Present Perfect Simple sería "has determined" sin "been".'
    },
    tip: 'Present Perfect Continuous = [have/has been + verbo-ing]. Acción continua con impacto presente.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '"has been determining" = ha venido determinando / lleva tiempo determinando.',
    trigger: 'has been determining -> Present Perfect Continuous',
    trap: 'Omitir "been" en el análisis y clasificarlo erróneamente como simple Present Continuous.',
    usage: { scenario: 'Estrategia de TI Anual', en: 'Our company has been determining how to achieve its goals using Gap Analysis.', es: 'Nuestra empresa ha estado determinando cómo lograr sus metas mediante Gap Analysis.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.1-q4',
    sub: '8.1.1',
    num: 4,
    stem: 'Identify the verb tense used in the main clause: "Gap Analysis allowed our company to determine how to achieve our goals."',
    correct: 'Past Simple',
    distractors: ['Present Perfect', 'Past Continuous', 'Past Perfect'],
    why_correct: 'El verbo "allowed" es la forma simple de pasado regular (-ed) sin ningún verbo auxiliar, lo que corresponde al Past Simple.',
    why_wrong_map: {
      'Present Perfect': 'El Present Perfect requeriría "has allowed".',
      'Past Continuous': 'El Past Continuous requeriría "was allowing".',
      'Past Perfect': 'El Past Perfect requeriría "had allowed".'
    },
    tip: 'Past Simple = Verbo en pasado (-ed / irregular) sin auxiliares had/have/be.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '"allowed" sin auxiliares = Pasado Simple.',
    trigger: 'allowed -> Past Simple',
    trap: 'Fijarse en el infinitivo posterior "to determine" en vez del verbo principal.',
    usage: { scenario: 'Evaluación de Procesos', en: 'Gap Analysis allowed our company to determine how to achieve our goals.', es: 'El Gap Analysis permitió a nuestra empresa determinar cómo lograr nuestros objetivos.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.1-q5',
    sub: '8.1.1',
    num: 5,
    stem: 'Identify the verb tense used in the following sentence: "Our company will have been determining how to achieve its goals using Gap Analysis."',
    correct: 'Future Perfect Continuous',
    distractors: ['Future Continuous', 'Future Perfect Simple', 'Future Simple'],
    why_correct: 'La combinación [will + have + been + determining] corresponde estrictamente al Future Perfect Continuous, proyectando la duración continua de una acción hasta un punto específico en el futuro.',
    why_wrong_map: {
      'Future Continuous': 'El Future Continuous sería "will be determining".',
      'Future Perfect Simple': 'El Future Perfect Simple sería "will have determined".',
      'Future Simple': 'El Future Simple sería "will determine".'
    },
    tip: 'Future Perfect Continuous = [will have been + verbo-ing]. Duración proyectada hacia el futuro.',
    topic: 'G12',
    objective: 'UE1',
    human_rule: '"will have been determining" = para entonces habrá estado determinando.',
    trigger: 'will have been determining -> Future Perfect Continuous',
    trap: 'Confundir el Future Perfect Simple con el Continuous por la presencia de "have".',
    usage: { scenario: 'Plan Quinquenal', en: 'Our company will have been determining how to achieve its goals using Gap Analysis.', es: 'Nuestra empresa habrá estado determinando cómo lograr sus metas usando Gap Analysis.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.1-q6',
    sub: '8.1.1',
    num: 6,
    stem: 'Identify the verb tense used in the following sentence: "Our company will be determining how to achieve its goals using Gap Analysis."',
    correct: 'Future Continuous',
    distractors: ['Future Simple', 'Future Perfect', 'Present Continuous'],
    why_correct: 'La estructura [will be + determining] corresponde al Future Continuous, expresando una acción que estará en desarrollo o en progreso en un momento futuro.',
    why_wrong_map: {
      'Future Simple': 'El Future Simple sería "will determine" sin "be" ni "-ing".',
      'Future Perfect': 'El Future Perfect sería "will have determined".',
      'Present Continuous': 'El Present Continuous sería "is determining".'
    },
    tip: 'Future Continuous = [will be + verbo-ing]. Acción en progreso en el futuro.',
    topic: 'G16',
    objective: 'UE1',
    human_rule: '"will be determining" = estará determinando (Future Continuous).',
    trigger: 'will be determining -> Future Continuous',
    trap: 'No distinguir "will be + -ing" (en progreso) de "will + V1" (acción puntual).',
    usage: { scenario: 'Roadmap de Producto Q4', en: 'Our company will be determining how to achieve its goals using Gap Analysis.', es: 'Nuestra empresa estará determinando cómo alcanzar sus metas usando Gap Analysis.' }
  }),

  // =========================================================
  // 8.1.2 Past Perfect vs Present Perfect (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.1.2-q1',
    sub: '8.1.2',
    num: 1,
    stem: 'Complete the sentence: "We explained that we __________ a comprehensive procedure on how to address security flaws."',
    correct: 'had considered',
    distractors: ['have considered', 'consider', 'are considering'],
    why_correct: 'En el estilo indirecto con verbo introductorio en pasado ("explained"), la acción previa de considerar debe expresarse en Past Perfect ("had considered").',
    why_wrong_map: {
      'have considered': 'Present Perfect no concuerda temporalmente con la narración subordinada en pasado ("explained").',
      'consider': 'Present Simple agramatical en este marco narrativo pasado.',
      'are considering': 'Present Continuous rompe la correlación de tiempos pasados.'
    },
    tip: 'Verbo principal en pasado ("explained") + hecho anterior = Past Perfect ("had considered").',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Si explicaste en pasado lo que ya habías considerado antes: "had considered".',
    trigger: 'We explained that we __________ -> had considered',
    trap: 'Traducir literalmente del español "explicamos que hemos considerado".',
    usage: { scenario: 'Auditoría de Vulnerabilidades', en: 'We explained that we had considered a comprehensive procedure on how to address security flaws.', es: 'Explicamos que habíamos considerado un procedimiento integral sobre cómo abordar las fallas de seguridad.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.2-q2',
    sub: '8.1.2',
    num: 2,
    stem: 'Complete the sentence: "They wanted to go ahead with the plans but we told them that we __________ to rethink our strategy."',
    correct: 'had just decided',
    distractors: ['have just decided', 'just decide', 'would just decide'],
    why_correct: 'El verbo matriz está en pasado ("told them that..."), por lo que una decisión recién tomada antes de esa conversación requiere Past Perfect con just: "had just decided".',
    why_wrong_map: {
      'have just decided': 'Present Perfect rompe la concordancia con "told" y "wanted".',
      'just decide': 'Forma en presente simple sin auxiliares, agramatical aquí.',
      'would just decide': 'Expresaría un condicional futuro, no una decisión ya consumada.'
    },
    tip: 'Acción recién finalizada antes de un hecho pasado ("told them"): [had just + participio].',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '"acabábamos de decidir" dentro de un relato en pasado = "had just decided".',
    trigger: 'told them that we __________ -> had just decided',
    trap: 'Usar "have just decided" por no notar que el verbo de reporte está en pasado ("told").',
    usage: { scenario: 'Reunión de Cambio de Alcance', en: 'They wanted to go ahead with the plans but we told them that we had just decided to rethink our strategy.', es: 'Querían seguir adelante con los planes pero les dijimos que acabábamos de decidir repensar nuestra estrategia.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.2-q3',
    sub: '8.1.2',
    num: 3,
    stem: 'Complete the sentence: "They aren\'t joining us for the review because they __________ they need to finish their report by the end of today."',
    correct: 'have just found out',
    distractors: ['had just found out', 'just find out', 'are just finding out'],
    why_correct: 'El contexto principal está en presente ("aren\'t joining us"), por lo que una novedad recién descubierta con impacto inmediato en el presente requiere Present Perfect: "have just found out".',
    why_wrong_map: {
      'had just found out': 'Past Perfect requeriría un contexto narrativo en pasado, pero la frase inicia en presente ("aren\'t joining").',
      'just find out': 'Falta el auxiliar have para una noticia o descubrimiento reciente.',
      'are just finding out': 'El verbo find out expresa un hallazgo puntual, no un proceso continuo en progreso.'
    },
    tip: 'Cláusula principal en presente ("aren\'t joining") + hecho reciente = Present Perfect ("have just found out").',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Si la situación actual es presente ("they aren\'t joining"), usa "have just found out".',
    trigger: 'They aren\'t joining us ... because they __________ -> have just found out',
    trap: 'Elegir "had" mecánicamente sin percatarse del tiempo presente de la cláusula principal.',
    usage: { scenario: 'Sprint Review', en: 'They aren\'t joining us for the review because they have just found out they need to finish their report.', es: 'No nos acompañarán en la revisión porque acaban de enterarse de que necesitan terminar su informe.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.2-q4',
    sub: '8.1.2',
    num: 4,
    stem: 'Complete the sentence: "They were late for the meeting because they __________ the day wrong."',
    correct: 'had gotten',
    distractors: ['have gotten', 'get', 'were getting'],
    why_correct: 'Llegaron tarde ("were late" - Past Simple) debido a un error previo de fecha, lo que exige Past Perfect ("had gotten the day wrong").',
    why_wrong_map: {
      'have gotten': 'Present Perfect no puede funcionar como causa de un evento concluido en el pasado ("were late").',
      'get': 'Present Simple incorrecto e incoherente en un relato pasado.',
      'were getting': 'Equivocarse de día es un error puntual, no una acción progresiva continua.'
    },
    tip: 'Causa previa a un estado en pasado ("were late"): usa Past Perfect ("had gotten").',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'El error ocurrió antes de la tardanza: por eso se usa "had gotten".',
    trigger: 'were late ... because they __________ -> had gotten',
    trap: 'Confundir el tiempo del relato y elegir "have gotten".',
    usage: { scenario: 'Sincronización de Equipo', en: 'They were late for the meeting because they had gotten the day wrong.', es: 'Llegaron tarde a la reunión porque se habían equivocado de día.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.2-q5',
    sub: '8.1.2',
    num: 5,
    stem: 'Complete the sentence: "When it was suggested that we could improve on our security procedures, we told them that we __________ the key concerns they had."',
    correct: 'had already addressed',
    distractors: ['have already addressed', 'already address', 'are already addressing'],
    why_correct: 'Al responder en pasado ("we told them") que las inquietudes ya habían sido atendidas con anterioridad, es obligatorio el Past Perfect: "had already addressed".',
    why_wrong_map: {
      'have already addressed': 'Present Perfect choca con el marco temporal subordinado a "told".',
      'already address': 'Presente simple carece de auxiliares y concordancia.',
      'are already addressing': 'Present Continuous incompatible con una acción ya completada en el pasado.'
    },
    tip: 'Acción concluida antes de una conversación en pasado: [had already + participio pasado].',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Ya habíamos solucionado las dudas antes de que nos lo sugirieran: "had already addressed".',
    trigger: 'told them that we __________ -> had already addressed',
    trap: 'Seleccionar "have" por creer que "already" solo se combina con Present Perfect.',
    usage: { scenario: 'Reunión de Seguridad InfoSec', en: 'We told them that we had already addressed the key concerns they had.', es: 'Les dijimos que ya habíamos atendido las principales inquietudes que tenían.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.2-q6',
    sub: '8.1.2',
    num: 6,
    stem: 'Complete the question: "__________ on a way forward before receiving the latest regulations?"',
    correct: 'Had you already agreed',
    distractors: ['Have you already agreed', 'Did you already agree', 'Were you already agreeing'],
    why_correct: 'La pregunta indaga si el acuerdo se había formalizado antes de recibir la nueva normativa ("before receiving..."), requiriendo Past Perfect: "Had you already agreed".',
    why_wrong_map: {
      'Have you already agreed': 'Present Perfect no respeta el límite temporal cerrado marcado por "before receiving".',
      'Did you already agree': 'En inglés formal B2 para certificar, la anterioridad previa a otro hito pasado exige Past Perfect ("Had you agreed").',
      'Were you already agreeing': 'El verbo agree representa un acuerdo puntual o estado, no una acción progresiva continua.'
    },
    tip: 'Acción previa a un punto en pasado ("before receiving..."): [Had + sujeto + already + participio].',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '¿Ya habían acordado antes de recibir...? -> "Had you already agreed".',
    trigger: '__________ on a way forward before receiving -> Had you already agreed',
    trap: 'Usar "Have you" asumiendo automáticamente que "already" excluye al Past Perfect.',
    usage: { scenario: 'Revisión de Cumplimiento PCI-DSS', en: 'Had you already agreed on a way forward before receiving the latest regulations?', es: '¿Ya habían acordado un camino a seguir antes de recibir las últimas regulaciones?' }
  }),

  // =========================================================
  // 8.1.3 Past & Present Perfect Continuous (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.1.3-q1',
    sub: '8.1.3',
    num: 1,
    stem: 'Complete the question: "How long __________ before they informed you of their decision?"',
    correct: 'had you been waiting',
    distractors: ['have you been waiting', 'did you wait', 'were you waiting'],
    why_correct: 'Se pregunta por la duración de una espera continua antes de un momento específico en el pasado ("before they informed you"), lo que exige Past Perfect Continuous: "had you been waiting".',
    why_wrong_map: {
      'have you been waiting': 'Present Perfect Continuous conectaría la espera con el presente, pero la espera terminó cuando les informaron en el pasado.',
      'did you wait': 'Past Simple no enfatiza la duración ni la continuidad de la espera previa.',
      'were you waiting': 'Past Continuous expresa simultaneidad, no la duración previa acumulada ("How long").'
    },
    tip: '"How long" + duración previa a un evento en pasado ("before they informed"): Past Perfect Continuous.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: '¿Cuánto tiempo habías estado esperando antes de que te avisaran? -> "had you been waiting".',
    trigger: 'How long __________ before they informed you -> had you been waiting',
    trap: 'Usar "have you been waiting" sin notar que la espera concluyó en el pasado.',
    usage: { scenario: 'Decisión de Proveedores', en: 'How long had you been waiting before they informed you of their decision?', es: '¿Cuánto tiempo habías estado esperando antes de que te informaran de su decisión?' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.3-q2',
    sub: '8.1.3',
    num: 2,
    stem: 'Complete the sentence: "The team __________ a huge workload recently in preparation for the upcoming audit."',
    correct: 'has been dealing with',
    distractors: ['had been dealing with', 'is dealing with', 'dealt with'],
    why_correct: 'El adverbio "recently" combinado con una preparación para una auditoría futura ("upcoming audit") sitúa la acción continua en el presente, requiriendo Present Perfect Continuous: "has been dealing with".',
    why_wrong_map: {
      'had been dealing with': 'Past Perfect Continuous requeriría un punto de referencia en pasado, no una auditoría que aún está por venir ("upcoming").',
      'is dealing with': 'Present Continuous no refleja el período de duración reciente acumulada señalado por "recently".',
      'dealt with': 'Past Simple sugeriría una carga ya cerrada y desvinculada del presente.'
    },
    tip: '"recently" + preparación para evento futuro ("upcoming"): Present Perfect Continuous.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'El equipo ha estado lidiando recientemente con mucha carga: "has been dealing with".',
    trigger: 'recently in preparation for the upcoming audit -> has been dealing with',
    trap: 'Elegir "had" por interpretar erróneamente "recently" como pasado lejano.',
    usage: { scenario: 'Preparación de Auditoría ISO 27001', en: 'The team has been dealing with a huge workload recently in preparation for the upcoming audit.', es: 'El equipo ha estado lidiando con una enorme carga de trabajo recientemente en preparación para la próxima auditoría.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.3-q3',
    sub: '8.1.3',
    num: 3,
    stem: 'Complete the sentence: "They eventually found a solution to the production problem after they __________ all day."',
    correct: 'had been investigating',
    distractors: ['have been investigating', 'investigated', 'were investigating'],
    why_correct: 'Encontraron la solución en el pasado ("found" - Past Simple) tras haber estado investigando continuamente durante todo el día previo ("after they had been investigating all day").',
    why_wrong_map: {
      'have been investigating': 'Present Perfect Continuous conectaría la investigación con el presente, lo cual es imposible porque ya hallaron la solución.',
      'investigated': 'Past Simple no resalta la duración continua y agotadora expresada por "all day".',
      'were investigating': 'Past Continuous expresa acción interrumpida, no una actividad previa acumulada introducida por "after".'
    },
    tip: '"after" + duración continua ("all day") antes de un hallazgo pasado: Past Perfect Continuous.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Habían estado investigando todo el día antes de encontrar la falla: "had been investigating".',
    trigger: 'after they __________ all day -> had been investigating',
    trap: 'Usar "were investigating" olvidando la anterioridad exigida por "after".',
    usage: { scenario: 'Incidente Crítico en Producción', en: 'They eventually found a solution to the production problem after they had been investigating all day.', es: 'Finalmente encontraron una solución al problema de producción después de haber estado investigando todo el día.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.3-q4',
    sub: '8.1.3',
    num: 4,
    stem: 'Complete the sentence: "They __________ tests continuously before they found the root of the problem."',
    correct: 'had been running',
    distractors: ['have been running', 'were running', 'ran'],
    why_correct: 'La ejecución continua de pruebas ocurrió con anterioridad a encontrar la causa raíz ("before they found"), exigiendo Past Perfect Continuous: "had been running".',
    why_wrong_map: {
      'have been running': 'Present Perfect Continuous es incorrecto porque el hallazgo ocurrió en el pasado ("found").',
      'were running': 'Past Continuous no expresa la duración previa acumulada con "before".',
      'ran': 'Past Simple omite el matiz de proceso continuo enfatizado por "continuously".'
    },
    tip: 'Acción continua ("continuously") previa a un hito pasado ("before they found"): Past Perfect Continuous.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Habían estado ejecutando pruebas continuamente antes de encontrar la causa: "had been running".',
    trigger: '__________ tests continuously before they found -> had been running',
    trap: 'Poner "were running" por no respetar la anterioridad con respecto a "before they found".',
    usage: { scenario: 'Pruebas de Estrés QA', en: 'They had been running tests continuously before they found the root of the problem.', es: 'Habían estado ejecutando pruebas continuamente antes de encontrar la raíz del problema.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.3-q5',
    sub: '8.1.3',
    num: 5,
    stem: 'Complete the dialogue: "Actually, we __________ that to happen for some time. And now it has!"',
    correct: 'have been expecting',
    distractors: ['had been expecting', 'are expecting', 'expected'],
    why_correct: 'La frase "And now it has!" sitúa la consumación en el presente inmediato, por lo que la expectativa sostenida hasta este momento requiere Present Perfect Continuous: "have been expecting".',
    why_wrong_map: {
      'had been expecting': 'Past Perfect Continuous requeriría que el evento hubiera ocurrido en un pasado desvinculado del presente.',
      'are expecting': 'Present Continuous indicaría que aún lo siguen esperando, pero la frase aclara que ya ocurrió ("And now it has!").',
      'expected': 'Past Simple no transmite la espera prolongada acumulada indicada por "for some time".'
    },
    tip: '"for some time" con desenlace en el presente inmediato ("And now it has!"): Present Perfect Continuous.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Hemos estado esperando esto durante algún tiempo, ¡y ahora acaba de pasar!: "have been expecting".',
    trigger: 'for some time. And now it has! -> have been expecting',
    trap: 'Usar "had" creyendo que porque ya ocurrió debe ir todo en pluscuamperfecto.',
    usage: { scenario: 'Monitoreo de Infraestructura', en: 'Actually, we have been expecting that to happen for some time. And now it has!', es: 'De hecho, hemos estado esperando que eso sucediera durante algún tiempo. ¡Y ahora ocurrió!' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.3-q6',
    sub: '8.1.3',
    num: 6,
    stem: 'Complete the sentence: "We were told that some players __________ the problems for quite a long time before a solution was finally found."',
    correct: 'had been experiencing',
    distractors: ['have been experiencing', 'were experiencing', 'experienced'],
    why_correct: 'El relato completo está en pasado ("were told", "was finally found"). La duración prolongada de los fallos antes de encontrar la solución exige Past Perfect Continuous: "had been experiencing".',
    why_wrong_map: {
      'have been experiencing': 'Present Perfect Continuous incompatible con la concordancia en pasado ("were told").',
      'were experiencing': 'Past Continuous no expresa adecuadamente el período prolongado previo ("for quite a long time before...").',
      'experienced': 'Past Simple no enfatiza la naturaleza continua del problema.'
    },
    tip: 'Narración en pasado ("were told") + duración previa ("for quite a long time before"): Past Perfect Continuous.',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Los usuarios habían estado experimentando fallas durante mucho tiempo antes del parche: "had been experiencing".',
    trigger: 'for quite a long time before a solution was finally found -> had been experiencing',
    trap: 'Olvidar el auxiliar "had been" y colocar simple pasado progresivo "were experiencing".',
    usage: { scenario: 'Soporte de Videojuegos Online', en: 'We were told that some players had been experiencing the problems for quite a long time before a solution was finally found.', es: 'Nos dijeron que algunos jugadores habían estado experimentando los problemas durante bastante tiempo antes de que finalmente se encontrara una solución.' }
  }),

  // =========================================================
  // 8.1.4 Polite Requests & Softening (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.1.4-q1',
    sub: '8.1.4',
    num: 1,
    stem: 'Complete the polite suggestion: "__________ reconsider addressing the security flaws in the default configuration."',
    correct: 'We hoped you would',
    distractors: ['We hope you will', 'We want you to', 'You must'],
    why_correct: 'En entornos profesionales de TI, suavizar una petición formal (softening) se logra usando tiempos pasados de cortesía: "We hoped you would reconsider...".',
    why_wrong_map: {
      'We hope you will': 'Es gramaticalmente posible pero menos diplomática y suave que la fórmula B2 con pasado de cortesía ("hoped you would").',
      'We want you to': 'Resulta demasiado directa y autoritaria para una sugerencia diplomática entre equipos de ingeniería.',
      'You must': 'Es una orden impositiva, no una fórmula cortés de sugerencia.'
    },
    tip: 'Fórmula de cortesía diplomática (softening): [We hoped you would + infinitivo].',
    topic: 'G29',
    objective: 'UE2',
    human_rule: 'Para pedir algo diplomáticamente a otro equipo: "We hoped you would reconsider...".',
    trigger: '__________ reconsider addressing the security flaws -> We hoped you would',
    trap: 'Usar "We want you to" traduciendo literalmente "queremos que reconsideres", sonando agresivo.',
    usage: { scenario: 'Revisión de Arquitectura Segura', en: 'We hoped you would reconsider addressing the security flaws in the default configuration.', es: 'Teníamos la esperanza de que reconsideraran abordar las fallas de seguridad en la configuración predeterminada.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.4-q2',
    sub: '8.1.4',
    num: 2,
    stem: 'Complete the diplomatic inquiry: "__________ if we could enable client hardware address checks to avoid spoofed packets."',
    correct: 'I was wondering',
    distractors: ['I wonder', 'I am wondering', 'I demand'],
    why_correct: 'La estructura "I was wondering if..." (Past Continuous de cortesía) es el estándar B2 en reuniones técnicas para hacer una propuesta sin imponer criterio.',
    why_wrong_map: {
      'I wonder': 'Demasiado informal o reflexivo para una sugerencia estructurada en reunión técnica.',
      'I am wondering': 'Present Continuous suena inmediato y menos protocolario que el pasado de cortesía.',
      'I demand': 'Inaceptable en comunicación colaborativa de TI por ser una orden hostil.'
    },
    tip: 'Petición cortés indirecta: [I was wondering if + sujeto + could/would].',
    topic: 'G29',
    objective: 'UE2',
    human_rule: '"I was wondering if we could..." = Me preguntaba si podríamos... (máxima diplomacia).',
    trigger: '__________ if we could enable client hardware address checks -> I was wondering',
    trap: 'Creer que "was wondering" es solo pasado continuo temporal en vez de un marcador de cortesía.',
    usage: { scenario: 'Configuración de Switches y Seguridad L2', en: 'I was wondering if we could enable client hardware address checks to avoid spoofed packets.', es: 'Me preguntaba si podríamos habilitar verificaciones de dirección de hardware del cliente para evitar paquetes falsificados.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.4-q3',
    sub: '8.1.4',
    num: 3,
    stem: 'Complete the softening advice: "__________ you should reconsider the authentication method for SSH CLI access."',
    correct: 'I thought perhaps',
    distractors: ['I think definitely', 'You have to', 'I must say that'],
    why_correct: '"I thought perhaps..." utiliza el verbo de pensamiento en pasado más el adverbio "perhaps" para mitigar y suavizar una recomendación técnica crítica.',
    why_wrong_map: {
      'I think definitely': 'Contradictorio y agresivo; anula el propósito de softening de la oración.',
      'You have to': 'Orden obligatoria directa, no una sugerencia suavizada.',
      'I must say that': 'Suena confrontacional y enfático, lo opuesto a una fórmula atenuada.'
    },
    tip: 'Atenuación de recomendaciones (hedging): [I thought perhaps + cláusula].',
    topic: 'G29',
    objective: 'UE2',
    human_rule: '"I thought perhaps you should..." = Pensé que tal vez deberías... (suaviza la crítica).',
    trigger: '__________ you should reconsider the authentication method -> I thought perhaps',
    trap: 'No reconocer el valor modal atenuante de "thought perhaps".',
    usage: { scenario: 'Endurecimiento (Hardening) de Bastionado SSH', en: 'I thought perhaps you should reconsider the authentication method for SSH CLI access.', es: 'Pensé que tal vez deberías reconsiderar el método de autenticación para el acceso CLI por SSH.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.4-q4',
    sub: '8.1.4',
    num: 4,
    stem: 'Complete the polite request: "__________ resolving the security flaws in the default configuration?"',
    correct: 'Would you mind',
    distractors: ['Do you mind to', 'Could you please', 'Would you like'],
    why_correct: 'La expresión fija "Would you mind" va obligatoriamente seguida de verbo en gerundio (-ing): "Would you mind resolving...".',
    why_wrong_map: {
      'Do you mind to': 'Incorrecto: mind exige gerundio (-ing), nunca infinitivo con to.',
      'Could you please': 'Exige verbo en infinitivo sin to ("Could you please resolve"), no gerundio.',
      'Would you like': 'Exige infinitivo con to ("Would you like to resolve").'
    },
    tip: 'Regla de oro: [Would you mind + verbo-ing?]. Ejemplo: "Would you mind resolving...?".',
    topic: 'G09',
    objective: 'UE2',
    human_rule: 'Detrás de "Would you mind", el verbo SIEMPRE termina en -ing.',
    trigger: '__________ resolving the security flaws -> Would you mind',
    trap: 'Seleccionar "Could you please" olvidando que el verbo que sigue está en gerundio ("resolving").',
    usage: { scenario: 'Code Review y Deuda Técnica', en: 'Would you mind resolving the security flaws in the default configuration?', es: '¿Te importaría resolver las fallas de seguridad en la configuración predeterminada?' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.4-q5',
    sub: '8.1.4',
    num: 5,
    stem: 'Complete the request: "__________ reviewing the information that we ask users to provide?"',
    correct: 'Would you mind',
    distractors: ['Could you', 'May you', 'Will you please'],
    why_correct: 'Nuevamente, el verbo principal de la acción está en gerundio ("reviewing"). La única fórmula de cortesía compatible con gerundio es "Would you mind".',
    why_wrong_map: {
      'Could you': 'Exigiría infinitivo sin to ("Could you review").',
      'May you': 'No se utiliza para formular peticiones dirigidas a una segunda persona.',
      'Will you please': 'Exigiría infinitivo sin to ("Will you please review").'
    },
    tip: 'Verbo con -ing ("reviewing") tras el espacio en blanco -> Marca inmediata: "Would you mind".',
    topic: 'G09',
    objective: 'UE2',
    human_rule: 'Si ves "reviewing" en pregunta de cortesía, la opción es "Would you mind".',
    trigger: '__________ reviewing the information -> Would you mind',
    trap: 'Elegir "Could you" sin advertir la terminación "-ing" del verbo.',
    usage: { scenario: 'Revisión de Formularios GDPR/Privacidad', en: 'Would you mind reviewing the information that we ask users to provide?', es: '¿Te importaría revisar la información que solicitamos a los usuarios que proporcionen?' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.4-q6',
    sub: '8.1.4',
    num: 6,
    stem: 'Complete the diplomatic request: "__________ you could help me create an administrative account on the system."',
    correct: 'I thought perhaps',
    distractors: ['I order that', 'You should know', 'I decide that'],
    why_correct: '"I thought perhaps you could..." es la estructura estándar de softening para solicitar asistencia sin sonar demandante ni sobrepasar atribuciones.',
    why_wrong_map: {
      'I order that': 'Tono autoritario inadecuado para la colaboración entre pares técnicos.',
      'You should know': 'Suena acusatorio o condescendiente.',
      'I decide that': 'Agramatical en este contexto de solicitud de colaboración.'
    },
    tip: 'Petición colaborativa suavizada: [I thought perhaps you could + infinitivo].',
    topic: 'G29',
    objective: 'UE2',
    human_rule: '"I thought perhaps you could help me..." = Pensé que tal vez podrías ayudarme...',
    trigger: '__________ you could help me create an administrative account -> I thought perhaps',
    trap: 'Buscar opciones con modales imperativos en vez de la fórmula atenuante.',
    usage: { scenario: 'Aprovisionamiento de Accesos IAM', en: 'I thought perhaps you could help me create an administrative account on the system.', es: 'Pensé que tal vez podrías ayudarme a crear una cuenta administrativa en el sistema.' }
  }),

  // =========================================================
  // 8.1.5 Future Continuous (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.1.5-q1',
    sub: '8.1.5',
    num: 1,
    stem: 'Complete the question about tomorrow\'s schedule: "__________ the presentation at the same time tomorrow?"',
    correct: 'Will you be giving',
    distractors: ['Will you give', 'Do you give', 'Are you give'],
    why_correct: 'Al consultar cortésmente sobre planes ya programados o actividades en progreso a una hora concreta futura ("at the same time tomorrow"), se utiliza el Future Continuous: "Will you be giving...".',
    why_wrong_map: {
      'Will you give': 'Future Simple suena más a una petición o solicitud de que des la presentación, no a una consulta neutral de agenda.',
      'Do you give': 'Present Simple describe rutinas habituales, no una sesión programada para mañana.',
      'Are you give': 'Agramatical (to be + infinitivo base sin to).'
    },
    tip: 'Future Continuous en preguntas [Will you be + verbo-ing?] = consulta neutral y cortés sobre planes previstos.',
    topic: 'G16',
    objective: 'UE3',
    human_rule: 'Para preguntar por la agenda de un colega sin presionarlo: "Will you be giving...?".',
    trigger: 'at the same time tomorrow? -> Will you be giving',
    trap: 'Usar "Will you give", que se interpreta como orden o petición ("¿Darías la presentación?").',
    usage: { scenario: 'Coordinación de Demo Técnica', en: 'Will you be giving the presentation at the same time tomorrow?', es: '¿Estarás dando la presentación a la misma hora mañana?' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.5-q2',
    sub: '8.1.5',
    num: 2,
    stem: 'Complete the sentence: "We __________ a meeting regarding this matter next week."',
    correct: 'will be holding',
    distractors: ['will hold', 'hold', 'are hold'],
    why_correct: 'El Future Continuous ("will be holding") indica un evento planificado dentro del curso ordinario de las actividades de trabajo la próxima semana.',
    why_wrong_map: {
      'will hold': 'Se percibe como una decisión espontánea tomada en el momento de hablar.',
      'hold': 'Present Simple solo se usaría para horarios fijos institucionales de transporte/calendario rígido.',
      'are hold': 'Forma agramatical en inglés.'
    },
    tip: 'Evento laboral planificado como rutina futura: [will be + verbo-ing].',
    topic: 'G16',
    objective: 'UE3',
    human_rule: '"will be holding" = estaremos celebrando una reunión la próxima semana.',
    trigger: 'a meeting regarding this matter next week -> will be holding',
    trap: 'No notar la diferencia de tono entre "will hold" (decisión puntual) y "will be holding" (plan en curso).',
    usage: { scenario: 'Comité de Cambio de Infraestructura (CAB)', en: 'We will be holding a meeting regarding this matter next week.', es: 'Estaremos llevando a cabo una reunión respecto a este asunto la próxima semana.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.5-q3',
    sub: '8.1.5',
    num: 3,
    stem: 'Complete the sentence: "I\'m afraid we __________ code editors in tomorrow\'s meeting."',
    correct: 'won\'t be covering',
    distractors: ['won\'t cover', 'not covering', 'don\'t be covering'],
    why_correct: 'La forma negativa de Future Continuous ("won\'t be covering") comunica con delicadeza que un tema específico no formará parte de la agenda prevista de mañana.',
    why_wrong_map: {
      'won\'t cover': 'Puede interpretarse como una negativa tajante o rechazo a abordar el tema ("no queremos cubrirlo").',
      'not covering': 'Faltan auxiliares verbales; es agramatical.',
      'don\'t be covering': 'Estructura agramatical en inglés moderno.'
    },
    tip: 'Negativa cortés sobre agenda: [won\'t be + verbo-ing] ("won\'t be covering").',
    topic: 'G16',
    objective: 'UE3',
    human_rule: '"won\'t be covering" = no estaremos tratando ese tema en la reunión de mañana (aviso formal).',
    trigger: 'I\'m afraid we __________ code editors in tomorrow\'s meeting -> won\'t be covering',
    trap: 'Usar "won\'t cover", que en inglés connota rechazo voluntario en vez de simple exclusión de agenda.',
    usage: { scenario: 'Planificación de Agenda de Sync', en: 'I\'m afraid we won\'t be covering code editors in tomorrow\'s meeting.', es: 'Me temo que no estaremos cubriendo editores de código en la reunión de mañana.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.5-q4',
    sub: '8.1.5',
    num: 4,
    stem: 'Complete the sentence: "I imagine we __________ the benefits in no time now that the new rules are in place."',
    correct: 'will be seeing',
    distractors: ['see', 'are seeing', 'have seen'],
    why_correct: 'La expresión "in no time" proyecta la obtención progresiva de resultados a corto plazo en el futuro, requiriendo Future Continuous: "will be seeing".',
    why_wrong_map: {
      'see': 'Present Simple no refleja la proyección temporal futura abierta por "in no time".',
      'are seeing': 'Present Continuous indicaría que ya los estamos viendo en este instante exacto.',
      'have seen': 'Present Perfect indicaría experiencia previa pasada, lo opuesto a una expectativa futura.'
    },
    tip: 'Predicción de un proceso en desarrollo en el futuro próximo: [will be seeing].',
    topic: 'G16',
    objective: 'UE3',
    human_rule: '"will be seeing" = estaremos viendo los beneficios muy pronto.',
    trigger: 'in no time now that the new rules are in place -> will be seeing',
    trap: 'Poner el presente simple "see" ignorando el marco temporal de futuro próximo.',
    usage: { scenario: 'Evaluación de Políticas de CI/CD', en: 'I imagine we will be seeing the benefits in no time now that the new rules are in place.', es: 'Imagino que estaremos viendo los beneficios en poco tiempo ahora que las nuevas reglas están en vigor.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.5-q5',
    sub: '8.1.5',
    num: 5,
    stem: 'Complete the sentence: "He __________ the need for us to have a standard single code editor in this afternoon\'s presentation."',
    correct: 'will be highlighting',
    distractors: ['highlights', 'is highlighting', 'will highlight'],
    why_correct: 'Para describir lo que alguien expondrá como parte programada de una presentación futura esta tarde, el Future Continuous ("will be highlighting") es el tiempo estándar oficial de Cisco.',
    why_wrong_map: {
      'highlights': 'Present Simple no corresponde a una presentación futura singular ("this afternoon").',
      'is highlighting': 'Present Continuous sugeriría que lo está haciendo en este preciso instante.',
      'will highlight': 'Menos natural para detallar contenidos programados en la agenda de un orador.'
    },
    tip: 'Contenido previsto en una ponencia o presentación futura: [will be + verbo-ing].',
    topic: 'G16',
    objective: 'UE3',
    human_rule: '"will be highlighting" = estará destacando ese punto en su charla de la tarde.',
    trigger: 'in this afternoon\'s presentation -> will be highlighting',
    trap: 'Elegir presente simple por influencia de resúmenes en español.',
    usage: { scenario: 'Estandarización de Herramientas de Dev', en: 'He will be highlighting the need for us to have a standard single code editor in this afternoon\'s presentation.', es: 'Él estará destacando la necesidad de que tengamos un único editor de código estándar en la presentación de esta tarde.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.5-q6',
    sub: '8.1.5',
    num: 6,
    stem: 'Complete the question: "__________ this issue in tomorrow\'s coding standards meeting?"',
    correct: 'Will they be discussing',
    distractors: ['Do they discuss', 'Will they discuss', 'Are they discuss'],
    why_correct: 'Consulta sobre si un asunto formará parte de los temas tratados en una reunión ya programada: Future Continuous interrogativo ("Will they be discussing...").',
    why_wrong_map: {
      'Do they discuss': 'Present Simple indicaría hábito permanente, no la sesión específica de mañana.',
      'Will they discuss': 'Pregunta más bien por la voluntad o intención de discutirlo, no por el itinerario de la agenda.',
      'Are they discuss': 'Agramatical en inglés.'
    },
    tip: 'Consulta de agenda de reunión: [Will + sujeto + be + verbo-ing?].',
    topic: 'G16',
    objective: 'UE3',
    human_rule: '¿Estarán discutiendo este tema en la reunión de mañana? -> "Will they be discussing".',
    trigger: 'in tomorrow\'s coding standards meeting? -> Will they be discussing',
    trap: 'Confundir consulta de agenda con solicitud directa usando "Will they discuss".',
    usage: { scenario: 'Estándares de Código y Linter', en: 'Will they be discussing this issue in tomorrow\'s coding standards meeting?', es: '¿Estarán discutiendo este tema en la reunión de estándares de código de mañana?' }
  }),

  // =========================================================
  // 8.1.6 Future with Going To (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.1.6-q1',
    sub: '8.1.6',
    num: 1,
    stem: 'Complete the sentence based on evidence: "They __________ (find) it impossible unless they upgrade."',
    correct: 'are going to find',
    distractors: ['will find', 'find', 'are finding'],
    why_correct: 'Cuando una consecuencia futura se predice a partir de hechos o evidencias técnicas palpables y claras en el presente, se utiliza "be going to": "are going to find".',
    why_wrong_map: {
      'will find': 'Will expresa más una creencia subjetiva u opinión espontánea que una consecuencia inevitable basada en evidencia.',
      'find': 'Presente simple no expresa la consecuencia futura condicionada.',
      'are finding': 'Present Continuous indicaría que lo están encontrando ahora mismo.'
    },
    tip: 'Predicción basada en evidencia técnica clara presente -> "be going to".',
    topic: 'G16',
    objective: 'UE3',
    human_rule: 'Les va a resultar imposible si no actualizan: "are going to find".',
    trigger: 'impossible unless they upgrade -> are going to find',
    trap: 'Usar "will" para cualquier futuro sin distinguir la evidencia presente.',
    usage: { scenario: 'Obsolescencia de Hardware', en: 'They are going to find it impossible unless they upgrade.', es: 'Les va a resultar imposible a menos que actualicen.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.6-q2',
    sub: '8.1.6',
    num: 2,
    stem: 'Complete the sentence about an intended plan: "She __________ (give) us a full breakdown of all the issues in her presentation."',
    correct: 'is going to give',
    distractors: ['gives', 'will be given', 'is give'],
    why_correct: 'Expresa una intención y plan ya preparado para su presentación: "is going to give".',
    why_wrong_map: {
      'gives': 'Present Simple describe verdades generales o rutinas.',
      'will be given': 'Estructura en voz pasiva ("ella será dada"), semánticamente absurda.',
      'is give': 'Agramatical.'
    },
    tip: 'Plan o intención previa de un presentador: [is going to + infinitivo].',
    topic: 'G16',
    objective: 'UE3',
    human_rule: 'Ella nos va a dar un desglose completo: "is going to give".',
    trigger: 'a full breakdown of all the issues in her presentation -> is going to give',
    trap: 'Confundir la voz activa con la pasiva "will be given".',
    usage: { scenario: 'Informe de Bugs Críticos', en: 'She is going to give us a full breakdown of all the issues in her presentation.', es: 'Ella nos va a dar un desglose completo de todos los problemas en su presentación.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.6-q3',
    sub: '8.1.6',
    num: 3,
    stem: 'Complete the sentence about a past unfulfilled intention: "You said you __________ (take) a break after you’d finished those updates. Come on, let’s go for a coffee."',
    correct: 'were going to take',
    distractors: ['are going to take', 'will take', 'would have taken'],
    why_correct: 'Para referirnos a un plan o intención pasada que se formuló con anterioridad ("You said you..."), se utiliza el "was/were going to": "were going to take".',
    why_wrong_map: {
      'are going to take': 'Presente no concuerda con el verbo de reporte en pasado "You said".',
      'will take': 'Will no concuerda en pasado (exigiría would en estilo indirecto).',
      'would have taken': 'Tercer condicional para situaciones irreales, no para recordar una promesa o plan previo.'
    },
    tip: 'Intención expresada en el pasado: [was / were going to + infinitivo].',
    topic: 'G16',
    objective: 'UE3',
    human_rule: 'Dijiste que ibas a tomarte un descanso: "were going to take".',
    trigger: 'You said you __________ a break after you\'d finished -> were going to take',
    trap: 'No aplicar la correlación temporal en pasado con "You said".',
    usage: { scenario: 'Bienestar y Cultura de Equipo', en: 'You said you were going to take a break after you’d finished those updates. Come on, let’s go for a coffee.', es: 'Dijiste que ibas a tomarte un descanso después de que terminaras esas actualizaciones. Vamos por un café.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.6-q4',
    sub: '8.1.6',
    num: 4,
    stem: 'Complete the sentence indicating an immediate firm intention: "I __________ (sign in) immediately."',
    correct: 'am going to sign in',
    distractors: ['sign in', 'will be signed in', 'was going to sign in'],
    why_correct: 'Indica una decisión e intención firme de ejecución inmediata: "am going to sign in".',
    why_wrong_map: {
      'sign in': 'Present Simple describe una acción habitual, no una intención inmediata.',
      'will be signed in': 'Voz pasiva o estado futuro, no la acción activa de iniciar sesión.',
      'was going to sign in': 'Situaría la intención en el pasado como algo no cumplido.'
    },
    tip: 'Intención firme e inminente: [am going to + infinitivo].',
    topic: 'G16',
    objective: 'UE3',
    human_rule: 'Voy a iniciar sesión de inmediato: "am going to sign in".',
    trigger: '__________ immediately -> am going to sign in',
    trap: 'Seleccionar presente simple por traducción del español "inicio sesión ya".',
    usage: { scenario: 'Respuesta a Incidente en Guardia', en: 'I am going to sign in immediately.', es: 'Voy a iniciar sesión inmediatamente.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.6-q5',
    sub: '8.1.6',
    num: 5,
    stem: 'Complete the dialogue: "I didn’t think I needed any help, but it’s more complicated than I thought. I __________ (need) it after all. Do you have a minute to help me?"',
    correct: 'am going to need',
    distractors: ['needed', 'will have needed', 'need'],
    why_correct: 'Al darse cuenta en el presente de la dificultad objetiva ("it\'s more complicated than I thought"), el hablante concluye que va a necesitar ayuda: "am going to need".',
    why_wrong_map: {
      'needed': 'Past Simple sugeriría que ya necesitó la ayuda en el pasado y terminó, pero está pidiendo ayuda ahora ("Do you have a minute?").',
      'will have needed': 'Future Perfect requeriría un punto límite en el futuro.',
      'need': 'Aunque es posible en habla cotidiana, "am going to need" refleja la toma de conciencia del proceso futuro inmediato.'
    },
    tip: 'Conclusión basada en la evidencia de la complejidad de la tarea: "am going to need".',
    topic: 'G16',
    objective: 'UE3',
    human_rule: 'Me doy cuenta de que voy a necesitar ayuda después de todo: "am going to need".',
    trigger: 'I didn’t think I needed ... I __________ it after all -> am going to need',
    trap: 'Poner "needed" confundiéndose con el "didn\'t think" inicial.',
    usage: { scenario: 'Resolución de Tareas Complejas', en: 'I didn’t think I needed any help, but it’s more complicated than I thought. I am going to need it after all.', es: 'No creí que necesitara ayuda, pero es más complicado de lo que pensé. Voy a necesitarla después de todo.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.1.6-q6',
    sub: '8.1.6',
    num: 6,
    stem: 'Complete the warning: "__________ (be) a late night unless we focus on solving this."',
    correct: 'It\'s going to be',
    distractors: ['It will be', 'There is going to be', 'It is'],
    why_correct: 'Predicción respaldada por la evidencia actual del progreso lento de la resolución: "It\'s going to be a late night".',
    why_wrong_map: {
      'It will be': 'Will denota predicción neutra o promesa, mientras que "going to" refleja la certeza derivada del ritmo actual de trabajo.',
      'There is going to be': 'Gramaticalmente requeriría sustantivo existencial, pero con "a late night" el sujeto impersonal idiomático es "It".',
      'It is': 'Present Simple no refleja la condición futura introducida por "unless".'
    },
    tip: 'Predicción idiomática de jornadas intensas: [It\'s going to be a late night].',
    topic: 'G16',
    objective: 'UE3',
    human_rule: 'Va a ser una noche larga a menos que nos enfoquemos: "It\'s going to be".',
    trigger: '__________ a late night unless we focus -> It\'s going to be',
    trap: 'Escribir "There is going to be" confundiéndose con "habrá".',
    usage: { scenario: 'Depuración de Bug Bloqueante', en: 'It\'s going to be a late night unless we focus on solving this.', es: 'Va a ser una noche larga a menos que nos concentremos en resolver esto.' }
  })
];

module.exports = { items_8_1 };
