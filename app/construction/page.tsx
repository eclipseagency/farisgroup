import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Construction - Faris Group",
  description:
    "Faris Group delivers complete sports facility construction from squash courts and home cinemas to bowling centers and football fields.",
};

const constructionTypes = [
  {
    title: "Squash Courts",
    description:
      "State-of-the-art squash courts built to international standards with excellent ball rebound and optimal playing conditions.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    features: ["International standard dimensions", "Glass back wall option", "Optimized acoustics", "Professional flooring"],
  },
  {
    title: "Padel Courts",
    description:
      "Complete padel court construction including foundation, structure, glass walls, flooring, and lighting systems.",
    image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&q=80",
    features: ["VISION, PANORAMIC, FORTE", "Artificial turf installation", "LED lighting", "Fencing systems"],
  },
  {
    title: "Football Fields",
    description:
      "Full-sized and mini football fields with natural or artificial turf, lighting, and spectator facilities.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    features: ["Natural & artificial turf", "Floodlighting", "Drainage systems", "Goal posts & equipment"],
  },
  {
    title: "Basketball Courts",
    description:
      "Indoor and outdoor basketball courts to international FIBA standards with professional flooring and equipment.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
    features: ["FIBA-certified", "Hardwood or sport court", "Backboard systems", "Court markings"],
  },
  {
    title: "Bowling Centers",
    description:
      "Complete bowling center construction and installation including lanes, automatic scoring, and recreational areas.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    features: ["Professional lanes", "Automated scoring", "Pinsetters", "Ball return systems"],
  },
  {
    title: "Home Cinemas & Entertainment",
    description:
      "High-end home cinema and entertainment room construction with premium AV systems and soundproofing.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    features: ["Professional AV systems", "Acoustic treatment", "Custom seating", "Smart home integration"],
  },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "Initial consultation to understand your vision, requirements, and budget." },
  { step: "02", title: "Design", description: "Our experts create detailed designs and 3D renderings for your approval." },
  { step: "03", title: "Planning", description: "Comprehensive project planning including timelines, materials, and permits." },
  { step: "04", title: "Construction", description: "Professional construction by our experienced teams using premium materials." },
  { step: "05", title: "Installation", description: "Equipment installation, testing, and system commissioning." },
  { step: "06", title: "Handover", description: "Full project handover with training, documentation, and warranty support." },
];

export default function ConstructionPage() {
  return (
    <>
      <PageHeader
        title="Construction"
        subtitle="Full Build Solutions"
        description="Faris Group delivers complete sports facility construction — from squash courts and home cinemas to bowling centers and football fields."
        breadcrumbs={[{ label: "Construction" }]}
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-subtitle block">Build Services</span>
              <h2 className="section-title">
                Complete Sports Facility{" "}
                <span style={{ color: "#c9a227" }}>Construction</span>
              </h2>
              <p className="text-gray-600 mt-5 leading-relaxed">
                Faris Group delivers project construction across a broad scope — from squash courts
                and home cinemas to bowling centers and football fields. Our construction division
                handles everything from initial design and planning to final handover.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                With our team of experienced engineers, architects, and project managers, we ensure
                every facility is built to the highest international standards on time and within
                budget.
              </p>
              <div className="mt-8 space-y-2">
                {[
                  "End-to-end project management",
                  "International standard compliance",
                  "Experienced engineering team",
                  "Premium materials and equipment",
                  "On-time delivery guarantee",
                  "Post-construction support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "#c9a227" }} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Construction Types */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">What We Build</span>
            <h2 className="section-title">
              Construction <span style={{ color: "#c9a227" }}>Specialties</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 60%)" }} />
                  <h3 className="absolute bottom-3 left-4 font-heading font-bold text-lg text-white">{type.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{type.description}</p>
                  <ul className="space-y-1">
                    {type.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle size={12} style={{ color: "#c9a227" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-subtitle block">How We Work</span>
            <h2 className="section-title">
              Our Construction <span style={{ color: "#c9a227" }}>Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className="font-heading font-black text-4xl flex-shrink-0 leading-none"
                  style={{ color: "rgba(201,162,39,0.3)" }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "#1a3a6b" }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-white font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9a227" }}
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
