import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X, Mail, Sparkles, ArrowRight, Linkedin, Gift } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (defaultProduct?: 'ScriptedBIM' | 'BIMAI' | 'General') => void;
  onOpenAnnouncement?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenAnnouncement }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1480px] rounded-full border border-white/70 bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] z-50 flex justify-between items-center py-3 sm:py-3.5 px-4 sm:px-8 transition-all duration-300">
      {/* Brand Logo */}
      <a href="#" className="flex items-center gap-2.5 group">
        <Logo size={36} />
        <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-[#05131a] flex items-center">
          BIMAI<span className="text-[#0EA9BC]">hub</span>
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <a 
          href="#products" 
          className="text-[#0EA9BC] font-bold text-base hover:opacity-80 transition-opacity"
        >
          Products
        </a>
        <a 
          href="#scriptedbim" 
          className="text-[#55636a] font-medium text-base hover:text-[#0EA9BC] transition-colors"
        >
          ScriptedBIM
        </a>
        <a 
          href="#bimai" 
          className="text-[#55636a] font-medium text-base hover:text-[#0EA9BC] transition-colors"
        >
          BIMAI
        </a>
        <a 
          href="#showcase" 
          className="text-[#55636a] font-medium text-base hover:text-[#0EA9BC] transition-colors"
        >
          Workflow
        </a>
        <a 
          href="#faq" 
          className="text-[#55636a] font-medium text-base hover:text-[#0EA9BC] transition-colors"
        >
          FAQ
        </a>
      </div>

      {/* Desktop Actions */}
      <div className="hidden sm:flex items-center gap-2">
        <a
          href="https://www.linkedin.com/company/www.bimaihub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-[#0A66C2] hover:bg-[#0A66C2]/10 rounded-full transition-all border border-slate-200/60 bg-white/50"
          title="BIMAIhub on LinkedIn"
          aria-label="BIMAIhub LinkedIn Page"
        >
          <Linkedin className="w-4 h-4 fill-current" />
        </a>
        <button
          onClick={() => onOpenContact('General', 'Requesting 11-Day Free Trial for custom company add-ins & AI solutions.')}
          className="bg-[#0EA9BC] hover:bg-[#0b8a9a] text-white font-extrabold text-xs px-3.5 py-2 rounded-full transition-all shadow-sm flex items-center gap-1.5"
        >
          <Gift className="w-3.5 h-3.5 text-white" />
          <span>11-Day Trial</span>
        </button>
        <button
          onClick={() => onOpenContact('General')}
          className="bg-white/80 text-[#05131a] border border-white/80 shadow-sm backdrop-blur-md font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full hover:bg-white hover:shadow-md transition-all duration-300 flex items-center gap-1.5"
        >
          <Mail className="w-4 h-4 text-[#0EA9BC]" />
          <span>Get in touch</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-2 sm:hidden">
        <button
          onClick={() => onOpenContact('General', 'Requesting 11-Day Free Trial for custom company add-ins & AI solutions.')}
          className="bg-[#0EA9BC] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 shrink-0"
        >
          <Gift className="w-3 h-3" />
          <span>11-Day Trial</span>
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 text-slate-700 hover:text-[#0EA9BC] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 p-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-2xl sm:hidden flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-3 bg-[#dceff3] rounded-2xl border border-[#0EA9BC]/30 flex items-center justify-between">
            <span className="text-xs font-extrabold text-[#05131a] flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-[#0EA9BC]" /> 11-Days Free Trial
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('General', 'Requesting 11-Day Free Trial for custom company add-ins & AI solutions.');
              }}
              className="bg-[#0EA9BC] text-white text-[11px] font-bold px-3 py-1 rounded-xl"
            >
              Claim Trial
            </button>
          </div>

          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#0EA9BC] font-bold text-base py-2 px-3 rounded-xl hover:bg-slate-50"
          >
            Products
          </a>
          <a
            href="#scriptedbim"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 font-medium text-base py-2 px-3 rounded-xl hover:bg-slate-50"
          >
            ScriptedBIM (Automation)
          </a>
          <a
            href="#bimai"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 font-medium text-base py-2 px-3 rounded-xl hover:bg-slate-50"
          >
            BIMAI (Intelligence)
          </a>
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 font-medium text-base py-2 px-3 rounded-xl hover:bg-slate-50"
          >
            Workflow Stages
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-700 font-medium text-base py-2 px-3 rounded-xl hover:bg-slate-50"
          >
            FAQ
          </a>
          <a
            href="https://www.linkedin.com/company/www.bimaihub.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#0A66C2] font-semibold text-base py-2 px-3 rounded-xl hover:bg-slate-50 flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5 fill-current" />
            <span>Follow BIMAIhub on LinkedIn</span>
          </a>
          <hr className="border-slate-100 my-1" />
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact('General');
            }}
            className="w-full bg-[#05131a] text-white font-bold py-3 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Get in touch / Early Access</span>
            <ArrowRight className="w-4 h-4 text-[#0EA9BC]" />
          </button>
        </div>
      )}
    </nav>
  );
};
