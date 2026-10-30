import React, { useState, useMemo, useEffect, Suspense, lazy } from 'react';
import {
  Play,
  BookOpen,
  Flame,
  Sparkles,
  Shuffle,
  CheckCircle2,
  Brain
} from 'lucide-react';
import { TopicId, MiniLesson, ExamSection } from '../types';
import { StorageService } from '../services/storage';
import { TOPICS } from '../config/taxonomy';

const MiniLessonModal = lazy(() =>
  import('../components/MiniLessonModal').then(m => ({ default: m.MiniLessonModal }))
);

interface TodayViewProps {
  onStartDiagnostic: () => void;
  onStartTopicPractice: (topicId: TopicId) => void;
  onStartInterleavedSprint: () => void;
  onOpenErrorBank: () => void;
  onOpenCheatSheet?: () => void;
}

export const TodayView: React.FC<TodayViewProps> = ({
  onStartDiagnostic,
  onStartTopicPractice,
  onStartInterleavedSprint,
  onOpenErrorBank,
  onOpenCheatSheet
}) => {
  const [selectedLesson, setSelectedLesson] = useState<MiniLesson | null>(null);

  // Memoized data snapshot for instant render performance
  const {
    diagnosticResult,
    allTopicStats,
    errorCards,
    dueErrorCards,
    attempts,
    sprintStats,
    streakInfo,
    readiness,
    todayTopics,
    masteredCount,
    attemptsCount,
    globalAccuracy,
    isCalibrated,
    sectionProgress
  } = useMemo(() => {
    const diag = StorageService.getDiagnosticResult();
    const topicStats = StorageService.getAllTopicStats();
    const errCards = StorageService.getErrorCards();
    const dueCards = StorageService.getDueErrorCards();
    const att = StorageService.getAttempts();
    const sprints = StorageService.getInterleavedSprintStats();
    const streak = StorageService.getStudyStreakInfo();
    const ready = StorageService.getExamReadinessReport();
    const focusTopics = StorageService.getTodayFocusTopics();

    const mastered = Object.values(topicStats).filter(s => s.isMastered).length;
    const attCount = att.length;
    const correctAtt = att.filter(a => a.isCorrect).length;
    const globAcc = attCount > 0 ? Math.round((correctAtt / attCount) * 100) : 0;
    const calibrated = attCount > 0 || !!diag;

    const sectionsConfig: { key: ExamSection; name: string; color: string }[] = [
      { key: 'UE', name: 'Use of English', color: '#1F5EFF' },
      { key: 'L', name: 'Listening', color: '#7C3AED' },
      { key: 'R', name: 'Reading', color: '#C89410' }
    ];

    const secProg = sectionsConfig.map(sec => {
      const secAttempts = att.filter(a => a.section === sec.key);
      const answered = secAttempts.length;
      const correct = secAttempts.filter(a => a.isCorrect).length;
      const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
      const hasData = answered > 0;
      return {
        ...sec,
        answered,
        accuracy,
        hasData
      };
    });

    return {
      diagnosticResult: diag,
      allTopicStats: topicStats,
      errorCards: errCards,
      dueErrorCards: dueCards,
      attempts: att,
      sprintStats: sprints,
      streakInfo: streak,
      readiness: ready,
      todayTopics: focusTopics,
      masteredCount: mastered,
      attemptsCount: attCount,
      globalAccuracy: globAcc,
      isCalibrated: calibrated,
      sectionProgress: secProg
    };
  }, []);

  // Warm up miniLessons chunk in background when browser is idle
  useEffect(() => {
    const timer = setTimeout(() => {
      import('../data/miniLessons').catch(() => {});
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Weekdays Monday..Sunday
  const weekDays = [
    { label: 'L', dayIndex: 1, weekIdx: 0 },
    { label: 'M', dayIndex: 2, weekIdx: 1 },
    { label: 'X', dayIndex: 3, weekIdx: 2 },
    { label: 'J', dayIndex: 4, weekIdx: 3 },
    { label: 'V', dayIndex: 5, weekIdx: 4 },
    { label: 'S', dayIndex: 6, weekIdx: 5 },
    { label: 'D', dayIndex: 0, weekIdx: 6 }
  ];

  const currentDayIndex = new Date().getDay();

  const handleOpenLesson = async (topicId: TopicId) => {
    try {
      const { MINI_LESSONS } = await import('../data/miniLessons');
      const lesson = MINI_LESSONS[topicId];
      if (lesson) {
        setSelectedLesson(lesson);
        return;
      }
    } catch {
      // Fallback to practice if dynamic import fails
    }
    onStartTopicPractice(topicId);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 pt-4 md:pt-10 pb-28 md:pb-16 space-y-7 md:space-y-12 md:max-w-[1360px] md:mx-auto">
      {/* Móvil: panel con la nota, la línea del 70 % y la siguiente acción */}
      <section className="rounded-[28px] md:rounded-[28px] bg-[#0E1830] text-white px-5 pt-6 pb-5 md:px-8 md:pt-6 md:pb-6 md:grid md:grid-cols-[1.1fr_1fr] md:gap-12 md:items-center shadow-[0_28px_48px_-28px_rgba(14,24,48,0.6)]">
        <div className="min-w-0">
        <p className="text-[15px] text-white/65">Preparación para el EIT-B2</p>
        <div className={`mt-1 ${isCalibrated ? 'flex items-end justify-between gap-4' : ''}`}>
          {isCalibrated ? (
            <span className="font-display text-[72px] md:text-[64px] leading-[0.92] font-semibold tracking-[-0.035em] tabular-nums">
              {readiness.overallScore}
              <span className="ml-1 text-[34px] md:text-[28px] font-medium text-white/50">%</span>
            </span>
          ) : (
            <span className="font-display text-[40px] md:text-[40px] leading-[1] font-semibold tracking-[-0.025em] text-white/90">
              Sin nota
            </span>
          )}
          <span
            className={`text-[13px] leading-snug text-white/65 ${
              isCalibrated ? 'pb-2 text-right max-w-[8.5rem]' : 'mt-2 block'
            }`}
          >
            {isCalibrated ? `${readiness.passProbability}% de probabilidad de aprobar` : 'La nota se calcula con el diagnóstico.'}
          </span>
        </div>

        <div className="relative mt-5 md:mt-4 h-[6px] rounded-full bg-white/15">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-white"
            style={{ width: `${isCalibrated ? Math.min(readiness.overallScore, 100) : 0}%` }}
          />
          <div className="absolute -top-2 -bottom-2 w-[2px] rounded-full bg-[#FFE07A]" style={{ left: '70%' }} />
        </div>
        <div className="relative mt-3 h-4 text-[12px] font-medium text-[#FFE07A]">
          <span className="absolute -translate-x-1/2 whitespace-nowrap" style={{ left: '70%' }}>Corte 70%</span>
        </div>
        </div>

        <div className="min-w-0">

        <dl className="mt-5 md:mt-0 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-4 md:border-t-0 md:pt-0">
          {[
            { label: 'Respuestas', value: attemptsCount },
            { label: 'Dominados', value: `${masteredCount}/37` },
            { label: 'Precisión', value: attemptsCount > 0 ? `${globalAccuracy}%` : '—' }
          ].map((stat, i) => (
            <div key={stat.label} className={i === 0 ? 'pr-3' : 'px-3'}>
              <dd className="font-display text-[22px] md:text-[24px] font-semibold leading-none tabular-nums">{stat.value}</dd>
              <dt className="mt-1.5 text-[12px] text-white/55">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <button
          onClick={diagnosticResult ? () => onStartTopicPractice(todayTopics[0]) : onStartDiagnostic}
          className="mt-5 md:mt-5 w-full min-h-[54px] md:min-h-[56px] rounded-[18px] bg-[#FFE07A] pl-5 md:pl-6 pr-2.5 text-left text-[#0E1830] flex items-center justify-between gap-3 active:scale-[0.99] transition-transform focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
        >
          <span className="min-w-0">
            <span className="block truncate text-[16px] font-semibold leading-tight">
              {diagnosticResult ? `Continuar: ${TOPICS[todayTopics[0]]?.titleEs}` : 'Empezar el diagnóstico'}
            </span>
            <span className="block text-[13px] leading-tight text-[#0E1830]/65 mt-0.5">
              {diagnosticResult ? 'Sesión de hoy · 20-30 min' : '18 ítems · unos 20 minutos'}
            </span>
          </span>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0E1830] text-[#FFE07A]">
            <Play className="h-4 w-4 fill-current" />
          </span>
        </button>
        </div>
      </section>

      {/* Temas prioritarios: tres tarjetas en escritorio, filas en móvil */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display text-[26px] md:text-[32px] font-semibold text-[#0E1830] tracking-[-0.02em]">
            Temas prioritarios de hoy
          </h2>
          <span className="hidden md:inline text-[14px] text-[#56607A]">Elegidos según tu perfil</span>
        </div>

        <ol className="divide-y divide-[#0E1830]/10 border-y border-[#0E1830]/10 md:divide-y-0 md:border-y-0 md:grid md:grid-cols-1 xl:grid-cols-3 md:gap-6">
          {todayTopics.map((topicId) => {
            const meta = TOPICS[topicId];
            const stats = allTopicStats[topicId];
            const attemptsDone = stats?.attempts || 0;
            const accuracy = stats?.accuracy || 0;
            const hasAttempts = attemptsDone > 0;
            const progress = Math.min(attemptsDone, 12) / 12;
            const scoreColor = !hasAttempts
              ? 'text-[#8D94A8]'
              : accuracy < 70
              ? 'text-[#B3261E]'
              : accuracy >= 85
              ? 'text-[#17714F]'
              : 'text-[#0E1830]';

            return (
              <li
                key={topicId}
                className="py-5 md:p-6 md:rounded-[24px] md:border md:border-[#0E1830]/12 md:bg-white md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-x-6 md:gap-y-4 xl:grid-cols-1"
              >
                <div className="min-w-0 md:col-start-1 md:row-start-1">
                  <p className="font-mono-code text-[13px] text-[#1F5EFF]">
                    {topicId}
                    <span className="font-sans text-[#8D94A8]"> · </span>
                    {hasAttempts ? (
                      <span className={`font-sans font-semibold ${scoreColor}`}>{accuracy}%</span>
                    ) : (
                      <span className="font-sans text-[#8D94A8]">Sin empezar</span>
                    )}
                  </p>
                  <h3 className="mt-0.5 font-display text-[20px] md:text-[22px] font-semibold leading-snug tracking-[-0.01em] text-[#0E1830]">
                    {meta?.titleEs}
                  </h3>
                </div>

                <div className="mt-3.5 md:mt-0 flex items-center gap-3 md:col-span-2 md:row-start-2 xl:col-span-1">
                  <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-[#0E1830]/10">
                    <div className="h-full rounded-full bg-[#1F5EFF]" style={{ width: `${progress * 100}%` }} />
                  </div>
                  <span className="text-[13px] tabular-nums text-[#56607A]">{attemptsDone}/12</span>
                </div>

                <div className="mt-4 md:mt-0 grid grid-cols-[1fr_1.4fr] gap-2.5 md:col-start-2 md:row-start-1 md:w-[300px] xl:col-start-1 xl:row-start-3 xl:w-auto">
                  <button
                    onClick={() => handleOpenLesson(topicId)}
                    className="min-h-[46px] rounded-[14px] border border-[#0E1830]/15 text-[15px] font-semibold text-[#0E1830] flex items-center justify-center gap-2 hover:bg-[#0E1830]/5 active:bg-[#0E1830]/5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="h-4 w-4" />
                    Lección
                  </button>
                  <button
                    onClick={() => onStartTopicPractice(topicId)}
                    className="min-h-[46px] rounded-[14px] border border-[#0E1830] text-[15px] font-semibold text-[#0E1830] flex items-center justify-center gap-2 hover:bg-[#0E1830] hover:text-white active:scale-[0.99] transition-colors cursor-pointer"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    Practicar
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Otras formas de practicar: cuatro accesos del mismo peso */}
      <section className="space-y-5">
        <h2 className="font-display text-[26px] md:text-[32px] font-semibold text-[#0E1830] tracking-[-0.02em]">
          Otras formas de practicar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-5">
          {[
            {
              key: 'sprint',
              icon: <Shuffle className="h-5 w-5" />,
              title: 'Sprint intercalado',
              desc: '10 preguntas mezcladas, unos 5 minutos. Entrena a distinguir pares confusos.',
              tag: sprintStats.completedToday ? 'Completado hoy' : '10 mixtas · ~5 min',
              cta: sprintStats.completedToday ? 'Hacer otro sprint' : 'Empezar sprint',
              onClick: onStartInterleavedSprint,
              disabled: false
            },
            {
              key: 'errors',
              icon: <Flame className="h-5 w-5" />,
              title: 'Banco de errores',
              desc: 'Repasa las preguntas que fallaste hasta que dejes de fallarlas.',
              tag: errorCards.length > 0 ? `${dueErrorCards.length} vencidas · ${errorCards.length} total` : 'Al día',
              cta: errorCards.length > 0 ? `Repasar ${errorCards.length}` : 'Sin errores aún',
              onClick: onOpenErrorBank,
              disabled: errorCards.length === 0
            },
            {
              key: 'patterns',
              icon: <Brain className="h-5 w-5" />,
              title: 'Gimnasio de patrones',
              desc: 'Atajos de 3 segundos para descartar opciones sin dudar.',
              tag: '16 atajos',
              cta: 'Abrir gimnasio',
              onClick: onOpenCheatSheet ?? (() => {}),
              disabled: false
            },
            {
              key: 'idioms',
              icon: <Sparkles className="h-5 w-5" />,
              title: 'Idioms y collocations',
              desc: 'Las expresiones de TI que el examen sí pregunta.',
              tag: '18 expresiones',
              cta: 'Entrenar idioms',
              onClick: () => onStartTopicPractice('G26'),
              disabled: false
            }
          ].map(tile => (
            <button
              key={tile.key}
              onClick={tile.onClick}
              disabled={tile.disabled}
              className="group text-left rounded-[24px] border border-[#0E1830]/12 bg-white p-6 flex flex-col gap-3 transition-colors hover:border-[#0E1830] disabled:opacity-60 disabled:hover:border-[#0E1830]/12 disabled:cursor-not-allowed cursor-pointer"
            >
              <span className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0E1830]/6 text-[#0E1830]">{tile.icon}</span>
                <span className="text-[12px] font-medium text-[#56607A]">{tile.tag}</span>
              </span>
              <span className="font-display text-[20px] font-semibold leading-snug tracking-[-0.01em] text-[#0E1830]">{tile.title}</span>
              <span className="text-[14px] leading-relaxed text-[#56607A]">{tile.desc}</span>
              <span className="mt-auto pt-2 text-[15px] font-semibold text-[#0E1830]">{tile.cta} →</span>
            </button>
          ))}
        </div>
      </section>

      {/* Progreso por sección y racha, lado a lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-10 border-t border-[#0E1830]/10 pt-8">
        <section>
          <div className="flex items-baseline justify-between mb-5">
            <h3 className="font-display text-[20px] font-semibold text-[#0E1830]">Progreso por sección</h3>
            <span className="text-[13px] text-[#56607A]">Meta ≥70% en cada una</span>
          </div>
          <div className="space-y-5">
            {sectionProgress.map((sec) => (
              <div key={sec.key} className="space-y-2">
                <div className="flex items-center justify-between text-[14px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: sec.color }} />
                    <span className="font-semibold text-[#0E1830]">{sec.name}</span>
                  </div>
                  <span className="font-mono-code text-[13px] text-[#56607A]">
                    {sec.hasData ? `${sec.accuracy}% · ${sec.answered} resp.` : 'Sin datos'}
                  </span>
                </div>
                <div className="relative w-full h-2 bg-[#0E1830]/8 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 bottom-0 w-[2px] bg-[#0E1830] z-10"
                    style={{ left: '70%' }}
                    title="Umbral mínimo de aprobación: 70%"
                  />
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${sec.hasData ? Math.min(sec.accuracy, 100) : 0}%`, backgroundColor: sec.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-baseline justify-between mb-5">
            <h3 className="font-display text-[20px] font-semibold text-[#0E1830]">Racha</h3>
            <span className="text-[13px] font-medium text-[#56607A]">
              {streakInfo.streakDays} {streakInfo.streakDays === 1 ? 'día seguido' : 'días seguidos'}
            </span>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((item) => {
              const isCurrent = item.dayIndex === currentDayIndex;
              const wasStudied = streakInfo.activeWeekdays[item.weekIdx];

              let boxClass = 'bg-transparent text-[#56607A] border-[#0E1830]/12 font-medium';
              if (wasStudied && isCurrent) {
                boxClass = 'bg-emerald-600 text-white border-emerald-600 font-bold';
              } else if (wasStudied) {
                boxClass = 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold';
              } else if (isCurrent) {
                boxClass = 'bg-[#0E1830] text-white border-[#0E1830] font-bold';
              }

              return (
                <div
                  key={item.label}
                  className={`h-12 rounded-[12px] flex flex-col items-center justify-center border ${boxClass}`}
                  title={wasStudied ? 'Día con práctica registrada' : isCurrent ? 'Hoy' : 'Sin actividad'}
                >
                  <span className="text-[13px]">{item.label}</span>
                  {wasStudied && <CheckCircle2 className="w-3 h-3 mt-0.5" />}
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-[14px] text-[#56607A]">
            {streakInfo.studiedToday
              ? `Hoy ya respondiste ${streakInfo.todayCount} ${streakInfo.todayCount === 1 ? 'pregunta' : 'preguntas'}. Tu racha está asegurada.`
              : 'Completa una práctica hoy para sumar un día a tu racha.'}
          </p>
        </section>
      </div>


      {/* Modal de Mini-Lección cargado bajo demanda */}
      {selectedLesson && (
        <Suspense fallback={null}>
          <MiniLessonModal
            lesson={selectedLesson}
            onStartPractice={() => {
              const tId = selectedLesson.topicId;
              setSelectedLesson(null);
              onStartTopicPractice(tId);
            }}
            onClose={() => setSelectedLesson(null)}
          />
        </Suspense>
      )}
    </div>
  );
};

