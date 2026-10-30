import fs from 'fs';
import path from 'path';
import { SEED_QUESTIONS } from '../src/data/seedQuestions';
import { PRACTICE_QUESTIONS } from '../src/data/practiceQuestions';
import { MODULAR_BANKS_QUESTIONS, REGISTERED_MODULAR_BANKS } from '../src/data/banks';
import { TOPICS, OBJECTIVES } from '../src/config/taxonomy';
import { Question } from '../src/types';
import { getPedagogicalEnhancement } from '../src/utils/pedagogicalEnhancer';
import { B2_PATTERNS } from '../src/data/b2Patterns';

function formatQuestionMarkdown(q: Question, index: number, total: number): string {
  const letters = ['A', 'B', 'C', 'D'];
  const correctLetter = letters[q.answer];
  const topicMeta = TOPICS[q.topic];
  const pedagogy = getPedagogicalEnhancement(q);

  const lines: string[] = [];
  lines.push(`### [${q.id}] ${q.section} #${index + 1} | Tema: ${q.topic} - ${topicMeta?.titleEs || ''} | Objetivo: ${q.objective} | Dificultad: ${q.difficulty}/3`);
  lines.push('');
  lines.push('**Enunciado (Stem):**');
  lines.push(`> ${q.stem}`);
  lines.push('');

  lines.push('**💡 En Palabras Simples (Sin fórmulas abstractas):**');
  lines.push(`> ${pedagogy.humanRule}`);
  lines.push('');

  lines.push('**⚡ Detonador Visual de 3 Segundos (Gatillo para el Examen):**');
  lines.push(`> ${pedagogy.triggerAnchor}`);
  lines.push('');

  lines.push('**🚨 Radar Anti-Spanglish (Trampa del Español):**');
  lines.push(`> ${pedagogy.spanglishTrap}`);
  lines.push('');

  lines.push(`**💼 En tu Día a Día Tech (${pedagogy.workplaceUsage.scenario}):**`);
  lines.push(`> - **En inglés:** \`${pedagogy.workplaceUsage.en}\``);
  lines.push(`> - **En español:** *${pedagogy.workplaceUsage.es}*`);
  lines.push('');

  if (q.paraphrase_map) {
    lines.push('**Mapa de Paráfrasis de Examen:**');
    lines.push(`> 🔄 \`${q.paraphrase_map}\``);
    lines.push('');
  }

  lines.push('**Opciones:**');
  q.options.forEach((opt, idx) => {
    const isCorrect = idx === q.answer;
    lines.push(`- **${letters[idx]})** ${opt}${isCorrect ? ' ✅ *(Respuesta Correcta)*' : ''}`);
  });
  lines.push('');
  lines.push(`**Clave Oficial:** **Opción ${correctLetter}** (\`${q.options[q.answer]}\`)`);
  lines.push('');
  lines.push('**Por qué es correcta:**');
  lines.push(q.why_correct);
  lines.push('');
  lines.push('**Desglose Forense de las 4 Opciones:**');
  pedagogy.forensicDistractors.forEach((item) => {
    lines.push(`- **[${item.letter}] \`${item.option}\`:** ${item.reason}`);
  });
  lines.push('');
  lines.push('**Consejo para el examen B2:**');
  lines.push(`> 💡 ${q.tip_es}`);
  lines.push('');

  if (q.ref) {
    lines.push(`**Referencia Multimedia:** \`${q.ref}\``);
    lines.push('');
  }
  if (q.evidence_quote) {
    lines.push(`**Cita Textual de Evidencia (Reading):** *"${q.evidence_quote}"*`);
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  return lines.join('\n');
}

async function main() {
  const dossierPath = path.resolve(process.cwd(), 'CURSO_COMPLETO_CERTIT_B2.md');
  const existingContent = fs.readFileSync(dossierPath, 'utf8');

  // Find where section 7 starts
  const marker = '## 7. BANCO DE PREGUNTAS';
  const markerIndex = existingContent.indexOf(marker);

  let prefix = existingContent;
  if (markerIndex !== -1) {
    prefix = existingContent.substring(0, markerIndex).trimEnd();
  }

  const output: string[] = [];
  output.push(prefix);
  output.push('');
  output.push('---');
  output.push('');
  output.push('## 7. BANCO EXHAUSTIVO DE PREGUNTAS Y EXPLICACIONES PEDAGÓGICAS (248 REACTIVOS ACTIVOS)');
  output.push('');
  output.push('> **Aviso Pedagógico y Metodológico:**');
  output.push('> Este banco reúne la totalidad de los reactivos desarrollados para la certificación **OpenEDG English for IT (B2 / GSE 59–75, EIT-B2-01)**.');
  output.push('> Ha sido totalmente optimizado con las **5 Mejoras de Retención Cognitiva**:');
  output.push('> 1. **Cero Fórmulas Abstractas**: Sustitución de sintaxis algebraica por equivalencias cotidianas del mundo IT.');
  output.push('> 2. **Detonador de 3 Segundos**: La palabra ancla que te dice qué opción marcar de inmediato.');
  output.push('> 3. **Radar Anti-Spanglish**: Explicación de por qué tu cerebro hispanohablante quería marcar la opción incorrecta.');
  output.push('> 4. **Gemelo en tu Día a Día Tech**: Ejemplo de cómo usar la misma estructura en Slack, Jira o post-mortems.');
  output.push('> 5. **Descarte Forense**: Justificación precisa de cada uno de los 4 incisos.');
  output.push('');

  output.push('### 7.0 Los 15 Patrones B2 Críticos (Gimnasio Rápido sin Fórmulas)');
  output.push('');
  output.push('| # | Patrón / Tema | Nombre Humano (Analogía) | Detonador en 3 Segundos | Trampa del Español (Spanglish) |');
  output.push('| :--- | :--- | :--- | :--- | :--- |');
  B2_PATTERNS.forEach((pat, idx) => {
    output.push(`| **${idx + 1}** | **${pat.topicId}**: ${pat.title} | **${pat.humanName}** | ${pat.threeSecondTrigger.replace(/\|/g, '/')} | ${pat.spanglishTrap.replace(/\|/g, '/')} |`);
  });
  output.push('');
  output.push('---');
  output.push('');

  output.push('### 7.0.1 Guía y Prompt para Profundizar con otra IA (ChatGPT, Claude, DeepSeek)');
  output.push('');
  output.push('Para copiar cualquier reactivo de este dossier y pedirle a otra IA que amplíe los conceptos o genere simulaciones adicionales, utiliza esta plantilla:');
  output.push('');
  output.push('```text');
  output.push('Actúa como examinador senior de certificación OpenEDG English for IT B2 (GSE 59-75) y lingüista experto.');
  output.push('Analiza el siguiente reactivo de certificación IT en profundidad:');
  output.push('');
  output.push('[PEGAR AQUÍ EL BLOQUE DE LA PREGUNTA]');
  output.push('');
  output.push('Por favor realiza:');
  output.push('1. Explicación cotidiana sin fórmulas complejas de por qué la respuesta correcta es indiscutible.');
  output.push('2. 3 ejemplos adicionales en entornos de DevOps, SRE, incidentes o ciberseguridad.');
  output.push('3. Diagnóstico de interferencia del español: ¿Por qué un hispanohablante suele caer en los distractores específicos de esta pregunta?');
  output.push('4. 2 nuevas preguntas de nivel B2 con el mismo patrón para entrenar de inmediato.');
  output.push('```');
  output.push('');
  output.push('---');
  output.push('');

  // 7.1 Banco Oficial (56 items)
  output.push('### 7.1 Banco Oficial de Examen y Simulacro (56 Ítems Blindados)');
  output.push('');
  output.push('*Reactivos que componen el pool oficial del Simulacro OpenEDG TestNow™ y Diagnóstico Inicial.*');
  output.push('');
  SEED_QUESTIONS.forEach((q, idx) => {
    output.push(formatQuestionMarkdown(q, idx, SEED_QUESTIONS.length));
  });

  // 7.2 Banco Modular de Práctica Dedicada (128 items)
  output.push('### 7.2 Banco Modular de Práctica Dedicada (128 Ítems Baterías Temáticas)');
  output.push('');
  output.push('*Reactivos de entrenamiento sistemático organizados en 16 baterías temáticas de 8 reactivos cada una (G01–G28).*');
  output.push('');
  PRACTICE_QUESTIONS.forEach((q, idx) => {
    output.push(formatQuestionMarkdown(q, idx, PRACTICE_QUESTIONS.length));
  });

  // 7.3 Bancos Modulares de Especialidad (64 items)
  output.push('### 7.3 Bancos Modulares de Especialidad TI (64 Ítems Avanzados)');
  output.push('');
  output.push(`*Reactivos especializados en los dominios técnicos (${REGISTERED_MODULAR_BANKS.map(b => b.name).join(', ')}).*`);
  output.push('');
  MODULAR_BANKS_QUESTIONS.forEach((q, idx) => {
    output.push(formatQuestionMarkdown(q, idx, MODULAR_BANKS_QUESTIONS.length));
  });

  fs.writeFileSync(dossierPath, output.join('\n'), 'utf8');
  console.log(`Dossier actualizado exitosamente: ${dossierPath}`);
  console.log(`Total de reactivos procesados: ${SEED_QUESTIONS.length + PRACTICE_QUESTIONS.length + MODULAR_BANKS_QUESTIONS.length}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
