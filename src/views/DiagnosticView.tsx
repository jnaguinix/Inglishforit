import React, { useState } from 'react';
import { ShieldCheck, Award, ArrowRight, RotateCcw, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';
import { DiagnosticResult, ExamSection, ObjectiveId, Question, TopicId } from '../types';
import { SEED_QUESTIONS } from '../data/seedQuestions';
import { LISTENING_TRACKS } from '../data/listeningTracks';
import { READING_TEXTS } from '../data/readingTexts';
import { StorageService } from '../services/storage';
import { QuestionCard } from '../components/QuestionCard';
import { AudioPlayerCard } from '../components/AudioPlayerCard';
import { ReadingViewer } from '../components/ReadingViewer';
import { TOPICS, OBJECTIVES } from '../config/taxonomy';
import { shuffleQuestionsPoolOptions } from '../utils/random';

interface DiagnosticViewProps {
  onComplete: () => void;
  onExit: () => void;
}

export const DiagnosticView: React.FC<DiagnosticViewProps> = ({ onComplete, onExit }) => {
  // Exactly 18 official diagnostic items: 6 UE, 6 L, 6 R (stratified across 18 distinct topics)
  const [questions] = useState<Question[]>(() =>
    shuffleQuestionsPoolOptions(StorageService.getDiagnosticQuestions())
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { selection: number; isCorrect: boolean }>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const currentQ = questions[currentIndex];
  const isAnswered = answers[currentQ.id] !== undefined;

  const audioTrack = currentQ.ref && currentQ.section === 'L' ? LISTENING_TRACKS[currentQ.ref] : null;
  const readingText = currentQ.ref && currentQ.section === 'R' ? READING_TEXTS[currentQ.ref] : null;
  const hasMedia = !!audioTrack || !!readingText;

  const handleAnswer = (selectedIdx: number, isCorrect: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: { selection: selectedIdx, isCorrect }
    }));

    // Record attempt in local engine
    StorageService.recordAttempt({
      questionId: currentQ.id,
      topic: currentQ.topic,
      section: currentQ.section,
      objective: currentQ.objective,
      userSelection: selectedIdx,
      isCorrect,
      mode: 'diagnostic'
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishDiagnostic();
    }
  };

  const finishDiagnostic = () => {
    const total = questions.length;
    let correctCount = 0;

    const sectionScores: Record<ExamSection, { correct: number; total: number; pct: number }> = {
      UE: { correct: 0, total: 0, pct: 0 },
      L: { correct: 0, total: 0, pct: 0 },
      R: { correct: 0, total: 0, pct: 0 }
    };

    const objectiveScores: Record<string, { correct: number; total: number; pct: number }> = {};
    const topicStats: Record<string, { correct: number; total: number }> = {};

    questions.forEach(q => {
      const ans = answers[q.id];
      const isOk = ans?.isCorrect || false;
      if (isOk) correctCount++;

      // Section
      sectionScores[q.section].total++;
      if (isOk) sectionScores[q.section].correct++;

      // Objective
      if (!objectiveScores[q.objective]) {
        objectiveScores[q.objective] = { correct: 0, total: 0, pct: 0 };
      }
      objectiveScores[q.objective].total++;
      if (isOk) objectiveScores[q.objective].correct++;

      // Topic
      if (!topicStats[q.topic]) {
        topicStats[q.topic] = { correct: 0, total: 0 };
      }
      topicStats[q.topic].total++;
      if (isOk) topicStats[q.topic].correct++;
    });

    (['UE', 'L', 'R'] as ExamSection[]).forEach(sec => {
      const s = sectionScores[sec];
      s.pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
    });

    Object.keys(objectiveScores).forEach(objKey => {
      const o = objectiveScores[objKey];
      o.pct = o.total > 0 ? Math.round((o.correct / o.total) * 100) : 0;
    });

    // Identify weakest topics (<70% accuracy)
    const weakestTopics: TopicId[] = Object.keys(topicStats)
      .map(tId => ({
        topicId: tId as TopicId,
        pct: Math.round((topicStats[tId].correct / topicStats[tId].total) * 100)
      }))
      .filter(item => item.pct < 70)
      .map(item => item.topicId);

    const diagResult: DiagnosticResult = {
      completedAt: Date.now(),
      totalScore: correctCount,
      totalQuestions: total,
      percentage: Math.round((correctCount / total) * 100),
      sectionScores,
      objectiveScores,
      weakestTopics
    };

    StorageService.saveDiagnosticResult(diagResult);
    setResult(diagResult);
    setIsFinished(true);
  };

  if (isFinished && result) {
    const passedAllSections =
      result.sectionScores.UE.pct >= 70 &&
      result.sectionScores.L.pct >= 70 &&
      result.sectionScores.R.pct >= 70;
    const overallPassed = result.percentage >= 70 && passedAllSections;

    return (
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 pb-28 pt-4">
        {/* Diagnostic Results Summary */}
        <div className="border-slate-200 sm:p-8 text-center mb-6 bg-[#0E1830] text-white border-0 rounded-[28px] max-md:text-left p-5 max-md:mb-8 shadow-[0_28px_48px_-28px_rgba(14,24,48,0.6)]">
          <div className="hidden">
            <Award className="w-8 h-8" />
          </div>

          <span className="  tracking-normal text-[15px] font-normal text-white/65">
            Diagnóstico Inicial Calibrado
          </span>
          <h2 className="hidden">
            {result.totalScore} / {result.totalQuestions} ({result.percentage}%)
          </h2>
          <div className="mt-1">
            <span className="font-display text-[72px] leading-[0.92] font-semibold tracking-[-0.035em] tabular-nums">
              {result.percentage}
              <span className="ml-1 text-[34px] font-medium text-white/50">%</span>
            </span>
            <p className="mt-2 text-[15px] text-white/65">{result.totalScore} de {result.totalQuestions} aciertos</p>
          </div>

          <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border-slate-200 border-0 p-0 max-md:mt-4 text-[15px] font-semibold">
            {overallPassed ? (
              <span className="flex items-center gap-1.5 text-[#FFE07A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Supera el umbral B2 (≥70% global y por sección)
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-[#FFE07A]">
                <XCircle className="w-4 h-4 text-amber-600" />
                Requiere refuerzo para alcanzar el 70% por sección
              </span>
            )}
          </div>
        </div>

        {/* 2-Column Grid for Section Breakdown & Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-start">
          {/* Breakdown by Sections vs 70% line */}
          <div className="border p-5 bg-transparent border-x-0 border-b-0 border-[#0E1830]/10 rounded-none shadow-none px-0 pb-0 pt-7 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 border-0 pb-0">
              <h3 className=" font-display text-[22px] font-semibold  tracking-[-0.015em] text-[#0E1830]">
                Rendimiento por Sección
              </h3>
              <span className="px-2 py-0.5 rounded bg-transparent p-0 text-[14px] font-medium text-[#56607A] max-md:whitespace-nowrap">
                Meta: 70%
              </span>
            </div>

            {(['UE', 'L', 'R'] as ExamSection[]).map(sec => {
              const data = result.sectionScores[sec];
              const secName = sec === 'UE' ? 'Use of English' : sec === 'L' ? 'Listening' : 'Reading';
              const meetsCriteria = data.pct >= 70;

              return (
                <div key={sec} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-800">{secName}</span>
                    <span className={`font-mono font-bold ${meetsCriteria ? 'text-emerald-700' : 'text-rose-600'}`}>
                      {data.correct}/{data.total} ({data.pct}%)
                    </span>
                  </div>
                  <div className="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        meetsCriteria ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${data.pct}%` }}
                    />
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-slate-800 z-10"
                      style={{ left: '70%' }}
                      title="Meta de aprobación 70%"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Objective Breakdown */}
          <div className="border p-5 bg-transparent border-x-0 border-b-0 border-[#0E1830]/10 rounded-none shadow-none px-0 pb-0 pt-7">
            <h3 className=" mb-3 border-b border-slate-100 border-0 pb-0 font-display text-[22px] font-semibold  tracking-[-0.015em] text-[#0E1830]">
              Mapa de Dominio por Objetivos
            </h3>
            <div className="text-xs max-h-64 overflow-y-auto max-md:max-h-none max-md:overflow-visible pr-0 space-y-0">
              {Object.entries(result.objectiveScores).map(([objId, stats]) => {
                const meta = OBJECTIVES[objId as ObjectiveId];
                return (
                  <div key={objId} className="flex items-center justify-between p-2 border bg-transparent border-x-0 border-t-0 border-[#0E1830]/10 rounded-none px-0 py-3 text-[15px]">
                    <div className="min-w-0 pr-2">
                      <span className="font-bold text-blue-700 mr-1.5 font-mono">{objId}</span>
                      <span className="text-slate-700 truncate">{meta?.titleEs}</span>
                    </div>
                    <span className={`font-mono font-bold shrink-0 ${stats.pct >= 70 ? 'text-emerald-700' : 'text-amber-700'}`}>
                      {stats.pct}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-md mx-auto space-y-2">
          <button
            onClick={onComplete}
            className="w-full hover:bg-[#FFD84F] active:scale-[0.98] flex items-center justify-center gap-2 transition-all min-h-[58px] rounded-[18px] bg-[#FFE07A] max-md:hover:bg-[#FFE07A] text-[#0E1830] text-[17px] font-semibold shadow-none"
          >
            <span>Ir al Plan de Estudio Calibrado ("Hoy")</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Active Test Step (Responsive layout)
  const currentSectionName = currentQ.section === 'UE' ? 'Use of English' : currentQ.section === 'L' ? 'Listening' : 'Reading';
  const progressPct = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 pb-28 pt-2">
      {/* Top Test Progress & Controls */}
      <div className="rounded-2xl border-slate-200 mb-5 bg-transparent border-0 shadow-none p-0 max-md:mb-4">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={onExit}
              className="hover:text-slate-800 flex items-center gap-1 font-semibold mr-1 min-h-[44px] max-md:-ml-1 text-[#0E1830] text-[15px]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Salir</span>
            </button>
            <span className="font-bold text-slate-900 max-md:hidden">
              Diagnóstico: Sección {currentQ.section} ({currentSectionName})
            </span>
            <span className="md:hidden font-semibold text-[#0E1830] text-[15px]">{currentSectionName}</span>
          </div>
          <span className="font-mono tabular-nums font-bold py-0.5 rounded bg-transparent px-0 text-[15px] text-[#0E1830]">
            {currentIndex + 1} de {questions.length}<span className="max-md:hidden"> ({progressPct}%)</span>
          </span>
        </div>
        <div className="w-full h-2 rounded-full overflow-hidden max-md:h-[3px] bg-[#0E1830]/10">
          <div
            className="h-full transition-all duration-300 rounded-full bg-[#0E1830]"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Split layout on desktop when media is present */}
      {hasMedia ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Media Column */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-20 space-y-4">
            {audioTrack && (
              <AudioPlayerCard
                track={audioTrack}
                isAnswered={isAnswered}
                maxRepeats={2}
                isExamMode={true}
              />
            )}

            {readingText && (
              <ReadingViewer
                readingText={readingText}
                evidenceQuote={currentQ.evidence_quote}
                isAnswered={isAnswered}
              />
            )}
          </div>

          {/* Right Question Column */}
          <div className="lg:col-span-7 xl:col-span-7">
            <QuestionCard
              key={currentQ.id}
              question={currentQ}
              currentIndex={currentIndex}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
              showImmediateFeedback={true}
              allowShortcuts={false}
              hideTopicBeforeAnswer={true}
              onNext={handleNext}
              isLastQuestion={currentIndex === questions.length - 1}
            />
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <QuestionCard
            key={currentQ.id}
            question={currentQ}
            currentIndex={currentIndex}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            showImmediateFeedback={true}
            allowShortcuts={false}
            hideTopicBeforeAnswer={true}
            onNext={handleNext}
            isLastQuestion={currentIndex === questions.length - 1}
          />
        </div>
      )}
    </div>
  );
};
