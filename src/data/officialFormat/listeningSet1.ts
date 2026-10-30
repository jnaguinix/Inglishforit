import { AudioTrack, Question } from '../../types';
import { buildItems } from './buildItems';

/**
 * Official-format Listening set 1: six workplace conversations (one woman, one man each)
 * covering software development, security, networking, product, support and cloud.
 */

export const LISTENING_SET_1_TRACKS: Record<string, AudioTrack> = {
  'lst-01': {
    id: 'lst-01',
    title: 'Code review: the export feature',
    scenario: 'A senior developer gives feedback on a junior developer’s pull request.',
    speakers: [
      { id: 'Grace', role: 'Grace – woman (Senior developer)', accentPreference: 'en-GB' },
      { id: 'Daniel', role: 'Daniel – man (Junior developer)', accentPreference: 'en-US' }
    ],
    lines: [
      { s: 'Grace', t: 'Daniel, have you got a minute? It’s about your pull request for the export feature.' },
      { s: 'Daniel', t: 'Sure. Is something wrong with it?' },
      { s: 'Grace', t: 'Not wrong exactly. The logic works, but the function that builds the CSV file is almost three hundred lines long.' },
      { s: 'Daniel', t: 'I know it’s long. I wanted to get it working first and clean it up later.' },
      { s: 'Grace', t: 'I understand, but “later” usually means never. I’d rather we split it into smaller functions before we merge.' },
      { s: 'Daniel', t: 'That makes sense. Although the release is on Thursday, and QA needs at least two days to test it.' },
      { s: 'Grace', t: 'Then let’s do this: you split the function today, I’ll review it again tomorrow morning, and QA can start tomorrow afternoon.' },
      { s: 'Daniel', t: 'OK. Should I add unit tests for the new functions as well?' },
      { s: 'Grace', t: 'Yes, please. Our rule is at least one test per public function. Actually, make it two for the date formatting, because that’s where we had bugs last month.' },
      { s: 'Daniel', t: 'Got it. Two tests for the date formatting, one for the others.' },
      { s: 'Grace', t: 'Exactly. And don’t worry, it’s a good first feature. It just needs some tidying.' }
    ]
  },

  'lst-02': {
    id: 'lst-02',
    title: 'Reporting a phishing email',
    scenario: 'An employee calls the security operations centre after clicking a suspicious link.',
    speakers: [
      { id: 'Ben', role: 'Ben – man (Accountant)', accentPreference: 'en-AU' },
      { id: 'Aisha', role: 'Aisha – woman (SOC analyst)', accentPreference: 'en-US' }
    ],
    lines: [
      { s: 'Ben', t: 'Hi, is this the security team? I think I might have done something stupid.' },
      { s: 'Aisha', t: 'You’ve reached the right place. What happened?' },
      { s: 'Ben', t: 'I got an email that looked like it came from our bank, asking me to confirm a payment. I clicked the link and typed my username, but then the page asked for my card number and I stopped.' },
      { s: 'Aisha', t: 'OK, you did the right thing by stopping and calling us. When did this happen?' },
      { s: 'Ben', t: 'About twenty minutes ago. Around ten fifteen.' },
      { s: 'Aisha', t: 'Did you enter your password as well, or only your username?' },
      { s: 'Ben', t: 'Both, actually. Sorry, I forgot to mention that.' },
      { s: 'Aisha', t: 'No problem. The first thing we’ll do is reset your password and sign you out of all your sessions. Please don’t delete the email; we need it for the investigation.' },
      { s: 'Ben', t: 'Should I tell my manager?' },
      { s: 'Aisha', t: 'I’ll let her know myself, so you don’t have to worry about that. What I need from you is to forward the email to our phishing address and then not use your laptop until we call you back.' },
      { s: 'Ben', t: 'How long will that take?' },
      { s: 'Aisha', t: 'Usually less than an hour. Honestly, reporting it this quickly makes a big difference.' }
    ]
  },

  'lst-03': {
    id: 'lst-03',
    title: 'Wireless network for the new office',
    scenario: 'A network engineer and a facilities manager plan the Wi-Fi installation on a new floor.',
    speakers: [
      { id: 'Hannah', role: 'Hannah – woman (Facilities manager)', accentPreference: 'en-GB' },
      { id: 'Marco', role: 'Marco – man (Network engineer)', accentPreference: 'en-US' }
    ],
    lines: [
      { s: 'Hannah', t: 'Marco, thanks for coming. As you know, we’re moving into the new office on the fifth floor next month.' },
      { s: 'Marco', t: 'Yes, I’ve seen the floor plan. We’ll need about twelve access points to cover the whole floor.' },
      { s: 'Hannah', t: 'Twelve? The old office only had eight.' },
      { s: 'Marco', t: 'True, but the new space is bigger, and the walls in the meeting rooms are glass, which reduces the signal.' },
      { s: 'Hannah', t: 'I see. Where would they go?' },
      { s: 'Marco', t: 'Mostly on the ceiling. We’ll mount them first, then run the cables, and finally configure them remotely from our controller.' },
      { s: 'Hannah', t: 'The builders finish the ceilings on the twentieth. Could you start the day after?' },
      { s: 'Marco', t: 'The twenty-first is a Saturday, so the earliest would be Monday the twenty-third.' },
      { s: 'Hannah', t: 'That’s fine. My concern is the noise. People in the finance team are already working there.' },
      { s: 'Marco', t: 'We can do the drilling before nine in the morning. The rest is quiet work.' },
      { s: 'Hannah', t: 'Perfect. And I’d like a guest network that’s completely separate from the staff one.' },
      { s: 'Marco', t: 'Absolutely. That’s standard practice; visitors should never be on the same network as our internal systems.' }
    ]
  },

  'lst-04': {
    id: 'lst-04',
    title: 'Roadmap priorities',
    scenario: 'A sales lead asks a product manager to bring a feature forward on the roadmap.',
    speakers: [
      { id: 'Tariq', role: 'Tariq – man (Sales lead)', accentPreference: 'en-IN' },
      { id: 'Olivia', role: 'Olivia – woman (Product manager)', accentPreference: 'en-US' }
    ],
    lines: [
      { s: 'Tariq', t: 'Olivia, I need to talk about the roadmap. Two of our biggest clients are asking for single sign-on.' },
      { s: 'Olivia', t: 'I know. It’s on the list for the third quarter.' },
      { s: 'Tariq', t: 'The third quarter is too late. One of them has said they might not renew their contract in June without it.' },
      { s: 'Olivia', t: 'That’s a real risk, I agree. But if we move single sign-on up, something else has to move down.' },
      { s: 'Tariq', t: 'What about the new dashboard? Nobody has asked me for it.' },
      { s: 'Olivia', t: 'Your clients haven’t, but our support team has. The current dashboard generates about thirty percent of our tickets.' },
      { s: 'Tariq', t: 'Hmm, I didn’t know that.' },
      { s: 'Olivia', t: 'Here’s what I suggest. We keep the dashboard, but we release a basic version of single sign-on in May, with only the two most common providers.' },
      { s: 'Tariq', t: 'Would a basic version be enough for them?' },
      { s: 'Olivia', t: 'It should be. Both clients use the same provider. The full version, with every provider, can still come in the third quarter.' },
      { s: 'Tariq', t: 'OK, I can sell that. I’ll call them this week.' },
      { s: 'Olivia', t: 'Just don’t promise a specific date until engineering confirms.' }
    ]
  },

  'lst-05': {
    id: 'lst-05',
    title: 'Failing card payments',
    scenario: 'A retail client calls her support engineer about failed payments before a busy weekend.',
    speakers: [
      { id: 'Mei', role: 'Mei – woman (Operations director, client)', accentPreference: 'en-US' },
      { id: 'Chris', role: 'Chris – man (Support engineer)', accentPreference: 'en-AU' }
    ],
    lines: [
      { s: 'Mei', t: 'Hi Chris, it’s Mei from Northfield Retail. I’m afraid our checkout is failing again.' },
      { s: 'Chris', t: 'Hi Mei. I’m sorry about that. Are all payments failing, or only some of them?' },
      { s: 'Mei', t: 'Only card payments over five hundred dollars. Smaller ones go through without any problem.' },
      { s: 'Chris', t: 'That’s useful, thank you. It sounds like it could be the new fraud check we enabled on Monday.' },
      { s: 'Mei', t: 'On Monday? Nobody told us about a change.' },
      { s: 'Chris', t: 'You’re right, and I apologize. It should have been in the release notes we send to clients.' },
      { s: 'Mei', t: 'Well, that’s not ideal. We have a promotion this weekend, and large orders are exactly what we’re expecting.' },
      { s: 'Chris', t: 'Understood. I can switch the check off for your account as a temporary measure, and our engineers will adjust the limit properly by Thursday.' },
      { s: 'Mei', t: 'Is it safe to switch it off?' },
      { s: 'Chris', t: 'Your account still has the standard fraud filters, so the risk is low. But I’ll need written approval from you, by email, before I make the change.' },
      { s: 'Mei', t: 'Fine. I’ll send it in the next few minutes.' },
      { s: 'Chris', t: 'Great. As soon as I get it, I’ll make the change and call you to confirm.' }
    ]
  },

  'lst-06': {
    id: 'lst-06',
    title: 'Cloud bill review',
    scenario: 'A finance analyst asks a cloud engineer why the monthly cloud bill has increased.',
    speakers: [
      { id: 'Fatima', role: 'Fatima – woman (Finance analyst)', accentPreference: 'en-GB' },
      { id: 'Jake', role: 'Jake – man (Cloud engineer)', accentPreference: 'en-US' }
    ],
    lines: [
      { s: 'Fatima', t: 'Jake, I’ve been looking at last month’s cloud bill. It went up by forty percent.' },
      { s: 'Jake', t: 'Forty? I expected an increase, but not that much.' },
      { s: 'Fatima', t: 'Most of it is storage. Can you explain why?' },
      { s: 'Jake', t: 'Partly, yes. We started keeping daily backups for ninety days instead of thirty, because of the new audit requirements.' },
      { s: 'Fatima', t: 'So that’s unavoidable?' },
      { s: 'Jake', t: 'The backups are, but we’re keeping them in the most expensive storage class. Older backups could go to archive storage, which costs about a fifth of the price.' },
      { s: 'Fatima', t: 'Why didn’t we do that from the start?' },
      { s: 'Jake', t: 'To be honest, we were in a hurry before the audit. It was on my list, but it kept getting pushed back.' },
      { s: 'Fatima', t: 'OK. What about the test servers? I see them running at night and at weekends.' },
      { s: 'Jake', t: 'Good point. Nobody uses them outside office hours. I can schedule them to shut down at eight in the evening and start again at seven in the morning.' },
      { s: 'Fatima', t: 'How much would all this save?' },
      { s: 'Jake', t: 'My rough estimate is around twenty-five percent of the current bill. I’ll have exact numbers by Friday.' }
    ]
  }
};

