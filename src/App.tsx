import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SloganBanner } from './components/SloganBanner';
import { ScriptedBIMSection } from './components/ScriptedBIMSection';
import { BIMAISection } from './components/BIMAISection';
import { ShowcaseCarousel } from './components/ShowcaseCarousel';
import { ProductsGrid } from './components/ProductsGrid';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { AnnouncementModal } from './components/AnnouncementModal';
import { CursorGlow } from './components/CursorGlow';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [announcementModalOpen, setAnnouncementModalOpen] = useState(true);
  const [modalDefaultProduct, setModalDefaultProduct] = useState<'ScriptedBIM' | 'BIMAI' | 'General'>('General');
  const [modalInitialMessage, setModalInitialMessage] = useState('');

  const handleOpenContact = (
    defaultProduct: 'ScriptedBIM' | 'BIMAI' | 'General' = 'General',
    initialMessage: string = ''
  ) => {
    setModalDefaultProduct(defaultProduct);
    setModalInitialMessage(initialMessage);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#05131a] selection:bg-[#c9f3f7] selection:text-[#04414a] font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden relative">
      {/* Dynamic Cursor Glow Following Light Effect */}
      <CursorGlow />

      {/* Floating Header Navbar */}
      <Navbar 
        onOpenContact={handleOpenContact} 
        onOpenAnnouncement={() => setAnnouncementModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 max-w-[1728px] mx-auto w-full box-border overflow-x-hidden">
        {/* Hero Section */}
        <Hero 
          onOpenContact={handleOpenContact} 
          onOpenAnnouncement={() => setAnnouncementModalOpen(true)}
        />

        {/* Slogan Banner */}
        <SloganBanner />

        {/* Feature 01: ScriptedBIM */}
        <ScriptedBIMSection onOpenContact={handleOpenContact} />

        {/* Feature 02: BIMAI */}
        <BIMAISection onOpenContact={handleOpenContact} />

        {/* Workflow Showcase Carousel */}
        <ShowcaseCarousel onOpenContact={handleOpenContact} />

        {/* Products Grid */}
        <ProductsGrid onOpenContact={handleOpenContact} />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA */}
        <CTASection onOpenContact={handleOpenContact} />
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
