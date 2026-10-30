import { Question, TopicId } from '../types';

export interface EnhancedPedagogy {
  human_rule: string;
  trigger_anchor: string;
  spanglish_trap: string;
  workplace_usage: {
    scenario: string;
    en: string;
    es: string;
  };
}

const DEFAULT_PEDAGOGY: EnhancedPedagogy = {
  human_rule: 'Identifica la función de la palabra clave en la oración técnica: observa qué preposición, tiempo verbal o estructura exige el elemento que está justo antes y después del espacio en blanco.',
  trigger_anchor: 'Pista en el texto: Palabra o estructura contigua al hueco (______) -> Exige concordancia gramatical y léxica de nivel B2.',
  spanglish_trap: 'Evita traducir palabra por palabra desde el español; en inglés técnico las colocaciones (verbo + preposición o auxiliar + verbo base) son bloques fijos.',
  workplace_usage: {
    scenario: 'Comunicación Técnica y Operaciones de TI',
    en: 'Please verify the system configuration before deploying the changes to production.',
    es: 'Por favor, verifique la configuración del sistema antes de desplegar los cambios en producción.'
  }
};

const TOPIC_PEDAGOGY_MAP: Record<TopicId, EnhancedPedagogy> = {
  G01: {
    human_rule: 'En Voz Pasiva de Reporte: si la frase arranca con "It is [thought/reported/understood]...", continúa siempre con "THAT + oración completa". Si arranca con el sujeto técnico ("The tests / SSO is considered..."), continúa con "TO + infinitivo" ("to be / to produce"). En incidentes cerrados donde el sistema recibe la acción, usa [be + participio pasado].',
    trigger_anchor: 'Pista: "It is [participio]" -> THAT + cláusula | "[Sujeto técnico] is/are [participio]" -> TO + verbo base.',
    spanglish_trap: 'En español usamos "se" para todo ("se cree que las pruebas fallan"). Nunca mezcles las dos en inglés diciendo "The tests are thought that..." ni uses gerundio tras verbos pasivos de reporte.',
    workplace_usage: {
      scenario: 'Reporte de Auditoría y Postmortem',
      en: 'Single sign-on functionality is considered to be a standard for identity providers.',
      es: 'La funcionalidad de inicio de sesión único (SSO) se considera un estándar para los proveedores de identidad.'
    }
  },
  G02: {
    human_rule: 'Mira justo antes del hueco: si YA hay un sustantivo de cosa ("the survey, the test"), usa WHICH o THAT. Si es persona, usa WHO (o WHOM tras preposición/objeto). Si indica posesión ("cuyo equipo"), usa WHOSE. Si NO hay sustantivo antes del hueco y significa "lo que" ("is ______ we need"), usa WHAT.',
    trigger_anchor: 'Pista: Sustantivo previo -> WHICH / THAT / WHO / WHOSE | Verbo sin sustantivo previo ("is ______") -> WHAT.',
    spanglish_trap: 'En español decimos "lo que" para todo y caemos en decir "the survey what we did". Si el sustantivo ya está escrito antes, jamás uses "what".',
    workplace_usage: {
      scenario: 'Revisión de Arquitectura y Equipos',
      en: 'Building security awareness in employees is what they should be doing.',
      es: 'Crear conciencia de seguridad en los empleados es lo que deberían estar haciendo.'
    }
  },
  G03: {
    human_rule: 'Con "as if" o "as though" (como si) para describir situaciones hipotéticas, quejas o comportamientos irreales, el verbo que sigue da un paso atrás al PAST SIMPLE ("knew", "didn\'t have") o al subjuntivo "WERE" ("as if it were normal").',
    trigger_anchor: 'Pista: "as if / as though" en contexto hipotético o de queja -> Verbo en Past Simple o "were" (nunca "would").',
    spanglish_trap: 'No uses presente ("as if it is normal") en situaciones contrafactuales ni metas "would" detrás de "as if".',
    workplace_usage: {
      scenario: 'Gestión de Carga de Trabajo en Sprint',
      en: 'You are asking me to commit more changes, as if I didn’t have enough to do already.',
      es: 'Me estás pidiendo que haga más commits, como si ya no tuviera suficiente trabajo por hacer.'
    }
  },
  G04: {
    human_rule: 'Para recalcar con firmeza que algo SÍ ocurrió o SÍ es necesario en una oración afirmativa, coloca DO / DOES (presente) o DID (pasado) delante del verbo principal en FORMA BASE pura ("We do need", "I did follow the protocol").',
    trigger_anchor: 'Pista: Defensa ante dudas o énfasis afirmativo -> [do / does / did] + verbo en forma base sin "-s" ni "-ed".',
    spanglish_trap: 'En español decimos "Yo sí avisé". En inglés no existe "I yes told you", y tras "did" o "does" el verbo principal pierde su marca de pasado o "-s" (correcto: "I did tell", nunca "I did told").',
    workplace_usage: {
      scenario: 'Defensa de Cumplimiento de Protocolo en Incidente',
      en: 'I really did follow the security protocol, as you instructed, didn’t I?',
      es: 'Realmente sí seguí el protocolo de seguridad tal como me instruiste, ¿verdad?'
    }
  },
  G05: {
    human_rule: 'Las preposiciones dependientes forman un bloque indivisible con su verbo, adjetivo o sustantivo: rely ON, depend ON, consist OF, listen TO, respond TO, apologize FOR, capable/incapable OF, responsible FOR, vulnerable TO, impact ON, increase IN, according TO.',
    trigger_anchor: 'Pista: Mira la palabra exacta antes del hueco -> impact ON | increase IN | consist OF | rely/depend ON | responsible FOR.',
    spanglish_trap: 'Traducir "depender de" como "depend of", "consistir en" como "consist in", "responsable de" como "responsible of" o "aumento de" como "increase of".',
    workplace_usage: {
      scenario: 'Análisis de Impacto de Red y Ciberseguridad',
      en: 'The recent increase in cyber attacks had a massive impact on team productivity.',
      es: 'El reciente aumento en los ciberataques tuvo un impacto masivo en la productividad del equipo.'
    }
  },
  G06: {
    human_rule: 'Para contrastar ideas al inicio de la oración: "Although / Even though" van seguidos de una cláusula completa [Sujeto + Verbo]. En cambio, "Despite" e "In spite of" van seguidos de un sustantivo o verbo en "-ING" (o la fórmula puente "the fact that + Sujeto + Verbo"). ¡"Despite of" NO existe!',
    trigger_anchor: 'Pista: ¿Sigue [Sujeto + Verbo]? -> Although / Even though. ¿Sigue [Sustantivo / -ing]? -> Despite / In spite of.',
    spanglish_trap: 'Cruzar "Despite" con "In spite of" e inventar "Despite of" (error eliminatorio clásico en B2), o poner Sujeto + Verbo directamente tras "Despite".',
    workplace_usage: {
      scenario: 'Reporte de Mitigación y Resiliencia',
      en: 'Despite the severe bandwidth throttling, the database replication finished on schedule.',
      es: 'A pesar de la severa limitación de ancho de banda, la replicación de la base de datos terminó a tiempo.'
    }
  },
  G07: {
    human_rule: 'Cuando una oración formal o política de seguridad abre con un adverbio negativo o restrictivo ("Under no circumstances", "Rarely", "Seldom", "Never", "Not only", "Little"), debes INVERTIR el orden como si fuera una pregunta: [Auxiliar / Modal + Sujeto + Verbo en forma base].',
    trigger_anchor: 'Pista: "Under no circumstances / Rarely / Seldom / Never" al inicio de frase -> [should/do/did/have + Sujeto + Verbo].',
    spanglish_trap: 'Mantener el orden afirmativo normal ("Under no circumstances support personnel should share..."). La inversión del auxiliar antes del sujeto es obligatoria.',
    workplace_usage: {
      scenario: 'Política Estricta de Seguridad Zero-Trust',
      en: 'Under no circumstances should support personnel share production encryption keys over Slack.',
      es: 'Bajo ninguna circunstancia el personal de soporte debe compartir claves de cifrado de producción por Slack.'
    }
  },
  G08: {
    human_rule: 'Para dar consejos urgentes o advertencias operativas: "had better" y "should" van seguidos del verbo en forma base SIN "to" ("we had better isolate"). "Ought to" y "might want to" llevan "to + verbo base". En negativa, "had better not + verbo" (sin "to").',
    trigger_anchor: 'Pista: "had better" -> verbo SIN "to" (alerta de consecuencia grave si no se actúa ya) | "ought" -> exige "to".',
    spanglish_trap: 'Insertar "to" después de "had better" ("we had better to reboot") o usar "must" de forma agresiva al asesorar a un cliente o compañero.',
    workplace_usage: {
      scenario: 'Advertencia Preventiva en Despliegue',
      en: 'We had better back up the configuration table before running the migration script.',
      es: 'Será mejor que respaldemos la tabla de configuración antes de ejecutar el script de migración.'
    }
  },
  G09: {
    human_rule: 'En peticiones diplomáticas a clientes o superiores: "Would you mind..." exige SIEMPRE verbo en GERUNDIO (-ING) ("Would you mind checking..."). En cambio, "Could you possibly / Would you be able to..." exigen verbo en forma base.',
    trigger_anchor: 'Pista: "Would you mind ______" -> Verbo terminado en -ING ("refreshing", "verifying").',
    spanglish_trap: 'Pensar en "¿Le importaría actualizar?" y poner infinitivo ("Would you mind to refresh"). Tras "mind" siempre va "-ing".',
    workplace_usage: {
      scenario: 'Soporte Nivel 2 con Cliente Corporativo',
      en: 'Would you mind refreshing the gateway status while I inspect the BGP routing table?',
      es: '¿Le importaría actualizar el estado del gateway mientras inspecciono la tabla de enrutamiento BGP?'
    }
  },
  G10: {
    human_rule: 'En runbooks, guías paso a paso y advertencias técnicas, los imperativos arrancan directamente con el verbo en forma base sin sujeto ("Verify the checksum", "Run the script") y las prohibiciones usan "Do not / Never + verbo base". Asimismo, tras "need" pasivo informal en IT se admite "needs + -ing" ("needs patching" = "needs to be patched").',
    trigger_anchor: 'Pista: Instrucción directa de manual -> Verbo base inicial ("Ensure", "Do not disable") | "it needs + -ing / to be + participio".',
    spanglish_trap: 'Usar infinitivo con "to" al dar una orden escrita ("To verify the logs") o usar "No + verbo" ("No reboot the server" en vez de "Do not reboot").',
    workplace_usage: {
      scenario: 'Runbook de Respuesta a Incidentes',
      en: 'Isolate the affected subnet immediately and do not reboot the host until volatile memory is dumped.',
      es: 'Aísle la subred afectada de inmediato y no reinicie el host hasta volcar la memoria volátil.'
    }
  },
  G11: {
    human_rule: 'Los adverbios de probabilidad ("presumably", "arguably", "conceivably", "evidently", "apparently") matizan hipótesis técnicas en diagnósticos. Se colocan al inicio de la oración (seguidos de coma) o justo después del verbo auxiliar/modal ("is presumably causing").',
    trigger_anchor: 'Pista: Estimación de causa raíz con evidencia parcial -> Adverbio epistémico ("presumably", "arguably", "conceivably").',
    spanglish_trap: 'Confundir "actually" (en realidad / de hecho) con "actualmente" (currently/nowadays), o colocar el adverbio entre el verbo transitivo y su objeto directo.',
    workplace_usage: {
      scenario: 'Hipótesis en Análisis de Causa Raíz (RCA)',
      en: 'The memory spike was presumably triggered by an unindexed analytics query.',
      es: 'El pico de memoria fue presumiblemente provocado por una consulta analítica sin indexar.'
    }
  },
  G12: {
    human_rule: 'Cuando ves una fecha u hora límite en el futuro ("By 07:00 UTC", "By the end of the sprint", "By the time the window opens"), la acción que ya estará terminada antes de ese límite usa FUTURE PERFECT: [will have + participio pasado]. "Be on the point of" exige gerundio (-ing).',
    trigger_anchor: 'Pista: "By [hora/fecha futura]" o "By the time [presente]" -> will have + participio ("will have completed").',
    spanglish_trap: 'Usar futuro simple ("will complete") cuando la frase enfatiza que la tarea ya habrá concluido ANTES del hito límite ("by").',
    workplace_usage: {
      scenario: 'Ventana de Mantenimiento Programado',
      en: 'By the time the core business window opens at 07:00 UTC, we will have completed all cluster replication tasks.',
      es: 'Para cuando abra la ventana operativa a las 07:00 UTC, habremos completado todas las tareas de replicación del clúster.'
    }
  },
  G13: {
    human_rule: 'Tras verbos o adjetivos de exigencia formal y normativa ("recommend that", "demand that", "require that", "insist that", "it is vital/essential/mandatory that"), el verbo de la cláusula siguiente va en SUBJUNTIVO (forma base pura SIN "-s", SIN "to" y SIN "will/should", incluso para he/she/it: "that every admin enforce", "that the service be restarted").',
    trigger_anchor: 'Pista: "[demand / recommend / require / vital] + that + [sujeto singular]" -> Verbo en forma base pura (sin "-s").',
    spanglish_trap: 'Añadir "-s" porque el sujeto es singular ("demands that the admin enforces") o meter "to" sin sujeto ("recommends to enforce").',
    workplace_usage: {
      scenario: 'Especificación de Cumplimiento de Seguridad',
      en: 'The compliance framework demands that every systems administrator enforce MFA on all bastion hosts.',
      es: 'El marco de cumplimiento exige que cada administrador de sistemas imponga MFA en todos los hosts bastión.'
    }
  },
  G14: {
    human_rule: 'Para deducir causas a partir de logs y evidencias: si estás 95% seguro de que algo ocurrió en el pasado, usa "MUST HAVE + participio". Si es lógicamente imposible, usa "CAN\'T / COULDN\'T HAVE + participio". Si es solo una posibilidad entre varias, usa "MIGHT / COULD HAVE + participio".',
    trigger_anchor: 'Pista: Evidencia forense en pasado -> Certeza positiva: must have + V3 | Imposibilidad: can\'t/couldn\'t have + V3 | Posibilidad: might/could have + V3.',
    spanglish_trap: 'Usar "mustn\'t have" para deducción negativa (incorrecto: "mustn\'t" es prohibición; para imposibilidad lógica se usa "can\'t have" o "couldn\'t have") o usar "must + verbo base" para un hecho pasado.',
    workplace_usage: {
      scenario: 'Investigación Forense de Incidente',
      en: 'All logs were wiped within milliseconds; the intruder must have gained root privileges.',
      es: 'Todos los registros fueron borrados en milisegundos; el intruso debe haber obtenido privilegios de root.'
    }
  },
  G15: {
    human_rule: '"Since" tiene dos funciones clave en IT: 1) Temporal ("desde"): marca el punto de inicio en el pasado y exige PRESENT PERFECT en la cláusula principal ("has been down since Tuesday"). 2) Causal ("ya que / puesto que"): introduce la razón técnica de una decisión ("Since the link is saturated, we rerouted traffic").',
    trigger_anchor: 'Pista: [Present Perfect] + since + [punto pasado] = Tiempo ("desde") | Since + [causa actual] = Razón ("ya que / because").',
    spanglish_trap: 'Usar presente simple en vez de Present Perfect con "since" temporal ("The server is down since 8 AM" -> incorrecto; debe ser "has been down since 8 AM").',
    workplace_usage: {
      scenario: 'Actualización de Estado y Justificación Técnica',
      en: 'Since we are at risk of not delivering on time, we recommend cutting the initial scope to an MVP.',
      es: 'Dado que corremos el riesgo de no entregar a tiempo, recomendamos reducir el alcance inicial a un MVP.'
    }
  },
  G16: {
    human_rule: 'Para decisiones futuras negativas: "won\'t" (will not) expresa rechazo, promesa o bloqueo condicional; "not going to" expresa un plan o intención ya decidida previamente. ¡REGLA DE ORO!: Dentro de la cláusula temporal tras "until", "as soon as", "when" o "before", NUNCA uses "will/won\'t"; usa PRESENTE SIMPLE ("won\'t restore access until the officer approves").',
    trigger_anchor: 'Pista: "[won\'t + verbo] + until / as soon as / before + [sujeto]" -> El verbo tras "until" va en PRESENTE SIMPLE ("approves").',
    spanglish_trap: 'Poner futuro tras "until" ("until the officer will approve") o confundir una decisión previa del equipo ("we\'re not going to") con una reacción espontánea.',
    workplace_usage: {
      scenario: 'Control de Acceso en Recuperación de Desastres',
      en: 'The support desk won’t restore database access until the lead security officer approves the ticket.',
      es: 'La mesa de soporte no restaurará el acceso a la base de datos hasta que el oficial jefe de seguridad apruebe el ticket.'
    }
  },
  G17: {
    human_rule: 'En documentación técnica moderna, políticas de seguridad y el examen OpenEDG, cuando te refieres a un usuario o rol en singular de género no especificado ("each engineer", "every user", "anyone", "a developer"), el pronombre neutro estándar es "THEY / THEM / THEIR" ("each engineer must verify their MFA token").',
    trigger_anchor: 'Pista: "each / every / any [rol singular humano]" -> pronombre neutro "they / their / themselves".',
    spanglish_trap: 'Usar "it / its" (que solo sirve para máquinas o procesos, nunca para personas) o usar "his" excluyente en políticas corporativas.',
    workplace_usage: {
      scenario: 'Política Corporativa de Identidad y Acceso (IAM)',
      en: 'Each systems engineer must verify their mobile authenticator device before accessing production bastions.',
      es: 'Cada ingeniero de sistemas debe verificar su dispositivo autenticador móvil antes de acceder a los bastiones de producción.'
    }
  },
  G18: {
    human_rule: 'La estructura formal "have/has yet to + verbo base" significa que una tarea importante aún NO se ha realizado ("The patch has yet to be validated" = todavía no se ha validado). Además, "yet another + sustantivo singular" enfatiza frustración ante un problema repetitivo ("yet another outage").',
    trigger_anchor: 'Pista: "has/have yet ______" -> exige infinitivo con TO ("to be approved", "to release").',
    spanglish_trap: 'Confundir "has yet to validate" creyendo que significa "ya validó". Significa exactamente lo contrario: "aún está pendiente de validar".',
    workplace_usage: {
      scenario: 'Seguimiento de Parches Críticos en Auditoría',
      en: 'The vendor has yet to release a permanent hotfix for the zero-day vulnerability.',
      es: 'El proveedor aún no ha publicado un parche permanente para la vulnerabilidad de día cero.'
    }
  },
  G19: {
    human_rule: 'Domina los Phrasal Verbs esenciales de operaciones TI: "roll back" (revertir a versión previa), "spin up" (levantar instancias/contenedores), "phase out" (retirar gradualmente tecnología legacy), "pin down" (aislar la causa exacta de un fallo), "filter out" (filtrar ruido/tráfico), "back up" (respaldar) y "sign off on" (dar aprobación formal).',
    trigger_anchor: 'Pista: Revertir fallo -> roll back | Aislar causa raíz -> pin down | Descontinuar legacy -> phase out | Crear nodos -> spin up.',
    spanglish_trap: 'Elegir preposiciones literales ("roll back" vs "back up": "back up" es hacer copia de seguridad; "roll back" es deshacer un despliegue fallido).',
    workplace_usage: {
      scenario: 'Contingencia en Despliegue de Firmware',
      en: 'If the firmware upgrade causes a kernel panic, the engineer must immediately roll back to the previous release.',
      es: 'Si la actualización de firmware causa un kernel panic, el ingeniero debe revertir de inmediato a la versión estable anterior.'
    }
  },
  G20: {
    human_rule: 'Las Oraciones Hendidas (Cleft Sentences) sirven para aislar y enfatizar al verdadero culpable o solución técnica: 1) It-cleft: "It was [el elemento exacto] that [verbo]" ("It was a memory leak that caused the crash"). 2) Wh-cleft: "What [cláusula] is/was [el foco]" ("What we need is a load balancer").',
    trigger_anchor: 'Pista: "It was [X] ______ caused..." -> THAT | "What [cláusula sujeto] ______..." -> verbo singular IS / WAS.',
    spanglish_trap: 'Poner "what" en lugar de "that" en una It-cleft ("It was a memory leak what caused...") o usar verbo plural tras una cláusula "What...".',
    workplace_usage: {
      scenario: 'Aclaración de Causa Raíz ante Dirección',
      en: 'It was a memory leak in the authentication worker that caused the server crash, not a DDoS attack.',
      es: 'Fue una fuga de memoria en el worker de autenticación lo que causó la caída del servidor, no un ataque DDoS.'
    }
  },
  G21: {
    human_rule: 'Para reglas deterministas de sistemas (Zero Conditional), usa [If/When + Present Simple, Present Simple]. Para contingencias reales de operación y SLAs (First Conditional), usa [If/Unless + Present Simple, will / modal / imperativo]. Recuerda: "unless" = "if not".',
    trigger_anchor: 'Pista: "If / Unless + [Present Simple]" -> Cláusula principal con "will / should / imperativo" (jamás pongas "will" justo después de "if/unless").',
    spanglish_trap: 'Usar doble "will" ("If the primary link will drop, the backup will take over") o poner un verbo en negativo detrás de "unless" cambiando el sentido.',
    workplace_usage: {
      scenario: 'Definición de Failover Automático en SLA',
      en: 'If the primary fiber link drops, traffic automatically reroutes through the secondary gateway.',
      es: 'Si el enlace de fibra primario cae, el tráfico se reenruta automáticamente a través del gateway secundario.'
    }
  },
  G22: {
    human_rule: '"While" y "Whereas" contrastan dos hechos o arquitecturas reales y opuestas (simétrico a "mientras que"): "TCP guarantees packet delivery, whereas UDP minimizes latency". Ambos van seguidos de una cláusula completa [Sujeto + Verbo].',
    trigger_anchor: 'Pista: Comparación directa de dos tecnologías o métricas opuestas [Cláusula A], ______ [Cláusula B] -> whereas / while.',
    spanglish_trap: 'Usar "Despite" (que exige sustantivo/-ing y expresa concesión, no contraste simétrico de perfiles) o "However" unido solo por coma (comma splice).',
    workplace_usage: {
      scenario: 'Comparativa de Arquitectura de Protocolos',
      en: 'Symmetric encryption uses a single shared key, whereas asymmetric encryption relies on a public-private key pair.',
      es: 'El cifrado simétrico utiliza una única clave compartida, mientras que el asimétrico se basa en un par de claves pública y privada.'
    }
  },
  G23: {
    human_rule: 'Normalmente "always" va con Present Simple para rutinas ("The cron job always runs at midnight"). Pero cuando quieres expresar QUEJA, IRRITACIÓN o un fallo anómalo que se repite demasiado, el inglés B2 usa PRESENT / PAST CONTINUOUS: [be + always / constantly + verbo en -ING] ("The legacy portal is always dropping session tokens!").',
    trigger_anchor: 'Pista: Contexto de queja/frustración + "is/was always ______" -> Verbo en GERUNDIO (-ING).',
    spanglish_trap: 'Ver la palabra "always" y marcar mecánicamente el Present Simple sin notar el verbo auxiliar "is/are/was" que está justo antes de "always".',
    workplace_usage: {
      scenario: 'Escalamiento de Cliente por Fallo Recurrente',
      en: 'The client is furious because the legacy payment gateway is always dropping session tokens during peak hours.',
      es: 'El cliente está furioso porque la pasarela de pagos heredada siempre está perdiendo tokens de sesión en horas pico.'
    }
  },
  G24: {
    human_rule: 'Diferencia milimétrica B2: Usa "EVEN THOUGH" (aunque) cuando el problema YA ES UN HECHO REAL y confirmado ("Even though the link suffered a cut, the backup held"). Usa "EVEN IF" (incluso si) cuando hablas de una HIPÓTESIS o supuesto extremo ("Even if a node fails tonight, the cluster will survive").',
    trigger_anchor: 'Pista: ¿Hecho real ya ocurrido/constatado? -> EVEN THOUGH. ¿Suposición hipotética o condición futura? -> EVEN IF.',
    spanglish_trap: 'Traducir ambos como "aunque" sin verificar si la frase describe un hecho real constatado o una condición hipotética.',
    workplace_usage: {
      scenario: 'Pruebas de Caos y Alta Disponibilidad',
      en: 'Even though the primary fiber link suffered a physical cut, the redundant gateway maintained packet transmission.',
      es: 'Aunque el enlace de fibra primario sufrió un corte físico real, el gateway redundante mantuvo la transmisión de paquetes.'
    }
  },
  G25: {
    human_rule: 'Al reconstruir la línea temporal de un incidente (logs/postmortem) con dos eventos pasados: el evento que ocurrió PRIMERO (el más antiguo) va en PAST PERFECT [had + participio pasado], y el evento que ocurrió DESPUÉS va en PAST SIMPLE ("The attacker had exfiltrated the keys before the firewall blocked the IP").',
    trigger_anchor: 'Pista: "By the time / Before + [Past Simple]" -> La acción previa va en PAST PERFECT ("had + V3").',
    spanglish_trap: 'Contar toda la cronología en pasado simple o usar Present Perfect ("has exfiltrated") cuando está anclada a un momento cerrado del pasado.',
    workplace_usage: {
      scenario: 'Línea Temporal Forense de Ciberseguridad',
      en: 'By the time the SOC analyst isolated the workstation, the malware had already encrypted the shared volume.',
      es: 'Para cuando el analista del SOC aisló la estación de trabajo, el malware ya había cifrado el volumen compartido.'
    }
  },
  G26: {
    human_rule: 'Los Idioms del syllabus oficial OpenEDG transmiten significados ejecutivos precisos: "on the same page" (alineados), "touch base" (contactar brevemente), "iron out" (resolver detalles/bugs pendientes), "ballpark figure" (estimación aproximada), "bite the bullet" (afrontar una decisión difícil inevitable), "get the ball rolling" (iniciar el proceso), "up and running" (operativo).',
    trigger_anchor: 'Pista: Contexto de reuniones ágiles, estimaciones y resolución de bloqueos -> Selecciona el idiom exacto del syllabus.',
    spanglish_trap: 'Interpretar los modismos literalmente o cambiar una preposición/artículo de la expresión fija ("in the same page" en vez de "on the same page").',
    workplace_usage: {
      scenario: 'Sincronización de Sprint y Estimación con Stakeholders',
      en: 'Let’s touch base tomorrow morning to iron out the remaining API integration issues.',
      es: 'Pongámonos en contacto mañana por la mañana para pulir/resolver los problemas pendientes de integración de la API.'
    }
  },
  G27: {
    human_rule: '1) En Second Conditional (hipótesis actual: [If + Past Simple -> would + verbo]) y Third Conditional (pasado irreal: [If + had + V3 -> would have + V3]), nunca pongas "would" en la parte del "if". 2) Cuando una frase empieza con "Only if + [cláusula condicional]", la CLÁUSULA PRINCIPAL (la segunda parte) se INVIERTE como pregunta: [Auxiliar + Sujeto + Verbo base].',
    trigger_anchor: 'Pista: "Only if [condición], ______" -> Invierte la segunda cláusula: "does/will + [Sujeto] + [Verbo base]".',
    spanglish_trap: 'Invertir la primera cláusula tras "Only if" o dejar la segunda cláusula sin invertir ("Only if the link drops the backup daemon will assume...").',
    workplace_usage: {
      scenario: 'Política de Conmutación por Error (Failover)',
      en: 'Only if the primary edge firewall experiences catastrophic packet loss does the secondary daemon assume routing control.',
      es: 'Solo si el firewall de borde primario experimenta una pérdida catastrófica de paquetes asume el control el demonio secundario.'
    }
  },
  G28: {
    human_rule: 'Tanto "due to", "owing to" como "because of" significan "debido a" y van seguidos de un SUSTANTIVO (sintagma nominal), nunca de una oración con verbo conjugado. Regla de precisión B2: tras el verbo TO BE ("was / is"), usa "DUE TO" ("The latency spike was due to a backup job"). Tras un verbo de acción ("failed / crashed"), usa "BECAUSE OF" o "OWING TO".',
    trigger_anchor: 'Pista: "[is / was / were] ______ + sustantivo" -> DUE TO | "[verbo de acción] ______ + sustantivo" -> BECAUSE OF / OWING TO.',
    spanglish_trap: 'Escribir "due of" (no existe), usar "because" a secas delante de un sustantivo sin verbo, o usar "since" delante de un simple sustantivo.',
    workplace_usage: {
      scenario: 'Informe de Causa de Incidente (Postmortem)',
      en: 'The unexpected latency spike across the Frankfurt branch was due to an unthrottled backup job.',
      es: 'El pico inesperado de latencia en la sucursal de Fráncfort se debió a una tarea de respaldo sin limitación de ancho de banda.'
    }
  },
  G29: {
    human_rule: 'Para suavizar órdenes o pedir favores delicados ("softening") en soporte y gestión, usamos tiempos pasados de distanciamiento diplomático: "I was wondering if you could + [verbo en forma base]", "I was thinking we might + [verbo base]", "I hoped you could...". Tras el modal "could/might", el verbo va siempre en forma base sin "to".',
    trigger_anchor: 'Pista: "I was wondering if you could ______" -> Verbo en forma base pura ("upload", "verify", "check").',
    spanglish_trap: 'Creer que "I was wondering" se refiere al pasado (es una petición en el presente suavizada por cortesía) o poner "to" después de "could" ("could to upload").',
    workplace_usage: {
      scenario: 'Solicitud Delicada en Llamada Postmortem con Cliente',
      en: 'I was wondering if you could upload the diagnostic memory dump to our secure portal.',
      es: 'Me preguntaba si podría subir el volcado de memoria de diagnóstico a nuestro portal seguro.'
    }
  },
  V01: {
    human_rule: 'Domina la terminología de Cloud e Infraestructura: "scalability / elasticity" (escalado dinámico), "latency" (retardo en ms), "throughput" (caudal real procesado), "egress traffic" (tráfico saliente de la nube), "multi-tenant" (inquilino compartido con aislamiento lógico) y "orchestration" (coordinación automatizada de contenedores).',
    trigger_anchor: 'Pista léxica Cloud: Tráfico que sale de la nube -> egress | Retardo temporal -> latency | Múltiples clientes aislados -> multi-tenant.',
    spanglish_trap: 'Confundir "bandwidth" (capacidad máxima teórica del canal) con "throughput" (volumen real transmitido) o "latency" (tiempo de viaje del paquete).',
    workplace_usage: {
      scenario: 'Optimización de Costos y Arquitectura Cloud',
      en: 'Compressing payloads before transmission significantly reduced our cloud egress traffic charges.',
      es: 'Comprimir las cargas útiles antes de la transmisión redujo significativamente nuestros cargos por tráfico saliente de la nube.'
    }
  },
  V02: {
    human_rule: 'Distingue con precisión el ciclo de traducción de código: un "compiler" traduce todo el código fuente ("source code") a binario/código máquina antes de ejecutar; un "interpreter" traduce y ejecuta instrucción por instrucción en tiempo de ejecución ("at runtime"); "JIT (Just-In-Time) compilation" compila "bytecode" intermedio en caliente.',
    trigger_anchor: 'Pista léxica Compilación: Traducción previa completa a binario -> compiler | Ejecución línea por línea en vivo -> interpreter | Código intermedio -> bytecode.',
    spanglish_trap: 'Confundir "compile-time error" (error de sintaxis/tipos detectado antes de ejecutar) con "runtime exception" (fallo que ocurre mientras el programa corre).',
    workplace_usage: {
      scenario: 'Evaluación de Rendimiento de Lenguajes en Backend',
      en: 'Ahead-of-time compilation eliminates interpreter overhead during production runtime.',
      es: 'La compilación anticipada (AOT) elimina la sobrecarga del intérprete durante la ejecución en producción.'
    }
  },
  V03: {
    human_rule: 'En Soporte al Cliente y SLAs: diferencia un "software defect / bug" (fallo no intencional del código) de un "design constraint / feature request" (comportamiento intencional por seguridad o diseño), un "workaround" (solución temporal alternativa) de un "permanent hotfix/patch", y aplica frases de empatía y desescalada ("de-escalation").',
    trigger_anchor: 'Pista léxica Soporte: Solución provisional para seguir operando -> workaround | Reducir tensión del cliente -> de-escalation.',
    spanglish_trap: 'Responder de forma cortante "It\'s a feature, not a bug" en lugar de explicar el modelo de amenaza y ofrecer una alternativa ("workaround").',
    workplace_usage: {
      scenario: 'Gestión de Tickets Críticos y Desescalada de Clientes',
      en: 'While engineering develops a permanent patch, we have provided a configuration workaround to restore service.',
      es: 'Mientras ingeniería desarrolla un parche permanente, hemos proporcionado una solución temporal de configuración para restaurar el servicio.'
    }
  },
  V04: {
    human_rule: 'En Ingeniería Social y Fraude: "phishing" (correo fraudulento), "vishing" (fraude por llamada de voz/teléfono), "smishing" (SMS), "pretexting" (inventar una historia o emergencia falsa para manipular a la víctima), "impersonation" (suplantar identidad de un directivo/técnico) y "credential harvesting" (robo masivo de contraseñas).',
    trigger_anchor: 'Pista léxica Seguridad: Llamada telefónica fraudulenta -> vishing | Historia/escenario falso inventado -> pretexting | Suplantar a alguien -> impersonation.',
    spanglish_trap: 'Llamar "phishing" a cualquier engaño telefónico cuando el examen evalúa específicamente "vishing" o "pretexting".',
    workplace_usage: {
      scenario: 'Alerta del SOC sobre Campaña de Ingeniería Social',
      en: 'The attacker used vishing and executive impersonation to pressure the helpdesk into resetting the MFA token.',
      es: 'El atacante utilizó vishing y suplantación de identidad ejecutiva para presionar a la mesa de ayuda a restablecer el token MFA.'
    }
  },
  V05: {
    human_rule: 'En Políticas de Seguridad (InfoSec): "Principle of Least Privilege (PoLP)" (dar solo los permisos mínimos necesarios), "Zero Trust" (nunca confiar implícitamente por estar en la LAN; verificar siempre), "micro-segmentation" (aislar cargas para frenar el movimiento lateral), "audit trail" (registro trazable) y "compliance" (cumplimiento normativo).',
    trigger_anchor: 'Pista léxica InfoSec: Permisos mínimos indispensables -> least privilege | Frenar movimiento lateral -> micro-segmentation | Nunca confiar -> Zero Trust.',
    spanglish_trap: 'Confundir "authentication" (verificar quién eres: identidad/MFA) con "authorization" (verificar a qué recursos tienes permiso de acceder).',
    workplace_usage: {
      scenario: 'Auditoría de Gobernanza e Identidad (IAM)',
      en: 'Enforcing the principle of least privilege prevents lateral movement if a workstation is compromised.',
      es: 'Aplicar el principio de mínimo privilegio previene el movimiento lateral si una estación de trabajo es comprometida.'
    }
  },
  V06: {
    human_rule: 'En Roles, Responsabilidades y Gestión de Equipos IT: "scope of duties" (alcance de funciones), "secondment" (traslado/préstamo temporal de personal desde otro equipo), "escalate" (elevar un bloqueo por la cadena de mando), "accountable" (responsable último) y la división entre Helpdesk (soporte de acceso/cobre UTP) y Network Engineering (core/fibra óptica).',
    trigger_anchor: 'Pista léxica Roles: Préstamo temporal de empleados de otro squad -> secondment | Fuera de tus funciones -> beyond your scope of duties.',
    spanglish_trap: 'Confundir "secondment" con "segundo puesto" (significa adscripción o cesión temporal de ingenieros de otro equipo para cubrir falta de capacidad).',
    workplace_usage: {
      scenario: 'Planificación de Capacidad y Roles Interdepartamentales',
      en: 'When a task expands beyond your scope of duties, coordinate with the responsible department or escalate to your manager.',
      es: 'Cuando una tarea exceda el alcance de sus funciones, coordine con el departamento responsable o escale a su gerente.'
    }
  },
  V07: {
    human_rule: 'En Redes, Topologías y Protocolos: "peering" (interconexión voluntaria de redes autónomas para intercambiar tráfico), "network topology" (disposición estructural de nodos y enlaces), "mismatch" (discrepancia de parámetros, ej. duplex/MTU), "misconfigured" (mal configurado), "jitter" (variación en la latencia de paquetes) y "packet loss" (pérdida de paquetes).',
    trigger_anchor: 'Pista léxica Redes: Interconexión entre ISPs/redes -> peering | Parámetros que no coinciden -> mismatch | Variación de retardo -> jitter.',
    spanglish_trap: 'Confundir "topology" (estructura lógica/física de la red) con "peering" (acuerdo de intercambio directo de tráfico entre redes).',
    workplace_usage: {
      scenario: 'Diagnóstico de Enrutamiento BGP e Interconexión',
      en: 'A duplex mismatch on the trunk interface caused severe packet drops across the VLAN.',
      es: 'Una discrepancia de dúplex en la interfaz troncal causó graves pérdidas de paquetes en la VLAN.'
    }
  },
  V08: {
    human_rule: 'En Ingeniería de Software y Gestión de Producto: "scope creep" (expansión descontrolada de requisitos no pactados), "incremental value delivery" (entrega de valor en pequeños lotes funcionales / "piece by piece"), "MVP" (producto mínimo viable), "team velocity" (capacidad de entrega por iteración) y "regression testing" (verificar que un cambio no rompa lo que ya funcionaba).',
    trigger_anchor: 'Pista léxica Producto/SW: Aumento descontrolado de alcance -> scope creep | Entregar valor por fases -> incremental value delivery.',
    spanglish_trap: 'Traducir "compromise" como "compromiso" (en inglés técnico "compromise" es vulnerar la seguridad o hacer una concesión mutua; "compromiso" del equipo es "commitment").',
    workplace_usage: {
      scenario: 'Revisión de Alcance con Product Owner',
      en: 'By cutting initial scope and adopting incremental value delivery, we can release an MVP before the end of the year.',
      es: 'Al recortar el alcance inicial y adoptar una entrega incremental de valor, podemos lanzar un MVP antes de fin de año.'
    }
  }
};

