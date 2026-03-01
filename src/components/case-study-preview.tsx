const studies = [
  {
    title: "Building a real-time audio engine with 7-stem AI separation",
    project: "Split & Play",
    href: "/case-study/split-and-play",
    tags: ["Replicate API", "Howler.js", "Tone.js", "Fire-and-forget polling"],
  },
  {
    title: "Computer vision extraction to structured AI prompts",
    project: "PromptLens",
    href: "/case-study/promptlens",
    tags: ["Claude Vision", "Base64 encoding", "Multi-tool export"],
  },
  {
    title: "RAG pipeline: from PDF upload to cited AI answers",
    project: "Insight",
    href: "/case-study/insight",
    tags: ["pgvector", "OpenAI embeddings", "Streaming responses"],
  },
];

export function CaseStudyPreview() {
  return (
    <section id="case-studies" className="py-20 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Case Studies</h2>
        <p className="text-zinc-500 text-sm mb-10 max-w-2xl">
          Deep dives into the architecture decisions, trade-offs, and
          challenges behind each project. Not just what I built — why I built
          it that way.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {studies.map((study) => (
            <a
              key={study.href}
              href={study.href}
              className="group block bg-raised border border-border rounded-xl p-5 hover:border-brand/30 transition-colors"
            >
              <p className="text-xs text-brand font-mono mb-2">
                {study.project}
              </p>
              <h3 className="text-sm font-semibold leading-snug mb-3 group-hover:text-white transition-colors">
                {study.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-brand/70 mt-4 group-hover:text-brand transition-colors inline-flex items-center gap-1">
                Read more
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
