"use client";

import React from "react";
import { Phone, Calendar, UserCheck, Home, Search, Wrench, CheckCircle2, CreditCard } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function RepairProcess() {
  const steps = [
    {
      num: "01",
      title: "Book Service",
      desc: "Call helpline or submit quick lead form with appliance & brand details.",
      icon: Phone
    },
    {
      num: "02",
      title: "Technician Assigned",
      desc: "Nearest certified brand specialist technician assigned within 5 minutes.",
      icon: UserCheck
    },
    {
      num: "03",
      title: "45-Min Doorstep Visit",
      desc: "Technician arrives at your home equipped with diagnostic tools & spares.",
      icon: Home
    },
    {
      num: "04",
      title: "On-Site Diagnosis",
      desc: "Detailed inspection & transparent upfront estimate before starting work.",
      icon: Search
    },
    {
      num: "05",
      title: "Expert Repair & Testing",
      desc: "Component replacement, testing & safety leak check right in your kitchen.",
      icon: Wrench
    },
    {
      num: "06",
      title: "Payment & 1-Year Warranty",
      desc: "Pay easily via UPI/Cash & receive official 1-year service warranty card.",
      icon: CreditCard
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
            Transparent Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            Our 6-Step Doorstep Repair Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Hassle-free, rapid, and transparent service experience from initial booking to post-repair warranty.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative group hover:bg-blue-900 hover:text-white transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-orange-500 group-hover:text-orange-400">
                    {s.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white text-slate-900 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center shadow-sm transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-200 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
