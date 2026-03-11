"use client";

// Real international brand partners of Faris Group
const brands = [
  "ARTISPORT",
  "TUFF STUFF",
  "LANDICE",
  "LIMONTA",
  "NOTRAX",
  "OMSI",
  "INTERKAL",
  "HOLLMAN",
  "AACER",
  "DALLARIVA",
  "BOEN",
  "TOPFLOR",
  "ECOPLAS",
  "CASALI SPORT",
  "OSST",
  "ACT",
];

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="section-subtitle block">Our Partners</span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl" style={{ color: "#0a1628" }}>
            Official Distributor of{" "}
            <span style={{ color: "#c9a227" }}>Top International Brands</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
            Faris Group partners with globally recognized brands from Italy, USA, and beyond
            to bring the finest sports equipment to the Middle East.
          </p>
        </div>

        {/* Scrolling Brand Logos */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-10 animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 border border-gray-200 rounded-lg hover:border-gold transition-colors duration-300 min-w-[150px] text-center group"
              >
                <span className="font-heading font-bold text-xs tracking-widest uppercase text-gray-400 group-hover:text-primary transition-colors duration-300">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
