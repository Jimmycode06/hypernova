"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";

const navLinks = [
  { label: "Features", href: "/fluent-ai#features" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/support" },
];

export function FluentLogo() {
  return (
    <Link href="/fluent-ai" className="group inline-flex items-center gap-3" aria-label="Fluent AI home">
      <span className="fluent-logo" aria-hidden="true">F</span>
      <span className="text-lg font-semibold tracking-[-0.02em] text-white">Fluent AI</span>
    </Link>
  );
}

export default function FluentShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fluent-site min-h-screen bg-[#070b18] text-[#f7f9ff]">
      <header className="fixed inset-x-0 top-0 z-[60] border-b border-white/[.07] bg-[#070b18]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <FluentLogo />
          <nav aria-label="Fluent AI navigation" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-[#aeb8d0] transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <a href="https://apps.apple.com/app/id0000000000" className="fluent-button px-5 py-2.5 text-sm" aria-label="Download Fluent AI on the App Store">
              Download app
            </a>
          </nav>
          <button type="button" onClick={() => setOpen(!open)} className="rounded-xl border border-white/10 p-2.5 text-white md:hidden" aria-expanded={open} aria-controls="fluent-mobile-nav" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <nav id="fluent-mobile-nav" aria-label="Fluent AI mobile navigation" className="border-t border-white/[.07] bg-[#0b1020] px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-[#dbe2f3] hover:bg-white/5">{link.label}</Link>)}
            </div>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/[.08] bg-[#050812]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <FluentLogo />
            <nav aria-label="Fluent AI footer navigation" className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#98a4be]">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
              <Link href="/support" className="hover:text-white">Support</Link>
            </nav>
          </div>
          <p className="mt-10 border-t border-white/[.07] pt-7 text-sm text-[#69758f]">© 2026 Fluent AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
