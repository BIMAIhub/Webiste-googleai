import React, { useState } from 'react';
import { Play, CheckCircle, ArrowRight, Zap, Code2, Palette, ShieldCheck, Cpu } from 'lucide-react';

interface ScriptedBIMSectionProps {
  onOpenContact: (defaultProduct?: 'ScriptedBIM' | 'BIMAI' | 'General') => void;
}

const ADDIN_FEATURES = [
  { title: 'Full Whitelabel & Branding', desc: 'Built with your company logo, custom color palette & unified UI theme. No BIMAIhub branding.' },
  { title: 'C# .NET & Python pyRevit', desc: 'Native high-performance C# Revit API Add-ins combined with rapid Python pyRevit scripts.' },
  { title: 'Project & Problem Specific', desc: 'Custom tools designed for your exact project bottlenecks, parameter checks & firm standards.' }
];

export const ScriptedBIMSection: React.FC<ScriptedBIMSectionProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'Custom Add-in' | 'C# / pyRevit' | 'White Label'>('Custom Add-in');
  const [selectedCompanyTheme, setSelectedCompanyTheme] = useState<'AEC Global' | 'Architects Studio' | 'Custom Firm'>('AEC Global');

  return (
    <section id="scriptedbim" className="pt-20 sm:pt-28 pb-10 px-4 sm:px-8 relative">
      <div className="max-w-[1120px] mx-auto bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Left Information Column */}
        <div className="p-8 sm:p-12 lg:w-1/2 flex flex-col justify-center">
          <span className="text-xs font-bold text-[#0b3550] tracking-widest uppercase mb-4 inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#0EA9BC]" /> 01 / 02 · CUSTOM AUTOMATION ADD-INS
          </span>
          
          <h3 className="font-extrabold text-3xl sm:text-4xl text-[#05131a] mb-5 leading-tight">
            ScriptedBIM: Custom Add-ins with Your Company Branding
          </h3>
          
          <p className="text-base sm:text-lg text-[#55636a] mb-6 leading-relaxed">
            We build custom <strong>C# (.NET) Revit Add-ins</strong> and <strong>Python pyRevit automation tools</strong> tailored specifically to your company’s workflow. Built with <strong>your logo, your UI theme, and your firm branding</strong> — zero BIMAIhub logos.
          </p>

          <div className="space-y-3 mb-8">
            {ADDIN_FEATURES.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50/80 rounded-2xl border border-slate-200/80">
                <div className="p-1.5 bg-[#0EA9BC]/10 rounded-xl text-[#0EA9BC] mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#05131a]">{feat.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-cyan-50 rounded-2xl border border-cyan-200 mb-6 flex items-center justify-between text-xs text-cyan-950 font-bold">
            <span className="flex items-center gap-1.5">
              <span>🎁</span> 11-Days Free Trial: Custom Add-in for your company
            </span>
            <span className="text-[10px] bg-cyan-200 text-cyan-950 px-2 py-0.5 rounded-md uppercase">Zero Cost</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenContact('ScriptedBIM', 'We want to test an 11-Day Free Trial for a Custom Company Add-in.')}
              className="inline-flex items-center justify-center gap-2 bg-[#0EA9BC] hover:bg-[#0EA9BC]/90 text-white font-bold px-7 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <span>Request 11-Day Add-in Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-500 font-medium">C#, Python, Revit API &amp; pyRevit</span>
          </div>
        </div>

        {/* Right Live Interactive Mock UI - Showing Company Custom Branded Ribbon */}
        <div className="lg:w-1/2 bg-gradient-to-br from-[#0EA9BC]/10 via-[#326578]/10 to-[#0B3550]/20 relative overflow-hidden flex items-center justify-center p-6 border-t lg:border-t-0 lg:border-l border-white/60">
          
          <div className="w-full max-w-md bg-white/90 backdrop-blur-2xl rounded-2xl border border-white/90 shadow-2xl overflow-hidden flex flex-col">
            
            {/* Custom Ribbon Bar Header with Selected Firm Logo */}
            <div className="p-3.5 bg-gradient-to-r from-slate-900 to-[#0b3550] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#0EA9BC] flex items-center justify-center text-white font-black text-xs">
                  {selectedCompanyTheme.charAt(0)}
                </div>
                <div>
                  <span className="block font-bold text-xs leading-none">{selectedCompanyTheme} Add-in</span>
                  <span className="text-[10px] text-slate-300 font-mono">Custom Revit Ribbon Ribbon v2.4</span>
                </div>
              </div>

              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-extrabold px-2 py-0.5 rounded-full uppercase">
                100% White-Labeled
              </span>
            </div>

            {/* Sub Nav Tabs */}
            <div className="flex items-center justify-between p-3 border-b border-slate-200/80 bg-slate-50/80">
              <div className="flex gap-1.5 bg-slate-200/60 p-1 rounded-xl text-xs">
                {(['Custom Add-in', 'C# / pyRevit', 'White Label'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      activeTab === tab
                        ? 'bg-white text-[#05131a] shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Theme Switcher Toggle */}
              <div className="text-[10px] font-bold text-slate-500">
                <span className="mr-1 hidden sm:inline">Theme:</span>
                <select
                  value={selectedCompanyTheme}
                  onChange={(e) => setSelectedCompanyTheme(e.target.value as any)}
                  className="bg-white border border-slate-300 rounded-lg text-[10px] py-1 px-1.5 text-slate-800 font-bold focus:outline-none"
                >
                  <option value="AEC Global">AEC Global</option>
                  <option value="Architects Studio">Architects Studio</option>
                  <option value="Custom Firm">Your Firm</option>
                </select>
              </div>
            </div>

            {/* Tab Contents */}
            <div className="p-4 space-y-4 min-h-[310px]">
              {activeTab === 'Custom Add-in' && (
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-500 flex justify-between items-center">
                    <span>CUSTOM REVIT TOOLBAR (YOUR LOGO &amp; THEME)</span>
                    <span className="text-[#0EA9BC] font-mono">Revit 2024–2026</span>
                  </div>

                  {/* Toolbar Preview Buttons */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-slate-100 rounded-2xl border border-slate-200">
                    <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center hover:border-[#0EA9BC] transition-colors cursor-pointer">
                      <Code2 className="w-5 h-5 text-[#0EA9BC] mb-1" />
                      <span className="text-[10px] font-bold text-slate-800">Auto-Renumber</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center hover:border-[#0EA9BC] transition-colors cursor-pointer">
                      <Cpu className="w-5 h-5 text-[#0b3550] mb-1" />
                      <span className="text-[10px] font-bold text-slate-800">Sheet Batcher</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center hover:border-[#0EA9BC] transition-colors cursor-pointer">
                      <Palette className="w-5 h-5 text-[#326578] mb-1" />
                      <span className="text-[10px] font-bold text-slate-800">Family Audit</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#0EA9BC]/10 rounded-2xl border border-[#0EA9BC]/20 space-y-1.5">
                    <div className="text-xs font-bold text-[#0b3550] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#0EA9BC]" /> Zero BIMAIhub Branding
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      Your staff &amp; clients see 100% your brand logo, corporate colors, and custom naming on all installer dialogs and Revit ribbons.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'C# / pyRevit' && (
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-500">UNIFIED ENGINE DUAL STACK</div>
                  <div className="p-3.5 bg-slate-900 text-slate-200 rounded-2xl font-mono text-xs space-y-2 border border-slate-800">
                    <div className="text-[#0EA9BC] font-bold">// C# .NET High Performance Add-in</div>
                    <div className="text-slate-400 text-[11px]">
                      [Transaction(TransactionMode.Manual)]<br />
                      public class FirmAutoChecker : IExternalCommand
                    </div>
                    <div className="pt-2 text-emerald-400 font-bold">// pyRevit Python Script Integration</div>
                    <div className="text-slate-400 text-[11px]">
                      from pyrevit import revit, DB, script<br />
                      doc = revit.doc
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'White Label' && (
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-500">CUSTOM BRANDING CONFIGURATOR</div>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Client Logo (.png / .svg):</span>
                      <span className="font-bold text-[#0EA9BC] bg-[#0EA9BC]/10 px-2 py-0.5 rounded">Uploaded ✓</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Revit Ribbon Name:</span>
                      <span className="font-bold text-slate-800 font-mono">[{selectedCompanyTheme} Tools]</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="font-semibold text-slate-700">Unified UI Theme:</span>
                      <span className="font-bold text-slate-800">Custom Corporate</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Custom Add-in Generator Active
                </span>
                <span className="font-mono text-slate-400">Revit API / C# / pyRevit</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

