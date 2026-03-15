import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Billiards - Faris Group",
  description:
    "Faris Group — your ultimate destination for billiard tables, cues, and accessories. Premium game tables for leisure and professional tournaments.",
};

const galleryImages = [
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/collection-intemporel-billard-montfort-1.jpg",
    alt: "Collection Intemporel Billiard",
  },
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/billirds.png",
    alt: "Billiards",
  },
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/billiard-table-psro02p77kcgu82xo6ukiejqyqgf7vc64oatv4t8oc.png",
    alt: "Billiard Table",
  },
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/accessories3-psrpa039l0dffwntrri0jrxni1o9cdcdhhr8d1ihfg.png",
    alt: "Billiard Accessories",
  },
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/recreational-psrnsfagekgafcusemcpifvl0wsp5z5u3y7h447q6w.png",
    alt: "Recreational Game Table",
  },
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/Billiards-5-onfl75yzmrtehp7mrji470il4amdy59hk666g6tsr6.jpeg",
    alt: "Billiards 5",
  },
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/Billiards-7-onfl78si79x9gj3jb2pzwhsywg8hl8kokk4mw0pm8i-1.jpeg",
    alt: "Billiards 7",
  },
  {
    src: "https://farisgroup.net/wp-content/uploads/2023/05/9ftbilliardo-pso620jik93j1wame1n1j2hc2kbt03ui1i7pvstyoi.jpg",
    alt: "9ft Billiard Table",
  },
];

export default function BilliardsPage() {
  return (
    <>
      {/* Hero — Static Image */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/collection-heritage-billard-montfort-1-scaled-2.jpg"
          alt="Billiards Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Billiards
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Billiards</span>
          </nav>
        </div>
      </div>

      {/* Intro — Row 1: image left, title+text right */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/collection-intemporel-billard-montfort-1.jpg"
                alt="Billiard Table Collection"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Title + text */}
            <div className="text-center lg:text-left">
              <h2
                className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase"
                style={{ color: "#1a8fc1" }}
              >
                Billiards
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                At Faris Group, we are your ultimate destination for all your game table needs.
                Whether you&apos;re a seasoned billiards player, a fan of air hockey or table
                tennis, or enjoy friendly competitions on the football table, we have you covered.
              </p>
              <p className="text-white/60 leading-relaxed">
                Our extensive selection of billiard tables, cues, and accessories ensures an
                immersive and enjoyable gaming experience. Additionally, we offer a variety of game
                table accessories to enhance your gameplay and keep your equipment in top condition.
              </p>
            </div>
          </div>

          {/* Row 2: text+button left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <p className="text-white/60 leading-relaxed mb-4">
                Elevate your entertainment space with our premium Billiards tables. Crafted with
                precision and style, our tables provide an authentic playing experience, perfect for
                leisurely games or professional tournaments.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Trust Faris Group to provide you with the highest quality game tables and
                accessories that will elevate your recreational space to new levels of fun and
                entertainment.
              </p>
              <Link
                href="#quote"
                className="inline-block px-10 py-4 font-semibold text-white text-sm uppercase tracking-widest rounded-full transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#0d1f3c" }}
              >
                Request a Quote
              </Link>
            </div>
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/9ftbilliardo-pso620jik93j1wame1n1j2hc2kbt03ui1i7pvstyoi.jpg"
                alt="9ft Billiard Table"
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-10">
            <span className="section-subtitle block">QUOTE</span>
            <h2 className="section-title">Request a Quote</h2>
            <p className="text-white/50 text-sm mt-2">
              Your email address will not be published. Required fields are marked *
            </p>
          </div>
          <form className="rounded-2xl shadow-lg p-8 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none"
            />
            <textarea
              rows={5}
              placeholder="Your Message *"
              className="w-full border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none resize-none"
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
