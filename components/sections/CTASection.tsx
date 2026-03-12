import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#1a3a6b" }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA */}
          <div className="text-white">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5"
              style={{ color: "#c9a227", backgroundColor: "rgba(201,162,39,0.15)", border: "1px solid rgba(201,162,39,0.3)" }}
            >
              Get a quote from
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl leading-tight mb-6">
              FARIS GROUP
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md">
              Let&apos;s get in touch
              <br />
              <span className="text-white/60 text-sm">
                We&apos;re open for any suggestion or just to have a chat
              </span>
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-10 py-4 font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#c9a227", color: "#fff" }}
            >
              Contact Us
            </Link>
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-5">
            {/* Phones */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Phone size={18} style={{ color: "#c9a227" }} />
              </div>
              <div className="space-y-1">
                {[
                  "+966 55 668 8883 (KSA)",
                  "+971 55 336 6241 (UAE)",
                  "+39 328 819 7804 (Italy)",
                ].map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.split(" ")[0]}`}
                    className="block text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Emails */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Mail size={18} style={{ color: "#c9a227" }} />
              </div>
              <div className="space-y-1">
                {["info@farisgroup.net", "faris@farisgroup.net"].map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-white/80 text-sm hover:text-white transition-colors"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <MapPin size={18} style={{ color: "#c9a227" }} />
              </div>
              <div className="text-white/80 text-sm space-y-0.5">
                <p>Jeddah - Riyadh - Saudi Arabia</p>
                <p>Abu Dhabi - United Arab Emirates</p>
                <p>Milano - Italy</p>
                <p>Cairo - Egypt</p>
                <p>Metro Manila, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
