import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Fitness & Gym - Faris Group",
  description:
    "Set up a world-class fitness facility with Faris Group's cutting-edge Fitness & Gym equipment. Canali System – 100% Italian design.",
};

const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-11.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-15.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-16.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-2.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-3.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-4.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-14.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-Playground-5.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/5QV4TcUWvsfYmm9hAdWXHD.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Jebel-heights-commissary-gym.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/28165103_195353244565898_701928353492881012_o.jpg",
];

export default function FitnessGymPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-11.jpeg"
          alt="Fitness & Gym Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.6)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-4 leading-tight uppercase tracking-widest">
            Fitness &amp; Gym
          </h1>
          <p className="text-lg text-gray-200">THE FUTURE IS HUMAN</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Fitness &amp; Gym</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-heading font-black text-3xl md:text-4xl mb-6 uppercase" style={{ color: "#1a8fc1" }}>
            FITNESS &amp; GYM
          </h2>
          <p className="text-white/60 leading-relaxed mb-4">
            Set up a world-class fitness facility with our cutting-edge Fitness &amp; Gym equipment.
            Our range includes treadmills, weight machines, cardio equipment, and more, designed to
            support diverse fitness goals and promote a healthy lifestyle.
          </p>
        </div>
      </section>

      {/* ── Sticky Split 1: Image LEFT · Content RIGHT ── */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sticky image */}
        <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen overflow-hidden">
          <img
            src="https://farisgroup.net/wp-content/uploads/2023/05/28165103_195353244565898_701928353492881012_o.jpg"
            alt="Canali System"
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>
        {/* Scrollable content */}
        <div className="lg:w-1/2 flex items-center px-10 py-16" style={{ backgroundColor: "#0d1214" }}>
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#1a8fc1" }}>
              Canali System – 100% Italian
            </p>
            <h2 className="font-heading font-black text-3xl text-white mb-6">AUXOTONIC 2.0</h2>
            <p className="leading-relaxed mb-6 text-sm" style={{ color: "#1a8fc1" }}>
              The Canali System was born from an opportunity to combine two Italian experts in their
              respective professional fields to create a partnership offering exercise and
              biomechanical science with manufacturing excellence under one roof.
            </p>
            <ul className="space-y-3 mb-6">
              {["Scientific research", "Industrial culture", "Italian design"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-sm">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: "#1a8fc1" }}
                  >
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm leading-relaxed">
              Canali System is part of the well established Nord Group, with a proud Italian heritage
              providing a guarantee of world leading production of high-quality components and
              exercise machines whilst offering Innovation, technology and passion. We have an eye
              for detail and quality, giving our customers the very best in exercise equipment and
              fitness experience.
            </p>
          </div>
        </div>
      </div>

      {/* ── Sticky Split 2: Content LEFT · Image RIGHT ── */}
      <div className="flex flex-col-reverse lg:flex-row min-h-screen">
        {/* Scrollable content */}
        <div className="lg:w-1/2 flex items-center px-10 py-16" style={{ backgroundColor: "#181c1e" }}>
          <div>
            <h2 className="font-heading font-black text-2xl text-white mb-2 uppercase">
              HUMAN RUN LED E TOUCH
            </h2>
            <p className="text-sm mb-6 font-medium" style={{ color: "#1a8fc1" }}>
              Ergonomics Designed for maximum performance training.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Simple and Intuitive Display",
                "Fast",
                "Silent",
                "Tablet Mobile Phone always with you",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-sm">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ backgroundColor: "#1a8fc1" }}
                  >
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The interface, identical for all the Human Cardio line, allows you to switch from one
              product to another in a simple and intuitive way. The keys are oversized, to be easily
              identifiable and to improve the User Experience (Human Design).
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              The ergonomic design of the handles also increases your comfort by giving more space to
              your movements.
            </p>
          </div>
        </div>
        {/* Sticky image */}
        <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen overflow-hidden">
          <img
            src="https://farisgroup.net/wp-content/uploads/2023/05/Jebel-heights-commissary-gym.jpg"
            alt="Human Run LED"
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>
      </div>

      {/* Equipment Carousel */}
      <section className="py-12  overflow-hidden">
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 28s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="marquee-track">
          {[
            "https://farisgroup.net/wp-content/uploads/2024/10/HUMAN-RUN-LED-11-200x200-2.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/LAT-MACHINE-2-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/LEG-EXTENSION-MACHINE-2-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/LEG-PRESS-MACHINE-4-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/SEATED-LEG-CURL-MACHINE-2-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/SHOULDER-MACHINE-2-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/CHEST-PRESS-MACHINE-2-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/FLAT-BENCH-3-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/HALF-RACK-3-200x200-2.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/FLEXIBILITY-MACHINE-7-200x200-1.jpg",
            /* duplicate for seamless loop */
            "https://farisgroup.net/wp-content/uploads/2024/10/HUMAN-RUN-LED-11-200x200-2.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/LAT-MACHINE-2-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/LEG-EXTENSION-MACHINE-2-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/LEG-PRESS-MACHINE-4-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/SEATED-LEG-CURL-MACHINE-2-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/SHOULDER-MACHINE-2-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/CHEST-PRESS-MACHINE-2-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/FLAT-BENCH-3-200x200-1.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/HALF-RACK-3-200x200-2.jpg",
            "https://farisgroup.net/wp-content/uploads/2024/10/FLEXIBILITY-MACHINE-7-200x200-1.jpg",
          ].map((src, i) => (
            <div key={i} className="flex-shrink-0 mx-6 flex items-center justify-center" style={{ width: 140, height: 140 }}>
              <img
                src={src}
                alt={`Equipment ${(i % 11) + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle block">Our Work</span>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md aspect-square">
                <img
                  src={src}
                  alt={`Fitness project ${index + 1}`}
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
