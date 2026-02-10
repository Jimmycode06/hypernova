"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "gradient-primary text-white hover:shadow-[0_0_30px_rgba(250,147,250,0.5)] hover:scale-105",
    secondary: "glass glass-hover text-white",
    outline: "border-2 border-[#FA93FA] text-[#FA93FA] hover:bg-[#FA93FA]/10 hover:shadow-[0_0_30px_rgba(250,147,250,0.3)]",
  };

  const Component = motion.button;

  if (href) {
    return (
      <Link href={href}>
        <Component
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(baseStyles, variants[variant], className)}
        >
          {children}
        </Component>
      </Link>
    );
  }

  return (
    <Component
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </Component>
  );
}
