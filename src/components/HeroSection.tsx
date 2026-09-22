import React from 'react';
import { Phone, Compass, ShieldCheck, CheckCircle2, ChevronRight, Sparkles, MapPin, DollarSign } from 'lucide-react';
import heroImage from '../assets/images/alfa_auto_hero_1790096071065.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background image: Real Google Street View representation of 4139 Washington St */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Alfa Auto Fuel shop located at 4139 Washington St, Roslindale MA"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.1] scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-[#090a0f]/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#090a0f]/60 to-[#090a0f]" />
      </div>

      {/* Street View UI Overlay indicator in corner */}
      <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-neutral-300">
        <Compass className="w-4 h-4 text-red-500 animate-spin-slow" />
        <span>4139 Washington St &bull; 42.2789° N, 71.1345° W</span>
        <span className="px-1.5 py-0.5 bg-blue-600/80 text-[10px] text-white rounded font-bold">
          STREET VIEW
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Requirement 1: Personalized Badge in Top Left Corner of Content */}
        <div className="flex justify-center sm:justify-start">
          <div
            id="personalized-hero-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-950/90 to-neutral-900 border-2 border-red-500/80 text-amber-300 text-xs sm:text-sm font-black tracking-wide shadow-xl shadow-red-950/80"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span>EXCLUSIVELY DESIGNED FOR ALFA AUTO FUEL — 4139 WASHINGTON ST</span>
          </div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="space-y-4 text-left sm:text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-tight">
            Your Shop Deserves More <br className="hidden sm:inline" />
            <span className="text-red-500">Than Just</span>{' '}
            <span className="gold-gradient-text">Drive-Bys</span>
          </h1>

          <p className="text-lg sm:text-2xl font-semibold text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            We Turn Google Searches Into Paying Customers For{' '}
            <span className="text-amber-400 font-bold underline decoration-red-500 decoration-2 underline-offset-4">
              Alfa Auto Fuel
            </span>
            .
          </p>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            Right now, hundreds of Roslindale drivers are on Washington Street searching on their phones for state inspections and auto repair. Without this website, they drive straight past your pumps into competitor bays.
          </p>
        </div>

        {/* Big Business Hotline Highlight Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-red-950/50 to-neutral-900/90 border border-red-600/40 shadow-2xl backdrop-blur-md max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center justify-center sm:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>YOUR BUSINESS HOTLINE (DISPLAYED EVERYWHERE)</span>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-black text-white mt-1">
                +1 (857) 361-8923
              </div>
              <div className="text-[11px] text-neutral-400">
                Direct cell / VIP line &bull; Replaces (617) 327-6133 with 24/7 lead routing
              </div>
            </div>

            <a
              id="hero-call-now-btn"
              href="tel:+18573618923"
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-900/50 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 animate-bounce text-amber-300" />
              <span>Tap to Call Your Shop</span>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-black rounded-xl text-base shadow-xl shadow-amber-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer font-display tracking-wide"
          >
            <DollarSign className="w-5 h-5 text-neutral-950" />
            <span>TEST YOUR NEW CASH REGISTER (BOOKING)</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#profit-calc"
            className="w-full sm:w-auto px-6 py-4 bg-neutral-900/90 hover:bg-neutral-800 text-white font-bold rounded-xl border border-neutral-700 text-sm hover:border-red-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-red-400" />
            <span>See How Much Money You&apos;re Losing Daily</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="p-3 rounded-xl bg-black/50 border border-neutral-800/80 backdrop-blur-sm">
            <div className="text-amber-400 font-bold text-sm font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>40+ YEARS</span>
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">Roslindale Since 1981</div>
          </div>

          <div className="p-3 rounded-xl bg-black/50 border border-neutral-800/80 backdrop-blur-sm">
            <div className="text-amber-400 font-bold text-sm font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>MA INSPECTION</span>
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">Licensed Bay &bull; $35</div>
          </div>

          <div className="p-3 rounded-xl bg-black/50 border border-neutral-800/80 backdrop-blur-sm">
            <div className="text-amber-400 font-bold text-sm font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>24/7 CAPTURE</span>
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">Book while you sleep</div>
          </div>

          <div className="p-3 rounded-xl bg-black/50 border border-neutral-800/80 backdrop-blur-sm">
            <div className="text-amber-400 font-bold text-sm font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>LIVE IN 2 HRS</span>
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">Turn-key setup</div>
          </div>
        </div>
      </div>
    </section>
  );
};
