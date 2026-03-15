"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useT } from "@/lib/useT";

const offices = [
  {
    city: "Jeddah",
    country: "Saudi Arabia",
    label: "Headquarters",
    address: "Mosadia 3, Madinah Road, Jeddah 21573",
    phone: "+966 2 669 0343",
    fax: "+966 2 669 0347",
    mobile: "+966 55 668 8883",
    email: "info@farisgroup.net",
    flag: "🇸🇦",
  },
  {
    city: "Riyadh",
    country: "Saudi Arabia",
    label: "KSA – Riyadh",
    address: "Riyadh, Saudi Arabia",
    phone: "+966 55 668 8883",
    mobile: "+966 55 668 8883",
    email: "info@farisgroup.net",
    flag: "🇸🇦",
  },
  {
    city: "Abu Dhabi",
    country: "UAE",
    label: "UAE Office",
    address: "Abu Dhabi, United Arab Emirates",
    phone: "+971 55 336 6241",
    mobile: "+971 55 336 6241",
    email: "info@farisgroup.net",
    flag: "🇦🇪",
  },
  {
    city: "Milano",
    country: "Italy",
    label: "Italy Office",
    address: "Milano, Italy",
    phone: "+39 328 819 7804",
    mobile: "+39 328 819 7804",
    email: "info@farisgroup.net",
    flag: "🇮🇹",
  },
];

export default function ContactUsPage() {
  const t = useT();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHeader
        title={t("contactPage.heroTitle")}
        subtitle={t("contactPage.heroSubtitle")}
        description={t("contactPage.heroDescription")}
        breadcrumbs={[{ label: t("contactPage.heroTitle") }]}
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80"
      />

      {/* Offices */}
      <section className="py-16" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-subtitle block">{t("contactPage.officesSub")}</span>
            <h2 className="section-title">
              {t("contactPage.officesTitle")} <span style={{ color: "#F47B20" }}>{t("contactPage.officesHighlight")}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {offices.map((office, index) => (
              <div
                key={index}
                className="rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{office.flag}</span>
                  <div>
                    <div className="font-heading font-bold text-base" style={{ color: "#ffffff" }}>
                      {office.city}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{office.label}</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2 text-white/60">
                    <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#F47B20" }} />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex gap-2 text-white/60">
                    <Phone size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#F47B20" }} />
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex gap-2 text-white/60">
                    <Mail size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#F47B20" }} />
                    <a href={`mailto:${office.email}`} className="hover:text-primary">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <span className="section-subtitle block">{t("contactPage.formSectionSub")}</span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl" style={{ color: "#ffffff" }}>
                  {t("contactPage.formSectionTitle")} <span style={{ color: "#F47B20" }}>{t("contactPage.formSectionHighlight")}</span>
                </h2>
                <p className="text-white/60 mt-4 text-sm leading-relaxed">
                  {t("contactPage.formSectionDesc")}
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: MapPin, title: t("contactPage.hqAddress"), detail: "Mosadia 3, Madinah Road, Jeddah 21573, KSA" },
                  { icon: Phone, title: t("contactPage.phone"), detail: "+966 55 668 8883" },
                  { icon: Phone, title: "UAE Phone", detail: "+971 55 336 6241" },
                  { icon: Mail, title: t("contactPage.email"), detail: "info@farisgroup.net" },
                  { icon: Clock, title: t("contactPage.workingHours"), detail: t("contactPage.workingHoursValue") },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(244,123,32,0.15)" }}
                      >
                        <Icon size={18} style={{ color: "#F47B20" }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-0.5">
                          {item.title}
                        </p>
                        <p className="text-sm text-white/70">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center p-12 rounded-xl border-2"
                  style={{ borderColor: "#F47B20", backgroundColor: "rgba(201,162,39,0.04)" }}
                >
                  <CheckCircle size={64} className="mb-4" style={{ color: "#F47B20" }} />
                  <h3 className="font-heading font-bold text-2xl mb-3" style={{ color: "#ffffff" }}>
                    {t("cta.successTitle")}
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-md">
                    {t("cta.successMessage")}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-8 py-3 text-white text-sm font-semibold uppercase tracking-wider"
                    style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)" }}
                  >
                    {t("cta.sendAnother")}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-xl shadow-lg p-8 border border-white/10"
                >
                  <h3 className="font-heading font-bold text-xl mb-6" style={{ color: "#ffffff" }}>
                    Inquiry Form
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">{t("cta.nameLabel")} *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t("cta.namePlaceholder")}
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none focus:ring-1 transition-colors"
                        style={{ "--tw-ring-color": "#F47B20" } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">{t("cta.emailLabel")} *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t("cta.emailPlaceholder")}
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">{t("cta.phoneLabel")}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t("cta.phonePlaceholder")}
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your organization"
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-white/70 mb-1.5">{t("cta.subjectLabel")} *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none transition-colors" style={{ background: "rgba(255,255,255,0.06)", color: "white" }}
                      >
                        <option value="">{t("cta.subjects.select")}</option>
                        <option value="sports-equipment">{t("cta.subjects.sportsEquipment")}</option>
                        <option value="fitness-gym">{t("cta.subjects.fitnessGym")}</option>
                        <option value="padel-court">{t("cta.subjects.padelCourt")}</option>
                        <option value="bleachers-seating">{t("cta.subjects.bleachersSeating")}</option>
                        <option value="shooting-range">{t("cta.subjects.shootingRange")}</option>
                        <option value="construction">{t("cta.subjects.construction")}</option>
                        <option value="supply">{t("cta.subjects.supply")}</option>
                        <option value="maintenance">{t("cta.subjects.maintenance")}</option>
                        <option value="general">{t("cta.subjects.general")}</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-white/70 mb-1.5">{t("cta.messageLabel")} *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder={t("cta.messagePlaceholder")}
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 w-full flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm uppercase tracking-wider transition-opacity hover:opacity-90 disabled:opacity-70"
                    style={{ backgroundColor: "#F47B20" }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("cta.sending")}
                      </>
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
        </div>
      </section>
    </>
  );
}
