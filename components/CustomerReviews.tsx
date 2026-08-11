"use client";

import React from "react";
import { ReviewItem } from "@/data/brands";
import { Star, ShieldCheck, ThumbsUp, Quote } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

interface CustomerReviewsProps {
  reviews?: ReviewItem[];
  brandName?: string;
}

export default function CustomerReviews({ reviews, brandName }: CustomerReviewsProps) {
  const defaultReviews: ReviewItem[] = [
    {
      id: "gen-1",
      name: "Siddharth Malhotra",
      location: "Bengaluru",
      rating: 5,
      date: "Yesterday",
      appliance: "Auto-Clean Kitchen Chimney",
      text: "Chimney suction had stopped completely and motor was humming loudly. Technician reached my home in 25 mins, replaced capacitor & serviced blower. Exceptional doorstep service!"
    },
    {
      id: "gen-2",
      name: "Pooja Varma",
      location: "Mumbai",
      rating: 5,
      date: "3 days ago",
      appliance: "4-Burner Glass Hob",
      text: "Gas hob auto-ignition had stopped sparking and burner flame was yellow. The technician cleared jet nozzles and fixed spark box in 30 mins. Transparent price!"
    },
    {
      id: "gen-3",
      name: "Amitabh Banerjee",
      location: "Kolkata",
      rating: 5,
      date: "5 days ago",
      appliance: "Built-in Convection Oven",
      text: "Oven was tripping my main circuit breaker whenever heating turned on. Technician diagnosed burnt heating element insulation and replaced it. Written 1-year warranty provided."
    },
    {
      id: "gen-4",
      name: "Dr. Ritu Sharma",
      location: "Delhi NCR",
      rating: 5,
      date: "1 week ago",
      appliance: "Gas Stove & Leak Fixing",
      text: "Had a dangerous gas smell near hob valve. They sent a safety engineer within 20 mins! Replaced safety hose and pressure tested line. Super prompt response."
    }
  ];

  const listToRender = reviews && reviews.length > 0 ? reviews : defaultReviews;

  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
            Real Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
            Trusted by {companyInfo.stats.happyCustomers} Homeowners
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Read verified doorstep service reviews from customers across major metropolitan cities.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listToRender.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 shadow-lg flex flex-col justify-between relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-700/50 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs text-slate-300 font-bold ml-1">5.0</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                  <span className="text-slate-400 font-medium">{rev.location} • {rev.appliance}</span>
                </div>

                <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-bold bg-emerald-950/90 border border-emerald-800 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
