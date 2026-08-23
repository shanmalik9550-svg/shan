import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export interface IpLogEntry {
  id: string;
  ip: string;
  timestamp: string;
  path: string;
  referrer: string;
  userAgent: string;
  isAdClick: boolean;
}

const MAX_LOGS = 300;

// Global in-memory storage across hot reloads & requests
const globalForLogs = globalThis as unknown as {
  _ipLogsStore?: IpLogEntry[];
};

if (!globalForLogs._ipLogsStore) {
  globalForLogs._ipLogsStore = [];
}

function getLogs(): IpLogEntry[] {
  return globalForLogs._ipLogsStore || [];
}

function addLog(newLog: IpLogEntry) {
  if (!globalForLogs._ipLogsStore) {
    globalForLogs._ipLogsStore = [];
  }
  globalForLogs._ipLogsStore = [newLog, ...globalForLogs._ipLogsStore].slice(0, MAX_LOGS);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    
    // Extract IP address from standard headers / proxies
    const rawIp =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const userAgent = request.headers.get("user-agent") || "Unknown";
    const currentPath = body.path || "/";
    const referrer = body.referrer || request.headers.get("referer") || "Direct / None";
    const isAdClick = Boolean(body.gclid || currentPath.includes("gclid") || referrer.includes("google"));

    const newLog: IpLogEntry = {
      id: Math.random().toString(36).substring(2, 9),
      ip: rawIp,
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      path: currentPath,
      referrer: referrer,
      userAgent: userAgent,
      isAdClick: isAdClick
    };

    addLog(newLog);

    return NextResponse.json({ success: true, ip: rawIp });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Logging error" }, { status: 200 });
  }
}

export async function GET() {
  try {
    const logs = getLogs();
    return NextResponse.json({ success: true, count: logs.length, logs: logs });
  } catch (error) {
    return NextResponse.json({ success: true, count: 0, logs: [] });
  }
}
