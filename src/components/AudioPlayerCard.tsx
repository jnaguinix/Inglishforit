import React, { useState, useEffect } from 'react';
import { Volume2, Play, Square, AlertCircle, Eye, EyeOff, RotateCcw, Volume1, Lock } from 'lucide-react';
import { AudioTrack } from '../types';
import { AudioSynthesisService } from '../services/audioSynthesis';

interface AudioPlayerCardProps {
  track: AudioTrack;
  isAnswered: boolean;
  maxRepeats?: number;
  isExamMode?: boolean;
}

export const AudioPlayerCard: React.FC<AudioPlayerCardProps> = ({
  track,
  isAnswered,
  maxRepeats = 2,
  isExamMode = false
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [playingSingleLineIdx, setPlayingSingleLineIdx] = useState<number | null>(null);
  const [playCount, setPlayCount] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [hasVoices, setHasVoices] = useState(true);

  useEffect(() => {
    setPlayCount(0);
    setIsPlaying(false);
    setCurrentLineIndex(-1);
    setPlayingSingleLineIdx(null);
    setShowTranscript(false);
    if (isExamMode) {
      setPlaybackRate(1.0);
    }

    AudioSynthesisService.initVoices().then(() => {
      setHasVoices(AudioSynthesisService.hasEnglishVoices());
    });

    return () => {
      AudioSynthesisService.stop();
    };
  }, [track.id, isExamMode]);

  const effectiveRate = isExamMode ? 1.0 : playbackRate;

  const handleTogglePlay = () => {
    if (isPlaying) {
      AudioSynthesisService.stop();
      setIsPlaying(false);
      setCurrentLineIndex(-1);
      return;
    }

    if (playCount >= maxRepeats && !isAnswered) {
      return;
    }

    setPlayCount(prev => prev + 1);
    setIsPlaying(true);
    setPlayingSingleLineIdx(null);
    setCurrentLineIndex(0);

    AudioSynthesisService.playTrack(
      track,
      effectiveRate,
      (lineIdx) => {
        setCurrentLineIndex(lineIdx);
      },
      () => {
        setIsPlaying(false);
        setCurrentLineIndex(-1);
      }
    );
  };

  const handleStop = () => {
    AudioSynthesisService.stop();
    setIsPlaying(false);
    setCurrentLineIndex(-1);
    setPlayingSingleLineIdx(null);
  };

  const handleRateChange = (rate: number) => {
    if (isExamMode) return;
    setPlaybackRate(rate);
    if (isPlaying) {
      AudioSynthesisService.playTrack(
        track,
        rate,
        (lineIdx) => {
          setCurrentLineIndex(lineIdx);
        },
        () => {
          setIsPlaying(false);
          setCurrentLineIndex(-1);
        }
      );
    }
  };

  const handlePlayLine = (idx: number) => {
    const line = track.lines[idx];
    const speakerMeta = track.speakers.find(s => s.id === line.s);
    const speakerIdx = track.speakers.findIndex(s => s.id === line.s);

    handleStop();
    setPlayingSingleLineIdx(idx);

    AudioSynthesisService.playSingleLine(
      line.t,
      speakerMeta?.accentPreference,
      Math.max(0, speakerIdx),
      effectiveRate,
      () => {
        setPlayingSingleLineIdx(null);
      }
    );
  };

  const remainingPlays = Math.max(0, maxRepeats - playCount);
  const canPlay = isAnswered || remainingPlays > 0;

  return (
    <div className="border-slate-200 mb-4 transition-all bg-[#0E1830] text-white border-0 rounded-[28px] p-5 max-md:mb-5 shadow-[0_28px_48px_-28px_rgba(14,24,48,0.6)]">
      {/* Scenario Header */}
      <div className="flex items-start justify-between gap-3 mb-3 max-md:flex-col max-md:gap-3 max-md:mb-5">
        <div className="max-md:order-2">
          <div className="flex items-center gap-1.5 mb-0.5 text-[14px] font-medium text-white/65">
            <Volume2 className="w-3.5 h-3.5 text-blue-600 max-md:hidden" />
            <span>Audio Oficial del Examen (Listening B2)</span>
          </div>
          <h3 className="leading-snug font-display text-[22px] font-semibold tracking-[-0.015em] text-white">
            {track.title}
          </h3>
          <p className="mt-0.5 italic text-[15px] text-white/70 max-md:not-italic max-md:mt-1.5">
            {track.scenario}
          </p>
        </div>

        {/* Play Counter */}
        <div className="shrink-0 text-right max-md:order-1 max-md:text-left max-md:flex max-md:items-baseline max-md:gap-2">
          <span className="text-[12px] font-medium block text-white/55">
            Reproducciones:
          </span>
          <span className={`text-xs font-bold ${remainingPlays === 0 && !isAnswered ? 'text-[#FFE07A]' : 'text-white'}`}>
            {playCount} / {maxRepeats} {isAnswered && !isExamMode && '(Ilimitado post-respuesta)'}
          </span>
        </div>
      </div>

      {/* Warning if device lacks English TTS */}
      {!hasVoices && (
        <div className="mb-3 p-2.5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2 text-xs text-amber-800">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            Tu navegador o sistema operativo no reporta voces en inglés precargadas. La síntesis usará el motor predeterminado del sistema.
          </span>
        </div>
      )}

      {/* Controls Bar */}
      <div className="flex items-center justify-between gap-2 rounded-xl border-slate-100 max-md:flex-wrap bg-transparent border-0 p-0 max-md:gap-3">
        <div className="flex items-center gap-2 max-md:w-full">
          {/* Main Play/Stop Button */}
          <button
            type="button"
            onClick={handleTogglePlay}
            disabled={!canPlay && !isPlaying}
            className={` px-4 font-semibold flex items-center gap-2 shadow-xs transition-all active:scale-95 max-md:flex-1 max-md:justify-center min-h-[56px] rounded-[18px] text-[16px] max-md:shadow-none ${
              isPlaying
                ? 'bg-rose-600 text-white hover:bg-rose-700'
                : canPlay
                ? 'hover:bg-[#FFD84F] bg-[#FFE07A] max-md:hover:bg-[#FFE07A] text-[#0E1830]'
                : 'cursor-not-allowed bg-white/10 text-white/40'
            }`}
          >
            {isPlaying ? (
              <>
                <Square className="w-4 h-4 fill-current" />
                <span>Detener</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>{playCount === 0 ? 'Escuchar Audio Completo' : `Repetir Audio (${remainingPlays} disp.)`}</span>
              </>
            )}
          </button>

          {isPlaying && (
            <button
              type="button"
              onClick={handleStop}
              className="min-w-[44px] border flex items-center justify-center hover:bg-slate-100 active:scale-95 border-white/25 text-white max-md:hover:bg-white/10 rounded-[16px] min-h-[56px] max-md:min-w-[56px]"
              aria-label="Reiniciar audio"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Speed Selector (Locked at 1.0x in Exam Mode per OpenEDG rules) */}
        {isExamMode ? (
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[12px] font-semibold bg-transparent border-white/20 text-white/70">
            <Lock className="w-3 h-3 text-slate-400" />
            <span>Velocidad Examen: 1.0x</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 p-1 rounded-lg border-slate-200 bg-white/10 border-0 max-md:w-full max-md:justify-between">
            {[0.9, 1.0, 1.1].map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => handleRateChange(rate)}
                className={`min-h-[32px] px-2 text-xs font-semibold rounded-md transition-colors ${
                  playbackRate === rate
                    ? 'bg-[#FFE07A] text-[#0E1830]'
                    : 'hover:text-slate-900 text-white/70 max-md:hover:text-white'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Speakers Info with Accents */}
      <div className="mt-2.5 flex flex-wrap gap-2 text-xs text-white/65 max-md:mt-4">
        <span className="font-medium text-white/65 max-md:w-full text-[14px]">Hablantes y acentos</span>
        {track.speakers.map((spk) => (
          <span key={spk.id} className="py-0.5 bg-white/10 text-white/75 font-sans rounded-full px-2.5 text-[13px]">
            <strong className="font-semibold text-white">{spk.id}</strong>: {spk.role.split('(')[0].trim()} ({spk.accentPreference || 'en-US'})
          </span>
        ))}
      </div>

      {/* Transcript Accordion (Locked until answered per exam rules) */}
      <div className="mt-3 border-t border-white/15 max-md:mt-4 pt-4">
        {!isAnswered ? (
          <div className="flex items-center justify-between p-2.5 rounded-xl border-slate-200 bg-white/10 border-0 text-white/70 text-[14px]">
            <span className="flex items-center gap-2 italic">
              <EyeOff className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Regla de Examen:</strong> Transcripción bloqueada durante la escucha. Se desbloquea automáticamente tras confirmar tu respuesta.
              </span>
            </span>
          </div>
        ) : (
          <div>
            <button
              type="button"
              onClick={() => setShowTranscript(prev => !prev)}
              className="w-full px-3 hover:bg-blue-100/60 rounded-xl flex items-center justify-between font-semibold transition-colors bg-white/10 max-md:hover:bg-white/15 text-white text-[14px] min-h-[48px]"
            >
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-white" />
                {showTranscript ? 'Ocultar Transcripción de Audio' : 'Ver Transcripción en Inglés y Entrenamiento por Líneas'}
              </span>
              <span className="font-bold text-white">
                {showTranscript ? '▲' : '▼'}
              </span>
            </button>

            {showTranscript && (
              <div className="mt-2.5 p-3 rounded-xl border border-slate-200 space-y-2 max-h-64 overflow-y-auto bg-white text-[#0E1830] text-[14px]">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 text-[12px] text-slate-500">
                  <span>Haz clic en 🔊 para reentrenar tu oído con cualquier línea específica:</span>
                </div>

                {track.lines.map((line, idx) => {
                  const spk = track.speakers.find(s => s.id === line.s);
                  const isCurrent = currentLineIndex === idx;
                  const isLinePlaying = playingSingleLineIdx === idx;

                  return (
                    <div
                      key={idx}
                      className={`p-2 rounded-xl transition-all flex items-start gap-2 border ${
                        isCurrent || isLinePlaying
                          ? 'bg-blue-100 border-blue-300 shadow-xs'
                          : 'bg-white border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => handlePlayLine(idx)}
                        className={`min-h-[32px] min-w-[32px] rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isLinePlaying
                            ? 'bg-[#FFE07A] text-[#0E1830]'
                            : 'bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700'
                        }`}
                        title="Escuchar esta frase sola"
                        aria-label={`Reproducir línea ${idx + 1}`}
                      >
                        <Volume1 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex-1 leading-relaxed">
                        <span className="font-bold text-slate-900 mr-1.5 inline-block text-[12px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                          {spk ? spk.role.split('(')[0].trim() : line.s}
                        </span>
                        <span className={isCurrent || isLinePlaying ? 'font-medium text-blue-950' : 'text-slate-800'}>
                          {line.t}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
