"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { DotsBackground } from "@/components/ui/AnimatedBackground";
import { Shield, Lock, Database, Users, FileText, Mail, AlertCircle, RefreshCw } from "lucide-react";
import Link from "next/link";

const policySection = [
  {
    icon: Database,
    title: "1. Information We Collect",
    content: "Sugar Off does not collect, store, or share any personally identifiable information. The app is designed to work without requiring an account, email address, or name.",
  },
  {
    icon: Lock,
    title: "2. Data Stored on Your Device",
    content: "All progress data (such as streaks, challenge completion, and app usage) is stored locally on your device. We do not have access to this information.",
  },
  {
    icon: FileText,
    title: "3. Payments and Subscriptions",
    content: "Sugar Off offers optional in-app purchases and subscriptions processed securely through Apple's App Store. We do not collect or store any payment information. All transactions are handled directly by Apple.",
  },
  {
    icon: AlertCircle,
    title: "4. Third-Party Services",
    content: "Sugar Off does not use third-party analytics, advertising, or tracking tools. No user data is shared with external services.",
  },
  {
    icon: Shield,
    title: "5. Data Sharing",
    content: "We do not sell, rent, or share your personal data with anyone.",
  },
  {
    icon: Users,
    title: "6. Children's Privacy",
    content: "Sugar Off is not intended for children under the age of 13. We do not knowingly collect any personal information from children.",
  },
  {
    icon: RefreshCw,
    title: "7. Changes to This Policy",
    content: "We may update this Privacy Policy if needed. Any changes will be posted on this page.",
  },
  {
    icon: Mail,
    title: "8. Contact",
    content: "If you have any questions about this Privacy Policy, you can contact us at:",
    email: "support@sugaroff.app",
  },
];

export default function SugarOffPrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4">
      <DotsBackground />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full mb-6">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Sugar Off Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-400">
            Last updated: February 2026
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <GlassCard hover={false}>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sugar Off (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) respects your privacy. This Privacy Policy explains how your information is handled when you use the Sugar Off application.
            </p>
          </GlassCard>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-6 mb-12">
          {policySection.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
              >
                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 flex-shrink-0 mt-1">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-3">
                        {section.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                      {section.email && (
                        <div className="mt-4">
                          <a
                            href={`mailto:${section.email}`}
                            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            {section.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <GlassCard hover={false} className="bg-cyan-500/5">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Your Privacy Matters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 mx-auto mb-4">
                  <Lock className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="font-bold text-white mb-2">No Data Collection</h4>
                <p className="text-gray-400 text-sm">
                  Zero personal information collected
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 mx-auto mb-4">
                  <Database className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Local Storage Only</h4>
                <p className="text-gray-400 text-sm">
                  All data stays on your device
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 mx-auto mb-4">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="font-bold text-white mb-2">No Third Parties</h4>
                <p className="text-gray-400 text-sm">
                  No analytics or tracking tools
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/projects/sugaroff-support" variant="outline">
            Back to Support
          </Button>
          <Link href="mailto:support@sugaroff.app">
            <Button variant="primary">
              Contact Us
              <Mail className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
