import { Question } from '../../types';

/**
 * Reading Lab Comprehension & English for IT 2 Expansion Bank
 * - Dedicated Reading Comprehension questions (section: 'R') with evidence_quote and paraphrase_map
 *   for txt-it1-3.5, txt-it1-4.4, txt-it1-6.5, txt-it2-5.4, txt-it2-6.5, txt-01, txt-02, txt-03, txt-04.
 * - High-yield Contrastive Pair & English for IT 2 Grammar items (G16, G19, G20, G21, G23, G24, G26, G27, G28, G29).
 */
export const READING_AND_IT2_EXPANSION_BANK: Question[] = [
  // =========================================================================
  // READING COMPREHENSION: txt-it1-3.5 (Compiler vs. Interpreter)
  // =========================================================================
  {
    id: 'read-it1-3.5-q1',
    section: 'R',
    objective: 'R2',
    topic: 'V02',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-it1-3.5',
    stem: 'According to the article, what is a primary operational advantage of an Ahead-of-Time (AOT) compiler?',
    options: [
      'It catches syntax and static type errors during the build stage before deployment and executes with minimal runtime overhead.',
      'It translates source code line by line during live production traffic without requiring a build step.',
      'It eliminates the need for platform-specific binaries by running directly inside a browser sandbox.',
      'It automatically converts legacy Python scripts into C++ source files without human intervention.'
    ],
    answer: 0,
    why_correct: '• Pista: AOT = compila antes de ejecutar, así los errores salen al compilar.\n• Significado: La ventaja es detectar errores de sintaxis y tipos en el build, antes de desplegar.\n• Descartas: Ejecutar línea por línea es un intérprete; correr en el navegador no es AOT; la conversión mágica Python→C++ no existe.',
    why_wrong: [
      'Opción correcta: Detecta errores de sintaxis y tipos en el build, antes de desplegar.',
      'Incorrecto: Traducir línea por línea es lo de un intérprete.',
      'Incorrecto: AOT no corre en el navegador ni elimina binarios por plataforma.',
      'Incorrecto: No convierte Python a C++ automáticamente.'
    ],
    human_rule: 'AOT = errores se detectan en el build, antes de ejecutar.',
    trigger_anchor: 'Ahead-of-Time ➔ errors at build',
    spanglish_trap: 'Pensar que AOT es "más rápido en general". Su ventaja aquí es detectar errores pronto.',
    tip_es: 'AOT Compiler = traduce todo antes del despliegue + detecta errores en build + mínimo overhead en runtime.',
    evidence_quote: 'Because lexical analysis, static type checking, and loop optimization occur during the build stage, compile-time errors are caught early in the continuous integration pipeline. Consequently, the resulting machine binary executes directly on the host processor with minimal runtime overhead',
    paraphrase_map: 'compile-time errors are caught early in the build stage ≈ catches syntax and static type errors before deployment'
  },
  {
    id: 'read-it1-3.5-q2',
    section: 'R',
    objective: 'R3',
    topic: 'V02',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-it1-3.5',
    stem: 'How do platforms like Java and C# balance cross-platform portability with native execution speed?',
    options: [
      'By disabling static type checking during production peak hours.',
      'By compiling source code into intermediate bytecode that a virtual machine dynamically compiles into native code for frequently executed paths.',
      'By forcing developers to manually rewrite critical loops in assembly language.',
      'By interpreting every line from scratch without caching any machine instructions.'
    ],
    answer: 1,
    why_correct: '• Pista: Java y C# usan bytecode: portable, y luego la VM lo compila a nativo.\n• Significado: Compilan a bytecode intermedio y la VM lo traduce dinámicamente a código nativo (JIT).\n• Descartas: No desactivan el chequeo de tipos; nadie reescribe bucles en assembly; no interpretan sin caché.',
    why_wrong: [
      'Incorrecto: No desactivan el chequeo de tipos.',
      'Opción correcta: Compilan a bytecode que la VM convierte dinámicamente a nativo.',
      'Incorrecto: No obligan a reescribir en assembly.',
      'Incorrecto: Interpretar sin caché sería muy lento.'
    ],
    human_rule: 'bytecode + JIT = portabilidad y velocidad.',
    trigger_anchor: 'portable + fast ➔ bytecode + JIT',
    spanglish_trap: 'Pensar que Java es solo interpretado o solo compilado. Es un híbrido.',
    tip_es: 'JIT (Just-In-Time) = Bytecode portable + compilación a código nativo en caliente para "hot paths".',
    evidence_quote: 'source code is first compiled into portable intermediate bytecode, which the virtual machine dynamically compiles into native machine code when frequently executed "hot paths" are detected during production traffic.',
    paraphrase_map: 'frequently executed "hot paths" ≈ frequently executed paths | portable intermediate bytecode'
  },
  {
    id: 'read-it1-3.5-q3',
    section: 'R',
    objective: 'R4',
    topic: 'V02',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-it1-3.5',
    stem: 'What trade-off do engineering teams accept when choosing a pure runtime interpreter?',
    options: [
      'They gain immediate cross-platform portability without lengthy build steps, but incur higher CPU overhead during execution.',
      'They achieve the lowest possible CPU usage at the cost of waiting several hours for binary linking.',
      'They prevent all runtime exceptions from occurring in production.',
      'They restrict the application to running on a single hardware processor family.'
    ],
    answer: 0,
    why_correct: '• Pista: Intérprete puro: sin compilar antes, pero más lento al correr.\n• Significado: Ganas portabilidad inmediata sin build, pero pagas más costo de ejecución.\n• Descartas: No da el menor CPU ni evita excepciones ni limita a una sola familia de procesadores.',
    why_wrong: [
      'Opción correcta: Portabilidad inmediata sin build largo, pero más costo al ejecutar.',
      'Incorrecto: Un intérprete no usa menos CPU; es lo contrario.',
      'Incorrecto: No evita excepciones en runtime.',
      'Incorrecto: No limita a una familia de procesadores.'
    ],
    human_rule: 'intérprete = flexible y portable, pero más lento.',
    trigger_anchor: 'pure interpreter ➔ portability vs speed',
    spanglish_trap: 'Pensar que "sin compilar" significa "más rápido". Es más cómodo, no más rápido.',
    tip_es: 'Intérprete = Cero tiempo de build y alta portabilidad, pero mayor consumo de CPU en ejecución.',
    evidence_quote: 'While this eliminates lengthy build steps and enables cross-platform portability without recompilation, translating instructions on the fly introduces substantial CPU overhead.',
    paraphrase_map: 'translating instructions on the fly introduces substantial CPU overhead ≈ incur higher CPU overhead during execution'
  },

  // =========================================================================
  // READING COMPREHENSION: txt-it1-4.4 (Asking Customers Questions)
  // =========================================================================
  {
    id: 'read-it1-4.4-q1',
    section: 'R',
    objective: 'R1',
    topic: 'V03',
    difficulty: 1,
    pool: 'practice',
    ref: 'txt-it1-4.4',
    stem: 'Why should support engineers avoid using internal architectural jargon or accusatory questions with non-technical customers?',
    options: [
      'Because it triggers customer defensiveness and makes it harder to uncover the true root cause of the outage.',
      'Because corporate compliance policies forbid Tier-1 analysts from speaking directly with end users.',
      'Because customers prefer receiving automated command-line scripts without any verbal explanation.',
      'Because closed-ended questions are illegal under service-level agreements.'
    ],
    answer: 0,
    why_correct: '• Pista: Jerga y preguntas acusadoras ponen a la defensiva al cliente.\n• Significado: Se evita para que el cliente no se defienda y se pueda hallar la causa raíz.\n• Descartas: Las otras opciones son políticas, scripts o ilegalidades inventadas.',
    why_wrong: [
      'Opción correcta: Provoca defensa del cliente y dificulta hallar la causa.',
      'Incorrecto: No está prohibido hablar con usuarios.',
      'Incorrecto: Los clientes prefieren explicación.',
      'Incorrecto: Las preguntas cerradas no son ilegales.'
    ],
    human_rule: 'Sin jerga, sin acusar ➔ cliente colabora.',
    trigger_anchor: 'jargon + accusing ➔ defensive',
    spanglish_trap: 'Pensar que la jerga demuestra profesionalismo.',
    tip_es: 'Evitar preguntas acusatorias ("Did you overwrite...?") porque ponen al cliente a la defensiva.',
    evidence_quote: 'When non-technical customers experience an application outage, bombarding them with internal architectural jargon or accusatory questions ("Did you overwrite your configuration file?") triggers defensiveness and obscures the root cause.',
    paraphrase_map: 'triggers defensiveness and obscures the root cause ≈ makes it harder to uncover the true root cause'
  },
  {
    id: 'read-it1-4.4-q2',
    section: 'R',
    objective: 'R2',
    topic: 'V03',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-it1-4.4',
    stem: 'What sequence of questioning does the guide recommend for effective technical troubleshooting?',
    options: [
      'Start by escalating the ticket to senior developers, then ask the customer to reinstall their operating system.',
      'Start with open-ended exploratory questions to understand the workflow context, then transition to targeted closed-ended checks to isolate variables.',
      'Ask only yes/no questions from the very beginning to prevent the customer from describing their workflow.',
      'Demand server log files first before allowing the customer to explain what they were trying to accomplish.'
    ],
    answer: 1,
    why_correct: '• Pista: Se recomienda empezar abierto y luego cerrar con preguntas específicas.\n• Significado: Primero preguntas abiertas para entender el flujo, luego preguntas dirigidas.\n• Descartas: Escalar primero, solo sí/no o pedir logs antes no es lo recomendado.',
    why_wrong: [
      'Incorrecto: Escalar primero no es el método.',
      'Opción correcta: Abiertas primero, luego dirigidas.',
      'Incorrecto: Solo sí/no impide entender el flujo.',
      'Incorrecto: Pedir logs primero ignora al cliente.'
    ],
    human_rule: 'abierta ➔ cerrada.',
    trigger_anchor: 'open-ended first ➔ then targeted',
    spanglish_trap: 'Empezar por preguntas de sí o no.',
    tip_es: 'Secuencia de diagnóstico en soporte: 1º Preguntas abiertas (contexto) ➔ 2º Preguntas cerradas (aislar variables).',
    evidence_quote: 'Effective support methodology begins with open-ended exploratory questions that allow the user to describe the workflow context in their own words... Once the broader symptom is established, the analyst should transition to targeted, closed-ended verification steps to isolate variables',
    paraphrase_map: 'begins with open-ended exploratory questions... transition to targeted, closed-ended verification steps'
  },
  {
    id: 'read-it1-4.4-q3',
    section: 'R',
    objective: 'R4',
    topic: 'V03',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-it1-4.4',
    stem: 'What is the operational benefit of combining empathetic active listening with structured binary elimination?',
    options: [
      'It allows support engineers to reproduce elusive bugs in half the time without escalating routine configuration errors to senior developers.',
      'It guarantees that software products will never experience configuration mismatches.',
      'It replaces the need for multi-factor authentication on corporate VPNs.',
      'It shifts the responsibility of writing code patches onto the customer.'
    ],
    answer: 0,
    why_correct: '• Pista: Escucha empática + eliminación binaria = rapidez.\n• Significado: Se reproducen bugs difíciles en la mitad del tiempo sin escalar tickets de configuración.\n• Descartas: No garantiza cero errores, no reemplaza MFA y no pasa trabajo al cliente.',
    why_wrong: [
      'Opción correcta: Reproducir bugs en la mitad del tiempo.',
      'Incorrecto: Nada garantiza cero errores.',
      'Incorrecto: No reemplaza MFA.',
      'Incorrecto: No traslada tareas al cliente.'
    ],
    human_rule: 'escuchar + eliminar = menos tiempo.',
    trigger_anchor: 'listening + elimination ➔ faster reproduce',
    spanglish_trap: 'Creer que una técnica evita todo error.',
    tip_es: 'Escucha activa + descarte binario = reproducir bugs en la mitad de tiempo sin escalar innecesariamente.',
    evidence_quote: 'By pairing empathetic active listening with structured binary elimination, support engineers can reproduce elusive defects in half the time without escalating routine configuration mismatches to senior developers.',
    paraphrase_map: 'reproduce elusive defects in half the time without escalating routine configuration mismatches'
  },

  // =========================================================================
  // READING COMPREHENSION: txt-it1-6.5 (The Pegasus Spyware Incident)
  // =========================================================================
  {
    id: 'read-it1-6.5-q1',
    section: 'R',
    objective: 'R2',
    topic: 'V05',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-it1-6.5',
    stem: 'How do "zero-click" exploitation vectors differ from traditional mobile phishing campaigns?',
    options: [
      'They compromise background message-parsing daemons upon receiving a crafted payload, requiring no human interaction or link clicking.',
      'They require the victim to manually approve three consecutive push notifications.',
      'They only infect desktop computers connected via physical Ethernet cables.',
      'They rely on tricking the user into downloading a fake antivirus installer from an email attachment.'
    ],
    answer: 0,
    why_correct: '• Pista: Zero-click se compara con phishing: no necesita acción.\n• Significado: Comprometen procesos que analizan mensajes en segundo plano al recibirlos.\n• Descartas: No piden aprobaciones, no son solo de escritorio y no engañan para descargar antivirus.',
    why_wrong: [
      'Opción correcta: Atacan procesos de fondo al recibir el mensaje.',
      'Incorrecto: No requiere aprobar nada.',
      'Incorrecto: No se limita a equipos de escritorio.',
      'Incorrecto: Descargar un falso antivirus es phishing normal.'
    ],
    human_rule: 'zero-click = sin que el usuario haga nada.',
    trigger_anchor: 'zero-click ➔ no interaction',
    spanglish_trap: 'Pensar que todo ataque necesita un clic.',
    tip_es: 'Zero-click exploit = compromete demonios en segundo plano sin que el usuario toque ni haga clic en nada.',
    evidence_quote: 'Rather than waiting for user interaction, zero-click exploits target vulnerabilities in background message-parsing daemons, such as image rendering libraries or voice-over-IP signaling protocols.',
    paraphrase_map: 'Rather than waiting for user interaction ≈ requiring no human interaction or link clicking'
  },
  {
    id: 'read-it1-6.5-q2',
    section: 'R',
    objective: 'R3',
    topic: 'V05',
    difficulty: 3,
    pool: 'practice',
    ref: 'txt-it1-6.5',
    stem: 'Why does advanced mobile spyware utilize "in-memory persistence" instead of writing files to flash storage?',
    options: [
      'Because volatile RAM has unlimited storage capacity compared to flash drives.',
      'To evade mobile endpoint detection agents that scan permanent files on flash storage.',
      'To ensure the spyware survives forever without ever needing a secondary kernel hook.',
      'To speed up the user’s camera application.'
    ],
    answer: 1,
    why_correct: '• Pista: Persistencia en memoria evita dejar archivos.\n• Significado: Evade agentes que escanean el almacenamiento permanente.\n• Descartas: La RAM no es ilimitada, no vive para siempre y no acelera la cámara.',
    why_wrong: [
      'Incorrecto: La RAM no es ilimitada.',
      'Opción correcta: Evita a los agentes que escanean el almacenamiento.',
      'Incorrecto: En RAM no sobrevive a un reinicio.',
      'Incorrecto: No tiene relación con la cámara.'
    ],
    human_rule: 'in-memory = sin archivos = menos detectable.',
    trigger_anchor: 'in-memory ➔ evade detection',
    spanglish_trap: 'Creer que RAM significa permanencia.',
    tip_es: 'In-memory persistence = residir en RAM volátil para no ser detectado por escáneres de disco/flash.',
    evidence_quote: 'Once initial privilege escalation is achieved, modern spyware avoids writing permanent files to flash storage, where mobile endpoint detection agents might scan them. Instead, the payload resides exclusively in volatile RAM—a technique known as in-memory persistence.',
    paraphrase_map: 'avoids writing permanent files to flash storage, where mobile endpoint detection agents might scan them ≈ evade mobile endpoint detection agents'
  },
  {
    id: 'read-it1-6.5-q3',
    section: 'R',
    objective: 'R4',
    topic: 'V05',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-it1-6.5',
    stem: 'Which combination of defensive measures is recommended in the text to mitigate zero-click spyware threats?',
    options: [
      'Disabling encryption on VoIP calls and avoiding operating system updates.',
      'Rapid OS patch cadence, strict sandboxing of media parsers, and automated daily device reboots for high-risk executives.',
      'Replacing all mobile devices with shared desktop workstations without firewalls.',
      'Training executives to inspect the hexadecimal source code of every incoming SMS.'
    ],
    answer: 1,
    why_correct: '• Pista: El texto recomienda una combinación de defensas.\n• Significado: Parches rápidos del sistema, aislar los analizadores de medios y otras medidas.\n• Descartas: Quitar cifrado, cambiar a equipos compartidos o leer hexadecimal no son defensas.',
    why_wrong: [
      'Incorrecto: Quitar el cifrado empeora.',
      'Opción correcta: Parches rápidos y aislamiento de analizadores.',
      'Incorrecto: Equipos compartidos no son una defensa.',
      'Incorrecto: Leer hexadecimal no es realista.'
    ],
    human_rule: 'defensa zero-click = parchear + aislar.',
    trigger_anchor: 'zero-click ➔ patch + sandbox',
    spanglish_trap: 'Elegir medidas absurdas por sonar técnicas.',
    tip_es: 'Mitigación Zero-Click = Parches rápidos + Sandboxing de parsers + Reinicio diario de dispositivos.',
    evidence_quote: 'Mitigating zero-click threats requires rapid operating system patch cadence, strict sandboxing of media parsers, and automated daily device reboots for high-risk executives.',
    paraphrase_map: 'rapid operating system patch cadence, strict sandboxing of media parsers, and automated daily device reboots'
  },

  // =========================================================================
  // READING COMPREHENSION: txt-it2-5.4 (Enterprise NOC Email Support)
  // =========================================================================
  {
    id: 'read-it2-5.4-q1',
    section: 'R',
    objective: 'R2',
    topic: 'V07',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-it2-5.4',
    stem: 'What triggered the automated BGP failover to the Amsterdam IPSec tunnel?',
    options: [
      'A scheduled software upgrade on the Amsterdam firewall.',
      'A physical fiber-optic cable cut caused by municipal excavation near Frankfurt, resulting in a complete loss of light on the primary 10 Gbps MPLS circuit.',
      'A DDoS attack targeting the customer’s VoIP phone system.',
      'An expired SSL certificate on the primary database cluster.'
    ],
    answer: 1,
    why_correct: '• Pista: Qué activó el failover BGP hacia Ámsterdam.\n• Significado: Un corte físico de fibra causado por obras municipales.\n• Descartas: Actualización de firewall, DDoS o certificado SSL no activan failover.',
    why_wrong: [
      'Incorrecto: Una actualización no causó el failover.',
      'Opción correcta: Corte de fibra por obras municipales.',
      'Incorrecto: Un DDoS no es la causa.',
      'Incorrecto: Un certificado vencido no activa BGP.'
    ],
    human_rule: 'failover = por caída de enlace.',
    trigger_anchor: 'BGP failover ➔ fiber cut',
    spanglish_trap: 'Culpar a algo digital.',
    tip_es: 'Loss of light = corte físico de fibra óptica que dispara el failover BGP al túnel secundario.',
    evidence_quote: 'our upstream telecommunications carrier reported a physical fiber-optic cable cut caused by municipal excavation near the Frankfurt metropolitan exchange. As a result, your primary 10 Gbps MPLS circuit experienced a complete loss of light.',
    paraphrase_map: 'physical fiber-optic cable cut caused by municipal excavation... complete loss of light'
  },
  {
    id: 'read-it2-5.4-q2',
    section: 'R',
    objective: 'R3',
    topic: 'V07',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-it2-5.4',
    stem: 'How does the backup IPSec VPN tunnel compare to the primary MPLS circuit, and how did the NOC prevent saturation?',
    options: [
      'The backup tunnel is faster (20 Gbps), so the NOC accelerated all bulk snapshot replications.',
      'The backup tunnel has higher latency (18 ms) and lower throughput (2 Gbps), so the NOC applied QoS traffic shaping to prioritize database queries and VoIP while pausing bulk backups.',
      'Both circuits have identical latency and bandwidth, requiring no traffic management changes.',
      'The backup tunnel only supports email traffic, forcing the NOC to shut down all transactional databases.'
    ],
    answer: 1,
    why_correct: '• Pista: Comparación entre túnel IPSec y MPLS.\n• Significado: El túnel tiene más latencia (18 ms) y menos ancho de banda; el NOC priorizó tráfico.\n• Descartas: Más rápido, idéntico o solo correo no coincide.',
    why_wrong: [
      'Incorrecto: El respaldo no es más rápido.',
      'Opción correcta: Más latencia y menos ancho de banda; el NOC priorizó tráfico.',
      'Incorrecto: No son idénticos.',
      'Incorrecto: No solo soporta correo.'
    ],
    human_rule: 'backup = menos capacidad, hay que priorizar.',
    trigger_anchor: 'backup tunnel ➔ higher latency, less bandwidth',
    spanglish_trap: 'Pensar que el respaldo iguala al principal.',
    tip_es: 'Cuando el enlace de respaldo tiene menor capacidad (2 Gbps), QoS prioriza tráfico crítico (DB/VoIP) y pausa backups masivos.',
    evidence_quote: 'the backup IPSec tunnel operates with an average round-trip latency of eighteen milliseconds and a capped throughput of 2 Gbps. To prevent bandwidth saturation... Real-time transactional database queries and VoIP channels remain prioritized, whereas bulk offsite snapshot replications have been paused',
    paraphrase_map: 'prioritize database queries and VoIP while pausing bulk backups ≈ transactional database queries and VoIP channels remain prioritized, whereas bulk offsite snapshot replications have been paused'
  },

  // =========================================================================
  // READING COMPREHENSION: txt-it2-6.5 (Blameless Postmortems)
  // =========================================================================
  {
    id: 'read-it2-6.5-q1',
    section: 'R',
    objective: 'R1',
    topic: 'V08',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-it2-6.5',
    stem: 'According to the text, what is the negative consequence of reprimanding individual engineers after a production outage?',
    options: [
      'It motivates engineers to write more detailed postmortem documentation.',
      'It incentivizes engineers to hide near-misses and withhold critical diagnostic information during future incidents.',
      'It eliminates the need for automated canary health checks.',
      'It reduces cloud hosting costs by twenty percent.'
    ],
    answer: 1,
    why_correct: '• Pista: Consecuencia negativa de reprender a ingenieros tras una caída.\n• Significado: Los incentiva a ocultar casi-accidentes y errores.\n• Descartas: No motiva, no elimina canary checks y no baja costos.',
    why_wrong: [
      'Incorrecto: "It motivates engineers to write more detailed postmortem…" no es lo que dice el texto.',
      'Opción correcta: It incentivizes engineers to hide near-misses and withhold critical diagnostic information during future incidents.',
      'Incorrecto: "It eliminates the need for automated canary health checks." no es lo que dice el texto.',
      'Incorrecto: "It reduces cloud hosting costs by twenty percent." no es lo que dice el texto.'
    ],
    human_rule: 'castigo = ocultar errores.',
    trigger_anchor: 'reprimand ➔ hide near-misses',
    spanglish_trap: 'Pensar que castigar mejora.',
    tip_es: 'Cultura punitiva = los ingenieros ocultan errores ("conceal near-misses"). Blameless postmortem = transparencia y mejora del sistema.',
    evidence_quote: 'However, reprimanding human operators inevitably incentivizes engineers to conceal near-misses and withhold critical diagnostic context during future incidents.',
    paraphrase_map: 'conceal near-misses and withhold critical diagnostic context ≈ hide near-misses and withhold critical diagnostic information'
  },
  {
    id: 'read-it2-6.5-q2',
    section: 'R',
    objective: 'R4',
    topic: 'V08',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-it2-6.5',
    stem: 'What is the primary focus of a "blameless postmortem" using the "Five Whys" technique?',
    options: [
      'Determining which developer should have their repository access permanently revoked.',
      'Tracing human errors back to systemic pipeline gaps—such as missing canary checks or ambiguous runbooks—and defining time-bound engineering action items.',
      'Convincing customers that the outage was an intentional security feature.',
      'Delaying software releases indefinitely until manual code reviews replace all automation.'
    ],
    answer: 1,
    why_correct: '• Pista: Enfoque del postmortem sin culpa con los Cinco Porqués.\n• Significado: Rastrear errores humanos hasta fallas sistémicas del pipeline.\n• Descartas: No es culpar, convencer clientes ni retrasar lanzamientos.',
    why_wrong: [
      'Incorrecto: "Determining which developer should have their repository access…" no es lo que dice el texto.',
      'Opción correcta: Tracing human errors back to systemic pipeline gaps—such as missing canary checks or ambiguous runbooks—and defining time-bound engineering action items.',
      'Incorrecto: "Convincing customers that the outage was an intentional security…" no es lo que dice el texto.',
      'Incorrecto: "Delaying software releases indefinitely until manual code reviews…" no es lo que dice el texto.'
    ],
    human_rule: 'blameless = culpar al sistema, no a la persona.',
    trigger_anchor: 'five whys ➔ systemic gaps',
    spanglish_trap: 'Buscar a un culpable.',
    tip_es: 'Blameless Postmortem + 5 Whys = encontrar qué falló en el sistema/pipeline y crear Action Items preventivos.',
    evidence_quote: 'By applying the "Five Whys" root-cause analysis technique, teams trace human errors back to systemic gaps—such as ambiguous runbook documentation, missing canary health checks, or alert fatigue. Every postmortem must conclude with prioritized, time-bound engineering action items',
    paraphrase_map: 'trace human errors back to systemic gaps... time-bound engineering action items'
  },

  // =========================================================================
  // ADDITIONAL PRACTICE READING ITEMS FOR txt-01, txt-02, txt-03, txt-04
  // =========================================================================
  {
    id: 'read-txt01-prac-q1',
    section: 'R',
    objective: 'R2',
    topic: 'V05',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-01',
    stem: 'In a Zero-Trust Network Architecture (ZTNA), how is lateral movement restricted if a developer workstation is compromised?',
    options: [
      'By trusting all traffic that originates from switches inside the corporate headquarters.',
      'By applying least-privilege access policies and micro-segmentation at the application layer, alongside four-hour token expiration.',
      'By allowing session authentication tokens to remain valid indefinitely.',
      'By granting broad subnet-wide visibility to all authenticated laptops.'
    ],
    answer: 1,
    why_correct: '• Pista: ZTNA limita el movimiento lateral.\n• Significado: Con mínimo privilegio y micro-segmentación.\n• Descartas: Confiar en el tráfico interno, tokens eternos o visibilidad amplia lo facilitan.',
    why_wrong: [
      'Incorrecto: Confiar en el tráfico interno es lo contrario.',
      'Opción correcta: Mínimo privilegio y micro-segmentación.',
      'Incorrecto: Tokens eternos facilitan el abuso.',
      'Incorrecto: Visibilidad amplia facilita el movimiento.'
    ],
    human_rule: 'ZTNA = mínimo privilegio + micro-segmentación.',
    trigger_anchor: 'lateral movement ➔ least privilege + segmentation',
    spanglish_trap: 'Creer que confiar en la red interna es seguro.',
    tip_es: 'Microsegmentación + Least Privilege = bloquean el movimiento lateral ("lateral movement") del atacante.',
    evidence_quote: 'Furthermore, least-privilege access policies segment resources at the application layer rather than granting broad network-level subnet visibility. By implementing micro-segmentation, security engineers ensure that even if an adversary successfully compromises a single developer workstation, lateral movement across internal databases is mathematically restricted.',
    paraphrase_map: 'least-privilege access policies... micro-segmentation... lateral movement across internal databases is mathematically restricted'
  },
  {
    id: 'read-txt02-prac-q1',
    section: 'R',
    objective: 'R3',
    topic: 'V08',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-02',
    stem: 'How do specialized immutable micro-distributions handle failed system upgrades on remote edge appliances?',
    options: [
      'They require a Tier-1 technician to physically visit the substation with a USB recovery drive.',
      'They execute upgrades via atomic A/B partition swaps and autonomously roll back to the previous validated state within thirty seconds if boot integrity fails.',
      'They allow rootkits to modify core system files during runtime to repair the kernel.',
      'They disable all boot integrity checks to ensure the appliance always powers on.'
    ],
    answer: 1,
    why_correct: '• Pista: Cómo manejan upgrades fallidos las micro-distribuciones inmutables.\n• Significado: Con particiones atómicas A/B que permiten volver a la anterior.\n• Descartas: No requieren técnico, no permiten rootkits y no desactivan integridad.',
    why_wrong: [
      'Incorrecto: "They require a Tier-1 technician to physically visit the substation…" no es lo que dice el texto.',
      'Opción correcta: They execute upgrades via atomic A/B partition swaps and autonomously roll back to the previous validated state within thirty seconds if boot integrity fails.',
      'Incorrecto: "They allow rootkits to modify core system files during runtime to…" no es lo que dice el texto.',
      'Incorrecto: "They disable all boot integrity checks to ensure the appliance always…" no es lo que dice el texto.'
    ],
    human_rule: 'A/B = dos particiones y una de respaldo.',
    trigger_anchor: 'failed upgrade ➔ A/B swap',
    spanglish_trap: 'Pensar que hay que intervenir a mano.',
    tip_es: 'Immutable OS = Read-only root filesystem + Atomic A/B partition swaps con rollback automático.',
    evidence_quote: 'Upgrades are executed via atomic A/B partition swaps: if a boot integrity check fails after an update, the appliance autonomously rolls back to the previously validated operating state within thirty seconds.',
    paraphrase_map: 'atomic A/B partition swaps... autonomously rolls back to the previously validated operating state within thirty seconds'
  },
  {
    id: 'read-txt03-prac-q1',
    section: 'R',
    objective: 'R4',
    topic: 'V03',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-03',
    stem: 'Instead of dismissing a user’s timeout complaint with "it’s a feature, not a bug", what should support engineers do?',
    options: [
      'Immediately disable multi-factor authentication and session timeouts for the entire organization.',
      'Explain the security threat model that the timeout mitigates (session hijacking) and offer practical workflow alternatives like SSO or persistent browser certificates.',
      'Close the trouble ticket without replying since the software is working as designed.',
      'Blame the product management team for introducing usability friction.'
    ],
    answer: 1,
    why_correct: '• Pista: Explicar el modelo de amenaza y dar alternativas.\n• Significado: Explicar qué evita el timeout (secuestro de sesión) y ofrecer alternativas.\n• Descartas: Desactivar MFA, cerrar el ticket o culpar a producto no resuelve.',
    why_wrong: [
      'Incorrecto: Desactivar MFA es inseguro.',
      'Opción correcta: Explicar la amenaza y ofrecer alternativas.',
      'Incorrecto: Cerrar sin responder frustra al usuario.',
      'Incorrecto: Culpar a producto no ayuda.'
    ],
    human_rule: 'explicar el porqué + alternativas.',
    trigger_anchor: 'dismiss complaint ➔ explain threat',
    spanglish_trap: 'Creer que "funciona como se diseñó" es respuesta suficiente.',
    tip_es: 'Ante quejas por controles de seguridad: explicar el riesgo mitigado + dar alternativa práctica (SSO / certificados).',
    evidence_quote: 'Rather than reciting rigid policy jargon, support engineers ought to explain the precise threat model that the feature mitigates, while offering practical workflow alternatives, such as implementing persistent browser certificates or single sign-on integration.',
    paraphrase_map: 'explain the precise threat model that the feature mitigates, while offering practical workflow alternatives'
  },
  {
    id: 'read-txt04-prac-q1',
    section: 'R',
    objective: 'R3',
    topic: 'V08',
    difficulty: 2,
    pool: 'practice',
    ref: 'txt-04',
    stem: 'Why have greenfield cloud workloads overwhelmingly adopted Ubuntu Server LTS over traditional proprietary Unix systems?',
    options: [
      'Because proprietary Unix systems lack storage volume management and kernel virtualization.',
      'Because Ubuntu LTS avoids proprietary hardware lock-in and high licensing costs while integrating seamlessly with containers, Kubernetes, and rapid community security patching.',
      'Because Ubuntu LTS only releases security patches once every five years.',
      'Because telecommunications providers never used Unix in legacy mainframes.'
    ],
    answer: 1,
    why_correct: '• Pista: Por qué cargas cloud nuevas usan Ubuntu LTS.\n• Significado: Ubuntu LTS evita el vendor lock-in de hardware propietario.\n• Descartas: No es por almacenamiento, parches limitados o telecomunicaciones.',
    why_wrong: [
      'Incorrecto: "Because proprietary Unix systems lack storage volume management and…" no es lo que dice el texto.',
      'Opción correcta: Because Ubuntu LTS avoids proprietary hardware lock-in and high licensing costs while integrating seamlessly with containers, Kubernetes, and rapid community security patching.',
      'Incorrecto: "Because Ubuntu LTS only releases security patches once every five…" no es lo que dice el texto.',
      'Incorrecto: "Because telecommunications providers never used Unix in legacy…" no es lo que dice el texto.'
    ],
    human_rule: 'abierto = sin atarse al hardware.',
    trigger_anchor: 'greenfield ➔ avoids lock-in',
    spanglish_trap: 'Atribuirlo a un solo factor técnico.',
    tip_es: 'Ubuntu LTS vs Proprietary Unix = sin hardware lock-in + integración nativa con Kubernetes/IaC + parches rápidos.',
    evidence_quote: 'However, their slow release cadence, proprietary hardware lock-in, and exorbitant licensing models have made scaling modern cloud-native microservices economically prohibitive. In contrast, Ubuntu Server LTS combines the stability of Debian with predictable five-year security maintenance cycles. Its seamless integration with container runtimes, Kubernetes orchestrators, and automated infrastructure-as-code tooling',
    paraphrase_map: 'proprietary hardware lock-in, and exorbitant licensing models... seamless integration with container runtimes, Kubernetes orchestrators'
  },

  // =========================================================================
  // CONTRASTIVE PAIRS & ENGLISH FOR IT 2 HIGH-YIELD GRAMMAR (G16–G29)
  // =========================================================================
  {
    id: 'exp-g16-01',
    section: 'UE',
    objective: 'UE1',
    topic: 'G16',
    difficulty: 2,
    pool: 'practice',
    ref: null,
    stem: 'By the time the external security auditors arrive tomorrow morning, the legacy database migration ______ completed due to the storage bottleneck.',
    options: [
      'will not have been',
      'is not going to',
      'does not have',
      'would not be'
    ],
    answer: 0,
    why_correct: '• Pista: "By the time… arrive tomorrow" fija un momento futuro y dice que aún no estará hecho.\n• Regla: "no habrá sido completada para entonces" ➔ will not have been + 3.ª forma.\n• Descartas: "is not going to" no lleva la 3.ª forma; "does not have" y "would not be" no encajan.',
    why_wrong: [
      'Opción correcta: "will not have been completed" = "no habrá sido completada".',
      'Incorrecto: "is not going to completed" no es una forma válida.',
      'Incorrecto: "does not have" no encaja con "completed".',
      'Incorrecto: "would not be" no marca "para entonces".'
    ],
    tip_es: 'By the time + evento futuro ➔ will (not) have + V3 (o "will not have been + V3" en pasiva).',
    human_rule: '"No habrá terminado para entonces" ➔ will not have been + 3.ª forma.',
    spanglish_trap: 'Elegir "is not going to" por parecerse a "no va a estar". Con "para entonces", will not have been.',
    trigger_anchor: 'By the time the auditors arrive tomorrow ➔ migration ______ completed ➔ will not have been'
  },
  {
    id: 'exp-g16-02',
    section: 'UE',
    objective: 'UE3',
    topic: 'G16',
    difficulty: 2,
    pool: 'practice',
    ref: null,
    stem: 'The DevOps squad ______ the v4.2 release this Friday as originally scheduled; the change advisory board froze all deployments.',
    options: [
      'isn’t deploying',
      'not deploys',
      'won’t have deploy',
      'hasn’t deployed tomorrow'
    ],
    answer: 0,
    why_correct: '• Pista: "this Friday as originally scheduled; the board froze all deployments": un plan que ya se canceló.\n• Regla: plan ya decidido ➔ presente continuo negativo (isn\'t deploying).\n• Descartas: "not deploys" y "won\'t have deploy" no existen; "hasn\'t deployed tomorrow" mezcla tiempos.',
    why_wrong: [
      'Opción correcta: "isn\'t deploying" = "no va a desplegar" (plan cancelado).',
      'Incorrecto: "not deploys" no es una forma válida.',
      'Incorrecto: "won\'t have deploy" no es una forma válida.',
      'Incorrecto: "hasn\'t deployed tomorrow" mezcla pasado con futuro.'
    ],
    tip_es: 'Plan de calendario cancelado ("this Friday") = Present Continuous negativo ("isn\'t deploying / aren\'t releasing").',
    human_rule: 'Plan ya decidido (o cancelado) ➔ is / are (not) + -ing.',
    spanglish_trap: 'Usar not deploys como en español "no despliega". En inglés: isn\'t deploying.',
    trigger_anchor: '…this Friday as scheduled; the board froze deployments ➔ isn\'t deploying'
  },
  {
    id: 'exp-g19-01',
    section: 'UE',
    objective: 'UE1',
    topic: 'G19',
    difficulty: 2,
    pool: 'practice',
    ref: null,
    stem: 'Before launching the public banking API, we must have our smart contracts ______ by an independent cybersecurity firm.',
    options: [
      'audited',
      'to audit',
      'auditing',
      'audit'
    ],
    answer: 0,
    why_correct: '• Pista: "we must have our smart contracts ______ by an independent firm": otros los auditan, no nosotros.\n• Regla: have + cosa + 3.ª forma ➔ "hacer que los auditen" (audited).\n• Descartas: "to audit", auditing y audit no encajan con la cosa como objeto.',
    why_wrong: [
      'Opción correcta: "have our contracts audited" = "hacer que nos auditen los contratos".',
      'Incorrecto: "to audit" no va después de have + cosa.',
      'Incorrecto: auditing dice que los contratos están auditando.',
      'Incorrecto: audit (verbo base) no se usa con una cosa como objeto.'
    ],
    tip_es: 'Causativo: ¿El objeto es una COSA que recibe la acción ("our smart contracts")? ➔ Participio Pasado (-ed / V3).',
    human_rule: 'have + cosa + 3.ª forma ➔ "mandar hacer algo".',
    spanglish_trap: 'Poner el verbo base. Si la cosa recibe la acción, 3.ª forma.',
    trigger_anchor: 'we must have our smart contracts ______ by an independent firm ➔ audited'
  },
  {
    id: 'exp-g19-02',
    section: 'UE',
    objective: 'UE1',
    topic: 'G19',
    difficulty: 3,
    pool: 'practice',
    ref: null,
    stem: 'The incident commander had the on-call database administrator ______ the replica lag metrics every five minutes.',
    options: [
      'verify',
      'to verify',
      'verified',
      'verifies'
    ],
    answer: 0,
    why_correct: '• Pista: "had the DBA ______ the metrics": se pide que una persona haga algo.\n• Regla: have + persona + verbo base ➔ "hizo que verificara" (verify).\n• Descartas: "to verify", verified y verifies no van después de have + persona.',
    why_wrong: [
      'Opción correcta: "had the DBA verify" = "hizo que el DBA verificara".',
      'Incorrecto: después de have + persona no va "to".',
      'Incorrecto: verified es la 3.ª forma, y aquí la persona actúa.',
      'Incorrecto: verifies lleva -s; el verbo va tal cual.'
    ],
    tip_es: 'Contraste letal B2: HAVE + persona + VERBO BASE ("had the DBA verify") vs GET + persona + TO + VERBO ("got the DBA to verify").',
    human_rule: 'have + persona + verbo base.',
    spanglish_trap: 'Poner to o la 3.ª forma. Con una persona que actúa, verbo base.',
    trigger_anchor: 'had the on-call DBA ______ the lag metrics ➔ verify'
  },
  {
    id: 'exp-g20-01',
    section: 'UE',
    objective: 'UE4',
    topic: 'G20',
    difficulty: 2,
    pool: 'practice',
    ref: null,
    stem: '______ all compromised session tokens from the Redis cache, the SOC analyst triggered a mandatory password reset.',
    options: [
      'Having purged',
      'Purged',
      'Being purged',
      'To have purged'
    ],
    answer: 0,
    why_correct: '• Pista: después del hueco viene "all compromised session tokens", y la frase sigue con otra acción.\n• Regla: una acción ya terminada antes de otra ➔ Having + 3.ª forma (Having purged).\n• Descartas: Purged, "Being purged" y "To have purged" no se usan así.',
    why_wrong: [
      'Opción correcta: "Having purged all tokens…" = "tras purgar todos los tokens…".',
      'Incorrecto: Purged solo no indica que fue antes (y haría que los tokens purguen).',
      'Incorrecto: "Being purged" diría que los tokens estaban siendo purgados.',
      'Incorrecto: "To have purged" indica un propósito, no algo ya hecho.'
    ],
    tip_es: '¿Qué pasó primero y lo hizo activamente el mismo sujeto? ➔ "Having + V3" ("Having purged").',
    human_rule: '"Tras hacer X, hizo Y" ➔ Having + 3.ª forma, …',
    spanglish_trap: 'Poner solo la 3.ª forma. Para marcar que ya terminó antes, Having + 3.ª forma.',
    trigger_anchor: '______ all compromised tokens, the analyst triggered a reset ➔ Having purged'
  },
  {
    id: 'exp-g21-01',
    section: 'UE',
    objective: 'UE5',
    topic: 'G21',
    difficulty: 2,
    pool: 'practice',
    ref: null,
    stem: 'What actually saturated the core firewall ______ a misconfigured diagnostic script polling the API in an infinite loop.',
    options: [
      'was',
      'were',
      'it was',
      'that was'
    ],
    answer: 0,
    why_correct: '• Pista: "What actually saturated the core firewall ______ a misconfigured script": falta el verbo de la frase.\n• Regla: What + verbo + was + lo destacado.\n• Descartas: were no concuerda; "it was" y "that was" no forman esta estructura.',
    why_wrong: [
      'Opción correcta: "What saturated the firewall was a script" = "lo que saturó el firewall fue un script".',
      'Incorrecto: were es plural, y la frase es singular.',
      'Incorrecto: "it was" duplica el sujeto.',
      'Incorrecto: "that was" no forma esta estructura.'
    ],
    tip_es: 'En "What [pasó] WAS [causa]", jamás metas un "it" antes de "was".',
    human_rule: '"Lo que… fue…" ➔ What + verbo + was + lo destacado.',
    spanglish_trap: 'Añadir it o that. Después de What + verbo, va was.',
    trigger_anchor: 'What saturated the core firewall ______ a misconfigured script ➔ was'
  },
  {
    id: 'exp-g24-01',
    section: 'UE',
    objective: 'UE5',
    topic: 'G24',
    difficulty: 2,
    pool: 'practice',
    ref: null,
    stem: '______ an attacker manages to intercept the encrypted payload in transit, they will not be able to decrypt it without the hardware security module key.',
    options: [
      'Even if',
      'Even though',
      'Despite',
      'Whereas'
    ],
    answer: 0,
    why_correct: '• Pista: "an attacker manages to intercept…": es algo que podría pasar.\n• Regla: algo hipotético ➔ Even if.\n• Descartas: "Even though" es para hechos; Despite va con una cosa; Whereas compara.',
    why_wrong: [
      'Opción correcta: "Even if an attacker manages…" = "aunque un atacante consiga…".',
      'Incorrecto: "Even though" es para un hecho real.',
      'Incorrecto: Despite va con una cosa o -ing.',
      'Incorrecto: Whereas compara dos cosas.'
    ],
    tip_es: '¿Es un escenario hipotético ("si llegara a pasar... will not")? ➔ EVEN IF. ¿Es un hecho 100% real que ya pasa? ➔ EVEN THOUGH.',
    human_rule: 'Algo que podría pasar ➔ even if.',
    spanglish_trap: 'Elegir Even though. Si no ha pasado, Even if.',
    trigger_anchor: '______ an attacker manages to intercept the payload ➔ Even if'
  },
  {
    id: 'exp-g28-01',
    section: 'UE',
    objective: 'UE4',
    topic: 'G28',
    difficulty: 2,
    pool: 'practice',
    ref: null,
    stem: 'The microservice latency spike occurred ______ the connection pool limit had been hardcoded to five threads.',
    options: [
      'because',
      'due to',
      'because of',
      'owing to'
    ],
    answer: 0,
    why_correct: '• Pista: después del hueco viene una frase completa ("the connection pool limit had been hardcoded").\n• Regla: "porque" + frase completa ➔ because.\n• Descartas: "due to", "because of" y "owing to" van con una cosa.',
    why_wrong: [
      'Opción correcta: "because the limit had been hardcoded".',
      'Incorrecto: "due to" va con una cosa.',
      'Incorrecto: "because of" va con una cosa.',
      'Incorrecto: "owing to" va con una cosa.'
    ],
    tip_es: 'Mira qué hay después del hueco: ¿Hay un VERBO conjugado ("had been")? ➔ Usa BECAUSE / SINCE. ¿Solo hay un SUSTANTIVO? ➔ Usa DUE TO / BECAUSE OF.',
    human_rule: 'Frase completa ➔ because.',
    spanglish_trap: 'Elegir because of. Con quién + qué hizo, because.',
    trigger_anchor: 'latency spike occurred ______ the pool limit had been hardcoded ➔ because'
  }
];
