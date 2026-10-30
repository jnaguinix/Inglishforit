export interface FalseFriendEntry {
  id: string;
  category: 'cognate' | 'preposition' | 'verb_collocation';
  term: string;
  literalSpanishTrap: string; // What a Spanish speaker mistakenly thinks it means
  realItMeaning: string;      // The actual meaning in an IT/engineering context
  howToSayLiteralInEnglish: string; // How to actually say the intended Spanish thought
  goldenRule: string;         // The 3-second mental anchor to avoid the trap
  workplaceExample: {
    en: string;
    es: string;
    highlight: string;
  };
  fastDrill: {
    stem: string;
    options: [string, string, string, string];
    answer: number;
    quickWhy: string;
  };
}

export const FALSE_FRIENDS_DATA: FalseFriendEntry[] = [
  {
    id: 'ff-compromise',
    category: 'cognate',
    term: 'Compromise / Compromised',
    literalSpanishTrap: 'Pensar que significa "hacer un compromiso" o "quedar comprometido a algo".',
    realItMeaning: 'Vulnerar, quebrantar o poner en peligro la seguridad de un servidor, credencial o sistema.',
    howToSayLiteralInEnglish: 'Para decir "comprometerse a entregar", usa "commit to", "agree on" o "make a commitment".',
    goldenRule: 'En ciberseguridad, "compromised host" = servidor vulnerado o hackeado, jamás "servidor comprometido con la causa".',
    workplaceExample: {
      en: 'The security team confirmed that the administrative workstation had been compromised by a phishing payload.',
      es: 'El equipo de seguridad confirmó que la estación de trabajo administrativa había sido vulnerada por una carga de phishing.',
      highlight: 'had been compromised'
    },
    fastDrill: {
      stem: 'During the SOC incident triage, the lead analyst confirmed: "The domain controller was _______ after an unauthorized NTLM hash was detected."',
      options: ['committed', 'compromised', 'promised', 'engaged'],
      answer: 1,
      quickWhy: 'En seguridad de TI, un activo atacado y vulnerado es "compromised". "Committed" significa comprometido moralmente o persistido en base de datos.'
    }
  },
  {
    id: 'ff-actual',
    category: 'cognate',
    term: 'Actual / Actually',
    literalSpanishTrap: 'Pensar que significa "actual" (del momento presente) o "actualmente".',
    realItMeaning: 'Real, verdadero, efectivo, de hecho (en contraste con lo estimado o teórico).',
    howToSayLiteralInEnglish: 'Para decir "actual / en este momento", usa "current", "present" o "currently / right now".',
    goldenRule: 'Actual = Real/Verdadero. Current = Del momento actual. (Actual vs. Expected results en QA).',
    workplaceExample: {
      en: 'The actual throughput in production was 1,200 req/s, far below the theoretical benchmark.',
      es: 'El rendimiento real en producción fue de 1.200 req/s, muy por debajo de la prueba teórica.',
      highlight: 'actual throughput'
    },
    fastDrill: {
      stem: 'In the QA bug report, the tester documented the discrepancy between the expected behavior and the _______ behavior observed in the staging cluster.',
      options: ['actual', 'actualized', 'current-day', 'presential'],
      answer: 0,
      quickWhy: 'En pruebas de software (QA), siempre se compara "Expected behavior" con "Actual behavior" (comportamiento real).'
    }
  },
  {
    id: 'ff-eventually',
    category: 'cognate',
    term: 'Eventually',
    literalSpanishTrap: 'Pensar que significa "eventualmente" (de vez en cuando, ocasionalmente o si acaso).',
    realItMeaning: 'Al final, a la larga, con el tiempo, indefectiblemente tras una serie de sucesos.',
    howToSayLiteralInEnglish: 'Para decir "de vez en cuando", usa "occasionally" o "from time to time". Para "posiblemente", usa "possibly".',
    goldenRule: 'Eventually = "Al final de todo" (garantía de que ocurrirá con el tiempo).',
    workplaceExample: {
      en: 'Although the failover node took four minutes to synchronize, all traffic was eventually rerouted.',
      es: 'Aunque el nodo de respaldo tardó cuatro minutos en sincronizarse, todo el tráfico fue finalmente redirigido.',
      highlight: 'was eventually rerouted'
    },
    fastDrill: {
      stem: 'After exhausting all automated retries, the distributed database _______ established consensus across all quorum replicas.',
      options: ['eventually', 'occasionally', 'casually', 'rarely'],
      answer: 0,
      quickWhy: '"Eventually" indica que, tras el proceso, finalmente se logró. En bases de datos distribuidas se llama "Eventual consistency" (consistencia eventual).'
    }
  },
  {
    id: 'ff-attend-assist',
    category: 'cognate',
    term: 'Attend vs. Assist',
    literalSpanishTrap: 'Decir "I need to assist the sprint planning meeting" queriendo decir "asistir/estar presente".',
    realItMeaning: 'Attend = Estar presente / acudir (a una reunión, conferencia). Assist = Ayudar / dar soporte a alguien.',
    howToSayLiteralInEnglish: '"Asistir a reunión" = "attend the meeting". "Asistir/ayudar a un usuario" = "assist a user".',
    goldenRule: 'Attend = Ir a un evento. Assist = Ayudar (dar asistencia técnica).',
    workplaceExample: {
      en: 'Every backend engineer must attend the daily standup, while the Tier-2 engineer assists the client with SSL configuration.',
      es: 'Cada ingeniero backend debe asistir a la reunión diaria, mientras el ingeniero de Nivel 2 asiste (ayuda) al cliente con la configuración de SSL.',
      highlight: 'attend the daily standup'
    },
    fastDrill: {
      stem: 'Due to a mandatory PCI-DSS compliance briefing, all infrastructure leads are required to _______ the virtual conference room at 10:00 AM.',
      options: ['assist', 'attend', 'concur', 'witness'],
      answer: 1,
      quickWhy: 'Para estar presente en una reunión o sesión se usa "attend". "Assist" significaría prestar ayuda a la sala.'
    }
  },
  {
    id: 'ff-sensible-sensitive',
    category: 'cognate',
    term: 'Sensible vs. Sensitive',
    literalSpanishTrap: 'Decir "sensible data" queriendo decir "datos confidenciales/sensibles".',
    realItMeaning: 'Sensitive = Confidencial, delicado, susceptible a filtraciones. Sensible = Sensato, razonable, con sentido común.',
    howToSayLiteralInEnglish: 'Datos sensibles = "sensitive data / sensitive information". Política sensata = "sensible policy".',
    goldenRule: 'Sensitive = Secreto/Delicado (GDPR, passwords, PII). Sensible = Sentido común.',
    workplaceExample: {
      en: 'Encrypting sensitive customer credentials at rest is a sensible security practice for cloud microservices.',
      es: 'Cifrar credenciales sensibles de clientes en reposo es una práctica de seguridad sensata para microservicios cloud.',
      highlight: 'sensitive customer credentials'
    },
    fastDrill: {
      stem: 'Under European GDPR regulations, storing unhashed user passwords is a major violation because they constitute _______ personal data.',
      options: ['sensible', 'sensitive', 'sensitizing', 'sentimental'],
      answer: 1,
      quickWhy: 'Información confidencial o protegida es "sensitive data". "Sensible" significa sensato o prudente.'
    }
  },
  {
    id: 'ff-realize-perform',
    category: 'cognate',
    term: 'Realize vs. Perform / Execute',
    literalSpanishTrap: 'Decir "We realized a deployment yesterday" para "realizamos un despliegue".',
    realItMeaning: 'Realize = Darse cuenta de algo (mentalmente) o materializar un sueño. Perform / Execute / Carry out = Realizar una acción técnica.',
    howToSayLiteralInEnglish: 'Realizar un test / despliegue / auditoría = "perform / execute / carry out a deployment".',
    goldenRule: 'Realize = Darse cuenta ("I realized the server was down"). Para acciones técnicas usa "perform" o "execute".',
    workplaceExample: {
      en: 'The DevOps team performed the database schema migration at midnight after realizing the primary disk was almost full.',
      es: 'El equipo de DevOps realizó la migración de esquemas a medianoche tras darse cuenta de que el disco primario estaba casi lleno.',
      highlight: 'performed the database schema migration'
    },
    fastDrill: {
      stem: 'Before releasing the hotfix to production, the QA automation pipeline must _______ a complete suite of end-to-end regression tests.',
      options: ['realize', 'perform', 'actualize', 'perpetrate'],
      answer: 1,
      quickWhy: 'Llevar a cabo pruebas se dice "perform / execute tests". "Realize" significa percatarse o darse cuenta.'
    }
  },
  {
    id: 'ff-notice-notify',
    category: 'cognate',
    term: 'Notice vs. Notify',
    literalSpanishTrap: 'Confundir notar (percibir) con notificar (enviar un correo o alerta).',
    realItMeaning: 'Notice = Darse cuenta, percibir visualmente o por logs. Notify = Avisar formalmente a alguien mediante mensaje o alerta.',
    howToSayLiteralInEnglish: 'Notar = "notice". Notificar a un ingeniero = "notify an engineer".',
    goldenRule: 'You notice a spike in CPU (te das cuenta). PagerDuty notifies the on-call engineer (envía una alerta).',
    workplaceExample: {
      en: 'When the monitoring agent noticed an unhandled exception rate spike, it immediately notified the on-call SRE.',
      es: 'Cuando el agente de monitoreo notó un pico de excepciones no controladas, notificó inmediatamente al SRE de guardia.',
      highlight: 'noticed an unhandled exception'
    },
    fastDrill: {
      stem: 'The database administrator _______ an unusual latency spike in the read-replicas and immediately alerted the network team.',
      options: ['noticed', 'notified', 'anounced', 'advised'],
      answer: 0,
      quickWhy: '"Noticed" significa que se percató del pico. "Notified" requeriría indicar a quién notificó: "notified the team".'
    }
  },
  {
    id: 'ff-disclose',
    category: 'cognate',
    term: 'Disclose / Disclosure',
    literalSpanishTrap: 'Pensar que significa "desclausurar" o "cerrar".',
    realItMeaning: 'Revelar, dar a conocer, divulgar información técnica (ej. Responsible vulnerability disclosure).',
    howToSayLiteralInEnglish: 'Para decir cerrar un ticket o puerto, usa "close", "shut down" o "terminate".',
    goldenRule: 'Disclose = Hacer pública una vulnerabilidad o informe confidencial.',
    workplaceExample: {
      en: 'The ethical hacker responsibly disclosed the zero-day vulnerability to the vendor thirty days before publishing the CVE.',
      es: 'El hacker ético reveló responsablemente la vulnerabilidad de día cero al proveedor treinta días antes de publicar la CVE.',
      highlight: 'responsibly disclosed'
    },
    fastDrill: {
      stem: 'According to industry standard bug-bounty guidelines, researchers agree not to _______ critical exploits until a security patch is released.',
      options: ['disclose', 'enclose', 'conclude', 'occlude'],
      answer: 0,
      quickWhy: 'Divulgar una vulnerabilidad técnica es "disclose" (Responsible Disclosure).'
    }
  },
  {
    id: 'ff-comply-with',
    category: 'preposition',
    term: 'Comply with (¡Nunca "comply to"!)',
    literalSpanishTrap: 'Decir "The software must comply to the standard" traduciendo el "cumplir a/con".',
    realItMeaning: 'Cumplir con una norma, especificación técnica, ley o estándar internacional.',
    howToSayLiteralInEnglish: 'Comply rige exclusivamente WITH: "comply with ISO 27001", "comply with HIPAA".',
    goldenRule: 'Comply WITH | In compliance WITH. (Con "adhere" se usa TO: "adhere TO the standard").',
    workplaceExample: {
      en: 'All cloud microservices processing cardholder data must strictly comply with PCI-DSS guidelines.',
      es: 'Todos los microservicios cloud que procesan datos de tarjetas deben cumplir estrictamente con las directrices PCI-DSS.',
      highlight: 'comply with PCI-DSS'
    },
    fastDrill: {
      stem: 'To pass the external SOC-2 audit, our continuous integration pipelines must strictly comply _______ corporate encryption protocols.',
      options: ['to', 'with', 'for', 'at'],
      answer: 1,
      quickWhy: 'El verbo "comply" rige obligatoriamente la preposición "with" (comply with standards).'
    }
  },
  {
    id: 'ff-vulnerable-to',
    category: 'preposition',
    term: 'Vulnerable to (¡Nunca "vulnerable with" ni "against"!)',
    literalSpanishTrap: 'Decir "The API is vulnerable against attacks" o "vulnerable with SQL injection".',
    realItMeaning: 'Vulnerable ante o a un tipo específico de ataque o amenaza.',
    howToSayLiteralInEnglish: 'Vulnerable rige siempre TO: "vulnerable to remote code execution (RCE)".',
    goldenRule: 'Vulnerable TO | Susceptible TO. (Para protección se usa "immune TO" o "protected FROM").',
    workplaceExample: {
      en: 'Endpoints running unpatched versions of OpenSSL remain vulnerable to man-in-the-middle attacks.',
      es: 'Los endpoints que ejecutan versiones no parcheadas de OpenSSL siguen siendo vulnerables a ataques de intermediario (MitM).',
      highlight: 'vulnerable to man-in-the-middle'
    },
    fastDrill: {
      stem: 'Due to improper sanitization of incoming JSON payloads, the endpoint is highly vulnerable _______ SQL injection and cross-site scripting.',
      options: ['against', 'with', 'to', 'for'],
      answer: 2,
      quickWhy: 'El adjetivo "vulnerable" va acoplado permanentemente a "to": vulnerable to attacks.'
    }
  },
  {
    id: 'ff-prevent-from',
    category: 'preposition',
    term: 'Prevent from + [Gerundio -ing]',
    literalSpanishTrap: 'Decir "To prevent the server to crash" (calco directo de "prevenir al servidor de caer").',
    realItMeaning: 'Impedir o evitar que un sistema o usuario realice una acción.',
    howToSayLiteralInEnglish: 'Estructura obligatoria: PREVENT [objeto] FROM [verbo-ing]: "prevent the server from crashing".',
    goldenRule: 'PREVENT + algo + FROM + -ing. ¡Jamás infinitivo con "to"!',
    workplaceExample: {
      en: 'Circuit breakers prevent cascading service failures from degrading the entire e-commerce portal.',
      es: 'Los disyuntores impiden que las fallas en cascada degraden todo el portal de comercio electrónico.',
      highlight: 'prevent cascading service failures from degrading'
    },
    fastDrill: {
      stem: 'Network rate limiters were configured to prevent malicious scraping bots _______ saturating backend database connections.',
      options: ['to', 'from', 'of', 'for'],
      answer: 1,
      quickWhy: 'La estructura obligatoria en inglés técnico es: [prevent + objeto + FROM + gerundio -ing].'
    }
  },
  {
    id: 'ff-rely-on',
    category: 'preposition',
    term: 'Rely on / Depend on (¡Nunca "in"!)',
    literalSpanishTrap: 'Decir "We rely in Docker" traduciendo el español "confiamos en Docker".',
    realItMeaning: 'Depender de o confiar en una tecnología, biblioteca o infraestructura.',
    howToSayLiteralInEnglish: 'Rely ON / Depend ON: "The system relies on Redis for fast caching".',
    goldenRule: 'En inglés, "confiar/depender" se apoya sobre algo: RELY ON / DEPEND ON.',
    workplaceExample: {
      en: 'Our zero-downtime architecture relies on automated health checks to drain traffic from unhealthy pods.',
      es: 'Nuestra arquitectura sin tiempo de inactividad depende de chequeos de salud automáticos para desviar tráfico de pods con fallas.',
      highlight: 'relies on automated health checks'
    },
    fastDrill: {
      stem: 'Modern microservice architectures heavily rely _______ asynchronous message brokers like Apache Kafka for decoupled communication.',
      options: ['in', 'at', 'on', 'with'],
      answer: 2,
      quickWhy: 'El verbo "rely" exige "on" (rely on). El calco del español "confiar en -> rely in" es un error penalizado en B2.'
    }
  },
  {
    id: 'ff-consist-of',
    category: 'preposition',
    term: 'Consist of (¡Nunca "consist in"!)',
    literalSpanishTrap: 'Decir "The infrastructure consists in three clusters" (calco de "consiste en").',
    realItMeaning: 'Estar compuesto o integrado por varios elementos o capas.',
    howToSayLiteralInEnglish: 'Consistir en = "consist OF": "The cluster consists of three master nodes".',
    goldenRule: 'Consist OF = Compuesto de. Be made UP OF = Formado por.',
    workplaceExample: {
      en: 'The enterprise Kubernetes cluster consists of three control-plane nodes and twelve worker compute instances.',
      es: 'El clúster corporativo de Kubernetes consta de tres nodos de plano de control y doce instancias de cómputo de trabajo.',
      highlight: 'consists of three control-plane nodes'
    },
    fastDrill: {
      stem: 'The high-availability storage tier consists _______ five NVMe flash arrays replicated synchronously across distinct availability zones.',
      options: ['in', 'of', 'by', 'with'],
      answer: 1,
      quickWhy: '"Consist" va siempre acompañado de "of" cuando se enumeran los componentes de un sistema.'
    }
  },
  {
    id: 'ff-capable-of',
    category: 'preposition',
    term: 'Capable of + [Gerundio -ing]',
    literalSpanishTrap: 'Decir "The load balancer is capable to handle..." (calco de "capaz de manejar").',
    realItMeaning: 'Tener la capacidad técnica o computacional de ejecutar una tarea.',
    howToSayLiteralInEnglish: 'Capable OF + -ing: "capable of processing 10k requests". (Con "able" sí se usa "to": "able to process").',
    goldenRule: 'Capable OF doing vs. Able TO do.',
    workplaceExample: {
      en: 'Each GPU inference instance is capable of processing over fifty thousand vector embeddings per second.',
      es: 'Cada instancia de inferencia GPU es capaz de procesar más de cincuenta mil incrustaciones vectoriales por segundo.',
      highlight: 'capable of processing'
    },
    fastDrill: {
      stem: 'The new high-speed optical switch is capable _______ routing sixty terabits of aggregate throughput with sub-microsecond latency.',
      options: ['to route', 'of routing', 'for routing', 'in routing'],
      answer: 1,
      quickWhy: 'La regla es: [capable OF + gerundio (-ing)]. "Able" rige "to route", pero "capable" rige "of routing".'
    }
  },
  {
    id: 'ff-responsible-for',
    category: 'preposition',
    term: 'Responsible for (¡Nunca "responsible of"!)',
    literalSpanishTrap: 'Decir "The DevOps engineer is responsible of the deployment".',
    realItMeaning: 'Tener la responsabilidad de un rol, tarea o componente de software.',
    howToSayLiteralInEnglish: 'Responsible FOR: "responsible for maintenance".',
    goldenRule: 'Responsible FOR | In charge OF.',
    workplaceExample: {
      en: 'The Site Reliability Engineering team is responsible for maintaining ninety-nine point nine percent uptime.',
      es: 'El equipo de Site Reliability Engineering es responsable de mantener un tiempo de actividad del 99,9%.',
      highlight: 'responsible for maintaining'
    },
    fastDrill: {
      stem: 'The Lead Cloud Architect is directly responsible _______ defining the disaster recovery roadmap and multi-region failover protocols.',
      options: ['of', 'for', 'about', 'with'],
      answer: 1,
      quickWhy: '"Responsible" rige siempre "for" (responsible for + noun/-ing). "In charge" rige "of".'
    }
  },
  {
    id: 'ff-succeed-in',
    category: 'preposition',
    term: 'Succeed in + [Gerundio -ing]',
    literalSpanishTrap: 'Decir "We succeeded to restore the database" (calco de "tuvimos éxito al restaurar").',
    realItMeaning: 'Lograr o tener éxito en completar una tarea técnica.',
    howToSayLiteralInEnglish: 'Succeed IN + -ing: "succeeded in restoring the database". (O usa "managed TO restore").',
    goldenRule: 'Succeed IN + -ing vs. Manage TO + base form.',
    workplaceExample: {
      en: 'After four hours of intense troubleshooting, the database administrators succeeded in restoring the corrupted index table.',
      es: 'Tras cuatro horas de intenso diagnóstico, los administradores de base de datos lograron restaurar la tabla de índices dañada.',
      highlight: 'succeeded in restoring'
    },
    fastDrill: {
      stem: 'Despite severe network packet loss, the field engineer finally succeeded _______ establishing a stable SSH tunnel through the jump host.',
      options: ['to establish', 'in establishing', 'at establishing', 'for establishing'],
      answer: 1,
      quickWhy: 'El verbo "succeed" rige obligatoriamente la preposición "in" seguida de gerundio: [succeeded in establishing].'
    }
  }
];
