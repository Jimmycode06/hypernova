"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "SugarOff",
    category: "iOS App",
    description: "Wellness app helping users track and reduce sugar intake with AI-powered insights and beautiful analytics.",
  },
  {
    title: "Plant Recognition AI",
    category: "AI • Mobile",
    description: "Advanced plant identification app using computer vision and machine learning to identify thousands of plant species instantly.",
  },
  {
    title: "Auto Parts E-commerce",
    category: "Shopify",
    description: "High-performance Shopify store with custom features, advanced filtering, and seamless checkout experience.",
  },
  {
    title: "Productivity AI Tool",
    category: "SaaS",
    description: "Smart productivity platform leveraging AI to automate workflows and boost team efficiency by 10x.",
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming ideas into stunning digital experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
              href="/projects"
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button href="/projects" variant="outline">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
