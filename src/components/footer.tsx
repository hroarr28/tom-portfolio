export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          Tom Chamberlin {new Date().getFullYear()}
        </p>
        <p className="text-zinc-600 text-xs">
          Built with Next.js and TypeScript
        </p>
      </div>
    </footer>
  );
}
