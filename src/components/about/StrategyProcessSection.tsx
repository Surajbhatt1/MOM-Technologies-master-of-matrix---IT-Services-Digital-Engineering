import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Activity,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  accent: 'cyan' | 'purple' | 'blue' | 'emerald' | 'amber';
  telemetry: string;
  deliverables: string[];
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    subtitle: 'Business goal first',
    description:
      'We dig deep into the core business model, target user friction, revenue drivers, and technical constraints before designing or architecting.',
    icon: Compass,
    accent: 'blue',
    telemetry: 'Strategic Alignment: 100%',
    deliverables: ['Problem Framing', 'User Journey Mapping', 'Technical Feasibility Blueprint'],
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Around the user',
    description:
      'Crafting frictionless, responsive interfaces, accessible design systems, interactive prototypes, and conversion-focused customer journeys.',
    icon: Palette,
    accent: 'purple',
    telemetry: 'UX Friction: Zero Bloat',
    deliverables: ['Interactive Prototypes', 'Responsive Design System', 'Component Architecture'],
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Reliable technology',
    description:
      'Engineered with modern typed stacks, resilient backend APIs, fast database schemas, and continuous automated quality assurance gates.',
    icon: Code2,
    accent: 'cyan',
    telemetry: 'Type Safety & <100ms Flow',
    deliverables: ['Production Codebase', 'API & Integration Layer', 'Automated Test Suites'],
  },
  {
    number: '04',
    title: 'Launch',
    subtitle: 'Zero-downtime deployment',
    description:
      'Smooth release orchestration to production cloud infrastructures, mobile app stores, DNS configurations, and telemetry observability.',
    icon: Rocket,
    accent: 'emerald',
    telemetry: 'Cloud Status: Ready',
    deliverables: ['Production Release', 'App Store Submission', 'Telemetry & Monitoring Setup'],
  },
  {
    number: '05',
    title: 'Improve',
    subtitle: 'Maintain & optimize',
    description:
      'Continuous performance tuning, user analytics feedback loops, security updates, conversion rate optimization, and ongoing feature expansion.',
    icon: TrendingUp,
    accent: 'amber',
    telemetry: 'Iterative Velocity: Continuous',
    deliverables: ['Performance Audits', 'Conversion Optimization', 'Continuous SLA Retainers'],
  },
];

const colorMap = {
  blue: {
    border: 'border-blue-200',
    activeBorder: 'border-blue-600',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    glow: 'from-blue-50 to-transparent',
    line: 'bg-blue-600',
  },
  purple: {
    border: 'border-purple-200',
    activeBorder: 'border-purple-600',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    glow: 'from-purple-50 to-transparent',
    line: 'bg-purple-600',
  },
  cyan: {
    border: 'border-cyan-200',
    activeBorder: 'border-cyan-600',
    bg: 'bg-cyan-50',
    text: 'text-cyan-800',
    glow: 'from-cyan-50 to-transparent',
    line: 'bg-cyan-600',
  },
  emerald: {
    border: 'border-emerald-200',
    activeBorder: 'border-emerald-600',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    glow: 'from-emerald-50 to-transparent',
    line: 'bg-emerald-600',
  },
  amber: {
    border: 'border-amber-200',
    activeBorder: 'border-amber-600',
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    glow: 'from-amber-50 to-transparent',
    line: 'bg-amber-600',
  },
};

