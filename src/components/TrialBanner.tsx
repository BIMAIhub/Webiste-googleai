import React from 'react';
import { Gift, ArrowRight, Sparkles, Wrench, Bot, ImageIcon, CheckCircle, Mail, MessageSquare } from 'lucide-react';

interface TrialBannerProps {
  onOpenContact: (defaultProduct?: 'ScriptedBIM' | 'BIMAI' | 'General', initialMessage?: string) => void;
}

export const TrialBanner: React.FC<TrialBannerProps> = ({ onOpenContact }) => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 relative z-20">
      <div className="max-w-[1240px] mx-auto bg-gradient-to-r from-[#0b3550] via-[#0EA9BC]/90 to-[#0b3550] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-white/20">
        
        {/* Background Decorative Glows */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#0EA9BC]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Trial Badge Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5 sm:mb-6 relative z-10 border-b border-white/20 pb-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full border border-white/25 text-[11px] sm:text-sm font-extrabold text-cyan-200">
            <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-[#0EA9BC] shrink-0" />
            <span className="truncate">11-DAYS FREE TRIAL FOR YOUR FIRM</span>
          </div>

          <a
            href="mailto:info@bimaihub.com?subject=11-Day%20Trial%20Inquiry%20-%20BIMAIhub"
            className="text-xs sm:text-sm font-semibold text-white/90 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 shrink-0" />
            <span>info@bimaihub.com</span>
          </a>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center relative z-10">
          
          {/* Left Column: Heading & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-3 sm:mb-4">
              Try Custom Add-ins &amp; AI Solutions <span className="inline-block mt-1 sm:mt-0 px-3 py-1 rounded-2xl bg-cyan-400/20 text-cyan-200 border border-cyan-300/30 font-black text-xl sm:text-3xl shadow-sm">Free for 11 Days</span>
            </h2>
            <p className="text-xs sm:text-base text-slate-100/90 leading-relaxed font-medium mb-5 sm:mb-6">
              Test drive tailored BIM automation built specifically for your company. No upfront commitment — see the time savings in your real production models first.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onOpenContact('General', 'Hello! I am interested in starting our 11-Day Free Trial for custom company add-ins & AI solutions.')}
                className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-300 text-[#05131a] font-extrabold text-xs sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2.5 text-center"
              >
                <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                <span>Let's Connect for 11-Day Trial</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>

          {/* Right Column: 2 Trial Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Pillar 1: 11-Day Custom Add-in Trial */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-400/20 text-cyan-200 flex items-center justify-center mb-3 font-bold border border-cyan-300/30">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-white mb-2">
                  11-Days Trial: Custom Company Add-in
                </h3>
                <ul className="space-y-2 text-xs text-slate-200 font-medium mb-4">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>C# &amp; pyRevit custom scripts</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>Your company logo &amp; UI theme</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>Tailored for your firm standards</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenContact('ScriptedBIM', 'We want to test an 11-Day Trial for a Custom Company Add-in.')}
                className="w-full bg-white/20 hover:bg-white text-white hover:text-[#05131a] text-xs font-bold py-2.5 px-3 rounded-xl transition-all border border-white/30 text-center"
              >
                Start 11-Day Add-in Trial →
              </button>
            </div>

            {/* Pillar 2: 11-Day AI Solutions Trial */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-400/20 text-cyan-200 flex items-center justify-center mb-3 font-bold border border-cyan-300/30">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-white mb-2">
                  11-Days Trial: AI Solutions
                </h3>
                <ul className="space-y-2 text-xs text-slate-200 font-medium mb-4">
                  <li className="flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>Image ➔ Revit Family (.rfa)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>Firm-branded AI Chatbots</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                    <span>Sheets AI QA &amp; 2D-to-3D CAD</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenContact('BIMAI', 'We want to test an 11-Day Trial for AI Solutions (Image to Revit family & Firm Chatbot).')}
                className="w-full bg-white/20 hover:bg-white text-white hover:text-[#05131a] text-xs font-bold py-2.5 px-3 rounded-xl transition-all border border-white/30 text-center"
              >
                Start 11-Day AI Trial →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
