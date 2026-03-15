"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 20, suffix: "+", label: "Years of Experience", icon: "🏆" },
  { value: 50, suffix: "+", label: "Countries Served", icon: "🌍" },
  { value: 500, suffix: "+", label: "Projects Completed", icon: "🏗️" },
  { value: 100, suffix: "+", label: "International Brands", icon: "⭐" },
];

function CountUp({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 2200;
    const steps = 70;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [start, target]);

  return <span className="tabular-nums">{count}{suffix}</span>;
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-20 overflow-hidden mesh-bg noise" ref={ref}>
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative text-center group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Separator line (not after last) */}
              {index < stats.length - 1 && (
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 hidden lg:block"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                />
              )}

              <div className="px-6 py-4">
                {/* Number */}
                <div
                  className="text-5xl md:text-6xl lg:text-7xl font-black font-heading mb-2 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #F47B20, #FBBF8A, #F47B20)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} start={isInView} />
                </div>

                {/* Label */}
                <div className="text-white/60 text-xs md:text-sm font-semibold tracking-[0.15em] uppercase">
                  {stat.label}
                </div>

                {/* Gold underline on hover */}
                <div
                  className="mx-auto mt-3 h-0.5 w-0 group-hover:w-12 transition-all duration-500 rounded-full"
                  style={{ backgroundColor: "#F47B20" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
