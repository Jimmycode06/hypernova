"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Incredible design and execution. Hypernovation transformed our vision into a stunning reality.",
    author: "Sarah Chen",
    role: "CEO, TechVenture",
  },
  {
    quote: "Fast, modern, and extremely professional. The attention to detail is unmatched.",
    author: "Michael Roberts",
    role: "Founder, StartupLab",
  },
  {
    quote: "Working with Hypernovation was seamless. They delivered beyond our expectations.",
    author: "Emma Davis",
    role: "Product Lead, InnovateCo",
  },
];

export default function TestimonialsSection() {
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
            <span className="text-gradient">Client Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by forward-thinking companies worldwide
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} delay={index * 0.1} hover={false}>
              <div className="relative">
                <Quote className="w-10 h-10 text-cyan-400/30 mb-6" />
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
