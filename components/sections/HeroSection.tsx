"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] min-h-[640px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://farisgroup.net/wp-content/uploads/2024/12/bowling.mp4"
          type="video/mp4"
        />
      </video>

      {/* Multi-layer gradient overlay */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.75) 45%, rgba(10,22,40,0.35) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Animated vertical lines decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {[15, 35, 55, 75, 90].map((left, i) => (
          <motion.div
            key={i}
            className="absolute top-0 bottom-0 w-px"
            style={{ left: `${left}%`, backgroundColor: "rgba(255,255,255,0.03)" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center" style={{ zIndex: 2 }}>
        <div className="container-custom w-full">
          <div className="max-w-3xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easing }}
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase mb-6 px-4 py-2 rounded-full"
                style={{
                  color: "#c9a227",
                  backgroundColor: "rgba(201,162,39,0.1)",
                  border: "1px solid rgba(201,162,39,0.25)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse-glow"
                  style={{ backgroundColor: "#c9a227" }}
                />
                Your Trusted Partner Since 2003
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-heading font-black text-5xl md:text-6xl lg:text-8xl text-white leading-[0.95] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: easing }}
            >
              Total Sports
              <br />
              <span className="text-shimmer">Solutions</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: easing }}
            >
              Faris Group is the leading supplier of superior quality sports and entertainment
              equipment in the Middle East — with over 20 years of experience and offices
              across KSA, UAE, Italy, Egypt and Philippines.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: easing }}
            >
              <Link
                href="/products"
                className="group inline-flex items-center gap-2.5 px-8 py-4 font-bold text-sm tracking-widest uppercase text-white rounded-sm transition-all duration-300 hover:gap-4 hover:shadow-2xl hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #c9a227, #e8bc35)" }}
              >
                Explore Products
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2.5 px-8 py-4 font-bold text-sm tracking-widest uppercase text-white rounded-sm transition-all duration-300 hover:bg-white hover:text-[#0a1628]"
                style={{ border: "1.5px solid rgba(255,255,255,0.35)" }}
              >
                Contact Us
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.4), transparent)" }}
        />
        <div className="container-custom py-5 flex items-center justify-between">
          <div className="flex items-center gap-6 text-white/40 text-xs uppercase tracking-[0.15em]">
            <span>KSA</span>
            <div className="w-4 h-px" style={{ backgroundColor: "rgba(201,162,39,0.4)" }} />
            <span>UAE</span>
            <div className="w-4 h-px" style={{ backgroundColor: "rgba(201,162,39,0.4)" }} />
            <span>Italy</span>
            <div className="w-4 h-px" style={{ backgroundColor: "rgba(201,162,39,0.4)" }} />
            <span>Egypt</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="flex flex-col items-center gap-1.5 text-white/30 hover:text-white/60 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
