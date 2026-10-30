const { createQuestion } = require('./builder_helper.cjs');

/**
 * English for IT 1 - Module 4: Customer Support (Examine Key Information)
 * 44 items total covering sections 4.1 to 4.4
 */
const items_mod4 = [
  // =========================================================
  // 4.1 Adverbs with Polite Requests & Transitions (12 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod4-sec1-ex1-q1',
    sub: '4.1.3',
    num: 1,
    stem: 'Select the appropriate courtesy adverb: "Could you __________ tell me why I am still unable to send an email?"',
    correct: 'Kindly / Urgently',
    distractors: ['Furthermore', 'Harshly', 'Roughly'],
    why_correct: 'En el temario oficial de Cisco, para formular peticiones corteses o urgentes en atención al cliente se emplean adverbios como "kindly" (amablemente) o "urgently" (urgentemente): "Could you kindly tell me...".',
    why_wrong_map: {
      'Furthermore': 'Es un conector discursivo de adición ("además"), no un adverbio de modo que modifique al verbo "tell".',
      'Harshly': 'Significa duramente / con aspereza; totalmente inapropiado para atención profesional.',
      'Roughly': 'Significa aproximadamente o con brusquedad; agramatical aquí.'
    },
    tip: 'Petición cortés en soporte: [Could you kindly tell me...?].',
    topic: 'G09',
    objective: 'UE2',
    human_rule: '¿Podría amablemente / urgentemente decirme por qué...?: "Could you kindly tell me...".',
    trigger: 'Could you __________ tell me why -> Kindly / Urgently',
    trap: 'Intentar usar conectores de párrafo como "Furthermore" en medio de la pregunta.',
    usage: { scenario: 'Ticket de Soporte de Correo', en: 'Could you kindly tell me why I am still unable to send an email?', es: '¿Podría decirme amablemente por qué todavía no puedo enviar correos electrónicos?' }
  }),
  createQuestion({
    id: 'it1-mod4-sec1-ex1-q2',
    sub: '4.1.3',
    num: 2,
    stem: 'Complete the formal addition in management communication: "We need to increase the number of closed cases this month. __________ , we must improve customer satisfaction."',
    correct: 'Furthermore',
    distractors: ['Kindly', 'Urgently', 'Unless'],
    why_correct: '"Furthermore" (además / es más) introduce un punto formal adicional que refuerza el objetivo principal del equipo.',
    why_wrong_map: {
      'Kindly': 'Adverbio de cortesía; no funciona como conector de enlace interoracional entre dos frases independientes.',
      'Urgently': 'Adverbio de tiempo/modo; no puede sustituir a un conector de transición aditivo.',
      'Unless': 'Conjunción condicional subordinante ("a menos que").'
    },
    tip: 'Conector formal de adición en reportes: [Furthermore, + oración completa].',
    topic: 'G09',
    objective: 'UE3',
    human_rule: 'Además / Asimismo, debemos mejorar la satisfacción del cliente: "Furthermore, ...".',
    trigger: 'closed cases this month. __________ , we must improve -> Furthermore',
    trap: 'Usar adverbios de modo en lugar del conector discursivo "Furthermore".',
    usage: { scenario: 'Reunión de Métricas de Soporte', en: 'We need to increase the number of closed cases. Furthermore, customer satisfaction must improve.', es: 'Necesitamos aumentar el número de casos cerrados este mes. Además, debemos mejorar la satisfacción del cliente.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec1-ex1-q3',
    sub: '4.1.3',
    num: 3,
    stem: 'Complete the polite escalation: "I would appreciate it if you could __________ let me know what happened to the database instance."',
    correct: 'Kindly / Urgently',
    distractors: ['Furthermore', 'Never', 'Rarely'],
    why_correct: 'La estructura de cortesía diplomática "I would appreciate it if you could kindly/urgently let me know..." combina respeto con la necesidad de información rápida.',
    why_wrong_map: {
      'Furthermore': 'Conector de enlace que no puede insertarse entre modal "could" e infinitivo "let".',
      'Never': 'Significaría "agradecería que NUNCA me hicieras saber", absurdo en soporte.',
      'Rarely': 'Incoherente con la solicitud de información.'
    },
    tip: 'Fórmula de cortesía ejecutiva: [I would appreciate it if you could kindly let me know...].',
    topic: 'G09',
    objective: 'UE2',
    human_rule: 'Le agradecería que amablemente me hiciera saber qué ocurrió: "could kindly let me know".',
    trigger: 'if you could __________ let me know -> Kindly / Urgently',
    trap: 'Confundir la posición de conectores de enlace con la de adverbios de modo ante el verbo.',
    usage: { scenario: 'Escalación a Infraestructura', en: 'I would appreciate it if you could kindly let me know what happened.', es: 'Le agradecería que tuviera la amabilidad de informarme de lo ocurrido.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec1-ex1-q4',
    sub: '4.1.3',
    num: 4,
    stem: 'Complete the incident report: "The application is no longer functioning. __________ , I am completely locked out of the administration console."',
    correct: 'Furthermore',
    distractors: ['Kindly', 'Urgently', 'Despite'],
    why_correct: 'El hablante añade un agravante crítico al fallo ya reportado, exigiendo el conector aditivo formal "Furthermore,".',
    why_wrong_map: {
      'Kindly': 'No puede funcionar como conector de enlace oracional.',
      'Urgently': 'Adverbio de urgencia no apto para encabezar la adición discursiva.',
      'Despite': 'Preposición que exige sustantivo o gerundio, nunca coma y oración con sujeto y verbo.'
    },
    tip: 'Adición formal de gravedad técnica: [Furthermore, I am locked out...].',
    topic: 'G09',
    objective: 'UE3',
    human_rule: 'Es más / Además, estoy completamente bloqueado: "Furthermore, I am locked out...".',
    trigger: 'is no longer functioning. __________ , I am -> Furthermore',
    trap: 'Intentar usar preposiciones como "Despite" al inicio de una oración independiente con coma.',
    usage: { scenario: 'Ticket de Incidente Crítico P1', en: 'The application is no longer functioning. Furthermore, I am completely locked out.', es: 'La aplicación ya no funciona. Además, estoy completamente bloqueado de la consola.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec1-ex1-q5',
    sub: '4.1.3',
    num: 5,
    stem: 'Complete the support instruction: "In order for the application to work, you need the latest operating system. __________ update it before restarting."',
    correct: 'Kindly / Urgently',
    distractors: ['Furthermore', 'Nevertheless', 'Instead of'],
    why_correct: 'Para solicitar educadamente al usuario que aplique una actualización requerida en un imperativo cortés, se antepone "Kindly" (o "Urgently" en parches críticos): "Kindly update it...".',
    why_wrong_map: {
      'Furthermore': 'Significa además; no acompaña como marcador de cortesía a un verbo imperativo directo.',
      'Nevertheless': 'Conector de contraste concesivo ("no obstante").',
      'Instead of': 'Preposición que exige sustantivo o gerundio.'
    },
    tip: 'Imperativo de cortesía en soporte técnico: [Kindly + verbo base] ("Kindly update it").',
    topic: 'G09',
    objective: 'UE2',
    human_rule: 'Tenga la amabilidad de actualizarlo / Actualícelo amablemente: "Kindly update it".',
    trigger: 'latest operating system. __________ update it -> Kindly / Urgently',
    trap: 'Usar "Furthermore" delante de un imperativo.',
    usage: { scenario: 'Instrucciones al Usuario en Mesa de Ayuda', en: 'In order for the application to work, you need the latest OS. Kindly update it.', es: 'Para que la aplicación funcione, necesita el sistema operativo más reciente. Tenga la amabilidad de actualizarlo.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec1-ex1-q6',
    sub: '4.1.3',
    num: 6,
    stem: 'Complete the urgent ticket closing: "Please can you look into this issue __________ ?"',
    correct: 'Urgently',
    distractors: ['Furthermore', 'Kindly', 'Hardly'],
    why_correct: 'Al final de la oración tras el objeto directo ("this issue"), el adverbio que denota la prioridad y rapidez con la que se solicita la intervención es "urgently".',
    why_wrong_map: {
      'Furthermore': 'Conector discursivo no utilizable como adverbio de tiempo al final de una pregunta.',
      'Kindly': 'Se sitúa delante del verbo ("kindly look into"), no al final de la pregunta.',
      'Hardly': 'Significa apenas o casi no; cambiaría radicalmente el sentido.'
    },
    tip: 'Posición final para prioridad temporal: [look into this issue urgently?].',
    topic: 'G09',
    objective: 'UE2',
    human_rule: '¿Pueden revisar este asunto urgentemente?: "look into this issue urgently".',
    trigger: 'look into this issue __________ ? -> Urgently',
    trap: 'Colocar "Kindly" al final de la frase en vez de "urgently".',
    usage: { scenario: 'Petición de Soporte en Slack', en: 'Please can you look into this issue urgently?', es: '¿Por favor pueden investigar este problema urgentemente?' }
  }),
  createQuestion({
    id: 'it1-mod4-sec1-ex2-q1',
    sub: '4.1.4',
    num: 1,
    stem: 'Select the correctly structured polite customer inquiry:',
    correct: 'Could you kindly tell me why I am still unable to send an email?',
    distractors: [
      'Could you furthermore tell me why I am still unable to send an email?',
      'Could you tell me why I am still unable kindly to send an email?',
      'Kindly could you tell me why am I still unable to send an email?'
    ],
    why_correct: 'La posición estándar y pulcra del adverbio de cortesía en preguntas indirectas es entre el sujeto y el verbo principal ("Could you kindly tell me..."), con orden declarativo en la cláusula subordinada ("why I am", no "why am I").',
    why_wrong_map: {
      'Could you furthermore tell me why I am still unable to send an email?': 'Furthermore no funciona como adverbio modal de cortesía.',
      'Could you tell me why I am still unable kindly to send an email?': 'Posición antinatural de kindly.',
      'Kindly could you tell me why am I still unable to send an email?': 'Inversión incorrecta en la cláusula indirecta ("why am I" en vez de "why I am").'
    },
    tip: 'Orden de pregunta indirecta cortés: [Could you kindly tell me + WH-word + sujeto + verbo].',
    topic: 'G09',
    objective: 'UE2',
    human_rule: '¿Podría amablemente decirme por qué aún no puedo enviar correo?: "Could you kindly tell me why I am...".',
    trigger: 'Could you kindly tell me why I am still unable -> Correct formulation',
    trap: 'Invertir el orden de la cláusula subordinada poniendo "why am I" en vez de "why I am".',
    usage: { scenario: 'Comunicación Diplomática con Helpdesk', en: 'Could you kindly tell me why I am still unable to send an email?', es: '¿Podría decirme amablemente por qué todavía no puedo enviar correos electrónicos?' }
  }),
  createQuestion({
    id: 'it1-mod4-sec1-ex2-q2',
    sub: '4.1.4',
    num: 2,
    stem: 'Select the correctly punctuated and connected sentence for an internal memo:',
    correct: 'We need to increase the number of closed cases this month. Furthermore, customer satisfaction must improve.',
    distractors: [
      'We need to increase the number of closed cases this month, furthermore customer satisfaction must improve.',
      'We need to increase the number of closed cases this month. Kindly, customer satisfaction must improve.',
      'We need to increase the number of closed cases this month. Urgently customer satisfaction must improve.'
    ],
    why_correct: '"Furthermore" requiere punto previo (o punto y coma) seguido de una coma obligatoria que lo separa de la cláusula independiente ("Furthermore, customer satisfaction must improve.").',
    why_wrong_map: {
      'We need to increase the number of closed cases this month, furthermore customer satisfaction must improve.': 'Coma splice; dos oraciones independientes no pueden unirse con simple coma y furthermore sin punto y coma.',
      'We need to increase the number of closed cases this month. Kindly, customer satisfaction must improve.': 'Uso incorrecto de kindly como conector discursivo.',
      'We need to increase the number of closed cases this month. Urgently customer satisfaction must improve.': 'Uso forzado de urgently sin sentido discursivo.'
    },
    tip: 'Puntuación de adverbios conectores: [Punto. Furthermore, + oración].',
    topic: 'G09',
    objective: 'UE3',
    human_rule: 'Punto y coma o punto seguido de "Furthermore," con coma.',
    trigger: 'closed cases this month. Furthermore, customer satisfaction -> Correct punctuation',
    trap: 'Omitir la coma tras "Furthermore" o unir oraciones independientes solo con coma.',
    usage: { scenario: 'Memo Interno de Soporte al Cliente', en: 'Furthermore, customer satisfaction must improve.', es: 'Además, la satisfacción del cliente debe mejorar.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec1-ex2-q3',
    sub: '4.1.4',
    num: 3,
    stem: 'Select the most natural and professional request for clarification:',
    correct: 'I would appreciate it if you could kindly let me know what happened.',
    distractors: [
      'I would appreciate it if you kindly let me to know what happened.',
      'I appreciate it if you could urgently to let me know what happened.',
      'I would appreciate if you could kindly let me know what did happen.'
    ],
    why_correct: 'La fórmula canónica exige el pronombre "it" tras appreciate: [I would appreciate IT if you could kindly let me know what happened].',
    why_wrong_map: {
      'I would appreciate it if you kindly let me to know what happened.': 'Let rige infinitivo sin to ("let me know"), no "to know".',
      'I appreciate it if you could urgently to let me know what happened.': 'Could no lleva to.',
      'I would appreciate if you could kindly let me know what did happen.': 'Olvida el pronombre preparatorio "it" tras appreciate e introduce un "did" superfluo.'
    },
    tip: 'Regla fija: siempre [I would appreciate IT if you could...]. ¡El "it" es obligatorio!',
    topic: 'G09',
    objective: 'UE2',
    human_rule: 'Le agradecería que amablemente me hiciera saber qué pasó: "I would appreciate it if you could kindly...".',
    trigger: 'I would appreciate it if you could kindly let me know -> Correct idiom',
    trap: 'Olvidar el pronombre "it" tras el verbo appreciate.',
    usage: { scenario: 'Petición Formal de Información', en: 'I would appreciate it if you could kindly let me know what happened.', es: 'Le agradecería que tuviera la amabilidad de informarme de lo sucedido.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec1-ex2-q4',
    sub: '4.1.4',
    num: 4,
    stem: 'Select the correct sentence describing an escalating technical breakdown:',
    correct: 'The application is not working. Furthermore, the database service is unresponsive.',
    distractors: [
      'The application is not working. Urgently, the database service is unresponsive.',
      'The application is not working. Kindly the database service is unresponsive.',
      'The application is not working, furthermore the database service is unresponsive.'
    ],
    why_correct: 'El conector aditivo formal "Furthermore," encabeza la segunda oración detallando la indisponibilidad adicional de la base de datos.',
    why_wrong_map: {
      'The application is not working. Urgently, the database service is unresponsive.': 'Urgently no califica el estado de inactividad de un servicio.',
      'The application is not working. Kindly the database service is unresponsive.': 'Uso absurdo de kindly.',
      'The application is not working, furthermore the database service is unresponsive.': 'Falta el punto y la coma requeridos para el conector oracional.'
    },
    tip: 'Estructuración de incidentes técnicos en varias capas: [Problema A. Furthermore, Problema B].',
    topic: 'G09',
    objective: 'UE3',
    human_rule: 'La aplicación no funciona. Además, el servicio de base de datos no responde.',
    trigger: 'application is not working. Furthermore, the database service is unresponsive -> Correct structure',
    trap: 'Intentar usar adverbios de modo inapropiados para enlazar oraciones.',
    usage: { scenario: 'Alerta de Monitoreo NOC', en: 'The application is not working. Furthermore, the database service is unresponsive.', es: 'La aplicación no está funcionando. Además, el servicio de base de datos no responde.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec1-ex2-q5',
    sub: '4.1.4',
    num: 5,
    stem: 'Select the correctly phrased urgent ticket instruction:',
    correct: 'Please can you look into this issue urgently?',
    distractors: [
      'Please can you urgently look into this issue kindly?',
      'Please look you into this issue urgently?',
      'Can you please to look into this issue urgently?'
    ],
    why_correct: '"Please can you look into this issue urgently?" es la formulación oficial de Cisco para solicitar máxima celeridad en la resolución.',
    why_wrong_map: {
      'Please can you urgently look into this issue kindly?': 'Combina redundantemente urgently y kindly en la misma cláusula corta.',
      'Please look you into this issue urgently?': 'Orden sintáctico agramatical.',
      'Can you please to look into this issue urgently?': 'Modal can nunca admite la partícula to.'
    },
    tip: 'Petición interrogativa urgente: [Please can you look into this issue urgently?].',
    topic: 'G09',
    objective: 'UE2',
    human_rule: 'Por favor, ¿pueden investigar este problema urgentemente?',
    trigger: 'Please can you look into this issue urgently -> Canonical phrasing',
    trap: 'Mezclar adverbios contradictorios en la misma frase.',
    usage: { scenario: 'Petición en Canal de Incidencias Críticas', en: 'Please can you look into this issue urgently?', es: '¿Por favor pueden investigar este problema con urgencia?' }
  }),
  createQuestion({
    id: 'it1-mod4-sec1-ex2-q6',
    sub: '4.1.4',
    num: 6,
    stem: 'Select the correct polite directive for software installation:',
    correct: 'For the application to work you need the latest update. Kindly install it.',
    distractors: [
      'For the application to work you need the latest update. Furthermore install it.',
      'For the application to work you need the latest update. Urgently to install it.',
      'For the application to work you need the latest update. Kindly to install it.'
    ],
    why_correct: '"Kindly install it" es el imperativo de cortesía canónico (Kindly + verbo base sin to) para dar una instrucción técnica amable.',
    why_wrong_map: {
      'For the application to work you need the latest update. Furthermore install it.': 'Furthermore no acompaña imperativos directos.',
      'For the application to work you need the latest update. Urgently to install it.': 'Agramatical; falta verbo finito o imperativo sin to.',
      'For the application to work you need the latest update. Kindly to install it.': 'El imperativo con kindly rechaza la partícula to ("Kindly install it", nunca "to install").'
    },
    tip: 'Imperativo cortés: [Kindly + verbo base sin to].',
    topic: 'G09',
    objective: 'UE2',
    human_rule: 'Tenga la amabilidad de instalarlo: "Kindly install it". ¡Sin "to"!',
    trigger: 'need the latest update. Kindly install it -> Correct phrasing',
    trap: 'Poner "to" tras kindly en una orden cortés.',
    usage: { scenario: 'Instrucciones de Mesa de Ayuda', en: 'For the application to work you need the latest update. Kindly install it.', es: 'Para que la aplicación funcione necesita la última actualización. Tenga la amabilidad de instalarla.' }
  }),

  // =========================================================
  // 4.2 Listening: Customer Support & Paraphrases (9 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod4-sec2-ex1-q1',
    sub: '4.2.1',
    num: 1,
    stem: 'Select the accurate technical paraphrase for: "They have no need to be concerned."',
    correct: 'They should not be worried.',
    distractors: [
      'They must not configure the router.',
      'They have decided to cancel the project.',
      'They are unable to submit error tickets.'
    ],
    why_correct: '"Have no need to be concerned" es un eufemismo diplomático formal que significa exactamente "no deberían preocuparse" ("They should not be worried").',
    why_wrong_map: {
      'They must not configure the router.': 'Distractor que inventa una orden técnica.',
      'They have decided to cancel the project.': 'Distractor que inventa una decisión de cancelación.',
      'They are unable to submit error tickets.': 'Distractor que asume incapacidad técnica del usuario.'
    },
    tip: 'Paráfrasis de soporte: [no need to be concerned] = [should not be worried].',
    topic: 'V03',
    objective: 'L1',
    human_rule: '"No need to be concerned" = No tienen de qué preocuparse.',
    trigger: 'They have no need to be concerned -> They should not be worried',
    trap: 'Confundir concern (preocupación/inquietud) con verbos de configuración de hardware.',
    usage: { scenario: 'Tranquilizar a Clientes en Incidentes', en: 'Tell the client they have no need to be concerned.', es: 'Dígale al cliente que no tiene de qué preocuparse.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec2-ex1-q2',
    sub: '4.2.1',
    num: 2,
    stem: 'Select the accurate paraphrase for: "You had a difficult day due to the global issue."',
    correct: 'Your day was difficult because of the global incident.',
    distractors: [
      'You solved all international networking problems today.',
      'The global issue had no impact on your workday.',
      'You arrived late because of local traffic delays.'
    ],
    why_correct: '"due to the global issue" es la colocación formal de causa que equivale exactamente a "because of the global incident".',
    why_wrong_map: {
      'You solved all international networking problems today.': 'Afirma falsamente que el empleado resolvió toda la falla global.',
      'The global issue had no impact on your workday.': 'Contradice la dificultad explícita expresada en la frase.',
      'You arrived late because of local traffic delays.': 'Inventa una causa de tráfico ajena a la falla global.'
    },
    tip: 'Equivalencia de causa: [due to...] = [because of...].',
    topic: 'V03',
    objective: 'L1',
    human_rule: '"due to the global issue" = a causa del incidente global.',
    trigger: 'difficult day due to the global issue -> difficult because of the global incident',
    trap: 'No reconocer la equivalencia directa entre due to y because of.',
    usage: { scenario: 'Empatía y Feedback del Team Lead', en: 'You had a difficult day due to the global issue.', es: 'Tuviste un día difícil debido al problema global.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec2-ex1-q3',
    sub: '4.2.1',
    num: 3,
    stem: 'Select the accurate paraphrase for: "Our engineering team is working tirelessly to fix the issue."',
    correct: 'The engineering team is working very hard.',
    distractors: [
      'The engineering team has already resolved all tickets.',
      'The engineers are exhausted and cannot continue.',
      'The engineering team has outsourced the investigation.'
    ],
    why_correct: '"Working tirelessly" (trabajando sin descanso) significa que el equipo de ingeniería está trabajando con el máximo esfuerzo y dedicación ("working very hard").',
    why_wrong_map: {
      'The engineering team has already resolved all tickets.': 'La frase dice "working to fix", la solución aún está en progreso.',
      'The engineers are exhausted and cannot continue.': 'Interpreta erróneamente "tirelessly" (incansablemente) como que están exhaustos y detenidos.',
      'The engineering team has outsourced the investigation.': 'Inventa una subcontratación no mencionada.'
    },
    tip: 'Paráfrasis de esfuerzo técnico: [working tirelessly] = [working very hard].',
    topic: 'V03',
    objective: 'L1',
    human_rule: 'Trabajar incansablemente = trabajar muy duro.',
    trigger: 'working tirelessly to fix the issue -> working very hard',
    trap: 'Creer que "tirelessly" significa cansado (en realidad significa incansable).',
    usage: { scenario: 'Comunicación de Crisis en Página de Estado', en: 'Our team is working tirelessly to restore services.', es: 'Nuestro equipo está trabajando incansablemente para restaurar los servicios.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec2-ex1-q4',
    sub: '4.2.1',
    num: 4,
    stem: 'Select the accurate paraphrase for the commitment: "I\'ll get on it right away."',
    correct: 'I will do what you want immediately.',
    distractors: [
      'I will think about your request next week.',
      'I am currently working on something else.',
      'I cannot help you with this particular issue.'
    ],
    why_correct: 'El modismo "get on it right away" es el compromiso estándar de soporte para indicar que se iniciará la tarea de inmediato ("I will do what you want immediately").',
    why_wrong_map: {
      'I will think about your request next week.': 'Pospone la acción a la semana siguiente, lo opuesto a "right away".',
      'I am currently working on something else.': 'Indica postergación.',
      'I cannot help you with this particular issue.': 'Indica negativa de servicio.'
    },
    tip: 'Compromiso inmediato en soporte: [I\'ll get on it right away] = Me pongo con ello de inmediato.',
    topic: 'V03',
    objective: 'L1',
    human_rule: '"get on it right away" = me pongo a trabajar en ello de inmediato.',
    trigger: 'I\'ll get on it right away -> I will do what you want immediately',
    trap: 'No reconocer el phrasal verb "get on something".',
    usage: { scenario: 'Atención de Ticket Urgente', en: 'I\'ll get on it right away and update you within 30 minutes.', es: 'Me pondré con ello de inmediato y le actualizaré en 30 minutos.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec2-ex1-q5',
    sub: '4.2.1',
    num: 5,
    stem: 'Select the accurate paraphrase for: "The engineering team is working at full speed."',
    correct: 'The team cannot work any harder.',
    distractors: [
      'The team has stopped working on the issue.',
      'The team is testing network bandwidth speeds.',
      'The team has slowed down the release cadence.'
    ],
    why_correct: '"Working at full speed" (trabajando a toda marcha) significa que el equipo está rindiendo a su capacidad máxima absoluta ("The team cannot work any harder").',
    why_wrong_map: {
      'The team has stopped working on the issue.': 'Contradice la actividad máxima.',
      'The team is testing network bandwidth speeds.': 'Confunde "speed" en sentido figurado con medir velocidad en Mbps.',
      'The team has slowed down the release cadence.': 'Opuesto al sentido de marcha rápida.'
    },
    tip: 'Expresión de máxima capacidad operativa: [working at full speed] = [cannot work any harder].',
    topic: 'V03',
    objective: 'L1',
    human_rule: 'Trabajar a toda marcha = trabajar al máximo sin poder esforzarse más.',
    trigger: 'working at full speed -> The team cannot work any harder',
    trap: 'Interpretar "speed" de forma literal como prueba de telecomunicaciones.',
    usage: { scenario: 'Actualización en Incidente Mayor P0', en: 'The NOC is working at full speed to isolate the flapping link.', es: 'El NOC está trabajando a toda marcha para aislar el enlace intermitente.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec2-ex2-q1',
    sub: '4.2.3',
    num: 1,
    stem: 'According to the listening dialogue, what observation does the woman make about the support agent\'s effort?',
    correct: 'He worked harder than usual today.',
    distractors: [
      'He left the office early due to system crashes.',
      'He refused to answer calls from premium clients.',
      'He accidentally deleted the active directory forest.'
    ],
    why_correct: 'En el audio de Cisco 4.2, la supervisora reconoce el esfuerzo extraordinario del agente de soporte durante la caída masiva ("worked harder than usual today").',
    why_wrong_map: {
      'He left the office early due to system crashes.': 'Falso; se quedó gestionando la crisis.',
      'He refused to answer calls from premium clients.': 'Falso; atendió diligentemente los tickets.',
      'He accidentally deleted the active directory forest.': 'Distractor catastrófico no ocurrido en el audio.'
    },
    tip: 'Reconocimiento de desempeño: El agente trabajó mucho más duro de lo habitual durante la crisis.',
    topic: 'V03',
    objective: 'L2',
    human_rule: 'La supervisora destaca que el agente trabajó más duro de lo habitual hoy.',
    trigger: 'woman says that the agent -> Worked harder than usual today',
    trap: 'Asumir fallos del agente cuando el audio elogia su esfuerzo.',
    usage: { scenario: 'Evaluación de Desempeño en Guardia', en: 'The team lead noted that the engineer worked harder than usual today.', es: 'La jefa de equipo destacó que el ingeniero trabajó más duro de lo habitual hoy.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec2-ex2-q2',
    sub: '4.2.3',
    num: 2,
    stem: 'What uncertainty does the man express regarding the ongoing outage?',
    correct: 'They don’t know when the issue will be resolved.',
    distractors: [
      'They don’t know who authorized the original project budget.',
      'They are unsure whether they should use Windows or Linux.',
      'They don’t know if the physical datacenter has air conditioning.'
    ],
    why_correct: 'El ingeniero manifiesta que la causa raíz aún se está investigando y que se desconoce el tiempo estimado de restauración ("They don’t know when the issue will be resolved").',
    why_wrong_map: {
      'They don’t know who authorized the original project budget.': 'Tema financiero no tratado en el diálogo.',
      'They are unsure whether they should use Windows or Linux.': 'Falso debate de sistema operativo.',
      'They don’t know if the physical datacenter has air conditioning.': 'Distractor de instalaciones físicas.'
    },
    tip: 'Incertidumbre en SLAs de incidentes: Desconocen el tiempo exacto de resolución del fallo.',
    topic: 'V03',
    objective: 'L3',
    human_rule: 'El hombre manifiesta que aún no saben cuándo se resolverá el problema.',
    trigger: 'The man believes -> They don’t know when the issue will be resolved',
    trap: 'Confundir la causa del fallo con la estimación de tiempo de resolución.',
    usage: { scenario: 'Comunicación de Incidentes SLA', en: 'We cannot give an exact ETA because we don’t know when the issue will be resolved.', es: 'No podemos dar una hora estimada exacta porque no sabemos cuándo se resolverá el problema.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec2-ex2-q3',
    sub: '4.2.3',
    num: 3,
    stem: 'What critical concern does the man want to clarify immediately?',
    correct: 'If customer data has been destroyed.',
    distractors: [
      'If the company coffee machine is operational.',
      'If employee salaries will be doubled next month.',
      'If the building security cameras require firmware upgrades.'
    ],
    why_correct: 'La prioridad de seguridad que el interlocutor quiere verificar de inmediato es la integridad de los datos de los usuarios ("If customer data has been destroyed").',
    why_wrong_map: {
      'If the company coffee machine is operational.': 'Distractor trivial humorístico.',
      'If employee salaries will be doubled next month.': 'Falso tema salarial.',
      'If the building security cameras require firmware upgrades.': 'Distractor de seguridad física no tratado.'
    },
    tip: 'Prioridad de impacto en ciberseguridad: Verificar si hubo pérdida o destrucción de datos de clientes.',
    topic: 'V03',
    objective: 'L4',
    human_rule: 'El hombre quiere saber con urgencia si se han destruido datos de clientes.',
    trigger: 'The man wants to know -> If customer data has been destroyed',
    trap: 'No captar que la mayor preocupación de compliance es la pérdida de datos.',
    usage: { scenario: 'Evaluación de Daños por Incidentes', en: 'Our primary objective is to verify if customer data has been destroyed.', es: 'Nuestro objetivo primordial es verificar si se han destruido datos de los clientes.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec2-ex2-q4',
    sub: '4.2.3',
    num: 4,
    stem: 'What positive context does the woman remind the engineer about the company\'s overall trajectory?',
    correct: 'The company has had a lot of success recently.',
    distractors: [
      'The company has fired all external contractors.',
      'The company has closed down its international offices.',
      'The company has abandoned all security certifications.'
    ],
    why_correct: 'Para mantener la moral y perspectiva del equipo durante la crisis, la supervisora recuerda que la empresa viene de una etapa de gran crecimiento y éxito ("has had a lot of success recently").',
    why_wrong_map: {
      'The company has fired all external contractors.': 'Falso; no se menciona despido de contratistas.',
      'The company has closed down its international offices.': 'Falso; la empresa opera a escala global.',
      'The company has abandoned all security certifications.': 'Falso y opuesto a las políticas de cumplimiento.'
    },
    tip: 'Perspectiva positiva en liderazgo: Recordar que la empresa ha cosechado grandes éxitos recientes a pesar de la caída puntual.',
    topic: 'V03',
    objective: 'L3',
    human_rule: 'La mujer recuerda que la empresa ha tenido mucho éxito recientemente.',
    trigger: 'woman says that the company -> Has had a lot of success recently',
    trap: 'Asumir un tono pesimista general cuando la supervisora aporta perspectiva positiva.',
    usage: { scenario: 'Gestión de Crisis y Liderazgo', en: 'Remember that despite this outage, the company has had a lot of success recently.', es: 'Recuerden que a pesar de esta caída, la empresa ha tenido mucho éxito recientemente.' }
  }),

  // =========================================================
  // 4.3 Workplace Communication Idioms (12 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod4-sec3-ex1-q1',
    sub: '4.3.3',
    num: 1,
    stem: 'Unscramble the workplace idiom: (a, on, roll)',
    correct: 'On a roll',
    distractors: ['Roll on a', 'A roll on', 'On roll a'],
    why_correct: '"On a roll" es el modismo en inglés que describe estar en una racha continua de victorias, avances o productividad exitosa.',
    why_wrong_map: {
      'Roll on a': 'Orden sintáctico incorrecto.',
      'A roll on': 'Agramatical en inglés.',
      'On roll a': 'Colocación agramatical del artículo.'
    },
    tip: 'Idiom de productividad: [On a roll] = estar en racha exitosa.',
    topic: 'G26',
    objective: 'UE4',
    human_rule: '"On a roll" = estar en racha de éxitos.',
    trigger: '(a, on, roll) -> On a roll',
    trap: 'Traducir literalmente "en un rollo".',
    usage: { scenario: 'Felicitaciones en Sprint Retrospective', en: 'We closed 25 tickets before lunch; we are on a roll!', es: 'Cerramos 25 tickets antes del almuerzo; ¡estamos en racha!' }
  }),
  createQuestion({
    id: 'it1-mod4-sec3-ex1-q2',
    sub: '4.3.3',
    num: 2,
    stem: 'Unscramble the customer service idiom: (mile, the, extra, go)',
    correct: 'Go the extra mile',
    distractors: ['The extra mile go', 'Go mile the extra', 'Extra the mile go'],
    why_correct: '"Go the extra mile" significa hacer un esfuerzo especial adicional por encima de lo estrictamente requerido para deleitar al cliente o apoyar al equipo.',
    why_wrong_map: {
      'The extra mile go': 'Verbo al final; agramatical.',
      'Go mile the extra': 'Colocación agramatical del artículo.',
      'Extra the mile go': 'Agramatical.'
    },
    tip: 'Idiom por excelencia de atención al cliente: [Go the extra mile] (hacer un esfuerzo extra).',
    topic: 'G26',
    objective: 'UE4',
    human_rule: '"Go the extra mile" = dar la milla extra / esforzarse más allá de lo pactado.',
    trigger: '(mile, the, extra, go) -> Go the extra mile',
    trap: 'Alterar la posición del sustantivo "mile" y el adjetivo "extra".',
    usage: { scenario: 'Atención al Cliente Excepcional', en: 'Top support engineers always go the extra mile to resolve user blockers.', es: 'Los mejores ingenieros de soporte siempre dan la milla extra para resolver los bloqueos de los usuarios.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec3-ex1-q3',
    sub: '4.3.3',
    num: 3,
    stem: 'Unscramble the mental check idiom: (in, keep, mind)',
    correct: 'Keep in mind',
    distractors: ['Mind keep in', 'Keep mind in', 'In mind keep'],
    why_correct: '"Keep in mind" es la colocación fija estándar para indicar "tener en cuenta / recordar / no olvidar un dato técnico relevante".',
    why_wrong_map: {
      'Mind keep in': 'Agramatical.',
      'Keep mind in': 'Agramatical.',
      'In mind keep': 'Inversión incorrecta.'
    },
    tip: 'Colocación fija de atención: [Keep in mind] = tener presente / considerar.',
    topic: 'G26',
    objective: 'UE4',
    human_rule: '"Keep in mind" = ten en cuenta / recuerda.',
    trigger: '(in, keep, mind) -> Keep in mind',
    trap: 'Traducir "guardar en mente" literalmente.',
    usage: { scenario: 'Requisitos Técnicos', en: 'Keep in mind that legacy browsers do not support modern CSS grid.', es: 'Ten en cuenta que los navegadores antiguos no soportan CSS grid moderno.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec3-ex1-q4',
    sub: '4.3.3',
    num: 4,
    stem: 'Unscramble the strategic timeline idiom: (run, in, the, long)',
    correct: 'In the long run',
    distractors: ['Long in the run', 'In the run long', 'The long in run'],
    why_correct: '"In the long run" es el modismo que expresa consecuencias o beneficios futuros sostenidos a largo plazo.',
    why_wrong_map: {
      'Long in the run': 'Agramatical.',
      'In the run long': 'Posición incorrecta del adjetivo.',
      'The long in run': 'Agramatical.'
    },
    tip: 'Perspectiva estratégica: [In the long run] = a la larga / a largo plazo.',
    topic: 'G26',
    objective: 'UE4',
    human_rule: '"In the long run" = a largo plazo.',
    trigger: '(run, in, the, long) -> In the long run',
    trap: 'Confundir con "long term" (adjetivo que suele preceder a un sustantivo).',
    usage: { scenario: 'Inversión en Testing Automatizado', en: 'Writing unit tests saves hundreds of hours in the long run.', es: 'Escribir pruebas unitarias ahorra cientos de horas a largo plazo.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec3-ex1-q5',
    sub: '4.3.3',
    num: 5,
    stem: 'Unscramble the difficulty idiom: (crack, to, hard)',
    correct: 'Hard to crack',
    distractors: ['Crack to hard', 'To hard crack', 'Hard crack to'],
    why_correct: '"Hard to crack" (difícil de resolver / un hueso duro de roer) se aplica en ingeniería a problemas complejos o algoritmos desafiantes.',
    why_wrong_map: {
      'Crack to hard': 'Orden invertido agramatical.',
      'To hard crack': 'Agramatical.',
      'Hard crack to': 'Incompleto.'
    },
    tip: 'Problema técnico complejo: [Hard to crack] = difícil de solucionar.',
    topic: 'G26',
    objective: 'UE4',
    human_rule: '"Hard to crack" = difícil de resolver / descifrar.',
    trigger: '(crack, to, hard) -> Hard to crack',
    trap: 'Asumir que "crack" solo se refiere a romper contraseñas ilegalmente.',
    usage: { scenario: 'Depuración de Bug Intermitente', en: 'This race condition bug has proven very hard to crack.', es: 'Este error de condición de carrera ha demostrado ser muy difícil de resolver.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec3-ex1-q6',
    sub: '4.3.3',
    num: 6,
    stem: 'Unscramble the closing presentation idiom: (but, least, not, last)',
    correct: 'Last but not least',
    distractors: ['Least but not last', 'Not least but last', 'Last not least but'],
    why_correct: '"Last but not least" es la colocación retórica canónica para introducir el elemento final de una lista destacando que no por ser el último es menos importante.',
    why_wrong_map: {
      'Least but not last': 'Invierte los términos alterando el sentido.',
      'Not least but last': 'Agramatical.',
      'Last not least but': 'Agramatical.'
    },
    tip: 'Fórmula de cierre de presentaciones: [Last but not least] (por último pero no menos importante).',
    topic: 'G26',
    objective: 'UE4',
    human_rule: '"Last but not least" = por último, pero no por ello menos importante.',
    trigger: '(but, least, not, last) -> Last but not least',
    trap: 'Invertir el orden diciendo *"Least but not last"*.',
    usage: { scenario: 'Demo de Fin de Sprint', en: 'Last but not least, we improved page loading times by 40 percent.', es: 'Por último, pero no por ello menos importante, mejoramos los tiempos de carga en un 40 por ciento.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec3-ex2-q1',
    sub: '4.3.4',
    num: 1,
    stem: 'Complete the support observation with the idiom: "Some of our technical cases can be __________ ."',
    correct: 'Hard to crack',
    distractors: ['In the long run', 'On a roll', 'Go the extra mile'],
    why_correct: 'El contexto describe la dificultad inherente de ciertos tickets de soporte complejos: "can be hard to crack" (difíciles de solucionar).',
    why_wrong_map: {
      'In the long run': 'Expresa marco temporal futuro, no la dificultad de un caso.',
      'On a roll': 'Describe racha exitosa de una persona o equipo.',
      'Go the extra mile': 'Es una acción que realiza una persona, no una cualidad de un ticket ("cases cannot go the extra mile").'
    },
    tip: 'Atributo de dificultad de un ticket: [hard to crack].',
    topic: 'G26',
    objective: 'UE4',
    human_rule: 'Algunos de nuestros casos técnicos pueden ser difíciles de resolver: "hard to crack".',
    trigger: 'technical cases can be __________ -> Hard to crack',
    trap: 'Intentar usar un modismo verbal de esfuerzo humano en un sujeto inanimado como "cases".',
    usage: { scenario: 'Mesa de Ayuda L2', en: 'Some of our technical cases can be hard to crack.', es: 'Algunos de nuestros casos técnicos pueden ser difíciles de resolver.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec3-ex2-q2',
    sub: '4.3.4',
    num: 2,
    stem: 'Complete the strategic vision statement: "What we need to see __________ is an increase in customer retention and fewer recurring bugs."',
    correct: 'In the long run',
    distractors: ['Hard to crack', 'On a roll', 'Last but not least'],
    why_correct: 'Describe el beneficio sostenible que se espera observar a lo largo del tiempo: "What we need to see in the long run is...".',
    why_wrong_map: {
      'Hard to crack': 'Describe dificultad, no horizonte temporal.',
      'On a roll': 'Describe racha exitosa.',
      'Last but not least': 'Marcador de enumeración, no de marco temporal.'
    },
    tip: 'Horizonte de tiempo en métricas de retención: [in the long run].',
    topic: 'G26',
    objective: 'UE4',
    human_rule: 'Lo que necesitamos ver a la larga / a largo plazo es: "in the long run".',
    trigger: 'What we need to see __________ is an increase -> In the long run',
    trap: 'Confundir conectores de tiempo con conectores de cierre.',
    usage: { scenario: 'Plan Estratégico de Producto', en: 'What we need to see in the long run is an increase in reliability.', es: 'Lo que necesitamos ver a largo plazo es un aumento en la confiabilidad.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec3-ex2-q3',
    sub: '4.3.4',
    num: 3,
    stem: 'Complete the team praise: "Congratulations on the closed cases, everyone. We are really __________ !" ',
    correct: 'On a roll',
    distractors: ['Hard to crack', 'In the long run', 'Last but not least'],
    why_correct: 'El equipo ha cerrado muchos casos exitosamente, por lo que están en una gran racha: "We are really on a roll!".',
    why_wrong_map: {
      'Hard to crack': 'No tiene sentido decir que el equipo es un enigma difícil de descifrar.',
      'In the long run': 'Marco temporal incoherente con el estado actual de felicitación.',
      'Last but not least': 'Marcador de lista, no atributo de equipo.'
    },
    tip: 'Celebración de productividad en equipo: [We are on a roll!].',
    topic: 'G26',
    objective: 'UE4',
    human_rule: '¡Realmente estamos en racha!: "We are really on a roll!".',
    trigger: 'Congratulations on the closed cases ... We are really __________ -> On a roll',
    trap: 'No asociar felicitaciones de productividad con "on a roll".',
    usage: { scenario: 'Cierre Exitoso de Sprint', en: 'Congratulations on the closed cases, everyone. We are really on a roll!', es: 'Felicitaciones a todos por los casos cerrados. ¡Realmente estamos en racha!' }
  }),
  createQuestion({
    id: 'it1-mod4-sec3-ex2-q4',
    sub: '4.3.4',
    num: 4,
    stem: 'Complete the policy advice: "They should __________ that their operating system requires regular security patches."',
    correct: 'Keep in mind',
    distractors: ['Go the extra mile', 'Hard to crack', 'On a roll'],
    why_correct: 'Tras el modal "should" se requiere el verbo base idiomático para recordar o tener presente un requisito: "should keep in mind that...".',
    why_wrong_map: {
      'Go the extra mile': 'Significaría hacer un esfuerzo extra, pero lo que sigue es una cláusula declarativa de conocimiento ("that their OS requires...").',
      'Hard to crack': 'Adjetivo; no puede funcionar como verbo principal tras should.',
      'On a roll': 'Frase preposicional; no encaja tras modal.'
    },
    tip: 'Tener presente una advertencia: [should keep in mind that...].',
    topic: 'G26',
    objective: 'UE4',
    human_rule: 'Deberían tener en cuenta que su sistema operativo requiere parches: "keep in mind".',
    trigger: 'They should __________ that their operating system -> Keep in mind',
    trap: 'Elegir opciones que no son verbos base tras el modal should.',
    usage: { scenario: 'Advertencias de Seguridad al Usuario', en: 'They should keep in mind that their operating system requires patches.', es: 'Deberían tener en cuenta que su sistema operativo requiere parches de seguridad periódicos.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec3-ex2-q5',
    sub: '4.3.4',
    num: 5,
    stem: 'Complete the gratitude message: "Thank you all for __________ today during the critical platform outage."',
    correct: 'Going the extra mile',
    distractors: ['Keeping in mind', 'On a roll', 'Hard to crack'],
    why_correct: 'Tras la preposición "for", el modismo de esfuerzo excepcional adopta gerundio: "Thank you all for going the extra mile today...".',
    why_wrong_map: {
      'Keeping in mind': 'Agradecer por tener en mente no refleja el trabajo físico extraordinario realizado durante la caída.',
      'On a roll': 'No es un verbo en gerundio requerido tras la preposición "for".',
      'Hard to crack': 'No es una acción humana.'
    },
    tip: 'Agradecer esfuerzo excepcional: [Thank you for going the extra mile].',
    topic: 'G26',
    objective: 'UE4',
    human_rule: 'Gracias a todos por dar la milla extra hoy: "going the extra mile".',
    trigger: 'Thank you all for __________ today during the outage -> Going the extra mile',
    trap: 'Olvidar que tras la preposición "for" el verbo adopta forma "-ing" ("going").',
    usage: { scenario: 'Agradecimiento tras Resolución de Incidente P0', en: 'Thank you all for going the extra mile today.', es: 'Gracias a todos por dar la milla extra hoy durante la caída crítica de la plataforma.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec3-ex2-q6',
    sub: '4.3.4',
    num: 6,
    stem: 'Complete the meeting announcement: "__________ , there will be a series of training sessions on customer empathy next week."',
    correct: 'Last but not least',
    distractors: ['On a roll', 'Hard to crack', 'In the long run'],
    why_correct: '"Last but not least," encabeza con coma el último punto relevante de la agenda de la reunión.',
    why_wrong_map: {
      'On a roll': 'No funciona como conector de apertura oracional.',
      'Hard to crack': 'Adjetivo que carece de sentido encabezando este anuncio.',
      'In the long run': 'Marco temporal incoherente con un anuncio específico para la semana siguiente ("next week").'
    },
    tip: 'Introducción del punto final de un orden del día: [Last but not least, + anuncio].',
    topic: 'G26',
    objective: 'UE4',
    human_rule: 'Por último pero no menos importante, habrá sesiones de capacitación: "Last but not least".',
    trigger: '__________ , there will be a series of training sessions -> Last but not least',
    trap: 'Confundir conectores de cierre de lista con expresiones de tiempo a largo plazo.',
    usage: { scenario: 'Cierre de All-Hands de Ingeniería', en: 'Last but not least, there will be training sessions next week.', es: 'Por último pero no menos importante, habrá una serie de sesiones de capacitación la próxima semana.' }
  }),

  // =========================================================
  // 4.4 Reading: Asking Customers Questions (11 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod4-sec4-ex1-q1',
    sub: '4.4.1',
    num: 1,
    stem: 'Select the technical synonym for: "Answer an incoming support call from a user."',
    correct: 'Pick up a call',
    distractors: ['Replicate an issue', 'Drop a packet', 'Forward a port'],
    why_correct: '"Pick up a call" (descolgar / contestar una llamada) es la expresión idiomática equivalente a "answer a call" en centros de atención telefónica de TI.',
    why_wrong_map: {
      'Replicate an issue': 'Reproducir un error técnico en el laboratorio.',
      'Drop a packet': 'Descartar un paquete de datos en el firewall/router.',
      'Forward a port': 'Redirigir un puerto de red en NAT.'
    },
    tip: 'Vocabulario de mesa de ayuda: [Pick up a call] = responder una llamada entrante.',
    topic: 'V03',
    objective: 'UE1',
    human_rule: 'Pick up a call = contestar una llamada de soporte.',
    trigger: 'Answer a call -> Pick up a call',
    trap: 'Confundir con phrasal verbs de telecomunicaciones como "call back".',
    usage: { scenario: 'Helpdesk SLA y Métricas', en: 'Tier 1 agents must pick up incoming calls within three rings.', es: 'Los agentes de Nivel 1 deben responder las llamadas entrantes antes de tres timbres.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec4-ex1-q2',
    sub: '4.4.1',
    num: 2,
    stem: 'Select the accurate paraphrase for: "You run the risk of dealing with an offended customer."',
    correct: 'Your customer might become angry.',
    distractors: [
      'Your customer will immediately upgrade their enterprise subscription.',
      'Your customer is guaranteed to leave a five-star review.',
      'Your customer has resolved the configuration independently.'
    ],
    why_correct: '"Run the risk of dealing with an offended customer" significa que la falta de tacto en el interrogatorio puede provocar el enfado del cliente ("Your customer might become angry").',
    why_wrong_map: {
      'Your customer will immediately upgrade their enterprise subscription.': 'Opuesto al descontento de un cliente ofendido.',
      'Your customer is guaranteed to leave a five-star review.': 'Falso optimismo absurdo.',
      'Your customer has resolved the configuration independently.': 'No guarda relación con la ofensa o enfado.'
    },
    tip: 'Gestión de clientes difíciles: [offended customer] = [customer might become angry].',
    topic: 'V03',
    objective: 'R1',
    human_rule: 'Corres el riesgo de ofender al cliente = tu cliente podría enfadarse.',
    trigger: 'risk of dealing with an offended customer -> customer might become angry',
    trap: 'Subestimar el impacto del tono agresivo al hacer preguntas técnicas a usuarios no técnicos.',
    usage: { scenario: 'Desescalación de Clientes Enojados', en: 'If you question their competence, your customer might become angry.', es: 'Si cuestionas su competencia, tu cliente podría enojarse.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec4-ex1-q3',
    sub: '4.4.1',
    num: 3,
    stem: 'Select the exact definition for: "Replicate an issue."',
    correct: 'Make the same issue happen again.',
    distractors: [
      'Delete the source code containing the bug.',
      'Ignore user complaints until the next release.',
      'Blame third-party hardware vendors.'
    ],
    why_correct: 'En el glosario de soporte técnico de Cisco, "Replicate an issue" se define textualmente como "make the same issue happen again" en un entorno de pruebas.',
    why_wrong_map: {
      'Delete the source code containing the bug.': 'Borrar código no es replicar un fallo.',
      'Ignore user complaints until the next release.': 'Mala práctica inaceptable.',
      'Blame third-party hardware vendors.': 'Distractor no técnico.'
    },
    tip: 'Definición oficial Cisco: [Replicate an issue] = Make the same issue happen again.',
    topic: 'V03',
    objective: 'UE1',
    human_rule: 'Replicate an issue = hacer que el mismo fallo vuelva a ocurrir para estudiarlo.',
    trigger: 'Replicate an issue -> Make the same issue happen again',
    trap: 'Confundir replicación de base de datos (copia de datos) con replicar un ticket de error.',
    usage: { scenario: 'Reproducción de Incidencias QA', en: 'Before writing a patch, we must make the same issue happen again.', es: 'Antes de escribir un parche, debemos hacer que el mismo problema vuelva a suceder.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec4-ex1-q4',
    sub: '4.4.1',
    num: 4,
    stem: 'Select the term for: "Something of such vital necessity that you cannot live or operate without it."',
    correct: 'Indispensable',
    distractors: ['Optional', 'Redundant', 'Deprecated'],
    why_correct: '"Indispensable" (imprescindible / esencial) describe una herramienta o servicio sin el cual el flujo operativo se detiene por completo.',
    why_wrong_map: {
      'Optional': 'Opcional; lo contrario de indispensable.',
      'Redundant': 'Redundante o duplicado para respaldo.',
      'Deprecated': 'En desuso u obsoleto en la API.'
    },
    tip: 'Vocabulario clave: [Indispensable] = something you cannot live/work without.',
    topic: 'V03',
    objective: 'UE1',
    human_rule: 'Indispensable = algo sin lo cual no se puede operar.',
    trigger: 'Something you cannot live without -> Indispensable',
    trap: 'Confundir con "redundant" (que en IT suele tener sentido positivo de alta disponibilidad).',
    usage: { scenario: 'Herramientas Críticas de Helpdesk', en: 'The ticketing system is indispensable for managing customer support requests.', es: 'El sistema de tickets es indispensable para gestionar las solicitudes de soporte al cliente.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec4-ex1-q5',
    sub: '4.4.1',
    num: 5,
    stem: 'Select the idiom for: "To achieve a technical task in a manner that results in customer dissatisfaction or alienation."',
    correct: 'At the expense of customer satisfaction',
    distractors: [
      'In the long run',
      'On a roll',
      'With flying colours'
    ],
    why_correct: '"At the expense of customer satisfaction" (a expensas / a costa de la satisfacción del cliente) advierte contra priorizar la rapidez técnica descuidando la experiencia humana del usuario.',
    why_wrong_map: {
      'In the long run': 'Marco temporal a largo plazo.',
      'On a roll': 'Racha de éxitos.',
      'With flying colours': 'Completar algo con éxito sobresaliente.'
    },
    tip: 'Coste colateral en soporte: [At the expense of...] = a expensas de la satisfacción del cliente.',
    topic: 'V03',
    objective: 'UE1',
    human_rule: '"At the expense of customer satisfaction" = a costa de hacer enojar al cliente.',
    trigger: 'results in the customer being angry -> At the expense of customer satisfaction',
    trap: 'No reconocer la locución preposicional "at the expense of".',
    usage: { scenario: 'Políticas de SLAs en Mesa de Ayuda', en: 'Closing tickets rapidly should not be done at the expense of customer satisfaction.', es: 'Cerrar tickets rápidamente no debe hacerse a expensas de la satisfacción del cliente.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec4-ex2-q1',
    sub: '4.4.4',
    num: 1,
    stem: 'According to the reading passage, why is it essential for support agents to prepare structured questions for customers beforehand?',
    correct: 'Because customers do not always supply all the necessary diagnostic information on their own.',
    distractors: [
      'Because customers are legally required to sign non-disclosure agreements.',
      'Because support agents are prohibited from consulting internal documentation.',
      'Because automated AI chatbots cannot understand spoken English.'
    ],
    why_correct: 'El texto enfatiza que los usuarios describen síntomas generales ("la web no anda") pero omiten detalles vitales como mensajes de error o pasos previos ("They don’t always supply all the information").',
    why_wrong_map: {
      'Because customers are legally required to sign non-disclosure agreements.': 'No es un requisito de NDAs generales.',
      'Because support agents are prohibited from consulting internal documentation.': 'Falso; los agentes deben consultar runbooks.',
      'Because automated AI chatbots cannot understand spoken English.': 'Distractor no tratado en el texto.'
    },
    tip: 'Fundamento de preguntas guiadas: Los clientes no aportan toda la información técnica espontáneamente.',
    topic: 'V03',
    objective: 'R2',
    human_rule: 'Hay que preparar preguntas estructuradas porque los clientes no siempre dan todos los datos de entrada.',
    trigger: 'important to prepare questions for customers because -> don’t always supply all the info',
    trap: 'Asumir que el cliente sabe exactamente qué datos necesita el soporte.',
    usage: { scenario: 'Triage de Tickets L1', en: 'We ask structured questions because customers rarely provide full diagnostic details initially.', es: 'Hacemos preguntas estructuradas porque los clientes rara vez proporcionan detalles de diagnóstico completos inicialmente.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec4-ex2-q2',
    sub: '4.4.4',
    num: 2,
    stem: 'If a customer reports that certain menus or configuration options are completely unavailable or greyed out, what might this indicate?',
    correct: 'They might need a different support tier, role assignment, or elevated permission level.',
    distractors: [
      'Their computer monitor has burned-out physical pixels.',
      'The entire cloud provider datacenter has suffered an outage.',
      'Their keyboard cable is improperly grounded.'
    ],
    why_correct: 'Las opciones deshabilitadas o ausentes suelen responder a políticas de control de acceso (RBAC) que requieren escalar a un nivel superior de permisos o soporte ("They might need a different support level / tier").',
    why_wrong_map: {
      'Their computer monitor has burned-out physical pixels.': 'Distractor de hardware absurdo.',
      'The entire cloud provider datacenter has suffered an outage.': 'Si el datacenter estuviera caído, la aplicación no cargaría en absoluto.',
      'Their keyboard cable is improperly grounded.': 'Distractor eléctrico no relacionado.'
    },
    tip: 'Diagnóstico de permisos: Opciones no disponibles suelen requerir otro nivel de soporte o permisos IAM.',
    topic: 'V03',
    objective: 'R2',
    human_rule: 'Si las opciones no le aparecen, probablemente necesite otro nivel de soporte o permisos.',
    trigger: 'options are not available to them -> might need a different support level',
    trap: 'Diagnosticar un fallo de software cuando en realidad es un tema de permisos de usuario.',
    usage: { scenario: 'Soporte y Gestión de Roles RBAC', en: 'If options are missing, the customer might need elevated role permissions.', es: 'Si faltan opciones, es posible que el cliente necesite permisos de rol elevados.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec4-ex2-q3',
    sub: '4.4.4',
    num: 3,
    stem: 'Why is discovering the exact timestamp when an issue occurred crucial for the support engineer?',
    correct: 'It helps the support agent to correlate the incident with backend server logs and trace anomalies.',
    distractors: [
      'It allows the agent to bill the customer for hourly overtime.',
      'It automatically formats the customer’s hard drive.',
      'It terminates all active SSL certificates immediately.'
    ],
    why_correct: 'Conocer la hora exacta permite filtrar los registros del servidor (logs SIEM, eventos de base de datos) para aislar la causa raíz con precisión.',
    why_wrong_map: {
      'It allows the agent to bill the customer for hourly overtime.': 'Distractor financiero.',
      'It automatically formats the customer’s hard drive.': 'Acción destructiva absurda.',
      'It terminates all active SSL certificates immediately.': 'Distractor de certificados.'
    },
    tip: 'Importancia del timestamp: Permite correlacionar el fallo con las marcas de tiempo en los logs del servidor.',
    topic: 'V03',
    objective: 'R3',
    human_rule: 'Saber el momento exacto permite encontrar la línea de error precisa en los logs del servidor.',
    trigger: 'Knowing the exact moment an issue occurs -> determine root causes from log timestamps',
    trap: 'Creer que la hora solo sirve para medir métricas de SLA de tiempo de respuesta.',
    usage: { scenario: 'Análisis de Logs SIEM', en: 'Knowing the exact moment the bug occurred lets us inspect matching server logs.', es: 'Conocer el momento exacto en que ocurrió el error nos permite inspeccionar los registros del servidor coincidentes.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec4-ex2-q4',
    sub: '4.4.4',
    num: 4,
    stem: 'What is a valid operational reason for a support agent to request remote desktop access to a customer\'s endpoint?',
    correct: 'It allows the agent to witness anomalous behaviors directly when the user struggles to explain them.',
    distractors: [
      'To secretly install cryptocurrency mining software on customer hardware.',
      'To bypass the company\'s mandatory two-factor authentication permanently.',
      'To replace physical RAM chips inside the user’s computer remotely.'
    ],
    why_correct: 'El acceso remoto permite ver directamente en pantalla el error que el cliente no sabe describir técnicamente, acelerando el diagnóstico.',
    why_wrong_map: {
      'To secretly install cryptocurrency mining software on customer hardware.': 'Actividad delictiva maliciosa.',
      'To bypass the company\'s mandatory two-factor authentication permanently.': 'Vulneración de seguridad grave.',
      'To replace physical RAM chips inside the user’s computer remotely.': 'Imposible cambiar hardware físico por software remoto.'
    },
    tip: 'Propósito de escritorio remoto: Observar de primera mano el comportamiento anómalo que el usuario no logra verbalizar.',
    topic: 'V03',
    objective: 'R4',
    human_rule: 'El acceso remoto permite ver el fallo en vivo cuando el cliente no sabe explicarlo con palabras técnicas.',
    trigger: 'agent might ask for remote access -> witness anomalous behaviors directly',
    trap: 'Asumir que el acceso remoto siempre se pide por comodidad del agente y no por necesidad diagnóstica.',
    usage: { scenario: 'Soporte Remoto Asistido', en: 'Remote desktop sessions help agents observe issues that users cannot easily describe.', es: 'Las sesiones de escritorio remoto ayudan a los agentes a observar problemas que los usuarios no pueden describir fácilmente.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec4-ex2-q5',
    sub: '4.4.4',
    num: 5,
    stem: 'Why might an enterprise customer legitimate refuse to grant remote desktop access to a support agent?',
    correct: 'Due to strict organizational security policies regarding data confidentiality and privacy.',
    distractors: [
      'Because remote desktop tools require continuous pedal-powered generators.',
      'Because operating systems become physically heavier when remote access is active.',
      'Because mouse cursors cannot move while connected across subnets.'
    ],
    why_correct: 'Las empresas manejan datos confidenciales (PII, secretos comerciales, registros financieros) y sus normativas InfoSec frecuentemente prohíben accesos externos no autorizados.',
    why_wrong_map: {
      'Because remote desktop tools require continuous pedal-powered generators.': 'Distractor absurdo.',
      'Because operating systems become physically heavier when remote access is active.': 'Físicamente absurdo.',
      'Because mouse cursors cannot move while connected across subnets.': 'Falso técnico.'
    },
    tip: 'Motivo de rechazo de acceso remoto: Políticas de privacidad, secreto profesional y cumplimiento GDPR/InfoSec.',
    topic: 'V03',
    objective: 'R4',
    human_rule: 'El cliente puede negarse al acceso remoto por políticas estrictas de privacidad y seguridad de sus datos.',
    trigger: 'Why might a customer refuse to grant remote access -> data confidentiality and privacy policies',
    trap: 'Interpretar la negativa del cliente como desconfianza personal hacia el agente en lugar de cumplimiento normativo.',
    usage: { scenario: 'Cumplimiento y Privacidad en Soporte', en: 'Clients may refuse remote access due to corporate compliance policies.', es: 'Los clientes pueden rechazar el acceso remoto debido a las políticas de cumplimiento corporativo.' }
  }),
  createQuestion({
    id: 'it1-mod4-sec4-ex2-q6',
    sub: '4.4.4',
    num: 6,
    stem: 'What core advice does the author give support engineers regarding the tone of their questions?',
    correct: 'It is important to be sensitive and tactful, because aggressive questioning damages customer satisfaction.',
    distractors: [
      'Agents should interrogate customers like criminal suspects to detect lies.',
      'Agents should speak as quickly as possible to reduce call handling times.',
      'Agents should use heavy jargon to intimidate users into hanging up.'
    ],
    why_correct: 'El texto concluye aconsejando tacto, empatía y sensibilidad: interrogar bruscamente al usuario genera frustración y destruye la satisfacción del cliente ("important to be sensitive, because aggressive questioning damages satisfaction").',
    why_wrong_map: {
      'Agents should interrogate customers like criminal suspects to detect lies.': 'Comportamiento hostil repudiado por el texto.',
      'Agents should speak as quickly as possible to reduce call handling times.': 'Degrada la comprensión y genera errores.',
      'Agents should use heavy jargon to intimidate users into hanging up.': 'Práctica inaceptable en atención al cliente.'
    },
    tip: 'Pilar de atención al cliente en TI: Empatía, sensibilidad y diplomacia al recopilar información técnica.',
    topic: 'V03',
    objective: 'R5',
    human_rule: 'Hay que ser comprensivo y diplomático al preguntar, porque un trato brusco arruina la relación con el cliente.',
    trigger: 'author’s advice when asking questions -> important to be sensitive, because aggressive questioning damages satisfaction',
    trap: 'Priorizar métricas de velocidad de llamada por encima del trato respetuoso.',
    usage: { scenario: 'Capacitación de Soporte al Cliente', en: 'Support agents must remain sensitive and polite, avoiding interrogative tones.', es: 'Los agentes de soporte deben ser sensibles y amables, evitando tonos inquisitivos.' }
  })
];

module.exports = { items_mod4 };
