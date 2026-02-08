"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  href?: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  category,
  description,
  href = "#",
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={href}>
        <div className="glass rounded-2xl p-8 h-full flex flex-col relative overflow-hidden glass-hover">
          {/* Category Badge */}
          <span className="inline-block px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4 w-fit border border-cyan-500/30">
            {category}
          </span>

          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-cyan-400 font-medium">
            <span>View Case Study</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </div>

          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none rounded-2xl" />
        </div>
      </Link>
    </motion.div>
  );
}
