const stats = [
  { value: "5", label: "Shipped products", detail: "Auth, payments, deployed" },
  { value: "6", label: "AI agents", detail: "Running 24/7 autonomously" },
  { value: "1,425", label: "AI-generated questions", detail: "3-step verified" },
  { value: "3", label: "Years commercial", detail: "React / Next.js / TypeScript" },
];

export function Stats() {
  return (
    <div className="border-y border-zinc-800 py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-mono text-4xl font-bold text-accent mb-2">
              {stat.value}
            </p>
            <p className="text-sm font-semibold text-zinc-300 mb-1">{stat.label}</p>
            <p className="text-xs text-zinc-600">{stat.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
