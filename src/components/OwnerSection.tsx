import React, { useState, useRef } from 'react';
import { Camera, ShieldCheck, Heart, Award, Phone, MapPin, Upload } from 'lucide-react';
import ownerPhotoDefault from '../assets/images/alfa_owner_pic_1790096085606.jpg';

export const OwnerSection: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string>(ownerPhotoDefault);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCustomPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoSrc(url);
    }
  };

  return (
    <section id="owner" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090b10] border-t border-neutral-800 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Owner Photo Column with Psychology Note */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative group">
              {/* Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-amber-500/80 shadow-2xl bg-neutral-900 aspect-square">
                <img
                  src={photoSrc}
                  alt="Alfa Auto Fuel shop owner portrait at 4139 Washington St"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Badge on Photo */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    MASTER TECHNICIAN &bull; SHOP FOUNDER
                  </div>
                  <div className="text-xl font-black font-display text-white">
                    Alfa Auto Fuel Family
                  </div>
                  <div className="text-xs text-neutral-300">
                    4139 Washington St, Roslindale MA
                  </div>
                </div>
              </div>

              {/* Requirement 6 Note: "Add your photo here - customers trust faces" */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-amber-950/70 via-neutral-900 to-amber-950/70 border-2 border-dashed border-amber-500/80 text-xs text-amber-200 space-y-2 shadow-lg">
                <div className="flex items-center gap-2 font-bold text-amber-300">
                  <Camera className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>NOTE FOR THE OWNER:</span>
                </div>
                <p className="leading-relaxed">
                  <strong>Add your photo here — customers trust faces.</strong> Drivers in Roslindale, West Roxbury, and Hyde Park don&apos;t want a faceless chain store. They want an honest local neighborhood mechanic they can look in the eye.
                </p>
                <div className="pt-1 flex items-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Click to Test Your Own Photo</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleCustomPhoto}
                    className="hidden"
                  />
                  {photoSrc !== ownerPhotoDefault && (
                    <button
                      onClick={() => setPhotoSrc(ownerPhotoDefault)}
                      className="text-[11px] text-neutral-400 underline hover:text-white"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Story & History Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-red-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>ROSLINDALE INSTITUTION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight leading-tight">
              Meet The Most Trusted Shop in Roslindale <span className="gold-gradient-text">Since 1981</span>
            </h2>

            <div className="space-y-4 text-neutral-300 text-base leading-relaxed">
              <p>
                When you pull into <strong className="text-white">4139 Washington Street</strong>, you aren&apos;t pulling into some giant corporate franchise that tries to upsell you $1,200 in phantom repairs.
              </p>
              <p>
                For over four decades, Alfa Auto Fuel has been the neighborhood&apos;s honest anchor. Generations of Roslindale families bring their cars here for straightforward state inspections, high-grade fuel, and mechanics who shoot from the hip.
              </p>
              <p className="text-amber-300 font-medium">
                Now, it&apos;s time your website matches your legendary reputation on the street.
              </p>
            </div>

            {/* Credibility Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-neutral-900/90 rounded-xl border border-neutral-800 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-neutral-200">Official Massachusetts State Inspection Station</span>
              </div>
              <div className="p-3 bg-neutral-900/90 rounded-xl border border-neutral-800 flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-red-500 shrink-0" />
                <span className="text-xs font-bold text-neutral-200">Locally Owned &amp; Operated Since 1981</span>
              </div>
              <div className="p-3 bg-neutral-900/90 rounded-xl border border-neutral-800 flex items-center gap-2.5">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-neutral-200">Honest Diagnostics — No Scam Upsells</span>
              </div>
              <div className="p-3 bg-neutral-900/90 rounded-xl border border-neutral-800 flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-xs font-bold text-neutral-200">4139 Washington St &bull; Prime Roslindale Location</span>
              </div>
            </div>

            {/* Direct Phone Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                id="owner-call-btn"
                href="tel:+18573618923"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-red-950 flex items-center justify-center gap-2 font-display cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Business Hotline: (857) 361-8923</span>
              </a>
              <span className="text-xs font-mono text-neutral-400">
                Old Number: (617) 327-6133
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
