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
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-md p-2 border-t border-slate-800 shadow-[0_-8px_25px_rgba(0,0,0,0.5)]">
      <div className="w-full max-w-md mx-auto">
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          aria-label={`Call Hotline ${companyInfo.phone}`}
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 active:from-emerald-700 active:to-green-700 text-white py-3.5 px-4 rounded-xl shadow-lg transition-all border border-emerald-400/40"
        >
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner border border-white/30">
            <PhoneCall className="w-5 h-5 fill-current animate-bounce text-white" />
          </div>
          <span className="text-[28px] sm:text-[32px] font-black text-amber-300 tracking-wider drop-shadow-md">
            {companyInfo.phone}
          </span>
        </a>
      </div>
    </div>
  );
}
