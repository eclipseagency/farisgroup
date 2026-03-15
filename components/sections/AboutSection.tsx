"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  "Official distributor of top international brands",
  "Turnkey projects from concept to completion",
  "20+ years of industry excellence",
  "Operating across 5 countries",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#f8f9fc" }}>
      {/* Decorative bg element */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at 80% 30%, rgba(201,162,39,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Images Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-24-at-11.20.13.jpeg"
                alt="Faris Group Sports Solutions"
                className="w-full h-[480px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,22,40,0.5))" }}
              />
            </div>

            {/* 20+ badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 px-7 py-6 rounded-2xl shadow-2xl text-white hidden md:block"
              style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)" }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="text-5xl font-black font-heading leading-none">20+</div>
              <div className="text-sm font-semibold mt-1 opacity-90">Years of Excellence</div>
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="absolute -top-6 -left-6 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block"
              initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/06/Private-Villa-Padel-Court-Riyadh-4-1024x768-1-1.jpeg"
                alt="Padel Court"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-subtitle block">About FARIS GROUP</span>

            <h2 className="section-title mb-6">
              FARIS GROUP{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F47B20, #F89B4B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                TOTAL SPORTS SOLUTIONS.
              </span>
            </h2>

            <p className="text-gray-500 leading-relaxed text-base mb-4">
              With over 20 years of experience, Faris Group is an established name in the Sports
              and Leisure industry. Recognized as the leading supplier of superior quality sports
              and entertainment equipment in the Middle East, Faris Group is an official
              distributor of top international brands.
            </p>
            <p className="text-gray-500 leading-relaxed text-base mb-8">
              Whether you require a private cinema or an Olympic sized football field, Faris Group
              is there from start to finish — delivering turn-key projects such as bowling centers,
              shooting ranges, climbing walls, recreation centers, fitness clubs, playground parks,
              squash courts and running tracks.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(201,162,39,0.15)" }}
                  >
                    <CheckCircle size={12} style={{ color: "#F47B20" }} />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about-us"
              className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-sm tracking-widest uppercase text-white rounded-sm transition-all duration-300 hover:opacity-90 hover:gap-4 hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: "#0a1628" }}
            >
              Read More
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
