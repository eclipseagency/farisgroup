import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Fitness & Gym - Faris Group",
  description:
    "Set up a world-class fitness facility with Faris Group's cutting-edge gym equipment and comprehensive fitness solutions.",
};

const equipmentCategories = [
  {
    title: "Cardio Equipment",
    description: "Treadmills, ellipticals, stationary bikes, rowing machines, and more.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    items: ["Treadmills", "Elliptical Trainers", "Stationary Bikes", "Rowing Machines", "Stair Climbers"],
  },
  {
    title: "Strength Training",
    description: "Free weights, weight machines, cable systems, and functional trainers.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
    items: ["Free Weights", "Weight Machines", "Cable Systems", "Smith Machines", "Functional Trainers"],
  },
  {
    title: "Group Fitness",
    description: "Complete group exercise solutions including cycling, yoga, and aerobics.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    items: ["Indoor Cycling Bikes", "Yoga Equipment", "Aerobics Gear", "Stretching Areas", "Group Training"],
  },
  {
    title: "Recovery & Wellness",
    description: "Stretching zones, foam rollers, massage equipment, and recovery tools.",
    image: "https://images.unsplash.com/photo-1540541338537-ad197a0bf17a?w=600&q=80",
    items: ["Stretching Equipment", "Foam Rollers", "Massage Tools", "Balance Trainers", "Resistance Bands"],
  },
];

export default function FitnessGymPage() {
  return (
    <>
      <PageHeader
        title="Fitness & Gym"
        subtitle="Complete Gym Solutions"
        description="Set up your world-class fitness facility with cutting-edge equipment. From small private gyms to large commercial fitness centers."
        breadcrumbs={[{ label: "Fitness & Gym" }]}
        backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-subtitle block">Fitness Solutions</span>
              <h2 className="section-title">
                World-Class Gym{" "}
                <span style={{ color: "#c9a227" }}>Equipment & Setup</span>
              </h2>
              <p className="text-gray-600 mt-5 leading-relaxed">
                Faris Group helps set up world-class fitness facilities with cutting-edge equipment
                from the world&apos;s leading manufacturers. Whether you&apos;re setting up a commercial
                gym, hotel fitness center, corporate wellness facility, or private home gym, we
                have the products and expertise to deliver.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Our fitness solutions are tailored to your specific needs — from space planning and
                equipment selection to installation and after-sales service. We partner with
                internationally recognized brands to ensure quality and reliability.
              </p>
              <div className="mt-8 space-y-2">
                {[
                  "Commercial gym setups",
                  "Hotel fitness centers",
                  "Corporate wellness facilities",
                  "School and university gyms",
                  "Home gym solutions",
                  "Sports club fitness areas",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "#c9a227" }} />
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
                  Get Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Gym Equipment"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">Equipment Range</span>
            <h2 className="section-title">
              Our Fitness <span style={{ color: "#c9a227" }}>Equipment Catalog</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipmentCategories.map((cat, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 60%)" }} />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-xl text-white">{cat.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ backgroundColor: "rgba(26,58,107,0.08)", color: "#1a3a6b" }}
                      >
                        {item}
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
