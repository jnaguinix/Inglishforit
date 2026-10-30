import React from 'react';
import {
  Check,
  Flame,
  Award,
  Target,
  TrendingUp,
  Play
} from 'lucide-react';
import { ExamSection, TopicId } from '../types';
import { StorageService } from '../services/storage';
import { TOPICS } from '../config/taxonomy';

interface ProgressViewProps {
  onStartErrorReview?: () => void;
  onStartTopicPractice?: (topicId: TopicId) => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  onStartErrorReview,
  onStartTopicPractice
}) => {
  const attempts = StorageService.getAttempts();
  const allTopicStats = StorageService.getAllTopicStats();
  const errorCards = StorageService.getErrorCards();
  const dueErrorCards = StorageService.getDueErrorCards();

  const masteredCount = Object.values(allTopicStats).filter(s => s.isMastered).length;
  const attemptsCount = attempts.length;
  const correctCount = attempts.filter(a => a.isCorrect).length;
  const globalAccuracy = attemptsCount > 0 ? Math.round((correctCount / attemptsCount) * 100) : 0;

  // Section scores
  const sectionStats: Record<ExamSection, { correct: number; total: number; pct: number }> = {
    UE: { correct: 0, total: 0, pct: 0 },
    L: { correct: 0, total: 0, pct: 0 },
    R: { correct: 0, total: 0, pct: 0 }
  };

  attempts.forEach(a => {
    sectionStats[a.section].total++;
    if (a.isCorrect) sectionStats[a.section].correct++;
  });

  (['UE', 'L', 'R'] as ExamSection[]).forEach(s => {
    const item = sectionStats[s];
    item.pct = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0;
  });

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 pb-28 md:pb-12 pt-4 space-y-8">
      <h2 className="sr-only">Progreso y repaso</h2>

      {/* Top 4 KPI Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-md:gap-x-8 max-md:gap-y-0 border-t border-[#0E1830]/10">
        <div className="p-4 border bg-transparent border-x-0 border-t-0 border-[#0E1830]/10 rounded-none shadow-none px-0 py-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-[14px] font-medium text-[#56607A]">Total Respuestas</span>
            <Target className="hidden" />
          </div>
          <span className="block font-display text-[40px] font-semibold leading-none tracking-[-0.02em] text-slate-900">
            {attemptsCount}
          </span>
          <span className="mt-1 block text-[13px] text-[#56607A] max-md:mt-2">
            {correctCount} correctas
          </span>
        </div>

        <div className="p-4 border bg-transparent border-x-0 border-t-0 border-[#0E1830]/10 rounded-none shadow-none px-0 py-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-[14px] font-medium text-[#56607A]">Precisión Global</span>
            <TrendingUp className="hidden" />
          </div>
          <span className={`block font-mono text-2xl font-bold max-md:font-display max-md:text-[40px] max-md:font-semibold max-md:leading-none max-md:tracking-[-0.02em] ${
            globalAccuracy >= 70 ? 'text-emerald-700' : 'text-slate-900'
          }`}>
            {globalAccuracy > 0 ? `${globalAccuracy}%` : (<><span className="md:hidden text-[20px] font-medium text-[#8D94A8]">Sin datos</span><span className="hidden md:inline">—</span></>)}
          </span>
          <span className="mt-1 block text-[13px] text-[#56607A] max-md:mt-2">
            Corte examen: ≥70%
          </span>
        </div>

        <div className="p-4 border bg-transparent border-x-0 border-t-0 border-[#0E1830]/10 rounded-none shadow-none px-0 py-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-[14px] font-medium text-[#56607A]">Temas Dominados</span>
            <Award className="hidden" />
          </div>
          <span className="block font-display text-[40px] font-semibold leading-none tracking-[-0.02em] text-emerald-700">
            {masteredCount} <span className="text-sm text-slate-400 font-normal">/ {Object.keys(TOPICS).length}</span>
          </span>
          <span className="mt-1 block text-[13px] text-[#56607A] max-md:mt-2">
            Criterio: ≥85% en 2 días
          </span>
        </div>

        <div className="p-4 border bg-transparent border-x-0 border-t-0 border-[#0E1830]/10 rounded-none shadow-none px-0 py-5">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-[14px] font-medium text-[#56607A]">En Repaso Espaciado</span>
            <Flame className="hidden" />
          </div>
          <span className="block font-display text-[40px] font-semibold leading-none tracking-[-0.02em] text-rose-600">
            {errorCards.length}
          </span>
          <span className="mt-1 block text-[13px] text-[#56607A] max-md:mt-2">
            {dueErrorCards.length} vencidas ahora · 10m-14d
          </span>
        </div>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (5 cols): Section Performance & Error Bank */}
        <div className="lg:col-span-5 space-y-6">
          {/* Sections vs 70% threshold */}
          <div className="border p-5 bg-transparent border-x-0 border-b-0 border-[#0E1830]/10 rounded-none shadow-none px-0 pb-0 pt-7 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 border-0 pb-0 max-md:gap-3">
              <span className=" font-display text-[22px] font-semibold  tracking-[-0.02em] text-[#0E1830]">
                Rendimiento por Sección
              </span>
              <span className="px-2 py-0.5 rounded border-blue-100 bg-transparent border-0 p-0 text-[14px] font-medium text-[#56607A] max-md:whitespace-nowrap">
                Meta: ≥70%
              </span>
            </div>

            {(['UE', 'L', 'R'] as ExamSection[]).map(s => {
              const st = sectionStats[s];
              const name = s === 'UE' ? 'Use of English' : s === 'L' ? 'Listening' : 'Reading';
              const ok = st.pct >= 70;

              return (
                <div key={s} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-900">{name}</span>
                    <span className={`font-mono font-bold ${
                      st.total === 0 ? 'text-slate-400' : ok ? 'text-emerald-700' : 'text-rose-600'
                    }`}>
                      {st.total === 0 ? 'Sin intentos' : `${st.correct}/${st.total} (${st.pct}%)`}
                    </span>
                  </div>
                  <div className="relative w-full h-3.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        st.total === 0 ? 'bg-slate-200' : ok ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${st.pct}%` }}
                    />
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-slate-900 z-10"
                      style={{ left: '70%' }}
                      title="Línea de aprobación 70%"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Spaced Repetition Error Bank Summary */}
          <div className="border p-5 space-y-3 bg-transparent border-x-0 border-b-0 border-[#0E1830]/10 rounded-none shadow-none px-0 pb-0 pt-7">
            <div className="flex items-center justify-between">
              <span className=" font-display text-[22px] font-semibold  tracking-[-0.02em] text-[#0E1830] flex items-center gap-1.5">
                <Flame className="hidden" />
                <span>Banco de Errores Activo (SRS)</span>
              </span>
              <span className="font-mono font-bold text-rose-600 px-2 py-0.5 rounded border-rose-100 bg-transparent border-0 p-0 text-[14px]">
                {errorCards.length} en ciclo ({dueErrorCards.length} hoy)
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Las preguntas que fallas entran automáticamente en un ciclo de repaso con intervalos crecientes (10 min, 1, 3, 7 y 14 días).
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Se gradúan al acertarlas 5 veces seguidas.</span>
            </div>

            {errorCards.length > 0 && onStartErrorReview && (
              <button
                onClick={onStartErrorReview}
                className="w-full mt-1 hover:bg-[#1B2A4D] text-white flex items-center justify-center gap-2 transition-colors cursor-pointer min-h-[52px] rounded-[16px] bg-[#0E1830] text-[15px] font-semibold shadow-none"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>
                  Repasar Banco de Errores ({dueErrorCards.length > 0 ? `${dueErrorCards.length} vencidas` : `${errorCards.length} en cola`})
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column (7 cols): Full Topics Heatmap Matrix */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border p-5 sm:p-6 space-y-4 bg-transparent border-x-0 border-b-0 border-[#0E1830]/10 rounded-none shadow-none px-0 pb-0 pt-7">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className=" font-display text-[22px] font-semibold  tracking-[-0.02em] text-[#0E1830]">
                Mapa de Calor de Temas (G01-G29 & V01-V08)
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                {Object.keys(TOPICS).length} Temas Oficiales · Clic para entrenar
              </span>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-emerald-500 shrink-0" />
                <span>Dominado (≥85% / 2 d)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-blue-500 shrink-0" />
                <span>En progreso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-rose-400 shrink-0" />
                <span>Débil (&lt;70%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-slate-200 shrink-0" />
                <span>Sin evaluar</span>
              </div>
            </div>

            {/* Heatmap Grid in Generous Multi-Column Grid (scales to 8 columns on large desktop monitors) */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-2.5 pt-1">
              {Object.values(TOPICS).map(t => {
                const stats = allTopicStats[t.id];
                let bg = 'bg-slate-100 text-slate-600 border-slate-200 hover:border-blue-300';

                if (stats?.isMastered) {
                  bg = 'bg-emerald-500 text-white border-emerald-600 font-bold shadow-xs';
                } else if (stats?.attempts > 0 && stats?.accuracy < 70) {
                  bg = 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
                } else if (stats?.attempts > 0) {
                  bg = 'bg-blue-100 text-blue-800 border-blue-300 font-bold';
                }

                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => onStartTopicPractice && onStartTopicPractice(t.id)}
                    title={`${t.code}: ${t.titleEs} (${stats?.attempts > 0 ? `${stats.accuracy}% en ${stats.attempts} resp.` : 'Sin evaluar'}) — Clic para practicar`}
                    className={`p-2.5 rounded-xl border text-center text-xs transition-all hover:scale-105 cursor-pointer ${bg}`}
                  >
                    <div className="font-mono text-xs font-bold leading-tight">{t.code}</div>
                    <div className="text-[12px] opacity-80 leading-none mt-1 truncate">
                      {stats?.attempts > 0 ? `${stats.accuracy}%` : '—'}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="text-[12px] text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span>Haz clic en cualquier celda del mapa para entrenar ese tema directamente.</span>
              <span className="font-mono font-medium">{masteredCount} dominados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


