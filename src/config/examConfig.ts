import { ExamConfig } from '../types';

export const DEFAULT_EXAM_CONFIG: ExamConfig = {
  sections: {
    UE: {
      count: 20,
      nameEs: 'Use of English',
      nameEn: 'Use of English'
    },
    L: {
      count: 20,
      nameEs: 'Comprensión Auditiva (Listening)',
      nameEn: 'Listening'
    },
    R: {
      count: 20,
      nameEs: 'Comprensión Lectora (Reading)',
      nameEn: 'Reading'
    }
  },
  totalMinutes: 115,
  passingScorePct: 70, // >=70% en CADA sección Y global
  allowBackNavigation: false, // Por defecto simula examen real sin volver
  maxAudioRepeats: 2,
  defaultSpeechRate: 1.0,
  masteryMinAttempts: 12,
  masteryThresholdPct: 85,
  masteryMinDays: 2,
  spacedRepetitionIntervalsDays: [1, 2, 4, 7, 14]
};

// Configuración Oficial OpenEDG TestNow™ (EIT-B2-01) - 36 preguntas reglamentarias
export const TESTNOW_OFFICIAL_CONFIG: ExamConfig = {
  ...DEFAULT_EXAM_CONFIG,
  sections: {
    UE: { count: 12, nameEs: 'Use of English', nameEn: 'Use of English' },
    L: { count: 12, nameEs: 'Comprensión Auditiva (Listening)', nameEn: 'Listening' },
    R: { count: 12, nameEs: 'Comprensión Lectora (Reading)', nameEn: 'Reading' }
  },
  totalMinutes: 115,
  passingScorePct: 70
};

// Configuración intensiva de entrenamiento completo (60 preguntas)
export const INTENSIVE_TRAINING_CONFIG: ExamConfig = {
  ...DEFAULT_EXAM_CONFIG,
  sections: {
    UE: { count: 20, nameEs: 'Use of English', nameEn: 'Use of English' },
    L: { count: 20, nameEs: 'Comprensión Auditiva (Listening)', nameEn: 'Listening' },
    R: { count: 20, nameEs: 'Comprensión Lectora (Reading)', nameEn: 'Reading' }
  },
  totalMinutes: 115,
  passingScorePct: 70
};

// Configuración rápida para pruebas de diagnóstico inicial (18 preguntas)
export const QUICK_MOCK_CONFIG: ExamConfig = {
  ...DEFAULT_EXAM_CONFIG,
  sections: {
    UE: { count: 6, nameEs: 'Use of English', nameEn: 'Use of English' },
    L: { count: 6, nameEs: 'Comprensión Auditiva (Listening)', nameEn: 'Listening' },
    R: { count: 6, nameEs: 'Comprensión Lectora (Reading)', nameEn: 'Reading' }
  },
  totalMinutes: 35,
  passingScorePct: 70
};
