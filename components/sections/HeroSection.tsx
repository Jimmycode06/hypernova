"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import VideoPlayer from "@/components/ui/VideoPlayer";
import LogoCloud from "./LogoCloud";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full"
          >
            <div className="w-6 h-6 rounded-md gradient-primary flex items-center justify-center gradient-glow">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white/80 text-sm font-medium">
              Used by founders. Loved by devs.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-tight"
          >
            <div className="text-gradient">Your Vision</div>
            <div className="text-gradient">Our Digital Reality.</div>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            We turn bold ideas into modern designs that don&apos;t just look amazing, they grow your business fast.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center pt-4"
          >
            <div className="relative">
              {/* Outer glass wrapper */}
              <div className="absolute -inset-0.5 glass rounded-full blur-sm" />
              {/* Button */}
              <a
                href="/contact"
                className="relative flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all group"
              >
                <span>Book a 15-min call</span>
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Section */}
      <div className="relative z-10 w-full -mt-[150px]">
        <VideoPlayer
          hlsUrl="https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8"
          fallbackUrl="/_videos/v1/f0c78f536d5f21a047fb7792723a36f9d647daa1"
        />
      </div>

      {/* Logo Cloud Section */}
      <div className="relative z-20 w-full mt-8">
        <LogoCloud />
      </div>
    </section>
  );
}
