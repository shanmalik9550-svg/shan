"use client";

import React from "react";
import Link from "next/link";
import { brandsData } from "@/data/brands";
import { Wrench, ArrowRight, ShieldCheck } from "lucide-react";

export default function BrandGrid() {
  const brandList = Object.values(brandsData);

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-blue-900 text-blue-300 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-blue-700/50">
            Multi-Brand Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
            We Repair All Major Kitchen Appliance Brands
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Click your appliance brand below for brand-specific repair solutions, model issues, and doorstep technician dispatch.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brandList.map((brand) => (
            <Link
              key={brand.slug}
              href={`/${brand.slug}`}
              className="bg-slate-800/80 hover:bg-gradient-to-br hover:from-blue-900 hover:to-slate-800 border border-slate-700/60 rounded-2xl p-4 flex flex-col justify-between hover:border-orange-500/50 transition-all duration-200 group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {brand.logoUrl ? (
                    <div className="w-24 h-9 rounded-lg bg-white p-1 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                      <img
                        src={brand.logoUrl}
                        alt={`${brand.name} Logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-slate-700 text-orange-400 flex items-center justify-center font-black text-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      {brand.name.charAt(0)}
                    </div>
                  )}
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                    30-Min Visit
                  </span>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-orange-400 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-[11px] text-slate-400 font-medium line-clamp-1 mt-0.5">
                  Hob, Chimney & Oven Repair
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs text-slate-300 font-bold group-hover:text-white">
                <span>View {brand.name} Page</span>
                <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
