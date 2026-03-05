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
      "Upload a song, AI separates it into 7 stems in under 3 minutes, giving musicians the practice tool they\u2019ve been waiting for. Real-time mixer with tempo/pitch control, smart click track with beat detection, A-B looping, and session tracking.",
    metrics: "7-stem separation \u00b7 \u00a30.05/song processing cost \u00b7 74 tests passing",
    stack: ["Next.js", "TypeScript", "Supabase", "Replicate", "Howler.js", "Tone.js", "Modal"],
    highlights: [
      "Fire-and-forget architecture with frontend polling for Vercel\u2019s 60s timeout",
      "Smart click track: librosa onset detection, accent downbeats, 4-beat count-in",
      "7 independent audio streams synced within 15ms drift threshold",
      "Direct browser-to-Supabase upload bypassing Vercel 4.5MB limit",
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
      "Upload design screenshots, Claude Vision extracts structured style data (colours, typography, spacing, layout) and generates optimised prompts for Cursor, Stitch, and Anima. Cuts design-to-prompt time from 30 minutes to under 10 seconds.",
    metrics: "4 export formats \u00b7 Stripe billing \u00b7 public prompt library",
    stack: ["Next.js", "TypeScript", "Supabase", "Claude Vision API", "Stripe"],
    highlights: [
      "Base64 image encoding \u2014 private Supabase URLs can\u2019t be fetched by Claude",
      "Single API call returns structured JSON + natural language prompt",
      "Multi-tool export optimised per target (Cursor, Stitch, Anima, Generic)",
      "Server-side usage enforcement with Stripe billing",
    ],
    github: "https://github.com/hroarr28/promptlens",
    caseStudy: "/case-study/promptlens",
    colour: "#3B82F6",
  },
  {
    number: "03",
    title: "Insight",
    tagline: "RAG document search with source citations",
    description:
      "Upload documents, they\u2019re chunked and embedded with OpenAI, stored in pgvector, then searched via cosine similarity to ground AI responses in your actual content. Every answer includes source citations \u2014 no hallucination.",
    metrics: "Full RAG pipeline \u00b7 pgvector IVFFlat index \u00b7 streaming with source citations",
    stack: ["Next.js", "TypeScript", "Supabase pgvector", "OpenAI", "Vercel AI SDK"],
    highlights: [
      "Paragraph-boundary chunking: 500 tokens with 50-token overlap",
      "IVFFlat index: 85% speed gain for 5% accuracy tradeoff",
      "Streaming responses with live [Source N] citation injection",
      "Correctly says \u201cI don\u2019t know\u201d when content isn\u2019t in documents",
    ],
    github: "https://github.com/hroarr28/insight",
    caseStudy: "/case-study/insight",
    colour: "#10B981",
  },
  {
    number: "04",
    title: "Invoice Pilot",
    tagline: "Zero-friction invoicing for freelancers",
    description:
      "Create professional invoices in 60 seconds — no signup required. Live split-pane preview, PDF download, Stripe-powered Pro tier with recurring billing and late payment reminders. Freemium model with server-side subscription enforcement via Supabase RLS.",
    metrics: "60s to first invoice · 2-day build · freemium with Stripe billing",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    highlights: [
      "Zero-signup onboarding: full invoice creation without authentication",
      "Live preview: instant re-render on every field change, no API calls",
      "Print-based PDF: server-rendered HTML + window.print(), zero heavy dependencies",
      "Stripe webhooks + Supabase RLS for tamper-proof subscription gating",
    ],
    url: "https://invoicepilot.swiftlabs.dev",
    github: "https://github.com/hroarr28/swiftlabs-invoicepilot",
    caseStudy: "/case-study/invoice-pilot",
    colour: "#F97316",
  },
  {
    number: "05",
    title: "SwiftLabs",
    tagline: "Autonomous product engine \u2014 my key differentiator",
    description:
      "6 specialised AI agents that research, design, build, and ship micro-SaaS products. Operates 24/7 without manual intervention. I can ship products faster than teams twice my size.",
    metrics: "5 products shipped \u00b7 6 agents \u00b7 fully autonomous deployment pipeline",
    stack: ["OpenClaw", "Claude Opus", "Claude Sonnet", "Vercel API", "Stripe API", "GitHub API"],
    highlights: [
      "Weekly build cycle: Monday kickoff \u2192 Thursday ship \u2192 Friday research",
      "Fully autonomous deployment: GitHub \u2192 Vercel \u2192 Stripe \u2192 DNS \u2192 live",
      "Self-replenishing product queue with AI-scored prioritisation",
      "Nightly code review and pattern extraction via local Ollama",
    ],
    url: "https://swiftlabs.dev",
    github: "https://github.com/hroarr28/swiftlabs",
    colour: "#F59E0B",
  },
];

export function Projects() {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-28">
      <div className="mb-16">
        <h2 className="font-mono text-3xl font-bold text-zinc-50 mb-3">Projects</h2>
        <p className="text-[15px] text-zinc-500 max-w-[600px]">
          Production applications with real users and measurable impact \u2014 not
          tutorial clones or toy demos.
        </p>
      </div>

      {projects.map((project) => (
        <div key={project.number} className="relative py-12 border-b border-zinc-800 last:border-b-0">
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

          <p className="text-[15px] leading-[1.7] text-zinc-400 mb-3">{project.description}</p>
          <p className="text-[13px] font-mono text-accent/80 mb-6">{project.metrics}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <span key={tech} className="text-[11px] px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded text-zinc-500">
                {tech}
              </span>
            ))}
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-zinc-600 mb-4">Key technical decisions</p>
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
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] text-zinc-500 hover:text-accent no-underline transition-colors">
                {githubIcon} Source code
              </a>
            )}
            {project.caseStudy && (
              <a href={project.caseStudy} className="inline-flex items-center gap-2 text-[13px] text-accent hover:text-zinc-50 no-underline transition-colors sm:ml-auto">
                Read case study {arrowIcon}
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
