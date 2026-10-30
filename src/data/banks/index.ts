import { Question, TopicId } from '../../types';
import { GRAMMAR_ADVANCED_BANK } from './grammarAdvancedBank';
import { VOCAB_CLOUD_SECURITY_BANK } from './vocabCloudSecurityBank';
import { VOCAB_DEVOPS_ARCHITECTURE_BANK } from './vocabDevOpsArchitectureBank';
import { ENGLISH_FOR_IT_1_MODULE_1_BANK } from './englishForIT1_Module1';
import { ENGLISH_FOR_IT_1_SECTION_2_BANK } from './englishForIT1_Section2';
import { ENGLISH_FOR_IT_1_SECTION_3_BANK } from './englishForIT1_Section3';
import { ENGLISH_FOR_IT_1_SECTION_4_BANK } from './englishForIT1_Section4';
import { ENGLISH_FOR_IT_1_SECTION_5_BANK } from './englishForIT1_Section5';
import { ENGLISH_FOR_IT_1_MODULE_2_SECTION_1_BANK } from './englishForIT1_Module2_Section1';
import { ENGLISH_FOR_IT_1_MODULE_2_SECTION_2_BANK } from './englishForIT1_Module2_Section2';
import { ENGLISH_FOR_IT_1_MODULE_2_SECTION_3_BANK } from './englishForIT1_Module2_Section3';
import { ENGLISH_FOR_IT_1_MODULE_2_SECTION_4_BANK } from './englishForIT1_Module2_Section4';
import { ENGLISH_FOR_IT_2_MODULE_1_BANK } from './englishForIT2_Module1';
import { ENGLISH_FOR_IT_2_SECTION_2_BANK } from './englishForIT2_Section2';
import { ENGLISH_FOR_IT_2_SECTION_3_BANK } from './englishForIT2_Section3';
import { ENGLISH_FOR_IT_2_SECTION_4_BANK } from './englishForIT2_Section4';
import { ENGLISH_FOR_IT_2_MODULE_2_SECTION_1_BANK } from './englishForIT2_Module2_Section1';
import { MISSING_TOPICS_AND_VOCAB_BANK } from './missingTopicsAndVocabBank';
import { READING_AND_IT2_EXPANSION_BANK } from './readingAndIT2ExpansionBank';
import { CISCO_IT1_EXTRA_GRAMMAR_BANK } from './ciscoIt1ExtraGrammarBank';
import { ENGLISH_FOR_IT_1_MODULE_3_BANK } from './englishForIT1_Module3';
import { ENGLISH_FOR_IT_1_MODULE_4_BANK } from './englishForIT1_Module4';
import { ENGLISH_FOR_IT_1_MODULE_5_BANK } from './englishForIT1_Module5';
import { ENGLISH_FOR_IT_1_MODULE_6_BANK } from './englishForIT1_Module6';
import { LISTENING_SET_1_QUESTIONS } from '../officialFormat/listeningSet1';
import { LISTENING_SET_2_QUESTIONS } from '../officialFormat/listeningSet2';
import { READING_SET_1_QUESTIONS } from '../officialFormat/readingSet1';
import { READING_SET_2_QUESTIONS } from '../officialFormat/readingSet2';

const OFFICIAL_FORMAT_LISTENING = [...LISTENING_SET_1_QUESTIONS, ...LISTENING_SET_2_QUESTIONS];
const OFFICIAL_FORMAT_READING = [...READING_SET_1_QUESTIONS, ...READING_SET_2_QUESTIONS];

