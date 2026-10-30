export interface OfficialIdiom {
  id: string;
  phrase: string;
  category: 'idiom' | 'grammar_pattern' | 'technical_usage';
  meaningEs: string;
  formula: string;
  contextIT: string;
  exampleEn: string;
  highlight: string;
  exampleEs: string;
  examKsa: string;
  tipEs: string;
  practiceItem: {
    stem: string;
    options: [string, string, string, string];
    answer: number;
    explanationEs: string;
    whyCorrectEs?: string;
    distractorWhyEs?: string[];
    humanRuleEs?: string;
    triggerEs?: string;
    trapEs?: string;
  };
}

export const OFFICIAL_SYLLABUS_IDIOMS: OfficialIdiom[] = [
  {
    id: 'idm-01',
    phrase: 'put my finger on something',
    category: 'idiom',
    meaningEs: 'Identificar con precisión la causa exacta de un problema técnico o anomalía.',
    formula: 'cannot put one\'s finger on + [the cause / what is wrong]',
    contextIT: 'Cuando la telemetría muestra lentitud o caídas pero los logs no arrojan errores explícitos.',
    examKsa: 'KSA 3.1.5: Use the phrase "put my finger on something" in an appropriate context',
    exampleEn: 'The packet latency is fluctuating wildly, but the network team cannot put their finger on the exact bottleneck.',
    highlight: 'cannot put their finger on the exact bottleneck',
    exampleEs: 'La latencia de paquetes fluctúa erráticamente, pero el equipo de redes no logra dar con el cuello de botella exacto.',
    tipEs: 'En el examen OpenEDG se usa en situaciones de troubleshooting para expresar que se percibe un fallo pero aún no se aísla la variable causante.',
    practiceItem: {
      stem: 'During the triage sync, the systems engineer admitted: "The cluster performance has degraded by 30%, but we still cannot ______ the root cause."',
      options: [
        'put our finger on',
        'hold our grip with',
        'set our hand upon',
        'lay our eyes on'
      ],
      answer: 0,
      explanationEs: 'La expresión idiomática formal evaluada en OpenEDG B2 es "put one\'s finger on" (= identificar o señalar con exactitud la causa).',
      whyCorrectEs: "• Pista: no pueden identificar con precisión la causa.\n• Regla: \"identificar con precisión\" ➔ put your finger on.\n• Descartas: las otras tres son calcos de \"poner el dedo\" que no existen en inglés.",
      distractorWhyEs: ["Incorrecto: \"hold our grip with\" no es un modismo.","Incorrecto: \"set our hand upon\" no es un modismo.","Incorrecto: \"lay our eyes on\" significa \"ver por primera vez\", no identificar una causa."],
      humanRuleEs: "\"Identificar con precisión\" ➔ put your finger on.",
      triggerEs: "we still cannot ______ the root cause ➔ put our finger on",
      trapEs: "Inventar la frase traduciendo \"poner el dedo\". Es un modismo fijo."
    }
  },
  {
    id: 'idm-02',
    phrase: 'root of the problem',
    category: 'idiom',
    meaningEs: 'La causa raíz o el origen fundamental del fallo técnico.',
    formula: 'get to / address / identify + the root of the problem',
    contextIT: 'Análisis de causa raíz (RCA) y reuniones postmortem tras resolver incidentes N2/N3.',
    examKsa: 'KSA 2.1.3: Employ the phrase "root of the problem"',
    exampleEn: 'Applying a quick reboot resolved the symptom, but we must inspect the thread dump to reach the root of the problem.',
    highlight: 'reach the root of the problem',
    exampleEs: 'Reiniciar resolvió el síntoma, pero debemos inspeccionar el volcado de hilos para llegar a la raíz del problema.',
    tipEs: 'Diferencia en el examen entre tratar el "symptom" (síntoma temporal) vs. "the root of the problem" (causa profunda).',
    practiceItem: {
      stem: 'Rather than continually restarting the leaking microservice, the DevOps team decided to investigate the memory heap to uncover the ______.',
      options: [
        'base of the trouble',
        'root of the problem',
        'stem of the issue',
        'foot of the difficulty'
      ],
      answer: 1,
      explanationEs: '"The root of the problem" es la colocación fija estándar en inglés de ingeniería para la causa raíz.',
      whyCorrectEs: "• Pista: buscan el origen de la falla en la memoria.\n• Regla: \"la causa raíz\" ➔ the root of the problem.\n• Descartas: \"base of the trouble\", \"stem of the issue\" y \"foot of the difficulty\" son calcos que no existen.",
      distractorWhyEs: ["Incorrecto: \"base of the trouble\" es un calco; no existe.","Incorrecto: \"stem of the issue\" es un calco; no existe.","Incorrecto: \"foot of the difficulty\" es un calco; no existe."],
      humanRuleEs: "\"La raíz del problema\" ➔ the root of the problem.",
      triggerEs: "to uncover the ______ ➔ root of the problem",
      trapEs: "Cambiar root por otra palabra de planta. El modismo usa root."
    }
  },
  {
    id: 'idm-03',
    phrase: 'keep me posted',
    category: 'idiom',
    meaningEs: 'Mantenme informado de los avances o novedades sobre un ticket o cambio.',
    formula: 'Please keep [someone] posted (on / about + status/progress)',
    contextIT: 'Cierre de llamadas entre ingenieros de turno o comunicaciones con el Lead de soporte.',
    examKsa: 'KSA 3.3.3: Employ the phrase "keep me posted" in a suitable setting',
    exampleEn: 'I have transferred the ticket to the datacenter technicians; please keep me posted once the optic module is replaced.',
    highlight: 'please keep me posted once the optic module is replaced',
    exampleEs: 'He transferido el ticket a los técnicos de datacenter; por favor mantenme al tanto una vez que reemplacen el módulo óptico.',
    tipEs: 'Fórmula de cortesía profesional entre colegas para solicitar actualizaciones continuas sin ser agresivo.',
    practiceItem: {
      stem: 'As the on-call engineer logged off, she told her backup colleague: "I initiated the database migration script. Please ______ if latency spikes above 20ms."',
      options: [
        'maintain me informed',
        'keep me noticed',
        'hold me updated',
        'keep me posted'
      ],
      answer: 3,
      explanationEs: '"Keep me posted" es el modismo profesional evaluado en B2 para "mantener informado".',
      whyCorrectEs: "• Pista: pide que la tengan al tanto de lo que pase.\n• Regla: \"mantenme al tanto\" ➔ keep me posted.\n• Descartas: \"maintain me informed\", \"keep me noticed\" y \"hold me updated\" son calcos que no existen.",
      distractorWhyEs: ["Incorrecto: \"maintain me informed\" es un calco; no existe.","Incorrecto: \"keep me noticed\" es un calco; no existe.","Incorrecto: \"hold me updated\" es un calco; no existe."],
      humanRuleEs: "\"Mantenme al tanto\" ➔ keep me posted.",
      triggerEs: "Please ______ if latency spikes (mantenme al tanto) ➔ keep me posted",
      trapEs: "Traducir \"mantenme informado\" palabra por palabra. El modismo es keep me posted."
    }
  },
  {
    id: 'idm-04',
    phrase: 'keep in mind',
    category: 'idiom',
    meaningEs: 'Tener en cuenta, considerar o recordar una condición crítica antes de actuar.',
    formula: 'Keep in mind that + [cláusula de instrucción técnica / restricción]',
    contextIT: 'Runbooks, políticas de despliegue y directivas de seguridad para administradores.',
    examKsa: 'KSA 4.2.3: Use the phrase "keep in mind" to give orders and instructions',
    exampleEn: 'Keep in mind that altering BGP route dampening timers during peak hours may trigger temporary packet drops.',
    highlight: 'Keep in mind that altering BGP route dampening',
    exampleEs: 'Ten en cuenta que modificar los temporizadores de amortiguamiento BGP en horas pico puede provocar caídas temporales de paquetes.',
    tipEs: 'Se utiliza como un imperativo diplomático en manuales y runbooks antes de comandos destructivos.',
    practiceItem: {
      stem: 'Before executing the partition resize command, engineers must ______ that all snapshot backups must be verified first.',
      options: [
        'store in memory',
        'take in brain',
        'keep in mind',
        'hold in head'
      ],
      answer: 2,
      explanationEs: '"Keep in mind that..." es la locución formal requerida en el syllabus de OpenEDG para instrucciones y advertencias previas.',
      whyCorrectEs: "• Pista: es un recordatorio antes de un comando.\n• Regla: \"tener presente\" ➔ keep in mind.\n• Descartas: las otras tres son calcos (\"guardar en la memoria\") que no existen.",
      distractorWhyEs: ["Incorrecto: \"store in memory\" es un calco; no existe.","Incorrecto: \"take in brain\" es un calco; no existe.","Incorrecto: \"hold in head\" es un calco; no existe."],
      humanRuleEs: "\"Tener presente\" ➔ keep in mind.",
      triggerEs: "engineers must ______ that all snapshots… ➔ keep in mind",
      trapEs: "Traducir \"tener en la cabeza\". El modismo es keep in mind."
    }
  },
  {
    id: 'idm-05',
    phrase: "there's no harm in [gerund]",
    category: 'idiom',
    meaningEs: 'No hay ningún riesgo ni inconveniente en probar una acción o verificación.',
    formula: "There is no harm in + [VERBO EN -ING]",
    contextIT: 'Persuadir a colegas o clientes para ejecutar una prueba diagnóstica no invasiva.',
    examKsa: "KSA 5.1.5: Use the phrase \"there's no harm in something\" to persuade",
    exampleEn: "There is no harm in running an isolated ping sweep from the secondary router to rule out physical interface errors.",
    highlight: "There is no harm in running an isolated ping sweep",
    exampleEs: 'No hay nada de malo en ejecutar un barrido de ping aislado desde el router secundario para descartar errores de interfaz física.',
    tipEs: 'Estructura clave para defender un punto de vista (sección UE5): siempre rige gerundio ("no harm in checking").',
    practiceItem: {
      stem: 'To persuade the hesitant customer, the lead engineer stated: "Since the gateway is in standby mode, there is no harm in ______ the diagnostic trace right now."',
      options: [
        'running',
        'ran',
        'run',
        'to run'
      ],
      answer: 0,
      explanationEs: 'La preposición "in" tras la fórmula persuasiva "there is no harm in" exige obligatoriamente un gerundio: "running".',
      whyCorrectEs: "• Pista: después de \"no harm in\" va un verbo con -ing.\n• Regla: palabra pequeña (in) + -ing ➔ no harm in running.\n• Descartas: ran, run y \"to run\" no van después de \"in\".",
      distractorWhyEs: ["Incorrecto: después de \"in\" no va el pasado.","Incorrecto: después de \"in\" va -ing, no el verbo base.","Incorrecto: después de \"in\" no va \"to\"."],
      humanRuleEs: "no harm in + verbo con -ing.",
      triggerEs: "there is no harm in ______ the trace ➔ running",
      trapEs: "Poner to + verbo como en español (\"no hay problema en correr\"). Después de in va -ing."
    }
  },
  {
    id: 'idm-06',
    phrase: "need + gerund (necesidad pasiva)",
    category: 'grammar_pattern',
    meaningEs: 'Expresar necesidad pasiva cuando un objeto inanimado requiere ser reparado o atendido.',
    formula: '[Dispositivo / Sistema inanimado] + NEEDS + [VERBO EN -ING]  (= needs to be + participio)',
    contextIT: 'Reporte rápido de infraestructura: el servidor necesita reiniciarse, el firmware necesita actualizarse.',
    examKsa: 'KSA 4.2.1: Use "need" with verbs in the gerund to express necessity',
    exampleEn: 'The perimeter firewall kernel crashed twice today; it clearly needs upgrading to the long-term support release.',
    highlight: 'needs upgrading (= needs to be upgraded)',
    exampleEs: 'El kernel del firewall perimetral cayó dos veces hoy; claramente necesita actualizarse a la versión con soporte extendido.',
    tipEs: '"The server needs rebooting" equivale exactamente a "The server needs to be rebooted". En el examen evalúan si reconoces el gerundio con significado pasivo.',
    practiceItem: {
      stem: 'According to the vulnerability scan report, the legacy domain controller has several unpatched exploits and urgently needs ______.',
      options: [
        'having patched',
        'patched',
        'to patch',
        'patching'
      ],
      answer: 3,
      explanationEs: 'Cuando el sujeto es un sistema o máquina ("the domain controller"), "needs + gerund" ("needs patching") expresa necesidad pasiva formal equivalente a "needs to be patched".',
      whyCorrectEs: "• Pista: el controlador recibe la acción: \"necesita ser parchado\".\n• Regla: cosa + needs + -ing ➔ needs patching.\n• Descartas: \"having patched\" y patched no encajan; \"to patch\" dice que el controlador parchea algo.",
      distractorWhyEs: ["Incorrecto: \"having patched\" habla del pasado.","Incorrecto: \"needs patched\" no es una forma válida.","Incorrecto: \"needs to patch\" diría que el controlador parchea algo."],
      humanRuleEs: "Cosa + needs + -ing ➔ \"necesita ser…\" (needs patching).",
      triggerEs: "the controller urgently needs ______ ➔ patching",
      trapEs: "Decir \"needs to patch\". Con una cosa que recibe la acción, va needs + -ing."
    }
  },
  {
    id: 'idm-07',
    phrase: "Should + inversión con omisión de 'if'",
    category: 'grammar_pattern',
    meaningEs: 'Condicional formal para hipótesis futuras en planes de contingencia omitiendo la conjunción "if".',
    formula: 'SHOULD + [Sujeto] + [VERBO BASE], [Cláusula principal con orden directo]',
    contextIT: 'Políticas de alta disponibilidad y manuales de respuesta a incidentes en centros de datos.',
    examKsa: 'KSA 5.1.1: Use "should" in hypothetical statements about present/near future with inversion and omission of "if"',
    exampleEn: 'Should the core uplink experience optical loss, the secondary SD-WAN circuit will automatically ingest all corporate branch traffic.',
    highlight: 'Should the core uplink experience optical loss',
    exampleEs: 'En caso de que el enlace ascendente principal sufra pérdida óptica, el circuito secundario SD-WAN absorberá automáticamente todo el tráfico de las sucursales.',
    tipEs: '"Should the router fail..." sustituye formalmente a "If the router fails...". El verbo tras el sujeto va en forma base desnuda sin "-s" de tercera persona.',
    practiceItem: {
      stem: '______ the backup generator fail to activate during a power outage, all non-critical servers will be shut down immediately.',
      options: [
        'Would',
        'Should',
        'Could',
        'Might'
      ],
      answer: 1,
      explanationEs: 'En estilo técnico formal B2, "Should + sujeto + verbo base" ("Should the generator fail") reemplaza a "If the generator should fail" con omisión de "if".',
      whyCorrectEs: "• Pista: la frase empieza con el verbo pequeño y sin \"if\": \"Si el generador fallara…\".\n• Regla: condicional sin if ➔ Should + sujeto + verbo.\n• Descartas: Would, Could y Might no forman esta estructura.",
      distractorWhyEs: ["Incorrecto: Would no se usa para abrir una condición sin if.","Incorrecto: Could no se usa para abrir una condición sin if.","Incorrecto: Might no se usa para abrir una condición sin if."],
      humanRuleEs: "Sin if: If the generator should fail ➔ Should the generator fail.",
      triggerEs: "______ the generator fail to activate… (si fallara) ➔ Should",
      trapEs: "Pensar que Should es un consejo. En este patrón significa \"en caso de que\"."
    }
  },
  {
    id: 'idm-08',
    phrase: "so as not to / in order not to (propósito negativo)",
    category: 'grammar_pattern',
    meaningEs: 'Para no provocar una consecuencia técnica adversa al ejecutar un cambio.',
    formula: '[Acción preventiva] + SO AS NOT TO / IN ORDER NOT TO + [VERBO BASE]',
    contextIT: 'Ventanas de mantenimiento, limitadores de ancho de banda y reguladores de tasa de peticiones.',
    examKsa: 'KSA 5.1.3: Express negative purpose with "so as/in order not to"',
    exampleEn: 'We scheduled the database index rebuild at 03:00 UTC so as not to degrade application responsiveness for daytime users.',
    highlight: 'so as not to degrade application responsiveness',
    exampleEs: 'Programamos la reconstrucción de índices de la base de datos a las 03:00 UTC para no degradar el tiempo de respuesta de la aplicación para los usuarios diurnos.',
    tipEs: 'La negación "not" se coloca SIEMPRE antes de la partícula "to": "so as NOT to disrupt", nunca *"so as to not disrupt"*.',
    practiceItem: {
      stem: 'The cloud orchestrator throttles telemetry streaming during peak billing hours ______ saturate the shared transit gateway.',
      options: [
        'so as to not',
        'for not to',
        'so as not to',
        'in order that not'
      ],
      answer: 2,
      explanationEs: 'La fórmula formal evaluada para propósito negativo es "so as not to + verbo base". La partícula "not" va antes de "to".',
      whyCorrectEs: "• Pista: explican el propósito de una limitación: evitar saturar.\n• Regla: \"para no…\" ➔ so as not to + verbo.\n• Descartas: \"for not to\" y \"in order that not\" no existen; \"so as to not\" también se ve, pero este ejercicio busca so as not to.",
      distractorWhyEs: ["Incorrecto: \"so as to not saturate\" también se usa en la práctica; este ejercicio busca \"so as not to\".","Incorrecto: \"for not to\" no es una forma válida.","Incorrecto: \"in order that not\" no es una forma válida."],
      humanRuleEs: "\"Para no…\" ➔ so as not to + verbo.",
      triggerEs: "throttles streaming ______ saturate the gateway (para no) ➔ so as not to",
      trapEs: "Poner la negación en un lugar distinto. La forma usual es so as NOT to."
    }
  },
  {
    id: 'idm-09',
    phrase: "Omisión de sujeto + 'be' tras 'if' (if applicable / if required)",
    category: 'grammar_pattern',
    meaningEs: 'Construcciones elípticas formales en directivas de procedimiento donde se suprimen el sujeto y el verbo to be.',
    formula: 'IF + [Adjetivo o Participio: necessary / applicable / required / possible]',
    contextIT: 'Instrucciones paso a paso en runbooks de TI y auditorías de configuración.',
    examKsa: 'KSA 1.2.4: Omit subject + "be" after "if" in fixed expressions',
    exampleEn: 'Review the firewall rule exceptions and, if necessary, disable unused outbound UDP ports.',
    highlight: 'and, if necessary, disable unused outbound UDP ports',
    exampleEs: 'Revise las excepciones de reglas de firewall y, de ser necesario, deshabilite los puertos UDP salientes no utilizados.',
    tipEs: 'En inglés formal no se escribe "if it is necessary", sino la forma elíptica concisa: "if necessary", "if required", "if applicable".',
    practiceItem: {
      stem: 'Inspect all third-party software dependencies and, if ______, update the cryptographic libraries to the latest patched version.',
      options: [
        'it applies',
        'applicably',
        'applicable',
        'is applicable'
      ],
      answer: 2,
      explanationEs: 'En expresiones condicionales fijas de manuales técnicos, se omite el sujeto y verbo "to be", quedando el adjetivo puro: "if applicable".',
      whyCorrectEs: "• Pista: es una abreviatura de \"si es aplicable\" dentro de una instrucción.\n• Regla: \"si procede\" ➔ if applicable.\n• Descartas: \"it applies\" y \"is applicable\" también son posibles con \"it\"; \"applicably\" no es un adjetivo.",
      distractorWhyEs: ["Incorrecto: \"if it applies\" también es válido, pero este ejercicio busca la forma corta \"if applicable\".","Incorrecto: applicably es un adverbio y aquí hace falta un adjetivo.","Incorrecto: \"if is applicable\" no tiene sujeto; se diría \"if it is applicable\"."],
      humanRuleEs: "\"Si procede\" ➔ if applicable.",
      triggerEs: "and, if ______, update the libraries ➔ applicable",
      trapEs: "Alargar la frase con \"it is\". En las instrucciones se usa la forma corta."
    }
  },
  {
    id: 'idm-10',
    phrase: "Mixed Conditional: Resultado presente de acción pasada",
    category: 'grammar_pattern',
    meaningEs: 'Hipótesis sobre cómo una acción omitida en el pasado afectaría el estado actual del sistema.',
    formula: 'IF + [had + participio], [sujeto] + WOULD + [verbo base en presente]',
    contextIT: 'Evaluaciones post-incidente: cómo un cambio ayer habría evitado el estado caído hoy.',
    examKsa: 'KSA 2.2.4: Describe hypothetical current results of a past action or situation using "would..." with the third conditional',
    exampleEn: 'If the security operations team had deployed the security patch on Friday, our primary portal would be fully online right now.',
    highlight: 'had deployed... would be fully online right now',
    exampleEs: 'Si el equipo de operaciones de seguridad hubiera desplegado el parche el viernes, nuestro portal principal estaría completamente en línea ahora mismo.',
    tipEs: 'Atención a marcadores temporales contrapuestos: "on Friday / yesterday" (pasado -> had + participio) frente a "now / right now / today" (presente -> would + base).',
    practiceItem: {
      stem: 'If the storage engineers had provisioned redundant disks during the upgrade yesterday, the database cluster ______ fully operational today.',
      options: [
        'would have been',
        'would be',
        'will be',
        'had been'
      ],
      answer: 1,
      explanationEs: 'Condicional mixto: la condición ocurrió en el pasado ("yesterday" -> had provisioned), pero el resultado evaluado es el estado presente ("today" -> would be).',
      whyCorrectEs: "• Pista: el \"if\" habla de algo que no pasó ayer (\"had provisioned\"), y el resultado se ve hoy (\"today\").\n• Regla: causa pasada + efecto en el presente ➔ would + verbo (would be).\n• Descartas: \"would have been\" habla del pasado; will be es futuro real; \"had been\" no encaja con \"if… had\".",
      distractorWhyEs: ["Incorrecto: \"would have been\" habla del pasado, y la frase pide el resultado de hoy.","Incorrecto: will be habla de algo real en el futuro, y la condición no ocurrió.","Incorrecto: \"had been\" no se usa en el resultado."],
      humanRuleEs: "If + had + 3.ª forma (ayer), would + verbo (hoy).",
      triggerEs: "If the engineers had provisioned… yesterday, the cluster ______ operational today ➔ would be",
      trapEs: "Usar would have been por \"si hubieran… estaría\". El resultado es de hoy: would be."
    }
  },
  {
    id: 'idm-11',
    phrase: "one's (posesivo impersonal formal)",
    category: 'grammar_pattern',
    meaningEs: 'Pronombre posesivo impersonal para normas generales en códigos de conducta corporativos.',
    formula: 'one + must protect / verify + ONE\'S [credenciales / equipo]',
    contextIT: 'Políticas formales de seguridad de la información y manuales de conducta de empleados.',
    examKsa: "KSA 1.1.4: Use \"one's\" as an impersonal possessive adjective",
    exampleEn: "In accordance with our zero-trust policy, one must never leave one's workstation unlocked when departing the server room.",
    highlight: "leave one's workstation unlocked",
    exampleEs: "De acuerdo con nuestra política de confianza cero, uno nunca debe dejar su estación de trabajo desbloqueada al salir de la sala de servidores.",
    tipEs: 'Si la oración parte con el pronombre impersonal "one", el posesivo correspondiente es "one\'s". En inglés técnico actual lo habitual es "their" (ver G17), así que este ítem es de reconocimiento de registro formal.',
    practiceItem: {
      stem: 'The corporate security handbook instructs that one should always safeguard ______ multi-factor physical hardware token against unauthorized access.',
      options: [
        'one',
        'his or her',
        'ones',
        "one's"
      ],
      answer: 3,
      explanationEs: 'El adjetivo posesivo formal que concuerda con el pronombre impersonal "one" es "one\'s" (con apóstrofo s).',
      whyCorrectEs: "• Pista: la frase usa \"one\" (alguien en general), y el posesivo debe seguir a \"one\".\n• Regla: one ➔ one's.\n• Descartas: \"one\" y \"ones\" no son posesivos; \"his or her\" también es posible, pero rompe la consistencia con \"one\".",
      distractorWhyEs: ["Incorrecto: one sin 's no es un posesivo.","Incorrecto: \"his or her\" también es posible, pero este ejercicio busca la forma coherente con \"one\".","Incorrecto: ones no es un posesivo."],
      humanRuleEs: "Con \"one\" (alguien en general), el posesivo es one's.",
      triggerEs: "one should always safeguard ______ token ➔ one's",
      trapEs: "Mezclar one con his or her. Si empiezas con one, sigue con one's."
    }
  },
  {
    id: 'idm-12',
    phrase: "pressing (urgencia técnica) e impact (verbo)",
    category: 'technical_usage',
    meaningEs: 'Uso de "pressing" para vulnerabilidades o incidencias de máxima prioridad, e "impact" como verbo transitivo.',
    formula: 'a pressing vulnerability / issue  |  [incidente] impacted [servicios]',
    contextIT: 'Clasificación de severidad de tickets y reportes ejecutivos de afectación de clientes.',
    examKsa: 'KSA 4.1.3 (pressing as adjective to stress urgency) & KSA 5.2.1 (impact as a verb)',
    exampleEn: 'Zero-day vulnerability CVE-20XX-XXXX is our most pressing concern, as it directly impacted three public-facing gateway hosts.',
    highlight: 'pressing concern... directly impacted three public-facing gateway hosts',
    exampleEs: 'La vulnerabilidad de día cero CVE-20XX-XXXX es nuestra preocupación más apremiante, ya que impactó directamente a tres hosts gateway expuestos.',
    tipEs: '"Pressing" = apremiante / urgente (sustituto formal de "urgent"). "Impact" se usa como verbo activo transitivo ("impacted the system", evitando *"impacted on the system"* en redacción formal).',
    practiceItem: {
      stem: 'The CISO stressed that mitigating the edge route hijacking is our most ______ priority because the outage ______ critical financial transaction services.',
      options: [
        'pressing / impacted',
        'pressed / impacting',
        'press / has impacted on',
        'pressing / was impact'
      ],
      answer: 0,
      explanationEs: '"Pressing" es el adjetivo formal para calificar máxima urgencia ("pressing priority"), e "impacted" se usa como verbo transitivo directo.',
      whyCorrectEs: "• Pista: el primer hueco describe la prioridad (\"urgente\") y el segundo habla de algo que ya pasó (la caída).\n• Regla: \"most pressing\" = \"la más urgente\"; la caída ya pasó ➔ pasado (impacted).\n• Descartas: pressed e \"impact\" no son el adjetivo o el tiempo correctos.",
      distractorWhyEs: ["Incorrecto: pressed no es el adjetivo para \"urgente\" (es pressing); y \"impacting\" no es el pasado.","Incorrecto: press no es el adjetivo; y \"has impacted on\" lleva \"on\" de más.","Incorrecto: \"was impact\" no es una forma válida."],
      humanRuleEs: "\"La más urgente\" ➔ most pressing. Lo que ya pasó ➔ pasado (impacted).",
      triggerEs: "most ______ priority because the outage ______ services ➔ pressing / impacted",
      trapEs: "Poner la forma incorrecta del adjetivo (pressed) o añadir \"on\" a impact. En inglés, impact se usa sin preposición."
    }
  }
];
