import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tom Chamberlin — Full Stack Developer",
  description:
    "Full stack developer building AI-powered products with Next.js, React, TypeScript, and Supabase. Based in the UK.",
  keywords: [
    "Next.js developer",
    "React developer",
    "TypeScript",
    "AI developer",
    "Supabase",
    "UK",
    "full stack",
    "RAG",
    "vector embeddings",
  ],
  openGraph: {
    title: "Tom Chamberlin — Full Stack Developer",
    description:
      "Full stack developer building AI-powered products with Next.js, React, TypeScript, and Supabase.",
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
        className={`${ibmPlexMono.variable} ${inter.variable} font-sans antialiased`}
        style={{ background: "#0a0a0a", color: "#d4d4d8" }}
      >
        {children}
      </body>
    </html>
  );
}
