"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useT } from "@/lib/useT";

export default function CTASection() {
  const t = useT();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="relative py-20 mesh-bg">
      <div className="container-custom relative z-10">
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-2 rounded-full"
            style={{
              color: "#F47B20",
              backgroundColor: "rgba(244,123,32,0.1)",
              border: "1px solid rgba(244,123,32,0.25)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F47B20" }} />
            {t("cta.badge")}
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white">
            {t("cta.title")} <span style={{ color: "#F47B20" }}>{t("cta.titleHighlight")}</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div
              className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl border"
              style={{ borderColor: "rgba(244,123,32,0.3)", backgroundColor: "rgba(244,123,32,0.04)" }}
            >
              <CheckCircle size={56} className="mb-4" style={{ color: "#F47B20" }} />
              <h3 className="font-heading font-bold text-2xl text-white mb-2">{t("cta.successTitle")}</h3>
              <p className="text-white/60 max-w-sm">
                {t("cta.successMessage")}
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                className="mt-6 px-8 py-3 text-white text-sm font-semibold uppercase tracking-wider rounded-sm"
                style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)" }}
              >
                {t("cta.sendAnother")}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 border border-white/10"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                    {t("cta.nameLabel")} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("cta.namePlaceholder")}
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", focusRingColor: "#F47B20" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                    {t("cta.emailLabel")} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("cta.emailPlaceholder")}
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                    {t("cta.phoneLabel")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("cta.phonePlaceholder")}
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                    {t("cta.subjectLabel")} *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm text-white focus:outline-none transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <option value="" style={{ background: "#0f172a" }}>{t("cta.subjectPlaceholder")}</option>
                    <option value="sports-equipment" style={{ background: "#0f172a" }}>{t("cta.subjects.sportsEquipment")}</option>
                    <option value="fitness-gym" style={{ background: "#0f172a" }}>{t("cta.subjects.fitnessGym")}</option>
                    <option value="padel-court" style={{ background: "#0f172a" }}>{t("cta.subjects.padelCourt")}</option>
                    <option value="bleachers-seating" style={{ background: "#0f172a" }}>{t("cta.subjects.bleachersSeating")}</option>
                    <option value="shooting-range" style={{ background: "#0f172a" }}>{t("cta.subjects.shootingRange")}</option>
                    <option value="construction" style={{ background: "#0f172a" }}>{t("cta.subjects.construction")}</option>
                    <option value="general" style={{ background: "#0f172a" }}>{t("cta.subjects.general")}</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                    {t("cta.messageLabel")} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder={t("cta.messagePlaceholder")}
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none transition-colors resize-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full flex items-center justify-center gap-2 py-4 text-white font-bold text-sm uppercase tracking-wider rounded-sm transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)" }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    {t("cta.sending")}
                  </span>
                ) : (
                  <>
                    <Send size={16} />
                    {t("cta.sendButton")}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
