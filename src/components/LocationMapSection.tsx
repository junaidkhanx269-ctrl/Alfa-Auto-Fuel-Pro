import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Clock,
  Car,
  Phone,
  Compass,
  CornerDownRight,
  ShieldCheck,
  Layers,
  Sparkles,
  Milestone
} from 'lucide-react';

export const LocationMapSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<'forest_hills' | 'roslindale_sq' | 'west_roxbury'>('roslindale_sq');
  const [mapZoom, setMapZoom] = useState(16);

  const address = '4139 Washington St, Roslindale, MA 02131';
  const encodedAddress = encodeURIComponent('Alfa Auto Fuel, 4139 Washington St, Roslindale, MA 02131');
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
  const appleMapsUrl = `https://maps.apple.com/?daddr=${encodeURIComponent('4139 Washington St, Roslindale, MA 02131')}`;

  const copyAddress = () => {
    navigator.clipboard?.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const routePresets = [
    {
      id: 'roslindale_sq' as const,
      name: 'Roslindale Village / Square',
      eta: '2 min drive',
      distance: '0.6 miles',
      instructions: 'Head North straight down Washington St. Alfa is on your right before South St.'
    },
    {
      id: 'forest_hills' as const,
      name: 'Forest Hills MBTA Station',
      eta: '4 min drive',
      distance: '1.2 miles',
      instructions: 'South on Washington St past the Arboretum entrance. Look for the Alfa Auto Fuel canopy.'
    },
    {
      id: 'west_roxbury' as const,
      name: 'West Roxbury / Centre St',
      eta: '5 min drive',
      distance: '1.8 miles',
      instructions: 'East via Lagrange or Corey St onto Washington St. Quick direct turn-in.'
    }
  ];

  return (
    <section id="location-map" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-950/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-800 text-red-300 font-mono text-xs uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Prime Washington Street Corridors</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Find Us at <span className="text-red-500">4139 Washington St</span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Conveniently situated right on the busiest commuter arterial in Roslindale.
            Pull straight in from Washington St for zero-wait State Inspections and repairs.
          </p>
        </div>

        {/* The Main Map Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Styled Dark Mode Map Snippet (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden border-2 border-neutral-800/90 bg-neutral-900 shadow-2xl flex-1 flex flex-col group hover:border-red-600/60 transition-colors">
              
              {/* Map Bar Header */}
              <div className="bg-neutral-950/90 backdrop-blur-md px-5 py-3 border-b border-neutral-800 flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    <span>GPS: 42.2858° N, 71.1278° W</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/90 text-emerald-400 border border-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>BAYS OPEN</span>
                  </span>
                </div>
              </div>

              {/* Map Canvas / Dark Styled Embedded Iframe */}
              <div className="relative w-full h-[400px] sm:h-[460px] bg-neutral-950 overflow-hidden">
                {/* Styled Dark Tile Embed via invert filter to create true OLED Night Map */}
                <iframe
                  id="alfa-dark-google-map"
                  title="Alfa Auto Fuel Dark Mode Map - 4139 Washington St Roslindale"
                  src={`https://maps.google.com/maps?q=4139+Washington+St,+Roslindale,+MA+02131&t=&z=${mapZoom}&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0 filter invert-[92%] hue-rotate-180 contrast-[125%] brightness-[85%] saturate-[140%] pointer-events-auto"
                  loading="lazy"
                />

                {/* Tactical Radar HUD Overlay Grid */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_45%,rgba(7,8,12,0.8)_95%)]" />

                {/* Custom Shop Marker Overlay Card (Floating in Top-Right of Map) */}
                <div className="absolute top-4 left-4 z-20 pointer-events-auto max-w-[280px] sm:max-w-xs bg-neutral-950/90 backdrop-blur-md border border-neutral-700/80 rounded-2xl p-3.5 shadow-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-display font-black text-white text-xs shadow-md">
                        AF
                      </div>
                      <div>
                        <div className="font-display font-black text-sm text-white leading-none">
                          ALFA AUTO FUEL
                        </div>
                        <div className="text-[10px] text-amber-400 font-mono">
                          Official Inspection Station
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-neutral-300 font-medium">
                    4139 Washington St, Roslindale
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-neutral-800">
                    <span className="text-neutral-400">Bay 1 &amp; Bay 2:</span>
                    <span className="text-emerald-400 font-bold">Drive-Thru Ready</span>
                  </div>
                </div>

                {/* Animated Destination Target Indicator at Map Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-20 h-20 rounded-full border-2 border-red-500/40 animate-ping" />
                    <span className="absolute w-12 h-12 rounded-full border border-amber-400/60 animate-pulse" />
                    <div className="relative p-2.5 rounded-full bg-red-600 text-white shadow-xl shadow-red-950 border-2 border-amber-400">
                      <Car className="w-5 h-5 animate-bounce" />
                    </div>
                  </div>
                  <div className="mt-2 px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm border border-red-600/60 text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider shadow-lg">
                    4139 Washington St
                  </div>
                </div>

                {/* Zoom Controls Overlay */}
                <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-1.5 pointer-events-auto">
                  <button
                    id="map-zoom-in-btn"
                    onClick={() => setMapZoom((prev) => Math.min(prev + 1, 19))}
                    className="w-8 h-8 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 flex items-center justify-center text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer"
                    title="Zoom in"
                    aria-label="Zoom in on map"
                  >
                    +
                  </button>
                  <button
                    id="map-zoom-out-btn"
                    onClick={() => setMapZoom((prev) => Math.max(prev - 1, 13))}
                    className="w-8 h-8 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-white border border-neutral-700 flex items-center justify-center text-sm font-bold shadow-lg transition-transform active:scale-95 cursor-pointer"
                    title="Zoom out"
                    aria-label="Zoom out on map"
                  >
                    -
                  </button>
                </div>
              </div>

              {/* Bottom Quick-Action Foot Traffic Bar */}
              <div className="bg-neutral-950 p-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Smooth drive-through bays &bull; Free customer lot</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    id="copy-address-btn"
                    onClick={copyAddress}
                    className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    id="apple-maps-btn"
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white text-xs flex items-center justify-center gap-1 transition-colors"
                    title="Open in Apple Maps"
                  >
                    <span>Apple Maps</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Foot Traffic Conversion Card & Get Directions (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Directions CTA Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-black border-2 border-red-600/50 shadow-2xl relative overflow-hidden space-y-6">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-red-950 text-red-400 border border-red-800 text-xs font-mono font-bold uppercase tracking-wider">
                    DIRECT COMMUTER INGRESS
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">MA 02131</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                  Navigate Straight to Alfa Auto Fuel
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  Turn Google searches into immediate rubber on your driveway. Tap below to launch turn-by-turn navigation directly on your device.
                </p>
              </div>

              {/* The Core 'Get Directions' Button */}
              <div className="space-y-3">
                <a
                  id="primary-get-directions-btn"
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-lg uppercase tracking-wider font-display shadow-2xl shadow-red-950 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] border border-red-400/40 group cursor-pointer"
                >
                  <Navigation className="w-6 h-6 text-amber-300 group-hover:rotate-45 transition-transform" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>

                <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 font-mono text-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Real-time GPS routing &bull; Avoid Washington St backups</span>
                </div>
              </div>

              {/* Call Ahead Option */}
              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
                <div className="text-xs text-neutral-400">
                  Prefer to call before pulling in?
                </div>
                <a
                  id="map-call-shop-btn"
                  href="tel:+18573618923"
                  className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>(857) 361-8923</span>
                </a>
              </div>
            </div>

            {/* Roslindale Commuter Route Presets */}
            <div className="p-6 rounded-3xl bg-neutral-900/80 border border-neutral-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase font-mono tracking-wider text-amber-400 flex items-center gap-2">
                  <Milestone className="w-4 h-4 text-amber-400" />
                  <span>Nearby Approach Corridors</span>
                </h4>
                <span className="text-xs text-neutral-400">Select to see route</span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {routePresets.map((route) => {
                  const isActive = selectedRoute === route.id;
                  return (
                    <button
                      key={route.id}
                      id={`route-preset-${route.id}`}
                      onClick={() => setSelectedRoute(route.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-neutral-800/90 border-red-500 shadow-md shadow-red-950/40'
                          : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700 text-neutral-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className={`font-bold ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                          {route.name}
                        </span>
                        <div className="flex items-center gap-2 font-mono">
                          <span className="text-amber-400 font-bold">{route.eta}</span>
                          <span className="text-neutral-500">({route.distance})</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        {route.instructions}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Hours & Drive-In Tip */}
              <div className="p-3 rounded-xl bg-black/40 border border-neutral-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-neutral-300 font-medium">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Mon–Fri: 7:00 AM – 6:00 PM &bull; Sat: 8:00 AM – 4:00 PM</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Foot Traffic Strategy Note for Shop Owner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-red-950/30 border border-red-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-red-600/30 text-amber-400 shrink-0 hidden sm:block">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Why this map generates 15–20 more drive-in visits every single week:
              </div>
              <div className="text-xs text-neutral-400">
                Over 72% of Boston drivers looking for auto repair search from their phone inside their car. A 1-tap Google Maps button removes all friction.
              </div>
            </div>
          </div>

          <a
            id="map-call-to-activate-btn"
            href="tel:+18573618923"
            className="shrink-0 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-black text-xs uppercase font-mono transition-transform hover:scale-105"
          >
            Activate Live: (857) 361-8923
          </a>
        </div>

      </div>
    </section>
  );
};
