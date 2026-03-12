"use client";

const clients = [
  { name: "American International School of Jeddah", short: "AISJ" },
  { name: "Albander Hotel & Resort", short: "albander" },
  { name: "Al-Basateen Village", short: "Al-Basateen" },
  { name: "Arabian Homes", short: "Arabian Homes" },
  { name: "Saudi Aramco", short: "Aramco" },
  { name: "King Abdulaziz University", short: "KAU" },
  { name: "DAMAC Properties", short: "DAMAC" },
  { name: "SABIC", short: "SABIC" },
  { name: "Dubai Municipality", short: "Dubai Mun." },
  { name: "GEMS Schools", short: "GEMS" },
];

export default function ClientsSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="section-subtitle block">CLIENTS</span>
          <h2 className="section-title">
            OUR <span style={{ color: "#c9a227" }}>CLIENTS</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex items-center animate-clients-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center mx-5 px-8 py-4 bg-white border border-gray-200 rounded-lg hover:border-gold transition-colors duration-300 min-w-[180px] h-16 group"
                style={{ "--tw-border-opacity": 1 } as React.CSSProperties}
              >
                <span className="font-heading font-bold text-xs tracking-widest uppercase text-gray-400 group-hover:text-primary transition-colors duration-300 text-center">
                  {client.short}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes clients-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-clients-scroll {
          animation: clients-scroll 22s linear infinite;
          width: max-content;
        }
        .animate-clients-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
