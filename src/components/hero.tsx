export function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-brand font-mono text-xs tracking-wider uppercase mb-3">
          Full Stack Developer
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          I build products that{" "}
          <span className="text-brand">solve real problems</span> — with AI
          woven into every layer.
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8">
          3 years shipping production apps with Next.js, TypeScript, and
          Supabase. I use AI not as a gimmick, but as infrastructure — from
          multi-agent pipelines to RAG-powered search to computer vision
          extraction.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand hover:bg-brand-dim text-white text-sm font-medium rounded-lg transition-colors"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
