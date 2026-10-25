"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LeetCodeIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Footer() {
  const { personal, navigation } = portfolioData;
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <footer className="relative z-[1] border-t border-white/[0.08] bg-[#05030f]/70 py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          <div className="flex items-center gap-3 text-center lg:text-left">
            <div className="w-10 h-10 rounded-2xl bg-[#ccff00] text-black flex items-center justify-center font-black font-mono text-sm shadow-[0_0_20px_rgba(204,255,0,0.4)]">
              {personal.monogram}
            </div>
            <div>
              <div className="font-bold text-base text-white">{personal.name}</div>
              <div className="text-[11px] text-zinc-400 font-mono">
                Full-Stack Developer &bull; AI Systems
              </div>
            </div>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono font-medium text-zinc-400"
            aria-label="Footer navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "hover:text-[#ccff00] transition-colors",
                  isActive(item.href) && "text-[#ccff00]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="text-xs font-mono text-zinc-400 hover:text-[#ccff00] transition-colors max-w-[220px] truncate sm:max-w-none"
            >
              {personal.email}
            </a>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-[#ccff00] hover:bg-white/[0.08] transition-colors"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#ccff00] text-black hover:bg-[#b8f000] shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex items-center justify-center text-center text-xs text-zinc-500 font-mono">
          <div>
            &copy; {currentYear} {personal.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
