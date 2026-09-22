import React from 'react';
import { Phone, MessageCircle, DollarSign } from 'lucide-react';

export const StickyBottomBar: React.FC = () => {
  return (
    <>
      {/* Omnipresent Sticky Bottom Floating Call Bar */}
      <div
        id="omnipresent-bottom-bar"
        className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-950/95 border-t border-red-600/50 backdrop-blur-lg px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3 max-w-lg mx-auto sm:rounded-t-2xl sm:bottom-0 sm:border-x"
      >
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold truncate">
            ALFA AUTO FUEL HOTLINE
          </div>
          <div className="text-xs sm:text-sm font-mono font-black text-white truncate">
            +1 (857) 361-8923
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            id="sticky-hotline-call-btn"
            href="tel:+18573618923"
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-red-950/60 font-display transition-transform hover:scale-105"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
            <span>Tap to Call</span>
          </a>

          <a
            id="sticky-booking-quick-btn"
            href="#booking"
            className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 rounded-xl font-black text-xs uppercase flex items-center gap-1 shadow-md font-display transition-transform hover:scale-105"
          >
            <DollarSign className="w-3.5 h-3.5 text-neutral-950" />
            <span>Book $35</span>
          </a>

          <a
            id="sticky-whatsapp-btn"
            href="https://wa.me/18573618923?text=Hi%20I%20want%20to%20make%20Alfa%20Auto%20Fuel%20website%20live"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-md transition-transform hover:scale-105"
            aria-label="WhatsApp live chat"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};
