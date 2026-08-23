"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check, RefreshCw, Search, Filter, ShieldCheck, Trash2 } from "lucide-react";
import { ClientIpLogEntry } from "@/components/IpTracker";

export default function IpLogPage() {
  const [logs, setLogs] = useState<ClientIpLogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedIp, setCopiedIp] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterAdClicksOnly, setFilterAdClicksOnly] = useState(false);

  const loadLogs = () => {
    setLoading(true);
    try {
      if (typeof window !== "undefined") {
        const storedLogs = localStorage.getItem("visitor_ip_logs");
        if (storedLogs) {
          setLogs(JSON.parse(storedLogs));
        } else {
          setLogs([]);
        }
      }
    } catch (err) {
      console.error("Failed to load logs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  const clearLogs = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("visitor_ip_logs");
      setLogs([]);
    }
  };

  const copyToClipboard = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedIp(ip);
    setTimeout(() => setCopiedIp(null), 2000);
  };

  const copyAllUniqueIps = () => {
    const uniqueIps = Array.from(new Set(filteredLogs.map((l) => l.ip))).join("\n");
    navigator.clipboard.writeText(uniqueIps);
    setCopiedIp("ALL");
    setTimeout(() => setCopiedIp(null), 2000);
  };

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.ip.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.referrer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAdFilter = filterAdClicksOnly ? log.isAdClick : true;
    return matchesSearch && matchesAdFilter;
  });

  const totalVisits = logs.length;
  const uniqueIpsCount = new Set(logs.map((l) => l.ip)).size;
  const adClicksCount = logs.filter((l) => l.isAdClick).length;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Live Security Tracker
              </span>
              <span className="text-xs text-slate-400 font-mono">/ip-log</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Visitor IP Address & Click Tracker
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Real-time log of visitor IP addresses for Google Ads IP Exclusion & Click Fraud Monitoring.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={loadLogs}
              disabled={loading}
              className="bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-700 flex items-center gap-2 transition-all active:scale-95"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh Logs</span>
            </button>

            {logs.length > 0 && (
              <button
                onClick={clearLogs}
                className="bg-red-950/60 hover:bg-red-900 text-red-300 border border-red-800/40 text-xs font-bold px-3 py-2.5 rounded-xl flex items-center gap-1.5 transition-all"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            )}

            <button
              onClick={copyAllUniqueIps}
              disabled={filteredLogs.length === 0}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-black px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center gap-2 transition-all active:scale-95"
            >
              {copiedIp === "ALL" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedIp === "ALL" ? "Copied All IPs!" : "Copy Unique IPs for Google Ads"}</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
            <span className="text-xs text-slate-400 font-semibold block uppercase">Total Page Views Logged</span>
            <span className="text-2xl font-black text-white mt-1 block">{totalVisits}</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
            <span className="text-xs text-slate-400 font-semibold block uppercase">Unique IP Addresses</span>
            <span className="text-2xl font-black text-emerald-400 mt-1 block">{uniqueIpsCount}</span>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
            <span className="text-xs text-slate-400 font-semibold block uppercase">Detected Ad Clicks / Referral</span>
            <span className="text-2xl font-black text-amber-400 mt-1 block">{adClicksCount}</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search IP, Path, Referrer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer bg-slate-950 border border-slate-800 px-3.5 py-2 rounded-xl">
              <input
                type="checkbox"
                checked={filterAdClicksOnly}
                onChange={(e) => setFilterAdClicksOnly(e.target.checked)}
                className="rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
              />
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Show Ad Clicks Only</span>
            </label>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase text-[10px] font-black tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">Exact Public IP Address</th>
                  <th className="py-3.5 px-4">Timestamp (IST)</th>
                  <th className="py-3.5 px-4">Page Visited</th>
                  <th className="py-3.5 px-4">Referrer / Ad Source</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-emerald-400 flex items-center gap-2">
                        <span>{log.ip}</span>
                        {log.isAdClick && (
                          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] font-black px-2 py-0.5 rounded uppercase font-sans">
                            Ad Click
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-slate-400 font-sans text-[11px]">
                        {log.timestamp}
                      </td>
                      <td className="py-3 px-4 text-slate-200 truncate max-w-[200px]">
                        {log.path}
                      </td>
                      <td className="py-3 px-4 text-slate-400 truncate max-w-[200px] font-sans text-[11px]">
                        {log.referrer}
                      </td>
                      <td className="py-3 px-4 text-right font-sans">
                        <button
                          onClick={() => copyToClipboard(log.ip)}
                          className="bg-slate-800 hover:bg-slate-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg border border-slate-700 inline-flex items-center gap-1.5 transition-colors"
                        >
                          {copiedIp === log.ip ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-400" />
                              <span>Copy IP</span>
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-500 font-sans text-xs">
                      {loading ? "Loading visitor logs..." : "No visitor IP logs recorded yet. Visit any page on the website to see your IP logged here live!"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
