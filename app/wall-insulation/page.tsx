import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Wall Insulation - Faris Group",
  description:
    "Faris Group wall insulation solutions provide superior thermal and acoustic insulation for homes, offices, retail spaces, and industrial facilities.",
};

const whyChoose = [
  {
    title: "Thermal Comfort",
    description:
      "Our insulation materials help maintain a consistent indoor temperature, reducing the need for excessive heating or cooling and leading to significant energy savings.",
    image: "https://farisgroup.net/wp-content/uploads/2024/07/14fbb757-7447-4eb9-b4ab-a066fe5180b9-1.jpeg",
  },
  {
    title: "Soundproofing",
    description:
      "Enjoy a peaceful environment free from external noise. Our insulation solutions effectively reduce noise transmission, creating a quieter and more serene space.",
    image: "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.53-PM.jpeg",
  },
  {
    title: "Energy Efficiency",
    description:
      "By minimizing heat loss in the winter and heat gain in the summer, our wall insulation contributes to lower energy bills and a reduced carbon footprint.",
    image: "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.54-PM.jpeg",
  },
  {
    title: "Durability",
    description:
      "We use high-quality, durable materials that ensure long-lasting performance and require minimal maintenance.",
    image: "https://farisgroup.net/wp-content/uploads/2024/07/IMG5-1536x1023.jpg",
  },
  {
    title: "Expert Installation",
    description:
      "Our team of skilled professionals ensures precise and efficient installation, adhering to the highest industry standards.",
    image: "https://farisgroup.net/wp-content/uploads/2024/07/IMG4-1536x1023.jpg",
  },
];

const applications = [
  {
    title: "Homes",
    description: "Create a comfortable and energy-efficient living environment.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
        <path d="M8 32L32 10l24 22v22H8V32z" />
        <rect x="24" y="40" width="16" height="16" />
      </svg>
    ),
  },
  {
    title: "Offices",
    description: "Enhance productivity and comfort with effective temperature and noise control.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
        <rect x="8" y="8" width="48" height="48" rx="2" />
        <path d="M8 24h48M24 8v48M8 40h16" />
        <circle cx="44" cy="44" r="6" />
        <path d="M44 38v6h6" />
      </svg>
    ),
  },
  {
    title: "Retail Spaces",
    description: "Improve customer experience with a pleasant indoor climate.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
        <path d="M8 24h48l-4 32H12L8 24z" />
        <path d="M20 24V16a12 12 0 0124 0v8" />
        <circle cx="32" cy="40" r="4" />
      </svg>
    ),
  },
  {
    title: "Industrial Facilities",
    description: "Maintain optimal working conditions and protect against temperature extremes.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
        <rect x="4" y="32" width="56" height="28" rx="1" />
        <path d="M4 32l14-20v20M18 32l14-20v20M32 32l14-20v20" />
        <rect x="12" y="44" width="8" height="16" />
        <rect x="28" y="44" width="8" height="16" />
        <rect x="44" y="44" width="8" height="16" />
      </svg>
    ),
  },
];

const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.56-PM-1-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.56-PM-2.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.55-PM-1-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.55-PM-2.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.52-PM-1.jpeg",
];

export default function WallInsulationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n-1-1.jpg"
          alt="Wall Insulation Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-heading font-black text-3xl md:text-5xl mb-6 leading-tight">
            Enhance Comfort and Efficiency with Faris Group Wall Insulation Solutions
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Wall Insulation</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-heading font-black text-2xl md:text-3xl mb-4" style={{ color: "#1a8fc1" }}>
            Enhance Comfort and Efficiency with Faris Group Wall Insulation Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Faris Group, we understand the importance of a well-insulated space. Our state-of-the-art
            wall insulation solutions are designed to provide superior thermal and acoustic insulation,
            ensuring comfort, energy efficiency, and tranquility in your home, office, or any other space.
          </p>
        </div>
      </section>

      {/* Why Choose — alternating rows */}
      <section className="pb-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-2xl md:text-3xl" style={{ color: "#1a8fc1" }}>
              Why Choose Faris Group Wall Insulation?
            </h2>
          </div>

          <div className="space-y-14">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
                <div className={index % 2 === 0 ? "text-left" : "text-left lg:order-1"}>
                  <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: "#1a8fc1" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications — dark section */}
      <section className="py-20" style={{ backgroundColor: "#0d1f3c" }}>
        <div className="container-custom">
          <div className="text-center mb-4">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white flex items-center justify-center gap-3">
              <span style={{ color: "#00e5cc" }}>▶</span>
              Applications
              <span style={{ color: "#00e5cc" }}>◀</span>
            </h2>
          </div>
          <p className="text-center text-gray-300 text-sm max-w-2xl mx-auto mb-12">
            Whether you&apos;re looking to insulate residential, commercial, or industrial spaces,
            Faris Group offers customized wall insulation solutions tailored to your specific needs:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center border-2 transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: index === 0 ? "#00e5cc" : "transparent" }}
              >
                <div className="flex justify-center">{app.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-3" style={{ color: "#0d1f3c" }}>
                  {app.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#00e5cc" }}>
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-gray-50">
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
                  alt={`Wall insulation project ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-10">
            <span className="section-subtitle block">QUOTE</span>
            <h2 className="section-title">Install it in your place now!</h2>
            <p className="text-gray-500 text-sm mt-2">
              Your email address will not be published. Required fields are marked *
            </p>
          </div>
          <form className="bg-white rounded-2xl shadow-lg p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none"
            />
            <textarea
              rows={5}
              placeholder="Your Message *"
              className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white text-sm uppercase tracking-widest rounded-sm transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#c9a227" }}
            >
              Send Request
            </button>
          </form>
        </div>
      </section>

      <CTASection />
    </>
  );
}
