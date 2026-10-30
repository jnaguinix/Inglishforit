import React from 'react';
import { Code2, Sparkles, AlertTriangle, CheckCircle, Info, BookOpen } from 'lucide-react';

interface FormattedPoint {
  num?: string;
  badge?: string;
  title?: string;
  body: string;
}

/**
 * Parses a paragraph with numbered sections (e.g. "1) ... 2) ...")
 * or bullet points (e.g. "• Fórmula: ... • Ejemplo: ...")
 * and renders visually separated, comfortable-to-read cards with badges and bold subtitles.
 */
export const StructuredExplanation: React.FC<{
  content: string;
  className?: string;
  variant?: 'default' | 'compact' | 'indigo' | 'slate';
}> = ({ content, className = '', variant = 'default' }) => {
  if (!content) return null;

  // Check if content has numbered points like "1) Title: ... 2) Title: ..." or "1. Title: ..."
  if (/\b\d+[\.\)]\s+/.test(content)) {
    const rawParts = content.split(/(?=\b\d+[\.\)]\s+)/).map(s => s.trim()).filter(Boolean);
    const intro = !rawParts[0].match(/^\d+[\.\)]/) ? rawParts.shift() : null;

    return (
      <div className={`space-y-2.5 ${className}`}>
        {intro && (
          <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed mb-2">
            {intro}
          </p>
        )}
        <div className="space-y-2">
          {rawParts.map((part, idx) => {
            const m = part.match(/^(\d+)[\.\)]\s*(?:([^:\(]+)(?:\(([^\)]+)\)|:))?\s*(.*)$/s);
            const num = m ? m[1] : `${idx + 1}`;
            const title = m && m[2] ? m[2].trim() : `Caso ${num}`;
            const extraTag = m && m[3] ? m[3].trim() : '';
            const body = m && m[4] ? m[4].trim() : part.replace(/^\d+[\.\)]\s*/, '');

            return (
              <div
                key={idx}
                className="p-3 bg-white/95 rounded-xl border border-slate-200/90 shadow-2xs space-y-1.5 transition-all hover:border-slate-300"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-[12px] font-bold inline-flex items-center justify-center shrink-0">
                    {num}
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    {title}
                  </span>
                  {extraTag && (
                    <span className="text-[12px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200/70 px-1.5 py-0.5 rounded">
                      {extraTag}
                    </span>
                  )}
                </div>

                <div className="pl-7">
                  {renderBulletOrPlainBody(body)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Check if content has bullet points "• "
  if (content.includes('• ') || content.includes('\n• ')) {
    return (
      <div className={`space-y-2 ${className}`}>
        {renderBulletOrPlainBody(content)}
      </div>
    );
  }

  // Fallback plain paragraph with comfortable styling
  return (
    <div className={`text-xs sm:text-sm leading-relaxed text-slate-800 ${className}`}>
      {renderHighlightedText(content)}
    </div>
  );
};

/**
 * Helper to split text by "• " and render each as a themed card (Formula, Example, Trap, Rule).
 */
export const renderBulletOrPlainBody = (body: string): React.ReactNode => {
  if (!body.includes('• ') && !body.includes('\n• ')) {
    return (
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        {renderHighlightedText(body)}
      </p>
    );
  }

  const parts = body.split(/(?=•\s*)/g).map(s => s.trim()).filter(Boolean);
  const intro = !parts[0].startsWith('•') ? parts.shift() : null;

  return (
    <div className="space-y-2">
      {intro && (
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {renderHighlightedText(intro)}
        </p>
      )}
      <div className="space-y-2">
        {parts.map((p, idx) => {
          const clean = p.replace(/^•\s*/, '').trim();
          const colonIdx = clean.indexOf(':');

          if (colonIdx > 0 && colonIdx < 40) {
            const label = clean.substring(0, colonIdx).trim();
            const rest = clean.substring(colonIdx + 1).trim();

            const isFormula = /f[óo]rmula|estructura|patr[óo]n/i.test(label);
            const isExample = /ejemplo|caso/i.test(label);
            const isRule = /regla|condici[óo]n|atenci[óo]n/i.test(label);
            const isTrap = /trampa|error|falso amigo|❌/i.test(label);
            const isSuccess = /correcto|soluci[óo]n|✅/i.test(label);

            let boxStyle = 'bg-slate-50/70 border-slate-200 text-slate-800';
            let badgeStyle = 'bg-slate-200 text-slate-800 border-slate-300';
            let Icon = Info;

            if (isFormula) {
              boxStyle = 'bg-indigo-50/70 border-indigo-200 text-indigo-950';
              badgeStyle = 'bg-indigo-100 text-indigo-800 border-indigo-200 font-bold';
              Icon = Code2;
            } else if (isExample) {
              boxStyle = 'bg-emerald-50/60 border-emerald-200 text-emerald-950';
              badgeStyle = 'bg-emerald-100 text-emerald-800 border-emerald-200 font-bold';
              Icon = Sparkles;
            } else if (isTrap) {
              boxStyle = 'bg-rose-50/70 border-rose-200 text-rose-950';
              badgeStyle = 'bg-rose-100 text-rose-800 border-rose-200 font-bold';
              Icon = AlertTriangle;
            } else if (isRule) {
              boxStyle = 'bg-amber-50/70 border-amber-200 text-amber-950';
              badgeStyle = 'bg-amber-100 text-amber-800 border-amber-200 font-bold';
              Icon = BookOpen;
            } else if (isSuccess) {
              boxStyle = 'bg-emerald-50/70 border-emerald-200 text-emerald-950';
              badgeStyle = 'bg-emerald-100 text-emerald-800 border-emerald-200 font-bold';
              Icon = CheckCircle;
            }

            return (
              <div
                key={idx}
                className={`p-2.5 sm:p-3 rounded-xl border ${boxStyle} text-xs sm:text-sm space-y-1.5 shadow-2xs transition-all`}
              >
                <div className="flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className={`inline-block text-[12px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeStyle}`}>
                    {label}
                  </span>
                </div>
                <div className={`leading-relaxed pl-1 ${
                  isFormula
                    ? 'font-mono text-indigo-950 font-medium text-xs sm:text-[13px] bg-white/70 p-2 rounded-lg border border-indigo-100'
                    : 'text-slate-800'
                }`}>
                  {renderHighlightedText(rest)}
                </div>
              </div>
            );
          }

          // Bullet with no clear colon header
          const isNegative = clean.startsWith('❌') || /error|incorrecto/i.test(clean);
          const isPositive = clean.startsWith('✅') || /correcto/i.test(clean);

          return (
            <div
              key={idx}
              className={`p-2.5 rounded-xl border text-xs sm:text-sm leading-relaxed flex items-start gap-2 ${
                isNegative
                  ? 'bg-rose-50/60 border-rose-200 text-rose-900'
                  : isPositive
                  ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              <span className="shrink-0 mt-0.5 text-xs">
                {isNegative ? '❌' : isPositive ? '✅' : '•'}
              </span>
              <span>{renderHighlightedText(clean.replace(/^[❌✅•]\s*/, ''))}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * Highlights bracketed syntax formulas e.g. [MODAL + BE + V3], quotes "...", and italic asterisks *...*
 */
export const renderHighlightedText = (text: string): React.ReactNode => {
  if (!text) return null;

  // Split by brackets e.g. [MODAL + BE + V3]
  const parts = text.split(/(\[[^\]]+\])/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('[') && part.endsWith(']')) {
          return (
            <span
              key={i}
              className="font-mono font-bold text-indigo-900 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded text-[12px] sm:text-xs mx-0.5"
            >
              {part}
            </span>
          );
        }

        // Inside plain text, highlight quoted phrases "..."
        const quoteParts = part.split(/("[^"]+")/g);
        return (
          <React.Fragment key={i}>
            {quoteParts.map((qPart, qi) => {
              if (qPart.startsWith('"') && qPart.endsWith('"')) {
                return (
                  <span
                    key={qi}
                    className="font-mono text-slate-900 font-medium bg-slate-100/90 px-1 py-0.5 rounded text-[12px] sm:text-xs"
                  >
                    {qPart}
                  </span>
                );
              }
              return qPart;
            })}
          </React.Fragment>
        );
      })}
    </>
  );
};
