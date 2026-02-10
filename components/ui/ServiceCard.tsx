"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass rounded-2xl p-8 relative overflow-hidden glass-hover group"
    >
      {/* Icon with Glow */}
      <div className="relative mb-6 w-fit">
        <div className="w-16 h-16 rounded-2xl bg-[#FA93FA]/10 flex items-center justify-center border border-[#FA93FA]/30 group-hover:border-[#FA93FA]/60 transition-all">
          <Icon className="w-8 h-8 text-[#FA93FA]" />
        </div>
        <div className="absolute inset-0 bg-[#FA93FA]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FA93FA] transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FA93FA]/5 via-transparent to-[#983AD6]/5 pointer-events-none" />
    </motion.div>
  );
}
