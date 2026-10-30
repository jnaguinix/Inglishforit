import { Question, TopicId } from '../types';
import { StorageService } from './storage';
import { shuffleArray } from '../utils/random';

export interface InterleavedSprintSummary {
  questions: Question[];
  topicsCovered: TopicId[];
  weakTopicsCount: number;
  reviewTopicsCount: number;
}

/**
 * Discriminative Contrast Clusters (Brunmair & Richter, 2019):
 * Pairing structurally confusable grammar topics in the same interleaved session
 * trains the student to discriminate the exact syntactic trigger.
 */
export const CONFUSABLE_TOPIC_CLUSTERS: TopicId[][] = [
  ['G21', 'G22', 'G24', 'G28'], // Connectors: Despite/Although vs Whereas/While vs Even if/Even though vs Because of/Due to
  ['G03', 'G06', 'G27'],        // Hypotheticals & Conditionals: As if/though vs Mixed Conditionals vs Inverted Conditionals
  ['G08', 'G14', 'G29'],        // Modals & Hedging: Had better/Should have vs Must/Can't have vs Diplomatic Softening
  ['G09', 'G12', 'G15', 'G18', 'G25'], // Aspect & Timeline: Perfect vs Past, Future Perfect, Since, Yet, Past Perfect
  ['G01', 'G02', 'G20'],        // Clause structures: Impersonal/Personal Passive, Relative Clauses, Cleft Sentences
  ['G04', 'G07', 'G13'],        // High-formal structures: Emphatic Do, Negative Inversion, Mandative Subjunctive
  ['G05', 'G11', 'G19'],        // Complementation: Dependent Prepositions, Gerunds/Infinitives, Phrasal Verbs
  ['G10', 'G16', 'G17', 'G23']  // Operational grammar: Imperatives/Need -ing, Negative Future, Gender-Neutral, Always -ing
];

