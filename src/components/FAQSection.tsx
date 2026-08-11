import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is BIMAIhub?',
    answer: 'BIMAIhub builds custom whitelabel automation add-ins and firm-branded AI tools for AEC companies. We specialize in custom C# (.NET) Revit plugins, Python pyRevit scripts, company AI chatbots, Image-to-Revit Family generators, Sheets AI checkers, and 2D-to-3D BIM converters.'
  },
  {
    id: 'faq-2',
    question: "Can we get custom add-ins built with our company branding?",
    answer: 'Yes! ScriptedBIM creates custom C# and pyRevit add-ins built strictly with your company logo, custom UI theme, and branding. Your internal team and clients see 100% your firm branding on every toolbar, dialog, and installer with zero BIMAIhub logos.'
  },
  {
    id: 'faq-3',
    question: 'What custom AI tools does BIMAI offer?',
    answer: 'BIMAI delivers custom company AI chatbots trained on your firm specs and execution plans (with your logo), Image to Revit Family (.rfa) generators, Sheets & Drawing AI checkers, 2D CAD/PDF to 3D BIM converters, and AI assistants for Rhino, Grasshopper, and Revit DevOps.'
  },
  {
    id: 'faq-[#4]',
    question: 'How are the add-ins developed and delivered?',
    answer: 'Our engineering team develops high-performance C# .NET Revit API DLLs and Python pyRevit scripts, packaged into unified installers with your company logo and theme for seamless firm-wide deployment.'
  },
  {
    id: 'faq-5',
    question: 'Which BIM & CAD platforms do you support?',
    answer: 'We support Autodesk Revit (2020–2026), pyRevit, Rhino 7/8 & Grasshopper, AutoCAD DWGs, PDFs, Navisworks, Archicad, and open standards (IFC 4.3 & BCF).'
  },
  {
    id: 'faq-6',
    question: 'How do we request a custom add-in or firm AI chatbot?',
    answer: 'Click "Get in touch" or "Request Custom Tool" to submit your project requirements. You can also email our engineering leads directly at info@bimaihub.com.'
  }
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-8 bg-white border-t border-slate-100 scroll-mt-28 sm:scroll-mt-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16"
      >
        
        {/* Left Sticky Header */}
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-32 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0EA9BC] uppercase tracking-wider bg-[#dceff3] px-3 py-1 rounded-full">
              <HelpCircle className="w-3.5 h-3.5" /> Custom Tools &amp; FAQ
            </div>
            <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-[#05131a] tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Questions about custom C#/Python Revit add-ins, whitelabel company branding, firm AI chatbots, or Image-to-Revit family tools? Find answers below.
            </p>
          </div>
        </div>

        {/* Right FAQ Accordion List */}
        <div className="lg:w-2/3 flex flex-col divide-y divide-slate-200">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-5 sm:py-6 group cursor-pointer transition-colors" onClick={() => toggleFAQ(faq.id)}>
                <div className="flex justify-between items-center w-full gap-4">
                  <h3 className={`text-lg sm:text-2xl font-semibold transition-colors ${
                    isOpen ? 'text-[#0EA9BC]' : 'text-[#05131a] group-hover:text-[#0EA9BC]'
                  }`}>
                    {faq.question}
                  </h3>
                  <button 
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? 'bg-[#0EA9BC] text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-[#0EA9BC]/10 group-hover:text-[#0EA9BC]'
                    }`}
                    aria-label="Toggle answer"
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200 max-w-2xl">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};

