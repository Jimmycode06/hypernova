"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { DotsBackground } from "@/components/ui/AnimatedBackground";
import { TrendingDown, Award, Zap, Heart } from "lucide-react";

const timeline = [
  {
    days: "3 Days",
    value: 15,
    description: "Initial adjustment",
  },
  {
    days: "7 Days",
    value: 40,
    description: "Habit forming",
  },
  {
    days: "30 Days",
    value: 85,
    description: "Major progress",
  },
];

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Sugar Intake",
    description: "Track and progressively reduce your daily sugar consumption",
  },
  {
    icon: Award,
    title: "Build Healthy Habits",
    description: "Create lasting changes with our proven 30-day methodology",
  },
  {
    icon: Zap,
    title: "Boost Your Energy",
    description: "Experience sustained energy levels without sugar crashes",
  },
  {
    icon: Heart,
    title: "Improve Wellbeing",
    description: "Better sleep, clearer skin, and overall health improvements",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4">
      <DotsBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            You have great potential
            <br />
            <span className="text-gradient">to crush your goal</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands who have successfully reduced their sugar intake with SugarOff
          </p>
        </motion.div>

        {/* Main Chart Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <GlassCard hover={false} className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Your Sugar Reduction Journey
            </h2>

            {/* Progress Chart */}
            <div className="relative h-64 mb-8">
              {/* Grid Background */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-px bg-white/5" />
                ))}
              </div>

              {/* Chart Line */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                
                {/* Area under the curve */}
                <path
                  d="M 30 150 L 30 150 Q 80 140, 130 100 Q 180 60, 270 30 L 270 200 L 30 200 Z"
                  fill="url(#gradient)"
                />
                
                {/* Line */}
                <path
                  d="M 30 150 Q 80 140, 130 100 Q 180 60, 270 30"
                  stroke="#22D3EE"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Points */}
                <circle cx="30" cy="150" r="6" fill="#334155" stroke="#22D3EE" strokeWidth="2" />
                <circle cx="130" cy="100" r="6" fill="#334155" stroke="#22D3EE" strokeWidth="2" />
                <circle cx="270" cy="30" r="8" fill="#22D3EE" className="animate-pulse" />
                
                {/* Trophy icon at end */}
                <g transform="translate(266, 24)">
                  <circle r="10" fill="#EA580C" />
                  <text x="0" y="4" textAnchor="middle" fill="white" fontSize="12">🏆</text>
                </g>
              </svg>

              {/* Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                {timeline.map((point, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm font-semibold text-white mb-1">
                      {point.days}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-gray-300 leading-relaxed">
                Based on SugarOff&apos;s user data, sugar reduction is usually gradual at first, but after{" "}
                <span className="text-cyan-400 font-semibold">7 days</span>, you can{" "}
                <span className="text-cyan-400 font-semibold">cut cravings like crazy!</span>
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">What You&apos;ll Experience</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <GlassCard key={benefit.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <GlassCard hover={false} className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Your 30-Day Journey</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                  <span className="text-2xl font-bold text-cyan-400">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Days 1-3: Getting Started</h3>
                  <p className="text-gray-400">
                    Your body begins adjusting. You&apos;ll start tracking your sugar intake and become more aware of hidden sugars in your diet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                  <span className="text-2xl font-bold text-cyan-400">7</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Days 4-7: Breaking Through</h3>
                  <p className="text-gray-400">
                    Cravings start to diminish significantly. Your energy levels stabilize, and you&apos;ll notice improved focus and mood.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                  <span className="text-2xl font-bold text-cyan-400">30</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Days 8-30: Transformation</h3>
                  <p className="text-gray-400">
                    New habits solidify. You&apos;ll experience sustained energy, better sleep, clearer skin, and a genuine preference for healthier choices.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button href="/projects/sugaroff-support" variant="primary">
              Get Started Today
            </Button>
            <Button href="/projects/sugaroff-support" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
