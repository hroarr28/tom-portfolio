export function Hero() {
  return (
    <section className="max-w-[900px] mx-auto px-6 pt-40 pb-20">
      <p className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-accent mb-4">
        Senior Full-Stack Developer
      </p>
      <h1 className="font-mono text-4xl sm:text-5xl font-bold leading-[1.15] text-zinc-50 mb-6">
        I ship AI-powered products{" "}
        <span className="text-accent">that people actually use.</span>
      </h1>
      <p className="text-lg leading-[1.7] text-zinc-400 mb-8 max-w-[700px]">
        3 years building production applications with Next.js, TypeScript, and
        React. I&apos;ve shipped 5 SaaS products with 1,200+ active users, plus I
        run a 6-agent system that deploys code autonomously. I architect AI as
        core infrastructure that delivers measurable business value.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-md bg-accent text-black hover:bg-accent-dim transition-colors no-underline"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-md border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition-colors no-underline"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
