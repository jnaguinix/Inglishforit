import React, { useState } from 'react';
import { StrategyLesson, StrategyCheckItem, OfficialItemFormat } from '../types';
import { AudioPlayerCard } from './AudioPlayerCard';
import { H2, CARD, LessonShell, ShortcutCard } from './lessonUi';

interface StrategyLessonModalProps {
  lesson: StrategyLesson;
  onStartPractice: () => void;
  onClose: () => void;
}

export const FORMAT_LABELS: Record<OfficialItemFormat, string> = {
  complete: 'Completar la frase',
  select: 'Elegir la respuesta',
  whose_opinion: '¿De quién es la opinión?',
  agrees: '¿Lo afirma el texto o ninguno?',
  paragraph: '¿Qué párrafo lo dice?'
};

export const StrategyLessonModal: React.FC<StrategyLessonModalProps> = ({ lesson, onStartPractice, onClose }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === lesson.check.length;
  const correctCount = lesson.check.filter((item, i) => answers[i] === item.answer).length;
  const sectionName = lesson.section === 'L' ? 'Listening' : 'Reading';

  return (
    <LessonShell
      label={`${sectionName} B2 · ${lesson.objective}`}
      title={lesson.titleEs}
      ctaLabel={`Practicar ${lesson.objective}`}
      onCta={onStartPractice}
      onClose={onClose}
    >
      <ShortcutCard rows={lesson.shortcut} />

      <section>
        <h2 className={H2}>Qué evalúa</h2>
        <div className={CARD}>
          <p>{lesson.whatItTestsEs}</p>
          <p className="text-sm text-slate-600 mt-2.5 pt-2.5 border-t border-slate-200">
            Objetivo oficial: <span className="font-semibold text-slate-900">{lesson.officialSkill}</span>
          </p>
        </div>
      </section>

      <section>
        <h2 className={H2}>Paso a paso</h2>
        <div className={`${CARD} grid gap-2.5`}>
          {lesson.steps.map((step, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <b className="flex-[0_0_30px] h-[30px] rounded-full bg-blue-600 text-white grid place-items-center text-sm">
                {idx + 1}
              </b>
              <div className="min-w-0">
                <strong className="block">{step.title}</strong>
                <span className="block text-[15px] text-slate-600">{step.body}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={H2}>{lesson.section === 'L' ? 'Señales que debes oír' : 'Señales que debes leer'}</h2>
        <div className={`${CARD} space-y-2`}>
          {lesson.signals.map((sig, i) => (
            <div key={i} className="grid gap-1.5">
              <div className="bg-blue-50 rounded-lg px-3 py-2 font-semibold">{sig.en}</div>
              <div className="border border-dashed border-slate-200 rounded-lg px-3 py-2 text-[15px] text-slate-600">{sig.es}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={H2}>Trampas en las opciones</h2>
        <div className="space-y-2.5">
          {lesson.traps.map((t, i) => (
            <div key={i} className={CARD}>
              <div className="bg-rose-50 text-rose-600 rounded-lg px-2.5 py-1.5 mb-2 font-semibold">✗ {t.trap}</div>
              <p className="text-[15px] text-slate-600">{t.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className={H2}>Practica con el formato oficial</h2>
        <p className="text-[15px] text-slate-600 mb-3">
          {lesson.section === 'L'
            ? 'Puedes escuchar el audio 2 veces, como en el examen. La transcripción se desbloquea al responder las tres preguntas.'
            : 'Aplica los pasos: lee primero la pregunta y después busca la evidencia en el texto.'}
        </p>

        {lesson.audio && <AudioPlayerCard track={lesson.audio} isAnswered={allAnswered} maxRepeats={2} />}

        {lesson.reading && (
          <div className={`${CARD} mb-4`}>
            <h3 className="text-base font-bold mb-2">{lesson.reading.title}</h3>
            <div className="space-y-3">
              {lesson.reading.blocks.map((block, i) => (
                <div key={i}>
                  {(block.label || block.heading) && (
                    <p className="text-sm font-semibold text-blue-600 mb-0.5">
                      {[block.label, block.heading].filter(Boolean).join(' · ')}
                    </p>
                  )}
                  <p className="text-[15px] leading-relaxed whitespace-pre-line">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-2.5">
          {lesson.check.map((item, i) => (
            <CheckItem
              key={i}
              index={i}
              item={item}
              selected={answers[i]}
              onSelect={(opt) => setAnswers(prev => (i in prev ? prev : { ...prev, [i]: opt }))}
            />
          ))}
        </div>

        {allAnswered && (
          <div className="mt-3 bg-slate-900 text-[#F6F6F3] rounded-xl px-4 py-3 flex items-center justify-between gap-3">
            <span className="font-semibold">Resultado: {correctCount} / {lesson.check.length}</span>
            <button
              type="button"
              onClick={() => setAnswers({})}
              className="text-sm font-semibold text-amber-200 hover:text-white min-h-[40px] px-2 cursor-pointer"
            >
              Reintentar
            </button>
          </div>
        )}
      </section>
    </LessonShell>
  );
};

interface CheckItemProps {
  index: number;
  item: StrategyCheckItem;
  selected: number | undefined;
  onSelect: (option: number) => void;
}

const CheckItem: React.FC<CheckItemProps> = ({ index, item, selected, onSelect }) => {
  const isAnswered = selected !== undefined;
  const isCorrect = selected === item.answer;

  return (
    <div className={CARD}>
      <small className="text-[13px] text-slate-600 block mb-1">
        {index + 1} · {FORMAT_LABELS[item.format]}
      </small>
      <p className="text-sm text-slate-600 italic mb-1">{item.instruction}</p>
      <p className="font-semibold mb-2.5">{item.stem}</p>

      <div className="grid gap-2" role="radiogroup" aria-label={`Pregunta ${index + 1}`}>
        {item.options.map((opt, o) => {
          const isTheAnswer = o === item.answer;
          const isPicked = o === selected;
          let tone = 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50';
          if (isAnswered) {
            if (isTheAnswer) tone = 'bg-emerald-50 border-emerald-500 text-emerald-700';
            else if (isPicked) tone = 'bg-rose-50 border-rose-500 text-rose-600';
            else tone = 'bg-white border-slate-200 text-slate-500';
          }
          return (
            <button
              key={o}
              type="button"
              role="radio"
              aria-checked={isPicked}
              disabled={isAnswered}
              onClick={() => onSelect(o)}
              className={`text-left min-h-[48px] px-3.5 py-2.5 rounded-lg border-[1.5px] text-[15px] font-medium transition-colors ${tone} ${isAnswered ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {isAnswered && isTheAnswer && '✓ '}
              {isAnswered && isPicked && !isTheAnswer && '✗ '}
              {opt}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="mt-3 pt-3 border-t border-slate-200 space-y-2">
          <p className={`font-semibold ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
            {isCorrect ? 'Correcto.' : 'No es correcta.'}
          </p>
          <p className="text-[15px]">{item.whyEs}</p>
          <p className="text-[15px] text-slate-600">
            Evidencia: <mark>{item.evidence}</mark>
          </p>
        </div>
      )}
    </div>
  );
};
