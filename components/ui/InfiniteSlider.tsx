"use client";

import { motion } from "framer-motion";

interface InfiniteSliderProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function InfiniteSlider({
  items,
  direction = "left",
  speed = 50,
}: InfiniteSliderProps) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-12"
        animate={{
          x: direction === "left" ? "-50%" : "50%",
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{
          width: "fit-content",
        }}
      >
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-12 w-auto grayscale brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
          >
            <img
              src={item}
              alt={`Logo ${index}`}
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
