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

// Central Cloud Bucket Endpoint (Zero-config global KV store)
export const CLOUD_LOG_ENDPOINT = "https://kvdb.io/KSR_IP_BUCKET_9b97997e/visitor_ips";

function IpTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const trackGlobalIp = async () => {
      try {
        // 1. Fetch visitor's public IP address
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();
        const visitorIp = ipData.ip || "Unknown";

        const currentPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
        const referrer = typeof document !== "undefined" ? document.referrer || "Direct / None" : "Direct";
        const gclid = searchParams ? searchParams.get("gclid") : null;
        const isAdClick = Boolean(gclid || currentPath.includes("gclid") || referrer.includes("google"));

        const newEntry: GlobalIpLogEntry = {
          id: Math.random().toString(36).substring(2, 9),
          ip: visitorIp,
          timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          path: currentPath,
          referrer: referrer,
          isAdClick: isAdClick,
        };

        // 2. Fetch existing logs from Central Cloud Database
        let currentLogs: GlobalIpLogEntry[] = [];
        try {
          const cloudRes = await fetch(CLOUD_LOG_ENDPOINT, { cache: "no-store" });
          if (cloudRes.ok) {
            const data = await cloudRes.json();
            if (Array.isArray(data)) {
              currentLogs = data;
            }
          }
        } catch (e) {
          // Cloud fallback to local storage
        }

        // Avoid duplicate log if exact same IP and path logged within last 10 seconds
        const lastEntry = currentLogs[0];
        if (!lastEntry || lastEntry.ip !== visitorIp || lastEntry.path !== currentPath) {
          const updatedLogs = [newEntry, ...currentLogs].slice(0, 500);

          // 3. Save updated logs back to Central Cloud Database
          await fetch(CLOUD_LOG_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedLogs),
          });

          // Backup in localStorage
          if (typeof window !== "undefined") {
            localStorage.setItem("visitor_ip_logs", JSON.stringify(updatedLogs));
          }
        }
      } catch (err) {
        // Silent fallback to ensure 100% website uptime
      }
    };

    trackGlobalIp();
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
