import fs from 'fs';
import path from 'path';
import { SEED_QUESTIONS } from '../src/data/seedQuestions';
import { EXPANDED_PRACTICE_QUESTIONS } from '../src/data/practiceQuestionsExpanded';
import { Question } from '../src/types';

// Dictionary of enrichments for SEED_QUESTIONS
const SEED_ENRICHMENTS: Record<string, Partial<Question>> = {
  'ue-01': {
    trigger_scan: 'Ancla: "demands that" + [sujeto singular: "every systems administrator"] -> Activa subjuntivo mandatorio B2 con verbo en forma base pura (bare infinitive, sin "-s" y sin "will/to").',
    why_wrong: [
      'Trampa de certeza futura: "will enforce" choca con el mandato reglamentario exigido por "demands that".',
      '✅ Correcta. Verbo en forma base pura (bare infinitive) exigido por el subjuntivo formal mandatorio.',
      'Colisión sintáctica: tras la cláusula "demands that [sujeto]", insertar "to" es redundante y agramatical.',
      'Trampa de interferencia de L1: el hispanohablante tiende a conjugar con "-s" ("enforces") al ver "administrator", pero en subjuntivo rige forma base.'
    ]
  },
  'ue-02': {
    trigger_scan: 'Ancla: "Would you mind" (fórmula diplomática de cortesía) -> Exige obligatoriamente gerundio [VERBO + -ING].',
    why_wrong: [
      'Calco del español: en español decimos "¿Le importaría actualizar?", pero en inglés "mind" rechaza infinitivo con "to".',
      'Forma de pasado agramatical en una petición de cortesía directa al interlocutor.',
      '✅ Correcta. "refreshing" cumple con la regla obligatoria [Would you mind + -ing].',
      'Forma base desnuda sin "-ing" es agramatical tras "Would you mind".'
    ]
  },
  'ue-03': {
    trigger_scan: 'Ancla: "Under no circumstances" (adverbio restrictivo negativo al inicio) -> Exige INVERSIÓN tipo pregunta [Auxiliar + Sujeto + Verbo Base].',
    why_wrong: [
      'Orden oracional directo incorrecto: el adverbio negativo inicial obliga a invertir auxiliar y sujeto.',
      '✅ Correcta. Presenta inversión rigurosa [Auxiliar "should" + Sujeto "engineers" + Verbo base "disable"].',
      'Omisión de auxiliar modal: invierte el verbo léxico directamente, lo cual es agramatical en inglés moderno.',
      'Construcción rota sin concordancia modal.'
    ]
  },
  'ue-04': {
    trigger_scan: 'Ancla: "network telemetry" + "critical bottleneck" -> Phrasal verb para "aislar / señalar con precisión un fallo": "pin down".',
    why_wrong: [
      '✅ Correcta. "pin down" significa aislar o identificar con precisión quirúrgica la causa de un problema técnico.',
      '"pin up" significa clavar o fijar un papel en una pared o tablero.',
      '"pin across" es una combinación preposicional inexistente para diagnóstico técnico.',
      '"pin off" no es un phrasal verb reconocido en inglés estándar.'
    ]
  },
  'ue-05': {
    trigger_scan: 'Ancla de Cleft Sentence: "What surprised the incident commander ______ that..." -> Cláusula introducida por "What" en pasado requiere cópula en singular "was".',
    why_wrong: [
      'Falta de concordancia: aunque los firewalls sean plurales, el sujeto sintáctico es la cláusula nominal singular "What surprised...',
      '✅ Correcta. "was" concuerda en singular y tiempo pasado con la cláusula nominal "What surprised us".',
      'Tiempo presente rompe la secuencia temporal de la investigación postmortem iniciada con "surprised".',
      'Aspecto perfecto innecesario y redundante en oraciones hendidas (*cleft sentences*).'
    ]
  },
  'ue-06': {
    trigger_scan: 'Ancla Temporal: "By the time the failover sequence terminates" (referencia temporal límite en presente) -> Exige Future Perfect [will have + participio].',
    why_wrong: [
      'Futuro simple: no expresa que la sincronización habrá concluido con anterioridad al término de la secuencia.',
      '✅ Correcta. "will have synchronized" sitúa la acción completada antes del punto de referencia temporal "By the time".',
      'Presente perfecto: choca con la referencia futura introducida por "By the time".',
      'Condicional pasado: denota hipótesis irreal en vez de certeza operativa de un runbook.'
    ]
  },
  'ue-07': {
    trigger_scan: 'Ancla: "On no account" (locución restrictiva negativa inicial en SLAs) -> Exige inversión obligatoria [Auxiliar + Sujeto + Verbo].',
    why_wrong: [
      'Orden no invertido: "the provider will" viola la regla de inversión tras "On no account".',
      '✅ Correcta. Estructura invertida impecable [Auxiliar "will" + Sujeto "the provider" + Verbo "throttle"].',
      'Inversión incompleta o sin auxiliar adecuado.',
      'Forma en pasado rompe la promesa contractual del SLA.'
    ]
  },
  'ue-08': {
    trigger_scan: 'Ancla: "any contractor who encounters an unencrypted token" (sujeto singular de género desconocido) -> "they / their" (Singular They inclusivo formal en TI).',
    why_wrong: [
      '"he" asume género masculino excluyente; la documentación de TI moderna y OpenEDG exigen "they / their".',
      '✅ Correcta. "they" es el pronombre estándar de género neutro para referentes singulares indefinidos en políticas técnicas.',
      '"one" resulta arcaico y forzado como pronombre anafórico de "contractor".',
      '"it" deshumaniza al contratista (solo aplica a servidores o procesos).'
    ]
  },
  'ue-09': {
    trigger_scan: 'Ancla de Irritación/Fallo Recurrente: "is constantly / is always ______" -> Tiempos Continuos con "always/constantly" expresan quejas sobre fallos repetitivos.',
    why_wrong: [
      'Infinitivo con "to": agramatical tras el auxiliar "is always".',
      'Forma base pura: agramatical tras "is always".',
      '✅ Correcta. "failing" aporta el aspecto continuo irritativo [is always failing = "no deja de fallar"].',
      'Participio pasado: convertiría la frase en voz pasiva absurda ("el demonio es fallado").'
    ]
  },
  'ue-10': {
    trigger_scan: 'Ancla de Hipótesis vs Hecho: "Even ______ the cluster autoscales to 50 nodes (hipótesis futura extrema), memory contention will persist" -> "Even if" (hipótesis).',
    why_wrong: [
      '✅ Correcta. "Even if" introduce una concesión hipotética ("incluso si el clúster escalara...").',
      '"Even though" introduce un hecho real constatado que ya está ocurriendo, no una hipótesis futura contingente.',
      '"Even so" es un conector de transición que requiere punto y coma o punto seguido.',
      '"Despite" no puede preceder a una cláusula finita con sujeto y verbo.'
    ]
  },
  'ue-11': {
    trigger_scan: 'Ancla de Condición Restrictiva Inicial: "Only if the database replication lag drops below 100ms ______ the read traffic." -> Inversión en la cláusula principal.',
    why_wrong: [
      'Orden directo no invertido: tras "Only if + cláusula condicional", la cláusula principal DEBE invertirse.',
      '✅ Correcta. Inversión formal exacta en la cláusula principal [Auxiliar "will" + Sujeto "the proxy" + Verbo "route"].',
      'Inversión en la cláusula condicional errónea.',
      'Forma en pasado agramatical con la condición en presente.'
    ]
  },
  'ue-12': {
    trigger_scan: 'Ancla de Causalidad: [Verbo transitivo "failed"] ______ a corrupted firmware table -> "due to" vs "because of" (adjetival vs adverbial).',
    why_wrong: [
      '✅ Correcta. "because of" modifica como locución adverbial al verbo "failed" explicando la causa del suceso.',
      '"due to" se reserva tradicionalmente tras verbos copulativos (to be) como adjetivo predicativo ("The failure was DUE TO...").',
      '"owing" requiere "to" ("owing to").',
      '"since" requeriría una cláusula completa con sujeto y verbo, no un sintagma nominal.'
    ]
  },
  'ue-17': {
    trigger_scan: 'Ancla de Urgencia en Soporte: "The production cluster is crashing; the on-call engineer ______ restart the worker nodes immediately." -> "had better" (Sev-1 inminente).',
    why_wrong: [
      '✅ Correcta. "had better" expresa urgencia crítica ante consecuencias desastrosas inminentes y exige infinitivo sin "to".',
      'Colisión sintáctica: "had better" jamás admite "to".',
      '"would better" es una construcción inexistente en inglés estándar.',
      '"should to" es un error común: los modales puros nunca llevan "to".'
    ]
  },
  'ue-20': {
    trigger_scan: 'Ancla de Semántica Forense: "The database corruption was ______ the consequence of unbuffered disk writes during the blackout." -> Consecuencia lógica garantizada.',
    why_wrong: [
      '✅ Correcta. "inevitably" denota un desenlace técnico físico inevitable ante la falta de batería en la controladora.',
      '"arguably" se usa para debates de opinión o superlativos.',
      '"conceivably" expresa una posibilidad remota o hipotética, no una consecuencia física demostrada.',
      '"presumably" expresa una suposición sin confirmación directa.'
    ]
  },

  // LISTENING ENRICHMENTS (l-01 to l-17)
  'l-01': {
    paraphrase_map: 'Audio: "It did. The unstable prefix was dampened..." <=> Opción C: "The dampening mechanism operated successfully as designed."',
    why_wrong: [
      'Contradicción directa con el audio: Elena no reporta ningún fallo de sintaxis, sino una ejecución exitosa.',
      'Trampa de Palabra Eco (Echo Word Trap): utiliza "routing table constantly re-running" del audio, pero el audio aclara que se EVITÓ ("preventing from constantly re-running").',
      '✅ Correcta. Parafrasea con precisión la respuesta de Elena ("It did / was dampened").',
      'Distractor de absurdo operativo: Elena confirma automatización, no cierre manual de interfaz.'
    ]
  },
  'l-02': {
    paraphrase_map: 'Audio: "it effectively detours their traffic through London, adding roughly forty milliseconds" <=> Opción D: "It can periodically result in increased latency."',
    why_wrong: [
      'Exageración técnica extrema: el protocolo BGP no se elimina en todo el sistema autónomo.',
      'Distractor de absurdo físico: las fibras ópticas no se cortan físicamente.',
      'Distractor de difusión descontrolada: la amortiguación previene oscilaciones, no genera tormentas de broadcast.',
      '✅ Correcta. "detours traffic adding forty milliseconds" equivale conceptualmente a "increased latency".'
    ]
  },
  'l-03': {
    paraphrase_map: 'Audio: "we need to adjust the half-life decay timer" <=> Opción A: "Recalibrating the half-life decay parameters to allow faster recovery."',
    why_wrong: [
      '✅ Correcta. "recalibrating parameters" parafrasea exactamente la solución técnica acordada por Elena y Marcus.',
      'Trampa de inversión técnica: deshabilitar por completo la seguridad dejaría la red desprotegida.',
      'Trampa de Palabra Eco: menciona cambiar hardware cuando la conversación se centra en parámetros de software BGP.',
      'Distractor no mencionado en el diálogo.'
    ]
  },
  'l-05': {
    paraphrase_map: 'Audio: "When I asked for his employee security verification code, he abruptly terminated the call" <=> Opción B: "He abruptly hung up the call without providing credentials."',
    why_wrong: [
      'Contradicción con el diálogo: el atacante no dio credenciales de respaldo.',
      '✅ Correcta. "terminated the call" equivale exactamente al modismo cotidiano "hung up the call".',
      'Distractor de agresividad falsa: el reporte indica desconexión inmediata, no amenazas verbales.',
      'Contradicción: no hubo transferencia a soporte Nivel 3.'
    ]
  },
  'l-13': {
    paraphrase_map: 'Audio: "and in the meantime we restrict backup replication to off-peak hours" <=> Opción B: "Restricting database backup replication to off-peak hours."',
    why_wrong: [
      'Distractor absurdo: desviar tráfico corporativo a puntos de acceso móviles 4G/5G comprometería la seguridad y el ancho de banda.',
      '✅ Correcta. Parafrasea de manera fidedigna la medida provisional transitoria ("interim adjustment") descrita por Carlos.',
      'Trampa de Palabra Eco (Echo Word Trap): utiliza términos del diálogo ("DSCP tags", "unthrottled backup frames"), pero contradice el mensaje de Carlos, quien afirmó que el etiquetado QoS funcionó bien.',
      'Distractor de retroceso tecnológico: degradar enlaces de fibra óptica a cableado de cobre ethernet es técnicamente inviable en un backbone de 10 Gbps.'
    ]
  },

  // READING ENRICHMENTS (r-01 to r-13)
  'r-12': {
    paraphrase_map: 'Pregunta: "¿Qué información técnica requerida NO está en el texto txt-01?" (GSE 59-75 Missing Information) <=> Opción C: "Specific TCP/UDP port numbers and firewall subnet IP ranges."',
    why_wrong: [
      'Información presente en el texto (Descartar): El párrafo 3 especifica explícitamente: "tokens expire every four hours".',
      'Información presente en el texto (Descartar): El párrafo 2 formula el postulado base: "never trust, always verify".',
      '✅ Correcta (Información Faltante). El texto cita conceptualmente "micro-segmentation", pero OMITE por completo los puertos TCP/UDP y los rangos de subred IP necesarios para configurar los firewalls.',
      'Información presente en el texto (Descartar): El párrafo 2 describe: "undergo cryptographic posture assessment".'
    ]
  },
  'r-13': {
    paraphrase_map: 'Pregunta: "Missing operational information in txt-03" <=> Opción A: "Exception protocols or bypass procedures for long-running batch jobs exceeding the 10-minute idle threshold."',
    why_wrong: [
      '✅ Correcta (Información Faltante). El texto describe la regla estricta de desconexión por inactividad tras 10 minutos, pero OMITE cómo deben proceder los procesos batch automatizados o ingenieros en sesiones prolongadas.',
      'Información presente en el texto (Descartar): El texto cita la implementación de Single Sign-On mediante SAML 2.0 / OIDC.',
      'Información presente en el texto (Descartar): Se menciona expresamente la rotación obligatoria de secretos en bóveda cada 90 días.',
      'Información presente en el texto (Descartar): El artículo documenta el rol de los ingenieros de soporte y los tickets analizados.'
    ]
  }
};

