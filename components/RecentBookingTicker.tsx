"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, X, ShieldCheck, Clock, MapPin, Wrench } from "lucide-react";

interface BookingNotification {
  id: number;
  name: string;
  location: string;
  service: string;
  timeAgo: string;
  status: string;
  avatarBg: string;
}

const bookingList: BookingNotification[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Whitefield, Bangalore",
    service: "Faber Hob Auto-Ignition Repair",
    timeAgo: "3 mins ago",
    status: "Technician Dispatched 🚚",
    avatarBg: "bg-emerald-600"
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "HSR Layout, Bangalore",
    service: "Gas Leakage Emergency Fix",
    timeAgo: "7 mins ago",
    status: "Service Completed • 1-Yr Warranty ✅",
    avatarBg: "bg-blue-600"
  },
  {
    id: 3,
    name: "Deepak Nair",
    location: "Koramangala, Bangalore",
    service: "Bosch 4-Burner Hob Repair",
    timeAgo: "12 mins ago",
    status: "Doorstep Arrival in 15 Mins ⚡",
    avatarBg: "bg-orange-600"
  },
  {
    id: 4,
    name: "Ananya Reddy",
    location: "Gachibowli, Hyderabad",
    service: "Glen Cooking Range Servicing",
    timeAgo: "16 mins ago",
    status: "Technician On The Way 🛵",
    avatarBg: "bg-indigo-600"
  },
  {
    id: 5,
    name: "Suresh Menon",
    location: "Anna Nagar, Chennai",
    service: "Kutchina Glass Hob Burner Fix",
    timeAgo: "21 mins ago",
    status: "Booking Confirmed 📅",
    avatarBg: "bg-emerald-600"
  },
  {
    id: 6,
    name: "Meera Kulkarni",
    location: "Bandra West, Mumbai",
    service: "Siemens PCB Control Board Repair",
    timeAgo: "25 mins ago",
    status: "Part Replaced • Certified 🛡️",
    avatarBg: "bg-purple-600"
  }
];

export default function RecentBookingTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before first popup
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 2500);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    // Cycle through notifications: show for 6.5s, hide for 3.5s
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bookingList.length);
        setVisible(true);
      }, 800);
    }, 9000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const currentBooking = bookingList[currentIndex];

  return (
    <div
      className={`fixed bottom-16 md:bottom-6 left-3 sm:left-6 z-40 max-w-[320px] sm:max-w-xs transition-all duration-500 transform ${
        visible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-6 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="bg-slate-950/95 text-white backdrop-blur-xl p-3.5 rounded-2xl border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden group">
        {/* Top Green Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600"></div>

        {/* Close Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2.5 right-2.5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors"
          aria-label="Dismiss booking alert"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-start gap-3">
          {/* Avatar Icon with Pulsing Online Badge */}
          <div className="relative shrink-0 mt-0.5">
            <div
              className={`w-9 h-9 rounded-xl ${currentBooking.avatarBg} text-white flex items-center justify-center font-black text-xs shadow-inner border border-white/20`}
            >
              {currentBooking.name.charAt(0)}
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-950"></span>
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 pr-4 leading-tight">
            <div className="flex items-center gap-1.5 text-[11px] mb-0.5">
              <span className="font-extrabold text-slate-100">{currentBooking.name}</span>
              <span className="text-slate-400">•</span>
              <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                <Clock className="w-3 h-3 inline" /> {currentBooking.timeAgo}
              </span>
            </div>

            <p className="text-xs font-bold text-slate-200 line-clamp-1 mb-1.5">
              {currentBooking.service}
            </p>

            <div className="flex items-center justify-between gap-1">
              <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1 truncate">
                <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
                <span className="truncate">{currentBooking.location}</span>
              </span>

              <span className="shrink-0 text-[9px] uppercase font-black bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                {currentBooking.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
