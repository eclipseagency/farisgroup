"use client";

import Link from "next/link";
import { ChevronRight, Quote } from "lucide-react";
import ClientsSection from "@/components/sections/ClientsSection";
import CTASection from "@/components/sections/CTASection";
import { useT } from "@/lib/useT";
import { useLocale } from "@/contexts/LocaleContext";
import { translations } from "@/lib/translations";

export default function AboutPage() {
  const t = useT();
  const { locale } = useLocale();
  const testimonials = translations[locale].aboutPage.testimonials;
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
              {t("common.home")}
            </Link>
            <ChevronRight size={14} className="text-white/60" />
            <span style={{ color: "#F47B20" }}>{t("nav.aboutUs")}</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
            {t("aboutPage.heroTitle")}
          </h1>
        </div>
      </section>

      {/* ── Main About Content ───────────────────────── */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <span className="section-subtitle block">{t("aboutPage.badge")}</span>
              <h2 className="section-title">
                {t("aboutPage.title")}{" "}
                <span style={{ color: "#F47B20" }}>{t("aboutPage.titleHighlight")}</span>
              </h2>
              <div className="mt-5 space-y-4 text-white/60 leading-relaxed">
                <p>
                  {t("aboutPage.p1")}
                </p>
                <p>
                  {t("aboutPage.p2")}
                </p>
                <p>
                  {t("aboutPage.p3")}
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
      <section className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              className="rounded-xl p-10 shadow-md border-t-4"
              style={{ borderColor: "#1a3a6b" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(26,58,107,0.08)" }}
              >
                <span className="font-heading font-black text-xl" style={{ color: "#ffffff" }}>
                  M
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: "#ffffff" }}>
                {t("aboutPage.missionTitle")}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {t("aboutPage.missionText")}
              </p>
            </div>

            {/* Vision */}
            <div
              className="rounded-xl p-10 shadow-md border-t-4"
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
              <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: "#ffffff" }}>
                {t("aboutPage.visionTitle")}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {t("aboutPage.visionText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────── */}
      <section className="py-20  overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle block">{t("aboutPage.testimonialsBadge")}</span>
            <h2 className="section-title">
              {t("aboutPage.testimonialsTitle")}
            </h2>
          </div>

          {/* Scrolling row */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-testimonials-scroll" dir="ltr">
              {[...testimonials, ...testimonials].map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-80 rounded-xl p-7 shadow-md border border-white/10 flex flex-col"
                >
                  <Quote size={28} className="mb-4 flex-shrink-0" style={{ color: "#F47B20" }} />
                  <p className="text-white/60 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <p className="font-heading font-bold text-sm" style={{ color: "#ffffff" }}>
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.role}</p>
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
