import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react";

const services = [
  { name: "Fitness & Gym", href: "/fitness-and-gym" },
  { name: "Bleachers & Seating", href: "/bleachers-and-seating" },
  { name: "Padel Court", href: "/padel-court" },
  { name: "Shooting Range", href: "/shooting-range" },
  { name: "Construction", href: "/construction" },
  { name: "Supply", href: "/supply" },
  { name: "Maintenance", href: "/maintenance" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1628" }} className="text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/Faris-Group-Logo-twt.png"
                alt="Faris Group - Total Sports Solutions"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              With over 20 years of experience, Faris Group is the leading supplier of superior
              quality sports and entertainment equipment in the Middle East — official distributor
              of top international brands across 50+ countries.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/FarisGroupSports"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "#1a3a6b" }}
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.linkedin.com/showcase/faris-group-sports"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "#1a3a6b" }}
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "#1a3a6b" }}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5" style={{ backgroundColor: "#c9a227" }}></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-gold transition-colors group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" style={{ color: "#c9a227" }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-10 h-0.5" style={{ backgroundColor: "#c9a227" }}></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-gray-400 text-sm hover:text-gold transition-colors group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" style={{ color: "#c9a227" }} />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-0.5" style={{ backgroundColor: "#c9a227" }}></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#c9a227" }} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Mosadia 3, Madinah Road<br />
                  Jeddah 21573, Saudi Arabia
                </span>
              </li>
              <li>
                <a
                  href="tel:+966556688883"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold transition-colors"
                >
                  <Phone size={16} style={{ color: "#c9a227" }} />
                  +966 55 668 8883
                </a>
              </li>
              <li>
                <a
                  href="tel:+971553366241"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold transition-colors"
                >
                  <Phone size={16} style={{ color: "#c9a227" }} />
                  +971 55 336 6241 (UAE)
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@farisgroup.net"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold transition-colors"
                >
                  <Mail size={16} style={{ color: "#c9a227" }} />
                  info@farisgroup.net
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Faris Group. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-600 text-xs">
              <span>KSA · UAE · Italy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
