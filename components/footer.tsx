"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LeetCodeIcon } from "@/components/icons";

export function Footer() {
  const { personal, navigation } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-black py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ccff00] text-black flex items-center justify-center font-black font-mono text-sm shadow-[0_0_20px_rgba(204,255,0,0.4)]">
              {personal.monogram}
            </div>
            <div>
              <div className="font-bold text-base text-white">
                {personal.name}
              </div>
              <div className="text-[11px] text-zinc-400 font-mono">
                Full-Stack Developer &bull; AI Systems
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono font-medium text-zinc-400">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#ccff00] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-3">
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
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#ccff00] text-black hover:bg-[#b8f000] shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-all ml-2"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-3">
          <div>
            &copy; {currentYear} {personal.name}. All rights reserved.
          </div>
          <div className="text-zinc-500">
            Designed and built with Next.js &bull; TypeScript &bull; Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
