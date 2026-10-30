import { Question } from '../../types';

/**
 * Modular Question Bank: Cloud & Cybersecurity Technical Vocabulary Pack
 * 
 * High-yield B2 terminology for V01, V04, V05, and V07.
 * Covers Cloud Infrastructure, Social Engineering Triage, InfoSec Governance, and Networking Protocols.
 * 100% exclusive to practice drills; isolated from official mock exam questions.
 */
export const VOCAB_CLOUD_SECURITY_BANK: Question[] = [
  {
    "id": "bank-v01-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "V01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "To reduce egress bandwidth costs and improve global user response times, the cloud architect recommended provisioning a ______ layer close to edge locations.",
    "options": [
      "Content Delivery Network (CDN)",
      "Storage Area Network (SAN)",
      "Relational Database Management System",
      "Virtual Machine Monitor"
    ],
    "answer": 0,
    "why_correct": "• Pista: se quiere bajar costos de salida y acercar el contenido a los usuarios, en \"edge locations\".\n• Significado: CDN = red que guarda copias del contenido en servidores cercanos al usuario.\n• Descartas: SAN es una red de almacenamiento; RDBMS es una base de datos; VMM es un supervisor de máquinas virtuales.",
    "why_wrong": [
      "Opción correcta: CDN = \"red de entrega de contenido\".",
      "Incorrecto: SAN es una red de almacenamiento, no acerca el contenido a los usuarios.",
      "Incorrecto: un RDBMS es un sistema de bases de datos relacionales.",
      "Incorrecto: un Virtual Machine Monitor supervisa máquinas virtuales."
    ],
    "tip_es": "Optimización de latencia global y transferencia de salida (egress): la solución es un CDN.",
    "human_rule": "CDN = copias del contenido cerca del usuario ➔ menos latencia y menos salida de datos.",
    "trigger_anchor": "reduce egress costs… a ______ layer close to edge locations ➔ CDN",
    "spanglish_trap": "Elegir SAN por \"red\". La SAN es almacenamiento interno, no entrega contenido.",
    "ref": null
  },
  {
    "id": "bank-v01-02",
    "section": "UE",
    "objective": "UE5",
    "topic": "V01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In a serverless computing architecture, the delay that occurs when a container function is invoked after a prolonged period of inactivity is known as a ______.",
    "options": [
      "hot standby",
      "cold start",
      "buffer overflow",
      "deadlock"
    ],
    "answer": 1,
    "why_correct": "• Pista: se habla del retraso cuando una función serverless se invoca tras mucho tiempo sin uso.\n• Significado: cold start = arranque en frío (la nube tiene que preparar el entorno).\n• Descartas: hot standby es un respaldo ya encendido; buffer overflow y deadlock son otros problemas.",
    "why_wrong": [
      "Incorrecto: hot standby es un respaldo que ya está encendido.",
      "Opción correcta: \"cold start\" = \"arranque en frío\".",
      "Incorrecto: buffer overflow es desbordar una memoria temporal.",
      "Incorrecto: deadlock es un bloqueo mutuo entre procesos."
    ],
    "tip_es": "Latencia inicial tras inactividad en arquitecturas Serverless (Lambdas/Cloud Functions): \"COLD START\".",
    "human_rule": "cold start = el retraso de la primera invocación tras mucho tiempo sin uso.",
    "trigger_anchor": "delay after a long period of inactivity ➔ cold start",
    "spanglish_trap": "Pensar que cold es \"frío\" de temperatura. Aquí es \"sin preparar\".",
    "ref": null
  },
  {
    "id": "bank-v01-03",
    "section": "UE",
    "objective": "UE1",
    "topic": "V01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "A cloud deployment where multiple independent customer organizations share the same underlying hardware resources while maintaining strict logical isolation is termed ______.",
    "options": [
      "single-tenant",
      "bare-metal",
      "multi-tenant",
      "air-gapped"
    ],
    "answer": 2,
    "why_correct": "• Pista: varios clientes comparten el mismo hardware, con aislamiento lógico.\n• Significado: multi-tenant = varios inquilinos (clientes) en la misma infraestructura.\n• Descartas: single-tenant es un solo cliente; bare-metal es hardware sin virtualizar; air-gapped es sin conexión a la red.",
    "why_wrong": [
      "Incorrecto: single-tenant es para un solo cliente.",
      "Incorrecto: bare-metal es un servidor físico sin virtualizar.",
      "Opción correcta: \"multi-tenant\" = \"varios inquilinos\".",
      "Incorrecto: air-gapped es una red sin conexión al exterior."
    ],
    "tip_es": "Infraestructura compartida con aislamiento lógico entre clientes: \"MULTI-TENANT\".",
    "human_rule": "multi-tenant = varios clientes en la misma infraestructura.",
    "trigger_anchor": "multiple customers share the same hardware… ➔ multi-tenant",
    "spanglish_trap": "Confundir tenant con \"tenencia\". Es el \"inquilino\" que usa el servicio.",
    "ref": null
  },
  {
    "id": "bank-v01-04",
    "section": "UE",
    "objective": "UE4",
    "topic": "V01",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The ability of a cloud system to automatically increase or decrease compute capacity in direct proportion to real-time workload fluctuations is referred to as ______.",
    "options": [
      "virtualization",
      "redundancy",
      "persistence",
      "elasticity"
    ],
    "answer": 3,
    "why_correct": "• Pista: el sistema aumenta o reduce la capacidad automáticamente según la carga.\n• Significado: elasticity = elasticidad (se ajusta en tiempo real).\n• Descartas: virtualization crea máquinas virtuales; redundancy es tener respaldos; persistence es conservar datos.",
    "why_wrong": [
      "Incorrecto: virtualization es crear máquinas virtuales.",
      "Incorrecto: redundancy es tener respaldos de reserva.",
      "Incorrecto: persistence es conservar los datos.",
      "Opción correcta: \"elasticity\" = \"elasticidad\"."
    ],
    "tip_es": "Ajuste dinámico automático de recursos según demanda en tiempo real: \"ELASTICITY\".",
    "human_rule": "elasticity = subir y bajar capacidad según la carga, en tiempo real.",
    "trigger_anchor": "automatically increase or decrease capacity ➔ elasticity",
    "spanglish_trap": "Confundir elasticity con scalability. Elasticity es automática y de ida y vuelta.",
    "ref": null
  },
  {
    "id": "bank-v04-01",
    "section": "UE",
    "objective": "UE3",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The attacker called the helpdesk claiming to be the chief financial officer on an urgent business trip and demanded an immediate password reset; this deception technique is known as ______.",
    "options": [
      "pretexting",
      "brute-forcing",
      "SQL injection",
      "eavesdropping"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"calling as CFO ... urgent password reset\": inventa una identidad.\n• Significado: pretexting = inventar una historia falsa para engañar.\n• Descartas: brute-forcing adivina contraseñas; SQL injection ataca bases de datos; eavesdropping escucha.",
    "why_wrong": [
      "Opción correcta: pretexting = inventar un pretexto falso.",
      "Incorrecto: brute-forcing prueba contraseñas.",
      "Incorrecto: SQL injection ataca bases de datos.",
      "Incorrecto: eavesdropping = espiar comunicaciones."
    ],
    "tip_es": "Crear una historia ficticia urgente para engañar al helpdesk: \"PRETEXTING\".",
    "human_rule": "pretexting = historia falsa.",
    "trigger_anchor": "fake identity ➔ pretexting",
    "spanglish_trap": "Traducir pretexting como \"excusa\".",
    "ref": null
  },
  {
    "id": "bank-v04-02",
    "section": "UE",
    "objective": "UE3",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Employees received fraudulent SMS messages containing malicious URLs designed to harvest two-factor authentication tokens; this mobile vector is specifically termed ______.",
    "options": [
      "vishing",
      "smishing",
      "tailgating",
      "shoulder surfing"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"SMS ... malicious URLs\": ataque por mensaje de texto.\n• Significado: smishing = phishing por SMS.\n• Descartas: vishing es voz; tailgating entrar tras alguien; shoulder surfing espiar pantalla.",
    "why_wrong": [
      "Incorrecto: vishing es por llamada de voz.",
      "Opción correcta: smishing = phishing por SMS.",
      "Incorrecto: tailgating es colarse por una puerta.",
      "Incorrecto: shoulder surfing es mirar la pantalla."
    ],
    "tip_es": "Ataques por SMS = \"SMISHING\" (SMS + Phishing); ataques por llamadas telefónicas = \"VISHING\".",
    "human_rule": "SMS = smishing. Voice = vishing.",
    "trigger_anchor": "SMS ➔ smishing",
    "spanglish_trap": "Mezclar smishing y vishing.",
    "ref": null
  },
  {
    "id": "bank-v04-03",
    "section": "UE",
    "objective": "UE2",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "When an unknown caller requests urgent credential resets while creating an artificial sense of panic, the helpdesk agent should recognize this as a typical ______ in social engineering.",
    "options": [
      "fallback plan",
      "green light",
      "red flag",
      "silver bullet"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"urgent credential resets ... artificial panic\": señal de alerta.\n• Significado: red flag = señal de alarma.\n• Descartas: fallback plan es plan B; green light es aprobación; silver bullet es solución mágica.",
    "why_wrong": [
      "Incorrecto: fallback plan = plan B.",
      "Incorrecto: green light = permiso.",
      "Opción correcta: red flag = señal de alerta.",
      "Incorrecto: silver bullet = solución mágica."
    ],
    "tip_es": "Indicio sospechoso de ataque de ingeniería social: siempre es una \"RED FLAG\".",
    "human_rule": "red flag = señal de peligro.",
    "trigger_anchor": "panic + urgency ➔ red flag",
    "spanglish_trap": "Pensar que red flag es una bandera.",
    "ref": null
  },
  {
    "id": "bank-v04-04",
    "section": "UE",
    "objective": "UE5",
    "topic": "V04",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Following an authorized person closely through an electronic security turnstile without scanning a personal badge is called ______.",
    "options": [
      "whaling",
      "phishing",
      "dumpster diving",
      "tailgating"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"following an authorized person closely ... without scanning\": colarse.\n• Significado: tailgating = seguir a alguien para entrar sin autorización.\n• Descartas: whaling, phishing y dumpster diving son otros ataques.",
    "why_wrong": [
      "Incorrecto: whaling ataca a ejecutivos.",
      "Incorrecto: phishing es engaño digital.",
      "Incorrecto: dumpster diving es buscar en la basura.",
      "Opción correcta: tailgating = colarse tras otra persona."
    ],
    "tip_es": "Entrar a la fuerza o sigilosamente detrás de alguien sin credencial: \"TAILGATING\".",
    "human_rule": "tailgating = entrar pegado a otro.",
    "trigger_anchor": "turnstile without badge ➔ tailgating",
    "spanglish_trap": "Pensar que tailgating es solo de coches.",
    "ref": null
  },
  {
    "id": "bank-v05-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The security policy of granting each user and process only the minimal permissions required to perform their designated duties is known as the principle of ______.",
    "options": [
      "least privilege",
      "defense in depth",
      "non-repudiation",
      "separation of concerns"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"minimal permissions required\": solo lo necesario.\n• Significado: least privilege = mínimo privilegio, cada usuario solo lo que necesita.\n• Descartas: defense in depth son capas; non-repudiation es no negar; separation of concerns separa responsabilidades.",
    "why_wrong": [
      "Opción correcta: least privilege = mínimo privilegio.",
      "Incorrecto: defense in depth = defensa en capas.",
      "Incorrecto: non-repudiation = no poder negar una acción.",
      "Incorrecto: separation of concerns divide tareas de diseño."
    ],
    "tip_es": "Solo los permisos mínimos indispensables para operar: \"PRINCIPLE OF LEAST PRIVILEGE\".",
    "human_rule": "solo lo necesario = least privilege.",
    "trigger_anchor": "minimal permissions ➔ least privilege",
    "spanglish_trap": "Traducir privilege como \"privilegio de lujo\".",
    "ref": null
  },
  {
    "id": "bank-v05-02",
    "section": "UE",
    "objective": "UE1",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "An architectural paradigm that assumes the network perimeter is inherently compromised and requires strict identity verification for every request is termed ______.",
    "options": [
      "Air Gap",
      "Zero Trust",
      "Open Access",
      "Perimeter Security"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"perimeter is compromised ... verify every request\": no confiar en nadie.\n• Significado: Zero Trust = verificar cada petición, sin confianza implícita.\n• Descartas: Air Gap aísla físicamente; Open Access no controla; Perimeter Security confía en el interior.",
    "why_wrong": [
      "Incorrecto: Air Gap aísla la red físicamente.",
      "Opción correcta: Zero Trust = nunca confiar, siempre verificar.",
      "Incorrecto: Open Access no verifica.",
      "Incorrecto: Perimeter Security confía en el interior."
    ],
    "tip_es": "Filosofía \"Never trust, always verify\": arquitectura \"ZERO TRUST\".",
    "human_rule": "Zero Trust = verificar siempre.",
    "trigger_anchor": "verify every request ➔ Zero Trust",
    "spanglish_trap": "Pensar que zero trust significa \"sin seguridad\".",
    "ref": null
  },
  {
    "id": "bank-v05-03",
    "section": "UE",
    "objective": "UE3",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "To satisfy regulatory compliance requirements, all administrative database queries must be preserved in an immutable ______ for retrospective forensic inspection.",
    "options": [
      "honeypot",
      "sandbox",
      "audit trail",
      "routing table"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"immutable ______ for forensic inspection\": registro que no se altera.\n• Significado: audit trail = rastro de auditoría, registro de acciones.\n• Descartas: honeypot es señuelo; sandbox aísla programas; routing table dirige tráfico.",
    "why_wrong": [
      "Incorrecto: honeypot es un señuelo.",
      "Incorrecto: sandbox es un entorno aislado.",
      "Opción correcta: audit trail = registro de auditoría.",
      "Incorrecto: routing table decide rutas de red."
    ],
    "tip_es": "Registro inmutable de acciones para auditorías y forense: \"AUDIT TRAIL\".",
    "human_rule": "registro para auditar = audit trail.",
    "trigger_anchor": "preserved for forensic ➔ audit trail",
    "spanglish_trap": "Traducir trail como \"sendero\".",
    "ref": null
  },
  {
    "id": "bank-v05-04",
    "section": "UE",
    "objective": "UE4",
    "topic": "V05",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The cryptographic assurance that a sender cannot falsely deny having generated or transmitted a specific electronic document is known as ______.",
    "options": [
      "obfuscation",
      "confidentiality",
      "availability",
      "non-repudiation"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"sender cannot falsely deny\": no puede negarlo.\n• Significado: non-repudiation = no repudio, no se puede negar haber enviado algo.\n• Descartas: obfuscation oculta; confidentiality protege lectura; availability asegura acceso.",
    "why_wrong": [
      "Incorrecto: obfuscation = ocultar código.",
      "Incorrecto: confidentiality = que nadie no autorizado lea.",
      "Incorrecto: availability = que esté disponible.",
      "Opción correcta: non-repudiation = no se puede negar."
    ],
    "tip_es": "Imposibilidad de negar la autoría de una firma digital: \"NON-REPUDIATION\".",
    "human_rule": "no negar = non-repudiation.",
    "trigger_anchor": "cannot deny ➔ non-repudiation",
    "spanglish_trap": "Confundir con confidencialidad.",
    "ref": null
  },
  {
    "id": "bank-v07-01",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "When video conferencing users experience audio dropouts and uneven voice cadence due to packet arrival variance, the root cause is excessive network ______.",
    "options": [
      "jitter",
      "throughput",
      "bandwidth",
      "duplex"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"audio dropouts and uneven voice cadence due to packet arrival variance\": variación en la llegada.\n• Significado: jitter = variación del retraso entre paquetes.\n• Descartas: throughput y bandwidth miden cantidad; duplex es el modo de comunicación.",
    "why_wrong": [
      "Opción correcta: jitter = variación del retraso.",
      "Incorrecto: throughput = tasa real de datos.",
      "Incorrecto: bandwidth = capacidad máxima.",
      "Incorrecto: duplex = modo de transmisión."
    ],
    "tip_es": "Variación irregular en el tiempo de llegada de paquetes en tiempo real: \"JITTER\".",
    "human_rule": "voz entrecortada = jitter.",
    "trigger_anchor": "uneven arrival ➔ jitter",
    "spanglish_trap": "Confundir jitter con latencia.",
    "ref": null
  },
  {
    "id": "bank-v07-02",
    "section": "UE",
    "objective": "UE4",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The maximum size of a protocol data unit that can be transmitted across a network layer without being fragmented is defined as the ______.",
    "options": [
      "Time to Live (TTL)",
      "Maximum Transmission Unit (MTU)",
      "Round-Trip Time (RTT)",
      "Subnet Mask"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"maximum size ... without being fragmented\": tamaño máximo de unidad.\n• Significado: MTU = Maximum Transmission Unit.\n• Descartas: TTL limita saltos; RTT mide ida y vuelta; Subnet Mask define red.",
    "why_wrong": [
      "Incorrecto: TTL = tiempo de vida.",
      "Opción correcta: MTU = tamaño máximo sin fragmentar.",
      "Incorrecto: RTT = tiempo de ida y vuelta.",
      "Incorrecto: Subnet Mask define la subred."
    ],
    "tip_es": "Tamaño máximo de paquete antes de requerir fragmentación IP: \"MTU\" (Maximum Transmission Unit).",
    "human_rule": "sin fragmentar = MTU.",
    "trigger_anchor": "maximum size ➔ MTU",
    "spanglish_trap": "Confundir MTU con ancho de banda.",
    "ref": null
  },
  {
    "id": "bank-v07-03",
    "section": "UE",
    "objective": "UE5",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Unlike OSPF, which operates as an Interior Gateway Protocol within a single autonomous system, ______ is the exterior routing protocol that exchanges routing information across the global Internet.",
    "options": [
      "Dynamic Host Configuration Protocol (DHCP)",
      "Address Resolution Protocol (ARP)",
      "Border Gateway Protocol (BGP)",
      "Network Time Protocol (NTP)"
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Unlike OSPF ... exterior routing protocol ... autonomous systems\": BGP.\n• Significado: BGP = Border Gateway Protocol.\n• Descartas: DHCP asigna IPs; ARP resuelve MAC; NTP sincroniza la hora.",
    "why_wrong": [
      "Incorrecto: DHCP asigna direcciones.",
      "Incorrecto: ARP traduce IP a MAC.",
      "Opción correcta: BGP intercambia rutas entre sistemas autónomos.",
      "Incorrecto: NTP sincroniza relojes."
    ],
    "tip_es": "Enrutamiento exterior global entre sistemas autónomos en Internet: \"BGP\".",
    "human_rule": "entre sistemas autónomos = BGP.",
    "trigger_anchor": "exterior routing ➔ BGP",
    "spanglish_trap": "Confundir BGP con OSPF.",
    "ref": null
  },
  {
    "id": "bank-v07-04",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "To segment enterprise traffic logically over a shared physical switch infrastructure without physical recabling, engineers configure ______ tagging.",
    "options": [
      "DNS",
      "NAT",
      "VPN",
      "VLAN"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"segment traffic logically over shared switches\": etiquetas.\n• Significado: VLAN tagging = redes lógicas virtuales.\n• Descartas: DNS resuelve nombres; NAT traduce direcciones; VPN cifra túneles.",
    "why_wrong": [
      "Incorrecto: DNS resuelve nombres.",
      "Incorrecto: NAT traduce direcciones.",
      "Incorrecto: VPN crea túneles.",
      "Opción correcta: VLAN segmenta lógicamente."
    ],
    "tip_es": "Segmentación lógica de tráfico en switches de capa 2: \"VLAN\" (Virtual Local Area Network).",
    "human_rule": "segmentar sin recablear = VLAN.",
    "trigger_anchor": "logical segmentation ➔ VLAN",
    "spanglish_trap": "Confundir VLAN con VPN.",
    "ref": null
  }
];
