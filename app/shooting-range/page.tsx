import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle, ArrowRight, Shield, Target, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Shooting Range - Faris Group",
  description:
    "Advanced shooting range solutions for professionals and enthusiasts. Supply and installation by Faris Group.",
};

const solutions = [
  {
    title: "Indoor Shooting Ranges",
    description:
      "Fully equipped indoor shooting range solutions with advanced target systems, ventilation, and acoustic design.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&q=80",
    features: ["Advanced target systems", "Safety baffles", "Ventilation systems", "Sound proofing"],
  },
  {
    title: "Outdoor Ranges",
    description:
      "Professional outdoor shooting range setups with weatherproof infrastructure and safety systems.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    features: ["Weather-resistant", "Long-range capability", "Safety berms", "Target automation"],
  },
  {
    title: "Target Systems",
    description:
      "Electronic and mechanical target systems for various shooting disciplines including pistol, rifle, and shotgun.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
    features: ["Electronic scoring", "Moving targets", "Multiple calibers", "Remote control"],
  },
  {
    title: "Safety Equipment",
    description:
      "Complete shooting range safety solutions including bullet traps, baffles, and protective barriers.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    features: ["Bullet traps", "Safety baffles", "Protective barriers", "Emergency systems"],
  },
];

export default function ShootingRangePage() {
  return (
    <>
      <PageHeader
        title="Shooting Range"
        subtitle="Professional Equipment"
        description="Advanced shooting range solutions designed to meet the needs of both shooting enthusiasts and professional athletes."
        breadcrumbs={[{ label: "Shooting Range" }]}
        backgroundImage="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=1920&q=80"
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-subtitle block">Shooting Solutions</span>
              <h2 className="section-title">
                Professional Shooting Range{" "}
                <span style={{ color: "#c9a227" }}>Supply & Installation</span>
              </h2>
              <p className="text-gray-600 mt-5 leading-relaxed">
                Faris Group offers advanced shooting range solutions designed for both enthusiasts
                and professional athletes. We supply and install complete shooting range
                infrastructure, from indoor ranges to full competition facilities.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Our shooting range solutions meet international safety standards and can be
                customized for various disciplines including pistol, rifle, shotgun, and archery.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Shield, label: "Safety First", desc: "International safety standards" },
                  { icon: Target, label: "Precision", desc: "Competition-grade systems" },
                  { icon: Award, label: "Certified", desc: "Internationally approved" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="text-center p-4 rounded-lg"
                      style={{ backgroundColor: "rgba(26,58,107,0.06)" }}
                    >
                      <Icon size={24} className="mx-auto mb-2" style={{ color: "#1a3a6b" }} />
                      <h4 className="font-bold text-sm mb-1" style={{ color: "#1a3a6b" }}>{item.label}</h4>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#1a3a6b" }}
                >
                  Get a Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80"
                alt="Shooting Range"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">Our Offerings</span>
            <h2 className="section-title">
              Shooting Range <span style={{ color: "#c9a227" }}>Solutions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 60%)" }} />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-xl text-white">{sol.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{sol.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sol.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-gray-700">
                        <CheckCircle size={12} style={{ color: "#c9a227" }} />
                        {f}
                      </div>
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
