import { StrategyLesson, LObjective, RObjective } from '../types';

/**
 * Strategy lessons for the Listening (L1–L5) and Reading (R1–R5) sections.
 * Each lesson ends with original practice items written in the official EIT-B2 item formats
 * (complete the sentence, whose opinion, agrees/neither, which paragraph, select the answer).
 */

const LISTENING_LESSONS: StrategyLesson[] = [
  {
    objective: 'L1',
    section: 'L',
    titleEs: 'Entender la intención de una frase',
    officialSkill: 'Pick out key information from a conversation',
    shortcut: [
      { cue: 'Frase suave (I’d…, I’m not sure…)', action: 'Es sugerencia o desacuerdo, no una orden.' },
      { cue: '“…, though” al final', action: 'Pone un límite a lo que acaba de decir.' },
      { cue: 'Opción con never / at all', action: 'Casi siempre es un distractor.' }
    ],
    whatItTestsEs:
      'Te preguntan qué quiere decir alguien con una frase concreta: si pide algo, sugiere, rechaza, acepta o advierte. En inglés profesional casi nadie dice “no” directamente, así que la intención va escondida en frases suaves.',
    steps: [
      { title: 'Lee la pregunta antes del audio', body: 'Identifica quién habla y qué frase te preguntan. Así sabes en qué momento poner toda tu atención.' },
      { title: 'Clasifica la frase por su función', body: '¿Es una petición, una sugerencia, un rechazo, un acuerdo o una advertencia? Elige la función antes de mirar las opciones.' },
      { title: 'Escucha la razón que viene después', body: 'La intención casi siempre se confirma en la frase siguiente: “…until Monday, when everyone’s around to monitor it”.' },
      { title: 'Descarta las opciones extremas', body: 'Si la opción dice “refuses completely” o “never”, es más fuerte que lo que se dijo. El inglés de oficina suaviza.' }
    ],
    signals: [
      { en: 'I’d hold off until…', es: 'Sugiere esperar. No es un “no”.' },
      { en: 'I’m not sure that’s the best idea.', es: 'Desacuerdo educado.' },
      { en: 'Could you at least…?', es: 'Petición mínima después de aceptar un “no”.' },
      { en: '…, though.', es: 'Al final de la frase: limita lo anterior (“aunque…”).' },
      { en: 'Fair enough.', es: 'Acepta el argumento. No significa “justo”.' }
    ],
    traps: [
      { trap: 'Traducir palabra por palabra', why: '“Fair enough” no habla de justicia: es “vale, tiene sentido”. La opción con “unfair” busca que traduzcas literal.' },
      { trap: 'La opción exagerada', why: '“Refusing to approve the hotfix at all” convierte una sugerencia de esperar en un rechazo total.' },
      { trap: 'Palabras del audio con otro sentido', why: '“Monday morning” aparece en el audio, pero no como un día para trabajar más: es cuando habrá gente para vigilar el cambio.' }
    ],
    audio: {
      id: 'strat-l1',
      title: 'Friday afternoon hotfix',
      scenario: 'A developer asks the team lead about deploying a hotfix on a Friday afternoon.',
      speakers: [
        { id: 'Tom', role: 'Tom (Developer)', accentPreference: 'en-US' },
        { id: 'Priya', role: 'Priya (Team lead)', accentPreference: 'en-GB' }
      ],
      lines: [
        { s: 'Tom', t: 'Hi Priya, the hotfix for the login timeout is ready. I was thinking of pushing it to production this afternoon.' },
        { s: 'Priya', t: 'This afternoon? It’s Friday, and half the support team is already off.' },
        { s: 'Tom', t: 'I know, but customers have been complaining about it all week.' },
        { s: 'Priya', t: 'I get that. Still, I’d hold off until Monday morning, when everyone’s around to monitor it.' },
        { s: 'Tom', t: 'Fair enough. Could you at least take a quick look at the pull request before you leave?' },
        { s: 'Priya', t: 'Sure, send it over. I can’t promise a full review, though.' },
        { s: 'Tom', t: 'No problem, a quick sanity check is fine.' },
        { s: 'Priya', t: 'Great. And let the support team know a fix is on the way, so they can tell customers.' }
      ]
    },
    check: [
      {
        format: 'complete',
        instruction: 'Listen to a developer speaking with his team lead, then select the correct answer option to complete the sentence.',
        stem: 'When Priya says “I’d hold off until Monday morning”, she is:',
        options: [
          'refusing to approve the hotfix at all.',
          'recommending that Tom delays the release.',
          'asking Tom to work on Monday morning.',
          'suggesting that the fix is not ready yet.'
        ],
        answer: 1,
        whyEs: '“Hold off” significa esperar o posponer. Priya da la razón enseguida (que haya gente para vigilarlo), así que es una recomendación, no un rechazo.',
        evidence: 'I’d hold off until Monday morning, when everyone’s around to monitor it.'
      },
      {
        format: 'complete',
        instruction: 'Select the correct answer option to complete the sentence.',
        stem: 'Priya’s reply “I can’t promise a full review, though” means that she:',
        options: [
          'does not have time to look at the code.',
          'thinks the code contains too many errors.',
          'will only check the code briefly.',
          'will review the code fully on Monday.'
        ],
        answer: 2,
        whyEs: 'Acepta mirar el código (“Sure, send it over”) y el “though” final limita esa promesa: lo revisará, pero solo por encima.',
        evidence: 'Sure, send it over. I can’t promise a full review, though.'
      },
      {
        format: 'complete',
        instruction: 'Select the correct answer option to complete the sentence.',
        stem: 'When Tom says “Fair enough”, he shows that he:',
        options: [
          'accepts Priya’s reasoning.',
          'thinks Priya’s decision is unfair.',
          'is annoyed but will not argue.',
          'wants to discuss the release again later.'
        ],
        answer: 0,
        whyEs: '“Fair enough” es una forma de aceptar un argumento. Después Tom pasa a otra petición, sin discutir.',
        evidence: 'Fair enough. Could you at least take a quick look at the pull request before you leave?'
      }
    ]
  },

  {
    objective: 'L2',
    section: 'L',
    titleEs: 'Captar el tema de toda la conversación',
    officialSkill: 'Take part in discussions and exchange information as needed',
    shortcut: [
      { cue: 'Primeras 2–3 frases', action: 'Ahí se anuncia el tema: “I wanted to talk about…”.' },
      { cue: 'Final de la conversación', action: 'Ahí está el acuerdo: “I’ll…”, “Let’s…”.' },
      { cue: 'Opción que es solo un detalle', action: 'Descártala: el tema cubre toda la conversación.' }
    ],
    whatItTestsEs:
      'Te preguntan de qué trata la conversación en conjunto, qué deciden o quién opina qué. El examen usa la pregunta “Whose opinion matches the statement… the woman, the man, or both?” con solo tres opciones.',
    steps: [
      { title: 'Escucha cómo empieza', body: 'Quien convoca la conversación suele decir el propósito en la primera intervención.' },
      { title: 'Escucha cómo termina', body: 'El acuerdo final (“I’ll draft the email”, “Let’s review it on Monday”) confirma el tema y la decisión.' },
      { title: 'Prueba cada opción con “¿resume TODO?”', body: 'Si la opción solo describe una parte (un detalle, una propuesta que se rechazó), no es el tema.' },
      { title: 'En “¿de quién es la opinión?”, busca acuerdos', body: '“I agree”, “Exactly”, “That’s what I was thinking” convierten una idea de uno en una opinión de ambos.' }
    ],
    signals: [
      { en: 'I wanted to talk about…', es: 'Anuncia el tema.' },
      { en: 'My question is…', es: 'Marca el problema central.' },
      { en: 'Let’s not go that far yet.', es: 'Rechaza una propuesta: ese detalle no es la decisión.' },
      { en: 'I agree. / Exactly.', es: 'La opinión pasa a ser de los dos.' },
      { en: 'In the meantime…', es: 'Mientras tanto: lo que se hace antes de la solución definitiva.' }
    ],
    traps: [
      { trap: 'Un detalle verdadero pero parcial', why: 'El descuento se menciona, pero se descarta. Aparece en el audio, pero no es de lo que trata la conversación.' },
      { trap: 'La causa en lugar del tema', why: 'Hablan de un problema de sincronización, pero el tema es cómo comunicarlo a los clientes, no por qué ocurrió.' },
      { trap: '“Man” o “Woman” cuando el otro está de acuerdo', why: 'Si uno propone y el otro dice “I agree”, la respuesta es “Both”.' }
    ],
    audio: {
      id: 'strat-l2',
      title: 'Duplicated invoices',
      scenario: 'A support manager and a Tier 2 agent discuss clients affected by a data synchronisation problem.',
      speakers: [
        { id: 'Elena', role: 'Elena (Support manager)', accentPreference: 'en-GB' },
        { id: 'Raj', role: 'Raj (Tier 2 agent)', accentPreference: 'en-IN' }
      ],
      lines: [
        { s: 'Elena', t: 'Thanks for coming in, Raj. I wanted to talk about how we handle the sync problem from Tuesday.' },
        { s: 'Raj', t: 'Sure. Most accounts are back to normal now, but about forty clients still see duplicated invoices.' },
        { s: 'Elena', t: 'Right. The engineers say the duplicates will be removed automatically tonight. My question is what we tell those forty clients in the meantime.' },
        { s: 'Raj', t: 'Honestly, I’d contact them proactively. Some of them have already noticed and opened tickets.' },
        { s: 'Elena', t: 'I agree. I don’t want them to find out from their accountants.' },
        { s: 'Raj', t: 'Should we offer them anything? A discount, maybe?' },
        { s: 'Elena', t: 'Let’s not go that far yet. A clear explanation and a timeline should be enough for now.' },
        { s: 'Raj', t: 'OK. I’ll draft the email and send it to you before lunch.' },
        { s: 'Elena', t: 'Perfect. Keep it short and avoid technical details.' }
      ]
    },
    check: [
      {
        format: 'complete',
        instruction: 'Listen to an agent speaking with their manager, then select the correct answer option to complete the sentence.',
        stem: 'The conversation is mainly about:',
        options: [
          'why the invoices were duplicated on Tuesday.',
          'how to inform affected clients about a known problem.',
          'whether clients should receive a discount.',
          'how the engineers will remove the duplicated invoices.'
        ],
        answer: 1,
        whyEs: 'Elena lo dice al principio y lo repite: qué decir a los clientes afectados. La causa, el descuento y el trabajo de los ingenieros son detalles.',
        evidence: 'My question is what we tell those forty clients in the meantime.'
      },
      {
        format: 'whose_opinion',
        instruction: 'Whose opinion matches the statement, the woman, the man, or both the woman and the man?',
        stem: 'The affected clients should be contacted before they find out about the problem themselves.',
        options: ['Both', 'Man', 'Woman'],
        answer: 0,
        whyEs: 'Raj propone contactarlos de forma proactiva y Elena responde “I agree”. La opinión es de los dos.',
        evidence: 'Honestly, I’d contact them proactively. … I agree.'
      },
      {
        format: 'complete',
        instruction: 'Select the correct answer option to complete the sentence.',
        stem: 'At the end of the conversation, the speakers agree that Raj will:',
        options: [
          'offer the clients a small discount.',
          'explain the technical cause to the clients.',
          'wait until the duplicates are removed.',
          'write a short message for the affected clients.'
        ],
        answer: 3,
        whyEs: 'Raj se compromete a redactar el email y Elena le pide que sea corto y sin detalles técnicos. El descuento fue rechazado.',
        evidence: 'I’ll draft the email and send it to you before lunch.'
      }
    ]
  },

  {
    objective: 'L3',
    section: 'L',
    titleEs: 'Inferir actitud y preocupaciones',
    officialSkill: 'Identify concerns about an issue, product, service, or business situation',
    shortcut: [
      { cue: '“again”, “the third time”', action: 'Frustración por un problema que se repite.' },
      { cue: '“To be honest, …”', action: 'Lo que viene es la preocupación real.' },
      { cue: 'Opción de tono extremo', action: 'Descártala: el tono del examen es moderado.' }
    ],
    whatItTestsEs:
      'Te preguntan lo que alguien piensa o siente sin decirlo directamente: su preocupación, su actitud o lo que da a entender. La respuesta no está en una sola palabra; la deduces de varias frases.',
    steps: [
      { title: 'Separa lo que dice de lo que quiere decir', body: '“My manager is asking about other providers” no habla de otros proveedores: es una advertencia de que pueden irse.' },
      { title: 'Escucha los marcadores de actitud', body: '“again”, “to be honest”, “I just need”, “the third time this month” revelan emoción y urgencia.' },
      { title: 'Elige el tono equilibrado', body: 'En situaciones de trabajo la gente está frustrada pero es educada. “Angry and threatening” casi nunca es correcto.' },
      { title: 'Justifica la inferencia con una frase', body: 'Si no puedes señalar qué frase del audio la apoya, la opción es una suposición tuya: descártala.' }
    ],
    signals: [
      { en: 'I’m calling about the outage again.', es: 'No es la primera vez: hay frustración acumulada.' },
      { en: 'To be honest, …', es: 'Introduce la preocupación de fondo.' },
      { en: 'My manager has started asking whether…', es: 'Advertencia indirecta: hay riesgo para la relación comercial.' },
      { en: 'I just need something concrete.', es: 'Urgencia: quiere hechos, no disculpas.' },
      { en: 'I’m sorry to hear that.', es: 'Empatía del agente, no admisión de culpa.' }
    ],
    traps: [
      { trap: 'Tono exagerado', why: 'Laura está molesta, pero colabora y da las gracias. “Angry and threatening” no encaja con su forma de hablar.' },
      { trap: 'Inferencia sin base', why: '“Her manager wants a cheaper plan”: nadie habla de precio. Suena lógico, pero no está en el audio.' },
      { trap: 'Confundir pasado y presente', why: 'El servicio volvió hace diez minutos. La opción “still unavailable” cambia el tiempo del problema.' }
    ],
    audio: {
      id: 'strat-l3',
      title: 'Third outage this month',
      scenario: 'A logistics client calls cloud support about a recurring storage outage.',
      speakers: [
        { id: 'Sam', role: 'Sam (Cloud support agent)', accentPreference: 'en-AU' },
        { id: 'Laura', role: 'Laura (Client, Brightline Logistics)', accentPreference: 'en-US' }
      ],
      lines: [
        { s: 'Sam', t: 'Good morning, cloud support, Sam speaking. How can I help?' },
        { s: 'Laura', t: 'Hi Sam. This is Laura from Brightline Logistics. I’m calling about the storage outage again.' },
        { s: 'Sam', t: 'I’m sorry to hear that. Is the service down at the moment?' },
        { s: 'Laura', t: 'No, it came back about ten minutes ago. But this is the third time this month, and each time it happens right when our drivers upload their delivery reports.' },
        { s: 'Sam', t: 'I see. I can open a priority ticket and ask our engineers for a root cause analysis.' },
        { s: 'Laura', t: 'That would help. To be honest, my manager has started asking whether we should look at other providers.' },
        { s: 'Sam', t: 'I understand. I’ll make sure the ticket mentions the previous two incidents as well.' },
        { s: 'Laura', t: 'Thanks. I just need something concrete I can show him by Friday.' }
      ]
    },
    check: [
      {
        format: 'complete',
        instruction: 'Listen to a client speaking with a support agent, then select the correct answer option to complete the sentence.',
        stem: 'When Laura mentions that her manager is asking about other providers, she suggests that:',
        options: [
          'her company may stop using the service.',
          'her manager wants a cheaper plan.',
          'she wants Sam to recommend another provider.',
          'her manager caused the outages.'
        ],
        answer: 0,
        whyEs: 'Es una advertencia indirecta: si el problema sigue, pueden cambiar de proveedor. Nadie menciona precios ni pide recomendaciones.',
        evidence: 'To be honest, my manager has started asking whether we should look at other providers.'
      },
      {
        format: 'select',
        instruction: 'Select the correct answer option.',
        stem: 'How would you describe Laura’s attitude during the call?',
        options: [
          'Angry and threatening.',
          'Calm and completely satisfied.',
          'Frustrated but cooperative.',
          'Confused about the problem.'
        ],
        answer: 2,
        whyEs: 'Muestra frustración (“again”, “the third time”), pero acepta la propuesta (“That would help”) y da las gracias.',
        evidence: 'But this is the third time this month… That would help.'
      },
      {
        format: 'select',
        instruction: 'Select the correct answer option.',
        stem: 'Why does Laura mention that the outages happen when drivers upload their reports?',
        options: [
          'To explain how to reproduce the error.',
          'To show that the problem affects a critical part of her business.',
          'To complain about her drivers.',
          'To ask for a larger storage plan.'
        ],
        answer: 1,
        whyEs: 'Explica cuándo duele el problema: justo en un proceso clave de su empresa. Es una forma de mostrar el impacto, no una instrucción técnica.',
        evidence: 'each time it happens right when our drivers upload their delivery reports.'
      }
    ]
  },

  {
    objective: 'L4',
    section: 'L',
    titleEs: 'Seguir el orden y los contrastes',
    officialSkill: 'Take part in discussions and exchange information as needed',
    shortcut: [
      { cue: 'First / Once / after / last', action: 'Dibuja una línea de tiempo mientras escuchas.' },
      { cue: '“It would, but…”', action: 'Concede y luego rechaza: lo importante va después del but.' },
      { cue: 'Opción con el orden cambiado', action: 'Comprueba: ¿antes o después?' }
    ],
    whatItTestsEs:
      'Te preguntan en qué orden pasan las cosas, por qué alguien rechaza una idea o qué ocurre “a pesar de” algo. La clave está en los conectores: first, once, after, but, even so, instead.',
    steps: [
      { title: 'Haz una línea de tiempo', body: 'Anota con una palabra cada paso: “copy → lab test → branches → head office”.' },
      { title: 'Atención a lo que va después de but / however', body: 'Lo primero suele ser una concesión; la idea que cuenta viene después.' },
      { title: 'Separa la razón de la concesión', body: 'En “It would [be faster], but if something goes wrong…”, la razón del rechazo es el riesgo, no la velocidad.' },
      { title: 'Revisa el orden en cada opción', body: 'Los distractores repiten los mismos pasos, pero en otro orden o mezclados.' }
    ],
    signals: [
      { en: 'First, … / Once the tests pass, …', es: 'Paso 1 / cuando termine eso, paso 2.' },
      { en: 'starting with Madrid', es: 'Madrid es el primero de una serie.' },
      { en: 'It would, but…', es: 'Sí, es cierto, pero… (rechazo educado).' },
      { en: 'goes last, after…', es: 'Último paso, después de lo anterior.' },
      { en: 'Even so, …', es: 'Aun así: añade una precaución.' }
    ],
    traps: [
      { trap: 'El orden invertido', why: '“Before the rules are copied” usa palabras del audio, pero en el orden contrario.' },
      { trap: 'La razón que el hablante concedió', why: 'Kenji admite que hacerlo todo junto sería más rápido. “It would take longer” contradice justo lo que concede.' },
      { trap: 'Mezclar dos pasos', why: '“The old firewall will be used to test the rules” junta el viejo firewall con la prueba en el laboratorio, que son cosas distintas.' }
    ],
    audio: {
      id: 'strat-l4',
      title: 'Firewall migration plan',
      scenario: 'A network engineer explains a migration plan to a project manager during a stand-up meeting.',
      speakers: [
        { id: 'Anna', role: 'Anna (Project manager)', accentPreference: 'en-GB' },
        { id: 'Kenji', role: 'Kenji (Network engineer)', accentPreference: 'en-US' }
      ],
      lines: [
        { s: 'Anna', t: 'Kenji, can you walk us through the firewall migration plan?' },
        { s: 'Kenji', t: 'Sure. First, we’ll copy the current rules to the new firewall and test them in a lab environment.' },
        { s: 'Kenji', t: 'Once the tests pass, we’ll move the branch offices one at a time, starting with Madrid.' },
        { s: 'Anna', t: 'Why not move all the branches together? It would be faster.' },
        { s: 'Kenji', t: 'It would, but if something goes wrong, every office loses connectivity at the same time. Moving them one by one limits the impact.' },
        { s: 'Anna', t: 'Makes sense. And the head office?' },
        { s: 'Kenji', t: 'The head office goes last, after all the branches are stable. Even so, we’ll keep the old firewall running for a week as a fallback.' },
        { s: 'Anna', t: 'Good. Let’s review progress after the Madrid switch.' }
      ]
    },
    check: [
      {
        format: 'complete',
        instruction: 'Listen to a project manager and a network engineer, then select the correct answer option to complete the sentence.',
        stem: 'According to Kenji, the branch offices will be moved:',
        options: [
          'before the rules are copied to the new firewall.',
          'at the same time as the head office.',
          'after the rules have been tested in the lab.',
          'only if the head office is stable.'
        ],
        answer: 2,
        whyEs: '“Once the tests pass” marca el orden: primero la prueba en laboratorio, después las sucursales. La sede central va al final, no antes.',
        evidence: 'Once the tests pass, we’ll move the branch offices one at a time, starting with Madrid.'
      },
      {
        format: 'complete',
        instruction: 'Select the correct answer option to complete the sentence.',
        stem: 'Kenji does not want to move all the branches together because:',
        options: [
          'it would take longer than planned.',
          'a failure would affect every office at once.',
          'the Madrid office is not ready yet.',
          'the old firewall cannot be used.'
        ],
        answer: 1,
        whyEs: 'Con “It would, but…” concede que sería más rápido y da la razón real después del “but”: el riesgo de dejar sin conexión a todas las oficinas a la vez.',
        evidence: 'It would, but if something goes wrong, every office loses connectivity at the same time.'
      },
      {
        format: 'complete',
        instruction: 'Select the correct answer option to complete the sentence.',
        stem: 'After the head office is moved, the old firewall will:',
        options: [
          'be removed as soon as possible.',
          'be used to test the rules in the lab.',
          'replace the new firewall in the head office.',
          'remain available for a week as a backup.'
        ],
        answer: 3,
        whyEs: '“Even so” añade una precaución: el firewall viejo sigue funcionando una semana como respaldo (“fallback” ≈ “backup”).',
        evidence: 'Even so, we’ll keep the old firewall running for a week as a fallback.'
      }
    ]
  },

  {
    objective: 'L5',
    section: 'L',
    titleEs: 'Captar datos concretos: números, fechas y nombres',
    officialSkill: 'Pick out key information from a conversation',
    shortcut: [
      { cue: '“No, we changed it to…”', action: 'El dato correcto es el que viene ahora.' },
      { cue: '“Sorry, …” / “actually”', action: 'Corrección: descarta lo que oíste antes.' },
      { cue: 'Primer número que oyes', action: 'Suele ser el distractor.' }
    ],
    whatItTestsEs:
      'Te piden un dato exacto: un puerto, una fecha, una cantidad, un nombre. El examen casi siempre lo complica con una corrección: alguien dice un dato y luego lo cambia.',
    steps: [
      { title: 'Decide qué tipo de dato buscas', body: 'Antes de escuchar, mira la pregunta: ¿número, fecha, día de la semana, nombre?' },
      { title: 'Anota todos los candidatos', body: 'Escribe cada número o fecha que oigas. No elijas el primero.' },
      { title: 'Vigila las correcciones', body: '“No, …”, “Sorry, …”, “Actually, …” anulan el dato anterior.' },
      { title: 'Quédate con la última versión confirmada', body: 'La respuesta es el dato que nadie corrige después.' }
    ],
    signals: [
      { en: 'And the port is still 5432?', es: 'Pregunta si cambió: la respuesta trae el dato nuevo.' },
      { en: 'No, we changed it to 6432.', es: 'Corrección: este es el valor actual.' },
      { en: 'Sorry, Wednesday the 14th.', es: 'Corrige el día anterior.' },
      { en: 'Two, actually.', es: '“Actually” corrige a la otra persona.' },
      { en: 'until Thursday / after that', es: '“Hasta” y “a partir de entonces”: definen el plazo.' }
    ],
    traps: [
      { trap: 'El dato antiguo', why: '5432 se dice en el audio, pero es el puerto que cambiaron.' },
      { trap: 'Dígitos invertidos', why: '6423 se parece a 6432. En el examen, los números distractores son muy parecidos al correcto.' },
      { trap: 'El dato que otra persona corrigió', why: 'Leila dice “three days”, pero Jordan la corrige: “Two, actually”.' }
    ],
    audio: {
      id: 'strat-l5',
      title: 'Staging database move',
      scenario: 'A developer asks a system administrator why she cannot connect to the staging database.',
      speakers: [
        { id: 'Leila', role: 'Leila (Developer)', accentPreference: 'en-US' },
        { id: 'Jordan', role: 'Jordan (System administrator)', accentPreference: 'en-GB' }
      ],
      lines: [
        { s: 'Leila', t: 'Jordan, the staging database isn’t accepting connections. Did something change?' },
        { s: 'Jordan', t: 'Yes, we moved it to a new server last night. The address is 10.20.4.15.' },
        { s: 'Leila', t: 'And the port is still 5432?' },
        { s: 'Jordan', t: 'No, we changed it to 6432 because we added a connection pooler.' },
        { s: 'Leila', t: 'Got it. Are the old credentials still valid?' },
        { s: 'Jordan', t: 'They are until Thursday. After that, you’ll need the new ones from the password vault.' },
        { s: 'Leila', t: 'Thursday the 14th?' },
        { s: 'Jordan', t: 'Sorry, Wednesday the 14th. Thursday is the 15th.' },
        { s: 'Leila', t: 'OK, so I have three days to update the config files.' },
        { s: 'Jordan', t: 'Two, actually. Today’s the 12th.' }
      ]
    },
    check: [
      {
        format: 'complete',
        instruction: 'Listen to a developer and a system administrator, then select the correct answer option to complete the sentence.',
        stem: 'The staging database now uses port:',
        options: ['5432', '6423', '6432', '4015'],
        answer: 2,
        whyEs: 'Leila pregunta si sigue siendo 5432 y Jordan corrige: “No, we changed it to 6432”. 6423 tiene los dígitos invertidos.',
        evidence: 'No, we changed it to 6432 because we added a connection pooler.'
      },
      {
        format: 'complete',
        instruction: 'Select the correct answer option to complete the sentence.',
        stem: 'The old credentials will stop working after:',
        options: ['Wednesday the 14th.', 'Thursday the 14th.', 'Thursday the 15th.', 'Wednesday the 12th.'],
        answer: 0,
        whyEs: 'Jordan dice primero “until Thursday”, pero luego se corrige: el 14 es miércoles. “Sorry, …” anula lo anterior.',
        evidence: 'Sorry, Wednesday the 14th. Thursday is the 15th.'
      },
      {
        format: 'select',
        instruction: 'Select the correct answer option.',
        stem: 'How many days does Leila have to update the configuration files?',
        options: ['One', 'Two', 'Three', 'Four'],
        answer: 1,
        whyEs: 'Leila calcula tres días, pero Jordan la corrige con “actually”: hoy es 12, así que quedan dos.',
        evidence: 'Two, actually. Today’s the 12th.'
      }
    ]
  }
];

