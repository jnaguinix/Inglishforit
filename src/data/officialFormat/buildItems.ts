import { Question, ObjectiveId, TopicId, OfficialItemFormat } from '../../types';

/**
 * Builders for the official-format Listening / Reading banks.
 * Each draft only carries what is specific to the item; the builder adds the official
 * instruction line, the id, the pool and the "Opción correcta." slot in why_wrong.
 */

const INSTRUCTIONS: Record<'L' | 'R', Record<OfficialItemFormat, string>> = {
  L: {
    complete: 'Listen to the conversation, then select the correct answer option to complete the sentence.',
    select: 'Listen to the conversation, then select the correct answer option.',
    whose_opinion: 'Listen to the conversation. Whose opinion matches the statement: the woman, the man, or both the woman and the man?',
    agrees: 'Listen to the conversation. Decide which statement agrees with what the speakers say or neither.',
    paragraph: 'Listen to the conversation. Decide which part corresponds to the statement.'
  },
  R: {
    complete: 'Read the text, then select the correct answer option to complete the sentence.',
    select: 'Read the text, then select the correct answer option according to the text.',
    whose_opinion: 'Read the text. Whose opinion matches the statement?',
    agrees: 'Read the text. Decide which statement agrees with the text or neither.',
    paragraph: 'Read the text. Decide which paragraph corresponds to the statement.'
  }
};

export const WHOSE_OPINION_OPTIONS = ['Both', 'Man', 'Woman'];
export const PARAGRAPH_OPTIONS = ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D'];

export interface ItemDraft {
  objective: ObjectiveId;
  format: OfficialItemFormat;
  difficulty: 1 | 2 | 3;
  stem: string;
  options?: string[]; // omitted for whose_opinion and paragraph (standard option sets)
  answer: number;
  why_correct: string;
  why_wrong: string[]; // explanations for the wrong options only, in option order
  tip_es: string;
  evidence: string; // verbatim words from the audio / text ("..." joins separate fragments)
  paraphrase?: string;
}

export function buildItems(
  section: 'L' | 'R',
  ref: string,
  topic: TopicId,
  drafts: ItemDraft[]
): Question[] {
  return drafts.map((d, i) => {
    let options = d.options
      ?? (d.format === 'whose_opinion' ? WHOSE_OPINION_OPTIONS : d.format === 'paragraph' ? PARAGRAPH_OPTIONS : []);
    let answer = d.answer;

    // Free-order formats: move the correct option to a rotating slot so answers spread across A–D
    if (d.format === 'complete' || d.format === 'select') {
      const target = (i + ref.length) % options.length;
      const rest = options.filter((_, o) => o !== d.answer);
      options = [...rest.slice(0, target), options[d.answer], ...rest.slice(target)];
      answer = target;
    }

    const wrong = [...d.why_wrong];
    const why_wrong = options.map((_, o) => (o === answer ? 'Opción correcta.' : wrong.shift() ?? ''));
    const stem = `${INSTRUCTIONS[section][d.format]}\n\n${d.stem}`;

    return {
      id: `of-${ref}-${String(i + 1).padStart(2, '0')}`,
      section,
      objective: d.objective,
      topic,
      difficulty: d.difficulty,
      pool: 'practice',
      format: d.format,
      stem,
      options,
      answer,
      why_correct: d.why_correct,
      why_wrong,
      tip_es: d.tip_es,
      ref,
      evidence_quote: d.evidence,
      paraphrase_map: d.paraphrase
    };
  });
}

export const countWords = (text: string) => text.split(/\s+/).filter(Boolean).length;