// Enhancements for G06, G08, G11, G21 in EXPANDED_PRACTICE_QUESTIONS
const EXPANDED_ENRICHMENTS: Record<string, Partial<Question>> = {
  'prac-g06-01': {
    trigger_scan: 'Detonador Visual (5 seg): Espacio inicial ______ + [Sujeto: "the firewall rules"] + [Verbo conjugado: "were configured"] -> Conjunción concesiva subordinante [ALTHOUGH + Cláusula con verbo].',
    why_wrong: [
      '✅ Correcta. "Although" es la conjunción subordinante que rige una cláusula finita con sujeto y verbo conjugado.',
      '❌ Colisión sintáctica: "Despite" es una preposición y solo admite sustantivo o gerundio (*Despite the rules were* es agramatical).',
      '❌ Colisión sintáctica: "In spite of" es una locución preposicional; exige sustantivo o gerundio, jamás cláusula con verbo.',
      '❌ Puntuación rota: "However" es un adverbio conjuntivo y requeriría punto y coma antes o coma después, no subordina directamente.'
    ]
  },
  'prac-g06-02': {
    trigger_scan: 'Detonador Visual (5 seg): Espacio inicial ______ + [Gerundio en -ing: "spending three consecutive sprints..."] -> Preposición de contraste [DESPITE / IN SPITE OF + -ing].',
    why_wrong: [
      '✅ Correcta. "Despite" rige directamente un sintagma con gerundio en -ing ("spending") expresando concesión.',
      '❌ Colisión sintáctica: "Although" exige una cláusula completa con sujeto explícito ("Although they spent...").',
      '❌ Modificador incompleto: "Even" por sí solo es un adverbio de grado; necesita "though" o "if" para ser concesivo.',
      '❌ Colisión de sentido: "Whereas" compara dos hechos coordinados (A es X mientras B es Y), no rige gerundio inicial.'
    ]
  },
  'prac-g06-03': {
    trigger_scan: 'Detonador Visual (5 seg): Espacio inicial ______ + [Tecnología A: "relational databases enforce..."] + coma + [Tecnología B: "NoSQL engines prioritize..."] -> Contraste balanceado: "Whereas".',
    why_wrong: [
      '✅ Correcta. "Whereas" introduce la comparación simétrica formal entre dos arquitecturas de bases de datos.',
      '❌ Colisión sintáctica: "Despite" rechaza oraciones con verbo finito conjugado ("databases enforce").',
      '❌ Colisión de sentido: "Unless" es una condicional negativa ("a menos que"), sin sentido para comparar tecnologías.',
      '❌ Locución incompleta: "In spite" exige obligatoriamente "of" ("In spite of") y tampoco admite verbo finito.'
    ]
  },
  'prac-g08-01': {
    trigger_scan: 'Detonador Visual (5 seg): "Before initiating database schema migration (riesgo crítico)" + [Verbo en forma base: "verify"] -> Advertencia con consecuencia desastrosa [HAD BETTER + Bare Infinitive].',
    why_wrong: [
      '✅ Correcta. "had better" expresa advertencia crítica ante riesgo de pérdida de datos y exige verbo base sin "to".',
      '❌ Error común de examen: "had better" NUNCA lleva la partícula "to" (*had better to verify* es agramatical).',
      '❌ Calco erróneo del español: "would better" no existe en la gramática inglesa estándar.',
      '❌ Colisión modal: "should" jamás se combina con "to" ante el verbo léxico.'
    ]
  },
  'prac-g08-02': {
    trigger_scan: 'Detonador Visual (5 seg): Consejo arquitectónico formal ante vendor lock-in + [Verbo base: "consider"] -> Semi-modal con partícula obligatoria [OUGHT TO + Verbo Base].',
    why_wrong: [
      '✅ Correcta. "ought to" es el semi-modal formal que expresa recomendación y exige la partícula "to".',
      '❌ Forma incompleta: "ought" no puede usarse sin "to" ante un verbo léxico.',
      '❌ Sintaxis rota: "had better" no admite la partícula "to".',
      '❌ Colisión de modal puro: "must" nunca lleva "to".'
    ]
  },
  'prac-g08-03': {
    trigger_scan: 'Detonador Visual (5 seg): Sugerencia suave y diplomática a un cliente/par sobre latencia -> [MIGHT WANT TO + Verbo Base].',
    why_wrong: [
      '✅ Correcta. "might want to" es la fórmula diplomática estándar para sugerir una comprobación sin imponer una orden.',
      '❌ Construcción agramatical: "might" es un modal puro y no admite "to".',
      '❌ Locución deformada: "would rather" significa "preferiría" y rige verbo base sin "to".',
      '❌ Acumulación redundante e incorrecta de auxiliares.'
    ]
  },
  'prac-g11-01': {
    trigger_scan: 'Detonador Semántico (5 seg): Posición adverbial antes de superlativo de prestigio: "______ the most resilient..." -> Postura cualitativa defendible con argumentos: "arguably".',
    why_wrong: [
      '✅ Correcta. "arguably" es el adverbio estándar B2 para respaldar afirmaciones de liderazgo ("posiblemente / con argumentos sólidos el más resiliente").',
      '❌ "conceivably" denota posibilidad teórica o remota ("concebiblemente"), no una valoración de excelencia.',
      '❌ "presumably" denota una suposición no verificada, impropia de un informe que defiende una arquitectura.',
      '❌ "inevitably" denota una consecuencia física ineludible, absurdo al calificar un software.'
    ]
  },
  'prac-g11-02': {
    trigger_scan: 'Detonador Semántico (5 seg): Hipótesis preliminar de causa raíz en informe de incidente: "The spike was ______ caused by a compromised IoT..." -> Suposición antes de confirmación forense: "presumably".',
    why_wrong: [
      '✅ Correcta. "presumably" expresa la hipótesis técnica más probable a la espera del reporte forense definitivo.',
      '❌ "arguably" se usa para debates de opinión o superlativos, no para deducir un vector de ataque físico.',
      '❌ "inevitably" afirmaría que el ataque era una fatalidad del destino garantizada al 100%.',
      '❌ "hardly" es un adverbio negativo ("apenas / casi no"), lo cual contradice el análisis del incidente.'
    ]
  },
  'prac-g21-01': {
    trigger_scan: 'Detonador Visual (5 seg): "If CPU exceeds 95% (telemetría automática de servidor), the group ______ a new instance" -> Automatismo de máquina/firmware sin factor humano = Zero Conditional [PRESENTE + PRESENTE].',
    why_wrong: [
      '✅ Correcta. Zero Conditional ("spins up") expresa la ley universal automatizada de la infraestructura en la nube.',
      '❌ First conditional ("will spin up"): se reserva para compromisos humanos de SLA o contingencias puntuales de hoy/mañana, no para la regla invariable de autoscaling.',
      '❌ Past simple ("spun up"): no concuerda con la condición de monitoreo activo en presente.',
      '❌ Second conditional ("would spin up"): denotaría una hipótesis irreal o improbable.'
    ]
  },
  'prac-g21-02': {
    trigger_scan: 'Detonador Visual (5 seg): "Provided that primary link remains stable (condición previa de red), disaster replication ______ within 2 min (compromiso de SLA)" -> First Conditional [PRESENTE + WILL + BASE].',
    why_wrong: [
      '✅ Correcta. First Conditional ("will complete") formaliza el compromiso contractual contingente de SLA ante el cliente.',
      '❌ Presente simple: debilitaría el matiz de garantía contingente para el futuro.',
      '❌ Second conditional: sugeriría que el cumplimiento del RPO es una fantasía improbable.',
      '❌ Past simple agramatical.'
    ]
  }
};

