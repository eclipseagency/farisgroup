import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects - Faris Group",
  description:
    "Explore Faris Group's portfolio of completed sports facility projects across the Middle East and worldwide.",
};

const clients = [
  "ARAMCO", "DAMAC", "SABIC", "Abu Dhabi Municipality",
  "Dubai Municipality", "Sharjah University", "Al Dar Properties",
  "GEMS Schools", "Mosanada",
];

const projects = [
  {
    title: "Padel Court Complex",
    category: "Padel Courts",
    location: "Riyadh, Saudi Arabia",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&q=80",
    description: "Construction and installation of 8 PANORAMIC padel courts for a premium sports club.",
  },
  {
    title: "Fitness Center",
    category: "Fitness & Gym",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    description: "Complete gym fit-out with 200+ pieces of premium fitness equipment.",
  },
  {
    title: "Stadium Seating",
    category: "Bleachers & Seating",
    location: "Jeddah, Saudi Arabia",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    description: "Supply and installation of 5,000 ergonomic seats for a regional sports stadium.",
  },
  {
    title: "Shooting Range Facility",
    category: "Shooting Range",
    location: "Abu Dhabi, UAE",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&q=80",
    description: "Full shooting range setup with 20 lanes and electronic target systems.",
  },
  {
    title: "Football Academy",
    category: "Construction",
    location: "Dammam, Saudi Arabia",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    description: "Construction of 3 full-size football fields with artificial turf and floodlighting.",
  },
  {
    title: "Squash Center",
    category: "Construction",
    location: "Manama, Bahrain",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    description: "8-court squash center built to World Squash Federation standards.",
  },
  {
    title: "Recreation Center",
    category: "Supply",
    location: "Kuwait City, Kuwait",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
    description: "Complete sports equipment supply for a multi-purpose community recreation center.",
  },
  {
    title: "Hotel Fitness Suite",
    category: "Fitness & Gym",
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    description: "Premium hotel fitness center design and equipment supply for a 5-star property.",
  },
];


export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="Portfolio"
        description="A showcase of Faris Group's completed sports facility projects across the Middle East and internationally."
        breadcrumbs={[{ label: "Projects" }]}
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      {/* Trusted Clients */}
      <section className="py-12" style={{ backgroundColor: "#1a3a6b" }}>
        <div className="container-custom text-center">
          <p className="text-white/70 text-sm uppercase tracking-widest mb-6 font-semibold">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {clients.map((client, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-bold text-white/80 border border-white/20 rounded"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">Our Work</span>
            <h2 className="section-title">
              Completed <span style={{ color: "#c9a227" }}>Projects</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Browse a selection of our completed sports facility projects across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 60%)" }} />
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded text-white"
                    style={{ backgroundColor: "#c9a227" }}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading font-bold text-base" style={{ color: "#1a3a6b" }}>
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{project.location}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-10 py-4 text-white font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9a227" }}
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
