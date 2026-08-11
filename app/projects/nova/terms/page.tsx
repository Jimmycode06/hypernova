"use client";

import { motion } from "framer-motion";
import { FileCheck2, Mail } from "lucide-react";
import { DotsBackground } from "@/components/ui/AnimatedBackground";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import NovaFooterLinks from "@/components/nova/NovaFooterLinks";

const sections = [
  {
    title: "1. Acceptance of These Terms",
    content: "By downloading, accessing, or using Nova, you agree to these Terms of Use. If you do not agree, do not use the app. Apple’s Standard End User License Agreement also applies to your use of Nova.",
  },
  {
    title: "2. Eligibility",
    content: "Nova is not intended for children under 13. If local law requires a higher age to consent to digital services, you may use Nova only with authorization from a parent or legal guardian who agrees to these terms.",
  },
  {
    title: "3. Limited License",
    content: "We grant you a personal, limited, non-exclusive, non-transferable, and revocable license to use Nova on Apple devices that you own or control, solely for lawful personal use and in accordance with these terms and the App Store rules.",
  },
  {
    title: "4. Your Photos and Content",
    content: "You keep your rights in the photos, reference images, text, and other content you submit. You grant Nova and its service providers the limited permission needed to process that content and provide the feature you requested. You must own the content or have permission to use it. Do not submit another person’s image without their consent.",
  },
  {
    title: "5. Acceptable Use",
    content: "You may not use Nova for unlawful, deceptive, harassing, hateful, sexually exploitative, abusive, or rights-infringing purposes; to impersonate or harm another person; to process images without the required permission; to interfere with the service; to bypass generation limits or security measures; or to reverse engineer Nova except where applicable law expressly permits it.",
  },
  {
    title: "6. AI Features and Results",
    content: "Nova uses artificial intelligence to analyze and generate content. Results may be inaccurate, unexpected, incomplete, or different from what can be achieved in real life. A virtual hairstyle, color, outfit, or other simulation is illustrative only and does not guarantee an identical real-world result. Review outputs before relying on or sharing them.",
  },
  {
    title: "7. No Medical or Professional Advice",
    content: "Nova does not provide medical diagnosis, health advice, or professional hairstyling advice. Its results are not an objective assessment of beauty, health, ethnicity, personality, or any other sensitive characteristic. Consult a qualified professional when appropriate.",
  },
  {
    title: "8. Nova Pro and Subscriptions",
    content: "Nova may offer optional auto-renewing subscriptions through Apple. The exact price, billing period, trial terms, and included features are shown in the app before purchase and may vary by country. Payment is charged to your Apple account. Unless cancelled at least 24 hours before the end of the current period, your subscription may renew automatically. You can manage or cancel it in your Apple account settings. Deleting Nova or your Nova data does not cancel an Apple subscription.",
  },
  {
    title: "9. Generations and Usage Limits",
    content: "The current Nova Pro service is designed to include up to 30 AI generations per subscription period. A generation may be counted when processing begins, including where a request cannot produce the expected result for reasons outside Nova’s reasonable control. Limits, credit rules, and included features displayed in the app at the time of purchase govern your plan. We may apply reasonable technical limits to prevent fraud, abuse, or excessive use.",
  },
  {
    title: "10. Availability and Changes",
    content: "We may update, improve, suspend, or discontinue features to maintain security, comply with law, respond to provider changes, or improve Nova. AI and third-party services may occasionally be unavailable. We do not guarantee uninterrupted or error-free operation.",
  },
  {
    title: "11. Intellectual Property",
    content: "Nova, its software, interface, branding, text, and original materials are protected by intellectual-property laws and belong to their respective owners. These terms do not transfer ownership of Nova to you. Subject to the rights of others and applicable law, you may use generated results for personal purposes.",
  },
  {
    title: "12. Suspension or Termination",
    content: "We may restrict or suspend access when reasonably necessary to protect Nova, its users, or its providers; investigate fraud or abuse; enforce these terms; or comply with legal obligations. You may stop using Nova at any time. Subscription cancellation must be completed separately through Apple.",
  },
  {
    title: "13. Disclaimers",
    content: "To the fullest extent permitted by law, Nova is provided “as is” and “as available.” We disclaim implied warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement. Nothing in these terms excludes warranties or consumer rights that cannot legally be excluded.",
  },
  {
    title: "14. Limitation of Liability",
    content: "To the fullest extent permitted by law, Nova and its operator will not be liable for indirect, incidental, special, consequential, or punitive loss arising from use of the app or reliance on AI results. This limitation does not apply where liability cannot legally be limited, including certain consumer protections.",
  },
  {
    title: "15. Changes to These Terms",
    content: "We may update these terms to reflect changes to Nova, its providers, or legal requirements. The updated version will be posted on this page with a new date. Where required, we will provide additional notice before material changes take effect.",
  },
  {
    title: "16. Contact",
    content: "For questions about these terms, subscriptions, or Nova, contact hypernovationtech@gmail.com.",
  },
];

export default function NovaTermsPage() {
  return (
    <div className="relative min-h-screen px-4 pb-20 pt-32">
      <DotsBackground className="nova-dots" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#4b2c55]/10 bg-white/80 px-6 py-3 shadow-sm">
            <FileCheck2 className="h-5 w-5 text-[#d850cf]" />
            <span className="font-medium text-[#b83eb4]">Nova Terms of Use</span>
          </div>
          <h1 className="text-gradient text-4xl font-bold md:text-6xl">Terms of Use</h1>
          <p className="mt-5 text-gray-400">Last updated: August 2026</p>
        </motion.header>

        <GlassCard hover={false} className="mb-8">
          <p className="text-lg leading-relaxed text-gray-300">
            These Terms of Use govern your access to and use of the Nova mobile application and its related services.
          </p>
        </GlassCard>

        <div className="space-y-6">
          {sections.map((section) => (
            <GlassCard key={section.title} hover={false}>
              <h2 className="mb-4 text-xl font-bold text-white">{section.title}</h2>
              <p className="leading-relaxed text-gray-300">{section.content}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/projects/nova/support" variant="outline">Back to Support</Button>
          <Button href="mailto:hypernovationtech@gmail.com">
            Contact Us <Mail className="h-5 w-5" />
          </Button>
        </div>
        <NovaFooterLinks />
      </div>
    </div>
  );
}