export const LISTENING_SET_1_QUESTIONS: Question[] = [
  ...buildItems('L', 'lst-01', 'V08', [
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'When Grace says “later” usually means never, she is suggesting that:',
      options: [
        'the clean-up will probably not happen unless it is done now.',
        'Daniel never finishes his tasks on time and needs to be more careful.',
        'the release date should be moved later so there is time to clean up.',
        'the code will never work correctly.'
      ],
      answer: 0,
      why_correct: 'Grace no critica a Daniel: advierte que dejar la limpieza “para después” suele significar no hacerla nunca, por eso propone dividir la función antes del merge.',
      why_wrong: [
        'Generaliza a la persona: Grace habla de una costumbre de los equipos, no de que Daniel sea impuntual.',
        'Nadie propone mover la fecha; al contrario, Grace arma un plan para llegar al jueves.',
        'Contradice el audio: Grace dice que la lógica funciona (“The logic works”).'
      ],
      tip_es: 'Cuando alguien usa una frase hecha (“later usually means never”), pregúntate qué consecuencia práctica quiere evitar.',
      evidence: 'I understand, but “later” usually means never. I’d rather we split it into smaller functions before we merge.'
    },
    {
      objective: 'L2', format: 'complete', difficulty: 1,
      stem: 'The conversation is mainly about:',
      options: [
        'how to improve Daniel’s code before it is merged.',
        'why the export feature had bugs.',
        'how the QA team tests new features.',
        'whether the release should be delayed.'
      ],
      answer: 0,
      why_correct: 'Desde la primera frase hablan de la pull request de Daniel y de cómo mejorarla (dividir la función, añadir tests) antes de integrarla.',
      why_wrong: [
        'Los bugs se mencionan solo del mes pasado y en relación con las fechas; no es el tema.',
        'QA aparece como un paso del plan, pero la conversación no trata de cómo prueban.',
        'Se menciona la fecha de lanzamiento, pero nadie propone retrasarla.'
      ],
      tip_es: 'El tema aparece al principio (“It’s about your pull request”) y se confirma con el plan final.',
      evidence: 'It’s about your pull request for the export feature.'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'According to Grace’s plan, QA will start testing:',
      options: ['tomorrow afternoon.', 'tomorrow morning.', 'on Thursday morning.', 'later today.'],
      answer: 0,
      why_correct: 'El plan tiene tres pasos en orden: Daniel divide la función hoy, Grace revisa mañana por la mañana y QA empieza mañana por la tarde.',
      why_wrong: [
        'Mañana por la mañana es cuando Grace revisa el código, no cuando empieza QA.',
        'El jueves es el día del lanzamiento.',
        'Hoy es cuando Daniel debe dividir la función.'
      ],
      tip_es: 'En planes con varios pasos, asocia cada momento con una persona: hoy → Daniel, mañana AM → Grace, mañana PM → QA.',
      evidence: 'I’ll review it again tomorrow morning, and QA can start tomorrow afternoon.'
    },
    {
      objective: 'L5', format: 'complete', difficulty: 2,
      stem: 'For the date formatting, Daniel has to write:',
      options: ['two tests.', 'one test.', 'three tests.', 'no additional tests.'],
      answer: 0,
      why_correct: 'La regla general es un test por función, pero Grace se corrige con “Actually” y pide dos para el formato de fechas.',
      why_wrong: [
        'Uno es la regla general, que Grace cambia para este caso con “Actually”.',
        'Nadie menciona tres tests.',
        'Grace pide explícitamente tests para las funciones nuevas.'
      ],
      tip_es: '“Actually” introduce una corrección: el dato bueno es el que viene después.',
      evidence: 'Actually, make it two for the date formatting'
    },
    {
      objective: 'L3', format: 'select', difficulty: 2,
      stem: 'How does Grace feel about Daniel’s work overall?',
      options: [
        'She likes it but wants it tidied up.',
        'She is disappointed with the logic of the code.',
        'She thinks it is ready to be merged as it is.',
        'She is worried about the release date.'
      ],
      answer: 0,
      why_correct: 'Al final lo dice claramente: es una buena primera funcionalidad que solo necesita ordenarse.',
      why_wrong: [
        'Contradice “The logic works”.',
        'Pide cambios antes del merge, así que no está lista.',
        'Quien menciona la fecha con preocupación es Daniel, no Grace.'
      ],
      tip_es: 'La actitud general suele resumirse al final de la conversación.',
      evidence: 'And don’t worry, it’s a good first feature. It just needs some tidying.'
    },
    {
      objective: 'L2', format: 'whose_opinion', difficulty: 2,
      stem: 'Statement: “The long function should be divided before the code is merged.”',
      answer: 0,
      why_correct: 'Grace lo propone y Daniel responde “That makes sense”: la opinión es de ambos.',
      why_wrong: [
        'No es solo de Daniel: la propuesta es de Grace y Daniel la acepta.',
        'Grace lo propone, pero Daniel está de acuerdo, así que no es solo de ella.'
      ],
      tip_es: 'Si uno propone y el otro responde “That makes sense / I agree”, la respuesta es “Both”.',
      evidence: 'I’d rather we split it into smaller functions before we merge. ... That makes sense.'
    },
    {
      objective: 'L3', format: 'whose_opinion', difficulty: 3,
      stem: 'Statement: “It is acceptable to clean up the code after the feature works.”',
      answer: 1,
      why_correct: 'Es la idea inicial de Daniel (“clean it up later”). Grace no está de acuerdo: cree que “later” significa “never”.',
      why_wrong: [
        'Grace rechaza esa idea, así que no es una opinión compartida.',
        'Grace opina lo contrario.'
      ],
      tip_es: 'Antes de elegir “Both”, comprueba que el otro hablante no haya puesto un “but” a la idea.',
      evidence: 'I wanted to get it working first and clean it up later.'
    }
  ]),

  ...buildItems('L', 'lst-02', 'V04', [
    {
      objective: 'L5', format: 'complete', difficulty: 2,
      stem: 'On the fake page, Ben entered:',
      options: ['his username and password.', 'only his username.', 'his card number.', 'his username and card number.'],
      answer: 0,
      why_correct: 'Primero dice que escribió el usuario, pero cuando Aisha pregunta por la contraseña corrige: “Both, actually”.',
      why_wrong: [
        'Es lo que dice al principio, pero luego se corrige.',
        'Se detuvo justo cuando le pidieron la tarjeta.',
        'No escribió la tarjeta, y omite la contraseña.'
      ],
      tip_es: 'Las correcciones (“actually”, “sorry, I forgot to mention”) cambian el dato inicial.',
      evidence: 'Both, actually. Sorry, I forgot to mention that.'
    },
    {
      objective: 'L3', format: 'complete', difficulty: 1,
      stem: 'At the start of the call, Ben feels:',
      options: ['worried that he has made a mistake.', 'angry with his bank.', 'sure that nothing serious happened.', 'unsure which team to call.'],
      answer: 0,
      why_correct: '“I think I might have done something stupid” muestra preocupación por haber cometido un error.',
      why_wrong: [
        'No culpa al banco: sospecha que el email era falso.',
        'Si estuviera seguro, no llamaría preocupado.',
        'Pregunta si es el equipo de seguridad, pero ha llamado al lugar correcto.'
      ],
      tip_es: 'Las primeras palabras de una llamada suelen revelar la emoción del hablante.',
      evidence: 'I think I might have done something stupid.'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'When Aisha says “I’ll let her know myself”, she means that:',
      options: [
        'Ben does not need to inform his manager.',
        'Ben’s manager will call him later to discuss it.',
        'Ben should wait before telling anyone about it.',
        'she will report Ben for his mistake.'
      ],
      answer: 0,
      why_correct: 'Aisha se encarga de avisar a la jefa para que Ben no tenga que preocuparse por eso.',
      why_wrong: [
        'Nadie dice que la jefa vaya a llamar a Ben.',
        'No le pide esperar: le quita esa tarea.',
        'Su tono es de apoyo; no habla de denunciarlo.'
      ],
      tip_es: '“I’ll … myself” significa “yo me encargo”: la otra persona no tiene que hacerlo.',
      evidence: 'I’ll let her know myself, so you don’t have to worry about that.'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'The first thing the security team will do is:',
      options: [
        'reset Ben’s password and end his sessions.',
        'delete the phishing email.',
        'contact Ben’s bank about the payment.',
        'check Ben’s laptop for malware.'
      ],
      answer: 0,
      why_correct: '“The first thing we’ll do” anuncia el primer paso: restablecer la contraseña y cerrar todas las sesiones.',
      why_wrong: [
        'Aisha pide justo lo contrario: no borrar el email.',
        'Nadie menciona contactar al banco.',
        'Revisarán el portátil después, pero no es el primer paso.'
      ],
      tip_es: '“The first thing…”, “then…”, “after that…” ordenan los pasos: busca el marcador que pide la pregunta.',
      evidence: 'The first thing we’ll do is reset your password and sign you out of all your sessions.'
    },
    {
      objective: 'L2', format: 'complete', difficulty: 1,
      stem: 'The main purpose of Ben’s call is to:',
      options: ['report a possible phishing attack.', 'confirm a payment with the bank.', 'ask for a new laptop.', 'complain about a slow investigation.'],
      answer: 0,
      why_correct: 'Ben llama porque cree que cayó en un email falso, y toda la conversación trata de cómo responder a ese incidente.',
      why_wrong: [
        'Confirmar un pago era el pretexto del email falso, no el motivo de la llamada.',
        'Le piden no usar el portátil un rato, no cambiarlo.',
        'La investigación acaba de empezar; nadie se queja.'
      ],
      tip_es: 'No confundas el contenido del email (pago) con el propósito de la llamada (reportarlo).',
      evidence: 'I clicked the link and typed my username'
    },
    {
      objective: 'L5', format: 'select', difficulty: 2,
      stem: 'What must Ben do after forwarding the email?',
      options: [
        'Stop using his laptop until the team calls back.',
        'Delete the email so that nobody else clicks on it.',
        'Call his manager.',
        'Change his password himself.'
      ],
      answer: 0,
      why_correct: 'Después de reenviar el email, Ben no debe usar el portátil hasta que lo llamen.',
      why_wrong: [
        'Aisha le pide no borrarlo.',
        'Aisha avisará a la jefa ella misma.',
        'El equipo de seguridad restablecerá la contraseña.'
      ],
      tip_es: 'Escucha la secuencia “forward… and then…”: la respuesta está después de “then”.',
      evidence: 'forward the email to our phishing address and then not use your laptop until we call you back.'
    },
    {
      objective: 'L3', format: 'whose_opinion', difficulty: 2,
      stem: 'Statement: “Reporting the incident quickly was the right decision.”',
      answer: 2,
      why_correct: 'Solo Aisha lo dice (“you did the right thing”, “reporting it this quickly makes a big difference”). Ben, en cambio, cree que hizo algo tonto.',
      why_wrong: [
        'Ben no lo afirma; se culpa a sí mismo.',
        'Ben no expresa esa opinión.'
      ],
      tip_es: 'Atribuye la opinión a quien la dice, no a quien se beneficia de ella.',
      evidence: 'Honestly, reporting it this quickly makes a big difference.'
    }
  ]),

  ...buildItems('L', 'lst-03', 'V07', [
    {
      objective: 'L5', format: 'complete', difficulty: 2,
      stem: 'The installation can start on:',
      options: ['Monday the 23rd.', 'Saturday the 21st.', 'the 20th.', 'Monday the 21st.'],
      answer: 0,
      why_correct: 'Hannah propone el día después del 20, pero Marco explica que el 21 es sábado, así que lo más pronto es el lunes 23.',
      why_wrong: [
        'Es el día que propone Hannah, pero cae en sábado.',
        'El 20 es cuando terminan los techos.',
        'Mezcla el día de la semana correcto con la fecha equivocada.'
      ],
      tip_es: 'Cuando oyes varias fechas, quédate con la que nadie corrige al final.',
      evidence: 'The twenty-first is a Saturday, so the earliest would be Monday the twenty-third.'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'After mounting the access points, the team will:',
      options: ['run the cables.', 'configure them remotely.', 'set up the guest network.', 'drill the ceilings.'],
      answer: 0,
      why_correct: 'Orden: “first” montar, “then” cablear y “finally” configurar. Después de montar viene el cableado.',
      why_wrong: [
        'La configuración remota es el último paso (“finally”).',
        'La red de invitados se menciona aparte, no como paso de la secuencia.',
        'El taladrado es parte de montar, no lo que viene después.'
      ],
      tip_es: 'first → then → finally: identifica qué palabra va inmediatamente después del paso que te preguntan.',
      evidence: 'We’ll mount them first, then run the cables, and finally configure them remotely from our controller.'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'Marco mentions the glass walls in order to:',
      options: [
        'explain why more access points are needed.',
        'complain about the design of the building.',
        'suggest moving the meeting rooms.',
        'show that the signal will be stronger.'
      ],
      answer: 0,
      why_correct: 'Responde a la sorpresa de Hannah (“Twelve?”) con dos razones: el espacio es mayor y el vidrio reduce la señal.',
      why_wrong: [
        'Lo menciona como dato técnico, no como queja.',
        'Nadie propone mover las salas.',
        'Es al revés: el vidrio reduce la señal.'
      ],
      tip_es: '“True, but…” introduce la justificación de lo que se dijo antes.',
      evidence: 'True, but the new space is bigger, and the walls in the meeting rooms are glass, which reduces the signal.'
    },
    {
      objective: 'L3', format: 'complete', difficulty: 1,
      stem: 'Hannah’s main concern about the installation is:',
      options: [
        'the noise for people working there.',
        'the cost of installing twelve access points.',
        'the date when the builders finish.',
        'the security of the guest network.'
      ],
      answer: 0,
      why_correct: 'Lo dice literalmente: “My concern is the noise”, por el equipo de finanzas que ya trabaja allí.',
      why_wrong: [
        'Se sorprende por el número, pero no habla de dinero.',
        'Ella misma da la fecha sin preocupación.',
        'Pide la red de invitados como requisito, no como preocupación.'
      ],
      tip_es: '“My concern is…”, “What worries me is…” marcan la preocupación principal.',
      evidence: 'My concern is the noise. People in the finance team are already working there.'
    },
    {
      objective: 'L2', format: 'select', difficulty: 1,
      stem: 'What is the conversation mainly about?',
      options: [
        'Planning the wireless network for a new office.',
        'Moving the finance team to another floor.',
        'Choosing a company to build the ceilings.',
        'Fixing slow Wi-Fi in the old office.'
      ],
      answer: 0,
      why_correct: 'Hablan del número de puntos de acceso, la instalación, las fechas y la red de invitados del nuevo piso.',
      why_wrong: [
        'El equipo de finanzas ya está allí; nadie lo mueve.',
        'Los constructores ya están contratados.',
        'La oficina antigua solo sirve de comparación.'
      ],
      tip_es: 'El tema general reúne casi todo lo que se dice; los detalles aparecen una sola vez.',
      evidence: 'We’ll need about twelve access points to cover the whole floor.'
    },
    {
      objective: 'L2', format: 'whose_opinion', difficulty: 2,
      stem: 'Statement: “Visitors should use a network that is separate from the staff network.”',
      answer: 0,
      why_correct: 'Hannah lo pide y Marco responde “Absolutely”: es práctica estándar. Opinan lo mismo.',
      why_wrong: [
        'Marco está de acuerdo, pero Hannah fue quien lo pidió.',
        'Hannah lo pide, pero Marco también lo apoya.'
      ],
      tip_es: '“Absolutely”, “Exactly”, “That’s standard practice” = acuerdo total.',
      evidence: 'And I’d like a guest network that’s completely separate from the staff one. ... Absolutely.'
    },
    {
      objective: 'L3', format: 'whose_opinion', difficulty: 3,
      stem: 'Statement: “Eight access points would not be enough for the new floor.”',
      answer: 1,
      why_correct: 'Es la opinión de Marco, que pide doce. Hannah se sorprende (“Twelve?”) y no expresa esa opinión.',
      why_wrong: [
        'Hannah no lo afirma; cuestiona el número.',
        'Hannah no lo dice; es Marco quien lo justifica.'
      ],
      tip_es: 'Una pregunta de sorpresa (“Twelve?”) no es una opinión.',
      evidence: 'We’ll need about twelve access points to cover the whole floor.'
    }
  ]),

  ...buildItems('L', 'lst-04', 'V08', [
    {
      objective: 'L2', format: 'complete', difficulty: 2,
      stem: 'The speakers are mainly discussing:',
      options: [
        'how to meet a client request without dropping other work.',
        'why some important clients do not renew their contracts in June.',
        'how to reduce the number of support tickets.',
        'which login provider is the most popular.'
      ],
      answer: 0,
      why_correct: 'Tariq pide adelantar el single sign-on y Olivia busca una solución que no elimine el nuevo dashboard.',
      why_wrong: [
        'La renovación es el motivo de la urgencia, no el tema.',
        'Los tickets son un argumento de Olivia, no el tema central.',
        'El proveedor se menciona como detalle de la solución.'
      ],
      tip_es: 'El tema es el problema que intentan resolver; los argumentos de cada uno son detalles.',
      evidence: 'But if we move single sign-on up, something else has to move down.'
    },
    {
      objective: 'L3', format: 'complete', difficulty: 2,
      stem: 'Tariq thinks the third quarter is too late because:',
      options: [
        'a client might leave in June.',
        'the engineering team is too slow to deliver it.',
        'the dashboard is more important to clients.',
        'clients want every provider immediately.'
      ],
      answer: 0,
      why_correct: 'Un cliente dijo que quizá no renueve en junio sin esa función.',
      why_wrong: [
        'Nadie critica la velocidad de ingeniería.',
        'Tariq dice que nadie le ha pedido el dashboard.',
        'Una versión básica parece suficiente para ellos.'
      ],
      tip_es: 'La razón suele ir justo después de la opinión (“too late. One of them has said…”).',
      evidence: 'One of them has said they might not renew their contract in June without it.'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'When Tariq says “Hmm, I didn’t know that”, he is:',
      options: [
        'accepting information that changes his view.',
        'disagreeing with Olivia’s figures.',
        'asking Olivia to explain the dashboard.',
        'criticising the support team.'
      ],
      answer: 0,
      why_correct: 'Reconoce un dato nuevo (el 30 % de los tickets) y deja de insistir en quitar el dashboard.',
      why_wrong: [
        'No discute el número.',
        'No pide explicaciones.',
        'No dice nada negativo sobre soporte.'
      ],
      tip_es: '“I didn’t know that” suele marcar un cambio de postura.',
      evidence: 'Hmm, I didn’t know that.'
    },
    {
      objective: 'L5', format: 'complete', difficulty: 1,
      stem: 'The basic version of single sign-on will be released in:',
      options: ['May.', 'June.', 'the third quarter.', 'the next few days.'],
      answer: 0,
      why_correct: 'Olivia propone sacar una versión básica en mayo.',
      why_wrong: [
        'Junio es cuando el cliente debe renovar.',
        'El tercer trimestre es para la versión completa.',
        'Esta semana es cuando Tariq llamará a los clientes.'
      ],
      tip_es: 'Asocia cada fecha con su acción: mayo → versión básica; junio → renovación; Q3 → versión completa.',
      evidence: 'we release a basic version of single sign-on in May'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 3,
      stem: 'Olivia does not want to postpone the new dashboard because:',
      options: [
        'the current one causes many support tickets.',
        'clients have asked for it.',
        'it is much easier to build than single sign-on.',
        'engineering has already confirmed it.'
      ],
      answer: 0,
      why_correct: 'Contrasta con “Your clients haven’t, but our support team has”: el dashboard actual genera un 30 % de los tickets.',
      why_wrong: [
        'Es lo contrario: los clientes no lo pidieron.',
        'Nadie compara la dificultad.',
        'Ingeniería aún tiene que confirmar fechas.'
      ],
      tip_es: 'Con “X haven’t, but Y has”, la razón está en la segunda parte.',
      evidence: 'Your clients haven’t, but our support team has. The current dashboard generates about thirty percent of our tickets.'
    },
    {
      objective: 'L3', format: 'whose_opinion', difficulty: 2,
      stem: 'Statement: “The new dashboard is not a priority.”',
      answer: 1,
      why_correct: 'Tariq propone moverlo porque nadie se lo ha pedido; Olivia defiende mantenerlo.',
      why_wrong: [
        'Olivia no está de acuerdo, así que no es de ambos.',
        'Olivia opina lo contrario.'
      ],
      tip_es: 'Una pregunta retórica (“What about the new dashboard?”) puede expresar una opinión.',
      evidence: 'What about the new dashboard? Nobody has asked me for it.'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'Olivia’s final comment means that Tariq should:',
      options: [
        'wait for engineering before giving clients a date.',
        'not call the clients this week.',
        'promise the clients the basic version in May.',
        'ask engineering to work faster so the full version arrives sooner.'
      ],
      answer: 0,
      why_correct: 'Puede llamar a los clientes, pero sin comprometer una fecha concreta hasta que ingeniería la confirme.',
      why_wrong: [
        'No le impide llamar; limita lo que puede prometer.',
        'Es justo lo que Olivia le pide no hacer.',
        'No se pide más velocidad.'
      ],
      tip_es: '“Just don’t…” es una advertencia: permite la acción, pero pone un límite.',
      evidence: 'Just don’t promise a specific date until engineering confirms.'
    }
  ]),

  ...buildItems('L', 'lst-05', 'V03', [
    {
      objective: 'L5', format: 'complete', difficulty: 1,
      stem: 'The payments that are failing are:',
      options: ['card payments over 500 dollars.', 'all card payments.', 'card payments under 500 dollars.', 'payments made during the promotion.'],
      answer: 0,
      why_correct: 'Mei precisa que solo fallan los pagos con tarjeta de más de 500 dólares.',
      why_wrong: [
        'Chris pregunta si fallan todos y Mei dice que no.',
        'Los pequeños funcionan sin problema.',
        'El fin de semana es la promoción; los fallos ya ocurren.'
      ],
      tip_es: '“Only…” limita el dato: fíjate en la condición que lo acompaña.',
      evidence: 'Only card payments over five hundred dollars.'
    },
    {
      objective: 'L3', format: 'complete', difficulty: 2,
      stem: 'When Mei says “Well, that’s not ideal”, she is:',
      options: [
        'politely showing that she is unhappy.',
        'saying that the promotion is a bad idea.',
        'rejecting Chris’s solution.',
        'agreeing that the change was useful.'
      ],
      answer: 0,
      why_correct: 'Es un eufemismo británico/profesional para mostrar molestia sin ser grosera.',
      why_wrong: [
        'La promoción es la razón por la que le molesta, no lo que critica.',
        'Chris todavía no ha propuesto la solución.',
        'Es lo contrario de estar de acuerdo.'
      ],
      tip_es: '“Not ideal”, “a bit disappointing”, “not great” = queja educada.',
      evidence: 'Well, that’s not ideal.'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'Chris says “You’re right, and I apologize” because:',
      options: [
        'the client was not informed about the change.',
        'the fraud check does not work.',
        'the engineers are late with the fix.',
        'he cannot switch off the check.'
      ],
      answer: 0,
      why_correct: 'Se disculpa porque el cambio debía aparecer en las notas de versión y Mei no se enteró.',
      why_wrong: [
        'El control funciona; solo es demasiado estricto.',
        'Los ingenieros todavía no tienen plazo vencido.',
        'Sí puede desactivarlo.'
      ],
      tip_es: 'La razón de una disculpa suele explicarse en la frase siguiente.',
      evidence: 'You’re right, and I apologize. It should have been in the release notes we send to clients.'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'Before Chris switches the check off, he needs:',
      options: [
        'an email from Mei approving the change.',
        'the engineers to adjust the limit for large payments.',
        'a call from Mei’s manager.',
        'the promotion to finish.'
      ],
      answer: 0,
      why_correct: '“Before I make the change” marca la condición previa: aprobación escrita por email.',
      why_wrong: [
        'El ajuste de los ingenieros llega después, el jueves.',
        'Nadie menciona al jefe de Mei.',
        'Lo desactiva precisamente para la promoción.'
      ],
      tip_es: '“before I…” = condición que debe cumplirse primero.',
      evidence: 'But I’ll need written approval from you, by email, before I make the change.'
    },
    {
      objective: 'L2', format: 'complete', difficulty: 2,
      stem: 'In the conversation, the speakers agree on:',
      options: [
        'a temporary solution until the limit is fixed.',
        'cancelling the weekend promotion.',
        'removing all of the fraud filters.',
        'changing the content of the release notes.'
      ],
      answer: 0,
      why_correct: 'Desactivar el control solo para su cuenta como medida temporal hasta que ajusten el límite.',
      why_wrong: [
        'La promoción sigue en pie.',
        'Los filtros estándar se mantienen.',
        'Las notas de versión solo se mencionan en la disculpa.'
      ],
      tip_es: '“as a temporary measure” indica que la solución no es definitiva.',
      evidence: 'I can switch the check off for your account as a temporary measure'
    },
    {
      objective: 'L3', format: 'whose_opinion', difficulty: 2,
      stem: 'Statement: “The client should have been told about Monday’s change.”',
      answer: 0,
      why_correct: 'Mei se queja de que nadie les avisó y Chris le da la razón: debía estar en las notas de versión.',
      why_wrong: [
        'Chris lo reconoce, pero Mei lo planteó primero.',
        'Mei lo plantea, pero Chris está de acuerdo.'
      ],
      tip_es: '“You’re right” convierte la queja de uno en una opinión compartida.',
      evidence: 'Nobody told us about a change. ... You’re right, and I apologize.'
    },
    {
      objective: 'L5', format: 'select', difficulty: 1,
      stem: 'When will the engineers adjust the limit properly?',
      options: ['By Thursday.', 'On Monday.', 'This weekend.', 'In the next few minutes.'],
      answer: 0,
      why_correct: 'Chris dice que los ingenieros ajustarán el límite antes del jueves.',
      why_wrong: [
        'El lunes se activó el control.',
        'El fin de semana es la promoción.',
        'En unos minutos llegará el email de Mei.'
      ],
      tip_es: 'Cada momento del audio tiene una acción distinta: relaciónalos antes de responder.',
      evidence: 'our engineers will adjust the limit properly by Thursday.'
    }
  ]),

  ...buildItems('L', 'lst-06', 'V01', [
    {
      objective: 'L5', format: 'complete', difficulty: 1,
      stem: 'Daily backups are now kept for:',
      options: ['90 days.', '30 days.', '40 days.', '25 days.'],
      answer: 0,
      why_correct: 'Pasaron de 30 a 90 días por los nuevos requisitos de auditoría.',
      why_wrong: [
        'Treinta era el periodo anterior (“instead of thirty”).',
        'Cuarenta es el porcentaje de aumento de la factura.',
        'Veinticinco es el ahorro estimado.'
      ],
      tip_es: '“X instead of Y”: X es el valor nuevo.',
      evidence: 'We started keeping daily backups for ninety days instead of thirty'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'Jake suggests moving older backups to archive storage because:',
      options: ['it is much cheaper.', 'the audit requires it.', 'it is faster to restore.', 'it keeps data for longer.'],
      answer: 0,
      why_correct: 'El almacenamiento de archivo cuesta alrededor de una quinta parte.',
      why_wrong: [
        'La auditoría exige guardar 90 días, no el tipo de almacenamiento.',
        'Nadie habla de velocidad de restauración.',
        'La duración no depende del tipo de almacenamiento.'
      ],
      tip_es: '“which costs about a fifth of the price” = mucho más barato.',
      evidence: 'Older backups could go to archive storage, which costs about a fifth of the price.'
    },
    {
      objective: 'L3', format: 'complete', difficulty: 2,
      stem: 'When Jake says “To be honest, we were in a hurry before the audit”, he:',
      options: [
        'admits the change was not a priority then.',
        'blames the auditors for the cost.',
        'thinks the change is not necessary.',
        'refuses to change the storage class.'
      ],
      answer: 0,
      why_correct: 'Reconoce que la optimización estaba en su lista pero se fue posponiendo por las prisas.',
      why_wrong: [
        'No culpa a nadie.',
        'Él mismo propone el cambio.',
        'Está dispuesto a cambiarlo.'
      ],
      tip_es: '“To be honest” introduce una admisión sincera.',
      evidence: 'To be honest, we were in a hurry before the audit. It was on my list, but it kept getting pushed back.'
    },
    {
      objective: 'L2', format: 'complete', difficulty: 1,
      stem: 'The conversation is mainly about:',
      options: ['ways to reduce cloud costs.', 'the results of the audit.', 'problems with the test servers.', 'how backups are restored.'],
      answer: 0,
      why_correct: 'Parten del aumento de la factura y proponen dos ahorros: archivo para copias antiguas y apagar servidores de prueba.',
      why_wrong: [
        'La auditoría explica un cambio, pero no se comentan sus resultados.',
        'Los servidores de prueba son una de las medidas, no el tema.',
        'Nadie habla de restaurar copias.'
      ],
      tip_es: 'Pregunta y respuesta final (“How much would all this save?”) suelen resumir el tema.',
      evidence: 'How much would all this save?'
    },
    {
      objective: 'L5', format: 'complete', difficulty: 2,
      stem: 'Jake will schedule the test servers to start again at:',
      options: ['7 a.m.', '8 a.m.', '8 p.m.', '9 a.m.'],
      answer: 0,
      why_correct: 'Se apagarán a las ocho de la noche y volverán a encenderse a las siete de la mañana.',
      why_wrong: [
        'Mezcla la hora de apagado con la mañana.',
        'Es la hora de apagado.',
        'Nadie menciona las nueve.'
      ],
      tip_es: 'Con dos horas en la misma frase, asocia cada una a su verbo: shut down / start again.',
      evidence: 'shut down at eight in the evening and start again at seven in the morning.'
    },
    {
      objective: 'L3', format: 'whose_opinion', difficulty: 3,
      stem: 'Statement: “The increase in the bill is larger than expected.”',
      answer: 1,
      why_correct: 'Jake esperaba un aumento, pero no tan grande. Fatima solo da el dato; no dice qué esperaba.',
      why_wrong: [
        'Fatima informa la cifra sin opinar sobre ella.',
        'Fatima no expresa esa opinión.'
      ],
      tip_es: 'Dar un dato no es lo mismo que opinar sobre él.',
      evidence: 'Forty? I expected an increase, but not that much.'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'When Jake says he will have exact numbers by Friday, he means that the 25% figure:',
      options: ['is only an estimate.', 'is the final saving.', 'will be saved by Friday.', 'is probably too optimistic.'],
      answer: 0,
      why_correct: 'Lo llama “rough estimate”: es aproximado y el viernes tendrá cifras exactas.',
      why_wrong: [
        'Si fuera final no necesitaría calcularlo.',
        'El viernes tendrá los números, no el ahorro.',
        'No sugiere que la cifra sea exagerada.'
      ],
      tip_es: '“rough estimate”, “around”, “about” = cifra aproximada.',
      evidence: 'My rough estimate is around twenty-five percent of the current bill. I’ll have exact numbers by Friday.'
    }
  ])
];
