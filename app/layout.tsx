import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomHeader } from "@/components/block/customHeader";
import { FooterSection } from "@/components/sections/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D34nLabs - Web Development & Digital Solutions",
  description: "Professional web development services including Shopify, Webflow, and custom solutions. Transform your digital presence with D34nLabs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* HEADER */}
        <header>
          <CustomHeader></CustomHeader>
        </header>
        {children}
        {/* FOOTER */}
        <footer>
          <FooterSection />
        </footer>
      </body>
    </html>
  );
}
