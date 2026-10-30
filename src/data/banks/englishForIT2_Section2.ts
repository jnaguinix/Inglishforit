import { Question } from '../../types';

/**
 * English for IT 2 – Section 2: Grammar – Logical Deduction
 * Official OpenEDG / Cisco Curriculum
 * Covers: MUST (Certainty), MIGHT / MAY / COULD (Possibility), 
 * CAN (General Possibility only), CAN'T / COULDN'T (Impossibility & Strong Disbelief)
 */
export const ENGLISH_FOR_IT_2_SECTION_2_BANK: Question[] = [
  {
    "id": "it2-2-ex1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The main switch is dark, all rack indicator lights are off, and nobody in the office can connect. It ______ be a major power outage in the server room.",
    "options": [
      "must",
      "might",
      "can",
      "couldn't"
    ],
    "answer": 0,
    "why_correct": "• Pista: varios síntomas apuntan a lo mismo (todo apagado y nadie conecta).\n• Regla: evidencia fuerte ➔ must + be.\n• Descartas: might sería solo una posibilidad; can no se usa para deducir; couldn't diría que es imposible.",
    "why_wrong": [
      "Opción correcta: \"must be\" = \"tiene que ser\".",
      "Incorrecto: might sería solo una posibilidad; aquí la evidencia es fuerte.",
      "Incorrecto: can no se usa para deducir.",
      "Incorrecto: couldn't diría que es imposible."
    ],
    "tip_es": "Evidencia rotunda que no deja lugar a dudas = usa MUST (\"It must be...\").",
    "ref": null,
    "human_rule": "Evidencia fuerte (ahora) ➔ must + be.",
    "trigger_anchor": "all lights off… It ______ be a power outage ➔ must",
    "spanglish_trap": "Elegir might por prudencia. Con evidencia clara, must.",
    "workplace_usage": {
      "scenario": "Incidente Crítico en Sala de Servidores",
      "en": "The cooling system and PDU units are silent; it must be a total circuit breaker failure.",
      "es": "El sistema de refrigeración y las unidades PDU están en silencio; seguro es un fallo total del disyuntor."
    }
  },
  {
    "id": "it2-2-ex1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "We are investigating why the API response is slow. It ______ be an unindexed database query, but we still need to run telemetry traces to be certain.",
    "options": [
      "must",
      "might",
      "can",
      "couldn't"
    ],
    "answer": 1,
    "why_correct": "• Pista: \"we still need… to be certain\": todavía no hay certeza.\n• Regla: solo una posibilidad ➔ might + be.\n• Descartas: must dice que es seguro; can no se usa para deducir; couldn't dice que es imposible.",
    "why_wrong": [
      "Incorrecto: must dice que es seguro.",
      "Opción correcta: \"might be\" = \"podría ser\".",
      "Incorrecto: can no se usa para deducir.",
      "Incorrecto: couldn't dice que es imposible."
    ],
    "tip_es": "Si hay incertidumbre o necesitas verificar (\"still need to check\", \"to be certain\") = usa MIGHT.",
    "ref": null,
    "human_rule": "Solo una posibilidad (ahora) ➔ might + be.",
    "trigger_anchor": "…but we still need traces to be certain ➔ It ______ be ➔ might",
    "spanglish_trap": "Elegir must porque la causa suena razonable. Sin prueba, might.",
    "workplace_usage": {
      "scenario": "Diagnóstico de Latencia de Microservicios",
      "en": "The latency spike might be caused by garbage collection pauses, but let's review the APM metrics first.",
      "es": "El pico de latencia podría ser causado por pausas del recolector de basura, pero revisemos primero las métricas de APM."
    }
  },
  {
    "id": "it2-2-ex1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "All files on the shared network drive suddenly have a .locked extension and a ransom note appeared on the desktop. It ______ be ransomware!",
    "options": [
      "can",
      "might",
      "must",
      "couldn't"
    ],
    "answer": 2,
    "why_correct": "• Pista: todos los archivos con .locked y una nota de rescate: la evidencia es clara.\n• Regla: evidencia fuerte ➔ must + be.\n• Descartas: can no se usa para deducir; might sería solo posibilidad; couldn't diría que es imposible.",
    "why_wrong": [
      "Incorrecto: can no se usa para deducir.",
      "Incorrecto: might sería solo una posibilidad; aquí hay una nota de rescate.",
      "Opción correcta: \"must be\" = \"tiene que ser\".",
      "Incorrecto: couldn't diría que es imposible."
    ],
    "tip_es": "Evidencia forense innegable en pantalla = \"It MUST be ransomware!\" (fórmula oficial del video).",
    "ref": null,
    "human_rule": "Evidencia fuerte (ahora) ➔ must + be.",
    "trigger_anchor": ".locked files + ransom note ➔ It ______ be ransomware ➔ must",
    "spanglish_trap": "Elegir might por prudencia. Con una nota de rescate, must.",
    "workplace_usage": {
      "scenario": "Detección de Ransomware en SOC",
      "en": "Endpoint telemetry detected bulk file encryption; it must be ransomware executing in memory.",
      "es": "La telemetría de endpoints detectó cifrado masivo de archivos; seguro es ransomware ejecutándose en memoria."
    }
  },
  {
    "id": "it2-2-ex1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The terminal error message says \"Network path cannot be found.\" It ______ be a network error, but we haven't verified the DNS resolver yet.",
    "options": [
      "couldn't",
      "must",
      "can",
      "might"
    ],
    "answer": 3,
    "why_correct": "• Pista: \"we haven't verified\": todavía no hay prueba.\n• Regla: solo una posibilidad ➔ might + be.\n• Descartas: couldn't diría que es imposible; must diría que es seguro; can no se usa para deducir.",
    "why_wrong": [
      "Incorrecto: couldn't diría que es imposible.",
      "Incorrecto: must diría que es seguro.",
      "Incorrecto: can no se usa para deducir.",
      "Opción correcta: \"might be\" = \"podría ser\"."
    ],
    "tip_es": "Del video de English for IT 2: ante el mensaje preliminar de \"Network path cannot be found\", usamos \"It MIGHT be a network error\".",
    "ref": null,
    "human_rule": "Solo una posibilidad (ahora) ➔ might + be.",
    "trigger_anchor": "…we haven't verified the DNS yet ➔ It ______ be ➔ might",
    "spanglish_trap": "Elegir must porque el mensaje de red parece claro. Si falta verificar, might.",
    "workplace_usage": {
      "scenario": "Troubleshooting de Conectividad en Mesa de Ayuda",
      "en": "The user cannot reach the share; it might be an expired Kerberos ticket or a network route issue.",
      "es": "El usuario no puede acceder al recurso compartido; podría ser un ticket de Kerberos expirado o un problema de ruta de red."
    }
  },
  {
    "id": "it2-2-ex1-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "We were supposed to remind the operations team about the scheduled certificate rotation, but nobody sent the email. We ______ have forgotten.",
    "options": [
      "must",
      "might",
      "can",
      "couldn't"
    ],
    "answer": 0,
    "why_correct": "• Pista: nadie envió el correo; la conclusión lógica es que se olvidó.\n• Regla: evidencia fuerte (pasado) ➔ must have + 3.ª forma.\n• Descartas: might have sería solo posibilidad; can have no se usa; couldn't have diría que es imposible.",
    "why_wrong": [
      "Opción correcta: \"must have forgotten\" = \"seguro que se nos olvidó\".",
      "Incorrecto: might have sería solo una posibilidad; la evidencia es fuerte.",
      "Incorrecto: can have no se usa para deducir.",
      "Incorrecto: couldn't have diría que es imposible."
    ],
    "tip_es": "Estructura de deducción pasada con certeza: [Subject + MUST HAVE + past participle] (\"we must have forgotten\").",
    "ref": null,
    "human_rule": "Evidencia fuerte (pasado) ➔ must have + 3.ª forma.",
    "trigger_anchor": "nobody sent the email ➔ We ______ have forgotten ➔ must",
    "spanglish_trap": "Elegir might por prudencia. Si la evidencia lo dice claro, must.",
    "workplace_usage": {
      "scenario": "Revisión Postmortem de Incidente",
      "en": "The secondary replica was not upgraded during the window; the automated script must have timed out.",
      "es": "La réplica secundaria no se actualizó durante la ventana; seguro que el script automatizado agotó el tiempo de espera."
    }
  },
  {
    "id": "it2-2-ex1-q6",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The audit report identified raw credit card numbers in plaintext logs. They ______ have forgotten to use data masking in that microservice.",
    "options": [
      "must to",
      "may",
      "can",
      "could not to"
    ],
    "answer": 1,
    "why_correct": "• Pista: hay una prueba (números en texto plano), pero no se sabe la causa exacta.\n• Regla: posibilidad en el pasado ➔ may have + 3.ª forma.\n• Descartas: \"must to\" y \"could not to\" no existen; can no se usa para deducir.",
    "why_wrong": [
      "Incorrecto: después de must no va \"to\".",
      "Opción correcta: \"may have forgotten\" = \"puede que hayan olvidado\".",
      "Incorrecto: can no se usa para deducir.",
      "Incorrecto: después de could not no va \"to\"."
    ],
    "tip_es": "Probabilidad en pasado: [MAY / MIGHT + HAVE + past participle] (\"They may have forgotten to use data masking\").",
    "ref": null,
    "human_rule": "Posibilidad en el pasado ➔ may / might have + 3.ª forma.",
    "trigger_anchor": "plaintext cards in logs ➔ They ______ have forgotten (posible) ➔ may",
    "spanglish_trap": "Poner \"to\" después de must o could not. Después de un modal no va to.",
    "workplace_usage": {
      "scenario": "Auditoría de Cumplimiento PCI-DSS",
      "en": "The analytics pipeline exposed customer PII; the developers may have overlooked the anonymization filter.",
      "es": "El pipeline de analítica expuso información personal de clientes; puede que los desarrolladores hayan pasado por alto el filtro de anonimización."
    }
  },
  {
    "id": "it2-2-ex1-q7",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The database failover completed in under 3 seconds with zero dropped connections. The automated failover scripts ______ have worked flawlessly.",
    "options": [
      "can",
      "might",
      "must",
      "couldn't"
    ],
    "answer": 2,
    "why_correct": "• Pista: el cambio terminó en menos de 3 segundos y sin conexiones perdidas: la evidencia es clara.\n• Regla: evidencia fuerte ➔ must have + 3.ª forma.\n• Descartas: can no se usa para deducir; might sería solo posibilidad; couldn't diría que es imposible.",
    "why_wrong": [
      "Incorrecto: can no se usa para deducir.",
      "Incorrecto: might sería solo una posibilidad.",
      "Opción correcta: \"must have worked\" = \"seguro que funcionaron\".",
      "Incorrecto: couldn't diría que es imposible."
    ],
    "tip_es": "Resultado perfecto comprobado en métricas = deducción certera en pasado con MUST HAVE.",
    "ref": null,
    "human_rule": "Evidencia fuerte (pasado) ➔ must have + 3.ª forma.",
    "trigger_anchor": "failover in under 3 seconds with zero dropped connections ➔ scripts ______ have worked ➔ must",
    "spanglish_trap": "Elegir might por modestia. Si los datos son claros, must.",
    "workplace_usage": {
      "scenario": "Validación de Disaster Recovery",
      "en": "The cross-region replication took over seamlessly; the keepalive daemon must have triggered instantly.",
      "es": "La replicación entre regiones tomó el control de forma transparente; el demonio de keepalive seguro se activó al instante."
    }
  },
  {
    "id": "it2-2-ex2-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "It ______ be Dave's fault that the malware entered our intranet, because he never opens suspicious-looking emails and was on annual leave all week.",
    "options": [
      "could",
      "must",
      "might",
      "can't"
    ],
    "answer": 3,
    "why_correct": "• Pista: Dave estaba de vacaciones y nunca abre correos sospechosos.\n• Regla: la evidencia lo hace imposible ➔ can't + be.\n• Descartas: could y might dicen que es posible; must dice que seguro fue él.",
    "why_wrong": [
      "Incorrecto: could dice que es posible.",
      "Incorrecto: must dice que seguro fue él.",
      "Incorrecto: might dice que es posible.",
      "Opción correcta: \"can't be\" = \"no puede ser\"."
    ],
    "tip_es": "Imposibilidad lógica o descarte rotundo de una acusación = \"It CAN'T be [X]'s fault\".",
    "ref": null,
    "human_rule": "Imposible por la evidencia (ahora) ➔ can't + be.",
    "trigger_anchor": "he never opens suspicious emails and was on leave ➔ It ______ be his fault ➔ can't",
    "spanglish_trap": "Usar mustn't. Mustn't es \"prohibido\"; para \"no puede ser\", can't.",
    "workplace_usage": {
      "scenario": "Descarte Forense de Sospechoso",
      "en": "It can't be Sarah's commit that broke the build; her pull request hasn't even been merged yet.",
      "es": "No puede ser el commit de Sarah el que rompió la compilación; su pull request ni siquiera ha sido fusionado todavía."
    }
  },
  {
    "id": "it2-2-ex2-q2",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "It ______ have been my fault that the phishing email infected the host. I would never have opened any suspicious-looking email!",
    "options": [
      "couldn't",
      "must",
      "can",
      "could"
    ],
    "answer": 0,
    "why_correct": "• Pista: la persona dice que nunca habría abierto ese correo.\n• Regla: imposible en el pasado ➔ couldn't have + 3.ª forma.\n• Descartas: must have diría que seguro fue ella; can have no se usa; could have diría que es posible.",
    "why_wrong": [
      "Opción correcta: \"couldn't have been\" = \"no pudo haber sido\".",
      "Incorrecto: must have diría que seguro fue su culpa.",
      "Incorrecto: can have no se usa para deducir.",
      "Incorrecto: could have diría que es posible, pero dice que nunca lo habría hecho."
    ],
    "tip_es": "Imposibilidad rotunda en el pasado: [COULDN'T HAVE + past participle] (\"It couldn't have been my fault\").",
    "ref": null,
    "human_rule": "Imposible en el pasado ➔ couldn't have + 3.ª forma.",
    "trigger_anchor": "I would never have opened… ➔ It ______ have been my fault ➔ couldn't",
    "spanglish_trap": "Elegir could have por parecerse a \"podría haber sido\". Aquí la persona lo niega: couldn't have.",
    "workplace_usage": {
      "scenario": "Respuesta ante Auditoría de Seguridad",
      "en": "It couldn't have been an external brute-force attack; the SSH management port is completely blocked by our security group.",
      "es": "No pudo haber sido un ataque externo de fuerza bruta; el puerto de administración SSH está completamente bloqueado por nuestro grupo de seguridad."
    }
  },
  {
    "id": "it2-2-ex2-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "In cybersecurity awareness training, we teach that using insecure passwords ______ be a waste of time and an open door for credential stuffing.",
    "options": [
      "could",
      "can",
      "must",
      "might to"
    ],
    "answer": 1,
    "why_correct": "• Pista: es una afirmación general sobre lo que puede pasar con contraseñas inseguras.\n• Regla: lo que puede pasar en general ➔ can.\n• Descartas: could es más tentativo; must dice que siempre; \"might to\" no existe.",
    "why_wrong": [
      "Incorrecto: could es más tentativo; aquí se habla de algo que ocurre en general.",
      "Opción correcta: can = \"puede ser\" (en general).",
      "Incorrecto: must diría que siempre es así.",
      "Incorrecto: \"might to\" no existe."
    ],
    "tip_es": "Regla de oro de English for IT 2: CAN solo se usa para posibilidad GENERAL (\"Using insecure passwords CAN be a waste of time\"). Para deducción específica, usa COULD o MIGHT.",
    "ref": null,
    "human_rule": "Lo que puede pasar en general ➔ can.",
    "trigger_anchor": "using insecure passwords ______ be a waste (en general) ➔ can",
    "spanglish_trap": "Usar must para \"siempre\". Para algo que ocurre a menudo, can.",
    "workplace_usage": {
      "scenario": "Capacitación de Seguridad a Empleados",
      "en": "Sharing admin API tokens across multiple staging repositories can create severe blind spots.",
      "es": "Compartir tokens de API de administrador entre múltiples repositorios de staging puede crear puntos ciegos severos."
    }
  },
  {
    "id": "it2-2-ex2-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "If you want a specific example, you ______ use your date of birth as your master password, but I wouldn't recommend it.",
    "options": [
      "must",
      "can",
      "could",
      "couldn't"
    ],
    "answer": 2,
    "why_correct": "• Pista: dan un ejemplo posible, pero advierten \"I wouldn't recommend it\".\n• Regla: opción posible pero no recomendada ➔ could.\n• Descartas: must diría que es obligatorio; couldn't diría que no se puede; can también suena posible, pero este ejercicio busca could.",
    "why_wrong": [
      "Incorrecto: must diría que es obligatorio.",
      "Incorrecto: can también suena posible; este ejercicio busca could (ejemplo hipotético).",
      "Opción correcta: could = \"podrías\" (un ejemplo, sin recomendarlo).",
      "Incorrecto: couldn't diría que no se puede."
    ],
    "tip_es": "Posibilidad o sugerencia específica: usa COULD (\"You COULD use your date of birth, but I wouldn't recommend it\").",
    "ref": null,
    "human_rule": "Un ejemplo posible, sin recomendarlo ➔ could.",
    "trigger_anchor": "you ______ use your date of birth, but I wouldn't recommend it ➔ could",
    "spanglish_trap": "Elegir can por parecer más directo. Para un ejemplo que no recomiendas, could.",
    "workplace_usage": {
      "scenario": "Asesoría de Arquitectura de Infraestructura",
      "en": "You could configure a manual IPsec tunnel, but an automated SD-WAN overlay is far more resilient.",
      "es": "Podrías configurar un túnel IPsec manual, pero un overlay SD-WAN automatizado es mucho más resiliente."
    }
  },
  {
    "id": "it2-2-ex2-q5",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "You ______ have forgotten the mandatory MFA enrollment deadline already; security operations reminded us twice this week!",
    "options": [
      "could",
      "must",
      "might",
      "can't"
    ],
    "answer": 3,
    "why_correct": "• Pista: les recordaron dos veces esta semana; es difícil creer que ya se olvidó.\n• Regla: la evidencia lo hace casi imposible ➔ can't have + 3.ª forma.\n• Descartas: could y might dirían que es posible; must have diría que seguro lo olvidó.",
    "why_wrong": [
      "Incorrecto: could dice que es posible.",
      "Incorrecto: must have diría que seguro lo olvidó.",
      "Incorrecto: might dice que es posible.",
      "Opción correcta: \"can't have forgotten\" = \"no puede ser que ya lo hayas olvidado\"."
    ],
    "tip_es": "Incredulidad ante un olvido injustificable: \"You CAN'T have forgotten already; they've reminded us twice!\"",
    "ref": null,
    "human_rule": "No puede ser que ya… ➔ can't have + 3.ª forma.",
    "trigger_anchor": "reminded us twice this week! ➔ You ______ have forgotten ➔ can't",
    "spanglish_trap": "Usar must have por la sorpresa. Aquí la sorpresa es \"imposible\", así que can't have.",
    "workplace_usage": {
      "scenario": "Revisión de Cumplimiento de Políticas de TI",
      "en": "You can't have missed the deployment freeze announcement; it was pinned to the engineering Slack channel.",
      "es": "No puedes haber pasado por alto el anuncio de congelamiento de despliegues; estaba fijado en el canal de Slack de ingeniería."
    }
  },
  {
    "id": "it2-2-ex2-q6",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "It ______ have been my fault that the backup archive is incomplete. Maybe I didn't execute the rsync script with the recursive flag.",
    "options": [
      "could",
      "can't",
      "mustn't",
      "can"
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Maybe\" muestra que es solo una posibilidad.\n• Regla: posibilidad en el pasado ➔ could have + 3.ª forma.\n• Descartas: can't have dice que es imposible; mustn't have no se usa para deducir; can have tampoco.",
    "why_wrong": [
      "Opción correcta: \"could have been\" = \"podría haber sido\".",
      "Incorrecto: can't have dice que es imposible, y la frase dice \"Maybe\".",
      "Incorrecto: mustn't have no se usa para deducir.",
      "Incorrecto: can have no se usa para deducir."
    ],
    "tip_es": "Posibilidad débil admitida con humildad (\"maybe I didn't...\"): usa COULD HAVE (\"It could have been my fault\").",
    "ref": null,
    "human_rule": "Posibilidad en el pasado ➔ could / might have + 3.ª forma.",
    "trigger_anchor": "Maybe I didn't execute… ➔ It ______ have been my fault ➔ could",
    "spanglish_trap": "Elegir can't have porque la persona se defiende. La frase dice \"Maybe\": es una posibilidad.",
    "workplace_usage": {
      "scenario": "Autocrítica Técnica en Postmortem",
      "en": "It could have been my parameter change that degraded query performance; let me check the git blame.",
      "es": "Pudo haber sido mi cambio de parámetro el que degradó el rendimiento de las consultas; déjame revisar el git blame."
    }
  },
  {
    "id": "it2-2-ex2-q7",
    "section": "UE",
    "objective": "UE1",
    "topic": "G14",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Relying exclusively on hotel Wi-Fi every day for client video demonstrations ______ be very frustrating due to packet drops.",
    "options": [
      "could",
      "can",
      "must",
      "might to"
    ],
    "answer": 1,
    "why_correct": "• Pista: es algo que pasa en general (\"every day\").\n• Regla: lo que puede pasar en general ➔ can.\n• Descartas: could es más tentativo; must dice que siempre; \"might to\" no existe.",
    "why_wrong": [
      "Incorrecto: could es más tentativo; aquí se habla de algo general.",
      "Opción correcta: can = \"puede ser\" (en general).",
      "Incorrecto: must diría que siempre es así.",
      "Incorrecto: \"might to\" no existe."
    ],
    "tip_es": "Posibilidad general en la vida cotidiana (WiFi, passwords, tráfico): usa CAN.",
    "ref": null,
    "human_rule": "Lo que puede pasar en general ➔ can.",
    "trigger_anchor": "relying on hotel Wi-Fi every day ______ be frustrating ➔ can",
    "spanglish_trap": "Usar must por \"siempre\". Para algo que ocurre a menudo, can.",
    "workplace_usage": {
      "scenario": "Trabajo Remoto y Conectividad",
      "en": "Working over saturated mobile hotspots can be challenging during large docker image pulls.",
      "es": "Trabajar sobre hotspots móviles saturados puede ser desafiante durante descargas de imágenes docker pesadas."
    }
  },
  {
    "id": "it2-2-ex2-q8",
    "section": "UE",
    "objective": "UE3",
    "topic": "G14",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The engineering contractors ______ possibly have finished rewiring the server room in just twenty minutes; all the patch cables are still in unopened boxes!",
    "options": [
      "must",
      "can",
      "couldn't",
      "could"
    ],
    "answer": 2,
    "why_correct": "• Pista: los cables siguen en cajas sin abrir: no pudieron terminar.\n• Regla: la evidencia lo hace imposible ➔ couldn't (possibly) have + 3.ª forma.\n• Descartas: must dice que seguro terminaron; can no se usa así en pasado; could dice que es posible.",
    "why_wrong": [
      "Incorrecto: must dice que seguro terminaron.",
      "Incorrecto: can no se usa así para el pasado.",
      "Opción correcta: \"couldn't possibly have finished\" = \"es imposible que hayan terminado\".",
      "Incorrecto: could dice que es posible, pero los cables siguen sin abrir."
    ],
    "tip_es": "Imposibilidad absoluta reforzada: [COULDN'T POSSIBLY HAVE + past participle].",
    "ref": null,
    "human_rule": "Imposible por la evidencia (pasado) ➔ couldn't (possibly) have + 3.ª forma.",
    "trigger_anchor": "all the patch cables are still in unopened boxes ➔ ______ possibly have finished ➔ couldn't",
    "spanglish_trap": "Elegir must porque \"seguro que lo hicieron\" suena natural. La evidencia dice lo contrario.",
    "workplace_usage": {
      "scenario": "Inspección de Obras en Datacenter",
      "en": "The vendor couldn't possibly have certified the fiber lines; the OTDR testing equipment was never powered on.",
      "es": "Es imposible que el proveedor haya certificado las líneas de fibra; el equipo de pruebas OTDR nunca se encendió."
    }
  }
];
