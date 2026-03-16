"use client";

import { Phone, Mail } from "lucide-react";
import { useT } from "@/lib/useT";

export default function QuoteSection() {
  const t = useT();

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage:
          "url(https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n-1-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.7)" }} />
      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          {/* Left dark panel */}
          <div className="p-10 flex flex-col justify-center" style={{ backgroundColor: "#0a1628" }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#F47B20" }}>
              {t("quote.badge")}
            </p>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight mb-4">
              {t("quote.title")}
            </h2>
            <p className="text-white font-semibold text-base mb-1">{t("quote.subtitle")}</p>
            <p className="text-white/60 text-sm mb-8">{t("quote.description")}</p>
            <div className="space-y-3">
              {["+966 53 800 7018 (KSA)", "+971 55 336 6241 (UAE)", "+39 328 819 7804 (Italy)"].map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.split(" ")[0]}`}
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                >
                  <Phone size={14} style={{ color: "#F47B20" }} />
                  {phone}
                </a>
              ))}
              {["info@farisgroup.net", "faris@farisgroup.net"].map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                >
                  <Mail size={14} style={{ color: "#F47B20" }} />
                  {email}
                </a>
              ))}
            </div>
          </div>

          {/* Right form panel */}
          <div className="p-10" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
            <form className="space-y-4">
              <input
                type="text"
                placeholder={t("quote.namePlaceholder")}
                className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
              <input
                type="email"
                placeholder={t("quote.emailPlaceholder")}
                className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
              <input
                type="tel"
                placeholder={t("quote.phonePlaceholder")}
                className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
              <input
                type="text"
                placeholder={t("quote.companyPlaceholder")}
                className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
              <input
                type="text"
                placeholder={t("quote.subjectPlaceholder")}
                className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
              <textarea
                rows={4}
                placeholder={t("quote.messagePlaceholder")}
                className="w-full rounded px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none resize-none"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
              <button
                type="submit"
                className="w-full py-3 font-semibold text-white text-sm tracking-widest uppercase rounded transition-all duration-300 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)" }}
              >
                {t("quote.sendButton")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
