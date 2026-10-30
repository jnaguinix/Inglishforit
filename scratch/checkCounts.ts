import { MODULAR_BANKS_QUESTIONS, REGISTERED_MODULAR_BANKS } from '../src/data/banks/index';
import { StorageService } from '../src/services/storage';

console.log('=== QUESTION BANK AUDIT ===');
console.log('Total modular questions in app:', MODULAR_BANKS_QUESTIONS.length);

const allQuestions = StorageService.getAllQuestions();
console.log('Total StorageService questions (all pools):', allQuestions.length);

const examPool = allQuestions.filter(q => q.pool === 'exam');
const practicePool = allQuestions.filter(q => q.pool === 'practice');
console.log('Exam pool count (must remain exactly 40 for TestNow):', examPool.length);
console.log('Practice pool count:', practicePool.length);

const mod3 = MODULAR_BANKS_QUESTIONS.filter(q => q.id.startsWith('it1-mod3-'));
const mod4 = MODULAR_BANKS_QUESTIONS.filter(q => q.id.startsWith('it1-mod4-'));
const mod5 = MODULAR_BANKS_QUESTIONS.filter(q => q.id.startsWith('it1-mod5-'));
const mod6 = MODULAR_BANKS_QUESTIONS.filter(q => q.id.startsWith('it1-mod6-'));
const extra = MODULAR_BANKS_QUESTIONS.filter(q => q.id.startsWith('cisco-extra-'));

console.log('Module 3 items count:', mod3.length);
console.log('Module 4 items count:', mod4.length);
console.log('Module 5 items count:', mod5.length);
console.log('Module 6 items count:', mod6.length);
console.log('Extra Grammar items count:', extra.length);

console.log('\n=== REGISTERED MODULAR BANKS ===');
REGISTERED_MODULAR_BANKS.forEach(b => {
  console.log(`- [${b.id}] ${b.name}: ${b.count} items (Topics: ${b.topicsCovered.join(', ')})`);
});
