import React from 'react';
import { ChevronRight } from 'lucide-react';
import { StrategyLesson } from '../types';
import { FORMAT_LABELS } from './StrategyLessonModal';

interface StrategyLessonCardsProps {
  lessons: StrategyLesson[];
  onOpen: (lesson: StrategyLesson) => void;
}

// Grid of strategy-lesson entry cards shown at the top of the Listening and Reading labs
export const StrategyLessonCards: React.FC<StrategyLessonCardsProps> = ({ lessons, onOpen }) => {
  if (lessons.length === 0) return null;
  const sectionName = lessons[0].section === 'L' ? 'Listening' : 'Reading';

  return (
    <section>
      <h3 className="font-display leading-tight text-[22px] font-semibold tracking-[-0.015em] text-[#0E1830]">Lecciones de estrategia</h3>
      <p className="hidden md:block text-sm text-slate-600 mt-0.5">
        Cómo responder cada tipo de pregunta de {sectionName}, con práctica en el formato oficial.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-3 max-md:gap-0 max-md:mt-3 border-b border-[#0E1830]/10">
        {lessons.map(lesson => {
          const formats = Array.from(new Set(lesson.check.map(c => FORMAT_LABELS[c.format])));
          return (
            <button
              key={lesson.objective}
              type="button"
              onClick={() => onOpen(lesson)}
              className="text-left border hover:border-blue-300 transition-colors flex flex-col justify-between gap-3 cursor-pointer bg-transparent border-x-0 border-b-0 border-[#0E1830]/10 rounded-none shadow-none px-0 py-4 max-md:gap-1.5 max-md:active:bg-[#0E1830]/5"
            >
              <div>
                <span className="text-[13px] text-slate-600">{sectionName} · {lesson.objective}</span>
                <span className="block leading-snug mt-0.5 text-[17px] font-semibold text-[#0E1830]">{lesson.titleEs}</span>
                <span className="block text-[13px] text-slate-600 mt-1.5">{formats.join(' · ')}</span>
              </div>
              <span className="flex items-center justify-between font-semibold text-blue-600 text-[15px]">
                Ver lección
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
