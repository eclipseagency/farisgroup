"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from "lucide-react";
import { useT } from "@/lib/useT";

const contactPhones = [
  { label: "+966 53 800 7018", country: "KSA" },
  { label: "+971 55 336 6241", country: "UAE" },
  { label: "+39 328 819 7804", country: "Italy" },
  { label: "+20 112 956 0357", country: "Egypt" },
  { label: "+63 945 736 0099", country: "Philippines" },
];

export default function Footer() {
  const t = useT();

  const quickLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.aboutUs"), href: "/about-us" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.products"), href: "/products" },
    { name: t("nav.ourProjects"), href: "/projects" },
    { name: t("nav.contact"), href: "/contact-us" },
  ];

  const productLinks = [
    { name: t("footer.bowlingAlley"), href: "/construction" },
    { name: t("footer.padelCourt"), href: "/padel-court" },
    { name: t("footer.fitnessGym"), href: "/fitness-and-gym" },
    { name: t("footer.playground"), href: "/products" },
    { name: t("footer.climbingWall"), href: "/construction" },
    { name: t("footer.shootingRange"), href: "/shooting-range" },
  ];

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "#06101e" }}
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, #F47B20 30%, #F89B4B 50%, #F47B20 70%, transparent 100%)" }}
      />

      {/* Decorative mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(at 10% 20%, rgba(201,162,39,0.06) 0px, transparent 40%), radial-gradient(at 90% 80%, rgba(26,58,107,0.3) 0px, transparent 40%)",
        }}
      />

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/Faris-Group-Logo-twt.png"
                alt="Faris Group"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              {t("footer.description")}
            </p>
            <div className="flex items-start gap-2.5 text-white/40 text-xs mb-6">
              <Clock size={12} className="flex-shrink-0 mt-0.5" style={{ color: "#F47B20" }} />
              <span>{t("footer.workingHours")}</span>
            </div>
            <div className="flex items-center gap-2.5">
              {[
                { href: "https://www.facebook.com/FarisGroupSports", icon: <Facebook size={15} /> },
                { href: "https://www.linkedin.com/showcase/faris-group-sports", icon: <Linkedin size={15} /> },
                { href: "https://www.instagram.com", icon: <Instagram size={15} /> },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-heading font-bold text-xs uppercase tracking-[0.2em] mb-6 pb-3"
              style={{ borderBottom: "1px solid rgba(201,162,39,0.2)", color: "#e8e8e8" }}
            >
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-white/45 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span
                      className="w-0 group-hover:w-3 h-px transition-all duration-300 flex-shrink-0"
                      style={{ backgroundColor: "#F47B20" }}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3
              className="font-heading font-bold text-xs uppercase tracking-[0.2em] mb-6 pb-3"
              style={{ borderBottom: "1px solid rgba(201,162,39,0.2)", color: "#e8e8e8" }}
            >
              {t("footer.ourProducts")}
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-white/45 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span
                      className="w-0 group-hover:w-3 h-px transition-all duration-300 flex-shrink-0"
                      style={{ backgroundColor: "#F47B20" }}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-heading font-bold text-xs uppercase tracking-[0.2em] mb-6 pb-3"
              style={{ borderBottom: "1px solid rgba(201,162,39,0.2)", color: "#e8e8e8" }}
            >
              {t("footer.contactDetails")}
            </h3>
            <ul className="space-y-2">
              {contactPhones.map((p) => (
                <li key={p.label}>
                  <a
                    href={`tel:${p.label.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-white/45 text-xs hover:text-white transition-colors"
                  >
                    <Phone size={10} style={{ color: "#F47B20", flexShrink: 0 }} />
                    {p.label}{" "}
                    <span className="text-white/25">({p.country})</span>
                  </a>
                </li>
              ))}
              {["info@farisgroup.net", "faris@farisgroup.net"].map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-white/45 text-xs hover:text-white transition-colors"
                  >
                    <Mail size={10} style={{ color: "#F47B20", flexShrink: 0 }} />
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2 text-white/45 text-xs pt-1">
                <MapPin size={10} className="flex-shrink-0 mt-0.5" style={{ color: "#F47B20" }} />
                <div className="leading-relaxed">
                  <p>{t("footer.addressJeddah")}</p>
                  <p>{t("footer.addressAbuDhabi")}</p>
                  <p>{t("footer.addressMilano")}</p>
                  <p>{t("footer.addressCairo")}</p>
                  <p>{t("footer.addressManila")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="relative z-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>{t("footer.copyright")}</p>
          <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
            {t("footer.privacyPolicy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
