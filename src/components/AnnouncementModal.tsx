import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Sparkles, ArrowRight, X, Zap, Bot, Clock } from 'lucide-react';

interface AnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (product?: 'ScriptedBIM' | 'BIMAI' | 'General' | '11-Day Trial', initialMessage?: string) => void;
  autoCloseSeconds?: number;
}

export const AnnouncementModal: React.FC<AnnouncementModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
  autoCloseSeconds = 7,
}) => {
  const [timeLeft, setTimeLeft] = useState(autoCloseSeconds);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setTimeLeft(autoCloseSeconds);
    setIsPaused(false);
  }, [isOpen, autoCloseSeconds]);

  useEffect(() => {
    if (!isOpen || isPaused) return;

    if (timeLeft <= 0) {
      onClose();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isOpen, isPaused, timeLeft, onClose]);

  if (!isOpen) return null;

  const progressPercentage = (timeLeft / autoCloseSeconds) * 100;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 bg-[#05131a]/60 backdrop-blur-sm transition-opacity duration-200 overflow-y-auto">
      {/* Main Modal Box */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full max-w-xl bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden p-4 sm:p-8 max-h-[92vh] overflow-y-auto my-auto transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Auto-Close Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-[#0EA9BC] transition-all duration-1000 ease-linear"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Container */}
        <div className="text-center space-y-5 pt-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#dceff3] text-[#0b3550] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#0EA9BC]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#0EA9BC]" />
            <span>Official Launch Announcement</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2.5">
              <Logo size={32} />
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#05131a] tracking-tight">
                BIMAI<span className="text-[#0EA9BC]">hub</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed pt-1">
              Custom Whitelabel C# &amp; Python Revit Add-ins via <strong>ScriptedBIM</strong> and Company AI Chatbots &amp; Generators via <strong>BIMAI</strong>.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-1">
            <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/80 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#0EA9BC]/10 text-[#0EA9BC] shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#05131a]">ScriptedBIM Add-ins</h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">Whitelabel C# &amp; pyRevit tools with your firm logo &amp; UI theme.</p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50/90 rounded-2xl border border-slate-200/80 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#0B3550]/10 text-[#0B3550] shrink-0">
                <Bot className="w-4 h-4 text-[#0EA9BC]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0B3550]">BIMAI Tools Suite</h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">Company AI Chatbot, Image-to-Revit family &amp; Sheets AI Checker.</p>
              </div>
            </div>
          </div>

          {/* Pilot Spots & 11-Day Trial Banner */}
          <div className="p-3 bg-[#dceff3]/90 rounded-xl border border-[#0EA9BC]/30 flex items-center justify-between text-xs font-bold text-[#0b3550]">
            <span className="flex items-center gap-1.5">
              <span>🎁</span> 11-Days Trial Available for Custom Add-ins &amp; AI
            </span>
            <span className="font-mono bg-white px-2 py-0.5 rounded text-[#05131a] text-[11px] border border-[#0EA9BC]/20">
              Free Trial
            </span>
          </div>

          {/* Auto-Close Status Indicator */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#0EA9BC]" />
            <span>
              {isPaused ? (
                <span className="text-[#0EA9BC] font-semibold">Paused (hovering)</span>
              ) : (
                `Auto-closing in ${timeLeft}s`
              )}
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              onClick={() => {
                onClose();
                onOpenContact('11-Day Trial', 'We want to connect for an 11-Day Free Trial for custom add-ins and AI solutions (Image to Revit family & more).');
              }}
              className="w-full sm:w-auto bg-[#0EA9BC] hover:bg-[#0EA9BC]/90 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Connect for 11-Day Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
            >
              Explore Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
