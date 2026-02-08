"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  variant?: "aurora" | "grid" | "dots";
  className?: string;
}

export function Aurora({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute top-0 -left-4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-[120px] animate-aurora"
        />
        <div
          className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-l from-purple-500/30 to-pink-500/30 rounded-full blur-[120px] animate-aurora"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-[120px] animate-aurora"
          style={{ animationDelay: "4s" }}
        />
      </div>
    </div>
  );
}

export function GridBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </div>
  );
}

export function DotsBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff10_1px,transparent_0)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_110%)]" />
    </div>
  );
}

export default function AnimatedBackground({ variant = "aurora", className }: AnimatedBackgroundProps) {
  switch (variant) {
    case "grid":
      return <GridBackground className={className} />;
    case "dots":
      return <DotsBackground className={className} />;
    default:
      return <Aurora className={className} />;
  }
}
