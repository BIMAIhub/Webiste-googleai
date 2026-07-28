import React from 'react';
import { Logo } from './Logo';

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
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <button 
            onClick={onOpenContact} 
            className="hover:text-[#0EA9BC] transition-colors"
          >
            Contact
          </button>
          <a href="#products" className="hover:text-[#0EA9BC] transition-colors">
            Products
          </a>
          <a href="#scriptedbim" className="hover:text-[#0EA9BC] transition-colors">
            ScriptedBIM
          </a>
          <a href="#bimai" className="hover:text-[#0EA9BC] transition-colors">
            BIMAI
          </a>
          <a href="#faq" className="hover:text-[#0EA9BC] transition-colors">
            FAQ
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
