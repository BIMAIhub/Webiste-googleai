import React, { useState } from 'react';
import { Bot, Sparkles, BrainCircuit, ArrowRight, Image as ImageIcon, FileCheck, Layers, Terminal, MessageSquareCode } from 'lucide-react';

interface BIMAISectionProps {
  onOpenContact: (defaultProduct?: 'ScriptedBIM' | 'BIMAI' | 'General') => void;
}

const AI_TOOLS_LIST = [
  { id: 'chatbot', name: 'Custom Company AI Chatbot', icon: Bot, desc: 'Trained on your firm standards, specs & BIM execution plans with your company logo.' },
  { id: 'img2rfa', name: 'Image to Revit Family (.rfa)', icon: ImageIcon, desc: 'Convert 2D catalog photos or sketches into native parametric Revit families automatically.' },
  { id: 'sheets', name: 'Sheets & Drawing AI Checker', icon: FileCheck, desc: 'Automated AI audit for sheet titles, dimension completeness & drafting compliance.' },
  { id: 'cad23d', name: '2D to 3D Model Converter', icon: Layers, desc: 'Transform 2D DWG / PDF floor plans into structured 3D BIM elements instantly.' },
  { id: 'devops', name: 'AI DevOps, Rhino & Revit Copilot', icon: Terminal, desc: 'AI assistant for Grasshopper scripts, Python Revit API, and automated BIM DevOps pipelines.' },
];

