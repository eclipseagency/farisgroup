"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail } from "lucide-react";

type NavChild = {
  name: string;
  href: string;
  external?: boolean;
  children?: { name: string; href: string }[];
};

type NavItem = {
  name: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Padel Court", href: "/padel-court" },
      { name: "Billiards", href: "/billiards" },
      { name: "Squash Courts", href: "/squash-courts" },
      { name: "SPA & Pool", href: "/spa-pool" },
      { name: "Bowling", href: "/bowling" },
      { name: "Climbing Wall", href: "/climbing-wall" },
      { name: "Wall Insulation", href: "/wall-insulation" },
      {
        name: "Sport Equipment",
        href: "/sport-equipment",
        children: [
          { name: "Fullscreen Mode", href: "https://farisgroup.net/themencode-pdf-viewer/?file=https://farisgroup.net/wp-content/uploads/2023/05/Patentverwag-Brochure-1.pdf#zoom=auto" },
        ],
      },
      { name: "Urban Furniture", href: "https://farisgroup.net/themencode-pdf-viewer/?file=https://farisgroup.net/wp-content/uploads/2023/05/MANTIS-zlozenka_WEB.pdf#zoom=auto", external: true },
      {
        name: "Fitness & Gym",
        href: "/fitness-and-gym",
        children: [
          { name: "Cardio Machines", href: "/cardio-machines" },
          { name: "Strength Machines", href: "/strength-machines" },
          { name: "Flexibility Machine", href: "https://farisgroup.net/wp-content/uploads/2023/05/CANALI-Fitness-Faris-Group-1.pdf#page=22" },
          { name: "Fullscreen Mode", href: "https://farisgroup.net/themencode-pdf-viewer/?file=https://farisgroup.net/wp-content/uploads/2023/05/FITNESS-ACCESSORIES-1.pdf#zoom=auto" },
        ],
      },
      { name: "Supply and Installation of Shooting Range Equipment", href: "/shooting-range" },
      { name: "Playground", href: "/playground" },
      { name: "Bleachers & Seating", href: "/bleachers-seating" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Maintenance", href: "/maintenance" },
      { name: "Spare Parts", href: "/spare-parts" },
      { name: "Project Management", href: "/project-management" },
      { name: "Supply", href: "/supply" },
      { name: "Project / Facility Planning", href: "/project-facility-planning" },
      { name: "Construction", href: "/construction" },
      { name: "Sports Facility Operation", href: "/sports-facility-operation" },
    ],
  },
  { name: "Our Projects", href: "/projects" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="text-white text-xs py-2 hidden md:block" style={{ backgroundColor: "rgba(6,12,24,0.95)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+97142223333" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={12} />
              <span>+966 55 668 8883</span>
            </a>
            <a href="mailto:info@farisgroup.net" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={12} />
              <span>info@farisgroup.net</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">KSA · UAE · Italy | Leading Sports Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500`}
        style={{
          backgroundColor: scrolled ? "rgba(8,16,32,0.97)" : "rgba(10,22,40,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="https://farisgroup.net/wp-content/uploads/2023/05/Faris-Group-Logo-twt.png"
                alt="Faris Group - Total Sports Solutions"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => { setActiveDropdown(null); setActiveSubDropdown(null); }}
                >
                  {item.children ? (
                    <Link href={item.href} className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/5">
                      {item.name}
                      <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Level-1 Dropdown */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-64 shadow-2xl rounded-b-xl py-2 z-50" style={{ backgroundColor: "rgba(8,18,36,0.98)", backdropFilter: "blur(24px)", borderTop: "2px solid #F47B20", border: "1px solid rgba(255,255,255,0.08)", borderTopColor: "#F47B20" }}>
                      {item.children.map((child) => (
                        <div
                          key={child.name}
                          className="relative group"
                          onMouseEnter={() => child.children && setActiveSubDropdown(child.name)}
                          onMouseLeave={() => child.children && setActiveSubDropdown(null)}
                        >
                          {child.children ? (
                            <>
                              <div className="flex items-center justify-between px-4 py-2.5 text-sm text-white/75 hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
                                <Link href={child.href} className="flex-1">
                                  {child.name}
                                </Link>
                                <ChevronRight size={14} className="text-gold" />
                              </div>
                              {/* Level-2 Dropdown */}
                              {activeSubDropdown === child.name && (
                                <div className="absolute left-full top-0 w-48 shadow-xl rounded-r-lg py-2 z-50" style={{ backgroundColor: "rgba(8,18,36,0.98)", backdropFilter: "blur(24px)", borderTop: "2px solid #F47B20", border: "1px solid rgba(255,255,255,0.08)", borderTopColor: "#F47B20" }}>
                                  {child.children.map((sub) =>
                                    sub.href.startsWith("http") ? (
                                      <a
                                        key={sub.name}
                                        href={sub.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2.5 text-sm text-white/75 hover:bg-white/5 hover:text-white transition-colors"
                                      >
                                        {sub.name}
                                      </a>
                                    ) : (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className="block px-4 py-2.5 text-sm text-white/75 hover:bg-white/5 hover:text-white transition-colors"
                                      >
                                        {sub.name}
                                      </Link>
                                    )
                                  )}
                                </div>
                              )}
                            </>
                          ) : child.external ? (
                            <a
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2.5 text-sm text-white/75 hover:bg-white/5 hover:text-white transition-colors"
                            >
                              {child.name}
                            </a>
                          ) : (
                            <Link
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-white/75 hover:bg-white/5 hover:text-white transition-colors"
                            >
                              {child.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Arabic toggle */}
              <button
                className="ml-2 px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/5"
              >
                العربية
              </button>
              {/* OUR STORE */}
              <a
                href="http://farisstore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-6 py-2.5 text-sm font-semibold text-white rounded-sm transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#F47B20" }}
              >
                OUR STORE
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-white/70 hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden shadow-lg" style={{ backgroundColor: "rgba(8,18,36,0.99)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="container-custom py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-sm font-semibold text-white/80 hover:text-white uppercase tracking-wider"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.children.map((child) => (
                        <div key={child.name}>
                          {child.external ? (
                            <a
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-6 py-2 text-sm text-white/70 hover:text-white"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </a>
                          ) : (
                            <Link
                              href={child.href}
                              className="block px-6 py-2 text-sm text-white/70 hover:text-white"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          )}
                          {child.children?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-10 py-1.5 text-sm text-white/50 hover:text-white"
                              onClick={() => setIsOpen(false)}
                            >
                              — {sub.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact-us"
                className="block text-center mt-4 px-6 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: "#F47B20" }}
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
