const { createQuestion } = require('./builder_helper.cjs');

const items_8_2 = [
  // =========================================================
  // 8.2.1 Ability & Permission Modals (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.2.1-q1',
    sub: '8.2.1',
    num: 1,
    stem: 'Complete the sentence: "We __________ format our code as we prefer, as we are all experienced engineers."',
    correct: 'can',
    distractors: ['must', 'should', 'might'],
    why_correct: 'El verbo modal "can" expresa la capacidad y libertad o permiso general de los ingenieros para formatear el código según sus preferencias.',
    why_wrong_map: {
      'must': 'Indica obligación estricta, lo que contradice "as we prefer" (como prefiramos).',
      'should': 'Indica recomendación o deber moral, no la libertad de elección descrita.',
      'might': 'Indica mera posibilidad incierta, no la facultad establecida.'
    },
    tip: 'Libertad de acción y capacidad general en presente -> "can".',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'Podemos formatear nuestro código como queramos: "can".',
    trigger: 'format our code as we prefer -> can',
    trap: 'Confundir permiso/capacidad con obligación ("must").',
    usage: { scenario: 'Guías de Estilo de Equipo', en: 'We can format our code as we prefer, as we are all experienced engineers.', es: 'Podemos formatear nuestro código como prefiramos, ya que todos somos ingenieros experimentados.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.1-q2',
    sub: '8.2.1',
    num: 2,
    stem: 'Complete the sentence: "We __________ easily revisit the idea once we had established the potential benefits."',
    correct: 'could',
    distractors: ['can', 'will be able to', 'must'],
    why_correct: 'La oración está situada en el pasado ("once we had established..."), por lo que la capacidad en pasado se expresa con "could".',
    why_wrong_map: {
      'can': 'Presente simple de capacidad; no concuerda con "had established".',
      'will be able to': 'Futuro; rompe el marco temporal en pasado.',
      'must': 'No tiene forma de pasado para capacidad u obligación pasada en este contexto.'
    },
    tip: 'Capacidad en el pasado subordinada a un hecho pasado ("had established"): usa "could".',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'Pudimos retomar la idea fácilmente una vez que establecimos los beneficios: "could".',
    trigger: 'once we had established the potential benefits -> could',
    trap: 'Poner "can" ignorando el tiempo pasado del resto de la frase.',
    usage: { scenario: 'Evaluación de Propuestas de Arquitectura', en: 'We could easily revisit the idea once we had established the potential benefits.', es: 'Pudimos retomar fácilmente la idea una vez que habíamos establecido los beneficios potenciales.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.1-q3',
    sub: '8.2.1',
    num: 3,
    stem: 'Complete the inverted sentence: "Under no circumstances __________ we release new software without testing it."',
    correct: 'can',
    distractors: ['do', 'shouldn\'t', 'we can'],
    why_correct: 'Tras la locución negativa restrictiva "Under no circumstances", se produce inversión gramatical auxiliar-sujeto: "can we". Connota la imposibilidad absoluta bajo las políticas de calidad.',
    why_wrong_map: {
      'do': '"do we release" indicaría hábito en vez de la norma de capacidad/permiso de release.',
      'shouldn\'t': 'Doble negación ("Under no circumstances shouldn\'t...") es agramatical en inglés estándar.',
      'we can': 'Sin inversión; agramatical tras un elemento restrictivo inicial.'
    },
    tip: 'Inversión negativa: [Under no circumstances + modal can + sujeto + verbo base].',
    topic: 'G07',
    objective: 'UE3',
    human_rule: 'Bajo ninguna circunstancia podemos liberar software sin probarlo: "can we release".',
    trigger: 'Under no circumstances __________ we release -> can',
    trap: 'No invertir y elegir "we can", o poner doble negación "cannot".',
    usage: { scenario: 'Política de Despliegue en Producción', en: 'Under no circumstances can we release new software without testing it.', es: 'Bajo ninguna circunstancia podemos lanzar nuevo software sin probarlo.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.1-q4',
    sub: '8.2.1',
    num: 4,
    stem: 'Complete the sentence: "We __________ revisit the idea once we’ve spent more time analysing the potential benefits."',
    correct: 'will be able to',
    distractors: ['could', 'can have', 'were able to'],
    why_correct: 'El conector temporal "once we\'ve spent..." apunta a una condición futura. La capacidad en tiempo futuro se expresa con la perífrasis "will be able to".',
    why_wrong_map: {
      'could': 'Expresa capacidad pasada o condicional hipotético, no una capacidad futura concreta.',
      'can have': 'Estructura agramatical para expresar capacidad futura.',
      'were able to': 'Expresa capacidad o logro consumado en el pasado.'
    },
    tip: 'Capacidad en el futuro conectada con cláusula temporal de presente: "will be able to".',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'Podremos retomar la idea una vez que hayamos analizado los beneficios: "will be able to".',
    trigger: 'once we\'ve spent more time -> will be able to',
    trap: 'Intentar usar "will can" (los modales no se combinan) o usar "could" por error.',
    usage: { scenario: 'Roadmap de Producto Q1', en: 'We will be able to revisit the idea once we’ve spent more time analysing the potential benefits.', es: 'Podremos retomar la idea una vez que hayamos dedicado más tiempo a analizar los beneficios potenciales.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.1-q5',
    sub: '8.2.1',
    num: 5,
    stem: 'Complete the sentence: "We __________ see all of the information because the debugging is not enabled."',
    correct: 'cannot',
    distractors: ['couldn\'t', 'must not', 'might not'],
    why_correct: 'La causa está en presente ("is not enabled"), por lo que la incapacidad técnica en el presente se expresa directamente con "cannot" (o "can\'t").',
    why_wrong_map: {
      'couldn\'t': 'Past Simple; no concuerda con "is not enabled" en presente.',
      'must not': 'Expresa prohibición ("no debemos"), no la imposibilidad técnica de visualizar los datos.',
      'might not': 'Expresa una posibilidad dudosa ("quizás no"), mientras que aquí la imposibilidad es certera por estar el debug desactivado.'
    },
    tip: 'Incapacidad técnica en presente derivada de una causa objetiva -> "cannot".',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'No podemos ver toda la información porque el modo debug no está habilitado: "cannot".',
    trigger: 'because the debugging is not enabled -> cannot',
    trap: 'Usar "must not" creyendo que significa imposibilidad en vez de prohibición.',
    usage: { scenario: 'Logs y Telemetría', en: 'We cannot see all of the information because the debugging is not enabled.', es: 'No podemos ver toda la información porque la depuración no está habilitada.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.1-q6',
    sub: '8.2.1',
    num: 6,
    stem: 'Complete the sentence: "We __________ finish before the deadline because the integration took longer than planned."',
    correct: 'couldn\'t',
    distractors: ['cannot', 'won\'t be able to', 'shouldn\'t'],
    why_correct: 'La causa ocurrió en el pasado ("the integration took longer..."), por lo que la incapacidad de terminar a tiempo en el pasado se formula con "couldn\'t".',
    why_wrong_map: {
      'cannot': 'Presente; rompe la concordancia con "took".',
      'won\'t be able to': 'Futuro; incompatible con un evento de integración ya concluido en pasado.',
      'shouldn\'t': 'Expresa que no deberíamos haberlo hecho, no la imposibilidad fáctica de finalizar.'
    },
    tip: 'Incapacidad de completar algo en el pasado: "couldn\'t" / "weren\'t able to".',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'No pudimos terminar antes de la fecha límite porque la integración tardó más: "couldn\'t".',
    trigger: 'because the integration took longer -> couldn\'t',
    trap: 'Poner "cannot" sin verificar el pasado "took".',
    usage: { scenario: 'Postmortem de Entrega', en: 'We couldn\'t finish before the deadline because the integration took longer than planned.', es: 'No pudimos terminar antes de la fecha límite porque la integración tardó más de lo planeado.' }
  }),

  // =========================================================
  // 8.2.2 Ability & Capacity in Context (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.2.2-q1',
    sub: '8.2.2',
    num: 1,
    stem: 'Select the valid modal option(s) to complete the question: "Do you need more help, or __________ finish the updates by Friday afternoon?"',
    correct: 'can you / will you be able to',
    distractors: ['must you', 'could you have', 'did you finish'],
    why_correct: 'En el currículo oficial de Cisco, para una capacidad presente con proyección a una fecha límite próxima ("by Friday"), son válidas indistintamente "can you" o "will you be able to".',
    why_wrong_map: {
      'must you': 'Expresa obligación forzosa o fastidio ("¿debes tú...?"), lo que carece de sentido frente a la oferta de ayuda.',
      'could you have': 'Estructura de pasado irreal ("¿podrías haber terminado?"), absurda frente a un plazo futuro ("by Friday").',
      'did you finish': 'Past Simple; incompatible con un plazo pendiente de entrega.'
    },
    tip: 'Capacidad para una fecha límite futura: "can you" y "will you be able to" son equivalentes.',
    topic: 'G08',
    objective: 'UE3',
    human_rule: '¿Puedes terminar o podrás terminar para el viernes?: "can you / will you be able to".',
    trigger: 'or __________ finish the updates by Friday -> can you / will you be able to',
    trap: 'Pensar que solo existe una forma válida y descartar "will you be able to".',
    usage: { scenario: 'Daily Stand-up y Planificación de Cierre', en: 'Do you need more help, or can you finish the updates by Friday afternoon?', es: '¿Necesitas más ayuda o puedes / podrás terminar las actualizaciones para el viernes por la tarde?' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.2-q2',
    sub: '8.2.2',
    num: 2,
    stem: 'Select the valid modal option(s): "The team’s experience meant they __________ complete the tasks easily."',
    correct: 'could / were able to',
    distractors: ['can', 'will be able to', 'must'],
    why_correct: 'El verbo rector está en pasado ("meant"). En inglés B2 oficial, la capacidad general en el pasado admite tanto "could" como "were able to".',
    why_wrong_map: {
      'can': 'Forma de presente; no concuerda con "meant".',
      'will be able to': 'Futuro; incompatible con un análisis pasado.',
      'must': 'No funciona como pasado de capacidad ni obligación.'
    },
    tip: 'Capacidad en el pasado: "could" y "were able to" son correctas para habilidad general.',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'Significaba que podían / eran capaces de completar las tareas: "could / were able to".',
    trigger: 'meant they __________ complete the tasks easily -> could / were able to',
    trap: 'Creer que "were able to" está restringido a logros aislados cuando también cubre capacidad general en este contexto.',
    usage: { scenario: 'Evaluación de Desempeño Técnico', en: 'The team’s experience meant they could complete the tasks easily.', es: 'La experiencia del equipo significó que pudieron / fueron capaces de completar las tareas fácilmente.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.2-q3',
    sub: '8.2.2',
    num: 3,
    stem: 'Complete the inquiry: "I thought you said you had no experience with this particular software. Are you sure you __________ manage?"',
    correct: 'can',
    distractors: ['could have', 'were able to', 'must'],
    why_correct: 'La pregunta indaga por la capacidad presente y real del ingeniero en este momento ("Are you sure you can manage?").',
    why_wrong_map: {
      'could have': 'Expresaría un condicional irreal en pasado ("podrías haberte arreglado"), inapropiado aquí.',
      'were able to': 'Pasado; incompatible con la pregunta presente "Are you sure".',
      'must': 'Expresa obligación o deducción, no la capacidad práctica de resolver el trabajo.'
    },
    tip: '"Are you sure you can manage?" = Pregunta estándar en soporte para indagar capacidad presente.',
    topic: 'G08',
    objective: 'UE3',
    human_rule: '¿Estás seguro de que puedes arreglártelas?: "Are you sure you can manage?".',
    trigger: 'Are you sure you __________ manage? -> can',
    trap: 'Dejarse confundir por el "I thought you said" anterior y poner un pasado.',
    usage: { scenario: 'Onboarding de Nuevas Herramientas', en: 'Are you sure you can manage?', es: '¿Estás seguro de que puedes arreglártelas / gestionarlo?' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.2-q4',
    sub: '8.2.2',
    num: 4,
    stem: 'Select the valid modal option(s): "Despite having very little knowledge of the situation, she __________ understand the urgency in finding a solution."',
    correct: 'was able to / could',
    distractors: ['can', 'will be able to', 'must'],
    why_correct: 'En el contexto narrativo de percepción y comprensión en pasado con verbos de entendimiento (understand), se aceptan tanto "was able to" como "could".',
    why_wrong_map: {
      'can': 'Presente; rompe el marco narrativo pasado.',
      'will be able to': 'Futuro; no describe lo que ella logró entender en esa situación pasada.',
      'must': 'Expresaría deducción o deber, no capacidad fáctica.'
    },
    tip: 'Con verbos de percepción cognitiva en pasado (understand, see, hear), tanto "could" como "was able to" son correctos.',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'Ella pudo / fue capaz de comprender la urgencia: "was able to / could".',
    trigger: 'she __________ understand the urgency -> was able to / could',
    trap: 'Poner presente "can" por traducción descuidada.',
    usage: { scenario: 'Gestión de Crisis de TI', en: 'Despite having very little knowledge of the situation, she was able to understand the urgency.', es: 'A pesar de tener muy poco conocimiento de la situación, pudo / fue capaz de comprender la urgencia.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.2-q5',
    sub: '8.2.2',
    num: 5,
    stem: 'Complete the question: "__________ upgrade your phone, first? If so, there should be no problem with the new software."',
    correct: 'Are you able to',
    distractors: ['Were you able to', 'Could you have', 'Did you can'],
    why_correct: 'La condición posterior está en presente condicionado ("If so, there should be no problem..."), por lo que se consulta la capacidad presente del usuario: "Are you able to upgrade your phone, first?".',
    why_wrong_map: {
      'Were you able to': 'Preguntaría por una acción ya intentada en el pasado.',
      'Could you have': 'Expresaría un reproche o hipótesis pasada irreal.',
      'Did you can': 'Construcción totalmente agramatical en inglés.'
    },
    tip: 'Consulta formal de viabilidad presente: [Are you able to + infinitivo?].',
    topic: 'G08',
    objective: 'UE3',
    human_rule: '¿Eres capaz de / puedes actualizar tu teléfono primero?: "Are you able to".',
    trigger: '__________ upgrade your phone, first? If so -> Are you able to',
    trap: 'Creer que "can" es la única opción y no reconocer la validez de "Are you able to".',
    usage: { scenario: 'Soporte Técnico de Aplicación Móvil', en: 'Are you able to upgrade your phone, first? If so, there should be no problem.', es: '¿Puedes / Eres capaz de actualizar tu teléfono primero? Si es así, no debería haber problema.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.2-q6',
    sub: '8.2.2',
    num: 6,
    stem: 'Complete the urgent request: "__________ give me an answer? They’re putting pressure on me to make a decision, but I need your answer first."',
    correct: 'Can you',
    distractors: ['Were you able to', 'Could you have been', 'Did you can'],
    why_correct: 'Para una petición directa en presente motivada por una urgencia inmediata ("They\'re putting pressure on me..."), la fórmula requerida por Cisco es "Can you give me an answer?".',
    why_wrong_map: {
      'Were you able to': 'Pasado; no pide una respuesta en este instante.',
      'Could you have been': 'Agramatical e incoherente para solicitar una respuesta inmediata.',
      'Did you can': 'Agramatical en inglés.'
    },
    tip: 'Petición directa de respuesta urgente en presente -> "Can you".',
    topic: 'G08',
    objective: 'UE3',
    human_rule: '¿Me puedes dar una respuesta ya?: "Can you give me an answer?".',
    trigger: '__________ give me an answer? They’re putting pressure -> Can you',
    trap: 'Intentar usar formas de cortesía pasadas cuando el interlocutor exige una respuesta ejecutiva inmediata.',
    usage: { scenario: 'Aprobación de Cambio Urgente', en: 'Can you give me an answer? They’re putting pressure on me to make a decision.', es: '¿Puedes darme una respuesta? Me están presionando para tomar una decisión.' }
  }),

  // =========================================================
  // 8.2.3 Deduction & Probability Modals (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.2.3-q1',
    sub: '8.2.3',
    num: 1,
    stem: 'Complete the security deduction: "The IP address spoofing __________ have been used by network intruders to overcome network security measures."',
    correct: 'might',
    distractors: ['should', 'can', 'will'],
    why_correct: 'Al teorizar sobre un vector de ataque pasado sin certeza absoluta, se emplea el modal de posibilidad pasada "might have been used" (podría haber sido utilizado).',
    why_wrong_map: {
      'should': 'Expresaría recomendación o expectativa deseada, lo cual carece de sentido para un ciberataque malicioso.',
      'can': 'En inglés estándar, "can" no se combina con "have + V3" para deducciones afirmativas pasadas (se usa could o might).',
      'will': 'Expresa certeza futura, incompatible con una hipótesis forense sobre el pasado.'
    },
    tip: 'Hipótesis sobre causa de incidente en el pasado: [might + have + participio pasado].',
    topic: 'G14',
    objective: 'UE3',
    human_rule: 'La suplantación de IP podría haber sido utilizada por los intrusos: "might have been used".',
    trigger: 'spoofing __________ have been used by network intruders -> might',
    trap: 'Elegir "can" por traducción literal de "puede haber sido usado" (en inglés se usa might/could).',
    usage: { scenario: 'Análisis Forense de Red (DFIR)', en: 'The IP address spoofing might have been used by network intruders to overcome network security measures.', es: 'La suplantación de dirección IP podría haber sido utilizada por intrusos de red para superar las medidas de seguridad.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.3-q2',
    sub: '8.2.3',
    num: 2,
    stem: 'Complete the sentence: "We __________ be able to develop the necessary comprehensive procedure if we have enough time."',
    correct: 'should',
    distractors: ['must have', 'ought', 'can have'],
    why_correct: '"should be able to" expresa una expectativa razonable y optimista condicionada a disponer de tiempo suficiente ("if we have enough time").',
    why_wrong_map: {
      'must have': 'Exige participio pasado, no "be able to" en infinitivo presente.',
      'ought': 'Incompleto: exige la partícula "to" ("ought to be able to").',
      'can have': 'Estructura no válida para expresar posibilidad futura condicionada.'
    },
    tip: 'Expectativa razonable en el futuro: [should be able to + infinitivo].',
    topic: 'G14',
    objective: 'UE3',
    human_rule: 'Deberíamos ser capaces de desarrollar el procedimiento si tenemos tiempo: "should be able to".',
    trigger: 'We __________ be able to develop ... if we have enough time -> should',
    trap: 'Seleccionar "ought" olvidando que le falta el "to".',
    usage: { scenario: 'Planificación de Procedimientos Operativos', en: 'We should be able to develop the necessary comprehensive procedure if we have enough time.', es: 'Deberíamos ser capaces de desarrollar el procedimiento integral necesario si tenemos suficiente tiempo.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.3-q3',
    sub: '8.2.3',
    num: 3,
    stem: 'Select the valid modal option(s): "Password protection policies __________ be able to prevent unauthorized access to sensitive information."',
    correct: 'may / should',
    distractors: ['must have', 'ought', 'can have been'],
    why_correct: 'Tanto "may be able to" (posibilidad formal) como "should be able to" (expectativa técnica razonable) son correctos en el temario de Cisco para describir la capacidad prevista de una política.',
    why_wrong_map: {
      'must have': 'Exige participio pasado y expresaría deducción de un hecho pretérito.',
      'ought': 'Incompleto; le falta la preposición "to".',
      'can have been': 'Forma pasada incoherente con el infinitivo "be able to".'
    },
    tip: 'Capacidad o expectativa de efectividad técnica: "may" y "should" son alternativas válidas.',
    topic: 'G14',
    objective: 'UE3',
    human_rule: 'Las políticas pueden / deberían ser capaces de prevenir accesos no autorizados: "may / should".',
    trigger: 'policies __________ be able to prevent -> may / should',
    trap: 'Descartar "should" creyendo erróneamente que solo significa obligación moral.',
    usage: { scenario: 'Políticas de Seguridad IAM', en: 'Password protection policies should be able to prevent unauthorized access to sensitive information.', es: 'Las políticas de protección por contraseña pueden / deberían ser capaces de prevenir el acceso no autorizado.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.3-q4',
    sub: '8.2.3',
    num: 4,
    stem: 'Complete the third conditional deduction: "We __________ have been able to bypass network security measures with this method if we had tried earlier."',
    correct: 'might',
    distractors: ['should', 'must', 'will'],
    why_correct: 'En una estructura condicional irreal del pasado ("if we had tried earlier"), la consecuencia hipotética posible se formula con "might have been able to" (podríamos haber sido capaces).',
    why_wrong_map: {
      'should': 'Expresaría un deber moral o reproche ("deberíamos haber sido capaces de evadir la seguridad"), lo cual no encaja.',
      'must': 'Must have denota certeza casi absoluta de un hecho real en el pasado, incompatible con la hipótesis irreal "if we had tried".',
      'will': 'Will no se usa en la apódosis de un tercer condicional (se usa would/might/could).'
    },
    tip: 'Tercer condicional de posibilidad: [might have been able to... if + Past Perfect].',
    topic: 'G14',
    objective: 'UE3',
    human_rule: 'Podríamos haber sido capaces de evadir las medidas si hubiéramos probado antes: "might have been able to".',
    trigger: '__________ have been able to bypass ... if we had tried earlier -> might',
    trap: 'Usar "must have" sin reparar en que es una condición hipotética irreal.',
    usage: { scenario: 'Pentesting y Red Team', en: 'We might have been able to bypass network security measures with this method if we had tried earlier.', es: 'Podríamos haber sido capaces de evadir las medidas de seguridad de red con este método si lo hubiéramos intentado antes.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.3-q5',
    sub: '8.2.3',
    num: 5,
    stem: 'Select the valid negative modal option(s): "We have more than enough time to meet this deadline, so it really __________ be a problem."',
    correct: 'won’t / shouldn’t',
    distractors: ['must', 'might not have', 'can\'t have been'],
    why_correct: 'Dado que sobra tiempo, la predicción negativa de dificultad admite tanto la certeza futura "won\'t be a problem" como la expectativa razonable "shouldn\'t be a problem".',
    why_wrong_map: {
      'must': 'Afirmativo; significaría absurdamente que sí debe ser un problema a pesar de tener tiempo de sobra.',
      'might not have': 'Estructura de pasado irreal; aquí el problema está proyectado al futuro con "be".',
      'can\'t have been': 'Deducción de pasado, incompatible con el infinitivo base presente "be".'
    },
    tip: 'Predicción negativa fundada en hechos favorables: "won\'t" y "shouldn\'t" son opciones válidas.',
    topic: 'G14',
    objective: 'UE3',
    human_rule: 'No va a ser / no debería ser un problema: "won’t / shouldn’t".',
    trigger: 'more than enough time ... so it really __________ be a problem -> won’t / shouldn’t',
    trap: 'Olvidar que "shouldn\'t be a problem" es la expresión por excelencia de tranquilidad técnica.',
    usage: { scenario: 'Gestión de Entregables de Sprint', en: 'We have more than enough time to meet this deadline, so it really shouldn’t be a problem.', es: 'Tenemos tiempo más que suficiente para cumplir este plazo, por lo que realmente no será / no debería ser un problema.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.3-q6',
    sub: '8.2.3',
    num: 6,
    stem: 'Complete the deduction: "A mistake __________ have been made at an earlier point in the process."',
    correct: 'might',
    distractors: ['can', 'should to', 'will'],
    why_correct: 'Al formular una deducción o posibilidad retrospectiva sobre un error cometido ("have been made"), se usa "might" (podría haberse cometido un error).',
    why_wrong_map: {
      'can': 'Can no expresa deducción afirmativa pasada en inglés estándar (se requiere could o might).',
      'should to': 'Agramatical; los verbos modales nunca se siguen de infinitivo con to.',
      'will': 'Expresa certeza o futuro, no una deducción de posibilidad pasada.'
    },
    tip: 'Deducción forense de posibilidad pasada: [might + have been + participio].',
    topic: 'G14',
    objective: 'UE3',
    human_rule: 'Un error podría haberse cometido en un punto anterior del proceso: "might have been made".',
    trigger: 'A mistake __________ have been made -> might',
    trap: 'Intentar usar "can have been made" por interferencia directa del español.',
    usage: { scenario: 'Análisis Causa Raíz (RCA)', en: 'A mistake might have been made at an earlier point in the process.', es: 'Podría haberse cometido un error en un punto anterior del proceso.' }
  }),

  // =========================================================
  // 8.2.4 Passive Modals (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.2.4-q1',
    sub: '8.2.4',
    num: 1,
    stem: 'Complete the obligation passive: "This report __________ by the end of tomorrow."',
    correct: 'must be done',
    distractors: ['must do', 'must been done', 'must to be done'],
    why_correct: 'La voz pasiva con verbos modales sigue la regla estricta [Modal + be + participio pasado]. Por tanto, la forma correcta es "must be done".',
    why_wrong_map: {
      'must do': 'Voz activa; el reporte no puede hacer nada por sí mismo.',
      'must been done': 'Falta el infinitivo "be"; "been" es participio y no puede seguir directamente a must.',
      'must to be done': 'Los verbos modales como must NUNCA llevan partícula "to".'
    },
    tip: 'Fórmula de pasiva modal presente: [Modal + be + V3]. Jamás "must to be" ni "must been".',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'El reporte debe ser realizado antes de que termine el día de mañana: "must be done".',
    trigger: 'This report __________ by the end of tomorrow -> must be done',
    trap: 'Poner "must to be done" o "must been done", errores muy castigados en exámenes B2.',
    usage: { scenario: 'Entrega de Auditoría de Cumplimiento', en: 'This report must be done by the end of tomorrow.', es: 'Este informe debe estar terminado para el final del día de mañana.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.4-q2',
    sub: '8.2.4',
    num: 2,
    stem: 'Complete the past criticism passive: "A stronger password __________ used."',
    correct: 'should have been',
    distractors: ['should have be', 'should been', 'should to have been'],
    why_correct: 'Para criticar una medida de seguridad no adoptada en el pasado en voz pasiva, la estructura es [Modal + have been + participio pasado]: "should have been used".',
    why_wrong_map: {
      'should have be': 'Agramatical; tras "have" se exige participio "been", no infinitivo "be".',
      'should been': 'Falta el auxiliar "have"; should no puede ir seguido directamente de been.',
      'should to have been': 'Should nunca lleva partícula "to".'
    },
    tip: 'Pasiva modal pasada: [should have been + participio pasado]. Indica lo que debió hacerse pero no se hizo.',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'Se debió haber utilizado una contraseña más robusta: "should have been used".',
    trigger: 'A stronger password __________ used -> should have been',
    trap: 'Omitir "have" y escribir erróneamente "should been used".',
    usage: { scenario: 'Postmortem tras Filtración de Credenciales', en: 'A stronger password should have been used.', es: 'Se debería haber utilizado una contraseña más fuerte.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.4-q3',
    sub: '8.2.4',
    num: 3,
    stem: 'Complete the passive expectation: "We expect the installation __________ completed by then."',
    correct: 'should be',
    distractors: ['should been', 'should to be', 'should being'],
    why_correct: 'Se proyecta una expectativa en voz pasiva: [should + be + completed].',
    why_wrong_map: {
      'should been': 'Agramatical; falta el infinitivo be o el auxiliar have.',
      'should to be': 'Should nunca admite partícula to.',
      'should being': 'Should no se combina con gerundio directo.'
    },
    tip: 'Regla modal pasiva: [should be + participio pasado].',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'Esperamos que la instalación deba estar completada para entonces: "should be completed".',
    trigger: 'the installation __________ completed by then -> should be',
    trap: 'Añadir "to" tras should por contagio de "expect to".',
    usage: { scenario: 'Despliegue de Servidores', en: 'We expect the installation should be completed by then.', es: 'Esperamos que la instalación deba estar completada para entonces.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.4-q4',
    sub: '8.2.4',
    num: 4,
    stem: 'Complete the possibility sentence: "The impact of the new antivirus solution __________ significant."',
    correct: 'might be',
    distractors: ['might to be', 'might been', 'might being'],
    why_correct: 'El modal might rige infinitivo sin to ("be"): "might be significant" (podría ser significativo).',
    why_wrong_map: {
      'might to be': 'Might nunca admite la partícula to.',
      'might been': 'Been es participio y no puede seguir a might sin have.',
      'might being': 'Might no rige gerundio.'
    },
    tip: 'Modal simple: [might + be + adjetivo].',
    topic: 'G14',
    objective: 'UE1',
    human_rule: 'El impacto de la nueva solución antivirus podría ser significativo: "might be".',
    trigger: 'The impact ... __________ significant -> might be',
    trap: 'Poner "might to be" por confusión con semimodales.',
    usage: { scenario: 'Evaluación de Rendimiento de Endpoint Protection', en: 'The impact of the new antivirus solution might be significant.', es: 'El impacto de la nueva solución antivirus podría ser significativo.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.4-q5',
    sub: '8.2.4',
    num: 5,
    stem: 'Complete the security rule in passive voice: "The proxy setting __________ bypassed."',
    correct: 'can\'t be',
    distractors: ['can\'t to be', 'can\'t been', 'can\'t being'],
    why_correct: 'La pasiva negativa de imposibilidad modal sigue la regla [can\'t + be + participio pasado]: "can\'t be bypassed".',
    why_wrong_map: {
      'can\'t to be': 'Can\'t jamás lleva infinitivo con to.',
      'can\'t been': 'Been exige el auxiliar have ("can\'t have been").',
      'can\'t being': 'Agramatical en inglés estándar.'
    },
    tip: 'Pasiva negativa con modal: [can\'t be + participio pasado].',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'La configuración del proxy no puede ser eludida: "can\'t be bypassed".',
    trigger: 'The proxy setting __________ bypassed -> can\'t be',
    trap: 'Añadir "to" tras can\'t.',
    usage: { scenario: 'Políticas de Navegación Corporativa', en: 'The proxy setting can\'t be bypassed.', es: 'La configuración del proxy no puede ser eludida / sorteada.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.4-q6',
    sub: '8.2.4',
    num: 6,
    stem: 'Complete the policy instruction: "The latest updates __________ installed as soon as possible."',
    correct: 'should be',
    distractors: ['should been', 'should to be', 'should to have been'],
    why_correct: 'Recomendación formal pasiva: [should + be + installed] (deberían ser instaladas).',
    why_wrong_map: {
      'should been': 'Falta el infinitivo be o el auxiliar have.',
      'should to be': 'Should rechaza la partícula to.',
      'should to have been': 'Doble error: should no lleva to y introduce have been innecesariamente para una recomendación presente.'
    },
    tip: 'Voz pasiva de recomendación presente: [should be + participio pasado].',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'Las últimas actualizaciones deberían ser instaladas lo antes posible: "should be".',
    trigger: 'The latest updates __________ installed -> should be',
    trap: 'Poner "should to be" por analogía con "ought to be".',
    usage: { scenario: 'Gestión de Parches de Seguridad', en: 'The latest updates should be installed as soon as possible.', es: 'Las últimas actualizaciones deberían ser instaladas lo antes posible.' }
  }),

  // =========================================================
  // 8.2.5 Need / Needn't Structures & Transformations (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.2.5-q1',
    sub: '8.2.5',
    num: 1,
    stem: 'Rewrite using a passive structure with "need": "It’s not necessary to preserve the list after iterating." -> "The list __________ after iterating."',
    correct: 'needn\'t be preserved',
    distractors: ['doesn\'t need preserve', 'needn\'t to be preserved', 'needn\'t preserved'],
    why_correct: 'Cuando "need" actúa como modal negativo en presente, se formula como [needn\'t + be + participio pasado]: "The list needn\'t be preserved".',
    why_wrong_map: {
      'doesn\'t need preserve': 'Falta la voz pasiva ("to be preserved") y la partícula to.',
      'needn\'t to be preserved': 'Como verbo modal, "needn\'t" NUNCA va seguido de la partícula to.',
      'needn\'t preserved': 'Falta el infinitivo auxiliar be.'
    },
    tip: 'Modal needn\'t en voz pasiva: [needn\'t be + participio pasado]. ¡Sin "to"!',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'No es necesario conservar la lista = La lista no necesita ser conservada ("needn\'t be preserved").',
    trigger: 'It\'s not necessary to preserve -> The list needn\'t be preserved',
    trap: 'Añadir "to" ("needn\'t to be") olvidando que needn\'t funciona como modal puro.',
    usage: { scenario: 'Optimización de Memoria y Garbage Collection', en: 'The list needn\'t be preserved after iterating.', es: 'La lista no necesita ser preservada después de iterar.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.5-q2',
    sub: '8.2.5',
    num: 2,
    stem: 'Rewrite using the passive gerund structure: "It is necessary to solve the problem quickly." -> "The problem __________ quickly."',
    correct: 'needs solving',
    distractors: ['needs to solve', 'need solving', 'needs solve'],
    why_correct: 'En inglés formal de TI, [sujeto inanimado + need + gerundio (-ing)] tiene un significado pasivo intrínseco: "The problem needs solving" equivale exactamente a "needs to be solved".',
    why_wrong_map: {
      'needs to solve': 'Voz activa; el problema no puede resolver cosas por sí mismo.',
      'need solving': 'Falta la -s de tercera persona singular para el sujeto "The problem".',
      'needs solve': 'Agramatical; falta infinitivo con to o gerundio.'
    },
    tip: 'Regla de oro B2: [Cosa inanimada + needs + verbo-ing] = significado pasivo ("necesita ser resuelto").',
    topic: 'G01',
    objective: 'UE1',
    human_rule: '"The problem needs solving" significa exactamente "el problema necesita ser resuelto".',
    trigger: 'It is necessary to solve the problem -> The problem needs solving',
    trap: 'Pensar que "needs solving" está mal porque termina en -ing y elegir "needs to solve" (que es activa).',
    usage: { scenario: 'Resolución de Incidentes Mayores', en: 'The problem needs solving quickly.', es: 'El problema necesita resolverse rápidamente.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.5-q3',
    sub: '8.2.5',
    num: 3,
    stem: 'Rewrite emphasizing that an action was done unnecessarily: "They have preserved the list but it was not necessary." -> "They __________ the list."',
    correct: 'needn\'t have preserved',
    distractors: ['didn\'t need preserve', 'needn\'t preserve', 'needn\'t to have preserved'],
    why_correct: 'La estructura [needn\'t have + participio pasado] se usa estrictamente cuando una acción ya se ejecutó en el pasado, pero resultó innecesaria ("no tenían por qué haberla conservado").',
    why_wrong_map: {
      'didn\'t need preserve': 'Falta el "to" obligatorio con didn\'t need ("didn\'t need to preserve").',
      'needn\'t preserve': 'Se refiere al presente o futuro, pero la oración indica que la lista ya fue conservada.',
      'needn\'t to have preserved': 'Needn\'t como modal jamás lleva la partícula to.'
    },
    tip: '[needn\'t have + participio pasado] = Se hizo algo en el pasado que no era necesario haber hecho.',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'Conservaron la lista pero no hacía falta: "They needn\'t have preserved the list".',
    trigger: 'They have preserved ... but it was not necessary -> needn\'t have preserved',
    trap: 'Confundir "didn\'t need to do" (no era necesario y no se hizo) con "needn\'t have done" (se hizo innecesariamente).',
    usage: { scenario: 'Refactorización de Código', en: 'They needn\'t have preserved the list.', es: 'No necesitaban haber preservado la lista (la preservaron sin necesidad).' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.5-q4',
    sub: '8.2.5',
    num: 4,
    stem: 'Rewrite using the passive gerund form: "It is important to reduce the memory usage." -> "The memory usage __________."',
    correct: 'needs reducing',
    distractors: ['needs reduce', 'need to reducing', 'needs to reduce'],
    why_correct: 'Siguiendo la regla de voz pasiva con gerundio tras need: "The memory usage needs reducing" (= needs to be reduced).',
    why_wrong_map: {
      'needs reduce': 'Agramatical.',
      'need to reducing': 'Agramatical combinación de to + gerundio.',
      'needs to reduce': 'Activa; el consumo de memoria no reduce cosas, sino que debe ser reducido.'
    },
    tip: '[Sujeto técnico + needs + gerundio -ing] = valor pasivo ("necesita reducirse").',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'El consumo de memoria necesita reducirse: "needs reducing".',
    trigger: 'It is important to reduce the memory usage -> The memory usage needs reducing',
    trap: 'Elegir "needs to reduce" haciendo que la memoria parezca el sujeto agente activo.',
    usage: { scenario: 'Optimización de Runtimes y Microservicios', en: 'The memory usage needs reducing.', es: 'El uso de memoria necesita ser reducido.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.5-q5',
    sub: '8.2.5',
    num: 5,
    stem: 'Rewrite indicating that the changes were made pointlessly: "Those changes they have made weren’t really necessary." -> "They __________ those changes."',
    correct: 'needn\'t have made',
    distractors: ['didn\'t need make', 'needn\'t make', 'needn\'t to have made'],
    why_correct: 'Como los cambios ya fueron implementados pero no eran necesarios, la fórmula correcta es [needn\'t have + participio]: "needn\'t have made".',
    why_wrong_map: {
      'didn\'t need make': 'Falta la partícula to requerida por el verbo ordinario need.',
      'needn\'t make': 'Refleja presente o futuro, pero los cambios ya fueron hechos.',
      'needn\'t to have made': 'Needn\'t rechaza tajantemente la partícula to.'
    },
    tip: 'Acción pretérita realizada innecesariamente: [needn\'t have made].',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'Hicieron esos cambios pero no hacía falta: "They needn\'t have made those changes".',
    trigger: 'Those changes they have made weren’t really necessary -> needn\'t have made',
    trap: 'Poner "needn\'t to have" por error de hiperextensión de la partícula "to".',
    usage: { scenario: 'Revisión de Pull Request (PR)', en: 'They needn\'t have made those changes.', es: 'No necesitaban haber hecho esos cambios.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.2.5-q6',
    sub: '8.2.5',
    num: 6,
    stem: 'Rewrite in passive voice: "The best idea is for our options to be reconsidered." -> "Our options __________."',
    correct: 'need to be reconsidered',
    distractors: ['need reconsidering', 'needs to be reconsidered', 'need be reconsidered'],
    why_correct: 'El sujeto es plural ("Our options"), por lo que concuerda con "need to be reconsidered". En el ejercicio oficial de Cisco esta es la equivalencia exacta requerida.',
    why_wrong_map: {
      'need reconsidering': 'Aunque "need reconsidering" es admisible en habla inglesa general, la clave oficial de Cisco para esta transformación exige la pasiva estándar de infinitivo "need to be reconsidered".',
      'needs to be reconsidered': 'Error de concordancia de número: "options" es plural, no puede llevar "needs".',
      'need be reconsidered': 'Falta la partícula to en la perífrasis con el verbo ordinario need.'
    },
    tip: 'Concordancia plural: [Our options + need to be + participio pasado].',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'Nuestras opciones necesitan ser reconsideradas: "Our options need to be reconsidered".',
    trigger: 'options to be reconsidered -> Our options need to be reconsidered',
    trap: 'Poner "needs" olvidando que "options" es un sustantivo plural.',
    usage: { scenario: 'Reunión de Estrategia de Entrega', en: 'Our options need to be reconsidered.', es: 'Nuestras opciones necesitan ser reconsideradas.' }
  })
];

module.exports = { items_8_2 };
