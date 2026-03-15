"use client";

import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { useT } from "@/lib/useT";
import { useLocale } from "@/contexts/LocaleContext";
import { translations } from "@/lib/translations";

const projectImages = [
  "https://farisgroup.net/wp-content/uploads/2024/07/3ab20840-2f91-49f0-996f-ea00aebf8534.png",
  "https://farisgroup.net/wp-content/uploads/2024/07/0f464d7b-8667-4713-8161-6571256f2ac5.png",
  "https://farisgroup.net/wp-content/uploads/2024/07/611ad4dd-dd97-434f-84a7-3fc409db60d0.png",
  "https://farisgroup.net/wp-content/uploads/2024/07/bb18e780-e28e-4703-8d63-e45befc9412a.png",
  "https://farisgroup.net/wp-content/uploads/2024/07/92e32495-0cd3-4c7c-a074-31646f264cd1.png",
  "https://farisgroup.net/wp-content/uploads/2024/07/OWL-Bowling-SMAASH-Mall-8-1.jpeg",
];

export default function SportEquipmentPage() {
  const t = useT();
  const { locale } = useLocale();
  const content = translations[locale].pageContent.sportEquipment;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img src="https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n-1-1.jpg" alt="{content.heroTitle}" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">{content.heroTitle}</h1>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://farisgroup.net/wp-content/uploads/2024/07/main.png" alt="{content.title}" className="w-full h-80 object-cover" />
            </div>
            <div>
              <h2 className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase" style={{ color: "#1a8fc1" }}>{content.title}</h2>
              <p className="text-white/60 leading-relaxed mb-8">{content.p1}</p>
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
                <img src={src} alt="Sport equipment project" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
