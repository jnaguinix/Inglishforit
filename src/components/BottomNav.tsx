import React from 'react';
import { Calendar, Target, Award, BarChart3 } from 'lucide-react';
import { MainTab } from '../types';

interface BottomNavProps {
  currentTab: MainTab;
  onChangeTab: (tab: MainTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onChangeTab }) => {
  const tabs = [
    {
      id: 'today' as MainTab,
      label: 'Hoy',
      icon: Calendar
    },
    {
      id: 'practice' as MainTab,
      label: 'Práctica',
      icon: Target
    },
    {
      id: 'mock' as MainTab,
      label: 'Simulacro',
      icon: Award
    },
    {
      id: 'progress' as MainTab,
      label: 'Progreso',
      icon: BarChart3
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#F6F6F3]/92 backdrop-blur-xl border-t border-[#0E1830]/10 pb-safe md:hidden">
      <div className="max-w-md mx-auto grid grid-cols-4 items-stretch h-16 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className="relative min-h-[48px] flex flex-col items-center justify-center gap-1 transition-colors"
              aria-label={tab.label}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* La pestaña activa se marca con una barra fina de tinta, sin fondo relleno */}
              <span
                className={`absolute top-0 h-[2px] rounded-full bg-[#0E1830] transition-all duration-200 ${
                  isActive ? 'w-8 opacity-100' : 'w-0 opacity-0'
                }`}
              />
              <Icon
                className={`w-[22px] h-[22px] ${
                  isActive ? 'stroke-[2px] text-[#0E1830]' : 'stroke-[1.5px] text-[#56607A]'
                }`}
              />
              <span
                className={`text-[12px] leading-none ${
                  isActive ? 'font-semibold text-[#0E1830]' : 'font-medium text-[#56607A]'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
