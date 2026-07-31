"use client";

import React from "react";
import { ShieldAlert } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

interface LegalDisclaimerProps {
  brandName?: string;
}

export default function LegalDisclaimer({ brandName }: LegalDisclaimerProps) {
  return (
    <div className="bg-slate-950 text-slate-400 py-6 px-4 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1 text-[11px] leading-relaxed">
          <p className="font-bold text-slate-300">
            Legal Disclosure & Third-Party Trademark Notice:
          </p>
          <p>
            {companyInfo.name} is an independent, non-affiliated third-party doorstep kitchen appliance repair and maintenance service provider. We specialize in out-of-warranty repairs for multi-brand appliances including {brandName || "Kaff, Siemens, Hafele, Gilma, Glen, Elica, Kutchina, Faber, Bosch, Blowhot, Sunflame, Crompton, Cata, Asko, Miele"}, and others.
          </p>
          <p>
            We are <strong>NOT</strong> an official, authorized, or endorsed service center, dealership, or subsidiary of any of the trademark owner companies mentioned on this website. All brand names, logos, model designations, and trademarks belong solely to their respective trademark holders and are used strictly for identification and descriptive purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
