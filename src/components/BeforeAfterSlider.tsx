import React, { useState } from 'react';
import { Sliders, PhoneCall, Clock, CheckCircle2, XCircle, Sparkles, Trophy } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100

  return (
    <section id="transformation" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090a0f] border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5 text-red-500" />
            <span>THE 180° REVENUE TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Before vs. After <span className="gold-gradient-text">This Website</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400">
            Drag the slider to see how Alfa Auto Fuel transforms from relying on random drive-bys to an automated 24/7 customer magnet on Washington Street.
          </p>
        </div>

        {/* Interactive Split Comparison Card */}
        <div className="relative bg-neutral-950 border-2 border-neutral-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left: BEFORE */}
            <div className={`p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-red-900/40 space-y-6 transition-all ${sliderPos < 50 ? 'ring-2 ring-red-500/50' : 'opacity-75'}`}>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-red-950 text-red-400 border border-red-800 text-xs font-mono font-black uppercase tracking-wider">
                  BEFORE (WITHOUT WEBSITE)
                </span>
                <span className="text-xs text-red-400 font-mono">Status Quo</span>
              </div>

              <div className="space-y-4">
                <div className="text-2xl font-black font-display text-neutral-300">
                  Invisible to 90% of Roslindale Drivers
                </div>

                <ul className="space-y-3 text-sm text-neutral-400">
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-neutral-200">No Online Presence:</strong> When someone asks Siri or Google for inspection near Roslindale, you don&apos;t show up.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-neutral-200">Losing Drive-Bys:</strong> Commuters on Washington St rush past your pumps directly to booked appointments at competitors.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-neutral-200">Phone Rings Under The Car:</strong> You can&apos;t answer because you&apos;re doing brakes or oil. Missed call = lost $85 ticket.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-neutral-200">Slow Afternoon Lulls:</strong> Bay sits empty between 1:00 PM and 3:30 PM with zero bookings scheduled.
                    </span>
                  </li>
                </ul>

                <div className="p-3.5 bg-red-950/40 rounded-xl border border-red-900/40 text-xs font-mono text-red-300">
                  Estimated lost revenue: <strong className="text-white">$26,000+ every 30 days</strong>
                </div>
              </div>
            </div>

            {/* Right: AFTER */}
            <div className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-red-950/40 border-2 border-amber-500/80 space-y-6 shadow-xl transition-all ${sliderPos >= 50 ? 'ring-2 ring-amber-400/50' : 'opacity-75'}`}>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-neutral-950 text-xs font-mono font-black uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AFTER (WITH THIS WEBSITE)</span>
                </span>
                <span className="text-xs text-amber-400 font-mono font-bold">24/7 Cash Register</span>
              </div>

              <div className="space-y-4">
                <div className="text-2xl font-black font-display text-white">
                  Roslindale&apos;s #1 Booked Auto Station
                </div>

                <ul className="space-y-3 text-sm text-neutral-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-300">#1 on Google Local:</strong> Alfa Auto Fuel dominates the top 3-pack for state inspections, brakes, and oil in Roslindale.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-300">Instant Online Booking:</strong> Customers lock in their $35 inspection or service from their phone in 20 seconds.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-300">Direct VIP Hotline:</strong> Calls route instantly to your pocket on <strong className="text-white font-mono">+1 (857) 361-8923</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-300">Fully Packed Calendar:</strong> Wake up to 6–10 pre-scheduled morning slots before you even unlock the doors.
                    </span>
                  </li>
                </ul>

                <div className="p-3.5 bg-amber-950/50 rounded-xl border border-amber-600/50 text-xs font-mono text-amber-300">
                  ⚡ Result: <strong className="text-white">Full bays, predictable profit, zero stress</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Range Slider Controls */}
          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-2/3 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-red-400 font-bold">100% Old Way</span>
                <span className="text-amber-400 font-bold">Slide to Reveal Difference</span>
                <span className="text-emerald-400 font-bold">100% New Cash Machine</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                aria-label="Comparison slider before and after website"
                className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSliderPos(0)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${sliderPos === 0 ? 'bg-red-600 text-white border-red-500' : 'bg-neutral-900 text-neutral-400 border-neutral-700'}`}
              >
                View Before
              </button>
              <button
                onClick={() => setSliderPos(100)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${sliderPos === 100 ? 'bg-amber-400 text-neutral-950 border-amber-400' : 'bg-neutral-900 text-neutral-400 border-neutral-700'}`}
              >
                View After
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
