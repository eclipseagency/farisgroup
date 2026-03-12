"use client";

const clients = [
  {
    name: "American International School of Jeddah",
    logo: "https://farisgroup.net/wp-content/uploads/2023/05/AISJ.png",
  },
  {
    name: "Albander Hotel & Resort",
    logo: "https://farisgroup.net/wp-content/uploads/2023/05/albander.png",
  },
  {
    name: "Al-Basateen Village",
    logo: "https://farisgroup.net/wp-content/uploads/2023/05/albasateen.png",
  },
  {
    name: "Arabian Homes",
    logo: "https://farisgroup.net/wp-content/uploads/2023/05/arabianhomes.png",
  },
  {
    name: "Saudi Aramco",
    logo: "https://farisgroup.net/wp-content/uploads/2023/05/aramco.png",
  },
  {
    name: "King Abdulaziz University",
    logo: "https://farisgroup.net/wp-content/uploads/2023/05/kauj.png",
  },
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
                className="flex-shrink-0 flex items-center justify-center mx-6 px-8 py-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all duration-300 min-w-[180px] h-24 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-14 max-w-[150px] object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
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
