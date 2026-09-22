import React from 'react';
import { Phone, MessageCircle, Clock, Check, Sparkles, MapPin, Zap, ShieldCheck } from 'lucide-react';

export const FooterOffer: React.FC = () => {
  return (
    <footer className="bg-black border-t-2 border-red-600/80 pt-16 pb-28 px-4 sm:px-6 lg:px-8 relative text-neutral-300">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Irresistible Owner Pitch Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-red-950 via-neutral-900 to-black border-2 border-amber-400 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden md:block">
            <Sparkles className="w-64 h-64 text-amber-400" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400 text-neutral-950 font-black text-xs font-mono uppercase tracking-wider">
              <Zap className="w-4 h-4 text-neutral-950" />
              <span>THE 2-HOUR ACTIVATION DEAL</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight leading-tight">
              Ready to Turn Alfa Auto Fuel Into a{' '}
              <span className="gold-gradient-text">24/7 Money Machine?</span>
            </h3>

            {/* The exact prompt footer trick */}
            <p className="text-lg sm:text-xl text-neutral-100 font-medium leading-relaxed bg-black/50 p-4 rounded-xl border border-red-900/60">
              &ldquo;This website was custom-built for{' '}
              <strong className="text-amber-400">Alfa Auto Fuel</strong> at{' '}
              <strong className="text-white">4139 Washington St</strong>. Want it live on your domain today? Call{' '}
              <a href="tel:+18573618923" className="text-amber-300 underline font-mono font-bold">
                (857) 361-8923
              </a>{' '}
              — We can go live in 2 hours. <span className="text-emerald-400 font-bold">$199 setup + $29/month</span>.&rdquo;
            </p>

            {/* Boston straight talk value points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-300 pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No technical hassle — we configure everything for you</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Your domain connected (e.g. AlfaAutoFuel.com)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Google Business &amp; Apple Maps #1 Local sync</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Immediate SMS alerts sent right to your cell</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                id="footer-call-now-btn"
                href="tel:+18573618923"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-base uppercase tracking-wider rounded-xl shadow-xl shadow-red-950 flex items-center justify-center gap-2.5 font-display hover:scale-105 transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5 text-amber-300 animate-bounce" />
                <span>Call Hotline: (857) 361-8923</span>
              </a>

              <a
                id="footer-wa-btn"
                href="https://wa.me/18573618923?text=Hi%20I%20want%20to%20make%20Alfa%20Auto%20Fuel%20website%20live"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base rounded-xl shadow-lg shadow-emerald-950 flex items-center justify-center gap-2.5 hover:scale-105 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Business Summary Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400 border-t border-neutral-800/80 pt-8">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-display font-black text-lg text-white">
              ALFA AUTO FUEL &bull; 4139 WASHINGTON ST
            </div>
            <div>Roslindale, Boston, MA 02131 &bull; Phone: +1 (857) 361-8923</div>
            <div className="text-[11px] text-neutral-500">
              Old Line: (617) 327-6133 &bull; Licensed Massachusetts State Motor Vehicle Inspection Station
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-amber-400">&bull; Demo Exclusively for Shop Owner</span>
            <span>&bull; Copyright {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
