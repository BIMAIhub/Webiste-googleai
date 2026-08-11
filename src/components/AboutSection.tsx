import React from 'react';
import { Sparkles, Microscope, Rocket, CheckCircle2, Brain, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onOpenContact: (product?: 'ScriptedBIM' | 'BIMAI' | 'General' | '11-Day Trial', message?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const rdPillars = [
    {
      icon: Microscope,
      title: 'Workflow Friction Research',
      description: 'We analyze everyday bottlenecks in Revit modeling, sheet production, model auditing, and clash detection to build targeted solutions.'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning R&D',
      description: 'Developing proprietary algorithms for 2D drawing to 3D BIM reconstruction, automatic family creation, and generative model auditing.'
    },
    {
      icon: Code2,
      title: 'Custom C# & Revit API Engine',
      description: 'Building robust, production-ready desktop add-ins and cloud APIs that replace hours of manual clicks with instant background scripts.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 relative w-full max-w-[1400px] mx-auto scroll-mt-28 sm:scroll-mt-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white/70 backdrop-blur-2xl rounded-3xl p-8 sm:p-14 border border-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative overflow-hidden"
      >
        {/* Soft Decorative Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0EA9BC]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B3550]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Startup Story & Mission */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-[#dceff3] text-[#0b3550] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#0EA9BC]/30 shadow-sm">
              <Rocket className="w-4 h-4 text-[#0EA9BC]" />
              <span>Technology Startup</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#05131a] mb-6 leading-tight">
              We are a Startup solving real problems in <span className="text-[#0EA9BC]">BIM Workflows</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6">
              At <strong>BIMAIhub</strong>, we are a passionate technology startup dedicated to active innovation and software development focused on the architectural, engineering, and construction (AEC) industry.
            </p>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
              Traditional BIM modeling is often burdened with repetitive manual tasks, disjointed data handoffs, and tedious quality checks. Our team continuously researches workflow friction points, building state-of-the-art C# add-ins, pyRevit scripts, and generative AI models that empower designers and BIM managers to focus on creative engineering rather than repetitive clicks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/60">
                <CheckCircle2 className="w-5 h-5 text-[#0EA9BC] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-extrabold text-[#05131a] uppercase tracking-wider">Continuous R&amp;D</h4>
                  <p className="text-xs text-slate-600">Solving real AEC production bottlenecks daily</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/60">
                <CheckCircle2 className="w-5 h-5 text-[#0EA9BC] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-extrabold text-[#05131a] uppercase tracking-wider">Tailored Customization</h4>
                  <p className="text-xs text-slate-600">Tools customized to your firm standards &amp; logo</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContact('General', 'Hello! We would like to connect with the BIMAIhub R&D team to collaborate on custom BIM solutions.')}
                className="bg-[#0EA9BC] hover:bg-[#0b8a9a] text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-2xl shadow-md transition-all hover:scale-105 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-current" />
                <span>Collaborate with Our R&amp;D Team</span>
              </button>
            </div>
          </div>

          {/* Right Column: R&D Pillars */}
          <div className="lg:col-span-5 space-y-5">
            {rdPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#0EA9BC]/40 transition-all flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#dceff3] text-[#0EA9BC] flex items-center justify-center shrink-0 group-hover:bg-[#0EA9BC] group-hover:text-white transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#05131a] mb-1 group-hover:text-[#0EA9BC] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.div>
    </section>
  );
};
