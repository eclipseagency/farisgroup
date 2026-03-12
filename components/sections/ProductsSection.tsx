"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Bowling Alley",
    description:
      "Create a striking entertainment experience with our comprehensive Bowling solutions. From modern bowling lanes to top-quality equipment, our offerings ensure a memorable time for bowlers of all ages and skill levels.",
    href: "/construction",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/DSC05991-scaled-1.jpg",
  },
  {
    title: "Padel Court",
    description:
      "Experience the excitement of Padel with our top-quality Padel Courts. Designed for both recreational and competitive play, our courts offer excellent durability and performance, ensuring a thrilling game every time.",
    href: "/padel-court",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/Private-Villa-Padel-Court-Riyadh-4-1024x768-1-1.jpeg",
  },
  {
    title: "Fitness & Gym",
    description:
      "Set up a world-class fitness facility with our cutting-edge Fitness & Gym equipment. Our range includes treadmills, weight machines, cardio equipment, and more, designed to support diverse fitness goals.",
    href: "/fitness-and-gym",
    image: "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-11-1.jpeg",
  },
  {
    title: "Playground",
    description:
      "At Faris Group, we understand the importance of creating engaging and safe playgrounds for children. Our product range encompasses a wide variety of equipment that is suitable for playgrounds in schools, public parks, private homes, and compounds.",
    href: "/products",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/phoro10-1-1.jpg",
  },
  {
    title: "Climbing Wall",
    description:
      "Inspire adventure and challenge with our innovative Climbing Walls. Built to the highest safety standards, our walls offer varying levels of difficulty, providing a thrilling experience for climbers while promoting physical fitness and skill development.",
    href: "/construction",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/LawnZ-Wall-Climbing_Danube-Properties-1-1.jpeg",
  },
  {
    title: "Shooting Range",
    description:
      "Ensure precision and safety in shooting sports with our advanced Shooting Range solutions. Our range includes target systems, bullet traps, and shooting accessories, providing a controlled and safe environment for enthusiasts and professionals.",
    href: "/shooting-range",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/Rangers-Range-3-lanes-indoor-target-shooting-project-1-1-1.jpeg",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-subtitle block">OUR PRODUCTS</span>
          <h2 className="section-title">
            OUR <span style={{ color: "#c9a227" }}>SOLUTIONS</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">Learn more about our products.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 60%)" }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl mb-3" style={{ color: "#1a3a6b" }}>
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{product.description}</p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:gap-2.5"
                    style={{ color: "#c9a227" }}
                  >
                    See more
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-10 py-4 font-semibold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "#1a3a6b" }}
          >
            VIEW ALL PROJECTS
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-10 py-4 border-2 font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:text-white"
            style={{ borderColor: "#1a3a6b", color: "#1a3a6b" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a3a6b")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            SPORTS EQUIPMENT
          </Link>
        </div>
      </div>
    </section>
  );
}
