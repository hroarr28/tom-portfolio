export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 px-6 text-center">
      <p className="text-[13px] text-zinc-600">
        &copy; {new Date().getFullYear()} Tom Chamberlin. Built with Next.js and deployed on Vercel.
      </p>
    </footer>
  );
}
