import { ReadingText, Question } from '../../types';
import { buildItems, countWords } from './buildItems';

/**
 * Official-format Reading set 1: support tooling, incident report, remote-work policy (two sources),
 * infrastructure as code and MFA fatigue attacks.
 */

const text = (id: string, title: string, topic: ReadingText['topic'], body: string): ReadingText => ({
  id, title, topic, wordCount: countWords(body), text: body
});

export const READING_SET_1_TEXTS: Record<string, ReadingText> = {
  'rdg-01': text('rdg-01', 'Choosing a ticketing system for a growing support team', 'V03',
`Paragraph A
Eighteen months ago our support team had six agents and used a shared email inbox to manage customer requests. Today we have twenty-two agents across three time zones, and the inbox has become a serious problem. Some messages are answered twice, others are not answered at all, and managers have no reliable way to measure response times.

Paragraph B
To solve this, we compared three ticketing systems over a four-week period. Each tool was tested by the same group of five agents, who handled real requests in parallel with the old inbox. We scored the tools on ease of use, reporting, integration with our chat platform, and total cost over three years.

Paragraph C
The results were closer than expected. HelpLine scored highest for ease of use, and agents said they could work with it after a single training session. However, its reports could not show response times by time zone, which is essential for planning shifts. Assistly offered the most detailed reports but was the most expensive option and required two days of training.

Paragraph D
We recommend Supportly. It did not win any single category, but it was the only tool that met all of our minimum requirements, including chat integration and time-zone reporting. Its three-year cost is about fifteen percent lower than Assistly’s. If the management team approves this recommendation by the end of the month, the migration can be completed before the busy holiday period.`),

  'rdg-02': text('rdg-02', 'Incident report: mobile payment failures', 'V07',
`Paragraph A
Summary. On 4 June, between 09:12 and 10:47 UTC, about 18% of payment requests from our mobile apps failed. Web payments were not affected. No customer data was lost, and all failed payments were safely declined rather than charged twice.

Paragraph B
Cause. A configuration change deployed at 09:05 reduced the maximum number of connections between the payment API and the fraud-checking service from 500 to 50. The change was intended for the testing environment only, but it was applied to production because both environments shared the same configuration file.

Paragraph C
Response. Monitoring alerts were triggered at 09:20, eight minutes after the first errors. The on-call engineer initially suspected a network problem with the mobile provider, which delayed the diagnosis. The configuration was rolled back at 10:40, and error rates returned to normal seven minutes later.

Paragraph D
Next steps. From next week, production and testing will use separate configuration files. Configuration changes will also be reviewed by a second engineer, and the alert threshold will be lowered so that a problem of this size is detected within two minutes. A summary of this report will be shared with our three largest clients.`),

  'rdg-03': text('rdg-03', 'Equipment for remote employees', 'V05',
`Source 1 – Equipment policy for remote employees (excerpt)
1. Employees who work from home three or more days a week are entitled to a second monitor, a keyboard and a mouse provided by the company.
2. Laptops are replaced every four years, or earlier if the IT department confirms a hardware fault.
3. Personal devices may be used for email and chat only. Company files must never be stored on personal devices.
4. Requests for equipment must be approved by the employee’s line manager before IT can process them. Delivery normally takes ten working days after approval.

Source 2 – Email from Pablo (Data analyst) to the IT department
Hi, I’ve been working from home two days a week since January, but from next month I’ll be at home four days a week. My laptop is three years old and the battery only lasts about forty minutes now, which makes it hard to work in meetings away from my desk. Could I get a second monitor and a new laptop? Also, would it be OK to download some reports to my personal tablet so I can read them on the train? Thanks, Pablo`),

  'rdg-04': text('rdg-04', 'Why more teams are adopting infrastructure as code', 'V01',
`Paragraph A
For many years, servers and networks were configured by hand. An engineer would log in, change a setting and, if they were careful, write a note about it. The problem is that notes are often incomplete. When the engineer leaves or simply forgets, nobody knows exactly how a system was built or why it behaves the way it does.

Paragraph B
Infrastructure as code (IaC) solves this by describing servers, networks and permissions in text files. These files are stored in version control, just like application code, so every change has an author, a date and a reason. If a change causes a problem, the team can see exactly what was modified and return to the previous version in minutes.

Paragraph C
IaC also makes environments consistent. Because the testing and production environments are created from the same files, a feature that works in testing is far more likely to work in production. Teams that adopt IaC often report fewer of the “it works on my machine” problems that slow down releases.

Paragraph D
However, IaC is not a quick fix. Writing good configuration files takes time, and engineers need to learn new tools. Some teams also make the mistake of storing passwords directly in these files, which creates a serious security risk. Experts recommend starting with one small, non-critical system and expanding gradually once the team is confident.`),

  'rdg-05': text('rdg-05', 'MFA fatigue: when the security prompt becomes the attack', 'V04',
`Paragraph A
Multi-factor authentication (MFA) is one of the most effective ways to protect accounts. Even if an attacker steals a password, they usually cannot sign in without the second factor, such as a code or a notification on the user’s phone. For this reason, attackers have started looking for ways to make users approve the second factor themselves.

Paragraph B
In an MFA fatigue attack, the attacker repeatedly tries to sign in with a stolen password. Each attempt sends a push notification to the real user’s phone. After ten, twenty or fifty notifications, often late at night, some users approve one simply to make them stop. In other cases, the attacker calls the user, pretends to be from the IT department and asks them to accept a “test” notification.

Paragraph C
There are several warning signs. Users should be suspicious of any notification they did not expect, especially if they are not trying to sign in at that moment. A large number of notifications in a short time is almost always a sign of an attack. Genuine IT staff will never ask a user to approve a sign-in request by phone.

Paragraph D
Organisations can reduce the risk by switching to number matching, where the user must type a number shown on the sign-in screen into their phone. This makes it impossible to approve a request without seeing the screen. Users who receive unexpected notifications should deny them and report them to the security team immediately, even if they think it might be a mistake.`)
};

