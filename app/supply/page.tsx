import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle, ArrowRight, Building2, Shield, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Supply - Faris Group",
  description:
    "Faris Group is among the top suppliers in the field and a qualified vendor for both private and government institutions across the Middle East.",
};

const supplyAreas = [
  "Sports equipment supply",
  "Gym and fitness equipment",
  "Stadium and arena seating",
  "Sports flooring and surfaces",
  "Athletic track materials",
  "Swimming pool equipment",
  "Court construction materials",
  "Scoreboards and displays",
  "Sports lighting systems",
  "Safety and protective equipment",
];

const qualifications = [
  {
    icon: Building2,
    title: "Government Approved",
    description: "Qualified and approved vendor for government institutions across the GCC and wider Middle East.",
  },
  {
    icon: Shield,
    title: "ISO Certified",
    description: "Operating to ISO quality management standards ensuring consistent quality delivery.",
  },
  {
    icon: Globe,
    title: "International Network",
    description: "Direct relationships with international manufacturers for competitive pricing and availability.",
  },
  {
    icon: Award,
    title: "Brand Authorized",
    description: "Authorized distributor for multiple top-tier international sports equipment brands.",
  },
];

export default function SupplyPage() {
  return (
    <>
      <PageHeader
        title="Supply"
        subtitle="Equipment Supply"
        description="Faris Group is among the top suppliers in the field — a qualified vendor for both private and government institutions."
        breadcrumbs={[{ label: "Supply" }]}
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80"
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-subtitle block">Supply Services</span>
              <h2 className="section-title">
                Your Trusted{" "}
                <span style={{ color: "#c9a227" }}>Sports Equipment</span> Supplier
              </h2>
              <p className="text-gray-600 mt-5 leading-relaxed">
                Faris Group is among the top suppliers in the sports and leisure field. We are a
                qualified vendor for both private and government institutions, with a proven track
                record of delivering quality products on time across the Middle East and beyond.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Our supply division manages the procurement, warehousing, and delivery of sports
                equipment from our network of international brand partners. We handle everything
                from single-item purchases to large-scale facility outfitting projects.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {supplyAreas.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={15} style={{ color: "#c9a227" }} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#c9a227" }}
                >
                  Request a Quotation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
                alt="Supply Services"
                className="w-full h-96 object-cover"
              />
              <div
                className="absolute -bottom-6 -right-6 p-6 rounded-lg shadow-xl text-white hidden md:block"
                style={{ backgroundColor: "#1a3a6b" }}
              >
                <div className="text-3xl font-black font-heading">500+</div>
                <div className="text-sm font-medium opacity-90">Projects Supplied</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">Our Credentials</span>
            <h2 className="section-title">
              Why We&apos;re the{" "}
              <span style={{ color: "#c9a227" }}>Preferred Supplier</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => {
              const Icon = qual.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "rgba(201,162,39,0.1)" }}
                  >
                    <Icon size={24} style={{ color: "#c9a227" }} />
                  </div>
                  <h3 className="font-heading font-bold text-base mb-2" style={{ color: "#1a3a6b" }}>
                    {qual.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{qual.description}</p>
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
