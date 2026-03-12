"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Padel Court", href: "/padel-court" },
      { name: "Billiards", href: "/products" },
      { name: "Squash Courts", href: "/products" },
      { name: "SPA & Pool", href: "/products" },
      { name: "Bowling", href: "/construction" },
      { name: "Climbing Wall", href: "/construction" },
      { name: "Wall Insulation", href: "/products" },
      { name: "Sport Equipment", href: "/products/sports-equipment" },
      { name: "Urban Furniture", href: "/products" },
      { name: "Fitness & Gym", href: "/fitness-and-gym" },
      { name: "Supply and Installation of Shooting Range Equipment", href: "/shooting-range" },
      { name: "Playground", href: "/products" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Maintenance", href: "/maintenance" },
      { name: "Spare Parts", href: "/services" },
      { name: "Project Management", href: "/services" },
      { name: "Supply", href: "/supply" },
      { name: "Project / Facility Planning", href: "/services" },
      { name: "Construction", href: "/construction" },
      { name: "Sports Facility Operation", href: "/services" },
    ],
  },
  { name: "Our Projects", href: "/projects" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      <div className="bg-navy-900 text-white text-xs py-2 hidden md:block" style={{ backgroundColor: "#0a1628" }}>
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
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white shadow-sm"
        }`}
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
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-50">
                      {item.name}
                      <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-50"
                      style={{ "--hover-color": "#1a3a6b" } as React.CSSProperties}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl border-t-2 border-gold rounded-b-lg py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                          style={{ "--tw-text-opacity": "1" } as React.CSSProperties}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Arabic toggle */}
              <button
                className="ml-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-50"
              >
                العربية
              </button>
              {/* OUR STORE */}
              <a
                href="https://farisgroup.net"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-6 py-2.5 text-sm font-semibold text-white rounded-sm transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#c9a227" }}
              >
                OUR STORE
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="container-custom py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        {item.name}
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-6 py-2 text-sm text-gray-700 hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
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
                style={{ backgroundColor: "#c9a227" }}
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
