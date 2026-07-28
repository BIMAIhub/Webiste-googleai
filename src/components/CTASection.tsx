import React, { useState } from 'react';
import { ArrowRight, Sparkles, Mail } from 'lucide-react';

interface CTASectionProps {
  onOpenContact: (defaultProduct?: 'ScriptedBIM' | 'BIMAI' | 'General') => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-24 sm:py-36 px-4 sm:px-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh] text-center bg-slate-900 text-white"
    >
      {/* Radial Gradient Interactive Background */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-300"
        style={{
          background: `
            radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(14,169,188,0.45), rgba(11,53,80,0.35), transparent 70%),
            radial-gradient(circle at 10% 20%, #0B3550 0%, transparent 60%),
            radial-gradient(circle at 90% 80%, #0EA9BC 0%, transparent 60%)
          `
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#0EA9BC] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Launching Soon • Early Pilot
        </span>

        <h2 className="font-extrabold text-4xl sm:text-6xl leading-tight tracking-tight text-white drop-shadow-md">
          So, what will you automate first?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Join leading BIM managers and AEC teams saving hundreds of hours on model audits, clash reports, and parameter checks.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenContact('General')}
            className="inline-flex items-center gap-3 bg-[#0EA9BC] hover:bg-[#0EA9BC]/90 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105 group"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="mailto:info@bimaihub.com"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm sm:text-base px-6 py-4 rounded-full transition-all backdrop-blur-md"
          >
            <Mail className="w-4 h-4 text-[#0EA9BC]" />
            <span>info@bimaihub.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};
