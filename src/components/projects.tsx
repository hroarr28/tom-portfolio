const projects = [
  {
    title: "ThinkDen",
    description:
      "SEND-adaptive exam prep for KS2 students. Tailors question formatting, visual aids, and difficulty to each child\u2019s learning profile \u2014 dyslexia, ADHD, autism, dyscalculia.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Ollama", "Claude API"],
    highlights: [
      "1,425 curriculum-aligned questions across Maths, GPS, and Reading",
      "AI-generated content with 3-step verification pipeline",
      "5 SEND profiles with CSS-driven adaptive theming",
      "Text-to-speech, pause/resume, kid mode",
    ],
    url: "https://thinkden.vercel.app",
    colour: "#10B981",
  },
  {
    title: "Split & Play",
    description:
      "AI-powered practice companion for musicians. Upload a song, AI separates it into stems (vocals, drums, bass, guitar, piano), then practice with a mixer, tempo control, and smart click track.",
    stack: ["Next.js", "TypeScript", "Supabase", "Replicate", "Howler.js", "Tone.js"],
    highlights: [
      "7-stem separation using Demucs AI model",
      "Tempo (0.25x\u20132x) and pitch (\u00b112 semitones) control",
      "AI-generated click track with beat detection",
      "A-B looping, section markers, session tracking",
    ],
    url: "https://part-master.vercel.app",
    colour: "#8B5CF6",
  },
  {
    title: "PromptLens",
    description:
      "Visual prompt engineering tool. Upload design screenshots, Claude Vision extracts styles (colours, typography, spacing, layout), then generates AI-ready prompts for Cursor, Stitch, and Anima.",
    stack: ["Next.js", "TypeScript", "Supabase", "Claude Vision API", "Stripe"],
    highlights: [
      "Claude Vision analyses design screenshots via base64",
      "Exports optimised prompts for 4 different AI tools",
      "Public prompt library for community sharing",
      "Stripe billing with usage-based limits",
    ],
    colour: "#3B82F6",
  },
  {
    title: "MTD Pilot",
    description:
      "AI tax compliance tool for UK sole traders. Connect your bank, AI categorises transactions into HMRC boxes, generates quarterly Making Tax Digital summaries.",
    stack: ["Next.js", "TypeScript", "Supabase", "Claude API", "TrueLayer", "Stripe"],
    highlights: [
      "Bank connection via TrueLayer Open Banking API",
      "AI batch categorisation (50 transactions at a time)",
      "Quarterly MTD summary with CSV export",
      "11 HMRC-aligned expense categories",
    ],
    colour: "#F59E0B",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl font-bold mb-4">Projects</h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Products I&apos;ve built end-to-end — from database design to
          deployment. Each one uses AI in a meaningful way, not as a gimmick.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-raised border border-border rounded-xl p-6 hover:border-zinc-600 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div
                    className="h-0.5 w-12 mt-2 rounded-full"
                    style={{ backgroundColor: project.colour }}
                  />
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors shrink-0 ml-4"
                    aria-label={`Visit ${project.title}`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14L21 3" />
                    </svg>
                  </a>
                )}
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-zinc-500 text-xs flex items-start gap-2">
                    <span className="text-brand mt-0.5 shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
