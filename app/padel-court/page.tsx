import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Padel Court - Faris Group",
  description:
    "Set up your padel court with Faris Group. Professional padel court solutions with VISION, PANORAMIC, and FORTE models. Available in 50+ countries.",
};

const whyUs = [
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
        <circle cx="32" cy="20" r="10" />
        <path d="M12 52c0-11 9-20 20-20s20 9 20 20" />
        <path d="M44 30l4 4 8-8" />
      </svg>
    ),
    title: "Expertise",
    description:
      "With a track record of excellence spanning over 25 years, FarisGroup has become a leader in the padel court industry. Our team of professionals brings extensive knowledge and experience to every project, ensuring that you receive the finest quality courts.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
        <path d="M8 56V24L32 8l24 16v32H8z" />
        <path d="M20 40l8 8 16-16" />
      </svg>
    ),
    title: "Tailored Solutions",
    description:
      "At FarisGroup, we believe in personalized experiences. Our configurator allows you to bring your vision to life, customizing your padel court according to your preferences. Choose from our diverse range of court models - VISION, PANORAMIC, and FORTE - to suit your specific needs.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
        <circle cx="32" cy="32" r="24" />
        <path d="M20 32l8 8 16-16" />
      </svg>
    ),
    title: "Quality Assurance",
    description:
      "We are committed to delivering unparalleled quality in every aspect. From the construction systems to the materials used, each element of our padel courts is carefully selected and designed to provide durability, safety, and optimal performance.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
        <circle cx="32" cy="32" r="24" />
        <path d="M8 32h48M32 8c-8 6-12 14-12 24s4 18 12 24M32 8c8 6 12 14 12 24s-4 18-12 24" />
      </svg>
    ),
    title: "Global Reach",
    description:
      "Our success has reached over 50 countries, and we continue to serve clients across the globe. Whether you're in Europe, America, Africa, or Asia, our efficient logistics and distribution network ensure timely delivery and hassle-free installation.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
        <path d="M12 52V28l8-16h24l8 16v24H12z" />
        <path d="M24 52V36h16v16" />
        <path d="M12 28h40" />
      </svg>
    ),
    title: "Comprehensive Services",
    description:
      "FarisGroup offers a range of services to support your padel court journey. From planning and purchase to installation and maintenance, we are with you every step of the way. Count on us for success, automation, roofing, and complementary services for your club.",
  },
];

const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2023/05/Private-Villa-Padel-Court-Riyadh-5-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Private-Villa-Padel-Court-Riyadh-2-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Private-Villa-Padel-Court-Riyadh-1-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Al-Bustan-Padel-Courts-5-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Al-Bustan-Padel-Courts-2-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Private-Villa-Padel-Court-Riyadh-3-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Private-Villa-Padel-Court-Riyadh-4.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Al-Bustan-Padel-Courts-8-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/5-1.jpg",
];

export default function PadelCourtPage() {
  return (
    <>
      {/* Hero — Video */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://farisgroup.net/wp-content/uploads/2023/07/videoplayback.mp4"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight">
            Set up your padel court
          </h1>
        </div>
      </section>

      {/* Intro — Row 1: image left, title+text right */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/0208e9d7-5582-4aeb-9ad8-4a99f289f239-1-1.jpg"
                alt="Padel Court 3D"
                className="w-full h-80 object-cover"
              />
            </div>
            {/* Title + first 2 paragraphs */}
            <div className="text-center lg:text-left">
              <h1
                className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight"
                style={{ color: "#1a8fc1" }}
              >
                Set up your padel court
              </h1>
              <p className="text-white/60 leading-relaxed mb-4 text-center">
                Padel, the fastest-growing fitness trend, is taking the sports world by storm. With
                its exciting gameplay, accessibility, and social appeal, Padel is capturing the
                hearts of fitness enthusiasts and athletes of all ages.
              </p>
              <p className="text-white/60 leading-relaxed text-center">
                At Faris Group, we recognize the immense potential of Padel and are proud to offer
                comprehensive Padel Court solutions. Our state-of-the-art Padel Courts are designed
                to deliver an unparalleled playing experience, combining elements of tennis and
                squash to create a dynamic and engaging sport.
              </p>
            </div>
          </div>

          {/* Row 2: text+button left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Last 2 paragraphs + button */}
            <div className="text-center">
              <p className="text-white/60 leading-relaxed mb-4">
                Whether you&apos;re a sports facility owner, a fitness club manager, or an
                individual looking to bring Padel to your community, our expertise in Padel court
                design, construction, and equipment supply ensures a seamless and exceptional
                experience from start to finish.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Experience the thrill of Padel with Faris Group, and be a part of the fitness trend
                that is sweeping the globe. Join us in revolutionizing the way people stay active,
                have fun, and connect through the power of Padel.
              </p>
            </div>
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/Al-Bustan-Padel-Courts-8-1-1536x1152.jpeg"
                alt="Al Bustan Padel Courts"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20" style={{ backgroundColor: "#0d1f3c" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white flex items-center justify-center gap-3">
              <span style={{ color: "#00e5cc" }}>▶</span>
              Why Us
              <span style={{ color: "#00e5cc" }}>◀</span>
            </h2>
          </div>

          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {whyUs.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 text-center border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: index === 0 ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
                  borderColor: index === 0 ? "#00e5cc" : "rgba(255,255,255,0.1)",
                }}
              >
                {item.icon}
                <h3 className="font-heading font-bold text-xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom row — 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {whyUs.slice(3).map((item, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 text-center border transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                {item.icon}
                <h3 className="font-heading font-bold text-xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle block">Our Work</span>
            <h2 className="section-title">
              Projects
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projectImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md aspect-square">
                <img
                  src={src}
                  alt={`Padel project ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
