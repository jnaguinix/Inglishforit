import { AudioTrack, Question } from '../../types';
import { buildItems } from './buildItems';

/**
 * Official-format Listening set 2: onboarding, security policy, incident review,
 * technology choice, vendor selection and remote support.
 */

export const LISTENING_SET_2_TRACKS: Record<string, AudioTrack> = {
  'lst-07': {
    id: 'lst-07',
    title: 'First day on the DevOps team',
    scenario: 'A team lead explains roles and first steps to a new DevOps engineer.',
    speakers: [
      { id: 'Sophie', role: 'Sophie – woman (Team lead)', accentPreference: 'en-GB' },
      { id: 'Arjun', role: 'Arjun – man (New DevOps engineer)', accentPreference: 'en-IN' }
    ],
    lines: [
      { s: 'Sophie', t: 'Welcome to the team, Arjun. How’s your first morning going?' },
      { s: 'Arjun', t: 'Good, thanks. A bit overwhelming, to be honest. Lots of new names.' },
      { s: 'Sophie', t: 'That’s normal. Let me explain who does what, so you know who to ask. Lena is our release manager. Anything about deployment dates goes to her.' },
      { s: 'Arjun', t: 'And if a deployment fails?' },
      { s: 'Sophie', t: 'Then you contact whoever is on call. The rota is on the team wiki, and it changes every Monday.' },
      { s: 'Arjun', t: 'Got it. Will I be on call soon?' },
      { s: 'Sophie', t: 'Not for the first six weeks. You’ll shadow Tom during his on-call weeks first, so you can see how incidents are handled.' },
      { s: 'Arjun', t: 'That sounds sensible. What about access to production?' },
      { s: 'Sophie', t: 'You’ll get read-only access on Thursday, after your security training. Write access comes later, once you’ve done a few supervised deployments.' },
      { s: 'Arjun', t: 'I was hoping to start on the pipeline migration this week.' },
      { s: 'Sophie', t: 'I like the enthusiasm, but I’d rather you spent this week reading the documentation. The migration can wait until next sprint.' },
      { s: 'Arjun', t: 'Fair enough. I’ll start with the wiki, then.' }
    ]
  },

  'lst-08': {
    id: 'lst-08',
    title: 'Changing the password policy',
    scenario: 'An HR manager and the chief information security officer discuss complaints about password rules.',
    speakers: [
      { id: 'Rosa', role: 'Rosa – woman (HR manager)', accentPreference: 'en-GB' },
      { id: 'Kevin', role: 'Kevin – man (Chief information security officer)', accentPreference: 'en-US' }
    ],
    lines: [
      { s: 'Rosa', t: 'Kevin, I’ve had a lot of complaints about the password rules. People say they’re changing passwords every month and forgetting them.' },
      { s: 'Kevin', t: 'I’ve heard the same. Actually, I’m planning to change the policy.' },
      { s: 'Rosa', t: 'Really? I thought frequent changes were safer.' },
      { s: 'Kevin', t: 'That used to be the advice, but current guidance says the opposite. When people change passwords too often, they choose weak ones, like adding a number at the end.' },
      { s: 'Rosa', t: 'So what would the new rule be?' },
      { s: 'Kevin', t: 'Longer passwords, at least fourteen characters, but no forced changes unless we suspect an account has been compromised.' },
      { s: 'Rosa', t: 'Fourteen sounds like a lot. Won’t people complain about that too?' },
      { s: 'Kevin', t: 'Some will. That’s why we’ll encourage passphrases: three or four random words. They’re long but easy to remember.' },
      { s: 'Rosa', t: 'I like that. And multi-factor authentication stays?' },
      { s: 'Kevin', t: 'Definitely. That’s not negotiable.' },
      { s: 'Rosa', t: 'When would this start? I’d need to update the onboarding guide.' },
      { s: 'Kevin', t: 'We’re aiming for the first of March, but I’ll send you a draft of the guide next week so you have time to review it.' }
    ]
  },

  'lst-09': {
    id: 'lst-09',
    title: 'Login outage review',
    scenario: 'An engineering manager asks a site reliability engineer to summarise a recent outage.',
    speakers: [
      { id: 'Paul', role: 'Paul – man (Engineering manager)', accentPreference: 'en-GB' },
      { id: 'Nina', role: 'Nina – woman (Site reliability engineer)', accentPreference: 'en-AU' }
    ],
    lines: [
      { s: 'Paul', t: 'Nina, thanks for writing up the outage report. Can you summarise what happened on Tuesday?' },
      { s: 'Nina', t: 'Sure. At two forty, customers started getting errors when they tried to log in. The login service itself was fine; the problem was DNS.' },
      { s: 'Paul', t: 'DNS? I assumed it was the database at first.' },
      { s: 'Nina', t: 'So did we, which is why we lost about twenty minutes checking the database before anyone looked at DNS.' },
      { s: 'Paul', t: 'What exactly went wrong?' },
      { s: 'Nina', t: 'Someone updated a DNS record to point to a new load balancer, but the new one hadn’t been fully configured yet.' },
      { s: 'Paul', t: 'And how did you fix it?' },
      { s: 'Nina', t: 'We pointed the record back to the old load balancer. Service was restored at three twenty-five, so the outage lasted forty-five minutes.' },
      { s: 'Paul', t: 'That’s longer than I’d like. What are we changing?' },
      { s: 'Nina', t: 'Two things. First, DNS changes will need a second person to approve them. Second, we’ll add DNS checks to our monitoring dashboard so it’s one of the first things we look at.' },
      { s: 'Paul', t: 'Good. I’d add a third: a short checklist for the on-call engineer, so they don’t go straight to the database every time.' },
      { s: 'Nina', t: 'That’s a good idea. I’ll add it to the report.' }
    ]
  },

  'lst-10': {
    id: 'lst-10',
    title: 'Choosing a language for a new service',
    scenario: 'A backend developer and a tech lead discuss which language to use for an image-processing service.',
    speakers: [
      { id: 'Lucas', role: 'Lucas – man (Backend developer)', accentPreference: 'en-US' },
      { id: 'Emma', role: 'Emma – woman (Tech lead)', accentPreference: 'en-GB' }
    ],
    lines: [
      { s: 'Lucas', t: 'Emma, for the new image-processing service, I’d like to use Python. Most of the team already knows it.' },
      { s: 'Emma', t: 'I understand the appeal, but I’m worried about speed. This service will resize thousands of images per minute.' },
      { s: 'Lucas', t: 'Python can call libraries written in C for the heavy work, so the slow parts are actually compiled code.' },
      { s: 'Emma', t: 'That’s true for the resizing itself. But we also need to handle a lot of requests at the same time, and that’s where I’ve seen Python struggle.' },
      { s: 'Lucas', t: 'What would you suggest instead? Go?' },
      { s: 'Emma', t: 'Go or Rust. Go compiles to a single binary, which makes deployment simpler, and it handles concurrency well.' },
      { s: 'Lucas', t: 'Rust would take the team months to learn.' },
      { s: 'Emma', t: 'Agreed, so Rust is probably out. Go is easier to pick up.' },
      { s: 'Lucas', t: 'OK, but if we choose Go, we need training. Only two people have used it before.' },
      { s: 'Emma', t: 'Fair point. Let’s build a small prototype in both Python and Go next week and measure the performance. Then we decide with real numbers.' },
      { s: 'Lucas', t: 'I can do the Python version. Who does Go?' },
      { s: 'Emma', t: 'Ask Mateo. He’s one of the two who’ve used it.' }
    ]
  },

  'lst-11': {
    id: 'lst-11',
    title: 'Selecting a helpdesk tool',
    scenario: 'A procurement officer presents a price comparison of helpdesk tools to an IT manager.',
    speakers: [
      { id: 'Victor', role: 'Victor – man (Procurement officer)', accentPreference: 'en-GB' },
      { id: 'Diana', role: 'Diana – woman (IT manager)', accentPreference: 'en-US' }
    ],
    lines: [
      { s: 'Victor', t: 'Diana, I’ve compared the three helpdesk tools you shortlisted. On price, DeskFlow is the cheapest by far.' },
      { s: 'Diana', t: 'How much cheaper?' },
      { s: 'Victor', t: 'About eight thousand a year less than ServiceHub, and twelve thousand less than TicketPro.' },
      { s: 'Diana', t: 'That’s significant. But does DeskFlow integrate with our chat system? That was one of our must-haves.' },
      { s: 'Victor', t: 'Not at the moment. They say it’s planned for next year, but there’s no fixed date.' },
      { s: 'Diana', t: 'Then I’m not comfortable with it. Our agents handle about half of their requests through chat.' },
      { s: 'Victor', t: 'I see. ServiceHub has the integration and is still within budget.' },
      { s: 'Diana', t: 'What about their support? Last time we chose a tool, we waited days for answers.' },
      { s: 'Victor', t: 'ServiceHub offers twenty-four-hour support on the standard plan. TicketPro only offers it on the premium plan, which would push it over budget.' },
      { s: 'Diana', t: 'Then ServiceHub sounds like the best balance. Can we get a trial?' },
      { s: 'Victor', t: 'They offer thirty days free. I can set it up from Monday.' },
      { s: 'Diana', t: 'Please do. I’ll ask two agents to test it with real tickets.' }
    ]
  },

  'lst-12': {
    id: 'lst-12',
    title: 'VPN connection problem',
    scenario: 'A remote employee calls the helpdesk because she cannot connect to the VPN.',
    speakers: [
      { id: 'Helen', role: 'Helen – woman (Remote employee)', accentPreference: 'en-GB' },
      { id: 'Ravi', role: 'Ravi – man (Helpdesk technician)', accentPreference: 'en-IN' }
    ],
    lines: [
      { s: 'Helen', t: 'Hi, I can’t connect to the VPN from home. It worked fine yesterday.' },
      { s: 'Ravi', t: 'Sorry to hear that. What happens when you try?' },
      { s: 'Helen', t: 'It says “authentication failed” after about ten seconds.' },
      { s: 'Ravi', t: 'OK. Did you change your password recently?' },
      { s: 'Helen', t: 'Yes, this morning, because it had expired.' },
      { s: 'Ravi', t: 'That’s probably it. The VPN client sometimes keeps the old password saved. Could you open the client and remove the saved credentials?' },
      { s: 'Helen', t: 'Done. Now it’s asking for my password and a code.' },
      { s: 'Ravi', t: 'Type your new password, and then the six-digit code from your authenticator app.' },
      { s: 'Helen', t: 'It worked! I’m connected. Sorry, I feel a bit silly now.' },
      { s: 'Ravi', t: 'Not at all. It’s one of the most common calls we get. Actually, we’re planning to send everyone a short guide about it next week.' },
      { s: 'Helen', t: 'That would be useful. Should I do anything else?' },
      { s: 'Ravi', t: 'Just restart your laptop before the end of the day so it picks up a security update. That’s all.' }
    ]
  }
};

