const capabilities = [
  {
    title: "Multi-agent orchestration",
    description:
      "I run 6 specialised AI agents on a Mac Mini M4 Pro \u2014 each handles a different domain (research, design, marketing, development, client services). They share context, delegate tasks to each other, and run scheduled jobs autonomously. Not a toy setup: these agents deploy code, write database migrations, and generate production content.",
    tags: ["OpenClaw", "Sonnet", "Opus", "Cron scheduling"],
  },
  {
    title: "RAG architecture",
    description:
      "Built a full retrieval-augmented generation pipeline for Insight: document ingestion, intelligent chunking with paragraph-boundary splitting, vector embeddings via OpenAI text-embedding-3-small, pgvector cosine similarity search, and grounded AI responses with source citations. Understands when to say \"I don\u2019t know\" instead of hallucinating.",
    tags: ["pgvector", "OpenAI embeddings", "Cosine similarity", "Streaming"],
  },
  {
    title: "Computer vision extraction",
    description:
      "PromptLens sends design screenshots to Claude Vision as base64 (Supabase signed URLs can\u2019t be fetched externally), extracts structured style data (colours, typography, spacing, borders, shadows, layout patterns), and generates tool-specific prompts. One API call, structured JSON output plus natural language prompt.",
    tags: ["Claude Vision", "Base64", "Structured extraction"],
  },
  {
    title: "AI content pipelines",
    description:
      "Generated 1,425 curriculum-aligned exam questions using a 3-step pipeline: Ollama generates base questions locally (free), then generates SEND-adapted variants for 4 learning profiles, then Claude reviews every question for accuracy. Each question verified against the National Curriculum. Total API cost: under \u00a35.",
    tags: ["Ollama", "Claude", "Batch processing", "Quality assurance"],
  },
  {
    title: "Daily AI development tools",
    description:
      "Cursor for code completion, Claude for architecture decisions and debugging, ChatGPT for quick research. AI isn\u2019t a novelty \u2014 it\u2019s how I ship multiple production apps while working a full-time job. I know when to lean on AI and when to write it myself.",
    tags: ["Cursor", "Claude", "ChatGPT", "Prompt engineering"],
  },
];

export function AISection() {
  return (
    <section id="ai" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">How I use AI</h2>
        <p className="text-zinc-500 text-sm mb-10 max-w-2xl">
          Beyond API calls and chatbot wrappers. I build AI into product
          infrastructure \u2014 from vector search to multi-agent systems to
          computer vision pipelines.
        </p>

        <div className="space-y-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-surface border border-border rounded-xl p-5 md:p-6 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-sm font-semibold mb-2">{cap.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-brand/10 text-brand border border-brand/20"
                  >
                    {tag}
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
