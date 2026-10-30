import React, { useState } from 'react';
import { X, Search, ShieldAlert, Sparkles, Check, RotateCcw, AlertTriangle, ArrowRight, Zap, BookOpen } from 'lucide-react';
import { FALSE_FRIENDS_DATA, FalseFriendEntry } from '../data/falseFriends';
import { StructuredExplanation } from '../utils/textFormatting';

interface FalseFriendsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartSprint?: (entries: FalseFriendEntry[]) => void;
}

export const FalseFriendsModal: React.FC<FalseFriendsModalProps> = ({
  isOpen,
  onClose,
  onStartSprint
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cognate' | 'preposition'>('all');
  const [activeDrillId, setActiveDrillId] = useState<string | null>(null);
  const [drillSelections, setDrillSelections] = useState<Record<string, number | null>>({});

  if (!isOpen) return null;

  const filteredEntries = FALSE_FRIENDS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.realItMeaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.literalSpanishTrap.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.goldenRule.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectOption = (entryId: string, optIdx: number) => {
    setDrillSelections(prev => ({ ...prev, [entryId]: optIdx }));
  };

  const handleResetDrill = (entryId: string) => {
    setDrillSelections(prev => ({ ...prev, [entryId]: null }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-xs shrink-0 font-bold">
              <ShieldAlert className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  Radar Anti-Spanglish y Falsos Amigos TI
                </h3>
                <span className="text-[12px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  B2 EIT-01
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                {FALSE_FRIENDS_DATA.length} trampas críticas de interferencia L1 (español → inglés) que penalizan en el examen oficial
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="px-5 py-3 border-b border-slate-200 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos ({FALSE_FRIENDS_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('cognate')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'cognate'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Falsos Cognados ({FALSE_FRIENDS_DATA.filter(f => f.category === 'cognate').length})
            </button>
            <button
              onClick={() => setSelectedCategory('preposition')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'preposition'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Preposiciones Técnicas ({FALSE_FRIENDS_DATA.filter(f => f.category === 'preposition').length})
            </button>
          </div>

          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar trampa (compromise, actual, rely on)..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 bg-slate-50/60">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              No se encontraron trampas para "{searchTerm}".
            </div>
          ) : (
            filteredEntries.map((item, index) => {
              const isDrillOpen = activeDrillId === item.id;
              const selectedOpt = drillSelections[item.id];
              const isAnswered = selectedOpt !== undefined && selectedOpt !== null;
              const isCorrect = isAnswered && selectedOpt === item.fastDrill.answer;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-5 transition-all hover:border-slate-300 space-y-3"
                >
                  {/* Top Bar: Word & Category */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                        {index + 1}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 font-mono">
                        {item.term}
                      </h4>
                    </div>
                    <span className="text-[12px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {item.category === 'cognate' ? 'Falso Cognado' : 'Preposición Dependiente'}
                    </span>
                  </div>

                  {/* Contrast Grid: Spanish Trap vs Real IT Meaning */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-rose-950">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>Trampa del Español (Error típico):</span>
                      </div>
                      <p className="text-rose-900 leading-relaxed pl-5">
                        {item.literalSpanishTrap}
                      </p>
                      <div className="pl-5 pt-1 text-[12px] text-rose-800/90 font-medium">
                        💡 Cómo se dice en inglés: <strong className="text-rose-950">{item.howToSayLiteralInEnglish}</strong>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Significado Real en TI / Examen:</span>
                      </div>
                      <p className="text-emerald-900 leading-relaxed pl-5 font-medium">
                        {item.realItMeaning}
                      </p>
                    </div>
                  </div>

                  {/* Golden Rule Anchor */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-300 text-xs text-amber-950 flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 fill-amber-500" />
                    <div>
                      <span className="font-bold text-amber-900 block mb-0.5">
                        ⚡ Regla de Decisión Rápida (3 Segundos):
                      </span>
                      <span className="leading-relaxed font-semibold">
                        {item.goldenRule}
                      </span>
                    </div>
                  </div>

                  {/* Workplace Real Example */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800">
                      <BookOpen className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span>Contexto Técnico en Producción:</span>
                    </div>
                    <div className="pl-5 space-y-1">
                      <div className="font-mono text-slate-900 bg-white p-2.5 rounded-lg border border-slate-200 leading-relaxed">
                        "{item.workplaceExample.en}"
                      </div>
                      <div className="text-slate-600 italic text-[12px]">
                        {item.workplaceExample.es}
                      </div>
                    </div>
                  </div>

                  {/* Micro-Drill Toggle */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-[12px] text-slate-500">
                      ¿Quieres verificar que no caerás en esta trampa?
                    </span>
                    <button
                      onClick={() => setActiveDrillId(isDrillOpen ? null : item.id)}
                      className="px-3 py-1.5 rounded-lg border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{isDrillOpen ? 'Ocultar Reto' : 'Probar Reto Rápido'}</span>
                    </button>
                  </div>

                  {/* Micro-Drill Panel */}
                  {isDrillOpen && (
                    <div className="mt-2 p-3.5 rounded-xl bg-purple-50/70 border border-purple-200 text-slate-900 text-xs space-y-3 animate-in fade-in duration-150">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-purple-900 flex items-center gap-1.5">
                          <span>🎯 Pregunta de Calibración Anti-Trampa:</span>
                        </span>
                        {isAnswered && (
                          <button
                            onClick={() => handleResetDrill(item.id)}
                            className="text-[12px] text-purple-700 hover:text-purple-950 flex items-center gap-1 font-semibold cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Reintentar</span>
                          </button>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        {item.fastDrill.stem}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.fastDrill.options.map((opt, optIdx) => {
                          const isOptSelected = selectedOpt === optIdx;
                          const isOptCorrect = optIdx === item.fastDrill.answer;

                          let btnStyle = 'bg-white hover:bg-purple-100/60 text-slate-800 border-purple-200';
                          if (isAnswered) {
                            if (isOptCorrect) {
                              btnStyle = 'bg-emerald-50 text-emerald-950 font-bold border-emerald-400 ring-1 ring-emerald-400';
                            } else if (isOptSelected) {
                              btnStyle = 'bg-rose-50 text-rose-950 font-bold border-rose-400 ring-1 ring-rose-400';
                            } else {
                              btnStyle = 'bg-white/60 text-slate-400 border-slate-200 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(item.id, optIdx)}
                              disabled={isAnswered}
                              className={`p-2.5 rounded-xl border text-left text-xs transition-colors flex items-center justify-between gap-2 cursor-pointer ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {isAnswered && isOptCorrect && <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <div className={`p-2.5 rounded-xl border text-xs leading-relaxed ${
                          isCorrect
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                            : 'bg-rose-50 border-rose-200 text-rose-950'
                        }`}>
                          <strong className="block mb-0.5 font-bold">
                            {isCorrect ? '✅ ¡Correcto! Dominaste la trampa:' : '❌ Ojo con la interferencia:'}
                          </strong>
                          {item.fastDrill.quickWhy}
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
          <span className="text-xs text-slate-500 hidden sm:block">
            Meta: Repasar estas 16 trampas antes del examen oficial garantiza no perder puntos por traducción literal.
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
          >
            Cerrar Radar Anti-Spanglish
          </button>
        </div>
      </div>
    </div>
  );
};