export const LISTENING_SET_2_QUESTIONS: Question[] = [
  ...buildItems('L', 'lst-07', 'V06', [
    {
      objective: 'L5', format: 'complete', difficulty: 2,
      stem: 'Arjun will receive read-only access to production:',
      options: ['on Thursday, after his training.', 'on Monday, when the rota changes.', 'after a few supervised deployments.', 'after six weeks of shadowing Tom.'],
      answer: 0,
      why_correct: 'El acceso de solo lectura llega el jueves, después de la formación de seguridad.',
      why_wrong: [
        'El lunes cambia el calendario de guardias, no el acceso.',
        'Las implementaciones supervisadas son la condición para el acceso de escritura.',
        'Las seis semanas se refieren a las guardias.'
      ],
      tip_es: 'Distingue “read-only” de “write”: cada tipo de acceso tiene su propia condición.',
      evidence: 'You’ll get read-only access on Thursday, after your security training.'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'Before Arjun goes on call himself, he will:',
      options: ['observe how Tom handles incidents.', 'manage deployment dates with Lena.', 'finish the pipeline migration.', 'get write access to production.'],
      answer: 0,
      why_correct: '“Shadow Tom … first”: primero observa a Tom durante sus semanas de guardia.',
      why_wrong: [
        'Lena gestiona las fechas; Arjun solo debe preguntarle.',
        'La migración se pospone al siguiente sprint.',
        'El acceso de escritura no se relaciona con las guardias.'
      ],
      tip_es: '“shadow someone” = acompañar y observar a alguien mientras trabaja.',
      evidence: 'You’ll shadow Tom during his on-call weeks first, so you can see how incidents are handled.'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'When Sophie says “I like the enthusiasm, but…”, she is:',
      options: ['politely saying no to Arjun’s plan.', 'praising Arjun for finishing early.', 'asking Arjun to work more quickly.', 'agreeing to start the migration now.'],
      answer: 0,
      why_correct: 'Elogia la actitud y, después del “but”, rechaza el plan: esta semana toca leer documentación.',
      why_wrong: [
        'Arjun no ha terminado nada todavía.',
        'Le pide ir más despacio, no más rápido.',
        'La migración espera al siguiente sprint.'
      ],
      tip_es: '“I like X, but…” = cumplido + rechazo educado.',
      evidence: 'I like the enthusiasm, but I’d rather you spent this week reading the documentation.'
    },
    {
      objective: 'L2', format: 'complete', difficulty: 1,
      stem: 'The main purpose of the conversation is to:',
      options: ['explain roles and first steps to a new employee.', 'plan the details of the pipeline migration for next sprint.', 'explain how to fix a failed deployment.', 'organise the on-call rota for the team.'],
      answer: 0,
      why_correct: 'Sophie le explica quién hace qué, cuándo tendrá accesos y qué hacer la primera semana.',
      why_wrong: [
        'La migración solo se menciona para posponerla.',
        'Solo se dice a quién contactar si falla, no cómo arreglarlo.',
        'El calendario de guardias ya existe en la wiki.'
      ],
      tip_es: 'Si una persona nueva hace muchas preguntas, el propósito suele ser la incorporación.',
      evidence: 'Let me explain who does what, so you know who to ask.'
    },
    {
      objective: 'L5', format: 'select', difficulty: 1,
      stem: 'Who should Arjun contact about deployment dates?',
      options: ['Lena.', 'Tom.', 'Sophie.', 'The person on call.'],
      answer: 0,
      why_correct: 'Lena es la responsable de releases: todo lo relativo a fechas de implementación va a ella.',
      why_wrong: [
        'Tom es la persona a la que Arjun acompañará en las guardias.',
        'Sophie es la jefa de equipo que le explica los roles.',
        'La persona de guardia atiende las implementaciones fallidas.'
      ],
      tip_es: 'Relaciona cada nombre con su función la primera vez que aparece.',
      evidence: 'Lena is our release manager. Anything about deployment dates goes to her.'
    },
    {
      objective: 'L3', format: 'complete', difficulty: 1,
      stem: 'At the beginning of the conversation, Arjun feels:',
      options: ['slightly overwhelmed by everything new.', 'bored because he has nothing to do.', 'annoyed that he cannot be on call for six weeks.', 'sure he already knows everyone.'],
      answer: 0,
      why_correct: '“A bit overwhelming… Lots of new names” muestra que está un poco abrumado.',
      why_wrong: [
        'No dice que se aburra.',
        'Acepta las guardias diferidas con “That sounds sensible”.',
        'Dice justo lo contrario: muchos nombres nuevos.'
      ],
      tip_es: '“A bit…”, “slightly…” suavizan la emoción, pero no la eliminan.',
      evidence: 'A bit overwhelming, to be honest. Lots of new names.'
    },
    {
      objective: 'L2', format: 'whose_opinion', difficulty: 2,
      stem: 'Statement: “New team members should observe on-call work before doing it alone.”',
      answer: 0,
      why_correct: 'Sophie lo plantea y Arjun responde “That sounds sensible”: ambos lo apoyan.',
      why_wrong: [
        'La idea es de Sophie y Arjun está de acuerdo.',
        'Arjun también la apoya.'
      ],
      tip_es: '“That sounds sensible” = acuerdo.',
      evidence: 'You’ll shadow Tom during his on-call weeks first ... That sounds sensible.'
    }
  ]),

  ...buildItems('L', 'lst-08', 'V05', [
    {
      objective: 'L2', format: 'complete', difficulty: 1,
      stem: 'Kevin and Rosa are mainly discussing:',
      options: ['a change to the password policy.', 'complaints about multi-factor authentication.', 'how to update the onboarding guide.', 'an account that has been compromised.'],
      answer: 0,
      why_correct: 'Parten de las quejas sobre contraseñas y hablan de la nueva política: longitud, frases de paso y fecha.',
      why_wrong: [
        'La autenticación multifactor se mantiene; nadie se queja de ella.',
        'La guía es una consecuencia, no el tema.',
        'Las cuentas comprometidas se mencionan como excepción.'
      ],
      tip_es: 'El tema es lo que cambia; las consecuencias (actualizar la guía) son detalles.',
      evidence: 'Actually, I’m planning to change the policy.'
    },
    {
      objective: 'L3', format: 'complete', difficulty: 2,
      stem: 'Rosa is surprised by Kevin’s plan because she:',
      options: ['believed frequent changes were more secure.', 'thought the old policy was too long.', 'wanted to remove multi-factor authentication.', 'expected Kevin to ignore the complaints.'],
      answer: 0,
      why_correct: '“Really? I thought frequent changes were safer” muestra sorpresa basada en una creencia anterior.',
      why_wrong: [
        'No habla de la extensión del texto de la política.',
        'Pregunta si se mantiene, no quiere quitarla.',
        'No esperaba que la ignorara; ella misma trae las quejas.'
      ],
      tip_es: '“Really? I thought…” = sorpresa porque la idea contradice lo que creía.',
      evidence: 'Really? I thought frequent changes were safer.'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'According to Kevin, forcing frequent changes is a problem because:',
      options: ['people end up choosing weaker passwords.', 'it costs the company too much money.', 'users stop using their authenticator app.', 'the new guidance requires long passwords.'],
      answer: 0,
      why_correct: 'Si cambian la contraseña muy a menudo, eligen contraseñas débiles, como añadir un número al final.',
      why_wrong: [
        'Nadie habla de costes.',
        'La autenticación multifactor no se relaciona con este problema.',
        'La longitud es la solución, no la causa del problema.'
      ],
      tip_es: '“That used to be…, but…”: después del “but” viene la razón actual.',
      evidence: 'When people change passwords too often, they choose weak ones, like adding a number at the end.'
    },
    {
      objective: 'L5', format: 'complete', difficulty: 2,
      stem: 'Under the new rule, passwords must contain at least:',
      options: ['fourteen characters.', 'four random words.', 'three random words.', 'ten characters.'],
      answer: 0,
      why_correct: 'La regla es un mínimo de catorce caracteres. Las palabras aleatorias son una recomendación para cumplirla.',
      why_wrong: [
        'Las frases de paso son una sugerencia, no el requisito.',
        'Igual que la anterior: “three or four random words” es un consejo.',
        'Nadie menciona diez.'
      ],
      tip_es: 'Separa el requisito (“at least…”) de la recomendación (“we’ll encourage…”).',
      evidence: 'Longer passwords, at least fourteen characters'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 1,
      stem: 'When Kevin says “That’s not negotiable”, he means that multi-factor authentication:',
      options: ['will definitely stay mandatory.', 'is still being discussed.', 'will be optional for some staff.', 'matters less than passwords.'],
      answer: 0,
      why_correct: '“Not negotiable” = no se discute: se mantiene sí o sí.',
      why_wrong: [
        'Es lo contrario de “negotiable”.',
        'No hay excepciones.',
        'No compara importancia.'
      ],
      tip_es: '“Not negotiable”, “non-negotiable” = obligatorio, sin excepciones.',
      evidence: 'Definitely. That’s not negotiable.'
    },
    {
      objective: 'L5', format: 'select', difficulty: 2,
      stem: 'When will Rosa receive a draft of the guide?',
      options: ['Next week.', 'On the first of March.', 'At the end of the month.', 'After the policy starts.'],
      answer: 0,
      why_correct: 'Kevin enviará el borrador la semana próxima para que Rosa tenga tiempo de revisarlo.',
      why_wrong: [
        'El 1 de marzo es cuando empieza la política.',
        'Nadie menciona el fin de mes.',
        'El borrador llega antes, precisamente para prepararse.'
      ],
      tip_es: '“…, but I’ll send you a draft next week”: el segundo dato responde a la pregunta.',
      evidence: 'I’ll send you a draft of the guide next week so you have time to review it.'
    },
    {
      objective: 'L3', format: 'whose_opinion', difficulty: 3,
      stem: 'Statement: “Frequent password changes make accounts safer.”',
      answer: 2,
      why_correct: 'Es lo que Rosa creía. Kevin dice que la guía actual afirma lo contrario.',
      why_wrong: [
        'Kevin no está de acuerdo.',
        'Kevin opina lo contrario.'
      ],
      tip_es: 'Una creencia expresada (“I thought…”) cuenta como opinión del hablante.',
      evidence: 'I thought frequent changes were safer.'
    }
  ]),

  ...buildItems('L', 'lst-09', 'V07', [
    {
      objective: 'L5', format: 'complete', difficulty: 3,
      stem: 'The outage lasted:',
      options: ['forty-five minutes.', 'twenty minutes.', 'forty minutes.', 'twenty-five minutes.'],
      answer: 0,
      why_correct: 'Empezó a las 2:40 y se resolvió a las 3:25: cuarenta y cinco minutos, como confirma Nina.',
      why_wrong: [
        'Veinte minutos es el tiempo que perdieron revisando la base de datos.',
        'Cuarenta aparece en la hora de inicio (two forty).',
        'Veinticinco aparece en la hora de fin (three twenty-five).'
      ],
      tip_es: 'Los distractores numéricos suelen tomar trozos de otras cifras del audio.',
      evidence: 'so the outage lasted forty-five minutes.'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'The team lost time at the start because they:',
      options: ['checked the database before looking at DNS.', 'waited for the load balancer configuration.', 'could not reach the on-call engineer.', 'did not have access to the DNS records.'],
      answer: 0,
      why_correct: 'Pensaron que era la base de datos y perdieron unos veinte minutos antes de mirar el DNS.',
      why_wrong: [
        'El balanceador nuevo era la causa, no lo que esperaban.',
        'Nadie menciona problemas para localizar a la guardia.',
        'Sí tenían acceso: cambiaron el registro para arreglarlo.'
      ],
      tip_es: '“which is why…” introduce la consecuencia de lo anterior.',
      evidence: 'which is why we lost about twenty minutes checking the database before anyone looked at DNS.'
    },
    {
      objective: 'L2', format: 'complete', difficulty: 2,
      stem: 'The cause of the outage was:',
      options: ['a DNS record pointing to an unready load balancer.', 'a failure in the login service.', 'a problem with the database that stores login details.', 'a missing approval on the dashboard.'],
      answer: 0,
      why_correct: 'Actualizaron un registro DNS hacia un balanceador nuevo que aún no estaba configurado.',
      why_wrong: [
        'Nina dice que el servicio de login funcionaba bien.',
        'La base de datos fue la sospecha inicial, no la causa.',
        'La aprobación doble es una mejora futura.'
      ],
      tip_es: 'Distingue la sospecha (“I assumed…”) de la causa confirmada.',
      evidence: 'Someone updated a DNS record to point to a new load balancer, but the new one hadn’t been fully configured yet.'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'When Paul says “That’s longer than I’d like”, he is:',
      options: ['showing mild dissatisfaction with the outage time.', 'criticising the quality of Nina’s report.', 'asking Nina for more technical details.', 'saying that the report is too long to read.'],
      answer: 0,
      why_correct: 'Se refiere a los 45 minutos de caída: le parece demasiado, dicho de forma suave.',
      why_wrong: [
        'Agradece el informe al principio.',
        'Pregunta qué van a cambiar, no por más detalles.',
        '“Longer” se refiere a la duración de la caída, no del informe.'
      ],
      tip_es: 'Relaciona el comentario con lo que se acaba de decir: aquí, la duración.',
      evidence: 'That’s longer than I’d like. What are we changing?'
    },
    {
      objective: 'L5', format: 'select', difficulty: 2,
      stem: 'Which improvement does Paul suggest?',
      options: ['A checklist for the on-call engineer.', 'A second approval for DNS changes.', 'DNS checks on the monitoring dashboard.', 'Replacing the new load balancer.'],
      answer: 0,
      why_correct: 'Paul añade una tercera medida: una lista de verificación para la persona de guardia.',
      why_wrong: [
        'Es una medida propuesta por Nina.',
        'También es una propuesta de Nina.',
        'Nadie propone sustituirlo.'
      ],
      tip_es: 'Cuando hay varias propuestas, asigna cada una a quien la dice.',
      evidence: 'I’d add a third: a short checklist for the on-call engineer'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'The service was restored by:',
      options: ['pointing the record back to the old load balancer.', 'finishing the configuration of the new load balancer quickly.', 'restarting the login service.', 'repairing the database.'],
      answer: 0,
      why_correct: 'Revirtieron el registro DNS al balanceador anterior.',
      why_wrong: [
        'No terminaron la configuración: volvieron atrás.',
        'El servicio de login funcionaba.',
        'La base de datos no tenía problemas.'
      ],
      tip_es: '“pointed … back to” = revertir a la situación anterior.',
      evidence: 'We pointed the record back to the old load balancer.'
    },
    {
      objective: 'L3', format: 'whose_opinion', difficulty: 3,
      stem: 'Statement: “The team spent too much time looking in the wrong place.”',
      answer: 2,
      why_correct: 'Nina lo reconoce: perdieron veinte minutos revisando la base de datos. Paul solo dice que él también sospechó de ella.',
      why_wrong: [
        'Paul no valora el tiempo perdido en la investigación.',
        'Paul no lo afirma.'
      ],
      tip_es: 'Compartir una sospecha no es lo mismo que opinar que se perdió tiempo.',
      evidence: 'we lost about twenty minutes checking the database before anyone looked at DNS.'
    }
  ]),

  ...buildItems('L', 'lst-10', 'V02', [
    {
      objective: 'L2', format: 'complete', difficulty: 1,
      stem: 'The speakers are trying to decide:',
      options: ['which language to use for a new service.', 'how to resize images more quickly.', 'who should be trained in Rust.', 'whether to rewrite an old service.'],
      answer: 0,
      why_correct: 'Comparan Python, Go y Rust para el nuevo servicio de procesamiento de imágenes.',
      why_wrong: [
        'El redimensionado es lo que hará el servicio, no la decisión.',
        'Rust se descarta; nadie recibirá formación en Rust.',
        'Es un servicio nuevo.'
      ],
      tip_es: 'Busca la decisión pendiente, no la función del sistema.',
      evidence: 'for the new image-processing service, I’d like to use Python.'
    },
    {
      objective: 'L3', format: 'complete', difficulty: 2,
      stem: 'Emma’s main concern about Python is:',
      options: ['handling many requests at the same time.', 'the time the rest of the team would need to learn it.', 'the size of the binary it produces.', 'the lack of libraries for images.'],
      answer: 0,
      why_correct: 'Acepta que el redimensionado usa código C, pero le preocupa la concurrencia.',
      why_wrong: [
        'El equipo ya conoce Python.',
        'El binario único es una ventaja de Go.',
        'Lucas dice que Python usa librerías en C para eso.'
      ],
      tip_es: '“That’s true for X. But…”: la preocupación real va después del “But”.',
      evidence: 'But we also need to handle a lot of requests at the same time, and that’s where I’ve seen Python struggle.'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'Rust is rejected because:',
      options: ['it would take the team too long to learn.', 'it cannot handle many requests at once.', 'it does not compile to a single binary.', 'nobody has measured its performance.'],
      answer: 0,
      why_correct: 'Lucas dice que tardarían meses en aprenderlo y Emma está de acuerdo.',
      why_wrong: [
        'Nadie critica la concurrencia de Rust.',
        'La ventaja del binario se atribuye a Go, pero no se niega en Rust.',
        'No miden Rust porque ya lo descartaron.'
      ],
      tip_es: '“Agreed, so X is out” = descartado por la razón anterior.',
      evidence: 'Rust would take the team months to learn. ... Agreed, so Rust is probably out.'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'When Emma says “Fair point”, she:',
      options: ['accepts that training would be needed.', 'thinks Python is the better choice after all.', 'disagrees with Lucas about Go.', 'suggests choosing Rust instead.'],
      answer: 0,
      why_correct: 'Responde a “we need training”: reconoce el argumento y propone medirlo con prototipos.',
      why_wrong: [
        'Aún no decide; propone comparar.',
        'Es acuerdo, no desacuerdo.',
        'Rust ya está descartado.'
      ],
      tip_es: '“Fair point” = reconozco tu argumento.',
      evidence: 'OK, but if we choose Go, we need training. ... Fair point.'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'The final decision will be made:',
      options: ['after comparing two prototypes.', 'at the end of the Go training.', 'when Mateo has learned Python.', 'before any prototype is built.'],
      answer: 0,
      why_correct: 'Primero construirán prototipos en Python y Go y medirán; “Then we decide”.',
      why_wrong: [
        'La formación no está planificada todavía.',
        'Mateo ya sabe Go.',
        'Es al revés: después de los prototipos.'
      ],
      tip_es: '“Then…” marca lo que ocurre después del paso anterior.',
      evidence: 'Let’s build a small prototype in both Python and Go next week and measure the performance. Then we decide with real numbers.'
    },
    {
      objective: 'L5', format: 'select', difficulty: 1,
      stem: 'How many team members have used Go before?',
      options: ['Two.', 'One.', 'Three.', 'None.'],
      answer: 0,
      why_correct: '“Only two people have used it before”, y Mateo es uno de ellos.',
      why_wrong: [
        'Mateo es uno de los dos, no el único.',
        'Nadie dice tres.',
        'Sí hay personas que lo han usado.'
      ],
      tip_es: '“one of the two” confirma la cifra total.',
      evidence: 'Only two people have used it before.'
    },
    {
      objective: 'L2', format: 'whose_opinion', difficulty: 2,
      stem: 'Statement: “Rust would be too difficult for the team to learn quickly.”',
      answer: 0,
      why_correct: 'Lucas lo dice y Emma responde “Agreed”.',
      why_wrong: [
        'Emma también lo afirma con “Agreed”.',
        'Lucas fue quien lo planteó.'
      ],
      tip_es: '“Agreed” convierte la opinión en compartida.',
      evidence: 'Rust would take the team months to learn. ... Agreed'
    }
  ]),

  ...buildItems('L', 'lst-11', 'V03', [
    {
      objective: 'L5', format: 'complete', difficulty: 2,
      stem: 'Compared with ServiceHub, DeskFlow costs about:',
      options: ['8,000 less per year.', '12,000 less per year.', '4,000 less per year.', '20,000 less per year.'],
      answer: 0,
      why_correct: 'DeskFlow cuesta unos 8.000 menos que ServiceHub y 12.000 menos que TicketPro.',
      why_wrong: [
        'Es la diferencia con TicketPro.',
        'Es la diferencia entre ServiceHub y TicketPro, que no se pregunta.',
        'Suma las dos cifras.'
      ],
      tip_es: 'Con dos comparaciones en la misma frase, comprueba con qué producto se compara.',
      evidence: 'About eight thousand a year less than ServiceHub, and twelve thousand less than TicketPro.'
    },
    {
      objective: 'L3', format: 'complete', difficulty: 2,
      stem: 'Diana is not comfortable with DeskFlow because:',
      options: ['it cannot connect to the chat system yet.', 'it is too expensive for the current budget.', 'its 24-hour support costs extra.', 'the agents have not tested it.'],
      answer: 0,
      why_correct: 'La integración con el chat era imprescindible y DeskFlow aún no la tiene.',
      why_wrong: [
        'Es la opción más barata.',
        'Eso se dice de TicketPro.',
        'Las pruebas con agentes son para ServiceHub.'
      ],
      tip_es: '“must-haves” = requisitos imprescindibles: si faltan, se descarta la opción.',
      evidence: 'Then I’m not comfortable with it. Our agents handle about half of their requests through chat.'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 3,
      stem: 'TicketPro is not chosen because:',
      options: ['24-hour support would take it over budget.', 'it does not connect to the chat system.', 'it does not offer a free trial period.', 'its chat integration is planned for later.'],
      answer: 0,
      why_correct: 'El soporte 24 horas solo está en el plan premium, que superaría el presupuesto.',
      why_wrong: [
        'Ese problema es de DeskFlow.',
        'Nadie habla de pruebas de TicketPro.',
        'Eso se dice de DeskFlow.'
      ],
      tip_es: '“which would push it over budget” explica la consecuencia de la frase anterior.',
      evidence: 'TicketPro only offers it on the premium plan, which would push it over budget.'
    },
    {
      objective: 'L2', format: 'complete', difficulty: 1,
      stem: 'At the end, the speakers agree to:',
      options: ['try ServiceHub for thirty days.', 'buy DeskFlow straight away.', 'ask TicketPro for a discount.', 'wait until next year to decide.'],
      answer: 0,
      why_correct: 'Diana pide una prueba y Victor la configurará: treinta días gratis.',
      why_wrong: [
        'DeskFlow se descarta por la integración.',
        'Nadie habla de descuentos.',
        '“Next year” es cuando DeskFlow planea la integración.'
      ],
      tip_es: 'La decisión final suele llegar con “Please do” o “Let’s…”.',
      evidence: 'They offer thirty days free. I can set it up from Monday. ... Please do.'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'When Diana says “That’s significant”, she is:',
      options: ['recognising that the saving is important.', 'complaining that DeskFlow is too cheap.', 'saying that the price does not matter.', 'asking Victor to repeat the figures.'],
      answer: 0,
      why_correct: 'Reconoce que la diferencia de precio es importante, aunque luego pone una condición.',
      why_wrong: [
        'No es una queja.',
        'Dice lo contrario: sí importa.',
        'No pide repetir nada.'
      ],
      tip_es: '“That’s significant. But…” = reconoce una ventaja antes de una objeción.',
      evidence: 'That’s significant. But does DeskFlow integrate with our chat system?'
    },
    {
      objective: 'L5', format: 'select', difficulty: 1,
      stem: 'How many agents will test the tool with real tickets?',
      options: ['Two.', 'Three.', 'Half of them.', 'Thirty.'],
      answer: 0,
      why_correct: 'Diana pedirá a dos agentes que lo prueben.',
      why_wrong: [
        'Tres es el número de herramientas comparadas.',
        '“Half” se refiere a las solicitudes por chat.',
        'Treinta son los días de prueba.'
      ],
      tip_es: 'Cada número del audio tiene un referente distinto: herramientas, días, personas.',
      evidence: 'I’ll ask two agents to test it with real tickets.'
    },
    {
      objective: 'L3', format: 'whose_opinion', difficulty: 2,
      stem: 'Statement: “The missing chat integration is a serious problem.”',
      answer: 2,
      why_correct: 'Diana lo considera un requisito imprescindible. Victor solo responde “I see” y propone otra herramienta.',
      why_wrong: [
        'Victor no expresa una opinión sobre la integración.',
        'Victor no lo afirma.'
      ],
      tip_es: '“I see” indica que entiendes, no que estás de acuerdo.',
      evidence: 'Then I’m not comfortable with it.'
    }
  ]),

  ...buildItems('L', 'lst-12', 'V07', [
    {
      objective: 'L2', format: 'complete', difficulty: 1,
      stem: 'Helen is calling because:',
      options: ['she cannot connect to the VPN from home.', 'her password expired this morning.', 'her authenticator app is not working.', 'she needs to install a security update.'],
      answer: 0,
      why_correct: 'Es lo primero que dice: no puede conectarse a la VPN desde casa.',
      why_wrong: [
        'Ya cambió la contraseña; eso no es el motivo de la llamada.',
        'La app funciona: introduce el código sin problemas.',
        'La actualización se menciona al final como paso extra.'
      ],
      tip_es: 'El motivo de una llamada de soporte casi siempre está en la primera frase.',
      evidence: 'Hi, I can’t connect to the VPN from home.'
    },
    {
      objective: 'L4', format: 'complete', difficulty: 2,
      stem: 'The connection probably failed because:',
      options: ['the client still had the old password saved.', 'Helen typed the wrong code from her authenticator app.', 'the VPN was down for maintenance.', 'Helen’s password had already expired.'],
      answer: 0,
      why_correct: 'Ravi explica que el cliente VPN a veces guarda la contraseña anterior.',
      why_wrong: [
        'El código lo introduce después y funciona.',
        'Nadie menciona mantenimiento.',
        'La había cambiado por la mañana precisamente por eso.'
      ],
      tip_es: '“That’s probably it” señala la causa más probable que se explica después.',
      evidence: 'The VPN client sometimes keeps the old password saved.'
    },
    {
      objective: 'L5', format: 'complete', difficulty: 1,
      stem: 'After typing her new password, Helen must enter:',
      options: ['a six-digit code from her app.', 'her previous password.', 'a code sent to her by email.', 'her employee number.'],
      answer: 0,
      why_correct: 'Primero la nueva contraseña y “then” el código de seis dígitos de la app.',
      why_wrong: [
        'La anterior es justo la que causa el problema.',
        'El código viene de la app, no del email.',
        'Nadie lo menciona.'
      ],
      tip_es: '“and then…” indica el segundo paso.',
      evidence: 'Type your new password, and then the six-digit code from your authenticator app.'
    },
    {
      objective: 'L3', format: 'complete', difficulty: 2,
      stem: 'When Helen says “I feel a bit silly now”, she is:',
      options: ['slightly embarrassed that the fix was simple.', 'angry that nobody sent her a guide.', 'worried that she broke the VPN client on her laptop.', 'unhappy with the help she received.'],
      answer: 0,
      why_correct: 'Se avergüenza un poco porque la solución era sencilla.',
      why_wrong: [
        'La guía todavía no se ha enviado a nadie; no se queja.',
        'Ya está conectada.',
        'Acaba de decir “It worked!”.'
      ],
      tip_es: '“Silly” = tonto/a en sentido ligero: vergüenza, no enfado.',
      evidence: 'It worked! I’m connected. Sorry, I feel a bit silly now.'
    },
    {
      objective: 'L1', format: 'complete', difficulty: 2,
      stem: 'Ravi’s reply “Not at all” is meant to:',
      options: ['reassure Helen that she did nothing wrong.', 'refuse to give Helen any more help.', 'say that the call was not common.', 'say that the problem is not solved.'],
      answer: 0,
      why_correct: 'Le quita importancia y explica que es una de las llamadas más comunes.',
      why_wrong: [
        'Después sigue ayudándola.',
        'Dice lo contrario: es muy común.',
        'El problema ya está resuelto.'
      ],
      tip_es: '“Not at all” como respuesta a una disculpa = no te preocupes.',
      evidence: 'Not at all. It’s one of the most common calls we get.'
    },
    {
      objective: 'L5', format: 'select', difficulty: 1,
      stem: 'What should Helen do before the end of the day?',
      options: ['Restart her laptop.', 'Read the new guide.', 'Change her password again.', 'Call the helpdesk back.'],
      answer: 0,
      why_correct: 'Debe reiniciar el portátil para que se instale una actualización de seguridad.',
      why_wrong: [
        'La guía llegará la semana próxima.',
        'Acaba de cambiarla.',
        'Ravi dice “That’s all”.'
      ],
      tip_es: '“Just… That’s all” marca la última instrucción.',
      evidence: 'Just restart your laptop before the end of the day so it picks up a security update.'
    },
    {
      objective: 'L2', format: 'whose_opinion', difficulty: 2,
      stem: 'Statement: “A short guide about this problem would be helpful.”',
      answer: 0,
      why_correct: 'Ravi anuncia la guía y Helen responde “That would be useful”.',
      why_wrong: [
        'Helen también lo valora.',
        'Ravi es quien la propone.'
      ],
      tip_es: '“That would be useful” = acuerdo con la propuesta.',
      evidence: 'we’re planning to send everyone a short guide about it next week. ... That would be useful.'
    }
  ])
];
