import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

const siteUrl = "https://skpopworks.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SK POP WORKS | False Ceiling & POP Work in Bangalore",
    template: "%s | SK POP WORKS"
  },
  description:
    "SK POP WORKS provides complete POP, Gypsum, PVC and Grid false ceiling, partition and wall panel work with material, labour and professional installation across Bangalore.",
  keywords: [
    "False Ceiling Contractor in Bangalore",
    "POP False Ceiling Bangalore",
    "Gypsum False Ceiling Bangalore",
    "PVC False Ceiling Bangalore",
    "Grid False Ceiling Bangalore",
    "POP Work Bangalore",
    "Gypsum Partition Bangalore",
    "POP Partition Bangalore",
    "Fluted Panel Bangalore",
    "VOX Panel Bangalore",
    "PVC Wall Panel Bangalore",
    "False Ceiling With Material Bangalore"
  ],
  openGraph: {
    title: "SK POP WORKS | False Ceiling & POP Work in Bangalore",
    description:
      "Complete false ceiling, partition and interior finishing work with material, labour and professional installation across Bangalore.",
    url: siteUrl,
    siteName: "SK POP WORKS",
    locale: "en_IN",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body antialiased bg-cream text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
