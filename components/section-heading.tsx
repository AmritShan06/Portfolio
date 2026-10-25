import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  titleAccent,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4",
            "bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/25 shadow-[0_0_15px_rgba(204,255,0,0.15)] backdrop-blur-sm"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}{" "}
        {titleAccent && (
          <span className="text-[#ccff00] drop-shadow-[0_0_25px_rgba(204,255,0,0.4)]">
            {titleAccent}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      {isCenter && (
        <div className="w-14 h-1 bg-gradient-to-r from-transparent via-[#ccff00] to-transparent rounded-full mx-auto mt-6 opacity-75" />
      )}
    </div>
  );
}
