"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { GridBackground } from "@/components/ui/AnimatedBackground";
import { Search } from "lucide-react";

const allProjects = [
  {
    title: "SugarOff",
    category: "iOS App",
    description: "Wellness app helping users track and reduce sugar intake with AI-powered insights and beautiful analytics.",
    tags: ["Apps", "AI"],
  },
  {
    title: "Plant Recognition AI",
    category: "AI • Mobile",
    description: "Advanced plant identification app using computer vision and machine learning to identify thousands of plant species instantly.",
    tags: ["Apps", "AI"],
  },
  {
    title: "Auto Parts E-commerce",
    category: "Shopify",
    description: "High-performance Shopify store with custom features, advanced filtering, and seamless checkout experience.",
    tags: ["Web", "E-commerce"],
  },
  {
    title: "Productivity AI Tool",
    category: "SaaS",
    description: "Smart productivity platform leveraging AI to automate workflows and boost team efficiency by 10x.",
    tags: ["SaaS", "AI"],
  },
  {
    title: "Fashion Marketplace",
    category: "E-commerce",
    description: "Modern marketplace connecting fashion designers with customers, featuring real-time inventory and payment processing.",
    tags: ["Web", "E-commerce"],
  },
  {
    title: "Meditation & Mindfulness",
    category: "iOS App",
    description: "Beautiful meditation app with guided sessions, progress tracking, and personalized recommendations.",
    tags: ["Apps"],
  },
  {
    title: "AI Content Generator",
    category: "SaaS • AI",
    description: "Advanced content creation platform using GPT to generate marketing copy, blog posts, and social media content.",
    tags: ["SaaS", "AI"],
  },
  {
    title: "Restaurant Menu Builder",
    category: "Web App",
    description: "Intuitive drag-and-drop menu builder for restaurants with QR code generation and online ordering integration.",
    tags: ["Web", "SaaS"],
  },
];

const categories = ["All", "Apps", "SaaS", "Web", "AI", "E-commerce"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.tags.includes(selectedCategory);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4">
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">All Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of innovative digital products and solutions
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="glass rounded-2xl p-4 flex items-center gap-4 max-w-2xl mx-auto">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-gray-900 shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                    : "glass text-gray-300 hover:bg-white/10 hover:border-cyan-500/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-center mb-8"
        >
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
        </motion.p>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                description={project.description}
                delay={index * 0.05}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="glass rounded-2xl p-12 inline-block">
              <p className="text-xl text-gray-400">
                No projects found matching your criteria
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
