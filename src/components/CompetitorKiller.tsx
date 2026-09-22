import React from 'react';
import { X, Check, ShieldAlert, Phone, Trophy, ExternalLink, ArrowRight, Flame } from 'lucide-react';

export const CompetitorKiller: React.FC = () => {
  return (
    <section id="competitors" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07080c] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-900/60 border border-red-500/50 text-red-300 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>ROSLINDALE LOCAL MARKET REALITY CHECK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Your Competitors in Roslindale Have Websites —{' '}
            <span className="text-red-500 underline decoration-red-600 decoration-4">You Don&apos;t</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            Right now, when someone on Washington St types &ldquo;inspection near me&rdquo; into their iPhone, Google sends them to these other shops instead of Alfa Auto Fuel.
          </p>
        </div>

        {/* 3-Column Face-Off Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Competitor 1 */}
          <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
                  COMPETITOR #1
                </span>
                <span className="text-xs text-amber-400 font-bold">1.2 miles away</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-200">Parkway Auto &amp; Inspection</h3>
                <p className="text-xs text-neutral-400">Washington St / Roslindale corridor</p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Has Modern Mobile Website</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Online Appointment System</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Shows up top of Google Maps</span>
                </div>
                <div className="flex items-center gap-2 text-red-400 font-bold bg-red-950/40 p-2 rounded border border-red-900/30">
                  <span>Steals ~55 inspection customers/week</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-500 flex items-center justify-between">
              <span>Status: Active Website</span>
              <span className="text-emerald-400">Taking Your Money</span>
            </div>
          </div>

          {/* Alfa Auto Fuel - CURRENT (WITHOUT SITE) */}
          <div className="bg-gradient-to-b from-red-950/40 via-neutral-900 to-black border-2 border-red-600/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-red-600 text-white font-mono text-[11px] font-bold uppercase tracking-wider shadow-md">
              ALFA AUTO CURRENT STATUS
            </div>

            <div className="space-y-4 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800">
                  4139 WASHINGTON ST
                </span>
                <span className="text-xs text-red-400 font-bold">Your Shop</span>
              </div>

              <div>
                <h3 className="text-2xl font-black font-display text-white">Alfa Auto Fuel</h3>
                <p className="text-xs text-red-300 font-semibold">Current State (No Website)</p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2 text-red-400 font-medium">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="line-through text-neutral-400">No Website</span>
                  <span className="text-red-400 font-bold">(Lost to competition)</span>
                </div>
                <div className="flex items-center gap-2 text-red-400 font-medium">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span>No Online Booking System</span>
                </div>
                <div className="flex items-center gap-2 text-red-400 font-medium">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Hidden Below Competitors on Google</span>
                </div>
                <div className="flex items-center gap-2 text-red-400 font-medium">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Missing Drive-By Searchers</span>
                </div>
                <div className="bg-red-950/70 p-3 rounded-lg border border-red-800 text-red-200 text-xs font-mono font-bold">
                  ⚠️ Losing ~$875 every single day in walk-aways
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-red-900/50">
              <div className="text-center text-xs text-amber-300 font-bold mb-2">
                Turn this around in 2 hours:
              </div>
              <a
                href="#booking"
                className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Activate This Site Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Competitor 2 */}
          <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
                  COMPETITOR #2
                </span>
                <span className="text-xs text-amber-400 font-bold">0.8 miles away</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-200">Hyde Park Car Care</h3>
                <p className="text-xs text-neutral-400">Hyde Park Ave / Roslindale line</p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Click-to-Call on Google Mobile</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automated SMS Confirmation</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>40+ 5-Star Reviews Showcased</span>
                </div>
                <div className="flex items-center gap-2 text-red-400 font-bold bg-red-950/40 p-2 rounded border border-red-900/30">
                  <span>Steals ~40 oil changes &amp; brake jobs/week</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-500 flex items-center justify-between">
              <span>Status: Active Website</span>
              <span className="text-emerald-400">Taking Your Money</span>
            </div>
          </div>
        </div>

        {/* Big Call-to-Action Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-red-950 via-neutral-900 to-red-950 border-2 border-amber-500/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
              <Flame className="w-4 h-4 text-red-500 animate-pulse" />
              <span>THE GAME CHANGES TODAY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              Don&apos;t Lose Another Customer — Call (857) 361-8923 Now Live
            </h3>
            <p className="text-sm text-neutral-300">
              When you activate this website, Alfa Auto Fuel jumps above both competitors on Google.
            </p>
          </div>

          <a
            id="competitor-killer-call-btn"
            href="tel:+18573618923"
            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-black rounded-xl text-base shadow-xl shadow-amber-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2 font-display uppercase tracking-wide cursor-pointer shrink-0"
          >
            <Phone className="w-5 h-5 text-neutral-950" />
            <span>Call (857) 361-8923 Now Live</span>
          </a>
        </div>
      </div>
    </section>
  );
};
