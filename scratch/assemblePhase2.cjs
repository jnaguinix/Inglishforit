const fs = require('fs');
const path = require('path');

const { items_mod3 } = require('./data_mod3.cjs');
const { items_mod4 } = require('./data_mod4.cjs');
const { items_mod5 } = require('./data_mod5.cjs');
const { items_mod6 } = require('./data_mod6.cjs');

console.log('--- Phase 2 Item Counts ---');
console.log('Module 3 items:', items_mod3.length, '(expected 62)');
console.log('Module 4 items:', items_mod4.length, '(expected 44)');
console.log('Module 5 items:', items_mod5.length, '(expected 57)');
console.log('Module 6 items:', items_mod6.length, '(expected 59)');
console.log('Total Phase 2 items:', items_mod3.length + items_mod4.length + items_mod5.length + items_mod6.length, '(expected 222)');

const modules = [
  {
    num: 3,
    items: items_mod3,
    expected: 62,
    bankName: 'ENGLISH_FOR_IT_1_MODULE_3_BANK',
    fileName: 'englishForIT1_Module3.ts',
    title: 'English for IT 1 – Module 3: Software Engineering & Development Processes',
    sections: [
      '3.1 Section 1 – Grammar: Conjunctions at Sentence Start (3.1.2: 12 items)',
      '3.2 Section 2 – Grammar: Negative Inversion & Inverted Conditionals (3.2.2 & 3.2.3: 17 items)',
      '3.3 Section 3 – Listening: Lambda Functions, Code Reviews & Lexicon (3.3.2, 3.3.4, 3.3.5: 14 items)',
      '3.4 Section 4 – Grammar: Modals (should, ought to, must) (3.4.2 & 3.4.3: 13 items)',
      '3.5 Section 5 – Reading: Compilers vs. Interpreters (3.5.3: 6 items)'
    ]
  },
  {
    num: 4,
    items: items_mod4,
    expected: 44,
    bankName: 'ENGLISH_FOR_IT_1_MODULE_4_BANK',
    fileName: 'englishForIT1_Module4.ts',
    title: 'English for IT 1 – Module 4: Customer Support & Communication Strategies',
    sections: [
      '4.1 Section 1 – Grammar: Adverbs of Courtesy & Transition (4.1.2: 14 items)',
      '4.2 Section 2 – Listening: Customer Support Dialogues & Paraphrases (4.2.2 & 4.2.3: 10 items)',
      '4.3 Section 3 – Workplace Idioms & Phrasal Expressions (4.3.2 & 4.3.3: 14 items)',
      '4.4 Section 4 – Reading: Asking Customers Effective Questions (4.4.4: 6 items)'
    ]
  },
  {
    num: 5,
    items: items_mod5,
    expected: 57,
    bankName: 'ENGLISH_FOR_IT_1_MODULE_5_BANK',
    fileName: 'englishForIT1_Module5.ts',
    title: 'English for IT 1 – Module 5: IT Security Runbooks & Incident Response',
    sections: [
      '5.1 Section 1 – Grammar: Imperatives & Security Instructions (5.1.2: 14 items)',
      '5.2 Section 2 – Grammar: Adverbs of Possibility & Certainty (5.2.2: 14 items)',
      '5.3 Section 3 – Listening: Fraudulent Calls & Social Engineering (5.3.2 & 5.3.3: 10 items)',
      '5.4 Section 4 – Grammar: Probability & Deduction Adverbs (5.4.2: 13 items)',
      '5.5 Section 5 – Reading: Information Security Policy (Zero Trust) (5.5.3: 6 items)'
    ]
  },
  {
    num: 6,
    items: items_mod6,
    expected: 59,
    bankName: 'ENGLISH_FOR_IT_1_MODULE_6_BANK',
    fileName: 'englishForIT1_Module6.ts',
    title: 'English for IT 1 – Module 6: Advanced Security Architectures & Incident Investigation',
    sections: [
      '6.1 Section 1 – Grammar: Future Perfect & Future Perfect Continuous (6.1.2: 14 items)',
      '6.2 Section 2 – Listening: Security Officer Interview (Part 1 - CIA Triad) (6.2.2, 6.2.3, 6.2.4: 15 items)',
      '6.3 Section 3 – Grammar: "On the point of" vs "About to" (6.3.2: 12 items)',
      '6.4 Section 4 – Listening: Security Officer Interview (Part 2 - Encryption & VPN) (6.4.2 & 6.4.3: 12 items)',
      '6.5 Section 5 – Reading: The Pegasus Spyware Incident (6.5.3: 6 items)'
    ]
  }
];

const globalIdSet = new Set();

modules.forEach(mod => {
  if (mod.items.length !== mod.expected) {
    console.error(`ERROR: Module ${mod.num} expected ${mod.expected} items, got ${mod.items.length}`);
    process.exit(1);
  }

  const answerDist = { 0: 0, 1: 0, 2: 0, 3: 0 };

  mod.items.forEach((q, idx) => {
    if (globalIdSet.has(q.id)) {
      console.error(`ERROR: Duplicate ID across banks: ${q.id} in Module ${mod.num}`);
      process.exit(1);
    }
    globalIdSet.add(q.id);

    if (!q.options || q.options.length !== 4) {
      console.error(`ERROR in Mod ${mod.num} item ${q.id}: options length is not 4!`);
      process.exit(1);
    }

    if (!q.why_wrong || q.why_wrong.length !== 4) {
      console.error(`ERROR in Mod ${mod.num} item ${q.id}: why_wrong length is not 4!`);
      process.exit(1);
    }

    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) {
      console.error(`ERROR in Mod ${mod.num} item ${q.id}: answer index ${q.answer} invalid!`);
      process.exit(1);
    }

    if (q.pool !== 'practice') {
      console.error(`ERROR in Mod ${mod.num} item ${q.id}: pool must be 'practice'!`);
      process.exit(1);
    }

    answerDist[q.answer]++;
  });

  console.log(`Module ${mod.num} Answer distribution:`, answerDist);

  // Generate TypeScript code
  const tsContent = `import { Question } from '../../types';

/**
 * ${mod.title}
 * Reactivos oficiales de OpenEDG / Cisco Networking Academy.
 * Cobertura de secciones:
${mod.sections.map(s => ` *  - ${s}`).join('\n')}
 * 
 * Todos los reactivos están tipados estrictamente como 'pool: practice' para enriquecer
 * la práctica por módulos y temas sin descalibrar el simulacro oficial TestNow™.
 */
export const ${mod.bankName}: Question[] = ${JSON.stringify(mod.items, null, 2)};
`;

  const outPath = path.resolve(__dirname, '../src/data/banks', mod.fileName);
  fs.writeFileSync(outPath, tsContent, 'utf8');
  console.log(`Successfully generated: src/data/banks/${mod.fileName} (${mod.items.length} items)`);
});

console.log('\nAll 4 module banks generated successfully!');
