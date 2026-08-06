"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, CheckCircle, Clock, ShieldCheck, User, Wrench, MapPin, AlertCircle, Loader2 } from "lucide-react";
import { companyInfo } from "@/data/companyInfo";

interface LeadFormProps {
  defaultBrand?: string;
  defaultAppliance?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function LeadForm({
  defaultBrand = "Select Brand",
  defaultAppliance = "Kitchen Chimney",
  title = "Book Doorstep Service Now",
  subtitle = "30-Min Response • Upfront Quote • 90-Day Warranty",
  buttonText = "Get Free Doorstep Quote"
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: companyInfo.serviceAreas[0],
    pincode: "",
    fullAddress: "",
    appliance: defaultAppliance,
    productAge: "1 - 3 Years",
    userMessage: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState("");
  const [waRedirectUrl, setWaRedirectUrl] = useState("");

  const applianceOptions = [
    "Kitchen Chimney",
    "Kitchen Hob",
    "Gas Stove",
    "Auto Ignition Problem",
    "Burner / Gas Leakage Repair",
    "Deep Cleaning & Maintenance"
  ];

  const productAgeOptions = [
    "Under 1 Year",
    "1 - 3 Years",
    "3 - 5 Years",
    "5 - 10 Years",
    "10+ Years"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please enter your name and contact phone number.");
      return;
    }
    if (formData.phone.trim().length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.pincode.trim() || formData.pincode.trim().length < 6) {
      setError("Please enter a valid 6-digit Pincode.");
      return;
    }
    if (!formData.fullAddress.trim()) {
      setError("Please enter your full address so our technician can visit your home.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const randomId = "KSR-" + Math.floor(100000 + Math.random() * 900000);
    setBookingId(randomId);

    // Format rich WhatsApp message containing ALL form details filled by user
    const formattedWaMsg = `*NEW DOORSTEP REPAIR BOOKING (Ref: ${randomId})*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📍 *City:* ${formData.city}
📮 *Pincode:* ${formData.pincode}
🏠 *Address:* ${formData.fullAddress}
🔧 *Product:* ${formData.appliance}
⏳ *Product Age:* ${formData.productAge}
⚠️ *Problem Details:* ${formData.userMessage || 'Doorstep Repair Requested'}

Please confirm technician arrival ETA.`;

    const whatsappUrl = `https://wa.me/${companyInfo.whatsappRaw}?text=${encodeURIComponent(formattedWaMsg)}`;
    setWaRedirectUrl(whatsappUrl);

    try {
      const web3FormData = new FormData();
      web3FormData.append("access_key", "39b83002-b632-4327-b3c9-bdc5d4508744");
      web3FormData.append("name", formData.name);
      web3FormData.append("phone", formData.phone);
      web3FormData.append("city", formData.city);
      web3FormData.append("pincode", formData.pincode);
      web3FormData.append("full_address", formData.fullAddress);
      web3FormData.append("product", formData.appliance);
      web3FormData.append("product_age", formData.productAge);
      web3FormData.append("problem_details", formData.userMessage || "Doorstep Repair Requested");
      web3FormData.append("subject", `New Doorstep Repair Lead: ${formData.appliance} (${formData.productAge}) - ${formData.city} (${formData.pincode})`);
      web3FormData.append("from_name", "Kitchen Repair Pro Doorstep System");

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });
    } catch (err) {
      console.warn("Web3Forms background submit fallback:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Automatically redirect user to WhatsApp with pre-filled message
      if (typeof window !== "undefined") {
        window.open(whatsappUrl, "_blank");
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-2xl border border-slate-100 relative overflow-hidden">
      {/* Decorative Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-700 via-orange-500 to-emerald-500"></div>

      {!isSubmitted ? (
        <>
          <div className="mb-5 text-center">
            <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-800 font-extrabold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
              <Clock className="w-3.5 h-3.5" /> Fast 30-Min Doorstep Dispatch
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {title}
            </h3>
            <p className="text-xs text-slate-600 font-medium mt-1">
              {subtitle}
            </p>
          </div>

          {error && (
            <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-xl text-xs font-semibold flex items-center gap-2 border border-red-200">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                maxLength={10}
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
            </div>

            {/* City & Pincode Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 font-semibold focus:bg-white focus:border-blue-600 outline-none"
                >
                  {companyInfo.serviceAreas.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Pincode <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  placeholder="e.g. 560001"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 font-semibold focus:bg-white focus:border-blue-600 outline-none"
                />
              </div>
            </div>

            {/* Full Address Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Doorstep Address <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={2}
                placeholder="House / Flat No., Building Name, Street & Landmark"
                value={formData.fullAddress}
                onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
            </div>

            {/* Product & Product Age Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.appliance}
                  onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 font-semibold focus:bg-white focus:border-blue-600 outline-none"
                >
                  {applianceOptions.map((app) => (
                    <option key={app} value={app}>
                      {app}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Product Age <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.productAge}
                  onChange={(e) => setFormData({ ...formData, productAge: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 font-semibold focus:bg-white focus:border-blue-600 outline-none"
                >
                  {productAgeOptions.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Type Message & Problem Details */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Type Message & Problem Details
              </label>
              <textarea
                rows={2}
                placeholder="Describe the issue (e.g. Gas leakage sound, auto-ignition not clicking, low suction...)"
                value={formData.userMessage}
                onChange={(e) => setFormData({ ...formData, userMessage: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-extrabold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Redirecting to WhatsApp...</span>
                </>
              ) : (
                <>
                  <span>Submit & Connect on WhatsApp</span>
                  <MessageSquare className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-2 mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Redirects automatically with complete lead details to WhatsApp</span>
            </p>
          </form>
        </>
      ) : (
        /* Success State Modal Content */
        <div className="py-6 text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <CheckCircle className="w-10 h-10" />
          </div>

          <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
            Booking Confirmed • Ref #{bookingId}
          </span>

          <h3 className="text-2xl font-black text-slate-900 mb-2">
            Technician Assigned!
          </h3>

          <p className="text-sm text-slate-600 mb-6 max-w-sm mx-auto">
            Thank you, <strong className="text-slate-900">{formData.name}</strong>! Your complete details have been sent to WhatsApp and emailed to our dispatch team.
          </p>

          <div className="bg-slate-50 p-4 rounded-xl text-left border border-slate-200 mb-6 space-y-2 text-xs">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Estimated Arrival:</span>
              <span className="font-bold text-emerald-700">Within 30-45 Minutes</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Doorstep Location:</span>
              <span className="font-bold text-slate-900">{formData.city} ({formData.pincode})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Service Warranty:</span>
              <span className="font-bold text-blue-700">90 Days Full Protection</span>
            </div>
          </div>

          <div className="space-y-3">
            {waRedirectUrl && (
              <a
                href={waRedirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Open WhatsApp Chat Now</span>
              </a>
            )}

            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Technician Directly ({companyInfo.phone})</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
