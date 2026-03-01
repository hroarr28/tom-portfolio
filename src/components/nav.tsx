"use client";

import { useState } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#ai", label: "AI" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800" style={{ background: "rgba(10,10,10,0.8)", backdropFilter: "blur(12px)" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-mono text-base font-bold text-zinc-50 no-underline">TC</a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-zinc-400 no-underline hover:text-accent transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-zinc-400 hover:text-white" aria-label="Toggle menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6L18 18M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-800 px-6 py-4 flex flex-col gap-3" style={{ background: "rgba(10,10,10,0.95)" }}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-zinc-400 hover:text-accent no-underline transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