async function runEnrichment() {
  const seedPath = path.resolve(process.cwd(), 'src/data/seedQuestions.ts');
  const expPath = path.resolve(process.cwd(), 'src/data/practiceQuestionsExpanded.ts');

  // Enrich SEED_QUESTIONS
  const updatedSeeds = SEED_QUESTIONS.map(q => {
    if (SEED_ENRICHMENTS[q.id]) {
      return { ...q, ...SEED_ENRICHMENTS[q.id] };
    }
    return q;
  });

  const seedContent = `import { Question } from '../types';\n\nexport const SEED_QUESTIONS: Question[] = ${JSON.stringify(updatedSeeds, null, 2)};\n`;
  fs.writeFileSync(seedPath, seedContent, 'utf8');
  console.log('SEED_QUESTIONS enriched successfully.');

  // Enrich EXPANDED_PRACTICE_QUESTIONS
  const updatedExp = EXPANDED_PRACTICE_QUESTIONS.map(q => {
    if (EXPANDED_ENRICHMENTS[q.id]) {
      return { ...q, ...EXPANDED_ENRICHMENTS[q.id] };
    }
    return q;
  });

  const expContent = `import { Question } from '../types';\n\nexport const EXPANDED_PRACTICE_QUESTIONS: Question[] = ${JSON.stringify(updatedExp, null, 2)};\n`;
  fs.writeFileSync(expPath, expContent, 'utf8');
  console.log('EXPANDED_PRACTICE_QUESTIONS enriched successfully.');
}

runEnrichment().catch(err => {
  console.error(err);
  process.exit(1);
});
