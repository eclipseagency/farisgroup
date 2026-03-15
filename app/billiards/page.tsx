"use client";

import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { useT } from "@/lib/useT";
import { useLocale } from "@/contexts/LocaleContext";
import { translations } from "@/lib/translations";

const galleryImages = [
  { src: "https://farisgroup.net/wp-content/uploads/2023/05/collection-intemporel-billard-montfort-1.jpg", alt: "Collection Intemporel Billiard" },
  { src: "https://farisgroup.net/wp-content/uploads/2023/05/billirds.png", alt: "Billiards" },
  { src: "https://farisgroup.net/wp-content/uploads/2023/05/billiard-table-psro02p77kcgu82xo6ukiejqyqgf7vc64oatv4t8oc.png", alt: "Billiard Table" },
  { src: "https://farisgroup.net/wp-content/uploads/2023/05/accessories3-psrpa039l0dffwntrri0jrxni1o9cdcdhhr8d1ihfg.png", alt: "Billiard Accessories" },
  { src: "https://farisgroup.net/wp-content/uploads/2023/05/recreational-psrnsfagekgafcusemcpifvl0wsp5z5u3y7h447q6w.png", alt: "Recreational Game Table" },
  { src: "https://farisgroup.net/wp-content/uploads/2023/05/Billiards-5-onfl75yzmrtehp7mrji470il4amdy59hk666g6tsr6.jpeg", alt: "Billiards 5" },
  { src: "https://farisgroup.net/wp-content/uploads/2023/05/Billiards-7-onfl78si79x9gj3jb2pzwhsywg8hl8kokk4mw0pm8i-1.jpeg", alt: "Billiards 7" },
  { src: "https://farisgroup.net/wp-content/uploads/2023/05/9ftbilliardo-pso620jik93j1wame1n1j2hc2kbt03ui1i7pvstyoi.jpg", alt: "9ft Billiard Table" },
];

export default function BilliardsPage() {
  const t = useT();
  const { locale } = useLocale();
  const content = translations[locale].pageContent.billiards;

  return (
    <>
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img src="https://farisgroup.net/wp-content/uploads/2023/05/collection-heritage-billard-montfort-1-scaled-2.jpg" alt={content.heroTitle} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">{content.heroTitle}</h1>
        </div>
      </section>

      <div className="py-3 border-b border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="text-white/70 hover:text-gold transition-colors">{t("common.home")}</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">{content.heroTitle}</span>
          </nav>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://farisgroup.net/wp-content/uploads/2023/05/collection-intemporel-billard-montfort-1.jpg" alt={content.title} className="w-full h-80 object-cover" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-heading font-black text-3xl md:text-4xl mb-6 leading-tight uppercase" style={{ color: "#1a8fc1" }}>{content.title}</h2>
              <p className="text-white/60 leading-relaxed mb-4">{content.p1}</p>
              <p className="text-white/60 leading-relaxed">{content.p2}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <p className="text-white/60 leading-relaxed mb-4">{content.p3}</p>
              <p className="text-white/60 leading-relaxed mb-8">{content.p4}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://farisgroup.net/wp-content/uploads/2023/05/9ftbilliardo-pso620jik93j1wame1n1j2hc2kbt03ui1i7pvstyoi.jpg" alt={content.title} className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-subtitle block">{t("common.ourWork")}</span>
            <h2 className="section-title">{t("common.projects")}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md aspect-square">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
