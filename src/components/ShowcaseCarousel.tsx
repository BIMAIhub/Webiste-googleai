import React from 'react';
import { Layers, ShieldCheck, BrainCircuit, Cpu, ArrowRight, Wrench, Bot, Image as ImageIcon, FileCheck } from 'lucide-react';

interface ShowcaseCarouselProps {
  onOpenContact: (defaultProduct?: 'ScriptedBIM' | 'BIMAI' | 'General') => void;
}

const CARDS = [
  {
    id: 1,
    title: 'Custom Branded Add-ins',
    category: 'ScriptedBIM',
    description: 'Project-specific & problem-specific Revit tools. Built with your company logo, custom UI theme, and zero BIMAIhub branding.',
    bgColor: 'bg-[#0EA9BC]/20',
    icon: Wrench,
    features: ['100% Client Branding', 'C# (.NET) Revit API', 'Python pyRevit Scripts']
  },
  {
    id: 2,
    title: 'Firm Custom AI Chatbots',
    category: 'BIMAI',
    description: 'AI Chatbots trained on your firm’s BIM execution plans, standards, and specifications, carrying your firm logo and branding.',
    bgColor: 'bg-[#0B3550]/20',
    icon: Bot,
    features: ['Firm-Trained Knowledge', 'Your Company Logo', 'Model Spec Q&A']
  },
  {
    id: 3,
    title: 'Image ➔ Revit Family (.RFA)',
    category: 'BIMAI',
    description: 'Transform 2D product photos, catalog images, or hand sketches into native 3D parametric Revit families automatically.',
    bgColor: 'bg-[#326578]/20',
    icon: ImageIcon,
    features: ['Image to 3D Geometry', 'Native .RFA Output', 'Parametric Sizing']
  },
  {
    id: 4,
    title: 'Sheets AI & 2D-to-3D Tools',
    category: 'BIMAI',
    description: 'AI drawing checker for sheet titles and dimension completeness, plus 2D CAD/PDF to 3D BIM model converter & Rhino DevOps copilot.',
    bgColor: 'bg-[#0EA9BC]/15',
    icon: FileCheck,
    features: ['Sheets QA Audit', '2D DWG/PDF ➔ 3D BIM', 'Rhino & Grasshopper AI']
  }
];

export const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({ onOpenContact }) => {
  return (
    <section id="showcase" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#0EA9BC_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.12]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center justify-center mb-12 relative z-10 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#05131a] tracking-tight">
          Custom Automation &amp; AI Tools Built For Your Firm
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mt-3">
          From whitelabel C#/Python Revit add-ins to firm-branded AI chatbots, 2D-to-3D generators, and Sheets AI checkers.
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-8 pb-8 hide-scrollbar relative z-10 justify-start lg:justify-center box-border">
        {CARDS.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => onOpenContact(card.category as any)}
              className="shrink-0 w-[280px] sm:w-[350px] bg-white/70 backdrop-blur-xl rounded-2xl border border-white/80 shadow-md flex flex-col overflow-hidden group hover:border-[#0EA9BC] hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`h-44 ${card.bgColor} relative overflow-hidden p-6 flex flex-col justify-between`}>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-extrabold bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[#0b3550] uppercase tracking-wider">
                    {card.category}
                  </span>
                  <IconComponent className="w-6 h-6 text-[#0b3550] opacity-80 group-hover:scale-110 transition-transform" />
                </div>
                
                <div>
                  <h3 className="font-extrabold text-xl text-[#05131a]">{card.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {card.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0EA9BC]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#0EA9BC] group-hover:translate-x-1 transition-transform">
                  <span>Learn more &amp; request</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

