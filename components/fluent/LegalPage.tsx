import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";
import FluentShell from "./FluentShell";

export function LegalSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="fluent-panel scroll-mt-28 p-6 sm:p-8">
      <h2 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">{title}</h2>
      <div className="fluent-prose mt-4 space-y-4 text-[15px] leading-7 text-[#b7c1d7]">{children}</div>
    </section>
  );
}

export default function LegalPage({ eyebrow, title, effective, updated, introduction, toc, children }: { eyebrow: string; title: string; effective: string; updated: string; introduction: string; toc: { id: string; label: string }[]; children: ReactNode }) {
  return (
    <FluentShell>
      <div className="mx-auto max-w-4xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
        <header className="mb-12">
          <Link href="/fluent-ai" className="mb-9 inline-flex items-center gap-2 text-sm font-medium text-[#9aabd0] transition hover:text-white"><ArrowLeft className="h-4 w-4" /> Back to Fluent AI</Link>
          <p className="fluent-eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">{title}</h1>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#7f8ba5]"><span>Effective date: {effective}</span><span>Last updated: {updated}</span></div>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#bac4d9]">{introduction}</p>
        </header>
        <nav aria-label={`${title} table of contents`} className="fluent-panel mb-8 p-6 sm:p-8"><h2 className="text-lg font-semibold text-white">Table of contents</h2><ol className="mt-5 grid gap-x-8 gap-y-3 text-sm text-[#9fb0d3] sm:grid-cols-2">{toc.map((item, index) => <li key={item.id}><a href={`#${item.id}`} className="transition hover:text-white"><span className="mr-2 text-[#7185bd]">{index + 1}.</span>{item.label}</a></li>)}</ol></nav>
        <div className="space-y-5">{children}</div>
        <div className="mt-10 rounded-2xl border border-white/[.08] bg-white/[.03] p-6 text-sm leading-7 text-[#98a6c2]"><p><strong className="text-white">Fluent AI</strong> · Application: Fluent · Bundle ID: com.biohack.Fluent</p><p>Website: <a className="text-[#8ca8ff] underline underline-offset-4" href="https://hypernova-5xy8.vercel.app/fluent-ai">hypernova-5xy8.vercel.app</a></p><p>Support: <a className="text-[#8ca8ff] underline underline-offset-4" href="mailto:hypernovationtech@gmail.com">hypernovationtech@gmail.com</a></p></div>
      </div>
    </FluentShell>
  );
}
