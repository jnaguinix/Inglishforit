const { createQuestion } = require('./builder_helper.cjs');

/**
 * English for IT 1 - Module 6: Security Engineer (Participate in Discussion)
 * 59 items total covering sections 6.1 to 6.5
 */
const items_mod6 = [
  // =========================================================
  // 6.1 The Future Perfect Tense (12 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod6-sec1-ex1-q1',
    sub: '6.1.3',
    num: 1,
    stem: 'Complete the sentence with the deadline milestone: "By tomorrow we __________ the first draft of the Information Security policy."',
    correct: 'Will have sent out',
    distractors: ['Will send out', 'Sent out', 'Are sending out'],
    why_correct: 'El conector temporal "By tomorrow" (para mañana a más tardar) establece un límite en el futuro antes del cual la acción ya habrá concluido, exigiendo Future Perfect: "Will have sent out".',
    why_wrong_map: {
      'Will send out': 'Future Simple describe la acción puntual de enviar, pero no la culminación previa expresada por "By tomorrow".',
      'Sent out': 'Past Simple; no concuerda con un plazo futuro como "By tomorrow".',
      'Are sending out': 'Present Continuous para planes en progreso, no para un hito ya finalizado en una fecha límite.'
    },
    tip: 'Estructura clave de plazos: ["By" + punto futuro (by tomorrow / by Friday) -> Future Perfect: will have + participio].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Para mañana ya habremos enviado el primer borrador: "Will have sent out".',
    trigger: 'By tomorrow we __________ the first draft -> Will have sent out',
    trap: 'Usar simple "will send" ignorando el valor perfectivo de "By tomorrow".',
    usage: { scenario: 'Compromiso de Entrega de Políticas', en: 'By tomorrow we will have sent out the first draft of the policy.', es: 'Para mañana habremos enviado el primer borrador de la política de seguridad.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec1-ex1-q2',
    sub: '6.1.3',
    num: 2,
    stem: 'Complete the sentence with projected duration: "We __________ these new security standards for three months by next Friday."',
    correct: 'Will have been developing',
    distractors: ['Will develop', 'Have developed', 'Were developing'],
    why_correct: 'La combinación de una duración acumulada ("for three months") con una fecha límite futura ("by next Friday") exige Future Perfect Continuous: "Will have been developing".',
    why_wrong_map: {
      'Will develop': 'No refleja la duración continua acumulada durante tres meses.',
      'Have developed': 'Present Perfect conectaría con el presente, ignorando el corte futuro del próximo viernes.',
      'Were developing': 'Past Continuous situado en el pasado.'
    },
    tip: 'Duración ("for X months") + corte futuro ("by next Friday") = [will have been + verbo-ing].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Para el próximo viernes habremos estado desarrollando estos estándares durante tres meses.',
    trigger: 'for three months by next Friday -> Will have been developing',
    trap: 'Confundir el Future Perfect Simple con el Continuous cuando hay una duración prolongada explícita.',
    usage: { scenario: 'Seguimiento de Proyecto de Seguridad', en: 'We will have been developing these new security standards for three months by next Friday.', es: 'Habremos estado desarrollando estos nuevos estándares de seguridad durante tres meses para el próximo viernes.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec1-ex1-q3',
    sub: '6.1.3',
    num: 3,
    stem: 'Complete the sentence expressing future accomplishment: "The hope is that by next month we __________ all the necessary penetration testing."',
    correct: 'Will have completed',
    distractors: ['Complete', 'Will be completed', 'Had completed'],
    why_correct: '"By next month" marca el hito futuro antes del cual se espera haber concluido todas las pruebas: Future Perfect ("Will have completed").',
    why_wrong_map: {
      'Complete': 'Present Simple no concuerda con la expectativa futura abierta por "The hope is that...".',
      'Will be completed': 'Voz pasiva ("nosotros seremos completados"), lo cual carece de sentido lógico con sujeto agente "we".',
      'Had completed': 'Past Perfect incompatible con un marco de tiempo futuro.'
    },
    tip: 'Meta concluida antes de un mes: [by next month we will have completed...].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'La esperanza es que para el próximo mes habremos completado todas las pruebas.',
    trigger: 'by next month we __________ all the necessary testing -> Will have completed',
    trap: 'Elegir "will be completed" confundiendo la voz activa con la pasiva.',
    usage: { scenario: 'Planificación de Pentesting Anual', en: 'The hope is that by next month we will have completed all testing.', es: 'La esperanza es que para el próximo mes habremos completado todas las pruebas necesarias.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec1-ex1-q4',
    sub: '6.1.3',
    num: 4,
    stem: 'Complete the sentence describing continuous experience from a past starting point: "I __________ in charge of these security training sessions since 2018."',
    correct: 'Have been',
    distractors: ['Will have been', 'Was', 'Am'],
    why_correct: 'El conector "since 2018" (desde 2018) describe un estado que comenzó en el pasado y continúa ininterrumpidamente en el presente, exigiendo Present Perfect: "Have been".',
    why_wrong_map: {
      'Will have been': 'Future Perfect proyectaría el estado al futuro, pero "since" conecta pasado con presente.',
      'Was': 'Past Simple desconectaría la responsabilidad del presente (implicaría que ya no está a cargo).',
      'Am': 'Present Simple no puede combinarse con complementos temporales introducidos por "since".'
    },
    tip: '"Since" + año pasado (since 2018) -> Present Perfect: [have/has been]. ¡Nunca presente simple ni futuro!',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'He estado a cargo de estas sesiones desde 2018: "Have been".',
    trigger: '__________ in charge ... since 2018 -> Have been',
    trap: 'Usar presente simple "Am" por traducción literal del español "estoy a cargo desde 2018".',
    usage: { scenario: 'Trayectoria y Roles de Ciberseguridad', en: 'I have been in charge of these training sessions since 2018.', es: 'He estado a cargo de estas sesiones de capacitación desde 2018.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec1-ex1-q5',
    sub: '6.1.3',
    num: 5,
    stem: 'Complete the logical deduction about continuous morning activity: "She __________ training sessions all morning so I imagine she is exhausted."',
    correct: 'Will have been running',
    distractors: ['Will run', 'Runs', 'Ran'],
    why_correct: 'En el temario avanzado de Cisco, "will have been running" se emplea como Future Perfect Continuous con valor epistémico para deducir una actividad que se ha estado prolongando a lo largo de toda la mañana con consecuencias físicas visibles.',
    why_wrong_map: {
      'Will run': 'Future Simple proyectaría la acción a iniciarse en el futuro, lo cual contradice que esté agotada ahora.',
      'Runs': 'Present Simple describe rutinas habituales sin el matiz de esfuerzo continuo acumulado.',
      'Ran': 'Past Simple no refleja la acumulación continua expresada por "all morning".'
    },
    tip: 'Deducción de actividad continua acumulada: [will have been running all morning].',
    topic: 'G12',
    objective: 'UE3',
    human_rule: 'Habrá estado impartiendo sesiones toda la mañana, así que imagino que está agotada.',
    trigger: 'training sessions all morning so I imagine she is exhausted -> Will have been running',
    trap: 'No reconocer el uso modal epistémico de "will have been + -ing" para deducciones.',
    usage: { scenario: 'Coordinación de Talleres InfoSec', en: 'She will have been running sessions all morning, so she must be tired.', es: 'Habrá estado impartiendo sesiones de capacitación toda la mañana, por lo que imagino que está exhausta.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec1-ex1-q6',
    sub: '6.1.3',
    num: 6,
    stem: 'Complete the sentence describing a recent completed action today: "She __________ some recommendations to the security manager earlier today."',
    correct: 'Has made',
    distractors: ['Will have made', 'Makes', 'Had made'],
    why_correct: 'Una acción completada en un período de tiempo que aún pertenece a la jornada de hoy ("earlier today") con impacto directo se formula en Present Perfect: "Has made".',
    why_wrong_map: {
      'Will have made': 'Future Perfect proyectaría la acción antes de un plazo futuro, no algo ya hecho hoy.',
      'Makes': 'Present Simple no expresa una entrega ya realizada.',
      'Had made': 'Past Perfect requeriría un contexto narrativo pasado subordinado.'
    },
    tip: 'Acción reciente dentro del marco de hoy ("earlier today") -> Present Perfect ("Has made").',
    topic: 'G25',
    objective: 'UE1',
    human_rule: 'Ella ha hecho algunas recomendaciones al gerente de seguridad hoy temprano: "Has made".',
    trigger: 'recommendations to the security manager earlier today -> Has made',
    trap: 'Elegir Future Perfect sin notar que la acción ya fue realizada "earlier today".',
    usage: { scenario: 'Actualizaciones de Asesoría de Seguridad', en: 'She has made some recommendations to the security manager earlier today.', es: 'Ella ha hecho algunas recomendaciones al gerente de seguridad hoy más temprano.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec1-ex2-q1',
    sub: '6.1.4',
    num: 1,
    stem: 'Complete the passive timeline: "By the time we remove the spyware software, the sensitive information __________ compromised."',
    correct: 'Will have been',
    distractors: ['Will be', 'Was', 'Is'],
    why_correct: 'La cláusula temporal con presente ("By the time we remove...") sitúa la culminación del compromiso de datos con anterioridad a esa remoción: Future Perfect pasivo [will have been + compromised].',
    why_wrong_map: {
      'Will be': 'Future Simple expresaría que la información se comprometerá después de quitar el spyware, lo cual es ilógico.',
      'Was': 'Past Simple; no concuerda con la subordinada de futuro "By the time we remove".',
      'Is': 'Present Simple no refleja la anterioridad temporal al retiro del software.'
    },
    tip: 'Cláusula temporal: [By the time + Present Simple -> Main clause: WILL HAVE BEEN + participio].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Para cuando eliminemos el spyware, la información ya habrá sido comprometida: "Will have been".',
    trigger: 'By the time we remove the spyware ... information __________ compromised -> Will have been',
    trap: 'Poner "will be" sin advertir que el compromiso de los datos ocurre ANTES de que logremos desinstalar el malware.',
    usage: { scenario: 'Respuesta ante Incidentes de Spyware (Pegasus)', en: 'By the time we remove the spyware, data will have been compromised.', es: 'Para cuando eliminemos el software espía, la información habrá sido comprometida.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec1-ex2-q2',
    sub: '6.1.4',
    num: 2,
    stem: 'Complete with the appropriate future perfect form: "We __________ (test) these security solutions for one month by next week."',
    correct: 'Will have been testing',
    distractors: ['Will test', 'Are testing', 'Have tested'],
    why_correct: 'Duración sostenida ("for one month") hasta una fecha límite futura ("by next week"): Future Perfect Continuous ("Will have been testing").',
    why_wrong_map: {
      'Will test': 'No refleja la duración previa acumulada durante un mes.',
      'Are testing': 'Present Continuous ignora el cómputo final de la próxima semana.',
      'Have tested': 'Present Perfect ignora el límite del futuro.'
    },
    tip: 'Fórmula: [will have been + verbo-ing] para duraciones proyectadas en plazos futuros.',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Habremos estado probando estas soluciones durante un mes para la próxima semana.',
    trigger: 'for one month by next week -> Will have been testing',
    trap: 'Omitir "been" o el gerundio "-ing".',
    usage: { scenario: 'Evaluación de Herramientas EDR', en: 'We will have been testing these solutions for a month by next week.', es: 'Habremos estado probando estas soluciones de seguridad durante un mes para la próxima semana.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec1-ex2-q3',
    sub: '6.1.4',
    num: 3,
    stem: 'Complete the milestone target: "I __________ (run) three security training sessions by the end of this sprint."',
    correct: 'Will have run',
    distractors: ['Will run', 'Will have ran', 'Am running'],
    why_correct: 'Se cuantifica un número de eventos concluidos ("three sessions") antes de una fecha límite futura ("by the end of this sprint"): Future Perfect Simple ("Will have run"). Nota: el participio de run es "run", nunca "ran".',
    why_wrong_map: {
      'Will run': 'No enfatiza la meta acumulada antes del final del sprint.',
      'Will have ran': 'Error gramatical grave; "ran" es pasado simple, el participio pasado correcto de run es "run".',
      'Am running': 'Present Continuous describe una sesión en curso actual.'
    },
    tip: 'Irregularidad verbal: [run (V1) -> ran (V2) -> run (V3)]. Future Perfect: [will have RUN].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Habré impartido tres sesiones de capacitación para el final del sprint: "Will have run".',
    trigger: 'three security training sessions by the end of this sprint -> Will have run',
    trap: 'Escribir *"will have ran"* usando la forma de pasado simple en lugar del participio.',
    usage: { scenario: 'Objetivos de Sprint en Ciberseguridad', en: 'I will have run three security sessions by the end of this sprint.', es: 'Habré impartido tres sesiones de capacitación en seguridad para el final de este sprint.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec1-ex2-q4',
    sub: '6.1.4',
    num: 4,
    stem: 'Complete the inquiry regarding completion before an event: "__________ (you/complete) the incident reports before the management meeting begins?"',
    correct: 'Will you have completed',
    distractors: ['Will you complete', 'Do you complete', 'Did you complete'],
    why_correct: 'La pregunta consulta si una tarea habrá finalizado antes de que comience otro evento en el futuro ("before the meeting begins"): Future Perfect interrogativo ("Will you have completed...?").',
    why_wrong_map: {
      'Will you complete': 'Pregunta por la simple disposición de hacerlo, no por la anterioridad completada antes de la reunión.',
      'Do you complete': 'Present Simple de hábito.',
      'Did you complete': 'Past Simple; no concuerda con una reunión que aún no empieza ("begins").'
    },
    tip: 'Pregunta de meta previa a un evento futuro: [Will you have completed... before... begins?].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: '¿Habrás completado los informes de incidentes antes de que comience la reunión?: "Will you have completed...?".',
    trigger: '__________ the incident reports before the meeting begins? -> Will you have completed',
    trap: 'Elegir simple "will you complete" ignorando el corte temporal anterior a "before it begins".',
    usage: { scenario: 'Preparación de Informe para el CISO', en: 'Will you have completed the incident reports before the meeting begins?', es: '¿Habrás completado los informes de incidentes antes de que comience la reunión?' }
  }),
  createQuestion({
    id: 'it1-mod6-sec1-ex2-q5',
    sub: '6.1.4',
    num: 5,
    stem: 'Complete the sentence with continuous duration: "They __________ (work on) these new security standards all week by tomorrow."',
    correct: 'Will have been working on',
    distractors: ['Will work on', 'Worked on', 'Are working on'],
    why_correct: 'Enfatiza el proceso continuo durante toda la semana que alcanzará su cómputo mañana: Future Perfect Continuous ("Will have been working on").',
    why_wrong_map: {
      'Will work on': 'No transmite la duración acumulada a lo largo de toda la semana ("all week by tomorrow").',
      'Worked on': 'Past Simple desconectado del límite de mañana.',
      'Are working on': 'No incluye el punto de corte futuro.'
    },
    tip: 'Duración continua ("all week") computada en fecha futura ("by tomorrow"): [will have been working on].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Habrán estado trabajando en estos estándares toda la semana para mañana.',
    trigger: 'all week by tomorrow -> Will have been working on',
    trap: 'Usar formas simples perdiendo el matiz continuo.',
    usage: { scenario: 'Seguimiento de Tareas de Cumplimiento', en: 'They will have been working on these security standards all week by tomorrow.', es: 'Habrán estado trabajando en estos estándares de seguridad toda la semana para mañana.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec1-ex2-q6',
    sub: '6.1.4',
    num: 6,
    stem: 'Complete the milestone expectation: "We __________ (recommend) the new security enhancements by the time the external audit starts."',
    correct: 'Will have recommended',
    distractors: ['Will recommend', 'Recommend', 'Are recommending'],
    why_correct: 'La recomendación formal habrá sido formulada con anterioridad al inicio de la auditoría ("by the time the audit starts"): Future Perfect ("Will have recommended").',
    why_wrong_map: {
      'Will recommend': 'Indicaría que se formularán a la vez o después, no con anterioridad consumada.',
      'Recommend': 'Present Simple de rutina.',
      'Are recommending': 'Present Continuous en progreso actual.'
    },
    tip: 'Acción formal previa al hito de auditoría: [will have recommended].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Habremos recomendado las mejoras de seguridad para cuando empiece la auditoría.',
    trigger: 'by the time the external audit starts -> Will have recommended',
    trap: 'No aplicar Future Perfect tras "by the time".',
    usage: { scenario: 'Plan de Mitigación de Auditoría', en: 'We will have recommended the new enhancements by the time the audit starts.', es: 'Habremos recomendado las nuevas mejoras de seguridad para cuando comience la auditoría externa.' }
  }),

  // =========================================================
  // 6.2 Listening: Interview with Security Officer (Part 1) (12 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod6-sec2-ex1-q1',
    sub: '6.2.1',
    num: 1,
    stem: 'Select the synonym for: "Enhance the security posture of an organization."',
    correct: 'Improve',
    distractors: ['Weaken', 'Complicate', 'Obfuscate'],
    why_correct: '"Enhance" (mejorar / reforzar / potenciar) se define textualmente en Cisco como "Improve", aplicándose al fortalecimiento de los controles de seguridad.',
    why_wrong_map: {
      'Weaken': 'Debilitar; exactamente lo contrario.',
      'Complicate': 'Complicar.',
      'Obfuscate': 'Ofuscar o hacer ilegible el código.'
    },
    tip: 'Vocabulario estratégico: [Enhance security] = [Improve security].',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Enhance = mejorar o potenciar las defensas de seguridad.',
    trigger: 'enhance the security -> Improve',
    trap: 'Confundir enhance (mejorar) con enforce (hacer cumplir).',
    usage: { scenario: 'Directrices del CISO', en: 'Our primary mandate this quarter is to enhance endpoint security.', es: 'Nuestro mandato principal este trimestre es mejorar la seguridad de los endpoints.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec2-ex1-q2',
    sub: '6.2.1',
    num: 2,
    stem: 'Select the colloquial idiom meaning: "They do not have any clue regarding the incident."',
    correct: 'They don\'t know anything.',
    distractors: [
      'They have full forensic evidence.',
      'They are writing a detailed whitepaper.',
      'They have detected the source IP address.'
    ],
    why_correct: '"Not have any clue" (no tener ni idea / carecer de pistas) significa textualmente "They don\'t know anything" (no saben nada sobre lo ocurrido).',
    why_wrong_map: {
      'They have full forensic evidence.': 'Opuesto al desconocimiento absoluto.',
      'They are writing a detailed whitepaper.': 'Distractor no relacionado.',
      'They have detected the source IP address.': 'Indicaría que sí tienen pistas concretas.'
    },
    tip: 'Expresión coloquial: [Not have any clue] = [Not know anything].',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'No tener ni idea = no saber absolutamente nada.',
    trigger: 'They do not have any clue -> They don\'t know anything',
    trap: 'Tomar "clue" como sinónimo de indicio legal formal en vez de la expresión coloquial.',
    usage: { scenario: 'Análisis Forense Inicial', en: 'At first, the junior analysts did not have any clue about the attack vector.', es: 'Al principio, los analistas junior no tenían ni la menor idea sobre el vector de ataque.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec2-ex1-q3',
    sub: '6.2.1',
    num: 3,
    stem: 'Select the synonym for: "You have to use very sophisticated and highly technical language."',
    correct: 'Advanced',
    distractors: ['Rudimentary', 'Obsolete', 'Informal'],
    why_correct: '"Sophisticated" en el contexto de tecnología y lenguaje técnico equivale a "Advanced" (avanzado, complejo, de alto nivel de madurez).',
    why_wrong_map: {
      'Rudimentary': 'Rudimentario o básico; lo contrario.',
      'Obsolete': 'Obsoleto o anticuado.',
      'Informal': 'Informal o coloquial.'
    },
    tip: 'Nivel técnico: [Sophisticated language / architecture] = [Advanced].',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Sophisticated = avanzado y especializado.',
    trigger: 'sophisticated and very technical language -> Advanced',
    trap: 'Confundir sofisticado con artificial o innecesariamente recargado.',
    usage: { scenario: 'Comunicación entre Especialistas de Seguridad', en: 'Explaining cryptanalysis requires sophisticated and advanced terminology.', es: 'Explicar el criptoanálisis requiere una terminología sofisticada y avanzada.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec2-ex1-q4',
    sub: '6.2.1',
    num: 4,
    stem: 'Select the business idiom meaning: "You have to think about the big picture."',
    correct: 'The overall strategic goals of the company.',
    distractors: [
      'The resolution of physical computer screens.',
      'The size of high-resolution graphic posters.',
      'The microscopic details of single line comments.'
    ],
    why_correct: '"The big picture" (la visión de conjunto / el panorama general) se refiere a los objetivos estratégicos globales de la empresa frente a detalles técnicos aislados.',
    why_wrong_map: {
      'The resolution of physical computer screens.': 'Interpretación literal errónea de pantalla gráfica.',
      'The size of high-resolution graphic posters.': 'Interpretación literal absurda.',
      'The microscopic details of single line comments.': 'Enfoque en minucias, lo opuesto al panorama general.'
    },
    tip: 'Visión estratégica en TI: [The big picture] = The overarching goals of the business.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: '"The big picture" = la visión global y los objetivos estratégicos de la empresa.',
    trigger: 'think about the big picture -> The goals of the company',
    trap: 'Interpretar "picture" en sentido literal de imagen o monitor.',
    usage: { scenario: 'Alineación de Seguridad con el Negocio', en: 'Security engineers must look at the big picture, aligning defense with business objectives.', es: 'Los ingenieros de seguridad deben mirar el panorama general, alineando la defensa con los objetivos del negocio.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec2-ex1-q5',
    sub: '6.2.1',
    num: 5,
    stem: 'Select the meaning of: "You have to ensure that your approach to the business is secure."',
    correct: 'Your attitude, strategy, and methodology towards business operations.',
    distractors: [
      'The physical journey between your home and the office.',
      'The speed of your internet fiber optic modem.',
      'The brand of computer hardware you purchase.'
    ],
    why_correct: '"Approach" (enfoque / postura / metodología) describe la actitud mental y estrategia organizativa frente a los procesos del negocio.',
    why_wrong_map: {
      'The physical journey between your home and the office.': 'Confunde approach con el trayecto físico de desplazamiento.',
      'The speed of your internet fiber optic modem.': 'Métrica de telecomunicaciones.',
      'The brand of computer hardware you purchase.': 'Marca de hardware.'
    },
    tip: 'Metodología organizativa: [Approach] = attitude, mindset, and strategy.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Approach = enfoque, actitud y metodología estratégica hacia el negocio.',
    trigger: 'your approach to the business is secure -> Attitude and strategy',
    trap: 'Interpretar "approach" como aproximación física de transporte.',
    usage: { scenario: 'Cultura de Seguridad Organizacional', en: 'A proactive approach ensures vulnerabilities are remediated before exploitation.', es: 'Un enfoque proactivo garantiza que las vulnerabilidades se corrijan antes de su explotación.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec2-ex1-q6',
    sub: '6.2.1',
    num: 6,
    stem: 'Select the definition for: "The database information remained intact following the breach attempt."',
    correct: 'Not broken, damaged, altered, or corrupted.',
    distractors: [
      'Completely deleted from storage arrays.',
      'Publicly published on unauthenticated web servers.',
      'Encrypted by hostile ransomware actors.'
    ],
    why_correct: '"Intact" (intacto / inalterado) significa que los datos conservaron plena integridad física y lógica sin corrupciones ni modificaciones ("Not broken or damaged").',
    why_wrong_map: {
      'Completely deleted from storage arrays.': 'Destruido; lo contrario de intacto.',
      'Publicly published on unauthenticated web servers.': 'Filtrado; compromiso de confidencialidad.',
      'Encrypted by hostile ransomware actors.': 'Secuestrado; alteración ilegítima.'
    },
    tip: 'Integridad en la tríada CIA: [Intact] = undamaged, unaltered, and complete.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Intacto = sin daños, alteraciones ni manipulaciones indebidas.',
    trigger: 'The information is intact -> Not broken or damaged',
    trap: 'Confundir intacto (no modificado) con confidencial (no visto).',
    usage: { scenario: 'Verificación de Integridad de Datos', en: 'Cryptographic hashes confirmed that the customer ledger remained intact.', es: 'Los hashes criptográficos confirmaron que el libro mayor de clientes permaneció intacto.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec2-ex1-q7',
    sub: '6.2.1',
    num: 7,
    stem: 'Select the definition for: "It shows us how accessible the data repository is."',
    correct: 'Easy to find, retrieve, and use by authorized parties.',
    distractors: [
      'Extremely expensive to purchase.',
      'Visible only under ultraviolet light.',
      'Completely locked away forever without access.'
    ],
    why_correct: '"Accessible" (accesible / disponible) en la tríada CIA (Availability) significa que los usuarios autorizados pueden localizar y consultar la información de manera oportuna y sin barreras ("Easy to find and use").',
    why_wrong_map: {
      'Extremely expensive to purchase.': 'Distractor económico.',
      'Visible only under ultraviolet light.': 'Distractor absurdo de óptica.',
      'Completely locked away forever without access.': 'Inaccesible; lo opuesto a disponibilidad.'
    },
    tip: 'Tríada CIA (Disponibilidad): [Accessible] = easy to find, access, and utilize.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Accesible = fácil de encontrar y consultar por personas autorizadas.',
    trigger: 'how accessible the information is -> Easy to find',
    trap: 'Confundir accesible con vulnerable a todo el público.',
    usage: { scenario: 'Disponibilidad de Sistemas', en: 'Ensure mission-critical documentation is accessible during network outages.', es: 'Asegúrese de que la documentación crítica esté accesible durante las caídas de red.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec2-ex2-q1',
    sub: '6.2.2',
    num: 1,
    stem: 'According to the interview with the Security Officer, how has the discipline of Information Security evolved historically?',
    correct: 'The role of information security has changed dramatically over the past fifteen years.',
    distractors: [
      'The role has remained completely static since the invention of the telephone.',
      'Information security is no longer considered necessary for modern corporations.',
      'Security has become entirely automated with zero need for human engineers.'
    ],
    why_correct: 'El oficial de seguridad explica que en los últimos 15 años la ciberseguridad pasó de ser un nicho técnico aislado a un pilar estratégico de gobernanza corporativa ("Has changed a lot in the past fifteen years").',
    why_wrong_map: {
      'The role has remained completely static since the invention of the telephone.': 'Falso; la disciplina ha evolucionado velozmente.',
      'Information security is no longer considered necessary for modern corporations.': 'Totalmente falso.',
      'Security has become entirely automated with zero need for human engineers.': 'Los analistas humanos siguen siendo indispensables.'
    },
    tip: 'Evolución histórica: La disciplina ha sufrido una transformación masiva en los últimos 15 años.',
    topic: 'V05',
    objective: 'L1',
    human_rule: 'El rol de la seguridad de la información ha cambiado drásticamente en los últimos 15 años.',
    trigger: 'role of information security -> Has changed a lot in the past fifteen years',
    trap: 'Pensar que la ciberseguridad es una disciplina rígida sin cambios recientes.',
    usage: { scenario: 'Historia de la Ciberseguridad', en: 'The CISO highlighted that cybersecurity has changed immensely over the last 15 years.', es: 'El CISO destacó que la ciberseguridad ha cambiado inmensamente durante los últimos 15 años.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec2-ex2-q2',
    sub: '6.2.2',
    num: 2,
    stem: 'What communication strategy does the Security Officer recommend when dealing with diverse internal departments?',
    correct: 'It is important to tailor different levels of technical vocabulary depending on the audience.',
    distractors: [
      'Always use dense cryptographic equations with everyone to show dominance.',
      'Refuse to speak to any department outside of the SOC.',
      'Never explain technical reasons for security decisions.'
    ],
    why_correct: 'El oficial insiste en adaptar el registro: con desarrolladores se habla de código y protocolos, pero con directores o marketing se utilizan conceptos de negocio y riesgo ("different levels of technical language").',
    why_wrong_map: {
      'Always use dense cryptographic equations with everyone to show dominance.': 'Comportamiento arrogante e ineficaz.',
      'Refuse to speak to any department outside of the SOC.': 'Genera silos dañinos.',
      'Never explain technical reasons for security decisions.': 'Destruye la adherencia a las políticas.'
    },
    tip: 'Comunicación en seguridad: Adaptar el nivel de tecnicismo a la audiencia (técnicos vs. directivos).',
    topic: 'V05',
    objective: 'L2',
    human_rule: 'Es fundamental adaptar el nivel de lenguaje técnico según el departamento con el que se hable.',
    trigger: 'dealing with internal clients -> use different levels of technical language',
    trap: 'Creer que hablar con tecnicismos oscuros a usuarios de negocios es una buena práctica.',
    usage: { scenario: 'Diplomacia y Soft Skills en TI', en: 'Good security managers adapt their technical explanations to non-engineering stakeholders.', es: 'Los buenos gerentes de seguridad adaptan sus explicaciones técnicas a los interesados no pertenecientes a la ingeniería.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec2-ex2-q3',
    sub: '6.2.2',
    num: 3,
    stem: 'What responsibility does the Security Officer state regarding small businesses and client data?',
    correct: 'A small company is just as legally and ethically responsible for the data of its clients as a massive enterprise.',
    distractors: [
      'Small companies are exempt from all data privacy regulations.',
      'Small companies do not need to implement firewalls or password policies.',
      'Small companies are allowed to sell customer passwords to third parties.'
    ],
    why_correct: 'El tamaño de la empresa no diluye la responsabilidad: las pymes custodian datos de clientes reales y tienen la misma obligación de protegerlos ("Is responsible for the data of its clients").',
    why_wrong_map: {
      'Small companies are exempt from all data privacy regulations.': 'Leyes como RGPD aplican a cualquier entidad que procese datos personales.',
      'Small companies do not need to implement firewalls or password policies.': 'Falso; las pymes sufren el 43% de los ciberataques.',
      'Small companies are allowed to sell customer passwords to third parties.': 'Actividad delictiva.'
    },
    tip: 'Responsabilidad universal: Las pequeñas empresas tienen la misma responsabilidad de custodia de datos.',
    topic: 'V05',
    objective: 'L3',
    human_rule: 'Una empresa pequeña es igual de responsable de los datos de sus clientes que una gran corporación.',
    trigger: 'A small company -> Is responsible for the data of its clients',
    trap: 'Asumir que las leyes de privacidad perdonan a las empresas pequeñas.',
    usage: { scenario: 'Cumplimiento Legal para Startups', en: 'Regardless of company size, we are strictly responsible for safeguarding customer records.', es: 'Independientemente del tamaño de la empresa, somos estrictamente responsables de proteger los registros de los clientes.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec2-ex2-q4',
    sub: '6.2.2',
    num: 4,
    stem: 'In the foundational terminology of Information Security, what does the core acronym "CIA" stand for?',
    correct: 'Confidentiality, Integrity, and Availability.',
    distractors: [
      'Central Intelligence Agency.',
      'Computer Incident Automation.',
      'Cloud Infrastructure Architecture.'
    ],
    why_correct: 'La tríada CIA en ciberseguridad representa los tres pilares de la seguridad de la información: Confidencialidad, Integridad y Disponibilidad ("Confidentiality, integrity, availability").',
    why_wrong_map: {
      'Central Intelligence Agency.': 'Agencia gubernamental de EE.UU.; no es la tríada de seguridad informática.',
      'Computer Incident Automation.': 'Siglas inventadas.',
      'Cloud Infrastructure Architecture.': 'Siglas de infraestructura.'
    },
    tip: 'Pilar fundacional de la certificación B2 de TI: [CIA Triad] = Confidentiality, Integrity, Availability.',
    topic: 'V05',
    objective: 'L4',
    human_rule: 'CIA = Confidencialidad, Integridad y Disponibilidad.',
    trigger: 'CIA stands for -> confidentiality, integrity, availability',
    trap: 'Confundir con la agencia de inteligencia homónima de EE.UU.',
    usage: { scenario: 'Fundamentos de Certificación de Seguridad', en: 'Every security control must support at least one pillar of the CIA triad.', es: 'Cada control de seguridad debe respaldar al menos un pilar de la tríada CIA.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec2-ex2-q5',
    sub: '6.2.2',
    num: 5,
    stem: 'What is the precise technical definition of "Information Integrity" in cybersecurity?',
    correct: 'It means that the information must remain accurate, complete, and protected against unauthorized modification or damage.',
    distractors: [
      'It means that data must be visible to everyone on the public internet.',
      'It means that servers must never be rebooted under any circumstance.',
      'It means that all source code must be compiled strictly into JavaScript.'
    ],
    why_correct: 'La integridad garantiza que los datos no sufran manipulaciones ilícitas, borrados accidentales ni corrupciones durante su almacenamiento o tránsito ("must not become damaged, altered, or corrupted").',
    why_wrong_map: {
      'It means that data must be visible to everyone on the public internet.': 'Vulneraría la confidencialidad.',
      'It means that servers must never be rebooted under any circumstance.': 'Distractor operativo absurdo.',
      'It means that all source code must be compiled strictly into JavaScript.': 'Absurdo.'
    },
    tip: 'Definición de Integridad: Certeza de que la información no ha sido alterada, corrompida ni falsificada.',
    topic: 'V05',
    objective: 'L4',
    human_rule: 'Integridad de la información = que los datos no sean modificados, dañados ni corrompidos.',
    trigger: 'Information integrity means -> information must not become damaged or altered',
    trap: 'Confundir integridad (no modificado) con confidencialidad (no divulgado).',
    usage: { scenario: 'Garantía Criptográfica de Archivos', en: 'Information integrity is verified using cryptographic hash checksums.', es: 'La integridad de la información se verifica mediante sumas de verificación de hash criptográfico.' }
  }),

  // =========================================================
  // 6.3 Grammar: "Was / Were On The Point Of" (12 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod6-sec3-ex1-q1',
    sub: '6.3.3',
    num: 1,
    stem: 'Complete the sentence with the imminent past structure: "I was about __________ the spyware software when you came in."',
    correct: 'To uninstall',
    distractors: ['Uninstalling', 'Uninstall', 'Uninstalled'],
    why_correct: '"Be about" rige obligatoriamente un infinitivo con to: [was about TO UNINSTALL] (estaba a punto de desinstalar).',
    why_wrong_map: {
      'Uninstalling': 'Gerundio; se usa con "on the point of", pero no con "about".',
      'Uninstall': 'Infinitivo sin to; agramatical tras about.',
      'Uninstalled': 'Forma en pasado.'
    },
    tip: 'Contraste clave: [was about TO + infinitivo] vs. [was on the point of + GERUNDIO (-ing)].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: '"was about" SIEMPRE lleva "to + verbo" ("was about to uninstall").',
    trigger: 'I was about __________ the spyware when you came in -> To uninstall',
    trap: 'Poner gerundio tras "was about" confundiéndolo con "on the point of".',
    usage: { scenario: 'Eliminación de Malware', en: 'I was about to uninstall the spyware when the system rebooted.', es: 'Estaba a punto de desinstalar el software espía cuando el sistema se reinició.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec3-ex1-q2',
    sub: '6.3.3',
    num: 2,
    stem: 'Complete the sentence: "They __________ to conduct the penetration test when the unexpected network storm hit."',
    correct: 'Were about',
    distractors: ['Were on the point of', 'About were', 'Are about'],
    why_correct: 'El verbo que sigue es un infinitivo con to ("to conduct"). Por tanto, la locución correcta en plural de pasado es "Were about" (no "on the point of", que exigiría gerundio "conducting").',
    why_wrong_map: {
      'Were on the point of': 'Exigiría gerundio "conducting", incompatible con "to conduct".',
      'About were': 'Orden sintáctico invertido agramatical.',
      'Are about': 'Presente; no concuerda con el pasado "hit".'
    },
    tip: 'Si detrás ves [to + infinitivo]: la opción es [were about].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Estaban a punto de realizar el pentest: "Were about to conduct".',
    trigger: 'They __________ to conduct the penetration test -> Were about',
    trap: 'Elegir "were on the point of" sin fijarse en que el verbo tiene "to" delante.',
    usage: { scenario: 'Pruebas de Intrusión Interrumpidas', en: 'They were about to conduct the penetration test when the server crashed.', es: 'Estaban a punto de realizar la prueba de penetración cuando se produjo la tormenta de red.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec3-ex1-q3',
    sub: '6.3.3',
    num: 3,
    stem: 'Complete the sentence with the correct verb form: "I was on the point of __________ the app, but then I realized it was an untrusted APK."',
    correct: 'Downloading',
    distractors: ['To download', 'Download', 'Downloaded'],
    why_correct: '"On the point of" termina en preposición ("of"), por lo que rige obligatoriamente gerundio (-ing): [was on the point of DOWNLOADING].',
    why_wrong_map: {
      'To download': 'Infinitivo; se usa con "about to", pero nunca tras la preposición "of".',
      'Download': 'Forma base sin -ing.',
      'Downloaded': 'Forma en pasado.'
    },
    tip: 'Tras la preposición "of": [on the point of + VERBO-ING] ("on the point of downloading").',
    topic: 'G12',
    objective: 'UE1',
    human_rule: '"on the point of" SIEMPRE lleva verbo terminado en "-ing".',
    trigger: 'I was on the point of __________ the app -> Downloading',
    trap: 'Poner infinitivo con to tras la preposición "of".',
    usage: { scenario: 'Prevención de Descarga Maliciosa', en: 'I was on the point of downloading the app, but noticed the invalid certificate.', es: 'Estaba a punto de descargar la aplicación, pero me di cuenta de que era un APK no confiable.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec3-ex1-q4',
    sub: '6.3.3',
    num: 4,
    stem: 'Complete the report statement: "I just saw him. He was about to __________ the security breach to the compliance officer."',
    correct: 'Report',
    distractors: ['Reporting', 'Reported', 'To report'],
    why_correct: 'La frase ya contiene la partícula "to" ("was about to..."), por lo que se exige la forma base pura del verbo: "report".',
    why_wrong_map: {
      'Reporting': 'Gerundio; agramatical tras "about to".',
      'Reported': 'Forma en pasado.',
      'To report': 'Duplicaría redundantemente el "to" ("was about to to report").'
    },
    tip: 'Si el enunciado ya incluye "about to", solo añade el verbo en forma base ("report").',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Estaba a punto de reportar la brecha: "was about to report".',
    trigger: 'He was about to __________ the incident -> Report',
    trap: 'Duplicar el "to" seleccionando "To report".',
    usage: { scenario: 'Escalación Inmediata de Incidentes', en: 'He was about to report the incident to the SOC manager.', es: 'Lo acabo de ver. Estaba a punto de informar del incidente al responsable de cumplimiento.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec3-ex1-q5',
    sub: '6.3.3',
    num: 5,
    stem: 'Complete the sentence with the appropriate phrase: "The security manager __________ making these critical recommendations when the audit began."',
    correct: 'Was on the point of',
    distractors: ['Was about to', 'Were on the point of', 'About was'],
    why_correct: 'El verbo que sigue está en gerundio ("making"). Con sujeto singular ("The security manager"), la única opción válida es "Was on the point of".',
    why_wrong_map: {
      'Was about to': 'Exigiría infinitivo ("to make"), incompatible con el gerundio "making".',
      'Were on the point of': 'Error de concordancia de número; "The manager" es singular y exige was.',
      'About was': 'Agramatical.'
    },
    tip: 'Sujeto singular + gerundio ("making"): [Was on the point of].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'El gerente estaba a punto de hacer estas recomendaciones: "Was on the point of making".',
    trigger: 'manager __________ making these recommendations -> Was on the point of',
    trap: 'Elegir "was about to" sin advertir la terminación "-ing" del verbo que sigue.',
    usage: { scenario: 'Reunión de Cumplimiento Regulatorio', en: 'The manager was on the point of making recommendations when the audit began.', es: 'El responsable de seguridad estaba a punto de hacer estas recomendaciones cuando comenzó la auditoría.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec3-ex1-q6',
    sub: '6.3.3',
    num: 6,
    stem: 'Complete the passive imminent sentence: "The tests __________ run when the system completely failed."',
    correct: 'Were about to be',
    distractors: ['Were on the point of', 'Was about to be', 'Were about being'],
    why_correct: 'El sujeto es plural ("The tests") y la acción es pasiva ("run" como participio de ser ejecutadas): [Were about to be run] (estaban a punto de ser ejecutadas).',
    why_wrong_map: {
      'Were on the point of': 'Exigiría gerundio pasivo "being run", no encaja con "run" a solas.',
      'Was about to be': 'Error de concordancia: "The tests" es plural y exige "were".',
      'Were about being': 'Agramatical; "about" exige to-infinitivo ("to be").'
    },
    tip: 'Pasiva inminente en plural: [Were about to be + participio pasado].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Las pruebas estaban a punto de ser ejecutadas cuando el sistema falló.',
    trigger: 'The tests __________ run when the system failed -> Were about to be',
    trap: 'Usar "was" con sujeto plural "tests".',
    usage: { scenario: 'Testing de Integración Interrumpido', en: 'The tests were about to be run when the cluster crashed.', es: 'Las pruebas estaban a punto de ser ejecutadas cuando el sistema falló por completo.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec3-ex2-q1',
    sub: '6.3.4',
    num: 1,
    stem: 'Complete the interruption complaint: "I wish you hadn\'t interrupted me. I __________ finishing this vulnerability report."',
    correct: 'Was on the point of',
    distractors: ['Was about to', 'Were on the point of', 'Am about to'],
    why_correct: 'El verbo que sigue está en gerundio ("finishing"). La locución correcta en primera persona de pasado es "Was on the point of".',
    why_wrong_map: {
      'Was about to': 'Exigiría "to finish", incompatible con "finishing".',
      'Were on the point of': 'Error de concordancia con el sujeto "I".',
      'Am about to': 'Presente; la queja hace referencia a la interrupción en el pasado.'
    },
    tip: 'Delante de un gerundio ("finishing"): usa siempre [was on the point of].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Estaba a punto de terminar este informe cuando me interrumpiste: "was on the point of finishing".',
    trigger: 'interrupted me. I __________ finishing this -> Was on the point of',
    trap: 'Elegir "was about to" por ser más común, sin notar el "-ing" del verbo.',
    usage: { scenario: 'Concentración en Redacción Técnica', en: 'I wish you hadn\'t interrupted me. I was on the point of finishing the report.', es: 'Ojalá no me hubieras interrumpido. Estaba a punto de terminar este informe de vulnerabilidades.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec3-ex2-q2',
    sub: '6.3.4',
    num: 2,
    stem: 'Complete the discovery sentence: "As we __________ report our findings, it became obvious that we had missed a critical log file."',
    correct: 'Were about to',
    distractors: ['Were on the point of', 'Was about to', 'Are about to'],
    why_correct: 'El verbo que sigue es el infinitivo base sin -ing ("report"). Con sujeto en plural ("we"), se exige "Were about to".',
    why_wrong_map: {
      'Were on the point of': 'Exigiría "reporting".',
      'Was about to': 'Error de concordancia con "we".',
      'Are about to': 'Presente; no concuerda con "became obvious".'
    },
    tip: 'Delante de un infinitivo sin -ing ("report"): usa [were about to].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Cuando estábamos a punto de informar nuestros hallazgos: "Were about to report".',
    trigger: 'As we __________ report our findings -> Were about to',
    trap: 'Poner "was about to" con el pronombre "we".',
    usage: { scenario: 'Presentación de Resultados Forenses', en: 'As we were about to report our findings, we discovered another log source.', es: 'Cuando estábamos a punto de informar nuestros hallazgos, se hizo evidente que habíamos pasado por alto un registro crítico.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec3-ex2-q3',
    sub: '6.3.4',
    num: 3,
    stem: 'Complete the sentence with the correct passive gerund: "The system was on the point of __________ (be) implemented when the critical vulnerability was discovered."',
    correct: 'Being',
    distractors: ['To be', 'Be', 'Been'],
    why_correct: '"On the point of" es una locución preposicional que exige gerundio del verbo auxiliar be: [was on the point of BEING implemented] (estaba a punto de ser implementado).',
    why_wrong_map: {
      'To be': 'Infinitivo con to; agramatical tras la preposición "of".',
      'Be': 'Forma base sin gerundio.',
      'Been': 'Participio pasado.'
    },
    tip: 'Pasiva tras preposición: [on the point of BEING + participio].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'El sistema estaba a punto de ser implementado: "on the point of being implemented".',
    trigger: 'on the point of __________ implemented -> Being',
    trap: 'Poner "to be" por calco de "a punto de ser".',
    usage: { scenario: 'Cancelación de Despliegue en Producción', en: 'The system was on the point of being implemented when the bug was found.', es: 'El sistema estaba a punto de ser implementado cuando se descubrió la vulnerabilidad crítica.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec3-ex2-q4',
    sub: '6.3.4',
    num: 4,
    stem: 'Complete the sentence: "I wish I could have joined the meeting, but we were about __________ our emergency on-call shift."',
    correct: 'To begin',
    distractors: ['Beginning', 'Begin', 'Began'],
    why_correct: 'Tras "were about" se requiere obligatoriamente infinitivo con to: [were about TO BEGIN].',
    why_wrong_map: {
      'Beginning': 'Gerundio; incompatible con "were about".',
      'Begin': 'Falta la partícula to.',
      'Began': 'Forma en pasado.'
    },
    tip: 'Fórmula fija: [were about + TO + infinitivo].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Estábamos a punto de comenzar nuestro turno de guardia: "were about to begin".',
    trigger: 'we were about __________ our emergency shift -> To begin',
    trap: 'Omitir "to" tras "were about".',
    usage: { scenario: 'Disponibilidad de Guardia NOC', en: 'I could not join because we were about to begin our shift.', es: 'Ojalá hubiera podido unirme a la reunión, pero estábamos a punto de comenzar nuestro turno de guardia.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec3-ex2-q5',
    sub: '6.3.4',
    num: 5,
    stem: 'Complete the sentence: "I __________ start running the penetration test when I was urgently called away to a major incident."',
    correct: 'Was about to',
    distractors: ['Was on the point of', 'Were about to', 'Am about to'],
    why_correct: 'El verbo rector está en forma base ("start"). En primera persona singular de pasado corresponde "Was about to".',
    why_wrong_map: {
      'Was on the point of': 'Exigiría "starting".',
      'Were about to': 'Error de concordancia con "I".',
      'Am about to': 'Presente; incompatible con el pasado "was called away".'
    },
    tip: 'Infinitivo base ("start") + sujeto "I" en pasado = [Was about to].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Estaba a punto de empezar a ejecutar el pentest: "Was about to start".',
    trigger: 'I __________ start running the penetration test -> Was about to',
    trap: 'Elegir "was on the point of" sin verificar que el verbo es "start" (y no "starting").',
    usage: { scenario: 'Gestión de Prioridades en el SOC', en: 'I was about to start the assessment when the major incident occurred.', es: 'Estaba a punto de comenzar a ejecutar la prueba de penetración cuando me llamaron urgentemente por un incidente mayor.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec3-ex2-q6',
    sub: '6.3.4',
    num: 6,
    stem: 'Complete the sentence: "They __________ delivering the training session when they had to evacuate the building."',
    correct: 'Were on the point of',
    distractors: ['Were about to', 'Was on the point of', 'About were'],
    why_correct: 'El verbo está en gerundio ("delivering") y el sujeto es plural ("They"): [Were on the point of delivering].',
    why_wrong_map: {
      'Were about to': 'Exigiría "to deliver".',
      'Was on the point of': 'Error de concordancia con "They".',
      'About were': 'Agramatical.'
    },
    tip: 'Sujeto plural + gerundio ("delivering") = [Were on the point of].',
    topic: 'G12',
    objective: 'UE1',
    human_rule: 'Estaban a punto de impartir la sesión de capacitación: "Were on the point of delivering".',
    trigger: 'They __________ delivering the training session -> Were on the point of',
    trap: 'Marcar "were about to" ignorando la terminación "-ing" de "delivering".',
    usage: { scenario: 'Evacuación de Edificio y Planes de Continuidad', en: 'They were on the point of delivering the training session when they had to evacuate.', es: 'Estaban a punto de impartir la sesión de capacitación cuando tuvieron que evacuar el edificio.' }
  }),

  // =========================================================
  // 6.4 Listening: Interview with Security Officer (Part 2) (11 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod6-sec4-ex1-q1',
    sub: '6.4.1',
    num: 1,
    stem: 'Select the definition for: "Spouses (in the context of remote work computer usage policies)."',
    correct: 'Husband or wife of an employee.',
    distractors: [
      'External contractors from IT consulting agencies.',
      'Cryptographic hardware security modules.',
      'Automated virtual desktop instances.'
    ],
    why_correct: '"Spouse" (cónyuge) se refiere al esposo o esposa de un empleado. Las políticas prohíben compartir equipos corporativos con familiares ("kids or spouses").',
    why_wrong_map: {
      'External contractors from IT consulting agencies.': 'Contratistas externos.',
      'Cryptographic hardware security modules.': 'Dispositivos HSM de hardware.',
      'Automated virtual desktop instances.': 'Entornos VDI.'
    },
    tip: 'Política de puesto de trabajo limpio: Queda prohibido prestar la laptop de trabajo a familiares o cónyuges ("spouses").',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Spouses = cónyuges (esposo o esposa del trabajador).',
    trigger: 'kids or your spouses -> Husband or wife',
    trap: 'No conocer el significado formal del sustantivo "spouse".',
    usage: { scenario: 'Política de Seguridad para Teletrabajo', en: 'Never allow kids or your spouses to use your corporate workstation.', es: 'Nunca permita que sus hijos o sus cónyuges utilicen su estación de trabajo corporativa.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec4-ex1-q2',
    sub: '6.4.1',
    num: 2,
    stem: 'Select the technical expansion for: "VPN."',
    correct: 'Virtual Private Network',
    distractors: ['Verified Protocol Node', 'Variable Packet Neutralizer', 'Vector Protection Network'],
    why_correct: 'VPN son las siglas universales de "Virtual Private Network" (Red Privada Virtual), que cifra túneles de comunicación remota.',
    why_wrong_map: {
      'Verified Protocol Node': 'Siglas ficticias inventadas.',
      'Variable Packet Neutralizer': 'Siglas ficticias.',
      'Vector Protection Network': 'Siglas inventadas.'
    },
    tip: 'Acrónimo fundamental de redes: [VPN] = Virtual Private Network.',
    topic: 'V07',
    objective: 'UE1',
    human_rule: 'VPN = Red Privada Virtual.',
    trigger: 'VPN -> Virtual Private Network',
    trap: 'Confundir las siglas con otros acrónimos de redes como VLAN o VPS.',
    usage: { scenario: 'Acceso Remoto Seguro', en: 'Remote employees must connect through the enterprise Virtual Private Network.', es: 'Los empleados remotos deben conectarse a través de la Red Privada Virtual de la empresa.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec4-ex1-q3',
    sub: '6.4.1',
    num: 3,
    stem: 'Select the technical definition for: "Encrypt data."',
    correct: 'To transform readable information into an unreadable cipher format using an encryption algorithm and key.',
    distractors: [
      'To physically delete files from the hard drive with magnets.',
      'To print documents onto paper and file them in locked cabinets.',
      'To publish credentials onto social media profiles.'
    ],
    why_correct: '"Encrypt" (cifrar / encriptar) consiste en convertir texto en claro a texto cifrado ilegible mediante una clave criptográfica ("Make a message unreadable with a code").',
    why_wrong_map: {
      'To physically delete files from the hard drive with magnets.': 'Desmagnetización (degaussing).',
      'To print documents onto paper and file them in locked cabinets.': 'Almacenamiento físico analógico.',
      'To publish credentials onto social media profiles.': 'Filtración pública masiva.'
    },
    tip: 'Fundamento criptográfico: [Encrypt] = transformar datos legibles en código ilegible.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Encrypt = cifrar los datos para que nadie sin la clave pueda leerlos.',
    trigger: 'encrypt the data -> Make a message unreadable with a code',
    trap: 'Confundir cifrar (hacer ilegible) con comprimir o destruir.',
    usage: { scenario: 'Cifrado en Tránsito y en Reposo', en: 'Always encrypt customer data before transferring it across the network.', es: 'Siempre ciffre los datos de los clientes antes de transferirlos a través de la red.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec4-ex1-q4',
    sub: '6.4.1',
    num: 4,
    stem: 'Select the technical definition for: "Decrypt data."',
    correct: 'To convert ciphertext back into its original readable plaintext format using the matching cryptographic key.',
    distractors: [
      'To compress large video files into ZIP archives.',
      'To infect an operating system with malware.',
      'To format the boot sector of a server.'
    ],
    why_correct: '"Decrypt" (descifrar) es el proceso inverso a cifrar: restituir el mensaje cifrado a su formato legible original mediante la clave correspondiente ("Make a coded message readable").',
    why_wrong_map: {
      'To compress large video files into ZIP archives.': 'Compresión de datos.',
      'To infect an operating system with malware.': 'Infección de malware.',
      'To format the boot sector of a server.': 'Formateo de partición.'
    },
    tip: 'Inverso de encrypt: [Decrypt] = hacer legible nuevamente el mensaje cifrado.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Decrypt = descifrar un mensaje codificado para volverlo legible.',
    trigger: 'decrypt the data -> Make a coded message readable',
    trap: 'Confundir descifrado autorizado (decrypt) con romper el cifrado a la fuerza (crack/brute force).',
    usage: { scenario: 'Recepción de Mensajes Cifrados', en: 'Only authorized recipients with the private key can decrypt the data.', es: 'Solo los destinatarios autorizados con la clave privada pueden descifrar los datos.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec4-ex1-q5',
    sub: '6.4.1',
    num: 5,
    stem: 'Select the definition for: "A reversible cryptographic or mathematical operation."',
    correct: 'Able to perform the transformation in the opposite direction back to the original state.',
    distractors: [
      'An operation that permanently destroys the input data.',
      'A one-way cryptographic hash function like SHA-256.',
      'A physical fuse that burns out when high voltage is detected.'
    ],
    why_correct: '"Reversible" describe una operación que puede desandarse o ejecutarse en sentido inverso (ej. cifrado y descifrado), a diferencia de funciones de un solo sentido (hashing).',
    why_wrong_map: {
      'An operation that permanently destroys the input data.': 'Operación irreversible y destructiva.',
      'A one-way cryptographic hash function like SHA-256.': 'Las funciones hash criptográficas son matemáticamente irreversibles por diseño.',
      'A physical fuse that burns out when high voltage is detected.': 'Mecanismo físico irreversible.'
    },
    tip: 'Criptografía: El cifrado simétrico es [reversible] (cifra y descifra con la misma clave).',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Reversible = que se puede realizar en sentido opuesto para volver al estado original.',
    trigger: 'operation which is being done with one key is reversible -> Able to perform the action in the opposite',
    trap: 'Confundir cifrado reversible con funciones hash irreversibles.',
    usage: { scenario: 'Cifrado Simétrico', en: 'Symmetric encryption is reversible using the shared secret key.', es: 'El cifrado simétrico es reversible utilizando la clave secreta compartida.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec4-ex1-q6',
    sub: '6.4.1',
    num: 6,
    stem: 'Select the definition for: "Phishing incidents."',
    correct: 'Sending deceptive fraudulent messages to trick victims into revealing sensitive credentials or downloading malware.',
    distractors: [
      'Physically stealing laptop computers from corporate offices.',
      'Installing fiber optic cables under sea water.',
      'Optimizing MySQL queries to increase database throughput.'
    ],
    why_correct: '"Phishing" es el ataque de ingeniería social que suplanta identidades confiables por correo o mensajería para engañar a los usuarios y robar credenciales ("Sending messages to try to get the reader to reveal credentials").',
    why_wrong_map: {
      'Physically stealing laptop computers from corporate offices.': 'Robo físico.',
      'Installing fiber optic cables under sea water.': 'Tendido de telecomunicaciones.',
      'Optimizing MySQL queries to increase database throughput.': 'Ajuste de rendimiento.'
    },
    tip: 'Vector de amenaza #1: [Phishing] = engaño mediante mensajes fraudulentos para robar credenciales.',
    topic: 'V04',
    objective: 'UE1',
    human_rule: 'Phishing = enviar correos falsos para engañar al usuario y robarle su contraseña.',
    trigger: 'phishing incidents -> Sending messages to try to get the reader',
    trap: 'Confundir phishing (por correo/mensajes) con ataques directos de denegación de servicio (DDoS).',
    usage: { scenario: 'Respuesta ante Incidentes en el SOC', en: 'The SOC reported that 90 percent of initial intrusions start with phishing incidents.', es: 'El SOC informó que el 90 por ciento de las intrusiones iniciales comienzan con incidentes de phishing.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec4-ex1-q7',
    sub: '6.4.1',
    num: 7,
    stem: 'Select the synonym for: "Hostile attacker / Threat actor (in risk assessment context)."',
    correct: 'A dangerous adversary seeking unauthorized access or damage.',
    distractors: [
      'A certified external auditor helping the company.',
      'A hardware technician replacing a power supply.',
      'An automated backup scheduling service.'
    ],
    why_correct: '"Attacker / Threat actor" se define como un adversario hostil y peligroso que intenta vulnerar la seguridad institucional ("Dangerous adversary").',
    why_wrong_map: {
      'A certified external auditor helping the company.': 'Auditor aliado legítimo.',
      'A hardware technician replacing a power supply.': 'Personal de mantenimiento legítimo.',
      'An automated backup scheduling service.': 'Servicio interno autorizado.'
    },
    tip: 'Actor de amenaza: [Attacker] = dangerous adversary / threat actor.',
    topic: 'V04',
    objective: 'UE1',
    human_rule: 'Attacker = atacante peligroso que busca vulnerar los sistemas.',
    trigger: 'providing this information to an attacker -> Dangerous adversary',
    trap: 'No distinguir entre pentesters autorizados y atacantes maliciosos externos.',
    usage: { scenario: 'Modelado de Amenazas (Threat Modeling)', en: 'We model our defenses assuming a highly sophisticated and dangerous attacker.', es: 'Modelamos nuestras defensas asumiendo un atacante altamente sofisticado y peligroso.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec4-ex2-q1',
    sub: '6.4.2',
    num: 1,
    stem: 'What strict operational directive does the Security Officer give regarding work devices at home?',
    correct: 'Family members and spouses must not be allowed to use your work computer under any circumstances.',
    distractors: [
      'Employees should let their children play video games on company laptops.',
      'Employees must disable their home Wi-Fi routers permanently.',
      'Laptops must be powered off for 23 hours every day.'
    ],
    why_correct: 'El oficial de seguridad enfatiza que los equipos corporativos son exclusivos del empleado: permitir que familiares naveguen en ellos expone la red corporativa a malware y fugas de datos ("Family members should not use your work device").',
    why_wrong_map: {
      'Employees should let their children play video games on company laptops.': 'Vulneración de seguridad gravísima.',
      'Employees must disable their home Wi-Fi routers permanently.': 'Distractor absurdo que impediría el teletrabajo.',
      'Laptops must be powered off for 23 hours every day.': 'Absurdo.'
    },
    tip: 'Política de endpoint remoto: Cero uso compartido de equipos corporativos con familiares o terceros.',
    topic: 'V05',
    objective: 'L1',
    human_rule: 'Los familiares y cónyuges no deben usar tu computadora de trabajo bajo ningún concepto.',
    trigger: 'According to the Security Officer -> Family members should not use your work device',
    trap: 'Creer que un familiar de confianza no representa un riesgo para la seguridad corporativa.',
    usage: { scenario: 'Capacitación de Teletrabajo', en: 'The policy states family members should not use your work computer.', es: 'La política establece que los miembros de la familia no deben usar su computadora de trabajo.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec4-ex2-q2',
    sub: '6.4.2',
    num: 2,
    stem: 'Where does the Security Officer recommend storing sensitive information when working remotely?',
    correct: 'Storing strongly encrypted information in approved enterprise cloud repositories.',
    distractors: [
      'Storing plaintext passwords on unencrypted USB flash drives.',
      'Writing sensitive credentials on office whiteboards.',
      'Uploading raw customer files to anonymous public file-sharing websites.'
    ],
    why_correct: 'La recomendación oficial es custodiar la información en entornos cloud corporativos que garanticen cifrado robusto en tránsito y en reposo ("Storing encrypted information in the cloud").',
    why_wrong_map: {
      'Storing plaintext passwords on unencrypted USB flash drives.': 'Peligro extremo de pérdida y robo.',
      'Writing sensitive credentials on office whiteboards.': 'Infracción de clean desk.',
      'Uploading raw customer files to anonymous public file-sharing websites.': 'Fuga de datos masiva.'
    },
    tip: 'Custodia segura en trabajo remoto: Almacenar la información cifrada en repositorios cloud empresariales aprobados.',
    topic: 'V05',
    objective: 'L2',
    human_rule: 'Se recomienda almacenar la información debidamente cifrada en la nube corporativa.',
    trigger: 'Security Officer recommends -> Storing encrypted information in the cloud',
    trap: 'Asumir que guardar archivos en local en el escritorio es más seguro que en la nube corporativa.',
    usage: { scenario: 'Almacenamiento Cloud Seguro', en: 'The Security Officer recommends storing encrypted information in enterprise cloud buckets.', es: 'El responsable de seguridad recomienda almacenar la información cifrada en la nube empresarial.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec4-ex2-q3',
    sub: '6.4.2',
    num: 3,
    stem: 'How does asymmetric encryption operate technically according to the interview?',
    correct: 'It requires a mathematically linked pair of keys: a public key and a private key.',
    distractors: [
      'It uses only one single shared password that everyone knows.',
      'It requires zero mathematical calculations on the processor.',
      'It requires printing physical punch cards with holes.'
    ],
    why_correct: 'El cifrado asimétrico (clave pública) utiliza un par de claves complementarias: la clave pública para cifrar y la clave privada exclusiva para descifrar ("Requires a public and a private key").',
    why_wrong_map: {
      'It uses only one single shared password that everyone knows.': 'Eso describe el cifrado simétrico (o una contraseña compartida insegura).',
      'It requires zero mathematical calculations on the processor.': 'La criptografía asimétrica es computacionalmente intensiva.',
      'It requires printing physical punch cards with holes.': 'Distractor histórico obsoleto.'
    },
    tip: 'Fundamento de criptografía asimétrica: [Requires a public key and a private key].',
    topic: 'V05',
    objective: 'L3',
    human_rule: 'El cifrado asimétrico requiere dos claves: una clave pública y una clave privada.',
    trigger: 'Asymmetric encryption -> Requires a public and a private key',
    trap: 'Confundir cifrado simétrico (1 sola clave compartida) con asimétrico (par de claves pública/privada).',
    usage: { scenario: 'Infraestructura de Clave Pública (PKI)', en: 'Asymmetric encryption requires a public key to encrypt and a private key to decrypt.', es: 'El cifrado asimétrico requiere una clave pública para cifrar y una clave privada para descifrar.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec4-ex2-q4',
    sub: '6.4.2',
    num: 4,
    stem: 'According to the Security Officer, what is statistically the most common type of incident encountered in enterprise organizations?',
    correct: 'Deceptive employee email phishing incidents.',
    distractors: [
      'Physical breaking and entering into datacenters with crowbars.',
      'Electromagnetic pulse strikes from space satellites.',
      'Underwater fiber optic cable destruction by marine life.'
    ],
    why_correct: 'El oficial de seguridad recalca que el vector de compromiso más frecuente son los ataques de phishing dirigidos al personal por correo electrónico ("The most common types of incidents are email phishing incidents").',
    why_wrong_map: {
      'Physical breaking and entering into datacenters with crowbars.': 'Ataques físicos raros en comparación con ciberataques.',
      'Electromagnetic pulse strikes from space satellites.': 'Distractor de ciencia ficción.',
      'Underwater fiber optic cable destruction by marine life.': 'Avería fortuita de infraestructura marina, no ciberataque corporativo habitual.'
    },
    tip: 'Estadística global de incidentes: El phishing por email es la causa más común de compromiso inicial.',
    topic: 'V04',
    objective: 'L4',
    human_rule: 'El tipo de incidente más común son los ataques de phishing por correo dirigidos a los empleados.',
    trigger: 'most common types of incidents are -> email phishing incidents',
    trap: 'Creer que los ataques más comunes son exploits de zero-day supercomplejos; la mayoría son engaños de phishing simple.',
    usage: { scenario: 'Priorización de Defensas en el SOC', en: 'Statistically, email phishing incidents represent our highest frequency threat vector.', es: 'Estadísticamente, los incidentes de phishing por correo electrónico representan nuestro vector de amenazas más frecuente.' }
  }),

  // =========================================================
  // 6.5 Reading: The Pegasus Spyware Incident (12 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod6-sec5-ex1-q1',
    sub: '6.5.1',
    num: 1,
    stem: 'Select the idiom meaning: "To receive massive media attention and become breaking news globally."',
    correct: 'Hit the headlines',
    distractors: ['Go the extra mile', 'On a roll', 'Hard to crack'],
    why_correct: '"Hit the headlines" (llegar a los titulares / copar las portadas) describe cómo el incidente de Pegasus acaparó la atención de la prensa internacional.',
    why_wrong_map: {
      'Go the extra mile': 'Hacer un esfuerzo adicional.',
      'On a roll': 'Estar en racha.',
      'Hard to crack': 'Difícil de resolver.'
    },
    tip: 'Idiom de impacto mediático: [Hit the headlines] = to get a lot of attention from the news media.',
    topic: 'V04',
    objective: 'UE1',
    human_rule: '"Hit the headlines" = acaparar los titulares de las noticias.',
    trigger: 'get a lot of attention from the media -> Hit the headlines',
    trap: 'Confundir noticias mediáticas con términos técnicos de redes.',
    usage: { scenario: 'Impacto Público de Ciberataques', en: 'The zero-day breach hit the headlines around the globe.', es: 'La brecha de seguridad de día cero acaparó los titulares en todo el mundo.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec5-ex1-q2',
    sub: '6.5.1',
    num: 2,
    stem: 'Select the term for: "The chance, probability, or statistical expectation of an event happening."',
    correct: 'Likelihood',
    distractors: ['Countermeasures', 'Encryption', 'Tamper'],
    why_correct: '"Likelihood" (probabilidad / verosimilitud) es el término formal en matrices de riesgo de ciberseguridad para medir la probabilidad de que una amenaza se materialice.',
    why_wrong_map: {
      'Countermeasures': 'Medidas de mitigación defensiva.',
      'Encryption': 'Cifrado.',
      'Tamper': 'Manipular con mala intención.'
    },
    tip: 'Gestión de riesgos en ciberseguridad: [Likelihood x Impact = Risk].',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Likelihood = probabilidad de que ocurra un evento.',
    trigger: 'The chance of something happening -> Likelihood',
    trap: 'Confundir likelihood (probabilidad) con impact (severidad del daño).',
    usage: { scenario: 'Matriz de Riesgos InfoSec', en: 'We evaluate every threat based on its likelihood and potential business impact.', es: 'Evaluamos cada amenaza en función de su probabilidad y su impacto potencial en el negocio.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec5-ex1-q3',
    sub: '6.5.1',
    num: 3,
    stem: 'Select the technical term for: "Defensive actions, controls, or procedures taken to prevent or neutralize something unwanted or dangerous."',
    correct: 'Countermeasures',
    distractors: ['Exploits', 'Malware', 'Spyware'],
    why_correct: '"Countermeasures" (contramedidas) son las barreras y defensas técnicas que se despliegan para neutralizar un ataque o mitigar una vulnerabilidad.',
    why_wrong_map: {
      'Exploits': 'Código utilizado por los atacantes para aprovechar una vulnerabilidad.',
      'Malware': 'Software malicioso.',
      'Spyware': 'Software espía.'
    },
    tip: 'Defensa activa: [Countermeasures] = actions taken to prevent something dangerous.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Contramedidas = acciones y controles defensivos implementados para frenar una amenaza.',
    trigger: 'Actions taken to prevent something unwanted -> Countermeasures',
    trap: 'Confundir defensas (countermeasures) con vectores de ataque (exploits).',
    usage: { scenario: 'Arquitectura de Defensa en Profundidad', en: 'Deploying MFA and network segmentation are essential countermeasures.', es: 'El despliegue de MFA y la segmentación de red son contramedidas esenciales.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec5-ex1-q4',
    sub: '6.5.1',
    num: 4,
    stem: 'Select the term for: "Information that has been transformed into a secure digital code to prevent unauthorized reading."',
    correct: 'Encrypted',
    distractors: ['Compromised', 'Plaintext', 'Unmasked'],
    why_correct: '"Encrypted" (cifrado / codificado) es el estado seguro de la información convertida mediante algoritmos en texto ininteligible para terceros.',
    why_wrong_map: {
      'Compromised': 'Filtrado o vulnerado.',
      'Plaintext': 'Texto plano sin cifrar.',
      'Unmasked': 'Desenmascarado.'
    },
    tip: 'Estado de seguridad de datos: [Encrypted] = put into a special form so strangers cannot read it.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Encrypted = cifrado con una clave criptográfica.',
    trigger: 'information into a special form so strangers cannot read -> Encrypted',
    trap: 'Confundir cifrado (encrypted) con comprometido (compromised).',
    usage: { scenario: 'Cifrado de Mensajería de Extremo a Extremo', en: 'WhatsApp messages are encrypted end-to-end.', es: 'Los mensajes de WhatsApp están cifrados de extremo a extremo.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec5-ex1-q5',
    sub: '6.5.1',
    num: 5,
    stem: 'Select the idiom meaning: "To become publicly known or exposed after being concealed or secret."',
    correct: 'Come to light',
    distractors: ['Hit the road', 'Turn a blind eye', 'Call it a day'],
    why_correct: '"Come to light" (salir a la luz) es el modismo que describe cómo se destaparon los detalles de espionaje del spyware Pegasus.',
    why_wrong_map: {
      'Hit the road': 'Ponerse en marcha / salir de viaje.',
      'Turn a blind eye': 'Hacer la vista gorda.',
      'Call it a day': 'Dar la jornada por terminada.'
    },
    tip: 'Descubrimiento de secretos: [Come to light] = salir a la luz / hacerse público.',
    topic: 'V04',
    objective: 'UE1',
    human_rule: '"Come to light" = salir a la luz tras haber estado oculto.',
    trigger: 'Become known to the public -> Come to light',
    trap: 'Confundir con "shed light on" (arrojar luz para explicar).',
    usage: { scenario: 'Investigación Periodística de Ciberseguridad', en: 'Details of the surveillance campaign finally came to light.', es: 'Los detalles de la campaña de vigilancia finalmente salieron a la luz.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec5-ex1-q6',
    sub: '6.5.1',
    num: 6,
    stem: 'Select the action verb for: "To fight actively against or take determined measures to suppress a threat or vulnerability."',
    correct: 'Combat',
    distractors: ['Ignore', 'Surrender', 'Compromise'],
    why_correct: '"Combat" (combatir / luchar contra) se define en Cisco como "fight against", aplicándose a combatir el malware y la ciberdelincuencia.',
    why_wrong_map: {
      'Ignore': 'Ignorar.',
      'Surrender': 'Rendirse.',
      'Compromise': 'Comprometer la seguridad.'
    },
    tip: 'Lucha defensiva: [Combat malware / threats] = Fight against.',
    topic: 'V04',
    objective: 'UE1',
    human_rule: 'Combat = combatir o luchar activamente contra una amenaza.',
    trigger: 'Fight against -> Combat',
    trap: 'Pensar que "combat" solo se aplica a enfrentamientos físicos militares.',
    usage: { scenario: 'Estrategia de Ciberdefensa', en: 'New security patches were deployed to combat the zero-click vulnerability.', es: 'Se desplegaron nuevos parches de seguridad para combatir la vulnerabilidad zero-click.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec5-ex2-q1',
    sub: '6.5.3',
    num: 1,
    stem: 'In the Pegasus spyware article, which section explains that it is exceptionally difficult to discover or detect whether the spyware is active on a device?',
    correct: 'Paragraph C',
    distractors: ['Paragraph A', 'Paragraph B', 'Paragraph D'],
    why_correct: 'El Párrafo C del texto oficial de Cisco detalla las capacidades sigilosas del spyware y explica por qué para un usuario normal o antivirus convencional es casi imposible detectar su presencia silenciosa en memoria.',
    why_wrong_map: {
      'Paragraph A': 'Introduce el escándalo mediático y el uso indebido.',
      'Paragraph B': 'Describe las capacidades de captura de pulsaciones y mensajes.',
      'Paragraph D': 'Detalla el coste económico millonario de las licencias del software.'
    },
    tip: 'Scanning de texto (Pegasus): Párrafo C = Dificultad extrema de detección y técnicas stealth.',
    topic: 'V05',
    objective: 'R3',
    human_rule: 'El párrafo C explica lo difícil que es descubrir si el spyware está instalado en el móvil.',
    trigger: 'hard to discover if the software is installed -> Paragraph C',
    trap: 'Confundir las capacidades de espionaje (Párrafo B) con el sigilo de detección (Párrafo C).',
    usage: { scenario: 'Lectura Comprensiva de Análisis de Malware', en: 'Paragraph C outlines how the stealth nature makes detection nearly impossible.', es: 'El párrafo C describe cómo su naturaleza sigilosa hace que la detección sea casi imposible.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec5-ex2-q2',
    sub: '6.5.3',
    num: 2,
    stem: 'Which section of the Pegasus text states that the software has been generating massive global media headlines and public scrutiny?',
    correct: 'Paragraph A',
    distractors: ['Paragraph B', 'Paragraph C', 'Paragraph D'],
    why_correct: 'El Párrafo A abre el artículo mencionando cómo Pegasus copó los titulares de la prensa internacional tras las investigaciones periodísticas globales.',
    why_wrong_map: {
      'Paragraph B': 'Trata de la captura de contraseñas y mensajes cifrados.',
      'Paragraph C': 'Trata de los métodos de infección y evasión de detección.',
      'Paragraph D': 'Trata del modelo de precios y clientes gubernamentales.'
    },
    tip: 'Scanning de texto: Párrafo A = Repercusión mediática en las noticias ("hit the headlines").',
    topic: 'V05',
    objective: 'R3',
    human_rule: 'El párrafo A es el que dice que Pegasus ha recibido gran atención mediática mundial.',
    trigger: 'Pegasus has been getting media attention -> Paragraph A',
    trap: 'No relacionar la apertura del artículo con la cobertura de los medios.',
    usage: { scenario: 'Skimming de Artículos de Ciberseguridad', en: 'Paragraph A introduces the media sensation caused by the Pegasus revelations.', es: 'El párrafo A presenta la sensación mediática causada por las revelaciones de Pegasus.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec5-ex2-q3',
    sub: '6.5.3',
    num: 3,
    stem: 'Which section reveals that Pegasus was not being utilized solely for legitimate law enforcement and anti-terrorism purposes?',
    correct: 'Paragraph A',
    distractors: ['Paragraph B', 'Paragraph C', 'Paragraph D'],
    why_correct: 'El Párrafo A expone la controversia de que el spyware fue presuntamente usado contra activistas de derechos humanos, periodistas y opositores políticos, más allá del antiterrorismo oficial.',
    why_wrong_map: {
      'Paragraph B': 'Detalla qué datos extrae el troyano (cámara, micrófono).',
      'Paragraph C': 'Detalla la vulnerabilidad zero-click.',
      'Paragraph D': 'Detalla la parte financiera y comercial.'
    },
    tip: 'Scanning de texto: Párrafo A = Uso indebido fuera del antiterrorismo (activistas, periodistas).',
    topic: 'V05',
    objective: 'R2',
    human_rule: 'El párrafo A señala que el software no se utilizaba solo para combatir el terrorismo.',
    trigger: 'software is not being used solely for lawful purposes -> Paragraph A',
    trap: 'Buscar el abuso en párrafos técnicos cuando está en la introducción contextual.',
    usage: { scenario: 'Análisis Ético y Legal de Spyware', en: 'Paragraph A discusses the misuse of the software against non-criminal targets.', es: 'El párrafo A analiza el uso indebido del software contra objetivos no delictivos.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec5-ex2-q4',
    sub: '6.5.3',
    num: 4,
    stem: 'Which section of the article emphasizes that the Pegasus spyware is prohibitively expensive to acquire and deploy?',
    correct: 'Paragraph D',
    distractors: ['Paragraph A', 'Paragraph B', 'Paragraph C'],
    why_correct: 'El Párrafo D analiza el modelo comercial de NSO Group y explica que las licencias cuestan millones de dólares, poniéndolas solo al alcance de estados soberanos.',
    why_wrong_map: {
      'Paragraph A': 'Trata de la repercusión mediática inicial.',
      'Paragraph B': 'Trata de las funciones de espionaje técnico.',
      'Paragraph C': 'Trata de los exploits de día cero en iMessage/WhatsApp.'
    },
    tip: 'Scanning de texto: Párrafo D = Coste económico exorbitante y clientes exclusivos.',
    topic: 'V05',
    objective: 'R3',
    human_rule: 'El párrafo D afirma que el software espía es extremadamente caro.',
    trigger: 'software is expensive -> Paragraph D',
    trap: 'Asumir que el precio se menciona al inicio del artículo.',
    usage: { scenario: 'Inteligencia de Amenazas Comerciales', en: 'Paragraph D notes that Pegasus licenses cost millions of dollars.', es: 'El párrafo D señala que las licencias de Pegasus cuestan millones de dólares.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec5-ex2-q5',
    sub: '6.5.3',
    num: 5,
    stem: 'Which section describes how Pegasus can record keystrokes, activate the camera/microphone, and harvest encrypted chat messages?',
    correct: 'Paragraph B',
    distractors: ['Paragraph A', 'Paragraph C', 'Paragraph D'],
    why_correct: 'El Párrafo B detalla las capacidades forenses del implante: keylogging, exfiltración de fotos, activación sigilosa de micrófonos y captura de chats cifrados en pantalla.',
    why_wrong_map: {
      'Paragraph A': 'Cobertura en los medios de comunicación.',
      'Paragraph C': 'Método de entrega mediante zero-click.',
      'Paragraph D': 'Aspectos financieros del desarrollador.'
    },
    tip: 'Scanning de texto: Párrafo B = Capacidades técnicas de espionaje y exfiltración de datos.',
    topic: 'V05',
    objective: 'R2',
    human_rule: 'El párrafo B detalla que el software puede registrar pulsaciones de teclas y extraer mensajes.',
    trigger: 'record the keys pressed and harvest chats -> Paragraph B',
    trap: 'Confundir el método de infección (C) con lo que hace el virus una vez dentro (B).',
    usage: { scenario: 'Capacidades de Amenazas APT', en: 'Paragraph B explains the extensive data-harvesting capabilities of Pegasus.', es: 'El párrafo B explica las amplias capacidades de recolección de datos de Pegasus.' }
  }),
  createQuestion({
    id: 'it1-mod6-sec5-ex2-q6',
    sub: '6.5.3',
    num: 6,
    stem: 'Which section describes the mechanism by which Pegasus infects mobile devices via zero-click vulnerabilities without requiring user interaction?',
    correct: 'Paragraph C',
    distractors: ['Paragraph A', 'Paragraph B', 'Paragraph D'],
    why_correct: 'El Párrafo C explica el vector de compromiso: no requiere que la víctima haga clic en ningún enlace sospechoso (zero-click exploit en protocolos de mensajería), infectando el dispositivo de forma totalmente silenciosa.',
    why_wrong_map: {
      'Paragraph A': 'Noticia en portadas de prensa.',
      'Paragraph B': 'Exfiltración de fotos y micrófono.',
      'Paragraph D': 'Precio y costes de adquisición.'
    },
    tip: 'Scanning de texto: Párrafo C = Vector de ataque de infección silenciosa sin clics ("zero-click").',
    topic: 'V05',
    objective: 'R3',
    human_rule: 'El párrafo C describe cómo el software espía ingresa a un teléfono sin interacción del usuario.',
    trigger: 'describes how the spyware gets onto a phone -> Paragraph C',
    trap: 'Creer que Pegasus requería phishing con enlaces (la versión moderna usa zero-click silencioso).',
    usage: { scenario: 'Análisis de Exploits Zero-Click', en: 'Paragraph C describes the zero-click delivery mechanism of Pegasus.', es: 'El párrafo C describe el mecanismo de entrega zero-click de Pegasus.' }
  })
];

module.exports = { items_mod6 };
