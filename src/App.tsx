/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
import { TodayView } from './views/TodayView';
import { MainTab, TopicId } from './types';

const PracticeView = lazy(() => import('./views/PracticeView').then(m => ({ default: m.PracticeView })));
const MockExamPreviewView = lazy(() => import('./views/MockExamPreviewView').then(m => ({ default: m.MockExamPreviewView })));
const ProgressView = lazy(() => import('./views/ProgressView').then(m => ({ default: m.ProgressView })));
const DiagnosticView = lazy(() => import('./views/DiagnosticView').then(m => ({ default: m.DiagnosticView })));
const PatternCheatSheetModal = lazy(() => import('./components/PatternCheatSheetModal').then(m => ({ default: m.PatternCheatSheetModal })));

export default function App() {
  const [currentTab, setCurrentTab] = useState<MainTab>('today');
  const [isDiagnosticActive, setIsDiagnosticActive] = useState(false);
  const [selectedPracticeTopic, setSelectedPracticeTopic] = useState<TopicId | null>(null);
  const [startInterleavedSprint, setStartInterleavedSprint] = useState(false);
  const [startErrorReview, setStartErrorReview] = useState(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  // Prefetch secondary views during browser idle time for zero-latency tab transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      import('./views/PracticeView').catch(() => {});
      import('./views/MockExamPreviewView').catch(() => {});
      import('./views/ProgressView').catch(() => {});
      import('./views/DiagnosticView').catch(() => {});
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  const handleStartDiagnostic = () => {
    setIsDiagnosticActive(true);
  };

  const handleDiagnosticComplete = () => {
    setIsDiagnosticActive(false);
    setCurrentTab('today');
  };

  const handleStartTopicPractice = (topicId: TopicId) => {
    setStartInterleavedSprint(false);
    setStartErrorReview(false);
    setSelectedPracticeTopic(topicId);
    setCurrentTab('practice');
  };

  const handleStartInterleavedSprint = () => {
    setSelectedPracticeTopic(null);
    setStartErrorReview(false);
    setStartInterleavedSprint(true);
    setCurrentTab('practice');
  };

  const handleOpenErrorBank = () => {
    setSelectedPracticeTopic(null);
    setStartInterleavedSprint(false);
    setStartErrorReview(true);
    setCurrentTab('practice');
  };

  const handleTabChange = (tab: MainTab) => {
    setIsDiagnosticActive(false);
    setCurrentTab(tab);
    if (tab !== 'practice') {
      setSelectedPracticeTopic(null);
      setStartInterleavedSprint(false);
      setStartErrorReview(false);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-[#F6F6F3] flex font-sans">
      {/* Tablet and Desktop Persistent Sidebar */}
      {!isDiagnosticActive && (
        <Sidebar
          currentTab={currentTab}
          onChangeTab={handleTabChange}
        />
      )}

      {/* Main Viewport Column */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#F6F6F3]">
        {/* Top Header Bar */}
        {/* The header only appears during the diagnostic (it carries the back button); tabs start with their own title */}
        {isDiagnosticActive && (
          <Header
            title={isDiagnosticActive ? 'Diagnóstico Inicial' : 'CertIT B2'}
            subtitle={isDiagnosticActive ? '18 ítems · UE / L / R' : 'OpenEDG EIT-B2-01'}
            onBack={isDiagnosticActive ? () => setIsDiagnosticActive(false) : undefined}
          />
        )}

        {/* Main Content Area */}
        <main className={`flex-1 w-full ${isDiagnosticActive ? 'max-md:pt-[env(safe-area-inset-top)]' : 'pt-[env(safe-area-inset-top)] md:pt-0'}`}>
          <Suspense
            fallback={
              <div className="w-full py-20 flex flex-col items-center justify-center text-xs text-slate-500 gap-2">
                <div className="w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                <span>Cargando módulo de entrenamiento...</span>
              </div>
            }
          >
            {isDiagnosticActive ? (
              <DiagnosticView
                onComplete={handleDiagnosticComplete}
                onExit={() => setIsDiagnosticActive(false)}
              />
            ) : (
              <>
                {currentTab === 'today' && (
                  <TodayView
                    onStartDiagnostic={handleStartDiagnostic}
                    onStartTopicPractice={handleStartTopicPractice}
                    onStartInterleavedSprint={handleStartInterleavedSprint}
                    onOpenErrorBank={handleOpenErrorBank}
                    onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
                  />
                )}

                {currentTab === 'practice' && (
                  <PracticeView
                    key={`${selectedPracticeTopic || 'all'}-${startInterleavedSprint ? 'interleaved' : startErrorReview ? 'errors' : 'normal'}`}
                    initialTopicId={selectedPracticeTopic}
                    startInterleaved={startInterleavedSprint}
                    startErrorReview={startErrorReview}
                    onClearInterleaved={() => setStartInterleavedSprint(false)}
                    onClearErrorReview={() => setStartErrorReview(false)}
                    onBackToHome={() => setCurrentTab('today')}
                    onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
                  />
                )}

                {currentTab === 'mock' && (
                  <MockExamPreviewView />
                )}

                {currentTab === 'progress' && (
                  <ProgressView
                    onStartErrorReview={handleOpenErrorBank}
                    onStartTopicPractice={handleStartTopicPractice}
                  />
                )}
              </>
            )}
          </Suspense>
        </main>

        {/* Pattern Cheat Sheet Modal */}
        {isCheatSheetOpen && (
          <Suspense fallback={null}>
            <PatternCheatSheetModal
              isOpen={isCheatSheetOpen}
              onClose={() => setIsCheatSheetOpen(false)}
            />
          </Suspense>
        )}

        {/* Persistent Mobile Bottom Navigation Bar */}
        {!isDiagnosticActive && (
          <BottomNav
            currentTab={currentTab}
            onChangeTab={handleTabChange}
          />
        )}
      </div>
    </div>
  );
}
