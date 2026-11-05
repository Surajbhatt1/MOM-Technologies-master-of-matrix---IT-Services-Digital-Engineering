import React from 'react';
import { Container } from './Container';
import { Badge } from './Badge';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  badge?: string;
  badgeVariant?: 'cyan' | 'purple' | 'blue' | 'neutral';
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  headerAlign?: 'left' | 'center';
  background?: 'transparent' | 'surface' | 'grid' | 'radial-glow' | 'white' | 'default';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  badge,
  badgeVariant = 'cyan',
  title,
  description,
  headerAlign = 'center',
  background = 'transparent',
  containerSize = 'lg',
  paddingY = 'lg',
  className = '',
  ...props
}) => {
  const paddingClasses = {
    none: 'py-0',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
    xl: 'py-20 sm:py-32',
  }[paddingY];

  const bgClasses = {
    transparent: '',
    default: '',
    white: 'bg-white',
    surface: 'bg-slate-50/80 border-y border-slate-200/80',
    grid: 'tech-grid-pattern relative bg-white',
    'radial-glow': 'tech-radial-glow relative bg-slate-50/50',
  }[background];

  const hasHeader = badge || title || description;

  return (
    <section id={id} className={`relative ${paddingClasses} ${bgClasses} ${className}`} {...props}>
      <Container size={containerSize}>
        {hasHeader && (
          <div
            className={`mb-12 sm:mb-16 ${
              headerAlign === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
            }`}
          >
            {badge && (
              <div className="mb-4">
                <Badge variant={badgeVariant}>{badge}</Badge>
              </div>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
};

