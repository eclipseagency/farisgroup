"use client";

import Link from "next/link";
import QuoteSection from "@/components/sections/QuoteSection";
import { useT } from "@/lib/useT";
import { useLocale } from "@/contexts/LocaleContext";
import { translations } from "@/lib/translations";

export default function ProjectFacilityPlanningPage() {
  const t = useT();
  const { locale } = useLocale();
  const content = translations[locale].pageContent.projectFacilityPlanning;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img src="https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n-1-1.jpg" alt="{content.heroTitle}" className="absolute inset-0 w-full h-full object-cover object-bottom" />
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

      {/* Content Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-widest mb-6" style={{ color: "#ffffff" }}>{content.title}</h2>
              <p className="text-white/60 leading-relaxed">{content.p1}</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src="https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-11-1.jpeg" alt="{content.title}" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
