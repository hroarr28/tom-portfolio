const categories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "React Native"],
  },
  {
    title: "Backend & Data",
    skills: ["Supabase", "PostgreSQL", "REST APIs", "Stripe", "Payload CMS", "Node.js"],
  },
  {
    title: "AI & Tooling",
    skills: ["Claude API", "Cursor", "Ollama", "Replicate", "Prompt engineering", "Multi-agent systems"],
  },
  {
    title: "Infrastructure",
    skills: ["Vercel", "Git/GitHub", "Docker", "CI/CD", "PWAs", "Cloudflare"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl font-bold mb-12">Skills</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-heading text-sm font-semibold text-brand uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-raised border border-border text-zinc-300"
                  >
                    {skill}
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
