"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export interface GlobalIpLogEntry {
  id: string;
  ip: string;
  timestamp: string;
  path: string;
  referrer: string;
  isAdClick: boolean;
}

// Global CORS-enabled Central Storage Endpoints (Primary & Fallback)
export const PRIMARY_CLOUD_ENDPOINT = "https://keyvalue.xyz/g/ksr_visitor_ips_v1";

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

// Helper to log a visitor IP globally to central cloud database
export async function logVisitorGlobally(path: string, referrer: string, gclid: string | null): Promise<GlobalIpLogEntry | null> {
  try {
    const visitorIp = await getPublicIp();
    const isAdClick = Boolean(gclid || path.includes("gclid") || referrer.includes("google"));

    const newEntry: GlobalIpLogEntry = {
      id: Math.random().toString(36).substring(2, 9),
      ip: visitorIp,
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      path: path || "/",
      referrer: referrer || "Direct / None",
      isAdClick: isAdClick,
    };

    // 1. Fetch current central cloud logs
    let currentLogs: GlobalIpLogEntry[] = [];
    try {
      const res = await fetch(PRIMARY_CLOUD_ENDPOINT, { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          currentLogs = data;
        }
      }
    } catch (e) {}

    // Avoid exact duplicate within 10s on same path
    const lastEntry = currentLogs[0];
    if (!lastEntry || lastEntry.ip !== visitorIp || lastEntry.path !== path) {
      const updatedLogs = [newEntry, ...currentLogs].slice(0, 300);

      // 2. Push updated logs back to Central Cloud Database
      await fetch(PRIMARY_CLOUD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedLogs),
      });

      // 3. Backup locally
      if (typeof window !== "undefined") {
        localStorage.setItem("visitor_ip_logs", JSON.stringify(updatedLogs));
      }
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
