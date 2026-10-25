"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { X, ArrowUpRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname]
  );

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    // The display only shows minutes, so update at the same cadence.
    const timer = setInterval(updateTime, 60_000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[65px] px-4 sm:px-8 bg-[#030014]/[0.16] backdrop-blur-md shadow-[0_10px_30px_rgba(42,14,97,0.45)]">
      <div className="w-full max-w-7xl h-full mx-auto flex items-center justify-between gap-3">
        <Link
          href="/"
          className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00] rounded-md shrink-0"
          aria-label="Amritanshu Shandilya — Home"
        >
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center">
            {portfolioData.personal.shortName}
            <span
              className="w-2 h-2 rounded-full bg-[#ccff00] inline-block ml-0.5 animate-pulse shadow-[0_0_10px_#ccff00]"
              aria-hidden
            />
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md absolute left-1/2 -translate-x-1/2"
          aria-label="Desktop navigation"
        >
          {portfolioData.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap",
                isActive(item.href)
                  ? "bg-[#ccff00] text-black font-bold shadow-[0_0_15px_rgba(204,255,0,0.35)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400"
            aria-live="polite"
            aria-label="Local time in Tumkur, India"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-ping" aria-hidden />
            <span className="font-semibold text-zinc-300">TUMKUR</span>
            <span className="text-zinc-600" aria-hidden>
              —
            </span>
            <time className="text-[#ccff00] font-bold tabular-nums">
              {currentTime}
            </time>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="lg:hidden flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00]"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? (
              <X className="w-4 h-4 text-white stroke-[2.75]" />
            ) : (
              <Menu className="w-4 h-4 text-white stroke-[2.75]" aria-hidden="true" />
            )}
            <span className="hidden sm:inline">{isOpen ? "Close" : "Menu"}</span>
          </button>

          <Link
            href="/contact"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ccff00] text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(204,255,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Contact Amritanshu"
            title="Contact"
          >
            <ArrowUpRight className="w-[18px] h-[18px] text-black stroke-[3]" />
          </Link>
        </div>
      </div>

      <div id="mobile-nav-panel">
        <MobileNavigation
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          activePath={pathname}
        />
      </div>
    </header>
  );
}
