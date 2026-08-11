import React from 'react';
import { Briefcase, Users, Mail, Code, Terminal, Brain, Sparkles, GraduationCap, Send } from 'lucide-react';
import { motion } from 'motion/react';

interface CareersSectionProps {
  onOpenContact: (product?: 'ScriptedBIM' | 'BIMAI' | 'General' | '11-Day Trial', message?: string) => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onOpenContact }) => {
  const openRoles = [
    {
      title: 'BIM Automation Developer (C# / Revit API)',
      type: 'Full-time Job',
      department: 'Software Engineering',
      icon: Terminal,
      isInternship: false,
      description: 'Design and build custom C# Revit add-ins, pyRevit toolsets, and desktop automation plugins for global AEC clients.'
    },
    {
      title: 'AI / ML Engineer (Computational Geometry & Vision)',
      type: 'Full-time Job',
      department: 'AI Research',
      icon: Brain,
      isInternship: false,
      description: 'Develop generative models, image-to-3D element reconstruction algorithms, and intelligent LLM BIM agents.'
    },
    {
      title: 'Senior BIM Specialist / Modeler',
      type: 'Full-time Job',
      department: 'BIM Operations',
      icon: Code,
      isInternship: false,
      description: 'Lead high-complexity 3D modeling, clash resolution, parametric family architecture, and workflow quality auditing.'
    },
    {
      title: 'BIM & Automation R&D Internship',
      type: 'Internship Role',
      department: 'Research & Development',
      icon: GraduationCap,
      isInternship: true,
      description: 'Dedicated internship program for passionate AEC students, graduates, or software enthusiasts eager to research and solve real-world BIM workflow challenges.'
    }
  ];

  return (
    <section id="careers" className="py-20 sm:py-28 px-4 sm:px-8 relative w-full max-w-[1400px] mx-auto scroll-mt-28 sm:scroll-mt-32">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-[#dceff3] text-[#0b3550] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#0EA9BC]/30 shadow-sm">
          <Briefcase className="w-4 h-4 text-[#0EA9BC]" />
          <span>Jobs &amp; Internship Opportunities</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#05131a] mb-4">
          Careers &amp; Internships at BIMAIhub
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-medium">
          Shape the future of BIM automation, computational geometry, and AI in the AEC industry. We welcome both experienced professionals and enthusiastic interns!
        </p>
      </motion.div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {openRoles.map((role, idx) => {
          const Icon = role.icon;
          const mailSubject = role.isInternship 
            ? `Internship Application - ${role.title}` 
            : `Job Application - ${role.title}`;

          return (
            <div 
              key={idx}
              className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                role.isInternship 
                  ? 'bg-gradient-to-br from-[#dceff3]/60 via-white to-cyan-50/80 border-[#0EA9BC]/40 shadow-md hover:shadow-xl' 
                  : 'bg-white/80 backdrop-blur-xl border-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#0EA9BC]/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    role.isInternship 
                      ? 'bg-[#0EA9BC] text-white' 
                      : 'bg-[#dceff3] text-[#0EA9BC] group-hover:bg-[#0EA9BC] group-hover:text-white'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full border ${
                    role.isInternship
                      ? 'bg-[#0EA9BC] text-white border-[#0EA9BC]'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {role.type}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-[#0EA9BC] uppercase tracking-wider mb-1">
                  {role.department}
                </div>
                <h3 className="text-xl font-extrabold text-[#05131a] mb-3 group-hover:text-[#0EA9BC] transition-colors">
                  {role.title}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                  {role.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100/80 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-semibold">
                  Send CV to: <span className="text-[#0EA9BC]">hr@bimaihub.com</span>
                </span>
                
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:hr@bimaihub.com?subject=${encodeURIComponent(mailSubject)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-[#0EA9BC] hover:bg-[#0b8a9a] text-white px-3.5 py-2 rounded-xl transition-all shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{role.isInternship ? 'Apply for Internship' : 'Apply for Job'}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* General Application Banner for Jobs & Internships */}
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/10 text-cyan-300 hidden sm:flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Apply directly via HR Email
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              For all job inquiries, internship applications, and portfolio submissions, email our hiring team directly at <strong className="text-cyan-300">hr@bimaihub.com</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
          <a
            href="mailto:hr@bimaihub.com?subject=Job%20or%20Internship%20Application%20-%20BIMAIhub"
            className="w-full sm:w-auto bg-[#0EA9BC] hover:bg-[#0b8a9a] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-center"
          >
            <Mail className="w-4 h-4" />
            <span>Email hr@bimaihub.com</span>
          </a>
          <button
            onClick={() => onOpenContact('General', 'Hello HR team! I am submitting my profile for job / internship opportunities at BIMAIhub.')}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-white/10 transition-all flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Submit Details via Form</span>
          </button>
        </div>
      </div>
    </section>
  );
};
