"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export function SlideUp({ children, delay = 0, className = "", yOffset = 50 }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
