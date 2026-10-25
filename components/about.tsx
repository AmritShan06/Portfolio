"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  MapPin,
  CheckCircle2,
  Brain,
  Code,
  Server,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const { personal, education } = portfolioData;

  const corePillars = [
    {
      icon: Code,
      title: "Full-Stack Architecture",
      desc: "Architecting responsive, high-performance web applications using React, Next.js, Node, and FastAPI.",
    },
    {
      icon: Brain,
      title: "AI & Retrieval Pipelines",
      desc: "Implementing context-aware RAG pipelines, Qdrant vector databases, semantic search, and LLM integrations.",
    },
    {
      icon: Server,
      title: "Data & Distributed Layers",
      desc: "Designing schemas and real-time event-driven layers with MongoDB, MySQL, Docker containers, and Socket.IO.",
    },
    {
      icon: Zap,
      title: "Algorithmic Rigor",
      desc: "Consistently tackling complex algorithmic problems with 400+ LeetCode problems solved and 1521 contest rating.",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="Background &amp; Expertise"
          title="About"
          titleAccent="My Engineering"
          subtitle="An Electronics and Communication Engineering undergraduate dedicated to building modern full-stack web applications and AI-driven platforms."
        />

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Bio Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 card-dark rounded-3xl p-7 sm:p-9 border border-white/[0.08] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ccff00] to-transparent opacity-80" />
            
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] shadow-[0_0_10px_#ccff00]" />
              Engineering Mindset &amp; Passion
            </h3>

            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mb-6 font-normal">
              {personal.bio}
            </p>

            <div className="space-y-3 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00] flex-shrink-0" />
                <span>Pursuing B.E. at Siddaganga Institute of Technology, Tumkur</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00] flex-shrink-0" />
                <span>Selected for Amazon ML Summer School 2026 (Top 3,000 pan-India)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#ccff00] flex-shrink-0" />
                <span>Active competitive programmer &amp; system architect</span>
              </div>
            </div>
          </motion.div>

          {/* Core Focus Pillars Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card-dark rounded-2xl p-5 sm:p-6 border border-white/[0.08]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/25 text-[#ccff00] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Education Timeline */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/[0.08]">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#ccff00]" />
              Academic Foundation &amp; Verified Records
            </h3>
            <span className="text-xs font-mono text-[#ccff00] bg-[#ccff00]/10 px-3 py-1 rounded-full border border-[#ccff00]/30">
              Verified Records
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item, idx) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="card-dark rounded-3xl p-6 sm:p-7 border border-white/[0.08] flex flex-col justify-between relative group"
              >
                {/* Score Pill at top right */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-[#ccff00] transition-colors">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#ccff00] text-black shadow-md shadow-[#ccff00]/20">
                    <Award className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>{item.score}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#ccff00] transition-colors">
                    {item.institution}
                  </h4>
                  <p className="text-xs font-medium text-zinc-300 mb-3">
                    {item.degree}
                  </p>
                  {item.details && (
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      {item.details}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{item.duration}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1 text-zinc-400">
                      <MapPin className="w-3 h-3 text-[#ccff00]" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
