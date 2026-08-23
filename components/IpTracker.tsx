"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function IpTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const logVisitor = async () => {
      try {
        const gclid = searchParams ? searchParams.get("gclid") : null;
        await fetch("/api/log-ip", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
            referrer: typeof document !== "undefined" ? document.referrer : "",
            gclid: gclid,
          }),
        });
      } catch (err) {
        // Silently handle logging errors to never interrupt user experience
      }
    };

    logVisitor();
  }, [pathname, searchParams]);

  return null;
}
