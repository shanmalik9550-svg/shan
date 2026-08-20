"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

interface MobileStickyBarProps {
  brandName?: string;
  applianceName?: string;
}

export default function MobileStickyBar({ brandName, applianceName }: MobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-lg px-3 py-2.5 rounded-t-3xl border-t-2 border-orange-500/60 shadow-[0_-10px_35px_rgba(0,0,0,0.6)]">
      <div className="w-full max-w-md mx-auto">
        {/* BIG HIGH-CONVERSION TOLL-FREE CALL BUTTON */}
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          aria-label={`Call Toll Free Hotline ${companyInfo.phone}`}
          className="relative flex items-center justify-between gap-3 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 hover:from-orange-700 hover:to-amber-600 text-white py-3.5 px-4 rounded-2xl shadow-[0_4px_25px_rgba(234,88,12,0.55)] active:scale-98 transition-all w-full border border-amber-300/40"
        >
          {/* Left Pulsing Call Badge */}
          <div className="w-11 h-11 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center text-white shrink-0 shadow-inner">
            <PhoneCall className="w-6 h-6 fill-current animate-bounce text-white" />
          </div>

          {/* Center Call Info */}
          <div className="flex-1 leading-tight text-left">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-[10px] uppercase font-black tracking-wider text-amber-100">
                24/7 Toll-Free • 30-Min Arrival
              </span>
            </div>
            <span className="text-lg sm:text-xl font-black text-white tracking-tight drop-shadow-sm block">
              Call {companyInfo.phone}
            </span>
          </div>

          {/* Right Action Badge */}
          <div className="shrink-0 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/30 text-center">
            <span className="block text-[9px] uppercase font-extrabold text-amber-100">Tap To</span>
            <span className="block text-xs font-black text-white uppercase tracking-wider">Call</span>
          </div>
        </a>
      </div>
    </div>
  );
}


