import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Our Projects", href: "/projects" },
  { name: "Contact", href: "/contact-us" },
];

const productLinks = [
  { name: "Bowling Alley", href: "/construction" },
  { name: "Padel Court", href: "/padel-court" },
  { name: "Fitness & Gym", href: "/fitness-and-gym" },
  { name: "Playground", href: "/products" },
  { name: "Climbing Wall", href: "/construction" },
  { name: "Shooting Range", href: "/shooting-range" },
];

const contactPhones = [
  { label: "+966 53 800 7018", country: "KSA" },
  { label: "+971 55 336 6241", country: "UAE" },
  { label: "+39 328 819 7804", country: "Italy" },
  { label: "+20 112 956 0357", country: "Egypt" },
  { label: "+63 945 736 0099", country: "Philippines" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1628" }} className="text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/Faris-Group-Logo-twt.png"
                alt="Faris Group"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              With over 20 years of experience, Faris Group is the leading supplier of superior
              quality sports and entertainment equipment in the Middle East.
            </p>
            <div className="flex items-start gap-2 text-gray-400 text-xs mb-5">
              <Clock size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#c9a227" }} />
              <span>Saturday – Thursday: 08:00 AM – 05:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/FarisGroupSports" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "#1a3a6b" }}>
                <Facebook size={16} />
              </a>
              <a href="https://www.linkedin.com/showcase/faris-group-sports" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "#1a3a6b" }}>
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "#1a3a6b" }}>
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-gray-700">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-gray-700">
              Our Products
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-gray-700">
              Contact Details
            </h3>
            <ul className="space-y-2.5">
              {contactPhones.map((p) => (
                <li key={p.label}>
                  <a href={`tel:${p.label.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-gray-400 text-xs hover:text-white transition-colors">
                    <Phone size={11} style={{ color: "#c9a227" }} />
                    {p.label} <span className="text-gray-600">({p.country})</span>
                  </a>
                </li>
              ))}
              {["info@farisgroup.net", "faris@farisgroup.net"].map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`}
                    className="flex items-center gap-2 text-gray-400 text-xs hover:text-white transition-colors">
                    <Mail size={11} style={{ color: "#c9a227" }} />
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2 text-gray-400 text-xs pt-1">
                <MapPin size={11} className="flex-shrink-0 mt-0.5" style={{ color: "#c9a227" }} />
                <div className="leading-relaxed">
                  <p>Jeddah - Riyadh - Saudi Arabia</p>
                  <p>Abu Dhabi - United Arab Emirates</p>
                  <p>Milano - Italy</p>
                  <p>Cairo - Egypt</p>
                  <p>Metro Manila, Philippines</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© Copyright 2023 - FarisGroup | All Rights Reserved. Powered By Eclipse</p>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
