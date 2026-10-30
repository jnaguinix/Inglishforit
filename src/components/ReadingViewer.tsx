import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Timer, CheckCircle2 } from 'lucide-react';
import { ReadingText } from '../types';
import { escapeRegExp } from '../utils/random';

interface ReadingViewerProps {
  readingText: ReadingText;
  evidenceQuote?: string;
  isAnswered: boolean;
}

export const ReadingViewer: React.FC<ReadingViewerProps> = ({
  readingText,
  evidenceQuote,
  isAnswered
}) => {
  const [seconds, setSeconds] = useState(0);
  const [scanQuery, setScanQuery] = useState('');
  const [isScanMode, setIsScanMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Render text with highlighting for evidenceQuote (including multi-segment quotes) or escaped scanQuery
  const renderHighlightedContent = () => {
    const content = readingText.text;

    // Post-answer evidence takes priority
    if (isAnswered && evidenceQuote) {
      const segments = evidenceQuote
        .split(/\s*\.\.\.\s*/)
        .map(s => s.trim())
        .filter(s => s.length > 2);

      if (segments.length > 0) {
        const pattern = segments.map(s => escapeRegExp(s)).join('|');
        const regex = new RegExp(`(${pattern})`, 'gi');
        const parts = content.split(regex);
        if (parts.length > 1) {
          const lowerSegments = segments.map(s => s.toLowerCase());
          return (
            <p className="whitespace-pre-line text-[16px] leading-[1.6] text-[#0E1830]">
              {parts.map((part, i) =>
                lowerSegments.includes(part.toLowerCase()) ? (
                  <mark key={i} className="bg-emerald-100 text-emerald-950 font-semibold px-1 py-0.5 rounded-sm border-b-2 border-emerald-500">
                    {part}
                  </mark>
                ) : (
                  <React.Fragment key={i}>{part}</React.Fragment>
                )
              )}
            </p>
          );
        }
      }
    }

    // Active scan search query with escaped RegExp
    const cleanQuery = scanQuery.trim();
    if (isScanMode && cleanQuery.length > 1) {
      const escaped = escapeRegExp(cleanQuery);
      const regex = new RegExp(`(${escaped})`, 'gi');
      const parts = content.split(regex);
      const lowerQuery = cleanQuery.toLowerCase();

      return (
        <p className="whitespace-pre-line text-[16px] leading-[1.6] text-[#0E1830]">
          {parts.map((part, i) =>
            part.toLowerCase() === lowerQuery ? (
              <mark key={i} className="bg-amber-200 text-amber-950 font-semibold px-1 py-0.5 rounded-sm">
                {part}
              </mark>
            ) : (
              <React.Fragment key={i}>{part}</React.Fragment>
            )
          )}
        </p>
      );
    }

    return (
      <p className="whitespace-pre-line text-[16px] leading-[1.6] text-[#0E1830]">
        {content}
      </p>
    );
  };

  return (
    <div className="rounded-2xl border-slate-200 mb-4 transition-all bg-transparent border-0 shadow-none p-0 max-md:mb-5">
      {/* Header with Title and Reading Timer */}
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div>
          <div className="flex items-center gap-1.5 mb-0.5 text-[14px] font-medium text-[#56607A]">
            <BookOpen className="w-3.5 h-3.5 text-blue-600 max-md:hidden" />
            <span>Texto Técnico (Reading · {readingText.wordCount} palabras)</span>
          </div>
          <h3 className="leading-snug font-display text-[22px] font-semibold tracking-[-0.015em] text-[#0E1830]">
            {readingText.title}
          </h3>
        </div>

        <div className="flex items-center gap-1 font-medium py-1 rounded-lg bg-transparent px-0 text-[15px] text-[#56607A]">
          <Timer className="w-3.5 h-3.5 text-slate-600" />
          <span className="font-mono tabular-nums">{formatTimer(seconds)}</span>
        </div>
      </div>

      {/* Scan Mode Toggle (R3 Objective Feature) */}
      <div className="flex items-center justify-between gap-2 mb-3 border-t border-slate-100 border-0 pt-0 max-md:mb-4">
        <button
          type="button"
          onClick={() => setIsScanMode(prev => !prev)}
          className={` font-semibold flex items-center gap-1.5 transition-colors min-h-[44px] rounded-full px-4 text-[14px] max-md:border max-md:border-[#0E1830]/15 max-md:bg-transparent ${
            isScanMode
              ? 'bg-amber-100 text-amber-900 border border-amber-300'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Search className="w-3.5 h-3.5" />
          <span>Modo Escaneo Rápido (Scan R3)</span>
        </button>

        {isAnswered && evidenceQuote && (
          <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Evidencia Resaltada</span>
          </div>
        )}
      </div>

      {/* Search Input for Scan Mode */}
      {isScanMode && (
        <div className="mb-3">
          <input
            type="text"
            value={scanQuery}
            onChange={(e) => setScanQuery(e.target.value)}
            placeholder="Buscar término clave en el texto (ej: tokens, boot, rollback, C++)..."
            className="w-full h-10 px-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
          />
        </div>
      )}

      {/* Main Text Content */}
      <div className="border max-h-72 overflow-y-auto bg-white rounded-[20px] border-[#0E1830]/10 p-4 max-md:max-h-[44vh]">
        {renderHighlightedContent()}
      </div>

      {/* Post-answer callout banner */}
      {isAnswered && evidenceQuote && (
        <div className="mt-3 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-start gap-2">
          <span className="font-bold shrink-0">Cita clave:</span>
          <span className="italic">"{evidenceQuote}"</span>
        </div>
      )}
    </div>
  );
};
