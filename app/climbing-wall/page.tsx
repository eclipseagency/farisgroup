import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Climbing Wall - Faris Group",
  description:
    "Faris Group offers indoor and outdoor climbing wall facilities from high quality reinforced fiberglass panels. Custom designs and full range of climbing accessories.",
};

const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2023/05/American-School-Wall-Climbing-Installation-5.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Kids-wall-climbing-MiraclZ-garden-Dubai-2-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Kids-wall-climbing-MiraclZ-garden-Dubai-3-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/LawnZ-Wall-Climbing_Danube-Properties-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/WhatsApp-Image-2020-12-23-at-9.53.49-AM-3.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/wall-climbing-jeddah-prep-scaled.jpg",
  "https://farisgroup.net/wp-content/uploads/2024/12/Wall-Climbing-Dubai-South-Clubhouse-3.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/12/Wall-Climbing-Dubai-South-Clubhouse-4.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/12/Wall-Climbing-Dubai-South-Clubhouse-6.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/12/Wall-Climbing-Dubai-South-Clubhouse-7.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/12/Wall-Climbing-Dubai-South-Clubhouse-14.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/12/climbing-wall-abu-dhabi-1.jpg",
];

export default function ClimbingWallPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2024/12/climbing-wall-abu-dhabi-1.jpg"
          alt="Climbing Wall Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Climbing Wall
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Climbing Wall</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Row 1: image left, title+text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/Kids-wall-climbing-MiraclZ-garden-Dubai-2.jpeg"
                alt="Kids Climbing Wall"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2
                className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase"
                style={{ color: "#1a8fc1" }}
              >
                Climbing Wall
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Indoor and Outdoor Wall Climbing Facilities made from high quality wall climbing
                panels from reinforced fiberglass, organic resin and wood. We offer custom made
                designs according to your specifications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We have a complete line of climbing accessories from safety helmets, carabiners,
                ropes, climbing holds, to safety landing mats and more.
              </p>
            </div>
          </div>

          {/* Row 2: text+button left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <p className="text-gray-600 leading-relaxed mb-8">
                Our climbing walls are not just structures; they are gateways to adventure and
                personal growth. With varying levels of difficulty, from beginner-friendly walls to
                challenging routes, climbers are encouraged to step out of their comfort zones,
                overcome obstacles, and build confidence. The thrill of scaling a climbing wall
                fosters a sense of achievement and empowerment while promoting physical fitness,
                coordination, and mental focus.
              </p>
              <Link
                href="#quote"
                className="inline-block px-10 py-4 font-semibold text-white text-sm uppercase tracking-widest rounded-full transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#0d1f3c" }}
              >
                Request a Quote
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/WhatsApp-Image-2020-12-23-at-9.53.49-AM-3.jpeg"
                alt="Climbing Wall Installation"
                className="w-full h-80 object-cover"
              />
            </div>
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
                  alt={`Climbing Wall project ${index + 1}`}
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
            <h2 className="section-title">Request a Quote</h2>
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
              style={{ backgroundColor: "#F47B20" }}
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
