export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl text-center">
        <p className="text-brand font-mono text-sm tracking-wider uppercase mb-4 animate-fade-in-up">
          Full Stack Developer
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up animate-delay-100">
          I build products<br />
          <span className="text-brand">powered by AI</span>
        </h1>
        <p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          Next.js, React, TypeScript and Supabase — with AI woven into every
          stage of development. From idea to shipped product, faster than
          you&apos;d expect.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-brand hover:bg-brand-light text-white font-medium rounded-lg transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium rounded-lg transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
