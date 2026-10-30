import React, { useState, useEffect } from 'react';
import { Check, X, HelpCircle, Lightbulb, ArrowRight, Zap, Sparkles, Briefcase, ShieldAlert, BookOpen, Table, Brain, ChevronDown, ChevronUp, Timer } from 'lucide-react';
import { Question } from '../types';
import { OBJECTIVES, TOPICS } from '../config/taxonomy';
import { getPedagogicalEnhancement } from '../utils/pedagogicalEnhancer';
import { MINI_LESSONS } from '../data/miniLessons';
import { StructuredExplanation } from '../utils/textFormatting';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (selectedIdx: number, isCorrect: boolean) => void;
  showImmediateFeedback?: boolean; // True for practice/diagnostic, false for mock exam
  onNext?: () => void;
  onPrev?: () => void;
  canGoPrev?: boolean;
  initialSelectedIdx?: number | null;
  isLastQuestion?: boolean;
  hideTopicBeforeAnswer?: boolean;
  allowShortcuts?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  showImmediateFeedback = true,
  onNext,
  onPrev,
  canGoPrev = false,
  initialSelectedIdx = null,
  isLastQuestion = false,
  hideTopicBeforeAnswer = false,
  allowShortcuts = true
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(initialSelectedIdx);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confidence, setConfidence] = useState<'low' | 'medium' | 'high' | null>(null);
  const [showForensicDetails, setShowForensicDetails] = useState(false);
  const [showShortcutModal, setShowShortcutModal] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const targetPaceSeconds = question.section === 'UE' ? 25 : 60;

  useEffect(() => {
    setSelectedIdx(initialSelectedIdx);
    setIsConfirmed(false);
    setConfidence(null);
    setShowForensicDetails(false);
    setElapsedSeconds(0);
  }, [question.id, initialSelectedIdx]);

  useEffect(() => {
    if (isConfirmed || !showImmediateFeedback) return;
    const interval = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isConfirmed, showImmediateFeedback, question.id]);

  const miniLesson = MINI_LESSONS[question.topic];
  const objectiveMeta = OBJECTIVES[question.objective];
  const topicMeta = TOPICS[question.topic];
  const optionLetters = ['A', 'B', 'C', 'D'];

  const handleSelectOption = (idx: number) => {
    if (isConfirmed && showImmediateFeedback) return;
    setSelectedIdx(idx);
  };

  const handleConfirm = () => {
    if (selectedIdx === null) return;
    setIsConfirmed(true);
    const isCorrect = selectedIdx === question.answer;
    onAnswer(selectedIdx, isCorrect);

    // If no immediate feedback (e.g. mock exam), advance automatically
    if (!showImmediateFeedback && onNext) {
      onNext();
    }
  };

  // Keyboard navigation & shortcuts (1-4 / A-D to select, Enter to confirm/advance, Escape for modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT')) {
        return;
      }

      if (e.key === 'Escape' && showShortcutModal) {
        e.preventDefault();
        setShowShortcutModal(false);
        return;
      }

      if (showShortcutModal) return;

      const keyLower = e.key.toLowerCase();
      const keyMap: Record<string, number> = {
        '1': 0, '2': 1, '3': 2, '4': 3,
        'a': 0, 'b': 1, 'c': 2, 'd': 3
      };

      if (keyLower in keyMap && keyMap[keyLower] < question.options.length && (!isConfirmed || !showImmediateFeedback)) {
        e.preventDefault();
        setSelectedIdx(keyMap[keyLower]);
      } else if (e.key === 'Enter') {
        if (!isConfirmed && selectedIdx !== null) {
          e.preventDefault();
          handleConfirm();
        } else if (isConfirmed && showImmediateFeedback && onNext) {
          e.preventDefault();
          onNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const isAnswerCorrect = selectedIdx === question.answer;
  const pedagogy = getPedagogicalEnhancement(question);
  const hasBlankGap = /_{3,}/.test(question.stem);
  const normalizeForCompare = (t: string) => (t || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/ +/g, ' ').trim();
  const answerNorm = normalizeForCompare(question.options[question.answer]);
  const triggerNorm = normalizeForCompare(pedagogy.triggerAnchor);
  // El gatillo no sirve si solo repite la respuesta correcta
  const triggerRepeatsAnswer = !triggerNorm || (answerNorm.length > 6 && triggerNorm.includes(answerNorm) && answerNorm.length / triggerNorm.length > 0.8);
  // En la frase resuelta no se repite la instrucción general ("Select the best answer...:")
  const stemForPreview = question.stem.replace(/^(select|choose|complete|read|listen|fill)[^\n]*:\s*\n+/i, '');
  const gapParts = hasBlankGap ? stemForPreview.split(/_{3,}/) : [];

  return (
    <>
      <div className="rounded-2xl border-slate-200/90 mb-4 transition-all bg-transparent border-0 shadow-none p-0">
        {/* Question Header & Taxonomy Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 border-b border-slate-100 text-slate-500 border-0 pb-0 max-md:mb-4 text-[14px]">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="text-[#0E1830] font-semibold">
              Pregunta {currentIndex + 1} de {totalQuestions}
            </span>
            <span aria-hidden="true">·</span>
            <span>{question.section}</span>
            <span aria-hidden="true">·</span>
            {hideTopicBeforeAnswer && !isConfirmed ? (
              <span className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Intercalado</span>
            ) : (
              <span className="font-mono text-slate-700">{question.topic}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {showImmediateFeedback && (
              <span
                className={`inline-flex items-center gap-1 py-0.5 rounded-md font-mono font-semibold border max-md:bg-transparent max-md:border-0 px-0 text-[13px] ${
                  elapsedSeconds <= targetPaceSeconds
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200/80'
                    : elapsedSeconds <= targetPaceSeconds + 15
                    ? 'bg-amber-50 text-amber-800 border-amber-200/80'
                    : 'bg-rose-50 text-rose-800 border-rose-200/80'
                }`}
                title={`Pacing Coach EIT-B2: Resuelve preguntas de ${question.section === 'UE' ? 'Gramática/Vocabulario en ≤25s' : 'Lectura/Audio en ≤60s'} para no quedarte sin tiempo en el examen real`}
              >
                <Timer className="w-3 h-3" />
                <span>{elapsedSeconds}s</span>
                <span className="text-[12px] opacity-75 max-md:hidden">/ meta ≤{targetPaceSeconds}s</span>
              </span>
            )}

            {showImmediateFeedback && allowShortcuts && (
              <button
                type="button"
                onClick={() => setShowShortcutModal(true)}
                className="inline-flex items-center gap-1.5 py-1 hover:bg-amber-500 text-slate-950 transition-colors cursor-pointer bg-transparent max-md:hover:bg-transparent border border-[#0E1830]/15 min-h-[40px] px-3.5 rounded-full text-[14px] font-semibold shadow-none"
                title="Consultar atajo mental y tabla de 3 segundos"
              >
                <Zap className="w-3.5 h-3.5 fill-slate-950" />
                <span>Atajo 3s</span>
              </button>
            )}

            <div className="text-slate-500 text-[12px] font-medium hidden sm:block">
              Dificultad: {'★'.repeat(question.difficulty)}{'☆'.repeat(3 - question.difficulty)}
            </div>
          </div>
        </div>

        {/* Topic context in Spanish */}
        <div className="mb-3 text-slate-600 rounded-xl border-slate-100 bg-transparent border-0 p-0 max-md:mb-2 text-[14px]">
          {hideTopicBeforeAnswer && !isConfirmed ? (
            <div className="flex items-center gap-2 text-indigo-800 font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              <span>Reto Intercalado: Identifica la regla gramatical o técnica aplicable sin pistas de tema.</span>
            </div>
          ) : (
            <div>
              <span className="font-semibold text-slate-900">{topicMeta?.titleEs || question.topic}</span>
              <span className="mx-1.5 text-slate-400 max-md:hidden">—</span>
              <span className="max-md:hidden">{topicMeta?.focusEs || objectiveMeta?.descEs || objectiveMeta?.titleEs}</span>
            </div>
          )}
        </div>

        {/* Question Stem in English */}
        <div className="mb-4">
          <h2 className="whitespace-pre-line font-display text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0E1830]">
            {question.stem}
          </h2>
        </div>

        {/* 4 Options Grid */}
        <div className="mb-4 space-y-3" role="radiogroup" aria-label="Opciones de respuesta">
          {question.options.map((optText, idx) => {
            const isSelected = selectedIdx === idx;
            const isCorrectAnswer = idx === question.answer;

            let optionStyle = 'hover:border-slate-300 hover:bg-slate-50 text-slate-800 bg-white border-[#0E1830]/15 max-md:hover:bg-white';
            let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

            if (isConfirmed && showImmediateFeedback) {
              if (isCorrectAnswer) {
                optionStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !isCorrectAnswer) {
                optionStyle = 'border-rose-400 bg-rose-50/80 text-rose-950 font-semibold ring-1 ring-rose-400';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
              } else {
                optionStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
                badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
              }
            } else if (isSelected) {
              optionStyle = 'font-semibold ring-2 ring-blue-500/30 border-[#0E1830] bg-white text-[#0E1830] max-md:ring-1 max-md:ring-[#0E1830]';
              badgeStyle = 'text-white bg-[#0E1830] border-[#0E1830]';
            }

            return (
              <button
                key={idx}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleSelectOption(idx)}
                disabled={isConfirmed && showImmediateFeedback}
                className={`w-full p-3 text-left border flex items-center justify-between gap-3 transition-all active:scale-[0.99] min-h-[60px] rounded-[18px] px-4 py-3.5 ${optionStyle}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`w-7 h-7 border font-bold flex items-center justify-center shrink-0 max-md:w-8 max-md:h-8 rounded-full text-[13px] ${badgeStyle}`}>
                    {optionLetters[idx]}
                  </span>
                  <span className="leading-snug break-words text-[17px]">
                    {optText}
                  </span>
                </div>

                {isConfirmed && showImmediateFeedback && (
                  <div className="shrink-0">
                    {isCorrectAnswer && (
                      <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    )}
                    {isSelected && !isCorrectAnswer && (
                      <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center">
                        <X className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Confidence Tagging (Metacognitive calibration in Practice mode) */}
        {!isConfirmed && showImmediateFeedback && selectedIdx !== null && (
          <div className="mb-3 rounded-xl border-slate-200/80 flex flex-wrap items-center justify-between gap-2 bg-transparent border-0 p-0 text-[14px] max-md:mb-4">
            <span className="text-slate-600 font-medium">
              Calibración (opcional): <strong className="text-slate-800">¿Qué tan seguro estás?</strong>
            </span>
            <div className="flex items-center gap-1.5">
              {([
                { id: 'low', label: 'Dudo' },
                { id: 'medium', label: 'Creo que sí' },
                { id: 'high', label: '100% Seguro' }
              ] as const).map(lvl => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setConfidence(lvl.id)}
                  className={` font-semibold transition-colors cursor-pointer rounded-full px-3.5 py-2 text-[14px] ${
                    confidence === lvl.id
                      ? 'text-white bg-[#0E1830]'
                      : 'bg-white border hover:bg-slate-100 border-[#0E1830]/15 text-[#0E1830]'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Confirmation & Navigation Row (if not confirmed yet) */}
        {!isConfirmed && (
          <div className="flex items-center gap-2.5 max-md:sticky max-md:bottom-[calc(4.5rem+env(safe-area-inset-bottom))] max-md:z-10 max-md:-mx-4 px-4 py-3 bg-[#F6F6F3]/92 max-md:backdrop-blur-lg">
            {canGoPrev && onPrev && (
              <button
                type="button"
                onClick={onPrev}
                className="px-4 border bg-white hover:bg-slate-50 transition-all shrink-0 min-h-[56px] rounded-[18px] border-[#0E1830]/15 text-[#0E1830] text-[16px] font-semibold"
              >
                ← Anterior
              </button>
            )}
            <button
              type="button"
              onClick={handleConfirm}
              disabled={selectedIdx === null}
              className={`flex-1 font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] min-h-[56px] rounded-[18px] text-[17px] max-md:font-semibold max-md:shadow-none ${
                selectedIdx !== null
                  ? 'hover:bg-[#FFD84F] bg-[#FFE07A] max-md:hover:bg-[#FFE07A] text-[#0E1830]'
                  : 'cursor-not-allowed bg-[#0E1830]/10 text-[#0E1830]/40'
              }`}
            >
              <span>Confirmar Respuesta</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="mt-2 flex items-center justify-between text-[12px] text-slate-400 max-md:hidden">
          <span>Teclado: 1–4 o A–D para elegir · Enter para confirmar</span>
        </div>

        {/* Immediate In-Depth Feedback Section */}
        {isConfirmed && showImmediateFeedback && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
            {/* Hypercorrection Alert if user was 100% confident but wrong */}
            {!isAnswerCorrect && confidence === 'high' && (
              <div className="p-3 bg-rose-50 text-rose-950 rounded-xl border border-rose-300 flex items-start gap-2.5 text-xs shadow-xs">
                <Brain className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-rose-900 block mb-0.5">
                    Estabas muy seguro y fallaste:
                  </span>
                  <span className="text-rose-800 leading-relaxed">
                    Suele ser un reflejo del español, no falta de nivel. Mira abajo por qué tu opción era una trampa y fíjate en la pista que te la delata.
                  </span>
                </div>
              </div>
            )}

            {/* Result banner with completed full sentence preview */}
            <div className={`p-3.5 rounded-xl border flex flex-col gap-2.5 ${
              isAnswerCorrect
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}>
              <div className="flex items-start gap-2.5">
                {isAnswerCorrect ? (
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <X className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-bold">
                      {isAnswerCorrect
                        ? `¡Correcto! (${elapsedSeconds}s)`
                        : `Incorrecto — La opción correcta es la ${optionLetters[question.answer]}: "${question.options[question.answer]}"`}
                    </h4>
                    <span className={`inline-flex items-center gap-1 text-[12px] font-semibold px-2 py-0.5 rounded-md border max-md:hidden ${
                      elapsedSeconds <= targetPaceSeconds
                        ? 'bg-emerald-100/90 text-emerald-900 border-emerald-300'
                        : elapsedSeconds <= targetPaceSeconds + 20
                        ? 'bg-amber-100/90 text-amber-900 border-amber-300'
                        : 'bg-rose-100/90 text-rose-900 border-rose-300'
                    }`}>
                      <Timer className="w-3 h-3" />
                      <span>
                        {elapsedSeconds <= targetPaceSeconds
                          ? `Pacing Óptimo (≤${targetPaceSeconds}s)`
                          : elapsedSeconds <= targetPaceSeconds + 20
                          ? `Pacing Moderado (+${elapsedSeconds - targetPaceSeconds}s)`
                          : `Alerta Pacing (+${elapsedSeconds - targetPaceSeconds}s)`}
                      </span>
                    </span>
                  </div>

                  <div className="text-xs mt-2 leading-relaxed text-slate-800 space-y-1">
                    <strong className="text-slate-900 block font-bold">Por qué es correcta:</strong>
                    <StructuredExplanation content={question.why_correct} />
                  </div>
                </div>
              </div>

              {/* Immediate Chosen-Distractor Diagnosis when wrong */}
              {!isAnswerCorrect && selectedIdx !== null && pedagogy.forensicDistractors[selectedIdx] && (
                <div className="p-2.5 bg-white/95 rounded-lg border border-rose-300 text-xs text-rose-950">
                  <span className="text-[12px] font-bold text-rose-800 block mb-0.5">
                    Por qué tu opción elegida ({optionLetters[selectedIdx]}: &ldquo;{question.options[selectedIdx]}&rdquo;) era una trampa:
                  </span>
                  <p className="leading-relaxed text-slate-800">
                    {pedagogy.forensicDistractors[selectedIdx].reason}
                  </p>
                </div>
              )}

              {/* Resolved sentence preview */}
              <div className="p-2.5 bg-white/80 rounded-lg border border-slate-200 text-xs font-mono text-slate-900">
                <span className="text-[12px] font-sans font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  {hasBlankGap ? 'Frase completa resuelta:' : 'Respuesta verificada:'}
                </span>
                <span>
                  {hasBlankGap ? (
                    <>
                      {gapParts[0]}
                      <strong className="bg-emerald-200 text-emerald-950 px-1.5 py-0.5 rounded font-bold underline">
                        {question.options[question.answer]}
                      </strong>
                      {gapParts.slice(1).join(question.options[question.answer])}
                    </>
                  ) : (
                    <strong className="bg-emerald-200 text-emerald-950 px-1.5 py-0.5 rounded font-bold">
                      [{optionLetters[question.answer]}] {question.options[question.answer]}
                    </strong>
                  )}
                </span>
              </div>
            </div>

            {/* Detonador Visual de 3 Segundos + Radar Anti-Spanglish */}
            <div className={`grid grid-cols-1 gap-2.5 ${triggerRepeatsAnswer ? '' : 'md:grid-cols-2'}`}>
              {!triggerRepeatsAnswer && (
              <div className="p-3 bg-indigo-50/80 rounded-xl border border-indigo-200 text-xs text-indigo-950 flex items-start gap-2">
                <Zap className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-indigo-950 block mb-0.5">
                    Gatillo de 3 segundos
                  </span>
                  <span className="leading-relaxed text-indigo-900">
                    {pedagogy.triggerAnchor}
                  </span>
                </div>
              </div>
              )}

              <div className="p-3 bg-amber-50/90 rounded-xl border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-950 block mb-0.5">
                    Trampa típica en español
                  </span>
                  <span className="leading-relaxed text-amber-900">
                    {pedagogy.spanglishTrap}
                  </span>
                </div>
              </div>
            </div>

            {/* Paraphrase Mapping Box (Listening / Reading) */}
            {question.paraphrase_map && (
              <div className="p-3 bg-purple-50/80 rounded-xl border border-purple-200/90 text-xs text-purple-950 flex items-start gap-2.5 shadow-xs">
                <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-purple-900 block mb-0.5">
                    Mapa de Paráfrasis de Examen:
                  </span>
                  <span className="leading-relaxed text-purple-900/90 font-mono text-[12px] block mt-0.5">
                    {question.paraphrase_map}
                  </span>
                </div>
              </div>
            )}

            {/* Progressive Disclosure Toggle for All 4 Options Breakdown */}
            <button
              type="button"
              onClick={() => setShowForensicDetails(prev => !prev)}
              className="w-full py-2 px-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center justify-between transition-colors cursor-pointer"
            >
              <span>
                {showForensicDetails
                  ? 'Ocultar análisis de las 4 opciones'
                  : 'Ver por qué se descartan las demás opciones'}
              </span>
              {showForensicDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showForensicDetails && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 animate-in fade-in duration-150">
                <div className="space-y-1.5 text-xs text-slate-700">
                  {pedagogy.forensicDistractors.map((item, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded-lg border ${
                        item.isCorrect
                          ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950 font-medium'
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-start gap-1.5 flex-wrap">
                          <span className={`font-bold font-mono text-[12px] px-1.5 py-0.5 rounded shrink-0 ${
                            item.isCorrect ? 'bg-emerald-200/80 text-emerald-900' : 'bg-slate-100 text-slate-800'
                          }`}>
                            [{item.letter}]
                          </span>
                          <span className={`font-semibold text-xs leading-snug break-words ${item.isCorrect ? 'text-emerald-950' : 'text-slate-900'}`}>
                            {item.option}
                          </span>
                        </div>
                        <p className={`text-xs leading-relaxed pl-1 break-words ${item.isCorrect ? 'text-emerald-900 font-medium' : 'text-slate-600'}`}>
                          {item.reason}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Button */}
            {onNext && (
              <button
                type="button"
                onClick={onNext}
                className="w-full mt-2 hover:bg-[#FFD84F] flex items-center justify-center gap-2 transition-all active:scale-[0.98] min-h-[56px] rounded-[18px] bg-[#FFE07A] max-md:hover:bg-[#FFE07A] text-[#0E1830] text-[17px] font-semibold shadow-none"
              >
                <span>{isLastQuestion ? 'Finalizar Sesión' : 'Siguiente Pregunta'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Modal de Atajo Mental (Popover / Dialog en Modo Claro) */}
      {showShortcutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs animate-in fade-in max-md:items-end p-0">
          <div
            className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 max-md:rounded-b-none max-md:rounded-t-[28px] max-md:max-h-[88vh] pb-[env(safe-area-inset-bottom)]"
            role="dialog"
            aria-modal="true"
            aria-label={`Atajo mental: ${topicMeta?.titleEs || question.topic}`}
          >
            {/* Modal Header (Light-First Harmonized) */}
            <div className="px-5 py-4 bg-slate-50 flex items-center justify-between gap-3 border-b border-slate-200">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-2xs">
                  <Zap className="w-4 h-4 fill-slate-950" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 truncate">
                    Atajo 3s: {topicMeta?.titleEs || question.topic}
                  </h3>
                  <span className="text-[12px] text-slate-500 font-medium block">
                    Regla de decisión rápida para descartar opciones
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowShortcutModal(false)}
                className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Cerrar atajo mental"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scrollable */}
            <div className="p-5 overflow-y-auto space-y-4">
              {/* Mental Shortcut Banner */}
              <div className="bg-amber-500/10 border-2 border-amber-300 rounded-2xl p-4 flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-600 fill-amber-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-amber-900 block flex items-center gap-1">
                    <Brain className="w-3.5 h-3.5" />
                    Disparador Clave
                  </span>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {miniLesson?.mentalShortcut || pedagogy.triggerAnchor || miniLesson?.cheatSheetRule}
                  </p>
                </div>
              </div>

              {/* 3-Second Table if available */}
              {miniLesson?.threeSecondTable && (
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                  <div className="px-3.5 py-2.5 bg-indigo-50/70 border-b border-indigo-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                      <Table className="w-3.5 h-3.5 text-indigo-600" />
                      Tabla de Decisión de 3 Segundos
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                          {miniLesson.threeSecondTable.headers.map((h, i) => (
                            <th key={i} className="p-2.5 text-[12px] uppercase tracking-wider">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {miniLesson.threeSecondTable.rows.map((r, ri) => (
                          <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                            <td className="p-2.5 font-medium text-slate-900">{r[0]}</td>
                            <td className="p-2.5 font-bold text-indigo-700">{r[1]}</td>
                            <td className="p-2.5 text-slate-700 bg-amber-50/30">{r[2]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {miniLesson.threeSecondTable.rule && (
                    <div className="p-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-700 flex items-start gap-1.5">
                      <span className="font-bold text-slate-900 shrink-0">⚡ Regla:</span>
                      <span>{miniLesson.threeSecondTable.rule}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Analogy Card if available */}
              {miniLesson?.analogyCard && (
                <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/40 rounded-2xl border border-indigo-200 p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-950">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>Analogía: {miniLesson.analogyCard.title}</span>
                  </div>
                  <div className="bg-white/95 p-3 rounded-xl border border-indigo-100 shadow-2xs">
                    <StructuredExplanation content={miniLesson.analogyCard.metaphor} />
                  </div>
                  <div className="text-xs text-indigo-950 leading-relaxed flex items-start gap-1.5 pt-1">
                    <span className="font-bold text-indigo-900 shrink-0">¿Por qué funciona?:</span>
                    <span>{miniLesson.analogyCard.whyItWorks}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setShowShortcutModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
              >
                Volver a la pregunta (Esc)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

