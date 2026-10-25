"use client";

import React from "react";
import { Project } from "@/data/portfolio";
import {
  ExternalLink,
  Layers,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  GitBranch,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const renderVisualMockup = () => {
    switch (project.id) {
      case "codebase-rag":
        return (
          <div className="h-52 w-full bg-[#070707] p-5 font-mono text-[11px] text-zinc-300 flex flex-col justify-between border-b border-white/[0.08] relative overflow-hidden group-hover:border-[#ccff00]/40 transition-colors">
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#ccff00]/15 rounded-full blur-2xl" />

            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
              <span className="flex items-center gap-2 text-[#ccff00] font-semibold">
                <GitBranch className="w-4 h-4" />
                codebase-rag / semantic-index
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 font-bold">
                Qdrant Hybrid RAG
              </span>
            </div>

            <div className="space-y-2 my-2">
              <div className="text-zinc-400">
                <span className="text-[#ccff00] font-bold">&gt; Query:</span> &quot;How does the semantic retrieval pipeline chunk code?&quot;
              </div>
              <div className="p-3 rounded-xl bg-black/80 border border-white/[0.08] text-[10px] space-y-1">
                <div className="flex items-center justify-between text-[#ccff00]">
                  <span>Cosine Similarity: 0.942</span>
                  <span className="text-zinc-500">FastAPI &bull; Qdrant</span>
                </div>
                <div className="text-zinc-300">
                  Extracts AST tokens &bull; Embeds via vector dense matrix &bull; Reranks lexical results
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.06]">
              <span className="text-[#ccff00] flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                Docker Containerized
              </span>
              <span>GitPython Indexer</span>
            </div>
          </div>
        );

      case "flow-ai":
        return (
          <div className="h-52 w-full bg-[#070707] p-5 flex flex-col justify-between border-b border-white/[0.08] relative overflow-hidden group-hover:border-[#ccff00]/40 transition-colors">
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#ccff00]/15 rounded-full blur-2xl" />

            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
              <span className="flex items-center gap-2 text-white font-semibold font-mono text-[11px]">
                <Layers className="w-4 h-4 text-[#ccff00]" />
                FlowAI / Architecture Nodes
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-white/[0.06] text-zinc-300 border border-white/[0.1] font-mono">
                React Flow
              </span>
            </div>

            {/* Simulated Diagram Flow Nodes */}
            <div className="relative py-2 flex items-center justify-center gap-3">
              <div className="p-2.5 rounded-xl bg-black border border-white/[0.1] text-center shadow-md">
                <div className="text-[10px] font-bold text-white font-mono">Client UI</div>
                <div className="text-[8px] text-zinc-400">React</div>
              </div>

              <div className="h-[2px] w-8 bg-gradient-to-r from-zinc-700 to-[#ccff00] relative">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
              </div>

              <div className="p-2.5 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/50 text-center shadow-md">
                <div className="text-[10px] font-bold text-[#ccff00] font-mono">AI Generator</div>
                <div className="text-[8px] text-zinc-300">Architecture Suggest</div>
              </div>

              <div className="h-[2px] w-8 bg-gradient-to-r from-[#ccff00] to-zinc-700" />

              <div className="p-2.5 rounded-xl bg-black border border-white/[0.1] text-center shadow-md">
                <div className="text-[10px] font-bold text-white font-mono">MySQL DB</div>
                <div className="text-[8px] text-zinc-400">Persistent</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.06] font-mono">
              <span className="text-[#ccff00]">Drag &amp; Drop Node Editor</span>
              <span>JWT Auth Secured</span>
            </div>
          </div>
        );

      case "snapchat-app":
        return (
          <div className="h-52 w-full bg-[#070707] p-5 flex flex-col justify-between border-b border-white/[0.08] relative overflow-hidden group-hover:border-[#ccff00]/40 transition-colors">
            <div className="absolute top-0 right-1/4 w-36 h-36 bg-[#ccff00]/10 rounded-full blur-2xl" />

            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
              <span className="flex items-center gap-2 text-white font-semibold font-mono text-[11px]">
                <MessageSquare className="w-4 h-4 text-[#ccff00]" />
                SnapChat / Real-Time Channel
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-white/[0.06] text-zinc-300 border border-white/[0.1] font-mono">
                Socket.IO
              </span>
            </div>

            {/* Chat Bubbles */}
            <div className="space-y-2.5 my-1 text-[11px]">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-zinc-800 text-[9px] flex items-center justify-center font-bold text-zinc-300">
                  U1
                </div>
                <div className="p-2.5 rounded-2xl rounded-tl-none bg-black/90 border border-white/[0.08] text-zinc-200 max-w-[80%]">
                  WebSocket connection established with sub-millisecond ping.
                </div>
              </div>

              <div className="flex items-start justify-end gap-2">
                <div className="p-2.5 rounded-2xl rounded-tr-none bg-[#ccff00]/15 border border-[#ccff00]/30 text-[#ccff00] max-w-[80%]">
                  Acknowledged! MongoDB synchronized.
                </div>
                <div className="w-6 h-6 rounded-full bg-[#ccff00] text-black text-[9px] flex items-center justify-center font-black">
                  AS
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-2 border-t border-white/[0.06] font-mono">
              <span className="text-[#ccff00] flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                Bidirectional Event Stream
              </span>
              <span>JWT &amp; Express APIs</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-52 w-full bg-zinc-900 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-[#ccff00]" />
          </div>
        );
    }
  };

  return (
    <article className="card-dark rounded-3xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group transition-all duration-300">
      {/* Top Graphic Mockup */}
      {renderVisualMockup()}

      {/* Content Area */}
      <div className="p-7 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#ccff00] uppercase tracking-wider">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-white/[0.05] text-zinc-300 border border-white/[0.08]">
                {project.badge}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ccff00] transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Key Features Bullet List */}
          <div className="space-y-2 mb-6">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Architectural Highlights:
            </div>
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 text-xs text-zinc-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00] mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>

          {/* Technologies Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-[11px] font-mono bg-black/60 text-zinc-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 border-t border-white/[0.08] flex items-center gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-[#ccff00]/40 transition-colors focus:outline-none"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>GitHub Repository</span>
            </a>
          ) : (
            <span className="text-[11px] font-mono text-zinc-500 italic">
              Repository Available Upon Request
            </span>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-black bg-[#ccff00] hover:bg-[#b8f000] transition-colors focus:outline-none shadow-md shadow-[#ccff00]/30"
              aria-label={`View live demo for ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3 stroke-[2.5]" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
