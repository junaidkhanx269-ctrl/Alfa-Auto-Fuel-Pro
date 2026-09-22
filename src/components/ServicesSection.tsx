import React from 'react';
import { Fuel, Wrench, ShieldCheck, Disc, Cpu, CircleDot, ArrowRight, Phone } from 'lucide-react';

const SERVICES = [
  {
    title: 'Massachusetts State Inspection',
    price: '$35.00',
    subtitle: 'Statutory Mass Vehicle Check',
    desc: 'Official licensed inspection bay. Fast in-and-out turnaround for passenger vehicles, SUVs, commercial trucks, and rideshare.',
    icon: ShieldCheck,
    highlight: 'MOST POPULAR',
  },
  {
    title: 'Full Synthetic Oil & Filter Service',
    price: 'From $79.00',
    subtitle: 'Premium European & Domestic Formulations',
    desc: 'Includes up to 5 qts premium synthetic oil, OEM oil filter, fluid top-offs, and complete 21-point safety inspection.',
    icon: Wrench,
    highlight: null,
  },
  {
    title: 'Precision Brake Pads & Rotors',
    price: 'From $149.00',
    subtitle: 'Ceramic Pads & Machined Rotors',
    desc: 'Eliminate squealing, grinding, and vibration with heavy-duty Boston winter-tested braking hardware.',
    icon: Disc,
    highlight: null,
  },
  {
    title: 'OBD-II Computer Diagnostics',
    price: '$99.00',
    subtitle: 'Check Engine & ABS Troubleshooting',
    desc: 'Advanced dealer-grade diagnostic scanners to identify trouble codes, catalytic issues, and emissions readiness.',
    icon: Cpu,
    highlight: null,
  },
  {
    title: 'High-Flow Fuel & Diesel Dispensers',
    price: 'Lowest Street Rate',
    subtitle: 'Regular 87, Plus 89, Super 93 & Clean Diesel',
    desc: 'Modern filtered pumps, fast fueling lanes, and commercial fleet account billing right on Washington St.',
    icon: Fuel,
    highlight: null,
  },
  {
    title: 'Tire Mount, Balance & Flat Repair',
    price: 'From $25.00',
    subtitle: 'Laser Balancing & Bead Sealing',
    desc: 'Seasonal tire swaps, pothole repair, rim leak fixes, and computer wheel balancing to protect your suspension.',
    icon: CircleDot,
    highlight: null,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#07080d] border-t border-neutral-800">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-500/40 text-red-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>4139 WASHINGTON ST GARAGE SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Complete Auto Care &amp; <span className="gold-gradient-text">State Inspection</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300">
            Every service is backed by honest pricing and 40+ years of Roslindale neighborhood trust. Book online or call your hotline directly.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-neutral-900/80 border transition-all hover:scale-[1.02] flex flex-col justify-between relative ${
                  srv.highlight
                    ? 'border-2 border-amber-500/90 shadow-xl shadow-amber-500/10'
                    : 'border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {srv.highlight && (
                  <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-amber-400 text-neutral-950 font-mono text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {srv.highlight}
                  </span>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-red-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="font-display font-black text-xl text-amber-400">{srv.price}</div>
                      <div className="text-[11px] text-neutral-400 font-mono">{srv.subtitle}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{srv.title}</h3>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{srv.desc}</p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <a
                    href="#booking"
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>Book this service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:+18573618923"
                    className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-red-400" />
                    <span>Call (857) 361-8923</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
