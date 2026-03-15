"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

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
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have a project in mind? Our expert team across KSA, UAE, and Italy is ready to help you find the perfect sports solution."
        breadcrumbs={[{ label: "Contact Us" }]}
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80"
      />

      {/* Offices */}
      <section className="py-16" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="section-subtitle block">Our Locations</span>
            <h2 className="section-title">
              Global <span style={{ color: "#F47B20" }}>Offices</span>
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
                <span className="section-subtitle block">Reach Us</span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl" style={{ color: "#ffffff" }}>
                  Send Us a <span style={{ color: "#F47B20" }}>Message</span>
                </h2>
                <p className="text-white/60 mt-4 text-sm leading-relaxed">
                  Whether you need a quote, have questions about a product, or want to discuss a
                  project, we&apos;re here to help.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: MapPin, title: "HQ Address", detail: "Mosadia 3, Madinah Road, Jeddah 21573, KSA" },
                  { icon: Phone, title: "KSA Phone", detail: "+966 55 668 8883" },
                  { icon: Phone, title: "UAE Phone", detail: "+971 55 336 6241" },
                  { icon: Mail, title: "Email", detail: "info@farisgroup.net" },
                  { icon: Clock, title: "Working Hours", detail: "Mon–Fri: 8AM–6PM | Sat: 9AM–1PM" },
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
                    Message Sent!
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-md">
                    Thank you for contacting Faris Group. Our team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-8 py-3 text-white text-sm font-semibold uppercase tracking-wider"
                    style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)" }}
                  >
                    Send Another Message
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
                      <label className="block text-sm font-medium text-white/70 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none focus:ring-1 transition-colors"
                        style={{ "--tw-ring-color: #F47B20 } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966 / +971"
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
                      <label className="block text-sm font-medium text-white/70 mb-1.5">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none transition-colors" style={{ background: "rgba(255,255,255,0.06)", color: "white" }}
                      >
                        <option value="">Select a subject</option>
                        <option value="sports-equipment">Sports Equipment</option>
                        <option value="fitness-gym">Fitness & Gym</option>
                        <option value="padel-court">Padel Court</option>
                        <option value="bleachers-seating">Bleachers & Seating</option>
                        <option value="shooting-range">Shooting Range</option>
                        <option value="construction">Construction</option>
                        <option value="supply">Supply</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-white/70 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project or inquiry..."
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
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
