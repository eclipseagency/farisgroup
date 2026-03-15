import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bleachers & Seating - Faris Group",
  description:
    "Durable and ergonomic bleachers and seating solutions for stadiums, arenas, and outdoor events by Faris Group.",
};

const seatingTypes = [
  {
    title: "Stadium Seating",
    description:
      "Fixed and retractable stadium seating systems designed for large-scale sports venues with thousands of seats.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    features: ["Fixed & retractable", "Multiple color options", "Ergonomic design", "UV resistant"],
  },
  {
    title: "Bleacher Systems",
    description:
      "Portable and permanent bleacher solutions for schools, community centers, and multi-purpose sports facilities.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
    features: ["Portable options", "Easy installation", "Aluminum structure", "Customizable capacity"],
  },
  {
    title: "VIP Seating",
    description:
      "Premium VIP seating solutions with enhanced comfort and aesthetics for high-end sports facilities and executive boxes.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    features: ["Premium materials", "Enhanced comfort", "Custom upholstery", "Cup holders"],
  },
  {
    title: "Outdoor Grandstands",
    description:
      "Weather-resistant outdoor grandstand solutions designed for football fields, athletics tracks, and outdoor venues.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
    features: ["Weather-resistant", "Anti-corrosion", "Safety railings", "Roofing options"],
  },
];

export default function BleachersSeatingPage() {
  return (
    <>
      <PageHeader
        title="Bleachers & Seating"
        subtitle="Spectator Solutions"
        description="Durable and ergonomic bleachers and seating solutions to maximize spectator comfort for stadiums, arenas, and outdoor events."
        breadcrumbs={[{ label: "Bleachers & Seating" }]}
        backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                alt="Stadium Seating"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <span className="section-subtitle block">Spectator Solutions</span>
              <h2 className="section-title">
                Premium Seating for{" "}
                <span style={{ color: "#F47B20" }}>Every Venue</span>
              </h2>
              <p className="text-gray-600 mt-5 leading-relaxed">
                Faris Group provides durable and ergonomic bleachers and seating solutions to
                maximize spectator comfort. Whether you&apos;re outfitting a small community sports
                facility or a large international stadium, our seating solutions deliver excellent
                sightlines and comfort.
              </p>
              <div className="mt-8 space-y-2">
                {[
                  "Suitable for stadiums, arenas, and outdoor events",
                  "Excellent sightlines and ergonomic design",
                  "Available in multiple colors and configurations",
                  "UV-resistant and weather-proof materials",
                  "Professional installation and maintenance",
                  "Compliance with international safety standards",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "#F47B20" }} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#1a3a6b" }}
                >
                  Request a Proposal
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seating Types */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">Our Range</span>
            <h2 className="section-title">
              Seating <span style={{ color: "#F47B20" }}>Solutions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seatingTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2" style={{ color: "#1a3a6b" }}>
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.features.map((f, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ backgroundColor: "rgba(201,162,39,0.1)", color: "#C05E0E" }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
