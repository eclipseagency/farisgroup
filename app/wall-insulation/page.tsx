"use client";

import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { useT } from "@/lib/useT";
import { useLocale } from "@/contexts/LocaleContext";
import { translations } from "@/lib/translations";

const whyChooseImages = [
  "https://farisgroup.net/wp-content/uploads/2024/07/14fbb757-7447-4eb9-b4ab-a066fe5180b9-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.53-PM.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.54-PM.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/07/IMG5-1536x1023.jpg",
  "https://farisgroup.net/wp-content/uploads/2024/07/IMG4-1536x1023.jpg",
];

const applicationIcons = [
  (
    <svg viewBox="0 0 64 64" className="w-12 h-12 mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
      <path d="M8 32L32 10l24 22v22H8V32z" />
      <rect x="24" y="40" width="16" height="16" />
    </svg>
  ),
  (
    <svg viewBox="0 0 64 64" className="w-12 h-12 mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
      <rect x="8" y="8" width="48" height="48" rx="2" />
      <path d="M8 24h48M24 8v48M8 40h16" />
      <circle cx="44" cy="44" r="6" />
      <path d="M44 38v6h6" />
    </svg>
  ),
  (
    <svg viewBox="0 0 64 64" className="w-12 h-12 mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
      <path d="M8 24h48l-4 32H12L8 24z" />
      <path d="M20 24V16a12 12 0 0124 0v8" />
      <circle cx="32" cy="40" r="4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 64 64" className="w-12 h-12 mb-4" fill="none" stroke="#00e5cc" strokeWidth="2">
      <rect x="4" y="32" width="56" height="28" rx="1" />
      <path d="M4 32l14-20v20M18 32l14-20v20M32 32l14-20v20" />
      <rect x="12" y="44" width="8" height="16" />
      <rect x="28" y="44" width="8" height="16" />
      <rect x="44" y="44" width="8" height="16" />
    </svg>
  ),
];

const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.56-PM-1-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.56-PM-2.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.55-PM-1-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.55-PM-2.jpeg",
  "https://farisgroup.net/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-18-at-4.53.52-PM-1.jpeg",
];

export default function WallInsulationPage() {
  const t = useT();
  const { locale } = useLocale();
  const content = translations[locale].pageContent.wallInsulation;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n-1-1.jpg"
          alt="Wall Insulation Hero"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="font-heading font-black text-3xl md:text-5xl mb-6 leading-tight">
            {content.heroTitle}
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors">{t("common.home")}</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">{content.heroTitle}</span>
          </nav>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-heading font-black text-2xl md:text-3xl mb-4" style={{ color: "#1a8fc1" }}>
            {content.title}
          </h2>
          <p className="text-white/60 leading-relaxed">{content.p1}</p>
        </div>
      </section>

      {/* Why Choose — alternating rows */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-black text-2xl md:text-3xl" style={{ color: "#1a8fc1" }}>
              {content.whyChooseTitle}
            </h2>
          </div>

          <div className="space-y-14">
            {content.whyChoose.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={whyChooseImages[index]}
                    alt={item.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
                <div className={index % 2 === 0 ? "text-left" : "text-left lg:order-1"}>
                  <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: "#1a8fc1" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications — dark section */}
      <section className="py-20" style={{ backgroundColor: "#0d1f3c" }}>
        <div className="container-custom">
          <div className="text-center mb-4">
            <h2 className="font-heading font-black text-3xl md:text-4xl text-white flex items-center justify-center gap-3">
              <span style={{ color: "#00e5cc" }}>▶</span>
              {content.applicationsTitle}
              <span style={{ color: "#00e5cc" }}>◀</span>
            </h2>
          </div>
          <p className="text-center text-gray-300 text-sm max-w-2xl mx-auto mb-12">
            {content.p2}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {content.applications.map((app, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 text-center border-2 transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: index === 0 ? "#00e5cc" : "transparent" }}
              >
                <div className="flex justify-center">{applicationIcons[index]}</div>
                <h3 className="font-heading font-bold text-xl mb-3 text-white">
                  {app.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#00e5cc" }}>
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle block">{t("common.ourWork")}</span>
            <h2 className="section-title">{t("common.projects")}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projectImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md aspect-square">
                <img
                  src={src}
                  alt={`Wall insulation project ${index + 1}`}
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
