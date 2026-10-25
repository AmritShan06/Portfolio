"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

export function MobileNavigation({
  isOpen,
  onClose,
  activePath,
}: MobileNavigationProps) {
  if (!isOpen) return null;

  const isActive = (href: string) => {
    if (href === "/") return activePath === "/";
    return activePath === href || activePath.startsWith(`${href}/`);
  };

  return (
    <div
      className="fixed inset-0 top-[var(--header-offset)] bg-black/95 backdrop-blur-2xl z-40 p-6 flex flex-col justify-between overflow-y-auto overscroll-contain lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div className="max-w-2xl mx-auto w-full pt-6">
        <div className="text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-6">
          Navigation Menu
        </div>
        <nav className="flex flex-col space-y-2" aria-label="Mobile primary">
          {portfolioData.navigation.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "text-2xl sm:text-3xl font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00]",
                isActive(item.href)
                  ? "text-[#ccff00] bg-white/[0.04] border-l-4 border-[#ccff00]"
                  : "text-zinc-300 hover:text-white hover:bg-white/[0.02]"
              )}
            >
              <span>{item.label}</span>
              <span className="text-xs font-mono text-zinc-600">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="max-w-2xl mx-auto w-full pt-8 pb-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>Available for Full-Stack &amp; AI Systems</div>
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="text-[#ccff00] hover:underline"
        >
          {portfolioData.personal.email}
        </a>
      </div>
    </div>
  );
}
