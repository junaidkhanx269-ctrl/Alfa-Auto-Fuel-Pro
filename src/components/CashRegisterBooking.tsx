import React, { useState } from 'react';
import { DollarSign, Printer, CheckCircle, Car, User, Phone, Calendar, Clock, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCashRegisterSound } from '../utils/audio';

interface BookingTicket {
  id: string;
  name: string;
  phone: string;
  car: string;
  service: string;
  price: number;
  timeSlot: string;
  timestamp: string;
}

export const CashRegisterBooking: React.FC = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [carInfo, setCarInfo] = useState('');
  const [service, setService] = useState('MA State Inspection ($35)');
  const [timeSlot, setTimeSlot] = useState('Today (Next Available Bay)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [latestTicket, setLatestTicket] = useState<BookingTicket | null>(null);
  const [bookingCount, setBookingCount] = useState<number>(12); // "already sent 12 bookings today"

  const getServicePrice = (srv: string) => {
    if (srv.includes('$35')) return 35;
    if (srv.includes('$79')) return 79;
    if (srv.includes('$149')) return 149;
    if (srv.includes('$99')) return 99;
    return 35;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      return;
    }

    setIsSubmitting(true);
    playCashRegisterSound();

    // Trigger dollar / gold confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#eab308', '#dc2626', '#22c55e', '#ffffff'],
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      const newTicket: BookingTicket = {
        id: `ALFA-${Math.floor(1000 + Math.random() * 9000)}`,
        name: customerName,
        phone: customerPhone,
        car: carInfo || '2020 Honda CR-V (Roslindale Local)',
        service: service,
        price: getServicePrice(service),
        timeSlot: timeSlot,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setLatestTicket(newTicket);
      setBookingCount((prev) => prev + 1);
      setIsSubmitting(false);

      // Reset form
      setCustomerName('');
      setCustomerPhone('');
      setCarInfo('');
    }, 450);
  };

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0c12] relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5" />
            <span>INSTANT CASH FLOW GENERATOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Your New Online <span className="gold-gradient-text">Cash Register</span>
          </h2>

          <p className="text-base text-neutral-300">
            Customers lock in their bay time in seconds. No waiting on hold, no losing people while you&apos;re under a hoist. Cash in hand when they pull onto 4139 Washington St.
          </p>
        </div>

        {/* Cash Register Container */}
        <div className="bg-neutral-950 border-4 border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          {/* Top Vintage Register Display Header */}
          <div className="bg-neutral-900 border-2 border-neutral-700/80 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-emerald-500 animate-ping" />
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                  REGISTER TERMINAL #1 &bull; 4139 WASHINGTON ST
                </div>
                <div className="text-xs text-neutral-300 font-mono">
                  State Station Lic. #4139 &bull; Real-Time Dispatch System
                </div>
              </div>
            </div>

            {/* Glowing Digital Price Readout Screen */}
            <div className="bg-black border-2 border-amber-500/70 rounded-xl px-5 py-2.5 text-center shadow-lg shadow-amber-500/10">
              <div className="text-[10px] font-mono text-amber-500 tracking-wider uppercase font-bold">
                PAYABLE AT COUNTER
              </div>
              <div className="font-display font-black text-2xl sm:text-3xl text-amber-400 tracking-wider">
                ${getServicePrice(service)}.00
              </div>
            </div>
          </div>

          {/* Form and Live Receipt Preview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* The Booking Form */}
            <form onSubmit={handleBookingSubmit} className="lg:col-span-7 space-y-5">
              {/* Form Label: Customer Name */}
              <div className="space-y-1.5">
                <label htmlFor="customer-name-input" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-red-400" />
                  <span>Customer Name</span>
                </label>
                <input
                  id="customer-name-input"
                  type="text"
                  required
                  placeholder="e.g. Tony Lombardi (Roslindale)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-medium"
                />
              </div>

              {/* Form Label: Phone (So you can call back on (857) 361-8923) */}
              <div className="space-y-1.5">
                <label htmlFor="customer-phone-input" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-red-400" />
                  <span>Phone (So you can call back on (857) 361-8923)</span>
                </label>
                <input
                  id="customer-phone-input"
                  type="tel"
                  required
                  placeholder="e.g. (617) 555-0199"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-medium"
                />
                <div className="text-[11px] text-amber-400/90 font-mono">
                  Incoming lead alerts route directly to your business phone +1 (857) 361-8923.
                </div>
              </div>

              {/* Form Label: Car */}
              <div className="space-y-1.5">
                <label htmlFor="customer-car-input" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-red-400" />
                  <span>Car (Year / Make / Model)</span>
                </label>
                <input
                  id="customer-car-input"
                  type="text"
                  placeholder="e.g. 2018 Toyota RAV4 or Ford F-150"
                  value={carInfo}
                  onChange={(e) => setCarInfo(e.target.value)}
                  className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-medium"
                />
              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label htmlFor="service-select" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono">
                  Select Service
                </label>
                <select
                  id="service-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-amber-400 text-sm font-medium"
                >
                  <option value="MA State Inspection ($35)">MA State Inspection Sticker ($35.00)</option>
                  <option value="Full Synthetic Oil Change ($79)">Full Synthetic Oil Change + Filter ($79.00)</option>
                  <option value="Brake Pad & Rotor Replacement ($149)">Brake Pads &amp; Rotor Service ($149.00)</option>
                  <option value="Check Engine Diagnostics ($99)">Check Engine Light Computer Scan ($99.00)</option>
                </select>
              </div>

              {/* Bay Time */}
              <div className="space-y-1.5">
                <label htmlFor="time-select" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Preferred Bay Time</span>
                </label>
                <select
                  id="time-select"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-amber-400 text-sm font-medium"
                >
                  <option value="Today (Next Available Bay)">Today &bull; Next Available Bay (Priority)</option>
                  <option value="Tomorrow Morning (8:00 AM - 11:00 AM)">Tomorrow Morning (8:00 AM - 11:00 AM)</option>
                  <option value="Tomorrow Afternoon (1:00 PM - 4:00 PM)">Tomorrow Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Saturday Morning (8:30 AM - 12:00 PM)">Saturday Morning (8:30 AM - 12:00 PM)</option>
                </select>
              </div>

              {/* Requirement 5 Button: BOOK & PAY AT SHOP - $35 with $$$ animation */}
              <div className="pt-2">
                <button
                  id="booking-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-500 text-neutral-950 font-black font-display text-lg tracking-wider uppercase rounded-2xl shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer border-2 border-amber-300 relative overflow-hidden group"
                >
                  {/* Floating $$$ icons animation */}
                  <span className="inline-block animate-bounce text-xl">💵</span>
                  <span>BOOK &amp; PAY AT SHOP — ${getServicePrice(service)}</span>
                  <span className="inline-block animate-bounce delay-150 text-xl">💵</span>
                  <span className="inline-block animate-bounce delay-300 text-xl">💵</span>
                </button>
              </div>

              {/* Requirement 5: "This form already sent 12 bookings today (demo)" */}
              <div className="p-3 bg-neutral-900/90 rounded-xl border border-neutral-800 text-center flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span className="text-xs font-mono font-bold text-neutral-300">
                  ⚡ This form already sent <span className="text-amber-400 font-black text-sm">{bookingCount} bookings</span> today (demo)
                </span>
              </div>
            </form>

            {/* Right Column: Printed Register Ticket / SMS Dispatch Alert */}
            <div className="lg:col-span-5 space-y-4">
              {/* Cash Register Receipt Tape Mockup */}
              <div className="bg-[#fcfbf9] text-neutral-900 rounded-xl p-5 shadow-xl font-mono text-xs border-dashed border-2 border-neutral-400 space-y-3 relative">
                {/* Sawtooth jagged receipt edge simulation */}
                <div className="text-center border-b border-neutral-300 pb-3">
                  <div className="font-display font-black text-base text-neutral-950">ALFA AUTO FUEL</div>
                  <div className="text-[11px] text-neutral-600">4139 Washington St &bull; Roslindale, MA 02131</div>
                  <div className="text-[11px] font-bold text-red-600 mt-0.5">HOTLINE: (857) 361-8923</div>
                  <div className="text-[10px] text-neutral-500">MASS. LICENSED INSPECTION STATION</div>
                </div>

                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">DATE:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">STATUS:</span>
                    <span className="text-emerald-700 font-bold">CONFIRMED DISPATCH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">TICKET #:</span>
                    <span>{latestTicket ? latestTicket.id : 'ALFA-7842'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">CUSTOMER:</span>
                    <span className="font-bold">{latestTicket ? latestTicket.name : 'Sample Booking'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">CAR:</span>
                    <span>{latestTicket ? latestTicket.car : '2021 Toyota Camry'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">BAY TIME:</span>
                    <span className="font-bold text-red-600">{latestTicket ? latestTicket.timeSlot : 'Today 2:00 PM'}</span>
                  </div>
                </div>

                <div className="border-t border-neutral-300 pt-2 flex justify-between font-bold text-sm">
                  <span>TOTAL DUE AT SHOP:</span>
                  <span className="text-emerald-700">${latestTicket ? latestTicket.price : 35}.00</span>
                </div>

                <div className="border-t border-dashed border-neutral-400 pt-2 text-[10px] text-center text-neutral-500">
                  THANK YOU FOR CHOOSING ALFA AUTO FUEL ROSLINDALE!
                </div>
              </div>

              {/* SMS Dispatch Simulation to Owner */}
              <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-4 space-y-2 shadow-md">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>INSTANT SMS NOTIFICATION TO YOUR PHONE</span>
                </div>
                <div className="bg-black/70 p-3 rounded-lg border border-neutral-800 text-[11px] font-mono text-neutral-300 space-y-1">
                  <div className="text-neutral-500">To: +1 (857) 361-8923 (Your Cell)</div>
                  <div className="text-emerald-400 font-bold">
                    &ldquo;New $35 Inspection Booking: {latestTicket ? latestTicket.name : 'Marcus T.'} ({latestTicket ? latestTicket.car : '2019 Jeep Cherokee'}). Arriving today. Call to confirm.&rdquo;
                  </div>
                </div>
                <div className="text-[10px] text-neutral-400 italic">
                  * You receive this text immediately every time a customer books. Never miss a single dollar.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
