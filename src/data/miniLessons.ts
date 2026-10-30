import { TopicId, MiniLesson } from '../types';
import { MENTAL_SHORTCUTS } from './mentalShortcuts';

export const MINI_LESSONS: Partial<Record<TopicId, MiniLesson>> = {
  // ==========================================
  // MODULE 1: PRODUCT MANAGEMENT
  // ==========================================
  G01: {
    topicId: 'G01',
    titleEs: 'Voz pasiva en IT ("se instaló", "se debe", "se cree que")',
    formula: '',
    summaryEs: "En español técnico usamos \"se\" para casi todo: \"se instaló\", \"se debe desplegar\", \"se cree que\". En inglés, ese \"se\" toma 4 formas según la situación:\n• \"Se deben desplegar los algoritmos\" ➔ The algorithms MUST BE deployed.\n• \"Se instalaron los parches\" ➔ The patches WERE installed.\n• \"Se cree que la falla es de red\" ➔ IT IS believed THAT the failure is network-related.\n• \"Se sabe que las pruebas fallan\" ➔ The tests ARE KNOWN TO fail.\n\n1. \"Se debe / se puede / se tiene que…\" ➔ must / should / can + be + 3.ª forma:\n• 3.ª forma: la que en español sería \"desplegado, instalado, escrito\": deployed, installed, written. La vas a ver en las 4 situaciones.\n• Truco: después de must, should o can va be directo. Nunca to: must be deployed, no must to be deployed.\n• Ojo: has to, needs to y ought to sí llevan to (\"has to be deployed\"), porque no son de la familia de must.\n\n2. \"Se instaló / se reinició…\" (algo que ya pasó) ➔ was / were / has been + 3.ª forma:\n• Truco: es lo que escribes en un log o un postmortem. Importa el sistema, no quién lo hizo.\n• Ojo: con verbos irregulares, la 3.ª forma no es la del pasado: was written, no was wrote.\n\n3. \"Se cree que / se dice que…\" + una frase completa ➔ It is thought / believed / reported that…:\n• Truco: empieza con It y sigue con that. El It es obligatorio aunque en español no se vea.\n\n4. \"Se cree que…\" con la cosa al principio ➔ The tests are thought / known / considered to…:\n• Truco: si la frase empieza por la cosa (the tests, the outage), ese \"que\" se convierte en to: are thought to produce.\n• Ojo: si es algo que ya pasó, sigue to have been: \"The outage is thought to have been caused by a corrupted block\" = se cree que la caída la causó un bloque corrupto.\n\n5. Nivel avanzado (opcional):\n• Quién lo hizo: casi nunca se dice. Si hace falta, va al final con by: \"The patch was approved by the CAB.\"\n• Una norma que no se cumplió: should have been + 3.ª forma. \"A stronger password should have been used\" = se debería haber usado una contraseña más segura.\n• Needs + -ing: \"The system needs upgrading\" significa lo mismo que \"needs to be upgraded\" (hay que actualizarlo). Lo verás a fondo en G10.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) En las opciones aparece must, should o can ➔ la buena es must / should / can + be + 3.ª forma ("must be done"). Las trampas: "must to be done", "must been done", "should being".\n2) La frase empieza con el hueco y sigue con "that" ➔ It is + thought / understood / believed ("It is understood that…"). Sin It ("Is understood") es trampa.\n3) La frase empieza por la cosa y después viene "to" ➔ is thought / considered / expected ("is considered to be"). "is thought that" o "thinks that" son trampa.\n4) Algo que ya pasó sobre un sistema ➔ was / were + 3.ª forma ("were distributed", "was neutralized"). "were distribute" o "neutralized" a secas son trampa.',
    examples: [
      {
        en: 'The new encryption algorithms must be deployed in all endpoints before the audit.',
        highlight: 'must be deployed',
        es: 'Los nuevos algoritmos de cifrado se deben desplegar en todos los endpoints antes de la auditoría.',
        explanation: '"Se deben desplegar" ➔ must be deployed. Después de must va be directo, sin to.'
      },
      {
        en: 'Incoming transaction requests were distributed across four autonomous microservices.',
        highlight: 'were distributed',
        es: 'Las peticiones de transacciones entrantes se distribuyeron entre cuatro microservicios autónomos.',
        explanation: '"Se distribuyeron" (ya pasó) ➔ were distributed. Importa el sistema, no quién lo hizo.'
      },
      {
        en: 'It is thought that the penetration tests produce false positives under heavy network traffic.',
        highlight: 'It is thought that',
        es: 'Se cree que las pruebas de penetración producen falsos positivos cuando hay mucho tráfico de red.',
        explanation: '"Se cree que" + frase completa ➔ It is thought that. Empieza con It y sigue con that.'
      },
      {
        en: 'The penetration tests are thought to produce false positives under heavy network traffic.',
        highlight: 'are thought to produce',
        es: 'Se cree que las pruebas de penetración producen falsos positivos cuando hay mucho tráfico de red.',
        explanation: 'La misma idea que el ejemplo anterior, pero empezando por la cosa (the tests): el "que" se convierte en to.'
      },
      {
        en: 'Single sign-on functionality is considered to be a standard for identity providers.',
        highlight: 'is considered to be',
        es: 'El inicio de sesión único (SSO) se considera un estándar para los proveedores de identidad.',
        explanation: '"Se considera" con la cosa al principio ➔ is considered to be.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"The algorithms must to be deployed.\"\n  ✓ \"The algorithms must be deployed.\"\n  Por qué pasa: en español decimos \"tienen que ser desplegados\" o \"deben de ser\", y ese \"que\" o \"de\" se cuela como to. Después de must no va nada.\n• ❌ \"The tests are known that they produce false positives.\"\n  ✓ \"The tests are known to produce false positives.\"\n  Por qué pasa: \"se sabe que\" lleva \"que\", y lo traducimos como that. Si la frase empieza por la cosa, va to.\n• ❌ \"Is thought that the database failed.\"\n  ✓ \"It is thought that the database failed.\"\n  Por qué pasa: en \"se piensa que\" no hay ninguna palabra al principio, así que no la ponemos. En inglés hace falta It.\n• ❌ \"The report was wrote by the security team.\"\n  ✓ \"The report was written by the security team.\"\n  Por qué pasa: en español \"escribió\" y \"escrito\" se distinguen bien, pero en inglés muchos verbos tienen la misma forma (installed) y nos confiamos. Con was va la 3.ª forma: written.",
    cheatSheetRule: '"Se debe…" ➔ must / should + be + 3.ª forma, sin to. "Se instaló…" ➔ was / were + 3.ª forma. "Se cree que…" ➔ It is thought that… Con la cosa al principio ➔ The X is thought to…',
    mentalShortcut: '⚡ "se debe / se puede…" ➔ must / can + be + deployed (sin to) | "se instaló…" ➔ was / were + installed | "se cree que…" ➔ It is thought that… | "se cree que…" con la cosa delante ➔ The tests are thought to…'
  },

  G02: {
    topicId: 'G02',
    titleEs: 'Who, which, that, what, whose, when y why ("que", "lo que", "cuyo")',
    formula: '',
    summaryEs: "En español usas \"que\" para casi todo. En inglés la palabra cambia según lo que viene justo antes. Primero piensa cómo lo dirías en español:\n• \"La regla que añadimos ayer\" ➔ The rule WHICH / THAT we added yesterday.\n• \"Los usuarios que reportaron la caída\" ➔ The users WHO reported the outage.\n• \"Ife, cuyo equipo migra la base de datos\" ➔ Ife, WHOSE team is migrating the database.\n• \"Lo que necesitamos es un plan de rollback\" ➔ WHAT we need is a rollback plan.\n• \"Los problemas ocurren cuando ignoramos las mejoras\" ➔ Problems occur WHEN we ignore improvements.\n\n1.\"Que\" después de una cosa ➔ which o that:\n• Truco: si justo antes del hueco ves una cosa (el ticket, el servidor, la regla), usa which o that. Las dos valen.\n• Ejemplo: \"the patch which / that we installed\" = el parche que instalamos.\n\n2. \"Que\" después de una persona ➔ who:\n• Truco: si justo antes hay alguien (el técnico, los clientes, la jefa de proyecto), usa who.\n• Ojo: that también es correcto con personas, pero which no. Si dudas, who nunca falla.\n\n3. \"Cuyo / cuya\" ➔ whose:\n• Truco: si en español dirías \"cuyo\", \"cuya\" o \"de quien\", es whose.\n• Ojo: who's suena igual, pero significa \"who is\" (quién es). Para \"cuyo\" siempre es whose.\n\n4. \"Lo que\" ➔ what:\n• Truco: what ya lleva el \"lo\" dentro. Úsalo cuando no has nombrado ninguna cosa antes.\n• Ojo: si la cosa ya está nombrada, no uses what. \"La encuesta que hicimos\" es the survey that we did, no the survey what we did.\n\n5. \"El momento / la razón / el lugar en que\" ➔ when / why / where:\n• Truco: igual que what, no hace falta nombrar nada antes. when = el momento en que, why = la razón por la que, where = el lugar donde.\n• Ejemplo: \"Problems occur when we ignore UX feedback\" = los problemas ocurren cuando ignoramos el feedback de UX. \"That's why I'm inviting you\" = por eso te invito.\n• Ojo: where también puede ir detrás de una cosa: \"the staging environment, where the tests run\" = el entorno de staging, donde se ejecutan las pruebas.\n\n6. Nivel avanzado (opcional):\n• Whom: versión formal de who cuando la persona recibe la acción. \"The engineers whom you met\" = los ingenieros a quienes conociste. En el día a día también se dice who o that.\n• Con coma, solo which: \"The VPN, which we installed in May, is down.\" Detrás de una coma, that no se usa.\n• Equipos y empresas: con team, company o vendor lo más seguro es which o that. Con who también lo vas a ver, sobre todo en inglés británico.\n• How: \"la forma en que\" también va solo: \"That's not how it works\" = así no funciona.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Hay una cosa justo antes del hueco ("the survey ___ we did") ➔ which o that. Si aparece what, es la trampa.\n2) Hay una persona justo antes ("the customers ___ mentioned it") ➔ who (o that). Which y what son trampa.\n3) Justo después del hueco viene algo que pertenece a alguien ("Ife, ___ team is renegotiating") ➔ whose. Who y who\'s son trampa.\n4) No hay nada nombrado antes y se lee "lo que" ("is ___ they should be doing") ➔ what.\n5) Se lee "el momento / la razón / el lugar" ("Problems occur ___ we ignore…", "That is ___ I am inviting you", "…the staging environment, ___ the tests run") ➔ when, why, where. Si pone what en "That is ___ I am inviting you", es la trampa.',
    examples: [
      {
        en: 'The penetration test which we ran two weeks ago has produced interesting results.',
        highlight: 'which',
        es: 'La prueba de penetración que ejecutamos hace dos semanas ha dado resultados interesantes.',
        explanation: '"Que" después de una cosa (la prueba) ➔ which. Con that también sería correcto.'
      },
      {
        en: 'The users who reported the outage have already been contacted.',
        highlight: 'who',
        es: 'Ya contactamos a los usuarios que reportaron la caída.',
        explanation: '"Que" después de personas (los usuarios) ➔ who.'
      },
      {
        en: 'This is Ife, whose team is renegotiating the deal with the client.',
        highlight: 'whose',
        es: 'Te presento a Ife, cuyo equipo está renegociando el acuerdo con el cliente.',
        explanation: '"Cuyo equipo" = el equipo de Ife ➔ whose. Nunca "who\'s team" (who\'s = who is).'
      },
      {
        en: 'What we need is a rollback plan before the deployment.',
        highlight: 'What',
        es: 'Lo que necesitamos es un plan de rollback antes del despliegue.',
        explanation: '"Lo que" ➔ what. No se nombró ninguna cosa antes, así que what hace el trabajo de "lo que".'
      },
      {
        en: 'Problems occur when we ignore demands for improvements in UX.',
        highlight: 'when',
        es: 'Los problemas ocurren cuando ignoramos las peticiones de mejoras de UX.',
        explanation: '"Cuando / el momento en que" ➔ when. No se nombró ninguna cosa antes.'
      },
      {
        en: 'That is why I am inviting you to the feedback session.',
        highlight: 'why',
        es: 'Por eso te invito a la sesión de feedback.',
        explanation: '"Por eso / la razón por la que" ➔ why. Con what sería un error.'
      },
      {
        en: 'We need to deploy the hotfix to the staging environment, where the automated integration tests run.',
        highlight: 'where',
        es: 'Tenemos que desplegar el hotfix en el entorno de staging, donde se ejecutan las pruebas de integración automáticas.',
        explanation: '"Donde" detrás de un lugar (staging) ➔ where.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"The survey what we did shows the problem.\"\n  ✓ \"The survey that we did shows the problem.\"\n  Por qué pasa: \"que\" y \"lo que\" se parecen, y el cerebro salta a what. Si la cosa ya está nombrada (the survey), va that o which.\n• ❌ \"The customers which complained were contacted.\"\n  ✓ \"The customers who complained were contacted.\"\n  Por qué pasa: en español \"que\" sirve igual para personas y para cosas. En inglés, para personas va who.\n• ❌ \"This is Ife, who's team is migrating the database.\"\n  ✓ \"This is Ife, whose team is migrating the database.\"\n  Por qué pasa: who's y whose suenan exactamente igual. Pero who's es \"who is\"; para \"cuyo\" va whose.\n• ❌ \"All what we need is a stable build.\"\n  ✓ \"All that we need is a stable build.\"\n  Por qué pasa: traducimos \"todo lo que\" palabra por palabra. Después de all o everything va that, nunca what.\n• ❌ \"That is what I am inviting you to the feedback session.\"\n  ✓ \"That is why I am inviting you to the feedback session.\"\n  Por qué pasa: \"por eso\" no tiene ninguna palabra que traduzca why, y what nos suena a \"lo que\". Si es una razón, va why.",
    cheatSheetRule: '"Que" después de una cosa ➔ which / that. "Que" después de una persona ➔ who. "Cuyo / cuya" ➔ whose. "Lo que" ➔ what. "El momento / la razón / el lugar" ➔ when / why / where.',
    mentalShortcut: '⚡ "que" tras una cosa ➔ which / that | "que" tras una persona ➔ who | "cuyo / cuya" ➔ whose | "lo que" ➔ what | "el momento / la razón / el lugar" ➔ when / why / where'
  },

  G03: {
    topicId: 'G03',
    titleEs: 'As if y as though ("como si")',
    formula: '',
    summaryEs: "En español, después de \"como si\" va \"supiera\", \"tuviera\", \"fuera\". En inglés, as if y as though (las dos significan \"como si\") van con el verbo en pasado:\n• \"Hablas como si supieras la solución\" ➔ You're talking AS IF you KNEW the solution.\n• \"Me piden más commits, como si no tuviera bastante trabajo\" ➔ They ask me for more commits, AS IF I DIDN'T HAVE enough to do.\n• \"Actúan como si fuera normal\" ➔ They're acting AS IF it WERE normal.\n• \"Parecía que no podíamos acceder\" ➔ It LOOKED AS THOUGH we couldn't get access.\n\n1. \"Como si supiera / tuviera…\" ➔ as if / as though + pasado:\n• Truco: \"supiera\" ➔ knew, \"tuviera\" ➔ had, \"no tuviera\" ➔ didn't have. El pasado marca que no es verdad.\n• Ojo: nunca would después de as if: as if they had, no as if they would have.\n\n2. \"Como si fuera / estuviera…\" ➔ as if + were, con todos:\n• Truco: aunque sea it, I o he, va were: as if it were normal, as if it were connected to the DMZ.\n\n3. \"Parece / parecía que…\" ➔ It looks / seems / appears as though (o as if):\n• Truco: It looked as though, It appears as though. Nunca mezcles las dos formas: \"as like\" o \"as if like\" son errores.\n\n4. ¿Hipotético o real? (cuando te piden clasificar la frase):\n• Hipotético: hay as if / as though y lo que dice no es verdad (\"They were talking as if we had months\": en realidad no hay meses).\n• Real: no hay as if y se cuenta algo que pasó o es así (\"We decided it was a good idea\", \"The fact is that we had no choice\").\n\n5. Nivel avanzado (opcional):\n• Si lo que dices puede ser verdad, as if también va con presente: \"It looks as if the server is down\" = parece que el servidor está caído (y probablemente lo está).\n• En conversación se oye \"It looks like the server is down\". Es informal; en textos formales usa as if / as though.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Hueco después de as if / as though en algo que no es verdad ➔ pasado ("didn\'t have", "had") o were ("as if it were"). Haven\'t, will had, would had, is o has been son trampa.\n2) "It ___ we couldn\'t get access" ➔ looked as though. "seemed as like", "appeared if" o "looked as if like" son trampa.\n3) Te piden clasificar la frase ➔ Hypothetical si hay as if / as though con algo que no es verdad. Real si se cuenta un hecho o una decisión (We decided, The fact is that, It is great that we received).',
    examples: [
      {
        en: 'You’re asking me to commit more changes, as if I didn’t have enough to do already.',
        highlight: 'as if I didn’t have',
        es: 'Me pides que suba más cambios, como si no tuviera ya bastante trabajo.',
        explanation: '"Como si no tuviera" ➔ as if I didn’t have. Pasado porque no es verdad: sí tiene trabajo.'
      },
      {
        en: 'They are acting as if it were normal to have so many detractors.',
        highlight: 'as if it were',
        es: 'Actúan como si fuera normal tener tantos detractores.',
        explanation: '"Como si fuera" ➔ as if it were, con it también.'
      },
      {
        en: 'Looking at the query results, it appears as though they counted internal accounts.',
        highlight: 'it appears as though',
        es: 'Viendo los resultados de la consulta, parece que contaron cuentas internas.',
        explanation: '"Parece que" ➔ it appears as though.'
      },
      {
        en: 'The compromised IoT gateway responds to external pings as if it were directly connected to the DMZ.',
        highlight: 'as if it were',
        es: 'El gateway IoT comprometido responde a los pings externos como si estuviera conectado directamente a la DMZ.',
        explanation: '"Como si estuviera" ➔ as if it were.'
      },
      {
        en: 'They were talking as if we had months to finish the project.',
        highlight: 'as if we had',
        es: 'Hablaban como si tuviéramos meses para terminar el proyecto.',
        explanation: 'Hipotético: en realidad no hay meses. "Como si tuviéramos" ➔ as if we had.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"You’re talking as if you know the solution.\"\n  ✓ \"You’re talking as if you knew the solution.\"\n  Por qué pasa: el inglés no tiene una forma como \"supieras\", así que usamos el presente. Para algo que no es verdad, va el pasado: knew.\n• ❌ \"It seemed as like we couldn’t get access.\"\n  ✓ \"It seemed as though we couldn’t get access.\"\n  Por qué pasa: hemos oído \"seems like\" y \"as though\", y las juntamos. Elige una: as though (o as if).\n• ❌ \"They act as if they would have enough time.\"\n  ✓ \"They act as if they had enough time.\"\n  Por qué pasa: \"tuvieran\" suena a condicional y añadimos would. Después de as if va el pasado directo.\n• ❌ \"The daemon consumed memory as though there is a runaway leak.\"\n  ✓ \"The daemon consumed memory as though there were a runaway leak.\"\n  Por qué pasa: con \"there is\" no pensamos en \"como si hubiera\". Si no es seguro que sea verdad, va were.",
    cheatSheetRule: '"Como si supiera / tuviera" ➔ as if + pasado (knew, had, didn\'t have). "Como si fuera" ➔ as if + were. "Parece que" ➔ It looks / seems / appears as though. Nunca would ni "as like".',
    mentalShortcut: '⚡ "como si supiera / tuviera" ➔ as if + knew / had | "como si fuera / estuviera" ➔ as if it were | "parece / parecía que" ➔ It looks / looked as though | as if + algo que no es verdad ➔ Hypothetical'
  },

  // ==========================================
  // MODULE 2: NETWORK ENGINEER
  // ==========================================
  G04: {
    topicId: 'G04',
    titleEs: 'El "sí" enfático con do, does, did ("sí lo hice")',
    formula: '',
    summaryEs: "En español insistimos con \"sí\": \"sí lo hice\", \"sí lo necesitamos\". En inglés no se dice \"I yes told you\": ese \"sí\" es do / does / did delante del verbo:\n• \"Sí te lo dije\" ➔ I DID tell you.\n• \"Sí lo mencioné en el correo\" ➔ I DID mention it in my email.\n• \"Ella sí sabe de qué habla\" ➔ She DOES know what she's talking about.\n• \"Sí necesitamos arreglar el firewall\" ➔ We DO need to fix the firewall.\n\n1. \"Sí + algo que ya pasó\" ➔ did + el verbo tal como sale en el diccionario:\n• Truco: did ya dice que es pasado, así que el verbo va limpio: did tell, did mention, no did told.\n• Ejemplo: \"The logs prove that the API did maintain 99.9 % uptime\" = los logs demuestran que la API sí mantuvo el 99,9 %.\n\n2. \"Sí + ahora\" ➔ do con I / you / we / they, does con he / she / it:\n• Truco: es el mismo do / does de las preguntas (Do you…? Does she…?).\n• Ojo: después de does, el verbo va sin -s: does know, no does knows.\n\n3. Con más fuerza o pidiendo confirmación ➔ absolutely / really + do, y la coletilla en negativo:\n• Truco: absolutely y really van delante de do: \"We absolutely do need…\".\n• Ejemplo: \"You do have the experience, don't you?\" = tú sí tienes experiencia, ¿verdad?\n\n4. ¿Es enfático o no? (cuando te piden clasificar la frase):\n• Sí lo es: do / does / did y otro verbo detrás (\"I do think\", \"it does need reporting\").\n• No lo es: does significa \"hacer\" (\"She does most of the organization\") o es una negación normal (\"They don't appreciate…\", \"He doesn't seem…\").\n\n5. Nivel avanzado (opcional):\n• Do al dar una orden: \"Do call me if the alert fires again\" = no dudes en llamarme si la alerta vuelve a saltar.\n• Contraste: \"It rarely fails, but it does consume a lot of memory\" = casi nunca falla, pero sí consume mucha memoria.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) La frase habla de algo que ya pasó ("many times", "in my previous email") ➔ did + verbo limpio ("did tell", "did mention"). Las trampas: "do tell", "does tell", "told" a secas.\n2) Habla de ahora con she / he / it ➔ does + verbo limpio ("does know", "does consume"). Con I / we / they ➔ do ("do think").\n3) Te piden clasificar la frase ➔ emphatic solo si hay do / does / did y otro verbo detrás. Si does va con una cosa ("does most of the organization") o hay don\'t / doesn\'t: not emphatic.\n4) Coletilla después de "They do understand…" ➔ don\'t they?',
    examples: [
      {
        en: 'Well, I did tell you many times that this would happen.',
        highlight: 'did tell',
        es: 'Bueno, yo sí te dije muchas veces que esto iba a pasar.',
        explanation: '"Sí te dije" ➔ did tell. Did ya marca el pasado: tell, no told.'
      },
      {
        en: 'We absolutely do need to address these firewall issues ASAP.',
        highlight: 'absolutely do need',
        es: 'Sí que necesitamos resolver estos problemas del firewall cuanto antes.',
        explanation: 'Absolutely va delante de do para darle todavía más fuerza.'
      },
      {
        en: 'While this microservice rarely throws exceptions, it does consume significant memory during large batch imports.',
        highlight: 'does consume',
        es: 'Aunque este microservicio casi nunca lanza excepciones, sí consume mucha memoria en las importaciones grandes.',
        explanation: '"Sí consume" con it ➔ does consume, sin -s en consume.'
      },
      {
        en: 'They do understand the seriousness of meeting this deadline, don’t they?',
        highlight: 'do understand / don’t they',
        es: 'Ellos sí entienden lo importante que es cumplir este plazo, ¿verdad?',
        explanation: 'Do + understand para insistir, y la coletilla en negativo (don’t they?) para pedir confirmación.'
      },
      {
        en: 'She does most of the organization for each training session.',
        highlight: 'does most',
        es: 'Ella hace la mayor parte de la organización de cada sesión de formación.',
        explanation: 'No es enfático: aquí does significa "hace" y detrás no hay otro verbo.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"I yes told you about the outage.\"\n  ✓ \"I did tell you about the outage.\"\n  Por qué pasa: traducimos \"sí te dije\" palabra por palabra. En inglés, el \"sí\" se dice con did.\n• ❌ \"I did noticed the alert.\"\n  ✓ \"I did notice the alert.\"\n  Por qué pasa: queremos dejar claro que es pasado y lo marcamos dos veces. Con did, el pasado ya está dicho.\n• ❌ \"She does knows what she's talking about.\"\n  ✓ \"She does know what she's talking about.\"\n  Por qué pasa: con she ponemos la -s en automático. La -s ya está en does.\n• ❌ \"He does his job well\" clasificada como Emphatic.\n  ✓ Es Not emphatic: does significa \"hace\".\n  Por qué pasa: does se parece al does enfático. Mira si detrás hay otro verbo; si no lo hay, es \"hacer\".",
    cheatSheetRule: '"Sí lo hice" ➔ did + verbo limpio (did tell). "Sí" ahora ➔ do (I / we / they) o does (he / she / it) + verbo sin -s. Si does no tiene otro verbo detrás, significa "hacer" y no es enfático.',
    mentalShortcut: '⚡ "sí lo hice" ➔ I did + verbo (did tell, no did told) | "sí" con I / you / we / they ➔ do + verbo (do need) | "sí" con he / she / it ➔ does + verbo (does know, sin -s) | does + una cosa (does the work) ➔ es "hacer", no énfasis'
  },

  G05: {
    topicId: 'G05',
    titleEs: 'Preposiciones que van pegadas (depend on, consist of, responsible for)',
    formula: '',
    summaryEs: "Algunas palabras inglesas llevan siempre la misma preposición pegada, y muchas veces no es la que usaríamos en español. No se razonan: se aprenden en pareja, como un solo bloque:\n• \"Depende del firewall\" ➔ It DEPENDS ON the firewall.\n• \"Consiste en arrastrar archivos\" ➔ It CONSISTS OF dragging files.\n• \"Responsable de la red\" ➔ RESPONSIBLE FOR the network.\n• \"Un aumento de los ataques\" ➔ An INCREASE IN attacks.\n\n1. Donde en español dices \"de\" y en inglés NO es of:\n• Parejas: depend on, rely on (depender de) · responsible for (responsable de) · worry about (preocuparse de / por) · increase in (aumento de) · protect from (proteger de).\n• Truco: \"de\" es la trampa número uno. Si dudas, of casi nunca es la respuesta con estas palabras.\n\n2. Donde en español dices \"en\" y en inglés cambia:\n• Parejas: consist of (consistir en) · insist on (insistir en) · impact on (impacto en) · comment on (comentar sobre).\n• Truco: consist of es la más traicionera: \"consiste EN\" ➔ consists OF.\n\n3. Donde en español no hay preposición, o es \"a\", y en inglés sí hay una:\n• Parejas: listen to (escuchar) · respond to (responder a) · according to (según) · vulnerable to, susceptible to (vulnerable a) · apologize for (disculparse por).\n• Truco: listen siempre lleva to: listen to the instructions.\n\n4. Las que sí coinciden con el español:\n• Parejas: capable of, incapable of (capaz de) · advantages of (ventajas de).\n• Ojo: después de la preposición, un verbo va con -ing: incapable of reacting, apologize for not answering.\n\n5. Nivel avanzado (opcional):\n• Cuando te piden señalar la preposición \"pegada\": es la que va justo después de la palabra (increase IN, responsible FOR). Las de tiempo o lugar (since, at the start, when) no cuentan.\n• Protect from y protect against significan lo mismo.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Te dan una frase y te piden la preposición "pegada" (dependent preposition) ➔ elige la que va justo después de increase, consist, worry, responsible, protect o comment. Since, at, when o with son trampa.\n2) Hueco después de depend, increase, apologize, respond, according o impact ➔ on, in, for, to, to, on. Las trampas copian el español: depend of, consist in, responsible of.\n3) Hueco después de vulnerable o susceptible ➔ to. Después de insist ➔ on.',
    examples: [
      {
        en: 'The diagnosis showed that the network failure had a massive impact on productivity.',
        highlight: 'impact on',
        es: 'El diagnóstico mostró que el fallo de red tuvo un impacto enorme en la productividad.',
        explanation: '"Impacto en" ➔ impact on, no impact in.'
      },
      {
        en: 'The constant increase in cyber attacks means the firewall plays a bigger role every month.',
        highlight: 'increase in',
        es: 'El aumento constante de los ciberataques hace que el firewall sea cada mes más importante.',
        explanation: '"Aumento de" ➔ increase in. Aquí el "de" español se vuelve in.'
      },
      {
        en: 'My laptop and my Android phone both rely on the same router.',
        highlight: 'rely on',
        es: 'Mi portátil y mi móvil Android dependen del mismo router.',
        explanation: '"Depender de" ➔ rely on (igual que depend on).'
      },
      {
        en: 'This deployment process mainly consists of dragging and dropping the configuration templates.',
        highlight: 'consists of',
        es: 'Este proceso de despliegue consiste sobre todo en arrastrar y soltar las plantillas de configuración.',
        explanation: '"Consiste en" ➔ consists of, y después el verbo con -ing (dragging).'
      },
      {
        en: 'Unpatched web servers running outdated OpenSSL libraries are highly susceptible to man-in-the-middle attacks.',
        highlight: 'susceptible to',
        es: 'Los servidores web sin parchear con librerías OpenSSL antiguas son muy vulnerables a ataques man-in-the-middle.',
        explanation: '"Vulnerable a" ➔ susceptible to / vulnerable to.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"It depends of the firewall.\"\n  ✓ \"It depends on the firewall.\"\n  Por qué pasa: \"depende DE\" sale solo. En inglés la pareja fija es depend on.\n• ❌ \"The task consists in dragging files.\"\n  ✓ \"The task consists of dragging files.\"\n  Por qué pasa: copiamos \"consiste EN\". La pareja fija es consist of.\n• ❌ \"She is responsible of the network.\"\n  ✓ \"She is responsible for the network.\"\n  Por qué pasa: copiamos \"responsable DE\". La pareja fija es responsible for.\n• ❌ \"Please listen the instructions.\"\n  ✓ \"Please listen to the instructions.\"\n  Por qué pasa: \"escuchar\" no lleva nada en español. Listen siempre lleva to.",
    cheatSheetRule: 'Parejas fijas: depend on, rely on, insist on, impact on, comment on · consist of, capable of, advantages of · responsible for, apologize for · increase in · listen to, respond to, according to, vulnerable to, susceptible to · worry about · protect from.',
    mentalShortcut: '⚡ "depender de" ➔ depend on / rely on | "consistir en" ➔ consist of | "responsable de" ➔ responsible for | "aumento de" ➔ increase in | "escuchar / responder a" ➔ listen to / respond to'
  },

  // ==========================================
  // MODULE 3: SOFTWARE ENGINEER
  // ==========================================
  G06: {
    topicId: 'G06',
    titleEs: 'Although, Despite, And, But… al empezar la frase',
    formula: '',
    summaryEs: "En español puedes empezar una frase con \"aunque\", \"a pesar de\", \"y\" o \"pero\". En inglés también, pero cada palabra exige algo distinto detrás:\n• \"Aunque el enlace estaba activo, el router falló\" ➔ ALTHOUGH the link was up, the router failed.\n• \"A pesar de la latencia, la llamada siguió\" ➔ DESPITE the latency, the call stayed connected.\n• \"Mientras que el monolito necesita un despliegue completo, los microservicios escalan por separado\" ➔ WHEREAS the monolith needs a full deployment, microservices scale independently.\n• \"Y luego genera las instrucciones\" ➔ AND then it generates the instructions.\n\n1. \"Aunque\" + una frase completa ➔ Although / Even though:\n• Truco: si detrás hay alguien haciendo algo (\"the link was up\", \"we tested it\"), va Although o Even though.\n• Ojo: cuando la frase empieza así, se pone coma al final de esa primera parte: \"Although the link was up, the router failed.\"\n\n2. \"A pesar de\" + una cosa o un verbo con -ing ➔ Despite / In spite of:\n• Truco: si detrás solo hay una cosa (\"the latency\") o un -ing (\"completing the tests\"), va Despite.\n• Ojo: despite nunca lleva of. Las dos formas correctas son despite e in spite of.\n\n3. \"Mientras que\" (comparar dos cosas) ➔ Whereas / While + frase completa:\n• Truco: compara dos sistemas en la misma frase: \"Whereas A…, B…\". Lo verás a fondo en G22.\n\n4. Empezar con \"Y / Pero / Así que / O / Ni\" ➔ And / But / So / Or / Nor:\n• Truco: igual que en español, en una conversación puedes empezar así: \"And then it generates…\", \"But that's not how we'll solve it\", \"So that's our only option?\", \"Or we could use plan B.\"\n• Ojo: después de Nor va el orden de pregunta (como en G07): \"Nor does the new update fix the leak.\"\n\n5. Nivel avanzado (opcional):\n• \"A pesar de que\" + frase: si quieres usar despite con una frase completa, añade the fact that: \"Despite the fact that latency increased, no calls dropped.\"\n• For al principio: puede significar \"pues / ya que\" (\"For that might shed light on the problem\") o \"para\" (\"For me, it's more complicated\" = para mí, es más complicado).\n• Porque / por: because va con una frase (\"Because I couldn't fix it, …\") y because of con una cosa. Lo verás a fondo en G28.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) El hueco está al principio y detrás hay alguien haciendo algo ("___ the core cluster experienced packet loss") ➔ Although o Even though. Si detrás hay una cosa o un -ing ("___ suffering a power failure") ➔ Despite.\n2) "Despite of" o "In spite" sin of son trampa.\n3) El hueco está al principio de una frase que sigue a otra ➔ piensa cómo lo dirías en español: "Y…" And, "Pero…" But, "Así que…" So, "O…" Or, "Ni…" Nor.\n4) Con Nor al principio, lo que sigue va en orden de pregunta ("Nor does the update fix…").',
    examples: [
      {
        en: 'Although the secondary fiber link was operational, the router failed to reroute outbound packets.',
        highlight: 'Although',
        es: 'Aunque el enlace secundario de fibra estaba operativo, el router no consiguió redirigir los paquetes salientes.',
        explanation: '"Aunque" + frase completa (the link was operational) ➔ Although, con coma al final de esa parte.'
      },
      {
        en: 'Despite completing extensive unit testing, the team discovered a critical memory leak in staging.',
        highlight: 'Despite completing',
        es: 'A pesar de completar muchas pruebas unitarias, el equipo descubrió una fuga de memoria crítica en staging.',
        explanation: '"A pesar de" + un -ing (completing) ➔ Despite, sin of.'
      },
      {
        en: 'Whereas monolithic architectures require full deployment cycles, microservices allow independent scaling.',
        highlight: 'Whereas',
        es: 'Mientras que las arquitecturas monolíticas necesitan ciclos de despliegue completos, los microservicios permiten escalar por separado.',
        explanation: '"Mientras que" para comparar dos sistemas ➔ Whereas.'
      },
      {
        en: 'In spite of the scheduled maintenance, the payment API remained available to all customers.',
        highlight: 'In spite of',
        es: 'A pesar del mantenimiento programado, la API de pagos siguió disponible para todos los clientes.',
        explanation: 'In spite of = despite. Detrás va una cosa (the scheduled maintenance).'
      },
      {
        en: 'The bottleneck issue has still not been resolved. Nor does the new update fix the memory leak.',
        highlight: 'Nor does',
        es: 'El cuello de botella sigue sin resolverse. Ni la nueva actualización arregla la fuga de memoria.',
        explanation: '"Ni…" al empezar ➔ Nor, y después orden de pregunta: does the update fix.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"Despite the server was offline, the backup finished.\"\n  ✓ \"Although the server was offline, the backup finished.\"\n  Por qué pasa: en español \"a pesar de que\" lleva una frase completa, y traducimos \"a pesar de\" por despite. Con una frase completa va although.\n• ❌ \"Despite of the latency, the call stayed connected.\"\n  ✓ \"Despite the latency, the call stayed connected.\"\n  Por qué pasa: \"a pesar DE\" nos pide un of. Despite ya lo incluye.\n• ❌ \"Although the link was up the router failed.\"\n  ✓ \"Although the link was up, the router failed.\"\n  Por qué pasa: en español a menudo omitimos esa coma. En inglés escrito separa las dos partes.\n• ❌ \"Nor the new update fixes the leak.\"\n  ✓ \"Nor does the new update fix the leak.\"\n  Por qué pasa: \"ni la actualización arregla\" mantiene el orden normal en español. En inglés, después de Nor va el orden de pregunta.",
    cheatSheetRule: '"Aunque" + frase ➔ Although / Even though. "A pesar de" + cosa o -ing ➔ Despite / In spite of (nunca despite of). "Mientras que" ➔ Whereas / While. "Y / Pero / Así que / O / Ni" al empezar ➔ And / But / So / Or / Nor (Nor + orden de pregunta).',
    mentalShortcut: '⚡ "aunque" + frase ➔ Although / Even though | "a pesar de" + cosa o -ing ➔ Despite / In spite of (nunca despite of) | "mientras que" ➔ Whereas / While | "y / pero / así que / ni" al empezar ➔ And / But / So / Nor'
  },

  G07: {
    topicId: 'G07',
    titleEs: 'Orden de pregunta tras "Rarely", "Not only", "Under no circumstances"',
    formula: '',
    summaryEs: "En español, para preguntar puedes decir \"¿Deben los usuarios compartir…?\". En inglés formal, ese mismo orden de pregunta aparece cuando la frase empieza con una expresión negativa o con \"Only…\":\n• \"Bajo ninguna circunstancia los usuarios deben compartir contraseñas\" ➔ Under no circumstances SHOULD USERS share passwords.\n• \"Rara vez hemos visto un ataque así\" ➔ Rarely HAVE WE seen an attack like this.\n• \"No solo se cayó el nodo, sino que corrompió la caché\" ➔ Not only DID THE NODE crash, but it also corrupted the cache.\n• \"Solo después de revisar los logs, el equipo encontró el servidor\" ➔ Only after reviewing the logs DID THE TEAM find the server.\nEl verbo pequeño que se adelanta (do / does / did, have / has / had, will, can, should, must) es el mismo que usas para preguntar: Did you…? Have you…? Should we…?\n\n1. \"Bajo ninguna circunstancia…\" ➔ Under no circumstances / In no way / On no account + orden de pregunta:\n• Truco: piensa la pregunta (\"Should users share passwords?\") y ponle delante Under no circumstances.\n• Ejemplo: \"Under no circumstances can the audit logs be deleted.\"\n\n2. \"Rara vez / casi nunca…\" ➔ Rarely / Seldom + orden de pregunta:\n• Truco: igual que una pregunta. Si la frase normal no tiene verbo pequeño (\"the backup fails\"), añade do / does / did como harías al preguntar: \"Rarely does the backup fail.\"\n• Ojo: después de do / does / did, el verbo va tal como sale en el diccionario: \"did the team identify\", no \"did the team identified\".\n\n3. \"No solo… sino que además…\" ➔ Not only + orden de pregunta…, but also…:\n• Truco: el orden de pregunta va solo en la parte de Not only. La parte de but also va normal: \"Not only did the node crash, but it also corrupted the cache.\"\n\n4. \"Apenas… cuando / en cuanto…\" ➔ No sooner had… than / Hardly had… when:\n• Truco: las dos van con had. No sooner se cierra con than; Hardly y Scarcely se cierran con when.\n• Ejemplo: \"No sooner had we deployed the patch than the alerts stopped\" = en cuanto desplegamos el parche, las alertas pararon.\n\n5. \"Solo después de… / solo cuando…\" ➔ Only after / Only when…, y la segunda parte en orden de pregunta:\n• Truco: la primera parte va normal (\"Only after reviewing the logs\"). Lo que se adelanta es la segunda: \"did the team find the server\".\n\n6. Nivel avanzado (opcional):\n• Nor / Neither: \"They didn't propose any fix. Nor did they offer help.\" = Tampoco ofrecieron ayuda.\n• Little: \"Little did they know that the backup was corrupted\" = no tenían ni idea de que la copia estaba corrupta.\n• Condiciones sin if (Were…, Had…, Should… al principio): usan el mismo orden de pregunta. Las ves en G27.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) La frase empieza con Under no circumstances, Rarely o Seldom y el hueco va justo después ➔ la opción con verbo pequeño + quién ("can they", "may engineers" o solo "does"). Las trampas copian el orden normal ("we can", "they may").\n2) El hueco está al principio y la frase sigue con "did they…" o "do I…" ➔ una expresión negativa como Under no circumstances o In no way. No sooner y Hardly piden had, no did.\n3) La frase tiene dos partes con than ➔ No sooner had. Con but also ➔ Not only did.\n4) Después de did / does, el verbo va como en el diccionario: "did the team identify", no "identified".',
    examples: [
      {
        en: 'Under no circumstances should support personnel share production credentials across open channels.',
        highlight: 'should support personnel',
        es: 'Bajo ninguna circunstancia el personal de soporte debe compartir credenciales de producción por canales abiertos.',
        explanation: 'Empieza con Under no circumstances ➔ orden de pregunta: should + support personnel + share.'
      },
      {
        en: 'Rarely have we seen a distributed denial-of-service attack of this scale.',
        highlight: 'have we',
        es: 'Rara vez hemos visto un ataque DDoS de esta escala.',
        explanation: '"Rara vez hemos visto" ➔ Rarely have we seen, como en la pregunta "Have we seen…?".'
      },
      {
        en: 'Only after reviewing the packet capture did the team identify the rogue DHCP server.',
        highlight: 'did the team identify',
        es: 'Solo después de revisar la captura de paquetes, el equipo identificó el servidor DHCP no autorizado.',
        explanation: 'La primera parte va normal; la segunda se adelanta con did. Después de did: identify, no identified.'
      },
      {
        en: 'Not only did the node crash, but it also corrupted the cache.',
        highlight: 'Not only did the node',
        es: 'No solo se cayó el nodo, sino que además corrompió la caché.',
        explanation: 'Not only + orden de pregunta (did the node crash). La parte de but also va normal.'
      },
      {
        en: 'No sooner had we deployed the patch than the alerts stopped.',
        highlight: 'No sooner had we / than',
        es: 'En cuanto desplegamos el parche, las alertas pararon.',
        explanation: 'No sooner va con had y se cierra con than (no con when).'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"Under no circumstances users should share passwords.\"\n  ✓ \"Under no circumstances should users share passwords.\"\n  Por qué pasa: en español \"bajo ninguna circunstancia los usuarios deben…\" mantiene el orden normal, y lo copiamos tal cual.\n• ❌ \"Only after reviewing the logs did the team identified the server.\"\n  ✓ \"Only after reviewing the logs did the team identify the server.\"\n  Por qué pasa: queremos dejar claro que es pasado y lo marcamos dos veces. Con did, el pasado ya está dicho.\n• ❌ \"Not only the node crashed, but it also corrupted the cache.\"\n  ✓ \"Not only did the node crash, but it also corrupted the cache.\"\n  Por qué pasa: en español \"no solo\" no cambia nada en la frase. En inglés, al principio pide orden de pregunta.\n• ❌ \"No sooner had we deployed the patch when the alerts stopped.\"\n  ✓ \"No sooner had we deployed the patch than the alerts stopped.\"\n  Por qué pasa: pensamos \"apenas… cuando\" y sale when. No sooner es \"más pronto\", y \"más pronto… que\" se cierra con than.",
    cheatSheetRule: 'Si la frase empieza con Under no circumstances, Rarely, Seldom, Not only, No sooner u Only after, ordénala como una pregunta: should users share, have we seen, did the team find. No sooner… than. Hardly… when.',
    mentalShortcut: '⚡ "Under no circumstances / Rarely…" ➔ orden de pregunta: should users share | "No solo… sino que…" ➔ Not only did… , but also… | "Apenas… cuando…" ➔ No sooner had… than / Hardly had… when | "Solo después de…" ➔ Only after reviewing the logs did the team…'
  },

  G08: {
    topicId: 'G08',
    titleEs: 'Consejos y propuestas (should, had better, how about, can)',
    formula: '',
    summaryEs: "En español aconsejamos con \"deberías\", \"más vale que\", \"deberíamos haber…\" o \"¿y si…?\". En inglés cada uno tiene su forma, y casi todas van seguidas del verbo limpio:\n• \"Deberías actualizar el driver\" ➔ You SHOULD / OUGHT TO update the driver.\n• \"Más vale que parcheemos hoy, o la API seguirá expuesta\" ➔ We HAD BETTER patch it today, or the API will stay exposed.\n• \"Deberíamos haber prestado más atención al plazo\" ➔ We SHOULD HAVE paid more attention to the deadline.\n• \"¿Y si hablamos de esto más tarde?\" ➔ HOW ABOUT discussing this later?\n\n1. \"Deberías…\" (un consejo normal) ➔ should / ought to + verbo limpio:\n• Truco: ought siempre lleva to (ought to run); should nunca (should run).\n• Ojo: should también es \"lo esperable\": \"We should be able to keep the standards with the new linter.\"\n\n2. \"Más vale que…\" (o habrá problemas) ➔ had better + verbo limpio:\n• Truco: sin to: had better patch. En negativo: had better not deploy.\n• Ojo: aunque lleva had, habla de ahora, no del pasado.\n\n3. \"Deberíamos haber…\" (algo que no se hizo) ➔ should have / ought to have + 3.ª forma:\n• 3.ª forma: la que en español sería \"informado, prestado, dado\": reported, paid, given.\n• Truco: en pregunta, ought va delante y el to se queda: \"Ought we to have reported the incident?\"\n\n4. Proponer algo al equipo (\"¿y si…?\", \"¿por qué no…?\") ➔ How about / Shall we / Shouldn't we / Why don't we:\n• Truco: How about va con -ing o con una cosa (How about telling us…?, How about the new procedure?). Shall we, Shouldn't we y Why don't we van con el verbo limpio.\n\n5. \"Puedo / pude / podré\" (ser capaz de algo) ➔ can / could, be able to:\n• Truco: ahora, can. En el pasado, could o was able to; para algo concreto que conseguiste, was able to es lo más seguro. En el futuro, will be able to.\n• Ojo: en negativo, couldn't sirve para todo el pasado: \"We couldn't finish before the deadline.\"\n\n6. Nivel avanzado (opcional):\n• Might want to: la forma más suave de aconsejar. \"You might want to clear the cache first\" = quizá te convenga limpiar la caché antes.\n• Must para una norma: \"Regular backups must be done to avoid data loss.\"",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Detrás del hueco hay un verbo limpio y la opción tiene "ought" ➔ ought to. "Had better to" y "should to" son trampa.\n2) Hay un riesgo si no se hace ("or…") ➔ had better.\n3) Algo que no se hizo ("This rush caused regressions", "The rules are in place for a reason") ➔ should have / ought to have. En pregunta: "Ought we to have reported…?".\n4) Propuesta con -ing detrás ("___ discussing the issue further?") ➔ How about. Con verbo limpio ➔ Shall we, Shouldn\'t we.\n5) Capacidad: futuro ("once we\'ve spent more time") ➔ will be able to; pasado negativo ➔ couldn\'t.',
    examples: [
      {
        en: 'Before merging to the main branch, developers ought to run the automated regression suite.',
        highlight: 'ought to run',
        es: 'Antes de fusionar con la rama principal, los desarrolladores deberían ejecutar las pruebas de regresión automáticas.',
        explanation: '"Deberían" ➔ ought to + run. Ought siempre con to.'
      },
      {
        en: 'We had better patch the vulnerability tonight, or the production API will remain exposed.',
        highlight: 'had better patch',
        es: 'Más vale que parcheemos la vulnerabilidad esta noche, o la API de producción seguirá expuesta.',
        explanation: 'Hay un riesgo (or…) ➔ had better + patch, sin to.'
      },
      {
        en: 'We should have paid more attention to the deadline. This rush caused multiple regressions.',
        highlight: 'should have paid',
        es: 'Deberíamos haber prestado más atención al plazo. Estas prisas causaron varias regresiones.',
        explanation: 'Algo que no se hizo ➔ should have + paid.'
      },
      {
        en: 'How about telling us about your experience with data classification?',
        highlight: 'How about telling',
        es: '¿Por qué no nos cuentas tu experiencia con la clasificación de datos?',
        explanation: 'Proponer algo ➔ How about + -ing.'
      },
      {
        en: 'We couldn’t finish before the deadline because the integration took longer than planned.',
        highlight: 'couldn’t finish',
        es: 'No pudimos terminar antes del plazo porque la integración llevó más tiempo del previsto.',
        explanation: '"No pudimos" ➔ couldn’t + finish.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"You had better to patch the server tonight.\"\n  ✓ \"You had better patch the server tonight.\"\n  Por qué pasa: \"más vale que\" pide algo detrás, y ponemos to. Después de had better va el verbo limpio.\n• ❌ \"Developers ought run the tests before merging.\"\n  ✓ \"Developers ought to run the tests before merging.\"\n  Por qué pasa: ought significa lo mismo que should, y lo usamos igual. Pero ought siempre lleva to.\n• ❌ \"Ought we reported the incident sooner?\"\n  ✓ \"Ought we to have reported the incident sooner?\"\n  Por qué pasa: al preguntar, movemos ought y se nos pierde el resto. Ought we + to have + 3.ª forma.\n• ❌ \"How about to tell us about your experience?\"\n  ✓ \"How about telling us about your experience?\"\n  Por qué pasa: \"¿qué tal contarnos…?\" lleva el verbo tal cual en español. Después de How about va -ing.",
    cheatSheetRule: 'Consejo ➔ should / ought to + verbo (ought siempre con to). Riesgo ➔ had better (not) + verbo, sin to. No se hizo ➔ should have / ought to have + 3.ª forma. Propuesta ➔ How about + -ing, Shall we / Shouldn\'t we + verbo. Capacidad ➔ can, could / was able to, will be able to.',
    mentalShortcut: '⚡ "deberías" ➔ should / ought to + verbo | "más vale que" ➔ had better + verbo (sin to) | "deberíamos haber…" ➔ should have + reported | "¿y si…?" ➔ How about + -ing / Shall we + verbo'
  },

  // ==========================================
  // MODULE 4: CUSTOMER SUPPORT
  // ==========================================
  G09: {
    topicId: 'G09',
    titleEs: 'Peticiones educadas ("¿te importaría…?", "¿podrías…?")',
    formula: '',
    summaryEs: "En español suavizamos con \"¿te importaría…?\", \"¿podrías…?\" o \"te agradecería que…\". En inglés cada fórmula lleva detrás una forma fija del verbo, y es justo lo que hay que mirar:\n• \"¿Te importaría reiniciar el router?\" ➔ Would you mind RESTARTING the router?\n• \"¿Podrías revisar el cable, por favor?\" ➔ Could you KINDLY CHECK the cable?\n• \"Te agradecería que adjuntaras los logs\" ➔ I would appreciate IT if you could attach the logs.\n• \"Además, la base de datos no responde\" ➔ FURTHERMORE, the database service is unresponsive.\n\n1. \"¿Te importaría…?\" ➔ Would you mind + verbo con -ing:\n• Truco: mind siempre va con -ing: Would you mind checking, Would you mind sharing your screen.\n• Ojo: \"Would you mind to check\" y \"Do you mind to…\" son errores.\n\n2. \"¿Podrías…? / ¿Podría…?\" ➔ Could you (possibly / kindly) + verbo limpio:\n• Truco: después de could, el verbo va limpio: Could you check. Possibly y kindly van entre you y el verbo: Could you kindly tell me…\n\n3. \"Te agradecería que…\" ➔ I would appreciate it if you could + verbo limpio:\n• Truco: no olvides el it: appreciate it if you could.\n\n4. Palabras para suavizar, meter prisa o añadir algo ➔ kindly, urgently, furthermore:\n• Kindly: \"por favor, ten la amabilidad\". Va delante del verbo: \"Kindly update it before restarting.\"\n• Urgently: \"urgentemente\". Normalmente va al final: \"Can you look into this issue urgently?\"\n• Furthermore: \"además\". Empieza una frase nueva y lleva coma: \"…this month. Furthermore, customer satisfaction must improve.\"\n\n5. Nivel avanzado (opcional):\n• \"¿Te importa si…?\" ➔ Would you mind if I + pasado: \"Would you mind if I shared my screen?\"\n• Could you please… funciona igual que Could you kindly…",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Detrás del hueco hay un -ing ("___ resolving the security flaws?") ➔ Would you mind. "Do you mind to", "Could you please" o "Would you like" son trampa.\n2) "Could you ___ tell me…" o "if you could ___ let me know" ➔ kindly.\n3) Una frase que añade otro problema ➔ punto + "Furthermore," + frase. "…, furthermore …" con solo una coma, o Kindly / Urgently en ese sitio, son trampa.\n4) "Please can you look into this issue ___?" ➔ urgently.',
    examples: [
      {
        en: 'During the escalation call, the engineer asked: "Would you mind refreshing the gateway interface status?"',
        highlight: 'Would you mind refreshing',
        es: 'Durante la llamada de escalado, el ingeniero preguntó: "¿Te importaría actualizar el estado de la interfaz del gateway?"',
        explanation: '"¿Te importaría actualizar?" ➔ Would you mind + refreshing.'
      },
      {
        en: 'Could you possibly verify whether the optical link indicator on the switch is lit?',
        highlight: 'Could you possibly verify',
        es: '¿Podrías comprobar si el indicador del enlace óptico del switch está encendido?',
        explanation: 'Después de could (y possibly), el verbo limpio: verify.'
      },
      {
        en: 'I would appreciate it if you could kindly attach the diagnostic traceroute logs to the ticket.',
        highlight: 'appreciate it',
        es: 'Te agradecería que adjuntaras al ticket los logs del traceroute de diagnóstico.',
        explanation: '"Te agradecería que…" ➔ I would appreciate it if you could… Con it.'
      },
      {
        en: 'The application is not working. Furthermore, the database service is unresponsive.',
        highlight: 'Furthermore',
        es: 'La aplicación no funciona. Además, el servicio de base de datos no responde.',
        explanation: '"Además" para añadir otro problema ➔ punto + Furthermore + coma.'
      },
      {
        en: 'Please can you look into this issue urgently?',
        highlight: 'urgently',
        es: '¿Puedes revisar este problema urgentemente, por favor?',
        explanation: 'Urgently va al final de la petición.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"Would you mind to check the gateway?\"\n  ✓ \"Would you mind checking the gateway?\"\n  Por qué pasa: \"¿te importaría revisar?\" lleva \"revisar\" sin más, y buscamos un to. Mind va siempre con -ing.\n• ❌ \"Could you possibly checking the cable?\"\n  ✓ \"Could you possibly check the cable?\"\n  Por qué pasa: mezclamos las dos fórmulas. El -ing es solo para Would you mind.\n• ❌ \"I would appreciate if you could attach the logs.\"\n  ✓ \"I would appreciate it if you could attach the logs.\"\n  Por qué pasa: \"te agradecería que\" no tiene ninguna palabra para ese it. En inglés hace falta.\n• ❌ \"We need more closed cases, furthermore customer satisfaction must improve.\"\n  ✓ \"We need more closed cases. Furthermore, customer satisfaction must improve.\"\n  Por qué pasa: en español \"…, además…\" va bien con una coma. Furthermore abre una frase nueva.",
    cheatSheetRule: 'Would you mind + -ing. Could you (kindly / possibly) + verbo limpio. I would appreciate it if you could + verbo limpio. Kindly delante del verbo, urgently al final, Furthermore al principio de una frase nueva con coma.',
    mentalShortcut: '⚡ "¿te importaría…?" ➔ Would you mind + checking | "¿podrías…?" ➔ Could you kindly + check | "te agradecería que…" ➔ I would appreciate it if you could… | "además" ➔ . Furthermore, …'
  },

  G26: {
    topicId: 'G26',
    titleEs: 'Expresiones fijas del trabajo en IT (idioms)',
    formula: '',
    summaryEs: "Los idioms son frases hechas, como nuestro \"pan comido\" o \"fue peor el remedio que la enfermedad\". No se traducen palabra por palabra: se aprenden enteras y no se les cambia ni una palabra:\n• \"Es pan comido\" ➔ THERE'S NOTHING TO IT.\n• \"Fue peor el remedio que la enfermedad\" ➔ It DID MORE HARM THAN GOOD.\n• \"No damos con la causa\" ➔ We can't PUT OUR FINGER ON the cause.\n• \"Mantenme al tanto\" ➔ KEEP ME POSTED.\n\n1. Fácil o difícil ➔ there's nothing to it / hard to crack:\n• There's nothing to it: es facilísimo, pan comido.\n• Hard to crack: difícil de resolver (\"Some technical cases can be hard to crack\").\n\n2. Valorar un resultado ➔ did more harm than good / on a roll / by leaps and bounds:\n• Did more harm than good: hizo más mal que bien. Siempre con do (did, has done), nunca make.\n• On a roll: en racha (\"We are really on a roll!\").\n• By leaps and bounds: a pasos agigantados.\n\n3. Esfuerzo y visión ➔ go the extra mile / in the long run / bite the bullet:\n• Go the extra mile: hacer más de lo que te piden (\"Thank you for going the extra mile today\").\n• In the long run: a largo plazo.\n• Bite the bullet: aceptar algo difícil pero necesario (programar una parada, por ejemplo).\n\n4. Problemas y causas ➔ put one's finger on / the root of the problem / iron out:\n• Put one's finger on: dar con la causa exacta (\"We can't put our finger on the bottleneck\").\n• The root of the problem: la causa de fondo.\n• Iron out: resolver los detalles que quedan.\n\n5. Coordinarse con el equipo ➔ keep me posted / keep in mind / on the same page / touch base / ballpark figure / last but not least:\n• Keep me posted: mantenme al tanto. Keep in mind: ten en cuenta.\n• On the same page: alineados, de acuerdo. Touch base: hablar un momento para ponerse al día.\n• Ballpark figure: una cifra aproximada. Last but not least: por último, pero no menos importante.\n\n6. Nivel avanzado (opcional):\n• There's no harm in + -ing: no se pierde nada por… (\"There's no harm in checking the logs\").\n• Jump the gun: precipitarse. Sweep under the carpet: esconder un problema.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Te dan las palabras desordenadas ➔ busca el bloque fijo: on a roll, go the extra mile, keep in mind, in the long run, hard to crack, last but not least.\n2) Algo que salió fácil ("They solved the issue in no time") ➔ there was nothing to it. Algo que empeoró ("the problem now seems worse") ➔ did more harm than good.\n3) Las trampas cambian una palabra del bloque: "made more harm", "did harm more than good", "there was no thing to it", "keep me post", "in the same page".',
    examples: [
      {
        en: 'I should be able to fix that for you right away. There’s nothing to it.',
        highlight: 'There’s nothing to it',
        es: 'Te lo puedo arreglar ahora mismo. Es pan comido.',
        explanation: '"Es pan comido" ➔ There’s nothing to it.'
      },
      {
        en: 'In the end, the configuration changes did more harm than good. We wasted a lot of time.',
        highlight: 'did more harm than good',
        es: 'Al final, los cambios de configuración fueron peor el remedio que la enfermedad. Perdimos mucho tiempo.',
        explanation: '"Hizo más mal que bien" ➔ did more harm than good. Con do, nunca make.'
      },
      {
        en: 'The latency keeps fluctuating, but the infrastructure team cannot put their finger on the exact bottleneck.',
        highlight: 'put their finger on',
        es: 'La latencia sigue variando, pero el equipo de infraestructura no da con el cuello de botella exacto.',
        explanation: '"No dar con la causa" ➔ cannot put their finger on.'
      },
      {
        en: 'Thank you all for going the extra mile today during the critical platform outage.',
        highlight: 'going the extra mile',
        es: 'Gracias a todos por hacer más de lo que tocaba hoy durante la caída crítica de la plataforma.',
        explanation: '"Hacer más de lo que te piden" ➔ go the extra mile.'
      },
      {
        en: 'Let’s review the rollback runbook so both shifts are on the same page, and keep me posted on any changes.',
        highlight: 'on the same page / keep me posted',
        es: 'Repasemos el runbook de reversión para que los dos turnos estén alineados, y mantenme al tanto de cualquier cambio.',
        explanation: '"Alineados" ➔ on the same page. "Mantenme al tanto" ➔ keep me posted.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"The changes made more harm than good.\"\n  ✓ \"The changes did more harm than good.\"\n  Por qué pasa: en español \"hacer daño\" y \"hacer bien\" usan el mismo \"hacer\", y elegimos make. En esta frase hecha es do.\n• ❌ \"We can’t put the finger in the problem.\"\n  ✓ \"We can’t put our finger on the problem.\"\n  Por qué pasa: pensamos en \"poner el dedo en la llaga\". La frase inglesa es put our finger on, y significa dar con la causa.\n• ❌ \"Please keep me post about the incident.\"\n  ✓ \"Please keep me posted about the incident.\"\n  Por qué pasa: posted parece un error y lo \"corregimos\". La frase hecha es keep me posted.\n• ❌ \"We need to be in the same page before the demo.\"\n  ✓ \"We need to be on the same page before the demo.\"\n  Por qué pasa: \"en la misma página\" lleva \"en\", y \"en\" suele ser in. En esta frase hecha es on.",
    cheatSheetRule: 'Frases fijas, sin cambiar palabras: there\'s nothing to it (pan comido), did more harm than good, on a roll, go the extra mile, in the long run, hard to crack, last but not least, put one\'s finger on, keep me posted, keep in mind, on the same page, touch base, ballpark figure, bite the bullet, iron out.',
    mentalShortcut: '⚡ "pan comido" ➔ there\'s nothing to it | "peor el remedio que la enfermedad" ➔ did more harm than good | "en racha" ➔ on a roll | "hacer más de lo que toca" ➔ go the extra mile | "no damos con la causa" ➔ can\'t put our finger on it'
  },

  // ==========================================
  // MODULE 5: SECURITY ENGINEER (GOALS)
  // ==========================================
  G10: {
    topicId: 'G10',
    titleEs: 'Instrucciones de runbook ("reinicia", "no apagues", "necesita parchearse")',
    formula: '',
    summaryEs: "En un runbook en español escribimos \"Reiniciar el servicio\" o \"Se debe verificar…\". En inglés las instrucciones empiezan directamente con el verbo, tal como sale en el diccionario:\n• \"Reiniciar el servicio\" ➔ RESTART the service.\n• \"No reiniciar la base de datos durante la migración\" ➔ DO NOT restart the database during the migration.\n• \"Asegúrate de que el puerto 443 está abierto\" ➔ MAKE SURE port 443 is open.\n• \"El certificado necesita renovarse\" ➔ The certificate NEEDS RENEWING.\n\n1. Un paso del procedimiento (\"Reiniciar\", \"Verifica\", \"Aísla\") ➔ el verbo limpio al principio:\n• Truco: sin to, sin -ing y sin -s: Isolate, Verify, Reload. Aunque delante haya \"Step 1:\", \"CAUTION:\" o \"Before deploying the hotfix,\", el verbo va igual de limpio.\n• Ojo: con please también: \"Please remember to attach the HAR file.\"\n\n2. \"No… / nunca…\" ➔ Do not / Never + verbo limpio:\n• Truco: \"No reiniciar\" ➔ Do not restart, nunca \"Not restart\". Never va directo: Never store, no Never to store.\n\n3. Frases hechas de instrucciones ➔ Make sure, Keep in mind that, Keep it simple, Keep me posted:\n• Truco: tradúcelas como un bloque. Make sure = asegúrate de que. Keep in mind that = ten en cuenta que. Keep it simple = hazlo sencillo. Keep me posted = mantenme al tanto.\n• Ojo: Keep you posted es al revés (\"te mantengo al tanto\"): lo dice quien va a informar.\n\n4. \"Necesita repararse / actualizarse\" (una máquina) ➔ needs + -ing:\n• Truco: needs patching = needs to be patched = hay que parchearlo.\n• Ojo: \"The router needs to update\" significaría que el router tiene que actualizar algo él mismo.\n\n5. Nivel avanzado (opcional):\n• Orden a todos o a cualquiera: \"Everyone attend the meeting tomorrow\", \"Someone answer the phone!\". El verbo sigue limpio aunque haya alguien delante (attend, no attends).\n• Don't o Do not: los dos son correctos. En runbooks y avisos se usa más Do not.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) El hueco abre una instrucción ("Step 1: ___ the container", "___ the diagnostic script") ➔ el verbo limpio (Isolate, Execute). To isolate, Isolating o Executes son trampa.\n2) Instrucción en negativo ➔ Do not + verbo o Never + verbo. "Not restart", "Never to restart" o "No restarting" son trampa.\n3) Una máquina + needs + hueco ➔ -ing (patching, updating, rebuilding). "to patch", "patched" o "patch" son trampa.\n4) Frases hechas: "___ that we must block…" ➔ Keep in mind. "___ on any progress you make" ➔ Keep me posted. "Make sure to ___ when explaining…" ➔ keep it simple.',
    examples: [
      {
        en: 'Isolate the compromised container from the production bridge network immediately.',
        highlight: 'Isolate',
        es: 'Aísla de inmediato el contenedor comprometido de la red de producción.',
        explanation: 'Un paso del runbook ➔ el verbo limpio al principio: Isolate.'
      },
      {
        en: 'Do not terminate the background migration daemon while replication is in progress.',
        highlight: 'Do not terminate',
        es: 'No detengas el proceso de migración en segundo plano mientras la replicación esté en curso.',
        explanation: '"No detener" ➔ Do not terminate, nunca "Not terminate".'
      },
      {
        en: 'Make sure that port 443 is open on the security group before testing the webhook.',
        highlight: 'Make sure',
        es: 'Asegúrate de que el puerto 443 está abierto en el grupo de seguridad antes de probar el webhook.',
        explanation: '"Asegúrate de que" ➔ Make sure, sin -ing.'
      },
      {
        en: 'Keep in mind that modifying firewall rules during business hours will terminate live sessions.',
        highlight: 'Keep in mind that',
        es: 'Ten en cuenta que modificar las reglas del firewall en horario laboral cortará las sesiones activas.',
        explanation: '"Ten en cuenta que" ➔ Keep in mind that + una frase completa.'
      },
      {
        en: 'The core database server is suffering from memory leaks and urgently needs patching before the billing run.',
        highlight: 'needs patching',
        es: 'El servidor de base de datos principal tiene fugas de memoria y hay que parchearlo urgentemente antes de la facturación.',
        explanation: 'Una máquina que necesita que alguien la arregle ➔ needs patching (= needs to be patched).'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"The router needs to update.\"\n  ✓ \"The router needs updating.\" / \"The router needs to be updated.\"\n  Por qué pasa: \"necesita actualizarse\" lleva un \"-se\" que en inglés no se ve, y sale needs to update. Pero el router no actualiza nada: lo actualizan a él.\n• ❌ \"Not restart the service during backups.\"\n  ✓ \"Do not restart the service during backups.\"\n  Por qué pasa: en español basta con \"no reiniciar\". En inglés la orden negativa necesita Do not.\n• ❌ \"Please to verify the logs.\"\n  ✓ \"Please verify the logs.\"\n  Por qué pasa: \"favor de verificar\" nos pide un to. Después de please va el verbo limpio.\n• ❌ \"Making sure that port 443 is open.\"\n  ✓ \"Make sure that port 443 is open.\"\n  Por qué pasa: en los manuales en español escribimos \"Asegurarse de que…\" y buscamos una forma parecida. En inglés la instrucción es Make sure.",
    cheatSheetRule: 'Un paso ➔ verbo limpio al principio (Isolate, Verify). No ➔ Do not / Never + verbo. Asegúrate ➔ Make sure. Ten en cuenta ➔ Keep in mind that. Una máquina que necesita arreglo ➔ needs + -ing (needs patching).',
    mentalShortcut: '⚡ "reiniciar / verifica…" ➔ Restart / Verify (verbo limpio al principio) | "no…" ➔ Do not / Never + verbo (nunca Not restart) | "asegúrate / ten en cuenta" ➔ Make sure / Keep in mind that | "necesita repararse" ➔ needs repairing (= needs to be repaired)'
  },

  G11: {
    topicId: 'G11',
    titleEs: 'Seguro, supuestamente, probablemente (definitely, supposedly, likely, surely)',
    formula: '',
    summaryEs: "En un informe o un ticket no es lo mismo \"seguro\" que \"supuestamente\" o \"probablemente\". En inglés una sola palabra marca lo seguro que estás:\n• \"Seguro que bloquearán el tráfico sospechoso\" ➔ They will DEFINITELY block any suspicious traffic.\n• \"Supuestamente la app es segura, pero no me convence\" ➔ SUPPOSEDLY this app is safe, but I'm not convinced.\n• \"Lo más probable es que envíen el resumen esta semana\" ➔ It is most LIKELY that they will send the summary this week.\n• \"¿No comprobaste las credenciales de quien llamaba?\" ➔ SURELY you verified the caller's credentials?\n\n1. \"Seguro / sin duda\" ➔ definitely, certainly:\n• Truco: van delante del verbo principal: will definitely block, should definitely be careful, I am certainly not going to download it.\n\n2. \"Supuestamente\" (lo dicen, pero tengo dudas) ➔ supposedly:\n• Truco: suele ir con una duda al lado (\"but I'm not convinced\") o al final, con ironía: \"They say it won't happen again, supposedly.\"\n\n3. \"Probablemente / lo más probable\" ➔ likely, presumably:\n• Truco: It is most likely that… (lo más probable), It is more likely that… (es más probable que). The attacker presumably entered through the VPN (todo apunta a eso).\n• Ojo: con most y more va likely. \"More probably that\" es error.\n\n4. \"¿No me digas que…?\" / \"Es evidente que…\" ➔ Surely / Obviously:\n• Truco: Surely expresa que no te lo crees o que esperas que sí: \"Surely you don't think I made those purchases?\" Obviously = está claro para todos: \"There was obviously a need to update the policy.\"\n• Ojo: surely no es \"seguramente\". \"Seguramente\" (probablemente) es likely o probably.\n\n5. Opinión o teoría ➔ arguably, conceivably, inevitably:\n• Arguably: se puede defender que… Va con \"the most / the best\": \"PostgreSQL is arguably the most versatile database.\"\n• Conceivably: en teoría es posible: \"The team could conceivably finish before the window closes.\"\n• Inevitably: pasará sí o sí: \"Without regression tests, errors will inevitably reach production.\"\n\n6. Nivel avanzado (opcional):\n• Presumably (presumiblemente) no tiene nada que ver con presumptuous (presuntuoso).\n• Arguably no significa \"discutible\": significa que hay buenos argumentos para afirmarlo.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) La frase dice "but I am not completely convinced" o termina con ironía ➔ supposedly.\n2) Algo confirmado o una decisión firme ("They confirmed today…", "I am ___ not going to download…") ➔ definitely o certainly.\n3) "It is most ___ that" o "It is more ___ that" ➔ likely.\n4) Pregunta de incredulidad ("___ you thought to verify the caller?") ➔ Surely. Algo evidente para todos ➔ Obviously.\n5) Delante de "the most…" ➔ arguably. "will ___ slip into production" sin pruebas ➔ inevitably.',
    examples: [
      {
        en: 'Supposedly this application is safe to download, but I am not completely convinced.',
        highlight: 'Supposedly',
        es: 'Supuestamente esta aplicación es segura, pero no estoy del todo convencido.',
        explanation: '"Supuestamente" + una duda al lado ➔ Supposedly.'
      },
      {
        en: 'They confirmed today that they will definitely block any suspicious traffic.',
        highlight: 'definitely',
        es: 'Hoy confirmaron que sin duda bloquearán cualquier tráfico sospechoso.',
        explanation: 'Algo confirmado ➔ will definitely block.'
      },
      {
        en: 'It is most likely that they will distribute a summary of the security audit before the end of the sprint.',
        highlight: 'most likely',
        es: 'Lo más probable es que repartan un resumen de la auditoría de seguridad antes de que acabe el sprint.',
        explanation: '"Lo más probable" ➔ It is most likely that.'
      },
      {
        en: 'Surely you thought to verify the caller’s credentials before authorizing the transfer?',
        highlight: 'Surely',
        es: '¿No me digas que no comprobaste las credenciales de quien llamaba antes de autorizar la transferencia?',
        explanation: 'Incredulidad ➔ Surely. Ojo: no significa "seguramente".'
      },
      {
        en: 'PostgreSQL is arguably the most versatile relational database for handling both structured and JSON data.',
        highlight: 'arguably',
        es: 'Se puede decir que PostgreSQL es la base de datos relacional más versátil para datos estructurados y JSON.',
        explanation: 'Delante de "the most…" ➔ arguably (hay buenos argumentos).'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"Surely the server will fail again.\" (para decir \"seguramente\")\n  ✓ \"The server will likely / probably fail again.\"\n  Por qué pasa: surely se parece a \"seguramente\". Pero surely expresa incredulidad o insistencia, no probabilidad.\n• ❌ \"The attack was arguably caused by a phishing email.\" (para decir que es probable)\n  ✓ \"The attack was presumably caused by a phishing email.\"\n  Por qué pasa: arguably suena a \"argumento\" y lo usamos para cualquier deducción. Sirve para defender una opinión, no para la probabilidad.\n• ❌ \"It is more probably that we will buy a template.\"\n  ✓ \"It is more likely that we will buy a template.\"\n  Por qué pasa: \"es más probable\" nos lleva a probably. Con it is more / most… that, va likely.\n• ❌ \"The server presumptuously failed because of the update.\"\n  ✓ \"The server presumably failed because of the update.\"\n  Por qué pasa: las dos palabras se parecen mucho. Presumably es \"presumiblemente\"; presumptuous es \"presuntuoso\".",
    cheatSheetRule: 'Seguro ➔ definitely / certainly. Lo dicen pero dudo ➔ supposedly. Probable ➔ likely (It is most / more likely that), presumably. Incredulidad ➔ Surely (no es "seguramente"). Evidente ➔ obviously. Defendible ➔ arguably. Teórico ➔ conceivably. Sí o sí ➔ inevitably.',
    mentalShortcut: '⚡ "seguro / sin duda" ➔ definitely, certainly | "supuestamente (no me lo creo)" ➔ supposedly | "lo más probable" ➔ It is most likely that | "¿no me digas que…?" ➔ Surely (no es "seguramente")'
  },

  // ==========================================
  // MODULE 6: SECURITY ENGINEER (DISCUSSION)
  // ==========================================
  G12: {
    topicId: 'G12',
    titleEs: '"Para el viernes habremos…" y "estaba a punto de…"',
    formula: '',
    summaryEs: "En español decimos \"para mañana habremos enviado…\", \"el viernes hará un mes que…\" y \"estaba a punto de…\". En inglés cada idea tiene su forma fija:\n• \"Para mañana habremos enviado el borrador\" ➔ By tomorrow we WILL HAVE SENT the draft.\n• \"La semana que viene hará un mes que probamos estas soluciones\" ➔ By next week we WILL HAVE BEEN TESTING these solutions for one month.\n• \"Estaba a punto de desinstalarlo cuando entraste\" ➔ I WAS ABOUT TO uninstall it when you came in.\n• \"Estaba a punto de descargar la app\" ➔ I WAS ON THE POINT OF DOWNLOADING the app.\n\n1. \"Para (una fecha) habremos…\" ➔ will have + 3.ª forma:\n• 3.ª forma: la que en español sería \"enviado, migrado, ejecutado\": sent, migrated, run.\n• Truco: suele llevar delante by, before o by the time + una fecha o un momento.\n• Ojo: después de by the time, el momento va en presente: \"By the time the audit starts\", no \"will start\".\n\n2. \"Para (una fecha) llevaremos X tiempo haciendo…\" ➔ will have been + -ing:\n• Truco: si hay una duración (for one month, all week, for three months), va will have been + -ing: \"We will have been testing them for one month by next week.\"\n\n3. \"Estaba a punto de…\" ➔ was / were about to + verbo limpio, o was / were on the point of + -ing:\n• Truco: las dos dicen lo mismo; cambia lo que va detrás. About to + verbo limpio (about to uninstall). On the point of + -ing (on the point of downloading).\n• Ojo: was con I / he / she / it; were con we / you / they.\n\n4. \"Al borde de…\" (a punto de que pase algo malo) ➔ on the verge of + -ing:\n• Ejemplo: \"The cluster was on the verge of crashing\" = el clúster estaba al borde de caerse.\n\n5. Nivel avanzado (opcional):\n• Cuando la cosa recibe la acción: \"The tests were about to be run\", \"The system was on the point of being implemented\", \"The information will have been compromised.\"\n• Will have ran es error: la 3.ª forma de run es run.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) By, before o by the time + un momento futuro ➔ will have + 3.ª forma ("will have sent out", "will have run"). "Will have ran" o "will send" son trampa.\n2) Hay una duración (for one month, all week) además del by ➔ will have been + -ing.\n3) "was about ___" ➔ to + verbo limpio. "was on the point of ___" ➔ -ing.\n4) Si el hueco va antes de un -ing ("___ making these recommendations") ➔ was on the point of. Si va antes de un verbo limpio ("___ start running") ➔ was about to. Was con I / he / she; were con we / they.',
    examples: [
      {
        en: 'By next Friday, the infrastructure squad will have migrated all legacy VM instances to containers.',
        highlight: 'will have migrated',
        es: 'Para el viernes que viene, el equipo de infraestructura habrá migrado todas las máquinas virtuales antiguas a contenedores.',
        explanation: '"Para el viernes habrá migrado" ➔ by next Friday + will have migrated.'
      },
      {
        en: 'We will have been testing these security solutions for one month by next week.',
        highlight: 'will have been testing',
        es: 'La semana que viene hará un mes que probamos estas soluciones de seguridad.',
        explanation: 'Hay una duración (for one month) ➔ will have been testing.'
      },
      {
        en: 'I was about to uninstall the spyware when you came in.',
        highlight: 'was about to uninstall',
        es: 'Estaba a punto de desinstalar el spyware cuando entraste.',
        explanation: 'About to + verbo limpio (uninstall).'
      },
      {
        en: 'I was on the point of downloading the app, but then I realized it was an untrusted APK.',
        highlight: 'was on the point of downloading',
        es: 'Estaba a punto de descargar la app, pero me di cuenta de que era un APK no fiable.',
        explanation: 'On the point of + -ing (downloading).'
      },
      {
        en: 'The database cluster was on the verge of crashing when the throttling script stabilized the query queues.',
        highlight: 'on the verge of crashing',
        es: 'El clúster de base de datos estaba al borde de caerse cuando el script de limitación estabilizó las colas.',
        explanation: '"Al borde de caerse" ➔ on the verge of + crashing.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"By 07:00 UTC the team will complete the replication.\"\n  ✓ \"By 07:00 UTC the team will have completed the replication.\"\n  Por qué pasa: en español también decimos \"para las 7 terminamos\". En inglés, con by, se marca que ya estará hecho: will have completed.\n• ❌ \"He was on the point of reboot the switch.\"\n  ✓ \"He was on the point of rebooting the switch.\"\n  Por qué pasa: \"a punto de reiniciar\" lleva el verbo tal cual en español. Después de of va -ing.\n• ❌ \"I was about uninstalling the spyware.\"\n  ✓ \"I was about to uninstall the spyware.\"\n  Por qué pasa: mezclamos las dos fórmulas de \"a punto de\". About va con to y el verbo limpio.\n• ❌ \"By the time the engineers will arrive, the job will have finished.\"\n  ✓ \"By the time the engineers arrive, the job will have finished.\"\n  Por qué pasa: en español \"para cuando lleguen\" no es presente normal, y buscamos un futuro. Después de by the time va presente.",
    cheatSheetRule: 'By / by the time + momento futuro ➔ will have + 3.ª forma (will have sent). Con duración ➔ will have been + -ing. "Estaba a punto de" ➔ was about to + verbo limpio, o was on the point of + -ing. "Al borde de" ➔ on the verge of + -ing.',
    mentalShortcut: '⚡ "para (fecha) habremos…" ➔ by Friday we will have sent | "hará un mes que…" ➔ will have been testing for one month | "estaba a punto de" ➔ was about to uninstall / was on the point of downloading | "al borde de" ➔ on the verge of crashing'
  },

  // ==========================================
  // ADVANCED & GENERAL TOPICS
  // ==========================================
  // ==========================================
  // ENGLISH FOR IT 2: MODULE 1 (SECTION 1)
  // ==========================================
  // ==========================================
  // ENGLISH FOR IT 2: MODULE 1
  // ==========================================
  G13: {
    topicId: 'G13',
    titleEs: '"Si yo fuera tú" y "recomiendo que siga" (subjuntivo en inglés)',
    formula: '',
    summaryEs: "En español decimos \"si yo fuera\", \"que siga\", \"que sea\". En inglés esas frases tienen dos formas fijas, y las dos son más fáciles que en español:\n• \"Si yo fuera tú, …\" ➔ If I WERE you, …\n• \"Si dependiera de mí, …\" ➔ If it WERE up to me, …\n• \"Recomendamos que él siga la guía\" ➔ We recommend that he FOLLOW the guide.\n• \"Exigieron que estuviéramos disponibles\" ➔ They demanded that we BE available.\nEn las preguntas del banco, a estas frases las llaman subjunctive (subjuntivo).\n\n1. \"Si yo fuera / si dependiera de mí…\" (algo imaginario) ➔ were, con todos:\n• Truco: aunque sea I, he, she o it, va were: If I were you, If it were up to me. Nunca was.\n\n2. \"Recomiendo / exijo / insisto en que…\" ➔ that + quién + el verbo tal como sale en el diccionario:\n• Lo activan: recommend, suggest, demand, insist, request, require, mandate.\n• Truco: \"que él siga\" ➔ that he follow, sin -s aunque sea he o she. \"Que estemos / que sea\" ➔ be, nunca is, are ni were.\n• Ojo: no cambia aunque la primera parte esté en pasado: \"They demanded that we be available.\"\n\n3. \"Es imprescindible / es vital que…\" ➔ It is imperative / vital / essential that + lo mismo:\n• Truco: funciona igual que la situación anterior. \"Que se guarde\" ➔ be kept, no is kept.\n• Ejemplo: \"It is imperative that the root key be kept offline\" = es imprescindible que la clave raíz se guarde offline.\n\n4. \"Que no…\" ➔ not + el verbo del diccionario, sin don't ni doesn't:\n• Ejemplo: \"We insist that old protocols not be used\" = insistimos en que no se usen protocolos antiguos.\n\n5. ¿Es subjuntivo o no? (cuando te piden clasificar la frase):\n• Sí lo es: un were imaginario (\"If I were you\") o el verbo sin -s después de recommend / suggest / demand + that (\"that he replace\").\n• No lo es: frases con must, should o need, o frases normales (\"We must restrict the VPN\", \"we should consider OSPF\", \"It's too risky to…\").\n\n6. Nivel avanzado (opcional):\n• Con should: \"We recommend that he should follow the guide\" también es correcto, sobre todo en inglés británico. Significa lo mismo.\n• Sin that: \"I suggest she be careful\" = sugiero que tenga cuidado. El that se puede omitir.\n• Was en vez de were: en conversación se oye \"If I was you\". En textos formales, usa were.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Hay recommend, suggest, demand, insist o mandate + that antes del hueco ➔ el verbo tal como sale en el diccionario ("implement", "be"). Las trampas: "implements", "to implement", "are", "will implement".\n2) "It is imperative / vital that…" + hueco ➔ "be kept", "be updated". Las trampas: "is kept", "was kept", "will be kept".\n3) "If I ___ you" ➔ were. "If it ___ me" ➔ were up to (falta el "up to").\n4) Te piden clasificar la frase ➔ subjunctive solo si ves un were imaginario o el verbo sin -s tras recommend / suggest / demand + that. Con must, should o need: not subjunctive.',
    examples: [
      {
        en: 'If it were up to me, I would implement a key-based method of authentication.',
        highlight: 'If it were up to me',
        es: 'Si dependiera de mí, implementaría un método de autenticación basado en claves.',
        explanation: '"Si dependiera de mí" ➔ If it were up to me. Con it también va were.'
      },
      {
        en: 'We strongly recommend that he follow the code guidelines.',
        highlight: 'he follow',
        es: 'Le recomendamos encarecidamente que siga las directrices de código.',
        explanation: '"Que siga" tras recommend that ➔ he follow, sin -s.'
      },
      {
        en: 'They demanded that we be available for twenty-four-seven on-call support.',
        highlight: 'that we be',
        es: 'Exigieron que estuviéramos disponibles para guardias 24/7.',
        explanation: '"Que estuviéramos" ➔ that we be. No cambia aunque demanded esté en pasado.'
      },
      {
        en: 'We insist that proprietary networking protocols not be used.',
        highlight: 'not be used',
        es: 'Insistimos en que no se usen protocolos de red propietarios.',
        explanation: '"Que no se usen" ➔ not be used, sin don\'t ni are not.'
      },
      {
        en: 'It is imperative that the root certificate key be kept in an offline hardware security module.',
        highlight: 'be kept',
        es: 'Es imprescindible que la clave del certificado raíz se guarde en un módulo de seguridad de hardware offline.',
        explanation: '"Es imprescindible que se guarde" ➔ It is imperative that… be kept, no is kept.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"We recommend that he follows the code guidelines.\"\n  ✓ \"We recommend that he follow the code guidelines.\"\n  Por qué pasa: nos han repetido tanto \"he follows\" con -s que lo ponemos en automático. Después de recommend that, va sin -s.\n• ❌ \"If it was up to me, I would implement key-based authentication.\"\n  ✓ \"If it were up to me, I would implement key-based authentication.\"\n  Por qué pasa: con it, el oído pide was. En algo imaginario, en inglés formal siempre es were.\n• ❌ \"They demanded that we were available around the clock.\"\n  ✓ \"They demanded that we be available around the clock.\"\n  Por qué pasa: en español decimos \"estuviéramos\" (pasado) y buscamos un pasado en inglés. Aquí va be, aunque la frase esté en pasado.\n• ❌ \"We insist that proprietary protocols are not used.\"\n  ✓ \"We insist that proprietary protocols not be used.\"\n  Por qué pasa: negamos como siempre (are not). En estas frases, not va directamente delante de be.",
    cheatSheetRule: 'Algo imaginario ➔ were con todos (If I were you, If it were up to me). Recommend / suggest / demand / insist + that, o It is imperative / vital that ➔ el verbo del diccionario, sin -s: that he follow, that we be, that it be kept, that it not be used.',
    mentalShortcut: '⚡ "si yo fuera / si dependiera de mí" ➔ If I were / If it were up to me | "recomiendo / exijo que él…" ➔ that he follow, that we be (sin -s) | "es vital que…" ➔ It is vital that the key be kept | "que no…" ➔ that it not be used'
  },

  G14: {
    topicId: 'G14',
    titleEs: 'Must, might, can\'t ("debe de ser", "puede que", "no puede ser")',
    formula: '',
    summaryEs: "En español deducimos con \"debe de ser\", \"puede que sea\" y \"no puede ser\". En inglés la palabra que eliges dice lo seguro que estás, y lo decide lo que cuenta la frase:\n• \"Debe de ser ransomware\" ➔ It MUST be ransomware.\n• \"Puede que sea una consulta sin índice\" ➔ It MIGHT be an unindexed query.\n• \"No puede ser culpa de Dave\" ➔ It CAN'T be Dave's fault.\n• \"Se les debe de haber olvidado\" ➔ They MUST HAVE forgotten.\n\n1. \"Debe de ser…\" (las pruebas lo dejan claro) ➔ must + verbo limpio:\n• Truco: busca pruebas fuertes en la frase: todas las luces apagadas, archivos con .locked, una nota de rescate.\n\n2. \"Puede que / quizá…\" (hay dudas) ➔ might / may / could + verbo limpio:\n• Truco: las pistas son \"but we still need to check\", \"we haven't verified\", \"maybe\", \"I doubt it\".\n\n3. \"No puede ser…\" (las pruebas lo descartan) ➔ can't / couldn't:\n• Truco: busca algo que lo hace imposible: \"he was on leave all week\", \"the cables are still in their boxes\".\n• Ojo: nunca mustn't. Mustn't significa \"está prohibido\", no \"no puede ser\".\n\n4. \"Debe de haber… / puede que haya… / no puede haber…\" (sobre el pasado) ➔ must / might / can't + have + 3.ª forma:\n• 3.ª forma: la que en español sería \"olvidado, funcionado, conseguido\": forgotten, worked, gained.\n• Ejemplo: \"The failover scripts must have worked flawlessly\", \"The attacker can't have gained SSH access.\"\n\n5. \"Puede ser\" como verdad general (a veces pasa) ➔ can:\n• Truco: si en español cabe \"a veces\" o \"en general\", va can: \"Hotel Wi-Fi can be very frustrating.\" Si hablas de este caso concreto, might o could.\n\n6. Nivel avanzado (opcional):\n• Should = \"debería\" (lo esperable): \"We should be able to finish if we have enough time\", \"It shouldn't be a problem.\"\n• Could también es \"podrías\" (una opción que tienes): \"You could use your date of birth, but I wouldn't recommend it.\"",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Pruebas fuertes en la frase (todo apagado, nota de rescate, failover perfecto) ➔ must o must have.\n2) Dudas en la frase ("but we still need to run traces", "we haven\'t verified the DNS yet", "maybe") ➔ might o could.\n3) Pruebas que lo descartan ("he was on leave all week", "the cables are still in unopened boxes") ➔ can\'t o couldn\'t (have). Mustn\'t es trampa.\n4) Algo que pasa en general ("every day", "using insecure passwords") ➔ can.',
    examples: [
      {
        en: 'All files suddenly have a .locked extension and a ransom note appeared on the desktop. It must be ransomware!',
        highlight: 'must be',
        es: 'De repente todos los archivos tienen la extensión .locked y apareció una nota de rescate en el escritorio. ¡Debe de ser ransomware!',
        explanation: 'Las pruebas lo dejan claro ➔ must be.'
      },
      {
        en: 'It might be an unindexed database query, but we still need to run traces to be certain.',
        highlight: 'might be',
        es: 'Puede que sea una consulta sin índice, pero aún tenemos que lanzar trazas para estar seguros.',
        explanation: '"But we still need to…" indica dudas ➔ might be.'
      },
      {
        en: 'It can’t be Dave’s fault, because he never opens suspicious-looking emails.',
        highlight: 'can’t be',
        es: 'No puede ser culpa de Dave, porque nunca abre correos sospechosos.',
        explanation: 'Un dato lo descarta ➔ can’t be (nunca mustn’t).'
      },
      {
        en: 'Since the firewall dropped all incoming packets on port 22, the attacker can’t have gained SSH access.',
        highlight: 'can’t have gained',
        es: 'Como el firewall descartó todos los paquetes entrantes por el puerto 22, el atacante no puede haber conseguido acceso SSH.',
        explanation: 'Sobre el pasado ➔ can’t have + gained.'
      },
      {
        en: 'Relying on hotel Wi-Fi every day for client demos can be very frustrating.',
        highlight: 'can be',
        es: 'Depender del Wi-Fi del hotel todos los días para las demos con clientes puede ser muy frustrante.',
        explanation: 'Verdad general (a veces pasa) ➔ can be.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"It can be a virus; let’s run a scan.\"\n  ✓ \"It could / might be a virus; let’s run a scan.\"\n  Por qué pasa: \"puede ser\" se parece a can. Pero para un caso concreto se usa might o could.\n• ❌ \"It mustn’t be Dave’s fault; he never opens suspicious emails.\"\n  ✓ \"It can’t be Dave’s fault; he never opens suspicious emails.\"\n  Por qué pasa: si \"debe de ser\" es must, \"no debe de ser\" parece mustn't. Pero mustn't significa \"está prohibido\".\n• ❌ \"It must be the power failure yesterday.\"\n  ✓ \"It must have been the power failure yesterday.\"\n  Por qué pasa: nos quedamos con \"debe de ser\" y olvidamos que es pasado. Para el pasado: must have been.\n• ❌ \"The impact might to be significant.\"\n  ✓ \"The impact might be significant.\"\n  Por qué pasa: \"podría llegar a ser\" nos pide un to. Después de might va el verbo limpio.",
    cheatSheetRule: 'Pruebas claras ➔ must. Dudas ➔ might / may / could. Pruebas que lo descartan ➔ can\'t / couldn\'t (nunca mustn\'t). Pasado ➔ + have + 3.ª forma. Verdad general ➔ can.',
    mentalShortcut: '⚡ "debe de ser" (pruebas claras) ➔ must be | "puede que sea" (dudas) ➔ might / could be | "no puede ser" (lo descarta) ➔ can’t be (nunca mustn’t) | "debe de haber sido" ➔ must have been'
  },

  G15: {
    topicId: 'G15',
    titleEs: 'Since ("desde" o "dado que")',
    formula: '',
    summaryEs: "En español usamos dos palabras distintas: \"desde\" (tiempo) y \"dado que / ya que\" (motivo). En inglés las dos son since, y la pista está en el resto de la frase:\n• \"La latencia está alta desde las 08:00\" ➔ Latency HAS BEEN high SINCE 08:00.\n• \"Ha gestionado varios proyectos desde que entró en la empresa\" ➔ She HAS MANAGED several projects SINCE she started at the company.\n• \"Dado que la red estaba caída, hicimos la reunión ya\" ➔ SINCE the network was down, we held the meeting right away.\n• \"Ya que el MFA es obligatorio, soporte no puede saltárselo\" ➔ SINCE MFA is mandatory, support cannot bypass it.\n\n1. Since = \"desde\" ➔ la otra parte de la frase lleva has / have:\n• Truco: busca has, have, 've o 's been en la parte que NO empieza por since (has been, 've noticed, has received). Si está, since es \"desde\".\n• Ojo: en español decimos \"está alta desde las 8\", en presente. En inglés va \"has been high since 8 a.m.\"\n\n2. Since = \"dado que / ya que\" ➔ funciona como because:\n• Truco: si la otra parte no lleva has / have (we held, they made errors, we couldn't manage), since explica un motivo. Prueba a cambiarlo por because: si la frase sigue funcionando, es motivo.\n• Ojo: aunque la parte de since lleve have (\"Since you've become more involved, can you update us?\"), lo que cuenta es la otra parte. Aquí es motivo.\n\n3. ¿Las dos cosas a la vez? (cuando te piden clasificar la frase):\n• Truco: si la otra parte lleva has / have y, además, la parte de since es claramente la causa de lo que pasa, puede ser Both: \"Since we updated the system, we've had two very productive weeks\" = desde que actualizamos, y gracias a eso, hemos tenido dos semanas muy productivas.\n• Ojo: si la frase insiste en el momento de inicio (\"Since I first saw…\", \"Since that first meeting…\"), es solo tiempo.\n\n4. \"Desde\" con un momento o con una duración ➔ since 08:00 / for three days:\n• Truco: since + el momento en que empezó (since Monday, since the update). For + cuánto dura (for three days). From no sirve para \"desde\" con has / have.\n\n5. Nivel avanzado (opcional):\n• Since then = desde entonces. Ever since = desde entonces (y sin parar).\n• As también significa \"dado que\": \"As their demands are very specific, it hasn't been easy.\"",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Te piden el significado de since (After, Because, Both o Neither; Time o Cause/reason) ➔ mira la parte que NO empieza por since. Si lleva has / have / \'ve, es tiempo (After o Time). Si no, es motivo (Because o Cause/reason).\n2) Si además la parte de since es claramente la causa del resultado, puede ser Both.\n3) Hueco con "desde" + un momento ➔ since, con has / have en la otra parte. From y el presente simple ("is high since") son trampa.',
    examples: [
      {
        en: 'Since the secondary database node was already synchronized, promoting it to primary required zero downtime.',
        highlight: 'Since',
        es: 'Dado que el nodo secundario de base de datos ya estaba sincronizado, promoverlo a principal no supuso ninguna caída.',
        explanation: 'La otra parte (required) no lleva has / have ➔ since es motivo (= because).'
      },
      {
        en: 'The perimeter gateway has dropped non-essential UDP traffic since the DDoS mitigation policy was enacted.',
        highlight: 'has dropped / since',
        es: 'El gateway perimetral descarta el tráfico UDP no esencial desde que se activó la política de mitigación DDoS.',
        explanation: 'La otra parte lleva has dropped ➔ since es "desde".'
      },
      {
        en: 'Since multi-factor authentication is mandatory, Tier-1 support cannot grant phone-based bypasses.',
        highlight: 'Since',
        es: 'Ya que la autenticación multifactor es obligatoria, el soporte de nivel 1 no puede conceder excepciones por teléfono.',
        explanation: 'Se puede cambiar por because y sigue funcionando ➔ motivo.'
      },
      {
        en: 'The help desk has received over two hundred tickets since the new VPN client was released.',
        highlight: 'has received / since',
        es: 'El servicio de ayuda ha recibido más de doscientos tickets desde que se lanzó el nuevo cliente VPN.',
        explanation: 'Has received en la otra parte ➔ since es "desde" el lanzamiento.'
      },
      {
        en: 'Since we updated the system, we’ve had two very productive weeks.',
        highlight: 'Since / we’ve had',
        es: 'Desde que actualizamos el sistema, hemos tenido dos semanas muy productivas.',
        explanation: 'Lleva we’ve had (tiempo) y la actualización es la causa de esas semanas ➔ Both.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"Latency is high since 08:00 UTC.\"\n  ✓ \"Latency has been high since 08:00 UTC.\"\n  Por qué pasa: en español decimos \"está alta desde las 8\", en presente. En inglés, con since de tiempo, la otra parte lleva has / have.\n• ❌ \"The service has been down from Monday.\"\n  ✓ \"The service has been down since Monday.\"\n  Por qué pasa: \"desde\" se parece a from. Para un periodo que llega hasta hoy, va since.\n• ❌ \"The service has been down since three days.\"\n  ✓ \"The service has been down for three days.\"\n  Por qué pasa: en español \"desde hace tres días\" lleva \"desde\". En inglés, con una duración va for.\n• ❌ Entender \"Since MFA is mandatory, …\" como \"Desde que el MFA es obligatorio…\".\n  ✓ Significa \"Dado que el MFA es obligatorio, …\".\n  Por qué pasa: aprendimos since como \"desde\" y no esperamos que explique un motivo.",
    cheatSheetRule: 'Mira la parte que NO empieza por since: si lleva has / have, since es "desde"; si no, es "dado que" (= because). "Desde" + momento ➔ since. "Desde hace" + duración ➔ for.',
    mentalShortcut: '⚡ has / have en la otra parte ➔ since = "desde" | sin has / have en la otra parte ➔ since = "dado que" (because) | "desde" + un momento ➔ since Monday | "desde hace" + duración ➔ for three days'
  },

  G16: {
    topicId: 'G16',
    titleEs: 'Hablar del futuro ("no vamos a…", "estaremos…", "no habremos…")',
    formula: '',
    summaryEs: "En español \"vamos a…\" y \"no vamos a…\" sirven para casi todo. En inglés, la forma que eliges dice si es algo ya decidido, una intención, algo que estará en marcha o algo que no estará terminado:\n• \"No vamos a hacer la reunión hoy (ya está decidido)\" ➔ We're NOT HAVING the meeting today.\n• \"No pienso esperar todo el día\" ➔ We're NOT GOING TO wait all day.\n• \"La semana que viene tendremos una reunión sobre esto\" ➔ We WILL BE HOLDING a meeting about this next week.\n• \"Para entonces no habremos terminado\" ➔ By then, we WON'T HAVE finished.\n\n1. Algo ya decidido u organizado (con fecha) ➔ am / is / are + verbo con -ing:\n• Truco: es lo que pondrías en el calendario: \"They're implementing it next Friday\", \"We're not having the meeting this evening\".\n• Ojo: si te piden clasificar la frase, esta forma es A decision (\"They're not running the session anymore\").\n\n2. Lo que alguien quiere o no quiere hacer ➔ going to + verbo limpio:\n• Truco: habla de la intención o la actitud: \"I'm not going to attend\", \"The customer is not going to go through with it\". Si te piden clasificar: An intention.\n• Ojo: también se usa cuando lo ves venir por lo que pasa ahora: \"It's going to be a late night unless we focus\", \"It's more complicated than I thought: I'm going to need help.\"\n\n3. Algo que estará en marcha en un momento del futuro, o que forma parte de la agenda ➔ will be + verbo con -ing:\n• Truco: \"estaré presentando\", \"estaremos tratando\": \"Will you be giving the presentation at the same time tomorrow?\", \"We won't be covering code editors in tomorrow's meeting.\"\n\n4. Algo que para un momento todavía no estará terminado ➔ won't have + 3.ª forma:\n• 3.ª forma: la que en español sería \"terminado, cumplido, completado\": finished, met, completed.\n• Truco: suele ir con by o by the time (para cuando): \"By the time the auditors arrive, the migration won't have been completed.\"\n\n5. Nivel avanzado (opcional):\n• Were going to = \"iba a\" (una intención del pasado que no se cumplió): \"You said you were going to take a break.\"\n• Después de until, before, as soon as o by the time va presente, aunque hables del futuro: \"until the customer signs off\".",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Te piden clasificar la frase ➔ not + verbo con -ing ("We\'re not taking this case any further") es A decision. Not going to ("they are not going to update the procedure") es An intention.\n2) Algo de la agenda o en marcha en un momento futuro ("next week", "at the same time tomorrow", "in tomorrow\'s meeting") ➔ will be + -ing ("will be holding", "won\'t be covering").\n3) Una predicción por lo que ves ahora ("unless they upgrade", "unless we focus") ➔ going to.\n4) "By the time…" + algo no terminado ➔ won\'t have + 3.ª forma ("will not have been completed").',
    examples: [
      {
        en: 'We’re not having the meeting this evening as we’re still working on the configuration issue with the support team.',
        highlight: 'We’re not having',
        es: 'No vamos a hacer la reunión esta tarde porque seguimos con el problema de configuración con el equipo de soporte.',
        explanation: 'Ya está decidido ➔ are not + having. Si te piden clasificarla: A decision.'
      },
      {
        en: 'I don’t think we’re going to have a remote session, as I’m not convinced this agent will be able to help me.',
        highlight: 'going to have',
        es: 'No creo que vayamos a hacer una sesión remota, porque no estoy convencido de que este agente pueda ayudarme.',
        explanation: 'Habla de la intención (no hay ganas) ➔ going to. Clasificación: An intention.'
      },
      {
        en: 'We will be holding a meeting regarding this matter next week.',
        highlight: 'will be holding',
        es: 'La semana que viene tendremos una reunión sobre este tema.',
        explanation: 'Algo que forma parte de la agenda ➔ will be + holding.'
      },
      {
        en: 'By the time the database replication finishes, we won’t have met our recovery time objective.',
        highlight: 'won’t have met',
        es: 'Para cuando termine la replicación de la base de datos, no habremos cumplido nuestro objetivo de tiempo de recuperación.',
        explanation: '"No habremos cumplido" ➔ won’t have met.'
      },
      {
        en: 'The DevOps squad isn’t deploying the v4.2 release this Friday; the change board froze all deployments.',
        highlight: 'isn’t deploying',
        es: 'El equipo de DevOps no va a desplegar la versión 4.2 este viernes; el comité de cambios congeló todos los despliegues.',
        explanation: 'Plan cancelado por una decisión ➔ isn’t + deploying.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"We don’t have the meeting this evening.\" (para algo ya decidido)\n  ✓ \"We’re not having the meeting this evening.\"\n  Por qué pasa: en español \"no tenemos reunión esta tarde\" va en presente normal. En inglés, un plan decidido va con -ing.\n• ❌ \"The customer is not going to going through with the reinstallation.\"\n  ✓ \"The customer is not going to go through with the reinstallation.\"\n  Por qué pasa: el -ing de going se nos pega al siguiente verbo. Después de going to va el verbo limpio.\n• ❌ \"By the time it finishes, we won’t meet our RTO.\"\n  ✓ \"By the time it finishes, we won’t have met our RTO.\"\n  Por qué pasa: \"no habremos cumplido\" tiene dos partes en español y nos quedamos con una. Hace falta won't have + met.\n• ❌ \"I’m afraid we not covering code editors tomorrow.\"\n  ✓ \"I’m afraid we won’t be covering code editors tomorrow.\"\n  Por qué pasa: en español basta con \"no vamos a tratar\". En inglés el -ing necesita su verbo delante: won't be covering (o aren't covering).",
    cheatSheetRule: 'Decidido u organizado ➔ am / is / are + -ing (A decision). Intención o lo ves venir ➔ going to (An intention). En marcha o en la agenda en un momento futuro ➔ will be + -ing. No terminado para un momento ➔ won\'t have + 3.ª forma.',
    mentalShortcut: '⚡ "ya está decidido" ➔ We’re not having… (A decision) | "no pienso / no tengo intención" ➔ not going to (An intention) | "estaremos haciendo" (agenda) ➔ will be holding | "para entonces no habremos…" ➔ won’t have finished'
  },

  G17: {
    topicId: 'G17',
    titleEs: 'They, them, their para una persona cualquiera',
    formula: '',
    summaryEs: "En español \"su\" no dice si es hombre o mujer: \"cada usuario debe cambiar su contraseña\". En inglés hay que elegir, y en la documentación de IT, para una persona cualquiera se usa they / them / their:\n• \"Cada usuario debe cambiar su contraseña\" ➔ Each user must change THEIR password.\n• \"Si un cliente llama, pídele el número de ticket\" ➔ If a customer calls, ask THEM for the ticket number.\n• \"Cuando un auditor llega, debe registrarse\" ➔ When an auditor arrives, THEY must sign in.\n• \"El servidor perdió su conexión\" ➔ The server lost ITS connection.\n\n1. \"Su\" de una persona cualquiera ➔ their:\n• Truco: si antes aparece each / every / any / a / someone / anyone + una persona (user, engineer, contractor), es their.\n• Ojo: its es solo para cosas y máquinas (the server, the cluster). Nunca para personas.\n\n2. \"Le / lo / la\" (la persona recibe la acción) ➔ them:\n• Ejemplo: \"If a user reports phishing, advise them to disconnect\" = si un usuario reporta phishing, aconséjale que se desconecte.\n\n3. \"Él / ella\" (la persona hace la acción) ➔ they:\n• Truco: en español decimos \"debe registrarse\" sin \"él\" ni \"ella\". En inglés hace falta they: \"they must sign in\".\n• Ojo: el verbo va como con varias personas: they are, they have, they need. Nunca they is.\n\n4. \"Se / a sí mismo\" ➔ themselves:\n• Ejemplo: \"A user who locks themselves out of the VPN…\" = un usuario que se bloquea a sí mismo el acceso a la VPN…\n• Truco: la forma segura es themselves. Themselfs no existe.\n\n5. Nivel avanzado (opcional):\n• His or her: es correcto, pero suena pesado y anticuado en documentación técnica. Lo habitual hoy es their.\n• Themself: aparece en algunos textos modernos para una sola persona, pero themselves es la forma más aceptada.\n• Si sabes quién es la persona (Ana, el CTO), usa la forma (he, she o they) con la que esa persona se identifica. They / their es para cuando no lo sabes o no importa.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Antes hay una persona cualquiera (each / every / any / a + user, engineer…) y el hueco va delante de una cosa ("___ hardware security key") ➔ their. Its, his y theirs son trampa.\n2) El hueco va delante de un verbo ("___ must include the logs", "___ cannot access") ➔ they.\n3) El hueco va después de un verbo o de to ("assigns the ticket to ___") ➔ them.\n4) "locks ___ out" ➔ themselves. Themselfs, himself o itself son trampa.',
    examples: [
      {
        en: 'Each systems engineer must rotate their cryptographic access tokens every ninety days.',
        highlight: 'their',
        es: 'Cada ingeniero de sistemas debe rotar sus tokens de acceso criptográficos cada noventa días.',
        explanation: '"Su" de una persona cualquiera (each engineer) ➔ their.'
      },
      {
        en: 'If a user reports suspicious SMS phishing, advise them to disconnect from the network immediately.',
        highlight: 'them',
        es: 'Si un usuario reporta phishing sospechoso por SMS, aconséjale que se desconecte de la red de inmediato.',
        explanation: '"Aconséjale" (la persona recibe la acción) ➔ advise them.'
      },
      {
        en: 'When an auditor requests system logs, they must provide a valid compliance ticket reference.',
        highlight: 'they must',
        es: 'Cuando alguien de auditoría solicita registros del sistema, debe aportar una referencia válida de ticket de cumplimiento.',
        explanation: 'En español no hace falta decir quién; en inglés sí: they must provide.'
      },
      {
        en: 'A user who locks themselves out of the VPN three times will trigger an automated account freeze.',
        highlight: 'themselves',
        es: 'Un usuario que se bloquee el acceso a la VPN tres veces activará un bloqueo automático de la cuenta.',
        explanation: '"Se bloquea a sí mismo" ➔ locks themselves out.'
      },
      {
        en: 'The server lost its connection to the gateway during the failover.',
        highlight: 'its',
        es: 'El servidor perdió su conexión con el gateway durante la conmutación por error.',
        explanation: '"Su" de una máquina ➔ its. Para personas, nunca its.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"Each engineer must rotate its access tokens.\"\n  ✓ \"Each engineer must rotate their access tokens.\"\n  Por qué pasa: \"su\" sirve para todo en español y, como es una sola persona, buscamos una palabra en singular. Its es solo para cosas.\n• ❌ \"If a user calls, they is probably locked out.\"\n  ✓ \"If a user calls, they are probably locked out.\"\n  Por qué pasa: pensamos en una sola persona y sale is. Con they siempre va are.\n• ❌ \"A user who locks themselfs out will trigger a freeze.\"\n  ✓ \"A user who locks themselves out will trigger a freeze.\"\n  Por qué pasa: aplicamos la regla de \"self\" en singular. La forma es themselves.\n• ❌ \"Anyone who notices unusual traffic on theirs workstation should report it.\"\n  ✓ \"Anyone who notices unusual traffic on their workstation should report it.\"\n  Por qué pasa: their y theirs suenan casi igual. Delante de una cosa va their; theirs va solo (\"the laptop is theirs\").",
    cheatSheetRule: 'Persona cualquiera (each user, anyone, a customer): "su" ➔ their, "le / lo" ➔ them, "él / ella" ➔ they + are, "a sí mismo" ➔ themselves. Máquinas y cosas ➔ its.',
    mentalShortcut: '⚡ "su" de una persona cualquiera ➔ their | "le / lo / la" ➔ them | "él o ella" (hace la acción) ➔ they + are / have | "a sí mismo" ➔ themselves | "su" de una máquina ➔ its'
  },

  G18: {
    topicId: 'G18',
    titleEs: 'Yet another y has yet to ("otro más", "aún no")',
    formula: '',
    summaryEs: "Seguramente conoces yet como \"todavía\" en \"not yet\". En inglés técnico aparece además en dos expresiones que conviene leer como un bloque:\n• \"Otra vulnerabilidad más en el mismo servicio\" ➔ YET ANOTHER vulnerability in the same service.\n• \"El proveedor aún no ha confirmado la fecha\" ➔ The vendor HAS YET TO confirm the date.\n• \"El plan aún no ha sido aprobado\" ➔ The plan HAS YET TO BE approved.\n\n1. \"Otro… más\" (algo que se repite, con fastidio) ➔ yet another + una sola cosa:\n• Truco: another ya significa \"otro uno\", así que va con una sola cosa: yet another bug, no yet another bugs.\n• Ojo: siempre another. Other, others o the other son errores aquí.\n\n2. \"Aún no ha…\" ➔ has / have yet to + el verbo tal como sale en el diccionario:\n• Truco: léelo como \"tiene pendiente\": has yet to confirm = tiene pendiente confirmar = aún no ha confirmado.\n• Ojo: no lleva not, pero significa \"no\".\n\n3. \"Aún no ha sido…\" ➔ has yet to be + 3.ª forma:\n• 3.ª forma: la que en español sería \"aprobado, parcheado, migrado\": approved, patched, migrated.\n• Truco: después de to siempre va be. Nunca been ni being: has yet to be tested.\n\n4. \"Todavía no\" de toda la vida ➔ not… yet, con yet al final:\n• Ejemplo: \"We haven't updated the staging cluster yet\" = todavía no hemos actualizado el clúster de staging.\n\n5. Nivel avanzado (opcional):\n• Still not: \"The server is still not patched\" = el servidor sigue sin parchear. Dice lo mismo que \"has yet to be patched\", con otra forma.\n• Issues that have yet to be ironed out = problemas que aún hay que pulir.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) "has yet ___ a report" ➔ to + verbo limpio (to publish, to meet). Published, meeting o met son trampa.\n2) "have yet ___ migrated" ➔ to be. Been, being o be a secas son trampa.\n3) "___ another campaign" o "has ___ to review" ➔ yet. Still, already, even o ever son trampa.\n4) "yet ___ critical flaw" ➔ another. Other, others o the other son trampa.',
    examples: [
      {
        en: 'The security team discovered yet another unpatched vulnerability in the legacy web daemon.',
        highlight: 'yet another',
        es: 'El equipo de seguridad descubrió otra vulnerabilidad más sin parchear en el antiguo servicio web.',
        explanation: '"Otra… más" ➔ yet another + una sola cosa (vulnerability).'
      },
      {
        en: 'The vendor has yet to confirm when the replacement hardware will arrive.',
        highlight: 'has yet to confirm',
        es: 'El proveedor aún no ha confirmado cuándo llegará el hardware de reemplazo.',
        explanation: '"Aún no ha confirmado" ➔ has yet to confirm (= tiene pendiente confirmar).'
      },
      {
        en: 'The emergency failover plan has yet to be approved by the infrastructure director.',
        highlight: 'has yet to be approved',
        es: 'El plan de conmutación de emergencia aún no ha sido aprobado por la dirección de infraestructura.',
        explanation: '"Aún no ha sido aprobado" ➔ has yet to be approved: después de to va be.'
      },
      {
        en: 'Although the core switch arrived yesterday, the technicians have yet to configure the VLAN tagging.',
        highlight: 'have yet to configure',
        es: 'Aunque el switch central llegó ayer, los técnicos aún no han configurado el etiquetado de VLAN.',
        explanation: 'Con varias personas (the technicians) ➔ have yet to.'
      },
      {
        en: 'We haven’t updated the staging cluster yet.',
        highlight: 'haven’t / yet',
        es: 'Todavía no hemos actualizado el clúster de staging.',
        explanation: '"Todavía no" de toda la vida ➔ not… yet, con yet al final.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"The patch has yet to been tested.\"\n  ✓ \"The patch has yet to be tested.\"\n  Por qué pasa: vemos has y el oído pide been (\"has been\"). Pero entre medias hay un to, y después de to va be.\n• ❌ Entender \"has yet to be approved\" como \"ya tiene que aprobarse\".\n  ✓ Significa \"aún no ha sido aprobado\".\n  Por qué pasa: yet se parece a \"ya\" y no hay ningún not a la vista. Léelo como \"tiene pendiente\".\n• ❌ \"We found yet another bugs in the API.\"\n  ✓ \"We found yet another bug in the API.\"\n  Por qué pasa: \"otro más\" suena a más de uno. Another siempre va con una sola cosa.\n• ❌ \"The pentest uncovered yet other SQL injection flaw.\"\n  ✓ \"The pentest uncovered yet another SQL injection flaw.\"\n  Por qué pasa: \"otro\" se parece a other. Con una sola cosa, va another.",
    cheatSheetRule: '"Otro… más" ➔ yet another + una sola cosa. "Aún no ha…" ➔ has yet to + verbo limpio. "Aún no ha sido…" ➔ has yet to be + 3.ª forma (nunca been). "Todavía no" ➔ not… yet al final.',
    mentalShortcut: '⚡ "otro… más" ➔ yet another + una cosa (yet another bug) | "aún no ha…" ➔ has yet to + verbo (has yet to confirm) | "aún no ha sido…" ➔ has yet to be approved (nunca been) | "todavía no" ➔ not… yet al final'
  },

  G19: {
    topicId: 'G19',
    titleEs: 'Phrasal verbs de IT (roll back, roll out, phase out, track down)',
    formula: '',
    summaryEs: "Muchos verbos de IT en inglés son dos palabras: un verbo y una partícula (back, out, down, up). En español suelen ser una sola palabra, así que se aprenden como un bloque, igual que un comando:\n• \"Revertir la actualización\" ➔ ROLL BACK the update.\n• \"Desplegar la nueva política poco a poco\" ➔ ROLL OUT the new policy.\n• \"Retirar poco a poco los servidores antiguos\" ➔ PHASE OUT the legacy servers.\n• \"Localizar el origen del ataque\" ➔ TRACK DOWN the point of entry.\n\n1. \"Revertir\" o \"lanzar\" una versión ➔ roll back / roll out:\n• Truco: back = hacia atrás (volver a la versión anterior porque algo falló). Out = hacia fuera (sacar la nueva versión a los usuarios).\n• Ojo: roll back es inmediato; roll out suele ser gradual.\n\n2. \"Hacer una copia de seguridad\" ➔ back up:\n• Truco: back up es guardar una copia, no volver atrás. Si algo falló y quieres la versión anterior, es roll back.\n• Ojo: el verbo va separado (back up the data) y la cosa va junta (make a backup).\n\n3. \"Retirar poco a poco\" ➔ phase out:\n• Truco: phase = por fases. Es una retirada planificada durante semanas o meses, no un apagado urgente.\n\n4. \"Filtrar / descartar\" y \"localizar el origen\" ➔ filter out / track down (o trace down):\n• Truco: filter out = dejar fuera lo que no quieres (tráfico, spam). Track down = seguir la pista hasta el final (la causa, el punto de entrada).\n\n5. \"Dar el visto bueno\" ➔ sign off on:\n• Ejemplo: \"The CISO must sign off on the firewall exception\" = la persona responsable de seguridad tiene que aprobar la excepción del firewall.\n\n6. Nivel avanzado (opcional):\n• Encargar algo a otros: \"We must have the contracts audited\" = tenemos que hacer que auditen los contratos (have + cosa + 3.ª forma, como audited). \"He had the DBA verify the metrics\" = hizo que el DBA revisara las métricas (have + persona + verbo limpio).\n• Boot up = arrancar un equipo: \"The laptop takes two minutes to boot up.\"",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Algo falló después de un despliegue ("error rates exceed two percent") ➔ roll back. Roll out, call off o turn down son trampa.\n2) Buscar el origen de algo durante horas ("the exact point of entry") ➔ track down. Turn up, bring about o take over son trampa.\n3) Retirar algo antiguo con calma ➔ phase out. Descartar tráfico ➔ filter out.\n4) "have our smart contracts ___ by a firm" ➔ audited. "had the DBA ___ the metrics" ➔ verify.',
    examples: [
      {
        en: 'If the canary deployment pushes error rates above two percent, the pipeline will automatically roll back the release.',
        highlight: 'roll back',
        es: 'Si el despliegue canary sube la tasa de errores por encima del dos por ciento, el pipeline revertirá automáticamente la versión.',
        explanation: 'Algo falló y se vuelve a la versión anterior ➔ roll back.'
      },
      {
        en: 'DevOps will roll out the new MFA policy to all engineering teams next Monday.',
        highlight: 'roll out',
        es: 'DevOps desplegará la nueva política de MFA para todos los equipos de ingeniería el lunes que viene.',
        explanation: 'Sacar algo nuevo a los usuarios ➔ roll out.'
      },
      {
        en: 'Infrastructure leadership decided to phase out all legacy unencrypted FTP servers before the annual audit.',
        highlight: 'phase out',
        es: 'La dirección de infraestructura decidió retirar poco a poco todos los servidores FTP antiguos sin cifrar antes de la auditoría anual.',
        explanation: 'Retirada planificada, por fases ➔ phase out.'
      },
      {
        en: 'Before the migration, the team backed up every virtual machine to cold storage.',
        highlight: 'backed up',
        es: 'Antes de la migración, el equipo hizo una copia de seguridad de todas las máquinas virtuales en almacenamiento en frío.',
        explanation: 'Guardar una copia ➔ back up. No vuelve atrás nada.'
      },
      {
        en: 'The forensic team spent thirty-six hours trying to track down the exact point of entry used by the attackers.',
        highlight: 'track down',
        es: 'El equipo forense pasó treinta y seis horas intentando localizar el punto exacto por el que entraron los atacantes.',
        explanation: 'Seguir la pista hasta el origen ➔ track down.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"The update failed, so we backed up to the previous version.\"\n  ✓ \"The update failed, so we rolled back to the previous version.\"\n  Por qué pasa: back suena a \"atrás\" y lo usamos para volver atrás. Back up es guardar una copia; volver atrás es roll back.\n• ❌ \"We will phase out the faulty patch tonight.\"\n  ✓ \"We will roll back the faulty patch tonight.\"\n  Por qué pasa: \"retirar el parche\" nos suena a phase out. Pero phase out es lento y planificado; esta noche y urgente es roll back.\n• ❌ \"Please do a back up of the server.\"\n  ✓ \"Please do a backup of the server.\"\n  Por qué pasa: oímos la misma palabra. Como cosa (una copia) va junta: backup.\n• ❌ \"We need to return back to the previous release.\"\n  ✓ \"We need to roll back to the previous release.\"\n  Por qué pasa: traducimos \"volver atrás\" palabra por palabra. En IT, revertir una versión es roll back.",
    cheatSheetRule: 'Revertir ➔ roll back. Lanzar poco a poco ➔ roll out. Hacer copia ➔ back up (la copia: a backup). Retirar por fases ➔ phase out. Descartar ➔ filter out. Localizar el origen ➔ track down / trace down. Aprobar ➔ sign off on.',
    mentalShortcut: '⚡ "revertir (algo falló)" ➔ roll back | "lanzar la nueva versión" ➔ roll out | "retirar poco a poco" ➔ phase out | "localizar el origen" ➔ track down | "hacer copia de seguridad" ➔ back up'
  },

  G20: {
    topicId: 'G20',
    titleEs: '"Fue X lo que…" y "lo que necesitamos es…" (It was… that, What… is)',
    formula: '',
    summaryEs: "En español destacamos la causa con \"fue X lo que…\" o \"lo que necesitamos es…\". En inglés hay dos moldes fijos para lo mismo, muy útiles en un postmortem:\n• \"Fue la entrada sin validar lo que permitió la inyección SQL\" ➔ IT WAS the unvalidated input THAT allowed the SQL injection.\n• \"Lo que necesitamos es un WAF\" ➔ WHAT we need IS a web application firewall.\n• \"No fue hasta el postmortem cuando vimos la causa\" ➔ IT WAS NOT UNTIL the postmortem THAT the root cause became clear.\n\n1. \"Fue X lo que…\" ➔ It was + X + that…:\n• Truco: el molde es siempre It was… that. Nunca which ni what después de It was.\n• Ojo: aunque X sea plural, se queda It was: \"It was the logs that showed the problem.\"\n\n2. \"Lo que necesitamos / lo que causó… es / fue…\" ➔ What + … + is / was…:\n• Truco: What ya es \"lo que\". El verbo que une las dos partes es is o was, aunque detrás venga algo largo: \"What we need to prevent future outages is an enterprise-grade WAF.\"\n\n3. \"No fue hasta… cuando…\" ➔ It was not until… that…:\n• Ejemplo: \"It was not until the postmortem that the root cause became apparent\" = no fue hasta el postmortem cuando quedó clara la causa.\n\n4. Comparar cómo se hace algo (\"más fácil\", \"antes\", \"peor\") ➔ more easily, sooner, worse…:\n• Truco: palabras cortas con -er: faster, sooner. Las acabadas en -ly, con more: more easily, more seriously. Y dos irregulares: well ➔ better, badly ➔ worse.\n• Ojo: nunca dos veces: \"more easier\" o \"more worse\" son errores.\n\n5. Nivel avanzado (opcional):\n• Con personas también vale who: \"It was Ana who found the bug\" (o that).\n• Puedes descartar otra causa en medio: \"It was the user input, not the query parser, that allowed the attack.\"\n• Having + 3.ª forma al principio = \"después de haber…\": \"Having purged the tokens, the analyst forced a password reset.\"",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) "It was the [causa]… ___ allowed the attack" ➔ that. Which, who (para una cosa) o what son trampa.\n2) "What we need… ___ an enterprise-grade firewall" ➔ is. Are, being o have been son trampa.\n3) "could be done ___" ➔ more easily. "taken the whole thing ___" ➔ more seriously. "couldn\'t have gone ___" ➔ worse. "worked any ___" ➔ faster. "much ___" ➔ better.\n4) Más / más… dos veces ("more easier", "more worse", "more faster") siempre es trampa.',
    examples: [
      {
        en: 'It was the unvalidated user input, not the database query parser, that allowed the SQL injection to succeed.',
        highlight: 'It was / that allowed',
        es: 'Fue la entrada de usuario sin validar, y no el analizador de consultas, lo que permitió que funcionara la inyección SQL.',
        explanation: '"Fue X lo que permitió" ➔ It was X that allowed.'
      },
      {
        en: 'What we need to prevent future denial-of-service outages is an enterprise-grade web application firewall.',
        highlight: 'What / is an',
        es: 'Lo que necesitamos para evitar futuras caídas por denegación de servicio es un firewall de aplicaciones web profesional.',
        explanation: '"Lo que necesitamos… es" ➔ What we need… is.'
      },
      {
        en: 'It was the expired SSL certificate that blocked all API requests last night.',
        highlight: 'It was / that blocked',
        es: 'Fue el certificado SSL caducado lo que bloqueó todas las peticiones a la API anoche.',
        explanation: 'Destacar la causa exacta ➔ It was… that.'
      },
      {
        en: 'They should’ve taken the whole thing more seriously.',
        highlight: 'more seriously',
        es: 'Deberían haberse tomado todo el asunto más en serio.',
        explanation: '"Más en serio" con una palabra en -ly ➔ more seriously.'
      },
      {
        en: 'It couldn’t have gone worse. It was as bad as it could have been.',
        highlight: 'worse',
        es: 'No podría haber salido peor. Fue lo peor que podía pasar.',
        explanation: '"Peor" ➔ worse (no more badly, no more worse).'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"Was the router who failed, not the switch.\"\n  ✓ \"It was the router that failed, not the switch.\"\n  Por qué pasa: en \"fue el router quien falló\" no hay ninguna palabra delante de \"fue\". En inglés hace falta It, y para una cosa, that.\n• ❌ \"It were the logs that showed the problem.\"\n  ✓ \"It was the logs that showed the problem.\"\n  Por qué pasa: los logs son varios y buscamos were. El molde se queda en It was.\n• ❌ \"The thing what we need is a snapshot.\"\n  ✓ \"What we need is a snapshot.\"\n  Por qué pasa: traducimos \"la cosa que\" palabra por palabra. What ya significa \"lo que\".\n• ❌ \"Disabling the keys could be done more easier.\"\n  ✓ \"Disabling the keys could be done more easily.\"\n  Por qué pasa: en español siempre decimos \"más\", y lo añadimos a easier. Con more va easily.",
    cheatSheetRule: '"Fue X lo que…" ➔ It was X that… (siempre It was, nunca which). "Lo que necesitamos es…" ➔ What we need is… "No fue hasta… cuando" ➔ It was not until… that. Comparar cómo se hace algo ➔ faster, sooner, more easily, more seriously, better, worse.',
    mentalShortcut: '⚡ "fue X lo que…" ➔ It was X that… (nunca which) | "lo que necesitamos es…" ➔ What we need is… | "no fue hasta… cuando" ➔ It was not until… that | "más fácil / peor" (cómo) ➔ more easily, worse'
  },

  G21: {
    topicId: 'G21',
    titleEs: 'If, unless y as soon as ("si", "a menos que", "en cuanto")',
    formula: '',
    summaryEs: "En español, después de \"si\" a veces pensamos en futuro, y después de \"en cuanto\" o \"a menos que\" usamos \"baje\", \"firme\". En inglés, en todos esos casos va el presente normal:\n• \"Si el enlace cae, el tráfico se redirige\" (siempre pasa) ➔ IF the link DROPS, traffic REROUTES.\n• \"Si el enlace cae, escalaremos el incidente\" ➔ IF the link DROPS, we WILL escalate the incident.\n• \"A menos que el cliente firme, se aplaza la subida\" ➔ UNLESS the customer SIGNS off, the release will be postponed.\n• \"En cuanto baje el retraso, reabriremos las escrituras\" ➔ AS SOON AS the lag DROPS, we will reopen writes.\n\n1. Una regla que siempre se cumple (el sistema lo hace solo) ➔ If / When + presente, presente:\n• Truco: es como describir una configuración: \"If a node becomes unhealthy, the control plane reroutes traffic.\"\n\n2. Lo que harás si pasa algo ➔ If + presente, will / can / must + verbo limpio:\n• Truco: la parte del if nunca lleva will, aunque en español pienses en futuro: \"If the outage lasts more than an hour, we will notify all clients.\"\n\n3. \"A menos que…\" ➔ Unless + presente:\n• Truco: unless = if… not. Ya es negativo, así que lo que sigue va en afirmativo: \"Unless the client updates the cipher suites\" = si el cliente no los actualiza.\n\n4. \"En cuanto / cuando / antes de que\" + algo futuro ➔ as soon as / once / when / before + presente:\n• Truco: igual que con if, sin will: \"As soon as the test passes, we'll deploy.\" En español dirías \"en cuanto pase\".\n\n5. Nivel avanzado (opcional):\n• If o when: when es para algo que seguro que va a pasar (\"When the backup finishes…\"); if, para algo que puede pasar o no.\n• Para condiciones más formales (Should the link fail…) mira G27.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) La frase describe lo que el sistema hace siempre ("If any worker node becomes unhealthy, the control plane ___") ➔ presente (reroutes). Will reroute, rerouted o would reroute son trampa.\n2) Hueco en la parte de if, unless, as soon as o once ➔ presente ("signs off on"). Will sign off, is signing off o signed off son trampa.\n3) Lo que hará el equipo si pasa algo ➔ will / can / must + verbo limpio en la otra parte.',
    examples: [
      {
        en: 'If the primary fiber link drops, the automated BGP failover reroutes traffic within three milliseconds.',
        highlight: 'drops / reroutes',
        es: 'Si el enlace principal de fibra cae, el failover automático de BGP redirige el tráfico en tres milisegundos.',
        explanation: 'Regla que siempre se cumple ➔ presente en las dos partes.'
      },
      {
        en: 'If the backup synchronization saturates the transit link tonight, the on-call engineer will restrict data replication.',
        highlight: 'saturates / will restrict',
        es: 'Si la sincronización del backup satura el enlace de tránsito esta noche, el ingeniero de guardia limitará la replicación.',
        explanation: 'Lo que hará alguien si pasa ➔ presente en el if (saturates), will en la otra parte.'
      },
      {
        en: 'Unless the customer signs off on the staging hotfix before 17:00 UTC, the production release will be postponed until Tuesday.',
        highlight: 'Unless / signs off',
        es: 'A menos que el cliente apruebe el hotfix de staging antes de las 17:00 UTC, la subida a producción se aplazará al martes.',
        explanation: '"A menos que apruebe" ➔ Unless + presente (signs off), sin will.'
      },
      {
        en: 'As soon as the replication lag drops below one second, we will reopen public writes.',
        highlight: 'As soon as / drops',
        es: 'En cuanto el retraso de replicación baje de un segundo, reabriremos las escrituras públicas.',
        explanation: '"En cuanto baje" ➔ as soon as + presente (drops).'
      },
      {
        en: 'When thermal sensors exceed forty degrees Celsius, the cooling fans automatically switch to maximum speed.',
        highlight: 'When / exceed / switch',
        es: 'Cuando los sensores térmicos superan los cuarenta grados, los ventiladores pasan automáticamente a velocidad máxima.',
        explanation: 'Regla automática con when ➔ presente en las dos partes.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"If the link will drop, the router will reroute traffic.\"\n  ✓ \"If the link drops, the router will reroute traffic.\"\n  Por qué pasa: pensamos en algo futuro y lo ponemos en las dos partes. La parte del if va en presente.\n• ❌ \"As soon as the test will pass, we will deploy.\"\n  ✓ \"As soon as the test passes, we will deploy.\"\n  Por qué pasa: en español \"en cuanto pase\" no es presente normal, así que buscamos otra forma. En inglés va el presente.\n• ❌ \"Unless the client doesn’t update the cipher suites, the handshake will fail.\"\n  ✓ \"Unless the client updates the cipher suites, the handshake will fail.\"\n  Por qué pasa: \"a menos que no…\" suena natural en español. Unless ya incluye el \"no\".\n• ❌ \"If the CPU exceeds ninety percent, the alert will triggers.\"\n  ✓ \"If the CPU exceeds ninety percent, the alert will trigger.\"\n  Por qué pasa: ponemos la -s por costumbre. Después de will, el verbo va limpio.",
    cheatSheetRule: 'Regla que siempre se cumple ➔ presente, presente. Lo que harás si pasa ➔ If + presente, will + verbo. Detrás de if, unless, as soon as, once, when o before ➔ presente, nunca will. Unless ya es negativo.',
    mentalShortcut: '⚡ "si pasa X, el sistema hace Y" (siempre) ➔ If X happens, Y happens | "si pasa X, haremos Y" ➔ If X happens, we will… | "a menos que" ➔ Unless + presente (sin not) | "en cuanto / antes de que" ➔ as soon as / before + presente (sin will)'
  },

  G22: {
    topicId: 'G22',
    titleEs: 'Whereas, while y "más… que" para comparar',
    formula: '',
    summaryEs: "En español comparamos dos cosas con \"mientras que\" y con \"más… que\". En inglés cada una tiene su forma:\n• \"TCP garantiza la entrega, mientras que UDP prioriza la velocidad\" ➔ TCP guarantees delivery, WHEREAS UDP prioritizes speed.\n• \"Mientras que el escalado horizontal añade nodos, el vertical añade CPU\" ➔ WHILE horizontal scaling adds nodes, vertical scaling adds CPU.\n• \"Cifrar los archivos es más seguro que enviarlos tal cual\" ➔ Encrypting the files is SAFER THAN sending them as they are.\n• \"Actualizar los backups es más importante que todo lo demás\" ➔ Updating the backups is MORE IMPORTANT THAN anything else.\n\n1. \"Mientras que\" (dos cosas distintas en la misma frase) ➔ , whereas / , while:\n• Truco: si en español cabe \"en cambio\" y en las dos partes alguien hace algo, va whereas o while.\n• Ojo: meanwhile es \"mientras tanto\" (tiempo). No sirve para comparar.\n\n2. \"Mientras que\" al principio ➔ Whereas / While + primera parte, segunda parte:\n• Ejemplo: \"Whereas a compiler translates the whole program ahead of time, an interpreter runs it line by line.\"\n\n3. Palabras que parecen servir pero no unen dos partes con una coma ➔ however, nevertheless, therefore, moreover, in contrast:\n• Truco: estas empiezan una frase nueva, después de un punto: \"TCP checks every packet. In contrast, UDP does not.\"\n• Ojo: despite e in spite of van con una cosa, no con una frase completa (lo viste en G06).\n\n4. \"Más… que\" ➔ palabra corta + -er than, palabra larga + more… than:\n• Truco: palabras de una sílaba (safe, high, fast) o acabadas en -y (easy) llevan -er: safer, higher, easier. Las largas llevan more: more complex, more important, more vulnerable.\n• Ojo: siempre than, nunca that ni then. Y nunca las dos cosas a la vez: \"more safer\" es error.\n\n5. Nivel avanzado (opcional):\n• Much para reforzar: much safer than, much more important than = mucho más seguro / importante que.\n• Less… than = menos… que: \"less expensive than\".\n• The most / the safest es \"el más\": se usa al comparar con todos, no entre dos.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Dos sistemas comparados en la misma frase, con el hueco tras la coma o al principio ➔ whereas o while. However, in contrast, nevertheless, despite o meanwhile son trampa.\n2) "(complex) ___" con dos huecos ➔ more complex… than. Complexer, more… that o most… son trampa.\n3) "(safe)" o "(high)" ➔ safer / higher… than. "more safe", "safest… then" o "higher… that" son trampa.',
    examples: [
      {
        en: 'TCP guarantees ordered packet delivery, whereas UDP minimizes header overhead and latency.',
        highlight: 'whereas',
        es: 'TCP garantiza la entrega ordenada de paquetes, mientras que UDP reduce al mínimo la cabecera y la latencia.',
        explanation: '"Mientras que" entre dos protocolos ➔ , whereas.'
      },
      {
        en: 'While horizontal scaling adds more worker nodes, vertical scaling increases the CPU and RAM of an existing server.',
        highlight: 'While',
        es: 'Mientras que el escalado horizontal añade más nodos, el vertical aumenta la CPU y la RAM de un servidor existente.',
        explanation: '"Mientras que" al principio de la frase ➔ While.'
      },
      {
        en: 'Encrypting the files beforehand is a much safer way of sharing them than sending them directly.',
        highlight: 'safer / than',
        es: 'Cifrar los archivos antes es una forma mucho más segura de compartirlos que enviarlos directamente.',
        explanation: '"Más seguro que" con safe (palabra corta) ➔ safer than.'
      },
      {
        en: 'Updating our backup procedures is much more important than anything else on our to-do list.',
        highlight: 'more important than',
        es: 'Actualizar nuestros procedimientos de backup es mucho más importante que cualquier otra cosa de la lista.',
        explanation: '"Más importante que" con important (palabra larga) ➔ more important than.'
      },
      {
        en: 'Public cloud storage offers virtually unlimited elasticity, whereas on-premises SAN arrays provide predictable local latency.',
        highlight: 'whereas',
        es: 'El almacenamiento en la nube pública ofrece una elasticidad casi ilimitada, mientras que las cabinas SAN locales dan una latencia predecible.',
        explanation: 'Dos modelos de almacenamiento comparados ➔ , whereas.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"TCP checks every packet, meanwhile UDP does not.\"\n  ✓ \"TCP checks every packet, whereas UDP does not.\"\n  Por qué pasa: \"mientras que\" y \"mientras tanto\" se parecen, y meanwhile suena a \"mientras\". Pero meanwhile habla de tiempo, no compara.\n• ❌ \"Compilers translate the whole file, despite interpreters run line by line.\"\n  ✓ \"Compilers translate the whole file, while interpreters run line by line.\"\n  Por qué pasa: buscamos una palabra de contraste y sale despite. Despite va con una cosa, no con una frase completa.\n• ❌ \"Encrypting the files is more safer than sending them.\"\n  ✓ \"Encrypting the files is safer than sending them.\"\n  Por qué pasa: en español siempre decimos \"más\", así que lo añadimos. Si ya pusiste -er, sobra more.\n• ❌ \"The new version is more complex that the old one.\"\n  ✓ \"The new version is more complex than the old one.\"\n  Por qué pasa: \"más complejo QUE\" y traducimos que por that. En las comparaciones, que es than.",
    cheatSheetRule: '"Mientras que" para comparar ➔ , whereas / , while (nunca meanwhile). However, in contrast o therefore empiezan una frase nueva. "Más… que" ➔ palabra corta + -er than (safer than), palabra larga + more… than (more complex than).',
    mentalShortcut: '⚡ "mientras que" (comparar) ➔ , whereas / , while | "mientras tanto" ➔ meanwhile (no compara) | "más… que" con palabra corta ➔ safer than, higher than | "más… que" con palabra larga ➔ more complex than'
  },

  G23: {
    topicId: 'G23',
    titleEs: 'Always + -ing para quejarse ("¡siempre se está cayendo!")',
    formula: '',
    summaryEs: "En español, \"siempre se cae\" puede ser un dato o una queja según el tono. En inglés lo marca la forma del verbo:\n• \"El backup siempre empieza a las 3\" (un dato) ➔ The backup ALWAYS STARTS at 03:00.\n• \"¡Este servidor siempre se está cayendo!\" (una queja) ➔ This server IS ALWAYS CRASHING!\n• \"Los teléfonos siempre se estaban cortando\" (queja del pasado) ➔ The phones WERE ALWAYS DISCONNECTING.\n• \"¿Por qué siempre subes hotfixes a producción?\" ➔ Why ARE you ALWAYS PUSHING hotfixes to production?\n\n1. Una queja (\"¡siempre está…!\") ➔ is / are always + verbo con -ing:\n• Truco: always va entre is / are y el -ing: is always throwing, are always forgetting.\n\n2. Un dato o una rutina, sin queja ➔ always + verbo normal:\n• Truco: si es algo programado o que funciona bien (un cron, una política), va sin is: always runs, always responds, always pings.\n\n3. Una queja del pasado ➔ was / were always + verbo con -ing:\n• Ejemplo: \"Before we replaced the switch, the VoIP phones were always disconnecting\" = antes de cambiar el switch, los teléfonos siempre se estaban cortando.\n\n4. Preguntar con fastidio (\"¿por qué siempre…?\") ➔ Why is / are… always + -ing?:\n• Ejemplo: \"Why is the pipeline always failing on the last step?\"\n• Ojo: la pregunta empieza por is o are, no por does: Why is… always failing.\n\n5. Nivel avanzado (opcional):\n• Constantly y forever funcionan igual que always para quejarse: \"The checkout page is constantly freezing.\"\n• Has always + 3.ª forma = \"siempre ha…\", sin queja: \"The senior engineer has always insisted on unit tests.\"",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) La frase es una queja ("which is driving our users crazy", "the team is exhausted", "customers are leaving negative reviews") ➔ is / are always + -ing. Si el hueco va después de always o constantly ➔ -ing (crashing, freezing).\n2) La frase describe algo programado o que funciona bien ("runs at 03:00", "responds within twelve milliseconds", "pings every ten seconds") ➔ always + verbo normal, sin is.\n3) "Why ___ the pipeline always failing?" ➔ is. Does, has o did son trampa.\n4) "are ___ forgetting" ➔ always. Ever, yet o seldom son trampa.',
    examples: [
      {
        en: 'The support team is exhausted because the legacy printer spooler is always crashing right before the morning shift.',
        highlight: 'is always crashing',
        es: 'El equipo de soporte está agotado porque la cola de impresión antigua siempre se está cayendo justo antes del turno de mañana.',
        explanation: 'Una queja ➔ is always + crashing.'
      },
      {
        en: 'Our scheduled incremental backup job always runs at 03:00 UTC, when database traffic is at its lowest.',
        highlight: 'always runs',
        es: 'Nuestro backup incremental programado siempre se ejecuta a las 03:00 UTC, cuando hay menos tráfico en la base de datos.',
        explanation: 'Un dato, sin queja ➔ always runs, sin is.'
      },
      {
        en: 'Before we replaced the faulty switch, the VoIP phones in sales were always disconnecting mid-conversation.',
        highlight: 'were always disconnecting',
        es: 'Antes de cambiar el switch averiado, los teléfonos VoIP de ventas siempre se estaban cortando en mitad de la llamada.',
        explanation: 'Queja del pasado ➔ were always + disconnecting.'
      },
      {
        en: 'Why is the automated deployment pipeline always failing on the final integration step?',
        highlight: 'Why is',
        es: '¿Por qué el pipeline de despliegue automático siempre está fallando en el último paso de integración?',
        explanation: 'Pregunta con fastidio ➔ Why is… always failing.'
      },
      {
        en: 'Customers are leaving negative reviews because the checkout page is constantly freezing.',
        highlight: 'is constantly freezing',
        es: 'Los clientes dejan malas reseñas porque la página de pago se está bloqueando constantemente.',
        explanation: 'Constantly funciona como always para quejarse ➔ is constantly freezing.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"The portal loses always my session.\"\n  ✓ \"The portal is always losing my session.\"\n  Por qué pasa: en español \"pierde siempre\" pone siempre detrás. En inglés always va delante del verbo principal.\n• ❌ \"The access point always drops connections!\" (para quejarte)\n  ✓ \"The access point is always dropping connections!\"\n  Por qué pasa: en español la queja se nota en el tono. En inglés se nota en la forma: is always + -ing.\n• ❌ \"Why does the pipeline always failing?\"\n  ✓ \"Why is the pipeline always failing?\"\n  Por qué pasa: para preguntar solemos empezar con does. Con -ing, la pregunta empieza por is.\n• ❌ \"The phones were always disconnect.\"\n  ✓ \"The phones were always disconnecting.\"\n  Por qué pasa: después de always pensamos que ya está todo. Con were always, el verbo necesita -ing.",
    cheatSheetRule: 'Queja ➔ is / are / was / were always + -ing (is always crashing). Dato o rutina ➔ always + verbo normal (always runs). Pregunta de queja ➔ Why is / are… always + -ing? Constantly funciona igual.',
    mentalShortcut: '⚡ "¡siempre se está cayendo!" (queja) ➔ is always crashing | "siempre empieza a las 3" (dato) ➔ always starts | "siempre se estaban cortando" ➔ were always disconnecting | "¿por qué siempre…?" ➔ Why is… always failing?'
  },

  G24: {
    topicId: 'G24',
    titleEs: 'Even though o even if ("aunque" de verdad o "incluso si")',
    formula: '',
    summaryEs: "En español \"aunque\" sirve para algo que es verdad y para algo que podría pasar. En inglés hay que elegir, y la pista está en si ya ocurrió o no:\n• \"Aunque doblamos la caché ayer, la API sigue lenta\" (ya pasó) ➔ EVEN THOUGH we doubled the cache yesterday, the API is still slow.\n• \"Aunque un atacante salte el firewall esta noche, los datos seguirán cifrados\" (podría pasar) ➔ EVEN IF an attacker bypasses the firewall tonight, the data will stay encrypted.\n• \"No compartas la clave, aunque digan que son de auditoría\" ➔ Don't share the key, EVEN IF they claim to be from the audit team.\n\n1. \"Aunque\" + algo que es verdad o que ya pasó ➔ even though:\n• Truco: busca pistas de realidad: yesterday, last week, was tested, all tests passed, the DBA warned.\n• Ejemplo: \"Even though all regression tests passed, the release caused a layout bug.\"\n\n2. \"Aunque / incluso si\" + algo que podría pasar ➔ even if:\n• Truco: busca pistas de posibilidad: tonight, manages to, claims, \"loses power\" en un plan de contingencia.\n• Ojo: si hablas del futuro, va en presente: \"Even if the server goes down tonight\", no \"will go down\".\n\n3. La prueba rápida ➔ cambia \"aunque\" por \"incluso si\":\n• Truco: si la frase sigue teniendo sentido, es even if. Si suena raro porque eso ya pasó, es even though.\n\n4. Las trampas de siempre ➔ despite, in spite of y even a secas:\n• Truco: despite e in spite of van con una cosa, no con una frase completa (lo viste en G06). Even solo no une dos partes: hace falta even though o even if.\n\n5. Nivel avanzado (opcional):\n• Although y though significan lo mismo que even though, con un poco menos de fuerza.\n• \"Although of\" no existe.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) La frase cuenta algo que pasó ("doubled the cache yesterday", "the vendor patched it last week", "the DBA warned") ➔ even though.\n2) La frase plantea algo que podría pasar ("manages to bypass… tonight", "loses power", "they claim", "the client offered") ➔ even if.\n3) Detrás del hueco hay una frase completa ➔ Despite, In spite of, Despite of o In spite son trampa. However, whereas, unless o because tampoco encajan con "aunque".',
    examples: [
      {
        en: 'Even though the engineering team doubled the Redis cache memory yesterday, the API response times remained above 500ms.',
        highlight: 'Even though',
        es: 'Aunque el equipo de ingeniería duplicó ayer la memoria de la caché de Redis, los tiempos de respuesta de la API siguieron por encima de 500 ms.',
        explanation: 'Ya pasó (yesterday) ➔ even though.'
      },
      {
        en: 'Even if an attacker manages to bypass the perimeter firewall tonight, the encrypted volumes will remain unreadable.',
        highlight: 'Even if',
        es: 'Incluso si un atacante consigue saltarse el firewall perimetral esta noche, los volúmenes cifrados seguirán siendo ilegibles.',
        explanation: 'Podría pasar (tonight, manages to) ➔ even if, con el verbo en presente.'
      },
      {
        en: 'Do not share your root SSH private key with anyone, even if they claim to be from the internal audit team.',
        highlight: 'even if',
        es: 'No compartas tu clave privada SSH de root con nadie, aunque digan que son del equipo de auditoría interna.',
        explanation: 'Algo que alguien podría decir ➔ even if.'
      },
      {
        en: 'Even though the vendor patched the authentication library last week, researchers found a bypass this morning.',
        highlight: 'Even though',
        es: 'Aunque el proveedor parcheó la librería de autenticación la semana pasada, unos investigadores encontraron una forma de saltársela esta mañana.',
        explanation: 'Ya pasó (last week) ➔ even though.'
      },
      {
        en: 'The disaster recovery site will take over traffic within thirty seconds, even if the entire primary datacenter loses power.',
        highlight: 'even if',
        es: 'El sitio de recuperación asumirá el tráfico en treinta segundos, incluso si todo el centro de datos principal se queda sin luz.',
        explanation: 'Plan de contingencia: algo que podría pasar ➔ even if.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"Even if the patch was tested in staging, it failed in production.\"\n  ✓ \"Even though the patch was tested in staging, it failed in production.\"\n  Por qué pasa: \"aunque\" vale para todo en español. Pero el parche sí se probó: es un hecho, así que va even though.\n• ❌ \"Even though the server goes down tonight, users can work offline.\"\n  ✓ \"Even if the server goes down tonight, users can work offline.\"\n  Por qué pasa: la caída todavía no ha ocurrido. Algo que podría pasar va con even if.\n• ❌ \"Despite the engineer worked all night, the stand-up started on time.\"\n  ✓ \"Even though the engineer worked all night, the stand-up started on time.\"\n  Por qué pasa: \"a pesar de que\" nos lleva a despite. Con una frase completa detrás, va even though.\n• ❌ \"Even the link failed, traffic continued.\"\n  ✓ \"Even though the link failed, traffic continued.\"\n  Por qué pasa: \"incluso\" sale como even. Para unir dos partes hace falta even though o even if.",
    cheatSheetRule: '"Aunque" + algo que es verdad o ya pasó ➔ even though. "Aunque / incluso si" + algo que podría pasar ➔ even if (con presente para el futuro). Prueba: si cabe "incluso si", es even if. Despite e in spite of, solo con una cosa.',
    mentalShortcut: '⚡ "aunque" + algo que ya pasó ➔ even though | "incluso si" + algo que podría pasar ➔ even if | si cabe "incluso si" ➔ even if | frase completa detrás ➔ nunca despite'
  },

  G25: {
    topicId: 'G25',
    titleEs: '"Había hecho" frente a "hizo" (had + 3.ª forma)',
    formula: '',
    summaryEs: "Cuando cuentas un incidente en pasado, en español distingues \"borró\" de \"había borrado\". En inglés pasa lo mismo, y es la clave para saber qué ocurrió primero:\n• \"El intruso había borrado el historial antes de cerrar la sesión\" ➔ The intruder HAD WIPED the history before terminating the session.\n• \"Cuando llegamos, el clúster ya se había recuperado\" ➔ When we arrived, the cluster HAD already RECOVERED.\n• \"Llevaban todo el día investigando cuando encontraron la causa\" ➔ They HAD BEEN INVESTIGATING all day when they found the cause.\n• \"Últimamente el equipo ha estado con mucho trabajo\" ➔ The team HAS BEEN DEALING with a huge workload recently.\n\n1. \"Había hecho\" (lo que pasó primero, en una historia en pasado) ➔ had + 3.ª forma:\n• 3.ª forma: la que en español sería \"borrado, olvidado, recuperado\": wiped, forgotten, recovered.\n• Truco: si en español dirías \"había…\", va had. Pistas: before, by the time, already, because, discovered that, realized that.\n\n2. \"Hizo\" (lo que pasó después, o el momento de referencia) ➔ el pasado normal:\n• Truco: cuenta la historia en orden. Lo primero con had; lo que vino después, normal: detected, realized, arrived.\n\n3. \"Llevaba / había estado haciendo…\" (algo que duró hasta un momento del pasado) ➔ had been + -ing:\n• Ejemplo: \"They had been running tests continuously before they found the root cause\" = llevaban haciendo pruebas sin parar antes de encontrar la causa.\n\n4. \"Ha estado / ha hecho…\" (llega hasta hoy) ➔ has / have (been):\n• Truco: si llega hasta ahora (recently, since 2018, \"And now it has!\"), va has / have, no had.\n• Ojo: \"have just found out\" = acaban de enterarse (ahora mismo).\n\n5. Los nombres que verás en las opciones:\n• Past Simple: \"hizo\" (determined, allowed).\n• Past Perfect: \"había hecho\" (had determined).\n• Present Perfect: \"ha hecho\" (has determined).\n• Present Continuous: \"está haciendo\" (is determining).\n• Present Perfect Continuous: \"ha estado haciendo\" (has been determining).\n• Past Perfect Continuous: \"había estado haciendo\" (had been determining).\n\n6. Nivel avanzado (opcional):\n• No sooner had… than / Hardly had… when: \"No sooner had the engineer applied the rule than the office lost connectivity\" (lo viste en G07).\n• Until… had never: \"Until last month, the company had never run a vishing simulation\" = hasta el mes pasado, la empresa nunca había hecho una simulación de vishing.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Dos cosas en el pasado, y el hueco en la que pasó primero (before, by the time, already, because, discovered that) ➔ had + 3.ª forma. "has wiped", el presente o -ing son trampa.\n2) Algo que duró hasta un momento del pasado ("all day", "continuously", "for over forty-eight hours") ➔ had been + -ing, o had + 3.ª forma.\n3) Algo que llega hasta hoy ("recently", "since 2018", "And now it has!") ➔ has / have (been).\n4) Te piden el nombre del tiempo ➔ tradúcelo al español: "había determinado" es Past Perfect; "ha estado determinando", Present Perfect Continuous; "está determinando", Present Continuous; "permitió", Past Simple.',
    examples: [
      {
        en: 'Forensic analysis confirmed that the intruder had wiped the bash history before terminating the SSH session.',
        highlight: 'had wiped',
        es: 'El análisis forense confirmó que el intruso había borrado el historial de bash antes de cerrar la sesión SSH.',
        explanation: 'Lo que pasó primero (borrar el historial) ➔ had wiped.'
      },
      {
        en: 'By the time the on-call SRE acknowledged the alert, the cluster had already self-healed.',
        highlight: 'had already self-healed',
        es: 'Para cuando la persona de guardia confirmó la alerta, el clúster ya se había recuperado solo.',
        explanation: 'By the time + pasado normal (acknowledged); lo anterior ➔ had already self-healed.'
      },
      {
        en: 'They had been running tests continuously before they found the root of the problem.',
        highlight: 'had been running',
        es: 'Llevaban haciendo pruebas sin parar antes de encontrar el origen del problema.',
        explanation: '"Llevaban haciendo" hasta un momento del pasado ➔ had been running.'
      },
      {
        en: 'The deployment pipeline failed because the developer had forgotten to include the migration file.',
        highlight: 'had forgotten',
        es: 'El pipeline de despliegue falló porque el desarrollador había olvidado incluir el archivo de migración.',
        explanation: 'Because + la causa, que pasó antes ➔ had forgotten.'
      },
      {
        en: 'The team has been dealing with a huge workload recently in preparation for the audit.',
        highlight: 'has been dealing',
        es: 'Últimamente el equipo ha estado con muchísimo trabajo para preparar la auditoría.',
        explanation: 'Recently: llega hasta hoy ➔ has been dealing, no had.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"When we arrived, the service has already recovered.\"\n  ✓ \"When we arrived, the service had already recovered.\"\n  Por qué pasa: \"se había recuperado\" y \"se ha recuperado\" se parecen. En una historia en pasado, va had.\n• ❌ \"By the time Tier 2 diagnosed the loop, the switch had drop two million packets.\"\n  ✓ \"By the time Tier 2 diagnosed the loop, the switch had dropped two million packets.\"\n  Por qué pasa: con had pensamos que ya está todo dicho. Después de had va la 3.ª forma: dropped.\n• ❌ \"They have been investigating all day before they found a solution.\"\n  ✓ \"They had been investigating all day before they found a solution.\"\n  Por qué pasa: \"habían estado investigando\" se nos queda en \"han estado\". Si terminó en el pasado (before they found), va had.\n• ❌ \"Hardly had the load balancer come back online than a second wave hit.\"\n  ✓ \"Hardly had the load balancer come back online when a second wave hit.\"\n  Por qué pasa: lo mezclamos con No sooner… than. Hardly se cierra con when.",
    cheatSheetRule: 'Lo que pasó primero en una historia en pasado ➔ had + 3.ª forma. Lo que vino después ➔ pasado normal. Duró hasta un momento del pasado ➔ had been + -ing. Llega hasta hoy ➔ has / have (been).',
    mentalShortcut: '⚡ "había hecho" (pasó primero) ➔ had wiped | "hizo" (después) ➔ detected, realized | "llevaba haciendo" ➔ had been running | "ha estado / ha hecho" (hasta hoy) ➔ has been dealing'
  },

  // ==========================================
  // APPENDIX REINFORCEMENT TOPICS
  // ==========================================
  G27: {
    topicId: 'G27',
    titleEs: '"Only if" y condiciones sin "if" (Had, Were, Should)',
    formula: '',
    summaryEs: "En español, \"solo si\" y \"si\" no cambian el orden de la frase. En inglés formal, cuando empiezas con \"Only if\" o quitas el \"if\", aparece el orden de pregunta (el mismo de G07):\n• \"Solo si falla el enlace, el router activará la ruta secundaria\" ➔ Only if the link fails WILL THE ROUTER activate the secondary route.\n• \"Si hubiéramos sabido lo del SDK, no lo habríamos integrado\" ➔ HAD WE known about the SDK, we would never have integrated it.\n• \"Si el clúster llegara a fallar, la réplica tomaría el control\" ➔ WERE THE CLUSTER to fail, the replica would take over.\n• \"Si la latencia supera los 150 ms, el balanceador moverá el tráfico\" ➔ SHOULD THE LATENCY exceed 150 ms, the load balancer will shift traffic.\n\n1. \"Solo si…\" ➔ Only if + condición normal, y la segunda parte en orden de pregunta:\n• Truco: la parte de Only if va normal (\"Only if the link fails\"). La otra va como una pregunta: \"will the router activate…?\".\n• Ojo: si la segunda parte no tiene verbo pequeño, añade do / does como al preguntar: \"Only if all tests pass does the pipeline deploy the build.\"\n\n2. \"Si hubiera pasado…, habría…\" (algo que no pasó) ➔ If + had + 3.ª forma, would have + 3.ª forma:\n• 3.ª forma: la que en español sería \"implementado, desplegado, sabido\": implemented, deployed, known.\n• Truco: \"hubiera\" ➔ had. \"Habría\" ➔ would have. Would va solo en la parte del resultado.\n\n3. \"Si yo fuera… / si la app fuera…\" (algo imaginario ahora) ➔ were, con todos:\n• Truco: If I were in charge, If the app were stateless. Aunque sea I o una sola cosa, va were.\n\n4. \"Si…\" formal sin if ➔ Had / Were… to / Should al principio, en orden de pregunta:\n• Had we known… = If we had known… (si hubiéramos sabido…)\n• Were the cluster to fail… = If the cluster were to fail… (si el clúster llegara a fallar…)\n• Should the latency exceed… = If the latency exceeds… (si la latencia supera…)\n• Truco: mira lo que viene después del hueco. \"we known\" pide Had; \"the cluster to fail\" pide Were; \"the latency exceed\" pide Should.\n\n5. Nivel avanzado (opcional):\n• Mezcla de pasado y presente: \"If we had patched the server, we wouldn't be offline now\" = si hubiéramos parcheado el servidor, ahora no estaríamos caídos.\n• Was en vez de were: en conversación se oye \"If I was in charge\". En textos formales, usa were.\n• Should con una orden: \"Should the link fail, page the on-call engineer\" = si el enlace falla, avisa al ingeniero de guardia.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) La frase empieza con Only if y el hueco está en la segunda parte ➔ la opción en orden de pregunta ("will the system allow", "do we authorize", "does the bastion grant"). Las trampas mantienen el orden normal ("the system will allow").\n2) El hueco está al principio y no hay if ➔ mira lo que sigue: "the cluster to fail" pide Were; "we known" pide Had; "the latency exceed" pide Should.\n3) Una parte tiene would have ➔ la otra lleva had + 3.ª forma ("had implemented", "had not taken"). Y al revés: si ves had + 3.ª forma, el resultado lleva would have.\n4) "If I ___ in charge" o "If the app ___ stateless" ➔ were.',
    examples: [
      {
        en: 'Only if the primary edge circuit suffers packet loss will the router initiate secondary BGP peering.',
        highlight: 'will the router',
        es: 'Solo si el circuito de borde principal pierde paquetes, el router iniciará el peering BGP secundario.',
        explanation: 'La parte de Only if va normal; la segunda, en orden de pregunta: will the router initiate.'
      },
      {
        en: 'Only if all three quorum nodes agree does the distributed cluster commit the transaction.',
        highlight: 'does the distributed cluster',
        es: 'Solo si los tres nodos del quórum están de acuerdo, el clúster distribuido confirma la transacción.',
        explanation: 'La segunda parte no tenía verbo pequeño: se añade does, como en "Does the cluster commit…?".'
      },
      {
        en: 'If the security patch had been deployed earlier, the ransomware would not have encrypted the file share.',
        highlight: 'had been deployed / would not have encrypted',
        es: 'Si el parche de seguridad se hubiera desplegado antes, el ransomware no habría cifrado el recurso compartido.',
        explanation: '"Se hubiera desplegado" ➔ had been deployed. "No habría cifrado" ➔ would not have encrypted.'
      },
      {
        en: 'Had we known that the SDK used a deprecated library, we would never have integrated it.',
        highlight: 'Had we known',
        es: 'Si hubiéramos sabido que el SDK usaba una librería obsoleta, nunca lo habríamos integrado.',
        explanation: 'Sin if: Had al principio = "si hubiéramos". El orden es el de una pregunta: Had we known…?'
      },
      {
        en: 'Were the primary database cluster to fail, the replica in Ireland would be promoted within sixty seconds.',
        highlight: 'Were / to fail',
        es: 'Si el clúster principal de base de datos llegara a fallar, la réplica de Irlanda pasaría a ser la principal en menos de sesenta segundos.',
        explanation: 'Sin if: Were + la cosa + to = "si llegara a…". Siempre were, aunque sea una sola cosa.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"Only if the circuit fails, the router will initiate peering.\"\n  ✓ \"Only if the circuit fails will the router initiate peering.\"\n  Por qué pasa: en español \"solo si\" no cambia nada, así que copiamos el orden normal en la segunda parte.\n• ❌ \"Only if does the circuit fail will the router initiate peering.\"\n  ✓ \"Only if the circuit fails will the router initiate peering.\"\n  Por qué pasa: al aprender la regla, es fácil darle la vuelta a la parte equivocada. La parte de Only if va siempre normal.\n• ❌ \"If the patch would have been deployed, the attack would have failed.\"\n  ✓ \"If the patch had been deployed, the attack would have failed.\"\n  Por qué pasa: \"hubiera\" y \"habría\" se parecen, y ponemos would en las dos partes. Would solo va en la parte del resultado.\n• ❌ \"Was the cluster to fail, the replica would take over.\"\n  ✓ \"Were the cluster to fail, the replica would take over.\"\n  Por qué pasa: con una sola cosa (the cluster), el oído pide was. En esta forma siempre es were.",
    cheatSheetRule: 'Only if…: la segunda parte en orden de pregunta (will the router…). Si hubiera…, habría… ➔ had + 3.ª forma, would have + 3.ª forma. Sin if ➔ Had we known / Were it to fail / Should it fail. Si yo fuera… ➔ were.',
    mentalShortcut: '⚡ "Solo si…" ➔ Only if X happens will the router… | "Si hubiéramos… habríamos…" ➔ If we had…, we would have… | "Si…" sin if ➔ Had we known / Were it to fail / Should it fail | "Si yo fuera…" ➔ If I were (nunca was)'
  },

  G28: {
    topicId: 'G28',
    titleEs: 'Due to, because of y because ("debido a", "porque")',
    formula: '',
    summaryEs: "En español \"debido a\" va con una cosa y \"porque\" con una frase completa. En inglés pasa lo mismo, y es justo lo que hay que mirar:\n• \"La caída se debió a un corte de fibra\" ➔ The outage was DUE TO a fiber cut.\n• \"El switch descartaba paquetes por la fragmentación de memoria\" ➔ The switch dropped packets BECAUSE OF memory fragmentation.\n• \"Debido a una vulnerabilidad crítica, hay que parchear los contenedores\" ➔ OWING TO a critical vulnerability, all containers must be patched.\n• \"El backup falló porque el disco se quedó sin espacio\" ➔ The backup failed BECAUSE the disk ran out of space.\n\n1. \"Debido a / a causa de / por\" + una cosa ➔ due to, because of u owing to:\n• Truco: si detrás solo hay una cosa (a fiber cut, the update, thread-pool exhaustion), elige una de estas tres.\n• Ojo: siempre llevan su to u of: due to, because of, owing to. \"Due of\", \"owing\" a secas o because a secas delante de una cosa son errores.\n\n2. \"Porque\" + una frase completa ➔ because (o since):\n• Truco: si detrás hay alguien haciendo algo (\"the disk ran out\", \"the token had expired\"), va because, sin of.\n\n3. \"Se debió a…\" (después de was / is) ➔ was due to:\n• Truco: es la forma más natural en un informe de incidente: \"The outage was due to…\".\n• Ojo: is attributable to significa lo mismo y es todavía más formal.\n\n4. \"Debido al hecho de que\" + frase ➔ due to the fact that:\n• Truco: the fact that convierte la frase en una cosa, y por eso puede ir detrás de due to.\n\n5. Nivel avanzado (opcional):\n• Was because of: \"The outage was because of a fiber cut\" se oye y no es un error, pero en un informe formal suena mejor was due to.\n• Al principio de la frase valen Owing to, Due to y Because of: \"Due to supply chain delays, the servers will arrive next quarter.\"\n• Since también significa \"desde\". Lo ves a fondo en G15.",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) Detrás del hueco hay una cosa ("___ an abnormal surge in spam") ➔ because of, due to u owing to. Because a secas, since o due of son trampa.\n2) Detrás del hueco hay una frase con alguien haciendo algo ("___ the storage volume ran out") ➔ because o since. Because of, due to y owing to son trampa.\n3) Después de was / is ("was ___ a misconfigured route") ➔ due to, o attributable to.\n4) "___ the fact that" ➔ due to.',
    examples: [
      {
        en: 'The unexpected database service disruption was due to an unhandled deadlock exception.',
        highlight: 'was due to',
        es: 'La interrupción inesperada del servicio de base de datos se debió a una excepción de interbloqueo no controlada.',
        explanation: '"Se debió a" + una cosa ➔ was due to.'
      },
      {
        en: 'The edge switch dropped packets because of severe memory fragmentation in the routing table.',
        highlight: 'because of',
        es: 'El switch de borde descartaba paquetes por una fragmentación de memoria severa en la tabla de enrutamiento.',
        explanation: '"Por" + una cosa (memory fragmentation) ➔ because of, con of.'
      },
      {
        en: 'Owing to a critical vulnerability in the logging library, all production containers must be patched tonight.',
        highlight: 'Owing to',
        es: 'Debido a una vulnerabilidad crítica en la librería de logs, hay que parchear todos los contenedores de producción esta noche.',
        explanation: '"Debido a" al principio + una cosa ➔ Owing to (o Due to).'
      },
      {
        en: 'The nightly backup failed because the storage volume ran out of free inodes.',
        highlight: 'because',
        es: 'El backup nocturno falló porque el volumen de almacenamiento se quedó sin inodos libres.',
        explanation: '"Porque" + frase completa (the volume ran out) ➔ because, sin of.'
      },
      {
        en: 'The migration timeline was extended due to the fact that the legacy schema contained undocumented triggers.',
        highlight: 'due to the fact that',
        es: 'El plazo de la migración se amplió debido a que el esquema antiguo tenía triggers sin documentar.',
        explanation: '"Debido a que" + frase ➔ due to the fact that.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"The switch dropped packets because severe fragmentation.\"\n  ✓ \"The switch dropped packets because of severe fragmentation.\"\n  Por qué pasa: \"por\" es una sola palabra en español y la traducimos con una sola: because. Delante de una cosa hace falta because of.\n• ❌ \"The server crashed because of the disk was full.\"\n  ✓ \"The server crashed because the disk was full.\"\n  Por qué pasa: después de practicar because of, lo usamos para todo. Delante de una frase completa va because a secas.\n• ❌ \"The outage was due of a fiber cut.\"\n  ✓ \"The outage was due to a fiber cut.\"\n  Por qué pasa: mezclamos because of con due to y sale due of. Due siempre va con to.\n• ❌ \"Owing a critical vulnerability, all containers must be patched.\"\n  ✓ \"Owing to a critical vulnerability, all containers must be patched.\"\n  Por qué pasa: owing parece una palabra completa, pero siempre va con to.",
    cheatSheetRule: '"Debido a / por" + una cosa ➔ due to, because of u owing to. "Porque" + frase ➔ because o since. "Se debió a…" ➔ was due to. "Debido a que" + frase ➔ due to the fact that.',
    mentalShortcut: '⚡ "debido a / por" + una cosa ➔ due to / because of / owing to | "porque" + una frase ➔ because (sin of) | "se debió a…" ➔ was due to | "debido a que" + frase ➔ due to the fact that'
  },

  G29: {
    topicId: 'G29',
    titleEs: 'Suavizar en soporte ("me preguntaba si…", "me temo que…")',
    formula: '',
    summaryEs: "En español suavizamos con \"me preguntaba si…\", \"me gustaría que…\" o \"me temo que…\". En inglés se hace igual, y muchas veces con el verbo en pasado aunque hables de ahora:\n• \"Me preguntaba si podrías enviarme los logs\" ➔ I WAS WONDERING if you could send me the logs.\n• \"Me gustaría que lo investigaras\" ➔ I'D LIKE YOU TO investigate further.\n• \"Estaba pensando que podríamos revertir el cambio\" ➔ I WAS THINKING we might roll back the change.\n• \"Me temo que eso no me cuadra\" ➔ I'M AFRAID that doesn't sound right to me.\n\n1. Pedir algo con suavidad ➔ I was wondering if you could / I was hoping you could + verbo limpio:\n• Truco: el pasado (was wondering, was hoping) no habla del pasado: solo suaviza. Después de could, el verbo limpio: if you could send.\n• Ojo: también valen We hoped you would… y I was just wondering if there is any update…\n\n2. \"Me gustaría que… / me gustaría saber…\" ➔ I'd like you to + verbo / I'd like to know:\n• Truco: I'd like you to investigate, nunca \"I'd like that you investigate\".\n\n3. Proponer sin imponer ➔ I was thinking we might… / I thought perhaps… / It might be worth… / Perhaps it would be safer to…:\n• Ejemplo: \"I was thinking it might be worth adding a circuit breaker\" = estaba pensando que quizá merezca la pena añadir un circuit breaker.\n• Ojo: después de might, el verbo limpio: might be, might refactor.\n\n4. No estar de acuerdo o no estar seguro, con tacto ➔ I'm afraid…, I'm not entirely certain…, I have some doubts…:\n• Frases hechas: I'm afraid that doesn't sound right to me · I'm not entirely certain that's true · I'm not absolutely sure · I have some doubts over… · It would seem that the subnet mask is slightly off.\n• Truco: not va delante de entirely y absolutely: not entirely, not absolutely.\n\n5. Decir lo que sabes, con cautela ➔ To the best of my knowledge / As far as I am aware:\n• Truco: son bloques fijos. To the best of my knowledge = que yo sepa. As far as I am aware = hasta donde yo sé.\n\n6. Nivel avanzado (opcional):\n• Ofrecer ayuda con suavidad: \"Did you want me to escalate the ticket?\" suena más amable que \"Do you want me to…?\".\n• Pedir permiso: \"Would you mind if I enabled the debug flag?\" (lo viste en G09).",
    howExamTestsIt: 'Cómo reconocer el patrón en una pregunta de huecos:\n1) "I was ___ if you could…" ➔ wondering. "I ___ hoping…" ➔ was. "I ___ just wondering…" ➔ was.\n2) Después de "if you could" o "might" ➔ verbo limpio (verify, be). "to verify", "verifying" o "to be" son trampa.\n3) "___ to investigate further" ➔ I\'d like you. "I\'d like that you" o "I want that you" son trampa.\n4) Frases hechas desordenadas ➔ To the best of my knowledge, As far as I am aware, I have some doubts, I am not absolutely sure, I\'m not entirely certain, that doesn\'t sound right to me.',
    examples: [
      {
        en: 'If you have a moment, I was wondering whether you could verify the updated IAM role permissions.',
        highlight: 'was wondering',
        es: 'Si tienes un momento, me preguntaba si podrías comprobar los permisos actualizados del rol IAM.',
        explanation: '"Me preguntaba si podrías" ➔ I was wondering whether you could + verify.'
      },
      {
        en: 'It seems the antivirus installation was overlooked. I’d like you to look into this issue, please.',
        highlight: 'I’d like you to',
        es: 'Parece que se pasó por alto la instalación del antivirus. Me gustaría que revisaras este problema, por favor.',
        explanation: '"Me gustaría que revisaras" ➔ I’d like you to look into.'
      },
      {
        en: 'I was thinking it might be worth adding a circuit breaker to the payment service.',
        highlight: 'might be worth',
        es: 'Estaba pensando que quizá merezca la pena añadir un circuit breaker al servicio de pagos.',
        explanation: 'Proponer sin imponer ➔ might be worth + adding.'
      },
      {
        en: 'He says that everything was fully compliant, but I’m afraid that doesn’t sound right to me.',
        highlight: 'I’m afraid',
        es: 'Dice que todo cumplía la normativa, pero me temo que eso no me cuadra.',
        explanation: '"Me temo que" ➔ I’m afraid, para discrepar con tacto.'
      },
      {
        en: 'To the best of my knowledge, all of the security tests have been carried out.',
        highlight: 'To the best of my knowledge',
        es: 'Que yo sepa, se han hecho todas las pruebas de seguridad.',
        explanation: '"Que yo sepa" ➔ To the best of my knowledge.'
      }
    ],
    spanishTrapsEs: "Estos errores le pasan a casi todos los hispanohablantes. No es falta de nivel: es el español colándose en la frase.\n• ❌ \"I would wonder if you could send the logs.\"\n  ✓ \"I was wondering if you could send the logs.\"\n  Por qué pasa: \"me preguntaría\" nos lleva a would. La fórmula fija es I was wondering.\n• ❌ \"I'd like that you investigate further.\"\n  ✓ \"I'd like you to investigate further.\"\n  Por qué pasa: copiamos \"me gustaría QUE investigues\". En inglés va I'd like you to.\n• ❌ \"I was wondering if you could sent the file.\"\n  ✓ \"I was wondering if you could send the file.\"\n  Por qué pasa: como la frase está en pasado, ponemos el verbo en pasado. Después de could va limpio.\n• ❌ \"I'm entirely not certain that's true.\"\n  ✓ \"I'm not entirely certain that's true.\"\n  Por qué pasa: en español \"no estoy del todo seguro\" pone el \"no\" delante, pero lo movemos. En inglés: not entirely.",
    cheatSheetRule: 'Pedir ➔ I was wondering / I was hoping if you could + verbo limpio. "Me gustaría que" ➔ I\'d like you to. Proponer ➔ I was thinking we might / It might be worth. Discrepar ➔ I\'m afraid… / I\'m not entirely certain… Lo que sé ➔ To the best of my knowledge / As far as I am aware.',
    mentalShortcut: '⚡ "me preguntaba si podrías…" ➔ I was wondering if you could + verbo | "me gustaría que…" ➔ I\'d like you to… | "estaba pensando que podríamos…" ➔ I was thinking we might… | "me temo que no me cuadra" ➔ I\'m afraid that doesn\'t sound right to me'
  },

  V06: {
    topicId: 'V06',
    titleEs: 'Roles, Delimitación de Tareas y Delegación en IT (Guía Oficial)',
    formula: 'Beyond your scope of duties | Handled (dealt with) | Have in mind | Didn\'t do a thing | Sent back | All the same',
    summaryEs: 'Guía Oficial English for IT 1 (Module 2: Network Engineer – Interpret & Implement Instructions | 2.4 Section 4 – Reading: Job Roles and Responsibilities):\n\n1. Vocabulario Oficial de Roles y Delegación (2.4.1):\n• "Beyond your scope of duties": fuera de tus responsabilidades o ámbito de trabajo (not part of your work).\n• "Have in mind": pensar en algo, tener en consideración/planificación (thinking about).\n• "Handled": gestionado, solucionado, atendido (dealt with).\n• "Didn\'t do a thing": inacción absoluta (did nothing).\n• "Sent back": devuelto o rebotado sin tramitar (returned).\n• "All the same": a pesar de todo, no obstante (nevertheless).\n\n2. Fórmulas Fijas de Comunicación y Memos (2.4 Tip):\n• "I\'m reaching out to you regarding + [subject]": apertura ejecutiva estándar.\n• "Let me remind you of + [noun]": recordar respetuosamente una política o deber.\n• "I don\'t want to discourage you from + [gerund -ing]": corregir la extralimitación sin desalentar el compromiso.\n• "What I have in mind is that + [clause]": formular una propuesta de organización del trabajo.\n• "Please do not hesitate to + [verb base]": habilitar la delegación sin temor a parecer descortés.\n\n3. Delimitación de Tareas y Matriz de Roles (Cabling & Hardware):\n• IT Helpdesk: todo el cableado de capa de acceso de usuario (user-access layer cabling: patch cords de cobre UTP que son ordenados, almacenados e instalados por Helpdesk) y diagnósticos con analizadores/testers de cable.\n• Network Engineer: configuración de switching/routing y cableado de fibra óptica (optical cabling, única excepción física para redes).\n• Protocolo de Escalación: un ingeniero no puede obligar a otro colega a trabajar; ante peticiones ignoradas, denegadas o devueltas ("sent back"), la instrucción es reportarlo al gerente directo ("report to me, your direct manager"), quien escala la situación al par gerencial o al organigrama superior.',
    howExamTestsIt: 'En la sección de Reading y Vocabulario (R1-R4 / UE1 / UE4):\n1) Equivalencias léxicas exactas: "not part of your work" = "beyond your scope of duties"; "thinking about" = "have in mind"; "dealt with" = "handled"; "did nothing" = "didn\'t do a thing"; "returned" = "sent back"; "nevertheless" = "all the same".\n2) Patrones sintácticos del Tip: preposición + gerundio ("discourage from becoming"), infinitivo con to ("hesitate to ask"), apertura con regarding ("reaching out regarding"), régimen preposicional ("remind you of").\n3) Comprensión de lectura: identificar que Mark (networking) hizo el cableado que no le correspondía; que la fibra óptica sí es deber de redes; que delegar puede alargar el proceso pero es obligatorio; y que los incidentes de comunicación se escalan al gerente directo.',
    examples: [
      {
        en: 'Physical user-access layer cabling should be handled by the IT Helpdesk, not the networking team.',
        highlight: 'handled by the IT Helpdesk',
        es: 'El cableado físico de la capa de acceso de usuarios debe ser gestionado por el IT Helpdesk, no por el equipo de redes.',
        explanation: '"Handled" equivale exactamente a "dealt with" (atendido / ejecutado).'
      },
      {
        en: 'Running diagnostic cable analyzers on copper patch cords is beyond your scope of duties.',
        highlight: 'beyond your scope of duties',
        es: 'Ejecutar analizadores de cable diagnósticos en cables de parcheo de cobre está fuera de su alcance de funciones.',
        explanation: 'Expresión oficial para delimitar qué tareas no forman parte del puesto.'
      },
      {
        en: 'The other technician is responsible for completing the patch panel termination all the same.',
        highlight: 'all the same',
        es: 'El otro técnico es responsable de completar la terminación del panel de conexiones a pesar de todo (no obstante).',
        explanation: '"All the same" funciona como conector de contraste formal equivalente a "nevertheless".'
      },
      {
        en: 'I don’t want to discourage you from becoming as involved as you did in solving outages.',
        highlight: 'discourage you from becoming',
        es: 'No quiero desanimarle de involucrarse tanto como lo hizo al resolver caídas del servicio.',
        explanation: 'Estructura oficial: discourage someone from + gerundio (-ing).'
      }
    ],
    spanishTrapsEs: 'Interferencias del español y trampas de examen:\n• Traducir "fuera de mi puesto" literalmente: la expresión formal es "beyond your scope of duties".\n• Falso amigo de "all the same": no significa "todo igual", sino "a pesar de todo / de todos modos" (nevertheless).\n• Olvidar el gerundio tras "discourage from": nunca poner forma base (*discourage from become); siempre gerundio (becoming).\n• Creer que "didn\'t do a thing" es haber hecho una sola cosa; significa "no haber hecho absolutamente nada".\n• Confundir quién debe resolver la disputa: no puentear al jefe del otro departamento, reportar a tu direct manager.',
    cheatSheetRule: '1) "Not part of your work" -> beyond your scope of duties.\n2) "Dealt with" -> handled.\n3) "Thinking about" -> have in mind.\n4) "Did nothing" -> didn\'t do a thing.\n5) "Returned" -> sent back.\n6) "Nevertheless" -> all the same.\n7) "Discourage from" + GERUND (-ing).',
    analogyCard: {
      title: 'La Matriz RACI del Centro de Datos: ¿Quién toca qué cable?',
      metaphor: 'Un centro de datos es como una cocina de alta gastronomía: el chef repostero no se mete a despiezar carnes aunque sepa usar el cuchillo. Si un ingeniero de redes se pone a tender cables de cobre de usuario, se extralimita de su puesto ("beyond scope"), descuida el enrutamiento y genera roces con IT Helpdesk.',
      whyItWorks: 'En las certificaciones de IT, los roles son estrictos: UTP/Cobre y testers = Helpdesk; Fibra óptica y switching = Redes. Ante cualquier conflicto entre departamentos, el protocolo exige escalar a tu gerente directo.'
    },
    threeSecondTable: {
      headers: ['Frase en el memo o pregunta', 'Significado oficial de la guía', 'Acción clave en 3 segundos'],
      rows: [
        ['BEYOND YOUR SCOPE OF DUTIES', 'Not part of your job / outside your role', 'Tareas que no te corresponden hacer.'],
        ['HAVE IN MIND', 'Thinking about / planning', 'Considerar una propuesta de organización.'],
        ['DIDN\'T DO A THING', 'Did nothing at all', 'Inacción absoluta del otro departamento.'],
        ['SENT BACK', 'Returned without completing', 'Tickets o cables devueltos sin terminar.'],
        ['ALL THE SAME', 'Nevertheless / regardless', 'A pesar de todo / no obstante.'],
        ['DISCOURAGE FROM + GERUND (-ing)', 'No desanimar a alguien', 'I don\'t want to discourage you from helping.']
      ],
      rule: 'División física: Patch cords de cobre y testers ➔ Helpdesk. Fibra óptica ➔ Redes. ¿Conflicto interdepartamental? ➔ Escala a tu direct manager.'
    },
    mentalShortcut: '⚡ Fuera de tu rol = BEYOND YOUR SCOPE · Inacción = DIDN\'T DO A THING · A pesar de todo = ALL THE SAME · Cobre = Helpdesk · Fibra = Redes.'
  },

  V07: {
    topicId: 'V07',
    titleEs: 'Incidentes de Red, Escalación y Protocolos (Guía Oficial)',
    formula: 'Handled (dealt with) | Omitted (left out) | Nevertheless (sin embargo) | Eliminate risks | Right away',
    summaryEs: 'Guía Oficial English for IT 1 (Module 2: Network Engineer – Interpret & Implement Instructions | 2.2 Section 2 – Listening: Manager and Junior Network Engineer):\n\n1. Vocabulario de Incidentes y Protocolos Oficiales:\n• "Handled": gestionado, atendido, resuelto eficazmente (dealt with).\n• "Omitted": omitido, no incluido en el reporte oficial (left out).\n• "Nevertheless": no obstante, sin embargo (conector formal de contraste).\n• "Analyze": estudiar a fondo la telemetría y logs.\n• "Risks": peligros o vulnerabilidades para la red.\n• "Eliminated": suprimido por completo (eliminado el riesgo).\n• "Performance": rendimiento o velocidad del enlace/red.\n• "Right away": de forma inmediata, sin dilación (immediately).\n\n2. Protocolo de Escalación de Seguridad:\nAnte la detección de un rogue access point (punto de acceso no autorizado) o un host infectado, el ingeniero junior debe reportarlo DIRECTAMENTE y de inmediato al equipo de Seguridad de la Información (Security Team), no esperar a su gerente ni asumir la investigación en solitario.',
    howExamTestsIt: '1) Equivalencias de vocabulario técnico: "dealt with" = "handled"; "left out" = "omitted"; "immediately" = "right away".\n2) Protocolo de soporte en diálogos: identificar a quién se debe notificar primero ante una intrusión (Security team right away).',
    examples: [
      {
        en: 'The rogue access point incident was handled right away by the on-duty engineer.',
        highlight: 'handled right away',
        es: 'El incidente del punto de acceso no autorizado fue gestionado de inmediato por el ingeniero de guardia.',
        explanation: '"Handled" significa "dealt with" (atendido) y "right away" significa "immediately".'
      },
      {
        en: 'The junior technician omitted the MAC address logs in the preliminary incident report.',
        highlight: 'omitted the MAC address logs',
        es: 'El técnico junior omitió los registros de direcciones MAC en el reporte preliminar del incidente.',
        explanation: '"Omitted" equivale a "left out" (no incluir un dato).'
      },
      {
        en: 'The switch is operational; nevertheless, we must eliminate all rogue access risks.',
        highlight: 'nevertheless, we must eliminate',
        es: 'El switch está operativo; no obstante, debemos eliminar todos los riesgos de accesos no autorizados.',
        explanation: '"Nevertheless" conecta dos hechos contrastantes con formalidad ejecutiva.'
      }
    ],
    spanishTrapsEs: 'Confusiones típicas:\n• No confundir "handled" con "manoseado"; en IT siempre significa "solucionado/atendido con éxito".\n• "Omit" no es inventar, es dejar algo afuera que debió estar.\n• "Right away" es el sinónimo idiomático preferido para "immediately" en ambientes operacionales de NOC.',
    cheatSheetRule: '1) Atendido/resuelto ➔ HANDLED. 2) Dejado fuera del reporte ➔ OMITTED. 3) De inmediato ➔ RIGHT AWAY. 4) Sin embargo ➔ NEVERTHELESS. 5) Reportar primero ➔ Al Security Team.',
    analogyCard: {
      title: 'El Semáforo de Operaciones del NOC',
      metaphor: 'En un centro de operaciones de red (NOC), ante una alarma no hay tiempo para ambigüedades. Las tareas se clasifican en un semáforo binario: ¿Fue gestionada ("handled") o fue olvidada en el tintero ("omitted")? Y si hay una amenaza de seguridad, la respuesta nunca es "mañana", es "right away".',
      whyItWorks: 'En las conversaciones entre managers e ingenieros junior, estas palabras fijan si se cumplió el protocolo o si se cometió una omisión de seguridad.'
    },
    threeSecondTable: {
      headers: ['Palabra en el audio o reactivo', 'Equivalencia oficial', 'Uso en 3 segundos'],
      rows: [
        ['HANDLED', 'Dealt with / resolved', 'The rogue AP was handled right away.'],
        ['OMITTED', 'Left out / excluded', 'He omitted key logs from the ticket.'],
        ['RIGHT AWAY', 'Immediately / without delay', 'Escalate to security right away.'],
        ['NEVERTHELESS', 'However / even so', 'The link works; nevertheless, latency is high.'],
        ['ELIMINATE RISKS', 'Remove potential dangers', 'Our primary goal is to eliminate risks.']
      ],
      rule: 'Regla del protocolo: Ante intrusiones o rogue APs, notifica al Security Team RIGHT AWAY.'
    },
    mentalShortcut: '⚡ Resuelto = HANDLED · Dejado fuera = OMITTED · De inmediato = RIGHT AWAY · No obstante = NEVERTHELESS.'
  },

  V08: {
    topicId: 'V08',
    titleEs: 'Vocabulario de Producto, Métricas y UX (Guía Oficial)',
    formula: 'NPS (Net Promoter Score) | Detractors vs Promoters | UX Experience | ROI (Return on Investment)',
    summaryEs: 'Guía Oficial English for IT 1 (Module 1: Product Management – Identify Problems | 1.3 Section 3 – Listening: UX Experience & 1.5 Section 5 – Reading: Supplier Evaluation Modules):\n\n1. Métricas e Indicadores de Producto:\n• NPS (Net Promoter Score survey): indicador clave de satisfacción y recomendación de clientes.\n• Detractor: cliente que ha tenido una experiencia negativa y califica desfavorablemente (en el audio aumentaron del 10% al 14%).\n• UX Experience: la experiencia personal y grado de facilidad/fricción que tiene un usuario al interactuar con la interfaz de un producto.\n• ROI (Return on Investment): retorno económico obtenido al invertir capital en una funcionalidad.\n\n2. Términos Oficiales de Proveedores y Proyectos (1.5):\n• "Scope creep": cuando el alcance original de un proyecto crece descontroladamente por peticiones constantes del cliente, generando demoras.\n• "Secondment": transferencia temporal de un empleado de su puesto habitual a otro proyecto o departamento.\n• "To mitigate risks": reducir las probabilidades de que ocurra un problema o desastre.\n• "Worst-case scenario": el escenario más desfavorable o desagradable posible.\n• "Incremental value delivery": dividir proyectos grandes en pequeñas entregas de valor funcionales (MVP) para obtener retroalimentación temprana.',
    howExamTestsIt: 'En la sección de Listening y Reading (L1-L4 / R1-R4 / UE1):\n1) Distinción de colocaciones: "comment without detail" = "mention an issue"; "give previously unknown information" = "reveal information"; "talk about past agreements" = "go back to".\n2) Términos de gestión: "delay due to changing requests" = "scope creep"; "temporary transfer of employee" = "secondment"; "reduce chances of bad outcome" = "mitigate risks".',
    examples: [
      {
        en: 'The number of detractors who mentioned UX issues increased from 10% to 14%.',
        highlight: 'number of detractors who mentioned',
        es: 'El número de detractores que mencionaron problemas de UX aumentó del 10% al 14%.',
        explanation: 'Combina la métrica "detractors", el verbo "mention" y la referencia técnica a UX.'
      },
      {
        en: 'Despite the fact that customers desire improvements, there is no evident return on investment.',
        highlight: 'customers desire improvements... return on investment',
        es: 'A pesar de que los clientes desean mejoras, no existe un retorno de inversión evidente.',
        explanation: 'Vocabulario oficial para contrastar deseo de usuarios ("desire") con viabilidad financiera ("ROI").'
      },
      {
        en: 'If we cannot demonstrate the opportunities, we can reveal the risks of not investing.',
        highlight: 'reveal the risks of not investing',
        es: 'Si no podemos demostrar las oportunidades, podemos revelar los riesgos de no invertir.',
        explanation: 'Estrategia de mitigación y justificación técnica en reuniones ejecutivas.'
      }
    ],
    spanishTrapsEs: 'Falsos amigos y confusiones habituales:\n• "Mention" no es "describir" a fondo; es solo comentar de pasada ("without giving much detail").\n• "Detractor" es un término técnico oficial de encuestas NPS, no un adjetivo despectivo informal.\n• "Scope creep" no es un error de software, es la desviación y desborde del alcance del proyecto.\n• "Secondment" no es una segunda opción, es una asignación temporal de personal.',
    cheatSheetRule: '1) "Comment without detail" -> mention an issue.\n2) "Use money to earn money" -> invest money (ROI).\n3) "Previously unknown data" -> reveal information.\n4) "Talk about past talks" -> go back to.\n5) "Project growing beyond scope" -> scope creep.\n6) "Temporary transfer" -> secondment.',
    analogyCard: {
      title: 'El Tablero de Control del Product Manager',
      metaphor: 'Dirigir un producto de software es como pilotar una nave con dos pantallas: la pantalla de satisfacción (los clientes felices vs. los enojados que restan) y la pantalla de finanzas (¿cada dólar invertido produce retorno económico?). Si el dinero no convence a los directivos, los datos de los usuarios descontentos son tu mejor escudo.',
      whyItWorks: 'En las empresas de tecnología, el lenguaje de gestión se basa en siglas y términos muy precisos: NPS, Detractors, ROI, Scope Creep y Secondment.'
    },
    threeSecondTable: {
      headers: ['Concepto en el reactivo o audio', 'Término oficial OpenEDG', 'Significado rápido en 3 segundos'],
      rows: [
        ['Cliente insatisfecho en encuestas NPS', 'DETRACTOR', 'Califica bajo (10% ➔ 14% en audio oficial).'],
        ['Comentar por encima sin dar muchos detalles', 'MENTION AN ISSUE', 'Aludir brevemente a un problema en una reunión.'],
        ['Retorno financiero del dinero invertido', 'ROI (Return on Investment)', 'Ganancia medible de una funcionalidad.'],
        ['El proyecto crece sin control fuera de su meta', 'SCOPE CREEP', 'Retrasos por pedidos cambiantes del cliente.'],
        ['Transferencia temporal de un empleado', 'SECONDMENT', 'Mover un recurso a otro equipo o proyecto.'],
        ['Entregar en unidades pequeñas funcionales', 'INCREMENTAL VALUE DELIVERY', 'Lanzar MVPs rápidos para obtener feedback.']
      ],
      rule: 'Comprensión de gestión: Si los directivos no ven ROI inmediato, la estrategia es entrevistar a los "detractors" para "reveal the risks of not investing".'
    },
    mentalShortcut: '⚡ Mención breve = MENTION · Finanzas = ROI · Proyecto desbordado = SCOPE CREEP · Transferencia temporal = SECONDMENT.'
  },

  V01: {
    topicId: 'V01',
    titleEs: 'Vocabulario de Cloud Computing e Infraestructura (Guía Oficial)',
    formula: 'Elasticity / Scalability | Multi-tenant vs Single-tenant | Egress vs Ingress Traffic | Orchestration & High Availability',
    summaryEs: 'Dominio Léxico V01 (Cloud Computing & Infrastructure):\n\n1. Escalabilidad y Rendimiento:\n• Scalability / Elasticity: capacidad de aprovisionar o liberar nodos dinámicamente ("spin up / terminate instances") según la demanda de tráfico.\n• Latency vs. Throughput: "Latency" es el tiempo de retardo en milisegundos que tarda un paquete en viajar; "Throughput" es el volumen real de datos procesados por segundo.\n\n2. Modelos de Despliegue y Tráfico:\n• Multi-tenant architecture: múltiples clientes comparten la misma infraestructura física con aislamiento lógico estricto.\n• Ingress vs. Egress traffic: "Ingress" es el tráfico que entra a la nube (usualmente gratuito); "Egress" es el tráfico que sale hacia internet u otra región (sujeto a cargos por GB).\n• Orchestration: automatización del despliegue, escalado y salud de contenedores (ej. Kubernetes).',
    howExamTestsIt: 'El examen OpenEDG evalúa la distinción entre métricas de red/nube ("latency" vs "throughput" vs "bandwidth"), costos de salida de datos ("egress traffic") y aislamiento en arquitecturas compartidas ("multi-tenant").',
    examples: [
      {
        en: 'Compressing API payloads significantly reduced our monthly cloud egress traffic charges.',
        highlight: 'cloud egress traffic charges',
        es: 'Comprimir las cargas útiles de la API redujo significativamente nuestros cargos mensuales por tráfico saliente de la nube.',
        explanation: '"Egress traffic" se refiere específicamente a los datos que salen del entorno cloud hacia el exterior.'
      },
      {
        en: 'In a multi-tenant SaaS environment, strict logical isolation prevents data leakage between customers.',
        highlight: 'multi-tenant SaaS environment',
        es: 'En un entorno SaaS multi-inquilino, el aislamiento lógico estricto previene fugas de datos entre clientes.',
        explanation: '"Multi-tenant" describe una instancia de software que sirve a múltiples organizaciones clientes de forma aislada.'
      }
    ],
    spanishTrapsEs: 'Evita confundir "bandwidth" (ancho de banda máximo teórico de un enlace) con "throughput" (rendimiento real efectivo) o "latency" (demora en ms).',
    cheatSheetRule: '1) Datos que salen de la nube ➔ EGRESS. 2) Múltiples clientes aislados en un mismo clúster ➔ MULTI-TENANT. 3) Retardo en milisegundos ➔ LATENCY.',
    analogyCard: {
      title: 'El Edificio de Apartamentos Cloud (Multi-Tenant)',
      metaphor: 'Un entorno "multi-tenant" es como un edificio de apartamentos de lujo: todos los inquilinos comparten los cimientos, el agua y los ascensores (los servidores físicos), pero cada uno tiene su propia cerradura blindada (aislamiento lógico). Y el "egress traffic" es el peaje que te cobran solo al salir del edificio.',
      whyItWorks: 'Te permite distinguir al instante entre infraestructura dedicada ("single-tenant") y compartida ("multi-tenant"), y entre tráfico entrante ("ingress") y saliente ("egress").'
    },
    threeSecondTable: {
      headers: ['Pista en el enunciado', 'Término Cloud exacto', 'Uso en 3 segundos'],
      rows: [
        ['Datos que salen del proveedor cloud al exterior', 'EGRESS TRAFFIC', 'High egress charges from S3 buckets.'],
        ['Varios clientes compartiendo infraestructura aislada', 'MULTI-TENANT', 'Multi-tenant database architecture.'],
        ['Coordinación automática de contenedores/pods', 'ORCHESTRATION', 'Kubernetes container orchestration.'],
        ['Tiempo de retardo de ida y vuelta en ms', 'LATENCY', 'Ultra-low latency for real-time trading.']
      ],
      rule: '¿Sale de la nube? = Egress. ¿Entra a la nube? = Ingress. ¿Retardo temporal? = Latency.'
    },
    mentalShortcut: '⚡ Salida de nube = EGRESS · Clientes compartidos aislados = MULTI-TENANT · Retardo en ms = LATENCY.'
  },

  V02: {
    topicId: 'V02',
    titleEs: 'Compiladores vs. Intérpretes y Ejecución de Código (Guía Oficial)',
    formula: 'Source Code -> Compiler -> Machine Binary (AOT) | Source Code -> Interpreter -> Line-by-Line Runtime | Bytecode & JIT',
    summaryEs: 'Dominio Léxico V02 (Compilers vs Interpreters):\n\n1. Compilación (Compilation):\n• Un "compiler" traduce todo el código fuente ("source code") a código máquina binario ("machine code / executable binary") ANTES de la ejecución. Detecta errores de sintaxis y tipos en tiempo de compilación ("compile-time").\n\n2. Interpretación (Interpretation) y JIT:\n• Un "interpreter" analiza y ejecuta el código fuente línea por línea en tiempo real ("at runtime"), ofreciendo portabilidad inmediata pero mayor sobrecarga de ejecución ("runtime overhead").\n• "Bytecode" y "JIT (Just-In-Time) compilation": lenguajes como Java o C# compilan primero a un código intermedio ("bytecode") que la máquina virtual compila a código nativo en caliente durante la ejecución.',
    howExamTestsIt: 'Evalúa la diferencia entre traducción previa completa ("ahead-of-time compilation" -> "binary executable") y traducción línea por línea durante la ejecución ("interpreter at runtime"), así como "compile-time" vs "runtime errors".',
    examples: [
      {
        en: 'Unlike an interpreter, a compiler translates the entire source code into machine binary before execution.',
        highlight: 'translates the entire source code into machine binary',
        es: 'A diferencia de un intérprete, un compilador traduce todo el código fuente a binario máquina antes de la ejecución.',
        explanation: 'Definición contrastiva fundamental entre compilador e intérprete.'
      },
      {
        en: 'Just-In-Time (JIT) compilation optimizes hot bytecode paths into native machine instructions at runtime.',
        highlight: 'optimizes hot bytecode paths',
        es: 'La compilación Just-In-Time (JIT) optimiza las rutas frecuentes de bytecode a instrucciones nativas en tiempo de ejecución.',
        explanation: 'Combina la portabilidad del bytecode con la velocidad del código nativo.'
      }
    ],
    spanishTrapsEs: 'No confundas "compile-time error" (el programa ni siquiera genera el binario por error sintáctico o de tipos) con "runtime exception" (el programa compiló bien pero falla al ejecutarse, ej. división por cero o puntero nulo).',
    cheatSheetRule: '1) Traduce todo antes de correr ➔ COMPILER. 2) Traduce línea por línea al correr ➔ INTERPRETER. 3) Código intermedio de VM ➔ BYTECODE.',
    analogyCard: {
      title: 'El Traductor de Libros vs. El Intérprete Simultáneo de la ONU',
      metaphor: 'Un COMPILADOR es quien toma un libro entero en japonés, se encierra una semana y te entrega el libro completo impreso en español (el binario listo para leer a toda velocidad). Un INTÉRPRETE es el traductor simultáneo en una conferencia: va traduciendo frase por frase en vivo mientras el orador habla (en "runtime").',
      whyItWorks: 'Explica por qué el código compilado tarda en prepararse pero corre rapidísimo, mientras que el interpretado arranca al instante pero traduce sobre la marcha.'
    },
    threeSecondTable: {
      headers: ['Descripción en la pregunta', 'Término técnico exacto', 'Ejemplo clave'],
      rows: [
        ['Traduce todo el programa a binario antes de ejecutar', 'COMPILER', 'C++ and Rust use ahead-of-time compilers.'],
        ['Ejecuta instrucciones línea por línea en vivo', 'INTERPRETER', 'Python scripts run via an interpreter.'],
        ['Representación intermedia ejecutada por una VM', 'BYTECODE', 'Java compiles source files into JVM bytecode.'],
        ['Fallo que ocurre mientras el sistema está en marcha', 'RUNTIME EXCEPTION', 'A null pointer triggered a runtime exception.']
      ],
      rule: '¿Todo antes de ejecutar? = Compiler. ¿Línea por línea en ejecución? = Interpreter.'
    },
    mentalShortcut: '⚡ Todo a binario antes = COMPILER · Línea por línea en vivo = INTERPRETER · Código intermedio VM = BYTECODE.'
  },

  V03: {
    topicId: 'V03',
    titleEs: 'Soporte al Cliente, Desescalada y Gestión de SLAs (Guía Oficial)',
    formula: 'Bug / Defect vs Design Constraint (Feature) | Workaround vs Permanent Fix | Empathy & De-escalation',
    summaryEs: 'Dominio Léxico V03 (Customer Support & SLA Escalation — "A Feature, Not a Bug"):\n\n1. Clasificación de Incidentes:\n• Bug / Defect: comportamiento erróneo no intencionado que incumple la especificación.\n• Design constraint / Security feature: restricción intencional (ej. cerrar sesión tras 10 minutos de inactividad por seguridad).\n• Workaround: solución alternativa temporal para que el cliente siga operando mientras se desarrolla el parche definitivo ("permanent hotfix").\n\n2. Comunicación Empática y Desescalada:\n• Evitar respuestas cortantes como "It\'s a feature, not a bug".\n• Explicar el modelo de amenaza ("threat model") que mitiga la medida y ofrecer alternativas prácticas de flujo de trabajo (como SSO o certificados persistentes).',
    howExamTestsIt: 'Evalúa cómo comunicar restricciones de seguridad sin alienar al usuario final, y la diferencia entre "workaround" (mitigación temporal), "root-cause fix" (solución definitiva) y "SLA breach" (incumplimiento de nivel de servicio).',
    examples: [
      {
        en: 'Rather than reciting rigid policy jargon, support engineers ought to explain the threat model and offer a practical workaround.',
        highlight: 'explain the threat model and offer a practical workaround',
        es: 'En lugar de recitar jerga rígida de políticas, los ingenieros de soporte deberían explicar el modelo de amenaza y ofrecer una solución temporal práctica.',
        explanation: 'Principio central del texto oficial "A Feature, Not a Bug".'
      },
      {
        en: 'We deployed a configuration workaround to restore service before the SLA breach threshold was reached.',
        highlight: 'configuration workaround to restore service',
        es: 'Desplegamos una solución alternativa de configuración para restaurar el servicio antes de alcanzar el umbral de incumplimiento del SLA.',
        explanation: 'Uso preciso de "workaround" y "SLA breach".'
      }
    ],
    spanishTrapsEs: 'No confundas "workaround" (un rodeo o solución provisional operativa) con "patch/hotfix" (corrección en el código), ni uses "reclaim" para decir "reclamo de cliente" (reclamo es "complaint").',
    cheatSheetRule: '1) Solución provisional ➔ WORKAROUND. 2) Calmar a un cliente furioso ➔ DE-ESCALATE. 3) Cierre automático por seguridad ➔ INTENTIONAL SECURITY CONTROL.',
    analogyCard: {
      title: 'El Puente Provisional (Workaround) vs. El Puente Definitivo (Hotfix)',
      metaphor: 'Si se cae un puente en la autopista, habilitar un desvío señalizado para que los camiones no se queden parados hoy mismo es un "WORKAROUND". Reconstruir el puente de hormigón es el "PERMANENT FIX".',
      whyItWorks: 'En soporte IT bajo SLA, primero entregas un workaround para restaurar la operación del cliente y luego corriges la causa raíz en el backlog.'
    },
    threeSecondTable: {
      headers: ['Situación en Soporte Técnico', 'Concepto Oficial B2', 'Aplicación inmediata'],
      rows: [
        ['Solución alternativa temporal para seguir trabajando', 'WORKAROUND', 'Provide a temporary workaround.'],
        ['Reducir la frustración y tensión en una llamada crítica', 'DE-ESCALATION', 'Use empathy for customer de-escalation.'],
        ['Incumplimiento del tiempo máximo de respuesta pactado', 'SLA BREACH', 'Prevent a critical SLA breach.'],
        ['Comportamiento intencional percibido como fallo', 'DESIGN CONSTRAINT / FEATURE', 'Idle timeout is a security control, not a bug.']
      ],
      rule: 'Ante quejas por controles de seguridad, nunca digas solo "it\'s a feature": explica el riesgo que previene y ofrece una alternativa.'
    },
    mentalShortcut: '⚡ Solución provisional = WORKAROUND · Bajar tensión = DE-ESCALATE · Incumplir plazo = SLA BREACH.'
  },

  V04: {
    topicId: 'V04',
    titleEs: 'Ingeniería Social, Vishing y Llamadas Fraudulentas (Guía Oficial)',
    formula: 'Pretexting (Escenario falso) | Vishing (Voz) vs Phishing (Email) | Impersonation (Suplantación) | Credential Harvesting',
    summaryEs: 'Dominio Léxico V04 (Social Engineering & Fraudulent Calls):\n\n1. Vectores de Manipulación Psicológica:\n• Social Engineering: manipular a personas para que entreguen información confidencial o salten controles de seguridad, explotando la urgencia, autoridad o miedo.\n• Vishing (Voice Phishing): intento de fraude realizado mediante llamadas telefónicas o mensajes de voz.\n• Pretexting: fabricar una historia o pretexto elaborado (ej. fingir estar varado en un aeropuerto antes de una junta ejecutiva) para ganarse la confianza o presionar al operador.\n• Impersonation: hacerse pasar por otra persona (un directivo, auditor o técnico de otro equipo).\n• Red flags: señales de alerta de fraude (prisa extrema, negarse a pasar por canales de verificación estándar, exigir desactivar MFA).',
    howExamTestsIt: 'En Listening y Use of English se evalúa identificar la táctica exacta del atacante ("pretexting", "vishing", "impersonation") y la respuesta correcta del analista (negarse a saltar el protocolo y verificar por un canal secundario / "out-of-band verification").',
    examples: [
      {
        en: 'The caller used pretexting, claiming he was stranded at an airport before an executive board presentation.',
        highlight: 'used pretexting, claiming he was stranded',
        es: ' quien llamó utilizó un pretexto fabricado, afirmando que estaba varado en un aeropuerto antes de una presentación ante la junta ejecutiva.',
        explanation: '"Pretexting" es la invención de una situación de crisis verosímil para forzar una excepción de seguridad.'
      },
      {
        en: 'Refusing to complete standard callback verification is a major social engineering red flag.',
        highlight: 'social engineering red flag',
        es: 'Negarse a completar la verificación estándar por devolución de llamada es una señal de alerta mayor de ingeniería social.',
        explanation: '"Red flag" designa cualquier indicador inequívoco de intento de intrusión o engaño.'
      }
    ],
    spanishTrapsEs: 'No confundas "impersonation" (suplantación de identidad) con "personalization" (personalización), ni uses "phishing" cuando el ataque ocurre exclusivamente por llamada de voz ("vishing").',
    cheatSheetRule: '1) Llamada fraudulenta ➔ VISHING. 2) Historia/coartada inventada ➔ PRETEXTING. 3) Fingir ser un directivo ➔ IMPERSONATION. 4) Señal de alerta ➔ RED FLAG.',
    analogyCard: {
      title: 'El Actor con Disfraz (Impersonation) y su Guion de Crisis (Pretexting)',
      metaphor: 'En un ataque a la mesa de ayuda, el "IMPERSONATION" es el disfraz que se pone el estafador ("Soy el Vicepresidente de Finanzas"), el "PRETEXTING" es la película dramática que te cuenta ("Estoy en el aeropuerto y mi vuelo sale en 5 minutos"), y el "VISHING" es el teléfono por el que te llama.',
      whyItWorks: 'Separa claramente quién finge ser (impersonation), qué historia inventa (pretexting) y qué canal usa (vishing).'
    },
    threeSecondTable: {
      headers: ['Táctica del atacante', 'Término de Ciberseguridad', 'Señal clave en el examen'],
      rows: [
        ['Inventar una historia o crisis falsa para manipular', 'PRETEXTING', 'Claiming an urgent airport emergency.'],
        ['Engaño realizado mediante llamada telefónica', 'VISHING', 'Fraudulent phone call to the helpdesk.'],
        ['Fingir ser un ejecutivo, cliente o técnico autorizado', 'IMPERSONATION', 'Executive impersonation attack.'],
        ['Robo masivo de usuarios, contraseñas o tokens', 'CREDENTIAL HARVESTING', 'Fake login page for credential harvesting.']
      ],
      rule: 'Ante urgencia extrema o presión jerárquica por teléfono, nunca desactives MFA: exige verificación por canal oficial.'
    },
    mentalShortcut: '⚡ Teléfono = VISHING · Historia falsa = PRETEXTING · Suplantar identidad = IMPERSONATION · Alerta = RED FLAG.'
  },

  V05: {
    topicId: 'V05',
    titleEs: 'Políticas de Seguridad de la Información y Zero Trust (Guía Oficial)',
    formula: 'Zero Trust (Never Trust, Always Verify) | Principle of Least Privilege (PoLP) | Micro-segmentation | Lateral Movement',
    summaryEs: 'Dominio Léxico V05 (Information Security Policies — InfoSec):\n\n1. Arquitectura Zero Trust:\n• Supera el modelo antiguo de perímetro ("castle-and-moat") que confiaba implícitamente en cualquier equipo conectado a la LAN corporativa.\n• Regla central: "Never trust, always verify" — cada solicitud requiere validación explícita de identidad, MFA y evaluación de postura del dispositivo.\n\n2. Controles de Acceso y Contención:\n• Principle of Least Privilege (PoLP): otorgar a cada usuario o servicio únicamente los permisos mínimos indispensables para su función.\n• Micro-segmentation: aislar cargas de trabajo a nivel de aplicación para restringir matemáticamente el movimiento lateral ("lateral movement") si un host es comprometido.\n• Audit trail: registro inmutable y trazable de quién accedió a qué recurso y cuándo.',
    howExamTestsIt: 'Evalúa la comprensión de "Zero-Trust Network Architecture (ZTNA)", por qué fallaron las defensas solo perimetrales y cómo "least privilege" y "micro-segmentation" frenan el "lateral movement".',
    examples: [
      {
        en: 'By implementing micro-segmentation, security engineers ensure that lateral movement across internal databases is restricted.',
        highlight: 'micro-segmentation ... lateral movement',
        es: 'Al implementar la microsegmentación, los ingenieros de seguridad garantizan que el movimiento lateral a través de las bases de datos internas quede restringido.',
        explanation: 'Relación causa-efecto directa evaluada en lecturas y preguntas de seguridad.'
      },
      {
        en: 'Under the principle of least privilege, service accounts are granted read-only access only to their designated tables.',
        highlight: 'principle of least privilege',
        es: 'Bajo el principio de mínimo privilegio, a las cuentas de servicio se les otorga acceso de solo lectura únicamente a sus tablas designadas.',
        explanation: 'Definición operativa de PoLP en bases de datos y servidores.'
      }
    ],
    spanishTrapsEs: 'Distingue siempre "authentication" (comprobar quién eres mediante contraseña/MFA) de "authorization" (determinar qué permisos tienes una vez autenticado).',
    cheatSheetRule: '1) Nunca confiar ni siquiera dentro de la LAN ➔ ZERO TRUST. 2) Solo los permisos mínimos necesarios ➔ LEAST PRIVILEGE. 3) Evitar que el atacante salte de un servidor a otro ➔ RESTRICT LATERAL MOVEMENT.',
    analogyCard: {
      title: 'Los Compartimentos Estancos de un Submarino (Micro-segmentation)',
      metaphor: 'La seguridad perimetral antigua era como un castillo: si el ladrón cruzaba el puente levadizo (la VPN/LAN), podía pasearse por todas las habitaciones ("lateral movement"). Zero Trust con microsegmentación es como un submarino con compuertas blindadas en cada sala: aunque entre agua en un camarote, no puede inundar la sala de máquinas.',
      whyItWorks: 'Visualiza inmediatamente cómo la microsegmentación y el mínimo privilegio contienen una brecha.'
    },
    threeSecondTable: {
      headers: ['Objetivo de Seguridad', 'Concepto InfoSec B2', 'Ejemplo de examen'],
      rows: [
        ['No confiar por estar en la red interna; verificar siempre', 'ZERO TRUST (ZTNA)', 'Never trust, always verify every request.'],
        ['Dar solo los permisos estrictamente indispensables', 'LEAST PRIVILEGE (PoLP)', 'Enforce least-privilege access policies.'],
        ['Aislar aplicaciones para frenar propagación interna', 'MICRO-SEGMENTATION', 'Restrict lateral movement via micro-segmentation.'],
        ['Desplazamiento de un intruso de un host comprometido a otros', 'LATERAL MOVEMENT', 'Prevent lateral movement across subnets.']
      ],
      rule: '¿Verificar cada petición sin importar la red? = Zero Trust. ¿Mínimos permisos? = Least Privilege. ¿Frenar avance interno? = Micro-segmentation.'
    },
    mentalShortcut: '⚡ Verificar siempre = ZERO TRUST · Permisos mínimos = LEAST PRIVILEGE · Frenar salto entre hosts = LATERAL MOVEMENT.'
  }
};

// Lecciones ya reescritas con la guía de patrones: traen su propio atajo y no heredan
// la analogía ni la tabla del Gimnasio de Patrones (que sigue usando MENTAL_SHORTCUTS).
const PATTERN_STYLE_LESSONS = new Set<TopicId>([
  'G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G07', 'G08', 'G09', 'G10', 'G11', 'G12', 'G13', 'G14',
  'G15', 'G16', 'G17', 'G18', 'G19', 'G20', 'G21', 'G22', 'G23', 'G24', 'G25', 'G26', 'G27', 'G28', 'G29'
]);

// Enriquecer automáticamente todas las mini-lecciones (G06–G29) con las analogías,
// tablas de decisión de 3 segundos y atajos mentales definidos en MENTAL_SHORTCUTS.
for (const [topicKey, shortcut] of Object.entries(MENTAL_SHORTCUTS)) {
  const topicId = topicKey as TopicId;
  const lesson = MINI_LESSONS[topicId];
  if (!lesson || !shortcut || PATTERN_STYLE_LESSONS.has(topicId)) continue;

  if (!lesson.analogyCard && shortcut.analogies && shortcut.analogies.length > 0) {
    const firstAnalogy = shortcut.analogies[0];
    lesson.analogyCard = {
      title: firstAnalogy.title,
      metaphor: firstAnalogy.description,
      whyItWorks: firstAnalogy.concreteExample
        ? `Ejemplo clave: "${firstAnalogy.concreteExample.en}" (${firstAnalogy.concreteExample.es})`
        : shortcut.tagline
    };
  }

  if (!lesson.threeSecondTable && shortcut.decisionTable && shortcut.decisionTable.length > 0) {
    lesson.threeSecondTable = {
      headers: ['Si en la frase ves...', 'Tu radar busca inmediatamente...', 'Ejemplo oficial de 3 segundos'],
      rows: shortcut.decisionTable.map(row => [
        row.ifStartsOrContains,
        row.thenLookFor,
        row.exampleSentence
      ]),
      rule: shortcut.spanglishTrap || shortcut.threeSecondTrigger
    };
  }

  if (!lesson.mentalShortcut && shortcut.threeSecondTrigger) {
    lesson.mentalShortcut = `⚡ ${shortcut.threeSecondTrigger}`;
  }
}

