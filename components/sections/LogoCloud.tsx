"use client";

import { motion } from "framer-motion";
import InfiniteSlider from "@/components/ui/InfiniteSlider";

const logos = [
  "https://html.tailus.io/blocks/customers/openai.svg",
  "https://html.tailus.io/blocks/customers/nvidia.svg",
  "https://html.tailus.io/blocks/customers/github.svg",
  "https://html.tailus.io/blocks/customers/microsoft.svg",
  "https://html.tailus.io/blocks/customers/apple.svg",
  "https://html.tailus.io/blocks/customers/google.svg",
  "https://html.tailus.io/blocks/customers/amazon.svg",
  "https://html.tailus.io/blocks/customers/meta.svg",
];

export default function LogoCloud() {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Side - Text */}
            <div className="flex-shrink-0">
              <h3 className="text-lg md:text-xl font-semibold text-white/80">
                Powering the best teams
              </h3>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-12 bg-white/10 flex-shrink-0" />

            {/* Right Side - Logo Slider */}
            <div className="flex-1 w-full overflow-hidden">
              <InfiniteSlider items={logos} direction="left" speed={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
