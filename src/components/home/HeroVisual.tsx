import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Palette, Code2, TrendingUp, Zap, ShieldCheck, Activity } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2); // 0: Strategy, 1: Design, 2: Technology, 3: Growth

  const workflowSteps = [
    {
      id: 'strategy',
      index: 0,
      label: 'Strategy',
      icon: Compass,
      badgeColor: 'border-blue-200 text-blue-700 bg-blue-50',
      activeBg: 'bg-blue-50/70 border-blue-300',
      tag: 'ARCHITECTURE',
      status: 'Scoping & Feasibility',
      stats: '100% Aligned',
    },
    {
      id: 'design',
      index: 1,
      label: 'Design',
      icon: Palette,
      badgeColor: 'border-purple-200 text-purple-700 bg-purple-50',
      activeBg: 'bg-purple-50/70 border-purple-300',
      tag: 'EXPERIENCE',
      status: 'Clarity & Systems',
      stats: 'Frictionless UI/UX',
    },
    {
      id: 'technology',
      index: 2,
      label: 'Technology',
      icon: Code2,
      badgeColor: 'border-cyan-200 text-cyan-800 bg-cyan-50',
      activeBg: 'bg-cyan-50/70 border-cyan-300',
      tag: 'ENGINEERING',
      status: 'Resilient Stacks',
      stats: '<100ms Flow',
    },
    {
      id: 'growth',
      index: 3,
      label: 'Growth',
      icon: TrendingUp,
      badgeColor: 'border-indigo-200 text-indigo-700 bg-indigo-50',
      activeBg: 'bg-indigo-50/70 border-indigo-300',
      tag: 'AUTOMATION & SCALE',
      status: 'Continuous Loop',
      stats: 'Measurable Outcomes',
    },
  ];

  return (
    <div id="hero-workflow-matrix-visual" className="relative w-full max-w-lg mx-auto lg:max-w-none select-none">
      {/* Subtle ambient gradient backdrop */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-cyan-500/10 rounded-3xl blur-xl -z-10" />

      {/* Main Container Card */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-7 shadow-sm relative overflow-hidden">
        {/* Top Header of System Matrix */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <span className="text-xs font-mono font-bold text-slate-800 tracking-wider">
              MOM.SYSTEMS // WORKFLOW MATRIX
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-medium">Active Pipeline</span>
          </div>
        </div>

        {/* 4 Connected Pipeline Nodes: Strategy → Design → Technology → Growth */}
        <div className="space-y-2.5">
          {workflowSteps.map((step) => {
            const Icon = step.icon;
            const isSelected = activeStep === step.index;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.index)}
                className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? `${step.activeBg} shadow-2xs`
                    : 'bg-slate-50/60 border-slate-200/70 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {/* Active side indicator */}
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600" />
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                        isSelected
                          ? `${step.badgeColor} shadow-2xs`
                          : 'bg-white border-slate-200 text-slate-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 tracking-tight">
                          {step.label}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">
                          0{step.index + 1}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-normal">
                        {step.status}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-mono font-bold text-blue-700">
                      {step.stats}
                    </span>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {step.tag}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Progression Pathway Connector */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5 text-blue-700">
            <Zap className="w-3.5 h-3.5" />
            <span className="font-semibold">Integrated Cycle</span>
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <span className={activeStep === 0 ? 'text-blue-700 font-bold' : 'text-slate-400'}>Strategy</span>
            <span className="text-slate-300">&rarr;</span>
            <span className={activeStep === 1 ? 'text-purple-700 font-bold' : 'text-slate-400'}>Design</span>
            <span className="text-slate-300">&rarr;</span>
            <span className={activeStep === 2 ? 'text-cyan-700 font-bold' : 'text-slate-400'}>Tech</span>
            <span className="text-slate-300">&rarr;</span>
            <span className={activeStep === 3 ? 'text-indigo-700 font-bold' : 'text-slate-400'}>Growth</span>
          </div>
        </div>

        {/* Telemetry Architecture Status Banner */}
        <div className="mt-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Architecture Status:</span>
          </div>
          <span className="text-emerald-700 font-bold">Production Ready</span>
        </div>
      </div>
    </div>
  );
};

