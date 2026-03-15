"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { useT } from "@/lib/useT";

export const metadata: Metadata = {
  title: "Maintenance - Faris Group",
  description:
    "Faris Group provides repairs and maintenance services to bowling centers, gymnasiums, running tracks, sports fields and other sports facilities.",
};

export default function MaintenancePage() {
  const t = useT();
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n-1-1.jpg"
          alt="Maintenance Hero"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Maintenance
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">MAINTENANCE</span>
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-widest mb-6" style={{ color: "#ffffff" }}>
                MAINTENANCE
              </h2>
              <p className="text-white/60 leading-relaxed mb-5">
                Faris Group , along with our engineers and other professional staff, provide repairs
                and maintenance services to bowling centers, gymnasiums, running tracks, sports fields
                and other sports facilities. In accordance with our clients&apos; needs, we offer one
                time, or yearly contracts.
              </p>
              <p className="text-white/60 leading-relaxed">
                Maintenance services for sports fields with synthetic turf/rubber flooring is also
                offered with our German specialized cleaning machine, Horger.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/cxzv.jpg"
                alt="Maintenance Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Contact Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n-1-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.7)" }} />
        <div className="relative z-10 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            {/* Left dark panel */}
            <div className="p-10 flex flex-col justify-center" style={{ backgroundColor: "#0a1628" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#F47B20" }}>
                QUOTE
              </p>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight mb-4">
                REQUEST A QUOTE
              </h2>
              <p className="text-white font-semibold text-base mb-1">Let&apos;s get in touch</p>
              <p className="text-white/60 text-sm mb-8">
                We&apos;re open for any suggestion or just to have a chat
              </p>
              <div className="space-y-3">
                {[
                  "+966 53 800 7018 (KSA)",
                  "+971 55 336 6241 (UAE)",
                  "+39 328 819 7804 (Italy)",
                ].map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.split(" ")[0]}`}
                    className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                  >
                    <Phone size={14} style={{ color: "#F47B20" }} />
                    {phone}
                  </a>
                ))}
                {["info@farisgroup.net", "faris@farisgroup.net"].map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                  >
                    <Mail size={14} style={{ color: "#F47B20" }} />
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Right form panel */}
            <div className="p-10" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none resize-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <button
                  type="submit"
                  className="w-full py-3 font-semibold text-white text-sm tracking-widest uppercase rounded transition-all duration-300 hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)" }}
                >
                  Send a message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
