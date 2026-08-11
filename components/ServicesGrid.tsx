"use client";

import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/data/services";
import { Wrench, CheckCircle, Phone, MessageSquare, Flame, Wind, Cpu, ShieldAlert, Sparkles, Box, Grid, Zap, Calendar, Trash2, CheckSquare, AlertTriangle, ShieldCheck } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

const iconMap: Record<string, any> = {
  Wind,
  Flame,
  Zap,
  Grid,
  Box,
  Sparkles,
  AlertTriangle,
  ShieldAlert,
  Cpu,
  CheckSquare,
  Trash2,
  Calendar
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-orange-100 text-orange-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
            Complete Service Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            Kitchen Appliance Repair & Servicing
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Specialized doorstep repair services for all major brands and models with 1-year written warranty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Wrench;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {service.popular && (
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] uppercase font-black px-2 py-0.5 rounded-md shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-xs text-emerald-700 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>1-Year Warranty</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${companyInfo.phoneRaw}`}
                      className="bg-slate-900 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 fill-current" />
                      <span>Book Service</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
