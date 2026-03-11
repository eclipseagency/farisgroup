"use client";

import { Shield, Globe, Award, Wrench, Clock, Users } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "20+ Years Experience",
    description:
      "Two decades of expertise in the sports and leisure industry across the Middle East.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Operations spanning over 50 countries with efficient logistics and worldwide distribution.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Official distributor of top international brands with uncompromising quality standards.",
  },
  {
    icon: Shield,
    title: "Trusted by Governments",
    description:
      "Qualified vendor for both private and government institutions across the region.",
  },
  {
    icon: Wrench,
    title: "End-to-End Solutions",
    description:
      "From supply and equipment to full facility construction and installation services.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Professional team dedicated to finding the perfect sports solution for your needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20" style={{ backgroundColor: "#f0f4ff" }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-subtitle block">Our Advantage</span>
          <h2 className="section-title">
            Why Choose <span style={{ color: "#c9a227" }}>Faris Group</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            We are your one-stop shop for all sports needs, always ready to deliver the right
            solution with excellence and expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary"
                  style={{ backgroundColor: "rgba(26,58,107,0.08)" }}
                >
                  <Icon
                    size={24}
                    className="transition-colors duration-300"
                    style={{ color: "#1a3a6b" }}
                  />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3" style={{ color: "#0a1628" }}>
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
