import { Question } from '../../types';

/**
 * English for IT 1 – Module 2: Network Engineer: Interpret & Implement Instructions
 * 2.4 Section 4 – Reading: Job Roles and Responsibilities
 * Official OpenEDG / Cisco Curriculum
 * Covers:
 *  - Professional memo reading: Job duties, boundaries, delegation, and escalation protocols
 *  - Official Vocabulary: beyond your scope of duties, have in mind, handled, didn't do a thing, sent back, all the same
 *  - Key Fixed Professional Phrases:
 *      * I'm reaching out to you regarding + subject
 *      * Let me remind you of + noun
 *      * I don't want to discourage you from + gerund
 *      * What I have in mind is that + clause
 *      * Please do not hesitate to + verb
 * 2.4.3 Official Reading Comprehension Exercise (6 items) + Official Vocabulary (6 items) + Fixed Phrases Context (4 items) = 16 items
 */
export const ENGLISH_FOR_IT_1_MODULE_2_SECTION_4_BANK: Question[] = [
  {
    "id": "it1-mod2-sec4-ex-q1",
    "section": "R",
    "objective": "R1",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the memo \"Job Roles and Responsibilities\", what does the author (Jim) think about the overall performance of his subordinate (Mark)?",
    "options": [
      "He is satisfied, although some things do need improvement.",
      "He has several serious doubts about Mark's performance.",
      "He is disappointed in Mark.",
      "He has two serious concerns about the Marketing department."
    ],
    "answer": 0,
    "why_correct": "• Pista: Qué opina Jim sobre el desempeño de Mark.\n• Significado: Está satisfecho, aunque hay cosas por mejorar.\n• Descartas: Dudas serias, decepción o preocupaciones sobre Marketing no coinciden.",
    "why_wrong": [
      "Opción correcta: Satisfecho, con cosas por mejorar.",
      "Incorrecto: No tiene dudas serias.",
      "Incorrecto: No está decepcionado.",
      "Incorrecto: No habla de Marketing."
    ],
    "tip_es": "En el párrafo 1: \"All the raised issues were isolated and removed, yet I have some suggestions...\".",
    "ref": "txt-it1-2.4",
    "evidence_quote": "All the raised issues were isolated and removed, yet I have some suggestions that will improve your performance and make your work simpler.",
    "human_rule": "although = aunque, contraste.",
    "trigger_anchor": "overall performance ➔ satisfied",
    "spanglish_trap": "Leer solo la parte negativa.",
    "workplace_usage": {
      "scenario": "1-on-1 Feedback / Performance Review",
      "en": "The manager was satisfied with the incident resolution, although the engineer's boundary management needed improvement.",
      "es": "El gerente quedó satisfecho con la resolución del incidente, aunque la gestión de límites del ingeniero necesitaba mejoras."
    }
  },
  {
    "id": "it1-mod2-sec4-ex-q2",
    "section": "R",
    "objective": "R1",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on the text, who actually dealt with the user-access layer cabling during the recent incident?",
    "options": [
      "The IT Helpdesk.",
      "The networking team.",
      "Nobody.",
      "The Marketing department."
    ],
    "answer": 1,
    "why_correct": "• Pista: Quién se ocupó del cableado de acceso de usuarios.\n• Significado: El equipo de redes.\n• Descartas: Helpdesk, nadie o Marketing no lo hicieron.",
    "why_wrong": [
      "Incorrecto: El Helpdesk no lo hizo.",
      "Opción correcta: El equipo de redes.",
      "Incorrecto: No fue nadie.",
      "Incorrecto: Marketing no participó."
    ],
    "tip_es": "El texto contrasta quién DEBERÍA hacerlo (IT Helpdesk) con quién lo HIZO en realidad: \"conducted by you and you only\" (Mark, Network Engineer).",
    "ref": "txt-it1-2.4",
    "evidence_quote": "Some of the tasks which did need to be done were verifying and, where necessary, fixing the cabling. Both of those tasks were conducted by you and you only.",
    "human_rule": "busca quién actuó, no a quién correspondía.",
    "trigger_anchor": "who dealt ➔ networking team",
    "spanglish_trap": "Confundir quien debía con quien lo hizo.",
    "workplace_usage": {
      "scenario": "Auditoría de Roles y Tareas (RACI Matrix)",
      "en": "In this ticket, the networking team dealt with physical cabling that was out of their RACI scope.",
      "es": "En este ticket, el equipo de redes se encargó del cableado físico que estaba fuera de su matriz de responsabilidades RACI."
    }
  },
  {
    "id": "it1-mod2-sec4-ex-q3",
    "section": "R",
    "objective": "R3",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What does the author state regarding the network engineer’s specific duties with cabling?",
    "options": [
      "One of them is storing the broken cables.",
      "One of them is purchasing the UTP cables.",
      "One of them is handling the optical cables.",
      "One of them is laying the copper cables."
    ],
    "answer": 2,
    "why_correct": "• Pista: Deberes del ingeniero de redes con el cableado.\n• Significado: Uno de ellos es manejar los cables ópticos.\n• Descartas: Guardar cables rotos, comprar UTP o tender cobre no son sus deberes citados.",
    "why_wrong": [
      "Incorrecto: Guardar cables rotos no se menciona.",
      "Incorrecto: Comprar UTP no se menciona.",
      "Opción correcta: Manejar los cables ópticos.",
      "Incorrecto: Tender cobre no se menciona."
    ],
    "tip_es": "Palabra clave en el texto: \"The only exception here is the optical cabling\".",
    "ref": "txt-it1-2.4",
    "evidence_quote": "The only exception here is the optical cabling, which is hardly ever used for that purpose.",
    "human_rule": "optical cables = deber de redes.",
    "trigger_anchor": "network engineer ➔ optical cables",
    "spanglish_trap": "Mezclar óptico y cobre.",
    "workplace_usage": {
      "scenario": "Delimitación de Tareas de Infraestructura",
      "en": "Network engineers handle the optical backbone links, while desktop support installs copper patch cords.",
      "es": "Los ingenieros de redes manejan los enlaces troncales de fibra óptica, mientras que soporte a usuarios instala los cables de parcheo de cobre."
    }
  },
  {
    "id": "it1-mod2-sec4-ex-q4",
    "section": "R",
    "objective": "R3",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What does the author say about the division of responsibilities when handling a technical problem across teams?",
    "options": [
      "It sometimes complicates the troubleshooting process.",
      "It often makes the relations between colleagues worse.",
      "It requires at least one of the managers to be included in the process.",
      "It may sometimes lengthen the troubleshooting process."
    ],
    "answer": 3,
    "why_correct": "• Pista: División de responsabilidades en problemas entre equipos.\n• Significado: A veces alarga el proceso de resolución.\n• Descartas: Complica siempre, empeora relaciones o exige gerente no es lo dicho.",
    "why_wrong": [
      "Incorrecto: \"Complica\" es más fuerte que el texto.",
      "Incorrecto: No empeora relaciones.",
      "Incorrecto: No exige un gerente.",
      "Opción correcta: A veces alarga la resolución."
    ],
    "tip_es": "En el texto: \"this could make the whole process longer. This is the cost that we must accept.\"",
    "ref": "txt-it1-2.4",
    "evidence_quote": "The only thing that comes to my mind that may go against this approach is that this could make the whole process longer. This is the cost that we must accept.",
    "human_rule": "sometimes lengthen = a veces alarga.",
    "trigger_anchor": "division of responsibilities ➔ lengthen",
    "spanglish_trap": "Exagerar lo que dice el texto.",
    "workplace_usage": {
      "scenario": "Service Delivery Governance",
      "en": "Proper ticket routing may lengthen the turnaround time slightly, but it ensures accountable SLA tracking.",
      "es": "El enrutamiento adecuado de tickets puede alargar levemente el tiempo de entrega, pero garantiza el seguimiento responsable de los SLAs."
    }
  },
  {
    "id": "it1-mod2-sec4-ex-q5",
    "section": "R",
    "objective": "R3",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What does the author state regarding the qualifications of colleagues from other departments (such as the IT Helpdesk)?",
    "options": [
      "He’s convinced that everyone possesses the necessary skills.",
      "He has some doubts about their qualifications.",
      "He gives examples of the people that didn’t have the necessary skills.",
      "He doesn't give his opinion on it."
    ],
    "answer": 0,
    "why_correct": "• Pista: Cualificación de colegas de otros departamentos.\n• Significado: Está convencido de que todos tienen las habilidades necesarias.\n• Descartas: Dudas, ejemplos de gente sin habilidades o no opinar no coinciden.",
    "why_wrong": [
      "Opción correcta: Está convencido de sus habilidades.",
      "Incorrecto: No tiene dudas.",
      "Incorrecto: No da ejemplos negativos.",
      "Incorrecto: Sí da su opinión."
    ],
    "tip_es": "Texto clave: \"This person is trained and qualified to do such tasks, so the quality of this work should be good.\"",
    "ref": "txt-it1-2.4",
    "evidence_quote": "This person is trained and qualified to do such tasks, so the quality of this work should be good.",
    "human_rule": "convinced = convencido.",
    "trigger_anchor": "qualifications ➔ everyone skilled",
    "spanglish_trap": "Traducir convinced como \"convicto\".",
    "workplace_usage": {
      "scenario": "Inter-team Trust & Delegation",
      "en": "The manager assured the junior engineer that the desktop technicians possess the skills required for patch panel work.",
      "es": "El gerente aseguró al ingeniero junior que los técnicos de soporte poseen las habilidades requeridas para el trabajo de paneles de conexión."
    }
  },
  {
    "id": "it1-mod2-sec4-ex-q6",
    "section": "R",
    "objective": "R3",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "What is Jim's advice to Mark regarding communication problems or refused requests with colleagues from other departments?",
    "options": [
      "They should be reported to the colleague’s direct manager.",
      "They should be reported to him directly.",
      "They should be reported to the IT Director.",
      "They should be solved without involving any of the managers."
    ],
    "answer": 1,
    "why_correct": "• Pista: Consejo de Jim ante problemas o peticiones rechazadas.\n• Significado: Reportarlos directamente a él.\n• Descartas: Al jefe del colega, al director de TI o sin gerentes no es su consejo.",
    "why_wrong": [
      "Incorrecto: No al jefe del colega.",
      "Opción correcta: Reportarlos directamente a Jim.",
      "Incorrecto: No al director de TI.",
      "Incorrecto: No resolverlos sin gerentes."
    ],
    "tip_es": "En el texto: \"the option here is to report this behavior to me, your direct manager.\"",
    "ref": "txt-it1-2.4",
    "evidence_quote": "Your job role doesn’t allow you to enforce your request, so the option here is to report this behavior to me, your direct manager.",
    "human_rule": "report to me = a Jim.",
    "trigger_anchor": "refused requests ➔ report to Jim",
    "spanglish_trap": "Elegir la cadena de mando más alta.",
    "workplace_usage": {
      "scenario": "Corporate Escalation Matrix",
      "en": "When cross-functional tasks stall, report the blockage to your direct manager rather than escalating directly to department heads.",
      "es": "Cuando las tareas interfuncionales se estancan, reporte el bloqueo a su gerente directo en lugar de escalar directamente a los jefes de departamento."
    }
  },
  {
    "id": "it1-mod2-sec4-vocab-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the phrase from the official vocabulary that means: \"not part of your work or assigned responsibilities\".",
    "options": [
      "handled",
      "all the same",
      "beyond your scope of duties",
      "have in mind"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"not part of your work\": fuera de tu alcance.\n• Significado: beyond your scope of duties = fuera de tus responsabilidades.\n• Descartas: handled, all the same y have in mind tienen otro sentido.",
    "why_wrong": [
      "Incorrecto: handled = gestionado.",
      "Incorrecto: all the same = de todos modos.",
      "Opción correcta: beyond your scope of duties.",
      "Incorrecto: have in mind = tener en mente."
    ],
    "tip_es": "Glosario 2.4.1: \"Beyond your scope of duties: not part of your work\".",
    "ref": null,
    "human_rule": "beyond scope = fuera de tus funciones.",
    "trigger_anchor": "not part of duties ➔ beyond scope",
    "spanglish_trap": "Traducir scope como \"telescopio\".",
    "workplace_usage": {
      "scenario": "Job Description Boundaries",
      "en": "Configuring user workstations is beyond the scope of duties of our core network architect.",
      "es": "Configurar estaciones de trabajo de usuarios está fuera del alcance de funciones de nuestro arquitecto de red central."
    }
  },
  {
    "id": "it1-mod2-sec4-vocab-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the official vocabulary in Section 2.4.1, which expression means the same as \"thinking about\"?",
    "options": [
      "didn't do a thing",
      "sent back",
      "handled",
      "have in mind"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"thinking about\" = tener en mente.\n• Significado: have in mind = tener en mente.\n• Descartas: didn't do a thing, sent back y handled son otros.",
    "why_wrong": [
      "Incorrecto: didn't do a thing = no hizo nada.",
      "Incorrecto: sent back = devolvió.",
      "Incorrecto: handled = gestionó.",
      "Opción correcta: have in mind = tener en mente."
    ],
    "tip_es": "Glosario 2.4.1: \"Have in mind: thinking about\".",
    "ref": null,
    "human_rule": "have in mind = pensar en.",
    "trigger_anchor": "thinking about ➔ have in mind",
    "spanglish_trap": "Traducir mind como \"mente\" literal.",
    "workplace_usage": {
      "scenario": "Sprint Planning",
      "en": "What I have in mind is automating the regression testing pipeline before next Friday.",
      "es": "Lo que tengo en mente es automatizar la canalización de pruebas de regresión antes del próximo viernes."
    }
  },
  {
    "id": "it1-mod2-sec4-vocab-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the sentence \"All the user-access layer cabling should be handled by the IT Helpdesk\", what does \"handled\" mean according to the official vocabulary?",
    "options": [
      "dealt with",
      "returned",
      "avoided",
      "delayed"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"handled by the IT Helpdesk\" = gestionado.\n• Significado: dealt with = ocuparse de algo.\n• Descartas: returned, avoided y delayed cambian el sentido.",
    "why_wrong": [
      "Opción correcta: dealt with = ocuparse.",
      "Incorrecto: returned = devuelto.",
      "Incorrecto: avoided = evitado.",
      "Incorrecto: delayed = retrasado."
    ],
    "tip_es": "Glosario 2.4.1: \"Handled: dealt with\".",
    "ref": null,
    "human_rule": "handle = deal with.",
    "trigger_anchor": "handled ➔ dealt with",
    "spanglish_trap": "Traducir handle como \"manejar con manos\".",
    "workplace_usage": {
      "scenario": "Ticket Resolution",
      "en": "Tier-1 tickets should be dealt with within fifteen minutes of submission.",
      "es": "Los tickets de Nivel 1 deben ser atendidos dentro de los quince minutos posteriores a su envío."
    }
  },
  {
    "id": "it1-mod2-sec4-vocab-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the text, the author notes: \"Dominic, a person from the IT Helpdesk who was working with you on that problem, didn’t do a thing.\" What does the idiom \"didn’t do a thing\" mean?",
    "options": [
      "did everything perfectly",
      "did nothing",
      "did only physical work",
      "did the work slowly"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"didn't do a thing\" = no hizo nada.\n• Significado: did nothing.\n• Descartas: Hacerlo perfecto, solo físico o lento es lo contrario.",
    "why_wrong": [
      "Incorrecto: Hacerlo perfecto es lo contrario.",
      "Opción correcta: did nothing = no hizo nada.",
      "Incorrecto: Solo físico no coincide.",
      "Incorrecto: Hacerlo lento no coincide."
    ],
    "tip_es": "Glosario 2.4.1: \"Didn't do a thing: did nothing\".",
    "ref": null,
    "human_rule": "not a thing = nada.",
    "trigger_anchor": "didn't do a thing ➔ did nothing",
    "spanglish_trap": "Traducir thing como \"cosa\" y no ver la negación.",
    "workplace_usage": {
      "scenario": "Escalation Report",
      "en": "The vendor representative didn't do a thing until we escalated the ticket to their technical account manager.",
      "es": "El representante del proveedor no hizo nada hasta que escalamos el ticket a su gerente técnico de cuenta."
    }
  },
  {
    "id": "it1-mod2-sec4-vocab-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Which word from Section 2.4.1 is defined as meaning the same as \"returned\"?",
    "options": [
      "handled",
      "all the same",
      "sent back",
      "have in mind"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"returned\" = devuelto.\n• Significado: sent back = devolvió.\n• Descartas: handled, all the same y have in mind no significan devolver.",
    "why_wrong": [
      "Incorrecto: handled = gestionó.",
      "Incorrecto: all the same = de todos modos.",
      "Opción correcta: sent back = devolvió.",
      "Incorrecto: have in mind = tener en mente."
    ],
    "tip_es": "Glosario 2.4.1: \"Sent back: returned\".",
    "ref": null,
    "human_rule": "sent back = devolvió.",
    "trigger_anchor": "returned ➔ sent back",
    "spanglish_trap": "Confundir con \"enviado\".",
    "workplace_usage": {
      "scenario": "Ticket Routing / SLA",
      "en": "The ticket was sent back to Tier-1 because required diagnostic logs were missing.",
      "es": "El ticket fue devuelto a Nivel 1 porque faltaban los registros de diagnóstico requeridos."
    }
  },
  {
    "id": "it1-mod2-sec4-vocab-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In the sentence: \"The other person is not able to do their job if they don’t know that they are required to, but they are responsible for doing it all the same\", what does \"all the same\" mean?",
    "options": [
      "carefully",
      "identically",
      "simultaneously",
      "nevertheless"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"responsible for doing it all the same\" = de todos modos.\n• Significado: nevertheless = sin embargo.\n• Descartas: carefully, identically y simultaneously cambian el sentido.",
    "why_wrong": [
      "Incorrecto: carefully = con cuidado.",
      "Incorrecto: identically = idénticamente.",
      "Incorrecto: simultaneously = a la vez.",
      "Opción correcta: nevertheless = aun así."
    ],
    "tip_es": "Glosario 2.4.1: \"All the same: nevertheless\".",
    "ref": null,
    "human_rule": "all the same = nevertheless.",
    "trigger_anchor": "all the same ➔ nevertheless",
    "spanglish_trap": "Traducir como \"todos iguales\".",
    "workplace_usage": {
      "scenario": "Policy Compliance",
      "en": "The deployment took place during a holiday, but standard change control procedures applied all the same.",
      "es": "El despliegue se realizó durante un día festivo, pero los procedimientos estándar de control de cambios se aplicaron no obstante (a pesar de ello)."
    }
  },
  {
    "id": "it1-mod2-sec4-phrases-q1",
    "section": "UE",
    "objective": "UE4",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the professional email opening recommended in the Official Guide Tip:\n\"I’m reaching out to you __________ the last network events that took place.\"",
    "options": [
      "regarding",
      "for",
      "about of",
      "in consideration to"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"reaching out ______ the last network events\": tema.\n• Significado: regarding = acerca de.\n• Descartas: for, about of e in consideration to son incorrectas.",
    "why_wrong": [
      "Opción correcta: regarding = acerca de.",
      "Incorrecto: \"for\" no encaja aquí.",
      "Incorrecto: \"about of\" no existe en inglés.",
      "Incorrecto: \"in consideration to\" no es la forma correcta."
    ],
    "tip_es": "Fórmula fija oficial: \"I'm reaching out to you regarding + [subject]\".",
    "ref": null,
    "human_rule": "regarding = acerca de.",
    "trigger_anchor": "reaching out ... ➔ regarding",
    "spanglish_trap": "Poner \"about of\" por traducir \"acerca de\".",
    "workplace_usage": {
      "scenario": "Professional Emailing",
      "en": "I am reaching out to you regarding the unexpected latency spike observed on router R3.",
      "es": "Me pongo en contacto con usted con respecto al pico inesperado de latencia observado en el router R3."
    }
  },
  {
    "id": "it1-mod2-sec4-phrases-q2",
    "section": "UE",
    "objective": "UE4",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the official grammatical rules in Section 2.4 Tip, complete the sentence with the correct verb form:\n\"First, let me remind you __________ the duties that go together with your position.\"",
    "options": [
      "about that",
      "of",
      "to",
      "with"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"remind you ______ the duties\": remind + of.\n• Significado: remind someone of something.\n• Descartas: about that, to y with no son la preposición correcta.",
    "why_wrong": [
      "Incorrecto: \"about that\" no encaja.",
      "Opción correcta: remind you of.",
      "Incorrecto: \"to\" no encaja.",
      "Incorrecto: \"with\" no encaja."
    ],
    "tip_es": "Estructura oficial: \"Let me remind you of + [noun]\".",
    "ref": null,
    "human_rule": "remind someone OF something.",
    "trigger_anchor": "remind you ➔ of",
    "spanglish_trap": "Decir \"remind about\".",
    "workplace_usage": {
      "scenario": "Manager Directive",
      "en": "Let me remind you of our zero-trust access control policy before you proceed with changes.",
      "es": "Permítame recordarle nuestra política de control de acceso de confianza cero antes de continuar con los cambios."
    }
  },
  {
    "id": "it1-mod2-sec4-phrases-q3",
    "section": "UE",
    "objective": "UE4",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Select the grammatically correct completion based on the official tip pattern: \"I don’t want to discourage you from __________ as involved as you did.\"",
    "options": [
      "to become",
      "become",
      "becoming",
      "became"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"discourage you from ______\": preposición + -ing.\n• Significado: discourage from + gerundio: becoming.\n• Descartas: to become, become y became no van después de from.",
    "why_wrong": [
      "Incorrecto: \"to become\" no va tras from.",
      "Incorrecto: \"become\" no va tras from.",
      "Opción correcta: from becoming.",
      "Incorrecto: \"became\" no va tras from."
    ],
    "tip_es": "Regla de la guía oficial: \"I don't want to discourage you from + gerund (-ing)\".",
    "ref": null,
    "human_rule": "preposición + -ing.",
    "trigger_anchor": "from ➔ -ing",
    "spanglish_trap": "Usar infinitivo tras preposición.",
    "workplace_usage": {
      "scenario": "Constructive Coaching",
      "en": "We don't want to discourage our engineers from experimenting in the sandbox environment.",
      "es": "No queremos desanimar a nuestros ingenieros de experimentar en el entorno de pruebas (sandbox)."
    }
  },
  {
    "id": "it1-mod2-sec4-phrases-q4",
    "section": "UE",
    "objective": "UE4",
    "topic": "V06",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Complete the official workplace closing phrase:\n\"Please do not hesitate __________ a colleague to do their job.\"",
    "options": [
      "to asking",
      "asking",
      "in asking",
      "to ask"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"do not hesitate ______\": hesitate to + verbo.\n• Significado: hesitate to ask.\n• Descartas: to asking, asking e in asking son incorrectas.",
    "why_wrong": [
      "Incorrecto: \"to asking\" es incorrecto.",
      "Incorrecto: \"asking\" es incorrecto.",
      "Incorrecto: \"in asking\" es incorrecto.",
      "Opción correcta: hesitate to ask."
    ],
    "tip_es": "Fórmula fija oficial: \"Please do not hesitate to + [verb in base form]\".",
    "ref": null,
    "human_rule": "hesitate + to + verbo.",
    "trigger_anchor": "do not hesitate ➔ to ask",
    "spanglish_trap": "Poner -ing tras to.",
    "workplace_usage": {
      "scenario": "Inter-team Collaboration",
      "en": "Please do not hesitate to reach out to the security operations center if you detect abnormal traffic.",
      "es": "Por favor, no dude en comunicarse con el centro de operaciones de seguridad si detecta tráfico anormal."
    }
  }
];
