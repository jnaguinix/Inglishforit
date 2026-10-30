import { Question } from '../types';

/**
 * Unbiased Fisher-Yates (Knuth) shuffle algorithm.
 */
export function shuffleArray<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Official formats whose options have a fixed order (Both/Man/Woman, Neither last, Paragraph A–D)
const FIXED_ORDER_FORMATS = new Set(['whose_opinion', 'agrees', 'paragraph']);

/**
 * Shuffles the options of a Question using Fisher-Yates while keeping
 * `answer` and `why_wrong` strictly synchronized.
 */
export function shuffleQuestionOptions(q: Question): Question {
  const len = q.options.length;
  if (len <= 1 || (q.format && FIXED_ORDER_FORMATS.has(q.format))) return q;

  const indices = shuffleArray(Array.from({ length: len }, (_, i) => i));
  const newOptions = indices.map(origIdx => q.options[origIdx]);
  const newAnswer = indices.indexOf(q.answer);

  const newWhyWrong = indices.map((origIdx) => {
    if (!q.why_wrong) return '';
    return Array.isArray(q.why_wrong)
      ? (q.why_wrong[origIdx] ?? '')
      : ((q.why_wrong as unknown as Record<number, string>)[origIdx] ?? '');
  });

  return {
    ...q,
    options: newOptions,
    answer: newAnswer,
    why_wrong: newWhyWrong
  };
}

/**
 * Shuffles the options of an array of questions.
 */
export function shuffleQuestionsPoolOptions(questions: readonly Question[]): Question[] {
  return questions.map(shuffleQuestionOptions);
}

/**
 * Returns local YYYY-MM-DD date string (avoiding UTC midnight shift bugs).
 */
export function getLocalDateString(d: Date = new Date()): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Escapes special regular expression characters in user search strings.
 */
export function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
