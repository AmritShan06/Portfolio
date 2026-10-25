"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import {
  Mail,
  GraduationCap,
  MapPin,
  Copy,
  Check,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LeetCodeIcon } from "@/components/icons";
import { motion } from "framer-motion";

export function Contact() {
  const { personal } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

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
          data.error || "Failed to deliver message. Please reach out directly via email."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "A network error occurred. Please click the direct email button below."
      );
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="Start A Conversation"
          title="Have an idea?"
          titleAccent="Let's build something meaningful."
          subtitle="Whether you're looking to discuss AI systems, full-stack development, student collaborations, or engineering opportunities, I'm always eager to connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card */}
            <div className="card-dark rounded-3xl p-7 border border-white/[0.08] relative overflow-hidden">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Direct Email
                  </h4>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-[#ccff00] transition-colors break-all"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-mono font-medium bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#ccff00]" />
                      <span className="text-[#ccff00] font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-xs font-mono font-bold bg-[#ccff00] text-black hover:bg-[#b8f000] shadow-sm shadow-[#ccff00]/30 transition-colors"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Institution & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-dark rounded-2xl p-5 border border-white/[0.08]">
                <div className="flex items-center gap-2.5 mb-2 text-zinc-400 text-xs">
                  <GraduationCap className="w-4 h-4 text-[#ccff00]" />
                  <span className="font-mono uppercase tracking-wider text-[10px]">
                    Institution
                  </span>
                </div>
                <div className="text-xs font-bold text-white line-clamp-1">
                  {personal.college}
                </div>
              </div>

              <div className="card-dark rounded-2xl p-5 border border-white/[0.08]">
                <div className="flex items-center gap-2.5 mb-2 text-zinc-400 text-xs">
                  <MapPin className="w-4 h-4 text-[#ccff00]" />
                  <span className="font-mono uppercase tracking-wider text-[10px]">
                    Location
                  </span>
                </div>
                <div className="text-xs font-bold text-white">
                  {personal.location}
                </div>
              </div>
            </div>

            {/* Social & Coding Network Profiles */}
            <div className="card-dark rounded-3xl p-6 border border-white/[0.08]">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                Verified Platforms
              </div>
              <div className="flex flex-col gap-2.5">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.07] border border-white/[0.05] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[#ccff00]" />
                    <span className="text-xs font-medium text-zinc-200">
                      GitHub (@{personal.githubUsername})
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#ccff00] transition-colors" />
                </a>

                <a
                  href={personal.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.07] border border-white/[0.05] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LeetCodeIcon className="w-4 h-4 text-[#ccff00]" />
                    <span className="text-xs font-medium text-zinc-200">
                      LeetCode (AmritShan)
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#ccff00] transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 card-dark rounded-3xl p-7 sm:p-9 border border-white/[0.08] relative"
          >
            <h3 className="text-xl font-bold text-white mb-1.5">
              Send a Direct Message
            </h3>
            <p className="text-xs text-zinc-400 mb-6 font-normal">
              Fill out this form or send an email. All inquiries receive prompt replies.
            </p>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-black border border-[#ccff00]/40 text-center space-y-4">
                <div className="w-13 h-13 rounded-full bg-[#ccff00]/20 text-[#ccff00] flex items-center justify-center mx-auto p-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                  Thank you for reaching out. I have received your message and will get back to you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-[#ccff00] text-black hover:bg-[#b8f000] transition-colors shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="honeypot"
                  aria-hidden="true"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) =>
                    setFormData({ ...formData, honeypot: e.target.value })
                  }
                />

                {status === "error" && (
                  <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/50 text-xs text-rose-300 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-zinc-400 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-black border border-white/[0.1] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-zinc-400 mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-black border border-white/[0.1] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-zinc-400 mb-1.5"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, query, or technical opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-2xl bg-black border border-white/[0.1] text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-full font-bold text-xs text-black bg-[#ccff00] hover:bg-[#b8f000] shadow-[0_0_25px_rgba(204,255,0,0.35)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 stroke-[2.5]" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
