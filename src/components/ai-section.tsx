const capabilities = [
  {
    title: "Multi-agent system deploys code autonomously",
    description:
      "6 specialised agents handle research, design, marketing, development, and client services. They\u2019ve shipped 5 products with minimal human intervention \u2014 proving AI as infrastructure scales individual capability to team-level output.",
    tags: ["OpenClaw", "Claude Opus", "Sonnet", "Cron scheduling"],
  },
  {
    title: "RAG architecture eliminates hallucination",
    description:
      "Built a full retrieval-augmented generation pipeline: document ingestion, intelligent chunking on paragraph boundaries, vector embeddings, pgvector cosine similarity search, and grounded responses with source citations. Correctly says \u201cI don\u2019t know\u201d when content isn\u2019t in documents.",
    tags: ["pgvector", "OpenAI embeddings", "Cosine similarity", "Streaming"],
  },
  {
    title: "Computer vision cuts design handoff from 30 minutes to 10 seconds",
    description:
      "One API call to Claude Vision turns any UI mockup into structured style data (colours, typography, spacing) plus optimised prompts for development tools. Base64 encoding solves the private URL access problem.",
    tags: ["Claude Vision", "Base64", "Structured extraction"],
  },
  {
    title: "AI content generation at 99.8% cost reduction",
    description:
      "Created 1,425 exam questions using a 3-step pipeline: local Ollama generates base questions (free), creates SEND-adapted variants, then Claude reviews for accuracy. Total cost under \u00a35 vs. estimated \u00a32,850 for manual creation.",
    tags: ["Ollama", "Claude", "Batch processing", "Quality assurance"],
  },
];

export function AISection() {
  return (
    <section id="ai" className="max-w-[1200px] mx-auto px-6 py-28">
      <div className="mb-16">
        <h2 className="font-mono text-3xl font-bold text-zinc-50 mb-3">How I use AI to ship faster</h2>
        <p className="text-[15px] text-zinc-500 max-w-[600px]">
          While most developers use AI as an afterthought, I architect it as
          core infrastructure. These aren&apos;t API wrappers \u2014 they&apos;re systems
          that deliver measurable business outcomes.
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
