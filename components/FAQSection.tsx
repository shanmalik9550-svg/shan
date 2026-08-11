"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/brands";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

interface FAQSectionProps {
  faqs?: FAQItem[];
  brandName?: string;
}

export default function FAQSection({ faqs, brandName }: FAQSectionProps) {
  const defaultFaqs: FAQItem[] = [
    {
      question: "How fast can a technician reach my home for kitchen appliance repair?",
      answer: "We offer rapid doorstep dispatch within 30 to 45 minutes of booking confirmation across all major metropolitan service areas."
    },
    {
      question: "Do you provide a written warranty on repairs and spare parts?",
      answer: "Yes, every doorstep repair service and replaced component comes with an official written 1-year service warranty."
    },
    {
      question: "What should I do immediately if I smell gas near my hob or stove?",
      answer: "Turn off the main cylinder/PNG shutoff valve immediately, open all windows, avoid switching on any electrical switches, and call our emergency hotline for a 30-minute priority visit."
    },
    {
      question: "Are your spare parts original and brand-compatible?",
      answer: "Yes, we use 100% genuine and high-grade brand compatible replacement parts, heating coils, igniter boxes, and 8mm toughened glass tops."
    },
    {
      question: "How is doorstep inspection and diagnostics handled?",
      answer: "Our technician performs thorough multi-point diagnostics on-site and provides a clear, transparent estimate before starting any repair work."
    },
    {
      question: "Can shattered glass tops on built-in hobs and gas stoves be replaced?",
      answer: "Yes! We stock custom-fit 8mm thermal shock-resistant toughened glass top panels for all 2, 3, 4, and 5 burner hobs and stoves."
    },
    {
      question: "Why is my kitchen chimney making loud humming or screeching noise?",
      answer: "Loud noise is usually caused by unaligned blower fans, worn motor bearings, or heavy grease sludge imbalance. We service and balance the motor on-site."
    },
    {
      question: "Do you repair built-in convection ovens that trip the home MCB circuit breaker?",
      answer: "Yes, breaker tripping is caused by insulation breakdown in heating elements or fan motors. We test for earth leakage and replace faulty parts right in your kitchen."
    },
    {
      question: "What payment methods do you accept upon repair completion?",
      answer: "We accept all convenient payment options including Cash, UPI (GPay, PhonePe, Paytm), Net Banking, and Credit/Debit Cards."
    }
  ];

  const listToRender = faqs && faqs.length > 0 ? faqs : defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Schema markup data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": listToRender.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faqs" className="py-16 bg-slate-50 border-b border-slate-200">
      {/* Inject FAQ Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            {brandName ? `${brandName} Repair FAQs` : "Frequently Asked Questions"}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Clear, honest answers regarding our doorstep repair service, 1-year warranty, and spare part guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {listToRender.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-700 transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-orange-500" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 mt-1 animate-in fade-in duration-150">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call CTA Prompt */}
        <div className="mt-8 text-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-extrabold text-slate-900">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-500">Speak directly with our senior technician helpline 24/7.</p>
          </div>
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-black px-5 py-3 rounded-xl flex items-center gap-2 shadow transition-colors"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call {companyInfo.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
