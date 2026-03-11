import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle, ArrowRight, Wrench, Calendar, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Maintenance - Faris Group",
  description:
    "Professional sports facility maintenance services by Faris Group — one-time and annual contracts for all sports equipment and surfaces.",
};

const maintenanceTypes = [
  {
    title: "Bowling Center Maintenance",
    description: "Full-service maintenance for bowling lanes, pin-setting machines, ball returns, and electronic scoring systems.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    features: ["Lane resurfacing", "Pinsetter service", "Scoring system updates", "Ball return maintenance"],
  },
  {
    title: "Gymnasium Equipment",
    description: "Preventive and corrective maintenance for all gym and fitness equipment including treadmills, weight machines, and cardio gear.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    features: ["Treadmill service", "Weight machine inspection", "Lubrication & adjustment", "Safety checks"],
  },
  {
    title: "Running Tracks & Sports Floors",
    description: "Specialized cleaning and maintenance using professional German equipment (Horger machine) for synthetic turf and rubber flooring.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
    features: ["Deep cleaning", "Line re-marking", "Surface repairs", "Rubber infill replenishment"],
  },
  {
    title: "Sports Fields",
    description: "Comprehensive maintenance for football fields, padel courts, squash courts, and multi-sport surfaces.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    features: ["Field inspection", "Surface repairs", "Drainage checks", "Equipment maintenance"],
  },
];

const contractTypes = [
  {
    icon: Wrench,
    title: "One-Time Service",
    description: "Single-visit maintenance for specific repairs, inspections, or seasonal servicing of your sports facilities.",
    features: ["Flexible scheduling", "Detailed service report", "Warranty on parts", "Emergency response"],
  },
  {
    icon: Calendar,
    title: "Annual Contract",
    description: "Comprehensive yearly maintenance contract covering scheduled visits, preventive maintenance, and priority emergency support.",
    features: ["Scheduled quarterly visits", "Priority support", "Discounted rates", "Dedicated service team"],
  },
  {
    icon: Shield,
    title: "Extended Warranty",
    description: "Extended warranty coverage for major equipment and infrastructure beyond standard manufacturer warranty periods.",
    features: ["Parts & labor covered", "Manufacturer support", "Rapid response", "Full documentation"],
  },
];

export default function MaintenancePage() {
  return (
    <>
      <PageHeader
        title="Maintenance"
        subtitle="Ongoing Support"
        description="Professional maintenance services for all sports facilities and equipment — available as one-time service or comprehensive annual contracts."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Maintenance" }]}
        backgroundImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80"
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-subtitle block">Maintenance Services</span>
              <h2 className="section-title">
                Keep Your Facility{" "}
                <span style={{ color: "#c9a227" }}>at Peak Performance</span>
              </h2>
              <p className="text-gray-600 mt-5 leading-relaxed">
                Faris Group provides professional repair and maintenance services for all types of
                sports facilities. Our experienced technicians use specialized equipment —
                including the German Horger machine for synthetic turf and rubber flooring — to
                deliver superior results.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Whether you need a one-time service visit or a comprehensive annual maintenance
                contract, our team is equipped to handle facilities of any size across the
                Middle East.
              </p>
              <div className="mt-8 space-y-2">
                {[
                  "Bowling centers and entertainment facilities",
                  "Gymnasium and fitness equipment",
                  "Running tracks and sports flooring",
                  "Artificial turf and natural grass fields",
                  "Padel and squash courts",
                  "Shooting range equipment",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "#c9a227" }} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#c9a227" }}
                >
                  Request Maintenance
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
                alt="Maintenance Services"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">Service Options</span>
            <h2 className="section-title">
              Maintenance <span style={{ color: "#c9a227" }}>Contracts</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contractTypes.map((contract, index) => {
              const Icon = contract.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(201,162,39,0.1)" }}
                  >
                    <Icon size={26} style={{ color: "#c9a227" }} />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3" style={{ color: "#1a3a6b" }}>
                    {contract.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{contract.description}</p>
                  <ul className="space-y-2">
                    {contract.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} style={{ color: "#c9a227" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Maintenance Types */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">What We Maintain</span>
            <h2 className="section-title">
              Facility <span style={{ color: "#c9a227" }}>Maintenance Scope</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 60%)" }} />
                  <h3 className="absolute bottom-3 left-4 font-heading font-bold text-lg text-white">{type.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.features.map((f, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ backgroundColor: "rgba(26,58,107,0.07)", color: "#1a3a6b" }}
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
