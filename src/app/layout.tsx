import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tom Chamberlin — Full Stack Developer",
  description:
    "Full stack developer specialising in Next.js, React, TypeScript and AI-powered applications. Based in the UK, available for hybrid roles and freelance work.",
  keywords: [
    "Next.js developer",
    "React developer",
    "TypeScript",
    "AI developer",
    "UK",
    "freelance",
    "Supabase",
    "full stack",
  ],
  openGraph: {
    title: "Tom Chamberlin — Full Stack Developer",
    description:
      "Full stack developer specialising in Next.js, React, TypeScript and AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} font-body antialiased bg-zinc-950 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
