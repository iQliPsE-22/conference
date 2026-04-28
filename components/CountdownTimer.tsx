"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const target = new Date("2026-11-19T09:00:00+05:30").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[68px] h-[68px] md:w-[80px] md:h-[80px] rounded-2xl bg-[#1B2A4A] flex items-center justify-center shadow-[0_8px_30px_rgba(27,42,74,0.2)] overflow-hidden">
        {/* Inner glow accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />
        <motion.span
          key={value}
          initial={{ y: -12, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="font-sans font-bold text-2xl md:text-3xl text-[#D4AF37] tabular-nums relative z-10"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <span className="mt-2.5 text-[9px] md:text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#1B2A4A]/40">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-3 md:gap-4">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-[68px] h-[68px] md:w-[80px] md:h-[80px] rounded-2xl bg-[#1B2A4A]/10 animate-pulse" />
            <span className="mt-2.5 text-[9px] md:text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#1B2A4A]/40">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5 md:gap-3">
      <CountdownUnit value={time.days} label="Days" />
      <span className="text-xl text-[#1B2A4A]/20 font-light mt-[-20px] select-none">:</span>
      <CountdownUnit value={time.hours} label="Hours" />
      <span className="text-xl text-[#1B2A4A]/20 font-light mt-[-20px] select-none">:</span>
      <CountdownUnit value={time.minutes} label="Minutes" />
      <span className="text-xl text-[#1B2A4A]/20 font-light mt-[-20px] select-none">:</span>
      <CountdownUnit value={time.seconds} label="Seconds" />
    </div>
  );
}
