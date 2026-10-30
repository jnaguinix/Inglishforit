import React, { useEffect } from 'react';
import { Play, ArrowLeft } from 'lucide-react';

// Shared building blocks for full-screen lesson pages (grammar mini-lessons and L/R strategy lessons)

export const H2 = 'font-display text-[24px] font-semibold leading-tight tracking-[-0.02em] text-[#0E1830] mb-3';
export const CARD = 'bg-white border border-[#0E1830]/10 rounded-[20px] px-4 py-4';
export const NOTE = 'bg-[#FFE07A]/50 text-[#0E1830] rounded-[18px] px-4 py-3.5 text-[15px]';
export const DETAILS = 'group bg-white border border-[#0E1830]/10 rounded-[20px]';
export const SUMMARY = 'cursor-pointer list-none select-none px-4 py-3 min-h-[52px] flex items-center justify-between gap-2.5 font-semibold [&::-webkit-details-marker]:hidden';

export const PlusMinus: React.FC = () => (
  <span className="text-[#0E1830] text-[22px] leading-none" aria-hidden="true">
    <span className="group-open:hidden">+</span>
    <span className="hidden group-open:inline">–</span>
  </span>
);

interface LessonShellProps {
  label: string;
  title: string;
  ctaLabel: string;
  onCta: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

// Full-screen dialog with sticky header, single 640px reading column and a fixed practice button
export const LessonShell: React.FC<LessonShellProps> = ({ label, title, ctaLabel, onCta, onClose, children }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#F6F6F3] flex flex-col w-full h-[100dvh] overflow-hidden animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lesson-modal-title"
    >
      <header className="px-4 sm:px-6 py-3 border-b border-[#0E1830]/10 bg-[#F6F6F3]/92 backdrop-blur-xl shrink-0 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="max-w-[640px] mx-auto flex items-center gap-2">
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] -ml-2.5 text-[#0E1830] hover:bg-[#0E1830]/5 rounded-full flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar lección"
            title="Volver (Esc)"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="min-w-0">
            <small className="text-[13px] text-[#56607A] block leading-tight">{label}</small>
            <h1 id="lesson-modal-title" className="font-display text-[22px] font-semibold tracking-[-0.015em] text-[#0E1830] leading-tight line-clamp-2">
              {title}
            </h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
        <main className="max-w-[640px] mx-auto px-4 pt-6 pb-32 space-y-9 text-base leading-[1.55] text-[#0E1830]">
          {children}
        </main>
      </div>

      <div className="absolute left-0 right-0 bottom-0 px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] bg-gradient-to-b from-transparent to-[#F6F6F3] to-[35%]">
        <button
          onClick={onCta}
          className="w-full max-w-[640px] mx-auto min-h-[56px] rounded-[18px] bg-[#FFE07A] hover:bg-[#FFE07A] active:scale-[0.99] text-[#0E1830] font-semibold text-[17px] flex items-center justify-center gap-2.5 transition-transform cursor-pointer shadow-[0_18px_32px_-18px_rgba(14,24,48,0.5)]"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>{ctaLabel}</span>
        </button>
      </div>
    </div>
  );
};

// Dark "3-second shortcut" card: cue ➔ action rows, or a single line of text
export const ShortcutCard: React.FC<{ rows?: { cue: string; action: string }[] | null; text?: string }> = ({ rows, text }) => (
  <section className="bg-[#0E1830] text-white rounded-[28px] px-5 py-5 shadow-[0_28px_48px_-28px_rgba(14,24,48,0.6)]">
    <h2 className="font-display text-[24px] font-semibold leading-tight tracking-[-0.02em] mb-3">Atajo de 3 segundos</h2>
    {rows ? (
      rows.map((row, i) => (
        <div key={i} className={`flex gap-3 items-baseline py-2.5 ${i > 0 ? 'border-t border-white/15' : ''}`}>
          <span className="basis-[38%] shrink-0 text-sm text-white/65">{row.cue}</span>
          <span className="font-semibold">{row.action}</span>
        </div>
      ))
    ) : (
      <p className="font-semibold">{text}</p>
    )}
  </section>
);
