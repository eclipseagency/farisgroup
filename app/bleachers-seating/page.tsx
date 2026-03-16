"use client";

import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { useT } from "@/lib/useT";
import { useLocale } from "@/contexts/LocaleContext";
import { translations } from "@/lib/translations";

const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-Playground-9.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-Playground-12.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/8-1-1.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/11-1.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/2-4.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/10-1.jpg",
];

export default function BleachersSeatingPage() {
  const t = useT();
  const { locale } = useLocale();
  const content = translations[locale].pageContent.bleachersSeating;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/10-1.jpg"
          alt="{content.heroTitle}"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
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
        <div className="container-custom">
          {/* Row 1: image left, title+text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://farisgroup.net/wp-content/uploads/2023/05/11-1.jpg" alt="{content.title}" className="w-full h-80 object-cover" />
            </div>
            <div>
              <h2 className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase" style={{ color: "#1a8fc1" }}>
                {content.title}
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">{content.p1}</p>
              <p className="text-white/60 leading-relaxed">{content.p2}</p>
            </div>
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
                <img src={src} alt="Bleachers project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
