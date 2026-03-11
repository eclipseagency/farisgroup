"use client";

// Real Faris Group clients shown on farisgroup.net
const clients = [
  {
    name: "American International School of Jeddah",
    short: "AISJ",
    logo: "https://farisgroup.net/wp-content/uploads/2023/06/AISJ-Logo.png",
  },
  {
    name: "Albander Hotel & Resort",
    short: "albander",
    logo: "https://farisgroup.net/wp-content/uploads/2023/06/albander-logo.png",
  },
  {
    name: "Al-Basateen Village",
    short: "Al-Basateen",
    logo: "https://farisgroup.net/wp-content/uploads/2023/06/albasateen-logo.png",
  },
  {
    name: "Arabian Homes",
    short: "Arabian Homes",
    logo: "https://farisgroup.net/wp-content/uploads/2023/06/arabian-homes-logo.png",
  },
  {
    name: "Saudi Aramco",
    short: "Aramco",
    logo: "https://farisgroup.net/wp-content/uploads/2023/06/aramco-logo.png",
  },
  {
    name: "King Abdulaziz University",
    short: "KAU",
    logo: "https://farisgroup.net/wp-content/uploads/2023/06/KAU-logo.png",
  },
];

// Fallback styled card when image fails to load
function ClientCard({ client }: { client: typeof clients[0] }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-8 py-4 mx-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-w-[180px] h-20 group">
      <img
        src={client.logo}
        alt={client.name}
        className="max-h-12 max-w-[140px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="font-heading font-bold text-sm tracking-wider text-gray-400 group-hover:text-primary transition-colors">${client.short}</span>`;
          }
        }}
      />
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="section-subtitle block">Trusted By</span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl" style={{ color: "#0a1628" }}>
            Our{" "}
            <span style={{ color: "#c9a227" }}>Valued Clients</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
            Faris Group is a qualified vendor trusted by leading private and government
            organizations across the Middle East.
          </p>
        </div>

        {/* Scrolling Client Logos */}
        <div className="relative overflow-hidden">
          <div className="flex items-center animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <ClientCard key={index} client={client} />
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
          animation: scroll 20s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
