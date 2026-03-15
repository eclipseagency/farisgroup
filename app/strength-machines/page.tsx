"use client";

import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { useT } from "@/lib/useT";

export const metadata: Metadata = {
  title: "Strength Machines - Faris Group",
  description:
    "Faris Group provides a complete supply of strength machines, multi-purpose gym machines, benches, plate racks, and more with the Canali System Auxotonic Line.",
};

const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2023/05/539329_532844793427625_838698630_n.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/45801_532844736760964_1103440627_n.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/535914_532844693427635_1031139011_n.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/1012334_586412398070864_1163059425_n.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/11149252_958084537570313_5135723787656785704_n.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/11174767_958085110903589_8184708815844010166_n.jpg",
];

export default function StrengthMachinesPage() {
  const t = useT();
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/20230524190633_fpdl.in_heavy-weight-lifting-equipment-standing-row-empty-gym_116547-29072_large.jpg"
          alt="Strength Machines Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Strength Machines
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
            <span className="text-white/80 font-medium">Strength Machines</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/20230524190633_fpdl.in_heavy-weight-lifting-equipment-standing-row-empty-gym_116547-29072_large.jpg"
                alt="Strength Machines"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2
                className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase"
                style={{ color: "#1a8fc1" }}
              >
                Strength Machines
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Faris Group provides a complete supply of strength machines, multi-purpose gym
                machine, benches, plate racks, and more. With the Canali System Auxotonic Line,
                you&apos;ll be sure that you have the safest and most efficient way to start
                building your strength. From home gym to commercial gym machines, we have a full
                set that will surely suit every need and budget.
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projectImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md aspect-square">
                <img
                  src={src}
                  alt={`Strength machines project ${index + 1}`}
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
