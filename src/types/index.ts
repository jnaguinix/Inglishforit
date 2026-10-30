export type ExamSection = 'UE' | 'L' | 'R';

export type UeObjective = 'UE1' | 'UE2' | 'UE3' | 'UE4' | 'UE5';
export type LObjective = 'L1' | 'L2' | 'L3' | 'L4' | 'L5';
export type RObjective = 'R1' | 'R2' | 'R3' | 'R4' | 'R5';
export type ObjectiveId = UeObjective | LObjective | RObjective;

export type GrammarTopicId =
  | 'G01' | 'G02' | 'G03' | 'G04' | 'G05' | 'G06' | 'G07' | 'G08' | 'G09'
  | 'G10' | 'G11' | 'G12' | 'G13' | 'G14' | 'G15' | 'G16' | 'G17' | 'G18'
  | 'G19' | 'G20' | 'G21' | 'G22' | 'G23' | 'G24' | 'G25' | 'G26'
  | 'G27' | 'G28' | 'G29';

export type VocabTopicId =
  | 'V01' | 'V02' | 'V03' | 'V04' | 'V05' | 'V06' | 'V07' | 'V08';

export type TopicId = GrammarTopicId | VocabTopicId;

export interface Question {
  id: string;
  section: ExamSection;
  objective: ObjectiveId;
  topic: TopicId;
  difficulty: 1 | 2 | 3;
  stem: string;
  options: string[]; // 4 options, or 3 for the official "whose opinion" and "agrees / neither" formats
  answer: number;
  why_correct: string;
  why_wrong: string[]; // one entry per option
  format?: OfficialItemFormat; // official item type; fixed-order formats are never shuffled
  tip_es: string;
  ref: string | null; // Text ID or Audio Track ID, or null
  evidence_quote?: string; // For Reading items
  trigger_scan?: string; // Quick 5-second visual anchor scan for TestNow certification
  paraphrase_map?: string; // Paraphrase mapping (question stem <=> audio/text evidence)
  pool?: 'exam' | 'practice'; // 'exam' = reserved for Mock/Diagnostic; 'practice' = new dedicated drill questions
  human_rule?: string; // Regla explicada con equivalencia cotidiana (cero fórmulas abstractas)
  trigger_anchor?: string; // Detonador visual de 3 segundos en el enunciado
  workplace_usage?: { scenario: string; en: string; es: string }; // Gemelo laboral en Slack/Jira/Tech
  spanglish_trap?: string; // Por qué un hispanohablante suele caer en la trampa
}

export interface B2Pattern {
  id: string;
  topicId: TopicId;
  title: string;
  humanName: string;
  category: 'grammar' | 'vocab' | 'idiom';
  plainAnalogy: string;
  threeSecondTrigger: string;
  spanglishTrap: string;
  workplaceExample: {
    scenario: string;
    en: string;
    es: string;
  };
  fastDrill: {
    stem: string;
    options: [string, string, string, string];
    answer: number;
    quickWhy: string;
  };
}

export interface Speaker {
  id: string;
  role: string;
  accentPreference?: 'en-US' | 'en-GB' | 'en-IN' | 'en-AU';
}

export interface AudioLine {
  s: string; // Speaker ID
  t: string; // Text line in English
}

export interface AudioTrack {
  id: string;
  title: string;
  scenario: string;
  speakers: Speaker[];
  lines: AudioLine[];
}

export interface ReadingText {
  id: string;
  title: string;
  topic: TopicId;
  wordCount: number;
  text: string;
}

export interface LessonExample {
  en: string;
  highlight: string;
  es: string;
  explanation: string;
}

export interface LessonAnalogyCard {
  title: string;
  metaphor: string;
  whyItWorks: string;
}

export interface LessonThreeSecondTable {
  headers: [string, string, string];
  rows: [string, string, string][];
  rule: string;
}

export interface MiniLesson {
  topicId: TopicId;
  titleEs: string;
  formula: string;
  summaryEs: string;
  howExamTestsIt: string;
  examples: LessonExample[];
  spanishTrapsEs: string;
  cheatSheetRule: string;
  analogyCard?: LessonAnalogyCard;
  threeSecondTable?: LessonThreeSecondTable;
  mentalShortcut?: string;
}

// Official EIT-B2 item formats reproduced in the strategy lessons
export type OfficialItemFormat =
  | 'complete'      // "...select the correct answer option to complete the sentence."
  | 'select'        // "...select the correct answer option according to the text."
  | 'whose_opinion' // "Whose opinion matches the statement: the woman, the man, or both?"
  | 'agrees'        // "Decide which statement agrees with the text or neither."
  | 'paragraph';    // "Decide which paragraph corresponds to the statement."

export interface StrategyCheckItem {
  format: OfficialItemFormat;
  instruction: string; // English instruction worded like the real exam
  stem: string;
  options: string[]; // 3 or 4 options, as in the official item
  answer: number;
  whyEs: string;
  evidence: string; // exact words from the audio or text that prove the answer
}

export interface StrategyReadingBlock {
  label?: string; // "Paragraph A", "Source 1"...
  heading?: string;
  text: string;
}

export interface StrategyLesson {
  objective: LObjective | RObjective;
  section: 'L' | 'R';
  titleEs: string;
  officialSkill: string; // closest objective wording from the official EIT-B2 syllabus
  shortcut: { cue: string; action: string }[];
  whatItTestsEs: string;
  steps: { title: string; body: string }[];
  signals: { en: string; es: string }[];
  traps: { trap: string; why: string }[];
  audio?: AudioTrack;
  reading?: { title: string; blocks: StrategyReadingBlock[] };
  check: StrategyCheckItem[];
}

export interface ExamConfig {
  sections: {
    UE: { count: number; nameEs: string; nameEn: string };
    L: { count: number; nameEs: string; nameEn: string };
    R: { count: number; nameEs: string; nameEn: string };
  };
  totalMinutes: number;
  passingScorePct: number; // 70%
  allowBackNavigation: boolean;
  maxAudioRepeats: number; // default 2
  defaultSpeechRate: number; // default 1.0 (range 0.9 - 1.1)
  masteryMinAttempts: number; // 12 responses
  masteryThresholdPct: number; // 85%
  masteryMinDays: number; // at least 2 distinct days
  spacedRepetitionIntervalsDays: number[]; // [1, 2, 4, 7, 14]
}

export interface AttemptLog {
  id: string;
  questionId: string;
  topic: TopicId;
  section: ExamSection;
  objective: ObjectiveId;
  userSelection: number;
  isCorrect: boolean;
  timestamp: number; // unix ms
  dateStr: string; // YYYY-MM-DD
  mode: 'diagnostic' | 'practice' | 'mock' | 'review';
}

export interface TopicStats {
  topicId: TopicId;
  attempts: number;
  correctCount: number;
  accuracy: number;
  distinctDays: number;
  isMastered: boolean;
  status: 'untested' | 'weak' | 'in_progress' | 'mastered';
}

export interface DiagnosticResult {
  completedAt: number;
  totalScore: number;
  totalQuestions: number;
  percentage: number;
  sectionScores: Record<ExamSection, { correct: number; total: number; pct: number }>;
  objectiveScores: Record<string, { correct: number; total: number; pct: number }>;
  weakestTopics: TopicId[];
}

export interface SpacedErrorCard {
  questionId: string;
  topic: TopicId;
  intervalIndex: number;
  nextReviewAt: number;
  wrongAttemptsCount: number;
  lastTestedAt: number;
}

export type MainTab = 'today' | 'practice' | 'mock' | 'progress';