export { GRAMMAR_ADVANCED_BANK } from './grammarAdvancedBank';
export { VOCAB_CLOUD_SECURITY_BANK } from './vocabCloudSecurityBank';
export { VOCAB_DEVOPS_ARCHITECTURE_BANK } from './vocabDevOpsArchitectureBank';
export { ENGLISH_FOR_IT_1_MODULE_1_BANK } from './englishForIT1_Module1';
export { ENGLISH_FOR_IT_1_SECTION_2_BANK } from './englishForIT1_Section2';
export { ENGLISH_FOR_IT_1_SECTION_3_BANK } from './englishForIT1_Section3';
export { ENGLISH_FOR_IT_1_SECTION_4_BANK } from './englishForIT1_Section4';
export { ENGLISH_FOR_IT_1_SECTION_5_BANK } from './englishForIT1_Section5';
export { ENGLISH_FOR_IT_1_MODULE_2_SECTION_1_BANK } from './englishForIT1_Module2_Section1';
export { ENGLISH_FOR_IT_1_MODULE_2_SECTION_2_BANK } from './englishForIT1_Module2_Section2';
export { ENGLISH_FOR_IT_1_MODULE_2_SECTION_3_BANK } from './englishForIT1_Module2_Section3';
export { ENGLISH_FOR_IT_1_MODULE_2_SECTION_4_BANK } from './englishForIT1_Module2_Section4';
export { ENGLISH_FOR_IT_2_MODULE_1_BANK } from './englishForIT2_Module1';
export { ENGLISH_FOR_IT_2_SECTION_2_BANK } from './englishForIT2_Section2';
export { ENGLISH_FOR_IT_2_SECTION_3_BANK } from './englishForIT2_Section3';
export { ENGLISH_FOR_IT_2_SECTION_4_BANK } from './englishForIT2_Section4';
export { ENGLISH_FOR_IT_2_MODULE_2_SECTION_1_BANK } from './englishForIT2_Module2_Section1';
export { MISSING_TOPICS_AND_VOCAB_BANK } from './missingTopicsAndVocabBank';
export { READING_AND_IT2_EXPANSION_BANK } from './readingAndIT2ExpansionBank';
export { CISCO_IT1_EXTRA_GRAMMAR_BANK } from './ciscoIt1ExtraGrammarBank';
export { ENGLISH_FOR_IT_1_MODULE_3_BANK } from './englishForIT1_Module3';
export { ENGLISH_FOR_IT_1_MODULE_4_BANK } from './englishForIT1_Module4';
export { ENGLISH_FOR_IT_1_MODULE_5_BANK } from './englishForIT1_Module5';
export { ENGLISH_FOR_IT_1_MODULE_6_BANK } from './englishForIT1_Module6';

/**
 * Consolidated Modular Banks Questions
 * Total items from all separate modular packs.
 */
export const MODULAR_BANKS_QUESTIONS: Question[] = [
  ...ENGLISH_FOR_IT_1_MODULE_1_BANK,
  ...ENGLISH_FOR_IT_1_SECTION_2_BANK,
  ...ENGLISH_FOR_IT_1_SECTION_3_BANK,
  ...ENGLISH_FOR_IT_1_SECTION_4_BANK,
  ...ENGLISH_FOR_IT_1_SECTION_5_BANK,
  ...ENGLISH_FOR_IT_1_MODULE_2_SECTION_1_BANK,
  ...ENGLISH_FOR_IT_1_MODULE_2_SECTION_2_BANK,
  ...ENGLISH_FOR_IT_1_MODULE_2_SECTION_3_BANK,
  ...ENGLISH_FOR_IT_1_MODULE_2_SECTION_4_BANK,
  ...GRAMMAR_ADVANCED_BANK,
  ...VOCAB_CLOUD_SECURITY_BANK,
  ...VOCAB_DEVOPS_ARCHITECTURE_BANK,
  ...ENGLISH_FOR_IT_2_MODULE_1_BANK,
  ...ENGLISH_FOR_IT_2_SECTION_2_BANK,
  ...ENGLISH_FOR_IT_2_SECTION_3_BANK,
  ...ENGLISH_FOR_IT_2_SECTION_4_BANK,
  ...ENGLISH_FOR_IT_2_MODULE_2_SECTION_1_BANK,
  ...MISSING_TOPICS_AND_VOCAB_BANK,
  ...READING_AND_IT2_EXPANSION_BANK,
  ...CISCO_IT1_EXTRA_GRAMMAR_BANK,
  ...ENGLISH_FOR_IT_1_MODULE_3_BANK,
  ...ENGLISH_FOR_IT_1_MODULE_4_BANK,
  ...ENGLISH_FOR_IT_1_MODULE_5_BANK,
  ...ENGLISH_FOR_IT_1_MODULE_6_BANK,
  ...OFFICIAL_FORMAT_LISTENING,
  ...OFFICIAL_FORMAT_READING
];

export interface ModularBankMeta {
  id: string;
  name: string;
  description: string;
  count: number;
  topicsCovered: TopicId[];
}

