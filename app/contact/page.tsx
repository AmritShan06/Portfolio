import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { NextStepCta } from "@/components/layout/next-step-cta";

export const metadata: Metadata = {
  title: "Contact | Amritanshu Shandilya",
  description:
    "Contact Amritanshu Shandilya — email, GitHub, LeetCode, and message form for collaborations and opportunities.",
  openGraph: {
    title: "Contact Amritanshu Shandilya",
    url: `${portfolioData.personal.siteUrl}/contact`,
  },
  alternates: { canonical: `${portfolioData.personal.siteUrl}/contact` },
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="Connect"
          title="Let's"
          titleAccent="Talk"
          subtitle="Reach out for collaborations, internships, or conversations about full-stack engineering and AI systems."
        />
        <ContactForm />
      </div>
      <NextStepCta label="Return Home" href="/" />
    </div>
  );
}
