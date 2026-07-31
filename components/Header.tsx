"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Wrench, ShieldCheck, ChevronDown, Clock, MapPin, PhoneCall } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import { brandsData } from "@/data/brands";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const brandList = Object.values(brandsData);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-slate-100">
      {/* Top Banner Ticker */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block mr-1"></span>
              Doorstep Technicians Active Now
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              Arrival in 30-45 Mins
            </span>
            <span className="hidden lg:flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              90-Day Written Warranty
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-300 font-semibold hidden sm:inline">24/7 Toll-Free Hotline:</span>
            <a 
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center gap-1.5 font-black text-amber-400 hover:text-amber-300 text-sm tracking-wide transition-colors bg-orange-950/80 px-2.5 py-0.5 rounded-full border border-orange-500/40"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              <span>{companyInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo / Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-slate-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Wrench className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">Customer Service</span>
              <span className="bg-orange-500 text-white text-[10px] uppercase font-black px-1.5 py-0.5 rounded tracking-wider">Pro</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Independent Doorstep Appliance Service</p>
          </div>
        </Link>

        {/* Brand Selector Dropdown & Quick Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-blue-700 transition-colors">
            Home
          </Link>
          
          <Link href="/#services" className="hover:text-blue-700 transition-colors">
            Services
          </Link>

          {/* Brands Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-blue-700 transition-colors py-2 focus:outline-none"
            >
              <span>Repair Brands (15)</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div 
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 grid grid-cols-2 gap-1 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                {brandList.map((brand) => (
                  <Link
                    key={brand.slug}
                    href={`/${brand.slug}`}
                    onClick={() => setDropdownOpen(false)}
                    className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{brand.name}</span>
                    <span className="text-[10px] text-slate-400">Repair</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#why-us" className="hover:text-blue-700 transition-colors">
            Why Choose Us
          </Link>

          <Link href="/#faqs" className="hover:text-blue-700 transition-colors">
            FAQs
          </Link>
        </div>

        {/* Desktop Quick Action Buttons - Extra Call Prominence */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent("Hi, I need urgent doorstep repair service for my kitchen appliance. Please dispatch a technician.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          {/* High Conversion Call Button */}
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-black text-sm px-4 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4 fill-current animate-bounce" />
            <div className="text-left leading-tight">
              <span className="text-[10px] block uppercase font-bold text-amber-200">Toll-Free Call</span>
              <span>{companyInfo.phone}</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
