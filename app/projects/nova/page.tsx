"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Camera, Check, Download, Scissors, Sparkles, Wand2 } from "lucide-react";
import { DotsBackground } from "@/components/ui/AnimatedBackground";
import GlassCard from "@/components/ui/GlassCard";
import NovaFooterLinks from "@/components/nova/NovaFooterLinks";

const steps = [
  { icon: Camera, title: "Add a photo", text: "Choose a clear, front-facing portrait in good light." },
  { icon: Sparkles, title: "Get tailored ideas", text: "Nova analyzes visible hair and face-framing details to suggest suitable looks." },
  { icon: Wand2, title: "Try different looks", text: "Explore cuts, colors, lengths, volume, and styling directly on your photo." },
  { icon: Scissors, title: "Prepare your appointment", text: "Save your favorites and use your stylist card to explain the result you want." },
];

const features = [
  "AI-assisted hairstyle analysis",
  "Cut, length, fringe, volume, and color recommendations",
  "Realistic virtual hairstyle try-ons",
  "Personalized visual projections",
  "A practical stylist reference card",
  "Try-on history saved on your device",
];

export default function NovaPage() {
  return (
    <div className="nova-light relative min-h-screen overflow-hidden px-4 pb-20 pt-32">
      <DotsBackground className="nova-dots" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#FA93FA]/15 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <section className="grid min-h-[68vh] items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FA93FA]/30 bg-[#FA93FA]/10 px-5 py-2 text-sm font-medium text-[#FA93FA]">
              <Sparkles className="h-4 w-4" /> AI hairstyle studio for iPhone
            </span>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl">
              Your next hairstyle, <span className="text-gradient">before the first cut.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Nova helps you discover cuts, lengths, volume, and colors that fit your photo. Explore realistic possibilities and arrive at the salon with a clear idea.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black">
                <Download className="h-5 w-5" /> Coming soon on the App Store
              </span>
              <Link href="#how-it-works" className="inline-flex items-center gap-2 rounded-full border border-[#4b2c55]/15 bg-white/70 px-7 py-4 font-medium text-[#34243a] shadow-sm transition hover:border-[#FA93FA]/60 hover:bg-white">
                Discover Nova <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#FA93FA]/35 to-[#983AD6]/20 blur-3xl" />
            <div className="relative rounded-[3rem] border border-[#4b2c55]/10 bg-white/80 p-5 shadow-[0_30px_90px_rgba(85,35,100,.18)] backdrop-blur-xl">
              <div className="rounded-[2.3rem] border border-[#4b2c55]/10 bg-gradient-to-b from-white to-[#f7eefa] p-7">
                <div className="mb-10 flex items-center justify-between text-xs text-gray-400"><span>Nova Studio</span><Sparkles className="h-4 w-4 text-[#FA93FA]" /></div>
                <div className="mx-auto flex aspect-[4/5] max-w-[16rem] items-end overflow-hidden rounded-[8rem_8rem_2rem_2rem] border border-[#4b2c55]/10 bg-gradient-to-b from-[#f9dffa] via-[#dda7df] to-[#9d5ba8] p-5">
                  <div className="w-full rounded-3xl bg-white/75 p-4 text-center shadow-lg backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#f3b5f1]">Your suggestion</p>
                    <p className="mt-2 text-lg font-semibold">Soft layered bob</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs text-gray-300">
                  {["Cut", "Color", "Style"].map((item) => <div key={item} className="rounded-xl border border-[#4b2c55]/10 bg-white/70 py-3">{item}</div>)}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="how-it-works" className="scroll-mt-28 py-24">
          <div className="mx-auto mb-12 max-w-2xl text-center"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FA93FA]">How it works</p><h2 className="text-4xl font-bold md:text-5xl">From portrait to salon-ready idea</h2></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => { const Icon = step.icon; return <GlassCard key={step.title} className="h-full" delay={index * 0.08}><span className="text-sm font-bold text-[#FA93FA]">0{index + 1}</span><Icon className="my-5 h-8 w-8 text-white" /><h3 className="mb-3 text-xl font-bold">{step.title}</h3><p className="leading-relaxed text-gray-400">{step.text}</p></GlassCard>; })}
          </div>
        </section>

        <section className="grid items-center gap-10 py-20 lg:grid-cols-2">
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#FA93FA]">Inside Nova</p><h2 className="text-4xl font-bold md:text-5xl">More confidence in every change</h2><p className="mt-5 text-lg leading-relaxed text-gray-400">Compare ideas at your own pace, keep the looks you love, and turn inspiration into something concrete for your stylist.</p></div>
          <GlassCard hover={false} className="bg-[#FA93FA]/5"><ul className="space-y-4">{features.map((feature) => <li key={feature} className="flex gap-3 text-gray-200"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FA93FA]/15"><Check className="h-4 w-4 text-[#FA93FA]" /></span>{feature}</li>)}</ul></GlassCard>
        </section>

        <section className="py-20">
          <div className="rounded-[2rem] border border-[#4b2c55]/10 bg-gradient-to-br from-white via-[#fff8ff] to-[#f3e4fb] p-8 text-center shadow-[0_24px_70px_rgba(93,42,108,.1)] md:p-14">
            <h2 className="text-3xl font-bold md:text-5xl">Meet Nova Pro</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">Unlock premium features and the AI generations included with your plan. Payments are handled by Apple, and the exact price and allowance are always shown in the app before purchase.</p>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-gray-500">Nova creates AI simulations that may differ from real-world results. It does not provide medical advice or an objective assessment of appearance.</p>
          </div>
        </section>

        <NovaFooterLinks />
      </div>
    </div>
  );
}
