"use client";

import React from "react";
import { MessageSquare, Phone, PhoneCall } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function FloatingCTAs() {
  return (
    <>
      {/* Floating WhatsApp Button - Bottom Right (Desktop & Mobile Tablet) */}
      <div className="fixed bottom-20 md:bottom-6 right-4 z-40">
        <a
          href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent("Hi, I need doorstep kitchen appliance repair service. Please assist me.")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 md:px-5 md:py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-white"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          <span className="hidden md:inline text-xs font-black tracking-wide">
            Chat on WhatsApp ({companyInfo.whatsapp})
          </span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
          </span>
        </a>
      </div>

      {/* Floating Call Button - Bottom Left (Desktop Only) */}
      <div className="hidden md:block fixed bottom-6 left-6 z-40">
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          aria-label="Call Emergency Helpline"
          className="group flex items-center gap-3 bg-slate-900 hover:bg-orange-600 text-white px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-200 border border-slate-700"
        >
          <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white">
            <PhoneCall className="w-5 h-5 fill-current animate-bounce text-white" />
          </div>
          <div className="text-left leading-tight">
            <p className="text-[10px] uppercase font-extrabold text-orange-400 tracking-wider">Toll-Free 24/7 Hotline</p>
            <p className="text-sm font-black text-white">{companyInfo.phone}</p>
          </div>
        </a>
      </div>
    </>
  );
}
