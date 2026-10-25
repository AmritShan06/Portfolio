"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  Copy,
  Check,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { GithubIcon, LeetCodeIcon } from "@/components/icons";

export function ContactForm() {
  const { personal } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mailtoFallback, setMailtoFallback] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setMailtoFallback(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          data.error ||
            "Could not send your message. Please use the email button below."
        );
        if (data.mailto) setMailtoFallback(data.mailto);
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please email directly using the button below.");
      setMailtoFallback(
        `mailto:${personal.email}?subject=${encodeURIComponent("Portfolio contact")}`
      );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
      <div
        className="lg:col-span-5 space-y-5"
      >
        <div className="card-dark rounded-3xl p-6 border border-white/[0.08]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase text-zinc-400">Email</h4>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm font-bold text-white hover:text-[#ccff00] break-all"
              >
                {personal.email}
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-full text-xs font-mono bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#ccff00]" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold bg-[#ccff00] text-black"
            >
              Open mail
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="card-dark rounded-2xl p-4 border border-white/[0.08]">
            <GraduationCap className="w-4 h-4 text-[#ccff00] mb-2" />
            <p className="text-[10px] font-mono text-zinc-500 uppercase">Institution</p>
            <p className="text-xs font-bold text-white">{personal.college}</p>
          </div>
          <div className="card-dark rounded-2xl p-4 border border-white/[0.08]">
            <MapPin className="w-4 h-4 text-[#ccff00] mb-2" />
            <p className="text-[10px] font-mono text-zinc-500 uppercase">Location</p>
            <p className="text-xs font-bold text-white">{personal.location}</p>
          </div>
        </div>

        <div className="card-dark rounded-2xl p-5 border border-white/[0.08] space-y-2">
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05]"
          >
            <span className="flex items-center gap-2 text-xs text-zinc-200">
              <GithubIcon className="w-4 h-4 text-[#ccff00]" />
              GitHub
            </span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500" />
          </a>
          <a
            href={personal.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05]"
          >
            <span className="flex items-center gap-2 text-xs text-zinc-200">
              <LeetCodeIcon className="w-4 h-4 text-[#ccff00]" />
              LeetCode
            </span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500" />
          </a>
        </div>
      </div>

      <div
        className="lg:col-span-7 card-dark rounded-3xl p-6 sm:p-8 border border-white/[0.08]"
      >
        <h3 className="text-lg font-bold text-white mb-1">Send a message</h3>
        <p className="text-xs text-zinc-500 mb-6">
          Messages are delivered when email delivery is configured on the server; otherwise use direct email.
        </p>

        {status === "success" ? (
          <div className="p-6 rounded-2xl bg-black border border-[#ccff00]/40 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-[#ccff00] mx-auto" />
            <p className="text-sm text-zinc-300">Thank you — your message was received.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="px-4 py-2 rounded-full text-xs font-bold bg-[#ccff00] text-black"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <input
              type="text"
              name="honeypot"
              aria-hidden
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />

            {status === "error" && (
              <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-xs text-rose-200 flex gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <p>{errorMessage}</p>
                  {(mailtoFallback || personal.email) && (
                    <a
                      href={mailtoFallback || `mailto:${personal.email}`}
                      className="inline-block mt-2 text-[#ccff00] font-bold underline"
                    >
                      Open email client instead
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-1">
                  Name *
                </label>
                <input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#ccff00] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 rounded-full font-bold text-sm text-black bg-[#ccff00] hover:bg-[#b8f000] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
