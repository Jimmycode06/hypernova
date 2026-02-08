"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import { Brain, Smartphone, Palette, Rocket, ShoppingCart, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Cutting-edge artificial intelligence solutions that transform business processes and unlock new possibilities.",
  },
  {
    icon: Smartphone,
    title: "iOS App Development",
    description: "Native iOS applications with stunning design and seamless user experiences that users love.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Premium interface design that combines aesthetics with functionality for exceptional user experiences.",
  },
  {
    icon: Rocket,
    title: "SaaS Product Creation",
    description: "Full-stack SaaS platforms built with scalability, security, and modern architecture in mind.",
  },
  {
    icon: ShoppingCart,
    title: "Shopify & E-commerce",
    description: "High-converting online stores with custom themes and optimized shopping experiences.",
  },
  {
    icon: Lightbulb,
    title: "Branding & Launch Strategy",
    description: "Complete brand identity and go-to-market strategies that make your product stand out.",
  },
];

export default function ServicesSection() {
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
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions from concept to launch
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
