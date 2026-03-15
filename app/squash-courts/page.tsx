"use client";

import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { useT } from "@/lib/useT";

export const metadata: Metadata = {
  title: "Squash Courts - Faris Group",
  description:
    "Faris Group delivers excellence in squash court design, construction, and installation. Top-notch facilities meeting international standards for players of all levels.",
};


export default function SquashCourtsPage() {
  const t = useT();
  return (
    <>
      {/* Hero — Static Image */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/9-1-1.jpg"
          alt="Squash Courts Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Squash Courts
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Squash Courts</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/28058482_195341751233714_3716889217452087241_n.jpg"
                alt="Squash Court Interior"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Title + first paragraph */}
            <div>
              <h2
                className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase"
                style={{ color: "#1a8fc1" }}
              >
                Squash Courts
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                When it comes to Squash Courts, Faris Group is dedicated to delivering excellence.
                We understand the importance of creating top-notch facilities that meet international
                standards and cater to players of all levels.
              </p>
              <p className="text-white/60 leading-relaxed">
                With our expertise in squash court design, construction, and installation, we go
                above and beyond to build the best and most serviceable courts for a wide range of
                facilities.
              </p>
            </div>
          </div>

          {/* Row 2: text+buttons left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <p className="text-white/60 leading-relaxed mb-4">
                Our commitment to quality extends beyond the construction phase. At Faris Group, we
                pride ourselves on providing exceptional customer service throughout the entire
                process. From initial consultation to final installation, our knowledgeable team
                works closely with our clients to ensure their specific requirements are met.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We take great care in selecting premium materials and employing skilled craftsmen to
                create squash courts that are not only visually stunning but also offer optimal
                playing conditions.
              </p>
            </div>
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/28167927_195341747900381_7372523716644854920_n.jpg"
                alt="Squash Court"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
