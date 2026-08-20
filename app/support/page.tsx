import { ExternalLink, Mail, MessageCircleQuestion } from "lucide-react";
import FluentShell from "@/components/fluent/FluentShell";

const faqs = [
  { question: "How do I start a conversation?", answer: "Open Fluent AI, choose the language you want to practice and your level, then select a conversation. Allow microphone access if you want to speak, or use text input when that option is available." },
  { question: "How do I manage or cancel my subscription?", answer: "Subscriptions are managed by Apple. Open Settings on your iPhone, tap your name, then tap Subscriptions and select Fluent AI. You can also use Apple’s subscription-management page.", link: "https://apps.apple.com/account/subscriptions", label: "Manage Apple subscriptions" },
  { question: "How do I restore my purchases?", answer: "Use the Restore Purchases option in Fluent AI while signed in to the same Apple Account used for the original purchase. If access is not restored, contact support with a description of the issue. Do not email payment-card information." },
  { question: "How do I delete my account and personal data?", answer: "Use any account-deletion option available inside Fluent AI. You may also email hypernovationtech@gmail.com with the subject “Fluent AI Privacy Request.” We may request limited information needed to locate and verify the relevant data. Deleting data does not cancel an Apple subscription." },
  { question: "What should I do if voice recognition is not working?", answer: "Confirm that microphone access is enabled for Fluent AI in iOS Settings, move to a quieter environment, speak clearly, and check your internet connection. Restart the app and try again. If the issue continues, include your iPhone model, iOS version, and app version when contacting support." },
];

export default function SupportPage() {
  return (
    <FluentShell>
      <div className="mx-auto max-w-5xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
        <header className="text-center"><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#668bff]/15 text-[#8aa7ff]"><MessageCircleQuestion className="h-7 w-7" /></span><p className="fluent-eyebrow mt-7">Help center</p><h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">Fluent AI Support</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#b7c1d7]">Need help with a conversation, voice recognition, your subscription, or your data? We’re here to help.</p><a href="mailto:hypernovationtech@gmail.com" className="mt-5 inline-block text-lg font-medium text-[#8da9ff] underline decoration-[#8da9ff]/40 underline-offset-4 hover:text-white">hypernovationtech@gmail.com</a><div><a href="mailto:hypernovationtech@gmail.com?subject=Fluent%20AI%20Support" className="fluent-button mt-8 px-7 py-4"><Mail className="h-4 w-4" /> Contact Support</a></div></header>

        <section className="mt-20" aria-labelledby="faq-heading"><div className="mb-8"><p className="fluent-eyebrow">Common questions</p><h2 id="faq-heading" className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">Frequently asked questions</h2></div><div className="space-y-4">{faqs.map((faq) => <details key={faq.question} className="fluent-panel group p-0"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-6 text-left font-semibold text-white sm:px-8"><span>{faq.question}</span><span className="text-xl font-light text-[#83a0ff] transition group-open:rotate-45" aria-hidden="true">+</span></summary><div className="px-6 pb-7 text-[15px] leading-7 text-[#aeb9cf] sm:px-8"><p>{faq.answer}</p>{faq.link && <a href={faq.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-medium text-[#8ca8ff] hover:text-white">{faq.label}<ExternalLink className="h-4 w-4" /></a>}</div></details>)}</div></section>
      </div>
    </FluentShell>
  );
}
