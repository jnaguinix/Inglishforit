import React, { useState } from 'react';
import {
  Calendar,
  Target,
  Award,
  BarChart3,
  ShieldCheck,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react';
import { MainTab } from '../types';
import { StorageService } from '../services/storage';

interface SidebarProps {
  currentTab: MainTab;
  onChangeTab: (tab: MainTab) => void;
}

const STORAGE_KEY = 'certit_sidebar_collapsed';

// Primera visita: abierta en monitor, colapsada en tablet. Después se respeta la elección.
const readInitialCollapsed = (): boolean => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) return saved === '1';
  } catch {
    // sin almacenamiento disponible: usar el valor por defecto
  }
  return typeof window !== 'undefined' && window.innerWidth < 1280;
};

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onChangeTab
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(readInitialCollapsed);

  const toggleCollapsed = () => {
    setCollapsed(prev => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
      } catch {
        // ignorar
      }
      return next;
    });
  };

  const allTopicStats = StorageService.getAllTopicStats();
  const masteredCount = Object.values(allTopicStats).filter(s => s.isMastered).length;
  const errorCards = StorageService.getErrorCards();

  const navItems = [
    { id: 'today' as MainTab, label: 'Hoy', icon: Calendar },
    { id: 'practice' as MainTab, label: 'Práctica guiada', icon: Target },
    { id: 'mock' as MainTab, label: 'Simulacro oficial', icon: Award },
    { id: 'progress' as MainTab, label: 'Progreso y repaso', icon: BarChart3 }
  ];

  const widthClass = collapsed
    ? 'w-[76px] min-w-[76px] max-w-[76px]'
    : 'w-[232px] min-w-[232px] max-w-[232px] xl:w-[248px] xl:min-w-[248px] xl:max-w-[248px]';

  return (
    <aside
      className={`hidden md:flex ${widthClass} flex-col bg-[#F6F6F3] border-r border-[#0E1830]/10 shrink-0 sticky top-0 h-[100dvh] overflow-y-auto overflow-x-hidden z-20 transition-[width] duration-200`}
    >
      {/* Marca y botón de colapsar */}
      <div className={`pt-7 pb-6 flex items-center ${collapsed ? 'flex-col gap-4 px-3' : 'px-5 gap-3'}`}>
        <div className="w-10 h-10 rounded-[14px] bg-[#0E1830] text-white flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5 stroke-[2px]" />
        </div>
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-[22px] font-semibold tracking-[-0.02em] text-[#0E1830] truncate leading-none">
              CertIT B2
            </h1>
            <p className="text-[13px] text-[#56607A] truncate leading-tight mt-1">
              OpenEDG EIT-B2-01
            </p>
          </div>
        )}
        {collapsed && (
          <button
            type="button"
            onClick={toggleCollapsed}
            aria-label={collapsed ? 'Expandir barra lateral' : 'Ocultar barra lateral'}
            title={collapsed ? 'Expandir barra lateral' : 'Ocultar barra lateral'}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-[12px] text-[#56607A] hover:bg-[#0E1830]/[0.06] hover:text-[#0E1830] transition-colors cursor-pointer"
          >
            {collapsed ? <PanelLeftOpen className="w-[18px] h-[18px]" /> : <PanelLeftClose className="w-[18px] h-[18px]" />}
          </button>
        )}
      </div>

      {/* Navegación: la sección activa se marca con una barra fina de tinta */}
      <nav className={`space-y-0.5 flex-1 ${collapsed ? 'px-3' : 'px-3'}`}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onChangeTab(item.id)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={item.label}
              title={collapsed ? item.label : undefined}
              className={`relative w-full min-h-[46px] flex items-center transition-colors text-[15px] rounded-[14px] cursor-pointer ${
                collapsed ? 'justify-center' : 'text-left pl-4 pr-3 gap-3'
              } ${
                isActive
                  ? 'bg-[#0E1830]/[0.06] text-[#0E1830] font-semibold'
                  : 'text-[#56607A] hover:text-[#0E1830] hover:bg-[#0E1830]/[0.04] font-medium'
              }`}
            >
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-[#0E1830] transition-all ${
                  isActive ? 'h-5 opacity-100' : 'h-0 opacity-0'
                }`}
              />
              <Icon
                className={`w-[18px] h-[18px] shrink-0 ${
                  isActive ? 'stroke-[2px] text-[#0E1830]' : 'stroke-[1.5px] text-[#56607A]'
                }`}
              />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="px-3 pb-1">
          <button
            type="button"
            onClick={toggleCollapsed}
            className="w-full min-h-[40px] flex items-center gap-3 pl-4 pr-3 rounded-[14px] text-[14px] font-medium text-[#56607A] hover:text-[#0E1830] hover:bg-[#0E1830]/[0.04] transition-colors cursor-pointer"
          >
            <PanelLeftClose className="w-[18px] h-[18px] shrink-0" />
            <span>Ocultar barra</span>
          </button>
        </div>
      )}

      {/* Meta oficial ≥70 %: completa abierta, mínima colapsada */}
      <div className={`mt-auto ${collapsed ? 'p-3' : 'p-4'}`}>
        {collapsed ? (
          <div
            className="bg-[#0E1830] text-white rounded-[16px] py-3 text-center"
            title={`Meta oficial ≥70% · ${masteredCount}/37 dominados · ${errorCards.length} en repaso`}
          >
            <span className="block font-display text-[16px] font-semibold leading-none tabular-nums">{masteredCount}</span>
            <span className="block text-[10px] text-white/60 mt-1">de 37</span>
          </div>
        ) : (
          <div className="bg-[#0E1830] text-white rounded-[24px] p-5 shadow-[0_24px_40px_-24px_rgba(14,24,48,0.6)]">
            <p className="text-[13px] text-white/65">Meta oficial</p>
            <p className="font-display text-[30px] font-semibold leading-none tracking-[-0.03em] mt-1">≥70%</p>

            <div className="grid grid-cols-2 gap-2 border-t border-white/15 pt-3.5 mt-4">
              <div>
                <span className="block font-display text-[20px] font-semibold leading-none tabular-nums">
                  {masteredCount}/37
                </span>
                <span className="text-[12px] text-white/60 block mt-1">Dominados</span>
              </div>

              <div>
                <span className="block font-display text-[20px] font-semibold leading-none tabular-nums text-[#FFE07A]">
                  {errorCards.length}
                </span>
                <span className="text-[12px] text-white/60 block mt-1">En repaso</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
