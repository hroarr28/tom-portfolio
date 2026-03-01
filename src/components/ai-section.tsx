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
    <section id="ai" className="max-w-[1200px] mx-auto px-6 py-28">
      <div className="mb-16">
        <h2 className="font-mono text-3xl font-bold text-zinc-50 mb-3">How I use AI</h2>
        <p className="text-[15px] text-zinc-500 max-w-[600px]">
          Beyond API calls and chatbot wrappers. I build AI into product
          infrastructure — from vector search to multi-agent systems to
          computer vision pipelines.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {capabilities.map((cap) => (
          <div key={cap.title} className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <h3 className="text-base font-semibold text-zinc-50 mb-3">{cap.title}</h3>
            <p className="text-[13px] leading-[1.7] text-zinc-400 mb-4">{cap.description}</p>
            <div className="flex flex-wrap gap-2">
              {cap.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2.5 py-1 rounded bg-accent/10 border border-accent/30 text-accent">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
