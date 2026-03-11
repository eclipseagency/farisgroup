import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, Building2, Package, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Faris Group",
  description:
    "Faris Group offers comprehensive sports facility services including construction, supply, and maintenance across the Middle East.",
};

const services = [
  {
    icon: Building2,
    title: "Construction",
    description:
      "Full turn-key project delivery from concept to completion. We build bowling centers, shooting ranges, climbing walls, recreation centers, fitness clubs, squash courts, running tracks, home cinemas, football fields, and more.",
    href: "/construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    highlights: [
      "Bowling Centers",
      "Shooting Ranges",
      "Climbing Walls",
      "Recreation Centers",
      "Fitness Clubs",
      "Squash Courts",
      "Running Tracks",
      "Home Cinemas",
      "Football Fields",
      "Mini Golf Courses",
    ],
  },
  {
    icon: Package,
    title: "Supply",
    description:
      "Faris Group is among the top suppliers in the field — a qualified vendor for both private and government institutions. Named clients include ARAMCO, DAMAC, SABIC, Abu Dhabi Municipality, Dubai Municipality, Sharjah University, and more.",
    href: "/supply",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    highlights: [
      "ARAMCO",
      "DAMAC",
      "SABIC",
      "Abu Dhabi Municipality",
      "Dubai Municipality",
      "Sharjah University",
      "Al Dar Properties",
      "GEMS Schools",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description:
      "Professional repair and maintenance services for sports facilities including bowling centers, gymnasiums, running tracks, sports fields, and all equipment. Available as one-time or annual maintenance contracts.",
    href: "/maintenance",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    highlights: [
      "Bowling Centers",
      "Gymnasium Equipment",
      "Running Tracks",
      "Sports Fields",
      "Synthetic Turf",
      "Rubber Flooring",
      "One-time Service",
      "Annual Contracts",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="What We Do"
        description="Comprehensive sports solutions from facility construction and equipment supply to ongoing maintenance — Faris Group is your complete sports partner."
        breadcrumbs={[{ label: "Services" }]}
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">Our Capabilities</span>
            <h2 className="section-title">
              Total Sports <span style={{ color: "#c9a227" }}>Solutions</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              From the first design meeting to ongoing maintenance, Faris Group delivers
              comprehensive services that cover every phase of your sports facility journey.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: "rgba(201,162,39,0.1)" }}
                    >
                      <Icon size={28} style={{ color: "#c9a227" }} />
                    </div>
                    <span className="section-subtitle block">{service.title}</span>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl mb-5" style={{ color: "#0a1628" }}>
                      {service.title === "Construction" && "Turn-Key Facility Construction"}
                      {service.title === "Supply" && "Equipment & Materials Supply"}
                      {service.title === "Maintenance" && "Sports Facility Maintenance"}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#c9a227" }} />
                          {h}
                        </div>
                      ))}
                    </div>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#1a3a6b" }}
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className={`rounded-xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
