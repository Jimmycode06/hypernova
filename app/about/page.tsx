"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { DotsBackground } from "@/components/ui/AnimatedBackground";
import { Brain, Code, Palette, Rocket, Target, Zap } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Years Experience", value: "5+" },
  { label: "Technologies Mastered", value: "20+" },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge technology and creative solutions.",
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description: "Fast delivery without compromising on excellence and attention to detail.",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Leveraging artificial intelligence to create smarter, more efficient products.",
  },
  {
    icon: Palette,
    title: "Design Excellence",
    description: "Beautiful interfaces that combine aesthetics with intuitive user experiences.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Scalable, maintainable codebases built with industry best practices.",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    description: "Building products designed to scale and grow with your business.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4">
      <DotsBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">About Hypernovation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building the next generation of digital products through innovation, design, and cutting-edge technology.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <GlassCard hover={false} className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Hypernovation, we believe in the transformative power of technology. Our mission is to craft digital experiences that not only meet today&apos;s needs but anticipate tomorrow&apos;s possibilities. We combine artificial intelligence, premium design, and innovative development to create products that are not just functional, but extraordinary.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From iOS apps to SaaS platforms, from e-commerce stores to AI-powered tools, we approach every project with the same commitment to excellence, innovation, and client success.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <GlassCard key={stat.label} delay={index * 0.1} hover={false}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Our Values</span>
            </h2>
            <p className="text-xl text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <GlassCard key={value.title} delay={index * 0.1} hover={false}>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 mb-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.div>

        {/* Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <GlassCard hover={false} className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Expertise</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We specialize in creating premium digital products across multiple platforms and technologies. Our expertise spans artificial intelligence integration, native iOS development, full-stack SaaS platforms, custom Shopify solutions, and high-end UI/UX design. Every project benefits from our holistic approach, combining technical excellence with stunning visual design.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {["AI & ML", "iOS & Swift", "React & Next.js", "Node.js", "TypeScript", "Shopify", "Figma", "Python", "TailwindCSS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 glass rounded-full text-sm text-cyan-400 border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
