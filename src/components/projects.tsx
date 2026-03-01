const projects = [
  {
    title: "Split & Play",
    tagline: "AI-powered practice companion for musicians",
    description:
      "Upload a song, AI separates it into 7 stems (vocals, drums, bass, guitar, piano, other, click track), then practice with a real-time mixer, tempo/pitch control, and intelligent beat detection.",
    problem: "Musicians need to isolate instruments to learn parts, but existing tools are expensive or limited to basic separation.",
    stack: ["Next.js", "TypeScript", "Supabase", "Replicate", "Howler.js", "Tone.js", "Modal"],
    highlights: [
      "7-stem separation using Demucs AI model via Replicate",
      "Smart click track generated via Modal endpoint with librosa beat detection",
      "Real-time audio engine: tempo 0.25x\u20132x, pitch \u00b112 semitones",
      "A-B looping, section markers, session tracking with CSV export",
      "Fire-and-forget architecture with frontend polling for Vercel compatibility",
    ],
    url: "https://part-master.vercel.app",
    github: "https://github.com/hroarr28/partMaster",
    caseStudy: "/case-study/split-and-play",
    colour: "#8B5CF6",
  },
  {
    title: "PromptLens",
    tagline: "Visual prompt engineering from design screenshots",
    description:
      "Upload design screenshots, Claude Vision extracts styles (colours, typography, spacing, layout) into structured data, then generates AI-ready prompts optimised for Cursor, Stitch, and Anima.",
    problem: "Developers spend 30+ minutes manually translating designs into code prompts. PromptLens does it in seconds with computer vision.",
    stack: ["Next.js", "TypeScript", "Supabase", "Claude Vision API", "Stripe"],
    highlights: [
      "Claude Vision analyses screenshots as base64 (private URLs can\u2019t be fetched externally)",
      "Structured JSON extraction + natural language prompt in single API call",
      "Multi-tool export: Cursor, Stitch, Anima, Generic \u2014 each optimised for the target",
      "Public prompt library for community sharing",
      "Stripe billing with server-side usage enforcement",
    ],
    github: "https://github.com/hroarr28/promptlens",
    caseStudy: "/case-study/promptlens",
    colour: "#3B82F6",
  },
  {
    title: "Insight",
    tagline: "RAG document search with vector embeddings",
    description:
      "Upload documents (PDF, TXT, MD), they\u2019re chunked and embedded with OpenAI text-embedding-3-small, stored in Supabase pgvector, then searched via cosine similarity to ground AI responses in your actual content.",
    problem: "Generic AI chat hallucinates. Insight constrains answers to your uploaded documents with source citations.",
    stack: ["Next.js", "TypeScript", "Supabase pgvector", "OpenAI", "Vercel AI SDK"],
    highlights: [
      "Full RAG pipeline: chunk \u2192 embed \u2192 store \u2192 retrieve \u2192 generate",
      "pgvector IVFFlat index with cosine distance search",
      "Streaming responses with [Source N] citation notation",
      "Expandable source cards showing matched passages and similarity scores",
      "Intelligent chunking: 500 tokens with 50-token overlap on paragraph boundaries",
    ],
    github: "https://github.com/hroarr28/insight",
    caseStudy: "/case-study/insight",
    colour: "#10B981",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <p className="text-zinc-500 text-sm mb-10 max-w-2xl">
          Each project solves a real problem and uses AI meaningfully \u2014 not
          as a wrapper around an API call, but as core infrastructure.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-zinc-700 transition-colors group"
            >
              <div className="md:flex md:gap-8">
                {/* Left column */}
                <div className="md:flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-500">{project.tagline}</p>
                    </div>
                    <div
                      className="h-1 w-8 rounded-full mt-3 shrink-0"
                      style={{ backgroundColor: project.colour }}
                    />
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <p className="text-xs text-zinc-600 italic mb-4">
                    Problem: {project.problem}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-raised border border-border text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right column — highlights */}
                <div className="md:w-[45%] md:border-l md:border-border md:pl-8">
                  <p className="text-xs text-zinc-600 uppercase tracking-wider font-medium mb-3">
                    Key implementation details
                  </p>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-zinc-500 flex items-start gap-2">
                        <span className="text-brand mt-0.5 shrink-0">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-5 pt-4 border-t border-border">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-500 hover:text-brand transition-colors inline-flex items-center gap-1.5"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14L21 3" />
                    </svg>
                    Live demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 hover:text-brand transition-colors inline-flex items-center gap-1.5"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Source code
                </a>
                <a
                  href={project.caseStudy}
                  className="text-xs text-brand hover:text-brand-light transition-colors inline-flex items-center gap-1.5 ml-auto"
                >
                  Read case study
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