export const BIMAISection: React.FC<BIMAISectionProps> = ({ onOpenContact }) => {
  const [selectedToolId, setSelectedToolId] = useState('chatbot');
  const [demoInput, setDemoInput] = useState('');
  const [demoOutput, setDemoOutput] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentTool = AI_TOOLS_LIST.find(t => t.id === selectedToolId) || AI_TOOLS_LIST[0];

  const handleRunDemo = () => {
    setIsProcessing(true);
    setDemoOutput(null);

    setTimeout(() => {
      setIsProcessing(false);
      if (selectedToolId === 'chatbot') {
        setDemoOutput('💬 [Company AI Assistant]: According to Section 03.2 of your Firm BIM Standard, all Level 2 HVAC ducts must use Omniclass Table 23 classification and carry minimum 25mm acoustic lining.');
      } else if (selectedToolId === 'img2rfa') {
        setDemoOutput('📸 [Image ➔ .RFA Generator]: Processed catalog photo. Generated 3D Parametric Chair Family (.rfa) with 6 size parameters and LOD 300 geometry.');
      } else if (selectedToolId === 'sheets') {
        setDemoOutput('📑 [Sheets AI Checker]: Audited Sheet A-102. Found 2 missing elevation tags and 1 unlinked door schedule reference.');
      } else if (selectedToolId === 'cad23d') {
        setDemoOutput('📐 [2D ➔ 3D Converter]: Extracted 34 exterior wall polylines from PDF layout. Built 3D Wall Elements with 200mm thickness.');
      } else {
        setDemoOutput('🤖 [DevOps & Grasshopper Assistant]: Generated Python Grasshopper script for adaptive facade panelization with 12 solar orientation variables.');
      }
    }, 900);
  };

  return (
    <section id="bimai" className="pt-10 pb-20 sm:pb-28 px-4 sm:px-8 relative">
      <div className="max-w-[1120px] mx-auto bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row min-h-[620px]">
        
        {/* Left Information Column */}
        <div className="p-8 sm:p-12 lg:w-1/2 flex flex-col justify-center">
          <span className="text-xs font-bold text-[#0b3550] tracking-widest uppercase mb-4 inline-flex items-center gap-1.5">
            <BrainCircuit className="w-3.5 h-3.5 text-[#0EA9BC]" /> 02 / 02 · CUSTOM AI &amp; MODEL INTELLIGENCE
          </span>

          <h3 className="font-extrabold text-3xl sm:text-4xl text-[#05131a] mb-5 leading-tight">
            BIMAI: Firm-Branded Chatbots &amp; AI Tools
          </h3>

          <p className="text-base sm:text-lg text-[#55636a] mb-6 leading-relaxed">
            Deploy a <strong>Custom AI Chatbot with your company logo</strong> trained on your firm’s BIM standards, alongside advanced AI generators for <strong>Image-to-Revit families, 2D-to-3D conversion, Sheets AI auditing, and Rhino/DevOps assistants</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-[#05131a] flex items-center gap-2">
              <Bot className="w-4 h-4 text-[#0EA9BC]" /> Company AI Chatbots
            </div>
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-[#05131a] flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#0EA9BC]" /> Image ➔ Revit Family
            </div>
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-[#05131a] flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#0EA9BC]" /> Sheets AI Checker
            </div>
            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-[#05131a] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0EA9BC]" /> 2D CAD ➔ 3D Model
            </div>
          </div>

          <div className="p-3 bg-cyan-50 rounded-2xl border border-cyan-200 mb-6 flex items-center justify-between text-xs text-cyan-950 font-bold">
            <span className="flex items-center gap-1.5">
              <span>📸</span> 11-Days Trial: AI Solutions (Image to Revit Family, Firm Chatbots &amp; Sheets AI)
            </span>
            <span className="text-[10px] bg-cyan-200 text-cyan-950 px-2 py-0.5 rounded-md uppercase">Free Trial</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenContact('BIMAI', 'We want to test an 11-Day Free Trial for AI Solutions (Image to Revit family & Firm Chatbot).')}
              className="inline-flex items-center justify-center gap-2 bg-[#05131a] hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <span>Get 11-Day AI Solutions Trial</span>
              <ArrowRight className="w-4 h-4 text-[#0EA9BC]" />
            </button>
            <span className="text-xs text-slate-500 font-medium">Image-to-Revit, Firm AI &amp; Sheets AI</span>
          </div>
        </div>

        {/* Right Interactive AI Tool Playground */}
        <div className="lg:w-1/2 bg-gradient-to-br from-[#0B3550]/30 via-[#326578]/20 to-[#0EA9BC]/25 relative overflow-hidden flex items-center justify-center p-6 border-t lg:border-t-0 lg:border-l border-white/60">
          
          <div className="w-full max-w-md bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/90 shadow-2xl p-5 space-y-4">
            
            {/* Header Status Bar */}
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#0EA9BC]/10 flex items-center justify-center border border-[#0EA9BC]/30 shadow-sm">
                  <Sparkles className="w-5 h-5 text-[#0EA9BC]" />
                </div>
                <div>
                  <span className="block text-[#05131a] font-bold text-sm leading-none">BIMAI Tools Suite</span>
                  <span className="text-[10px] font-extrabold text-[#55636a] uppercase tracking-wider">Custom Firm AI Suite</span>
                </div>
              </div>

              <span className="text-[10px] font-bold text-[#0EA9BC] bg-[#0EA9BC]/10 px-2.5 py-1 rounded-full border border-[#0EA9BC]/20">
                5 AI Engines
              </span>
            </div>

            {/* Tool Selector Buttons */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">SELECT AI TOOL:</label>
              <div className="grid grid-cols-1 gap-1.5">
                {AI_TOOLS_LIST.map((tool) => {
                  const Icon = tool.icon;
                  const isSelected = tool.id === selectedToolId;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => {
                        setSelectedToolId(tool.id);
                        setDemoOutput(null);
                      }}
                      className={`p-2 rounded-xl text-left border text-xs transition-all flex items-center justify-between ${
                        isSelected 
                          ? 'bg-[#0b3550] text-white border-[#0b3550] shadow-sm' 
                          : 'bg-white text-slate-700 border-slate-200 hover:border-[#0EA9BC]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#0EA9BC]' : 'text-slate-500'}`} />
                        <span className="font-bold">{tool.name}</span>
                      </div>
                      {isSelected && <span className="text-[9px] bg-[#0EA9BC] text-white font-extrabold px-1.5 py-0.5 rounded">Selected</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description & Demo Trigger Box */}
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <p className="text-xs text-slate-600 leading-snug">{currentTool.desc}</p>
              
              <button
                onClick={handleRunDemo}
                disabled={isProcessing}
                className="w-full bg-[#0EA9BC] hover:bg-[#0EA9BC]/90 text-white font-bold text-xs py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm disabled:opacity-50"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isProcessing ? 'Processing AI Request...' : `Test ${currentTool.name}`}</span>
              </button>
            </div>

            {/* AI Output Result Box */}
            <div className="p-3 bg-[#0b3550]/5 rounded-2xl border border-[#0b3550]/15 min-h-[60px] flex items-center">
              {isProcessing ? (
                <div className="flex items-center gap-2 text-xs text-[#0EA9BC] font-medium">
                  <div className="w-3.5 h-3.5 border-2 border-[#0EA9BC] border-t-transparent rounded-full animate-spin" />
                  <span>Executing {currentTool.name}...</span>
                </div>
              ) : demoOutput ? (
                <p className="text-xs text-[#05131a] font-medium leading-relaxed">{demoOutput}</p>
              ) : (
                <span className="text-xs text-slate-500 italic">Click test above to preview AI generation output.</span>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

