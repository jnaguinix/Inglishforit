import {
  AttemptLog,
  DiagnosticResult,
  ExamConfig,
  ObjectiveId,
  Question,
  SpacedErrorCard,
  TopicId,
  TopicStats
} from '../types';
import { DEFAULT_EXAM_CONFIG } from '../config/examConfig';
import { OBJECTIVES, TOPICS } from '../config/taxonomy';
import { SEED_QUESTIONS } from '../data/seedQuestions';
import { PRACTICE_QUESTIONS } from '../data/practiceQuestions';
import { MODULAR_BANKS_QUESTIONS, REGISTERED_MODULAR_BANKS, ModularBankMeta } from '../data/banks';
import { OFFICIAL_SYLLABUS_IDIOMS } from '../data/officialIdioms';
import { getLocalDateString } from '../utils/random';

const STORAGE_KEYS = {
  ATTEMPTS: 'certit_b2_attempts_v1',
  DIAGNOSTIC: 'certit_b2_diagnostic_v1',
  CUSTOM_QUESTIONS: 'certit_b2_custom_questions_v2',
  ERROR_CARDS: 'certit_b2_error_cards_v1',
  CONFIG: 'certit_b2_config_v1',
  INTERLEAVED_SPRINTS: 'certit_b2_interleaved_sprints_v1'
};

/**
 * Convert the 18 official syllabus idioms into standard practice Question objects for topic G26
 * with balanced answer positions (0, 1, 2, 3).
 */
const IDIOM_PRACTICE_QUESTIONS: Question[] = OFFICIAL_SYLLABUS_IDIOMS.map((idm, idx) => {
  const targetAns = idx % 4;
  const origOpts = [...idm.practiceItem.options];
  const origAns = idm.practiceItem.answer;
  const correctText = origOpts[origAns];
  const distractors = origOpts.filter((_, i) => i !== origAns);

  const options: string[] = [];
  const why_wrong: string[] = [];
  let dIdx = 0;
  for (let pos = 0; pos < 4; pos++) {
    if (pos === targetAns) {
      options.push(correctText);
      why_wrong.push(idm.practiceItem.whyCorrectEs ? `Opción correcta: "${correctText}".` : `✅ Opción correcta: "${correctText}" es la expresión idiomática oficial (${idm.examKsa}).`);
    } else {
      const dist = distractors[dIdx++];
      options.push(dist);
      why_wrong.push(idm.practiceItem.distractorWhyEs?.[dIdx - 1] ?? `Distractor incorrecto ("${dist}"): altera la colocación fija del idiom oficial "${idm.phrase}".`);
    }
  }

  return {
    id: `prac-g26-${idm.id}`,
    section: 'UE',
    objective: 'UE4' as ObjectiveId,
    topic: 'G26' as TopicId,
    difficulty: 2,
    pool: 'practice',
    stem: idm.practiceItem.stem,
    options: options as [string, string, string, string],
    answer: targetAns,
    why_correct: idm.practiceItem.whyCorrectEs ?? `${idm.practiceItem.explanationEs} Significado en TI: ${idm.meaningEs}`,
    why_wrong: why_wrong as [string, string, string, string],
    tip_es: idm.tipEs,
    ref: null,
    trigger_anchor: idm.practiceItem.triggerEs ?? `${idm.phrase} -> ${idm.formula}`,
    human_rule: idm.practiceItem.humanRuleEs,
    spanglish_trap: idm.practiceItem.trapEs
  };
});

/**
 * Memoized static pools so we don't rebuild or deduplicate arrays on every render.
 */
const MEMOIZED_PRACTICE_POOL: Question[] = (() => {
  const map = new Map<string, Question>();
  for (const q of PRACTICE_QUESTIONS) map.set(q.id, q);
  for (const q of MODULAR_BANKS_QUESTIONS) map.set(q.id, q);
  for (const q of IDIOM_PRACTICE_QUESTIONS) map.set(q.id, q);
  return Array.from(map.values());
})();

const MEMOIZED_STATIC_ALL_MAP: Map<string, Question> = (() => {
  const map = new Map<string, Question>();
  for (const q of SEED_QUESTIONS) map.set(q.id, q);
  for (const q of MEMOIZED_PRACTICE_POOL) map.set(q.id, q);
  return map;
})();

