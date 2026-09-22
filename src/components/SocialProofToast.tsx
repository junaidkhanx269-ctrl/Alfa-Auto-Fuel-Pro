import React, { useState, useEffect } from 'react';
import { CheckCircle, Bell, X, Phone, MapPin } from 'lucide-react';
import { playNotificationPing } from '../utils/audio';

interface LeadEvent {
  message: string;
  timeAgo: string;
  service: string;
}

const EVENTS: LeadEvent[] = [
  {
    message: 'Someone in Roslindale just booked inspection',
    timeAgo: '2 mins ago',
    service: 'MA State Inspection ($35)',
  },
  {
    message: 'Mike from Hyde Park just searched gas station near me',
    timeAgo: '3 mins ago',
    service: 'Fuel & Bay Booking',
  },
  {
    message: 'David on Washington St booked brake inspection',
    timeAgo: '5 mins ago',
    service: 'Brake Check & Service',
  },
  {
    message: 'Commercial fleet van booked diesel fill & safety check',
    timeAgo: '7 mins ago',
    service: 'Fleet Diesel Account',
  },
  {
    message: 'Sarah from West Roxbury booked oil change',
    timeAgo: '9 mins ago',
    service: 'Full Synthetic Oil Change',
  },
];

export const SocialProofToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % EVENTS.length);
        setIsVisible(true);
      }, 500);
    }, 5000); // changes every 5 seconds as requested

    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const current = EVENTS[currentIndex];

  return (
    <div
      id="social-proof-popup"
      aria-live="polite"
      className={`fixed bottom-5 left-4 z-40 max-w-xs sm:max-w-sm transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
      }`}
    >
      <div className="p-3.5 rounded-2xl bg-neutral-900/95 border-2 border-amber-500/80 shadow-2xl backdrop-blur-md flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5">
          <CheckCircle className="w-4 h-4 text-emerald-400 animate-pulse" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
              LIVE ROSLINDALE ACTIVITY
            </span>
            <span className="text-[10px] text-neutral-500 font-mono">{current.timeAgo}</span>
          </div>

          <p className="text-xs font-bold text-neutral-100 truncate mt-0.5">
            {current.message}
          </p>

          <div className="flex items-center justify-between pt-1 text-[11px] text-neutral-400">
            <span className="truncate text-red-400 font-mono">{current.service}</span>
            <a
              href="tel:+18573618923"
              className="text-amber-400 font-bold hover:underline shrink-0 ml-2"
            >
              (857) 361-8923
            </a>
          </div>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-neutral-500 hover:text-white p-1"
          aria-label="Close social proof notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
