import { AudioTrack } from '../types';

export interface VoiceInfo {
  voice: SpeechSynthesisVoice;
  lang: string;
  name: string;
}

export class AudioSynthesisService {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static voices: SpeechSynthesisVoice[] = [];
  private static isSpeaking = false;
  private static currentLineIndex = 0;
  private static playbackSessionId = 0;
  private static pendingTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private static onLineChangeCallback: ((lineIndex: number) => void) | null = null;
  private static onEndCallback: (() => void) | null = null;

  static initVoices(): Promise<SpeechSynthesisVoice[]> {
    return new Promise((resolve) => {
      if (!this.synth) {
        resolve([]);
        return;
      }

      const load = () => {
        const all = this.synth?.getVoices() || [];
        const englishVoices = all.filter(v => v.lang.toLowerCase().startsWith('en'));
        this.voices = englishVoices.length > 0 ? englishVoices : all;
        resolve(this.voices);
      };

      const existing = this.synth.getVoices();
      if (existing.length > 0) {
        load();
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          load();
        };
        setTimeout(load, 400);
      }
    });
  }

  static hasEnglishVoices(): boolean {
    if (!this.synth) return false;
    const all = this.synth.getVoices();
    return all.some(v => v.lang.toLowerCase().startsWith('en'));
  }

  static getVoiceForSpeaker(
    speakerPreference?: string,
    speakerIndex: number = 0
  ): SpeechSynthesisVoice | null {
    if (this.voices.length === 0) {
      this.voices = this.synth?.getVoices() || [];
    }

    const enVoices = this.voices.filter(v => v.lang.toLowerCase().startsWith('en'));
    if (enVoices.length === 0) {
      return this.voices[0] || null;
    }

    if (speakerPreference) {
      const normalizedPref = speakerPreference.toLowerCase().replace('_', '-');
      const accentMatch = enVoices.find(v => v.lang.toLowerCase().includes(normalizedPref));
      if (accentMatch) return accentMatch;
    }

    return enVoices[speakerIndex % enVoices.length];
  }

  static playTrack(
    track: AudioTrack,
    playbackRate: number = 1.0,
    onLineChange?: (lineIndex: number) => void,
    onEnd?: () => void
  ): void {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    this.stop();
    const sessionId = ++this.playbackSessionId;
    this.isSpeaking = true;
    this.currentLineIndex = 0;
    this.onLineChangeCallback = onLineChange || null;
    this.onEndCallback = onEnd || null;

    this.speakNextLine(track, playbackRate, sessionId);
  }

  private static speakNextLine(track: AudioTrack, playbackRate: number, sessionId: number): void {
    if (!this.synth || !this.isSpeaking || sessionId !== this.playbackSessionId) return;

    if (this.currentLineIndex >= track.lines.length) {
      this.isSpeaking = false;
      if (this.onEndCallback) this.onEndCallback();
      return;
    }

    const line = track.lines[this.currentLineIndex];
    if (this.onLineChangeCallback) {
      this.onLineChangeCallback(this.currentLineIndex);
    }

    const speakerMeta = track.speakers.find(s => s.id === line.s);
    const speakerIndex = track.speakers.findIndex(s => s.id === line.s);
    const voice = this.getVoiceForSpeaker(speakerMeta?.accentPreference, Math.max(0, speakerIndex));

    const utterance = new SpeechSynthesisUtterance(line.t);
    if (voice) utterance.voice = voice;
    utterance.rate = Math.max(0.85, Math.min(1.2, playbackRate));
    utterance.pitch = speakerIndex % 2 === 0 ? 1.0 : 1.08;

    utterance.onend = () => {
      if (!this.isSpeaking || sessionId !== this.playbackSessionId) return;
      this.currentLineIndex++;
      this.pendingTimeoutId = setTimeout(() => {
        if (this.isSpeaking && sessionId === this.playbackSessionId) {
          this.speakNextLine(track, playbackRate, sessionId);
        }
      }, 350);
    };

    utterance.onerror = (e) => {
      if (!this.isSpeaking || sessionId !== this.playbackSessionId) return;
      // Ignore 'canceled' / 'interrupted' events caused by intentional stop()
      if (e.error === 'canceled' || e.error === 'interrupted') return;
      console.warn('SpeechSynthesis utterance error:', e);
      this.currentLineIndex++;
      if (this.isSpeaking && sessionId === this.playbackSessionId) {
        this.speakNextLine(track, playbackRate, sessionId);
      }
    };

    this.synth.speak(utterance);
  }

  /**
   * Plays a single dialogue line for focused listening ear training
   */
  static playSingleLine(
    lineText: string,
    speakerPreference?: string,
    speakerIndex: number = 0,
    playbackRate: number = 1.0,
    onEnd?: () => void
  ): void {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    this.stop();
    const sessionId = ++this.playbackSessionId;
    this.isSpeaking = true;

    const voice = this.getVoiceForSpeaker(speakerPreference, speakerIndex);
    const utterance = new SpeechSynthesisUtterance(lineText);
    if (voice) utterance.voice = voice;
    utterance.rate = Math.max(0.85, Math.min(1.2, playbackRate));
    utterance.pitch = speakerIndex % 2 === 0 ? 1.0 : 1.08;

    utterance.onend = () => {
      if (sessionId !== this.playbackSessionId) return;
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      if (sessionId !== this.playbackSessionId) return;
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    this.synth.speak(utterance);
  }

  static stop(): void {
    this.playbackSessionId++;
    this.isSpeaking = false;
    if (this.pendingTimeoutId !== null) {
      clearTimeout(this.pendingTimeoutId);
      this.pendingTimeoutId = null;
    }
    if (this.synth) {
      this.synth.cancel();
    }
  }

  static getIsSpeaking(): boolean {
    return this.isSpeaking;
  }
}
