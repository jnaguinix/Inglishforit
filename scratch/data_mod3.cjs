const { createQuestion } = require('./builder_helper.cjs');

/**
 * English for IT 1 - Module 3: Software Engineer (Analyze Factual Information)
 * 62 items total covering sections 3.1 to 3.5
 */
const items_mod3 = [
  // =========================================================
  // 3.1 Starting a Sentence with a Conjunction (12 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod3-sec1-ex1-q1',
    sub: '3.1.3',
    num: 1,
    stem: 'Complete the sentence with an appropriate coordinating conjunction: "One of the most important advantages of compilers is that they translate everything before execution. __________ they create efficient machine code."',
    correct: 'And / So',
    distractors: ['Although', 'Despite', 'Because of'],
    why_correct: 'En el temario oficial de Cisco, iniciar una oración con "And" (adición) o "So" (consecuencia directa) enlaza fluidamente las ventajas de los compiladores en documentación técnica.',
    why_wrong_map: {
      'Although': 'Expresa concesión o contraste, lo que contradice la relación acumulativa positiva.',
      'Despite': 'Preposición de contraste que exige sustantivo o gerundio, no una cláusula completa [Sujeto + Verbo].',
      'Because of': 'Preposición causal que exige sintagma nominal, no una oración subordinada completa.'
    },
    tip: 'Conjunción inicial de adición/consecuencia: "And" y "So" son formalmente aceptadas en prosa técnica moderna.',
    topic: 'G06',
    objective: 'UE1',
    human_rule: 'Y / Por lo tanto crean código de máquina eficiente: "And / So".',
    trigger: 'translate everything before execution. __________ they create -> And / So',
    trap: 'Creer que está prohibido empezar una frase con "And" o "So" en inglés técnico.',
    usage: { scenario: 'Arquitectura de Compiladores', en: 'One of the most important advantages of compilers is that they translate everything before execution. And they create efficient machine code.', es: 'Una de las ventajas más importantes de los compiladores es que traducen todo antes de la ejecución. Y generan código de máquina eficiente.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec1-ex1-q2',
    sub: '3.1.3',
    num: 2,
    stem: 'Complete the sentence: "The downside is that if any changes need to be made, the program has to be recompiled. __________ this takes additional time."',
    correct: 'And / So',
    distractors: ['Unless', 'Instead', 'In spite of'],
    why_correct: 'La necesidad de recompilar y el tiempo adicional que conlleva representan una relación de adición o consecuencia lógica ("And / So this takes additional time").',
    why_wrong_map: {
      'Unless': 'Conjunción condicional negativa ("a menos que"); rompería la lógica del párrafo.',
      'Instead': 'Adverbio de sustitución ("en lugar de ello"); no conecta consecuencias añadidas.',
      'In spite of': 'Preposición concesiva que exige sustantivo, no [Sujeto + Verbo].'
    },
    tip: 'Adición de un inconveniente técnico adicional: usa "And" o "So".',
    topic: 'G06',
    objective: 'UE1',
    human_rule: 'Y / Por ende esto consume tiempo adicional: "And / So".',
    trigger: 'program has to be recompiled. __________ this takes -> And / So',
    trap: 'Intentar usar conectores de sustitución como "Instead".',
    usage: { scenario: 'Trade-offs de Compilación vs Interpretación', en: 'The program has to be recompiled. And this takes additional time.', es: 'El programa tiene que ser recompilado. Y esto toma tiempo adicional.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec1-ex1-q3',
    sub: '3.1.3',
    num: 3,
    stem: 'Complete the sequence of compiler operations: "A compiler will first read the entire source code and analyze the syntax. __________ then it generates machine instructions."',
    correct: 'And / So',
    distractors: ['Whereas', 'Notwithstanding', 'Unlike'],
    why_correct: 'Para continuar la secuencia temporal y funcional del compilador ("then it generates..."), la conjunción copulativa "And" o consecutiva "So" es la requerida en el solucionario de Cisco.',
    why_wrong_map: {
      'Whereas': 'Introduce contraste directo entre dos sujetos o situaciones.',
      'Notwithstanding': 'Preposición o adverbio concesivo formal ("a pesar de").',
      'Unlike': 'Preposición de comparación diferencial ("a diferencia de").'
    },
    tip: 'Secuencia de pasos en un algoritmo/compilador: [And then...].',
    topic: 'G06',
    objective: 'UE1',
    human_rule: 'Y luego genera instrucciones de máquina: "And then it generates...".',
    trigger: 'read the entire source code ... __________ then it generates -> And / So',
    trap: 'Usar conectores de contraste como "Whereas" para pasos secuenciales.',
    usage: { scenario: 'Funcionamiento del Pipeline de Compilación', en: 'A compiler will first read the entire source code and analyze the syntax. And then it generates machine instructions.', es: 'Un compilador primero leerá todo el código fuente y analizará la sintaxis. Y luego generará instrucciones de máquina.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec1-ex1-q4',
    sub: '3.1.3',
    num: 4,
    stem: 'Complete the causal sentence: "__________ I wasn’t able to resolve the timeouts issue, the client agreed to an extension."',
    correct: 'Because',
    distractors: ['Because of', 'Due to', 'Despite'],
    why_correct: 'El hueco precede a una oración con verbo conjugado ("I wasn’t able to resolve..."). Por tanto, se exige la conjunción subordinante "Because", no preposiciones como "Because of" o "Due to".',
    why_wrong_map: {
      'Because of': 'Preposición causal que exige sustantivo o gerundio, no cláusula con sujeto y verbo ("I was").',
      'Due to': 'Preposición que exige sustantivo o grupo nominal.',
      'Despite': 'Preposición concesiva que rechaza cláusulas con sujeto y verbo finito.'
    },
    tip: 'Regla de oro: [Because + Sujeto + Verbo] vs. [Because of / Due to + Sustantivo].',
    topic: 'G06',
    objective: 'UE1',
    human_rule: 'Porque no pude resolver los timeouts = "Because I wasn’t able...".',
    trigger: '__________ I wasn’t able to resolve the timeouts -> Because',
    trap: 'Elegir "Because of" o "Due to" teniendo detrás un verbo conjugado ("wasn\'t able").',
    usage: { scenario: 'Negociación de SLA con Cliente', en: 'Because I wasn’t able to resolve the timeouts issue, the client agreed to an extension.', es: 'Debido a que no pude resolver el problema de tiempos de espera, el cliente aceptó una extensión.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec1-ex1-q5',
    sub: '3.1.3',
    num: 5,
    stem: 'Complete the negative addition: "The bottleneck issue has still not been resolved. __________ does the new update fix the memory leak."',
    correct: 'Nor',
    distractors: ['Or', 'Neither of', 'Either'],
    why_correct: 'Tras una afirmación negativa previa ("has still not been resolved"), la conjunción "Nor" encabeza la siguiente oración provocando inversión auxiliar-sujeto: "Nor does the new update fix...".',
    why_wrong_map: {
      'Or': 'Conjunción disyuntiva afirmativa; no produce inversión ni enlaza dos negaciones consecutivas.',
      'Neither of': 'Pronombre distributivo que exige sustantivo en plural ("Neither of the updates...").',
      'Either': 'Adverbio/determinante que se coloca al final en oraciones negativas ordinarias sin inversión.'
    },
    tip: 'Negación inicial con inversión: [Nor + auxiliar does + sujeto + verbo base].',
    topic: 'G06',
    objective: 'UE1',
    human_rule: 'Tampoco la nueva actualización soluciona la fuga de memoria: "Nor does the new update fix...".',
    trigger: 'has still not been resolved. __________ does the new update fix -> Nor',
    trap: 'Intentar usar "Neither" a secas sin estructura pronominal o ignorar la inversión con "does".',
    usage: { scenario: 'Informe de Release y Bugs Críticos', en: 'The bottleneck issue has still not been resolved. Nor does the new update fix the memory leak.', es: 'El problema del cuello de botella aún no se ha resuelto. Tampoco la nueva actualización corrige la fuga de memoria.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec1-ex1-q6',
    sub: '3.1.3',
    num: 6,
    stem: 'Complete the sentence explaining justification: "We ought to try using the developer tools in a new browser. __________ that might shed light on the styling anomalies."',
    correct: 'For',
    distractors: ['So that', 'In order to', 'Because of'],
    why_correct: 'En el estándar de conjunciones coordinantes FANBOYS, "For" al inicio de oración actúa como conector formal que introduce una razón explicativa ("ya que / puesto que eso podría arrojar luz").',
    why_wrong_map: {
      'So that': 'Introduce propósito y suele ir en una sola cláusula sin punto y seguido.',
      'In order to': 'Exige infinitivo sin sujeto ("in order to shed light"), no una cláusula completa con "that might".',
      'Because of': 'Exige sustantivo, incompatible con la cláusula con modal "that might shed".'
    },
    tip: 'Conjunción coordinante formal de causa: [For + cláusula explicativa].',
    topic: 'G06',
    objective: 'UE1',
    human_rule: 'Deberíamos probar las DevTools, pues / ya que eso podría arrojar luz: "For that might shed light...".',
    trigger: 'in a new browser. __________ that might shed light -> For',
    trap: 'Confundir la conjunción "For" con la simple preposición de destino.',
    usage: { scenario: 'Debugging Frontend y CSS', en: 'We ought to try using the developer tools in a new browser. For that might shed light on the styling anomalies.', es: 'Deberíamos intentar usar las herramientas de desarrollador en un nuevo navegador. Pues eso podría arrojar luz sobre las anomalías de estilo.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec1-ex2-q1',
    sub: '3.1.4',
    num: 1,
    stem: 'Complete the conversational sentence: "__________ me, it\'s a little more complicated. I don\'t have the administrative permissions."',
    correct: 'For',
    distractors: ['To', 'By', 'With'],
    why_correct: 'La locución "For me, it\'s..." (para mí / en mi caso particular) es la colocación idiomática estándar en debates de equipo.',
    why_wrong_map: {
      'To': '"To me" expresa más bien opinión subjetiva ("a mi juicio"), pero aquí se refiere a la situación práctica de sus permisos.',
      'By': 'Agramatical en este contexto de referencia personal.',
      'With': '"With me" indicaría compañía, no la circunstancia técnica propia.'
    },
    tip: 'Punto de vista de situación técnica: [For me, it\'s a little more complicated...].',
    topic: 'G06',
    objective: 'UE2',
    human_rule: 'En mi caso es un poco más complicado: "For me, it\'s a little more complicated".',
    trigger: '__________ me, it\'s a little more complicated -> For',
    trap: 'Usar "To me" confundiéndolo con opinión pura.',
    usage: { scenario: 'Asignación de Permisos IAM', en: 'For me, it\'s a little more complicated. I don\'t have the permissions.', es: 'Para mí es un poco más complicado. No tengo los permisos.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec1-ex2-q2',
    sub: '3.1.4',
    num: 2,
    stem: 'Complete the contrast question: "__________ do we expect a result soon?"',
    correct: 'But',
    distractors: ['And', 'Because', 'Although'],
    why_correct: '"But do we expect...?" introduce una pregunta retórica o de objeción crítica que contrasta con el optimismo previo del equipo.',
    why_wrong_map: {
      'And': 'No introduce la objeción o matiz de duda inherente a la pregunta.',
      'Because': 'No encabeza una pregunta directa independiente de este tipo sin oración principal previa.',
      'Although': 'Conjunción subordinante que no puede abrir una pregunta principal directa.'
    },
    tip: 'Objeción en pregunta interrogativa: [But + auxiliar + sujeto...?].',
    topic: 'G06',
    objective: 'UE2',
    human_rule: 'Pero, ¿acaso esperamos un resultado pronto?: "But do we expect a result soon?".',
    trigger: '__________ do we expect a result soon? -> But',
    trap: 'Pensar que "Although" puede abrir una pregunta directa.',
    usage: { scenario: 'Sync de Avance de Proyecto', en: 'But do we expect a result soon?', es: 'Pero, ¿esperamos un resultado pronto?' }
  }),
  createQuestion({
    id: 'it1-mod3-sec1-ex2-q3',
    sub: '3.1.4',
    num: 3,
    stem: 'Complete the assertive rebuttal: "__________ that is not how we are going to solve the problem."',
    correct: 'But',
    distractors: ['Although', 'Despite', 'Even if'],
    why_correct: '"But" abre una réplica tajante de desacuerdo en un debate técnico: "But that is not how we are going to solve the problem".',
    why_wrong_map: {
      'Although': 'Subordinante; dejaría la oración incompleta sin apódosis principal.',
      'Despite': 'Preposición que exige sustantivo, no cláusula completa.',
      'Even if': 'Introduce condición extrema hipotética, no una réplica directa.'
    },
    tip: 'Réplica de desacuerdo profesional: [But that is not how...].',
    topic: 'G06',
    objective: 'UE5',
    human_rule: 'Pero así no es como vamos a resolver el problema: "But that is not how...".',
    trigger: '__________ that is not how we are going to solve the problem -> But',
    trap: 'Intentar usar subordinantes como "Although" sin cláusula principal.',
    usage: { scenario: 'Debate de Solución de Arquitectura', en: 'But that is not how we are going to solve the problem.', es: 'Pero así no es como vamos a resolver el problema.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec1-ex2-q4',
    sub: '3.1.4',
    num: 4,
    stem: 'Complete the alternative proposal: "__________ we could resort to plan B."',
    correct: 'Or',
    distractors: ['Nor', 'Either', 'Neither'],
    why_correct: '"Or" al inicio de oración plantea una alternativa constructiva frente a la discusión anterior ("O podríamos recurrir al plan B").',
    why_wrong_map: {
      'Nor': 'Exige contexto negativo previo e inversión sintáctica ("Nor could we...").',
      'Either': 'Exige la correlación "or" o funcionar como determinante.',
      'Neither': 'Exige correlación "nor" o sentido negativo exclusivo.'
    },
    tip: 'Propuesta de alternativa al inicio de frase: [Or we could...].',
    topic: 'G06',
    objective: 'UE2',
    human_rule: 'O bien podríamos recurrir al plan B: "Or we could resort to plan B".',
    trigger: '__________ we could resort to plan B -> Or',
    trap: 'Poner "Nor" sin que la frase sea negativa ni tenga inversión.',
    usage: { scenario: 'Plan de Contingencia ante Fallos', en: 'Or we could resort to plan B.', es: 'O podríamos recurrir al plan B.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec1-ex2-q5',
    sub: '3.1.4',
    num: 5,
    stem: 'Complete the transition: "__________ , anyway, we\'re still waiting for the interpreted code to finish running."',
    correct: 'And',
    distractors: ['Unless', 'Despite', 'Because of'],
    why_correct: '"And, anyway,..." es la fórmula coloquial profesional para retomar el hilo conductor principal de la conversación tras una digresión.',
    why_wrong_map: {
      'Unless': 'Conjunción condicional incoherente con "anyway".',
      'Despite': 'Exige objeto nominal directo.',
      'Because of': 'Preposición causal que no encaja con la estructura discursiva.'
    },
    tip: 'Retomar el hilo principal: [And, anyway, we\'re still waiting...].',
    topic: 'G06',
    objective: 'UE2',
    human_rule: 'Y, de todos modos, seguimos esperando a que termine el código: "And, anyway...".',
    trigger: '__________ , anyway, we\'re still waiting -> And',
    trap: 'Intentar usar conectores condicionales en una transición de conversación.',
    usage: { scenario: 'Daily Standup de Ingeniería', en: 'And, anyway, we\'re still waiting for the interpreted code to finish running.', es: 'Y, de todos modos, todavía estamos esperando a que el código interpretado termine de ejecutarse.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec1-ex2-q6',
    sub: '3.1.4',
    num: 6,
    stem: 'Complete the conclusive question: "__________ that\'s our only option?"',
    correct: 'So',
    distractors: ['Because', 'Although', 'Whereas'],
    why_correct: '"So that\'s our only option?" utiliza "So" para resumir la conclusión lógica de todo lo expuesto previamente.',
    why_wrong_map: {
      'Because': 'No se usa para formular conclusiones de resumen en preguntas directas.',
      'Although': 'Subordinante concesiva incompatible con esta pregunta sintética.',
      'Whereas': 'Conector de contraste directo entre dos elementos explícitos.'
    },
    tip: 'Conclusión recapitulativa: [So that\'s our only option?].',
    topic: 'G06',
    objective: 'UE2',
    human_rule: '¿Así que esa es nuestra única opción?: "So that\'s our only option?".',
    trigger: '__________ that\'s our only option? -> So',
    trap: 'Confundir la conjunción ilativa "So" con causalidades como "Because".',
    usage: { scenario: 'Toma de Decisiones Técnicas', en: 'So that\'s our only option?', es: '¿Así que esa es nuestra única opción?' }
  }),

  // =========================================================
  // 3.2 Inversion & Inverted Conditionals (12 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod3-sec2-ex1-q1',
    sub: '3.2.3',
    num: 1,
    stem: 'Select the valid negative restrictive inversion phrase(s): "__________ did they think that was the end of the issue."',
    correct: 'Under no circumstances / In no way / Not',
    distractors: ['No sooner had', 'Hardly had', 'Rarely had'],
    why_correct: 'En el temario de Cisco, tanto "Under no circumstances", "In no way" como "Not for a minute / Not" producen inversión con did: "Under no circumstances / In no way did they think...".',
    why_wrong_map: {
      'No sooner had': 'Exige participio pasado y correlación con "than", no "did they think".',
      'Hardly had': 'Exige participio y correlación con "when".',
      'Rarely had': 'Exige participio pasado ("thought"), no auxiliar "did" con infinitivo.'
    },
    tip: 'Inversión con did: [Under no circumstances / In no way + did + sujeto + verbo base].',
    topic: 'G07',
    objective: 'UE3',
    human_rule: 'De ninguna manera pensaron que ese era el fin del problema: "In no way did they think...".',
    trigger: '__________ did they think that was the end of the issue -> Under no circumstances / In no way / Not',
    trap: 'Elegir "No sooner had" cuando el auxiliar visible en el enunciado es "did" (no "had").',
    usage: { scenario: 'Investigación de Ciberseguridad', en: 'In no way did they think that was the end of the issue.', es: 'De ninguna manera pensaron que ese era el final del problema.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec2-ex1-q2',
    sub: '3.2.3',
    num: 2,
    stem: 'Select the valid negative phrase(s): "__________ do I agree with their decision."',
    correct: 'Under no circumstances / In no way / Not',
    distractors: ['Hardly had', 'Not only did', 'Barely did'],
    why_correct: '"Under no circumstances do I agree" y "In no way do I agree" son las estructuras canónicas de desacuerdo enfático con inversión de presente.',
    why_wrong_map: {
      'Hardly had': 'Auxiliar de pasado incompatible con el presente "do I agree".',
      'Not only did': 'Auxiliar en pasado y exige cláusula posterior con "but also".',
      'Barely did': 'Auxiliar en pasado "did" incompatible con el "do" presente.'
    },
    tip: 'Inversión negativa en presente: [Under no circumstances / In no way + do + I + agree].',
    topic: 'G07',
    objective: 'UE5',
    human_rule: 'Bajo ningún concepto estoy de acuerdo con su decisión: "Under no circumstances do I agree".',
    trigger: '__________ do I agree with their decision -> Under no circumstances / In no way / Not',
    trap: 'No percatarse de que el auxiliar en el hueco es "do" (presente) y elegir formas de pasado con "did" o "had".',
    usage: { scenario: 'Comité de Arquitectura', en: 'Under no circumstances do I agree with their decision.', es: 'Bajo ninguna circunstancia estoy de acuerdo con su decisión.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec2-ex1-q3',
    sub: '3.2.3',
    num: 3,
    stem: 'Select the valid inversion phrase(s): "__________ can we meet this deadline without additional resources."',
    correct: 'Under no circumstances / In no way',
    distractors: ['No sooner', 'Not only', 'Little'],
    why_correct: '"Under no circumstances can we meet" e "In no way can we meet" expresan la imposibilidad total con modal can invertido.',
    why_wrong_map: {
      'No sooner': 'Exige la correlación temporal con "than".',
      'Not only': 'Exige adición afirmativa posterior ("but also").',
      'Little': 'Little connota desconocimiento cognitivo ("Little did we know"), no imposibilidad de capacidad.'
    },
    tip: 'Imposibilidad de cumplir plazo: [Under no circumstances can we...].',
    topic: 'G07',
    objective: 'UE3',
    human_rule: 'De ningún modo podemos cumplir este plazo: "In no way can we meet this deadline".',
    trigger: '__________ can we meet this deadline -> Under no circumstances / In no way',
    trap: 'Usar "Little", que se aplica a verbos cognitivos como know/suspect, no a cumplir plazos.',
    usage: { scenario: 'Planificación de Release', en: 'Under no circumstances can we meet this deadline without additional resources.', es: 'Bajo ninguna circunstancia podemos cumplir este plazo sin recursos adicionales.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec2-ex1-q4',
    sub: '3.2.3',
    num: 4,
    stem: 'Complete the temporal inversion: "__________ they reversed the changes to the connection pool than latency spiked again."',
    correct: 'No sooner had',
    distractors: ['Hardly had', 'Scarcely had', 'Not only did'],
    why_correct: 'La presencia explícita de "than" más adelante en la oración ("than latency spiked again") determina de forma exclusiva el uso de "No sooner had". "Hardly" y "Scarcely" exigen "when".',
    why_wrong_map: {
      'Hardly had': 'Exige la correlación con "when", nunca con "than".',
      'Scarcely had': 'Exige la correlación con "when".',
      'Not only did': 'Exige la correlación aditiva con "but also".'
    },
    tip: 'Regla nemotécnica de oro B2: [No sooner had... THAN...] vs. [Hardly had... WHEN...].',
    topic: 'G07',
    objective: 'UE1',
    human_rule: 'Apenas habían revertido los cambios cuando / que la latencia se disparó: "No sooner had... than".',
    trigger: '__________ they reversed ... THAN latency spiked -> No sooner had',
    trap: 'Elegir "Hardly had" ignorando que la segunda cláusula contiene "than" y no "when".',
    usage: { scenario: 'Telemetría de Base de Datos', en: 'No sooner had they reversed the changes than latency spiked again.', es: 'Apenas habían revertido los cambios en el pool de conexiones cuando la latencia se disparó de nuevo.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec2-ex1-q5',
    sub: '3.2.3',
    num: 5,
    stem: 'Complete the correlative inversion: "__________ they fail to report the issue, but they also made unauthorized modifications to production."',
    correct: 'Not only did',
    distractors: ['No sooner had', 'Hardly did', 'Under no circumstances'],
    why_correct: 'La correlación con "but they also..." exige inequívocamente la estructura de inversión [Not only did + sujeto + verbo base].',
    why_wrong_map: {
      'No sooner had': 'Exige correlación temporal con "than".',
      'Hardly did': 'Hardly se combina con had... when, no con but also.',
      'Under no circumstances': 'Expresa prohibición o imposibilidad, no la acumulación aditiva de "but also".'
    },
    tip: 'Inversión correlativa aditiva: [Not only did + sujeto + verbo... but they also...].',
    topic: 'G07',
    objective: 'UE1',
    human_rule: 'No solo no reportaron el problema, sino que además modificaron producción: "Not only did they...".',
    trigger: '__________ they fail to report ... but they also made -> Not only did',
    trap: 'No reconocer la correlación "Not only... but also" y elegir una estructura temporal.',
    usage: { scenario: 'Auditoría Forense de Seguridad', en: 'Not only did they fail to report the issue, but they also made unauthorized modifications.', es: 'No solo no informaron del problema, sino que también realizaron modificaciones no autorizadas.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec2-ex1-q6',
    sub: '3.2.3',
    num: 6,
    stem: 'Complete the negative addition with inversion: "They didn’t come up with any ideas. __________ they offer much help."',
    correct: 'Nor did',
    distractors: ['Neither did', 'So did', 'Either did'],
    why_correct: '"Nor did they offer..." es la forma gramatical canónica de conjunción coordinante negativa con inversión de pasado que enlaza con una frase negativa precedente.',
    why_wrong_map: {
      'Neither did': 'En inglés estándar de redacción, "Neither did they" se usa como réplica aislada en diálogo, pero "Nor did" es la conjunción coordinante de unión textual.',
      'So did': 'Afirmativo ("así lo hicieron"); contradice el contexto negativo.',
      'Either did': 'Construcción totalmente agramatical en inglés.'
    },
    tip: 'Conjunción negativa coordinada: [Nor did + sujeto + verbo base].',
    topic: 'G07',
    objective: 'UE1',
    human_rule: 'Ni tampoco ofrecieron mucha ayuda: "Nor did they offer much help".',
    trigger: 'They didn’t come up with any ideas. __________ they offer -> Nor did',
    trap: 'Elegir "Neither did" cuando se trata de una conjunción oracional.',
    usage: { scenario: 'Evaluación de Soporte de Proveedores', en: 'They didn’t come up with any ideas. Nor did they offer much help.', es: 'No se les ocurrió ninguna idea. Ni tampoco ofrecieron mucha ayuda.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec2-ex2-q1',
    sub: '3.2.4',
    num: 1,
    stem: 'Transform using inverted conditional (Second Conditional): "If you were to ask for help, I would certainly offer my time." -> "__________ , I would certainly offer my time."',
    correct: 'Were you to ask for help',
    distractors: ['If were you to ask', 'Had you asked for help', 'Should you to ask for help'],
    why_correct: 'En el segundo condicional formal, la omisión de "if" produce la inversión [Were + sujeto + to-infinitivo]: "Were you to ask for help".',
    why_wrong_map: {
      'If were you to ask': 'Doble marca agramatical (mantiene "if" e invierte).',
      'Had you asked for help': 'Tercer condicional en pasado; cambia el tiempo hipotético futuro de la frase.',
      'Should you to ask for help': 'Should nunca se sigue de to-infinitivo.'
    },
    tip: 'Inversión de Segundo Condicional: [Were + sujeto + to-infinitivo]. Se elimina el "if".',
    topic: 'G07',
    objective: 'UE1',
    human_rule: 'Si llegaras a pedir ayuda = "Were you to ask for help".',
    trigger: 'If you were to ask for help -> Were you to ask for help',
    trap: 'Mantener la palabra "if" al hacer la inversión.',
    usage: { scenario: 'Mentoría y Pair Programming', en: 'Were you to ask for help, I would certainly offer my time.', es: 'Si fueras a pedir ayuda, sin duda ofrecería mi tiempo.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec2-ex2-q2',
    sub: '3.2.4',
    num: 2,
    stem: 'Transform using inverted conditional (Third Conditional): "If you had finished the integration yesterday, we could have tested it today." -> "__________ yesterday, we could have tested it today."',
    correct: 'Had you finished the integration',
    distractors: ['Were you to finish', 'If had you finished', 'Should you finish'],
    why_correct: 'En el tercer condicional irreal del pasado, la eliminación de "if" se invierte como [Had + sujeto + participio pasado]: "Had you finished the integration".',
    why_wrong_map: {
      'Were you to finish': 'Segundo condicional hipotético, no refleja la condición pasada del día anterior ("yesterday").',
      'If had you finished': 'Conserva erróneamente "if" con inversión.',
      'Should you finish': 'Primer condicional presente/futuro.'
    },
    tip: 'Inversión de Tercer Condicional: [Had + sujeto + participio pasado].',
    topic: 'G07',
    objective: 'UE1',
    human_rule: 'Si hubieras terminado la integración ayer: "Had you finished the integration yesterday".',
    trigger: 'If you had finished the integration -> Had you finished the integration',
    trap: 'Dejar el "if" en la opción elegida.',
    usage: { scenario: 'Retrospectiva de Despliegue', en: 'Had you finished the integration yesterday, we could have tested it today.', es: 'Si hubieras terminado la integración ayer, podríamos haberla probado hoy.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec2-ex2-q3',
    sub: '3.2.4',
    num: 3,
    stem: 'Transform using inverted conditional (First Conditional): "If you decide to use a dynamically typed language for this project, you may encounter runtime bugs." -> "__________ to use a dynamically typed language for this project, you may encounter runtime bugs."',
    correct: 'Should you decide',
    distractors: ['Were you decide', 'Had you decided', 'If should you decide'],
    why_correct: 'En el primer condicional formal, la omisión de "if" se formula con "Should": [Should + sujeto + verbo base]: "Should you decide to use...".',
    why_wrong_map: {
      'Were you decide': 'Agramatical; "were" exige to-infinitivo ("were you to decide").',
      'Had you decided': 'Tercer condicional en pasado; la frase original es una advertencia de presente/futuro ("may encounter").',
      'If should you decide': 'Retiene innecesariamente "if".'
    },
    tip: 'Inversión de Primer Condicional: [Should + sujeto + verbo base]. Equivale a "If you should decide".',
    topic: 'G07',
    objective: 'UE1',
    human_rule: 'Si decides usar un lenguaje dinámico: "Should you decide to use...".',
    trigger: 'If you decide to use -> Should you decide',
    trap: 'Usar "Were you decide" sin la partícula "to".',
    usage: { scenario: 'Selección de Stack Tecnológico', en: 'Should you decide to use a dynamically typed language, you may encounter runtime bugs.', es: 'Si decides utilizar un lenguaje de tipado dinámico para este proyecto, es posible que encuentres errores en tiempo de ejecución.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec2-ex2-q4',
    sub: '3.2.4',
    num: 4,
    stem: 'Transform: "If you decide to continue, you may want to use the new software." -> "__________ to continue, you may want to use the new software."',
    correct: 'Should you decide',
    distractors: ['Had you continued', 'Were you decide', 'If you to decide'],
    why_correct: 'Estructura invertida de primer condicional formal: [Should you decide to continue].',
    why_wrong_map: {
      'Had you continued': 'Tercer condicional en pasado.',
      'Were you decide': 'Falta el "to" que exige were.',
      'If you to decide': 'Agramatical en inglés.'
    },
    tip: '[Should you decide to continue] = Si decidieras continuar / en caso de que decidas continuar.',
    topic: 'G07',
    objective: 'UE1',
    human_rule: 'En caso de que decidas continuar: "Should you decide to continue".',
    trigger: 'If you decide to continue -> Should you decide',
    trap: 'Confundir los tiempos verbales de los tres tipos de condicionales invertidos.',
    usage: { scenario: 'Migración de Herramientas de Desarrollo', en: 'Should you decide to continue, you may want to use the new software.', es: 'Si decides continuar, es posible que desees utilizar el nuevo software.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec2-ex2-q5',
    sub: '3.2.4',
    num: 5,
    stem: 'Transform: "If you had added a linter, coding standards could have been enforced automatically." -> "__________ a linter, coding standards could have been enforced automatically."',
    correct: 'Had you added',
    distractors: ['Should you add', 'Were you to add', 'If had you added'],
    why_correct: 'Tercer condicional de reproche en pasado: se elimina "if" y se invierte [Had you added a linter].',
    why_wrong_map: {
      'Should you add': 'Primer condicional; no concuerda con "could have been enforced" en pasado.',
      'Were you to add': 'Segundo condicional para situaciones futuras.',
      'If had you added': 'No se debe conservar "if" al realizar la inversión.'
    },
    tip: 'Tercer condicional invertido en postmortems: [Had you added...].',
    topic: 'G07',
    objective: 'UE1',
    human_rule: 'Si hubieras añadido un linter: "Had you added a linter".',
    trigger: 'If you had added a linter -> Had you added',
    trap: 'Mantener el "if".',
    usage: { scenario: 'CI/CD y Calidad de Código', en: 'Had you added a linter, coding standards could have been enforced automatically.', es: 'Si hubieras añadido un linter, los estándares de código podrían haberse aplicado automáticamente.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec2-ex2-q6',
    sub: '3.2.4',
    num: 6,
    stem: 'Transform: "If we had been informed of the deadline sooner, we could have adjusted the scope." -> "__________ of the deadline sooner, we could have adjusted the scope."',
    correct: 'Had we been informed',
    distractors: ['Were we informed', 'Should we be informed', 'Had we informed'],
    why_correct: 'Tercer condicional en voz pasiva: [Had + sujeto ("we") + been informed].',
    why_wrong_map: {
      'Were we informed': 'Segundo condicional; cambia el tiempo pasado de la situación real.',
      'Should we be informed': 'Primer condicional en presente.',
      'Had we informed': 'Voz activa ("si hubiéramos informado nosotros"), lo que invierte el sentido de la frase.'
    },
    tip: 'Tercer condicional pasivo invertido: [Had we been + participio pasado].',
    topic: 'G07',
    objective: 'UE1',
    human_rule: 'Si hubiéramos sido informados de la fecha límite antes: "Had we been informed".',
    trigger: 'If we had been informed -> Had we been informed',
    trap: 'Omitir "been" y transformar la pasiva en activa ("Had we informed").',
    usage: { scenario: 'Gestión de Alcance y Scope Creep', en: 'Had we been informed of the deadline sooner, we could have adjusted the scope.', es: 'Si se nos hubiera informado antes de la fecha límite, habríamos podido ajustar el alcance.' }
  }),

  // =========================================================
  // 3.3 Vocabulary & Listening: Code Review & Development (12 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod3-sec3-ex1-q1',
    sub: '3.3.1',
    num: 1,
    stem: 'Select the technical term for: "A small region of re-usable source code, machine code, or text that can be inserted into larger files."',
    correct: 'Snippet',
    distractors: ['Lambda', 'Namespace', 'Module'],
    why_correct: 'Un "snippet" es un fragmento reutilizable de código o texto diseñado para inserción rápida en editores o proyectos.',
    why_wrong_map: {
      'Lambda': 'Es una función anónima en línea, no cualquier fragmento de texto o código.',
      'Namespace': 'Es un espacio de nombres para aislar identificadores.',
      'Module': 'Es un archivo o biblioteca completa estructurada, no un fragmento breve.'
    },
    tip: 'Definición oficial Cisco: [Snippet] = small region of re-usable source code.',
    topic: 'V08',
    objective: 'UE1',
    human_rule: 'Snippet = fragmento de código reutilizable.',
    trigger: 'small region of re-usable source code -> Snippet',
    trap: 'Confundir snippet con lambda function.',
    usage: { scenario: 'Documentación y Editores de Código', en: 'Copy this code snippet into your controller.', es: 'Copia este fragmento de código en tu controlador.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec3-ex1-q2',
    sub: '3.3.1',
    num: 2,
    stem: 'Select the technical verb for: "To reproduce or make an exact copy of an issue, bug, or execution state."',
    correct: 'Replicate',
    distractors: ['Shadow', 'Compile', 'Execute'],
    why_correct: '"Replicate" (reproducir) es el verbo estándar en QA y soporte para recrear fielmente las condiciones exactas en las que ocurre un fallo.',
    why_wrong_map: {
      'Shadow': 'En programación se refiere a ocultar una variable de ámbito superior con una local.',
      'Compile': 'Traducir código fuente a código máquina o bytecode.',
      'Execute': 'Ejecutar el programa en el procesador.'
    },
    tip: 'QA y Bug Tracking: [Replicate] = reproducir un bug.',
    topic: 'V08',
    objective: 'UE1',
    human_rule: 'Replicate = reproducir un error en el entorno de pruebas.',
    trigger: 'reproduce or make an exact copy -> Replicate',
    trap: 'Confundir con "duplicate" o términos de copia de archivos.',
    usage: { scenario: 'Reporte de Bug en Jira', en: 'We need to replicate the memory leak in the staging environment.', es: 'Necesitamos reproducir la fuga de memoria en el entorno de pruebas.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec3-ex1-q3',
    sub: '3.3.1',
    num: 3,
    stem: 'Select the technical term for: "An anonymous inline block of code or function that can be passed as an argument."',
    correct: 'Lambda',
    distractors: ['Snippet', 'Namespace', 'Built-in'],
    why_correct: 'Una función "Lambda" es una función anónima definida directamente en el cuerpo de una expresión para pasarse como argumento.',
    why_wrong_map: {
      'Snippet': 'Fragmento arbitrario de código guardado para reutilización.',
      'Namespace': 'Contenedor lógico de nombres e identificadores.',
      'Built-in': 'Función preinstalada en el núcleo del lenguaje.'
    },
    tip: 'Programación funcional: [Lambda] = anonymous function / inline block of code.',
    topic: 'V08',
    objective: 'UE1',
    human_rule: 'Lambda = función anónima que se puede pasar como parámetro.',
    trigger: 'block of code that can be passed as an argument -> Lambda',
    trap: 'Asumir que lambda se refiere únicamente a AWS Lambda.',
    usage: { scenario: 'Programación en Python/JS', en: 'You can pass a lambda function to filter the dataset.', es: 'Puedes pasar una función lambda para filtrar el conjunto de datos.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec3-ex1-q4',
    sub: '3.3.1',
    num: 4,
    stem: 'Select the technical verb for: "To make something become unclear, indistinct, or poorly separated in software design."',
    correct: 'Blur',
    distractors: ['Replicate', 'Tamper', 'Patch'],
    why_correct: '"Blur" (difuminar / desdibujar) se usa en arquitectura para advertir cuando las fronteras entre módulos, scopes o capas de servicio pierden claridad.',
    why_wrong_map: {
      'Replicate': 'Reproducir un estado o fallo.',
      'Tamper': 'Manipular o vulnerar deliberadamente la integridad de un sistema.',
      'Patch': 'Aplicar una corrección o actualización de software.'
    },
    tip: 'Diseño de software: [Blur] = desdibujar límites de alcance o separación de responsabilidades.',
    topic: 'V08',
    objective: 'UE1',
    human_rule: 'Blur = desdibujar o hacer poco claro el alcance entre variables o capas.',
    trigger: 'make something become unclear or less distinct -> Blur',
    trap: 'Desconocer la acepción abstracta de "blur" en contexto de código.',
    usage: { scenario: 'Code Review de Arquitectura', en: 'Shadowing variables can blur the boundaries of your namespaces.', es: 'Hacer shadowing de variables puede desdibujar los límites de tus espacios de nombres.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec3-ex1-q5',
    sub: '3.3.1',
    num: 5,
    stem: 'Select the technical term for: "A declarative set of symbols or abstract container used to identify and organize code objects uniquely."',
    correct: 'Namespace',
    distractors: ['Snippet', 'Scope', 'Runtime'],
    why_correct: 'Un "Namespace" (espacio de nombres) previene colisiones al garantizar que nombres idénticos puedan coexistir en distintos contextos modulares.',
    why_wrong_map: {
      'Snippet': 'Fragmento de código reutilizable.',
      'Scope': 'Ámbito de visibilidad y ciclo de vida de una variable durante la ejecución.',
      'Runtime': 'Entorno y tiempo durante el cual un programa se ejecuta.'
    },
    tip: 'Organización modular: [Namespace] = set of symbols/signs used to uniquely identify objects.',
    topic: 'V08',
    objective: 'UE1',
    human_rule: 'Namespace = espacio de nombres para evitar colisiones de identificadores.',
    trigger: 'set of signs that are used to identify -> Namespace',
    trap: 'Confundir namespace (contenedor lógico) con scope (ámbito temporal de visibilidad).',
    usage: { scenario: 'Diseño de Paquetes y Módulos', en: 'Importing everything with wildcards pollutes the global namespace.', es: 'Importar todo con comodines contamina el espacio de nombres global.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec3-ex1-q6',
    sub: '3.3.1',
    num: 6,
    stem: 'Select the programming concept for: "When a variable declared within a local inner scope has the exact same name as a variable in an outer scope."',
    correct: 'Shadowing',
    distractors: ['Name Collision', 'Scope Creep', 'Memory Leak'],
    why_correct: 'El "Variable Shadowing" (ensombrecimiento de variables) ocurre cuando una variable local enmascara y oculta temporalmente a una variable homónima del ámbito superior.',
    why_wrong_map: {
      'Name Collision': 'Conflicto donde dos símbolos no pueden coexistir y provocan error del compilador.',
      'Scope Creep': 'Desviación del alcance de un proyecto de software al sumar requisitos fuera de plazo.',
      'Memory Leak': 'Fuga de memoria no liberada en la memoria dinámica (heap).'
    },
    tip: 'Concepto clave de Clean Code: [Variable Shadowing] = variable interna que oculta a la externa.',
    topic: 'V08',
    objective: 'UE1',
    human_rule: 'Shadowing = cuando una variable local tiene el mismo nombre que una externa y la tapa.',
    trigger: 'variable declared within a certain scope has the same name -> Shadowing',
    trap: 'Confundir variable shadowing con scope creep (que es un concepto de gestión de proyectos).',
    usage: { scenario: 'Auditoría de Linter', en: 'Avoid variable shadowing because it makes tracking data flow error-prone.', es: 'Evita el ensombrecimiento de variables porque hace propenso a errores el seguimiento del flujo de datos.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec3-ex1-q7',
    sub: '3.3.1',
    num: 7,
    stem: 'Select the technical term for: "A function or data type that is already built into and provided natively by the programming language runtime."',
    correct: 'Built-in function',
    distractors: ['Lambda', 'Snippet', 'Custom function'],
    why_correct: 'Una "Built-in function" (función integrada/nativa) viene incorporada directamente en el lenguaje estándar (ej. `len()`, `print()`, `parseInt()`).',
    why_wrong_map: {
      'Lambda': 'Función anónima definida por el usuario.',
      'Snippet': 'Fragmento de código de plantilla.',
      'Custom function': 'Función desarrollada a medida por el programador.'
    },
    tip: 'Elementos nativos del lenguaje: [Built-in function] = already defined in the programming language.',
    topic: 'V08',
    objective: 'UE1',
    human_rule: 'Built-in = función que ya viene incluida de fábrica en el lenguaje.',
    trigger: 'already defined in a programming language -> Built-in function',
    trap: 'Confundir funciones nativas con librerías externas de terceros.',
    usage: { scenario: 'Convenciones de Código', en: 'Never name your variables after built-in functions like list or id.', es: 'Nunca nombres tus variables con nombres de funciones integradas como list o id.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec3-ex1-q8',
    sub: '3.3.1',
    num: 8,
    stem: 'Select the industry term for: "An undesirable, inefficient, or anti-pattern method of operating that frequently introduces defects."',
    correct: 'Bad practice',
    distractors: ['Anti-pattern', 'Bug', 'Legacy code'],
    why_correct: 'En el glosario de Cisco, "Bad practice" se define textualmente como "an undesirable or negative method of operation".',
    why_wrong_map: {
      'Anti-pattern': 'Aunque es un sinónimo cercano, en el solucionario oficial de Cisco la respuesta canónica es "Bad practice".',
      'Bug': 'Un defecto específico puntual en el código, no un método general de trabajo.',
      'Legacy code': 'Código antiguo heredado que sigue en producción, no necesariamente una mala práctica per se.'
    },
    tip: 'Término oficial Cisco: [Bad practice] = undesirable or negative method of operation.',
    topic: 'V08',
    objective: 'UE1',
    human_rule: 'Bad practice = mala práctica de desarrollo.',
    trigger: 'undesirable or negative method of operation -> Bad practice',
    trap: 'Elegir "Bug" cuando la definición describe un hábito o método de trabajo deficiente.',
    usage: { scenario: 'Pautas de Ingeniería', en: 'Hardcoding database passwords in source code is an unacceptable bad practice.', es: 'Escribir contraseñas de bases de datos directamente en el código fuente es una mala práctica inaceptable.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec3-ex2-q1',
    sub: '3.3.2',
    num: 1,
    stem: 'Based on the listening dialogue between the two developers, which statement is most accurate?',
    correct: 'The woman is an experienced senior developer mentoring the junior developer.',
    distractors: [
      'The man is auditing the company’s financial records.',
      'The woman wants to discard Python in favor of raw assembly.',
      'Both engineers are configuring physical Ethernet patch panels.'
    ],
    why_correct: 'En el audio oficial de Cisco 3.3, la mujer actúa con autoridad técnica guiando y corrigiendo el código del desarrollador novato ("The woman is an experienced senior developer...").',
    why_wrong_map: {
      'The man is auditing the company’s financial records.': 'Completamente ajeno al contexto de revisión de código y lambdas.',
      'The woman wants to discard Python in favor of raw assembly.': 'No propone abandonar Python, sino escribir funciones def limpias.',
      'Both engineers are configuring physical Ethernet patch panels.': 'Están en una sesión de code review de software, no en cableado físico.'
    },
    tip: 'Roles en el diálogo: Desarrolladora senior mentorizando a un desarrollador junior sobre buenas prácticas.',
    topic: 'V08',
    objective: 'L1',
    human_rule: 'La mujer es la programadora senior que orienta al desarrollador junior.',
    trigger: 'most probable statement describing the man and woman -> The woman is an experienced senior developer',
    trap: 'Confundir las voces o no identificar la relación de jerarquía técnica en la llamada.',
    usage: { scenario: 'Code Review y Mentoría', en: 'The senior engineer explained the benefits of defining functions explicitly.', es: 'La ingeniera senior explicó los beneficios de definir funciones explícitamente.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec3-ex2-q2',
    sub: '3.3.2',
    num: 2,
    stem: 'What is the biggest technical problem identified in the man’s code snippet?',
    correct: 'It uses a local variable outside its scope.',
    distractors: [
      'It fails to compile to a binary executable.',
      'It sends plaintext passwords over unencrypted HTTP.',
      'It attempts an asynchronous call inside an interrupt handler.'
    ],
    why_correct: 'El error central señalado en el audio es que la variable declarada dentro del bloque local se intenta consumir fuera de su ámbito de visibilidad ("It uses a local variable outside its scope").',
    why_wrong_map: {
      'It fails to compile to a binary executable.': 'Python es interpretado y el problema radica en el alcance (scope) de la variable.',
      'It sends plaintext passwords over unencrypted HTTP.': 'Falso problema de seguridad no tratado en este diálogo.',
      'It attempts an asynchronous call inside an interrupt handler.': 'Distractor no relacionado con el ejercicio de scoping.'
    },
    tip: 'Falla técnica del ejercicio: [Uses a local variable outside its scope].',
    topic: 'V08',
    objective: 'L2',
    human_rule: 'El gran error del código es que usa una variable local fuera de su alcance.',
    trigger: 'biggest problem with the man’s code -> It uses a local variable outside its scope',
    trap: 'Buscar problemas de sintaxis externa en vez de problemas de scope de variables.',
    usage: { scenario: 'Depuración de Ámbitos (Scoping)', en: 'The script crashed because it used a local variable outside its scope.', es: 'El script falló porque utilizó una variable local fuera de su alcance.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec3-ex2-q3',
    sub: '3.3.2',
    num: 3,
    stem: 'According to the dialogue, why is using a standard `def` statement beneficial compared to an anonymous lambda?',
    correct: 'It\'s more useful for tracebacks and string inspection.',
    distractors: [
      'It compiles directly to native x86 machine instructions.',
      'It eliminates garbage collection overhead completely.',
      'It bypasses operating system security rings.'
    ],
    why_correct: 'Las funciones con nombre creadas con `def` proporcionan nombres explícitos y trazas de pila (tracebacks) legibles durante la depuración de errores ("more useful for tracebacks and string inspection").',
    why_wrong_map: {
      'It compiles directly to native x86 machine instructions.': 'Una función def de Python sigue siendo interpretada en bytecode por la máquina virtual.',
      'It eliminates garbage collection overhead completely.': 'El recolector de basura opera igual para ambos tipos de funciones.',
      'It bypasses operating system security rings.': 'Afirmación absurda sobre permisos del kernel.'
    },
    tip: 'Ventaja de `def`: Nombre identificable en los tracebacks y logs de excepciones.',
    topic: 'V08',
    objective: 'L3',
    human_rule: 'Usar `def` ayuda a que los tracebacks y mensajes de error muestren el nombre real de la función.',
    trigger: 'beneficial result of using a def statement -> useful for tracebacks and string inspection',
    trap: 'Creer que `def` cambia el rendimiento de bajo nivel de la CPU.',
    usage: { scenario: 'Buenas Prácticas en Python', en: 'Using def statements gives descriptive function names in error tracebacks.', es: 'Usar sentencias def proporciona nombres descriptivos en las trazas de error.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec3-ex2-q4',
    sub: '3.3.2',
    num: 4,
    stem: 'Why does the senior developer emphasize that variable shadowing should be avoided?',
    correct: 'Typically, it can provoke errors.',
    distractors: [
      'It prevents the interpreter from launching.',
      'It violates international software patents.',
      'It permanently damages physical solid-state drives.'
    ],
    why_correct: 'El ensombrecimiento de variables genera confusión al modificar o consultar inadvertidamente la variable equivocada, provocando bugs silenciosos ("Typically, it can provoke errors").',
    why_wrong_map: {
      'It prevents the interpreter from launching.': 'El intérprete se ejecuta sin problemas ya que sintácticamente el shadowing es válido en Python.',
      'It violates international software patents.': 'Completamente falso y sin relación con la ingeniería de software.',
      'It permanently damages physical solid-state drives.': 'Distractor absurdo de hardware.'
    },
    tip: 'Razón para evitar shadowing: Oculta variables de manera imprevista y provoca bugs ("provokes errors").',
    topic: 'V08',
    objective: 'L4',
    human_rule: 'El shadowing debe evitarse porque normalmente provoca errores de lógica difíciles de detectar.',
    trigger: 'shadowing should be avoided because -> Typically, it can provoke errors',
    trap: 'Creer que el linter o el intérprete bloquean la ejecución por shadowing; es un fallo lógico en runtime.',
    usage: { scenario: 'Revisión de Estándares de Código', en: 'Avoid shadowing global variables because it provokes subtle errors.', es: 'Evita ensombrecer variables globales porque provoca errores sutiles.' }
  }),

  // =========================================================
  // 3.4 Modal Verbs: Suggest & Advise (12 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod3-sec4-ex1-q1',
    sub: '3.4.3',
    num: 1,
    stem: 'Select the valid modal option(s) of reasonable expectation: "We __________ be able to maintain coding standards with the new linter rules."',
    correct: 'should / ought to',
    distractors: ['must have', 'might to', 'could have been'],
    why_correct: 'Tanto "should" como "ought to" expresan una expectativa razonable o recomendación estándar en presente para el equipo de desarrollo.',
    why_wrong_map: {
      'must have': 'Exige participio pasado, no encaja con el infinitivo "be able to".',
      'might to': 'Might nunca admite partícula to.',
      'could have been': 'Estructura de pasado irreal, incompatible con el infinitivo activo "be able to".'
    },
    tip: 'Expectativa razonable presente: "should" y "ought to" son plenamente intercambiables.',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'Deberíamos poder mantener los estándares: "should / ought to".',
    trigger: 'We __________ be able to maintain coding standards -> should / ought to',
    trap: 'Olvidar que "ought to" es el gemelo formal de "should".',
    usage: { scenario: 'Adopción de Linter y CI', en: 'We should be able to maintain coding standards with the new linter rules.', es: 'Deberíamos poder mantener los estándares de código con las nuevas reglas del linter.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec4-ex1-q2',
    sub: '3.4.3',
    num: 2,
    stem: 'Select the valid modal option(s) for a neglected obligation: "The incident __________ have been reported. The rules are in place for a reason."',
    correct: 'should / ought to',
    distractors: ['must to', 'can have', 'might to'],
    why_correct: 'Tanto "should have been reported" como "ought to have been reported" comunican el reproche de una obligación que se debió cumplir en el pasado pero se ignoró.',
    why_wrong_map: {
      'must to': 'Must nunca lleva to.',
      'can have': 'Can no se usa para reproches pasados en afirmativa.',
      'might to': 'Might nunca admite to.'
    },
    tip: 'Deber u obligación incumplida en el pasado: [should have / ought to have + participio].',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'El incidente debió haber sido reportado: "should / ought to have been reported".',
    trigger: 'incident __________ have been reported. The rules are in place -> should / ought to',
    trap: 'Poner "must have", que indicaría deducción ("seguro que fue reportado") en vez de reproche moral.',
    usage: { scenario: 'Auditoría tras Brecha de Seguridad', en: 'The incident ought to have been reported immediately.', es: 'El incidente debería haberse informado inmediatamente.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec4-ex1-q3',
    sub: '3.4.3',
    num: 3,
    stem: 'Select the valid modal option(s): "There __________ be an easier way of solving the problem. This code is unnecessarily convoluted."',
    correct: 'should / ought to / must',
    distractors: ['have to be to', 'can to be', 'might have been to'],
    why_correct: 'En el solucionario de Cisco, ante la evidencia de un código enrevesado son válidos "should be", "ought to be" (debería haber) y "must be" (tiene que haber una manera más fácil).',
    why_wrong_map: {
      'have to be to': 'Construcción redundante y agramatical.',
      'can to be': 'Can nunca admite to.',
      'might have been to': 'Estructura agramatical para expresar una deducción presente.'
    },
    tip: 'Deducción y expectativa sobre solución más sencilla: "should", "ought to" y "must" son opciones válidas.',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'Debe haber / debería haber una forma más fácil: "should / ought to / must be".',
    trigger: 'There __________ be an easier way of solving the problem -> should / ought to / must',
    trap: 'Descartar "must" creyendo que solo se admite "should".',
    usage: { scenario: 'Refactorización de Algoritmo Complejo', en: 'There must be an easier way of solving the problem.', es: 'Debe haber una forma más fácil de resolver el problema.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec4-ex1-q4',
    sub: '3.4.3',
    num: 4,
    stem: 'Select the valid modal option(s) for a critical technical rule: "Regular backups __________ be done in order to avoid data loss."',
    correct: 'should / ought to / must',
    distractors: ['would better', 'could to', 'might to have'],
    why_correct: 'Para respaldos periódicos, las tres opciones ("should", "ought to" y "must") expresan válidamente diferentes grados de conveniencia técnica y mandato institucional.',
    why_wrong_map: {
      'would better': 'La locución idiomática es "had better", no "would better".',
      'could to': 'Could no admite partícula to.',
      'might to have': 'Might no admite to.'
    },
    tip: 'Política de seguridad obligatoria o recomendada: "should", "ought to" y "must" son válidos.',
    topic: 'G08',
    objective: 'UE1',
    human_rule: 'Los backups regulares deberían / deben hacerse: "should / ought to / must be done".',
    trigger: 'Regular backups __________ be done in order to avoid data loss -> should / ought to / must',
    trap: 'Elegir "would better" confundiéndolo con "had better".',
    usage: { scenario: 'Plan de Continuidad de Negocio (BCP)', en: 'Regular backups must be done in order to avoid data loss.', es: 'Se deben / deberían realizar copias de seguridad periódicas para evitar la pérdida de datos.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec4-ex1-q5',
    sub: '3.4.3',
    num: 5,
    stem: 'Complete the sentence acknowledging a mistake: "We __________ have paid more attention to the deadline. This rush caused multiple regressions."',
    correct: 'should',
    distractors: ['ought', 'must', 'can'],
    why_correct: 'El hueco está seguido inmediatamente por el auxiliar "have" sin la preposición "to". Por tanto, "ought" es inviable (exigiría "ought to have"), siendo "should" la única respuesta correcta.',
    why_wrong_map: {
      'ought': 'Incompleto: exige obligatoriamente la partícula "to" ("ought to have paid").',
      'must': '"must have paid" expresaría la deducción lógica de que sí pagamos atención ("seguro que prestamos atención"), lo que contradice el reproche de las prisas.',
      'can': 'Can no se utiliza para reproches de pasado.'
    },
    tip: '¡Cuidado con la preposición!: [should have...] vs. [ought TO have...].',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'Deberíamos haber prestado más atención: "We should have paid...".',
    trigger: 'We __________ have paid more attention -> should',
    trap: 'Marcar "ought" olvidando que le falta el "to" delante de "have".',
    usage: { scenario: 'Postmortem de Sprint Fallido', en: 'We should have paid more attention to the deadline.', es: 'Deberíamos haber prestado más atención a la fecha límite.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec4-ex1-q6',
    sub: '3.4.3',
    num: 6,
    stem: 'Complete the sentence with the two-word modal form: "The seriousness of this issue really __________ have been given priority."',
    correct: 'ought to',
    distractors: ['should to', 'must to', 'could to'],
    why_correct: 'En el solucionario de Cisco, este ítem evalúa explícitamente el modal compuesto "ought to": "really ought to have been given priority".',
    why_wrong_map: {
      'should to': 'Agramatical; should nunca lleva partícula to.',
      'must to': 'Agramatical; must nunca lleva to.',
      'could to': 'Agramatical; could nunca lleva to.'
    },
    tip: 'El único modal central que lleva partícula "to" incorporada es [ought to].',
    topic: 'G08',
    objective: 'UE3',
    human_rule: 'Realmente se le debió haber dado prioridad: "really ought to have been given...".',
    trigger: 'The seriousness ... really __________ have been given priority -> ought to',
    trap: 'Poner "should to" creyendo erróneamente que todos los modales admiten "to".',
    usage: { scenario: 'Escalación de Vulnerabilidad Crítica', en: 'The seriousness of this issue really ought to have been given priority.', es: 'A la gravedad de este problema realmente se le debería haber dado prioridad.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec4-ex2-q1',
    sub: '3.4.4',
    num: 1,
    stem: 'Transform into a question with "ought": "We reported the incident as soon as it occurred." -> "__________ the incident as soon as it occurred?"',
    correct: 'Ought we to have reported',
    distractors: ['Ought we reported', 'Should we to have reported', 'Ought we have reported'],
    why_correct: 'La interrogativa con "ought" en pasado ubica al sujeto entre "ought" y "to": [Ought + sujeto + to have + participio pasado]: "Ought we to have reported...?".',
    why_wrong_map: {
      'Ought we reported': 'Falta el infinitivo perfecto con to ("to have reported").',
      'Should we to have reported': 'Should nunca admite partícula to.',
      'Ought we have reported': 'Olvida la partícula to obligatoria de ought.'
    },
    tip: 'Interrogativa con ought: [Ought + sujeto + TO HAVE + participio?].',
    topic: 'G08',
    objective: 'UE2',
    human_rule: '¿Deberíamos haber reportado el incidente?: "Ought we to have reported...?".',
    trigger: 'We reported the incident -> Ought we to have reported',
    trap: 'Omitir la partícula "to" tras el sujeto en las preguntas con ought.',
    usage: { scenario: 'Revisión de Cumplimiento Legal', en: 'Ought we to have reported the incident as soon as it occurred?', es: '¿Deberíamos haber informado del incidente tan pronto como ocurrió?' }
  }),
  createQuestion({
    id: 'it1-mod3-sec4-ex2-q2',
    sub: '3.4.4',
    num: 2,
    stem: 'Transform into a question with "ought": "Due to its seriousness, we gave this issue priority." -> "Due to its seriousness, __________ priority?"',
    correct: 'ought we to have given this issue',
    distractors: ['ought we gave this issue', 'should we to have given', 'ought we to give'],
    why_correct: 'Estructura interrogativa de pasado: [ought we to have given this issue priority?].',
    why_wrong_map: {
      'ought we gave this issue': 'Agramatical; falta infinitivo perfecto con to.',
      'should we to have given': 'Should no lleva to.',
      'ought we to give': 'Presente; la acción original está en pasado ("we gave").'
    },
    tip: 'Pregunta retrospectiva: [ought we to have given...?].',
    topic: 'G08',
    objective: 'UE2',
    human_rule: '¿Deberíamos haberle dado prioridad a este asunto?: "ought we to have given...".',
    trigger: 'we gave this issue priority -> ought we to have given this issue',
    trap: 'Cambiar el verbo a presente ("ought we to give") perdiendo el tiempo pasado del original.',
    usage: { scenario: 'Postmortem de Triaje de Bugs', en: 'Due to its seriousness, ought we to have given this issue priority?', es: 'Debido a su gravedad, ¿deberíamos haberle dado prioridad a este asunto?' }
  }),
  createQuestion({
    id: 'it1-mod3-sec4-ex2-q3',
    sub: '3.4.4',
    num: 3,
    stem: 'Transform into a question with "ought": "We have done regular backups in order to avoid data loss." -> "__________ regular backups in order to avoid data loss?"',
    correct: 'Ought we to have done',
    distractors: ['Ought we done', 'Should we to have done', 'Ought to we have done'],
    why_correct: 'Inversión interrogativa de ought: el sujeto separa a ought de su partícula to: [Ought we to have done...?].',
    why_wrong_map: {
      'Ought we done': 'Falta "to have".',
      'Should we to have done': 'Should no admite to.',
      'Ought to we have done': 'Coloca el sujeto después de "to", lo cual es agramatical en inglés estándar.'
    },
    tip: 'El sujeto se coloca entre "ought" y "to": [Ought WE to have done].',
    topic: 'G08',
    objective: 'UE2',
    human_rule: '¿Deberíamos haber hecho copias de seguridad regulares?: "Ought we to have done...?".',
    trigger: 'We have done regular backups -> Ought we to have done',
    trap: 'Poner "Ought to we" en bloque en vez de intercalar el sujeto.',
    usage: { scenario: 'Auditoría de Respaldo', en: 'Ought we to have done regular backups in order to avoid data loss?', es: '¿Deberíamos haber hecho copias de seguridad periódicas para evitar la pérdida de datos?' }
  }),
  createQuestion({
    id: 'it1-mod3-sec4-ex2-q4',
    sub: '3.4.4',
    num: 4,
    stem: 'Transform: "We enabled client hardware address checks to avert the spoofing." -> "__________ client hardware address checks to avert the spoofing?"',
    correct: 'Ought we to have enabled',
    distractors: ['Ought we enabled', 'Should we to have enabled', 'Ought we have enable'],
    why_correct: 'Patrón estricto interrogativo con ought en pasado: [Ought we to have enabled...?].',
    why_wrong_map: {
      'Ought we enabled': 'Falta infinitivo compuesto con to.',
      'Should we to have enabled': 'Should no admite to.',
      'Ought we have enable': 'Falta partícula to y forma base en vez de participio.'
    },
    tip: 'Fórmula interrogativa: [Ought + sujeto + TO HAVE + participio].',
    topic: 'G08',
    objective: 'UE2',
    human_rule: '¿Deberíamos haber habilitado las verificaciones de hardware?: "Ought we to have enabled...?".',
    trigger: 'We enabled client hardware address checks -> Ought we to have enabled',
    trap: 'Omitir "to have" y poner "Ought we enabled".',
    usage: { scenario: 'Configuración Anti-Spoofing en Switches', en: 'Ought we to have enabled client hardware address checks to avert the spoofing?', es: '¿Deberíamos haber habilitado las comprobaciones de dirección de hardware del cliente para evitar la suplantación?' }
  }),
  createQuestion({
    id: 'it1-mod3-sec4-ex2-q5',
    sub: '3.4.4',
    num: 5,
    stem: 'Transform the present state sentence: "We have a VLAN-based configuration in our network." -> "__________ a VLAN-based configuration in our network?"',
    correct: 'Ought we to have',
    distractors: ['Ought we to had', 'Ought we have had', 'Should we to have'],
    why_correct: 'La oración original describe un estado en presente ("We have"). La pregunta con ought en presente es [Ought + we + to have + objeto?].',
    why_wrong_map: {
      'Ought we to had': 'Agramatical; tras to se exige infinitivo base have, no pasado had.',
      'Ought we have had': 'Cambiaría el sentido a un reproche de pasado, cuando el original describe el estado actual.',
      'Should we to have': 'Should no admite partícula to.'
    },
    tip: 'Pregunta en presente con ought: [Ought we to have a VLAN configuration?].',
    topic: 'G08',
    objective: 'UE2',
    human_rule: '¿Deberíamos tener una configuración basada en VLANs?: "Ought we to have...".',
    trigger: 'We have a VLAN-based configuration -> Ought we to have',
    trap: 'Poner forma compuesta de pasado cuando la oración original está en presente simple.',
    usage: { scenario: 'Diseño de Topología de Red', en: 'Ought we to have a VLAN-based configuration in our network?', es: '¿Deberíamos tener una configuración basada en VLAN en nuestra red?' }
  }),
  createQuestion({
    id: 'it1-mod3-sec4-ex2-q6',
    sub: '3.4.4',
    num: 6,
    stem: 'Transform the passive sentence: "This comprehensive procedure has already been introduced." -> "__________ already been introduced?"',
    correct: 'Ought this comprehensive procedure to have',
    distractors: ['Ought this procedure has', 'Should this procedure to have', 'Ought to this procedure have'],
    why_correct: 'El sujeto sintáctico largo ("this comprehensive procedure") se intercala entre "Ought" y "to have already been introduced".',
    why_wrong_map: {
      'Ought this procedure has': 'Agramatical; tras ought se exige to-infinitivo, nunca forma finita has.',
      'Should this procedure to have': 'Should rechaza la partícula to.',
      'Ought to this procedure have': 'No intercala el sujeto entre ought y to.'
    },
    tip: 'Sujeto complejo intercalado: [Ought + [sujeto completo] + TO HAVE + participio?].',
    topic: 'G08',
    objective: 'UE2',
    human_rule: '¿Debería este procedimiento integral haber sido introducido ya?: "Ought this procedure to have...".',
    trigger: 'This comprehensive procedure has already been introduced -> Ought this comprehensive procedure to have',
    trap: 'No respetar la posición del sujeto largo entre "ought" y "to have".',
    usage: { scenario: 'Cumplimiento de Procedimientos de TI', en: 'Ought this comprehensive procedure to have already been introduced?', es: '¿Debería haberse introducido ya este procedimiento integral?' }
  }),

  // =========================================================
  // 3.5 Reading & Vocabulary: Compilers vs Interpreters (14 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod3-sec5-ex1-q1',
    sub: '3.5.1',
    num: 1,
    stem: 'Select the definition for: "A language that enables development of a program in a user-friendly programming context with strong abstraction from hardware details."',
    correct: 'High-level programming language',
    distractors: ['Assembly language', 'Binary code', 'Object code'],
    why_correct: 'Un lenguaje de alto nivel (High-level programming language) abstrae al programador de los detalles de la CPU mediante sintaxis comprensible.',
    why_wrong_map: {
      'Assembly language': 'Lenguaje de bajo nivel fuertemente acoplado a la arquitectura de la CPU.',
      'Binary code': 'Código binario de ceros y unos.',
      'Object code': 'El producto compilado resultante en código máquina.'
    },
    tip: 'Concepto clave: [High-level programming] = user-friendly context, strong abstraction.',
    topic: 'V02',
    objective: 'UE1',
    human_rule: 'Lenguaje de alto nivel = lenguaje legible y abstracto como Python, Java o C#.',
    trigger: 'enables development of a program in a user-friendly programming context -> High-level programming language',
    trap: 'Confundir lenguajes de alto nivel con lenguajes ensambladores.',
    usage: { scenario: 'Fundamentos de Desarrollo', en: 'Python and Java are examples of high-level programming languages.', es: 'Python y Java son ejemplos de lenguajes de programación de alto nivel.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex1-q2',
    sub: '3.5.1',
    num: 2,
    stem: 'Select the definition for: "A system using the digits 0 and 1 to represent instructions directly understandable by electronic CPU logic."',
    correct: 'Binary code',
    distractors: ['Source code', 'Bytecode', 'Script'],
    why_correct: 'El código binario (Binary code) es la representación fundamental en dígitos 0 y 1 que el hardware del procesador ejecuta.',
    why_wrong_map: {
      'Source code': 'Texto legible por humanos escrito en un lenguaje de programación.',
      'Bytecode': 'Instrucciones intermedias ejecutadas por una máquina virtual (JVM, CLR).',
      'Script': 'Archivo de texto con instrucciones interpretadas.'
    },
    tip: 'Base de computación: [Binary code] = system using the digits 0 and 1.',
    topic: 'V02',
    objective: 'UE1',
    human_rule: 'Código binario = el lenguaje nativo de 0s y 1s del hardware.',
    trigger: 'system using the digits 0 and 1 -> Binary code',
    trap: 'Confundir código binario con bytecode.',
    usage: { scenario: 'Arquitectura de Computadores', en: 'The CPU directly executes instructions formatted in binary code.', es: 'La CPU ejecuta directamente instrucciones formateadas en código binario.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex1-q3',
    sub: '3.5.1',
    num: 3,
    stem: 'Select the definition for: "The product of a compiler; a sequence of machine code or bytecode produced from source code."',
    correct: 'Object code',
    distractors: ['Source code', 'Raw text', 'Linter config'],
    why_correct: 'El "Object code" (código objeto) es la salida producida por el compilador lista para enlazarse (link) en un binario ejecutable.',
    why_wrong_map: {
      'Source code': 'La entrada de código escrita por los desarrolladores.',
      'Raw text': 'Texto sin formato.',
      'Linter config': 'Archivo de configuración de estilo de código.'
    },
    tip: 'Pipeline de compilación: [Source code -> Compiler -> Object code -> Linker -> Executable].',
    topic: 'V02',
    objective: 'UE1',
    human_rule: 'Object code = el código generado por el compilador a partir del código fuente.',
    trigger: 'The product of a compiler. A sequence of -> Object code',
    trap: 'Confundir "Object code" con "Object-oriented programming".',
    usage: { scenario: 'Compilación C/C++', en: 'The compiler outputs object code files with a .o or .obj extension.', es: 'El compilador genera archivos de código objeto con extensión .o o .obj.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex1-q4',
    sub: '3.5.1',
    num: 4,
    stem: 'Select the security verb for: "To interfere with or alter software, hardware, or data without authorization in order to cause damage or gain illicit access."',
    correct: 'Tamper',
    distractors: ['Replicate', 'Compile', 'Parse'],
    why_correct: '"Tamper" (manipular indebidamente / alterar fraudulentamente) es el verbo de ciberseguridad para modificaciones ilícitas de datos o binarios.',
    why_wrong_map: {
      'Replicate': 'Reproducir un error en entorno controlado.',
      'Compile': 'Transformar código fuente en código objeto.',
      'Parse': 'Analizar sintácticamente una cadena de texto o código.'
    },
    tip: 'Término oficial InfoSec: [Tamper] = interfere with something in order to cause damage.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Tamper = manipular o alterar código o datos con mala intención.',
    trigger: 'Interfere with something in order to cause -> Tamper',
    trap: 'Confundir con verbos neutrales como "alter" o "modify".',
    usage: { scenario: 'Integridad de Software y Firma Digital', en: 'Cryptographic signatures ensure that attackers cannot tamper with the binary.', es: 'Las firmas criptográficas garantizan que los atacantes no puedan manipular el binario.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex1-q5',
    sub: '3.5.1',
    num: 5,
    stem: 'Select the programming language described: "A dynamic, open-source programming language with a focus on simplicity and productivity, commonly associated with the Rails framework."',
    correct: 'Ruby',
    distractors: ['C++', 'Fortran', 'Assembly'],
    why_correct: 'Ruby es un lenguaje interpretado dinámico de alto nivel centrado en la productividad y sintaxis elegante.',
    why_wrong_map: {
      'C++': 'Lenguaje compilado estático de alto rendimiento.',
      'Fortran': 'Lenguaje histórico compilado de cálculo científico.',
      'Assembly': 'Lenguaje de muy bajo nivel dependiente de hardware.'
    },
    tip: 'Glosario oficial Cisco: [Ruby] = dynamic, open source programming language.',
    topic: 'V02',
    objective: 'UE1',
    human_rule: 'Ruby = lenguaje interpretado dinámico de código abierto.',
    trigger: 'A dynamic, open source programming language -> Ruby',
    trap: 'Confundir lenguajes dinámicos interpretados con lenguajes estáticos compilados.',
    usage: { scenario: 'Desarrollo Web Backend', en: 'Ruby is known for readable syntax and rapid web development.', es: 'Ruby es conocido por su sintaxis legible y su rápido desarrollo web.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex1-q6',
    sub: '3.5.1',
    num: 6,
    stem: 'Select the programming language described: "An interpreted, high-level, general-purpose language with dynamic semantics, extensive libraries, and prominent use in AI/DevOps."',
    correct: 'Python',
    distractors: ['C', 'Rust', 'Go'],
    why_correct: 'Python se define textualmente en el material oficial como "an interpreted high-level general-purpose programming language".',
    why_wrong_map: {
      'C': 'Lenguaje compilado procedural de bajo nivel.',
      'Rust': 'Lenguaje de sistemas compilado con garantías de memoria.',
      'Go': 'Lenguaje compilado concurrente diseñado por Google.'
    },
    tip: 'Definición oficial Cisco: [Python] = interpreted high-level general-purpose language.',
    topic: 'V02',
    objective: 'UE1',
    human_rule: 'Python = lenguaje interpretado de alto nivel de propósito general.',
    trigger: 'An interpreted high-level general-purpose -> Python',
    trap: 'Clasificar erróneamente a Python como lenguaje compilado a binario nativo.',
    usage: { scenario: 'Automatización y Machine Learning', en: 'Python is heavily used for infrastructure automation scripts.', es: 'Python se utiliza ampliamente para scripts de automatización de infraestructura.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex1-q7',
    sub: '3.5.1',
    num: 7,
    stem: 'Select the idiom meaning: "Whatever happens, whichever option is selected, anyway, regardless of conditions."',
    correct: 'No matter the case',
    distractors: ['At all costs', 'On a roll', 'In the long run'],
    why_correct: 'La expresión idiomática "No matter the case" significa textualmente en el temario de Cisco: "Whatever, whichever, anyway, regardless".',
    why_wrong_map: {
      'At all costs': 'Significa cueste lo que cueste / a toda costa.',
      'On a roll': 'Significa estar en una racha de éxitos.',
      'In the long run': 'Significa a largo plazo.'
    },
    tip: 'Expresión idiomática: [No matter the case] = de cualquier modo / sea como sea.',
    topic: 'V08',
    objective: 'UE1',
    human_rule: '"No matter the case" = sea como sea / independientemente de la situación.',
    trigger: 'Whatever, whichever, anyway, regardless -> No matter the case',
    trap: 'Confundir con "in any case" o modismos de costes.',
    usage: { scenario: 'Políticas de Respaldo', en: 'No matter the case, critical data must be encrypted at rest.', es: 'Sea cual sea el caso, los datos críticos deben cifrarse en reposo.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex1-q8',
    sub: '3.5.1',
    num: 8,
    stem: 'Select the idiom meaning: "A situation in which you can enjoy the advantages of two very different things at the same time."',
    correct: 'Get the best of both worlds',
    distractors: ['Bite the bullet', 'Touch base', 'Go the extra mile'],
    why_correct: '"Get the best of both worlds" es la expresión que describe disfrutar simultáneamente de los beneficios de dos mundos distintos (como el modelo híbrido de compilación e interpretación en Java/JIT).',
    why_wrong_map: {
      'Bite the bullet': 'Aceptar una situación desagradable pero inevitable.',
      'Touch base': 'Hacer un contacto breve para sincronizar información.',
      'Go the extra mile': 'Hacer un esfuerzo adicional más allá de lo requerido.'
    },
    tip: 'Idiom oficial de arquitectura híbrida: [Get the best of both worlds] (tener lo mejor de ambos mundos).',
    topic: 'V08',
    objective: 'UE1',
    human_rule: '"Get the best of both worlds" = disfrutar de las ventajas de dos alternativas a la vez.',
    trigger: 'enjoy the advantages of two very different things -> Get the best of both worlds',
    trap: 'Confundir con modismos de negociación como "bite the bullet".',
    usage: { scenario: 'Runtimes Híbridos (JIT)', en: 'Using JIT compilation allows engineers to get the best of both worlds: portability and raw speed.', es: 'El uso de la compilación JIT permite a los ingenieros tener lo mejor de ambos mundos: portabilidad y velocidad bruta.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex2-q1',
    sub: '3.5.3',
    num: 1,
    stem: 'According to technical principles of computing, why must high-level source code be translated before execution?',
    correct: 'Because processors cannot directly comprehend high-level text; they only execute binary machine code.',
    distractors: [
      'Because linters refuse to permit uncompiled files on production servers.',
      'Because uncompiled code violates international copyright laws.',
      'Because interpreters must encrypt source code with SSL certificates first.'
    ],
    why_correct: 'Los microprocesadores físicos únicamente entienden voltajes y señales binarias (código máquina); por ende, cualquier lenguaje de alto nivel debe traducirse antes de ejecutarse.',
    why_wrong_map: {
      'Because linters refuse to permit uncompiled files on production servers.': 'Los linters verifican estilo y sintaxis, no la física del procesador.',
      'Because uncompiled code violates international copyright laws.': 'Afirmación legal falsa.',
      'Because interpreters must encrypt source code with SSL certificates first.': 'SSL/TLS protege transmisiones de red, no la traducción interna de código.'
    },
    tip: 'Fundamento de traducción: El procesador solo comprende código binario de máquina.',
    topic: 'V02',
    objective: 'R1',
    human_rule: 'El código fuente debe traducirse porque la CPU solo entiende ceros y unos.',
    trigger: 'Source code must be translated because -> processors only execute binary machine code',
    trap: 'Creer que la traducción es un requisito de seguridad en lugar de una necesidad de hardware.',
    usage: { scenario: 'Fundamentos de Computación', en: 'Source code must be translated into machine instructions before execution.', es: 'El código fuente debe traducirse a instrucciones de máquina antes de la ejecución.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex2-q2',
    sub: '3.5.3',
    num: 2,
    stem: 'Why is binary code the foundational execution format of modern computer processors?',
    correct: 'It is the only language which can be directly parsed and executed by electronic digital circuits.',
    distractors: [
      'It is easily readable and editable by human administrators without tools.',
      'It consumes zero electrical power during mathematical operations.',
      'It prevents all network packets from being spoofed.'
    ],
    why_correct: 'El código binario representa los estados biestables (encendido/apagado) de los transistores en los circuitos lógicos de la CPU.',
    why_wrong_map: {
      'It is easily readable and editable by human administrators without tools.': 'El código binario puro es prácticamente ininteligible para humanos sin desensamblador.',
      'It consumes zero electrical power during mathematical operations.': 'Cualquier conmutación de transistores consume energía física.',
      'It prevents all network packets from being spoofed.': 'No tiene relación con la prevención de IP spoofing.'
    },
    tip: 'Naturaleza del binario: Único lenguaje procesado de forma nativa por compuertas electrónicas.',
    topic: 'V02',
    objective: 'R2',
    human_rule: 'El código binario es el único que los circuitos integrados de la CPU pueden procesar.',
    trigger: 'Binary code is used because -> only language which can be directly parsed by circuits',
    trap: 'Pensar que el código binario es amigable o legible para humanos.',
    usage: { scenario: 'Diseño de Procesadores', en: 'Binary code represents low-level instructions executed directly by CPU logic.', es: 'El código binario representa instrucciones de bajo nivel ejecutadas directamente por la lógica de la CPU.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex2-q3',
    sub: '3.5.3',
    num: 3,
    stem: 'According to the reading on compilers, when is program execution significantly faster?',
    correct: 'Once the compiler has finished analyzing and generating optimized machine code.',
    distractors: [
      'While the interpreter is parsing source code line by line.',
      'Only when the computer is disconnected from the internet.',
      'Whenever dynamic type checking is performed continuously in the loop.'
    ],
    why_correct: 'Una vez completado el proceso de compilación previa, el binario resultante corre a velocidad nativa sin latencia de interpretación en tiempo real.',
    why_wrong_map: {
      'While the interpreter is parsing source code line by line.': 'La interpretación línea a línea añade sobrecarga sustancial y ralentiza la ejecución.',
      'Only when the computer is disconnected from the internet.': 'La conexión a red no afecta la velocidad de instrucciones CPU locales compiladas.',
      'Whenever dynamic type checking is performed continuously in the loop.': 'La comprobación dinámica en cada iteración degrada fuertemente el rendimiento.'
    },
    tip: 'Ventaja de compilación: Ejecución ultra rápida una vez generado el código máquina.',
    topic: 'V02',
    objective: 'R3',
    human_rule: 'La ejecución es mucho más rápida una vez que el compilador ha terminado de analizar y generar el código.',
    trigger: 'The execution is a lot faster -> Once the compiler has finished analyzing',
    trap: 'Confundir el tiempo total de compilación (lento) con la velocidad final de ejecución (rápida).',
    usage: { scenario: 'Optimización de Desempeño C++', en: 'Execution speed is high once the compiler has finished building the binary.', es: 'La velocidad de ejecución es alta una vez que el compilador ha terminado de construir el binario.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex2-q4',
    sub: '3.5.3',
    num: 4,
    stem: 'How does an interpreter differ operationally from a compiler during program runtime?',
    correct: 'During execution, the interpreter translates and runs the code statement by statement.',
    distractors: [
      'The interpreter writes permanent object code to the storage disk prior to execution.',
      'The interpreter requires manual human intervention for each function call.',
      'The interpreter permanently modifies the motherboard BIOS firmware.'
    ],
    why_correct: 'Un intérprete analiza y ejecuta las instrucciones en tiempo real línea por línea a medida que avanza el programa, sin generar un binario independiente previo.',
    why_wrong_map: {
      'The interpreter writes permanent object code to the storage disk prior to execution.': 'Esa es precisamente la función del compilador y enlazador.',
      'The interpreter requires manual human intervention for each function call.': 'La interpretación es un proceso totalmente automatizado por software.',
      'The interpreter permanently modifies the motherboard BIOS firmware.': 'Afirmación absurda sobre hardware.'
    },
    tip: 'Mecanismo del intérprete: Traduce y ejecuta instrucción por instrucción en tiempo de ejecución.',
    topic: 'V02',
    objective: 'R4',
    human_rule: 'El intérprete traduce y ejecuta el código sentencia por sentencia durante la ejecución.',
    trigger: 'The interpreter is not exactly the same as the compiler because -> translates and runs statement by statement',
    trap: 'Creer que el intérprete produce ejecutables `.exe` en disco.',
    usage: { scenario: 'Runtimes de Scripting', en: 'During execution, the Python interpreter translates instructions line by line.', es: 'Durante la ejecución, el intérprete de Python traduce las instrucciones línea por línea.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex2-q5',
    sub: '3.5.3',
    num: 5,
    stem: 'What is a major practical advantage of interpreted programming languages during rapid prototyping?',
    correct: 'Developers can immediately test code modifications without waiting for compilation.',
    distractors: [
      'Interpreted languages execute fifty times faster than bare-metal C++.',
      'Interpreted code eliminates the need for RAM memory allocation.',
      'Interpreted scripts run identically on processors that lack electric power.'
    ],
    why_correct: 'La ventaja por excelencia de los lenguajes interpretados es la inmediatez: el ciclo editar-ejecutar es instantáneo sin pausas de construcción de binarios.',
    why_wrong_map: {
      'Interpreted languages execute fifty times faster than bare-metal C++.': 'Al contrario, suelen ser más lentos en tareas intensivas de CPU.',
      'Interpreted code eliminates the need for RAM memory allocation.': 'Todos los programas en ejecución consumen memoria RAM.',
      'Interpreted scripts run identically on processors that lack electric power.': 'Distractor absurdo.'
    },
    tip: 'Beneficio de intérpretes: Prototipado rápido y retroalimentación inmediata sin tiempo de compilación.',
    topic: 'V02',
    objective: 'R4',
    human_rule: 'Ventaja de los lenguajes interpretados: puedes probar cambios al instante sin esperar a compilar.',
    trigger: 'benefit of using interpreters is -> test code modifications without waiting for compilation',
    trap: 'Asumir falsamente que los intérpretes son más rápidos en tiempo de ejecución que el código compilado.',
    usage: { scenario: 'Desarrollo Rápido de Scripts', en: 'Interpreted languages speed up debugging because you can test changes immediately.', es: 'Los lenguajes interpretados aceleran la depuración porque puedes probar los cambios de inmediato.' }
  }),
  createQuestion({
    id: 'it1-mod3-sec5-ex2-q6',
    sub: '3.5.3',
    num: 6,
    stem: 'How does Java share operational qualities of both a compiler and an interpreter?',
    correct: 'It compiles source code into portable bytecode, which is then interpreted or JIT-compiled by the virtual machine.',
    distractors: [
      'It compiles directly to silicon microcode while interpreting SQL queries in hardware.',
      'It generates analog audio signals that are translated by network modems.',
      'It runs only on single-threaded mainframe computers from the 1970s.'
    ],
    why_correct: 'Java compila el código fuente a bytecode (`.class`) multiplataforma, y luego la Máquina Virtual Java (JVM) interpreta o compila mediante JIT (Just-In-Time) dicho bytecode a código máquina nativo.',
    why_wrong_map: {
      'It compiles directly to silicon microcode while interpreting SQL queries in hardware.': 'Afirmación técnica sin sentido.',
      'It generates analog audio signals that are translated by network modems.': 'Completamente ajeno al software.',
      'It runs only on single-threaded mainframe computers from the 1970s.': 'Java es un lenguaje moderno multihilo multiplataforma.'
    },
    tip: 'Modelo híbrido de Java: [Source -> Bytecode -> JVM (Interpreter + JIT Compiler)].',
    topic: 'V02',
    objective: 'R5',
    human_rule: 'Java combina compilador e intérprete: compila a bytecode y la JVM lo interpreta o compila con JIT.',
    trigger: 'Java shares -> Qualities of both the compiler and the interpreter',
    trap: 'Creer que Java es puramente compilado nativo como C o puramente interpretado como Bash.',
    usage: { scenario: 'Arquitectura Empresarial Java', en: 'Java achieves portability by compiling to bytecode and executing via the JVM.', es: 'Java logra portabilidad compilando a bytecode y ejecutando a través de la JVM.' }
  })
];

module.exports = { items_mod3 };
