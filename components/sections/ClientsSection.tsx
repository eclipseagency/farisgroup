"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "American International School of Jeddah", logo: "https://farisgroup.net/wp-content/uploads/2023/05/AISJ.png" },
  { name: "Albander Hotel & Resort", logo: "https://farisgroup.net/wp-content/uploads/2023/05/albander.png" },
  { name: "Al-Basateen Village", logo: "https://farisgroup.net/wp-content/uploads/2023/05/albasateen.png" },
  { name: "Arabian Homes", logo: "https://farisgroup.net/wp-content/uploads/2023/05/arabianhomes.png" },
  { name: "Saudi Aramco", logo: "https://farisgroup.net/wp-content/uploads/2023/05/aramco.png" },
  { name: "King Abdulaziz University", logo: "https://farisgroup.net/wp-content/uploads/2023/05/kauj.png" },
];

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Top border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5"
        style={{ background: "linear-gradient(90deg, transparent, #F47B20, transparent)" }}
      />

      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle block">CLIENTS</span>
          <h2 className="section-title">
            OUR{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F47B20, #F89B4B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CLIENTS
            </span>
          </h2>
        </motion.div>

        {/* Scrolling strip with gradient fade edges */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0a1628, transparent)" }} />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0a1628, transparent)" }} />

          <div className="flex items-center animate-clients-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center mx-5 px-8 py-4 rounded-2xl border transition-all duration-300 min-w-[190px] h-24 group hover:shadow-md cursor-default"
                style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-14 max-w-[150px] object-contain filter grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-400 scale-95 group-hover:scale-100"
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
          animation: clients-scroll 24s linear infinite;
          width: max-content;
        }
        .animate-clients-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
