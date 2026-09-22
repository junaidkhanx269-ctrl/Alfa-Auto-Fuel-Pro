import React, { useState } from 'react';
import { CinematicIntro } from './components/CinematicIntro';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfitCalculator } from './components/ProfitCalculator';
import { CompetitorKiller } from './components/CompetitorKiller';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CashRegisterBooking } from './components/CashRegisterBooking';
import { OwnerSection } from './components/OwnerSection';
import { GoogleDomination } from './components/GoogleDomination';
import { ServicesSection } from './components/ServicesSection';
import { LocationMapSection } from './components/LocationMapSection';
import { FooterOffer } from './components/FooterOffer';
import { SocialProofToast } from './components/SocialProofToast';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080c] text-neutral-100 selection:bg-red-600 selection:text-white flex flex-col font-sans">
      {/* 1. Cinematic Intro Overlay */}
      <CinematicIntro isOpen={showIntro} onComplete={() => setShowIntro(false)} />

      {/* 2. Navigation Header */}
      <Navbar onReplayIntro={() => setShowIntro(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 4. Personalized Hero with Street View & Exclusive Badge */}
        <HeroSection />

        {/* 5. Profit Calculator ($26,000/mo Lost Revenue) */}
        <ProfitCalculator />

        {/* 6. Competitor Killer (Roslindale Shops vs Alfa) */}
        <CompetitorKiller />

        {/* 7. Before / After Interactive Transformation Slider */}
        <BeforeAfterSlider />

        {/* 8. Online Cash Register (The Money-Making Booking Form) */}
        <CashRegisterBooking />

        {/* 9. Owner's Face Section (Most Trusted Shop Since 1981) */}
        <OwnerSection />

        {/* 10. We Put You #1 on Google Simulation */}
        <GoogleDomination />

        {/* 11. Complete Garage Services & Transparent Pricing */}
        <ServicesSection />

        {/* 12. Styled Dark-Mode Map Snippet & Google Maps Directions Engine */}
        <LocationMapSection />
      </main>

      {/* 12. Footer with 2-Hour Activation Trick */}
      <FooterOffer />

      {/* 13. Live Social Proof Popups (every 5 seconds) */}
      <SocialProofToast />

      {/* 14. Watermark & Omnipresent Sticky Bottom Call Bar */}
      <StickyBottomBar />
    </div>
  );
}
