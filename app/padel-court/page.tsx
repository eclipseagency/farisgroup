import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle, ArrowRight, Globe, Award, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Padel Court - Faris Group",
  description:
    "Customize your padel court with Faris Group's VISION, PANORAMIC, and FORTE models. Professional installation in 50+ countries worldwide.",
};

const models = [
  {
    name: "VISION",
    description:
      "The classic padel court with full glass walls offering maximum visibility for players and spectators. Ideal for clubs and training centers.",
    features: [
      "Full panoramic glass walls",
      "Standard 10m × 20m dimensions",
      "LED lighting system",
      "Weather-resistant structure",
      "Multiple color options",
    ],
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&q=80",
    popular: false,
  },
  {
    name: "PANORAMIC",
    description:
      "Enhanced visibility with extended glass panels for a stunning visual experience. Perfect for high-end clubs and commercial centers.",
    features: [
      "Extended glass side panels",
      "Open corners design",
      "Premium LED lighting",
      "Anti-slip flooring included",
      "Customizable branding",
    ],
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&q=80",
    popular: true,
  },
  {
    name: "FORTE",
    description:
      "The professional competition court built to international federation standards. The choice of tournaments and elite facilities.",
    features: [
      "International federation certified",
      "Competition-grade materials",
      "Professional LED system",
      "Acoustic optimization",
      "Premium branding package",
    ],
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&q=80",
    popular: false,
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Global Presence",
    description: "Successfully installed padel courts in over 50 countries worldwide.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "All courts meet international federation standards and certifications.",
  },
  {
    icon: Wrench,
    title: "Full Installation",
    description: "Professional installation team handles everything from foundation to handover.",
  },
];

export default function PadelCourtPage() {
  return (
    <>
      <PageHeader
        title="Padel Courts"
        subtitle="World-Class Design"
        description="Customize your padel court with our VISION, PANORAMIC, and FORTE models. Professional installation available in 50+ countries worldwide."
        breadcrumbs={[{ label: "Padel Court" }]}
        backgroundImage="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=1920&q=80"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-subtitle block">Our Padel Solutions</span>
              <h2 className="section-title">
                Professional Padel Courts for{" "}
                <span style={{ color: "#c9a227" }}>Every Need</span>
              </h2>
              <p className="text-gray-600 mt-5 leading-relaxed">
                Faris Group is one of the leading suppliers of padel courts, with our success
                having reached over 50 countries. Our efficient logistics and distribution network
                ensures timely delivery and professional installation worldwide.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Whether you&apos;re building a small club with two courts or a major padel center
                with 20+ courts, our team of experts will guide you through every step — from
                court selection to installation and maintenance.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="text-center p-4 rounded-lg"
                      style={{ backgroundColor: "rgba(201,162,39,0.08)" }}
                    >
                      <Icon size={24} className="mx-auto mb-2" style={{ color: "#c9a227" }} />
                      <h4 className="font-bold text-sm mb-1" style={{ color: "#1a3a6b" }}>
                        {benefit.title}
                      </h4>
                      <p className="text-gray-500 text-xs">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80"
                alt="Padel Court"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Court Models */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">Choose Your Model</span>
            <h2 className="section-title">
              Padel Court <span style={{ color: "#c9a227" }}>Models</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl overflow-hidden shadow-lg border-2 transition-transform hover:-translate-y-2 duration-300 ${
                  model.popular ? "" : "border-gray-100"
                }`}
                style={model.popular ? { borderColor: "#c9a227" } : {}}
              >
                {model.popular && (
                  <div
                    className="absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full z-10"
                    style={{ backgroundColor: "#c9a227" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 60%)" }} />
                  <h3 className="absolute bottom-4 left-4 font-heading font-black text-3xl text-white">
                    {model.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {model.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <CheckCircle size={15} style={{ color: "#c9a227" }} className="flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:opacity-90 rounded-sm"
                    style={{ backgroundColor: model.popular ? "#c9a227" : "#1a3a6b" }}
                  >
                    Get a Quote
                    <ArrowRight size={14} />
                  </Link>
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
