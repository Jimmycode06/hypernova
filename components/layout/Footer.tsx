"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Sparkles } from "lucide-react";

const footerLinks = {
  Company: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  Services: [
    { name: "AI & Automation", href: "/projects" },
    { name: "iOS Development", href: "/projects" },
    { name: "UI/UX Design", href: "/projects" },
    { name: "SaaS Products", href: "/projects" },
  ],
  Social: [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Email", href: "mailto:contact@hypernovation.com", icon: Mail },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl" />
              </div>
              <span className="text-xl font-bold text-gradient">
                Hypernovation
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the next generation of digital products with AI, design, and innovation.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {footerLinks.Social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Hypernovation. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
}
