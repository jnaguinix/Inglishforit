const { createQuestion } = require('./builder_helper.cjs');

/**
 * English for IT 1 - Module 5: Security Engineer (Incorporate Goals and Objectives)
 * 57 items total covering sections 5.1 to 5.5
 */
const items_mod5 = [
  // =========================================================
  // 5.1 The Imperative Instruction in Security Runbooks (10 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod5-sec1-ex1-q1',
    sub: '5.1.3',
    num: 1,
    stem: 'Complete the policy directive: "__________ that we are not to download applications from untrusted sources."',
    correct: 'Keep in mind',
    distractors: ['Keep it simple', 'Keep me posted', 'Keeping mind'],
    why_correct: '"Keep in mind that..." (tengan en cuenta / recuerden que) es la locución imperativa estándar para recordar una directriz o prohibición de seguridad institucional.',
    why_wrong_map: {
      'Keep it simple': 'Significa manténlo simple; no encaja con la advertencia de no descargar apps.',
      'Keep me posted': 'Significa mantenme informado de los avances.',
      'Keeping mind': 'Forma en gerundio; los imperativos directos usan la forma base del verbo.'
    },
    tip: 'Directriz imperativa institucional: [Keep in mind that...].',
    topic: 'G10',
    objective: 'UE1',
    human_rule: 'Tengan en cuenta que no debemos descargar aplicaciones de fuentes no confiables.',
    trigger: '__________ that we are not to download applications -> Keep in mind',
    trap: 'Confundir las distintas colocaciones con "keep" (keep in mind vs keep it simple vs keep me posted).',
    usage: { scenario: 'Políticas de Seguridad en Endpoint', en: 'Keep in mind that we are not to download applications from untrusted sources.', es: 'Tengan en cuenta que no debemos descargar aplicaciones de fuentes no confiables.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec1-ex1-q2',
    sub: '5.1.3',
    num: 2,
    stem: 'Complete the communication tip: "Make sure to __________ when explaining complex security policies to non-technical users."',
    correct: 'Keep it simple',
    distractors: ['Keep in mind', 'Keep me posted', 'Keep simple it'],
    why_correct: '"Keep it simple" (hazlo simple / sin tecnicismos innecesarios) es la recomendación canónica de Cisco al traducir conceptos de seguridad a clientes o empleados no técnicos.',
    why_wrong_map: {
      'Keep in mind': 'Exigiría una cláusula introducida por that o un sustantivo.',
      'Keep me posted': 'Significa mantenme al día de tu progreso.',
      'Keep simple it': 'Orden sintáctico incorrecto del pronombre objeto.'
    },
    tip: 'Comunicación con usuarios no técnicos: [Keep it simple].',
    topic: 'G10',
    objective: 'UE2',
    human_rule: 'Asegúrate de mantenerlo simple y claro: "Keep it simple".',
    trigger: 'Make sure to __________ when explaining security issues -> Keep it simple',
    trap: 'Invertir el orden diciendo "keep simple it".',
    usage: { scenario: 'Capacitación de Seguridad para Empleados', en: 'Make sure to keep it simple when explaining security issues to clients.', es: 'Asegúrate de mantenerlo simple al explicar problemas de seguridad a los clientes.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec1-ex1-q3',
    sub: '5.1.3',
    num: 3,
    stem: 'Complete the SOC procedure reminder: "__________ that we must block any suspicious network connections immediately."',
    correct: 'Keep in mind',
    distractors: ['Keep it simple', 'Keep me posted', 'Kept in mind'],
    why_correct: 'La directriz de cumplimiento que introduce una regla obligatoria con must es [Keep in mind that...].',
    why_wrong_map: {
      'Keep it simple': 'No introduce órdenes obligatorias complejas.',
      'Keep me posted': 'Petición de feedback individual, no mandato operativo.',
      'Kept in mind': 'Forma en pasado; los imperativos exigen infinitivo base.'
    },
    tip: 'Mandato operativo en runbooks: [Keep in mind that we must block...].',
    topic: 'G10',
    objective: 'UE1',
    human_rule: 'Recuerden que debemos bloquear cualquier conexión sospechosa de inmediato.',
    trigger: '__________ that we must block any suspicious operations -> Keep in mind',
    trap: 'Poner el verbo en pasado "Kept".',
    usage: { scenario: 'Runbook del Centro de Operaciones de Seguridad (SOC)', en: 'Keep in mind that we must block any suspicious operations immediately.', es: 'Tengan en cuenta que debemos bloquear cualquier operación sospechosa inmediatamente.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec1-ex1-q4',
    sub: '5.1.3',
    num: 4,
    stem: 'Complete the status request: "__________ on any progress you make with the new firewall configuration."',
    correct: 'Keep me posted',
    distractors: ['Keep in mind', 'Keep it simple', 'Keep you posted'],
    why_correct: '"Keep me posted" (mantenme informado / al tanto) es el modismo profesional para solicitar actualizaciones periódicas sobre el avance de una tarea técnica.',
    why_wrong_map: {
      'Keep in mind': 'Exigiría un hecho para recordar, no una solicitud de reporte de progreso.',
      'Keep it simple': 'No encaja con el seguimiento de un despliegue de firewall.',
      'Keep you posted': 'Invertiría el sentido (prometerías tú mantener al otro informado en vez de pedírselo a él).'
    },
    tip: 'Solicitud de actualizaciones periódicas: [Keep me posted on...].',
    topic: 'G10',
    objective: 'UE3',
    human_rule: '"Keep me posted" = Mantenme al tanto de tus progresos con el firewall.',
    trigger: '__________ on any progress you make with the new application -> Keep me posted',
    trap: 'Poner "Keep you posted" (eso se diría al prometer: "I\'ll keep you posted").',
    usage: { scenario: 'Coordinación entre Ingeniero Senior y Junior', en: 'Keep me posted on any progress you make with the new firewall.', es: 'Mantenme informado sobre cualquier avance que hagas con el nuevo firewall.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec1-ex2-q1',
    sub: '5.1.4',
    num: 1,
    stem: 'Complete the imperative password instruction: "__________ your password is a combination of upper and lower case letters, numbers and symbols."',
    correct: 'Make sure',
    distractors: ['Making sure', 'To make sure', 'Made sure'],
    why_correct: 'El modo imperativo para verificar o asegurar el cumplimiento de una regla técnica emplea la forma base: "Make sure (that)...".',
    why_wrong_map: {
      'Making sure': 'Gerundio; no puede funcionar como núcleo imperativo principal.',
      'To make sure': 'Infinitivo con to; no forma oraciones imperativas directas.',
      'Made sure': 'Forma de pasado.'
    },
    tip: 'Imperativo de verificación en políticas: [Make sure (that) + cláusula].',
    topic: 'G10',
    objective: 'UE1',
    human_rule: 'Asegúrate de que tu contraseña sea una combinación robusta: "Make sure".',
    trigger: '__________ your password is a combination of upper -> Make sure',
    trap: 'Usar "To make sure" creyendo que el infinitivo funciona como imperativo (vicio del español).',
    usage: { scenario: 'Política de Contraseñas IAM', en: 'Make sure your password is a combination of letters, numbers, and symbols.', es: 'Asegúrate de que tu contraseña sea una combinación de letras, números y símbolos.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec1-ex2-q2',
    sub: '5.1.4',
    num: 2,
    stem: 'Complete the security directive: "__________ voice activation on all your smart devices when handling confidential client meetings."',
    correct: 'Disable',
    distractors: ['Disabling', 'To disable', 'Disabled'],
    why_correct: 'Instrucción imperativa directa en forma base del verbo: "Disable voice activation...".',
    why_wrong_map: {
      'Disabling': 'Gerundio agramatical como instrucción directa.',
      'To disable': 'Infinitivo preposicional.',
      'Disabled': 'Forma pasada o adjetival.'
    },
    tip: 'Órdenes directas en guías de hardening: Verbo en forma base sin partículas ("Disable", "Configure", "Enable").',
    topic: 'G10',
    objective: 'UE1',
    human_rule: 'Deshabilita la activación por voz en todos tus dispositivos: "Disable voice activation".',
    trigger: '__________ voice activation on all your devices -> Disable',
    trap: 'Poner "To disable" por influencia del infinitivo imperativo del español ("deshabilitar la voz...").',
    usage: { scenario: 'Protocolo de Seguridad para Teletrabajo', en: 'Disable voice activation on all devices when handling confidential meetings.', es: 'Deshabilita la activación por voz en todos tus dispositivos al atender reuniones confidenciales.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec1-ex2-q3',
    sub: '5.1.4',
    num: 3,
    stem: 'Complete the negative security rule: "Never __________ applications from unknown or unverified sources."',
    correct: 'Download',
    distractors: ['Downloading', 'To download', 'Downloaded'],
    why_correct: 'El adverbio negativo "Never" al inicio de una orden imperativa va seguido de la forma base del verbo sin to: "Never download...".',
    why_wrong_map: {
      'Downloading': 'Gerundio agramatical tras Never en imperativo.',
      'To download': 'Never nunca se sigue de infinitivo con to en imperativo.',
      'Downloaded': 'Forma en pasado.'
    },
    tip: 'Imperativo negativo tajante: [Never + verbo en forma base].',
    topic: 'G10',
    objective: 'UE1',
    human_rule: 'Nunca descargues aplicaciones de fuentes desconocidas: "Never download...".',
    trigger: 'Never __________ applications from unknown sources -> Download',
    trap: 'Poner "to download" tras never.',
    usage: { scenario: 'Prevención de Malware y Ransomware', en: 'Never download applications from unknown sources.', es: 'Nunca descargues aplicaciones de fuentes desconocidas.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec1-ex2-q4',
    sub: '5.1.4',
    num: 4,
    stem: 'Complete the department-wide summon: "__________ the meeting tomorrow morning. We need the entire squad present."',
    correct: 'Everyone attend',
    distractors: ['Everyone attends', 'To attend everyone', 'Attending everyone'],
    why_correct: 'En el imperativo con sujeto explícito o indefinido ("everyone / somebody"), el verbo se mantiene en forma base (subjuntivo/imperativo puro sin -s de tercera persona): "Everyone attend the meeting...".',
    why_wrong_map: {
      'Everyone attends': 'Forma de presente indicativo descriptivo habitual, no un mandato imperativo dirigido al grupo.',
      'To attend everyone': 'Orden sintáctico agramatical.',
      'Attending everyone': 'Agramatical en inglés.'
    },
    tip: 'Regla especial B2: Imperativo con pronombre indefinido -> [Everyone / Somebody + verbo base SIN "-s"] ("Everyone attend!").',
    topic: 'G10',
    objective: 'UE1',
    human_rule: '¡Que asistan todos a la reunión mañana! (orden imperativa grupal) = "Everyone attend".',
    trigger: '__________ the meeting tomorrow morning. We need the whole -> Everyone attend',
    trap: 'Añadir -s ("Everyone attends") confundiéndolo con una oración descriptiva de presente simple.',
    usage: { scenario: 'Convocatoria Obligatoria de Emergencia', en: 'Everyone attend the meeting tomorrow morning; we need the whole team.', es: 'Asistan todos a la reunión de mañana por la mañana; necesitamos a todo el equipo.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec1-ex2-q5',
    sub: '5.1.4',
    num: 5,
    stem: 'Complete the urgent command in the NOC: "__________ the phone! It has been ringing for two minutes."',
    correct: 'Someone answer',
    distractors: ['Someone answers', 'To answer someone', 'Answering someone'],
    why_correct: 'Siguiendo la misma regla de imperativo con sujeto deíctico indefinido: [Someone + verbo base "answer" sin -s]: "Someone answer the phone!".',
    why_wrong_map: {
      'Someone answers': 'Indicativo descriptivo ("alguien responde"), no una orden de actuar dirigida a la sala.',
      'To answer someone': 'Agramatical.',
      'Answering someone': 'Agramatical.'
    },
    tip: 'Imperativo con sujeto: [Someone answer the phone!]. Verbo siempre en forma base.',
    topic: 'G10',
    objective: 'UE1',
    human_rule: '¡Que alguien conteste el teléfono! = "Someone answer the phone!".',
    trigger: '__________ the phone! It has been ringing -> Someone answer',
    trap: 'Añadir -s ("Someone answers") olvidando que es una orden imperativa.',
    usage: { scenario: 'Sala de Control del NOC', en: 'Someone answer the phone!', es: '¡Que alguien conteste el teléfono!' }
  }),
  createQuestion({
    id: 'it1-mod5-sec1-ex2-q6',
    sub: '5.1.4',
    num: 6,
    stem: 'Complete the negative command in the hardening guide: "__________ default passwords on production switches."',
    correct: 'Do not use',
    distractors: ['Not use', 'No use', 'To not use'],
    why_correct: 'La negación del imperativo formal estándar se construye con el auxiliar "Do not" (o "Don\'t") seguido de la forma base: "Do not use default passwords...".',
    why_wrong_map: {
      'Not use': 'Falta el auxiliar do; agramatical en inglés estándar.',
      'No use': 'Calco del español ("no usar"), totalmente agramatical.',
      'To not use': 'Split infinitive agramatical como cláusula imperativa.'
    },
    tip: 'Imperativo negativo estándar: [Do not / Don’t + verbo base]. ¡Jamás "No use" ni "Not use"!',
    topic: 'G10',
    objective: 'UE1',
    human_rule: 'No utilicen contraseñas por defecto: "Do not use default passwords".',
    trigger: '__________ default passwords -> Do not use',
    trap: 'Escribir *"No use"* o *"Not use"* por interferencia directa del español.',
    usage: { scenario: 'Guía de Configuración Segura de Switches', en: 'Do not use default passwords on production devices.', es: 'No utilice contraseñas predeterminadas en dispositivos de producción.' }
  }),

  // =========================================================
  // 5.2 Adverbs of Possibility & Certainty (11 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod5-sec2-ex1-q1',
    sub: '5.2.3',
    num: 1,
    stem: 'Select the adverb expressing unconfirmed claim: "__________ this application is safe to download, but I am not completely convinced."',
    correct: 'Supposedly',
    distractors: ['Definitely', 'Certainly', 'Undoubtedly'],
    why_correct: '"Supposedly" (supuestamente / según dicen) refleja que una afirmación carece de verificación empírica o genera desconfianza ("but I am not completely convinced").',
    why_wrong_map: {
      'Definitely': 'Expresa certeza rotunda, lo que choca frontalmente con la desconfianza ("not completely convinced").',
      'Certainly': 'Expresa certidumbre total.',
      'Undoubtedly': 'Significa sin lugar a dudas; contradictorio.'
    },
    tip: 'Afirmación sin verificar o bajo sospecha: [Supposedly] (supuestamente).',
    topic: 'G11',
    objective: 'UE5',
    human_rule: 'Supuestamente esta aplicación es segura de descargar, pero no estoy convencido: "Supposedly".',
    trigger: '__________ this application is safe ... but I am not completely convinced -> Supposedly',
    trap: 'Elegir adverbios de certeza ("Definitely") ignorando el contraste de desconfianza.',
    usage: { scenario: 'Evaluación de Software de Terceros', en: 'Supposedly this application is safe to download, but we must sandbox it first.', es: 'Supuestamente esta aplicación es segura de descargar, pero primero debemos aislarla en un sandbox.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec2-ex1-q2',
    sub: '5.2.3',
    num: 2,
    stem: 'Complete the statement of confirmed commitment: "They confirmed today that they will __________ block any suspicious traffic."',
    correct: 'Definitely',
    distractors: ['Supposedly', 'Plausibly', 'Hesitantly'],
    why_correct: 'El hecho de que ya fue confirmado oficialmente ("They confirmed today...") exige un adverbio de certeza categórica: "will definitely block".',
    why_wrong_map: {
      'Supposedly': 'Sembraría duda sobre una confirmación oficial ya dada.',
      'Plausibly': 'Indica que es verosímil pero incierto.',
      'Hesitantly': 'Significa con vacilación o dudas.'
    },
    tip: 'Certeza tras confirmación oficial: [will definitely block].',
    topic: 'G11',
    objective: 'UE3',
    human_rule: 'Confirmaron que definitivamente bloquearán el tráfico sospechoso: "definitely".',
    trigger: 'They confirmed today that they will __________ block -> Definitely',
    trap: 'Poner "supposedly" a pesar de que la oración dice "They confirmed today".',
    usage: { scenario: 'Configuración de Reglas WAF', en: 'The SOC confirmed they will definitely block the rogue IP ranges.', es: 'El SOC confirmó que definitivamente bloquearán los rangos de IP maliciosos.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec2-ex1-q3',
    sub: '5.2.3',
    num: 3,
    stem: 'Complete the statement of firm personal determination: "I am __________ not going to download anything from an untrusted email attachment."',
    correct: 'Certainly',
    distractors: ['Supposedly', 'Questionably', 'Doubtfully'],
    why_correct: '"I am certainly not going to..." expresa una resolución personal firme y segura de rechazo ante un vector de ataque de phishing.',
    why_wrong_map: {
      'Supposedly': 'Significaría que en teoría no lo va a hacer pero no es seguro.',
      'Questionably': 'Significa de manera dudosa.',
      'Doubtfully': 'Significa dudosamente.'
    },
    tip: 'Rechazo rotundo de conducta de riesgo: [am certainly not going to download].',
    topic: 'G11',
    objective: 'UE5',
    human_rule: 'Ciertamente / Desde luego no voy a descargar nada de un remitente no confiable: "Certainly".',
    trigger: 'I am __________ not going to download anything from an untrusted -> Certainly',
    trap: 'Confundir certidumbre personal con conjetura.',
    usage: { scenario: 'Concienciación Anti-Phishing', en: 'I am certainly not going to open that suspicious executable.', es: 'Ciertamente no voy a abrir ese ejecutable sospechoso.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec2-ex1-q4',
    sub: '5.2.3',
    num: 4,
    stem: 'Complete the skeptical conclusion: "They say that this vulnerability won\'t happen again, __________ ."',
    correct: 'Supposedly',
    distractors: ['Definitely', 'Certainly', 'Always'],
    why_correct: 'Al final de la frase precedida de coma tras "They say that...", "supposedly" denota escepticismo técnico sobre las promesas del proveedor.',
    why_wrong_map: {
      'Definitely': 'Contradeciría el tono irónico/escéptico que separa la promesa con coma al final.',
      'Certainly': 'No se coloca aislado al final para expresar escepticismo.',
      'Always': 'Adverbio de frecuencia agramatical al final en esta construcción.'
    },
    tip: 'Escepticismo técnico al final de frase: [, supposedly] (supuestamente / en teoría).',
    topic: 'G11',
    objective: 'UE5',
    human_rule: 'Dicen que esto no volverá a pasar, supuestamente: ", supposedly".',
    trigger: 'They say that this won\'t happen again, __________ -> Supposedly',
    trap: 'Asumir que "supposedly" solo puede ir al inicio de la oración.',
    usage: { scenario: 'Evaluación de Parches de Proveedores', en: 'The vendor claims the exploit is patched, supposedly.', es: 'El proveedor afirma que el exploit está parcheado, supuestamente.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec2-ex1-q5',
    sub: '5.2.3',
    num: 5,
    stem: 'Complete the strong recommendation: "They should __________ be careful when disclosing sensitive telemetry data."',
    correct: 'Definitely',
    distractors: ['Supposedly', 'Hesitantly', 'Reluctantly'],
    why_correct: '"They should definitely be careful..." intensifica la recomendación modal con certeza categórica sobre la prudencia obligatoria.',
    why_wrong_map: {
      'Supposedly': 'Expresaría que se supone que deben ser cuidadosos pero no se sabe si lo son.',
      'Hesitantly': 'Significa vacilantemente.',
      'Reluctantly': 'Significa a regañadientes.'
    },
    tip: 'Reforzar una recomendación de seguridad: [should definitely be careful].',
    topic: 'G11',
    objective: 'UE1',
    human_rule: 'Definitivamente deberían tener cuidado al divulgar información sensible: "definitely".',
    trigger: 'They should __________ be careful when disclosing -> Definitely',
    trap: 'No distinguir un intensificador de certidumbre ("definitely") de un adverbio de conjetura ("supposedly").',
    usage: { scenario: 'Políticas de Confidencialidad y NDA', en: 'Engineers should definitely be careful when disclosing log traces.', es: 'Los ingenieros definitivamente deberían tener cuidado al divulgar trazas de registros.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec2-ex1-q6',
    sub: '5.2.3',
    num: 6,
    stem: 'Complete the strategic claim: "A clear Information Security Policy will __________ demonstrate our compliance to enterprise auditors."',
    correct: 'Certainly',
    distractors: ['Supposedly', 'Doubtfully', 'Unreliably'],
    why_correct: '"Certainly demonstrate" expresa la convicción certera de que una política bien redactada convencerá positivamente a los auditores.',
    why_wrong_map: {
      'Supposedly': 'Debilitaría el argumento sugiriendo que la política podría fracasar.',
      'Doubtfully': 'Expresa duda.',
      'Unreliably': 'Significa de forma no fiable.'
    },
    tip: 'Convencimiento positivo en auditorías: [will certainly demonstrate].',
    topic: 'G11',
    objective: 'UE5',
    human_rule: 'Sin duda / Ciertamente demostrará nuestro cumplimiento ante los auditores: "certainly".',
    trigger: 'A clear IS Policy will __________ demonstrate -> Certainly',
    trap: 'Elegir adverbios que introduzcan dudas en la capacidad probatoria de la política.',
    usage: { scenario: 'Auditoría SOC2 / ISO 27001', en: 'A clear Information Security Policy will certainly demonstrate our compliance.', es: 'Una política de seguridad de la información clara sin duda demostrará nuestro cumplimiento.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec2-ex2-q1',
    sub: '5.2.4',
    num: 1,
    stem: 'Select the appropriate response: "Person A: Should the policy be sent to both external and internal stakeholders? Person B:"',
    correct: 'It is definitely necessary to send the policy to all relevant parties.',
    distractors: [
      'It is supposedly forbidden to distribute any documents.',
      'We certainly cannot disclose whether we have a policy.',
      'Perhaps we might delete the policy file entirely.'
    ],
    why_correct: 'En el diálogo oficial de Cisco 5.2, la persona B confirma de forma categórica la necesidad de difundir la política ("It is definitely necessary to send the policy...").',
    why_wrong_map: {
      'It is supposedly forbidden to distribute any documents.': 'Falso; las políticas públicas se deben comunicar.',
      'We certainly cannot disclose whether we have a policy.': 'Falsa confidencialidad absurda.',
      'Perhaps we might delete the policy file entirely.': 'Acción destructiva irracional.'
    },
    tip: 'Confirmación de obligatoriedad: [It is definitely necessary to...].',
    topic: 'G11',
    objective: 'UE3',
    human_rule: 'Definitivamente es necesario enviar la política a todas las partes interesadas.',
    trigger: 'Should the policy be sent to both external and internal -> definitely necessary to send the policy',
    trap: 'Elegir respuestas que nieguen la necesidad de comunicar las políticas.',
    usage: { scenario: 'Difusión de Políticas Corporativas', en: 'It is definitely necessary to distribute the security guidelines to external partners.', es: 'Definitivamente es necesario distribuir las directrices de seguridad a los socios externos.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec2-ex2-q2',
    sub: '5.2.4',
    num: 2,
    stem: 'Select the appropriate response: "Person A: How detailed should our security policy be? Person B:"',
    correct: 'The policy is supposedly meant to be extensive, but readable.',
    distractors: [
      'The policy definitely must not exceed one single sentence.',
      'We certainly do not write policies in written English.',
      'The policy is supposedly encrypted so no employee can read it.'
    ],
    why_correct: 'La persona B refleja el criterio establecido de que la política en teoría debe ser exhaustiva pero accesible: "is supposedly meant to be extensive, but readable".',
    why_wrong_map: {
      'The policy definitely must not exceed one single sentence.': 'Una política de seguridad empresarial no puede tener una sola frase.',
      'We certainly do not write policies in written English.': 'Falso técnico.',
      'The policy is supposedly encrypted so no employee can read it.': 'Absurdo; los empleados deben poder leer y comprender la política.'
    },
    tip: 'Criterio de redacción de políticas: Exhaustiva pero legible ("extensive, but readable").',
    topic: 'G11',
    objective: 'UE5',
    human_rule: 'En teoría la política debe ser exhaustiva, pero al mismo tiempo fácil de leer.',
    trigger: 'How detailed should our security policy be? -> supposedly meant to be extensive',
    trap: 'Confundir extensión con ininteligibilidad.',
    usage: { scenario: 'Redacción de Manuales de Seguridad', en: 'The policy is supposedly meant to be extensive, but readable.', es: 'En teoría, se supone que la política debe ser exhaustiva, pero legible.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec2-ex2-q3',
    sub: '5.2.4',
    num: 3,
    stem: 'Select the security protocol response: "Person A: What should you do if you receive a call claiming to be your bank? Person B:"',
    correct: 'Definitely verify the call before acting on any instructions.',
    distractors: [
      'Supposedly tell them your passwords immediately.',
      'Certainly transfer company funds without asking questions.',
      'Perhaps disconnect the telephone company wires.'
    ],
    why_correct: 'La regla de oro contra ataques de vishing (ingeniería social telefónica) es verificar siempre la identidad del interlocutor a través de canales oficiales ("Definitely verify the call before acting...").',
    why_wrong_map: {
      'Supposedly tell them your passwords immediately.': 'Vulneración de seguridad crítica.',
      'Certainly transfer company funds without asking questions.': 'Víctima de estafa BEC (Business Email/Phone Compromise).',
      'Perhaps disconnect the telephone company wires.': 'Acción física absurda.'
    },
    tip: 'Protocolo anti-vishing: [Definitely verify the call before acting]. Jamás proporcionar datos.',
    topic: 'V04',
    objective: 'UE2',
    human_rule: 'Definitivamente verifica la llamada antes de realizar cualquier instrucción.',
    trigger: 'call claiming to be your bank -> Definitely verify the call before acting',
    trap: 'Confiar en el identificador de llamadas (caller ID spoofing).',
    usage: { scenario: 'Prevención de Ingeniería Social (Vishing)', en: 'Definitely verify the call before providing sensitive credentials.', es: 'Definitivamente verifique la llamada antes de proporcionar credenciales sensibles.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec2-ex2-q4',
    sub: '5.2.4',
    num: 4,
    stem: 'Select the appropriate response: "Person A: What does a well-prepared and understandable IS Policy demonstrate? Person B:"',
    correct: 'A well-prepared policy certainly demonstrates our security commitment.',
    distractors: [
      'It supposedly indicates that our firewalls are turned off.',
      'It definitely proves that we do not care about data privacy.',
      'It certainly causes the server cooling fans to fail.'
    ],
    why_correct: 'Una política sólida y clara comunica con certidumbre el compromiso institucional con la seguridad ("certainly demonstrates our security commitment").',
    why_wrong_map: {
      'It supposedly indicates that our firewalls are turned off.': 'Distractor contradictorio.',
      'It definitely proves that we do not care about data privacy.': 'Lo contrario al propósito de la política.',
      'It certainly causes the server cooling fans to fail.': 'Distractor de hardware sin sentido.'
    },
    tip: 'Valor probatorio de la política: [certainly demonstrates our security commitment].',
    topic: 'V05',
    objective: 'UE5',
    human_rule: 'Una política bien preparada ciertamente demuestra nuestro compromiso con la seguridad.',
    trigger: 'What does a well-prepared and understandable IS Policy demonstrate -> certainly demonstrates our security commitment',
    trap: 'Subestimar el valor comercial y de confianza de una política de seguridad.',
    usage: { scenario: 'Auditorías de Terceros y Ventas B2B', en: 'A well-prepared policy certainly demonstrates our security maturity.', es: 'Una política bien preparada sin duda demuestra nuestra madurez en seguridad.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec2-ex2-q5',
    sub: '5.2.4',
    num: 5,
    stem: 'Select the sound advice: "Person A: I received a call from someone claiming to be technical support asking me to install remote software. Person B:"',
    correct: 'Be careful and don\'t download apps from unverified callers.',
    distractors: [
      'Definitely grant them root administrative credentials immediately.',
      'Supposedly share your one-time SMS verification code.',
      'Certainly disable the endpoint antivirus so they can work faster.'
    ],
    why_correct: 'Ante una solicitud no solicitada de acceso remoto, la respuesta de seguridad es extremar la precaución y rechazar la descarga de aplicaciones ("Be careful and don\'t download apps...").',
    why_wrong_map: {
      'Definitely grant them root administrative credentials immediately.': 'Vulneración total del sistema.',
      'Supposedly share your one-time SMS verification code.': 'Robo de cuentas mediante suplantación de 2FA.',
      'Certainly disable the endpoint antivirus so they can work faster.': 'Desarmar las defensas del endpoint.'
    },
    tip: 'Regla de oro de ingeniería social: Jamás instalar software por indicación de una llamada no solicitada.',
    topic: 'V04',
    objective: 'UE2',
    human_rule: 'Ten cuidado y no descargues aplicaciones de llamadas no verificadas.',
    trigger: 'asking me to download an application -> Be careful and don\'t download apps',
    trap: 'Ceder ante la falsa urgencia o autoridad impostada del llamante.',
    usage: { scenario: 'Protección contra Ataques de Vishing Helpdesk', en: 'Be careful and don\'t download remote control software from unverified callers.', es: 'Tenga cuidado y no descargue software de control remoto de personas que llamen sin verificar.' }
  }),

  // =========================================================
  // 5.3 Listening: Fraudulent Calls & Social Engineering (13 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod5-sec3-ex1-q1',
    sub: '5.3.1',
    num: 1,
    stem: 'Select the verb for: "To promise formally that something will be done, provided, or guaranteed to happen."',
    correct: 'Guarantee',
    distractors: ['Clarify', 'Detect', 'Urge'],
    why_correct: '"Guarantee" (garantizar) significa asegurar formalmente un resultado o nivel de servicio.',
    why_wrong_map: {
      'Clarify': 'Aclarar o explicar algo.',
      'Detect': 'Detectar o descubrir una anomalía.',
      'Urge': 'Instar o apremiar a alguien.'
    },
    tip: 'Glosario oficial Cisco: [Guarantee] = to promise something will be done.',
    topic: 'V04',
    objective: 'UE1',
    human_rule: 'Guarantee = garantizar o prometer formalmente que algo se cumplirá.',
    trigger: 'To promise something will be done or happen -> Guarantee',
    trap: 'Confundir guarantee con verify.',
    usage: { scenario: 'Acuerdos de Nivel de Servicio (SLA)', en: 'We cannot guarantee 100 percent uptime during physical datacenter migrations.', es: 'No podemos garantizar un 100 por ciento de tiempo de actividad durante migraciones físicas de datacenter.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex1-q2',
    sub: '5.3.1',
    num: 2,
    stem: 'Select the verb for: "To make something clear, unambiguous, or easier to understand."',
    correct: 'Clarify',
    distractors: ['Verify', 'Assure', 'Classify'],
    why_correct: '"Clarify" (aclarar / clarificar) se define en Cisco como "to make something clear".',
    why_wrong_map: {
      'Verify': 'Comprobar la veracidad o exactitud de un dato.',
      'Assure': 'Dar seguridad o certeza a una persona con convicción.',
      'Classify': 'Clasificar u ordenar por categorías.'
    },
    tip: 'Glosario oficial: [Clarify] = to make something clear.',
    topic: 'V04',
    objective: 'UE1',
    human_rule: 'Clarify = aclarar o hacer que algo sea fácil de entender.',
    trigger: 'To make something clear -> Clarify',
    trap: 'Confundir clarify con verify.',
    usage: { scenario: 'Petición de Aclaración Técnica', en: 'Could you please clarify the third requirement of the specification?', es: '¿Podría por favor aclarar el tercer requisito de la especificación?' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex1-q3',
    sub: '5.3.1',
    num: 3,
    stem: 'Select the security verb for: "To check or prove that something is true, correct, or compliant with rules."',
    correct: 'Verify',
    distractors: ['Clarify', 'Block', 'Urge'],
    why_correct: '"Verify" (verificar) es la acción técnica de contrastar evidencias para constatar la autenticidad de un hecho o identidad.',
    why_wrong_map: {
      'Clarify': 'Hacer algo comprensible.',
      'Block': 'Impedir el paso o ejecución.',
      'Urge': 'Apremiar a actuar.'
    },
    tip: 'Ciberseguridad y Zero Trust: [Verify] = check that something is true or correct (Verify, never trust).',
    topic: 'V04',
    objective: 'UE1',
    human_rule: 'Verify = verificar o comprobar que algo es auténtico y correcto.',
    trigger: 'check that something is true or correct -> Verify',
    trap: 'Asumir erróneamente que verify significa lo mismo que assure.',
    usage: { scenario: 'Autenticación Zero Trust', en: 'Always verify identity through an independent out-of-band channel.', es: 'Siempre verifique la identidad a través de un canal fuera de banda independiente.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex1-q4',
    sub: '5.3.1',
    num: 4,
    stem: 'Select the verb for: "To tell someone with a high level of confidence that something is safe, resolved, or true in order to remove doubt."',
    correct: 'Assure',
    distractors: ['Guarantee', 'Classify', 'Detect'],
    why_correct: '"Assure" (asegurar / dar tranquilidad) se dirige a una persona para disipar temores ("to tell someone with confidence").',
    why_wrong_map: {
      'Guarantee': 'Garantizar contractualmente un resultado objetivo.',
      'Classify': 'Categorizar datos.',
      'Detect': 'Descubrir una amenaza oculta.'
    },
    tip: 'Diferencia clave B2: [Assure a person] (tranquilizar a alguien) vs. [Ensure an outcome] (asegurar un resultado).',
    topic: 'V04',
    objective: 'UE1',
    human_rule: 'Assure = dar seguridad o tranquilidad a una persona con firmeza.',
    trigger: 'tell someone with a high level of confidence -> Assure',
    trap: 'Confundir "assure" (tranquilizar a alguien) con "ensure" o "insure".',
    usage: { scenario: 'Atención a Clientes Alarmados', en: 'I can assure you that our backup systems remained completely uncompromised.', es: 'Puedo asegurarle que nuestros sistemas de respaldo permanecieron completamente a salvo.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex1-q5',
    sub: '5.3.1',
    num: 5,
    stem: 'Select the data governance verb for: "To divide or categorize information into groups according to their sensitivity or type."',
    correct: 'Classify',
    distractors: ['Clarify', 'Block', 'Carry out'],
    why_correct: '"Classify" (clasificar) es el proceso formal de etiquetar activos de información según su nivel de confidencialidad (Público, Interno, Confidencial, Secreto).',
    why_wrong_map: {
      'Clarify': 'Hacer algo claro.',
      'Block': 'Detener tráfico.',
      'Carry out': 'Ejecutar un procedimiento.'
    },
    tip: 'Clasificación de datos en InfoSec: [Classify] = divide things into groups according to type.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Classify = clasificar los datos según su nivel de confidencialidad.',
    trigger: 'divide things into groups according to their type -> Classify',
    trap: 'Confundir classify con clarify por similitud fonética.',
    usage: { scenario: 'Gobierno de Datos GDPR', en: 'All repositories must classify data containing personal identifying information.', es: 'Todos los repositorios deben clasificar los datos que contengan información de identificación personal.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex1-q6',
    sub: '5.3.1',
    num: 6,
    stem: 'Select the defensive action verb for: "To stop an operation, network connection, or transmission from continuing or entering."',
    correct: 'Block',
    distractors: ['Detect', 'Assure', 'Urge'],
    why_correct: '"Block" (bloquear) es la acción de filtrado en firewalls o ACLs para impedir el paso de tráfico no autorizado.',
    why_wrong_map: {
      'Detect': 'Identificar la amenaza sin necesariamente detenerla.',
      'Assure': 'Tranquilizar a un usuario.',
      'Urge': 'Instar a una acción.'
    },
    tip: 'Acción de firewall: [Block] = stop something from happening or entering.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Block = bloquear el tráfico malicioso.',
    trigger: 'stop something from happening -> Block',
    trap: 'Confundir detectar (identificar) con bloquear (detener).',
    usage: { scenario: 'Reglas de Firewall', en: 'The intrusion prevention system will automatically block IP addresses that trigger brute-force alerts.', es: 'El sistema de prevención de intrusiones bloqueará automáticamente las direcciones IP que activen alertas de fuerza bruta.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex1-q7',
    sub: '5.3.1',
    num: 7,
    stem: 'Select the verb for: "To encourage or push someone strongly and urgently to take a specific action."',
    correct: 'Urge',
    distractors: ['Guarantee', 'Verify', 'Classify'],
    why_correct: '"Urge" (urgir / instar encarecidamente) se define como "to encourage someone strongly to do something", muy común en alertas de seguridad ("We urge users to patch...").',
    why_wrong_map: {
      'Guarantee': 'Prometer un resultado.',
      'Verify': 'Comprobar autenticidad.',
      'Classify': 'Categorizar datos.'
    },
    tip: 'Avisos de parches urgentes: [We urge administrators to install the patch immediately].',
    topic: 'V04',
    objective: 'UE1',
    human_rule: 'Urge = instar o urgir a alguien con insistencia a que haga algo.',
    trigger: 'encourage someone strongly to do something -> Urge',
    trap: 'Confundir "urge" como sustantivo de impulso con el verbo de advertencia institucional.',
    usage: { scenario: 'Boletín de Seguridad CISA', en: 'Security agencies urge all organizations to patch the vulnerability.', es: 'Las agencias de seguridad instan a todas las organizaciones a aplicar el parche a la vulnerabilidad.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex1-q8',
    sub: '5.3.1',
    num: 8,
    stem: 'Select the security verb for: "To discover, notice, or identify something hidden, anomalous, or not obvious."',
    correct: 'Detect',
    distractors: ['Block', 'Clarify', 'Assure'],
    why_correct: '"Detect" (detectar) es la capacidad de monitoreo de telemetría para descubrir actividad maliciosa oculta en la red o endpoints.',
    why_wrong_map: {
      'Block': 'Detener la acción.',
      'Clarify': 'Explicar.',
      'Assure': 'Dar tranquilidad.'
    },
    tip: 'Monitoreo de seguridad: [Detect] = notice something hidden or not obvious.',
    topic: 'V04',
    objective: 'UE1',
    human_rule: 'Detect = detectar o descubrir algo anómalo u oculto.',
    trigger: 'notice something hidden or not obvious -> Detect',
    trap: 'Confundir detección con mitigación o bloqueo.',
    usage: { scenario: 'Monitoreo SIEM/EDR', en: 'Our EDR sensors detect zero-day exploit payloads before execution.', es: 'Nuestros sensores EDR detectan cargas útiles de exploits de día cero antes de su ejecución.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex1-q9',
    sub: '5.3.1',
    num: 9,
    stem: 'Select the phrasal verb for: "To perform, execute, or complete an assigned task, audit, or test."',
    correct: 'Carry out',
    distractors: ['Pick up', 'Get on', 'Look into'],
    why_correct: '"Carry out" (llevar a cabo / realizar) es el phrasal verb formal estándar para la ejecución de pruebas de penetración, auditorías o mantenimientos.',
    why_wrong_map: {
      'Pick up': 'Contestar una llamada.',
      'Get on': 'Ponerse con algo inmediatamente.',
      'Look into': 'Investigar un asunto.'
    },
    tip: 'Ejecución de procedimientos: [Carry out an audit / test / task].',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Carry out = llevar a cabo o ejecutar una tarea o auditoría.',
    trigger: 'perform a task -> Carry out',
    trap: 'Confundir carry out con carry on (que significa continuar).',
    usage: { scenario: 'Pentesting Programado', en: 'The security team will carry out a thorough vulnerability assessment tonight.', es: 'El equipo de seguridad llevará a cabo una evaluación exhaustiva de vulnerabilidades esta noche.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex2-q1',
    sub: '5.3.3',
    num: 1,
    stem: 'In the social engineering audio call, what pretext does the male caller use to initiate contact?',
    correct: 'He claims there has been suspicious unauthorized activity on the woman’s account.',
    distractors: [
      'He offers her a free trip to a cybersecurity conference in London.',
      'He calls to survey her about her favorite cloud providers.',
      'He claims she has won a brand-new iPhone 15 Pro.'
    ],
    why_correct: 'El atacante utiliza el pretexto clásico de fraude y pánico bancario: alerta de actividad sospechosa en la cuenta para manipular a la víctima ("suspicious activity on the account").',
    why_wrong_map: {
      'He offers her a free trip to a cybersecurity conference in London.': 'Falso pretexto.',
      'He calls to survey her about her favorite cloud providers.': 'Falso.',
      'He claims she has won a brand-new iPhone 15 Pro.': 'Falso sorteo de phishing no ocurrido en este audio.'
    },
    tip: 'Técnica de ingeniería social (Pretexting): Simular una alerta bancaria urgente de fraude para forzar una reacción irreflexiva.',
    topic: 'V04',
    objective: 'L1',
    human_rule: 'El estafador llama fingiendo que hay actividad sospechosa en la cuenta bancaria de la mujer.',
    trigger: 'man is calling because -> suspicious activity on the account',
    trap: 'Creer que el atacante era un empleado legítimo del banco.',
    usage: { scenario: 'Entrenamiento Anti-Vishing', en: 'Scammers frequently create fake urgency by claiming suspicious account activity.', es: 'Los estafadores suelen crear una falsa urgencia alegando actividad sospechosa en la cuenta.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex2-q2',
    sub: '5.3.3',
    num: 2,
    stem: 'What does the woman clarify regarding her banking transactions earlier that day?',
    correct: 'She had made a normal legitimate online payment today.',
    distractors: [
      'She had lost her credit card while traveling on the subway.',
      'She had wired fifty thousand dollars to an offshore account.',
      'She had not used her bank card in over six months.'
    ],
    why_correct: 'La mujer explica que solo realizó un pago en línea habitual y seguro ese día, lo que no justifica la alarma del atacante ("Has made a normal online payment today").',
    why_wrong_map: {
      'She had lost her credit card while traveling on the subway.': 'Falso; tiene su tarjeta consigo.',
      'She had wired fifty thousand dollars to an offshore account.': 'Distractor exagerado.',
      'She had not used her bank card in over six months.': 'Contradice la transacción realizada hoy.'
    },
    tip: 'Detalle de la llamada: La usuaria confirma haber hecho un pago cotidiano normal hoy.',
    topic: 'V04',
    objective: 'L2',
    human_rule: 'La mujer aclara que hoy realizó un pago en línea perfectamente normal.',
    trigger: 'The woman -> Has made a normal online payment today',
    trap: 'Asumir que la mujer había sido hackeada previamente en su pago normal.',
    usage: { scenario: 'Investigación de Vishing', en: 'The customer verified that her earlier online payment was legitimate.', es: 'La clienta verificó que su pago en línea anterior era legítimo.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex2-q3',
    sub: '5.3.3',
    num: 3,
    stem: 'What technical claim does the fraudulent caller fabricate to convince the woman to install software?',
    correct: 'He claims the issue is caused by a dangerous virus on her mobile phone.',
    distractors: [
      'He claims the banking mainframe has run out of physical disk space.',
      'He claims international submarine cables have been severed.',
      'He claims her phone screen resolution is too low for banking.'
    ],
    why_correct: 'El atacante busca asustar a la víctima afirmando que su móvil tiene un virus y que necesita descargar urgentemente una herramienta de soporte ("issue is due to a virus on her phone").',
    why_wrong_map: {
      'He claims the banking mainframe has run out of physical disk space.': 'Falso argumento.',
      'He claims international submarine cables have been severed.': 'Falso argumento de telecomunicaciones.',
      'He claims her phone screen resolution is too low for banking.': 'Distractor absurdo.'
    },
    tip: 'Pretexto técnico de ataque: Afirmar que el dispositivo tiene un virus para obligarla a instalar un troyano de acceso remoto.',
    topic: 'V04',
    objective: 'L3',
    human_rule: 'El atacante miente diciendo que el fallo se debe a un virus en su teléfono móvil.',
    trigger: 'man says that -> issue is due to a virus on her phone',
    trap: 'No reconocer el engaño de la falsa infección de virus.',
    usage: { scenario: 'Señales de Alerta de Ingeniería Social', en: 'Callers claiming your device is infected are almost certainly attempting vishing.', es: 'Las personas que llaman afirmando que su dispositivo está infectado casi con certeza intentan vishing.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec3-ex2-q4',
    sub: '5.3.3',
    num: 4,
    stem: 'What official security procedure does the woman correctly remember from her bank\'s guidance?',
    correct: 'The bank explicitly advised her to authenticate all requests exclusively through the official banking app.',
    distractors: [
      'The bank told her to share passwords over unrecorded phone calls.',
      'The bank advised her to email her PIN code to the caller.',
      'The bank recommended disabling two-factor authentication permanently.'
    ],
    why_correct: 'La mujer frustra el ataque recordando que su entidad bancaria nunca pide datos por teléfono y que toda autenticación debe gestionarse dentro de la app oficial ("advised her to authenticate all requests through the official app").',
    why_wrong_map: {
      'The bank told her to share passwords over unrecorded phone calls.': 'Completamente opuesto a las normas bancarias.',
      'The bank advised her to email her PIN code to the caller.': 'Infracción grave de seguridad.',
      'The bank recommended disabling two-factor authentication permanently.': 'Absurdo.'
    },
    tip: 'Defensa efectiva del usuario: Desconfiar y validar únicamente a través de la aplicación oficial.',
    topic: 'V04',
    objective: 'L4',
    human_rule: 'La mujer recuerda que el banco le aconsejó autenticar siempre a través de la app oficial.',
    trigger: 'woman says that -> bank advised her to authenticate through the app',
    trap: 'Pensar que la mujer cayó en la trampa en lugar de defenderse correctamente.',
    usage: { scenario: 'Respuesta Defensiva del Usuario', en: 'Authenticating actions only inside the official banking app stops vishing attacks.', es: 'Autenticar acciones únicamente dentro de la aplicación bancaria oficial frena los ataques de vishing.' }
  }),

  // =========================================================
  // 5.4 Adverbs of Probability & Expectation (10 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod5-sec4-ex1-q1',
    sub: '5.4.3',
    num: 1,
    stem: 'Complete the disbelief question: "__________ you thought to verify the caller\'s credentials before authorizing the fund transfer?"',
    correct: 'Surely',
    distractors: ['Obviously', 'Likely', 'Barely'],
    why_correct: '"Surely" al inicio de una pregunta expresa asombro o una fuerte expectativa de que algo elemental debió haberse hecho: "Surely you thought to verify...?".',
    why_wrong_map: {
      'Obviously': 'Declara un hecho evidente, no encabeza una pregunta de asombro con inversión de expectativa.',
      'Likely': 'Adjetivo que requiere estructura con to be ("It is likely that..."), no puede abrir directamente la frase.',
      'Barely': 'Significa apenas, cambiaría el sentido a una negación casi total.'
    },
    tip: 'Expresión de asombro / expectativa casi segura: [Surely + oración...?] ("¿Seguro que pensaste en...? / ¡No me digas que no lo verificaste!").',
    topic: 'G11',
    objective: 'UE2',
    human_rule: '"Surely you thought to verify..." = Seguro que se te ocurrió verificar la llamada, ¿no?',
    trigger: '__________ you thought to verify the call before -> Surely',
    trap: 'Poner "Obviously" cuando la oración es una pregunta de incredulidad.',
    usage: { scenario: 'Investigación de Fraude BEC', en: 'Surely you verified the account number before executing the wire transfer?', es: '¿Seguro que verificaste el número de cuenta antes de ejecutar la transferencia?' }
  }),
  createQuestion({
    id: 'it1-mod5-sec4-ex1-q2',
    sub: '5.4.3',
    num: 2,
    stem: 'Complete the statement of manifest fact: "There was __________ a need for us to update our password policy following the audit findings."',
    correct: 'Obviously',
    distractors: ['Surely', 'Likely', 'Barely'],
    why_correct: '"There was obviously a need..." destaca que la necesidad de actualizar la política era indiscutible y patente para todos a la luz de la auditoría.',
    why_wrong_map: {
      'Surely': 'Expresa deseo o suposición esperanzada, no una evidencia histórica ya demostrada.',
      'Likely': 'Adjetivo que exigiría construcción distinta ("It was likely that there was a need").',
      'Barely': 'Significaría que casi no había necesidad, lo que contradice el informe de auditoría.'
    },
    tip: 'Evidencia indiscutible en reportes: [There was obviously a need...].',
    topic: 'G11',
    objective: 'UE3',
    human_rule: 'Obviamente / Evidentemente había una necesidad de actualizar nuestra política: "Obviously".',
    trigger: 'There was __________ a need for us to update -> Obviously',
    trap: 'Usar "Surely" en afirmaciones declarativas de hechos patentes.',
    usage: { scenario: 'Actualización de Políticas Post-Auditoría', en: 'There was obviously a need for us to update our password policy.', es: 'Evidentemente había una necesidad de que actualizáramos nuestra política de contraseñas.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec4-ex1-q3',
    sub: '5.4.3',
    num: 3,
    stem: 'Complete the self-evident transition: "__________ , we knew that it was not necessary to distribute unencrypted copies of the user database."',
    correct: 'Obviously',
    distractors: ['Surely', 'Likely', 'Hardly'],
    why_correct: '"Obviously," abre la oración con coma para subrayar un principio de seguridad evidente y fuera de discusión.',
    why_wrong_map: {
      'Surely': 'Se usa con entonación de duda o apelación al interlocutor, no como conector oracional de certeza patente.',
      'Likely': 'Es un adjetivo y no puede encabezar una oración seguido de coma como adverbio discursivo.',
      'Hardly': 'Significa apenas; agramatical e incoherente aquí.'
    },
    tip: 'Conector de evidencia patente: [Obviously, + oración].',
    topic: 'G11',
    objective: 'UE3',
    human_rule: 'Obviamente, sabíamos que no era necesario distribuir copias sin cifrar: "Obviously".',
    trigger: '__________ , we knew that it was not necessary -> Obviously',
    trap: 'Intentar usar el adjetivo "Likely" como conector inicial seguido de coma.',
    usage: { scenario: 'Protección de Bases de Datos', en: 'Obviously, we knew that it was not necessary to distribute unencrypted copies.', es: 'Obviamente, sabíamos que no era necesario distribuir copias sin cifrar.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec4-ex1-q4',
    sub: '5.4.3',
    num: 4,
    stem: 'Complete the probability construction: "It is most __________ that they will distribute a summary of the security audit before the end of the sprint."',
    correct: 'Likely',
    distractors: ['Surely', 'Obviously', 'Definitely'],
    why_correct: 'La estructura impersonal de alta probabilidad es [It is most / more LIKELY that + cláusula]. "Likely" es el adjetivo graduado por "most".',
    why_wrong_map: {
      'Surely': 'Adverbio; no encaja en la estructura adjetival tras "It is most".',
      'Obviously': 'Adverbio; no se gradúa con "most" en esta estructura copulativa impersonal.',
      'Definitely': 'Adverbio de certeza que no se usa tras "It is most".'
    },
    tip: 'Estructura impersonal de probabilidad: [It is (most / more) LIKELY that...].',
    topic: 'G11',
    objective: 'UE1',
    human_rule: 'Es sumamente probable que distribuyan un resumen: "It is most likely that...".',
    trigger: 'It is most __________ that they will distribute -> Likely',
    trap: 'Poner adverbios terminados en -ly ("Surely", "Obviously") tras "It is most".',
    usage: { scenario: 'Roadmap y Planificación de Tareas', en: 'It is most likely that they will distribute a summary of the audit.', es: 'Es muy probable que distribuyan un resumen de la auditoría de seguridad.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec4-ex1-q5',
    sub: '5.4.3',
    num: 5,
    stem: 'Complete the comparative likelihood: "It is more __________ that we will buy a template to create the IS policy rather than write it from scratch."',
    correct: 'Likely',
    distractors: ['Surely', 'Obviously', 'Probably'],
    why_correct: 'El comparativo de probabilidad es [It is more LIKELY that...]. "Likely" funciona como adjetivo de posibilidad.',
    why_wrong_map: {
      'Surely': 'Adverbio incompatible con "It is more...".',
      'Obviously': 'Adverbio.',
      'Probably': 'Adverbio; no se combina como "more probably" en la construcción impersonal copulativa "It is more... that".'
    },
    tip: 'Comparativo de probabilidad: [It is more likely that... rather than...].',
    topic: 'G11',
    objective: 'UE1',
    human_rule: 'Es más probable que compremos una plantilla que escribirla de cero: "more likely".',
    trigger: 'It is more __________ that we will buy a template -> Likely',
    trap: 'Poner "more probably" por calco del español "más probablemente".',
    usage: { scenario: 'Adopción de Plantillas de Cumplimiento', en: 'It is more likely that we will buy a template to create the policy.', es: 'Es más probable que compremos una plantilla para crear la política.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec4-ex1-q6',
    sub: '5.4.3',
    num: 6,
    stem: 'Complete the incredulous question: "__________ you don\'t think that I could have made those unauthorized purchases?"',
    correct: 'Surely',
    distractors: ['Obviously', 'Likely', 'Hardly'],
    why_correct: '"Surely you don\'t think...?" es la colocación idiomática estándar para apelar a la sensatez del interlocutor ante una acusación injusta.',
    why_wrong_map: {
      'Obviously': 'Significaría que es obvio que el otro no lo piensa, anulando el valor interrogativo de defensa.',
      'Likely': 'Adjetivo agramatical como apertura oracional.',
      'Hardly': 'Agramatical en este orden de pregunta.'
    },
    tip: 'Apelación de incredulidad: [Surely you don\'t think that...?] ("¿Seguro que no creerás que...?").',
    topic: 'G11',
    objective: 'UE2',
    human_rule: '¡Seguro que no pensarás que yo pude haber hecho esas compras!: "Surely you don\'t think...".',
    trigger: '__________ you don\'t think that I could have made -> Surely',
    trap: 'Traducir literalmente "seguramente" por "probably" o usar "obviously".',
    usage: { scenario: 'Defensa ante Sospechas en Investigación de Fraude', en: 'Surely you don’t think that I could have made those purchases?', es: '¿Seguro que no crees que yo podría haber hecho esas compras?' }
  }),
  createQuestion({
    id: 'it1-mod5-sec4-ex2-q1',
    sub: '5.4.4',
    num: 1,
    stem: 'Select the appropriate answer: "Person A: Do you think that we will need to update the IS policy this quarter? Person B:"',
    correct: 'It is most likely that we will need to update it.',
    distractors: [
      'It is surely necessary that we delete the policy.',
      'Obviously we must never update security documents.',
      'It is barely true that policies exist.'
    ],
    why_correct: 'En el diálogo oficial de Cisco 5.4, la persona B proyecta una alta probabilidad técnica: "It is most likely that we will need to update it".',
    why_wrong_map: {
      'It is surely necessary that we delete the policy.': 'Acción destructiva absurda.',
      'Obviously we must never update security documents.': 'Opuesto al mantenimiento continuo de seguridad.',
      'It is barely true that policies exist.': 'Afirmación sin sentido.'
    },
    tip: 'Proyección de probabilidad formal: [It is most likely that we will need to...].',
    topic: 'G11',
    objective: 'UE3',
    human_rule: 'Es muy probable que necesitemos actualizarla.',
    trigger: 'Do you think that we will need to update the IS policy -> It is most likely that we will need to update it',
    trap: 'Descartar la estructura adjetival "most likely".',
    usage: { scenario: 'Calendario de Revisiones de Políticas', en: 'It is most likely that we will need to update the policy before the audit.', es: 'Es muy probable que debamos actualizar la política antes de la auditoría.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec4-ex2-q2',
    sub: '5.4.4',
    num: 2,
    stem: 'Select the sound technical advice: "Person A: How can I prevent these types of credential harvesting attacks from happening to my device? Person B:"',
    correct: 'Obviously, protect your device from viruses and never disclose your MFA tokens.',
    distractors: [
      'Surely, allow remote callers to disable your password manager.',
      'Likely, write your credentials on public sticky notes.',
      'Hardly, disconnect your screen during normal office hours.'
    ],
    why_correct: 'La recomendación utiliza "Obviously," para enunciar la regla fundamental de higiene cibernética: proteger el endpoint de malware y no compartir jamás tokens MFA.',
    why_wrong_map: {
      'Surely, allow remote callers to disable your password manager.': 'Vulneración flagrante de seguridad.',
      'Likely, write your credentials on public sticky notes.': 'Infracción grave de la política de clean desk.',
      'Hardly, disconnect your screen during normal office hours.': 'Distractor absurdo.'
    },
    tip: 'Higiene de seguridad elemental: [Obviously, protect your device and never disclose MFA].',
    topic: 'V04',
    objective: 'UE2',
    human_rule: 'Obviamente, protege tu dispositivo de virus y nunca compartas tus tokens MFA.',
    trigger: 'How can I prevent these types of attacks -> Obviously, protect your device from viruses',
    trap: 'Elegir respuestas que comprometan las contraseñas.',
    usage: { scenario: 'Mesa de Ayuda de Seguridad', en: 'Obviously, protect your device from malware and never share MFA codes.', es: 'Obviamente, proteja su dispositivo contra virus y nunca comparta sus códigos MFA.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec4-ex2-q3',
    sub: '5.4.4',
    num: 3,
    stem: 'Select the appropriate reaction: "Person A: I downloaded the executable while I was speaking to an unknown caller claiming to be Microsoft. Person B:"',
    correct: 'Surely you checked if it was fraudulent before running it?',
    distractors: [
      'Obviously you should give them full domain admin access.',
      'Likely you can send them our encrypted database passwords.',
      'Surely you know that Microsoft always calls customers directly.'
    ],
    why_correct: 'La reacción lógica ante un descuido flagrante es una apelación de incredulidad ("Surely you checked if it was fraudulent...?").',
    why_wrong_map: {
      'Obviously you should give them full domain admin access.': 'Infracción grave.',
      'Likely you can send them our encrypted database passwords.': 'Falso de seguridad.',
      'Surely you know that Microsoft always calls customers directly.': 'Falso; Microsoft NUNCA llama a usuarios individuales por sorpresa para soporte.'
    },
    tip: 'Alerta de estafa clásica: Las grandes empresas tecnológicas nunca llaman de improviso para solucionar virus.',
    topic: 'V04',
    objective: 'UE2',
    human_rule: 'Seguro que comprobaste si era fraudulento antes de ejecutarlo, ¿no?',
    trigger: 'I downloaded the app while I was speaking to someone -> Surely you checked if it was fraudulent',
    trap: 'Creer que las llamadas de soporte espontáneas pueden ser legítimas.',
    usage: { scenario: 'Respuesta ante Sospecha de Compromiso', en: 'Surely you checked if it was fraudulent before downloading?', es: '¿Seguro que comprobaste si era fraudulento antes de descargarlo?' }
  }),
  createQuestion({
    id: 'it1-mod5-sec4-ex2-q4',
    sub: '5.4.4',
    num: 4,
    stem: 'Select the appropriate answer: "Person A: What are the commercial benefits of making our security posture public? Person B:"',
    correct: 'It obviously demonstrates our security operational maturity to enterprise clients.',
    distractors: [
      'It surely guarantees that hackers will never target our infrastructure.',
      'It likely eliminates the need to maintain firewall rules.',
      'It obviously proves that we do not have any internal confidential data.'
    ],
    why_correct: 'Publicar la postura de seguridad (ej. Security Trust Center) demuestra de forma evidente la madurez y solvencia operativa ante clientes corporativos ("obviously demonstrates our security operational maturity").',
    why_wrong_map: {
      'It surely guarantees that hackers will never target our infrastructure.': 'Ningún documento público impide que los atacantes intenten vulnerar sistemas.',
      'It likely eliminates the need to maintain firewall rules.': 'Absurdo; los controles técnicos siguen siendo obligatorios.',
      'It obviously proves that we do not have any internal confidential data.': 'Falso; todas las empresas manejan datos.'
    },
    tip: 'Beneficio de transparencia en ciberseguridad: Demuestra madurez y fiabilidad comercial.',
    topic: 'V05',
    objective: 'UE5',
    human_rule: 'Evidentemente demuestra nuestra madurez operativa en seguridad ante clientes corporativos.',
    trigger: 'benefits of making our IS policy public -> obviously demonstrates our security',
    trap: 'Creer que una política pública "garantiza" no recibir ciberataques.',
    usage: { scenario: 'Página de Confianza y Cumplimiento (Trust Portal)', en: 'Public policies obviously demonstrate our security operational maturity.', es: 'Las políticas públicas evidentemente demuestran nuestra madurez operativa en seguridad.' }
  }),

  // =========================================================
  // 5.5 Reading: Information Security Policy (13 items)
  // =========================================================
  createQuestion({
    id: 'it1-mod5-sec5-ex1-q1',
    sub: '5.5.1',
    num: 1,
    stem: 'Select the technical synonym for: "A standard set of rules."',
    correct: 'A common set of rules',
    distractors: ['A legacy protocol', 'An unwritten guideline', 'An obsolete convention'],
    why_correct: 'En el glosario de políticas de Cisco, "A standard set of rules" se define textualmente como "a common set of rules" aplicable de manera homogénea a toda la plantilla.',
    why_wrong_map: {
      'A legacy protocol': 'Protocolo antiguo obsoleto.',
      'An unwritten guideline': 'Pauta no escrita; las políticas siempre están documentadas.',
      'An obsolete convention': 'Convención obsoleta.'
    },
    tip: 'Glosario oficial Cisco: [A standard set of rules] = [A common set of rules].',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Conjunto estándar de reglas = conjunto común de normas para todos.',
    trigger: 'A standard set of rules -> A common set of rules',
    trap: 'Confundir estándar con estático u obsoleto.',
    usage: { scenario: 'Definición de Políticas InfoSec', en: 'All subsidiaries must adhere to a common set of security rules.', es: 'Todas las filiales deben adherirse a un conjunto común de reglas de seguridad.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex1-q2',
    sub: '5.5.1',
    num: 2,
    stem: 'Select the synonym for: "The layout of a document."',
    correct: 'The design and structure of a document',
    distractors: ['The encryption key of a file', 'The digital watermark of a page', 'The network latency of transmission'],
    why_correct: '"Layout" se refiere al diseño visual, maquetación y organización estructural del documento de políticas.',
    why_wrong_map: {
      'The encryption key of a file': 'Clave criptográfica, nada que ver con layout.',
      'The digital watermark of a page': 'Marca de agua.',
      'The network latency of transmission': 'Métrica de telecomunicaciones.'
    },
    tip: 'Documentación técnica: [Layout] = design and visual organization of a document.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Layout = diseño, disposición y estructura del documento.',
    trigger: 'The layout of a document -> The design of a document',
    trap: 'Pensar que layout es un término exclusivo de diseño web de páginas frontend.',
    usage: { scenario: 'Maquetación de Políticas', en: 'A clear document layout ensures employees can quickly find the password guidelines.', es: 'Un diseño de documento claro garantiza que los empleados puedan encontrar rápidamente las pautas de contraseñas.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex1-q3',
    sub: '5.5.1',
    num: 3,
    stem: 'Select the synonym for: "The policy should incorporate the following points."',
    correct: 'The policy should include the following points',
    distractors: [
      'The policy should delete the following points',
      'The policy should contradict the following points',
      'The policy should encrypt the following points'
    ],
    why_correct: '"Incorporate" en redacción de políticas significa incluir o integrar formalmente cláusulas específicas ("should include the following points").',
    why_wrong_map: {
      'The policy should delete the following points': 'Opuesto a incorporar.',
      'The policy should contradict the following points': 'Incoherente.',
      'The policy should encrypt the following points': 'Confunde inclusión textual con cifrado de datos.'
    },
    tip: 'Vocabulario formal de políticas: [Incorporate] = include / integrate.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Incorporar = incluir formalmente dentro de la política.',
    trigger: 'policy should incorporate the following points -> policy should include',
    trap: 'No reconocer que "incorporate" significa simplemente "incluir".',
    usage: { scenario: 'Actualización Regulatoria', en: 'The policy must incorporate the new GDPR data breach notification requirements.', es: 'La política debe incorporar los nuevos requisitos de notificación de brechas de datos del RGPD.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex1-q4',
    sub: '5.5.1',
    num: 4,
    stem: 'Select the definition for: "The policy can be compact."',
    correct: 'The policy may be brief and to the point',
    distractors: [
      'The policy must be compressed using ZIP software',
      'The policy must contain thousands of pages',
      'The policy must be invisible to normal users'
    ],
    why_correct: '"Compact" (conciso / compacto) en documentación significa breve, directo y enfocado a lo esencial sin divagaciones ("brief and to the point").',
    why_wrong_map: {
      'The policy must be compressed using ZIP software': 'Confunde concisión textual con compresión de archivos ZIP.',
      'The policy must contain thousands of pages': 'Opuesto a compacto.',
      'The policy must be invisible to normal users': 'Absurdo.'
    },
    tip: 'Redacción efectiva: [Compact] = brief, concise, and to the point.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Compacto = breve, claro y directo al grano.',
    trigger: 'policy can be compact -> brief and to the point',
    trap: 'Interpretar "compact" como compresión digital de archivos.',
    usage: { scenario: 'Pautas de Redacción de Políticas', en: 'A compact security policy is easier for employees to read and remember.', es: 'Una política de seguridad compacta es más fácil de leer y recordar para los empleados.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex1-q5',
    sub: '5.5.1',
    num: 5,
    stem: 'Select the synonym for: "The strategy is outlined in the document."',
    correct: 'The strategy is summarized in the document',
    distractors: [
      'The strategy is completely hidden from view',
      'The strategy has been permanently rejected',
      'The strategy is written in hexadecimal code'
    ],
    why_correct: '"Outlined" (esbozada / resumida / descrita a grandes rasgos) significa que los puntos centrales de la estrategia se sintetizan de forma estructurada ("summarized in the document").',
    why_wrong_map: {
      'The strategy is completely hidden from view': 'Opuesto a resumido y explicado.',
      'The strategy has been permanently rejected': 'Falso.',
      'The strategy is written in hexadecimal code': 'Distractor absurdo.'
    },
    tip: 'Estructuración de textos: [Outlined] = summarized / presented in summary form.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Outlined = resumida o descrita en sus puntos principales.',
    trigger: 'strategy is outlined in the document -> strategy is summarized',
    trap: 'Confundir outline (esbozar/resumir) con siluetear gráficamente.',
    usage: { scenario: 'Resumen Ejecutivo de Ciberseguridad', en: 'The incident response strategy is outlined in section four.', es: 'La estrategia de respuesta a incidentes está resumida en la sección cuatro.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex1-q6',
    sub: '5.5.1',
    num: 6,
    stem: 'Select the synonym for: "The policy is definitely extensive."',
    correct: 'The policy certainly covers every operational area.',
    distractors: [
      'The policy is only one paragraph long.',
      'The policy is strictly restricted to senior executives.',
      'The policy has been deleted from cloud storage.'
    ],
    why_correct: '"Extensive" (exhaustiva / de amplio alcance) significa que abarca con profundidad todos los ámbitos operativos y técnicos pertinentes ("covers every operational area").',
    why_wrong_map: {
      'The policy is only one paragraph long.': 'Opuesto a exhaustivo.',
      'The policy is strictly restricted to senior executives.': 'No guarda relación con el alcance del contenido.',
      'The policy has been deleted from cloud storage.': 'Acción destructiva.'
    },
    tip: 'Alcance de políticas: [Extensive] = comprehensive, covers every operational area.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Extensa / exhaustiva = cubre ciertamente todas las áreas operativas.',
    trigger: 'policy is definitely extensive -> certainly covers every area',
    trap: 'Creer que "extensive" significa innecesariamente aburrido.',
    usage: { scenario: 'Marco de Seguridad Corporativo', en: 'The extensive policy covers cloud infrastructure, remote work, and physical access.', es: 'La exhaustiva política cubre infraestructura en la nube, trabajo remoto y acceso físico.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex1-q7',
    sub: '5.5.1',
    num: 7,
    stem: 'Select the definition for: "The recipient of the email notification."',
    correct: 'The person who receives the email',
    distractors: [
      'The mail transfer agent server daemon',
      'The physical fiber optic transceiver',
      'The hacker attempting credential stuffing'
    ],
    why_correct: '"The recipient" (el destinatario) es la persona u organismo que recibe la comunicación enviada ("the person who receives the email").',
    why_wrong_map: {
      'The mail transfer agent server daemon': 'MTA es el software de servidor (Postfix, Sendmail), no el destinatario humano.',
      'The physical fiber optic transceiver': 'Componente de hardware.',
      'The hacker attempting credential stuffing': 'Ciberdelincuente ajeno al destinatario legítimo.'
    },
    tip: 'Glosario de mensajería: [Recipient] = person who receives the message.',
    topic: 'V05',
    objective: 'UE1',
    human_rule: 'Recipient = el destinatario / la persona que recibe el correo.',
    trigger: 'The recipient of the email -> The person who receives the email',
    trap: 'Confundir recipient con sender (remitente).',
    usage: { scenario: 'Comunicaciones de Seguridad Masivas', en: 'Ensure that the recipient list contains only authenticated staff.', es: 'Asegúrese de que la lista de destinatarios contenga únicamente personal autenticado.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex2-q1',
    sub: '5.5.3',
    num: 1,
    stem: 'According to the reading passage, how can operating in different industry markets affect an organization\'s Information Security Policy?',
    correct: 'Different regulatory markets can determine the required length, complexity, and scope of the policy.',
    distractors: [
      'Markets determine the physical color of the datacenter server racks.',
      'Different markets require companies to abolish password controls entirely.',
      'Markets force all companies to use the identical software vendor.'
    ],
    why_correct: 'El texto explica que sectores fuertemente regulados (finanzas, salud) imponen normativas estrictas (PCI-DSS, HIPAA) que definen la extensión y complejidad de la política ("Determine the length and scope of the Information Security Policy").',
    why_wrong_map: {
      'Markets determine the physical color of the datacenter server racks.': 'Distractor absurdo de pintura de racks.',
      'Markets require companies to abolish password controls entirely.': 'Completamente opuesto a la seguridad.',
      'Markets force all companies to use the identical software vendor.': 'Monopolio falso no mencionado en el texto.'
    },
    tip: 'Impacto del mercado en políticas: Las regulaciones sectoriales determinan la profundidad y extensión de la política.',
    topic: 'V05',
    objective: 'R1',
    human_rule: 'Los diferentes mercados y regulaciones determinan la longitud y exigencia de la política de seguridad.',
    trigger: 'different markets can -> Determine the length of the Information Security Policy',
    trap: 'Creer que una misma política genérica sirve idéntica para una fintech y para una panadería.',
    usage: { scenario: 'Cumplimiento Normativo por Industria', en: 'Operating in healthcare markets requires a much more extensive compliance policy.', es: 'Operar en mercados de la salud requiere una política de cumplimiento mucho más exhaustiva.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex2-q2',
    sub: '5.5.3',
    num: 2,
    stem: 'When creating an effective security policy, what valuable source of insight does the text state companies frequently incorporate?',
    correct: 'Information and findings from audits conducted by external cybersecurity assessors.',
    distractors: [
      'Anonymous comments left on social media forums.',
      'Unverified code snippets copied from deprecated bulletin boards.',
      'Promotional marketing brochures from hardware retail stores.'
    ],
    why_correct: 'El texto resalta que las empresas utilizan las recomendaciones y hallazgos de auditorías externas especializadas para blindar sus procedimientos ("Information from audits conducted by external specialists").',
    why_wrong_map: {
      'Anonymous comments left on social media forums.': 'Fuente no confiable.',
      'Unverified code snippets copied from deprecated bulletin boards.': 'Práctica peligrosa.',
      'Promotional marketing brochures from hardware retail stores.': 'Material comercial ajeno a la auditoría de riesgos.'
    },
    tip: 'Insumo de creación de políticas: Informes y hallazgos de auditorías externas independientes.',
    topic: 'V05',
    objective: 'R2',
    human_rule: 'Las empresas incorporan información de auditorías realizadas por especialistas externos.',
    trigger: 'companies frequently utilize -> Information from audits conducted by external',
    trap: 'Pensar que las políticas se redactan sin consultar auditorías previas.',
    usage: { scenario: 'Mejora Continua de Políticas InfoSec', en: 'We updated our access controls based on findings from external security audits.', es: 'Actualizamos nuestros controles de acceso basándonos en los hallazgos de auditorías de seguridad externas.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex2-q3',
    sub: '5.5.3',
    num: 3,
    stem: 'According to the reading passage, what foundational element does an Information Security Policy typically mandate?',
    correct: 'Clear baseline protocols and responsibilities regarding data handling and system access.',
    distractors: [
      'Mandatory free lunches for all software developers on Fridays.',
      'Guaranteed promotion to executive management within three months.',
      'Prohibition of all keyboard shortcuts inside IDEs.'
    ],
    why_correct: 'El núcleo de una política de seguridad es fijar responsabilidades claras, protocolos mínimos de acceso y normas de tratamiento de datos confidenciales.',
    why_wrong_map: {
      'Mandatory free lunches for all software developers on Fridays.': 'Distractor humorístico de beneficios laborales.',
      'Guaranteed promotion to executive management within three months.': 'Distractor de RRHH.',
      'Prohibition of all keyboard shortcuts inside IDEs.': 'Absurdo.'
    },
    tip: 'Contenido esencial de la política: Protocolos base de acceso y custodia de la información.',
    topic: 'V05',
    objective: 'R3',
    human_rule: 'La política define los protocolos básicos y las responsabilidades sobre los datos y sistemas.',
    trigger: 'policy usually includes -> baseline protocols and responsibilities',
    trap: 'Confundir políticas de seguridad de la información con políticas de recursos humanos.',
    usage: { scenario: 'Gobernanza de Seguridad', en: 'The policy outlines baseline responsibilities for every role in the engineering organization.', es: 'La política describe las responsabilidades básicas para cada función en la organización de ingeniería.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex2-q4',
    sub: '5.5.3',
    num: 4,
    stem: 'What does the text state regarding employee compliance with the Information Security Policy?',
    correct: 'Compliance is mandatory for all personnel, and ignorance of the policy is not an acceptable defense.',
    distractors: [
      'Compliance is entirely optional during summer months.',
      'Compliance applies only to junior engineers, not executives.',
      'Employees can choose to ignore policies if their code is fast.'
    ],
    why_correct: 'Las políticas de seguridad corporativas son de obligado cumplimiento universal en toda la empresa: nadie está exento.',
    why_wrong_map: {
      'Compliance is entirely optional during summer months.': 'La seguridad opera 24/7/365.',
      'Compliance applies only to junior engineers, not executives.': 'Los directivos son los primeros obligados a cumplir y dar ejemplo.',
      'Employees can choose to ignore policies if their code is fast.': 'La velocidad nunca justifica saltarse la seguridad.'
    },
    tip: 'Carácter vinculante: El cumplimiento es estrictamente obligatorio para todo el personal sin excepciones.',
    topic: 'V05',
    objective: 'R4',
    human_rule: 'El cumplimiento de la política es obligatorio para todos los empleados de la organización.',
    trigger: 'compliance with the IS Policy -> Mandatory for all personnel',
    trap: 'Creer que los puestos técnicos senior o directivos pueden ignorar las directrices de seguridad.',
    usage: { scenario: 'Contrato Laboral y Cláusulas InfoSec', en: 'Compliance with our Information Security Policy is mandatory for all staff and contractors.', es: 'El cumplimiento de nuestra Política de Seguridad de la Información es obligatorio para todo el personal y contratistas.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex2-q5',
    sub: '5.5.3',
    num: 5,
    stem: 'What hazard does the text warn about when policies are written with excessive academic jargon and complexity?',
    correct: 'Employees will struggle to understand them and will inevitably bypass security controls to get work done.',
    distractors: [
      'Complex policies cause server CPUs to overheat physically.',
      'Jargon immediately deletes all git commit histories.',
      'Employees will automatically learn assembly language programming.'
    ],
    why_correct: 'Una política excesivamente compleja o incomprensible fracasa en la práctica: los empleados la ignoran o buscan atajos inseguros para poder entregar su trabajo.',
    why_wrong_map: {
      'Complex policies cause server CPUs to overheat physically.': 'Físicamente absurdo.',
      'Jargon immediately deletes all git commit histories.': 'Distractor técnico sin sentido.',
      'Employees will automatically learn assembly language programming.': 'Distractor humorístico.'
    },
    tip: 'Riesgo de políticas complejas: La fricción incomprensible empuja a los usuarios a saltarse los controles ("shadow IT").',
    topic: 'V05',
    objective: 'R4',
    human_rule: 'Si la política es muy complicada, la gente no la entenderá y se saltará las normas para poder trabajar.',
    trigger: 'warns that over-complicated policies -> bypass security controls because they cannot understand',
    trap: 'Confundir rigor técnico con redacción deliberadamente confusa.',
    usage: { scenario: 'Diseño de Procesos de Seguridad Usables', en: 'Unreadable policies cause employees to circumvent controls, increasing vulnerability.', es: 'Las políticas ilegibles provocan que los empleados eludan los controles, lo que aumenta la vulnerabilidad.' }
  }),
  createQuestion({
    id: 'it1-mod5-sec5-ex2-q6',
    sub: '5.5.3',
    num: 6,
    stem: 'What major commercial advantage does the text identify for companies that publicly publish their security policies?',
    correct: 'It makes it evident to customers that the company has focused significant resources on safeguarding their data.',
    distractors: [
      'It grants the company permanent immunity from all civil lawsuits.',
      'It forces all competing firms out of the marketplace immediately.',
      'It allows the company to operate without firewalls.'
    ],
    why_correct: 'El texto concluye que hacer pública la postura de seguridad genera confianza comercial evidente al demostrar una inversión seria en la protección de los datos de los usuarios ("It is evident that the company has focused resources on security").',
    why_wrong_map: {
      'It grants the company permanent immunity from all civil lawsuits.': 'Ningún documento confiere inmunidad judicial.',
      'It forces all competing firms out of the marketplace immediately.': 'Monopolio falso.',
      'It allows the company to operate without firewalls.': 'Absurdo.'
    },
    tip: 'Ventaja comercial de la transparencia: Demuestra a los clientes que se invierte en proteger su información.',
    topic: 'V05',
    objective: 'R5',
    human_rule: 'Publicar la política evidencia ante los clientes que la empresa se preocupa e invierte en proteger sus datos.',
    trigger: 'benefits of publicly sharing information -> evident that the company has focused resources',
    trap: 'Pensar que la seguridad solo es un centro de costos en vez de un diferenciador competitivo.',
    usage: { scenario: 'Página de Privacidad y Cumplimiento', en: 'Publishing our security overview makes it evident that we prioritize data protection.', es: 'Publicar nuestra descripción general de seguridad hace evidente que priorizamos la protección de datos.' }
  })
];

module.exports = { items_mod5 };
