"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export interface GlobalIpLogEntry {
  id?: string;
  ip: string;
  timestamp: string;
  path: string;
  referrer: string;
  isAdClick: boolean;
}

export const SUPABASE_URL = "https://srrcumjdmhccslkolwlv.supabase.co";
export const SUPABASE_KEY = "sb_publishable_NYH2JMS6LwtOtrTvxnWgNg_3HkQQ_IO";

// Helper to fetch IP from multiple fast services (IPify, My-IP, IPAPI)
export async function getPublicIp(): Promise<string> {
  try {
    const r1 = await fetch("https://api.ipify.org?format=json", { cache: "no-store" });
    if (r1.ok) {
      const d1 = await r1.json();
      if (d1.ip) return d1.ip;
    }
  } catch (e) {}

  try {
    const r2 = await fetch("https://api.my-ip.io/v2/ip.json", { cache: "no-store" });
    if (r2.ok) {
      const d2 = await r2.json();
      if (d2.ip) return d2.ip;
    }
  } catch (e) {}

  try {
    const r3 = await fetch("https://ipapi.co/json/", { cache: "no-store" });
    if (r3.ok) {
      const d3 = await r3.json();
      if (d3.ip) return d3.ip;
    }
  } catch (e) {}

  return "Unknown";
}

// Helper to log a visitor IP globally to Supabase Database
export async function logVisitorGlobally(path: string, referrer: string, gclid: string | null): Promise<GlobalIpLogEntry | null> {
  try {
    const visitorIp = await getPublicIp();
    const isAdClick = Boolean(gclid || path.includes("gclid") || referrer.includes("google"));

    const newEntry: GlobalIpLogEntry = {
      ip: visitorIp,
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      path: path || "/",
      referrer: referrer || "Direct / None",
      isAdClick: isAdClick,
    };

    // 1. Post to Supabase REST API
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/visitor_ips`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify({
          ip: newEntry.ip,
          timestamp: newEntry.timestamp,
          path: newEntry.path,
          referrer: newEntry.referrer,
          is_ad_click: newEntry.isAdClick
        })
      });
    } catch (e) {}

    // 2. Local storage backup
    if (typeof window !== "undefined") {
      const storedRaw = localStorage.getItem("visitor_ip_logs");
      let logs: GlobalIpLogEntry[] = storedRaw ? JSON.parse(storedRaw) : [];
      logs = [newEntry, ...logs].slice(0, 300);
      localStorage.setItem("visitor_ip_logs", JSON.stringify(logs));
    }

    return newEntry;
  } catch (err) {
    return null;
  }
}

function IpTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    const referrer = typeof document !== "undefined" ? document.referrer || "" : "";
    const gclid = searchParams ? searchParams.get("gclid") : null;

    logVisitorGlobally(currentPath, referrer, gclid);
  }, [pathname, searchParams]);

  return null;
}

export default function IpTracker() {
  return (
    <Suspense fallback={null}>
      <IpTrackerInner />
    </Suspense>
  );
}