export class InterleavingEngine {
  /**
   * Generates a scientifically sequenced interleaved practice sprint.
   * - Target size: `count` questions (default 10)
   * - Prioritizes due Spaced Repetition Error Cards (up to 30% of sprint)
   * - Pairs weak topics with their discriminative contrast partners (CONFUSABLE_TOPIC_CLUSTERS)
   * - Enforces zero adjacent topic collisions
   * - Uses unbiased Fisher-Yates shuffle
   */
  static generateInterleavedSprint(count: number = 10): InterleavedSprintSummary {
    const allPractice = StorageService.getPracticeQuestions();
    const stats = StorageService.getAllTopicStats();

    // Group practice questions by topic
    const byTopic = new Map<TopicId, Question[]>();
    for (const q of allPractice) {
      if (!byTopic.has(q.topic)) {
        byTopic.set(q.topic, []);
      }
      byTopic.get(q.topic)!.push(q);
    }

    const availableTopics = Array.from(byTopic.keys());
    if (availableTopics.length === 0) {
      return {
        questions: allPractice.slice(0, count),
        topicsCovered: [],
        weakTopicsCount: 0,
        reviewTopicsCount: 0
      };
    }

    // 1. Check due Spaced Repetition Error Bank questions (up to 3 items in a 10-question sprint)
    const dueErrorQuestions = StorageService.getErrorBankQuestions(true).filter(q => q.pool !== 'exam');
    const selectedQuestions: Question[] = [];
    const usedQuestionIds = new Set<string>();
    const chosenTopics: TopicId[] = [];

    const maxDueToInject = Math.min(Math.floor(count * 0.3), dueErrorQuestions.length);
    for (let i = 0; i < maxDueToInject; i++) {
      const dq = dueErrorQuestions[i];
      if (!chosenTopics.includes(dq.topic)) {
        selectedQuestions.push(dq);
        usedQuestionIds.add(dq.id);
        chosenTopics.push(dq.topic);
      }
    }

    // 2. Partition remaining topics into Weak/Untested vs Mastered/Review
    const weakTopics: TopicId[] = [];
    const reviewTopics: TopicId[] = [];

    for (const t of availableTopics) {
      if (chosenTopics.includes(t)) continue;
      const s = stats[t];
      if (!s || s.status === 'weak' || s.status === 'untested' || s.accuracy < 75) {
        weakTopics.push(t);
      } else {
        reviewTopics.push(t);
      }
    }

    const shuffledWeak = shuffleArray(weakTopics);
    const shuffledReview = shuffleArray(reviewTopics);

    // 3. Build discriminative contrast pairs around primary weak topics
    const slotsRemaining = count - chosenTopics.length;
    const targetWeakSlots = Math.min(Math.round(slotsRemaining * 0.7), shuffledWeak.length);

    for (const wt of shuffledWeak) {
      if (chosenTopics.length >= count) break;
      if (!chosenTopics.includes(wt)) {
        chosenTopics.push(wt);
      }
      // Find a confusable contrast partner to maximize discriminative learning
      if (chosenTopics.length < count) {
        const cluster = CONFUSABLE_TOPIC_CLUSTERS.find(c => c.includes(wt));
        if (cluster) {
          const partner = shuffleArray(cluster).find(p => p !== wt && !chosenTopics.includes(p) && byTopic.has(p));
          if (partner) {
            chosenTopics.push(partner);
          }
        }
      }
      if (chosenTopics.length >= selectedQuestions.length + targetWeakSlots) break;
    }

    // 4. Add review topics (~30%)
    for (const rt of shuffledReview) {
      if (chosenTopics.length >= count) break;
      if (!chosenTopics.includes(rt)) {
        chosenTopics.push(rt);
      }
    }

    // 5. Backfill if still short of count
    if (chosenTopics.length < count) {
      const remaining = shuffleArray(availableTopics.filter(t => !chosenTopics.includes(t)));
      for (const rem of remaining) {
        if (chosenTopics.length >= count) break;
        chosenTopics.push(rem);
      }
    }

    // 6. Pick 1 question per topic for the newly added topics
    const topicToQuestion = new Map<TopicId, Question>();
    for (const q of selectedQuestions) {
      topicToQuestion.set(q.topic, q);
    }

    for (const topic of chosenTopics) {
      if (topicToQuestion.has(topic)) continue;
      const pool = (byTopic.get(topic) || []).filter(q => !usedQuestionIds.has(q.id));
      if (pool.length > 0) {
        const randQ = pool[Math.floor(Math.random() * pool.length)];
        topicToQuestion.set(topic, randQ);
        usedQuestionIds.add(randQ.id);
      }
    }

    // 7. Sequence topics using Fisher-Yates shuffle + zero adjacent topic/cluster collision check
    const sequencedTopics = shuffleArray(chosenTopics.slice(0, count));
    for (let i = 1; i < sequencedTopics.length; i++) {
      if (sequencedTopics[i] === sequencedTopics[i - 1]) {
        for (let j = i + 1; j < sequencedTopics.length; j++) {
          if (sequencedTopics[j] !== sequencedTopics[i - 1] && (j + 1 >= sequencedTopics.length || sequencedTopics[j] !== sequencedTopics[i])) {
            const temp = sequencedTopics[i];
            sequencedTopics[i] = sequencedTopics[j];
            sequencedTopics[j] = temp;
            break;
          }
        }
      }
    }

    const finalQuestions: Question[] = [];
    let weakCount = 0;
    let reviewCount = 0;

    for (const t of sequencedTopics) {
      const q = topicToQuestion.get(t);
      if (q) {
        finalQuestions.push(q);
        const s = stats[t];
        if (!s || s.status === 'weak' || s.status === 'untested' || s.accuracy < 75) {
          weakCount++;
        } else {
          reviewCount++;
        }
      }
    }

    return {
      questions: finalQuestions.slice(0, count),
      topicsCovered: sequencedTopics.slice(0, count),
      weakTopicsCount: weakCount,
      reviewTopicsCount: reviewCount
    };
  }
}
