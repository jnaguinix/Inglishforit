const { createQuestion } = require('./builder_helper.cjs');

const items_8_4 = [
  // =========================================================
  // 8.4.1 Passive Meaning with 'Need + Gerund' (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.4.1-q1',
    sub: '8.4.1',
    num: 1,
    stem: 'Transform the sentence using the passive gerund structure: "To avoid problems, we need to upgrade the system." -> "To avoid problems, the system __________."',
    correct: 'needs upgrading',
    distractors: ['needs upgrade', 'needs to upgrade', 'is needed upgrading'],
    why_correct: 'En inglés formal técnico, la estructura [sujeto inanimado + need + gerundio] tiene valor pasivo intrínseco: "the system needs upgrading" equivale exactamente a "the system needs to be upgraded".',
    why_wrong_map: {
      'needs upgrade': 'Agramatical; falta gerundio o infinitivo con to.',
      'needs to upgrade': 'Voz activa; el sistema no realiza la acción de actualizar a otros.',
      'is needed upgrading': 'Construcción redundante y agramatical.'
    },
    tip: 'Estructura pasiva con gerundio: [Cosa técnica + needs + verbo-ing] ("needs upgrading").',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'El sistema necesita ser actualizado = "the system needs upgrading".',
    trigger: 'To avoid problems, the system __________ -> needs upgrading',
    trap: 'Elegir "needs to upgrade" asignándole erróneamente un rol de agente activo al sistema.',
    usage: { scenario: 'Mantenimiento Preventivo de Servidores', en: 'To avoid problems, the system needs upgrading.', es: 'Para evitar problemas, el sistema necesita ser actualizado.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.1-q2',
    sub: '8.4.1',
    num: 2,
    stem: 'Transform the sentence into the passive gerund form: "We should have compiled the libraries in a certain way." -> "The libraries __________ in a certain way."',
    correct: 'need compiling',
    distractors: ['need to compile', 'needs compiling', 'need compile'],
    why_correct: 'El sujeto es plural ("The libraries"), por lo que concuerda en plural con "need compiling" (= need to be compiled).',
    why_wrong_map: {
      'need to compile': 'Voz activa; las librerías no compilan por sí mismas.',
      'needs compiling': 'Error de concordancia de número; "libraries" es plural y rechaza la -s.',
      'need compile': 'Agramatical; falta gerundio.'
    },
    tip: 'Concordancia plural: [The libraries (plural) + need compiling].',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'Las librerías necesitan compilarse de cierta manera: "need compiling".',
    trigger: 'The libraries __________ in a certain way -> need compiling',
    trap: 'Poner "needs compiling" olvidando que "libraries" está en plural.',
    usage: { scenario: 'Compilación y Enlazado C++/Rust', en: 'The libraries need compiling in a certain way.', es: 'Las bibliotecas necesitan compilarse de cierta manera.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.1-q3',
    sub: '8.4.1',
    num: 3,
    stem: 'Transform the sentence: "We need to test the software before we release it." -> "The software __________ before it is released."',
    correct: 'needs testing',
    distractors: ['needs test', 'need testing', 'is needed to test'],
    why_correct: '"The software" es un sustantivo incontable singular que rige tercera persona: "needs testing" (= needs to be tested).',
    why_wrong_map: {
      'needs test': 'Agramatical.',
      'need testing': 'Falta la concordancia singular en -s con software.',
      'is needed to test': 'Estructura forzada e incorrecta en esta transformación.'
    },
    tip: '"Software" es singular e incontable: [software + needs testing].',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'El software necesita ser probado antes de su lanzamiento: "needs testing".',
    trigger: 'The software __________ before it is released -> needs testing',
    trap: 'Tratar a "software" como plural y omitir la -s de "needs".',
    usage: { scenario: 'Pipeline de QA y Liberación', en: 'The software needs testing before it is released.', es: 'El software necesita ser probado antes de ser lanzado.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.1-q4',
    sub: '8.4.1',
    num: 4,
    stem: 'Transform the sentence: "To avoid login failures, we need to increase the connection pool size." -> "To avoid login failures, the connection pool size __________."',
    correct: 'needs increasing',
    distractors: ['needs increase', 'need increasing', 'needs to increase'],
    why_correct: 'El núcleo del sujeto es singular ("size"), concordando con "needs increasing" (= needs to be increased).',
    why_wrong_map: {
      'needs increase': 'Agramatical.',
      'need形式': 'Error de concordancia: "the size" es singular.',
      'needs to increase': 'Voz activa; el tamaño no incrementa por su propia voluntad, sino que es incrementado por el admin.'
    },
    tip: '[Sujeto singular ("size") + needs + verbo-ing] ("needs increasing").',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'El tamaño del connection pool necesita aumentarse: "needs increasing".',
    trigger: 'the connection pool size __________ -> needs increasing',
    trap: 'Elegir la forma activa "needs to increase".',
    usage: { scenario: 'Ajuste de Base de Datos PostgreSQL', en: 'To avoid login failures, the connection pool size needs increasing.', es: 'Para evitar fallos de inicio de sesión, el tamaño del pool de conexiones necesita ser aumentado.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.1-q5',
    sub: '8.4.1',
    num: 5,
    stem: 'Transform the sentence: "We need to add the missing information to the log." -> "The missing information __________ to the log."',
    correct: 'needs adding',
    distractors: ['needs add', 'need adding', 'needs to add'],
    why_correct: '"Information" es un sustantivo incontable singular: concuerda con "needs adding" (= needs to be added).',
    why_wrong_map: {
      'needs add': 'Agramatical.',
      'need adding': 'Error de concordancia: information en inglés siempre es singular.',
      'needs to add': 'Voz activa; la información no añade cosas al log.'
    },
    tip: '"Information" siempre es incontable singular en inglés: [information + needs adding].',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'La información faltante necesita ser agregada al registro: "needs adding".',
    trigger: 'The missing information __________ to the log -> needs adding',
    trap: 'Tratar "information" como plural por pensar en "las informaciones" en español.',
    usage: { scenario: 'Estructuración de Logs SIEM', en: 'The missing information needs adding to the log.', es: 'La información faltante necesita ser añadida al registro.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.1-q6',
    sub: '8.4.1',
    num: 6,
    stem: 'Transform the sentence into the past passive form: "Engineers needed to build test cases for new features." -> "Test cases __________ for the new features."',
    correct: 'needed building',
    distractors: ['needed build', 'needs building', 'needed to build'],
    why_correct: 'La oración original está en pasado ("needed"). La transformación pasiva con gerundio en pasado conserva el tiempo pretérito: "needed building" (= needed to be built).',
    why_wrong_map: {
      'needed build': 'Agramatical.',
      'needs building': 'Error de tiempo: cambia el pasado histórico ("needed") a presente ("needs").',
      'needed to build': 'Voz activa; los casos de prueba no construyen cosas.'
    },
    tip: 'Tiempo pasado con gerundio pasivo: [needed + verbo-ing] ("needed building").',
    topic: 'G01',
    objective: 'UE1',
    human_rule: 'Los casos de prueba necesitaban ser construidos: "needed building".',
    trigger: 'Test cases __________ for the new features -> needed building',
    trap: 'Cambiar el verbo al presente "needs" perdiendo el tiempo pasado del enunciado original.',
    usage: { scenario: 'Estrategia de Testing Automatizado', en: 'Test cases needed building for the new features.', es: 'Los casos de prueba necesitaban ser construidos para las nuevas funcionalidades.' }
  }),

  // =========================================================
  // 8.4.2 Workplace Idioms (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.4.2-q1',
    sub: '8.4.2',
    num: 1,
    stem: 'Complete the reassure idiom: "I should be able to fix that for you right away. __________ ."',
    correct: 'There’s nothing to it',
    distractors: ['It was a piece of cake', 'Did more harm than good', 'There’s no problem at all'],
    why_correct: 'El modismo oficial del currículo de Cisco para tranquilizar a alguien indicando que una tarea técnica es sumamente sencilla y rápida de realizar es "There’s nothing to it" (no tiene ningún misterio / es facilísimo).',
    why_wrong_map: {
      'It was a piece of cake': 'Está en pasado ("was"), mientras que la tarea aún no se ha hecho ("should be able to fix that right away").',
      'Did more harm than good': 'Expresa que algo causó un perjuicio o empeoró la situación, lo cual contradice el ofrecimiento.',
      'There’s no problem at all': 'Frase genérica, pero la expresión idiomática evaluada en el syllabus de Cisco es "There’s nothing to it".'
    },
    tip: 'Idiom oficial de Cisco para tareas fáciles: [There’s nothing to it] ("No tiene ciencia / es pan comido").',
    topic: 'G26',
    objective: 'UE4',
    human_rule: '"There’s nothing to it" = No tiene ningún misterio, se hace en un momento.',
    trigger: 'fix that for you right away. __________ -> There’s nothing to it',
    trap: 'Elegir opciones en pasado ("was") para una acción que apenas se va a iniciar.',
    usage: { scenario: 'Atención al Cliente en IT Helpdesk', en: 'I should be able to fix that for you right away. There’s nothing to it.', es: 'Debería poder arreglar eso por ti de inmediato. No tiene ningún misterio / no es nada del otro mundo.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.2-q2',
    sub: '8.4.2',
    num: 2,
    stem: 'Complete the postmortem sentence: "In the end, the configuration changes __________ . We wasted a lot of time."',
    correct: 'did more harm than good',
    distractors: ['made more bad than good', 'there was nothing to it', 'did harm more than good'],
    why_correct: 'El modismo estándar para señalar que una intervención empeoró la situación en lugar de mejorarla es [did more harm than good] (hizo más daño que bien).',
    why_wrong_map: {
      'made more bad than good': 'Traducción literal agramatical; en inglés el idiom utiliza el verbo "do" y el sustantivo "harm".',
      'there was nothing to it': 'Contradiría el hecho de que se perdió mucho tiempo y salió mal ("We wasted a lot of time").',
      'did harm more than good': 'Altera el orden fijado del modismo idiomático ("more harm than good").'
    },
    tip: 'Idiom oficial de incidencias: [did more harm than good] (hizo más mal que bien / fue contraproducente).',
    topic: 'G26',
    objective: 'UE4',
    human_rule: 'Los cambios empeoraron las cosas: "did more harm than good".',
    trigger: 'configuration changes __________ . We wasted a lot of time -> did more harm than good',
    trap: 'Usar "made" en vez de "do" (colocación fija en inglés: "do harm", nunca "make harm").',
    usage: { scenario: 'Postmortem de Incidencia de Red', en: 'In the end, the configuration changes did more harm than good. We wasted a lot of time.', es: 'Al final, los cambios de configuración hicieron más daño que bien. Perdimos mucho tiempo.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.2-q3',
    sub: '8.4.2',
    num: 3,
    stem: 'Complete the feedback: "I was very pleased with the service I received. They solved the issue in no time. __________ ."',
    correct: 'There was nothing to it',
    distractors: ['There was no harm to it', 'Did more harm than good', 'It made harm'],
    why_correct: 'Como el relato describe una experiencia de servicio ya concluida con éxito en el pasado ("I was very pleased", "solved"), la fórmula va en tiempo pasado: "There was nothing to it".',
    why_wrong_map: {
      'There was no harm to it': 'Frase agramatical sin sentido idiomático.',
      'Did more harm than good': 'Significaría que el servicio fue perjudicial, contradiciendo "very pleased".',
      'It made harm': 'Expresión incorrecta en inglés.'
    },
    tip: 'Versión en pasado de "There\'s nothing to it": [There was nothing to it].',
    topic: 'G26',
    objective: 'UE4',
    human_rule: 'Resolvieron el problema en un segundo, no fue nada: "There was nothing to it".',
    trigger: 'solved the issue in no time. __________ -> There was nothing to it',
    trap: 'Poner la forma en presente "There is" ignorando que la narración está en pasado.',
    usage: { scenario: 'Encuesta de Satisfacción CSAT', en: 'I was very pleased with the service. They solved the issue in no time. There was nothing to it.', es: 'Quedé muy satisfecho con el servicio. Resolvieron el problema en poco tiempo. No tuvo ninguna complicación.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.2-q4',
    sub: '8.4.2',
    num: 4,
    stem: 'Complete the evaluation: "I wasn\'t convinced that they knew what they were doing. As the problem now seems worse, I think they probably __________ ."',
    correct: 'did more harm than good',
    distractors: ['there was nothing to it', 'made more harm than good', 'did harm'],
    why_correct: 'El síntoma de que el problema ahora está peor confirma que su intervención fue perjudicial: "did more harm than good".',
    why_wrong_map: {
      'there was nothing to it': 'Contradiría el hecho de que el problema empeoró.',
      'made more harm than good': 'Error léxico; en inglés se dice "do harm", no "make harm".',
      'did harm': 'Incompleto; no utiliza la colocación idiomática comparativa requerida por Cisco.'
    },
    tip: 'Colocación fija: siempre "do harm" (did more harm than good), jamás "make harm".',
    topic: 'G26',
    objective: 'UE4',
    human_rule: 'Creo que probablemente hicieron más daño que bien: "did more harm than good".',
    trigger: 'the problem now seems worse ... probably __________ -> did more harm than good',
    trap: 'Seleccionar "made more harm" por calco de "hacer daño".',
    usage: { scenario: 'Escalación de Soporte a Nivel 3', en: 'As the problem now seems worse, I think they probably did more harm than good.', es: 'Como el problema ahora parece peor, creo que probablemente hicieron más daño que bien.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.2-q5',
    sub: '8.4.2',
    num: 5,
    stem: 'Complete the reflection: "In the end __________ . I expected it to be a lot more complicated."',
    correct: 'there was nothing to it',
    distractors: ['it did more harm than good', 'there was no thing to it', 'it had nothing to it'],
    why_correct: 'El hablante esperaba que fuera muy complejo, pero en el desenlace pasado comprobó que no tenía ninguna complicación: "there was nothing to it".',
    why_wrong_map: {
      'it did more harm than good': 'Incoherente con la grata sorpresa de que no fuera tan complicado.',
      'there was no thing to it': 'Ortografía y gramática incorrectas para el pronombre "nothing".',
      'it had nothing to it': 'Construcción no idiomática.'
    },
    tip: 'Relieve de alivio técnico en pasado: [there was nothing to it] (al final fue facilísimo).',
    topic: 'G26',
    objective: 'UE4',
    human_rule: 'Al final no tuvo ningún misterio, fue más fácil de lo esperado: "there was nothing to it".',
    trigger: 'In the end __________ . I expected it to be a lot more complicated -> there was nothing to it',
    trap: 'Confundir con opciones no idiomáticas como "it had nothing".',
    usage: { scenario: 'Migración de Base de Datos Exitosa', en: 'In the end there was nothing to it. I expected it to be a lot more complicated.', es: 'Al final no tuvo ninguna complicación. Esperaba que fuera mucho más complicado.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.2-q6',
    sub: '8.4.2',
    num: 6,
    stem: 'Complete the observation: "The way they were speaking to that customer has definitely __________ ."',
    correct: 'done more harm than good',
    distractors: ['made more harm than good', 'there was nothing to it', 'done harm more than good'],
    why_correct: 'Con el auxiliar en Present Perfect ("has definitely..."), la forma requerida del participio pasado de "do" es "done": "has definitely done more harm than good".',
    why_wrong_map: {
      'made more harm than good': 'Harm se combina estrictamente con do (done), no con make (made).',
      'there was nothing to it': 'Agramatical tras el auxiliar "has definitely".',
      'done harm more than good': 'Altera el orden natural del idiom.'
    },
    tip: 'Present Perfect del idiom: [has/have definitely done more harm than good].',
    topic: 'G26',
    objective: 'UE4',
    human_rule: 'La forma en que le hablaron al cliente ha hecho más daño que bien: "done more harm than good".',
    trigger: 'has definitely __________ -> done more harm than good',
    trap: 'Poner "made more harm" por el falso amigo de "hacer daño".',
    usage: { scenario: 'Atención al Cliente y Desescalación de Incidentes', en: 'The way they were speaking to that customer has definitely done more harm than good.', es: 'La forma en que le hablaban a ese cliente definitivamente ha hecho más daño que bien.' }
  }),

  // =========================================================
  // 8.4.3 Suggestions & Advice (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.4.3-q1',
    sub: '8.4.3',
    num: 1,
    stem: 'Complete the collaborative suggestion: "__________ us about your experience of data classification?"',
    correct: 'How about telling',
    distractors: ['Shall you tell', 'Shouldn\'t you tell', 'How about to tell'],
    why_correct: '"How about" es una fórmula de sugerencia que rige obligatoriamente gerundio (-ing): "How about telling us...?".',
    why_wrong_map: {
      'Shall you tell': 'Shall en preguntas de propuesta solo se usa en primera persona ("Shall I / Shall we"), nunca con you.',
      'Shouldn\'t you tell': 'Suena acusatorio o inquisitivo, no a una invitación colaborativa abierta.',
      'How about to tell': 'How about nunca se sigue de infinitivo con to.'
    },
    tip: 'Fórmula de sugerencia: [How about + verbo-ing?]. Ejemplo: "How about telling us...?".',
    topic: 'G08',
    objective: 'UE2',
    human_rule: '¿Qué tal si nos cuentas tu experiencia?: "How about telling us...?".',
    trigger: '__________ us about your experience -> How about telling',
    trap: 'Poner infinitivo "to tell" tras "How about".',
    usage: { scenario: 'Retrospectiva de Clasificación de Datos', en: 'How about telling us about your experience of data classification?', es: '¿Qué tal si nos cuentas sobre tu experiencia en clasificación de datos?' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.3-q2',
    sub: '8.4.3',
    num: 2,
    stem: 'Complete the suggestion about scheduling: "__________ we talk about the data classification later on today?"',
    correct: 'Shall',
    distractors: ['How about', 'Shouldn\'t', 'Would'],
    why_correct: '"Shall we + infinitivo base" es la estructura clásica y formal en inglés para sugerir o proponer una acción conjunta entre colegas ("Shall we talk...?").',
    why_wrong_map: {
      'How about': 'Requeriría gerundio (-ing) ("How about talking").',
      'Shouldn\'t': 'Connotaría reproche ("¿no deberíamos hablar?"), en lugar de una propuesta neutral.',
      'Would': 'Exigiría estructura condicional ("Would we talk" no es fórmula de sugerencia).'
    },
    tip: 'Propuesta formal conjunta: [Shall we + verbo base sin to?].',
    topic: 'G08',
    objective: 'UE2',
    human_rule: '¿Hablamos sobre la clasificación de datos más tarde hoy?: "Shall we talk...?".',
    trigger: '__________ we talk about the data classification later -> Shall',
    trap: 'Elegir "How about" cuando el verbo está en infinitivo base ("talk") en lugar de gerundio ("talking").',
    usage: { scenario: 'Coordinación de Reunión de Seguridad', en: 'Shall we talk about the data classification later on today?', es: '¿Hablamos de la clasificación de datos más tarde hoy?' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.3-q3',
    sub: '8.4.3',
    num: 3,
    stem: 'Complete the persuasive suggestion: "__________ we be giving more time to tightening personal data security?"',
    correct: 'Shouldn’t',
    distractors: ['Shall', 'How about', 'Mustn’t'],
    why_correct: '"Shouldn’t we be giving...?" es una pregunta retórica persuasiva utilizada en reuniones para sugerir que el equipo debería prestar más atención a un asunto crítico.',
    why_wrong_map: {
      'Shall': 'Shall se usa para ofertas de servicio o decisiones conjuntas, no para sugerencias reflexivas persuasivas en continuo.',
      'How about': 'Requeriría sujeto pospuesto o gerundio directo sin "we be".',
      'Mustn’t': 'Mustn\'t we no se usa para sugerencias constructivas en debates técnicos.'
    },
    tip: 'Sugerencia persuasiva de reflexión en equipo: [Shouldn’t we be + verbo-ing?].',
    topic: 'G08',
    objective: 'UE5',
    human_rule: '¿No deberíamos estar dedicándole más tiempo a la seguridad?: "Shouldn’t we be giving...?".',
    trigger: '__________ we be giving more time to tightening -> Shouldn’t',
    trap: 'Confundir una pregunta de reproche con una sugerencia persuasiva con "Shouldn\'t".',
    usage: { scenario: 'Debate de Prioridades de Ciberseguridad', en: 'Shouldn’t we be giving more time to tightening personal data security?', es: '¿No deberíamos estar dedicando más tiempo a reforzar la seguridad de los datos personales?' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.3-q4',
    sub: '8.4.3',
    num: 4,
    stem: 'Complete the proposal: "__________ discussing the issue further?"',
    correct: 'How about',
    distractors: ['Shall we', 'Shouldn’t we', 'Why don’t'],
    why_correct: 'El verbo que sigue al espacio está en gerundio ("discussing"). La única fórmula de sugerencia que rige directamente gerundio es "How about".',
    why_wrong_map: {
      'Shall we': 'Rige infinitivo base sin to ("Shall we discuss"), nunca gerundio.',
      'Shouldn’t we': 'Rige infinitivo base ("Shouldn’t we discuss").',
      'Why don’t': 'Exige sujeto e infinitivo base ("Why don’t we discuss").'
    },
    tip: 'Delante de un gerundio directo ("discussing...?") -> SIEMPRE: "How about".',
    topic: 'G08',
    objective: 'UE2',
    human_rule: '¿Qué tal si discutimos el asunto más a fondo?: "How about discussing...?".',
    trigger: '__________ discussing the issue further? -> How about',
    trap: 'Poner "Shall we" ignorando el gerundio "-ing".',
    usage: { scenario: 'Facilitación de Reunión Técnica', en: 'How about discussing the issue further?', es: '¿Qué tal si discutimos el tema más a fondo?' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.3-q5',
    sub: '8.4.3',
    num: 5,
    stem: 'Complete the proposal: "__________ the Critical Processes Management Procedure?"',
    correct: 'How about',
    distractors: ['Shall', 'Shouldn’t', 'Would'],
    why_correct: '"How about" puede ir seguido directamente de un sintagma nominal ("How about + sustantivo?") para proponer un tema de discusión: "How about the Critical Processes Management Procedure?".',
    why_wrong_map: {
      'Shall': 'Exige verbo principal ("Shall we review...?"), no puede regir directamente un sustantivo.',
      'Shouldn’t': 'Exige sujeto y verbo ("Shouldn’t we review...?").',
      'Would': 'Exige verbo y sujeto ("Would you like...?").'
    },
    tip: 'Sugerencia introduciendo directamente un tema/sustantivo: [How about + sustantivo?].',
    topic: 'G08',
    objective: 'UE2',
    human_rule: '¿Qué tal el procedimiento de procesos críticos?: "How about the procedure?".',
    trigger: '__________ the Critical Processes Management Procedure? -> How about',
    trap: 'Intentar usar un modal que exige verbo obligatorio.',
    usage: { scenario: 'Definición de Agenda de Auditoría', en: 'How about the Critical Processes Management Procedure?', es: '¿Qué tal el Procedimiento de Gestión de Procesos Críticos?' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.3-q6',
    sub: '8.4.3',
    num: 6,
    stem: 'Complete the collaborative suggestion: "__________ consider a different approach?"',
    correct: 'Shouldn’t we',
    distractors: ['How about', 'Shall to', 'Why not we'],
    why_correct: 'El verbo está en infinitivo base ("consider"). La estructura persuasiva formal para sugerir replantear el enfoque es "Shouldn’t we consider...?".',
    why_wrong_map: {
      'How about': 'Exigiría gerundio ("How about considering").',
      'Shall to': 'Shall jamás lleva partícula to.',
      'Why not we': 'Agramatical; en inglés se dice "Why don\'t we" o "Why not consider".'
    },
    tip: 'Sugerencia con verbo base: [Shouldn’t we + infinitivo?].',
    topic: 'G08',
    objective: 'UE5',
    human_rule: '¿No deberíamos considerar un enfoque diferente?: "Shouldn’t we consider...?".',
    trigger: '__________ consider a different approach? -> Shouldn’t we',
    trap: 'Elegir "Why not we" por calco erróneo de "¿por qué no nosotros?".',
    usage: { scenario: 'Diseño de Solución de Arquitectura', en: 'Shouldn’t we consider a different approach?', es: '¿No deberíamos considerar un enfoque diferente?' }
  }),

  // =========================================================
  // 8.4.4 Polite Requests with 'Would Like' (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.4.4-q1',
    sub: '8.4.4',
    num: 1,
    stem: 'Rewrite into a polite professional request: "I want you to investigate further." -> "__________ to investigate further."',
    correct: 'I\'d like you',
    distractors: ['I\'d like that you', 'I want that you', 'I would that you'],
    why_correct: 'En inglés, el verbo de deseo cortés rige la estructura de objeto + infinitivo: [I\'d like + objeto ("you") + to-inf]. La construcción romance *"I\'d like that you"* es agramatical en inglés.',
    why_wrong_map: {
      'I\'d like that you': 'Calco erróneo del español "me gustaría que tú"; en inglés no se usa "that you" con like.',
      'I want that you': 'Calco directo del español "quiero que tú", agramatical en inglés.',
      'I would that you': 'Forma arcaica agramatical en inglés moderno.'
    },
    tip: 'Regla de oro: [I\'d like you to + verbo]. NUNCA "I\'d like that you".',
    topic: 'G29',
    objective: 'UE2',
    human_rule: 'Me gustaría que investigues más a fondo = "I\'d like you to investigate further".',
    trigger: 'I want you to investigate further -> I\'d like you to investigate further',
    trap: 'Poner "that you" por traducción literal de "que tú investigues".',
    usage: { scenario: 'Instrucción a Ingeniero Junior', en: 'I’d like you to investigate further.', es: 'Me gustaría que investigaras más a fondo.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.4-q2',
    sub: '8.4.4',
    num: 2,
    stem: 'Rewrite into a polite professional inquiry: "I want to know why we still haven\'t addressed the system vulnerabilities." -> "__________ why we still haven\'t addressed the system vulnerabilities."',
    correct: 'I\'d like to know',
    distractors: ['I\'d like knowing', 'I would to know', 'I\'d like that I know'],
    why_correct: 'La fórmula cortés para expresar el deseo propio es [I\'d like + to-inf]: "I\'d like to know why...".',
    why_wrong_map: {
      'I\'d like knowing': 'Would like exige infinitivo con to, no gerundio.',
      'I would to know': 'Agramatical; falta el verbo léxico like.',
      'I\'d like that I know': 'Estructura agramatical.'
    },
    tip: 'Deseo cortés en primera persona: [I\'d like to know] (me gustaría saber).',
    topic: 'G29',
    objective: 'UE2',
    human_rule: 'Me gustaría saber por qué aún no hemos abordado las vulnerabilidades: "I\'d like to know".',
    trigger: 'I want to know why -> I\'d like to know why',
    trap: 'Poner gerundio tras "would like" confundiéndolo con el verbo simple "like".',
    usage: { scenario: 'Comité de Seguridad y Riesgo', en: 'I’d like to know why we still haven’t addressed the system vulnerabilities.', es: 'Me gustaría saber por qué todavía no hemos abordado las vulnerabilidades del sistema.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.4-q3',
    sub: '8.4.4',
    num: 3,
    stem: 'Rewrite the instruction with diplomatic politeness: "It seems that the antivirus software installation was overlooked. I want you to look into this issue, please." -> "It seems that the antivirus software installation was overlooked. __________ to look into this issue, please."',
    correct: 'I\'d like you',
    distractors: ['I\'d like that you', 'I like you', 'I would like for you'],
    why_correct: 'Sustituye "I want you to" por la fórmula diplomática estándar [I\'d like you to + infinitivo]: "I\'d like you to look into this issue, please".',
    why_wrong_map: {
      'I\'d like that you': 'Agramatical en inglés.',
      'I like you': 'Significa "me caes bien", completamente fuera de contexto para una instrucción.',
      'I would like for you': 'Construcción dialectal no recomendada en exámenes formales de certificación B2.'
    },
    tip: 'Petición cortés de acción a un colega: [I\'d like you to look into...].',
    topic: 'G29',
    objective: 'UE2',
    human_rule: 'Me gustaría que revisaras este asunto, por favor: "I\'d like you to look into...".',
    trigger: 'I want you to look into this issue -> I\'d like you to look into this issue',
    trap: 'Elegir "I like you" sin la contracción \'d (would).',
    usage: { scenario: 'Gestión de Incidencias de Seguridad', en: 'It seems that the antivirus software installation was overlooked. I’d like you to look into this issue, please.', es: 'Parece que se pasó por alto la instalación del software antivirus. Me gustaría que investigaras este asunto, por favor.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.4-q4',
    sub: '8.4.4',
    num: 4,
    stem: 'Rewrite into an executive directive: "It appears that the antivirus software hasn\'t been installed. I want you to deal with this as a top priority." -> "It appears that the antivirus software hasn\'t been installed. __________ to deal with this as a top priority."',
    correct: 'I\'d like you',
    distractors: ['I would like that you', 'I want that you', 'I\'d like you that you'],
    why_correct: 'La estructura obligatoria es [I\'d like you to deal with this...].',
    why_wrong_map: {
      'I would like that you': 'Calco del español "me gustaría que tú", agramatical.',
      'I want that you': 'Agramatical en inglés.',
      'I\'d like you that you': 'Construcción redundante y agramatical.'
    },
    tip: 'Patrón estricto: [I\'d like you to + verbo base].',
    topic: 'G29',
    objective: 'UE2',
    human_rule: 'Me gustaría que te encargues de esto como máxima prioridad: "I\'d like you to deal with this".',
    trigger: 'I want you to deal with this as a top priority -> I\'d like you to deal with this',
    trap: 'Poner "that you" por influencia de la gramática del español.',
    usage: { scenario: 'Priorización de Tarea Crítica', en: 'It appears that the antivirus software hasn’t been installed. I’d like you to deal with this as a top priority.', es: 'Parece que el software antivirus no ha sido instalado. Me gustaría que te ocuparas de esto como una máxima prioridad.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.4-q5',
    sub: '8.4.4',
    num: 5,
    stem: 'Rewrite the institutional intention: "The company wants to update the password policy." -> "The company __________ to update the password policy."',
    correct: 'would like',
    distractors: ['would likes', 'is liking', 'would like to that'],
    why_correct: 'Para suavizar la postura de la organización, "wants" se sustituye formalmente por "would like": "The company would like to update the password policy".',
    why_wrong_map: {
      'would likes': 'El modal auxiliar "would" va seguido de la forma base del verbo; los verbos tras modales jamás llevan -s de tercera persona.',
      'is liking': 'Like es un verbo de estado, no se usa en tiempos continuos en este contexto formal.',
      'would like to that': 'Agramatical.'
    },
    tip: 'Tras would, el verbo va en infinitivo base: [The company would like to update]. ¡Sin "-s"!',
    topic: 'G29',
    objective: 'UE2',
    human_rule: 'A la empresa le gustaría actualizar la política de contraseñas: "would like".',
    trigger: 'The company wants to update -> The company would like to update',
    trap: 'Poner "would likes" creyendo erróneamente que "The company" exige -s tras would.',
    usage: { scenario: 'Comunicado Oficial de Políticas InfoSec', en: 'The company would like to update the password policy.', es: 'A la empresa le gustaría actualizar la política de contraseñas.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.4-q6',
    sub: '8.4.4',
    num: 6,
    stem: 'Rewrite the policy reminder politely: "I want to remind you of the importance of following the clean desk policy." -> "__________ to remind you of the importance of following the clean desk policy."',
    correct: 'I\'d like',
    distractors: ['I like', 'I would to like', 'I\'d liking'],
    why_correct: '"I\'d like to remind you..." suaviza un recordatorio de seguridad para que suene profesional y cortés en lugar de punitivo.',
    why_wrong_map: {
      'I like': 'Indicaría gusto personal o afición habitual ("me gusta recordarte"), lo cual es absurdo.',
      'I would to like': 'Agramatical.',
      'I\'d liking': 'Agramatical.'
    },
    tip: 'Fórmula de cortesía para avisos y recordatorios: [I\'d like to remind you...].',
    topic: 'G29',
    objective: 'UE2',
    human_rule: 'Me gustaría recordarles la importancia de la política de escritorio limpio: "I\'d like to remind you".',
    trigger: 'I want to remind you -> I\'d like to remind you',
    trap: 'Usar "I like" sin el condicional would (\'d).',
    usage: { scenario: 'Cumplimiento de Seguridad Física (Clean Desk Policy)', en: 'I’d like to remind you of the importance of following the clean desk policy.', es: 'Me gustaría recordarte la importancia de seguir la política de escritorio limpio.' }
  }),

  // =========================================================
  // 8.4.5 Hedging & Expressions of Uncertainty (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.4.5-q1',
    sub: '8.4.5',
    num: 1,
    stem: 'Unscramble the hedging phrase: (knowledge, best, To, the, my, of) "__________ all of the security tests have been carried out."',
    correct: 'To the best of my knowledge',
    distractors: ['To my best knowledge of', 'According to my best knowledge', 'For the best of my knowledge'],
    why_correct: 'La locución fija idiomática en inglés para expresar certeza cautelosa (hedging) es exactamente "To the best of my knowledge" (que yo sepa / según mi leal saber y entender).',
    why_wrong_map: {
      'To my best knowledge of': 'Altera el orden de la locución fija.',
      'According to my best knowledge': 'Uso incorrecto de "according to" con "knowledge" (according to se usa con terceras personas o fuentes documentales, no con el propio conocimiento).',
      'For the best of my knowledge': 'Preposición inicial errónea (la locución canónica exige "To").'
    },
    tip: 'Locución fija de atenuación: [To the best of my knowledge] ("Hasta donde yo sé / que yo sepa").',
    topic: 'G29',
    objective: 'UE5',
    human_rule: '"To the best of my knowledge" = Hasta donde tengo conocimiento.',
    trigger: '(knowledge, best, To, the, my, of) -> To the best of my knowledge',
    trap: 'Decir *"According to my knowledge"*, error muy frecuente en hablantes hispanos.',
    usage: { scenario: 'Auditoría y Declaración de Cumplimiento', en: 'To the best of my knowledge, all of the security tests have been carried out.', es: 'Que yo sepa / Hasta donde sé, se han llevado a cabo todas las pruebas de seguridad.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.5-q2',
    sub: '8.4.5',
    num: 2,
    stem: 'Unscramble the expression of awareness: (far, I, as, As, aware, am) "__________ , the information was encrypted before being sent."',
    correct: 'As far as I am aware',
    distractors: ['As far as I aware am', 'So far as I am aware', 'As far as I have aware'],
    why_correct: 'La expresión fija estándar para matizar una afirmación de seguridad es "As far as I am aware" (por lo que sé / hasta donde tengo conocimiento).',
    why_wrong_map: {
      'As far as I aware am': 'Orden de palabras invertido y agramatical.',
      'So far as I am aware': 'Aunque se usa en algunos dialectos, la forma oficial estándar de Cisco es "As far as I am aware".',
      'As far as I have aware': 'Aware es un adjetivo y se construye con el verbo to be ("am aware"), nunca con have.'
    },
    tip: 'Fórmula de cautela: [As far as I am aware] ("Por lo que tengo entendido").',
    topic: 'G29',
    objective: 'UE5',
    human_rule: '"As far as I am aware" = Por lo que sé / según tengo entendido.',
    trigger: '(far, I, as, As, aware, am) -> As far as I am aware',
    trap: 'Usar "have aware" en lugar de "am aware".',
    usage: { scenario: 'Reporte de Fuga de Datos', en: 'As far as I am aware, the information was encrypted before being sent.', es: 'Por lo que yo sé, la información estaba cifrada antes de ser enviada.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.5-q3',
    sub: '8.4.5',
    num: 3,
    stem: 'Unscramble the professional doubt expression: (doubts, have, some, I) "__________ over whether everything was fully compliant."',
    correct: 'I have some doubts',
    distractors: ['I am having some doubts', 'I have doubts some', 'Some doubts have I'],
    why_correct: 'El orden sintáctico directo de la locución afirmativa en inglés es sujeto + verbo + cuantificador + sustantivo: "I have some doubts over whether...".',
    why_wrong_map: {
      'I am having some doubts': 'Have en el sentido de posesión o estado mental no suele utilizarse en forma continua en este registro formal.',
      'I have doubts some': 'El determinante "some" debe preceder al sustantivo "doubts".',
      'Some doubts have I': 'Inversión poética arcaica no permitida en comunicación profesional técnica.'
    },
    tip: 'Fórmula diplomática de escepticismo: [I have some doubts over whether...].',
    topic: 'G29',
    objective: 'UE5',
    human_rule: '"I have some doubts" = Tengo algunas dudas sobre si...',
    trigger: '(doubts, have, some, I) -> I have some doubts',
    trap: 'Colocar el cuantificador después del sustantivo ("doubts some").',
    usage: { scenario: 'Revisión de Cumplimiento Regulatorio', en: 'I have some doubts over whether everything was fully compliant.', es: 'Tengo algunas dudas sobre si todo cumplía plenamente con la normativa.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.5-q4',
    sub: '8.4.5',
    num: 4,
    stem: 'Unscramble the cautious statement: (sure, not, I, absolutely, am) "__________ , but I believe everything went smoothly with the audit."',
    correct: 'I am not absolutely sure',
    distractors: ['I am absolutely not sure', 'I not am absolutely sure', 'Not am I absolutely sure'],
    why_correct: 'El orden natural y estándar en inglés formal para matizar certeza es [Sujeto + be + not + adverbio + adjetivo]: "I am not absolutely sure" (no estoy completamente seguro).',
    why_wrong_map: {
      'I am absolutely not sure': 'Significaría que está "absolutamente seguro de que no", lo cual es un rechazo tajante que contradice la cláusula siguiente ("but I believe everything went smoothly").',
      'I not am absolutely sure': 'Colocación agramatical de la partícula negativa antes del verbo to be.',
      'Not am I absolutely sure': 'Inversión agramatical.'
    },
    tip: 'Hedging de certeza parcial: [I am not absolutely sure, but...].',
    topic: 'G29',
    objective: 'UE5',
    human_rule: '"I am not absolutely sure" = No estoy totalmente seguro, pero creo que...',
    trigger: '(sure, not, I, absolutely, am) -> I am not absolutely sure',
    trap: 'Confundir "not absolutely sure" (duda prudente) con "absolutely not sure" (certeza negativa absoluta).',
    usage: { scenario: 'Resumen Ejecutivo de Auditoría', en: 'I am not absolutely sure, but I believe everything went smoothly with the audit.', es: 'No estoy absolutamente seguro, pero creo que todo transcurrió sin problemas en la auditoría.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.5-q5',
    sub: '8.4.5',
    num: 5,
    stem: 'Complete the diplomatic disagreement: "He says that everything was fully compliant, but __________ ."',
    correct: 'I\'m afraid that doesn\'t sound right to me',
    distractors: ['I\'m afraid that doesn\'t sound right for me', 'I fear that doesn\'t sound to me right', 'I\'m afraid to me that doesn\'t sound right'],
    why_correct: 'La locución diplomática estándar para manifestar desacuerdo respetuoso es "I\'m afraid that doesn\'t sound right to me" (me temo que eso no me cuadra / no me suena correcto). En inglés, sonar bien/mal a alguien se construye con la preposición "to me".',
    why_wrong_map: {
      'I\'m afraid that doesn\'t sound right for me': 'Error de preposición: con el verbo sound se usa "to me", no "for me".',
      'I fear that doesn\'t sound to me right': '"I fear" suena arcaico o dramático y altera el orden de colocación.',
      'I\'m afraid to me that doesn\'t sound right': 'Posición antinatural de "to me".'
    },
    tip: 'Desacuerdo profesional diplomático: [I\'m afraid that doesn\'t sound right to me]. Preposición: "sound right TO me".',
    topic: 'G29',
    objective: 'UE5',
    human_rule: '"I\'m afraid that doesn\'t sound right to me" = Me temo que eso no me cuadra.',
    trigger: 'everything was fully compliant, but __________ -> I\'m afraid that doesn\'t sound right to me',
    trap: 'Usar "for me" en lugar de "to me" con el verbo sound.',
    usage: { scenario: 'Comité de Control de Calidad', en: 'He says that everything was fully compliant, but I’m afraid that doesn’t sound right to me.', es: 'Dice que todo cumplía plenamente, pero me temo que eso no me suena correcto a mí.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.4.5-q6',
    sub: '8.4.5',
    num: 6,
    stem: 'Complete the polite reservation: "To be honest, __________ ."',
    correct: 'I’m not entirely certain that’s true',
    distractors: ['I’m entirely not certain that’s true', 'I’m not certain entirely that’s true', 'not entirely I am certain that’s true'],
    why_correct: 'La colocación correcta del adverbio de grado "entirely" con negación es [be not + entirely + adjetivo]: "I’m not entirely certain that’s true" (no estoy del todo seguro de que eso sea cierto).',
    why_wrong_map: {
      'I’m entirely not certain that’s true': 'Orden de negación antinatural en inglés estándar.',
      'I’m not certain entirely that’s true': 'El adverbio de grado debe colocarse delante del adjetivo al que califica ("entirely certain").',
      'not entirely I am certain that’s true': 'Construcción agramatical.'
    },
    tip: 'Atenuación con adverbio de grado: [not entirely certain that...] ("no del todo seguro de que...").',
    topic: 'G29',
    objective: 'UE5',
    human_rule: '"I\'m not entirely certain that\'s true" = No estoy del todo seguro de que eso sea verdad.',
    trigger: 'To be honest, __________ -> I’m not entirely certain that’s true',
    trap: 'Colocar el adverbio "entirely" después de "certain".',
    usage: { scenario: 'Discusión de Arquitectura de Sistemas', en: 'To be honest, I’m not entirely certain that’s true.', es: 'Para ser honesto, no estoy del todo seguro de que eso sea verdad.' }
  })
];

module.exports = { items_8_4 };
