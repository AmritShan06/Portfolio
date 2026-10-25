import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NextStepCtaProps {
  label: string;
  href: string;
  description?: string;
}

export function NextStepCta({ label, href, description }: NextStepCtaProps) {
  return (
    <section className="border-t border-white/[0.08] bg-[#05030f]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          {description && (
            <p className="text-sm text-zinc-400 mb-4">{description}</p>
          )}
          <Link
            href={href}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black bg-[#ccff00] hover:bg-[#b8f000] shadow-[0_0_25px_rgba(204,255,0,0.35)] transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00]"
          >
            <span>{label}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
