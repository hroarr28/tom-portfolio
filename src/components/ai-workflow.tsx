const steps = [
  {
    number: "01",
    title: "Multi-agent orchestration",
    description:
      "I run a system of 6 AI agents, each with a different speciality \u2014 research, design, marketing, development, and client services. They work in parallel, share context, and hand off tasks automatically.",
  },
  {
    number: "02",
    title: "AI-powered content pipelines",
    description:
      "For ThinkDen, I built a 3-step pipeline: Ollama generates base questions locally (free), then generates SEND-adapted variants, then Claude reviews for accuracy. 1,425 verified questions, minimal API cost.",
  },
  {
    number: "03",
    title: "Computer vision in production",
    description:
      "PromptLens sends design screenshots to Claude Vision as base64, which extracts colours, typography, spacing, and layout into structured data \u2014 then generates tool-specific prompts for Cursor, Stitch, and Anima.",
  },
  {
    number: "04",
    title: "AI stem separation",
    description:
      "Split & Play uses Demucs (via Replicate) to separate songs into 6 stems, then a custom Modal endpoint generates a smart click track using librosa beat detection. All orchestrated through a fire-and-forget polling architecture.",
  },
  {
    number: "05",
    title: "Daily AI development tools",
    description:
      "Cursor for code completion, Claude for architecture decisions and debugging, ChatGPT for quick research. AI isn\u2019t a novelty for me \u2014 it\u2019s how I ship 4 products while working a full-time job.",
  },
];

export function AIWorkflow() {
  return (
    <section id="ai" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl font-bold mb-4">
          How I use AI
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Not just prompting ChatGPT. I build AI into products, automate
          workflows with multi-agent systems, and use local models to keep
          costs near zero.
        </p>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-6 group"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center font-heading text-brand text-sm font-bold group-hover:bg-brand/20 transition-colors">
                {step.number}
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
