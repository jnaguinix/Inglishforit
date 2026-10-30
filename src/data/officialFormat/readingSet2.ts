import { ReadingText, Question } from '../../types';
import { buildItems, countWords } from './buildItems';

/**
 * Official-format Reading set 2: sprint planning (two sources), job advert,
 * release notes vs customer needs (two sources), language choice article and data retention policy.
 */

const text = (id: string, title: string, topic: ReadingText['topic'], body: string): ReadingText => ({
  id, title, topic, wordCount: countWords(body), text: body
});

export const READING_SET_2_TEXTS: Record<string, ReadingText> = {
  'rdg-06': text('rdg-06', 'Planning the next sprint', 'V08',
`Source 1 – Email from Irene (Product owner)
Hi team, for the next sprint (10–21 March) the priority is the new export feature, which the sales team has promised to two clients for the end of March. It needs about 30 days of developer work in total. If there is time left, we can start the search improvements, which need around 15 days. The bug backlog can wait unless something critical appears. Irene

Source 2 – Team capacity, 10–21 March (10 working days)
Ana – 10 days
Bruno – 10 days
Chen – 6 days (on a course 10–13 March)
Dina – 0 days (holiday)
Eli – 10 days, but 2 days reserved for on-call duties`),

  'rdg-07': text('rdg-07', 'Job advert: Tier 2 Support Engineer', 'V06',
`Paragraph A
About us. CloudNest provides storage and backup services to more than 3,000 small and medium-sized businesses across Europe. Our support team of 40 people works in three levels: Tier 1 handles first contact and common questions, Tier 2 investigates technical problems, and Tier 3 works directly with our developers on complex bugs.

Paragraph B
The role. As a Tier 2 Support Engineer, you will take over cases that Tier 1 cannot solve within 30 minutes. You will reproduce problems, analyse logs and either solve the issue or prepare a clear report for Tier 3. You will also update our knowledge base so that Tier 1 can solve similar problems in future.

Paragraph C
What we are looking for. At least two years of experience in technical support, preferably in a cloud or hosting company. Good knowledge of Linux and networking basics is essential; experience with scripting in Python or Bash is an advantage but not required. You must be able to explain technical issues clearly to customers who are not technical.

Paragraph D
What we offer. A permanent contract, flexible hours and the option to work from home up to three days a week. New team members follow a six-week training programme before working on cases alone. To apply, send your CV and a short cover letter by 15 May. Interviews will take place in the last two weeks of May.`),

  'rdg-08': text('rdg-08', 'Reporting App 5.0: is it worth upgrading?', 'V08',
`Source 1 – Release notes, Reporting App 5.0
• Scheduled reports can now be sent to Microsoft Teams as well as by email.
• Reports can be exported as Excel files. CSV export is still available.
• The maximum size of an exported file has increased from 20 MB to 100 MB.
• Support for Internet Explorer has ended. Please use a current version of Chrome, Edge or Firefox.
• Known issue: charts in PDF exports may show the wrong colours. A fix is expected in version 5.0.2.

Source 2 – Message from a customer
Hello, we’re on version 4.8 and thinking about upgrading. Most of our staff still use Internet Explorer on old office PCs. Our monthly sales report is about 60 MB and fails to export at the moment. We also send all reports to clients as PDFs with coloured charts. Would version 5.0 help us? – Martin, Northgate Ltd.`),

  'rdg-09': text('rdg-09', 'Compiled or interpreted? A practical view for startups', 'V02',
`Paragraph A
When a startup chooses a programming language, the debate often starts with performance. Compiled languages such as Go or C++ are translated into machine code before the program runs, so they are usually faster. Interpreted languages such as Python or JavaScript are translated while the program is running, which adds some overhead.

Paragraph B
For most early-stage products, however, raw speed is not the main constraint. A typical web application spends much of its time waiting for databases and external services, not doing calculations. In these cases, the difference between a compiled and an interpreted language may be hard for users to notice.

Paragraph C
What matters more at this stage is how quickly the team can build and change the product. Interpreted languages allow developers to test ideas without a separate compilation step, and they usually have large collections of ready-made libraries. Hiring is also easier when a language is widely taught.

Paragraph D
This does not mean performance can be ignored forever. As a product grows, specific parts, such as image processing or real-time analytics, may need a faster language. Many successful companies started with an interpreted language and later rewrote only their most demanding components, rather than the whole system.`),

  'rdg-10': text('rdg-10', 'Data retention policy', 'V05',
`Paragraph A
Purpose. This policy explains how long Brightway Software keeps different types of data and how that data is deleted. Keeping data longer than necessary increases the risk and impact of a security breach, and may also break data protection laws.

Paragraph B
Customer data. Personal data about customers, such as names, email addresses and support conversations, is kept for as long as the customer has an active account. When an account is closed, this data is deleted within 90 days. Invoices are an exception: they must be kept for seven years for tax reasons.

Paragraph C
Employee data. Information about current employees is kept for the duration of their employment. After an employee leaves, most records are deleted after two years. Information about job applicants who were not hired is deleted after six months, unless the applicant agrees to let us keep it for future vacancies.

Paragraph D
Deletion and exceptions. Data is deleted automatically wherever possible. Where manual deletion is needed, the data owner must confirm it in the data register. If data is needed for a legal investigation, the legal team may stop its deletion; in that case, the data owner will be informed in writing.`)
};

