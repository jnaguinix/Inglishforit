import { TopicId } from '../types';

export interface DecisionTableRow {
  ifStartsOrContains: string;
  thenLookFor: string;
  exampleSentence: string;
  whyRule: string;
}

export interface AnalogyCard {
  title: string;
  description: string;
  concreteExample: {
    en: string;
    es: string;
    highlight: string;
  };
}

export interface MentalShortcut {
  topicId: TopicId;
  humanTitle: string;
  badge: string;
  category: 'grammar' | 'vocab';
  tagline: string;
  analogies: AnalogyCard[];
  decisionTable: DecisionTableRow[];
  threeSecondTrigger: string;
  spanglishTrap: string;
}

export const MENTAL_SHORTCUTS: Partial<Record<TopicId, MentalShortcut>> = {
  // ==========================================
  // MODULE 1: PRODUCT MANAGEMENT
  // ==========================================
  G01: {
    topicId: 'G01',
    humanTitle: 'Voz Pasiva en IT: Pasiva Modal, Operativa y de Reporte Técnico',
    badge: 'Gramática 1.1',
    category: 'grammar',
    tagline: 'Las 3 fórmulas infalibles para acciones en servidores, obligaciones de políticas y reportes de incidentes.',
    analogies: [
      {
        title: 'Fórmula 1: Políticas y Obligaciones Técnicas (Modal Passive)',
        description:
          'Cuando una política de seguridad o auditoría exige que se ejecute una acción sobre un sistema (cifrado, parches, despliegues), el verbo modal se combina directamente con "BE" y el participio pasado (-ed / V3). REGLA DE ORO DE EXAMEN: Los verbos modales (must, should, can, will, may) NUNCA llevan "to". Decir *"must to be deployed"* es un error fatal.',
        concreteExample: {
          en: 'The new encryption algorithms must be deployed before the annual PCI-DSS audit.',
          es: 'Los nuevos algoritmos de cifrado deben ser desplegados antes de la auditoría anual PCI-DSS.',
          highlight: 'must be deployed'
        }
      },
      {
        title: 'Fórmula 2: El Comodín del Vocero Neutral (Impersonal Passive)',
        description:
          'En español decimos "Se dice que el servidor es lento". En inglés formal está prohibido empezar una frase sin sujeto, por lo que se usa el comodín neutral "IT". Colocas "It is said/thought/reported that..." y después de "that" copias la cláusula completa con sujeto y verbo subordinado.',
        concreteExample: {
          en: 'It is thought that the penetration tests produce false positives under heavy load.',
          es: 'Se piensa que las pruebas de penetración producen falsos positivos bajo carga pesada.',
          highlight: 'It is thought that'
        }
      },
      {
        title: 'Fórmula 3: El Reflector en el Protagonista (Personal Passive con Verbos de Reporte)',
        description:
          'Cuando prefieres poner al elemento técnico al inicio bajo los reflectores ("The penetration tests") acompañado de un VERBO DE REPORTE O OPINIÓN (thought, known, expected, considered), el conector "that" desaparece y la acción se reduce obligatoriamente a "TO + infinitivo". ¡OJO: El "TO" aplica únicamente con verbos de reporte (thought to, known to), NUNCA con modales (must be)!',
        concreteExample: {
          en: 'The penetration tests are thought to produce false positives under heavy load.',
          es: 'Se piensa que las pruebas de penetración producen falsos positivos bajo carga pesada.',
          highlight: 'are thought to produce'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Verbo Modal en el contexto (must / should / can / will / may)',
        thenLookFor: 'BE + Participio Pasado (-ed / V3) ¡SIN "TO"!',
        exampleSentence: 'The encryption algorithms must be deployed immediately.',
        whyRule: 'Los verbos modales directos jamás admiten la partícula "to". La fórmula es [MODAL + BE + V3].'
      },
      {
        ifStartsOrContains: 'Sujeto inanimado que recibe la acción (requests / access point / logs) + tiempo simple',
        thenLookFor: 'Auxiliar [was / were / has been] + Participio Pasado',
        exampleSentence: 'Transaction requests were distributed across four microservices.',
        whyRule: 'Voz pasiva operativa estándar: el sistema no ejecuta la acción, la recibe del balanceador o del equipo.'
      },
      {
        ifStartsOrContains: 'IT + verbo pasivo de reporte (is said / was reported / is thought / is believed)',
        thenLookFor: 'THAT + cláusula completa con su propio sujeto y verbo',
        exampleSentence: 'It is understood that user flows should be simplified.',
        whyRule: '"It" es un comodín gramatical que sostiene el reporte. Exige "that", nunca "to".'
      },
      {
        ifStartsOrContains: 'Sujeto Técnico al inicio + VERBO DE REPORTE (is thought / are known / is expected)',
        thenLookFor: 'TO + infinitivo (to be, to produce, to show)',
        exampleSentence: 'The synthetic stress tests are known to produce latency alerts.',
        whyRule: 'Al promover el sujeto técnico con un verbo de reporte intelectual, la cláusula se reduce a [TO + infinitivo].'
      }
    ],
    threeSecondTrigger:
      '1. ¿Hay un modal (must / should)? ➔ Busca "BE + Participio" (¡SIN "TO"!). 2. ¿Empieza con "IT"? ➔ Busca "THAT". 3. ¿Sujeto técnico + verbo de reporte (thought / known / expected)? ➔ Busca "TO + infinitivo".',
    spanglishTrap:
      '¡Dos trampas mortales de examen! 1) Poner "to" tras un verbo modal: *"must to be deployed"* (¡Falso! El modal va directo a "be deployed"). 2) Traducir el "se" del español con "that": *"The tests are known that they produce"* (¡Falso! Con verbo de reporte y sujeto técnico al frente, se exige "are known TO produce").'
  },

  G02: {
    topicId: 'G02',
    humanTitle: 'Pronombres Relativos: El Puente con Nombre vs. El Pronombre Fusión',
    badge: 'Gramática 1.2',
    category: 'grammar',
    tagline: 'Cuándo usar WHICH / THAT frente a la trampa de usar WHAT cuando ya existe un sustantivo.',
    analogies: [
      {
        title: 'El Puente con Nombre (THAT / WHICH / WHO)',
        description:
          'Si en la frase ya nombraste el objeto o persona ("the survey", "the test", "the engineer"), necesitas un puente que se refiera a él: WHICH / THAT para cosas ("the survey which we did") o WHO / WHOM para personas.',
        concreteExample: {
          en: 'The penetration test which we ran two weeks ago produced critical findings.',
          es: 'La prueba de penetración que ejecutamos hace dos semanas produjo hallazgos críticos.',
          highlight: 'test which we ran'
        }
      },
      {
        title: 'El Pronombre Fusión: WHAT (The thing that)',
        description:
          'La palabra "WHAT" es una esponja: absorbe el sustantivo y el pronombre al mismo tiempo. Significa exactamente "the thing that" (lo que). Por eso NUNCA puede tener un sustantivo escrito justo antes.',
        concreteExample: {
          en: 'Building awareness in our employees is what we should be doing right now.',
          es: 'Crear conciencia en nuestros empleados es lo que deberíamos estar haciendo ahora.',
          highlight: 'is what we should'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Hay una COMA justo antes del hueco (, ______)',
        thenLookFor: 'WHICH (cosas) o WHO / WHOM / WHOSE (personas) — ¡PROHIBIDO "THAT"!',
        exampleSentence: 'The staging database, which holds anonymized data, runs on port 5432.',
        whyRule: 'En cláusulas explicativas entre comas, "that" es gramaticalmente inválido en inglés estándar.'
      },
      {
        ifStartsOrContains: 'Entorno técnico, servidor o contenedor donde ocurre un proceso (staging environment / replica)',
        thenLookFor: 'WHERE o PREPOSICIÓN + WHICH (on which / in which)',
        exampleSentence: 'Deploy to the replica, where automated tests run (o on which write operations are blocked).',
        whyRule: 'Denota ubicación o contexto de ejecución técnico formal.'
      },
      {
        ifStartsOrContains: 'Hay un sustantivo de cosa justo antes (the survey, the tool, the bug)',
        thenLookFor: 'WHICH o THAT',
        exampleSentence: 'This is the API that fails under concurrency.',
        whyRule: 'Nunca uses "what" si el sustantivo ya está escrito antes.'
      },
      {
        ifStartsOrContains: 'NO hay sustantivo antes y significa "lo que" (is ____ we need)',
        thenLookFor: 'WHAT',
        exampleSentence: 'That’s exactly what the customer requested.',
        whyRule: '"What" reemplaza a "the thing that".'
      },
      {
        ifStartsOrContains: 'Modifica una pertenencia o equipo (____ team / ____ data / ____ laptops)',
        thenLookFor: 'WHOSE (cuyo / de quien)',
        exampleSentence: 'Engineers whose laptops contain unencrypted data will be suspended.',
        whyRule: 'Indica posesión técnica tanto para personas como para equipos/software. Nunca "who" ni "who\'s".'
      },
      {
        ifStartsOrContains: 'Se refiere a personas en función de objeto (after a comma or preposition)',
        thenLookFor: 'WHOM',
        exampleSentence: 'The field teams, whom you have already met, handle tier 1.',
        whyRule: 'Registro formal para personas cuando reciben la acción.'
      }
    ],
    threeSecondTrigger:
      '¿Hay COMA antes (, ______)? ➔ Usa WHICH (¡PROHIBIDO THAT!). ¿Lugar/entorno de ejecución? ➔ WHERE o ON WHICH. ¿Sustantivo previo? ➔ WHICH/THAT/WHO. ¿Sin sustantivo ("lo que")? ➔ WHAT. ¿Posesión? ➔ WHOSE.',
    spanglishTrap:
      '1) Usar "that" después de una coma explicativa (*"The server, that was updated..."* → ¡ERROR! Debe ser *"which was updated"*). 2) Decir "the survey what we did" (debe ser "which/that we did").'
  },

  V08: {
    topicId: 'V08',
    humanTitle: 'Vocabulario de Producto y UX: Métricas y Colocaciones Oficiales',
    badge: 'Vocabulario 1.3 / 1.5',
    category: 'vocab',
    tagline: 'Cómo navegar encuestas NPS, justificación financiera de UX y negociación con proveedores.',
    analogies: [
      {
        title: 'Métricas de Negocio: Detractors vs. ROI',
        description:
          'En el diálogo oficial, las encuestas NPS revelan un aumento de detractores (clientes insatisfechos). Como no siempre se puede probar el retorno de inversión (ROI) inmediato de rediseñar una pantalla, la estrategia técnica es "revelar los riesgos de no invertir" (reveal the risks of not investing).',
        concreteExample: {
          en: 'If we cannot prove revenue opportunities, we can reveal the risks of not investing in UX.',
          es: 'Si no podemos demostrar oportunidades de ingresos, podemos revelar los riesgos de no invertir en UX.',
          highlight: 'reveal the risks of not investing'
        }
      },
      {
        title: 'Colocaciones Fijas en Reuniones de Gestión',
        description:
          'En inglés corporativo hay verbos que se "casan" con ciertos complementos: "mention an issue" es solo aludir a un problema sin profundizar; "go back to" es retomar conclusiones previas.',
        concreteExample: {
          en: 'I would like to go back to the conclusions of our previous sprint retrospective.',
          es: 'Me gustaría retomar las conclusiones de nuestra retrospectiva de sprint anterior.',
          highlight: 'go back to the conclusions'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Significado: "comentar algo brevemente sin entrar en detalles"',
        thenLookFor: 'MENTION an issue',
        exampleSentence: 'Several detractors mentioned UX friction during login.',
        whyRule: '"Mention" implica brevedad; no es "describe" ni "explain".'
      },
      {
        ifStartsOrContains: 'Significado: "dar a conocer información o riesgos previamente ocultos"',
        thenLookFor: 'REVEAL information / risks',
        exampleSentence: 'The security audit revealed several unpatched vulnerabilities.',
        whyRule: '"Reveal" es desvelar; su opuesto es "conceal" (ocultar).'
      },
      {
        ifStartsOrContains: 'Significado: "retomar un tema o acuerdo de reuniones pasadas"',
        thenLookFor: 'GO BACK TO',
        exampleSentence: 'Let’s go back to what we agreed on yesterday.',
        whyRule: 'Frase idiomática estándar en gestión de proyectos.'
      },
      {
        ifStartsOrContains: 'Encuesta de recomendación al cliente (0 a 10) con detractores',
        thenLookFor: 'NPS (Net Promoter Score) survey',
        exampleSentence: 'The NPS survey showed detractors rose from 10% to 14%.',
        whyRule: 'Término estándar de la industria para medir lealtad de usuarios.'
      }
    ],
    threeSecondTrigger:
      'Breve sin detalles = MENTION. Mostrar lo oculto = REVEAL. Retomar charla = GO BACK TO. Encuesta = NPS.',
    spanglishTrap:
      'Confundir "mention" con "describe". En el examen te preguntarán por una acción "without giving much detail": la respuesta exacta siempre es "mention", nunca "detail" ni "elaborate".'
  },

  G03: {
    topicId: 'G03',
    humanTitle: 'Hipótesis con "As If" / "As Though": La Queja vs. Lo Imposible',
    badge: 'Gramática 1.4',
    category: 'grammar',
    tagline: 'El uso del Past Simple para reproches de trabajo y "WERE" para situaciones 100% irreales.',
    analogies: [
      {
        title: 'El Reproche o Duda (Past Simple: "como si supieras")',
        description:
          'Cuando un compañero o jefe te pide algo irrazonable, usas "as if" + Past Simple para expresar duda o queja (exactamente como el Segundo Condicional). Aunque estemos hablando de hoy, usamos pasado para indicar que NO es real.',
        concreteExample: {
          en: 'You are asking for more tickets, as if I didn’t have enough to do already!',
          es: '¡Me pides más tickets, como si no tuviera ya suficiente trabajo!',
          highlight: 'as if I didn’t have'
        }
      },
      {
        title: 'La Ficción Absoluta (Subjuntivo "WERE")',
        description:
          'Si quieres enfatizar que una situación es completamente contrafactual o falsa, usas "were" con cualquier sujeto (I, he, she, it).',
        concreteExample: {
          en: 'They are acting as if it were normal to have so many detractors.',
          es: 'Están actuando como si fuera normal tener tantos detractores (en realidad es alarmante).',
          highlight: 'as if it were normal'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Frase con "as if / as though" expresando situación no real en el presente',
        thenLookFor: 'PAST SIMPLE (didn’t have, knew, understood)',
        exampleSentence: 'You talk as if you knew the root cause.',
        whyRule: 'Al igual que en el segundo condicional, la irrealidad exige pasado simple.'
      },
      {
        ifStartsOrContains: 'Situación con verbo To Be 100% contrafactual (con I, he, she, it)',
        thenLookFor: 'WERE (subjuntivo formal)',
        exampleSentence: 'She treats the staging server as if it were production.',
        whyRule: 'En inglés formal de examen, "were" se usa para todas las personas en lo irreal.'
      },
      {
        ifStartsOrContains: 'Verbos de percepción sensorial (looks, seems, appears)',
        thenLookFor: 'AS IF o AS THOUGH (son intercambiables)',
        exampleSentence: 'It looks as though the database connection timed out.',
        whyRule: '"As if" y "as though" tienen exactamente la misma validez sintáctica.'
      }
    ],
    threeSecondTrigger:
      '¿Ves "as if" o "as though"? Busca un verbo en PASADO o "WERE". Nunca presente simple cuando sea hipotético.',
    spanglishTrap:
      'En español decimos "hablas como si supieras" (subjuntivo imperfecto). En inglés no existe esa conjugación, por lo que se recurre al Past Simple ordinario ("as if you knew"). Cuidado con elegir opciones con "would know" tras "as if".'
  },

  // ==========================================
  // MODULE 2: NETWORK ENGINEER
  // ==========================================
  G04: {
    topicId: 'G04',
    humanTitle: 'El "DO" Enfático: El Resaltador de Texto del Ingeniero',
    badge: 'Gramática 2.1',
    category: 'grammar',
    tagline: 'Cómo usar DO / DOES / DID en oraciones afirmativas para defender tu postura o confirmar hechos.',
    analogies: [
      {
        title: 'El Marcatextos Amarillo (Resaltador Verbal)',
        description:
          'En primaria te enseñaron que "do" solo sirve para preguntas ("Do you know?") o negativas ("I don’t know"). Pero en oraciones afirmativas, "do" funciona como un marcatextos fosforescente: sirve para recalcar un hecho con fuerza frente a una duda.',
        concreteExample: {
          en: 'I did execute the migration script, despite what the monitoring dashboard claims.',
          es: 'Sí ejecuté el script de migración, a pesar de lo que afirme el panel de monitoreo.',
          highlight: 'did execute'
        }
      },
      {
        title: 'El Verbo Base que Acompaña al Marcatextos',
        description:
          'Como el "do/does/did" ya absorbe todo el tiempo verbal y la tercera persona, el verbo que le sigue SIEMPRE va en su forma base más pura, sin "-s", sin "-ed" y sin "to".',
        concreteExample: {
          en: 'The switch does support VLAN tagging at layer 2.',
          es: 'El switch sí soporta etiquetado VLAN en capa 2.',
          highlight: 'does support'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Afirmación enfática en presente con I / You / We / They',
        thenLookFor: 'DO + verbo en forma base (do want, do need)',
        exampleSentence: 'We do require confirmation from the CISO.',
        whyRule: '"Do" añade énfasis afirmativo antes de la forma base.'
      },
      {
        ifStartsOrContains: 'Afirmación enfática en presente con He / She / It (The system / The router)',
        thenLookFor: 'DOES + verbo en forma base (does have, does work)',
        exampleSentence: 'The firewall does filter port 443 correctly.',
        whyRule: '"Does" toma la "s" de tercera persona; el verbo queda en forma base.'
      },
      {
        ifStartsOrContains: 'Afirmación enfática en pasado (Yesterday / Last night / Before)',
        thenLookFor: 'DID + verbo en forma base (did verify, did patch)',
        exampleSentence: 'I did check the routing table before rebooting.',
        whyRule: '"Did" toma el pasado; nunca pongas *"did checked"*.'
      }
    ],
    threeSecondTrigger:
      'DO / DOES / DID en afirmativa = Busca el verbo en FORMA BASE limpia (sin -s, sin -ed, sin to).',
    spanglishTrap:
      'En español decimos "Yo sí revisé el router". El hispanohablante tiende a decir *"I yes checked"* o cometer el error de doble pasado *"I did checked"*. ¡El inglés correcto es "I did check"!'
  },

  V07: {
    topicId: 'V07',
    humanTitle: 'Redes y Gestión de Incidentes: Bobby y Peter (Comprensión Oficial)',
    badge: 'Vocabulario 2.2',
    category: 'vocab',
    tagline: 'Puntos de acceso clandestinos, riesgos de seguridad y vocabulario de mitigación técnica.',
    analogies: [
      {
        title: 'El Incidente del Rogue AP (Punto de Acceso No Autorizado)',
        description:
          'En el diálogo oficial de la sección 2.2, Peter (ingeniero junior) configuró un punto de acceso no autorizado para agilizar pruebas de hardware. Su mánager Bobby le explica que omitir el protocolo crea riesgos inaceptables que deben ser eliminados de inmediato.',
        concreteExample: {
          en: 'Rogue access points must be eliminated right away to protect internal network segments.',
          es: 'Los puntos de acceso no autorizados deben eliminarse de inmediato para proteger los segmentos de red internos.',
          highlight: 'eliminated right away'
        }
      },
      {
        title: 'Términos Clave de Gestión de Incidentes',
        description:
          '"Handled" significa atendido o resuelto; "Omitted" significa dejado fuera o no incluido; "Nevertheless" significa no obstante o a pesar de ello.',
        concreteExample: {
          en: 'The ticket was handled promptly; nevertheless, we must review the change log.',
          es: 'El ticket fue gestionado con prontitud; no obstante, debemos revisar el registro de cambios.',
          highlight: 'handled promptly; nevertheless'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Significado: "resuelto, gestionado o lidiado con éxito"',
        thenLookFor: 'HANDLED (dealt with)',
        exampleSentence: 'The junior engineer handled the configuration task.',
        whyRule: 'Término estándar para la resolución de tickets y tareas operativas.'
      },
      {
        ifStartsOrContains: 'Significado: "dejado de lado, no incluido en el proceso"',
        thenLookFor: 'OMITTED (left out)',
        exampleSentence: 'Critical security steps were omitted during setup.',
        whyRule: '"Omit" en IT implica ignorar o saltarse una instrucción mandatoria.'
      },
      {
        ifStartsOrContains: 'Significado: "inmediatamente, sin demora"',
        thenLookFor: 'RIGHT AWAY (immediately)',
        exampleSentence: 'Disable that rogue Wi-Fi hotspot right away.',
        whyRule: 'Frase clave en protocolos de emergencia de ciberseguridad.'
      },
      {
        ifStartsOrContains: 'Conector de contraste formal: "a pesar de ello, no obstante"',
        thenLookFor: 'NEVERTHELESS (however / all the same)',
        exampleSentence: 'The network is stable; nevertheless, we must patch.',
        whyRule: 'Conector de alta frecuencia en el examen B2.'
      }
    ],
    threeSecondTrigger:
      'Gestionado = HANDLED. Saltado/olvidado = OMITTED. Al instante = RIGHT AWAY. No obstante = NEVERTHELESS.',
    spanglishTrap:
      'Confundir "handled" con manipular manualmente; en IT significa resolver un ticket o problema. También cuidado con "nevertheless": equivale a "sin embargo / no obstante", no a "nunca menos".'
  },

  G05: {
    topicId: 'G05',
    humanTitle: 'Preposiciones Dependientes: Los Matrimonios Fijos del Inglés',
    badge: 'Gramática 2.3',
    category: 'grammar',
    tagline: 'Por qué en inglés los verbos y adjetivos están casados de por vida con una preposición.',
    analogies: [
      {
        title: 'Los Matrimonios Fijos (Sin Divorcio Posible)',
        description:
          'En español decimos "depende DE" (usamos "de"). Pero en inglés, el verbo DEPEND está casado exclusivamente con ON ("depend on"). Si pones *"depend of"*, te quitan los puntos. En inglés no se traduce la preposición; se aprende la pareja fija.',
        concreteExample: {
          en: 'Our SLA uptime depends on the redundancy of our core switches.',
          es: 'La disponibilidad de nuestro SLA depende de la redundancia de nuestros switches centrales.',
          highlight: 'depends on'
        }
      },
      {
        title: 'Adjetivos de Capacidad y Responsabilidad',
        description:
          '"Incapable" siempre se casa con OF ("incapable of handling"). "Responsible" siempre con FOR ("responsible for maintenance").',
        concreteExample: {
          en: 'Legacy routers are incapable of processing modern BGP routing tables.',
          es: 'Los routers heredados son incapaces de procesar tablas de enrutamiento BGP modernas.',
          highlight: 'incapable of processing'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Adjetivos de riesgo en ciberseguridad: SUSCEPTIBLE / VULNERABLE / PRONE',
        thenLookFor: 'TO (susceptible to / vulnerable to / prone to)',
        exampleSentence: 'Unpatched servers are highly susceptible to man-in-the-middle attacks.',
        whyRule: 'Régimen fijo obligatorio en seguridad informática. Nunca uses "with" ni "for".'
      },
      {
        ifStartsOrContains: 'Verbo INSIST (insistir en una medida o auditoría)',
        thenLookFor: 'ON + gerundio (insisted on conducting / insists on testing)',
        exampleSentence: 'The director insisted on conducting a complete penetration test.',
        whyRule: '¡Trampa reina del español! En español decimos "insistir en", pero en inglés es "insist ON", jamás "insist in".'
      },
      {
        ifStartsOrContains: 'Normativas y cumplimiento: COMPLY vs. ADHERE',
        thenLookFor: 'COMPLY WITH (cumplir con) | ADHERE TO (adherirse a)',
        exampleSentence: 'Enterprises must comply with regulations and adhere to HIPAA policies.',
        whyRule: '"Comply" rige "with"; "Adhere" rige "to".'
      },
      {
        ifStartsOrContains: 'Verbo DEPEND o RELY',
        thenLookFor: 'ON (depend on / rely on)',
        exampleSentence: 'We rely on automatic failover.',
        whyRule: 'Nunca uses "of" con depend o rely.'
      },
      {
        ifStartsOrContains: 'Verbo CONSIST (estar compuesto de)',
        thenLookFor: 'OF (consist of)',
        exampleSentence: 'The DMZ consists of two hardened firewalls.',
        whyRule: '"Consist" siempre va con "of" para enumerar componentes (nunca "consist in").'
      },
      {
        ifStartsOrContains: 'Sustantivo INCREASE o DECREASE (variación en una métrica o ataques)',
        thenLookFor: 'IN (an increase in latency / in cyber attacks)',
        exampleSentence: 'We observed an increase in packet loss.',
        whyRule: 'El cambio dentro de una variable métrica o ámbito rige "in".'
      },
      {
        ifStartsOrContains: 'Adjetivo INCAPABLE o CAPABLE',
        thenLookFor: 'OF + gerundio o sustantivo (incapable of handling)',
        exampleSentence: 'The hardware is incapable of gigabit throughput.',
        whyRule: '"Incapable of + -ing" (a diferencia de "unable to").'
      },
      {
        ifStartsOrContains: 'Seguridad perimetral: PROTECT',
        thenLookFor: 'FROM o AGAINST (protect the router from/against intruders)',
        exampleSentence: 'Firewalls protect internal endpoints from unauthorized access.',
        whyRule: '"Protect" se combina con "from" o "against".'
      },
      {
        ifStartsOrContains: 'Sustantivo o verbo IMPACT',
        thenLookFor: 'ON (an impact on performance)',
        exampleSentence: 'The maintenance will have an impact on users.',
        whyRule: 'Impacto "sobre" algo se expresa con "on".'
      }
    ],
    threeSecondTrigger:
      'Vulnerable/Susceptible ➔ TO · Insist ➔ ON + -ing · Comply ➔ WITH · Adhere ➔ TO · Depend/Rely ➔ ON · Consist/Incapable ➔ OF · Increase ➔ IN.',
    spanglishTrap:
      '¡Dos trampas mortales de examen! 1) "insist in" (¡NO! Es INSIST ON). 2) "depend of" / "consist in" (¡NO! Es DEPEND ON / CONSIST OF).'
  },

  V06: {
    topicId: 'V06',
    humanTitle: 'Roles y Límites en IT: Delimitación de Tareas y Cadena de Mando',
    badge: 'Vocabulario 2.4',
    category: 'vocab',
    tagline: 'Jim y Mark: Cableado de fibra vs. cobre, peticiones rechazadas y protocolo de escalación.',
    analogies: [
      {
        title: 'La Frontera de Tareas (Beyond your scope of duties)',
        description:
          'En el memo oficial, Jim (mánager) le recuerda a Mark (network engineer) que tender cables UTP de cobre y probarlos con testers le corresponde a IT Helpdesk. Mark solo debe tocar cableado óptico (optical cabling). Asumir tareas ajenas está "beyond your scope of duties" (fuera de tus responsabilidades).',
        concreteExample: {
          en: 'Patch panel copper cabling is beyond your scope of duties; it belongs to Helpdesk.',
          es: 'El cableado de cobre del panel de conexiones está fuera de tus responsabilidades; le corresponde al Helpdesk.',
          highlight: 'beyond your scope of duties'
        }
      },
      {
        title: 'El Protocolo de Escalación (No te pelees con otros equipos)',
        description:
          'Si pides apoyo y el otro departamento no hace nada ("didn\'t do a thing") o te devuelve la solicitud ("sent back"), la regla oficial es NUNCA confrontar: debes reportarlo a tu mánager directo para que él lo gestione formalmente.',
        concreteExample: {
          en: 'If a request is sent back by another team, report it to me directly.',
          es: 'Si una solicitud es devuelta sin tramitar por otro equipo, repórtamelo directamente a mí.',
          highlight: 'sent back... report it to me'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Significado: "no forma parte de tu trabajo o descripción de puesto"',
        thenLookFor: 'BEYOND YOUR SCOPE OF DUTIES',
        exampleSentence: 'Testing user patch cords is beyond your scope of duties.',
        whyRule: 'Expresión corporativa formal para definir los límites del puesto.'
      },
      {
        ifStartsOrContains: 'Significado: "solicitud rebotada o rechazada sin tramitar"',
        thenLookFor: 'SENT BACK',
        exampleSentence: 'The cabling ticket was sent back without explanation.',
        whyRule: 'Equivale formalmente a "returned".'
      },
      {
        ifStartsOrContains: 'Significado: "inacción total, no hizo absolutamente nada"',
        thenLookFor: 'DIDN’T DO A THING',
        exampleSentence: 'The on-duty technician didn’t do a thing to help.',
        whyRule: 'Modismo oficial de la guía equivalente a "did nothing".'
      },
      {
        ifStartsOrContains: 'Conector: "a pesar de todo, no obstante"',
        thenLookFor: 'ALL THE SAME (nevertheless)',
        exampleSentence: 'They were late; all the same, they completed the audit.',
        whyRule: '"All the same" funciona como sinónimo formal de "nevertheless".'
      },
      {
        ifStartsOrContains: 'Estructura con DISCOURAGE (desanimar)',
        thenLookFor: 'DISCOURAGE FROM + verbo en -ing (gerundio)',
        exampleSentence: 'I don’t want to discourage you from becoming involved.',
        whyRule: 'Régimen fijo: discourage someone from doing something.'
      }
    ],
    threeSecondTrigger:
      'Fuera del puesto = BEYOND SCOPE. Rebotado = SENT BACK. Nada de nada = DIDN’T DO A THING. A pesar de todo = ALL THE SAME. Discourage from + ING.',
    spanglishTrap:
      'Falso amigo con "all the same": no significa "todo igual", sino "a pesar de todo / de todos modos" (nevertheless). Y recuerda: tras "discourage from", el verbo va con -ING.'
  },

  // ==========================================
  // MODULES 3–6 (IT 1) & MODULES 1–7 (IT 2): G06 TO G29
  // ==========================================
  G06: {
    topicId: 'G06',
    humanTitle: 'Conectores de Contraste: El Detector de Verbos vs. Sustantivos',
    badge: 'Gramática 3.1',
    category: 'grammar',
    tagline: 'Cómo elegir entre Although, Despite e In spite of mirando solo la palabra que va después del hueco.',
    analogies: [
      {
        title: 'El Enchufe de Oración Completa (Although / Even though) vs. El Enchufe de Bloque (Despite / In spite of)',
        description:
          'Piensa en dos tipos de enchufes incompatibles: "Although" y "Even though" exigen que después venga una oración completa con Sujeto + Verbo ("Although the server crashed"). En cambio, "Despite" e "In spite of" solo aceptan un sustantivo o verbo en -ING ("Despite the crash" / "Despite crashing"). Si necesitas enchufar una oración completa tras "Despite", usa el adaptador "the fact that".',
        concreteExample: {
          en: 'Despite the severe bandwidth throttling, the database replication finished on schedule.',
          es: 'A pesar de la severa limitación de ancho de banda, la replicación de la base de datos terminó a tiempo.',
          highlight: 'Despite the severe bandwidth throttling'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Después del hueco hay [Sujeto + Verbo conjugado] (the server was / we tested)',
        thenLookFor: 'ALTHOUGH / EVEN THOUGH / THOUGH',
        exampleSentence: 'Although the firewall was active, the packet got through.',
        whyRule: 'Son conjunciones: exigen cláusula con sujeto y verbo.'
      },
      {
        ifStartsOrContains: 'Después del hueco hay [Sustantivo / Pronombre / Verbo en -ING] sin verbo conjugado',
        thenLookFor: 'DESPITE o IN SPITE OF',
        exampleSentence: 'Despite testing thoroughly, a regression bug appeared.',
        whyRule: 'Son preposiciones: solo aceptan grupo nominal o gerundio (-ing).'
      },
      {
        ifStartsOrContains: 'Después del hueco dice literalmente "the fact that + Sujeto + Verbo"',
        thenLookFor: 'DESPITE o IN SPITE OF (+ the fact that)',
        exampleSentence: 'Despite the fact that latency increased, no calls dropped.',
        whyRule: '"The fact that" convierte una oración en sustantivo para que encaje con Despite.'
      },
      {
        ifStartsOrContains: 'Opción contiene "Despite of..."',
        thenLookFor: 'DESCARTAR INMEDIATAMENTE (Trampa eliminatoria)',
        exampleSentence: 'Incorrecto: *Despite of the delay* → Correcto: Despite the delay.',
        whyRule: '"Despite" NUNCA lleva "of". O dices "Despite" o dices "In spite of".'
      }
    ],
    threeSecondTrigger:
      '¿Sigue [Sujeto + Verbo]? → ALTHOUGH / EVEN THOUGH. ¿Sigue [Sustantivo o -ING]? → DESPITE / IN SPITE OF. Jamás elijas "Despite of".',
    spanglishTrap:
      'Como en español decimos "A pesar DE", el cerebro hispanohablante mezcla "Despite" con "In spite of" e inventa *"Despite of"*. Es el distractor número 1 del examen.'
  },

  G07: {
    topicId: 'G07',
    humanTitle: 'Inversión Negativa: El Efecto Espejo de las Alertas de Seguridad',
    badge: 'Gramática 3.2',
    category: 'grammar',
    tagline: 'Cuando una política empieza con Never, Rarely o Under no circumstances, el auxiliar salta delante del sujeto.',
    analogies: [
      {
        title: 'El Modo Pregunta Activado por Alarma Negativa',
        description:
          'Cuando una frase formal empieza con una palabra negativa o restrictiva ("Under no circumstances", "Never", "Rarely", "Seldom", "Not only"), se activa una alarma que invierte el orden normal [Sujeto + Verbo] y lo pone exactamente como si fuera una pregunta: [Auxiliar/Modal + Sujeto + Verbo base].',
        concreteExample: {
          en: 'Under no circumstances should support personnel share production encryption keys over Slack.',
          es: 'Bajo ninguna circunstancia el personal de soporte debe compartir claves de cifrado de producción por Slack.',
          highlight: 'should support personnel share'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Inicio con "Under no circumstances / On no account / Never / Rarely / Seldom"',
        thenLookFor: '[Auxiliar / Modal + Sujeto + Verbo base] (should users / have we / did the system)',
        exampleSentence: 'Rarely do we see such a sophisticated zero-day exploit.',
        whyRule: 'Adverbio negativo al inicio obliga a invertir auxiliar y sujeto.'
      },
      {
        ifStartsOrContains: 'Inicio con "Not only..."',
        thenLookFor: '[did/does/has/is + Sujeto + Verbo] ... but also',
        exampleSentence: 'Not only did the node crash, but it also corrupted the cache.',
        whyRule: 'La inversión ocurre en la primera cláusula inmediatamente después de "Not only".'
      },
      {
        ifStartsOrContains: 'Inicio con "No sooner..." vs "Hardly / Scarcely..."',
        thenLookFor: 'No sooner HAD + Sujeto + V3 ... THAN | Hardly HAD + Sujeto + V3 ... WHEN',
        exampleSentence: 'No sooner had we deployed the patch than the alerts stopped.',
        whyRule: '"No sooner" se casa con "than"; "Hardly/Scarcely" se casan con "when".'
      },
      {
        ifStartsOrContains: 'Inicio con "Only after / Only when / Only by + [cláusula/bloque]"',
        thenLookFor: 'La inversión va en la SEGUNDA parte (el resultado principal)',
        exampleSentence: 'Only after rebooting the cluster did the services recover.',
        whyRule: 'Con "Only after/when", primero se cierra la condición y luego se invierte el verbo principal.'
      }
    ],
    threeSecondTrigger:
      '¿Frase empieza con palabra negativa (Under no circumstances / Rarely / Not only)? Invierte como pregunta: [Auxiliar + Sujeto + Verbo].',
    spanglishTrap:
      'En español dejamos el sujeto primero ("Bajo ninguna circunstancia los usuarios deben..."). En inglés, elegir *"Under no circumstances users should..."* sin invertir es fallo directo.'
  },

  G08: {
    topicId: 'G08',
    humanTitle: 'Modales de Consejo: El Semáforo de Urgencia Operativa',
    badge: 'Gramática 4.1',
    category: 'grammar',
    tagline: 'Diferenciar entre sugerencia diplomática (should / ought to) y advertencia crítica con consecuencia (had better).',
    analogies: [
      {
        title: 'Recomendación de Buenas Prácticas (Should) vs. Alerta de Incendio (Had Better)',
        description:
          '"Should" y "ought to" son consejos generales ("deberías documentar el código"). En cambio, "had better" significa "más vale que lo hagamos YA o habrá un desastre inmediato". Y ojo: "had better" nunca lleva "to", a pesar de que "ought to" sí lo lleva.',
        concreteExample: {
          en: 'We had better isolate the infected subnet immediately before the ransomware spreads.',
          es: 'Más vale que aislemos la subred infectada de inmediato antes de que el ransomware se propague.',
          highlight: 'had better isolate'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Advertencia urgente con riesgo o consecuencia inminente si no se actúa',
        thenLookFor: 'HAD BETTER + verbo en forma base (sin "to")',
        exampleSentence: 'You had better back up the database before running that script.',
        whyRule: '"Had better" expresa urgencia inmediata y nunca acepta "to".'
      },
      {
        ifStartsOrContains: 'Forma negativa de "had better"',
        thenLookFor: 'HAD BETTER NOT + verbo base (nunca "hadn\'t better")',
        exampleSentence: 'We had better not deploy on Friday afternoon.',
        whyRule: 'El "not" va después de "better" y antes del verbo base.'
      },
      {
        ifStartsOrContains: 'Antes del hueco está "ought" o después del hueco hay "to + verbo base"',
        thenLookFor: 'OUGHT TO + verbo base',
        exampleSentence: 'The team ought to encryption-test all backups.',
        whyRule: '"Ought" es el único modal de consejo que exige la partícula "to".'
      }
    ],
    threeSecondTrigger:
      '¿Riesgo inminente? → HAD BETTER + verbo SIN "to" (Negativa: HAD BETTER NOT). ¿Hay un "to" tras el hueco? → OUGHT TO.',
    spanglishTrap:
      'Poner "to" después de "had better" (*"we had better to isolate"*) o pensar que "had" significa pasado (en realidad "had better" siempre apunta al presente/futuro inmediato).'
  },

  G09: {
    topicId: 'G09',
    humanTitle: 'Peticiones Diplomáticas y Cortesía: El Guante de Seda en Soporte',
    badge: 'Gramática 4.1 (IT 1) / 2.3 & 6.1 (IT 2)',
    category: 'grammar',
    tagline: 'Cómo pedir tareas críticas a usuarios y gerentes sin sonar autoritario ni cometer errores sintácticos.',
    analogies: [
      {
        title: 'El Filtro de Cortesía en Soporte N1-N3 (Would you mind vs. Could you possibly)',
        description:
          'En soporte técnico no se dice "Send the logs now" o "Reboot the router". Se usan dos llaves maestras con reglas sintácticas opuestas: 1) "Would you mind..." rige obligatoriamente un verbo en -ING ("Would you mind checking...?"); 2) "Could you possibly / kindly..." rige la forma base pura sin "to" ("Could you possibly verify...?").',
        concreteExample: {
          en: 'During the escalation call, the engineer asked: "Would you mind refreshing the gateway interface status?"',
          es: 'Durante la llamada de escalación, el ingeniero preguntó: "¿Le importaría actualizar el estado de la interfaz del gateway?"',
          highlight: 'Would you mind refreshing'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'La frase abre con "Would you mind..." o "Do you mind..."',
        thenLookFor: 'Verbo en -ING (checking, refreshing, sharing, providing)',
        exampleSentence: 'Would you mind attaching the diagnostic traceroute logs to the ticket?',
        whyRule: 'El verbo "mind" rige obligatoriamente gerundio (-ing) en inglés formal.'
      },
      {
        ifStartsOrContains: 'La frase abre con "Could you possibly / kindly..." o "Would you kindly..."',
        thenLookFor: 'Verbo en FORMA BASE pura sin "to" (verify, provide, check)',
        exampleSentence: 'Could you possibly verify whether the optical link indicator is illuminated?',
        whyRule: 'Tras los modales "could / would" acompañados de adverbio de cortesía, el verbo va en forma base.'
      },
      {
        ifStartsOrContains: 'Fórmula de máxima cortesía: "I would appreciate it if you could..."',
        thenLookFor: 'KINDLY / PLEASE + verbo en forma base',
        exampleSentence: 'I would appreciate it if you could kindly upload the crash dump.',
        whyRule: 'Construcción protocolaria de alta formalidad para auditorías y tickets P1.'
      }
    ],
    threeSecondTrigger:
      '¿Ves "Would you mind"? ➔ Busca -ING el 100% de las veces. ¿Ves "Could you possibly / kindly"? ➔ Busca el verbo en FORMA BASE limpia.',
    spanglishTrap:
      'Traducir "¿Le importaría revisar?" como *"Would you mind to check"*. "Mind" jamás acepta infinitivo con "to"; exige "Would you mind checking".'
  },

  G10: {
    topicId: 'G10',
    humanTitle: 'Imperativos en Runbooks y Necesidad Pasiva: Órdenes Claras sin Ambigüedad',
    badge: 'Gramática 5.1 (IT 1)',
    category: 'grammar',
    tagline: 'Cómo redactar directivas técnicas, advertencias preventivas y reportar máquinas que necesitan mantenimiento.',
    analogies: [
      {
        title: 'El Runbook de Emergencia y la Máquina que Pide Auxilio (Needs + -ING)',
        description:
          'En un manual de operaciones (SOP/Runbook): 1) Las órdenes afirmativas arrancan con verbo base puro en 1ª posición ("Verify the logs"); 2) Las prohibiciones críticas abren con "Do not / Never + base" ("Do not terminate the daemon"); 3) Cuando un hardware o sistema inanimado requiere mantenimiento urgente, la norma técnica oficial evalúa "needs + gerundio" ("The server needs patching", que equivale pasivamente a "needs to be patched").',
        concreteExample: {
          en: 'The core database server is suffering from memory leaks and urgently needs patching before the billing run.',
          es: 'El servidor principal sufre de fugas de memoria y necesita urgentemente ser parchado antes del ciclo de facturación.',
          highlight: 'needs patching'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Sistema o máquina inanimada + NEEDS / REQUIRES + ______ (mantenimiento necesario)',
        thenLookFor: 'Verbo en -ING (needs patching / updating) o TO BE + V3 (needs to be patched)',
        exampleSentence: 'The edge router is throwing buffer errors and needs rebooting.',
        whyRule: 'Fórmula oficial OpenEDG: con máquinas que reciben la acción, "needs + -ing" tiene significado pasivo formal.'
      },
      {
        ifStartsOrContains: 'Advertencia preventiva al inicio de instrucción técnica',
        thenLookFor: 'KEEP IN MIND THAT + cláusula explicativa',
        exampleSentence: 'Keep in mind that modifying active ACLs during business hours will terminate live sessions.',
        whyRule: '"Keep in mind that" encabeza precauciones mandatorias en documentación de soporte.'
      },
      {
        ifStartsOrContains: 'Instrucción directa de runbook: orden afirmativa vs. prohibición estricta',
        thenLookFor: 'Afirmativa: VERBO BASE al inicio (Execute script) | Negativa: DO NOT + VERBO BASE',
        exampleSentence: 'Do not restart the primary database cluster while replication is active.',
        whyRule: 'El modo imperativo no lleva sujeto explícito ni auxiliares conjugados.'
      }
    ],
    threeSecondTrigger:
      '¿Máquina inanimada + NEEDS? ➔ Busca -ING (needs rebooting) o TO BE + V3. ¿Orden de runbook? ➔ Verbo base al inicio (Execute / Do not restart).',
    spanglishTrap:
      'Decir *"The server needs reboot"* o *"needs to reboot"*. En registro formal de examen para sistemas inanimados que reciben la acción se exige "needs rebooting" o "needs to be rebooted".'
  },

  G11: {
    topicId: 'G11',
    humanTitle: 'Adverbios de Posibilidad y Probabilidad: El Calibrador Forense de Hipótesis',
    badge: 'Gramática 5.2 & 5.4 (IT 1)',
    category: 'grammar',
    tagline: 'Cómo graduar el nivel de certeza en reportes de ciberseguridad sin afirmar hechos no comprobados.',
    analogies: [
      {
        title: 'La Escala de Certeza en Incidentes (Arguably vs. Presumably vs. Conceivably)',
        description:
          'En un informe de riesgo o RCA: 1) ARGUABLY ("se puede sostener con argumentos sólidos / con gran probabilidad el mejor/mayor") acompaña casi siempre a adjetivos comparativos o superlativos ("arguably the most versatile database"); 2) PRESUMABLY ("presumiblemente / lo más probable según la evidencia") indica muy alta probabilidad deductiva; 3) CONCEIVABLY / FEASIBLY ("concebiblemente / en teoría posible") indica posibilidad factible pero no demostrada.',
        concreteExample: {
          en: 'PostgreSQL is arguably the most versatile relational database system for handling JSON workloads.',
          es: 'PostgreSQL es posiblemente / con argumentos sólidos el sistema de base de datos relacional más versátil para cargas JSON.',
          highlight: 'arguably the most versatile'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Hueco antes de un SUPERLATIVO técnico (______ the most versatile / the fastest / the best)',
        thenLookFor: 'ARGUABLY (con argumentos defendibles)',
        exampleSentence: 'This zero-day exploit is arguably the most sophisticated threat encountered this year.',
        whyRule: '"Arguably" se coloca canónicamente delante de superlativos para defender el liderazgo o gravedad con datos.'
      },
      {
        ifStartsOrContains: 'Deducción lógica de alta probabilidad basada en indicios forenses (Based on logs / telemetry)',
        thenLookFor: 'PRESUMABLY (presumiblemente) o LIKELY (probable)',
        exampleSentence: 'The intruder presumably gained initial access through an unpatched VPN gateway.',
        whyRule: '"Presumably" indica que todos los indicios apuntan a esa causa aunque falte la confesión o prueba final.'
      },
      {
        ifStartsOrContains: 'Consecuencia lógica ineludible si no se toman medidas preventivas',
        thenLookFor: 'INEVITABLY (inevitablemente)',
        exampleSentence: 'Without regression testing, unexpected runtime errors will inevitably slip into production.',
        whyRule: 'Expresa una certeza causal ineludible en análisis de riesgos.'
      },
      {
        ifStartsOrContains: 'Posibilidad teórica imaginable o factible en un escenario hipotético',
        thenLookFor: 'CONCEIVABLY o FEASIBLY (concebiblemente / factiblemente)',
        exampleSentence: 'The squad could conceivably complete the container migration before the window closes.',
        whyRule: '"Conceivably" denota que la acción entra dentro de lo imaginable pero sin garantías.'
      }
    ],
    threeSecondTrigger:
      '¿Ves superlativo ("the most...")? ➔ ARGUABLY. ¿Causa muy probable según logs? ➔ PRESUMABLY. ¿Ineludible? ➔ INEVITABLY. ¿Teóricamente factible? ➔ CONCEIVABLY.',
    spanglishTrap:
      'Confundir "arguably" pensando que significa "discutible o dudoso". En inglés significa que está ampliamente respaldado por argumentos ("arguably the best" = con casi total certeza el mejor).'
  },

  G12: {
    topicId: 'G12',
    humanTitle: 'Future Perfect y "On the Point of": La Cuenta Regresiva de Mantenimiento',
    badge: 'Gramática 6.1 & 6.3 (IT 1)',
    category: 'grammar',
    tagline: 'Garantizar hitos cumplidos antes de un deadline futuro y describir eventos a punto de estallar en el pasado.',
    analogies: [
      {
        title: 'La Meta Cruzada antes del Deadline (Future Perfect) vs. El Gatillo a Punto de Disparar (On the point of)',
        description:
          '1) Si el cronograma fija una fecha o límite futuro ("By Friday", "Before 07:00 UTC", "By the time the audit starts"), la acción técnica YA estará completada con anterioridad a esa hora ➔ FUTURE PERFECT: "will have + participio" ("will have migrated"). 2) Si una máquina o ingeniero estuvo a fracciones de segundo de ejecutar una acción en el pasado justo cuando algo lo interrumpió ➔ "was / were on the point of / on the verge of + -ING".',
        concreteExample: {
          en: 'By next Friday, the infrastructure squad will have migrated all legacy VM instances to containers.',
          es: 'Para el próximo viernes, el equipo de infraestructura habrá migrado todas las instancias de VM heredadas a contenedores.',
          highlight: 'will have migrated'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Marcador de plazo futuro: "BY [fecha/hora]" o "BY THE TIME [evento en presente]"',
        thenLookFor: 'FUTURE PERFECT: WILL HAVE + Participio Pasado (-ed / V3)',
        exampleSentence: 'By 06:00 UTC, the DBA team will have completed the database index rebuild.',
        whyRule: '"By + hora futura" exige tiempo perfecto para indicar que la tarea concluirá antes de alcanzar ese límite.'
      },
      {
        ifStartsOrContains: 'Inminencia extrema en el pasado interrumpida: "was / were on the point of ______"',
        thenLookFor: 'Verbo en -ING (was on the point of crashing / rebooting)',
        exampleSentence: 'The administrator was on the point of rebooting the core switch when the link recovered.',
        whyRule: 'La locución "on the point of" rige obligatoriamente gerundio (-ing).'
      },
      {
        ifStartsOrContains: 'Riesgo crítico al borde del desastre: "on the verge of ______"',
        thenLookFor: 'Verbo en -ING (on the verge of failing / crashing)',
        exampleSentence: 'The database cluster was on the verge of crashing when throttling stabilized queues.',
        whyRule: '"On the verge of" funciona como sinónimo formal de inminencia con gerundio.'
      }
    ],
    threeSecondTrigger:
      '¿Ves "BY [fecha futura]" o "BY THE TIME"? ➔ Busca WILL HAVE + Participio. ¿Ves "was on the point of / on the verge of"? ➔ Busca -ING.',
    spanglishTrap:
      'En español decimos "para el viernes terminamos" (presente o futuro simple). En el examen B2, usar *"By Friday we will finish"* es un error; la norma internacional exige "will have finished".'
  },

  G13: {
    topicId: 'G13',
    humanTitle: 'El Modo Subjuntivo: El Verbo Desnudo de los Mandatos Técnicos',
    badge: 'Gramática 1.1 & 4.1 (IT 2)',
    category: 'grammar',
    tagline: 'Cómo exigir políticas de seguridad, recomendaciones arquitectónicas y redactar hipótesis con "were".',
    analogies: [
      {
        title: 'El Congelador Sintáctico tras Verbos de Mandato (Forma Base Pura sin "-s")',
        description:
          'Cuando un arquitecto o auditor usa verbos de exigencia o recomendación formal (mandate, recommend, insist, demand, require, suggest, stipulate) o adjetivos de urgencia (vital, essential, imperative, crucial) seguidos de "THAT", el verbo de la cláusula subordinada se congela en su FORMA BASE PURA para todos los sujetos: no lleva "-s" en 3ª persona, usa "be" en lugar de "is/are", y en negativa usa "not + base" (sin don\'t/doesn\'t).',
        concreteExample: {
          en: 'The architecture review board mandates that every new microservice implement mutual TLS.',
          es: 'La junta de revisión de arquitectura exige que cada nuevo microservicio implemente TLS mutuo.',
          highlight: 'mandates that every new microservice implement'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'recommend / mandate / insist / require / suggest / demand + THAT + [sujeto 3ª persona]',
        thenLookFor: 'Verbo en FORMA BASE pura sin "-s" (implement, revoke, follow, update)',
        exampleSentence: 'We strongly recommend that the administrator revoke the compromised API key.',
        whyRule: 'Subjuntivo mandativo: la tercera persona del singular prohíbe la "-s" ("he revoke", nunca "revokes").'
      },
      {
        ifStartsOrContains: 'It is imperative / vital / crucial / essential + THAT + [sujeto] + ______ (en voz pasiva)',
        thenLookFor: 'BE + Participio Pasado (be kept / be updated / be disabled)',
        exampleSentence: 'It is imperative that the root authority certificate be kept in an offline HSM.',
        whyRule: 'En subjuntivo pasivo se usa siempre la forma base "be", jamás "is kept" ni "was kept".'
      },
      {
        ifStartsOrContains: 'Subjuntivo en forma NEGATIVA tras "that"',
        thenLookFor: 'NOT + verbo en forma base (not use / not be)',
        exampleSentence: 'We insist that proprietary networking protocols not be used in the new topology.',
        whyRule: 'La negación del subjuntivo se forma anteponiendo "not" directamente al verbo sin auxiliares.'
      },
      {
        ifStartsOrContains: 'Hipótesis irreal o consejo empático de rol: "If it ______ up to me" / "If I ______ you"',
        thenLookFor: 'WERE (nunca "was")',
        exampleSentence: 'If it were up to me, I would implement key-based authentication across all bastions.',
        whyRule: 'En inglés formal B2, el modo subjuntivo exige "were" para todas las personas en situaciones contrafácticas.'
      }
    ],
    threeSecondTrigger:
      '¿Ves [mandate / recommend / vital / imperative] + THAT? ➔ Elige forma base pura SIN "-s" (o "be + participio", negativa "not + base"). ¿"If it/I..."? ➔ WERE.',
    spanglishTrap:
      'Ver un sujeto singular como "every microservice" o "the administrator" y marcar por inercia la opción con "-s" (*"mandates that the admin revokes"*). ¡En subjuntivo la "-s" es un error eliminatorio! Debe ser "the admin revoke".'
  },

  G14: {
    topicId: 'G14',
    humanTitle: 'Deducción Lógica con Modales: El Detective Forense de Incidentes',
    badge: 'Gramática 1.2 (IT 2)',
    category: 'grammar',
    tagline: 'Cómo calibrar certeza deductiva al 95% (must), imposibilidad al 95% (can’t) y duda al 50% (might/could).',
    analogies: [
      {
        title: 'El Termómetro Forense de Certeza (Must vs. Can’t vs. Might)',
        description:
          'Cuando investigas un fallo en logs: 1) Si las pruebas demuestran certeza absoluta de que ocurrió ➔ MUST HAVE + Participio ("The link was restored, latency is zero: it must have been repaired"); 2) Si las pruebas demuestran que es FÍSICAMENTE IMPOSIBLE ➔ CAN\'T HAVE / COULDN\'T HAVE + Participio (¡JAMÁS "mustn\'t"!); 3) Si es una hipótesis plausible entre varias ➔ MIGHT / MAY / COULD HAVE + Participio; 4) Para verdades generales y cotidianas de la vida técnica ➔ CAN ("WiFi can be frustrating").',
        concreteExample: {
          en: 'Since the firewall dropped all incoming packets on port 22, the attacker can’t have gained SSH access.',
          es: 'Dado que el firewall descartó todos los paquetes entrantes en el puerto 22, es imposible que el atacante haya obtenido acceso SSH.',
          highlight: 'can’t have gained'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Evidencia rotunda que demuestra IMPOSIBILIDAD lógica en el pasado',
        thenLookFor: 'CAN’T HAVE + Participio Pasado (o couldn’t have)',
        exampleSentence: 'The server can’t have run out of disk space; telemetry shows 500GB free.',
        whyRule: 'El opuesto de certeza ("must") en deducción lógica es siempre "can\'t have", jamás "mustn\'t".'
      },
      {
        ifStartsOrContains: 'Evidencia rotunda que confirma CERTEZA lógica en el pasado',
        thenLookFor: 'MUST HAVE + Participio Pasado (o must have been + V3 en pasiva)',
        exampleSentence: 'All logs were completely wiped in milliseconds; the attacker must have had root access.',
        whyRule: '"Must have + V3" deduce que la evidencia no deja lugar a otra explicación.'
      },
      {
        ifStartsOrContains: 'Incertidumbre o precaución técnica ("we are not sure", "perhaps", "could be")',
        thenLookFor: 'MIGHT / MAY / COULD + verbo base (o might have + V3 para el pasado)',
        exampleSentence: 'The packet loss might be caused by an intermittent fiber splice defect.',
        whyRule: 'Indica una hipótesis abierta sujeta a comprobación.'
      },
      {
        ifStartsOrContains: 'Verdad general o comportamiento habitual de la vida técnica ("WiFi", "passwords")',
        thenLookFor: 'CAN (posibilidad general neutra)',
        exampleSentence: 'Relying on Wi-Fi for high-throughput database synchronization can be very unstable.',
        whyRule: '"Can" describe propiedades generales de las cosas, no deducciones forenses puntuales.'
      }
    ],
    threeSecondTrigger:
      '¿Evidencia confirma que es IMPOSIBLE? ➔ CAN’T HAVE + V3 (¡nunca "mustn\'t"!). ¿Evidencia confirma certeza? ➔ MUST HAVE + V3. ¿Duda/hipótesis? ➔ MIGHT / COULD.',
    spanglishTrap:
      'Usar *"mustn\'t have"* para decir "no debe de haber sido". En inglés "mustn\'t" solo expresa prohibición obligatoria ("you mustn\'t share keys"). Para deducción negativa de imposibilidad es OBLIGATORIO "can\'t have".'
  },

  G15: {
    topicId: 'G15',
    humanTitle: 'La Conjunción "Since" en Reportes Técnicos: Tiempo vs. Causa',
    badge: 'Gramática 1.4 (IT 2)',
    category: 'grammar',
    tagline: 'Distinguir cuándo "since" significa "desde" (reloj temporal) y cuándo significa "dado que / ya que" (causa).',
    analogies: [
      {
        title: 'El Reloj de Inicio (Temporal) vs. La Justificación Técnica (Causal)',
        description:
          '1) Función Causal: "Since" funciona como sinónimo formal de "because" o "as" para justificar decisiones técnicas ("Since the primary circuit is down, traffic rerouted to backup"). 2) Función Temporal: marca el inicio de un estado que continúa en el presente y EXIGE PRESENT PERFECT en la cláusula principal ("The service has experienced zero downtime since we deployed Kubernetes").',
        concreteExample: {
          en: 'Since the secondary database node was already synchronized, promoting it required zero downtime.',
          es: 'Dado que el nodo secundario ya estaba sincronizado, promoverlo no requirió tiempo de inactividad.',
          highlight: 'Since the secondary database node was already synchronized'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: '"Since" encabeza el motivo o justificación de una decisión técnica ("Dado que / Ya que")',
        thenLookFor: 'Equivale formalmente a "Because / As" + [Sujeto + Verbo en cualquier tiempo]',
        exampleSentence: 'Since multi-factor authentication is mandatory, Tier-1 support cannot grant phone bypasses.',
        whyRule: 'Uso causal formal habitual en postmortems y actas de arquitectura.'
      },
      {
        ifStartsOrContains: '"Since" fija un punto temporal de inicio en el pasado (since 08:00 UTC / since we migrated)',
        thenLookFor: 'La cláusula principal exige PRESENT PERFECT (has/have + V3 o has/have been + -ing)',
        exampleSentence: 'The perimeter gateway has dropped non-essential UDP traffic since the policy was enacted.',
        whyRule: 'Una condición iniciada en el pasado que perdura hasta el presente demanda tiempo perfecto.'
      },
      {
        ifStartsOrContains: 'Causalidad con sustantivo solo vs. con cláusula subordinada completa',
        thenLookFor: 'Sustantivo solo: DUE TO / BECAUSE OF | Sujeto + Verbo: BECAUSE / SINCE / AS',
        exampleSentence: 'The failover occurred because of an unhandled exception (vs. since the circuit failed).',
        whyRule: '"Due to" y "because of" son preposiciones; "since" es una conjunción.'
      }
    ],
    threeSecondTrigger:
      '¿"Since" explica un porqué técnico? ➔ Equivale a "because". ¿"Since" marca una hora o fecha ("desde")? ➔ Busca HAS / HAVE + Participio en la otra parte.',
    spanglishTrap:
      'Creer que "since" solo significa "desde" y desconcertarse al verlo al inicio de una justificación técnica. En inglés formal B2, "Since the server is down..." es la forma más elegante de decir "Dado que el servidor está caído...".'
  },

  G16: {
    topicId: 'G16',
    humanTitle: 'Formas Negativas de Futuro: Decisión Acordada vs. Falta de Intención',
    badge: 'Gramática 2.1 (IT 2)',
    category: 'grammar',
    tagline: 'La diferencia oficial entre Present Continuous negativo ("A decision") y Going to negativo ("An intention").',
    analogies: [
      {
        title: 'El Acuerdo de Equipo (Decision) vs. La Actitud Individual (Intention)',
        description:
          'En el temario oficial de Cisco English for IT 2 (Module 2.1): 1) El Present Continuous negativo con -ING ("We are not having the meeting this evening", "They are not running the session") expresa una DECISIÓN formal ya adoptada por el equipo ("A decision"); 2) La estructura con "going to" negativo ("They are not going to update the procedure", "The user is not going to go through with it") expresa la FALTA DE INTENCIÓN personal o actitud ("An intention"); 3) Future Perfect negativo ("By the time we finish, we won’t have met our RTO") mide metas que no se habrán alcanzado.',
        concreteExample: {
          en: 'We’re not having the meeting this evening as we’re still working on resolving the configuration issue.',
          es: 'No vamos a tener la reunión esta tarde porque aún estamos resolviendo el problema de configuración.',
          highlight: 'We’re not having the meeting'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Reactivo oficial pregunta por el matiz de: "We’re not having / They’re not running + [verbo-ing]"',
        thenLookFor: 'A DECISION (decisión acordada formal)',
        exampleSentence: 'They decided the issues are unrelated, so they’re not discussing it tomorrow (A decision).',
        whyRule: 'En el temario oficial, el Present Continuous negativo comunica una decisión ya tomada.'
      },
      {
        ifStartsOrContains: 'Reactivo oficial pregunta por el matiz de: "not going to + [verbo base]"',
        thenLookFor: 'AN INTENTION (falta de intención o disposición)',
        exampleSentence: 'I’m not convinced this agent will help, so I’m not going to have a remote session (An intention).',
        whyRule: 'En el temario oficial, "not going to" enfatiza la falta de voluntad o intención.'
      },
      {
        ifStartsOrContains: 'Acción que NO habrá culminado antes de un plazo futuro ("By the time...")',
        thenLookFor: 'FUTURE PERFECT NEGATIVO: WON’T HAVE + Participio Pasado',
        exampleSentence: 'By the time replication finishes, we won’t have met our recovery time objective.',
        whyRule: 'Acción incompleta respecto a un umbral futuro.'
      },
      {
        ifStartsOrContains: 'Cláusula temporal subordinada con "UNTIL / BEFORE + [futuro]"',
        thenLookFor: 'Verbo en PRESENTE SIMPLE en la cláusula de "until" (nunca "will")',
        exampleSentence: 'The release window will be postponed until the customer signs off on the staging patch.',
        whyRule: 'Las cláusulas adverbiales de tiempo futuro con "until/before" rigen Present Simple.'
      }
    ],
    threeSecondTrigger:
      '¿Verbo negativo con -ING (not having)? ➔ A DECISION. ¿Negativa con GOING TO? ➔ AN INTENTION. ¿"By the time..."? ➔ WON’T HAVE + V3.',
    spanglishTrap:
      'Confundir "A decision" con "An intention". En el examen de Cisco B2 es una pregunta conceptual fija: si termina en -ing es DECISION; si lleva going to es INTENTION.'
  },

  G17: {
    topicId: 'G17',
    humanTitle: 'Singular "They" en Políticas y Documentación Técnica',
    badge: 'Gramática 4.1 (IT 2)',
    category: 'grammar',
    tagline: 'Referirse a un usuario, desarrollador o empleado individual de género indefinido con THEY, THEM, THEIR o THEMSELVES.',
    analogies: [
      {
        title: 'El Comodín Wildcard de Identidad (*.*)',
        description:
          'En un manual técnico o política SOC 2, si escribes "Each employee must reset his/her password", es pesado y excluyente. En inglés técnico moderno formal (Cisco B2), el pronombre oficial de género neutro es "they / their / them". Aunque el antecedente sea estrictamente singular ("Each user", "An engineer", "Anyone", "The on-call technician"), se utiliza "THEIR" como posesivo y "THEM" como objeto.',
        concreteExample: {
          en: 'Each developer must review their pull requests before merging.',
          es: 'Cada desarrollador debe revisar sus solicitudes de extracción antes de fusionarlas.',
          highlight: 'Each developer must review their pull requests'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Sujeto singular indefinido o rol genérico (Each user, An engineer, Every employee, Anyone) + busca posesivo',
        thenLookFor: 'THEIR (posesivo neutro singular estándar B2; nunca "his", "his/her" ni "its")',
        exampleSentence: 'Each employee must secure their access tokens and MFA recovery codes.',
        whyRule: 'Estándar moderno en documentación y políticas técnicas de IT.'
      },
      {
        ifStartsOrContains: 'Sujeto singular genérico + busca pronombre objeto (... notify ______ immediately)',
        thenLookFor: 'THEM (pronombre objeto singular neutro)',
        exampleSentence: 'If an operator encounters a panic, instruct them to contact Tier-3.',
        whyRule: '"Them" sustituye al individuo singular sin asumir género.'
      },
      {
        ifStartsOrContains: 'Sujeto singular genérico + busca pronombre reflexivo (... by ______)',
        thenLookFor: 'THEMSELVES (o informalmente themself)',
        exampleSentence: 'A user should not attempt to fix a physical rack hardware issue themselves.',
        whyRule: 'Reflexivo singular correspondiente a "they".'
      },
      {
        ifStartsOrContains: 'Referencia a un dispositivo, servidor o entidad inanimada singular (The server, The cluster node)',
        thenLookFor: 'ITS (posesivo inanimado) — ¡Nunca "their" para una sola máquina singular!',
        exampleSentence: 'The server lost its connection to the gateway during the failover.',
        whyRule: 'Para objetos y máquinas singulares se usa "it / its", no "they / their".'
      }
    ],
    threeSecondTrigger:
      '¿Sujeto humano singular genérico (Each user / Anyone / A developer)? ➔ Usa THEIR (posesivo) o THEM (objeto). ¿Una máquina inanimada singular (The server)? ➔ ITS.',
    spanglishTrap:
      'Usar "its" para personas (*"Each employee must change its password"* - ¡una persona no es una cosa!) o forzar el arcaico "his or her" cuando la opción formal B2 es "their".'
  },

  G18: {
    topicId: 'G18',
    humanTitle: 'Énfasis Técnico con "Yet" (Pendiente de Aprobación vs. Problema Adicional)',
    badge: 'Gramática 4.2 (IT 2)',
    category: 'grammar',
    tagline: 'Dominar "has yet to be + V3" (aún no se ha completado) y "yet another" (otro problema más consecutivo).',
    analogies: [
      {
        title: 'El Semáforo en Ámbar (Yet = Aún Pendiente en Cola)',
        description:
          'En informes de despliegue, "has yet to be deployed" equivale a "has not been deployed yet", pero con tono ejecutivo de alta prioridad. Señala una tarea que aún está en cola de ejecución. Cuando acompaña a un sustantivo ("yet another memory leak"), denota exasperación técnica ante una falla recurrente más.',
        concreteExample: {
          en: 'The emergency hotfix has yet to be approved by the change management board.',
          es: 'El hotfix de emergencia aún no ha sido aprobado por el comité de cambios.',
          highlight: 'has yet to be approved'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'HAS / HAVE / IS + ______ + TO BE + V3 (o "have yet to + base")',
        thenLookFor: 'YET (has yet to be tested / deployed = aún está pendiente de probarse/desplegarse)',
        exampleSentence: 'The zero-day vulnerability has yet to be patched in the legacy kernel.',
        whyRule: 'Estructura ejecutiva fija B2 para denotar acción obligatoria pendiente hasta ahora.'
      },
      {
        ifStartsOrContains: 'Frase de queja/incidente con "______ + ANOTHER + [sustantivo singular]" (bug, outage, delay)',
        thenLookFor: 'YET (yet another failure = otra falla más, sumada a las anteriores)',
        exampleSentence: 'The core router suffered yet another hardware fault this week.',
        whyRule: '"Yet another" intensifica la acumulación de incidentes recurrentes.'
      },
      {
        ifStartsOrContains: 'Negativa común con Present Perfect al final de frase (has not deployed ______)',
        thenLookFor: 'YET al final (posición estándar en oraciones negativas)',
        exampleSentence: 'We have not updated the staging cluster yet.',
        whyRule: 'Posición habitual de "yet" al final de oraciones negativas.'
      }
    ],
    threeSecondTrigger:
      '¿"has / have + ______ + to be + V3"? ➔ YET. ¿"______ another bug / incident"? ➔ YET. Significa "aún pendiente" u "otro más consecutivo".',
    spanglishTrap:
      'Confundir "has yet to be patched" (aún no ha sido parcheado) con "already" o "still". "Still" requiere participio directo ("is still not patched"), mientras que "has YET to be patched" es la fórmula única con infinitivo.'
  },

  G19: {
    topicId: 'G19',
    humanTitle: 'Phrasal Verbs de Soporte e Infraestructura IT',
    badge: 'Gramática 4.3 (IT 2)',
    category: 'grammar',
    tagline: 'Distinguir roll back (revertir), roll out (desplegar), filter out (filtrar), trace down (rastrear), phase out (retirar gradualmente), back up (respaldar) y sign off on (aprobar).',
    analogies: [
      {
        title: 'Los Botones de la Consola de Operaciones',
        description:
          'Los phrasal verbs en IT son comandos exactos: si un deploy falla en producción, no "deshaces" (undo), presionas ROLL BACK (revertir). Si lanzas una versión gradualmente, haces un ROLL OUT. Si retiras hardware obsoleto con fecha límite, lo vas a PHASE OUT.',
        concreteExample: {
          en: 'The SRE decided to roll back the release after latency spiked above 500ms.',
          es: 'El SRE decidió revertir el lanzamiento después de que la latencia se disparara por encima de 500 ms.',
          highlight: 'roll back the release'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Fallo en despliegue / restaurar versión previa estable',
        thenLookFor: 'ROLL BACK (revertir despliegue a versión anterior)',
        exampleSentence: 'We had to roll back the migration when the schema update threw errors.',
        whyRule: 'Término estándar en DevOps para reversión de versiones.'
      },
      {
        ifStartsOrContains: 'Desplegar gradualmente un nuevo release o política a usuarios',
        thenLookFor: 'ROLL OUT (despliegue progresivo / lanzamiento)',
        exampleSentence: 'DevOps will roll out the new MFA policy to all engineering teams next Monday.',
        whyRule: '"Roll out" denota despliegue planificado paso a paso.'
      },
      {
        ifStartsOrContains: 'Eliminar o descartar paquetes maliciosos, ruido de red o spam',
        thenLookFor: 'FILTER OUT (filtrar / descartar tráfico indeseado)',
        exampleSentence: 'The perimeter firewall is configured to filter out suspicious UDP floods.',
        whyRule: '"Filter out" significa bloquear y no dejar pasar hacia la red interna.'
      },
      {
        ifStartsOrContains: 'Rastrear / localizar el origen exacto de un bug esquivo o intrusión',
        thenLookFor: 'TRACE DOWN / TRACK DOWN (localizar la causa raíz)',
        exampleSentence: 'It took three senior engineers eight hours to track down the silent memory leak.',
        whyRule: 'Expresa búsqueda minuciosa hasta encontrar el origen.'
      },
      {
        ifStartsOrContains: 'Retirar progresivamente un sistema, servidor o versión obsoleta (deprecación)',
        thenLookFor: 'PHASE OUT (retirar paulatinamente hasta el apagado total)',
        exampleSentence: 'The security team plans to phase out TLS 1.0 across all public endpoints.',
        whyRule: 'Proceso escalonado de retiro de tecnología legacy.'
      },
      {
        ifStartsOrContains: 'Aprobación formal ejecutiva o de auditoría antes del pase a producción',
        thenLookFor: 'SIGN OFF ON (dar el visto bueno oficial / firmar la autorización)',
        exampleSentence: 'The CISO must sign off on the firewall exception before it takes effect.',
        whyRule: 'Dar aprobación regulatoria o de gestión de cambios.'
      }
    ],
    threeSecondTrigger:
      '¿Fallo en deploy? ➔ ROLL BACK. ¿Lanzar nueva versión? ➔ ROLL OUT. ¿Descartar tráfico? ➔ FILTER OUT. ¿Buscar causa? ➔ TRACK/TRACE DOWN. ¿Retirar legacy? ➔ PHASE OUT. ¿Aprobación formal? ➔ SIGN OFF ON.',
    spanglishTrap:
      'Traducir literalmente del español: decir *"return back"* en vez de ROLL BACK, o *"take out the old server"* en lugar de PHASE OUT.'
  },

  G20: {
    topicId: 'G20',
    humanTitle: 'Cleft Sentences (Oraciones Hendidas) para Causa Raíz',
    badge: 'Gramática 5.1 (IT 2)',
    category: 'grammar',
    tagline: 'Enfocar con precisión láser al causante de un incidente ("It was the switch that...") o la solución prioritaria ("What we need is...").',
    analogies: [
      {
        title: 'El Puntero Láser del Postmortem',
        description:
          'En un informe de incidente o reunión ejecutiva, no dices simplemente "The firewall caused the drop". Usas una Cleft Sentence para poner el reflector sobre el culpable exacto: "It was the corrupted firewall rule THAT caused the packet drop" o "What triggered the failover WAS an unhandled null pointer".',
        concreteExample: {
          en: 'It was the unannounced database migration that caused the API latency spike.',
          es: 'Fue la migración no anunciada de la base de datos lo que causó el pico de latencia de la API.',
          highlight: 'It was the unannounced database migration that caused'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'IT + IS / WAS + [Culpable/Elemento Enfocado] + ______ + [resto de la oración]',
        thenLookFor: 'THAT (o WHO para personas; ¡NUNCA "which" ni "what" tras "It is/was"!)',
        exampleSentence: 'It was the misconfigured BGP route that disrupted global routing table updates.',
        whyRule: 'En estructuras hendidas con "It is/was...", el conector estándar obligatorio es "that".'
      },
      {
        ifStartsOrContains: 'Comienzo de frase con WHAT + [Sujeto + Verbo] + IS / WAS + [Solución o Requisito]',
        thenLookFor: 'WHAT (frase hendida de pseudocleft para enfatizar la solución o necesidad)',
        exampleSentence: 'What the infrastructure squad needs is a distributed tracing tool.',
        whyRule: '"What" encabeza la cláusula nominal ("Lo que el equipo necesita es...").'
      },
      {
        ifStartsOrContains: 'Énfasis en el momento exacto: "It was not until [fecha/evento] that..."',
        thenLookFor: 'THAT (conecta el momento temporal con el resultado posterior)',
        exampleSentence: 'It was not until the postmortem meeting that the root cause became apparent.',
        whyRule: 'Estructura fija de énfasis temporal ("No fue sino hasta... que...").'
      }
    ],
    threeSecondTrigger:
      '¿Ves "It is / was [cosa] + ______"? ➔ Elige THAT (¡prohibido WHICH!). ¿Ves "______ we need is [cosa]" al inicio? ➔ Elige WHAT.',
    spanglishTrap:
      'Poner "which" en cleft sentences (*"It was the server WHICH crashed"* → Error grave; la estructura hendida exige estrictamente "It was the server THAT crashed").'
  },

  G21: {
    topicId: 'G21',
    humanTitle: 'Condicionales de Priorización y SLAs (Zero & First Conditionals)',
    badge: 'Gramática 5.2 (IT 2)',
    category: 'grammar',
    tagline: 'Diferenciar reglas operativas automáticas e invariables (Zero: If + Present, Present) de predicciones y consecuencias de incidentes (First: If/Unless + Present, Will/Can).',
    analogies: [
      {
        title: 'El Switch de Hardware (Zero) vs. La Alerta de PagerDuty (First)',
        description:
          'Un Zero Conditional es un cortafuegos físico o ley invariable del protocolo: si la temperatura sube de 80°C, los ventiladores aceleran (If temperature rises, fans accelerate). El First Conditional es un escenario operativo contingente en un sprint: si no desplegamos el parche hoy, la auditoría nos multará (If we do not patch today, the audit will fine us).',
        concreteExample: {
          en: 'If CPU usage exceeds 90%, the cluster automatically spins up two new pods.',
          es: 'Si el uso de CPU supera el 90%, el clúster inicia automáticamente dos nuevos pods.',
          highlight: 'If CPU usage exceeds 90%, the cluster automatically spins up'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Regla general, comportamiento invariable de un protocolo o SLA automatizado',
        thenLookFor: 'ZERO CONDITIONAL: If / When + Present Simple, Present Simple (sin "will")',
        exampleSentence: 'If a packet lacks a valid checksum, the gateway drops it immediately.',
        whyRule: 'Expresa causa y efecto invariable en arquitectura de sistemas.'
      },
      {
        ifStartsOrContains: 'Situación concreta futura, advertencia de escalado o condición de riesgo',
        thenLookFor: 'FIRST CONDITIONAL: If + Present Simple, WILL / CAN / MAY + base',
        exampleSentence: 'If the latency continues to spike, the SRE team will initiate a manual failover.',
        whyRule: 'Condición real probable en el futuro.'
      },
      {
        ifStartsOrContains: 'Condición negativa con UNLESS (= "a menos que", "if not")',
        thenLookFor: 'UNLESS + Present Simple afirmativo, WILL / WON\'T + base',
        exampleSentence: 'Unless the client updates their TLS cipher suites, the handshake will fail.',
        whyRule: '"Unless" ya contiene el sentido negativo; el verbo que le sigue va afirmativo.'
      },
      {
        ifStartsOrContains: 'Cláusula de tiempo con AS SOON AS / ONCE / BEFORE en contexto futuro',
        thenLookFor: 'Present Simple en la cláusula subordinada (¡PROHIBIDO "will" tras "as soon as / once"!)',
        exampleSentence: 'As soon as the replication lag drops below 1s, we will reopen public writes.',
        whyRule: 'En inglés formal, las oraciones temporales de futuro usan Present Simple.'
      }
    ],
    threeSecondTrigger:
      '¿Automatismo técnico invariable? ➔ Ambos verbos en PRESENTE. ¿Escenario futuro con "If / Unless"? ➔ [If + Presente] + [WILL + base]. ¿Detrás de "Unless / As soon as"? ➔ JAMÁS uses "will", usa Presente.',
    spanglishTrap:
      'Poner "will" en la cláusula con "If" o "As soon as" (*"If the server will fail..."* o *"As soon as the test will pass..."* → Rotundamente incorrecto en inglés).'
  },

  G22: {
    topicId: 'G22',
    humanTitle: 'Contrastes Técnicos con "While" y "Whereas"',
    badge: 'Gramática 5.3 (IT 2)',
    category: 'grammar',
    tagline: 'Comparar dos arquitecturas o protocolos opuestos (A hace X, mientras que B hace Y) sin confundir con adverbios de tiempo.',
    analogies: [
      {
        title: 'La Tabla Comparativa de Arquitectura (Columna A vs. Columna B)',
        description:
          'Al contrastar dos tecnologías rivales en una decisión de arquitectura (ADR), unes dos oraciones independientes con WHILE o WHEREAS: "TCP garantiza entrega, WHEREAS UDP minimiza latencia". No estás midiendo tiempo ni sincronización cronológica, estás marcando un contraste conceptual directo entre dos paradigmas.',
        concreteExample: {
          en: 'Monolithic architectures are simpler to deploy initially, whereas microservices scale more efficiently.',
          es: 'Las arquitecturas monolíticas son más sencillas de desplegar al inicio, mientras que los microservicios escalan de forma más eficiente.',
          highlight: ', whereas microservices scale more efficiently'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Contraste directo entre dos hechos, tecnologías o paradigmas opuestos dentro de una misma oración',
        thenLookFor: 'WHEREAS o WHILE precedido habitualmente por una coma (", whereas / while")',
        exampleSentence: 'SQL databases enforce strict ACID compliance, whereas NoSQL solutions prioritize flexible schemas.',
        whyRule: 'Conectores formales de oposición conceptual equivalente a "mientras que".'
      },
      {
        ifStartsOrContains: 'Falso conector "meanwhile" dentro de la misma cláusula subordinada',
        thenLookFor: 'DESCARTA "meanwhile" (es un adverbio de transición cronológica, no una conjunción para unir cláusulas)',
        exampleSentence: 'TCP is connection-oriented, whereas (NOT meanwhile) UDP is connectionless.',
        whyRule: '"Meanwhile" une oraciones separadas por punto y mide tiempo simultáneo ("En el entretanto").'
      },
      {
        ifStartsOrContains: 'Contraste introducido al inicio de la frase (While / Whereas ...)',
        thenLookFor: 'WHILE / WHEREAS + [Cláusula A], [Cláusula B contraria]',
        exampleSentence: 'While on-premise hardware requires capital expenditure, cloud infrastructure operates on OpEx.',
        whyRule: 'Posición inicial válida para establecer contraste conceptual antes de la cláusula principal.'
      }
    ],
    threeSecondTrigger:
      '¿Comparación de dos tecnologías opuestas separadas por coma (, ______)? ➔ WHEREAS o WHILE. ¿Aparece "meanwhile"? ➔ Descártalo inmediatamente si está uniendo dos partes de una sola frase.',
    spanglishTrap:
      'Usar "meanwhile" o "in the meantime" creyendo que significa "mientras que". En inglés técnico de examen, el contraste puro entre dos cosas siempre es WHEREAS o WHILE.'
  },

  G23: {
    topicId: 'G23',
    humanTitle: 'El Adverbio "Always": Hábito Neutral vs. Irritación por Fallas Recurrentes',
    badge: 'Gramática 6.1 (IT 2)',
    category: 'grammar',
    tagline: 'Diferenciar rutinas programadas (Present Simple + always) de quejas sobre bugs o caídas recurrentes molestas (be + always + -ING).',
    analogies: [
      {
        title: 'El Cron Job que Funciona (Simple) vs. El Servidor que Da Guerra (Continuous)',
        description:
          'Si un script de backup corre a las 02:00 AM religiosamente, es una rutina: "It ALWAYS RUNS at 2 AM" (Present Simple). Pero si la pasarela de pagos se cae a cada rato desesperando a soporte, denotas irritación con Present Continuous: "The gateway IS ALWAYS FAILING during peak hours" (¡siempre dando problemas!).',
        concreteExample: {
          en: 'Our QA squad is always discovering edge-case regressions right before the release freeze.',
          es: 'Nuestro equipo de QA siempre está descubriendo regresiones de casos extremos justo antes del congelamiento del release.',
          highlight: 'is always discovering edge-case regressions'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Expresa queja, molestia técnica, fallo recurrente imprevisto o crítica en postmortem',
        thenLookFor: 'BE (is/are/was/were) + ALWAYS + -ING (Present/Past Continuous con "always")',
        exampleSentence: 'That legacy authentication container is always crashing whenever load increases.',
        whyRule: 'En inglés B2, "always" con forma continua expresa irritación o anomalía recurrente.'
      },
      {
        ifStartsOrContains: 'Rutina programada neutral, cron job, política de seguridad estándar o hecho técnico',
        thenLookFor: 'ALWAYS + Present Simple (verbo en forma simple con -s/sin -s)',
        exampleSentence: 'The automated backup daemon always runs at midnight without impacting database locks.',
        whyRule: 'Hábito neutral o configuración invariable.'
      },
      {
        ifStartsOrContains: 'Posición del adverbio en la oración con tiempos compuestos',
        thenLookFor: 'Entre el auxiliar y el verbo principal (is ALWAYS crashing, has ALWAYS maintained)',
        exampleSentence: 'The senior engineer has always insisted on 90% unit test coverage.',
        whyRule: 'Regla sintáctica fija de colocación de adverbios de frecuencia.'
      }
    ],
    threeSecondTrigger:
      '¿Es una queja sobre un bug o caída recurrente? ➔ IS/ARE ALWAYS + -ING. ¿Es un cron job o política estándar? ➔ ALWAYS + Presente Simple.',
    spanglishTrap:
      'Creer que "always" solo puede ir con Present Simple. En el examen B2 de Cisco evalúan deliberadamente el matiz de queja/irritación con continuo (*"is always dropping connections"*).'
  },

  G24: {
    topicId: 'G24',
    humanTitle: '"Even If" (Hipótesis Futura) vs. "Even Though" (Hecho Real Constatado)',
    badge: 'Gramática 6.2 (IT 2)',
    category: 'grammar',
    tagline: 'Elegir con precisión entre EVEN THOUGH (a pesar de que es un hecho comprobado) y EVEN IF (incluso en el hipotético caso futuro de que ocurra).',
    analogies: [
      {
        title: 'La Telemetría en Vivo (Even Though) vs. El Simulacro de Caos (Even If)',
        description:
          '\"Even though\" es una gráfica de Datadog en tiempo real: el CPU ESTÁ al 99%, es un hecho real ("Even though CPU utilization is high, the server is still responding"). "Even if" es una prueba de ingeniería de caos hipotética: aún si el enlace principal cayera mañana, el respaldo entraría ("Even if the primary link drops, the standby line will take over").',
        concreteExample: {
          en: 'Even though the regression tests passed, the deployment caused unexpected memory leaks.',
          es: 'A pesar de que las pruebas de regresión pasaron, el despliegue causó fugas de memoria inesperadas.',
          highlight: 'Even though the regression tests passed'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'La cláusula describe un hecho real, histórico, verificado o constatado en logs (hecho cierto)',
        thenLookFor: 'EVEN THOUGH (= "A pesar de que / Aunque es un hecho que")',
        exampleSentence: 'Even though the DBA applied the patch last week, the latency anomaly persisted.',
        whyRule: 'Introduce una concesión sobre una realidad verificada que ocurrió o existe.'
      },
      {
        ifStartsOrContains: 'La cláusula describe una condición hipotética, futura, incierta o un escenario de contingencia',
        thenLookFor: 'EVEN IF (= "Incluso si / Aun cuando ocurriera la hipótesis de que")',
        exampleSentence: 'We will not approve unreviewed code, even if the release deadline is in one hour.',
        whyRule: 'Introduce una suposición o escenario hipotético extremo.'
      },
      {
        ifStartsOrContains: 'Inicio de frase con hecho real ya ocurrido ("______ all regression tests passed in staging...")',
        thenLookFor: 'EVEN THOUGH (los tests ya pasaron en la realidad)',
        exampleSentence: 'Even though all tests passed, we encountered a production bug.',
        whyRule: 'Hecho consumado en el pasado o presente.'
      },
      {
        ifStartsOrContains: 'Regla de seguridad estricta para cualquier circunstancia hipotética ("Do not share keys, ______ they claim...")',
        thenLookFor: 'EVEN IF (no importa qué historia ficticia inventen)',
        exampleSentence: 'Never reveal credentials, even if the caller claims to be the CTO.',
        whyRule: 'Aplica ante cualquier contingencia hipotética.'
      }
    ],
    threeSecondTrigger:
      '¿Es un HECHO REAL ya verificado o consumado? ➔ EVEN THOUGH. ¿Es una HIPÓTESIS o condición futura incierta? ➔ EVEN IF.',
    spanglishTrap:
      'Traducir ambos como "aunque" y confundirlos. En inglés de examen, si el hecho es 100% verídico es EVEN THOUGH; si es una suposición hipotética es EVEN IF.'
  },

  G25: {
    topicId: 'G25',
    humanTitle: 'Past Perfect vs. Past Simple en Secuencia de Incidentes y Logs',
    badge: 'Gramática 6.3 (IT 2)',
    category: 'grammar',
    tagline: 'Identificar cuál evento de la línea de tiempo ocurrió primero (HAD + V3) y cuál fue el evento posterior o desencadenante (Past Simple).',
    analogies: [
      {
        title: 'La Línea de Tiempo Forense del Postmortem',
        description:
          'Cuando reconstruyes un incidente de seguridad, hay dos eventos en el pasado. El evento más antiguo (#1, la causa oculta previa) va en PAST PERFECT: "The attacker HAD DELETED the audit logs". El evento más reciente (#2, la reacción del equipo o descubrimiento) va en PAST SIMPLE: "before the security team ISOLATED the host".',
        concreteExample: {
          en: 'The database cluster had crashed twice before the on-call engineer received the PagerDuty alert.',
          es: 'El clúster de la base de datos se había caído dos veces antes de que el ingeniero de guardia recibiera la alerta de PagerDuty.',
          highlight: 'had crashed twice before the on-call engineer received'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Conector "BY THE TIME + [Past Simple]", la cláusula principal pide la acción previa ya completada',
        thenLookFor: 'HAD + V3 (Past Perfect)',
        exampleSentence: 'By the time the SRE team acknowledged the alert, the cluster had already restarted.',
        whyRule: 'Marca que el evento #1 ya había concluido antes del límite temporal #2.'
      },
      {
        ifStartsOrContains: 'Conectores correlativos negativos de inmediatez: "NO SOONER HAD + [sujeto] + [V3] ..."',
        thenLookFor: 'THAN en el enlace intermedio, seguido de Past Simple',
        exampleSentence: 'No sooner had the engineer patched the kernel than the server rebooted unexpectedly.',
        whyRule: 'Fórmula fija de inversión temporal: "No sooner had ... than ...".'
      },
      {
        ifStartsOrContains: 'Conector correlativo de inmediatez: "HARDLY HAD + [sujeto] + [V3] ..."',
        thenLookFor: 'WHEN en el enlace intermedio, seguido de Past Simple',
        exampleSentence: 'Hardly had the load balancer recovered when a second wave of DDoS traffic struck.',
        whyRule: 'Fórmula fija: "Hardly had ... when ...".'
      },
      {
        ifStartsOrContains: 'Cláusula con "BEFORE + [Past Simple]", o "BECAUSE + [causa anterior en el pasado]"',
        thenLookFor: 'El evento cronológicamente anterior lleva HAD + V3',
        exampleSentence: 'The pipeline failed because the developer had forgotten to set the secret token.',
        whyRule: 'El olvido (evento #1) ocurrió antes de que fallara el pipeline (evento #2).'
      }
    ],
    threeSecondTrigger:
      '¿Evento más antiguo en el pasado? ➔ HAD + V3. ¿"No sooner had..."? ➔ THAN. ¿"Hardly had..."? ➔ WHEN. ¿"By the time + Past"? ➔ HAD + V3.',
    spanglishTrap:
      'Poner Past Simple a ambos eventos cuando hay una relación de causa previa (*"The server crashed because the admin deleted the config"* → Debe ser *"had deleted"* para marcar la anterioridad forense).'
  },

  G26: {
    topicId: 'G26',
    humanTitle: 'Idioms y Collocations Oficiales de OpenEDG en IT',
    badge: 'Use of English KSA',
    category: 'grammar',
    tagline: 'Modismos corporativos y fórmulas fijas de trabajo en equipo que evalúa estrictamente el syllabus OpenEDG.',
    analogies: [
      {
        title: 'Contraseñas Exactas (Si cambias una preposición, se rompe)',
        description:
          'Los idioms evaluados en el examen oficial (como "put one\'s finger on", "on the same page", "iron out", "touch base", "ballpark figure", "by leaps and bounds", "sweep under the carpet", "jump the gun") son inmutables. Los reactivos evalúan identificar la expresión fija en contexto o detectar el distractor que altera una palabra ("in the same page" -> ON the same page).',
        concreteExample: {
          en: 'Our infrastructure squad cannot put their finger on the exact bottleneck causing the latency spike.',
          es: 'Nuestro equipo de infraestructura no logra identificar con exactitud el cuello de botella que causa el pico de latencia.',
          highlight: 'put their finger on the exact bottleneck'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Significado: "identificar o descubrir con precisión la causa exacta de una falla"',
        thenLookFor: 'PUT (ONE\'S) FINGER ON',
        exampleSentence: 'We analyzed the telemetry but could not put our finger on the root cause.',
        whyRule: 'Collocation fija evaluada en KSA 3.1.5 de OpenEDG.'
      },
      {
        ifStartsOrContains: 'Significado: "estar alineados / de acuerdo" vs. "mantener informado al equipo"',
        thenLookFor: 'Alineados: ON THE SAME PAGE | Informado: KEEP (ME/US) POSTED / IN THE LOOP',
        exampleSentence: 'Let’s sync before the demo to ensure we are all on the same page; keep me posted on updates.',
        whyRule: 'Ojo a las preposiciones: ON the same page, IN the loop.'
      },
      {
        ifStartsOrContains: 'Significado: "resolver defectos menores / limar asperezas" vs. "sincronizar brevemente"',
        thenLookFor: 'Resolver bugs: IRON OUT | Sincronizar: TOUCH BASE',
        exampleSentence: 'We need to touch base with QA to iron out minor concurrency issues.',
        whyRule: '"Iron out" = alisar/resolver defectos; "Touch base" = reunión rápida de sincronización.'
      },
      {
        ifStartsOrContains: 'Significado: "estimación numérica aproximada" vs. "afrontar decisión técnica difícil"',
        thenLookFor: 'Estimación: BALLPARK FIGURE | Decisión dura: BITE THE BULLET',
        exampleSentence: 'Give me a ballpark figure for cloud costs; we must bite the bullet and refactor.',
        whyRule: '"Ballpark figure" = cifra estimada; "Bite the bullet" = aceptar el trago amargo inevitable.'
      },
      {
        ifStartsOrContains: 'Significado: "avanzar a pasos agigantados" vs. "ocultar un error" vs. "precipitarse"',
        thenLookFor: 'Avanzar: BY LEAPS AND BOUNDS | Ocultar: SWEEP UNDER THE CARPET | Precipitarse: JUMP THE GUN',
        exampleSentence: 'Cloud adoption grew by leaps and bounds; don’t jump the gun or sweep errors under the rug.',
        whyRule: 'Expresiones clave fijas del banco oficial de Use of English.'
      }
    ],
    threeSecondTrigger:
      'Identificar causa = PUT ONE’S FINGER ON · Alineados = ON THE SAME PAGE · Resolver roces = IRON OUT · Sincronizar = TOUCH BASE · Estimación = BALLPARK FIGURE · Afrontar decisión = BITE THE BULLET · Avanzar rápido = BY LEAPS AND BOUNDS.',
    spanglishTrap:
      'Decir *"in the same page"* en lugar de *"on the same page"*, o traducir *"put the finger in"* en vez de *"put one\'s finger on"*.'
  },

  G27: {
    topicId: 'G27',
    humanTitle: 'Condicionales e Inversión con "Only if"',
    badge: 'Gramática 7.1 (IT 2)',
    category: 'grammar',
    tagline: 'Inversión obligatoria [Auxiliar + Sujeto + Verbo] tras "Only if" inicial, e inversión condicional sin "if" (Were / Had / Should).',
    analogies: [
      {
        title: 'El Sensor Biométrico del Bastion Host',
        description:
          'Cuando una frase técnica empieza con "Only if + condición...", se activa un cerrojo sintáctico: la cláusula principal OBLIGATORIAMENTE invierte el orden a formato de pregunta [Auxiliar + Sujeto + Verbo]: "Only if the checksum matches WILL THE SYSTEM ALLOW the deploy". Y si eliminas "if" en hipótesis: "Were the server to fail..." (2º), "Had we known..." (3º), "Should latency exceed..." (1º).',
        concreteExample: {
          en: 'Only if both the hardware token and biometric check pass validation does the bastion grant root access.',
          es: 'Solo si el token de hardware y la comprobación biométrica pasan la validación, el bastión concede acceso de superusuario.',
          highlight: 'Only if both... pass validation does the bastion grant'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'La frase empieza con "ONLY IF + [condición]", busca cómo sigue la cláusula principal',
        thenLookFor: '[AUXILIAR: does / do / will / should / can] + [SUJETO] + [VERBO BASE]',
        exampleSentence: 'Only if the client signs the SLA change request will our squad begin development.',
        whyRule: 'Inversión restrictiva obligatoria en la cláusula principal tras "Only if" inicial.'
      },
      {
        ifStartsOrContains: 'Hipótesis de 2º condicional que empieza por hueco SIN "if" (______ the primary node to fail...)',
        thenLookFor: 'WERE + [Sujeto] + TO + [Verbo base]',
        exampleSentence: 'Were the primary database cluster to fail completely, the replica would take over.',
        whyRule: '"Were + sujeto + to + base" sustituye formalmente a "If + sujeto + past simple".'
      },
      {
        ifStartsOrContains: 'Hipótesis de 3er condicional en pasado SIN "if" (______ we known about the deprecated SDK...)',
        thenLookFor: 'HAD + [Sujeto] + [Participio V3]',
        exampleSentence: 'Had the team implemented automated testing, yesterday’s crash would not have occurred.',
        whyRule: '"Had + sujeto + V3" sustituye a "If + sujeto + had + V3".'
      },
      {
        ifStartsOrContains: 'Condición de 1er condicional formal SIN "if" (______ the link latency exceed 150ms...)',
        thenLookFor: 'SHOULD + [Sujeto] + [Verbo base sin "-s"]',
        exampleSentence: 'Should the link latency exceed 150ms, the global load balancer reroutes traffic.',
        whyRule: '"Should + sujeto + base" sustituye formalmente a "If + sujeto + present simple".'
      },
      {
        ifStartsOrContains: '2º condicional con verbo ser/estar en hipótesis técnica irreal (If the app ______ stateless...)',
        thenLookFor: 'WERE para todas las personas (If the app were, If I were in charge)',
        exampleSentence: 'If our monolithic application were stateless, we could scale it horizontally.',
        whyRule: 'En inglés formal de examen, el subjuntivo condicional irreal siempre usa "were".'
      }
    ],
    threeSecondTrigger:
      '¿Empieza con "Only if"? ➔ Cláusula principal con [AUXILIAR + SUJETO + BASE]. ¿Sin "if" al inicio? ➔ WERE... TO (2º) · HAD... V3 (3º) · SHOULD... BASE (1º). ¿Hypótesis con to be? ➔ WERE.',
    spanglishTrap:
      'Mantener el orden normal tras Only if (*"Only if the checksum matches, the system will allow"* → Error; debe ser *"will the system allow"*), o poner "was" en vez de "were" en hipótesis (*"If I was in charge"* → Formal: *"If I were"*).'
  },

  G28: {
    topicId: 'G28',
    humanTitle: 'Causalidad: "Due to" vs. "Because of" vs. "Owing to"',
    badge: 'Gramática 7.2 (IT 2)',
    category: 'grammar',
    tagline: 'Elegir con rigor entre "due to" (adjetival, tras verbo to be) y "because of" (adverbial, modificando un verbo de acción).',
    analogies: [
      {
        title: 'La Etiqueta del Servidor (Due to) vs. El Motor del Incidente (Because of)',
        description:
          'En el inglés técnico formal del examen, "due to" califica al sustantivo que está detrás de "to be" ("The outage WAS DUE TO a fiber cut"). En cambio, "because of" explica la causa directa de una acción ejecutada ("The switch dropped packets BECAUSE OF buffer exhaustion"). Para iniciar frase con causa, la opción más elegante es "Owing to".',
        concreteExample: {
          en: 'The twenty-minute outage was due to a misconfigured BGP route, whereas the switch dropped packets because of buffer bloat.',
          es: 'La interrupción de veinte minutos se debió a una ruta BGP mal configurada, mientras que el switch descartó paquetes debido a la saturación del búfer.',
          highlight: 'was due to ... dropped packets because of'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Tras verbo TO BE (is / was / were / has been) + causa sustantiva',
        thenLookFor: 'DUE TO (o "attributable to")',
        exampleSentence: 'The unexpected database service disruption was due to an unhandled deadlock.',
        whyRule: '"Due to" funciona como adjetivo predicativo modificando al sustantivo previo a "to be".'
      },
      {
        ifStartsOrContains: 'Tras verbo de acción directa (crashed, dropped, failed, was blocked) + causa sustantiva',
        thenLookFor: 'BECAUSE OF (o "owing to")',
        exampleSentence: 'The edge switch dropped packets because of severe memory fragmentation.',
        whyRule: '"Because of" actúa como adverbio modificando al verbo de acción.'
      },
      {
        ifStartsOrContains: 'Al inicio absoluto de la oración delante de un sustantivo ("______ rapid temperature spikes...")',
        thenLookFor: 'OWING TO (o "Due to")',
        exampleSentence: 'Owing to rapid temperature increases in the rack, emergency fans activated.',
        whyRule: '"Owing to" es el conector formal tradicionalmente preferido al inicio de frase.'
      },
      {
        ifStartsOrContains: 'Delante de una cláusula completa que tiene [Sujeto + Verbo conjugado]',
        thenLookFor: 'BECAUSE o SINCE (¡NUNCA "because of" delante de un verbo conjugado!)',
        exampleSentence: 'The nightly backup failed because the storage volume ran out of free inodes.',
        whyRule: '"Because" y "since" son conjunciones que introducen oraciones subordinadas completas.'
      }
    ],
    threeSecondTrigger:
      '¿Ves "is / was ______ [sustantivo]"? ➔ DUE TO. ¿Verbo de acción + "______ [sustantivo]"? ➔ BECAUSE OF. ¿Inicio de frase? ➔ OWING TO. ¿Delante de [Sujeto + Verbo]? ➔ BECAUSE o SINCE.',
    spanglishTrap:
      'Poner "because" a secas delante de un sustantivo (*"The server crashed because the overload"* → Falta "of": *"because OF the overload"*), o poner "because of" delante de una frase con verbo (*"because of the disk was full"* → Debe ser *"because the disk was full"*).'
  },

  G29: {
    topicId: 'G29',
    humanTitle: 'Diplomacia y "Softening" con Tiempos Pasados en Soporte',
    badge: 'Gramática 7.3 (IT 2)',
    category: 'grammar',
    tagline: 'Suavizar peticiones técnicas y directivas usando Past Continuous (I was wondering / thinking) y modales de cortesía con infinitivo base.',
    analogies: [
      {
        title: 'El Cojín de Amortiguación Diplomática',
        description:
          'En soporte técnico N1-N3 y trato con clientes empresariales o directivos, ordenar "Upload the crash dump" o "You must check the interface" genera resistencia. Los ingenieros profesionales usan intencionalmente tiempos pasados para "ablandar" (soften) la petición: "I was wondering if you could upload the logs" o "I was thinking we might roll back".',
        concreteExample: {
          en: 'I was wondering if you could kindly upload the diagnostic crash dump to the secure FTP portal.',
          es: 'Me preguntaba si tendría la amabilidad de subir el volcado de memoria de diagnóstico al portal FTP seguro.',
          highlight: 'I was wondering if you could kindly upload'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: '"I was wondering if you could ______" en petición diplomática',
        thenLookFor: 'Verbo en FORMA BASE pura sin "to" (verify, upload, provide, test)',
        exampleSentence: 'I was wondering if you could verify the updated IAM role permissions.',
        whyRule: 'Tras el modal de cortesía "could", el verbo subordinado va en forma base pura.'
      },
      {
        ifStartsOrContains: '"I was thinking we might ______" al sugerir una solución colaborativa',
        thenLookFor: 'Verbo en FORMA BASE pura (roll back, reschedule, investigate)',
        exampleSentence: 'I was thinking we might roll back the latest change until latency stabilizes.',
        whyRule: '"Might" es un modal de sugerencia suave que rige infinitivo base.'
      },
      {
        ifStartsOrContains: 'Ofrecimiento de ayuda en soporte técnico en tono diplomático ("______ you want me to escalate...?")',
        thenLookFor: 'DID you want me to + [verbo base]',
        exampleSentence: 'Did you want me to escalate this incident to our Tier-3 team right away?',
        whyRule: '"Did you want me to" usa pasado de cortesía para no sonar impositivo.'
      },
      {
        ifStartsOrContains: 'Sugerencia consultiva prudente ("You ______ want to check the firewall logs...")',
        thenLookFor: 'MIGHT (You might want to check) o OUGHT (You ought to check)',
        exampleSentence: 'You might want to review the access policies before pushing to production.',
        whyRule: '"Might want to" es la fórmula estándar de recomendación no intrusiva.'
      }
    ],
    threeSecondTrigger:
      '¿"I was wondering if you could ______"? ➔ Verbo en FORMA BASE. ¿"I was thinking we might ______"? ➔ FORMA BASE. ¿"Did you want me to ______"? ➔ TO + BASE.',
    spanglishTrap:
      'Poner condicional en la fórmula (*"I would wonder if you could..."* → Error; en inglés profesional es *"I was wondering"*), o poner "to" o pasado tras could (*"if you could verified"* → Debe ser forma base pura *"verify"*).'
  },

  V01: {
    topicId: 'V01',
    humanTitle: 'Vocabulario de Cloud Computing e Infraestructura (Guía Oficial)',
    badge: 'Vocabulario Cloud (IT 2)',
    category: 'vocab',
    tagline: 'Dominar conceptos clave: egress vs ingress, multi-tenant, CDN, cold start, elasticity vs scalability y falsos amigos técnicos.',
    analogies: [
      {
        title: 'El Edificio de Apartamentos Cloud (Multi-Tenant) y el Peaje de Salida (Egress)',
        description:
          'Un entorno multi-tenant es un edificio compartido donde cada cliente tiene su cerradura lógica aislada. El tráfico de entrada (ingress) suele ser gratuito, pero el de salida hacia internet (egress) conlleva cargos por GB. Y cuando una función serverless se despierta tras inactividad, sufre un "cold start".',
        concreteExample: {
          en: 'To reduce egress bandwidth costs and improve global response times, the cloud team deployed a CDN.',
          es: 'Para reducir los costos de ancho de banda de salida y mejorar los tiempos de respuesta globales, el equipo cloud desplegó una CDN.',
          highlight: 'reduce egress bandwidth costs'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Tráfico de datos que sale de la red del proveedor cloud hacia internet o clientes externos',
        thenLookFor: 'EGRESS TRAFFIC / EGRESS BANDWIDTH (frente a Ingress = entrada)',
        exampleSentence: 'Compressing API payloads significantly reduced our monthly cloud egress traffic charges.',
        whyRule: '"Egress" se refiere específicamente a la salida de datos del clúster cloud.'
      },
      {
        ifStartsOrContains: 'Varios clientes u organizaciones compartiendo la misma infraestructura con aislamiento lógico',
        thenLookFor: 'MULTI-TENANT (frente a single-tenant dedicado)',
        exampleSentence: 'In a multi-tenant SaaS environment, strict logical isolation prevents data leakage between customers.',
        whyRule: '"Multi-tenant" describe arquitectura compartida con barreras lógicas.'
      },
      {
        ifStartsOrContains: 'Retardo inicial al invocar un contenedor o función serverless inactiva',
        thenLookFor: 'COLD START (tiempo de arranque inicial del entorno)',
        exampleSentence: 'Minimizing dependency size reduced our Lambda cold start latency.',
        whyRule: '"Cold start" es la latencia de arranque en frío en serverless.'
      },
      {
        ifStartsOrContains: 'Capacidad de aprovisionar y desaprovisionar recursos dinámicamente según la carga puntual',
        thenLookFor: 'ELASTICITY (frente a Scalability = capacidad de soportar crecimiento sostenido)',
        exampleSentence: 'Cloud elasticity allows our auto-scaling groups to terminate idle instances at night.',
        whyRule: '"Elasticity" mide la adaptación dinámica en tiempo real a la demanda.'
      },
      {
        ifStartsOrContains: 'Falso amigo: acudir/presenciar una reunión técnica vs prestar ayuda a un compañero',
        thenLookFor: 'Presenciar: ATTEND a meeting | Ayudar: ASSIST a colleague',
        exampleSentence: 'The lead architect will attend the vendor meeting to assist the procurement team.',
        whyRule: '"Attend" = asistir/acudir presencialmente; "Assist" = brindar ayuda técnica.'
      }
    ],
    threeSecondTrigger:
      '¿Datos que salen de la nube? ➔ EGRESS. ¿Varios clientes aislados? ➔ MULTI-TENANT. ¿Retardo serverless inicial? ➔ COLD START. ¿Crecer/encoger según carga? ➔ ELASTICITY. ¿Asistir a reunión? ➔ ATTEND.',
    spanglishTrap:
      'Confundir "egress" con "ingress", o decir *"attend a user"* para atender/ayudar (debe ser *"assist / support a user"*); "attend" es presenciar un evento.'
  },

  V02: {
    topicId: 'V02',
    humanTitle: 'Compiladores vs. Intérpretes y Ejecución de Código',
    badge: 'Vocabulario Dev (IT 2)',
    category: 'vocab',
    tagline: 'Distinguir compile-time de runtime, bytecode, compilación JIT, lexer/tokens, linker y transpiler.',
    analogies: [
      {
        title: 'El Traductor de Libros (Compiler) vs. El Intérprete de Conferencia (Interpreter)',
        description:
          'El compilador traduce todo el código fuente a binario ejecutable ANTES de que el programa arranque (Ahead-Of-Time). El intérprete traduce y ejecuta línea a línea en tiempo real (at runtime). Y los entornos modernos (Java, .NET, Node) usan JIT: compilan bytecode intermedio a código máquina nativo justo cuando se necesita.',
        concreteExample: {
          en: 'A Just-In-Time (JIT) compiler translates frequently executed bytecode into native machine instructions at runtime.',
          es: 'Un compilador Just-In-Time (JIT) traduce el bytecode ejecutado con frecuencia a instrucciones nativas de máquina en tiempo de ejecución.',
          highlight: 'JIT compiler translates frequently executed bytecode'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Traduce todo el código a binario antes de ejecutar y detecta errores de tipos',
        thenLookFor: 'COMPILER / COMPILE-TIME (Ahead-Of-Time)',
        exampleSentence: 'A static type checker catches syntax and type errors at compile time.',
        whyRule: '"Compile time" es la fase previa a la ejecución del software.'
      },
      {
        ifStartsOrContains: 'Código binario intermedio e independiente de plataforma ejecutado por una máquina virtual',
        thenLookFor: 'BYTECODE (Java JVM, .NET CIL)',
        exampleSentence: 'Java source files are first compiled into portable bytecode before execution.',
        whyRule: '"Bytecode" es la representación intermedia para máquinas virtuales.'
      },
      {
        ifStartsOrContains: 'Compilación en caliente durante la ejecución para acelerar rutas críticas',
        thenLookFor: 'JUST-IN-TIME (JIT) COMPILATION',
        exampleSentence: 'The JIT compiler improves execution speed by generating native machine binaries.',
        whyRule: 'JIT combina la portabilidad del bytecode con la velocidad del código nativo.'
      },
      {
        ifStartsOrContains: 'Error o excepción que ocurre mientras el software está en plena ejecución',
        thenLookFor: 'RUNTIME EXCEPTION / RUNTIME ERROR (Null pointer, división por cero)',
        exampleSentence: 'Attempting to dereference a null pointer during live traffic triggers a runtime exception.',
        whyRule: 'Ocurre en caliente durante la ejecución, no al compilar.'
      },
      {
        ifStartsOrContains: 'Fase del compilador que convierte el texto en tokens léxicos',
        thenLookFor: 'LEXER / TOKENS (lexical analysis)',
        exampleSentence: 'The lexer breaks the raw source stream into discrete semantic tokens.',
        whyRule: 'El análisis léxico (lexer) genera los tokens de entrada para el parser.'
      },
      {
        ifStartsOrContains: 'Herramienta que une bibliotecas externas con el código compilado',
        thenLookFor: 'LINKER (frente a transpiler que traduce entre lenguajes como TS a JS)',
        exampleSentence: 'During the build phase, the linker resolves external library references.',
        whyRule: 'El "linker" ensambla los módulos objeto en un binario ejecutable final.'
      }
    ],
    threeSecondTrigger:
      '¿Antes de ejecutar? ➔ COMPILE-TIME. ¿En vivo durante ejecución? ➔ RUNTIME. ¿Código intermedio VM? ➔ BYTECODE. ¿Compilar en caliente? ➔ JIT. ¿Romper en unidades léxicas? ➔ TOKENS. ¿Unir librerías? ➔ LINKER.',
    spanglishTrap:
      'Confundir un "compile-time error" (el código no compila) con una "runtime exception" (el código compiló perfectamente pero se cayó en producción al encontrar datos nulos).'
  },

  V03: {
    topicId: 'V03',
    humanTitle: 'Soporte al Cliente, Desescalada y Gestión de SLAs',
    badge: 'Vocabulario Support (IT 2)',
    category: 'vocab',
    tagline: 'Distinguir bug de feature/constraint intencional, workaround de permanent fix, de-escalation, postmortem y SLAs.',
    analogies: [
      {
        title: 'El Desvío de Emergencia (Workaround) vs. La Autopista Reparada (Hotfix)',
        description:
          'Ante una caída crítica de un cliente empresarial, la prioridad #1 es habilitar un WORKAROUND (solución provisional) para restaurar la operatividad antes de que venza el SLA. Después, el equipo programa el fix definitivo en el backlog y redacta un postmortem sin culpas.',
        concreteExample: {
          en: 'Until the squad releases the permanent hotfix on Friday, support technicians provided a configuration workaround.',
          es: 'Hasta que el equipo lance el hotfix permanente el viernes, los técnicos de soporte proporcionaron una solución temporal de configuración.',
          highlight: 'provided a configuration workaround'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Solución provisional operativa mientras se desarrolla el parche definitivo',
        thenLookFor: 'WORKAROUND (rodeo o solución temporal)',
        exampleSentence: 'Provide the client with an immediate workaround to restore their data export.',
        whyRule: 'Medida temporal para mitigar el impacto antes del fix permanente.'
      },
      {
        ifStartsOrContains: 'Incumplimiento del contrato de tiempo de respuesta o disponibilidad garantizada',
        thenLookFor: 'SLA BREACH / SLA PENALTY (Service Level Agreement)',
        exampleSentence: 'If a Sev-1 ticket remains open for over 4 hours, it will trigger an SLA breach.',
        whyRule: 'Superar el tiempo estipulado en el acuerdo de nivel de servicio.'
      },
      {
        ifStartsOrContains: 'Técnicas empáticas para calmar a un cliente furioso o en pánico',
        thenLookFor: 'DE-ESCALATION / DE-ESCALATE (desescalar el conflicto)',
        exampleSentence: 'Active listening and empathetic phrasing are vital for customer de-escalation.',
        whyRule: 'Estrategia de comunicación para reducir la fricción con clientes afectados.'
      },
      {
        ifStartsOrContains: 'Restricción intencional de seguridad o diseño que el cliente confunde con un fallo',
        thenLookFor: 'DESIGN CONSTRAINT / INTENTIONAL SECURITY FEATURE',
        exampleSentence: 'The 10-minute idle session logout is an intentional constraint, not a bug.',
        whyRule: 'Control de seguridad intencional ("a feature, not a bug").'
      },
      {
        ifStartsOrContains: 'Reunión y documento de análisis post-incidente sin buscar culpables',
        thenLookFor: 'BLAMELESS POSTMORTEM',
        exampleSentence: 'The SRE team published a blameless postmortem detailing the root cause.',
        whyRule: 'Revisión técnica de lecciones aprendidas enfocada en procesos, no en personas.'
      },
      {
        ifStartsOrContains: 'Reversión o fallo inesperado en una funcionalidad que antes funcionaba bien',
        thenLookFor: 'REGRESSION (regresión de software)',
        exampleSentence: 'The new release caused a regression in the PDF generation module.',
        whyRule: 'Degradación de funcionalidad previamente estable.'
      }
    ],
    threeSecondTrigger:
      '¿Solución temporal? ➔ WORKAROUND. ¿Incumplir contrato de tiempo? ➔ SLA BREACH. ¿Calmar cliente? ➔ DE-ESCALATE. ¿Fallo no intencionado? ➔ BUG / REGRESSION. ¿Control de seguridad intencional? ➔ CONSTRAINT / FEATURE.',
    spanglishTrap:
      'Decir *"it\'s a feature, not a bug"* de forma cortante al cliente. El examen penaliza las respuestas defensivas y exige empatía y explicaciones orientadas a workaround.'
  },

  V04: {
    topicId: 'V04',
    humanTitle: 'Ingeniería Social, Vishing y Llamadas Fraudulentas',
    badge: 'Vocabulario Sec (IT 2)',
    category: 'vocab',
    tagline: 'Reconocer pretexting, vishing, impersonation, phishing, whaling, credential harvesting, red flags y verificación out-of-band.',
    analogies: [
      {
        title: 'El Ataque Telefónico de la Falsa Emergencia',
        description:
          'El atacante llama al helpdesk haciéndose pasar por un directivo (IMPERSONATION) a través del teléfono (VISHING), inventando que está en aduanas y necesita acceso urgente (PRETEXTING). Cualquier presión para eludir el protocolo es una bandera roja (RED FLAG).',
        concreteExample: {
          en: 'The attacker used pretexting, claiming to be the CFO with an urgent board meeting to harvest credentials.',
          es: 'El atacante utilizó pretexting, afirmando ser el director financiero con una reunión urgente de la junta directiva para recolectar credenciales.',
          highlight: 'used pretexting, claiming to be the CFO'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Fraude o engaño ejecutado exclusivamente mediante llamadas de voz telefónicas',
        thenLookFor: 'VISHING (Voice Phishing)',
        exampleSentence: 'Fraudulent phone calls designed to obtain sensitive tokens are known as vishing.',
        whyRule: 'Ataque de ingeniería social por canal telefónico.'
      },
      {
        ifStartsOrContains: 'Inventar una historia elaborada o crisis ficticia para manipular y generar confianza',
        thenLookFor: 'PRETEXTING (crear un pretexto o guion engañoso)',
        exampleSentence: 'By fabricating an airport customs emergency, the attacker engaged in pretexting.',
        whyRule: '"Pretexting" es el guion inventado para engañar a la víctima.'
      },
      {
        ifStartsOrContains: 'Hacerse pasar por otra persona, directivo o empleado autorizado',
        thenLookFor: 'IMPERSONATION (suplantación de identidad)',
        exampleSentence: 'Executive impersonation is a common tactic in social engineering attacks.',
        whyRule: 'Adopción de una identidad ajena legítima.'
      },
      {
        ifStartsOrContains: 'Ataque de phishing de alta precisión dirigido específicamente a directivos C-Level',
        thenLookFor: 'WHALING (pesca de ballenas / directivos ejecutivos)',
        exampleSentence: 'The CISO warned senior leadership against sophisticated whaling emails.',
        whyRule: 'Phishing dirigido contra personalidades de alta dirección.'
      },
      {
        ifStartsOrContains: 'Señal de alerta inequívoca de fraude o intento de engaño',
        thenLookFor: 'RED FLAG (presión de tiempo, negarse a verificar identidad)',
        exampleSentence: 'Demanding an immediate MFA bypass is an immediate security red flag.',
        whyRule: 'Indicador de riesgo que obliga a detener la solicitud.'
      },
      {
        ifStartsOrContains: 'Verificación de identidad a través de un canal secundario independiente',
        thenLookFor: 'OUT-OF-BAND VERIFICATION (callback al número oficial registrado)',
        exampleSentence: 'Helpdesk policy mandates out-of-band verification before resetting credentials.',
        whyRule: 'Comprobación cruzada por una vía de comunicación segura no controlada por el atacante.'
      },
      {
        ifStartsOrContains: 'Ataque de phishing mediante mensajes de texto SMS',
        thenLookFor: 'SMISHING (SMS Phishing)',
        exampleSentence: 'Employees received malicious smishing texts containing counterfeit SSO links.',
        whyRule: 'Phishing propagado por mensajería SMS.'
      },
      {
        ifStartsOrContains: 'Seguir a un empleado autorizado a través de puertas de seguridad sin credencial',
        thenLookFor: 'TAILGATING / PIGGYBACKING',
        exampleSentence: 'Following an authorized engineer closely through the data center turnstile is tailgating.',
        whyRule: 'Acceso físico no autorizado pegándose al personal con credencial.'
      }
    ],
    threeSecondTrigger:
      '¿Por teléfono? ➔ VISHING. ¿Historia inventada? ➔ PRETEXTING. ¿Suplantar a alguien? ➔ IMPERSONATION. ¿A directivos C-level? ➔ WHALING. ¿Por SMS? ➔ SMISHING. ¿Señal de alarma? ➔ RED FLAG. ¿Verificación por segundo canal? ➔ OUT-OF-BAND.',
    spanglishTrap:
      'Llamar "phishing" a un ataque por teléfono (es VISHING) o confundir "pretexting" (la historia inventada) con "impersonation" (la identidad falsa que adopta el atacante).'
  },

  V05: {
    topicId: 'V05',
    humanTitle: 'Políticas de Seguridad de la Información (InfoSec) y Zero Trust',
    badge: 'Vocabulario InfoSec (IT 2)',
    category: 'vocab',
    tagline: 'Dominar Least Privilege (PoLP), Zero Trust, microsegmentación, auditoría/trazabilidad, movimiento lateral y cifrado at rest vs in transit.',
    analogies: [
      {
        title: 'Las Puertas Estancas de un Submarino (Micro-segmentation)',
        description:
          'En una arquitectura Zero Trust ya no existe una red interna "de confianza". Cada host y servicio recibe únicamente los permisos mínimos indispensables (Least Privilege). La red se divide en microsegmentos estancos para que, si un atacante entra en un nodo, no pueda saltar de lado a lado (Lateral Movement).',
        concreteExample: {
          en: 'By deploying micro-segmentation, engineers prevented the ransomware from lateral movement across database clusters.',
          es: 'Al desplegar la microsegmentación, los ingenieros evitaron que el ransomware realizara movimientos laterales a través de los clústeres de bases de datos.',
          highlight: 'prevented ... lateral movement across database clusters'
        }
      }
    ],
    decisionTable: [
      {
        ifStartsOrContains: 'Otorgar solo los permisos mínimos indispensables para realizar una función',
        thenLookFor: 'PRINCIPLE OF LEAST PRIVILEGE (PoLP)',
        exampleSentence: 'Under least privilege, developers are granted read-only access to production logs.',
        whyRule: 'Regla de seguridad: cero permisos adicionales no justificados.'
      },
      {
        ifStartsOrContains: 'Paradigma de arquitectura que asume que la red interna ya está comprometida ("Never trust, always verify")',
        thenLookFor: 'ZERO TRUST / ZERO-TRUST NETWORK ARCHITECTURE (ZTNA)',
        exampleSentence: 'A Zero-Trust model eliminates implicit trust for devices inside the corporate LAN.',
        whyRule: 'Validación continua de identidad, dispositivo y contexto para cada solicitud.'
      },
      {
        ifStartsOrContains: 'Aislamiento granular de cargas de trabajo para bloquear el movimiento lateral',
        thenLookFor: 'MICRO-SEGMENTATION',
        exampleSentence: 'Micro-segmentation isolates container pods to prevent lateral movement.',
        whyRule: 'Contención de brechas dividiendo la red en zonas lógicas independientes.'
      },
      {
        ifStartsOrContains: 'Desplazamiento de un atacante desde un equipo comprometido inicial hacia otros servidores',
        thenLookFor: 'LATERAL MOVEMENT',
        exampleSentence: 'Once an attacker breaches a web server, they attempt lateral movement toward databases.',
        whyRule: 'Avance este-oeste dentro del perímetro de la red.'
      },
      {
        ifStartsOrContains: 'Registro inmutable y cronológico de todas las acciones administrativas para cumplimiento',
        thenLookFor: 'AUDIT TRAIL / AUDIT LOGGING',
        exampleSentence: 'All administrative access must generate an immutable audit trail for compliance.',
        whyRule: 'Trazabilidad no manipulable para auditorías regulatorias.'
      },
      {
        ifStartsOrContains: 'Garantía criptográfica de que el emisor de una acción no puede negar haberla realizado',
        thenLookFor: 'NON-REPUDIATION (no repudio)',
        exampleSentence: 'Digital signatures ensure non-repudiation in electronic transaction records.',
        whyRule: 'Certeza legal y criptográfica de la autoría de una transacción.'
      },
      {
        ifStartsOrContains: 'Datos almacenados en disco vs datos viajando por la red',
        thenLookFor: 'AT REST (almacenados) vs IN TRANSIT (en tránsito sobre TLS)',
        exampleSentence: 'Regulatory standards mandate AES-256 encryption for all customer data at rest.',
        whyRule: 'Los dos estados fundamentales de protección criptográfica de datos.'
      }
    ],
    threeSecondTrigger:
      '¿Permisos mínimos indispensables? ➔ LEAST PRIVILEGE. ¿Verificar siempre, desconfiar siempre? ➔ ZERO TRUST. ¿Aislar apps para frenar contagio? ➔ MICRO-SEGMENTATION. ¿Salto entre hosts? ➔ LATERAL MOVEMENT. ¿Registro inmutable? ➔ AUDIT TRAIL. ¿No poder negar autoría? ➔ NON-REPUDIATION.',
    spanglishTrap:
      'Confundir "authentication" (comprobar quién eres) con "authorization" (determinar qué permisos tienes), o llamar "audit" a un simple log efímero (debe ser un "audit trail" formal inmutable).'
  }
};

export const getMentalShortcutForTopic = (topicId: TopicId): MentalShortcut | undefined => {
  return MENTAL_SHORTCUTS[topicId];
};

