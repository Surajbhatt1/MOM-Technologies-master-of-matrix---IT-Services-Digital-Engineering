import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'blue' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  icon,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-[11px]',
    md: 'px-3 py-1 text-xs',
  }[size];

  const variantClasses = {
    cyan: 'bg-cyan-50 text-cyan-800 border border-cyan-200/80 shadow-2xs',
    purple: 'bg-purple-50 text-purple-800 border border-purple-200/80 shadow-2xs',
    blue: 'bg-blue-50 text-blue-800 border border-blue-200/80 shadow-2xs',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs',
    outline: 'bg-transparent text-slate-600 border border-slate-300',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full tracking-wide uppercase font-mono ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon && <span className="flex-shrink-0 text-current">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

