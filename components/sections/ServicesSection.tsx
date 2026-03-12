"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const serviceCards = [
  {
    title: "Maintenance",
    description: "Maintenance services for sports fields",
    href: "/maintenance",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/DSC05991-scaled-1.jpg",
  },
  {
    title: "Project Management",
    description: "Management for sports projects",
    href: "/services",
    image: "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-11-1.jpeg",
  },
  {
    title: "Supply",
    description: "Sports and entertainment supplies",
    href: "/supply",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/LawnZ-Wall-Climbing_Danube-Properties-1-1.jpeg",
  },
  {
    title: "Construction",
    description: "Faris Group delivers projects with distinction",
    href: "/construction",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/Rangers-Range-3-lanes-indoor-target-shooting-project-1-1-1.jpeg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="section-subtitle block">SERVICES</span>
          <h2 className="section-title">
            OUR <span style={{ color: "#c9a227" }}>SERVICES</span>
          </h2>
        </div>

        {/* Description Text */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4 text-gray-600 text-base leading-relaxed text-center">
          <p>
            <strong style={{ color: "#1a3a6b" }}>Sports Facility Design and Construction:</strong>{" "}
            We specialize in creating state-of-the-art sports facilities tailored to your unique
            needs. From concept to completion, we ensure every aspect of the design and
            construction process is meticulously executed, resulting in exceptional spaces that
            inspire athletes and enthusiasts.
          </p>
          <p>
            <strong style={{ color: "#1a3a6b" }}>Equipment and Supply:</strong>{" "}
            Discover a wide range of top-quality sports equipment and supplies to enhance your
            facility. Whether you need fitness equipment, court accessories, or specialized gear,
            we offer reliable products that meet the highest industry standards.
          </p>
          <p>
            <strong style={{ color: "#1a3a6b" }}>Turn-key Project Management:</strong>{" "}
            Sit back and relax as our experienced team takes care of your project.
          </p>
          <div className="pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#c9a227" }}
            >
              Learn more
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 min-h-[220px] flex items-end"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.3) 60%, transparent 100%)" }}
              />
              {/* Text */}
              <div className="relative z-10 p-5 w-full">
                <h3 className="font-heading font-bold text-lg text-white mb-1">{card.title}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{card.description}</p>
              </div>
              {/* Gold bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: "#c9a227" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