// Spaced repetition intervals in milliseconds:
// Stage 0: 10 minutes (immediate consolidation), Stage 1: 1 day, Stage 2: 3 days, Stage 3: 7 days, Stage 4: 14 days
const SRS_INTERVALS_MS = [
  10 * 60 * 1000,
  1 * 24 * 60 * 60 * 1000,
  3 * 24 * 60 * 60 * 1000,
  7 * 24 * 60 * 60 * 1000,
  14 * 24 * 60 * 60 * 1000
];

export interface ExamReadinessReport {
  overallScore: number;
  passProbability: number;
  readinessLabel: 'Listo para Certificar' | 'Casi Listo' | 'En Progreso' | 'Riesgo Alto';
  sectionScores: {
    UE: number;
    L: number;
    R: number;
  };
  topicsMasteredCount: number;
  topicsTestedCount: number;
  totalTopicsCount: number;
  dueErrorsCount: number;
  totalAttempts: number;
}

export interface StudyStreakInfo {
  streakDays: number;
  studiedToday: boolean;
  todayCount: number;
  activeWeekdays: boolean[]; // [Lun, Mar, Mié, Jue, Vie, Sáb, Dom] for the current week
}

export class StorageService {
  private static attemptsCache: AttemptLog[] | null = null;
  private static errorCardsCache: SpacedErrorCard[] | null = null;

