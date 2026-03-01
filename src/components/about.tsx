export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl font-bold mb-8">About me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I&apos;m a software developer based in the UK with 3 years of
              professional experience building web applications. I work across
              the full stack — from responsive frontends to database design,
              authentication, and payment integrations.
            </p>
            <p>
              Day to day, I build with Next.js, React, TypeScript, and Tailwind.
              I&apos;ve shipped production apps using Supabase, Stripe, and various
              CMS platforms including Payload CMS.
            </p>
          </div>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              What sets me apart is how I use AI. I don&apos;t just use ChatGPT for
              code suggestions — I build AI-powered features into products and
              use multi-agent systems to automate research, design, content
              generation, and quality assurance.
            </p>
            <p>
              I&apos;m currently shipping side projects while working in EdTech,
              and I&apos;m open to hybrid roles at companies that embrace AI as
              part of their development workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
