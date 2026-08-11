import React from 'react';
import { 
  Box, 
  Layers, 
  GitMerge, 
  GraduationCap, 
  Wrench, 
  FileCheck2, 
  Mail, 
  ArrowRight,
  ScanLine,
  Clock3
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onOpenContact: (product?: 'ScriptedBIM' | 'BIMAI' | 'General' | '11-Day Trial', message?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const services = [
    {
      icon: Box,
      title: '3D BIM Modeling (LOD 100 - LOD 500)',
      description: 'Comprehensive Architectural, Structural, and MEP 3D modeling tailored to project specifications using Revit, ArchiCAD, and Tekla.',
      tags: ['Architectural', 'Structural', 'MEP', 'LOD 500']
    },
    {
      icon: ScanLine,
      title: 'Scan to BIM & Point Cloud',
      description: 'Converting high-density laser scan point cloud data into precise, structured 3D Revit models with accurate geometry and metadata.',
      tags: ['Point Cloud', 'Laser Scanning', 'As-Built Models']
    },
    {
      icon: GitMerge,
      title: 'BIM Coordination & Clash Detection',
      description: 'Multi-disciplinary clash identification, audit reporting, and coordination meetings using Navisworks and BIM Track to prevent site re-work.',
      tags: ['Navisworks', 'Clash Matrix', 'Constructability']
    },
    {
      icon: Layers,
      title: 'Parametric Family Creation',
      description: 'Custom, high-performing Revit (.rfa) family creation equipped with parametric rules, formula constraints, and standard COBie metadata.',
      tags: ['Revit Families (.rfa)', 'COBie', 'Parametric Design']
    },
    {
      icon: Clock3,
      title: '4D Construction & 5D Cost Modeling',
      description: 'Linking BIM model geometry directly with project construction schedules and cost databases for precise sequence visualization and budgeting.',
      tags: ['4D Timelines', '5D Quantity Takeoff', 'Cost Estimation']
    },
    {
      icon: Wrench,
      title: 'BIM Automation & Custom Scripting',
      description: 'Developing custom C#, pyRevit, and Dynamo plugins to automate repetitive modeling tasks, sheet creation, and data extraction.',
      tags: ['C# Add-ins', 'pyRevit', 'Dynamo', 'Revit API']
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-8 relative w-full max-w-[1400px] mx-auto scroll-mt-28 sm:scroll-mt-32">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-[#dceff3] text-[#0b3550] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#0EA9BC]/30 shadow-sm">
          <FileCheck2 className="w-4 h-4 text-[#0EA9BC]" />
          <span>Comprehensive AEC Services</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#05131a] mb-4">
          BIM Modeling &amp; Specialized Services
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-medium">
          From full-scale 3D modeling and clash resolution to custom Revit API automation, we provide end-to-end BIM support for AEC firms worldwide.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              className="bg-white/80 backdrop-blur-xl p-7 rounded-3xl border border-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#0EA9BC]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#dceff3] text-[#0EA9BC] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#0EA9BC] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#05131a] mb-3 group-hover:text-[#0EA9BC] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Special Callout: BIM & Automation Training */}
      <div className="bg-gradient-to-r from-[#0B3550] via-[#0EA9BC] to-[#326578] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-cyan-200 mb-4 border border-white/20">
              <GraduationCap className="w-4 h-4 text-cyan-300" />
              <span>Corporate &amp; Individual Training</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Looking for BIM &amp; Automation Training?
            </h3>
            <p className="text-sm sm:text-base text-slate-100/90 font-medium leading-relaxed">
              We empower AEC professionals and engineering teams with hands-on training in Revit API, C#, pyRevit, Dynamo, and AI workflow integration. Upskill your team to build custom internal tools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="mailto:info@pragmaticbim.info?subject=BIM%20%26%20Automation%20Training%20Inquiry"
              className="w-full sm:w-auto bg-white hover:bg-cyan-50 text-[#05131a] font-extrabold text-sm sm:text-base px-7 py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2.5 hover:scale-105"
            >
              <Mail className="w-5 h-5 text-[#0EA9BC]" />
              <span>info@pragmaticbim.info</span>
            </a>
            <button
              onClick={() => onOpenContact('General', 'Hi! I am interested in your BIM & Automation Training program. Please share details.')}
              className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl border border-white/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Enquire for Training</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
