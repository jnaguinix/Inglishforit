const fs = require('fs');

/**
 * Helper to build a Question object with balanced answer position
 */
function createQuestion({
  id,
  sub,
  num,
  stem,
  correct,
  distractors,
  why_correct,
  why_wrong_map,
  tip,
  topic,
  objective,
  human_rule,
  trigger,
  trap,
  usage
}) {
  const targetAns = (num - 1) % 4; // Cycles 0, 1, 2, 3
  const options = [];
  const why_wrong = [];
  let dIdx = 0;

  for (let i = 0; i < 4; i++) {
    if (i === targetAns) {
      options.push(correct);
      why_wrong.push(`✅ Opción correcta: ${why_correct}`);
    } else {
      const dist = distractors[dIdx++];
      options.push(dist);
      const reason = why_wrong_map[dist] || `Distractor incorrecto ("${dist}"): no se ajusta a la regla gramatical requerida para esta estructura.`;
      why_wrong.push(`❌ Opción incorrecta: ${reason}`);
    }
  }

  return {
    id,
    section: 'UE',
    objective,
    topic,
    difficulty: 2,
    pool: 'practice',
    stem,
    options,
    answer: targetAns,
    why_correct,
    why_wrong,
    tip_es: tip,
    ref: null,
    human_rule,
    trigger_anchor: trigger,
    spanglish_trap: trap,
    workplace_usage: usage
  };
}

module.exports = { createQuestion };
