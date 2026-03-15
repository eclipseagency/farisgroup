"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

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
    <section className="relative py-20 overflow-hidden mesh-bg noise" ref={ref}>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,123,32,0.08) 0%, transparent 70%)" }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-2 rounded-full"
            style={{
              color: "#F47B20",
              backgroundColor: "rgba(244,123,32,0.1)",
              border: "1px solid rgba(244,123,32,0.25)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#F47B20" }} />
            Get a Quote
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white">
            Contact <span style={{ color: "#F47B20" }}>Faris Group</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          {submitted ? (
            <div
              className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl border"
              style={{ borderColor: "rgba(244,123,32,0.3)", backgroundColor: "rgba(244,123,32,0.04)" }}
            >
              <CheckCircle size={56} className="mb-4" style={{ color: "#F47B20" }} />
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Message Sent!</h3>
              <p className="text-white/60 max-w-sm">
                Thank you for contacting Faris Group. Our team will respond within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                className="mt-6 px-8 py-3 text-white text-sm font-semibold uppercase tracking-wider rounded-sm"
                style={{ background: "linear-gradient(135deg, #F47B20, #F89B4B)" }}
              >
                Send Another Message
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
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", focusRingColor: "#F47B20" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 / +971"
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm text-white focus:outline-none transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <option value="" style={{ background: "#0f172a" }}>Select a subject</option>
                    <option value="sports-equipment" style={{ background: "#0f172a" }}>Sports Equipment</option>
                    <option value="fitness-gym" style={{ background: "#0f172a" }}>Fitness &amp; Gym</option>
                    <option value="padel-court" style={{ background: "#0f172a" }}>Padel Court</option>
                    <option value="bleachers-seating" style={{ background: "#0f172a" }}>Bleachers &amp; Seating</option>
                    <option value="shooting-range" style={{ background: "#0f172a" }}>Shooting Range</option>
                    <option value="construction" style={{ background: "#0f172a" }}>Construction</option>
                    <option value="general" style={{ background: "#0f172a" }}>General Inquiry</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project or inquiry..."
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
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
