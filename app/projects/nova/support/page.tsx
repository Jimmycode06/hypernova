"use client";

import { motion } from "framer-motion";
import { CreditCard, Mail, RefreshCw, ShieldQuestion } from "lucide-react";
import { DotsBackground } from "@/components/ui/AnimatedBackground";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import NovaFooterLinks from "@/components/nova/NovaFooterLinks";

const cards = [
  { icon: CreditCard, title: "Manage a subscription", text: "Purchases are billed by Apple. View or cancel your plan from your Apple account settings.", link: "https://apps.apple.com/account/subscriptions", label: "Manage with Apple" },
  { icon: RefreshCw, title: "Restore a purchase", text: "In Nova, choose Restore Purchases on the subscription screen and use the Apple account that made the purchase." },
  { icon: ShieldQuestion, title: "Request data deletion", text: "Email us with the subject “Nova Data Request”. We’ll help identify the technical session concerned.", link: "/projects/nova/data-request", label: "View the process" },
];

export default function NovaSupportPage() { return <div className="relative min-h-screen px-4 pb-20 pt-32"><DotsBackground /><div className="relative z-10 mx-auto max-w-5xl"><motion.header initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="mb-14 text-center"><span className="mb-6 inline-block rounded-full border border-[#FA93FA]/30 bg-[#FA93FA]/10 px-6 py-2 font-medium text-[#FA93FA]">Nova Support</span><h1 className="text-gradient text-5xl font-bold md:text-6xl">How can we help?</h1><p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">Questions about a generation, subscription, or your data? We’re here to help.</p></motion.header><GlassCard hover={false} className="mb-8 text-center"><Mail className="mx-auto mb-4 h-8 w-8 text-[#FA93FA]"/><h2 className="text-2xl font-bold">Contact Nova support</h2><p className="mx-auto mt-3 max-w-2xl leading-relaxed text-gray-400">Include your Nova version, iPhone model, iOS version, and a clear description of the issue. Please avoid sending sensitive photos unless strictly necessary.</p><div className="mt-7"><Button href="mailto:hypernovationtech@gmail.com">hypernovationtech@gmail.com</Button></div></GlassCard><div className="grid gap-6 md:grid-cols-3">{cards.map(({icon:Icon,...card}) => <GlassCard key={card.title} className="h-full"><Icon className="mb-5 h-8 w-8 text-[#FA93FA]"/><h2 className="mb-3 text-xl font-bold">{card.title}</h2><p className="leading-relaxed text-gray-400">{card.text}</p>{card.link && <a href={card.link} className="mt-5 inline-block font-medium text-[#FA93FA] hover:underline">{card.label} →</a>}</GlassCard>)}</div><p className="mt-10 text-center text-sm text-gray-500">Deleting Nova or its technical data does not automatically cancel an Apple subscription.</p><NovaFooterLinks /></div></div> }
