import { Question } from '../../types';

/**
 * English for IT 1 – Module 1: Product Management: Identify Problems
 * 1.5 Section 5 – Reading: Supplier Evaluation Modules & Project Management
 * Official OpenEDG / Cisco Curriculum
 * Covers:
 *  - Vocabulary 1: Secondment, Onboarding, Go out of business, Mitigate risks, Worst-case scenario, Cooperate, Supply chain
 *  - Vocabulary 2 & 3: Supplier evaluation, Scope creep, Incremental value delivery
 *  - Reading Comprehension: "Supplier Evaluation Module" report text (txt-it1-1.5)
 * Total: 7 (Vocab 1) + 3 (Vocab 3) + 6 (Reading Comprehension) = 16 items
 */
export const ENGLISH_FOR_IT_1_SECTION_5_BANK: Question[] = [
  {
    "id": "it1-mod1-sec5-voc1-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the term \"Secondment\":",
    "options": [
      "A temporary transfer of an employee from their normal position to another project or department.",
      "A second choice option.",
      "An extension to a missed deadline.",
      "A formal dismissal of an employee due to budget cuts."
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Secondment\" = traslado temporal.\n• Significado: Transferencia temporal de un empleado a otro puesto o equipo.\n• Descartas: Segunda opción, prórroga o despido no son secondment.",
    "why_wrong": [
      "Opción correcta: Traslado temporal de un empleado.",
      "Incorrecto: No es una segunda opción.",
      "Incorrecto: No es una prórroga.",
      "Incorrecto: No es un despido."
    ],
    "tip_es": "Definición oficial: \"Secondment\" = adscripción o traslado temporal de un empleado a otro squad o departamento.",
    "ref": null,
    "human_rule": "secondment = préstamo temporal de empleado.",
    "trigger_anchor": "temporary transfer ➔ secondment",
    "spanglish_trap": "Traducir como \"segunda\").",
    "workplace_usage": {
      "scenario": "Refuerzo de Squad ante Picos de Demanda",
      "en": "The project manager requested two backend engineers on secondment from the mobile squad.",
      "es": "El gerente de proyecto solicitó dos ingenieros backend en adscripción temporal del squad móvil."
    }
  },
  {
    "id": "it1-mod1-sec5-voc1-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the term \"Onboarding\":",
    "options": [
      "To get on to a mode of transport.",
      "The process of orienting and training a new employee.",
      "To agree with an idea.",
      "To conduct a code review before deploying."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Onboarding\" = incorporación.\n• Significado: Proceso de orientar y capacitar a un nuevo empleado.\n• Descartas: Subir a un transporte, estar de acuerdo o hacer code review no es onboarding.",
    "why_wrong": [
      "Incorrecto: Subir a un transporte es otro sentido.",
      "Opción correcta: Orientar y capacitar a un nuevo empleado.",
      "Incorrecto: Estar de acuerdo es otro sentido.",
      "Incorrecto: Code review es otra práctica."
    ],
    "tip_es": "Definición oficial: \"Onboarding\" = proceso de orientación, accesos y entrenamiento de un nuevo colaborador.",
    "ref": null,
    "human_rule": "onboarding = integrar al nuevo.",
    "trigger_anchor": "new employee ➔ onboarding",
    "spanglish_trap": "Traducir como \"a bordo\".",
    "workplace_usage": {
      "scenario": "Incorporación de Desarrolladores Contratistas",
      "en": "Finding new hires and onboarding them to the repository may take longer than waiting for internal squads.",
      "es": "Encontrar nuevas contrataciones e incorporarlas al repositorio puede tardar más que esperar recursos internos."
    }
  },
  {
    "id": "it1-mod1-sec5-voc1-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the idiom/phrasal verb \"To go out of business\":",
    "options": [
      "When a company decides to change its strategy.",
      "When a company starts to look for new clients.",
      "When a company stops all of its operations.",
      "When a company expands to an international market."
    ],
    "answer": 2,
    "why_correct": "• Pista: \"go out of business\" = cerrar.\n• Significado: Cuando una empresa detiene todas sus operaciones.\n• Descartas: Cambiar estrategia, buscar clientes o expandirse no es cerrar.",
    "why_wrong": [
      "Incorrecto: Cambiar estrategia no es cerrar.",
      "Incorrecto: Buscar clientes no es cerrar.",
      "Opción correcta: Detiene todas sus operaciones.",
      "Incorrecto: Expandirse es lo contrario."
    ],
    "tip_es": "Definición oficial: \"To go out of business\" = quebrar, cesar todas las operaciones comerciales.",
    "ref": null,
    "human_rule": "go out of business = quebrar.",
    "trigger_anchor": "stops operations ➔ out of business",
    "spanglish_trap": "Traducir como \"salir del negocio\" sin ver \"quebrar\".",
    "workplace_usage": {
      "scenario": "Riesgo de Cadena de Suministro",
      "en": "Last year, our customer almost went out of business because a single supplier paralyzed assembly lines.",
      "es": "El año pasado, nuestro cliente casi quebró porque un solo proveedor paralizó las líneas de ensamblaje."
    }
  },
  {
    "id": "it1-mod1-sec5-voc1-q4",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the phrase \"To mitigate risks\":",
    "options": [
      "To assess what dangers are involved in a project.",
      "To decide what the next steps are in a project.",
      "To accept project delays without making changes.",
      "To reduce the chances of something bad happening."
    ],
    "answer": 3,
    "why_correct": "• Pista: \"mitigate risks\" = reducir.\n• Significado: Reducir la probabilidad de que algo malo ocurra.\n• Descartas: Evaluar peligros, decidir pasos o aceptar retrasos no es mitigar.",
    "why_wrong": [
      "Incorrecto: Evaluar peligros es otra tarea.",
      "Incorrecto: Decidir pasos es otra tarea.",
      "Incorrecto: Aceptar retrasos no es mitigar.",
      "Opción correcta: Reducir la posibilidad de que algo malo ocurra."
    ],
    "tip_es": "Definición oficial: \"To mitigate risks\" = reducir las probabilidades de que algo malo suceda.",
    "ref": null,
    "human_rule": "mitigate = reducir.",
    "trigger_anchor": "mitigate ➔ reduce",
    "spanglish_trap": "Confundir mitigate con migrate.",
    "workplace_usage": {
      "scenario": "Plan de Mitigación de Plazos",
      "en": "We recommend cutting scope to mitigate the risks of not delivering the core module on time.",
      "es": "Recomendamos recortar el alcance para mitigar los riesgos de no entregar el módulo principal a tiempo."
    }
  },
  {
    "id": "it1-mod1-sec5-voc1-q5",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the term \"Worst-case scenario\":",
    "options": [
      "The most unpleasant thing that could happen in a situation.",
      "The most positive thing that could happen in a situation.",
      "The most unlikely thing that could happen in a situation.",
      "The initial baseline estimate of a project."
    ],
    "answer": 0,
    "why_correct": "• Pista: \"Worst-case scenario\" = peor caso.\n• Significado: Lo más desagradable que podría ocurrir.\n• Descartas: Lo más positivo, lo más improbable o la estimación base son otros.",
    "why_wrong": [
      "Opción correcta: Lo peor que podría ocurrir.",
      "Incorrecto: Lo más positivo sería best-case.",
      "Incorrecto: Lo más improbable no es peor caso.",
      "Incorrecto: Una línea base es otra cosa."
    ],
    "tip_es": "Definición oficial: \"Worst-case scenario\" = el escenario o desenlace más desfavorable y desagradable.",
    "ref": null,
    "human_rule": "worst-case = peor posibilidad.",
    "trigger_anchor": "worst-case ➔ most unpleasant",
    "spanglish_trap": "Traducir scenario como \"escenario de teatro\".",
    "workplace_usage": {
      "scenario": "Gestión de Presupuesto con el Cliente",
      "en": "Exceeding the agreed budget and asking for contractor funds would be our worst-case scenario.",
      "es": "Superar el presupuesto acordado y solicitar fondos para contratistas sería nuestro peor escenario posible."
    }
  },
  {
    "id": "it1-mod1-sec5-voc1-q6",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the verb \"Cooperate\":",
    "options": [
      "To work on your own in order to finish quicker.",
      "To work together in order to achieve an objective.",
      "To work on several projects at the same time.",
      "To outsource development to an external agency."
    ],
    "answer": 1,
    "why_correct": "• Pista: \"Cooperate\" = cooperar.\n• Significado: Trabajar juntos para lograr un objetivo.\n• Descartas: Trabajar solo, varios proyectos o subcontratar no es cooperar.",
    "why_wrong": [
      "Incorrecto: Trabajar solo es lo contrario.",
      "Opción correcta: Trabajar juntos.",
      "Incorrecto: Varios proyectos es multitasking.",
      "Incorrecto: Subcontratar es outsourcing."
    ],
    "tip_es": "Definición oficial: \"Cooperate\" = trabajar juntos para lograr un objetivo común.",
    "ref": null,
    "human_rule": "co- = juntos.",
    "trigger_anchor": "cooperate ➔ work together",
    "spanglish_trap": "Confundir cooperate con operate.",
    "workplace_usage": {
      "scenario": "Colaboración Interdepartamental",
      "en": "The product squad must cooperate closely with field engineers to validate the prototype.",
      "es": "El squad de producto debe cooperar estrechamente con los ingenieros de campo para validar el prototipo."
    }
  },
  {
    "id": "it1-mod1-sec5-voc1-q7",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "Select the correct definition for the term \"Supply chain\":",
    "options": [
      "All the items needed to make a product.",
      "Retail shops that sell the same products.",
      "All the businesses and contributors involved in creating a product.",
      "A software dependency tree in a microservice package."
    ],
    "answer": 2,
    "why_correct": "• Pista: \"Supply chain\" = cadena de suministro.\n• Significado: Todas las empresas y participantes involucrados en producir y entregar un producto.\n• Descartas: Insumos, tiendas o árboles de dependencias no son la cadena.",
    "why_wrong": [
      "Incorrecto: Insumos son materiales.",
      "Incorrecto: Tiendas son retail.",
      "Opción correcta: Todos los actores que producen y entregan.",
      "Incorrecto: Un árbol de dependencias es software."
    ],
    "tip_es": "Definición oficial: \"Supply chain\" = todos los negocios y colaboradores involucrados en crear y entregar un producto.",
    "ref": null,
    "human_rule": "supply chain = toda la red de proveedores.",
    "trigger_anchor": "supply chain ➔ all businesses involved",
    "spanglish_trap": "Pensar que es solo logística.",
    "workplace_usage": {
      "scenario": "Monitoreo de Continuidad Operativa",
      "en": "A disruption in the overseas supply chain delayed machine shipments by eight weeks.",
      "es": "Una interrupción en la cadena de suministro en el extranjero retrasó los envíos de máquinas ocho semanas."
    }
  },
  {
    "id": "it1-mod1-sec5-voc3-q1",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Identify the project management concept in the scenario: \"There is a significant delay to a project due to the client's changing requests and demands beyond the original contract.\"",
    "options": [
      "Resource secondment",
      "Supplier evaluation",
      "Incremental value delivery",
      "Scope creep"
    ],
    "answer": 3,
    "why_correct": "• Pista: Retraso por cambios constantes del cliente: scope creep.\n• Significado: Scope creep = el alcance crece sin control.\n• Descartas: Secondment, supplier evaluation e incremental delivery son otros.",
    "why_wrong": [
      "Incorrecto: Resource secondment es traslado.",
      "Incorrecto: Supplier evaluation es revisar proveedores.",
      "Incorrecto: Incremental delivery es entregar por partes.",
      "Opción correcta: Scope creep = crecimiento del alcance."
    ],
    "tip_es": "Definición oficial: \"Scope creep: A term used when a project’s original scope (objective) changes and goes over what was originally intended\".",
    "ref": null,
    "human_rule": "cambios constantes = scope creep.",
    "trigger_anchor": "changing requests ➔ scope creep",
    "spanglish_trap": "Pensar que creep es \"arrastre\".",
    "workplace_usage": {
      "scenario": "Control de Cambios en Proyecto",
      "en": "Luckily, we haven’t faced any scope creep until now because the product owner rejected out-of-scope requests.",
      "es": "Por suerte, no nos hemos enfrentado a ningún aumento incontrolado del alcance hasta ahora porque el product owner rechazó peticiones fuera de contrato."
    }
  },
  {
    "id": "it1-mod1-sec5-voc3-q2",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Identify the project management concept in the scenario: \"An organized visit to a supplier’s factory in order to monitor their processes and quality compliance.\"",
    "options": [
      "Supplier evaluation",
      "Incremental value delivery",
      "Scope creep",
      "Code onboarding"
    ],
    "answer": 0,
    "why_correct": "• Pista: Visita organizada a la fábrica del proveedor para monitorear: evaluación.\n• Significado: Supplier evaluation = evaluar al proveedor.\n• Descartas: Incremental delivery, scope creep y code onboarding no coinciden.",
    "why_wrong": [
      "Opción correcta: Supplier evaluation = evaluar proveedor.",
      "Incorrecto: Incremental delivery = entregar por partes.",
      "Incorrecto: Scope creep = alcance creciente.",
      "Incorrecto: Code onboarding = incorporar a alguien al código."
    ],
    "tip_es": "Definición oficial: \"Supplier evaluation: Refers to the process of analyzing and approving potential suppliers\".",
    "ref": null,
    "human_rule": "visita de calidad = supplier evaluation.",
    "trigger_anchor": "supplier visit ➔ evaluation",
    "spanglish_trap": "Confundir con auditoría interna.",
    "workplace_usage": {
      "scenario": "Auditoría Anual de Contratos",
      "en": "The manufacturing director initiated a supplier evaluation to filter out vendors with poor delivery records.",
      "es": "El director de fabricación inició una evaluación de proveedores para filtrar a los distribuidores con malos registros de entrega."
    }
  },
  {
    "id": "it1-mod1-sec5-voc3-q3",
    "section": "UE",
    "objective": "UE1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Identify the project management concept in the scenario: \"During the planning phase, the team discusses how to break down the product into different increments released piece by piece.\"",
    "options": [
      "Supplier evaluation",
      "Incremental value delivery",
      "Scope creep",
      "Budget re-estimation"
    ],
    "answer": 1,
    "why_correct": "• Pista: Dividir el producto en partes de entrega: entrega incremental.\n• Significado: Incremental value delivery = entregar valor por etapas.\n• Descartas: Supplier evaluation, scope creep y re-estimación no encajan.",
    "why_wrong": [
      "Incorrecto: Supplier evaluation es otro tema.",
      "Opción correcta: Incremental value delivery = por etapas.",
      "Incorrecto: Scope creep es crecimiento del alcance.",
      "Incorrecto: Re-estimar presupuesto no es dividir."
    ],
    "tip_es": "Definición oficial: \"Incremental value delivery: Breaking large projects into small working units, which you release as soon as they are complete\".",
    "ref": null,
    "human_rule": "dividir en partes = incremental.",
    "trigger_anchor": "break down ➔ incremental",
    "spanglish_trap": "Pensar que incremental es aumentar costos.",
    "workplace_usage": {
      "scenario": "Metodología Ágil y Lanzamiento de MVP",
      "en": "With incremental value delivery, our customer can start testing core features before Q4.",
      "es": "Con la entrega incremental de valor, nuestro cliente puede empezar a probar las funciones principales antes del cuarto trimestre."
    }
  },
  {
    "id": "it1-mod1-sec5-read-q1",
    "section": "R",
    "objective": "R1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "According to the report, a supplier evaluation module is primarily used to:",
    "options": [
      "find the best suppliers to work with.",
      "create a report with the supplier’s stock levels.",
      "prevent the customer from working with risky suppliers.",
      "make a list of all the suppliers in that area."
    ],
    "answer": 2,
    "why_correct": "• Pista: Para qué sirve el módulo de evaluación de proveedores.\n• Significado: Evita que el cliente trabaje con proveedores riesgosos.\n• Descartas: No es encontrar al mejor, ni reportar stock, ni listar proveedores.",
    "why_wrong": [
      "Incorrecto: \"find the best suppliers to work with.\" no es lo que dice el texto.",
      "Incorrecto: \"create a report with the supplier’s stock levels.\" no es lo que dice el texto.",
      "Opción correcta: prevent the customer from working with risky suppliers.",
      "Incorrecto: \"make a list of all the suppliers in that area.\" no es lo que dice el texto."
    ],
    "tip_es": "Evidencia en el texto: \"...reveal unreliable suppliers, and re-evaluate supplier ratings... almost went out of business because they signed up a supplier that delayed their supply chain\".",
    "ref": "txt-it1-1.5",
    "evidence_quote": "The customer needs the module in order to analyze last year's collaboration with all their suppliers, reveal unreliable suppliers, and re-evaluate supplier ratings before renewing the contracts.",
    "human_rule": "prevenir riesgo = propósito del módulo.",
    "trigger_anchor": "supplier evaluation ➔ prevent risky suppliers",
    "spanglish_trap": "Pensar que es para hallar al mejor.",
    "workplace_usage": {
      "scenario": "Revisión de Requerimientos de Módulo de Proveedores",
      "en": "The primary goal of the module is to prevent the manufacturer from contracting risky suppliers.",
      "es": "El objetivo primordial del módulo es evitar que el fabricante contrate proveedores riesgosos."
    }
  },
  {
    "id": "it1-mod1-sec5-read-q2",
    "section": "R",
    "objective": "R1",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "They need to keep to the supplier evaluation deadline because:",
    "options": [
      "the customer wants to evaluate the suppliers before going on holiday.",
      "meeting the deadline keeps them from penalties.",
      "they have to get the product on the market as soon as possible.",
      "the customer urgently needs reliable suppliers."
    ],
    "answer": 3,
    "why_correct": "• Pista: Por qué mantener el plazo de la evaluación.\n• Significado: El cliente necesita proveedores confiables con urgencia.\n• Descartas: No se trata de penalizaciones ni de salir al mercado.",
    "why_wrong": [
      "Incorrecto: \"the customer wants to evaluate the suppliers before going on holiday.\" no es lo que dice el texto.",
      "Incorrecto: \"meeting the deadline keeps them from penalties.\" no es lo que dice el texto.",
      "Incorrecto: \"they have to get the product on the market as soon as possible.\" no es lo que dice el texto.",
      "Opción correcta: the customer urgently needs reliable suppliers."
    ],
    "tip_es": "Evidencia en el texto: \"...they now need to have predictable delivery dates and trusted suppliers. That’s why meeting the deadline... is so important\".",
    "ref": "txt-it1-1.5",
    "evidence_quote": "After the pandemic, the market became much more competitive and as a result, they now need to have predictable delivery dates and trusted suppliers.",
    "human_rule": "plazo = necesidad urgente del cliente.",
    "trigger_anchor": "deadline ➔ customer needs reliable suppliers",
    "spanglish_trap": "Pensar que es por multas.",
    "workplace_usage": {
      "scenario": "Justificación de Plazos ante la Dirección",
      "en": "We cannot slip the deadline because the customer urgently needs reliable suppliers to secure production.",
      "es": "No podemos retrasar la fecha límite porque el cliente necesita urgentemente proveedores confiables para asegurar la producción."
    }
  },
  {
    "id": "it1-mod1-sec5-read-q3",
    "section": "R",
    "objective": "R2",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "The team cannot deliver the full module on time because:",
    "options": [
      "the development team capacity has decreased over the last months.",
      "they forgot to estimate the final evaluation report.",
      "they discovered new features needed by the customer.",
      "many people have found new jobs."
    ],
    "answer": 0,
    "why_correct": "• Pista: Por qué no se entrega el módulo completo a tiempo.\n• Significado: La capacidad del equipo de desarrollo ha disminuido.\n• Descartas: No olvidaron estimar, no hay nuevas funciones y no es por renuncias.",
    "why_wrong": [
      "Opción correcta: the development team capacity has decreased over the last months.",
      "Incorrecto: \"they forgot to estimate the final evaluation report.\" no es lo que dice el texto.",
      "Incorrecto: \"they discovered new features needed by the customer.\" no es lo que dice el texto.",
      "Incorrecto: \"many people have found new jobs.\" no es lo que dice el texto."
    ],
    "tip_es": "Evidencia en el texto: \"...more than half of the team has been absent due to sick leave... decrease in average team velocity\".",
    "ref": "txt-it1-1.5",
    "evidence_quote": "In the last two months, more than half of the team has been absent due to sick leave or issues with childcare. Additionally, we’ve noticed a decrease in average team velocity.",
    "human_rule": "capacidad menor = no llegan.",
    "trigger_anchor": "cannot deliver ➔ capacity decreased",
    "spanglish_trap": "Culpar a cambios del cliente.",
    "workplace_usage": {
      "scenario": "Análisis de Causa Raíz en Retrospectiva",
      "en": "The project slipped because team capacity decreased severely during the peak illness wave.",
      "es": "El proyecto se desfasó porque la capacidad del equipo disminuyó severamente durante la ola pico de enfermedad."
    }
  },
  {
    "id": "it1-mod1-sec5-read-q4",
    "section": "R",
    "objective": "R3",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "To address the delivery risk, the development team initially decided to:",
    "options": [
      "speed up the development of the evaluation.",
      "check their available resources.",
      "tell the client their concerns.",
      "continue with the same strategy."
    ],
    "answer": 1,
    "why_correct": "• Pista: Qué decidió al inicio el equipo ante el riesgo.\n• Significado: Revisar sus recursos disponibles.\n• Descartas: No aceleró, no avisó al cliente aún y no siguió igual.",
    "why_wrong": [
      "Incorrecto: \"speed up the development of the evaluation.\" no es lo que dice el texto.",
      "Opción correcta: check their available resources.",
      "Incorrecto: \"tell the client their concerns.\" no es lo que dice el texto.",
      "Incorrecto: \"continue with the same strategy.\" no es lo que dice el texto."
    ],
    "tip_es": "Evidencia en el texto: \"...we have started looking for other ways to move forward... We’ve researched other teams' capacity...\".",
    "ref": "txt-it1-1.5",
    "evidence_quote": "The first option we considered was secondments from other teams. We’ve researched other teams' capacity, but it seems as if we can count only on manpower from the Rabbits and Eagles teams.",
    "human_rule": "initially = primera reacción.",
    "trigger_anchor": "delivery risk ➔ check resources",
    "spanglish_trap": "Elegir la acción final y no la inicial.",
    "workplace_usage": {
      "scenario": "Gestión de Contingencias de Capacidad",
      "en": "The leads decided to check their available resources before proposing alternative delivery plans.",
      "es": "Los líderes decidieron verificar sus recursos disponibles antes de proponer planes de entrega alternativos."
    }
  },
  {
    "id": "it1-mod1-sec5-read-q5",
    "section": "R",
    "objective": "R2",
    "topic": "V08",
    "difficulty": 1,
    "pool": "practice",
    "stem": "According to both the technical definition and the text report, incremental value delivery involves:",
    "options": [
      "carefully making each feature separately.",
      "developing only must-have features.",
      "delivering value in small batches.",
      "releasing the features when customers ask about them."
    ],
    "answer": 2,
    "why_correct": "• Pista: Qué implica la entrega de valor incremental.\n• Significado: Entregar valor en lotes pequeños.\n• Descartas: No es hacer una a una con cuidado, solo imprescindibles ni a petición.",
    "why_wrong": [
      "Incorrecto: \"carefully making each feature separately.\" no es lo que dice el texto.",
      "Incorrecto: \"developing only must-have features.\" no es lo que dice el texto.",
      "Opción correcta: delivering value in small batches.",
      "Incorrecto: \"releasing the features when customers ask about them.\" no es lo que dice el texto."
    ],
    "tip_es": "Definición y evidencia en texto: \"Breaking large projects into small working units... delivered piece by piece\" = small batches.",
    "ref": "txt-it1-1.5",
    "evidence_quote": "The rest can be delivered piece by piece. Therefore, a third option could be cutting the scope and incremental value delivery.",
    "human_rule": "incremental = en lotes pequeños.",
    "trigger_anchor": "incremental ➔ small batches",
    "spanglish_trap": "Confundir incremental con mínimo.",
    "workplace_usage": {
      "scenario": "Entrega Continua de Software",
      "en": "By delivering value in small batches, the team collects early feedback and eliminates delivery panic.",
      "es": "Al entregar valor en pequeños lotes, el equipo recopila comentarios tempranos y elimina el pánico de entrega."
    }
  },
  {
    "id": "it1-mod1-sec5-read-q6",
    "section": "R",
    "objective": "R4",
    "topic": "V08",
    "difficulty": 2,
    "pool": "practice",
    "stem": "Based on the final recommendations of the report, the immediate next step is to:",
    "options": [
      "have a feedback meeting with the customer.",
      "deliver the full scope by the end of the year.",
      "hire additional developers.",
      "get the feedback and confirm going ahead with the third option."
    ],
    "answer": 3,
    "why_correct": "• Pista: Siguiente paso inmediato según las recomendaciones finales.\n• Significado: Obtener el feedback y confirmar que se sigue adelante con el plan.\n• Descartas: No reunión de feedback, no entregar todo a fin de año y no contratar.",
    "why_wrong": [
      "Incorrecto: \"have a feedback meeting with the customer.\" no es lo que dice el texto.",
      "Incorrecto: \"deliver the full scope by the end of the year.\" no es lo que dice el texto.",
      "Incorrecto: \"hire additional developers.\" no es lo que dice el texto.",
      "Opción correcta: get the feedback and confirm going ahead with the third option."
    ],
    "tip_es": "Evidencia en el texto: \"...the next step should include informing our customer about the plan. We should also speak with the customer-field teams to confirm the scope for a minimum viable product\".",
    "ref": "txt-it1-1.5",
    "evidence_quote": "If we decide to proceed with the third option, then the next step should include informing our customer about the plan. We should also speak with the customer-field teams to confirm the scope for a minimum viable product.",
    "human_rule": "next step = confirmar y avanzar.",
    "trigger_anchor": "recommendation ➔ get feedback + confirm",
    "spanglish_trap": "Elegir un paso lejano.",
    "workplace_usage": {
      "scenario": "Alineación de Siguientes Pasos (Next Steps)",
      "en": "Our next step is to get the customer's feedback and confirm proceeding with the MVP scope.",
      "es": "Nuestro siguiente paso es obtener el feedback del cliente y confirmar que procedemos con el alcance del MVP."
    }
  }
];
