"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Dubai, United Arab Emirates", "Middle East Operations"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+971 4 222 3333", "+971 50 123 4567"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@farisgroup.net", "sales@farisgroup.net"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
  },
];

export default function ContactPage() {
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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have a project in mind? Our team of sports solutions experts is ready to help you find the perfect solution."
        breadcrumbs={[{ label: "Contact" }]}
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80"
      />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <span className="section-subtitle block">Reach Us</span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl" style={{ color: "#ffffff" }}>
                  Let&apos;s Start a{" "}
                  <span style={{ color: "#F47B20" }}>Conversation</span>
                </h2>
                <p className="text-white/60 mt-4 text-sm leading-relaxed">
                  Whether you have a question about our products, need a quote, or want to discuss
                  a project, our team is here to help.
                </p>
              </div>

              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(201,162,39,0.1)" }}
                    >
                      <Icon size={20} style={{ color: "#F47B20" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1" style={{ color: "#ffffff" }}>
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-white/60 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center p-12 rounded-xl border-2"
                  style={{ borderColor: "#F47B20", backgroundColor: "rgba(201,162,39,0.05)" }}
                >
                  <CheckCircle size={64} className="mb-4" style={{ color: "#F47B20" }} />
                  <h3 className="font-heading font-bold text-2xl mb-3" style={{ color: "#ffffff" }}>
                    Message Sent Successfully!
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-md">
                    Thank you for contacting Faris Group. Our team will review your message and
                    get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-8 py-3 text-white text-sm font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: "#1a3a6b" }}
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
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                        style={{ "--focus-border": "#1a3a6b" } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 X XXX XXXX"
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors" style={{ background: "rgba(255,255,255,0.06)", color: "white" }}
                      >
                        <option value="">Select a subject</option>
                        <option value="sports-equipment">Sports Equipment</option>
                        <option value="fitness-gym">Fitness & Gym</option>
                        <option value="padel-court">Padel Court</option>
                        <option value="bleachers-seating">Bleachers & Seating</option>
                        <option value="shooting-range">Shooting Range</option>
                        <option value="construction">Construction</option>
                        <option value="supply">Supply</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-white/70 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full px-4 py-3 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 w-full flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:opacity-90 disabled:opacity-70"
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

      {/* Map Section */}
      <section className="h-80 relative overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: "#f0f4ff" }}
        >
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4" style={{ color: "#ffffff" }} />
            <h3 className="font-heading font-bold text-xl mb-2" style={{ color: "#ffffff" }}>
              Dubai, United Arab Emirates
            </h3>
            <p className="text-white/50 text-sm">Middle East Operations Center</p>
          </div>
        </div>
      </section>
    </>
  );
}
