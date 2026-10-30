import { Question } from '../../types';

/**
 * English for IT 2 – Section 3: Listening & Vocabulary
 * Official OpenEDG / Cisco Curriculum
 * Topic: Network Engineer Training Session (BGP Troubleshooting)
 * 1.3.1 Vocabulary (6 items) & 1.3.3 Listening Comprehension (4 items)
 */
export const ENGLISH_FOR_IT_2_SECTION_3_BANK: Question[] = [
  {
    "id": "it2-3-voc-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the technical IT term: \"Troubleshooting\"",
    "options": [
      "Discovering and analysing why something does not work effectively and making suggestions on how to improve it.",
      "The attitude or mood of a person or group, a way of feeling or behaving.",
      "Voluntary interconnection of administratively separate internet networks to exchange traffic between downstream users.",
      "How the elements of a network are arranged, the structure of a network."
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Troubleshooting\" = diagnóstico de fallas.\n• Significado: Descubrir y analizar por qué algo no funciona.\n• Descartas: Actitud, interconexión voluntaria o disposición de red son otros términos.",
    "why_wrong": [
      "Opción correcta: Descubrir y analizar por qué algo no funciona.",
      "Incorrecto: Eso describe \"spirit\".",
      "Incorrecto: Eso describe \"peering\".",
      "Incorrecto: Eso describe \"topology\"."
    ],
    "tip_es": "Troubleshooting = Proceso de descubrir y analizar por qué algo falla para repararlo.",
    "ref": null,
    "human_rule": "troubleshooting = diagnosticar y resolver.",
    "trigger_anchor": "troubleshooting ➔ find why it fails",
    "spanglish_trap": "Traducir como \"disparar problemas\".",
    "workplace_usage": {
      "scenario": "Diagnóstico de Incidentes Nivel 2",
      "en": "Before escalating the ticket to tier-3, follow the standard BGP troubleshooting runbook.",
      "es": "Antes de escalar el ticket a nivel 3, sigue el procedimiento estándar de resolución de problemas de BGP."
    }
  },
  {
    "id": "it2-3-voc-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the word: \"Spirit\" (as in \"That's the spirit!\")",
    "options": [
      "Discovering and analysing why something does not work effectively and making suggestions on how to improve it.",
      "The attitude or mood of a person or group, a way of feeling or behaving.",
      "When two things fail to correspond.",
      "When a system or part of it is incorrectly composed or formed."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"That's the spirit!\" = esa actitud.\n• Significado: La actitud o ánimo de una persona o grupo.\n• Descartas: Diagnóstico, desajuste o mala configuración son otros términos.",
    "why_wrong": [
      "Incorrecto: Eso describe \"troubleshooting\".",
      "Opción correcta: La actitud o ánimo.",
      "Incorrecto: Eso describe \"mismatch\".",
      "Incorrecto: Eso describe \"misconfigured\"."
    ],
    "tip_es": "\"That's the spirit!\" = \"¡Esa es la actitud!\" / \"¡Ese es el ánimo!\".",
    "ref": null,
    "human_rule": "spirit aquí = actitud, no fantasma.",
    "trigger_anchor": "That's the spirit ➔ attitude",
    "spanglish_trap": "Traducir spirit como \"espíritu\".",
    "workplace_usage": {
      "scenario": "Reunión de Inicio de Sprint",
      "en": "The engineering team volunteered to handle the weekend migration; that's the spirit we need.",
      "es": "El equipo de ingeniería se ofreció voluntario para la migración de fin de semana; esa es la actitud que necesitamos."
    }
  },
  {
    "id": "it2-3-voc-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the technical IT term: \"Network Topology\"",
    "options": [
      "When two things fail to correspond.",
      "When a system or part of it is incorrectly composed or formed.",
      "How the elements of a network are arranged, the structure of a network.",
      "Voluntary interconnection of administratively separate internet networks to exchange traffic between downstream users."
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Network Topology\" = estructura de la red.\n• Significado: Cómo se organizan los elementos de una red.\n• Descartas: Desajuste, mala configuración o interconexión no son topología.",
    "why_wrong": [
      "Incorrecto: Eso describe \"mismatch\".",
      "Incorrecto: Eso describe \"misconfigured\".",
      "Opción correcta: Cómo se organizan los elementos de la red.",
      "Incorrecto: Eso describe \"peering\"."
    ],
    "tip_es": "Network Topology = La estructura y disposición gráfica de los componentes de la red.",
    "ref": null,
    "human_rule": "topology = cómo se organiza la red.",
    "trigger_anchor": "topology ➔ layout of network",
    "spanglish_trap": "Confundir topología con topografía.",
    "workplace_usage": {
      "scenario": "Documentación de Infraestructura",
      "en": "Always update the network topology diagram in Confluence whenever you add a new core router.",
      "es": "Actualiza siempre el diagrama de topología de red en Confluence cada vez que añadas un nuevo router central."
    }
  },
  {
    "id": "it2-3-voc-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the technical IT term: \"Peering\"",
    "options": [
      "When two things fail to correspond.",
      "Discovering and analysing why something does not work effectively and making suggestions on how to improve it.",
      "How the elements of a network are arranged, the structure of a network.",
      "Voluntary interconnection of administratively separate internet networks to exchange traffic between downstream users of each network."
    ],
    "answer": 3,
    "why_correct": "• Pista: \"Peering\" = interconexión entre redes.\n• Significado: Interconexión voluntaria de redes administrativamente separadas.\n• Descartas: Desajuste, diagnóstico o topología son otros términos.",
    "why_wrong": [
      "Incorrecto: Eso describe \"mismatch\".",
      "Incorrecto: Eso describe \"troubleshooting\".",
      "Incorrecto: Eso describe \"topology\".",
      "Opción correcta: Interconexión voluntaria entre redes."
    ],
    "tip_es": "BGP Peering = Interconexión voluntaria entre dos redes independientes para cursar tráfico.",
    "ref": null,
    "human_rule": "peering = redes que se conectan voluntariamente.",
    "trigger_anchor": "peering ➔ voluntary interconnection",
    "spanglish_trap": "Traducir peer como \"compañero\" sin contexto de red.",
    "workplace_usage": {
      "scenario": "Acuerdo con Proveedor de Tránsito",
      "en": "We established direct BGP peering with the content delivery network at the internet exchange point.",
      "es": "Establecimos un peering BGP directo con la red de entrega de contenidos en el punto neutro de internet."
    }
  },
  {
    "id": "it2-3-voc-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the technical IT term: \"Mismatch\"",
    "options": [
      "When two things fail to correspond.",
      "Discovering and analysing why something does not work effectively and making suggestions on how to improve it.",
      "When a system or part of it is incorrectly composed or formed.",
      "Voluntary interconnection of administratively separate internet networks to exchange traffic between downstream users."
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Mismatch\" = desajuste.\n• Significado: Cuando dos cosas no se corresponden.\n• Descartas: Diagnóstico, mala configuración o peering son otros términos.",
    "why_wrong": [
      "Opción correcta: Cuando dos cosas no se corresponden.",
      "Incorrecto: Eso describe \"troubleshooting\".",
      "Incorrecto: Eso describe \"misconfigured\".",
      "Incorrecto: Eso describe \"peering\"."
    ],
    "tip_es": "Mismatch = Discrepancia, desajuste o falta de coincidencia entre dos parámetros técnicos.",
    "ref": null,
    "human_rule": "mismatch = no coinciden.",
    "trigger_anchor": "mismatch ➔ do not correspond",
    "spanglish_trap": "Traducir como \"mal partido\".",
    "workplace_usage": {
      "scenario": "Revisión de Enlace BGP Caído",
      "en": "The BGP adjacency failed to form because of an autonomous system number mismatch in the config.",
      "es": "La adyacencia BGP no se formó debido a una discrepancia en el número de sistema autónomo en la configuración."
    }
  },
  {
    "id": "it2-3-voc-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "V07",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the technical IT term: \"Misconfigured\"",
    "options": [
      "How the elements of a network are arranged, the structure of a network.",
      "When a system or part of it is incorrectly composed or formed.",
      "The attitude or mood of a person or group, a way of feeling or behaving.",
      "Voluntary interconnection of administratively separate internet networks to exchange traffic between downstream users."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Misconfigured\" = mal configurado.\n• Significado: Un sistema o parte está mal compuesto o configurado.\n• Descartas: Topología, actitud o peering son otros términos.",
    "why_wrong": [
      "Incorrecto: Eso describe \"topology\".",
      "Opción correcta: Mal configurado.",
      "Incorrecto: Eso describe \"spirit\".",
      "Incorrecto: Eso describe \"peering\"."
    ],
    "tip_es": "Misconfigured = Mal configurado / Configurado de forma incorrecta.",
    "ref": null,
    "human_rule": "mis- = mal.",
    "trigger_anchor": "misconfigured ➔ wrongly set up",
    "spanglish_trap": "Traducir mis- como \"mi\".",
    "workplace_usage": {
      "scenario": "Incidente de Bloqueo de Puertos",
      "en": "The firewall was misconfigured and blocked inbound TCP traffic on port 179.",
      "es": "El firewall estaba mal configurado y bloqueaba el tráfico TCP entrante en el puerto 179."
    }
  },
  {
    "id": "it2-3-list-q1",
    "section": "L",
    "objective": "L2",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on the training session dialogue, select which person agrees with the statement: \"The man is probably going to need help with his task.\"",
    "options": [
      "Both",
      "The man",
      "The woman",
      "Neither"
    ],
    "answer": 2,
    "why_correct": "• Pista: La pregunta pide quién opina: \"The man is probably going to need help\".\n• Significado: Según el diálogo, la opinión corresponde a: la mujer.\n• Descartas: Las otras personas no expresan esa opinión en el audio.",
    "why_wrong": [
      "Incorrecto: Both no corresponde según el diálogo.",
      "Incorrecto: The man no corresponde según el diálogo.",
      "Opción correcta: The woman.",
      "Incorrecto: Neither no corresponde según el diálogo."
    ],
    "tip_es": "Amanda dice: \"You may need me at some point, so I’ll be here to guide you or help you.\"",
    "ref": "aud-it2-1.3",
    "evidence_quote": "Amanda: \"You may need me at some point, so I’ll be here to guide you or help you.\"",
    "human_rule": "Opinión = quién lo dice en el audio.",
    "trigger_anchor": "whose opinion ➔ who said it",
    "spanglish_trap": "Atribuir la opinión a quien no la dijo.",
    "workplace_usage": {
      "scenario": "Mentoría Técnica de Redes",
      "en": "The senior engineer monitors the junior technician, expecting to step in during complex BGP troubleshooting.",
      "es": "El ingeniero senior supervisa al técnico junior, previendo intervenir durante la resolución de BGP compleja."
    }
  },
  {
    "id": "it2-3-list-q2",
    "section": "L",
    "objective": "L3",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on the training session dialogue, select which person agrees with the statement: \"In the second case, the man is missing something very simple.\"",
    "options": [
      "Neither",
      "The man",
      "Both",
      "The woman"
    ],
    "answer": 3,
    "why_correct": "• Pista: La pregunta pide quién opina: \"In the second case the man is missing something very simple\".\n• Significado: Según el diálogo, la opinión corresponde a: la mujer.\n• Descartas: Las otras personas no expresan esa opinión en el audio.",
    "why_wrong": [
      "Incorrecto: Neither no corresponde según el diálogo.",
      "Incorrecto: The man no corresponde según el diálogo.",
      "Incorrecto: Both no corresponde según el diálogo.",
      "Opción correcta: The woman."
    ],
    "tip_es": "Amanda dice: \"Well, this case is not as tricky as you think. Take a look again...\"",
    "ref": "aud-it2-1.3",
    "evidence_quote": "Amanda: \"Well, this case is not as tricky as you think. Take a look again and pay more attention to the specifics of the BGP.\"",
    "human_rule": "Opinión = quién lo dice en el audio.",
    "trigger_anchor": "whose opinion ➔ who said it",
    "spanglish_trap": "Atribuir la opinión a quien no la dijo.",
    "workplace_usage": {
      "scenario": "Diferencia entre iBGP y eBGP",
      "en": "By default, external BGP peers expect direct Layer 2 connectivity with a TTL of 1 unless eBGP multihop is configured.",
      "es": "Por defecto, los pares BGP externos esperan conectividad directa de Capa 2 con un TTL de 1 a menos que se configure eBGP multihop."
    }
  },
  {
    "id": "it2-3-list-q3",
    "section": "L",
    "objective": "L3",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on the training session dialogue, select which person agrees with the statement: \"The man is patient.\"",
    "options": [
      "The man",
      "The woman",
      "Both",
      "Neither"
    ],
    "answer": 0,
    "why_correct": "• Pista: La pregunta pide quién opina: \"The man is patient\".\n• Significado: Según el diálogo, la opinión corresponde a: el hombre.\n• Descartas: Las otras personas no expresan esa opinión en el audio.",
    "why_wrong": [
      "Opción correcta: The man.",
      "Incorrecto: The woman no corresponde según el diálogo.",
      "Incorrecto: Both no corresponde según el diálogo.",
      "Incorrecto: Neither no corresponde según el diálogo."
    ],
    "tip_es": "Amanda le pide: \"be more patient\" (demuestra que ella NO lo considera paciente ahora); Paul defiende que normalmente es metódico.",
    "ref": "aud-it2-1.3",
    "evidence_quote": "Amanda: \"Please try to pay more attention to it and be more patient.\" / Paul: \"Sorry, I’m normally very methodical. I’m just nervous.\"",
    "human_rule": "Opinión = quién lo dice en el audio.",
    "trigger_anchor": "whose opinion ➔ who said it",
    "spanglish_trap": "Atribuir la opinión a quien no la dijo.",
    "workplace_usage": {
      "scenario": "Gestión del Estrés bajo Presión",
      "en": "In emergency troubleshooting, rushing through configs without verifying logs leads to missed root causes.",
      "es": "En la resolución de emergencias, apresurarse en las configuraciones sin verificar los logs impide hallar la causa raíz."
    }
  },
  {
    "id": "it2-3-list-q4",
    "section": "L",
    "objective": "L4",
    "topic": "V07",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on the training session dialogue, select which person agrees with the statement: \"The man wasn’t prepared enough for the meeting.\"",
    "options": [
      "The woman",
      "Both",
      "The man",
      "Neither"
    ],
    "answer": 1,
    "why_correct": "• Pista: La pregunta pide quién opina: \"The man wasn't prepared enough\".\n• Significado: Según el diálogo, la opinión corresponde a: ambos.\n• Descartas: Las otras personas no expresan esa opinión en el audio.",
    "why_wrong": [
      "Incorrecto: The woman no corresponde según el diálogo.",
      "Opción correcta: Both.",
      "Incorrecto: The man no corresponde según el diálogo.",
      "Incorrecto: Neither no corresponde según el diálogo."
    ],
    "tip_es": "Amanda dice: \"This is something you should have known, Paul\" y Paul responde: \"you’re right, I should have known better\". Ambos coinciden.",
    "ref": "aud-it2-1.3",
    "evidence_quote": "Amanda: \"This is something you should have known, Paul.\" / Paul: \"Sorry, Amanda, you’re right, I should have known better.\"",
    "human_rule": "Opinión = quién lo dice en el audio.",
    "trigger_anchor": "whose opinion ➔ who said it",
    "spanglish_trap": "Atribuir la opinión a quien no la dijo.",
    "workplace_usage": {
      "scenario": "Conocimientos Fundamentales de Protocolos",
      "en": "Every network engineer is expected to know offhand that BGP relies on TCP port 179 for establishing peering sessions.",
      "es": "Se espera que todo ingeniero de redes sepa de memoria que BGP utiliza el puerto TCP 179 para establecer sesiones de peering."
    }
  }
];
