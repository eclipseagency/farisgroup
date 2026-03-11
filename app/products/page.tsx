import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products - Faris Group",
  description:
    "Browse Faris Group's comprehensive range of sports products and equipment — from fitness gear to padel courts and bleacher seating.",
};

const productCategories = [
  {
    title: "Sports Equipment",
    description:
      "Wide range of high-quality sports equipment including basketball hoops, soccer goals, volleyball nets, tennis rackets, and more for all sporting activities.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    href: "/products/sports-equipment",
    tags: ["Basketball", "Soccer", "Volleyball", "Tennis", "Athletics"],
  },
  {
    title: "Fitness & Gym Equipment",
    description:
      "Set up a world-class fitness facility with cutting-edge equipment including treadmills, weight machines, cardio equipment, and comprehensive gym solutions.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    href: "/fitness-and-gym",
    tags: ["Treadmills", "Weight Machines", "Cardio", "Free Weights"],
  },
  {
    title: "Padel Courts",
    description:
      "Customize your padel court with VISION, PANORAMIC, and FORTE models. Available in 50+ countries with professional installation services.",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&q=80",
    href: "/padel-court",
    tags: ["VISION", "PANORAMIC", "FORTE", "Custom"],
  },
  {
    title: "Bleachers & Seating",
    description:
      "Durable and ergonomic bleachers and seating solutions for stadiums, arenas, and outdoor events with excellent sightlines and spectator comfort.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    href: "/bleachers-and-seating",
    tags: ["Stadiums", "Arenas", "Outdoor", "Indoor"],
  },
  {
    title: "Squash Courts",
    description:
      "State-of-the-art squash courts built to international standards with excellent ball rebound and optimal playing conditions for players of all levels.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    href: "/construction",
    tags: ["International Standard", "All Levels", "Professional"],
  },
  {
    title: "Shooting Range Equipment",
    description:
      "Advanced shooting range solutions designed for both shooting enthusiasts and professionals, meeting international safety and performance standards.",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80",
    href: "/shooting-range",
    tags: ["Professional", "Safety", "Indoor", "Outdoor"],
  },
  {
    title: "SPA & Pool Solutions",
    description:
      "Create luxurious and rejuvenating experiences with our exceptional SPA and Pool solutions, whether for relaxation or a refreshing aquatic environment.",
    image: "https://images.unsplash.com/photo-1540541338537-ad197a0bf17a?w=800&q=80",
    href: "/products",
    tags: ["SPA", "Pool", "Aquatic", "Luxury"],
  },
  {
    title: "Sports Flooring",
    description:
      "Professional sports flooring solutions for indoor and outdoor facilities, meeting international standards for performance and safety.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    href: "/supply",
    tags: ["Indoor", "Outdoor", "Multi-sport", "Professional"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Product Catalog"
        description="Comprehensive sports solutions from equipment supply to complete facility setup — we have everything you need."
        breadcrumbs={[{ label: "Products" }]}
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80"
      />

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">What We Supply</span>
            <h2 className="section-title">
              Complete Sports <span style={{ color: "#c9a227" }}>Product Range</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              As the Middle East&apos;s leading sports equipment supplier, we offer a comprehensive
              catalog of products from world-renowned brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {productCategories.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="group flex flex-col md:flex-row gap-0 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative w-full md:w-52 h-52 md:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3" style={{ color: "#1a3a6b" }}>
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{
                            backgroundColor: "rgba(26,58,107,0.08)",
                            color: "#1a3a6b",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-gap duration-300 group-hover:gap-3"
                    style={{ color: "#c9a227" }}
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
