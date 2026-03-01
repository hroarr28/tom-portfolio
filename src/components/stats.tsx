const stats = [
  { value: "3", label: "Shipped products", detail: "Live on Vercel" },
  { value: "6", label: "AI agents", detail: "Running 24/7" },
  { value: "1,425", label: "AI-generated items", detail: "3-step verified" },
  { value: "RAG", label: "Vector search", detail: "pgvector + embeddings" },
];

export function Stats() {
  return (
    <section className="py-12 px-6 border-y border-zinc-800/50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-brand mb-1">
              {stat.value}
            </p>
            <p className="text-sm text-zinc-300 font-medium">{stat.label}</p>
            <p className="text-xs text-zinc-600 mt-0.5">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
