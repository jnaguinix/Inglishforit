import React, { useState, useEffect, useRef } from 'react';
import {
  Target,
  BookOpen,
  Play,
  CheckCircle2,
  ArrowLeft,
  RotateCcw,
  Layers,
  Award,
  Sparkles,
  ChevronRight,
  Headphones,
  Volume2,
  Filter,
  UserCheck,
  Zap,
  BookmarkCheck,
  Info,
  Shuffle,
  Brain,
  Flame,
  ShieldAlert,
  AlertTriangle,
  Check,
  Search
} from 'lucide-react';
import { Question, TopicId, MiniLesson, LObjective, RObjective, StrategyLesson } from '../types';
import { TOPICS, OBJECTIVES } from '../config/taxonomy';
import { MINI_LESSONS } from '../data/miniLessons';
import { ENGLISH_FOR_IT_1_MODULES, ENGLISH_FOR_IT_2_MODULES, CourseLessonItem } from '../data/courseModules';
import { OFFICIAL_SYLLABUS_IDIOMS, OfficialIdiom } from '../data/officialIdioms';
import { FALSE_FRIENDS_DATA, FalseFriendEntry } from '../data/falseFriends';
import { StorageService } from '../services/storage';
import { InterleavingEngine, InterleavedSprintSummary } from '../services/interleavingEngine';
import { QuestionCard } from '../components/QuestionCard';
import { MiniLessonModal } from '../components/MiniLessonModal';
import { StrategyLessonModal } from '../components/StrategyLessonModal';
import { StrategyLessonCards } from '../components/StrategyLessonCards';
import { LISTENING_STRATEGY_LESSONS, READING_STRATEGY_LESSONS } from '../data/strategyLessons';
import { AudioPlayerCard } from '../components/AudioPlayerCard';
import { ReadingViewer } from '../components/ReadingViewer';
import { LISTENING_TRACKS } from '../data/listeningTracks';
import { READING_TEXTS } from '../data/readingTexts';
import { shuffleArray, shuffleQuestionsPoolOptions } from '../utils/random';
import { StructuredExplanation } from '../utils/textFormatting';

interface PracticeViewProps {
  initialTopicId?: TopicId | null;
  startInterleaved?: boolean;
  onClearInterleaved?: () => void;
  startErrorReview?: boolean;
  onClearErrorReview?: () => void;
  onBackToHome?: () => void;
  onOpenCheatSheet?: () => void;
}

interface LessonMappingConfig {
  prefix?: string;
  readingRef?: string;
  listeningRef?: string;
  topic: TopicId;
  title: string;
}

const LESSON_BANK_PREFIX_MAP: Record<string, LessonMappingConfig> = {
  // English for IT 1 — Modules 1 to 6
  '1.1': { prefix: 'it1-mod1-sec1-', topic: 'G01', title: 'English for IT 1: 1.1 Section 1 – Grammar: The Passive Voice (Oficial)' },
  '1.2': { prefix: 'it1-mod1-sec2-', topic: 'G02', title: 'English for IT 1: 1.2 Section 2 – Grammar: Relative Pronouns (Oficial)' },
  '1.3': { prefix: 'it1-mod1-sec3-', listeningRef: 'aud-it1-1.3', topic: 'V08', title: 'English for IT 1: 1.3 Section 3 – Listening: UX Experience (Oficial)' },
  '1.4': { prefix: 'it1-mod1-sec4-', topic: 'G03', title: 'English for IT 1: 1.4 Section 4 – Grammar: Past Simple with "as if" & "as though" (Oficial)' },
  '1.5': { prefix: 'it1-mod1-sec5-', readingRef: 'txt-it1-1.5', topic: 'V08', title: 'English for IT 1: 1.5 Section 5 – Reading: Supplier Evaluation Modules (Oficial)' },
  '2.1': { prefix: 'it1-mod2-sec1-', topic: 'G04', title: 'English for IT 1: 2.1 Section 1 – Grammar: The Emphatic "do" (Oficial)' },
  '2.2': { prefix: 'it1-mod2-sec2-', listeningRef: 'aud-it1-2.2', topic: 'V07', title: 'English for IT 1: 2.2 Section 2 – Listening: Manager and Junior Network Engineer (Oficial)' },
  '2.3': { prefix: 'it1-mod2-sec3-', topic: 'G05', title: 'English for IT 1: 2.3 Section 3 – Grammar: Dependent Prepositions (Oficial)' },
  '2.4': { prefix: 'it1-mod2-sec4-', readingRef: 'txt-it1-2.4', topic: 'V06', title: 'English for IT 1: 2.4 Section 4 – Reading: Job Roles and Responsibilities (Oficial)' },
  // Module 3
  '3.1': { prefix: 'it1-mod3-sec1-', topic: 'G06', title: 'English for IT 1: 3.1 Section 1 – Grammar: Starting Sentences with Conjunctions (Oficial)' },
  '3.2': { prefix: 'it1-mod3-sec2-', topic: 'G07', title: 'English for IT 1: 3.2 Section 2 – Grammar: Negative Inversion & Conditionals (Oficial)' },
  '3.3': { prefix: 'it1-mod3-sec3-', listeningRef: 'aud-01', topic: 'V02', title: 'English for IT 1: 3.3 Section 3 – Listening: Lambda Functions, Code Reviews & Lexicon (Oficial)' },
  '3.4': { prefix: 'it1-mod3-sec4-', topic: 'G08', title: 'English for IT 1: 3.4 Section 4 – Grammar: Modals (should, ought to, must) (Oficial)' },
  '3.5': { prefix: 'it1-mod3-sec5-', readingRef: 'txt-it1-3.5', topic: 'V02', title: 'English for IT 1: 3.5 Section 5 – Reading: Compilers vs. Interpreters (Oficial)' },
  // Module 4
  '4.1': { prefix: 'it1-mod4-sec1-', topic: 'G09', title: 'English for IT 1: 4.1 Section 1 – Grammar: Adverbs of Courtesy & Transition (Oficial)' },
  '4.2': { prefix: 'it1-mod4-sec2-', listeningRef: 'aud-07', topic: 'V03', title: 'English for IT 1: 4.2 Section 2 – Listening: Customer Support Dialogues & Paraphrases (Oficial)' },
  '4.3': { prefix: 'it1-mod4-sec3-', topic: 'G26', title: 'English for IT 1: 4.3 Section 3 – Workplace Idioms & Phrasal Expressions (Oficial)' },
  '4.4': { prefix: 'it1-mod4-sec4-', readingRef: 'txt-it1-4.4', topic: 'V03', title: 'English for IT 1: 4.4 Section 4 – Reading: Asking Customers Effective Questions (Oficial)' },
  // Module 5
  '5.1': { prefix: 'it1-mod5-sec1-', topic: 'G10', title: 'English for IT 1: 5.1 Section 1 – Grammar: Imperatives & Security Runbook Instructions (Oficial)' },
  '5.2': { prefix: 'it1-mod5-sec2-', topic: 'G11', title: 'English for IT 1: 5.2 Section 2 – Grammar: Adverbs of Possibility & Certainty (Oficial)' },
  '5.3': { prefix: 'it1-mod5-sec3-', listeningRef: 'aud-02', topic: 'V04', title: 'English for IT 1: 5.3 Section 3 – Listening: Fraudulent Calls & Social Engineering (Oficial)' },
  '5.4': { prefix: 'it1-mod5-sec4-', topic: 'G11', title: 'English for IT 1: 5.4 Section 4 – Grammar: Probability & Deduction Adverbs (Oficial)' },
  '5.5': { prefix: 'it1-mod5-sec5-', readingRef: 'txt-01', topic: 'V05', title: 'English for IT 1: 5.5 Section 5 – Reading: Information Security Policy (Zero Trust) (Oficial)' },
  // Module 6
  '6.1': { prefix: 'it1-mod6-sec1-', topic: 'G12', title: 'English for IT 1: 6.1 Section 1 – Grammar: Future Perfect & Future Perfect Continuous (Oficial)' },
  '6.2': { prefix: 'it1-mod6-sec2-', listeningRef: 'aud-02', topic: 'V05', title: 'English for IT 1: 6.2 Section 2 – Listening: Security Officer Interview (Part 1 - CIA Triad) (Oficial)' },
  '6.3': { prefix: 'it1-mod6-sec3-', topic: 'G12', title: 'English for IT 1: 6.3 Section 3 – Grammar: "On the point of" vs "About to" (Oficial)' },
  '6.4': { prefix: 'it1-mod6-sec4-', listeningRef: 'aud-08', topic: 'V05', title: 'English for IT 1: 6.4 Section 4 – Listening: Security Officer Interview (Part 2 - Encryption & VPN) (Oficial)' },
  '6.5': { prefix: 'it1-mod6-sec5-', readingRef: 'txt-it1-6.5', topic: 'V05', title: 'English for IT 1: 6.5 Section 5 – Reading: The Pegasus Spyware Incident (Oficial)' },
  // English for IT 2 — Modules 1 to 6
  '2-1.1': { prefix: 'it2-1-', topic: 'G13', title: 'English for IT 2: 1.1 Section 1 – The Subjunctive Mood' },
  '2-1.2': { prefix: 'it2-2-', topic: 'G14', title: 'English for IT 2: 1.2 Section 2 – Logical Deduction' },
  '2-1.3': { prefix: 'it2-3-', listeningRef: 'aud-it2-1.3', topic: 'V07', title: 'English for IT 2: 1.3 Section 3 – Listening: Network Engineer Training Session' },
  '2-1.4': { prefix: 'it2-4-', topic: 'G15', title: 'English for IT 2: 1.4 Section 4 – Grammar: Since as a Conjunction' },
  '2-2.1': { prefix: 'it2-mod2-sec1-', topic: 'G16', title: 'English for IT 2: 2.1 Section 1 – Grammar: Negative Future Tenses' },
  '2-2.2': { listeningRef: 'aud-03', topic: 'V03', title: 'English for IT 2: 2.2 Listening – Mr. Smith is Furious (SLA Escalation)' },
  '2-2.4': { readingRef: 'txt-03', topic: 'V03', title: 'English for IT 2: 2.4 Reading – A Feature, Not a Bug' },
  '2-3.2': { listeningRef: 'aud-04', topic: 'V08', title: 'English for IT 2: 3.2 Listening – Software Test Report (QA Sync)' },
  '2-3.4': { readingRef: 'txt-04', topic: 'V08', title: 'English for IT 2: 3.4 Reading – Unix vs. Ubuntu Server LTS' },
  '2-4.2': { listeningRef: 'aud-10', topic: 'V08', title: 'English for IT 2: 4.2 Listening – Code Review & Technical Debt' },
  '2-5.2': { listeningRef: 'aud-06', topic: 'V07', title: 'English for IT 2: 5.2 Listening – Network Report Interview (QoS)' },
  '2-5.4': { readingRef: 'txt-it2-5.4', topic: 'V07', title: 'English for IT 2: 5.4 Reading – Enterprise NOC Email Support' },
  '2-6.3': { listeningRef: 'aud-05', topic: 'V08', title: 'English for IT 2: 6.3 Listening – Datacenter Troubleshooting & Evacuation' },
  '2-6.5': { readingRef: 'txt-it2-6.5', topic: 'V08', title: 'English for IT 2: 6.5 Reading – Blameless Postmortems & Feedback' }
};

interface ContrastivePairConfig {
  id: string;
  title: string;
  subtitle: string;
  rule: string;
  topics: TopicId[];
}

