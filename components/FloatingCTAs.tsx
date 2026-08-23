"use client";

import React from "react";
import { PhoneCall, ShieldCheck } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function FloatingCTAs() {
  return (
    <>
      {/* Floating Call Button - Bottom Right (Desktop Only) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          aria-label="Call Emergency Helpline"
          className="group relative flex items-center gap-3.5 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:to-green-700 text-white px-5 py-3.5 rounded-full shadow-[0_10px_35px_rgba(16,185,129,0.55)] hover:scale-105 transition-all duration-300 border-2 border-emerald-300/40 overflow-hidden"
        >
          {/* Pulsing Backglow Ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 animate-pulse group-hover:opacity-50 transition-opacity"></span>

          <div className="relative w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner border border-white/30">
            <PhoneCall className="w-5 h-5 fill-current animate-bounce text-white" />
          </div>

          <div className="relative text-left leading-tight">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <p className="text-[10px] uppercase font-black text-emerald-100 tracking-wider">
                24/7 Official Toll-Free
              </p>
            </div>
            <p className="text-base font-black text-white tracking-tight drop-shadow-sm">
              {companyInfo.phone}
            </p>
          </div>

          <div className="relative ml-1 pl-3 border-l border-white/20 hidden lg:block">
            <span className="bg-white text-emerald-800 text-[10px] uppercase font-black px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              Tap To Call
            </span>
          </div>
        </a>
      </div>
    </>
  );
}


