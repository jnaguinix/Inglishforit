import React, { useState } from 'react';
import { X, Search, BookOpen, Zap, ShieldAlert, Briefcase, Check, Sparkles, Brain, RotateCcw } from 'lucide-react';
import { B2_PATTERNS } from '../data/b2Patterns';
import { B2Pattern } from '../types';
import { StructuredExplanation } from '../utils/textFormatting';

interface PatternCheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PatternCheatSheetModal: React.FC<PatternCheatSheetModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'grammar' | 'vocab'>('all');
  const [activeDrillPatternId, setActiveDrillPatternId] = useState<string | null>(null);
  const [drillAnswers, setDrillAnswers] = useState<Record<string, number | null>>({});

  if (!isOpen) return null;

  const filteredPatterns = B2_PATTERNS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.humanName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.plainAnalogy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.threeSecondTrigger.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectDrillOption = (patternId: string, optionIdx: number) => {
    setDrillAnswers((prev) => ({ ...prev, [patternId]: optionIdx }));
  };

  const handleResetDrill = (patternId: string) => {
    setDrillAnswers((prev) => ({ ...prev, [patternId]: null }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Gimnasio de Patrones B2
              </h3>
              <p className="text-xs text-slate-500">
                {B2_PATTERNS.length} atajos visuales y equivalencias cotidianas para descartar opciones en segundos
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors shrink-0"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="px-5 py-3 border-b border-slate-200 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl shrink-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos ({B2_PATTERNS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('grammar')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'grammar'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gramática Clave ({B2_PATTERNS.filter(p => p.category === 'grammar').length})
            </button>
            <button
              onClick={() => setSelectedCategory('vocab')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'vocab'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Vocabulario & Phrasals ({B2_PATTERNS.filter(p => p.category === 'vocab').length})
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar patrón, trampa o palabra..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Content Body: Scrollable Cards */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 bg-slate-50/50">
          {filteredPatterns.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              No se encontraron patrones que coincidan con "{searchTerm}".
            </div>
          ) : (
            filteredPatterns.map((pat: B2Pattern, index) => {
              const isDrillActive = activeDrillPatternId === pat.id;
              const selectedOpt = drillAnswers[pat.id];
              const isAnswered = selectedOpt !== undefined && selectedOpt !== null;
              const isCorrect = isAnswered && selectedOpt === pat.fastDrill.answer;

              return (
                <div
                  key={pat.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-5 transition-all hover:border-slate-300"
                >
                  {/* Card Title & Tag Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center font-mono">
                        {index + 1}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {pat.humanName}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono text-slate-600 font-semibold">{pat.topicId}</span>
                      <span aria-hidden="true">·</span>
                      <span>{pat.title}</span>
                    </div>
                  </div>

                  {/* Plain Analogy */}
                  <div className="mb-3 text-xs leading-relaxed text-slate-800 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-sky-800">
                      <BookOpen className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>Cómo entenderlo en la vida real:</span>
                    </div>
                    <div className="pl-5 text-slate-700 text-[12.5px]">
                      <StructuredExplanation content={pat.plainAnalogy} />
                    </div>
                  </div>

                  {/* 3-Second Trigger & Spanglish Trap Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-200 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-indigo-950">
                        <Zap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span>Detonador de 3 Segundos:</span>
                      </div>
                      <p className="text-indigo-900/90 leading-relaxed pl-5 whitespace-pre-line">
                        {pat.threeSecondTrigger}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-amber-950">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Radar Anti-Spanglish:</span>
                      </div>
                      <p className="text-amber-900/90 leading-relaxed pl-5 whitespace-pre-line">
                        {pat.spanglishTrap}
                      </p>
                    </div>
                  </div>

                  {/* Workplace Tech Application */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 mb-3">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800">
                      <Briefcase className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span>En tu Día a Día Tech ({pat.workplaceExample.scenario}):</span>
                    </div>
                    <div className="pl-5 space-y-0.5">
                      <div className="font-mono text-[11.5px] text-slate-900 bg-white p-2 rounded-lg border border-slate-200">
                        "{pat.workplaceExample.en}"
                      </div>
                      <div className="text-slate-500 text-[12px] italic">
                        {pat.workplaceExample.es}
                      </div>
                    </div>
                  </div>

                  {/* Interactive Micro-Drill Toggle */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-[12px] text-slate-500 font-medium">
                      ¿Quieres comprobar si te quedó grabado?
                    </span>
                    <button
                      onClick={() => setActiveDrillPatternId(isDrillActive ? null : pat.id)}
                      className="px-3 py-1.5 rounded-lg border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{isDrillActive ? 'Ocultar Micro-Reto' : 'Probar Reto de 10 Segundos'}</span>
                    </button>
                  </div>

                  {/* Drill Container */}
                  {isDrillActive && (
                    <div className="mt-3 p-3.5 rounded-xl bg-purple-50/70 border border-purple-200 text-slate-900 text-xs space-y-3 animate-in fade-in duration-150">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-purple-900">
                          Micro-Reto Rápido:
                        </span>
                        {isAnswered && (
                          <button
                            onClick={() => handleResetDrill(pat.id)}
                            className="text-[12px] text-purple-700 hover:text-purple-950 flex items-center gap-1 font-semibold"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Reintentar</span>
                          </button>
                        )}
                      </div>

                      <p className="text-sm font-semibold text-slate-900">
                        {pat.fastDrill.stem}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {pat.fastDrill.options.map((opt, optIdx) => {
                          const isOptionSelected = selectedOpt === optIdx;
                          const isOptionCorrect = optIdx === pat.fastDrill.answer;

                          let btnStyle = 'bg-white hover:bg-purple-100/60 text-slate-800 border-purple-200';
                          if (isAnswered) {
                            if (isOptionCorrect) {
                              btnStyle = 'bg-emerald-50 text-emerald-950 font-bold border-emerald-400 ring-1 ring-emerald-400';
                            } else if (isOptionSelected) {
                              btnStyle = 'bg-rose-50 text-rose-950 font-bold border-rose-400 ring-1 ring-rose-400';
                            } else {
                              btnStyle = 'bg-white/60 text-slate-400 border-slate-200 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectDrillOption(pat.id, optIdx)}
                              disabled={isAnswered}
                              className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-center justify-between gap-2 ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {isAnswered && isOptionCorrect && <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <div className={`p-2.5 rounded-lg border text-xs leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                            : 'bg-rose-50 border-rose-200 text-rose-950'
                        }`}>
                          <strong className="block mb-0.5 font-bold">
                            {isCorrect ? '¡Excelente! Patrón reconocido:' : 'Atención al patrón:'}
                          </strong>
                          {pat.fastDrill.quickWhy}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-slate-200 bg-white flex items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500">
            Tip: Revisa 3 patrones al día durante 5 minutos para fijarlos permanentemente.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow-xs"
          >
            Cerrar Gimnasio
          </button>
        </div>
      </div>
    </div>
  );
};
