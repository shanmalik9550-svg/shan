"use client";

import React from "react";
import { commonProblemsData } from "@/data/commonProblems";
import { AlertTriangle, Wrench, Phone, CheckCircle2, ShieldAlert } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

export default function CommonProblemsSection() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-red-100 text-red-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
            Instant Troubleshooting Guide
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            Common Kitchen Appliance Failures We Fix
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Is your gas hob, stove, or cooking range experiencing any of these symptoms? Our doorstep technicians diagnose and resolve them on-site.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonProblemsData.map((prob) => (
            <div
              key={prob.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                    prob.urgency === "Critical" 
                      ? "bg-red-100 text-red-700 animate-pulse" 
                      : "bg-amber-100 text-amber-800"
                  }`}>
                    {prob.urgency} Urgency
                  </span>

                  <span className="text-xs text-slate-400 font-semibold">Doorstep Fix</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {prob.title}
                </h3>

                <div className="space-y-2 mb-4 text-xs">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="font-bold text-slate-700 block mb-0.5">Symptom:</span>
                    <span className="text-slate-600">{prob.symptoms}</span>
                  </div>

                  <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100/50">
                    <span className="font-bold text-blue-900 block mb-0.5">Root Cause:</span>
                    <span className="text-blue-800">{prob.cause}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 30-Min Visit
                </span>

                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-extrabold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 fill-current" />
                  <span>Fix Issue</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
