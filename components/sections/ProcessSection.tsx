"use client";

import { motion } from "framer-motion";
import { Lightbulb, Pencil, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Idea & Strategy",
    description: "Understanding your vision and crafting a strategic roadmap for success.",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Design & Prototyping",
    description: "Creating beautiful interfaces and interactive prototypes that bring ideas to life.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development & AI Integration",
    description: "Building robust applications with cutting-edge technology and AI capabilities.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Growth",
    description: "Deploying your product and optimizing for maximum impact and user growth.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">The Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to launch, every step optimized for excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-cyan-500/50" />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full lg:w-auto">
                    <div className="glass rounded-2xl p-8 glass-hover">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                            <Icon className="w-8 h-8 text-cyan-400" />
                          </div>
                          <div className="absolute inset-0 bg-cyan-400/20 blur-xl" />
                        </div>
                        <div className="flex-1">
                          <div className="text-cyan-400 font-bold text-sm mb-2">
                            STEP {step.number}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-500 border-4 border-[#0B1020] shadow-[0_0_20px_rgba(34,211,238,0.5)]" />

                  {/* Spacer */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
