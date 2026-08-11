import React from 'react';
import { Logo } from './Logo';
import { Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-8 border-t border-slate-900">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <Logo size={32} />
          <span className="font-extrabold text-xl text-white tracking-tighter">
            BIMAI<span className="text-[#0EA9BC]">hub</span>
          </span>
        </a>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-[#0EA9BC] transition-colors">
            About Us
          </a>
          <a href="#services" className="hover:text-[#0EA9BC] transition-colors">
            Services
          </a>
          <a href="#products" className="hover:text-[#0EA9BC] transition-colors">
            Products
          </a>
          <a href="#scriptedbim" className="hover:text-[#0EA9BC] transition-colors">
            ScriptedBIM
          </a>
          <a href="#bimai" className="hover:text-[#0EA9BC] transition-colors">
            BIMAI
          </a>
          <a href="#careers" className="hover:text-[#0EA9BC] transition-colors">
            Careers
          </a>
          <a
            href="https://www.linkedin.com/company/www.bimaihub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#0A66C2] hover:text-[#0077B5] bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-all border border-white/10"
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            <span className="text-xs font-semibold text-white">LinkedIn</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 font-medium">
          © 2026 BIMAIhub. Built for the AEC industry.
        </div>

      </div>
    </footer>
  );
};
