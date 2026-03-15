"use client";

import Link from "next/link";
import { ChevronRight, Quote } from "lucide-react";
import ClientsSection from "@/components/sections/ClientsSection";
import CTASection from "@/components/sections/CTASection";

const testimonials = [
  {
    quote:
      "Faris Group's innovative equipment transformed our fitness club, attracting more members and enhancing their experience. Highly recommended!",
    name: "Khalid Al-Rashid",
    role: "Owner of a Sports Complex",
  },
  {
    quote:
      "Faris Group played a pivotal role in transforming our school's sports facilities. Their expertise and dedication resulted in top-quality sports equipment and spaces that inspire our students to excel. We're grateful for their exceptional services.",
    name: "Saad Al-Muhanna",
    role: "Community Center Manager",
  },
  {
    quote:
      "I'm impressed by Faris Group's commitment to innovation. Their equipment and facilities have taken my sports experience to a whole new level. Thank you!",
    name: "Mohammed Al-Abdulaziz",
    role: "Sports Enthusiast",
  },
  {
    quote:
      "Faris Group exceeded our expectations with their exceptional sports solutions. Our facility has become a top-notch recreation center, thanks to their expertise and attention to detail.",
    name: "Fatima Al-Malik",
    role: "Director of a Fitness Club",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero / Page Header ───────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n.jpg)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(26,58,107,0.80) 100%)",
          }}
        />
        <div className="relative z-10 container-custom text-white">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-gray-600" />
            <span style={{ color: "#F47B20" }}>ABOUT US</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* ── Main About Content ───────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <span className="section-subtitle block">About Us</span>
              <h2 className="section-title">
                FARIS GROUP FOR{" "}
                <span style={{ color: "#F47B20" }}>SPORTS SOLUTIONS</span>
              </h2>
              <div className="mt-5 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 20 years of experience, Faris Group is an established name in the
                  Sports and Leisure industry. Recognized as the leading supplier of superior
                  quality sports and entertainment equipment in the Middle East, Faris Group is
                  an official distributor of top international brands.
                </p>
                <p>
                  Whether you require a private cinema or an Olympic sized football field,
                  Faris Group is there from start to finish. Delivering turn-key projects such
                  as bowling centers, shooting ranges, climbing walls, recreation centers,
                  fitness clubs, playground parks, squash courts and running tracks to name a
                  few.
                </p>
                <p>
                  Constantly abreast with new products and innovations, Faris Group is the
                  Total Sports Solution.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/ABOUT2-1.png"
                alt="Faris Group Sports Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              className="bg-white rounded-xl p-10 shadow-md border-t-4"
              style={{ borderColor: "#1a3a6b" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(26,58,107,0.08)" }}
              >
                <span className="font-heading font-black text-xl" style={{ color: "#1a3a6b" }}>
                  M
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: "#1a3a6b" }}>
                Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to improve the leisure industry by delivering comprehensive
                sports and entertainment solutions, offering top-quality equipment and services
                that exceed customer expectations. We strive to create exceptional recreational
                spaces that promote active lifestyles, foster social connections, and contribute
                to the overall well-being of individuals and communities.
              </p>
            </div>

            {/* Vision */}
            <div
              className="bg-white rounded-xl p-10 shadow-md border-t-4"
              style={{ borderColor: "#F47B20" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(201,162,39,0.1)" }}
              >
                <span className="font-heading font-black text-xl" style={{ color: "#F47B20" }}>
                  V
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: "#1a3a6b" }}>
                Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the premier provider of sports and leisure solutions, transforming the
                industry through innovation and superior quality, while enhancing the overall
                experience for individuals and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle block">Testimonials</span>
            <h2 className="section-title">
              Don&apos;t just take our word for it.{" "}
              <span style={{ color: "#F47B20" }}>
                Hear what our amazing customers say about our business.
              </span>
            </h2>
          </div>

          {/* Scrolling row */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-testimonials-scroll">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-80 bg-white rounded-xl p-7 shadow-md border border-gray-100 flex flex-col"
                >
                  <Quote size={28} className="mb-4 flex-shrink-0" style={{ color: "#F47B20" }} />
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <p className="font-heading font-bold text-sm" style={{ color: "#1a3a6b" }}>
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes testimonials-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-testimonials-scroll {
            animation: testimonials-scroll 28s linear infinite;
            width: max-content;
          }
          .animate-testimonials-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ── Clients + CTA ────────────────────────────── */}
      <ClientsSection />
      <CTASection />
    </>
  );
}
