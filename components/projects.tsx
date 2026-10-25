"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { motion } from "framer-motion";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          badge="Featured Engineering Work"
          title="Featured"
          titleAccent="Projects"
          subtitle="Production-oriented applications spanning AI retrieval augmented generation, drag-and-drop system design, and real-time distributed communication."
        />

        {/* Responsive Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex"
            >
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
