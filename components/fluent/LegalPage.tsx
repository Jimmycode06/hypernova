import { ReactNode } from "react";
import FluentShell from "./FluentShell";

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="fluent-panel p-6 sm:p-8">
      <h2 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">{title}</h2>
      <div className="fluent-prose mt-4 space-y-4 text-[15px] leading-7 text-[#b7c1d7]">{children}</div>
    </section>
  );
}

export default function LegalPage({ eyebrow, title, updated, introduction, children }: { eyebrow: string; title: string; updated: string; introduction: string; children: ReactNode }) {
  return (
    <FluentShell>
      <div className="mx-auto max-w-4xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
        <header className="mb-12">
          <p className="fluent-eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">{title}</h1>
          <p className="mt-5 text-sm text-[#7f8ba5]">Last updated: {updated}</p>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#bac4d9]">{introduction}</p>
        </header>
        <div className="space-y-5">{children}</div>
      </div>
    </FluentShell>
  );
}
