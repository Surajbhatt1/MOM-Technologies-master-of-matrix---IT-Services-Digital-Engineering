import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Layers,
  MessagesSquare,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  GitBranch,
  Activity,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const WhyMOMSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Business-first thinking',
      headline: 'Outcomes Over Empty Features',
      description:
        'Every feature connects back to growth, efficiency, customer trust, or measurable outcomes.',
      accent: 'blue',
      icon: TrendingUp,
      details: [
        'Direct link to revenue growth & conversion',
        'Elimination of operational overhead and manual waste',
        'Customer trust through enterprise-grade reliability',
        'Measurable KPIs defined before engineering starts',
      ],
      visualType: 'metrics',
    },
    {
      number: '02',
      title: 'Clean execution',
      headline: 'Resilient Architectures & Craft',
      description:
        'We care about responsive design, readable systems, smooth handoff, and long-term maintainability.',
      accent: 'purple',
      icon: Layers,
      details: [
        'Fluid responsive design across all breakpoints',
        'Strictly typed, clean and self-documenting codebases',
        'Seamless developer handoff & architecture documentation',
        'Zero architectural debt designed for long-term scalability',
      ],
      visualType: 'system',
    },
    {
      number: '03',
      title: 'Clear collaboration',
      headline: 'Direct & Plain-Language Partnership',
      description:
        'You get direct communication, useful updates, and decisions explained in plain language.',
      accent: 'cyan',
      icon: MessagesSquare,
      details: [
        'Direct access to senior engineering & design leads',
        'Weekly async demos & transparent milestone trackers',
        'Plain-language decision rationales with no jargon walls',
        'Proactive recommendations instead of passive ticket taking',
      ],
      visualType: 'telemetry',
    },
  ];

  return (
    <section
      id="why-mom-section"
      className="relative py-16 sm:py-24 overflow-hidden tech-grid-pattern bg-white"
    >
      <Container size="xl">
        {/* Intro Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Badge variant="purple" size="md">
              WHY MOM TECHNOLOGIES
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            One partner for digital growth, build, and support.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            We connect strategy, design, engineering, and marketing so your project moves faster with fewer gaps between teams.
          </motion.p>
        </div>

        {/* 3 Premium Feature Blocks */}
        <div className="space-y-8 sm:space-y-12">
          {pillars.map((pillar, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl bg-white border border-slate-200 hover:border-blue-300 p-6 sm:p-10 shadow-2xs hover:shadow-sm relative overflow-hidden transition-all duration-300 group"
              >
                {/* Subtle top light bar */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600/0 to-transparent group-hover:via-blue-600/80 transition-all duration-500" />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Content (7 cols) */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-700">
                        {pillar.number}
                      </span>
                      <div className="h-4 w-[1px] bg-slate-200" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                        PILLAR {pillar.number} // ADVANTAGE
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {pillar.title}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>

                    {/* Bullet Proof Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {pillar.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-normal"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Abstract Digital Visual Card (5 cols) */}
                  <div
                    className={`lg:col-span-5 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {pillar.visualType === 'metrics' && (
                      <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 sm:p-6 space-y-4 font-mono text-xs shadow-2xs">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                          <div className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-blue-700" />
                            <span className="text-slate-900 font-bold">OUTCOME TELEMETRY</span>
                          </div>
                          <span className="text-emerald-800 text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                            OPTIMIZED
                          </span>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-[11px] mb-1">
                              <span className="text-slate-600">Conversion Impact</span>
                              <span className="text-blue-800 font-bold">+38% Efficiency</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full w-[85%]" />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[11px] mb-1">
                              <span className="text-slate-600">User Retention Loop</span>
                              <span className="text-purple-800 font-bold">99.4% Reliability</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full w-[94%]" />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[11px] mb-1">
                              <span className="text-slate-600">Manual Overhead</span>
                              <span className="text-emerald-800 font-bold">-62% Reduction</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full w-[70%]" />
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                          <span>Focus: Business ROI</span>
                          <span className="text-blue-700 font-semibold">Verified System</span>
                        </div>
                      </div>
                    )}

                    {pillar.visualType === 'system' && (
                      <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 sm:p-6 space-y-4 font-mono text-xs shadow-2xs">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                          <div className="flex items-center gap-2">
                            <GitBranch className="w-4 h-4 text-purple-700" />
                            <span className="text-slate-900 font-bold">ARCHITECTURE DISCIPLINE</span>
                          </div>
                          <span className="text-purple-800 text-[10px] bg-purple-50 px-2 py-0.5 rounded border border-purple-200 font-bold">
                            CLEAN CODE
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                            <span className="text-slate-700 font-medium">Responsive Breakpoints</span>
                            <span className="text-emerald-700 font-bold">100% Fluid</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                            <span className="text-slate-700 font-medium">Strict TypeScript Types</span>
                            <span className="text-blue-700 font-bold">Strict: true</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between">
                            <span className="text-slate-700 font-medium">Self-Documenting Specs</span>
                            <span className="text-purple-700 font-bold">Zero Debt</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                          <span>Standard: Long-term Longevity</span>
                          <span className="text-emerald-700 font-semibold">Production Tested</span>
                        </div>
                      </div>
                    )}

                    {pillar.visualType === 'telemetry' && (
                      <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 sm:p-6 space-y-4 font-mono text-xs shadow-2xs">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-blue-700" />
                            <span className="text-slate-900 font-bold">COLLABORATION PROTOCOL</span>
                          </div>
                          <span className="text-blue-800 text-[10px] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">
                            DIRECT SYNC
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-slate-200">
                            <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                            <div className="text-[11px] text-slate-700">
                              Direct Lead Access (No account manager filters)
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-slate-200">
                            <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
                            <div className="text-[11px] text-slate-700">
                              Plain-Language Architecture Walkthroughs
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-slate-200">
                            <div className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0" />
                            <div className="text-[11px] text-slate-700">
                              Async Sprints & Weekly Working Builds
                            </div>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                          <span>Communication: Clear & Transparent</span>
                          <span className="text-blue-700 font-semibold">Zero Guesswork</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-left sm:pr-4">
              <div className="text-sm font-bold text-slate-900">
                Experience the difference of a focused technical partner.
              </div>
              <div className="text-xs text-slate-600">
                From initial idea to launch, build, and support.
              </div>
            </div>
            <Button
              id="why-mom-lets-talk-btn"
              to="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

