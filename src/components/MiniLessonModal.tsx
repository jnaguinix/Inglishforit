import React, { useMemo } from 'react';
import { MiniLesson, LessonExample } from '../types';
import { TOPICS } from '../config/taxonomy';
import { escapeRegExp } from '../utils/random';
import { StructuredExplanation } from '../utils/textFormatting';
import { H2, CARD, NOTE, DETAILS, SUMMARY, PlusMinus, LessonShell, ShortcutCard } from './lessonUi';

interface MiniLessonModalProps {
  lesson: MiniLesson;
  onStartPractice: () => void;
  onClose: () => void;
}

interface ParsedFormulaItem {
  id: string;
  badge?: string;
  title: string;
  pattern: string;
}

interface ParsedSummaryPoint {
  num?: string;
  title?: string;
  body: string;
}

export const MiniLessonModal: React.FC<MiniLessonModalProps> = ({
  lesson,
  onStartPractice,
  onClose
}) => {
  const meta = TOPICS[lesson.topicId];

  // Clean, uncluttered title
  const cleanTitle = useMemo(() => {
    const raw = lesson.titleEs || '';
    if (raw.includes(':')) {
      return raw.split(':')[0].trim();
    }
    return raw;
  }, [lesson.titleEs]);

  // Parse formulas into structured modular items
  const parsedFormulas = useMemo<ParsedFormulaItem[]>(() => {
    const raw = lesson.formula || '';
    if (!raw) return [];

    // Check if numbered: "1. Name: Formula\n2. Name: Formula" or inline "1. ... 2. ..."
    if (/\b\d+[\.\)]\s+/.test(raw)) {
      const rawItems = raw.split(/(?=\b\d+[\.\)]\s+)/).map(s => s.trim()).filter(Boolean);
      if (rawItems.length > 1) {
        return rawItems.map((item, idx) => {
          const m = item.match(/^(\d+)[\.\)]\s*(?:([^:]+):)?\s*(.*)$/s);
          const num = m ? m[1] : `${idx + 1}`;
          const name = m && m[2] ? m[2].trim() : `Estructura ${num}`;
          const pattern = m && m[3] ? m[3].trim() : item;
          return {
            id: `struct-${num}`,
            badge: `Estructura ${num}`,
            title: name,
            pattern
          };
        });
      }
    }

    // Check if split by newlines
    const lines = raw.split(/\n+/).map(l => l.trim()).filter(Boolean);
    if (lines.length > 1) {
      return lines.map((line, idx) => {
        const parts = line.split(':');
        if (parts.length > 1) {
          return {
            id: `line-${idx + 1}`,
            badge: `Estructura ${idx + 1}`,
            title: parts[0].trim(),
            pattern: parts.slice(1).join(':').trim()
          };
        }
        return {
          id: `line-${idx + 1}`,
          badge: `Patrón ${idx + 1}`,
          title: `Estructura ${idx + 1}`,
          pattern: line
        };
      });
    }

    // Check if split by ' // '
    if (raw.includes(' // ')) {
      return raw.split(' // ').map((item, idx) => {
        const parts = item.split(':');
        if (parts.length > 1) {
          return {
            id: `var-${idx + 1}`,
            badge: `Variante ${idx + 1}`,
            title: parts[0].trim(),
            pattern: parts.slice(1).join(':').trim()
          };
        }
        return {
          id: `var-${idx + 1}`,
          badge: `Variante ${idx + 1}`,
          title: `Patrón ${idx + 1}`,
          pattern: item.trim()
        };
      });
    }

    // Check if split by '  |  '
    if (raw.includes('  |  ')) {
      return raw.split('  |  ').map((item, idx) => {
        const parts = item.split(':');
        if (parts.length > 1) {
          return {
            id: `var-${idx + 1}`,
            badge: `Forma ${idx + 1}`,
            title: parts[0].trim(),
            pattern: parts.slice(1).join(':').trim()
          };
        }
        return {
          id: `var-${idx + 1}`,
          badge: `Forma ${idx + 1}`,
          title: `Estructura ${idx + 1}`,
          pattern: item.trim()
        };
      });
    }

    // Check if split by '  vs  '
    if (raw.includes('  vs  ')) {
      return raw.split('  vs  ').map((item, idx) => {
        return {
          id: `vs-${idx + 1}`,
          badge: idx === 0 ? 'Opción A' : 'Opción B (Contraste)',
          title: idx === 0 ? 'Estructura Principal' : 'Estructura de Contraste',
          pattern: item.trim()
        };
      });
    }

    return [{
      id: 'single',
      badge: 'Fórmula',
      title: 'Estructura Base',
      pattern: raw.trim()
    }];
  }, [lesson.formula]);

  // Parse Summary text into structured introductory text and numbered points
  const parsedSummary = useMemo<{ intro: string; points: ParsedSummaryPoint[] }>(() => {
    const raw = lesson.summaryEs || '';
    if (!raw) return { intro: '', points: [] };

    // Separate intro paragraph from numbered points if present
    const doubleNewlineIndex = raw.indexOf('\n\n');
    let intro = '';
    let remaining = raw;

    if (doubleNewlineIndex !== -1) {
      intro = raw.substring(0, doubleNewlineIndex).trim();
      remaining = raw.substring(doubleNewlineIndex + 2).trim();
    }

    // Check if remaining has numbered items (e.g. "1) ... 2) ... 3) ...")
    if (/\b\d+[\.\)]\s+/.test(remaining)) {
      const items = remaining.split(/(?=\b\d+[\.\)]\s+)/).map(s => s.trim()).filter(Boolean);
      const points: ParsedSummaryPoint[] = items.map(item => {
        const m = item.match(/^(\d+[\.\)])\s*(?:([^:]+):)?\s*(.*)$/s);
        if (m) {
          return {
            num: m[1],
            title: m[2]?.trim(),
            body: m[3]?.trim() || item
          };
        }
        return { body: item };
      });
      return { intro: intro || '', points };
    }

    // If no explicit double newline but has inline "1) ... 2) ...", extract intro up to "1)"
    const inlineMatch = raw.search(/\b1[\.\)]\s+/);
    if (inlineMatch > 0) {
      intro = raw.substring(0, inlineMatch).trim();
      const after = raw.substring(inlineMatch).trim();
      const items = after.split(/(?=\b\d+[\.\)]\s+)/).map(s => s.trim()).filter(Boolean);
      const points: ParsedSummaryPoint[] = items.map(item => {
        const m = item.match(/^(\d+[\.\)])\s*(?:([^:]+):)?\s*(.*)$/s);
        if (m) {
          return {
            num: m[1],
            title: m[2]?.trim(),
            body: m[3]?.trim() || item
          };
        }
        return { body: item };
      });
      return { intro, points };
    }

    return { intro: raw, points: [] };
  }, [lesson.summaryEs]);

  // Parse Metaphor text into structured intro and points if numbered
  const parsedMetaphor = useMemo<{ intro: string; items: { num: string; title: string; body: string }[] }>(() => {
    const raw = lesson.analogyCard?.metaphor || '';
    if (!raw) return { intro: '', items: [] };

    if (/\b\d+[\.\)]\s+/.test(raw)) {
      const parts = raw.split(/(?=\b\d+[\.\)]\s+)/).map(s => s.trim()).filter(Boolean);
      const intro = parts[0].match(/^\d+[\.\)]/) ? '' : parts.shift() || '';
      const items = parts.map((p, idx) => {
        const m = p.match(/^(\d+)[\.\)]\s*(?:([^:\(]+)(?:\(([^\)]+)\)|:))?\s*(.*)$/s);
        const num = m ? m[1] : `${idx + 1}`;
        const title = m && m[2] ? m[2].trim() : `Punto ${num}`;
        const extraNote = m && m[3] ? m[3].trim() : '';
        const body = m && m[4] ? m[4].trim() : p.replace(/^\d+[\.\)]\s*/, '');
        const fullBody = extraNote && !body.includes(extraNote) ? `(${extraNote}) ${body}` : body;
        return { num, title, body: fullBody || body };
      });
      return { intro: intro.trim(), items };
    }

    return { intro: raw.trim(), items: [] };
  }, [lesson.analogyCard?.metaphor]);

  // Parse How Exam Tests It bullets
  const parsedExamRules = useMemo<string[]>(() => {
    const raw = lesson.howExamTestsIt || '';
    if (!raw) return [];
    if (/\b\d+[\.\)]\s+/.test(raw)) {
      return raw.split(/(?=\b\d+[\.\)]\s+)/).map(s => s.trim()).filter(Boolean);
    }
    if (raw.includes('\n- ')) {
      return raw.split('\n- ').map(s => s.replace(/^- /, '').trim()).filter(Boolean);
    }
    if (raw.startsWith('- ')) {
      return raw.split(/\n-\s*/).map(s => s.replace(/^- /, '').trim()).filter(Boolean);
    }
    return [raw];
  }, [lesson.howExamTestsIt]);

  // Mental shortcut split into "cue ➔ action" rows when it lists several triggers
  const shortcutRows = useMemo<{ cue: string; action: string }[] | null>(() => {
    const raw = (lesson.mentalShortcut || '').replace(/^⚡\s*/, '').trim();
    const parts = raw.split(/\s+[|·]\s+/).map(s => s.trim()).filter(Boolean);
    if (parts.length < 2) return null;
    const rows = parts.map(p => {
      const m = p.match(/^(.+?)\s*(?:➔|=)\s*(.+)$/s);
      return m ? { cue: m[1].trim(), action: m[2].trim() } : null;
    });
    return rows.every(Boolean) ? (rows as { cue: string; action: string }[]) : null;
  }, [lesson.mentalShortcut]);

  // Summary intro as Spanish ➔ English pairs when it is written that way
  const bridgeItems = useMemo<BridgeItem[] | null>(() => {
    const lines = parsedSummary.intro.split('\n').map(l => l.trim()).filter(Boolean);
    const items = lines.map<BridgeItem>(l => {
      const m = l.match(/^•\s*(.+?)\s*➔\s*(.+)$/);
      // The section heading already says "Puente con el español", so drop the repeated label
      const text = l.replace(/^•\s*/, '').replace(/^Puente con el español:\s*/i, '');
      return m ? { es: m[1], en: m[2] } : { text: text.charAt(0).toUpperCase() + text.slice(1) };
    });
    return items.some(i => 'en' in i) ? items : null;
  }, [parsedSummary.intro]);

  // Spanish traps as ✗ / ✓ cards when every bullet has both lines
  const trapCards = useMemo<{ intro: string; cards: ErrorLines[] } | null>(() => {
    const { intro, items } = splitBullets(lesson.spanishTrapsEs || '');
    const cards = items.map(parseErrorLines);
    return items.length && cards.every(Boolean) ? { intro, cards: cards as ErrorLines[] } : null;
  }, [lesson.spanishTrapsEs]);

  // Helper to extract structure tag from explanation (e.g., "Estructura 1")
  const getStructureTag = (ex: LessonExample, index: number): string | null => {
    if (!ex.explanation) return null;
    const match = ex.explanation.match(/(Estructura\s+\d+|Variante\s+\d+|Forma\s+\d+)/i);
    if (match) return match[1];
    if (parsedFormulas.length > 1 && index < parsedFormulas.length) {
      return parsedFormulas[index].badge || `Estructura ${index + 1}`;
    }
    return null;
  };

  // Helper to highlight the target fragment(s) inside the English example sentence (supports "..." and "(= ...)" annotations)
  const renderHighlightedSentence = (sentence: string, highlightFragment: string) => {
    if (!highlightFragment) return <span>{sentence}</span>;

    const cleaned = highlightFragment.replace(/\s*\(=[^)]*\)/g, '').trim();
    const segments = cleaned
      .split(/\s*(?:\.\.\.|\/)\s*/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    if (segments.length === 0) return <span>{sentence}</span>;

    const pattern = segments.map(s => escapeRegExp(s)).join('|');
    const regex = new RegExp(`(${pattern})`, 'gi');
    const parts = sentence.split(regex);

    if (parts.length <= 1) {
      return <span>{sentence}</span>;
    }

    const lowerSegments = segments.map(s => s.toLowerCase());

    return (
      <span>
        {parts.map((part, i) =>
          lowerSegments.includes(part.toLowerCase()) ? (
            <mark key={i}>{part}</mark>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </span>
    );
  };

  const hasTable = !!lesson.threeSecondTable;

  return (
    <LessonShell
      label={`${meta?.category === 'grammar' ? 'Gramática B2' : 'Vocabulario B2'} · ${lesson.topicId}`}
      title={cleanTitle}
      ctaLabel={`Practicar ${lesson.topicId}`}
      onCta={onStartPractice}
      onClose={onClose}
    >

          {/* Atajo de 3 segundos */}
          {lesson.mentalShortcut && (
            <ShortcutCard rows={shortcutRows} text={lesson.mentalShortcut.replace(/^⚡\s*/, '')} />
          )}

          {/* Puente con el español / idea clave */}
          {/* Some vocabulary lessons only carry a "Guía Oficial …" source header as intro: nothing to study there */}
          {parsedSummary.intro && !/^Guía Oficial[^\n]*:$/i.test(parsedSummary.intro.trim()) && (
            <section>
              <h2 className={H2}>{bridgeItems ? 'Puente con el español' : 'Idea clave'}</h2>
              <div className={CARD}>
                {bridgeItems ? (
                  <div className="space-y-2">
                    {bridgeItems.map((item, i) =>
                      'en' in item ? (
                        <div key={i} className="grid gap-1.5">
                          <div className="bg-blue-50 rounded-lg px-3 py-2 font-semibold">{item.en}</div>
                          <div className="border border-dashed border-slate-200 rounded-lg px-3 py-2 text-[15px] text-slate-600">{item.es}</div>
                        </div>
                      ) : (
                        <p key={i} className="text-[15px] text-slate-600">{renderInline(item.text)}</p>
                      )
                    )}
                  </div>
                ) : (
                  <div className={READABLE}><StructuredExplanation content={parsedSummary.intro} /></div>
                )}
              </div>
            </section>
          )}

          {/* Analogía: llaves numeradas */}
          {lesson.analogyCard && (
            <section>
              <h2 className={H2}>{lesson.analogyCard.title}</h2>
              <div className={CARD}>
                {parsedMetaphor.items.length > 0 ? (
                  <div className="grid gap-2.5">
                    {parsedMetaphor.intro && (
                      <p className="text-[15px] text-slate-600">{parsedMetaphor.intro}</p>
                    )}
                    {parsedMetaphor.items.map((item, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <b className="flex-[0_0_30px] h-[30px] rounded-full bg-blue-600 text-white grid place-items-center text-sm">
                          {item.num}
                        </b>
                        <div className="min-w-0">
                          <strong className="block">{item.title}</strong>
                          {item.body.includes('• ') ? (
                            <div className={READABLE}><StructuredExplanation content={item.body} /></div>
                          ) : (
                            <span className="block text-[15px] text-slate-600">{renderInline(item.body)}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={READABLE}><StructuredExplanation content={lesson.analogyCard.metaphor} /></div>
                )}
                <p className="mt-3 pt-3 border-t border-slate-200 text-[15px] text-slate-600">
                  <b className="text-slate-900">¿Por qué funciona? </b>
                  {lesson.analogyCard.whyItWorks}
                </p>
              </div>
            </section>
          )}

          {/* Tabla de decisión */}
          {lesson.threeSecondTable && (
            <section>
              <h2 className={H2}>Tabla de decisión</h2>
              <div className="grid gap-2.5">
                {lesson.threeSecondTable.rows.map((row, rIdx) => (
                  <div key={rIdx} className="bg-white border border-slate-200 rounded-xl px-3.5 py-3">
                    <div className="text-sm text-slate-600">{row[0]}</div>
                    <div className="font-semibold text-blue-600 my-0.5">{row[1]}</div>
                    {row[2] && <div className="text-[15px] font-semibold">{row[2]}</div>}
                  </div>
                ))}
              </div>
              {lesson.threeSecondTable.rule && (
                <div className={`${NOTE} mt-2.5`}>
                  <b>Regla de oro. </b>
                  {lesson.threeSecondTable.rule}
                </div>
              )}
            </section>
          )}

          {/* Estructuras y fórmulas */}
          {parsedFormulas.length > 0 && (
            <section>
              <h2 className={H2}>
                {parsedFormulas.length > 1 ? `Las ${parsedFormulas.length} estructuras` : 'La estructura'}
              </h2>
              <div className={CARD}>
                {parsedFormulas.map((item, idx) => (
                  <div key={item.id}>
                    <h3 className={`text-base font-bold ${idx > 0 ? 'mt-3.5' : ''} mb-1`}>
                      {parsedFormulas.length > 1 ? `${idx + 1}. ` : ''}{item.title}
                    </h3>
                    <div className={FORMULA}>{renderInline(item.pattern)}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Mecánica y uso en detalle */}
          {parsedSummary.points.length > 0 && (
            <section>
              <details className={DETAILS} open={!hasTable}>
                <summary className={SUMMARY}>
                  <span>Mecánica y uso en detalle</span>
                  <PlusMinus />
                </summary>
                <div className="px-4 pb-3.5 space-y-5">
                  {parsedSummary.points.map((pt, i) => (
                    <div key={i}>
                      {pt.title && (
                        <h3 className="text-base font-bold mb-2">{i + 1}. {pt.title}</h3>
                      )}
                      <PointBody body={pt.body} />
                    </div>
                  ))}
                </div>
              </details>
            </section>
          )}

          {/* Ejemplos en producción */}
          <section>
            <h2 className={H2}>Ejemplos en producción</h2>
            <div className="space-y-2.5">
              {lesson.examples.map((ex, idx) => {
                const structTag = getStructureTag(ex, idx);
                return (
                  <div key={idx} id={`ex-${lesson.topicId}-${idx + 1}`} className={CARD}>
                    <small className="text-[13px] text-slate-600 block mb-1">
                      {idx + 1}{structTag ? ` · ${structTag}` : ''}
                    </small>
                    <p className="font-semibold">{renderHighlightedSentence(ex.en, ex.highlight)}</p>
                    <p className="text-[15px] text-slate-600 border-l-[3px] border-blue-600 pl-2.5 mt-2">{ex.es}</p>
                    {ex.explanation && (
                      <p className="text-sm text-slate-600 mt-2.5 pt-2.5 border-t border-slate-200">{renderInline(ex.explanation)}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Errores típicos al traducir del español */}
          <section id={`trap-${lesson.topicId}`}>
            <h2 className={H2}>Errores típicos al traducir del español</h2>
            {trapCards ? (
              <div className="space-y-2.5">
                {trapCards.intro && <p className="text-[15px] text-slate-600">{trapCards.intro}</p>}
                {trapCards.cards.map((err, i) => (
                  <div key={i} className={CARD}>
                    <ErrorBlock err={err} />
                  </div>
                ))}
              </div>
            ) : (
              <div className={CARD}>
                <div className={READABLE}><StructuredExplanation content={lesson.spanishTrapsEs} /></div>
              </div>
            )}
          </section>

          {/* Errores comunes en el examen */}
          {lesson.howExamTestsIt && (
            <section>
              <details className={DETAILS}>
                <summary className={SUMMARY}>
                  <span>Errores comunes en el examen</span>
                  <PlusMinus />
                </summary>
                <div className="px-4 pb-3.5 space-y-2.5">
                  {parsedExamRules.map((rule, idx) => (
                    <p key={idx} className="text-[15px]">{renderInline(rule)}</p>
                  ))}
                </div>
              </details>
            </section>
          )}
    </LessonShell>
  );
};

type BridgeItem = { es: string; en: string } | { text: string };

interface ErrorLines {
  bad: string[];
  good: string[];
  why: string;
}

// Lifts StructuredExplanation's compact text to the lesson's reading size
const READABLE = '[&_p]:text-[15px] [&_div]:text-[15px]';
const FORMULA = 'bg-[#F6F6F3] border border-slate-200 rounded-lg px-3 py-2.5 font-semibold text-[15px] leading-snug';

// Splits "intro • item • item" text into its intro and bullet items
const splitBullets = (text: string) => {
  const chunks = text.split(/(?:^|\n)\s*•\s*/);
  const intro = (chunks.shift() || '').trim();
  return { intro, items: chunks.map(c => c.trim()).filter(Boolean) };
};

// Reads "✗ wrong / ✓ right / why" lines out of an error-pattern bullet
const parseErrorLines = (text: string): ErrorLines | null => {
  const bad: string[] = [];
  const good: string[] = [];
  const why: string[] = [];
  text.split('\n').map(l => l.trim()).filter(Boolean).forEach(l => {
    if (/^[✗❌]/u.test(l)) bad.push(l.replace(/^[✗❌]\s*/u, ''));
    else if (/^[✓✅]/u.test(l)) good.push(l.replace(/^[✓✅]\s*/u, ''));
    else why.push(l);
  });
  return bad.length && good.length ? { bad, good, why: why.join(' ') } : null;
};

// Tints bracketed formula slots like [must / should] in the accent color
const renderInline = (text: string): React.ReactNode =>
  text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith('[') && part.endsWith(']') ? (
      <span key={i} className="text-blue-600 font-semibold">{part}</span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );

const ErrorBlock: React.FC<{ err: ErrorLines }> = ({ err }) => (
  <>
    {err.bad.map((b, i) => (
      <div key={`b${i}`} className="bg-rose-50 text-rose-600 rounded-lg px-2.5 py-1.5 mb-1.5 font-semibold">✗ {b}</div>
    ))}
    {err.good.map((g, i) => (
      <div key={`g${i}`} className="bg-emerald-50 text-emerald-600 rounded-lg px-2.5 py-1.5 mb-2 font-semibold">✓ {g}</div>
    ))}
    {err.why && <p className="text-[15px] text-slate-600">{err.why}</p>}
  </>
);

// Renders one numbered summary point: formulas as boxes, ✗/✓ pairs as error cards, the rest as labelled lines
const PointBody: React.FC<{ body: string }> = ({ body }) => {
  const { intro, items } = splitBullets(body);
  if (!items.length) return <div className={READABLE}><StructuredExplanation content={body} /></div>;

  return (
    <div className="space-y-2">
      {intro && <p className="text-[15px]">{renderInline(intro)}</p>}
      {items.map((item, idx) => {
        const colon = item.indexOf(':');
        const label = colon > 0 && colon < 40 ? item.slice(0, colon).trim() : '';
        const rest = label ? item.slice(colon + 1).trim() : item;
        const err = parseErrorLines(rest);

        if (err) {
          return (
            <div key={idx} className="border border-slate-200 rounded-xl px-3.5 py-3">
              {label && <p className="text-sm font-semibold text-slate-600 mb-1.5">{label}</p>}
              <ErrorBlock err={err} />
            </div>
          );
        }
        if (/f[óo]rmula/i.test(label)) {
          return <div key={idx} className={FORMULA}>{renderInline(rest)}</div>;
        }
        return (
          <p key={idx} className="text-[15px] whitespace-pre-line">
            {label && <b>{label}: </b>}
            {renderInline(rest)}
          </p>
        );
      })}
    </div>
  );
};
