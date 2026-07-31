"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

interface MobileStickyBarProps {
  brandName?: string;
  applianceName?: string;
}

export default function MobileStickyBar({ brandName, applianceName }: MobileStickyBarProps) {
  const whatsappMsg = brandName 
    ? `Hi, I need urgent doorstep repair for my ${brandName} kitchen appliance. Please send a technician.`
    : `Hi, I need urgent doorstep kitchen appliance repair service. Please dispatch a technician.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/90 backdrop-blur-md p-2 rounded-t-2xl shadow-[0_-8px_30px_rgba(0,0,0,0.3)] border-t border-slate-700/50">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* LEFT BUTTON: CALL NOW (ORANGE) */}
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-black text-sm py-3.5 px-3 rounded-xl shadow-lg active:scale-95 transition-all text-center tracking-wide"
        >
          <Phone className="w-5 h-5 fill-current animate-bounce" />
          <span>Call Now</span>
        </a>

        {/* RIGHT BUTTON: WHATSAPP (GREEN) */}
        <a
          href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-black text-sm py-3.5 px-3 rounded-xl shadow-lg active:scale-95 transition-all text-center tracking-wide"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
