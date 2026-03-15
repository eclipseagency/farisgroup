"use client";

import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { useT } from "@/lib/useT";

export const metadata: Metadata = {
  title: "Cardio Machines - Faris Group",
  description:
    "Faris Group, together with Canali System, provides a variety of cardio machines — treadmills, bikes, and more for recreation or rehabilitation.",
};

const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2023/05/5QV4TcUWvsfYmm9hAdWXHD.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Jebel-heights-commissary-gym.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/28165103_195353244565898_701928353492881012_o.jpg",
];

export default function CardioMachinesPage() {
  const t = useT();
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/5QV4TcUWvsfYmm9hAdWXHD.jpg"
          alt="Cardio Machines Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Cardio Machines
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/fitness-and-gym" className="text-white/70 hover:text-gold transition-colors">Fitness &amp; Gym</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Cardio Machines</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/5QV4TcUWvsfYmm9hAdWXHD.jpg"
                alt="Cardio Machines"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2
                className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase"
                style={{ color: "#1a8fc1" }}
              >
                Cardio Machines
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Faris Group, together with Canali System, provides a variety of cardio machines to
                choose from. Whether it be treadmills or bikes, for recreation or rehabilitation,
                we can offer you the best product that get your heart pumping.
              </p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projectImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md aspect-square">
                <img
                  src={src}
                  alt={`Cardio project ${index + 1}`}
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
