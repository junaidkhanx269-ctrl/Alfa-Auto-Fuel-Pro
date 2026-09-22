import React, { useState, useEffect } from 'react';
import { playFuelPumpSound } from '../utils/audio';
import { Fuel, Sparkles, Volume2, ArrowRight } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
  isOpen: boolean;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete, isOpen }) => {
  const [step, setStep] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0.0);

  useEffect(() => {
    if (!isOpen) return;

    // Auto sequence
    const t1 = setTimeout(() => {
      setStep(1); // "4139 Washington St Has A Legend..."
    }, 400);

    const t2 = setTimeout(() => {
      setStep(2); // Sound & Fuel Meter starts ticking
      playFuelPumpSound();
    }, 1800);

    const t3 = setTimeout(() => {
      setStep(3); // Reveal ALFA AUTO FUEL
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isOpen]);

  useEffect(() => {
    if (step === 2 || step === 3) {
      const interval = setInterval(() => {
        setCounter((prev) => (prev < 35.0 ? Number((prev + 3.8).toFixed(2)) : 35.0));
      }, 90);
      return () => clearInterval(interval);
    }
  }, [step]);

  if (!isOpen) return null;

  return (
    <div
      id="cinematic-intro-modal"
      className="fixed inset-0 z-50 bg-[#060709] flex flex-col items-center justify-center p-6 text-center select-none transition-opacity duration-700"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* Skip button top right */}
      <button
        id="intro-skip-btn"
        onClick={onComplete}
        className="absolute top-6 right-6 text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/80 text-neutral-400 hover:text-white hover:border-red-500 transition-all cursor-pointer flex items-center gap-1.5"
      >
        <span>Skip Directly to Website</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      <div className="relative max-w-xl mx-auto space-y-8">
        {/* Step 1: The Address */}
        {step >= 1 && (
          <div className="animate-in fade-in zoom-in-95 duration-700">
            <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest text-amber-400 bg-amber-950/60 border border-amber-500/30 rounded-full mb-3">
              ROSLINDALE, BOSTON MA 02131
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-300 font-display tracking-wide">
              4139 Washington St Has A Legend...
            </h2>
          </div>
        )}

        {/* Step 2: Fuel Pump Ticker */}
        {step >= 2 && (
          <div className="animate-in fade-in duration-500 py-2">
            <div className="inline-flex flex-col items-center p-4 bg-neutral-900/90 border-2 border-neutral-800 rounded-xl shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
                <Fuel className="w-4 h-4 text-red-500 animate-bounce" />
                <span>PUMP #1 ACTIVATED &bull; STATE INSPECTION READY</span>
              </div>
              <div className="font-display text-4xl sm:text-6xl font-bold tracking-wider text-amber-400 font-mono">
                ${counter.toFixed(2)}
              </div>
              <div className="text-[10px] text-neutral-500 tracking-wider uppercase mt-1">
                GALLONS: {(counter / 3.49).toFixed(2)} | REGULAR UNLEADED
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Reveal ALFA AUTO FUEL */}
        {step >= 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-6">
            <div className="space-y-2">
              <div className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white flex items-center justify-center gap-3">
                <span className="text-red-600">ALFA</span>
                <span className="text-white">AUTO</span>
                <span className="text-amber-400">FUEL</span>
              </div>
              <p className="text-sm sm:text-base text-neutral-300 font-medium">
                The Most Trusted Auto Repair & Inspection Station in Roslindale Since 1981
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="intro-enter-btn"
                onClick={() => {
                  playFuelPumpSound();
                  onComplete();
                }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-900/40 hover:scale-105 transition-all text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>OPEN YOUR NEW WEBSITE</span>
                <Sparkles className="w-5 h-5 text-amber-300" />
              </button>
            </div>

            <div className="text-xs text-neutral-500 font-mono">
              Hotline: +1 (857) 361-8923 &bull; 4139 Washington St
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
