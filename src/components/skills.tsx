const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: "Daily, 3 years" },
      { name: "TypeScript", level: "Strict mode, daily" },
      { name: "Tailwind CSS", level: "Daily" },
      { name: "HTML / CSS", level: "3 years" },
      { name: "React Native", level: "Learning" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Supabase / PostgreSQL", level: "4 production apps" },
      { name: "REST APIs", level: "Daily" },
      { name: "Stripe", level: "3 integrations" },
      { name: "Payload CMS", level: "Professional" },
      { name: "Node.js", level: "3 years" },
    ],
  },
  {
    title: "AI & ML Integration",
    skills: [
      { name: "Claude API / Vision", level: "2 production apps" },
      { name: "OpenAI API / Embeddings", level: "RAG pipeline" },
      { name: "Ollama (local models)", level: "Content generation" },
      { name: "Replicate / Modal", level: "ML model deployment" },
      { name: "Prompt engineering", level: "Daily" },
      { name: "RAG / pgvector", level: "Full pipeline built" },
      { name: "Multi-agent systems", level: "6 agents, 24/7" },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "Vercel", level: "All projects" },
      { name: "Git / GitHub", level: "Daily" },
      { name: "Docker", level: "Dev environments" },
      { name: "CI/CD", level: "GitHub Actions" },
      { name: "PWAs", level: "2 production apps" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <p className="text-zinc-500 text-sm mb-10">
          Grouped by category, with honest context on experience level.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xs font-semibold text-brand uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <p className="text-sm text-zinc-300">{skill.name}</p>
                    <p className="text-[11px] text-zinc-600">{skill.level}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
