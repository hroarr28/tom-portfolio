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
    <section id="case-studies" className="bg-zinc-900 py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <h2 className="font-mono text-3xl font-bold text-zinc-50 mb-3">Case Studies</h2>
          <p className="text-[15px] text-zinc-500 max-w-[600px]">
            Deep dives into the architecture decisions, trade-offs, and
            challenges behind each project. Not just what I built — why I built
            it that way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((study) => (
            <a
              key={study.href}
              href={study.href}
              className="group block bg-zinc-900 border border-zinc-800 rounded-xl p-8 no-underline hover:border-zinc-600 transition-colors"
            >
              <p className="font-mono text-[11px] font-bold text-accent mb-3">
                {study.project}
              </p>
              <h3 className="text-base font-semibold leading-snug text-zinc-300 group-hover:text-zinc-50 mb-5 transition-colors">
                {study.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {study.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-500">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:text-zinc-50 transition-colors">
                Read more
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
