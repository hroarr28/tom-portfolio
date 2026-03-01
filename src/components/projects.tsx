const checkIcon = (
  <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="#D97847" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const externalIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
  </svg>
);

const githubIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const arrowIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const projects = [
  {
    number: "01",
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
    number: "02",
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
    number: "03",
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
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-28">
      <div className="mb-16">
        <h2 className="font-mono text-3xl font-bold text-zinc-50 mb-3">Projects</h2>
        <p className="text-[15px] text-zinc-500 max-w-[600px]">
          Each project solves a real problem and uses AI meaningfully — not as a
          wrapper around an API call, but as core infrastructure.
        </p>
      </div>

      {projects.map((project) => (
        <div key={project.number} className="relative py-12 border-b border-zinc-800 last:border-b-0">
          {/* Number - hidden on mobile, positioned on desktop */}
          <div className="font-mono text-5xl md:text-7xl font-bold text-zinc-900 mb-4 md:absolute md:top-12 md:-left-20 md:mb-0">
            {project.number}
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div className="flex-1">
              <h3 className="font-mono text-2xl font-bold text-zinc-50 mb-1">{project.title}</h3>
              <p className="text-sm text-zinc-500">{project.tagline}</p>
            </div>
            <div className="w-12 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: project.colour }} />
          </div>

          <p className="text-[15px] leading-[1.7] text-zinc-400 mb-4">{project.description}</p>
          <p className="text-[13px] text-zinc-600 italic mb-6">Problem: {project.problem}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[11px] px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-500">
                {tech}
              </span>
            ))}
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-zinc-600 mb-4">Key implementation details</p>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-[13px] text-zinc-500 leading-relaxed">
                  {checkIcon}
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 border-t border-zinc-800">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] text-zinc-500 hover:text-accent no-underline transition-colors">
                {externalIcon} Live demo
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] text-zinc-500 hover:text-accent no-underline transition-colors">
              {githubIcon} Source code
            </a>
            <a href={project.caseStudy} className="inline-flex items-center gap-2 text-[13px] text-accent hover:text-zinc-50 no-underline transition-colors sm:ml-auto">
              Read case study {arrowIcon}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
