"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://farisgroup.net/wp-content/uploads/2024/12/bowling.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,22,40,0.90) 0%, rgba(26,58,107,0.70) 55%, rgba(10,22,40,0.45) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-center" style={{ zIndex: 2 }}>
        <div className="container-custom w-full">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5"
              style={{
                color: "#c9a227",
                backgroundColor: "rgba(201,162,39,0.15)",
                border: "1px solid rgba(201,162,39,0.3)",
              }}
            >
              Your Trusted Partner
            </span>

            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-6">
              Total Sports <br />
              <span style={{ color: "#c9a227" }}>Solutions</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Faris Group is the leading supplier of superior quality sports and entertainment
              equipment in the Middle East — with over 20 years of experience and offices
              across KSA, UAE, and Italy.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:opacity-90 hover:gap-3"
                style={{ backgroundColor: "#c9a227" }}
              >
                Explore Our Products
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 font-semibold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:bg-white hover:text-navy"
                style={{ borderColor: "rgba(255,255,255,0.5)" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
            <Play size={12} style={{ color: "#c9a227" }} />
            <span>Faris Group — Total Sports Solutions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-gold" style={{ backgroundColor: "#c9a227" }} />
            <span className="text-white/40 text-xs">EST. 20+ YRS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