export interface ForensicDistractorItem {
  letter: string;
  option: string;
  isCorrect: boolean;
  reason: string;
}

export interface PedagogicalEnhancementResult {
  humanRule: string;
  triggerAnchor: string;
  spanglishTrap: string;
  workplaceUsage: {
    scenario: string;
    en: string;
    es: string;
  };
  forensicDistractors: ForensicDistractorItem[];
}

export function enhanceQuestionPedagogy(q: Question): EnhancedPedagogy {
  if (q.human_rule && q.trigger_anchor && q.spanglish_trap && q.workplace_usage) {
    return {
      human_rule: q.human_rule,
      trigger_anchor: q.trigger_anchor,
      spanglish_trap: q.spanglish_trap,
      workplace_usage: q.workplace_usage
    };
  }

  const base = TOPIC_PEDAGOGY_MAP[q.topic] || DEFAULT_PEDAGOGY;

  return {
    human_rule: q.human_rule || base.human_rule,
    trigger_anchor: q.trigger_anchor || q.trigger_scan || base.trigger_anchor,
    spanglish_trap: q.spanglish_trap || q.tip_es || base.spanglish_trap,
    workplace_usage: q.workplace_usage || base.workplace_usage
  };
}

export function diagnoseDistractorReason(q: Question, idx: number, enhanced?: EnhancedPedagogy): string {
  const opt = q.options[idx] || '';
  const correctOpt = q.options[q.answer] || '';
  const rawWhyWrong = Array.isArray(q.why_wrong)
    ? q.why_wrong[idx]
    : (q.why_wrong as unknown as Record<number, string>)?.[idx];

  // If the question already has a rich, non-boilerplate explanation for this option, return it
  if (
    rawWhyWrong &&
    rawWhyWrong.trim().length >= 12 &&
    !rawWhyWrong.includes('viola la regla gramatical o precisión léxica evaluada en')
  ) {
    return rawWhyWrong;
  }

  const optLower = opt.toLowerCase().trim();
  const correctLower = correctOpt.toLowerCase().trim();
  const ped = enhanced || enhanceQuestionPedagogy(q);

  if (optLower.includes('despite of')) {
    return `❌ Trampa eliminatoria B2 ("${opt}"): "Despite of" NO existe en inglés (mezcla errónea de "despite" + "in spite of"). Usa "despite" sin "of".`;
  }
  if ((optLower === 'despite' || optLower === 'in spite of' || optLower === 'due to' || optLower === 'because of') &&
      (correctLower === 'although' || correctLower === 'even though' || correctLower === 'because' || correctLower === 'since' || correctLower === 'even if')) {
    return `❌ Trampa sintáctica ("${opt}"): "${opt}" es preposición y solo acepta un sustantivo o "-ing". Como después del hueco hay [Sujeto + Verbo conjugado], necesitas la conjunción "${correctOpt}".`;
  }
  if ((optLower === 'although' || optLower === 'even though' || optLower === 'because') &&
      (correctLower === 'despite' || correctLower === 'in spite of' || correctLower === 'due to' || correctLower === 'because of')) {
    return `❌ Trampa sintáctica ("${opt}"): "${opt}" exige una cláusula con [Sujeto + Verbo conjugado], pero detrás del hueco solo hay un grupo nominal o gerundio; por eso se requiere "${correctOpt}".`;
  }
  if (q.topic === 'G07' || q.topic === 'G27') {
    return `❌ Error de inversión ("${opt}"): tras un adverbio negativo o restrictivo al inicio ("Under no circumstances / Not only / Only if"), es obligatorio invertir el orden como en una pregunta [Auxiliar + Sujeto + Verbo base]: "${correctOpt}".`;
  }
  if (q.topic === 'G13') {
    return `❌ Trampa en Subjuntivo Mandativo ("${opt}"): tras verbos o adjetivos de exigencia/recomendación ("insist / recommend / crucial / essential that"), el verbo debe ir en forma base pura sin "-s", "-ed" ni "to" ("${correctOpt}").`;
  }
  if (q.topic === 'G04') {
    return `❌ Trampa con Do Enfático ("${opt}"): al usar "do / does / did" para enfatizar, el verbo principal pierde su "-s" o "-ed" y debe ir en forma base pura ("${correctOpt}").`;
  }
  if (q.topic === 'G19') {
    return `❌ Trampa en Causativo ("${opt}"): cuando el objeto recibe la acción ([have/get + objeto + V3]), requiere participio pasado; cuando una persona la ejecuta ([have + persona + V1]), va en forma base sin "to" ("${correctOpt}").`;
  }
  if (optLower.startsWith('to ') && !correctLower.startsWith('to ')) {
    return `❌ Trampa de infinitivo ("${opt}"): la estructura previa prohíbe usar "to + infinitivo" en esta posición y exige "${correctOpt}". ${ped.trigger_anchor}`;
  }
  if (optLower.endsWith('ing') && !correctLower.endsWith('ing')) {
    return `❌ Trampa de gerundio ("${opt}"): usar "-ing" aquí deja la oración sin la forma verbal o estructura requerida ("${correctOpt}"). ${ped.trigger_anchor}`;
  }

  return `❌ Distractor trampa ("${opt}"): no cumple el patrón exigido frente a "${correctOpt}". Regla rápida: ${ped.trigger_anchor}`;
}

export function getPedagogicalEnhancement(q: Question): PedagogicalEnhancementResult {
  const enhanced = enhanceQuestionPedagogy(q);
  const letters = ['A', 'B', 'C', 'D'];

  const forensicDistractors: ForensicDistractorItem[] = q.options.map((opt, idx) => {
    const isCorrect = idx === q.answer;
    const rawWhyWrong = Array.isArray(q.why_wrong)
      ? q.why_wrong[idx]
      : (q.why_wrong as unknown as Record<number, string>)?.[idx];

    let reason = rawWhyWrong || '';
    if (isCorrect) {
      if (!reason || reason.toLowerCase().startsWith('opción correcta') || reason.includes('cumple con la estructura y el contexto')) {
        reason = `✅ Opción correcta: ${q.why_correct}`;
      }
    } else {
      reason = diagnoseDistractorReason(q, idx, enhanced);
    }

    return {
      letter: letters[idx] || String(idx + 1),
      option: opt,
      isCorrect,
      reason
    };
  });

  return {
    humanRule: enhanced.human_rule,
    triggerAnchor: enhanced.trigger_anchor,
    spanglishTrap: enhanced.spanglish_trap,
    workplaceUsage: enhanced.workplace_usage,
    forensicDistractors
  };
}


