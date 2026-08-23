import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import FloatingCTAs from "@/components/FloatingCTAs";
import RecentBookingTicker from "@/components/RecentBookingTicker";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kitchen Appliance Repair Experts | Same Day Doorstep Service",
  description: "Fast doorstep repair for Gas Hobs, Stoves & Cooking Ranges. 30-Min technician arrival & 1-Year Written Warranty. Call now!",
  keywords: ["kitchen appliance repair", "gas hob repair", "gas stove repair", "cooking range repair", "doorstep repair service"],
  metadataBase: new URL("https://kitchenappliancesservice.com"),
  openGraph: {
    title: "High-Converting Doorstep Kitchen Appliance Repair",
    description: "Same-Day Doorstep Technician Dispatch within 30 Mins. 1-Year Written Warranty. Book Now!",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col antialiased">
        <MicrosoftClarity />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
        <FloatingCTAs />
        <RecentBookingTicker />
      </body>
    </html>
  );
}
