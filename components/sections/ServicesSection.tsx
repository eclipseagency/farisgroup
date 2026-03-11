"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Sports Equipment",
    description:
      "High-quality sports equipment from basketball hoops and soccer goals to volleyball nets and tennis rackets for all sporting activities.",
    href: "/products",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
    icon: "⚽",
  },
  {
    id: 2,
    title: "Fitness & Gym",
    description:
      "World-class fitness facilities with cutting-edge equipment including treadmills, weight machines, and comprehensive gym solutions.",
    href: "/fitness-and-gym",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    icon: "🏋️",
  },
  {
    id: 3,
    title: "Padel Courts",
    description:
      "Customize your padel court with VISION, PANORAMIC, and FORTE models. Available in 50+ countries with professional installation.",
    href: "/padel-court",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&q=80",
    icon: "🎾",
  },
  {
    id: 4,
    title: "Bleachers & Seating",
    description:
      "Durable and ergonomic bleachers and seating solutions for stadiums, arenas, and outdoor events with excellent sightlines.",
    href: "/bleachers-and-seating",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    icon: "🏟️",
  },
  {
    id: 5,
    title: "Shooting Range",
    description:
      "Advanced shooting range solutions designed to meet the needs of both shooting enthusiasts and professional athletes.",
    href: "/shooting-range",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&q=80",
    icon: "🎯",
  },
  {
    id: 6,
    title: "Construction",
    description:
      "Full-scope construction from squash courts and home cinemas to bowling centers and football fields across the Middle East.",
    href: "/construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    icon: "🏗️",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-subtitle block">What We Offer</span>
          <h2 className="section-title">
            Our <span style={{ color: "#c9a227" }}>Services</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            From sports equipment supply to full facility construction, we provide comprehensive
            solutions for all your sports and leisure needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="service-card group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(10,22,40,0.8) 0%, transparent 60%)" }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-lg" style={{ color: "#1a3a6b" }}>
                    {service.title}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                    style={{ color: "#c9a227" }}
                  />
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: "#c9a227" }}
              />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-10 py-4 font-semibold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:opacity-90 hover:gap-3"
            style={{ backgroundColor: "#1a3a6b" }}
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
