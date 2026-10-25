"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Zap,
} from "lucide-react";
import { GithubIcon, LeetCodeIcon } from "@/components/icons";

export function Hero() {
  const { personal } = portfolioData;
  const [switchActive, setSwitchActive] = useState(true);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-24 overflow-hidden bg-black text-white"
    >
      {/* Intense Neon Lime Bottom Bloom Gradient matching the reference photo */}
      <div className="absolute bottom-0 left-0 right-0 h-[480px] lime-glow-hero pointer-events-none opacity-90 z-0" />
      <div className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-[#ccff00]/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Hero Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Dual Badges matching the reference screenshot */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2563eb] text-white shadow-md shadow-blue-600/30">
                <span className="text-[11px] font-mono">✦</span>
                <span>Amazon ML &apos;26</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono text-[#ccff00] bg-white/[0.05] border border-white/[0.1] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                <span>Electronics &amp; Communication &bull; SIT</span>
              </div>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold tracking-tight text-white leading-[1.08] mb-6">
              Building intelligent products{" "}
              <span className="text-[#ccff00] drop-shadow-[0_0_35px_rgba(204,255,0,0.45)]">
                your users deserve.
              </span>
            </h1>

            {/* Eyebrow Tagline in Neon Lime */}
            <div className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#ccff00] uppercase mb-4">
              MOST SYSTEMS BREAK UNDER LOAD. THAT IS A CHOICE.
            </div>

            {/* Rich Narrative Description with Highlights */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mb-4 font-normal">
              {personal.name} is a full-stack engineer and AI enthusiast specializing in modern web architecture, context-aware RAG pipelines, and high-concurrency systems. Selected for{" "}
              <span className="text-[#ccff00] font-semibold underline decoration-[#ccff00]/40">
                Amazon ML Summer School 2026
              </span>
              , based in Tumkur, Karnataka, I build production-grade web applications that combine semantic retrieval, robust databases, and elegant frontend experiences.
            </p>

            {/* Signature Subtext */}
            <p className="text-xs sm:text-sm text-zinc-400 font-mono mb-8 italic">
              Most code stops at basic prototypes. Ours is built to keep going.
            </p>

            {/* CTA Buttons matching reference design */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black bg-[#ccff00] hover:bg-[#b8f000] shadow-[0_0_30px_rgba(204,255,0,0.45)] hover:shadow-[0_0_45px_rgba(204,255,0,0.6)] hover:scale-[1.02] transition-all duration-200 focus:outline-none"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] backdrop-blur-md hover:scale-[1.02] transition-all duration-200 focus:outline-none"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Verified Social Handles */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08] w-full">
              <span className="text-xs font-mono text-zinc-500 mr-2 uppercase tracking-wider">
                Profiles:
              </span>

              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>@{personal.githubUsername}</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href={personal.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>LeetCode (1521 Rating)</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Hardware Tactile Switch & Interactive Controls */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* The 3D Switch Capsule matching the reference image */}
            <div className="w-full max-w-md flex flex-col items-center">
              
              {/* Outer Metallic Bezel */}
              <div className="p-3 sm:p-4 rounded-[42px] switch-capsule w-full flex items-center justify-center relative group">
                
                {/* Switch Track */}
                <button
                  type="button"
                  onClick={() => setSwitchActive(!switchActive)}
                  className="w-full h-36 sm:h-44 rounded-[34px] switch-track relative p-3 sm:p-4 flex items-center cursor-pointer focus:outline-none transition-all"
                  aria-label="Toggle system pipeline state"
                  title="Click to toggle system state"
                >
                  {/* Glowing Track Indicator */}
                  <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-[#ccff00]/40 via-zinc-800 to-transparent rounded-full pointer-events-none" />

                  {/* Sliding 3D Glowing Knob */}
                  <motion.div
                    animate={{
                      x: switchActive ? "0%" : "120%",
                    }}
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    className="w-28 sm:w-36 h-28 sm:h-36 rounded-full switch-knob flex flex-col items-center justify-center relative cursor-pointer select-none"
                  >
                    {/* Concentric Reflection Ring */}
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/20 blur-[1px] flex items-center justify-center">
                      <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-black/80" />
                    </div>
                  </motion.div>

                  {/* Status Labels inside the switch track */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right hidden sm:block pointer-events-none">
                    <div className="text-[11px] font-mono font-bold text-[#ccff00] tracking-wider uppercase">
                      {switchActive ? "ACTIVE" : "TURBO"}
                    </div>
                    <div className="text-[9px] font-mono text-zinc-500">
                      SYSTEM ONLINE
                    </div>
                  </div>
                </button>
              </div>

              {/* Sub-label under switch */}
              <div className="mt-4 flex items-center justify-between w-full px-2 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-[#ccff00]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-ping" />
                  {switchActive ? "AI RAG Pipeline Loaded" : "Full-Stack Engine Engaged"}
                </span>
                <span className="text-zinc-500">Click switch to toggle</span>
              </div>

              {/* Telemetry Cards under the switch */}
              <div className="grid grid-cols-2 gap-3 w-full mt-4">
                <div className="p-3 rounded-2xl bg-black/60 border border-white/[0.08] backdrop-blur-md">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Vector DB</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5 text-[#ccff00]">
                    Qdrant &bull; RAG
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-black/60 border border-white/[0.08] backdrop-blur-md">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Competitive Rigor</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">
                    1521 Rating
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Floating Bottom Dock (Awwwards Style from reference screenshot) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-20 mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Docked Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-full glass-dock">
            <span className="px-3.5 py-1.5 rounded-full bg-[#ccff00] text-black font-mono font-black text-xs shadow-sm">
              AS.
            </span>
            <a
              href="#about"
              className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Info
            </a>
            <a
              href="#projects"
              className="px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full bg-[#ccff00]/20 text-[#ccff00] font-semibold text-xs border border-[#ccff00]/40 hover:bg-[#ccff00]/30 transition-colors"
            >
              Connect
            </a>
          </div>

          {/* Bottom Right Interactive Widget matching the reference screenshot */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-dock text-xs font-mono text-zinc-300">
            <span>Ask me anything!</span>
            <span className="w-5 h-5 rounded-full bg-[#ccff00] text-black flex items-center justify-center font-bold text-[10px]">
              AS
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
