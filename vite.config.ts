import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via AI Studio env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              {
                name: 'vendor',
                test: /node_modules/,
              },
              {
                name: 'question-banks-it1',
                test: /src[\\/]data[\\/]banks[\\/]englishForIT1/,
              },
              {
                name: 'question-banks-it2',
                test: /src[\\/]data[\\/]banks[\\/](englishForIT2|grammar|vocab|missing|readingAndIT2)/,
              },
              {
                name: 'question-pools-core',
                test: /src[\\/]data[\\/](seedQuestions|practiceQuestions|officialIdioms|listeningTracks|readingTexts)/,
              },
            ],
          },
        },
      },
    },
  };
});