  private static safeSetItem(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error(`LocalStorage write error for key "${key}":`, e);
    }
  }

  // Config
  static getConfig(): ExamConfig {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CONFIG);
      if (raw) return { ...DEFAULT_EXAM_CONFIG, ...JSON.parse(raw) };
    } catch (e) {
      console.error('Error loading config:', e);
    }
    return DEFAULT_EXAM_CONFIG;
  }

  static saveConfig(cfg: ExamConfig): void {
    this.safeSetItem(STORAGE_KEYS.CONFIG, JSON.stringify(cfg));
  }

  // Attempts
  static getAttempts(): AttemptLog[] {
    if (this.attemptsCache !== null) {
      return this.attemptsCache;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          this.attemptsCache = parsed;
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error reading attempts:', e);
    }
    this.attemptsCache = [];
    return [];
  }

  static recordAttempt(log: Omit<AttemptLog, 'id' | 'timestamp' | 'dateStr'>): AttemptLog {
    const attempts = [...this.getAttempts()];
    const now = Date.now();
    const dateStr = getLocalDateString(new Date(now));
    const newLog: AttemptLog = {
      ...log,
      id: `att_${now}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: now,
      dateStr
    };
    attempts.push(newLog);
    this.attemptsCache = attempts;
    this.safeSetItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts));

    // Update Spaced Repetition Error bank
    if (!log.isCorrect) {
      this.recordError(log.questionId, log.topic);
    } else {
      this.promoteErrorIfCorrect(log.questionId);
    }

    return newLog;
  }

  // Spaced Repetition Error Cards
  static getErrorCards(): SpacedErrorCard[] {
    if (this.errorCardsCache !== null) {
      return this.errorCardsCache;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.ERROR_CARDS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          this.errorCardsCache = parsed;
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error reading error cards:', e);
    }
    this.errorCardsCache = [];
    return [];
  }

  static getDueErrorCards(): SpacedErrorCard[] {
    const now = Date.now();
    return this.getErrorCards()
      .filter(c => c.nextReviewAt <= now)
      .sort((a, b) => a.nextReviewAt - b.nextReviewAt);
  }

  static getErrorBankQuestions(onlyDue: boolean = false): Question[] {
    const allCards = [...this.getErrorCards()].sort((a, b) => a.nextReviewAt - b.nextReviewAt);
    const now = Date.now();
    const targetCards = onlyDue ? allCards.filter(c => c.nextReviewAt <= now) : allCards;
    const effectiveCards = targetCards.length > 0 ? targetCards : allCards;

    const allQMap = new Map<string, Question>();
    for (const q of this.getAllQuestions()) {
      allQMap.set(q.id, q);
    }

    const result: Question[] = [];
    for (const card of effectiveCards) {
      const q = allQMap.get(card.questionId);
      if (q) result.push(q);
    }
    return result;
  }

  static recordError(questionId: string, topic: TopicId): void {
    const cards = [...this.getErrorCards()];
    const existingIndex = cards.findIndex(c => c.questionId === questionId);
    const now = Date.now();

    if (existingIndex >= 0) {
      const card = { ...cards[existingIndex] };
      card.wrongAttemptsCount += 1;
      card.intervalIndex = 0; // Reset to stage 0 (10 minutes) on new mistake
      card.nextReviewAt = now + SRS_INTERVALS_MS[0];
      card.lastTestedAt = now;
      cards[existingIndex] = card;
    } else {
      cards.push({
        questionId,
        topic,
        intervalIndex: 0,
        nextReviewAt: now + SRS_INTERVALS_MS[0],
        wrongAttemptsCount: 1,
        lastTestedAt: now
      });
    }
    this.errorCardsCache = cards;
    this.safeSetItem(STORAGE_KEYS.ERROR_CARDS, JSON.stringify(cards));
  }

  static promoteErrorIfCorrect(questionId: string): void {
    const cards = [...this.getErrorCards()];
    const index = cards.findIndex(c => c.questionId === questionId);
    if (index === -1) return;

    const card = { ...cards[index] };
    const nextIntervalIdx = card.intervalIndex + 1;

    if (nextIntervalIdx >= SRS_INTERVALS_MS.length) {
      // Completed all SRS stages -> graduated from Error Bank
      cards.splice(index, 1);
    } else {
      card.intervalIndex = nextIntervalIdx;
      card.nextReviewAt = Date.now() + SRS_INTERVALS_MS[nextIntervalIdx];
      card.lastTestedAt = Date.now();
      cards[index] = card;
    }
    this.errorCardsCache = cards;
    this.safeSetItem(STORAGE_KEYS.ERROR_CARDS, JSON.stringify(cards));
  }

  // Diagnostic
  static getDiagnosticResult(): DiagnosticResult | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.DIAGNOSTIC);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.error('Error reading diagnostic:', e);
    }
    return null;
  }

  static saveDiagnosticResult(result: DiagnosticResult): void {
    this.safeSetItem(STORAGE_KEYS.DIAGNOSTIC, JSON.stringify(result));
  }

  /**
   * Stratified Diagnostic Questions (18 evaluation items: 6 UE, 6 L, 6 R)
   * Selects items with distinct topics so the diagnostic evaluates 18 unique topics across the syllabus.
   */
  static getDiagnosticQuestions(): Question[] {
    const pickDistinctByTopic = (pool: Question[], count: number, usedTopics: Set<TopicId>): Question[] => {
      const picked: Question[] = [];
      for (const q of pool) {
        if (picked.length >= count) break;
        if (!usedTopics.has(q.topic)) {
          usedTopics.add(q.topic);
          picked.push(q);
        }
      }
      for (const q of pool) {
        if (picked.length >= count) break;
        if (!picked.some(p => p.id === q.id)) {
          picked.push(q);
        }
      }
      return picked;
    };

    const usedTopics = new Set<TopicId>();
    const uePool = SEED_QUESTIONS.filter(q => q.section === 'UE');
    const lPool = SEED_QUESTIONS.filter(q => q.section === 'L');
    const rPool = SEED_QUESTIONS.filter(q => q.section === 'R');

    const ue = pickDistinctByTopic(uePool, 6, usedTopics);
    const l = pickDistinctByTopic(lPool, 6, usedTopics);
    const r = pickDistinctByTopic(rPool, 6, usedTopics);
    return [...ue, ...l, ...r];
  }

  // Official Evaluation Exam Questions (expands SEED_QUESTIONS with high-caliber evaluation items to prevent exhaustion)
  static getMockExamQuestions(): Question[] {
    const map = new Map<string, Question>();
    for (const q of SEED_QUESTIONS) map.set(q.id, q);
    for (const q of MEMOIZED_PRACTICE_POOL) {
      if (q.section === 'L' || q.section === 'R' || q.difficulty >= 2) {
        if (!map.has(q.id)) {
          map.set(q.id, q);
        }
      }
    }
    return Array.from(map.values());
  }

  // Dedicated Practice Questions (base practice bank + all modular thematic banks + official idioms)
  static getPracticeQuestions(topicId?: TopicId): Question[] {
    if (topicId) {
      return MEMOIZED_PRACTICE_POOL.filter(q => q.topic === topicId);
    }
    return [...MEMOIZED_PRACTICE_POOL];
  }

  // Registered Modular Banks Metadata
  static getModularBanks(): ModularBankMeta[] {
    return REGISTERED_MODULAR_BANKS;
  }

  static getAllQuestions(): Question[] {
    const map = new Map<string, Question>(MEMOIZED_STATIC_ALL_MAP);
    try {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            for (const q of parsed) {
              if (q && q.id) map.set(q.id, q);
            }
          }
        }
      }
    } catch (e) {
      console.error('Error reading custom questions:', e);
    }
    return Array.from(map.values());
  }

  static saveCustomQuestions(questions: Question[]): void {
    this.safeSetItem(STORAGE_KEYS.CUSTOM_QUESTIONS, JSON.stringify(questions));
  }

  // Topic Mastery Engine
  static getTopicStats(topicId: TopicId, preloadedAttempts?: AttemptLog[]): TopicStats {
    const allAttempts = preloadedAttempts ?? this.getAttempts();
    const attempts = allAttempts.filter(a => a.topic === topicId);
    if (attempts.length === 0) {
      return {
        topicId,
        attempts: 0,
        correctCount: 0,
        accuracy: 0,
        distinctDays: 0,
        isMastered: false,
        status: 'untested'
      };
    }

    const sorted = [...attempts].sort((a, b) => a.timestamp - b.timestamp);
    const last12 = sorted.slice(-12);
    const correctCount = last12.filter(a => a.isCorrect).length;
    const accuracy = Math.round((correctCount / last12.length) * 100);

    const distinctDays = new Set(last12.map(a => a.dateStr)).size;
    const isMastered = last12.length >= 12 && accuracy >= 85 && distinctDays >= 2;

    let status: 'untested' | 'weak' | 'in_progress' | 'mastered' = 'in_progress';
    if (isMastered) {
      status = 'mastered';
    } else if (accuracy < 70) {
      status = 'weak';
    }

    return {
      topicId,
      attempts: sorted.length,
      correctCount,
      accuracy,
      distinctDays,
      isMastered,
      status
    };
  }

  static getAllTopicStats(): Record<TopicId, TopicStats> {
    const allAttempts = this.getAttempts();
    const result = {} as Record<TopicId, TopicStats>;
    for (const key of Object.keys(TOPICS) as TopicId[]) {
      result[key] = this.getTopicStats(key, allAttempts);
    }
    return result;
  }

  /**
   * Get Today's 3 priority topics (weakest, not mastered).
   * Integrates Diagnostic weakestTopics when the user has not yet accumulated practice attempts.
   */
  static getTodayFocusTopics(): TopicId[] {
    const allStats = this.getAllTopicStats();
    const list = Object.values(allStats);
    const active = list.filter(s => !s.isMastered);

    const testedWeak = active
      .filter(s => s.attempts > 0)
      .sort((a, b) => a.accuracy - b.accuracy)
      .map(s => s.topicId);

    const selected: TopicId[] = [...testedWeak.slice(0, 3)];

    if (selected.length < 3) {
      const diag = this.getDiagnosticResult();
      if (diag?.weakestTopics?.length) {
        for (const t of diag.weakestTopics) {
          if (!selected.includes(t) && !allStats[t]?.isMastered) {
            selected.push(t);
          }
          if (selected.length >= 3) break;
        }
      }
    }

    if (selected.length < 3) {
      const fallbacks: TopicId[] = ['G01', 'G13', 'G07', 'G14', 'G22', 'G12'];
      for (const f of fallbacks) {
        if (!selected.includes(f) && !allStats[f]?.isMastered) {
          selected.push(f);
        }
        if (selected.length >= 3) break;
      }
    }

    if (selected.length < 3) {
      for (const s of active) {
        if (!selected.includes(s.topicId)) selected.push(s.topicId);
        if (selected.length >= 3) break;
      }
    }

    return selected.slice(0, 3);
  }

  /**
   * Real consecutive study streak and weekly calendar based on local dates.
   */
  static getStudyStreakInfo(): StudyStreakInfo {
    const attempts = this.getAttempts();
    const today = new Date();
    const todayStr = getLocalDateString(today);
    const dateSet = new Set(attempts.map(a => a.dateStr));

    // Also include dates from interleaved sprints if any
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.INTERLEAVED_SPRINTS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.dates)) {
          for (const d of parsed.dates) dateSet.add(d);
        }
      }
    } catch {
      // ignore
    }

    const todayCount = attempts.filter(a => a.dateStr === todayStr).length;
    const studiedToday = dateSet.has(todayStr);

    // Consecutive days counting backwards from today (or from yesterday if not studied yet today)
    let streakDays = 0;
    const cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (!studiedToday) {
      cursor.setDate(cursor.getDate() - 1);
    }
    while (dateSet.has(getLocalDateString(cursor))) {
      streakDays++;
      cursor.setDate(cursor.getDate() - 1);
    }

    // Current week Monday..Sunday (index 0 = Monday, 6 = Sunday)
    const dayOfWeek = today.getDay(); // 0=Sun, 1=Mon...
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + diffToMonday);
    const activeWeekdays: boolean[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
      activeWeekdays.push(dateSet.has(getLocalDateString(d)));
    }

    return {
      streakDays,
      studiedToday,
      todayCount,
      activeWeekdays
    };
  }

  /**
   * Predictive Exam Readiness Score (0-100) weighted by OpenEDG EIT-B2-01 blueprint (42% UE, 29% L, 29% R)
   * and topic coverage across all 37 syllabus topics.
   */
  static getExamReadinessReport(): ExamReadinessReport {
    const attempts = this.getAttempts();
    const diag = this.getDiagnosticResult();
    const allStats = this.getAllTopicStats();
    const statList = Object.values(allStats);
    const totalTopicsCount = statList.length; // 37
    const topicsTestedCount = statList.filter(s => s.attempts > 0).length;
    const topicsMasteredCount = statList.filter(s => s.isMastered).length;
    const dueErrorsCount = this.getDueErrorCards().length;

    const calcSectionAccuracy = (sec: 'UE' | 'L' | 'R', fallback: number): number => {
      const secAttempts = attempts.filter(a => a.section === sec).slice(-40);
      if (secAttempts.length === 0) return fallback;
      const correct = secAttempts.filter(a => a.isCorrect).length;
      return Math.round((correct / secAttempts.length) * 100);
    };

    const diagUe = diag?.sectionScores?.UE?.pct ?? 0;
    const diagL = diag?.sectionScores?.L?.pct ?? 0;
    const diagR = diag?.sectionScores?.R?.pct ?? 0;

    const ueScore = calcSectionAccuracy('UE', diagUe);
    const lScore = calcSectionAccuracy('L', diagL);
    const rScore = calcSectionAccuracy('R', diagR);

    // Weighted accuracy according to OpenEDG 35-item exam (15 UE = 42.8%, 10 L = 28.6%, 10 R = 28.6%)
    const weightedSectionAccuracy = Math.round(ueScore * 0.428 + lScore * 0.286 + rScore * 0.286);

    // Coverage factor: rewards testing across the 37 topics so 1 correct answer doesn't give 100% readiness
    const coverageRatio = Math.min(1, (topicsTestedCount + (diag ? 8 : 0)) / 25);
    const effectiveCoverageFactor = 0.35 + 0.65 * coverageRatio;

    const rawReadiness = Math.round(weightedSectionAccuracy * effectiveCoverageFactor);
    const overallScore = attempts.length === 0 && !diag ? 0 : Math.max(5, Math.min(100, rawReadiness));

    // Logistic-like pass probability centered around 70% passing threshold
    let passProbability = 0;
    if (attempts.length > 0 || diag) {
      const delta = overallScore - 68;
      passProbability = Math.round(100 / (1 + Math.exp(-delta / 9)));
      passProbability = Math.max(5, Math.min(99, passProbability));
    }

    let readinessLabel: ExamReadinessReport['readinessLabel'] = 'Riesgo Alto';
    if (overallScore >= 80 && topicsTestedCount >= 12) {
      readinessLabel = 'Listo para Certificar';
    } else if (overallScore >= 70) {
      readinessLabel = 'Casi Listo';
    } else if (overallScore >= 45) {
      readinessLabel = 'En Progreso';
    }

    return {
      overallScore,
      passProbability,
      readinessLabel,
      sectionScores: { UE: ueScore, L: lScore, R: rScore },
      topicsMasteredCount,
      topicsTestedCount,
      totalTopicsCount,
      dueErrorsCount,
      totalAttempts: attempts.length
    };
  }

  /**
   * Export & Import complete student progress backup (JSON)
   */
  static exportProgressBackup(): string {
    const payload = {
      version: 2,
      exportedAt: new Date().toISOString(),
      attempts: this.getAttempts(),
      diagnostic: this.getDiagnosticResult(),
      errorCards: this.getErrorCards(),
      config: this.getConfig(),
      interleavedSprints: (() => {
        try {
          const raw = localStorage.getItem(STORAGE_KEYS.INTERLEAVED_SPRINTS);
          return raw ? JSON.parse(raw) : null;
        } catch {
          return null;
        }
      })()
    };
    return JSON.stringify(payload, null, 2);
  }

  static importProgressBackup(rawJson: string): { success: boolean; message: string } {
    try {
      const data = JSON.parse(rawJson);
      if (!data || typeof data !== 'object' || !Array.isArray(data.attempts)) {
        return { success: false, message: 'El archivo no tiene el formato de respaldo de progreso válido.' };
      }
      this.attemptsCache = data.attempts;
      this.safeSetItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(data.attempts));

      if (Array.isArray(data.errorCards)) {
        this.errorCardsCache = data.errorCards;
        this.safeSetItem(STORAGE_KEYS.ERROR_CARDS, JSON.stringify(data.errorCards));
      }
      if (data.diagnostic) {
        this.safeSetItem(STORAGE_KEYS.DIAGNOSTIC, JSON.stringify(data.diagnostic));
      }
      if (data.config) {
        this.safeSetItem(STORAGE_KEYS.CONFIG, JSON.stringify(data.config));
      }
      if (data.interleavedSprints) {
        this.safeSetItem(STORAGE_KEYS.INTERLEAVED_SPRINTS, JSON.stringify(data.interleavedSprints));
      }
      return {
        success: true,
        message: `Respaldo restaurado con éxito (${data.attempts.length} intentos registrados).`
      };
    } catch {
      return { success: false, message: 'Error al leer el archivo JSON de respaldo.' };
    }
  }

  // Import / Export JSON Validator for Custom Questions
  static validateQuestionsJson(rawJson: string): { valid: boolean; questions?: Question[]; errors?: string[] } {
    const errors: string[] = [];
    try {
      const data = JSON.parse(rawJson);
      if (!Array.isArray(data)) {
        return { valid: false, errors: ['El archivo JSON debe contener un arreglo de preguntas.'] };
      }

      const validList: Question[] = [];
      const seenIds = new Set<string>();

      data.forEach((item: unknown, idx: number) => {
        const q = item as Partial<Question>;
        const prefix = `Ítem #${idx + 1}`;

        if (!q.id || typeof q.id !== 'string') {
          errors.push(`${prefix}: Falta el 'id' (texto).`);
          return;
        }
        if (seenIds.has(q.id)) {
          errors.push(`${prefix}: ID duplicado '${q.id}'.`);
          return;
        }
        seenIds.add(q.id);

        if (!['UE', 'L', 'R'].includes(q.section || '')) {
          errors.push(`${prefix}: 'section' debe ser UE, L o R.`);
        }

        if (!q.objective || !OBJECTIVES[q.objective]) {
          errors.push(`${prefix}: Objetivo inválido '${q.objective}'.`);
        }

        if (!q.topic || !TOPICS[q.topic]) {
          errors.push(`${prefix}: Tema inválido '${q.topic}'.`);
        }

        if (!q.stem || typeof q.stem !== 'string' || q.stem.trim().length < 5) {
          errors.push(`${prefix}: El enunciado ('stem') está vacío o es muy corto.`);
        }

        if (!Array.isArray(q.options) || q.options.length !== 4) {
          errors.push(`${prefix}: Debe contener exactamente 4 opciones en 'options'.`);
        } else {
          for (let oIdx = 0; oIdx < 4; oIdx++) {
            if (typeof q.options[oIdx] !== 'string' || q.options[oIdx].trim().length === 0) {
              errors.push(`${prefix}: La opción ${oIdx + 1} está vacía.`);
            }
          }
        }

        if (typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) {
          errors.push(`${prefix}: 'answer' debe ser un número entero entre 0 y 3.`);
        }

        if (!q.why_correct || typeof q.why_correct !== 'string') {
          errors.push(`${prefix}: Falta la explicación de por qué es correcta ('why_correct').`);
        }

        if (!Array.isArray(q.why_wrong) || q.why_wrong.length !== 4) {
          errors.push(`${prefix}: Debe tener explicaciones de 'why_wrong' para las 4 opciones.`);
        }

        if (!q.tip_es || typeof q.tip_es !== 'string') {
          errors.push(`${prefix}: Falta el consejo para hispanohablantes ('tip_es').`);
        }

        if (errors.length === 0) {
          validList.push(q as Question);
        }
      });

      if (errors.length > 0) {
        return { valid: false, errors: errors.slice(0, 10) };
      }

      return { valid: true, questions: validList };
    } catch {
      return { valid: false, errors: ['Error de sintaxis JSON inválida. Comprueba las comas y comillas.'] };
    }
  }

  static getLlmPromptTemplate(): string {
    return `Actúa como diseñador senior de exámenes de certificación OpenEDG English for IT (B2 / GSE 59-75, código EIT-B2-01).
Crea un lote de 8 preguntas en formato JSON estricto con las siguientes especificaciones:

REGLAS DE DOMINIO:
1. Nivel B2 riguroso (GSE 59-75). Enunciados concisos. Una sola respuesta inequívocamente correcta.
2. Contextos de redes, ciberseguridad, soporte N1-N3 y software engineering (firewalls, BGP, Zero Trust, incidentes, tickets).
3. Distractores basados en errores típicos del hispanohablante (falsos amigos, preposiciones dependientes, inversión, subjuntivo mandatorio, tiempos perfectos).
4. Interfaz y explicaciones en ESPAÑOL; preguntas, textos y opciones en INGLÉS.

ESQUEMA JSON (array de objetos):
[
  {
    "id": "gen-ue-01",
    "section": "UE", // "UE", "L" o "R"
    "objective": "UE1", // UE1-UE5, L1-L5, R1-R5
    "topic": "G13", // G01-G29 o V01-V08
    "difficulty": 2, // 1, 2 o 3
    "stem": "The chief information security officer insisted that the contractor ______ read-only access to the production cluster.",
    "options": ["has", "have", "to have", "will have"],
    "answer": 1, // índice de 0 a 3
    "why_correct": "Explicación en español de la regla gramatical que valida la respuesta.",
    "why_wrong": [
      "Por qué falla la opción 0 (interferencia del español).",
      "Opción correcta.",
      "Por qué falla la opción 2.",
      "Por qué falla la opción 3."
    ],
    "tip_es": "Consejo nemotécnico breve en español para hispanohablantes.",
    "ref": null // null, o id de texto/audio si aplica
  }
]

Devuelve ÚNICAMENTE el bloque JSON válido, sin preámbulos ni markdown fuera del código.`;
  }

  // Interleaved Sprint Stats & History
  static getInterleavedSprintStats(): { completedToday: boolean; totalCompleted: number; streakDays: number; lastScore?: number } {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.INTERLEAVED_SPRINTS);
      if (!raw) return { completedToday: false, totalCompleted: 0, streakDays: 0 };
      const data = JSON.parse(raw);
      const today = getLocalDateString();
      const completedToday = Array.isArray(data.dates) && data.dates.includes(today);
      return {
        completedToday,
        totalCompleted: data.totalCompleted || 0,
        streakDays: data.streakDays || 0,
        lastScore: data.lastScore
      };
    } catch {
      return { completedToday: false, totalCompleted: 0, streakDays: 0 };
    }
  }

  static recordInterleavedSprintCompletion(score: number, total: number): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.INTERLEAVED_SPRINTS);
      const data = raw ? JSON.parse(raw) : { dates: [], totalCompleted: 0, streakDays: 0 };
      if (!Array.isArray(data.dates)) data.dates = [];
      const today = getLocalDateString();

      if (!data.dates.includes(today)) {
        data.dates.push(today);
        data.streakDays = (data.streakDays || 0) + 1;
      }
      data.totalCompleted = (data.totalCompleted || 0) + 1;
      data.lastScore = total > 0 ? Math.round((score / total) * 100) : 0;
      this.safeSetItem(STORAGE_KEYS.INTERLEAVED_SPRINTS, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving interleaved sprint record:', e);
    }
  }
}
