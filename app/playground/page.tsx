"use client";

import Link from "next/link";
import CTASection from "@/components/sections/CTASection";


const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-Playground-3.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-Playground-2.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-Playground-8.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Thuwal-School-Project-June-0313_009.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Thuwal-School-Project-June-0313_028.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-21-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Photo0011-1.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Photo0012-1.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/20141113_145759.jpg",
];

export default function PlaygroundPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-21-1.jpeg"
          alt="Playground Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Playground
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Playground</span>
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
                src="https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-21-1.jpeg"
                alt="Playground"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="text-center">
              <h2
                className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase"
                style={{ color: "#1a8fc1" }}
              >
                Playground
              </h2>
              <p className="text-white/60 leading-relaxed">
                At Faris Group, we understand the importance of creating engaging and safe
                playgrounds for children. Our product range encompasses a wide variety of
                equipment that is suitable for playgrounds in schools, public parks, private
                homes, and compounds. With a focus on safety, all our products hold necessary
                safety certificates, providing you with peace of mind knowing that your children
                can play with confidence.
              </p>
            </div>
          </div>

          {/* Row 2: text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <p className="text-white/60 leading-relaxed mb-8">
                With Faris Group&apos;s product range, you can transform ordinary spaces into
                vibrant and engaging playgrounds, where children can unleash their creativity,
                develop essential motor skills, and experience the pure joy of play. Let us help
                you to bring smiles... while ensuring their safety and well-being.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/Photo0011-1-960x720.jpg"
                alt="Playground Equipment"
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
                  alt={`Playground project ${index + 1}`}
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
