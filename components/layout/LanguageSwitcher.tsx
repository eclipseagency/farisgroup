"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:opacity-90"
      style={{
        background: "linear-gradient(135deg, #F47B20, #F89B4B)",
        color: "#fff",
        minWidth: "52px",
        justifyContent: "center",
      }}
      aria-label="Toggle language"
    >
      {locale === "en" ? "عربي" : "EN"}
    </button>
  );
}
