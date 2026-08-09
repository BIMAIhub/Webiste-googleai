import React, { useState } from 'react';
import { Mail, ArrowUp, Sparkles, Check, Send, Bot, Wrench, ShieldCheck, Gift, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: (defaultProduct?: 'ScriptedBIM' | 'BIMAI' | 'General', initialMessage?: string) => void;
  onOpenAnnouncement?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenAnnouncement }) => {
  const [promptText, setPromptText] = useState('');
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenContact('General', promptText);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-24 sm:pt-36 lg:pt-40 pb-16 sm:pb-28 px-3.5 sm:px-8 min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden w-full box-border"
    >
      {/* Interactive Aura Radial Gradient Background */}
      <div 
        className="absolute inset-0 -z-10 transition-all duration-300 ease-out" 
        style={{ 
          background: `
            radial-gradient(1100px circle at ${mousePos.x}% ${mousePos.y}%, rgba(14,169,188,0.22), rgba(11,53,80,0.14), rgba(50,101,120,0.08), transparent 75%),
            linear-gradient(135deg, rgba(14,169,188,0.12) 0%, rgba(11,53,80,0.08) 50%, rgba(50,101,120,0.06) 100%)
          ` 
        }}
      />

      {/* Decorative Grid overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#0EA9BC_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08]" />

      {/* Launching Soon & 11-Day Trial Interactive Badge */}
      <div className="flex items-center justify-center mb-6 sm:mb-8 max-w-full px-2">
        <button 
          type="button"
          onClick={() => onOpenContact('General', 'Requesting 11-Day Free Trial for custom company add-ins & AI solutions.')}
          className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#dceff3] via-white to-[#dceff3] hover:from-[#c9f3f7] hover:to-[#c9f3f7] backdrop-blur-xl border border-[#0EA9BC]/40 rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-2 shadow-sm transition-all hover:scale-[1.02] active:scale-95 group cursor-pointer max-w-full text-center sm:text-left"
        >
          <span className="bg-[#0EA9BC] text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shrink-0 shadow-sm">
            <Gift className="w-3.5 h-3.5" /> 11-DAYS FREE TRIAL
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-[#05131a] group-hover:text-[#0EA9BC] transition-colors leading-tight flex items-center gap-1">
            <span>Custom Add-ins &amp; AI Solutions <span className="hidden md:inline">(Image ➔ Revit Family)</span></span>
            <span className="text-[#0EA9BC] group-hover:translate-x-0.5 transition-transform">→</span>
          </span>
        </button>
      </div>

      {/* Main Headline */}
      <h1 className="font-extrabold text-3xl sm:text-7xl md:text-8xl lg:text-[5.5rem] leading-[1.08] sm:leading-[1.05] tracking-tighter text-[#05131a] max-w-5xl mb-5 sm:mb-8 px-1">
        Build with <span className="text-[#0EA9BC] bg-gradient-to-r from-[#0EA9BC] via-[#326578] to-[#0B3550] bg-clip-text text-transparent">BIMAIhub</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl md:text-2xl text-[#55636a] max-w-3xl mb-8 sm:mb-14 leading-relaxed font-medium px-2">
        One hub, two products. <strong>ScriptedBIM</strong> automates the repetitive work in your BIM workflow. <strong>BIMAI</strong> brings AI-driven insight to your models. Built for teams who model, coordinate, and ship buildings.
      </p>

      {/* Interactive Prompt & Early Access Form Box */}
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-[960px] lg:max-w-[1040px] bg-white/60 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-4 sm:p-7 mb-8 sm:mb-12 transition-all hover:border-white hover:shadow-[0_18px_56px_rgba(14,169,188,0.14)] text-left"
      >
        <div className="flex flex-col gap-3 sm:gap-4">
          <textarea
            name="body"
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            className="w-full bg-transparent border-none resize-none text-base sm:text-xl text-[#05131a] placeholder:text-[#728086] focus:outline-none focus:ring-0 min-h-[85px] sm:min-h-[110px] p-1 font-normal leading-relaxed"
            placeholder="Tell us what you'd like BIMAIhub to automate, or what you're building..."
          />

          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-slate-200/60">
            {/* Contact Email Tag */}
            <a 
              href="mailto:info@bimaihub.com" 
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 bg-white/80 hover:bg-white border border-white/80 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-sm transition-all group"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0EA9BC] group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-base font-medium text-[#55636a]">info@bimaihub.com</span>
            </a>

            {/* Submit Arrow Button */}
            <button
              type="submit"
              className="bg-[#0EA9BC] hover:bg-[#0EA9BC]/90 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all ml-auto"
              aria-label="Send message to BIMAIhub"
            >
              <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </form>

      {/* Capability Feature Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-5xl mx-auto">
        <span className="bg-white/60 text-[#05131a] border border-white/80 shadow-sm rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold backdrop-blur-md hover:bg-white/80 transition-colors">
          ⚙️ Custom C# &amp; pyRevit Add-ins
        </span>
        <span className="bg-white/60 text-[#05131a] border border-white/80 shadow-sm rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold backdrop-blur-md hover:bg-white/80 transition-colors">
          🏷️ Whitelabel Company Branding
        </span>
        <span className="bg-white/60 text-[#05131a] border border-white/80 shadow-sm rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold backdrop-blur-md hover:bg-white/80 transition-colors">
          💬 Firm AI Chatbots
        </span>
        <span className="bg-white/60 text-[#05131a] border border-white/80 shadow-sm rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold backdrop-blur-md hover:bg-white/80 transition-colors">
          📸 Image ➔ Revit Family
        </span>
        <span className="bg-white/60 text-[#05131a] border border-white/80 shadow-sm rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold backdrop-blur-md hover:bg-white/80 transition-colors">
          📑 Sheets AI &amp; 2D-to-3D
        </span>
      </div>
    </section>
  );
};
