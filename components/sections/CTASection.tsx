import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&q=80)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(26,58,107,0.9) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5"
          style={{ color: "#c9a227", backgroundColor: "rgba(201,162,39,0.15)", border: "1px solid rgba(201,162,39,0.3)" }}
        >
          Ready to Get Started?
        </span>
        <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl mb-6 max-w-3xl mx-auto leading-tight">
          Transform Your Sports Facility With{" "}
          <span style={{ color: "#c9a227" }}>Faris Group</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Contact our expert team today for a free consultation. We&apos;ll help you find the perfect
          sports solution tailored to your needs and budget.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-10 py-4 font-semibold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:opacity-90 hover:gap-3"
            style={{ backgroundColor: "#c9a227" }}
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+97142223333"
            className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/40 font-semibold text-sm tracking-wider uppercase text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            <Phone size={16} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
