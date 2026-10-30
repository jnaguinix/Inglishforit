const { createQuestion } = require('./builder_helper.cjs');

const items_8_3 = [
  // =========================================================
  // 8.3.1 Comparative Adverbs (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.3.1-q1',
    sub: '8.3.1',
    num: 1,
    stem: 'Complete the sentence: "I wasn’t expecting it to be so difficult. I really thought disabling the hardware keys could be done __________."',
    correct: 'more easily',
    distractors: ['easier', 'most easily', 'more easier'],
    why_correct: 'El verbo pasivo "could be done" debe ser modificado por un adverbio ("easily"). El comparativo de un adverbio terminado en -ly se forma con "more": "more easily".',
    why_wrong_map: {
      'easier': 'Es un adjetivo comparativo, no un adverbio; modificaría a un sustantivo, no al verbo "done".',
      'most easily': 'Superlativo; no expresa una comparación de dificultad relativa frente a lo esperado.',
      'more easier': 'Doble comparativo agramatical en inglés.'
    },
    tip: 'Adverbios en -ly (easily, quickly, seriously): forman el comparativo con "more" ([more + adverbio]).',
    topic: 'G20',
    objective: 'UE1',
    human_rule: 'Modificar cómo se hace una acción: "done more easily" (hecho más fácilmente).',
    trigger: 'could be done __________ -> more easily',
    trap: 'Usar el adjetivo "easier" en lugar del adverbio "more easily" tras el verbo "done".',
    usage: { scenario: 'Mantenimiento de Servidores Físicos', en: 'I really thought disabling the hardware keys could be done more easily.', es: 'Realmente pensé que deshabilitar las llaves de hardware podría hacerse más fácilmente.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.1-q2',
    sub: '8.3.1',
    num: 2,
    stem: 'Complete the wish: "I wish I’d thought of this method __________ . It would’ve saved a lot of time."',
    correct: 'sooner',
    distractors: ['soonest', 'more soon', 'more sooner'],
    why_correct: '"Soon" es un adverbio corto de una sola sílaba cuyo comparativo regular se forma añadiendo la terminación -er: "sooner" (antes / más temprano).',
    why_wrong_map: {
      'soonest': 'Forma superlativa; aquí se compara con el momento tardío en que se pensó.',
      'more soon': 'Los adverbios monosílabos no forman el comparativo con "more".',
      'more sooner': 'Doble comparativo redundante e incorrecto.'
    },
    tip: 'Comparativo de adverbios monosílabos: [soon -> sooner, fast -> faster].',
    topic: 'G20',
    objective: 'UE1',
    human_rule: '"I wish I\'d thought of this sooner" = Ojalá se me hubiera ocurrido esto antes.',
    trigger: 'I wish I\'d thought of this method __________ -> sooner',
    trap: 'Escribir "more soon" por calco del español "más pronto".',
    usage: { scenario: 'Refactorización y Deuda Técnica', en: 'I wish I’d thought of this method sooner. It would’ve saved a lot of time.', es: 'Ojalá hubiera pensado en este método antes. Habría ahorrado mucho tiempo.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.1-q3',
    sub: '8.3.1',
    num: 3,
    stem: 'Complete the criticism: "I don’t think they anticipated just how bad the result would be. They should’ve taken the whole thing __________."',
    correct: 'more seriously',
    distractors: ['seriouslier', 'most seriously', 'more serious'],
    why_correct: 'El verbo "take" en el sentido de tomarse algo en serio exige el adverbio "seriously". El grado comparativo se forma anteponiendo "more": "more seriously".',
    why_wrong_map: {
      'seriouslier': 'Forma inexistente en inglés.',
      'most seriously': 'Superlativo; no encaja en la comparación implícita con cómo se lo tomaron realmente.',
      'more serious': 'Serious es un adjetivo; aquí se necesita un adverbio para modificar a "taken".'
    },
    tip: 'Comparativo de adverbios polisílabos en -ly: [more + seriously].',
    topic: 'G20',
    objective: 'UE1',
    human_rule: 'Deberían haberse tomado todo el asunto más en serio: "more seriously".',
    trigger: 'taken the whole thing __________ -> more seriously',
    trap: 'Usar el adjetivo "more serious" olvidando que modifica al verbo "taken".',
    usage: { scenario: 'Revisión Post-Incidente de Seguridad', en: 'They should’ve taken the whole thing more seriously.', es: 'Deberían haberse tomado todo el asunto más en serio.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.1-q4',
    sub: '8.3.1',
    num: 4,
    stem: 'Complete the sentence: "It couldn’t have gone __________ . It was as bad as it could have been."',
    correct: 'worse',
    distractors: ['worst', 'more badly', 'more worse'],
    why_correct: 'El adverbio "badly" tiene forma comparativa irregular: [badly -> worse]. La expresión "couldn\'t have gone worse" significa que fue tan mal como era humanamente posible.',
    why_wrong_map: {
      'worst': 'Superlativo (the worst); no encaja tras "couldn\'t have gone".',
      'more badly': 'Los adverbios irregulares no usan "more"; el comparativo propio de badly es worse.',
      'more worse': 'Doble comparativo agramatical.'
    },
    tip: 'Comparativo irregular: [bad / badly -> worse]. Ejemplo: "It couldn\'t have gone worse".',
    topic: 'G20',
    objective: 'UE1',
    human_rule: 'No pudo haber salido peor: "couldn\'t have gone worse".',
    trigger: 'It couldn’t have gone __________ . It was as bad -> worse',
    trap: 'Elegir "more badly" ignorando la irregularidad gramatical de badly.',
    usage: { scenario: 'Fallo Crítico en Despliegue', en: 'It couldn’t have gone worse. It was as bad as it could have been.', es: 'No pudo haber salido peor. Fue tan malo como pudo haber sido.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.1-q5',
    sub: '8.3.1',
    num: 5,
    stem: 'Complete the conditional evaluation: "They would’ve done much __________ if their planning stage had been extended as suggested."',
    correct: 'better',
    distractors: ['gooder', 'best', 'more well'],
    why_correct: 'El adverbio "well" tiene forma comparativa irregular: [well -> better]. Con el intensificador "much": "much better" (mucho mejor).',
    why_wrong_map: {
      'gooder': 'Palabra inexistente en inglés.',
      'best': 'Superlativo; requiere artículo the y contexto de grupo superior.',
      'more well': 'Agramatical; el comparativo de well es siempre better.'
    },
    tip: 'Comparativo irregular: [well -> better]. Intensificador: "much better".',
    topic: 'G20',
    objective: 'UE1',
    human_rule: 'Les habría ido mucho mejor si hubieran planificado más tiempo: "much better".',
    trigger: 'would’ve done much __________ -> better',
    trap: 'Pensar en "more well" por analogía con otros adverbios.',
    usage: { scenario: 'Planificación de Proyectos TI', en: 'They would’ve done much better if their planning stage had been extended.', es: 'Les habría ido mucho mejor si su etapa de planificación se hubiera extendido.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.1-q6',
    sub: '8.3.1',
    num: 6,
    stem: 'Complete the sentence: "If they’d worked any __________ , they couldn’t have maintained the level of quality that was necessary."',
    correct: 'faster',
    distractors: ['more fast', 'fastest', 'more faster'],
    why_correct: '"Fast" funciona como adjetivo y adverbio monosílabo. Su forma comparativa es exclusivamente "faster" (más rápido).',
    why_wrong_map: {
      'more fast': 'Los monosílabos no forman comparativo con more.',
      'fastest': 'Superlativo; no encaja con la locución comparativa "any faster".',
      'more faster': 'Doble comparativo agramatical.'
    },
    tip: 'Locución comparativa de ritmo: [any faster] (aún más rápido / más deprisa).',
    topic: 'G20',
    objective: 'UE1',
    human_rule: 'Si hubieran trabajado aún más rápido, no habrían mantenido la calidad: "worked any faster".',
    trigger: 'If they’d worked any __________ -> faster',
    trap: 'Intentar usar "more fast" o inventar la forma inexistente "fastly".',
    usage: { scenario: 'Control de Calidad QA en Sprints', en: 'If they’d worked any faster, they couldn’t have maintained the level of quality that was necessary.', es: 'Si hubieran trabajado aún más rápido, no habrían podido mantener el nivel de calidad necesario.' }
  }),

  // =========================================================
  // 8.3.2 Adverbs of Frequency, Position and Time (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.3.2-q1',
    sub: '8.3.2',
    num: 1,
    stem: 'Complete the statement: "This is completely new to me. I’ve __________ seen this error message before. Can you explain it, please?"',
    correct: 'never',
    distractors: ['ever', 'already', 'always'],
    why_correct: 'El contexto indica que es completamente nuevo ("completely new to me"), por lo que la negación de experiencia previa con Present Perfect exige "never" (nunca he visto este error).',
    why_wrong_map: {
      'ever': 'Se usa en preguntas afirmativas o tras condicionales ("Have you ever...?"), no para afirmar negativamente.',
      'already': 'Significaría que ya lo ha visto, contradiciendo frontalmente "This is completely new to me".',
      'always': 'Significaría que siempre lo ve, lo cual es opuesto al contexto.'
    },
    tip: 'Experiencia nula con Present Perfect: [have/has + never + participio pasado].',
    topic: 'G21',
    objective: 'UE1',
    human_rule: 'Esto es totalmente nuevo para mí, nunca había visto este mensaje: "I\'ve never seen".',
    trigger: 'This is completely new to me. I’ve __________ seen -> never',
    trap: 'Confundir "ever" (alguna vez) con "never" (nunca).',
    usage: { scenario: 'Debugging y Soporte L1/L2', en: 'This is completely new to me. I’ve never seen this error message before.', es: 'Esto es completamente nuevo para mí. Nunca antes había visto este mensaje de error.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.2-q2',
    sub: '8.3.2',
    num: 2,
    stem: 'Complete the reminder: "Don’t you remember? We’ve definitely seen this __________ ."',
    correct: 'before',
    distractors: ['ago', 'yet', 'since'],
    why_correct: 'Para indicar que un suceso ocurrió en una ocasión anterior no especificada con Present Perfect al final de la oración, el adverbio correcto es "before" (antes).',
    why_wrong_map: {
      'ago': 'Exige una cantidad de tiempo definida y Past Simple ("two days ago"), nunca se coloca solo al final con Present Perfect.',
      'yet': 'Se utiliza en oraciones negativas o preguntas ("haven\'t seen it yet"), no en afirmativas de certeza ("definitely seen").',
      'since': 'Exige un punto temporal de partida ("since Monday") o funciona como conector causal.'
    },
    tip: 'Al final de una oración en Present Perfect para indicar anterioridad: usa "before".',
    topic: 'G21',
    objective: 'UE1',
    human_rule: '¿No te acuerdas? Definitivamente ya hemos visto esto antes: "seen this before".',
    trigger: 'We’ve definitely seen this __________ -> before',
    trap: 'Usar "ago" solo al final de la frase (error muy típico de hispanohablantes por "hace tiempo").',
    usage: { scenario: 'Resolución de Incidentes Repetitivos', en: 'Don’t you remember? We’ve definitely seen this before.', es: '¿No te acuerdas? Definitivamente hemos visto esto antes.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.2-q3',
    sub: '8.3.2',
    num: 3,
    stem: 'Complete the contrast: "Maybe you’ve __________ seen it, but I’m sure I haven’t."',
    correct: 'already',
    distractors: ['yet', 'never', 'still'],
    why_correct: '"already" se sitúa entre el auxiliar y el participio para indicar que la acción ya se ha producido con anterioridad al momento actual.',
    why_wrong_map: {
      'yet': 'En oraciones afirmativas estándar B2 no se coloca en esta posición intermedia.',
      'never': 'Contradiría el contraste con "but I\'m sure I haven\'t" (si tú nunca lo viste, no habría contraste).',
      'still': 'Normalmente precede al auxiliar en oraciones negativas ("still haven\'t seen") o expresa continuidad de estado.'
    },
    tip: 'Posición media afirmativa en Present Perfect: [have + already + participio pasado].',
    topic: 'G21',
    objective: 'UE1',
    human_rule: 'Quizás tú ya lo has visto, pero yo seguro que no: "you\'ve already seen it".',
    trigger: 'Maybe you’ve __________ seen it, but I’m sure I haven’t -> already',
    trap: 'Poner "yet" confundiéndolo con "ya" en afirmativa.',
    usage: { scenario: 'Triage de Bugs en Equipo', en: 'Maybe you’ve already seen it, but I’m sure I haven’t.', es: 'Tal vez tú ya lo hayas visto, pero estoy seguro de que yo no.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.2-q4',
    sub: '8.3.2',
    num: 4,
    stem: 'Complete the frequency statement: "Well, it’s not that common, but it does pop up __________ ."',
    correct: 'occasionally',
    distractors: ['rare', 'never', 'occasional'],
    why_correct: 'El verbo "pop up" requiere un adverbio de frecuencia. "Occasionally" (de vez en cuando / ocasionalmente) concuerda lógicamente con "it\'s not that common, but it does...".',
    why_wrong_map: {
      'rare': 'Es un adjetivo, no un adverbio; además contradiría el hecho de que sí aparece.',
      'never': 'Contradice directamente el verbo enfático afirmativo "it does pop up".',
      'occasional': 'Es un adjetivo; no puede modificar la acción del phrasal verb "pop up".'
    },
    tip: 'Adverbio de frecuencia para acciones esporádicas: [occasionally] (de forma ocasional).',
    topic: 'G21',
    objective: 'UE1',
    human_rule: 'No es tan común, pero sí aparece de vez en cuando: "pops up occasionally".',
    trigger: 'it does pop up __________ -> occasionally',
    trap: 'Usar el adjetivo "occasional" en vez del adverbio con sufijo "-ly".',
    usage: { scenario: 'Monitoreo de Errores Intermitentes', en: 'Well, it’s not that common, but it does pop up occasionally.', es: 'Bueno, no es tan común, pero sí aparece ocasionalmente.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.2-q5',
    sub: '8.3.2',
    num: 5,
    stem: 'Complete the concession: "If you say so. You’re __________ right, I suppose."',
    correct: 'usually',
    distractors: ['ever', 'seldomly', 'usual'],
    why_correct: 'La posición tras el verbo to be ("You\'re...") requiere un adverbio de frecuencia habitual: "usually" (por lo general / habitualmente sueles tener razón).',
    why_wrong_map: {
      'ever': 'No se usa en este tipo de afirmaciones declarativas de hábito.',
      'seldomly': 'Forma arcaica o redundante inexistente en el estándar B2 (el adverbio correcto es seldom).',
      'usual': 'Es un adjetivo; no puede modificar al adjetivo "right" como adverbio de frecuencia.'
    },
    tip: 'Posición de adverbios de frecuencia: van DESPUÉS del verbo to be ("You are usually right").',
    topic: 'G21',
    objective: 'UE1',
    human_rule: 'Sueles tener razón habitualmente: "You\'re usually right".',
    trigger: 'You’re __________ right, I suppose -> usually',
    trap: 'Poner el adjetivo "usual" o colocar el adverbio antes de "are".',
    usage: { scenario: 'Debate Técnico de Diagnóstico', en: 'If you say so. You’re usually right, I suppose.', es: 'Si tú lo dices. Por lo general tienes razón, supongo.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.2-q6',
    sub: '8.3.2',
    num: 6,
    stem: 'Complete the emphatic exclamation: "You’ve __________ said that __________ !"',
    correct: 'never ... before',
    distractors: ['ever ... yet', 'already ... ago', 'always ... since'],
    why_correct: 'La colocación canónica para expresar asombro por algo jamás dicho con anterioridad es [have never + dicho + before]: "You\'ve never said that before!".',
    why_wrong_map: {
      'ever ... yet': 'Agramatical en una exclamación afirmativa/declarativa.',
      'already ... ago': 'Ago no puede cerrar una frase en Present Perfect.',
      'always ... since': 'Since exige complemento temporal ("since last year") para cerrar la frase.'
    },
    tip: 'Colocación temporal fija: [have never + V3 + before] ("¡Nunca habías dicho eso antes!").',
    topic: 'G21',
    objective: 'UE1',
    human_rule: '"You\'ve never said that before!" = ¡Nunca antes habías dicho eso!',
    trigger: 'You’ve __________ said that __________ ! -> never ... before',
    trap: 'Mezclar adverbios incompatibles como "already" con "ago".',
    usage: { scenario: 'Conversación Colaborativa de Ingeniería', en: 'You’ve never said that before!', es: '¡Nunca habías dicho eso antes!' }
  }),

  // =========================================================
  // 8.3.3 Comparative Adjectives with Than (6 items)
  // =========================================================
  createQuestion({
    id: 'cisco-extra-8.3.3-q1',
    sub: '8.3.3',
    num: 1,
    stem: 'Complete the comparative sentence: "Antivirus software installation should be much __________ (high) on the list of priorities __________ focusing on other software updates."',
    correct: 'higher ... than',
    distractors: ['more high ... than', 'higher ... that', 'highest ... then'],
    why_correct: 'El adjetivo monosílabo "high" forma el comparativo regular añadiendo -er ("higher"). El nexo comparativo en inglés es obligatoriamente "than": "higher than".',
    why_wrong_map: {
      'more high ... than': 'Monosílabo regular no usa "more".',
      'higher ... that': '"that" es conjunción/pronombre relativo, no nexo comparativo.',
      'highest ... then': '"highest" es superlativo y "then" es adverbio temporal, no comparativo.'
    },
    tip: 'Comparativo de monosílabos + nexo: [adjetivo-er + than]. ¡Cuidado con no confundir "than" con "then"!',
    topic: 'G22',
    objective: 'UE1',
    human_rule: 'Debería estar mucho más arriba que...: "higher ... than".',
    trigger: 'much __________ (high) ... __________ focusing -> higher ... than',
    trap: 'Escribir "then" (luego) o "that" (que relativo) en lugar de "than" (que comparativo).',
    usage: { scenario: 'Priorización de Tareas de Seguridad', en: 'Antivirus software installation should be much higher on the list of priorities than focusing on other software updates.', es: 'La instalación del software antivirus debería estar mucho más alta en la lista de prioridades que enfocarse en otras actualizaciones.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.3-q2',
    sub: '8.3.3',
    num: 2,
    stem: 'Complete the policy instruction: "When creating a new password, you must ensure that it is __________ (complex) __________ just resorting to a known word."',
    correct: 'more complex ... than',
    distractors: ['complexer ... than', 'more complex ... that', 'most complex ... than'],
    why_correct: '"Complex" es un adjetivo bisílabo que forma el comparativo anteponiendo "more": "more complex". El conector de comparación es "than".',
    why_wrong_map: {
      'complexer ... than': 'Forma inexistente en inglés.',
      'more complex ... that': 'Error de nexo: se usa "than", nunca "that".',
      'most complex ... than': 'Forma superlativa incompatible con la estructura comparativa con than.'
    },
    tip: 'Adjetivos de dos o más sílabas: [more + adjetivo + than].',
    topic: 'G22',
    objective: 'UE1',
    human_rule: 'Más compleja que simplemente recurrir a una palabra conocida: "more complex than".',
    trigger: '__________ (complex) __________ just resorting -> more complex ... than',
    trap: 'Poner "that" por traducción directa del "que" español.',
    usage: { scenario: 'Política de Contraseñas Seguras', en: 'When creating a new password, you must ensure that it is more complex than just resorting to a known word.', es: 'Al crear una nueva contraseña, debes asegurarte de que sea más compleja que simplemente recurrir a una palabra conocida.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.3-q3',
    sub: '8.3.3',
    num: 3,
    stem: 'Complete the security report: "There\'s a growing concern that the software we are using is __________ (vulnerable) to SQL injection __________ the recent version."',
    correct: 'more vulnerable ... than',
    distractors: ['vulnerabler ... than', 'more vulnerable ... as', 'most vulnerable ... than'],
    why_correct: '"Vulnerable" es un adjetivo polisílabo cuyo comparativo es "more vulnerable". La comparación con la versión reciente exige el nexo "than".',
    why_wrong_map: {
      'vulnerabler ... than': 'Forma agramatical inexistente.',
      'more vulnerable ... as': 'El comparativo de superioridad requiere "than", no "as" (as se usa en comparaciones de igualdad as... as).',
      'most vulnerable ... than': 'Superlativo; incompatible con el nexo than.'
    },
    tip: 'Comparativo de superioridad polisílabo: [more vulnerable than].',
    topic: 'G22',
    objective: 'UE1',
    human_rule: 'Es más vulnerable a inyecciones SQL que la versión reciente: "more vulnerable than".',
    trigger: 'is __________ (vulnerable) ... __________ the recent version -> more vulnerable ... than',
    trap: 'Poner "as" en vez de "than".',
    usage: { scenario: 'Evaluación de Vulnerabilidades Web (OWASP)', en: 'The software we are using is more vulnerable to SQL injection than the recent version.', es: 'El software que estamos usando es más vulnerable a la inyección SQL que la versión reciente.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.3-q4',
    sub: '8.3.3',
    num: 4,
    stem: 'Complete the recommendation: "Ensuring the files containing customer data are encrypted beforehand is a much __________ (safe) way of sharing them __________ just sending them directly to our support team."',
    correct: 'safer ... than',
    distractors: ['more safe ... than', 'safer ... that', 'safest ... then'],
    why_correct: '"Safe" es monosílabo regular que añade -r: "safer". El nexo de comparación con el envío directo es "than": "safer than".',
    why_wrong_map: {
      'more safe ... than': 'Los monosílabos no forman comparativo con "more".',
      'safer ... that': 'Error de partícula comparativa: se exige "than".',
      'safest ... then': 'Superlativo más adverbio temporal; doblemente incorrecto.'
    },
    tip: '[safe -> safer]. Regla: [much safer way of sharing them than...].',
    topic: 'G22',
    objective: 'UE1',
    human_rule: 'Es una forma mucho más segura de compartirlos que simplemente enviarlos: "safer than".',
    trigger: 'a much __________ (safe) way ... __________ just sending -> safer ... than',
    trap: 'Escribir "more safe" en vez de "safer".',
    usage: { scenario: 'Transferencia Segura de Datos (SFTP / Cifrado)', en: 'Ensuring the files are encrypted beforehand is a much safer way of sharing them than sending them directly.', es: 'Garantizar que los archivos que contienen datos de clientes estén cifrados de antemano es una forma mucho más segura de compartirlos que simplemente enviarlos directamente.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.3-q5',
    sub: '8.3.3',
    num: 5,
    stem: 'Complete the audit conclusion: "The audit findings show that updating our backup procedures is much __________ (important) __________ anything else on our to-do list."',
    correct: 'more important ... than',
    distractors: ['importanter ... than', 'more important ... as', 'most important ... than'],
    why_correct: '"Important" es un adjetivo de 3 sílabas que forma el comparativo con "more": "more important". El nexo comparativo obligatorio es "than".',
    why_wrong_map: {
      'importanter ... than': 'Agramatical; palabra inexistente.',
      'more important ... as': 'As es incompatible con comparativos de superioridad formados con more.',
      'most important ... than': 'Superlativo; no lleva than.'
    },
    tip: 'Estructura comparativa estándar: [much more important than].',
    topic: 'G22',
    objective: 'UE1',
    human_rule: 'Es mucho más importante que cualquier otra cosa en la lista: "more important than".',
    trigger: 'is much __________ (important) __________ anything else -> more important ... than',
    trap: 'Olvidar el "than" y poner "as" o "that".',
    usage: { scenario: 'Plan de Recuperación ante Desastres (DRP)', en: 'Updating our backup procedures is much more important than anything else on our to-do list.', es: 'Actualizar nuestros procedimientos de respaldo es mucho más importante que cualquier otra cosa en nuestra lista de pendientes.' }
  }),
  createQuestion({
    id: 'cisco-extra-8.3.3-q6',
    sub: '8.3.3',
    num: 6,
    stem: 'Complete the evaluation: "In the end, I believe refusing them access was simply __________ (convenient) __________ accommodating their requests."',
    correct: 'more convenient ... than',
    distractors: ['convenienter ... than', 'more convenient ... that', 'most convenient ... then'],
    why_correct: '"Convenient" es polisílabo: su comparativo regular es "more convenient". El nexo de comparación con la otra alternativa es "than".',
    why_wrong_map: {
      'convenienter ... than': 'Forma inexistente en inglés.',
      'more convenient ... that': 'Error recurrente de hispanohablantes al usar "that" por "que".',
      'most convenient ... then': 'Superlativo y confusión de than con then.'
    },
    tip: 'Comparación de alternativas: [more convenient than + gerundio].',
    topic: 'G22',
    objective: 'UE1',
    human_rule: 'Fue simplemente más conveniente que conceder sus peticiones: "more convenient than".',
    trigger: 'simply __________ (convenient) __________ accommodating -> more convenient ... than',
    trap: 'Elegir "that" en vez de "than".',
    usage: { scenario: 'Control de Acceso y Gestión de Permisos', en: 'Refusing them access was simply more convenient than accommodating their requests.', es: 'Rechazarles el acceso fue simplemente más conveniente que acomodar sus solicitudes.' }
  })
];

module.exports = { items_8_3 };
