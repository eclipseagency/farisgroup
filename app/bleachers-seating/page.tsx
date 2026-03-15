"use client";

import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { useT } from "@/lib/useT";


const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-Playground-9.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-Playground-12.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/8-1-1.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/11-1.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/2-4.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/10-1.jpg",
];

export default function BleachersSeatingPage() {
  const t = useT();
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/10-1.jpg"
          alt="Bleachers & Seating Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Bleachers &amp; Seating
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Bleachers &amp; Seating</span>
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
                src="https://farisgroup.net/wp-content/uploads/2023/05/11-1.jpg"
                alt="Bleachers and Seating"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="text-center">
              <h2
                className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase"
                style={{ color: "#1a8fc1" }}
              >
                Bleachers &amp; Seating
              </h2>
              <p className="text-white/60 leading-relaxed">
                At Faris Group, we understand the importance of comfortable and functional
                seating in any venue. That&apos;s why we offer a comprehensive range of
                Bleachers and Seating solutions to meet your specific requirements. Whether
                you&apos;re outfitting a stadium, sports arena, concert hall, or any other
                venue, we have the perfect seating solution for you.
              </p>
            </div>
          </div>

          {/* Row 2: text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <p className="text-white/60 leading-relaxed mb-8">
                Whether you&apos;re hosting sporting events, concerts, or other large
                gatherings, Faris Group&apos;s Bleachers and Seating solutions provide
                comfort, functionality, and style for your audience. Trust us to deliver
                seating solutions that enhance the overall experience of your venue, ensuring
                that every guest has a comfortable and enjoyable time.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-Playground-9-960x720.jpeg"
                alt="Seating Solutions"
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
                  alt={`Bleachers & Seating project ${index + 1}`}
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
