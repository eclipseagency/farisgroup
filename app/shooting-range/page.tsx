"use client";

import Link from "next/link";
import CTASection from "@/components/sections/CTASection";


const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2023/05/Alforsan-Club-Acrylic-Sport-Flooring.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Alforsan-Club-Acrylic-Sport-Flooring-2.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Rangers-Range-3-lanes-indoor-target-shooting-project-1-2.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/rangers-range-3-lanes-indoor-target-shooting-project-1-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/rangers-range-controls-booths.jpg",
];

export default function ShootingRangePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/Alforsan-Club-Acrylic-Sport-Flooring-2.jpg"
          alt="Shooting Range Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Shooting Range
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Supply and Installation of Shooting Range Equipment</span>
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
                src="https://farisgroup.net/wp-content/uploads/2023/05/Rangers-Range-3-lanes-indoor-target-shooting-project-1-2.jpeg"
                alt="Shooting Range Interior"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="text-center">
              <h2
                className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase"
                style={{ color: "#1a8fc1" }}
              >
                Shooting Range
              </h2>
              <p className="text-white/60 leading-relaxed">
                When it comes to shooting sports, precision and safety are of utmost importance. At
                Faris Group, we offer advanced Shooting Range solutions designed to meet the needs
                of shooting enthusiasts and professionals alike. Our comprehensive range includes
                cutting-edge target systems, bullet traps, and a wide selection of shooting
                accessories, all crafted with precision and built to the highest safety standards.
              </p>
            </div>
          </div>

          {/* Row 2: text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <p className="text-white/60 leading-relaxed mb-8">
                Our shooting ranges provide a controlled environment that allows shooters to hone
                their skills and enjoy their passion with confidence. The target systems we provide
                are designed for accuracy, reliability, and versatility, catering to various
                shooting disciplines and training requirements. From electronic target systems with
                precise scoring capabilities to reactive targets that add an element of excitement,
                we have the perfect solution to suit your shooting range needs.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/Alforsan-Club-Acrylic-Sport-Flooring.jpg"
                alt="Shooting Range Facility"
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
            {projectImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md aspect-square">
                <img
                  src={src}
                  alt={`Shooting range project ${index + 1}`}
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
