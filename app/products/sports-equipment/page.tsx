import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sports Equipment - Faris Group",
  description:
    "Browse Faris Group's comprehensive range of sports equipment from basketball and soccer to volleyball, tennis, and athletic gear.",
};

const equipment = [
  {
    category: "Ball Sports",
    items: [
      { name: "Basketball Equipment", image: "https://images.unsplash.com/photo-1546519638405-a2c30e5e8f6a?w=400&q=80", desc: "Professional backboards, hoops, and ball-handling equipment." },
      { name: "Football Goals", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80", desc: "Portable and fixed football goals to international standards." },
      { name: "Volleyball Systems", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80", desc: "Complete volleyball systems including posts, nets, and accessories." },
      { name: "Tennis Equipment", image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=400&q=80", desc: "Tennis posts, nets, rackets, and court accessories." },
    ],
  },
  {
    category: "Athletics",
    items: [
      { name: "Track & Field", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80", desc: "Hurdles, shot puts, javelins, and athletics equipment." },
      { name: "Gymnastics", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80", desc: "Gymnastics apparatus including mats, vaults, and beams." },
      { name: "Martial Arts", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&q=80", desc: "Tatami mats, punching bags, and martial arts gear." },
      { name: "Boxing", image: "https://images.unsplash.com/photo-1615117972428-8ea1f32d6450?w=400&q=80", desc: "Boxing rings, punching bags, gloves, and training equipment." },
    ],
  },
  {
    category: "Water Sports",
    items: [
      { name: "Swimming Pools", image: "https://images.unsplash.com/photo-1540541338537-ad197a0bf17a?w=400&q=80", desc: "Complete pool equipment including lane ropes, starting blocks, and timing systems." },
      { name: "Water Polo", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80", desc: "Water polo goals and competition equipment." },
    ],
  },
];

export default function SportsEquipmentPage() {
  return (
    <>
      <PageHeader
        title="Sports Equipment"
        subtitle="Equipment Catalog"
        description="Comprehensive range of high-quality sports equipment for all disciplines — from professional to recreational use."
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Sports Equipment" }]}
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80"
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          {equipment.map((cat, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-heading font-bold text-2xl" style={{ color: "#1a3a6b" }}>
                  {cat.category}
                </h2>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.items.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm mb-1.5" style={{ color: "#1a3a6b" }}>
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-white font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#F47B20" }}
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
