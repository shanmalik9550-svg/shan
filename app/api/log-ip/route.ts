import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";

interface IpLogEntry {
  id: string;
  ip: string;
  timestamp: string;
  path: string;
  referrer: string;
  userAgent: string;
  isAdClick: boolean;
}

const MAX_LOGS = 300;
// In-memory fallback
let memoryLogs: IpLogEntry[] = [];

// Helper to load logs
function getLogs(): IpLogEntry[] {
  try {
    const filePath = path.join(process.cwd(), "scratch", "ip_logs.json");
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    // fallback to memory
  }
  return memoryLogs;
}

// Helper to save logs
function saveLogs(logs: IpLogEntry[]) {
  memoryLogs = logs;
  try {
    const dirPath = path.join(process.cwd(), "scratch");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    const filePath = path.join(dirPath, "ip_logs.json");
    fs.writeFileSync(filePath, JSON.stringify(logs.slice(0, MAX_LOGS), null, 2), "utf-8");
  } catch (err) {
    // silent fallback
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    
    // Extract IP address from standard proxies / headers
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

    const currentLogs = getLogs();
    // Prepend new log
    const updatedLogs = [newLog, ...currentLogs].slice(0, MAX_LOGS);
    saveLogs(updatedLogs);

    return NextResponse.json({ success: true, ip: rawIp });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Logging failed" }, { status: 500 });
  }
}

export async function GET() {
  const logs = getLogs();
  return NextResponse.json({ success: true, count: logs.length, logs });
}
