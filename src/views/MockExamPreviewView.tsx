import React, { useState, useEffect } from 'react';
import {
  Award,
  Clock,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Settings2,
  BookOpen,
  Headphones,
  Check,
  RotateCcw,
  Flag,
  Layers,
  AlertCircle,
  Timer,
  Sparkles
} from 'lucide-react';
import { ExamConfig, ExamSection, Question } from '../types';
import { StorageService } from '../services/storage';
import { QuestionCard } from '../components/QuestionCard';
import { AudioPlayerCard } from '../components/AudioPlayerCard';
import { ReadingViewer } from '../components/ReadingViewer';
import { LISTENING_TRACKS } from '../data/listeningTracks';
import { READING_TEXTS } from '../data/readingTexts';
import { shuffleArray, shuffleQuestionOptions } from '../utils/random';

const ACTIVE_MOCK_STORAGE_KEY = 'certit_active_mock_exam_v1';

export const MockExamPreviewView: React.FC = () => {
  const [config, setConfig] = useState<ExamConfig>(StorageService.getConfig());
  const [isExamRunning, setIsExamRunning] = useState(false);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(115 * 60);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [showConfigDrawer, setShowConfigDrawer] = useState(false);
  const [showPostExamReview, setShowPostExamReview] = useState(false);
  const [isInReviewScreen, setIsInReviewScreen] = useState(false);
  const [showSubmitConfirmModal, setShowSubmitConfirmModal] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'flagged' | 'unanswered'>('all');
  const [initialDurationSeconds, setInitialDurationSeconds] = useState(115 * 60);

  // Modes: 'testnow' (36 items - official OpenEDG format), 'intensive' (60 items), 'quick' (18 items), 'custom'
  const [examMode, setExamMode] = useState<'testnow' | 'intensive' | 'quick' | 'custom'>('testnow');

  // Restore active mock exam from sessionStorage if interrupted
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(ACTIVE_MOCK_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.isExamRunning && Array.isArray(parsed.examQuestions) && parsed.examQuestions.length > 0) {
          setExamQuestions(parsed.examQuestions);
          setCurrentIndex(parsed.currentIndex || 0);
          setUserAnswers(parsed.userAnswers || {});
          setFlaggedQuestions(parsed.flaggedQuestions || {});
          setTimeRemainingSeconds(parsed.timeRemainingSeconds || 115 * 60);
          setExamMode(parsed.examMode || 'testnow');
          setIsExamRunning(true);
          setIsFinished(false);
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Persist active mock exam state to sessionStorage
  useEffect(() => {
    try {
      if (isExamRunning && !isFinished && examQuestions.length > 0) {
        sessionStorage.setItem(
          ACTIVE_MOCK_STORAGE_KEY,
          JSON.stringify({
            isExamRunning,
            timeRemainingSeconds,
            examQuestions,
            currentIndex,
            userAnswers,
            flaggedQuestions,
            examMode
          })
        );
      } else {
        sessionStorage.removeItem(ACTIVE_MOCK_STORAGE_KEY);
      }
    } catch {
      // Ignore storage errors
    }
  }, [isExamRunning, isFinished, timeRemainingSeconds, examQuestions, currentIndex, userAnswers, flaggedQuestions, examMode]);

  const getModeSettings = (mode: 'testnow' | 'intensive' | 'quick' | 'custom') => {
    if (mode === 'custom') {
      return {
        ue: Math.max(1, config.sections.UE.count),
        l: Math.max(1, config.sections.L.count),
        r: Math.max(1, config.sections.R.count),
        mins: config.totalMinutes || 115
      };
    }
    return {
      testnow: { ue: 12, l: 12, r: 12, mins: 115 },
      intensive: { ue: 20, l: 20, r: 20, mins: 115 },
      quick: { ue: 6, l: 6, r: 6, mins: 35 }
    }[mode];
  };

  const startExam = () => {
    // Evaluation Exam items only (strictly separated from practice drill items)
    const all = StorageService.getMockExamQuestions();

    // Partition by section strictly in order: UE -> L -> R
    const ueList = all.filter(q => q.section === 'UE');
    const lList = all.filter(q => q.section === 'L');
    const rList = all.filter(q => q.section === 'R');

    const modeSettings = getModeSettings(examMode);

    const buildSection = (list: Question[], targetCount: number): Question[] => {
      if (list.length === 0) return [];
      const shuffled = shuffleArray(list);
      const result: Question[] = [];
      for (let i = 0; i < targetCount; i++) {
        const baseQ = shuffled[i % shuffled.length];
        const qWithId = i >= shuffled.length ? { ...baseQ, id: `${baseQ.id}-rpt-${i}` } : baseQ;
        result.push(shuffleQuestionOptions(qWithId));
      }
      return result;
    };

    // Build assembled exam in strict order: UE -> L -> R
    const finalSet: Question[] = [
      ...buildSection(ueList, modeSettings.ue),
      ...buildSection(lList, modeSettings.l),
      ...buildSection(rList, modeSettings.r)
    ];

    setExamQuestions(finalSet);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setShowPostExamReview(false);
    setIsInReviewScreen(false);
    setShowSubmitConfirmModal(false);
    setReviewFilter('all');
    setInitialDurationSeconds(modeSettings.mins * 60);
    setTimeRemainingSeconds(modeSettings.mins * 60);
    setIsExamRunning(true);
    setIsFinished(false);
  };

  // Timer countdown
  useEffect(() => {
    if (!isExamRunning || isFinished) return;

    const timer = setInterval(() => {
      setTimeRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamRunning, isFinished]);

  const formatTimer = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (h > 0) {
      return `${h}h ${m < 10 ? '0' : ''}${m}m ${s < 10 ? '0' : ''}${s}s`;
    }
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  const handleSelectOption = (selectedIdx: number, isCorrect: boolean) => {
    const currentQ = examQuestions[currentIndex];
    const alreadyRecorded = userAnswers[currentQ.id] !== undefined;
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: selectedIdx
    }));

    if (!alreadyRecorded) {
      StorageService.recordAttempt({
        questionId: currentQ.id,
        topic: currentQ.topic,
        section: currentQ.section,
        objective: currentQ.objective,
        userSelection: selectedIdx,
        isCorrect,
        mode: 'mock'
      });
    }
  };

  const toggleFlagCurrentQuestion = () => {
    const currentQ = examQuestions[currentIndex];
    if (!currentQ) return;
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id]
    }));
  };

  const handleNext = () => {
    if (currentIndex < examQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Reached the end of questions: route to official TestNow Review Screen
      setIsInReviewScreen(true);
    }
  };

  const finishExam = () => {
    setIsExamRunning(false);
    setIsInReviewScreen(false);
    setShowSubmitConfirmModal(false);
    setIsFinished(true);
    try {
      sessionStorage.removeItem(ACTIVE_MOCK_STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  // Exam Result Screen (Responsive for all screen sizes)
  if (isFinished) {
    const total = examQuestions.length;
    let totalCorrect = 0;
    const secScores: Record<ExamSection, { correct: number; total: number; pct: number }> = {
      UE: { correct: 0, total: 0, pct: 0 },
      L: { correct: 0, total: 0, pct: 0 },
      R: { correct: 0, total: 0, pct: 0 }
    };

    examQuestions.forEach(q => {
      const uAns = userAnswers[q.id];
      const isCorrect = uAns === q.answer;
      if (isCorrect) totalCorrect++;

      secScores[q.section].total++;
      if (isCorrect) secScores[q.section].correct++;
    });

    (['UE', 'L', 'R'] as ExamSection[]).forEach(s => {
      const item = secScores[s];
      item.pct = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
    });

    const overallPct = total > 0 ? Math.round((totalCorrect / total) * 100) : 0;
    const passedEachSection = secScores.UE.pct >= 70 && secScores.L.pct >= 70 && secScores.R.pct >= 70;
    const examPassed = overallPct >= 70 && passedEachSection;
    const totalTimeSpentSecs = Math.max(1, initialDurationSeconds - timeRemainingSeconds);
    const avgSecondsPerQ = total > 0 ? Math.round(totalTimeSpentSecs / total) : 0;
    const incorrectQuestions = examQuestions.filter(q => userAnswers[q.id] !== q.answer);

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-28 text-center pt-4 max-md:text-left">
        <div className="border-slate-200 sm:p-8 mb-6 bg-[#0E1830] text-white border-0 rounded-[28px] p-5 max-md:mb-8 shadow-[0_28px_48px_-28px_rgba(14,24,48,0.6)]">
          <div className={`hidden ${
            examPassed ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-rose-50 text-rose-600 border border-rose-200'
          }`}>
            <Award className="w-10 h-10" />
          </div>

          <span className="  tracking-normal text-[15px] font-normal text-white/65 max-md:block">
            {examMode === 'testnow'
              ? 'Resultado del Simulacro Oficial OpenEDG TestNow™ (36 ítems)'
              : examMode === 'intensive'
              ? 'Resultado del Modo Entrenamiento Intensivo (60 ítems)'
              : examMode === 'quick'
              ? 'Resultado del Diagnóstico Rápido (18 ítems)'
              : `Resultado del Simulacro Personalizado (${total} ítems)`}
          </span>

          <h2 className={` sm:text-3xl font-black mt-1 max-md:font-display text-[28px] max-md:font-semibold max-md:tracking-[-0.02em] ${examPassed ? 'text-[#7BE0AD]' : 'text-[#FF9A8F]'}`}>
            {examPassed ? 'APROBADO (PASSED)' : 'REPROBADO (FAILED)'}
          </h2>

          <div className="hidden">
            {totalCorrect} / {total} ({overallPct}%)
          </div>
          <div className="mt-3">
            <span className="font-display text-[72px] leading-[0.92] font-semibold tracking-[-0.035em] tabular-nums">
              {overallPct}
              <span className="ml-1 text-[34px] font-medium text-white/50">%</span>
            </span>
            <p className="mt-2 text-[15px] text-white/65">{totalCorrect} de {total} aciertos</p>
          </div>

          <div className="mt-4 p-4 rounded-2xl text-left space-y-1 max-w-lg mx-auto border-slate-200/80 bg-white/10 border-0 text-white/80 text-[14px] max-md:mx-0">
            <span className="font-bold block text-white">Criterio oficial de aprobación (doble candado):</span>
            <span>
              Requiere ≥70% en <strong>cada una</strong> de las 3 secciones (mínimo {examMode === 'testnow' ? '9/12 aciertos' : examMode === 'intensive' ? '14/20 aciertos' : examMode === 'quick' ? '5/6 aciertos' : '70%'} por sección) Y ≥70% en la nota global calculada.
            </span>
          </div>
        </div>

        {/* Section Breakdown Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-left max-md:gap-0 border-b border-[#0E1830]/10 max-md:mb-8">
          {(['UE', 'L', 'R'] as ExamSection[]).map(s => {
            const data = secScores[s];
            const name = s === 'UE' ? 'Use of English' : s === 'L' ? 'Listening' : 'Reading';
            const ok = data.pct >= 70;

            return (
              <div key={s} className="border p-4 space-y-2 bg-transparent border-x-0 border-t-0 border-[#0E1830]/10 rounded-none shadow-none px-0 py-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{name}</span>
                  {ok ? (
                    <span className="text-[12px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ≥70% OK
                    </span>
                  ) : (
                    <span className="text-[12px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      &lt;70% FALLO
                    </span>
                  )}
                </div>

                <div className="flex items-baseline justify-between">
                  <span className={`text-2xl font-mono font-bold ${ok ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {data.pct}%
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {data.correct}/{data.total}
                  </span>
                </div>

                <div className="relative w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${ok ? 'bg-emerald-500' : 'bg-rose-500'}`}
                    style={{ width: `${data.pct}%` }}
                  />
                  <div className="absolute top-0 bottom-0 w-0.5 bg-slate-800 z-10" style={{ left: '70%' }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Pacing Coach Performance Card */}
        <div className="border-slate-200 sm:p-6 mb-6 text-left space-y-4 bg-transparent border-0 rounded-none p-0 shadow-none max-md:mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="hidden">
                <Timer className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display text-[22px] font-semibold tracking-[-0.015em] text-[#0E1830]">
                  Ritmo y gestión del tiempo
                </h4>
                <p className="text-[12px] text-slate-500">
                  Estándar OpenEDG: Mantener promedio ≤60s por ítem para disponer de tiempo en lecturas complejas.
                </p>
              </div>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              avgSecondsPerQ <= 55
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : avgSecondsPerQ <= 80
                ? 'bg-amber-50 text-amber-800 border-amber-300'
                : 'bg-rose-50 text-rose-800 border-rose-300'
            }`}>
              {avgSecondsPerQ <= 55 ? '⚡ Ritmo Óptimo (≤55s)' : avgSecondsPerQ <= 80 ? '⏱️ Ritmo Adecuado (≤80s)' : '⚠️ Ritmo Lento (>80s)'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[12px] text-slate-500 block">Tiempo Total Utilizado:</span>
              <strong className="text-lg text-slate-900 font-mono font-bold block mt-0.5">
                {formatTimer(totalTimeSpentSecs)}
              </strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[12px] text-slate-500 block">Promedio por Pregunta:</span>
              <strong className="text-lg text-indigo-700 font-mono font-bold block mt-0.5">
                {avgSecondsPerQ}s / ítem
              </strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 col-span-2 sm:col-span-1">
              <span className="text-[12px] text-slate-500 block">Tiempo Restante en el Reloj:</span>
              <strong className="text-lg text-emerald-700 font-mono font-bold block mt-0.5">
                {formatTimer(timeRemainingSeconds)}
              </strong>
            </div>
          </div>

          <div className="text-xs text-slate-700 leading-relaxed bg-indigo-50/70 p-3 rounded-2xl border border-indigo-100 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              {avgSecondsPerQ <= 55
                ? 'Excelente velocidad de ejecución. Resolver Use of English en ~25s te proporcionó margen suficiente para analizar textos de Reading y audios sin estrés.'
                : avgSecondsPerQ <= 80
                ? 'Velocidad de ejecución aceptable. Para el examen real, automatiza la tabla de 3 segundos en gramática para reducir 15 segundos adicionales por pregunta.'
                : 'Atención al ritmo de examen. Superar los 80 segundos por ítem pone en riesgo no terminar la sección de Reading a tiempo.'}
            </div>
          </div>
        </div>

        {/* Post-exam forensic review toggle */}
        {incorrectQuestions.length > 0 && (
          <div className="mb-6 text-left">
            <button
              onClick={() => setShowPostExamReview(prev => !prev)}
              className="w-full py-3 px-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-800 flex items-center justify-between shadow-xs transition-colors"
            >
              <span>Revisar Fallos del Simulacro ({incorrectQuestions.length} reactivos con explicación forense)</span>
              <span className="text-blue-600">{showPostExamReview ? 'Ocultar revisión ▲' : 'Ver explicaciones ▼'}</span>
            </button>

            {showPostExamReview && (
              <div className="mt-3 space-y-3">
                {incorrectQuestions.map((q) => {
                  const uIdx = userAnswers[q.id];
                  return (
                    <div key={q.id} className="bg-white rounded-2xl border border-rose-200 p-4 shadow-xs space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[12px] font-mono text-slate-500">
                        <span className="font-bold text-rose-700">{q.section} · {q.objective} · {q.topic}</span>
                        <span>Tu respuesta: {uIdx !== undefined ? String.fromCharCode(65 + uIdx) : 'Sin responder'}</span>
                      </div>
                      <p className="font-bold text-slate-900">{q.stem}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {q.options.map((opt, idx) => (
                          <div
                            key={idx}
                            className={`p-2 rounded-lg border text-[12px] ${
                              idx === q.answer
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold'
                                : idx === uIdx
                                ? 'bg-rose-50 border-rose-300 text-rose-900 line-through'
                                : 'bg-slate-50 border-slate-200 text-slate-600'
                            }`}
                          >
                            <span className="font-mono font-bold mr-1.5">{String.fromCharCode(65 + idx)}.</span>
                            {opt}
                          </div>
                        ))}
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-emerald-950 text-[12px] leading-relaxed">
                        <strong>Por qué es correcta:</strong> {q.why_correct}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <button
          onClick={() => setIsFinished(false)}
          className="w-full max-w-sm mx-auto hover:bg-[#FFD84F] flex items-center justify-center gap-2 transition-colors max-md:max-w-none min-h-[58px] rounded-[18px] bg-[#FFE07A] max-md:hover:bg-[#FFE07A] text-[#0E1830] text-[17px] font-semibold shadow-none"
        >
          <span>Volver al Menú de Simulacro</span>
        </button>
      </div>
    );
  }

  // Active Mock Test View (Split Layout on Desktop when Audio or Reading)
  if (isExamRunning && examQuestions.length > 0) {
    if (isInReviewScreen) {
      const answeredCount = Object.keys(userAnswers).length;
      const unansweredCount = examQuestions.length - answeredCount;
      const flaggedCount = Object.values(flaggedQuestions).filter(Boolean).length;

      const filteredReviewQuestions = examQuestions.filter((q) => {
        if (reviewFilter === 'flagged') return !!flaggedQuestions[q.id];
        if (reviewFilter === 'unanswered') return userAnswers[q.id] === undefined;
        return true;
      });

      return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-24 animate-in fade-in">
          {/* TestNow Review Screen Header */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-xs">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-slate-900 leading-tight">
                    Pantalla de Revisión TestNow™ (Review Screen)
                  </h2>
                  <span className="text-[12px] font-bold bg-blue-100 text-blue-900 border border-blue-200 px-2 py-0.5 rounded-full uppercase">
                    Flujo Oficial
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Verifica el estado de tus respuestas antes de la entrega definitiva. Puedes volver a cualquier pregunta.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 font-mono font-bold text-indigo-900 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-xl text-sm">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>{formatTimer(timeRemainingSeconds)}</span>
              </div>
              <button
                onClick={() => setIsInReviewScreen(false)}
                className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Volver a la Pregunta #{currentIndex + 1}</span>
              </button>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-center shadow-xs">
              <span className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider block">Total Reactivos</span>
              <span className="text-2xl font-bold font-mono text-slate-900 mt-0.5 block">{examQuestions.length}</span>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-emerald-200 text-center shadow-xs">
              <span className="text-[12px] font-semibold text-emerald-700 uppercase tracking-wider block">Respondidas</span>
              <span className="text-2xl font-bold font-mono text-emerald-700 mt-0.5 block">{answeredCount}</span>
            </div>

            <div className={`p-3.5 rounded-2xl border text-center shadow-xs ${
              unansweredCount > 0 ? 'bg-amber-50 border-amber-300' : 'bg-white border-slate-200'
            }`}>
              <span className={`text-[12px] font-semibold uppercase tracking-wider block ${
                unansweredCount > 0 ? 'text-amber-900 font-bold' : 'text-slate-500'
              }`}>
                Sin Responder
              </span>
              <span className={`text-2xl font-bold font-mono mt-0.5 block ${
                unansweredCount > 0 ? 'text-amber-900' : 'text-slate-600'
              }`}>
                {unansweredCount}
              </span>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-amber-200 text-center shadow-xs">
              <span className="text-[12px] font-semibold text-amber-700 uppercase tracking-wider block">Marcadas (Flagged)</span>
              <span className="text-2xl font-bold font-mono text-amber-700 mt-0.5 block">{flaggedCount}</span>
            </div>
          </div>

          {/* Warning if unanswered */}
          {unansweredCount > 0 && (
            <div className="mb-5 p-3.5 bg-amber-50 rounded-2xl border border-amber-300 flex items-start gap-3 text-xs text-amber-950 shadow-xs">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-amber-900 block mb-0.5">
                  Regla de Examen OpenEDG TestNow™:
                </strong>
                <span>
                  Tienes <strong>{unansweredCount} preguntas sin responder</strong>. Las respuestas erróneas NO restan puntos. Se recomienda encarecidamente marcar una opción en cada ítem antes de entregar.
                </span>
              </div>
            </div>
          )}

          {/* Filter Bar & Table of Questions */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setReviewFilter('all')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    reviewFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Todas ({examQuestions.length})
                </button>
                <button
                  onClick={() => setReviewFilter('flagged')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    reviewFilter === 'flagged' ? 'bg-white text-amber-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Marcadas ({flaggedCount})
                </button>
                <button
                  onClick={() => setReviewFilter('unanswered')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    reviewFilter === 'unanswered' ? 'bg-white text-rose-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Sin Responder ({unansweredCount})
                </button>
              </div>

              <span className="text-xs text-slate-500">
                Haz clic en cualquier pregunta para ir directamente a ella
              </span>
            </div>

            {/* Questions Grid / List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-[50vh] overflow-y-auto p-1">
              {filteredReviewQuestions.map((q) => {
                const originalIndex = examQuestions.findIndex(x => x.id === q.id);
                const isAns = userAnswers[q.id] !== undefined;
                const isFlg = !!flaggedQuestions[q.id];

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(originalIndex);
                      setIsInReviewScreen(false);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all hover:border-blue-400 hover:shadow-xs flex items-center justify-between gap-2.5 cursor-pointer ${
                      !isAns
                        ? 'bg-amber-50/60 border-amber-200'
                        : isFlg
                        ? 'bg-amber-50/30 border-amber-300'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-mono text-xs font-bold text-slate-900">
                          #{originalIndex + 1}
                        </span>
                        <span className="text-[12px] font-semibold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.2 rounded font-mono">
                          {q.section}
                        </span>
                        {isFlg && (
                          <span className="text-[12px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded flex items-center gap-0.5">
                            <Flag className="w-2.5 h-2.5 fill-current" />
                            <span>Flag</span>
                          </span>
                        )}
                      </div>
                      <p className="text-[12px] text-slate-600 truncate leading-snug">
                        {q.stem}
                      </p>
                    </div>

                    <span className={`text-[12px] font-bold px-2 py-0.5 rounded shrink-0 ${
                      isAns
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {isAns ? `Opción ${String.fromCharCode(65 + userAnswers[q.id])}` : 'Incompleta'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Action Row */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setIsInReviewScreen(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
              >
                ← Continuar Resolviendo Examen
              </button>

              <button
                onClick={() => setShowSubmitConfirmModal(true)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all active:scale-[0.98] cursor-pointer"
              >
                Finalizar y Entregar Examen
              </button>
            </div>
          </div>

          {/* Confirmation Modal */}
          {showSubmitConfirmModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-md w-full p-6 space-y-4 animate-in zoom-in-95">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    unansweredCount > 0 ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {unansweredCount > 0 ? '¿Entregar con preguntas vacías?' : '¿Finalizar el examen ahora?'}
                    </h3>
                    <span className="text-xs text-slate-500">
                      Esta acción califica definitivamente tu intento.
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5">
                  {unansweredCount > 0 ? (
                    <>
                      <p className="font-bold text-amber-900">
                        Tienes {unansweredCount} pregunta(s) sin responder de un total de {examQuestions.length}.
                      </p>
                      <p>
                        En TestNow™ las respuestas incorrectas NO descuentan puntos. Te sugerimos volver y seleccionar una opción en cada reactivo.
                      </p>
                    </>
                  ) : (
                    <p>
                      Has completado las {examQuestions.length} preguntas de la prueba. Una vez entregado el examen, podrás ver tu reporte forense y desglose por sección.
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitConfirmModal(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs cursor-pointer"
                  >
                    {unansweredCount > 0 ? 'Volver a Responder' : 'Revisar un poco más'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowSubmitConfirmModal(false);
                      finishExam();
                    }}
                    className={`px-5 py-2.5 rounded-xl text-white font-bold text-xs shadow-xs cursor-pointer ${
                      unansweredCount > 0 ? 'bg-amber-600 hover:bg-amber-700' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {unansweredCount > 0 ? 'Entregar de todos modos' : 'Sí, Entregar Examen'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    const currentQ = examQuestions[currentIndex];
    const audioTrack = currentQ.ref && currentQ.section === 'L' ? LISTENING_TRACKS[currentQ.ref] : null;
    const readingText = currentQ.ref && currentQ.section === 'R' ? READING_TEXTS[currentQ.ref] : null;
    const hasMedia = !!audioTrack || !!readingText;
    const isFlagged = !!flaggedQuestions[currentQ.id];

    return (
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 pb-24">
        {/* Clean Light-Mode Exam HUD */}
        <div className="text-[#14213D] border-[#DDDFE6] mb-3 flex flex-wrap items-center justify-between gap-2 text-xs bg-transparent border-0 rounded-none shadow-none p-0 max-md:mb-4 max-md:gap-y-3">
          <div className="flex items-center gap-2.5 max-md:order-3 max-md:w-full">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-bold text-sm tracking-tight text-[#14213D]">
              Sección {currentQ.section}: {currentQ.section === 'UE' ? 'Use of English' : currentQ.section === 'L' ? 'Listening' : 'Reading'}
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3.5 max-md:contents">
            <button
              type="button"
              onClick={toggleFlagCurrentQuestion}
              className={` py-1 font-bold flex items-center gap-1.5 border transition-colors cursor-pointer max-md:order-4 min-h-[44px] px-4 text-[14px] rounded-full ${
                isFlagged
                  ? 'bg-[#FFF8DC] text-[#4A3800] border-[#FFE07A]'
                  : 'bg-[#F6F6F3] text-[#56607A] border-[#DDDFE6] hover:text-[#14213D]'
              }`}
              title="Marcar pregunta para revisar"
            >
              <Flag className="w-3.5 h-3.5" />
              <span>{isFlagged ? 'Marcada' : 'Marcar'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsInReviewScreen(true)}
              className="py-1 font-bold flex items-center gap-1.5 border hover:bg-indigo-100 transition-colors cursor-pointer max-md:order-5 min-h-[44px] px-4 text-[14px] rounded-full bg-transparent border-[#0E1830]/15 text-[#0E1830]"
              title="Abrir pantalla de revisión general TestNow™"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Revisar ({Object.keys(userAnswers).length}/{examQuestions.length})</span>
            </button>

            <div className="flex items-center gap-1.5 font-mono-code border-[#BCCDFF] px-2.5 py-1 rounded-[10px] max-md:order-1 bg-transparent border-0 p-0 font-display text-[30px] font-semibold leading-none tracking-[-0.02em] text-[#0E1830] max-md:whitespace-nowrap">
              <Clock className="hidden" />
              <span>{formatTimer(timeRemainingSeconds)}</span>
            </div>
            <span className="font-mono-code font-bold border-[#DDDFE6] px-2.5 py-1 rounded-[10px] max-md:order-2 max-md:ml-auto bg-transparent border-0 p-0 text-[16px] text-[#56607A] max-md:whitespace-nowrap">
              {currentIndex + 1} / {examQuestions.length}
            </span>
          </div>
        </div>

        {/* Question Navigator strip when back navigation is allowed */}
        {config.allowBackNavigation && (
          <div className="border-slate-200 rounded-xl mb-4 flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-transparent border-0 p-0 max-md:gap-2">
            <span className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mr-1 shrink-0 max-md:hidden">
              Navegador:
            </span>
            {examQuestions.map((q, idx) => {
              const answered = userAnswers[q.id] !== undefined;
              const flagged = !!flaggedQuestions[q.id];
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-7 h-7 font-mono font-bold shrink-0 flex items-center justify-center border transition-all cursor-pointer max-md:w-10 max-md:h-10 rounded-full text-[14px] ${
                    isCurrent
                      ? 'text-white ring-2 ring-blue-200 bg-[#0E1830] border-[#0E1830] max-md:ring-0'
                      : flagged
                      ? 'bg-amber-50 text-amber-800 border-amber-300'
                      : answered
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                  title={`Pregunta ${idx + 1} (${q.section})${flagged ? ' · Marcada' : ''}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        )}

        {/* Content: Split on Desktop if Media present, centered single column otherwise */}
        {hasMedia ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-md:gap-9">
            {/* Left Column (Sticky Media) */}
            <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-20 space-y-4">
              {audioTrack && (
                <AudioPlayerCard
                  track={audioTrack}
                  isAnswered={false} // transcript locked in exam mode
                  maxRepeats={config.maxAudioRepeats}
                  isExamMode={true}
                />
              )}

              {readingText && (
                <ReadingViewer
                  readingText={readingText}
                  isAnswered={false}
                />
              )}
            </div>

            {/* Right Column (Question Card) */}
            <div className="lg:col-span-7 xl:col-span-7">
              <QuestionCard
                key={currentQ.id}
                question={currentQ}
                currentIndex={currentIndex}
                totalQuestions={examQuestions.length}
                onAnswer={handleSelectOption}
                showImmediateFeedback={false}
                onNext={handleNext}
                onPrev={config.allowBackNavigation ? () => setCurrentIndex(prev => Math.max(0, prev - 1)) : undefined}
                canGoPrev={config.allowBackNavigation && currentIndex > 0}
                initialSelectedIdx={userAnswers[currentQ.id] ?? null}
                isLastQuestion={currentIndex === examQuestions.length - 1}
              />
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <QuestionCard
              key={currentQ.id}
              question={currentQ}
              currentIndex={currentIndex}
              totalQuestions={examQuestions.length}
              onAnswer={handleSelectOption}
              showImmediateFeedback={false}
              onNext={handleNext}
              onPrev={config.allowBackNavigation ? () => setCurrentIndex(prev => Math.max(0, prev - 1)) : undefined}
              canGoPrev={config.allowBackNavigation && currentIndex > 0}
              initialSelectedIdx={userAnswers[currentQ.id] ?? null}
              isLastQuestion={currentIndex === examQuestions.length - 1}
            />
          </div>
        )}
      </div>
    );
  }

  // Pre-exam Launcher & Configuration Screen (Responsive 2-Column Grid on Tablet & PC)
  const activeSettings = getModeSettings(examMode);
  const currentTotalItems = activeSettings.ue + activeSettings.l + activeSettings.r;
  const currentSectionItems = examMode === 'custom'
    ? `${activeSettings.ue}/${activeSettings.l}/${activeSettings.r}`
    : activeSettings.ue;
  const currentMinutes = activeSettings.mins;
  const currentMinPassing = examMode === 'testnow' ? '9/12' : examMode === 'intensive' ? '14/20' : examMode === 'quick' ? '5/6' : '≥70%';

  const modeOptions: { id: 'testnow' | 'intensive' | 'quick' | 'custom'; name: string; detail: string }[] = [
    { id: 'testnow', name: 'Simulacro Oficial TestNow™', detail: '36 preguntas · 115 min · mínimo 9/12 por sección' },
    { id: 'intensive', name: 'Entrenamiento Intensivo', detail: '60 preguntas · 115 min · máxima cobertura' },
    { id: 'quick', name: 'Diagnóstico Rápido', detail: '18 preguntas · 35 min · test ágil' },
    ...(examMode === 'custom'
      ? [{ id: 'custom' as const, name: 'Simulacro Personalizado', detail: `${currentTotalItems} preguntas (${config.sections.UE.count} UE · ${config.sections.L.count} L · ${config.sections.R.count} R)` }]
      : [])
  ];
  const activeModeName = modeOptions.find(m => m.id === examMode)?.name ?? '';
  const CARD = 'rounded-[24px] border border-[#0E1830]/12 bg-white p-6';

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 pb-28 md:pb-12 space-y-6 md:space-y-8 md:max-w-[1360px] md:mx-auto">
      <h2 className="sr-only">Simulacro oficial</h2>

      {/* Acción principal */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 rounded-[24px] bg-[#0E1830] px-6 py-5 md:px-8 md:py-6 text-white">
        <div className="min-w-0">
          <p className="text-[14px] text-white/60">Modalidad elegida</p>
          <p className="mt-1 font-display text-[22px] md:text-[26px] font-semibold leading-tight tracking-[-0.01em]">{activeModeName}</p>
          <p className="mt-1 text-[14px] text-white/60">{currentTotalItems} preguntas · {currentMinutes} minutos</p>
        </div>
        <button
          type="button"
          onClick={startExam}
          className="shrink-0 min-h-[56px] rounded-[18px] bg-[#FFE07A] hover:bg-[#FFD84F] pl-6 pr-3 text-[16px] font-semibold text-[#0E1830] flex items-center justify-between md:justify-start gap-4 transition-colors cursor-pointer"
        >
          Comenzar simulacro
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0E1830] text-[#FFE07A]">
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>
      </div>

      <div className="xl:grid xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-10 items-start space-y-8 xl:space-y-0">
        {/* Elegir modalidad */}
        <nav aria-label="Modalidad" className="xl:sticky xl:top-6 space-y-2 xl:space-y-1">
          <p className="text-[14px] font-medium text-[#56607A] mb-2 md:px-4">Elige una modalidad</p>
          {modeOptions.map((m) => {
            const isCurrent = m.id === examMode;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setExamMode(m.id)}
                className={`w-full text-left rounded-[16px] px-4 py-3.5 transition-colors cursor-pointer max-md:border ${
                  isCurrent
                    ? 'bg-[#0E1830] text-white max-md:border-[#0E1830]'
                    : 'hover:bg-[#0E1830]/5 text-[#0E1830] max-md:border-[#0E1830]/15'
                }`}
              >
                <span className="block text-[16px] font-semibold leading-snug">{m.name}</span>
                <span className={`mt-0.5 block text-[13px] leading-snug ${isCurrent ? 'text-white/60' : 'text-[#56607A]'}`}>{m.detail}</span>
              </button>
            );
          })}

          <div className="pt-4 md:px-4">
            <button
              onClick={() => setShowConfigDrawer(prev => !prev)}
              className="text-[14px] font-medium text-[#56607A] hover:text-[#0E1830] flex items-center gap-2 cursor-pointer"
            >
              <Settings2 className="w-4 h-4" />
              {showConfigDrawer ? 'Ocultar parámetros' : 'Personalizar parámetros'}
            </button>
          </div>

          {showConfigDrawer && (
            <div className={CARD + ' space-y-4 text-[14px] md:mx-0'}>
              <div className="grid grid-cols-3 gap-2">
                {([
                  { key: 'UE', label: 'Ítems UE' },
                  { key: 'L', label: 'Ítems L' },
                  { key: 'R', label: 'Ítems R' }
                ] as const).map(f => (
                  <div key={f.key}>
                    <label className="text-[12px] text-[#56607A] block mb-1">{f.label}</label>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={config.sections[f.key].count}
                      onChange={(e) => setConfig({
                        ...config,
                        sections: { ...config.sections, [f.key]: { ...config.sections[f.key], count: Number(e.target.value) } }
                      })}
                      className="w-full h-10 px-2 border border-[#0E1830]/15 rounded-xl text-[14px]"
                    />
                  </div>
                ))}
              </div>
              <label className="flex items-center justify-between gap-3 text-[#56607A]">
                <span>Bloquear retorno a preguntas anteriores</span>
                <input
                  type="checkbox"
                  checked={!config.allowBackNavigation}
                  onChange={(e) => setConfig({ ...config, allowBackNavigation: !e.target.checked })}
                  className="w-4 h-4 rounded"
                />
              </label>
              <button
                onClick={() => {
                  StorageService.saveConfig(config);
                  setExamMode('custom');
                  setShowConfigDrawer(false);
                }}
                className="w-full min-h-[44px] rounded-[14px] border border-[#0E1830] text-[#0E1830] hover:bg-[#0E1830] hover:text-white font-semibold transition-colors cursor-pointer"
              >
                Guardar y usar estos parámetros
              </button>
            </div>
          )}
        </nav>

        {/* Reglas y secciones */}
        <div className="min-w-0 space-y-8">
          <section>
            <h3 className="font-display text-[26px] md:text-[30px] font-semibold tracking-[-0.02em] text-[#0E1830] mb-5">
              Cómo se aprueba
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div className={CARD}>
                <p className="text-[14px] text-[#56607A]">Tiempo cronometrado</p>
                <p className="mt-1 font-display text-[32px] font-semibold leading-tight text-[#0E1830]">{currentMinutes} minutos</p>
                <p className="mt-1 text-[13px] text-[#8D94A8]">Total para las tres secciones</p>
              </div>
              <div className={CARD}>
                <p className="text-[14px] text-[#56607A]">Número de ítems</p>
                <p className="mt-1 font-display text-[32px] font-semibold leading-tight text-[#0E1830]">{currentTotalItems} preguntas</p>
                <p className="mt-1 text-[13px] text-[#8D94A8]">{currentSectionItems} por cada sección</p>
              </div>
            </div>

            <div className={CARD + ' mt-4 md:mt-5 flex items-start gap-4'}>
              <CheckCircle2 className="w-6 h-6 shrink-0 text-[#17714F] mt-0.5" />
              <div>
                <p className="font-display text-[20px] font-semibold text-[#0E1830]">Regla del doble candado</p>
                <p className="mt-1 text-[15px] leading-relaxed text-[#56607A]">
                  Necesitas <strong className="text-[#0E1830]">70% o más en cada una de las 3 secciones</strong> (mínimo {currentMinPassing} aciertos en cada una) y 70% o más en la nota global. Si fallas una sola sección, no apruebas.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-display text-[26px] md:text-[30px] font-semibold tracking-[-0.02em] text-[#0E1830] mb-5">
              Las tres secciones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {[
                { n: 1, name: 'Use of English', text: `${activeSettings.ue} ítems de gramática formal (inversiones, deducción, condicionales) e idioms de TI.` },
                { n: 2, name: 'Listening', text: `${activeSettings.l} ítems sobre diálogos técnicos y soporte. Máximo ${config.maxAudioRepeats} reproducciones, velocidad fija 1.0x.` },
                { n: 3, name: 'Reading', text: `${activeSettings.r} ítems sobre arquitectura, sistemas operativos y postmortems, con inferencia e información faltante.` }
              ].map(sec => (
                <div key={sec.n} className={CARD}>
                  <p className="font-mono-code text-[13px] text-[#1F5EFF]">Sección {sec.n}</p>
                  <h4 className="mt-2 font-display text-[22px] font-semibold text-[#0E1830]">{sec.name}</h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#56607A]">{sec.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-[#56607A]">
              Speaking y Writing no se evalúan en este examen (0%). Todo el peso recae en Use of English, Listening y Reading.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
