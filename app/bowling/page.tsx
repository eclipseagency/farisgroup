import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Bowling - Faris Group",
  description:
    "Faris Group specializes in creating captivating bowling experiences. Comprehensive bowling lane design, installation, and equipment for all ages and skill levels.",
};

const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2023/05/DSC05930-scaled.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/DSC05932-scaled.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/DSC05962-scaled.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/DSC05973-scaled.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/DSC05979-scaled.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/DSC06036-scaled.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/DSC06064-scaled.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/2023-05-21.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/DSC06022-1-scaled.jpg",
];

export default function BowlingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/DSC06018-scaled-1.jpg"
          alt="Bowling Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Bowling Lanes
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Bowling</span>
          </nav>
        </div>
      </div>

      {/* Intro — Part 1 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/DSC05980-scaled.jpg"
                alt="Bowling Lane"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Title + text */}
            <div>
              <h2
                className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase"
                style={{ color: "#1a8fc1" }}
              >
                Bowling Lanes
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Step into the world of entertainment with Faris Group&apos;s exceptional Bowling
                solutions. We specialize in creating captivating experiences that delight bowlers of
                all ages and skill levels. With our comprehensive range of offerings, we ensure a
                memorable time filled with strikes, spares, and laughter.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our modern bowling lanes are designed to deliver a thrilling and immersive
                experience. Whether you&apos;re a seasoned bowler or a beginner, our lanes provide a
                perfect platform to showcase your skills and enjoy friendly competition with family
                and friends.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Equipped with state-of-the-art technology and smooth surfaces, our lanes offer a
                seamless and enjoyable bowling experience.
              </p>
            </div>
          </div>

          {/* Part 2: text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Faris Group, we understand that creating a striking entertainment experience goes
                beyond just the equipment. That&apos;s why our team of experts is dedicated to
                providing comprehensive services, including design, installation, and maintenance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work closely with our clients to customize bowling solutions that meet their
                specific needs and preferences, ensuring that every detail is tailored to
                perfection.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/OWL-Bowling-SMAASH-Mall-8-1.jpeg"
                alt="Bowling Center"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Part 3: Everything Bowling */}
          <div className="text-center mb-10">
            <h2
              className="font-heading font-black text-3xl md:text-4xl mb-8 uppercase"
              style={{ color: "#1a8fc1" }}
            >
              Everything Bowling!
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <p className="text-gray-600 leading-relaxed mb-4">
                In addition to our top-quality lanes, we provide a wide selection of bowling
                equipment to enhance your gameplay. From premium bowling balls and shoes to scoring
                systems and pinsetters, our offerings are designed to meet the highest standards of
                performance and durability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you&apos;re planning to set up a bowling center, upgrade an existing
                facility, or add a bowling alley to your entertainment complex, Faris Group is your
                trusted partner. Let us transform your space into a vibrant bowling destination,
                where bowlers of all ages can gather, compete, and create lasting memories.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Choose Faris Group for comprehensive Bowling solutions that exceed expectations and
                deliver an exceptional entertainment experience.
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
                src="https://farisgroup.net/wp-content/uploads/2023/05/DSC06018-scaled-1.jpg"
                alt="Bowling Alley"
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
                  alt={`Bowling project ${index + 1}`}
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
