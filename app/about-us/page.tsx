import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle, Award, Globe, Users, Target, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Faris Group",
  description:
    "Learn about Faris Group — the Middle East's leading sports equipment supplier with 20+ years of experience, serving 50+ countries worldwide.",
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering only the highest quality products and services.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "We approach every project with meticulous attention to detail and accuracy.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Our network spans 50+ countries, ensuring worldwide access to our solutions.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build long-term relationships with our clients based on trust and reliability.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We continuously evolve to offer the latest sports technology and solutions.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description:
      "Our business is built on a foundation of honesty, transparency, and ethical practices.",
  },
];

const milestones = [
  { year: "2000s", title: "Foundation", description: "Faris Group established as a sports equipment supplier in the Middle East." },
  { year: "2005", title: "Regional Expansion", description: "Expanded operations to cover all GCC countries and the wider Middle East region." },
  { year: "2010", title: "International Brands", description: "Became official distributor for multiple top international sports brands." },
  { year: "2015", title: "Construction Division", description: "Launched full sports facility construction services including courts and stadiums." },
  { year: "2018", title: "Padel Revolution", description: "Introduced padel court solutions, becoming a leading supplier across 50+ countries." },
  { year: "2020+", title: "Total Solutions", description: "Evolved into a complete sports solutions provider offering end-to-end services." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Faris Group"
        subtitle="Our Story"
        description="With over 20 years of experience, we are the Middle East's trusted partner for total sports solutions — from equipment supply to full facility construction."
        breadcrumbs={[{ label: "About Us" }]}
        backgroundImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80"
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-subtitle block">Who We Are</span>
              <h2 className="section-title">
                The Middle East&apos;s Premier{" "}
                <span style={{ color: "#c9a227" }}>Sports Solutions</span> Company
              </h2>
              <p className="text-gray-600 mt-5 leading-relaxed">
                Faris Group is an established name in the Sports and Leisure industry, recognized as
                the leading supplier of superior quality sports and entertainment equipment in the
                Middle East. Headquartered in Jeddah, Saudi Arabia, with offices in Riyadh,
                Dammam, Abu Dhabi (UAE), and Milano (Italy), we operate as an official distributor
                of top international brands.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed italic border-l-4 pl-4" style={{ borderColor: "#c9a227" }}>
                &ldquo;To be the premier provider of sports and leisure solutions, transforming the
                industry through innovation and superior quality, while enhancing the overall
                experience for individuals and communities.&rdquo;
              </p>
              <div className="mt-8 grid grid-cols-1 gap-3">
                {[
                  "Official distributor of top international brands",
                  "20+ years of industry experience in the Middle East",
                  "Offices in KSA, UAE, and Italy",
                  "Qualified vendor for ARAMCO, DAMAC, SABIC & government bodies",
                  "Complete supply, construction, and maintenance",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "#c9a227" }} className="flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
                alt="Faris Group Sports Facility"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div
                className="absolute -bottom-6 -right-6 p-6 rounded-lg shadow-xl text-white"
                style={{ backgroundColor: "#c9a227" }}
              >
                <div className="text-4xl font-black font-heading">20+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Our Values */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">What Drives Us</span>
            <h2 className="section-title">
              Our Core <span style={{ color: "#c9a227" }}>Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(201,162,39,0.1)" }}
                  >
                    <Icon size={24} style={{ color: "#c9a227" }} />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3" style={{ color: "#0a1628" }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">Our Journey</span>
            <h2 className="section-title">
              Company <span style={{ color: "#c9a227" }}>Milestones</span>
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden lg:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div
                      className="inline-block bg-white border-2 rounded-lg p-6 shadow-lg max-w-sm text-left"
                      style={{ borderColor: "#c9a227" }}
                    >
                      <div
                        className="text-sm font-bold tracking-widest uppercase mb-2"
                        style={{ color: "#c9a227" }}
                      >
                        {milestone.year}
                      </div>
                      <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "#1a3a6b" }}>
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div
                    className="hidden lg:flex w-5 h-5 rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0"
                    style={{ backgroundColor: "#c9a227" }}
                  />
                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
