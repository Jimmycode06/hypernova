"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { DotsBackground } from "@/components/ui/AnimatedBackground";
import { Mail, MessageCircle, FileText, HelpCircle, Bug, Lightbulb } from "lucide-react";
import Link from "next/link";

const supportTopics = [
  {
    icon: HelpCircle,
    title: "General Questions",
    description: "Learn how to use SugarOff and track your sugar intake effectively.",
  },
  {
    icon: Bug,
    title: "Report a Bug",
    description: "Found an issue? Let us know so we can fix it quickly.",
  },
  {
    icon: Lightbulb,
    title: "Feature Request",
    description: "Have an idea? Share your suggestions for improving SugarOff.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Access guides, tutorials, and best practices for using the app.",
  },
];

const faqs = [
  {
    question: "How do I track my daily sugar intake?",
    answer: "Simply scan food barcodes or search our database to add items. SugarOff will automatically calculate your daily sugar consumption.",
  },
  {
    question: "Can I set custom sugar goals?",
    answer: "Yes! Navigate to Settings > Goals to customize your daily sugar intake targets based on your health objectives.",
  },
  {
    question: "Is my data synced across devices?",
    answer: "Absolutely! Your data is securely synced via iCloud, so you can access it on all your Apple devices.",
  },
  {
    question: "How do I reset my progress?",
    answer: "Go to Settings > Data Management > Reset Progress. Note that this action cannot be undone.",
  },
];

export default function SugarOffSupportPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4">
      <DotsBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 glass rounded-full mb-6">
            <span className="text-cyan-400 font-medium">SugarOff Support</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">How Can We Help?</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get support for the SugarOff app - your wellness companion for tracking sugar intake
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto"
        >
          <Link href="mailto:support@sugaroff.app">
            <GlassCard className="h-full group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/60 transition-all flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    Email Support
                  </h3>
                  <p className="text-gray-400">
                    support@sugaroff.app
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Response within 24-48 hours
                  </p>
                </div>
              </div>
            </GlassCard>
          </Link>

          <Link href="mailto:feedback@sugaroff.app">
            <GlassCard className="h-full group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/60 transition-all flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    Send Feedback
                  </h3>
                  <p className="text-gray-400">
                    feedback@sugaroff.app
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    We&apos;d love to hear from you
                  </p>
                </div>
              </div>
            </GlassCard>
          </Link>
        </motion.div>

        {/* Support Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Browse by Topic</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <GlassCard key={topic.title} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 mx-auto mb-4">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {topic.description}
                    </p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <GlassCard key={index} delay={index * 0.1} hover={false}>
                <h3 className="text-xl font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* App Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard hover={false}>
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">About SugarOff</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                SugarOff is a comprehensive wellness app designed to help you track and reduce your sugar intake. With AI-powered insights, beautiful analytics, and an intuitive interface, SugarOff makes it easy to take control of your health and achieve your wellness goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <span className="px-4 py-2 glass rounded-full text-sm text-cyan-400 border-cyan-500/30">
                  iOS App
                </span>
                <span className="px-4 py-2 glass rounded-full text-sm text-cyan-400 border-cyan-500/30">
                  AI-Powered
                </span>
                <span className="px-4 py-2 glass rounded-full text-sm text-cyan-400 border-cyan-500/30">
                  Health & Wellness
                </span>
                <span className="px-4 py-2 glass rounded-full text-sm text-cyan-400 border-cyan-500/30">
                  iCloud Sync
                </span>
              </div>
              <div className="pt-6">
                <Button href="/contact" variant="outline">
                  Need More Help? Contact Us
                </Button>
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
