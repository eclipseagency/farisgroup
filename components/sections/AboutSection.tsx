"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useT } from "@/lib/useT";
import { useLocale } from "@/contexts/LocaleContext";
import { translations } from "@/lib/translations";

export default function AboutSection() {
  const t = useT();
  const { locale } = useLocale();
  const highlights = translations[locale].aboutSection.highlights;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(26,58,107,0.25) 0%, transparent 60%)",
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
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
              <img
                src="https://farisgroup.net/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-24-at-11.20.13.jpeg"
                alt="Faris Group Sports Solutions"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,22,40,0.6))" }} />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 px-7 py-6 rounded-2xl text-white hidden md:block"
              style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)", boxShadow: "0 15px 40px rgba(244,123,32,0.4)" }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="text-5xl font-black font-heading leading-none">20+</div>
              <div className="text-sm font-semibold mt-1 opacity-90">{t("aboutSection.yearsLabel")}</div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -left-6 w-44 h-44 rounded-2xl overflow-hidden hidden md:block"
              style={{ boxShadow: "0 15px 40px rgba(0,0,0,0.4)", border: "3px solid rgba(255,255,255,0.1)" }}
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
            <span className="section-subtitle block">{t("aboutSection.badge")}</span>

            <h2 className="section-title mb-6">
              {t("aboutSection.title1")}{" "}
              <span style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t("aboutSection.title2")}
              </span>
            </h2>

            <p className="text-white/55 leading-relaxed text-base mb-4">
              {t("aboutSection.description1")}
            </p>
            <p className="text-white/55 leading-relaxed text-base mb-8">
              {t("aboutSection.description2")}
            </p>

            <div className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(244,123,32,0.15)" }}>
                    <CheckCircle size={12} style={{ color: "#F47B20" }} />
                  </div>
                  <span className="text-sm text-white/70 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about-us"
              className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-sm tracking-widest uppercase text-white rounded-sm transition-all duration-300 hover:opacity-90 hover:gap-4 hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)" }}
            >
              {t("aboutSection.cta")}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
