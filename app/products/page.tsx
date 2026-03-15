"use client";

import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/useT";
import { useLocale } from "@/contexts/LocaleContext";
import { translations } from "@/lib/translations";

const productImages = [
  "https://farisgroup.net/wp-content/uploads/2024/07/14fbb757-7447-4eb9-b4ab-a066fe5180b9-2.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/DSC05991-2048x1153.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Private-Villa-Padel-Court-Riyadh-4-1024x768-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/07/Al-Midra-Recreation-Center-Saudi-Aramco-11-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/University-of-Sharjah-21.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/LawnZ-Wall-Climbing_Danube-Properties.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/Rangers-Range-3-lanes-indoor-target-shooting-project-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/BILLIARDS.png",
  "https://farisgroup.net/wp-content/uploads/2023/05/OWL-Bowling-SMAASH-Mall-8-1.jpeg",
  "https://farisgroup.net/wp-content/uploads/2023/05/4-3.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/9-1.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/8-1-1.jpg",
  "https://farisgroup.net/wp-content/uploads/2023/05/D832.png",
];

const productHrefs = [
  "/products", "/construction", "/padel-court", "/fitness-and-gym",
  "/products", "/construction", "/shooting-range", "/products",
  "/products/sports-equipment", "/products", "/products", "/bleachers-and-seating", "/products",
];

export default function ProductsPage() {
  const t = useT();
  const { locale } = useLocale();
  const categories = translations[locale].productsPage.categories.map((cat, i) => ({
    ...cat,
    image: productImages[i],
    href: productHrefs[i],
  }));

  return (
    <>
      <PageHeader
        title={t("pages.products.title")}
        subtitle={t("pages.products.subtitle")}
        description={t("pages.products.description")}
        breadcrumbs={[{ label: t("pages.products.title") }]}
        backgroundImage="https://farisgroup.net/wp-content/uploads/2023/05/Private-Villa-Padel-Court-Riyadh-4-1024x768-1.jpeg"
      />

      {/* Products Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">{t("productsPage.badge")}</span>
            <h2 className="section-title">
              {t("productsPage.heading1")}{" "}
              <span style={{ color: "#F47B20" }}>{t("productsPage.heading2")}</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              {t("productsPage.sectionSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="group flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-white/10 hover:-translate-y-1"
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
                    <h3 className="font-heading font-bold text-xl mb-3" style={{ color: "#ffffff" }}>
                      {product.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-gap duration-300 group-hover:gap-3"
                    style={{ color: "#F47B20" }}
                  >
                    {t("productsPage.seeMore")}
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
