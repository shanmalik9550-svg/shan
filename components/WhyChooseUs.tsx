"use client";

import React from "react";
import { ShieldCheck, Clock, Home, BadgePercent, Wrench, ThumbsUp, Sparkles, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Clock,
      title: "30-45 Min Rapid Doorstep Response",
      desc: "Local senior technicians deployed across all city zones for immediate same-day arrival."
    },
    {
      icon: ShieldCheck,
      title: "1-Year Service & Spare Warranty",
      desc: "Complete peace of mind with a written 1-year warranty on all repairs and replaced components."
    },
    {
      icon: Wrench,
      title: "Certified Master Engineers",
      desc: "Experienced technicians trained specifically on European & Indian kitchen appliance architectures."
    },
    {
      icon: BadgePercent,
      title: "Transparent Upfront Pricing",
      desc: "Zero hidden charges. Complete price breakdown provided before starting any doorstep repair."
    },
    {
      icon: Home,
      title: "100% Doorstep Convenience",
      desc: "No need to transport heavy appliances. All repairs, glass replacements, and PCB fixes happen at home."
    },
    {
      icon: Sparkles,
      title: "100% Original Compatible Spares",
      desc: "We exclusively use genuine, high-grade replacement parts, heat coils, and toughened glass tops."
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            The Preferred Kitchen Repair Specialists
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Trusted by {companyInfo.stats.happyCustomers} homeowners for reliable, affordable, and guaranteed doorstep kitchen appliance repairs.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-200/80 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-slate-900 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mid-Section CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-black">Need Emergency Kitchen Appliance Repair?</h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">Our technician is in your area and ready for immediate dispatch.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="w-full sm:w-auto text-center bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-colors"
            >
              Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
