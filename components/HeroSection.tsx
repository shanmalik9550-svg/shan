"use client";

import React from "react";
import Link from "next/link";
import { Phone, ShieldCheck, Clock, CheckCircle2, Star, Wrench, Sparkles, MapPin, PhoneCall } from "lucide-react";
import LeadForm from "./LeadForm";
import { companyInfo } from "@/data/companyInfo";

interface HeroSectionProps {
  h1Title?: string;
  heroHeadline?: string;
  heroSubheadline?: string;
  brandName?: string;
  brandLogo?: string;
  ctaCopy?: string;
}

export default function HeroSection({
  h1Title = "Professional Kitchen Appliance Repair & Doorstep Service",
  heroHeadline = "Same-Day Doorstep Repair for Kitchen Hobs, Gas Stoves & Cooking Ranges",
  heroSubheadline = "Certified Technicians for Kitchen Hobs, Gas Stoves & Cooking Ranges. Arrival in 30-45 minutes with 1-Year Written Warranty.",
  brandName,
  brandLogo,
  ctaCopy = "Book Service Today"
}: HeroSectionProps) {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-800">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headlines, Trust Bullets, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>24/7 Toll-Free Hotline • Dispatching Technicians Now</span>
            </div>

            {/* Main H1 Title & Subheadline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {heroHeadline}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                {heroSubheadline}
              </p>
            </div>

            {/* Core Trust Highlights Bullets */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-100">Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-100">Doorstep Repair</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-100">Experienced Technicians</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-100">1-Year Warranty</span>
              </div>
            </div>

            {/* Prominent Direct CTA - CALL ONLY */}
            <div className="pt-2">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-black text-base py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-6 h-6 fill-current animate-bounce flex-shrink-0" />
                <div className="text-left leading-tight">
                  <span className="text-[10px] block uppercase font-black text-amber-200 tracking-wider">Toll-Free Call Now</span>
                  <span className="text-lg sm:text-xl font-black">{companyInfo.phone}</span>
                </div>
              </a>
            </div>

            {/* Social Trust Stats */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-800 text-slate-400 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-slate-200">{companyInfo.stats.averageRating} Rating</span>
              </div>

              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="font-bold text-slate-200">{companyInfo.stats.happyCustomers} Satisfied Clients</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-slate-200">30-Min Rapid Arrival</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Lead Form */}
          <div className="lg:col-span-5">
            <LeadForm
              defaultBrand={brandName}
              title={brandName ? `Book ${brandName} Repair` : "Book Doorstep Service Today"}
              buttonText={ctaCopy}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

