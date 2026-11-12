import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrialBanner } from './components/TrialBanner';
import { SloganBanner } from './components/SloganBanner';
import { ScriptedBIMSection } from './components/ScriptedBIMSection';
import { BIMAISection } from './components/BIMAISection';
import { ShowcaseCarousel } from './components/ShowcaseCarousel';
import { ProductsGrid } from './components/ProductsGrid';
import { FAQSection } from './components/FAQSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { CareersSection } from './components/CareersSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AdSenseBanner } from './components/AdSenseBanner';
import { ContactModal } from './components/ContactModal';
import { AnnouncementModal } from './components/AnnouncementModal';
import { CursorGlow } from './components/CursorGlow';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [announcementModalOpen, setAnnouncementModalOpen] = useState(true);
  const [modalDefaultProduct, setModalDefaultProduct] = useState<'ScriptedBIM' | 'BIMAI' | 'General' | '11-Day Trial'>('General');
  const [modalInitialMessage, setModalInitialMessage] = useState('');

  const handleOpenContact = (
    defaultProduct: 'ScriptedBIM' | 'BIMAI' | 'General' | '11-Day Trial' = 'General',
    initialMessage: string = ''
  ) => {
    setModalDefaultProduct(defaultProduct);
    setModalInitialMessage(initialMessage);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#05131a] selection:bg-[#c9f3f7] selection:text-[#04414a] font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden relative">
      {/* Full Page Continuous Seamless Background Mesh & Gradient */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        {/* Continuous gradient fill */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#eaf6f8] via-[#f6fafb] via-40% to-[#e8f4f7]" />
        
        {/* Soft Glowing Background Orbs down the page */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[900px] bg-gradient-to-b from-[#0EA9BC]/18 via-[#326578]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[25%] left-[-10%] w-[1000px] h-[800px] bg-gradient-to-r from-[#0B3550]/12 to-[#0EA9BC]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[50%] right-[-10%] w-[1100px] h-[850px] bg-gradient-to-l from-[#0EA9BC]/14 to-[#326578]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-[1300px] h-[800px] bg-gradient-to-t from-[#0B3550]/15 via-[#0EA9BC]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        {/* Architectural Dot Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#0EA9BC_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06]" />
      </div>

      {/* Dynamic Cursor Glow Following Light Effect */}
      <CursorGlow />

      {/* Floating Header Navbar */}
      <Navbar 
        onOpenContact={handleOpenContact} 
        onOpenAnnouncement={() => setAnnouncementModalOpen(true)}
      />

      {/* Main Content Sections - Full Width Container */}
      <main className="relative z-10 w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero 
          onOpenContact={handleOpenContact} 
          onOpenAnnouncement={() => setAnnouncementModalOpen(true)}
        />

        {/* 11-Day Free Trial Highlight Banner */}
        <TrialBanner onOpenContact={handleOpenContact} />

        {/* Slogan Banner */}
        <SloganBanner />

        {/* 1. About Us (R&D Startup) Section */}
        <AboutSection onOpenContact={handleOpenContact} />

        {/* 2. Services & Training Section */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* 3. Products Grid */}
        <ProductsGrid onOpenContact={handleOpenContact} />

        {/* Feature 01: ScriptedBIM */}
        <ScriptedBIMSection onOpenContact={handleOpenContact} />

        {/* Feature 02: BIMAI */}
        <BIMAISection onOpenContact={handleOpenContact} />

        {/* Workflow Showcase Carousel */}
        <ShowcaseCarousel onOpenContact={handleOpenContact} />

        {/* 4. Careers & Internships Section */}
        <CareersSection onOpenContact={handleOpenContact} />

        {/* 5. FAQ Section */}
        <FAQSection />

        {/* Final CTA */}
        <CTASection onOpenContact={handleOpenContact} />

        {/* Google AdSense Unit */}
        <AdSenseBanner />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => handleOpenContact('General')} />

      {/* Big Animated Launch Announcement Modal */}
      <AnnouncementModal
        isOpen={announcementModalOpen}
        onClose={() => setAnnouncementModalOpen(false)}
        onOpenContact={handleOpenContact}
      />

      {/* Early Access & Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultProduct={modalDefaultProduct}
        initialMessage={modalInitialMessage}
      />
    </div>
  );
}
