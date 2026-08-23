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
        {/* BIG HIGH-CONVERSION TOLL-FREE GREEN CALL BUTTON */}
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          aria-label={`Call Toll Free Hotline ${companyInfo.phone}`}
          className="relative flex items-center justify-between gap-3 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 active:from-emerald-700 active:to-green-700 text-white py-3.5 px-4 rounded-2xl shadow-[0_6px_30px_rgba(16,185,129,0.6)] active:scale-98 transition-all w-full border border-emerald-300/40 overflow-hidden"
        >
          {/* Subtle shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>

          {/* Left Pulsing Call Badge */}
          <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner border border-white/30">
            <PhoneCall className="w-6 h-6 fill-current animate-bounce text-white" />
          </div>

          {/* Center Call Info */}
          <div className="flex-1 leading-tight text-left">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-[10px] uppercase font-black tracking-wider text-emerald-100">
                24/7 Toll-Free • 30-Min Arrival
              </span>
            </div>
            <span className="text-lg sm:text-xl font-black text-white tracking-tight drop-shadow-md block">
              Call {companyInfo.phone}
            </span>
          </div>

          {/* Right Action Badge */}
          <div className="shrink-0 bg-white text-emerald-950 px-3 py-1.5 rounded-xl font-black shadow-md text-center border border-white">
            <span className="block text-[9px] uppercase tracking-wider font-extrabold text-emerald-700">Toll-Free</span>
            <span className="block text-xs font-black text-emerald-950 uppercase tracking-wide flex items-center gap-0.5">
              CALL <PhoneCall className="w-3 h-3 text-emerald-700 fill-current inline" />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}


