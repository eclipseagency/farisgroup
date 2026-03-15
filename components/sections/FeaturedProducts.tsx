"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Padel Courts",
    subtitle: "VISION · PANORAMIC · FORTE",
    description: "Customizable padel court models for every need and budget, available worldwide.",
    href: "/padel-court",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    title: "Fitness & Gym",
    subtitle: "Complete Gym Solutions",
    description: "State-of-the-art fitness equipment for commercial and private facilities.",
    href: "/fitness-and-gym",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Bleachers & Seating",
    subtitle: "Stadium Solutions",
    description: "Ergonomic seating for stadiums, arenas, and sports venues.",
    href: "/bleachers-and-seating",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Shooting Range",
    subtitle: "Professional Equipment",
    description: "Advanced shooting range solutions for professionals and enthusiasts.",
    href: "/shooting-range",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "Construction",
    subtitle: "Full Build Services",
    description: "Complete construction of sports facilities from design to handover.",
    href: "/construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    span: "col-span-1 row-span-1",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-subtitle block">Our Portfolio</span>
            <h2 className="section-title">
              Featured <span style={{ color: "#F47B20" }}>Products &amp; Services</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:gap-3"
            style={{ color: "#1a3a6b" }}
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large Feature Card */}
          <Link
            href={categories[0].href}
            className="group relative overflow-hidden rounded-lg lg:row-span-2 min-h-[400px] lg:min-h-[500px]"
          >
            <img
              src={categories[0].image}
              alt={categories[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.4) 50%, transparent 100%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: "#F47B20" }}>
                {categories[0].subtitle}
              </p>
              <h3 className="font-heading font-bold text-2xl mb-2">{categories[0].title}</h3>
              <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">
                {categories[0].description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#F47B20" }}>
                Explore <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          {/* Smaller Cards */}
          {categories.slice(1).map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative overflow-hidden rounded-lg min-h-[240px]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.3) 60%, transparent 100%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#F47B20" }}>
                  {cat.subtitle}
                </p>
                <h3 className="font-heading font-bold text-lg mb-1">{cat.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#F47B20" }}>
                  Explore <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
