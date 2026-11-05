import React from 'react';
import {
  ShoppingBag,
  Cpu,
  BarChart3,
  CreditCard,
  Send,
} from 'lucide-react';

interface ProjectVisualPreviewProps {
  type: string;
  accent: 'cyan' | 'purple' | 'blue' | 'emerald' | 'amber' | 'indigo';
  name: string;
}

export const ProjectVisualPreview: React.FC<ProjectVisualPreviewProps> = ({ type, accent, name }) => {
  return (
    <div className="relative w-full h-56 sm:h-64 lg:h-72 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden group/preview flex flex-col justify-between select-none">
      {/* Top Window Chrome / Bar */}
      <div className="h-8 bg-slate-100/90 border-b border-slate-200 px-3 sm:px-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
        </div>
        <div className="text-slate-500 text-[10px] font-mono flex items-center gap-1">
          <span className="text-blue-700 font-bold">mom.systems</span>
          <span>/</span>
          <span>{type}</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-blue-600" />
      </div>

      {/* Main Abstract Visual Display Canvas */}
      <div className="relative flex-1 p-4 sm:p-5 overflow-hidden flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        {/* Dynamic Abstract View Types */}
        {type === 'web-experience' && (
          <div className="w-full max-w-sm space-y-3">
            {/* Header wireframe */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-100 border border-blue-300" />
                <div className="h-2 w-16 bg-slate-300 rounded" />
              </div>
              <div className="flex gap-1.5">
                <div className="h-2 w-8 bg-slate-200 rounded" />
                <div className="h-2 w-8 bg-slate-200 rounded" />
                <div className="h-2 w-10 bg-blue-500 rounded" />
              </div>
            </div>

            {/* Hero Banner wireframe */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 space-y-2">
              <div className="h-3 w-3/4 bg-blue-600 rounded" />
              <div className="h-2 w-1/2 bg-slate-400 rounded" />
              <div className="pt-1 flex gap-2">
                <div className="h-4 w-14 rounded-full bg-blue-600 text-[9px] text-white font-mono flex items-center justify-center font-bold">
                  Explore
                </div>
                <div className="h-4 w-12 rounded-full bg-white border border-slate-200" />
              </div>
            </div>

            {/* 3-card layout preview */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-white border border-slate-200 space-y-1 shadow-2xs">
                <div className="w-3 h-3 rounded bg-blue-100" />
                <div className="h-1.5 w-full bg-slate-200 rounded" />
              </div>
              <div className="p-2 rounded-lg bg-white border border-slate-200 space-y-1 shadow-2xs">
                <div className="w-3 h-3 rounded bg-purple-100" />
                <div className="h-1.5 w-full bg-slate-200 rounded" />
              </div>
              <div className="p-2 rounded-lg bg-white border border-slate-200 space-y-1 shadow-2xs">
                <div className="w-3 h-3 rounded bg-cyan-100" />
                <div className="h-1.5 w-full bg-slate-200 rounded" />
              </div>
            </div>
          </div>
        )}

        {type === 'ecommerce' && (
          <div className="w-full max-w-sm space-y-3">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-3.5 h-3.5 text-blue-700" />
                <span className="text-[10px] font-mono font-bold text-slate-700">Checkout Pipeline</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 font-bold">Encrypted</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-white border border-blue-200 space-y-2 shadow-2xs">
                <div className="h-12 w-full rounded-lg bg-blue-50 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-blue-700" />
                </div>
                <div className="h-2 w-16 bg-slate-300 rounded" />
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-blue-800 font-bold">$249.00</span>
                  <div className="h-3 w-6 rounded bg-blue-100" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-purple-200 space-y-2 shadow-2xs">
                <div className="h-12 w-full rounded-lg bg-purple-50 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-purple-700" />
                </div>
                <div className="h-2 w-14 bg-slate-300 rounded" />
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-purple-800 font-bold">$189.00</span>
                  <div className="h-3 w-6 rounded bg-purple-100" />
                </div>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-[10px] font-mono text-emerald-800">
              <span className="font-semibold">Instant Payment Engine</span>
              <span className="font-bold">&lt; 300ms SLA</span>
            </div>
          </div>
        )}

        {type === 'business-system' && (
          <div className="w-full max-w-sm space-y-2.5">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-purple-200 shadow-2xs">
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-purple-700" />
                <span className="text-[10px] font-mono font-bold text-slate-800">Ops Task Manager</span>
              </div>
              <span className="text-[9px] font-mono bg-purple-100 text-purple-800 font-bold px-1.5 py-0.5 rounded">
                RBAC Active
              </span>
            </div>

            {/* Table Mockup */}
            <div className="rounded-lg bg-white border border-slate-200 divide-y divide-slate-100 text-[10px] font-mono shadow-2xs">
              <div className="p-2 flex justify-between items-center text-slate-500 font-semibold">
                <span>Task / Pipeline</span>
                <span>Status</span>
              </div>
              <div className="p-2 flex justify-between items-center text-slate-700">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Order Dispatch Sync
                </span>
                <span className="text-emerald-700 font-bold">COMPLETED</span>
              </div>
              <div className="p-2 flex justify-between items-center text-slate-700">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  Inventory Rebalance
                </span>
                <span className="text-amber-700 font-bold">PROCESSING</span>
              </div>
            </div>
          </div>
        )}

        {type === 'mobile-app' && (
          <div className="flex items-center justify-center gap-4">
            {/* Phone Mockup Frame */}
            <div className="w-40 h-44 rounded-2xl bg-white border-2 border-slate-300 p-2.5 flex flex-col justify-between shadow-md">
              <div className="flex justify-between items-center text-[8px] font-mono text-slate-500">
                <span>09:41</span>
                <div className="w-2 h-1 bg-slate-400 rounded-sm" />
              </div>

              <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 space-y-1">
                <div className="text-[9px] font-bold text-slate-900">Field Workflow</div>
                <div className="text-[8px] text-blue-700 font-mono font-medium">Offline Sync: OK</div>
              </div>

              <div className="space-y-1">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-3/4" />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-slate-500 font-medium">
                  <span>Task 12/16</span>
                  <span className="text-blue-700 font-bold">75%</span>
                </div>
              </div>

              <div className="h-4 rounded-md bg-blue-600 flex items-center justify-center text-[8px] font-mono text-white font-bold">
                Submit Report
              </div>
            </div>

            {/* Side specs */}
            <div className="space-y-2 text-[10px] font-mono">
              <div className="p-2 rounded bg-white border border-slate-200 text-slate-700 shadow-2xs">
                <div className="font-bold text-slate-900">Android & iOS</div>
                <div className="text-blue-700 text-[9px] font-semibold">SQLite Offline Engine</div>
              </div>
              <div className="p-2 rounded bg-white border border-slate-200 text-slate-700 shadow-2xs">
                <div className="font-bold text-slate-900">Biometric Lock</div>
                <div className="text-purple-700 text-[9px] font-semibold">Hardware Enclave</div>
              </div>
            </div>
          </div>
        )}

        {type === 'dashboard' && (
          <div className="w-full max-w-sm space-y-2.5">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-indigo-200 shadow-2xs">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5 text-indigo-700" />
                <span className="text-[10px] font-mono font-bold text-slate-800">Executive Telemetry</span>
              </div>
              <span className="text-[9px] font-mono text-blue-700 font-bold">Live 1s Refresh</span>
            </div>

            {/* Multi-bar graph simulation */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <div className="flex items-end justify-between h-14 pt-2 gap-1.5 px-2">
                <div className="w-full bg-slate-200 h-[40%] rounded-t" />
                <div className="w-full bg-blue-200 h-[65%] rounded-t" />
                <div className="w-full bg-blue-300 h-[50%] rounded-t" />
                <div className="w-full bg-blue-500 h-[85%] rounded-t" />
                <div className="w-full bg-purple-400 h-[70%] rounded-t" />
                <div className="w-full bg-blue-700 h-[100%] rounded-t" />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-slate-500 border-t border-slate-100 pt-1">
                <span>Revenue Flow</span>
                <span className="text-blue-700 font-bold">Peak Throughput</span>
              </div>
            </div>
          </div>
        )}

        {type === 'marketing' && (
          <div className="w-full max-w-sm space-y-2.5">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-amber-200 shadow-2xs">
              <div className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5 text-amber-700" />
                <span className="text-[10px] font-mono font-bold text-slate-800">Outreach Sequencer</span>
              </div>
              <span className="text-[9px] font-mono text-amber-700 font-bold">Automated Funnel</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-white border border-amber-200 space-y-1 text-[10px] font-mono shadow-2xs">
                <div className="text-slate-500 font-medium">SMS Broadcast</div>
                <div className="text-amber-800 font-bold">99.2% Delivery</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-blue-200 space-y-1 text-[10px] font-mono shadow-2xs">
                <div className="text-slate-500 font-medium">Email Drip Seq</div>
                <div className="text-blue-800 font-bold">Attribution: ON</div>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[9px] font-mono text-slate-700">
              <span className="font-medium">Dynamic Landing Pages</span>
              <span className="text-emerald-700 font-bold">UTM Synced</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Placeholder Tag & Indicator */}
      <div className="h-7 bg-slate-100/90 border-t border-slate-200 px-3 sm:px-4 flex items-center justify-between text-[10px] font-mono">
        <span className="text-slate-600">Status: Concept Architecture</span>
        <span className="text-blue-700 font-bold">[READY FOR IMPLEMENTATION]</span>
      </div>
    </div>
  );
};