const READING_LESSONS: StrategyLesson[] = [
  {
    objective: 'R1',
    section: 'R',
    titleEs: 'Encontrar el dato exacto en una oración',
    officialSkill: 'Analyze factual information from various sources',
    shortcut: [
      { cue: 'Palabra clave de la pregunta', action: 'Úsala para localizar la oración en el texto.' },
      { cue: 'only, not, unless, until, rather than', action: 'Cambian el sentido: léelos dos veces.' },
      { cue: 'Ninguna de las dos afirmaciones encaja', action: 'Elige “Neither” sin miedo.' }
    ],
    whatItTestsEs:
      'Te preguntan qué dice el texto sobre un punto concreto. La respuesta está en una o dos oraciones, pero la opción correcta usa otras palabras (una paráfrasis), y las incorrectas copian palabras del texto con otro sentido.',
    steps: [
      { title: 'Localiza con una palabra clave', body: 'Toma un nombre, una fecha o un término de la pregunta (VPN, March, administrator) y búscalo en el texto.' },
      { title: 'Lee la oración completa y la siguiente', body: 'Un “However” o un “but” en la oración siguiente puede cambiar la respuesta.' },
      { title: 'Subraya los limitadores', body: 'only, not, unless, except, until, rather than, all, some. Las opciones incorrectas suelen eliminarlos o generalizar.' },
      { title: 'Compara el significado, no las palabras', body: 'La opción correcta dice lo mismo con otras palabras. Si una opción copia el texto palabra por palabra, revísala con más cuidado.' }
    ],
    signals: [
      { en: 'will no longer receive security updates', es: '= “without security updates”: sigue funcionando, pero sin parches.' },
      { en: 'Administrator rights are not required.', es: '= “can install it without admin rights”.' },
      { en: 'until 31 March', es: '= “until the end of March”.' },
      { en: 'rather than their personal one', es: '= en lugar del personal, no además del personal.' },
      { en: 'Contractors are not affected', es: '= la norma no se aplica a los contratistas.' }
    ],
    traps: [
      { trap: 'La misma palabra con el sentido contrario', why: '“Will stop working on 1 March” usa la fecha del texto, pero el texto dice que el cliente antiguo funciona hasta el 31 de marzo.' },
      { trap: 'Generalizar', why: '“All employees must replace their laptops”: el texto solo habla de los portátiles con un sistema anterior a Windows 10.' },
      { trap: 'No elegir “Neither”', why: 'En el formato “agrees or neither”, a veces ninguna afirmación es correcta. Si las dos tienen un error, la respuesta es “Neither”.' }
    ],
    reading: {
      title: 'Remote Access Policy – Update',
      blocks: [
        { text: 'From 1 March, all employees who connect to internal systems from outside the office must use the new VPN client. The old client will continue to work until 31 March, but it will no longer receive security updates. Contractors are not affected by this change, as they already use a separate access portal.' },
        { text: 'To install the new client, employees should open the Software Center and select “SecureConnect 4”. Administrator rights are not required. However, laptops running an operating system older than Windows 10 cannot run the new client and must be replaced before the end of March. The IT department will contact the owners of these laptops directly.' },
        { text: 'Multi-factor authentication remains mandatory for every connection. Employees should register the authenticator app on their work phone rather than their personal one. Support requests related to the new client should be sent through the service portal, not by email.' }
      ]
    },
    check: [
      {
        format: 'select',
        instruction: 'Read the text about the remote access policy, then select the correct answer option according to the text.',
        stem: 'According to the text, the old VPN client:',
        options: [
          'will stop working on 1 March.',
          'will keep working until the end of March without security updates.',
          'will be used by contractors instead of the access portal.',
          'will receive a final security update in March.'
        ],
        answer: 1,
        whyEs: 'El cliente antiguo sigue funcionando hasta el 31 de marzo, pero ya no recibe actualizaciones. La opción correcta lo dice con otras palabras.',
        evidence: 'The old client will continue to work until 31 March, but it will no longer receive security updates.'
      },
      {
        format: 'agrees',
        instruction: 'Read the text. Decide which statement agrees with the text or neither.',
        stem: 'The writer states that:',
        options: [
          'employees must ask IT for permission before installing the new client.',
          'employees can install the new client without administrator rights.',
          'Neither'
        ],
        answer: 1,
        whyEs: '“Administrator rights are not required” es lo mismo que instalarlo sin permisos de administrador. Nada dice que haya que pedir permiso.',
        evidence: 'Administrator rights are not required.'
      },
      {
        format: 'agrees',
        instruction: 'Read the text. Decide which statement agrees with the text or neither.',
        stem: 'The writer states that:',
        options: [
          'employees should use their personal phone for authentication.',
          'all employees must replace their laptops before the end of March.',
          'Neither'
        ],
        answer: 2,
        whyEs: 'La primera afirmación contradice “rather than their personal one”. La segunda generaliza: solo se cambian los portátiles con un sistema anterior a Windows 10. Ninguna coincide con el texto.',
        evidence: 'on their work phone rather than their personal one … laptops running an operating system older than Windows 10'
      }
    ]
  },

  {
    objective: 'R2',
    section: 'R',
    titleEs: 'Saber qué dice cada párrafo',
    officialSkill: 'Identify a problem, its cause, and possible solutions',
    shortcut: [
      { cue: 'Antes de las preguntas', action: 'Resume cada párrafo en 4–5 palabras.' },
      { cue: '“Which paragraph…?”', action: 'Busca la IDEA, no la palabra repetida.' },
      { cue: 'Palabra de la pregunta en dos párrafos', action: 'Gana el que la explica, no el que solo la menciona.' }
    ],
    whatItTestsEs:
      'Te dan un texto dividido en párrafos (A, B, C, D) y frases que describen uno de ellos: “Which paragraph states that…?”. Evalúa si entiendes la función de cada párrafo: el problema, la causa, la solución o el siguiente paso.',
    steps: [
      { title: 'Haz un mapa del texto', body: 'Al leer, escribe una etiqueta corta para cada párrafo: A = ¿solo yo?, B = reiniciar, C = ubicación, D = abrir ticket.' },
      { title: 'Simplifica la pregunta', body: 'Convierte la frase de la pregunta en palabras tuyas: “physical position” = dónde estás sentado.' },
      { title: 'Busca la idea en tu mapa', body: 'Elige el párrafo cuya etiqueta coincide con la idea, aunque use otras palabras.' },
      { title: 'Confirma con una frase concreta', body: 'Señala la oración del párrafo que lo demuestra. Si no la encuentras, revisa otro párrafo.' }
    ],
    signals: [
      { en: 'physical position', es: '↔ location, further from, moving closer'},
      { en: 'compare your connection with another person’s', es: '↔ ask a colleague… to open the same website' },
      { en: 'take more time to solve', es: '↔ take longer to resolve' },
      { en: 'from scratch', es: '↔ de nuevo, desde el principio' },
      { en: 'If none of these steps work, …', es: 'Marca el último recurso: suele ser el párrafo final.' }
    ],
    traps: [
      { trap: 'La palabra repetida', why: '“Help desk” aparece en el párrafo A, pero quien explica por qué una solicitud tarda más es el D.' },
      { trap: 'Un párrafo que menciona el tema sin explicarlo', why: 'El A habla de una conexión lenta, pero no explica la ubicación como causa: eso lo hace el C.' },
      { trap: 'Leer solo la primera oración del párrafo', why: 'La idea que te piden puede estar al final del párrafo, como la razón del retraso en el D.' }
    ],
    reading: {
      title: 'Slow Wi-Fi in the office: what to try first',
      blocks: [
        { label: 'Paragraph A', text: 'Before you contact the help desk about a slow wireless connection, check whether the problem affects only your device. Ask a colleague sitting nearby to open the same website. If their connection is fast, the issue is probably on your laptop rather than the network.' },
        { label: 'Paragraph B', text: 'If only your device is affected, restart the wireless adapter. On most laptops you can do this by switching airplane mode on and off. It also helps to “forget” the office network and connect again, entering your credentials from scratch.' },
        { label: 'Paragraph C', text: 'Sometimes the cause is location. Meeting rooms on the third floor are further from the access points, and their thick glass walls reduce the signal. Moving closer to the corridor often improves the speed immediately, even if nothing else changes.' },
        { label: 'Paragraph D', text: 'If none of these steps work, open a ticket and include the time the problem started, your location, and the result of a speed test. Tickets without this information usually take longer to resolve, because the network team has to ask for it first.' }
      ]
    },
    check: [
      {
        format: 'paragraph',
        instruction: 'Read the text about slow Wi-Fi. Decide which paragraph corresponds to the statement.',
        stem: 'Which paragraph explains that the user’s physical position can affect the connection?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        answer: 2,
        whyEs: 'El C trata la ubicación como causa: salas lejos de los puntos de acceso, paredes de vidrio y la mejora al acercarse al pasillo.',
        evidence: 'Sometimes the cause is location.'
      },
      {
        format: 'paragraph',
        instruction: 'Decide which paragraph corresponds to the statement.',
        stem: 'Which paragraph suggests comparing your connection with another person’s?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        answer: 0,
        whyEs: 'El A propone pedirle a un compañero que abra la misma web para ver si el problema es solo tuyo.',
        evidence: 'Ask a colleague sitting nearby to open the same website.'
      },
      {
        format: 'paragraph',
        instruction: 'Decide which paragraph corresponds to the statement.',
        stem: 'Which paragraph explains why some support requests take more time to solve?',
        options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'],
        answer: 3,
        whyEs: 'El D explica que los tickets sin información tardan más porque el equipo de redes tiene que pedirla antes. El A menciona el help desk, pero no habla de tiempos.',
        evidence: 'Tickets without this information usually take longer to resolve, because the network team has to ask for it first.'
      }
    ]
  },

  {
    objective: 'R3',
    section: 'R',
    titleEs: 'Escanear: encontrar un dato sin leerlo todo',
    officialSkill: 'Analyze factual information from various sources',
    shortcut: [
      { cue: 'Tipo de dato (número, fecha, acción)', action: 'Decídelo antes de mirar el texto.' },
      { cue: 'Títulos y secciones', action: 'Úsalos para saltar a la zona correcta.' },
      { cue: '“previously”, “instead of”, “until”', action: 'Indican que hay un valor viejo y uno nuevo.' }
    ],
    whatItTestsEs:
      'Te preguntan un dato concreto dentro de un documento técnico: notas de versión, políticas o especificaciones. No tienes que entenderlo todo; tienes que encontrar rápido la línea correcta y no caer en el valor antiguo.',
    steps: [
      { title: 'Define qué buscas', body: '¿Un número? ¿Una fecha? ¿Una acción que alguien debe hacer? Eso te dice qué forma tiene la respuesta.' },
      { title: 'Salta con los títulos', body: '“Known issues” para problemas, “Changes” para lo que cambió, “Support” para versiones sin soporte.' },
      { title: 'Busca formas, no palabras', body: 'Los números, fechas y mayúsculas saltan a la vista. Recorre el texto buscando esa forma.' },
      { title: 'Lee la oración completa al encontrarlo', body: '“previously 10,000” indica que 10,000 es el valor antiguo, no el actual.' }
    ],
    signals: [
      { en: '(previously 10,000)', es: 'Valor antiguo: no es la respuesta sobre la versión actual.' },
      { en: 'instead of strings', es: 'Reemplazo: lo nuevo va antes de “instead of”.' },
      { en: 'will be retired', es: '= dejará de estar disponible.' },
      { en: 'Until then, …', es: 'Lo que hay que hacer mientras llega la solución.' },
      { en: 'is no longer supported', es: 'Ya no tiene soporte (ahora, no en el futuro).' }
    ],
    traps: [
      { trap: 'El número antiguo', why: '10,000 aparece junto a la respuesta, pero entre paréntesis y con “previously”.' },
      { trap: 'El dato de otra versión', why: 'El texto habla de las versiones 3.0, 3.1, 3.2 y 3.2.1. Confirma de cuál pregunta la frase.' },
      { trap: 'La acción de otra sección', why: '“Contact their account manager” existe, pero en la sección de soporte, no en la de errores conocidos.' }
    ],
    reading: {
      title: 'Release notes – Inventory API 3.2',
      blocks: [
        { heading: 'New features', text: 'Bulk export now supports up to 50,000 records per request (previously 10,000). Exports larger than this limit are split automatically into several files.' },
        { heading: 'Changes', text: 'The /stock endpoint now returns quantities as integers instead of strings. Clients that parse these values as text must be updated before 15 June, when version 3.1 will be retired.' },
        { heading: 'Known issues', text: 'Filtering by warehouse code is case-sensitive in this version. A fix is planned for 3.2.1. Until then, send warehouse codes in upper case.' },
        { heading: 'Support', text: 'Version 3.0 is no longer supported. Customers still using it should contact their account manager to schedule a migration.' }
      ]
    },
    check: [
      {
        format: 'select',
        instruction: 'Read the release notes, then select the correct answer option according to the text.',
        stem: 'What is the maximum number of records in a single bulk export in version 3.2?',
        options: ['10,000', '15,000', '32,000', '50,000'],
        answer: 3,
        whyEs: 'La versión 3.2 admite hasta 50,000 registros. El 10,000 va con “previously”: es el límite antiguo.',
        evidence: 'Bulk export now supports up to 50,000 records per request (previously 10,000).'
      },
      {
        format: 'select',
        instruction: 'Select the correct answer option according to the text.',
        stem: 'What should clients do until version 3.2.1 is released?',
        options: [
          'Send warehouse codes in upper case.',
          'Stop filtering by warehouse code.',
          'Parse quantities as text.',
          'Contact their account manager.'
        ],
        answer: 0,
        whyEs: '“Until then” se refiere a la llegada de la 3.2.1. Lo que hay que hacer mientras tanto es enviar los códigos en mayúsculas.',
        evidence: 'Until then, send warehouse codes in upper case.'
      },
      {
        format: 'select',
        instruction: 'Select the correct answer option according to the text.',
        stem: 'When will version 3.1 stop being available?',
        options: [
          'It is already unsupported.',
          'On 15 June.',
          'When version 3.2.1 is released.',
          'After the migration has been scheduled.'
        ],
        answer: 1,
        whyEs: '“Will be retired” equivale a “stop being available”, y la fecha es el 15 de junio. La versión que ya no tiene soporte es la 3.0, no la 3.1.',
        evidence: 'before 15 June, when version 3.1 will be retired.'
      }
    ]
  },

  {
    objective: 'R4',
    section: 'R',
    titleEs: 'Identificar el propósito y la idea principal',
    officialSkill: 'Analyze and prioritize opinions and recommendations',
    shortcut: [
      { cue: 'Primer y último párrafo', action: 'Léelos primero: ahí está el propósito.' },
      { cue: 'Verbo de la opción (announce, propose, warn)', action: 'Debe tener la misma fuerza que el texto.' },
      { cue: 'Opción que solo cubre un párrafo', action: 'Es un detalle, no la idea principal.' }
    ],
    whatItTestsEs:
      'Te preguntan para qué se escribió el texto o qué piensa el autor: “What is the purpose of the text?”, “The writer mentions X in order to…”. La idea principal cubre todo el texto; los distractores son detalles verdaderos o versiones exageradas.',
    steps: [
      { title: 'Lee el principio y el final', body: 'El primer párrafo suele plantear el problema y el último dice qué espera el autor del lector.' },
      { title: 'Pregúntate qué quiere el autor', body: '¿Informar, proponer, advertir, convencer o pedir algo? Esa función es el propósito.' },
      { title: 'Comprueba que la opción cubra todo', body: 'Si la opción solo describe un párrafo (por ejemplo, la prueba piloto), es un detalle.' },
      { title: 'Compara la fuerza de los verbos', body: '“Propose” no es “announce”. Si el texto dice que la decisión aún no está tomada, “announce” es un error.' }
    ],
    signals: [
      { en: 'For these reasons, … is proposing', es: 'Aquí está el propósito: proponer algo y justificarlo.' },
      { en: 'We are aware that some colleagues are worried…', es: 'Responde a una objeción antes de que la planteen.' },
      { en: 'we invite every department to send us their questions', es: 'Llamada a la acción: pide la participación del lector.' },
      { en: 'before the decision is finalised', es: 'La decisión aún no está tomada.' },
      { en: 'two of the three security incidents', es: 'Dato preciso: no es “todos”.' }
    ],
    traps: [
      { trap: 'Un detalle verdadero', why: 'La prueba piloto con el equipo de finanzas está en el texto, pero ocupa una sola oración. No es el propósito.' },
      { trap: 'Un verbo más fuerte que el texto', why: '“To announce that passwords will be removed” convierte una propuesta en una decisión tomada.' },
      { trap: 'Generalizar los datos', why: '“The main cause of all incidents” exagera “two of the three incidents”.' }
    ],
    reading: {
      title: 'Moving towards passwordless sign-in',
      blocks: [
        { text: 'Over the past year, our help desk received more than 4,000 password reset requests. Each one took an average of eight minutes to resolve, and several led to accounts being locked during critical work. Weak or reused passwords were also behind two of the three security incidents we reported last quarter.' },
        { text: 'For these reasons, the security team is proposing a gradual move to passwordless sign-in. Instead of typing a password, employees would confirm their identity with a fingerprint or a security key. Major providers already support this method, and a pilot with the finance team showed positive results.' },
        { text: 'We are aware that some colleagues are worried about privacy. Fingerprint data never leaves the device and is not stored on our servers. Over the next month we will hold short information sessions, and we invite every department to send us their questions before the decision is finalised in September.' }
      ]
    },
    check: [
      {
        format: 'select',
        instruction: 'Read the text about passwordless sign-in, then select the correct answer option according to the text.',
        stem: 'What is the main purpose of the text?',
        options: [
          'To report the results of the finance team’s pilot.',
          'To announce that passwords will be removed in September.',
          'To propose a new way of signing in and explain why it is needed.',
          'To explain how fingerprint data is stored.'
        ],
        answer: 2,
        whyEs: 'El texto plantea un problema (párrafo 1), propone una solución (párrafo 2) y responde dudas (párrafo 3). La prueba piloto y la privacidad son partes; “announce” es demasiado fuerte.',
        evidence: 'For these reasons, the security team is proposing a gradual move to passwordless sign-in.'
      },
      {
        format: 'agrees',
        instruction: 'Read the text. Decide which statement agrees with the text or neither.',
        stem: 'The writer states that:',
        options: [
          'passwords are the main cause of all security incidents.',
          'departments are invited to give feedback before a final decision.',
          'Neither'
        ],
        answer: 1,
        whyEs: 'El último párrafo invita a los departamentos a enviar preguntas antes de la decisión final. La primera afirmación exagera: fueron dos de tres incidentes.',
        evidence: 'we invite every department to send us their questions before the decision is finalised in September.'
      },
      {
        format: 'select',
        instruction: 'Select the correct answer option according to the text.',
        stem: 'The writer mentions privacy in order to:',
        options: [
          'respond to a concern that some employees have.',
          'show that the pilot was not successful.',
          'explain why security keys are expensive.',
          'describe a recent security incident.'
        ],
        answer: 0,
        whyEs: '“We are aware that some colleagues are worried” anticipa una objeción y la responde: la huella nunca sale del dispositivo.',
        evidence: 'We are aware that some colleagues are worried about privacy.'
      }
    ]
  },

  {
    objective: 'R5',
    section: 'R',
    titleEs: 'Combinar información de varias fuentes',
    officialSkill: 'Evaluate information from various sources',
    shortcut: [
      { cue: 'Varias fuentes', action: 'Decide qué aporta cada una: necesidad, reglas, datos.' },
      { cue: '“may not”, “must”, “cannot”', action: 'Son reglas: elimina opciones con cada una.' },
      { cue: '“I’d prefer…”', action: 'Es una preferencia, no una regla.' }
    ],
    whatItTestsEs:
      'La respuesta no está en un solo lugar: tienes que cruzar un email con una política, o una lista con unas condiciones. Es el objetivo más difícil, porque las opciones incorrectas cumplen una parte de las reglas pero no todas.',
    steps: [
      { title: 'Clasifica las fuentes', body: 'El email dice qué se necesita, la política dice las reglas y la lista da los datos de cada persona.' },
      { title: 'Convierte la pregunta en una condición', body: '“¿Quién puede cubrir la segunda semana?” = ¿quién cumple TODAS las reglas y la preferencia?' },
      { title: 'Elimina regla por regla', body: 'Aplica cada regla a cada opción. Una sola regla incumplida basta para descartarla.' },
      { title: 'Comprueba que usas todas las fuentes', body: 'Si una opción se justifica con una sola fuente, probablemente te falta una regla.' }
    ],
    signals: [
      { en: 'I’d prefer someone from the database team', es: 'Preferencia del email: orienta, pero no es una prohibición.' },
      { en: 'may not be on call for more than seven consecutive days', es: 'Regla: máximo siete días seguidos (“in a row”).' },
      { en: 'must have completed the incident-response training', es: 'Requisito obligatorio.' },
      { en: 'joined the company less than three months ago', es: 'Hay que calcular con las fechas de la lista.' },
      { en: 'training pending', es: 'Formación sin completar: incumple el requisito.' }
    ],
    traps: [
      { trap: 'Cumplir una regla pero no otra', why: 'Ines terminó la formación, pero entró hace menos de tres meses: no puede cubrir sola.' },
      { trap: 'Confundir preferencia con regla', why: 'Que Nadia no sea del equipo de bases de datos no la descarta. Lo que la descarta es el límite de siete días seguidos.' },
      { trap: 'Usar una sola fuente', why: 'Con el email solo, cualquiera del equipo de bases de datos parece válido. Con la política, solo queda Leo.' }
    ],
    reading: {
      title: 'Covering on-call shifts (team page, 1 July)',
      blocks: [
        { label: 'Source 1', heading: 'Email from Marta, Engineering Manager', text: 'Hi team,\nCarlos will be on holiday from 3 to 14 July, so we need someone to cover his on-call shifts. Nadia has offered to take the first week. For the second week, I’d prefer someone from the database team, since most alerts recently have been related to replication. Please reply by Friday.' },
        { label: 'Source 2', heading: 'On-call policy, section 4', text: 'Engineers may not be on call for more than seven consecutive days. Anyone covering a shift for a colleague must have completed the incident-response training. Engineers who joined the company less than three months ago cannot cover on-call shifts on their own.' },
        { label: 'Source 3', heading: 'Database team', text: 'Leo – joined in January, training completed.\nInes – joined in May, training completed.\nOmar – joined last year, training pending.' }
      ]
    },
    check: [
      {
        format: 'select',
        instruction: 'Read the three sources, then select the correct answer option according to the texts.',
        stem: 'Who is the most suitable person to cover Carlos’s second week?',
        options: ['Nadia', 'Leo', 'Ines', 'Omar'],
        answer: 1,
        whyEs: 'Nadia ya cubre la primera semana y superaría los siete días seguidos. Ines entró en mayo (menos de tres meses). Omar no ha terminado la formación. Solo Leo cumple todo.',
        evidence: 'Leo – joined in January, training completed.'
      },
      {
        format: 'select',
        instruction: 'Select the correct answer option according to the texts.',
        stem: 'Why can’t Nadia cover both weeks?',
        options: [
          'She is not part of the database team.',
          'She has not completed the training.',
          'The policy limits on-call periods to seven days in a row.',
          'She joined the company less than three months ago.'
        ],
        answer: 2,
        whyEs: 'Dos semanas seguidas superan los siete días consecutivos que permite la política. Que no sea del equipo de bases de datos es solo una preferencia del email.',
        evidence: 'Engineers may not be on call for more than seven consecutive days.'
      },
      {
        format: 'agrees',
        instruction: 'Decide which statement agrees with the texts or neither.',
        stem: 'According to the sources:',
        options: [
          'Omar could cover the shift once he completes the training.',
          'Ines can cover the shift because she has completed the training.',
          'Neither'
        ],
        answer: 0,
        whyEs: 'Omar entró el año pasado, así que su único impedimento es la formación pendiente. Ines tiene la formación, pero entró hace menos de tres meses.',
        evidence: 'Omar – joined last year, training pending.'
      }
    ]
  }
];

export const STRATEGY_LESSONS: Record<LObjective | RObjective, StrategyLesson> = Object.fromEntries(
  [...LISTENING_LESSONS, ...READING_LESSONS].map(l => [l.objective, l])
) as Record<LObjective | RObjective, StrategyLesson>;

export const LISTENING_STRATEGY_LESSONS = LISTENING_LESSONS;
export const READING_STRATEGY_LESSONS = READING_LESSONS;
