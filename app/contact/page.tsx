"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { Aurora } from "@/components/ui/AnimatedBackground";
import { Mail, Github, Twitter, Linkedin, Send, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:contact@hypernovation.com",
    icon: Mail,
    handle: "contact@hypernovation.com",
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    handle: "@hypernovation",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
    handle: "@hypernovation",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    handle: "hypernovation",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4">
      <Aurora />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Let&apos;s Work Together</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard hover={false}>
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-[#FA93FA]/20 border border-[#FA93FA]/30 rounded-xl text-[#FA93FA]"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FA93FA]/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FA93FA]/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FA93FA]/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  variant="primary"
                  className="w-full"
                  onClick={undefined}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Location */}
            <GlassCard hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FA93FA]/10 flex items-center justify-center border border-[#FA93FA]/30 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#FA93FA]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-400">
                    Working globally, delivering excellence worldwide
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard hover={false}>
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 glass rounded-xl glass-hover group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#FA93FA]/10 flex items-center justify-center border border-[#FA93FA]/30 group-hover:border-[#FA93FA]/60 transition-all">
                        <Icon className="w-5 h-5 text-[#FA93FA]" />
                      </div>
                      <div>
                        <div className="text-white font-medium group-hover:text-[#FA93FA] transition-colors">
                          {social.name}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </GlassCard>

            {/* Availability */}
            <GlassCard hover={false}>
              <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Currently accepting new projects for 2026. Let&apos;s create something amazing together.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-medium">Available for work</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FA93FA]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#983AD6]/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
