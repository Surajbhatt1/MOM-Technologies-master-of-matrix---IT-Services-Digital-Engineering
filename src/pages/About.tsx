import React from 'react';
import { Badge } from '../components/ui/Badge';
import { SEOHead } from '../components/seo/SEOHead';
import { StrategyProcessSection } from '../components/about/StrategyProcessSection';
import { WhyMOMSection } from '../components/about/WhyMOMSection';

export const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us — Strategy Meets Execution"
        description="We help businesses turn ideas into working digital products: polished websites, mobile experiences, online stores, campaigns, and internal tools that make day-to-day work easier."
      />

      {/* Page Header */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 border-b border-slate-200 tech-grid-pattern bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-4">
          <Badge variant="purple">ABOUT MOM TECHNOLOGIES</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Mastering the Matrix of Digital Systems
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            MOM Technologies is an IT services and consultancy partner helping businesses turn ideas into practical digital products that feel clear, fast, and useful.
          </p>
        </div>
      </section>

      {/* SECTION 1 — Strategy meets execution */}
      <StrategyProcessSection />

      {/* SECTION 2 — Why MOM */}
      <WhyMOMSection />
    </>
  );
};
