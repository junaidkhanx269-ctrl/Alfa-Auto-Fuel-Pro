import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Play, ShieldCheck, DollarSign } from 'lucide-react';

interface NavbarProps {
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Address */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-display font-black text-xl text-white shadow-md shadow-red-900/30 border border-red-400/40 group-hover:scale-105 transition-transform">
              AF
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl tracking-wider text-white">
                  ALFA<span className="text-red-500">AUTO</span>
                  <span className="text-amber-400">FUEL</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-amber-300 border border-neutral-700">
                  EST. 1981
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-neutral-400 font-medium">
                <MapPin className="w-3 h-3 text-red-400" />
                <span>4139 Washington St, Roslindale, MA 02131</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#profit-calc" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-amber-400" />
              <span>Profit Loss</span>
            </a>
            <a href="#competitors" className="hover:text-red-400 transition-colors">
              Competitor Killer
            </a>
            <a href="#booking" className="hover:text-amber-400 transition-colors text-amber-300 font-semibold">
              Cash Register (Booking)
            </a>
            <a href="#google-rank" className="hover:text-red-400 transition-colors">
              Google #1 Rank
            </a>
            <a href="#owner" className="hover:text-neutral-100 transition-colors">
              Owner &amp; History
            </a>
            <a href="#location-map" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Map &amp; Directions</span>
            </a>
            <button
              onClick={onReplayIntro}
              title="Replay cinematic intro"
              className="text-xs text-neutral-400 hover:text-white px-2.5 py-1 rounded border border-neutral-800 hover:border-neutral-600 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 text-red-500" />
              <span>Intro</span>
            </button>
          </nav>

          {/* Hotline CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-hotline-btn"
              href="tel:+18573618923"
              className="flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-950/50 border border-red-500/50 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-black/30">
                <Phone className="w-4 h-4 text-amber-300 animate-pulse" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-mono tracking-wider text-red-200">
                  YOUR BUSINESS HOTLINE
                </div>
                <div className="text-sm font-mono font-black text-amber-300">
                  +1 (857) 361-8923
                </div>
              </div>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+18573618923"
              className="p-2 bg-red-600 text-white rounded-lg flex items-center justify-center"
              aria-label="Call Alfa Auto Fuel"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg border border-neutral-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3">
          <div className="p-3 bg-red-950/60 border border-red-800/60 rounded-lg text-xs text-red-200 font-mono">
            🔥 Official Hotline: +1 (857) 361-8923 (Tap to call)
          </div>
          <div className="grid grid-cols-1 gap-2 text-sm font-medium">
            <a
              href="#profit-calc"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-800 text-neutral-200 flex items-center justify-between"
            >
              <span>Profit Loss Calculator ($26K/mo)</span>
              <DollarSign className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href="#competitors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-800 text-neutral-200"
            >
              Competitor Killer (Roslindale)
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-red-900/30 text-amber-400 font-bold border border-red-800/40"
            >
              Online Cash Register (Book $35 Inspection)
            </a>
            <a
              href="#google-rank"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-800 text-neutral-200"
            >
              We Put You #1 on Google
            </a>
            <a
              href="#owner"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-800 text-neutral-200"
            >
              Meet The Most Trusted Shop Since 1981
            </a>
            <a
              href="#location-map"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-800 text-amber-400 font-semibold flex items-center justify-between"
            >
              <span>Map &amp; Directions (4139 Washington St)</span>
              <MapPin className="w-4 h-4 text-red-500" />
            </a>
          </div>
          <div className="pt-2 flex items-center justify-between border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 text-red-500" />
              <span>Replay Intro Animation</span>
            </button>
            <span className="text-[11px] text-neutral-500 font-mono">4139 Washington St</span>
          </div>
        </div>
      )}
    </header>
  );
};
