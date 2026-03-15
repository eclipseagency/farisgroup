"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    title: "Bowling Alley",
    description:
      "Create a striking entertainment experience with our comprehensive Bowling solutions. From modern bowling lanes to top-quality equipment, our offerings ensure a memorable time for bowlers of all ages and skill levels.",
    href: "/construction",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/DSC05991-scaled-1.jpg",
    tag: "Entertainment",
  },
  {
    title: "Padel Court",
    description:
      "Experience the excitement of Padel with our top-quality Padel Courts. Designed for both recreational and competitive play, our courts offer excellent durability and performance, ensuring a thrilling game every time.",
    href: "/padel-court",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/Private-Villa-Padel-Court-Riyadh-4-1024x768-1-1.jpeg",
    tag: "Sports",
  },
  {
    title: "Fitness & Gym",
    description:
      "Set up a world-class fitness facility with our cutting-edge Fitness & Gym equipment. Our range includes treadmills, weight machines, cardio equipment, and more, designed to support diverse fitness goals.",
    href: "/fitness-and-gym",
    image: "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-11-1.jpeg",
    tag: "Fitness",
  },
  {
    title: "Playground",
    description:
      "At Faris Group, we understand the importance of creating engaging and safe playgrounds for children. Our product range encompasses a wide variety of equipment suitable for schools, public parks, private homes, and compounds.",
    href: "/products",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/phoro10-1-1.jpg",
    tag: "Recreation",
  },
  {
    title: "Climbing Wall",
    description:
      "Inspire adventure and challenge with our innovative Climbing Walls. Built to the highest safety standards, our walls offer varying levels of difficulty, providing a thrilling experience for climbers of all skill levels.",
    href: "/construction",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/LawnZ-Wall-Climbing_Danube-Properties-1-1.jpeg",
    tag: "Adventure",
  },
  {
    title: "Shooting Range",
    description:
      "Ensure precision and safety in shooting sports with our advanced Shooting Range solutions. Our range includes target systems, bullet traps, and shooting accessories, providing a controlled and safe environment.",
    href: "/shooting-range",
    image: "https://farisgroup.net/wp-content/uploads/2023/06/Rangers-Range-3-lanes-indoor-target-shooting-project-1-1-1.jpeg",
    tag: "Precision",
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(244,123,32,0.12) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle block">OUR PRODUCTS</span>
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
              SOLUTIONS
            </span>
          </h2>
          <p className="text-white/50 mt-3 text-base max-w-xl mx-auto">
            World-class sports and entertainment solutions tailored to your vision.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(12px)" }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(10,22,40,0.75) 0%, transparent 60%)" }}
                />
                {/* Tag */}
                <span
                  className="absolute top-4 left-4 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(244,123,32,0.9)", color: "#fff" }}
                >
                  {product.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="font-heading font-bold text-xl mb-3 text-white transition-colors group-hover:text-[#F47B20]"
                >
                  {product.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1 line-clamp-3">
                  {product.description}
                </p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <Link
                    href={product.href}
                    className="group/link inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-3"
                    style={{ color: "#F47B20" }}
                  >
                    Explore More
                    <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Bottom gold line on hover */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, #F47B20, #F89B4B)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 px-10 py-4 font-bold text-sm tracking-widest uppercase text-white rounded-sm transition-all duration-300 hover:opacity-90 hover:gap-3 hover:shadow-xl hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)" }}
          >
            VIEW ALL PROJECTS
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 px-10 py-4 border-2 font-bold text-sm tracking-widest uppercase text-white rounded-sm transition-all duration-300 hover:bg-white/10"
            style={{ borderColor: "rgba(255,255,255,0.25)" }}
          >
            SPORTS EQUIPMENT
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
