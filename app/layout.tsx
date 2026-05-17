import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Texas BBQ | Authentic Slow-Smoked BBQ",
  description: "Award-winning Texas BBQ. Slow-smoked meats, homemade sides, and cold drinks. Reserve your table today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-stone-950 text-stone-100">{children}</body>
    </html>
  );
}
