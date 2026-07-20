import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palm Gift Card - Trade Gift Cards, Crypto & Global Money Transfers",
  description:
    "Palm Gift Card is your trusted partner for buying and selling gift cards worldwide, trading cryptocurrency, and handling global money transfers. Fast, secure, and reliable - reach our agents directly on WhatsApp.",
  keywords: [
    "Palm Gift Card",
    "Palmcard",
    "gift card trading",
    "sell gift cards",
    "buy gift cards",
    "cryptocurrency exchange",
    "Bitcoin trading",
    "USDT",
    "global money transfer",
    "Apple gift card",
    "Steam gift card",
    "Amazon gift card",
  ],
  authors: [{ name: "Palmcard Trading Limited" }],
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  openGraph: {
    title: "Palm Gift Card - Your Trusted Global Gift Card Partner",
    description:
      "Buy and sell gift cards worldwide, trade crypto, and send money globally. Reach our dedicated agents directly on WhatsApp, 24/7.",
    siteName: "Palm Gift Card",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palm Gift Card - Your Trusted Global Gift Card Partner",
    description:
      "Buy and sell gift cards worldwide, trade crypto, and send money globally. Reach our dedicated agents directly on WhatsApp, 24/7.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
