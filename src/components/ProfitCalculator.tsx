import React, { useState } from 'react';
import { DollarSign, TrendingDown, Phone, Calculator, AlertTriangle, ArrowRight, Zap } from 'lucide-react';
import { playCashRegisterSound } from '../utils/audio';

export const ProfitCalculator: React.FC = () => {
  const [dailyCars, setDailyCars] = useState<number>(500);
  const [searchPercentage, setSearchPercentage] = useState<number>(5);
  const [ticketPrice, setTicketPrice] = useState<number>(35); // MA state inspection standard

  const searchersPerDay = Math.round(dailyCars * (searchPercentage / 100));
  const dailyLoss = searchersPerDay * ticketPrice;
  const monthlyLoss = dailyLoss * 30;
  const yearlyLoss = monthlyLoss * 12;

  // Compare to website cost ($199 setup)
  const hoursToBreakEven = Math.max(1, Math.round((199 / (dailyLoss / 8)) * 10) / 10);

  return (
    <section id="profit-calc" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0d13] relative overflow-hidden border-y border-neutral-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 text-xs font-mono font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>UNSEEN REVENUE BLEED ON WASHINGTON STREET</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            How Much Money Are You <br className="hidden sm:inline" />
            <span className="text-red-500">Losing Without a Website?</span>
          </h2>

          <p className="text-lg sm:text-xl font-bold text-amber-400 font-display">
            &ldquo;This Website Pays For Itself In 2 Days&rdquo;
          </p>

          <p className="text-sm text-neutral-400">
            Every minute an iPhone in Roslindale searches for an inspection sticker, tire fix, or check engine light. If you don&apos;t show up, that driver pulls into the shop 3 blocks away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls column */}
          <div className="lg:col-span-6 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-amber-400" />
                  <span className="font-bold text-white text-base">Alfa Auto Traffic Simulator</span>
                </div>
                <button
                  onClick={() => {
                    setDailyCars(500);
                    setSearchPercentage(5);
                    setTicketPrice(35);
                    playCashRegisterSound();
                  }}
                  className="text-xs text-neutral-400 hover:text-amber-300 underline font-mono cursor-pointer"
                >
                  Reset Defaults
                </button>
              </div>

              {/* Slider 1: Daily traffic passing 4139 Washington St */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="daily-cars-slider" className="font-medium text-neutral-300">
                    Cars Passing 4139 Washington St Daily
                  </label>
                  <span className="font-mono font-bold text-amber-400 text-base bg-black/40 px-2.5 py-0.5 rounded border border-neutral-800">
                    {dailyCars.toLocaleString()} cars/day
                  </span>
                </div>
                <input
                  id="daily-cars-slider"
                  type="range"
                  min="200"
                  max="2000"
                  step="50"
                  value={dailyCars}
                  onChange={(e) => setDailyCars(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                  <span>200 (Quiet Day)</span>
                  <span>500 (Washington St Avg)</span>
                  <span>2,000 (Rush Hour)</span>
                </div>
              </div>

              {/* Slider 2: % searching on phone */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <label htmlFor="search-percent-slider" className="font-medium text-neutral-300">
                    Drivers Searching &ldquo;Inspection / Mechanic Near Me&rdquo;
                  </label>
                  <span className="font-mono font-bold text-red-400 text-base bg-black/40 px-2.5 py-0.5 rounded border border-neutral-800">
                    {searchPercentage}%
                  </span>
                </div>
                <input
                  id="search-percent-slider"
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={searchPercentage}
                  onChange={(e) => setSearchPercentage(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                  <span>1% conservative</span>
                  <span>5% typical</span>
                  <span>15% high demand</span>
                </div>
              </div>

              {/* Ticket Price Quick Select */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-neutral-300">Average Service Ticket</span>
                  <span className="font-mono font-bold text-emerald-400 text-base bg-black/40 px-2.5 py-0.5 rounded border border-neutral-800">
                    ${ticketPrice}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => {
                      setTicketPrice(35);
                      playCashRegisterSound();
                    }}
                    className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      ticketPrice === 35
                        ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-md'
                        : 'bg-neutral-800/60 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    $35 (Inspection)
                  </button>
                  <button
                    onClick={() => {
                      setTicketPrice(85);
                      playCashRegisterSound();
                    }}
                    className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      ticketPrice === 85
                        ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-md'
                        : 'bg-neutral-800/60 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    $85 (Oil &amp; Filter)
                  </button>
                  <button
                    onClick={() => {
                      setTicketPrice(250);
                      playCashRegisterSound();
                    }}
                    className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      ticketPrice === 250
                        ? 'bg-amber-400 text-neutral-950 border-amber-400 shadow-md'
                        : 'bg-neutral-800/60 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    $250 (Brakes/Repairs)
                  </button>
                </div>
              </div>
            </div>

            {/* Formula note */}
            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>{dailyCars} cars &times; {searchPercentage}% &times; ${ticketPrice}</span>
              <span className="text-amber-400 font-bold">= {searchersPerDay} lost customers / day</span>
            </div>
          </div>

          {/* Loss Reveal Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-red-950/60 via-neutral-900 to-black border-2 border-red-600/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-red-300 flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4 text-red-400" />
                  CURRENT LOSS WITHOUT THIS WEBSITE
                </span>
                <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-red-600/30 text-red-300 border border-red-500/40">
                  REAL DOLLARS LOST
                </span>
              </div>

              {/* Big Loss Numbers */}
              <div className="space-y-4">
                <div className="bg-black/60 rounded-xl p-4 border border-red-900/40">
                  <div className="text-xs font-mono text-neutral-400 uppercase">You are leaving on the table today:</div>
                  <div className="text-4xl sm:text-5xl font-black font-display text-red-500 tracking-tight mt-1 flex items-baseline gap-1">
                    <span>${dailyLoss.toLocaleString()}</span>
                    <span className="text-lg text-neutral-400 font-normal">/ day</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-950 to-neutral-900 rounded-xl p-5 border-2 border-amber-500/50 shadow-lg">
                  <div className="text-xs font-mono text-amber-300 uppercase font-bold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    MONTHLY CASH BLEED TO LOCAL COMPETITORS:
                  </div>
                  <div className="text-4xl sm:text-6xl font-black font-display text-amber-400 tracking-tight mt-1">
                    ${monthlyLoss.toLocaleString()}
                  </div>
                  <div className="text-xs text-neutral-300 mt-1 font-mono">
                    That is <span className="text-white font-bold">${yearlyLoss.toLocaleString()}</span> per year in lost gross revenue!
                  </div>
                </div>
              </div>

              {/* Eye-Opening Comparison */}
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-700/80 text-xs text-neutral-300 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <span>💡 Why This Website Pays For Itself In 2 Days:</span>
                </div>
                <p>
                  At just <strong>${dailyLoss} lost every single day</strong>, getting only <strong>3 online bookings</strong> through this site covers your setup cost immediately.
                </p>
                <div className="text-amber-400 font-mono font-semibold pt-1">
                  Breakeven time: Under {hoursToBreakEven} hours of garage business!
                </div>
              </div>
            </div>

            {/* CTA to lock in site */}
            <div className="mt-6 pt-4 border-t border-neutral-800">
              <a
                id="calc-call-hotline-btn"
                href="tel:+18573618923"
                className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-900/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>STOP LOSING ${monthlyLoss.toLocaleString()}/MO &bull; CALL (857) 361-8923 NOW</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
