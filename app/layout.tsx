import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EVENT_CONFIG } from "@/lib/constants";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${EVENT_CONFIG.name} | ${EVENT_CONFIG.tagline}`,
  description: `Join us on ${EVENT_CONFIG.dateDisplay} in ${EVENT_CONFIG.location.city} for ${EVENT_CONFIG.name} - exploring Agents & Agentic Development's Impact on Humanity. Invitation-only event co-located with GOSIM Paris.`,
  keywords: [
    "AI Vision Forum",
    "Paris 2026",
    "Agentic AI",
    "AI Agents",
    "Open Source AI",
    "AI Governance",
    "Cello Project",
    "GOSIM Paris"
  ],
  authors: [{ name: "AI Vision Forum" }],
  openGraph: {
    title: `${EVENT_CONFIG.name}`,
    description: `${EVENT_CONFIG.tagline} - ${EVENT_CONFIG.dateDisplay}`,
    url: `https://${EVENT_CONFIG.domain}`,
    siteName: EVENT_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT_CONFIG.name}`,
    description: `${EVENT_CONFIG.tagline} - ${EVENT_CONFIG.dateDisplay}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
