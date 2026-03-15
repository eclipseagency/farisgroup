"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { translations } from "@/lib/translations";

export function useT() {
  const { locale } = useLocale();
  const t = translations[locale];

  return (key: string): string => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = t;
    for (const k of keys) {
      value = value?.[k];
    }
    if (typeof value === "string") return value;
    // Fallback to English
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fallback: any = translations["en"];
    for (const k of keys) {
      fallback = fallback?.[k];
    }
    return typeof fallback === "string" ? fallback : key;
  };
}
