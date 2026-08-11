import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Mail, ArrowRight, Linkedin, Gift } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  onOpenContact: (defaultProduct?: 'ScriptedBIM' | 'BIMAI' | 'General') => void;
  onOpenAnnouncement?: () => void;
}

const NAV_ITEMS = [
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'scriptedbim', label: 'ScriptedBIM' },
  { id: 'bimai', label: 'BIMAI' },
  { id: 'careers', label: 'Careers' },
  { id: 'faq', label: 'FAQ' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-2 sm:top-5 left-1/2 -translate-x-1/2 w-[96%] max-w-[1480px] rounded-full border border-white/80 bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] z-50 flex justify-between items-center py-2.5 sm:py-3 px-3.5 sm:px-6 transition-all duration-300">
      {/* Brand Logo */}
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-2 shrink-0 group"
      >
        <Logo size={34} />
        <span className="font-extrabold text-lg sm:text-2xl tracking-tighter text-[#05131a] flex items-center whitespace-nowrap">
          BIMAI<span className="text-[#0EA9BC]">hub</span>
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-1 xl:gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`relative px-3 py-1.5 text-xs xl:text-sm font-bold whitespace-nowrap rounded-full transition-all duration-200 ${
                isActive 
                  ? 'text-[#0EA9BC]' 
                  : 'text-[#55636a] hover:text-[#0EA9BC] hover:bg-black/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-[#dceff3] border border-[#0EA9BC]/40 rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Desktop Actions */}
      <div className="hidden sm:flex items-center gap-2 shrink-0">
        <a
          href="https://www.linkedin.com/company/www.bimaihub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-[#0A66C2] hover:bg-[#0A66C2]/10 rounded-full transition-all border border-slate-200/60 bg-white/60"
          title="BIMAIhub on LinkedIn"
          aria-label="BIMAIhub LinkedIn Page"
        >
          <Linkedin className="w-4 h-4 fill-current" />
        </a>
        <button
          onClick={() => onOpenContact('General', 'Requesting 11-Day Free Trial for custom company add-ins & AI solutions.')}
          className="bg-[#0EA9BC] hover:bg-[#0b8a9a] text-white font-extrabold text-xs px-3.5 py-2 rounded-full transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap"
        >
          <Gift className="w-3.5 h-3.5 text-white" />
          <span>11-Day Trial</span>
        </button>
        <button
          onClick={() => onOpenContact('General')}
          className="bg-white/90 text-[#05131a] border border-slate-200/80 shadow-sm backdrop-blur-md font-bold text-xs sm:text-sm px-4 py-2 rounded-full hover:bg-white hover:shadow-md transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap"
        >
          <Mail className="w-4 h-4 text-[#0EA9BC]" />
          <span>Get in touch</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-2 sm:hidden">
        <button
          onClick={() => onOpenContact('General', 'Requesting 11-Day Free Trial for custom company add-ins & AI solutions.')}
          className="bg-[#0EA9BC] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 shrink-0 whitespace-nowrap"
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
        <div className="absolute top-full left-0 right-0 mt-3 p-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-2xl sm:hidden flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
          <div className="p-3 bg-[#dceff3] rounded-2xl border border-[#0EA9BC]/30 flex items-center justify-between mb-1">
            <span className="text-xs font-extrabold text-[#05131a] flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-[#0EA9BC]" /> 11-Days Free Trial
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('General', 'Requesting 11-Day Free Trial for custom company add-ins & AI solutions.');
              }}
              className="bg-[#0EA9BC] text-white text-[11px] font-bold px-3 py-1 rounded-xl shadow-sm"
            >
              Claim Trial
            </button>
          </div>

          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`text-base py-2 px-3 rounded-xl transition-all font-semibold flex items-center justify-between ${
                  isActive 
                    ? 'bg-[#dceff3] text-[#0EA9BC] font-extrabold' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#0EA9BC]" />}
              </a>
            );
          })}

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

