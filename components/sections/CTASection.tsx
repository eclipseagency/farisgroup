"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 overflow-hidden mesh-bg noise" ref={ref}>
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,162,39,0.1) 0%, transparent 70%)" }} />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: CTA */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase mb-5 px-4 py-2 rounded-full"
              style={{ color: "#F47B20", backgroundColor: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.25)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F47B20" }} />
              Get a quote from
            </span>

            <h2 className="font-heading font-black text-5xl md:text-6xl leading-tight mb-4">
              FARIS
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #F47B20, #FBBF8A, #F47B20)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                GROUP
              </span>
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              Let&apos;s get in touch. We&apos;re open for any suggestion or just to have a chat
              about your next sports facility project.
            </p>

            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-3 px-10 py-4 font-bold text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:gap-4 hover:shadow-2xl hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)", color: "#fff" }}
            >
              Contact Us
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right: Contact Details */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Phones */}
            <div
              className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.2), rgba(201,162,39,0.05))", border: "1px solid rgba(201,162,39,0.2)" }}
              >
                <Phone size={18} style={{ color: "#F47B20" }} />
              </div>
              <div className="space-y-1.5">
                {["+966 55 668 8883 (KSA)", "+971 55 336 6241 (UAE)", "+39 328 819 7804 (Italy)"].map((phone) => (
                  <a key={phone} href={`tel:${phone.split(" ")[0]}`}
                    className="block text-white/70 text-sm hover:text-white transition-colors">
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Emails */}
            <div
              className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.2), rgba(201,162,39,0.05))", border: "1px solid rgba(201,162,39,0.2)" }}
              >
                <Mail size={18} style={{ color: "#F47B20" }} />
              </div>
              <div className="space-y-1.5">
                {["info@farisgroup.net", "faris@farisgroup.net"].map((email) => (
                  <a key={email} href={`mailto:${email}`}
                    className="block text-white/70 text-sm hover:text-white transition-colors">
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div
              className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.2), rgba(201,162,39,0.05))", border: "1px solid rgba(201,162,39,0.2)" }}
              >
                <MapPin size={18} style={{ color: "#F47B20" }} />
              </div>
              <div className="text-white/70 text-sm space-y-1">
                <p>Jeddah - Riyadh - Saudi Arabia</p>
                <p>Abu Dhabi - United Arab Emirates</p>
                <p>Milano - Italy</p>
                <p>Cairo - Egypt</p>
                <p>Metro Manila, Philippines</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
