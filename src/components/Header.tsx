import React from 'react';
import { ShieldCheck, BookOpenCheck } from 'lucide-react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  showBadge?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'CertIT B2',
  subtitle = 'OpenEDG EIT-B2-01',
  onBack,
  showBadge = true
}) => {
  return (
    <header className={`z-30 bg-white border-b border-[#DDDFE6] px-4 sm:px-6 lg:px-8 pt-safe transition-all ${onBack ? 'sticky top-0 max-md:hidden' : 'md:hidden'}`}>
      <div className="w-full max-w-[1600px] mx-auto h-16 flex items-center justify-between gap-3">
        {/* Left: Back or Brand */}
        <div className="flex items-center gap-2.5 min-w-0">
          {onBack ? (
            <button
              onClick={onBack}
              className="min-h-[44px] min-w-[44px] -ml-2 flex items-center justify-center rounded-[10px] text-[#56607A] hover:text-[#14213D] hover:bg-[#F6F6F3] transition-colors"
              aria-label="Volver"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          ) : (
            <div className="w-9 h-9 rounded-[10px] bg-[#14213D] text-white flex items-center justify-center">
              <ShieldCheck className="w-[18px] h-[18px] stroke-[2px]" />
            </div>
          )}

          <div className="min-w-0">
            <p className="text-[13px] text-[#56607A] truncate leading-tight">
              {subtitle}
            </p>
            <h1 className="text-[20px] font-bold text-[#14213D] truncate leading-tight">
              {title}
            </h1>
          </div>
        </div>

        {/* Right Action / Target Badge */}
        {showBadge && (
          <div className="flex items-center gap-1.5 shrink-0 text-xs font-semibold text-[#4A3800] bg-[#FFE07A] px-2.5 py-1 rounded-[10px]">
            <BookOpenCheck className="w-3.5 h-3.5 text-[#4A3800]" />
            <span>Meta: ≥70%</span>
          </div>
        )}
      </div>
    </header>
  );
};
