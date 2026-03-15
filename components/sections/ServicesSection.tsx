"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    href: "/project-management",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#f8f9fc" }}>
      {/* Bg decoration */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(26,58,107,0.06) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="section-subtitle block">SERVICES</span>
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
                  SERVICES
                </span>
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-3"
              style={{ color: "#F47B20" }}
            >
              View All Services
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="lg:col-span-2 space-y-4 text-gray-500 text-base leading-relaxed">
            <p>
              <strong style={{ color: "#0a1628" }}>Sports Facility Design and Construction:</strong>{" "}
              We specialize in creating state-of-the-art sports facilities tailored to your unique needs.
              From concept to completion, we ensure every aspect of the design and construction process
              is meticulously executed.
            </p>
            <p>
              <strong style={{ color: "#0a1628" }}>Equipment and Supply:</strong>{" "}
              Discover a wide range of top-quality sports equipment and supplies to enhance your facility.
              Whether you need fitness equipment, court accessories, or specialized gear, we offer
              reliable products that meet the highest industry standards.
            </p>
          </div>
          <div className="flex items-end">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 px-8 py-4 font-bold text-sm tracking-widest uppercase text-white rounded-sm transition-all duration-300 hover:opacity-90 hover:gap-3 hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)" }}
            >
              Learn More
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={card.href}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 min-h-[260px] flex items-end hover:-translate-y-2 block"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{ background: "linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.3) 60%, transparent 100%)" }}
                />
                {/* Arrow icon top-right */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0"
                  style={{ backgroundColor: "rgba(201,162,39,0.9)" }}
                >
                  <ArrowUpRight size={14} className="text-white" />
                </div>
                {/* Text */}
                <div className="relative z-10 p-6 w-full">
                  <h3 className="font-heading font-bold text-lg text-white mb-1">{card.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{card.description}</p>
                </div>
                {/* Gold bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: "linear-gradient(90deg, #F47B20, #F89B4B)" }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