export const StrategyProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = processSteps[activeStepIndex];
  const activeTheme = colorMap[activeStep.accent];
  const ActiveIcon = activeStep.icon;

  return (
    <section
      id="strategy-process-section"
      className="relative py-16 sm:py-24 overflow-hidden tech-grid-pattern bg-slate-50/50 border-b border-slate-200"
    >
      <Container size="xl">
        {/* Intro Header & Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Badge variant="blue" size="md">
              OUR METHODOLOGY
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Strategy meets execution.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            We help businesses turn ideas into working digital products: polished websites, mobile experiences, online stores, campaigns, and internal tools that make day-to-day work easier.
          </motion.p>
        </div>

        {/* 4-Step Approach Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs"
        >
          <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Approach is Simple</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                1
              </span>
              <p className="text-sm text-slate-800 font-medium">
                Understand the business goal first.
              </p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                2
              </span>
              <p className="text-sm text-slate-800 font-medium">
                Design around the user.
              </p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-900 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                3
              </span>
              <p className="text-sm text-slate-800 font-medium">
                Build with reliable technology.
              </p>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                4
              </span>
              <p className="text-sm text-slate-800 font-medium">
                Maintain and improve after launch.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Connected Timeline / System Visual */}
        <div className="space-y-8">
          {/* Horizontal Desktop Process Connector Bar */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-3 relative">
            {/* Continuous background pipeline line */}
            <div className="absolute top-1/2 left-6 right-6 h-[2px] bg-slate-200 -translate-y-1/2 -z-0" />

            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStepIndex === idx;
              const theme = colorMap[step.accent];

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative z-10 p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? `bg-white ${theme.activeBorder} shadow-sm scale-102 ring-2 ring-blue-500/20`
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                        isSelected ? `${theme.bg} ${theme.text} ${theme.border}` : 'bg-slate-50 border-slate-200 text-slate-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {step.number}
                    </span>
                  </div>

                  <div className="font-bold text-slate-900 text-base tracking-tight mb-0.5">
                    {step.title}
                  </div>
                  <div className="text-xs text-slate-500 font-mono line-clamp-1">
                    {step.subtitle}
                  </div>

                  {isSelected && (
                    <motion.div
                      layoutId="activeStepIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Interactive Matrix Card */}
          <motion.div
            key={activeStep.number}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm relative overflow-hidden"
          >
            {/* Top gradient glow */}
            <div
              className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${activeTheme.glow} rounded-full blur-3xl -z-10`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center ${activeTheme.bg} ${activeTheme.text} ${activeTheme.border}`}
                  >
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-blue-700 font-bold uppercase tracking-wider">
                      PHASE {activeStep.number} // {activeStep.subtitle}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {activeStep.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase text-slate-700 font-bold tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Key Milestones & Deliverables</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                    {activeStep.deliverables.map((item) => (
                      <div
                        key={item}
                        className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Abstract System Visual / Telemetry Console */}
              <div className="lg:col-span-5">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 space-y-4 font-mono text-xs shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span className="text-slate-900 font-bold">MOM.PIPELINE // STAGE_{activeStep.number}</span>
                    </div>
                    <Activity className="w-3.5 h-3.5 text-blue-700" />
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Phase Metric</span>
                      <span className="text-blue-800 font-bold">{activeStep.telemetry}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-600">Quality Gate</span>
                      <span className="text-emerald-800 font-bold">Automated & Validated</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-600">Next Progression</span>
                      <span className="text-purple-800 font-bold">
                        {activeStepIndex < 4 ? `0${activeStepIndex + 2} ${processSteps[activeStepIndex + 1].title}` : 'Continuous Retainer'}
                      </span>
                    </div>
                  </div>

                  {/* Step Switcher Controls on Mobile/Tablet */}
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                    <button
                      type="button"
                      disabled={activeStepIndex === 0}
                      onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                      className="px-3 py-1.5 rounded bg-white border border-slate-200 text-slate-700 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer text-xs font-medium"
                    >
                      &larr; Prev Phase
                    </button>
                    <span className="text-slate-500 font-medium">
                      {activeStepIndex + 1} / {processSteps.length}
                    </span>
                    <button
                      type="button"
                      disabled={activeStepIndex === processSteps.length - 1}
                      onClick={() => setActiveStepIndex((prev) => Math.min(processSteps.length - 1, prev + 1))}
                      className="px-3 py-1.5 rounded bg-white border border-slate-200 text-slate-700 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer text-xs font-medium"
                    >
                      Next Phase &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