const CONTRASTIVE_PAIRS: ContrastivePairConfig[] = [
  {
    id: 'pair-concession',
    title: 'Although / Even though vs. Despite / In spite of',
    subtitle: 'Conjunción (+ Sujeto + Verbo) vs. Preposición (+ Sustantivo / -ing)',
    rule: '¿Hay verbo conjugado detrás del hueco? ➔ Although / Even though. ¿Solo sustantivo o -ing? ➔ Despite / In spite of (¡nunca "despite of"!).',
    topics: ['G06']
  },
  {
    id: 'pair-even',
    title: 'Even if (Hipótesis) vs. Even though (Hecho Real)',
    subtitle: 'Condición extrema hipotética vs. Contraste de un hecho que ya ocurre',
    rule: '¿Es un supuesto ("incluso si llegara a fallar")? ➔ Even if. ¿Es un hecho real ("a pesar de que está al 99%")? ➔ Even though.',
    topics: ['G24', 'G06']
  },
  {
    id: 'pair-causality',
    title: 'Because / Since (+ Verbo) vs. Due to / Because of (+ Sustantivo)',
    subtitle: 'Causalidad sintáctica en postmortems y reportes de incidentes',
    rule: '¿Sigue [Sujeto + Verbo]? ➔ Because / Since. ¿Sigue solo un grupo nominal? ➔ Due to / Because of.',
    topics: ['G28', 'G15']
  },
  {
    id: 'pair-relatives',
    title: 'What ("Lo que") vs. Which / That (Con antecedente)',
    subtitle: 'Relativos nominales sin antecedente vs. Cláusulas relativas estándar',
    rule: '¿Hay sustantivo justo antes del hueco? ➔ Which / That / Who. ¿Hay un verbo o preposición sin sustantivo previo? ➔ What.',
    topics: ['G02', 'G21']
  },
  {
    id: 'pair-inversion',
    title: 'Inversión Negativa y Condicional (Not only / Under no circumstances / Only if)',
    subtitle: 'Orden de pregunta [Auxiliar + Sujeto + Verbo] vs. Orden afirmativo',
    rule: 'Si la oración abre con "Under no circumstances / Not only / Never" o "Only if...", invierte el auxiliar en la cláusula principal.',
    topics: ['G07', 'G27']
  },
  {
    id: 'pair-modals',
    title: 'Must have + V3 vs. Can’t have + V3 vs. Should have + V3',
    subtitle: 'Certeza lógica (95%) vs. Imposibilidad lógica vs. Crítica postmortem',
    rule: '¿Las pruebas confirman que pasó? ➔ Must have V3. ¿Es imposible? ➔ Can’t have V3. ¿Debió hacerse y no se hizo? ➔ Should have V3.',
    topics: ['G14', 'G08']
  },
  {
    id: 'pair-causative',
    title: 'Causativos: Have/Get + Cosa + V3 vs. Have + Persona + V1',
    subtitle: 'Delegación pasiva sobre sistemas vs. Asignación activa a un ingeniero',
    rule: '¿El objeto es una COSA ("the firewall")? ➔ V3 ("audited"). ¿Es una PERSONA con HAVE ("had the DBA")? ➔ Verbo base ("verify").',
    topics: ['G19', 'G01']
  },
  {
    id: 'pair-subjunctive',
    title: 'Subjuntivo Mandativo (be / deploy) vs. Do Enfático (do / did + V1)',
    subtitle: 'Verbo en forma base pura sin "-s", "-ed" ni "to"',
    rule: 'Tras "insist/recommend/crucial that" o tras "do/does/did" enfático, el verbo va desnudo en forma base pura.',
    topics: ['G13', 'G04']
  }
];

const CARD = 'border-t border-[#0E1830]/10 py-5 flex flex-col md:border md:border-[#0E1830]/12 md:rounded-[24px] md:bg-white md:p-6 md:py-6';

interface SideNavItem { id: string; label: string; count?: number }

const SideNav: React.FC<{ label: string; items: SideNavItem[]; active: string; onSelect: (id: string) => void }> = ({ label, items, active, onSelect }) => (
  <>
  {/* Tablet: fila de botones sobre el contenido */}
  <nav aria-label={label} className="hidden md:flex xl:hidden flex-wrap gap-2">
    {items.map((it) => (
      <button
        key={it.id}
        type="button"
        onClick={() => onSelect(it.id)}
        className={`rounded-full border px-4 py-2 text-[14px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
          it.id === active
            ? 'bg-[#0E1830] text-white border-[#0E1830]'
            : 'border-[#0E1830]/15 text-[#0E1830] hover:bg-[#0E1830]/5'
        }`}
      >
        {it.label}
        {it.count !== undefined && <span className={`ml-2 ${it.id === active ? 'text-white/60' : 'text-[#56607A]'}`}>{it.count}</span>}
      </button>
    ))}
  </nav>
  {/* Monitor: columna lateral */}
  <nav aria-label={label} className="hidden xl:block sticky top-6 space-y-1 self-start">
    {items.map((it) => {
      const isCurrent = it.id === active;
      return (
        <button
          key={it.id}
          type="button"
          onClick={() => onSelect(it.id)}
          className={`w-full text-left rounded-[16px] px-4 py-3.5 transition-colors cursor-pointer ${
            isCurrent ? 'bg-[#0E1830] text-white' : 'hover:bg-[#0E1830]/5 text-[#0E1830]'
          }`}
        >
          <span className="block text-[16px] font-semibold leading-snug">{it.label}</span>
          {it.count !== undefined && (
            <span className={`mt-0.5 block text-[13px] ${isCurrent ? 'text-white/60' : 'text-[#56607A]'}`}>{it.count}</span>
          )}
        </button>
      );
    })}
  </nav>
  </>
);

const NextStepBanner: React.FC<{ eyebrow: string; title: string; cta: string; onClick: () => void }> = ({ eyebrow, title, cta, onClick }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 rounded-[24px] bg-[#0E1830] px-6 py-5 md:px-6 md:py-4 text-white">
    <div className="min-w-0">
      <p className="text-[14px] text-white/60">{eyebrow}</p>
      <p className="mt-0.5 font-display text-[22px] md:text-[20px] font-semibold leading-tight tracking-[-0.01em] md:truncate">{title}</p>
    </div>
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 min-h-[52px] rounded-[18px] bg-[#FFE07A] hover:bg-[#FFD84F] pl-6 pr-3 text-[16px] font-semibold text-[#0E1830] flex items-center justify-between md:justify-start gap-4 transition-colors cursor-pointer"
    >
      {cta}
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0E1830] text-[#FFE07A]">
        <Play className="h-4 w-4 fill-current" />
      </span>
    </button>
  </div>
);

const Pill: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`font-semibold transition-colors cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-[14px] ${
      active ? 'bg-[#0E1830] text-white border-[#0E1830]' : 'hover:bg-[#0E1830]/5 border-[#0E1830]/15 text-[#0E1830]'
    }`}
  >
    {children}
  </button>
);

