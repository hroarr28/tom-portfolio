const briefcaseIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97847" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
);

export function Experience() {
  return (
    <section id="experience" className="max-w-[900px] mx-auto px-6 py-28">
      <div className="mb-12">
        <h2 className="font-mono text-3xl font-bold text-zinc-50 mb-3">Experience</h2>
        <p className="text-[15px] text-zinc-500 max-w-[600px]">
          Commercial foundation plus ambitious side projects.
        </p>
      </div>

      <div className="border-l-2 border-zinc-800 pl-8 relative">
        {/* Current role */}
        <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-zinc-950 border-2 border-accent flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-accent" />
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            {briefcaseIcon}
            <div>
              <h3 className="text-base font-semibold text-zinc-50">Software Developer</h3>
              <p className="text-[13px] text-zinc-500">EdTech Company &middot; 2023 &ndash; Present</p>
            </div>
          </div>
          <p className="text-[14px] leading-[1.7] text-zinc-400 mt-3">
            Building production applications with React, Next.js, TypeScript, and
            Payload CMS. Daily responsibilities include internal tool development,
            maintaining multiple websites across various platforms, and shipping
            user-facing features for educational platforms. React Native mobile
            development coming up.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "Next.js", "TypeScript", "Payload CMS", "HTML/CSS", "React Native"].map((t) => (
              <span key={t} className="text-[11px] px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-500">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Side projects */}
        <div className="absolute -left-[11px] top-[180px] w-5 h-5 rounded-full bg-zinc-950 border-2 border-zinc-600 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-zinc-600" />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-2">
            {briefcaseIcon}
            <div>
              <h3 className="text-base font-semibold text-zinc-50">Independent Product Developer</h3>
              <p className="text-[13px] text-zinc-500">SwiftLabs &middot; 2024 &ndash; Present</p>
            </div>
          </div>
          <p className="text-[14px] leading-[1.7] text-zinc-400 mt-3">
            Shipped 5 SaaS products end-to-end while working full-time.
            Built a 6-agent AI system that autonomously researches, designs, builds,
            and deploys products. This isn&apos;t a side hustle &mdash; it&apos;s a product
            engine that proves I can architect and ship at scale.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Next.js", "Supabase", "Stripe", "Claude API", "OpenAI", "Vercel", "Multi-agent AI"].map((t) => (
              <span key={t} className="text-[11px] px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-500">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
