import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  showSubtitle?: boolean;
  showTaglinePlaceholder?: boolean;
  clickable?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  theme = 'light',
  showSubtitle = true,
  showTaglinePlaceholder = false,
  clickable = true,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  }[size];

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  }[size];

  const subtitleSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
  }[size];

  const isLight = theme === 'light';

  const content = (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-2.5">
        {/* MOM Icon Mark */}
        <div className={`relative flex-shrink-0 ${iconDimensions} rounded-xl bg-gradient-to-br from-[#1E1B4B] via-[#1E3A8A] to-[#0284C7] p-[1.5px] shadow-md shadow-slate-900/10 group`}>
          {/* Inner badge container */}
          <div className="w-full h-full rounded-[10px] bg-gradient-to-br from-[#3B0764]/80 via-[#1E3A8A]/90 to-[#0284C7] flex items-center justify-center relative overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-radial from-cyan-400/20 via-transparent to-transparent opacity-75" />
            
            {/* SVG Logo Representation of the M Arrow Ribbon & Stars */}
            <svg
              viewBox="0 0 100 100"
              className="w-[82%] h-[82%] drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Ribbon Gradient */}
                <linearGradient id="ribbonGrad" x1="15" y1="80" x2="85" y2="20" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="35%" stopColor="#818CF8" />
                  <stop offset="70%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
                <linearGradient id="orbitGrad" x1="10" y1="50" x2="90" y2="50" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#818CF8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Orbital ambient ring */}
              <ellipse cx="50" cy="50" rx="38" ry="24" transform="rotate(-25 50 50)" stroke="url(#orbitGrad)" strokeWidth="2.5" opacity="0.6" />

              {/* Dynamic M-Ribbon with Arrow */}
              <path
                d="M 24 68 C 22 45, 34 32, 44 42 C 50 48, 56 60, 64 42 L 72 26"
                stroke="url(#ribbonGrad)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Arrow Head on Right Arm */}
              <path
                d="M 58 26 L 75 24 L 74 41 Z"
                fill="#38BDF8"
              />

              {/* Sparkles in top-right */}
              <path
                d="M 78 12 L 80 16 L 84 18 L 80 20 L 78 24 L 76 20 L 72 18 L 76 16 Z"
                fill="#FFFFFF"
                opacity="0.9"
              />
              <path
                d="M 87 22 L 88 24 L 90 25 L 88 26 L 87 28 L 86 26 L 84 25 L 86 24 Z"
                fill="#BAE6FD"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>

        {/* Text Lockup */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1 leading-none">
            <span className={`font-extrabold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'} ${titleSizes}`}>
              M<span className="inline-block relative">
                O
                <span className="absolute inset-0 m-auto w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#818CF8] rotate-45 opacity-90 mix-blend-screen" />
              </span>M
            </span>
            <span className={`font-bold tracking-tight ${isLight ? 'text-blue-700' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300'} ${titleSizes} ml-1`}>
              tech
            </span>
          </div>

          {showSubtitle && (
            <span className={`font-mono uppercase tracking-[0.2em] ${isLight ? 'text-slate-500' : 'text-slate-400'} font-medium ${subtitleSizes} mt-0.5`}>
              master of matrix
            </span>
          )}
        </div>
      </div>

      {/* Reserved subtle placeholder area for third tagline (ready for future insertion without redesign) */}
      {showTaglinePlaceholder && (
        <div className={`w-full mt-2 pt-1 border-t ${isLight ? 'border-slate-200' : 'border-slate-800'} flex items-center justify-between text-[11px] font-mono`}>
          <span className="h-[1px] w-6 bg-gradient-to-r from-purple-500 to-transparent" />
          <span className={`italic tracking-wider px-2 opacity-70 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            [ future tagline slot ]
          </span>
          <span className="h-[1px] w-6 bg-gradient-to-l from-cyan-500 to-transparent" />
        </div>
      )}
    </div>
  );

  if (clickable) {
    return (
      <Link to="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg group">
        {content}
      </Link>
    );
  }

  return content;
};

