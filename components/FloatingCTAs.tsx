"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function FloatingCTAs() {
  return (
    <>
      {/* Floating Call Button - Bottom Right (Desktop Only) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          aria-label="Call Emergency Helpline"
          className="group flex items-center gap-3 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-white/20"
        >
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white">
            <PhoneCall className="w-5 h-5 fill-current animate-bounce text-white" />
          </div>
          <div className="text-left leading-tight">
            <p className="text-[10px] uppercase font-extrabold text-amber-200 tracking-wider">Toll-Free 24/7 Hotline</p>
            <p className="text-sm font-black text-white">{companyInfo.phone}</p>
          </div>
        </a>
      </div>
    </>
  );
}

