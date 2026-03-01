import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-950 text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
