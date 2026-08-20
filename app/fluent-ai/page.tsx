import Link from "next/link";
import { ArrowRight, Check, MessageCircleMore, Mic2, Sparkles, TrendingUp } from "lucide-react";
import FluentShell from "@/components/fluent/FluentShell";

const features = [
  { icon: MessageCircleMore, title: "Realistic AI conversations", text: "Practice the language you want to use in natural, low-pressure conversations built around everyday situations." },
  { icon: Sparkles, title: "Personalized corrections", text: "Get clear, useful feedback that helps you notice mistakes, improve phrasing, and keep the conversation moving." },
  { icon: Mic2, title: "Practice at your level", text: "Sessions adapt to your ability so every exchange feels challenging, achievable, and relevant." },
  { icon: TrendingUp, title: "Daily speaking progress", text: "Build a consistent speaking habit and see your confidence grow one conversation at a time." },
];

export default function FluentAIPage() {
  return (
    <FluentShell>
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
        <div className="fluent-orb fluent-orb-one" /><div className="fluent-orb fluent-orb-two" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <p className="fluent-eyebrow">Your AI speaking partner</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.4rem]">Speak with confidence <span className="fluent-gradient-text">from day one.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#b6c1d8] sm:text-xl">Fluent AI turns language practice into natural conversation. Speak freely, get personalized corrections, and build real confidence at your own pace.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="https://apps.apple.com/app/id0000000000" className="fluent-button px-7 py-4" aria-label="Download Fluent AI on the App Store">Download on the App Store <ArrowRight className="h-4 w-4" /></a>
              <Link href="#features" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-medium text-white transition hover:border-white/30 hover:bg-white/5">Explore features</Link>
            </div>
            <p className="mt-4 text-xs text-[#64708a]">App Store link placeholder — replace <code>id0000000000</code> with the live app ID.</p>
          </div>

          <div className="relative mx-auto w-full max-w-lg" aria-label="Fluent AI conversation preview">
            <div className="absolute inset-8 rounded-full bg-[#4f7cff]/20 blur-3xl" />
            <div className="relative rounded-[2.2rem] border border-white/10 bg-[#0d1325]/90 p-5 shadow-[0_32px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/[.07] pb-5"><div><p className="text-sm font-semibold text-white">Café conversation</p><p className="mt-1 text-xs text-[#74819b]">Spanish · Intermediate</p></div><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5680ff]/15 text-[#83a0ff]"><Mic2 className="h-5 w-5" /></span></div>
              <div className="space-y-4 py-7">
                <div className="mr-10 rounded-2xl rounded-tl-sm bg-white/[.06] p-4 text-sm leading-6 text-[#dbe3f3]">¿Qué te gustaría pedir hoy?</div>
                <div className="ml-10 rounded-2xl rounded-tr-sm bg-gradient-to-br from-[#4169e8] to-[#7558df] p-4 text-sm leading-6 text-white">Me gustaría un café con leche, por favor.</div>
              </div>
              <div className="rounded-2xl border border-[#4cd6c0]/20 bg-[#4cd6c0]/[.07] p-4"><div className="flex items-center gap-2 text-sm font-semibold text-[#70ead5]"><Check className="h-4 w-4" /> Natural phrasing</div><p className="mt-2 text-xs leading-5 text-[#9eb6b7]">Great sentence. Your word choice is polite and sounds natural.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-24 border-y border-white/[.07] bg-[#090e1c] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="fluent-eyebrow">Practice that meets you where you are</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">A better way to find your voice.</h2></div><div className="mt-14 grid gap-5 md:grid-cols-2">{features.map(({icon:Icon,title,text}) => <article key={title} className="fluent-panel p-7 sm:p-9"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#527aff]/15 text-[#8aa6ff]"><Icon className="h-6 w-6" /></span><h3 className="mt-7 text-xl font-semibold text-white sm:text-2xl">{title}</h3><p className="mt-3 max-w-lg leading-7 text-[#9eabc4]">{text}</p></article>)}</div></div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto max-w-5xl rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#172348] to-[#10152a] p-8 text-center shadow-2xl sm:p-16"><p className="fluent-eyebrow">Support when you need it</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Questions about Fluent AI?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#b6c1d8]">Find answers about conversations, voice recognition, subscriptions, purchases, and managing your data.</p><Link href="/support" className="fluent-button mt-8 px-7 py-4">Visit Fluent AI Support <ArrowRight className="h-4 w-4" /></Link></div></section>
    </FluentShell>
  );
}
