import React from 'react';

interface TaglineSlotProps {
  className?: string;
  variant?: 'inline' | 'stacked' | 'pill';
  placeholderText?: string;
  theme?: 'light' | 'dark';
}

/**
 * Reusable slot for MOM Technologies' 3rd tagline (pending confirmation).
 * Allows future insertion of the final tagline without redesigning surrounding layouts.
 */
export const TaglineSlot: React.FC<TaglineSlotProps> = ({
  className = '',
  variant = 'inline',
  placeholderText = 'build • compute • connect',
  theme = 'light',
}) => {
  const isLight = theme === 'light';

  if (variant === 'pill') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono shadow-2xs ${
          isLight
            ? 'bg-purple-50/80 border border-purple-200 text-purple-700'
            : 'bg-purple-950/40 border border-purple-500/30 text-purple-300'
        } ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
        <span className="tracking-wider font-medium">{placeholderText}</span>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex items-center justify-center gap-2 text-[11px] font-mono ${className}`}>
        <span className="h-[1px] w-6 bg-gradient-to-r from-purple-500/40 to-transparent" />
        <span
          className={`tracking-widest uppercase px-1 font-medium ${
            isLight ? 'text-slate-500' : 'text-slate-400'
          }`}
        >
          {placeholderText}
        </span>
        <span className="h-[1px] w-6 bg-gradient-to-l from-cyan-500/40 to-transparent" />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-mono ${
        isLight ? 'text-slate-600' : 'text-slate-400'
      } ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
      <span className="tracking-wider">{placeholderText}</span>
    </div>
  );
};

