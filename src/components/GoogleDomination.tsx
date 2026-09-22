import React, { useState, useEffect } from 'react';
import { Search, Star, MapPin, Phone, CheckCircle, ExternalLink, Calendar, Navigation, Globe } from 'lucide-react';

export const GoogleDomination: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const targetQuery = 'inspection near me';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= targetQuery.length) {
        setSearchQuery(targetQuery.slice(0, index));
        index++;
      } else {
        // pause then loop
        setTimeout(() => {
          index = 0;
        }, 3000);
      }
    }, 130);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="google-rank" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0c12] border-t border-neutral-800 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>GOOGLE SEARCH &amp; MAPS SUPREMACY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            We Put You <span className="text-blue-400">#1</span> On <span className="gold-gradient-text">Google</span>
          </h2>

          <p className="text-base text-neutral-300">
            When someone in Roslindale, Hyde Park, or West Roxbury searches for car inspection, Alfa Auto Fuel appears at the very top of Google Maps with 5 stars and 1-tap calling.
          </p>
        </div>

        {/* Realistic Google Search Simulation Interface */}
        <div className="bg-white text-neutral-900 rounded-3xl p-4 sm:p-8 shadow-2xl border-4 border-neutral-700/60 max-w-4xl mx-auto">
          {/* Top Google Search Bar */}
          <div className="flex items-center gap-3 bg-neutral-100 rounded-full px-5 py-3 border border-neutral-300 shadow-sm mb-6">
            <Search className="w-5 h-5 text-neutral-500 shrink-0" />
            <div className="font-mono text-sm sm:text-base text-neutral-800 flex-1 font-medium">
              <span>{searchQuery}</span>
              <span className="inline-block w-0.5 h-4 bg-blue-600 ml-0.5 animate-pulse" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 hidden sm:flex">
              <span className="px-2 py-0.5 rounded bg-neutral-200">Roslindale, MA</span>
            </div>
          </div>

          {/* Results Badge */}
          <div className="text-xs text-neutral-600 mb-4 px-2 font-mono flex items-center justify-between">
            <span>About 14,200 results (0.32 seconds) &bull; Top Local Recommendation</span>
            <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              VERIFIED GOOGLE BUSINESS PROFILE
            </span>
          </div>

          {/* Google #1 Local 3-Pack Winner Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-neutral-50 border-2 border-blue-500 shadow-lg relative overflow-hidden space-y-4">
            {/* Top Rank Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-bold text-xs font-mono tracking-wide flex items-center gap-1">
                  <span>#1 RESULT</span>
                </span>
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Licensed State Inspection Bay</span>
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                0.2 mi &bull; Washington St
              </span>
            </div>

            {/* Business Details */}
            <div className="space-y-2 text-left">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight font-display">
                  Alfa Auto Fuel &amp; State Inspection
                </h3>
                <span className="text-xs font-bold text-emerald-700 font-mono bg-emerald-50 px-2 py-1 rounded border border-emerald-300">
                  Open Now &bull; Closes 7:00 PM
                </span>
              </div>

              {/* Stars & Reviews */}
              <div className="flex items-center gap-2 text-sm">
                <span className="font-bold text-neutral-900">5.0</span>
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-neutral-500 text-xs">(184 Google reviews) &bull; Auto repair shop</span>
              </div>

              {/* Location & Hot Phone */}
              <div className="space-y-1 text-sm text-neutral-700 pt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="font-semibold">4139 Washington St, Roslindale, MA 02131</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-mono font-bold text-neutral-900">+1 (857) 361-8923</span>
                  <span className="text-xs text-neutral-500">(Your Direct Business Line)</span>
                </div>
              </div>
            </div>

            {/* Google Interactive Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                id="google-call-action-btn"
                href="tel:+18573618923"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-sm transition-transform hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call (857) 361-8923</span>
              </a>

              <a
                href="#booking"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-sm transition-transform hover:scale-105"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book State Inspection ($35)</span>
              </a>

              <a
                href="https://maps.google.com/?q=4139+Washington+St,+Roslindale,+MA+02131"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-semibold rounded-lg text-xs flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Competitor #2 & #3 pushed down */}
          <div className="mt-4 space-y-2 opacity-45 text-left text-xs text-neutral-600 px-3">
            <div className="flex justify-between border-t border-neutral-200 pt-2">
              <span>#2 Parkway Auto (1.2 mi) &bull; 4.1 Stars</span>
              <span className="text-neutral-400">Pushed Down Below Alfa</span>
            </div>
            <div className="flex justify-between border-t border-neutral-200 pt-1">
              <span>#3 Hyde Park Car Care (0.8 mi) &bull; 3.9 Stars</span>
              <span className="text-neutral-400">Pushed Down Below Alfa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
