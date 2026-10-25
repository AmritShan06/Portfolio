import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-3">404</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Page not found</h1>
      <p className="text-sm text-zinc-400 max-w-md mb-8">
        The route you requested does not exist. Head back to the portfolio home or explore projects.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="px-6 py-3 rounded-full text-sm font-bold text-black bg-[#ccff00] hover:bg-[#b8f000] transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/projects"
          className="px-6 py-3 rounded-full text-sm font-medium text-white border border-white/[0.12] bg-white/[0.05] hover:bg-white/[0.08] transition-colors"
        >
          View projects
        </Link>
      </div>
    </div>
  );
}
