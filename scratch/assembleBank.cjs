const fs = require('fs');
const path = require('path');

const { items_8_1 } = require('./data_8_1.cjs');
const { items_8_2 } = require('./data_8_2.cjs');
const { items_8_3 } = require('./data_8_3.cjs');
const { items_8_4 } = require('./data_8_4.cjs');

const allItems = [
  ...items_8_1,
  ...items_8_2,
  ...items_8_3,
  ...items_8_4
];

console.log('Total items loaded:', allItems.length);

if (allItems.length !== 114) {
  console.error(`ERROR: Expected 114 items, got ${allItems.length}`);
  process.exit(1);
}

// Validate each question
const idSet = new Set();
const answerCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };

allItems.forEach((q, idx) => {
  if (idSet.has(q.id)) {
    console.error(`ERROR: Duplicate ID: ${q.id} at index ${idx}`);
    process.exit(1);
  }
  idSet.add(q.id);

  if (!q.options || q.options.length !== 4) {
    console.error(`ERROR: Question ${q.id} does not have exactly 4 options!`);
    process.exit(1);
  }

  if (!q.why_wrong || q.why_wrong.length !== 4) {
    console.error(`ERROR: Question ${q.id} does not have exactly 4 why_wrong entries!`);
    process.exit(1);
  }

  if (typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) {
    console.error(`ERROR: Question ${q.id} has invalid answer index: ${q.answer}`);
    process.exit(1);
  }

  answerCounts[q.answer]++;
});

console.log('Answer distribution (balanced):', answerCounts);

// Generate TypeScript code
const tsContent = `import { Question } from '../../types';

/**
 * Cisco English for IT 1 - Appendix B: Extra Grammar Exercises (Part 8)
 * 114 reactivos de alta precisión oficiales de OpenEDG / Cisco Networking Academy.
 * Cobertura de secciones:
 *  - 8.1: Verb Tenses & Modals (8.1.1 - 8.1.6: 36 reactivos)
 *  - 8.2: Modals of Ability, Deduction & Necessity (8.2.1 - 8.2.5: 30 reactivos)
 *  - 8.3: Comparative Adverbs, Frequency & Adjectives (8.3.1 - 8.3.3: 18 reactivos)
 *  - 8.4: Passive Gerunds, Idioms, Hedging & Polite Requests (8.4.1 - 8.4.5: 30 reactivos)
 * 
 * Todos los reactivos están tipados estrictamente como 'pool: practice' para enriquecer
 * la práctica por módulos y temas sin descalibrar el simulacro oficial TestNow™.
 */
export const CISCO_IT1_EXTRA_GRAMMAR_BANK: Question[] = ${JSON.stringify(allItems, null, 2)};
`;

const outputPath = path.resolve(__dirname, '../src/data/banks/ciscoIt1ExtraGrammarBank.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');
console.log('Successfully wrote:', outputPath);