export const REGISTERED_MODULAR_BANKS: ModularBankMeta[] = [
  {
    id: 'it1-mod1-passive-voice',
    name: 'English for IT 1 – Módulo 1 (Sección 1): The Passive Voice',
    description: '11 reactivos oficiales de English for IT 1 (Product Management: Identify Problems – Section 1: The Passive Voice: Impersonal Passive & Personal Passive, Ejercicio 1 y 2 completos).',
    count: ENGLISH_FOR_IT_1_MODULE_1_BANK.length,
    topicsCovered: ['G01']
  },
  {
    id: 'it1-mod1-relative-pronouns',
    name: 'English for IT 1 – Módulo 1 (Sección 2): Relative Pronouns',
    description: '12 reactivos oficiales de English for IT 1 (Product Management: Identify Problems – Section 2: Relative Pronouns & Nominal Relative Clauses, Ejercicio 1 y 2 completos).',
    count: ENGLISH_FOR_IT_1_SECTION_2_BANK.length,
    topicsCovered: ['G02']
  },
  {
    id: 'it1-mod1-ux-listening',
    name: 'English for IT 1 – 1.3 Section 3 – Listening: UX Experience',
    description: '12 reactivos oficiales de English for IT 1 (Product Management: Identify Problems – Section 3: Listening y Vocabulario: UX Experience, NPS, Detractors y ROI).',
    count: ENGLISH_FOR_IT_1_SECTION_3_BANK.length,
    topicsCovered: ['V08']
  },
  {
    id: 'it1-mod1-as-if',
    name: 'English for IT 1 – 1.4 Section 4 – Grammar: Past Simple with "as if" & "as though"',
    description: '11 reactivos oficiales de English for IT 1 (Product Management: Identify Problems – Section 4: Past Simple y Subjuntivo Were con "as if" / "as though", Ejercicio 1 y 2 completos).',
    count: ENGLISH_FOR_IT_1_SECTION_4_BANK.length,
    topicsCovered: ['G03']
  },
  {
    id: 'it1-mod1-supplier-evaluation',
    name: 'English for IT 1 – 1.5 Section 5 – Reading: Supplier Evaluation Modules',
    description: '16 reactivos oficiales de English for IT 1 (Product Management: Identify Problems – Section 5: Reading y Vocabulario: Supplier Evaluation, Scope Creep, Incremental Value Delivery, Secondment y Onboarding).',
    count: ENGLISH_FOR_IT_1_SECTION_5_BANK.length,
    topicsCovered: ['V08']
  },
  {
    id: 'it1-mod2-emphatic-do',
    name: 'English for IT 1 – 2.1 Section 1 – Grammar: The Emphatic "do"',
    description: '14 reactivos oficiales de English for IT 1 (Network Engineer: Interpret & Implement Instructions – Section 1: The Emphatic "do": do, does, did, adverbios really/absolutely, question tags y oraciones enfáticas vs. neutras).',
    count: ENGLISH_FOR_IT_1_MODULE_2_SECTION_1_BANK.length,
    topicsCovered: ['G04']
  },
  {
    id: 'it1-mod2-listening-manager-junior',
    name: 'English for IT 1 – 2.2 Section 2 – Listening: Manager and Junior Network Engineer',
    description: '12 reactivos oficiales de English for IT 1 (Network Engineer: Interpret & Implement Instructions – Section 2: Vocabulario técnico handled, omitted, nevertheless, analyze, risks, eliminated, performance, right away y comprensión auditiva de Bobby y Peter sobre incidentes de seguridad y puntos de acceso no autorizados).',
    count: ENGLISH_FOR_IT_1_MODULE_2_SECTION_2_BANK.length,
    topicsCovered: ['V07']
  },
  {
    id: 'it1-mod2-dependent-prepositions',
    name: 'English for IT 1 – 2.3 Section 3 – Grammar: Dependent Prepositions',
    description: '14 reactivos oficiales de English for IT 1 (Network Engineer: Interpret & Implement Instructions – Section 3: Preposiciones dependientes con verbos, adjetivos y sustantivos: depend on, increase in, consist of, responsible for, protect from, comment on, apologize for, according to, respond to, incapable of, impact on).',
    count: ENGLISH_FOR_IT_1_MODULE_2_SECTION_3_BANK.length,
    topicsCovered: ['G05']
  },
  {
    id: 'it1-mod2-reading-job-roles',
    name: 'English for IT 1 – 2.4 Section 4 – Reading: Job Roles and Responsibilities',
    description: '16 reactivos oficiales de English for IT 1 (Network Engineer: Interpret & Implement Instructions – Section 4: Lectura comprensiva de memo sobre límites de funciones de red vs IT Helpdesk, cableado óptico vs cobre UTP, escalación y vocabulario oficial beyond your scope of duties, have in mind, handled, didn\'t do a thing, sent back, all the same).',
    count: ENGLISH_FOR_IT_1_MODULE_2_SECTION_4_BANK.length,
    topicsCovered: ['V06']
  },
  {
    id: 'it2-mod1-subjunctive',
    name: 'English for IT 2 – Módulo 1 (Sección 1): Subjunctive Mood',
    description: '13 reactivos oficiales de English for IT 2 (Section 1: The Subjunctive Mood: Ejercicio 1 y 2 completos).',
    count: ENGLISH_FOR_IT_2_MODULE_1_BANK.length,
    topicsCovered: ['G13']
  },
  {
    id: 'it2-mod1-logical-deduction',
    name: 'English for IT 2 – Módulo 1 (Sección 2): Logical Deduction',
    description: '15 reactivos oficiales de English for IT 2 (Section 2: Logical Deduction: must, might, could, can, can\'t, couldn\'t).',
    count: ENGLISH_FOR_IT_2_SECTION_2_BANK.length,
    topicsCovered: ['G14']
  },
  {
    id: 'it2-mod1-training-session',
    name: 'English for IT 2 – 1.3 Section 3 – Listening: Network Engineer Training Session',
    description: '10 reactivos oficiales de English for IT 2 (Section 3: Vocabulario técnico y comprensión auditiva de Amanda & Paul).',
    count: ENGLISH_FOR_IT_2_SECTION_3_BANK.length,
    topicsCovered: ['V07']
  },
  {
    id: 'it2-mod1-since-conjunction',
    name: 'English for IT 2 – 1.4 Section 4 – Grammar: Since as a Conjunction',
    description: '12 reactivos oficiales de English for IT 2 (Section 4: Since = After vs. Since = Because vs. Both).',
    count: ENGLISH_FOR_IT_2_SECTION_4_BANK.length,
    topicsCovered: ['G15']
  },
  {
    id: 'it2-mod2-negative-future',
    name: 'English for IT 2 – 2.1 Section 1 – Grammar: Negative Future Tenses',
    description: '12 reactivos oficiales de English for IT 2 (Section 1: Decision con Present Continuous vs. Intention con Going to).',
    count: ENGLISH_FOR_IT_2_MODULE_2_SECTION_1_BANK.length,
    topicsCovered: ['G16']
  },
  {
    id: 'grammar-advanced',
    name: 'Banco Gramatical Avanzado B2',
    description: 'Reactivos de profundización en voz pasiva, relativos, inversión, condicionales y fórmulas de cortesía.',
    count: GRAMMAR_ADVANCED_BANK.length,
    topicsCovered: ['G01', 'G02', 'G03', 'G04', 'G05', 'G06', 'G07', 'G08', 'G11', 'G12', 'G13', 'G14', 'G19', 'G20', 'G21']
  },
  {
    id: 'vocab-cloud-security',
    name: 'Banco Cloud & Ciberseguridad',
    description: 'Terminología B2 de arquitectura multi-inquilino, pretexting, zero-trust y protocolos de red (BGP, MTU, jitter).',
    count: VOCAB_CLOUD_SECURITY_BANK.length,
    topicsCovered: ['V01', 'V04', 'V05', 'V07']
  },
  {
    id: 'vocab-devops-architecture',
    name: 'Banco DevOps, Runtimes & Roles TI',
    description: 'Terminología B2 de JIT, garbage collection, escalaciones de SLA, postmortems, SRE y testing de regresión.',
    count: VOCAB_DEVOPS_ARCHITECTURE_BANK.length,
    topicsCovered: ['V02', 'V03', 'V06', 'V08']
  },
  {
    id: 'missing-topics-and-vocab-b2',
    name: 'Banco Integral B2: Gramática de Cobertura Completa, Vocabulario y Listening',
    description: '180 reactivos B2 que completan el 100% de la taxonomía OpenEDG (G10, G17, G18, G22–G29, V01–V05 y 20 ítems exclusivos de Listening para práctica).',
    count: MISSING_TOPICS_AND_VOCAB_BANK.length,
    topicsCovered: ['G10', 'G17', 'G18', 'G22', 'G23', 'G24', 'G25', 'G27', 'G28', 'G29', 'V01', 'V02', 'V03', 'V04', 'V05', 'V07', 'V08']
  },
  {
    id: 'cisco-it1-extra-grammar',
    name: 'English for IT 1 – Apéndice B: Extra Grammar (Part 8)',
    description: '114 reactivos oficiales de Cisco/OpenEDG que cubren tiempos verbales avanzados, modales de habilidad y deducción, pasivas modales, estructuras de necesidad (need/needn\'t), comparativas complejas, idioms y fórmulas de cortesía y hedging.',
    count: CISCO_IT1_EXTRA_GRAMMAR_BANK.length,
    topicsCovered: ['G01', 'G07', 'G08', 'G09', 'G12', 'G14', 'G16', 'G20', 'G21', 'G22', 'G25', 'G26', 'G29']
  },
  {
    id: 'it1-mod3-dev-processes',
    name: 'English for IT 1 – Módulo 3: Software Engineering & Development Processes',
    description: '62 reactivos oficiales de English for IT 1 (Conjunctions at sentence start, Negative inversion & conditionals, Lambda functions & Code Reviews, Modals should/ought to/must, y Compilers vs. Interpreters).',
    count: ENGLISH_FOR_IT_1_MODULE_3_BANK.length,
    topicsCovered: ['G06', 'G07', 'G08', 'V02']
  },
  {
    id: 'it1-mod4-customer-support',
    name: 'English for IT 1 – Módulo 4: Customer Support & Communication Strategies',
    description: '44 reactivos oficiales de English for IT 1 (Adverbs of courtesy & transition, Customer support listening & paraphrasing, Workplace idioms, y Asking customers effective questions).',
    count: ENGLISH_FOR_IT_1_MODULE_4_BANK.length,
    topicsCovered: ['G09', 'V03']
  },
  {
    id: 'it1-mod5-sec-runbooks',
    name: 'English for IT 1 – Módulo 5: IT Security Runbooks & Incident Response',
    description: '57 reactivos oficiales de English for IT 1 (Security runbook imperatives, Adverbs of possibility & certainty, Vishing & fraudulent calls listening, Probability & deduction adverbs, y Information Security Policy / Zero Trust).',
    count: ENGLISH_FOR_IT_1_MODULE_5_BANK.length,
    topicsCovered: ['G10', 'G11', 'V04', 'V05']
  },
  {
    id: 'it1-mod6-adv-security',
    name: 'English for IT 1 – Módulo 6: Advanced Security Architectures & Incident Investigation',
    description: '59 reactivos oficiales de English for IT 1 (Future Perfect & Future Perfect Continuous, Security Officer interview & CIA triad, "On the point of" vs "About to", Encryption/VPN, y Pegasus Spyware incident).',
    count: ENGLISH_FOR_IT_1_MODULE_6_BANK.length,
    topicsCovered: ['G12', 'G20', 'V05']
  },
  {
    id: 'official-format-listening',
    name: 'Listening en formato oficial EIT-B2 (12 conversaciones)',
    description: 'Preguntas de Listening con los formatos oficiales: completar la frase, elegir la respuesta y "¿quién lo opina: el hombre, la mujer o ambos?", con distractores creíbles y evidencia literal del audio.',
    count: OFFICIAL_FORMAT_LISTENING.length,
    topicsCovered: ['V01', 'V02', 'V03', 'V04', 'V05', 'V06', 'V07', 'V08']
  },
  {
    id: 'official-format-reading',
    name: 'Reading en formato oficial EIT-B2 (10 textos)',
    description: 'Preguntas de Reading con los formatos oficiales: "¿qué párrafo lo dice?", "¿lo afirma el texto o ninguno?" y elegir la respuesta, incluidos textos con varias fuentes para R5.',
    count: OFFICIAL_FORMAT_READING.length,
    topicsCovered: ['V01', 'V02', 'V03', 'V04', 'V05', 'V06', 'V07', 'V08']
  }
];

/**
 * Helper to fetch modular bank questions by topic ID
 */
export function getModularBankQuestionsByTopic(topicId: TopicId): Question[] {
  return MODULAR_BANKS_QUESTIONS.filter(q => q.topic === topicId);
}
