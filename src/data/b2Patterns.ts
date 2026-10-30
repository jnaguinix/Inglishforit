import { B2Pattern } from '../types';

export const B2_PATTERNS: B2Pattern[] = [
  {
    id: 'pat-01',
    topicId: 'G01',
    title: 'Voz Pasiva: Modal, Operativa y de Reporte',
    humanName: 'Pasiva en IT: "se debe…", "se instaló…" y "se cree que…"',
    category: 'grammar',
    plainAnalogy:
      'En español todo esto suena a "se". En inglés cada "se" se arma distinto:\n• "Se debe / se puede…" ➔ MUST / CAN + be + desplegado. Ejemplo: "The patches must be deployed." (sin "to")\n• "Se instaló / se distribuyeron…" ➔ was / were + instalado. Ejemplo: "Requests were distributed."\n• "Se cree que…" ➔ It is thought THAT… Ejemplo: "It is thought that the tests are slow."\n• "Se cree que…" empezando por la cosa ➔ The tests are thought TO be slow.',
    threeSecondTrigger:
      '• "se debe / se puede" ➔ must / can + be + deployed (sin to)\n• "se instaló / se distribuyeron" ➔ was / were + installed\n• "se cree que" ➔ It is thought THAT…\n• "se cree que" con la cosa delante ➔ …are thought TO…',
    spanglishTrap:
      'Le pasa a casi todos, porque en español el "se" sirve para todo. Dos errores típicos:\n• "must to be deployed": después de must, should o can nunca va "to".\n• "The tests are known that they produce…": si empiezas por la cosa, usa TO ("are known to produce"). "That" solo va con "It is known that…".',
    workplaceExample: {
      scenario: 'Reporte de Incidencia en Slack / Jira',
      en: 'It is reported that the primary database cluster experienced a latency spike, and encryption patches must be deployed immediately.',
      es: 'Se reporta que el clúster primario de base de datos experimentó un pico de latencia, y los parches de cifrado deben ser desplegados inmediatamente.',
    },
    fastDrill: {
      stem: 'Following the network outage, ______ that several payload packets were dropped.',
      options: ['believes that', 'it is believed', 'they are believing', 'it believing'],
      answer: 1,
      quickWhy: 'Comodín del vocero: "It is believed that" evita señalar culpables y mantiene el tono formal de post-mortem.',
    },
  },
  {
    id: 'pat-02',
    topicId: 'G21',
    title: 'Zero Conditional vs. First Conditional',
    humanName: 'Si pasa X, siempre pasa Y (automático) vs. si pasa X, haremos Y (promesa)',
    category: 'grammar',
    plainAnalogy:
      'Pregúntate quién actúa cuando se cumple el "si":\n• Lo hace el sistema solo, siempre igual ➔ presente + presente. Ejemplo: "If memory reaches 95%, the autoscaler launches another node."\n• Lo hará una persona, por algo concreto ➔ presente + will. Ejemplo: "If the link drops tonight, the engineer will activate the backup."',
    threeSecondTrigger:
      '• algo automático que pasa siempre ➔ presente en las dos partes\n• un plan o promesa de una persona ➔ If + presente, will + verbo\n• después de if, unless o as soon as ➔ nunca will',
    spanglishTrap:
      'En español después del "si" a veces usamos futuro o "superara", y por eso sale "If CPU will exceed…". Después de if, unless y as soon as el inglés usa presente, aunque hable del futuro.',
    workplaceExample: {
      scenario: 'Documentación de Alertas en Cloud',
      en: 'If memory usage reaches 95%, the autoscaling group automatically launches another node.',
      es: 'Si el uso de memoria alcanza el 95%, el grupo de autoescalado lanza automáticamente otro nodo.',
    },
    fastDrill: {
      stem: 'If the primary fiber link disconnects tonight, the on-call engineer ______ the secondary gateway.',
      options: ['activates always', 'has activated', 'will activate', 'activating'],
      answer: 2,
      quickWhy: 'Es una promesa de una persona por algo que pasará esta noche ➔ If + presente, will + verbo (will activate).',
    },
  },
  {
    id: 'pat-03',
    topicId: 'G27',
    title: 'Condicionales Irreales e Inversión con "Only If"',
    humanName: 'Lo que pasó y no se hizo ("si hubiéramos…") y "Only if"',
    category: 'grammar',
    plainAnalogy:
      'Dos situaciones típicas de un post-mortem:\n• "Si hubiéramos hecho X ayer, no habría pasado Y" ➔ If + had + hecho, would have + hecho. Ejemplo: "If we had rotated the tokens, the leak would not have happened."\n• "Solo si pasa X, ocurre Y" ➔ Only if… y en la segunda parte el verbo pequeño va primero, como en una pregunta. Ejemplo: "Only if the primary firewall fails does the backup take control."',
    threeSecondTrigger:
      '• "si hubiéramos…" (algo que ya pasó) ➔ If + had + hecho, would have + hecho\n• dentro del "if" ➔ nunca would have\n• la frase abre con "Only if…" ➔ en la segunda parte, el verbo pequeño va antes (does the backup…)',
    spanglishTrap:
      'En español "si hubiéramos" y "habríamos" se parecen mucho, y por eso sale "If we would have patched". Con if va "had"; "would have" va en la otra parte. Y con "Only if" al inicio, la segunda parte se escribe como pregunta (does the backup…), aunque no lo sea.',
    workplaceExample: {
      scenario: 'Post-Mortem de Ciberseguridad',
      en: 'If we had rotated the API tokens last month, the vulnerability would not have affected customer data.',
      es: 'Si hubiéramos rotado los tokens de API el mes pasado, la vulnerabilidad no habría afectado los datos de clientes.',
    },
    fastDrill: {
      stem: 'If the security team ______ the firewall patch yesterday, the ransomware would not have spread.',
      options: ['would apply', 'applies', 'applied usually', 'had applied'],
      answer: 3,
      quickWhy: 'Es algo que pasó ayer y no se hizo ➔ If + had + hecho (had applied), y would have + hecho en la otra parte.',
    },
  },
  {
    id: 'pat-04',
    topicId: 'G07',
    title: 'Inversión Formal con Adverbios Negativos',
    humanName: '"Nunca", "rara vez", "bajo ninguna circunstancia" al inicio: el verbo pequeño va primero',
    category: 'grammar',
    plainAnalogy:
      'Para enfatizar que algo casi nunca debe pasar, pones la palabra negativa al inicio. En español dices "Rara vez se cae el servidor". En inglés, después de esa palabra el verbo pequeño (does, did, can, should, have) va ANTES de quien hace la acción, como en una pregunta:\n• Rarely ➔ "Rarely does the server crash."\n• Under no circumstances ➔ "Under no circumstances should root credentials be committed."\n• "Nunca / casi nunca" ➔ Never / Seldom + verbo pequeño. Ejemplo: "Never have we seen this failure."',
    threeSecondTrigger:
      '• la frase empieza con Never / Rarely / Seldom / Under no circumstances ➔ busca un verbo pequeño pegado (does, did, can, should, have)\n• en la opción correcta, ese verbo va antes de quien actúa ➔ "Rarely does the server…"',
    spanglishTrap:
      'En español decimos "Raramente el servidor se cae", con quien actúa primero, y se nos queda así al traducir. En inglés eso es la opción trampa: "Rarely the server crashes". Tras esas palabras, el verbo pequeño va primero.',
    workplaceExample: {
      scenario: 'Guía de Arquitectura Crítica',
      en: 'Under no circumstances should root credentials be committed to the public Git repository.',
      es: 'Bajo ninguna circunstancia se deben subir credenciales root al repositorio público de Git.',
    },
    fastDrill: {
      stem: 'Rarely ______ an unscheduled database maintenance on a production environment during peak hours.',
      options: ['does the DevOps team approve', 'the DevOps team approves', 'approving the DevOps team', 'the team will approve'],
      answer: 0,
      quickWhy: 'Después de "Rarely" el verbo pequeño va antes de quien actúa: "does the DevOps team approve".',
    },
  },
  {
    id: 'pat-05',
    topicId: 'G15',
    title: 'Doble Función de "Since": Tiempo vs. Causa',
    humanName: '"Since": "desde" (reloj) o "ya que" (razón)',
    category: 'grammar',
    plainAnalogy:
      '"Since" significa dos cosas, y cada una pide algo distinto:\n• "Desde el lunes / desde ayer" ➔ since + momento. En la otra parte va has / have + verbo en 3.ª forma. Ejemplo: "The server has been offline since Tuesday."\n• "Ya que / puesto que" ➔ since = because. Ejemplo: "Since the link is down, we switched to the backup."',
    threeSecondTrigger:
      '• since + hora o fecha ("since 08:00", "since last week") ➔ la otra parte lleva has / have + verbo (has been, has received)\n• since + una razón ("since the link is down") ➔ significa because',
    spanglishTrap:
      'En español decimos "está caído desde ayer", en presente, y al traducir sale "is down since yesterday". Con el "since" de tiempo, el inglés pide has / have: "has been down since yesterday".',
    workplaceExample: {
      scenario: 'Actualización de Incidente y Plan de Contingencia',
      en: 'Since the primary gateway has been unresponsive since 06:00 UTC, we rerouted traffic to Frankfurt.',
      es: 'Ya que la pasarela primaria ha estado sin responder desde las 06:00 UTC, reenrutamos el tráfico a Fráncfort.',
    },
    fastDrill: {
      stem: 'The monitoring daemon ______ any heartbeat packets from node 4 since the kernel update.',
      options: ['does not receive', 'has not received', 'is not receiving', 'did not received'],
      answer: 1,
      quickWhy: 'Hay un "since" de tiempo ("since the kernel update") ➔ has / have + verbo: "has not received".',
    },
  },
  {
    id: 'pat-06',
    topicId: 'G09',
    title: 'Peticiones Diplomáticas y Cortesía con Clientes',
    humanName: 'Peticiones corteses en soporte: "Would you mind…" y "Could you possibly…"',
    category: 'grammar',
    plainAnalogy:
      'Para pedirle algo a un cliente sin sonar brusco, el inglés usa dos fórmulas fijas:\n• "¿Le importaría revisar…?" ➔ Would you mind + verbo con -ing. Ejemplo: "Would you mind checking the cable?"\n• "¿Podría enviar…?" ➔ Could you possibly + verbo sin to. Ejemplo: "Could you possibly send the logs?"',
    threeSecondTrigger:
      '• "Would you mind…" ➔ verbo con -ing (checking, sharing)\n• "Could you possibly / Could you kindly…" ➔ verbo tal cual, sin to (send, verify)',
    spanglishTrap:
      'En español decimos "¿le importaría revisar?", con infinitivo, y por eso sale "Would you mind to check". Después de mind nunca va "to": va el verbo con -ing.',
    workplaceExample: {
      scenario: 'Llamada de Escalación Nivel 2 con Cliente',
      en: 'Would you mind restarting the VPN client while I monitor the authentication logs?',
      es: '¿Le importaría reiniciar el cliente VPN mientras monitoreo los registros de autenticación?',
    },
    fastDrill: {
      stem: 'During the support call, the engineer asked: "Would you mind ______ the firewall logs with our team?"',
      options: ['to share', 'share', 'sharing', 'shared'],
      answer: 2,
      quickWhy: 'Después de "Would you mind" va el verbo con -ing: "sharing".',
    },
  },
  {
    id: 'pat-07',
    topicId: 'V01',
    title: 'Falsos Amigos Críticos y Léxico Cloud',
    humanName: 'Palabras que parecen españolas pero no lo son',
    category: 'vocab',
    plainAnalogy:
      'Cinco palabras que engañan a casi todos los hispanohablantes en IT:\n• Actually ➔ "en realidad / de hecho". "Actualmente" es currently. Ejemplo: "We actually found a spike yesterday."\n• Eventual ➔ "final, el que llega al cabo del tiempo". Ejemplo: "eventual consistency".\n• Compromise ➔ "vulnerar la seguridad" o "ceder para llegar a un acuerdo". "Compromiso" es commitment. Ejemplo: "The host was compromised."\n• Assist ➔ "ayudar". "Asistir a una reunión" es attend. Ejemplo: "All developers must attend the review."\n• Sensible ➔ "sensato". "Datos sensibles" es sensitive data. Ejemplo: "Encrypt all sensitive data."',
    threeSecondTrigger:
      '• ir a una reunión ➔ attend (no assist)\n• datos delicados o confidenciales ➔ sensitive (no sensible)\n• un servidor hackeado o expuesto ➔ compromised\n• "en realidad / de hecho" ➔ actually, y "actualmente" ➔ currently',
    spanglishTrap:
      'Estas palabras se parecen tanto al español que el cerebro no avisa. Dos errores típicos:\n• "I assisted the sprint meeting": para ir a una reunión se usa attend. Assist significa ayudar.\n• "sensible data": datos sensibles es sensitive data. Sensible, en inglés, significa sensato.',
    workplaceExample: {
      scenario: 'Daily Standup en Teams',
      en: 'Currently, the multi-tenant cluster is stable, although we actually found a small egress spike yesterday.',
      es: 'Actualmente el clúster multi-inquilino está estable, aunque de hecho ayer encontramos un pequeño pico de tráfico saliente.',
    },
    fastDrill: {
      stem: 'All backend developers must ______ the quarterly cloud architecture review tomorrow at 10:00 AM.',
      options: ['assist', 'participate to', 'presence', 'attend'],
      answer: 3,
      quickWhy: 'Asistir físicamente o por videollamada a una reunión es "attend". "Assist" significa prestar ayuda.',
    },
  },
  {
    id: 'pat-08',
    topicId: 'G14',
    title: 'Modales de Deducción en Incidentes',
    humanName: 'Deducciones en un incidente: "seguro que fue…" y "imposible que haya sido…"',
    category: 'grammar',
    plainAnalogy:
      'Cuando investigas una caída y no viste el momento exacto, deduces qué pasó según la evidencia:\n• "Seguro que fue eso" ➔ must have + verbo en 3.ª forma. Ejemplo: "The token must have leaked."\n• "Es imposible que haya sido eso" ➔ can\'t have / couldn\'t have + verbo en 3.ª forma. Ejemplo: "It can\'t have crashed from memory, we had 64 GB free."\n• "Quizás fue eso" ➔ might have / could have + verbo en 3.ª forma. Ejemplo: "A bad config might have caused it."',
    threeSecondTrigger:
      '• la evidencia lo confirma ➔ must have + verbo (must have had)\n• la evidencia lo hace imposible ➔ can\'t / couldn\'t have + verbo\n• solo es una posibilidad ➔ might / could have + verbo',
    spanglishTrap:
      '"Imposible que haya sido" no se parece a nada del inglés, y por eso se escapa mustn\'t. Dos errores típicos:\n• "mustn\'t have": mustn\'t significa "prohibido". Para "es imposible que haya sido" se usa can\'t have.\n• Mezclar should have con must have: should have es un reproche ("debiste haberlo hecho"); must have es una deducción por evidencia.',
    workplaceExample: {
      scenario: 'Auditoría Forense de Logs',
      en: 'The attacker must have gained access via an unpatched vulnerability in the legacy gateway.',
      es: 'El atacante seguro obtuvo acceso mediante una vulnerabilidad no parcheada en la pasarela heredada.',
    },
    fastDrill: {
      stem: 'All logs were completely wiped out within milliseconds; the intruder ______ administrative privileges.',
      options: ['must have had', 'should have', 'ought to have', 'could have not'],
      answer: 0,
      quickWhy: 'La evidencia (logs borrados) confirma lo que pasó ➔ must have + verbo: "must have had".',
    },
  },
  {
    id: 'pat-09',
    topicId: 'G06',
    title: 'Conectores de Concesión y Contraste al Inicio',
    humanName: '"A pesar de": Although o Despite, según lo que viene después',
    category: 'grammar',
    plainAnalogy:
      'Los dos significan "a pesar de / aunque", y se eligen por lo que viene justo después:\n• Viene una frase completa (quién + qué hizo) ➔ Although / Even though. Ejemplo: "Although the server was offline, the site kept working."\n• Viene solo una cosa, o un verbo con -ing ➔ Despite / In spite of. Ejemplo: "Despite the downtime, we met the SLA." o "Despite having no budget, we migrated."',
    threeSecondTrigger:
      '• después del hueco hay quién + qué hizo ("the team failed") ➔ Although / Even though\n• después del hueco hay solo una cosa ("the high latency") o un verbo con -ing ➔ Despite / In spite of\n• "Despite of" no existe',
    spanglishTrap:
      'En español "a pesar de" sirve para todo, y por eso se escribe "Despite that the server was down" o "Despite of the failure". Despite no lleva "of" ni va con una frase completa: para eso se usa Although.',
    workplaceExample: {
      scenario: 'Actualización a Stakeholders',
      en: 'Despite the unexpected fiber cut, our failover mechanism maintained 99.9% uptime.',
      es: 'A pesar del corte inesperado de fibra, nuestro mecanismo de conmutación por error mantuvo el 99.9% de actividad.',
    },
    fastDrill: {
      stem: '______ the configuration files were thoroughly inspected, the service failed to initialize.',
      options: ['Despite', 'Although', 'In spite of', 'Regardless'],
      answer: 1,
      quickWhy: 'Después del hueco hay una frase completa ("the configuration files were inspected") ➔ Although.',
    },
  },
  {
    id: 'pat-10',
    topicId: 'G19',
    title: 'Phrasal Verbs Fundamentales de Infraestructura',
    humanName: 'Verbos con partícula en cloud: roll back, spin up, bring down…',
    category: 'grammar',
    plainAnalogy:
      'En infraestructura se usan verbos con una palabrita al final que cambia su sentido:\n• Bring down ➔ tumbar un servicio. Ejemplo: "The DDoS brought down the portal."\n• Roll back ➔ volver a la versión anterior. Ejemplo: "Let\'s roll back to the previous release."\n• Spin up ➔ levantar una máquina o un contenedor. Ejemplo: "Kubernetes will spin up more replicas."\n• Pin down ➔ ubicar con precisión la causa. Ejemplo: "We pinned down the root cause."\n• Phase out ➔ retirar poco a poco. Ejemplo: "We will phase out the legacy API."',
    threeSecondTrigger:
      '• levantar o crear algo ➔ spin up\n• tumbar o hacer caer ➔ bring down\n• volver a la versión anterior tras un fallo ➔ roll back\n• encontrar la causa exacta ➔ pin down\n• retirar un sistema viejo poco a poco ➔ phase out',
    spanglishTrap:
      'Se confunden porque en español no existe esa palabrita extra. Un error típico es decir "back up" (hacer una copia de seguridad) cuando quieres decir "roll back" (volver a una versión anterior).',
    workplaceExample: {
      scenario: 'Chat de DevOps en Incidente',
      en: 'The canary deployment is throwing 500 errors; let’s roll back to version 2.4 immediately.',
      es: 'El despliegue canario está arrojando errores 500; regresemos a la versión 2.4 de inmediato.',
    },
    fastDrill: {
      stem: 'When traffic spikes during Black Friday, the Kubernetes cluster will automatically ______ additional replicas.',
      options: ['bring down', 'roll back', 'spin up', 'call off'],
      answer: 2,
      quickWhy: 'Crear y arrancar réplicas adicionales según la carga se dice "spin up".',
    },
  },
  {
    id: 'pat-11',
    topicId: 'G11',
    title: 'Adverbios Formales de Posibilidad y Probabilidad',
    humanName: 'Adverbios de "probablemente": arguably, presumably, conceivably',
    category: 'grammar',
    plainAnalogy:
      'En un informe, el adverbio dice cuánta evidencia tienes:\n• Arguably ➔ "se puede argumentar que es el más…", con datos que lo respaldan. Va con superlativos. Ejemplo: "Rust is arguably the most memory-safe language."\n• Presumably ➔ "es de suponer", por deducción de lo que ya sabes. Ejemplo: "The pod crashed, presumably due to out-of-memory."\n• Conceivably ➔ "es posible, aunque remoto". Ejemplo: "Conceivably, the issue is in the load balancer."',
    threeSecondTrigger:
      '• "el más seguro / el mejor" (superlativo) ➔ arguably\n• suposición razonable sobre la causa de un fallo ➔ presumably\n• posibilidad remota o hipotética ➔ conceivably',
    spanglishTrap:
      'Arguably suena a "discutible" o "dudosamente", y no lo es: significa que hay buenos argumentos a favor. Si lo lees como "dudoso", descartas la opción correcta.',
    workplaceExample: {
      scenario: 'Propuesta de Migración Tecnológica',
      en: 'Rust is arguably the most memory-safe language for low-level systems programming.',
      es: 'Rust es probablemente el lenguaje más seguro en manejo de memoria para programación de sistemas de bajo nivel.',
    },
    fastDrill: {
      stem: 'With zero memory leaks detected over six months, this is ______ the most stable release of our software.',
      options: ['conceivably', 'presumably', 'tentatively', 'arguably'],
      answer: 3,
      quickWhy: 'Acompaña a un superlativo ("the most stable release") respaldado por datos ➔ arguably.',
    },
  },
  {
    id: 'pat-12',
    topicId: 'G08',
    title: 'Modales de Recomendación y Consejo Técnico',
    humanName: 'Recomendaciones con distinta urgencia: had better, ought to, might want to',
    category: 'grammar',
    plainAnalogy:
      'No todas las recomendaciones pesan igual:\n• "Más vale que lo hagas ya" (hay riesgo) ➔ had better + verbo sin to. Ejemplo: "You had better patch today."\n• "Deberías" (buena práctica) ➔ ought to / should. Ejemplo: "You ought to run backups."\n• "Quizás convendría" (sugerencia amable) ➔ might want to. Ejemplo: "You might want to review the logs."',
    threeSecondTrigger:
      '• riesgo inminente y sin to después del hueco ➔ had better + verbo\n• hay un to después del hueco ➔ ought\n• sugerencia suave ➔ might want to',
    spanglishTrap:
      'Es normal confundirse: "had" parece pasado, pero had better habla del presente o del futuro inmediato. Y no lleva "to": "had better apply", no "had better to apply".',
    workplaceExample: {
      scenario: 'Alerta Crítica de Ciberseguridad',
      en: 'We had better isolate that workstation before the ransomware spreads across the subnet.',
      es: 'Más vale que aislemos esa estación de trabajo antes de que el ransomware se propague por la subred.',
    },
    fastDrill: {
      stem: 'The vulnerability is actively exploited in the wild; we ______ apply the security patch immediately.',
      options: ['had better', 'ought', 'would better', 'should to'],
      answer: 0,
      quickWhy: 'Hay una amenaza inminente y el verbo va sin to ("apply") ➔ had better.',
    },
  },
  {
    id: 'pat-13',
    topicId: 'G23',
    title: 'El Adverbio "Always": Hábito vs. Fallo Irritante',
    humanName: '"Always": costumbre ("siempre") o queja ("se la pasa fallando")',
    category: 'grammar',
    plainAnalogy:
      'La palabra always cambia según lo que quieras decir:\n• "Siempre lo hace, como un reloj" ➔ always + presente. Ejemplo: "The backup always runs at night."\n• "Se la pasa fallando" (queja) ➔ is / are always + verbo con -ing. Ejemplo: "The portal is always dropping tokens."',
    threeSecondTrigger:
      '• is / are / was + always + hueco, en una queja ➔ verbo con -ing (is always crashing)\n• una tarea automática que se repite igual ➔ always + presente (always runs)',
    spanglishTrap:
      'Al ver "always", el cerebro marca el presente simple por reflejo. Si antes dice "is always", la opción correcta lleva -ing.',
    workplaceExample: {
      scenario: 'Escalamiento de Cliente por Fallo Recurrente',
      en: 'The client is furious because the legacy payment portal is always dropping session tokens.',
      es: 'El cliente está furioso porque el portal de pagos heredado se la pasa perdiendo tokens de sesión.',
    },
    fastDrill: {
      stem: 'Users are complaining because the legacy VPN client is always ______ during video calls.',
      options: ['disconnects', 'disconnecting', 'disconnected', 'to disconnect'],
      answer: 1,
      quickWhy: 'Es una queja por un fallo repetido ➔ is always + -ing: "disconnecting".',
    },
  },
  {
    id: 'pat-14',
    topicId: 'G18',
    title: 'Énfasis con "Yet" (Have Yet To / Yet Another)',
    humanName: '"Todavía no" formal: have yet to + verbo',
    category: 'grammar',
    plainAnalogy:
      'En un reporte formal, en vez de "We haven\'t patched the server yet" se escribe "We have yet to patch the server" ("aún tenemos pendiente parchear el servidor").\n• "Aún no ha hecho…" ➔ has / have yet TO + verbo. Ejemplo: "The vendor has yet to release the patch."\n• "Otro fallo más" (con fastidio) ➔ yet another + cosa. Ejemplo: "Yet another outage hit us today."',
    threeSecondTrigger:
      '• has / have yet + hueco ➔ to + verbo (to identify)\n• hueco + another outage / bug ➔ yet',
    spanglishTrap:
      'Es fácil leer "has yet to release" como "ya lo publicó", porque "yet" suena a "ya". Significa lo contrario: todavía no lo ha publicado.',
    workplaceExample: {
      scenario: 'Informe de Auditoría de Vulnerabilidades',
      en: 'The third-party vendor has yet to provide a permanent fix for the memory leak.',
      es: 'El proveedor externo aún no ha proporcionado una solución permanente para la fuga de memoria.',
    },
    fastDrill: {
      stem: 'Although the incident was reported on Monday, the infrastructure team has yet ______ the root cause.',
      options: ['identifying', 'identified', 'to identify', 'identify'],
      answer: 2,
      quickWhy: 'Después de "has yet" va to + verbo: "has yet to identify" ("aún no ha identificado").',
    },
  },
  {
    id: 'pat-15',
    topicId: 'G05',
    title: 'Preposiciones Dependientes en TI',
    humanName: 'Preposiciones fijas: la palabra que acompaña a cada verbo',
    category: 'grammar',
    plainAnalogy:
      'En inglés técnico cada palabra viene con su preposición, y no siempre coincide con el español:\n• Depender de ➔ rely / depend ON. Por ejemplo, "We rely on this API."\n• Consistir en ➔ consist OF. Por ejemplo, "The cluster consists of three nodes."\n• Aumento en ➔ increase IN. Por ejemplo, "an increase in phishing attacks".\n• Impacto en ➔ impact ON. Por ejemplo, "an impact on response times".\n• Capaz de ➔ capable OF + verbo con -ing. Por ejemplo, "capable of handling the load".',
    threeSecondTrigger:
      '• rely / depend / impact ➔ ON\n• increase ➔ IN\n• consist / capable / incapable ➔ OF\n• comply ➔ WITH\n• vulnerable / prone ➔ TO',
    spanglishTrap:
      'El español no ayuda: decimos "depender de" y "consistir en", y salen "depend of" y "consist in". Dos errores típicos:\n• "depend of": se dice depend on.\n• "capable to handle": se dice capable of handling.',
    workplaceExample: {
      scenario: 'Revisión de Cumplimiento Normativo (Compliance)',
      en: 'The recent increase in phishing attacks had a severe impact on helpdesk response times.',
      es: 'El reciente aumento en ataques de phishing tuvo un severo impacto en los tiempos de respuesta del helpdesk.',
    },
    fastDrill: {
      stem: 'Legacy monolithic architectures are often highly vulnerable ______ single points of failure.',
      options: ['with', 'of', 'for', 'to'],
      answer: 3,
      quickWhy: 'Vulnerable siempre va con to: "vulnerable to".',
    },
  },
  {
    id: 'pat-16',
    topicId: 'G13',
    title: 'The Subjunctive Mood (English for IT 2 – Tema 1)',
    humanName: 'Consejos e hipótesis: "were" y el verbo sin -s',
    category: 'grammar',
    plainAnalogy:
      'Hay tres situaciones donde el inglés no sigue la regla de siempre:\n• "Si yo fuera / si dependiera de mí…" ➔ WERE, incluso con I, he, she o it. Ejemplo: "If it were up to me, we would migrate."\n• Pedir, exigir o recomendar que alguien haga algo (suggest, recommend, insist, demand) ➔ el verbo va tal cual sale en el diccionario, sin -s. Ejemplo: "I suggest that she implement MFA."\n• Decirlo en negativo ➔ not + verbo, sin do. Ejemplo: "He insisted that the protocols not be used."',
    threeSecondTrigger:
      '• "si yo fuera / si dependiera de mí" ➔ If + WERE (nunca was)\n• suggest / recommend / insist / demand + that ➔ verbo sin -s ni to (he replace)\n• lo mismo en negativo ➔ that + not + verbo (not be used)',
    spanglishTrap:
      'Es normal dudar: en español "dependiera" ya suena distinto, pero en inglés nada avisa. Dos errores típicos:\n• "If it was up to me": en esta hipótesis se usa were.\n• "suggest that he replaces": después de suggest, recommend o insist that, el verbo no lleva -s ("he replace").',
    workplaceExample: {
      scenario: 'Recomendación Técnica de Arquitectura (English for IT 2)',
      en: 'If it were up to me, I would suggest that the team implement key-based authentication.',
      es: 'Si dependiera de mí, sugeriría que el equipo implemente autenticación basada en claves.',
    },
    fastDrill: {
      stem: 'The chief security officer insisted that proprietary networking protocols ______ used.',
      options: ['were not', 'not be', 'are not', 'to not be'],
      answer: 1,
      quickWhy: 'Tras "insisted that" se niega con not + verbo: "not be used".',
    },
  },
  {
    id: 'pat-17',
    topicId: 'V08',
    title: 'Detección de Información Faltante en Procedimientos (Dominio 3.3 OpenEDG)',
    humanName: 'Detectar qué paso falta en un procedimiento',
    category: 'vocab',
    plainAnalogy:
      'Hay preguntas que no piden entender todo el texto, sino darte cuenta de qué paso NO está. Antes de una migración o un despliegue, fíjate si el texto menciona:\n• Copia de seguridad ➔ ¿se hizo un backup o un snapshot antes?\n• Plan para volver atrás ➔ ¿hay un rollback preparado?\n• Aviso a los usuarios ➔ ¿se avisó antes de cortar el servicio?\n• Permisos mínimos ➔ ¿se revisaron los accesos antes de empezar?',
    threeSecondTrigger:
      '• el texto dice omitted / skipped / overlooked / neglected / failure to verify ➔ ahí está el paso que falta\n• compara los pasos del texto con la lista de arriba ➔ la opción correcta es el paso que no aparece',
    spanglishTrap:
      'Es normal dar por hecho que un paso "obvio" ya se hizo. Si el texto no lo dice, en una pregunta de información faltante cuenta como que falta.',
    workplaceExample: {
      scenario: 'Postmortem de Despliegue en Base de Datos',
      en: 'The runbook omitted a critical pre-migration validation step: taking a snapshot of the primary replica.',
      es: 'El runbook omitió un paso crítico de validación previa: tomar una instantánea de la réplica principal.',
    },
    fastDrill: {
      stem: 'According to the incident report, the migration failed catastrophically because the engineering team _______ to verify backup integrity before dropping legacy foreign keys.',
      options: ['neglected', 'attended', 'realized', 'compromised'],
      answer: 0,
      quickWhy: '"Neglected to verify" significa que descuidó la verificación: ese paso falta.',
    },
  },
];

