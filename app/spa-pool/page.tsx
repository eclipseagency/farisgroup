"use client";

import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { useT } from "@/lib/useT";

export const metadata: Metadata = {
  title: "SPA & Pool - Faris Group",
  description:
    "Faris Group offers a complete line of saunas, steam generators, hot tubs, and wellness equipment. Luxurious SPA systems for every space, taste, and budget.",
};

const projectImages = [
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/1-4-768x1024-1.jpg",
    alt: "SPA Project 1",
  },
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/3jpg-768x1024-1.jpg",
    alt: "SPA Project 2",
  },
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/4-3-2.jpg",
    alt: "SPA Project 3",
  },
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/2-4-1024x768-1.jpg",
    alt: "SPA Project 4",
  },
];

export default function SpaPoolPage() {
  const t = useT();
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/4-3-2.jpg"
          alt="SPA & Pool Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            SPA &amp; Pool
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">SPA &amp; Pool</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="container-custom">
          {/* Row 1: image left, title+text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/1-4-768x1024-1.jpg"
                alt="SPA System"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2
                className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase"
                style={{ color: "#1a8fc1" }}
              >
                SPA &amp; Pool
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Offering you a wide range of spa system products, we have the most complete line of
                traditional and infrared saunas, steam generators, and hot tubs. From entry level
                portable saunas, custom-cut saunas, to deluxe saunas with custom lighting, custom
                benching, multiple wood choices, and styles.
              </p>
              <p className="text-white/60 leading-relaxed">
                We have the solution for every space, taste, and budget.
              </p>
            </div>
          </div>

          {/* Row 2: text+button left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <p className="text-white/60 leading-relaxed mb-4">
                Indulge in relaxation and rejuvenation with our luxurious SPA Systems. Designed for
                ultimate comfort and serenity, our systems include hot tubs, saunas, and wellness
                equipment, providing a tranquil escape for your guests.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We provide a range of wellness equipment that allows guests to enhance their
                self-care routines and create their own personal oasis. With Faris Group&apos;s SPA
                Systems, you can offer your guests a haven of tranquility where they can unwind,
                recharge, and indulge in the ultimate pampering experience.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/3jpg-768x1024-1.jpg"
                alt="SPA Interior"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle block">Our Work</span>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projectImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
