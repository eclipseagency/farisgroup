import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Faris Group",
  description:
    "Faris Group offers comprehensive sports facility services including maintenance, construction, supply, spare parts, planning, management and operation.",
};

const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="#1a8fc1" strokeWidth="2">
        <circle cx="32" cy="32" r="30" />
        <path d="M20 36c0-6.627 5.373-12 12-12s12 5.373 12 12" strokeLinecap="round" />
        <path d="M26 44l-4 4M38 44l4 4M32 32v4" strokeLinecap="round" />
        <circle cx="32" cy="28" r="3" />
      </svg>
    ),
    title: "MAINTENANCE",
    description:
      "Repairs and maintenance services to sports centers, fields and other sports facilities",
    href: "/maintenance",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="#1a8fc1" strokeWidth="2">
        <circle cx="32" cy="32" r="30" />
        <rect x="20" y="22" width="24" height="20" rx="2" />
        <path d="M26 22v-4M38 22v-4M20 30h24" strokeLinecap="round" />
        <circle cx="27" cy="36" r="2" fill="#1a8fc1" />
        <circle cx="37" cy="36" r="2" fill="#1a8fc1" />
      </svg>
    ),
    title: "SPARE PARTS",
    description:
      "Available in our inventory are a number of spare parts for bowling and sports equipment.",
    href: "/spare-parts",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="#1a8fc1" strokeWidth="2">
        <circle cx="32" cy="32" r="30" />
        <path d="M18 44l6-12 8 6 6-14 8 8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M44 20l-4 2 2 4" strokeLinecap="round" />
        <path d="M18 44h28" strokeLinecap="round" />
      </svg>
    ),
    title: "CONSTRUCTION",
    description:
      "From squash courts, to football fields, Faris Group delivers projects with distinction.",
    href: "/construction",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="#1a8fc1" strokeWidth="2">
        <circle cx="32" cy="32" r="30" />
        <path d="M20 40V28l12-10 12 10v12" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="27" y="34" width="10" height="6" rx="1" />
        <path d="M14 28l18-14 18 14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "SUPPLY",
    description:
      "A distributor of top quality brands for a range of sports and entertainment supplies and equipment.",
    href: "/supply",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="#1a8fc1" strokeWidth="2">
        <circle cx="32" cy="32" r="30" />
        <rect x="18" y="22" width="28" height="22" rx="2" />
        <path d="M18 30h28M24 22v-4M40 22v-4" strokeLinecap="round" />
        <path d="M24 36h8M24 40h5" strokeLinecap="round" />
      </svg>
    ),
    title: "PROJECT PLANNING",
    description:
      "Our team of professionals are ready and available to help you in planning your facility and assist you to turn your ideas into reality.",
    href: "/project-facility-planning",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="#1a8fc1" strokeWidth="2">
        <circle cx="32" cy="32" r="30" />
        <circle cx="32" cy="26" r="6" />
        <path d="M20 44c0-6.627 5.373-10 12-10s12 3.373 12 10" strokeLinecap="round" />
        <path d="M42 22a6 6 0 0 1 0 8M50 44c0-5.523-3.582-8-8-8" strokeLinecap="round" />
      </svg>
    ),
    title: "PROJECT MANAGEMENT",
    description:
      "With over 20 years of experience, Faris Group offers clients a complete solution to deliver their projects on time and within budget.",
    href: "/project-management",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" stroke="#1a8fc1" strokeWidth="2">
        <circle cx="32" cy="32" r="30" />
        <path d="M22 44V30a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14" strokeLinecap="round" />
        <path d="M18 44h28M32 28v-6M26 24l6-4 6 4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="34" width="8" height="6" rx="1" />
      </svg>
    ),
    title: "FACILITY OPERATION",
    description:
      "Faris Group offers sports facility operation contracts to assist our clients especially in the early days of operation.",
    href: "/sports-facility-operation",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[500px] overflow-hidden flex items-center justify-center">
        <img
          src="https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n-1-1.jpg"
          alt="Services Hero"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.55)" }} />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-heading font-black text-4xl md:text-6xl mb-6 leading-tight uppercase tracking-widest">
            Services
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Services</span>
          </nav>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">What We Do</span>
            <h2 className="section-title">OUR SERVICES</h2>
            <p className="text-gray-500 mt-4 max-w-3xl mx-auto text-base leading-relaxed">
              Our company can provide a comprehensive range of services such as sports facilities
              maintenance, construction, supply of sports equipment, spare parts, planning,
              management and operation for your project in order to meet your needs and achieve
              your goals in the best possible way.
            </p>
          </div>

          {/* Row 1 — 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {services.slice(0, 4).map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-heading font-bold text-sm uppercase tracking-widest mb-3" style={{ color: "#0a1628" }}>
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 3 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {services.slice(4).map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-heading font-bold text-sm uppercase tracking-widest mb-3" style={{ color: "#0a1628" }}>
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Contact Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://farisgroup.net/wp-content/uploads/2023/05/45518666_356687755099112_7281876042573152256_n-1-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,22,40,0.7)" }} />
        <div className="relative z-10 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            {/* Left dark panel */}
            <div className="p-10 flex flex-col justify-center" style={{ backgroundColor: "#0a1628" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9a227" }}>
                Get a quote from
              </p>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-white leading-tight mb-4">
                FARIS GROUP
              </h2>
              <p className="text-white font-semibold text-base mb-1">Let&apos;s get in touch</p>
              <p className="text-white/60 text-sm mb-8">
                We&apos;re open for any suggestion or just to have a chat
              </p>
              <div className="space-y-3">
                {[
                  "+966 55 668 8883 (KSA)",
                  "+971 55 336 6241 (UAE)",
                  "+39 328 819 7804 (Italy)",
                ].map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.split(" ")[0]}`}
                    className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                  >
                    <Phone size={14} style={{ color: "#c9a227" }} />
                    {phone}
                  </a>
                ))}
                {["info@farisgroup.net", "faris@farisgroup.net"].map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
                  >
                    <Mail size={14} style={{ color: "#c9a227" }} />
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Right form panel */}
            <div className="bg-white p-10">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-400 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 font-semibold text-white text-sm tracking-widest uppercase rounded transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#0a1628" }}
                >
                  Send a message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