export const READING_SET_2_QUESTIONS: Question[] = [
  ...buildItems('R', 'rdg-06', 'V08', [
    {
      objective: 'R5', format: 'select', difficulty: 3,
      stem: 'How many developer days are available for planned work during the sprint?',
      options: ['34', '36', '40', '30'],
      answer: 0,
      why_correct: 'Ana 10 + Bruno 10 + Chen 6 + Dina 0 + Eli 8 (10 menos 2 de guardia) = 34.',
      why_wrong: [
        'Olvida restar los dos días de guardia de Eli.',
        'Cuenta a Dina o ignora el curso de Chen.',
        'Treinta son los días que necesita la funcionalidad de exportación.'
      ],
      tip_es: 'En tablas de capacidad, lee también las notas entre paréntesis: cambian el número.',
      evidence: 'Eli – 10 days, but 2 days reserved for on-call duties'
    },
    {
      objective: 'R5', format: 'complete', difficulty: 3,
      stem: 'After finishing the export feature, the team will have enough time to:',
      options: [
        'start the search improvements but not finish them.',
        'complete all of the search improvements.',
        'fix the whole bug backlog in the remaining time as well.',
        'do no further work on any other task.'
      ],
      answer: 0,
      why_correct: 'Quedan 4 días (34 − 30). La búsqueda necesita unos 15: pueden empezarla, pero no terminarla.',
      why_wrong: [
        'Harían falta 15 días.',
        'Los bugs esperan, salvo críticos.',
        'Sí sobran 4 días.'
      ],
      tip_es: 'Primero calcula la capacidad total, luego resta lo prioritario.',
      evidence: 'If there is time left, we can start the search improvements, which need around 15 days.'
    },
    {
      objective: 'R1', format: 'select', difficulty: 1,
      stem: 'Why is the export feature the priority?',
      options: ['It was promised to two clients.', 'It is the easiest task to finish.', 'The bug backlog is too large.', 'Chen is on a course that week.'],
      answer: 0,
      why_correct: 'El equipo de ventas la prometió a dos clientes para finales de marzo.',
      why_wrong: [
        'El texto no compara la dificultad.',
        'Los bugs pueden esperar.',
        'El curso de Chen reduce la capacidad, no define prioridades.'
      ],
      tip_es: 'La razón suele ir en una oración de relativo: “which the sales team has promised…”.',
      evidence: 'which the sales team has promised to two clients for the end of March.'
    },
    {
      objective: 'R3', format: 'select', difficulty: 1,
      stem: 'When is Chen unavailable?',
      options: ['From 10 to 13 March.', 'From 10 to 21 March.', 'For the whole sprint.', 'On two on-call days.'],
      answer: 0,
      why_correct: 'Chen está en un curso del 10 al 13 de marzo.',
      why_wrong: [
        'Son las fechas de todo el sprint.',
        'Quien no está todo el sprint es Dina.',
        'Las guardias son de Eli.'
      ],
      tip_es: 'Escanea el nombre en la tabla y lee solo esa línea.',
      evidence: 'Chen – 6 days (on a course 10–13 March)'
    },
    {
      objective: 'R5', format: 'agrees', difficulty: 2,
      stem: 'According to the two sources:',
      options: [
        'Eli will spend part of the sprint on on-call duties.',
        'Dina will work on the export feature.',
        'Neither'
      ],
      answer: 0,
      why_correct: 'Eli tiene 2 de sus 10 días reservados para guardias. Dina está de vacaciones.',
      why_wrong: [
        'Dina tiene 0 días disponibles.',
        'La primera afirmación sí coincide.'
      ],
      tip_es: 'Comprueba cada persona en la tabla antes de aceptar lo que dice la opción.',
      evidence: 'Eli – 10 days, but 2 days reserved for on-call duties'
    },
    {
      objective: 'R4', format: 'select', difficulty: 1,
      stem: 'The purpose of Irene’s email is to:',
      options: ['set priorities for the next sprint.', 'ask developers to take less holiday.', 'report a critical bug to the team.', 'explain a delay to the sales team.'],
      answer: 0,
      why_correct: 'Indica qué va primero (exportación), qué después (búsqueda) y qué puede esperar (bugs).',
      why_wrong: [
        'No habla de vacaciones.',
        'Dice que los bugs pueden esperar.',
        'Escribe al equipo, no a ventas, y no hay retraso.'
      ],
      tip_es: '“the priority is…” revela el propósito de inmediato.',
      evidence: 'the priority is the new export feature'
    },
    {
      objective: 'R1', format: 'agrees', difficulty: 2,
      stem: 'Irene’s email states that:',
      options: [
        'the bug backlog must be fixed during this sprint.',
        'search is more urgent than the export feature.',
        'Neither'
      ],
      answer: 2,
      why_correct: 'Los bugs pueden esperar y la búsqueda va después de la exportación: ninguna coincide.',
      why_wrong: [
        '“can wait unless something critical appears”.',
        'Es al revés.'
      ],
      tip_es: 'No te fíes de que una opción mencione temas del texto: comprueba el sentido.',
      evidence: 'The bug backlog can wait unless something critical appears.'
    },
    {
      objective: 'R2', format: 'complete', difficulty: 2,
      stem: 'According to Irene, the team will work on bugs only if:',
      options: [
        'a critical problem appears.',
        'the export feature is delayed.',
        'clients ask for it directly.',
        'search is finished first.'
      ],
      answer: 0,
      why_correct: '“unless something critical appears”: solo si aparece algo crítico.',
      why_wrong: [
        'No hay relación con la exportación.',
        'No se menciona.',
        'Ni siquiera hay tiempo para terminar la búsqueda.'
      ],
      tip_es: '“unless” = excepto si; la condición va justo después.',
      evidence: 'unless something critical appears.'
    }
  ]),

  ...buildItems('R', 'rdg-07', 'V06', [
    {
      objective: 'R2', format: 'paragraph', difficulty: 1,
      stem: 'Which paragraph says what candidates must know?',
      answer: 2,
      why_correct: 'C enumera experiencia, conocimientos esenciales y habilidades de comunicación.',
      why_wrong: ['A presenta la empresa.', 'B describe las tareas.', 'D describe lo que ofrece la empresa.'],
      tip_es: '“What we are looking for” = requisitos.',
      evidence: 'Good knowledge of Linux and networking basics is essential'
    },
    {
      objective: 'R2', format: 'paragraph', difficulty: 1,
      stem: 'Which paragraph explains how the support levels are organised?',
      answer: 0,
      why_correct: 'A describe los tres niveles: Tier 1, Tier 2 y Tier 3.',
      why_wrong: ['B se centra en el puesto de Tier 2.', 'C trata de requisitos.', 'D trata de condiciones.'],
      tip_es: 'Distingue la estructura general (A) del puesto concreto (B).',
      evidence: 'Our support team of 40 people works in three levels'
    },
    {
      objective: 'R1', format: 'complete', difficulty: 1,
      stem: 'A case is passed to Tier 2 when:',
      options: [
        'Tier 1 cannot solve it within 30 minutes.',
        'a customer asks to speak to a developer.',
        'Tier 3 is too busy to take on the case.',
        'the knowledge base does not have an answer.'
      ],
      answer: 0,
      why_correct: 'Tier 2 recibe los casos que Tier 1 no resuelve en 30 minutos.',
      why_wrong: [
        'Los desarrolladores trabajan con Tier 3.',
        'No se menciona.',
        'Tier 2 actualiza la base de conocimiento, pero no es el criterio de escalado.'
      ],
      tip_es: '“take over cases that…” define el criterio de escalado.',
      evidence: 'you will take over cases that Tier 1 cannot solve within 30 minutes.'
    },
    {
      objective: 'R1', format: 'agrees', difficulty: 2,
      stem: 'The advert states that:',
      options: [
        'Linux knowledge is essential for the job.',
        'Python scripting is a requirement for the job.',
        'Neither'
      ],
      answer: 0,
      why_correct: 'Linux y redes son esenciales. Python o Bash son una ventaja, “but not required”.',
      why_wrong: [
        'El texto dice que no es obligatorio.',
        'La primera afirmación sí coincide.'
      ],
      tip_es: 'Distingue “essential” de “an advantage but not required”.',
      evidence: 'Good knowledge of Linux and networking basics is essential'
    },
    {
      objective: 'R3', format: 'select', difficulty: 1,
      stem: 'When will the interviews take place?',
      options: ['In the last two weeks of May.', 'Before 15 May.', 'After the six-week training.', 'In the first week of May.'],
      answer: 0,
      why_correct: 'Las entrevistas serán en las dos últimas semanas de mayo.',
      why_wrong: [
        'El 15 de mayo es la fecha límite para enviar el CV.',
        'La formación es para quienes ya trabajan en la empresa.',
        'No se menciona.'
      ],
      tip_es: 'Separa la fecha límite de solicitud de la fecha de entrevistas.',
      evidence: 'Interviews will take place in the last two weeks of May.'
    },
    {
      objective: 'R4', format: 'select', difficulty: 1,
      stem: 'Who is this text mainly written for?',
      options: ['People who may apply for the job.', 'Current Tier 1 agents.', 'Customers with technical problems.', 'Developers in the Tier 3 team.'],
      answer: 0,
      why_correct: 'Es un anuncio de empleo que termina con instrucciones para enviar la solicitud.',
      why_wrong: [
        'Tier 1 se menciona, pero no es el lector.',
        'Los clientes aparecen como parte del trabajo.',
        'Tier 3 se menciona solo para explicar la estructura.'
      ],
      tip_es: 'Las instrucciones finales (“To apply, send…”) revelan al lector.',
      evidence: 'To apply, send your CV and a short cover letter by 15 May.'
    },
    {
      objective: 'R5', format: 'select', difficulty: 3,
      stem: 'A candidate has three years of support experience at a bank and knows Linux and networking, but has never written scripts. According to the advert, they:',
      options: [
        'meet the essential requirements.',
        'cannot apply without Python skills.',
        'need experience at a cloud company.',
        'must first work for a year in Tier 1.'
      ],
      answer: 0,
      why_correct: 'Cumple lo esencial: más de dos años de soporte y conocimientos de Linux y redes. Lo de cloud es preferible, no obligatorio.',
      why_wrong: [
        'El scripting no es obligatorio.',
        '“preferably” indica preferencia, no requisito.',
        'No existe esa condición.'
      ],
      tip_es: 'Clasifica los requisitos: essential / preferably / advantage.',
      evidence: 'At least two years of experience in technical support, preferably in a cloud or hosting company.'
    },
    {
      objective: 'R4', format: 'agrees', difficulty: 2,
      stem: 'The advert states that:',
      options: [
        'new engineers work on cases alone from the first day.',
        'Tier 2 helps Tier 1 solve similar problems in the future.',
        'Neither'
      ],
      answer: 1,
      why_correct: 'Tier 2 actualiza la base de conocimiento para que Tier 1 resuelva casos parecidos.',
      why_wrong: [
        'Primero hay seis semanas de formación.',
        'La segunda afirmación sí coincide.'
      ],
      tip_es: '“so that Tier 1 can…” explica el objetivo de una tarea.',
      evidence: 'You will also update our knowledge base so that Tier 1 can solve similar problems in future.'
    }
  ]),

  ...buildItems('R', 'rdg-08', 'V08', [
    {
      objective: 'R5', format: 'select', difficulty: 2,
      stem: 'Which of Martin’s problems would version 5.0 solve?',
      options: ['The failing 60 MB export.', 'The PDF chart colours.', 'The use of Internet Explorer.', 'All of his problems.'],
      answer: 0,
      why_correct: 'El límite sube a 100 MB, así que un informe de 60 MB podría exportarse.',
      why_wrong: [
        'Es un problema conocido de 5.0, pendiente de 5.0.2.',
        '5.0 deja de admitir Internet Explorer.',
        'Dos de sus problemas no se resuelven.'
      ],
      tip_es: 'Compara cada necesidad del cliente con cada línea de las notas.',
      evidence: 'The maximum size of an exported file has increased from 20 MB to 100 MB.'
    },
    {
      objective: 'R5', format: 'complete', difficulty: 2,
      stem: 'To use version 5.0, Northgate staff on old PCs would need to:',
      options: [
        'switch to a current Chrome, Edge or Firefox.',
        'wait for version 5.0.2 to be released.',
        'reduce their reports to under 20 MB.',
        'stop sending reports by email to clients.'
      ],
      answer: 0,
      why_correct: 'Ya no se admite Internet Explorer, que es lo que usa la mayoría del personal.',
      why_wrong: [
        '5.0.2 corrige los colores, no el navegador.',
        'El nuevo límite es 100 MB.',
        'El email sigue disponible.'
      ],
      tip_es: 'Una función que “has ended” obliga a cambiar algo del lado del cliente.',
      evidence: 'Support for Internet Explorer has ended. Please use a current version of Chrome, Edge or Firefox.'
    },
    {
      objective: 'R5', format: 'agrees', difficulty: 2,
      stem: 'According to the two sources:',
      options: [
        'Martin’s PDF charts may show incorrect colours in 5.0.',
        'Martin’s monthly report is too large for version 5.0.',
        'Neither'
      ],
      answer: 0,
      why_correct: 'Envía PDF con gráficos de color, y 5.0 tiene un error conocido con esos colores.',
      why_wrong: [
        '60 MB está por debajo del nuevo límite de 100 MB.',
        'La primera afirmación sí coincide.'
      ],
      tip_es: '“may show” en las notas = posible, no seguro; la opción mantiene ese matiz.',
      evidence: 'Known issue: charts in PDF exports may show the wrong colours.'
    },
    {
      objective: 'R3', format: 'select', difficulty: 1,
      stem: 'What is the new maximum size for an exported file?',
      options: ['100 MB', '20 MB', '60 MB', '50 MB'],
      answer: 0,
      why_correct: 'Ha pasado de 20 MB a 100 MB.',
      why_wrong: [
        'Es el límite anterior.',
        'Es el tamaño del informe de Martin.',
        'No aparece en el texto.'
      ],
      tip_es: '“from X to Y”: Y es el valor nuevo.',
      evidence: 'has increased from 20 MB to 100 MB.'
    },
    {
      objective: 'R1', format: 'agrees', difficulty: 1,
      stem: 'The release notes state that:',
      options: [
        'CSV export has been removed in version 5.0.',
        'scheduled reports can be sent to Microsoft Teams.',
        'Neither'
      ],
      answer: 1,
      why_correct: 'Los informes programados pueden enviarse a Teams además de por email.',
      why_wrong: [
        '“CSV export is still available.”',
        'La segunda afirmación sí coincide.'
      ],
      tip_es: '“still available” = no se ha eliminado.',
      evidence: 'Scheduled reports can now be sent to Microsoft Teams as well as by email.'
    },
    {
      objective: 'R1', format: 'select', difficulty: 1,
      stem: 'According to the release notes, the PDF colour problem:',
      options: ['should be fixed in 5.0.2.', 'was already fixed in 5.0.', 'only affects Excel exports.', 'only happens in Internet Explorer.'],
      answer: 0,
      why_correct: '“A fix is expected in version 5.0.2.”',
      why_wrong: [
        'Es un problema conocido de 5.0.',
        'Afecta a las exportaciones en PDF.',
        'No se relaciona con el navegador.'
      ],
      tip_es: '“is expected” = se espera, todavía no está hecho.',
      evidence: 'A fix is expected in version 5.0.2.'
    },
    {
      objective: 'R4', format: 'select', difficulty: 1,
      stem: 'What is the main purpose of Martin’s message?',
      options: [
        'To find out whether upgrading would help.',
        'To complain about the colours in PDF exports.',
        'To cancel his company’s subscription.',
        'To report a bug he found in version 5.0.'
      ],
      answer: 0,
      why_correct: 'Describe su situación y pregunta: “Would version 5.0 help us?”.',
      why_wrong: [
        'Aún no usa 5.0, así que no puede quejarse del error.',
        'Está pensando en actualizar, no en cancelar.',
        'Usa la versión 4.8.'
      ],
      tip_es: 'La pregunta final de un mensaje suele ser su propósito.',
      evidence: 'Would version 5.0 help us?'
    },
    {
      objective: 'R2', format: 'complete', difficulty: 3,
      stem: 'Martin’s report probably fails to export at the moment because:',
      options: [
        'it is over his version’s 20 MB limit.',
        'Internet Explorer cannot open Excel files.',
        'the PDF charts use the wrong colours.',
        'scheduled reports cannot be sent by email.'
      ],
      answer: 0,
      why_correct: 'Usa 4.8, anterior al aumento; el límite antes era 20 MB y su informe ocupa 60 MB.',
      why_wrong: [
        'Nada relaciona Excel con su problema actual.',
        'Ese error es de 5.0.',
        'El envío por email existe.'
      ],
      tip_es: '“increased from 20 MB” te dice también el límite de las versiones anteriores.',
      evidence: 'from 20 MB to 100 MB ... Our monthly sales report is about 60 MB and fails to export at the moment.'
    }
  ]),

  ...buildItems('R', 'rdg-09', 'V02', [
    {
      objective: 'R2', format: 'paragraph', difficulty: 2,
      stem: 'Which paragraph explains why speed may not matter much for many web applications?',
      answer: 1,
      why_correct: 'B: las aplicaciones web pasan mucho tiempo esperando a bases de datos y servicios externos.',
      why_wrong: ['A explica la diferencia técnica.', 'C habla de rapidez de desarrollo.', 'D dice que el rendimiento sí importa más adelante.'],
      tip_es: '“raw speed is not the main constraint” es la idea del párrafo.',
      evidence: 'raw speed is not the main constraint.'
    },
    {
      objective: 'R2', format: 'paragraph', difficulty: 2,
      stem: 'Which paragraph describes how companies often deal with performance later?',
      answer: 3,
      why_correct: 'D: muchas empresas reescriben más tarde solo los componentes más exigentes.',
      why_wrong: ['A no habla del futuro.', 'B habla de las primeras etapas.', 'C trata de desarrollo y contratación.'],
      tip_es: '“later”, “As a product grows” = etapa posterior.',
      evidence: 'Many successful companies started with an interpreted language and later rewrote only their most demanding components'
    },
    {
      objective: 'R4', format: 'select', difficulty: 2,
      stem: 'What is the writer’s main argument?',
      options: [
        'Early on, building quickly usually matters more than speed.',
        'Startups should always use compiled languages for their products.',
        'Interpreted languages are faster than compiled languages.',
        'Performance is never important for any kind of web application.'
      ],
      answer: 0,
      why_correct: 'B y C defienden priorizar la rapidez de desarrollo al principio; D matiza que el rendimiento importará más adelante.',
      why_wrong: [
        'El texto no recomienda “always” lenguajes compilados.',
        'A dice lo contrario.',
        'D dice que no se puede ignorar para siempre.'
      ],
      tip_es: 'Las opciones con “always” o “never” suelen contradecir los matices del autor.',
      evidence: 'What matters more at this stage is how quickly the team can build and change the product.'
    },
    {
      objective: 'R1', format: 'complete', difficulty: 1,
      stem: 'Interpreted languages add overhead because they:',
      options: [
        'are translated while the program runs.',
        'need a separate compilation step before running.',
        'cannot use external libraries.',
        'wait for databases more often.'
      ],
      answer: 0,
      why_correct: 'Se traducen mientras el programa se ejecuta, lo que añade una carga extra.',
      why_wrong: [
        'Es lo que no necesitan (C).',
        'C dice que tienen muchas librerías.',
        'La espera a bases de datos ocurre con cualquier lenguaje.'
      ],
      tip_es: '“which adds some overhead” se refiere a la frase anterior.',
      evidence: 'Interpreted languages such as Python or JavaScript are translated while the program is running, which adds some overhead.'
    },
    {
      objective: 'R1', format: 'agrees', difficulty: 1,
      stem: 'The writer states that:',
      options: [
        'compiled languages are translated before the program runs.',
        'interpreted languages make hiring more difficult.',
        'Neither'
      ],
      answer: 0,
      why_correct: 'A lo dice directamente.',
      why_wrong: [
        'C dice que contratar es más fácil con lenguajes muy enseñados.',
        'La primera afirmación sí coincide.'
      ],
      tip_es: 'Busca la frase y compara: “before the program runs” coincide con el texto.',
      evidence: 'are translated into machine code before the program runs'
    },
    {
      objective: 'R4', format: 'agrees', difficulty: 3,
      stem: 'The writer states that:',
      options: [
        'growing companies should rewrite the whole system.',
        'performance will never need any attention.',
        'Neither'
      ],
      answer: 2,
      why_correct: 'El autor dice que reescriben solo los componentes exigentes, y que el rendimiento no se puede ignorar para siempre.',
      why_wrong: [
        '“rather than the whole system”.',
        '“This does not mean performance can be ignored forever.”'
      ],
      tip_es: '“rather than” y “does not mean” niegan justo lo que dicen estas opciones.',
      evidence: 'rewrote only their most demanding components, rather than the whole system.'
    },
    {
      objective: 'R5', format: 'select', difficulty: 2,
      stem: 'A startup has a simple booking website and three Python developers. The writer would probably advise them to:',
      options: [
        'keep using Python for now.',
        'rewrite the site in C++ immediately.',
        'hire developers who know Go.',
        'remove all ready-made libraries.'
      ],
      answer: 0,
      why_correct: 'Para un producto en sus inicios, el autor prioriza la rapidez de desarrollo y el conocimiento del equipo.',
      why_wrong: [
        'Solo recomienda reescribir partes exigentes más adelante.',
        'Contratar es más fácil con lenguajes muy enseñados como Python.',
        'Las librerías son una ventaja según C.'
      ],
      tip_es: 'Aplica el argumento general del texto al caso concreto.',
      evidence: 'For most early-stage products, however, raw speed is not the main constraint.'
    },
    {
      objective: 'R3', format: 'select', difficulty: 1,
      stem: 'Which examples of demanding components does the writer give?',
      options: [
        'Image processing and real-time analytics.',
        'Databases and external services.',
        'Go and C++.',
        'Libraries and compilation.'
      ],
      answer: 0,
      why_correct: 'D da esos dos ejemplos de partes que pueden necesitar un lenguaje más rápido.',
      why_wrong: [
        'Son lo que hace esperar a una aplicación web (B).',
        'Son ejemplos de lenguajes compilados (A).',
        'Aparecen en C, no como componentes exigentes.'
      ],
      tip_es: '“such as…” introduce ejemplos.',
      evidence: 'such as image processing or real-time analytics'
    }
  ]),

  ...buildItems('R', 'rdg-10', 'V05', [
    {
      objective: 'R2', format: 'paragraph', difficulty: 1,
      stem: 'Which paragraph explains what happens to data about unsuccessful job candidates?',
      answer: 2,
      why_correct: 'C: los datos de candidatos no contratados se borran a los seis meses, salvo que acepten conservarlos.',
      why_wrong: ['A explica el propósito.', 'B trata de clientes.', 'D trata de excepciones generales.'],
      tip_es: '“unsuccessful job candidates” ↔ “job applicants who were not hired”.',
      evidence: 'Information about job applicants who were not hired is deleted after six months'
    },
    {
      objective: 'R2', format: 'paragraph', difficulty: 1,
      stem: 'Which paragraph explains why the policy exists?',
      answer: 0,
      why_correct: 'A da el propósito: guardar datos de más aumenta el riesgo y puede incumplir la ley.',
      why_wrong: ['B da plazos para clientes.', 'C da plazos para empleados.', 'D explica el borrado.'],
      tip_es: '“Purpose.” es la pista, pero confirma que el párrafo da razones.',
      evidence: 'Keeping data longer than necessary increases the risk and impact of a security breach'
    },
    {
      objective: 'R3', format: 'select', difficulty: 1,
      stem: 'How long are invoices kept?',
      options: ['Seven years.', '90 days.', 'Two years.', 'Six months.'],
      answer: 0,
      why_correct: 'Las facturas se guardan siete años por motivos fiscales.',
      why_wrong: [
        'Es el plazo para borrar datos de clientes tras cerrar la cuenta.',
        'Es el plazo para registros de exempleados.',
        'Es el plazo para candidatos no contratados.'
      ],
      tip_es: 'En textos con muchos plazos, haz una mini tabla: tipo de dato → plazo.',
      evidence: 'they must be kept for seven years for tax reasons.'
    },
    {
      objective: 'R1', format: 'complete', difficulty: 2,
      stem: 'When a customer closes their account, their support conversations are:',
      options: [
        'deleted within 90 days.',
        'kept for seven years.',
        'kept while the account is active.',
        'deleted after two years.'
      ],
      answer: 0,
      why_correct: 'Las conversaciones de soporte son datos personales del cliente: se borran en 90 días tras cerrar la cuenta.',
      why_wrong: [
        'Solo las facturas se guardan siete años.',
        'La cuenta ya está cerrada.',
        'Dos años es el plazo para exempleados.'
      ],
      tip_es: 'Comprueba en qué categoría está el dato (“such as…”).',
      evidence: 'When an account is closed, this data is deleted within 90 days.'
    },
    {
      objective: 'R1', format: 'agrees', difficulty: 2,
      stem: 'The policy states that:',
      options: [
        'applicants who were not hired may let the company keep their data.',
        'former employees’ records are deleted immediately.',
        'Neither'
      ],
      answer: 0,
      why_correct: 'Pueden aceptar que se guarden para futuras vacantes.',
      why_wrong: [
        'La mayoría se borran a los dos años.',
        'La primera afirmación sí coincide.'
      ],
      tip_es: '“unless the applicant agrees” abre una excepción.',
      evidence: 'unless the applicant agrees to let us keep it for future vacancies.'
    },
    {
      objective: 'R5', format: 'select', difficulty: 3,
      stem: 'A customer closed their account 100 days ago and is now involved in a legal investigation. What has most likely happened to their email address?',
      options: [
        'It was deleted, unless legal had stopped it.',
        'It is kept for seven years for tax reasons.',
        'It is always kept until the case ends.',
        'It was moved to the employee records.'
      ],
      answer: 0,
      why_correct: 'Pasaron más de 90 días, así que se habrá borrado, salvo que el equipo legal hubiera detenido el borrado.',
      why_wrong: [
        'Los siete años son solo para facturas.',
        'El equipo legal “may” detenerlo; no es automático.',
        'No tiene relación con empleados.'
      ],
      tip_es: 'Combina el plazo (B) con la excepción (D) y fíjate en “may”.',
      evidence: 'this data is deleted within 90 days ... the legal team may stop its deletion'
    },
    {
      objective: 'R4', format: 'select', difficulty: 1,
      stem: 'The main purpose of the text is to:',
      options: [
        'explain how long data is kept and how it is deleted.',
        'describe a recent security breach at the company.',
        'ask all employees to delete their old emails by the end of today.',
        'explain the tax rules that apply to invoices.'
      ],
      answer: 0,
      why_correct: 'La primera frase lo dice y el resto del texto lo desarrolla.',
      why_wrong: [
        'Habla del riesgo de una brecha, no de una ocurrida.',
        'No hay ninguna petición así.',
        'Los impuestos son solo la razón de una excepción.'
      ],
      tip_es: 'En políticas, el propósito suele estar en la primera frase.',
      evidence: 'This policy explains how long Brightway Software keeps different types of data and how that data is deleted.'
    },
    {
      objective: 'R4', format: 'agrees', difficulty: 2,
      stem: 'The policy states that:',
      options: [
        'keeping data for longer is always the safer option.',
        'the legal team can stop data from being deleted.',
        'Neither'
      ],
      answer: 1,
      why_correct: 'D da al equipo legal la posibilidad de detener el borrado.',
      why_wrong: [
        'A dice lo contrario: aumenta el riesgo.',
        'La segunda afirmación sí coincide.'
      ],
      tip_es: 'Las opciones que contradicen el propósito del texto son distractores típicos.',
      evidence: 'the legal team may stop its deletion'
    }
  ])
];
