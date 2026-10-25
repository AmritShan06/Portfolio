import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Mail } from "lucide-react";

export function ContactCta() {
  const { personal } = portfolioData;

  return (
    <section className="py-16 sm:py-20 bg-transparent border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute inset-0 lime-glow-bottom opacity-40 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Let&apos;s build something meaningful
        </h2>
        <p className="text-sm text-zinc-400 mb-8">
          Open to collaborations, internships, and conversations about full-stack and AI systems.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-black bg-[#ccff00] hover:bg-[#b8f000] shadow-[0_0_25px_rgba(204,255,0,0.35)] transition-all"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white border border-white/[0.12] bg-white/[0.05] hover:bg-white/[0.08] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#ccff00]" />
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
