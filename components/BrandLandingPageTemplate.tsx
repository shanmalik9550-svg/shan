"use client";

import React from "react";
import { BrandData } from "@/data/brands";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesGrid from "@/components/ServicesGrid";
import CommonProblemsSection from "@/components/CommonProblemsSection";
import RepairProcess from "@/components/RepairProcess";
import CustomerReviews from "@/components/CustomerReviews";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import MobileStickyBar from "@/components/MobileStickyBar";
import { CheckCircle2, Wrench, ShieldCheck, Clock, Phone, MessageSquare, AlertCircle } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";
import Link from "next/link";

interface BrandLandingPageTemplateProps {
  brand: BrandData;
}

export default function BrandLandingPageTemplate({ brand }: BrandLandingPageTemplateProps) {
  return (
    <>
      <SchemaMarkup
        brandName={brand.name}
        pageTitle={brand.h1Title}
        pageDescription={brand.metaDescription}
      />

      {/* Hero Section with Brand-Specific H1 & Headline */}
      <HeroSection
        h1Title={brand.h1Title}
        heroHeadline={brand.heroHeadline}
        heroSubheadline={brand.heroSubheadline}
        brandName={brand.name}
        ctaCopy={brand.ctaCopy}
      />

      {/* Dedicated Brand Overview & Specialty Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                {brand.name} Repair Experts
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {brand.brandTagline}
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {brand.descriptionCopy.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Brand Specialties Bullets */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Specialized {brand.name} Models Serviced:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                  {brand.specialties.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Common Brand Issues Box */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
                <Wrench className="w-5 h-5 text-orange-400" />
                <h3 className="font-black text-lg text-white">
                  Common {brand.name} Issues We Resolve
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                {brand.commonIssues.map((issue, idx) => (
                  <div key={idx} className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                    <h4 className="font-bold text-orange-400 mb-0.5">{issue.title}</h4>
                    <p className="text-slate-300">{issue.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <span className="text-[11px] text-slate-400">Doorstep Visit within 30 mins</span>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Call Technician</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Common Problems */}
      <CommonProblemsSection />

      {/* Repair Process */}
      <RepairProcess />

      {/* Customer Reviews for this Brand */}
      <CustomerReviews reviews={brand.reviews} brandName={brand.name} />

      {/* Brand Specific FAQs (8-10 Unique FAQs) */}
      <FAQSection faqs={brand.faqs} brandName={brand.name} />

      {/* Mobile Sticky Bar Override for Brand */}
      <MobileStickyBar brandName={brand.name} />
    </>
  );
}
