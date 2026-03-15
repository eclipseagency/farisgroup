import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Playground - Faris Group",
  description:
    "Faris Group provides safe and engaging playground equipment for schools, public parks, private homes, and compounds. All products hold necessary safety certificates.",
};

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
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Playground</span>
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
              <p className="text-gray-600 leading-relaxed">
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
              <p className="text-gray-600 leading-relaxed mb-8">
                With Faris Group&apos;s product range, you can transform ordinary spaces into
                vibrant and engaging playgrounds, where children can unleash their creativity,
                develop essential motor skills, and experience the pure joy of play. Let us help
                you to bring smiles... while ensuring their safety and well-being.
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
                src="https://farisgroup.net/wp-content/uploads/2023/05/Photo0011-1-960x720.jpg"
                alt="Playground Equipment"
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
                  alt={`Playground project ${index + 1}`}
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
