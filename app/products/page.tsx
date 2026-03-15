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
    title: "Wall Insulation",
    description:
      "At Faris Group, we understand the importance of a well-insulated space. Our state-of-the-art wall insulation solutions are designed to provide superior thermal and acoustic insulation, ensuring comfort, energy efficiency, and tranquility in your home, office, or any other space.",
    image: "https://farisgroup.net/wp-content/uploads/2024/07/14fbb757-7447-4eb9-b4ab-a066fe5180b9-2.jpeg",
    href: "/products",
  },
  {
    title: "Bowling Alley",
    description:
      "Create a striking entertainment experience with our comprehensive Bowling solutions. From modern bowling lanes to top-quality equipment, our offerings ensure a memorable time for bowlers of all ages and skill levels.",
    image: "https://farisgroup.net/wp-content/uploads/2023/05/DSC05991-2048x1153.jpg",
    href: "/construction",
  },
  {
    title: "Padel Court",
    description:
      "Experience the excitement of Padel with our top-quality Padel Courts. Designed for both recreational and competitive play, our courts offer excellent durability and performance, ensuring a thrilling game every time.",
    image: "https://farisgroup.net/wp-content/uploads/2023/05/Private-Villa-Padel-Court-Riyadh-4-1024x768-1.jpeg",
    href: "/padel-court",
  },
  {
    title: "Fitness & Gym",
    description:
      "Set up a world-class fitness facility with our cutting-edge Fitness & Gym equipment. Our range includes treadmills, weight machines, cardio equipment, and more, designed to support diverse fitness goals.",
    image: "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-11-1.jpeg",
    href: "/fitness-and-gym",
  },
  {
    title: "Playground",
    description:
      "At Faris Group, we understand the importance of creating engaging and safe playgrounds for children. Our product range encompasses a wide variety of equipment that is suitable for playgrounds in schools, public parks, private homes, and compounds.",
    image: "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-21.jpeg",
    href: "/products",
  },
  {
    title: "Climbing Wall",
    description:
      "Inspire adventure and challenge with our innovative Climbing Walls. Built to the highest safety standards and quality, our walls offer varying levels of difficulty, providing a thrilling experience for climbers while promoting physical fitness and skill development.",
    image: "https://farisgroup.net/wp-content/uploads/2023/05/LawnZ-Wall-Climbing_Danube-Properties.jpeg",
    href: "/construction",
  },
  {
    title: "Shooting Range",
    description:
      "Ensure precision and safety in shooting sports with our advanced Shooting Range solutions. Our range includes target systems, bullet traps, and shooting accessories, providing a controlled and safe environment for enthusiasts and professionals.",
    image: "https://farisgroup.net/wp-content/uploads/2023/05/Rangers-Range-3-lanes-indoor-target-shooting-project-1.jpeg",
    href: "/shooting-range",
  },
  {
    title: "Billiards",
    description:
      "Elevate your entertainment space with our premium Billiard tables. Crafted with precision and style, our tables provide an authentic playing experience, perfect for leisurely games or professional tournaments.",
    image: "https://farisgroup.net/wp-content/uploads/2023/05/BILLIARDS.png",
    href: "/products",
  },
  {
    title: "Sport Equipment",
    description:
      "Equip your sports facility with our wide range of high-quality sports equipment. From basketball hoops and soccer goals to volleyball nets and tennis rackets, we offer reliable and durable solutions for various sporting activities.",
    image: "https://farisgroup.net/wp-content/uploads/2023/05/OWL-Bowling-SMAASH-Mall-8-1.jpeg",
    href: "/products/sports-equipment",
  },
  {
    title: "Spa & Pool",
    description:
      "Creating luxurious and rejuvenating experiences through our exceptional SPA and Pool solutions. Whether you're looking to create a tranquil oasis for relaxation or a refreshing aquatic environment.",
    image: "https://farisgroup.net/wp-content/uploads/2023/05/4-3.jpg",
    href: "/products",
  },
  {
    title: "Squash",
    description:
      "Enhance your fitness facility or sports complex with our state-of-the-art Squash Courts. Built to international standards, our courts offer excellent ball rebound and optimal playing conditions, catering to players of all levels.",
    image: "https://farisgroup.net/wp-content/uploads/2023/05/9-1.jpg",
    href: "/products",
  },
  {
    title: "Bleachers & Seating",
    description:
      "Maximize spectator comfort and viewing experience with our durable and ergonomic Bleachers & Seating solutions. Whether it's for stadiums, arenas, or outdoor events, our seating options offer excellent sightlines and superior comfort.",
    image: "https://farisgroup.net/wp-content/uploads/2023/05/8-1-1.jpg",
    href: "/bleachers-and-seating",
  },
  {
    title: "Urban Furniture",
    description:
      "Enhance public spaces and recreational areas with our stylish and functional Urban Furniture. From benches and picnic tables to bike racks and waste management systems, our designs blend aesthetics with durability, creating inviting environments for communities.",
    image: "https://farisgroup.net/wp-content/uploads/2023/05/D832.png",
    href: "/products",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="OUR STORE"
        description="Learn about Faris Group products."
        breadcrumbs={[{ label: "Products" }]}
        backgroundImage="https://farisgroup.net/wp-content/uploads/2023/05/Private-Villa-Padel-Court-Riyadh-4-1024x768-1.jpeg"
      />

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">OUR SPECIALIZATIONS</span>
            <h2 className="section-title">
              OUR <span style={{ color: "#F47B20" }}>PRODUCTS</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Learn about Faris Group products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="group flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
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
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-gap duration-300 group-hover:gap-3"
                    style={{ color: "#F47B20" }}
                  >
                    See more
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
