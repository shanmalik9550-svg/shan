"use client";

import React from "react";
import { Phone, MessageSquare, PhoneCall } from "lucide-react";
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
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-md p-2 rounded-t-2xl shadow-[0_-8px_30px_rgba(0,0,0,0.4)] border-t border-slate-700/60">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* LEFT BUTTON: CALL TOLL FREE (ORANGE - PULSE ANIMATED) */}
        <a
          href={`tel:${companyInfo.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-black text-xs sm:text-sm py-3.5 px-2 rounded-xl shadow-xl active:scale-95 transition-all text-center tracking-tight"
        >
          <PhoneCall className="w-4 h-4 fill-current animate-bounce flex-shrink-0" />
          <div className="leading-tight">
            <span className="block text-[9px] uppercase font-extrabold text-amber-200">Toll-Free Call</span>
            <span className="text-xs font-black">{companyInfo.phone}</span>
          </div>
        </a>

        {/* RIGHT BUTTON: WHATSAPP (GREEN) */}
        <a
          href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-black text-xs sm:text-sm py-3.5 px-2 rounded-xl shadow-xl active:scale-95 transition-all text-center tracking-tight"
        >
          <MessageSquare className="w-4 h-4 fill-current flex-shrink-0" />
          <div className="leading-tight">
            <span className="block text-[9px] uppercase font-extrabold text-emerald-200">WhatsApp Chat</span>
            <span className="text-xs font-black">Click to Chat</span>
          </div>
        </a>
      </div>
    </div>
  );
}
