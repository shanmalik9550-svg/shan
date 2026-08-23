import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security IP Log Dashboard | Internal Only",
  description: "Private visitor IP tracking log dashboard.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function IpLogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
