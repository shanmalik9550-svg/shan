"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Mail, MapPin, Wrench, ShieldCheck, Clock } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import { brandsData } from "@/data/brands";
import LegalDisclaimer from "./LegalDisclaimer";

export default function Footer() {
  const brandList = Object.values(brandsData);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand Info & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold shadow">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight">Kitchen Repair Service</span>
                <p className="text-[11px] text-slate-400">Doorstep Appliance Repair Experts</p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Premier doorstep repair and maintenance services for kitchen chimneys, gas hobs, stoves, built-in ovens, and cooking ranges across all major metropolitan cities.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Helpline: {companyInfo.phone}</span>
              </a>

              <a
                href={`https://wa.me/${companyInfo.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {companyInfo.whatsapp}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{companyInfo.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Brand Repair Pages (1-8) */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3 border-b border-slate-800 pb-2">
              Brand Repair Pages
            </h4>
            <ul className="space-y-1.5 text-xs">
              {brandList.slice(0, 8).map((b) => (
                <li key={b.slug}>
                  <Link href={`/${b.slug}`} className="hover:text-orange-400 transition-colors">
                    {b.name} Appliance Repair
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Brand Repair Pages (9-15) */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3 border-b border-slate-800 pb-2">
              More Brand Pages
            </h4>
            <ul className="space-y-1.5 text-xs">
              {brandList.slice(8).map((b) => (
                <li key={b.slug}>
                  <Link href={`/${b.slug}`} className="hover:text-orange-400 transition-colors">
                    {b.name} Appliance Repair
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Service Cities */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3 border-b border-slate-800 pb-2">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {companyInfo.serviceAreas.map((city) => (
                <li key={city} className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-orange-400" />
                  <span>{city} & Suburbs</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Compliance Banner */}
      <LegalDisclaimer />

      {/* Copyright Footer Bar */}
      <div className="bg-slate-950 text-slate-500 text-[11px] py-4 px-4 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.</p>
          <p>Built for Google Ads High-Conversion Performance • Fast Core Web Vitals</p>
        </div>
      </div>
    </footer>
  );
}
