import React, { useState } from 'react';
import { Logo } from './Logo';
import { X, Check, Send, Sparkles, Building2, Wrench, Bot, Linkedin } from 'lucide-react';
import { submitLeadToGoogleSheet } from '../lib/leadService';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: 'ScriptedBIM' | 'BIMAI' | 'General';
  initialMessage?: string;
}

const BIM_TOOLS = [
  'Autodesk Revit',
  'Navisworks',
  'Archicad',
  'IFC / OpenBIM',
  'Solibri',
  'Tekla Structures',
  'Rhino / Grasshopper',
  'Civil 3D',
  'Other'
];

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = 'General',
  initialMessage = ''
}) => {
  const [product, setProduct] = useState<'ScriptedBIM' | 'BIMAI' | 'General'>(defaultProduct);
  const [selectedTools, setSelectedTools] = useState<string[]>(['Autodesk Revit']);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState(initialMessage);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const toggleTool = (tool: string) => {
    setSelectedTools(prev =>
      prev.includes(tool) ? prev.filter(t => t !== tool) : [...prev, tool]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    
    try {
      await submitLeadToGoogleSheet({
        name,
        email,
        company,
        product,
        selectedTools,
        message
      });
    } catch (err) {
      console.error('Submission handled', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setEmail('');
    setName('');
    setCompany('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/80 shadow-2xl overflow-hidden p-4 sm:p-8 max-h-[92vh] overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 px-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#0EA9BC]/15 text-[#0EA9BC] border border-[#0EA9BC]/30 mx-auto flex items-center justify-center shadow-inner">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-bold text-[#05131a]">You're on the early access list!</h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
              Thanks for reaching out, {name || 'there'}! We've reserved your spot for <strong>{product === 'General' ? 'BIMAIhub' : product}</strong>. Our engineering team will contact you at <span className="text-[#0EA9BC] font-semibold">{email}</span> soon.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={resetForm}
                className="bg-[#0EA9BC] hover:bg-[#0EA9BC]/90 text-white font-medium px-8 py-3 rounded-full transition-colors shadow-sm w-full sm:w-auto"
              >
                Back to Website
              </button>
              <a
                href="https://www.linkedin.com/company/www.bimaihub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] hover:bg-[#084e96] text-white font-medium px-6 py-3 rounded-full transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Linkedin className="w-4 h-4 fill-current" />
                <span>Follow on LinkedIn</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Logo size={28} />
                <span className="bg-[#dceff3] text-[#0b3550] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#0EA9BC]" /> Launching Soon
                </span>
              </div>
              <a
                href="https://www.linkedin.com/company/www.bimaihub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 px-2.5 py-1 rounded-full transition-colors"
                title="BIMAIhub on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
                <span>LinkedIn</span>
              </a>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#05131a] tracking-tight mb-1">
              Join the BIMAI<span className="text-[#0EA9BC]">hub</span> Early Access
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Be among the first AEC teams to automate repetitive BIM tasks &amp; unlock AI intelligence.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Preference Tabs */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Interested Product
                </label>
                <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setProduct('ScriptedBIM')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      product === 'ScriptedBIM'
                        ? 'bg-white text-[#05131a] shadow-sm border border-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Wrench className="w-3.5 h-3.5 text-[#0EA9BC] shrink-0" /> <span className="truncate">ScriptedBIM</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProduct('BIMAI')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      product === 'BIMAI'
                        ? 'bg-white text-[#05131a] shadow-sm border border-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Bot className="w-3.5 h-3.5 text-[#0EA9BC] shrink-0" /> <span className="truncate">BIMAI</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProduct('General')}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      product === 'General'
                        ? 'bg-white text-[#05131a] shadow-sm border border-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#0EA9BC] shrink-0" /> <span className="truncate">Both / Firm</span>
                  </button>
                </div>
              </div>

              {/* Input grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#05131a] focus:outline-none focus:ring-2 focus:ring-[#0EA9BC]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@architects.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#05131a] focus:outline-none focus:ring-2 focus:ring-[#0EA9BC]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Company / Firm Name (Optional)</label>
                <input
                  type="text"
                  placeholder="AEC Solutions Studio"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-[#05131a] focus:outline-none focus:ring-2 focus:ring-[#0EA9BC]"
                />
              </div>

              {/* Primary BIM Tools */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Which BIM software do you work with?
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {BIM_TOOLS.map((tool) => {
                    const active = selectedTools.includes(tool);
                    return (
                      <button
                        type="button"
                        key={tool}
                        onClick={() => toggleTool(tool)}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                          active
                            ? 'bg-[#0EA9BC]/10 border-[#0EA9BC] text-[#04414a] font-semibold'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {active ? '✓ ' : ''}{tool}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  What would you like BIMAIhub to automate for you?
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g., Automatic room parameter checking, clash resolution summaries, or IFC data validation..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-[#05131a] focus:outline-none focus:ring-2 focus:ring-[#0EA9BC]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0EA9BC] hover:bg-[#0EA9BC]/90 text-white font-bold py-3 px-6 rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Request Early Access</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