const PanelTitle: React.FC<{ title: string; sub?: string }> = ({ title, sub }) => (
  <div className="hidden md:block mb-6">
    <h3 className="font-display text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0E1830]">{title}</h3>
    {sub && <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-[#56607A]">{sub}</p>}
  </div>
);

export const PracticeView: React.FC<PracticeViewProps> = ({
  initialTopicId = null,
  startInterleaved = false,
  onClearInterleaved,
  startErrorReview = false,
  onClearErrorReview,
  onBackToHome,
  onOpenCheatSheet
}) => {
  const [viewMode, setViewMode] = useState<'modules' | 'topics' | 'reading' | 'listening' | 'idioms' | 'false_friends'>('modules');
  const [coursePart, setCoursePart] = useState<1 | 2>(1);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [readingPane, setReadingPane] = useState<'texts' | 'strategy'>('texts');
  const [filterCategory, setFilterCategory] = useState<'all' | 'grammar' | 'vocab' | 'almost_mastered'>('all');
  const [listeningObjectiveFilter, setListeningObjectiveFilter] = useState<LObjective | 'all'>('all');
  const [idiomCategoryFilter, setIdiomCategoryFilter] = useState<'all' | 'idiom' | 'grammar_pattern' | 'technical_usage'>('all');
  const [falseFriendsCategory, setFalseFriendsCategory] = useState<'all' | 'cognate' | 'preposition'>('all');
  const [falseFriendsSearch, setFalseFriendsSearch] = useState('');
  const [activeFFDrillId, setActiveFFDrillId] = useState<string | null>(null);
  const [ffDrillSelections, setFFDrillSelections] = useState<Record<string, number | null>>({});
  const [activeTopic, setActiveTopic] = useState<TopicId | null>(initialTopicId);
  const [activeLesson, setActiveLesson] = useState<MiniLesson | null>(null);
  const [pendingLessonItem, setPendingLessonItem] = useState<CourseLessonItem | null>(null);
  const [activeStrategy, setActiveStrategy] = useState<StrategyLesson | null>(null);
  const modeBarRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  useEffect(() => {
    if (!showMoreMenu) return;
    const close = (e: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(e.target as Node)) setShowMoreMenu(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [showMoreMenu]);

  // Keep the selected mode tab visible in the scrollable bar on phones
  useEffect(() => {
    modeBarRef.current
      ?.querySelector<HTMLElement>('[data-active]')
      ?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [viewMode]);

  // Active session state
  const [drillQuestions, setDrillQuestions] = useState<Question[]>([]);
  const [drillIndex, setDrillIndex] = useState(0);
  const [drillAnswers, setDrillAnswers] = useState<Record<string, { selection: number; isCorrect: boolean }>>({});
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isSessionCompleted, setIsSessionCompleted] = useState(false);
  const [sessionTitle, setSessionTitle] = useState<string>('');
  const [isInterleavedMode, setIsInterleavedMode] = useState(false);
  const [isErrorReviewMode, setIsErrorReviewMode] = useState(false);
  const [interleavedSummary, setInterleavedSummary] = useState<InterleavedSprintSummary | null>(null);

  const allTopicStats = StorageService.getAllTopicStats();
  const allQuestions = StorageService.getAllQuestions();
  const practiceQuestionsPool = StorageService.getPracticeQuestions();

  const handleSelectTopic = (topicId: TopicId) => {
    setPendingLessonItem(null);
    setActiveTopic(topicId);
    if (MINI_LESSONS[topicId]) {
      setActiveLesson(MINI_LESSONS[topicId]);
    } else {
      startDrill(topicId);
    }
  };

  const launchCourseLessonPractice = (lessonItem: CourseLessonItem) => {
    setActiveLesson(null);
    setPendingLessonItem(null);
    const mapped = LESSON_BANK_PREFIX_MAP[lessonItem.id];

    if (mapped) {
      if (mapped.prefix) {
        const qList = StorageService.getAllQuestions().filter(q => q.id.startsWith(mapped.prefix!));
        if (qList.length > 0) {
          setActiveTopic(mapped.topic);
          setIsInterleavedMode(false);
          setIsErrorReviewMode(false);
          setSessionTitle(mapped.title);
          setDrillQuestions(shuffleQuestionsPoolOptions(qList));
          setDrillIndex(0);
          setDrillAnswers({});
          setIsSessionActive(true);
          setIsSessionCompleted(false);
          return;
        }
      }
      if (mapped.readingRef) {
        startReadingDrillForText(mapped.readingRef, mapped.title);
        return;
      }
      if (mapped.listeningRef) {
        startListeningDrillForTrack(mapped.listeningRef, mapped.title);
        return;
      }
    }

    startDrill(lessonItem.topicId);
  };

  // Always show the MiniLessonModal (with 3s Decision Table & Mental Shortcut) first when clicking a module lesson!
  const handleSelectLessonItem = (lessonItem: CourseLessonItem) => {
    const mapped = LESSON_BANK_PREFIX_MAP[lessonItem.id];
    const targetTopic = mapped ? mapped.topic : lessonItem.topicId;
    setActiveTopic(targetTopic);
    setPendingLessonItem(lessonItem);

    if (MINI_LESSONS[targetTopic]) {
      setActiveLesson(MINI_LESSONS[targetTopic]);
    } else {
      launchCourseLessonPractice(lessonItem);
    }
  };

  const startErrorBankSession = () => {
    setActiveLesson(null);
    setPendingLessonItem(null);
    setActiveTopic(null);
    setIsInterleavedMode(false);
    setIsErrorReviewMode(true);
    setInterleavedSummary(null);
    setSessionTitle('Repaso Espaciado (SRS): Banco de Errores Activo');

    let errorQs = StorageService.getErrorBankQuestions(true);
    if (errorQs.length === 0) {
      errorQs = StorageService.getErrorBankQuestions(false);
    }

    const prepared = shuffleQuestionsPoolOptions(shuffleArray(errorQs).slice(0, 12));
    setDrillQuestions(prepared);
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(prepared.length > 0);
    setIsSessionCompleted(false);

    if (onClearErrorReview) {
      onClearErrorReview();
    }
  };

  const startInterleavedSprint = () => {
    setActiveLesson(null);
    setPendingLessonItem(null);
    setActiveTopic(null);
    setIsInterleavedMode(true);
    setIsErrorReviewMode(false);
    setSessionTitle('Sprint Intercalado Diario (Interleaving Practice)');

    const sprint = InterleavingEngine.generateInterleavedSprint(10);
    setInterleavedSummary(sprint);
    setDrillQuestions(sprint.questions);
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(true);
    setIsSessionCompleted(false);

    if (onClearInterleaved) {
      onClearInterleaved();
    }
  };

  const startContrastivePairDrill = (pair: ContrastivePairConfig) => {
    setActiveLesson(null);
    setPendingLessonItem(null);
    setActiveTopic(pair.topics[0]);
    setIsInterleavedMode(true);
    setIsErrorReviewMode(false);
    setSessionTitle(`Duelo de Trampas B2: ${pair.title}`);

    const pool = shuffleArray(
      practiceQuestionsPool.filter(q => pair.topics.includes(q.topic))
    ).slice(0, 10);

    setDrillQuestions(shuffleQuestionsPoolOptions(pool));
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(pool.length > 0);
    setIsSessionCompleted(false);
  };

  const startAlmostMasteredSprint = () => {
    setActiveLesson(null);
    setPendingLessonItem(null);
    setActiveTopic(null);
    setIsInterleavedMode(true);
    setIsErrorReviewMode(false);
    setSessionTitle('Sprint Acelerador: Temas Casi Dominados (60%–84%)');

    const almostTopics = Object.values(allTopicStats)
      .filter(s => !s.isMastered && s.attempts > 0 && s.accuracy >= 50 && s.accuracy < 85)
      .map(s => s.topicId);

    const targetTopics: TopicId[] = almostTopics.length > 0
      ? almostTopics
      : Object.values(allTopicStats).filter(s => !s.isMastered).slice(0, 6).map(s => s.topicId);

    const pool = shuffleArray(
      practiceQuestionsPool.filter(q => targetTopics.includes(q.topic))
    ).slice(0, 10);

    setDrillQuestions(shuffleQuestionsPoolOptions(pool));
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(pool.length > 0);
    setIsSessionCompleted(false);
  };

  const startDrill = (topicId: TopicId) => {
    setActiveLesson(null);
    setPendingLessonItem(null);
    setActiveTopic(topicId);
    setIsInterleavedMode(false);
    setIsErrorReviewMode(false);
    setInterleavedSummary(null);
    const meta = TOPICS[topicId];
    setSessionTitle(`Práctica: ${topicId} · ${meta ? meta.titleEs : ''}`);

    // Strictly fetch DEDICATED PRACTICE QUESTIONS (new items, never evaluation exam items)
    let topicQuestions = shuffleArray(StorageService.getPracticeQuestions(topicId));

    // If it's a grammar topic (G01-G29), ensure we only include Use of English items (no listening)
    if (topicId.startsWith('G')) {
      topicQuestions = topicQuestions.filter(q => q.section === 'UE');
    }

    // Target drill size: up to 8 questions to guarantee an effective, focused retrieval session
    const TARGET_DRILL_SIZE = 8;
    let qList: Question[] = topicQuestions.slice(0, TARGET_DRILL_SIZE);

    // If no dedicated items were found, fallback cleanly to all items for this specific topic
    if (qList.length === 0) {
      const topicAll = allQuestions.filter(q => q.topic === topicId && (!topicId.startsWith('G') || q.section === 'UE'));
      qList = shuffleArray(topicAll).slice(0, TARGET_DRILL_SIZE);
    }

    // Sort progressively by difficulty (Level 1 foundational -> Level 2 standard/modal -> Level 3 advanced/nuanced)
    qList.sort((a, b) => a.difficulty - b.difficulty);

    setDrillQuestions(shuffleQuestionsPoolOptions(qList));
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(true);
    setIsSessionCompleted(false);
  };

  useEffect(() => {
    if (startErrorReview) {
      startErrorBankSession();
    } else if (startInterleaved) {
      startInterleavedSprint();
    } else if (initialTopicId) {
      startDrill(initialTopicId);
    }
  }, [initialTopicId, startInterleaved, startErrorReview]);

  const startReadingDrillForText = (textId: string, customTitle?: string) => {
    const rText = READING_TEXTS[textId];
    if (!rText) return;

    let qList = allQuestions.filter(q => q.section === 'R' && q.ref === textId);
    if (qList.length === 0) {
      qList = practiceQuestionsPool.filter(q => q.section === 'R');
    }

    setActiveLesson(null);
    setPendingLessonItem(null);
    setIsInterleavedMode(false);
    setIsErrorReviewMode(false);
    setActiveTopic(rText.topic || 'V08');
    setSessionTitle(customTitle || `Reading: ${rText.title}`);
    setDrillQuestions(shuffleQuestionsPoolOptions(qList));
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(true);
    setIsSessionCompleted(false);
  };

  const startListeningDrillForTrack = (trackId: string, customTitle?: string) => {
    const track = LISTENING_TRACKS[trackId];
    if (!track) return;

    let qList = practiceQuestionsPool.filter(q => q.section === 'L' && q.ref === trackId);
    if (qList.length === 0) {
      qList = allQuestions.filter(q => q.section === 'L' && q.ref === trackId);
    }
    if (qList.length === 0) {
      qList = practiceQuestionsPool.filter(q => q.section === 'L');
    }

    setActiveLesson(null);
    setPendingLessonItem(null);
    setIsInterleavedMode(false);
    setIsErrorReviewMode(false);
    setActiveTopic(qList[0]?.topic || 'V07');
    setSessionTitle(customTitle || `Listening: ${track.title}`);
    setDrillQuestions(shuffleQuestionsPoolOptions(qList));
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(true);
    setIsSessionCompleted(false);
  };

  const startListeningDrillByObjective = (objId: LObjective) => {
    let qList = practiceQuestionsPool.filter(q => q.section === 'L' && q.objective === objId);
    if (qList.length === 0) {
      qList = practiceQuestionsPool.filter(q => q.section === 'L');
    }

    setActiveLesson(null);
    setIsInterleavedMode(false);
    setIsErrorReviewMode(false);
    setActiveTopic(qList[0]?.topic || 'V07');
    const objMeta = OBJECTIVES[objId];
    setSessionTitle(`Listening ${objId}: ${objMeta ? objMeta.titleEs : 'Comprensión Auditiva'}`);
    setDrillQuestions(shuffleQuestionsPoolOptions(shuffleArray(qList).slice(0, 10)));
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(true);
    setIsSessionCompleted(false);
  };

  const startReadingDrillByObjective = (objId: RObjective) => {
    let qList = allQuestions.filter(q => q.section === 'R' && q.objective === objId);
    if (qList.length === 0) {
      qList = allQuestions.filter(q => q.section === 'R');
    }

    setActiveLesson(null);
    setIsInterleavedMode(false);
    setIsErrorReviewMode(false);
    setActiveTopic(qList[0]?.topic || 'V08');
    const objMeta = OBJECTIVES[objId];
    setSessionTitle(`Reading ${objId}: ${objMeta ? objMeta.titleEs : 'Comprensión Lectora'}`);
    setDrillQuestions(shuffleQuestionsPoolOptions(shuffleArray(qList).slice(0, 10)));
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(true);
    setIsSessionCompleted(false);
  };

  const startStrategyPractice = (lesson: StrategyLesson) => {
    setActiveStrategy(null);
    if (lesson.section === 'L') {
      startListeningDrillByObjective(lesson.objective as LObjective);
    } else {
      startReadingDrillByObjective(lesson.objective as RObjective);
    }
  };

  const startIdiomsDrill = () => {
    const idiomQuestions: Question[] = OFFICIAL_SYLLABUS_IDIOMS.map((idm) => ({
      id: `idm-drill-${idm.id}`,
      section: 'UE',
      objective: 'UE3',
      topic: 'G26',
      difficulty: 2,
      stem: idm.practiceItem.stem,
      options: idm.practiceItem.options,
      answer: idm.practiceItem.answer,
      why_correct: idm.practiceItem.explanationEs,
      why_wrong: [
        idm.practiceItem.answer === 0 ? 'Opción correcta.' : 'Distractor incorrecto evaluado en el syllabus de OpenEDG.',
        idm.practiceItem.answer === 1 ? 'Opción correcta.' : 'Distractor incorrecto evaluado en el syllabus de OpenEDG.',
        idm.practiceItem.answer === 2 ? 'Opción correcta.' : 'Distractor incorrecto evaluado en el syllabus de OpenEDG.',
        idm.practiceItem.answer === 3 ? 'Opción correcta.' : 'Distractor incorrecto evaluado en el syllabus de OpenEDG.'
      ],
      tip_es: idm.tipEs,
      ref: null
    }));

    setActiveLesson(null);
    setIsInterleavedMode(false);
    setIsErrorReviewMode(false);
    setActiveTopic('G26');
    setSessionTitle('Entrenamiento: Idioms & Fórmulas Syllabus 2023');
    setDrillQuestions(shuffleQuestionsPoolOptions(shuffleArray(idiomQuestions)));
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(true);
    setIsSessionCompleted(false);
  };

  const startSingleIdiomDrill = (idm: OfficialIdiom) => {
    const q: Question = {
      id: `idm-single-${idm.id}`,
      section: 'UE',
      objective: 'UE3',
      topic: 'G26',
      difficulty: 2,
      stem: idm.practiceItem.stem,
      options: idm.practiceItem.options,
      answer: idm.practiceItem.answer,
      why_correct: idm.practiceItem.explanationEs,
      why_wrong: [
        idm.practiceItem.answer === 0 ? 'Opción correcta.' : 'Distractor incorrecto.',
        idm.practiceItem.answer === 1 ? 'Opción correcta.' : 'Distractor incorrecto.',
        idm.practiceItem.answer === 2 ? 'Opción correcta.' : 'Distractor incorrecto.',
        idm.practiceItem.answer === 3 ? 'Opción correcta.' : 'Distractor incorrecto.'
      ],
      tip_es: idm.tipEs,
      ref: null
    };

    setActiveLesson(null);
    setIsInterleavedMode(false);
    setIsErrorReviewMode(false);
    setActiveTopic('G26');
    setSessionTitle(`Ítem de Examen: ${idm.phrase}`);
    setDrillQuestions(shuffleQuestionsPoolOptions([q]));
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(true);
    setIsSessionCompleted(false);
  };

  const startFalseFriendsSprint = () => {
    const qList: Question[] = FALSE_FRIENDS_DATA.map((ff) => ({
      id: `drill-${ff.id}`,
      section: 'UE',
      objective: 'UE2',
      topic: ff.category === 'preposition' ? 'G05' : 'V08',
      difficulty: 2,
      stem: ff.fastDrill.stem,
      options: [ff.fastDrill.options[0], ff.fastDrill.options[1], ff.fastDrill.options[2], ff.fastDrill.options[3]] as [string, string, string, string],
      answer: ff.fastDrill.answer,
      why_correct: ff.fastDrill.quickWhy,
      why_wrong: [
        ff.fastDrill.answer === 0 ? '✅ Opción correcta.' : `Distractor de interferencia del español (${ff.term}).`,
        ff.fastDrill.answer === 1 ? '✅ Opción correcta.' : `Distractor de interferencia del español (${ff.term}).`,
        ff.fastDrill.answer === 2 ? '✅ Opción correcta.' : `Distractor de interferencia del español (${ff.term}).`,
        ff.fastDrill.answer === 3 ? '✅ Opción correcta.' : `Distractor de interferencia del español (${ff.term}).`
      ] as [string, string, string, string],
      tip_es: ff.goldenRule,
      ref: null,
      trigger_scan: `Ancla: ${ff.term} -> ${ff.goldenRule}`
    }));

    setActiveLesson(null);
    setPendingLessonItem(null);
    setIsInterleavedMode(false);
    setIsErrorReviewMode(false);
    setActiveTopic(null);
    setSessionTitle('Duelo de Falsos Amigos y Trampas B2 (16 Ítems)');
    setDrillQuestions(shuffleQuestionsPoolOptions(shuffleArray(qList)));
    setDrillIndex(0);
    setDrillAnswers({});
    setIsSessionActive(true);
    setIsSessionCompleted(false);
  };

  const handleAnswer = (selectedIdx: number, isCorrect: boolean) => {
    const currentQ = drillQuestions[drillIndex];
    setDrillAnswers(prev => ({
      ...prev,
      [currentQ.id]: { selection: selectedIdx, isCorrect }
    }));

    StorageService.recordAttempt({
      questionId: currentQ.id,
      topic: currentQ.topic,
      section: currentQ.section,
      objective: currentQ.objective,
      userSelection: selectedIdx,
      isCorrect,
      mode: isErrorReviewMode ? 'review' : 'practice'
    });
  };

  const handleNext = () => {
    if (drillIndex < drillQuestions.length - 1) {
      setDrillIndex(prev => prev + 1);
    } else {
      if (isInterleavedMode) {
        const correctCount = Object.values(drillAnswers).filter(a => a.isCorrect).length;
        StorageService.recordInterleavedSprintCompletion(correctCount, drillQuestions.length);
      }
      setIsSessionCompleted(true);
    }
  };

  // Completed drill summary (Comfortable responsive card)
  if (isSessionActive && isSessionCompleted) {
    const total = drillQuestions.length;
    const correctCount = Object.values(drillAnswers).filter(a => a.isCorrect).length;
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const topicMeta = activeTopic ? TOPICS[activeTopic] : null;

    if (isInterleavedMode) {
      return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 pb-28 pt-4">
          <div className="border-slate-200 sm:p-8 mb-6 text-center bg-[#0E1830] text-white border-0 rounded-[28px] max-md:text-left p-5 max-md:mb-8 shadow-[0_28px_48px_-28px_rgba(14,24,48,0.6)]">
            <div className="hidden">
              <Shuffle className="w-8 h-8" />
            </div>

            <div className="hidden">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Matriz de Discriminación Cognitiva (Interleaving)</span>
            </div>

            <h2 className="mt-1 font-display text-[26px] font-semibold tracking-[-0.02em] text-white max-md:mt-0">
              Sprint Intercalado Finalizado
            </h2>
            <div className="hidden">
              {correctCount} / {total} ({accuracy}%)
            </div>
            <div className="mt-3">
              <span className="font-display text-[72px] leading-[0.92] font-semibold tracking-[-0.035em] tabular-nums">
                {accuracy}
                <span className="ml-1 text-[34px] font-medium text-white/50">%</span>
              </span>
              <p className="mt-2 text-[15px] text-white/65">{correctCount} de {total} correctas</p>
            </div>

            <p className="mt-2 max-w-lg mx-auto leading-relaxed text-[15px] text-white/75 max-md:mx-0 max-md:mt-4">
              {accuracy >= 70
                ? '¡Gran capacidad de discriminación! Supiste identificar y aplicar la regla correcta en saltos rápidos de contexto sin pistas de tema.'
                : 'Buen entrenamiento. Los cambios constantes de tema desafían al cerebro y eliminan la falsa sensación de seguridad.'}
            </p>

            {/* Topics discrimination breakdown */}
            <div className="mt-6 pt-6 border-t text-left border-white/15">
              <h4 className="uppercase mb-3 max-md:normal-case tracking-normal text-[15px] font-medium text-white/75">
                Reactivos y saltos de contexto del sprint ({drillQuestions.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {drillQuestions.map((q, idx) => {
                  const ans = drillAnswers[q.id];
                  const qTopic = TOPICS[q.topic];
                  const wasCorrect = ans?.isCorrect;

                  return (
                    <div
                      key={q.id}
                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                        wasCorrect
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-rose-50/70 border-rose-200 text-rose-950'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-mono font-bold text-[12px] px-1.5 py-0.5 rounded bg-white shadow-xs">
                          #{idx + 1}
                        </span>
                        <div className="truncate">
                          <span className="font-bold mr-1.5">{q.topic}</span>
                          <span className="text-[12px] opacity-80 truncate">{qTopic?.titleEs}</span>
                        </div>
                      </div>

                      <div className="shrink-0 ml-2">
                        {wasCorrect ? (
                          <span className="inline-flex items-center text-emerald-700 font-bold text-[12px]">
                            <CheckCircle2 className="w-4 h-4 mr-1" />
                            Correcto
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-rose-700 font-bold text-[12px]">
                            Incorrecto
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scientific insight banner */}
            <div className="mt-6 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-left text-xs text-indigo-950 space-y-1.5 max-md:hidden">
              <span className="font-bold text-indigo-900 block">
                ★ ¿Por qué este método acelera tu memorización para el examen?
              </span>
              <p className="leading-relaxed text-indigo-900/80">
                La ciencia cognitiva (Rohrer & Taylor, Dunlosky) demuestra que practicar temas intercalados fuerza al cerebro a <em>categorizar</em> el problema antes de resolverlo. En el examen oficial OpenEDG las preguntas vendrán mezcladas; este entrenamiento te protege contra la "ilusión de dominio".
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
            <button
              onClick={startInterleavedSprint}
              className="hover:bg-[#FFD84F] flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-[58px] rounded-[18px] bg-[#FFE07A] max-md:hover:bg-[#FFE07A] text-[#0E1830] text-[17px] font-semibold shadow-none"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Nuevo Sprint Intercalado</span>
            </button>

            <button
              onClick={() => {
                setIsSessionActive(false);
                setIsSessionCompleted(false);
                setIsInterleavedMode(false);
                setActiveTopic(null);
              }}
              className="border hover:bg-slate-50 font-semibold transition-colors cursor-pointer min-h-[56px] rounded-[18px] border-[#0E1830]/15 bg-transparent text-[#0E1830] text-[16px]"
            >
              <span>Volver a la Práctica</span>
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-8 pb-28 text-center pt-4">
        <div className="border-slate-200 sm:p-8 mb-6 bg-[#0E1830] text-white border-0 rounded-[28px] max-md:text-left p-5 max-md:mb-8 shadow-[0_28px_48px_-28px_rgba(14,24,48,0.6)]">
          <div className={`hidden ${
            isErrorReviewMode
              ? 'bg-rose-50 text-rose-600 border-rose-100'
              : 'bg-blue-50 text-blue-600 border-blue-100'
          }`}>
            {isErrorReviewMode ? <Flame className="w-8 h-8" /> : (activeTopic || 'B2')}
          </div>
          <span className="uppercase max-md:normal-case tracking-normal text-[15px] font-normal text-white/65">
            {isErrorReviewMode ? 'Ciclo de Repaso Espaciado (SRS) Finalizado' : 'Sesión de Práctica Finalizada'}
          </span>
          <h2 className="mt-1 font-display text-[26px] font-semibold tracking-[-0.02em] text-white max-md:mt-0">
            {sessionTitle || topicMeta?.titleEs}
          </h2>
          <div className="hidden">
            {correctCount} / {total} ({accuracy}%)
          </div>
          <div className="mt-3">
            <span className="font-display text-[72px] leading-[0.92] font-semibold tracking-[-0.035em] tabular-nums">
              {accuracy}
              <span className="ml-1 text-[34px] font-medium text-white/50">%</span>
            </span>
            <p className="mt-2 text-[15px] text-white/65">{correctCount} de {total} correctas</p>
          </div>

          <p className="mt-3 max-w-md mx-auto text-[15px] text-white/75 max-md:mx-0 max-md:mt-4">
            {isErrorReviewMode
              ? 'Cada acierto avanza tus tarjetas al siguiente intervalo espaciado (10m → 1d → 3d → 7d → 14d). Tras 5 aciertos se gradúan.'
              : accuracy >= 85
              ? '¡Excelente! Cumples el umbral de dominio (≥85%). Necesitas mantenerlo en 2 días distintos para consolidarlo.'
              : 'Buen intento. Revisa la regla nemotécnica y los distractores frecuentes para superar el 70% oficial.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
          <button
            onClick={() => {
              if (isErrorReviewMode) {
                startErrorBankSession();
              } else if (drillQuestions[0]?.ref && LISTENING_TRACKS[drillQuestions[0].ref]) {
                startListeningDrillForTrack(drillQuestions[0].ref);
              } else if (drillQuestions[0]?.ref && READING_TEXTS[drillQuestions[0].ref]) {
                startReadingDrillForText(drillQuestions[0].ref);
              } else if (activeTopic) {
                startDrill(activeTopic);
              }
            }}
            className="hover:bg-[#FFD84F] flex items-center justify-center gap-2 transition-colors min-h-[58px] rounded-[18px] bg-[#FFE07A] max-md:hover:bg-[#FFE07A] text-[#0E1830] text-[17px] font-semibold shadow-none"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isErrorReviewMode ? 'Continuar Repaso SRS' : 'Repetir Esta Práctica'}</span>
          </button>

          <button
            onClick={() => {
              setIsSessionActive(false);
              setIsSessionCompleted(false);
              setIsErrorReviewMode(false);
              setActiveTopic(null);
            }}
            className="border hover:bg-slate-50 font-semibold transition-colors min-h-[56px] rounded-[18px] border-[#0E1830]/15 bg-transparent text-[#0E1830] text-[16px]"
          >
            <span>Elegir Otra Lección</span>
          </button>
        </div>
      </div>
    );
  }

  // Active question in practice drill (Desktop 2-column split if Audio or Reading!)
  if (isSessionActive && drillQuestions.length > 0) {
    const currentQ = drillQuestions[drillIndex];
    const isAnswered = drillAnswers[currentQ.id] !== undefined;
    const audioTrack = currentQ.ref && currentQ.section === 'L' ? LISTENING_TRACKS[currentQ.ref] : null;
    const readingText = currentQ.ref && currentQ.section === 'R' ? READING_TEXTS[currentQ.ref] : null;
    const hasMedia = !!audioTrack || !!readingText;

    return (
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 pb-24">
        {/* Top Session Navigation & Progress Bar */}
        <div className="flex items-center justify-between mb-4 rounded-2xl border-slate-200 text-xs bg-transparent border-0 shadow-none p-0 max-md:mb-3 max-md:gap-2">
          <button
            onClick={() => {
              setIsSessionActive(false);
              setActiveTopic(null);
            }}
            className="hover:text-slate-900 flex items-center gap-1.5 font-bold transition-colors min-h-[44px] max-md:min-w-[44px] max-md:-ml-2.5 max-md:justify-center rounded-full text-[#0E1830] max-md:active:bg-[#0E1830]/5"
            aria-label="Volver al catálogo"
          >
            <ArrowLeft className="w-4 h-4 max-md:w-5 max-md:h-5" />
            <span className="max-md:hidden">Volver al Catálogo</span>
          </button>

          <span className="truncate max-w-md max-md:flex-1 text-[13px] font-medium text-[#56607A]">
            {sessionTitle || `Práctica: ${activeTopic}`}
          </span>

          <span className="font-mono font-bold px-2 py-0.5 rounded-md bg-transparent text-[15px] text-[#0E1830]">
            {drillIndex + 1}/{drillQuestions.length}
          </span>
        </div>

        {/* Content: Split on Desktop if Media present, centered single column otherwise */}
        {hasMedia ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Media Column (Sticky on large screens) */}
            <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-20 space-y-4">
              {audioTrack && (
                <AudioPlayerCard
                  track={audioTrack}
                  isAnswered={isAnswered}
                  maxRepeats={2}
                />
              )}

              {readingText && (
                <ReadingViewer
                  readingText={readingText}
                  evidenceQuote={currentQ.evidence_quote}
                  isAnswered={isAnswered}
                />
              )}
            </div>

            {/* Right Question Column */}
            <div className="lg:col-span-7 xl:col-span-7">
              <QuestionCard
                key={currentQ.id}
                question={currentQ}
                currentIndex={drillIndex}
                totalQuestions={drillQuestions.length}
                onAnswer={handleAnswer}
                showImmediateFeedback={true}
                onNext={handleNext}
                isLastQuestion={drillIndex === drillQuestions.length - 1}
                hideTopicBeforeAnswer={isInterleavedMode}
              />
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <QuestionCard
              key={currentQ.id}
              question={currentQ}
              currentIndex={drillIndex}
              totalQuestions={drillQuestions.length}
              onAnswer={handleAnswer}
              showImmediateFeedback={true}
              onNext={handleNext}
              isLastQuestion={drillIndex === drillQuestions.length - 1}
              hideTopicBeforeAnswer={isInterleavedMode}
            />
          </div>
        )}
      </div>
    );
  }

  // Topic Browser List
  const topicList = Object.values(TOPICS).filter(t => {
    if (filterCategory === 'grammar') return t.category === 'grammar';
    if (filterCategory === 'vocab') return t.category === 'vocab';
    if (filterCategory === 'almost_mastered') {
      const st = allTopicStats[t.id];
      return st && !st.isMastered && st.attempts > 0 && st.accuracy >= 50 && st.accuracy < 85;
    }
    return true;
  });

  const listeningObjectivesList: LObjective[] = ['L1', 'L2', 'L3', 'L4', 'L5'];
  const allListeningTracks = Object.values(LISTENING_TRACKS);
  const allReadingTexts = Object.values(READING_TEXTS);

  const filteredIdioms = OFFICIAL_SYLLABUS_IDIOMS.filter(idm => {
    if (idiomCategoryFilter === 'all') return true;
    return idm.category === idiomCategoryFilter;
  });

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 pb-28 md:pb-12 space-y-5 md:space-y-5">
      <h2 className="sr-only">Práctica guiada</h2>

      {/* Pestañas a la izquierda y accesos rápidos a la derecha, en una sola fila */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 md:border-b md:border-[#0E1830]/10 min-w-0">
        {/* Single scrollable row on phones (short labels, no icons); full labels from md up */}
        <div
          ref={modeBarRef}
          className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar min-w-0 max-w-full border-b border-[#0E1830]/10 md:border-b-0"
        >
          {([
            { id: 'modules', short: 'Módulos', full: 'Módulos', icon: Layers, tint: 'text-blue-600' },
            { id: 'topics', short: 'Temas', full: 'Temas B2', icon: Award, tint: 'text-blue-600' },
            { id: 'reading', short: 'Reading', full: 'Reading', icon: BookOpen, tint: 'text-emerald-600' },
            { id: 'listening', short: 'Listening', full: 'Listening', icon: Headphones, tint: 'text-blue-600' },
            { id: 'idioms', short: 'Idioms', full: 'Idioms IT', icon: Sparkles, tint: 'text-amber-500' },
            { id: 'false_friends', short: 'Trampas', full: `Trampas B2 (${FALSE_FRIENDS_DATA.length})`, icon: ShieldAlert, tint: 'text-amber-500' }
          ] as const).map(mode => {
            const Icon = mode.icon;
            const isActive = viewMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id)}
                data-active={isActive || undefined}
                className={`py-3 px-0 text-[16px] rounded-none transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0 border-b-2 -mb-px ${
                  isActive
                    ? 'text-[#0E1830] font-semibold border-[#0E1830]'
                    : 'text-[#56607A] font-medium border-transparent hover:text-[#0E1830]'
                }`}
              >
                <Icon className={`hidden ${mode.tint}`} />
                <span className="md:hidden">{mode.short}</span>
                <span className="hidden md:inline">{mode.full}</span>
              </button>
            );
          })}
        </div>


        {/* Quick Sprint Buttons: one row of three on phones, full labels from md up */}
        <div className="grid grid-cols-2 md:hidden items-center gap-2.5 shrink-0 max-md:order-first">
          {onOpenCheatSheet && (
            <button
              onClick={onOpenCheatSheet}
              className="px-2 md:px-3 py-2 border hover:bg-indigo-50 flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap min-h-[46px] rounded-[14px] bg-transparent border-[#0E1830]/15 text-[#0E1830] text-[15px] font-semibold shadow-none"
              title="Gimnasio de Patrones B2: 15 atajos visuales sin fórmulas"
            >
              <Brain className="hidden md:block w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span>Patrones<span className="hidden xl:inline"> B2</span></span>
            </button>
          )}

          <button
            onClick={startAlmostMasteredSprint}
            className="px-2 md:px-3 py-2 border hover:bg-amber-100 flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap min-h-[46px] rounded-[14px] bg-transparent border-[#0E1830]/15 text-[#0E1830] text-[15px] font-semibold shadow-none"
            title="Ataca los temas donde tienes entre 50% y 84% de precisión para subir rápido tu Índice EIT-B2"
          >
            <Flame className="hidden md:block w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="md:hidden">Casi listos</span>
            <span className="hidden xl:inline">Casi Dominados (60–84%)</span>
            <span className="hidden md:inline xl:hidden">Casi dominados</span>
          </button>

          <button
            onClick={startInterleavedSprint}
            className="px-2 md:px-3.5 py-2 hover:bg-[#1B2A4D] text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap col-span-2 order-first md:col-span-1 md:order-none min-h-[54px] rounded-[18px] bg-[#0E1830] text-[16px] font-semibold shadow-none"
            title="Práctica intercalada rápida: 10 preguntas sin sesgo de tema"
          >
            <Shuffle className="hidden md:block w-3.5 h-3.5 text-indigo-200 shrink-0" />
            <span className="md:hidden">Sprint ×10</span>
            <span className="hidden xl:inline">Sprint Intercalado (10)</span>
            <span className="hidden md:inline xl:hidden">Sprint ×10</span>
          </button>
        </div>

        {/* Tablet y monitor: un solo menú con los tres accesos rápidos */}
        <div ref={moreMenuRef} className="hidden md:block relative shrink-0 md:pb-2">
          <button
            type="button"
            onClick={() => setShowMoreMenu(prev => !prev)}
            aria-haspopup="menu"
            aria-expanded={showMoreMenu}
            className="min-h-[44px] px-4 rounded-full border border-[#0E1830]/15 bg-white text-[15px] font-semibold text-[#0E1830] flex items-center gap-2 hover:border-[#0E1830] transition-colors cursor-pointer"
          >
            Más prácticas
            <ChevronRight className={`w-4 h-4 transition-transform ${showMoreMenu ? '-rotate-90' : 'rotate-90'}`} />
          </button>
          {showMoreMenu && (
            <div role="menu" className="absolute right-0 top-full mt-2 w-[340px] rounded-[20px] border border-[#0E1830]/12 bg-white p-2 shadow-[0_24px_48px_-24px_rgba(14,24,48,0.35)] z-30">
              {[
                { key: 'sprint', icon: <Shuffle className="w-4 h-4" />, title: 'Sprint intercalado', desc: '10 preguntas mezcladas, ~5 min', run: startInterleavedSprint },
                { key: 'almost', icon: <Flame className="w-4 h-4" />, title: 'Casi dominados', desc: 'Temas entre 60% y 84% de acierto', run: startAlmostMasteredSprint },
                ...(onOpenCheatSheet ? [{ key: 'patterns', icon: <Brain className="w-4 h-4" />, title: 'Gimnasio de patrones', desc: 'Atajos de 3 segundos', run: onOpenCheatSheet }] : [])
              ].map(item => (
                <button
                  key={item.key}
                  type="button"
                  role="menuitem"
                  onClick={() => { setShowMoreMenu(false); item.run(); }}
                  className="w-full flex items-center gap-3 rounded-[14px] px-3 py-3 text-left hover:bg-[#0E1830]/5 transition-colors cursor-pointer"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0E1830]/[0.06] text-[#0E1830]">{item.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-semibold text-[#0E1830]">{item.title}</span>
                    <span className="block text-[13px] text-[#56607A]">{item.desc}</span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

      </div>

        {/* When in Modules view, show Part 1 / Part 2 selector right in the bar */}
        {viewMode === 'modules' && (
          <div className="grid grid-cols-2 md:hidden items-center gap-2.5">
            <button
              onClick={() => setCoursePart(1)}
              className={`px-4 min-h-[44px] rounded-full border text-[15px] font-semibold transition-colors cursor-pointer md:whitespace-nowrap ${
                coursePart === 1
                  ? 'bg-[#0E1830] border-[#0E1830] text-white'
                  : 'border-[#0E1830]/15 text-[#0E1830] hover:bg-[#0E1830]/5'
              }`}
            >
              English for IT 1<span className="hidden sm:inline"> (Mód. 1–6)</span>
            </button>
            <button
              onClick={() => setCoursePart(2)}
              className={`px-4 min-h-[44px] rounded-full border text-[15px] font-semibold transition-colors cursor-pointer md:whitespace-nowrap ${
                coursePart === 2
                  ? 'bg-[#0E1830] border-[#0E1830] text-white'
                  : 'border-[#0E1830]/15 text-[#0E1830] hover:bg-[#0E1830]/5'
              }`}
            >
              English for IT 2<span className="hidden sm:inline"> (Mód. 1–7)</span>
            </button>
          </div>
        )}


      {/* VIEW MODE 1: OFFICIAL ENGLISH FOR IT MODULES (PART 1 & PART 2) */}
      {viewMode === 'modules' && (
        <div className="space-y-6">
          {/* Responsive Multi-Column Grid of Modules: 1 col móvil, 2 col tablet, 3 col en monitores PC (xl) */}
          {(() => {
            const courseModules = coursePart === 1 ? ENGLISH_FOR_IT_1_MODULES : ENGLISH_FOR_IT_2_MODULES;
            const modMastered = (m: typeof courseModules[number]) =>
              m.lessons.filter(l => allTopicStats[l.topicId]?.isMastered).length;
            const nextModule = courseModules.find(m => modMastered(m) < m.lessons.length) ?? courseModules[0];
            const nextLesson = nextModule.lessons.find(l => !allTopicStats[l.topicId]?.isMastered) ?? nextModule.lessons[0];
            const current = courseModules.find(m => m.id === selectedModuleId) ?? nextModule;
            const typeNames: Record<string, string> = { grammar: 'Gramática', listening: 'Listening', reading: 'Reading', vocab: 'Vocabulario' };

            return (
              <div className="hidden md:block space-y-8">
                {/* Siguiente paso: la única acción destacada */}
                <div className="flex items-center justify-between gap-6 rounded-[24px] bg-[#0E1830] px-6 py-4 text-white">
                  <div className="min-w-0">
                    <p className="text-[14px] text-white/60">Tu siguiente paso · Módulo {nextModule.moduleNumber}</p>
                    <p className="mt-0.5 font-display text-[20px] font-semibold leading-tight tracking-[-0.01em] truncate">
                      {nextLesson.number} {nextLesson.titleEs}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSelectLessonItem(nextLesson)}
                    className="shrink-0 min-h-[48px] rounded-[16px] bg-[#FFE07A] hover:bg-[#FFD84F] pl-5 pr-2.5 text-[16px] font-semibold text-[#0E1830] flex items-center gap-3 transition-colors cursor-pointer"
                  >
                    Empezar
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0E1830] text-[#FFE07A]">
                      <Play className="h-4 w-4 fill-current" />
                    </span>
                  </button>
                </div>

                <div className="space-y-5">
                  {/* Un solo selector: curso + módulo */}
                  <div className="relative max-w-[560px]">
                    <select
                      aria-label="Curso y módulo"
                      value={`${coursePart}:${current.id}`}
                      onChange={(e) => {
                        const [part, id] = e.target.value.split(':');
                        setCoursePart(part === '2' ? 2 : 1);
                        setSelectedModuleId(id);
                      }}
                      className="w-full min-h-[52px] appearance-none rounded-[16px] border border-[#0E1830]/15 bg-white pl-4 pr-11 text-[16px] font-semibold text-[#0E1830] cursor-pointer hover:border-[#0E1830] focus:outline-none focus:border-[#0E1830]"
                    >
                      {[
                        { part: 1, label: 'English for IT 1 (Mód. 1–6)', mods: ENGLISH_FOR_IT_1_MODULES },
                        { part: 2, label: 'English for IT 2 (Mód. 1–7)', mods: ENGLISH_FOR_IT_2_MODULES }
                      ].map(group => (
                        <optgroup key={group.part} label={group.label}>
                          {group.mods.map(m => (
                            <option key={m.id} value={`${group.part}:${m.id}`}>
                              Módulo {m.moduleNumber} · {m.titleEs} ({modMastered(m)}/{m.lessons.length})
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    <ChevronRight className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-[#0E1830]" />
                  </div>

                  {/* Lecciones del módulo elegido */}
                  <section>
                    <p className="text-[14px] font-medium text-[#1F5EFF]">Módulo {current.moduleNumber} · {current.role}</p>
                    <p className="mt-1 max-w-[70ch] text-[15px] leading-relaxed text-[#56607A]">{current.objectiveEs}</p>

                    <ul className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-4">
                      {current.lessons.map((lesson) => {
                        const stats = allTopicStats[lesson.topicId];
                        return (
                          <li key={lesson.id} className="flex flex-wrap items-center gap-x-4 gap-y-4 rounded-[24px] border border-[#0E1830]/12 bg-white p-5">
                            <span className="w-10 shrink-0 font-mono-code text-[15px] text-[#1F5EFF]">{lesson.number}</span>
                            <div className="min-w-0 flex-1 basis-[220px]">
                              <h4 className="text-[17px] font-semibold leading-snug text-[#0E1830]">{lesson.titleEs}</h4>
                              <p className="mt-1 flex items-center gap-2 text-[13px] text-[#56607A]">
                                <span>{typeNames[lesson.type]}</span>
                                <span className="font-mono-code">{lesson.topicId}</span>
                                {stats?.isMastered && <span className="font-semibold text-[#17714F]">Dominado</span>}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleSelectLessonItem(lesson)}
                              className="shrink-0 min-h-[44px] rounded-[14px] border border-[#0E1830]/15 px-4 text-[15px] font-semibold text-[#0E1830] hover:bg-[#0E1830]/5 transition-colors cursor-pointer"
                            >
                              Lección
                            </button>
                            <button
                              type="button"
                              onClick={() => launchCourseLessonPractice(lesson)}
                              className="shrink-0 min-h-[44px] rounded-[14px] border border-[#0E1830] px-4 text-[15px] font-semibold text-[#0E1830] flex items-center gap-2 hover:bg-[#0E1830] hover:text-white transition-colors cursor-pointer"
                            >
                              <Play className="h-3.5 w-3.5 fill-current" />
                              Practicar
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                </div>
              </div>
            );
          })()}

          <div className="grid grid-cols-1 gap-y-14 md:hidden">
            {(coursePart === 1 ? ENGLISH_FOR_IT_1_MODULES : ENGLISH_FOR_IT_2_MODULES).map((mod) => (
              <div
                key={mod.id}
                className="flex flex-col justify-between"
              >
                {/* Module Header */}
                <div className="border-slate-100 p-0 pb-3 bg-transparent border-b-0">
                  <div className="flex items-center gap-1.5 text-[14px] font-medium text-[#56607A]">
                    <span className="uppercase max-md:normal-case tracking-normal text-[#1F5EFF] font-semibold">Módulo {mod.moduleNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-600 font-medium">{mod.role}</span>
                  </div>
                  <h3 className="mt-1 font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0E1830]">
                    {mod.titleEs}
                  </h3>
                  <p className="hidden md:block text-xs text-slate-500 mt-0.5">
                    {mod.objectiveEs}
                  </p>
                </div>

                {/* Module Lessons List */}
                <div className="divide-y divide-slate-100 flex-1 max-md:divide-[#0E1830]/10 border-y border-[#0E1830]/10">
                  {mod.lessons.map((lesson) => {
                    const hasMiniLesson = !!MINI_LESSONS[lesson.topicId];
                    const stats = allTopicStats[lesson.topicId];
                    const typeLabel = { grammar: 'Gramática', listening: 'Listening', reading: 'Reading', vocab: 'Vocabulario' }[lesson.type];

                    return (
                      <React.Fragment key={lesson.id}>
                      {/* Móvil: una fila por lección; tocar la fila abre la lección, el botón redondo practica */}
                      <div
                        onClick={() => handleSelectLessonItem(lesson)}
                        className="flex items-center gap-3.5 py-4 hover:bg-[#0E1830]/[0.03] active:bg-[#0E1830]/5 transition-colors cursor-pointer"
                      >
                        <span className="w-9 shrink-0 font-mono-code text-[14px] text-[#1F5EFF]">{lesson.number}</span>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-[16px] font-semibold leading-snug text-[#0E1830]">{lesson.titleEs}</h4>
                          <p className="mt-1 flex items-center gap-2 text-[13px] text-[#56607A]">
                            <span>{typeLabel}</span>
                            <span className="font-mono-code">{lesson.topicId}</span>
                            {stats?.isMastered && <span className="font-semibold text-[#17714F]">Dominado</span>}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Practicar ${lesson.titleEs}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            launchCourseLessonPractice(lesson);
                          }}
                          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0E1830] text-white active:scale-95 transition-transform cursor-pointer"
                        >
                          <Play className="h-4 w-4 fill-current" />
                        </button>
                      </div>

                      <div
                        onClick={() => handleSelectLessonItem(lesson)}
                        className="hidden"
                      >
                        {/* Top Meta & Action Pills Row */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-[12px] text-slate-500">
                            <span className="font-bold text-blue-700 font-mono">{lesson.number}</span>
                            <span aria-hidden="true">·</span>
                            <span className="font-medium text-slate-700 uppercase tracking-tight text-[12px]">
                              {lesson.type}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono text-slate-500">{lesson.topicId}</span>
                          </div>

                          <div className="shrink-0 flex items-center gap-1.5">
                            {stats?.isMastered && (
                              <span className="text-[12px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1 border border-emerald-200">
                                <CheckCircle2 className="w-3 h-3" />
                                Dominado
                              </span>
                            )}
                            {hasMiniLesson && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSelectLessonItem(lesson);
                                }}
                                className="text-[12px] font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200/80 cursor-pointer"
                                title="Ver Atajo Mental y Tabla de Decisión de 3 Segundos"
                              >
                                Lección 3s
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                launchCourseLessonPractice(lesson);
                              }}
                              className="text-[12px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-2 py-0.5 rounded border border-blue-200/80 flex items-center gap-1 cursor-pointer"
                              title="Ir directo a las preguntas / lectura / audio de esta sección"
                            >
                              <Play className="w-2.5 h-2.5 fill-current" />
                              <span>Practicar</span>
                            </button>
                          </div>
                        </div>

                        {/* Full-width Lesson Title and Description */}
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            {lesson.titleEs}
                          </h4>
                          <p className="hidden md:line-clamp-1 text-xs text-slate-600 mt-0.5">
                            {lesson.descriptionEs}
                          </p>
                        </div>
                      </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW MODE 2: TOPICS INDEX (G01-G29 & V01-V08) + CONTRASTIVE PAIRS */}
      {viewMode === 'topics' && (
        <div className="flex flex-col gap-8">
          {/* Contrastive Pairs Drill Section (Duelo de Trampas B2) */}
          <div className="order-last border-indigo-200/80 sm:p-5 bg-transparent border-0 rounded-none shadow-none p-0 space-y-4 pt-8 border-t border-[#0E1830]/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <div className="hidden">
                  <Zap className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Entrenamiento Contrastivo de Examen</span>
                </div>
                <h3 className="mt-1 font-display text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0E1830]">
                  Duelo de Trampas B2: Los 8 Pares Más Confusos del Examen
                </h3>
                <p className="hidden md:block text-xs text-slate-600">
                  El examen OpenEDG mezcla estructuras parecidas en las opciones. Entrena tu radar para distinguirlas sin pistas de tema:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-md:gap-0 border-b border-[#0E1830]/10">
              {CONTRASTIVE_PAIRS.map((pair) => (
                <div
                  key={pair.id}
                  onClick={() => startContrastivePairDrill(pair)}
                  className="p-3.5 border hover:bg-indigo-50/40 hover:border-indigo-300 transition-all cursor-pointer flex flex-col justify-between gap-2 border-x-0 border-b-0 border-[#0E1830]/10 rounded-none bg-transparent px-0 py-4"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-mono px-1.5 py-0.5 rounded bg-transparent p-0 text-[13px] text-[#1F5EFF] font-medium">
                        {pair.topics.join(' vs ')}
                      </span>
                      <Play className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                    <h4 className="leading-snug text-[17px] font-semibold text-[#0E1830]">
                      {pair.title}
                    </h4>
                    <p className="text-slate-600 mt-1 leading-relaxed text-[14px]">
                      {pair.rule}
                    </p>
                  </div>
                  <span className="font-bold flex items-center gap-1 border-slate-200/70 border-t-0 text-[14px] text-[#0E1830] pt-2">
                    <span>Lanzar duelo (10 ítems)</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recomendados de hoy */}
          {(() => {
            const recommended = StorageService.getTodayFocusTopics().slice(0, 3);
            return (
              <div className="rounded-[24px] bg-[#0E1830] px-6 py-5 md:px-8 md:py-6 text-white">
                <p className="text-[14px] text-white/60">Empieza por aquí · recomendados para hoy</p>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-4">
                  {recommended.map((id) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => handleSelectTopic(id)}
                      className="flex items-center justify-between gap-3 rounded-[16px] bg-white/10 hover:bg-[#FFE07A] hover:text-[#0E1830] px-5 py-4 text-left transition-colors cursor-pointer"
                    >
                      <span className="min-w-0">
                        <span className="block font-mono-code text-[13px] opacity-60">{id}</span>
                        <span className="block text-[16px] font-semibold leading-snug line-clamp-2">{TOPICS[id]?.titleEs}</span>
                      </span>
                      <Play className="h-4 w-4 shrink-0 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="space-y-6 xl:space-y-0 xl:grid xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-10 items-start">
            <SideNav
              label="Temas"
              active={filterCategory}
              onSelect={(id) => setFilterCategory(id as typeof filterCategory)}
              items={[
                { id: 'all', label: 'Todos los temas', count: Object.keys(TOPICS).length },
                { id: 'grammar', label: 'Gramática', count: Object.values(TOPICS).filter(t => t.category === 'grammar').length },
                { id: 'vocab', label: 'Vocabulario', count: Object.values(TOPICS).filter(t => t.category === 'vocab').length },
                { id: 'almost_mastered', label: 'Casi dominados', count: Object.values(TOPICS).filter(t => { const st = allTopicStats[t.id]; return st && !st.isMastered && st.attempts > 0 && st.accuracy >= 50 && st.accuracy < 85; }).length }
              ]}
            />
            <div className="min-w-0 space-y-6">
              <div className="md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar">
                {([
                  { id: 'all', label: `Todos (${Object.keys(TOPICS).length})` },
                  { id: 'grammar', label: 'Gramática' },
                  { id: 'vocab', label: 'Vocabulario' },
                  { id: 'almost_mastered', label: 'Casi dominados' }
                ] as const).map(cat => (
                  <Pill key={cat.id} active={filterCategory === cat.id} onClick={() => setFilterCategory(cat.id)}>{cat.label}</Pill>
                ))}
              </div>
              <PanelTitle
                title={{ all: 'Todos los temas', grammar: 'Gramática', vocab: 'Vocabulario', almost_mastered: 'Casi dominados' }[filterCategory]}
                sub="Elige un tema para ver su lección y practicar."
              />
              <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:gap-5">
                {topicList.map(t => {
                  const stats = allTopicStats[t.id];
                  return (
                    <li key={t.id} className="max-md:border-t max-md:border-[#0E1830]/10 max-md:last:border-b">
                      <button
                        type="button"
                        onClick={() => handleSelectTopic(t.id)}
                        className="w-full h-full text-left transition-colors cursor-pointer max-md:flex max-md:items-center max-md:gap-4 max-md:py-4 md:flex md:flex-col md:rounded-[24px] md:border md:border-[#0E1830]/12 md:bg-white md:p-6 md:hover:border-[#0E1830]"
                      >
                        <span className="md:flex md:items-start md:justify-between max-md:contents">
                          <span className="w-11 shrink-0 font-mono-code text-[14px] text-[#1F5EFF] max-md:order-first">{t.code}</span>
                          <span className="hidden md:block text-[13px]">
                            {stats?.isMastered ? (
                              <span className="font-semibold text-[#17714F]">Dominado</span>
                            ) : stats?.attempts > 0 ? (
                              <span className={`font-display text-[18px] font-semibold tabular-nums ${stats.accuracy >= 70 ? 'text-[#0E1830]' : 'text-[#B3261E]'}`}>{stats.accuracy}%</span>
                            ) : (
                              <span className="text-[#8D94A8]">Sin empezar</span>
                            )}
                          </span>
                        </span>
                        <span className="min-w-0 flex-1 md:mt-2">
                          <span className="block text-[17px] md:text-[20px] md:font-display font-semibold leading-snug text-[#0E1830]">{t.titleEs}</span>
                          <span className="block mt-0.5 md:mt-2 text-[13px] md:text-[14px] md:leading-relaxed text-[#56607A] md:line-clamp-3">
                            <span className="md:hidden">{t.category === 'grammar' ? 'Gramática' : 'Vocabulario'}</span>
                            <span className="hidden md:inline">{t.focusEs}</span>
                          </span>
                        </span>
                        <span className="md:hidden shrink-0 text-[13px]">
                          {stats?.isMastered ? (
                            <span className="font-semibold text-[#17714F]">Dominado</span>
                          ) : stats?.attempts > 0 ? (
                            <span className={`font-display text-[18px] font-semibold tabular-nums ${stats.accuracy >= 70 ? 'text-[#0E1830]' : 'text-[#B3261E]'}`}>{stats.accuracy}%</span>
                          ) : (
                            <span className="text-[#8D94A8]">Sin empezar</span>
                          )}
                        </span>
                        <ChevronRight className="md:hidden h-4 w-4 shrink-0 text-[#0E1830]/40" />
                        <span className="hidden md:block mt-auto pt-5 text-[15px] font-semibold text-[#0E1830]">Abrir tema →</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2.5: DEDICATED READING COMPREHENSION LAB */}
      {viewMode === 'reading' && (
        <div className="flex flex-col gap-8">
          {allReadingTexts[0] && (
            <NextStepBanner
              eyebrow={`Reading · ${allReadingTexts.length} textos técnicos`}
              title={allReadingTexts[0].title}
              cta="Leer y practicar"
              onClick={() => startReadingDrillForText(allReadingTexts[0].id)}
            />
          )}

          <div className="space-y-6 xl:space-y-0 xl:grid xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-10 items-start">
            <SideNav
              label="Reading"
              active={readingPane}
              onSelect={(id) => setReadingPane(id as typeof readingPane)}
              items={[
                { id: 'texts', label: 'Textos técnicos', count: allReadingTexts.length },
                { id: 'strategy', label: 'Lecciones de estrategia', count: READING_STRATEGY_LESSONS.length }
              ]}
            />
            <div className="min-w-0 flex flex-col gap-8">
              <div className={readingPane === 'texts' ? '' : 'md:hidden'}>
                <PanelTitle title="Textos técnicos" sub="Lee el texto, usa el escaneo rápido y verifica la cita exacta resaltada tras responder." />
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:gap-5">
                  {allReadingTexts.map((rText) => {
                    const rQuestions = allQuestions.filter(q => q.section === 'R' && q.ref === rText.id);
                    return (
                      <div key={rText.id} className={CARD + ' justify-between'}>
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-mono text-[13px] text-[#1F5EFF] font-medium">{rText.id} · {rText.topic}</span>
                            <span className="text-[12px] text-[#56607A] font-mono">{rText.wordCount} palabras</span>
                          </div>
                          <h4 className="leading-snug font-display text-[20px] font-semibold text-[#0E1830]">{rText.title}</h4>
                          <p className="text-[#56607A] mt-1.5 mb-4 leading-relaxed line-clamp-3 text-[14px]">{rText.text}</p>
                        </div>
                        <button
                          onClick={() => startReadingDrillForText(rText.id)}
                          className="w-full border border-[#0E1830] text-[#0E1830] hover:bg-[#0E1830] hover:text-white font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer rounded-[16px] min-h-[50px] text-[15px]"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Leer y practicar ({rQuestions.length} preguntas)</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={readingPane === 'strategy' ? '' : 'md:hidden'}>
                <PanelTitle title="Lecciones de estrategia" sub="Cómo responder cada tipo de pregunta de Reading, con práctica en el formato oficial." />
                <StrategyLessonCards lessons={READING_STRATEGY_LESSONS} onOpen={setActiveStrategy} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 3: DEDICATED LISTENING LAB */}
      {viewMode === 'listening' && (
        <div className="flex flex-col gap-8">
          {allListeningTracks[0] && (
            <NextStepBanner
              eyebrow={`Listening · ${allListeningTracks.length} escenarios con acentos EE.UU., Reino Unido, India y Australia`}
              title={allListeningTracks[0].title}
              cta="Escuchar audio"
              onClick={() => startListeningDrillForTrack(allListeningTracks[0].id)}
            />
          )}

          <div className="space-y-6 xl:space-y-0 xl:grid xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-10 items-start">
            <SideNav
              label="Listening"
              active={listeningObjectiveFilter}
              onSelect={(id) => setListeningObjectiveFilter(id as typeof listeningObjectiveFilter)}
              items={[
                { id: 'all', label: 'Todos los audios', count: allListeningTracks.length },
                ...listeningObjectivesList.map(k => ({ id: k, label: `${k} · ${OBJECTIVES[k].titleEs.split('(')[0].trim()}` }))
              ]}
            />
            <div className="min-w-0 flex flex-col gap-8">
              {/* Móvil: filtro por objetivo (empieza el drill de ese objetivo) */}
              <div className="md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar">
                <Pill active={listeningObjectiveFilter === 'all'} onClick={() => setListeningObjectiveFilter('all')}>
                  Todos los audios ({allListeningTracks.length})
                </Pill>
                {listeningObjectivesList.map((objKey) => (
                  <Pill
                    key={objKey}
                    active={listeningObjectiveFilter === objKey}
                    onClick={() => {
                      setListeningObjectiveFilter(objKey);
                      startListeningDrillByObjective(objKey);
                    }}
                  >
                    {objKey} {OBJECTIVES[objKey].titleEs.split('(')[0].trim()}
                  </Pill>
                ))}
              </div>

              {/* Escritorio: panel del objetivo elegido */}
              {listeningObjectiveFilter !== 'all' && (
                <div className="hidden md:block">
                  <PanelTitle
                    title={`${listeningObjectiveFilter} · ${OBJECTIVES[listeningObjectiveFilter].titleEs.split('(')[0].trim()}`}
                    sub="Lee la estrategia de este objetivo y practica con preguntas en el formato oficial."
                  />
                  <button
                    onClick={() => startListeningDrillByObjective(listeningObjectiveFilter as LObjective)}
                    className="mb-6 min-h-[48px] rounded-[16px] border border-[#0E1830] px-5 text-[15px] font-semibold text-[#0E1830] hover:bg-[#0E1830] hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    Practicar {listeningObjectiveFilter}
                  </button>
                  <StrategyLessonCards
                    lessons={LISTENING_STRATEGY_LESSONS.filter(l => l.objective === listeningObjectiveFilter)}
                    onOpen={setActiveStrategy}
                  />
                </div>
              )}

              <div className={listeningObjectiveFilter === 'all' ? '' : 'md:hidden'}>
                <PanelTitle title="Todos los audios" sub="La transcripción se desbloquea tras responder, para reentrenar frase por frase." />
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:gap-5">
                  {allListeningTracks.map((track) => {
                    const trackQuestions = allQuestions.filter(q => q.section === 'L' && q.ref === track.id);
                    return (
                      <div key={track.id} className={CARD + ' justify-between'}>
                        <div>
                          <div className="flex items-center gap-1.5 text-[12px] font-mono font-bold text-[#1F5EFF] mb-2">
                            <span className="text-[13px]">{track.id}</span>
                            <span className="text-slate-400">·</span>
                            <span className="text-[#56607A] font-sans font-medium">{track.lines.length} intervenciones</span>
                          </div>
                          <h4 className="leading-snug font-display text-[20px] font-semibold text-[#0E1830]">{track.title}</h4>
                          <p className="text-[#56607A] mt-1 mb-3 leading-relaxed line-clamp-3 text-[14px]">{track.scenario}</p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {track.speakers.map((spk) => (
                              <span key={spk.id} className="text-[12px] border text-[#56607A] py-0.5 border-[#0E1830]/15 rounded-full px-2.5">
                                {spk.role.split('(')[0].trim()} ({spk.accentPreference || 'en-US'})
                              </span>
                            ))}
                          </div>
                        </div>
                        <button
                          onClick={() => startListeningDrillForTrack(track.id)}
                          className="w-full border border-[#0E1830] text-[#0E1830] hover:bg-[#0E1830] hover:text-white font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer rounded-[16px] min-h-[50px] text-[15px]"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Escuchar audio ({trackQuestions.length} preguntas)</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Móvil: lecciones de estrategia al final */}
              <div className="md:hidden border-t border-[#0E1830]/10 pt-8">
                <StrategyLessonCards lessons={LISTENING_STRATEGY_LESSONS} onOpen={setActiveStrategy} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 4: OFFICIAL SYLLABUS IDIOMS & COLLOCATIONS LAB */}
      {viewMode === 'idioms' && (
        <div className="flex flex-col gap-8">
          <NextStepBanner
            eyebrow={`Idioms y collocations · ${OFFICIAL_SYLLABUS_IDIOMS.length} expresiones oficiales`}
            title="Entrena todas las expresiones de una vez"
            cta="Iniciar drill completo"
            onClick={startIdiomsDrill}
          />

          <div className="space-y-6 xl:space-y-0 xl:grid xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-10 items-start">
            <SideNav
              label="Idioms"
              active={idiomCategoryFilter}
              onSelect={(id) => setIdiomCategoryFilter(id as typeof idiomCategoryFilter)}
              items={[
                { id: 'all', label: 'Todas', count: OFFICIAL_SYLLABUS_IDIOMS.length },
                { id: 'idiom', label: 'Modismos IT', count: OFFICIAL_SYLLABUS_IDIOMS.filter(i => i.category === 'idiom').length },
                { id: 'grammar_pattern', label: 'Patrones gramaticales', count: OFFICIAL_SYLLABUS_IDIOMS.filter(i => i.category === 'grammar_pattern').length },
                { id: 'technical_usage', label: 'Uso técnico', count: OFFICIAL_SYLLABUS_IDIOMS.filter(i => i.category === 'technical_usage').length }
              ]}
            />
            <div className="min-w-0 space-y-6">
              <div className="md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar">
                {[
                  { id: 'all', label: `Todos (${OFFICIAL_SYLLABUS_IDIOMS.length})` },
                  { id: 'idiom', label: 'Modismos IT' },
                  { id: 'grammar_pattern', label: 'Patrones Gramaticales' },
                  { id: 'technical_usage', label: 'Uso Técnico' }
                ].map(f => (
                  <Pill key={f.id} active={idiomCategoryFilter === f.id} onClick={() => setIdiomCategoryFilter(f.id as any)}>{f.label}</Pill>
                ))}
              </div>
              <PanelTitle
                title={{ all: 'Todas las expresiones', idiom: 'Modismos IT', grammar_pattern: 'Patrones gramaticales', technical_usage: 'Uso técnico' }[idiomCategoryFilter]}
                sub="Cada tarjeta trae el significado, la fórmula y un ejemplo. Prueba una pregunta de examen cuando la entiendas."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 md:gap-5">
                {filteredIdioms.map((idm) => (
                  <div key={idm.id} className={CARD + ' justify-between space-y-3'}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-semibold text-amber-800 text-[13px]">
                          {idm.category === 'idiom' ? 'Modismo IT' : idm.category === 'grammar_pattern' ? 'Patrón Gramatical' : 'Uso Técnico'}
                        </span>
                        <span className="text-[12px] font-mono text-slate-400">G26</span>
                      </div>
                      <h4 className="text-slate-900 font-mono text-[18px] font-semibold">"{idm.phrase}"</h4>
                      <div className="text-xs space-y-1.5 mt-2">
                        <div className="text-slate-800"><strong className="text-slate-900">Significado: </strong>{idm.meaningEs}</div>
                        <div className="p-2 bg-slate-50 rounded-xl font-mono text-[12px] text-blue-900 border border-slate-100">{idm.formula}</div>
                      </div>
                      <div className="text-xs space-y-1.5 mt-2">
                        <p className="text-[12px] text-slate-500 italic"><strong>Contexto IT:</strong> {idm.contextIT}</p>
                        <div className="p-2.5 bg-blue-50/50 rounded-xl border border-blue-100 space-y-1">
                          <div className="font-medium text-slate-900 text-xs">"{idm.exampleEn}"</div>
                          <div className="text-[12px] text-slate-600">{idm.exampleEs}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-1.5 text-[12px] text-amber-800 bg-amber-50/70 p-2 rounded-xl mt-2">
                        <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{idm.tipEs}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => startSingleIdiomDrill(idm)}
                      className="w-full min-h-[44px] rounded-[14px] border border-[#0E1830] text-[#0E1830] hover:bg-[#0E1830] hover:text-white font-semibold text-[14px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Probar pregunta de examen</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 6: RADAR ANTI-SPANGLISH & FALSOS AMIGOS TI */}
      {viewMode === 'false_friends' && (
        <div className="space-y-6 animate-in fade-in">
          <NextStepBanner
            eyebrow={`Trampas B2 · ${FALSE_FRIENDS_DATA.length} calcos del español que el examen penaliza`}
            title="Duelo de trampas: pon a prueba tu radar"
            cta="Iniciar duelo (16 ítems)"
            onClick={startFalseFriendsSprint}
          />

          <div className="space-y-6 xl:space-y-0 xl:grid xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-10 items-start">
            <SideNav
              label="Trampas"
              active={falseFriendsCategory}
              onSelect={(id) => setFalseFriendsCategory(id as typeof falseFriendsCategory)}
              items={[
                { id: 'all', label: 'Todas', count: FALSE_FRIENDS_DATA.length },
                { id: 'cognate', label: 'Falsos cognados', count: FALSE_FRIENDS_DATA.filter(f => f.category === 'cognate').length },
                { id: 'preposition', label: 'Preposiciones dependientes', count: FALSE_FRIENDS_DATA.filter(f => f.category === 'preposition').length }
              ]}
            />
            <div className="min-w-0 space-y-6">
              <div className="md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar">
                <Pill active={falseFriendsCategory === 'all'} onClick={() => setFalseFriendsCategory('all')}>Todas ({FALSE_FRIENDS_DATA.length})</Pill>
                <Pill active={falseFriendsCategory === 'cognate'} onClick={() => setFalseFriendsCategory('cognate')}>Falsos cognados</Pill>
                <Pill active={falseFriendsCategory === 'preposition'} onClick={() => setFalseFriendsCategory('preposition')}>Preposiciones</Pill>
              </div>
              <PanelTitle
                title={{ all: 'Todas las trampas', cognate: 'Falsos cognados', preposition: 'Preposiciones dependientes' }[falseFriendsCategory]}
                sub="Cada tarjeta muestra el error típico, el significado real en TI y un micro-reto."
              />
              <div className="relative max-w-sm">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={falseFriendsSearch}
                  onChange={(e) => setFalseFriendsSearch(e.target.value)}
                  placeholder="Buscar trampa (actual, rely on)..."
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-[#0E1830]/15 bg-white focus:outline-none focus:ring-2 focus:ring-[#0E1830]/20 focus:border-[#0E1830] transition-all"
                />
              </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-5">
            {FALSE_FRIENDS_DATA
              .filter(item => {
                const matchesCat = falseFriendsCategory === 'all' || item.category === falseFriendsCategory;
                const matchesS = item.term.toLowerCase().includes(falseFriendsSearch.toLowerCase()) ||
                  item.realItMeaning.toLowerCase().includes(falseFriendsSearch.toLowerCase()) ||
                  item.literalSpanishTrap.toLowerCase().includes(falseFriendsSearch.toLowerCase()) ||
                  item.goldenRule.toLowerCase().includes(falseFriendsSearch.toLowerCase());
                return matchesCat && matchesS;
              })
              .map((item, idx) => {
                const isDrillOpen = activeFFDrillId === item.id;
                const selectedOpt = ffDrillSelections[item.id];
                const isAnswered = selectedOpt !== undefined && selectedOpt !== null;
                const isCorrect = isAnswered && selectedOpt === item.fastDrill.answer;

                return (
                  <div
                    key={item.id}
                    className={CARD + ' justify-between space-y-3.5'}
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                            {idx + 1}
                          </span>
                          <h4 className="text-base font-bold text-slate-900 font-mono">
                            {item.term}
                          </h4>
                        </div>
                        <span className="text-[12px] font-semibold text-slate-500 px-2 py-0.5 rounded-md uppercase max-md:normal-case bg-transparent p-0">
                          {item.category === 'cognate' ? 'Falso Cognado' : 'Preposición Fija'}
                        </span>
                      </div>

                      {/* Trap vs IT Meaning */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                        <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-xs space-y-1">
                          <span className="font-bold text-rose-950 flex items-center gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                            <span>Error Típico (Calco L1):</span>
                          </span>
                          <p className="text-rose-900 leading-relaxed pl-5 text-[11.5px]">
                            {item.literalSpanishTrap}
                          </p>
                          <div className="pl-5 pt-0.5 text-[12px] text-rose-800">
                            💡 Usa en su lugar: <strong className="text-rose-950">{item.howToSayLiteralInEnglish}</strong>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-1">
                          <span className="font-bold text-emerald-950 flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>Significado Real en TI:</span>
                          </span>
                          <p className="text-emerald-900 leading-relaxed pl-5 text-[11.5px] font-medium">
                            {item.realItMeaning}
                          </p>
                        </div>
                      </div>

                      {/* 3-Second Golden Rule */}
                      <div className="mt-2.5 p-2.5 rounded-xl bg-amber-500/10 border border-amber-300 text-xs text-amber-950 flex items-start gap-2">
                        <Zap className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 fill-amber-500" />
                        <div>
                          <strong className="font-bold text-amber-900 block text-[12px]">
                            ⚡ Atajo 3s del Examinador:
                          </strong>
                          <span className="font-medium text-[11.5px]">
                            {item.goldenRule}
                          </span>
                        </div>
                      </div>

                      {/* Workplace Example */}
                      <div className="mt-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                        <span className="font-bold text-slate-700 block text-[12px]">Contexto Técnico Real:</span>
                        <div className="font-mono text-slate-900 bg-white p-2 rounded-lg border border-slate-200 text-[11.5px] leading-relaxed">
                          "{item.workplaceExample.en}"
                        </div>
                        <div className="text-slate-500 italic text-[12px] pl-1">
                          {item.workplaceExample.es}
                        </div>
                      </div>
                    </div>

                    {/* Micro-Drill Toggle */}
                    <div className="pt-2 border-t border-slate-100">
                      <button
                        onClick={() => setActiveFFDrillId(isDrillOpen ? null : item.id)}
                        className="w-full py-2 px-3 rounded-xl border border-indigo-200 bg-indigo-50/70 hover:bg-indigo-100 text-indigo-800 text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                          <span>{isDrillOpen ? 'Ocultar Micro-Reto' : 'Calibrar con Micro-Reto'}</span>
                        </span>
                        <span className="text-[12px] text-indigo-600">{isDrillOpen ? '▲' : '▼'}</span>
                      </button>

                      {isDrillOpen && (
                        <div className="mt-2.5 p-3 rounded-xl bg-purple-50/80 border border-purple-200 text-xs space-y-2.5 animate-in fade-in">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-purple-900 text-[12px]">
                              Reto de Calibración:
                            </span>
                            {isAnswered && (
                              <button
                                onClick={() => setFFDrillSelections(prev => ({ ...prev, [item.id]: null }))}
                                className="text-[12px] text-purple-700 hover:text-purple-950 flex items-center gap-1 font-semibold cursor-pointer"
                              >
                                <RotateCcw className="w-3 h-3" />
                                <span>Reintentar</span>
                              </button>
                            )}
                          </div>

                          <p className="font-semibold text-slate-900 leading-snug">
                            {item.fastDrill.stem}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {item.fastDrill.options.map((opt, optIdx) => {
                              const isOptSelected = selectedOpt === optIdx;
                              const isOptCorrect = optIdx === item.fastDrill.answer;

                              let btnStyle = 'bg-white hover:bg-purple-100/60 text-slate-800 border-purple-200';
                              if (isAnswered) {
                                if (isOptCorrect) {
                                  btnStyle = 'bg-emerald-50 text-emerald-950 font-bold border-emerald-400 ring-1 ring-emerald-400';
                                } else if (isOptSelected) {
                                  btnStyle = 'bg-rose-50 text-rose-950 font-bold border-rose-400 ring-1 ring-rose-400';
                                } else {
                                  btnStyle = 'bg-white/60 text-slate-400 border-slate-200 opacity-60';
                                }
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => setFFDrillSelections(prev => ({ ...prev, [item.id]: optIdx }))}
                                  disabled={isAnswered}
                                  className={`p-2 rounded-lg border text-left text-xs transition-colors flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                                >
                                  <span>{opt}</span>
                                  {isAnswered && isOptCorrect && <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                                </button>
                              );
                            })}
                          </div>

                          {isAnswered && (
                            <div className={`p-2.5 rounded-lg border text-xs leading-relaxed ${
                              isCorrect
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                                : 'bg-rose-50 border-rose-200 text-rose-950'
                            }`}>
                              <strong className="block mb-0.5 font-bold">
                                {isCorrect ? '✅ ¡Correcto! Identificaste la trampa:' : '❌ Ojo con la trampa del español:'}
                              </strong>
                              {item.fastDrill.quickWhy}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
            </div>
          </div>
        </div>
      )}

      {/* Mini-lesson modal if triggered */}
      {activeLesson && (
        <MiniLessonModal
          lesson={activeLesson}
          onStartPractice={() => {
            if (pendingLessonItem) {
              launchCourseLessonPractice(pendingLessonItem);
            } else {
              startDrill(activeLesson.topicId);
            }
          }}
          onClose={() => {
            setActiveLesson(null);
            setPendingLessonItem(null);
          }}
        />
      )}

      {activeStrategy && (
        <StrategyLessonModal
          key={activeStrategy.objective}
          lesson={activeStrategy}
          onStartPractice={() => startStrategyPractice(activeStrategy)}
          onClose={() => setActiveStrategy(null)}
        />
      )}
    </div>
  );
};