export const READING_SET_1_QUESTIONS: Question[] = [
  ...buildItems('R', 'rdg-01', 'V03', [
    {
      objective: 'R2', format: 'paragraph', difficulty: 1,
      stem: 'Which paragraph describes how the tools were tested?',
      answer: 1,
      why_correct: 'El párrafo B explica el método: cuatro semanas, cinco agentes, solicitudes reales y cuatro criterios.',
      why_wrong: ['A describe el problema actual.', 'C presenta los resultados.', 'D da la recomendación.'],
      tip_es: 'Etiqueta cada párrafo: A problema, B método, C resultados, D recomendación.',
      evidence: 'Each tool was tested by the same group of five agents'
    },
    {
      objective: 'R2', format: 'paragraph', difficulty: 1,
      stem: 'Which paragraph explains the problems with the current way of working?',
      answer: 0,
      why_correct: 'A describe los fallos del buzón compartido: respuestas duplicadas, mensajes sin responder y sin métricas.',
      why_wrong: ['B habla de la prueba de herramientas.', 'C compara herramientas nuevas.', 'D recomienda una solución.'],
      tip_es: '“has become a serious problem” marca el párrafo del problema.',
      evidence: 'the inbox has become a serious problem.'
    },
    {
      objective: 'R4', format: 'select', difficulty: 1,
      stem: 'What is the main purpose of the text?',
      options: [
        'To recommend a tool and explain the choice.',
        'To describe how new support agents are trained.',
        'To compare support teams in different time zones.',
        'To announce that the migration has been completed.'
      ],
      answer: 0,
      why_correct: 'El texto plantea un problema, compara herramientas y termina con “We recommend Supportly”.',
      why_wrong: [
        'La formación aparece solo como dato de cada herramienta.',
        'Las zonas horarias son un requisito, no el tema.',
        'La migración depende de una aprobación futura.'
      ],
      tip_es: 'El propósito suele aparecer en el último párrafo de un informe (“We recommend…”).',
      evidence: 'We recommend Supportly.'
    },
    {
      objective: 'R1', format: 'complete', difficulty: 2,
      stem: 'HelpLine was not recommended because:',
      options: [
        'its reports could not show response times by time zone.',
        'agents needed two full days of training to use it.',
        'it was the most expensive of the three tools tested.',
        'it scored the lowest of all three for ease of use.'
      ],
      answer: 0,
      why_correct: 'HelpLine era la más fácil de usar, pero sus informes no mostraban tiempos por zona horaria, algo esencial.',
      why_wrong: [
        'Los dos días de formación son de Assistly.',
        'La más cara era Assistly.',
        'Al contrario: obtuvo la mejor puntuación en facilidad de uso.'
      ],
      tip_es: 'Con “However” el texto pasa de la ventaja al problema: la respuesta va después.',
      evidence: 'However, its reports could not show response times by time zone, which is essential for planning shifts.'
    },
    {
      objective: 'R1', format: 'agrees', difficulty: 2,
      stem: 'The writer states that:',
      options: [
        'Supportly costs less than Assistly over three years.',
        'Supportly scored highest in at least one category.',
        'Neither'
      ],
      answer: 0,
      why_correct: 'Su coste a tres años es un 15 % menor que el de Assistly. No ganó ninguna categoría.',
      why_wrong: [
        'El texto dice “It did not win any single category”.',
        'La primera afirmación sí coincide con el texto.'
      ],
      tip_es: 'En “agrees or neither”, comprueba cada afirmación por separado antes de elegir.',
      evidence: 'Its three-year cost is about fifteen percent lower than Assistly’s.'
    },
    {
      objective: 'R3', format: 'select', difficulty: 1,
      stem: 'How many agents tested the tools?',
      options: ['Five.', 'Six.', 'Twenty-two.', 'Three.'],
      answer: 0,
      why_correct: 'Las herramientas las probó el mismo grupo de cinco agentes.',
      why_wrong: [
        'Seis era el tamaño del equipo hace 18 meses.',
        'Veintidós es el equipo actual.',
        'Tres son las herramientas y las zonas horarias.'
      ],
      tip_es: 'Al escanear números, lee la frase entera: cada cifra se refiere a algo distinto.',
      evidence: 'Each tool was tested by the same group of five agents'
    },
    {
      objective: 'R5', format: 'select', difficulty: 2,
      stem: 'Why does the writer mention the holiday period?',
      options: [
        'To show why approval this month matters.',
        'To explain when most agents take holidays.',
        'To describe when the four-week test took place.',
        'To justify choosing the cheapest tool available.'
      ],
      answer: 0,
      why_correct: 'Si se aprueba antes de fin de mes, la migración estará lista antes del periodo de más trabajo.',
      why_wrong: [
        'Habla de un periodo de mucho trabajo, no de vacaciones del equipo.',
        'No se dice cuándo fue la prueba.',
        'Supportly no es necesariamente la más barata.'
      ],
      tip_es: 'Para saber por qué se menciona algo, mira la condición que lo acompaña (“If… by the end of the month”).',
      evidence: 'If the management team approves this recommendation by the end of the month, the migration can be completed before the busy holiday period.'
    },
    {
      objective: 'R4', format: 'agrees', difficulty: 2,
      stem: 'The writer states that:',
      options: [
        'the email inbox could still work if it were managed better.',
        'reporting by time zone is necessary for the team.',
        'Neither'
      ],
      answer: 1,
      why_correct: 'Los informes por zona horaria son “essential for planning shifts”.',
      why_wrong: [
        'El texto presenta el buzón como un problema serio, no como algo que se pueda salvar.',
        'La segunda afirmación sí coincide con el texto.'
      ],
      tip_es: '“essential” = necesario, imprescindible.',
      evidence: 'which is essential for planning shifts.'
    }
  ]),

  ...buildItems('R', 'rdg-02', 'V07', [
    {
      objective: 'R3', format: 'select', difficulty: 2,
      stem: 'How long did the payment problem last?',
      options: ['About an hour and a half.', 'Eight minutes.', 'Seven minutes.', 'About two hours.'],
      answer: 0,
      why_correct: 'De 09:12 a 10:47 son 95 minutos, alrededor de hora y media.',
      why_wrong: [
        'Ocho minutos es lo que tardaron las alertas.',
        'Siete minutos es lo que tardó en normalizarse tras el rollback.',
        'Exagera la duración.'
      ],
      tip_es: 'Si te dan dos horas, calcula tú la duración; los distractores usan otras cifras del texto.',
      evidence: 'between 09:12 and 10:47 UTC'
    },
    {
      objective: 'R1', format: 'complete', difficulty: 2,
      stem: 'Mobile customers who tried to pay during the incident:',
      options: [
        'had their payments declined, not charged twice.',
        'were charged twice for some of their payments.',
        'lost some of their personal data in the failure.',
        'were redirected to the web payment page instead.'
      ],
      answer: 0,
      why_correct: 'Los pagos fallidos se rechazaron de forma segura en lugar de cobrarse dos veces.',
      why_wrong: [
        'Es justo lo que el texto niega.',
        'No se perdieron datos.',
        'No se menciona ninguna redirección.'
      ],
      tip_es: '“rather than” = en lugar de: lo que va después NO ocurrió.',
      evidence: 'all failed payments were safely declined rather than charged twice.'
    },
    {
      objective: 'R2', format: 'paragraph', difficulty: 2,
      stem: 'Which paragraph explains why a test setting reached the live system?',
      answer: 1,
      why_correct: 'B explica que el cambio era para pruebas, pero se aplicó a producción porque compartían archivo.',
      why_wrong: ['A resume el impacto.', 'C describe la respuesta.', 'D describe medidas futuras (sí menciona archivos separados, pero no explica por qué ocurrió).'],
      tip_es: '“live system” = production. Busca la explicación, no la solución.',
      evidence: 'it was applied to production because both environments shared the same configuration file.'
    },
    {
      objective: 'R2', format: 'paragraph', difficulty: 2,
      stem: 'Which paragraph mentions a wrong first guess about the cause?',
      answer: 2,
      why_correct: 'C: la persona de guardia sospechó primero de la red del proveedor móvil, lo que retrasó el diagnóstico.',
      why_wrong: ['A no habla de causas.', 'B da la causa real.', 'D habla de mejoras.'],
      tip_es: '“initially suspected” = primera sospecha (que resultó equivocada).',
      evidence: 'The on-call engineer initially suspected a network problem with the mobile provider, which delayed the diagnosis.'
    },
    {
      objective: 'R4', format: 'select', difficulty: 1,
      stem: 'The main purpose of the report is to:',
      options: [
        'explain what happened and how it will be prevented.',
        'blame the mobile provider for the network failure.',
        'announce a new fraud-checking service for clients.',
        'ask clients to stop using mobile payments until next week.'
      ],
      answer: 0,
      why_correct: 'Resume, explica la causa, describe la respuesta y lista los próximos pasos.',
      why_wrong: [
        'El proveedor fue una sospecha equivocada.',
        'El servicio de fraude ya existía.',
        'Nadie pide eso.'
      ],
      tip_es: 'Los títulos internos (Summary, Cause, Response, Next steps) revelan el propósito.',
      evidence: 'Next steps.'
    },
    {
      objective: 'R1', format: 'agrees', difficulty: 2,
      stem: 'The report states that:',
      options: [
        'web payments continued to work during the incident.',
        'the alerts started as soon as the first errors appeared.',
        'Neither'
      ],
      answer: 0,
      why_correct: '“Web payments were not affected.” Las alertas llegaron ocho minutos después de los primeros errores.',
      why_wrong: [
        'Las alertas tardaron ocho minutos.',
        'La primera afirmación sí coincide con el texto.'
      ],
      tip_es: '“not affected” = siguió funcionando con normalidad.',
      evidence: 'Web payments were not affected.'
    },
    {
      objective: 'R5', format: 'complete', difficulty: 3,
      stem: 'Combining paragraphs A and B, the configuration change was deployed:',
      options: [
        'seven minutes before the first errors.',
        'eight minutes after the first errors.',
        'at the same time as the rollback.',
        'two minutes before the alerts started.'
      ],
      answer: 0,
      why_correct: 'El cambio se desplegó a las 09:05 (B) y los errores empezaron a las 09:12 (A): siete minutos antes.',
      why_wrong: [
        'Ocho minutos es el retraso de las alertas.',
        'El rollback fue a las 10:40.',
        'Las alertas fueron a las 09:20, quince minutos después del cambio.'
      ],
      tip_es: 'En preguntas que combinan párrafos, anota las horas de cada uno y calcula.',
      evidence: 'between 09:12 and 10:47 UTC ... A configuration change deployed at 09:05'
    },
    {
      objective: 'R4', format: 'agrees', difficulty: 2,
      stem: 'The report states that:',
      options: [
        'the on-call engineer should be replaced.',
        'information about the incident will be shared with some clients.',
        'Neither'
      ],
      answer: 1,
      why_correct: 'Se compartirá un resumen con los tres clientes más grandes.',
      why_wrong: [
        'El informe no culpa ni propone sustituir a nadie.',
        'La segunda afirmación sí coincide con el texto.'
      ],
      tip_es: '“some clients” parafrasea “our three largest clients”.',
      evidence: 'A summary of this report will be shared with our three largest clients.'
    }
  ]),

  ...buildItems('R', 'rdg-03', 'V05', [
    {
      objective: 'R5', format: 'select', difficulty: 2,
      stem: 'From next month, which item is Pablo clearly entitled to?',
      options: ['A second monitor.', 'A personal tablet.', 'A new laptop immediately.', 'Nothing until January.'],
      answer: 0,
      why_correct: 'Trabajará cuatro días desde casa (más de tres), así que tiene derecho a monitor, teclado y ratón.',
      why_wrong: [
        'La empresa no da tabletas.',
        'El portátil solo se cambia antes si IT confirma una avería.',
        'Enero es cuando empezó a trabajar dos días desde casa.'
      ],
      tip_es: 'Aplica la regla de la política al dato del email: 4 días ≥ 3 días.',
      evidence: 'from next month I’ll be at home four days a week ... three or more days a week are entitled to a second monitor'
    },
    {
      objective: 'R5', format: 'complete', difficulty: 3,
      stem: 'Pablo could get a new laptop before the usual four years if:',
      options: [
        'IT confirms the battery problem is a hardware fault.',
        'his line manager says he works from home enough.',
        'he works from home three or more days a week.',
        'he returns his second monitor to the office.'
      ],
      answer: 0,
      why_correct: 'Su portátil tiene tres años; la política permite cambiarlo antes si IT confirma un fallo de hardware.',
      why_wrong: [
        'El jefe aprueba solicitudes, no decide sobre averías.',
        'Los días en casa dan derecho al monitor, no al portátil.',
        'No existe esa condición.'
      ],
      tip_es: 'Cada regla de la política tiene su condición; no las mezcles.',
      evidence: 'or earlier if the IT department confirms a hardware fault.'
    },
    {
      objective: 'R5', format: 'agrees', difficulty: 3,
      stem: 'According to the two sources:',
      options: [
        'Pablo may download the reports to his personal tablet.',
        'Pablo is already entitled to a second monitor.',
        'Neither'
      ],
      answer: 2,
      why_correct: 'Los archivos de la empresa nunca pueden guardarse en dispositivos personales, y hoy Pablo solo trabaja dos días desde casa.',
      why_wrong: [
        'Descargar informes en su tableta es justo lo que la regla 3 prohíbe.',
        'Ahora trabaja dos días desde casa; el derecho empieza con tres.'
      ],
      tip_es: 'Fíjate en el tiempo verbal: “already” (ahora) frente a “from next month”.',
      evidence: 'Company files must never be stored on personal devices. ... I’ve been working from home two days a week since January'
    },
    {
      objective: 'R1', format: 'select', difficulty: 1,
      stem: 'According to the policy, personal devices can be used for:',
      options: ['email and chat only.', 'reading reports on trips.', 'any work, if approved.', 'meetings away from the desk.'],
      answer: 0,
      why_correct: 'La regla 3 limita los dispositivos personales a email y chat.',
      why_wrong: [
        'Es lo que Pablo quiere hacer, pero no está permitido.',
        'No hay aprobación que lo permita.',
        'Las reuniones las menciona Pablo por la batería del portátil.'
      ],
      tip_es: '“only” limita: cualquier uso adicional queda fuera.',
      evidence: 'Personal devices may be used for email and chat only.'
    },
    {
      objective: 'R3', format: 'select', difficulty: 1,
      stem: 'How long does delivery normally take after approval?',
      options: ['Ten working days.', 'Four weeks.', 'Forty minutes.', 'Three days.'],
      answer: 0,
      why_correct: 'La entrega suele tardar diez días hábiles después de la aprobación.',
      why_wrong: [
        'Cuatro son los años de vida del portátil.',
        'Cuarenta minutos dura la batería.',
        'Tres días es el mínimo de teletrabajo.'
      ],
      tip_es: 'Escanea por la palabra de la pregunta (“Delivery”) y lee esa frase.',
      evidence: 'Delivery normally takes ten working days after approval.'
    },
    {
      objective: 'R1', format: 'complete', difficulty: 2,
      stem: 'Before IT can process Pablo’s request, it must be:',
      options: [
        'approved by his line manager.',
        'checked by the IT department.',
        'sent from a company device.',
        'submitted ten days in advance.'
      ],
      answer: 0,
      why_correct: 'La regla 4 exige la aprobación del jefe directo antes de que IT tramite nada.',
      why_wrong: [
        'IT lo tramita después; la revisión de IT es para averías.',
        'No hay requisito sobre el dispositivo.',
        'Los diez días son de entrega, no de antelación.'
      ],
      tip_es: '“before IT can…” indica el requisito previo.',
      evidence: 'Requests for equipment must be approved by the employee’s line manager before IT can process them.'
    },
    {
      objective: 'R4', format: 'select', difficulty: 1,
      stem: 'The main purpose of Pablo’s email is to:',
      options: [
        'ask for equipment and check what is allowed.',
        'complain about the quality of his laptop.',
        'explain why he will work from home more.',
        'report a security problem with his tablet.'
      ],
      answer: 0,
      why_correct: 'Pide monitor y portátil y pregunta si puede usar su tableta.',
      why_wrong: [
        'Menciona la batería como motivo, no como queja.',
        'No explica el porqué del cambio.',
        'No hay ningún problema de seguridad todavía.'
      ],
      tip_es: 'Las preguntas del email (“Could I…?”, “would it be OK…?”) revelan su propósito.',
      evidence: 'Could I get a second monitor and a new laptop?'
    },
    {
      objective: 'R2', format: 'agrees', difficulty: 2,
      stem: 'The policy states that:',
      options: [
        'equipment requests need a manager’s approval.',
        'laptops are replaced every three years.',
        'Neither'
      ],
      answer: 0,
      why_correct: 'La regla 4 lo dice. Los portátiles se cambian cada cuatro años, no tres.',
      why_wrong: [
        'Son cuatro años; tres es la edad del portátil de Pablo.',
        'La primera afirmación sí coincide.'
      ],
      tip_es: 'Los distractores mezclan cifras de las dos fuentes.',
      evidence: 'Requests for equipment must be approved by the employee’s line manager'
    }
  ]),

  ...buildItems('R', 'rdg-04', 'V01', [
    {
      objective: 'R2', format: 'paragraph', difficulty: 2,
      stem: 'Which paragraph warns about a security mistake?',
      answer: 3,
      why_correct: 'D advierte de guardar contraseñas directamente en los archivos.',
      why_wrong: ['A habla de notas incompletas.', 'B explica el control de versiones.', 'C habla de entornos coherentes.'],
      tip_es: '“security risk” es la pista; confirma que el párrafo lo presenta como error.',
      evidence: 'Some teams also make the mistake of storing passwords directly in these files, which creates a serious security risk.'
    },
    {
      objective: 'R2', format: 'paragraph', difficulty: 2,
      stem: 'Which paragraph explains how IaC helps when a change goes wrong?',
      answer: 1,
      why_correct: 'B: se ve qué cambió y se vuelve a la versión anterior en minutos.',
      why_wrong: ['A describe el problema manual.', 'C trata de la coherencia entre entornos.', 'D trata de las dificultades.'],
      tip_es: '“goes wrong” ↔ “causes a problem”.',
      evidence: 'If a change causes a problem, the team can see exactly what was modified and return to the previous version in minutes.'
    },
    {
      objective: 'R4', format: 'select', difficulty: 2,
      stem: 'What is the writer’s overall view of IaC?',
      options: [
        'It is useful but needs time and care.',
        'It should replace all manual work at once.',
        'It mainly helps teams to save money.',
        'It is too risky to use for production systems.'
      ],
      answer: 0,
      why_correct: 'B y C muestran ventajas; D advierte que no es una solución rápida y recomienda empezar poco a poco.',
      why_wrong: [
        'Recomienda empezar con un sistema pequeño.',
        'El texto no habla de dinero.',
        'Señala un riesgo concreto, pero no rechaza IaC.'
      ],
      tip_es: 'Equilibra ventajas (B, C) y desventajas (D) para encontrar la postura global.',
      evidence: 'However, IaC is not a quick fix.'
    },
    {
      objective: 'R1', format: 'complete', difficulty: 1,
      stem: 'According to the text, manual configuration is a problem because:',
      options: [
        'notes about changes are often incomplete.',
        'engineers are not allowed to log in to servers.',
        'it requires very expensive testing tools.',
        'changes cannot be made directly in production.'
      ],
      answer: 0,
      why_correct: '“The problem is that notes are often incomplete.”',
      why_wrong: [
        'Al contrario: los ingenieros entraban y cambiaban ajustes.',
        'No se habla de herramientas caras.',
        'Sí se podían hacer cambios.'
      ],
      tip_es: '“The problem is that…” anuncia la respuesta directamente.',
      evidence: 'The problem is that notes are often incomplete.'
    },
    {
      objective: 'R1', format: 'agrees', difficulty: 1,
      stem: 'The writer states that:',
      options: [
        'IaC files are stored in version control.',
        'IaC removes the need for a testing environment.',
        'Neither'
      ],
      answer: 0,
      why_correct: 'Los archivos se guardan en control de versiones, como el código.',
      why_wrong: [
        'El texto dice que los entornos de prueba se crean desde los mismos archivos; no desaparecen.',
        'La primera afirmación sí coincide.'
      ],
      tip_es: 'Una afirmación que “elimina” algo suele exagerar lo que dice el texto.',
      evidence: 'These files are stored in version control'
    },
    {
      objective: 'R5', format: 'select', difficulty: 2,
      stem: 'Which advice would the writer most likely give a team new to IaC?',
      options: [
        'Begin with a small system that is not critical.',
        'Convert every server in the first month.',
        'Store passwords in the files to save time.',
        'Avoid using version control until the whole team is ready.'
      ],
      answer: 0,
      why_correct: 'D recoge la recomendación de los expertos: empezar con un sistema pequeño y no crítico.',
      why_wrong: [
        'Contradice “expanding gradually”.',
        'Es el error de seguridad que señala el texto.',
        'El control de versiones es la base de IaC.'
      ],
      tip_es: 'Para “would most likely advise”, busca la recomendación explícita del texto.',
      evidence: 'Experts recommend starting with one small, non-critical system and expanding gradually once the team is confident.'
    },
    {
      objective: 'R4', format: 'agrees', difficulty: 3,
      stem: 'The writer states that:',
      options: [
        'IaC guarantees that features will work in production.',
        'IaC eliminates all problems during releases.',
        'Neither'
      ],
      answer: 2,
      why_correct: 'El texto dice “far more likely” y “fewer problems”: mejora la probabilidad, no garantiza nada.',
      why_wrong: [
        '“Guarantees” es más fuerte que “far more likely”.',
        '“Eliminates all” es más fuerte que “fewer”.'
      ],
      tip_es: 'Compara la fuerza: “far more likely” ≠ “guarantees”; “fewer” ≠ “eliminates”.',
      evidence: 'a feature that works in testing is far more likely to work in production.'
    },
    {
      objective: 'R3', format: 'select', difficulty: 1,
      stem: 'According to the text, every change stored in version control has:',
      options: ['an author, a date and a reason.', 'a password and a permission.', 'a test result and a server name.', 'a note and an engineer’s signature.'],
      answer: 0,
      why_correct: 'B lo enumera: autor, fecha y motivo.',
      why_wrong: [
        'Las contraseñas no deberían estar en los archivos.',
        'No se mencionan.',
        'Las notas son el método manual del párrafo A.'
      ],
      tip_es: 'Las listas de tres elementos son fáciles de encontrar al escanear.',
      evidence: 'every change has an author, a date and a reason.'
    }
  ]),

  ...buildItems('R', 'rdg-05', 'V04', [
    {
      objective: 'R2', format: 'paragraph', difficulty: 1,
      stem: 'Which paragraph describes how the attack works?',
      answer: 1,
      why_correct: 'B explica la mecánica: intentos repetidos, notificaciones y llamadas falsas de “IT”.',
      why_wrong: ['A explica por qué MFA es eficaz.', 'C da señales de alerta.', 'D da medidas de protección.'],
      tip_es: '“In an MFA fatigue attack, the attacker…” = descripción del ataque.',
      evidence: 'In an MFA fatigue attack, the attacker repeatedly tries to sign in with a stolen password.'
    },
    {
      objective: 'R2', format: 'paragraph', difficulty: 2,
      stem: 'Which paragraph explains a technical measure that prevents the attack?',
      answer: 3,
      why_correct: 'D presenta el emparejamiento de números, que impide aprobar sin ver la pantalla.',
      why_wrong: ['A no propone medidas.', 'B describe el ataque.', 'C da señales para los usuarios, no una medida técnica.'],
      tip_es: 'Distingue consejo al usuario (C) de medida técnica de la organización (D).',
      evidence: 'Organisations can reduce the risk by switching to number matching'
    },
    {
      objective: 'R1', format: 'complete', difficulty: 2,
      stem: 'Attackers use MFA fatigue because:',
      options: [
        'a stolen password is usually not enough.',
        'users rarely enable MFA on their phones.',
        'push notifications cannot be blocked by users.',
        'IT departments often ask users to approve tests.'
      ],
      answer: 0,
      why_correct: 'Sin el segundo factor no suelen poder entrar, así que intentan que el usuario lo apruebe.',
      why_wrong: [
        'El texto da por hecho que el usuario tiene MFA.',
        'Los usuarios pueden rechazarlas.',
        'El texto dice que el personal real nunca lo hace.'
      ],
      tip_es: '“For this reason” conecta la causa (A) con el comportamiento del atacante.',
      evidence: 'Even if an attacker steals a password, they usually cannot sign in without the second factor'
    },
    {
      objective: 'R1', format: 'agrees', difficulty: 2,
      stem: 'The writer states that:',
      options: [
        'number matching requires the user to see the sign-in screen.',
        'genuine IT staff may sometimes ask users to approve a test.',
        'Neither'
      ],
      answer: 0,
      why_correct: 'Con number matching es imposible aprobar sin ver la pantalla.',
      why_wrong: [
        'El texto dice “will never ask”.',
        'La primera afirmación sí coincide.'
      ],
      tip_es: '“never” en el texto descarta cualquier “sometimes” en la opción.',
      evidence: 'This makes it impossible to approve a request without seeing the screen.'
    },
    {
      objective: 'R4', format: 'select', difficulty: 1,
      stem: 'The main purpose of the text is to:',
      options: [
        'warn about an attack and explain how to respond.',
        'persuade companies to stop using MFA completely.',
        'describe the history of push notifications.',
        'compare several different types of passwords.'
      ],
      answer: 0,
      why_correct: 'Describe el ataque, sus señales y cómo reducir el riesgo.',
      why_wrong: [
        'El texto dice que MFA es muy eficaz.',
        'No habla de historia.',
        'No compara contraseñas.'
      ],
      tip_es: 'Si el texto termina con instrucciones (“should deny… and report”), el propósito incluye aconsejar.',
      evidence: 'Users who receive unexpected notifications should deny them and report them to the security team immediately'
    },
    {
      objective: 'R5', format: 'select', difficulty: 2,
      stem: 'A user gets fifteen notifications at midnight without trying to sign in. What should they do?',
      options: [
        'Deny them and report them to security.',
        'Approve one to make the notifications stop.',
        'Wait to see whether IT calls them first.',
        'Change the number on the sign-in screen.'
      ],
      answer: 0,
      why_correct: 'C dice que es casi seguro un ataque y D indica rechazar e informar de inmediato.',
      why_wrong: [
        'Es justo lo que busca el atacante.',
        'Una llamada de “IT” sería parte del ataque.',
        'El número lo genera el sistema; no lo cambia el usuario.'
      ],
      tip_es: 'Combina la señal (C) con la acción recomendada (D).',
      evidence: 'A large number of notifications in a short time is almost always a sign of an attack. ... should deny them and report them to the security team immediately'
    },
    {
      objective: 'R3', format: 'select', difficulty: 1,
      stem: 'According to the text, what is almost always a sign of an attack?',
      options: ['Many notifications in a short time.', 'A notification during working hours.', 'A call from a known colleague.', 'A request to type a number.'],
      answer: 0,
      why_correct: '“A large number of notifications in a short time is almost always a sign of an attack.”',
      why_wrong: [
        'El texto habla de notificaciones inesperadas, a menudo de noche.',
        'No menciona compañeros conocidos.',
        'Escribir un número es la medida de protección.'
      ],
      tip_es: 'Escanea la expresión de la pregunta (“almost always”).',
      evidence: 'A large number of notifications in a short time is almost always a sign of an attack.'
    },
    {
      objective: 'R4', format: 'agrees', difficulty: 2,
      stem: 'The writer states that:',
      options: [
        'MFA is no longer an effective protection.',
        'users should report unexpected notifications even if unsure.',
        'Neither'
      ],
      answer: 1,
      why_correct: 'Deben informar “even if they think it might be a mistake”.',
      why_wrong: [
        'El texto dice que MFA es de lo más eficaz.',
        'La segunda afirmación sí coincide.'
      ],
      tip_es: '“even if unsure” parafrasea “even if they think it might be a mistake”.',
      evidence: 'even if they think it might be a mistake.'
    }
  ])
];
