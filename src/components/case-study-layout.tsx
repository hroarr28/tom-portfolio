import Link from "next/link";

interface CaseStudyMeta {
  title: string;
  project: string;
  role: string;
  timeline: string;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
}

export function CaseStudyLayout({
  meta,
  children,
}: {
  meta: CaseStudyMeta;
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to portfolio
          </Link>
        </div>
      </nav>

      <article className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <p className="text-brand font-mono text-xs tracking-wider uppercase mb-3">
            Case Study — {meta.project}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-6">
            {meta.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-zinc-500 mb-4 pb-4 border-b border-border">
            <div>
              <span className="text-zinc-600">Role:</span>{" "}
              <span className="text-zinc-400">{meta.role}</span>
            </div>
            <div>
              <span className="text-zinc-600">Timeline:</span>{" "}
              <span className="text-zinc-400">{meta.timeline}</span>
            </div>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {meta.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2 py-0.5 rounded-full bg-raised border border-border text-zinc-500"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-10">
            {meta.liveUrl && (
              <a
                href={meta.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-500 hover:text-brand transition-colors inline-flex items-center gap-1.5"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                </svg>
                Live demo
              </a>
            )}
            <a
              href={meta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-brand transition-colors inline-flex items-center gap-1.5"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source code
            </a>
          </div>

          {/* Content */}
          <div className="prose-case">{children}</div>

          {/* Back */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/"
              className="text-sm text-zinc-500 hover:text-brand transition-colors inline-flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to all projects
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
