"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export interface ClientIpLogEntry {
  id: string;
  ip: string;
  timestamp: string;
  path: string;
  referrer: string;
  isAdClick: boolean;
}

export default function IpTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const trackClientIp = async () => {
      try {
        // Fetch visitor's public IP address directly
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        const visitorIp = data.ip || "Unknown";

        const currentPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
        const referrer = typeof document !== "undefined" ? document.referrer || "Direct / None" : "Direct";
        const gclid = searchParams ? searchParams.get("gclid") : null;
        const isAdClick = Boolean(gclid || currentPath.includes("gclid") || referrer.includes("google"));

        const newLog: ClientIpLogEntry = {
          id: Math.random().toString(36).substring(2, 9),
          ip: visitorIp,
          timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          path: currentPath,
          referrer: referrer,
          isAdClick: isAdClick,
        };

        // Store in localStorage for /ip-log dashboard
        if (typeof window !== "undefined") {
          const existingLogsRaw = localStorage.getItem("visitor_ip_logs");
          let logs: ClientIpLogEntry[] = existingLogsRaw ? JSON.parse(existingLogsRaw) : [];
          
          // Avoid duplicate log if exact same IP and path within 5 seconds
          const lastLog = logs[0];
          if (!lastLog || lastLog.ip !== visitorIp || lastLog.path !== currentPath) {
            logs = [newLog, ...logs].slice(0, 300);
            localStorage.setItem("visitor_ip_logs", JSON.stringify(logs));
          }
        }
      } catch (err) {
        // Silent catch to ensure 100% uptime
      }
    };

    trackClientIp();
  }, [pathname, searchParams]);

  return null;
}
