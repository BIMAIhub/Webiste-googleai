import React from 'react';
import { Check, ArrowRight, Wrench, Bot, Building2 } from 'lucide-react';

interface ProductsGridProps {
  onOpenContact: (defaultProduct?: 'ScriptedBIM' | 'BIMAI' | 'General') => void;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({ onOpenContact }) => {
  return (
    <section id="products" className="py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-[1280px] mx-auto relative z-10 space-y-8">
        
        {/* Main 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Column 1: Intro */}
          <div className="p-6 sm:p-8 flex flex-col justify-center bg-white/60 backdrop-blur-xl rounded-3xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
            <h2 className="font-extrabold text-2xl sm:text-4xl leading-tight text-[#05131a] mb-4">
              Two products, one hub.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Custom C# &amp; Python add-ins for problem-specific workflows + Firm-branded AI chatbots and generative BIM tools.
            </p>
            <div className="p-3.5 sm:p-4 bg-[#dceff3]/60 rounded-2xl border border-[#dceff3] text-xs text-[#0b3550] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0EA9BC] animate-ping shrink-0" />
              <span>Spots opening for custom pilot tools</span>
            </div>
          </div>

          {/* Column 2: ScriptedBIM Card */}
          <div className="p-6 sm:p-8 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col relative overflow-hidden group hover:border-[#0EA9BC] transition-all">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0EA9BC]/20 to-transparent -z-10" />
            
            <div className="flex items-center gap-2 mb-2">
              <Wrench className="w-5 h-5 text-[#0EA9BC]" />
              <span className="text-xs font-bold text-[#0b3550] uppercase tracking-wider">Custom Add-ins</span>
            </div>

            <h3 className="font-extrabold text-3xl text-[#05131a] mb-4">ScriptedBIM</h3>

            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0EA9BC]/15 text-[#0EA9BC] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Whitelabel Add-ins (Your Logo &amp; UI Theme)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0EA9BC]/15 text-[#0EA9BC] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>High-performance C# (.NET) Revit Add-ins</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0EA9BC]/15 text-[#0EA9BC] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Python &amp; pyRevit Custom Automation Tools</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0EA9BC]/15 text-[#0EA9BC] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Project-Specific &amp; Problem-Specific Tools</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenContact('ScriptedBIM')}
              className="w-full text-center bg-white/80 backdrop-blur-md border border-white/80 shadow-sm text-[#05131a] rounded-2xl py-3.5 font-bold hover:bg-white hover:border-[#0EA9BC] transition-all flex items-center justify-center gap-2"
            >
              <span>Build Custom Add-in</span>
              <ArrowRight className="w-4 h-4 text-[#0EA9BC]" />
            </button>
          </div>

          {/* Column 3: BIMAI Card */}
          <div className="p-6 sm:p-8 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col relative overflow-hidden group hover:border-[#0EA9BC] transition-all">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B3550]/20 to-[#326578]/15 -z-10" />
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md border border-white text-[#05131a] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              AI Powered
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Bot className="w-5 h-5 text-[#0EA9BC]" />
              <span className="text-xs font-bold text-[#0b3550] uppercase tracking-wider">BIM AI Suite</span>
            </div>

            <h3 className="font-extrabold text-3xl text-[#05131a] mb-4">BIMAI</h3>

            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-700 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0EA9BC]/15 text-[#0EA9BC] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Company AI Chatbot (Firm Logo &amp; Specs)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0EA9BC]/15 text-[#0EA9BC] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Image to Revit Family Generator (.rfa)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0EA9BC]/15 text-[#0EA9BC] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>Sheets &amp; Drawing AI QA Checker</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0EA9BC]/15 text-[#0EA9BC] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>2D CAD to 3D Model + Rhino &amp; DevOps AI</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenContact('BIMAI')}
              className="w-full text-center bg-white/80 backdrop-blur-md border border-white/80 shadow-sm text-[#05131a] rounded-2xl py-3.5 font-bold hover:bg-white hover:border-[#0EA9BC] transition-all flex items-center justify-center gap-2"
            >
              <span>Build Custom AI Tools</span>
              <ArrowRight className="w-4 h-4 text-[#0EA9BC]" />
            </button>
          </div>

        </div>

        {/* Enterprise Bottom Banner */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.02)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0EA9BC]/15 to-[#0B3550]/15 -z-10" />
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center text-[#0EA9BC] shadow-sm shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-2xl text-[#05131a] mb-1">Have a specific project or problem?</h4>
              <p className="text-sm text-slate-600">Tell us what you want to automate — we will build your custom C#/Python add-in or firm AI chatbot.</p>
            </div>
          </div>

          <button
            onClick={() => onOpenContact('General', 'Custom C#/Python Add-in or AI tool request.')}
            className="mt-4 md:mt-0 bg-[#05131a] hover:bg-slate-800 text-white rounded-2xl px-8 py-3.5 font-bold text-sm shadow-sm transition-all"
          >
            Request Custom Tool
          </button>
        </div>

      </div>
    </section>
  );
};

