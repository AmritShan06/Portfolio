"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState("");

  // Live real-time clock in IST (Tumkur, Karnataka)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = portfolioData.navigation.map((item) =>
        item.href.replace("#", "")
      );
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 px-4 sm:px-8 bg-black/60 backdrop-blur-xl border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo - Dopamine style */}
        <Link
          href="#home"
          className="group flex items-center gap-1.5 focus:outline-none"
          aria-label="Amritanshu Shandilya Portfolio"
        >
          <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans flex items-center">
            {portfolioData.personal.shortName}
            <span className="w-2 h-2 rounded-full bg-[#ccff00] inline-block ml-0.5 animate-pulse shadow-[0_0_10px_#ccff00]" />
          </span>
        </Link>

        {/* Desktop Quick Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
          aria-label="Desktop Navigation"
        >
          {portfolioData.navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
                  isActive
                    ? "bg-[#ccff00] text-black font-bold shadow-[0_0_15px_rgba(204,255,0,0.35)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Info Elements: Live Clock & Menu Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Monospace City Time Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-ping" />
            <span className="font-semibold text-zinc-300">TUMKUR</span>
            <span className="text-zinc-600">—</span>
            <span className="text-[#ccff00] font-bold">{currentTime || "17:12:08"}</span>
          </div>

          {/* Menu Trigger Button with 4 dots */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono font-medium text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-3.5 h-3.5 text-[#ccff00]" />
            ) : (
              <div className="grid grid-cols-2 gap-0.5 w-3 h-3">
                <span className="w-1 h-1 rounded-sm bg-[#ccff00]" />
                <span className="w-1 h-1 rounded-sm bg-white" />
                <span className="w-1 h-1 rounded-sm bg-white" />
                <span className="w-1 h-1 rounded-sm bg-[#ccff00]" />
              </div>
            )}
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Glowing Circular CTA */}
          <a
            href="#contact"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ccff00] text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(204,255,0,0.4)] focus:outline-none"
            aria-label="Direct Connect"
            title="Connect with Amritanshu"
          >
            <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
          </a>
        </div>

      </div>

      {/* Full-Screen / Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-black/95 backdrop-blur-2xl z-40 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="max-w-2xl mx-auto w-full pt-8">
            <div className="text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-6">
              Navigation Menu
            </div>
            <nav className="flex flex-col space-y-3">
              {portfolioData.navigation.map((item, idx) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl sm:text-3xl font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-between",
                      isActive
                        ? "text-[#ccff00] bg-white/[0.04] border-l-4 border-[#ccff00]"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.02]"
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="max-w-2xl mx-auto w-full pt-8 pb-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <div>Available for Full-Stack &amp; AI Systems</div>
            <div className="text-[#ccff00]">{portfolioData.personal.email}</div>
          </div>
        </div>
      )}
    </header>
  );
}
