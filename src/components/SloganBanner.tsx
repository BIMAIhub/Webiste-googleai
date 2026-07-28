import React, { useState } from 'react';
import { Clock, Zap, CheckCircle2, AlertTriangle, Layers, FileText, Bot } from 'lucide-react';

export const SloganBanner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'traditional' | 'bimaihub'>('bimaihub');

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0EA9BC]/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <h2 className="font-extrabold text-3xl sm:text-5xl md:text-6xl leading-[1.15] text-[#05131a] tracking-tight">
          Imagine BIM without the busywork.
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Architects, engineers, and BIM managers spend up to 40% of their time on manual auditing, repetitive tag sync, clash exports, and parameter checks. We automated that.
        </p>

        {/* Interactive Comparison Toggle */}
        <div className="pt-4 max-w-3xl mx-auto">
          <div className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200 shadow-inner mb-6">
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'traditional'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Clock className="w-4 h-4" /> Traditional Manual Workflow
            </button>
            <button
              onClick={() => setActiveTab('bimaihub')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'bimaihub'
                  ? 'bg-[#0EA9BC] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-4 h-4" /> The BIMAIhub Way
            </button>
          </div>

          {/* Comparison Content */}
          <div className="bg-slate-50/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm text-left transition-all">
            {activeTab === 'traditional' ? (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center gap-3 text-rose-600 font-bold text-sm sm:text-base border-b border-slate-200 pb-3">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>The Manual Busywork Nightmare (~18 hrs / week per coordinator)</span>
                </div>
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-0.5">•</span>
                    <span><strong>Manual Parameter Verification:</strong> Checking 2,000+ room tags and COBie attributes row by row.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-0.5">•</span>
                    <span><strong>Repetitive Exports:</strong> Running IFC/DWG/PDF export routines manually for every project revision.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-0.5">•</span>
                    <span><strong>Clash Triage Fatigue:</strong> Filtering through 800 false-positive clashes manually before coordination meetings.</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center gap-3 text-[#0EA9BC] font-bold text-sm sm:text-base border-b border-slate-200 pb-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Automated with BIMAIhub (&lt;5 mins background run)</span>
                </div>
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0EA9BC] font-bold mt-0.5">✓</span>
                    <span><strong>Scripted Parameter Enforcement:</strong> ScriptedBIM validates and populates element properties across models automatically.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0EA9BC] font-bold mt-0.5">✓</span>
                    <span><strong>Continuous AI Model Insight:</strong> BIMAI flags critical spatial clashes and generates natural language summary reports instantly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0EA9BC] font-bold mt-0.5">✓</span>
                    <span><strong>One-Click Workflow Passes:</strong> Scheduled background coordination runs that export BCF files and alert your team.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
